define (["./grid-component-plugin"], function (DefaultPlugin) {
	var IgniteUIHierarchicalGridPlugin = IgniteUIHierarchicalGridPlugin || DefaultPlugin.extend({
		init: function (options) {
			this._super(options);
		},
		getName: function () {
			return "igHierarchicalGrid";
		},
		_getWidgetName: function () {
			return "igHierarchicalGrid";
		},
		getMarkup: function (descriptor) {
			return "<div style=\"display:inline-block;\" id=\"" + descriptor.id + "\"></div>";
		},
		getCodeEditorScriptSnippet: function (descriptor) {
			var code = "";
			var opts = descriptor.options;
			var lineCount = 7;
			var xtraMarkup = ",\n\t\t\t\t\tfeatures: [\n" + "\t\t\t\t\t],\n\t\t\t\t\tcolumnLayouts: [\n" + "\t\t\t\t\t]";
			//A.T. - we can either drop with no features in the code editor
			// or an empty array - empty arr makes it easier to manage with markers
			code = "\t\t\t\t$(\"#" + descriptor.id + "\").igHierarchicalGrid({\n" +
				"\t\t\t\t\theight: " + opts.height + ",\n" + 
				"\t\t\t\t\twidth: " + opts.width + xtraMarkup;
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
		},
		render: function (container, descriptor) {
			var content = container.closest('.adorner-content'),
				customSheet = this._renderCustomSheet();
			this._attachEvents(customSheet, descriptor);
			debugger
		},
		_renderCustomSheet: function () {
			var markup = '<div class="adorner-custom-list"><div class="adorner-label adorner-custom-label">ACTIONS</div>',
				$markup;
			markup += this._renderInteractions();
			markup += this._renderActions();
			markup += this._renderProperties();
			markup += '</div><div class="adorner-custom-footer"><a href="#" class="adorner-custom-action" data-action="full-view">All Events & Properties</a></div>';
			return $(markup);
		},
		_renderInteractions: function () {
			return '';
		},
		_renderActions: function () {
			return '<a href="#" class="adorner-custom-action" data-action="add-column">Add Column</a><a href="#" class="adorner-custom-action" data-action="add-row">Add Row</a>';
		},
		_renderProperties: function () {
			return '';
		},
		_attachEvents: function (sheet, descriptor) {
			var self = this;
			sheet.on('click', '.adorner-custom-action', function (event) {
				var action = $(this).attr('data-action');
				self._dispatchAction(action, descriptor);
				event.stopPropagation();
				return false;
			});
		},
		_dispatchAction: function (action, desriptor) {
			switch (action) {
			case 'add-column':
				this.addColumnAction(descriptor);
				break;
			case 'add-row':
				this.addRowAction(descriptor);
				break;
			case 'full-view':
				this.fullViewTransition(descriptor);
			default:
				break;
			}
		},
		addColumnAction: function (descriptor) {
			alert('Add Column Action triggered.');
		},
		addRowAction: function (descriptor) {
			alert('Add Row Action triggered.');
		},
		fullViewTransition: function (descriptor) {
			alert('Add Row Action triggered.');
		}
	});
	return IgniteUIHierarchicalGridPlugin;
});
