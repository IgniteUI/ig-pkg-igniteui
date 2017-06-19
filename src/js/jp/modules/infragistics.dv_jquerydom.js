/*!@license
* Infragistics.Web.ClientUI infragistics.dv_jquerydom.js 17.1.20171.1012
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
* Depends:
*     jquery-1.4.4.js
*     jquery.ui.core.js
*     jquery.ui.widget.js
*     infragistics.util.js
*     infragistics.ext_core.js
*     infragistics.ext_collections.js
*     infragistics.dv_core.js
*/
/*<BeginHeader/>*/
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		define( [
			'./infragistics.util',
			'./infragistics.ext_core',
			'./infragistics.ext_collections',
			'./infragistics.dv_core'
		], factory );
	} else {
		factory(igRoot);
	}
}
(function($) {
/*<EndHeader/>*/
$.ig = $.ig || {};
var $$t = {};
$.ig.globalDefs = $.ig.globalDefs || {};
$.ig.globalDefs.$$ag = $$t;
$$0 = $.ig.globalDefs.$$0;
$$4 = $.ig.globalDefs.$$4;
$$1 = $.ig.globalDefs.$$1;
$$w = $.ig.globalDefs.$$w;
$$6 = $.ig.globalDefs.$$6;
$.ig.$currDefinitions = $$t;
$.ig.util.bulkDefine([
"JQueryDomRenderer:a",
"JQueryDomWrapper:b"]);
/*<BeginType Name="Infragistics.JQueryDomRenderer" />*/

$.ig.util.defType('JQueryDomRenderer', 'Object', {
	init: function (root) {
		this.__discoveryElements = new $.ig.Stack$1($.ig.DomWrapper.prototype.$type);
		$.ig.Object.prototype.init.call(this);
		this.__rootWrapper = root;
		this.htmlTest(/^[^<]*(<[\w\W]+>)[^>]*$/);
		$.ig.JQueryDomRenderer.prototype.supportsTextContent = (document.createElement('div').textContent !== undefined);
	},
	__rootWrapper: null,
	/*<BeginProperty Name="System.Html.IDomWrapper Infragistics.JQueryDomRenderer::RootWrapper()" />*/
	rootWrapper: function () {
		return this.__rootWrapper;
	}
	/*<EndProperty Name="System.Html.IDomWrapper Infragistics.JQueryDomRenderer::RootWrapper()" />*/
	,
	/*<BeginMethod Name="System.Html.IDomRenderer Infragistics.JQueryDomRenderer::Append(System.Html.IDomWrapper)" />*/
	append: function (child) {
		this.__rootWrapper.append(child);
		return this;
	}
	/*<EndMethod Name="System.Html.IDomRenderer Infragistics.JQueryDomRenderer::Append(System.Html.IDomWrapper)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.JQueryDomRenderer::AppendToBody(System.Html.IDomWrapper)" />*/
	appendToBody: function (element) {
		$(document.body).append(($(element.getNativeElement())));
	}
	/*<EndMethod Name="System.Void Infragistics.JQueryDomRenderer::AppendToBody(System.Html.IDomWrapper)" />*/
	,
	/*<BeginMethod Name="System.Html.IDomWrapper Infragistics.JQueryDomRenderer::CreateElement(System.String)" />*/
	createElement: function (elementName) {
		var ele = document.createElement(elementName);
		var jEle = $(ele);
		var wrap = new $.ig.JQueryDomWrapper(ele, jEle);
		return wrap;
	}
	/*<EndMethod Name="System.Html.IDomWrapper Infragistics.JQueryDomRenderer::CreateElement(System.String)" />*/
	,
	__discoveryElements: null,
	/*<BeginMethod Name="System.Void Infragistics.JQueryDomRenderer::EndCSSQuery()" />*/
	endCSSQuery: function () {
		if (this.__discoveryElements.count() > 0) {
			var ele = this.__discoveryElements.pop();
			ele.remove();
		}
	}
	/*<EndMethod Name="System.Void Infragistics.JQueryDomRenderer::EndCSSQuery()" />*/
	,
	_htmlTest: null,
	/*<BeginProperty Name="System.Object Infragistics.JQueryDomRenderer::HtmlTest()" />*/
	htmlTest: function (value) {
		if (arguments.length === 1) {
			this._htmlTest = value;
			return value;
		} else {
			return this._htmlTest;
		}
	}
	/*<EndProperty Name="System.Object Infragistics.JQueryDomRenderer::HtmlTest()" />*/
	,
	/*<BeginMethod Name="System.Html.IDomWrapper Infragistics.JQueryDomRenderer::ExpandTemplate(System.Object, System.Object)" />*/
	expandTemplate: function (template_, args_) {
		var expanded_ = $.ig.tmpl(template_, args_).toString();
		if (!this.htmlTest().test(expanded_)) {
			expanded_ = "<span>" + expanded_ + "</span>";
		}
		var content = $(expanded_);
		var wrapper = new $.ig.JQueryDomWrapper(content[0], content);
		return wrapper;
	}
	/*<EndMethod Name="System.Html.IDomWrapper Infragistics.JQueryDomRenderer::ExpandTemplate(System.Object, System.Object)" />*/
	,
	/*<BeginMethod Name="System.Html.Media.Graphics.CanvasContext2D Infragistics.JQueryDomRenderer::Get2DCanvasContext(System.Html.IDomWrapper)" />*/
	get2DCanvasContext: function (canvas) {
		var canv = canvas.getNativeElement();
		return canv.getContext("2d");
	}
	/*<EndMethod Name="System.Html.Media.Graphics.CanvasContext2D Infragistics.JQueryDomRenderer::Get2DCanvasContext(System.Html.IDomWrapper)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.JQueryDomRenderer::GetCssDefaultPropertyValue(System.String, System.String)" />*/
	getCssDefaultPropertyValue: function (className, propertyName) {
		return $.ig.CssHelper.prototype.getPropertyValue1(this.__discoveryElements.peek(), className, propertyName);
	}
	/*<EndMethod Name="System.String Infragistics.JQueryDomRenderer::GetCssDefaultPropertyValue(System.String, System.String)" />*/
	,
	/*<BeginMethod Name=" Infragistics.JQueryDomRenderer::GetCssDefaultValuesForClassCollection(System.String, )" />*/
	getCssDefaultValuesForClassCollection: function (classPrefix, propertyNames) {
		var prop = new $.ig.List$1(String, 0);
		for (var i = 0; i < propertyNames.length; i++) {
			prop.add(propertyNames[i]);
		}
		var ret = $.ig.CssHelper.prototype.getValuesForClassCollection(this.__discoveryElements.peek(), classPrefix, prop);
		var retVal = new Array(ret.count());
		for (var i1 = 0; i1 < ret.count(); i1++) {
			retVal[i1] = new Array(ret.__inner[i1].count());
			for (var j = 0; j < ret.__inner[i1].count(); j++) {
				retVal[i1][j] = ret.__inner[i1].__inner[j];
			}
		}
		return retVal;
	}
	/*<EndMethod Name=" Infragistics.JQueryDomRenderer::GetCssDefaultValuesForClassCollection(System.String, )" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.JQueryDomRenderer::GetHeightForFontString(System.String, System.String, System.Boolean)" />*/
	getHeightForFontString: function (fontString, text, useOffsetHeight) {
		this.startCSSQuery();
		this.__discoveryElements.peek().setStyleProperty("font", fontString);
		var span_ = $("<span></span>");
		var spanWrap = new $.ig.JQueryDomWrapper(span_[0], span_);
		this.__discoveryElements.peek().append(spanWrap);
		spanWrap.setText(text);
		var height;
		if (useOffsetHeight) {
			var offHeight = span_[0].offsetHeight;
			height = offHeight;
		} else {
			height = span_.height();
		}
		this.endCSSQuery();
		return Math.round(height);
	}
	/*<EndMethod Name="System.Double Infragistics.JQueryDomRenderer::GetHeightForFontString(System.String, System.String, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Html.IDomRenderer Infragistics.JQueryDomRenderer::GetSubRenderer(System.Html.IDomWrapper)" />*/
	getSubRenderer: function (root) {
		return new $.ig.JQueryDomRenderer(root);
	}
	/*<EndMethod Name="System.Html.IDomRenderer Infragistics.JQueryDomRenderer::GetSubRenderer(System.Html.IDomWrapper)" />*/
	,
	/*<BeginMethod Name="System.Action Infragistics.JQueryDomRenderer::GlobalListen(System.String, System.String, System.Action)" />*/
	globalListen: function (element, eventName, handler) {
		var targ = null;
		if (element == "window") {
			targ = $(window);
		}
		if (targ != null) {
			var a = function (e) {
				handler(e);
			};
			targ.bind(eventName, a);
			var unbind = null;
			unbind = function () {
				targ.unbind(eventName, a);
				a = null;
			};
			return unbind;
		}
		return function () {
		};
	}
	/*<EndMethod Name="System.Action Infragistics.JQueryDomRenderer::GlobalListen(System.String, System.String, System.Action)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.JQueryDomRenderer::HasBody()" />*/
	hasBody: function () {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.JQueryDomRenderer::HasBody()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.JQueryDomRenderer::HasWindow()" />*/
	hasWindow: function () {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.JQueryDomRenderer::HasWindow()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.JQueryDomRenderer::SetCssQueryFontString(System.String)" />*/
	setCssQueryFontString: function (fontString) {
		this.__discoveryElements.peek().setStyleProperty("font", fontString);
	}
	/*<EndMethod Name="System.Void Infragistics.JQueryDomRenderer::SetCssQueryFontString(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.JQueryDomRenderer::StartCSSQuery()" />*/
	startCSSQuery: function () {
		this.__discoveryElements.push($.ig.CssHelper.prototype.getDisoveryElement(this));
		this.__rootWrapper.append(this.__discoveryElements.peek());
	}
	/*<EndMethod Name="System.Void Infragistics.JQueryDomRenderer::StartCSSQuery()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.JQueryDomRenderer::SupportsDOMEvents()" />*/
	supportsDOMEvents: function () {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.JQueryDomRenderer::SupportsDOMEvents()" />*/
	,
	$type: new $.ig.Type('JQueryDomRenderer', $.ig.Object.prototype.$type, [$.ig.DomRenderer.prototype.$type])
}, true);

/*<EndType Name="Infragistics.JQueryDomRenderer" />*/

/*<BeginType Name="Infragistics.JQueryDomWrapper" />*/

$.ig.util.defType('JQueryDomWrapper', 'Object', {
	__ele: null,
	__jEle: null,
	init: function (ele, jEle) {
		this.__toUnbind = new $.ig.List$1($.ig.Action.prototype.$type, 0);
		$.ig.Object.prototype.init.call(this);
		this.__supportsTextContent = $.ig.JQueryDomRenderer.prototype.supportsTextContent;
		this.__ele = ele;
		this.__jEle = jEle;
	},
	/*<BeginMethod Name="System.Html.IDomWrapper Infragistics.JQueryDomWrapper::AddClass(System.String)" />*/
	addClass: function (className) {
		this.__jEle.addClass(className);
		return this;
	}
	/*<EndMethod Name="System.Html.IDomWrapper Infragistics.JQueryDomWrapper::AddClass(System.String)" />*/
	,
	/*<BeginMethod Name="System.Html.Element Infragistics.JQueryDomWrapper::SafeGetNative(System.Html.IDomWrapper)" />*/
	safeGetNative: function (child_) {
		if (child_.getNativeElement === undefined) {
			return $(child_)[0];
		}
		return child_.getNativeElement();
	}
	/*<EndMethod Name="System.Html.Element Infragistics.JQueryDomWrapper::SafeGetNative(System.Html.IDomWrapper)" />*/
	,
	/*<BeginMethod Name="System.Html.IDomWrapper Infragistics.JQueryDomWrapper::Append(System.Html.IDomWrapper)" />*/
	append: function (child) {
		this.__jEle.append($(this.safeGetNative(child)));
		return this;
	}
	/*<EndMethod Name="System.Html.IDomWrapper Infragistics.JQueryDomWrapper::Append(System.Html.IDomWrapper)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.JQueryDomWrapper::Attribute(System.String)" />*/
	getAttribute: function (propertyName) {
		return this.__jEle.attr(propertyName);
	}
	/*<EndMethod Name="System.String Infragistics.JQueryDomWrapper::Attribute(System.String)" />*/
	,
	/*<BeginMethod Name="System.Html.IDomWrapper Infragistics.JQueryDomWrapper::Attribute(System.String, System.String)" />*/
	setAttribute: function (propertyName, value) {
		this.__jEle.attr(propertyName, value);
		return this;
	}
	/*<EndMethod Name="System.Html.IDomWrapper Infragistics.JQueryDomWrapper::Attribute(System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.Html.IDomWrapper Infragistics.JQueryDomWrapper::Before(System.Html.IDomWrapper)" />*/
	before: function (child) {
		this.__jEle.before($(this.safeGetNative(child)));
		return this;
	}
	/*<EndMethod Name="System.Html.IDomWrapper Infragistics.JQueryDomWrapper::Before(System.Html.IDomWrapper)" />*/
	,
	/*<BeginMethod Name="System.Html.IDomWrapper Infragistics.JQueryDomWrapper::Clone()" />*/
	clone: function () {
		var c = this.__jEle.clone();
		var cloned = new $.ig.JQueryDomWrapper(c[0], c);
		return cloned;
	}
	/*<EndMethod Name="System.Html.IDomWrapper Infragistics.JQueryDomWrapper::Clone()" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.JQueryDomWrapper::Css(System.String)" />*/
	getStyleProperty: function (propertyName) {
		return this.__jEle.css(propertyName);
	}
	/*<EndMethod Name="System.String Infragistics.JQueryDomWrapper::Css(System.String)" />*/
	,
	/*<BeginMethod Name="System.Html.IDomWrapper Infragistics.JQueryDomWrapper::Css(System.String, System.String)" />*/
	setStyleProperty: function (propertyName, value) {
		this.__jEle.css(propertyName, value);
		return this;
	}
	/*<EndMethod Name="System.Html.IDomWrapper Infragistics.JQueryDomWrapper::Css(System.String, System.String)" />*/
	,
	/*<BeginMethod Name=" Infragistics.JQueryDomWrapper::FindByClass(System.String)" />*/
	findByClass: function (className) {
		var ret = this.__jEle.find(className);
		var retVal = new Array(ret.length);
		for (var i = 0; i < ret.length; i++) {
			var ele = ret[i];
			var jEle = $(ele);
			retVal[i] = new $.ig.JQueryDomWrapper(ele, jEle);
		}
		return retVal;
	}
	/*<EndMethod Name=" Infragistics.JQueryDomWrapper::FindByClass(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.JQueryDomWrapper::Focus()" />*/
	focus: function () {
		this.__jEle.focus();
	}
	/*<EndMethod Name="System.Void Infragistics.JQueryDomWrapper::Focus()" />*/
	,
	/*<BeginMethod Name="System.Html.IDomWrapper Infragistics.JQueryDomWrapper::GetChildAt(System.Int32)" />*/
	getChildAt: function (i) {
		var ele = this.__jEle.children().eq(i);
		var wrap = new $.ig.JQueryDomWrapper(ele[0], ele);
		return wrap;
	}
	/*<EndMethod Name="System.Html.IDomWrapper Infragistics.JQueryDomWrapper::GetChildAt(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.JQueryDomWrapper::GetChildCount()" />*/
	getChildCount: function () {
		return this.__jEle.children().length;
	}
	/*<EndMethod Name="System.Int32 Infragistics.JQueryDomWrapper::GetChildCount()" />*/
	,
	/*<BeginMethod Name="System.Object Infragistics.JQueryDomWrapper::GetNativeElement()" />*/
	getNativeElement: function () {
		return this.__ele;
	}
	/*<EndMethod Name="System.Object Infragistics.JQueryDomWrapper::GetNativeElement()" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.JQueryDomWrapper::Height()" />*/
	height: function () {
		return this.__jEle.height();
	}
	/*<EndMethod Name="System.Int32 Infragistics.JQueryDomWrapper::Height()" />*/
	,
	/*<BeginMethod Name="System.Html.IDomWrapper Infragistics.JQueryDomWrapper::Hide()" />*/
	hide: function () {
		this.__jEle.hide();
		return this;
	}
	/*<EndMethod Name="System.Html.IDomWrapper Infragistics.JQueryDomWrapper::Hide()" />*/
	,
	__toUnbind: null,
	__supportsTextContent: false,
	/*<BeginMethod Name="System.Action Infragistics.JQueryDomWrapper::Listen(System.String, System.Action)" />*/
	listen: function (eventName, handler) {
		var $self = this;
		var a = function (e) {
			handler(e);
		};
		this.__jEle.bind(eventName, a);
		var unbind = null;
		unbind = function () {
			if ($self.__toUnbind.contains(unbind)) {
				$self.__toUnbind.remove(unbind);
			}
			$self.__jEle.unbind(eventName, a);
			a = null;
		};
		this.__toUnbind.add(unbind);
		return unbind;
	}
	/*<EndMethod Name="System.Action Infragistics.JQueryDomWrapper::Listen(System.String, System.Action)" />*/
	,
	/*<BeginMethod Name="System.Html.IDomWrapperPosition Infragistics.JQueryDomWrapper::Offset()" />*/
	getOffset: function () {
		return this.__jEle.offset();
	}
	/*<EndMethod Name="System.Html.IDomWrapperPosition Infragistics.JQueryDomWrapper::Offset()" />*/
	,
	/*<BeginMethod Name="System.Html.IDomWrapper Infragistics.JQueryDomWrapper::Offset(System.Double, System.Double)" />*/
	setOffset: function (x_, y_) {
		var native_ = this.__jEle;
		var hasOffset = native_.offset !== undefined;
		if (hasOffset) {
			native_.offset({ top: y_, left: x_ });
		}
		return this;
	}
	/*<EndMethod Name="System.Html.IDomWrapper Infragistics.JQueryDomWrapper::Offset(System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.JQueryDomWrapper::OuterHeight()" />*/
	outerHeight: function () {
		return this.__jEle.outerHeight();
	}
	/*<EndMethod Name="System.Int32 Infragistics.JQueryDomWrapper::OuterHeight()" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.JQueryDomWrapper::OuterHeightWithMargin()" />*/
	outerHeightWithMargin: function () {
		return this.__jEle.outerHeight(true);
	}
	/*<EndMethod Name="System.Int32 Infragistics.JQueryDomWrapper::OuterHeightWithMargin()" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.JQueryDomWrapper::OuterWidth()" />*/
	outerWidth: function () {
		return this.__jEle.outerWidth();
	}
	/*<EndMethod Name="System.Int32 Infragistics.JQueryDomWrapper::OuterWidth()" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.JQueryDomWrapper::OuterWidthWithMargin()" />*/
	outerWidthWithMargin: function () {
		return this.__jEle.outerWidth(true);
	}
	/*<EndMethod Name="System.Int32 Infragistics.JQueryDomWrapper::OuterWidthWithMargin()" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.JQueryDomWrapper::Property(System.String)" />*/
	getProperty: function (propertyName) {
		return this.__jEle.prop(propertyName);
	}
	/*<EndMethod Name="System.String Infragistics.JQueryDomWrapper::Property(System.String)" />*/
	,
	/*<BeginMethod Name="System.Html.IDomWrapper Infragistics.JQueryDomWrapper::Property(System.String, System.String)" />*/
	setProperty: function (propertyName, value) {
		this.__jEle.prop(propertyName, value);
		return this;
	}
	/*<EndMethod Name="System.Html.IDomWrapper Infragistics.JQueryDomWrapper::Property(System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.Html.IDomWrapper Infragistics.JQueryDomWrapper::Remove()" />*/
	remove: function () {
		this.__jEle.remove();
		return this;
	}
	/*<EndMethod Name="System.Html.IDomWrapper Infragistics.JQueryDomWrapper::Remove()" />*/
	,
	/*<BeginMethod Name="System.Html.IDomWrapper Infragistics.JQueryDomWrapper::RemoveChild(System.Html.IDomWrapper)" />*/
	removeChild: function (child) {
		$(child.getNativeElement()).remove();
		return this;
	}
	/*<EndMethod Name="System.Html.IDomWrapper Infragistics.JQueryDomWrapper::RemoveChild(System.Html.IDomWrapper)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.JQueryDomWrapper::RemoveChildren()" />*/
	removeChildren: function () {
		this.__jEle.children().remove();
	}
	/*<EndMethod Name="System.Void Infragistics.JQueryDomWrapper::RemoveChildren()" />*/
	,
	/*<BeginMethod Name="System.Html.IDomWrapper Infragistics.JQueryDomWrapper::RemoveClass(System.String)" />*/
	removeClass: function (className) {
		this.__jEle.removeClass(className);
		return this;
	}
	/*<EndMethod Name="System.Html.IDomWrapper Infragistics.JQueryDomWrapper::RemoveClass(System.String)" />*/
	,
	/*<BeginMethod Name="System.Html.IDomWrapper Infragistics.JQueryDomWrapper::SetRawStyleProperty(System.String, System.String)" />*/
	setRawStyleProperty: function (propertyName_, value_) {
		var ele_ = this.__ele;
		ele_.style[propertyName_] = value_;
		return this;
	}
	/*<EndMethod Name="System.Html.IDomWrapper Infragistics.JQueryDomWrapper::SetRawStyleProperty(System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.Html.IDomWrapper Infragistics.JQueryDomWrapper::SetRawXPosition(System.Double)" />*/
	setRawXPosition: function (value) {
		var ele_ = this.__ele;
		ele_.style.left = value + "px";
		return this;
	}
	/*<EndMethod Name="System.Html.IDomWrapper Infragistics.JQueryDomWrapper::SetRawXPosition(System.Double)" />*/
	,
	/*<BeginMethod Name="System.Html.IDomWrapper Infragistics.JQueryDomWrapper::SetRawYPosition(System.Double)" />*/
	setRawYPosition: function (value) {
		var ele_ = this.__ele;
		ele_.style.top = value + "px";
		return this;
	}
	/*<EndMethod Name="System.Html.IDomWrapper Infragistics.JQueryDomWrapper::SetRawYPosition(System.Double)" />*/
	,
	/*<BeginMethod Name="System.Html.IDomWrapper Infragistics.JQueryDomWrapper::SetRawPosition(System.Double, System.Double)" />*/
	setRawPosition: function (x, y) {
		var ele_ = this.__ele;
		ele_.style.left = x + "px";
		ele_.style.top = y + "px";
		return this;
	}
	/*<EndMethod Name="System.Html.IDomWrapper Infragistics.JQueryDomWrapper::SetRawPosition(System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Html.IDomWrapper Infragistics.JQueryDomWrapper::SetRawSize(System.Double, System.Double)" />*/
	setRawSize: function (width, height) {
		var ele_ = this.__ele;
		ele_.style.width = width + "px";
		ele_.style.height = height + "px";
		return this;
	}
	/*<EndMethod Name="System.Html.IDomWrapper Infragistics.JQueryDomWrapper::SetRawSize(System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Html.IDomWrapper Infragistics.JQueryDomWrapper::Show()" />*/
	show: function () {
		this.__jEle.show();
		return this;
	}
	/*<EndMethod Name="System.Html.IDomWrapper Infragistics.JQueryDomWrapper::Show()" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.JQueryDomWrapper::Text()" />*/
	getText: function () {
		return this.__jEle.text();
	}
	/*<EndMethod Name="System.String Infragistics.JQueryDomWrapper::Text()" />*/
	,
	/*<BeginMethod Name="System.Html.IDomWrapper Infragistics.JQueryDomWrapper::Text(System.String)" />*/
	setText: function (value_) {
		if (this.__supportsTextContent) {
			var ele_ = this.__ele;
			ele_.textContent = value_;
		} else {
			this.__jEle.text(value_);
		}
		return this;
	}
	/*<EndMethod Name="System.Html.IDomWrapper Infragistics.JQueryDomWrapper::Text(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.JQueryDomWrapper::UnlistenAll()" />*/
	unlistenAll: function () {
		var toUnbind = new $.ig.List$1($.ig.Action.prototype.$type, 1, this.__toUnbind);
		for (var i = 0; i < toUnbind.count(); i++) {
			toUnbind.__inner[i]();
		}
		this.__toUnbind.clear();
		return;
	}
	/*<EndMethod Name="System.Void Infragistics.JQueryDomWrapper::UnlistenAll()" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.JQueryDomWrapper::Width()" />*/
	width: function () {
		return this.__jEle.width();
	}
	/*<EndMethod Name="System.Int32 Infragistics.JQueryDomWrapper::Width()" />*/
	,
	$type: new $.ig.Type('JQueryDomWrapper', $.ig.Object.prototype.$type, [$.ig.DomWrapper.prototype.$type])
}, true);

/*<EndType Name="Infragistics.JQueryDomWrapper" />*/

/*<BeginStatics Name="Infragistics.JQueryDomRenderer" />*/

$.ig.JQueryDomRenderer.prototype.supportsTextContent = false;
/*<EndStatics Name="Infragistics.JQueryDomRenderer" />*/


/*<BeginFooter/>*/
}));// REMOVE_FROM_COMBINED_FILES
/*<EndFooter/>*/

