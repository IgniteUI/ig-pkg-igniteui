define (["./datasource-component-plugin"], function (DataSourcePlugin) {
	var IgniteUINorthwindDataSourcePlugin = IgniteUINorthwindDataSourcePlugin || DataSourcePlugin.extend({
		init: function (options) {
			this._super(options);
		},
		getCodeEditorScriptSnippet: function (descriptor) {
			var code = "\t\t\t\twindow." + descriptor.id + " = new $.ig.JSONPDataSource({\n";
			code += "\t\t\t\t\tdataSource: \"http://services.odata.org/Northwind/Northwind.svc/Customers?$format=json&$select=CustomerID,CompanyName,ContactName&$callback=?\",\n";
			code += "\t\t\t\t\tresponseDataKey: \"value\"\n";
			var orderedReturnProps = [];
			// now write options / settings
			code += "\t\t\t\t}).dataBind();\n";
			orderedReturnProps.push({
				name: "dataSource",
				value: "http://services.odata.org/Northwind/Northwind.svc/Customers?$format=json&$select=CustomerID,CompanyName,ContactName&$callback=?",
				type: "string"
			});
			return {
				codeString: code,
				lineCount: 4,
				orderedProps: orderedReturnProps
			};
		},
		initComponent: function (descriptor) {
			window.frames[0][descriptor.id] = new $.ig.JSONPDataSource({
				dataSource: "http://services.odata.org/Northwind/Northwind.svc/Customers?$format=json&$select=CustomerID,CompanyName,ContactName&$callback=?",
				responseDataKey: "value"
			}); //dataBind();
		}
	});
	return IgniteUINorthwindDataSourcePlugin;
});
