define (["./_default-component-plugin"], function (DefaultPlugin) {
	var IgniteUIBorderLayoutPlugin = IgniteUIBorderLayoutPlugin || DefaultPlugin.extend({
		init: function (options) {
			this._super(options);
		},
		getName: function () {
			return "igLayoutManager";
		},
		_getWidgetName: function () {
			return "igLayoutManager";
		},
		// retrieves the initial markup for the current component
		getMarkup: function (descriptor) {
			if (descriptor.type === "flowLayout") {
				return "<div style=\"border: 1px solid #eee; height: 310px; width: 650px;\">\n\t\t<ul id=\"" + descriptor.id + "\"></ul>\n\t</div>";
			} else if (descriptor.type === "borderLayout") {
				
			} else {
				return "<div id=\"" + descriptor.id + "\"></div>";
			}
			//return this.evalTemplate("default.html", descriptor, true);
		},
		getCodeEditorMarkupSnippet: function (descriptor) {
			// as a developer, i would like to be able to provide the direct manual formatting, as well as specify a template, and evaluate it
			var extraIndentStr = "", i = 0;
			if (descriptor.extraIndent) {
				for (i = 0; i < descriptor.extraIndent; i++) {
					extraIndentStr += "\t";
				}
			}
			if (descriptor.type === "flowLayout") {
				return {codeString: "\t" + extraIndentStr + "<div style=\"border: 1px solid #eee; height: 160px; width: 700px;\">\n\t\t\t<ul id=\"" + descriptor.id + "\"></ul>\n\t\t</div>\n",lineCount: 3};
			} else if (descriptor.type === "borderLayout") {
				
			} else {
				return {codeString: "\t" + extraIndentStr + "<div id=\"" + descriptor.id + "\"></div>\n", lineCount: 1};
			}			
			//return this.evalTemplate("default.code.html", descriptor);
		}
		
	});
	return IgniteUIBorderLayoutPlugin;
});
