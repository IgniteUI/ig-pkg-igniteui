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
		getPropValue: function (descriptor) {
			// locate the dataSource control. Note that since this is not a widget, it's also not associated with any DOM elements
			// since it's not a visual control, and can be instantiated anywhere (including anonymous functions), there is no easy 
			// way to get hold of the reference to that data source, unless its variable name is stored in the global (window) context.
			var data = null;
			if (data) {

			}
			return descriptor.defaultValue;
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
		render: function (container, descriptor) {
			container.remove(".ds-diag-container");
			var dscontainer = $("<div></div>").prependTo(container).addClass("ds-diag-container");
			var remoteContainer = $("<div></div>").appendTo(dscontainer).addClass("ds-diag-remotecontainer");
			var localRemoteArea = $("<div></div>").addClass("ds-diag-dt").prependTo(dscontainer);
			$("<span>Is Your Data</span>").appendTo(localRemoteArea).addClass("ds-diag-dt-label");
			$("<input type=\"radio\" name=\"dstype\" checked value=\"Remote\"/>").addClass("ds-diag-dt-remote").appendTo(localRemoteArea);
			$("<span>Remote</span>").appendTo(localRemoteArea).addClass("ds-diag-dt-remotelabel");
			$("<input type=\"radio\" name=\"dstype\" value=\"Local\"/>").addClass("ds-diag-dt-local").appendTo(localRemoteArea);
			$("<span>Local</span>").appendTo(localRemoteArea).addClass("ds-diag-dt-locallabel");
			// edit schema button
			$("<span>Edit Schema</span>").addClass("btn btn-default ds-diag-editschema").appendTo(remoteContainer);
			$("<br><label>URL Endpoint</label>").addClass("ds-diag-urllabel").appendTo(remoteContainer);
			$("<div><input type=\"text\" class=\"form-control\"/><span class=\"btn btn-default\">Test</span></div>").addClass("ds-diag-url").appendTo(remoteContainer);

			var localContainer = $("<div></div>").addClass("ds-diag-localcontainer").css("display", "none").appendTo(dscontainer);
			// for local
			$("<label>Type variable name containing data:</label>").appendTo(localContainer);
			$("<input type=\"text\" class=\"form-control\"/>").appendTo(localContainer);
			dscontainer.find(".ds-diag-editschema").clone().appendTo(localContainer);

			localRemoteArea.children("input[name=dstype]").on("change", function (event) {
				if ($(event.target).hasClass("ds-diag-dt-local")) {
					// hide remote, show local
					remoteContainer.css("display", "none");
					localContainer.css("display", "block");
				} else {
					// hide local, show remote
					localContainer.css("display", "none");
					remoteContainer.css("display", "block");
				}
			});
		}
	});
	return IgniteUIDataSourcePlugin;
});
