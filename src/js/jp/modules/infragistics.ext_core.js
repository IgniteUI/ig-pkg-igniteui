/*!@license
* Infragistics.Web.ClientUI infragistics.ext_core.js 17.1.20171.1012
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
*/
/*<BeginHeader/>*/
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		define( [
			'./infragistics.util'
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
$.ig.globalDefs.$$0 = $$t;
$.ig.$currDefinitions = $$t;
$.ig.util.bulkDefine([
"IComparable$1:a",
"IEquatable$1:b",
"Action:c",
"Action$1:d",
"Action$2:e",
"Action$3:f",
"Action$4:g",
"Action$5:h",
"Action$6:i",
"Action$7:j",
"Action$8:k",
"Action$9:l",
"Comparison$1:m",
"Error:n",
"FormatException:o",
"IConvertible:p",
"IFormatProvider:q",
"NotSupportedException:r",
"Date:s",
"DateTimeKind:t",
"DayOfWeek:u",
"Number:v",
"EventArgs:w",
"EventHandler$1:x",
"Func$1:y",
"Func$2:z",
"Func$3:aa",
"Func$4:ab",
"Func$5:ac",
"Func$6:ad",
"Func$7:ae",
"Func$8:af",
"Func$9:ag",
"IComparable:ah",
"Nullable$1:ai",
"Nullable:aj",
"Number:ak",
"ParamArrayAttribute:al",
"Enum:am",
"Array:an",
"Attribute:ao",
"AttributeTargets:ap",
"Boolean:aq",
"Number:ar",
"String:as",
"Delegate:at",
"IDisposable:au",
"Number:av",
"Number:aw",
"Number:ax",
"IntPtr:ay",
"MulticastDelegate:az",
"Object:a0",
"ReflectionUtil:a1",
"RuntimeFieldHandle:a2",
"RuntimeTypeHandle:a3",
"SystemException:a4",
"TypeCode:a5",
"Number:a6",
"Script:a7",
"Number:a8",
"StringSplitOptions:a9",
"StringComparison:ba",
"Number:bb",
"Type:bc",
"Number:bd",
"Number:be",
"Number:bf",
"UIntPtr:bg",
"ValueType:bh",
"Void:bi",
"IEqualityComparer:bj",
"ICollection:bk",
"IDictionary:bl",
"IList:bm",
"JSDictionary:bn",
"Array:bo",
"Array:bp",
"Array:bq",
"CompareCallback:br",
"Dictionary:bs",
"DictionaryEntry:bt",
"IEnumerable:bu",
"IEnumerator:bv",
"ICollection$1:bw",
"IEnumerable$1:bx",
"IEnumerator$1:by",
"IEqualityComparer$1:bz",
"IList$1:b0",
"PlaceholderSystemCollectionsObjectModel:b1",
"PlaceholderSystemCollectionsSpecialized:b2",
"EditorBrowsableState:b3",
"ISupportInitialize:b4",
"ITypeDescriptorContext:b5",
"TypeConverter:b6",
"INotifyPropertyChanged:b7",
"PropertyChangedEventArgs:b8",
"PropertyChangedEventHandler:b9",
"Calendar:ca",
"CalendarWeekRule:cb",
"CompareInfo:cc",
"CompareOptions:cd",
"NumberStyles:ce",
"PlaceholderSystemGlobalization:cf",
"CultureInfo:cg",
"DateTimeFormatInfo:ch",
"NumberFormatInfo:ci",
"ConstructorInfo:cj",
"MethodBase:ck",
"MemberInfo:cl",
"MethodInfo:cm",
"ParameterInfo:cn",
"PropertyInfo:co",
"Assembly:cp",
"PlaceholderSystemWindows:cq",
"PlaceholderSystemWindowsControls:cr",
"PlaceholderSystemWindowsControlsPrimitives:cs",
"PlaceholderSystemWindowsData:ct",
"PlaceholderSystemWindowsInput:cu",
"PlaceholderSystemWindowsMarkup:cv",
"PlaceholderSystemWindowsMediaImaging:cw",
"PlaceholderSystemWindowsMediaAnimation:cx",
"PlaceholderSystemWindowsMediaEffects:cy",
"PlaceholderSystemWindowsShapes:cz",
"PlaceholderSystemWindowsAutomation:c0",
"PlaceholderSystemWindowsAutomationPeers:c1",
"PlaceholderSystemWindowsDocuments:c2",
"PlaceholderSystemWindowsInk:c3",
"PlaceholderSystemWindowsThreading:c4",
"PlaceholderSystemText:c5",
"XMLHttpRequest:c6",
"RuntimeHelpers:c7",
"EventWaitHandle:c8",
"Interlocked:c9",
"Monitor:da",
"WaitHandle:db",
"ManualResetEvent:dc",
"Thread:dd",
"ThreadStart:de",
"SeekOrigin:df",
"Stream:dg",
"XmlAttribute:dh",
"XmlDocument:di",
"XmlDocumentParser:dj",
"XmlElement:dk",
"XmlLinkedNode:dl",
"XmlNode:dm",
"XmlNodeList:dn",
"XmlNamedNodeMap:dp",
"XmlNodeType:dq",
"XmlSchemaForm:dr",
"PlaceholderInfragisticsControlerChartsAutomationPeers:ds"]);
$.ig = $.ig || {};
var $$t = {};
$.ig.globalDefs = $.ig.globalDefs || {};
$.ig.globalDefs.$$1 = $$t;
$.ig.$currDefinitions = $$t;
$.ig.util.bulkDefine([
"DomRenderer:a",
"DomWrapper:b",
"DomWrapperPosition:c",
"INormalizedEvent:d",
"CanvasElement:e",
"DivElement:f",
"Element:g",
"ElementAttribute:h",
"ElementAttributeCollection:i",
"ElementCollection:j",
"ElementEventHandler:k",
"ElementNodeType:l",
"EventListener:m",
"IElementEventHandler:n",
"ImageElement:o",
"WebStyle:p",
"Callback:q",
"CanvasContext:r",
"CanvasContext2D:s",
"ImageData:t",
"Gradient:u",
"TextMetrics:v",
"JQuery:w",
"JQueryObject:x",
"JQueryCallback:y",
"JQueryUICallback:z",
"JQueryPosition:aa"]);
$.ig = $.ig || {};
var $$t = {};
$.ig.globalDefs = $.ig.globalDefs || {};
$.ig.globalDefs.$$6 = $$t;
$$0 = $.ig.globalDefs.$$0;
$$1 = $.ig.globalDefs.$$1;
$.ig.$currDefinitions = $$t;
$.ig.util.bulkDefine([
"IFormattable:n",
"Predicate$1:r",
"IComparer:aa",
"Comparer$1:ab",
"DefaultComparer$1:ac",
"IComparer$1:ad",
"AsyncCompletedEventHandler:af"]);
/*<BeginType Name="System.ComponentModel.ListSortDirection" />*/

$.ig.util.defEnum('ListSortDirection', false, false, {
	Ascending: 0,
	Descending: 1
});

/*<EndType Name="System.ComponentModel.ListSortDirection" />*/

/*<BeginType Name="System.UriKind" />*/

$.ig.util.defEnum('UriKind', false, false, {
	RelativeOrAbsolute: 0,
	Absolute: 1,
	Relative: 2
});

/*<EndType Name="System.UriKind" />*/

/*<BeginType Name="System.Guid_GuidStyles" />*/

$.ig.util.defEnum('Guid_GuidStyles', true, false, {
	AllowBraces: 2,
	AllowDashes: 4,
	AllowHexPrefix: 8,
	AllowParenthesis: 1,
	Any: 15,
	BraceFormat: 96,
	DigitFormat: 64,
	HexFormat: 160,
	None: 0,
	NumberFormat: 0,
	ParenthesisFormat: 80,
	RequireBraces: 32,
	RequireDashes: 64,
	RequireHexPrefix: 128,
	RequireParenthesis: 16
});

/*<EndType Name="System.Guid_GuidStyles" />*/

/*<BeginType Name="System.Guid_GuidParseThrowStyle" />*/

$.ig.util.defEnum('Guid_GuidParseThrowStyle', false, false, {
	None: 0,
	All: 1,
	AllButOverflow: 2
});

/*<EndType Name="System.Guid_GuidParseThrowStyle" />*/

/*<BeginType Name="System.Guid_ParseFailureKind" />*/

$.ig.util.defEnum('Guid_ParseFailureKind', false, false, {
	None: 0,
	ArgumentNull: 1,
	Format: 2,
	FormatWithParameter: 3,
	NativeException: 4,
	FormatWithInnerException: 5
});

/*<EndType Name="System.Guid_ParseFailureKind" />*/

/*<BeginType Name="System.GC" />*/

$.ig.util.defType('GC', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	$type: new $.ig.Type('GC', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.GC" />*/

/*<BeginType Name="System.Activator" />*/

$.ig.util.defType('Activator', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Object System.Activator::CreateInstance(System.Type)" />*/
	createInstance: function (type) {
		return null;
	}
	/*<EndMethod Name="System.Object System.Activator::CreateInstance(System.Type)" />*/
	,
	/*<BeginMethod Name="System.Object System.Activator::CreateInstance(System.Type, )" />*/
	createInstance1: function (type, args) {
		return null;
	}
	/*<EndMethod Name="System.Object System.Activator::CreateInstance(System.Type, )" />*/
	,
	/*<BeginMethod Name="System.Activator.T System.Activator::CreateInstance`1()" />*/
	createInstance$1: function ($t) {
		return $.ig.util.getDefaultValue($t);
	}
	/*<EndMethod Name="System.Activator.T System.Activator::CreateInstance`1()" />*/
	,
	$type: new $.ig.Type('Activator', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.Activator" />*/

/*<BeginType Name="System.AggregateException" />*/

$.ig.util.defType('AggregateException', 'Error', {
	init: function (initNumber) {
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
		$.ig.Error.prototype.init.call(this, 0);
	},
	init1: function (initNumber, message) {
		$.ig.Error.prototype.init1.call(this, 1, message);
	},
	init2: function (initNumber, message, innerException) {
		$.ig.Error.prototype.init2.call(this, 2, message, innerException);
	},
	$type: new $.ig.Type('AggregateException', $.ig.Error.prototype.$type)
}, true);

/*<EndType Name="System.AggregateException" />*/

/*<BeginType Name="System.ArgumentException" />*/

$.ig.util.defType('ArgumentException', 'Error', {
	init: function (initNumber) {
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
			}
			return;
		}
		$.ig.Error.prototype.init.call(this, 0);
	},
	init1: function (initNumber, message) {
		$.ig.Error.prototype.init1.call(this, 1, message);
	},
	init2: function (initNumber, message, paramName) {
		$.ig.Error.prototype.init1.call(this, 1, message);
	},
	init3: function (initNumber, message, innerException) {
		$.ig.Error.prototype.init2.call(this, 2, message, innerException);
	},
	$type: new $.ig.Type('ArgumentException', $.ig.Error.prototype.$type)
}, true);

/*<EndType Name="System.ArgumentException" />*/

/*<BeginType Name="System.ArgumentNullException" />*/

$.ig.util.defType('ArgumentNullException', 'Error', {
	init: function (initNumber, argumentName) {
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
		$.ig.Error.prototype.init1.call(this, 1, argumentName + " cannot be null.");
	},
	init1: function (initNumber) {
		$.ig.Error.prototype.init.call(this, 0);
		throw new $.ig.NotImplementedException(0);
	},
	init2: function (initNumber, paramName, message) {
		$.ig.Error.prototype.init1.call(this, 1, message);
		throw new $.ig.NotImplementedException(0);
	},
	$type: new $.ig.Type('ArgumentNullException', $.ig.Error.prototype.$type)
}, true);

/*<EndType Name="System.ArgumentNullException" />*/

/*<BeginType Name="System.ArgumentOutOfRangeException" />*/

$.ig.util.defType('ArgumentOutOfRangeException', 'ArgumentException', {
	init: function (initNumber) {
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
		$.ig.ArgumentException.prototype.init.call(this, 0);
	},
	init1: function (initNumber, argumentName) {
		$.ig.ArgumentException.prototype.init1.call(this, 1, argumentName + " is out of range.");
	},
	init2: function (initNumber, paramName, errorMessage) {
		$.ig.ArgumentException.prototype.init1.call(this, 1, errorMessage);
	},
	init3: function (initNumber, paramName, value, message) {
		$.ig.ArgumentOutOfRangeException.prototype.init2.call(this, 2, message, paramName);
	},
	init4: function (initNumber, message, innerException) {
		$.ig.ArgumentException.prototype.init3.call(this, 3, message, innerException);
	},
	$type: new $.ig.Type('ArgumentOutOfRangeException', $.ig.ArgumentException.prototype.$type)
}, true);

/*<EndType Name="System.ArgumentOutOfRangeException" />*/

/*<BeginType Name="System.Convert" />*/

$.ig.util.defType('Convert', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Double System.Convert::ToDouble(System.Single)" />*/
	toDouble5: function (value) {
		return value;
	}
	/*<EndMethod Name="System.Double System.Convert::ToDouble(System.Single)" />*/
	,
	/*<BeginMethod Name="System.Double System.Convert::ToDouble(System.Double)" />*/
	toDouble1: function (value) {
		return value;
	}
	/*<EndMethod Name="System.Double System.Convert::ToDouble(System.Double)" />*/
	,
	/*<BeginMethod Name="System.Double System.Convert::ToDouble(System.Decimal)" />*/
	toDouble: function (value) {
		return value;
	}
	/*<EndMethod Name="System.Double System.Convert::ToDouble(System.Decimal)" />*/
	,
	/*<BeginMethod Name="System.Double System.Convert::ToDouble(System.Int64)" />*/
	toDouble2: function (value) {
		return value;
	}
	/*<EndMethod Name="System.Double System.Convert::ToDouble(System.Int64)" />*/
	,
	/*<BeginMethod Name="System.Decimal System.Convert::ToDecimal(System.Double)" />*/
	toDecimal: function (value) {
		return value;
	}
	/*<EndMethod Name="System.Decimal System.Convert::ToDecimal(System.Double)" />*/
	,
	/*<BeginMethod Name="System.Decimal System.Convert::ToDecimal(System.Single)" />*/
	toDecimal3: function (value) {
		return value;
	}
	/*<EndMethod Name="System.Decimal System.Convert::ToDecimal(System.Single)" />*/
	,
	/*<BeginMethod Name="System.Decimal System.Convert::ToDecimal(System.Int64)" />*/
	toDecimal1: function (value) {
		return value;
	}
	/*<EndMethod Name="System.Decimal System.Convert::ToDecimal(System.Int64)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Convert::ToInt32(System.Number)" />*/
	toInt32: function (value) {
		if (value >= 0) {
			var ret = $.ig.truncate(Math.floor(value));
			var diff1 = value - ret;
			var diff2 = Math.ceil(value) - value;
			if (diff1 > diff2 || ((diff1 == diff2) && (ret & 1) > 0)) {
				ret++;
			}
			return ret;
		} else {
			var ret1 = $.ig.truncate(Math.ceil(value));
			var diff11 = ret1 - value;
			var diff21 = value - Math.floor(value);
			if (diff11 > diff21 || ((diff11 == diff21) && (ret1 & 1) > 0)) {
				ret1--;
			}
			return ret1;
		}
	}
	/*<EndMethod Name="System.Int32 System.Convert::ToInt32(System.Number)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Convert::ToInt32(System.String)" />*/
	toInt322: function (value) {
		return parseInt(value);
	}
	/*<EndMethod Name="System.Int32 System.Convert::ToInt32(System.String)" />*/
	,
	/*<BeginMethod Name="System.Double System.Convert::ToDouble(System.Object)" />*/
	toDouble3: function (value) {
		return $.ig.Convert.prototype.toDouble4(value, $.ig.CultureInfo.prototype.currentCulture());
	}
	/*<EndMethod Name="System.Double System.Convert::ToDouble(System.Object)" />*/
	,
	/*<BeginMethod Name="System.Double System.Convert::ToDouble(System.Object, System.IFormatProvider)" />*/
	toDouble4: function (value, provider) {
		var valueResolved = $.ig.util.getValue($.ig.util.unwrapNullable(value));
		if (valueResolved == null) {
			return 0;
		}
		var result = +valueResolved;
		if ($.ig.util.isNaN(result)) {
			return (valueResolved).toDouble(provider);
		}
		return result;
	}
	/*<EndMethod Name="System.Double System.Convert::ToDouble(System.Object, System.IFormatProvider)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Convert::ToInt32(System.Object)" />*/
	toInt321: function (value) {
		var valueResolved = $.ig.util.getValue($.ig.util.unwrapNullable(value));
		if (valueResolved == null) {
			return 0;
		}
		var result = +valueResolved;
		if ($.ig.util.isNaN(result)) {
			return (valueResolved).toInt32($.ig.CultureInfo.prototype.currentCulture());
		}
		return result;
	}
	/*<EndMethod Name="System.Int32 System.Convert::ToInt32(System.Object)" />*/
	,
	/*<BeginMethod Name="System.Int64 System.Convert::ToInt64(System.Object)" />*/
	toInt64: function (value) {
		var valueResolved = $.ig.util.getValue($.ig.util.unwrapNullable(value));
		if (valueResolved == null) {
			return 0;
		}
		var result = +valueResolved;
		if ($.ig.util.isNaN(result)) {
			return (valueResolved).toInt64($.ig.CultureInfo.prototype.currentCulture());
		}
		return result;
	}
	/*<EndMethod Name="System.Int64 System.Convert::ToInt64(System.Object)" />*/
	,
	/*<BeginMethod Name="System.Decimal System.Convert::ToDecimal(System.Object)" />*/
	toDecimal2: function (value) {
		var valueResolved = $.ig.util.getValue($.ig.util.unwrapNullable(value));
		if (valueResolved == null) {
			return 0;
		}
		var result = +valueResolved;
		if ($.ig.util.isNaN(result)) {
			return (valueResolved).toDecimal($.ig.CultureInfo.prototype.currentCulture());
		}
		return result;
	}
	/*<EndMethod Name="System.Decimal System.Convert::ToDecimal(System.Object)" />*/
	,
	/*<BeginMethod Name="System.Byte System.Convert::ToByte(System.Boolean)" />*/
	toByte: function (value) {
		return (value ? 1 : 0);
	}
	/*<EndMethod Name="System.Byte System.Convert::ToByte(System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Byte System.Convert::ToByte(System.Object)" />*/
	toByte1: function (value) {
		var valueResolved = $.ig.util.getValue($.ig.util.unwrapNullable(value));
		if (valueResolved == null) {
			return 0;
		}
		var result = +valueResolved;
		if ($.ig.util.isNaN(result)) {
			return (valueResolved).toByte($.ig.CultureInfo.prototype.currentCulture());
		}
		return result;
	}
	/*<EndMethod Name="System.Byte System.Convert::ToByte(System.Object)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Convert::ToBoolean(System.Object)" />*/
	toBoolean: function (value) {
		var valueResolved = $.ig.util.getValue($.ig.util.unwrapNullable(value));
		if (valueResolved == null) {
			return false;
		}
		return !!valueResolved;
	}
	/*<EndMethod Name="System.Boolean System.Convert::ToBoolean(System.Object)" />*/
	,
	/*<BeginMethod Name="System.DateTime System.Convert::ToDateTime(System.Object)" />*/
	toDateTime: function (value) {
		var valueResolved = $.ig.util.getValue($.ig.util.unwrapNullable(value));
		if (valueResolved == null) {
			return $.ig.Date.prototype.minValue();
		}
		return $.ig.Date.prototype.parse(valueResolved.toString(), null);
	}
	/*<EndMethod Name="System.DateTime System.Convert::ToDateTime(System.Object)" />*/
	,
	/*<BeginMethod Name="System.Char System.Convert::ToChar(System.Byte)" />*/
	toChar: function (value) {
		return String.fromCharCode(value);
	}
	/*<EndMethod Name="System.Char System.Convert::ToChar(System.Byte)" />*/
	,
	/*<BeginMethod Name="System.Char System.Convert::ToChar(System.Int32)" />*/
	toChar1: function (value) {
		return String.fromCharCode(value);
	}
	/*<EndMethod Name="System.Char System.Convert::ToChar(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Double System.Convert::ToDouble(System.String, System.IFormatProvider)" />*/
	toDouble6: function (value, provider) {
		return $.ig.util.parseNumber(value, provider);
	}
	/*<EndMethod Name="System.Double System.Convert::ToDouble(System.String, System.IFormatProvider)" />*/
	,
	/*<BeginMethod Name="System.UInt16 System.Convert::ToUInt16(System.Boolean)" />*/
	toUInt16: function (value) {
		return (value ? 1 : 0);
	}
	/*<EndMethod Name="System.UInt16 System.Convert::ToUInt16(System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Convert::ToBoolean(System.UInt16)" />*/
	toBoolean1: function (value) {
		return value != 0;
	}
	/*<EndMethod Name="System.Boolean System.Convert::ToBoolean(System.UInt16)" />*/
	,
	/*<BeginMethod Name="System.UInt32 System.Convert::ToUInt32(System.Byte)" />*/
	toUInt32: function (value) {
		return value;
	}
	/*<EndMethod Name="System.UInt32 System.Convert::ToUInt32(System.Byte)" />*/
	,
	/*<BeginMethod Name=" System.Convert::FromBase64String(System.String)" />*/
	fromBase64String: function (s) {
		return $.ig.util.b64toUint8Array(s);
	}
	/*<EndMethod Name=" System.Convert::FromBase64String(System.String)" />*/
	,
	/*<BeginMethod Name="System.String System.Convert::ToBase64String()" />*/
	toBase64String: function (inArray) {
		return $.ig.util.uint8ArraytoB64(inArray);
	}
	/*<EndMethod Name="System.String System.Convert::ToBase64String()" />*/
	,
	/*<BeginMethod Name="System.Byte System.Convert::ToByte(System.String, System.Int32)" />*/
	toByte2: function (value, fromBase) {
		throw new $.ig.NotImplementedException(0);
		return 0;
	}
	/*<EndMethod Name="System.Byte System.Convert::ToByte(System.String, System.Int32)" />*/
	,
	$type: new $.ig.Type('Convert', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.Convert" />*/

/*<BeginType Name="System.Environment" />*/

$.ig.util.defType('Environment', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginProperty Name="System.String System.Environment::NewLine()" />*/
	newLine: function () {
		return "\n";
	}
	/*<EndProperty Name="System.String System.Environment::NewLine()" />*/
	,
	$type: new $.ig.Type('Environment', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.Environment" />*/

/*<BeginType Name="System.IFormattable" />*/

$.ig.util.defType('IFormattable', 'Object', {
	$type: new $.ig.Type('IFormattable', null)
}, true);

/*<EndType Name="System.IFormattable" />*/

/*<BeginType Name="System.Guid" />*/

$.ig.util.defType('Guid', 'ValueType', {
	init: function (initNumber) {
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
			}
			return;
		}
		$.ig.ValueType.prototype.init.call(this);
	},
	__a: 0,
	__b: 0,
	__c: 0,
	__d: 0,
	__e: 0,
	__f: 0,
	__g: 0,
	__h: 0,
	__i: 0,
	__j: 0,
	__k: 0,
	init1: function (initNumber, b) {
		$.ig.ValueType.prototype.init.call(this);
		this.__a = (((b[3] << 24) | (b[2] << 16)) | (b[1] << 8)) | b[0];
		this.__b = ((b[5] << 8) | b[4]);
		this.__c = ((b[7] << 8) | b[6]);
		this.__d = b[8];
		this.__e = b[9];
		this.__f = b[10];
		this.__g = b[11];
		this.__h = b[12];
		this.__i = b[13];
		this.__j = b[14];
		this.__k = b[15];
	},
	init2: function (initNumber, a, b, c, d, e, f, g, h, i, j, k) {
		$.ig.ValueType.prototype.init.call(this);
		this.__a = a;
		this.__b = b;
		this.__c = c;
		this.__d = d;
		this.__e = e;
		this.__f = f;
		this.__g = g;
		this.__h = h;
		this.__i = i;
		this.__j = j;
		this.__k = k;
	},
	init3: function (initNumber, g) {
		$.ig.ValueType.prototype.init.call(this);
		if (g == null) {
			throw new $.ig.ArgumentNullException(0, "g");
		}
		var result = new $.ig.Guid_GuidResult();
		result.init($.ig.Guid_GuidParseThrowStyle.prototype.all);
		if (!(function () { var $ret = $.ig.Guid.prototype.tryParseGuid(g, $.ig.Guid_GuidStyles.prototype.any, result); result = $ret.p2; return $ret.ret; }())) {
			throw result.getGuidParseException();
		}
		this.__a = result._parsedGuid.__a;
		this.__b = result._parsedGuid.__b;
		this.__c = result._parsedGuid.__c;
		this.__d = result._parsedGuid.__d;
		this.__e = result._parsedGuid.__e;
		this.__f = result._parsedGuid.__f;
		this.__g = result._parsedGuid.__g;
		this.__h = result._parsedGuid.__h;
		this.__i = result._parsedGuid.__i;
		this.__j = result._parsedGuid.__j;
		this.__k = result._parsedGuid.__k;
	},
	/*<BeginMethod Name="System.Int32 System.Guid::CompareTo(System.Guid)" />*/
	compareTo1: function (value) {
		var result = this.__a - value.__a;
		if (result != 0) {
			return result;
		}
		result = this.__b - value.__b;
		if (result != 0) {
			return result;
		}
		result = this.__c - value.__c;
		if (result != 0) {
			return result;
		}
		result = this.__d - value.__d;
		if (result != 0) {
			return result;
		}
		result = this.__e - value.__e;
		if (result != 0) {
			return result;
		}
		result = this.__f - value.__f;
		if (result != 0) {
			return result;
		}
		result = this.__g - value.__g;
		if (result != 0) {
			return result;
		}
		result = this.__h - value.__h;
		if (result != 0) {
			return result;
		}
		result = this.__i - value.__i;
		if (result != 0) {
			return result;
		}
		result = this.__j - value.__j;
		if (result != 0) {
			return result;
		}
		result = this.__k - value.__k;
		return result;
	}
	/*<EndMethod Name="System.Int32 System.Guid::CompareTo(System.Guid)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Guid::CompareTo(System.Object)" />*/
	compareTo: function (value) {
		if ($.ig.util.cast($.ig.Guid.prototype.$type, value) !== null) {
			return this.compareTo1(value);
		}
		return 1;
	}
	/*<EndMethod Name="System.Int32 System.Guid::CompareTo(System.Object)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Guid::Equals(System.Guid)" />*/
	equals: function (g) {
		return $.ig.Guid.prototype.l_op_Equality(this, g);
	}
	/*<EndMethod Name="System.Boolean System.Guid::Equals(System.Guid)" />*/
	,
	/*<BeginMethod Name="System.Guid System.Guid::NewGuid()" />*/
	newGuid: function () {
		return new $.ig.Guid(3, $.ig.util.createGuid());
	}
	/*<EndMethod Name="System.Guid System.Guid::NewGuid()" />*/
	,
	/*<BeginMethod Name=" System.Guid::ToByteArray()" />*/
	toByteArray: function () {
		return [ (this.__a), (this.__a >> 8), (this.__a >> 16), (this.__a >> 24), (this.__b), (this.__b >> 8), (this.__c), (this.__c >> 8), this.__d, this.__e, this.__f, this.__g, this.__h, this.__i, this.__j, this.__k ];
	}
	/*<EndMethod Name=" System.Guid::ToByteArray()" />*/
	,
	/*<BeginMethod Name="System.String System.Guid::ToString()" />*/
	toString: function () {
		return this.toString1("D", null);
	}
	/*<EndMethod Name="System.String System.Guid::ToString()" />*/
	,
	/*<BeginMethod Name="System.String System.Guid::ToString(System.String)" />*/
	toString2: function (format) {
		return this.toString1(format, null);
	}
	/*<EndMethod Name="System.String System.Guid::ToString(System.String)" />*/
	,
	/*<BeginMethod Name="System.String System.Guid::ToString(System.String, System.IFormatProvider)" />*/
	toString1: function (format, provider) {
		var chArray;
		if ((format == null) || (format.length == 0)) {
			format = "D";
		}
		var offset = 0;
		var length = 38;
		var flag = true;
		var flag2 = false;
		if (format.length != 1) {
			throw new $.ig.FormatException(0);
		}
		var ch = format.charAt(0);
		switch (ch) {
			case 'D':
			case 'd':
				chArray = new Array(36);
				length = 36;
				break;
			case 'N':
			case 'n':
				chArray = new Array(32);
				length = 32;
				flag = false;
				break;
			case 'B':
			case 'b':
				chArray = new Array(38);
				chArray[offset++] = '{';
				chArray[37] = '}';
				break;
			case 'P':
			case 'p':
				chArray = new Array(38);
				chArray[offset++] = '(';
				chArray[37] = ')';
				break;
			default:
				if ((ch != 'X') && (ch != 'x')) {
					throw new $.ig.FormatException(0);
				}
				chArray = new Array(68);
				chArray[offset++] = '{';
				chArray[67] = '}';
				length = 68;
				flag = false;
				flag2 = true;
				break;
		}
		if (flag2) {
			chArray[offset++] = '0';
			chArray[offset++] = 'x';
			offset = $.ig.Guid.prototype.hexsToChars(chArray, offset, this.__a >> 24, this.__a >> 16);
			offset = $.ig.Guid.prototype.hexsToChars(chArray, offset, this.__a >> 8, this.__a);
			chArray[offset++] = ',';
			chArray[offset++] = '0';
			chArray[offset++] = 'x';
			offset = $.ig.Guid.prototype.hexsToChars(chArray, offset, this.__b >> 8, this.__b);
			chArray[offset++] = ',';
			chArray[offset++] = '0';
			chArray[offset++] = 'x';
			offset = $.ig.Guid.prototype.hexsToChars(chArray, offset, this.__c >> 8, this.__c);
			chArray[offset++] = ',';
			chArray[offset++] = '{';
			offset = $.ig.Guid.prototype.hexsToChars1(chArray, offset, this.__d, this.__e, true);
			chArray[offset++] = ',';
			offset = $.ig.Guid.prototype.hexsToChars1(chArray, offset, this.__f, this.__g, true);
			chArray[offset++] = ',';
			offset = $.ig.Guid.prototype.hexsToChars1(chArray, offset, this.__h, this.__i, true);
			chArray[offset++] = ',';
			offset = $.ig.Guid.prototype.hexsToChars1(chArray, offset, this.__j, this.__k, true);
			chArray[offset++] = '}';
		} else {
			offset = $.ig.Guid.prototype.hexsToChars(chArray, offset, this.__a >> 24, this.__a >> 16);
			offset = $.ig.Guid.prototype.hexsToChars(chArray, offset, this.__a >> 8, this.__a);
			if (flag) {
				chArray[offset++] = '-';
			}
			offset = $.ig.Guid.prototype.hexsToChars(chArray, offset, this.__b >> 8, this.__b);
			if (flag) {
				chArray[offset++] = '-';
			}
			offset = $.ig.Guid.prototype.hexsToChars(chArray, offset, this.__c >> 8, this.__c);
			if (flag) {
				chArray[offset++] = '-';
			}
			offset = $.ig.Guid.prototype.hexsToChars(chArray, offset, this.__d, this.__e);
			if (flag) {
				chArray[offset++] = '-';
			}
			offset = $.ig.Guid.prototype.hexsToChars(chArray, offset, this.__f, this.__g);
			offset = $.ig.Guid.prototype.hexsToChars(chArray, offset, this.__h, this.__i);
			offset = $.ig.Guid.prototype.hexsToChars(chArray, offset, this.__j, this.__k);
		}
		return $.ig.util.createString3(chArray, 0, length);
	}
	/*<EndMethod Name="System.String System.Guid::ToString(System.String, System.IFormatProvider)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Guid::HexsToChars(, System.Int32, System.Int32, System.Int32)" />*/
	hexsToChars: function (guidChars, offset, a, b) {
		return $.ig.Guid.prototype.hexsToChars1(guidChars, offset, a, b, false);
	}
	/*<EndMethod Name="System.Int32 System.Guid::HexsToChars(, System.Int32, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Guid::HexsToChars(, System.Int32, System.Int32, System.Int32, System.Boolean)" />*/
	hexsToChars1: function (guidChars, offset, a, b, hex) {
		if (hex) {
			guidChars[offset++] = '0';
			guidChars[offset++] = 'x';
		}
		guidChars[offset++] = $.ig.Guid.prototype.hexToChar(a >> 4);
		guidChars[offset++] = $.ig.Guid.prototype.hexToChar(a);
		if (hex) {
			guidChars[offset++] = ',';
			guidChars[offset++] = '0';
			guidChars[offset++] = 'x';
		}
		guidChars[offset++] = $.ig.Guid.prototype.hexToChar(b >> 4);
		guidChars[offset++] = $.ig.Guid.prototype.hexToChar(b);
		return offset;
	}
	/*<EndMethod Name="System.Int32 System.Guid::HexsToChars(, System.Int32, System.Int32, System.Int32, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Char System.Guid::HexToChar(System.Int32)" />*/
	hexToChar: function (a) {
		a &= 15;
		return ((a > 9) ? (String.fromCharCode(((a - 10) + 97))) : (String.fromCharCode((a + 48))));
	}
	/*<EndMethod Name="System.Char System.Guid::HexToChar(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Guid::TryParse(System.String, System.Guid)" />*/
	tryParse: function (input, result) {
		var result2 = new $.ig.Guid_GuidResult();
		result2.init($.ig.Guid_GuidParseThrowStyle.prototype.none);
		if ((function () { var $ret = $.ig.Guid.prototype.tryParseGuid(input, $.ig.Guid_GuidStyles.prototype.any, result2); result2 = $ret.p2; return $ret.ret; }())) {
			result = result2._parsedGuid;
			return {
				ret: true,
				p1: result
			};
		}
		result = $.ig.Guid.prototype.empty;
		return {
			ret: false,
			p1: result
		};
	}
	/*<EndMethod Name="System.Boolean System.Guid::TryParse(System.String, System.Guid)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Guid::TryParseGuid(System.String, System.Guid_GuidStyles, System.Guid_GuidResult)" />*/
	tryParseGuid: function (g, flags, result) {
		if (g == null) {
			result.setFailure1($.ig.Guid_ParseFailureKind.prototype.format, "Format_GuidUnrecognized");
			return {
				ret: false,
				p2: result
			};
		}
		var guidString = g.trim([]);
		if (guidString.length == 0) {
			result.setFailure1($.ig.Guid_ParseFailureKind.prototype.format, "Format_GuidUnrecognized");
			return {
				ret: false,
				p2: result
			};
		}
		var flag = guidString.indexOf('-', 0) >= 0;
		if (flag) {
			if ((flags & ($.ig.Guid_GuidStyles.prototype.digitFormat | $.ig.Guid_GuidStyles.prototype.allowDashes)) == $.ig.Guid_GuidStyles.prototype.none) {
				result.setFailure1($.ig.Guid_ParseFailureKind.prototype.format, "Format_GuidUnrecognized");
				return {
					ret: false,
					p2: result
				};
			}
		} else if ((flags & $.ig.Guid_GuidStyles.prototype.digitFormat) != $.ig.Guid_GuidStyles.prototype.none) {
			result.setFailure1($.ig.Guid_ParseFailureKind.prototype.format, "Format_GuidUnrecognized");
			return {
				ret: false,
				p2: result
			};
		}
		var flag2 = guidString.indexOf('{', 0) >= 0;
		if (flag2) {
			if ((flags & ($.ig.Guid_GuidStyles.prototype.requireBraces | $.ig.Guid_GuidStyles.prototype.allowBraces)) == $.ig.Guid_GuidStyles.prototype.none) {
				result.setFailure1($.ig.Guid_ParseFailureKind.prototype.format, "Format_GuidUnrecognized");
				return {
					ret: false,
					p2: result
				};
			}
		} else if ((flags & $.ig.Guid_GuidStyles.prototype.requireBraces) != $.ig.Guid_GuidStyles.prototype.none) {
			result.setFailure1($.ig.Guid_ParseFailureKind.prototype.format, "Format_GuidUnrecognized");
			return {
				ret: false,
				p2: result
			};
		}
		if (guidString.indexOf('(', 0) >= 0) {
			if ((flags & ($.ig.Guid_GuidStyles.prototype.requireParenthesis | $.ig.Guid_GuidStyles.prototype.allowParenthesis)) == $.ig.Guid_GuidStyles.prototype.none) {
				result.setFailure1($.ig.Guid_ParseFailureKind.prototype.format, "Format_GuidUnrecognized");
				return {
					ret: false,
					p2: result
				};
			}
		} else if ((flags & $.ig.Guid_GuidStyles.prototype.requireParenthesis) != $.ig.Guid_GuidStyles.prototype.none) {
			result.setFailure1($.ig.Guid_ParseFailureKind.prototype.format, "Format_GuidUnrecognized");
			return {
				ret: false,
				p2: result
			};
		}
		try {
			if (flag) {
				return {
					ret: (function () { var $ret = $.ig.Guid.prototype.tryParseGuidWithDashes(guidString, result); result = $ret.p1; return $ret.ret; }()),
					p2: result
				};
			}
			if (flag2) {
				return {
					ret: (function () { var $ret = $.ig.Guid.prototype.tryParseGuidWithHexPrefix(guidString, result); result = $ret.p1; return $ret.ret; }()),
					p2: result
				};
			}
			return {
				ret: (function () { var $ret = $.ig.Guid.prototype.tryParseGuidWithNoStyle(guidString, result); result = $ret.p1; return $ret.ret; }()),
				p2: result
			};
		}
		catch (e) {
			var e1 = $.ig.util.cast($.ig.IndexOutOfRangeException.prototype.$type, e);
			if (e1 != null) {
				result.setFailure3($.ig.Guid_ParseFailureKind.prototype.formatWithInnerException, "Format_GuidUnrecognized", null, null, e1);
				return {
					ret: false,
					p2: result
				};
			}
			var e2 = $.ig.util.cast($.ig.ArgumentException.prototype.$type, e);
			if (e2 != null) {
				result.setFailure3($.ig.Guid_ParseFailureKind.prototype.formatWithInnerException, "Format_GuidUnrecognized", null, null, e2);
				return {
					ret: false,
					p2: result
				};
			}
			throw e;
		}
	}
	/*<EndMethod Name="System.Boolean System.Guid::TryParseGuid(System.String, System.Guid_GuidStyles, System.Guid_GuidResult)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Guid::TryParseGuidWithDashes(System.String, System.Guid_GuidResult)" />*/
	tryParseGuidWithDashes: function (guidString, result) {
		var num2;
		var num3;
		var num4;
		var num = 0;
		var parsePos = 0;
		if (guidString.charAt(0) == '{') {
			if ((guidString.length != 38) || (guidString.charAt(37) != '}')) {
				result.setFailure1($.ig.Guid_ParseFailureKind.prototype.format, "Format_GuidInvLen");
				return {
					ret: false,
					p1: result
				};
			}
			num = 1;
		} else if (guidString.charAt(0) == '(') {
			if ((guidString.length != 38) || (guidString.charAt(37) != ')')) {
				result.setFailure1($.ig.Guid_ParseFailureKind.prototype.format, "Format_GuidInvLen");
				return {
					ret: false,
					p1: result
				};
			}
			num = 1;
		} else if (guidString.length != 36) {
			result.setFailure1($.ig.Guid_ParseFailureKind.prototype.format, "Format_GuidInvLen");
			return {
				ret: false,
				p1: result
			};
		}
		if (((guidString.charAt(8 + num) != '-') || (guidString.charAt(13 + num) != '-')) || ((guidString.charAt(18 + num) != '-') || (guidString.charAt(23 + num) != '-'))) {
			result.setFailure1($.ig.Guid_ParseFailureKind.prototype.format, "Format_GuidDashes");
			return {
				ret: false,
				p1: result
			};
		}
		parsePos = num;
		if (!(function () { var $ret = $.ig.Guid.prototype.stringToInt1(guidString, parsePos, 8, 8192, num2, result); parsePos = $ret.p1; num2 = $ret.p4; result = $ret.p5; return $ret.ret; }())) {
			return {
				ret: false,
				p1: result
			};
		}
		result._parsedGuid.__a = num2;
		parsePos++;
		if (!(function () { var $ret = $.ig.Guid.prototype.stringToInt1(guidString, parsePos, 4, 8192, num2, result); parsePos = $ret.p1; num2 = $ret.p4; result = $ret.p5; return $ret.ret; }())) {
			return {
				ret: false,
				p1: result
			};
		}
		result._parsedGuid.__b = num2;
		parsePos++;
		if (!(function () { var $ret = $.ig.Guid.prototype.stringToInt1(guidString, parsePos, 4, 8192, num2, result); parsePos = $ret.p1; num2 = $ret.p4; result = $ret.p5; return $ret.ret; }())) {
			return {
				ret: false,
				p1: result
			};
		}
		result._parsedGuid.__c = num2;
		parsePos++;
		if (!(function () { var $ret = $.ig.Guid.prototype.stringToInt1(guidString, parsePos, 4, 8192, num2, result); parsePos = $ret.p1; num2 = $ret.p4; result = $ret.p5; return $ret.ret; }())) {
			return {
				ret: false,
				p1: result
			};
		}
		parsePos++;
		num = parsePos;
		if (!(function () { var $ret = $.ig.Guid.prototype.stringToInt1(guidString, parsePos, 4, 8192, num3, result); parsePos = $ret.p1; num3 = $ret.p4; result = $ret.p5; return $ret.ret; }())) {
			return {
				ret: false,
				p1: result
			};
		}
		if (!(function () { var $ret = $.ig.Guid.prototype.stringToInt1(guidString, parsePos, 8, 8192, num4, result); parsePos = $ret.p1; num4 = $ret.p4; result = $ret.p5; return $ret.ret; }())) {
			return {
				ret: false,
				p1: result
			};
		}
		result._parsedGuid.__d = ((num2 >> 8) & 255);
		result._parsedGuid.__e = (num2 & 255);
		num2 = num3;
		result._parsedGuid.__f = ((num2 >> 8) & 255);
		result._parsedGuid.__g = (num2 & 255);
		num2 = num4;
		result._parsedGuid.__h = ((num2 >> 24) & 255);
		result._parsedGuid.__i = ((num2 >> 16) & 255);
		result._parsedGuid.__j = ((num2 >> 8) & 255);
		result._parsedGuid.__k = (num2 & 255);
		return {
			ret: true,
			p1: result
		};
	}
	/*<EndMethod Name="System.Boolean System.Guid::TryParseGuidWithDashes(System.String, System.Guid_GuidResult)" />*/
	,
	/*<BeginMethod Name="System.String System.Guid::EatAllWhitespace(System.String)" />*/
	eatAllWhitespace: function (str) {
		var length = 0;
		var chArray = new Array(str.length);
		for (var i = 0; i < str.length; i++) {
			var c = str.charAt(i);
			if (!/\s/i.test(c)) {
				chArray[length++] = c;
			}
		}
		return $.ig.util.createString3(chArray, 0, length);
	}
	/*<EndMethod Name="System.String System.Guid::EatAllWhitespace(System.String)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Guid::TryParseGuidWithHexPrefix(System.String, System.Guid_GuidResult)" />*/
	tryParseGuidWithHexPrefix: function (guidString, result) {
		var startIndex = 0;
		var length = 0;
		guidString = $.ig.Guid.prototype.eatAllWhitespace(guidString);
		if (String.isNullOrEmpty(guidString) || (guidString.charAt(0) != '{')) {
			result.setFailure1($.ig.Guid_ParseFailureKind.prototype.format, "Format_GuidBrace");
			return {
				ret: false,
				p1: result
			};
		}
		if (!$.ig.Guid.prototype.isHexPrefix(guidString, 1)) {
			result.setFailure2($.ig.Guid_ParseFailureKind.prototype.format, "Format_GuidHexPrefix", "{0xdddddddd, etc}");
			return {
				ret: false,
				p1: result
			};
		}
		startIndex = 3;
		length = guidString.indexOf(',', startIndex) - startIndex;
		if (length <= 0) {
			result.setFailure1($.ig.Guid_ParseFailureKind.prototype.format, "Format_GuidComma");
			return {
				ret: false,
				p1: result
			};
		}
		if (!(function () { var $ret = $.ig.Guid.prototype.stringToInt(guidString.substr(startIndex, length), -1, 4096, result._parsedGuid.__a, result); result._parsedGuid.__a = $ret.p3; result = $ret.p4; return $ret.ret; }())) {
			return {
				ret: false,
				p1: result
			};
		}
		if (!$.ig.Guid.prototype.isHexPrefix(guidString, (startIndex + length) + 1)) {
			result.setFailure2($.ig.Guid_ParseFailureKind.prototype.format, "Format_GuidHexPrefix", "{0xdddddddd, 0xdddd, etc}");
			return {
				ret: false,
				p1: result
			};
		}
		startIndex = (startIndex + length) + 3;
		length = guidString.indexOf(',', startIndex) - startIndex;
		if (length <= 0) {
			result.setFailure1($.ig.Guid_ParseFailureKind.prototype.format, "Format_GuidComma");
			return {
				ret: false,
				p1: result
			};
		}
		if (!(function () { var $ret = $.ig.Guid.prototype.stringToShort(guidString.substr(startIndex, length), -1, 4096, result._parsedGuid.__b, result); result._parsedGuid.__b = $ret.p3; result = $ret.p4; return $ret.ret; }())) {
			return {
				ret: false,
				p1: result
			};
		}
		if (!$.ig.Guid.prototype.isHexPrefix(guidString, (startIndex + length) + 1)) {
			result.setFailure2($.ig.Guid_ParseFailureKind.prototype.format, "Format_GuidHexPrefix", "{0xdddddddd, 0xdddd, 0xdddd, etc}");
			return {
				ret: false,
				p1: result
			};
		}
		startIndex = (startIndex + length) + 3;
		length = guidString.indexOf(',', startIndex) - startIndex;
		if (length <= 0) {
			result.setFailure1($.ig.Guid_ParseFailureKind.prototype.format, "Format_GuidComma");
			return {
				ret: false,
				p1: result
			};
		}
		if (!(function () { var $ret = $.ig.Guid.prototype.stringToShort(guidString.substr(startIndex, length), -1, 4096, result._parsedGuid.__c, result); result._parsedGuid.__c = $ret.p3; result = $ret.p4; return $ret.ret; }())) {
			return {
				ret: false,
				p1: result
			};
		}
		if ((guidString.length <= ((startIndex + length) + 1)) || (guidString.charAt((startIndex + length) + 1) != '{')) {
			result.setFailure1($.ig.Guid_ParseFailureKind.prototype.format, "Format_GuidBrace");
			return {
				ret: false,
				p1: result
			};
		}
		length++;
		var buffer = new Array(8);
		for (var i = 0; i < 8; i++) {
			if (!$.ig.Guid.prototype.isHexPrefix(guidString, (startIndex + length) + 1)) {
				result.setFailure2($.ig.Guid_ParseFailureKind.prototype.format, "Format_GuidHexPrefix", "{... { ... 0xdd, ...}}");
				return {
					ret: false,
					p1: result
				};
			}
			startIndex = (startIndex + length) + 3;
			if (i < 7) {
				length = guidString.indexOf(',', startIndex) - startIndex;
				if (length <= 0) {
					result.setFailure1($.ig.Guid_ParseFailureKind.prototype.format, "Format_GuidComma");
					return {
						ret: false,
						p1: result
					};
				}
			} else {
				length = guidString.indexOf('}', startIndex) - startIndex;
				if (length <= 0) {
					result.setFailure1($.ig.Guid_ParseFailureKind.prototype.format, "Format_GuidBraceAfterLastNumber");
					return {
						ret: false,
						p1: result
					};
				}
			}
			var num4 = $.ig.util.intSToU($.ig.util.parseInt32_2(guidString.substr(startIndex, length), $.ig.NumberStyles.prototype.hexNumber, null));
			if (num4 > 255) {
				result.setFailure1($.ig.Guid_ParseFailureKind.prototype.format, "Overflow_Byte");
				return {
					ret: false,
					p1: result
				};
			}
			buffer[i] = num4;
		}
		result._parsedGuid.__d = buffer[0];
		result._parsedGuid.__e = buffer[1];
		result._parsedGuid.__f = buffer[2];
		result._parsedGuid.__g = buffer[3];
		result._parsedGuid.__h = buffer[4];
		result._parsedGuid.__i = buffer[5];
		result._parsedGuid.__j = buffer[6];
		result._parsedGuid.__k = buffer[7];
		if ((((startIndex + length) + 1) >= guidString.length) || (guidString.charAt((startIndex + length) + 1) != '}')) {
			result.setFailure1($.ig.Guid_ParseFailureKind.prototype.format, "Format_GuidEndBrace");
			return {
				ret: false,
				p1: result
			};
		}
		if (((startIndex + length) + 1) != (guidString.length - 1)) {
			result.setFailure1($.ig.Guid_ParseFailureKind.prototype.format, "Format_ExtraJunkAtEnd");
			return {
				ret: false,
				p1: result
			};
		}
		return {
			ret: true,
			p1: result
		};
	}
	/*<EndMethod Name="System.Boolean System.Guid::TryParseGuidWithHexPrefix(System.String, System.Guid_GuidResult)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Guid::TryParseGuidWithNoStyle(System.String, System.Guid_GuidResult)" />*/
	tryParseGuidWithNoStyle: function (guidString, result) {
		var num2;
		var num3;
		var num4;
		var startIndex = 0;
		if (guidString.length != 32) {
			result.setFailure1($.ig.Guid_ParseFailureKind.prototype.format, "Format_GuidInvLen");
			return {
				ret: false,
				p1: result
			};
		}
		for (var i = 0; i < guidString.length; i++) {
			var c = guidString.charAt(i);
			if ((c.charCodeAt(0) < '0'.charCodeAt(0)) || (c.charCodeAt(0) > '9'.charCodeAt(0))) {
				var ch2 = $.ig.util.toUpperCase(c);
				if ((ch2.charCodeAt(0) < 'A'.charCodeAt(0)) || (ch2.charCodeAt(0) > 'F'.charCodeAt(0))) {
					result.setFailure1($.ig.Guid_ParseFailureKind.prototype.format, "Format_GuidInvalidChar");
					return {
						ret: false,
						p1: result
					};
				}
			}
		}
		if (!(function () { var $ret = $.ig.Guid.prototype.stringToInt(guidString.substr(startIndex, 8), -1, 4096, result._parsedGuid.__a, result); result._parsedGuid.__a = $ret.p3; result = $ret.p4; return $ret.ret; }())) {
			return {
				ret: false,
				p1: result
			};
		}
		startIndex += 8;
		if (!(function () { var $ret = $.ig.Guid.prototype.stringToShort(guidString.substr(startIndex, 4), -1, 4096, result._parsedGuid.__b, result); result._parsedGuid.__b = $ret.p3; result = $ret.p4; return $ret.ret; }())) {
			return {
				ret: false,
				p1: result
			};
		}
		startIndex += 4;
		if (!(function () { var $ret = $.ig.Guid.prototype.stringToShort(guidString.substr(startIndex, 4), -1, 4096, result._parsedGuid.__c, result); result._parsedGuid.__c = $ret.p3; result = $ret.p4; return $ret.ret; }())) {
			return {
				ret: false,
				p1: result
			};
		}
		startIndex += 4;
		if (!(function () { var $ret = $.ig.Guid.prototype.stringToInt(guidString.substr(startIndex, 4), -1, 4096, num2, result); num2 = $ret.p3; result = $ret.p4; return $ret.ret; }())) {
			return {
				ret: false,
				p1: result
			};
		}
		startIndex += 4;
		if (!(function () { var $ret = $.ig.Guid.prototype.stringToInt(guidString.substr(startIndex, 4), -1, startIndex, num3, result); num3 = $ret.p3; result = $ret.p4; return $ret.ret; }())) {
			return {
				ret: false,
				p1: result
			};
		}
		startIndex += 4;
		if (!(function () { var $ret = $.ig.Guid.prototype.stringToInt(guidString.substr(startIndex, 8), -1, startIndex, num4, result); num4 = $ret.p3; result = $ret.p4; return $ret.ret; }())) {
			return {
				ret: false,
				p1: result
			};
		}
		result._parsedGuid.__d = ((num2 >> 8) & 255);
		result._parsedGuid.__e = (num2 & 255);
		num2 = num3;
		result._parsedGuid.__f = ((num2 >> 8) & 255);
		result._parsedGuid.__g = (num2 & 255);
		num2 = num4;
		result._parsedGuid.__h = ((num2 >> 24) & 255);
		result._parsedGuid.__i = ((num2 >> 16) & 255);
		result._parsedGuid.__j = ((num2 >> 8) & 255);
		result._parsedGuid.__k = (num2 & 255);
		return {
			ret: true,
			p1: result
		};
	}
	/*<EndMethod Name="System.Boolean System.Guid::TryParseGuidWithNoStyle(System.String, System.Guid_GuidResult)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Guid::StringToShort(System.String, System.Int32, System.Int32, System.Int16, System.Guid_GuidResult)" />*/
	stringToShort: function (str, requiredLength, flags, result, parseResult) {
		var parsePos = 0;
		return {
			ret: (function () { var $ret = $.ig.Guid.prototype.stringToShort1(str, parsePos, requiredLength, flags, result, parseResult); parsePos = $ret.p1; result = $ret.p4; parseResult = $ret.p5; return $ret.ret; }()),
			p3: result,
			p4: parseResult
		};
	}
	/*<EndMethod Name="System.Boolean System.Guid::StringToShort(System.String, System.Int32, System.Int32, System.Int16, System.Guid_GuidResult)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Guid::StringToShort(System.String, System.Int32, System.Int32, System.Int32, System.Int16, System.Guid_GuidResult)" />*/
	stringToShort1: function (str, parsePos, requiredLength, flags, result, parseResult) {
		var num;
		result = 0;
		var flag = (function () { var $ret = $.ig.Guid.prototype.stringToInt1(str, parsePos, requiredLength, flags, num, parseResult); parsePos = $ret.p1; num = $ret.p4; parseResult = $ret.p5; return $ret.ret; }());
		result = num;
		return {
			ret: flag,
			p1: parsePos,
			p4: result,
			p5: parseResult
		};
	}
	/*<EndMethod Name="System.Boolean System.Guid::StringToShort(System.String, System.Int32, System.Int32, System.Int32, System.Int16, System.Guid_GuidResult)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Guid::StringToInt(System.String, System.Int32, System.Int32, System.Int32, System.Guid_GuidResult)" />*/
	stringToInt: function (str, requiredLength, flags, result, parseResult) {
		var parsePos = 0;
		return {
			ret: (function () { var $ret = $.ig.Guid.prototype.stringToInt1(str, parsePos, requiredLength, flags, result, parseResult); parsePos = $ret.p1; result = $ret.p4; parseResult = $ret.p5; return $ret.ret; }()),
			p3: result,
			p4: parseResult
		};
	}
	/*<EndMethod Name="System.Boolean System.Guid::StringToInt(System.String, System.Int32, System.Int32, System.Int32, System.Guid_GuidResult)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Guid::StringToInt(System.String, System.Int32, System.Int32, System.Int32, System.Int32, System.Guid_GuidResult)" />*/
	stringToInt1: function (str, parsePos, requiredLength, flags, result, parseResult) {
		result = 0;
		var num = parsePos;
		try {
			if (requiredLength == -1) {
				var temp = str.length - parsePos;
				while (true) {
					if ((function () { var $ret = $.ig.util.tryParseInt32_2(str.substr(parsePos, temp), $.ig.NumberStyles.prototype.hexNumber, $.ig.CultureInfo.prototype.invariantCulture(), result); result = $ret.p3; return $ret.ret; }())) {
						break;
					}
					temp--;
				}
				parsePos += temp;
			} else {
				result = $.ig.util.parseInt32_2(str.substr(parsePos, requiredLength), $.ig.NumberStyles.prototype.hexNumber, null);
				parsePos += requiredLength;
			}
		}
		catch (exception2) {
			if (parseResult._throwStyle != $.ig.Guid_GuidParseThrowStyle.prototype.none) {
				throw exception2;
			}
			parseResult.setFailure(exception2);
			return {
				ret: false,
				p1: parsePos,
				p4: result,
				p5: parseResult
			};
		}
		if (requiredLength != -1 && (parsePos - num) != requiredLength) {
			parseResult.setFailure1($.ig.Guid_ParseFailureKind.prototype.format, "Format_GuidInvalidChar");
			return {
				ret: false,
				p1: parsePos,
				p4: result,
				p5: parseResult
			};
		}
		return {
			ret: true,
			p1: parsePos,
			p4: result,
			p5: parseResult
		};
	}
	/*<EndMethod Name="System.Boolean System.Guid::StringToInt(System.String, System.Int32, System.Int32, System.Int32, System.Int32, System.Guid_GuidResult)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Guid::IsHexPrefix(System.String, System.Int32)" />*/
	isHexPrefix: function (str, i) {
		return (((str.length > (i + 1)) && (str.charAt(i) == '0')) && ($.ig.util.toLowerCase(str.charAt(i + 1)) == 'x'));
	}
	/*<EndMethod Name="System.Boolean System.Guid::IsHexPrefix(System.String, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Guid::L_op_Inequality(System.Guid, System.Guid)" />*/
	l_op_Inequality: function (a, b) {
		return !($.ig.Guid.prototype.l_op_Equality(a, b));
	}
	/*<EndMethod Name="System.Boolean System.Guid::L_op_Inequality(System.Guid, System.Guid)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Guid::L_op_Inequality_Lifted(System.Nullable, System.Nullable)" />*/
	l_op_Inequality_Lifted: function (a, b) {
		if (!a.hasValue()) {
			return b.hasValue();
		} else if (!b.hasValue()) {
			return true;
		}
		return $.ig.Guid.prototype.l_op_Inequality(a.value(), b.value());
	}
	/*<EndMethod Name="System.Boolean System.Guid::L_op_Inequality_Lifted(System.Nullable, System.Nullable)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Guid::L_op_Equality(System.Guid, System.Guid)" />*/
	l_op_Equality: function (a, b) {
		return a.__a == b.__a && a.__b == b.__b && a.__c == b.__c && a.__d == b.__d && a.__e == b.__e && a.__f == b.__f && a.__g == b.__g && a.__h == b.__h && a.__i == b.__i && a.__j == b.__j && a.__k == b.__k;
	}
	/*<EndMethod Name="System.Boolean System.Guid::L_op_Equality(System.Guid, System.Guid)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Guid::L_op_Equality_Lifted(System.Nullable, System.Nullable)" />*/
	l_op_Equality_Lifted: function (a, b) {
		if (!a.hasValue()) {
			return !b.hasValue();
		} else if (!b.hasValue()) {
			return false;
		}
		return $.ig.Guid.prototype.l_op_Equality(a.value(), b.value());
	}
	/*<EndMethod Name="System.Boolean System.Guid::L_op_Equality_Lifted(System.Nullable, System.Nullable)" />*/
	,
	$type: new $.ig.Type('Guid', $.ig.ValueType.prototype.$type, [$.ig.IFormattable.prototype.$type, $.ig.IComparable.prototype.$type, $.ig.IComparable$1.prototype.$type.specialize(-1), $.ig.IEquatable$1.prototype.$type.specialize(-1)])
}, true);

$.ig.Guid.prototype.$type.initSelfReferences();

/*<EndType Name="System.Guid" />*/

/*<BeginType Name="System.Guid_GuidResult" />*/

$.ig.util.defType('Guid_GuidResult', 'ValueType', {
	init: function () {
		this._parsedGuid = new $.ig.Guid();
		$.ig.ValueType.prototype.init.call(this);
	},
	_parsedGuid: null,
	_throwStyle: 0,
	_m_failure: 0,
	_m_failureMessageID: null,
	_m_failureMessageFormatArgument: null,
	_m_failureArgumentName: null,
	_m_innerException: null,
	/*<BeginMethod Name="System.Void System.Guid_GuidResult::Init(System.Guid_GuidParseThrowStyle)" />*/
	init: function (canThrow) {
		this._parsedGuid = $.ig.Guid.prototype.empty;
		this._throwStyle = canThrow;
	}
	/*<EndMethod Name="System.Void System.Guid_GuidResult::Init(System.Guid_GuidParseThrowStyle)" />*/
	,
	/*<BeginMethod Name="System.Void System.Guid_GuidResult::SetFailure(System.Exception)" />*/
	setFailure: function (nativeException) {
		this._m_failure = $.ig.Guid_ParseFailureKind.prototype.nativeException;
		this._m_innerException = nativeException;
	}
	/*<EndMethod Name="System.Void System.Guid_GuidResult::SetFailure(System.Exception)" />*/
	,
	/*<BeginMethod Name="System.Void System.Guid_GuidResult::SetFailure(System.Guid_ParseFailureKind, System.String)" />*/
	setFailure1: function (failure, failureMessageID) {
		this.setFailure3(failure, failureMessageID, null, null, null);
	}
	/*<EndMethod Name="System.Void System.Guid_GuidResult::SetFailure(System.Guid_ParseFailureKind, System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.Guid_GuidResult::SetFailure(System.Guid_ParseFailureKind, System.String, System.Object)" />*/
	setFailure2: function (failure, failureMessageID, failureMessageFormatArgument) {
		this.setFailure3(failure, failureMessageID, failureMessageFormatArgument, null, null);
	}
	/*<EndMethod Name="System.Void System.Guid_GuidResult::SetFailure(System.Guid_ParseFailureKind, System.String, System.Object)" />*/
	,
	/*<BeginMethod Name="System.Void System.Guid_GuidResult::SetFailure(System.Guid_ParseFailureKind, System.String, System.Object, System.String, System.Exception)" />*/
	setFailure3: function (failure, failureMessageID, failureMessageFormatArgument, failureArgumentName, innerException) {
		this._m_failure = failure;
		this._m_failureMessageID = failureMessageID;
		this._m_failureMessageFormatArgument = failureMessageFormatArgument;
		this._m_failureArgumentName = failureArgumentName;
		this._m_innerException = innerException;
		if (this._throwStyle != $.ig.Guid_GuidParseThrowStyle.prototype.none) {
			throw this.getGuidParseException();
		}
	}
	/*<EndMethod Name="System.Void System.Guid_GuidResult::SetFailure(System.Guid_ParseFailureKind, System.String, System.Object, System.String, System.Exception)" />*/
	,
	/*<BeginMethod Name="System.Exception System.Guid_GuidResult::GetGuidParseException()" />*/
	getGuidParseException: function () {
		switch (this._m_failure) {
			case $.ig.Guid_ParseFailureKind.prototype.argumentNull: return new $.ig.ArgumentNullException(0, this._m_failureArgumentName);
			case $.ig.Guid_ParseFailureKind.prototype.format: return new $.ig.FormatException(0);
			case $.ig.Guid_ParseFailureKind.prototype.formatWithParameter: return new $.ig.FormatException(0);
			case $.ig.Guid_ParseFailureKind.prototype.nativeException: return this._m_innerException;
			case $.ig.Guid_ParseFailureKind.prototype.formatWithInnerException: return new $.ig.FormatException(2, "The format of the Guid was incorrect.", this._m_innerException);
		}
		return new $.ig.FormatException(0);
	}
	/*<EndMethod Name="System.Exception System.Guid_GuidResult::GetGuidParseException()" />*/
	,
	$type: new $.ig.Type('Guid_GuidResult', $.ig.ValueType.prototype.$type)
}, true);

/*<EndType Name="System.Guid_GuidResult" />*/

/*<BeginType Name="System.IndexOutOfRangeException" />*/

$.ig.util.defType('IndexOutOfRangeException', 'Error', {
	init: function (initNumber) {
		if (initNumber > 0) {
			switch (initNumber) {
				case 1:
					this.init1.apply(this, arguments);
					break;
			}
			return;
		}
		$.ig.Error.prototype.init.call(this, 0);
	},
	init1: function (initNumber, message) {
		$.ig.Error.prototype.init1.call(this, 1, message);
	},
	$type: new $.ig.Type('IndexOutOfRangeException', $.ig.Error.prototype.$type)
}, true);

/*<EndType Name="System.IndexOutOfRangeException" />*/

/*<BeginType Name="System.InvalidOperationException" />*/

$.ig.util.defType('InvalidOperationException', 'Error', {
	init: function (initNumber) {
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
		$.ig.Error.prototype.init1.call(this, 1, "Invalid operation");
	},
	init1: function (initNumber, errorMessage) {
		$.ig.Error.prototype.init1.call(this, 1, errorMessage);
	},
	init2: function (initNumber, errorMessage, innerException) {
		$.ig.Error.prototype.init2.call(this, 2, errorMessage, innerException);
		throw new $.ig.NotImplementedException(0);
	},
	$type: new $.ig.Type('InvalidOperationException', $.ig.Error.prototype.$type)
}, true);

/*<EndType Name="System.InvalidOperationException" />*/

/*<BeginType Name="System.NotImplementedException" />*/

$.ig.util.defType('NotImplementedException', 'Error', {
	init: function (initNumber) {
		if (initNumber > 0) {
			switch (initNumber) {
				case 1:
					this.init1.apply(this, arguments);
					break;
			}
			return;
		}
		$.ig.Error.prototype.init1.call(this, 1, "not implemented");
	},
	init1: function (initNumber, message) {
		$.ig.Error.prototype.init1.call(this, 1, message);
		throw new $.ig.NotImplementedException(0);
	},
	$type: new $.ig.Type('NotImplementedException', $.ig.Error.prototype.$type)
}, true);

/*<EndType Name="System.NotImplementedException" />*/

/*<BeginType Name="System.Random" />*/

$.ig.util.defType('Random', 'Object', {
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
	},
	init1: function (initNumber, Seed) {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Double System.Random::NextDouble()" />*/
	nextDouble: function () {
		return Math.random();
	}
	/*<EndMethod Name="System.Double System.Random::NextDouble()" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Random::Next()" />*/
	next: function () {
		return this.next1(0x7FFFFFFF);
	}
	/*<EndMethod Name="System.Int32 System.Random::Next()" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Random::Next(System.Int32)" />*/
	next1: function (value) {
		return $.ig.truncate(Math.round(this.nextDouble() * (value - 1)));
	}
	/*<EndMethod Name="System.Int32 System.Random::Next(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Random::Next(System.Int32, System.Int32)" />*/
	next2: function (low, high) {
		return low + $.ig.truncate(Math.round(this.nextDouble() * ((high - low) - 1)));
	}
	/*<EndMethod Name="System.Int32 System.Random::Next(System.Int32, System.Int32)" />*/
	,
	$type: new $.ig.Type('Random', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.Random" />*/

/*<BeginType Name="System.Collections.IComparer" />*/

$.ig.util.defType('IComparer', 'Object', {
	$type: new $.ig.Type('IComparer', null)
}, true);

/*<EndType Name="System.Collections.IComparer" />*/

/*<BeginType Name="System.Collections.Generic.IComparer`1" />*/

$.ig.util.defType('IComparer$1', 'Object', {
	$type: new $.ig.Type('IComparer$1', null)
}, true);

/*<EndType Name="System.Collections.Generic.IComparer`1" />*/

/*<BeginType Name="System.StringComparer" />*/

$.ig.util.defType('StringComparer', 'Object', {
	__comparison: 0,
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
	},
	init1: function (initNumber, comparison) {
		$.ig.Object.prototype.init.call(this);
		this.__comparison = comparison;
	},
	/*<BeginMethod Name="System.Int32 System.StringComparer::Compare(System.Object, System.Object)" />*/
	compare: function (x, y) {
		return $.ig.util.stringCompare1($.ig.util.cast(String, x), $.ig.util.cast(String, y), this.__comparison);
	}
	/*<EndMethod Name="System.Int32 System.StringComparer::Compare(System.Object, System.Object)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.StringComparer::Compare(System.String, System.String)" />*/
	compare1: function (x, y) {
		return $.ig.util.stringCompare1(x, y, this.__comparison);
	}
	/*<EndMethod Name="System.Int32 System.StringComparer::Compare(System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.StringComparer System.StringComparer::Create(System.Globalization.CultureInfo, System.Boolean)" />*/
	create: function (culture, ignoreCase) {
		if (culture.name() == $.ig.CultureInfo.prototype.invariantCulture().name()) {
			return ignoreCase ? $.ig.StringComparer.prototype.invariantCultureIgnoreCase : $.ig.StringComparer.prototype.invariantCulture;
		}
		return ignoreCase ? $.ig.StringComparer.prototype.currentCultureIgnoreCase : $.ig.StringComparer.prototype.currentCulture;
	}
	/*<EndMethod Name="System.StringComparer System.StringComparer::Create(System.Globalization.CultureInfo, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.StringComparer::Equals(System.Object, System.Object)" />*/
	equalsC: function (x, y) {
		return this.equalsC(x, y);
	}
	/*<EndMethod Name="System.Boolean System.StringComparer::Equals(System.Object, System.Object)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.StringComparer::Equals(System.String, System.String)" />*/
	equalsC: function (x, y) {
		return this.compare1(x, y) == 0;
	}
	/*<EndMethod Name="System.Boolean System.StringComparer::Equals(System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.StringComparer::GetHashCode(System.Object)" />*/
	getHashCodeC: function (obj) {
		return this.getHashCodeC(obj);
	}
	/*<EndMethod Name="System.Int32 System.StringComparer::GetHashCode(System.Object)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.StringComparer::GetHashCode(System.String)" />*/
	getHashCodeC: function (obj) {
		if (obj == null) {
			return 0;
		}
		switch (this.__comparison) {
			case $.ig.StringComparison.prototype.currentCulture:
			case $.ig.StringComparison.prototype.invariantCulture:
			case $.ig.StringComparison.prototype.ordinal:
				return obj.getHashCode();
			case $.ig.StringComparison.prototype.currentCultureIgnoreCase: return obj.toLowerCase().getHashCode();
			case $.ig.StringComparison.prototype.invariantCultureIgnoreCase:
			case $.ig.StringComparison.prototype.ordinalIgnoreCase:
				return obj.toLowerCase().getHashCode();
			default: return 0;
		}
	}
	/*<EndMethod Name="System.Int32 System.StringComparer::GetHashCode(System.String)" />*/
	,
	$type: new $.ig.Type('StringComparer', $.ig.Object.prototype.$type, [$.ig.IComparer.prototype.$type, $.ig.IEqualityComparer.prototype.$type, $.ig.IComparer$1.prototype.$type.specialize(String), $.ig.IEqualityComparer$1.prototype.$type.specialize(String)])
}, true);

/*<EndType Name="System.StringComparer" />*/

/*<BeginType Name="System.Tuple`2" />*/

$.ig.util.defType('Tuple$2', 'Object', {
	$t1: null,
	$t2: null,
	_item1: null,
	/*<BeginProperty Name="System.Tuple.T1 System.Tuple`2::Item1()" />*/
	item1: function (value) {
		if (arguments.length === 1) {
			this._item1 = value;
			return value;
		} else {
			return this._item1;
		}
	}
	/*<EndProperty Name="System.Tuple.T1 System.Tuple`2::Item1()" />*/
	,
	_item2: null,
	/*<BeginProperty Name="System.Tuple.T2 System.Tuple`2::Item2()" />*/
	item2: function (value) {
		if (arguments.length === 1) {
			this._item2 = value;
			return value;
		} else {
			return this._item2;
		}
	}
	/*<EndProperty Name="System.Tuple.T2 System.Tuple`2::Item2()" />*/
	,
	init: function ($t1, $t2, item1, item2) {
		this.$t1 = $t1;
		this.$t2 = $t2;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$t1, this.$t2);
		}
		$.ig.Object.prototype.init.call(this);
		this.item1(item1);
		this.item2(item2);
	},
	$type: new $.ig.Type('Tuple$2', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.Tuple`2" />*/

/*<BeginType Name="System.Tuple`3" />*/

$.ig.util.defType('Tuple$3', 'Object', {
	$t1: null,
	$t2: null,
	$t3: null,
	_item1: null,
	/*<BeginProperty Name="System.Tuple.T1 System.Tuple`3::Item1()" />*/
	item1: function (value) {
		if (arguments.length === 1) {
			this._item1 = value;
			return value;
		} else {
			return this._item1;
		}
	}
	/*<EndProperty Name="System.Tuple.T1 System.Tuple`3::Item1()" />*/
	,
	_item2: null,
	/*<BeginProperty Name="System.Tuple.T2 System.Tuple`3::Item2()" />*/
	item2: function (value) {
		if (arguments.length === 1) {
			this._item2 = value;
			return value;
		} else {
			return this._item2;
		}
	}
	/*<EndProperty Name="System.Tuple.T2 System.Tuple`3::Item2()" />*/
	,
	_item3: null,
	/*<BeginProperty Name="System.Tuple.T3 System.Tuple`3::Item3()" />*/
	item3: function (value) {
		if (arguments.length === 1) {
			this._item3 = value;
			return value;
		} else {
			return this._item3;
		}
	}
	/*<EndProperty Name="System.Tuple.T3 System.Tuple`3::Item3()" />*/
	,
	init: function ($t1, $t2, $t3, item1, item2, item3) {
		this.$t1 = $t1;
		this.$t2 = $t2;
		this.$t3 = $t3;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$t1, this.$t2, this.$t3);
		}
		$.ig.Object.prototype.init.call(this);
		this.item1(item1);
		this.item2(item2);
		this.item3(item3);
	},
	$type: new $.ig.Type('Tuple$3', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.Tuple`3" />*/

/*<BeginType Name="System.Tuple" />*/

$.ig.util.defType('Tuple', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Tuple System.Tuple::Create`2(System.Tuple.T1, System.Tuple.T2)" />*/
	create$2: function ($t1, $t2, item1, item2) {
		return new $.ig.Tuple$2($t1, $t2, item1, item2);
	}
	/*<EndMethod Name="System.Tuple System.Tuple::Create`2(System.Tuple.T1, System.Tuple.T2)" />*/
	,
	/*<BeginMethod Name="System.Tuple System.Tuple::Create`3(System.Tuple.T1, System.Tuple.T2, System.Tuple.T3)" />*/
	create$3: function ($t1, $t2, $t3, item1, item2, item3) {
		return new $.ig.Tuple$3($t1, $t2, $t3, item1, item2, item3);
	}
	/*<EndMethod Name="System.Tuple System.Tuple::Create`3(System.Tuple.T1, System.Tuple.T2, System.Tuple.T3)" />*/
	,
	$type: new $.ig.Type('Tuple', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.Tuple" />*/

/*<BeginType Name="System.Uri" />*/

$.ig.util.defType('Uri', 'Object', {
	init: function (initNumber, uri) {
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
			}
			return;
		}
		$.ig.Uri.prototype.init2.call(this, 2, uri, $.ig.UriKind.prototype.absolute, true);
	},
	init1: function (initNumber, uriString, uriKind) {
		$.ig.Uri.prototype.init2.call(this, 2, uriString, uriKind, true);
	},
	init2: function (initNumber, uriString, uriKind, validate) {
		$.ig.Object.prototype.init.call(this);
		this.value(uriString);
	},
	_value: null,
	/*<BeginProperty Name="System.String System.Uri::Value()" />*/
	value: function (value) {
		if (arguments.length === 1) {
			this._value = value;
			return value;
		} else {
			return this._value;
		}
	}
	/*<EndProperty Name="System.String System.Uri::Value()" />*/
	,
	/*<BeginProperty Name="System.Boolean System.Uri::IsAbsoluteUri()" />*/
	isAbsoluteUri: function () {
		var value = this.value();
		var length = value.length;
		if (length != 0 && $.ig.util.isLetter(value.charAt(0))) {
			for (var i = 1; i < length; i++) {
				var current = value.charAt(i);
				if (current == ':') {
					return true;
				}
				if (current != '+' && current != '-' && current != '.' && !$.ig.util.isLetterOrDigit(current)) {
					break;
				}
			}
		}
		return false;
	}
	/*<EndProperty Name="System.Boolean System.Uri::IsAbsoluteUri()" />*/
	,
	/*<BeginProperty Name="System.String System.Uri::Scheme()" />*/
	scheme: function () {
		var value = this.value();
		var length = value.length;
		if (length != 0 && $.ig.util.isLetter(value.charAt(0))) {
			for (var i = 1; i < length; i++) {
				var current = value.charAt(i);
				if (current == ':') {
					return value.substr(0, i);
				}
				if (current != '+' && current != '-' && current != '.' && !$.ig.util.isLetterOrDigit(current)) {
					break;
				}
			}
		}
		throw new $.ig.InvalidOperationException(1, "The scheme cannot be obtained from a relative Uri.");
	}
	/*<EndProperty Name="System.String System.Uri::Scheme()" />*/
	,
	/*<BeginMethod Name="System.String System.Uri::EscapeDataString(System.String)" />*/
	encodeURIComponent: function (stringToEscape) {
		return null;
	}
	/*<EndMethod Name="System.String System.Uri::EscapeDataString(System.String)" />*/
	,
	/*<BeginMethod Name="System.String System.Uri::EscapeUriString(System.String)" />*/
	escapeUriString: function (stringToEscape) {
		if (/^([A-Z]:)|(\\\\)/i.test(stringToEscape)) {
			return stringToEscape;
		}
		return encodeURI(stringToEscape);
	}
	/*<EndMethod Name="System.String System.Uri::EscapeUriString(System.String)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Uri::TryCreate(System.String, System.UriKind, System.Uri)" />*/
	tryCreate: function (uriString, uriKind, result) {
		if ($.ig.Uri.prototype.isWellFormedUriString(uriString, uriKind)) {
			result = new $.ig.Uri(2, uriString, uriKind, false);
			return {
				ret: true,
				p2: result
			};
		}
		result = null;
		return {
			ret: false,
			p2: result
		};
	}
	/*<EndMethod Name="System.Boolean System.Uri::TryCreate(System.String, System.UriKind, System.Uri)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Uri::IsWellFormedUriString(System.String, System.UriKind)" />*/
	isWellFormedUriString: function (uriString, uriKind) {
		switch (uriKind) {
			case $.ig.UriKind.prototype.absolute:
				if (!/^(((http|ftp|https):\/\/[\w-]+(\.[\w-]*)+)|(file:\/\/\/?))([\w\\$()!'.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?$/i.test(uriString)) {
					return false;
				}
				break;
			case $.ig.UriKind.prototype.relative:
				if (!/^([\w\\$()!'.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?$/i.test(uriString)) {
					return false;
				}
				break;
			default:
			case $.ig.UriKind.prototype.relativeOrAbsolute:
				if (!/^((((http|ftp|https):\/\/[\w-]+(\.[\w-]*)+)|(file:\/\/\/?)))?([\w\\$()!'.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?$/i.test(uriString)) {
					return false;
				}
				break;
		}
		return true;
	}
	/*<EndMethod Name="System.Boolean System.Uri::IsWellFormedUriString(System.String, System.UriKind)" />*/
	,
	/*<BeginMethod Name="System.String System.Uri::ToString()" />*/
	toString: function () {
		if (/^([A-Z]:)|(\\\\)/i.test(this.value())) {
			return this.value();
		}
		var result = decodeURI(this.value());
		if (/^(http|ftp|https):\/\/[\w-]+(\.[\w-]*)+?$/i.test(result)) {
			result += "/";
		}
		return result;
	}
	/*<EndMethod Name="System.String System.Uri::ToString()" />*/
	,
	init3: function (initNumber, baseUri, relativeUri) {
		$.ig.Object.prototype.init.call(this);
		throw new $.ig.NotImplementedException(0);
	},
	/*<BeginProperty Name="System.String System.Uri::AbsolutePath()" />*/
	absolutePath: function () {
		throw new $.ig.NotImplementedException(0);
		return null;
	}
	/*<EndProperty Name="System.String System.Uri::AbsolutePath()" />*/
	,
	/*<BeginProperty Name="System.String System.Uri::AbsoluteUri()" />*/
	absoluteUri: function () {
		throw new $.ig.NotImplementedException(0);
		return null;
	}
	/*<EndProperty Name="System.String System.Uri::AbsoluteUri()" />*/
	,
	/*<BeginProperty Name="System.String System.Uri::LocalPath()" />*/
	localPath: function () {
		var result = /^(((http|ftp|https):\/\/[\w-]+(\.[\w-]*)+)|(file:\/\/\/?))([\w\\$()!'.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?$/i.exec(this.value());
		if (result == null) {
			throw new $.ig.InvalidOperationException(0);
		}
		if (result[6] != null) {
			return decodeURI(result[6]);
		}
		return "/";
	}
	/*<EndProperty Name="System.String System.Uri::LocalPath()" />*/
	,
	/*<BeginProperty Name="System.String System.Uri::OriginalString()" />*/
	originalString: function () {
		return this.value();
	}
	/*<EndProperty Name="System.String System.Uri::OriginalString()" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Uri::IsWellFormedOriginalString()" />*/
	isWellFormedOriginalString: function () {
		throw new $.ig.NotImplementedException(0);
		return false;
	}
	/*<EndMethod Name="System.Boolean System.Uri::IsWellFormedOriginalString()" />*/
	,
	$type: new $.ig.Type('Uri', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.Uri" />*/

/*<BeginType Name="System.WeakReference" />*/

$.ig.util.defType('WeakReference', 'Object', {
	__target: null,
	init: function (target) {
		$.ig.Object.prototype.init.call(this);
		this.__target = target;
	},
	/*<BeginProperty Name="System.Boolean System.WeakReference::IsAlive()" />*/
	isAlive: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean System.WeakReference::IsAlive()" />*/
	,
	/*<BeginProperty Name="System.Object System.WeakReference::Target()" />*/
	target: function (value) {
		if (arguments.length === 1) {
			this.__target = value;
			return value;
		} else {
			return this.__target;
		}
	}
	/*<EndProperty Name="System.Object System.WeakReference::Target()" />*/
	,
	$type: new $.ig.Type('WeakReference', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.WeakReference" />*/

/*<BeginType Name="System.Text.StringBuilder" />*/

$.ig.util.defType('StringBuilder', 'Object', {
	_internal: null,
	/*<BeginProperty Name="System.String System.Text.StringBuilder::Internal()" />*/
	internal: function (value) {
		if (arguments.length === 1) {
			this._internal = value;
			return value;
		} else {
			return this._internal;
		}
	}
	/*<EndProperty Name="System.String System.Text.StringBuilder::Internal()" />*/
	,
	init: function (initNumber) {
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
		this.internal("");
	},
	init1: function (initNumber, capacity) {
		$.ig.StringBuilder.prototype.init.call(this, 0);
	},
	init2: function (initNumber, value) {
		$.ig.Object.prototype.init.call(this);
		this.internal(value);
	},
	/*<BeginMethod Name="System.Text.StringBuilder System.Text.StringBuilder::Append(System.Object)" />*/
	append4: function (obj) {
		if (obj != null) {
			this.append5(obj.toString());
		}
		return this;
	}
	/*<EndMethod Name="System.Text.StringBuilder System.Text.StringBuilder::Append(System.Object)" />*/
	,
	/*<BeginMethod Name="System.Text.StringBuilder System.Text.StringBuilder::Append(System.String)" />*/
	append5: function (str_) {
		if (str_ != null)
        {
            this._internal = this._internal.concat(str_);
        };
		return this;
	}
	/*<EndMethod Name="System.Text.StringBuilder System.Text.StringBuilder::Append(System.String)" />*/
	,
	/*<BeginMethod Name="System.Text.StringBuilder System.Text.StringBuilder::Append(System.Text.StringBuilder)" />*/
	append7: function (builder) {
		var str_ = builder.toString();
		this._internal = this._internal.concat(str_);
		return this;
	}
	/*<EndMethod Name="System.Text.StringBuilder System.Text.StringBuilder::Append(System.Text.StringBuilder)" />*/
	,
	/*<BeginMethod Name="System.Text.StringBuilder System.Text.StringBuilder::Append(System.Char)" />*/
	append1: function (chr_) {
		this._internal = this._internal.concat(chr_);
		return this;
	}
	/*<EndMethod Name="System.Text.StringBuilder System.Text.StringBuilder::Append(System.Char)" />*/
	,
	/*<BeginMethod Name="System.Text.StringBuilder System.Text.StringBuilder::Append(System.Char, System.Int32)" />*/
	append2: function (chr_, count_) {
		this._internal = this._internal.concat(chr_.repeat(count_));
		return this;
	}
	/*<EndMethod Name="System.Text.StringBuilder System.Text.StringBuilder::Append(System.Char, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Text.StringBuilder System.Text.StringBuilder::Append(System.Int32)" />*/
	append3: function (value_) {
		this._internal = this._internal.concat(value_);
		return this;
	}
	/*<EndMethod Name="System.Text.StringBuilder System.Text.StringBuilder::Append(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Text.StringBuilder System.Text.StringBuilder::Append(System.String, System.Int32, System.Int32)" />*/
	append6: function (value_, startIndex_, count_) {
		this._internal = this._internal.concat(value_.substr(startIndex_, count_));
		return this;
	}
	/*<EndMethod Name="System.Text.StringBuilder System.Text.StringBuilder::Append(System.String, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Text.StringBuilder System.Text.StringBuilder::Append(, System.Int32, System.Int32)" />*/
	append: function (value_, startIndex_, charCount_) {
		this._internal = this._internal.concat(value_.slice(startIndex_, startIndex_ + charCount_).join(''));
		return this;
	}
	/*<EndMethod Name="System.Text.StringBuilder System.Text.StringBuilder::Append(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Text.StringBuilder System.Text.StringBuilder::AppendLine()" />*/
	appendLine: function () {
		return this.appendLine1("");
	}
	/*<EndMethod Name="System.Text.StringBuilder System.Text.StringBuilder::AppendLine()" />*/
	,
	/*<BeginMethod Name="System.Text.StringBuilder System.Text.StringBuilder::AppendLine(System.String)" />*/
	appendLine1: function (str_) {
		if (str_ != null)
        {
            this._internal = this._internal.concat(str_);
        }
        this._internal = this._internal.concat($.ig.Environment.prototype.newLine());;
		return this;
	}
	/*<EndMethod Name="System.Text.StringBuilder System.Text.StringBuilder::AppendLine(System.String)" />*/
	,
	/*<BeginMethod Name="System.Text.StringBuilder System.Text.StringBuilder::Clear()" />*/
	clear: function () {
		this.internal("");
		return this;
	}
	/*<EndMethod Name="System.Text.StringBuilder System.Text.StringBuilder::Clear()" />*/
	,
	/*<BeginMethod Name="System.Text.StringBuilder System.Text.StringBuilder::Insert(System.Int32, System.Char)" />*/
	insert: function (index_, chr_) {
		if (index_ == this.length()) {
			this.append1(chr_);
		} else {
			this._internal = this._internal.substring(0, index_).concat(chr_).concat(this._internal.substring(index_, this._internal.length));
		}
		return this;
	}
	/*<EndMethod Name="System.Text.StringBuilder System.Text.StringBuilder::Insert(System.Int32, System.Char)" />*/
	,
	/*<BeginMethod Name="System.Text.StringBuilder System.Text.StringBuilder::Insert(System.Int32, System.String)" />*/
	insert1: function (index_, str_) {
		if (index_ == this.length()) {
			this.append5(str_);
		} else {
			this._internal = this._internal.substring(0, index_).concat(str_).concat(this._internal.substring(index_, this._internal.length));
		}
		return this;
	}
	/*<EndMethod Name="System.Text.StringBuilder System.Text.StringBuilder::Insert(System.Int32, System.String)" />*/
	,
	/*<BeginMethod Name="System.Text.StringBuilder System.Text.StringBuilder::Remove(System.Int32, System.Int32)" />*/
	remove: function (startIndex_, length_) {
		this._internal = this._internal.substring(0, startIndex_).concat(this._internal.substring(startIndex_ + length_, this._internal.length));
		return this;
	}
	/*<EndMethod Name="System.Text.StringBuilder System.Text.StringBuilder::Remove(System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Text.StringBuilder System.Text.StringBuilder::Replace(System.Char, System.Char)" />*/
	replace: function (oldCh_, newCh_) {
		this._internal = this._internal.replace(oldCh_, newCh_);
		return this;
	}
	/*<EndMethod Name="System.Text.StringBuilder System.Text.StringBuilder::Replace(System.Char, System.Char)" />*/
	,
	/*<BeginMethod Name="System.String System.Text.StringBuilder::ToString()" />*/
	toString: function () {
		return this.internal();
	}
	/*<EndMethod Name="System.String System.Text.StringBuilder::ToString()" />*/
	,
	/*<BeginMethod Name="System.String System.Text.StringBuilder::ToString(System.Int32, System.Int32)" />*/
	toString1: function (startIndex, length) {
		return this.internal().substr(startIndex, length);
	}
	/*<EndMethod Name="System.String System.Text.StringBuilder::ToString(System.Int32, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.Int32 System.Text.StringBuilder::Length()" />*/
	length: function (value) {
		if (arguments.length === 1) {
			if (value <= this.length()) {
				this._internal = this._internal.substring(0, value);
			} else {
				throw new $.ig.NotImplementedException(0);
			}
			return value;
		} else {
			return this.internal().length;
		}
	}
	/*<EndProperty Name="System.Int32 System.Text.StringBuilder::Length()" />*/
	,
	/*<BeginProperty Name="System.Char System.Text.StringBuilder::Item(System.Int32)" />*/
	item: function (index_, value) {
		if (arguments.length === 2) {
			this._internal = this._internal.substring(0, index_).concat(value).concat(this._internal.substring(index_ + 1, this._internal.length));
			return value;
		} else {
			return this.internal().charAt(index_);
		}
	}
	/*<EndProperty Name="System.Char System.Text.StringBuilder::Item(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Text.StringBuilder System.Text.StringBuilder::AppendFormat(System.String, System.Object)" />*/
	appendFormat2: function (format, arg0) {
		return this.append5($.ig.util.stringFormat(format, arg0));
	}
	/*<EndMethod Name="System.Text.StringBuilder System.Text.StringBuilder::AppendFormat(System.String, System.Object)" />*/
	,
	/*<BeginMethod Name="System.Text.StringBuilder System.Text.StringBuilder::AppendFormat(System.String, )" />*/
	appendFormat1: function (format, args) {
		return this.append5($.ig.util.stringFormat1(format, args));
	}
	/*<EndMethod Name="System.Text.StringBuilder System.Text.StringBuilder::AppendFormat(System.String, )" />*/
	,
	/*<BeginMethod Name="System.Text.StringBuilder System.Text.StringBuilder::AppendFormat(System.IFormatProvider, System.String, )" />*/
	appendFormat: function (provider, format, args) {
		return this.append5($.ig.util.stringFormat2(provider, format, args));
	}
	/*<EndMethod Name="System.Text.StringBuilder System.Text.StringBuilder::AppendFormat(System.IFormatProvider, System.String, )" />*/
	,
	/*<BeginMethod Name="System.Text.StringBuilder System.Text.StringBuilder::AppendFormat(System.String, System.Object, System.Object)" />*/
	appendFormat3: function (format, arg0, arg1) {
		return this.append5($.ig.util.stringFormat(format, arg0, arg1));
	}
	/*<EndMethod Name="System.Text.StringBuilder System.Text.StringBuilder::AppendFormat(System.String, System.Object, System.Object)" />*/
	,
	/*<BeginMethod Name="System.Text.StringBuilder System.Text.StringBuilder::AppendFormat(System.String, System.Object, System.Object, System.Object)" />*/
	appendFormat4: function (format, arg0, arg1, arg2) {
		return this.append5($.ig.util.stringFormat(format, arg0, arg1, arg2));
	}
	/*<EndMethod Name="System.Text.StringBuilder System.Text.StringBuilder::AppendFormat(System.String, System.Object, System.Object, System.Object)" />*/
	,
	_capacity: 0,
	/*<BeginProperty Name="System.Int32 System.Text.StringBuilder::Capacity()" />*/
	capacity: function (value) {
		if (arguments.length === 1) {
			this._capacity = value;
			return value;
		} else {
			return this._capacity;
		}
	}
	/*<EndProperty Name="System.Int32 System.Text.StringBuilder::Capacity()" />*/
	,
	$type: new $.ig.Type('StringBuilder', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.Text.StringBuilder" />*/

/*<BeginType Name="System.Runtime.InteropServices.InAttribute" />*/

$.ig.util.defType('InAttribute', 'Attribute', {
	init: function () {
		$.ig.Attribute.prototype.init.call(this);
	},
	$type: new $.ig.Type('InAttribute', $.ig.Attribute.prototype.$type)
}, true);

/*<EndType Name="System.Runtime.InteropServices.InAttribute" />*/

/*<BeginType Name="System.Runtime.InteropServices.Out1Attribute" />*/

$.ig.util.defType('Out1Attribute', 'Attribute', {
	init: function () {
		$.ig.Attribute.prototype.init.call(this);
	},
	$type: new $.ig.Type('Out1Attribute', $.ig.Attribute.prototype.$type)
}, true);

/*<EndType Name="System.Runtime.InteropServices.Out1Attribute" />*/

/*<BeginType Name="System.Diagnostics.Debug" />*/

$.ig.util.defType('Debug', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Void System.Diagnostics.Debug::Assert(System.Boolean, System.String)" />*/
	assert1: function (condition, text) {
	}
	/*<EndMethod Name="System.Void System.Diagnostics.Debug::Assert(System.Boolean, System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.Diagnostics.Debug::WriteLine(System.String)" />*/
	writeLine: function (line) {
	}
	/*<EndMethod Name="System.Void System.Diagnostics.Debug::WriteLine(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.Diagnostics.Debug::Assert(System.Boolean)" />*/
	assert: function (value) {
	}
	/*<EndMethod Name="System.Void System.Diagnostics.Debug::Assert(System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void System.Diagnostics.Debug::Fail(System.String)" />*/
	fail: function (message) {
	}
	/*<EndMethod Name="System.Void System.Diagnostics.Debug::Fail(System.String)" />*/
	,
	$type: new $.ig.Type('Debug', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.Diagnostics.Debug" />*/

/*<BeginType Name="System.Diagnostics.DebuggerDisplayAttribute" />*/

$.ig.util.defType('DebuggerDisplayAttribute', 'Attribute', {
	init: function (value) {
		$.ig.Attribute.prototype.init.call(this);
	},
	_name: null,
	/*<BeginProperty Name="System.String System.Diagnostics.DebuggerDisplayAttribute::Name()" />*/
	name: function (value) {
		if (arguments.length === 1) {
			this._name = value;
			return value;
		} else {
			return this._name;
		}
	}
	/*<EndProperty Name="System.String System.Diagnostics.DebuggerDisplayAttribute::Name()" />*/
	,
	_target: null,
	/*<BeginProperty Name="System.Type System.Diagnostics.DebuggerDisplayAttribute::Target()" />*/
	target: function (value) {
		if (arguments.length === 1) {
			this._target = value;
			return value;
		} else {
			return this._target;
		}
	}
	/*<EndProperty Name="System.Type System.Diagnostics.DebuggerDisplayAttribute::Target()" />*/
	,
	_targetTypeName: null,
	/*<BeginProperty Name="System.String System.Diagnostics.DebuggerDisplayAttribute::TargetTypeName()" />*/
	targetTypeName: function (value) {
		if (arguments.length === 1) {
			this._targetTypeName = value;
			return value;
		} else {
			return this._targetTypeName;
		}
	}
	/*<EndProperty Name="System.String System.Diagnostics.DebuggerDisplayAttribute::TargetTypeName()" />*/
	,
	_type: null,
	/*<BeginProperty Name="System.String System.Diagnostics.DebuggerDisplayAttribute::Type()" />*/
	type: function (value) {
		if (arguments.length === 1) {
			this._type = value;
			return value;
		} else {
			return this._type;
		}
	}
	/*<EndProperty Name="System.String System.Diagnostics.DebuggerDisplayAttribute::Type()" />*/
	,
	$type: new $.ig.Type('DebuggerDisplayAttribute', $.ig.Attribute.prototype.$type)
}, true);

/*<EndType Name="System.Diagnostics.DebuggerDisplayAttribute" />*/

/*<BeginType Name="System.ComponentModel.AsyncCompletedEventArgs" />*/

$.ig.util.defType('AsyncCompletedEventArgs', 'EventArgs', {
	__error: null,
	__cancelled: false,
	__userState: null,
	init: function (error, cancelled, userState) {
		$.ig.EventArgs.prototype.init.call(this);
		this.__cancelled = cancelled;
		this.__error = error;
		this.__userState = userState;
	},
	/*<BeginProperty Name="System.Exception System.ComponentModel.AsyncCompletedEventArgs::Error()" />*/
	error: function () {
		return this.__error;
	}
	/*<EndProperty Name="System.Exception System.ComponentModel.AsyncCompletedEventArgs::Error()" />*/
	,
	/*<BeginProperty Name="System.Boolean System.ComponentModel.AsyncCompletedEventArgs::Cancelled()" />*/
	cancelled: function () {
		return this.__cancelled;
	}
	/*<EndProperty Name="System.Boolean System.ComponentModel.AsyncCompletedEventArgs::Cancelled()" />*/
	,
	/*<BeginProperty Name="System.Object System.ComponentModel.AsyncCompletedEventArgs::UserState()" />*/
	userState: function () {
		return this.__userState;
	}
	/*<EndProperty Name="System.Object System.ComponentModel.AsyncCompletedEventArgs::UserState()" />*/
	,
	/*<BeginMethod Name="System.Void System.ComponentModel.AsyncCompletedEventArgs::RaiseExceptionIfNecessary()" />*/
	raiseExceptionIfNecessary: function () {
		if (this.error() != null) {
			throw this.error();
		}
	}
	/*<EndMethod Name="System.Void System.ComponentModel.AsyncCompletedEventArgs::RaiseExceptionIfNecessary()" />*/
	,
	$type: new $.ig.Type('AsyncCompletedEventArgs', $.ig.EventArgs.prototype.$type)
}, true);

/*<EndType Name="System.ComponentModel.AsyncCompletedEventArgs" />*/

/*<BeginType Name="System.ComponentModel.CancelEventArgs" />*/

$.ig.util.defType('CancelEventArgs', 'EventArgs', {
	init: function (initNumber) {
		if (initNumber > 0) {
			switch (initNumber) {
				case 1:
					this.init1.apply(this, arguments);
					break;
			}
			return;
		}
		$.ig.EventArgs.prototype.init.call(this);
	},
	init1: function (initNumber, cancel) {
		$.ig.EventArgs.prototype.init.call(this);
	},
	_cancel: false,
	/*<BeginProperty Name="System.Boolean System.ComponentModel.CancelEventArgs::Cancel()" />*/
	cancel: function (value) {
		if (arguments.length === 1) {
			this._cancel = value;
			return value;
		} else {
			return this._cancel;
		}
	}
	/*<EndProperty Name="System.Boolean System.ComponentModel.CancelEventArgs::Cancel()" />*/
	,
	$type: new $.ig.Type('CancelEventArgs', $.ig.EventArgs.prototype.$type)
}, true);

/*<EndType Name="System.ComponentModel.CancelEventArgs" />*/

/*<BeginType Name="System.CodeDom.Compiler.GeneratedCodeAttribute" />*/

$.ig.util.defType('GeneratedCodeAttribute', 'Attribute', {
	_tool: null,
	_version: null,
	init: function (tool, version) {
		$.ig.Attribute.prototype.init.call(this);
		this._tool = tool;
		this._version = version;
	},
	/*<BeginProperty Name="System.String System.CodeDom.Compiler.GeneratedCodeAttribute::Tool()" />*/
	tool: function () {
		return this._tool;
	}
	/*<EndProperty Name="System.String System.CodeDom.Compiler.GeneratedCodeAttribute::Tool()" />*/
	,
	/*<BeginProperty Name="System.String System.CodeDom.Compiler.GeneratedCodeAttribute::Version()" />*/
	version: function () {
		return this._version;
	}
	/*<EndProperty Name="System.String System.CodeDom.Compiler.GeneratedCodeAttribute::Version()" />*/
	,
	$type: new $.ig.Type('GeneratedCodeAttribute', $.ig.Attribute.prototype.$type)
}, true);

/*<EndType Name="System.CodeDom.Compiler.GeneratedCodeAttribute" />*/

/*<BeginType Name="System.Collections.Generic.Comparer`1" />*/

$.ig.util.defType('Comparer$1', 'Object', {
	$t: null,
	init: function ($t) {
		this.$t = $t;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$t);
		}
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginProperty Name="System.Collections.Generic.Comparer System.Collections.Generic.Comparer`1::Default()" />*/
	defaultComparerValue: function ($t) {
		return new $.ig.DefaultComparer$1($t);
	}
	/*<EndProperty Name="System.Collections.Generic.Comparer System.Collections.Generic.Comparer`1::Default()" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Collections.Generic.Comparer`1::Compare(System.Collections.Generic.Comparer.T, System.Collections.Generic.Comparer.T)" />*/
	compare: function (x, y) {
	}
	/*<EndMethod Name="System.Int32 System.Collections.Generic.Comparer`1::Compare(System.Collections.Generic.Comparer.T, System.Collections.Generic.Comparer.T)" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.Comparer System.Collections.Generic.Comparer`1::Create(System.Comparison)" />*/
	create: function ($t, comparison) {
		return null;
	}
	/*<EndMethod Name="System.Collections.Generic.Comparer System.Collections.Generic.Comparer`1::Create(System.Comparison)" />*/
	,
	$type: new $.ig.Type('Comparer$1', $.ig.Object.prototype.$type, [$.ig.IComparer.prototype.$type, $.ig.IComparer$1.prototype.$type.specialize(0)])
}, true);

/*<EndType Name="System.Collections.Generic.Comparer`1" />*/

/*<BeginType Name="System.Collections.Generic.DefaultComparer`1" />*/

$.ig.util.defType('DefaultComparer$1', 'Comparer$1', {
	$t: null,
	init: function ($t) {
		this.$t = $t;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$t);
		}
		$.ig.Comparer$1.prototype.init.call(this, this.$t);
	},
	/*<BeginMethod Name="System.Int32 System.Collections.Generic.DefaultComparer`1::Compare(System.Collections.Generic.DefaultComparer.T, System.Collections.Generic.DefaultComparer.T)" />*/
	compare: function (x, y) {
		var xComparable = $.ig.util.cast($.ig.IComparable$1.prototype.$type.specialize(this.$t), x);
		if (xComparable != null) {
			return xComparable.compareTo(y);
		}
		var yComparable = $.ig.util.cast($.ig.IComparable$1.prototype.$type.specialize(this.$t), y);
		if (yComparable != null) {
			return -yComparable.compareTo(x);
		}
		return $.ig.util.compare(x, y);
	}
	/*<EndMethod Name="System.Int32 System.Collections.Generic.DefaultComparer`1::Compare(System.Collections.Generic.DefaultComparer.T, System.Collections.Generic.DefaultComparer.T)" />*/
	,
	$type: new $.ig.Type('DefaultComparer$1', $.ig.Comparer$1.prototype.$type.specialize(0))
}, true);

/*<EndType Name="System.Collections.Generic.DefaultComparer`1" />*/

/*<BeginStatics Name="System.Guid" />*/

$.ig.Guid.prototype.empty = new $.ig.Guid(0);
/*<EndStatics Name="System.Guid" />*/

/*<BeginStatics Name="System.StringComparer" />*/

$.ig.StringComparer.prototype.currentCulture = new $.ig.StringComparer(1, $.ig.StringComparison.prototype.currentCulture);
$.ig.StringComparer.prototype.currentCultureIgnoreCase = new $.ig.StringComparer(1, $.ig.StringComparison.prototype.currentCultureIgnoreCase);
$.ig.StringComparer.prototype.invariantCulture = new $.ig.StringComparer(1, $.ig.StringComparison.prototype.invariantCulture);
$.ig.StringComparer.prototype.invariantCultureIgnoreCase = new $.ig.StringComparer(1, $.ig.StringComparison.prototype.invariantCultureIgnoreCase);
$.ig.StringComparer.prototype.ordinal = new $.ig.StringComparer(1, $.ig.StringComparison.prototype.ordinal);
$.ig.StringComparer.prototype.ordinalIgnoreCase = new $.ig.StringComparer(1, $.ig.StringComparison.prototype.ordinalIgnoreCase);
/*<EndStatics Name="System.StringComparer" />*/

/*<BeginStatics Name="System.Uri" />*/

$.ig.Uri.prototype.schemeDelimiter = "://";
/*<EndStatics Name="System.Uri" />*/


/*<BeginFooter/>*/
}));// REMOVE_FROM_COMBINED_FILES
/*<EndFooter/>*/

