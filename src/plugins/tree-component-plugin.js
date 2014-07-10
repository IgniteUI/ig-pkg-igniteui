define (["./_default-component-plugin"], function (DefaultPlugin) {
	var IgniteUITreePlugin = IgniteUITreePlugin || DefaultPlugin.extend({
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
