chrome.commands.onCommand.addListener(function (command) {
  var queryInfo = { currentWindow: true };
  var move;
  if ('move-tab-left' == command) {
    move = -1;
  } else if ('move-tab-right' == command) {
    move = 1;
  } else {
    move = 0;
  }
  var tabCount = {
    all: 0,
    pinned: 0
  };

  var countAll = function (tabs) {
    tabCount.all = tabs.length;
  };

  var countPinned = function (tabs) {
    tabCount.pinned = tabs.length;
  };

  var calculatePosition = function (leftBoundary, rightBoundary, targetPosition) {
    if (targetPosition >= rightBoundary) {
      // if tab is the rightmost and user tries to move it to the right, move it 
      // to the begining. also handles pinned tabs.
      targetPosition = leftBoundary;
    } else if (targetPosition < leftBoundary) {
      // if tab is the leftmost tab move it to the rightmost position. also handles pinned tabs.
      targetPosition = rightBoundary - 1;
    }
    return targetPosition;
  }

  var moveTab = function (tab) {
    var id = tab.id;
    var moveIndex = tab.index + move;
    if (tab.pinned) {
      // if tab is pinned, move it within confines of pinned tabs - all pinned tabs are at leftmost position
      moveIndex = calculatePosition(0, tabCount.pinned, moveIndex);
    } else {
      // if it is regular tab, move it between pinned tabs and rightmost tab
      moveIndex = calculatePosition(tabCount.pinned, tabCount.all, moveIndex);
    }
    var moveProperties = { index: moveIndex };
    chrome.tabs.move(id, moveProperties);
  };

  var moveTabs = function (tabs) {
    // move tabs to the left
    if (move == -1) {
      for (var i = 0, len = tabs.length; i < len; i++) {
        moveTab(tabs[i]);
      }
    } else if (move == 1) { // move tabs to the right
      for (var i = tabs.length; i > 0; i--) {
        moveTab(tabs[i - 1]);
      }
    } else { // move tabs to new window
      // first tab to be moved, the adopter of the new window
      const firstTab = tabs[0].id;
      // other tabs to be moved
      const tabIds = tabs.slice(1).map(tab => tab.id);
      const createData = { tabId: firstTab };
      chrome.windows.create(createData, function(newWindow) {
        const moveProperties = { windowId: newWindow.id, index: 0 };
        chrome.tabs.move(tabIds, moveProperties);
      });
    }
  };

  chrome.tabs.query({ currentWindow: true }, countAll);
  chrome.tabs.query({ currentWindow: true, pinned: true }, countPinned);
  chrome.tabs.query({ currentWindow: true, highlighted: true }, moveTabs);

});
