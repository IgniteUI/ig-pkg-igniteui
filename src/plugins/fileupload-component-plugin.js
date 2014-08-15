define (["./_default-component-plugin"], function (DefaultPlugin) {
	var IgniteUIFileUploadPlugin = IgniteUIFileUploadPlugin || DefaultPlugin.extend({
		init: function (options) {
			this._super(options);
		},
		getName: function () {
			return "igUpload";
		},
		_getWidgetName: function () {
			return "igUpload";
		},
		// retrieves the initial markup for the current component
		getMarkup: function (descriptor) {
			return "<div id=\"" + descriptor.id + "\" style='display: inline-block' ></div>";			
		},
		initComponent: function (descriptor) {
		    var name = this._getWidgetName(descriptor.type), ide = this.settings.ide, blockOffset = 7, flagAlreadyContainsCSS = false, locale = $.plugin.fileUpload.locale;
			
			if (window.frames[0].$(descriptor.placeholder)[name]) {			    
				window.frames[0].$(descriptor.placeholder[0])[name](descriptor.options);
				window.frames[0].$(descriptor.placeholder).find("button").after("<span class=\"glyphicon glyphicon-warning-sign uploadWarning\"></span>");
				window.frames[0].$(".uploadWarning").on({
					"mouseenter": function (event) {
						var target = $(event.target);
						var tooltip = $(".prop-tooltip");
						clearTimeout(tooltip.data("timeoutid"));
						var timeoutID = setTimeout(function () {
							var pos = target.offset();
							
								var tooltipText = "<p>" + locale.tooltip +"</p>";
								tooltip.find(".tooltip-content").html(tooltipText);
								tooltip.css({
									left: pos.left + 18,
									top: pos.top, 
									display: "block"
								});
						}, 300);
						tooltip.data("timeoutid", timeoutID);
					},
					"mouseleave": function (event) {
						var tooltip = $(".prop-tooltip");
						clearTimeout(tooltip.data("timeoutid"));
						tooltip.css("display", "none");
					}
				});
			}
		}					
	});
	return IgniteUIFileUploadPlugin;
});
