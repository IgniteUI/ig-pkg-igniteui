/*!@license
* Infragistics.Web.ClientUI infragistics.xml.js 17.1.20171.1012
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
*     infragistics.ext_io.js
*     infragistics.ext_text.js
*     infragistics.ext_web.js
*/
/*<BeginHeader/>*/
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		define( [
			'./infragistics.util',
			'./infragistics.ext_core',
			'./infragistics.ext_collections',
			'./infragistics.ext_io',
			'./infragistics.ext_text',
			'./infragistics.ext_web'
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
$.ig.globalDefs.$$2 = $$t;
$$0 = $.ig.globalDefs.$$0;
$$4 = $.ig.globalDefs.$$4;
$$6 = $.ig.globalDefs.$$6;
$$7 = $.ig.globalDefs.$$7;
$$8 = $.ig.globalDefs.$$8;
$$b = $.ig.globalDefs.$$b;
$.ig.$currDefinitions = $$t;
$.ig.util.bulkDefine([
"AsyncCallback:a",
"IAsyncResult:d",
"DecoderExceptionFallback:i",
"DecoderFallback:k",
"DecoderReplacementFallback:n",
"DecoderReplacementFallbackBuffer:o",
"IXmlLineInfo:s",
"IXmlNamespaceResolver:y",
"XmlParserContext:aj",
"XmlReader:al",
"XmlTextReader:ar",
"XmlTextWriter:ax",
"XmlWriter:a2",
"IPermission:a3",
"TextWriter:bc",
"SynchronizedWriter:bd"]);
/*<BeginType Name="System.Xml.XmlTextWriter_XmlDeclState" />*/

$.ig.util.defEnum('XmlTextWriter_XmlDeclState', false, false, {
	Allow: 0,
	Ignore: 1,
	Auto: 2,
	Prohibit: 3
});

/*<EndType Name="System.Xml.XmlTextWriter_XmlDeclState" />*/

/*<BeginType Name="System.Xml.XmlTextReader_DtdInputState" />*/

$.ig.util.defEnum('XmlTextReader_DtdInputState', false, false, {
	Free: 1,
	ElementDecl: 2,
	AttlistDecl: 3,
	EntityDecl: 4,
	NotationDecl: 5,
	PI: 6,
	Comment: 7,
	InsideSingleQuoted: 8,
	InsideDoubleQuoted: 9
});

/*<EndType Name="System.Xml.XmlTextReader_DtdInputState" />*/

/*<BeginType Name="System.Xml.XmlSpace" />*/

$.ig.util.defEnum('XmlSpace', false, false, {
	None: 0,
	"Default:$default": 1,
	Preserve: 2
});

/*<EndType Name="System.Xml.XmlSpace" />*/

/*<BeginType Name="System.Xml.XmlNamespaceScope" />*/

$.ig.util.defEnum('XmlNamespaceScope', false, false, {
	All: 0,
	ExcludeXml: 1,
	Local: 2
});

/*<EndType Name="System.Xml.XmlNamespaceScope" />*/

/*<BeginType Name="System.Xml.WriteState" />*/

$.ig.util.defEnum('WriteState', false, false, {
	Start: 0,
	Prolog: 1,
	Element: 2,
	Attribute: 3,
	Content: 4,
	Closed: 5
});

/*<EndType Name="System.Xml.WriteState" />*/

/*<BeginType Name="System.Xml.WhitespaceHandling" />*/

$.ig.util.defEnum('WhitespaceHandling', false, false, {
	All: 0,
	Significant: 1,
	None: 2
});

/*<EndType Name="System.Xml.WhitespaceHandling" />*/

/*<BeginType Name="System.Xml.ReadState" />*/

$.ig.util.defEnum('ReadState', false, false, {
	Initial: 0,
	Interactive: 1,
	Error: 2,
	EndOfFile: 3,
	Closed: 4
});

/*<EndType Name="System.Xml.ReadState" />*/

/*<BeginType Name="System.Xml.NewLineHandling" />*/

$.ig.util.defEnum('NewLineHandling', false, false, {
	Replace: 0,
	Entitize: 1,
	None: 2
});

/*<EndType Name="System.Xml.NewLineHandling" />*/

/*<BeginType Name="System.Xml.NamespaceHandling" />*/

$.ig.util.defEnum('NamespaceHandling', true, false, {
	"Default:$default": 0,
	OmitDuplicates: 1
});

/*<EndType Name="System.Xml.NamespaceHandling" />*/

/*<BeginType Name="System.Xml.Formatting" />*/

$.ig.util.defEnum('Formatting', false, false, {
	None: 0,
	Indented: 1
});

/*<EndType Name="System.Xml.Formatting" />*/

/*<BeginType Name="System.Xml.EntityHandling" />*/

$.ig.util.defEnum('EntityHandling', false, false, {
	ExpandEntities: 1,
	ExpandCharEntities: 2
});

/*<EndType Name="System.Xml.EntityHandling" />*/

/*<BeginType Name="System.Security.Permissions.PermissionState" />*/

$.ig.util.defEnum('PermissionState', false, false, {
	Unrestricted: 1,
	None: 0
});

/*<EndType Name="System.Security.Permissions.PermissionState" />*/

/*<BeginType Name="System.Security.Permissions.SecurityAction" />*/

$.ig.util.defEnum('SecurityAction', false, false, {
	Demand: 2,
	Assert: 3,
	Deny: 4,
	PermitOnly: 5,
	LinkDemand: 6,
	InheritanceDemand: 7,
	RequestMinimum: 8,
	RequestOptional: 9,
	RequestRefuse: 10
});

/*<EndType Name="System.Security.Permissions.SecurityAction" />*/

/*<BeginType Name="System.CLSCompliantAttribute" />*/

$.ig.util.defType('CLSCompliantAttribute', 'Attribute', {
	init: function (isCompliant) {
		$.ig.Attribute.prototype.init.call(this);
	},
	$type: new $.ig.Type('CLSCompliantAttribute', $.ig.Attribute.prototype.$type)
}, true);

/*<EndType Name="System.CLSCompliantAttribute" />*/

/*<BeginType Name="System.NullReferenceException" />*/

$.ig.util.defType('NullReferenceException', 'SystemException', {
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
		$.ig.SystemException.prototype.init1.call(this, 1, $.ig.Locale.prototype.getText("A null value was found where an object instance was required."));
	},
	init1: function (initNumber, message) {
		$.ig.SystemException.prototype.init1.call(this, 1, message);
	},
	init2: function (initNumber, message, innerException) {
		$.ig.SystemException.prototype.init2.call(this, 2, message, innerException);
	},
	$type: new $.ig.Type('NullReferenceException', $.ig.SystemException.prototype.$type)
}, true);

/*<EndType Name="System.NullReferenceException" />*/

/*<BeginType Name="System.Hashtable" />*/

$.ig.util.defType('Hashtable', 'Object', {
	__dictionary: null,
	init: function () {
		this.__dictionary = new $.ig.Dictionary$2(String, $.ig.Object.prototype.$type, 0);
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginProperty Name="System.Collections.Generic.IEnumerable System.Hashtable::Keys()" />*/
	keys: function () {
		return this.__dictionary.keys();
	}
	/*<EndProperty Name="System.Collections.Generic.IEnumerable System.Hashtable::Keys()" />*/
	,
	/*<BeginMethod Name="System.Void System.Hashtable::Remove(System.String)" />*/
	remove: function (idx) {
		this.__dictionary.remove(idx);
	}
	/*<EndMethod Name="System.Void System.Hashtable::Remove(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.Hashtable::Add(System.String, System.Object)" />*/
	add: function (idx, value) {
		this.__dictionary.add(idx, value);
	}
	/*<EndMethod Name="System.Void System.Hashtable::Add(System.String, System.Object)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Hashtable::Contains(System.String)" />*/
	contains: function (idx) {
		return this.__dictionary.containsKey(idx);
	}
	/*<EndMethod Name="System.Boolean System.Hashtable::Contains(System.String)" />*/
	,
	/*<BeginProperty Name="System.Object System.Hashtable::Item(System.String)" />*/
	item: function (idx, value) {
		if (arguments.length === 2) {
			this.__dictionary.item(idx, value);
			return value;
		} else {
			return this.__dictionary.item(idx);
		}
	}
	/*<EndProperty Name="System.Object System.Hashtable::Item(System.String)" />*/
	,
	$type: new $.ig.Type('Hashtable', $.ig.Object.prototype.$type, [$.ig.IDictionary.prototype.$type])
}, true);

/*<EndType Name="System.Hashtable" />*/

/*<BeginType Name="System.IAsyncResult" />*/

$.ig.util.defType('IAsyncResult', 'Object', {
	$type: new $.ig.Type('IAsyncResult', null)
}, true);

/*<EndType Name="System.IAsyncResult" />*/

/*<BeginType Name="System.Locale" />*/

$.ig.util.defType('Locale', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.String System.Locale::GetText(System.String)" />*/
	getText: function (text) {
		return text;
	}
	/*<EndMethod Name="System.String System.Locale::GetText(System.String)" />*/
	,
	$type: new $.ig.Type('Locale', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.Locale" />*/

/*<BeginType Name="System.MarshalByRefObject" />*/

$.ig.util.defType('MarshalByRefObject', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	$type: new $.ig.Type('MarshalByRefObject', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.MarshalByRefObject" />*/

/*<BeginType Name="System.MonoLimitationAttribute" />*/

$.ig.util.defType('MonoLimitationAttribute', 'Attribute', {
	init: function (message) {
		$.ig.Attribute.prototype.init.call(this);
	},
	$type: new $.ig.Type('MonoLimitationAttribute', $.ig.Attribute.prototype.$type)
}, true);

/*<EndType Name="System.MonoLimitationAttribute" />*/

/*<BeginType Name="System.ObjectDisposedException" />*/

$.ig.util.defType('ObjectDisposedException', 'Error', {
	init: function (initNumber, parameter) {
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
	init1: function (initNumber, parameter, message) {
		$.ig.Error.prototype.init.call(this, 0);
	},
	$type: new $.ig.Type('ObjectDisposedException', $.ig.Error.prototype.$type)
}, true);

/*<EndType Name="System.ObjectDisposedException" />*/

/*<BeginType Name="System.SerializableAttribute" />*/

$.ig.util.defType('SerializableAttribute', 'Attribute', {
	init: function () {
		$.ig.Attribute.prototype.init.call(this);
	},
	$type: new $.ig.Type('SerializableAttribute', $.ig.Attribute.prototype.$type)
}, true);

/*<EndType Name="System.SerializableAttribute" />*/

/*<BeginType Name="System.FormatException2" />*/

$.ig.util.defType('FormatException2', 'Error', {
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
		$.ig.Error.prototype.init1.call(this, 1, $.ig.Locale.prototype.getText("Invalid format."));
		this.hResult($.ig.FormatException2.prototype._result);
	},
	init1: function (initNumber, message) {
		$.ig.Error.prototype.init1.call(this, 1, message);
		this.hResult($.ig.FormatException2.prototype._result);
	},
	init2: function (initNumber, message, innerException) {
		$.ig.Error.prototype.init2.call(this, 2, message, innerException);
		this.hResult($.ig.FormatException2.prototype._result);
	},
	_hResult: 0,
	/*<BeginProperty Name="System.Int32 System.FormatException2::HResult()" />*/
	hResult: function (value) {
		if (arguments.length === 1) {
			this._hResult = value;
			return value;
		} else {
			return this._hResult;
		}
	}
	/*<EndProperty Name="System.Int32 System.FormatException2::HResult()" />*/
	,
	$type: new $.ig.Type('FormatException2', $.ig.Error.prototype.$type)
}, true);

/*<EndType Name="System.FormatException2" />*/

/*<BeginType Name="System.IO.StreamAsyncResult" />*/

$.ig.util.defType('StreamAsyncResult', 'Object', {
	_state: null,
	_completed: false,
	_done: false,
	_exc: null,
	_nbytes: 0,
	_wh: null,
	init: function (state) {
		this._nbytes = -1;
		$.ig.Object.prototype.init.call(this);
		this._state = state;
	},
	/*<BeginMethod Name="System.Void System.IO.StreamAsyncResult::SetComplete(System.Exception)" />*/
	setComplete: function (e) {
		this._exc = e;
		this._completed = true;
		if (this._wh != null) {
			this._wh.set();
		}
	}
	/*<EndMethod Name="System.Void System.IO.StreamAsyncResult::SetComplete(System.Exception)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.StreamAsyncResult::SetComplete(System.Exception, System.Int32)" />*/
	setComplete1: function (e, nbytes) {
		this._nbytes = nbytes;
		this.setComplete(e);
	}
	/*<EndMethod Name="System.Void System.IO.StreamAsyncResult::SetComplete(System.Exception, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.Object System.IO.StreamAsyncResult::AsyncState()" />*/
	asyncState: function () {
		return this._state;
	}
	/*<EndProperty Name="System.Object System.IO.StreamAsyncResult::AsyncState()" />*/
	,
	/*<BeginProperty Name="System.Threading.WaitHandle System.IO.StreamAsyncResult::AsyncWaitHandle()" />*/
	asyncWaitHandle: function () {
		if (this._wh == null) {
			this._wh = new $.ig.ManualResetEvent(this._completed);
		}
		return this._wh;
	}
	/*<EndProperty Name="System.Threading.WaitHandle System.IO.StreamAsyncResult::AsyncWaitHandle()" />*/
	,
	/*<BeginProperty Name="System.Boolean System.IO.StreamAsyncResult::CompletedSynchronously()" />*/
	completedSynchronously: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean System.IO.StreamAsyncResult::CompletedSynchronously()" />*/
	,
	/*<BeginProperty Name="System.Boolean System.IO.StreamAsyncResult::IsCompleted()" />*/
	isCompleted: function () {
		return this._completed;
	}
	/*<EndProperty Name="System.Boolean System.IO.StreamAsyncResult::IsCompleted()" />*/
	,
	/*<BeginProperty Name="System.Exception System.IO.StreamAsyncResult::Exception()" />*/
	exception: function () {
		return this._exc;
	}
	/*<EndProperty Name="System.Exception System.IO.StreamAsyncResult::Exception()" />*/
	,
	/*<BeginProperty Name="System.Int32 System.IO.StreamAsyncResult::NBytes()" />*/
	nBytes: function () {
		return this._nbytes;
	}
	/*<EndProperty Name="System.Int32 System.IO.StreamAsyncResult::NBytes()" />*/
	,
	/*<BeginProperty Name="System.Boolean System.IO.StreamAsyncResult::Done()" />*/
	done: function (value) {
		if (arguments.length === 1) {
			this._done = value;
			return value;
		} else {
			return this._done;
		}
	}
	/*<EndProperty Name="System.Boolean System.IO.StreamAsyncResult::Done()" />*/
	,
	$type: new $.ig.Type('StreamAsyncResult', $.ig.Object.prototype.$type, [$.ig.IAsyncResult.prototype.$type])
}, true);

/*<EndType Name="System.IO.StreamAsyncResult" />*/

/*<BeginType Name="System.IO.NullStream" />*/

$.ig.util.defType('NullStream', 'Stream', {
	init: function () {
		$.ig.Stream.prototype.init.call(this);
	},
	/*<BeginProperty Name="System.Boolean System.IO.NullStream::CanRead()" />*/
	canRead: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean System.IO.NullStream::CanRead()" />*/
	,
	/*<BeginProperty Name="System.Boolean System.IO.NullStream::CanSeek()" />*/
	canSeek: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean System.IO.NullStream::CanSeek()" />*/
	,
	/*<BeginProperty Name="System.Boolean System.IO.NullStream::CanWrite()" />*/
	canWrite: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean System.IO.NullStream::CanWrite()" />*/
	,
	/*<BeginProperty Name="System.Int64 System.IO.NullStream::Length()" />*/
	length: function () {
		return 0;
	}
	/*<EndProperty Name="System.Int64 System.IO.NullStream::Length()" />*/
	,
	/*<BeginProperty Name="System.Int64 System.IO.NullStream::Position()" />*/
	position: function (value) {
		if (arguments.length === 1) {
			return value;
		} else {
			return 0;
		}
	}
	/*<EndProperty Name="System.Int64 System.IO.NullStream::Position()" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.NullStream::Flush()" />*/
	flush: function () {
	}
	/*<EndMethod Name="System.Void System.IO.NullStream::Flush()" />*/
	,
	/*<BeginMethod Name="System.Int32 System.IO.NullStream::Read(, System.Int32, System.Int32)" />*/
	read: function (buffer, offset, count) {
		return 0;
	}
	/*<EndMethod Name="System.Int32 System.IO.NullStream::Read(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.IO.NullStream::ReadByte()" />*/
	readByte: function () {
		return -1;
	}
	/*<EndMethod Name="System.Int32 System.IO.NullStream::ReadByte()" />*/
	,
	/*<BeginMethod Name="System.Int64 System.IO.NullStream::Seek(System.Int64, System.IO.SeekOrigin)" />*/
	seek: function (offset, origin) {
		return 0;
	}
	/*<EndMethod Name="System.Int64 System.IO.NullStream::Seek(System.Int64, System.IO.SeekOrigin)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.NullStream::SetLength(System.Int64)" />*/
	setLength: function (value) {
	}
	/*<EndMethod Name="System.Void System.IO.NullStream::SetLength(System.Int64)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.NullStream::Write(, System.Int32, System.Int32)" />*/
	write: function (buffer, offset, count) {
	}
	/*<EndMethod Name="System.Void System.IO.NullStream::Write(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.NullStream::WriteByte(System.Byte)" />*/
	writeByte: function (value) {
	}
	/*<EndMethod Name="System.Void System.IO.NullStream::WriteByte(System.Byte)" />*/
	,
	$type: new $.ig.Type('NullStream', $.ig.Stream.prototype.$type)
}, true);

/*<EndType Name="System.IO.NullStream" />*/

/*<BeginType Name="System.IO.TextWriter" />*/

$.ig.util.defType('TextWriter', 'MarshalByRefObject', {
	init: function (initNumber) {
		if (initNumber > 0) {
			switch (initNumber) {
				case 1:
					this.init1.apply(this, arguments);
					break;
			}
			return;
		}
		$.ig.MarshalByRefObject.prototype.init.call(this);
		this._coreNewLine = $.ig.util.toCharArray($.ig.Environment.prototype.newLine());
	},
	init1: function (initNumber, formatProvider) {
		$.ig.MarshalByRefObject.prototype.init.call(this);
		this._coreNewLine = $.ig.util.toCharArray($.ig.Environment.prototype.newLine());
		this._internalFormatProvider = formatProvider;
	},
	_coreNewLine: null,
	_internalFormatProvider: null,
	/*<BeginProperty Name="System.Text.Encoding System.IO.TextWriter::Encoding()" />*/
	encoding: function () {
	}
	/*<EndProperty Name="System.Text.Encoding System.IO.TextWriter::Encoding()" />*/
	,
	/*<BeginProperty Name="System.IFormatProvider System.IO.TextWriter::FormatProvider()" />*/
	formatProvider: function () {
		return this._internalFormatProvider;
	}
	/*<EndProperty Name="System.IFormatProvider System.IO.TextWriter::FormatProvider()" />*/
	,
	/*<BeginProperty Name="System.String System.IO.TextWriter::NewLine()" />*/
	newLine: function (value) {
		if (arguments.length === 1) {
			if (value == null) {
				value = $.ig.Environment.prototype.newLine();
			}
			this._coreNewLine = $.ig.util.toCharArray(value);
			return value;
		} else {
			return $.ig.util.createString1(this._coreNewLine);
		}
	}
	/*<EndProperty Name="System.String System.IO.TextWriter::NewLine()" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.TextWriter::Close()" />*/
	close: function () {
		this.dispose1(true);
	}
	/*<EndMethod Name="System.Void System.IO.TextWriter::Close()" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.TextWriter::Dispose(System.Boolean)" />*/
	dispose1: function (disposing) {
		if (disposing) {
		}
	}
	/*<EndMethod Name="System.Void System.IO.TextWriter::Dispose(System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.TextWriter::Dispose()" />*/
	dispose: function () {
		this.dispose1(true);
	}
	/*<EndMethod Name="System.Void System.IO.TextWriter::Dispose()" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.TextWriter::Flush()" />*/
	flush: function () {
	}
	/*<EndMethod Name="System.Void System.IO.TextWriter::Flush()" />*/
	,
	/*<BeginMethod Name="System.IO.TextWriter System.IO.TextWriter::Synchronized(System.IO.TextWriter)" />*/
	synched: function (writer) {
		return $.ig.TextWriter.prototype.synched_1(writer, false);
	}
	/*<EndMethod Name="System.IO.TextWriter System.IO.TextWriter::Synchronized(System.IO.TextWriter)" />*/
	,
	/*<BeginMethod Name="System.IO.TextWriter System.IO.TextWriter::Synchronized(System.IO.TextWriter, System.Boolean)" />*/
	synched_1: function (writer, neverClose) {
		if (writer == null) {
			throw new $.ig.ArgumentNullException(0, "writer is null");
		}
		if ($.ig.util.cast($.ig.SynchronizedWriter.prototype.$type, writer) !== null) {
			return writer;
		}
		return new $.ig.SynchronizedWriter(1, writer, neverClose);
	}
	/*<EndMethod Name="System.IO.TextWriter System.IO.TextWriter::Synchronized(System.IO.TextWriter, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.TextWriter::Write(System.Boolean)" />*/
	write2: function (value) {
		this.write10(value.toString());
	}
	/*<EndMethod Name="System.Void System.IO.TextWriter::Write(System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.TextWriter::Write(System.Char)" />*/
	write3: function (value) {
	}
	/*<EndMethod Name="System.Void System.IO.TextWriter::Write(System.Char)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.TextWriter::Write()" />*/
	write: function (buffer) {
		if (buffer == null) {
			return;
		}
		this.write1(buffer, 0, buffer.length);
	}
	/*<EndMethod Name="System.Void System.IO.TextWriter::Write()" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.TextWriter::Write(System.Decimal)" />*/
	write4: function (value) {
		this.write10(value.toString1(this._internalFormatProvider));
	}
	/*<EndMethod Name="System.Void System.IO.TextWriter::Write(System.Decimal)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.TextWriter::Write(System.Double)" />*/
	write5: function (value) {
		this.write10($.ig.util.numberToString(value, this._internalFormatProvider));
	}
	/*<EndMethod Name="System.Void System.IO.TextWriter::Write(System.Double)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.TextWriter::Write(System.Int32)" />*/
	write6: function (value) {
		this.write10($.ig.util.numberToString(value, this._internalFormatProvider));
	}
	/*<EndMethod Name="System.Void System.IO.TextWriter::Write(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.TextWriter::Write(System.Int64)" />*/
	write7: function (value) {
		this.write10(value.toString1(this._internalFormatProvider));
	}
	/*<EndMethod Name="System.Void System.IO.TextWriter::Write(System.Int64)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.TextWriter::Write(System.Object)" />*/
	write8: function (value) {
		if (value != null) {
			this.write10(value.toString());
		}
	}
	/*<EndMethod Name="System.Void System.IO.TextWriter::Write(System.Object)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.TextWriter::Write(System.Single)" />*/
	write9: function (value) {
		this.write10($.ig.util.numberToString(value, this._internalFormatProvider));
	}
	/*<EndMethod Name="System.Void System.IO.TextWriter::Write(System.Single)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.TextWriter::Write(System.String)" />*/
	write10: function (value) {
		if (value != null) {
			this.write($.ig.util.toCharArray(value));
		}
	}
	/*<EndMethod Name="System.Void System.IO.TextWriter::Write(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.TextWriter::Write(System.UInt32)" />*/
	write15: function (value) {
		this.write10($.ig.util.intToString(value, this._internalFormatProvider));
	}
	/*<EndMethod Name="System.Void System.IO.TextWriter::Write(System.UInt32)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.TextWriter::Write(System.UInt64)" />*/
	write16: function (value) {
		this.write10(value.toString1(this._internalFormatProvider));
	}
	/*<EndMethod Name="System.Void System.IO.TextWriter::Write(System.UInt64)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.TextWriter::Write(System.String, System.Object)" />*/
	write12: function (format, arg0) {
		this.write10($.ig.util.stringFormat(format, arg0));
	}
	/*<EndMethod Name="System.Void System.IO.TextWriter::Write(System.String, System.Object)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.TextWriter::Write(System.String, )" />*/
	write11: function (format, arg) {
		this.write10($.ig.util.stringFormat1(format, arg));
	}
	/*<EndMethod Name="System.Void System.IO.TextWriter::Write(System.String, )" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.TextWriter::Write(, System.Int32, System.Int32)" />*/
	write1: function (buffer, index, count) {
		if (buffer == null) {
			throw new $.ig.ArgumentNullException(0, "buffer");
		}
		if (index < 0 || index > buffer.length) {
			throw new $.ig.ArgumentOutOfRangeException(1, "index");
		}
		if (count < 0 || (index > buffer.length - count)) {
			throw new $.ig.ArgumentOutOfRangeException(1, "count");
		}
		for (; count > 0; --count , ++index) {
			this.write3(buffer[index]);
		}
	}
	/*<EndMethod Name="System.Void System.IO.TextWriter::Write(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.TextWriter::Write(System.String, System.Object, System.Object)" />*/
	write13: function (format, arg0, arg1) {
		this.write10($.ig.util.stringFormat(format, arg0, arg1));
	}
	/*<EndMethod Name="System.Void System.IO.TextWriter::Write(System.String, System.Object, System.Object)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.TextWriter::Write(System.String, System.Object, System.Object, System.Object)" />*/
	write14: function (format, arg0, arg1, arg2) {
		this.write10($.ig.util.stringFormat(format, arg0, arg1, arg2));
	}
	/*<EndMethod Name="System.Void System.IO.TextWriter::Write(System.String, System.Object, System.Object, System.Object)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.TextWriter::WriteLine()" />*/
	writeLine: function () {
		this.write(this._coreNewLine);
	}
	/*<EndMethod Name="System.Void System.IO.TextWriter::WriteLine()" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.TextWriter::WriteLine(System.Boolean)" />*/
	writeLine3: function (value) {
		this.write2(value);
		this.writeLine();
	}
	/*<EndMethod Name="System.Void System.IO.TextWriter::WriteLine(System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.TextWriter::WriteLine(System.Char)" />*/
	writeLine4: function (value) {
		this.write3(value);
		this.writeLine();
	}
	/*<EndMethod Name="System.Void System.IO.TextWriter::WriteLine(System.Char)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.TextWriter::WriteLine()" />*/
	writeLine1: function (buffer) {
		this.write(buffer);
		this.writeLine();
	}
	/*<EndMethod Name="System.Void System.IO.TextWriter::WriteLine()" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.TextWriter::WriteLine(System.Decimal)" />*/
	writeLine5: function (value) {
		this.write4(value);
		this.writeLine();
	}
	/*<EndMethod Name="System.Void System.IO.TextWriter::WriteLine(System.Decimal)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.TextWriter::WriteLine(System.Double)" />*/
	writeLine6: function (value) {
		this.write5(value);
		this.writeLine();
	}
	/*<EndMethod Name="System.Void System.IO.TextWriter::WriteLine(System.Double)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.TextWriter::WriteLine(System.Int32)" />*/
	writeLine7: function (value) {
		this.write6(value);
		this.writeLine();
	}
	/*<EndMethod Name="System.Void System.IO.TextWriter::WriteLine(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.TextWriter::WriteLine(System.Int64)" />*/
	writeLine8: function (value) {
		this.write7(value);
		this.writeLine();
	}
	/*<EndMethod Name="System.Void System.IO.TextWriter::WriteLine(System.Int64)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.TextWriter::WriteLine(System.Object)" />*/
	writeLine9: function (value) {
		this.write8(value);
		this.writeLine();
	}
	/*<EndMethod Name="System.Void System.IO.TextWriter::WriteLine(System.Object)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.TextWriter::WriteLine(System.Single)" />*/
	writeLine10: function (value) {
		this.write9(value);
		this.writeLine();
	}
	/*<EndMethod Name="System.Void System.IO.TextWriter::WriteLine(System.Single)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.TextWriter::WriteLine(System.String)" />*/
	writeLine11: function (value) {
		this.write10(value);
		this.writeLine();
	}
	/*<EndMethod Name="System.Void System.IO.TextWriter::WriteLine(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.TextWriter::WriteLine(System.UInt32)" />*/
	writeLine16: function (value) {
		this.write15(value);
		this.writeLine();
	}
	/*<EndMethod Name="System.Void System.IO.TextWriter::WriteLine(System.UInt32)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.TextWriter::WriteLine(System.UInt64)" />*/
	writeLine17: function (value) {
		this.write16(value);
		this.writeLine();
	}
	/*<EndMethod Name="System.Void System.IO.TextWriter::WriteLine(System.UInt64)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.TextWriter::WriteLine(System.String, System.Object)" />*/
	writeLine13: function (format, arg0) {
		this.write12(format, arg0);
		this.writeLine();
	}
	/*<EndMethod Name="System.Void System.IO.TextWriter::WriteLine(System.String, System.Object)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.TextWriter::WriteLine(System.String, )" />*/
	writeLine12: function (format, arg) {
		this.write11(format, arg);
		this.writeLine();
	}
	/*<EndMethod Name="System.Void System.IO.TextWriter::WriteLine(System.String, )" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.TextWriter::WriteLine(, System.Int32, System.Int32)" />*/
	writeLine2: function (buffer, index, count) {
		this.write1(buffer, index, count);
		this.writeLine();
	}
	/*<EndMethod Name="System.Void System.IO.TextWriter::WriteLine(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.TextWriter::WriteLine(System.String, System.Object, System.Object)" />*/
	writeLine14: function (format, arg0, arg1) {
		this.write13(format, arg0, arg1);
		this.writeLine();
	}
	/*<EndMethod Name="System.Void System.IO.TextWriter::WriteLine(System.String, System.Object, System.Object)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.TextWriter::WriteLine(System.String, System.Object, System.Object, System.Object)" />*/
	writeLine15: function (format, arg0, arg1, arg2) {
		this.write14(format, arg0, arg1, arg2);
		this.writeLine();
	}
	/*<EndMethod Name="System.Void System.IO.TextWriter::WriteLine(System.String, System.Object, System.Object, System.Object)" />*/
	,
	$type: new $.ig.Type('TextWriter', $.ig.MarshalByRefObject.prototype.$type, [$.ig.IDisposable.prototype.$type])
}, true);

/*<EndType Name="System.IO.TextWriter" />*/

/*<BeginType Name="System.IO.StreamWriter" />*/

$.ig.util.defType('StreamWriter', 'TextWriter', {
	_internalEncoding: null,
	_internalStream: null,
	_iflush: false,
	_byte_buf: null,
	_byte_pos: 0,
	_decode_buf: null,
	_decode_pos: 0,
	_disposedAlready: false,
	_preamble_done: false,
	init: function (initNumber, stream) {
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
		$.ig.StreamWriter.prototype.init2.call(this, 2, stream, $.ig.Encoding.prototype.uTF8Unmarked(), $.ig.StreamWriter.prototype._defaultBufferSize);
	},
	init1: function (initNumber, stream, encoding) {
		$.ig.StreamWriter.prototype.init2.call(this, 2, stream, encoding, $.ig.StreamWriter.prototype._defaultBufferSize);
	},
	/*<BeginMethod Name="System.Void System.IO.StreamWriter::Initialize(System.Text.Encoding, System.Int32)" />*/
	initialize: function (encoding, bufferSize) {
		this._internalEncoding = encoding;
		this._decode_pos = this._byte_pos = 0;
		var BufferSize = Math.max(bufferSize, $.ig.StreamWriter.prototype._minimumBufferSize);
		this._decode_buf = new Array(BufferSize);
		this._byte_buf = new Array(encoding.getMaxByteCount(BufferSize));
		if (this._internalStream.canSeek() && this._internalStream.position() > 0) {
			this._preamble_done = true;
		}
	}
	/*<EndMethod Name="System.Void System.IO.StreamWriter::Initialize(System.Text.Encoding, System.Int32)" />*/
	,
	init2: function (initNumber, stream, encoding, bufferSize) {
		$.ig.TextWriter.prototype.init.call(this, 0);
		if (null == stream) {
			throw new $.ig.ArgumentNullException(0, "stream");
		}
		if (null == encoding) {
			throw new $.ig.ArgumentNullException(0, "encoding");
		}
		if (bufferSize <= 0) {
			throw new $.ig.ArgumentOutOfRangeException(1, "bufferSize");
		}
		if (!stream.canWrite()) {
			throw new $.ig.ArgumentException(1, "Can not write to stream");
		}
		this._internalStream = stream;
		this.initialize(encoding, bufferSize);
	},
	/*<BeginProperty Name="System.Boolean System.IO.StreamWriter::AutoFlush()" />*/
	autoFlush: function (value) {
		if (arguments.length === 1) {
			this._iflush = value;
			if (this._iflush) {
				this.flush();
			}
			return value;
		} else {
			return this._iflush;
		}
	}
	/*<EndProperty Name="System.Boolean System.IO.StreamWriter::AutoFlush()" />*/
	,
	/*<BeginProperty Name="System.IO.Stream System.IO.StreamWriter::BaseStream()" />*/
	baseStream: function () {
		return this._internalStream;
	}
	/*<EndProperty Name="System.IO.Stream System.IO.StreamWriter::BaseStream()" />*/
	,
	/*<BeginProperty Name="System.Text.Encoding System.IO.StreamWriter::Encoding()" />*/
	encoding: function () {
		return this._internalEncoding;
	}
	/*<EndProperty Name="System.Text.Encoding System.IO.StreamWriter::Encoding()" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.StreamWriter::Dispose(System.Boolean)" />*/
	dispose1: function (disposing) {
		var exc = null;
		if (!this._disposedAlready && disposing && this._internalStream != null) {
			try {
				this.flush();
			}
			catch (e) {
				exc = e;
			}
			this._disposedAlready = true;
			try {
				this._internalStream.close();
			}
			catch (e1) {
				if (exc == null) {
					exc = e1;
				}
			}
		}
		this._internalStream = null;
		this._byte_buf = null;
		this._internalEncoding = null;
		this._decode_buf = null;
		if (exc != null) {
			throw exc;
		}
	}
	/*<EndMethod Name="System.Void System.IO.StreamWriter::Dispose(System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.StreamWriter::Flush()" />*/
	flush: function () {
		if (this._disposedAlready) {
			throw new $.ig.ObjectDisposedException(0, "StreamWriter");
		}
		this.decode();
		if (this._byte_pos > 0) {
			this.flushBytes();
			this._internalStream.flush();
		}
	}
	/*<EndMethod Name="System.Void System.IO.StreamWriter::Flush()" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.StreamWriter::FlushBytes()" />*/
	flushBytes: function () {
		if (!this._preamble_done && this._byte_pos > 0) {
			var preamble = this._internalEncoding.getPreamble();
			if (preamble.length > 0) {
				this._internalStream.write(preamble, 0, preamble.length);
			}
			this._preamble_done = true;
		}
		this._internalStream.write(this._byte_buf, 0, this._byte_pos);
		this._byte_pos = 0;
	}
	/*<EndMethod Name="System.Void System.IO.StreamWriter::FlushBytes()" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.StreamWriter::Decode()" />*/
	decode: function () {
		if (this._byte_pos > 0) {
			this.flushBytes();
		}
		if (this._decode_pos > 0) {
			var len = this._internalEncoding.getBytes2(this._decode_buf, 0, this._decode_pos, this._byte_buf, this._byte_pos);
			this._byte_pos += len;
			this._decode_pos = 0;
		}
	}
	/*<EndMethod Name="System.Void System.IO.StreamWriter::Decode()" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.StreamWriter::Write(, System.Int32, System.Int32)" />*/
	write1: function (buffer, index, count) {
		if (this._disposedAlready) {
			throw new $.ig.ObjectDisposedException(0, "StreamWriter");
		}
		if (buffer == null) {
			throw new $.ig.ArgumentNullException(0, "buffer");
		}
		if (index < 0) {
			throw new $.ig.ArgumentOutOfRangeException(2, "index", "< 0");
		}
		if (count < 0) {
			throw new $.ig.ArgumentOutOfRangeException(2, "count", "< 0");
		}
		if (index > buffer.length - count) {
			throw new $.ig.ArgumentException(1, "index + count > buffer.Length");
		}
		this.lowLevelWrite(buffer, index, count);
		if (this._iflush) {
			this.flush();
		}
	}
	/*<EndMethod Name="System.Void System.IO.StreamWriter::Write(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.StreamWriter::LowLevelWrite(, System.Int32, System.Int32)" />*/
	lowLevelWrite: function (buffer, index, count) {
		while (count > 0) {
			var todo = this._decode_buf.length - this._decode_pos;
			if (todo == 0) {
				this.decode();
				todo = this._decode_buf.length;
			}
			if (todo > count) {
				todo = count;
			}
			$.ig.util.arrayCopy1(buffer, index, this._decode_buf, this._decode_pos, todo);
			count -= todo;
			index += todo;
			this._decode_pos += todo;
		}
	}
	/*<EndMethod Name="System.Void System.IO.StreamWriter::LowLevelWrite(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.StreamWriter::LowLevelWrite(System.String)" />*/
	lowLevelWrite1: function (s) {
		var count = s.length;
		var index = 0;
		while (count > 0) {
			var todo = this._decode_buf.length - this._decode_pos;
			if (todo == 0) {
				this.decode();
				todo = this._decode_buf.length;
			}
			if (todo > count) {
				todo = count;
			}
			for (var i = 0; i < todo; i++) {
				this._decode_buf[i + this._decode_pos] = s.charAt(i + index);
			}
			count -= todo;
			index += todo;
			this._decode_pos += todo;
		}
	}
	/*<EndMethod Name="System.Void System.IO.StreamWriter::LowLevelWrite(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.StreamWriter::Write(System.Char)" />*/
	write3: function (value) {
		if (this._disposedAlready) {
			throw new $.ig.ObjectDisposedException(0, "StreamWriter");
		}
		if (this._decode_pos >= this._decode_buf.length) {
			this.decode();
		}
		this._decode_buf[this._decode_pos++] = value;
		if (this._iflush) {
			this.flush();
		}
	}
	/*<EndMethod Name="System.Void System.IO.StreamWriter::Write(System.Char)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.StreamWriter::Write()" />*/
	write: function (buffer) {
		if (this._disposedAlready) {
			throw new $.ig.ObjectDisposedException(0, "StreamWriter");
		}
		if (buffer != null) {
			this.lowLevelWrite(buffer, 0, buffer.length);
		}
		if (this._iflush) {
			this.flush();
		}
	}
	/*<EndMethod Name="System.Void System.IO.StreamWriter::Write()" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.StreamWriter::Write(System.String)" />*/
	write10: function (value) {
		if (this._disposedAlready) {
			throw new $.ig.ObjectDisposedException(0, "StreamWriter");
		}
		if (value != null) {
			this.lowLevelWrite1(value);
		}
		if (this._iflush) {
			this.flush();
		}
	}
	/*<EndMethod Name="System.Void System.IO.StreamWriter::Write(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.StreamWriter::Close()" />*/
	close: function () {
		this.dispose1(true);
	}
	/*<EndMethod Name="System.Void System.IO.StreamWriter::Close()" />*/
	,
	$type: new $.ig.Type('StreamWriter', $.ig.TextWriter.prototype.$type)
}, true);

/*<EndType Name="System.IO.StreamWriter" />*/

/*<BeginType Name="System.IO.StringReader" />*/

$.ig.util.defType('StringReader', 'TextReader', {
	_source: null,
	_nextChar: 0,
	_sourceLength: 0,
	init: function (s) {
		$.ig.TextReader.prototype.init.call(this);
		if (s == null) {
			throw new $.ig.ArgumentNullException(0, "s");
		}
		this._source = s;
		this._nextChar = 0;
		this._sourceLength = s.length;
	},
	/*<BeginMethod Name="System.Void System.IO.StringReader::Close()" />*/
	close: function () {
		this.dispose1(true);
	}
	/*<EndMethod Name="System.Void System.IO.StringReader::Close()" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.StringReader::Dispose(System.Boolean)" />*/
	dispose1: function (disposing) {
		this._source = null;
		$.ig.TextReader.prototype.dispose1.call(this, disposing);
	}
	/*<EndMethod Name="System.Void System.IO.StringReader::Dispose(System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.IO.StringReader::Peek()" />*/
	peek: function () {
		this.checkObjectDisposedException();
		if (this._nextChar >= this._sourceLength) {
			return -1;
		} else {
			return this._source.charAt(this._nextChar).charCodeAt(0);
		}
	}
	/*<EndMethod Name="System.Int32 System.IO.StringReader::Peek()" />*/
	,
	/*<BeginMethod Name="System.Int32 System.IO.StringReader::Read()" />*/
	read: function () {
		this.checkObjectDisposedException();
		if (this._nextChar >= this._sourceLength) {
			return -1;
		} else {
			return this._source.charAt(this._nextChar++).charCodeAt(0);
		}
	}
	/*<EndMethod Name="System.Int32 System.IO.StringReader::Read()" />*/
	,
	/*<BeginMethod Name="System.Int32 System.IO.StringReader::Read(, System.Int32, System.Int32)" />*/
	read1: function (buffer, index, count) {
		this.checkObjectDisposedException();
		if (buffer == null) {
			throw new $.ig.ArgumentNullException(0, "buffer");
		}
		if (buffer.length - index < count) {
			throw new $.ig.ArgumentException(1, String.empty());
		}
		if (index < 0 || count < 0) {
			throw new $.ig.ArgumentOutOfRangeException(0);
		}
		var charsToRead;
		if (this._nextChar > this._sourceLength - count) {
			charsToRead = this._sourceLength - this._nextChar;
		} else {
			charsToRead = count;
		}
		this._source.copyTo(this._nextChar, buffer, index, charsToRead);
		this._nextChar += charsToRead;
		return charsToRead;
	}
	/*<EndMethod Name="System.Int32 System.IO.StringReader::Read(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.String System.IO.StringReader::ReadLine()" />*/
	readLine: function () {
		this.checkObjectDisposedException();
		if (this._nextChar >= this._source.length) {
			return null;
		}
		var nextCR = this._source.indexOf('\r', this._nextChar);
		var nextLF = this._source.indexOf('\n', this._nextChar);
		var readTo;
		var consecutive = false;
		if (nextCR == -1) {
			if (nextLF == -1) {
				return this.readToEnd();
			}
			readTo = nextLF;
		} else if (nextLF == -1) {
			readTo = nextCR;
		} else {
			readTo = (nextCR > nextLF) ? nextLF : nextCR;
			consecutive = (nextCR + 1 == nextLF);
		}
		var nextLine = this._source.substr(this._nextChar, readTo - this._nextChar);
		this._nextChar = readTo + ((consecutive) ? 2 : 1);
		return nextLine;
	}
	/*<EndMethod Name="System.String System.IO.StringReader::ReadLine()" />*/
	,
	/*<BeginMethod Name="System.String System.IO.StringReader::ReadToEnd()" />*/
	readToEnd: function () {
		this.checkObjectDisposedException();
		var toEnd = this._source.substr(this._nextChar, this._sourceLength - this._nextChar);
		this._nextChar = this._sourceLength;
		return toEnd;
	}
	/*<EndMethod Name="System.String System.IO.StringReader::ReadToEnd()" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.StringReader::CheckObjectDisposedException()" />*/
	checkObjectDisposedException: function () {
		if (this._source == null) {
			throw new $.ig.ObjectDisposedException(1, "StringReader", "Cannot read from a closed StringReader");
		}
	}
	/*<EndMethod Name="System.Void System.IO.StringReader::CheckObjectDisposedException()" />*/
	,
	$type: new $.ig.Type('StringReader', $.ig.TextReader.prototype.$type)
}, true);

/*<EndType Name="System.IO.StringReader" />*/

/*<BeginType Name="System.IO.StringWriter" />*/

$.ig.util.defType('StringWriter', 'TextWriter', {
	_internalString: null,
	_disposed: false,
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
		$.ig.StringWriter.prototype.init2.call(this, 2, new $.ig.StringBuilder(0));
	},
	init1: function (initNumber, formatProvider) {
		$.ig.StringWriter.prototype.init3.call(this, 3, new $.ig.StringBuilder(0), formatProvider);
	},
	init2: function (initNumber, sb) {
		$.ig.StringWriter.prototype.init3.call(this, 3, sb, null);
	},
	init3: function (initNumber, sb, formatProvider) {
		this._disposed = false;
		$.ig.TextWriter.prototype.init.call(this, 0);
		if (sb == null) {
			throw new $.ig.ArgumentNullException(0, "sb");
		}
		this._internalString = sb;
		this._internalFormatProvider = formatProvider;
	},
	/*<BeginProperty Name="System.Text.Encoding System.IO.StringWriter::Encoding()" />*/
	encoding: function () {
		return $.ig.Encoding.prototype.unicode();
	}
	/*<EndProperty Name="System.Text.Encoding System.IO.StringWriter::Encoding()" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.StringWriter::Close()" />*/
	close: function () {
		this.dispose1(true);
		this._disposed = true;
	}
	/*<EndMethod Name="System.Void System.IO.StringWriter::Close()" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.StringWriter::Dispose(System.Boolean)" />*/
	dispose1: function (disposing) {
		$.ig.TextWriter.prototype.dispose1.call(this, disposing);
		this._disposed = true;
	}
	/*<EndMethod Name="System.Void System.IO.StringWriter::Dispose(System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Text.StringBuilder System.IO.StringWriter::GetStringBuilder()" />*/
	getStringBuilder: function () {
		return this._internalString;
	}
	/*<EndMethod Name="System.Text.StringBuilder System.IO.StringWriter::GetStringBuilder()" />*/
	,
	/*<BeginMethod Name="System.String System.IO.StringWriter::ToString()" />*/
	toString: function () {
		return this._internalString.toString();
	}
	/*<EndMethod Name="System.String System.IO.StringWriter::ToString()" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.StringWriter::Write(System.Char)" />*/
	write3: function (value) {
		if (this._disposed) {
			throw new $.ig.ObjectDisposedException(1, "StringReader", $.ig.Locale.prototype.getText("Cannot write to a closed StringWriter"));
		}
		this._internalString.append1(value);
	}
	/*<EndMethod Name="System.Void System.IO.StringWriter::Write(System.Char)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.StringWriter::Write(System.String)" />*/
	write10: function (value) {
		if (this._disposed) {
			throw new $.ig.ObjectDisposedException(1, "StringReader", $.ig.Locale.prototype.getText("Cannot write to a closed StringWriter"));
		}
		this._internalString.append5(value);
	}
	/*<EndMethod Name="System.Void System.IO.StringWriter::Write(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.StringWriter::Write(, System.Int32, System.Int32)" />*/
	write1: function (buffer, index, count) {
		if (this._disposed) {
			throw new $.ig.ObjectDisposedException(1, "StringReader", $.ig.Locale.prototype.getText("Cannot write to a closed StringWriter"));
		}
		if (buffer == null) {
			throw new $.ig.ArgumentNullException(0, "buffer");
		}
		if (index < 0) {
			throw new $.ig.ArgumentOutOfRangeException(2, "index", "< 0");
		}
		if (count < 0) {
			throw new $.ig.ArgumentOutOfRangeException(2, "count", "< 0");
		}
		if (index > buffer.length - count) {
			throw new $.ig.ArgumentException(1, "index + count > buffer.Length");
		}
		this._internalString.append(buffer, index, count);
	}
	/*<EndMethod Name="System.Void System.IO.StringWriter::Write(, System.Int32, System.Int32)" />*/
	,
	$type: new $.ig.Type('StringWriter', $.ig.TextWriter.prototype.$type)
}, true);

/*<EndType Name="System.IO.StringWriter" />*/

/*<BeginType Name="System.IO.TextWriter_NullTextWriter" />*/

$.ig.util.defType('TextWriter_NullTextWriter', 'TextWriter', {
	init: function () {
		$.ig.TextWriter.prototype.init.call(this, 0);
	},
	/*<BeginProperty Name="System.Text.Encoding System.IO.TextWriter_NullTextWriter::Encoding()" />*/
	encoding: function () {
		return $.ig.Encoding.prototype.defaultValue();
	}
	/*<EndProperty Name="System.Text.Encoding System.IO.TextWriter_NullTextWriter::Encoding()" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.TextWriter_NullTextWriter::Write(System.String)" />*/
	write10: function (s) {
	}
	/*<EndMethod Name="System.Void System.IO.TextWriter_NullTextWriter::Write(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.TextWriter_NullTextWriter::Write(System.Char)" />*/
	write3: function (value) {
	}
	/*<EndMethod Name="System.Void System.IO.TextWriter_NullTextWriter::Write(System.Char)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.TextWriter_NullTextWriter::Write(, System.Int32, System.Int32)" />*/
	write1: function (value, index, count) {
	}
	/*<EndMethod Name="System.Void System.IO.TextWriter_NullTextWriter::Write(, System.Int32, System.Int32)" />*/
	,
	$type: new $.ig.Type('TextWriter_NullTextWriter', $.ig.TextWriter.prototype.$type)
}, true);

/*<EndType Name="System.IO.TextWriter_NullTextWriter" />*/

/*<BeginType Name="System.IO.SynchronizedWriter" />*/

$.ig.util.defType('SynchronizedWriter', 'TextWriter', {
	_writer: null,
	_neverClose: false,
	init: function (initNumber, writer) {
		if (initNumber > 0) {
			switch (initNumber) {
				case 1:
					this.init1.apply(this, arguments);
					break;
			}
			return;
		}
		$.ig.SynchronizedWriter.prototype.init1.call(this, 1, writer, false);
	},
	init1: function (initNumber, writer, neverClose) {
		$.ig.TextWriter.prototype.init.call(this, 0);
		this._writer = writer;
		this._neverClose = neverClose;
	},
	/*<BeginMethod Name="System.Void System.IO.SynchronizedWriter::Close()" />*/
	close: function () {
		if (this._neverClose) {
			return;
		}
		this._writer.close();
	}
	/*<EndMethod Name="System.Void System.IO.SynchronizedWriter::Close()" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.SynchronizedWriter::Flush()" />*/
	flush: function () {
		this._writer.flush();
	}
	/*<EndMethod Name="System.Void System.IO.SynchronizedWriter::Flush()" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.SynchronizedWriter::Write(System.Boolean)" />*/
	write2: function (value) {
		this._writer.write2(value);
	}
	/*<EndMethod Name="System.Void System.IO.SynchronizedWriter::Write(System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.SynchronizedWriter::Write(System.Char)" />*/
	write3: function (value) {
		this._writer.write3(value);
	}
	/*<EndMethod Name="System.Void System.IO.SynchronizedWriter::Write(System.Char)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.SynchronizedWriter::Write()" />*/
	write: function (value) {
		this._writer.write(value);
	}
	/*<EndMethod Name="System.Void System.IO.SynchronizedWriter::Write()" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.SynchronizedWriter::Write(System.Decimal)" />*/
	write4: function (value) {
		this._writer.write4(value);
	}
	/*<EndMethod Name="System.Void System.IO.SynchronizedWriter::Write(System.Decimal)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.SynchronizedWriter::Write(System.Int32)" />*/
	write6: function (value) {
		this._writer.write6(value);
	}
	/*<EndMethod Name="System.Void System.IO.SynchronizedWriter::Write(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.SynchronizedWriter::Write(System.Int64)" />*/
	write7: function (value) {
		this._writer.write7(value);
	}
	/*<EndMethod Name="System.Void System.IO.SynchronizedWriter::Write(System.Int64)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.SynchronizedWriter::Write(System.Object)" />*/
	write8: function (value) {
		this._writer.write8(value);
	}
	/*<EndMethod Name="System.Void System.IO.SynchronizedWriter::Write(System.Object)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.SynchronizedWriter::Write(System.Single)" />*/
	write9: function (value) {
		this._writer.write9(value);
	}
	/*<EndMethod Name="System.Void System.IO.SynchronizedWriter::Write(System.Single)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.SynchronizedWriter::Write(System.String)" />*/
	write10: function (value) {
		this._writer.write10(value);
	}
	/*<EndMethod Name="System.Void System.IO.SynchronizedWriter::Write(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.SynchronizedWriter::Write(System.UInt32)" />*/
	write15: function (value) {
		this._writer.write15(value);
	}
	/*<EndMethod Name="System.Void System.IO.SynchronizedWriter::Write(System.UInt32)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.SynchronizedWriter::Write(System.UInt64)" />*/
	write16: function (value) {
		this._writer.write16(value);
	}
	/*<EndMethod Name="System.Void System.IO.SynchronizedWriter::Write(System.UInt64)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.SynchronizedWriter::Write(System.String, System.Object)" />*/
	write12: function (format, value) {
		this._writer.write12(format, value);
	}
	/*<EndMethod Name="System.Void System.IO.SynchronizedWriter::Write(System.String, System.Object)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.SynchronizedWriter::Write(System.String, )" />*/
	write11: function (format, value) {
		this._writer.write11(format, value);
	}
	/*<EndMethod Name="System.Void System.IO.SynchronizedWriter::Write(System.String, )" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.SynchronizedWriter::Write(, System.Int32, System.Int32)" />*/
	write1: function (buffer, index, count) {
		this._writer.write1(buffer, index, count);
	}
	/*<EndMethod Name="System.Void System.IO.SynchronizedWriter::Write(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.SynchronizedWriter::Write(System.String, System.Object, System.Object)" />*/
	write13: function (format, arg0, arg1) {
		this._writer.write13(format, arg0, arg1);
	}
	/*<EndMethod Name="System.Void System.IO.SynchronizedWriter::Write(System.String, System.Object, System.Object)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.SynchronizedWriter::Write(System.String, System.Object, System.Object, System.Object)" />*/
	write14: function (format, arg0, arg1, arg2) {
		this._writer.write14(format, arg0, arg1, arg2);
	}
	/*<EndMethod Name="System.Void System.IO.SynchronizedWriter::Write(System.String, System.Object, System.Object, System.Object)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.SynchronizedWriter::WriteLine()" />*/
	writeLine: function () {
		this._writer.writeLine();
	}
	/*<EndMethod Name="System.Void System.IO.SynchronizedWriter::WriteLine()" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.SynchronizedWriter::WriteLine(System.Boolean)" />*/
	writeLine3: function (value) {
		this._writer.writeLine3(value);
	}
	/*<EndMethod Name="System.Void System.IO.SynchronizedWriter::WriteLine(System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.SynchronizedWriter::WriteLine(System.Char)" />*/
	writeLine4: function (value) {
		this._writer.writeLine4(value);
	}
	/*<EndMethod Name="System.Void System.IO.SynchronizedWriter::WriteLine(System.Char)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.SynchronizedWriter::WriteLine()" />*/
	writeLine1: function (value) {
		this._writer.writeLine1(value);
	}
	/*<EndMethod Name="System.Void System.IO.SynchronizedWriter::WriteLine()" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.SynchronizedWriter::WriteLine(System.Decimal)" />*/
	writeLine5: function (value) {
		this._writer.writeLine5(value);
	}
	/*<EndMethod Name="System.Void System.IO.SynchronizedWriter::WriteLine(System.Decimal)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.SynchronizedWriter::WriteLine(System.Double)" />*/
	writeLine6: function (value) {
		this._writer.writeLine6(value);
	}
	/*<EndMethod Name="System.Void System.IO.SynchronizedWriter::WriteLine(System.Double)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.SynchronizedWriter::WriteLine(System.Int32)" />*/
	writeLine7: function (value) {
		this._writer.writeLine7(value);
	}
	/*<EndMethod Name="System.Void System.IO.SynchronizedWriter::WriteLine(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.SynchronizedWriter::WriteLine(System.Int64)" />*/
	writeLine8: function (value) {
		this._writer.writeLine8(value);
	}
	/*<EndMethod Name="System.Void System.IO.SynchronizedWriter::WriteLine(System.Int64)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.SynchronizedWriter::WriteLine(System.Object)" />*/
	writeLine9: function (value) {
		this._writer.writeLine9(value);
	}
	/*<EndMethod Name="System.Void System.IO.SynchronizedWriter::WriteLine(System.Object)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.SynchronizedWriter::WriteLine(System.Single)" />*/
	writeLine10: function (value) {
		this._writer.writeLine10(value);
	}
	/*<EndMethod Name="System.Void System.IO.SynchronizedWriter::WriteLine(System.Single)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.SynchronizedWriter::WriteLine(System.String)" />*/
	writeLine11: function (value) {
		this._writer.writeLine11(value);
	}
	/*<EndMethod Name="System.Void System.IO.SynchronizedWriter::WriteLine(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.SynchronizedWriter::WriteLine(System.UInt32)" />*/
	writeLine16: function (value) {
		this._writer.writeLine16(value);
	}
	/*<EndMethod Name="System.Void System.IO.SynchronizedWriter::WriteLine(System.UInt32)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.SynchronizedWriter::WriteLine(System.UInt64)" />*/
	writeLine17: function (value) {
		this._writer.writeLine17(value);
	}
	/*<EndMethod Name="System.Void System.IO.SynchronizedWriter::WriteLine(System.UInt64)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.SynchronizedWriter::WriteLine(System.String, System.Object)" />*/
	writeLine13: function (format, value) {
		this._writer.writeLine13(format, value);
	}
	/*<EndMethod Name="System.Void System.IO.SynchronizedWriter::WriteLine(System.String, System.Object)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.SynchronizedWriter::WriteLine(System.String, )" />*/
	writeLine12: function (format, value) {
		this._writer.writeLine12(format, value);
	}
	/*<EndMethod Name="System.Void System.IO.SynchronizedWriter::WriteLine(System.String, )" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.SynchronizedWriter::WriteLine(, System.Int32, System.Int32)" />*/
	writeLine2: function (buffer, index, count) {
		this._writer.writeLine2(buffer, index, count);
	}
	/*<EndMethod Name="System.Void System.IO.SynchronizedWriter::WriteLine(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.SynchronizedWriter::WriteLine(System.String, System.Object, System.Object)" />*/
	writeLine14: function (format, arg0, arg1) {
		this._writer.writeLine14(format, arg0, arg1);
	}
	/*<EndMethod Name="System.Void System.IO.SynchronizedWriter::WriteLine(System.String, System.Object, System.Object)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.SynchronizedWriter::WriteLine(System.String, System.Object, System.Object, System.Object)" />*/
	writeLine15: function (format, arg0, arg1, arg2) {
		this._writer.writeLine15(format, arg0, arg1, arg2);
	}
	/*<EndMethod Name="System.Void System.IO.SynchronizedWriter::WriteLine(System.String, System.Object, System.Object, System.Object)" />*/
	,
	/*<BeginProperty Name="System.Text.Encoding System.IO.SynchronizedWriter::Encoding()" />*/
	encoding: function () {
		return this._writer.encoding();
	}
	/*<EndProperty Name="System.Text.Encoding System.IO.SynchronizedWriter::Encoding()" />*/
	,
	/*<BeginProperty Name="System.IFormatProvider System.IO.SynchronizedWriter::FormatProvider()" />*/
	formatProvider: function () {
		return this._writer.formatProvider();
	}
	/*<EndProperty Name="System.IFormatProvider System.IO.SynchronizedWriter::FormatProvider()" />*/
	,
	/*<BeginProperty Name="System.String System.IO.SynchronizedWriter::NewLine()" />*/
	newLine: function (value) {
		if (arguments.length === 1) {
			this._writer.newLine(value);
			return value;
		} else {
			return this._writer.newLine();
		}
	}
	/*<EndProperty Name="System.String System.IO.SynchronizedWriter::NewLine()" />*/
	,
	$type: new $.ig.Type('SynchronizedWriter', $.ig.TextWriter.prototype.$type)
}, true);

/*<EndType Name="System.IO.SynchronizedWriter" />*/

/*<BeginType Name="System.Security.IPermission" />*/

$.ig.util.defType('IPermission', 'Object', {
	$type: new $.ig.Type('IPermission', null)
}, true);

/*<EndType Name="System.Security.IPermission" />*/

/*<BeginType Name="System.Security.PermissionSet" />*/

$.ig.util.defType('PermissionSet', 'Object', {
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
	},
	init1: function (initNumber, state) {
		$.ig.Object.prototype.init.call(this);
	},
	init2: function (initNumber, permSet) {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Security.IPermission System.Security.PermissionSet::AddPermission(System.Security.IPermission)" />*/
	addPermission: function (perm) {
		return perm;
	}
	/*<EndMethod Name="System.Security.IPermission System.Security.PermissionSet::AddPermission(System.Security.IPermission)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Security.PermissionSet::IsUnrestricted()" />*/
	isUnrestricted: function () {
		return true;
	}
	/*<EndMethod Name="System.Boolean System.Security.PermissionSet::IsUnrestricted()" />*/
	,
	/*<BeginMethod Name="System.Security.PermissionSet System.Security.PermissionSet::Union(System.Security.PermissionSet)" />*/
	union: function (other) {
		return new $.ig.PermissionSet(0);
	}
	/*<EndMethod Name="System.Security.PermissionSet System.Security.PermissionSet::Union(System.Security.PermissionSet)" />*/
	,
	$type: new $.ig.Type('PermissionSet', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.Security.PermissionSet" />*/

/*<BeginType Name="System.Security.Permissions.SecurityAttribute" />*/

$.ig.util.defType('SecurityAttribute', 'Attribute', {
	_m_Action: 0,
	_m_Unrestricted: false,
	init: function (action) {
		$.ig.Attribute.prototype.init.call(this);
		this.action(action);
	},
	/*<BeginMethod Name="System.Security.IPermission System.Security.Permissions.SecurityAttribute::CreatePermission()" />*/
	createPermission: function () {
	}
	/*<EndMethod Name="System.Security.IPermission System.Security.Permissions.SecurityAttribute::CreatePermission()" />*/
	,
	/*<BeginProperty Name="System.Boolean System.Security.Permissions.SecurityAttribute::Unrestricted()" />*/
	unrestricted: function (value) {
		if (arguments.length === 1) {
			this._m_Unrestricted = value;
			return value;
		} else {
			return this._m_Unrestricted;
		}
	}
	/*<EndProperty Name="System.Boolean System.Security.Permissions.SecurityAttribute::Unrestricted()" />*/
	,
	/*<BeginProperty Name="System.Security.Permissions.SecurityAction System.Security.Permissions.SecurityAttribute::Action()" />*/
	action: function (value) {
		if (arguments.length === 1) {
			this._m_Action = value;
			return value;
		} else {
			return this._m_Action;
		}
	}
	/*<EndProperty Name="System.Security.Permissions.SecurityAction System.Security.Permissions.SecurityAttribute::Action()" />*/
	,
	$type: new $.ig.Type('SecurityAttribute', $.ig.Attribute.prototype.$type)
}, true);

/*<EndType Name="System.Security.Permissions.SecurityAttribute" />*/

/*<BeginType Name="System.Security.Permissions.CodeAccessSecurityAttribute" />*/

$.ig.util.defType('CodeAccessSecurityAttribute', 'SecurityAttribute', {
	init: function (action) {
		$.ig.SecurityAttribute.prototype.init.call(this, action);
	},
	$type: new $.ig.Type('CodeAccessSecurityAttribute', $.ig.SecurityAttribute.prototype.$type)
}, true);

/*<EndType Name="System.Security.Permissions.CodeAccessSecurityAttribute" />*/

/*<BeginType Name="System.Security.Permissions.PermissionSetAttribute" />*/

$.ig.util.defType('PermissionSetAttribute', 'CodeAccessSecurityAttribute', {
	_file: null,
	_name: null,
	_isUnicodeEncoded: false,
	_xml: null,
	_hex: null,
	init: function (action) {
		$.ig.CodeAccessSecurityAttribute.prototype.init.call(this, action);
	},
	/*<BeginProperty Name="System.String System.Security.Permissions.PermissionSetAttribute::File()" />*/
	file: function (value) {
		if (arguments.length === 1) {
			this._file = value;
			return value;
		} else {
			return this._file;
		}
	}
	/*<EndProperty Name="System.String System.Security.Permissions.PermissionSetAttribute::File()" />*/
	,
	/*<BeginProperty Name="System.String System.Security.Permissions.PermissionSetAttribute::Hex()" />*/
	hex: function (value) {
		if (arguments.length === 1) {
			this._hex = value;
			return value;
		} else {
			return this._hex;
		}
	}
	/*<EndProperty Name="System.String System.Security.Permissions.PermissionSetAttribute::Hex()" />*/
	,
	/*<BeginProperty Name="System.String System.Security.Permissions.PermissionSetAttribute::Name()" />*/
	name: function (value) {
		if (arguments.length === 1) {
			this._name = value;
			return value;
		} else {
			return this._name;
		}
	}
	/*<EndProperty Name="System.String System.Security.Permissions.PermissionSetAttribute::Name()" />*/
	,
	/*<BeginProperty Name="System.Boolean System.Security.Permissions.PermissionSetAttribute::UnicodeEncoded()" />*/
	unicodeEncoded: function (value) {
		if (arguments.length === 1) {
			this._isUnicodeEncoded = value;
			return value;
		} else {
			return this._isUnicodeEncoded;
		}
	}
	/*<EndProperty Name="System.Boolean System.Security.Permissions.PermissionSetAttribute::UnicodeEncoded()" />*/
	,
	/*<BeginProperty Name="System.String System.Security.Permissions.PermissionSetAttribute::XML()" />*/
	xML: function (value) {
		if (arguments.length === 1) {
			this._xml = value;
			return value;
		} else {
			return this._xml;
		}
	}
	/*<EndProperty Name="System.String System.Security.Permissions.PermissionSetAttribute::XML()" />*/
	,
	/*<BeginMethod Name="System.Security.IPermission System.Security.Permissions.PermissionSetAttribute::CreatePermission()" />*/
	createPermission: function () {
		return null;
	}
	/*<EndMethod Name="System.Security.IPermission System.Security.Permissions.PermissionSetAttribute::CreatePermission()" />*/
	,
	/*<BeginMethod Name="System.Security.PermissionSet System.Security.Permissions.PermissionSetAttribute::CreateFromXml(System.String)" />*/
	createFromXml: function (xml) {
		return null;
	}
	/*<EndMethod Name="System.Security.PermissionSet System.Security.Permissions.PermissionSetAttribute::CreateFromXml(System.String)" />*/
	,
	/*<BeginMethod Name="System.Security.PermissionSet System.Security.Permissions.PermissionSetAttribute::CreatePermissionSet()" />*/
	createPermissionSet: function () {
		var pset = null;
		return pset;
	}
	/*<EndMethod Name="System.Security.PermissionSet System.Security.Permissions.PermissionSetAttribute::CreatePermissionSet()" />*/
	,
	$type: new $.ig.Type('PermissionSetAttribute', $.ig.CodeAccessSecurityAttribute.prototype.$type)
}, true);

/*<EndType Name="System.Security.Permissions.PermissionSetAttribute" />*/

/*<BeginType Name="System.Xml.DTDObjectModel" />*/

$.ig.util.defType('DTDObjectModel', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	_name: null,
	/*<BeginProperty Name="System.String System.Xml.DTDObjectModel::Name()" />*/
	name: function (value) {
		if (arguments.length === 1) {
			this._name = value;
			return value;
		} else {
			return this._name;
		}
	}
	/*<EndProperty Name="System.String System.Xml.DTDObjectModel::Name()" />*/
	,
	_publicId: null,
	/*<BeginProperty Name="System.String System.Xml.DTDObjectModel::PublicId()" />*/
	publicId: function (value) {
		if (arguments.length === 1) {
			this._publicId = value;
			return value;
		} else {
			return this._publicId;
		}
	}
	/*<EndProperty Name="System.String System.Xml.DTDObjectModel::PublicId()" />*/
	,
	_systemId: null,
	/*<BeginProperty Name="System.String System.Xml.DTDObjectModel::SystemId()" />*/
	systemId: function (value) {
		if (arguments.length === 1) {
			this._systemId = value;
			return value;
		} else {
			return this._systemId;
		}
	}
	/*<EndProperty Name="System.String System.Xml.DTDObjectModel::SystemId()" />*/
	,
	_internalSubset: null,
	/*<BeginProperty Name="System.String System.Xml.DTDObjectModel::InternalSubset()" />*/
	internalSubset: function (value) {
		if (arguments.length === 1) {
			this._internalSubset = value;
			return value;
		} else {
			return this._internalSubset;
		}
	}
	/*<EndProperty Name="System.String System.Xml.DTDObjectModel::InternalSubset()" />*/
	,
	$type: new $.ig.Type('DTDObjectModel', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.Xml.DTDObjectModel" />*/

/*<BeginType Name="System.Xml.IXmlLineInfo" />*/

$.ig.util.defType('IXmlLineInfo', 'Object', {
	$type: new $.ig.Type('IXmlLineInfo', null)
}, true);

/*<EndType Name="System.Xml.IXmlLineInfo" />*/

/*<BeginType Name="System.Xml.XmlNameTable" />*/

$.ig.util.defType('XmlNameTable', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.String System.Xml.XmlNameTable::Add(System.String)" />*/
	add1: function (name) {
	}
	/*<EndMethod Name="System.String System.Xml.XmlNameTable::Add(System.String)" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlNameTable::Add(, System.Int32, System.Int32)" />*/
	add: function (buffer, offset, length) {
	}
	/*<EndMethod Name="System.String System.Xml.XmlNameTable::Add(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlNameTable::Get(System.String)" />*/
	get1: function (name) {
	}
	/*<EndMethod Name="System.String System.Xml.XmlNameTable::Get(System.String)" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlNameTable::Get(, System.Int32, System.Int32)" />*/
	get: function (buffer, offset, length) {
	}
	/*<EndMethod Name="System.String System.Xml.XmlNameTable::Get(, System.Int32, System.Int32)" />*/
	,
	$type: new $.ig.Type('XmlNameTable', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.Xml.XmlNameTable" />*/

/*<BeginType Name="System.Xml.NameTable" />*/

$.ig.util.defType('NameTable', 'XmlNameTable', {
	_count: 0,
	_buckets: null,
	_size: 0,
	init: function () {
		this._count = $.ig.NameTable.prototype._iNITIAL_BUCKETS;
		this._buckets = new Array($.ig.NameTable.prototype._iNITIAL_BUCKETS);
		$.ig.XmlNameTable.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.String System.Xml.NameTable::Add(, System.Int32, System.Int32)" />*/
	add: function (key, start, len) {
		if (((0 > start) && (start >= key.length)) || ((0 > len) && (len >= key.length - len))) {
			throw new $.ig.IndexOutOfRangeException(1, "The Index is out of range.");
		}
		if (len == 0) {
			return String.empty();
		}
		var h = 0;
		var end = start + len;
		for (var i = start; i < end; i++) {
			h = (h << 5) - h + key[i].charCodeAt(0);
		}
		h &= 2147483647;
		for (var e = this._buckets[h % this._count]; e != null; e = e._next) {
			if (e._hash == h && e._len == len && $.ig.NameTable.prototype.strEqArray(e._str, key, start)) {
				return e._str;
			}
		}
		return this.addEntry($.ig.util.createString3(key, start, len), h);
	}
	/*<EndMethod Name="System.String System.Xml.NameTable::Add(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.NameTable::Add(System.String)" />*/
	add1: function (key) {
		if (key == null) {
			throw new $.ig.ArgumentNullException(0, "key");
		}
		var keyLen = key.length;
		if (keyLen == 0) {
			return String.empty();
		}
		var h = 0;
		for (var i = 0; i < keyLen; i++) {
			h = (h << 5) - h + key.charAt(i).charCodeAt(0);
		}
		h &= 2147483647;
		for (var e = this._buckets[h % this._count]; e != null; e = e._next) {
			if (e._hash == h && e._len == key.length && e._str == key) {
				return e._str;
			}
		}
		return this.addEntry(key, h);
	}
	/*<EndMethod Name="System.String System.Xml.NameTable::Add(System.String)" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.NameTable::Get(, System.Int32, System.Int32)" />*/
	get: function (key, start, len) {
		if (((0 > start) && (start >= key.length)) || ((0 > len) && (len >= key.length - len))) {
			throw new $.ig.IndexOutOfRangeException(1, "The Index is out of range.");
		}
		if (len == 0) {
			return String.empty();
		}
		var h = 0;
		var end = start + len;
		for (var i = start; i < end; i++) {
			h = (h << 5) - h + key[i].charCodeAt(0);
		}
		h &= 2147483647;
		for (var e = this._buckets[h % this._count]; e != null; e = e._next) {
			if (e._hash == h && e._len == len && $.ig.NameTable.prototype.strEqArray(e._str, key, start)) {
				return e._str;
			}
		}
		return null;
	}
	/*<EndMethod Name="System.String System.Xml.NameTable::Get(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.NameTable::Get(System.String)" />*/
	get1: function (value) {
		if (value == null) {
			throw new $.ig.ArgumentNullException(0, "value");
		}
		var valLen = value.length;
		if (valLen == 0) {
			return String.empty();
		}
		var h = 0;
		for (var i = 0; i < valLen; i++) {
			h = (h << 5) - h + value.charAt(i).charCodeAt(0);
		}
		h &= 2147483647;
		for (var e = this._buckets[h % this._count]; e != null; e = e._next) {
			if (e._hash == h && e._len == value.length && e._str == value) {
				return e._str;
			}
		}
		return null;
	}
	/*<EndMethod Name="System.String System.Xml.NameTable::Get(System.String)" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.NameTable::AddEntry(System.String, System.Int32)" />*/
	addEntry: function (str, hash) {
		var bucket = hash % this._count;
		this._buckets[bucket] = new $.ig.NameTable_Entry(str, hash, this._buckets[bucket]);
		if (this._size++ == this._count) {
			this._count <<= 1;
			var csub1 = this._count - 1;
			var newBuckets = new Array(this._count);
			for (var i = 0; i < this._buckets.length; i++) {
				var root = this._buckets[i];
				var e = root;
				while (e != null) {
					var newLoc = e._hash & csub1;
					var n = e._next;
					e._next = newBuckets[newLoc];
					newBuckets[newLoc] = e;
					e = n;
				}
			}
			this._buckets = newBuckets;
		}
		return str;
	}
	/*<EndMethod Name="System.String System.Xml.NameTable::AddEntry(System.String, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Xml.NameTable::StrEqArray(System.String, , System.Int32)" />*/
	strEqArray: function (str, str2, start) {
		var i = str.length;
		i--;
		start += i;
		do {
			if (str.charAt(i) != str2[start]) {
				return false;
			}
			i--;
			start--;
		} while (i >= 0);
		return true;
	}
	/*<EndMethod Name="System.Boolean System.Xml.NameTable::StrEqArray(System.String, , System.Int32)" />*/
	,
	$type: new $.ig.Type('NameTable', $.ig.XmlNameTable.prototype.$type)
}, true);

/*<EndType Name="System.Xml.NameTable" />*/

/*<BeginType Name="System.Xml.NameTable_Entry" />*/

$.ig.util.defType('NameTable_Entry', 'Object', {
	_str: null,
	_hash: 0,
	_len: 0,
	_next: null,
	init: function (str, hash, next) {
		$.ig.Object.prototype.init.call(this);
		this._str = str;
		this._len = str.length;
		this._hash = hash;
		this._next = next;
	},
	$type: new $.ig.Type('NameTable_Entry', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.Xml.NameTable_Entry" />*/

/*<BeginType Name="System.Xml.IXmlNamespaceResolver" />*/

$.ig.util.defType('IXmlNamespaceResolver', 'Object', {
	$type: new $.ig.Type('IXmlNamespaceResolver', null)
}, true);

/*<EndType Name="System.Xml.IXmlNamespaceResolver" />*/

/*<BeginType Name="System.Xml.XmlChar" />*/

$.ig.util.defType('XmlChar', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Boolean System.Xml.XmlChar::IsWhitespace(System.Int32)" />*/
	isWhitespace: function (ch) {
		return ch == 32 || ch == 9 || ch == 13 || ch == 10;
	}
	/*<EndMethod Name="System.Boolean System.Xml.XmlChar::IsWhitespace(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Xml.XmlChar::IsWhitespace(System.String)" />*/
	isWhitespace1: function (str) {
		for (var i = 0; i < str.length; i++) {
			if (!$.ig.XmlChar.prototype.isWhitespace(str.charAt(i).charCodeAt(0))) {
				return false;
			}
		}
		return true;
	}
	/*<EndMethod Name="System.Boolean System.Xml.XmlChar::IsWhitespace(System.String)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Xml.XmlChar::IndexOfNonWhitespace(System.String)" />*/
	indexOfNonWhitespace: function (str) {
		for (var i = 0; i < str.length; i++) {
			if (!$.ig.XmlChar.prototype.isWhitespace(str.charAt(i).charCodeAt(0))) {
				return i;
			}
		}
		return -1;
	}
	/*<EndMethod Name="System.Int32 System.Xml.XmlChar::IndexOfNonWhitespace(System.String)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Xml.XmlChar::IsFirstNameChar(System.Int32)" />*/
	isFirstNameChar: function (ch) {
		if ((ch >= 'a'.charCodeAt(0) && ch <= 'z'.charCodeAt(0)) || (ch >= 'A'.charCodeAt(0) && ch <= 'Z'.charCodeAt(0))) {
			return true;
		} else if ($.ig.util.intSToU(ch) <= 65535) {
			return ($.ig.util.u32BitwiseAnd($.ig.XmlChar.prototype._nameBitmap[($.ig.XmlChar.prototype._firstNamePages[ch >> 8] << 3) + ((ch & 255) >> 5)], (1 << (ch & 31)))) != 0;
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean System.Xml.XmlChar::IsFirstNameChar(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Xml.XmlChar::IsValid(System.Int32)" />*/
	isValid: function (ch) {
		return !$.ig.XmlChar.prototype.isInvalid(ch);
	}
	/*<EndMethod Name="System.Boolean System.Xml.XmlChar::IsValid(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Xml.XmlChar::IsInvalid(System.Int32)" />*/
	isInvalid: function (ch) {
		switch (ch) {
			case 9:
			case 10:
			case 13:
				return false;
		}
		if (ch < 32) {
			return true;
		}
		if (ch < 55296) {
			return false;
		}
		if (ch < 57344) {
			return true;
		}
		if (ch < 65534) {
			return false;
		}
		if (ch < 65536) {
			return true;
		}
		if (ch < 1114112) {
			return false;
		} else {
			return true;
		}
	}
	/*<EndMethod Name="System.Boolean System.Xml.XmlChar::IsInvalid(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Xml.XmlChar::IndexOfInvalid(System.String, System.Boolean)" />*/
	indexOfInvalid1: function (s, allowSurrogate) {
		for (var i = 0; i < s.length; i++) {
			if ($.ig.XmlChar.prototype.isInvalid(s.charAt(i).charCodeAt(0))) {
				if (!allowSurrogate || i + 1 == s.length || s.charAt(i).charCodeAt(0) < '�'.charCodeAt(0) || s.charAt(i).charCodeAt(0) >= '�'.charCodeAt(0) || s.charAt(i + 1).charCodeAt(0) < '�'.charCodeAt(0) || s.charAt(i + 1).charCodeAt(0) >= ''.charCodeAt(0)) {
					return i;
				}
				i++;
			}
		}
		return -1;
	}
	/*<EndMethod Name="System.Int32 System.Xml.XmlChar::IndexOfInvalid(System.String, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Xml.XmlChar::IndexOfInvalid(, System.Int32, System.Int32, System.Boolean)" />*/
	indexOfInvalid: function (s, start, length, allowSurrogate) {
		var end = start + length;
		if (s.length < end) {
			throw new $.ig.ArgumentOutOfRangeException(1, "length");
		}
		for (var i = start; i < end; i++) {
			if ($.ig.XmlChar.prototype.isInvalid(s[i].charCodeAt(0))) {
				if (!allowSurrogate || i + 1 == end || s[i].charCodeAt(0) < '�'.charCodeAt(0) || s[i].charCodeAt(0) >= '�'.charCodeAt(0) || s[i + 1].charCodeAt(0) < '�'.charCodeAt(0) || s[i + 1].charCodeAt(0) >= ''.charCodeAt(0)) {
					return i;
				}
				i++;
			}
		}
		return -1;
	}
	/*<EndMethod Name="System.Int32 System.Xml.XmlChar::IndexOfInvalid(, System.Int32, System.Int32, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Xml.XmlChar::IsNameChar(System.Int32)" />*/
	isNameChar: function (ch) {
		if ((ch >= 'a'.charCodeAt(0) && ch <= 'z'.charCodeAt(0)) || (ch >= 'A'.charCodeAt(0) && ch <= 'Z'.charCodeAt(0))) {
			return true;
		} else if ($.ig.util.intSToU(ch) <= 65535) {
			return ($.ig.util.u32BitwiseAnd($.ig.XmlChar.prototype._nameBitmap[($.ig.XmlChar.prototype._namePages[ch >> 8] << 3) + ((ch & 255) >> 5)], (1 << (ch & 31)))) != 0;
		} else {
			return false;
		}
	}
	/*<EndMethod Name="System.Boolean System.Xml.XmlChar::IsNameChar(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Xml.XmlChar::IsNCNameChar(System.Int32)" />*/
	isNCNameChar: function (ch) {
		var result = false;
		if (ch >= 0 && ch <= 65535 && ch != ':'.charCodeAt(0)) {
			result = ($.ig.util.u32BitwiseAnd($.ig.XmlChar.prototype._nameBitmap[($.ig.XmlChar.prototype._namePages[ch >> 8] << 3) + ((ch & 255) >> 5)], (1 << (ch & 31)))) != 0;
		}
		return result;
	}
	/*<EndMethod Name="System.Boolean System.Xml.XmlChar::IsNCNameChar(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Xml.XmlChar::IsName(System.String)" />*/
	isName: function (str) {
		if (str.length == 0) {
			return false;
		}
		if (!$.ig.XmlChar.prototype.isFirstNameChar(str.charAt(0).charCodeAt(0))) {
			return false;
		}
		for (var i = 1; i < str.length; i++) {
			if (!$.ig.XmlChar.prototype.isNameChar(str.charAt(i).charCodeAt(0))) {
				return false;
			}
		}
		return true;
	}
	/*<EndMethod Name="System.Boolean System.Xml.XmlChar::IsName(System.String)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Xml.XmlChar::IsNCName(System.String)" />*/
	isNCName: function (str) {
		if (str.length == 0) {
			return false;
		}
		if (!$.ig.XmlChar.prototype.isFirstNameChar(str.charAt(0).charCodeAt(0))) {
			return false;
		}
		for (var i = 0; i < str.length; i++) {
			if (!$.ig.XmlChar.prototype.isNCNameChar(str.charAt(i).charCodeAt(0))) {
				return false;
			}
		}
		return true;
	}
	/*<EndMethod Name="System.Boolean System.Xml.XmlChar::IsNCName(System.String)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Xml.XmlChar::IsNmToken(System.String)" />*/
	isNmToken: function (str) {
		if (str.length == 0) {
			return false;
		}
		for (var i = 0; i < str.length; i++) {
			if (!$.ig.XmlChar.prototype.isNameChar(str.charAt(i).charCodeAt(0))) {
				return false;
			}
		}
		return true;
	}
	/*<EndMethod Name="System.Boolean System.Xml.XmlChar::IsNmToken(System.String)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Xml.XmlChar::IsPubidChar(System.Int32)" />*/
	isPubidChar: function (ch) {
		return ($.ig.XmlChar.prototype.isWhitespace(ch) && ch != '\t'.charCodeAt(0)) | ('a'.charCodeAt(0) <= ch && ch <= 'z'.charCodeAt(0)) | ('A'.charCodeAt(0) <= ch && ch <= 'Z'.charCodeAt(0)) | ('0'.charCodeAt(0) <= ch && ch <= '9'.charCodeAt(0)) | ("-'()+,./:=?;!*#@$_%").indexOf(String.fromCharCode(ch)) >= 0;
	}
	/*<EndMethod Name="System.Boolean System.Xml.XmlChar::IsPubidChar(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Xml.XmlChar::IsPubid(System.String)" />*/
	isPubid: function (str) {
		for (var i = 0; i < str.length; i++) {
			if (!$.ig.XmlChar.prototype.isPubidChar(str.charAt(i).charCodeAt(0))) {
				return false;
			}
		}
		return true;
	}
	/*<EndMethod Name="System.Boolean System.Xml.XmlChar::IsPubid(System.String)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Xml.XmlChar::IsValidIANAEncoding(System.String)" />*/
	isValidIANAEncoding: function (ianaEncoding) {
		if (ianaEncoding != null) {
			var length = ianaEncoding.length;
			if (length > 0) {
				var c = ianaEncoding.charAt(0);
				if ((c.charCodeAt(0) >= 'A'.charCodeAt(0) && c.charCodeAt(0) <= 'Z'.charCodeAt(0)) || (c.charCodeAt(0) >= 'a'.charCodeAt(0) && c.charCodeAt(0) <= 'z'.charCodeAt(0))) {
					for (var i = 1; i < length; i++) {
						c = ianaEncoding.charAt(i);
						if ((c.charCodeAt(0) < 'A'.charCodeAt(0) || c.charCodeAt(0) > 'Z'.charCodeAt(0)) && (c.charCodeAt(0) < 'a'.charCodeAt(0) || c.charCodeAt(0) > 'z'.charCodeAt(0)) && (c.charCodeAt(0) < '0'.charCodeAt(0) || c.charCodeAt(0) > '9'.charCodeAt(0)) && c != '.' && c != '_' && c != '-') {
							return false;
						}
					}
					return true;
				}
			}
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean System.Xml.XmlChar::IsValidIANAEncoding(System.String)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Xml.XmlChar::GetPredefinedEntity(System.String)" />*/
	getPredefinedEntity: function (name) {
		switch (name) {
			case "amp": return '&'.charCodeAt(0);
			case "lt": return '<'.charCodeAt(0);
			case "gt": return '>'.charCodeAt(0);
			case "quot": return '\"'.charCodeAt(0);
			case "apos": return '\''.charCodeAt(0);
			default: return -1;
		}
	}
	/*<EndMethod Name="System.Int32 System.Xml.XmlChar::GetPredefinedEntity(System.String)" />*/
	,
	$type: new $.ig.Type('XmlChar', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.Xml.XmlChar" />*/

/*<BeginType Name="System.Xml.XmlConvert" />*/

$.ig.util.defType('XmlConvert', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.String System.Xml.XmlConvert::TryDecoding(System.String)" />*/
	tryDecoding: function (s) {
		if (s == null || s.length < 6) {
			return s;
		}
		var c = '\uffff';
		try {
			c = String.fromCharCode($.ig.util.parseInt32_2(s.substr(1, 4), $.ig.NumberStyles.prototype.hexNumber, $.ig.CultureInfo.prototype.invariantCulture()));
		}
		catch (e) {
			return s.charAt(0) + $.ig.XmlConvert.prototype.decodeName(s.substr(1));
		}
		if (s.length == 6) {
			return c.toString();
		}
		return c + $.ig.XmlConvert.prototype.decodeName(s.substr(6));
	}
	/*<EndMethod Name="System.String System.Xml.XmlConvert::TryDecoding(System.String)" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlConvert::DecodeName(System.String)" />*/
	decodeName: function (name) {
		if (name == null || name.length == 0) {
			return name;
		}
		var pos = name.indexOf('_');
		if (pos == -1 || pos + 6 >= name.length) {
			return name;
		}
		if ((name.charAt(pos + 1) != 'X' && name.charAt(pos + 1) != 'x') || name.charAt(pos + 6) != '_') {
			return name.charAt(0) + $.ig.XmlConvert.prototype.decodeName(name.substr(1));
		}
		return name.substr(0, pos) + $.ig.XmlConvert.prototype.tryDecoding(name.substr(pos + 1));
	}
	/*<EndMethod Name="System.String System.Xml.XmlConvert::DecodeName(System.String)" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlConvert::EncodeLocalName(System.String)" />*/
	encodeLocalName: function (name) {
		if (name == null) {
			return name;
		}
		var encoded = $.ig.XmlConvert.prototype.encodeName(name);
		var pos = encoded.indexOf(':');
		if (pos == -1) {
			return encoded;
		}
		return $.ig.util.replace(encoded, ":", $.ig.XmlConvert.prototype._encodedColon);
	}
	/*<EndMethod Name="System.String System.Xml.XmlConvert::EncodeLocalName(System.String)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Xml.XmlConvert::IsInvalid(System.Char, System.Boolean)" />*/
	isInvalid: function (c, firstOnlyLetter) {
		if (c == ':') {
			return false;
		}
		if (firstOnlyLetter) {
			return !$.ig.XmlChar.prototype.isFirstNameChar(c.charCodeAt(0));
		} else {
			return !$.ig.XmlChar.prototype.isNameChar(c.charCodeAt(0));
		}
	}
	/*<EndMethod Name="System.Boolean System.Xml.XmlConvert::IsInvalid(System.Char, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlConvert::EncodeName(System.String, System.Boolean)" />*/
	encodeName1: function (name, nmtoken) {
		if (name == null || name.length == 0) {
			return name;
		}
		var sb = new $.ig.StringBuilder(0);
		var length = name.length;
		for (var i = 0; i < length; i++) {
			var c = name.charAt(i);
			if ($.ig.XmlConvert.prototype.isInvalid(c, i == 0 && !nmtoken)) {
				sb.appendFormat2("_x{0:X4}_", c.charCodeAt(0));
			} else if (c == '_' && i + 6 < length && name.charAt(i + 1) == 'x' && name.charAt(i + 6) == '_') {
				sb.append5("_x005F_");
			} else {
				sb.append1(c);
			}
		}
		return sb.toString();
	}
	/*<EndMethod Name="System.String System.Xml.XmlConvert::EncodeName(System.String, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlConvert::EncodeName(System.String)" />*/
	encodeName: function (name) {
		return $.ig.XmlConvert.prototype.encodeName1(name, false);
	}
	/*<EndMethod Name="System.String System.Xml.XmlConvert::EncodeName(System.String)" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlConvert::EncodeNmToken(System.String)" />*/
	encodeNmToken: function (name) {
		if (name == String.empty()) {
			throw new $.ig.XmlException(3, "Invalid NmToken: ''");
		}
		return $.ig.XmlConvert.prototype.encodeName1(name, true);
	}
	/*<EndMethod Name="System.String System.Xml.XmlConvert::EncodeNmToken(System.String)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Xml.XmlConvert::ToBoolean(System.String)" />*/
	toBoolean: function (s) {
		s = s.trim($.ig.XmlChar.prototype.whitespaceChars);
		switch (s) {
			case "1": return true;
			case "true": return true;
			case "0": return false;
			case "false": return false;
			default: throw new $.ig.FormatException(1, s + " is not a valid boolean value");
		}
	}
	/*<EndMethod Name="System.Boolean System.Xml.XmlConvert::ToBoolean(System.String)" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlConvert::ToBinHexString()" />*/
	toBinHexString: function (buffer) {
		var w = new $.ig.StringWriter(0);
		$.ig.XmlConvert.prototype.writeBinHex(buffer, 0, buffer.length, w);
		return w.toString();
	}
	/*<EndMethod Name="System.String System.Xml.XmlConvert::ToBinHexString()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlConvert::WriteBinHex(, System.Int32, System.Int32, System.IO.TextWriter)" />*/
	writeBinHex: function (buffer, index, count, w) {
		if (buffer == null) {
			throw new $.ig.ArgumentNullException(0, "buffer");
		}
		if (index < 0) {
			throw new $.ig.ArgumentOutOfRangeException(3, "index", index, "index must be non negative integer.");
		}
		if (count < 0) {
			throw new $.ig.ArgumentOutOfRangeException(3, "count", count, "count must be non negative integer.");
		}
		if (buffer.length < index + count) {
			throw new $.ig.ArgumentOutOfRangeException(1, "index and count must be smaller than the length of the buffer.");
		}
		var end = index + count;
		for (var i = index; i < end; i++) {
			var val = buffer[i];
			var high = val >> 4;
			var low = val & 15;
			if (high > 9) {
				w.write3(String.fromCharCode((high + 55)));
			} else {
				w.write3(String.fromCharCode((high + 48)));
			}
			if (low > 9) {
				w.write3(String.fromCharCode((low + 55)));
			} else {
				w.write3(String.fromCharCode((low + 48)));
			}
		}
	}
	/*<EndMethod Name="System.Void System.Xml.XmlConvert::WriteBinHex(, System.Int32, System.Int32, System.IO.TextWriter)" />*/
	,
	/*<BeginMethod Name="System.Byte System.Xml.XmlConvert::ToByte(System.String)" />*/
	toByte: function (s) {
		return $.ig.util.parseUInt8_2(s, $.ig.NumberStyles.prototype.integer, $.ig.CultureInfo.prototype.invariantCulture());
	}
	/*<EndMethod Name="System.Byte System.Xml.XmlConvert::ToByte(System.String)" />*/
	,
	/*<BeginMethod Name="System.Char System.Xml.XmlConvert::ToChar(System.String)" />*/
	toChar: function (s) {
		return $.ig.String.prototype.parse(s);
	}
	/*<EndMethod Name="System.Char System.Xml.XmlConvert::ToChar(System.String)" />*/
	,
	/*<BeginMethod Name="System.Decimal System.Xml.XmlConvert::ToDecimal(System.String)" />*/
	toDecimal: function (s) {
		return $.ig.util.parseNumber(s, $.ig.CultureInfo.prototype.invariantCulture());
	}
	/*<EndMethod Name="System.Decimal System.Xml.XmlConvert::ToDecimal(System.String)" />*/
	,
	/*<BeginMethod Name="System.Double System.Xml.XmlConvert::ToDouble(System.String)" />*/
	toDouble: function (s) {
		if (s == null) {
			throw new $.ig.ArgumentNullException(1);
		}
		var f = $.ig.XmlConvert.prototype.tryParseStringFloatConstants(s);
		if (f != 0) {
			return f;
		}
		return Number.parse(s, $.ig.XmlConvert.prototype._floatStyle, $.ig.CultureInfo.prototype.invariantCulture());
	}
	/*<EndMethod Name="System.Double System.Xml.XmlConvert::ToDouble(System.String)" />*/
	,
	/*<BeginMethod Name="System.Single System.Xml.XmlConvert::TryParseStringFloatConstants(System.String)" />*/
	tryParseStringFloatConstants: function (s) {
		var sidx = 0;
		while (sidx < s.length && /\s/i.test(s.charAt(sidx))) {
			sidx++;
		}
		if (sidx == s.length) {
			throw new $.ig.FormatException(0);
		}
		var sEndPos = s.length - 1;
		while (/\s/i.test(s.charAt(sEndPos))) {
			sEndPos--;
		}
		if ($.ig.XmlConvert.prototype.tryParseStringConstant("NaN", s, sidx, sEndPos)) {
			return NaN;
		}
		if ($.ig.XmlConvert.prototype.tryParseStringConstant("INF", s, sidx, sEndPos)) {
			return $.ig.Number.prototype.positiveInfinity;
		}
		if ($.ig.XmlConvert.prototype.tryParseStringConstant("-INF", s, sidx, sEndPos)) {
			return $.ig.Number.prototype.negativeInfinity;
		}
		if ($.ig.XmlConvert.prototype.tryParseStringConstant("Infinity", s, sidx, sEndPos)) {
			return $.ig.Number.prototype.positiveInfinity;
		}
		if ($.ig.XmlConvert.prototype.tryParseStringConstant("-Infinity", s, sidx, sEndPos)) {
			return $.ig.Number.prototype.negativeInfinity;
		}
		return 0;
	}
	/*<EndMethod Name="System.Single System.Xml.XmlConvert::TryParseStringFloatConstants(System.String)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Xml.XmlConvert::TryParseStringConstant(System.String, System.String, System.Int32, System.Int32)" />*/
	tryParseStringConstant: function (format, s, start, end) {
		return end - start + 1 == format.length && String.compareOrdinal(format, 0, s, start, format.length) == 0;
	}
	/*<EndMethod Name="System.Boolean System.Xml.XmlConvert::TryParseStringConstant(System.String, System.String, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int16 System.Xml.XmlConvert::ToInt16(System.String)" />*/
	toInt16: function (s) {
		return $.ig.util.parseInt16_2(s, $.ig.XmlConvert.prototype._integerStyle, $.ig.CultureInfo.prototype.invariantCulture());
	}
	/*<EndMethod Name="System.Int16 System.Xml.XmlConvert::ToInt16(System.String)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Xml.XmlConvert::ToInt32(System.String)" />*/
	toInt32: function (s) {
		return $.ig.util.parseInt32_2(s, $.ig.XmlConvert.prototype._integerStyle, $.ig.CultureInfo.prototype.invariantCulture());
	}
	/*<EndMethod Name="System.Int32 System.Xml.XmlConvert::ToInt32(System.String)" />*/
	,
	/*<BeginMethod Name="System.Int64 System.Xml.XmlConvert::ToInt64(System.String)" />*/
	toInt64: function (s) {
		return $.ig.util.parseInt64_2(s, $.ig.XmlConvert.prototype._integerStyle, $.ig.CultureInfo.prototype.invariantCulture());
	}
	/*<EndMethod Name="System.Int64 System.Xml.XmlConvert::ToInt64(System.String)" />*/
	,
	/*<BeginMethod Name="System.SByte System.Xml.XmlConvert::ToSByte(System.String)" />*/
	toSByte: function (s) {
		return $.ig.util.parseInt8_2(s, $.ig.XmlConvert.prototype._integerStyle, $.ig.CultureInfo.prototype.invariantCulture());
	}
	/*<EndMethod Name="System.SByte System.Xml.XmlConvert::ToSByte(System.String)" />*/
	,
	/*<BeginMethod Name="System.Single System.Xml.XmlConvert::ToSingle(System.String)" />*/
	toSingle: function (s) {
		if (s == null) {
			throw new $.ig.ArgumentNullException(1);
		}
		var f = $.ig.XmlConvert.prototype.tryParseStringFloatConstants(s);
		if (f != 0) {
			return f;
		}
		return $.ig.Number.prototype.parse2(s, $.ig.XmlConvert.prototype._floatStyle, $.ig.CultureInfo.prototype.invariantCulture());
	}
	/*<EndMethod Name="System.Single System.Xml.XmlConvert::ToSingle(System.String)" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlConvert::ToString(System.Int32)" />*/
	toString9: function (value) {
		return value.toString();
	}
	/*<EndMethod Name="System.String System.Xml.XmlConvert::ToString(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlConvert::ToString(System.Int16)" />*/
	toString8: function (value) {
		return value.toString();
	}
	/*<EndMethod Name="System.String System.Xml.XmlConvert::ToString(System.Int16)" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlConvert::ToString(System.Byte)" />*/
	toString2: function (value) {
		return value.toString();
	}
	/*<EndMethod Name="System.String System.Xml.XmlConvert::ToString(System.Byte)" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlConvert::ToString(System.Int64)" />*/
	toString10: function (value) {
		return value.toString();
	}
	/*<EndMethod Name="System.String System.Xml.XmlConvert::ToString(System.Int64)" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlConvert::ToString(System.Char)" />*/
	toString3: function (value) {
		return value.toString2($.ig.CultureInfo.prototype.invariantCulture());
	}
	/*<EndMethod Name="System.String System.Xml.XmlConvert::ToString(System.Char)" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlConvert::ToString(System.Boolean)" />*/
	toString1: function (value) {
		if (value) {
			return "true";
		}
		return "false";
	}
	/*<EndMethod Name="System.String System.Xml.XmlConvert::ToString(System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlConvert::ToString(System.SByte)" />*/
	toString11: function (value) {
		return value.toString();
	}
	/*<EndMethod Name="System.String System.Xml.XmlConvert::ToString(System.SByte)" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlConvert::ToString(System.Decimal)" />*/
	toString6: function (value) {
		return value.toString1($.ig.CultureInfo.prototype.invariantCulture());
	}
	/*<EndMethod Name="System.String System.Xml.XmlConvert::ToString(System.Decimal)" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlConvert::ToString(System.UInt64)" />*/
	toString16: function (value) {
		return value.toString();
	}
	/*<EndMethod Name="System.String System.Xml.XmlConvert::ToString(System.UInt64)" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlConvert::ToString(System.TimeSpan)" />*/
	toString13: function (value) {
		if (value == (0)) {
			return "PT0S";
		}
		var builder = new $.ig.StringBuilder(0);
		if ($.ig.util.timeSpanTicks(value) < 0) {
			if (value == $.ig.Number.prototype.minValue()) {
				return "-P10675199DT2H48M5.4775808S";
			}
			builder.append1('-');
			value = $.ig.util.timeSpanNegate(value);
		}
		builder.append1('P');
		if ($.ig.util.timeSpanDays(value) > 0) {
			builder.append3($.ig.util.timeSpanDays(value)).append1('D');
		}
		var ticks = $.ig.util.timeSpanTicks(value) % (10000)($.ig.Number.prototype);
		if ($.ig.util.timeSpanDays(value) > 0 || $.ig.util.timeSpanHours(value) > 0 || $.ig.util.timeSpanMinutes(value) > 0 || $.ig.util.timeSpanSeconds(value) > 0 || $.ig.util.timeSpanMilliseconds(value) > 0 || ticks > 0) {
			builder.append1('T');
			if ($.ig.util.timeSpanHours(value) > 0) {
				builder.append3($.ig.util.timeSpanHours(value)).append1('H');
			}
			if ($.ig.util.timeSpanMinutes(value) > 0) {
				builder.append3($.ig.util.timeSpanMinutes(value)).append1('M');
			}
			if ($.ig.util.timeSpanSeconds(value) > 0 || $.ig.util.timeSpanMilliseconds(value) > 0 || ticks > 0) {
				builder.append3($.ig.util.timeSpanSeconds(value));
				var trimZero = true;
				if (ticks > 0) {
					builder.append1('.').appendFormat2("{0:0000000}", $.ig.util.timeSpanTicks(value) % (10000000)($.ig.Number.prototype));
				} else if ($.ig.util.timeSpanMilliseconds(value) > 0) {
					builder.append1('.').appendFormat2("{0:000}", $.ig.util.timeSpanMilliseconds(value));
				} else {
					trimZero = false;
				}
				if (trimZero) {
					while (builder.item(builder.length() - 1) == '0') {
						builder.remove(builder.length() - 1, 1);
					}
				}
				builder.append1('S');
			}
		}
		return builder.toString();
	}
	/*<EndMethod Name="System.String System.Xml.XmlConvert::ToString(System.TimeSpan)" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlConvert::ToString(System.Double)" />*/
	toString7: function (value) {
		if ($.ig.util.isNegativeInfinity(value)) {
			return "-INF";
		}
		if ($.ig.util.isPositiveInfinity(value)) {
			return "INF";
		}
		if ($.ig.util.isNaN(value)) {
			return "NaN";
		}
		return value.toString();
	}
	/*<EndMethod Name="System.String System.Xml.XmlConvert::ToString(System.Double)" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlConvert::ToString(System.Single)" />*/
	toString12: function (value) {
		if ($.ig.Number.prototype.isNegativeInfinity(value)) {
			return "-INF";
		}
		if ($.ig.Number.prototype.isPositiveInfinity(value)) {
			return "INF";
		}
		if (isNaN(value)) {
			return "NaN";
		}
		return value.toString();
	}
	/*<EndMethod Name="System.String System.Xml.XmlConvert::ToString(System.Single)" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlConvert::ToString(System.UInt32)" />*/
	toString15: function (value) {
		return value.toString();
	}
	/*<EndMethod Name="System.String System.Xml.XmlConvert::ToString(System.UInt32)" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlConvert::ToString(System.UInt16)" />*/
	toString14: function (value) {
		return value.toString();
	}
	/*<EndMethod Name="System.String System.Xml.XmlConvert::ToString(System.UInt16)" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlConvert::ToString(System.DateTime)" />*/
	toString4: function (value) {
		return $.ig.Date.prototype.toStringFormat(value, "yyyy-MM-ddTHH:mm:ss.fffffffzzz", $.ig.CultureInfo.prototype.invariantCulture());
	}
	/*<EndMethod Name="System.String System.Xml.XmlConvert::ToString(System.DateTime)" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlConvert::ToString(System.DateTime, System.String)" />*/
	toString5: function (value, format) {
		return $.ig.Date.prototype.toStringFormat(value, format, $.ig.CultureInfo.prototype.invariantCulture());
	}
	/*<EndMethod Name="System.String System.Xml.XmlConvert::ToString(System.DateTime, System.String)" />*/
	,
	/*<BeginMethod Name="System.TimeSpan System.Xml.XmlConvert::ToTimeSpan(System.String)" />*/
	toTimeSpan: function (s) {
		s = s.trim($.ig.XmlChar.prototype.whitespaceChars);
		if (s.length == 0) {
			throw new $.ig.FormatException(1, "Invalid format string for duration schema datatype.");
		}
		var start = 0;
		if (s.charAt(0) == '-') {
			start = 1;
		}
		var minusValue = (start == 1);
		if (s.charAt(start) != 'P') {
			throw new $.ig.FormatException(1, "Invalid format string for duration schema datatype.");
		}
		start++;
		var parseStep = 0;
		var days = 0;
		var isTime = false;
		var hours = 0;
		var minutes = 0;
		var seconds = 0;
		var ticks = 0;
		var parsedDigits = 0;
		var error = false;
		var i = start;
		while (i < s.length) {
			if (s.charAt(i) == 'T') {
				isTime = true;
				parseStep = 4;
				i++;
				start = i;
				continue;
			}
			for (; i < s.length; i++) {
				if (s.charAt(i).charCodeAt(0) < '0'.charCodeAt(0) || '9'.charCodeAt(0) < s.charAt(i).charCodeAt(0)) {
					break;
				}
			}
			if (parseStep == 7) {
				parsedDigits = i - start;
			}
			var value = $.ig.util.parseInt32_1(s.substr(start, i - start), $.ig.CultureInfo.prototype.invariantCulture());
			if (parseStep == 7) {
				for (; parsedDigits > 7; parsedDigits--) {
					value = $.ig.intDivide(value, 10);
				}
				for (; parsedDigits < 7; parsedDigits++) {
					value *= 10;
				}
			}
			switch (s.charAt(i)) {
				case 'Y':
					days += value * 365;
					if (parseStep > 0) {
						error = true;
					} else {
						parseStep = 1;
					}
					break;
				case 'M':
					if (parseStep < 2) {
						days += 365 * ($.ig.intDivide(value, 12)) + 30 * (value % 12);
						parseStep = 2;
					} else if (isTime && parseStep < 6) {
						minutes = value;
						parseStep = 6;
					} else {
						error = true;
					}
					break;
				case 'D':
					days += value;
					if (parseStep > 2) {
						error = true;
					} else {
						parseStep = 3;
					}
					break;
				case 'H':
					hours = value;
					if (!isTime || parseStep > 4) {
						error = true;
					} else {
						parseStep = 5;
					}
					break;
				case 'S':
					if (parseStep == 7) {
						ticks = value;
					} else {
						seconds = value;
					}
					if (!isTime || parseStep > 7) {
						error = true;
					} else {
						parseStep = 8;
					}
					break;
				case '.':
					if (parseStep > 7) {
						error = true;
					}
					seconds = value;
					parseStep = 7;
					break;
				default:
					error = true;
					break;
			}
			if (error) {
				break;
			}
			++i;
			start = i;
		}
		if (error) {
			throw new $.ig.FormatException(1, "Invalid format string for duration schema datatype.");
		}
		var ts = $.ig.util.timeSpanInit3(days, hours, minutes, seconds);
		if (minusValue) {
			return $.ig.util.timeSpanFromTicks(-($.ig.util.timeSpanTicks(ts) + ticks));
		} else {
			return $.ig.util.timeSpanFromTicks($.ig.util.timeSpanTicks(ts) + ticks);
		}
	}
	/*<EndMethod Name="System.TimeSpan System.Xml.XmlConvert::ToTimeSpan(System.String)" />*/
	,
	/*<BeginMethod Name="System.UInt16 System.Xml.XmlConvert::ToUInt16(System.String)" />*/
	toUInt16: function (s) {
		return $.ig.util.parseUInt16_2(s, $.ig.NumberStyles.prototype.integer, $.ig.CultureInfo.prototype.invariantCulture());
	}
	/*<EndMethod Name="System.UInt16 System.Xml.XmlConvert::ToUInt16(System.String)" />*/
	,
	/*<BeginMethod Name="System.UInt32 System.Xml.XmlConvert::ToUInt32(System.String)" />*/
	toUInt32: function (s) {
		return $.ig.util.parseUInt32_2(s, $.ig.NumberStyles.prototype.integer, $.ig.CultureInfo.prototype.invariantCulture());
	}
	/*<EndMethod Name="System.UInt32 System.Xml.XmlConvert::ToUInt32(System.String)" />*/
	,
	/*<BeginMethod Name="System.UInt64 System.Xml.XmlConvert::ToUInt64(System.String)" />*/
	toUInt64: function (s) {
		return $.ig.util.parseUInt64_2(s, $.ig.NumberStyles.prototype.integer, $.ig.CultureInfo.prototype.invariantCulture());
	}
	/*<EndMethod Name="System.UInt64 System.Xml.XmlConvert::ToUInt64(System.String)" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlConvert::VerifyName(System.String)" />*/
	verifyName: function (name) {
		if (name == null || name.length == 0) {
			throw new $.ig.ArgumentNullException(0, "name");
		}
		if (!$.ig.XmlChar.prototype.isName(name)) {
			throw new $.ig.XmlException(3, "'" + name + "' is not a valid XML Name");
		}
		return name;
	}
	/*<EndMethod Name="System.String System.Xml.XmlConvert::VerifyName(System.String)" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlConvert::VerifyNCName(System.String)" />*/
	verifyNCName: function (ncname) {
		if (ncname == null || ncname.length == 0) {
			throw new $.ig.ArgumentNullException(0, "ncname");
		}
		if (!$.ig.XmlChar.prototype.isNCName(ncname)) {
			throw new $.ig.XmlException(3, "'" + ncname + "' is not a valid XML NCName");
		}
		return ncname;
	}
	/*<EndMethod Name="System.String System.Xml.XmlConvert::VerifyNCName(System.String)" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlConvert::VerifyTOKEN(System.String)" />*/
	verifyTOKEN: function (name) {
		if (name == null) {
			throw new $.ig.ArgumentNullException(0, "name");
		}
		if (name.length == 0) {
			return name;
		}
		if ($.ig.XmlChar.prototype.isWhitespace(name.charAt(0).charCodeAt(0)) || $.ig.XmlChar.prototype.isWhitespace(name.charAt(name.length - 1).charCodeAt(0))) {
			throw new $.ig.XmlException(3, "Whitespace characters (#xA, #xD, #x9, #x20) are not allowed as leading or trailing whitespaces of xs:token.");
		}
		for (var i = 0; i < name.length; i++) {
			if ($.ig.XmlChar.prototype.isWhitespace(name.charAt(i).charCodeAt(0)) && name.charAt(i) != ' ') {
				throw new $.ig.XmlException(3, "Either #xA, #xD or #x9 are not allowed inside xs:token.");
			}
		}
		return name;
	}
	/*<EndMethod Name="System.String System.Xml.XmlConvert::VerifyTOKEN(System.String)" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlConvert::VerifyNMTOKEN(System.String)" />*/
	verifyNMTOKEN: function (name) {
		if (name == null) {
			throw new $.ig.ArgumentNullException(0, "name");
		}
		if (!$.ig.XmlChar.prototype.isNmToken(name)) {
			throw new $.ig.XmlException(3, "'" + name + "' is not a valid XML NMTOKEN");
		}
		return name;
	}
	/*<EndMethod Name="System.String System.Xml.XmlConvert::VerifyNMTOKEN(System.String)" />*/
	,
	/*<BeginMethod Name=" System.Xml.XmlConvert::FromBinHexString(System.String)" />*/
	fromBinHexString: function (s) {
		var chars = $.ig.util.toCharArray(s);
		var bytes = new Array($.ig.intDivide(chars.length, 2) + chars.length % 2);
		$.ig.XmlConvert.prototype.fromBinHexString1(chars, 0, chars.length, bytes);
		return bytes;
	}
	/*<EndMethod Name=" System.Xml.XmlConvert::FromBinHexString(System.String)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Xml.XmlConvert::FromBinHexString(, System.Int32, System.Int32, )" />*/
	fromBinHexString1: function (chars, offset, charLength, buffer) {
		var bufIndex = offset;
		for (var i = 0; i < charLength - 1; i += 2) {
			buffer[bufIndex] = (chars[i].charCodeAt(0) > '9'.charCodeAt(0) ? (chars[i].charCodeAt(0) - 'A'.charCodeAt(0) + 10) : (chars[i].charCodeAt(0) - '0'.charCodeAt(0)));
			buffer[bufIndex] <<= 4;
			buffer[bufIndex] += chars[i + 1].charCodeAt(0) > '9'.charCodeAt(0) ? (chars[i + 1].charCodeAt(0) - 'A'.charCodeAt(0) + 10) : (chars[i + 1].charCodeAt(0) - '0'.charCodeAt(0));
			bufIndex++;
		}
		if (charLength % 2 != 0) {
			buffer[bufIndex++] = ((chars[charLength - 1].charCodeAt(0) > '9'.charCodeAt(0) ? (chars[charLength - 1].charCodeAt(0) - 'A'.charCodeAt(0) + 10) : (chars[charLength - 1].charCodeAt(0) - '0'.charCodeAt(0))) << 4);
		}
		return bufIndex - offset;
	}
	/*<EndMethod Name="System.Int32 System.Xml.XmlConvert::FromBinHexString(, System.Int32, System.Int32, )" />*/
	,
	$type: new $.ig.Type('XmlConvert', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.Xml.XmlConvert" />*/

/*<BeginType Name="System.Xml.XmlException" />*/

$.ig.util.defType('XmlException', 'Error', {
	_lineNumber: 0,
	_linePosition: 0,
	_sourceUri: null,
	_res: null,
	_messages: null,
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
		$.ig.Error.prototype.init.call(this, 0);
		this._res = $.ig.XmlException.prototype._xml_DefaultException;
		this._messages = new Array(1);
	},
	init1: function (initNumber, message, innerException) {
		$.ig.Error.prototype.init2.call(this, 2, message, innerException);
		this._res = $.ig.XmlException.prototype._xml_UserException;
		this._messages = [ message ];
	},
	init2: function (initNumber, lineInfo, baseUri, message) {
		$.ig.Error.prototype.init.call(this, 0);
	},
	init3: function (initNumber, message) {
		$.ig.Error.prototype.init1.call(this, 1, message);
		this._res = $.ig.XmlException.prototype._xml_UserException;
		this._messages = [ message ];
	},
	init4: function (initNumber, message, innerException, lineNumber, linePosition) {
		$.ig.XmlException.prototype.init1.call(this, 1, message, innerException);
		this._lineNumber = lineNumber;
		this._linePosition = linePosition;
	},
	/*<BeginProperty Name="System.Int32 System.Xml.XmlException::LineNumber()" />*/
	lineNumber: function () {
		return this._lineNumber;
	}
	/*<EndProperty Name="System.Int32 System.Xml.XmlException::LineNumber()" />*/
	,
	/*<BeginProperty Name="System.Int32 System.Xml.XmlException::LinePosition()" />*/
	linePosition: function () {
		return this._linePosition;
	}
	/*<EndProperty Name="System.Int32 System.Xml.XmlException::LinePosition()" />*/
	,
	$type: new $.ig.Type('XmlException', $.ig.Error.prototype.$type)
}, true);

/*<EndType Name="System.Xml.XmlException" />*/

/*<BeginType Name="System.Xml.XmlNamespaceManager" />*/

$.ig.util.defType('XmlNamespaceManager', 'Object', {
	_decls: null,
	_declPos: 0,
	_scopes: null,
	_scopePos: 0,
	_defaultNamespace: null,
	_count: 0,
	/*<BeginMethod Name="System.Void System.Xml.XmlNamespaceManager::InitData()" />*/
	initData: function () {
		this._decls = new Array(10);
		this._scopes = new Array(40);
		for (var idx = 0; idx < this._decls.length; idx++) {
			this._decls[idx] = new $.ig.XmlNamespaceManager_NsDecl();
		}
		for (var idx1 = 0; idx1 < this._scopes.length; idx1++) {
			this._scopes[idx1] = new $.ig.XmlNamespaceManager_NsScope();
		}
	}
	/*<EndMethod Name="System.Void System.Xml.XmlNamespaceManager::InitData()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlNamespaceManager::GrowDecls()" />*/
	growDecls: function () {
		var old = this._decls;
		this._decls = new Array(this._declPos * 2 + 1);
		if (this._declPos > 0) {
			$.ig.util.arrayCopy1(old, 0, this._decls, 0, this._declPos);
		}
	}
	/*<EndMethod Name="System.Void System.Xml.XmlNamespaceManager::GrowDecls()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlNamespaceManager::GrowScopes()" />*/
	growScopes: function () {
		var old = this._scopes;
		this._scopes = new Array(this._scopePos * 2 + 1);
		if (this._scopePos > 0) {
			$.ig.util.arrayCopy1(old, 0, this._scopes, 0, this._scopePos);
		}
	}
	/*<EndMethod Name="System.Void System.Xml.XmlNamespaceManager::GrowScopes()" />*/
	,
	_nameTable: null,
	_internalAtomizedNames: false,
	init: function (nameTable) {
		this._declPos = -1;
		this._scopePos = -1;
		$.ig.Object.prototype.init.call(this);
		if (nameTable == null) {
			throw new $.ig.ArgumentNullException(0, "nameTable");
		}
		this._nameTable = nameTable;
		nameTable.add1($.ig.XmlNamespaceManager.prototype.prefixXmlns);
		nameTable.add1($.ig.XmlNamespaceManager.prototype.prefixXml);
		nameTable.add1(String.empty());
		nameTable.add1($.ig.XmlNamespaceManager.prototype.xmlnsXmlns);
		nameTable.add1($.ig.XmlNamespaceManager.prototype.xmlnsXml);
		this.initData();
	},
	/*<BeginProperty Name="System.String System.Xml.XmlNamespaceManager::DefaultNamespace()" />*/
	defaultNamespace: function () {
		return this._defaultNamespace == null ? String.empty() : this._defaultNamespace;
	}
	/*<EndProperty Name="System.String System.Xml.XmlNamespaceManager::DefaultNamespace()" />*/
	,
	/*<BeginProperty Name="System.Xml.XmlNameTable System.Xml.XmlNamespaceManager::NameTable()" />*/
	nameTable: function () {
		return this._nameTable;
	}
	/*<EndProperty Name="System.Xml.XmlNameTable System.Xml.XmlNamespaceManager::NameTable()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlNamespaceManager::AddNamespace(System.String, System.String)" />*/
	addNamespace: function (prefix, uri) {
		this.addNamespace1(prefix, uri, false);
	}
	/*<EndMethod Name="System.Void System.Xml.XmlNamespaceManager::AddNamespace(System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlNamespaceManager::AddNamespace(System.String, System.String, System.Boolean)" />*/
	addNamespace1: function (prefix, uri, atomizedNames) {
		if (prefix == null) {
			throw new $.ig.ArgumentNullException(0, "prefix Value cannot be null.");
		}
		if (uri == null) {
			throw new $.ig.ArgumentNullException(0, "uri Value cannot be null.");
		}
		if (!atomizedNames) {
			prefix = this._nameTable.add1(prefix);
			uri = this._nameTable.add1(uri);
		}
		if (prefix == $.ig.XmlNamespaceManager.prototype.prefixXml && uri == $.ig.XmlNamespaceManager.prototype.xmlnsXml) {
			return;
		}
		$.ig.XmlNamespaceManager.prototype.isValidDeclaration(prefix, uri, true);
		if (prefix.length == 0) {
			this._defaultNamespace = uri;
		}
		for (var i = this._declPos; i > this._declPos - this._count; i--) {
			if ($.ig.Object.prototype.referenceEquals(this._decls[i]._prefix, prefix)) {
				this._decls[i]._uri = uri;
				return;
			}
		}
		this._declPos++;
		this._count++;
		if (this._declPos == this._decls.length) {
			this.growDecls();
		}
		this._decls[this._declPos]._prefix = prefix;
		this._decls[this._declPos]._uri = uri;
	}
	/*<EndMethod Name="System.Void System.Xml.XmlNamespaceManager::AddNamespace(System.String, System.String, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlNamespaceManager::IsValidDeclaration(System.String, System.String, System.Boolean)" />*/
	isValidDeclaration: function (prefix, uri, throwException) {
		var message = null;
		if (prefix == $.ig.XmlNamespaceManager.prototype.prefixXml && uri != $.ig.XmlNamespaceManager.prototype.xmlnsXml) {
			message = $.ig.util.stringFormat("Prefix \"xml\" can only be bound to the fixed namespace URI \"{0}\". \"{1}\" is invalid.", $.ig.XmlNamespaceManager.prototype.xmlnsXml, uri);
		} else if (message == null && prefix == "xmlns") {
			message = "Declaring prefix named \"xmlns\" is not allowed to any namespace.";
		} else if (message == null && uri == $.ig.XmlNamespaceManager.prototype.xmlnsXmlns) {
			message = $.ig.util.stringFormat("Namespace URI \"{0}\" cannot be declared with any namespace.", $.ig.XmlNamespaceManager.prototype.xmlnsXmlns);
		}
		if (message != null && throwException) {
			throw new $.ig.ArgumentException(1, message);
		} else {
			return message;
		}
	}
	/*<EndMethod Name="System.String System.Xml.XmlNamespaceManager::IsValidDeclaration(System.String, System.String, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Collections.IEnumerator System.Xml.XmlNamespaceManager::GetEnumerator()" />*/
	getEnumerator: function () {
		var ht = new $.ig.Hashtable();
		for (var i = 0; i <= this._declPos; i++) {
			if (this._decls[i]._prefix != String.empty() && this._decls[i]._uri != null) {
				ht.item(this._decls[i]._prefix, this._decls[i]._uri);
			}
		}
		ht.item(String.empty(), this.defaultNamespace());
		ht.item($.ig.XmlNamespaceManager.prototype.prefixXml, $.ig.XmlNamespaceManager.prototype.xmlnsXml);
		ht.item($.ig.XmlNamespaceManager.prototype.prefixXmlns, $.ig.XmlNamespaceManager.prototype.xmlnsXmlns);
		return ht.keys().getEnumerator();
	}
	/*<EndMethod Name="System.Collections.IEnumerator System.Xml.XmlNamespaceManager::GetEnumerator()" />*/
	,
	/*<BeginMethod Name="System.Collections.IDictionary System.Xml.XmlNamespaceManager::System.Xml.IXmlNamespaceResolver.GetNamespacesInScope(System.Xml.XmlNamespaceScope)" />*/
	getNamespacesInScope: function (scope) {
		return this.getNamespacesInScopeImpl(scope);
	}
	/*<EndMethod Name="System.Collections.IDictionary System.Xml.XmlNamespaceManager::System.Xml.IXmlNamespaceResolver.GetNamespacesInScope(System.Xml.XmlNamespaceScope)" />*/
	,
	/*<BeginMethod Name="System.Collections.IDictionary System.Xml.XmlNamespaceManager::GetNamespacesInScopeImpl(System.Xml.XmlNamespaceScope)" />*/
	getNamespacesInScopeImpl: function (scope) {
		var table = new $.ig.Hashtable();
		if (scope == $.ig.XmlNamespaceScope.prototype.local) {
			for (var i = 0; i < this._count; i++) {
				if (this._decls[this._declPos - i]._prefix == String.empty() && this._decls[this._declPos - i]._uri == String.empty()) {
					if (table.contains(String.empty())) {
						table.remove(String.empty());
					}
				} else if (this._decls[this._declPos - i]._uri != null) {
					table.add(this._decls[this._declPos - i]._prefix, this._decls[this._declPos - i]._uri);
				}
			}
			return table;
		} else {
			for (var i1 = 0; i1 <= this._declPos; i1++) {
				if (this._decls[i1]._prefix == String.empty() && this._decls[i1]._uri == String.empty()) {
					if (table.contains(String.empty())) {
						table.remove(String.empty());
					}
				} else if (this._decls[i1]._uri != null) {
					table.item(this._decls[i1]._prefix, this._decls[i1]._uri);
				}
			}
			if (scope == $.ig.XmlNamespaceScope.prototype.all) {
				table.add("xml", $.ig.XmlNamespaceManager.prototype.xmlnsXml);
			}
			return table;
		}
	}
	/*<EndMethod Name="System.Collections.IDictionary System.Xml.XmlNamespaceManager::GetNamespacesInScopeImpl(System.Xml.XmlNamespaceScope)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Xml.XmlNamespaceManager::HasNamespace(System.String)" />*/
	hasNamespace: function (prefix) {
		return this.hasNamespace1(prefix, false);
	}
	/*<EndMethod Name="System.Boolean System.Xml.XmlNamespaceManager::HasNamespace(System.String)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Xml.XmlNamespaceManager::HasNamespace(System.String, System.Boolean)" />*/
	hasNamespace1: function (prefix, atomizedNames) {
		if (prefix == null || this._count == 0) {
			return false;
		}
		for (var i = this._declPos; i > this._declPos - this._count; i--) {
			if (this._decls[i]._prefix == prefix) {
				return true;
			}
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean System.Xml.XmlNamespaceManager::HasNamespace(System.String, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlNamespaceManager::LookupNamespace(System.String)" />*/
	lookupNamespace: function (prefix) {
		switch (prefix) {
			case $.ig.XmlNamespaceManager.prototype.prefixXmlns: return this._nameTable.get1($.ig.XmlNamespaceManager.prototype.xmlnsXmlns);
			case $.ig.XmlNamespaceManager.prototype.prefixXml: return this._nameTable.get1($.ig.XmlNamespaceManager.prototype.xmlnsXml);
			case "": return this.defaultNamespace();
			case null: return null;
		}
		for (var i = this._declPos; i >= 0; i--) {
			if (this.compareString(this._decls[i]._prefix, prefix, this._internalAtomizedNames) && this._decls[i]._uri != null) {
				return this._decls[i]._uri;
			}
		}
		return null;
	}
	/*<EndMethod Name="System.String System.Xml.XmlNamespaceManager::LookupNamespace(System.String)" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlNamespaceManager::LookupNamespace(System.String, System.Boolean)" />*/
	lookupNamespace1: function (prefix, atomizedNames) {
		this._internalAtomizedNames = atomizedNames;
		var ret = this.lookupNamespace(prefix);
		this._internalAtomizedNames = false;
		return ret;
	}
	/*<EndMethod Name="System.String System.Xml.XmlNamespaceManager::LookupNamespace(System.String, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlNamespaceManager::LookupPrefix(System.String)" />*/
	lookupPrefix: function (uri) {
		return this.lookupPrefix1(uri, true);
	}
	/*<EndMethod Name="System.String System.Xml.XmlNamespaceManager::LookupPrefix(System.String)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Xml.XmlNamespaceManager::CompareString(System.String, System.String, System.Boolean)" />*/
	compareString: function (s1, s2, atomizedNames) {
		if (atomizedNames) {
			return $.ig.Object.prototype.referenceEquals(s1, s2);
		} else {
			return s1 == s2;
		}
	}
	/*<EndMethod Name="System.Boolean System.Xml.XmlNamespaceManager::CompareString(System.String, System.String, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlNamespaceManager::LookupPrefix(System.String, System.Boolean)" />*/
	lookupPrefix1: function (uri, atomizedName) {
		return this.lookupPrefixCore(uri, atomizedName, false);
	}
	/*<EndMethod Name="System.String System.Xml.XmlNamespaceManager::LookupPrefix(System.String, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlNamespaceManager::LookupPrefixExclusive(System.String, System.Boolean)" />*/
	lookupPrefixExclusive: function (uri, atomizedName) {
		return this.lookupPrefixCore(uri, atomizedName, true);
	}
	/*<EndMethod Name="System.String System.Xml.XmlNamespaceManager::LookupPrefixExclusive(System.String, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlNamespaceManager::LookupPrefixCore(System.String, System.Boolean, System.Boolean)" />*/
	lookupPrefixCore: function (uri, atomizedName, excludeOverriden) {
		if (uri == null) {
			return null;
		}
		if (this.compareString(uri, this.defaultNamespace(), atomizedName)) {
			return String.empty();
		}
		if (this.compareString(uri, $.ig.XmlNamespaceManager.prototype.xmlnsXml, atomizedName)) {
			return $.ig.XmlNamespaceManager.prototype.prefixXml;
		}
		if (this.compareString(uri, $.ig.XmlNamespaceManager.prototype.xmlnsXmlns, atomizedName)) {
			return $.ig.XmlNamespaceManager.prototype.prefixXmlns;
		}
		for (var i = this._declPos; i >= 0; i--) {
			if (this.compareString(this._decls[i]._uri, uri, atomizedName) && this._decls[i]._prefix.length > 0) {
				if (!excludeOverriden || !this.isOverriden(i)) {
					return this._decls[i]._prefix;
				}
			}
		}
		return null;
	}
	/*<EndMethod Name="System.String System.Xml.XmlNamespaceManager::LookupPrefixCore(System.String, System.Boolean, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Xml.XmlNamespaceManager::IsOverriden(System.Int32)" />*/
	isOverriden: function (idx) {
		if (idx == this._declPos) {
			return false;
		}
		var prefix = this._decls[idx + 1]._prefix;
		for (var i = idx + 1; i <= this._declPos; i++) {
			if (this._decls[idx]._prefix == prefix) {
				return true;
			}
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean System.Xml.XmlNamespaceManager::IsOverriden(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Xml.XmlNamespaceManager::PopScope()" />*/
	popScope: function () {
		if (this._scopePos == -1) {
			return false;
		}
		this._declPos -= this._count;
		this._defaultNamespace = this._scopes[this._scopePos]._defaultNamespace;
		this._count = this._scopes[this._scopePos]._declCount;
		this._scopePos--;
		return true;
	}
	/*<EndMethod Name="System.Boolean System.Xml.XmlNamespaceManager::PopScope()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlNamespaceManager::PushScope()" />*/
	pushScope: function () {
		this._scopePos++;
		if (this._scopePos == this._scopes.length) {
			this.growScopes();
		}
		this._scopes[this._scopePos]._defaultNamespace = this._defaultNamespace;
		this._scopes[this._scopePos]._declCount = this._count;
		this._count = 0;
	}
	/*<EndMethod Name="System.Void System.Xml.XmlNamespaceManager::PushScope()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlNamespaceManager::RemoveNamespace(System.String, System.String)" />*/
	removeNamespace: function (prefix, uri) {
		this.removeNamespace1(prefix, uri, false);
	}
	/*<EndMethod Name="System.Void System.Xml.XmlNamespaceManager::RemoveNamespace(System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlNamespaceManager::RemoveNamespace(System.String, System.String, System.Boolean)" />*/
	removeNamespace1: function (prefix, uri, atomizedNames) {
		if (prefix == null) {
			throw new $.ig.ArgumentNullException(0, "prefix");
		}
		if (uri == null) {
			throw new $.ig.ArgumentNullException(0, "uri");
		}
		if (this._count == 0) {
			return;
		}
		for (var i = this._declPos; i > this._declPos - this._count; i--) {
			if (this.compareString(this._decls[i]._prefix, prefix, atomizedNames) && this.compareString(this._decls[i]._uri, uri, atomizedNames)) {
				this._decls[i]._uri = null;
			}
		}
	}
	/*<EndMethod Name="System.Void System.Xml.XmlNamespaceManager::RemoveNamespace(System.String, System.String, System.Boolean)" />*/
	,
	$type: new $.ig.Type('XmlNamespaceManager', $.ig.Object.prototype.$type, [$.ig.IXmlNamespaceResolver.prototype.$type, $.ig.IEnumerable.prototype.$type])
}, true);

/*<EndType Name="System.Xml.XmlNamespaceManager" />*/

/*<BeginType Name="System.Xml.XmlNamespaceManager_NsDecl" />*/

$.ig.util.defType('XmlNamespaceManager_NsDecl', 'ValueType', {
	init: function () {
		$.ig.ValueType.prototype.init.call(this);
	},
	_prefix: null,
	_uri: null,
	$type: new $.ig.Type('XmlNamespaceManager_NsDecl', $.ig.ValueType.prototype.$type)
}, true);

/*<EndType Name="System.Xml.XmlNamespaceManager_NsDecl" />*/

/*<BeginType Name="System.Xml.XmlNamespaceManager_NsScope" />*/

$.ig.util.defType('XmlNamespaceManager_NsScope', 'ValueType', {
	init: function () {
		$.ig.ValueType.prototype.init.call(this);
	},
	_declCount: 0,
	_defaultNamespace: null,
	$type: new $.ig.Type('XmlNamespaceManager_NsScope', $.ig.ValueType.prototype.$type)
}, true);

/*<EndType Name="System.Xml.XmlNamespaceManager_NsScope" />*/

/*<BeginType Name="System.Xml.XmlParserContext" />*/

$.ig.util.defType('XmlParserContext', 'Object', {
	init: function (initNumber, nt, nsMgr, xmlLang, xmlSpace) {
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
		$.ig.XmlParserContext.prototype.init3.call(this, 3, nt, nsMgr, null, null, null, null, null, xmlLang, xmlSpace, null);
	},
	init1: function (initNumber, nt, nsMgr, xmlLang, xmlSpace, enc) {
		$.ig.XmlParserContext.prototype.init3.call(this, 3, nt, nsMgr, null, null, null, null, null, xmlLang, xmlSpace, enc);
	},
	init2: function (initNumber, nt, nsMgr, docTypeName, pubId, sysId, internalSubset, baseURI, xmlLang, xmlSpace) {
		$.ig.XmlParserContext.prototype.init3.call(this, 3, nt, nsMgr, docTypeName, pubId, sysId, internalSubset, baseURI, xmlLang, xmlSpace, null);
	},
	init3: function (initNumber, nt, nsMgr, docTypeName, pubId, sysId, internalSubset, baseURI, xmlLang, xmlSpace, enc) {
		$.ig.XmlParserContext.prototype.init4.call(this, 4, nt, nsMgr, (docTypeName != null && docTypeName != String.empty()) ? new $.ig.XmlTextReader(9, $.ig.TextReader.prototype.$null, nt).generateDTDObjectModel(docTypeName, pubId, sysId, internalSubset) : null, baseURI, xmlLang, xmlSpace, enc);
	},
	init4: function (initNumber, nt, nsMgr, dtd, baseURI, xmlLang, xmlSpace, enc) {
		this._baseURI = String.empty();
		this._docTypeName = String.empty();
		this._internalSubset = String.empty();
		this._publicID = String.empty();
		this._systemID = String.empty();
		this._xmlLang = String.empty();
		$.ig.Object.prototype.init.call(this);
		this._namespaceManager = nsMgr;
		this._nameTable = nt != null ? nt : nsMgr != null ? nsMgr.nameTable() : null;
		if (dtd != null) {
			this.docTypeName(dtd.name());
			this.publicId(dtd.publicId());
			this.systemId(dtd.systemId());
			this.internalSubset(dtd.internalSubset());
			this._dtd = dtd;
		}
		this._encoding = enc;
		this.baseURI(baseURI);
		this.xmlLang(xmlLang);
		this._xmlSpace = xmlSpace;
		this._contextItems = new $.ig.Array();
	},
	_baseURI: null,
	_docTypeName: null,
	_encoding: null,
	_internalSubset: null,
	_namespaceManager: null,
	_nameTable: null,
	_publicID: null,
	_systemID: null,
	_xmlLang: null,
	_xmlSpace: 0,
	_contextItems: null,
	_contextItemCount: 0,
	_dtd: null,
	/*<BeginProperty Name="System.String System.Xml.XmlParserContext::BaseURI()" />*/
	baseURI: function (value) {
		if (arguments.length === 1) {
			this._baseURI = value != null ? value : String.empty();
			return value;
		} else {
			return this._baseURI;
		}
	}
	/*<EndProperty Name="System.String System.Xml.XmlParserContext::BaseURI()" />*/
	,
	/*<BeginProperty Name="System.String System.Xml.XmlParserContext::DocTypeName()" />*/
	docTypeName: function (value) {
		if (arguments.length === 1) {
			this._docTypeName = value != null ? value : String.empty();
			return value;
		} else {
			return this._docTypeName != null ? this._docTypeName : this._dtd != null ? this._dtd.name() : null;
		}
	}
	/*<EndProperty Name="System.String System.Xml.XmlParserContext::DocTypeName()" />*/
	,
	/*<BeginProperty Name="System.Xml.DTDObjectModel System.Xml.XmlParserContext::Dtd()" />*/
	dtd: function (value) {
		if (arguments.length === 1) {
			this._dtd = value;
			return value;
		} else {
			return this._dtd;
		}
	}
	/*<EndProperty Name="System.Xml.DTDObjectModel System.Xml.XmlParserContext::Dtd()" />*/
	,
	/*<BeginProperty Name="System.Text.Encoding System.Xml.XmlParserContext::Encoding()" />*/
	encoding: function (value) {
		if (arguments.length === 1) {
			this._encoding = value;
			return value;
		} else {
			return this._encoding;
		}
	}
	/*<EndProperty Name="System.Text.Encoding System.Xml.XmlParserContext::Encoding()" />*/
	,
	/*<BeginProperty Name="System.String System.Xml.XmlParserContext::InternalSubset()" />*/
	internalSubset: function (value) {
		if (arguments.length === 1) {
			this._internalSubset = value != null ? value : String.empty();
			return value;
		} else {
			return this._internalSubset != null ? this._internalSubset : this._dtd != null ? this._dtd.internalSubset() : null;
		}
	}
	/*<EndProperty Name="System.String System.Xml.XmlParserContext::InternalSubset()" />*/
	,
	/*<BeginProperty Name="System.Xml.XmlNamespaceManager System.Xml.XmlParserContext::NamespaceManager()" />*/
	namespaceManager: function (value) {
		if (arguments.length === 1) {
			this._namespaceManager = value;
			return value;
		} else {
			return this._namespaceManager;
		}
	}
	/*<EndProperty Name="System.Xml.XmlNamespaceManager System.Xml.XmlParserContext::NamespaceManager()" />*/
	,
	/*<BeginProperty Name="System.Xml.XmlNameTable System.Xml.XmlParserContext::NameTable()" />*/
	nameTable: function (value) {
		if (arguments.length === 1) {
			this._nameTable = value;
			return value;
		} else {
			return this._nameTable;
		}
	}
	/*<EndProperty Name="System.Xml.XmlNameTable System.Xml.XmlParserContext::NameTable()" />*/
	,
	/*<BeginProperty Name="System.String System.Xml.XmlParserContext::PublicId()" />*/
	publicId: function (value) {
		if (arguments.length === 1) {
			this._publicID = value != null ? value : String.empty();
			return value;
		} else {
			return this._publicID != null ? this._publicID : this._dtd != null ? this._dtd.publicId() : null;
		}
	}
	/*<EndProperty Name="System.String System.Xml.XmlParserContext::PublicId()" />*/
	,
	/*<BeginProperty Name="System.String System.Xml.XmlParserContext::SystemId()" />*/
	systemId: function (value) {
		if (arguments.length === 1) {
			this._systemID = value != null ? value : String.empty();
			return value;
		} else {
			return this._systemID != null ? this._systemID : this._dtd != null ? this._dtd.systemId() : null;
		}
	}
	/*<EndProperty Name="System.String System.Xml.XmlParserContext::SystemId()" />*/
	,
	/*<BeginProperty Name="System.String System.Xml.XmlParserContext::XmlLang()" />*/
	xmlLang: function (value) {
		if (arguments.length === 1) {
			this._xmlLang = value != null ? value : String.empty();
			return value;
		} else {
			return this._xmlLang;
		}
	}
	/*<EndProperty Name="System.String System.Xml.XmlParserContext::XmlLang()" />*/
	,
	/*<BeginProperty Name="System.Xml.XmlSpace System.Xml.XmlParserContext::XmlSpace()" />*/
	xmlSpace: function (value) {
		if (arguments.length === 1) {
			this._xmlSpace = value;
			return value;
		} else {
			return this._xmlSpace;
		}
	}
	/*<EndProperty Name="System.Xml.XmlSpace System.Xml.XmlParserContext::XmlSpace()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlParserContext::PushScope()" />*/
	pushScope: function () {
		var item = null;
		if (this._contextItems.length == this._contextItemCount) {
			item = new $.ig.XmlParserContext_ContextItem();
			this._contextItems.add(item);
		} else {
			item = this._contextItems[this._contextItemCount];
		}
		item._baseURI = this.baseURI();
		item._xmlLang = this.xmlLang();
		item._xmlSpace = this.xmlSpace();
		this._contextItemCount++;
	}
	/*<EndMethod Name="System.Void System.Xml.XmlParserContext::PushScope()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlParserContext::PopScope()" />*/
	popScope: function () {
		if (this._contextItemCount == 0) {
			throw new $.ig.XmlException(3, "Unexpected end of element scope.");
		}
		this._contextItemCount--;
		var prev = this._contextItems[this._contextItemCount];
		this._baseURI = prev._baseURI;
		this._xmlLang = prev._xmlLang;
		this._xmlSpace = prev._xmlSpace;
	}
	/*<EndMethod Name="System.Void System.Xml.XmlParserContext::PopScope()" />*/
	,
	$type: new $.ig.Type('XmlParserContext', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.Xml.XmlParserContext" />*/

/*<BeginType Name="System.Xml.XmlParserContext_ContextItem" />*/

$.ig.util.defType('XmlParserContext_ContextItem', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	_baseURI: null,
	_xmlLang: null,
	_xmlSpace: 0,
	$type: new $.ig.Type('XmlParserContext_ContextItem', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.Xml.XmlParserContext_ContextItem" />*/

/*<BeginType Name="System.Xml.XmlReader" />*/

$.ig.util.defType('XmlReader', 'Object', {
	_readStringBuffer: null,
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginProperty Name="System.Int32 System.Xml.XmlReader::AttributeCount()" />*/
	attributeCount: function () {
	}
	/*<EndProperty Name="System.Int32 System.Xml.XmlReader::AttributeCount()" />*/
	,
	/*<BeginProperty Name="System.String System.Xml.XmlReader::BaseURI()" />*/
	baseURI: function () {
	}
	/*<EndProperty Name="System.String System.Xml.XmlReader::BaseURI()" />*/
	,
	/*<BeginProperty Name="System.Boolean System.Xml.XmlReader::CanReadBinaryContent()" />*/
	canReadBinaryContent: function () {
		return false;
	}
	/*<EndProperty Name="System.Boolean System.Xml.XmlReader::CanReadBinaryContent()" />*/
	,
	/*<BeginProperty Name="System.Boolean System.Xml.XmlReader::CanReadValueChunk()" />*/
	canReadValueChunk: function () {
		return false;
	}
	/*<EndProperty Name="System.Boolean System.Xml.XmlReader::CanReadValueChunk()" />*/
	,
	/*<BeginProperty Name="System.Boolean System.Xml.XmlReader::CanResolveEntity()" />*/
	canResolveEntity: function () {
		return false;
	}
	/*<EndProperty Name="System.Boolean System.Xml.XmlReader::CanResolveEntity()" />*/
	,
	/*<BeginProperty Name="System.Int32 System.Xml.XmlReader::Depth()" />*/
	depth: function () {
	}
	/*<EndProperty Name="System.Int32 System.Xml.XmlReader::Depth()" />*/
	,
	/*<BeginProperty Name="System.Boolean System.Xml.XmlReader::EOF()" />*/
	eOF: function () {
	}
	/*<EndProperty Name="System.Boolean System.Xml.XmlReader::EOF()" />*/
	,
	/*<BeginProperty Name="System.Boolean System.Xml.XmlReader::HasAttributes()" />*/
	hasAttributes: function () {
		return this.attributeCount() > 0;
	}
	/*<EndProperty Name="System.Boolean System.Xml.XmlReader::HasAttributes()" />*/
	,
	/*<BeginProperty Name="System.Boolean System.Xml.XmlReader::HasValue()" />*/
	hasValue: function () {
	}
	/*<EndProperty Name="System.Boolean System.Xml.XmlReader::HasValue()" />*/
	,
	/*<BeginProperty Name="System.Boolean System.Xml.XmlReader::IsEmptyElement()" />*/
	isEmptyElement: function () {
	}
	/*<EndProperty Name="System.Boolean System.Xml.XmlReader::IsEmptyElement()" />*/
	,
	/*<BeginProperty Name="System.Boolean System.Xml.XmlReader::IsDefault()" />*/
	isDefault: function () {
	}
	/*<EndProperty Name="System.Boolean System.Xml.XmlReader::IsDefault()" />*/
	,
	/*<BeginProperty Name="System.String System.Xml.XmlReader::Item(System.Int32)" />*/
	item: function (i) {
	}
	/*<EndProperty Name="System.String System.Xml.XmlReader::Item(System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String System.Xml.XmlReader::Item(System.String)" />*/
	item1: function (name) {
	}
	/*<EndProperty Name="System.String System.Xml.XmlReader::Item(System.String)" />*/
	,
	/*<BeginProperty Name="System.String System.Xml.XmlReader::Item(System.String, System.String)" />*/
	item2: function (localName, namespaceName) {
	}
	/*<EndProperty Name="System.String System.Xml.XmlReader::Item(System.String, System.String)" />*/
	,
	/*<BeginProperty Name="System.String System.Xml.XmlReader::LocalName()" />*/
	localName: function () {
	}
	/*<EndProperty Name="System.String System.Xml.XmlReader::LocalName()" />*/
	,
	/*<BeginProperty Name="System.String System.Xml.XmlReader::Name()" />*/
	name: function () {
	}
	/*<EndProperty Name="System.String System.Xml.XmlReader::Name()" />*/
	,
	/*<BeginProperty Name="System.String System.Xml.XmlReader::NamespaceURI()" />*/
	namespaceURI: function () {
	}
	/*<EndProperty Name="System.String System.Xml.XmlReader::NamespaceURI()" />*/
	,
	/*<BeginProperty Name="System.Xml.XmlNameTable System.Xml.XmlReader::NameTable()" />*/
	nameTable: function () {
	}
	/*<EndProperty Name="System.Xml.XmlNameTable System.Xml.XmlReader::NameTable()" />*/
	,
	/*<BeginProperty Name="System.Xml.XmlNodeType System.Xml.XmlReader::NodeType()" />*/
	nodeType: function () {
	}
	/*<EndProperty Name="System.Xml.XmlNodeType System.Xml.XmlReader::NodeType()" />*/
	,
	/*<BeginProperty Name="System.String System.Xml.XmlReader::Prefix()" />*/
	prefix: function () {
	}
	/*<EndProperty Name="System.String System.Xml.XmlReader::Prefix()" />*/
	,
	/*<BeginProperty Name="System.Char System.Xml.XmlReader::QuoteChar()" />*/
	quoteChar: function () {
	}
	/*<EndProperty Name="System.Char System.Xml.XmlReader::QuoteChar()" />*/
	,
	/*<BeginProperty Name="System.Xml.ReadState System.Xml.XmlReader::ReadState()" />*/
	readState: function () {
	}
	/*<EndProperty Name="System.Xml.ReadState System.Xml.XmlReader::ReadState()" />*/
	,
	/*<BeginProperty Name="System.String System.Xml.XmlReader::Value()" />*/
	value: function () {
	}
	/*<EndProperty Name="System.String System.Xml.XmlReader::Value()" />*/
	,
	/*<BeginProperty Name="System.String System.Xml.XmlReader::XmlLang()" />*/
	xmlLang: function () {
	}
	/*<EndProperty Name="System.String System.Xml.XmlReader::XmlLang()" />*/
	,
	/*<BeginProperty Name="System.Xml.XmlSpace System.Xml.XmlReader::XmlSpace()" />*/
	xmlSpace: function () {
	}
	/*<EndProperty Name="System.Xml.XmlSpace System.Xml.XmlReader::XmlSpace()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlReader::Close()" />*/
	close: function () {
	}
	/*<EndMethod Name="System.Void System.Xml.XmlReader::Close()" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlReader::GetAttribute(System.Int32)" />*/
	getAttribute: function (i) {
	}
	/*<EndMethod Name="System.String System.Xml.XmlReader::GetAttribute(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlReader::GetAttribute(System.String)" />*/
	getAttribute1: function (name) {
	}
	/*<EndMethod Name="System.String System.Xml.XmlReader::GetAttribute(System.String)" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlReader::GetAttribute(System.String, System.String)" />*/
	getAttribute2: function (localName, namespaceName) {
	}
	/*<EndMethod Name="System.String System.Xml.XmlReader::GetAttribute(System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Xml.XmlReader::IsName(System.String)" />*/
	isName: function (s) {
		return s != null && $.ig.XmlChar.prototype.isName(s);
	}
	/*<EndMethod Name="System.Boolean System.Xml.XmlReader::IsName(System.String)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Xml.XmlReader::IsNameToken(System.String)" />*/
	isNameToken: function (s) {
		return s != null && $.ig.XmlChar.prototype.isNmToken(s);
	}
	/*<EndMethod Name="System.Boolean System.Xml.XmlReader::IsNameToken(System.String)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Xml.XmlReader::IsStartElement()" />*/
	isStartElement: function () {
		return (this.moveToContent() == $.ig.XmlNodeType.prototype.element);
	}
	/*<EndMethod Name="System.Boolean System.Xml.XmlReader::IsStartElement()" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Xml.XmlReader::IsStartElement(System.String)" />*/
	isStartElement1: function (name) {
		if (!this.isStartElement()) {
			return false;
		}
		return (this.name() == name);
	}
	/*<EndMethod Name="System.Boolean System.Xml.XmlReader::IsStartElement(System.String)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Xml.XmlReader::IsStartElement(System.String, System.String)" />*/
	isStartElement2: function (localName, namespaceName) {
		if (!this.isStartElement()) {
			return false;
		}
		return (this.localName() == localName && this.namespaceURI() == namespaceName);
	}
	/*<EndMethod Name="System.Boolean System.Xml.XmlReader::IsStartElement(System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlReader::LookupNamespace(System.String)" />*/
	lookupNamespace: function (prefix) {
	}
	/*<EndMethod Name="System.String System.Xml.XmlReader::LookupNamespace(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlReader::MoveToAttribute(System.Int32)" />*/
	moveToAttribute2: function (i) {
	}
	/*<EndMethod Name="System.Void System.Xml.XmlReader::MoveToAttribute(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Xml.XmlReader::MoveToAttribute(System.String)" />*/
	moveToAttribute: function (name) {
	}
	/*<EndMethod Name="System.Boolean System.Xml.XmlReader::MoveToAttribute(System.String)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Xml.XmlReader::MoveToAttribute(System.String, System.String)" />*/
	moveToAttribute1: function (localName, namespaceName) {
	}
	/*<EndMethod Name="System.Boolean System.Xml.XmlReader::MoveToAttribute(System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Xml.XmlReader::IsContent(System.Xml.XmlNodeType)" />*/
	isContent: function (nodeType) {
		switch (nodeType) {
			case $.ig.XmlNodeType.prototype.text: return true;
			case $.ig.XmlNodeType.prototype.cDATA: return true;
			case $.ig.XmlNodeType.prototype.element: return true;
			case $.ig.XmlNodeType.prototype.endElement: return true;
			case $.ig.XmlNodeType.prototype.entityReference: return true;
			case $.ig.XmlNodeType.prototype.endEntity: return true;
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean System.Xml.XmlReader::IsContent(System.Xml.XmlNodeType)" />*/
	,
	/*<BeginMethod Name="System.Xml.XmlNodeType System.Xml.XmlReader::MoveToContent()" />*/
	moveToContent: function () {
		switch (this.readState()) {
			case $.ig.ReadState.prototype.initial:
			case $.ig.ReadState.prototype.interactive:
				break;
			default: return this.nodeType();
		}
		if (this.nodeType() == $.ig.XmlNodeType.prototype.attribute) {
			this.moveToElement();
		}
		do {
			if (this.isContent(this.nodeType())) {
				return this.nodeType();
			}
			this.read();
		} while (!this.eOF());
		return $.ig.XmlNodeType.prototype.none;
	}
	/*<EndMethod Name="System.Xml.XmlNodeType System.Xml.XmlReader::MoveToContent()" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Xml.XmlReader::MoveToElement()" />*/
	moveToElement: function () {
	}
	/*<EndMethod Name="System.Boolean System.Xml.XmlReader::MoveToElement()" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Xml.XmlReader::MoveToFirstAttribute()" />*/
	moveToFirstAttribute: function () {
	}
	/*<EndMethod Name="System.Boolean System.Xml.XmlReader::MoveToFirstAttribute()" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Xml.XmlReader::MoveToNextAttribute()" />*/
	moveToNextAttribute: function () {
	}
	/*<EndMethod Name="System.Boolean System.Xml.XmlReader::MoveToNextAttribute()" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Xml.XmlReader::Read()" />*/
	read: function () {
	}
	/*<EndMethod Name="System.Boolean System.Xml.XmlReader::Read()" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Xml.XmlReader::ReadAttributeValue()" />*/
	readAttributeValue: function () {
	}
	/*<EndMethod Name="System.Boolean System.Xml.XmlReader::ReadAttributeValue()" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlReader::ReadElementString()" />*/
	readElementString: function () {
		if (this.moveToContent() != $.ig.XmlNodeType.prototype.element) {
			var error = $.ig.util.stringFormat("'{0}' is an invalid node type.", $.ig.XmlNodeType.prototype.$getName(this.nodeType()));
			throw this.xmlError(error);
		}
		var result = String.empty();
		if (!this.isEmptyElement()) {
			this.read();
			result = this.readString();
			if (this.nodeType() != $.ig.XmlNodeType.prototype.endElement) {
				var error1 = $.ig.util.stringFormat("'{0}' is an invalid node type.", $.ig.XmlNodeType.prototype.$getName(this.nodeType()));
				throw this.xmlError(error1);
			}
		}
		this.read();
		return result;
	}
	/*<EndMethod Name="System.String System.Xml.XmlReader::ReadElementString()" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlReader::ReadElementString(System.String)" />*/
	readElementString1: function (name) {
		if (this.moveToContent() != $.ig.XmlNodeType.prototype.element) {
			var error = $.ig.util.stringFormat("'{0}' is an invalid node type.", $.ig.XmlNodeType.prototype.$getName(this.nodeType()));
			throw this.xmlError(error);
		}
		if (name != this.name()) {
			var error1 = $.ig.util.stringFormat("The {0} tag from namespace {1} is expected.", this.name(), this.namespaceURI());
			throw this.xmlError(error1);
		}
		var result = String.empty();
		if (!this.isEmptyElement()) {
			this.read();
			result = this.readString();
			if (this.nodeType() != $.ig.XmlNodeType.prototype.endElement) {
				var error2 = $.ig.util.stringFormat("'{0}' is an invalid node type.", $.ig.XmlNodeType.prototype.$getName(this.nodeType()));
				throw this.xmlError(error2);
			}
		}
		this.read();
		return result;
	}
	/*<EndMethod Name="System.String System.Xml.XmlReader::ReadElementString(System.String)" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlReader::ReadElementString(System.String, System.String)" />*/
	readElementString2: function (localName, namespaceName) {
		if (this.moveToContent() != $.ig.XmlNodeType.prototype.element) {
			var error = $.ig.util.stringFormat("'{0}' is an invalid node type.", $.ig.XmlNodeType.prototype.$getName(this.nodeType()));
			throw this.xmlError(error);
		}
		if (localName != this.localName() || this.namespaceURI() != namespaceName) {
			var error1 = $.ig.util.stringFormat("The {0} tag from namespace {1} is expected.", this.localName(), this.namespaceURI());
			throw this.xmlError(error1);
		}
		var result = String.empty();
		if (!this.isEmptyElement()) {
			this.read();
			result = this.readString();
			if (this.nodeType() != $.ig.XmlNodeType.prototype.endElement) {
				var error2 = $.ig.util.stringFormat("'{0}' is an invalid node type.", $.ig.XmlNodeType.prototype.$getName(this.nodeType()));
				throw this.xmlError(error2);
			}
		}
		this.read();
		return result;
	}
	/*<EndMethod Name="System.String System.Xml.XmlReader::ReadElementString(System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlReader::ReadEndElement()" />*/
	readEndElement: function () {
		if (this.moveToContent() != $.ig.XmlNodeType.prototype.endElement) {
			var error = $.ig.util.stringFormat("'{0}' is an invalid node type.", $.ig.XmlNodeType.prototype.$getName(this.nodeType()));
			throw this.xmlError(error);
		}
		this.read();
	}
	/*<EndMethod Name="System.Void System.Xml.XmlReader::ReadEndElement()" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlReader::ReadInnerXml()" />*/
	readInnerXml: function () {
		if (this.readState() != $.ig.ReadState.prototype.interactive || this.nodeType() == $.ig.XmlNodeType.prototype.endElement) {
			return String.empty();
		}
		if (this.isEmptyElement()) {
			this.read();
			return String.empty();
		}
		var sw = new $.ig.StringWriter(0);
		var xtw = new $.ig.XmlTextWriter(1, sw);
		if (this.nodeType() == $.ig.XmlNodeType.prototype.element) {
			var startDepth = this.depth();
			this.read();
			while (startDepth < this.depth()) {
				if (this.readState() != $.ig.ReadState.prototype.interactive) {
					throw this.xmlError("Unexpected end of the XML reader.");
				}
				xtw.writeNode(this, false);
			}
			this.read();
		} else {
			xtw.writeNode(this, false);
		}
		return sw.toString();
	}
	/*<EndMethod Name="System.String System.Xml.XmlReader::ReadInnerXml()" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlReader::ReadOuterXml()" />*/
	readOuterXml: function () {
		if (this.readState() != $.ig.ReadState.prototype.interactive || this.nodeType() == $.ig.XmlNodeType.prototype.endElement) {
			return String.empty();
		}
		switch (this.nodeType()) {
			case $.ig.XmlNodeType.prototype.element:
			case $.ig.XmlNodeType.prototype.attribute:
				var sw = new $.ig.StringWriter(0);
				var xtw = new $.ig.XmlTextWriter(1, sw);
				xtw.writeNode(this, false);
				return sw.toString();
			default:
				this.skip();
				return String.empty();
		}
	}
	/*<EndMethod Name="System.String System.Xml.XmlReader::ReadOuterXml()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlReader::ReadStartElement()" />*/
	readStartElement: function () {
		if (this.moveToContent() != $.ig.XmlNodeType.prototype.element) {
			var error = $.ig.util.stringFormat("'{0}' is an invalid node type.", $.ig.XmlNodeType.prototype.$getName(this.nodeType()));
			throw this.xmlError(error);
		}
		this.read();
	}
	/*<EndMethod Name="System.Void System.Xml.XmlReader::ReadStartElement()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlReader::ReadStartElement(System.String)" />*/
	readStartElement1: function (name) {
		if (this.moveToContent() != $.ig.XmlNodeType.prototype.element) {
			var error = $.ig.util.stringFormat("'{0}' is an invalid node type.", $.ig.XmlNodeType.prototype.$getName(this.nodeType()));
			throw this.xmlError(error);
		}
		if (name != this.name()) {
			var error1 = $.ig.util.stringFormat("The {0} tag from namespace {1} is expected.", this.name(), this.namespaceURI());
			throw this.xmlError(error1);
		}
		this.read();
	}
	/*<EndMethod Name="System.Void System.Xml.XmlReader::ReadStartElement(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlReader::ReadStartElement(System.String, System.String)" />*/
	readStartElement2: function (localName, namespaceName) {
		if (this.moveToContent() != $.ig.XmlNodeType.prototype.element) {
			var error = $.ig.util.stringFormat("'{0}' is an invalid node type.", $.ig.XmlNodeType.prototype.$getName(this.nodeType()));
			throw this.xmlError(error);
		}
		if (localName != this.localName() || this.namespaceURI() != namespaceName) {
			var error1 = $.ig.util.stringFormat1("Expecting {0} tag from namespace {1}, got {2} and {3} instead", [ localName, namespaceName, this.localName(), this.namespaceURI() ]);
			throw this.xmlError(error1);
		}
		this.read();
	}
	/*<EndMethod Name="System.Void System.Xml.XmlReader::ReadStartElement(System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlReader::ReadString()" />*/
	readString: function () {
		if (this._readStringBuffer == null) {
			this._readStringBuffer = new $.ig.StringBuilder(0);
		}
		this._readStringBuffer.length(0);
		this.moveToElement();
		switch (this.nodeType()) {
			default: return String.empty();
			case $.ig.XmlNodeType.prototype.element:
				if (this.isEmptyElement()) {
					return String.empty();
				}
				do {
					this.read();
					switch (this.nodeType()) {
						case $.ig.XmlNodeType.prototype.text:
						case $.ig.XmlNodeType.prototype.cDATA:
						case $.ig.XmlNodeType.prototype.whitespace:
						case $.ig.XmlNodeType.prototype.significantWhitespace:
							this._readStringBuffer.append5(this.value());
							continue;
					}
					break;
				} while (true);
				break;
			case $.ig.XmlNodeType.prototype.text:
			case $.ig.XmlNodeType.prototype.cDATA:
			case $.ig.XmlNodeType.prototype.whitespace:
			case $.ig.XmlNodeType.prototype.significantWhitespace:
				do {
					switch (this.nodeType()) {
						case $.ig.XmlNodeType.prototype.text:
						case $.ig.XmlNodeType.prototype.cDATA:
						case $.ig.XmlNodeType.prototype.whitespace:
						case $.ig.XmlNodeType.prototype.significantWhitespace:
							this._readStringBuffer.append5(this.value());
							this.read();
							continue;
					}
					break;
				} while (true);
				break;
		}
		var ret = this._readStringBuffer.toString();
		this._readStringBuffer.length(0);
		return ret;
	}
	/*<EndMethod Name="System.String System.Xml.XmlReader::ReadString()" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Xml.XmlReader::ReadValueChunk(, System.Int32, System.Int32)" />*/
	readValueChunk: function (buffer, offset, length) {
		throw new $.ig.NotSupportedException(1);
	}
	/*<EndMethod Name="System.Int32 System.Xml.XmlReader::ReadValueChunk(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlReader::ResolveEntity()" />*/
	resolveEntity: function () {
	}
	/*<EndMethod Name="System.Void System.Xml.XmlReader::ResolveEntity()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlReader::Skip()" />*/
	skip: function () {
		if (this.readState() != $.ig.ReadState.prototype.interactive) {
			return;
		}
		this.moveToElement();
		if (this.nodeType() != $.ig.XmlNodeType.prototype.element || this.isEmptyElement()) {
			this.read();
			return;
		}
		var depth = this.depth();
		while (this.read() && depth < this.depth()) {
			;
		}
		if (this.nodeType() == $.ig.XmlNodeType.prototype.endElement) {
			this.read();
		}
	}
	/*<EndMethod Name="System.Void System.Xml.XmlReader::Skip()" />*/
	,
	/*<BeginMethod Name="System.Xml.XmlException System.Xml.XmlReader::XmlError(System.String)" />*/
	xmlError: function (message) {
		return new $.ig.XmlException(2, $.ig.util.cast($.ig.IXmlLineInfo.prototype.$type, this), this.baseURI(), message);
	}
	/*<EndMethod Name="System.Xml.XmlException System.Xml.XmlReader::XmlError(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlReader::System.IDisposable.Dispose()" />*/
	dispose: function () {
		this.disposeCore(true);
	}
	/*<EndMethod Name="System.Void System.Xml.XmlReader::System.IDisposable.Dispose()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlReader::Dispose(System.Boolean)" />*/
	disposeCore: function (disposing) {
		if (disposing && this.readState() != $.ig.ReadState.prototype.closed) {
			this.close();
		}
	}
	/*<EndMethod Name="System.Void System.Xml.XmlReader::Dispose(System.Boolean)" />*/
	,
	$type: new $.ig.Type('XmlReader', $.ig.Object.prototype.$type, [$.ig.IDisposable.prototype.$type])
}, true);

/*<EndType Name="System.Xml.XmlReader" />*/

/*<BeginType Name="System.Xml.XmlResolver" />*/

$.ig.util.defType('XmlResolver', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginProperty Name="System.Net.ICredentials System.Xml.XmlResolver::Credentials()" />*/
	credentials: function (value) {
	}
	/*<EndProperty Name="System.Net.ICredentials System.Xml.XmlResolver::Credentials()" />*/
	,
	/*<BeginMethod Name="System.Object System.Xml.XmlResolver::GetEntity(System.Uri, System.String, System.Type)" />*/
	getEntity: function (absoluteUri, role, type) {
	}
	/*<EndMethod Name="System.Object System.Xml.XmlResolver::GetEntity(System.Uri, System.String, System.Type)" />*/
	,
	/*<BeginMethod Name="System.Uri System.Xml.XmlResolver::ResolveUri(System.Uri, System.String)" />*/
	resolveUri: function (baseUri, relativeUri) {
		if (baseUri == null) {
			if (relativeUri == null) {
				throw new $.ig.ArgumentNullException(0, "Either baseUri or relativeUri are required.");
			}
			if (relativeUri.startsWith("http:") || relativeUri.startsWith("https:") || relativeUri.startsWith("ftp:") || relativeUri.startsWith("file:")) {
				return new $.ig.Uri(0, relativeUri);
			}
			throw new $.ig.InvalidOperationException(1, relativeUri + " not supported");
		}
		if (relativeUri == null) {
			return baseUri;
		}
		return new $.ig.Uri(3, baseUri, this.escapeRelativeUriBody(relativeUri));
	}
	/*<EndMethod Name="System.Uri System.Xml.XmlResolver::ResolveUri(System.Uri, System.String)" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlResolver::EscapeRelativeUriBody(System.String)" />*/
	escapeRelativeUriBody: function (src) {
		return $.ig.util.replace($.ig.util.replace($.ig.util.replace($.ig.util.replace($.ig.util.replace(src, "<", "%3C"), ">", "%3E"), "#", "%23"), "%", "%25"), "\"", "%22");
	}
	/*<EndMethod Name="System.String System.Xml.XmlResolver::EscapeRelativeUriBody(System.String)" />*/
	,
	$type: new $.ig.Type('XmlResolver', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.Xml.XmlResolver" />*/

/*<BeginType Name="System.Xml.NonBlockingStreamReader" />*/

$.ig.util.defType('NonBlockingStreamReader', 'TextReader', {
	_input_buffer: null,
	_decoded_buffer: null,
	_decoded_count: 0,
	_pos: 0,
	_buffer_size: 0,
	_encoding: null,
	_decoder: null,
	_base_stream: null,
	_mayBlock: false,
	_line_builder: null,
	init: function (stream, encoding) {
		$.ig.TextReader.prototype.init.call(this);
		var buffer_size = $.ig.NonBlockingStreamReader.prototype._defaultBufferSize;
		this._base_stream = stream;
		this._input_buffer = new Array(buffer_size);
		this._buffer_size = buffer_size;
		this._encoding = encoding;
		this._decoder = this.getDecoder();
		this._decoded_buffer = new Array(encoding.getMaxCharCount(buffer_size));
		this._decoded_count = 0;
		this._pos = 0;
	},
	/*<BeginMethod Name="System.Text.Decoder System.Xml.NonBlockingStreamReader::GetDecoder()" />*/
	getDecoder: function () {
		return this._encoding.getDecoder();
	}
	/*<EndMethod Name="System.Text.Decoder System.Xml.NonBlockingStreamReader::GetDecoder()" />*/
	,
	/*<BeginProperty Name="System.Text.Encoding System.Xml.NonBlockingStreamReader::Encoding()" />*/
	encoding: function () {
		return this._encoding;
	}
	/*<EndProperty Name="System.Text.Encoding System.Xml.NonBlockingStreamReader::Encoding()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.NonBlockingStreamReader::Close()" />*/
	close: function () {
		this.dispose1(true);
	}
	/*<EndMethod Name="System.Void System.Xml.NonBlockingStreamReader::Close()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.NonBlockingStreamReader::Dispose(System.Boolean)" />*/
	dispose1: function (disposing) {
		if (disposing && this._base_stream != null) {
			this._base_stream.close();
		}
		this._input_buffer = null;
		this._decoded_buffer = null;
		this._encoding = null;
		this._decoder = null;
		this._base_stream = null;
		$.ig.TextReader.prototype.dispose1.call(this, disposing);
	}
	/*<EndMethod Name="System.Void System.Xml.NonBlockingStreamReader::Dispose(System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.NonBlockingStreamReader::DiscardBufferedData()" />*/
	discardBufferedData: function () {
		this._pos = this._decoded_count = 0;
		this._mayBlock = false;
		this._decoder = this.getDecoder();
	}
	/*<EndMethod Name="System.Void System.Xml.NonBlockingStreamReader::DiscardBufferedData()" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Xml.NonBlockingStreamReader::ReadBuffer()" />*/
	readBuffer: function () {
		this._pos = 0;
		var cbEncoded = 0;
		this._decoded_count = 0;
		var parse_start = 0;
		do {
			cbEncoded = this._base_stream.read(this._input_buffer, 0, this._buffer_size);
			if (cbEncoded == 0) {
				return 0;
			}
			this._mayBlock = (cbEncoded < this._buffer_size);
			this._decoded_count += this._decoder.getChars(this._input_buffer, parse_start, cbEncoded, this._decoded_buffer, 0);
			parse_start = 0;
		} while (this._decoded_count == 0);
		return this._decoded_count;
	}
	/*<EndMethod Name="System.Int32 System.Xml.NonBlockingStreamReader::ReadBuffer()" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Xml.NonBlockingStreamReader::Peek()" />*/
	peek: function () {
		if (this._base_stream == null) {
			throw new $.ig.ObjectDisposedException(1, "StreamReader", "Cannot read from a closed StreamReader");
		}
		if (this._pos >= this._decoded_count && (this._mayBlock || this.readBuffer() == 0)) {
			return -1;
		}
		return this._decoded_buffer[this._pos].charCodeAt(0);
	}
	/*<EndMethod Name="System.Int32 System.Xml.NonBlockingStreamReader::Peek()" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Xml.NonBlockingStreamReader::Read()" />*/
	read: function () {
		if (this._base_stream == null) {
			throw new $.ig.ObjectDisposedException(1, "StreamReader", "Cannot read from a closed StreamReader");
		}
		if (this._pos >= this._decoded_count && this.readBuffer() == 0) {
			return -1;
		}
		return this._decoded_buffer[this._pos++].charCodeAt(0);
	}
	/*<EndMethod Name="System.Int32 System.Xml.NonBlockingStreamReader::Read()" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Xml.NonBlockingStreamReader::Read(, System.Int32, System.Int32)" />*/
	read1: function (dest_buffer, index, count) {
		if (this._base_stream == null) {
			throw new $.ig.ObjectDisposedException(1, "StreamReader", "Cannot read from a closed StreamReader");
		}
		if (dest_buffer == null) {
			throw new $.ig.ArgumentNullException(0, "dest_buffer");
		}
		if (index < 0) {
			throw new $.ig.ArgumentOutOfRangeException(2, "index", "< 0");
		}
		if (count < 0) {
			throw new $.ig.ArgumentOutOfRangeException(2, "count", "< 0");
		}
		if (index > dest_buffer.length - count) {
			throw new $.ig.ArgumentException(1, "index + count > dest_buffer.Length");
		}
		var chars_read = 0;
		{
			if (this._pos >= this._decoded_count && this.readBuffer() == 0) {
				return chars_read > 0 ? chars_read : 0;
			}
			var cch = Math.min(this._decoded_count - this._pos, count);
			$.ig.util.arrayCopy1(this._decoded_buffer, this._pos, dest_buffer, index, cch);
			this._pos += cch;
			index += cch;
			count -= cch;
			chars_read += cch;
		}
		return chars_read;
	}
	/*<EndMethod Name="System.Int32 System.Xml.NonBlockingStreamReader::Read(, System.Int32, System.Int32)" />*/
	,
	_foundCR: false,
	/*<BeginMethod Name="System.Int32 System.Xml.NonBlockingStreamReader::FindNextEOL()" />*/
	findNextEOL: function () {
		var c = '\0';
		for (; this._pos < this._decoded_count; this._pos++) {
			c = this._decoded_buffer[this._pos];
			if (c == '\n') {
				this._pos++;
				var res = (this._foundCR) ? (this._pos - 2) : (this._pos - 1);
				if (res < 0) {
					res = 0;
				}
				this._foundCR = false;
				return res;
			} else if (this._foundCR) {
				this._foundCR = false;
				return this._pos - 1;
			}
			this._foundCR = (c == '\r');
		}
		return -1;
	}
	/*<EndMethod Name="System.Int32 System.Xml.NonBlockingStreamReader::FindNextEOL()" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.NonBlockingStreamReader::ReadLine()" />*/
	readLine: function () {
		if (this._base_stream == null) {
			throw new $.ig.ObjectDisposedException(1, "StreamReader", "Cannot read from a closed StreamReader");
		}
		if (this._pos >= this._decoded_count && this.readBuffer() == 0) {
			return null;
		}
		var begin = this._pos;
		var end = this.findNextEOL();
		if (end < this._decoded_count && end >= begin) {
			return $.ig.util.createString3(this._decoded_buffer, begin, end - begin);
		}
		if (this._line_builder == null) {
			this._line_builder = new $.ig.StringBuilder(0);
		} else {
			this._line_builder.length(0);
		}
		while (true) {
			if (this._foundCR) {
				this._decoded_count--;
			}
			this._line_builder.append5($.ig.util.createString3(this._decoded_buffer, begin, this._decoded_count - begin));
			if (this.readBuffer() == 0) {
				if (this._line_builder.capacity() > 32768) {
					var sb = this._line_builder;
					this._line_builder = null;
					return sb.toString1(0, sb.length());
				}
				return this._line_builder.toString1(0, this._line_builder.length());
			}
			begin = this._pos;
			end = this.findNextEOL();
			if (end < this._decoded_count && end >= begin) {
				this._line_builder.append5($.ig.util.createString3(this._decoded_buffer, begin, end - begin));
				if (this._line_builder.capacity() > 32768) {
					var sb1 = this._line_builder;
					this._line_builder = null;
					return sb1.toString1(0, sb1.length());
				}
				return this._line_builder.toString1(0, this._line_builder.length());
			}
		}
	}
	/*<EndMethod Name="System.String System.Xml.NonBlockingStreamReader::ReadLine()" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.NonBlockingStreamReader::ReadToEnd()" />*/
	readToEnd: function () {
		if (this._base_stream == null) {
			throw new $.ig.ObjectDisposedException(1, "StreamReader", "Cannot read from a closed StreamReader");
		}
		var text = new $.ig.StringBuilder(0);
		var size = this._decoded_buffer.length;
		var buffer = new Array(size);
		var len;
		while ((len = this.read1(buffer, 0, size)) != 0) {
			text.append(buffer, 0, len);
		}
		return text.toString();
	}
	/*<EndMethod Name="System.String System.Xml.NonBlockingStreamReader::ReadToEnd()" />*/
	,
	$type: new $.ig.Type('NonBlockingStreamReader', $.ig.TextReader.prototype.$type)
}, true);

/*<EndType Name="System.Xml.NonBlockingStreamReader" />*/

/*<BeginType Name="System.Xml.XmlStreamReader" />*/

$.ig.util.defType('XmlStreamReader', 'NonBlockingStreamReader', {
	_input: null,
	init: function (initNumber, input) {
		if (initNumber > 0) {
			switch (initNumber) {
				case 1:
					this.init1.apply(this, arguments);
					break;
			}
			return;
		}
		$.ig.NonBlockingStreamReader.prototype.init.call(this, input, input.actualEncoding() != null ? input.actualEncoding() : $.ig.XmlInputStream.prototype.strictUTF8);
		this._input = input;
	},
	init1: function (initNumber, input) {
		$.ig.XmlStreamReader.prototype.init.call(this, 0, new $.ig.XmlInputStream(input));
	},
	/*<BeginMethod Name="System.Void System.Xml.XmlStreamReader::Close()" />*/
	close: function () {
		this._input.close();
	}
	/*<EndMethod Name="System.Void System.Xml.XmlStreamReader::Close()" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Xml.XmlStreamReader::Read(, System.Int32, System.Int32)" />*/
	read1: function (dest_buffer, index, count) {
		try {
			return $.ig.NonBlockingStreamReader.prototype.read1.call(this, dest_buffer, index, count);
		}
		catch (e) {
			throw new $.ig.XmlException(3, "invalid data.");
		}
	}
	/*<EndMethod Name="System.Int32 System.Xml.XmlStreamReader::Read(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlStreamReader::Dispose(System.Boolean)" />*/
	dispose1: function (disposing) {
		$.ig.NonBlockingStreamReader.prototype.dispose1.call(this, disposing);
		if (disposing) {
			this.close();
		}
	}
	/*<EndMethod Name="System.Void System.Xml.XmlStreamReader::Dispose(System.Boolean)" />*/
	,
	$type: new $.ig.Type('XmlStreamReader', $.ig.NonBlockingStreamReader.prototype.$type)
}, true);

/*<EndType Name="System.Xml.XmlStreamReader" />*/

/*<BeginType Name="System.Xml.XmlInputStream" />*/

$.ig.util.defType('XmlInputStream', 'Stream', {
	staticInit: function () {
		$.ig.XmlInputStream.prototype.strictUTF8 = new $.ig.UTF8Encoding(0, false, true);
	},
	_enc: null,
	_stream: null,
	_buffer: null,
	_bufLength: 0,
	_bufPos: 0,
	init: function (stream) {
		$.ig.Stream.prototype.init.call(this);
		this.initialize(stream);
	},
	/*<BeginMethod Name="System.String System.Xml.XmlInputStream::GetStringFromBytes(System.Int32, System.Int32)" />*/
	getStringFromBytes: function (index, count) {
		var posBak = this._bufPos;
		while (this._bufPos < index + count) {
			if (this.readByteSpecial() < 0) {
				return null;
			}
		}
		this._bufPos = posBak;
		return $.ig.Encoding.prototype.aSCII().getString1(this._buffer, index, count);
	}
	/*<EndMethod Name="System.String System.Xml.XmlInputStream::GetStringFromBytes(System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlInputStream::Initialize(System.IO.Stream)" />*/
	initialize: function (stream) {
		this._buffer = new Array(6);
		this._stream = stream;
		this._enc = $.ig.XmlInputStream.prototype.strictUTF8;
		this._bufLength = stream.read(this._buffer, 0, this._buffer.length);
		if (this._bufLength == -1 || this._bufLength == 0) {
			return;
		}
		var c = this.readByteSpecial();
		switch (c) {
			case 255:
				c = this.readByteSpecial();
				if (c == 254) {
					this._enc = $.ig.Encoding.prototype.unicode();
				} else {
					this._bufPos = 0;
				}
				break;
			case 254:
				c = this.readByteSpecial();
				if (c == 255) {
					this._enc = $.ig.Encoding.prototype.bigEndianUnicode();
					return;
				} else {
					this._bufPos = 0;
				}
				break;
			case 239:
				c = this.readByteSpecial();
				if (c == 187) {
					c = this.readByteSpecial();
					if (c != 191) {
						this._bufPos = 0;
					}
				} else {
					this._buffer[--this._bufPos] = 239;
				}
				break;
			case '<'.charCodeAt(0):
				if (this._bufLength >= 5 && this.getStringFromBytes(1, 4) == "?xml") {
					this._bufPos += 4;
					c = this.skipWhitespace();
					if (c == 'v'.charCodeAt(0)) {
						while (c >= 0) {
							c = this.readByteSpecial();
							if (c == '0'.charCodeAt(0)) {
								this.readByteSpecial();
								break;
							}
						}
						c = this.skipWhitespace();
					}
					if (c == 'e'.charCodeAt(0)) {
						if (this.getStringFromBytes(this._bufPos, 7) == "ncoding") {
							this._bufPos += 7;
							c = this.skipWhitespace();
							if (c != '='.charCodeAt(0)) {
								throw $.ig.XmlInputStream.prototype._encodingException;
							}
							c = this.skipWhitespace();
							var quoteChar = c;
							var sb = new $.ig.StringBuilder(0);
							while (true) {
								c = this.readByteSpecial();
								if (c == quoteChar) {
									break;
								} else if (c < 0) {
									throw $.ig.XmlInputStream.prototype._encodingException;
								}
								sb.append1(String.fromCharCode(c));
							}
							var encodingName = sb.toString();
							if (!$.ig.XmlChar.prototype.isValidIANAEncoding(encodingName)) {
								throw $.ig.XmlInputStream.prototype._encodingException;
							}
							this._enc = $.ig.Encoding.prototype.getEncoding(encodingName);
						}
					}
				}
				this._bufPos = 0;
				break;
			default:
				this._bufPos = 0;
				break;
		}
	}
	/*<EndMethod Name="System.Void System.Xml.XmlInputStream::Initialize(System.IO.Stream)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Xml.XmlInputStream::ReadByteSpecial()" />*/
	readByteSpecial: function () {
		if (this._bufLength > this._bufPos) {
			return this._buffer[this._bufPos++];
		}
		var newbuf = new Array(this._buffer.length * 2);
		$.ig.Buffer.prototype.blockCopy(this._buffer, 0, newbuf, 0, this._bufLength);
		var nbytes = this._stream.read(newbuf, this._bufLength, this._buffer.length);
		if (nbytes == -1 || nbytes == 0) {
			return -1;
		}
		this._bufLength += nbytes;
		this._buffer = newbuf;
		return this._buffer[this._bufPos++];
	}
	/*<EndMethod Name="System.Int32 System.Xml.XmlInputStream::ReadByteSpecial()" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Xml.XmlInputStream::SkipWhitespace()" />*/
	skipWhitespace: function () {
		var c;
		L0: while (true) {
			c = this.readByteSpecial();
			var t1 = String.fromCharCode(c);
			L1: while (true) {
				switch (t1) {
					case '\r':
						t1 = ' ';
						continue L1;
					case '\n':
						t1 = ' ';
						continue L1;
					case '\t':
						t1 = ' ';
						continue L1;
					case ' ': continue L0;
					default: return c;
				}
				break;
			}
		}
	}
	/*<EndMethod Name="System.Int32 System.Xml.XmlInputStream::SkipWhitespace()" />*/
	,
	/*<BeginProperty Name="System.Text.Encoding System.Xml.XmlInputStream::ActualEncoding()" />*/
	actualEncoding: function () {
		return this._enc;
	}
	/*<EndProperty Name="System.Text.Encoding System.Xml.XmlInputStream::ActualEncoding()" />*/
	,
	/*<BeginProperty Name="System.Boolean System.Xml.XmlInputStream::CanRead()" />*/
	canRead: function () {
		if (this._bufLength > this._bufPos) {
			return true;
		} else {
			return this._stream.canRead();
		}
	}
	/*<EndProperty Name="System.Boolean System.Xml.XmlInputStream::CanRead()" />*/
	,
	/*<BeginProperty Name="System.Boolean System.Xml.XmlInputStream::CanSeek()" />*/
	canSeek: function () {
		return false;
	}
	/*<EndProperty Name="System.Boolean System.Xml.XmlInputStream::CanSeek()" />*/
	,
	/*<BeginProperty Name="System.Boolean System.Xml.XmlInputStream::CanWrite()" />*/
	canWrite: function () {
		return false;
	}
	/*<EndProperty Name="System.Boolean System.Xml.XmlInputStream::CanWrite()" />*/
	,
	/*<BeginProperty Name="System.Int64 System.Xml.XmlInputStream::Length()" />*/
	length: function () {
		return this._stream.length();
	}
	/*<EndProperty Name="System.Int64 System.Xml.XmlInputStream::Length()" />*/
	,
	/*<BeginProperty Name="System.Int64 System.Xml.XmlInputStream::Position()" />*/
	position: function (value) {
		if (arguments.length === 1) {
			if (value < this._bufLength) {
				this._bufPos = value;
			} else {
				this._stream.position(value - this._bufLength);
			}
			return value;
		} else {
			return this._stream.position() - this._bufLength + this._bufPos;
		}
	}
	/*<EndProperty Name="System.Int64 System.Xml.XmlInputStream::Position()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlInputStream::Close()" />*/
	close: function () {
		this._stream.close();
	}
	/*<EndMethod Name="System.Void System.Xml.XmlInputStream::Close()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlInputStream::Flush()" />*/
	flush: function () {
		this._stream.flush();
	}
	/*<EndMethod Name="System.Void System.Xml.XmlInputStream::Flush()" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Xml.XmlInputStream::Read(, System.Int32, System.Int32)" />*/
	read: function (buffer, offset, count) {
		var ret;
		if (count <= this._bufLength - this._bufPos) {
			$.ig.Buffer.prototype.blockCopy(this._buffer, this._bufPos, buffer, offset, count);
			this._bufPos += count;
			ret = count;
		} else {
			var bufRest = this._bufLength - this._bufPos;
			if (this._bufLength > this._bufPos) {
				$.ig.Buffer.prototype.blockCopy(this._buffer, this._bufPos, buffer, offset, bufRest);
				this._bufPos += bufRest;
			}
			ret = bufRest + this._stream.read(buffer, offset + bufRest, count - bufRest);
		}
		return ret;
	}
	/*<EndMethod Name="System.Int32 System.Xml.XmlInputStream::Read(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Xml.XmlInputStream::ReadByte()" />*/
	readByte: function () {
		if (this._bufLength > this._bufPos) {
			return this._buffer[this._bufPos++];
		}
		return this._stream.readByte();
	}
	/*<EndMethod Name="System.Int32 System.Xml.XmlInputStream::ReadByte()" />*/
	,
	/*<BeginMethod Name="System.Int64 System.Xml.XmlInputStream::Seek(System.Int64, System.IO.SeekOrigin)" />*/
	seek: function (offset, origin) {
		var bufRest = this._bufLength - this._bufPos;
		if (origin == $.ig.SeekOrigin.prototype.current) {
			if (offset < bufRest) {
				return this._buffer[this._bufPos + offset];
			} else {
				return this._stream.seek(offset - bufRest, origin);
			}
		} else {
			return this._stream.seek(offset, origin);
		}
	}
	/*<EndMethod Name="System.Int64 System.Xml.XmlInputStream::Seek(System.Int64, System.IO.SeekOrigin)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlInputStream::SetLength(System.Int64)" />*/
	setLength: function (value) {
		this._stream.setLength(value);
	}
	/*<EndMethod Name="System.Void System.Xml.XmlInputStream::SetLength(System.Int64)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlInputStream::Write(, System.Int32, System.Int32)" />*/
	write: function (buffer, offset, count) {
		throw new $.ig.NotSupportedException(1);
	}
	/*<EndMethod Name="System.Void System.Xml.XmlInputStream::Write(, System.Int32, System.Int32)" />*/
	,
	$type: new $.ig.Type('XmlInputStream', $.ig.Stream.prototype.$type)
}, true);

/*<EndType Name="System.Xml.XmlInputStream" />*/

/*<BeginType Name="System.Xml.XmlTextReader" />*/

$.ig.util.defType('XmlTextReader', 'XmlReader', {
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
				case 5:
					this.init5.apply(this, arguments);
					break;
				case 6:
					this.init6.apply(this, arguments);
					break;
				case 7:
					this.init7.apply(this, arguments);
					break;
				case 8:
					this.init8.apply(this, arguments);
					break;
				case 9:
					this.init9.apply(this, arguments);
					break;
				case 10:
					this.init10.apply(this, arguments);
					break;
				case 11:
					this.init11.apply(this, arguments);
					break;
				case 12:
					this.init12.apply(this, arguments);
					break;
				case 13:
					this.init13.apply(this, arguments);
					break;
				case 14:
					this.init14.apply(this, arguments);
					break;
				case 15:
					this.init15.apply(this, arguments);
					break;
				case 16:
					this.init16.apply(this, arguments);
					break;
			}
			return;
		}
		this._attributeTokens = new Array(10);
		this._attributeValueTokens = new Array(10);
		this._namespaces = true;
		this._whitespaceHandling = $.ig.WhitespaceHandling.prototype.all;
		this._resolver = new $.ig.XmlUrlResolver();
		this._normalization = false;
		this._prohibitDtd = false;
		this._closeInput = true;
		this._stateStack = new $.ig.XmlTextReader_DtdInputStateStack();
		$.ig.XmlReader.prototype.init.call(this);
	},
	init1: function (initNumber, input) {
		$.ig.XmlTextReader.prototype.init3.call(this, 3, new $.ig.XmlStreamReader(1, input));
	},
	init2: function (initNumber, url) {
		$.ig.XmlTextReader.prototype.init8.call(this, 8, url, new $.ig.NameTable());
	},
	init3: function (initNumber, input) {
		$.ig.XmlTextReader.prototype.init9.call(this, 9, input, new $.ig.NameTable());
	},
	init4: function (initNumber, nt) {
		$.ig.XmlTextReader.prototype.init16.call(this, 16, String.empty(), null, $.ig.XmlNodeType.prototype.none, null);
	},
	init5: function (initNumber, input, nt) {
		$.ig.XmlTextReader.prototype.init9.call(this, 9, new $.ig.XmlStreamReader(1, input), nt);
	},
	init6: function (initNumber, url, input) {
		$.ig.XmlTextReader.prototype.init7.call(this, 7, url, new $.ig.XmlStreamReader(1, input));
	},
	init7: function (initNumber, url, input) {
		$.ig.XmlTextReader.prototype.init14.call(this, 14, url, input, new $.ig.NameTable());
	},
	init8: function (initNumber, url, nt) {
		var $self = this;
		this._attributeTokens = new Array(10);
		this._attributeValueTokens = new Array(10);
		this._namespaces = true;
		this._whitespaceHandling = $.ig.WhitespaceHandling.prototype.all;
		this._resolver = new $.ig.XmlUrlResolver();
		this._normalization = false;
		this._prohibitDtd = false;
		this._closeInput = true;
		this._stateStack = new $.ig.XmlTextReader_DtdInputStateStack();
		$.ig.XmlReader.prototype.init.call(this);
		var uriString;
		var stream = (function () { var $ret = $self.getStreamFromUrl(url, uriString); uriString = $ret.p1; return $ret.ret; }());
		var ctx = new $.ig.XmlParserContext(0, nt, new $.ig.XmlNamespaceManager(nt), String.empty(), $.ig.XmlSpace.prototype.none);
		this.initializeContext(uriString, ctx, new $.ig.XmlStreamReader(1, stream), $.ig.XmlNodeType.prototype.document);
	},
	init9: function (initNumber, input, nt) {
		$.ig.XmlTextReader.prototype.init14.call(this, 14, String.empty(), input, nt);
	},
	init10: function (initNumber, dummy, resolver, url, fragType, context) {
		var $self = this;
		this._attributeTokens = new Array(10);
		this._attributeValueTokens = new Array(10);
		this._namespaces = true;
		this._whitespaceHandling = $.ig.WhitespaceHandling.prototype.all;
		this._resolver = new $.ig.XmlUrlResolver();
		this._normalization = false;
		this._prohibitDtd = false;
		this._closeInput = true;
		this._stateStack = new $.ig.XmlTextReader_DtdInputStateStack();
		$.ig.XmlReader.prototype.init.call(this);
		if (resolver == null) {
			resolver = new $.ig.XmlUrlResolver();
		}
		this.xmlResolver(resolver);
		var uriString;
		var stream = (function () { var $ret = $self.getStreamFromUrl(url, uriString); uriString = $ret.p1; return $ret.ret; }());
		this.initializeContext(uriString, context, new $.ig.XmlStreamReader(1, stream), fragType);
	},
	init11: function (initNumber, xmlFragment, fragType, context) {
		$.ig.XmlTextReader.prototype.init16.call(this, 16, context != null ? context.baseURI() : String.empty(), new $.ig.XmlStreamReader(1, xmlFragment), fragType, context);
		this._disallowReset = true;
	},
	init12: function (initNumber, baseURI, xmlFragment, fragType) {
		$.ig.XmlTextReader.prototype.init16.call(this, 16, baseURI, xmlFragment, fragType, null);
	},
	init13: function (initNumber, url, input, nt) {
		$.ig.XmlTextReader.prototype.init14.call(this, 14, url, new $.ig.XmlStreamReader(1, input), nt);
	},
	init14: function (initNumber, url, input, nt) {
		$.ig.XmlTextReader.prototype.init16.call(this, 16, url, input, $.ig.XmlNodeType.prototype.document, null);
	},
	init15: function (initNumber, xmlFragment, fragType, context) {
		$.ig.XmlTextReader.prototype.init16.call(this, 16, context != null ? context.baseURI() : String.empty(), new $.ig.StringReader(xmlFragment), fragType, context);
		this._disallowReset = true;
	},
	init16: function (initNumber, url, fragment, fragType, context) {
		this._attributeTokens = new Array(10);
		this._attributeValueTokens = new Array(10);
		this._namespaces = true;
		this._whitespaceHandling = $.ig.WhitespaceHandling.prototype.all;
		this._resolver = new $.ig.XmlUrlResolver();
		this._normalization = false;
		this._prohibitDtd = false;
		this._closeInput = true;
		this._stateStack = new $.ig.XmlTextReader_DtdInputStateStack();
		$.ig.XmlReader.prototype.init.call(this);
		this.initializeContext(url, context, fragment, fragType);
	},
	/*<BeginMethod Name="System.IO.Stream System.Xml.XmlTextReader::GetStreamFromUrl(System.String, System.String)" />*/
	getStreamFromUrl: function (url, absoluteUriString) {
		var uri = this._resolver.resolveUri(null, url);
		absoluteUriString = uri != null ? uri.toString() : String.empty();
		return {
			ret: $.ig.util.cast($.ig.Stream.prototype.$type, this._resolver.getEntity(uri, null, $.ig.Stream.prototype.$type)),
			p1: absoluteUriString
		};
	}
	/*<EndMethod Name="System.IO.Stream System.Xml.XmlTextReader::GetStreamFromUrl(System.String, System.String)" />*/
	,
	/*<BeginProperty Name="System.Int32 System.Xml.XmlTextReader::AttributeCount()" />*/
	attributeCount: function () {
		return this._attributeCount;
	}
	/*<EndProperty Name="System.Int32 System.Xml.XmlTextReader::AttributeCount()" />*/
	,
	/*<BeginProperty Name="System.String System.Xml.XmlTextReader::BaseURI()" />*/
	baseURI: function () {
		return this._parserContext.baseURI();
	}
	/*<EndProperty Name="System.String System.Xml.XmlTextReader::BaseURI()" />*/
	,
	/*<BeginProperty Name="System.Boolean System.Xml.XmlTextReader::CanReadBinaryContent()" />*/
	canReadBinaryContent: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean System.Xml.XmlTextReader::CanReadBinaryContent()" />*/
	,
	/*<BeginProperty Name="System.Boolean System.Xml.XmlTextReader::CanReadValueChunk()" />*/
	canReadValueChunk: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean System.Xml.XmlTextReader::CanReadValueChunk()" />*/
	,
	/*<BeginProperty Name="System.Boolean System.Xml.XmlTextReader::CharacterChecking()" />*/
	characterChecking: function (value) {
		if (arguments.length === 1) {
			this._checkCharacters = value;
			return value;
		} else {
			return this._checkCharacters;
		}
	}
	/*<EndProperty Name="System.Boolean System.Xml.XmlTextReader::CharacterChecking()" />*/
	,
	/*<BeginProperty Name="System.Boolean System.Xml.XmlTextReader::CloseInput()" />*/
	closeInput: function (value) {
		if (arguments.length === 1) {
			this._closeInput = value;
			return value;
		} else {
			return this._closeInput;
		}
	}
	/*<EndProperty Name="System.Boolean System.Xml.XmlTextReader::CloseInput()" />*/
	,
	/*<BeginProperty Name="System.Int32 System.Xml.XmlTextReader::Depth()" />*/
	depth: function () {
		var nodeTypeMod = this._currentToken._nodeType == $.ig.XmlNodeType.prototype.element ? 0 : -1;
		if (this._currentAttributeValue >= 0) {
			return nodeTypeMod + this._elementDepth + 2;
		} else if (this._currentAttribute >= 0) {
			return nodeTypeMod + this._elementDepth + 1;
		}
		return this._elementDepth;
	}
	/*<EndProperty Name="System.Int32 System.Xml.XmlTextReader::Depth()" />*/
	,
	/*<BeginProperty Name="System.Text.Encoding System.Xml.XmlTextReader::Encoding()" />*/
	encoding: function () {
		return this._parserContext.encoding() || $.ig.Encoding.prototype.uTF8();
	}
	/*<EndProperty Name="System.Text.Encoding System.Xml.XmlTextReader::Encoding()" />*/
	,
	/*<BeginProperty Name="System.Boolean System.Xml.XmlTextReader::EOF()" />*/
	eOF: function () {
		return this._readState == $.ig.ReadState.prototype.endOfFile;
	}
	/*<EndProperty Name="System.Boolean System.Xml.XmlTextReader::EOF()" />*/
	,
	/*<BeginProperty Name="System.Boolean System.Xml.XmlTextReader::HasValue()" />*/
	hasValue: function () {
		return this._cursorToken.value() != null;
	}
	/*<EndProperty Name="System.Boolean System.Xml.XmlTextReader::HasValue()" />*/
	,
	/*<BeginProperty Name="System.Boolean System.Xml.XmlTextReader::IsDefault()" />*/
	isDefault: function () {
		return false;
	}
	/*<EndProperty Name="System.Boolean System.Xml.XmlTextReader::IsDefault()" />*/
	,
	/*<BeginProperty Name="System.Boolean System.Xml.XmlTextReader::IsEmptyElement()" />*/
	isEmptyElement: function () {
		return this._cursorToken._isEmptyElement;
	}
	/*<EndProperty Name="System.Boolean System.Xml.XmlTextReader::IsEmptyElement()" />*/
	,
	/*<BeginProperty Name="System.String System.Xml.XmlTextReader::Item(System.Int32)" />*/
	item: function (i) {
		return this.getAttribute(i);
	}
	/*<EndProperty Name="System.String System.Xml.XmlTextReader::Item(System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String System.Xml.XmlTextReader::Item(System.String)" />*/
	item1: function (name) {
		return this.getAttribute1(name);
	}
	/*<EndProperty Name="System.String System.Xml.XmlTextReader::Item(System.String)" />*/
	,
	/*<BeginProperty Name="System.String System.Xml.XmlTextReader::Item(System.String, System.String)" />*/
	item2: function (localName, namespaceName) {
		return this.getAttribute2(localName, namespaceName);
	}
	/*<EndProperty Name="System.String System.Xml.XmlTextReader::Item(System.String, System.String)" />*/
	,
	/*<BeginProperty Name="System.Int32 System.Xml.XmlTextReader::LineNumber()" />*/
	lineNumber: function () {
		if (this._useProceedingLineInfo) {
			return this._line;
		} else {
			return this._cursorToken._lineNumber;
		}
	}
	/*<EndProperty Name="System.Int32 System.Xml.XmlTextReader::LineNumber()" />*/
	,
	/*<BeginProperty Name="System.Int32 System.Xml.XmlTextReader::LinePosition()" />*/
	linePosition: function () {
		if (this._useProceedingLineInfo) {
			return this._column;
		} else {
			return this._cursorToken._linePosition;
		}
	}
	/*<EndProperty Name="System.Int32 System.Xml.XmlTextReader::LinePosition()" />*/
	,
	/*<BeginProperty Name="System.String System.Xml.XmlTextReader::LocalName()" />*/
	localName: function () {
		return this._cursorToken._localName;
	}
	/*<EndProperty Name="System.String System.Xml.XmlTextReader::LocalName()" />*/
	,
	/*<BeginProperty Name="System.String System.Xml.XmlTextReader::Name()" />*/
	name: function () {
		return this._cursorToken._name;
	}
	/*<EndProperty Name="System.String System.Xml.XmlTextReader::Name()" />*/
	,
	/*<BeginProperty Name="System.Boolean System.Xml.XmlTextReader::Namespaces()" />*/
	namespaces: function (value) {
		if (arguments.length === 1) {
			if (this._readState != $.ig.ReadState.prototype.initial) {
				throw new $.ig.InvalidOperationException(1, "Namespaces have to be set before reading.");
			}
			this._namespaces = value;
			return value;
		} else {
			return this._namespaces;
		}
	}
	/*<EndProperty Name="System.Boolean System.Xml.XmlTextReader::Namespaces()" />*/
	,
	/*<BeginProperty Name="System.String System.Xml.XmlTextReader::NamespaceURI()" />*/
	namespaceURI: function () {
		return this._cursorToken._namespaceURI;
	}
	/*<EndProperty Name="System.String System.Xml.XmlTextReader::NamespaceURI()" />*/
	,
	/*<BeginProperty Name="System.Xml.XmlNameTable System.Xml.XmlTextReader::NameTable()" />*/
	nameTable: function () {
		return this._nameTable;
	}
	/*<EndProperty Name="System.Xml.XmlNameTable System.Xml.XmlTextReader::NameTable()" />*/
	,
	/*<BeginProperty Name="System.Xml.XmlNodeType System.Xml.XmlTextReader::NodeType()" />*/
	nodeType: function () {
		return this._cursorToken._nodeType;
	}
	/*<EndProperty Name="System.Xml.XmlNodeType System.Xml.XmlTextReader::NodeType()" />*/
	,
	/*<BeginProperty Name="System.Boolean System.Xml.XmlTextReader::Normalization()" />*/
	normalization: function (value) {
		if (arguments.length === 1) {
			this._normalization = value;
			return value;
		} else {
			return this._normalization;
		}
	}
	/*<EndProperty Name="System.Boolean System.Xml.XmlTextReader::Normalization()" />*/
	,
	/*<BeginProperty Name="System.String System.Xml.XmlTextReader::Prefix()" />*/
	prefix: function () {
		return this._cursorToken._prefix;
	}
	/*<EndProperty Name="System.String System.Xml.XmlTextReader::Prefix()" />*/
	,
	/*<BeginProperty Name="System.Boolean System.Xml.XmlTextReader::ProhibitDtd()" />*/
	prohibitDtd: function (value) {
		if (arguments.length === 1) {
			this._prohibitDtd = value;
			return value;
		} else {
			return this._prohibitDtd;
		}
	}
	/*<EndProperty Name="System.Boolean System.Xml.XmlTextReader::ProhibitDtd()" />*/
	,
	/*<BeginProperty Name="System.Char System.Xml.XmlTextReader::QuoteChar()" />*/
	quoteChar: function () {
		return this._cursorToken._quoteChar;
	}
	/*<EndProperty Name="System.Char System.Xml.XmlTextReader::QuoteChar()" />*/
	,
	/*<BeginProperty Name="System.Xml.ReadState System.Xml.XmlTextReader::ReadState()" />*/
	readState: function () {
		return this._readState;
	}
	/*<EndProperty Name="System.Xml.ReadState System.Xml.XmlTextReader::ReadState()" />*/
	,
	/*<BeginProperty Name="System.String System.Xml.XmlTextReader::Value()" />*/
	value: function () {
		return this._cursorToken.value() != null ? this._cursorToken.value() : String.empty();
	}
	/*<EndProperty Name="System.String System.Xml.XmlTextReader::Value()" />*/
	,
	/*<BeginProperty Name="System.Xml.WhitespaceHandling System.Xml.XmlTextReader::WhitespaceHandling()" />*/
	whitespaceHandling: function (value) {
		if (arguments.length === 1) {
			this._whitespaceHandling = value;
			return value;
		} else {
			return this._whitespaceHandling;
		}
	}
	/*<EndProperty Name="System.Xml.WhitespaceHandling System.Xml.XmlTextReader::WhitespaceHandling()" />*/
	,
	/*<BeginProperty Name="System.String System.Xml.XmlTextReader::XmlLang()" />*/
	xmlLang: function () {
		return this._parserContext.xmlLang();
	}
	/*<EndProperty Name="System.String System.Xml.XmlTextReader::XmlLang()" />*/
	,
	/*<BeginProperty Name="System.Xml.XmlResolver System.Xml.XmlTextReader::XmlResolver()" />*/
	xmlResolver: function (value) {
		this._resolver = value;
		return value;
	}
	/*<EndProperty Name="System.Xml.XmlResolver System.Xml.XmlTextReader::XmlResolver()" />*/
	,
	/*<BeginProperty Name="System.Xml.XmlSpace System.Xml.XmlTextReader::XmlSpace()" />*/
	xmlSpace: function () {
		return this._parserContext.xmlSpace();
	}
	/*<EndProperty Name="System.Xml.XmlSpace System.Xml.XmlTextReader::XmlSpace()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextReader::Close()" />*/
	close: function () {
		this._readState = $.ig.ReadState.prototype.closed;
		this._cursorToken.clear();
		this._currentToken.clear();
		this._attributeCount = 0;
		if (this._closeInput && this._reader != null) {
			this._reader.close();
		}
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextReader::Close()" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlTextReader::GetAttribute(System.Int32)" />*/
	getAttribute: function (i) {
		if (i >= this._attributeCount) {
			throw new $.ig.ArgumentOutOfRangeException(1, "i is smaller than AttributeCount");
		} else {
			return this._attributeTokens[i].value();
		}
	}
	/*<EndMethod Name="System.String System.Xml.XmlTextReader::GetAttribute(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlTextReader::GetAttribute(System.String)" />*/
	getAttribute1: function (name) {
		for (var i = 0; i < this._attributeCount; i++) {
			if (this._attributeTokens[i]._name == name) {
				return this._attributeTokens[i].value();
			}
		}
		return null;
	}
	/*<EndMethod Name="System.String System.Xml.XmlTextReader::GetAttribute(System.String)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Xml.XmlTextReader::GetIndexOfQualifiedAttribute(System.String, System.String)" />*/
	getIndexOfQualifiedAttribute: function (localName, namespaceURI) {
		namespaceURI = namespaceURI != null ? namespaceURI : String.empty();
		for (var i = 0; i < this._attributeCount; i++) {
			var ti = this._attributeTokens[i];
			if (ti._localName == localName && ti._namespaceURI == namespaceURI) {
				return i;
			}
		}
		return -1;
	}
	/*<EndMethod Name="System.Int32 System.Xml.XmlTextReader::GetIndexOfQualifiedAttribute(System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlTextReader::GetAttribute(System.String, System.String)" />*/
	getAttribute2: function (localName, namespaceURI) {
		var idx = this.getIndexOfQualifiedAttribute(localName, namespaceURI);
		if (idx < 0) {
			return null;
		}
		return this._attributeTokens[idx].value();
	}
	/*<EndMethod Name="System.String System.Xml.XmlTextReader::GetAttribute(System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.IO.TextReader System.Xml.XmlTextReader::GetRemainder()" />*/
	getRemainder: function () {
		if (this._peekCharsLength < 0) {
			return this._reader;
		}
		return new $.ig.StringReader($.ig.util.createString3(this._peekChars, this._peekCharsIndex, this._peekCharsLength - this._peekCharsIndex) + this._reader.readToEnd());
	}
	/*<EndMethod Name="System.IO.TextReader System.Xml.XmlTextReader::GetRemainder()" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlTextReader::LookupNamespace(System.String)" />*/
	lookupNamespace: function (prefix) {
		return this.lookupNamespace1(prefix, false);
	}
	/*<EndMethod Name="System.String System.Xml.XmlTextReader::LookupNamespace(System.String)" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlTextReader::LookupNamespace(System.String, System.Boolean)" />*/
	lookupNamespace1: function (prefix, atomizedNames) {
		var s = this._nsmgr.lookupNamespace1(prefix, atomizedNames);
		return s == String.empty() ? null : s;
	}
	/*<EndMethod Name="System.String System.Xml.XmlTextReader::LookupNamespace(System.String, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextReader::MoveToAttribute(System.Int32)" />*/
	moveToAttribute2: function (i) {
		if (i >= this._attributeCount) {
			throw new $.ig.ArgumentOutOfRangeException(1, "attribute index out of range.");
		}
		this._currentAttribute = i;
		this._currentAttributeValue = -1;
		this._cursorToken = this._attributeTokens[i];
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextReader::MoveToAttribute(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Xml.XmlTextReader::MoveToAttribute(System.String)" />*/
	moveToAttribute: function (name) {
		for (var i = 0; i < this._attributeCount; i++) {
			var ti = this._attributeTokens[i];
			if (ti._name == name) {
				this.moveToAttribute2(i);
				return true;
			}
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean System.Xml.XmlTextReader::MoveToAttribute(System.String)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Xml.XmlTextReader::MoveToAttribute(System.String, System.String)" />*/
	moveToAttribute1: function (localName, namespaceName) {
		var idx = this.getIndexOfQualifiedAttribute(localName, namespaceName);
		if (idx < 0) {
			return false;
		}
		this.moveToAttribute2(idx);
		return true;
	}
	/*<EndMethod Name="System.Boolean System.Xml.XmlTextReader::MoveToAttribute(System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Xml.XmlTextReader::MoveToElement()" />*/
	moveToElement: function () {
		if (this._currentToken == null) {
			return false;
		}
		if (this._cursorToken == this._currentToken) {
			return false;
		}
		if (this._currentAttribute >= 0) {
			this._currentAttribute = -1;
			this._currentAttributeValue = -1;
			this._cursorToken = this._currentToken;
			return true;
		} else {
			return false;
		}
	}
	/*<EndMethod Name="System.Boolean System.Xml.XmlTextReader::MoveToElement()" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Xml.XmlTextReader::MoveToFirstAttribute()" />*/
	moveToFirstAttribute: function () {
		if (this._attributeCount == 0) {
			return false;
		}
		this.moveToElement();
		return this.moveToNextAttribute();
	}
	/*<EndMethod Name="System.Boolean System.Xml.XmlTextReader::MoveToFirstAttribute()" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Xml.XmlTextReader::MoveToNextAttribute()" />*/
	moveToNextAttribute: function () {
		if (this._currentAttribute == 0 && this._attributeCount == 0) {
			return false;
		}
		if (this._currentAttribute + 1 < this._attributeCount) {
			this._currentAttribute++;
			this._currentAttributeValue = -1;
			this._cursorToken = this._attributeTokens[this._currentAttribute];
			return true;
		} else {
			return false;
		}
	}
	/*<EndMethod Name="System.Boolean System.Xml.XmlTextReader::MoveToNextAttribute()" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Xml.XmlTextReader::Read()" />*/
	read: function () {
		if (this._readState == $.ig.ReadState.prototype.closed) {
			return false;
		}
		this._curNodePeekIndex = this._peekCharsIndex;
		this._preserveCurrentTag = true;
		this._nestLevel = 0;
		this.clearValueBuffer();
		if (this._startNodeType == $.ig.XmlNodeType.prototype.attribute) {
			if (this._currentAttribute == 0) {
				return false;
			}
			this.skipTextDeclaration();
			this.clearAttributes();
			this.incrementAttributeToken();
			this.readAttributeValueTokens('\"'.charCodeAt(0));
			this._cursorToken = this._attributeTokens[0];
			this._currentAttributeValue = -1;
			this._readState = $.ig.ReadState.prototype.interactive;
			return true;
		}
		if (this._readState == $.ig.ReadState.prototype.initial && this._currentState == $.ig.XmlNodeType.prototype.element) {
			this.skipTextDeclaration();
		}
		var more = false;
		this._readState = $.ig.ReadState.prototype.interactive;
		this._currentLinkedNodeLineNumber = this._line;
		this._currentLinkedNodeLinePosition = this._column;
		this._useProceedingLineInfo = true;
		this._cursorToken = this._currentToken;
		this._attributeCount = 0;
		this._currentAttribute = this._currentAttributeValue = -1;
		this._currentToken.clear();
		if (this._depthUp) {
			++this._depth;
			this._depthUp = false;
		}
		if (this._readCharsInProgress) {
			this._readCharsInProgress = false;
			return this.readUntilEndTag();
		}
		more = this.readContent();
		if (!more && this._startNodeType == $.ig.XmlNodeType.prototype.document && this._currentState != $.ig.XmlNodeType.prototype.endElement) {
			throw this.notWFError("Document element did not appear.");
		}
		this._useProceedingLineInfo = false;
		return more;
	}
	/*<EndMethod Name="System.Boolean System.Xml.XmlTextReader::Read()" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Xml.XmlTextReader::ReadAttributeValue()" />*/
	readAttributeValue: function () {
		if (this._readState == $.ig.ReadState.prototype.initial && this._startNodeType == $.ig.XmlNodeType.prototype.attribute) {
			this.read();
		}
		if (this._currentAttribute < 0) {
			return false;
		}
		var ti = this._attributeTokens[this._currentAttribute];
		if (this._currentAttributeValue < 0) {
			this._currentAttributeValue = ti._valueTokenStartIndex - 1;
		}
		if (this._currentAttributeValue < ti._valueTokenEndIndex) {
			this._currentAttributeValue++;
			this._cursorToken = this._attributeValueTokens[this._currentAttributeValue];
			return true;
		} else {
			return false;
		}
	}
	/*<EndMethod Name="System.Boolean System.Xml.XmlTextReader::ReadAttributeValue()" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Xml.XmlTextReader::ReadBase64(, System.Int32, System.Int32)" />*/
	readBase64: function (buffer, offset, length) {
		return 0;
	}
	/*<EndMethod Name="System.Int32 System.Xml.XmlTextReader::ReadBase64(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Xml.XmlTextReader::ReadBinHex(, System.Int32, System.Int32)" />*/
	readBinHex: function (buffer, offset, length) {
		return 0;
	}
	/*<EndMethod Name="System.Int32 System.Xml.XmlTextReader::ReadBinHex(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Xml.XmlTextReader::ReadChars(, System.Int32, System.Int32)" />*/
	readChars: function (buffer, offset, length) {
		if (offset < 0) {
			throw new $.ig.ArgumentOutOfRangeException(3, "offset", offset, "Offset must be non-negative integer.");
		} else if (length < 0) {
			throw new $.ig.ArgumentOutOfRangeException(3, "length", length, "Length must be non-negative integer.");
		} else if (buffer.length < offset + length) {
			throw new $.ig.ArgumentOutOfRangeException(1, "buffer length is smaller than the sum of offset and length.");
		}
		if (this.isEmptyElement()) {
			this.read();
			return 0;
		}
		if (!this._readCharsInProgress && this.nodeType() != $.ig.XmlNodeType.prototype.element) {
			return 0;
		}
		this._preserveCurrentTag = false;
		this._readCharsInProgress = true;
		this._useProceedingLineInfo = true;
		return this.readCharsInternal(buffer, offset, length);
	}
	/*<EndMethod Name="System.Int32 System.Xml.XmlTextReader::ReadChars(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextReader::ResetState()" />*/
	resetState: function () {
		if (this._disallowReset) {
			throw new $.ig.InvalidOperationException(1, "Cannot call ResetState when parsing an XML fragment.");
		}
		this.clear();
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextReader::ResetState()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextReader::ResolveEntity()" />*/
	resolveEntity: function () {
		throw new $.ig.InvalidOperationException(1, "XmlTextReader cannot resolve external entities.");
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextReader::ResolveEntity()" />*/
	,
	/*<BeginProperty Name="System.Xml.XmlResolver System.Xml.XmlTextReader::Resolver()" />*/
	resolver: function () {
		return this._resolver;
	}
	/*<EndProperty Name="System.Xml.XmlResolver System.Xml.XmlTextReader::Resolver()" />*/
	,
	_cursorToken: null,
	_currentToken: null,
	_currentAttributeToken: null,
	_currentAttributeValueToken: null,
	_attributeTokens: null,
	_attributeValueTokens: null,
	_currentAttribute: 0,
	_currentAttributeValue: 0,
	_attributeCount: 0,
	_parserContext: null,
	_nameTable: null,
	_nsmgr: null,
	_readState: 0,
	_disallowReset: false,
	_depth: 0,
	_elementDepth: 0,
	_depthUp: false,
	_popScope: false,
	_elementNames: null,
	_elementNameStackPos: 0,
	_allowMultipleRoot: false,
	_isStandalone: false,
	_returnEntityReference: false,
	_entityReferenceName: null,
	_valueBuffer: null,
	_reader: null,
	_peekChars: null,
	_peekCharsIndex: 0,
	_peekCharsLength: 0,
	_curNodePeekIndex: 0,
	_preserveCurrentTag: false,
	_line: 0,
	_column: 0,
	_currentLinkedNodeLineNumber: 0,
	_currentLinkedNodeLinePosition: 0,
	_useProceedingLineInfo: false,
	_startNodeType: 0,
	_currentState: 0,
	_nestLevel: 0,
	_readCharsInProgress: false,
	_namespaces: false,
	_whitespaceHandling: 0,
	_resolver: null,
	_normalization: false,
	_checkCharacters: false,
	_prohibitDtd: false,
	_closeInput: false,
	_entityHandling: 0,
	_whitespacePool: null,
	_whitespaceCache: null,
	/*<BeginMethod Name="System.Xml.XmlException System.Xml.XmlTextReader::NotWFError(System.String)" />*/
	notWFError: function (message) {
		return new $.ig.XmlException(2, $.ig.util.cast($.ig.IXmlLineInfo.prototype.$type, this), this.baseURI(), message);
	}
	/*<EndMethod Name="System.Xml.XmlException System.Xml.XmlTextReader::NotWFError(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextReader::Init()" />*/
	initXmlTextReader: function () {
		this._allowMultipleRoot = false;
		this._elementNames = new Array(10);
		this._valueBuffer = new $.ig.StringBuilder(0);
		this._checkCharacters = true;
		this._prohibitDtd = false;
		this._closeInput = true;
		this._entityHandling = $.ig.EntityHandling.prototype.expandCharEntities;
		this._peekCharsIndex = 0;
		if (this._peekChars == null) {
			this._peekChars = new Array($.ig.XmlTextReader.prototype._peekCharCapacity);
		}
		this._peekCharsLength = -1;
		this._curNodePeekIndex = -1;
		this._line = 1;
		this._column = 1;
		this._currentLinkedNodeLineNumber = this._currentLinkedNodeLinePosition = 0;
		this.clear();
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextReader::Init()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextReader::Clear()" />*/
	clear: function () {
		this._currentToken = new $.ig.XmlTextReader_XmlTokenInfo(this);
		this._cursorToken = this._currentToken;
		this._currentAttribute = -1;
		this._currentAttributeValue = -1;
		this._attributeCount = 0;
		this._readState = $.ig.ReadState.prototype.initial;
		this._depth = 0;
		this._elementDepth = 0;
		this._depthUp = false;
		this._popScope = this._allowMultipleRoot = false;
		this._elementNameStackPos = 0;
		this._isStandalone = false;
		this._returnEntityReference = false;
		this._entityReferenceName = String.empty();
		this._useProceedingLineInfo = false;
		this._currentState = $.ig.XmlNodeType.prototype.none;
		this._readCharsInProgress = false;
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextReader::Clear()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextReader::InitializeContext(System.String, System.Xml.XmlParserContext, System.IO.TextReader, System.Xml.XmlNodeType)" />*/
	initializeContext: function (url, context, fragment, fragType) {
		this._startNodeType = fragType;
		this._parserContext = context;
		if (context == null) {
			var nt = new $.ig.NameTable();
			this._parserContext = new $.ig.XmlParserContext(0, nt, new $.ig.XmlNamespaceManager(nt), String.empty(), $.ig.XmlSpace.prototype.none);
		}
		this._nameTable = this._parserContext.nameTable();
		this._nameTable = this._nameTable != null ? this._nameTable : new $.ig.NameTable();
		this._nsmgr = this._parserContext.namespaceManager();
		this._nsmgr = this._nsmgr != null ? this._nsmgr : new $.ig.XmlNamespaceManager(this._nameTable);
		if (url != null && url.length > 0) {
			var uri = null;
			try {
				uri = new $.ig.Uri(0, url);
			}
			catch (e) {
				throw e;
			}
			this._parserContext.baseURI(uri.toString());
		}
		this.initXmlTextReader();
		this._reader = fragment;
		switch (fragType) {
			case $.ig.XmlNodeType.prototype.attribute:
				this._reader = new $.ig.StringReader($.ig.util.replace(fragment.readToEnd(), "\"", "&quot;"));
				break;
			case $.ig.XmlNodeType.prototype.element:
				this._currentState = $.ig.XmlNodeType.prototype.element;
				this._allowMultipleRoot = true;
				break;
			case $.ig.XmlNodeType.prototype.document: break;
			default: throw new $.ig.XmlException(3, $.ig.util.stringFormat("NodeType {0} is not allowed to create XmlTextReader.", $.ig.XmlNodeType.prototype.getBox(fragType)));
		}
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextReader::InitializeContext(System.String, System.Xml.XmlParserContext, System.IO.TextReader, System.Xml.XmlNodeType)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextReader::SetProperties(System.Xml.XmlNodeType, System.String, System.String, System.String, System.Boolean, System.String, System.Boolean)" />*/
	setProperties: function (nodeType, name, prefix, localName, isEmptyElement, value, clearAttributes) {
		this.setTokenProperties(this._currentToken, nodeType, name, prefix, localName, isEmptyElement, value, clearAttributes);
		this._currentToken._lineNumber = this._currentLinkedNodeLineNumber;
		this._currentToken._linePosition = this._currentLinkedNodeLinePosition;
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextReader::SetProperties(System.Xml.XmlNodeType, System.String, System.String, System.String, System.Boolean, System.String, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextReader::SetTokenProperties(System.Xml.XmlTextReader_XmlTokenInfo, System.Xml.XmlNodeType, System.String, System.String, System.String, System.Boolean, System.String, System.Boolean)" />*/
	setTokenProperties: function (token, nodeType, name, prefix, localName, isEmptyElement, value, clearAttributes) {
		token._nodeType = nodeType;
		token._name = name;
		token._prefix = prefix;
		token._localName = localName;
		token._isEmptyElement = isEmptyElement;
		token.value(value);
		this._elementDepth = this._depth;
		if (clearAttributes) {
			this.clearAttributes();
		}
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextReader::SetTokenProperties(System.Xml.XmlTextReader_XmlTokenInfo, System.Xml.XmlNodeType, System.String, System.String, System.String, System.Boolean, System.String, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextReader::ClearAttributes()" />*/
	clearAttributes: function () {
		this._attributeCount = 0;
		this._currentAttribute = -1;
		this._currentAttributeValue = -1;
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextReader::ClearAttributes()" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Xml.XmlTextReader::PeekSurrogate(System.Int32)" />*/
	peekSurrogate: function (c) {
		if (this._peekCharsLength <= this._peekCharsIndex + 1) {
			if (!this.readTextReader(c)) {
				return c;
			}
		}
		var highhalfChar = this._peekChars[this._peekCharsIndex].charCodeAt(0);
		var lowhalfChar = this._peekChars[this._peekCharsIndex + 1].charCodeAt(0);
		if (((highhalfChar & 64512) != 55296) || ((lowhalfChar & 64512) != 56320)) {
			return highhalfChar;
		}
		return 65536 + (highhalfChar - 55296) * 1024 + (lowhalfChar - 56320);
	}
	/*<EndMethod Name="System.Int32 System.Xml.XmlTextReader::PeekSurrogate(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Xml.XmlTextReader::PeekChar()" />*/
	peekChar: function () {
		if (this._peekCharsIndex < this._peekCharsLength) {
			var c = this._peekChars[this._peekCharsIndex].charCodeAt(0);
			if (c == 0) {
				return -1;
			}
			if (c < 55296 || c >= 57343) {
				return c;
			}
			return this.peekSurrogate(c);
		} else {
			if (!this.readTextReader(-1)) {
				return -1;
			}
			return this.peekChar();
		}
	}
	/*<EndMethod Name="System.Int32 System.Xml.XmlTextReader::PeekChar()" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Xml.XmlTextReader::ReadChar()" />*/
	readChar: function () {
		var ch = this.peekChar();
		this._peekCharsIndex++;
		if (ch >= 65536) {
			this._peekCharsIndex++;
		}
		if (ch == '\n'.charCodeAt(0)) {
			this._line++;
			this._column = 1;
		} else if (ch != -1) {
			this._column++;
		}
		return ch;
	}
	/*<EndMethod Name="System.Int32 System.Xml.XmlTextReader::ReadChar()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextReader::Advance(System.Int32)" />*/
	advance: function (ch) {
		this._peekCharsIndex++;
		if (ch >= 65536) {
			this._peekCharsIndex++;
		}
		if (ch == '\n'.charCodeAt(0)) {
			this._line++;
			this._column = 1;
		} else if (ch != -1) {
			this._column++;
		}
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextReader::Advance(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Xml.XmlTextReader::ReadTextReader(System.Int32)" />*/
	readTextReader: function (remained) {
		if (this._peekCharsLength < 0) {
			this._peekCharsLength = this._reader.read1(this._peekChars, 0, this._peekChars.length);
			return this._peekCharsLength > 0;
		}
		var offset = remained >= 0 ? 1 : 0;
		var copysize = this._peekCharsLength - this._curNodePeekIndex;
		if (!this._preserveCurrentTag) {
			this._curNodePeekIndex = 0;
			this._peekCharsIndex = 0;
		} else if (this._peekCharsLength < this._peekChars.length) {
		} else if (this._curNodePeekIndex <= (this._peekCharsLength >> 1)) {
			var tmp = new Array(this._peekChars.length * 2);
			$.ig.util.arrayCopy1(this._peekChars, this._curNodePeekIndex, tmp, 0, copysize);
			this._peekChars = tmp;
			this._curNodePeekIndex = 0;
			this._peekCharsIndex = copysize;
		} else {
			$.ig.util.arrayCopy1(this._peekChars, this._curNodePeekIndex, this._peekChars, 0, copysize);
			this._curNodePeekIndex = 0;
			this._peekCharsIndex = copysize;
		}
		if (remained >= 0) {
			this._peekChars[this._peekCharsIndex] = String.fromCharCode(remained);
		}
		var count = this._peekChars.length - this._peekCharsIndex - offset;
		if (count > $.ig.XmlTextReader.prototype._peekCharCapacity) {
			count = $.ig.XmlTextReader.prototype._peekCharCapacity;
		}
		var read = this._reader.read1(this._peekChars, this._peekCharsIndex + offset, count);
		var remainingSize = offset + read;
		this._peekCharsLength = this._peekCharsIndex + remainingSize;
		return (remainingSize != 0);
	}
	/*<EndMethod Name="System.Boolean System.Xml.XmlTextReader::ReadTextReader(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Xml.XmlTextReader::ReadContent()" />*/
	readContent: function () {
		if (this._popScope) {
			this._nsmgr.popScope();
			this._parserContext.popScope();
			this._popScope = false;
		}
		if (this._returnEntityReference) {
			this.setEntityReferenceProperties();
		} else {
			var c = this.peekChar();
			if (c == -1) {
				this._readState = $.ig.ReadState.prototype.endOfFile;
				this.clearValueBuffer();
				this.setProperties($.ig.XmlNodeType.prototype.none, String.empty(), String.empty(), String.empty(), false, null, true);
				if (this._depth > 0) {
					throw this.notWFError("unexpected end of file. Current depth is " + this._depth);
				}
				return false;
			} else {
				switch (c) {
					case 60:
						this.advance(c);
						switch (this.peekChar()) {
							case 47:
								this.advance(47);
								this.readEndTag();
								break;
							case 63:
								this.advance(63);
								this.readProcessingInstruction();
								break;
							case 33:
								this.advance(33);
								this.readDeclaration();
								break;
							default:
								this.readStartTag();
								break;
						}
						break;
					case 13:
					case 10:
					case 9:
					case 32:
						if (!this.readWhitespace()) {
							return this.readContent();
						}
						break;
					default:
						this.readText(true);
						break;
				}
			}
		}
		return this.readState() != $.ig.ReadState.prototype.endOfFile;
	}
	/*<EndMethod Name="System.Boolean System.Xml.XmlTextReader::ReadContent()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextReader::SetEntityReferenceProperties()" />*/
	setEntityReferenceProperties: function () {
		this.clearValueBuffer();
		this.setProperties($.ig.XmlNodeType.prototype.entityReference, this._entityReferenceName, String.empty(), this._entityReferenceName, false, null, true);
		this._returnEntityReference = false;
		this._entityReferenceName = String.empty();
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextReader::SetEntityReferenceProperties()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextReader::ReadStartTag()" />*/
	readStartTag: function () {
		var $self = this;
		if (this._currentState == $.ig.XmlNodeType.prototype.endElement) {
			throw this.notWFError("Multiple document element was detected.");
		}
		this._currentState = $.ig.XmlNodeType.prototype.element;
		this._nsmgr.pushScope();
		this._currentLinkedNodeLineNumber = this._line;
		this._currentLinkedNodeLinePosition = this._column;
		var prefix, localName;
		var name = (function () { var $ret = $self.readName1(prefix, localName); prefix = $ret.p0; localName = $ret.p1; return $ret.ret; }());
		if (this._currentState == $.ig.XmlNodeType.prototype.endElement) {
			throw this.notWFError("document has terminated, cannot open new element");
		}
		var isEmptyElement = false;
		this.clearAttributes();
		this.skipWhitespace();
		if ($.ig.XmlChar.prototype.isFirstNameChar(this.peekChar())) {
			this.readAttributes(false);
		}
		this._cursorToken = this._currentToken;
		for (var i = 0; i < this._attributeCount; i++) {
			this._attributeTokens[i].fillXmlns();
		}
		for (var i1 = 0; i1 < this._attributeCount; i1++) {
			this._attributeTokens[i1].fillNamespace();
		}
		if (this._namespaces) {
			for (var i2 = 0; i2 < this._attributeCount; i2++) {
				if (this._attributeTokens[i2]._prefix == "xmlns" && this._attributeTokens[i2].value() == String.empty()) {
					throw this.notWFError("Empty namespace URI cannot be mapped to non-empty prefix.");
				}
			}
		}
		for (var i3 = 0; i3 < this._attributeCount; i3++) {
			for (var j = i3 + 1; j < this._attributeCount; j++) {
				if ($.ig.Object.prototype.referenceEquals(this._attributeTokens[i3]._name, this._attributeTokens[j]._name) || ($.ig.Object.prototype.referenceEquals(this._attributeTokens[i3]._localName, this._attributeTokens[j]._localName) && $.ig.Object.prototype.referenceEquals(this._attributeTokens[i3]._namespaceURI, this._attributeTokens[j]._namespaceURI))) {
					throw this.notWFError("Attribute name and qualified name must be identical.");
				}
			}
		}
		if (this.peekChar() == '/'.charCodeAt(0)) {
			this.advance('/'.charCodeAt(0));
			isEmptyElement = true;
			this._popScope = true;
		} else {
			this._depthUp = true;
			this.pushElementName(name, localName, prefix);
		}
		this._parserContext.pushScope();
		this.expect('>'.charCodeAt(0));
		this.setProperties($.ig.XmlNodeType.prototype.element, name, prefix, localName, isEmptyElement, null, false);
		if (prefix.length > 0) {
			this._currentToken._namespaceURI = this.lookupNamespace1(prefix, true);
		} else if (this._namespaces) {
			this._currentToken._namespaceURI = this._nsmgr.defaultNamespace();
		}
		if (this._namespaces) {
			if (this.namespaceURI() == null) {
				throw this.notWFError($.ig.util.stringFormat("'{0}' is undeclared namespace.", this.prefix()));
			}
			try {
				for (var i4 = 0; i4 < this._attributeCount; i4++) {
					this.moveToAttribute2(i4);
					if (this.namespaceURI() == null) {
						throw this.notWFError($.ig.util.stringFormat("'{0}' is undeclared namespace.", this.prefix()));
					}
				}
			}
			finally {
				this.moveToElement();
			}
		}
		for (var i5 = 0; i5 < this._attributeCount; i5++) {
			if (!$.ig.Object.prototype.referenceEquals(this._attributeTokens[i5]._prefix, $.ig.XmlNamespaceManager.prototype.prefixXml)) {
				continue;
			}
			var aname = this._attributeTokens[i5]._localName;
			var value = this._attributeTokens[i5].value();
			switch (aname) {
				case "base":
					if (this._resolver != null) {
						var buri = this.baseURI() != String.empty() ? new $.ig.Uri(0, this.baseURI()) : null;
						if (buri == null && String.isNullOrEmpty(value)) {
							break;
						}
						var uri = this._resolver.resolveUri(buri, value);
						this._parserContext.baseURI(uri != null ? uri.toString() : String.empty());
					} else {
						this._parserContext.baseURI(value);
					}
					break;
				case "lang":
					this._parserContext.xmlLang(value);
					break;
				case "space":
					switch (value) {
						case "preserve":
							this._parserContext.xmlSpace($.ig.XmlSpace.prototype.preserve);
							break;
						case "default":
							this._parserContext.xmlSpace($.ig.XmlSpace.prototype.$default);
							break;
						default: throw this.notWFError($.ig.util.stringFormat("Invalid xml:space value: {0}", value));
					}
					break;
			}
		}
		if (this.isEmptyElement()) {
			this.checkCurrentStateUpdate();
		}
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextReader::ReadStartTag()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextReader::PushElementName(System.String, System.String, System.String)" />*/
	pushElementName: function (name, local, prefix) {
		if (this._elementNames.length == this._elementNameStackPos) {
			var newArray = new Array(this._elementNames.length * 2);
			$.ig.util.arrayCopy1(this._elementNames, 0, newArray, 0, this._elementNameStackPos);
			this._elementNames = newArray;
		}
		this._elementNames[this._elementNameStackPos++] = new $.ig.XmlTextReader_TagName(1, name, local, prefix);
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextReader::PushElementName(System.String, System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextReader::ReadEndTag()" />*/
	readEndTag: function () {
		if (this._currentState != $.ig.XmlNodeType.prototype.element) {
			throw this.notWFError("End tag cannot appear in this state.");
		}
		this._currentLinkedNodeLineNumber = this._line;
		this._currentLinkedNodeLinePosition = this._column;
		if (this._elementNameStackPos == 0) {
			throw this.notWFError("closing element without matching opening element");
		}
		var expected = this._elementNames[--this._elementNameStackPos];
		this.expect1(expected._name);
		this.expectAfterWhitespace('>');
		--this._depth;
		this.setProperties($.ig.XmlNodeType.prototype.endElement, expected._name, expected._prefix, expected._localName, false, null, true);
		if (expected._prefix.length > 0) {
			this._currentToken._namespaceURI = this.lookupNamespace1(expected._prefix, true);
		} else if (this._namespaces) {
			this._currentToken._namespaceURI = this._nsmgr.defaultNamespace();
		}
		this._popScope = true;
		this.checkCurrentStateUpdate();
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextReader::ReadEndTag()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextReader::CheckCurrentStateUpdate()" />*/
	checkCurrentStateUpdate: function () {
		if (this._depth == 0 && !this._allowMultipleRoot && (this.isEmptyElement() || this.nodeType() == $.ig.XmlNodeType.prototype.endElement)) {
			this._currentState = $.ig.XmlNodeType.prototype.endElement;
		}
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextReader::CheckCurrentStateUpdate()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextReader::AppendValueChar(System.Int32)" />*/
	appendValueChar: function (ch) {
		if (ch <= $.ig.String.prototype.charMaxValue().charCodeAt(0)) {
			this._valueBuffer.append1(String.fromCharCode(ch));
		} else {
			this.appendSurrogatePairValueChar(ch);
		}
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextReader::AppendValueChar(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextReader::AppendSurrogatePairValueChar(System.Int32)" />*/
	appendSurrogatePairValueChar: function (ch) {
		this._valueBuffer.append1(String.fromCharCode(($.ig.intDivide((ch - 65536), 1024) + 55296)));
		this._valueBuffer.append1(String.fromCharCode(((ch - 65536) % 1024 + 56320)));
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextReader::AppendSurrogatePairValueChar(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlTextReader::CreateValueString()" />*/
	createValueString: function () {
		switch (this.nodeType()) {
			case $.ig.XmlNodeType.prototype.whitespace:
			case $.ig.XmlNodeType.prototype.significantWhitespace:
				var len = this._valueBuffer.length();
				if (this._whitespaceCache == null) {
					this._whitespaceCache = new Array(32);
				}
				if (len >= this._whitespaceCache.length) {
					break;
				}
				if (this._whitespacePool == null) {
					this._whitespacePool = new $.ig.NameTable();
				}
				for (var i = 0; i < len; i++) {
					this._whitespaceCache[i] = this._valueBuffer.item(i);
				}
				return this._whitespacePool.add(this._whitespaceCache, 0, this._valueBuffer.length());
		}
		return (this._valueBuffer.capacity() < 100) ? this._valueBuffer.toString1(0, this._valueBuffer.length()) : this._valueBuffer.toString();
	}
	/*<EndMethod Name="System.String System.Xml.XmlTextReader::CreateValueString()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextReader::ClearValueBuffer()" />*/
	clearValueBuffer: function () {
		this._valueBuffer.length(0);
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextReader::ClearValueBuffer()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextReader::ReadText(System.Boolean)" />*/
	readText: function (notWhitespace) {
		if (this._currentState != $.ig.XmlNodeType.prototype.element) {
			throw this.notWFError("Text node cannot appear in this state.");
		}
		this._preserveCurrentTag = false;
		if (notWhitespace) {
			this.clearValueBuffer();
		}
		var ch = this.peekChar();
		var previousWasCloseBracket = false;
		while (ch != '<'.charCodeAt(0) && ch != -1) {
			if (ch == '&'.charCodeAt(0)) {
				this.readChar();
				ch = this.readReference(false);
				if (this._returnEntityReference) {
					break;
				}
			} else if (this._normalization && ch == '\r'.charCodeAt(0)) {
				this.readChar();
				ch = this.peekChar();
				if (ch != '\n'.charCodeAt(0)) {
					this.appendValueChar('\n'.charCodeAt(0));
				}
				continue;
			} else {
				if (this.characterChecking() && $.ig.XmlChar.prototype.isInvalid(ch)) {
					throw this.notWFError("Not allowed character was found.");
				}
				ch = this.readChar();
			}
			{
				if (ch <= $.ig.String.prototype.charMaxValue().charCodeAt(0)) {
					this._valueBuffer.append1(String.fromCharCode(ch));
				} else {
					this.appendSurrogatePairValueChar(ch);
				}
			}
			if (ch == ']'.charCodeAt(0)) {
				if (previousWasCloseBracket) {
					if (this.peekChar() == '>'.charCodeAt(0)) {
						throw this.notWFError("Inside text content, character sequence ']]>' is not allowed.");
					}
				}
				previousWasCloseBracket = true;
			} else if (previousWasCloseBracket) {
				previousWasCloseBracket = false;
			}
			ch = this.peekChar();
			notWhitespace = true;
		}
		if (this._returnEntityReference && this._valueBuffer.length() == 0) {
			this.setEntityReferenceProperties();
		} else {
			var nodeType = notWhitespace ? $.ig.XmlNodeType.prototype.text : this.xmlSpace() == $.ig.XmlSpace.prototype.preserve ? $.ig.XmlNodeType.prototype.significantWhitespace : $.ig.XmlNodeType.prototype.whitespace;
			this.setProperties(nodeType, String.empty(), String.empty(), String.empty(), false, null, true);
		}
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextReader::ReadText(System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Xml.XmlTextReader::ReadReference(System.Boolean)" />*/
	readReference: function (ignoreEntityReferences) {
		if (this.peekChar() == '#'.charCodeAt(0)) {
			this.advance('#'.charCodeAt(0));
			return this.readCharacterReference();
		} else {
			return this.readEntityReference(ignoreEntityReferences);
		}
	}
	/*<EndMethod Name="System.Int32 System.Xml.XmlTextReader::ReadReference(System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Xml.XmlTextReader::ReadCharacterReference()" />*/
	readCharacterReference: function () {
		var value = 0;
		var ch;
		if (this.peekChar() == 'x'.charCodeAt(0)) {
			this.advance('x'.charCodeAt(0));
			while ((ch = this.peekChar()) != ';'.charCodeAt(0) && ch != -1) {
				this.advance(ch);
				if (ch >= '0'.charCodeAt(0) && ch <= '9'.charCodeAt(0)) {
					value = (value << 4) + ch - '0'.charCodeAt(0);
				} else if (ch >= 'A'.charCodeAt(0) && ch <= 'F'.charCodeAt(0)) {
					value = (value << 4) + ch - 'A'.charCodeAt(0) + 10;
				} else if (ch >= 'a'.charCodeAt(0) && ch <= 'f'.charCodeAt(0)) {
					value = (value << 4) + ch - 'a'.charCodeAt(0) + 10;
				} else {
					throw this.notWFError($.ig.util.stringFormat2($.ig.CultureInfo.prototype.invariantCulture(), "invalid hexadecimal digit: {0} (#x{1:X})", [ String.fromCharCode(ch), ch ]));
				}
			}
		} else {
			while ((ch = this.peekChar()) != ';'.charCodeAt(0) && ch != -1) {
				this.advance(ch);
				if (ch >= '0'.charCodeAt(0) && ch <= '9'.charCodeAt(0)) {
					value = value * 10 + ch - '0'.charCodeAt(0);
				} else {
					throw this.notWFError($.ig.util.stringFormat2($.ig.CultureInfo.prototype.invariantCulture(), "invalid decimal digit: {0} (#x{1:X})", [ String.fromCharCode(ch), ch ]));
				}
			}
		}
		this.readChar();
		if (this.characterChecking() && this.normalization() && $.ig.XmlChar.prototype.isInvalid(value)) {
			throw this.notWFError("Referenced character was not allowed in XML. Normalization is " + this._normalization + ", checkCharacters = " + this._checkCharacters);
		}
		return value;
	}
	/*<EndMethod Name="System.Int32 System.Xml.XmlTextReader::ReadCharacterReference()" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Xml.XmlTextReader::ReadEntityReference(System.Boolean)" />*/
	readEntityReference: function (ignoreEntityReferences) {
		var name = this.readName();
		this.expect(';'.charCodeAt(0));
		var predefined = $.ig.XmlChar.prototype.getPredefinedEntity(name);
		if (predefined >= 0) {
			return predefined;
		} else {
			if (ignoreEntityReferences) {
				this.appendValueChar('&'.charCodeAt(0));
				for (var i = 0; i < name.length; i++) {
					this.appendValueChar(name.charAt(i).charCodeAt(0));
				}
				this.appendValueChar(';'.charCodeAt(0));
			} else {
				this._returnEntityReference = true;
				this._entityReferenceName = name;
			}
		}
		return -1;
	}
	/*<EndMethod Name="System.Int32 System.Xml.XmlTextReader::ReadEntityReference(System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextReader::ReadAttributes(System.Boolean)" />*/
	readAttributes: function (isXmlDecl) {
		var $self = this;
		var peekChar = -1;
		var requireWhitespace = false;
		this._currentAttribute = -1;
		this._currentAttributeValue = -1;
		do {
			if (!this.skipWhitespace() && requireWhitespace) {
				throw this.notWFError("Unexpected token. Name is required here.");
			}
			this.incrementAttributeToken();
			this._currentAttributeToken._lineNumber = this._line;
			this._currentAttributeToken._linePosition = this._column;
			var prefix, localName;
			this._currentAttributeToken._name = (function () { var $ret = $self.readName1(prefix, localName); prefix = $ret.p0; localName = $ret.p1; return $ret.ret; }());
			this._currentAttributeToken._prefix = prefix;
			this._currentAttributeToken._localName = localName;
			this.expectAfterWhitespace('=');
			this.skipWhitespace();
			this.readAttributeValueTokens(-1);
			var dummyValue;
			if (isXmlDecl) {
				dummyValue = this._currentAttributeToken.value();
			}
			this._attributeCount++;
			if (!this.skipWhitespace()) {
				requireWhitespace = true;
			}
			peekChar = this.peekChar();
			if (isXmlDecl) {
				if (peekChar == '?'.charCodeAt(0)) {
					break;
				}
			} else if (peekChar == '/'.charCodeAt(0) || peekChar == '>'.charCodeAt(0)) {
				break;
			}
		} while (peekChar != -1);
		this._currentAttribute = -1;
		this._currentAttributeValue = -1;
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextReader::ReadAttributes(System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextReader::AddAttributeWithValue(System.String, System.String)" />*/
	addAttributeWithValue: function (name, value) {
		this.incrementAttributeToken();
		var ati = this._attributeTokens[this._currentAttribute];
		ati._name = this.nameTable().add1(name);
		ati._prefix = String.empty();
		ati._namespaceURI = String.empty();
		this.incrementAttributeValueToken();
		var vti = this._attributeValueTokens[this._currentAttributeValue];
		this.setTokenProperties(vti, $.ig.XmlNodeType.prototype.text, String.empty(), String.empty(), String.empty(), false, value, false);
		ati.value(value);
		this._attributeCount++;
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextReader::AddAttributeWithValue(System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextReader::IncrementAttributeToken()" />*/
	incrementAttributeToken: function () {
		this._currentAttribute++;
		if (this._attributeTokens.length == this._currentAttribute) {
			var newArray = new Array(this._attributeTokens.length * 2);
			$.ig.util.arrayCopyTo(this._attributeTokens, newArray, 0);
			this._attributeTokens = newArray;
		}
		if (this._attributeTokens[this._currentAttribute] == null) {
			this._attributeTokens[this._currentAttribute] = new $.ig.XmlTextReader_XmlAttributeTokenInfo(this);
		}
		this._currentAttributeToken = this._attributeTokens[this._currentAttribute];
		this._currentAttributeToken.clear();
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextReader::IncrementAttributeToken()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextReader::IncrementAttributeValueToken()" />*/
	incrementAttributeValueToken: function () {
		this._currentAttributeValue++;
		if (this._attributeValueTokens.length == this._currentAttributeValue) {
			var newArray = new Array(this._attributeValueTokens.length * 2);
			$.ig.util.arrayCopyTo(this._attributeValueTokens, newArray, 0);
			this._attributeValueTokens = newArray;
		}
		if (this._attributeValueTokens[this._currentAttributeValue] == null) {
			this._attributeValueTokens[this._currentAttributeValue] = new $.ig.XmlTextReader_XmlTokenInfo(this);
		}
		this._currentAttributeValueToken = this._attributeValueTokens[this._currentAttributeValue];
		this._currentAttributeValueToken.clear();
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextReader::IncrementAttributeValueToken()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextReader::ReadAttributeValueTokens(System.Int32)" />*/
	readAttributeValueTokens: function (dummyQuoteChar) {
		var quoteChar = (dummyQuoteChar < 0) ? this.readChar() : dummyQuoteChar;
		if (quoteChar != '\''.charCodeAt(0) && quoteChar != '\"'.charCodeAt(0)) {
			throw this.notWFError("an attribute value was not quoted");
		}
		this._currentAttributeToken._quoteChar = String.fromCharCode(quoteChar);
		this.incrementAttributeValueToken();
		this._currentAttributeToken._valueTokenStartIndex = this._currentAttributeValue;
		this._currentAttributeValueToken._lineNumber = this._line;
		this._currentAttributeValueToken._linePosition = this._column;
		var incrementToken = false;
		var isNewToken = true;
		var loop = true;
		var ch = 0;
		this._currentAttributeValueToken._valueBufferStart = this._valueBuffer.length();
		L0: while (loop) {
			ch = this.readChar();
			if (ch == quoteChar) {
				break;
			}
			if (incrementToken) {
				this.incrementAttributeValueToken();
				this._currentAttributeValueToken._valueBufferStart = this._valueBuffer.length();
				this._currentAttributeValueToken._lineNumber = this._line;
				this._currentAttributeValueToken._linePosition = this._column;
				incrementToken = false;
				isNewToken = true;
			}
			var t1 = ch;
			L1: while (true) {
				switch (t1) {
					case '<'.charCodeAt(0): throw this.notWFError("attribute values cannot contain '<'");
					case -1:
						if (dummyQuoteChar < 0) {
							throw this.notWFError("unexpected end of file in an attribute value");
						} else {
							loop = false;
						}
						break;
					case '\r'.charCodeAt(0):
						if (!this._normalization) {
							t1 = void 0;
							continue L1;
						}
						if (this.peekChar() == '\n'.charCodeAt(0)) {
							continue L0;
						}
						if (!this._normalization) {
							t1 = void 0;
							continue L1;
						}
						ch = ' '.charCodeAt(0);
						t1 = void 0;
						continue L1;
					case '\n'.charCodeAt(0):
					case '\t'.charCodeAt(0):
						if (!this._normalization) {
							t1 = void 0;
							continue L1;
						}
						ch = ' '.charCodeAt(0);
						t1 = void 0;
						continue L1;
					case '&'.charCodeAt(0):
						if (this.peekChar() == '#'.charCodeAt(0)) {
							this.advance('#'.charCodeAt(0));
							ch = this.readCharacterReference();
							this.appendValueChar(ch);
							break;
						}
						var entName = this.readName();
						this.expect(';'.charCodeAt(0));
						var predefined = $.ig.XmlChar.prototype.getPredefinedEntity(entName);
						if (predefined < 0) {
							{
								this._currentAttributeValueToken._valueBufferEnd = this._valueBuffer.length();
								this._currentAttributeValueToken._nodeType = $.ig.XmlNodeType.prototype.text;
								if (!isNewToken) {
									this.incrementAttributeValueToken();
								}
								this._currentAttributeValueToken._name = entName;
								this._currentAttributeValueToken.value(String.empty());
								this._currentAttributeValueToken._nodeType = $.ig.XmlNodeType.prototype.entityReference;
								incrementToken = true;
							}
						} else {
							this.appendValueChar(predefined);
						}
						break;
					default:
						if (this.characterChecking() && $.ig.XmlChar.prototype.isInvalid(ch)) {
							throw this.notWFError("Invalid character was found.");
						}
						{
							if (ch <= $.ig.String.prototype.charMaxValue().charCodeAt(0)) {
								this._valueBuffer.append1(String.fromCharCode(ch));
							} else {
								this.appendSurrogatePairValueChar(ch);
							}
						}
						break;
				}
				break;
			}
			isNewToken = false;
		}
		if (!incrementToken) {
			this._currentAttributeValueToken._valueBufferEnd = this._valueBuffer.length();
			this._currentAttributeValueToken._nodeType = $.ig.XmlNodeType.prototype.text;
		}
		this._currentAttributeToken._valueTokenEndIndex = this._currentAttributeValue;
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextReader::ReadAttributeValueTokens(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextReader::ReadProcessingInstruction()" />*/
	readProcessingInstruction: function () {
		var target = this.readName();
		if (target != "xml" && target.toLocaleLowerCase($.ig.CultureInfo.prototype.invariantCulture()) == "xml") {
			throw this.notWFError("Not allowed processing instruction name which starts with 'X', 'M', 'L' was found.");
		}
		if (!this.skipWhitespace()) {
			if (this.peekChar() != '?'.charCodeAt(0)) {
				throw this.notWFError("Invalid processing instruction name was found.");
			}
		}
		this.clearValueBuffer();
		var ch;
		while ((ch = this.peekChar()) != -1) {
			this.advance(ch);
			if (ch == '?'.charCodeAt(0) && this.peekChar() == '>'.charCodeAt(0)) {
				this.advance('>'.charCodeAt(0));
				break;
			}
			if (this.characterChecking() && $.ig.XmlChar.prototype.isInvalid(ch)) {
				throw this.notWFError("Invalid character was found.");
			}
			this.appendValueChar(ch);
		}
		if ($.ig.Object.prototype.referenceEquals(target, $.ig.XmlNamespaceManager.prototype.prefixXml)) {
			this.verifyXmlDeclaration();
		} else {
			if (this._currentState == $.ig.XmlNodeType.prototype.none) {
				this._currentState = $.ig.XmlNodeType.prototype.xmlDeclaration;
			}
			this.setProperties($.ig.XmlNodeType.prototype.processingInstruction, target, String.empty(), target, false, null, true);
		}
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextReader::ReadProcessingInstruction()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextReader::VerifyXmlDeclaration()" />*/
	verifyXmlDeclaration: function () {
		var $self = this;
		if (!this._allowMultipleRoot && this._currentState != $.ig.XmlNodeType.prototype.none) {
			throw this.notWFError("XML declaration cannot appear in this state.");
		}
		this._currentState = $.ig.XmlNodeType.prototype.xmlDeclaration;
		var text = this.createValueString();
		this.clearAttributes();
		var idx = 0;
		var encoding = null, standalone = null;
		var name, value;
		var $ret = this.parseAttributeFromString(text, idx, name, value);
		idx = $ret.p1;
		name = $ret.p2;
		value = $ret.p3;
		if (name != "version" || value != "1.0") {
			throw this.notWFError("'version' is expected.");
		}
		name = String.empty();
		if ((function () { var $ret = $self.skipWhitespaceInString(text, idx); idx = $ret.p1; return $ret.ret; }()) && idx < text.length) {
			var $ret1 = this.parseAttributeFromString(text, idx, name, value);
			idx = $ret1.p1;
			name = $ret1.p2;
			value = $ret1.p3;
		}
		if (name == "encoding") {
			if (!$.ig.XmlChar.prototype.isValidIANAEncoding(value)) {
				throw this.notWFError("'encoding' must be a valid IANA encoding name.");
			}
			if ($.ig.util.cast($.ig.XmlStreamReader.prototype.$type, this._reader) !== null) {
				this._parserContext.encoding((this._reader).encoding());
			} else {
				if (this._parserContext.encoding() == null && $.ig.util.stringCompare1(value, "UTF-8", $.ig.StringComparison.prototype.invariantCulture) == 0) {
					this._parserContext.encoding($.ig.Encoding.prototype.uTF8());
				} else {
					this._parserContext.encoding($.ig.Encoding.prototype.unicode());
				}
			}
			encoding = value;
			name = String.empty();
			if ((function () { var $ret = $self.skipWhitespaceInString(text, idx); idx = $ret.p1; return $ret.ret; }()) && idx < text.length) {
				var $ret2 = this.parseAttributeFromString(text, idx, name, value);
				idx = $ret2.p1;
				name = $ret2.p2;
				value = $ret2.p3;
			}
		}
		if (name == "standalone") {
			this._isStandalone = value == "yes";
			if (value != "yes" && value != "no") {
				throw this.notWFError("Only 'yes' or 'no' is allow for 'standalone'");
			}
			standalone = value;
			var $ret3 = this.skipWhitespaceInString(text, idx);
			idx = $ret3.p1;
		} else if (name.length != 0) {
			throw this.notWFError($.ig.util.stringFormat("Unexpected token: '{0}'", name));
		}
		if (idx < text.length) {
			throw this.notWFError("'?' is expected.");
		}
		this.addAttributeWithValue("version", "1.0");
		if (encoding != null) {
			this.addAttributeWithValue("encoding", encoding);
		}
		if (standalone != null) {
			this.addAttributeWithValue("standalone", standalone);
		}
		this._currentAttribute = this._currentAttributeValue = -1;
		this.setProperties($.ig.XmlNodeType.prototype.xmlDeclaration, "xml", String.empty(), "xml", false, text, false);
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextReader::VerifyXmlDeclaration()" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Xml.XmlTextReader::SkipWhitespaceInString(System.String, System.Int32)" />*/
	skipWhitespaceInString: function (text, idx) {
		var start = idx;
		while (idx < text.length && $.ig.XmlChar.prototype.isWhitespace(text.charAt(idx).charCodeAt(0))) {
			idx++;
		}
		return {
			ret: idx - start > 0,
			p1: idx
		};
	}
	/*<EndMethod Name="System.Boolean System.Xml.XmlTextReader::SkipWhitespaceInString(System.String, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextReader::ParseAttributeFromString(System.String, System.Int32, System.String, System.String)" />*/
	parseAttributeFromString: function (src, idx, name, value) {
		while (idx < src.length && $.ig.XmlChar.prototype.isWhitespace(src.charAt(idx).charCodeAt(0))) {
			idx++;
		}
		var start = idx;
		while (idx < src.length && $.ig.XmlChar.prototype.isNameChar(src.charAt(idx).charCodeAt(0))) {
			idx++;
		}
		name = src.substr(start, idx - start);
		while (idx < src.length && $.ig.XmlChar.prototype.isWhitespace(src.charAt(idx).charCodeAt(0))) {
			idx++;
		}
		if (idx == src.length || src.charAt(idx) != '=') {
			throw this.notWFError($.ig.util.stringFormat("'=' is expected after {0}", name));
		}
		idx++;
		while (idx < src.length && $.ig.XmlChar.prototype.isWhitespace(src.charAt(idx).charCodeAt(0))) {
			idx++;
		}
		if (idx == src.length || src.charAt(idx) != '\"' && src.charAt(idx) != '\'') {
			throw this.notWFError("'\"' or ''' is expected.");
		}
		var quote = src.charAt(idx);
		idx++;
		start = idx;
		while (idx < src.length && src.charAt(idx) != quote) {
			idx++;
		}
		idx++;
		value = src.substr(start, idx - start - 1);
		return {
			p1: idx,
			p2: name,
			p3: value
		};
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextReader::ParseAttributeFromString(System.String, System.Int32, System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextReader::SkipTextDeclaration()" />*/
	skipTextDeclaration: function () {
		if (this.peekChar() != '<'.charCodeAt(0)) {
			return;
		}
		this.readChar();
		if (this.peekChar() != '?'.charCodeAt(0)) {
			this._peekCharsIndex = 0;
			return;
		}
		this.readChar();
		while (this._peekCharsIndex < 6) {
			if (this.peekChar() < 0) {
				break;
			} else {
				this.readChar();
			}
		}
		if ($.ig.util.createString3(this._peekChars, 2, 4) != "xml ") {
			if ($.ig.util.createString3(this._peekChars, 2, 4).toLocaleLowerCase($.ig.CultureInfo.prototype.invariantCulture()) == "xml ") {
				throw this.notWFError("Processing instruction name must not be character sequence 'X' 'M' 'L' with case insensitivity.");
			}
			this._peekCharsIndex = 0;
			return;
		}
		this.skipWhitespace();
		if (this.peekChar() == 'v'.charCodeAt(0)) {
			this.expect1("version");
			this.expectAfterWhitespace('=');
			this.skipWhitespace();
			var quoteChar = this.readChar();
			var expect1_0 = new Array(3);
			var versionLength = 0;
			switch (quoteChar) {
				case '\''.charCodeAt(0):
				case '\"'.charCodeAt(0):
					while (this.peekChar() != quoteChar) {
						if (this.peekChar() == -1) {
							throw this.notWFError("Invalid version declaration inside text declaration.");
						} else if (versionLength == 3) {
							throw this.notWFError("Invalid version number inside text declaration.");
						} else {
							expect1_0[versionLength] = String.fromCharCode(this.readChar());
							versionLength++;
							if (versionLength == 3 && $.ig.util.createString1(expect1_0) != "1.0") {
								throw this.notWFError("Invalid version number inside text declaration.");
							}
						}
					}
					this.readChar();
					this.skipWhitespace();
					break;
				default: throw this.notWFError("Invalid version declaration inside text declaration.");
			}
		}
		if (this.peekChar() == 'e'.charCodeAt(0)) {
			this.expect1("encoding");
			this.expectAfterWhitespace('=');
			this.skipWhitespace();
			var quoteChar1 = this.readChar();
			switch (quoteChar1) {
				case '\''.charCodeAt(0):
				case '\"'.charCodeAt(0):
					while (this.peekChar() != quoteChar1) {
						if (this.readChar() == -1) {
							throw this.notWFError("Invalid encoding declaration inside text declaration.");
						}
					}
					this.readChar();
					this.skipWhitespace();
					break;
				default: throw this.notWFError("Invalid encoding declaration inside text declaration.");
			}
		}
		this.expect1("?>");
		this._curNodePeekIndex = this._peekCharsIndex;
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextReader::SkipTextDeclaration()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextReader::ReadDeclaration()" />*/
	readDeclaration: function () {
		var ch = this.peekChar();
		switch (ch) {
			case '-'.charCodeAt(0):
				this.expect1("--");
				this.readComment();
				break;
			case '['.charCodeAt(0):
				this.readChar();
				this.expect1("CDATA[");
				this.readCDATA();
				break;
			case 'D'.charCodeAt(0):
				this.expect1("DOCTYPE");
				this.readDoctypeDecl();
				break;
			default: throw this.notWFError("Unexpected declaration markup was found.");
		}
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextReader::ReadDeclaration()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextReader::ReadComment()" />*/
	readComment: function () {
		if (this._currentState == $.ig.XmlNodeType.prototype.none) {
			this._currentState = $.ig.XmlNodeType.prototype.xmlDeclaration;
		}
		this._preserveCurrentTag = false;
		this.clearValueBuffer();
		var ch;
		while ((ch = this.peekChar()) != -1) {
			this.advance(ch);
			if (ch == '-'.charCodeAt(0) && this.peekChar() == '-'.charCodeAt(0)) {
				this.advance('-'.charCodeAt(0));
				if (this.peekChar() != '>'.charCodeAt(0)) {
					throw this.notWFError("comments cannot contain '--'");
				}
				this.advance('>'.charCodeAt(0));
				break;
			}
			if ($.ig.XmlChar.prototype.isInvalid(ch)) {
				throw this.notWFError("Not allowed character was found.");
			}
			this.appendValueChar(ch);
		}
		this.setProperties($.ig.XmlNodeType.prototype.comment, String.empty(), String.empty(), String.empty(), false, null, true);
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextReader::ReadComment()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextReader::ReadCDATA()" />*/
	readCDATA: function () {
		if (this._currentState != $.ig.XmlNodeType.prototype.element) {
			throw this.notWFError("CDATA section cannot appear in this state.");
		}
		this._preserveCurrentTag = false;
		this.clearValueBuffer();
		var skip = false;
		var ch = 0;
		while (this.peekChar() != -1) {
			if (!skip) {
				ch = this.readChar();
			}
			skip = false;
			if (ch == ']'.charCodeAt(0) && this.peekChar() == ']'.charCodeAt(0)) {
				ch = this.readChar();
				if (this.peekChar() == '>'.charCodeAt(0)) {
					this.readChar();
					break;
				} else {
					skip = true;
				}
			}
			if (this._normalization && ch == '\r'.charCodeAt(0)) {
				ch = this.peekChar();
				if (ch != '\n'.charCodeAt(0)) {
					this.appendValueChar('\n'.charCodeAt(0));
				}
				continue;
			}
			if (this.characterChecking() && $.ig.XmlChar.prototype.isInvalid(ch)) {
				throw this.notWFError("Invalid character was found.");
			}
			{
				if (ch <= $.ig.String.prototype.charMaxValue().charCodeAt(0)) {
					this._valueBuffer.append1(String.fromCharCode(ch));
				} else {
					this.appendSurrogatePairValueChar(ch);
				}
			}
		}
		this.setProperties($.ig.XmlNodeType.prototype.cDATA, String.empty(), String.empty(), String.empty(), false, null, true);
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextReader::ReadCDATA()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextReader::ReadDoctypeDecl()" />*/
	readDoctypeDecl: function () {
		if (this._prohibitDtd) {
			throw this.notWFError("Document Type Declaration (DTD) is prohibited in this XML.");
		}
		switch (this._currentState) {
			case $.ig.XmlNodeType.prototype.documentType:
			case $.ig.XmlNodeType.prototype.element:
			case $.ig.XmlNodeType.prototype.endElement:
				throw this.notWFError("Document type cannot appear in this state.");
		}
		this._currentState = $.ig.XmlNodeType.prototype.documentType;
		var doctypeName = null;
		var publicId = null;
		var systemId = null;
		var intSubsetStartLine = 0;
		var intSubsetStartColumn = 0;
		this.skipWhitespace();
		doctypeName = this.readName();
		this.skipWhitespace();
		switch (this.peekChar()) {
			case 'S'.charCodeAt(0):
				systemId = this.readSystemLiteral(true);
				break;
			case 'P'.charCodeAt(0):
				publicId = this.readPubidLiteral();
				if (!this.skipWhitespace()) {
					throw this.notWFError("Whitespace is required between PUBLIC id and SYSTEM id.");
				}
				systemId = this.readSystemLiteral(false);
				break;
		}
		this.skipWhitespace();
		if (this.peekChar() == '['.charCodeAt(0)) {
			this.readChar();
			intSubsetStartLine = this.lineNumber();
			intSubsetStartColumn = this.linePosition();
			this.clearValueBuffer();
			this.readInternalSubset();
			this._parserContext.internalSubset(this.createValueString());
		}
		this.expectAfterWhitespace('>');
		this.setProperties($.ig.XmlNodeType.prototype.documentType, doctypeName, String.empty(), doctypeName, false, this._parserContext.internalSubset(), true);
		if (publicId != null) {
			this.addAttributeWithValue("PUBLIC", publicId);
		}
		if (systemId != null) {
			this.addAttributeWithValue("SYSTEM", systemId);
		}
		this._currentAttribute = this._currentAttributeValue = -1;
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextReader::ReadDoctypeDecl()" />*/
	,
	/*<BeginMethod Name="System.Xml.DTDObjectModel System.Xml.XmlTextReader::GenerateDTDObjectModel(System.String, System.String, System.String, System.String)" />*/
	generateDTDObjectModel: function (docTypeName, pubId, sysId, internalSubset) {
		return new $.ig.DTDObjectModel();
	}
	/*<EndMethod Name="System.Xml.DTDObjectModel System.Xml.XmlTextReader::GenerateDTDObjectModel(System.String, System.String, System.String, System.String)" />*/
	,
	_stateStack: null,
	/*<BeginProperty Name="System.Xml.XmlTextReader_DtdInputState System.Xml.XmlTextReader::State()" />*/
	state: function () {
		return this._stateStack.peek();
	}
	/*<EndProperty Name="System.Xml.XmlTextReader_DtdInputState System.Xml.XmlTextReader::State()" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Xml.XmlTextReader::ReadValueChar()" />*/
	readValueChar: function () {
		var ret = this.readChar();
		this.appendValueChar(ret);
		return ret;
	}
	/*<EndMethod Name="System.Int32 System.Xml.XmlTextReader::ReadValueChar()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextReader::ExpectAndAppend(System.String)" />*/
	expectAndAppend: function (s) {
		this.expect1(s);
		this._valueBuffer.append5(s);
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextReader::ExpectAndAppend(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextReader::ReadInternalSubset()" />*/
	readInternalSubset: function () {
		var continueParse = true;
		L0: while (continueParse) {
			switch (this.readValueChar()) {
				case ']'.charCodeAt(0):
					switch (this.state()) {
						case $.ig.XmlTextReader_DtdInputState.prototype.free:
							this._valueBuffer.remove(this._valueBuffer.length() - 1, 1);
							continueParse = false;
							break;
						case $.ig.XmlTextReader_DtdInputState.prototype.insideDoubleQuoted:
						case $.ig.XmlTextReader_DtdInputState.prototype.insideSingleQuoted:
						case $.ig.XmlTextReader_DtdInputState.prototype.comment:
							continue L0;
						default: throw this.notWFError("unexpected end of file at DTD.");
					}
					break;
				case -1: throw this.notWFError("unexpected end of file at DTD.");
				case '<'.charCodeAt(0):
					switch (this.state()) {
						case $.ig.XmlTextReader_DtdInputState.prototype.insideDoubleQuoted:
						case $.ig.XmlTextReader_DtdInputState.prototype.insideSingleQuoted:
						case $.ig.XmlTextReader_DtdInputState.prototype.comment:
							continue L0;
					}
					var c = this.readValueChar();
					switch (c) {
						case '?'.charCodeAt(0):
							this._stateStack.push($.ig.XmlTextReader_DtdInputState.prototype.pI);
							break;
						case '!'.charCodeAt(0):
							switch (this.readValueChar()) {
								case 'E'.charCodeAt(0):
									switch (this.readValueChar()) {
										case 'L'.charCodeAt(0):
											this.expectAndAppend("EMENT");
											this._stateStack.push($.ig.XmlTextReader_DtdInputState.prototype.elementDecl);
											break;
										case 'N'.charCodeAt(0):
											this.expectAndAppend("TITY");
											this._stateStack.push($.ig.XmlTextReader_DtdInputState.prototype.entityDecl);
											break;
										default: throw this.notWFError("unexpected token '<!E'.");
									}
									break;
								case 'A'.charCodeAt(0):
									this.expectAndAppend("TTLIST");
									this._stateStack.push($.ig.XmlTextReader_DtdInputState.prototype.attlistDecl);
									break;
								case 'N'.charCodeAt(0):
									this.expectAndAppend("OTATION");
									this._stateStack.push($.ig.XmlTextReader_DtdInputState.prototype.notationDecl);
									break;
								case '-'.charCodeAt(0):
									this.expectAndAppend("-");
									this._stateStack.push($.ig.XmlTextReader_DtdInputState.prototype.comment);
									break;
							}
							break;
						default: throw this.notWFError($.ig.util.stringFormat("unexpected '<{0}'.", String.fromCharCode(c)));
					}
					break;
				case '\''.charCodeAt(0):
					if (this.state() == $.ig.XmlTextReader_DtdInputState.prototype.insideSingleQuoted) {
						this._stateStack.pop();
					} else if (this.state() != $.ig.XmlTextReader_DtdInputState.prototype.insideDoubleQuoted && this.state() != $.ig.XmlTextReader_DtdInputState.prototype.comment) {
						this._stateStack.push($.ig.XmlTextReader_DtdInputState.prototype.insideSingleQuoted);
					}
					break;
				case '\"'.charCodeAt(0):
					if (this.state() == $.ig.XmlTextReader_DtdInputState.prototype.insideDoubleQuoted) {
						this._stateStack.pop();
					} else if (this.state() != $.ig.XmlTextReader_DtdInputState.prototype.insideSingleQuoted && this.state() != $.ig.XmlTextReader_DtdInputState.prototype.comment) {
						this._stateStack.push($.ig.XmlTextReader_DtdInputState.prototype.insideDoubleQuoted);
					}
					break;
				case '>'.charCodeAt(0):
					var t1 = this.state();
					L1: while (true) {
						switch (t1) {
							case $.ig.XmlTextReader_DtdInputState.prototype.elementDecl:
								t1 = $.ig.XmlTextReader_DtdInputState.prototype.notationDecl;
								continue L1;
							case $.ig.XmlTextReader_DtdInputState.prototype.attlistDecl:
								t1 = $.ig.XmlTextReader_DtdInputState.prototype.notationDecl;
								continue L1;
							case $.ig.XmlTextReader_DtdInputState.prototype.entityDecl:
								t1 = $.ig.XmlTextReader_DtdInputState.prototype.notationDecl;
								continue L1;
							case $.ig.XmlTextReader_DtdInputState.prototype.notationDecl:
								this._stateStack.pop();
								break;
							case $.ig.XmlTextReader_DtdInputState.prototype.insideDoubleQuoted:
							case $.ig.XmlTextReader_DtdInputState.prototype.insideSingleQuoted:
							case $.ig.XmlTextReader_DtdInputState.prototype.comment:
								continue L0;
							default: throw this.notWFError("unexpected token '>'");
						}
						break;
					}
					break;
				case '?'.charCodeAt(0):
					if (this.state() == $.ig.XmlTextReader_DtdInputState.prototype.pI) {
						if (this.readValueChar() == '>'.charCodeAt(0)) {
							this._stateStack.pop();
						}
					}
					break;
				case '-'.charCodeAt(0):
					if (this.state() == $.ig.XmlTextReader_DtdInputState.prototype.comment) {
						if (this.peekChar() == '-'.charCodeAt(0)) {
							this.readValueChar();
							this.expectAndAppend(">");
							this._stateStack.pop();
						}
					}
					break;
				case '%'.charCodeAt(0):
					if (this.state() != $.ig.XmlTextReader_DtdInputState.prototype.free && this.state() != $.ig.XmlTextReader_DtdInputState.prototype.entityDecl && this.state() != $.ig.XmlTextReader_DtdInputState.prototype.comment && this.state() != $.ig.XmlTextReader_DtdInputState.prototype.insideDoubleQuoted && this.state() != $.ig.XmlTextReader_DtdInputState.prototype.insideSingleQuoted) {
						throw this.notWFError("Parameter Entity Reference cannot appear as a part of markupdecl (see XML spec 2.8).");
					}
					break;
			}
		}
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextReader::ReadInternalSubset()" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlTextReader::ReadSystemLiteral(System.Boolean)" />*/
	readSystemLiteral: function (expectSYSTEM) {
		if (expectSYSTEM) {
			this.expect1("SYSTEM");
			if (!this.skipWhitespace()) {
				throw this.notWFError("Whitespace is required after 'SYSTEM'.");
			}
		} else {
			this.skipWhitespace();
		}
		var quoteChar = this.readChar();
		var c = 0;
		this.clearValueBuffer();
		while (c != quoteChar) {
			c = this.readChar();
			if (c < 0) {
				throw this.notWFError("Unexpected end of stream in ExternalID.");
			}
			if (c != quoteChar) {
				this.appendValueChar(c);
			}
		}
		return this.createValueString();
	}
	/*<EndMethod Name="System.String System.Xml.XmlTextReader::ReadSystemLiteral(System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlTextReader::ReadPubidLiteral()" />*/
	readPubidLiteral: function () {
		this.expect1("PUBLIC");
		if (!this.skipWhitespace()) {
			throw this.notWFError("Whitespace is required after 'PUBLIC'.");
		}
		var quoteChar = this.readChar();
		var c = 0;
		this.clearValueBuffer();
		while (c != quoteChar) {
			c = this.readChar();
			if (c < 0) {
				throw this.notWFError("Unexpected end of stream in ExternalID.");
			}
			if (c != quoteChar && !$.ig.XmlChar.prototype.isPubidChar(c)) {
				throw this.notWFError($.ig.util.stringFormat("character '{0}' not allowed for PUBLIC ID", String.fromCharCode(c)));
			}
			if (c != quoteChar) {
				this.appendValueChar(c);
			}
		}
		return this.createValueString();
	}
	/*<EndMethod Name="System.String System.Xml.XmlTextReader::ReadPubidLiteral()" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlTextReader::ReadName()" />*/
	readName: function () {
		var $self = this;
		var prefix, local;
		return (function () { var $ret = $self.readName1(prefix, local); prefix = $ret.p0; local = $ret.p1; return $ret.ret; }());
	}
	/*<EndMethod Name="System.String System.Xml.XmlTextReader::ReadName()" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlTextReader::ReadName(System.String, System.String)" />*/
	readName1: function (prefix, localName) {
		var savePreserve = this._preserveCurrentTag;
		this._preserveCurrentTag = true;
		var startOffset = this._peekCharsIndex - this._curNodePeekIndex;
		var ch = this.peekChar();
		if (!$.ig.XmlChar.prototype.isFirstNameChar(ch)) {
			throw this.notWFError($.ig.util.stringFormat2($.ig.CultureInfo.prototype.invariantCulture(), "a name did not start with a legal character {0} ({1})", [ ch, String.fromCharCode(ch) ]));
		}
		this.advance(ch);
		var length = 1;
		var colonAt = -1;
		while ($.ig.XmlChar.prototype.isNameChar((ch = this.peekChar()))) {
			this.advance(ch);
			if (ch == ':'.charCodeAt(0) && this._namespaces && colonAt < 0) {
				colonAt = length;
			}
			length++;
		}
		var start = this._curNodePeekIndex + startOffset;
		var name = this.nameTable().add(this._peekChars, start, length);
		if (colonAt > 0) {
			prefix = this.nameTable().add(this._peekChars, start, colonAt);
			localName = this.nameTable().add(this._peekChars, start + colonAt + 1, length - colonAt - 1);
		} else {
			prefix = String.empty();
			localName = name;
		}
		this._preserveCurrentTag = savePreserve;
		return {
			ret: name,
			p0: prefix,
			p1: localName
		};
	}
	/*<EndMethod Name="System.String System.Xml.XmlTextReader::ReadName(System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextReader::Expect(System.Int32)" />*/
	expect: function (expected) {
		var ch = this.readChar();
		if (ch != expected) {
			throw this.notWFError($.ig.util.stringFormat2($.ig.CultureInfo.prototype.invariantCulture(), "expected '{0}' ({1:X}) but found '{2}' ({3:X})", [ String.fromCharCode(expected), expected, ch < 0 ? "EOF" : String.fromCharCode(ch), ch ]));
		}
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextReader::Expect(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextReader::Expect(System.String)" />*/
	expect1: function (expected) {
		for (var i = 0; i < expected.length; i++) {
			if (this.readChar() != expected.charAt(i).charCodeAt(0)) {
				throw this.notWFError($.ig.util.stringFormat2($.ig.CultureInfo.prototype.invariantCulture(), "'{0}' is expected", [ expected ]));
			}
		}
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextReader::Expect(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextReader::ExpectAfterWhitespace(System.Char)" />*/
	expectAfterWhitespace: function (c) {
		while (true) {
			var i = this.readChar();
			if (i < 33 && $.ig.XmlChar.prototype.isWhitespace(i)) {
				continue;
			}
			if (c.charCodeAt(0) != i) {
				throw this.notWFError($.ig.util.stringFormat2($.ig.CultureInfo.prototype.invariantCulture(), "Expected {0}, but found {1} [{2}]", [ c, i < 0 ? "EOF" : String.fromCharCode(i), i ]));
			}
			break;
		}
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextReader::ExpectAfterWhitespace(System.Char)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Xml.XmlTextReader::SkipWhitespace()" />*/
	skipWhitespace: function () {
		var ch = this.peekChar();
		var skipped = (ch == 32 || ch == 9 || ch == 10 || ch == 13);
		if (!skipped) {
			return false;
		}
		this.advance(ch);
		while ((ch = this.peekChar()) == 32 || ch == 9 || ch == 10 || ch == 13) {
			this.advance(ch);
		}
		return skipped;
	}
	/*<EndMethod Name="System.Boolean System.Xml.XmlTextReader::SkipWhitespace()" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Xml.XmlTextReader::ReadWhitespace()" />*/
	readWhitespace: function () {
		if (this._currentState == $.ig.XmlNodeType.prototype.none) {
			this._currentState = $.ig.XmlNodeType.prototype.xmlDeclaration;
		}
		var savePreserve = this._preserveCurrentTag;
		this._preserveCurrentTag = true;
		var startOffset = this._peekCharsIndex - this._curNodePeekIndex;
		var ch = this.peekChar();
		do {
			this.advance(ch);
			ch = this.peekChar();
		} while (ch == 32 || ch == 9 || ch == 10 || ch == 13);
		var isText = this._currentState == $.ig.XmlNodeType.prototype.element && ch != -1 && ch != '<'.charCodeAt(0);
		if (!isText && (this._whitespaceHandling == $.ig.WhitespaceHandling.prototype.none || this._whitespaceHandling == $.ig.WhitespaceHandling.prototype.significant && this.xmlSpace() != $.ig.XmlSpace.prototype.preserve)) {
			return false;
		}
		this.clearValueBuffer();
		this._valueBuffer.append(this._peekChars, this._curNodePeekIndex, this._peekCharsIndex - this._curNodePeekIndex - startOffset);
		this._preserveCurrentTag = savePreserve;
		if (isText) {
			this.readText(false);
		} else {
			var nodeType = (this.xmlSpace() == $.ig.XmlSpace.prototype.preserve) ? $.ig.XmlNodeType.prototype.significantWhitespace : $.ig.XmlNodeType.prototype.whitespace;
			this.setProperties(nodeType, String.empty(), String.empty(), String.empty(), false, null, true);
		}
		return true;
	}
	/*<EndMethod Name="System.Boolean System.Xml.XmlTextReader::ReadWhitespace()" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Xml.XmlTextReader::ReadCharsInternal(, System.Int32, System.Int32)" />*/
	readCharsInternal: function (buffer, offset, length) {
		var bufIndex = offset;
		for (var i = 0; i < length; i++) {
			var c = this.peekChar();
			switch (c) {
				case -1: throw this.notWFError("Unexpected end of xml.");
				case '<'.charCodeAt(0):
					if (i + 1 == length) {
						return i;
					}
					this.advance(c);
					if (this.peekChar() != '/'.charCodeAt(0)) {
						this._nestLevel++;
						buffer[bufIndex++] = '<';
						continue;
					} else if (this._nestLevel-- > 0) {
						buffer[bufIndex++] = '<';
						continue;
					}
					this.expect('/'.charCodeAt(0));
					if (this._depthUp) {
						this._depth++;
						this._depthUp = false;
					}
					this.readEndTag();
					this._readCharsInProgress = false;
					this.read();
					return i;
				default:
					this.advance(c);
					if (c <= $.ig.String.prototype.charMaxValue().charCodeAt(0)) {
						buffer[bufIndex++] = String.fromCharCode(c);
					} else {
						buffer[bufIndex++] = String.fromCharCode(($.ig.intDivide((c - 65536), 1024) + 55296));
						buffer[bufIndex++] = String.fromCharCode(((c - 65536) % 1024 + 56320));
					}
					break;
			}
		}
		return length;
	}
	/*<EndMethod Name="System.Int32 System.Xml.XmlTextReader::ReadCharsInternal(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Xml.XmlTextReader::ReadUntilEndTag()" />*/
	readUntilEndTag: function () {
		if (this.depth() == 0) {
			this._currentState = $.ig.XmlNodeType.prototype.endElement;
		}
		var ch;
		do {
			ch = this.readChar();
			switch (ch) {
				case -1: throw this.notWFError("Unexpected end of xml.");
				case '<'.charCodeAt(0):
					if (this.peekChar() != '/'.charCodeAt(0)) {
						this._nestLevel++;
						continue;
					} else if (--this._nestLevel > 0) {
						continue;
					}
					this.readChar();
					var name = this.readName();
					if (name != this._elementNames[this._elementNameStackPos - 1]._name) {
						continue;
					}
					this.expect('>'.charCodeAt(0));
					this._depth--;
					return this.read();
			}
		} while (true);
	}
	/*<EndMethod Name="System.Boolean System.Xml.XmlTextReader::ReadUntilEndTag()" />*/
	,
	$type: new $.ig.Type('XmlTextReader', $.ig.XmlReader.prototype.$type)
}, true);

/*<EndType Name="System.Xml.XmlTextReader" />*/

/*<BeginType Name="System.Xml.XmlTextReader_XmlTokenInfo" />*/

$.ig.util.defType('XmlTextReader_XmlTokenInfo', 'Object', {
	init: function (xtr) {
		$.ig.Object.prototype.init.call(this);
		this._reader = xtr;
		this.clear();
	},
	_valueCache: null,
	_reader: null,
	_name: null,
	_localName: null,
	_prefix: null,
	_namespaceURI: null,
	_isEmptyElement: false,
	_quoteChar: '\0',
	_lineNumber: 0,
	_linePosition: 0,
	_valueBufferStart: 0,
	_valueBufferEnd: 0,
	_nodeType: 0,
	/*<BeginProperty Name="System.String System.Xml.XmlTextReader_XmlTokenInfo::Value()" />*/
	value: function (value) {
		if (arguments.length === 1) {
			this._valueCache = value;
			return value;
		} else {
			if (this._valueCache == null) {
				if (this._valueBufferStart >= 0) {
					this._valueCache = this._reader._valueBuffer.toString1(this._valueBufferStart, this._valueBufferEnd - this._valueBufferStart);
				} else {
					switch (this._nodeType) {
						case $.ig.XmlNodeType.prototype.text:
						case $.ig.XmlNodeType.prototype.significantWhitespace:
						case $.ig.XmlNodeType.prototype.whitespace:
						case $.ig.XmlNodeType.prototype.comment:
						case $.ig.XmlNodeType.prototype.cDATA:
						case $.ig.XmlNodeType.prototype.processingInstruction:
							this._valueCache = this._reader.createValueString();
							break;
					}
				}
			}
			return this._valueCache;
		}
	}
	/*<EndProperty Name="System.String System.Xml.XmlTextReader_XmlTokenInfo::Value()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextReader_XmlTokenInfo::Clear()" />*/
	clear: function () {
		this._valueBufferStart = -1;
		this._valueCache = null;
		this._nodeType = $.ig.XmlNodeType.prototype.none;
		this._name = this._localName = this._prefix = this._namespaceURI = String.empty();
		this._isEmptyElement = false;
		this._quoteChar = '\"';
		this._lineNumber = this._linePosition = 0;
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextReader_XmlTokenInfo::Clear()" />*/
	,
	$type: new $.ig.Type('XmlTextReader_XmlTokenInfo', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.Xml.XmlTextReader_XmlTokenInfo" />*/

/*<BeginType Name="System.Xml.XmlTextReader_XmlAttributeTokenInfo" />*/

$.ig.util.defType('XmlTextReader_XmlAttributeTokenInfo', 'XmlTextReader_XmlTokenInfo', {
	init: function (reader) {
		this._tmpBuilder = new $.ig.StringBuilder(0);
		$.ig.XmlTextReader_XmlTokenInfo.prototype.init.call(this, reader);
		this._nodeType = $.ig.XmlNodeType.prototype.attribute;
	},
	_valueTokenStartIndex: 0,
	_valueTokenEndIndex: 0,
	_valueCache: null,
	_tmpBuilder: null,
	/*<BeginProperty Name="System.String System.Xml.XmlTextReader_XmlAttributeTokenInfo::Value()" />*/
	value: function (value) {
		if (arguments.length === 1) {
			this._valueCache = value;
			return value;
		} else {
			if (this._valueCache != null) {
				return this._valueCache;
			}
			if (this._valueTokenStartIndex == this._valueTokenEndIndex) {
				var ti = this._reader._attributeValueTokens[this._valueTokenStartIndex];
				if (ti._nodeType == $.ig.XmlNodeType.prototype.entityReference) {
					this._valueCache = String.concat("&", ti._name, ";");
				} else {
					this._valueCache = ti.value();
				}
				return this._valueCache;
			}
			this._tmpBuilder.length(0);
			for (var i = this._valueTokenStartIndex; i <= this._valueTokenEndIndex; i++) {
				var ti1 = this._reader._attributeValueTokens[i];
				if (ti1._nodeType == $.ig.XmlNodeType.prototype.text) {
					this._tmpBuilder.append5(ti1.value());
				} else {
					this._tmpBuilder.append1('&');
					this._tmpBuilder.append5(ti1._name);
					this._tmpBuilder.append1(';');
				}
			}
			this._valueCache = this._tmpBuilder.toString1(0, this._tmpBuilder.length());
			return this._valueCache;
		}
	}
	/*<EndProperty Name="System.String System.Xml.XmlTextReader_XmlAttributeTokenInfo::Value()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextReader_XmlAttributeTokenInfo::Clear()" />*/
	clear: function () {
		$.ig.XmlTextReader_XmlTokenInfo.prototype.clear.call(this);
		this._valueCache = null;
		this._nodeType = $.ig.XmlNodeType.prototype.attribute;
		this._valueTokenStartIndex = this._valueTokenEndIndex = 0;
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextReader_XmlAttributeTokenInfo::Clear()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextReader_XmlAttributeTokenInfo::FillXmlns()" />*/
	fillXmlns: function () {
		if ($.ig.Object.prototype.referenceEquals(this._prefix, $.ig.XmlNamespaceManager.prototype.prefixXmlns)) {
			this._reader._nsmgr.addNamespace(this._localName, this.value());
		} else if ($.ig.Object.prototype.referenceEquals(this._name, $.ig.XmlNamespaceManager.prototype.prefixXmlns)) {
			this._reader._nsmgr.addNamespace(String.empty(), this.value());
		}
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextReader_XmlAttributeTokenInfo::FillXmlns()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextReader_XmlAttributeTokenInfo::FillNamespace()" />*/
	fillNamespace: function () {
		if ($.ig.Object.prototype.referenceEquals(this._prefix, $.ig.XmlNamespaceManager.prototype.prefixXmlns) || $.ig.Object.prototype.referenceEquals(this._name, $.ig.XmlNamespaceManager.prototype.prefixXmlns)) {
			this._namespaceURI = $.ig.XmlNamespaceManager.prototype.xmlnsXmlns;
		} else if (this._prefix.length == 0) {
			this._namespaceURI = String.empty();
		} else {
			this._namespaceURI = this._reader.lookupNamespace1(this._prefix, true);
		}
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextReader_XmlAttributeTokenInfo::FillNamespace()" />*/
	,
	$type: new $.ig.Type('XmlTextReader_XmlAttributeTokenInfo', $.ig.XmlTextReader_XmlTokenInfo.prototype.$type)
}, true);

/*<EndType Name="System.Xml.XmlTextReader_XmlAttributeTokenInfo" />*/

/*<BeginType Name="System.Xml.XmlTextReader_TagName" />*/

$.ig.util.defType('XmlTextReader_TagName', 'ValueType', {
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
	init1: function (initNumber, n, l, p) {
		$.ig.ValueType.prototype.init.call(this);
		this._name = n;
		this._localName = l;
		this._prefix = p;
	},
	_name: null,
	_localName: null,
	_prefix: null,
	$type: new $.ig.Type('XmlTextReader_TagName', $.ig.ValueType.prototype.$type)
}, true);

/*<EndType Name="System.Xml.XmlTextReader_TagName" />*/

/*<BeginType Name="System.Xml.XmlTextReader_DtdInputStateStack" />*/

$.ig.util.defType('XmlTextReader_DtdInputStateStack', 'Object', {
	_intern: null,
	init: function () {
		this._intern = new $.ig.Array();
		$.ig.Object.prototype.init.call(this);
		this.push($.ig.XmlTextReader_DtdInputState.prototype.free);
	},
	/*<BeginMethod Name="System.Xml.XmlTextReader_DtdInputState System.Xml.XmlTextReader_DtdInputStateStack::Peek()" />*/
	peek: function () {
		return $.ig.util.getEnumValue($.ig.util.stackPeek(this._intern));
	}
	/*<EndMethod Name="System.Xml.XmlTextReader_DtdInputState System.Xml.XmlTextReader_DtdInputStateStack::Peek()" />*/
	,
	/*<BeginMethod Name="System.Xml.XmlTextReader_DtdInputState System.Xml.XmlTextReader_DtdInputStateStack::Pop()" />*/
	pop: function () {
		return $.ig.util.getEnumValue(this._intern.pop());
	}
	/*<EndMethod Name="System.Xml.XmlTextReader_DtdInputState System.Xml.XmlTextReader_DtdInputStateStack::Pop()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextReader_DtdInputStateStack::Push(System.Xml.XmlTextReader_DtdInputState)" />*/
	push: function (val) {
		this._intern.push($.ig.XmlTextReader_DtdInputState.prototype.getBox(val));
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextReader_DtdInputStateStack::Push(System.Xml.XmlTextReader_DtdInputState)" />*/
	,
	$type: new $.ig.Type('XmlTextReader_DtdInputStateStack', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.Xml.XmlTextReader_DtdInputStateStack" />*/

/*<BeginType Name="System.Xml.XmlWriter" />*/

$.ig.util.defType('XmlWriter', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginProperty Name="System.Xml.WriteState System.Xml.XmlWriter::WriteState()" />*/
	writeState: function () {
	}
	/*<EndProperty Name="System.Xml.WriteState System.Xml.XmlWriter::WriteState()" />*/
	,
	/*<BeginProperty Name="System.String System.Xml.XmlWriter::XmlLang()" />*/
	xmlLang: function () {
	}
	/*<EndProperty Name="System.String System.Xml.XmlWriter::XmlLang()" />*/
	,
	/*<BeginProperty Name="System.Xml.XmlSpace System.Xml.XmlWriter::XmlSpace()" />*/
	xmlSpace: function () {
	}
	/*<EndProperty Name="System.Xml.XmlSpace System.Xml.XmlWriter::XmlSpace()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlWriter::Close()" />*/
	close: function () {
	}
	/*<EndMethod Name="System.Void System.Xml.XmlWriter::Close()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlWriter::Dispose(System.Boolean)" />*/
	dispose: function (disposing) {
		this.close();
	}
	/*<EndMethod Name="System.Void System.Xml.XmlWriter::Dispose(System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlWriter::System.IDisposable.Dispose()" />*/
	disposableDispose: function () {
		this.dispose(false);
	}
	/*<EndMethod Name="System.Void System.Xml.XmlWriter::System.IDisposable.Dispose()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlWriter::Flush()" />*/
	flush: function () {
	}
	/*<EndMethod Name="System.Void System.Xml.XmlWriter::Flush()" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlWriter::LookupPrefix(System.String)" />*/
	lookupPrefix: function (ns) {
	}
	/*<EndMethod Name="System.String System.Xml.XmlWriter::LookupPrefix(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlWriter::WriteAttribute(System.Xml.XmlReader, System.Boolean)" />*/
	writeAttribute: function (reader, defattr) {
		if (!defattr && reader.isDefault()) {
			return;
		}
		this.writeStartAttribute1(reader.prefix(), reader.localName(), reader.namespaceURI());
		while (reader.readAttributeValue()) {
			switch (reader.nodeType()) {
				case $.ig.XmlNodeType.prototype.text:
					this.writeString(reader.value());
					break;
				case $.ig.XmlNodeType.prototype.entityReference:
					this.writeEntityRef(reader.name());
					break;
			}
		}
		this.writeEndAttribute();
	}
	/*<EndMethod Name="System.Void System.Xml.XmlWriter::WriteAttribute(System.Xml.XmlReader, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlWriter::WriteAttributes(System.Xml.XmlReader, System.Boolean)" />*/
	writeAttributes: function (reader, defattr) {
		if (reader == null) {
			throw new $.ig.ArgumentException(2, "null XmlReader specified.", "reader");
		}
		var t1 = reader.nodeType();
		L0: while (true) {
			switch (t1) {
				case $.ig.XmlNodeType.prototype.xmlDeclaration:
					this.writeAttributeString("version", reader.item1("version"));
					if (reader.item1("encoding") != null) {
						this.writeAttributeString("encoding", reader.item1("encoding"));
					}
					if (reader.item1("standalone") != null) {
						this.writeAttributeString("standalone", reader.item1("standalone"));
					}
					break;
				case $.ig.XmlNodeType.prototype.element:
					if (reader.moveToFirstAttribute()) {
						t1 = $.ig.XmlNodeType.prototype.attribute;
						continue L0;
					}
					break;
				case $.ig.XmlNodeType.prototype.attribute:
					do {
						this.writeAttribute(reader, defattr);
					} while (reader.moveToNextAttribute());
					reader.moveToElement();
					break;
				default: throw new $.ig.XmlException(3, "NodeType is not one of Element, Attribute, nor XmlDeclaration.");
			}
			break;
		}
	}
	/*<EndMethod Name="System.Void System.Xml.XmlWriter::WriteAttributes(System.Xml.XmlReader, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlWriter::WriteAttributeString(System.String, System.String)" />*/
	writeAttributeString: function (localName, value) {
		this.writeAttributeString2("", localName, null, value);
	}
	/*<EndMethod Name="System.Void System.Xml.XmlWriter::WriteAttributeString(System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlWriter::WriteAttributeString(System.String, System.String, System.String)" />*/
	writeAttributeString1: function (localName, ns, value) {
		this.writeAttributeString2("", localName, ns, value);
	}
	/*<EndMethod Name="System.Void System.Xml.XmlWriter::WriteAttributeString(System.String, System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlWriter::WriteAttributeString(System.String, System.String, System.String, System.String)" />*/
	writeAttributeString2: function (prefix, localName, ns, value) {
		this.writeStartAttribute1(prefix, localName, ns);
		if (value != null && value.length > 0) {
			this.writeString(value);
		}
		this.writeEndAttribute();
	}
	/*<EndMethod Name="System.Void System.Xml.XmlWriter::WriteAttributeString(System.String, System.String, System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlWriter::WriteBase64(, System.Int32, System.Int32)" />*/
	writeBase64: function (buffer, index, count) {
	}
	/*<EndMethod Name="System.Void System.Xml.XmlWriter::WriteBase64(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlWriter::WriteBinHex(, System.Int32, System.Int32)" />*/
	writeBinHex: function (buffer, index, count) {
	}
	/*<EndMethod Name="System.Void System.Xml.XmlWriter::WriteBinHex(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlWriter::WriteCData(System.String)" />*/
	writeCData: function (text) {
	}
	/*<EndMethod Name="System.Void System.Xml.XmlWriter::WriteCData(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlWriter::WriteCharEntity(System.Char)" />*/
	writeCharEntity: function (ch) {
	}
	/*<EndMethod Name="System.Void System.Xml.XmlWriter::WriteCharEntity(System.Char)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlWriter::WriteChars(, System.Int32, System.Int32)" />*/
	writeChars: function (buffer, index, count) {
	}
	/*<EndMethod Name="System.Void System.Xml.XmlWriter::WriteChars(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlWriter::WriteComment(System.String)" />*/
	writeComment: function (text) {
	}
	/*<EndMethod Name="System.Void System.Xml.XmlWriter::WriteComment(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlWriter::WriteDocType(System.String, System.String, System.String, System.String)" />*/
	writeDocType: function (name, pubid, sysid, subset) {
	}
	/*<EndMethod Name="System.Void System.Xml.XmlWriter::WriteDocType(System.String, System.String, System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlWriter::WriteElementString(System.String, System.String)" />*/
	writeElementString: function (localName, value) {
		this.writeStartElement(localName);
		if (value != null && value.length > 0) {
			this.writeString(value);
		}
		this.writeEndElement();
	}
	/*<EndMethod Name="System.Void System.Xml.XmlWriter::WriteElementString(System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlWriter::WriteElementString(System.String, System.String, System.String)" />*/
	writeElementString1: function (localName, ns, value) {
		this.writeStartElement1(localName, ns);
		if (value != null && value.length > 0) {
			this.writeString(value);
		}
		this.writeEndElement();
	}
	/*<EndMethod Name="System.Void System.Xml.XmlWriter::WriteElementString(System.String, System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlWriter::WriteEndAttribute()" />*/
	writeEndAttribute: function () {
	}
	/*<EndMethod Name="System.Void System.Xml.XmlWriter::WriteEndAttribute()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlWriter::WriteEndDocument()" />*/
	writeEndDocument: function () {
	}
	/*<EndMethod Name="System.Void System.Xml.XmlWriter::WriteEndDocument()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlWriter::WriteEndElement()" />*/
	writeEndElement: function () {
	}
	/*<EndMethod Name="System.Void System.Xml.XmlWriter::WriteEndElement()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlWriter::WriteEntityRef(System.String)" />*/
	writeEntityRef: function (name) {
	}
	/*<EndMethod Name="System.Void System.Xml.XmlWriter::WriteEntityRef(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlWriter::WriteFullEndElement()" />*/
	writeFullEndElement: function () {
	}
	/*<EndMethod Name="System.Void System.Xml.XmlWriter::WriteFullEndElement()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlWriter::WriteName(System.String)" />*/
	writeName: function (name) {
	}
	/*<EndMethod Name="System.Void System.Xml.XmlWriter::WriteName(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlWriter::WriteNmToken(System.String)" />*/
	writeNmToken: function (name) {
	}
	/*<EndMethod Name="System.Void System.Xml.XmlWriter::WriteNmToken(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlWriter::WriteQualifiedName(System.String, System.String)" />*/
	writeQualifiedName: function (localName, ns) {
	}
	/*<EndMethod Name="System.Void System.Xml.XmlWriter::WriteQualifiedName(System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlWriter::WriteNameInternal(System.String)" />*/
	writeNameInternal: function (name) {
		$.ig.XmlConvert.prototype.verifyName(name);
		this.writeString(name);
	}
	/*<EndMethod Name="System.Void System.Xml.XmlWriter::WriteNameInternal(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlWriter::WriteNmTokenInternal(System.String)" />*/
	writeNmTokenInternal: function (name) {
		var valid = true;
		valid = $.ig.XmlChar.prototype.isNmToken(name);
		if (!valid) {
			throw new $.ig.ArgumentException(1, "Argument name is not a valid NMTOKEN.");
		}
		this.writeString(name);
	}
	/*<EndMethod Name="System.Void System.Xml.XmlWriter::WriteNmTokenInternal(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlWriter::WriteQualifiedNameInternal(System.String, System.String)" />*/
	writeQualifiedNameInternal: function (localName, ns) {
		if (localName == null || localName == String.empty()) {
			throw new $.ig.ArgumentException(0);
		}
		if (ns == null) {
			ns = String.empty();
		}
		$.ig.XmlConvert.prototype.verifyNCName(localName);
		var prefix = ns.length > 0 ? this.lookupPrefix(ns) : String.empty();
		if (prefix == null) {
			throw new $.ig.ArgumentException(1, $.ig.util.stringFormat("Namespace '{0}' is not declared.", ns));
		}
		if (prefix != String.empty()) {
			this.writeString(prefix);
			this.writeString(":");
			this.writeString(localName);
		} else {
			this.writeString(localName);
		}
	}
	/*<EndMethod Name="System.Void System.Xml.XmlWriter::WriteQualifiedNameInternal(System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlWriter::WriteNode(System.Xml.XmlReader, System.Boolean)" />*/
	writeNode: function (reader, defattr) {
		if (reader == null) {
			throw new $.ig.ArgumentException(0);
		}
		if (reader.readState() == $.ig.ReadState.prototype.initial) {
			reader.read();
			do {
				this.writeNode(reader, defattr);
			} while (!reader.eOF());
			return;
		}
		var t1 = reader.nodeType();
		L0: while (true) {
			switch (t1) {
				case $.ig.XmlNodeType.prototype.element:
					this.writeStartElement2(reader.prefix(), reader.localName(), reader.namespaceURI());
					if (reader.hasAttributes()) {
						for (var i = 0; i < reader.attributeCount(); i++) {
							reader.moveToAttribute2(i);
							this.writeAttribute(reader, defattr);
						}
						reader.moveToElement();
					}
					if (reader.isEmptyElement()) {
						this.writeEndElement();
					} else {
						var depth = reader.depth();
						reader.read();
						if (reader.nodeType() != $.ig.XmlNodeType.prototype.endElement) {
							do {
								this.writeNode(reader, defattr);
							} while (depth < reader.depth());
						}
						this.writeFullEndElement();
					}
					break;
				case $.ig.XmlNodeType.prototype.attribute: return;
				case $.ig.XmlNodeType.prototype.text:
					this.writeString(reader.value());
					break;
				case $.ig.XmlNodeType.prototype.cDATA:
					this.writeCData(reader.value());
					break;
				case $.ig.XmlNodeType.prototype.entityReference:
					this.writeEntityRef(reader.name());
					break;
				case $.ig.XmlNodeType.prototype.xmlDeclaration:
				case $.ig.XmlNodeType.prototype.processingInstruction:
					this.writeProcessingInstruction(reader.name(), reader.value());
					break;
				case $.ig.XmlNodeType.prototype.comment:
					this.writeComment(reader.value());
					break;
				case $.ig.XmlNodeType.prototype.documentType:
					this.writeDocType(reader.name(), reader.item1("PUBLIC"), reader.item1("SYSTEM"), reader.value());
					break;
				case $.ig.XmlNodeType.prototype.significantWhitespace:
					t1 = $.ig.XmlNodeType.prototype.whitespace;
					continue L0;
				case $.ig.XmlNodeType.prototype.whitespace:
					this.writeWhitespace(reader.value());
					break;
				case $.ig.XmlNodeType.prototype.endElement:
					this.writeFullEndElement();
					break;
				case $.ig.XmlNodeType.prototype.endEntity: break;
				case $.ig.XmlNodeType.prototype.none: break;
				default: throw new $.ig.XmlException(3, "Unexpected node " + reader.name() + " of type " + $.ig.XmlNodeType.prototype.getBox(reader.nodeType()));
			}
			break;
		}
		reader.read();
	}
	/*<EndMethod Name="System.Void System.Xml.XmlWriter::WriteNode(System.Xml.XmlReader, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlWriter::WriteProcessingInstruction(System.String, System.String)" />*/
	writeProcessingInstruction: function (name, text) {
	}
	/*<EndMethod Name="System.Void System.Xml.XmlWriter::WriteProcessingInstruction(System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlWriter::WriteRaw(System.String)" />*/
	writeRaw1: function (data) {
	}
	/*<EndMethod Name="System.Void System.Xml.XmlWriter::WriteRaw(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlWriter::WriteRaw(, System.Int32, System.Int32)" />*/
	writeRaw: function (buffer, index, count) {
	}
	/*<EndMethod Name="System.Void System.Xml.XmlWriter::WriteRaw(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlWriter::WriteStartAttribute(System.String, System.String)" />*/
	writeStartAttribute: function (localName, ns) {
		this.writeStartAttribute1(null, localName, ns);
	}
	/*<EndMethod Name="System.Void System.Xml.XmlWriter::WriteStartAttribute(System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlWriter::WriteStartAttribute(System.String, System.String, System.String)" />*/
	writeStartAttribute1: function (prefix, localName, ns) {
	}
	/*<EndMethod Name="System.Void System.Xml.XmlWriter::WriteStartAttribute(System.String, System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlWriter::WriteStartDocument()" />*/
	writeStartDocument: function () {
	}
	/*<EndMethod Name="System.Void System.Xml.XmlWriter::WriteStartDocument()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlWriter::WriteStartDocument(System.Boolean)" />*/
	writeStartDocument1: function (standalone) {
	}
	/*<EndMethod Name="System.Void System.Xml.XmlWriter::WriteStartDocument(System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlWriter::WriteStartElement(System.String)" />*/
	writeStartElement: function (localName) {
		this.writeStartElement2(null, localName, null);
	}
	/*<EndMethod Name="System.Void System.Xml.XmlWriter::WriteStartElement(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlWriter::WriteStartElement(System.String, System.String)" />*/
	writeStartElement1: function (localName, ns) {
		this.writeStartElement2(null, localName, ns);
	}
	/*<EndMethod Name="System.Void System.Xml.XmlWriter::WriteStartElement(System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlWriter::WriteStartElement(System.String, System.String, System.String)" />*/
	writeStartElement2: function (prefix, localName, ns) {
	}
	/*<EndMethod Name="System.Void System.Xml.XmlWriter::WriteStartElement(System.String, System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlWriter::WriteString(System.String)" />*/
	writeString: function (text) {
	}
	/*<EndMethod Name="System.Void System.Xml.XmlWriter::WriteString(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlWriter::WriteSurrogateCharEntity(System.Char, System.Char)" />*/
	writeSurrogateCharEntity: function (lowChar, highChar) {
	}
	/*<EndMethod Name="System.Void System.Xml.XmlWriter::WriteSurrogateCharEntity(System.Char, System.Char)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlWriter::WriteWhitespace(System.String)" />*/
	writeWhitespace: function (ws) {
	}
	/*<EndMethod Name="System.Void System.Xml.XmlWriter::WriteWhitespace(System.String)" />*/
	,
	$type: new $.ig.Type('XmlWriter', $.ig.Object.prototype.$type, [$.ig.IDisposable.prototype.$type])
}, true);

/*<EndType Name="System.Xml.XmlWriter" />*/

/*<BeginType Name="System.Xml.XmlTextWriter" />*/

$.ig.util.defType('XmlTextWriter', 'XmlWriter', {
	_base_stream: null,
	_source: null,
	_writer: null,
	_preserver: null,
	_preserved_name: null,
	_is_preserved_xmlns: false,
	_allow_doc_fragment: false,
	_close_output_stream: false,
	_ignore_encoding: false,
	_namespaces: false,
	_xmldecl_state: 0,
	_check_character_validity: false,
	_newline_handling: 0,
	_is_document_entity: false,
	_state: 0,
	_node_state: 0,
	_nsmanager: null,
	_open_count: 0,
	_elements: null,
	_new_local_namespaces: null,
	_explicit_nsdecls: null,
	_namespace_handling: 0,
	_indent: false,
	_indent_count: 0,
	_indent_char: '\0',
	_indent_string: null,
	_newline: null,
	_indent_attributes: false,
	_quote_char: '\0',
	_v2: false,
	init: function (initNumber, stream, encoding) {
		if (initNumber > 0) {
			switch (initNumber) {
				case 1:
					this.init1.apply(this, arguments);
					break;
			}
			return;
		}
		$.ig.XmlTextWriter.prototype.init1.call(this, 1, new $.ig.StreamWriter(1, stream, encoding == null ? $.ig.XmlTextWriter.prototype._unmarked_utf8encoding : encoding));
		this._ignore_encoding = (encoding == null);
		this.initialize(this._writer);
		this._allow_doc_fragment = true;
	},
	init1: function (initNumber, writer) {
		this._close_output_stream = true;
		this._namespaces = true;
		this._xmldecl_state = $.ig.XmlTextWriter_XmlDeclState.prototype.allow;
		this._newline_handling = $.ig.NewLineHandling.prototype.none;
		this._state = $.ig.WriteState.prototype.start;
		this._node_state = $.ig.XmlNodeType.prototype.none;
		this._elements = new Array(10);
		this._new_local_namespaces = new $.ig.Array();
		this._explicit_nsdecls = new $.ig.Array();
		this._indent_count = 2;
		this._indent_char = ' ';
		this._indent_string = "  ";
		this._quote_char = '\"';
		$.ig.XmlWriter.prototype.init.call(this);
		if (writer == null) {
			throw new $.ig.ArgumentNullException(0, "writer");
		}
		this._ignore_encoding = (writer.encoding() == null);
		this.initialize(writer);
		this._allow_doc_fragment = true;
	},
	/*<BeginMethod Name="System.Void System.Xml.XmlTextWriter::Initialize(System.IO.TextWriter)" />*/
	initialize: function (writer) {
		if (writer == null) {
			throw new $.ig.ArgumentNullException(0, "writer");
		}
		var name_table = new $.ig.NameTable();
		this._writer = writer;
		if ($.ig.util.cast($.ig.StreamWriter.prototype.$type, writer) !== null) {
			this._base_stream = (writer).baseStream();
		}
		this._source = writer;
		this._nsmanager = new $.ig.XmlNamespaceManager(name_table);
		this._newline = writer.newLine();
		$.ig.XmlTextWriter.prototype._escaped_text_chars = this._newline_handling != $.ig.NewLineHandling.prototype.none ? [ '&', '<', '>', '\r', '\n' ] : [ '&', '<', '>' ];
		$.ig.XmlTextWriter.prototype._escaped_attr_chars = [ '\"', '&', '<', '>', '\r', '\n' ];
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextWriter::Initialize(System.IO.TextWriter)" />*/
	,
	/*<BeginProperty Name="System.Xml.Formatting System.Xml.XmlTextWriter::Formatting()" />*/
	formatting: function (value) {
		if (arguments.length === 1) {
			this._indent = (value == $.ig.Formatting.prototype.indented);
			return value;
		} else {
			return this._indent ? $.ig.Formatting.prototype.indented : $.ig.Formatting.prototype.none;
		}
	}
	/*<EndProperty Name="System.Xml.Formatting System.Xml.XmlTextWriter::Formatting()" />*/
	,
	/*<BeginProperty Name="System.Int32 System.Xml.XmlTextWriter::Indentation()" />*/
	indentation: function (value) {
		if (arguments.length === 1) {
			if (value < 0) {
				throw this.argumentError("Indentation must be non-negative integer.");
			}
			this._indent_count = value;
			this._indent_string = value == 0 ? String.empty() : $.ig.util.createString2(this._indent_char, this._indent_count);
			return value;
		} else {
			return this._indent_count;
		}
	}
	/*<EndProperty Name="System.Int32 System.Xml.XmlTextWriter::Indentation()" />*/
	,
	/*<BeginProperty Name="System.Char System.Xml.XmlTextWriter::IndentChar()" />*/
	indentChar: function (value) {
		if (arguments.length === 1) {
			this._indent_char = value;
			this._indent_string = $.ig.util.createString2(this._indent_char, this._indent_count);
			return value;
		} else {
			return this._indent_char;
		}
	}
	/*<EndProperty Name="System.Char System.Xml.XmlTextWriter::IndentChar()" />*/
	,
	/*<BeginProperty Name="System.Char System.Xml.XmlTextWriter::QuoteChar()" />*/
	quoteChar: function (value) {
		if (arguments.length === 1) {
			if (this._state == $.ig.WriteState.prototype.attribute) {
				throw this.invalidOperation("QuoteChar must not be changed inside attribute value.");
			}
			if ((value != '\'') && (value != '\"')) {
				throw this.argumentError("Only ' and \" are allowed as an attribute quote character.");
			}
			this._quote_char = value;
			$.ig.XmlTextWriter.prototype._escaped_attr_chars[0] = this._quote_char;
			return value;
		} else {
			return this._quote_char;
		}
	}
	/*<EndProperty Name="System.Char System.Xml.XmlTextWriter::QuoteChar()" />*/
	,
	/*<BeginProperty Name="System.String System.Xml.XmlTextWriter::XmlLang()" />*/
	xmlLang: function () {
		return this._open_count == 0 ? null : this._elements[this._open_count - 1]._xmlLang;
	}
	/*<EndProperty Name="System.String System.Xml.XmlTextWriter::XmlLang()" />*/
	,
	/*<BeginProperty Name="System.Xml.XmlSpace System.Xml.XmlTextWriter::XmlSpace()" />*/
	xmlSpace: function () {
		return this._open_count == 0 ? $.ig.XmlSpace.prototype.none : this._elements[this._open_count - 1]._xmlSpace;
	}
	/*<EndProperty Name="System.Xml.XmlSpace System.Xml.XmlTextWriter::XmlSpace()" />*/
	,
	/*<BeginProperty Name="System.Xml.WriteState System.Xml.XmlTextWriter::WriteState()" />*/
	writeState: function () {
		return this._state;
	}
	/*<EndProperty Name="System.Xml.WriteState System.Xml.XmlTextWriter::WriteState()" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlTextWriter::LookupPrefix(System.String)" />*/
	lookupPrefix: function (namespaceUri) {
		if (namespaceUri == null || namespaceUri == String.empty()) {
			throw this.argumentError("The Namespace cannot be empty.");
		}
		if (namespaceUri == this._nsmanager.defaultNamespace()) {
			return String.empty();
		}
		var prefix = this._nsmanager.lookupPrefixExclusive(namespaceUri, false);
		return prefix;
	}
	/*<EndMethod Name="System.String System.Xml.XmlTextWriter::LookupPrefix(System.String)" />*/
	,
	/*<BeginProperty Name="System.IO.Stream System.Xml.XmlTextWriter::BaseStream()" />*/
	baseStream: function () {
		return this._base_stream;
	}
	/*<EndProperty Name="System.IO.Stream System.Xml.XmlTextWriter::BaseStream()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextWriter::Close()" />*/
	close: function () {
		if (this._state == $.ig.WriteState.prototype.attribute) {
			this.writeEndAttribute();
		}
		while (this._open_count > 0) {
			this.writeEndElement();
		}
		if (this._close_output_stream) {
			this._writer.close();
		} else {
			this._writer.flush();
		}
		this._state = $.ig.WriteState.prototype.closed;
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextWriter::Close()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextWriter::Flush()" />*/
	flush: function () {
		this._writer.flush();
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextWriter::Flush()" />*/
	,
	/*<BeginProperty Name="System.Boolean System.Xml.XmlTextWriter::Namespaces()" />*/
	namespaces: function (value) {
		if (arguments.length === 1) {
			if (this._state != $.ig.WriteState.prototype.start) {
				throw this.invalidOperation("This property must be set before writing output.");
			}
			this._namespaces = value;
			return value;
		} else {
			return this._namespaces;
		}
	}
	/*<EndProperty Name="System.Boolean System.Xml.XmlTextWriter::Namespaces()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextWriter::WriteStartDocument()" />*/
	writeStartDocument: function () {
		this.writeStartDocumentCore(false, false);
		this._is_document_entity = true;
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextWriter::WriteStartDocument()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextWriter::WriteStartDocument(System.Boolean)" />*/
	writeStartDocument1: function (standalone) {
		this.writeStartDocumentCore(true, standalone);
		this._is_document_entity = true;
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextWriter::WriteStartDocument(System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextWriter::WriteStartDocumentCore(System.Boolean, System.Boolean)" />*/
	writeStartDocumentCore: function (outputStd, standalone) {
		if (this._state != $.ig.WriteState.prototype.start) {
			throw this.stateError("XmlDeclaration");
		}
		switch (this._xmldecl_state) {
			case $.ig.XmlTextWriter_XmlDeclState.prototype.ignore: return;
			case $.ig.XmlTextWriter_XmlDeclState.prototype.prohibit: throw this.invalidOperation("WriteStartDocument cannot be called when ConformanceLevel is Fragment.");
		}
		this._state = $.ig.WriteState.prototype.prolog;
		this._writer.write10("<?xml version=");
		this._writer.write3(this._quote_char);
		this._writer.write10("1.0");
		this._writer.write3(this._quote_char);
		if (!this._ignore_encoding) {
			this._writer.write10(" encoding=");
			this._writer.write3(this._quote_char);
			this._writer.write10(this._writer.encoding().webName());
			this._writer.write3(this._quote_char);
		}
		if (outputStd) {
			this._writer.write10(" standalone=");
			this._writer.write3(this._quote_char);
			this._writer.write10(standalone ? "yes" : "no");
			this._writer.write3(this._quote_char);
		}
		this._writer.write10("?>");
		this._xmldecl_state = $.ig.XmlTextWriter_XmlDeclState.prototype.ignore;
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextWriter::WriteStartDocumentCore(System.Boolean, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextWriter::WriteEndDocument()" />*/
	writeEndDocument: function () {
		switch (this._state) {
			case $.ig.WriteState.prototype.closed:
			case $.ig.WriteState.prototype.start:
				throw this.stateError("EndDocument");
		}
		if (this._state == $.ig.WriteState.prototype.attribute) {
			this.writeEndAttribute();
		}
		while (this._open_count > 0) {
			this.writeEndElement();
		}
		this._state = $.ig.WriteState.prototype.start;
		this._is_document_entity = false;
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextWriter::WriteEndDocument()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextWriter::WriteDocType(System.String, System.String, System.String, System.String)" />*/
	writeDocType: function (name, pubid, sysid, subset) {
		if (name == null) {
			throw this.argumentError("name");
		}
		if (!$.ig.XmlChar.prototype.isName(name)) {
			throw this.argumentError("name");
		}
		if (this._node_state != $.ig.XmlNodeType.prototype.none) {
			throw this.stateError("DocType");
		}
		this._node_state = $.ig.XmlNodeType.prototype.documentType;
		if (this._xmldecl_state == $.ig.XmlTextWriter_XmlDeclState.prototype.auto) {
			this.outputAutoStartDocument();
		}
		this.writeIndent();
		this._writer.write10("<!DOCTYPE ");
		this._writer.write10(name);
		if (pubid != null) {
			this._writer.write10(" PUBLIC ");
			this._writer.write3(this._quote_char);
			this._writer.write10(pubid);
			this._writer.write3(this._quote_char);
			this._writer.write3(' ');
			this._writer.write3(this._quote_char);
			if (sysid != null) {
				this._writer.write10(sysid);
			}
			this._writer.write3(this._quote_char);
		} else if (sysid != null) {
			this._writer.write10(" SYSTEM ");
			this._writer.write3(this._quote_char);
			this._writer.write10(sysid);
			this._writer.write3(this._quote_char);
		}
		if (subset != null) {
			this._writer.write10("[");
			this._writer.write10(subset);
			this._writer.write10("]");
		}
		this._writer.write3('>');
		this._state = $.ig.WriteState.prototype.prolog;
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextWriter::WriteDocType(System.String, System.String, System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextWriter::WriteStartElement(System.String, System.String, System.String)" />*/
	writeStartElement2: function (prefix, localName, namespaceUri) {
		if (this._state == $.ig.WriteState.prototype.closed) {
			throw this.stateError("StartTag");
		}
		this._node_state = $.ig.XmlNodeType.prototype.element;
		var anonPrefix = (prefix == null);
		if (prefix == null) {
			prefix = String.empty();
		}
		if (!this._namespaces && namespaceUri != null && namespaceUri.length > 0) {
			throw this.argumentError("Namespace is disabled in this XmlTextWriter.");
		}
		if (!this._namespaces && prefix.length > 0) {
			throw this.argumentError("Namespace prefix is disabled in this XmlTextWriter.");
		}
		if (prefix.length > 0 && namespaceUri == null) {
			namespaceUri = this._nsmanager.lookupNamespace1(prefix, false);
			if (namespaceUri == null || namespaceUri.length == 0) {
				throw this.argumentError("Namespace URI must not be null when prefix is not an empty string.");
			}
		}
		if (this._namespaces && prefix != null && prefix.length == 3 && namespaceUri != $.ig.XmlTextWriter.prototype._xmlNamespace && (prefix.charAt(0) == 'x' || prefix.charAt(0) == 'X') && (prefix.charAt(1) == 'm' || prefix.charAt(1) == 'M') && (prefix.charAt(2) == 'l' || prefix.charAt(2) == 'L')) {
			throw new $.ig.ArgumentException(1, "A prefix cannot be equivalent to \"xml\" in case-insensitive match.");
		}
		if (this._xmldecl_state == $.ig.XmlTextWriter_XmlDeclState.prototype.auto) {
			this.outputAutoStartDocument();
		}
		if (this._state == $.ig.WriteState.prototype.element) {
			this.closeStartElement();
		}
		if (this._open_count > 0) {
			this._elements[this._open_count - 1]._hasElements = true;
		}
		this._nsmanager.pushScope();
		if (this._namespaces && namespaceUri != null) {
			if (anonPrefix && namespaceUri.length > 0) {
				prefix = this.lookupPrefix(namespaceUri);
			}
			if (prefix == null || namespaceUri.length == 0) {
				prefix = String.empty();
			}
		}
		this.writeIndent();
		this._writer.write10("<");
		if (prefix.length > 0) {
			this._writer.write10(prefix);
			this._writer.write3(':');
		}
		this._writer.write10(localName);
		if (this._elements.length == this._open_count) {
			var tmp = new Array(this._open_count << 1);
			$.ig.util.arrayCopy2(this._elements, tmp, this._open_count);
			this._elements = tmp;
		}
		if (this._elements[this._open_count] == null) {
			this._elements[this._open_count] = new $.ig.XmlTextWriter_XmlNodeInfo();
		}
		var info = this._elements[this._open_count];
		info._prefix = prefix;
		info._localName = localName;
		info._nS = namespaceUri;
		info._hasSimple = false;
		info._hasElements = false;
		info._xmlLang = this.xmlLang();
		info._xmlSpace = this.xmlSpace();
		this._open_count++;
		if (this._namespaces && namespaceUri != null) {
			var oldns = this._nsmanager.lookupNamespace1(prefix, false);
			if (oldns != namespaceUri) {
				this._nsmanager.addNamespace(prefix, namespaceUri);
				this._new_local_namespaces.push(prefix);
			}
		}
		this._state = $.ig.WriteState.prototype.element;
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextWriter::WriteStartElement(System.String, System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextWriter::CloseStartElement()" />*/
	closeStartElement: function () {
		this.closeStartElementCore();
		if (this._state == $.ig.WriteState.prototype.element) {
			this._writer.write3('>');
		}
		this._state = $.ig.WriteState.prototype.content;
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextWriter::CloseStartElement()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextWriter::CloseStartElementCore()" />*/
	closeStartElementCore: function () {
		if (this._state == $.ig.WriteState.prototype.attribute) {
			this.writeEndAttribute();
		}
		if (this._new_local_namespaces.length == 0) {
			if (this._explicit_nsdecls.length > 0) {
				this._explicit_nsdecls.clear();
			}
			return;
		}
		var idx = this._explicit_nsdecls.length;
		while (this._new_local_namespaces.length > 0) {
			var p = this._new_local_namespaces.pop();
			var match = false;
			for (var i = 0; i < this._explicit_nsdecls.length; i++) {
				if (this._explicit_nsdecls[i] == p) {
					match = true;
					break;
				}
			}
			if (match) {
				continue;
			}
			this._explicit_nsdecls.add(p);
		}
		for (var i1 = idx; i1 < this._explicit_nsdecls.length; i1++) {
			var prefix = this._explicit_nsdecls[i1];
			var ns = this._nsmanager.lookupNamespace1(prefix, false);
			if (ns == null) {
				continue;
			}
			if (prefix.length > 0) {
				this._writer.write10(" xmlns:");
				this._writer.write10(prefix);
			} else {
				this._writer.write10(" xmlns");
			}
			this._writer.write3('=');
			this._writer.write3(this._quote_char);
			this.writeEscapedString(ns, true);
			this._writer.write3(this._quote_char);
		}
		this._explicit_nsdecls.clear();
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextWriter::CloseStartElementCore()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextWriter::WriteEndElement()" />*/
	writeEndElement: function () {
		this.writeEndElementCore(false);
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextWriter::WriteEndElement()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextWriter::WriteFullEndElement()" />*/
	writeFullEndElement: function () {
		this.writeEndElementCore(true);
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextWriter::WriteFullEndElement()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextWriter::WriteEndElementCore(System.Boolean)" />*/
	writeEndElementCore: function (full) {
		if (this._state == $.ig.WriteState.prototype.closed) {
			throw this.stateError("EndElement");
		}
		if (this._open_count == 0) {
			throw this.invalidOperation("There is no more open element.");
		}
		this.closeStartElementCore();
		this._nsmanager.popScope();
		if (this._state == $.ig.WriteState.prototype.element) {
			if (full) {
				this._writer.write3('>');
			} else {
				this._writer.write10(" />");
			}
		}
		if (full || this._state == $.ig.WriteState.prototype.content) {
			this.writeIndentEndElement();
		}
		var info = this._elements[--this._open_count];
		if (full || this._state == $.ig.WriteState.prototype.content) {
			this._writer.write10("</");
			if (info._prefix.length > 0) {
				this._writer.write10(info._prefix);
				this._writer.write3(':');
			}
			this._writer.write10(info._localName);
			this._writer.write3('>');
		}
		this._state = $.ig.WriteState.prototype.content;
		if (this._open_count == 0) {
			this._node_state = $.ig.XmlNodeType.prototype.endElement;
		}
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextWriter::WriteEndElementCore(System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextWriter::WriteStartAttribute(System.String, System.String, System.String)" />*/
	writeStartAttribute1: function (prefix, localName, namespaceUri) {
		if (this._state == $.ig.WriteState.prototype.attribute) {
			this.writeEndAttribute();
		}
		if (this._state != $.ig.WriteState.prototype.element && this._state != $.ig.WriteState.prototype.start) {
			throw this.stateError("Attribute");
		}
		if (prefix == null) {
			prefix = String.empty();
		}
		var isNSDecl = false;
		if (namespaceUri == $.ig.XmlTextWriter.prototype._xmlnsNamespace) {
			isNSDecl = true;
			if (prefix.length == 0 && localName != "xmlns") {
				prefix = "xmlns";
			}
		} else {
			isNSDecl = (prefix == "xmlns" || localName == "xmlns" && prefix.length == 0);
		}
		if (isNSDecl) {
			if (localName == null || localName.length == 0) {
				localName = prefix;
				prefix = String.empty();
			}
		}
		if (this._namespaces) {
			if (prefix == "xml") {
				namespaceUri = $.ig.XmlTextWriter.prototype._xmlNamespace;
			} else if (namespaceUri == null || (this._v2 && namespaceUri.length == 0)) {
				if (isNSDecl) {
					namespaceUri = $.ig.XmlTextWriter.prototype._xmlnsNamespace;
				} else {
					namespaceUri = String.empty();
				}
			}
			if (isNSDecl && namespaceUri != $.ig.XmlTextWriter.prototype._xmlnsNamespace) {
				throw this.argumentError($.ig.util.stringFormat("The 'xmlns' attribute is bound to the reserved namespace '{0}'", $.ig.XmlTextWriter.prototype._xmlnsNamespace));
			}
			if (prefix.length > 0 && namespaceUri.length == 0) {
				namespaceUri = this._nsmanager.lookupNamespace1(prefix, false);
				if (namespaceUri == null || namespaceUri.length == 0) {
					throw this.argumentError("Namespace URI must not be null when prefix is not an empty string.");
				}
			}
			if (!isNSDecl && namespaceUri.length > 0) {
				prefix = this.determineAttributePrefix(prefix, localName, namespaceUri);
			}
		}
		if (this._indent_attributes) {
			this.writeIndentAttribute();
		} else if (this._state != $.ig.WriteState.prototype.start) {
			this._writer.write3(' ');
		}
		if (prefix.length > 0) {
			this._writer.write10(prefix);
			this._writer.write3(':');
		}
		this._writer.write10(localName);
		this._writer.write3('=');
		this._writer.write3(this._quote_char);
		if (isNSDecl || prefix == "xml") {
			if (this._preserver == null) {
				this._preserver = new $.ig.StringWriter(0);
			} else {
				this._preserver.getStringBuilder().length(0);
			}
			this._writer = this._preserver;
			if (!isNSDecl) {
				this._is_preserved_xmlns = false;
				this._preserved_name = localName;
			} else {
				this._is_preserved_xmlns = true;
				this._preserved_name = localName == "xmlns" ? String.empty() : localName;
			}
		}
		this._state = $.ig.WriteState.prototype.attribute;
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextWriter::WriteStartAttribute(System.String, System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlTextWriter::DetermineAttributePrefix(System.String, System.String, System.String)" />*/
	determineAttributePrefix: function (prefix, local, ns) {
		var mockup = false;
		if (prefix.length == 0) {
			prefix = this.lookupPrefix(ns);
			if (prefix != null && prefix.length > 0) {
				return prefix;
			}
			mockup = true;
		} else {
			prefix = this._nsmanager.nameTable().add1(prefix);
			var existing = this._nsmanager.lookupNamespace1(prefix, true);
			if (existing == ns) {
				return prefix;
			}
			if (existing != null) {
				this._nsmanager.removeNamespace(prefix, existing);
				if (this._nsmanager.lookupNamespace1(prefix, true) != existing) {
					mockup = true;
					this._nsmanager.addNamespace(prefix, existing);
				}
			}
		}
		if (mockup) {
			prefix = this.mockupPrefix(ns, true);
		}
		this._new_local_namespaces.push(prefix);
		this._nsmanager.addNamespace(prefix, ns);
		return prefix;
	}
	/*<EndMethod Name="System.String System.Xml.XmlTextWriter::DetermineAttributePrefix(System.String, System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlTextWriter::MockupPrefix(System.String, System.Boolean)" />*/
	mockupPrefix: function (ns, skipLookup) {
		var prefix = skipLookup ? null : this.lookupPrefix(ns);
		if (prefix != null && prefix.length > 0) {
			return prefix;
		}
		for (var p = 1; ; p++) {
			prefix = $.ig.XmlTextWriter_StringUtil.prototype.format("d{0}p{1}", [ this._open_count, p ]);
			if ($.ig.util.stackContains(this._new_local_namespaces, prefix)) {
				continue;
			}
			if (null != this._nsmanager.lookupNamespace(this._nsmanager.nameTable().get1(prefix))) {
				continue;
			}
			this._nsmanager.addNamespace(prefix, ns);
			this._new_local_namespaces.push(prefix);
			return prefix;
		}
	}
	/*<EndMethod Name="System.String System.Xml.XmlTextWriter::MockupPrefix(System.String, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextWriter::WriteEndAttribute()" />*/
	writeEndAttribute: function () {
		if (this._state != $.ig.WriteState.prototype.attribute) {
			throw this.stateError("End of attribute");
		}
		if (this._writer == this._preserver) {
			this._writer = this._source;
			var value = this._preserver.toString();
			if (this._is_preserved_xmlns) {
				if (this._preserved_name.length > 0 && value.length == 0) {
					throw this.argumentError("Non-empty prefix must be mapped to non-empty namespace URI.");
				}
				var existing = this._nsmanager.lookupNamespace1(this._preserved_name, false);
				if ((this._namespace_handling & $.ig.NamespaceHandling.prototype.omitDuplicates) == 0 || existing != value) {
					this._explicit_nsdecls.add(this._preserved_name);
				}
				if (this._open_count > 0) {
					if (this._v2 && this._elements[this._open_count - 1]._prefix == this._preserved_name && this._elements[this._open_count - 1]._nS != value) {
						throw new $.ig.XmlException(3, $.ig.util.stringFormat("Cannot redefine the namespace for prefix '{0}' used at current element", this._preserved_name));
					}
					if (this._elements[this._open_count - 1]._nS == String.empty() && this._elements[this._open_count - 1]._prefix == this._preserved_name) {
						;
					} else if (existing != value) {
						this._nsmanager.addNamespace(this._preserved_name, value);
					}
				}
			} else {
				switch (this._preserved_name) {
					case "lang":
						if (this._open_count > 0) {
							this._elements[this._open_count - 1]._xmlLang = value;
						}
						break;
					case "space":
						switch (value) {
							case "default":
								if (this._open_count > 0) {
									this._elements[this._open_count - 1]._xmlSpace = $.ig.XmlSpace.prototype.$default;
								}
								break;
							case "preserve":
								if (this._open_count > 0) {
									this._elements[this._open_count - 1]._xmlSpace = $.ig.XmlSpace.prototype.preserve;
								}
								break;
							default: throw this.argumentError("Invalid value for xml:space.");
						}
						break;
				}
			}
			this._writer.write10(value);
		}
		this._writer.write3(this._quote_char);
		this._state = $.ig.WriteState.prototype.element;
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextWriter::WriteEndAttribute()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextWriter::WriteComment(System.String)" />*/
	writeComment: function (text) {
		if (text == null) {
			throw this.argumentError("text");
		}
		if (text.length > 0 && text.charAt(text.length - 1) == '-') {
			throw this.argumentError("An input string to WriteComment method must not end with '-'. Escape it with '&#2D;'.");
		}
		if ($.ig.XmlTextWriter_StringUtil.prototype.indexOf(text, "--") > 0) {
			throw this.argumentError("An XML comment cannot end with \"-\".");
		}
		if (this._state == $.ig.WriteState.prototype.attribute || this._state == $.ig.WriteState.prototype.element) {
			this.closeStartElement();
		}
		this.writeIndent();
		this.shiftStateTopLevel("Comment", false, false, false);
		this._writer.write10("<!--");
		this._writer.write10(text);
		this._writer.write10("-->");
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextWriter::WriteComment(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextWriter::WriteProcessingInstruction(System.String, System.String)" />*/
	writeProcessingInstruction: function (name, text) {
		if (name == null) {
			throw this.argumentError("name");
		}
		if (text == null) {
			throw this.argumentError("text");
		}
		this.writeIndent();
		if (!$.ig.XmlChar.prototype.isName(name)) {
			throw this.argumentError("A processing instruction name must be a valid XML name.");
		}
		if ($.ig.XmlTextWriter_StringUtil.prototype.indexOf(text, "?>") > 0) {
			throw this.argumentError("Processing instruction cannot contain \"?>\" as its value.");
		}
		this.shiftStateTopLevel("ProcessingInstruction", false, name == "xml", false);
		this._writer.write10("<?");
		this._writer.write10(name);
		this._writer.write3(' ');
		this._writer.write10(text);
		this._writer.write10("?>");
		if (this._state == $.ig.WriteState.prototype.start) {
			this._state = $.ig.WriteState.prototype.prolog;
		}
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextWriter::WriteProcessingInstruction(System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextWriter::WriteWhitespace(System.String)" />*/
	writeWhitespace: function (text) {
		if (text == null) {
			throw this.argumentError("text");
		}
		if (text.length == 0 || $.ig.XmlChar.prototype.indexOfNonWhitespace(text) >= 0) {
			throw this.argumentError("WriteWhitespace method accepts only whitespaces.");
		}
		this.shiftStateTopLevel("Whitespace", true, false, true);
		this._writer.write10(text);
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextWriter::WriteWhitespace(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextWriter::WriteCData(System.String)" />*/
	writeCData: function (text) {
		if (text == null) {
			text = String.empty();
		}
		this.shiftStateContent("CData", false);
		if ($.ig.XmlTextWriter_StringUtil.prototype.indexOf(text, "]]>") >= 0) {
			throw this.argumentError("CDATA section must not contain ']]>'.");
		}
		this._writer.write10("<![CDATA[");
		this.writeCheckedString(text);
		this._writer.write10("]]>");
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextWriter::WriteCData(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextWriter::WriteString(System.String)" />*/
	writeString: function (text) {
		if (text == null || (text.length == 0 && !this._v2)) {
			return;
		}
		this.shiftStateContent("Text", true);
		this.writeEscapedString(text, this._state == $.ig.WriteState.prototype.attribute);
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextWriter::WriteString(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextWriter::WriteRaw(System.String)" />*/
	writeRaw1: function (raw) {
		if (raw == null) {
			return;
		}
		this.shiftStateTopLevel("Raw string", true, true, true);
		this._writer.write10(raw);
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextWriter::WriteRaw(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextWriter::WriteCharEntity(System.Char)" />*/
	writeCharEntity: function (ch) {
		this.writeCharacterEntity(ch, '\0', false);
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextWriter::WriteCharEntity(System.Char)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextWriter::WriteSurrogateCharEntity(System.Char, System.Char)" />*/
	writeSurrogateCharEntity: function (low, high) {
		this.writeCharacterEntity(low, high, true);
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextWriter::WriteSurrogateCharEntity(System.Char, System.Char)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextWriter::WriteCharacterEntity(System.Char, System.Char, System.Boolean)" />*/
	writeCharacterEntity: function (ch, high, surrogate) {
		if (surrogate && ('�'.charCodeAt(0) > high.charCodeAt(0) || high.charCodeAt(0) > '�'.charCodeAt(0) || '�'.charCodeAt(0) > ch.charCodeAt(0) || ch.charCodeAt(0) > '�'.charCodeAt(0))) {
			throw this.argumentError($.ig.util.stringFormat("Invalid surrogate pair was found. Low: &#x{0:X}; High: &#x{0:X};", ch.charCodeAt(0), high.charCodeAt(0)));
		} else if (this._check_character_validity && $.ig.XmlChar.prototype.isInvalid(ch.charCodeAt(0))) {
			throw this.argumentError($.ig.util.stringFormat("Invalid character &#x{0:X};", ch.charCodeAt(0)));
		}
		this.shiftStateContent("Character", true);
		var v = surrogate ? (high.charCodeAt(0) - 55296) * 1024 + ch.charCodeAt(0) - 56320 + 65536 : ch.charCodeAt(0);
		this._writer.write10("&#x");
		this._writer.write10($.ig.util.intToString1(v, "X", $.ig.CultureInfo.prototype.invariantCulture()));
		this._writer.write3(';');
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextWriter::WriteCharacterEntity(System.Char, System.Char, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextWriter::WriteEntityRef(System.String)" />*/
	writeEntityRef: function (name) {
		if (name == null) {
			throw this.argumentError("name");
		}
		if (!$.ig.XmlChar.prototype.isName(name)) {
			throw this.argumentError("Argument name must be a valid XML name.");
		}
		this.shiftStateContent("Entity reference", true);
		this._writer.write3('&');
		this._writer.write10(name);
		this._writer.write3(';');
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextWriter::WriteEntityRef(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextWriter::WriteName(System.String)" />*/
	writeName: function (name) {
		if (name == null) {
			throw this.argumentError("name");
		}
		if (!$.ig.XmlChar.prototype.isName(name)) {
			throw this.argumentError("Not a valid name string.");
		}
		this.writeString(name);
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextWriter::WriteName(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextWriter::WriteNmToken(System.String)" />*/
	writeNmToken: function (nmtoken) {
		if (nmtoken == null) {
			throw this.argumentError("nmtoken");
		}
		if (!$.ig.XmlChar.prototype.isNmToken(nmtoken)) {
			throw this.argumentError("Not a valid NMTOKEN string.");
		}
		this.writeString(nmtoken);
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextWriter::WriteNmToken(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextWriter::WriteQualifiedName(System.String, System.String)" />*/
	writeQualifiedName: function (localName, ns) {
		if (localName == null) {
			throw this.argumentError("localName");
		}
		if (ns == null) {
			ns = String.empty();
		}
		if (ns == $.ig.XmlTextWriter.prototype._xmlnsNamespace) {
			throw this.argumentError("Prefix 'xmlns' is reserved and cannot be overriden.");
		}
		if (!$.ig.XmlChar.prototype.isNCName(localName)) {
			throw this.argumentError("localName must be a valid NCName.");
		}
		this.shiftStateContent("QName", true);
		var prefix = ns.length > 0 ? this.lookupPrefix(ns) : String.empty();
		if (prefix == null) {
			if (this._state == $.ig.WriteState.prototype.attribute) {
				prefix = this.mockupPrefix(ns, false);
			} else {
				throw this.argumentError($.ig.util.stringFormat("Namespace '{0}' is not declared.", ns));
			}
		}
		if (prefix != String.empty()) {
			this._writer.write10(prefix);
			this._writer.write10(":");
		}
		this._writer.write10(localName);
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextWriter::WriteQualifiedName(System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextWriter::CheckChunkRange(System.Array, System.Int32, System.Int32)" />*/
	checkChunkRange: function (buffer, index, count) {
		if (buffer == null) {
			throw new $.ig.ArgumentNullException(0, "buffer");
		}
		if (index < 0 || buffer.length < index) {
			throw this.argumentOutOfRangeError("index");
		}
		if (count < 0 || buffer.length < index + count) {
			throw this.argumentOutOfRangeError("count");
		}
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextWriter::CheckChunkRange(System.Array, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextWriter::WriteBase64(, System.Int32, System.Int32)" />*/
	writeBase64: function (buffer, index, count) {
		throw new $.ig.NotImplementedException(1, "WriteBase64 not implemented");
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextWriter::WriteBase64(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextWriter::WriteBinHex(, System.Int32, System.Int32)" />*/
	writeBinHex: function (buffer, index, count) {
		this.checkChunkRange(buffer, index, count);
		this.shiftStateContent("BinHex", true);
		$.ig.XmlConvert.prototype.writeBinHex(buffer, index, count, this._writer);
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextWriter::WriteBinHex(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextWriter::WriteChars(, System.Int32, System.Int32)" />*/
	writeChars: function (buffer, index, count) {
		this.checkChunkRange(buffer, index, count);
		this.shiftStateContent("Chars", true);
		this.writeEscapedBuffer(buffer, index, count, this._state == $.ig.WriteState.prototype.attribute);
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextWriter::WriteChars(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextWriter::WriteRaw(, System.Int32, System.Int32)" />*/
	writeRaw: function (buffer, index, count) {
		this.checkChunkRange(buffer, index, count);
		this.shiftStateContent("Raw text", false);
		this._writer.write1(buffer, index, count);
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextWriter::WriteRaw(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextWriter::WriteIndent()" />*/
	writeIndent: function () {
		this.writeIndentCore(0, false);
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextWriter::WriteIndent()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextWriter::WriteIndentEndElement()" />*/
	writeIndentEndElement: function () {
		this.writeIndentCore(-1, false);
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextWriter::WriteIndentEndElement()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextWriter::WriteIndentAttribute()" />*/
	writeIndentAttribute: function () {
		if (!this.writeIndentCore(0, true)) {
			this._writer.write3(' ');
		}
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextWriter::WriteIndentAttribute()" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Xml.XmlTextWriter::WriteIndentCore(System.Int32, System.Boolean)" />*/
	writeIndentCore: function (nestFix, attribute) {
		if (!this._indent) {
			return false;
		}
		for (var i = this._open_count - 1; i >= 0; i--) {
			if (!attribute && this._elements[i]._hasSimple) {
				return false;
			}
		}
		if (this._state != $.ig.WriteState.prototype.start) {
			this._writer.write10(this._newline);
		}
		for (var i1 = 0; i1 < this._open_count + nestFix; i1++) {
			this._writer.write10(this._indent_string);
		}
		return true;
	}
	/*<EndMethod Name="System.Boolean System.Xml.XmlTextWriter::WriteIndentCore(System.Int32, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextWriter::OutputAutoStartDocument()" />*/
	outputAutoStartDocument: function () {
		if (this._state != $.ig.WriteState.prototype.start) {
			return;
		}
		this.writeStartDocumentCore(false, false);
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextWriter::OutputAutoStartDocument()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextWriter::ShiftStateTopLevel(System.String, System.Boolean, System.Boolean, System.Boolean)" />*/
	shiftStateTopLevel: function (occured, allowAttribute, dontCheckXmlDecl, isCharacter) {
		var t1 = this._state;
		L0: while (true) {
			switch (t1) {
				case $.ig.WriteState.prototype.closed: throw this.stateError(occured);
				case $.ig.WriteState.prototype.start:
					if (isCharacter) {
						this.checkMixedContentState();
					}
					if (this._xmldecl_state == $.ig.XmlTextWriter_XmlDeclState.prototype.auto && !dontCheckXmlDecl) {
						this.outputAutoStartDocument();
					}
					this._state = $.ig.WriteState.prototype.prolog;
					break;
				case $.ig.WriteState.prototype.attribute:
					if (allowAttribute) {
						break;
					}
					t1 = $.ig.WriteState.prototype.closed;
					continue L0;
				case $.ig.WriteState.prototype.element:
					if (isCharacter) {
						this.checkMixedContentState();
					}
					this.closeStartElement();
					break;
				case $.ig.WriteState.prototype.content:
					if (isCharacter) {
						this.checkMixedContentState();
					}
					break;
			}
			break;
		}
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextWriter::ShiftStateTopLevel(System.String, System.Boolean, System.Boolean, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextWriter::CheckMixedContentState()" />*/
	checkMixedContentState: function () {
		if (this._open_count > 0) {
			this._elements[this._open_count - 1]._hasSimple = true;
		}
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextWriter::CheckMixedContentState()" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextWriter::ShiftStateContent(System.String, System.Boolean)" />*/
	shiftStateContent: function (occured, allowAttribute) {
		var t1 = this._state;
		L0: while (true) {
			switch (t1) {
				case $.ig.WriteState.prototype.closed: throw this.stateError(occured);
				case $.ig.WriteState.prototype.prolog:
				case $.ig.WriteState.prototype.start:
					if (!this._allow_doc_fragment || this._is_document_entity) {
						t1 = $.ig.WriteState.prototype.closed;
						continue L0;
					}
					if (this._xmldecl_state == $.ig.XmlTextWriter_XmlDeclState.prototype.auto) {
						this.outputAutoStartDocument();
					}
					this.checkMixedContentState();
					this._state = $.ig.WriteState.prototype.content;
					break;
				case $.ig.WriteState.prototype.attribute:
					if (allowAttribute) {
						break;
					}
					t1 = $.ig.WriteState.prototype.closed;
					continue L0;
				case $.ig.WriteState.prototype.element:
					this.closeStartElement();
					this.checkMixedContentState();
					break;
				case $.ig.WriteState.prototype.content:
					this.checkMixedContentState();
					break;
			}
			break;
		}
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextWriter::ShiftStateContent(System.String, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextWriter::WriteEscapedString(System.String, System.Boolean)" />*/
	writeEscapedString: function (text, isAttribute) {
		var escaped = isAttribute ? $.ig.XmlTextWriter.prototype._escaped_attr_chars : $.ig.XmlTextWriter.prototype._escaped_text_chars;
		var idx = text.indexOfAny(escaped);
		if (idx >= 0) {
			var arr = $.ig.util.toCharArray(text);
			this.writeCheckedBuffer(arr, 0, idx);
			this.writeEscapedBuffer(arr, idx, arr.length - idx, isAttribute);
		} else {
			this.writeCheckedString(text);
		}
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextWriter::WriteEscapedString(System.String, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextWriter::WriteCheckedString(System.String)" />*/
	writeCheckedString: function (s) {
		var i = $.ig.XmlChar.prototype.indexOfInvalid1(s, true);
		if (i >= 0) {
			var arr = $.ig.util.toCharArray(s);
			this._writer.write1(arr, 0, i);
			this.writeCheckedBuffer(arr, i, arr.length - i);
		} else {
			this._writer.write10(s);
		}
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextWriter::WriteCheckedString(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextWriter::WriteCheckedBuffer(, System.Int32, System.Int32)" />*/
	writeCheckedBuffer: function (text, idx, length) {
		var start = idx;
		var end = idx + length;
		while ((idx = $.ig.XmlChar.prototype.indexOfInvalid(text, start, length, true)) >= 0) {
			if (this._check_character_validity) {
				throw this.argumentError($.ig.util.stringFormat("Input contains invalid character at {0} : &#x{1:X};", idx, text[idx].charCodeAt(0)));
			}
			if (start < idx) {
				this._writer.write1(text, start, idx - start);
			}
			this._writer.write10("&#x");
			this._writer.write10($.ig.util.intToString1((text[idx].charCodeAt(0)), "X", $.ig.CultureInfo.prototype.invariantCulture()));
			this._writer.write3(';');
			length -= idx - start + 1;
			start = idx + 1;
		}
		if (start < end) {
			this._writer.write1(text, start, end - start);
		}
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextWriter::WriteCheckedBuffer(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void System.Xml.XmlTextWriter::WriteEscapedBuffer(, System.Int32, System.Int32, System.Boolean)" />*/
	writeEscapedBuffer: function (text, index, length, isAttribute) {
		var start = index;
		var end = index + length;
		L0: for (var i = start; i < end; i++) {
			var t1 = text[i];
			L1: while (true) {
				switch (t1) {
					default: continue L0;
					case '&':
					case '<':
					case '>':
						if (start < i) {
							this.writeCheckedBuffer(text, start, i - start);
						}
						this._writer.write3('&');
						switch (text[i]) {
							case '&':
								this._writer.write10("amp;");
								break;
							case '<':
								this._writer.write10("lt;");
								break;
							case '>':
								this._writer.write10("gt;");
								break;
							case '\'':
								this._writer.write10("apos;");
								break;
							case '\"':
								this._writer.write10("quot;");
								break;
						}
						break;
					case '\"':
					case '\'':
						if (isAttribute && text[i] == this._quote_char) {
							t1 = '&';
							continue L1;
						}
						continue L0;
					case '\r':
						if (i + 1 < end && text[i] == '\n') {
							i++;
						}
						t1 = '\n';
						continue L1;
					case '\n':
						if (start < i) {
							this.writeCheckedBuffer(text, start, i - start);
						}
						if (isAttribute) {
							this._writer.write10(text[i] == '\r' ? "&#xD;" : "&#xA;");
							break;
						}
						switch (this._newline_handling) {
							case $.ig.NewLineHandling.prototype.entitize:
								this._writer.write10(text[i] == '\r' ? "&#xD;" : "&#xA;");
								break;
							case $.ig.NewLineHandling.prototype.replace:
								this._writer.write10(this._newline);
								break;
							default:
								this._writer.write3(text[i]);
								break;
						}
						break;
				}
				break;
			}
			start = i + 1;
		}
		if (start < end) {
			this.writeCheckedBuffer(text, start, end - start);
		}
	}
	/*<EndMethod Name="System.Void System.Xml.XmlTextWriter::WriteEscapedBuffer(, System.Int32, System.Int32, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Exception System.Xml.XmlTextWriter::ArgumentOutOfRangeError(System.String)" />*/
	argumentOutOfRangeError: function (name) {
		return new $.ig.ArgumentOutOfRangeException(1, name);
	}
	/*<EndMethod Name="System.Exception System.Xml.XmlTextWriter::ArgumentOutOfRangeError(System.String)" />*/
	,
	/*<BeginMethod Name="System.Exception System.Xml.XmlTextWriter::ArgumentError(System.String)" />*/
	argumentError: function (msg) {
		return new $.ig.ArgumentException(1, msg);
	}
	/*<EndMethod Name="System.Exception System.Xml.XmlTextWriter::ArgumentError(System.String)" />*/
	,
	/*<BeginMethod Name="System.Exception System.Xml.XmlTextWriter::InvalidOperation(System.String)" />*/
	invalidOperation: function (msg) {
		return new $.ig.InvalidOperationException(1, msg);
	}
	/*<EndMethod Name="System.Exception System.Xml.XmlTextWriter::InvalidOperation(System.String)" />*/
	,
	/*<BeginMethod Name="System.Exception System.Xml.XmlTextWriter::StateError(System.String)" />*/
	stateError: function (occured) {
		return this.invalidOperation($.ig.util.stringFormat("This XmlWriter does not accept {0} at this state {1}.", occured, $.ig.WriteState.prototype.getBox(this._state)));
	}
	/*<EndMethod Name="System.Exception System.Xml.XmlTextWriter::StateError(System.String)" />*/
	,
	$type: new $.ig.Type('XmlTextWriter', $.ig.XmlWriter.prototype.$type)
}, true);

/*<EndType Name="System.Xml.XmlTextWriter" />*/

/*<BeginType Name="System.Xml.XmlTextWriter_XmlNodeInfo" />*/

$.ig.util.defType('XmlTextWriter_XmlNodeInfo', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	_prefix: null,
	_localName: null,
	_nS: null,
	_hasSimple: false,
	_hasElements: false,
	_xmlLang: null,
	_xmlSpace: 0,
	$type: new $.ig.Type('XmlTextWriter_XmlNodeInfo', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.Xml.XmlTextWriter_XmlNodeInfo" />*/

/*<BeginType Name="System.Xml.XmlTextWriter_StringUtil" />*/

$.ig.util.defType('XmlTextWriter_StringUtil', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Int32 System.Xml.XmlTextWriter_StringUtil::IndexOf(System.String, System.String)" />*/
	indexOf: function (src, target) {
		return $.ig.XmlTextWriter_StringUtil.prototype._cmp.indexOf1(src, target);
	}
	/*<EndMethod Name="System.Int32 System.Xml.XmlTextWriter_StringUtil::IndexOf(System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Xml.XmlTextWriter_StringUtil::Compare(System.String, System.String)" />*/
	compare: function (s1, s2) {
		return $.ig.XmlTextWriter_StringUtil.prototype._cmp.compare4(s1, s2);
	}
	/*<EndMethod Name="System.Int32 System.Xml.XmlTextWriter_StringUtil::Compare(System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlTextWriter_StringUtil::Format(System.String, )" />*/
	format: function (format, args) {
		return $.ig.util.stringFormat2($.ig.XmlTextWriter_StringUtil.prototype._cul, format, args);
	}
	/*<EndMethod Name="System.String System.Xml.XmlTextWriter_StringUtil::Format(System.String, )" />*/
	,
	$type: new $.ig.Type('XmlTextWriter_StringUtil', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.Xml.XmlTextWriter_StringUtil" />*/

/*<BeginType Name="System.Xml.XmlUrlResolver" />*/

$.ig.util.defType('XmlUrlResolver', 'XmlResolver', {
	_credential: null,
	init: function () {
		$.ig.XmlResolver.prototype.init.call(this);
	},
	/*<BeginProperty Name="System.Net.ICredentials System.Xml.XmlUrlResolver::Credentials()" />*/
	credentials: function (value) {
		this._credential = value;
		return value;
	}
	/*<EndProperty Name="System.Net.ICredentials System.Xml.XmlUrlResolver::Credentials()" />*/
	,
	/*<BeginMethod Name="System.Object System.Xml.XmlUrlResolver::GetEntity(System.Uri, System.String, System.Type)" />*/
	getEntity: function (absoluteUri, role, ofObjectToReturn) {
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndMethod Name="System.Object System.Xml.XmlUrlResolver::GetEntity(System.Uri, System.String, System.Type)" />*/
	,
	/*<BeginMethod Name="System.String System.Xml.XmlUrlResolver::UnescapeRelativeUriBody(System.String)" />*/
	unescapeRelativeUriBody: function (src) {
		return $.ig.util.replace($.ig.util.replace($.ig.util.replace($.ig.util.replace($.ig.util.replace($.ig.util.replace(src, "%3C", "<"), "%3E", ">"), "%23", "#"), "%22", "\""), "%20", " "), "%25", "%");
	}
	/*<EndMethod Name="System.String System.Xml.XmlUrlResolver::UnescapeRelativeUriBody(System.String)" />*/
	,
	$type: new $.ig.Type('XmlUrlResolver', $.ig.XmlResolver.prototype.$type)
}, true);

/*<EndType Name="System.Xml.XmlUrlResolver" />*/

/*<BeginType Name="System.Text.DecoderFallback" />*/

$.ig.util.defType('DecoderFallback', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginProperty Name="System.Text.DecoderFallback System.Text.DecoderFallback::ExceptionFallback()" />*/
	exceptionFallback: function () {
		return $.ig.DecoderFallback.prototype._exception_fallback;
	}
	/*<EndProperty Name="System.Text.DecoderFallback System.Text.DecoderFallback::ExceptionFallback()" />*/
	,
	/*<BeginProperty Name="System.Int32 System.Text.DecoderFallback::MaxCharCount()" />*/
	maxCharCount: function () {
	}
	/*<EndProperty Name="System.Int32 System.Text.DecoderFallback::MaxCharCount()" />*/
	,
	/*<BeginProperty Name="System.Text.DecoderFallback System.Text.DecoderFallback::ReplacementFallback()" />*/
	replacementFallback: function () {
		return $.ig.DecoderFallback.prototype._replacement_fallback;
	}
	/*<EndProperty Name="System.Text.DecoderFallback System.Text.DecoderFallback::ReplacementFallback()" />*/
	,
	/*<BeginProperty Name="System.Text.DecoderFallback System.Text.DecoderFallback::StandardSafeFallback()" />*/
	standardSafeFallback: function () {
		return $.ig.DecoderFallback.prototype._standard_safe_fallback;
	}
	/*<EndProperty Name="System.Text.DecoderFallback System.Text.DecoderFallback::StandardSafeFallback()" />*/
	,
	/*<BeginMethod Name="System.Text.DecoderFallbackBuffer System.Text.DecoderFallback::CreateFallbackBuffer()" />*/
	createFallbackBuffer: function () {
	}
	/*<EndMethod Name="System.Text.DecoderFallbackBuffer System.Text.DecoderFallback::CreateFallbackBuffer()" />*/
	,
	$type: new $.ig.Type('DecoderFallback', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.Text.DecoderFallback" />*/

/*<BeginType Name="System.Text.DecoderExceptionFallback" />*/

$.ig.util.defType('DecoderExceptionFallback', 'DecoderFallback', {
	init: function () {
		$.ig.DecoderFallback.prototype.init.call(this);
	},
	/*<BeginProperty Name="System.Int32 System.Text.DecoderExceptionFallback::MaxCharCount()" />*/
	maxCharCount: function () {
		return 0;
	}
	/*<EndProperty Name="System.Int32 System.Text.DecoderExceptionFallback::MaxCharCount()" />*/
	,
	/*<BeginMethod Name="System.Text.DecoderFallbackBuffer System.Text.DecoderExceptionFallback::CreateFallbackBuffer()" />*/
	createFallbackBuffer: function () {
		return new $.ig.DecoderExceptionFallbackBuffer();
	}
	/*<EndMethod Name="System.Text.DecoderFallbackBuffer System.Text.DecoderExceptionFallback::CreateFallbackBuffer()" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Text.DecoderExceptionFallback::Equals(System.Object)" />*/
	equals: function (value) {
		return ($.ig.util.cast($.ig.DecoderExceptionFallback.prototype.$type, value) !== null);
	}
	/*<EndMethod Name="System.Boolean System.Text.DecoderExceptionFallback::Equals(System.Object)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Text.DecoderExceptionFallback::GetHashCode()" />*/
	getHashCode: function () {
		return 0;
	}
	/*<EndMethod Name="System.Int32 System.Text.DecoderExceptionFallback::GetHashCode()" />*/
	,
	$type: new $.ig.Type('DecoderExceptionFallback', $.ig.DecoderFallback.prototype.$type)
}, true);

/*<EndType Name="System.Text.DecoderExceptionFallback" />*/

/*<BeginType Name="System.Text.DecoderFallbackBuffer" />*/

$.ig.util.defType('DecoderFallbackBuffer', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginProperty Name="System.Int32 System.Text.DecoderFallbackBuffer::Remaining()" />*/
	remaining: function () {
	}
	/*<EndProperty Name="System.Int32 System.Text.DecoderFallbackBuffer::Remaining()" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Text.DecoderFallbackBuffer::Fallback(, System.Int32)" />*/
	fallback: function (bytesUnknown, index) {
	}
	/*<EndMethod Name="System.Boolean System.Text.DecoderFallbackBuffer::Fallback(, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Char System.Text.DecoderFallbackBuffer::GetNextChar()" />*/
	getNextChar: function () {
	}
	/*<EndMethod Name="System.Char System.Text.DecoderFallbackBuffer::GetNextChar()" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Text.DecoderFallbackBuffer::MovePrevious()" />*/
	movePrevious: function () {
	}
	/*<EndMethod Name="System.Boolean System.Text.DecoderFallbackBuffer::MovePrevious()" />*/
	,
	/*<BeginMethod Name="System.Void System.Text.DecoderFallbackBuffer::Reset()" />*/
	reset: function () {
	}
	/*<EndMethod Name="System.Void System.Text.DecoderFallbackBuffer::Reset()" />*/
	,
	$type: new $.ig.Type('DecoderFallbackBuffer', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.Text.DecoderFallbackBuffer" />*/

/*<BeginType Name="System.Text.DecoderExceptionFallbackBuffer" />*/

$.ig.util.defType('DecoderExceptionFallbackBuffer', 'DecoderFallbackBuffer', {
	init: function () {
		$.ig.DecoderFallbackBuffer.prototype.init.call(this);
	},
	/*<BeginProperty Name="System.Int32 System.Text.DecoderExceptionFallbackBuffer::Remaining()" />*/
	remaining: function () {
		return 0;
	}
	/*<EndProperty Name="System.Int32 System.Text.DecoderExceptionFallbackBuffer::Remaining()" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Text.DecoderExceptionFallbackBuffer::Fallback(, System.Int32)" />*/
	fallback: function (bytesUnknown, index) {
		throw new $.ig.DecoderFallbackException(3, null, bytesUnknown, index);
	}
	/*<EndMethod Name="System.Boolean System.Text.DecoderExceptionFallbackBuffer::Fallback(, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Char System.Text.DecoderExceptionFallbackBuffer::GetNextChar()" />*/
	getNextChar: function () {
		return $.ig.String.prototype.charMinValue();
	}
	/*<EndMethod Name="System.Char System.Text.DecoderExceptionFallbackBuffer::GetNextChar()" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Text.DecoderExceptionFallbackBuffer::MovePrevious()" />*/
	movePrevious: function () {
		return false;
	}
	/*<EndMethod Name="System.Boolean System.Text.DecoderExceptionFallbackBuffer::MovePrevious()" />*/
	,
	$type: new $.ig.Type('DecoderExceptionFallbackBuffer', $.ig.DecoderFallbackBuffer.prototype.$type)
}, true);

/*<EndType Name="System.Text.DecoderExceptionFallbackBuffer" />*/

/*<BeginType Name="System.Text.DecoderReplacementFallback" />*/

$.ig.util.defType('DecoderReplacementFallback', 'DecoderFallback', {
	init: function (initNumber) {
		if (initNumber > 0) {
			switch (initNumber) {
				case 1:
					this.init1.apply(this, arguments);
					break;
			}
			return;
		}
		$.ig.DecoderReplacementFallback.prototype.init1.call(this, 1, "?");
	},
	init1: function (initNumber, replacement) {
		$.ig.DecoderFallback.prototype.init.call(this);
		if (replacement == null) {
			throw new $.ig.ArgumentNullException(0, "replacement");
		}
		this._replacement = replacement;
	},
	_replacement: null,
	/*<BeginProperty Name="System.String System.Text.DecoderReplacementFallback::DefaultString()" />*/
	defaultString: function () {
		return this._replacement;
	}
	/*<EndProperty Name="System.String System.Text.DecoderReplacementFallback::DefaultString()" />*/
	,
	/*<BeginProperty Name="System.Int32 System.Text.DecoderReplacementFallback::MaxCharCount()" />*/
	maxCharCount: function () {
		return this._replacement.length;
	}
	/*<EndProperty Name="System.Int32 System.Text.DecoderReplacementFallback::MaxCharCount()" />*/
	,
	/*<BeginMethod Name="System.Text.DecoderFallbackBuffer System.Text.DecoderReplacementFallback::CreateFallbackBuffer()" />*/
	createFallbackBuffer: function () {
		return new $.ig.DecoderReplacementFallbackBuffer(this);
	}
	/*<EndMethod Name="System.Text.DecoderFallbackBuffer System.Text.DecoderReplacementFallback::CreateFallbackBuffer()" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Text.DecoderReplacementFallback::Equals(System.Object)" />*/
	equals: function (value) {
		var f = $.ig.util.cast($.ig.DecoderReplacementFallback.prototype.$type, value);
		return f != null && this._replacement == f._replacement;
	}
	/*<EndMethod Name="System.Boolean System.Text.DecoderReplacementFallback::Equals(System.Object)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Text.DecoderReplacementFallback::GetHashCode()" />*/
	getHashCode: function () {
		return this._replacement.getHashCode();
	}
	/*<EndMethod Name="System.Int32 System.Text.DecoderReplacementFallback::GetHashCode()" />*/
	,
	$type: new $.ig.Type('DecoderReplacementFallback', $.ig.DecoderFallback.prototype.$type)
}, true);

/*<EndType Name="System.Text.DecoderReplacementFallback" />*/

/*<BeginType Name="System.Text.DecoderFallbackException" />*/

$.ig.util.defType('DecoderFallbackException', 'ArgumentException', {
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
		$.ig.DecoderFallbackException.prototype.init1.call(this, 1, null);
	},
	init1: function (initNumber, message) {
		this._index = -1;
		$.ig.ArgumentException.prototype.init1.call(this, 1, message);
	},
	init2: function (initNumber, message, innerException) {
		this._index = -1;
		$.ig.ArgumentException.prototype.init3.call(this, 3, message, innerException);
	},
	init3: function (initNumber, message, bytesUnknown, index) {
		this._index = -1;
		$.ig.ArgumentException.prototype.init1.call(this, 1, message);
		this._bytes_unknown = bytesUnknown;
		this._index = index;
	},
	_bytes_unknown: null,
	_index: 0,
	/*<BeginProperty Name=" System.Text.DecoderFallbackException::BytesUnknown()" />*/
	bytesUnknown: function () {
		return this._bytes_unknown;
	}
	/*<EndProperty Name=" System.Text.DecoderFallbackException::BytesUnknown()" />*/
	,
	/*<BeginProperty Name="System.Int32 System.Text.DecoderFallbackException::Index()" />*/
	index: function () {
		return this._index;
	}
	/*<EndProperty Name="System.Int32 System.Text.DecoderFallbackException::Index()" />*/
	,
	$type: new $.ig.Type('DecoderFallbackException', $.ig.ArgumentException.prototype.$type)
}, true);

/*<EndType Name="System.Text.DecoderFallbackException" />*/

/*<BeginType Name="System.Text.DecoderReplacementFallbackBuffer" />*/

$.ig.util.defType('DecoderReplacementFallbackBuffer', 'DecoderFallbackBuffer', {
	_fallback_assigned: false,
	_current: 0,
	_replacement: null,
	init: function (fallback) {
		$.ig.DecoderFallbackBuffer.prototype.init.call(this);
		if (fallback == null) {
			throw new $.ig.ArgumentNullException(0, "fallback");
		}
		this._replacement = fallback.defaultString();
		this._current = 0;
	},
	/*<BeginProperty Name="System.Int32 System.Text.DecoderReplacementFallbackBuffer::Remaining()" />*/
	remaining: function () {
		return this._fallback_assigned ? this._replacement.length - this._current : 0;
	}
	/*<EndProperty Name="System.Int32 System.Text.DecoderReplacementFallbackBuffer::Remaining()" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Text.DecoderReplacementFallbackBuffer::Fallback(, System.Int32)" />*/
	fallback: function (bytesUnknown, index) {
		if (bytesUnknown == null) {
			throw new $.ig.ArgumentNullException(0, "bytesUnknown");
		}
		if (this._fallback_assigned && this.remaining() != 0) {
			throw new $.ig.ArgumentException(1, "Reentrant Fallback method invocation occured. It might be because either this FallbackBuffer is incorrectly shared by multiple threads, invoked inside Encoding recursively, or Reset invocation is forgotten.");
		}
		if (index < 0 || bytesUnknown.length < index) {
			throw new $.ig.ArgumentOutOfRangeException(1, "index");
		}
		this._fallback_assigned = true;
		this._current = 0;
		return this._replacement.length > 0;
	}
	/*<EndMethod Name="System.Boolean System.Text.DecoderReplacementFallbackBuffer::Fallback(, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Char System.Text.DecoderReplacementFallbackBuffer::GetNextChar()" />*/
	getNextChar: function () {
		if (!this._fallback_assigned) {
			return '\0';
		}
		if (this._current >= this._replacement.length) {
			return $.ig.String.prototype.charMinValue();
		}
		return this._replacement.charAt(this._current++);
	}
	/*<EndMethod Name="System.Char System.Text.DecoderReplacementFallbackBuffer::GetNextChar()" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Text.DecoderReplacementFallbackBuffer::MovePrevious()" />*/
	movePrevious: function () {
		if (this._current == 0) {
			return false;
		}
		this._current--;
		return true;
	}
	/*<EndMethod Name="System.Boolean System.Text.DecoderReplacementFallbackBuffer::MovePrevious()" />*/
	,
	/*<BeginMethod Name="System.Void System.Text.DecoderReplacementFallbackBuffer::Reset()" />*/
	reset: function () {
		this._fallback_assigned = false;
		this._current = 0;
	}
	/*<EndMethod Name="System.Void System.Text.DecoderReplacementFallbackBuffer::Reset()" />*/
	,
	$type: new $.ig.Type('DecoderReplacementFallbackBuffer', $.ig.DecoderFallbackBuffer.prototype.$type)
}, true);

/*<EndType Name="System.Text.DecoderReplacementFallbackBuffer" />*/

/*<BeginStatics Name="System.FormatException2" />*/

$.ig.FormatException2.prototype._result = (2148734263);
/*<EndStatics Name="System.FormatException2" />*/

/*<BeginStatics Name="System.IO.TextWriter" />*/

$.ig.TextWriter.prototype.$null = new $.ig.TextWriter_NullTextWriter();
/*<EndStatics Name="System.IO.TextWriter" />*/

/*<BeginStatics Name="System.IO.StreamWriter" />*/

$.ig.StreamWriter.prototype._defaultBufferSize = 1024;
$.ig.StreamWriter.prototype._defaultFileBufferSize = 4096;
$.ig.StreamWriter.prototype._minimumBufferSize = 256;
$.ig.StreamWriter.prototype.null1 = new $.ig.StreamWriter(2, new $.ig.NullStream(), $.ig.Encoding.prototype.uTF8Unmarked(), 1);
/*<EndStatics Name="System.IO.StreamWriter" />*/

/*<BeginStatics Name="System.Xml.NameTable" />*/

$.ig.NameTable.prototype._iNITIAL_BUCKETS = 2 << 6;
/*<EndStatics Name="System.Xml.NameTable" />*/

/*<BeginStatics Name="System.Xml.XmlChar" />*/

$.ig.XmlChar.prototype.whitespaceChars = [ ' ', '\n', '\t', '\r' ];
$.ig.XmlChar.prototype._firstNamePages = [ 2, 3, 4, 5, 6, 7, 8, 0, 0, 9, 10, 11, 12, 13, 14, 15, 16, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 19, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
$.ig.XmlChar.prototype._namePages = [ 25, 3, 26, 27, 28, 29, 30, 0, 0, 31, 32, 33, 34, 35, 36, 37, 16, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 19, 38, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 39, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
$.ig.XmlChar.prototype._nameBitmap = [ 0, 0, 0, 0, 0, 0, 0, 0, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 0, 67108864, 2281701374, 134217726, 0, 0, 4286578687, 4286578687, 4294967295, 2146697215, 4294966782, 2147483647, 4294967295, 4294967295, 4294959119, 4231135231, 16777215, 0, 4294901760, 4294967295, 4294967295, 4160750079, 3, 0, 0, 0, 0, 0, 4294956864, 4294967291, 1417641983, 1048573, 4294959102, 4294967295, 3758030847, 4294967295, 4294901763, 4294967295, 4294908319, 54513663, 0, 4294836224, 41943039, 4294967294, 127, 0, 4294901760, 460799, 0, 134217726, 2046, 4294836224, 4294967295, 2097151999, 3112959, 96, 4294967264, 603979775, 4278190080, 3, 4294549472, 63307263, 2952790016, 196611, 4294543328, 57540095, 1577058304, 1835008, 4294684640, 602799615, 0, 1, 4294549472, 600702463, 2952790016, 3, 3594373088, 62899992, 0, 0, 4294828000, 66059775, 0, 3, 4294828000, 66059775, 1073741824, 3, 4294828000, 67108351, 0, 3, 0, 0, 0, 0, 4294967294, 884735, 63, 0, 4277151126, 537750702, 31, 0, 0, 0, 4294967039, 1023, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4294967295, 4294901823, 8388607, 514797, 1342177280, 2184269825, 2908843, 1073741824, 4118857984, 7, 33622016, 4294967295, 4294967295, 4294967295, 4294967295, 268435455, 4294967295, 4294967295, 67108863, 1061158911, 4294967295, 2868854591, 1073741823, 4294967295, 1608515583, 265232348, 534519807, 0, 19520, 0, 0, 7, 0, 0, 0, 128, 1022, 4294967294, 4294967295, 2097151, 4294967294, 4294967295, 134217727, 4294967264, 8191, 0, 0, 0, 0, 0, 0, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 63, 0, 0, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 15, 0, 0, 0, 134176768, 2281701374, 134217726, 0, 8388608, 4286578687, 4286578687, 16777215, 0, 4294901760, 4294967295, 4294967295, 4160750079, 196611, 0, 4294967295, 4294967295, 63, 3, 4294956992, 4294967291, 1417641983, 1048573, 4294959102, 4294967295, 3758030847, 4294967295, 4294901883, 4294967295, 4294908319, 54513663, 0, 4294836224, 41943039, 4294967294, 4294836351, 3154116603, 4294901782, 460799, 0, 134217726, 524287, 4294902783, 4294967295, 2097151999, 4293885951, 67059199, 4294967278, 4093640703, 4280172543, 65487, 4294549486, 3552968191, 2961193375, 262095, 4294543332, 3547201023, 1577073031, 2097088, 4294684654, 4092460543, 15295, 65473, 4294549486, 4090363391, 2965387663, 65475, 3594373100, 3284125464, 8404423, 65408, 4294828014, 3287285247, 6307295, 65475, 4294828012, 3287285247, 1080049119, 65475, 4294828012, 3288333823, 8404431, 65475, 0, 0, 0, 0, 4294967294, 134184959, 67076095, 0, 4277151126, 1006595246, 67059551, 0, 50331648, 3265266687, 4294967039, 4294837247, 4273934303, 50216959, 0, 0, 0, 0, 0, 0, 0, 0, 536805376, 2, 160, 4128766, 4294967294, 4294967295, 1713373183, 4294967294, 4294967295, 2013265919 ];
/*<EndStatics Name="System.Xml.XmlChar" />*/

/*<BeginStatics Name="System.Xml.XmlConvert" />*/

$.ig.XmlConvert.prototype._encodedColon = "_x003A_";
$.ig.XmlConvert.prototype._floatStyle = $.ig.NumberStyles.prototype.allowCurrencySymbol | $.ig.NumberStyles.prototype.allowExponent | $.ig.NumberStyles.prototype.allowDecimalPoint | $.ig.NumberStyles.prototype.allowLeadingSign | $.ig.NumberStyles.prototype.allowLeadingWhite | $.ig.NumberStyles.prototype.allowTrailingWhite;
$.ig.XmlConvert.prototype._integerStyle = $.ig.NumberStyles.prototype.integer | $.ig.NumberStyles.prototype.allowLeadingWhite | $.ig.NumberStyles.prototype.allowTrailingWhite;
$.ig.XmlConvert.prototype._datetimeFormats = [ "yyyy-MM-ddTHH:mm:sszzz", "yyyy-MM-ddTHH:mm:ss.fzzz", "yyyy-MM-ddTHH:mm:ss.ffzzz", "yyyy-MM-ddTHH:mm:ss.fffzzz", "yyyy-MM-ddTHH:mm:ss.ffffzzz", "yyyy-MM-ddTHH:mm:ss.fffffzzz", "yyyy-MM-ddTHH:mm:ss.ffffffzzz", "yyyy-MM-ddTHH:mm:ss.fffffffzzz", "yyyy-MM-ddTHH:mm:ssZ", "yyyy-MM-ddTHH:mm:ss.fZ", "yyyy-MM-ddTHH:mm:ss.ffZ", "yyyy-MM-ddTHH:mm:ss.fffZ", "yyyy-MM-ddTHH:mm:ss.ffffZ", "yyyy-MM-ddTHH:mm:ss.fffffZ", "yyyy-MM-ddTHH:mm:ss.ffffffZ", "yyyy-MM-ddTHH:mm:ss.fffffffZ", "yyyy-MM-ddTHH:mm:ss", "yyyy-MM-ddTHH:mm:ss.f", "yyyy-MM-ddTHH:mm:ss.ff", "yyyy-MM-ddTHH:mm:ss.fff", "yyyy-MM-ddTHH:mm:ss.ffff", "yyyy-MM-ddTHH:mm:ss.fffff", "yyyy-MM-ddTHH:mm:ss.ffffff", "yyyy-MM-ddTHH:mm:ss.fffffff", "HH:mm:ss", "HH:mm:ss.f", "HH:mm:ss.ff", "HH:mm:ss.fff", "HH:mm:ss.ffff", "HH:mm:ss.fffff", "HH:mm:ss.ffffff", "HH:mm:ss.fffffff", "HH:mm:sszzz", "HH:mm:ss.fzzz", "HH:mm:ss.ffzzz", "HH:mm:ss.fffzzz", "HH:mm:ss.ffffzzz", "HH:mm:ss.fffffzzz", "HH:mm:ss.ffffffzzz", "HH:mm:ss.fffffffzzz", "HH:mm:ssZ", "HH:mm:ss.fZ", "HH:mm:ss.ffZ", "HH:mm:ss.fffZ", "HH:mm:ss.ffffZ", "HH:mm:ss.fffffZ", "HH:mm:ss.ffffffZ", "HH:mm:ss.fffffffZ", "yyyy-MM-dd", "yyyy-MM-ddzzz", "yyyy-MM-ddZ", "yyyy-MM", "yyyy-MMzzz", "yyyy-MMZ", "yyyy", "yyyyzzz", "yyyyZ", "--MM-dd", "--MM-ddzzz", "--MM-ddZ", "---dd", "---ddzzz", "---ddZ" ];
/*<EndStatics Name="System.Xml.XmlConvert" />*/

/*<BeginStatics Name="System.Xml.XmlException" />*/

$.ig.XmlException.prototype._xml_DefaultException = "Xml_DefaultException";
$.ig.XmlException.prototype._xml_UserException = "Xml_UserException";
/*<EndStatics Name="System.Xml.XmlException" />*/

/*<BeginStatics Name="System.Xml.XmlNamespaceManager" />*/

$.ig.XmlNamespaceManager.prototype.xmlnsXml = "http://www.w3.org/XML/1998/namespace";
$.ig.XmlNamespaceManager.prototype.xmlnsXmlns = "http://www.w3.org/2000/xmlns/";
$.ig.XmlNamespaceManager.prototype.prefixXml = "xml";
$.ig.XmlNamespaceManager.prototype.prefixXmlns = "xmlns";
/*<EndStatics Name="System.Xml.XmlNamespaceManager" />*/

/*<BeginStatics Name="System.Xml.NonBlockingStreamReader" />*/

$.ig.NonBlockingStreamReader.prototype._defaultBufferSize = 1024;
$.ig.NonBlockingStreamReader.prototype._defaultFileBufferSize = 4096;
$.ig.NonBlockingStreamReader.prototype._minimumBufferSize = 128;
/*<EndStatics Name="System.Xml.NonBlockingStreamReader" />*/

/*<BeginStatics Name="System.Xml.XmlStreamReader" />*/

$.ig.XmlStreamReader.prototype._invalidDataException = new $.ig.XmlException(3, "invalid data.");
/*<EndStatics Name="System.Xml.XmlStreamReader" />*/

/*<BeginStatics Name="System.Xml.XmlInputStream" />*/

$.ig.XmlInputStream.prototype.strictUTF8 = null;
$.ig.XmlInputStream.prototype._encodingException = new $.ig.XmlException(3, "invalid encoding specification.");
if ($.ig.XmlInputStream.prototype.staticInit && !$.ig.XmlInputStream.prototype.xmlInputStreamStaticInitCalled) { $.ig.XmlInputStream.prototype.staticInit(); $.ig.XmlInputStream.prototype.xmlInputStreamStaticInitCalled = true; }
/*<EndStatics Name="System.Xml.XmlInputStream" />*/

/*<BeginStatics Name="System.Xml.XmlTextReader" />*/

$.ig.XmlTextReader.prototype._peekCharCapacity = 1024;
/*<EndStatics Name="System.Xml.XmlTextReader" />*/

/*<BeginStatics Name="System.Xml.XmlTextWriter" />*/

$.ig.XmlTextWriter.prototype._xmlNamespace = "http://www.w3.org/XML/1998/namespace";
$.ig.XmlTextWriter.prototype._xmlnsNamespace = "http://www.w3.org/2000/xmlns/";
$.ig.XmlTextWriter.prototype._unmarked_utf8encoding = new $.ig.UTF8Encoding(0, false, false);
$.ig.XmlTextWriter.prototype._escaped_text_chars = null;
$.ig.XmlTextWriter.prototype._escaped_attr_chars = null;
/*<EndStatics Name="System.Xml.XmlTextWriter" />*/

/*<BeginStatics Name="System.Xml.XmlTextWriter_StringUtil" />*/

$.ig.XmlTextWriter_StringUtil.prototype._cul = $.ig.CultureInfo.prototype.invariantCulture();
$.ig.XmlTextWriter_StringUtil.prototype._cmp = $.ig.CultureInfo.prototype.invariantCulture().compareInfo();
/*<EndStatics Name="System.Xml.XmlTextWriter_StringUtil" />*/

/*<BeginStatics Name="System.Text.DecoderFallback" />*/

$.ig.DecoderFallback.prototype._exception_fallback = new $.ig.DecoderExceptionFallback();
$.ig.DecoderFallback.prototype._replacement_fallback = new $.ig.DecoderReplacementFallback(0);
$.ig.DecoderFallback.prototype._standard_safe_fallback = new $.ig.DecoderReplacementFallback(1, "�");
/*<EndStatics Name="System.Text.DecoderFallback" />*/


/*<BeginFooter/>*/
}));// REMOVE_FROM_COMBINED_FILES
/*<EndFooter/>*/

