define (["./_default-component-plugin"], function (DefaultPlugin) {
	var IgniteUISchedulerPlugin = IgniteUISchedulerPlugin || DefaultPlugin.extend({
		initComponent: function (descriptor) {
		    var name = this._getWidgetName(descriptor.type);
			
			// Schedule data needs translated scheduler files and therefore it is placed in a differenct schedulerDataSource.js (all default datasource are in datasources.js file)
			if (descriptor.data && window.frames[0][descriptor.data]) {
				descriptor.options.dataSource = window.frames[0][descriptor.data];
			}

		    if (window.frames[0].$(descriptor.placeholder)[name]) {
		        window.frames[0].$(descriptor.placeholder)[name](descriptor.options);
		    }
		}
	});
	return IgniteUISchedulerPlugin;
});
