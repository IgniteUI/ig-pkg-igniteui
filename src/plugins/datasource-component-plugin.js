define (["./_default-component-plugin"], function (DefaultPlugin) {
	var IgniteUIDataSourcePlugin = IgniteUIDataSourcePlugin || DefaultPlugin.extend({
		init: function (options) {
			this._super(options);
		},
		getName: function () {
			return "igDataSource";
		},
		getMarkup: function (descriptor) {
			return null; // this is a non-visual component so it doesn't have any markup
		},
		getCodeEditorScriptSnippet: function (descriptor) {
			var code = "\t\t\t\tvar " + descriptor.id + " = new $.ig.DataSource({\n";
			var orderedReturnProps = [];
			// now write options / settings
			code += "\n\t\t\t\t});\n";
			return {
				codeString: code,
				lineCount: 3,
				orderedProps: orderedReturnProps
			};
		},
		getCodeEditorMarkupSnippet: function (descriptor) {
			return null;
		},
		/*
		addExtraMarkers: function (descriptor) {
			
		},
		*/
		requiresInitialization: function () {
			return true;
		},
		initComponent: function (descriptor) {
			//N/A
		},
		update: function (descriptor) {
			var ide = this.settings.ide;
			var component = ide.componentById(descriptor.id);
			var opts = component.options ? component.options : {};
			var newOpts = $.extend({}, opts);
			newOpts[descriptor.propName] = descriptor.propValue;
			// what should happen when a new dataSource option is set - rebind the data source? 
			var codeMarker = component.codeMarker;
			var meta = codeMarker.extraMarkers;
			var options = meta.options;
			if (!options[descriptor.propName]) {
				this.addPropCode({
					component: component,
					propName: descriptor.propName,
					propValue: descriptor.propValue,
					oldPropValue: descriptor.oldPropValue,
					defaultValue: descriptor.propValue,
					propType: descriptor.propType,
					valueOptions: descriptor.valueOptions
				}, true, false);
			} else {
				this.updatePropCode({
					component: component,
					propName: descriptor.propName,
					propValue: descriptor.propValue,
					oldPropValue: descriptor.oldPropValue,
					propType: descriptor.propType,
					valueOptions: descriptor.valueOptions
				});
			}
			if (descriptor.args) {
				ide.element.find(".code-button").click();

			}
		},
		/*
		render: function (container, descriptor) {
			
		}
		*/
	});
	return IgniteUIDataSourcePlugin;
});
