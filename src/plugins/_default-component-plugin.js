define (function (require, exports, module) {
	var ComponentPlugin = require("ide-component-plugin");
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
			var lineCount = 5;
			code = "\t\t\t\t$(\"#" + descriptor.id + "\")." + name + "({\n" +
				"\t\t\t\t\theight: " + opts.height + ",\n" + 
				"\t\t\t\t\twidth: " + opts.width;
				if (descriptor.data && window[descriptor.data]) {
					code += ",\n\t\t\t\t\tdataSource: " + descriptor.data;
				}
			for (var key in opts) {
				if (opts.hasOwnProperty(key) && key !== "dataSource" && key !== "height" && key !== "width") {
					code += ",\n\t\t\t\t\t" + key + ": " + opts[key];
					lineCount++;
				}
			}
			code += "\n\t\t\t\t});\n";
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
			var data = typeof descriptor.placeholder.data === "function" && descriptor.placeholder.data(name);
			if (data) {
				return data.options && typeof(data.options[descriptor.propName]) !== "undefined" ? data.options[descriptor.propName] : descriptor.defaultValue;
			} 
			return descriptor.defaultValue;
		},
		initComponent: function (descriptor) {
			var name = this._getWidgetName(descriptor.type);
			if (descriptor.placeholder[name]) { 
				descriptor.placeholder[name](descriptor.options);
			}
		},
		navigate: function (descriptor) {

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
				descriptor.placeholder[name]("option", descriptor.propName, descriptor.propValue);
				var codeRange = descriptor.codeEditor.find("$(\"#" + descriptor.id + "\")." + name + "({");
				var optionRange = descriptor.codeEditor.find(descriptor.propName + ": " + descriptor.oldPropValue);
				var val = descriptor.propValue;
				if (descriptor.propType === "string") {
					val = "\"" + val + "\"";
				}
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
		}	
	});
	return IgniteUIComponentPlugin;
});
