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
			var lineCount = 7;
			var xtraMarkup = ",\n\t\t\t\t\tfeatures: [\n" + "\t\t\t\t\t]";
			//A.T. - we can either drop with no features in the code editor
			// or an empty array - empty arr makes it easier to manage with markers
			code = "\t\t\t\t$(\"#" + descriptor.id + "\").igGrid({\n" +
				"\t\t\t\t\theight: " + opts.height + ",\n" + 
				"\t\t\t\t\twidth: " + opts.width + xtraMarkup;
			if (descriptor.data && window[descriptor.data]) {
				code += ",\n\t\t\t\t\tdataSource: " + descriptor.data;
			}
			var props = this.settings.packageInfo.components[descriptor.type].properties;
			for (var key in opts) {
				if (opts.hasOwnProperty(key) && key !== "dataSource" && key !== "height" && key !== "width") {
					if (props[key].type === "string") {
						code += ",\n\t\t\t\t\t" + key + ": \"" + opts[key] + "\"";
					} else {
						code += ",\n\t\t\t\t\t" + key + ": " + opts[key];
					}
					lineCount++;
				}
			}
			code += "\n\t\t\t\t});\n";
			return {codeString: code, lineCount: lineCount};
			//return this.evalTemplate("grid.code.js", descriptor);
		},
		addExtraMarkers: function (descriptor) {
			// we don't want to hardcode this value but find it in the current range
			// it may well happen that someone adds lots of options and extra code *above* the features or any other object
			var featuresRange = this.settings.editor.find("features", {start: descriptor.marker.range.start});
			featuresRange = new descriptor.rclass(featuresRange.start.row, 0, featuresRange.start.row + 1, 0);
			featuresRange.start = this.settings.editor.getSession().doc.createAnchor(featuresRange.start); 
			featuresRange.end = this.settings.editor.getSession().doc.createAnchor(featuresRange.end);
			descriptor.marker.extraMarkers["features"] = {range: featuresRange};
		},
		/*
		render: function(descriptor) {
			// THIS IS WHERE WE PUT FULLY CUSTOM EDITORS FOR COMPONENTS
		},
		*/
		openPropertyEditor: function(descriptor) {
			// columns, features, dataSource, etc. - also reuse those UIs
			// when something gets changed in this editor, we want to also update the code editor as well as the component itself
			var p = descriptor.propName, packageInfo = this.settings.packageInfo, session = descriptor.editorSession, $this = this;
			if (p === "features") {
				// open features editor
				var list;
				var contents = $("<div>features editor</div>").appendTo("body").dialog({
					height: 400,
					width: 300,
					buttons: [ 
						{ 
							text: "Save", click: function() {
								// save features
								var elem;
								if (descriptor.iframe.jQuery) {
									elem = descriptor.iframe.jQuery($("#designer-frame").contents().find("#" + descriptor.element.attr("id")));
								} else {
									elem = descriptor.element;
								}
								// get list of enabled features
								var checkboxes = list.find("input:checked");
								// now iterate through the existing features, if the feature is already there, don't do anything
								// we need some object model to add/remove features easily
								// get the features string from the code editor
								// if there is none, create one
								// add new features
								// bring back the features to the code and update (recreate the grid)
								var gridCode = session.getTextRange(descriptor.codeMarker.range);
								//var gridObj = $this.toObject(gridCode);
								// check if there are extra markers associated with this object
								var fmarker = null;
								if (descriptor.codeMarker.extraMarkers && (fmarker = descriptor.codeMarker.extraMarkers["features"])) {
									// find the code inside of the marker and modify it
								} else {
									// there are no "features" defined, so we need to insert that
									// find out what the intentation is
									fmarker = descriptor.codeMarker.extraMarkers["features"] = {};
									//just construct the new code and insert it below the fmarker
									// features: [
									// 	<new code gets here>
									// ]
								}
								var opts = elem.data("igGrid")._originalOptions;
								// wipe features (TODO)
								opts.features = [];
								var featuresCode = "";
								var tabStr = "\t\t\t\t\t\t";
								var count = 0, featuresCount = checkboxes.length;
								checkboxes.each(function () {
									var name = $(this).closest("li").attr("data-name");
									opts.features.push({name: name});
									featuresCode += tabStr + "{ name: \"" + name + "\"}";
									if (count < featuresCount - 1) {
										featuresCode += ",\n";
									} else {
										featuresCode += "\n";
									}
									count++;
								});
								elem.igGrid("destroy");
								elem.igGrid(opts);
								// update code in the editor. replace features: [ ] with new stuff
								var newRange = new fmarker.range.constructor(fmarker.range.start.row + 1, 0, fmarker.range.end.row, 0);
								session.replace(newRange, featuresCode);
								//var featuresCode = session.getTextRange(fmarker.range);
								$(this).dialog("close"); 
							}
						},
						{
							text: "Close", click: function() { 
								$(this).dialog("close"); 
							}
						}						
					]
				});
				// add features to contents and attach actions
				list = $("<ul></ul>").appendTo(contents).addClass("list-group");
				var features = packageInfo.components[descriptor.type].properties.features; // TODO: be more defensive here
				if (!features.loaded) { // load the metadata for every feature, if it's not already loaded
					var featureNames = features.components;
					features.components = []; // we're overwriting the names with an associative array of objects
					for (var i = 0; i < featureNames.length; i++) {
						var featureName = featureNames[i];
						if (featureName) {
							try {
								var url = packageInfo.configPath + "/" + featureName + ".json";
								// load metadata for every feature
								var json = $.ajax({ // TODO: we could refactor this usage into a shared func on package info perhaps
									type: "GET",
									url: url,
									cache: true,
									dataType: "json",
									async: false
								});
								features.components[featureName] = $.parseJSON(json.responseText);
							} catch (e) {
								console.error("Could not load feature info for '" + featureName + "'. Error: " + e);
							}
						}
					}
					features.loaded = true; 
				}
				for (featureName in features.components) {
					if (features.components.hasOwnProperty(featureName)) {
						var feature = features.components[featureName];
						var featureDataName = feature.name.substr(9);
						var item = $("<li></li>").appendTo(list).addClass("list-group-item")
							.text(feature.title).attr("data-name", featureDataName);
						$("<input type=\"checkbox\">").prependTo(item).css("margin-right", 20).attr("id", featureName);
						//$("<i></i>").addClass("icon-cog").appendTo(item);
					}
				}
				// set default values
				var enabledFeatures;
				if (descriptor.iframe.jQuery && descriptor.iframe.jQuery(descriptor.element.data("igGrid"))) {
					enabledFeatures = descriptor.iframe.jQuery($("#designer-frame").contents().find("#" + descriptor.element.attr("id"))).data("igGrid").options.features;
				} else {
					enabledFeatures = descriptor.element.data("igGrid").options.features;
				}
				for (var i = 0; enabledFeatures && i < enabledFeatures.length; i++) {
					list.find("input[id=grid" + enabledFeatures[i].name.toLowerCase() + "]").attr("checked", true);
				}
				// add Ok and Cancel buttons
				/*
					// enable/disable a feature in the grid
					// this also means editing the markup in the editor
					// need to recreate the grid to enable / disable features?
					if ($(this).is(":checked")) {
						
					} else {
						
					}
				*/
				/*
					var buttonGroup = $("<div></div>").css("padding-left", 30).appendTo(contents);
					$("<div></div>").addClass("btn").addClass("btn-primary").addClass("ok-button-features").text("Save").appendTo(buttonGroup);
					$("<div></div>").addClass("btn").addClass("cancel-button-features").text("Cancel").appendTo(buttonGroup);
				*/
			} else if (p === "columns") {
			
			} else if (p === "dataSource") {
			
			}			
		}
	});
	return IgniteUIGridPlugin;
});
