define (["./_default-component-plugin"], function (DefaultPlugin) {
	var IgniteUILayoutPlugin = IgniteUILayoutPlugin || DefaultPlugin.extend({
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
				return "<ul id=\"" + descriptor.id + "\" data-droppablechild=\"false\" data-hasdroppables=\"true\">" +
				"\n\t\t\t<li class=\"ig-layout-flow-item flowItem\" data-droppablechild=\"true\">1</li>" +
				"\n\t\t\t<li class=\"ig-layout-flow-item flowItem\" data-droppablechild=\"true\">2</li>" +
				"\n\t\t\t<li class=\"ig-layout-flow-item flowItem\" data-droppablechild=\"true\">3</li>" +
				"\n\t\t\t<li class=\"ig-layout-flow-item flowItem\" data-droppablechild=\"true\">4</li>" +
				"\n\t\t\t<li class=\"ig-layout-flow-item flowItem\" data-droppablechild=\"true\">5</li>" +
				"\n\t\t\t<li class=\"ig-layout-flow-item flowItem\" data-droppablechild=\"true\">6</li>" +
				"\n\t\t\t<li class=\"ig-layout-flow-item flowItem\" data-droppablechild=\"true\">7</li>" +
				"\n\t\t\t<li class=\"ig-layout-flow-item flowItem\" data-droppablechild=\"true\">8</li>" + 
				"\n\t\t\t<li class=\"ig-layout-flow-item flowItem\" data-droppablechild=\"true\">9</li>" +
				"\n\t\t\t<li class=\"ig-layout-flow-item flowItem\" data-droppablechild=\"true\">10</li>"
				+"</ul>";
			} else if (descriptor.type === "gridLayout") {
				return "<div id=\"" + descriptor.id + "\" data-droppablechild=\"false\" data-hasdroppables=\"true\">" + 
					"<div data-droppablechild=\"true\" style=\"background-color: #eee; color: #555\"><ul><li>colspan: 2</li><li>rowspan: 2</li></ul></div>" +
					"<div data-droppablechild=\"true\" style=\"background-color: #2CBDF9; color: #FFF\"><ul><li>colspan: 1</li><li>rowspan: 1</li></ul></div>" +
					"<div data-droppablechild=\"true\" style=\"background-color:#FFA72D; color: #FFF\"><ul><li>colspan: 1</li><li>rowspan: 1</li></ul></div>" +
					"<div data-droppablechild=\"true\" style=\"background-color:#216e99; color: #FFF\"><ul><li>colspan: 1</li><li>rowspan: 3</li></ul></div>" +
				"</div>";
			} else if (descriptor.type === "verticalLayout") {
				return "<ul id=\"" + descriptor.id + "\" data-droppablechild=\"false\" data-hasdroppables=\"true\">" +
				"\n\t\t\t<li class=\"ig-layout-vertical-item verticalItem\" data-droppablechild=\"true\">1</li>" +
				"\n\t\t\t<li class=\"ig-layout-vertical-item verticalItem\" data-droppablechild=\"true\">2</li>" +
				"\n\t\t\t<li class=\"ig-layout-vertical-item verticalItem\" data-droppablechild=\"true\">3</li>" +
				"\n\t\t\t<li class=\"ig-layout-vertical-item verticalItem\" data-droppablechild=\"true\">4</li>" +
				"\n\t\t\t<li class=\"ig-layout-vertical-item verticalItem\" data-droppablechild=\"true\">5</li>" 
				+"</ul>";				
			} else if (descriptor.type === "borderLayout") {
				return "<div id=\"" + descriptor.id + "\" data-droppablechild=\"false\" class=\"\" data-hasdroppables=\"true\">" +
				"<div class=\"header\" data-design-child=\"true\" style=\"background-color: #2CBDF9;\">HEADER - some text here</div>" +
				"<div id=\"leftPane\" class=\"left\" data-droppablechild=\"true\" data-design-child=\"true\" style=\"background-color: #FFA72D;\">" +
			"<h3>LEFT AREA</h3><p>First paragraph</p><p>Second paragraph</p><p>Third paragraph</p></div>" +
			"<div class=\"right\" data-design-child=\"true\" style=\"background-color:#555; color: #EEE;\" data-droppablechild=\"true\">" +
			"<h3>RIGHT AREA</h3>" +
			"<p>Aliquam ut tellus tristique massa gravida accumsan. </p></div>" +
			"<div data-design-child=\"true\" class=\"center\" data-droppablechild=\"true\" style=\"background-color: #EEE;\">" +
			"<h3>CENTER AREA</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget porta urna. Ut gravida mi at ligula commodo feugiat vehicula lacus tincidunt. Proin lobortis magna sed lacus malesuada commodo fermentum felis auctor. Sed quis nulla quis tellus facilisis malesuada. Mauris aliquam neque consequat mi blandit in luctus magna rutrum. Fusce sit amet ipsum magna. Vivamus porttitor arcu vitae eros molestie et sagittis dolor cursus. Quisque ultrices feugiat risus, vitae molestie felis interdum ac. Suspendisse pellentesque magna nec est commodo porttitor. </p></div>"+
			"<div data-design-child=\"true\" class=\"footer\" style=\"background-color: #2CBDF9;\">FOOTER - some text here </div></div>";
			} else if (descriptor.type === "columnLayout") {
				return "<div id=\"layout\" class=\"ig-layout-col\"><div class=\"row\" data-droppablechild=\"false\" data-hasdroppables=\"true\"><div data-droppablechild=\"true\" class=\"col3\"><h3>Heading</h3><p>Contents</p></div><div class=\"col3\" data-droppablechild=\"true\"><h3 data-droppablechild=\"true\">Heading</h3><p>Contents</p></div><div data-droppablechild=\"true\" class=\"col3\"><h3>Heading</h3><p>Contents</p></div></div></div>";
			} else {
				return "<div id=\"" + descriptor.id + "\"></div>";
			}
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
				return {codeString: "\t" + extraIndentStr + "<ul id=\"" + descriptor.id + "\">\n\t\t\t<li class=\"ig-layout-flow-item flowItem\">1\n\t\t\t</li>\n\t\t\t<li class=\"ig-layout-flow-item flowItem\">2\n\t\t\t</li>\n\t\t\t<li class=\"ig-layout-flow-item flowItem\">3\n\t\t\t</li>\n\t\t\t<li class=\"ig-layout-flow-item flowItem\">4\n\t\t\t</li>\n\t\t\t<li class=\"ig-layout-flow-item flowItem\">5\n\t\t\t</li>\n\t\t\t<li class=\"ig-layout-flow-item flowItem\">6\n\t\t\t</li>\n\t\t\t<li class=\"ig-layout-flow-item flowItem\">7\n\t\t\t</li>\n\t\t\t<li class=\"ig-layout-flow-item flowItem\">8\n\t\t\t</li>\n\t\t\t<li class=\"ig-layout-flow-item flowItem\">9\n\t\t\t</li>\n\t\t\t<li class=\"ig-layout-flow-item flowItem\">10\n\t\t\t</li>\n\t\t</ul>\n\t\t", lineCount: 22, 
					extraMarkers: [
						{ rowOffset: 1, colOffset: 0, rowCount: 2, colCount: 0 },
						{ rowOffset: 3, colOffset: 0, rowCount: 2, colCount: 0 },
						{ rowOffset: 5, colOffset: 0, rowCount: 2, colCount: 0 },
						{ rowOffset: 7, colOffset: 0, rowCount: 2, colCount: 0 },
						{ rowOffset: 9, colOffset: 0, rowCount: 2, colCount: 0 },
						{ rowOffset: 11, colOffset: 0, rowCount: 2, colCount: 0 },
						{ rowOffset: 13, colOffset: 0, rowCount: 2, colCount: 0 },
						{ rowOffset: 15, colOffset: 0, rowCount: 2, colCount: 0 },
						{ rowOffset: 17, colOffset: 0, rowCount: 2, colCount: 0 },
						{ rowOffset: 19, colOffset: 0, rowCount: 2, colCount: 0 }
					]
				};
			} else if (descriptor.type === "gridLayout") {
				return {codeString: "\t" + extraIndentStr + "<div id=\"" + descriptor.id + "\">" + 
					"\n\t\t\t<div style=\"background-color: #eee; color: #555\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li>colspan: 2</li>\n\t\t\t\t\t<li>rowspan: 2</li>\n\t\t\t\t</ul>\n\t\t\t</div>" +
					"\n\t\t\t<div style=\"background-color: #2CBDF9; color: #FFF\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li>colspan: 1</li>\n\t\t\t\t\t<li>rowspan: 1</li>\n\t\t\t\t</ul>\n\t\t\t</div>" +
					"\n\t\t\t<div style=\"background-color:#FFA72D; color: #FFF\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li>colspan: 1</li>\n\t\t\t\t\t<li>rowspan: 1</li>\n\t\t\t\t</ul>\n\t\t\t</div>" +
					"\n\t\t\t<div style=\"background-color:#216e99; color: #FFF\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li>colspan: 1</li>\n\t\t\t\t\t<li>rowspan: 3</li>\n\t\t\t\t</ul>\n\t\t\t</div>" +
				"\n\t" + extraIndentStr + "</div>", lineCount: 25, 
					extraMarkers: [
						{ rowOffset: 2, colOffset: 0, rowCount: 5, colCount: 0 },
						{ rowOffset: 8, colOffset: 0, rowCount: 5, colCount: 0 },
						{ rowOffset: 14, colOffset: 0, rowCount: 5, colCount: 0 },
						{ rowOffset: 20, colOffset: 0, rowCount: 5, colCount: 0 }
					]
				};				
			} else if (descriptor.type === "verticalLayout") {
				return {codeString: "\t" + extraIndentStr + "<ul id=\"" + descriptor.id + "\">\n\t\t\t<li class=\"ig-layout-vertical-item verticalItem\">1\n\t\t\t</li>\n\t\t\t<li class=\"ig-layout-vertical-item verticalItem\">2\n\t\t\t</li>\n\t\t\t<li class=\"ig-layout-vertical-item verticalItem\">3\n\t\t\t</li>\n\t\t\t<li class=\"ig-layout-vertical-item verticalItem\">4\n\t\t\t</li>\n\t\t\t<li class=\"ig-layout-vertical-item verticalItem\">5\n\t\t\t</li>\n\t\t</ul>\n\t\t", lineCount: 12, 
					extraMarkers: [
						{ rowOffset: 1, colOffset: 0, rowCount: 2, colCount: 0 },
						{ rowOffset: 3, colOffset: 0, rowCount: 2, colCount: 0 },
						{ rowOffset: 5, colOffset: 0, rowCount: 2, colCount: 0 },
						{ rowOffset: 7, colOffset: 0, rowCount: 2, colCount: 0 },
						{ rowOffset: 9, colOffset: 0, rowCount: 2, colCount: 0 }
					]
				};
			} else if (descriptor.type === "borderLayout") {
				return {codeString: "\t" + extraIndentStr + "<div id=\"" + descriptor.id + "\">" +
			"\n\t\t\t<div class=\"header\" style=\"background-color: #2CBDF9;\">HEADER - some text here</div>" +
			"\n\t\t\t<div class=\"left\" style=\"background-color: #FFA72D;\">" +
			"\n\t\t\t\t<h3>LEFT AREA</h3>\n\t\t\t\t<p>First paragraph</p>\n\t\t\t\t<p>Second paragraph</p>\n\t\t\t\t<p>Third paragraph</p>\n\t\t\t</div>" +
			"\n\t\t\t<div class=\"right\" style=\"background-color:#555; color: #EEE;\">" +
			"\n\t\t\t\t<h3>RIGHT AREA</h3>" +
			"\n\t\t\t\t<p>Aliquam ut tellus tristique massa gravida accumsan. </p>\n\t\t\t</div>" +
			"\n\t\t\t<div class=\"center\" style=\"background-color: #EEE;\">" +
			"\n\t\t\t\t<h3>CENTER AREA</h3>\n\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget porta urna. Ut gravida mi at ligula commodo feugiat vehicula lacus tincidunt. Proin lobortis magna sed lacus malesuada commodo fermentum felis auctor. Sed quis nulla quis tellus facilisis malesuada. Mauris aliquam neque consequat mi blandit in luctus magna rutrum. Fusce sit amet ipsum magna. Vivamus porttitor arcu vitae eros molestie et sagittis dolor cursus. Quisque ultrices feugiat risus, vitae molestie felis interdum ac. Suspendisse pellentesque magna nec est commodo porttitor. </p>\n\t\t\t</div>" +
			"\n\t\t\t<div class=\"footer\" style=\"background-color: #2CBDF9;\">FOOTER - some text here </div>" +
			"\n\t\t</div>\n", lineCount: 18,
				extraMarkers: [
						{ rowOffset: 1, colOffset: 0, rowCount: 1, colCount: 0 },
						{ rowOffset: 2, colOffset: 0, rowCount: 6, colCount: 0 },
						{ rowOffset: 8, colOffset: 0, rowCount: 4, colCount: 0 },
						{ rowOffset: 12, colOffset: 0, rowCount: 4, colCount: 0 },
						{ rowOffset: 16, colOffset: 0, rowCount: 1, colCount: 0 }
					]			
				};
			} else if (descriptor.type === "columnLayout") {
				return {codeString: "\t" + extraIndentStr + "<div id=\"layout\" class=\"ig-layout-col\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col3\">\n\t\t\t\t\t<h3>Heading</h3>\n\t\t\t\t\t<p>Contents</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col3\">\n\t\t\t\t\t<h3>Heading</h3>\n\t\t\t\t\t<p>Contents</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col3\">\n\t\t\t\t\t<h3>Heading</h3>\n\t\t\t\t\t<p>Contents</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n", lineCount: 20,
				extraMarkers: [
					{ rowOffset: 2, colOffset: 0, rowCount: 4, colCount: 0 },
					{ rowOffset: 6, colOffset: 0, rowCount: 4, colCount: 0 },
					{ rowOffset: 10, colOffset: 0, rowCount: 4, colCount: 0 }
				]};
			} else {
				return {codeString: "\t" + extraIndentStr + "<div id=\"" + descriptor.id + "\"></div>\n", lineCount: 1};
			}			
		},
		initComponent: function (descriptor) {
			var name = this._getWidgetName(descriptor.type);
			if (descriptor.type === "borderLayout" && window.frames[0].$(descriptor.placeholder)[name]) {
				window.frames[0].$(descriptor.placeholder)[name](descriptor.options);
				var container = window.frames[0].$(descriptor.placeholder).children(".ig-layout-border-container")[0];
				if (container) {
					window.frames[0].$(container).attr("data-skipparent", true);
				}
			} else if ((descriptor.type === "flowLayout" || descriptor.type === "verticalLayout") && window.frames[0].$(descriptor.placeholder)[name]) {
				var ide = this.settings.ide, pos, styleBlock, styleMarker, blockOffset = 7, flagAlreadyContainsCSS = false, itemClass;
				switch (descriptor.type) {
					case "flowLayout": { itemClass = "flowItem"; } break;
					case "verticalLayout": { itemClass = "verticalItem"; } break;
				}
				//If we have already dropped flowLayout there is a css class already added and we don't need a duplicate one
				if (!ide.editor.find(itemClass)) {
					pos = ide.editor.find("</head>");
					styleBlock = "\t\t<style>\n\t\t\t."+ itemClass +"{\n\t\t\t\t background-color: #2CBDF9; \n\t\t\t\t color : #FFF; \n\t\t\t\t font-size: \"20px\"; \n\t\t\t\t padding: \"5px 0 0 5px\";\n\t\t\t}\n\t\t</style>\n";
					ide.session.insert({row: pos.start.row, column: 0}, styleBlock);
					styleMarker = ide.createAndAddMarker(pos.start.row, 0, pos.start.row + blockOffset, 0);
					
					if (!ide._styleBlockMarker) {
						ide._styleBlockMarker = styleMarker;
					}
				}
				for (var i = 0; i < window.frames[0].$("head").children("style").length; i++) {
					if (window.frames[0].$("head").children("style")[i].innerText.indexOf(itemClass) !== -1) { 
						flagAlreadyContainsCSS = true;
						//We don't need to iterate if the class already exist
						break;
					}
				}
				if (!flagAlreadyContainsCSS) {
					window.frames[0].$("head").append(styleBlock);
				}
				window.frames[0].$(descriptor.placeholder)[name](descriptor.options);
			}  else if (descriptor.type !== "columnLayout" && window.frames[0].$(descriptor.placeholder)[name]) {
				window.frames[0].$(descriptor.placeholder)[name](descriptor.options);
			}
		},
		getDroppableChildren: function (descriptor) {
		  if (typeof (descriptor) === "undefined" || descriptor === null) {
			return $();
		  } else if (descriptor.nodeName) {
			return $(descriptor).find("div[data-droppablechild]");
		  }
		  return $();
		},
		hasDroppableChildren: function (descriptor) {
		  if (typeof (descriptor) === "undefined" || descriptor === null) {
			return false;
		  }
		  if (descriptor.nodeName && $(descriptor).attr("data-hasdroppables") === "true") {
			return true;
		  }
		},
		isDroppableChild: function (descriptor) {
			if (typeof (descriptor) === "undefined" || descriptor === null) {
				return false;
			}
			if (descriptor.type === "splitterPane" || descriptor.type === "tileManagerTile" || descriptor.type === "dialogWindowContent") {
				return true;
			}
			return false;
		},
		addExtraMarkers: function (descriptor) {
			this._super(descriptor);
			if (descriptor.type === "gridLayout") {
				var gridLayout = this.settings.editor.find("gridLayout:", {start: descriptor.marker.range.start});
				gridLayout = new descriptor.rclass(gridLayout.start.row, 0, gridLayout.start.row + 4, 0);
				gridLayout.start = this.settings.editor.getSession().doc.createAnchor(gridLayout.start); 
				gridLayout.end = this.settings.editor.getSession().doc.createAnchor(gridLayout.end);
				if (!descriptor.marker.extraMarkers.options) {
					descriptor.marker.extraMarkers.options = {};
				}
				descriptor.marker.extraMarkers.options.gridLayout = {marker: gridLayout};
			}
		},
		update: function (descriptor) {
			this._super(descriptor);
			// K.D. June 30th, 2014 When changing the items array the current markup is cleared from the component.
			// Clearing the markers in the code editor in order to keep the sync between designer and code view.
			if (descriptor.propName === "items" && (descriptor.type === "verticalLayout" || descriptor.type === "flowLayout")) {
				var htmlMarker = descriptor.htmlMarker,
					children,
					marker;
				if (htmlMarker && htmlMarker.extraMarkers && htmlMarker.extraMarkers.children) {
					children = htmlMarker.extraMarkers.children;
					if (children.length) {
						for (var i = 0; i < children.length; i++) {
							this.settings.editor.session.remove(children[i]);
							children[i].end.detach();
							children[i].start.detach();
						}
					}
				}
			}
		}
	});
	return IgniteUILayoutPlugin;
});
