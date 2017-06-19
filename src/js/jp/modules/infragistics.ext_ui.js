/*!@license
* Infragistics.Web.ClientUI infragistics.ext_ui.js 17.1.20171.1012
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
*/
/*<BeginHeader/>*/
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		define( [
			'./infragistics.util',
			'./infragistics.ext_core',
			'./infragistics.ext_collections'
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
$.ig.globalDefs.$$a = $$t;
$$0 = $.ig.globalDefs.$$0;
$$1 = $.ig.globalDefs.$$1;
$$4 = $.ig.globalDefs.$$4;
$$6 = $.ig.globalDefs.$$6;
$.ig.$currDefinitions = $$t;
$.ig.util.bulkDefine([
"DataTemplateRenderHandler:o",
"DataTemplateMeasureHandler:p",
"DataTemplatePassHandler:q",
"DependencyObject:r",
"DependencyProperty:s",
"DependencyPropertiesCollection:u",
"DependencyPropertyChangedEventArgs:v",
"IDataObject:x",
"PropertyChangedCallback:aa",
"CoerceValueCallback:ab",
"PropertyMetadata:ac"]);
/*<BeginType Name="System.Windows.Input.ModifierKeys" />*/

$.ig.util.defEnum('ModifierKeys', false, false, {
	None: 0,
	Alt: 1,
	Control: 2,
	Shift: 4,
	Windows: 8,
	Apple: 8
});

/*<EndType Name="System.Windows.Input.ModifierKeys" />*/

/*<BeginType Name="System.Windows.Input.Key" />*/

$.ig.util.defEnum('Key', false, false, {
	None: 0,
	Back: 1,
	Tab: 2,
	Enter: 3,
	Shift: 4,
	Ctrl: 5,
	Alt: 6,
	CapsLock: 7,
	Escape: 8,
	Space: 9,
	PageUp: 10,
	PageDown: 11,
	End: 12,
	Home: 13,
	Left: 14,
	Up: 15,
	Right: 16,
	Down: 17,
	Insert: 18,
	"Delete:del": 19,
	D0: 20,
	D1: 21,
	D2: 22,
	D3: 23,
	D4: 24,
	D5: 25,
	D6: 26,
	D7: 27,
	D8: 28,
	D9: 29,
	A: 30,
	B: 31,
	C: 32,
	D: 33,
	E: 34,
	F: 35,
	G: 36,
	H: 37,
	I: 38,
	J: 39,
	K: 40,
	L: 41,
	M: 42,
	N: 43,
	O: 44,
	P: 45,
	Q: 46,
	R: 47,
	S: 48,
	T: 49,
	U: 50,
	V: 51,
	W: 52,
	X: 53,
	Y: 54,
	Z: 55,
	F1: 56,
	F2: 57,
	F3: 58,
	F4: 59,
	F5: 60,
	F6: 61,
	F7: 62,
	F8: 63,
	F9: 64,
	F10: 65,
	F11: 66,
	F12: 67,
	NumPad0: 68,
	NumPad1: 69,
	NumPad2: 70,
	NumPad3: 71,
	NumPad4: 72,
	NumPad5: 73,
	NumPad6: 74,
	NumPad7: 75,
	NumPad8: 76,
	NumPad9: 77,
	Multiply: 78,
	Add: 79,
	Subtract: 80,
	Decimal: 81,
	Divide: 82,
	OemSemicolon: 83,
	OemQuestion: 84,
	OemPipe: 85,
	OemTilde: 86,
	Unknown: 255
});

/*<EndType Name="System.Windows.Input.Key" />*/

/*<BeginType Name="System.Windows.Media.Stretch" />*/

$.ig.util.defEnum('Stretch', false, false, {
	None: 0,
	Fill: 1,
	Uniform: 2,
	UniformToFill: 3
});

/*<EndType Name="System.Windows.Media.Stretch" />*/

/*<BeginType Name="System.Windows.Media.PenLineCap" />*/

$.ig.util.defEnum('PenLineCap', false, false, {
	Flat: 0,
	Square: 1,
	Round: 2,
	Triangle: 3
});

/*<EndType Name="System.Windows.Media.PenLineCap" />*/

/*<BeginType Name="System.Windows.Media.SweepDirection" />*/

$.ig.util.defEnum('SweepDirection', false, false, {
	Counterclockwise: 0,
	Clockwise: 1
});

/*<EndType Name="System.Windows.Media.SweepDirection" />*/

/*<BeginType Name="System.Windows.Media.PathSegmentType" />*/

$.ig.util.defEnum('PathSegmentType', false, false, {
	Line: 0,
	Bezier: 1,
	PolyBezier: 2,
	PolyLine: 3,
	Arc: 4
});

/*<EndType Name="System.Windows.Media.PathSegmentType" />*/

/*<BeginType Name="System.Windows.Media.GeometryType" />*/

$.ig.util.defEnum('GeometryType', false, false, {
	Group: 0,
	Line: 1,
	Rectangle: 2,
	Ellipse: 3,
	Path: 4
});

/*<EndType Name="System.Windows.Media.GeometryType" />*/

/*<BeginType Name="System.Windows.Media.FillRule" />*/

$.ig.util.defEnum('FillRule', false, false, {
	EvenOdd: 0,
	Nonzero: 1
});

/*<EndType Name="System.Windows.Media.FillRule" />*/

/*<BeginType Name="System.Windows.Visibility" />*/

$.ig.util.defEnum('Visibility', false, false, {
	Visible: 0,
	Collapsed: 1
});

/*<EndType Name="System.Windows.Visibility" />*/

/*<BeginType Name="System.Windows.VerticalAlignment" />*/

$.ig.util.defEnum('VerticalAlignment', false, false, {
	Top: 0,
	Center: 1,
	Bottom: 2,
	Stretch: 3
});

/*<EndType Name="System.Windows.VerticalAlignment" />*/

/*<BeginType Name="System.Windows.HorizontalAlignment" />*/

$.ig.util.defEnum('HorizontalAlignment', false, false, {
	Left: 0,
	Center: 1,
	Right: 2,
	Stretch: 3
});

/*<EndType Name="System.Windows.HorizontalAlignment" />*/

/*<BeginType Name="System.APIFactory" />*/

$.ig.util.defType('APIFactory', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Windows.Point System.APIFactory::CreatePoint(System.Double, System.Double)" />*/
	createPoint: function (x, y) {
		return { __x: x, __y: y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName };
	}
	/*<EndMethod Name="System.Windows.Point System.APIFactory::CreatePoint(System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Windows.Rect System.APIFactory::CreateRect(System.Double, System.Double, System.Double, System.Double)" />*/
	createRect: function (left, top, width, height) {
		return new $.ig.Rect(0, left, top, width, height);
	}
	/*<EndMethod Name="System.Windows.Rect System.APIFactory::CreateRect(System.Double, System.Double, System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Windows.Size System.APIFactory::CreateSize(System.Double, System.Double)" />*/
	createSize: function (width, height) {
		return new $.ig.Size(1, width, height);
	}
	/*<EndMethod Name="System.Windows.Size System.APIFactory::CreateSize(System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Windows.Media.Color System.APIFactory::CreateColor(System.String)" />*/
	createColor: function (value) {
		var ret = new $.ig.Color();
		ret.colorString(value);
		return ret;
	}
	/*<EndMethod Name="System.Windows.Media.Color System.APIFactory::CreateColor(System.String)" />*/
	,
	$type: new $.ig.Type('APIFactory', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.APIFactory" />*/

/*<BeginType Name="System.Windows.IDataObject" />*/

$.ig.util.defType('IDataObject', 'Object', {
	$type: new $.ig.Type('IDataObject', null)
}, true);

/*<EndType Name="System.Windows.IDataObject" />*/

/*<BeginType Name="System.Windows.Clipboard" />*/

$.ig.util.defType('Clipboard', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Windows.IDataObject System.Windows.Clipboard::GetDataObject()" />*/
	getDataObject: function () {
		return $.ig.Clipboard.prototype.__dataObject;
	}
	/*<EndMethod Name="System.Windows.IDataObject System.Windows.Clipboard::GetDataObject()" />*/
	,
	/*<BeginMethod Name="System.Void System.Windows.Clipboard::SetDataObject(System.Windows.IDataObject, System.Boolean)" />*/
	setDataObject: function (data, copy) {
		$.ig.Clipboard.prototype.__dataObject = data;
	}
	/*<EndMethod Name="System.Void System.Windows.Clipboard::SetDataObject(System.Windows.IDataObject, System.Boolean)" />*/
	,
	$type: new $.ig.Type('Clipboard', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.Windows.Clipboard" />*/

/*<BeginType Name="System.Windows.DependencyObject" />*/

$.ig.util.defType('DependencyObject', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
		this._localValues = new $.ig.Dictionary(0);
		this._bindings = new $.ig.Dictionary(0);
	},
	_localValues: null,
	_bindings: null,
	/*<BeginMethod Name="System.Object System.Windows.DependencyObject::GetValue(System.Windows.DependencyProperty)" />*/
	getValue: function (dp) {
		if (this._localValues.containsKey(dp.name())) {
			return this._localValues.item(dp.name());
		}
		return dp.propertyMetadata().defaultValue();
	}
	/*<EndMethod Name="System.Object System.Windows.DependencyObject::GetValue(System.Windows.DependencyProperty)" />*/
	,
	/*<BeginMethod Name="System.Void System.Windows.DependencyObject::SetValue(System.Windows.DependencyProperty, System.Object)" />*/
	setValue: function (dp_, value) {
		if (dp_.hasCallback()) {
			var oldValue_ = null;
			var old = this._localValues.proxy[dp_.__name]; if (typeof old != 'undefined') { oldValue_ = old };
			this._localValues.item(dp_.__name, value);
			dp_.propertyMetadata().propertyChangedCallback()(this, new $.ig.DependencyPropertyChangedEventArgs(dp_, value, oldValue_));
		} else {
			this._localValues.item(dp_.__name, value);
		}
	}
	/*<EndMethod Name="System.Void System.Windows.DependencyObject::SetValue(System.Windows.DependencyProperty, System.Object)" />*/
	,
	/*<BeginMethod Name="System.Void System.Windows.DependencyObject::ClearValue(System.Windows.DependencyProperty)" />*/
	clearValue: function (dp) {
		this._localValues.remove(dp.__name);
	}
	/*<EndMethod Name="System.Void System.Windows.DependencyObject::ClearValue(System.Windows.DependencyProperty)" />*/
	,
	/*<BeginMethod Name="System.Object System.Windows.DependencyObject::ReadLocalValue(System.Windows.DependencyProperty)" />*/
	readLocalValue: function (dp) {
		if (this._localValues.containsKey(dp.__name)) {
			return this._localValues.item(dp.name());
		}
		return $.ig.DependencyProperty.prototype.unsetValue;
	}
	/*<EndMethod Name="System.Object System.Windows.DependencyObject::ReadLocalValue(System.Windows.DependencyProperty)" />*/
	,
	/*<BeginMethod Name="System.Void System.Windows.DependencyObject::SetBinding(System.Windows.DependencyProperty, System.Windows.Data.Binding)" />*/
	setBinding: function (dp, binding) {
		if (dp == null) {
			return;
		}
		this._bindings.item(dp.name(), binding);
	}
	/*<EndMethod Name="System.Void System.Windows.DependencyObject::SetBinding(System.Windows.DependencyProperty, System.Windows.Data.Binding)" />*/
	,
	$type: new $.ig.Type('DependencyObject', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.Windows.DependencyObject" />*/

/*<BeginType Name="System.Windows.UIElement" />*/

$.ig.util.defType('UIElement', 'DependencyObject', {
	init: function () {
		$.ig.DependencyObject.prototype.init.call(this);
	},
	_renderTransform: null,
	/*<BeginProperty Name="System.Windows.Media.Transform System.Windows.UIElement::RenderTransform()" />*/
	renderTransform: function (value) {
		if (arguments.length === 1) {
			this._renderTransform = value;
			return value;
		} else {
			return this._renderTransform;
		}
	}
	/*<EndProperty Name="System.Windows.Media.Transform System.Windows.UIElement::RenderTransform()" />*/
	,
	$type: new $.ig.Type('UIElement', $.ig.DependencyObject.prototype.$type)
}, true);

/*<EndType Name="System.Windows.UIElement" />*/

/*<BeginType Name="System.Windows.UIElementCollection" />*/

$.ig.util.defType('UIElementCollection', 'ObservableCollection$1', {
	__owner: null,
	init: function (owner) {
		$.ig.ObservableCollection$1.prototype.init.call(this, $.ig.UIElement.prototype.$type, 0);
		this.__owner = owner;
	},
	/*<BeginMethod Name="System.Void System.Windows.UIElementCollection::OnCollectionChanged(System.Collections.Specialized.NotifyCollectionChangedEventArgs)" />*/
	onCollectionChanged: function (args) {
		$.ig.ObservableCollection$1.prototype.onCollectionChanged.call(this, args);
		if (args.oldItems() != null) {
			var en = args.oldItems().getEnumerator();
			while (en.moveNext()) {
				var item = en.current();
				(item).parent(null);
			}
		}
		if (args.newItems() != null) {
			var en1 = args.newItems().getEnumerator();
			while (en1.moveNext()) {
				var item1 = en1.current();
				(item1).parent(this.__owner);
			}
		}
	}
	/*<EndMethod Name="System.Void System.Windows.UIElementCollection::OnCollectionChanged(System.Collections.Specialized.NotifyCollectionChangedEventArgs)" />*/
	,
	/*<BeginMethod Name="System.Void System.Windows.UIElementCollection::ClearItems()" />*/
	clearItems: function () {
		var en = this.getEnumerator();
		while (en.moveNext()) {
			var item = en.current();
			(item).parent(null);
		}
		$.ig.ObservableCollection$1.prototype.clearItems.call(this);
	}
	/*<EndMethod Name="System.Void System.Windows.UIElementCollection::ClearItems()" />*/
	,
	$type: new $.ig.Type('UIElementCollection', $.ig.ObservableCollection$1.prototype.$type.specialize($.ig.UIElement.prototype.$type))
}, true);

/*<EndType Name="System.Windows.UIElementCollection" />*/

/*<BeginType Name="System.Windows.FrameworkElement" />*/

$.ig.util.defType('FrameworkElement', 'UIElement', {
	init: function () {
		this.__opacity = 1;
		$.ig.UIElement.prototype.init.call(this);
		this.__opacity = 1;
		this.canvasZIndex(0);
		this.__visibility = $.ig.Visibility.prototype.visible;
		this.width(NaN);
		this.height(NaN);
	},
	_name: null,
	/*<BeginProperty Name="System.String System.Windows.FrameworkElement::Name()" />*/
	name: function (value) {
		if (arguments.length === 1) {
			this._name = value;
			return value;
		} else {
			return this._name;
		}
	}
	/*<EndProperty Name="System.String System.Windows.FrameworkElement::Name()" />*/
	,
	_actualWidth: 0,
	/*<BeginProperty Name="System.Double System.Windows.FrameworkElement::ActualWidth()" />*/
	actualWidth: function (value) {
		if (arguments.length === 1) {
			this._actualWidth = value;
			return value;
		} else {
			return this._actualWidth;
		}
	}
	/*<EndProperty Name="System.Double System.Windows.FrameworkElement::ActualWidth()" />*/
	,
	_actualHeight: 0,
	/*<BeginProperty Name="System.Double System.Windows.FrameworkElement::ActualHeight()" />*/
	actualHeight: function (value) {
		if (arguments.length === 1) {
			this._actualHeight = value;
			return value;
		} else {
			return this._actualHeight;
		}
	}
	/*<EndProperty Name="System.Double System.Windows.FrameworkElement::ActualHeight()" />*/
	,
	__visibility: 0,
	/*<BeginProperty Name="System.Windows.Visibility System.Windows.FrameworkElement::Visibility()" />*/
	visibility: function (value) {
		if (arguments.length === 1) {
			if (this.__visibility != value) {
				var oldValue = this.__visibility;
				this.__visibility = value;
				this.onVisibilityChanged(oldValue, this.__visibility);
			}
			return value;
		} else {
			return this.__visibility;
		}
	}
	/*<EndProperty Name="System.Windows.Visibility System.Windows.FrameworkElement::Visibility()" />*/
	,
	/*<BeginMethod Name="System.Void System.Windows.FrameworkElement::OnVisibilityChanged(System.Windows.Visibility, System.Windows.Visibility)" />*/
	onVisibilityChanged: function (oldValue, newValue) {
	}
	/*<EndMethod Name="System.Void System.Windows.FrameworkElement::OnVisibilityChanged(System.Windows.Visibility, System.Windows.Visibility)" />*/
	,
	_width: 0,
	/*<BeginProperty Name="System.Double System.Windows.FrameworkElement::Width()" />*/
	width: function (value) {
		if (arguments.length === 1) {
			this._width = value;
			return value;
		} else {
			return this._width;
		}
	}
	/*<EndProperty Name="System.Double System.Windows.FrameworkElement::Width()" />*/
	,
	_height: 0,
	/*<BeginProperty Name="System.Double System.Windows.FrameworkElement::Height()" />*/
	height: function (value) {
		if (arguments.length === 1) {
			this._height = value;
			return value;
		} else {
			return this._height;
		}
	}
	/*<EndProperty Name="System.Double System.Windows.FrameworkElement::Height()" />*/
	,
	_canvasTop: 0,
	/*<BeginProperty Name="System.Double System.Windows.FrameworkElement::CanvasTop()" />*/
	canvasTop: function (value) {
		if (arguments.length === 1) {
			this._canvasTop = value;
			return value;
		} else {
			return this._canvasTop;
		}
	}
	/*<EndProperty Name="System.Double System.Windows.FrameworkElement::CanvasTop()" />*/
	,
	_canvasLeft: 0,
	/*<BeginProperty Name="System.Double System.Windows.FrameworkElement::CanvasLeft()" />*/
	canvasLeft: function (value) {
		if (arguments.length === 1) {
			this._canvasLeft = value;
			return value;
		} else {
			return this._canvasLeft;
		}
	}
	/*<EndProperty Name="System.Double System.Windows.FrameworkElement::CanvasLeft()" />*/
	,
	_canvasZIndex: 0,
	/*<BeginProperty Name="System.Int32 System.Windows.FrameworkElement::CanvasZIndex()" />*/
	canvasZIndex: function (value) {
		if (arguments.length === 1) {
			this._canvasZIndex = value;
			return value;
		} else {
			return this._canvasZIndex;
		}
	}
	/*<EndProperty Name="System.Int32 System.Windows.FrameworkElement::CanvasZIndex()" />*/
	,
	_parent: null,
	/*<BeginProperty Name="System.Windows.FrameworkElement System.Windows.FrameworkElement::Parent()" />*/
	parent: function (value) {
		if (arguments.length === 1) {
			this._parent = value;
			return value;
		} else {
			return this._parent;
		}
	}
	/*<EndProperty Name="System.Windows.FrameworkElement System.Windows.FrameworkElement::Parent()" />*/
	,
	_dataContext: null,
	/*<BeginProperty Name="System.Object System.Windows.FrameworkElement::DataContext()" />*/
	dataContext: function (value) {
		if (arguments.length === 1) {
			this._dataContext = value;
			return value;
		} else {
			return this._dataContext;
		}
	}
	/*<EndProperty Name="System.Object System.Windows.FrameworkElement::DataContext()" />*/
	,
	__opacity: 0,
	/*<BeginProperty Name="System.Double System.Windows.FrameworkElement::Opacity()" />*/
	opacity: function (value) {
		if (arguments.length === 1) {
			if (this.__opacity != value) {
				this.__opacity = value;
				this.onOpacityChanged();
			}
			return value;
		} else {
			return this.__opacity;
		}
	}
	/*<EndProperty Name="System.Double System.Windows.FrameworkElement::Opacity()" />*/
	,
	/*<BeginMethod Name="System.Void System.Windows.FrameworkElement::OnOpacityChanged()" />*/
	onOpacityChanged: function () {
	}
	/*<EndMethod Name="System.Void System.Windows.FrameworkElement::OnOpacityChanged()" />*/
	,
	_style: null,
	/*<BeginProperty Name="System.Windows.Style System.Windows.FrameworkElement::Style()" />*/
	style: function (value) {
		if (arguments.length === 1) {
			this._style = value;
			return value;
		} else {
			return this._style;
		}
	}
	/*<EndProperty Name="System.Windows.Style System.Windows.FrameworkElement::Style()" />*/
	,
	$type: new $.ig.Type('FrameworkElement', $.ig.UIElement.prototype.$type)
}, true);

/*<EndType Name="System.Windows.FrameworkElement" />*/

/*<BeginType Name="System.Windows.Control" />*/

$.ig.util.defType('Control', 'FrameworkElement', {
	init: function () {
		$.ig.FrameworkElement.prototype.init.call(this);
	},
	_defaultStyleKey: null,
	/*<BeginProperty Name="System.Type System.Windows.Control::DefaultStyleKey()" />*/
	defaultStyleKey: function (value) {
		if (arguments.length === 1) {
			this._defaultStyleKey = value;
			return value;
		} else {
			return this._defaultStyleKey;
		}
	}
	/*<EndProperty Name="System.Type System.Windows.Control::DefaultStyleKey()" />*/
	,
	_padding: null,
	/*<BeginProperty Name="System.Windows.Thickness System.Windows.Control::Padding()" />*/
	padding: function (value) {
		if (arguments.length === 1) {
			this._padding = value;
			return value;
		} else {
			return this._padding;
		}
	}
	/*<EndProperty Name="System.Windows.Thickness System.Windows.Control::Padding()" />*/
	,
	/*<BeginMethod Name="System.Void System.Windows.Control::OnApplyTemplate()" />*/
	onApplyTemplate: function () {
	}
	/*<EndMethod Name="System.Void System.Windows.Control::OnApplyTemplate()" />*/
	,
	_horizontalContentAlignment: 0,
	/*<BeginProperty Name="System.Windows.HorizontalAlignment System.Windows.Control::HorizontalContentAlignment()" />*/
	horizontalContentAlignment: function (value) {
		if (arguments.length === 1) {
			this._horizontalContentAlignment = value;
			return value;
		} else {
			return this._horizontalContentAlignment;
		}
	}
	/*<EndProperty Name="System.Windows.HorizontalAlignment System.Windows.Control::HorizontalContentAlignment()" />*/
	,
	_verticalContentAlignment: 0,
	/*<BeginProperty Name="System.Windows.VerticalAlignment System.Windows.Control::VerticalContentAlignment()" />*/
	verticalContentAlignment: function (value) {
		if (arguments.length === 1) {
			this._verticalContentAlignment = value;
			return value;
		} else {
			return this._verticalContentAlignment;
		}
	}
	/*<EndProperty Name="System.Windows.VerticalAlignment System.Windows.Control::VerticalContentAlignment()" />*/
	,
	$type: new $.ig.Type('Control', $.ig.FrameworkElement.prototype.$type)
}, true);

/*<EndType Name="System.Windows.Control" />*/

/*<BeginType Name="System.Windows.ContentControl" />*/

$.ig.util.defType('ContentControl', 'Control', {
	init: function () {
		$.ig.Control.prototype.init.call(this);
	},
	_content: null,
	/*<BeginProperty Name="System.Object System.Windows.ContentControl::Content()" />*/
	content: function (value) {
		if (arguments.length === 1) {
			this._content = value;
			return value;
		} else {
			return this._content;
		}
	}
	/*<EndProperty Name="System.Object System.Windows.ContentControl::Content()" />*/
	,
	_contentTemplate: null,
	/*<BeginProperty Name="System.Windows.DataTemplate System.Windows.ContentControl::ContentTemplate()" />*/
	contentTemplate: function (value) {
		if (arguments.length === 1) {
			this._contentTemplate = value;
			return value;
		} else {
			return this._contentTemplate;
		}
	}
	/*<EndProperty Name="System.Windows.DataTemplate System.Windows.ContentControl::ContentTemplate()" />*/
	,
	$type: new $.ig.Type('ContentControl', $.ig.Control.prototype.$type)
}, true);

/*<EndType Name="System.Windows.ContentControl" />*/

/*<BeginType Name="System.Windows.CornerRadius" />*/

$.ig.util.defType('CornerRadius', 'Object', {
	init: function (initNumber, uniformRadius) {
		if (initNumber > 0) {
			switch (initNumber) {
				case 1:
					this.init1.apply(this, arguments);
					break;
			}
			return;
		}
		$.ig.Object.prototype.init.call(this);
		this.bottomLeft(this.bottomRight(this.topLeft(this.topRight(uniformRadius))));
	},
	init1: function (initNumber, topLeft, topRight, bottomRight, bottomLeft) {
		$.ig.Object.prototype.init.call(this);
		this.topLeft(topLeft);
		this.topRight(topRight);
		this.bottomRight(bottomRight);
		this.bottomLeft(bottomLeft);
	},
	_bottomRight: 0,
	/*<BeginProperty Name="System.Double System.Windows.CornerRadius::BottomRight()" />*/
	bottomRight: function (value) {
		if (arguments.length === 1) {
			this._bottomRight = value;
			return value;
		} else {
			return this._bottomRight;
		}
	}
	/*<EndProperty Name="System.Double System.Windows.CornerRadius::BottomRight()" />*/
	,
	_bottomLeft: 0,
	/*<BeginProperty Name="System.Double System.Windows.CornerRadius::BottomLeft()" />*/
	bottomLeft: function (value) {
		if (arguments.length === 1) {
			this._bottomLeft = value;
			return value;
		} else {
			return this._bottomLeft;
		}
	}
	/*<EndProperty Name="System.Double System.Windows.CornerRadius::BottomLeft()" />*/
	,
	_topLeft: 0,
	/*<BeginProperty Name="System.Double System.Windows.CornerRadius::TopLeft()" />*/
	topLeft: function (value) {
		if (arguments.length === 1) {
			this._topLeft = value;
			return value;
		} else {
			return this._topLeft;
		}
	}
	/*<EndProperty Name="System.Double System.Windows.CornerRadius::TopLeft()" />*/
	,
	_topRight: 0,
	/*<BeginProperty Name="System.Double System.Windows.CornerRadius::TopRight()" />*/
	topRight: function (value) {
		if (arguments.length === 1) {
			this._topRight = value;
			return value;
		} else {
			return this._topRight;
		}
	}
	/*<EndProperty Name="System.Double System.Windows.CornerRadius::TopRight()" />*/
	,
	$type: new $.ig.Type('CornerRadius', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.Windows.CornerRadius" />*/

/*<BeginType Name="System.Windows.DataFormats" />*/

$.ig.util.defType('DataFormats', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	$type: new $.ig.Type('DataFormats', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.Windows.DataFormats" />*/

/*<BeginType Name="System.Windows.DataObject" />*/

$.ig.util.defType('DataObject', 'Object', {
	__formats: null,
	init: function () {
		$.ig.Object.prototype.init.call(this);
		this.__formats = new $.ig.Dictionary$2(String, $.ig.Object.prototype.$type, 0);
	},
	/*<BeginMethod Name="System.Object System.Windows.DataObject::GetData(System.String)" />*/
	getData: function (format) {
		var $self = this;
		var d;
		if ((function () { var $ret = $self.__formats.tryGetValue(format, d); d = $ret.p1; return $ret.ret; }())) {
			return d;
		}
		return null;
	}
	/*<EndMethod Name="System.Object System.Windows.DataObject::GetData(System.String)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Windows.DataObject::GetDataPresent(System.String)" />*/
	getDataPresent: function (format) {
		return this.__formats.containsKey(format);
	}
	/*<EndMethod Name="System.Boolean System.Windows.DataObject::GetDataPresent(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.Windows.DataObject::SetData(System.String, System.Object)" />*/
	setData: function (format, data) {
		this.__formats.item(format, data);
	}
	/*<EndMethod Name="System.Void System.Windows.DataObject::SetData(System.String, System.Object)" />*/
	,
	$type: new $.ig.Type('DataObject', $.ig.Object.prototype.$type, [$.ig.IDataObject.prototype.$type])
}, true);

/*<EndType Name="System.Windows.DataObject" />*/

/*<BeginType Name="System.Windows.DataTemplate" />*/

$.ig.util.defType('DataTemplate', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	_render: null,
	/*<BeginProperty Name="System.Windows.DataTemplateRenderHandler System.Windows.DataTemplate::Render()" />*/
	render: function (value) {
		if (arguments.length === 1) {
			this._render = value;
			return value;
		} else {
			return this._render;
		}
	}
	/*<EndProperty Name="System.Windows.DataTemplateRenderHandler System.Windows.DataTemplate::Render()" />*/
	,
	_measure: null,
	/*<BeginProperty Name="System.Windows.DataTemplateMeasureHandler System.Windows.DataTemplate::Measure()" />*/
	measure: function (value) {
		if (arguments.length === 1) {
			this._measure = value;
			return value;
		} else {
			return this._measure;
		}
	}
	/*<EndProperty Name="System.Windows.DataTemplateMeasureHandler System.Windows.DataTemplate::Measure()" />*/
	,
	_passStarting: null,
	/*<BeginProperty Name="System.Windows.DataTemplatePassHandler System.Windows.DataTemplate::PassStarting()" />*/
	passStarting: function (value) {
		if (arguments.length === 1) {
			this._passStarting = value;
			return value;
		} else {
			return this._passStarting;
		}
	}
	/*<EndProperty Name="System.Windows.DataTemplatePassHandler System.Windows.DataTemplate::PassStarting()" />*/
	,
	_passCompleted: null,
	/*<BeginProperty Name="System.Windows.DataTemplatePassHandler System.Windows.DataTemplate::PassCompleted()" />*/
	passCompleted: function (value) {
		if (arguments.length === 1) {
			this._passCompleted = value;
			return value;
		} else {
			return this._passCompleted;
		}
	}
	/*<EndProperty Name="System.Windows.DataTemplatePassHandler System.Windows.DataTemplate::PassCompleted()" />*/
	,
	$type: new $.ig.Type('DataTemplate', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.Windows.DataTemplate" />*/

/*<BeginType Name="System.Windows.DataTemplatePassInfo" />*/

$.ig.util.defType('DataTemplatePassInfo', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	renderContext: null,
	context: null,
	viewportTop: 0,
	viewportLeft: 0,
	viewportWidth: 0,
	viewportHeight: 0,
	isHitTestRender: false,
	passID: null,
	$type: new $.ig.Type('DataTemplatePassInfo', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.Windows.DataTemplatePassInfo" />*/

/*<BeginType Name="System.Windows.DataTemplateMeasureInfo" />*/

$.ig.util.defType('DataTemplateMeasureInfo', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	renderContext: null,
	context: null,
	width: 0,
	height: 0,
	isConstant: false,
	data: null,
	passInfo: null,
	renderOffsetX: 0,
	renderOffsetY: 0,
	$type: new $.ig.Type('DataTemplateMeasureInfo', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.Windows.DataTemplateMeasureInfo" />*/

/*<BeginType Name="System.Windows.DataTemplateRenderInfo" />*/

$.ig.util.defType('DataTemplateRenderInfo', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	renderContext: null,
	context: null,
	xPosition: 0,
	yPosition: 0,
	availableWidth: 0,
	availableHeight: 0,
	data: null,
	isHitTestRender: false,
	passInfo: null,
	renderOffsetX: 0,
	renderOffsetY: 0,
	$type: new $.ig.Type('DataTemplateRenderInfo', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.Windows.DataTemplateRenderInfo" />*/

/*<BeginType Name="System.Windows.UnsetValue" />*/

$.ig.util.defType('UnsetValue', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	$type: new $.ig.Type('UnsetValue', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.Windows.UnsetValue" />*/

/*<BeginType Name="System.Windows.DependencyProperty" />*/

$.ig.util.defType('DependencyProperty', 'Object', {
	__name: null,
	__propertyType: null,
	__propertyMetadata: null,
	__hasCallback: false,
	/*<BeginProperty Name="System.Boolean System.Windows.DependencyProperty::HasCallback()" />*/
	hasCallback: function () {
		return this.__hasCallback;
	}
	/*<EndProperty Name="System.Boolean System.Windows.DependencyProperty::HasCallback()" />*/
	,
	init: function (name, propertyType, propertyMetadata) {
		this.__hasCallback = false;
		$.ig.Object.prototype.init.call(this);
		this.__name = name;
		this.__propertyType = propertyType;
		this.__propertyMetadata = propertyMetadata;
		if (this.__propertyMetadata != null && this.__propertyMetadata.propertyChangedCallback() != null) {
			this.__hasCallback = true;
		} else {
			this.__hasCallback = false;
		}
	},
	/*<BeginProperty Name="System.Windows.PropertyMetadata System.Windows.DependencyProperty::PropertyMetadata()" />*/
	propertyMetadata: function () {
		return this.__propertyMetadata;
	}
	/*<EndProperty Name="System.Windows.PropertyMetadata System.Windows.DependencyProperty::PropertyMetadata()" />*/
	,
	/*<BeginProperty Name="System.Type System.Windows.DependencyProperty::PropertyType()" />*/
	propertyType: function () {
		return this.__propertyType;
	}
	/*<EndProperty Name="System.Type System.Windows.DependencyProperty::PropertyType()" />*/
	,
	/*<BeginProperty Name="System.String System.Windows.DependencyProperty::Name()" />*/
	name: function () {
		return this.__name;
	}
	/*<EndProperty Name="System.String System.Windows.DependencyProperty::Name()" />*/
	,
	/*<BeginMethod Name="System.Windows.DependencyProperty System.Windows.DependencyProperty::Register(System.String, System.Type, System.Type, System.Windows.PropertyMetadata)" />*/
	register: function (name, propertyType, ownerType, propertyMetadata) {
		return $.ig.DependencyPropertiesCollection.prototype.instance().register(name, propertyType, ownerType, propertyMetadata);
	}
	/*<EndMethod Name="System.Windows.DependencyProperty System.Windows.DependencyProperty::Register(System.String, System.Type, System.Type, System.Windows.PropertyMetadata)" />*/
	,
	/*<BeginMethod Name="System.Windows.DependencyProperty System.Windows.DependencyProperty::QueryRegisteredProperty(System.String, System.Type)" />*/
	queryRegisteredProperty: function (name, ownerType) {
		if (ownerType == null) {
			return null;
		}
		var dp = $.ig.DependencyPropertiesCollection.prototype.instance().getProperty(ownerType.typeName() + name);
		if (dp != null) {
			return dp;
		}
		return $.ig.DependencyProperty.prototype.queryRegisteredProperty(name, ownerType.baseType);
	}
	/*<EndMethod Name="System.Windows.DependencyProperty System.Windows.DependencyProperty::QueryRegisteredProperty(System.String, System.Type)" />*/
	,
	$type: new $.ig.Type('DependencyProperty', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.Windows.DependencyProperty" />*/

/*<BeginType Name="System.Windows.DependencyPropertiesCollection" />*/

$.ig.util.defType('DependencyPropertiesCollection', 'Object', {
	__dependencyProperties: null,
	/*<BeginProperty Name="System.Windows.DependencyPropertiesCollection System.Windows.DependencyPropertiesCollection::Instance()" />*/
	instance: function () {
		if ($.ig.DependencyPropertiesCollection.prototype.__instance == null) {
			$.ig.DependencyPropertiesCollection.prototype.__instance = new $.ig.DependencyPropertiesCollection();
		}
		return $.ig.DependencyPropertiesCollection.prototype.__instance;
	}
	/*<EndProperty Name="System.Windows.DependencyPropertiesCollection System.Windows.DependencyPropertiesCollection::Instance()" />*/
	,
	init: function () {
		$.ig.Object.prototype.init.call(this);
		if (this.__dependencyProperties == null) {
			this.__dependencyProperties = new $.ig.Dictionary(0);
		}
	},
	/*<BeginMethod Name="System.Windows.DependencyProperty System.Windows.DependencyPropertiesCollection::GetProperty(System.String)" />*/
	getProperty: function (key) {
		return this.__dependencyProperties.item(key);
	}
	/*<EndMethod Name="System.Windows.DependencyProperty System.Windows.DependencyPropertiesCollection::GetProperty(System.String)" />*/
	,
	/*<BeginMethod Name="System.Windows.DependencyProperty System.Windows.DependencyPropertiesCollection::Register(System.String, System.Type, System.Type, System.Windows.PropertyMetadata)" />*/
	register: function (name, propertyType, ownerType, propertyMetadata) {
		var dependencyProperty = new $.ig.DependencyProperty(name, propertyType, propertyMetadata);
		this.__dependencyProperties.item(ownerType.typeName() + name, dependencyProperty);
		return dependencyProperty;
	}
	/*<EndMethod Name="System.Windows.DependencyProperty System.Windows.DependencyPropertiesCollection::Register(System.String, System.Type, System.Type, System.Windows.PropertyMetadata)" />*/
	,
	$type: new $.ig.Type('DependencyPropertiesCollection', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.Windows.DependencyPropertiesCollection" />*/

/*<BeginType Name="System.Windows.DependencyPropertyChangedEventArgs" />*/

$.ig.util.defType('DependencyPropertyChangedEventArgs', 'Object', {
	__newValue: null,
	__oldValue: null,
	init: function (dp, newValue, oldValue) {
		$.ig.Object.prototype.init.call(this);
		this.__newValue = newValue;
		this.__oldValue = oldValue;
		this.__property = dp;
	},
	__property: null,
	/*<BeginProperty Name="System.Windows.DependencyProperty System.Windows.DependencyPropertyChangedEventArgs::Property()" />*/
	property: function (value) {
		if (arguments.length === 1) {
			this.__property = value;
			return value;
		} else {
			return this.__property;
		}
	}
	/*<EndProperty Name="System.Windows.DependencyProperty System.Windows.DependencyPropertyChangedEventArgs::Property()" />*/
	,
	/*<BeginProperty Name="System.Object System.Windows.DependencyPropertyChangedEventArgs::NewValue()" />*/
	newValue: function () {
		return this.__newValue;
	}
	/*<EndProperty Name="System.Object System.Windows.DependencyPropertyChangedEventArgs::NewValue()" />*/
	,
	/*<BeginProperty Name="System.Object System.Windows.DependencyPropertyChangedEventArgs::OldValue()" />*/
	oldValue: function () {
		return this.__oldValue;
	}
	/*<EndProperty Name="System.Object System.Windows.DependencyPropertyChangedEventArgs::OldValue()" />*/
	,
	$type: new $.ig.Type('DependencyPropertyChangedEventArgs', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.Windows.DependencyPropertyChangedEventArgs" />*/

/*<BeginType Name="System.Windows.Point" />*/

$.ig.util.defType('Point', 'Object', {
	init: function (initNumber) {
		if (initNumber > 0) {
			switch (initNumber) {
				case 1:
					this.init1.apply(this, arguments);
					break;
			}
			return;
		}
		$.ig.Object.prototype.init.call(this);
		this.__x = 0;
		this.__y = 0;
	},
	/*<BeginProperty Name="System.Double System.Windows.Point::X()" />*/
	x: function (value) {
		if (arguments.length === 1) {
			this.__x = value;
			return value;
		} else {
			return this.__x;
		}
	}
	/*<EndProperty Name="System.Double System.Windows.Point::X()" />*/
	,
	/*<BeginProperty Name="System.Double System.Windows.Point::Y()" />*/
	y: function (value) {
		if (arguments.length === 1) {
			this.__y = value;
			return value;
		} else {
			return this.__y;
		}
	}
	/*<EndProperty Name="System.Double System.Windows.Point::Y()" />*/
	,
	__x: 0,
	__y: 0,
	init1: function (initNumber, x, y) {
		$.ig.Object.prototype.init.call(this);
		this.__x = x;
		this.__y = y;
	},
	/*<BeginMethod Name="System.Boolean System.Windows.Point::Equals(System.Object)" />*/
	equals: function (obj) {
		if (obj == null) {
			return $.ig.Object.prototype.equals.call(this, obj);
		}
		var other = obj;
		return other.__x == this.__x && other.__y == this.__y;
	}
	/*<EndMethod Name="System.Boolean System.Windows.Point::Equals(System.Object)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Windows.Point::L_op_Equality(System.Windows.Point, System.Windows.Point)" />*/
	l_op_Equality: function (a, b) {
		if (a == null) {
			return b == null;
		} else if (b == null) {
			return false;
		}
		return a.__x == b.__x && a.__y == b.__y;
	}
	/*<EndMethod Name="System.Boolean System.Windows.Point::L_op_Equality(System.Windows.Point, System.Windows.Point)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Windows.Point::L_op_Inequality(System.Windows.Point, System.Windows.Point)" />*/
	l_op_Inequality: function (a, b) {
		return !($.ig.Point.prototype.l_op_Equality(a, b));
	}
	/*<EndMethod Name="System.Boolean System.Windows.Point::L_op_Inequality(System.Windows.Point, System.Windows.Point)" />*/
	,
	$type: new $.ig.Type('Point', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.Windows.Point" />*/

/*<BeginType Name="System.Windows.PointCollection" />*/

$.ig.util.defType('PointCollection', 'List$1', {
	init: function (initNumber) {
		if (initNumber > 0) {
			switch (initNumber) {
				case 1:
					this.init1.apply(this, arguments);
					break;
			}
			return;
		}
		$.ig.List$1.prototype.init.call(this, $.ig.Point.prototype.$type, 0);
	},
	init1: function (initNumber, source_) {
		$.ig.List$1.prototype.init.call(this, $.ig.Point.prototype.$type, 0);
		this.__inner = source_.__inner;
	},
	$type: new $.ig.Type('PointCollection', $.ig.List$1.prototype.$type.specialize($.ig.Point.prototype.$type))
}, true);

/*<EndType Name="System.Windows.PointCollection" />*/

/*<BeginType Name="System.Windows.PropertyMetadata" />*/

$.ig.util.defType('PropertyMetadata', 'Object', {
	__defaultValue: null,
	/*<BeginProperty Name="System.Object System.Windows.PropertyMetadata::DefaultValue()" />*/
	defaultValue: function (value) {
		if (arguments.length === 1) {
			this.__defaultValue = value;
			return value;
		} else {
			return this.__defaultValue;
		}
	}
	/*<EndProperty Name="System.Object System.Windows.PropertyMetadata::DefaultValue()" />*/
	,
	__propertyChangedCallback: null,
	/*<BeginProperty Name="System.Windows.PropertyChangedCallback System.Windows.PropertyMetadata::PropertyChangedCallback()" />*/
	propertyChangedCallback: function (value) {
		if (arguments.length === 1) {
			this.__propertyChangedCallback = value;
			return value;
		} else {
			return this.__propertyChangedCallback;
		}
	}
	/*<EndProperty Name="System.Windows.PropertyChangedCallback System.Windows.PropertyMetadata::PropertyChangedCallback()" />*/
	,
	init: function (initNumber, defaultValue) {
		if (initNumber > 0) {
			switch (initNumber) {
				case 1:
					this.init1.apply(this, arguments);
					break;
				case 2:
					this.init2.apply(this, arguments);
					break;
			}
			return;
		}
		$.ig.Object.prototype.init.call(this);
		this.defaultValue(defaultValue);
		this.propertyChangedCallback(null);
	},
	init1: function (initNumber, propertyChangedCallback) {
		$.ig.Object.prototype.init.call(this);
		this.defaultValue(null);
		this.propertyChangedCallback(propertyChangedCallback);
	},
	init2: function (initNumber, defaultValue, propertyChangedCallback) {
		$.ig.Object.prototype.init.call(this);
		this.defaultValue(defaultValue);
		this.propertyChangedCallback(propertyChangedCallback);
	},
	$type: new $.ig.Type('PropertyMetadata', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.Windows.PropertyMetadata" />*/

/*<BeginType Name="System.Windows.PropertyPath" />*/

$.ig.util.defType('PropertyPath', 'Object', {
	__path: null,
	/*<BeginProperty Name="System.String System.Windows.PropertyPath::Path()" />*/
	path: function (value) {
		if (arguments.length === 1) {
			this.__path = value;
			return value;
		} else {
			return this.__path;
		}
	}
	/*<EndProperty Name="System.String System.Windows.PropertyPath::Path()" />*/
	,
	init: function (path) {
		$.ig.Object.prototype.init.call(this);
		this.path(path);
	},
	$type: new $.ig.Type('PropertyPath', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.Windows.PropertyPath" />*/

/*<BeginType Name="System.Windows.Rect" />*/

$.ig.util.defType('Rect', 'Object', {
	init: function (initNumber, left, top, width, height) {
		if (initNumber > 0) {
			switch (initNumber) {
				case 1:
					this.init1.apply(this, arguments);
					break;
				case 2:
					this.init2.apply(this, arguments);
					break;
				case 3:
					this.init3.apply(this, arguments);
					break;
				case 4:
					this.init4.apply(this, arguments);
					break;
			}
			return;
		}
		$.ig.Object.prototype.init.call(this);
		this.top(top);
		this.left(left);
		this.width(width);
		this.height(height);
	},
	init1: function (initNumber, left, top, size) {
		$.ig.Object.prototype.init.call(this);
		this.top(top);
		this.left(left);
		this.width(size.width());
		this.height(size.height());
	},
	init2: function (initNumber, point1, point2) {
		$.ig.Object.prototype.init.call(this);
		this.top(Math.min(point1.__y, point2.__y));
		this.left(Math.min(point1.__x, point2.__x));
		this.width(Math.max(Math.max(point1.__x, point2.__x) - this.left(), 0));
		this.height(Math.max(Math.max(point1.__y, point2.__y) - this.top(), 0));
	},
	init3: function (initNumber, point1, size) {
		$.ig.Object.prototype.init.call(this);
		this.top(point1.__y);
		this.left(point1.__x);
		this.width(size.width());
		this.height(size.height());
	},
	init4: function (initNumber) {
		$.ig.Object.prototype.init.call(this);
		this.top(0);
		this.left(0);
		this.width(0);
		this.height(0);
	},
	__x: 0,
	/*<BeginProperty Name="System.Double System.Windows.Rect::X()" />*/
	x: function (value) {
		if (arguments.length === 1) {
			this.__x = value;
			this.__left = this.__x;
			this.__right = this.__left + this.__width;
			return value;
		} else {
			return this.__x;
		}
	}
	/*<EndProperty Name="System.Double System.Windows.Rect::X()" />*/
	,
	__y: 0,
	/*<BeginProperty Name="System.Double System.Windows.Rect::Y()" />*/
	y: function (value) {
		if (arguments.length === 1) {
			this.__y = value;
			this.__top = this.__y;
			this.__bottom = this.__top + this.__height;
			return value;
		} else {
			return this.__y;
		}
	}
	/*<EndProperty Name="System.Double System.Windows.Rect::Y()" />*/
	,
	__width: 0,
	/*<BeginProperty Name="System.Double System.Windows.Rect::Width()" />*/
	width: function (value) {
		if (arguments.length === 1) {
			this.__width = value;
			this.__right = this.__left + this.__width;
			return value;
		} else {
			return this.__width;
		}
	}
	/*<EndProperty Name="System.Double System.Windows.Rect::Width()" />*/
	,
	__height: 0,
	/*<BeginProperty Name="System.Double System.Windows.Rect::Height()" />*/
	height: function (value) {
		if (arguments.length === 1) {
			this.__height = value;
			this.__bottom = this.__top + this.__height;
			return value;
		} else {
			return this.__height;
		}
	}
	/*<EndProperty Name="System.Double System.Windows.Rect::Height()" />*/
	,
	__top: 0,
	/*<BeginProperty Name="System.Double System.Windows.Rect::Top()" />*/
	top: function (value) {
		if (arguments.length === 1) {
			this.__top = value;
			this.y(this.__top);
			return value;
		} else {
			return this.__top;
		}
	}
	/*<EndProperty Name="System.Double System.Windows.Rect::Top()" />*/
	,
	__left: 0,
	/*<BeginProperty Name="System.Double System.Windows.Rect::Left()" />*/
	left: function (value) {
		if (arguments.length === 1) {
			this.__left = value;
			this.x(this.__left);
			return value;
		} else {
			return this.__left;
		}
	}
	/*<EndProperty Name="System.Double System.Windows.Rect::Left()" />*/
	,
	__right: 0,
	/*<BeginProperty Name="System.Double System.Windows.Rect::Right()" />*/
	right: function (value) {
		if (arguments.length === 1) {
			this.__right = value;
			this.__width = this.__right - this.__left;
			return value;
		} else {
			return this.__right;
		}
	}
	/*<EndProperty Name="System.Double System.Windows.Rect::Right()" />*/
	,
	__bottom: 0,
	/*<BeginProperty Name="System.Double System.Windows.Rect::Bottom()" />*/
	bottom: function (value) {
		if (arguments.length === 1) {
			this.__bottom = value;
			this.__height = this.__bottom - this.__top;
			return value;
		} else {
			return this.__bottom;
		}
	}
	/*<EndProperty Name="System.Double System.Windows.Rect::Bottom()" />*/
	,
	/*<BeginProperty Name="System.Boolean System.Windows.Rect::IsEmpty()" />*/
	isEmpty: function () {
		return this.__width < 0;
	}
	/*<EndProperty Name="System.Boolean System.Windows.Rect::IsEmpty()" />*/
	,
	/*<BeginProperty Name="System.Windows.Rect System.Windows.Rect::Empty()" />*/
	empty: function () {
		return new $.ig.Rect(0, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY);
	}
	/*<EndProperty Name="System.Windows.Rect System.Windows.Rect::Empty()" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Windows.Rect::Equals(System.Windows.Rect)" />*/
	equals1: function (value) {
		if ($.ig.Rect.prototype.l_op_Equality(value, null)) {
			return false;
		}
		if (value.x() == this.x() && value.y() == this.y() && value.width() == this.width() && value.height() == this.height()) {
			return true;
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean System.Windows.Rect::Equals(System.Windows.Rect)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Windows.Rect::ContainsInternal(System.Double, System.Double)" />*/
	containsInternal: function (x, y) {
		return x >= this.__x && x - this.__width <= this.__x && y >= this.__y && y - this.__height <= this.__y;
	}
	/*<EndMethod Name="System.Boolean System.Windows.Rect::ContainsInternal(System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Windows.Rect::Contains(System.Double, System.Double)" />*/
	containsLocation: function (x, y) {
		return !this.isEmpty() && this.containsInternal(x, y);
	}
	/*<EndMethod Name="System.Boolean System.Windows.Rect::Contains(System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Windows.Rect::Contains(System.Windows.Point)" />*/
	containsPoint: function (point) {
		return this.containsLocation(point.__x, point.__y);
	}
	/*<EndMethod Name="System.Boolean System.Windows.Rect::Contains(System.Windows.Point)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Windows.Rect::Contains(System.Windows.Rect)" />*/
	containsRect: function (rect) {
		return !this.isEmpty() && !rect.isEmpty() && (this.__x <= rect.__x && this.__y <= rect.__y && this.__x + this.__width >= rect.__x + rect.__width) && this.__y + this.__height >= rect.__y + rect.__height;
	}
	/*<EndMethod Name="System.Boolean System.Windows.Rect::Contains(System.Windows.Rect)" />*/
	,
	/*<BeginMethod Name="System.Void System.Windows.Rect::Inflate(System.Double, System.Double)" />*/
	inflate: function (width, height) {
		this.x(this.x() - width);
		this.y(this.y() - height);
		this.width(this.width() + (width * 2));
		this.height(this.height() + (height * 2));
		if (this.__width < 0 || this.__height < 0) {
			this.makeEmpty();
		}
	}
	/*<EndMethod Name="System.Void System.Windows.Rect::Inflate(System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Void System.Windows.Rect::MakeEmpty()" />*/
	makeEmpty: function () {
		this.top(Number.POSITIVE_INFINITY);
		this.left(Number.POSITIVE_INFINITY);
		this.width(Number.NEGATIVE_INFINITY);
		this.height(Number.NEGATIVE_INFINITY);
	}
	/*<EndMethod Name="System.Void System.Windows.Rect::MakeEmpty()" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Windows.Rect::IntersectsWith(System.Windows.Rect)" />*/
	intersectsWith: function (rect) {
		return !(rect.left() > this.right() || rect.right() < this.left() || rect.top() > this.bottom() || rect.bottom() < this.top());
	}
	/*<EndMethod Name="System.Boolean System.Windows.Rect::IntersectsWith(System.Windows.Rect)" />*/
	,
	/*<BeginMethod Name="System.Void System.Windows.Rect::Intersect(System.Windows.Rect)" />*/
	intersect: function (other) {
		if (!this.intersectsWith(other)) {
			this.makeEmpty();
		} else {
			var maxX = Math.max(this.x(), other.x());
			var maxY = Math.max(this.y(), other.y());
			var newWidth = Math.min(this.x() + this.width(), other.x() + other.width()) - maxX;
			var newHeight = Math.min(this.y() + this.height(), other.y() + other.height()) - maxY;
			if (newWidth < 0) {
				newWidth = 0;
			}
			if (newHeight < 0) {
				newHeight = 0;
			}
			this.__width = newWidth;
			this.__height = newHeight;
			this.__x = maxX;
			this.__y = maxY;
			this.__left = this.__x;
			this.__top = this.__y;
			this.__right = this.__left + this.__width;
			this.__bottom = this.__top + this.__height;
		}
	}
	/*<EndMethod Name="System.Void System.Windows.Rect::Intersect(System.Windows.Rect)" />*/
	,
	/*<BeginMethod Name="System.Void System.Windows.Rect::Union(System.Windows.Rect)" />*/
	union: function (other) {
		if (this.isEmpty()) {
			this.__x = other.x();
			this.__y = other.y();
			this.__width = other.width();
			this.__height = other.height();
			this.__left = this.__x;
			this.__top = this.__y;
			this.__right = this.__left + this.__width;
			this.__bottom = this.__top + this.__height;
			return;
		}
		if (!other.isEmpty()) {
			var minX = Math.min(this.x(), other.x());
			var minY = Math.min(this.y(), other.y());
			var newWidth = this.width();
			var newHeight = this.height();
			if (other.width() == Number.POSITIVE_INFINITY || this.width() == Number.POSITIVE_INFINITY) {
				newWidth = Number.POSITIVE_INFINITY;
			} else {
				var maxRight = Math.max(this.right(), other.right());
				newWidth = maxRight - minX;
			}
			if (other.height() == Number.POSITIVE_INFINITY || this.height() == Number.POSITIVE_INFINITY) {
				newHeight = Number.POSITIVE_INFINITY;
			} else {
				var maxBottom = Math.max(this.bottom(), other.bottom());
				newHeight = maxBottom - minY;
			}
			this.__x = minX;
			this.__y = minY;
			this.__width = newWidth;
			this.__height = newHeight;
			this.__left = this.__x;
			this.__top = this.__y;
			this.__right = this.__left + this.__width;
			this.__bottom = this.__top + this.__height;
		}
	}
	/*<EndMethod Name="System.Void System.Windows.Rect::Union(System.Windows.Rect)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Windows.Rect::Equals(System.Object)" />*/
	equals: function (obj) {
		if (obj == null) {
			return $.ig.Object.prototype.equals.call(this, obj);
		}
		var other = obj;
		return other.left() == this.left() && other.top() == this.top() && other.width() == this.width() && other.height() == this.height();
	}
	/*<EndMethod Name="System.Boolean System.Windows.Rect::Equals(System.Object)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Windows.Rect::GetHashCode()" />*/
	getHashCode: function () {
		return (this.__x) ^ (this.__y) ^ (this.__width) ^ (this.__height);
	}
	/*<EndMethod Name="System.Int32 System.Windows.Rect::GetHashCode()" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Windows.Rect::L_op_Equality(System.Windows.Rect, System.Windows.Rect)" />*/
	l_op_Equality: function (a, b) {
		if (a == null) {
			return b == null;
		} else if (b == null) {
			return false;
		}
		return a.__x == b.__x && a.__y == b.__y && a.__width == b.__width && a.__height == b.__height;
	}
	/*<EndMethod Name="System.Boolean System.Windows.Rect::L_op_Equality(System.Windows.Rect, System.Windows.Rect)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Windows.Rect::L_op_Inequality(System.Windows.Rect, System.Windows.Rect)" />*/
	l_op_Inequality: function (a, b) {
		if (a == null) {
			return b != null;
		} else if (b == null) {
			return true;
		}
		return a.__x != b.__x || a.__y != b.__y || a.__width != b.__width || a.__height != b.__height;
	}
	/*<EndMethod Name="System.Boolean System.Windows.Rect::L_op_Inequality(System.Windows.Rect, System.Windows.Rect)" />*/
	,
	$type: new $.ig.Type('Rect', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.Windows.Rect" />*/

/*<BeginType Name="System.Windows.Size" />*/

$.ig.util.defType('Size', 'ValueType', {
	init: function (initNumber) {
		if (initNumber > 0) {
			switch (initNumber) {
				case 1:
					this.init1.apply(this, arguments);
					break;
			}
			return;
		}
		$.ig.ValueType.prototype.init.call(this);
	},
	init1: function (initNumber, width, height) {
		$.ig.ValueType.prototype.init.call(this);
		this.__width = width;
		this.__height = height;
	},
	__width: 0,
	__height: 0,
	/*<BeginProperty Name="System.Double System.Windows.Size::Width()" />*/
	width: function (value) {
		if (arguments.length === 1) {
			this.__width = value;
			return value;
		} else {
			return this.__width;
		}
	}
	/*<EndProperty Name="System.Double System.Windows.Size::Width()" />*/
	,
	/*<BeginProperty Name="System.Double System.Windows.Size::Height()" />*/
	height: function (value) {
		if (arguments.length === 1) {
			this.__height = value;
			return value;
		} else {
			return this.__height;
		}
	}
	/*<EndProperty Name="System.Double System.Windows.Size::Height()" />*/
	,
	/*<BeginProperty Name="System.Boolean System.Windows.Size::IsEmpty()" />*/
	isEmpty: function () {
		return this.__width < 0;
	}
	/*<EndProperty Name="System.Boolean System.Windows.Size::IsEmpty()" />*/
	,
	/*<BeginProperty Name="System.Windows.Size System.Windows.Size::Empty()" />*/
	empty: function () {
		var s = new $.ig.Size(0);
		s.__width = Number.NEGATIVE_INFINITY;
		s.__height = Number.NEGATIVE_INFINITY;
		return s;
	}
	/*<EndProperty Name="System.Windows.Size System.Windows.Size::Empty()" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Windows.Size::L_op_Inequality(System.Windows.Size, System.Windows.Size)" />*/
	l_op_Inequality: function (left, right) {
		return !($.ig.Size.prototype.l_op_Equality(left, right));
	}
	/*<EndMethod Name="System.Boolean System.Windows.Size::L_op_Inequality(System.Windows.Size, System.Windows.Size)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Windows.Size::L_op_Inequality_Lifted(System.Nullable, System.Nullable)" />*/
	l_op_Inequality_Lifted: function (left, right) {
		if (!left.hasValue()) {
			return right.hasValue();
		} else if (!right.hasValue()) {
			return true;
		}
		return $.ig.Size.prototype.l_op_Inequality(left.value(), right.value());
	}
	/*<EndMethod Name="System.Boolean System.Windows.Size::L_op_Inequality_Lifted(System.Nullable, System.Nullable)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Windows.Size::L_op_Equality(System.Windows.Size, System.Windows.Size)" />*/
	l_op_Equality: function (left, right) {
		return left.__width == right.__width && left.__height == right.__height;
	}
	/*<EndMethod Name="System.Boolean System.Windows.Size::L_op_Equality(System.Windows.Size, System.Windows.Size)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Windows.Size::L_op_Equality_Lifted(System.Nullable, System.Nullable)" />*/
	l_op_Equality_Lifted: function (left, right) {
		if (!left.hasValue()) {
			return !right.hasValue();
		} else if (!right.hasValue()) {
			return false;
		}
		return $.ig.Size.prototype.l_op_Equality(left.value(), right.value());
	}
	/*<EndMethod Name="System.Boolean System.Windows.Size::L_op_Equality_Lifted(System.Nullable, System.Nullable)" />*/
	,
	$type: new $.ig.Type('Size', $.ig.ValueType.prototype.$type)
}, true);

/*<EndType Name="System.Windows.Size" />*/

/*<BeginType Name="System.Windows.Style" />*/

$.ig.util.defType('Style', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	$type: new $.ig.Type('Style', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.Windows.Style" />*/

/*<BeginType Name="System.Windows.StyleTypedPropertyAttribute" />*/

$.ig.util.defType('StyleTypedPropertyAttribute', 'Attribute', {
	init: function () {
		$.ig.Attribute.prototype.init.call(this);
	},
	_property: null,
	/*<BeginProperty Name="System.String System.Windows.StyleTypedPropertyAttribute::Property()" />*/
	property: function (value) {
		if (arguments.length === 1) {
			this._property = value;
			return value;
		} else {
			return this._property;
		}
	}
	/*<EndProperty Name="System.String System.Windows.StyleTypedPropertyAttribute::Property()" />*/
	,
	_styleTargetType: null,
	/*<BeginProperty Name="System.Type System.Windows.StyleTypedPropertyAttribute::StyleTargetType()" />*/
	styleTargetType: function (value) {
		if (arguments.length === 1) {
			this._styleTargetType = value;
			return value;
		} else {
			return this._styleTargetType;
		}
	}
	/*<EndProperty Name="System.Type System.Windows.StyleTypedPropertyAttribute::StyleTargetType()" />*/
	,
	$type: new $.ig.Type('StyleTypedPropertyAttribute', $.ig.Attribute.prototype.$type)
}, true);

/*<EndType Name="System.Windows.StyleTypedPropertyAttribute" />*/

/*<BeginType Name="System.Windows.TemplatePartAttribute" />*/

$.ig.util.defType('TemplatePartAttribute', 'Attribute', {
	init: function () {
		$.ig.Attribute.prototype.init.call(this);
	},
	_name: null,
	/*<BeginProperty Name="System.String System.Windows.TemplatePartAttribute::Name()" />*/
	name: function (value) {
		if (arguments.length === 1) {
			this._name = value;
			return value;
		} else {
			return this._name;
		}
	}
	/*<EndProperty Name="System.String System.Windows.TemplatePartAttribute::Name()" />*/
	,
	_type: null,
	/*<BeginProperty Name="System.Type System.Windows.TemplatePartAttribute::Type()" />*/
	type: function (value) {
		if (arguments.length === 1) {
			this._type = value;
			return value;
		} else {
			return this._type;
		}
	}
	/*<EndProperty Name="System.Type System.Windows.TemplatePartAttribute::Type()" />*/
	,
	$type: new $.ig.Type('TemplatePartAttribute', $.ig.Attribute.prototype.$type)
}, true);

/*<EndType Name="System.Windows.TemplatePartAttribute" />*/

/*<BeginType Name="System.Windows.TemplateVisualStateAttribute" />*/

$.ig.util.defType('TemplateVisualStateAttribute', 'Attribute', {
	init: function () {
		$.ig.Attribute.prototype.init.call(this);
	},
	_name: null,
	/*<BeginProperty Name="System.String System.Windows.TemplateVisualStateAttribute::Name()" />*/
	name: function (value) {
		if (arguments.length === 1) {
			this._name = value;
			return value;
		} else {
			return this._name;
		}
	}
	/*<EndProperty Name="System.String System.Windows.TemplateVisualStateAttribute::Name()" />*/
	,
	_groupName: null,
	/*<BeginProperty Name="System.String System.Windows.TemplateVisualStateAttribute::GroupName()" />*/
	groupName: function (value) {
		if (arguments.length === 1) {
			this._groupName = value;
			return value;
		} else {
			return this._groupName;
		}
	}
	/*<EndProperty Name="System.String System.Windows.TemplateVisualStateAttribute::GroupName()" />*/
	,
	$type: new $.ig.Type('TemplateVisualStateAttribute', $.ig.Attribute.prototype.$type)
}, true);

/*<EndType Name="System.Windows.TemplateVisualStateAttribute" />*/

/*<BeginType Name="System.Windows.Thickness" />*/

$.ig.util.defType('Thickness', 'Object', {
	init: function (initNumber, uniformLength) {
		if (initNumber > 0) {
			switch (initNumber) {
				case 1:
					this.init1.apply(this, arguments);
					break;
			}
			return;
		}
		$.ig.Object.prototype.init.call(this);
		this.bottom(this.left(this.right(this.top(uniformLength))));
	},
	init1: function (initNumber, left, top, right, bottom) {
		$.ig.Object.prototype.init.call(this);
		this.left(left);
		this.top(top);
		this.right(right);
		this.bottom(bottom);
	},
	_bottom: 0,
	/*<BeginProperty Name="System.Double System.Windows.Thickness::Bottom()" />*/
	bottom: function (value) {
		if (arguments.length === 1) {
			this._bottom = value;
			return value;
		} else {
			return this._bottom;
		}
	}
	/*<EndProperty Name="System.Double System.Windows.Thickness::Bottom()" />*/
	,
	_left: 0,
	/*<BeginProperty Name="System.Double System.Windows.Thickness::Left()" />*/
	left: function (value) {
		if (arguments.length === 1) {
			this._left = value;
			return value;
		} else {
			return this._left;
		}
	}
	/*<EndProperty Name="System.Double System.Windows.Thickness::Left()" />*/
	,
	_right: 0,
	/*<BeginProperty Name="System.Double System.Windows.Thickness::Right()" />*/
	right: function (value) {
		if (arguments.length === 1) {
			this._right = value;
			return value;
		} else {
			return this._right;
		}
	}
	/*<EndProperty Name="System.Double System.Windows.Thickness::Right()" />*/
	,
	_top: 0,
	/*<BeginProperty Name="System.Double System.Windows.Thickness::Top()" />*/
	top: function (value) {
		if (arguments.length === 1) {
			this._top = value;
			return value;
		} else {
			return this._top;
		}
	}
	/*<EndProperty Name="System.Double System.Windows.Thickness::Top()" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Windows.Thickness::Equals(System.Windows.Thickness)" />*/
	equals: function (thickness) {
		return this.bottom() == thickness.bottom() && this.top() == thickness.top() && this.left() == thickness.left() && this.right() == thickness.right();
	}
	/*<EndMethod Name="System.Boolean System.Windows.Thickness::Equals(System.Windows.Thickness)" />*/
	,
	/*<BeginMethod Name="System.String System.Windows.Thickness::ToString()" />*/
	toString: function () {
		var marginsInfo = this.left().toString() + "," + this.top().toString() + "," + this.right().toString() + "," + this.bottom().toString();
		return marginsInfo;
	}
	/*<EndMethod Name="System.String System.Windows.Thickness::ToString()" />*/
	,
	$type: new $.ig.Type('Thickness', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.Windows.Thickness" />*/

/*<BeginType Name="System.Windows.Shapes.Shape" />*/

$.ig.util.defType('Shape', 'FrameworkElement', {
	init: function () {
		this.__fill = null;
		this.__stroke = null;
		$.ig.FrameworkElement.prototype.init.call(this);
	},
	__fill: null,
	/*<BeginProperty Name="System.Windows.Media.Brush System.Windows.Shapes.Shape::Fill()" />*/
	fill: function (value) {
		if (arguments.length === 1) {
			this.__fill = value;
			return value;
		} else {
			return this.__fill;
		}
	}
	/*<EndProperty Name="System.Windows.Media.Brush System.Windows.Shapes.Shape::Fill()" />*/
	,
	__stroke: null,
	/*<BeginProperty Name="System.Windows.Media.Brush System.Windows.Shapes.Shape::Stroke()" />*/
	stroke: function (value) {
		if (arguments.length === 1) {
			this.__stroke = value;
			return value;
		} else {
			return this.__stroke;
		}
	}
	/*<EndProperty Name="System.Windows.Media.Brush System.Windows.Shapes.Shape::Stroke()" />*/
	,
	_isHitTestVisible: false,
	/*<BeginProperty Name="System.Boolean System.Windows.Shapes.Shape::IsHitTestVisible()" />*/
	isHitTestVisible: function (value) {
		if (arguments.length === 1) {
			this._isHitTestVisible = value;
			return value;
		} else {
			return this._isHitTestVisible;
		}
	}
	/*<EndProperty Name="System.Boolean System.Windows.Shapes.Shape::IsHitTestVisible()" />*/
	,
	_strokeThickness: 0,
	/*<BeginProperty Name="System.Double System.Windows.Shapes.Shape::StrokeThickness()" />*/
	strokeThickness: function (value) {
		if (arguments.length === 1) {
			this._strokeThickness = value;
			return value;
		} else {
			return this._strokeThickness;
		}
	}
	/*<EndProperty Name="System.Double System.Windows.Shapes.Shape::StrokeThickness()" />*/
	,
	_strokeDashArray: null,
	/*<BeginProperty Name="System.Windows.Media.DoubleCollection System.Windows.Shapes.Shape::StrokeDashArray()" />*/
	strokeDashArray: function (value) {
		if (arguments.length === 1) {
			this._strokeDashArray = value;
			return value;
		} else {
			return this._strokeDashArray;
		}
	}
	/*<EndProperty Name="System.Windows.Media.DoubleCollection System.Windows.Shapes.Shape::StrokeDashArray()" />*/
	,
	_strokeDashCap: 0,
	/*<BeginProperty Name="System.Int32 System.Windows.Shapes.Shape::StrokeDashCap()" />*/
	strokeDashCap: function (value) {
		if (arguments.length === 1) {
			this._strokeDashCap = value;
			return value;
		} else {
			return this._strokeDashCap;
		}
	}
	/*<EndProperty Name="System.Int32 System.Windows.Shapes.Shape::StrokeDashCap()" />*/
	,
	$type: new $.ig.Type('Shape', $.ig.FrameworkElement.prototype.$type)
}, true);

/*<EndType Name="System.Windows.Shapes.Shape" />*/

/*<BeginType Name="System.Windows.Shapes.Line" />*/

$.ig.util.defType('Line', 'Shape', {
	init: function () {
		$.ig.Shape.prototype.init.call(this);
		this.x1(0);
		this.x2(0);
		this.y1(0);
		this.y2(0);
	},
	_x1: 0,
	/*<BeginProperty Name="System.Double System.Windows.Shapes.Line::X1()" />*/
	x1: function (value) {
		if (arguments.length === 1) {
			this._x1 = value;
			return value;
		} else {
			return this._x1;
		}
	}
	/*<EndProperty Name="System.Double System.Windows.Shapes.Line::X1()" />*/
	,
	_x2: 0,
	/*<BeginProperty Name="System.Double System.Windows.Shapes.Line::X2()" />*/
	x2: function (value) {
		if (arguments.length === 1) {
			this._x2 = value;
			return value;
		} else {
			return this._x2;
		}
	}
	/*<EndProperty Name="System.Double System.Windows.Shapes.Line::X2()" />*/
	,
	_y1: 0,
	/*<BeginProperty Name="System.Double System.Windows.Shapes.Line::Y1()" />*/
	y1: function (value) {
		if (arguments.length === 1) {
			this._y1 = value;
			return value;
		} else {
			return this._y1;
		}
	}
	/*<EndProperty Name="System.Double System.Windows.Shapes.Line::Y1()" />*/
	,
	_y2: 0,
	/*<BeginProperty Name="System.Double System.Windows.Shapes.Line::Y2()" />*/
	y2: function (value) {
		if (arguments.length === 1) {
			this._y2 = value;
			return value;
		} else {
			return this._y2;
		}
	}
	/*<EndProperty Name="System.Double System.Windows.Shapes.Line::Y2()" />*/
	,
	$type: new $.ig.Type('Line', $.ig.Shape.prototype.$type)
}, true);

/*<EndType Name="System.Windows.Shapes.Line" />*/

/*<BeginType Name="System.Windows.Shapes.Path" />*/

$.ig.util.defType('Path', 'Shape', {
	init: function () {
		$.ig.Shape.prototype.init.call(this);
	},
	_data: null,
	/*<BeginProperty Name="System.Windows.Media.Geometry System.Windows.Shapes.Path::Data()" />*/
	data: function (value) {
		if (arguments.length === 1) {
			this._data = value;
			return value;
		} else {
			return this._data;
		}
	}
	/*<EndProperty Name="System.Windows.Media.Geometry System.Windows.Shapes.Path::Data()" />*/
	,
	_height: 0,
	/*<BeginProperty Name="System.Double System.Windows.Shapes.Path::Height()" />*/
	height: function (value) {
		if (arguments.length === 1) {
			this._height = value;
			return value;
		} else {
			return this._height;
		}
	}
	/*<EndProperty Name="System.Double System.Windows.Shapes.Path::Height()" />*/
	,
	_width: 0,
	/*<BeginProperty Name="System.Double System.Windows.Shapes.Path::Width()" />*/
	width: function (value) {
		if (arguments.length === 1) {
			this._width = value;
			return value;
		} else {
			return this._width;
		}
	}
	/*<EndProperty Name="System.Double System.Windows.Shapes.Path::Width()" />*/
	,
	$type: new $.ig.Type('Path', $.ig.Shape.prototype.$type)
}, true);

/*<EndType Name="System.Windows.Shapes.Path" />*/

/*<BeginType Name="System.Windows.Shapes.Polygon" />*/

$.ig.util.defType('Polygon', 'Shape', {
	init: function () {
		$.ig.Shape.prototype.init.call(this);
		this.points(new $.ig.PointCollection(0));
	},
	_points: null,
	/*<BeginProperty Name="System.Windows.PointCollection System.Windows.Shapes.Polygon::Points()" />*/
	points: function (value) {
		if (arguments.length === 1) {
			this._points = value;
			return value;
		} else {
			return this._points;
		}
	}
	/*<EndProperty Name="System.Windows.PointCollection System.Windows.Shapes.Polygon::Points()" />*/
	,
	$type: new $.ig.Type('Polygon', $.ig.Shape.prototype.$type)
}, true);

/*<EndType Name="System.Windows.Shapes.Polygon" />*/

/*<BeginType Name="System.Windows.Shapes.Polyline" />*/

$.ig.util.defType('Polyline', 'Shape', {
	init: function () {
		$.ig.Shape.prototype.init.call(this);
		this.points(new $.ig.PointCollection(0));
	},
	_points: null,
	/*<BeginProperty Name="System.Windows.PointCollection System.Windows.Shapes.Polyline::Points()" />*/
	points: function (value) {
		if (arguments.length === 1) {
			this._points = value;
			return value;
		} else {
			return this._points;
		}
	}
	/*<EndProperty Name="System.Windows.PointCollection System.Windows.Shapes.Polyline::Points()" />*/
	,
	$type: new $.ig.Type('Polyline', $.ig.Shape.prototype.$type)
}, true);

/*<EndType Name="System.Windows.Shapes.Polyline" />*/

/*<BeginType Name="System.Windows.Shapes.Rectangle" />*/

$.ig.util.defType('Rectangle', 'Shape', {
	__rect: null,
	__radiusX: 0,
	/*<BeginProperty Name="System.Double System.Windows.Shapes.Rectangle::RadiusX()" />*/
	radiusX: function (value) {
		if (arguments.length === 1) {
			this.__radiusX = value;
			return value;
		} else {
			return this.__radiusX;
		}
	}
	/*<EndProperty Name="System.Double System.Windows.Shapes.Rectangle::RadiusX()" />*/
	,
	__radiusY: 0,
	/*<BeginProperty Name="System.Double System.Windows.Shapes.Rectangle::RadiusY()" />*/
	radiusY: function (value) {
		if (arguments.length === 1) {
			this.__radiusY = value;
			return value;
		} else {
			return this.__radiusY;
		}
	}
	/*<EndProperty Name="System.Double System.Windows.Shapes.Rectangle::RadiusY()" />*/
	,
	init: function () {
		$.ig.Shape.prototype.init.call(this);
		this.__rect = new $.ig.Rect(0, 0, 0, 0, 0);
	},
	/*<BeginMethod Name="System.Void System.Windows.Shapes.Rectangle::Arrange(System.Windows.Rect)" />*/
	arrange: function (rect) {
	}
	/*<EndMethod Name="System.Void System.Windows.Shapes.Rectangle::Arrange(System.Windows.Rect)" />*/
	,
	$type: new $.ig.Type('Rectangle', $.ig.Shape.prototype.$type)
}, true);

/*<EndType Name="System.Windows.Shapes.Rectangle" />*/

/*<BeginType Name="System.Windows.Media.Brush" />*/

$.ig.util.defType('Brush', 'Object', {
	init: function () {
		this.__fill = null;
		this.__cachedFill = null;
		this.__cachedColor = new $.ig.Color();
		$.ig.Object.prototype.init.call(this);
	},
	_isGradient: false,
	_isRadialGradient: false,
	_isImageFill: false,
	__fill: null,
	/*<BeginProperty Name="System.String System.Windows.Media.Brush::Fill()" />*/
	fill: function (value) {
		if (arguments.length === 1) {
			this.__fill = value;
			return value;
		} else {
			return this.__fill;
		}
	}
	/*<EndProperty Name="System.String System.Windows.Media.Brush::Fill()" />*/
	,
	__cachedFill: null,
	__cachedColor: null,
	/*<BeginProperty Name="System.Windows.Media.Color System.Windows.Media.Brush::Color()" />*/
	color: function (value) {
		if (arguments.length === 1) {
			this.__cachedColor = value;
			this.__cachedFill = this.__cachedColor.colorString();
			this.__fill = this.__cachedFill;
			return value;
		} else {
			if (this.__fill == null && (this._isGradient || this._isRadialGradient)) {
				this.__fill = this.getPrimaryColor();
			}
			if (this.__fill == this.__cachedFill) {
				return this.__cachedColor;
			}
			var color = new $.ig.Color();
			if (this.__fill != null) {
				color.colorString(this.__fill);
				this.__cachedColor = color;
				this.__cachedFill = this.__fill;
			}
			return color;
		}
	}
	/*<EndProperty Name="System.Windows.Media.Color System.Windows.Media.Brush::Color()" />*/
	,
	/*<BeginMethod Name="System.String System.Windows.Media.Brush::GetPrimaryColor()" />*/
	getPrimaryColor: function () {
		return null;
	}
	/*<EndMethod Name="System.String System.Windows.Media.Brush::GetPrimaryColor()" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Windows.Media.Brush::Equals(System.Object)" />*/
	equals: function (obj) {
		if (obj == null) {
			return false;
		}
		var other = obj;
		return this.__fill.equals(other.__fill) && this.color().equals(other.color()) && this._isGradient == other._isGradient && this._isImageFill == other._isImageFill && this._isRadialGradient == other._isRadialGradient;
	}
	/*<EndMethod Name="System.Boolean System.Windows.Media.Brush::Equals(System.Object)" />*/
	,
	/*<BeginMethod Name="System.Windows.Media.Brush System.Windows.Media.Brush::Create(System.Object)" />*/
	create: function (val_) {
		var b_ = new $.ig.Brush();
		if (!val_) {
			return null;
			}
			
			if (typeof val_ == 'string') {
				if ($.ig.CssGradientUtil.prototype.isGradient(val_)) {
                    b_ = $.ig.CssGradientUtil.prototype.brushFromGradientString(val_);
                } else {
                    b_ = new $.ig.Brush();
                    b_.fill(val_);
                }
			} else if (val_.type == 'linearGradient') {
				b_ = new $.ig.LinearGradientBrush();
				if (val_.startPoint && val_.endPoint) {
					b_._useCustomDirection = true;
					b_._startX = val_.startPoint.x;
					b_._startY = val_.startPoint.y;
					b_._endX = val_.endPoint.x;
					b_._endY = val_.endPoint.y;
				}
				
				if (val_.colorStops) {
					stops = [];
					for (var i = 0; i < val_.colorStops.length; i++) {
						colorStop = new $.ig.GradientStop();
						colorStop._offset = val_.colorStops[i].offset;
						colorStop.__fill = val_.colorStops[i].color;
						stops.push(colorStop);
					}
					b_._gradientStops = stops;
				}};
		return b_;
	}
	/*<EndMethod Name="System.Windows.Media.Brush System.Windows.Media.Brush::Create(System.Object)" />*/
	,
	$type: new $.ig.Type('Brush', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.Windows.Media.Brush" />*/

/*<BeginType Name="System.Windows.Media.LinearGradientBrush" />*/

$.ig.util.defType('LinearGradientBrush', 'Brush', {
	init: function () {
		$.ig.Brush.prototype.init.call(this);
		this._useCustomDirection = false;
		this._startX = 0;
		this._startY = 0;
		this._endX = 0;
		this._endY = 1;
		this._isAbsolute = false;
		this._gradientStops = new Array(0);
		this._isGradient = true;
	},
	_useCustomDirection: false,
	_startX: 0,
	_startY: 0,
	_endX: 0,
	_endY: 0,
	_isAbsolute: false,
	_gradientStops: null,
	/*<BeginMethod Name="System.Windows.Media.LinearGradientBrush System.Windows.Media.LinearGradientBrush::Clone()" />*/
	clone: function () {
		var newBrush = new $.ig.LinearGradientBrush();
		newBrush._startX = this._startX;
		newBrush._startY = this._startY;
		newBrush._endX = this._endX;
		newBrush._endY = this._endY;
		newBrush._useCustomDirection = this._useCustomDirection;
		newBrush._isAbsolute = this._isAbsolute;
		if (this._gradientStops != null) {
			newBrush._gradientStops = new Array(this._gradientStops.length);
			for (var i = 0; i < this._gradientStops.length; i++) {
				newBrush._gradientStops[i] = this._gradientStops[i].clone();
			}
		}
		return newBrush;
	}
	/*<EndMethod Name="System.Windows.Media.LinearGradientBrush System.Windows.Media.LinearGradientBrush::Clone()" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Windows.Media.LinearGradientBrush::Equals(System.Object)" />*/
	equals: function (obj) {
		if (obj == null) {
			return false;
		}
		var other = $.ig.util.cast($.ig.LinearGradientBrush.prototype.$type, obj);
		if (other == null) {
			return false;
		}
		var retval = $.ig.Brush.prototype.equals.call(this, obj) && this._startX == other._startX && this._startY == other._startY && this._endX == other._endX && this._endY == other._endY && this._isAbsolute == other._isAbsolute && this._useCustomDirection == other._useCustomDirection;
		if (retval == false) {
			return false;
		}
		if (this._gradientStops.length != other._gradientStops.length) {
			return false;
		}
		for (var i = 0, length = this._gradientStops.length; i < length; i++) {
			if (!this._gradientStops[i].equals(other._gradientStops[i])) {
				return false;
			}
		}
		return true;
	}
	/*<EndMethod Name="System.Boolean System.Windows.Media.LinearGradientBrush::Equals(System.Object)" />*/
	,
	/*<BeginMethod Name="System.String System.Windows.Media.LinearGradientBrush::GetPrimaryColor()" />*/
	getPrimaryColor: function () {
		if (this._gradientStops != null && this._gradientStops.length > 0) {
			return this._gradientStops[0].color().colorString();
		}
		return $.ig.Brush.prototype.getPrimaryColor.call(this);
	}
	/*<EndMethod Name="System.String System.Windows.Media.LinearGradientBrush::GetPrimaryColor()" />*/
	,
	$type: new $.ig.Type('LinearGradientBrush', $.ig.Brush.prototype.$type)
}, true);

/*<EndType Name="System.Windows.Media.LinearGradientBrush" />*/

/*<BeginType Name="System.Windows.Media.GradientStop" />*/

$.ig.util.defType('GradientStop', 'Object', {
	init: function () {
		this.__fill = null;
		this.__cachedFill = null;
		this.__cachedColor = new $.ig.Color();
		$.ig.Object.prototype.init.call(this);
		this._offset = 0;
	},
	_offset: 0,
	/*<BeginMethod Name="System.Windows.Media.GradientStop System.Windows.Media.GradientStop::Clone()" />*/
	clone: function () {
		var newStop = new $.ig.GradientStop();
		newStop._offset = this._offset;
		newStop.__fill = this.__fill;
		return newStop;
	}
	/*<EndMethod Name="System.Windows.Media.GradientStop System.Windows.Media.GradientStop::Clone()" />*/
	,
	__fill: null,
	/*<BeginProperty Name="System.String System.Windows.Media.GradientStop::Fill()" />*/
	fill: function (value) {
		if (arguments.length === 1) {
			this.__fill = value;
			return value;
		} else {
			return this.__fill;
		}
	}
	/*<EndProperty Name="System.String System.Windows.Media.GradientStop::Fill()" />*/
	,
	__cachedFill: null,
	__cachedColor: null,
	/*<BeginProperty Name="System.Windows.Media.Color System.Windows.Media.GradientStop::Color()" />*/
	color: function (value) {
		if (arguments.length === 1) {
			this.__cachedColor = value;
			this.__cachedFill = this.__cachedColor.colorString();
			this.__fill = this.__cachedFill;
			return value;
		} else {
			if (this.__fill == this.__cachedFill) {
				return this.__cachedColor;
			}
			var color = new $.ig.Color();
			if (this.__fill != null) {
				color.colorString(this.__fill);
				this.__cachedColor = color;
				this.__cachedFill = this.__fill;
			}
			return color;
		}
	}
	/*<EndProperty Name="System.Windows.Media.Color System.Windows.Media.GradientStop::Color()" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Windows.Media.GradientStop::Equals(System.Object)" />*/
	equals: function (obj) {
		if (obj == null) {
			return false;
		}
		var other = obj;
		return this._offset == other._offset && this.color().equals(other.color()) && this.__fill.equals(other.__fill);
	}
	/*<EndMethod Name="System.Boolean System.Windows.Media.GradientStop::Equals(System.Object)" />*/
	,
	$type: new $.ig.Type('GradientStop', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.Windows.Media.GradientStop" />*/

/*<BeginType Name="System.Windows.Media.Color" />*/

$.ig.util.defType('Color', 'ValueType', {
	init: function () {
		$.ig.ValueType.prototype.init.call(this);
	},
	__a: 0,
	/*<BeginProperty Name="System.Byte System.Windows.Media.Color::A()" />*/
	a: function (value) {
		if (arguments.length === 1) {
			this.__a = $.ig.truncate(Math.round(value));
			this.__stringDirty = true;
			return value;
		} else {
			return this.__a;
		}
	}
	/*<EndProperty Name="System.Byte System.Windows.Media.Color::A()" />*/
	,
	__r: 0,
	/*<BeginProperty Name="System.Byte System.Windows.Media.Color::R()" />*/
	r: function (value) {
		if (arguments.length === 1) {
			this.__r = $.ig.truncate(Math.round(value));
			this.__stringDirty = true;
			return value;
		} else {
			return this.__r;
		}
	}
	/*<EndProperty Name="System.Byte System.Windows.Media.Color::R()" />*/
	,
	__g: 0,
	/*<BeginProperty Name="System.Byte System.Windows.Media.Color::G()" />*/
	g: function (value) {
		if (arguments.length === 1) {
			this.__g = $.ig.truncate(Math.round(value));
			this.__stringDirty = true;
			return value;
		} else {
			return this.__g;
		}
	}
	/*<EndProperty Name="System.Byte System.Windows.Media.Color::G()" />*/
	,
	__b: 0,
	/*<BeginProperty Name="System.Byte System.Windows.Media.Color::B()" />*/
	b: function (value) {
		if (arguments.length === 1) {
			this.__b = $.ig.truncate(Math.round(value));
			this.__stringDirty = true;
			return value;
		} else {
			return this.__b;
		}
	}
	/*<EndProperty Name="System.Byte System.Windows.Media.Color::B()" />*/
	,
	__colorString: null,
	/*<BeginProperty Name="System.String System.Windows.Media.Color::ColorString()" />*/
	colorString: function (value) {
		if (arguments.length === 1) {
			this.__colorString = value;
			this.updateColors();
			return value;
		} else {
			if (this.__stringDirty || this.__colorString == null) {
				this.__stringDirty = false;
				this.updateColorString();
			}
			return this.__colorString;
		}
	}
	/*<EndProperty Name="System.String System.Windows.Media.Color::ColorString()" />*/
	,
	__stringDirty: false,
	/*<BeginMethod Name="System.Windows.Media.Color System.Windows.Media.Color::Create(System.Object)" />*/
	create: function (value) {
		if ($.ig.util.cast($.ig.Color.prototype.$type, value) !== null) {
			return value;
		}
		var ret = new $.ig.Color();
		if (typeof value === 'string') {
			ret.colorString(value);
		} else if (value != null) {
			throw new $.ig.ArgumentException(1, "Unknown color type");
		}
		return ret;
	}
	/*<EndMethod Name="System.Windows.Media.Color System.Windows.Media.Color::Create(System.Object)" />*/
	,
	/*<BeginMethod Name="System.Void System.Windows.Media.Color::UpdateColorString()" />*/
	updateColorString: function () {
		this.__colorString = "rgba(" + this.__r + "," + this.__g + "," + this.__b + "," + this.__a / 255 + ")";
	}
	/*<EndMethod Name="System.Void System.Windows.Media.Color::UpdateColorString()" />*/
	,
	/*<BeginMethod Name="System.Void System.Windows.Media.Color::UpdateColors()" />*/
	updateColors: function () {
		var obj_ = $.ig.util.stringToColor(this.__colorString);
		this.__a = typeof obj_.a != 'undefined' ? Math.round(obj_.a) : 0;
		this.__r = typeof obj_.r != 'undefined' ? Math.round(obj_.r) : 0;
		this.__g = typeof obj_.g != 'undefined' ? Math.round(obj_.g) : 0;
		this.__b = typeof obj_.b != 'undefined' ? Math.round(obj_.b) : 0;
	}
	/*<EndMethod Name="System.Void System.Windows.Media.Color::UpdateColors()" />*/
	,
	/*<BeginMethod Name="System.Windows.Media.Color System.Windows.Media.Color::FromArgb(System.Byte, System.Byte, System.Byte, System.Byte)" />*/
	fromArgb: function (a_, r_, g_, b_) {
		var c = new $.ig.Color();
		c.__a = a_ | 0;
		c.__r = r_ | 0;
		c.__g = g_ | 0;
		c.__b = b_ | 0;
		c.__stringDirty = true;
		return c;
	}
	/*<EndMethod Name="System.Windows.Media.Color System.Windows.Media.Color::FromArgb(System.Byte, System.Byte, System.Byte, System.Byte)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Windows.Media.Color::Equals(System.Object)" />*/
	equals: function (obj) {
		if (($.ig.util.cast($.ig.Color.prototype.$type, obj) !== null) == false) {
			return false;
		}
		var other = obj;
		return this.__a == other.__a && this.__r == other.__r && this.__g == other.__g && this.__b == other.__b;
	}
	/*<EndMethod Name="System.Boolean System.Windows.Media.Color::Equals(System.Object)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Windows.Media.Color::GetHashCode()" />*/
	getHashCode: function () {
		return (this.__a << 24) | (this.__r << 16) | (this.__g << 8) | this.__b;
	}
	/*<EndMethod Name="System.Int32 System.Windows.Media.Color::GetHashCode()" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Windows.Media.Color::L_op_Inequality(System.Windows.Media.Color, System.Windows.Media.Color)" />*/
	l_op_Inequality: function (left, right) {
		return !($.ig.Color.prototype.l_op_Equality(left, right));
	}
	/*<EndMethod Name="System.Boolean System.Windows.Media.Color::L_op_Inequality(System.Windows.Media.Color, System.Windows.Media.Color)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Windows.Media.Color::L_op_Inequality_Lifted(System.Nullable, System.Nullable)" />*/
	l_op_Inequality_Lifted: function (left, right) {
		if (!left.hasValue()) {
			return right.hasValue();
		} else if (!right.hasValue()) {
			return true;
		}
		return $.ig.Color.prototype.l_op_Inequality(left.value(), right.value());
	}
	/*<EndMethod Name="System.Boolean System.Windows.Media.Color::L_op_Inequality_Lifted(System.Nullable, System.Nullable)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Windows.Media.Color::L_op_Equality(System.Windows.Media.Color, System.Windows.Media.Color)" />*/
	l_op_Equality: function (left, right) {
		return left.__a == right.__a && left.__r == right.__r && left.__g == right.__g && left.__b == right.__b;
	}
	/*<EndMethod Name="System.Boolean System.Windows.Media.Color::L_op_Equality(System.Windows.Media.Color, System.Windows.Media.Color)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Windows.Media.Color::L_op_Equality_Lifted(System.Nullable, System.Nullable)" />*/
	l_op_Equality_Lifted: function (left, right) {
		if (!left.hasValue()) {
			return !right.hasValue();
		} else if (!right.hasValue()) {
			return false;
		}
		return $.ig.Color.prototype.l_op_Equality(left.value(), right.value());
	}
	/*<EndMethod Name="System.Boolean System.Windows.Media.Color::L_op_Equality_Lifted(System.Nullable, System.Nullable)" />*/
	,
	$type: new $.ig.Type('Color', $.ig.ValueType.prototype.$type)
}, true);

/*<EndType Name="System.Windows.Media.Color" />*/

/*<BeginType Name="System.Windows.Media.DoubleCollection" />*/

$.ig.util.defType('DoubleCollection', 'List$1', {
	init: function () {
		$.ig.List$1.prototype.init.call(this, Number, 0);
	},
	$type: new $.ig.Type('DoubleCollection', $.ig.List$1.prototype.$type.specialize(Number))
}, true);

/*<EndType Name="System.Windows.Media.DoubleCollection" />*/

/*<BeginType Name="System.Windows.Media.Geometry" />*/

$.ig.util.defType('Geometry', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginProperty Name="System.Windows.Media.GeometryType System.Windows.Media.Geometry::Type()" />*/
	type: function () {
	}
	/*<EndProperty Name="System.Windows.Media.GeometryType System.Windows.Media.Geometry::Type()" />*/
	,
	$type: new $.ig.Type('Geometry', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.Windows.Media.Geometry" />*/

/*<BeginType Name="System.Windows.Media.GeometryCollection" />*/

$.ig.util.defType('GeometryCollection', 'List$1', {
	init: function () {
		$.ig.List$1.prototype.init.call(this, $.ig.Geometry.prototype.$type, 0);
	},
	$type: new $.ig.Type('GeometryCollection', $.ig.List$1.prototype.$type.specialize($.ig.Geometry.prototype.$type))
}, true);

/*<EndType Name="System.Windows.Media.GeometryCollection" />*/

/*<BeginType Name="System.Windows.Media.GeometryGroup" />*/

$.ig.util.defType('GeometryGroup', 'Geometry', {
	init: function () {
		$.ig.Geometry.prototype.init.call(this);
		this.children(new $.ig.GeometryCollection());
	},
	_children: null,
	/*<BeginProperty Name="System.Windows.Media.GeometryCollection System.Windows.Media.GeometryGroup::Children()" />*/
	children: function (value) {
		if (arguments.length === 1) {
			this._children = value;
			return value;
		} else {
			return this._children;
		}
	}
	/*<EndProperty Name="System.Windows.Media.GeometryCollection System.Windows.Media.GeometryGroup::Children()" />*/
	,
	/*<BeginProperty Name="System.Windows.Media.GeometryType System.Windows.Media.GeometryGroup::Type()" />*/
	type: function () {
		return $.ig.GeometryType.prototype.group;
	}
	/*<EndProperty Name="System.Windows.Media.GeometryType System.Windows.Media.GeometryGroup::Type()" />*/
	,
	_fillRule: 0,
	/*<BeginProperty Name="System.Windows.Media.FillRule System.Windows.Media.GeometryGroup::FillRule()" />*/
	fillRule: function (value) {
		if (arguments.length === 1) {
			this._fillRule = value;
			return value;
		} else {
			return this._fillRule;
		}
	}
	/*<EndProperty Name="System.Windows.Media.FillRule System.Windows.Media.GeometryGroup::FillRule()" />*/
	,
	$type: new $.ig.Type('GeometryGroup', $.ig.Geometry.prototype.$type)
}, true);

/*<EndType Name="System.Windows.Media.GeometryGroup" />*/

/*<BeginType Name="System.Windows.Media.LineGeometry" />*/

$.ig.util.defType('LineGeometry', 'Geometry', {
	init: function () {
		$.ig.Geometry.prototype.init.call(this);
	},
	_startPoint: null,
	/*<BeginProperty Name="System.Windows.Point System.Windows.Media.LineGeometry::StartPoint()" />*/
	startPoint: function (value) {
		if (arguments.length === 1) {
			this._startPoint = value;
			return value;
		} else {
			return this._startPoint;
		}
	}
	/*<EndProperty Name="System.Windows.Point System.Windows.Media.LineGeometry::StartPoint()" />*/
	,
	_endPoint: null,
	/*<BeginProperty Name="System.Windows.Point System.Windows.Media.LineGeometry::EndPoint()" />*/
	endPoint: function (value) {
		if (arguments.length === 1) {
			this._endPoint = value;
			return value;
		} else {
			return this._endPoint;
		}
	}
	/*<EndProperty Name="System.Windows.Point System.Windows.Media.LineGeometry::EndPoint()" />*/
	,
	/*<BeginProperty Name="System.Windows.Media.GeometryType System.Windows.Media.LineGeometry::Type()" />*/
	type: function () {
		return $.ig.GeometryType.prototype.line;
	}
	/*<EndProperty Name="System.Windows.Media.GeometryType System.Windows.Media.LineGeometry::Type()" />*/
	,
	$type: new $.ig.Type('LineGeometry', $.ig.Geometry.prototype.$type)
}, true);

/*<EndType Name="System.Windows.Media.LineGeometry" />*/

/*<BeginType Name="System.Windows.Media.RectangleGeometry" />*/

$.ig.util.defType('RectangleGeometry', 'Geometry', {
	init: function () {
		$.ig.Geometry.prototype.init.call(this);
	},
	_rect: null,
	/*<BeginProperty Name="System.Windows.Rect System.Windows.Media.RectangleGeometry::Rect()" />*/
	rect: function (value) {
		if (arguments.length === 1) {
			this._rect = value;
			return value;
		} else {
			return this._rect;
		}
	}
	/*<EndProperty Name="System.Windows.Rect System.Windows.Media.RectangleGeometry::Rect()" />*/
	,
	_radiusX: 0,
	/*<BeginProperty Name="System.Double System.Windows.Media.RectangleGeometry::RadiusX()" />*/
	radiusX: function (value) {
		if (arguments.length === 1) {
			this._radiusX = value;
			return value;
		} else {
			return this._radiusX;
		}
	}
	/*<EndProperty Name="System.Double System.Windows.Media.RectangleGeometry::RadiusX()" />*/
	,
	_radiusY: 0,
	/*<BeginProperty Name="System.Double System.Windows.Media.RectangleGeometry::RadiusY()" />*/
	radiusY: function (value) {
		if (arguments.length === 1) {
			this._radiusY = value;
			return value;
		} else {
			return this._radiusY;
		}
	}
	/*<EndProperty Name="System.Double System.Windows.Media.RectangleGeometry::RadiusY()" />*/
	,
	/*<BeginProperty Name="System.Windows.Media.GeometryType System.Windows.Media.RectangleGeometry::Type()" />*/
	type: function () {
		return $.ig.GeometryType.prototype.rectangle;
	}
	/*<EndProperty Name="System.Windows.Media.GeometryType System.Windows.Media.RectangleGeometry::Type()" />*/
	,
	$type: new $.ig.Type('RectangleGeometry', $.ig.Geometry.prototype.$type)
}, true);

/*<EndType Name="System.Windows.Media.RectangleGeometry" />*/

/*<BeginType Name="System.Windows.Media.EllipseGeometry" />*/

$.ig.util.defType('EllipseGeometry', 'Geometry', {
	init: function () {
		$.ig.Geometry.prototype.init.call(this);
	},
	_center: null,
	/*<BeginProperty Name="System.Windows.Point System.Windows.Media.EllipseGeometry::Center()" />*/
	center: function (value) {
		if (arguments.length === 1) {
			this._center = value;
			return value;
		} else {
			return this._center;
		}
	}
	/*<EndProperty Name="System.Windows.Point System.Windows.Media.EllipseGeometry::Center()" />*/
	,
	_radiusX: 0,
	/*<BeginProperty Name="System.Double System.Windows.Media.EllipseGeometry::RadiusX()" />*/
	radiusX: function (value) {
		if (arguments.length === 1) {
			this._radiusX = value;
			return value;
		} else {
			return this._radiusX;
		}
	}
	/*<EndProperty Name="System.Double System.Windows.Media.EllipseGeometry::RadiusX()" />*/
	,
	_radiusY: 0,
	/*<BeginProperty Name="System.Double System.Windows.Media.EllipseGeometry::RadiusY()" />*/
	radiusY: function (value) {
		if (arguments.length === 1) {
			this._radiusY = value;
			return value;
		} else {
			return this._radiusY;
		}
	}
	/*<EndProperty Name="System.Double System.Windows.Media.EllipseGeometry::RadiusY()" />*/
	,
	/*<BeginProperty Name="System.Windows.Media.GeometryType System.Windows.Media.EllipseGeometry::Type()" />*/
	type: function () {
		return $.ig.GeometryType.prototype.ellipse;
	}
	/*<EndProperty Name="System.Windows.Media.GeometryType System.Windows.Media.EllipseGeometry::Type()" />*/
	,
	$type: new $.ig.Type('EllipseGeometry', $.ig.Geometry.prototype.$type)
}, true);

/*<EndType Name="System.Windows.Media.EllipseGeometry" />*/

/*<BeginType Name="System.Windows.Media.PathGeometry" />*/

$.ig.util.defType('PathGeometry', 'Geometry', {
	init: function () {
		$.ig.Geometry.prototype.init.call(this);
		this.figures(new $.ig.PathFigureCollection());
	},
	_figures: null,
	/*<BeginProperty Name="System.Windows.Media.PathFigureCollection System.Windows.Media.PathGeometry::Figures()" />*/
	figures: function (value) {
		if (arguments.length === 1) {
			this._figures = value;
			return value;
		} else {
			return this._figures;
		}
	}
	/*<EndProperty Name="System.Windows.Media.PathFigureCollection System.Windows.Media.PathGeometry::Figures()" />*/
	,
	/*<BeginProperty Name="System.Windows.Media.GeometryType System.Windows.Media.PathGeometry::Type()" />*/
	type: function () {
		return $.ig.GeometryType.prototype.path;
	}
	/*<EndProperty Name="System.Windows.Media.GeometryType System.Windows.Media.PathGeometry::Type()" />*/
	,
	$type: new $.ig.Type('PathGeometry', $.ig.Geometry.prototype.$type)
}, true);

/*<EndType Name="System.Windows.Media.PathGeometry" />*/

/*<BeginType Name="System.Windows.Media.PathFigure" />*/

$.ig.util.defType('PathFigure', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
		this.__segments = new $.ig.PathSegmentCollection();
		this.__isClosed = false;
		this.__isFilled = true;
	},
	__segments: null,
	/*<BeginProperty Name="System.Windows.Media.PathSegmentCollection System.Windows.Media.PathFigure::Segments()" />*/
	segments: function (value) {
		if (arguments.length === 1) {
			this.__segments = value;
			return value;
		} else {
			return this.__segments;
		}
	}
	/*<EndProperty Name="System.Windows.Media.PathSegmentCollection System.Windows.Media.PathFigure::Segments()" />*/
	,
	__startPoint: null,
	/*<BeginProperty Name="System.Windows.Point System.Windows.Media.PathFigure::StartPoint()" />*/
	startPoint: function (value) {
		if (arguments.length === 1) {
			this.__startPoint = value;
			return value;
		} else {
			return this.__startPoint;
		}
	}
	/*<EndProperty Name="System.Windows.Point System.Windows.Media.PathFigure::StartPoint()" />*/
	,
	__isFilled: false,
	/*<BeginProperty Name="System.Boolean System.Windows.Media.PathFigure::IsFilled()" />*/
	isFilled: function (value) {
		if (arguments.length === 1) {
			this.__isFilled = value;
			return value;
		} else {
			return this.__isFilled;
		}
	}
	/*<EndProperty Name="System.Boolean System.Windows.Media.PathFigure::IsFilled()" />*/
	,
	__isClosed: false,
	/*<BeginProperty Name="System.Boolean System.Windows.Media.PathFigure::IsClosed()" />*/
	isClosed: function (value) {
		if (arguments.length === 1) {
			this.__isClosed = value;
			return value;
		} else {
			return this.__isClosed;
		}
	}
	/*<EndProperty Name="System.Boolean System.Windows.Media.PathFigure::IsClosed()" />*/
	,
	$type: new $.ig.Type('PathFigure', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.Windows.Media.PathFigure" />*/

/*<BeginType Name="System.Windows.Media.PathFigureCollection" />*/

$.ig.util.defType('PathFigureCollection', 'List$1', {
	init: function () {
		$.ig.List$1.prototype.init.call(this, $.ig.PathFigure.prototype.$type, 0);
	},
	$type: new $.ig.Type('PathFigureCollection', $.ig.List$1.prototype.$type.specialize($.ig.PathFigure.prototype.$type))
}, true);

/*<EndType Name="System.Windows.Media.PathFigureCollection" />*/

/*<BeginType Name="System.Windows.Media.PathSegment" />*/

$.ig.util.defType('PathSegment', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginProperty Name="System.Windows.Media.PathSegmentType System.Windows.Media.PathSegment::Type()" />*/
	type: function () {
	}
	/*<EndProperty Name="System.Windows.Media.PathSegmentType System.Windows.Media.PathSegment::Type()" />*/
	,
	$type: new $.ig.Type('PathSegment', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.Windows.Media.PathSegment" />*/

/*<BeginType Name="System.Windows.Media.PathSegmentCollection" />*/

$.ig.util.defType('PathSegmentCollection', 'List$1', {
	init: function () {
		$.ig.List$1.prototype.init.call(this, $.ig.PathSegment.prototype.$type, 0);
	},
	$type: new $.ig.Type('PathSegmentCollection', $.ig.List$1.prototype.$type.specialize($.ig.PathSegment.prototype.$type))
}, true);

/*<EndType Name="System.Windows.Media.PathSegmentCollection" />*/

/*<BeginType Name="System.Windows.Media.LineSegment" />*/

$.ig.util.defType('LineSegment', 'PathSegment', {
	__point: null,
	/*<BeginProperty Name="System.Windows.Point System.Windows.Media.LineSegment::Point()" />*/
	point: function (value) {
		if (arguments.length === 1) {
			this.__point = value;
			return value;
		} else {
			return this.__point;
		}
	}
	/*<EndProperty Name="System.Windows.Point System.Windows.Media.LineSegment::Point()" />*/
	,
	init: function (initNumber, point) {
		if (initNumber > 0) {
			switch (initNumber) {
				case 1:
					this.init1.apply(this, arguments);
					break;
			}
			return;
		}
		$.ig.PathSegment.prototype.init.call(this);
		this.point(point);
	},
	init1: function (initNumber) {
		$.ig.PathSegment.prototype.init.call(this);
	},
	/*<BeginProperty Name="System.Windows.Media.PathSegmentType System.Windows.Media.LineSegment::Type()" />*/
	type: function () {
		return $.ig.PathSegmentType.prototype.line;
	}
	/*<EndProperty Name="System.Windows.Media.PathSegmentType System.Windows.Media.LineSegment::Type()" />*/
	,
	$type: new $.ig.Type('LineSegment', $.ig.PathSegment.prototype.$type)
}, true);

/*<EndType Name="System.Windows.Media.LineSegment" />*/

/*<BeginType Name="System.Windows.Media.BezierSegment" />*/

$.ig.util.defType('BezierSegment', 'PathSegment', {
	__point1: null,
	/*<BeginProperty Name="System.Windows.Point System.Windows.Media.BezierSegment::Point1()" />*/
	point1: function (value) {
		if (arguments.length === 1) {
			this.__point1 = value;
			return value;
		} else {
			return this.__point1;
		}
	}
	/*<EndProperty Name="System.Windows.Point System.Windows.Media.BezierSegment::Point1()" />*/
	,
	__point2: null,
	/*<BeginProperty Name="System.Windows.Point System.Windows.Media.BezierSegment::Point2()" />*/
	point2: function (value) {
		if (arguments.length === 1) {
			this.__point2 = value;
			return value;
		} else {
			return this.__point2;
		}
	}
	/*<EndProperty Name="System.Windows.Point System.Windows.Media.BezierSegment::Point2()" />*/
	,
	__point3: null,
	/*<BeginProperty Name="System.Windows.Point System.Windows.Media.BezierSegment::Point3()" />*/
	point3: function (value) {
		if (arguments.length === 1) {
			this.__point3 = value;
			return value;
		} else {
			return this.__point3;
		}
	}
	/*<EndProperty Name="System.Windows.Point System.Windows.Media.BezierSegment::Point3()" />*/
	,
	init: function (initNumber) {
		if (initNumber > 0) {
			switch (initNumber) {
				case 1:
					this.init1.apply(this, arguments);
					break;
			}
			return;
		}
		$.ig.PathSegment.prototype.init.call(this);
		this.point1(this.point2(this.point3({ __x: 0, __y: 0, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName })));
	},
	init1: function (initNumber, cp1, cp2, p) {
		$.ig.PathSegment.prototype.init.call(this);
		this.point1(cp1);
		this.point2(cp2);
		this.point3(p);
	},
	/*<BeginProperty Name="System.Windows.Media.PathSegmentType System.Windows.Media.BezierSegment::Type()" />*/
	type: function () {
		return $.ig.PathSegmentType.prototype.bezier;
	}
	/*<EndProperty Name="System.Windows.Media.PathSegmentType System.Windows.Media.BezierSegment::Type()" />*/
	,
	$type: new $.ig.Type('BezierSegment', $.ig.PathSegment.prototype.$type)
}, true);

/*<EndType Name="System.Windows.Media.BezierSegment" />*/

/*<BeginType Name="System.Windows.Media.PolyBezierSegment" />*/

$.ig.util.defType('PolyBezierSegment', 'PathSegment', {
	init: function () {
		$.ig.PathSegment.prototype.init.call(this);
		this.points(new $.ig.PointCollection(0));
	},
	_points: null,
	/*<BeginProperty Name="System.Windows.PointCollection System.Windows.Media.PolyBezierSegment::Points()" />*/
	points: function (value) {
		if (arguments.length === 1) {
			this._points = value;
			return value;
		} else {
			return this._points;
		}
	}
	/*<EndProperty Name="System.Windows.PointCollection System.Windows.Media.PolyBezierSegment::Points()" />*/
	,
	/*<BeginProperty Name="System.Windows.Media.PathSegmentType System.Windows.Media.PolyBezierSegment::Type()" />*/
	type: function () {
		return $.ig.PathSegmentType.prototype.polyBezier;
	}
	/*<EndProperty Name="System.Windows.Media.PathSegmentType System.Windows.Media.PolyBezierSegment::Type()" />*/
	,
	$type: new $.ig.Type('PolyBezierSegment', $.ig.PathSegment.prototype.$type)
}, true);

/*<EndType Name="System.Windows.Media.PolyBezierSegment" />*/

/*<BeginType Name="System.Windows.Media.PolyLineSegment" />*/

$.ig.util.defType('PolyLineSegment', 'PathSegment', {
	init: function () {
		$.ig.PathSegment.prototype.init.call(this);
		this.__points = new $.ig.PointCollection(0);
	},
	__points: null,
	/*<BeginProperty Name="System.Windows.PointCollection System.Windows.Media.PolyLineSegment::Points()" />*/
	points: function (value) {
		if (arguments.length === 1) {
			this.__points = value;
			return value;
		} else {
			return this.__points;
		}
	}
	/*<EndProperty Name="System.Windows.PointCollection System.Windows.Media.PolyLineSegment::Points()" />*/
	,
	/*<BeginProperty Name="System.Windows.Media.PathSegmentType System.Windows.Media.PolyLineSegment::Type()" />*/
	type: function () {
		return $.ig.PathSegmentType.prototype.polyLine;
	}
	/*<EndProperty Name="System.Windows.Media.PathSegmentType System.Windows.Media.PolyLineSegment::Type()" />*/
	,
	$type: new $.ig.Type('PolyLineSegment', $.ig.PathSegment.prototype.$type)
}, true);

/*<EndType Name="System.Windows.Media.PolyLineSegment" />*/

/*<BeginType Name="System.Windows.Media.ArcSegment" />*/

$.ig.util.defType('ArcSegment', 'PathSegment', {
	init: function () {
		this._size = new $.ig.Size();
		$.ig.PathSegment.prototype.init.call(this);
		this.isLargeArc(false);
		this.sweepDirection($.ig.SweepDirection.prototype.counterclockwise);
	},
	_point: null,
	/*<BeginProperty Name="System.Windows.Point System.Windows.Media.ArcSegment::Point()" />*/
	point: function (value) {
		if (arguments.length === 1) {
			this._point = value;
			return value;
		} else {
			return this._point;
		}
	}
	/*<EndProperty Name="System.Windows.Point System.Windows.Media.ArcSegment::Point()" />*/
	,
	_isLargeArc: false,
	/*<BeginProperty Name="System.Boolean System.Windows.Media.ArcSegment::IsLargeArc()" />*/
	isLargeArc: function (value) {
		if (arguments.length === 1) {
			this._isLargeArc = value;
			return value;
		} else {
			return this._isLargeArc;
		}
	}
	/*<EndProperty Name="System.Boolean System.Windows.Media.ArcSegment::IsLargeArc()" />*/
	,
	_sweepDirection: 0,
	/*<BeginProperty Name="System.Windows.Media.SweepDirection System.Windows.Media.ArcSegment::SweepDirection()" />*/
	sweepDirection: function (value) {
		if (arguments.length === 1) {
			this._sweepDirection = value;
			return value;
		} else {
			return this._sweepDirection;
		}
	}
	/*<EndProperty Name="System.Windows.Media.SweepDirection System.Windows.Media.ArcSegment::SweepDirection()" />*/
	,
	_size: null,
	/*<BeginProperty Name="System.Windows.Size System.Windows.Media.ArcSegment::Size()" />*/
	size: function (value) {
		if (arguments.length === 1) {
			this._size = value;
			return value;
		} else {
			return this._size;
		}
	}
	/*<EndProperty Name="System.Windows.Size System.Windows.Media.ArcSegment::Size()" />*/
	,
	_rotationAngle: 0,
	/*<BeginProperty Name="System.Double System.Windows.Media.ArcSegment::RotationAngle()" />*/
	rotationAngle: function (value) {
		if (arguments.length === 1) {
			this._rotationAngle = value;
			return value;
		} else {
			return this._rotationAngle;
		}
	}
	/*<EndProperty Name="System.Double System.Windows.Media.ArcSegment::RotationAngle()" />*/
	,
	/*<BeginProperty Name="System.Windows.Media.PathSegmentType System.Windows.Media.ArcSegment::Type()" />*/
	type: function () {
		return $.ig.PathSegmentType.prototype.arc;
	}
	/*<EndProperty Name="System.Windows.Media.PathSegmentType System.Windows.Media.ArcSegment::Type()" />*/
	,
	$type: new $.ig.Type('ArcSegment', $.ig.PathSegment.prototype.$type)
}, true);

/*<EndType Name="System.Windows.Media.ArcSegment" />*/

/*<BeginType Name="System.Windows.Media.Transform" />*/

$.ig.util.defType('Transform', 'DependencyObject', {
	init: function () {
		$.ig.DependencyObject.prototype.init.call(this);
	},
	$type: new $.ig.Type('Transform', $.ig.DependencyObject.prototype.$type)
}, true);

/*<EndType Name="System.Windows.Media.Transform" />*/

/*<BeginType Name="System.Windows.Media.RotateTransform" />*/

$.ig.util.defType('RotateTransform', 'Transform', {
	init: function () {
		$.ig.Transform.prototype.init.call(this);
	},
	_angle: 0,
	/*<BeginProperty Name="System.Double System.Windows.Media.RotateTransform::Angle()" />*/
	angle: function (value) {
		if (arguments.length === 1) {
			this._angle = value;
			return value;
		} else {
			return this._angle;
		}
	}
	/*<EndProperty Name="System.Double System.Windows.Media.RotateTransform::Angle()" />*/
	,
	_centerX: 0,
	/*<BeginProperty Name="System.Double System.Windows.Media.RotateTransform::CenterX()" />*/
	centerX: function (value) {
		if (arguments.length === 1) {
			this._centerX = value;
			return value;
		} else {
			return this._centerX;
		}
	}
	/*<EndProperty Name="System.Double System.Windows.Media.RotateTransform::CenterX()" />*/
	,
	_centerY: 0,
	/*<BeginProperty Name="System.Double System.Windows.Media.RotateTransform::CenterY()" />*/
	centerY: function (value) {
		if (arguments.length === 1) {
			this._centerY = value;
			return value;
		} else {
			return this._centerY;
		}
	}
	/*<EndProperty Name="System.Double System.Windows.Media.RotateTransform::CenterY()" />*/
	,
	$type: new $.ig.Type('RotateTransform', $.ig.Transform.prototype.$type)
}, true);

/*<EndType Name="System.Windows.Media.RotateTransform" />*/

/*<BeginType Name="System.Windows.Media.TranslateTransform" />*/

$.ig.util.defType('TranslateTransform', 'Transform', {
	init: function () {
		$.ig.Transform.prototype.init.call(this);
	},
	_x: 0,
	/*<BeginProperty Name="System.Double System.Windows.Media.TranslateTransform::X()" />*/
	x: function (value) {
		if (arguments.length === 1) {
			this._x = value;
			return value;
		} else {
			return this._x;
		}
	}
	/*<EndProperty Name="System.Double System.Windows.Media.TranslateTransform::X()" />*/
	,
	_y: 0,
	/*<BeginProperty Name="System.Double System.Windows.Media.TranslateTransform::Y()" />*/
	y: function (value) {
		if (arguments.length === 1) {
			this._y = value;
			return value;
		} else {
			return this._y;
		}
	}
	/*<EndProperty Name="System.Double System.Windows.Media.TranslateTransform::Y()" />*/
	,
	$type: new $.ig.Type('TranslateTransform', $.ig.Transform.prototype.$type)
}, true);

/*<EndType Name="System.Windows.Media.TranslateTransform" />*/

/*<BeginType Name="System.Windows.Media.ScaleTransform" />*/

$.ig.util.defType('ScaleTransform', 'Transform', {
	init: function () {
		$.ig.Transform.prototype.init.call(this);
	},
	_scaleX: 0,
	/*<BeginProperty Name="System.Double System.Windows.Media.ScaleTransform::ScaleX()" />*/
	scaleX: function (value) {
		if (arguments.length === 1) {
			this._scaleX = value;
			return value;
		} else {
			return this._scaleX;
		}
	}
	/*<EndProperty Name="System.Double System.Windows.Media.ScaleTransform::ScaleX()" />*/
	,
	_scaleY: 0,
	/*<BeginProperty Name="System.Double System.Windows.Media.ScaleTransform::ScaleY()" />*/
	scaleY: function (value) {
		if (arguments.length === 1) {
			this._scaleY = value;
			return value;
		} else {
			return this._scaleY;
		}
	}
	/*<EndProperty Name="System.Double System.Windows.Media.ScaleTransform::ScaleY()" />*/
	,
	_centerX: 0,
	/*<BeginProperty Name="System.Double System.Windows.Media.ScaleTransform::CenterX()" />*/
	centerX: function (value) {
		if (arguments.length === 1) {
			this._centerX = value;
			return value;
		} else {
			return this._centerX;
		}
	}
	/*<EndProperty Name="System.Double System.Windows.Media.ScaleTransform::CenterX()" />*/
	,
	_centerY: 0,
	/*<BeginProperty Name="System.Double System.Windows.Media.ScaleTransform::CenterY()" />*/
	centerY: function (value) {
		if (arguments.length === 1) {
			this._centerY = value;
			return value;
		} else {
			return this._centerY;
		}
	}
	/*<EndProperty Name="System.Double System.Windows.Media.ScaleTransform::CenterY()" />*/
	,
	$type: new $.ig.Type('ScaleTransform', $.ig.Transform.prototype.$type)
}, true);

/*<EndType Name="System.Windows.Media.ScaleTransform" />*/

/*<BeginType Name="System.Windows.Media.TransformGroup" />*/

$.ig.util.defType('TransformGroup', 'Transform', {
	_children: null,
	/*<BeginProperty Name="System.Windows.Media.TransformCollection System.Windows.Media.TransformGroup::Children()" />*/
	children: function (value) {
		if (arguments.length === 1) {
			this._children = value;
			return value;
		} else {
			return this._children;
		}
	}
	/*<EndProperty Name="System.Windows.Media.TransformCollection System.Windows.Media.TransformGroup::Children()" />*/
	,
	init: function () {
		$.ig.Transform.prototype.init.call(this);
		this.children(new $.ig.TransformCollection());
	},
	$type: new $.ig.Type('TransformGroup', $.ig.Transform.prototype.$type)
}, true);

/*<EndType Name="System.Windows.Media.TransformGroup" />*/

/*<BeginType Name="System.Windows.Media.TransformCollection" />*/

$.ig.util.defType('TransformCollection', 'List$1', {
	init: function () {
		$.ig.List$1.prototype.init.call(this, $.ig.Transform.prototype.$type, 0);
	},
	$type: new $.ig.Type('TransformCollection', $.ig.List$1.prototype.$type.specialize($.ig.Transform.prototype.$type))
}, true);

/*<EndType Name="System.Windows.Media.TransformCollection" />*/

/*<BeginType Name="System.Windows.Input.MouseEventArgs" />*/

$.ig.util.defType('MouseEventArgs', 'EventArgs', {
	init: function () {
		$.ig.EventArgs.prototype.init.call(this);
	},
	_position: null,
	/*<BeginProperty Name="System.Windows.Point System.Windows.Input.MouseEventArgs::Position()" />*/
	position: function (value) {
		if (arguments.length === 1) {
			this._position = value;
			return value;
		} else {
			return this._position;
		}
	}
	/*<EndProperty Name="System.Windows.Point System.Windows.Input.MouseEventArgs::Position()" />*/
	,
	_originalSource: null,
	/*<BeginProperty Name="System.Object System.Windows.Input.MouseEventArgs::OriginalSource()" />*/
	originalSource: function (value) {
		if (arguments.length === 1) {
			this._originalSource = value;
			return value;
		} else {
			return this._originalSource;
		}
	}
	/*<EndProperty Name="System.Object System.Windows.Input.MouseEventArgs::OriginalSource()" />*/
	,
	/*<BeginMethod Name="System.Windows.Point System.Windows.Input.MouseEventArgs::GetPosition(System.Windows.UIElement)" />*/
	getPosition: function (relativeTo) {
		return this.position();
	}
	/*<EndMethod Name="System.Windows.Point System.Windows.Input.MouseEventArgs::GetPosition(System.Windows.UIElement)" />*/
	,
	$type: new $.ig.Type('MouseEventArgs', $.ig.EventArgs.prototype.$type)
}, true);

/*<EndType Name="System.Windows.Input.MouseEventArgs" />*/

/*<BeginType Name="System.Windows.Input.MouseButtonEventArgs" />*/

$.ig.util.defType('MouseButtonEventArgs', 'MouseEventArgs', {
	init: function () {
		$.ig.MouseEventArgs.prototype.init.call(this);
	},
	_handled: false,
	/*<BeginProperty Name="System.Boolean System.Windows.Input.MouseButtonEventArgs::Handled()" />*/
	handled: function (value) {
		if (arguments.length === 1) {
			this._handled = value;
			return value;
		} else {
			return this._handled;
		}
	}
	/*<EndProperty Name="System.Boolean System.Windows.Input.MouseButtonEventArgs::Handled()" />*/
	,
	$type: new $.ig.Type('MouseButtonEventArgs', $.ig.MouseEventArgs.prototype.$type)
}, true);

/*<EndType Name="System.Windows.Input.MouseButtonEventArgs" />*/

/*<BeginType Name="System.Windows.Data.Binding" />*/

$.ig.util.defType('Binding', 'Object', {
	init: function (initNumber) {
		if (initNumber > 0) {
			switch (initNumber) {
				case 1:
					this.init1.apply(this, arguments);
					break;
			}
			return;
		}
		this.__satisfied = false;
		$.ig.Object.prototype.init.call(this);
	},
	init1: function (initNumber, path) {
		this.__satisfied = false;
		$.ig.Object.prototype.init.call(this);
		this.__path = new $.ig.PropertyPath(path);
	},
	__source: null,
	/*<BeginProperty Name="System.Object System.Windows.Data.Binding::Source()" />*/
	source: function (value) {
		if (arguments.length === 1) {
			this.__source = value;
			return value;
		} else {
			return this.__source;
		}
	}
	/*<EndProperty Name="System.Object System.Windows.Data.Binding::Source()" />*/
	,
	__path: null,
	/*<BeginProperty Name="System.Windows.PropertyPath System.Windows.Data.Binding::Path()" />*/
	path: function (value) {
		if (arguments.length === 1) {
			this.__path = value;
			return value;
		} else {
			return this.__path;
		}
	}
	/*<EndProperty Name="System.Windows.PropertyPath System.Windows.Data.Binding::Path()" />*/
	,
	__satisfied: false,
	/*<BeginProperty Name="System.Boolean System.Windows.Data.Binding::Satisfied()" />*/
	satisfied: function (value) {
		if (arguments.length === 1) {
			this.__satisfied = value;
			return value;
		} else {
			return this.__satisfied;
		}
	}
	/*<EndProperty Name="System.Boolean System.Windows.Data.Binding::Satisfied()" />*/
	,
	$type: new $.ig.Type('Binding', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.Windows.Data.Binding" />*/

/*<BeginType Name="System.Windows.Controls.Panel" />*/

$.ig.util.defType('Panel', 'FrameworkElement', {
	init: function () {
		$.ig.FrameworkElement.prototype.init.call(this);
		this.children(new $.ig.UIElementCollection(this));
	},
	_children: null,
	/*<BeginProperty Name="System.Windows.UIElementCollection System.Windows.Controls.Panel::Children()" />*/
	children: function (value) {
		if (arguments.length === 1) {
			this._children = value;
			return value;
		} else {
			return this._children;
		}
	}
	/*<EndProperty Name="System.Windows.UIElementCollection System.Windows.Controls.Panel::Children()" />*/
	,
	$type: new $.ig.Type('Panel', $.ig.FrameworkElement.prototype.$type)
}, true);

/*<EndType Name="System.Windows.Controls.Panel" />*/

/*<BeginType Name="System.Windows.Controls.Canvas" />*/

$.ig.util.defType('Canvas', 'Panel', {
	init: function () {
		$.ig.Panel.prototype.init.call(this);
	},
	$type: new $.ig.Type('Canvas', $.ig.Panel.prototype.$type)
}, true);

/*<EndType Name="System.Windows.Controls.Canvas" />*/

/*<BeginType Name="System.Windows.Controls.Image" />*/

$.ig.util.defType('Image', 'FrameworkElement', {
	init: function () {
		$.ig.FrameworkElement.prototype.init.call(this);
	},
	_source: null,
	/*<BeginProperty Name="System.Object System.Windows.Controls.Image::Source()" />*/
	source: function (value) {
		if (arguments.length === 1) {
			this._source = value;
			return value;
		} else {
			return this._source;
		}
	}
	/*<EndProperty Name="System.Object System.Windows.Controls.Image::Source()" />*/
	,
	_isHitTestVisible: false,
	/*<BeginProperty Name="System.Boolean System.Windows.Controls.Image::IsHitTestVisible()" />*/
	isHitTestVisible: function (value) {
		if (arguments.length === 1) {
			this._isHitTestVisible = value;
			return value;
		} else {
			return this._isHitTestVisible;
		}
	}
	/*<EndProperty Name="System.Boolean System.Windows.Controls.Image::IsHitTestVisible()" />*/
	,
	$type: new $.ig.Type('Image', $.ig.FrameworkElement.prototype.$type)
}, true);

/*<EndType Name="System.Windows.Controls.Image" />*/

/*<BeginType Name="System.Windows.Controls.TextBlock" />*/

$.ig.util.defType('TextBlock', 'FrameworkElement', {
	init: function () {
		this.__textDirty = true;
		this.__widthHistory = null;
		this.__textHistory = null;
		this.__fontContextHistory = null;
		this.__fontVersionHistory = null;
		this.__historyPosition = -1;
		$.ig.FrameworkElement.prototype.init.call(this);
	},
	__text: null,
	/*<BeginProperty Name="System.String System.Windows.Controls.TextBlock::Text()" />*/
	text: function (value) {
		if (arguments.length === 1) {
			if (this.__text != value) {
				this.__textDirty = true;
				this.__text = value;
			}
			return value;
		} else {
			return this.__text;
		}
	}
	/*<EndProperty Name="System.String System.Windows.Controls.TextBlock::Text()" />*/
	,
	_fill: null,
	/*<BeginProperty Name="System.Windows.Media.Brush System.Windows.Controls.TextBlock::Fill()" />*/
	fill: function (value) {
		if (arguments.length === 1) {
			this._fill = value;
			return value;
		} else {
			return this._fill;
		}
	}
	/*<EndProperty Name="System.Windows.Media.Brush System.Windows.Controls.TextBlock::Fill()" />*/
	,
	__textDirty: false,
	__widthHistory: null,
	__textHistory: null,
	__fontContextHistory: null,
	__fontVersionHistory: null,
	__historyPosition: 0,
	/*<BeginMethod Name="System.Double System.Windows.Controls.TextBlock::GetHistoricalWidth(System.Object, System.Int32)" />*/
	getHistoricalWidth: function (fontContext, fontVersion) {
		if (this.__historyPosition == -1) {
			return -1;
		}
		if (!this.__textDirty) {
			if (this.__fontContextHistory[this.__historyPosition] == fontContext) {
				return this.__widthHistory[this.__historyPosition];
			}
		}
		for (var i = 0; i < $.ig.TextBlock.prototype._widthHistoryLength; i++) {
			var index = this.__historyPosition - i;
			if (index < 0) {
				index = ($.ig.TextBlock.prototype._widthHistoryLength) + index;
			}
			if (fontVersion != this.__fontVersionHistory[index] || fontContext != this.__fontContextHistory[index] || this.__text != this.__textHistory[index]) {
				continue;
			}
			return this.__widthHistory[index];
		}
		return -1;
	}
	/*<EndMethod Name="System.Double System.Windows.Controls.TextBlock::GetHistoricalWidth(System.Object, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void System.Windows.Controls.TextBlock::SetHistoricalWidth(System.Object, System.Int32, System.Double)" />*/
	setHistoricalWidth: function (fontContext, fontVersion, width) {
		if (this.__historyPosition == -1) {
			this.__textHistory = new Array($.ig.TextBlock.prototype._widthHistoryLength);
			this.__fontContextHistory = new Array($.ig.TextBlock.prototype._widthHistoryLength);
			this.__fontVersionHistory = new Array($.ig.TextBlock.prototype._widthHistoryLength);
			this.__widthHistory = new Array($.ig.TextBlock.prototype._widthHistoryLength);
		}
		this.__historyPosition++;
		if (this.__historyPosition > $.ig.TextBlock.prototype._widthHistoryLength - 1) {
			this.__historyPosition = 0;
		}
		this.__textHistory[this.__historyPosition] = this.__text;
		this.__fontContextHistory[this.__historyPosition] = fontContext;
		this.__fontVersionHistory[this.__historyPosition] = fontVersion;
		this.__widthHistory[this.__historyPosition] = width;
		this.__textDirty = false;
	}
	/*<EndMethod Name="System.Void System.Windows.Controls.TextBlock::SetHistoricalWidth(System.Object, System.Int32, System.Double)" />*/
	,
	$type: new $.ig.Type('TextBlock', $.ig.FrameworkElement.prototype.$type)
}, true);

/*<EndType Name="System.Windows.Controls.TextBlock" />*/

/*<BeginStatics Name="System.Windows.Clipboard" />*/

$.ig.Clipboard.prototype.__dataObject = null;
/*<EndStatics Name="System.Windows.Clipboard" />*/

/*<BeginStatics Name="System.Windows.DataFormats" />*/

$.ig.DataFormats.prototype.commaSeparatedValue = "CSV";
$.ig.DataFormats.prototype.html = "HTML Format";
$.ig.DataFormats.prototype.stringFormat = "System.String";
$.ig.DataFormats.prototype.text = "Text";
$.ig.DataFormats.prototype.unicodeText = "UnicodeText";
/*<EndStatics Name="System.Windows.DataFormats" />*/

/*<BeginStatics Name="System.Windows.DependencyProperty" />*/

$.ig.DependencyProperty.prototype.unsetValue = new $.ig.UnsetValue();
/*<EndStatics Name="System.Windows.DependencyProperty" />*/

/*<BeginStatics Name="System.Windows.DependencyPropertiesCollection" />*/

$.ig.DependencyPropertiesCollection.prototype.__instance = null;
/*<EndStatics Name="System.Windows.DependencyPropertiesCollection" />*/

/*<BeginStatics Name="System.Windows.Controls.TextBlock" />*/

$.ig.TextBlock.prototype._widthHistoryLength = 5;
/*<EndStatics Name="System.Windows.Controls.TextBlock" />*/


/*<BeginFooter/>*/
}));// REMOVE_FROM_COMBINED_FILES
/*<EndFooter/>*/

