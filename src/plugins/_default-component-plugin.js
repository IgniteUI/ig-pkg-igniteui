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
			var name = this._getWidgetName(descriptor.type);
			if (!name) {
				console.error("Could not get widget name for '" + descriptor.type +"'.");
				return null;
			}
			//Initial lineCount value
			var lineCount = 0;
			code = "\t\t\t\t$(\"#" + descriptor.id + "\")." + name + "({";
				if (opts.height) {
					if (code.lastIndexOf("{") == code.length - 1) {
						code += "\n\t\t\t\t\theight: " + opts.height ;
					} else {
						code += ",\n\t\t\t\t\theight: " + opts.height ;
					}
				lineCount ++;
				}
				if (opts.width) {
					if (code.lastIndexOf("{") == code.length - 1) {
						code += "\n\t\t\t\t\twidth: " + opts.width;
					} else {
						code += ",\n\t\t\t\t\twidth: " + opts.width;
					}								
				lineCount ++;
				}
			if (descriptor.data && window[descriptor.data]) {
				if (code.lastIndexOf("{") == code.length - 1) {
					code += "\n\t\t\t\t\tdataSource: " + descriptor.data;
				} else {
					code += ",\n\t\t\t\t\tdataSource: " + descriptor.data;
				}
				//code += ",\n\t\t\t\t\tdataSource: " + descriptor.data;
				lineCount ++;
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
						//code += ",\n\t\t\t\t\t" + key + ": \"" + opts[key] + "\"";
						lineCount++;
					} else if (props[key].type === "array") {
						//code += ",\n\t\t\t\t\t" + key + ": " + formattedStr;
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
						//code += ",\n";
						lineCount ++;
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
						lineCount++;
					}
				}
			}
			code += "\n\t\t\t\t});\n";
			lineCount += 2;
			return {codeString: code, lineCount: lineCount};
			//return this.evalTemplate("default.code.js", descriptor);
		},
		getCodeEditorMarkupSnippet: function (descriptor) {
			// as a developer, i would like to be able to provide the direct manual formatting, as well as specify a template, and evaluate it
			var extraIndentStr = "", i = 0;
			if (descriptor.extraIndent) {
				for (i = 0; i < descriptor.extraIndent; i++) {
					extraIndentStr += "\t";
				}
			}
			return {codeString: "\t" + extraIndentStr + "<div id=\"" + descriptor.id + "\"></div>\n", lineCount: 1};
			//return this.evalTemplate("default.code.html", descriptor);
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
			// if the property doesn't exist, returns the position of the last one
			var ide = this.settings.ide;
			// need to concatenate the hash with the parent prop, if any

			return pos;
		},
		update: function (descriptor) {
			//console.log("Updating property or event: " + descriptor.propName);
			var ide = this.settings.ide;
			var name = this._getWidgetName(descriptor.type);
			if (descriptor.args) {
				// handle events
				// try to find an existing marker, for the event, if one doesn't exist, create it
				var component = null;
				for (var i = 0; i < ide.componentIds.length; i++) {
					if (ide.componentIds[i].id === descriptor.id) {
						component = ide.componentIds[i];
						break;
					}
				}
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
				var codeRange = descriptor.codeEditor.find("$(\"#" + descriptor.id + "\")." + name + "({");
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
				}
				var optionRange = descriptor.codeEditor.find(descriptor.propName + ": " + oldVal);
				var optCode = descriptor.propName + ": " + val;
				if (optionRange) {
					descriptor.codeEditor.replace(optCode);
				} else {
					// we are adding a new option
					//TODO: indents
					optCode = "\t\t\t\t\t" + optCode + ",\n";
					ide.session.insert({row: codeRange.start.row + 1, column: 0}, optCode);
				}
			}
		},
		addExtraMarkers: function (marker, descriptor) {

		},
		isContainer: function (descriptor) {
			if (typeof (descriptor) === "undefined" || descriptor === null) {
				return false;
			}
			// return true for splitter (splitterpanes - in the context of getDroppableChildren)
			// also for dialog window, and tile manager tiles
			//returns true for both  columns and rows
			if (descriptor.type === "splitter" || descriptor.type === "dialog") {
				return true;
			}
			return false;
		},
		isDroppableChild: function (descriptor) {
			if (typeof (descriptor) === "undefined" || descriptor === null) {
				return false;
			}
			if (descriptor.type === "splitterPane" || descriptor.type === "tileManagerTile" || descriptor.type === "dialogWindowContent") {
				return true;
			}
			return false;
		},
		hasDroppableChildren: function () {
			return false;
		},
		getDroppableChildren: function () {
			return [];
		},
		openCollectionEditor: function (descriptor) {
			var wrapper = $('.adorner-wrapper');
			collectionEditor(descriptor);
			$('.adorner-column-container').insertAfter(wrapper.children().last());
			wrapper.animate({left: '-=250'}, 250);
			this.showBackButton();
		},
		openPropertyEditor: function (descriptor) {
			var propertyExplorer = require("ide-propertyexplorer"),
				container = $('<div class="adorner-summary-sheet"></div>').appendTo($('.adorner-wrapper')),
				editor = $('<div class="adorner-property-list"></div>').appendTo(container),
				property,
				count = 0,
				prop,
				type = this._getWidgetName(descriptor.type);
			
			descriptor.id = "propEditor";
			descriptor.containerId = "property";
			descriptor.parent = editor;
			descriptor.data = [];
			if (descriptor.iframe && descriptor.iframe.jQuery) {
				prop = descriptor.iframe.jQuery($("#designer-frame").contents().find("#" + descriptor.element.attr("id"))).data(type).options[descriptor.propName];
			} else {
				prop = descriptor.element.data(type).options[descriptor.propName];
			}
			for (property in descriptor.schema) {
				if (descriptor.schema.hasOwnProperty(property)) {
					descriptor.data.push({
						id: count++,
						propName: property,
						defaultValue: descriptor.schema[property].defaultValue,
						propValue: prop.hasOwnProperty(property) ? prop[property] : descriptor.schema[property].defaultValue,
						propType: descriptor.schema[property].propType,
						description: descriptor.schema[property].description,
						valueOptions: descriptor.schema[property].valueOptions,
						displayProp: descriptor.schema[property].designerDisplayProperty
					});
				}
			}
			// render and open a property explorer
			propertyExplorer(descriptor);
			$(".adorner-wrapper").animate({left: "-=250"}, 250);
			this.showBackButton();
		},
		_recreateWidget: function (element, widgetName, options) {
			window.frames[0].$(element)[widgetName]("destroy");
			window.frames[0].$(element)[widgetName](options);
		}
	});
	return IgniteUIComponentPlugin;
});
