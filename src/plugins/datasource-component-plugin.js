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
			var code = "\t\t\t\twindow." + descriptor.id + " = new $.ig.DataSource({\n";
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
			window.frames[0][descriptor.id] = new $.ig.DataSource({});
		},
		getPropValue: function (descriptor) {
			// locate the dataSource control. Note that since this is not a widget, it's also not associated with any DOM elements
			// since it's not a visual control, and can be instantiated anywhere (including anonymous functions), there is no easy 
			// way to get hold of the reference to that data source, unless its variable name is stored in the global (window) context.
			var obj = descriptor.iframe[descriptor.placeholder.attr("id")];
			if (obj && obj instanceof $.ig.DataSource) {
				// get value from data source settings
				return obj.settings[descriptor.propName];
			}
			return descriptor.defaultValue;
		},
		update: function (descriptor) {
			var ide = this.settings.ide;
			var component = ide.componentById(descriptor.id);
			var opts = component.options ? component.options : {};
			var newOpts = $.extend({}, opts);
			newOpts[descriptor.propName] = descriptor.propValue;
			var codeMarker = component.codeMarker;
			var meta = codeMarker.extraMarkers;
			var options = meta.options;
			// set it in the ds
			var obj = window.frames[0][descriptor.id];
			var val = descriptor.propValue;
			if (obj && obj instanceof $.ig.DataSource) {
				// what should happen when a new dataSource option is set - rebind the data source? 
				if (descriptor.args) {
					val = "function (event, args) { }";
					descriptor.propType = "literal";
				}
				if (descriptor.propType === "literal") {
					//We're binding to objects in the window scope
					obj.settings[descriptor.propName] = window[val];
				} else {
					obj.settings[descriptor.propName] = val;
				}
				var rebind = function () {
					//console.log("rebinding data source");
					obj.dataBind();
				}
				if (descriptor.delayBind) {
					// check if we have a wait in progress or not
					if (this.rebindTimeoutID) {
						clearTimeout(this.rebindTimeoutID);
					}
					this.rebindTimeoutID = setTimeout(rebind, descriptor.delayBind);
				} else {
					rebind();
				}
			}
			if (!options[descriptor.propName]) {
				this.addPropCode({
					component: component,
					propName: descriptor.propName,
					propValue: val,
					oldPropValue: descriptor.oldPropValue,
					defaultValue: val,
					propType: descriptor.propType,
					valueOptions: descriptor.valueOptions
				}, true, false);
			} else {
				this.updatePropCode({
					component: component,
					propName: descriptor.propName,
					propValue: val,
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
			var ds = window.frames[0][descriptor.id];
			var ide = this.settings.ide;
			var that = this;
			var ide = this.settings.ide;
			if (!(ds instanceof $.ig.DataSource)) {
				throw new Error("Object with ID " + descriptor.id + " is not an instance of IG Data Source");
			}
			descriptor.delayBind = 1000; // 1000 ms before the data source rebinds after a property has been changed

			var dsval = ds.settings.dataSource;
			if (dsval === null) {
				dsval = "";
			}
			container.children(".ds-diag-container").remove();
			var dscontainer = $("<div></div>").prependTo(container).addClass("ds-diag-container");
			var remoteContainer = $("<div></div>").appendTo(dscontainer).addClass("ds-diag-remotecontainer");
			var localRemoteArea = $("<div></div>").addClass("ds-diag-dt").prependTo(dscontainer);
			$("<span>Is Your Data: </span>").appendTo(localRemoteArea).addClass("ds-diag-dt-label");
			$("<input type=\"radio\" name=\"dstype\" id=\"dstype1\" checked value=\"Remote\"/>").addClass("ds-diag-dt-remote").appendTo(localRemoteArea);
			$("<label for=\"dstype1\">Remote</label>").appendTo(localRemoteArea).addClass("ds-diag-dt-remotelabel");
			$("<input type=\"radio\" name=\"dstype\" id=\"dstype2\" value=\"Local\"/>").addClass("ds-diag-dt-local").appendTo(localRemoteArea);
			$("<label for=\"dstype2\">Local</label>").appendTo(localRemoteArea).addClass("ds-diag-dt-locallabel");
			// edit schema button
			$("<span>Edit Schema</span>").addClass("btn btn-default ds-diag-editschema").appendTo(remoteContainer);
			$("<br><label>URL Endpoint</label>").addClass("ds-diag-urllabel").appendTo(remoteContainer);
			$("<div><input type=\"text\" class=\"form-control\"/><span class=\"btn btn-default\">Test</span></div>").addClass("ds-diag-url").appendTo(remoteContainer);

			var localContainer = $("<div></div>").addClass("ds-diag-localcontainer").css("display", "none").appendTo(dscontainer);
			// for local
			//$("<input type=\"radio\" name=\"localdstype\" checked value=\"variable\"/><label>Type var name containing data:</label>").appendTo(localContainer);
			$("<label>Type var name containing data:</label>").appendTo(localContainer);
			$("<input type=\"text\" class=\"form-control\"/>").appendTo(localContainer);
			/*
			$("<input type=\"radio\" name=\"localdstype\" value=\"inline\"/><label>Or use inline data:</label>").appendTo(localContainer);
			$("<span class=\"btn btn-default ds-diag-editdatainline\">Edit Data</span>").appendTo(localContainer);
			*/
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
			remoteContainer.find(".ds-diag-url > input").val(dsval).keyup(function (event) {
				// update the dataSource's url property
				//ds.settings.dataSource = event.target.value; // validate?
				//also update the code view
				descriptor.propName = "dataSource";
				descriptor.oldPropValue = event.target.value.substring(0, event.target.value.length - 1);
				descriptor.propType = "string";
				descriptor.propValue = event.target.value;
				that.update(descriptor);
			});
			remoteContainer.find(".ds-diag-url > .btn").click(function (event) {
				// test datasource by doing a query to it
				var url = ds.settings.dataSource, testLabel = remoteContainer.find(".test-label");
				if (testLabel.length === 0) {
					testLabel = $("<div class=\"test-label\"></div>").insertAfter(remoteContainer.find("input"));
				}
				if (url) {
					$.ajax({
						url: url,
						crossDomain: true,
						dataType : "jsonp"
					}).fail(function () {
						testLabel.addClass("test-fail").removeClass("test-success").text("Request failed.");
					}).done(function () {
						testLabel.removeClass("test-fail").addClass("test-success").text("Success!");
					});
				} else {
					testLabel.removeClass("test-fail").removeClass("test-success").text("Please set a valid URL");
				} 
			});
			// edit schema
			dscontainer.find(".ds-diag-editschema").click(function (event) {
				descriptor.compObject = ide.componentById(descriptor.id);
				descriptor.iframe = window.frames[0];
				descriptor.propName = "fields";
				descriptor.ide = ide;
				descriptor.propType = "object";
				descriptor.placeholder = descriptor.element; //TODO
				descriptor.provider = ide._codeProviders[descriptor.compObject.lib];
				var props = container.closest(".adorners").find("#propertyGrid").data("igGrid").dataSource.data();
				for (var i = 0; i < props.length; i++) {
					if (props[i].propName === "fields") {
						descriptor.schema = props[i].schema;
						break;
					}
				}
				that.openCollectionEditor(descriptor);
			});
			dscontainer.find(".ds-diag-editdatainline").click(function (event) {
				//openPropertyEditor
			});
			localContainer.find("input").val(dsval).keyup(function (event) {
				// editing local data source
				//ds.settings.dataSource = event.target.value; // validate?
				// also update the code view
				descriptor.propName = "dataSource";
				descriptor.oldPropValue = event.target.value.substring(0, event.target.value.length - 1);
				descriptor.propType = "literal";
				descriptor.propValue = event.target.value;
				that.update(descriptor);
			});
		}
	});
	return IgniteUIDataSourcePlugin;
});
