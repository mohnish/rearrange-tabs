chrome.commands.onCommand.addListener(function(command) {
  var queryInfo = { active: true, currentWindow: true, pinned: false };
  var move = ('move-tab-left' == command) ? -1 : 1;

  chrome.tabs.query(queryInfo, function(tabs) {
    var currentTab = tabs[0];
    var id = currentTab.id;
    var index = currentTab.index;
    var moveProperties = { index: (index + move) };
    chrome.tabs.move(id, moveProperties);
  });
});
