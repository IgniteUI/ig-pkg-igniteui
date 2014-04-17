define (["./_default-component-plugin"], function (DefaultPlugin) {
	var IgniteUIChartsPlugin = IgniteUIChartsPlugin || DefaultPlugin.extend({
		addExtraMarkers: function (descriptor) {
			this._super(descriptor);
			// we don't want to hardcode this value but find it in the current range
			// it may well happen that someone adds lots of options and extra code *above* the features or any other object
			if (descriptor.type === "dataChart") {
				var axesRange = this.settings.editor.find("axes", {start: descriptor.marker.range.start});
				axesRange = new descriptor.rclass(axesRange.start.row, 0, axesRange.start.row + 10, 0);
				axesRange.start = this.settings.editor.getSession().doc.createAnchor(axesRange.start); 
				axesRange.end = this.settings.editor.getSession().doc.createAnchor(axesRange.end);
				axesRange.id = "axes";
				if (!descriptor.marker.extraMarkers.options) {
					descriptor.marker.extraMarkers.options = {};
				}
				descriptor.marker.extraMarkers.options.axes = {marker: axesRange};
			}
			var seriesRange = this.settings.editor.find("series", {start: descriptor.marker.range.start}), seriesCodeEditorLineNumbers;
			if (descriptor.type === "dataChart") {
				seriesCodeEditorLineNumbers = 12;
			} else if (descriptor.type === "doughnutChart") {
				seriesCodeEditorLineNumbers = 7;
			} else {
				//In that case just take the begining of the code sample				
			}
			seriesRange = new descriptor.rclass(seriesRange.start.row , 0, seriesRange.start.row + seriesCodeEditorLineNumbers, 0);
			seriesRange.start = this.settings.editor.getSession().doc.createAnchor(seriesRange.start); 
			seriesRange.end = this.settings.editor.getSession().doc.createAnchor(seriesRange.end);
			if (!descriptor.marker.extraMarkers.options) {
				descriptor.marker.extraMarkers.options = {};
			}
			descriptor.marker.extraMarkers.options.series = {marker: seriesRange};
		},
		getPropValue: function (descriptor) {
			if (descriptor.comp) {
				var prop = descriptor.comp.options[descriptor.propName];
				if (!prop) {
					prop = this._super(descriptor);
				}
				return prop;
			} else {
				return this._super(descriptor);
			}
		},
		getCodeEditorScriptSnippet: function (descriptor) {
			var extraIndent = descriptor.extraIndent ? descriptor.extraIndent : 0, baseSnippet = this._super(descriptor), snippet = {},
			codeStr = "\t\t\t\t$(\"#" + descriptor.id + "\").igDoughnutChart({\n\t\t\t\t\theight: 300,\n\t\t\t\t\twidth: 300,\n\t\t\t\t\tallowSliceExplosion: false,\n\t\t\t\t\tallowSliceSelection: false,\n\t\t\t\t\tseries: [{\n\t\t\t\t\t    name: \"Pop1990\",\n\t\t\t\t\t    labelMemberPath: \"CountryName\",\n\t\t\t\t\t    valueMemberPath: \"Pop1990\",\n\t\t\t\t\t    dataSource: sampleDoughnutChartData ,\n\t\t\t\t\t    labelsPosition: \"bestFit\",\n\t\t\t\t\t}]\n\t\t\t\t});\n";
			if (descriptor.type === "doughnutChart") {
				snippet = {
					codeString: codeStr,
					lineCount: 13,
					orderedProps: baseSnippet.orderedProps
				};
			} else {
				snippet.codeString = baseSnippet.codeString;
				snippet.lineCount = baseSnippet.lineCount;
				snippet.orderedProps = baseSnippet.orderedProps;
			}
			return snippet;
		}
	});
	return IgniteUIChartsPlugin;
});
