define(["./datasource-jsonp-component-plugin"], function (IgniteUIJSONPDataSourcePlugin) {
	var IgniteUINorthwindDataSourcePlugin = IgniteUINorthwindDataSourcePlugin || IgniteUIJSONPDataSourcePlugin.extend({
		init: function (options) {
			this._super(options);
		},
		getCodeEditorScriptSnippet: function (descriptor) {
			var code = "\t\t\t\twindow." + descriptor.id + " = new $.ig.JSONPDataSource({\n";
			code += "\t\t\t\t\tdataSource: \"http://services.odata.org/Northwind/Northwind.svc/Customers?$format=json&$select=CustomerID,CompanyName,ContactName&$callback=?\",\n";
			code += "\t\t\t\t\tresponseDataKey: \"value\",\n";
			code += "\t\t\t\t\tresponseTotalRecCountKey: \"odata.count\",\n";
			code += "\t\t\t\t\ttype: \"json\"\n";
			var orderedReturnProps = [];
			// now write options / settings
			code += "\t\t\t\t});\n";
			orderedReturnProps.push({
				name: "dataSource",
				value: "http://services.odata.org/Northwind/Northwind.svc/Customers?$format=json&$select=CustomerID,CompanyName,ContactName&$callback=?",
				type: "string"
			});
			orderedReturnProps.push({
				name: "responseDataKey",
				value: "value",
				type: "string"
			});
			orderedReturnProps.push({
				name: "responseTotalRecCountKey",
				value: "odata.count",
				type: "string"
			});
			orderedReturnProps.push({
				name: "type",
				value: "json",
				type: "string"
			});
			return {
				codeString: code,
				lineCount: 6,
				orderedProps: orderedReturnProps
			};
		},
		initComponent: function (descriptor) {
			window.frames[0][descriptor.id] = new $.ig.JSONPDataSource({
				dataSource: "http://services.odata.org/Northwind/Northwind.svc/Customers?$format=json&$select=CustomerID,CompanyName,ContactName&$callback=?",
				responseDataKey: "value",
				responseTotalRecCountKey: "odata.count"
			}); 
		}
	});
	return IgniteUINorthwindDataSourcePlugin;
});
