/*!@license
* Infragistics.Web.ClientUI infragistics.ext_text.js 17.1.20171.1012
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
*/
/*<BeginHeader/>*/
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		define( [
			'./infragistics.util',
			'./infragistics.ext_core'
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
$.ig.globalDefs.$$8 = $$t;
$$0 = $.ig.globalDefs.$$0;
$$1 = $.ig.globalDefs.$$1;
$$6 = $.ig.globalDefs.$$6;
$.ig.$currDefinitions = $$t;
$.ig.util.bulkDefine([
"Encoding:a",
"UnicodeEncoding:b",
"UTF8Encoding:c",
"AsciiEncoding:d",
"DefaultDecoder:f",
"GroupCollection:j",
"Match:k",
"Regex:l"]);
/*<BeginType Name="System.Text.RegularExpressions.RegexOptions" />*/

$.ig.util.defEnum('RegexOptions', false, false, {
	None: 0,
	IgnoreCase: 1,
	Multiline: 2,
	ExplicitCapture: 4,
	Compiled: 8,
	Singleline: 16,
	IgnorePatternWhitespace: 32,
	RightToLeft: 64,
	ECMAScript: 256,
	CultureInvariant: 512
});

/*<EndType Name="System.Text.RegularExpressions.RegexOptions" />*/

/*<BeginType Name="System.Text.Encoding" />*/

$.ig.util.defType('Encoding', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginProperty Name="System.Text.Encoding System.Text.Encoding::UTF8()" />*/
	uTF8: function () {
		if ($.ig.Encoding.prototype.__utfEncoding == null) {
			$.ig.Encoding.prototype.__utfEncoding = new $.ig.UTF8Encoding(1);
		}
		return $.ig.Encoding.prototype.__utfEncoding;
	}
	/*<EndProperty Name="System.Text.Encoding System.Text.Encoding::UTF8()" />*/
	,
	/*<BeginProperty Name="System.Text.Encoding System.Text.Encoding::UTF8Unmarked()" />*/
	uTF8Unmarked: function () {
		if ($.ig.Encoding.prototype.__utf8Unmarked == null) {
			$.ig.Encoding.prototype.__utf8Unmarked = new $.ig.UTF8Encoding(1);
		}
		return $.ig.Encoding.prototype.__utf8Unmarked;
	}
	/*<EndProperty Name="System.Text.Encoding System.Text.Encoding::UTF8Unmarked()" />*/
	,
	/*<BeginProperty Name="System.Text.Encoding System.Text.Encoding::Unicode()" />*/
	unicode: function () {
		if ($.ig.Encoding.prototype.__unicodeEncoding == null) {
			$.ig.Encoding.prototype.__unicodeEncoding = new $.ig.UnicodeEncoding(0);
		}
		return $.ig.Encoding.prototype.__unicodeEncoding;
	}
	/*<EndProperty Name="System.Text.Encoding System.Text.Encoding::Unicode()" />*/
	,
	/*<BeginMethod Name="System.String System.Text.Encoding::GetString(, System.Int32, System.Int32)" />*/
	getString1: function (bytes, startIndex, length) {
		return "";
	}
	/*<EndMethod Name="System.String System.Text.Encoding::GetString(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Text.Encoding::GetBytes(, System.Int32, System.Int32, , System.Int32)" />*/
	getBytes2: function (chars, charIndex, charCount, bytes, byteIndex) {
	}
	/*<EndMethod Name="System.Int32 System.Text.Encoding::GetBytes(, System.Int32, System.Int32, , System.Int32)" />*/
	,
	/*<BeginMethod Name=" System.Text.Encoding::GetBytes(, System.Int32, System.Int32)" />*/
	getBytes: function (chars, index, count) {
		var array = new Array(this.getByteCount(chars, index, count));
		this.getBytes2(chars, index, count, array, 0);
		return array;
	}
	/*<EndMethod Name=" System.Text.Encoding::GetBytes(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name=" System.Text.Encoding::GetBytes(System.String)" />*/
	getBytes1: function (input) {
		if (input == null) {
			throw new $.ig.ArgumentNullException(0, "input");
		}
		var array = new Array(input.length);
		for (var i = 0; i < input.length; i++) {
			array[i] = input.charAt(i);
		}
		return this.getBytes(array, 0, array.length);
	}
	/*<EndMethod Name=" System.Text.Encoding::GetBytes(System.String)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Text.Encoding::GetByteCount(, System.Int32, System.Int32)" />*/
	getByteCount: function (chars, index, count) {
	}
	/*<EndMethod Name="System.Int32 System.Text.Encoding::GetByteCount(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.String System.Text.Encoding::GetString()" />*/
	getString: function (bytes) {
		return this.getString1(bytes, 0, bytes.length);
	}
	/*<EndMethod Name="System.String System.Text.Encoding::GetString()" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Text.Encoding::GetCharCount()" />*/
	getCharCount: function (bytes) {
		if (bytes == null) {
			throw new $.ig.ArgumentNullException(0, "bytes");
		}
		return this.getCharCount1(bytes, 0, bytes.length);
	}
	/*<EndMethod Name="System.Int32 System.Text.Encoding::GetCharCount()" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Text.Encoding::GetCharCount(, System.Int32, System.Int32)" />*/
	getCharCount1: function (bytes, index, count) {
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndMethod Name="System.Int32 System.Text.Encoding::GetCharCount(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Text.Encoding::GetChars(, System.Int32, System.Int32, , System.Int32)" />*/
	getChars: function (bytes, byteIndex, byteCount, chars, charIndex) {
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndMethod Name="System.Int32 System.Text.Encoding::GetChars(, System.Int32, System.Int32, , System.Int32)" />*/
	,
	/*<BeginProperty Name="System.Text.Encoding System.Text.Encoding::ASCII()" />*/
	aSCII: function () {
		if ($.ig.Encoding.prototype.__asciiEncoding == null) {
			$.ig.Encoding.prototype.__asciiEncoding = new $.ig.AsciiEncoding(1);
		}
		return $.ig.Encoding.prototype.__asciiEncoding;
	}
	/*<EndProperty Name="System.Text.Encoding System.Text.Encoding::ASCII()" />*/
	,
	/*<BeginMethod Name="System.Text.Decoder System.Text.Encoding::GetDecoder()" />*/
	getDecoder: function () {
		return new $.ig.DefaultDecoder(this);
	}
	/*<EndMethod Name="System.Text.Decoder System.Text.Encoding::GetDecoder()" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Text.Encoding::GetBytes(System.String, System.Int32, System.Int32, , System.Int32)" />*/
	getBytes3: function (s, charIndex, charCount, bytes, byteIndex) {
		return this.getBytes2($.ig.util.toCharArray(s), charIndex, charCount, bytes, byteIndex);
	}
	/*<EndMethod Name="System.Int32 System.Text.Encoding::GetBytes(System.String, System.Int32, System.Int32, , System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Text.Encoding::GetMaxCharCount(System.Int32)" />*/
	getMaxCharCount: function (size) {
		return size;
	}
	/*<EndMethod Name="System.Int32 System.Text.Encoding::GetMaxCharCount(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Text.Encoding::GetMaxByteCount(System.Int32)" />*/
	getMaxByteCount: function (size) {
		return size + 1;
	}
	/*<EndMethod Name="System.Int32 System.Text.Encoding::GetMaxByteCount(System.Int32)" />*/
	,
	/*<BeginMethod Name=" System.Text.Encoding::GetPreamble()" />*/
	getPreamble: function () {
		return new Array(0);
	}
	/*<EndMethod Name=" System.Text.Encoding::GetPreamble()" />*/
	,
	/*<BeginProperty Name="System.Text.Encoding System.Text.Encoding::BigEndianUnicode()" />*/
	bigEndianUnicode: function () {
		if ($.ig.Encoding.prototype.__bigEndianUnicodeEncoding == null) {
			$.ig.Encoding.prototype.__bigEndianUnicodeEncoding = new $.ig.UnicodeEncoding(1, true, false);
		}
		return $.ig.Encoding.prototype.__bigEndianUnicodeEncoding;
	}
	/*<EndProperty Name="System.Text.Encoding System.Text.Encoding::BigEndianUnicode()" />*/
	,
	/*<BeginProperty Name="System.Text.Encoding System.Text.Encoding::Default()" />*/
	defaultValue: function () {
		return $.ig.Encoding.prototype.aSCII();
	}
	/*<EndProperty Name="System.Text.Encoding System.Text.Encoding::Default()" />*/
	,
	/*<BeginMethod Name="System.Text.Encoding System.Text.Encoding::GetEncoding(System.String)" />*/
	getEncoding: function (name) {
		switch (name.toUpperCase()) {
			case "ASCII": return $.ig.Encoding.prototype.aSCII();
			case "UNICODE": return $.ig.Encoding.prototype.unicode();
			case "UTF-8": return $.ig.Encoding.prototype.uTF8();
			default: throw new $.ig.ArgumentException(1, "'" + name + "' is not a valid encoding name.");
		}
	}
	/*<EndMethod Name="System.Text.Encoding System.Text.Encoding::GetEncoding(System.String)" />*/
	,
	/*<BeginProperty Name="System.String System.Text.Encoding::WebName()" />*/
	webName: function () {
		throw new $.ig.NotImplementedException(0);
		return null;
	}
	/*<EndProperty Name="System.String System.Text.Encoding::WebName()" />*/
	,
	$type: new $.ig.Type('Encoding', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.Text.Encoding" />*/

/*<BeginType Name="System.Text.UnicodeEncoding" />*/

$.ig.util.defType('UnicodeEncoding', 'Encoding', {
	__bigEndian: false,
	/*<BeginMethod Name="System.String System.Text.UnicodeEncoding::GetString(, System.Int32, System.Int32)" />*/
	getString1: function (bytes_, startIndex, length) {
		var ret = "";
		var end = startIndex + length;
		for (var i_ = startIndex; i_ < end; i_ = i_ + 2) {
			if (i_ + 1 >= end) {
				ret = ret + '�';
			} else {
				var bits0;
				var bits1;
				if (this.__bigEndian) {
					bits0 = (bytes_[i_ + 1]).toString(16);
					bits1 = (bytes_[i_]).toString(16);
				} else {
					bits0 = (bytes_[i_]).toString(16);
					bits1 = (bytes_[i_ + 1]).toString(16);
				}
				if (bits0.length == 1) {
					bits0 = "0" + bits0;
				}
				if (bits1.length == 1) {
					bits1 = "0" + bits1;
				}
				var code = $.ig.Number.prototype.parseInt(bits1 + bits0, 16);
				ret = ret + String.fromCharCode(code);
			}
		}
		return ret;
	}
	/*<EndMethod Name="System.String System.Text.UnicodeEncoding::GetString(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Text.UnicodeEncoding::GetCharCount(, System.Int32, System.Int32)" />*/
	getCharCount1: function (bytes, index, count) {
		return $.ig.intDivide(count, 2);
	}
	/*<EndMethod Name="System.Int32 System.Text.UnicodeEncoding::GetCharCount(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name=" System.Text.UnicodeEncoding::GetBytes(, System.Int32, System.Int32)" />*/
	getBytes: function (chars, index, count) {
		return $.ig.Encoding.prototype.getBytes.call(this, chars, index, count);
	}
	/*<EndMethod Name=" System.Text.UnicodeEncoding::GetBytes(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name=" System.Text.UnicodeEncoding::GetBytes(System.String)" />*/
	getBytes1: function (input) {
		var bytes = new Array(input.length * 2);
		this.getBytes3(input, 0, input.length, bytes, 0);
		return bytes;
	}
	/*<EndMethod Name=" System.Text.UnicodeEncoding::GetBytes(System.String)" />*/
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
		$.ig.Encoding.prototype.init.call(this);
	},
	init1: function (initNumber, bigEndian, byteOrderMark) {
		$.ig.Encoding.prototype.init.call(this);
		this.__bigEndian = bigEndian;
	},
	/*<BeginMethod Name="System.Int32 System.Text.UnicodeEncoding::GetMaxByteCount(System.Int32)" />*/
	getMaxByteCount: function (size) {
		return (size + 1) * 2;
	}
	/*<EndMethod Name="System.Int32 System.Text.UnicodeEncoding::GetMaxByteCount(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Text.UnicodeEncoding::GetMaxCharCount(System.Int32)" />*/
	getMaxCharCount: function (size) {
		return $.ig.truncate(Math.ceil(size / 2)) + 1;
	}
	/*<EndMethod Name="System.Int32 System.Text.UnicodeEncoding::GetMaxCharCount(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Text.UnicodeEncoding::GetBytes(System.String, System.Int32, System.Int32, , System.Int32)" />*/
	getBytes3: function (s, charIndex, charCount, bytes, byteIndex) {
		for (var i = charIndex; i < charIndex + charCount; i++) {
			var value = s.charCodeAt(i);
			var lo = (value & 255);
			var hi = ((value >> 8) & 255);
			if (this.__bigEndian) {
				bytes[byteIndex++] = hi;
				bytes[byteIndex++] = lo;
			} else {
				bytes[byteIndex++] = lo;
				bytes[byteIndex++] = hi;
			}
		}
		return charCount * 2;
	}
	/*<EndMethod Name="System.Int32 System.Text.UnicodeEncoding::GetBytes(System.String, System.Int32, System.Int32, , System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Text.UnicodeEncoding::GetByteCount(, System.Int32, System.Int32)" />*/
	getByteCount: function (chars, index, count) {
		throw new $.ig.NotImplementedException(0);
		return 0;
	}
	/*<EndMethod Name="System.Int32 System.Text.UnicodeEncoding::GetByteCount(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Text.UnicodeEncoding::GetBytes(, System.Int32, System.Int32, , System.Int32)" />*/
	getBytes2: function (chars, charIndex, charCount, bytes, byteIndex) {
		throw new $.ig.NotImplementedException(0);
		return 0;
	}
	/*<EndMethod Name="System.Int32 System.Text.UnicodeEncoding::GetBytes(, System.Int32, System.Int32, , System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Text.UnicodeEncoding::GetChars(, System.Int32, System.Int32, , System.Int32)" />*/
	getChars: function (bytes, byteIndex, byteCount, chars, charIndex) {
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndMethod Name="System.Int32 System.Text.UnicodeEncoding::GetChars(, System.Int32, System.Int32, , System.Int32)" />*/
	,
	$type: new $.ig.Type('UnicodeEncoding', $.ig.Encoding.prototype.$type)
}, true);

/*<EndType Name="System.Text.UnicodeEncoding" />*/

/*<BeginType Name="System.Text.UTF8Encoding" />*/

$.ig.util.defType('UTF8Encoding', 'Encoding', {
	init: function (initNumber, encoderShouldEmitUTF8Identifier, throwOnInvalidBytes) {
		if (initNumber > 0) {
			switch (initNumber) {
				case 1:
					this.init1.apply(this, arguments);
					break;
			}
			return;
		}
		$.ig.Encoding.prototype.init.call(this);
	},
	init1: function (initNumber) {
		$.ig.Encoding.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.String System.Text.UTF8Encoding::GetString(, System.Int32, System.Int32)" />*/
	getString1: function (bytes, startIndex, length) {
		var ret = "";
		var i = startIndex;
		var c1 = 0;
		var c2 = 0;
		var c3 = 0;
		while (i < startIndex + length) {
			c1 = bytes[i++];
			if (c1 < 128) {
				ret += String.fromCharCode(c1);
			} else if (c1 > 191 && c1 < 224) {
				if (i >= startIndex + length) {
					throw new $.ig.InvalidOperationException(1, "UTF-8 decoding error.");
				}
				c2 = bytes[i++];
				ret += String.fromCharCode((((c1 & 31) << 6) | (c2 & 63)));
			} else {
				if (i + 1 >= startIndex + length) {
					throw new $.ig.InvalidOperationException(1, "UTF-8 decoding error.");
				}
				c2 = bytes[i++];
				c3 = bytes[i++];
				ret += String.fromCharCode((((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63)));
			}
		}
		return ret;
	}
	/*<EndMethod Name="System.String System.Text.UTF8Encoding::GetString(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Text.UTF8Encoding::GetCharCount(, System.Int32, System.Int32)" />*/
	getCharCount1: function (bytes, index, count) {
		return count;
	}
	/*<EndMethod Name="System.Int32 System.Text.UTF8Encoding::GetCharCount(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Text.UTF8Encoding::GetByteCount(, System.Int32, System.Int32)" />*/
	getByteCount: function (chars, index, count) {
		throw new $.ig.NotImplementedException(0);
		return 0;
	}
	/*<EndMethod Name="System.Int32 System.Text.UTF8Encoding::GetByteCount(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Text.UTF8Encoding::GetBytes(, System.Int32, System.Int32, , System.Int32)" />*/
	getBytes2: function (chars_, charIndex_, charCount_, bytes, byteIndex) {
		var inputUTF8_ = unescape(encodeURIComponent(chars_.slice(charIndex_, charIndex_ + charCount_).join("")));
		for (var i_ = 0; i_ < inputUTF8_.length; i_++) {
			bytes[byteIndex + i_] = inputUTF8_.charCodeAt(i_);
		}
		return inputUTF8_.length;
	}
	/*<EndMethod Name="System.Int32 System.Text.UTF8Encoding::GetBytes(, System.Int32, System.Int32, , System.Int32)" />*/
	,
	/*<BeginMethod Name=" System.Text.UTF8Encoding::GetBytes(, System.Int32, System.Int32)" />*/
	getBytes: function (chars, index, count) {
		return $.ig.Encoding.prototype.getBytes.call(this, chars, index, count);
	}
	/*<EndMethod Name=" System.Text.UTF8Encoding::GetBytes(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name=" System.Text.UTF8Encoding::GetBytes(System.String)" />*/
	getBytes1: function (input_) {
		var bytes = new Array(input_.length);
		var inputUTF8_ = unescape(encodeURIComponent(input_));
		for (var i_ = 0; i_ < inputUTF8_.length; i_++) {
			bytes[i_] = inputUTF8_.charCodeAt(i_);
		}
		return bytes;
	}
	/*<EndMethod Name=" System.Text.UTF8Encoding::GetBytes(System.String)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Text.UTF8Encoding::GetChars(, System.Int32, System.Int32, , System.Int32)" />*/
	getChars: function (bytes, byteIndex, byteCount, chars, charIndex) {
		var originalCharIndex = charIndex;
		var i = byteIndex;
		var c1 = 0;
		var c2 = 0;
		var c3 = 0;
		while (i < byteIndex + byteCount) {
			c1 = bytes[i++];
			if (c1 < 128) {
				chars[charIndex++] = String.fromCharCode(c1);
			} else if (c1 > 191 && c1 < 224) {
				if (i >= byteIndex + byteCount) {
					throw new $.ig.InvalidOperationException(1, "UTF-8 decoding error.");
				}
				c2 = bytes[i++];
				chars[charIndex++] = String.fromCharCode((((c1 & 31) << 6) | (c2 & 63)));
			} else {
				if (i + 1 >= byteIndex + byteCount) {
					throw new $.ig.InvalidOperationException(1, "UTF-8 decoding error.");
				}
				c2 = bytes[i++];
				c3 = bytes[i++];
				chars[charIndex++] = String.fromCharCode((((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63)));
			}
		}
		return charIndex - originalCharIndex;
	}
	/*<EndMethod Name="System.Int32 System.Text.UTF8Encoding::GetChars(, System.Int32, System.Int32, , System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Text.Decoder System.Text.UTF8Encoding::GetDecoder()" />*/
	getDecoder: function () {
		return new $.ig.UTF8Encoding_UTF8Decoder(this);
	}
	/*<EndMethod Name="System.Text.Decoder System.Text.UTF8Encoding::GetDecoder()" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Text.UTF8Encoding::GetMaxByteCount(System.Int32)" />*/
	getMaxByteCount: function (size) {
		return (size + 1) * 3;
	}
	/*<EndMethod Name="System.Int32 System.Text.UTF8Encoding::GetMaxByteCount(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Text.UTF8Encoding::GetMaxCharCount(System.Int32)" />*/
	getMaxCharCount: function (size) {
		return size + 1;
	}
	/*<EndMethod Name="System.Int32 System.Text.UTF8Encoding::GetMaxCharCount(System.Int32)" />*/
	,
	$type: new $.ig.Type('UTF8Encoding', $.ig.Encoding.prototype.$type)
}, true);

/*<EndType Name="System.Text.UTF8Encoding" />*/

/*<BeginType Name="System.Text.Decoder" />*/

$.ig.util.defType('Decoder', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Void System.Text.Decoder::Convert(, System.Int32, System.Int32, , System.Int32, System.Int32, System.Boolean, System.Int32, System.Int32, System.Boolean)" />*/
	convert: function (bytes, byteIndex, byteCount, chars, charIndex, charCount, flush, bytesUsed, charsUsed, completed) {
		throw new $.ig.NotImplementedException(0);
		bytesUsed = 0;
		charsUsed = 0;
		completed = false;
		return {
			p7: bytesUsed,
			p8: charsUsed,
			p9: completed
		};
	}
	/*<EndMethod Name="System.Void System.Text.Decoder::Convert(, System.Int32, System.Int32, , System.Int32, System.Int32, System.Boolean, System.Int32, System.Int32, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Text.Decoder::GetCharCount(, System.Int32, System.Int32)" />*/
	getCharCount: function (bytes, index, count) {
	}
	/*<EndMethod Name="System.Int32 System.Text.Decoder::GetCharCount(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Text.Decoder::GetCharCount(, System.Int32, System.Int32, System.Boolean)" />*/
	getCharCount1: function (bytes, index, count, flush) {
		throw new $.ig.NotImplementedException(0);
		return 0;
	}
	/*<EndMethod Name="System.Int32 System.Text.Decoder::GetCharCount(, System.Int32, System.Int32, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Text.Decoder::GetChars(, System.Int32, System.Int32, , System.Int32)" />*/
	getChars: function (bytes, byteIndex, byteCount, chars, charIndex) {
	}
	/*<EndMethod Name="System.Int32 System.Text.Decoder::GetChars(, System.Int32, System.Int32, , System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Text.Decoder::GetChars(, System.Int32, System.Int32, , System.Int32, System.Boolean)" />*/
	getChars1: function (bytes, byteIndex, byteCount, chars, charIndex, flush) {
		throw new $.ig.NotImplementedException(0);
		return 0;
	}
	/*<EndMethod Name="System.Int32 System.Text.Decoder::GetChars(, System.Int32, System.Int32, , System.Int32, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void System.Text.Decoder::Reset()" />*/
	reset: function () {
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndMethod Name="System.Void System.Text.Decoder::Reset()" />*/
	,
	$type: new $.ig.Type('Decoder', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.Text.Decoder" />*/

/*<BeginType Name="System.Text.UTF8Encoding_UTF8Decoder" />*/

$.ig.util.defType('UTF8Encoding_UTF8Decoder', 'Decoder', {
	__c1: 0,
	__c2: 0,
	__c3: 0,
	__encoding: null,
	init: function (encoding) {
		$.ig.Decoder.prototype.init.call(this);
		this.__encoding = encoding;
	},
	/*<BeginMethod Name="System.Int32 System.Text.UTF8Encoding_UTF8Decoder::GetCharCount(, System.Int32, System.Int32)" />*/
	getCharCount: function (bytes, index, count) {
		return this.getCharCount1(bytes, index, count, false);
	}
	/*<EndMethod Name="System.Int32 System.Text.UTF8Encoding_UTF8Decoder::GetCharCount(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Text.UTF8Encoding_UTF8Decoder::GetCharCount(, System.Int32, System.Int32, System.Boolean)" />*/
	getCharCount1: function (bytes, index, count, flush) {
		var charCount = 0;
		var i = index;
		while (i < index + count) {
			if (this.__c1 == 0) {
				this.__c1 = bytes[i++];
			}
			if (this.__c1 < 128) {
				charCount++;
			} else {
				if (i >= index + count) {
					break;
				}
				if (this.__c2 == 0) {
					this.__c2 = bytes[i++];
				}
				if (this.__c1 > 191 && this.__c1 < 224) {
					charCount++;
				} else {
					if (i >= index + count) {
						break;
					}
					if (this.__c3 == 0) {
						this.__c3 = bytes[i++];
					}
					charCount++;
					this.__c3 = 0;
				}
				this.__c2 = 0;
			}
			this.__c1 = 0;
		}
		if (flush) {
			this.__c1 = 0;
			this.__c2 = 0;
			this.__c3 = 0;
		}
		return charCount;
	}
	/*<EndMethod Name="System.Int32 System.Text.UTF8Encoding_UTF8Decoder::GetCharCount(, System.Int32, System.Int32, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Text.UTF8Encoding_UTF8Decoder::GetChars(, System.Int32, System.Int32, , System.Int32)" />*/
	getChars: function (bytes, byteIndex, byteCount, chars, charIndex) {
		return this.getChars1(bytes, byteIndex, byteCount, chars, charIndex, false);
	}
	/*<EndMethod Name="System.Int32 System.Text.UTF8Encoding_UTF8Decoder::GetChars(, System.Int32, System.Int32, , System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Text.UTF8Encoding_UTF8Decoder::GetChars(, System.Int32, System.Int32, , System.Int32, System.Boolean)" />*/
	getChars1: function (bytes, byteIndex, byteCount, chars, charIndex, flush) {
		var originalCharIndex = charIndex;
		var i = byteIndex;
		while (i < byteIndex + byteCount) {
			if (this.__c1 == 0) {
				this.__c1 = bytes[i++];
			}
			if (this.__c1 < 128) {
				chars[charIndex++] = String.fromCharCode(this.__c1);
			} else {
				if (i >= byteIndex + byteCount) {
					break;
				}
				if (this.__c2 == 0) {
					this.__c2 = bytes[i++];
				}
				if (this.__c1 > 191 && this.__c1 < 224) {
					chars[charIndex++] = String.fromCharCode((((this.__c1 & 31) << 6) | (this.__c2 & 63)));
				} else {
					if (i >= byteIndex + byteCount) {
						break;
					}
					if (this.__c3 == 0) {
						this.__c3 = bytes[i++];
					}
					chars[charIndex++] = String.fromCharCode((((this.__c1 & 15) << 12) | ((this.__c2 & 63) << 6) | (this.__c3 & 63)));
					this.__c3 = 0;
				}
				this.__c2 = 0;
			}
			this.__c1 = 0;
		}
		if (flush) {
			this.__c1 = 0;
			this.__c2 = 0;
			this.__c3 = 0;
		}
		return charIndex - originalCharIndex;
	}
	/*<EndMethod Name="System.Int32 System.Text.UTF8Encoding_UTF8Decoder::GetChars(, System.Int32, System.Int32, , System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UTF8Encoding_UTF8Decoder', $.ig.Decoder.prototype.$type)
}, true);

/*<EndType Name="System.Text.UTF8Encoding_UTF8Decoder" />*/

/*<BeginType Name="System.Text.AsciiEncoding" />*/

$.ig.util.defType('AsciiEncoding', 'Encoding', {
	init: function (initNumber, encoderShouldEmitUTF8Identifier, throwOnInvalidBytes) {
		if (initNumber > 0) {
			switch (initNumber) {
				case 1:
					this.init1.apply(this, arguments);
					break;
			}
			return;
		}
		$.ig.Encoding.prototype.init.call(this);
	},
	init1: function (initNumber) {
		$.ig.Encoding.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.String System.Text.AsciiEncoding::GetString(, System.Int32, System.Int32)" />*/
	getString1: function (bytes_, startIndex, length) {
		var ret_ = "";
		for (var i_ = startIndex; i_ < startIndex + length; i_++) {
			if (bytes_[i_] == 0) {
				break;
			}
			ret_ = ret_ + String.fromCharCode(bytes_[i_]);
		}
		return ret_;
	}
	/*<EndMethod Name="System.String System.Text.AsciiEncoding::GetString(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Text.AsciiEncoding::GetCharCount(, System.Int32, System.Int32)" />*/
	getCharCount1: function (bytes, index, count) {
		return count;
	}
	/*<EndMethod Name="System.Int32 System.Text.AsciiEncoding::GetCharCount(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Text.AsciiEncoding::GetByteCount(, System.Int32, System.Int32)" />*/
	getByteCount: function (chars, index, count) {
		return count;
	}
	/*<EndMethod Name="System.Int32 System.Text.AsciiEncoding::GetByteCount(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Text.AsciiEncoding::GetBytes(, System.Int32, System.Int32, , System.Int32)" />*/
	getBytes2: function (chars, charIndex, charCount, bytes, byteIndex) {
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndMethod Name="System.Int32 System.Text.AsciiEncoding::GetBytes(, System.Int32, System.Int32, , System.Int32)" />*/
	,
	/*<BeginMethod Name=" System.Text.AsciiEncoding::GetBytes(, System.Int32, System.Int32)" />*/
	getBytes: function (chars, index, count) {
		return $.ig.Encoding.prototype.getBytes.call(this, chars, index, count);
	}
	/*<EndMethod Name=" System.Text.AsciiEncoding::GetBytes(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name=" System.Text.AsciiEncoding::GetBytes(System.String)" />*/
	getBytes1: function (input_) {
		var bytes = new Array(input_.length);
		for (var i_ = 0; i_ < input_.length; i_++) {
			bytes[i_] = input_.charCodeAt(i_);
		}
		return bytes;
	}
	/*<EndMethod Name=" System.Text.AsciiEncoding::GetBytes(System.String)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Text.AsciiEncoding::GetChars(, System.Int32, System.Int32, , System.Int32)" />*/
	getChars: function (bytes_, byteIndex_, byteCount, chars, charIndex) {
		var originalCharIndex = charIndex;
		var ret_ = "";
		for (var i_ = 0; i_ < byteCount; i_++) {
			if (bytes_[i_] == 0) {
				break;
			}
			chars[charIndex++] = String.fromCharCode(bytes_[byteIndex_++]);
		}
		return charIndex - originalCharIndex;
	}
	/*<EndMethod Name="System.Int32 System.Text.AsciiEncoding::GetChars(, System.Int32, System.Int32, , System.Int32)" />*/
	,
	$type: new $.ig.Type('AsciiEncoding', $.ig.Encoding.prototype.$type)
}, true);

/*<EndType Name="System.Text.AsciiEncoding" />*/

/*<BeginType Name="System.Text.DefaultDecoder" />*/

$.ig.util.defType('DefaultDecoder', 'Decoder', {
	__encoding: null,
	init: function (encoding) {
		$.ig.Decoder.prototype.init.call(this);
		this.__encoding = encoding;
	},
	/*<BeginMethod Name="System.Int32 System.Text.DefaultDecoder::GetCharCount(, System.Int32, System.Int32)" />*/
	getCharCount: function (bytes, index, count) {
		return this.getCharCount1(bytes, index, count, false);
	}
	/*<EndMethod Name="System.Int32 System.Text.DefaultDecoder::GetCharCount(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Text.DefaultDecoder::GetCharCount(, System.Int32, System.Int32, System.Boolean)" />*/
	getCharCount1: function (bytes, index, count, flush) {
		return this.__encoding.getCharCount1(bytes, index, count);
	}
	/*<EndMethod Name="System.Int32 System.Text.DefaultDecoder::GetCharCount(, System.Int32, System.Int32, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Text.DefaultDecoder::GetChars(, System.Int32, System.Int32, , System.Int32)" />*/
	getChars: function (bytes, byteIndex, byteCount, chars, charIndex) {
		return this.getChars1(bytes, byteIndex, byteCount, chars, charIndex, false);
	}
	/*<EndMethod Name="System.Int32 System.Text.DefaultDecoder::GetChars(, System.Int32, System.Int32, , System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Text.DefaultDecoder::GetChars(, System.Int32, System.Int32, , System.Int32, System.Boolean)" />*/
	getChars1: function (bytes, byteIndex, byteCount, chars, charIndex, flush) {
		return this.__encoding.getChars(bytes, byteIndex, byteCount, chars, charIndex);
	}
	/*<EndMethod Name="System.Int32 System.Text.DefaultDecoder::GetChars(, System.Int32, System.Int32, , System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('DefaultDecoder', $.ig.Decoder.prototype.$type)
}, true);

/*<EndType Name="System.Text.DefaultDecoder" />*/

/*<BeginType Name="System.Text.RegularExpressions.Capture" />*/

$.ig.util.defType('Capture', 'Object', {
	_index: 0,
	_length: 0,
	_value: null,
	init: function (index, length, value) {
		$.ig.Object.prototype.init.call(this);
		this._index = index;
		this._length = length;
		this._value = value;
	},
	/*<BeginProperty Name="System.Int32 System.Text.RegularExpressions.Capture::Index()" />*/
	index: function () {
		if (this._index < 0) {
			throw new $.ig.NotSupportedException(0, "Cannot get the index of regex groups");
		}
		return this._index;
	}
	/*<EndProperty Name="System.Int32 System.Text.RegularExpressions.Capture::Index()" />*/
	,
	/*<BeginProperty Name="System.Int32 System.Text.RegularExpressions.Capture::Length()" />*/
	length: function () {
		return this._length;
	}
	/*<EndProperty Name="System.Int32 System.Text.RegularExpressions.Capture::Length()" />*/
	,
	/*<BeginProperty Name="System.String System.Text.RegularExpressions.Capture::Value()" />*/
	value: function () {
		return this._value;
	}
	/*<EndProperty Name="System.String System.Text.RegularExpressions.Capture::Value()" />*/
	,
	/*<BeginMethod Name="System.String System.Text.RegularExpressions.Capture::ToString()" />*/
	toString: function () {
		return this._value;
	}
	/*<EndMethod Name="System.String System.Text.RegularExpressions.Capture::ToString()" />*/
	,
	$type: new $.ig.Type('Capture', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.Text.RegularExpressions.Capture" />*/

/*<BeginType Name="System.Text.RegularExpressions.Group" />*/

$.ig.util.defType('Group', 'Capture', {
	_success: false,
	init: function (success, index, length, value) {
		$.ig.Capture.prototype.init.call(this, index, length, value);
		this._success = success;
	},
	/*<BeginProperty Name="System.Boolean System.Text.RegularExpressions.Group::Success()" />*/
	success: function () {
		return this._success;
	}
	/*<EndProperty Name="System.Boolean System.Text.RegularExpressions.Group::Success()" />*/
	,
	$type: new $.ig.Type('Group', $.ig.Capture.prototype.$type)
}, true);

/*<EndType Name="System.Text.RegularExpressions.Group" />*/

/*<BeginType Name="System.Text.RegularExpressions.GroupCollection" />*/

$.ig.util.defType('GroupCollection', 'Object', {
	_match: null,
	_groups: null,
	init: function (match) {
		$.ig.Object.prototype.init.call(this);
		this._match = match;
		var r = this._match._result;
		var m = this._match._regex._netToJSGroupIndexMap;
		this._groups = new Array(m.length);
		for (var i = 0; i < this._groups.length; i++) {
			var jsIndexes = m[i];
			for (var j = 0; j < jsIndexes.length; j++) {
				var group = r[jsIndexes[j]];
				if (group != null) {
					this._groups[i] = new $.ig.Group(true, -1, group.length, group);
				}
			}
		}
	},
	/*<BeginProperty Name="System.Int32 System.Text.RegularExpressions.GroupCollection::Count()" />*/
	count: function () {
		return this._groups.length;
	}
	/*<EndProperty Name="System.Int32 System.Text.RegularExpressions.GroupCollection::Count()" />*/
	,
	/*<BeginProperty Name="System.Boolean System.Text.RegularExpressions.GroupCollection::IsReadOnly()" />*/
	isReadOnly: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean System.Text.RegularExpressions.GroupCollection::IsReadOnly()" />*/
	,
	/*<BeginProperty Name="System.Boolean System.Text.RegularExpressions.GroupCollection::IsSynchronized()" />*/
	isSynchronized: function () {
		return false;
	}
	/*<EndProperty Name="System.Boolean System.Text.RegularExpressions.GroupCollection::IsSynchronized()" />*/
	,
	/*<BeginProperty Name="System.Object System.Text.RegularExpressions.GroupCollection::SyncRoot()" />*/
	syncRoot: function () {
		return null;
	}
	/*<EndProperty Name="System.Object System.Text.RegularExpressions.GroupCollection::SyncRoot()" />*/
	,
	/*<BeginProperty Name="System.Text.RegularExpressions.Group System.Text.RegularExpressions.GroupCollection::Item(System.Int32)" />*/
	item: function (groupnum) {
		return this._groups[groupnum] || $.ig.GroupCollection.prototype._emptyGroup;
	}
	/*<EndProperty Name="System.Text.RegularExpressions.Group System.Text.RegularExpressions.GroupCollection::Item(System.Int32)" />*/
	,
	/*<BeginProperty Name="System.Text.RegularExpressions.Group System.Text.RegularExpressions.GroupCollection::Item(System.String)" />*/
	item1: function (groupname) {
		return this.item(this._match._regex._nameToNetGroupIndexMap[groupname]);
	}
	/*<EndProperty Name="System.Text.RegularExpressions.Group System.Text.RegularExpressions.GroupCollection::Item(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.Text.RegularExpressions.GroupCollection::CopyTo(System.Array, System.Int32)" />*/
	copyTo: function (array, arrayIndex) {
		$.ig.util.arrayCopyTo(this._groups, array, arrayIndex);
	}
	/*<EndMethod Name="System.Void System.Text.RegularExpressions.GroupCollection::CopyTo(System.Array, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Collections.IEnumerator System.Text.RegularExpressions.GroupCollection::GetEnumerator()" />*/
	getEnumerator: function () {
		return this._groups.getEnumerator();
	}
	/*<EndMethod Name="System.Collections.IEnumerator System.Text.RegularExpressions.GroupCollection::GetEnumerator()" />*/
	,
	$type: new $.ig.Type('GroupCollection', $.ig.Object.prototype.$type, [$.ig.ICollection.prototype.$type, $.ig.IEnumerable.prototype.$type])
}, true);

/*<EndType Name="System.Text.RegularExpressions.GroupCollection" />*/

/*<BeginType Name="System.Text.RegularExpressions.Match" />*/

$.ig.util.defType('Match', 'Group', {
	_result: null,
	_regex: null,
	_input: null,
	_groups: null,
	init: function (regex, input, result) {
		$.ig.Group.prototype.init.call(this, result != null, result == null ? 0 : result.index, result == null ? 0 : result[0].length, result == null ? "" : result[0]);
		this._result = result;
		this._regex = regex;
		this._input = input;
	},
	/*<BeginProperty Name="System.Text.RegularExpressions.Match System.Text.RegularExpressions.Match::Empty()" />*/
	empty: function () {
		return new $.ig.Match(null, null, null);
	}
	/*<EndProperty Name="System.Text.RegularExpressions.Match System.Text.RegularExpressions.Match::Empty()" />*/
	,
	/*<BeginProperty Name="System.Text.RegularExpressions.GroupCollection System.Text.RegularExpressions.Match::Groups()" />*/
	groups: function () {
		if (this._groups == null) {
			this._groups = new $.ig.GroupCollection(this);
		}
		return this._groups;
	}
	/*<EndProperty Name="System.Text.RegularExpressions.GroupCollection System.Text.RegularExpressions.Match::Groups()" />*/
	,
	/*<BeginMethod Name="System.Text.RegularExpressions.Match System.Text.RegularExpressions.Match::NextMatch()" />*/
	nextMatch: function () {
		if (this.success() == false) {
			return this;
		}
		return this._regex.match1(this._input, this.index() + this.length());
	}
	/*<EndMethod Name="System.Text.RegularExpressions.Match System.Text.RegularExpressions.Match::NextMatch()" />*/
	,
	$type: new $.ig.Type('Match', $.ig.Group.prototype.$type)
}, true);

/*<EndType Name="System.Text.RegularExpressions.Match" />*/

/*<BeginType Name="System.Text.RegularExpressions.Regex" />*/

$.ig.util.defType('Regex', 'Object', {
	_internal: null,
	_nameToNetGroupIndexMap: null,
	_netToJSGroupIndexMap: null,
	_matchMustStartAtCurrentPosition: false,
	init: function (initNumber, pattern) {
		if (initNumber > 0) {
			switch (initNumber) {
				case 1:
					this.init1.apply(this, arguments);
					break;
			}
			return;
		}
		$.ig.Regex.prototype.init1.call(this, 1, pattern, $.ig.RegexOptions.prototype.none);
	},
	init1: function (initNumber, pattern, options) {
		$.ig.Object.prototype.init.call(this);
		var flags = "g";
		if ((options & $.ig.RegexOptions.prototype.ignoreCase) != 0) {
			flags += "i";
		}
		if ((options & $.ig.RegexOptions.prototype.multiline) != 0) {
			flags += "m";
		}
		var temp = $.ig.util.netRegexToJS(pattern);
		this._nameToNetGroupIndexMap = temp.nameToNetGroupIndexMap;
		this._netToJSGroupIndexMap = temp.netToJSGroupIndexMap;
		this._matchMustStartAtCurrentPosition = temp.matchMustStartAtCurrentPosition;
		this._internal = new RegExp(temp.pattern, flags);
	},
	/*<BeginMethod Name="System.String System.Text.RegularExpressions.Regex::Escape(System.String)" />*/
	escape: function (str) {
		for (var i = 0; i < str.length; i++) {
			if ($.ig.Regex.prototype.isMetachar(str.charAt(i)) == false) {
				continue;
			}
			var builder = new $.ig.StringBuilder(0);
			var ch = str.charAt(i);
			builder.append6(str, 0, i);
			do {
				builder.append1('\\');
				switch (ch) {
					case '\t':
						ch = 't';
						break;
					case '\n':
						ch = 'n';
						break;
					case '\f':
						ch = 'f';
						break;
					case '\r':
						ch = 'r';
						break;
				}
				builder.append1(ch);
				i++;
				var startIndex = i;
				while (i < str.length) {
					ch = str.charAt(i);
					if ($.ig.Regex.prototype.isMetachar(ch)) {
						break;
					}
					i++;
				}
				builder.append6(str, startIndex, i - startIndex);
			} while (i < str.length);
			return builder.toString();
		}
		return str;
	}
	/*<EndMethod Name="System.String System.Text.RegularExpressions.Regex::Escape(System.String)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Text.RegularExpressions.Regex::IsMetachar(System.Char)" />*/
	isMetachar: function (ch) {
		switch (ch.charCodeAt(0)) {
			case 9:
			case 10:
			case 12:
			case 13:
			case 32:
			case 35:
			case 36:
			case 40:
			case 41:
			case 42:
			case 43:
			case 46:
			case 63:
			case 91:
			case 92:
			case 94:
			case 123:
			case 124:
				return true;
			default: return false;
		}
	}
	/*<EndMethod Name="System.Boolean System.Text.RegularExpressions.Regex::IsMetachar(System.Char)" />*/
	,
	/*<BeginMethod Name="System.Text.RegularExpressions.Match System.Text.RegularExpressions.Regex::Match(System.String)" />*/
	match: function (input) {
		return this.match1(input, 0);
	}
	/*<EndMethod Name="System.Text.RegularExpressions.Match System.Text.RegularExpressions.Regex::Match(System.String)" />*/
	,
	/*<BeginMethod Name="System.Text.RegularExpressions.Match System.Text.RegularExpressions.Regex::Match(System.String, System.Int32)" />*/
	match1: function (input, startat) {
		this._internal.lastIndex = startat;
		var match = this._internal.exec(input);
		if (match != null && this._matchMustStartAtCurrentPosition && startat != match.index) {
			match = null;
		}
		return new $.ig.Match(this, input, match);
	}
	/*<EndMethod Name="System.Text.RegularExpressions.Match System.Text.RegularExpressions.Regex::Match(System.String, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.String System.Text.RegularExpressions.Regex::Replace(System.String, System.String)" />*/
	replace: function (input, replacement) {
		return input.replace(this._internal, replacement);
	}
	/*<EndMethod Name="System.String System.Text.RegularExpressions.Regex::Replace(System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.String System.Text.RegularExpressions.Regex::Replace(System.String, System.String, System.String, System.Text.RegularExpressions.RegexOptions)" />*/
	replace1: function (input, pattern, replacement, options) {
		var regex = new $.ig.Regex(1, pattern, options);
		return regex.replace(input, replacement);
	}
	/*<EndMethod Name="System.String System.Text.RegularExpressions.Regex::Replace(System.String, System.String, System.String, System.Text.RegularExpressions.RegexOptions)" />*/
	,
	$type: new $.ig.Type('Regex', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.Text.RegularExpressions.Regex" />*/

/*<BeginStatics Name="System.Text.Encoding" />*/

$.ig.Encoding.prototype.__utfEncoding = null;
$.ig.Encoding.prototype.__utf8Unmarked = null;
$.ig.Encoding.prototype.__unicodeEncoding = null;
$.ig.Encoding.prototype.__asciiEncoding = null;
$.ig.Encoding.prototype.__bigEndianUnicodeEncoding = null;
/*<EndStatics Name="System.Text.Encoding" />*/

/*<BeginStatics Name="System.Text.RegularExpressions.GroupCollection" />*/

$.ig.GroupCollection.prototype._emptyGroup = new $.ig.Group(false, -1, 0, "");
/*<EndStatics Name="System.Text.RegularExpressions.GroupCollection" />*/


/*<BeginFooter/>*/
}));// REMOVE_FROM_COMBINED_FILES
/*<EndFooter/>*/

