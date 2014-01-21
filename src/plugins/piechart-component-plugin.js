define (["./_default-component-plugin"], function (DefaultPlugin) {
	var IgniteUIPieChartPlugin = IgniteUIPieChartPlugin || DefaultPlugin.extend({
		init: function (options) {
			this._super(options);
		}
	});
	return IgniteUIPieChartPlugin;
});