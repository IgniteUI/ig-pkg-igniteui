define (["./datasource-component-plugin"], function (DataSourcePlugin) {
	var IgniteUINorthwindDataSourcePlugin = IgniteUINorthwindDataSourcePlugin || DataSourcePlugin.extend({
		init: function (options) {
			this._super(options);
		},
		getCodeEditorScriptSnippet: function (descriptor) {
			var code = "\t\t\t\twindow." + descriptor.id + " = new $.ig.JSONPDataSource({\n";
			//code += "\t\t\t\t\tdataSource: \"http://services.odata.org/Northwind/Northwind.svc/Customers?$format=json&$select=CustomerID,CompanyName,ContactName&$callback=?\",\n";
			//code += "\t\t\t\t\tresponseDataKey: \"value\",\n";
			//code += "\t\t\t\t\tresponseTotalRecCountKey: \"odata.count\"\n";
			//var orderedReturnProps = [];
			// now write options / settings
			code += "\t\t\t\t});\n";
			//orderedReturnProps.push({
			//	name: "dataSource",
			//	value: "http://services.odata.org/Northwind/Northwind.svc/Customers?$format=json&$select=CustomerID,CompanyName,ContactName&$callback=?",
			//	type: "string"
			//});
			//orderedReturnProps.push({
			//	name: "responseDataKey",
			//	value: "value",
			//	type: "string"
			//});
			//orderedReturnProps.push({
			//	name: "responseTotalRecCountKey",
			//	value: "odata.count",
			//	type: "string"
			//});
			return {
				codeString: code,
				lineCount: 2				
			};
		},
		initComponent: function (descriptor) {
			window.frames[0][descriptor.id] = new $.ig.JSONPDataSource({
			}); //dataBind();
		}
	});
	return IgniteUINorthwindDataSourcePlugin;
});
