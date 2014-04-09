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
				if (!descriptor.marker.extraMarkers.options) {
					descriptor.marker.extraMarkers.options = {};
				}
				descriptor.marker.extraMarkers.options.axes = {marker: axesRange};
			}
			var seriesRange = this.settings.editor.find("series", {start: descriptor.marker.range.start}), seriesCodeEditorLineNumbers;
			if (descriptor.type === "dataChart") {
				seriesCodeEditorLineNumbers = 12;
			} else if (descriptor.type === "doughnutChart") {
				seriesCodeEditorLineNumbers = 24;
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
		}
	});
	return IgniteUIChartsPlugin;
});
