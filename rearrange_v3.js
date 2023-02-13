// chrome.action.onClicked.addListener
chrome.commands.onCommand.addListener(async (cmd) => {
  const MOVE_LEFT = 'rtl';
  const MOVE_RIGHT = 'rtr';
  const MOVE_FRONT = 'rtf';
  const MOVE_BACK = 'rtb';
  const PINNED = 'pinned';

  let all = await chrome.tabs.query({ currentWindow: true });
  let pinned = await chrome.tabs.query({ currentWindow: true, pinned: true });
  let highlightedPinnedTabs = await chrome.tabs.query({ currentWindow: true, highlighted: true, pinned: true });
  let highlightedUnpinnedTabs = await chrome.tabs.query({ currentWindow: true, highlighted: true, pinned: false });
  let updated = [];

  switch (cmd) {
    case MOVE_LEFT:
      console.log('left');
      updated = moveLeft(highlightedPinnedTabs, 0);
      updated += moveLeft(highlightedPinnedTabs, pinned.length);
      moveTabs(updated);
      break;
    case MOVE_RIGHT:
      console.log('right');
      updated = moveLeft(highlightedPinnedTabs, pinned.length - 1);
      updated += moveLeft(highlightedPinnedTabs, all.length - 1);
      moveTabs(updated);
      break;
    case MOVE_FRONT:
      console.log('front');
      updated = tabs.map((tab) => [tab.id, all.length - 1]);
      moveTabs(updated);
      break;
    case MOVE_BACK:
      console.log('back');
      updated = tabs.map((tab) => [tab.id, pinned.length]);
      moveTabs(updated);
      break;
    default:
      console.log('none of the above');
  }
});

function moveLeft(tabs, boundary) {
  tabs.map((tab) => [tab.id, Math.max(boundary, tab.index - 1)]);
}

function moveRight(tabs, boundary) {
  tabs.map((tab) => [tab.id, Math.min(boundary, tab.index + 1)]);
}

function moveTab(id, pos) {
  chrome.tabs.move(id, { index: pos });
}

function moveTabs(tabs) {
  for (let [id, pos] of tabs) {
    console.log(id, pos);
    moveTab(id, pos);
  }
}
