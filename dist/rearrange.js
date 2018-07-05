chrome.commands.onCommand.addListener(function (command) {
  var tabCount = { all: 0, pinned: 0 };

  var countAll = function (tabs) {
    tabCount.all = tabs.length;
  };

  var countPinned = function (tabs) {
    tabCount.pinned = tabs.length;
  };

  var createRange = function (value, step, count) {
    var list = [];
    for (var i = 0; i < count; i++, value += step) {
      list.push(value);
    }
    return list;
  }

  var movePinnedTabs = function (tabs) {
    moveTabs(tabs, 0, tabCount.pinned - 1);
  }

  var moveUnpinnedTabs = function (tabs) {
    moveTabs(tabs, tabCount.pinned, tabCount.all - 1);
  }

  var moveTabs = function (tabs, leftBoundary, rightBoundary) {
    var newPositions = [];
    if ('move-selected-tabs-left' == command) {
      // if wrapping around, we need to move only one tab,
      // even if more than one is selected
      if (tabs[0].index === leftBoundary) {
        chrome.tabs.move(tabs[0].id, { index: rightBoundary});
        return;
      }
      newPositions = tabs.map(tab => tab.index - 1);
    } else if ('move-selected-tabs-right' == command) {
      // if wrapping around, we need to move only one tab,
      // even if more than one is selected
      if (tabs[tabs.length - 1].index === rightBoundary) {
        chrome.tabs.move(tabs[tabs.length - 1].id, { index: leftBoundary });
        return;
      }
      tabs.reverse(); // when moving right, process tabs from right to left
      newPositions = tabs.map(tab => tab.index + 1);
    } else if ('move-selected-tabs-to-front' == command) {
      newPositions = createRange(leftBoundary, 1, tabs.length);
    } else if ('move-selected-tabs-to-end' == command) {
      tabs.reverse(); // when moving right, process tabs from right to left
      newPositions = createRange(rightBoundary, -1, tabs.length);
    }
    for (var i = 0; i < newPositions.length; i++) {
      chrome.tabs.move(tabs[i].id, { index: newPositions[i] });
    }
  }

  chrome.tabs.query({ currentWindow: true }, countAll);
  chrome.tabs.query({ currentWindow: true, pinned: true }, countPinned);
  chrome.tabs.query({ currentWindow: true, highlighted: true, pinned: true }, movePinnedTabs);
  chrome.tabs.query({ currentWindow: true, highlighted: true, pinned: false }, moveUnpinnedTabs);
});
