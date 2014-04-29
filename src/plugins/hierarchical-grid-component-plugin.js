define (["./grid-component-plugin"], function (IgniteUIGridPlugin) {
	var IgniteUIHierarchicalGridPlugin = IgniteUIHierarchicalGridPlugin || IgniteUIGridPlugin.extend({
		init: function (options) {
			this._super(options);
		},
		getName: function () {
			return "igHierarchicalGrid";
		},
		_getWidgetName: function () {
			return "igHierarchicalGrid";
		},
		getMarkup: function (descriptor) {
			return "<div style=\"display:inline-block;\" id=\"" + descriptor.id + "\"></div>";
		},
		getCodeEditorScriptSnippet: function (descriptor) {
			var code = "";
			var opts = descriptor.options;
			var lineCount = 6;
			var orderedReturnProps = [];
			code = "\t\t\t\t$(\"#" + descriptor.id + "\").igHierarchicalGrid({\n\t\t\t\t\tfeatures: [],\n\t\t\t\t\tcolumnLayouts: []";
			if (descriptor.data && window[descriptor.data]) {
				code += ",\n\t\t\t\t\tdataSource: " + descriptor.data;
			}
			orderedReturnProps.push({
				name: "features",
				value: [],
				type: "array"
			});
			orderedReturnProps.push({
				name: "columnLayouts",
				value: [],
				type: "array"
			});
			orderedReturnProps.push({
				name: "dataSource",
				value: descriptor.data,
				type: "literal"
			});
			var props = this.settings.packageInfo.components[descriptor.type].properties;
			for (var key in opts) {
				if (opts.hasOwnProperty(key) && key !== "dataSource" && key !== "features" && key !== "columnLayouts" && key !== "height" && key !== "width") {
					code += ",\n\t\t\t\t\t" + key + ": " + opts[key];
					lineCount++;
					orderedReturnProps.push({
						name: key,
						value: opts[key],
						type: props[key].type
					});
				}
			}
			code += "\n\t\t\t\t});\n";
			return {
				codeString: code,
				lineCount: lineCount,
				orderedProps: orderedReturnProps
			};
		},
		addExtraMarkers: function (descriptor) {
			this._super(descriptor);
			var layoutsRange = this.settings.editor.find("columnLayouts: [],", {start: descriptor.marker.range.start});
			layoutsRange = new descriptor.rclass(layoutsRange.start.row, 0, layoutsRange.end.row, layoutsRange.end.column);
			layoutsRange.start = this.settings.editor.getSession().doc.createAnchor(layoutsRange.start); 
			layoutsRange.end = this.settings.editor.getSession().doc.createAnchor(layoutsRange.end);
			if (!descriptor.marker.extraMarkers.options) {
				descriptor.marker.extraMarkers.options = {};
			}
			descriptor.marker.extraMarkers.options.columnLayouts = {marker: layoutsRange};
		},
	});
	return IgniteUIHierarchicalGridPlugin;
});
