define (["./_default-component-plugin"], function (DefaultPlugin) {
	var IgniteUIGridPlugin = IgniteUIGridPlugin || DefaultPlugin.extend({
		init: function (options) {
			this._super(options);
		},
		getName: function () {
			return "igGrid";
		},
		_getWidgetName: function () {
			return "igGrid";
		},
		getMarkup: function (descriptor) {
			return "<div style=\"display:inline-block;\" id=\"" + descriptor.id + "\"></div>";
		},
		getCodeEditorScriptSnippet: function (descriptor) {
			var code = "";
			var opts = descriptor.options;
			var lineCount = 5;
			var orderedReturnProps = [];
			var xtraMarkup = "\t\t\t\t\tfeatures: [\n" + "\t\t\t\t\t]";
			//A.T. - we can either drop with no features in the code editor
			// or an empty array - empty arr makes it easier to manage with markers
			code = "\t\t\t\t$(\"#" + descriptor.id + "\").igGrid({\n" + xtraMarkup;
			//	"\t\t\t\t\theight: " + opts.height + ",\n" + 
			//	"\t\t\t\t\twidth: " + opts.width + xtraMarkup;
			/*
			orderedReturnProps.push({
				name: "height",
				value: opts.height,
				type: "number"
			});
			orderedReturnProps.push({
				name: "width",
				value: opts.width,
				type: "number"
			});
			*/
			if (descriptor.data && window[descriptor.data]) {
				code += ",\n\t\t\t\t\tdataSource: " + descriptor.data;
				orderedReturnProps.push({
					name: "dataSource",
					value: descriptor.data,
					type: "literal"
				});
			}
			var props = this.settings.packageInfo.components[descriptor.type].properties;
			for (var key in opts) {
			//	if (opts.hasOwnProperty(key) && key !== "dataSource" && key !== "height" && key !== "width") {
			if (opts.hasOwnProperty(key) && key !== "dataSource") {
					orderedReturnProps.push({
						name: key,
						value: opts[key],
						type: props[key].type
					});
					if (props[key].type === "string") {
						code += ",\n\t\t\t\t\t" + key + ": \"" + opts[key] + "\"";
						orderedReturnProps[orderedReturnProps.length - 1].type = "string";
					} else {
						code += ",\n\t\t\t\t\t" + key + ": " + opts[key];
						orderedReturnProps[orderedReturnProps.length - 1].type = "literal";
					}
					lineCount++;
				}
			}
			code += "\n\t\t\t\t});\n";
			return {
				codeString: code, 
				lineCount: lineCount, 
				orderedProps: orderedReturnProps
			};
			//return this.evalTemplate("grid.code.js", descriptor);
		},
		addExtraMarkers: function (descriptor) {
			this._super(descriptor);
			// we don't want to hardcode this value but find it in the current range
			// it may well happen that someone adds lots of options and extra code *above* the features or any other object
			var featuresRange = this.settings.editor.find("features", {start: descriptor.marker.range.start});
			featuresRange = new descriptor.rclass(featuresRange.start.row, 0, featuresRange.start.row + 1, 0);
			featuresRange.start = this.settings.editor.getSession().doc.createAnchor(featuresRange.start); 
			featuresRange.end = this.settings.editor.getSession().doc.createAnchor(featuresRange.end);
			descriptor.marker.extraMarkers["features"] = {range: featuresRange};
		}
		/*
		render: function(descriptor) {
			// THIS IS WHERE WE PUT FULLY CUSTOM EDITORS FOR COMPONENTS
		},
		*/
	});
	return IgniteUIGridPlugin;
});
