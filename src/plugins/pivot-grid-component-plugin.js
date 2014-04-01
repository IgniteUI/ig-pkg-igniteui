define (["./_default-component-plugin"], function (DefaultPlugin) {
	var IgniteUIPivotGridPlugin = IgniteUIPivotGridPlugin || DefaultPlugin.extend({
		init: function (options) {
			this._super(options);
		},
		getName: function () {
			return "igPivotGrid";
		},
		_getWidgetName: function () {
			return "igPivotGrid";
		},
		// retrieves the initial markup for the current component
		getMarkup: function (descriptor) {
			return "<div id=\"" + descriptor.id + "DataSelector\"></div><div id=\"" + descriptor.id + "\"></div><div style=\"clear: both\"></div>";			
		},
		getCodeEditorMarkupSnippet: function (descriptor) {
			// as a developer, i would like to be able to provide the direct manual formatting, as well as specify a template, and evaluate it
			var defTabbing = descriptor.ide._tabStr(descriptor.extraIndent + 1);
			return {codeString:defTabbing  + "<div id=\"" + descriptor.id +"DataSelector\"></div>\n" +
			defTabbing +"<div id=\"" + descriptor.id + "\"></div>\n" + 
			defTabbing + "<div style='clear: both'></div>\n", lineCount: 3}
		},
		getCodeEditorScriptSnippet: function (descriptor) {
			var defTabbing = descriptor.ide._tabStr(4), snippet, pivotSelectorSnippet, olapDSSippet, pivotGridSnippet, orderedReturnProps = [];
			descriptor.options.dataSource = "pivotDataSource";
			
			olapDSSippet = defTabbing + "var pivotDataSource = new $.ig.OlapXmlaDataSource({\n\t" +
					defTabbing + "serverUrl: 'http://sampledata.infragistics.com/olap/msmdpump.dll',\n\t" + 
					defTabbing + "catalog: 'Adventure Works DW Standard Edition',\n\t" +
					defTabbing + "cube: 'Adventure Works',\n\t" + 
					defTabbing + "measureGroup: \"Internet Sales\",\n\t" + 
					defTabbing + "rows: \"[Sales Territory].[Sales Territory]\",\n\t" + 
					defTabbing + "columns: \"[Product].[Product Categories]\",\n\t" +
					defTabbing + "measures: \"[Measures].[Internet Order Count]\"\n" +
					defTabbing + "});\n";
			pivotSelectorSnippet = defTabbing + "$(\"#" + descriptor.id +"DataSelector\").igPivotDataSelector({";
			pivotSelectorSnippet += "\n\t" + defTabbing + "dataSource: pivotDataSource";
			pivotSelectorSnippet += ",\n\t" + defTabbing + "width: 240";				
			pivotSelectorSnippet += ",\n\t" + defTabbing + "height: 650";
			pivotSelectorSnippet += "\n" + defTabbing + "});\n";
			
			pivotGridSnippet = defTabbing + "$(\"#" + descriptor.id +"\").igPivotGrid({";
			pivotGridSnippet += "\n\t" + defTabbing + "dataSource: pivotDataSource";
			pivotGridSnippet += ",\n\t" + defTabbing + "width: 650";				
			pivotGridSnippet += ",\n\t" + defTabbing + "height: 670";
			pivotGridSnippet += "\n" + defTabbing + "});\n";
			orderedReturnProps.push({
					name: "height",
					value: 670,
					type: "number"
				});
			orderedReturnProps.push({
					name: "width",
					value: 650,
					type: "number"
				});	
			orderedReturnProps.push({
					name: "dataSource",
					value: "pivotDataSource",
					type: "literal"
			});
			snippet = {
				codeString : olapDSSippet + pivotSelectorSnippet + pivotGridSnippet,
				lineCount: 19,
				orderedProps: orderedReturnProps
			}
			return snippet;
		},
		initComponent: function (descriptor) {
			var name = this._getWidgetName(descriptor.type), ide = this.settings.ide, blockOffset = 7, flagAlreadyContainsCSS = false,
			itemClass = "#" + descriptor.placeholder[0].id + "DataSelector, #" + descriptor.placeholder[0].id;
			if (!ide.editor.find(itemClass)) {
					pos = ide.editor.find("</head>");
					styleBlock = "\t\t<style>\n\t\t\t"+ itemClass +"{\n\t\t\t\t float: left; \n\t\t\t}\n\t\t</style>\n";
					ide.session.insert({row: pos.start.row, column: 0}, styleBlock);
					styleMarker = ide.createAndAddMarker(pos.start.row, 0, pos.start.row + blockOffset, 0);
					
					if (!ide._styleBlockMarker) {
						ide._styleBlockMarker = styleMarker;
					}
				}
				for (var i = 0; i < window.frames[0].$("head").children("style").length; i++) {
					if (window.frames[0].$("head").children("style")[i].innerText.indexOf(itemClass) !== -1) { 
						flagAlreadyContainsCSS = true;
						//We don't need to iterate if the class already exist
						break;
					}
				}
				if (!flagAlreadyContainsCSS) {
					window.frames[0].$("head").append(styleBlock);
				}
			if (window.frames[0].$(descriptor.placeholder)[name]) {			    
				var pivotDataSource = new window.frames[0].$.ig.OlapXmlaDataSource({
					serverUrl: 'http://sampledata.infragistics.com/olap/msmdpump.dll',
					catalog: 'Adventure Works DW Standard Edition',
					cube: 'Adventure Works',
					measureGroup: "Internet Sales",
					rows: "[Sales Territory].[Sales Territory]",
					columns: "[Product].[Product Categories]",
					measures: "[Measures].[Internet Order Count]"
				});
				window.frames[0]["pivotDataSource"] = pivotDataSource;
				var selectorOptions = {
					height: "650px",
					width: "240px",
					dataSource: pivotDataSource
				}
				descriptor.options.dataSource = pivotDataSource;
				descriptor.placeholder[0].id = descriptor.placeholder[0].id + "DataSelector";
				window.frames[0].$(descriptor.placeholder[0])["igPivotDataSelector"](selectorOptions);
				window.frames[0].$(descriptor.placeholder[1])[name](descriptor.options);
			}
		}					
	});
	return IgniteUIPivotGridPlugin;
});
