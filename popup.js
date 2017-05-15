function getCurrentTabUrl(callback) {
  var queryInfo = {
	active: true,
	currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
	var tab = tabs[0];
	var url = tab.url;

	callback(url);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  getCurrentTabUrl(function(url) {
	var regexRes = url.match(/bittrex.com\/Market\/Index\?MarketName=(.*)/);
	var marketName;

	if (regexRes) {
	  marketName = regexRes[1];
	  // TODO: use chrome api to open tab but heh, window.open works..
	  window.open('https://bittrex.com/market/MarketStandardChart?marketName=' + marketName, '_blank');
	}
  });
});
