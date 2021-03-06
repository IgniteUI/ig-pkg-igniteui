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
			var obj = window.frames[0][descriptor.placeholder.attr("id")];
			//if (obj && obj instanceof $.ig.DataSource) {
			if (obj && obj._accumulatedTransactionLog) { // duck typing
				// get value from data source settings
				return obj.settings[descriptor.propName];
			}
			return descriptor.defaultValue;
		},
		update: function (descriptor) {
			var ide = this.settings.ide, component = ide.componentById(descriptor.id), opts = component.options ? component.options : {},
				newOpts = $.extend({}, opts), codeMarker = component.codeMarker, 
				meta = codeMarker.extraMarkers, options = meta.options, obj = window.frames[0][descriptor.id], val = descriptor.propValue,
				isOptionAdded = false;
			newOpts[descriptor.propName] = descriptor.propValue
			if (obj && obj._accumulatedTransactionLog) {
				// what should happen when a new dataSource option is set - rebind the data source? 
				if (descriptor.args) {
				    val = descriptor.id + descriptor.propName;
				    descriptor.propType = "literal";
				}
				if (descriptor.propType === "literal") {
					//We're binding to objects in the window scope
					obj.settings[descriptor.propName] = window.frames[0][val];
					obj.settings.dataSourceVal = val;
					component.options.dataSourceVal = val;
					obj._runtimeType = null;
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
					valueOptions: descriptor.valueOptions,
					schema: descriptor.schema
				}, true, false);
			} else {
			    isOptionAdded = true;
				this.updatePropCode({
					component: component,
					propName: descriptor.propName,
					propValue: val,
					oldPropValue: descriptor.oldPropValue,
					propType: descriptor.propType,
					valueOptions: descriptor.valueOptions,
					schema: descriptor.schema
				});
			}

			if (descriptor.args) {
			    if (component && !isOptionAdded) {
			        if (!component.eventMarkers) {
			            component.eventMarkers = {};
			        }

			        var codeRange = ide.editor.find("<script id=\"code\">\n");
			        var offset = codeRange.start.row + 2;
			        var handlerMarker, funcMarker, funcBodyStart;
			        var evtName = name + descriptor.featureName + descriptor.propName;
			        evtName = evtName.toLowerCase();
			        if (!component.eventMarkers[descriptor.propName]) {
			            // build code
			            var eventString = ide._tabStr(codeMarker.baseIndent) + "window." + val + " = function (event, args) {\n" + ide._tabStr(codeMarker.baseIndent + 1) + "\n" + ide._tabStr(codeMarker.baseIndent) + "};\n";
				        // new marker => add an empty event handler and marker;
			            ide.session.insert({row: offset, column: 0}, eventString);
			            handlerMarker = new ide.RangeClass(offset, 0, offset + 3, 0); // "4" tabs
			            funcMarker = new ide.RangeClass(offset + 2, 0, offset + 2, 5);
			            ide.addMarker(handlerMarker);
			            ide.addMarker(funcMarker);
			            component.eventMarkers[descriptor.propName] = {
			                "handlerMarker": handlerMarker,
			                "functionBodyMarker": funcMarker
			            };
			        } 
			        
			    }

			    funcBodyStart = component.eventMarkers[descriptor.propName].functionBodyMarker.start.row;

			    if (!funcBodyStart) {
			        funcBodyStart = codeRange.start.row;
			    }

			    ide.editor.gotoLine(funcBodyStart, 5, true);

			    ide._deselectComponent();
			    ide.element.find(".code-button").click();
			}
		},
		render: function (container, descriptor) {
			var ds = window.frames[0][descriptor.id], ide = this.settings.ide, locale = $.plugin.dataSource.locale, dsval,
			that = this, ide = this.settings.ide, dscontainer, remoteContainer, localRemoteArea, localContainer, component = ide.componentById(descriptor.id);
			if (!(ds && ds._accumulatedTransactionLog)) {
				throw new Error("Object with ID " + descriptor.id + " is not an instance of IG Data Source");
			}
			descriptor.delayBind = 1000; // 1000 ms before the data source rebinds after a property has been changed

			container.empty(); // fix for 168980
			if (ds.settings.dataSourceVal) {
				dsval = ds.settings.dataSourceVal;
			} else if (component.options.dataSourceVal) {
				dsval = component.options.dataSourceVal;
			} else {
				dsval = ds.settings.dataSource;
			}
			if (dsval === null) {
				dsval = "";
			}
			$(".adorner-summary-sheet").addClass("data-source-summary-sheet");
			container.children(".ds-diag-container").remove();
			dscontainer = $("<div></div>").prependTo(container).addClass("ds-diag-container");
			remoteContainer = $("<div></div>").appendTo(dscontainer).addClass("ds-diag-remotecontainer");
			localRemoteArea = $("<div></div>").addClass("ds-diag-dt").prependTo(dscontainer);
			//$("<span>" + locale.isYourData + ": </span>").appendTo(localRemoteArea).addClass("ds-diag-dt-label");
			//$("<input type=\"radio\" name=\"dstype\" id=\"dstype1\" checked value=\"" + locale.remote + "\"/>").addClass("ds-diag-dt-remote").appendTo(localRemoteArea);
			//$("<label for=\"dstype1\">" + locale.remote + "</label>").appendTo(localRemoteArea).addClass("ds-diag-dt-remotelabel");
			//$("<input type=\"radio\" name=\"dstype\" id=\"dstype2\" value=\"" + locale.local + "\"/>").addClass("ds-diag-dt-local").appendTo(localRemoteArea);
			//$("<label for=\"dstype2\">" + locale.local + "</label>").appendTo(localRemoteArea).addClass("ds-diag-dt-locallabel");
			// edit schema button
			localContainer = $("<div></div>").addClass("ds-diag-localcontainer").css("display", "none").appendTo(dscontainer);
			$("<span>" + locale.editSchema + "</span>").addClass("btn btn-default ds-diag-editschema").wrap("<div class=\"ds-diag-editschema-wrapper\"/>").parent().prependTo($(".adorner-custom-footer"));
			//$("<br><label>" + locale.urlEndpoint + "</label>").addClass("ds-diag-urllabel").appendTo(remoteContainer);
			$("<div><input type=\"text\" class=\"form-control\"/><span id=\"testButton\" class=\"btn btn-default\">" + locale.test + "</span><span id=\"setButton\" class=\"btn btn-default\">" + locale.setDataSource + "</span></div>").addClass("ds-diag-url").appendTo(remoteContainer);

			
			// for local
			//$("<input type=\"radio\" name=\"localdstype\" checked value=\"variable\"/><label>Type var name containing data:</label>").appendTo(localContainer);
			$("<label>" + locale.typeVarName + ":</label>").appendTo(localContainer);
			$("<input type=\"text\" class=\"form-control\"/>").appendTo(localContainer);
			/*
			$("<input type=\"radio\" name=\"localdstype\" value=\"inline\"/><label>Or use inline data:</label>").appendTo(localContainer);
			$("<span class=\"btn btn-default ds-diag-editdatainline\">Edit Data</span>").appendTo(localContainer);
			*/
			//dscontainer.find(".ds-diag-editschema-wrapper").clone().appendTo($(".adorner-custom-footer"));

			remoteContainer.css("display", "none");
			localContainer.css("display", "block");

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
			    if (event.keyCode === 13) {
			        descriptor.propName = "dataSource";
			        descriptor.oldPropValue = event.target.value ? event.target.value.substring(0, event.target.value.length - 1) : "";
			        descriptor.propType = "string";
			        descriptor.propValue = event.target.value.trim();
			        that.update(descriptor);
			    }
			    event.preventDefault();
			    event.stopPropagation();
			});
			remoteContainer.find(".ds-diag-url > #setButton").click(function (event) {
			    descriptor.propName = "dataSource";
			    descriptor.oldPropValue = event.target.value ? event.target.value.substring(0, event.target.value.length - 1) : "";
			    descriptor.propType = "string";
			    descriptor.propValue = remoteContainer.find(".ds-diag-url > input").val().trim();
			    that.update(descriptor);
			});
			remoteContainer.find(".ds-diag-url > #testButton").click(function (event) {
				// test datasource by doing a query to it
			    var url = remoteContainer.find(".ds-diag-url > input").val(), testLabel = remoteContainer.find(".test-label"), locale = $.plugin.dataSource.locale;
				if (testLabel.length === 0) {
					testLabel = $("<div class=\"test-label\"></div>").insertAfter(remoteContainer.find("input"));
				}
				if (url) {
					$.ajax({
						url: url,
						crossDomain: true,
						dataType : "jsonp"
					}).fail(function () {
						testLabel.addClass("test-fail").removeClass("test-success").text(locale.reqestFailed);
					}).done(function () {
						testLabel.removeClass("test-fail").addClass("test-success").text(locale.success);
					});
				} else {
				    testLabel.removeClass("test-fail").removeClass("test-success").text(locale.setValidUrl);
				} 
			});
			// edit schema
			dscontainer.find(".ds-diag-editschema").click(function (event) {
				descriptor.compObject = ide.componentById(descriptor.id);
				descriptor.propName = "fields";
				descriptor.ide = ide;
				descriptor.propType = "array";
				descriptor.placeholder = descriptor.element; //TODO
				descriptor.provider = ide._codeProviders[descriptor.compObject.lib];
				var props = container.closest(".adorners").find("#propertyGrid").data("igGrid").dataSource.data();
				for (var i = 0; i < props.length; i++) {
					if (props[i].propName === "fields") {
						descriptor.schema = props[i].schema;
						descriptor.displayProp = props[i].displayProp;
						break;
					}
				}
				that.openCollectionEditor(descriptor);
			});
			localContainer.find("input").val(dsval).keyup(function (event) {
				// editing local data source
				// also update the code view
				if (event.keyCode === 13) {
					descriptor.propName = "dataSource";
					descriptor.oldPropValue = event.target.value.substring(0, event.target.value.length - 1);
					descriptor.propType = "literal";
					descriptor.propValue = event.target.value.trim();
					that.update(descriptor);
				}
			});
		}
	});
	return IgniteUIDataSourcePlugin;
});
