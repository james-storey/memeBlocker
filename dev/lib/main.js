var self = require("sdk/self");
var contextMenu = require("sdk/context-menu");
var menuItem = contextMenu.Item({
	label: "Log Selection",
	context: contextMenu.SelectionContext(),
	contentScript: 'self.on("click", function () {' +
		'  var text = window.getSelection().toString();' +
		'  self.postMessage(text);' +
		'});',
	onMessage: function (selectionText) {
		console.log(selectionText);
	}
});


//blocker module
var Blocker = require("./blocker.js").construct();
var runScript = function (tab) {
	tab.attach({
		contentScript: Blocker.log()
	});
}
require("sdk/tabs").on("ready", runScript);
