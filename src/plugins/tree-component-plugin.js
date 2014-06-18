define (["./_default-component-plugin"], function (DefaultPlugin) {
	var IgniteUITreePlugin = IgniteUITreePlugin || DefaultPlugin.extend({
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
