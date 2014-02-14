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
				return "<div style=\"border: 1px solid #eee; \">\n\t\t<ul id=\"" + descriptor.id + "\"></ul>\n\t</div>";
			} else if (descriptor.type === "borderLayout") {
				return "<div id=\"" + descriptor.id + "\"><div class=\"left\" style=\"background-color: #FFA72D;\">" +
			"<h3>LEFT AREA</h3><p>First paragraph</p><p>Second paragraph</p><p>Third paragraph</p><p>Fourth paragraph</p></div><div class=\"right\" style=\"background-color:#555; color: #EEE;\">" +
			"<h3>RIGHT AREA</h3>" +
			"<p>Aliquam ut tellus tristique massa gravida accumsan. Vivamus sodales, purus eget vehicula aliquam, arcu ipsum hendrerit mauris, ac faucibus massa turpis eget nibh. Etiam blandit sodales semper. Curabitur enim nunc, molestie ac aliquam eu, imperdiet tincidunt orci. Proin pulvinar vehicula lacus, ut lacinia tortor molestie vitae. Nunc ut augue id erat feugiat feugiat non sit amet erat. Suspendisse ultrices risus dapibus erat laoreet accumsan. Phasellus rutrum, lectus quis tempus blandit, libero lectus dignissim ligula, in semper orci nibh ut diam.</p></div>" +
			"<div class=\"header\" style=\"background-color: #2CBDF9;\">HEADER - some text here</div>" +
			"<div class=\"footer\" style=\"background-color: #2CBDF9;\">FOOTER - some text here </div>" +
			"<div class=\"center\" style=\"background-color: #EEE;\">" +
			"<h3>CENTER AREA</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget porta urna. Ut gravida mi at ligula commodo feugiat vehicula lacus tincidunt. Proin lobortis magna sed lacus malesuada commodo fermentum felis auctor. Sed quis nulla quis tellus facilisis malesuada. Mauris aliquam neque consequat mi blandit in luctus magna rutrum. Fusce sit amet ipsum magna. Vivamus porttitor arcu vitae eros molestie et sagittis dolor cursus. Quisque ultrices feugiat risus, vitae molestie felis interdum ac. Suspendisse pellentesque magna nec est commodo porttitor. </p><p>Nunc lacinia ligula a nisl porta sed facilisis mauris facilisis. Sed a ante turpis, eget semper odio. Curabitur facilisis faucibus iaculis. Ut fermentum pretium ultrices. Etiam sem dui, adipiscing sed tempus et, adipiscing eget erat. Vestibulum nec eros magna.</p><p>Praesent tristique arcu eget ligula pulvinar mollis. Maecenas at elit at justo posuere gravida id eu enim. Duis imperdiet lectus nec augue sollicitudin hendrerit. Suspendisse consectetur, lorem nec eleifend rutrum, eros metus sodales libero, et rutrum diam augue et lectus. Integer sed est vitae risus dignissim condimentum ullamcorper at massa. Donec a orci nisl, eget ullamcorper augue. Quisque sagittis fringilla tortor. Vivamus ligula velit, aliquam ut pellentesque quis, fringilla sit amet tortor.</p></div></div>";
			} else if (descriptor.type === "columnLayout") {
				return "<div id=\"layout\" class=\"ig-layout-col\"><div class=\"row\"><div class=\"col3\"><h3>Heading</h3><p>Contents</p></div><div class=\"col3\"><h3>Heading</h3><p>Contents</p></div><div class=\"col3\"><h3>Heading</h3><p>Contents</p></div></div></div>";
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
				return {codeString: "\t" + extraIndentStr + "<div style=\"border: 1px solid #eee; \">\n\t\t\t<ul id=\"" + descriptor.id + "\"></ul>\n\t\t</div>\n", lineCount: 3};
			} else if (descriptor.type === "borderLayout") {
				return {codeString: "\t" + extraIndentStr + "<div id=\"" + descriptor.id + "\">\n\t\t\t<div class=\"left\" style=\"background-color: #FFA72D;\">" +
			"\n\t\t\t\t<h3>LEFT AREA</h3>\n\t\t\t\t<p>First paragraph</p>\n\t\t\t\t<p>Second paragraph</p>\n\t\t\t\t<p>Third paragraph</p>\n\t\t\t\t<p>Fourth paragraph</p>\n\t\t\t</div>\n\t\t\t<div class=\"right\" style=\"background-color:#555; color: #EEE;\">" +
			"\n\t\t\t\t<h3>RIGHT AREA</h3>" +
			"\n\t\t\t\t<p>Aliquam ut tellus tristique massa gravida accumsan. Vivamus sodales, purus eget vehicula aliquam, arcu ipsum hendrerit mauris, ac faucibus massa turpis eget nibh. Etiam blandit sodales semper. Curabitur enim nunc, molestie ac aliquam eu, imperdiet tincidunt orci. Proin pulvinar vehicula lacus, ut lacinia tortor molestie vitae. Nunc ut augue id erat feugiat feugiat non sit amet erat. Suspendisse ultrices risus dapibus erat laoreet accumsan. Phasellus rutrum, lectus quis tempus blandit, libero lectus dignissim ligula, in semper orci nibh ut diam.</p>\n\t\t\t</div>" +
			"\n\t\t\t<div class=\"header\" style=\"background-color: #2CBDF9;\">HEADER - some text here</div>" +
			"\n\t\t\t<div class=\"footer\" style=\"background-color: #2CBDF9;\">FOOTER - some text here </div>" +
			"\n\t\t\t<div class=\"center\" style=\"background-color: #EEE;\">" +
			"\n\t\t\t\t<h3>CENTER AREA</h3>\n\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget porta urna. Ut gravida mi at ligula commodo feugiat vehicula lacus tincidunt. Proin lobortis magna sed lacus malesuada commodo fermentum felis auctor. Sed quis nulla quis tellus facilisis malesuada. Mauris aliquam neque consequat mi blandit in luctus magna rutrum. Fusce sit amet ipsum magna. Vivamus porttitor arcu vitae eros molestie et sagittis dolor cursus. Quisque ultrices feugiat risus, vitae molestie felis interdum ac. Suspendisse pellentesque magna nec est commodo porttitor. </p>\n\t\t\t\t<p>Nunc lacinia ligula a nisl porta sed facilisis mauris facilisis. Sed a ante turpis, eget semper odio. Curabitur facilisis faucibus iaculis. Ut fermentum pretium ultrices. Etiam sem dui, adipiscing sed tempus et, adipiscing eget erat. Vestibulum nec eros magna.</p>\n\t\t\t\t<p>Praesent tristique arcu eget ligula pulvinar mollis. Maecenas at elit at justo posuere gravida id eu enim. Duis imperdiet lectus nec augue sollicitudin hendrerit. Suspendisse consectetur, lorem nec eleifend rutrum, eros metus sodales libero, et rutrum diam augue et lectus. Integer sed est vitae risus dignissim condimentum ullamcorper at massa. Donec a orci nisl, eget ullamcorper augue. Quisque sagittis fringilla tortor. Vivamus ligula velit, aliquam ut pellentesque quis, fringilla sit amet tortor.</p>\n\t\t\t</div>\n\t\t</div>\n", lineCount: 21};
			} else if (descriptor.type === "columnLayout") {
				return {codeString: "\t" + extraIndentStr + "<div id=\"layout\" class=\"ig-layout-col\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col3\">\n\t\t\t\t\t<h3>Heading</h3>\n\t\t\t\t\t<p>Contents</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col3\">\n\t\t\t\t\t<h3>Heading</h3>\n\t\t\t\t\t<p>Contents</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col3\">\n\t\t\t\t\t<h3>Heading</h3>\n\t\t\t\t\t<p>Contents</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n", lineCount: 1};
			} else {
				return {codeString: "\t" + extraIndentStr + "<div id=\"" + descriptor.id + "\"></div>\n", lineCount: 1};
			}			
			//return this.evalTemplate("default.code.html", descriptor);
		},
		getCodeEditorScriptSnippet: function (descriptor) {
			var snippet = this._super(descriptor);
			if (descriptor.type === "gridLayout") {
				var handler = "\t\t\t\t$(\"#" + descriptor.id +"\").on(\"iglayoutmanageritemrendered\", function (event, args) {\n\t\t\t\t\t args.item.append(\"<ul><li>colspan: \" + args.itemData.colSpan + \"</li><li>rowspan: \" + args.itemData.rowSpan + \"</li></ul></span>\");"+
				"\n\t\t\t\t\t if (args.itemData.colSpan == 2 && args.itemData.rowSpan == 2) {" +
                        "\n\t\t\t\t\t\t args.item.css(\"background-color\", \"#eee\");" + 
                        "\n\t\t\t\t\t\t args.item.css(\"color\", \"#555\");" +
                    "\n\t\t\t\t\t } else if (args.itemData.rowSpan == 1 && args.itemData.colSpan == 1) {" +
                        "\n\t\t\t\t\t\t if (args.itemData.rowIndex == 0) {" +
                            "\n\t\t\t\t\t\t\t args.item.css(\"background-color\, \"#2CBDF9\");" +
                            "\n\t\t\t\t\t\t\t args.item.css(\"color\", \"#FFF\");" +
                        "\n\t\t\t\t\t\t } else {" +
                            "\n\t\t\t\t\t\t\t args.item.css(\"background-color\", \"#FFA72D\");" +
                            "\n\t\t\t\t\t\t\t args.item.css(\"color\", \"#FFF\");" +
                        "\n\t\t\t\t\t\t } \n\t\t\t\t\t } else {" +
                        "\n\t\t\t\t\t\t args.item.css(\"background-color\", \"#2CBDF9\");" +
                        "\n\t\t\t\t\t\t args.item.css(\"color\", \"#FFF\");" +
                    "\n\t\t\t\t\t } \n\t\t\t\t});\n";
				snippet.codeString = snippet.codeString + handler; 
				snippet.lineCount += 19;
			} else if (descriptor.type === "flowLayout" || descriptor.type === "verticalLayout") {
				var handler = "\t\t\t\t$(\"#" + descriptor.id +"\").on(\"iglayoutmanageritemrendered\", function (event, args) {" +
					"\n\t\t\t\t\t args.item.text(args.index + 1);" +
					"\n\t\t\t\t\t args.item.css(\"background-color\", \"#2CBDF9\");" +
					"\n\t\t\t\t\t args.item.css(\"color\", \"#FFF\");" +
					"\n\t\t\t\t\t args.item.css(\"font-size\", \"20px\");" +
					"\n\t\t\t\t\t args.item.css(\"padding\", \"5px 0 0 5px\");" +
					"\n\t\t\t\t});\n";
				snippet.codeString = snippet.codeString + handler; 
				snippet.lineCount += 8;
			} 
			return snippet;
		},
		initComponent: function (descriptor) {
			var name = this._getWidgetName(descriptor.type);
			if (descriptor.type === "gridLayout" && window.frames[0].$(descriptor.placeholder)[name]) {
				window.frames[0].$(descriptor.placeholder).on("iglayoutmanageritemrendered", function (e, args) {
					args.item.append("<ul><li>colspan: " + args.itemData.colSpan + "</li><li>rowspan: " + args.itemData.rowSpan + "</li></ul></span>");
					if (args.itemData.colSpan == 2 && args.itemData.rowSpan == 2) {
                        args.item.css("background-color", "#eee");
                        args.item.css("color", "#555");
                    } else if (args.itemData.rowSpan == 1 && args.itemData.colSpan == 1) {
                        if (args.itemData.rowIndex == 0) {
                            args.item.css("background-color", "#2CBDF9");
                            args.item.css("color", "#FFF");
                        } else {
                            args.item.css("background-color", "#FFA72D");
                            args.item.css("color", "#FFF");
                        }
                    } else {
                        args.item.css("background-color", "#2CBDF9");
                        args.item.css("color", "#FFF");
                    }
				});
				window.frames[0].$(descriptor.placeholder)[name](descriptor.options);
			} else if ((descriptor.type === "flowLayout" || descriptor.type === "verticalLayout") && window.frames[0].$(descriptor.placeholder)[name]) {
				window.frames[0].$(descriptor.placeholder).on("iglayoutmanageritemrendered", function (e, args) {
					args.item.text(args.index + 1);
					args.item.css("background-color", "#2CBDF9");
					args.item.css("color", "#FFF");
					args.item.css("font-size", "20px");
					args.item.css("padding", "5px 0 0 5px");
				});
				window.frames[0].$(descriptor.placeholder)[name](descriptor.options);
			}  else if (descriptor.type !== "columnLayout" && window.frames[0].$(descriptor.placeholder)[name]) {
				window.frames[0].$(descriptor.placeholder)[name](descriptor.options);
			}
		}
	});
	return IgniteUIBorderLayoutPlugin;
});
