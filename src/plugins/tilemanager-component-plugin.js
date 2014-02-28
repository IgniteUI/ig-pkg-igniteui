define (["./_default-component-plugin"], function (DefaultPlugin) {
	var IgniteUITileManagerPlugin = IgniteUITileManagerPlugin || DefaultPlugin.extend({
		init: function (options) {
			this._super(options);
		},
		// retrieves the initial markup for the current component
		getMarkup: function (descriptor) {
			return "<div id=\"" + descriptor.id + "\" style=\"width: 80%; height: 550px;\" data-droppablechild=\"false\" data-hasdroppables=\"true\">" + 
			"<div data-droppablechild=\"true\"><h3>What is Lorem Ipsum</h3><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></div>" +
			"<div data-droppablechild=\"true\"><h3>Why do we use it?</h3><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p></div>" +
			"<div data-droppablechild=\"true\"><h3>Where does it come from?</h3><p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" </p></div></div>";
			//return this.evalTemplate("default.html", descriptor, true);
		},
		
		getCodeEditorMarkupSnippet: function (descriptor) {
			// as a developer, i would like to be able to provide the direct manual formatting, as well as specify a template, and evaluate it
			return {codeString: descriptor.ide._tabStr(descriptor.extraIndent + 1) + "<div id=\"" + descriptor.id + "\" style=\"width: 80%; height: 550px;\">\n\t\t\t<div>\n\t\t\t\t<h3>What is Lorem Ipsum</h3>\n\t\t\t\t<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<h3>Why do we use it?</h3>\n\t\t\t\t<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<h3>Where does it come from?</h3>\n\t\t\t\t<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" .</p>\n\t\t\t</div>\n\t\t</div>\n", lineCount: 14,
			extraMarkers: [
						{ rowOffset: 1, colOffset: 0, rowCount: 4, colCount: 0 },
						{ rowOffset: 5, colOffset: 0, rowCount: 4, colCount: 0 },
						{ rowOffset: 9, colOffset: 0, rowCount: 4, colCount: 0 }
					]		
			};
			//return this.evalTemplate("default.code.html", descriptor);
		}
		
	});
	return IgniteUITileManagerPlugin;
});
