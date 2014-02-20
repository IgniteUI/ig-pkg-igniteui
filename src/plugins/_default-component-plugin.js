define (function (require, exports, module) {
	var ComponentPlugin = require("ide-component-plugin");
	var beautify = require("/bower_components/js-beautify/js/lib/beautify.js");
	var collectionEditor = require("ide-collectioneditor");
	var IgniteUIComponentPlugin = IgniteUIComponentPlugin || ComponentPlugin.extend({
		init: function (options) {
			this._super(options);
		},
		getName: function () {
			return null;
		},
		_getWidgetName: function (type) {
			/*
			var comp;
			if (this.settings && this.settings.packageInfo) { 
				comp = this.settings.packageInfo.components[type];
				if (comp && typeof comp.name === "string") {
					return comp.name.replace("ui.", "");
				}
			}*/
			return "ig" + type.charAt(0).toUpperCase() + type.slice(1);
		},
		getProviderType: function (type) {
			return this._getWidgetName(type);
		},
		getHeadMarkup: function () {
			return null;
		},
		getCodeEditorHeadSnippet: function () {
			return null;
		},
		// retrieves the initial markup for the current component
		getMarkup: function (descriptor) {
			return "<div id=\"" + descriptor.id + "\"></div>";
			//return this.evalTemplate("default.html", descriptor, true);
		},
		getCodeEditorScriptSnippet: function (descriptor) {
			var code = "";
			var opts = descriptor.options;
			var orderedReturnProps = [];
			var name = this._getWidgetName(descriptor.type);
			if (!name) {
				console.error("Could not get widget name for '" + descriptor.type +"'.");
				return null;
			}
			//Initial lineCount value
			var lineCount = 0;
			code = "\t\t\t\t$(\"#" + descriptor.id + "\")." + name + "({";
			if (opts.height) {
				if (code.lastIndexOf("{") === code.length - 1) {
					code += "\n\t\t\t\t\theight: " + opts.height ;
				} else {
					code += ",\n\t\t\t\t\theight: " + opts.height ;
				}
				orderedReturnProps.push({
					name: "height",
					value: opts.height,
					type: "number"
				});
				lineCount++;
			}
			if (opts.width) {
				if (code.lastIndexOf("{") === code.length - 1) {
					code += "\n\t\t\t\t\twidth: " + opts.width;
				} else {
					code += ",\n\t\t\t\t\twidth: " + opts.width;
				}
				orderedReturnProps.push({
					name: "width",
					value: opts.width,
					type: "number"
				});								
				lineCount++;
			}
			if (descriptor.data && window[descriptor.data]) {
				if (code.lastIndexOf("{") === code.length - 1) {
					code += "\n\t\t\t\t\tdataSource: " + descriptor.data;
				} else {
					code += ",\n\t\t\t\t\tdataSource: " + descriptor.data;
				}
				//code += ",\n\t\t\t\t\tdataSource: " + descriptor.data;
				lineCount++;
				orderedReturnProps.push({
					name: "dataSource",
					value: descriptor.data,
					type: "literal"
				});
			}
			var props = this.settings.packageInfo.components[descriptor.type].properties;
			for (var key in opts) {
				if (opts.hasOwnProperty(key) && key !== "dataSource" && key !== "height" && key !== "width") {
					if (props[key].type === "string") {
						if (code.lastIndexOf("{") == code.length - 1) {
							code += "\n\t\t\t\t\t" + key + ": \"" + opts[key] + "\"";
						} else {
							code += ",\n\t\t\t\t\t" + key + ": \"" + opts[key] + "\"";
						}
						orderedReturnProps.push({
							name: key,
							value: opts[key],
							type: "string"
						});
						lineCount++;
					} else if (props[key].type === "array") {
						for (var p = 0; p < opts[key].length; p ++) {
							if(opts[key][p].hasOwnProperty("dataSource")){
								opts[key][p].dataSource = opts[key][p].dataSourceVal;
								delete opts[key][p]["dataSourceVal"];
							}
						}
						var formattedStr = beautify(JSON.stringify(opts[key]));
						for (var p = 0; p < opts[key].length; p ++) {
							if(opts[key][p].hasOwnProperty("dataSource")){
								formattedStr = formattedStr.replace('"' + opts[key][p].dataSource + '"', opts[key][p].dataSource);
							}
						}
						if (code.lastIndexOf("{") != code.length - 1) {
							code += ",\n";
						}
						lineCount++;
						formattedStr = key + ": " + formattedStr;
						var formattedStrTabbed = "";
						var tabbedArr = formattedStr.split("\n");
						for (var i = 0; i < tabbedArr.length; i++) {
							formattedStrTabbed += "\t\t\t\t\t" + tabbedArr[i];
							if (i < tabbedArr.length - 1) {
								formattedStrTabbed += "\n";
							}
						}
						code += formattedStrTabbed;
						lineCount += formattedStrTabbed.split("\n").length - 1;
					} else {
						if (code.lastIndexOf("{") == code.length - 1) {
							code += "\n\t\t\t\t\t" + key + ": " + opts[key];
						} else {
							code += ",\n\t\t\t\t\t" + key + ": " + opts[key];
						}							
						//code += ",\n\t\t\t\t\t" + key + ": " + opts[key];
						orderedReturnProps.push({
							name: key,
							value: opts[key],
							type: "literal"
						});
						lineCount++;
					}
				}
			}
			code += "\n\t\t\t\t});\n";
			lineCount += 2;
			return {
				codeString: code,
				lineCount: lineCount,
				orderedProps: orderedReturnProps
			};
		},
		getCodeEditorMarkupSnippet: function (descriptor) {
			var extraIndentStr = "", i = 0;
			if (descriptor.extraIndent) {
				for (i = 0; i < descriptor.extraIndent; i++) {
					extraIndentStr += "\t";
				}
			}
			return {codeString: "\t" + extraIndentStr + "<div id=\"" + descriptor.id + "\"></div>\n", lineCount: 1};
		},
		requiresInitialization: function () {
			return true;
		},
		getPropValue: function (descriptor) {
			var name = this._getWidgetName(descriptor.type);
			var data = typeof window.frames[0].$(descriptor.placeholder).data === "function" && window.frames[0].$(descriptor.placeholder).data(name);
			if (data) {
				return data.options && typeof(data.options[descriptor.propName]) !== "undefined" ? data.options[descriptor.propName] : descriptor.defaultValue;
			} 
			return descriptor.defaultValue;
		},
		initComponent: function (descriptor) {
			var name = this._getWidgetName(descriptor.type);
			if (window.frames[0].$(descriptor.placeholder)[name]) { 
				window.frames[0].$(descriptor.placeholder)[name](descriptor.options);
			}
		},
		getPropPosition: function (descriptor) {
			var pos = {row: 0, column: 0};
			// if the property doesn't exist, add it to the code view and return the newly added prop position
			// note: this logic *must* happen in the module plugin logic, not in the ide's property explorer logic ! 
			var ide = this.settings.ide, name = descriptor.propName;
			var codeMarker = descriptor.component.codeMarker;
			var meta = codeMarker.extraMarkers;
			var options = meta.options;
			if (!options[name]) {
				pos = this.addPropCode(descriptor, true);
			} else {
				this._cachedVal = null;
				// put the cursor at the end of the property definition
				pos.row = options[name].marker.end.row;
				pos.column = options[name].marker.end.column;
			}
			// change selection
			var propMarker = options[name].marker;
			var selRange = null;
			if (this._cachedVal === null || typeof (this._cachedVal) === "undefined") {
				// retrieve value first
				this._cachedVal = ide.session.getTextRange(propMarker).split(":")[1].trim().replace(",", "");
			}
			if (descriptor.propType === "string") {
				this._cachedVal = this._cachedVal.replace(/"/g, "");
			}
			if (this._cachedVal === "") {
				pos.column = pos.column -2;
			} else {
				selRange = ide.editor.find({
					needle: this._cachedVal + "", // ensure this is a string
					start: propMarker.start
				});
			}
			// we want to select the value only so that a developer can immediately start typing
			//ide.editor.selection.setSelectionRange(selRange, false);
			return {position: pos, selectionRange: selRange};
		},
		updatePropCode: function (descriptor) {
			/*
			var val = descriptor.propValue;
			var oldVal = descriptor.oldPropValue;
			var valueEnumType = "string";
			var oldValueEnumType = "string";
			if (descriptor.valueOptions) {
				for (var i = 0; i < descriptor.valueOptions.length; i++) {
					if (descriptor.valueOptions[i].name === val) {
						valueEnumType = descriptor.valueOptions[i].type;
					} else if (descriptor.valueOptions[i].name === oldVal) {
						oldValueEnumType = descriptor.valueOptions[i].type;
					}
				}
			}
			if (descriptor.propType === "string") {
				if (valueEnumType === "string") {
					val = "\"" + val + "\"";
				} 
				if (oldValueEnumType === "string") {
					oldVal = "\"" + oldVal + "\"";
				}
			} else if (descriptor.propType === "object") {
				val = this.getObjectCodeString(descriptor.propValue, 5);
			} else if (descriptor.propType === "array") {
				val = this.getArrayCodeString(descriptor.propValue, 5);
			}
			*/
			var ide = this.settings.ide;
			var codeMarker = descriptor.component.codeMarker;
			var meta = codeMarker.extraMarkers;
			var options = meta.options;
			var propStr = "";
			var marker = options[descriptor.propName].marker;
			propStr += ide._tabStr(codeMarker.baseIndent + 1);
			if (descriptor.propType === "object") {
				propStr += descriptor.propName + ": "  + ide.getObjectCodeString(descriptor.propValue, codeMarker.baseIndent + 1);
			} else if (descriptor.propType === "array") {
				propStr += descriptor.propName + ": "  + ide.getArrayCodeString(descriptor.propValue, codeMarker.baseIndent + 1);
			} else {
				propStr += descriptor.propName + ": "  + ide._propCodeDefaultVal(descriptor.propType, descriptor.propValue);
			}
			var currentPropStr = ide.session.getTextRange(marker);
			if (!currentPropStr) {
				currentPropStr = "";
			}
			currentPropStr = currentPropStr.trim();
			options[descriptor.propName].propValue = descriptor.propValue;
			if (currentPropStr.lastIndexOf(",") === currentPropStr.length - 1) { 
				propStr += ",";
			}
			//propStr += "\n";
			var startRow = marker.start.row;
			var startCol = marker.start.column;
			var endRow = marker.start.row + propStr.split('\n').length - 1;
			//var endColumn = marker.end.column;
			var endColumn = propStr.length;
			ide.session.replace(marker, propStr);
			//reattach the marker
			ide.session.removeMarker(marker.id);
			options[descriptor.propName].marker = ide.createAndAddMarker(startRow, startCol, endRow, endColumn);
		},
		addPropCode: function (descriptor, insertInCode, lastProp) {
			var pos = {row: 0, column: 0};
			var ide = this.settings.ide;
			var codeMarker = descriptor.component.codeMarker;
			var meta = codeMarker.extraMarkers;
			var options = meta.options;
			// add new prop
			// get the innerMarker
			var innerMarker = codeMarker.range;
			var propStr = "";
			propStr += ide._tabStr(codeMarker.baseIndent + 1);
			var type = descriptor.propType;
			if (descriptor.valueOptions) {
				for (var i = 0; i < descriptor.valueOptions.length; i++) {
					if (descriptor.valueOptions[i].name === descriptor.propValue) {
						type = descriptor.valueOptions[i].type;
						break;
					}
				}
			}
			var val;
			//TODO: Ensure those are markerized as well -  hierarchical support
			if (descriptor.propType === "object") {
				val = ide.getObjectCodeString(descriptor.propValue, codeMarker.baseIndent + 1);
			} else if (descriptor.propType === "array") {
				val = ide.getArrayCodeString(descriptor.propValue, codeMarker.baseIndent + 1);
			} else {
				val = ide._propCodeDefaultVal(type, descriptor.defaultValue);
			}
			this._cachedVal = val;
			propStr += descriptor.propName + ": " + val;
			if (meta.optionsCount !== 0 && !lastProp) {
				propStr += ",";
			}
			propStr += "\n";
			options[descriptor.propName] = {
				propName: descriptor.propName,
				defaultValue: descriptor.defaultValue,
				propValue: descriptor.propValue,
				propType: descriptor.propType
			};
			if (insertInCode) {
				// insert the prop below, take tabs into account
				// need to concatenate the hash with the parent prop, if any
				pos.row = innerMarker.start.row + 1;
				pos.column = propStr.replace("\n", "").length;
				ide.session.insert({row: pos.row, column: 0}, propStr); // column: lastPropEndCol, instead of column: 0
				var omarker = null;
				//pos.row;
				omarker = ide.createAndAddMarker(pos.row, 0, pos.row + propStr.split('\n').length - 2, propStr.replace("\n", "").length);
				options[descriptor.propName].marker = omarker;
				// change selection so that the prop value is selected
			} else {
				// the prop is already added, just find it and return its position, also add a marker for it
				var r = ide.editor.find({
					needle: propStr.replace("\n", ""),
					start: {
						row: innerMarker.start.row + 1,
						column: 0
						//column: innerMarker.start.column
					}
				});
				if (r) {
					omarker = ide.createAndAddMarker(r.start.row, r.start.column, r.end.row, r.end.column);
					options[descriptor.propName].marker = omarker;
					pos.row = omarker.start.row;
					pos.column = omarker.start.column;
				}
			}
			meta.optionsCount++;
			//pos.row++;
			return pos;
		},
		update: function (descriptor) {
			//console.log("Updating property or event: " + descriptor.propName);
			var ide = this.settings.ide;
			var name = this._getWidgetName(descriptor.type);
			if (descriptor.args) {
				// handle events
				// try to find an existing marker, for the event, if one doesn't exist, create it
				var component = ide.componentById(descriptor.id);
				if (component) {
					if (!component.eventMarkers) {
						component.eventMarkers = {};
					}
					//var codeRange = ide.editor.find("<script type=\"text\/javascript\" id=\"code\">\n");
					// place all handlers below the grid definition
					var codeRange = component.codeMarker.range;
					var offset = codeRange.end.row;
					var handlerMarker, funcMarker, funcBodyStart;
					var evtName = name + descriptor.propName;
					evtName = evtName.toLowerCase();
					if (!component.eventMarkers[descriptor.propName]) {
						// build code
						var eventString = "\t\t\t\t$(\"#" + descriptor.id + "\").on(\"" + evtName + "\", function (event, args) {\n\t\t\t\t\t\n\t\t\t\t});\n";
						// new marker => add an empty event handler and marker;
						ide.session.insert({row: offset, column: 0}, eventString);
						handlerMarker = new ide.RangeClass(offset + 1, 4, offset + 4, 4); // "4" tabs
						funcMarker = new ide.RangeClass(offset + 2, 4, offset + 3, 4);
						ide.addMarker(handlerMarker);
						ide.addMarker(funcMarker);
						component.eventMarkers[descriptor.propName] = {
							"handlerMarker": handlerMarker,
							"functionBodyMarker": funcMarker
						};
						//console.log("Adding new event handler");
					} 
					funcBodyStart = component.eventMarkers[descriptor.propName].functionBodyMarker.start.row;
					// now navigate to the code view to show the existing or the newly added marker
					//console.log("Navigating to code...");
					//1. switch to the code view & scroll to line
					// hide adorners panel & deselect component
					// alternatively we can hide just the adorner, and keep the component selected
					ide._deselectComponent();
					ide.element.find(".code-button").click();
					if (!funcBodyStart) {
						funcBodyStart = codeRange.start.row;
					}
					// assuming TAB indentation for all event handlers will be 4
					//TODO: the second and third param here don't work for some reason => Check with the ACE project 
					// it always starts from zero col and there is no animation
					ide.editor.gotoLine(funcBodyStart, 5, true);
				}
			} else {
				// also check type here
				// use the jQuery loaded by the package, not the one loaded by the IDE !
				var opts = descriptor.comp.options ? descriptor.comp.options : {};
				//ATT: TODO: ALSO needs to handle the case where an option gets changed manually in the code view
				var newOpts = $.extend({}, opts);
				//ATT: TODO: we may not be setting an option on the root level ! 
				newOpts[descriptor.propName] = descriptor.propValue;
				if (descriptor.propType !== "object" && descriptor.propType !== "array") {
					try {
						window.frames[0].$(descriptor.placeholder)[name]("option", descriptor.propName, descriptor.propValue);
					} catch (err) {
						// we need to re-create (destroy & create) the widget again. 
						// this usually happens when we try to use setOption at runtime for props that don't allow this 
						// those are usually props which need to re-render the whole widget to take effect, 
						// like changing virtualization from false to true
						//TODO: options
						this._recreateWidget(descriptor.placeholder, name, newOpts);
					}
				} else {
					//var options = window.frames[0].$(descriptor.placeholder).data(name).options;
					this._recreateWidget(descriptor.placeholder, name, newOpts);
				}
				// check if prop exists
				var codeMarker = descriptor.comp.codeMarker;
				var meta = codeMarker.extraMarkers;
				var options = meta.options;
				if (!options[descriptor.propName]) {
					this.addPropCode({
						component: descriptor.comp,
						propName: descriptor.propName,
						propValue: descriptor.propValue,
						oldPropValue: descriptor.oldPropValue,
						defaultValue: descriptor.propValue,
						propType: descriptor.propType,
						valueOptions: descriptor.valueOptions
					}, true, false);
				} else {
					this.updatePropCode({
						component: descriptor.comp,
						propName: descriptor.propName,
						propValue: descriptor.propValue,
						oldPropValue: descriptor.oldPropValue,
						propType: descriptor.propType,
						valueOptions: descriptor.valueOptions
					});
				}
			}
		},
		universalPropertyModified: function (descriptor) {
			if (descriptor.propName === "id") {
				// we need to change the id in the widget definition in the code view
				var result = this.settings.ide.editor.find({
					needle: /\$\("#(.*)?"\)/,
					start: descriptor.comp.codeMarker.range.start
				});
				if (result) {
					this.settings.ide.session.replace(result, "$(\"#" + descriptor.propValue + "\")");
				}
			} else if (descriptor.propName === "class") {
				window.frames[0].$(descriptor.placeholder).removeClass(descriptor.oldPropValue).addClass(descriptor.propValue);
			}
		},
		addExtraMarkers: function (descriptor) {
			// add markers for all the default options
			var markers = descriptor.marker.extraMarkers;
			var props = descriptor.codeObj.orderedProps;
			if (!markers.options) {
				markers.options = {};
				markers.optionsCount = 0;
			}
			// add all existing options
			for (var i = 0; i < props.length; i++) {
				this.addPropCode({
					component: {codeMarker: descriptor.marker},
					propName: props[i].name,
					propValue: props[i].value,
					defaultValue: props[i].value, //same
					propType: props[i].type
				}, false, i === props.length - 1); // we just want to add markers for those props, not insert them; they're already inserted
			}
		},
		isContainer: function (descriptor) {
			if (typeof (descriptor) === "undefined" || descriptor === null) {
				return false;
			}
			// return true for splitter (splitterpanes - in the context of getDroppableChildren)
			// also for dialog window, and tile manager tiles
			//returns true for both  columns and rows

			if (descriptor.type === "splitter" || descriptor.type === "columnLayout") {
				return true;
			} else if (descriptor.type === "dialog" && descriptor.element.hasClass('ui-igdialog-content')) {
				return true;
			}
			return false;
		},
		isDroppableChild: function (descriptor) {
			if (typeof (descriptor) === "undefined" || descriptor === null) {
				return false;
			}
			if (descriptor.nodeName && $(descriptor).attr("data-droppablechild") === "true") {
				return true;
			} else {
				return false;      
			}
		},
		hasDroppableChildren: function () {
			return false;
		},
		getDroppableChildren: function () {
			return [];
		},
		openCollectionEditor: function (descriptor) {
			collectionEditor(descriptor);
			descriptor.ide.adornerMoveLeft();
		},
		openPropertyEditor: function (descriptor) {
			var propertyExplorer = require("ide-propertyexplorer"),
				container = $('<div class="adorner-summary-sheet"></div>').appendTo($('.adorner-wrapper')),
				editor = $('<div class="adorner-property-list"></div>').appendTo(container),
				property,
				count = 0,
				schemaRef,
				schema,
				prop = descriptor.provider.getPropValue(descriptor),
				type = this._getWidgetName(descriptor.type),
				id = "propEditor",
				containerId = "property",
				i = 0;
			while ($("#" + containerId + "_scroll").length > 0) {
				containerId = "property" + i;
				id = "propEditor" + i;
				i++;
			}
			editor.addClass("adorner-" + containerId + "-list");
			descriptor.id = id;
			descriptor.containerId = containerId;
			descriptor.parent = editor;
			descriptor.data = [];
			for (property in descriptor.schema) {
				if (descriptor.schema.hasOwnProperty(property)) {
					if (descriptor.schema[property].schemaRef) {
						schemaRef = descriptor.schema[property].schemaRef.split(".");
						schema = descriptor.ide._packages.igniteui.components[schemaRef[0]].properties;
						for (i = 1; i < schemaRef.length; i++) {
							schema = schema[schemaRef[i]].schema;
						}
					}
					descriptor.data.push({
						id: count++,
						propName: property,
						defaultValue: descriptor.schema[property].defaultValue,
						propValue: prop && prop.hasOwnProperty(property) ? prop[property] : descriptor.schema[property].defaultValue,
						propType: descriptor.schema[property].type,
						description: descriptor.schema[property].description,
						valueOptions: descriptor.schema[property].valueOptions,
						displayProp: descriptor.schema[property].designerDisplayProperty,
						schema: schema
					});
				}
			}
			// render and open a property explorer
			propertyExplorer(descriptor);
			descriptor.ide.adornerMoveLeft();
		},
		_recreateWidget: function (element, widgetName, options) {
			if (window.frames[0].$(element).data(widgetName)) {
				window.frames[0].$(element)[widgetName]("destroy");
			}	
			window.frames[0].$(element)[widgetName](options);
		}
	});
	return IgniteUIComponentPlugin;
});
