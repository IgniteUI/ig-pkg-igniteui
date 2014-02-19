define (["./_default-component-plugin"], function (DefaultPlugin) {
	var IgniteUIDialogPlugin = IgniteUIDialogPlugin || DefaultPlugin.extend({
		init: function (options) {
			this._super(options);
		},
		getName: function () {
			return "igDialog";
		},
		_getWidgetName: function () {
			return "igDialog";
		},
		getCodeEditorMarkupSnippet: function (descriptor) {
			var snippet = {
				codeString: descriptor.ide._tabStr(descriptor.extraIndent + 1) + "<div id=\"" + descriptor.id + "\">\n" +
					descriptor.ide._tabStr(descriptor.extraIndent + 2) + "<div class='ui-igdialog-content'></div>\n" +
					descriptor.ide._tabStr(descriptor.extraIndent + 1) + "</div>\n", 
				lineCount: 3,
				extraMarkers: [
					{ rowOffset: 1, colOffset: 0, rowCount: 1, colCount: 0 }
				]
			};
			return snippet;
		},
		initComponent: function (descriptor) {
			var name = this._getWidgetName(descriptor.type);
			if (window.frames[0].$(descriptor.placeholder)[name]) { 
				window.frames[0].$(descriptor.placeholder)[name](descriptor.options);
				window.frames[0].$(descriptor.placeholder).children('ui-igdialog-content').attr('data-design-visible-child', true);
			}
		}
	});
	return IgniteUIDialogPlugin;
});
