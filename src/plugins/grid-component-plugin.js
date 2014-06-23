define (["./_default-component-plugin"], function (DefaultPlugin) {
	var IgniteUIGridPlugin = IgniteUIGridPlugin || DefaultPlugin.extend({
		init: function (options) {
			this._super(options);
		},
		getName: function () {
			return "igGrid";
		},
		_getWidgetName: function () {
			return "igGrid";
		},
		getMarkup: function (descriptor) {
			return "<div style=\"display:inline-block;\" id=\"" + descriptor.id + "\"></div>";
		},
		getCodeEditorScriptSnippet: function (descriptor) {
			var code = "";
			var opts = descriptor.options;
			var lineCount = 4;
			var orderedReturnProps = [];
			var xtraMarkup = "\t\t\t\t\tfeatures: []";
			//A.T. - we can either drop with no features in the code editor
			// or an empty array - empty arr makes it easier to manage with markers
			code = "\t\t\t\t$(\"#" + descriptor.id + "\").igGrid({\n" + xtraMarkup;
			//	"\t\t\t\t\theight: " + opts.height + ",\n" + 
			//	"\t\t\t\t\twidth: " + opts.width + xtraMarkup;
			/*
			orderedReturnProps.push({
				name: "height",
				value: opts.height,
				type: "number"
			});
			orderedReturnProps.push({
				name: "width",
				value: opts.width,
				type: "number"
			});
			*/
			orderedReturnProps.push({
				name: "features",
				value: [],
				type: "array"
			});
			if (descriptor.data && window[descriptor.data]) {
				code += ",\n\t\t\t\t\tdataSource: " + descriptor.data;
				orderedReturnProps.push({
					name: "dataSource",
					value: descriptor.data,
					type: "literal"
				});
			}
			var props = this.settings.packageInfo.components[descriptor.type].properties;
			for (var key in opts) {
			//	if (opts.hasOwnProperty(key) && key !== "dataSource" && key !== "height" && key !== "width") {
				if (opts.hasOwnProperty(key) && key !== "dataSource" && key !== "features") {
					orderedReturnProps.push({
						name: key,
						value: opts[key],
						type: props[key].type
					});
					if (props[key].type === "string") {
						code += ",\n\t\t\t\t\t" + key + ": \"" + opts[key] + "\"";
						orderedReturnProps[orderedReturnProps.length - 1].type = "string";
					} else {
						code += ",\n\t\t\t\t\t" + key + ": " + opts[key];
						orderedReturnProps[orderedReturnProps.length - 1].type = "literal";
					}
					lineCount++;
				}
			}
			code += "\n\t\t\t\t});\n";
			return {
				codeString: code, 
				lineCount: lineCount, 
				orderedProps: orderedReturnProps
			};
			//return this.evalTemplate("grid.code.js", descriptor);
		},
		addExtraMarkers: function (descriptor) {
			this._super(descriptor);
			// we don't want to hardcode this value but find it in the current range
			// it may well happen that someone adds lots of options and extra code *above* the features or any other object
			var featuresRange = this.settings.editor.find("features: [],", {start: descriptor.marker.range.start});
			featuresRange = new descriptor.rclass(featuresRange.start.row, 0, featuresRange.end.row, featuresRange.end.column);
			featuresRange.start = this.settings.editor.getSession().doc.createAnchor(featuresRange.start); 
			featuresRange.end = this.settings.editor.getSession().doc.createAnchor(featuresRange.end);
			if (!descriptor.marker.extraMarkers.options) {
				descriptor.marker.extraMarkers.options = {};
			}
			descriptor.marker.extraMarkers.options.features = {marker: featuresRange};
		},
		customPropertyEditor: function (descriptor) {
			if (this._super && this._super(descriptor)) {
				return;
			}
			// columns, features, dataSource, etc. - also reuse those UIs
			// when something gets changed in this editor, we want to also update the code editor as well as the component itself
			var p = descriptor.propName, rec = descriptor, packageInfo = this.settings.packageInfo, session = descriptor.editorSession, $this = this, currentValue = this.getPropValue(descriptor), exists;
			if (p === "features") {
				// open features editor
				var container = this.openCollectionEditor(descriptor);
				var ddtmpl = $("#dropdownTemplate").html();
				var texts = [];
				// TODO: Refactor drop down logic into ide-ui
				var Mustache = require("mustache");
				for (var i in rec.schema) {
					if (rec.schema.hasOwnProperty(i)) {
						exists = false;
						for (var j = 0; j < currentValue.length; j++) {
							if (currentValue[j].name === i) {
								exists = true;
								break;
							}
						}
						if (!exists) {
							texts.push({
								key: i,
								text: i,
								title: rec.schema[i].description // tooltip
							});
						}
					}
				}
				//var dd_id = "features_dropDown";
				var propData = {
					dropdownId: "features_dropDown",
					titleText: "Change property value",
					closeOnClick: true,
					defaultVal: rec.propValue,
					defaultKey: rec.propValue,
					itemTexts: texts
				};
				$(".dropdown-container[data-id=features_dropDown]").off().remove();
				var enumHtml = Mustache.to_html(ddtmpl, propData);
				var td = $("<div />").insertBefore(container.find("a.add-item"));
				container.find("a.add-item").addClass("add-feature").text("Add");
				td.html(enumHtml).addClass("enum-prop-edit");
				var label = td.find(".ig-dropdown-label");
				label.css({
					display: "inline-block",
					width: td.innerWidth() - td.find(".input-group-btn > button").outerWidth()
				});
				label.toggleClass("non-default-val", rec.propValue !== rec.defaultValue);
				td.find(".layout-menu").css({
					"min-height": 0
				});
				td.find(".dropdown-container").css({
					position: "absolute",
					display: "none",
					"z-index": 20000
				}).addClass("adorner-prop-menu").appendTo("body");
				td.find(".ig-dropdown-label,.ig-dropdown-button").on("click", function (event) {
					var target = $(event.target), dd = target.closest(".ig-dropdown");
					var ddlist = dd.find(".dropdown-container");
					if (ddlist.length === 0) {
						ddlist = $("body").find(".dropdown-container[data-id=features_dropDown]");
					}
					ddlist.css({
						width: td.innerWidth()
					});
					$this.settings.ide._toggleDropDown(dd, ddlist);
					return false;
				});
				td.find(".ig-dropdown-label,.ig-dropdown-button").on("blur", function (event) {
					var target = $(event.target), dd = target.closest(".ig-dropdown"),
						ddlist = dd.find(".dropdown-container");
					$this.settings.ide._toggleDropDown(dd, ddlist);
					return false;
				});
				$(".dropdown-container[data-id=features_dropDown]").on("mouseup", "ul > li", function (event) {
					var $this = $(this), ddlist = $(event.target).closest(".dropdown-container");
					var dd = $("body").find(".ig-dropdown[data-id=features_dropDown]");
					var oldVal = label.attr("data-key");
					label.text($this.attr("data-text")).attr("data-key", $this.attr("data-key"));
					descriptor.ide._toggleDropDown(dd, ddlist);
				}).on("mousedown click", "ul > li", function (event) {
					return false;
				});
				
				container.off();
				container.on("click", ".add-item", function (event) {
					$this.addFeatureHandler(descriptor, td, $(this).closest("li"));
					return false;
				});
				container.on('click', '.adorner-collection-edit', function (event) {
					$this.editFeatureHandler(descriptor, $(this));
					return false;
				});
				container.on('click', '.delete-item', function (event) {
					$this.deleteFeatureHandler(descriptor, $(this).closest("li"));
				});
			}
		},
		loadFeatureInfo: function (descriptor, name) {
			var features = this.settings.packageInfo.components[descriptor.type].properties.features,
				feature = features.components[name],
				schema;
			if (feature && feature.properties) {
				schema = feature;
			} else {
				var url = this.settings.packageInfo.configPath + "/" + descriptor.schema[name].schemaRef + ".json";
				// load metadata for every feature
				var json = $.ajax({ // TODO: we could refactor this usage into a shared func on package info perhaps
					type: "GET",
					url: url,
					cache: true,
					dataType: "json",
					async: false
				});
				features.components[name] = $.parseJSON(json.responseText);
				schema = features.components[name];
			}
			return schema;
		},
		addFeatureHandler: function (descriptor, td, target) {
			var label = td.find(".ig-dropdown-label"),
				labelText = label.text();
			if (!labelText) {
				return;
			}
			var value = this.getPropValue(descriptor),
				schema;
			try {
				schema = this.loadFeatureInfo(descriptor, labelText);
			} catch (e) {
				console.error("Could not load feature info for '" + labelText + "'. Error: " + e);
			}
			var descr = {
				oldPropValue: value,
				schema: schema.properties
			};
			if (!value) {
				value = [];
			}
			value.push({
				name: labelText
			});
			label.text("");
			$(".dropdown-container[data-id=features_dropDown] li[data-text=" + labelText + "]").remove();
			$("<li><span class='delete-item glyphicon glyphicon-trash'></span><a href='#' class='adorner-collection-edit'>" + labelText + "</a></li>").insertBefore(target);
			descr.propValue = value;
			descriptor.updateFunction(descr);
		},
		editFeatureHandler: function (descriptor, target) {
			var labelText = target.text(),
				$this = this,
				propertyExplorer = require("ide-propertyexplorer"),
				container = $("<div class='adorner-property-sheet' data-property='" + labelText + "'></div>").insertAfter(descriptor.ide.currentAdorner()),
				search = $("<div class=\"input-group prop-search\"><input type=\"text\" class=\"form-control prop-search-input\" placeholder=\"Search ...\"/></div>").appendTo(container),
				input = search.children(".prop-search-input"),
				evtsEditor,
				editor,
				options = $.extend({}, descriptor),
				eventsOpts,
				properties,
				property,
				count = 0,
				schema,
				events,
				evtData = [],
				filterFn, apiUrl, apiLinkElement = $(".api-link"),
				updateComp = function (descr) {
					var features = $this.getPropValue(descriptor),
						i,
						feature,
						schema;
					for (i = 0; i < features.length; i++ ) {
						if (features[i].name === labelText) {
							feature = features[i];
							break;
						}
					}
					if (!feature) {
						return;
					}
					feature[descr.propName] = descr.propValue;
					var opt = descriptor;
					if (descr.handlerFlag) {
						opt.args = descr.args;
						opt.handlerFlag = true;
						opt.funcName = descr.funcName;
					}
					opt.propValue = features;
					schema = $this.settings.packageInfo.components[descriptor.type].properties.features.components;
					schema.heterogeneous = true;
					opt.schema = schema;
					// updateComponent also updates the code editor
					if (descriptor.updateFunction) {
						descriptor.updateFunction(opt);
					} else {
						descriptor.provider.updateComponent(opt);
					}
				};
			filterFn = function () {
				// filter properties and events
				var val = input.val().toLowerCase();
				var exprs = [
					{fieldName: "propName", expr: val, cond: "contains", logic: "OR"},
					{fieldName: "propValue", expr: val, cond: "contains", logic: "OR"}
				];
				$("#featureEditor").igGridFiltering("filter", exprs, true);
				$("#featureEvtsEditor").igGridFiltering("filter", exprs, true);
			};
			descriptor.ide._setupSearch(input, filterFn);
			evtsEditor = $("<div class='adorner-featureEvts-list'><div class='adorner-label adorner-featureEvts-label'>EVENTS</div></div>").appendTo(container);
			editor = $("<div class='adorner-feature-list'><div class='adorner-label adorner-feature-label'>PROPERTIES/OPTIONS</div></div>").appendTo(container);
			options.id = "featureEditor";
			options.containerId = "feature";
			options.parent = editor;
			options.data = [];
			options.updateFunction = updateComp;
			//In case of feature editing we need to change API link. 
			if (apiLinkElement && apiLinkElement.length > 0) {
				apiUrl = apiLinkElement.attr("href");
				if (apiUrl && apiUrl.length > 0) {
					apiUrl = apiUrl.substring(0, apiUrl.lastIndexOf("igGrid"));
					apiUrl += "igGrid";
					apiUrl += target.text();
					apiLinkElement.attr("href", apiUrl);
				}	
			}
			try {
				schema = this.loadFeatureInfo(descriptor, labelText);
			} catch (e) {
				console.error("Could not load feature info for '" + labelText + "'. Error: " + e);
			}
			if (schema.events) {
				events = schema.events;
				for (var evt in events) {
					if (events.hasOwnProperty(evt)) {
						evtData.push({
							id: count++,
							propName: evt,
							propValue: "",
							propType: "event",
							description: events[evt].description,
							args: events[evt].args
						});
					}
				}
			}
			eventsOpts = $.extend({}, options);
			eventsOpts.id = "featureEvtsEditor";
			eventsOpts.containerId = "featureEvts";
			eventsOpts.parent = evtsEditor;
			eventsOpts.data = evtData;
			count = 0;
			properties = schema.properties;
			for (property in properties) {
				if (properties.hasOwnProperty(property) && property !== "name") {
					options.data.push({
						id: count++,
						propName: property,
						defaultValue: properties[property].defaultValue,
						propValue: this.getFeatureValue(descriptor.id, labelText, property, properties[property].defaultValue),
						propType: properties[property].type,
						description: properties[property].description,
						valueOptions: properties[property].valueOptions,
						displayProp: properties[property].designerDisplayProperty,
						args: properties[property].args,
						schema: properties[property].schema
					});
				}
			}
			// render and open a property explorer
			propertyExplorer(eventsOpts);
			propertyExplorer(options);
			descriptor.ide.adornerMoveLeft();
		},
		deleteFeatureHandler: function (descriptor, target) {
			var labelText = target.text(), value = this.getPropValue(descriptor), schema, i, opt = $.extend({}, descriptor);
			target.remove();
			for (i = 0; i < value.length; i++) {
				if (value[i].name === labelText) {
					value.splice(i, 1);
					break;
				}
			}
			schema = this.settings.packageInfo.components[opt.type].properties.features.components;
			opt.propValue = value;
			opt.propType = "array";
			schema.heterogeneous = true;
			opt.schema = schema;
			$("<li><a href='#'>" + labelText + "</a></li>").attr({
					"data-text": labelText,
					"data-key": labelText,
					"title": labelText
				}).appendTo(".dropdown-container[data-id=features_dropDown] ul");
			descriptor.provider.updateComponent(opt);
		},
		getFeatureValue: function (id, feature, prop, defaultValue) {
			var name = this._getWidgetName();
			var data = typeof window.frames[0].$("#" + id + "_table").data === "function" && window.frames[0].$("#" + id + "_table").data(name + feature);
			if (data) {
				return data.options && typeof(data.options[prop]) !== "undefined" ? data.options[prop] : defaultValue;
			}
			return defaultValue;
		},
		setPropertyExplorerValueContents: function (descriptor) {
			if (descriptor.propName === "features") {
				descriptor.td.html("<span class='custom-editor'>Configure...</span>");
			} else if (this._super) {
				this._super(descriptor);
			}
		}
		/*
		render: function(descriptor) {
			// THIS IS WHERE WE PUT FULLY CUSTOM EDITORS FOR COMPONENTS
		},
		*/
	});
	return IgniteUIGridPlugin;
});
