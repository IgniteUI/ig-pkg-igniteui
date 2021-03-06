define (function (require, exports, module) {
	var ComponentPlugin = require("ide-component-plugin");
	var beautify = require("/bower_components/js-beautify/js/lib/beautify.js").js_beautify;
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
	        //#171869 Leave width and height being serialized by the standard logic.
	        /*if (opts.height) {
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
			}*/
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
	            if (opts.hasOwnProperty(key) && key !== "dataSource") {
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
	                } else if (props[key].type === "array" || props[key].type === "custom") {
	                    /*
						for (var p = 0; p < opts[key].length; p ++) {
							if(opts[key][p].hasOwnProperty("dataSource")){
								opts[key][p].dataSource = opts[key][p].dataSourceVal;
								delete opts[key][p]["dataSourceVal"];
							}
						}
						*/
	                    //For bug #169309 - Consider using something like https://github.com/yeoman/stringify-object
	                    var formattedStr
	                    //#172510 When complex objects are set in default configuration, markers are not added correctly
	                    if (props[key].type === "array") {
	                        formattedStr = descriptor.ide.getArrayCodeString(opts[key], 0, props[key].schema);
	                    } else {
	                        formattedStr = beautify(JSON.stringify(opts[key]).replace(/\"([^(\")"]+)\":/g, "$1:"));
	                        formattedStr = formattedStr.replace(/\n\s\s\s\s/g,"\n\t\t");
	                        formattedStr = formattedStr.replace(/\[\{/g, '[\n\t{');
	                        formattedStr = formattedStr.replace(/\}\]/g, '\t}\n]');
	                        formattedStr = formattedStr.replace(/\},\s\{/g, '\t},\n\t{');
	                    }
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
	                    orderedReturnProps.push({
	                        name: key,
	                        value: opts[key],
	                        type: "array",
	                        schema: props[key].schema
	                    });
	                    code += formattedStrTabbed;
	                    lineCount += formattedStrTabbed.split("\n").length - 1;
	                } else if (props[key].type === "object") {										
	                    //var formattedStr = beautify(JSON.stringify(opts[key]).replace(/\"([^(\")"]+)\":/g, "$1:"));
	                    var formattedStr = descriptor.ide.getObjectCodeString(opts[key], 0, props[key].schema);
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
	                    orderedReturnProps.push({
	                        name: key,
	                        value: opts[key],
	                        type: "object",
	                        schema: props[key].schema
	                    });
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
	            if (descriptor.schema && descriptor.schema[descriptor.displayProp] && descriptor.schema[descriptor.displayProp].processValueOnly && data.options && typeof (data.options[descriptor.propName]) !== "undefined") {
	                var newProp = [], prop = data.options[descriptor.propName];
	                if (prop) {
	                    for (var i = 0; i < prop.length; i++) {
	                        var key = descriptor.displayProp, item = {};
	                        item[key] = prop[i];
	                        newProp.push(item);
	                    }
	                    return newProp;
	                } else {
	                    return descriptor.defaultValue;
	                }
	            } else {
	                return data.options && typeof (data.options[descriptor.propName]) !== "undefined" ? data.options[descriptor.propName] : descriptor.defaultValue;
	            }
	        } 
	        return descriptor.defaultValue;
	    },
	    initComponent: function (descriptor) {
	        var name = this._getWidgetName(descriptor.type);
	        //A.T. fixing again 165883
	        if (descriptor.options["dataSource"] && descriptor.options["dataSource"].length) {
	            var arr = descriptor.options["dataSource"];
	            for (var p = 0; p < arr.length; p ++) {
	                if(arr[p].hasOwnProperty("dataSource")){
	                    arr[p].dataSource = arr[p].dataSourceVal;
	                    delete arr[p]["dataSourceVal"];
	                }
	            }
	        }
	        if (window.frames[0].$(descriptor.placeholder)[name]) { 
	            window.frames[0].$(descriptor.placeholder)[name](descriptor.options);
	        }
	    },
	    getPropPosition: function (descriptor) {
	    	if (!descriptor.isRoot) {
	    		return;
	    	}
	        var pos = {row: 0, column: 0};
	        // if the property doesn't exist, add it to the code view and return the newly added prop position
	        // note: this logic *must* happen in the module plugin logic, not in the ide's property explorer logic ! 
	        var ide = this.settings.ide, name = descriptor.propName;
	        var codeMarker = descriptor.component.codeMarker;
	        var meta = codeMarker.extraMarkers;
	        var options = meta.options;
	        if (!options[name]) {
	            // if the code doesn't exist in the code view, but the option is set on the widget, we want to find it and reuse the marker instead of 
	            // adding a duplicate one 
	            if (descriptor.defaultValue !== null && typeof (descriptor.defaultValue) !== "undefined") {
	                // A.T. bug #173754 - it exists, but there's no marker for it in the extra option markers
	                // divide line by line the code in the code marker, and enter the new marker for that prop which isn't recorded yet
	                var codeStr = ide.session.getTextRange(codeMarker.range);
	                var strProps = codeStr.split("\n");
	                var propExixsts = false;
	                for (var i = 0; i < strProps.length; i++) {
	                    if (strProps[i].indexOf(name) !== -1) {
	                        options[name] = {
	                            propName: descriptor.propName,
	                            defaultValue: descriptor.defaultValue,
	                            propValue: descriptor.propValue,
	                            propType: descriptor.propType
	                        };
	                        options[name].marker = ide.createAndAddMarker(codeMarker.range.start.row + i, codeMarker.range.start.column, codeMarker.range.start.row + i, codeMarker.range.start.column + strProps[i].length);
	                        propExixsts = true;
	                        break;
	                    }
	                }
	                if (propExixsts) {
	                    pos = this.updatePropCode(descriptor, true);
	                } else {
	                    pos = this.addPropCode(descriptor, true);
	                }
					
	            } else {
	                pos = this.addPropCode(descriptor, true);
	            }
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
	            pos.column = pos.column - 2;
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
	    deletePropCode: function (descriptor) {
	        var codeMarker = descriptor.component.codeMarker;
	        var meta = codeMarker.extraMarkers;
	        var options = meta.options;
	        var ide = this.settings.ide;
	        if(options[descriptor.propName]) {
	            var marker = options[descriptor.propName].marker;
	            ide.session.removeMarker(marker.id);
	            ide.session.remove(marker);
	            delete options[descriptor.propName];
	        }
	    },
	    updatePropCode: function (descriptor, addedFromCode) {
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
	            propStr += descriptor.propName + ": " + ide.getObjectCodeString(descriptor.propValue, codeMarker.baseIndent + 1, descriptor.schema);
	        } else if (descriptor.propType === "array") {
	            propStr += descriptor.propName + ": " + ide.getArrayCodeString(descriptor.propValue, codeMarker.baseIndent + 1, descriptor.schema);
	        } else {
	            propStr += descriptor.propName + ": " + ide._propCodeDefaultVal(descriptor.propType, descriptor.propValue);
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
	        if (!addedFromCode) {
	            propStr += "\n";
	        }
	        var startRow = marker.start.row;
	        var startCol = marker.start.column;
	        var propSpan = propStr.split('\n').length;
	        var endRow = 0;
	        if (propSpan > 0) {
	            endRow = marker.start.row + propStr.split('\n').length - 1;
	        } else {
	            endRow = startRow;
	        }
	        //var endColumn = marker.end.column;
	        //var endColumn = propStr.length;
			var endColumn = 0;
			ide.session.replace(marker, propStr);
	        //reattach the marker
	        ide.session.removeMarker(marker.id);
	        var newMarker = options[descriptor.propName].marker = ide.createAndAddMarker(startRow, startCol, endRow, endColumn);
	        this._addHierarchicalMarkers(descriptor, options[descriptor.propName], newMarker, codeMarker.baseIndent);
	        return { row: startRow, column: propStr.length };
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
	            val = ide.getObjectCodeString(descriptor.propValue, codeMarker.baseIndent + 1, descriptor.schema);
	        } else if (descriptor.propType === "array" || descriptor.propType === "custom") {
	            val = ide.getArrayCodeString(descriptor.propValue, codeMarker.baseIndent + 1, descriptor.schema);
	        } else {
	            val = ide._propCodeDefaultVal(type, descriptor.defaultValue);
	        }
	        this._cachedVal = val;
	        propStr += descriptor.propName + ": " + val;
	        if (!lastProp && (!$.isEmptyObject(options) || !insertInCode)) {
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
	            omarker = ide.createAndAddMarker(pos.row, 0, pos.row + propStr.split('\n').length - 1, 0);
	            options[descriptor.propName].marker = omarker;
	            // change selection so that the prop value is selected
	        } else {
	            // the prop is already added, just find it and return its position, also add a marker for it
	            var r = ide.editor.find({
	                needle: propStr,
	                start: {
	                    row: innerMarker.start.row + 1,
	                    column: 0
	                }
	            });
	            //TODO:
	            if (typeof (r) === "undefined" && type === "string") {
	                // fallback
	                r = ide.editor.find({
	                    needle: ide._tabStr(codeMarker.baseIndent + 1) + descriptor.propName + ": " + ide._propCodeDefaultVal("number", descriptor.defaultValue),
	                    start: {
	                        row: innerMarker.start.row + 1,
	                        column: 0
	                    }
	                });
	            }
	            if (r) {
	                omarker = ide.createAndAddMarker(r.start.row, r.start.column, r.end.row, r.end.column);
	                options[descriptor.propName].marker = omarker;
	                options[descriptor.propName].schema = descriptor.schema;
	                pos.row = omarker.start.row;
	                pos.column = omarker.start.column;
	                this._addHierarchicalMarkers(descriptor, options[descriptor.propName], omarker, codeMarker.baseIndent);
	            }
	        }
	        meta.optionsCount++;
	        //pos.row++;
	        return pos;
	    },
	    _addHierarchicalMarkers: function (descriptor, parent, parentMarker, parentIndent) {
	        if (descriptor.propType === "object") {
	            this._addObjectMarkers(descriptor, parent, parentMarker, parentIndent);
	        } else if (descriptor.propType === "array") {
	            this._addArrayMarkers(descriptor, parent, parentMarker, parentIndent);
	        }
	    },
	    _addArrayMarkers: function (descriptor, parent, parentMarker, parentIndent) {
	        var ide = this.settings.ide,
		        name = descriptor.propName,
		        type = descriptor.propType,
                index, currProperty;

	        if (!descriptor.arrayMemberType) {
	            this._addObjectMarkers(descriptor, parent, parentMarker, parentIndent);
	        }
		},
	    _addObjectMarkers: function (descriptor, parent, parentMarker, parentIndent) {
		    var ide = this.settings.ide,
                type = descriptor.propType,
                name = descriptor.propName,
                schema = descriptor.schema,
                currMarker, index, currObject,
		        objString, objRange, objMarker, markerName, config;

		    parent.extraMarkers = [];
		    for (index = 0; index < descriptor.propValue.length; index++) {
		        currMarker = { };
		        currObject = descriptor.propValue[index];
		        objString = ide.getObjectCodeString(currObject, parentIndent + 2, schema);
		        objRange = ide.editor.find({
		            needle: objString,
		            start: parentMarker.start
		        });
		        if (objRange) {
		            objMarker = ide.createAndAddMarker(objRange.start.row, objRange.start.column, objRange.end.row, objRange.end.column);
		            currMarker.marker = objMarker;
		            currMarker.schema = ide.loadSchemaList(currObject, schema);
		            currMarker.baseIndent = parentIndent + 2;
		            if (name === "features" && currObject.name) {
		            	markerName = currObject.name;
		            } else {
		            	markerName = index;
		            }
		            if (!parent.extraMarkers[markerName]) {
		            	parent.extraMarkers[markerName] = {};
		            }
		            parent.extraMarkers[markerName] = currMarker;
		            this._addPrimitiveMarkers(descriptor, currMarker, parentIndent + 1, currObject);
		        }
		    }
        },
		_addPrimitiveMarkers: function (descriptor, parent, parentIndent, obj) {
		    var ide = this.settings.ide,
                schema = descriptor.schema,
                type = descriptor.propType,
                name = descriptor.propName,
                index, currentProperty,
                propName, currentProp, propString, propRange, newDescriptor;

		   
		    for (propName in obj) {
		        prop = obj[propName];
		        propSchema = parent.schema[propName];
		        if (propSchema) {
		        	propType = propSchema.type;
		        	if (propType === "string") {
		        		propString = propName + ": \"" + prop + "\"";
		        	} else {
		        		propString = propName + ": " + prop;
		        	}
		        	propRange = ide.editor.find({
		        		needle: propString,
		        		start: parent.marker.start
		        	});
		        	if (propRange) {
		        		propMarker = ide.createAndAddMarker(propRange.start.row, propRange.start.column, propRange.end.row, propRange.end.column);
		        		if (!parent.extraMarkers) {
		        			parent.extraMarkers = {};
		        		}
		        		if (!parent.extraMarkers[propName]) {
		        			parent.extraMarkers[propName] = {};
		        		}
		        		parent.extraMarkers[propName].marker = propMarker;
		        		parent.extraMarkers[propName].schema = propSchema.schema;
		        		parent.extraMarkers[propName].baseIndent = parentIndent + 1;
		        		if (propType === "object") {
		        			newDescriptor = {
		        				component: descriptor.component,
		        				type: propType,
		        				name: propName,
		        				schema: schema
		        			}
		        			this._addObjectMarkers(newDescriptor, propMarker, parentIndent + 1);
		        		} else if (propType === "array") {
		        			newDescriptor = {
		        				component: descriptor.component,
		        				type: propType,
		        				name: propName,
		        				schema: schema
		        			}
		        			this._addArrayMarkers(newDescriptor, propMarker, parentIndent + 1);
		        		}
		        	}
		        }
		    }
		},
		update: function (descriptor) {
			//console.log("Updating property or event: " + descriptor.propName);
			var ide = this.settings.ide, that = this;
			var name = "";
			if (descriptor.type || descriptor.comp.type) {
				name = this._getWidgetName(descriptor.type ? descriptor.type : descriptor.comp.type);
			}
			if (descriptor.handlerFlag) {
				var component = ide.componentById(descriptor.id),
					opts = descriptor.comp.options ? descriptor.comp.options : {},
					newOpts = $.extend({}, opts);
				newOpts[descriptor.propName] = descriptor.propValue;
				descriptor.comp.options = newOpts;
				if (component) {
					if (!component.funcMarkers) {
						component.funcMarkers = {};
					}
					//var codeRange = ide.editor.find("<script type=\"text\/javascript\" id=\"code\">\n");
					// place all handlers below the grid definition
					var codeRange = component.codeMarker.range;
					var offset = codeRange.start.row;
					var handlerMarker, funcMarker, funcBodyStart;
					var funcName = descriptor.funcName;
					if (!component.funcMarkers[funcName]) {
						// build code
						var handler = "\t\t\t\twindow." + funcName + " = function (";
						for (var i = 0; descriptor.args && i < descriptor.args.length; i++) {
							handler += descriptor.args[i].name;
							if (i < descriptor.args.length - 1) {
								handler += ", ";
							}
						}
						handler += ") {\n\t\t\t\t\t\n\t\t\t\t};\n";
						// new marker => add an empty event handler and marker;
						ide.session.insert({row: offset, column: 0}, handler);
						handlerMarker = new ide.RangeClass(offset, 0, offset + 3, 0); // "4" tabs
						funcMarker = new ide.RangeClass(offset + 2, 0, offset + 3, 5);
						ide.addMarker(handlerMarker);
						ide.addMarker(funcMarker);
						component.funcMarkers[funcName] = {
							"handlerMarker": handlerMarker,
							"functionBodyMarker": funcMarker
						};
					} 
					funcBodyStart = component.funcMarkers[funcName].functionBodyMarker.start.row;
					if (!funcBodyStart) {
						funcBodyStart = codeRange.start.row;
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
							valueOptions: descriptor.valueOptions,
							schema: descriptor.schema
						}, true, false);
					} else {
						this.updatePropCode({
						    component: descriptor.comp,
							propName: descriptor.propName,
							propValue: descriptor.propValue,
							oldPropValue: descriptor.oldPropValue,
							propType: descriptor.propType,
							valueOptions: descriptor.valueOptions,
							schema: descriptor.schema
						});
					}
					ide._deselectComponent();
					ide.element.find(".code-button").click();
					// assuming TAB indentation for all event handlers will be 4
					//TODO: the second and third param here don't work for some reason => Check with the ACE project 
					// it always starts from zero col and there is no animation
					ide.editor.gotoLine(funcBodyStart, 5, true);
				}
			} else if (descriptor.args && !descriptor.handlerFlag) {
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
					var evtName = name + descriptor.featureName + descriptor.propName;
					evtName = evtName.toLowerCase();
					if (!component.eventMarkers[descriptor.propName]) {
						// build code
						var eventString = "\t\t\t\t$(\"#" + descriptor.id + (descriptor.featureName ? "_table" : "") + "\").on(\"" + evtName + "\", function (event, args) {\n\t\t\t\t\t\n\t\t\t\t});\n";
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
				if (descriptor.propType !== "literal") {
					//17th June 2014. Bug #172492 Get property of string array, when property is marked to process only value, but not the key.
					if (descriptor.schema && descriptor.displayProp && descriptor.schema.hasOwnProperty(descriptor.displayProp) && descriptor.schema[descriptor.displayProp].processValueOnly) {
						newOpts[descriptor.propName] = this._getArrayStringFromObject(descriptor.propValue, descriptor.displayProp);
					} else {
						newOpts[descriptor.propName] = descriptor.propValue;
					}
				} else {
				    newOpts[descriptor.propName] = window.frames[0][descriptor.propValue];
				    if (descriptor.propName === "dataSource") {
				        newOpts.dsID = descriptor.propValue;
				    }
				}
				descriptor.comp.options = newOpts;
				window.frames[0].$(descriptor.placeholder).children(".prop-editor-error-message").remove();
				var dims;
				if (descriptor.propType !== "object" && descriptor.propType !== "array" && descriptor.propType !== "literal") {
					try {
						//T.P. 18th June 2014 Bug #172386 When we try to use set option we need to pass the new value from the newOpts collection
						window.frames[0].$(descriptor.placeholder)[name]("option", descriptor.propName, newOpts[descriptor.propName]);
					} catch (err) {
						// we need to re-create (destroy & create) the widget again. 
						// this usually happens when we try to use setOption at runtime for props that don't allow this 
						// those are usually props which need to re-render the whole widget to take effect, 
						// like changing virtualization from false to true
						// K.D. Catching exceptions raised from incorrect configurations.
						try {
							console.log("This option is not editable at runtime. Reloading the widget.");
							dims = {
								width: window.frames[0].$(descriptor.placeholder).outerWidth(),
								height: window.frames[0].$(descriptor.placeholder).outerHeight()
							};
							this._recreateWidget(descriptor.placeholder, name, newOpts);
						} catch (err) {
							this._showErrorContainer(err, descriptor, dims);
						}
					}
				} else {
					try {
						console.log("This option is not editable at runtime. Reloading the widget.");
						dims = {
							width: window.frames[0].$(descriptor.placeholder).outerWidth(),
							height: window.frames[0].$(descriptor.placeholder).outerHeight()
						};
						this._recreateWidget(descriptor.placeholder, name, newOpts);
					} catch (err) {
						this._showErrorContainer(err, descriptor, dims);
					}
				}
				// check if prop exists
				var codeMarker = descriptor.comp.codeMarker;
				var meta = codeMarker.extraMarkers;
				if (!meta.options) {
					meta.options = {};
				}
				var options = meta.options;
				//A.T. bug #169154
				if (descriptor.propValue === "" || descriptor.propValue === null || descriptor.propValue === undefined) {
					this.deletePropCode({
						component: descriptor.comp,
						propName: descriptor.propName
					});
				} else if (!options[descriptor.propName]) {
					this.addPropCode({
						component: descriptor.comp,
						propName: descriptor.propName,
						propValue: descriptor.propValue,
						oldPropValue: descriptor.oldPropValue,
						defaultValue: descriptor.propValue,
						propType: descriptor.propType,
						valueOptions: descriptor.valueOptions,
						schema: descriptor.schema
					}, true, false);
				} else {
					this.updatePropCode({
						component: descriptor.comp,
						propName: descriptor.propName,
						propValue: descriptor.propValue,
						oldPropValue: descriptor.oldPropValue,
						propType: descriptor.propType,
						valueOptions: descriptor.valueOptions,
						schema: descriptor.schema
					});
				}
			}
		},
		_showErrorContainer: function (err, descriptor, dims) {
			var errorContainer = $("<div class='prop-editor-error-message' title='" + err + "'>" + err + "</div>"),
				offset = window.frames[0].$(descriptor.placeholder).position();
			errorContainer.css({
				"top": offset.top,
				"left": offset.left,
				"width": dims.width,
				"height": dims.height
			});
			window.frames[0].$(descriptor.placeholder).append(errorContainer);
		},
		universalPropertyModified: function (descriptor) {
			if (descriptor.propName === "id") {
				// we need to change the id in the widget definition in the code view
				var result = this.settings.ide.editor.find({
					needle: /\$\("#(.*)?"\)/,
					start: descriptor.comp.codeMarker.range.start,
					$isMultiLine: false
				});
				if (result) {
					this.settings.ide.session.replace(result, "$(\"#" + descriptor.propValue + "\")");
				}
				//var comp = descriptor.ide.componentById(descriptor.oldPropValue);
				var events = descriptor.comp.eventMarkers;
				if (events) {
					for (var item in events) {
						if (events.hasOwnProperty(item)) {
							result = this.settings.ide.editor.find({
								needle: /\$\("#(.*)?"\)/,
								start: events[item].handlerMarker.start,
								$isMultiLine: false
							});
							if (result) {
								this.settings.ide.session.replace(result, "$(\"#" + descriptor.propValue + "\")");
							}
						}
					}
				}
				descriptor.comp.id = descriptor.propValue;
				descriptor.placeholder.attr("id", descriptor.propValue);
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
				if (props[i].name === "features" && props[i].schema) {
			        props[i].schema.heterogeneous = true;
			    }
				this.addPropCode({
				    component: { codeMarker: descriptor.marker, type: descriptor.type },
					propName: props[i].name,
					propValue: props[i].value,
					defaultValue: props[i].value, //same
					propType: props[i].type,
					schema: props[i].schema
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

			if (descriptor.type === "splitter" || descriptor.type === "columnLayout" || descriptor.type === "flowLayout" || descriptor.type === "verticalLayout" || descriptor.type === "borderLayout") {
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
			var container = collectionEditor(descriptor);
			descriptor.ide.adornerMoveLeft();
			return container;
		},
		openPropertyEditor: function (descriptor) {
			var propertyExplorer = require("ide-propertyexplorer"),
				container = $("<div class='adorner-property-sheet' data-property='" + descriptor.propName + "'></div>").insertAfter(descriptor.ide.currentAdorner()), locale = $.plugin._default.locale,
				search = $("<div class=\"input-group prop-search\"><input type=\"text\" class=\"form-control prop-search-input\" placeholder=\"" + locale.search + " ...\"/></div>").appendTo(container),
				input = search.children(".prop-search-input"), 
				editor = $("<div class='adorner-property-list'></div>").appendTo(container),
				property,
				count = 0,
				schemaRef,
				schema,
				prop = descriptor.provider.getPropValue(descriptor),
				type = this._getWidgetName(descriptor.type),
				id = "propEditor",
				containerId = "property",
				i = 0,
				length = 1,
				pname = descriptor.propName,
				filterFn;
			while ($(".adorner-wrapper div[data-property=" + pname + "]").length > 1) {
				pname = descriptor.propName + length++;
				container.attr("data-property", pname);
			}
			while ($("#" + containerId + "_scroll").length > 0) {
				containerId = "property" + i;
				id = "propEditor" + i;
				i++;
			}
			filterFn = function () {
				// filter properties and events
				var val = input.val().toLowerCase();
				var exprs = [
					{fieldName: "propName", expr: val, cond: "contains", logic: "OR"},
					{fieldName: "propValue", expr: val, cond: "contains", logic: "OR"}
				];
				$("#" + id).igGridFiltering("filter", exprs, true);
			};
			descriptor.ide._setupSearch(input, filterFn);
			editor.addClass("adorner-" + containerId + "-list");
			descriptor.id = id;
			descriptor.containerId = containerId;
			descriptor.parent = editor;
			descriptor.data = [];
			for (property in descriptor.schema) {
				if (descriptor.schema.hasOwnProperty(property)) {
					schema = descriptor.schema[property].schema;
					if (descriptor.schema[property].schemaRef) {
						schemaRef = descriptor.schema[property].schemaRef.split(".");
						schema = descriptor.ide._packages.igniteui.components[schemaRef[0]].properties;
						for (i = 1; i < schemaRef.length; i++) {
							schema = schema[schemaRef[i]].schema;
						}
						if (descriptor.schema[property].schema) {
							schema = $.extend(schema, descriptor.schema[property].schema);
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
		setPropertyExplorerValueContents: function (descriptor) {
		    var ide = this.settings.ide, comps = ide.componentIds, dslist = [], i, td = descriptor.td, locale = $.plugin._default.locale;
			var that = this, defaultVal, defaultKey;
			// handle the dataSource rendering here
			// 1. check if there are registered $.ig.DataSource components on the page
			// 2. render either a dropdown or "..." depending on 1. 
			// the dropdown should contain an item that allows to "Add new datasource". 
			if (descriptor.propName === "dataSource") {
				for (i = 0; i < comps.length; i++) {
					//if (comps[i].type === "dataSource" && comps[i].lib === "igniteui") {
					if (comps[i].category === "datasources" && comps[i].lib === "igniteui") {
						dslist.push(comps[i]);
						// we can't compare objects because after the frame is reloaded, the references aren't the same any more
						// so we need to use some smarter approach to infer whether they're the same ds
						if (descriptor.comp.options && window.frames[0][comps[i].id] && window.frames[0][comps[i].id]._accumulatedTransactionLog 
								&& descriptor.comp.codeMarker.extraMarkers.options["dataSource"] && descriptor.comp.codeMarker.extraMarkers.options["dataSource"].propValue === comps[i].id) {
							defaultVal = comps[i].id;
							defaultKey = comps[i].id;
						}
					}
				}
				if (dslist.length > 0) {
					// render a dropdown
					var ddtmpl = $("#dropdownTemplate").html();
					var texts = [];
					/*
					texts.push({
						key: "default",
						text: "<Default>",
						title: "Default"
					});
					*/
					for (i = 0; i < dslist.length; i++) {
						texts.push({
							key: dslist[i].id,
							text: dslist[i].id,
							title: dslist[i].id
						});
					}
					texts.push({
						key: "addNew",
						text: locale.configure + "...",
						title: locale.configureDataSource
					});
					var dd_id = descriptor.element.attr("id") + "_" + descriptor.propName + "_dropDown";
					var propData = {
						dropdownId: dd_id,
						titleText: locale.selectDataSource,
						closeOnClick: true,
						defaultVal: defaultVal ? defaultVal : "<Default>",
						defaultKey: defaultKey ? defaultKey : "default",
						itemTexts: texts
					};

					var Mustache = require("mustache");
					var ddHtml = Mustache.to_html(ddtmpl, propData);
					td.html(ddHtml).addClass("enum-prop-edit");
					// attach events

					// calc widths
					var label = td.find(".ig-dropdown-label");
					label.css({
						display: "inline-block",
						width: td.innerWidth() - td.find(".input-group-btn > button").outerWidth()
					});
					td.find(".layout-menu").css({
						"min-height": 0
					});
					td.find(".dropdown-container").css({
						"position": "absolute",
						"display": "none",
						"z-index": 20000
					}).addClass("adorner-prop-menu").appendTo("body");
					//TODO: sort out duplicate code with ide-propertyexplorer.js (enums editing)
					td.find(".ig-dropdown-label,.ig-dropdown-button").on("mousedown", function (event) {
						var target = $(event.target), dd = target.closest(".ig-dropdown");
						var ddlist = dd.find(".dropdown-container");
						if (ddlist.length === 0) {
							ddlist = $("body").find(".dropdown-container[data-id=" + dd.attr("data-id") + "]");
						}
						ide._toggleDropDown(dd, ddlist);
						if (ddlist.is(":visible")) {
							$("input.ig-hidden").attr("data-id", dd.attr("data-id")).focus();
						}
						event.preventDefault();
						event.stopPropagation();
					}).on("mouseup click", function (event) {
						event.preventDefault();
						event.stopPropagation();
					});
					$(".dropdown-container[data-id=" + dd_id + "] ul > li").on("mouseup", function (event) {
						var $this = $(this), ddlist = $(event.target).closest(".dropdown-container");
						var key = $this.attr("data-key");
						var dd = $("body").find(".ig-dropdown[data-id=" + ddlist.attr("data-id") + "]");
						label.text($this.attr("data-text")).attr("data-key", key);
						var propDescriptor = {
							propName: "dataSource",
							propValue: key,
							propType: "literal",
							placeholder: descriptor.element,
							type: descriptor.type,
							comp: descriptor.comp
						};
						ide._toggleDropDown(dd, ddlist);
						if (key !== "addNew") {
							// we are selecting from a list of available data sources
							//T.P. #170697 Adding support for dataSource on the series level of the DV components
							if (descriptor.updateFunction) {
								descriptor.updateFunction(propDescriptor);
							} else {
								that.update(propDescriptor);
							}
							// if the data source is defined below the component which is using it, then the data source needs to be put on top
							// find the data source component and compare markers
							var dsComp = ide.componentById(key);
							//dsComp.codeMarker.range
							//descriptor.comp.codeMarker.range
							if (dsComp.codeMarker.range.start.row >= descriptor.comp.codeMarker.range.end.row) {
								var prevStart = descriptor.comp.codeMarker.range.start.row;
								// we need to bump the data source (move it) above the component on which it is used
								ide.session.moveText(dsComp.codeMarker.range, {row: prevStart, column: 0});
								// add datasource marker again, because it's now lost. 
								ide.session.removeMarker(dsComp.codeMarker.id);
								dsComp.codeMarker.range = ide.createAndAddMarker(
									prevStart,
									0,
									descriptor.comp.codeMarker.range.start.row,
									0
								);
								// we also need to take care of the dataSource property, because its marker needs updating
								// Bug #169298
								// interestingly, the same issue cannot be observed for dragging & dropping a grid (to reorder)
								// because option markers aren't really moved
								// can't we just always move it on top, if there are other ignite widgets defined? 
								// this way options will be always intact, and we won't need to perform this step here

								// what's worse - if someone copy/pastes in ACE, option markers get messed up
								// let's say i drag and drop two grids, then manually go and cut and paste one of them above
								// and change some of the options

								// that's because during the discovery process, it finds a componentId with the same Id , and thinks
								// it already exists with the same configuration (and hence, markers). but the markers aren't dynamic any more
							}
						} else {
							//navigate to new screen to configure data source
							that.customPropertyEditor(descriptor);
						}
					}).on("mousedown click", function (event) {
						event.preventDefault();
						event.stopPropagation();
					});
				} else {
					// render it as an object, because there are no dataSources to select from
					 td.html("<span class='custom-editor'>Configure...</span>");
				}
			}
		},
		renderDataSourceArea: function (descriptor, container, dsval, localdsval) {
		    var that = this, locale = $.plugin._default.locale;
			var localRemoteArea = $("<div></div>").addClass("ds-diag-dt").prependTo(container);
			var remoteContainer = $("<div></div>").appendTo(container).addClass("ds-diag-remotecontainer");
			$("<span>Is Your Data: </span>").appendTo(localRemoteArea).addClass("ds-diag-dt-label");
			$("<input type=\"radio\" name=\"dsproptype\" id=\"dsproptype1\" value=\"" + locale.remote + "\"/>").addClass("ds-diag-dt-remote").appendTo(localRemoteArea);
			$("<label for=\"dsproptype1\">" + locale.remote + "</label>").appendTo(localRemoteArea).addClass("ds-diag-dt-remotelabel");
			$("<input type=\"radio\" name=\"dsproptype\" id=\"dsproptype2\" checked value=\"" + locale.local + "\"/>").addClass("ds-diag-dt-local").appendTo(localRemoteArea);
			$("<label for=\"dsproptype2\">" + locale.local + "</label>").appendTo(localRemoteArea).addClass("ds-diag-dt-locallabel");
			$("<br><label>" + locale.urlEndpoint + "</label>").addClass("ds-diag-urllabel").appendTo(remoteContainer);
			$("<div><input id=\"urlInput\" type=\"text\" class=\"form-control\"/><span class=\"btn btn-default\">" + locale.test + "</span></div>").addClass("ds-diag-url").appendTo(remoteContainer);
			var localContainer = $("<div></div>").addClass("ds-diag-localcontainer").css("display", "none").appendTo(container);
			$("<label>" + locale.typeVarName + ":</label>").appendTo(localContainer);
			$("<input type=\"text\" class=\"form-control\"/>").appendTo(localContainer);
			remoteContainer.css("display", "none");
			localContainer.css("display", "block");
			localRemoteArea.children("input[name=dsproptype]").on("change", function (event) {
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
			var inputUrl = remoteContainer.find(".ds-diag-url > input");
			if ($.type(dsval) === "string") {
				inputUrl.val(dsval);
			}
			inputUrl.keyup(function (event) {
				var descr = {};
				if (event.keyCode === 13) {
					descr.propName = "dataSource";
					descr.placeholder = descriptor.element;
					descr.comp = descriptor.comp;
					descr.oldPropValue = event.target.value.substring(0, event.target.value.length - 1);
					descr.propType = "string";
					descr.propValue = event.target.value.trim();
					if (descriptor.updateFunction) {
						descriptor.updateFunction(descr);
					} else {
						that.update(descr);
					}
				}
			});
			remoteContainer.find(".ds-diag-url > .btn").click(function (event) {
				// test datasource by doing a query to it
				var url = remoteContainer.find(".ds-diag-url > #urlInput").val()
				var testLabel = remoteContainer.find(".test-label");
				if (testLabel.length === 0) {
					testLabel = $("<div class=\"test-label\"></div>").insertAfter(remoteContainer.find("input"));
				}
				if (url) {
					$.ajax({
						url: url,
						crossDomain: true,
						dataType : "jsonp"
					}).fail(function (jqXHR, textStatus, errorThrown) {
						var message;
						$("#modalDSError #errorDetails").css("display", "none");
						if (textStatus === "timeout") {
							message = locale.requestTimeout;
						} else if (textStatus === "parsererror") {
							message = locale.requestParserError;
							message = message.replace("{0}", "<a href='" + locale.responseDataTypeURL + "' target='_blank'>");
							message = message.replace("{1}", "</a>");
						} else {
							message = locale.requestError;
							message = message.replace("{0}", jqXHR.status);
							message = message.replace("{1}", jqXHR.statusText);
							$("#modalDSError #responseerror").text(jqXHR.status);
							$("#modalDSError #responsestatus").text(jqXHR.statusText);
							$("#modalDSError #responsedatatype").text(jqXHR.responseXML ? "XML" : "Text");
							$("#modalDSError #responsecontent").text(jqXHR.responseXML ? jqXHR.responseXML : jqXHR.responseText);
							$("#modalDSError #errorDetails").css("display", "block");
						}
						$("#modalDSError #errorText").html(message);
						$("#modalDSError").dialog("open");
						$("[aria-describedby='modalDSError'").css("z-index", 20000);
						testLabel.addClass("test-fail").removeClass("test-success").text(locale.requestFailed);
					}).done(function () {
					    testLabel.removeClass("test-fail").addClass("test-success").text(locale.success);
					});
				} else {
				    testLabel.removeClass("test-fail").removeClass("test-success").text(locale.setValidUrl);
				} 
			});
			localContainer.find("input").val(localdsval ? localdsval : dsval).keyup(function (event) {
				var descr = {};
				if (event.keyCode === 13) {
					descr.propName = "dataSource";
					descr.placeholder = descriptor.element;
					descr.comp = descriptor.comp;
					descr.oldPropValue = event.target.value.substring(0, event.target.value.length - 1);
					descr.propType = "literal";
					descr.propValue = event.target.value;
					if (descriptor.updateFunction) {
						descriptor.updateFunction(descr);
					} else {
						that.update(descr);
					}
				}
			});
		},
		customPropertyEditor: function (descriptor) {
			var that = this;
			if (descriptor.propName === "dataSource") {
				var dsval = this.getPropValue({
					type: descriptor.type,
					propName: descriptor.propName,
					placeholder: descriptor.element
				});
				var localdsval = dsval;
				if (dsval === null) {
					dsval = "";
				} else if ($.type(dsval) !== "string") {
					localdsval = descriptor.comp.codeMarker.extraMarkers.options[descriptor.propName].propValue;
					dsval = "";
				}
				//provide custom DOM inline in the property explorer
				var container = $("<div></div>")
				.addClass("ds-diag-container adorner-summary-sheet")
				.attr("data-property", "dataSource")
				.insertAfter(this.settings.ide.currentAdorner());
				this.renderDataSourceArea(descriptor, container, dsval, localdsval);
				this.settings.ide.adornerMoveLeft();
				return true;
			}
			// return false so that other plugins which extend the base one know whether the property editing has been 
			// already handled
			return false;
		},
		discoverComponents: function (descriptor) {
			console.log("discovering ignite ui");
			var ide = this.settings.ide, i, j;
			var that = this;
			// we need to parse the javascript first and look for code like this
			// $("#<compId").ig<Component>(options);
			// Then we know some ig-component is defined via code
			// then we look for the htmlMarker by looking for <div id=compId></div>
			// for js parsing we'll use esprima
			// we need to get all script blocks and evaluate their contents 
			// as a start we start with the <script id=code>
			//var code =  ide.editor.getValue();
			//code = code.substring(code.indexOf("<script id=\"code\">"), code.length - 1).replace("<script id=\"code\">", "");
			//code = code.substring(0, code.indexOf("</script>"));
			// get the HTML code
			if (typeof (window.frames[0].$) === "undefined") {
				return;
			}
			var scripts = window.frames[0].$("script");
			ide.editor.findAll("<script");
			var scriptRanges = ide.editor.getSelection().ranges.slice(0);
			//var htmlCode = ide.editor.getValue();
			//htmlCode = htmlCode.substring(htmlCode.indexOf("<html>"), htmlCode.length - 1);
			var estraverse = require("estraverse");
			var esprima = require("esprima");
			var compPromises = {};
			ide.editor.gotoLine(0, 0); // problem with ace is that it will automatically select everything it finds 
			ide.editor.clearSelection();
			var processFunc = function (node, name, components, sr) {
				var selector, htmlMarker, codeMarker, 
				// detected an ignite comp call
				// get the id
				selector = node.callee.object.arguments[0].value; // assumes a literal
				// now find a html line which includes <div id='[selector]'></div>
				// and record this as the HTML marker
				//TODO: currently only the ID selector is supported
				// later we can actually find / dissect the selector and reach that element
				var range = ide.editor.find("<div id=\"" + selector.replace("#", "") + "\"></div>");
				if (!range) {
					//fallback
					range = ide.editor.find("<table id=\"" + selector.replace("#", "") + "\"></table>");
				}
				if (range) {
					htmlMarker = range;
					// then compare componentIds and this html marker to check if it's the same (already added component)
					// if it is, exit
					var exists = false;
					for (j = 0; j < ide.componentIds.length; j++) {
						if (ide.componentIds[j].htmlMarker) {
							var mkr = ide.componentIds[j].htmlMarker.range;
							if (mkr && mkr.start.row === htmlMarker.start.row
								//&& mkr.start.column === htmlMarker.start.column
								&& mkr.end.row === htmlMarker.end.row + 1) { //TODO ( the +1 part is not necessary, if we handle columns as well in ide-ui.js)
								//&& mkr.end.column === htmlMarker.end.column) {
								exists = true;
								break; // exists
							}
						}
					}
					// otherwise add it 
					if (!exists) {
						/*
						var codeMarkerStart = ide.editor.find("$(\"" + selector + "\")." + that._getWidgetName(name) + "({");
						var codeMarkerEnd = ide.editor.find({
							needle: "});",
							start: codeMarkerStart.start
						});
						*/
						var codeMarker = new ide.RangeClass(
							//codeMarkerStart.start.row,
							//codeMarkerStart.start.column,
							//codeMarkerEnd.end.row,
							//codeMarkerEnd.end.column
							node.loc.start.line + sr.start.row - 1,
							node.loc.start.column,
							node.loc.end.line + sr.start.row - 1,
							node.loc.end.column + 1
						);
						//console.log("marker start: " + codeMarker.start.row);
						var id = name + (ide._getComponentCount(name) + 1);
						ide.componentIds.push({
							id: id,
							lib: "igniteui",
							type: name,
							title: components[name].toolboxTitle,
							visual: true, //TODO: support for non-visual components
							providerType: ide._codeProviders["igniteui"].getProviderType(name),
							codeMarker: {
								range: ide.createAndAddMarker(
									codeMarker.start.row,
									codeMarker.start.column,
									codeMarker.end.row,
									codeMarker.end.column
								), // make it dynamic
								extraMarkers: {},
								baseIndent: 4
							},
							htmlMarker: {
								range: ide.createAndAddMarker(
									htmlMarker.start.row,
									htmlMarker.start.column,
									htmlMarker.end.row,
									htmlMarker.end.column
								) // make it dynamic	
							}
						});
						// call addExtraMarkers, so that existing options are correctly parsed
						var orderedProps = [];
						var cprops = node.arguments[0].properties;
						for (var k = 0; k < cprops.length; k++) {
							orderedProps.push({
								name: cprops[k].key.name,
								value: cprops[k].value.value,
								type: components[name].properties[cprops[k].key.name].type
							});
						}
						var d = {
							type: name,
							codeObj: { 
								orderedProps: orderedProps
							},
							marker: ide.componentIds[ide.componentIds.length - 1].codeMarker,
							rclass: ide.RangeClass
						};
						// note that "addExtraMarkers" has its own way of figuring out offsets by starting
						// at the beginning of the script snippet
						// since we are using esprima with line/column numbering enabled
						// we already have those offsets (potential optimization in addExtraMarkers)
						ide._codeProviders["igniteui"].addExtraMarkers(d);
						// finally add the ig-component class to the DOM, and the special data-attributes
						window.frames[0].$(selector).addClass("ig-component").attr({
							"data-type": name,
							"data-lib": "igniteui",
							"data-title": components[name].toolboxTitle
						});
					}
				}
			};
			for (i = 0; i < scripts.length; i++) {
				(function (i) {
					var $cblock = $(scripts[i]);
					var code = $cblock.text();
					var ast = {};
					try {
						ast = esprima.parse(code, {
							loc: true // include location of nodes (row and column info, used in ACE markers)
						});
						estraverse.traverse(ast, {
							enter: function (node, parent) {
								if (node.type === "CallExpression") {
									// find the control selector
									var comp;
									if (!node.callee || (node.callee && !node.callee.property)) {
										return;
									}
									comp = node.callee.property.name; //example: igGrid
									// validate component
									if (comp && comp.startsWith("ig")) {
										var components = that.settings.packageInfo.components;
										for (var name in components) {
											if (components.hasOwnProperty(name) && that._getWidgetName(name) === comp) {
												//if metadata for component of type <name> is not loaded, load it
												if (!components[name].properties && !compPromises[name]) {
													compPromises[name] = components[name].loadInfo();
												}
												if (components[name].properties) {
													processFunc(node, name, components, scriptRanges[i]);
												} else {
                                                    //Loading parent options when restored from localStorage
												    compPromises[name].then(function () {
												        if (components[name].propertiesRef) {
												            schemaRef = components[name].propertiesRef.split(".");
												            if (!components[schemaRef[0]].properties && !compPromises[schemaRef[0]]) {
												                compPromises[schemaRef[0]] = components[schemaRef[0]].loadInfo();
												            }
												            var cmpRef = components[schemaRef[0]];
												            if (cmpRef && cmpRef.properties) {
												                components[name].properties = $.extend(components[name].properties, cmpRef.properties);
												                processFunc(node, name, components, scriptRanges[i]);
												                ide._initddreorder();
												            } else {
												                compPromises[schemaRef[0]].then(function () {
												                    //load schemaRef
												                    components[name].properties = $.extend(components[name].properties, components[schemaRef[0]].properties);
												                    processFunc(node, name, components, scriptRanges[i]);
												                    ide._initddreorder();
												                });
												            }
												        } else {
												            processFunc(node, name, components, scriptRanges[i]);
												            // in order to avoid calling initddreorder more than once
												            // this can be additionally optimized with the cost of some significant refactoring && tracking of those calls 
												            ide._initddreorder(); // need to call this here otherwise components won't be recognized before events are hooked 
												        }
													});
												}
												break; // found
											}
										}
									}
								} else if (node.type === "AssignmentExpression") {
									//A.T. Bug #168894 - recognize "pasted" data source code
									// get the str
									var line = ide.session.getTextRange(new ide.RangeClass(node.loc.start.line + scriptRanges[i].start.row - 1, 0, node.loc.start.line + scriptRanges[i].start.row - 1, 1000));
								}
							},
							leave: function (node, parent) {

							}
						});
						ide._hasCodeError = false;
					} catch (e) {
						// open generic error dialog
						ide._hasCodeError = true;
						console.log(e);
						var blockid = "";
						// highlight offending line
						var line = parseInt(e.message.match(/Line (\d*)/)[1], 10);
						line += scriptRanges[i].start.row - 1;
						var processedMsg = e.message.replace(/Line (\d*)/, "Line " + (line + 1));
						if (ide._errorMkr) {
							//ide.session.removeGutterDecoration(ide.session.$backMarkers[ide._errorMkr].range.start.row, "ide-error");
							ide.session.removeMarker(ide._errorMkr);
						}
						ide._errorMkr = ide.session.addMarker(new ide.RangeClass(line, 0, line + 1, 0), "ide-error", "text", false);
						if ($cblock.attr("id")) {
						    blockid = "<p class='errordetailtrace'>(" + $.plugin._default.locale.scriptError + " '" + $cblock.attr("id") + "'):</p>";
						}
						ide.session.setAnnotations([{
							row: line,
							text: processedMsg,
							type: "error" // also warning and information
						}]);
						$("#modalerror > .errordetail").html(blockid + processedMsg);
						$("#modalerror").dialog("open");
						ide._hideLoading();
					}
				} (i));
			}
		},
		_recreateWidget: function (element, widgetName, options) {
			if (window.frames[0].$(element).data(widgetName)) {
				window.frames[0].$(element)[widgetName]("destroy");
			}
			window.frames[0].$(element)[widgetName](options);
		},
		_getArrayStringFromObject: function (arr, valueMemberProperty) {
			var result = [], i = 0;
			for (i; i <  arr.length; i++) {
				result.push(arr[i][valueMemberProperty]);
			}
			return result;
		}
	});
	return IgniteUIComponentPlugin;
});
