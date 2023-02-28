chrome.runtime.onInstalled.addListener(async ({ reason, previousVersion }) => {
  let version;

  try {
    version = Number(previousVersion.split('.')[0]);
  } catch(e) {
    version = 3;
  }

  // Display only when updating from v2 to v3
  if (reason == 'update' && version == 2) {
    await chrome.tabs.create({ 'url': chrome.runtime.getURL('updated.html' )});
  }
});

chrome.commands.onCommand.addListener(async (cmd) => {
  const MOVE_LEFT = 'rtl';
  const MOVE_RIGHT = 'rtr';
  const MOVE_FRONT = 'rtf';
  const MOVE_BACK = 'rtb';

  let all = await chrome.tabs.query({ currentWindow: true });
  let pinned = await chrome.tabs.query({ currentWindow: true, pinned: true });
  let highlightedTabs = await chrome.tabs.query({ currentWindow: true, highlighted: true, pinned: false });
  let highlightedPinnedTabs = await chrome.tabs.query({ currentWindow: true, highlighted: true, pinned: true });

  // We attempt to move pinned tabs only if they're available
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
 * Each tab has its own range. This depends on the type, pinned
 * or unpinned. It also depends on how many tabs are currently
 * highlighted.
 * pinned tabs: <position in the highlighted pinned tabs list> to <right most end of the pinned tabs>
 * unpinned tabs: <position after pinned tabs + position in the highlighted unpinned tabs list> to <position in the highlighted unpinned tabs list from the right most end>
 * When moving left, we update highlighted tabs from left to right, the natural order
 * When moving right, we update highlighted tabs from right to left - this avoids a lot of UI bugs
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
