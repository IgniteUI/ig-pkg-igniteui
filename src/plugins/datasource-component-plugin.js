define (["./_default-component-plugin"], function (DefaultPlugin) {
	var IgniteUIDataSourcePlugin = IgniteUIDataSourcePlugin || DefaultPlugin.extend({
		init: function (options) {
			this._super(options);
		},
		getName: function () {
			return "igDataSource";
		},
		getMarkup: function (descriptor) {
			return null; // this is a non-visual component so it doesn't have any markup
		},
		getCodeEditorScriptSnippet: function (descriptor) {
			var code = "\t\t\t\tvar " + descriptor.id + " = new $.ig.DataSource({\n";
			// now write options / settings
			code += "\n\t\t\t\t});\n";
			return {
				codeString: code,
				lineCount: 3
			};
		},
		getCodeEditorMarkupSnippet: function (descriptor) {
			return null;
		},
		addExtraMarkers: function (descriptor) {
			
		},
		requiresInitialization: function () {
			return true;
		},
		initComponent: function (descriptor) {

		},
		update: function (descriptor) {

		}
	});
	return IgniteUIDataSourcePlugin;
});
