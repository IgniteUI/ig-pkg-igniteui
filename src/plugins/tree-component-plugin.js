define (["./_default-component-plugin"], function (DefaultPlugin) {
	var IgniteUITreePlugin = IgniteUITreePlugin || DefaultPlugin.extend({
		getCodeEditorScriptSnippet: function (descriptor) {
			var code = "";
			var lineCount = 8;
			var orderedReturnProps = [];
			var xtraMarkup = "\t\t\t\t\tbindings: {\n"
					+ "\t\t\t\t\t\ttextKey: \"Name\",\n"
					+ "\t\t\t\t\t\tvalueKey: \"ID\",\n"
					+ "\t\t\t\t\t\tchildDataProperty: \"children\"\n"
					+ "\t\t\t\t\t}";
			code = "\t\t\t\t$(\"#" + descriptor.id + "\").igTree({\n" + xtraMarkup;
			orderedReturnProps.push({
				name: "bindings",
				value: {
					textKey: "Name",
					valueKey: "ID",
					childDataProperty: "children"
				},
				type: "object"
			});
			if (descriptor.data && window[descriptor.data]) {
				code += ",\n\t\t\t\t\tdataSource: " + descriptor.data;
				orderedReturnProps.push({
					name: "dataSource",
					value: descriptor.data,
					type: "literal"
				});
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
			var bindings = this.settings.editor.find("bindings", {start: descriptor.marker.range.start});
			bindings = new descriptor.rclass(bindings.start.row, 0, bindings.start.row + 5, 0);
			bindings.start = this.settings.editor.getSession().doc.createAnchor(bindings.start); 
			bindings.end = this.settings.editor.getSession().doc.createAnchor(bindings.end);
			if (!descriptor.marker.extraMarkers.options) {
				descriptor.marker.extraMarkers.options = {};
			}
			descriptor.marker.extraMarkers.options.bindings = {marker: bindings};
		},
		getPropValue: function (descriptor) {
			if (descriptor.propName === "bindings") {
				var tree = typeof window.frames[0].$(descriptor.placeholder).data === "function" && window.frames[0].$(descriptor.placeholder).data("igTree");
				if (tree) {
					return tree._retrieveCurrentDepthBinding($(".adorner-wrapper div[data-property^='bindings']").length - 1);
				} 
			}
			return this._super(descriptor);
		}
	});
	return IgniteUITreePlugin;
});
