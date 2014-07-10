define (["./_default-component-plugin"], function (DefaultPlugin) {
	var IgniteUIGaugePlugin = IgniteUIGaugePlugin || DefaultPlugin.extend({
		addExtraMarkers: function (descriptor) {
			this._super(descriptor);
			// we don't want to hardcode this value but find it in the current range
			// it may well happen that someone adds lots of options and extra code *above* the features or any other object
			if (descriptor.type === "radialGauge") {
				var ranges = this.settings.editor.find("ranges", {start: descriptor.marker.range.start});
				ranges = new descriptor.rclass(ranges.start.row, 0, ranges.start.row + 5, 0);
				ranges.start = this.settings.editor.getSession().doc.createAnchor(ranges.start); 
				ranges.end = this.settings.editor.getSession().doc.createAnchor(ranges.end);
				ranges.id = "ranges";
				if (!descriptor.marker.extraMarkers.options) {
					descriptor.marker.extraMarkers.options = {};
				}
				descriptor.marker.extraMarkers.options.ranges = {marker: ranges};
			}
		}
	});
	return IgniteUIGaugePlugin;
});
