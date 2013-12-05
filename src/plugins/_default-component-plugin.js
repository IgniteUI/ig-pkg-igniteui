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
			var comp;
			if (this.settings && this.settings.packageInfo) { 
				comp = this.settings.packageInfo.components[type];
				if (comp && typeof comp.name === "string") {
					return comp.name.replace("ui.", "");
				}
			}
			return null;
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
				return data.options && data.options[descriptor.propName] ? data.options[descriptor.propName] : descriptor.defaultValue;
			} 
			return descriptor.defaultValue;
		},
		initComponent: function (descriptor) {
			var name = this._getWidgetName(descriptor.type);
			if (descriptor.placeholder[name]) { 
				descriptor.placeholder[name](descriptor.options);
			}
		},
		update: function (descriptor) {
			var name = this._getWidgetName(descriptor.type);
			descriptor.placeholder[name]("option", descriptor.propName, descriptor.propValue);
			descriptor.codeEditor.find("$(\"#" + descriptor.id + "\")." + name + "({");
			descriptor.codeEditor.find(descriptor.propName + ": " + descriptor.oldPropValue);
			descriptor.codeEditor.replace(descriptor.propName + ": " + descriptor.propValue);
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
