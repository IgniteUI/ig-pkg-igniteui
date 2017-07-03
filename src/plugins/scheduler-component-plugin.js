define (["./_default-component-plugin"], function (DefaultPlugin) {
	var IgniteUISchedulerPlugin = IgniteUISchedulerPlugin || DefaultPlugin.extend({
		initComponent: function (descriptor) {
		    var name = this._getWidgetName(descriptor.type);
			
			// Schedule data needs translated scheduler files and therefore it is placed in a differenct schedulerDataSource.js (all default datasource are in datasources.js file)
			if (descriptor.data && window.frames[0][descriptor.data]) {
				descriptor.options.dataSource = window.frames[0][descriptor.data];

				// dsID is the name of the data source, needed to save and restore scheduler data source,
				// otherwise the data source itself (because it is object with circular references) cannot be stringified. 
				descriptor.options.dsID = descriptor.data;
			}

		    if (window.frames[0].$(descriptor.placeholder)[name]) {
		        window.frames[0].$(descriptor.placeholder)[name](descriptor.options);
		    }
		}
	});
	return IgniteUISchedulerPlugin;
});
