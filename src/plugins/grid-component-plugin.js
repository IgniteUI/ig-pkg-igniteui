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
			var lineCount = 5;
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
			var featuresRange = this.settings.editor.find("features", {start: descriptor.marker.range.start});
			featuresRange = new descriptor.rclass(featuresRange.start.row, 0, featuresRange.start.row + 1, 0);
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
			var p = descriptor.propName, rec = descriptor, packageInfo = this.settings.packageInfo, session = descriptor.editorSession, $this = this;
			if (p === "features") {
				// open features editor
				var container = this.openCollectionEditor(descriptor);
				var ddtmpl = $("#dropdownTemplate").html();
				var texts = [];
				// TODO: Refactor drop down logic into ide-ui
				var Mustache = require("mustache");
				for (var i in rec.schema) {
					if (rec.schema.hasOwnProperty(i)) {
						texts.push({
							key: i,
							text: i,
							title: rec.schema[i].description // tooltip
						});
					}
				}
				var dd_id = "features_dropDown";
				var propData = {
					dropdownId: dd_id,
					titleText: "Change property value",
					closeOnClick: true,
					defaultVal: rec.propValue,
					defaultKey: rec.propValue,
					itemTexts: texts
				};
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
						ddlist = $("body").find(".dropdown-container[data-id=" + dd.attr("data-id") + "]");
					}
					$this.settings.ide._toggleDropDown(dd, ddlist);
					if (ddlist.is(":visible")) {
						$("input.ig-hidden").attr("data-id", dd.attr("data-id")).focus();
					}
					event.stopPropagation();
					event.preventDefault();
				})
				$(".dropdown-container[data-id=" + dd_id + "] ul > li").on("mouseup", function (event) {
					var $this = $(this), ddlist = $(event.target).closest(".dropdown-container");
					var dd = $("body").find(".ig-dropdown[data-id=" + ddlist.attr("data-id") + "]");
					var oldVal = label.attr("data-key");
					label.text($this.attr("data-text")).attr("data-key", $this.attr("data-key"));
					descriptor.ide._toggleDropDown(dd, ddlist);
				}).on("mousedown click", function (event) {
					event.preventDefault();
					event.stopPropagation();
				});
				
				container.off();
				container.on("click", ".add-item", function () {
					var label = td.find(".ig-dropdown-label"),
						labelText = label.text();
					if (!labelText) {
						return;
					}
					var value = $this.getPropValue(descriptor),
						schema;
					try {
						schema = $this.loadFeatureInfo(descriptor, labelText);
					} catch (e) {
						console.error("Could not load feature info for '" + labelText + "'. Error: " + e);
					}
					var descr = {
						oldPropValue: value,
						schema: schema
					};
					if (!value) {
						value = [];
					}
					value.push({
						name: labelText
					});
					label.text("");
					$(".dropdown-container[data-id=" + dd_id + "] li[data-text=" + labelText + "]").remove();
					$("<li><span class='delete-item glyphicon glyphicon-trash'></span><a href='#' class='adorner-collection-edit'>" + labelText + "</a></li>").insertBefore($(this).closest("li"));
					descr.propValue = value;
					descriptor.updateFunction(descr);
					event.stopPropagation();
					return false;
				});
				container.on('click', '.adorner-collection-edit', function (event) {
					var labelText = $(this).text(),
						propertyExplorer = require("ide-propertyexplorer"),
						container = $("<div class='adorner-property-sheet' data-property='" + $(this).text() + "'></div>").insertAfter(descriptor.ide.currentAdorner()),
						editor = $('<div class="adorner-feature-list"></div>').appendTo(container),
						options = $.extend({}, descriptor),
						property,
						count = 0,
						schema,
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
					options.id = "featureEditor";
					options.containerId = "feature";
					options.parent = editor;
					options.data = [];
					options.updateFunction = updateComp;
					try {
						schema = $this.loadFeatureInfo(descriptor, labelText);
					} catch (e) {
						console.error("Could not load feature info for '" + labelText + "'. Error: " + e);
					}
					for (property in schema) {
						if (schema.hasOwnProperty(property) && property !== "name") {
							options.data.push({
								id: count++,
								propName: property,
								defaultValue: schema[property].defaultValue,
								propValue: schema[property].defaultValue,
								propType: schema[property].type,
								description: schema[property].description,
								valueOptions: schema[property].valueOptions,
								displayProp: schema[property].designerDisplayProperty,
								args: schema[property].args,
								schema: schema[property].schema
							});
						}
					}
					// render and open a property explorer
					propertyExplorer(options);
					descriptor.ide.adornerMoveLeft();
					event.stopPropagation();
					return false;
				});
				container.on('click', '.delete-item', function (event, ui) {
					var labelText = $(this).closest("li").text(), value = $this.getPropValue(descriptor), schema, i;
					$(this).closest('li').remove();
					for (i = 0; i < value.length; i++) {
						if (value[i].name === labelText) {
							value.splice(i, 1);
							break;
						}
					}
					schema = $this.settings.packageInfo.components[descriptor.type].properties.features.components;
					descriptor.propValue = value;
					descriptor.propType = "array";
					descriptor.provider.updateComponent(descriptor);
				});
			}
		},
		loadFeatureInfo: function (descriptor, name) {
			var features = this.settings.packageInfo.components[descriptor.type].properties.features,
				feature = features.components[name],
				schema;
			if (feature && feature.properties) {
				schema = feature.properties;
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
				schema = features.components[name].properties;
			}
			return schema;
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
