chrome.commands.onCommand.addListener(async (cmd) => {
  const MOVE_LEFT = 'rtl';
  const MOVE_RIGHT = 'rtr';
  const MOVE_FRONT = 'rtf';
  const MOVE_BACK = 'rtb';
  const PINNED = 'pinned';

  let all = await chrome.tabs.query({ currentWindow: true });
  let pinned = await chrome.tabs.query({ currentWindow: true, pinned: true });
  let highlightedTabs = await chrome.tabs.query({ currentWindow: true, highlighted: true, pinned: false });
  let highlightedPinnedTabs = await chrome.tabs.query({ currentWindow: true, highlighted: true, pinned: true });

  switch (cmd) {
    case MOVE_LEFT:
      if (highlightedPinnedTabs.length > 0) moveLeft(highlightedPinnedTabs, 0);
      moveLeft(highlightedTabs, pinned.length);
      break;
    case MOVE_RIGHT:
      if (highlightedPinnedTabs.length > 0) moveRight(highlightedPinnedTabs, pinned.length);
      moveRight(highlightedTabs, all.length);
      break;
    case MOVE_BACK:
      if (highlightedPinnedTabs.length > 0) moveBack(highlightedPinnedTabs, pinned.length);
      moveBack(highlightedTabs, all.length);
      break;
    case MOVE_FRONT:
      if (highlightedPinnedTabs.length > 0) moveFront(highlightedPinnedTabs, 0);
      moveFront(highlightedTabs, pinned.length);
      break;
    default:
  }
});

/**
 * Range for:
 * TODO (MT): flesh this out
 * pinned tabs: position in the highlighted tabs to pinned.length - 1
 * unpinned tabs: pinned.length to allTabs.length - 1
 * When moving left, we update highlighted tabs from left to right
 * When moving right, we update highlighted tabs from right to left
*/

function moveLeft(highlightedTabs, offset) {
  moveTabs(highlightedTabs.map((highlightedTab, i) => [highlightedTab.id, Math.max(offset + i, highlightedTab.index - 1)]));
}

function moveFront(highlightedTabs, offset) {
  moveTabs(highlightedTabs.map((highlightedTab, i) => [highlightedTab.id, offset + i]));
}

function moveRight(highlightedTabs, lengthOfAllTabsOfCurrentType) {
  let offset = lengthOfAllTabsOfCurrentType - highlightedTabs.length;
  let tabs = Array(highlightedTabs.length);

  for (let i = highlightedTabs.length - 1; i >= 0; i--) {
    tabs[highlightedTabs.length - i - 1] = [highlightedTabs[i].id, Math.min(offset + i, highlightedTabs[i].index + 1)];
  }

  moveTabs(tabs);
}

function moveBack(highlightedTabs, lengthOfAllTabsOfCurrentType) {
  let tabs = Array(highlightedTabs.length);

  for (let i = highlightedTabs.length - 1; i >= 0; i--) {
    let idx = highlightedTabs.length - i - 1;
    tabs[idx] = [highlightedTabs[i].id, lengthOfAllTabsOfCurrentType - idx - 1];
  }

  moveTabs(tabs);
}

function moveTab(id, pos) {
  chrome.tabs.move(id, { index: pos });
}

function moveTabs(tabs) {
  for (let [id, pos] of tabs) {
    moveTab(id, pos);
  }
}
