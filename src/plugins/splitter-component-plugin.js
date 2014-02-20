define (["./_default-component-plugin"], function (DefaultPlugin) {
	var IgniteUISplitterPlugin = IgniteUISplitterPlugin || DefaultPlugin.extend({
		init: function (options) {
			this._super(options);
		},
		// retrieves the initial markup for the current component
		getMarkup: function (descriptor) {
			return "<div id=\"" + descriptor.id + "\"><div data-design-visible-child='true'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div><div data-design-visible-child='true'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</div></div>";
		},
		
		getCodeEditorMarkupSnippet: function (descriptor) {
			return {
				codeString: descriptor.ide._tabStr(descriptor.extraIndent + 1) + "<div id=\"" + descriptor.id + "\">\n\t\t\t<div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>\n\t\t\t<div>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</div>\n\t\t</div>\n", 
				lineCount: 4,
				extraMarkers: [
					{ rowOffset: 1, colOffset: 0, rowCount: 1, colCount: 0 },
					{ rowOffset: 2, colOffset: 0, rowCount: 1, colCount: 0 }
				]
			};
		}
		
	});
	return IgniteUISplitterPlugin;
});
