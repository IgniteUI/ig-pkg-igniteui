define (["./datasource-component-plugin"], function (DataSourcePlugin) {
	var IgniteUIJSONPDataSourcePlugin = IgniteUIJSONPDataSourcePlugin || DataSourcePlugin.extend({
		init: function (options) {
			this._super(options);
		},
		getCodeEditorScriptSnippet: function (descriptor) {
			var code = "\t\t\t\twindow." + descriptor.id + " = new $.ig.JSONPDataSource({\n";
			code += "\t\t\t\t\ttype: \"json\",\n";
			var orderedReturnProps = [];
			// now write options / settings
			code += "\t\t\t\t});\n";
			orderedReturnProps.push({
				name: "type",
				value: "json",
				type: "string"
			});
			return {
				codeString: code,
				lineCount: 3,
				orderedProps: orderedReturnProps
			};
		},
		initComponent: function (descriptor) {
			window.frames[0][descriptor.id] = new $.ig.JSONPDataSource({
				type: "json"
			});
		},
		render: function (container, descriptor) {
			var ds = window.frames[0][descriptor.id], ide = this.settings.ide, locale = $.plugin.dataSource.locale,
				that = this, ide = this.settings.ide, dsval = ds.settings.dataSource, responseDataKey = ds.settings.responseDataKey, 
				responseTotalRecCountKey = ds.settings.responseTotalRecCountKey, dscontainer, remoteContainer, localRemoteArea;
			//if (!(ds instanceof $.ig.DataSource)) {
			if (!(ds && ds._accumulatedTransactionLog)) {
				throw new Error("Object with ID " + descriptor.id + " is not an instance of IG Data Source");
			}
			descriptor.delayBind = 1000; // 1000 ms before the data source rebinds after a property has been changed

			container.empty(); // fix for 168980			
			if (dsval === null) {
				dsval = "";
			}
			if (responseDataKey === null) {
				responseDataKey = "";
			}
			if (responseTotalRecCountKey === null) {
				responseTotalRecCountKey = "";
			}
			$(".adorner-summary-sheet").addClass("data-source-summary-sheet");
			container.children(".ds-diag-container").remove();
			dscontainer = $("<div></div>").prependTo(container).addClass("ds-diag-container");
			remoteContainer = $("<div></div>").appendTo(dscontainer).addClass("ds-diag-remotecontainer");
			localRemoteArea = $("<div></div>").addClass("ds-diag-dt").prependTo(dscontainer);
			// edit schema button
			$("<span>" + locale.editSchema + "</span>").addClass("btn btn-default ds-diag-editschema").wrap("<div class=\"ds-diag-editschema-wrapper\"/>").parent().prependTo($(".adorner-custom-footer"));
			$("<label>" + locale.urlEndpoint + "(<a id=\"openTestUrl\">" + locale.openTest + "</a>" + ")" + "</label>").addClass("ds-diag-urllabel").appendTo(remoteContainer);
			$("<div><input type=\"text\" id=\"urlInput\" class=\"form-control\"/>").addClass("ds-diag-url").appendTo(remoteContainer);
				
			$("<label>" + locale.responseDataKey + "</label>").addClass("ds-diag-urllabel").appendTo(remoteContainer);
			$("<div><input id=\"responseDataKeyInput\" type=\"text\" class=\"form-control\"/></div>").addClass("ds-diag-url").appendTo(remoteContainer);
			$("<label>" + locale.responseTotalRecCountKey + "</label>").addClass("ds-diag-urllabel").appendTo(remoteContainer);
			$("<div><input id=\"responseTotalRecCountKeyInput\" type=\"text\" class=\"form-control\"/></div>").addClass("ds-diag-url").appendTo(remoteContainer);
			$("<span id=\"setButton\" class=\"btn btn-default\">" + locale.setDataSource + "</span></div>").addClass("ds-diag-url").appendTo(remoteContainer);


			remoteContainer.find("#urlInput").val(dsval).keyup(function (event) {

				if (event.keyCode === 13) {
					descriptor.propName = "dataSource";
					descriptor.oldPropValue = event.target.value ? event.target.value.substring(0, event.target.value.length - 1) : "";
					descriptor.propType = "literal";
					descriptor.propValue = event.target.value.trim();
					that.update(descriptor);
				}
				event.preventDefault();
				event.stopPropagation();
			});
			remoteContainer.find("#responseDataKeyInput").val(responseDataKey).keyup(function (event) {
				// update the dataSource's url property
				//ds.settings.dataSource = event.target.value; // validate?
				//also update the code view
				if (event.keyCode === 13) {
					descriptor.propName = "responseDataKey";
					descriptor.oldPropValue = event.target.value ? event.target.value.substring(0, event.target.value.length - 1) : "";
					descriptor.propType = "string";
					descriptor.propValue = event.target.value.trim();
					that.update(descriptor);
				}
				event.preventDefault();
				event.stopPropagation();
			});
			remoteContainer.find("#responseTotalRecCountKeyInput").val(responseTotalRecCountKey).keyup(function (event) {
				// update the dataSource's url property
				//ds.settings.dataSource = event.target.value; // validate?
				//also update the code view
				if (event.keyCode === 13) {
					descriptor.propName = "responseTotalRecCountKey";
					descriptor.oldPropValue = event.target.value ? event.target.value.substring(0, event.target.value.length - 1) : "";
					descriptor.propType = "string";
					descriptor.propValue = event.target.value.trim();
					that.update(descriptor);
				}
				event.preventDefault();
				event.stopPropagation();
			});
			remoteContainer.find("#setButton").click(function (event) {
				var url = remoteContainer.find(".ds-diag-url > #urlInput").val(), testLabel = remoteContainer.find(".test-label"), locale = $.plugin.dataSource.locale;
				if (testLabel.length === 0) {
					testLabel = $("<div class=\"test-label\"></div>").insertAfter(remoteContainer.find("#urlInput"));
				}
				if (url) {
					$.ajax({
						url: url,
						crossDomain: true,
						dataType: "jsonp"
					}).fail(function () {
						testLabel.addClass("test-fail").removeClass("test-success").text(locale.reqestFailed);
					}).done(function () {
						descriptor.propName = "responseDataKey";
						descriptor.oldPropValue = "";
						descriptor.propType = "string";
						descriptor.propValue = $("#responseDataKeyInput").val().trim();
						that.update(descriptor);


						descriptor.propName = "responseTotalRecCountKey";
						descriptor.oldPropValue = "";
						descriptor.propType = "string";
						descriptor.propValue = $("#responseTotalRecCountKeyInput").val().trim();
						that.update(descriptor);

						descriptor.propName = "dataSource";
						descriptor.oldPropValue = "";
						descriptor.propType = "litearal";
						descriptor.propValue = remoteContainer.find(".ds-diag-url > #urlInput").val().trim();
						that.update(descriptor);
					});
				} else {
					testLabel.removeClass("test-fail").removeClass("test-success").text(locale.setValidUrl);
				}
			});
			remoteContainer.find("#openTestUrl").click(function () {
				var url = remoteContainer.find("#urlInput").val().trim();
				if (url && url !== "") {
					var win = window.open(url, "_blank");
					if (win) {
						win.focus();
					}
				}
			});
			// edit schema
			dscontainer.find(".ds-diag-editschema").click(function (event) {
				descriptor.compObject = ide.componentById(descriptor.id);
				descriptor.propName = "fields";
				descriptor.ide = ide;
				descriptor.propType = "array";
				descriptor.placeholder = descriptor.element; //TODO
				descriptor.provider = ide._codeProviders[descriptor.compObject.lib];
				var props = container.closest(".adorners").find("#propertyGrid").data("igGrid").dataSource.data();
				for (var i = 0; i < props.length; i++) {
					if (props[i].propName === "fields") {
						descriptor.schema = props[i].schema;
						descriptor.displayProp = props[i].displayProp;
						break;
					}
				}
				that.openCollectionEditor(descriptor);
			});
		}
	});
	return IgniteUIJSONPDataSourcePlugin;
});
