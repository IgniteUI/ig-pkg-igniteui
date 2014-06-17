define (["./_default-component-plugin"], function (DefaultPlugin) {
	var IgniteUIBulletGraphPlugin = IgniteUIBulletGraphPlugin || DefaultPlugin.extend({
		addExtraMarkers: function (descriptor) {
			this._super(descriptor);
			var ranges = this.settings.editor.find("ranges", {start: descriptor.marker.range.start});
			ranges = new descriptor.rclass(ranges.start.row, 0, ranges.start.row + 4, 7);
			ranges.start = this.settings.editor.getSession().doc.createAnchor(ranges.start); 
			ranges.end = this.settings.editor.getSession().doc.createAnchor(ranges.end);
			if (!descriptor.marker.extraMarkers.options) {
				descriptor.marker.extraMarkers.options = {};
			}
			descriptor.marker.extraMarkers.options.ranges = {marker: ranges};
		}
	});
	return IgniteUIBulletGraphPlugin;
});
