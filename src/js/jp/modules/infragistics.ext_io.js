/*!@license
* Infragistics.Web.ClientUI infragistics.ext_io.js 17.1.20171.1012
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
*     infragistics.ext_text.js
*/
/*<BeginHeader/>*/
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		define( [
			'./infragistics.util',
			'./infragistics.ext_core',
			'./infragistics.ext_text'
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
$.ig.globalDefs.$$7 = $$t;
$$0 = $.ig.globalDefs.$$0;
$$1 = $.ig.globalDefs.$$1;
$$6 = $.ig.globalDefs.$$6;
$$8 = $.ig.globalDefs.$$8;
$.ig.$currDefinitions = $$t;
$.ig.util.bulkDefine([
"TextReader:g",
"SynchronizedReader:h"]);
/*<BeginType Name="System.BitConverter" />*/

$.ig.util.defType('BitConverter', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Int64 System.BitConverter::DoubleToInt64Bits(System.Double)" />*/
	doubleToInt64Bits: function (value) {
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndMethod Name="System.Int64 System.BitConverter::DoubleToInt64Bits(System.Double)" />*/
	,
	/*<BeginMethod Name=" System.BitConverter::GetBytes(System.Boolean)" />*/
	getBytes: function (value) {
		return [ value ? 1 : 0 ];
	}
	/*<EndMethod Name=" System.BitConverter::GetBytes(System.Boolean)" />*/
	,
	/*<BeginMethod Name=" System.BitConverter::GetBytes(System.Char)" />*/
	getBytes1: function (value) {
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndMethod Name=" System.BitConverter::GetBytes(System.Char)" />*/
	,
	/*<BeginMethod Name=" System.BitConverter::GetBytes(System.Double)" />*/
	getBytes2: function (value) {
		var hiWord = 0;
		var loWord = 0;
		if (value == Number.POSITIVE_INFINITY) {
			hiWord = 2146435072;
		} else if (value == Number.NEGATIVE_INFINITY) {
			hiWord = 4293918720;
		} else if (value == 0) {
			if (1 / value == 1 / 0) {
				hiWord = 0;
			} else {
				hiWord = 2147483648;
			}
		} else if ($.ig.util.isNaN(value)) {
			hiWord = 4294443008;
		} else {
			if (value < -0) {
				hiWord = 2147483648;
				value = -value;
			}
			var exponent = Math.floor(Math.log(value) / Math.log(2));
			var significand = $.ig.truncate(Math.floor((value / Math.pow(2, exponent)) * Math.pow(2, 52)));
			loWord = ($.ig.util.u32BitwiseAnd(significand, 4294967295));
			significand = $.ig.intDivide(significand, $.ig.truncate(Math.pow(2, 32)));
			exponent += 1023;
			if (exponent >= 2047) {
				exponent = 2047;
				significand = 0;
			} else if (exponent < 0) {
				exponent = 0;
			}
			hiWord = $.ig.util.u32BitwiseOr(hiWord, $.ig.util.u32LS($.ig.truncate(exponent), 20));
			hiWord = $.ig.util.u32BitwiseOr(hiWord, $.ig.util.u32BitwiseAnd(significand, ~(-1 << 20)));
		}
		return [ (loWord & 255), ((loWord >>> 8) & 255), ((loWord >>> 16) & 255), ((loWord >>> 24) & 255), (hiWord & 255), ((hiWord >>> 8) & 255), ((hiWord >>> 16) & 255), ((hiWord >>> 24) & 255) ];
	}
	/*<EndMethod Name=" System.BitConverter::GetBytes(System.Double)" />*/
	,
	/*<BeginMethod Name=" System.BitConverter::GetBytes(System.Single)" />*/
	getBytes6: function (value) {
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndMethod Name=" System.BitConverter::GetBytes(System.Single)" />*/
	,
	/*<BeginMethod Name=" System.BitConverter::GetBytes(System.Int32)" />*/
	getBytes4: function (value) {
		return $.ig.BitConverter.prototype.getBytes8($.ig.util.intSToU(value));
	}
	/*<EndMethod Name=" System.BitConverter::GetBytes(System.Int32)" />*/
	,
	/*<BeginMethod Name=" System.BitConverter::GetBytes(System.Int64)" />*/
	getBytes5: function (value) {
		return $.ig.BitConverter.prototype.getBytes9(value);
	}
	/*<EndMethod Name=" System.BitConverter::GetBytes(System.Int64)" />*/
	,
	/*<BeginMethod Name=" System.BitConverter::GetBytes(System.Int16)" />*/
	getBytes3: function (value) {
		return $.ig.BitConverter.prototype.getBytes7(value);
	}
	/*<EndMethod Name=" System.BitConverter::GetBytes(System.Int16)" />*/
	,
	/*<BeginMethod Name=" System.BitConverter::GetBytes(System.UInt32)" />*/
	getBytes8: function (value) {
		return [ (value & 255), ((value >>> 8) & 255), ((value >>> 16) & 255), ((value >>> 24) & 255) ];
	}
	/*<EndMethod Name=" System.BitConverter::GetBytes(System.UInt32)" />*/
	,
	/*<BeginMethod Name=" System.BitConverter::GetBytes(System.UInt64)" />*/
	getBytes9: function (value) {
		var lo = (value | 0);
		var hi = $.ig.util.u32BitwiseOr($.ig.truncate((value / Math.pow(2, 32))), 0);
		return [ (lo & 255), ((lo >>> 8) & 255), ((lo >>> 16) & 255), ((lo >>> 24) & 255), (hi & 255), ((hi >>> 8) & 255), ((hi >>> 16) & 255), ((hi >>> 24) & 255) ];
	}
	/*<EndMethod Name=" System.BitConverter::GetBytes(System.UInt64)" />*/
	,
	/*<BeginMethod Name=" System.BitConverter::GetBytes(System.UInt16)" />*/
	getBytes7: function (value) {
		return [ (value & 255), ((value >>> 8) & 255) ];
	}
	/*<EndMethod Name=" System.BitConverter::GetBytes(System.UInt16)" />*/
	,
	/*<BeginMethod Name="System.Double System.BitConverter::Int64BitsToDouble(System.Int64)" />*/
	int64BitsToDouble: function (value) {
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndMethod Name="System.Double System.BitConverter::Int64BitsToDouble(System.Int64)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.BitConverter::ToBoolean(, System.Int32)" />*/
	toBoolean: function (value, startIndex) {
		return value[startIndex] != 0;
	}
	/*<EndMethod Name="System.Boolean System.BitConverter::ToBoolean(, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Char System.BitConverter::ToChar(, System.Int32)" />*/
	toChar: function (value, startIndex) {
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndMethod Name="System.Char System.BitConverter::ToChar(, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Double System.BitConverter::ToDouble(, System.Int32)" />*/
	toDouble: function (value, startIndex) {
		var sign = (value[startIndex + 7] & 1 << 7) >> 7;
		var exponent = (((value[startIndex + 7] & 127) << 4) | (value[startIndex + 6] & (15 << 4)) >> 4);
		if (exponent == 0) {
			return (sign == 0) ? 0 : -0;
		}
		if (exponent == 2047) {
			if ((value[startIndex + 6] & 8) != 0) {
				return NaN;
			}
			return (sign == 0) ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
		}
		var mul = Math.pow(2, exponent - 1023 - 52);
		var mantissa = value[startIndex] + value[startIndex + 1] * Math.pow(2, 8 * 1) + value[startIndex + 2] * Math.pow(2, 8 * 2) + value[startIndex + 3] * Math.pow(2, 8 * 3) + value[startIndex + 4] * Math.pow(2, 8 * 4) + value[startIndex + 5] * Math.pow(2, 8 * 5) + (value[startIndex + 6] & 15) * Math.pow(2, 8 * 6) + Math.pow(2, 52);
		return Math.pow(-1, sign) * mantissa * mul;
	}
	/*<EndMethod Name="System.Double System.BitConverter::ToDouble(, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int16 System.BitConverter::ToInt16(, System.Int32)" />*/
	toInt16: function (value, startIndex) {
		var num = $.ig.BitConverter.prototype.toUInt16(value, startIndex);
		if (num > 32767) {
			num -= (65535 + 1);
		}
		return num;
	}
	/*<EndMethod Name="System.Int16 System.BitConverter::ToInt16(, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.BitConverter::ToInt32(, System.Int32)" />*/
	toInt32: function (value, startIndex) {
		return value[startIndex] | (value[startIndex + 1] << 8) | (value[startIndex + 2] << 16) | (value[startIndex + 3] << 24);
	}
	/*<EndMethod Name="System.Int32 System.BitConverter::ToInt32(, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Single System.BitConverter::ToSingle(, System.Int32)" />*/
	toSingle: function (value, startIndex) {
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndMethod Name="System.Single System.BitConverter::ToSingle(, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.String System.BitConverter::ToString()" />*/
	toString1: function (value) {
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndMethod Name="System.String System.BitConverter::ToString()" />*/
	,
	/*<BeginMethod Name="System.String System.BitConverter::ToString(, System.Int32)" />*/
	toString2: function (value, startIndex) {
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndMethod Name="System.String System.BitConverter::ToString(, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.String System.BitConverter::ToString(, System.Int32, System.Int32)" />*/
	toString3: function (value, startIndex, length) {
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndMethod Name="System.String System.BitConverter::ToString(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.UInt16 System.BitConverter::ToUInt16(, System.Int32)" />*/
	toUInt16: function (value, startIndex) {
		return (value[startIndex] | (value[startIndex + 1] << 8));
	}
	/*<EndMethod Name="System.UInt16 System.BitConverter::ToUInt16(, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.UInt32 System.BitConverter::ToUInt32(, System.Int32)" />*/
	toUInt32: function (value, startIndex) {
		return $.ig.util.intSToU($.ig.BitConverter.prototype.toInt32(value, startIndex));
	}
	/*<EndMethod Name="System.UInt32 System.BitConverter::ToUInt32(, System.Int32)" />*/
	,
	$type: new $.ig.Type('BitConverter', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.BitConverter" />*/

/*<BeginType Name="System.IO.Path" />*/

$.ig.util.defType('IOPath', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.String System.IO.Path::GetExtension(System.String)" />*/
	getExtension: function (path) {
		var dotIndex = path.lastIndexOf('.');
		if (dotIndex < 0) {
			return String.empty();
		}
		return path.substr(dotIndex);
	}
	/*<EndMethod Name="System.String System.IO.Path::GetExtension(System.String)" />*/
	,
	/*<BeginMethod Name="System.String System.IO.Path::GetDirectoryName(System.String)" />*/
	getDirectoryName: function (path) {
		var separatorIndex = path.lastIndexOfAny([ '\\', '/' ]);
		if (separatorIndex < 0) {
			return String.empty();
		}
		return path.substr(0, separatorIndex);
	}
	/*<EndMethod Name="System.String System.IO.Path::GetDirectoryName(System.String)" />*/
	,
	/*<BeginMethod Name="System.String System.IO.Path::GetFileName(System.String)" />*/
	getFileName: function (path) {
		var separatorIndex = path.lastIndexOfAny([ '\\', '/' ]);
		if (separatorIndex < 0) {
			return path;
		}
		return path.substr(separatorIndex + 1);
	}
	/*<EndMethod Name="System.String System.IO.Path::GetFileName(System.String)" />*/
	,
	/*<BeginMethod Name="System.String System.IO.Path::Combine(System.String, System.String)" />*/
	combine1: function (path1, path2) {
		if (path1 == null || path1.length == 0) {
			return path2;
		}
		if (path2 == null || path2.length == 0) {
			return path1;
		}
		if (path1.charAt(path1.length - 1) == '\\' || path1.charAt(path1.length - 1) == '/' || path2.charAt(0) == '\\' || path2.charAt(0) == '/') {
			return path1 + path2;
		}
		return path1 + '\\' + path2;
	}
	/*<EndMethod Name="System.String System.IO.Path::Combine(System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.IO.Path::IsPathRooted(System.String)" />*/
	isPathRooted: function (path) {
		if (path == null) {
			return false;
		}
		if (path.length >= 1 && (path.charAt(0) == '/' || path.charAt(0) == '\\')) {
			return true;
		}
		if (path.length >= 2 && path.charAt(1) == ':') {
			return true;
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean System.IO.Path::IsPathRooted(System.String)" />*/
	,
	/*<BeginMethod Name="System.String System.IO.Path::ChangeExtension(System.String, System.String)" />*/
	changeExtension: function (path, extension) {
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndMethod Name="System.String System.IO.Path::ChangeExtension(System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.String System.IO.Path::Combine()" />*/
	combine: function (paths) {
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndMethod Name="System.String System.IO.Path::Combine()" />*/
	,
	/*<BeginMethod Name="System.String System.IO.Path::Combine(System.String, System.String, System.String)" />*/
	combine2: function (path1, path2, path3) {
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndMethod Name="System.String System.IO.Path::Combine(System.String, System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.String System.IO.Path::GetFileNameWithoutExtension(System.String)" />*/
	getFileNameWithoutExtension: function (path) {
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndMethod Name="System.String System.IO.Path::GetFileNameWithoutExtension(System.String)" />*/
	,
	/*<BeginMethod Name="System.String System.IO.Path::GetFullPath(System.String)" />*/
	getFullPath: function (path) {
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndMethod Name="System.String System.IO.Path::GetFullPath(System.String)" />*/
	,
	/*<BeginMethod Name=" System.IO.Path::GetInvalidPathChars()" />*/
	getInvalidPathChars: function () {
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndMethod Name=" System.IO.Path::GetInvalidPathChars()" />*/
	,
	/*<BeginMethod Name="System.String System.IO.Path::GetPathRoot(System.String)" />*/
	getPathRoot: function (path) {
		if (path == null) {
			return null;
		}
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndMethod Name="System.String System.IO.Path::GetPathRoot(System.String)" />*/
	,
	/*<BeginMethod Name="System.String System.IO.Path::GetTempFileName()" />*/
	getTempFileName: function () {
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndMethod Name="System.String System.IO.Path::GetTempFileName()" />*/
	,
	/*<BeginMethod Name="System.String System.IO.Path::GetTempPath()" />*/
	getTempPath: function () {
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndMethod Name="System.String System.IO.Path::GetTempPath()" />*/
	,
	/*<BeginMethod Name="System.Boolean System.IO.Path::HasExtension(System.String)" />*/
	hasExtension: function (path) {
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndMethod Name="System.Boolean System.IO.Path::HasExtension(System.String)" />*/
	,
	$type: new $.ig.Type('IOPath', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.IO.Path" />*/

/*<BeginType Name="System.IO.BinaryReader" />*/

$.ig.util.defType('BinaryReader', 'Object', {
	__data: null,
	__isBigEndian: false,
	__currOffset: 0,
	/*<BeginProperty Name="System.Boolean System.IO.BinaryReader::CanRead()" />*/
	canRead: function () {
		return this.__currOffset < this.__data.length;
	}
	/*<EndProperty Name="System.Boolean System.IO.BinaryReader::CanRead()" />*/
	,
	/*<BeginProperty Name="System.Int64 System.IO.BinaryReader::CurrentPosition()" />*/
	currentPosition: function () {
		return this.__currOffset;
	}
	/*<EndProperty Name="System.Int64 System.IO.BinaryReader::CurrentPosition()" />*/
	,
	/*<BeginProperty Name="System.Int64 System.IO.BinaryReader::Length()" />*/
	length: function () {
		if (this.__useStream) {
			return this.__stream.length();
		}
		return this.__data.length;
	}
	/*<EndProperty Name="System.Int64 System.IO.BinaryReader::Length()" />*/
	,
	__useArray: false,
	__useStream: false,
	init: function (initNumber, dataString, isBigEndian) {
		if (initNumber > 0) {
			switch (initNumber) {
				case 1:
					this.init1.apply(this, arguments);
					break;
			}
			return;
		}
		this.__data = null;
		this.__isBigEndian = false;
		this.__currOffset = 0;
		this.__useArray = false;
		this.__useStream = false;
		$.ig.Object.prototype.init.call(this);
		this.__data = dataString;
		this.__isBigEndian = isBigEndian;
		var data_ = this.__data;
		if (typeof Uint8Array != 'undefined' && data_ instanceof Uint8Array) {
			this.__useArray = true;
		}
	},
	/*<BeginMethod Name="System.Byte System.IO.BinaryReader::GetByte(System.Int64)" />*/
	getByte: function (offset_) {
		if (this.__useStream) {
			this.__stream.position(offset_);
			return this.__stream.readByte();
		} else if (this.__useArray) {
			return this.__data[offset_] & 0xFF;
		} else {
			return this.__data.charCodeAt(offset_) & 0xFF;
		}
	}
	/*<EndMethod Name="System.Byte System.IO.BinaryReader::GetByte(System.Int64)" />*/
	,
	/*<BeginMethod Name=" System.IO.BinaryReader::GetBytes(System.Int64, System.Int64)" />*/
	getBytes: function (offset_, length) {
		var ret = new Array(length);
		if (this.__useStream) {
			this.__stream.position(offset_);
			this.__stream.read(ret, 0, length);
		} else if (this.__useArray) {
			for (var i_ = 0; i_ < length; i_++) {
				ret[i_] = this.__data[offset_ + i_] & 0xFF;
			}
		} else {
			for (var i_ = 0; i_ < length; i_++) {
				ret[i_] = this.__data.charCodeAt(offset_ + i_) & 0xFF;
			}
		}
		return ret;
	}
	/*<EndMethod Name=" System.IO.BinaryReader::GetBytes(System.Int64, System.Int64)" />*/
	,
	/*<BeginMethod Name=" System.IO.BinaryReader::GetBytesBackwards(System.Int64, System.Int64)" />*/
	getBytesBackwards: function (offset_, length_) {
		var ret = new Array(length_);
		if (this.__useStream) {
			this.__stream.position(offset_);
			this.__stream.read(ret, 0, length_);
			$.ig.Array.prototype.reverse(ret);
		} else if (this.__useArray) {
			for (var i_ = 0; i_ < length_; i_++) {
				ret[i_] = this.__data[offset_ + (length_ - 1 - i_)] & 0xFF;
			}
		} else {
			for (var i_ = 0; i_ < length_; i_++) {
				ret[i_] = this.__data.charCodeAt(offset_ + (length_ - 1 - i_)) & 0xFF;
			}
		}
		return ret;
	}
	/*<EndMethod Name=" System.IO.BinaryReader::GetBytesBackwards(System.Int64, System.Int64)" />*/
	,
	/*<BeginMethod Name="System.Byte System.IO.BinaryReader::ReadByte()" />*/
	readByte: function () {
		if (this.__useStream) {
			this.__currOffset = this.__stream.position();
		}
		var ret = this.getByte(this.__currOffset);
		this.__currOffset = this.__currOffset + 1;
		return ret;
	}
	/*<EndMethod Name="System.Byte System.IO.BinaryReader::ReadByte()" />*/
	,
	/*<BeginMethod Name=" System.IO.BinaryReader::ReadBytes(System.Int32)" />*/
	readBytes: function (count) {
		if (this.__useStream) {
			this.__currOffset = this.__stream.position();
		}
		var ret = this.getBytes(this.__currOffset, count);
		this.__currOffset = this.__currOffset + count;
		return ret;
	}
	/*<EndMethod Name=" System.IO.BinaryReader::ReadBytes(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.UInt32 System.IO.BinaryReader::ReadUInt32()" />*/
	readUInt32: function () {
		if (this.__useStream) {
			this.__currOffset = this.__stream.position();
		}
		var num = 0;
		if (this.__isBigEndian) {
			num = num + (this.getByte(this.__currOffset) << 24);
			this.__currOffset = this.__currOffset + 1;
			num = num + (this.getByte(this.__currOffset) << 16);
			this.__currOffset = this.__currOffset + 1;
			num = num + (this.getByte(this.__currOffset) << 8);
			this.__currOffset = this.__currOffset + 1;
			num = num + this.getByte(this.__currOffset);
			this.__currOffset = this.__currOffset + 1;
		} else {
			num = num + this.getByte(this.__currOffset);
			this.__currOffset = this.__currOffset + 1;
			num = num + (this.getByte(this.__currOffset) << 8);
			this.__currOffset = this.__currOffset + 1;
			num = num + (this.getByte(this.__currOffset) << 16);
			this.__currOffset = this.__currOffset + 1;
			num = num + (this.getByte(this.__currOffset) << 24);
			this.__currOffset = this.__currOffset + 1;
		}
		if (num < 0) {
			num = num + 0xFFFFFFFF + 1;
		}
		return num;
	}
	/*<EndMethod Name="System.UInt32 System.IO.BinaryReader::ReadUInt32()" />*/
	,
	/*<BeginMethod Name="System.UInt16 System.IO.BinaryReader::ReadUInt16()" />*/
	readUInt16: function () {
		if (this.__useStream) {
			this.__currOffset = this.__stream.position();
		}
		var num = 0;
		if (this.__isBigEndian) {
			num = num + (this.getByte(this.__currOffset) << 8);
			this.__currOffset = this.__currOffset + 1;
			num = num + this.getByte(this.__currOffset);
			this.__currOffset = this.__currOffset + 1;
		} else {
			num = num + this.getByte(this.__currOffset);
			this.__currOffset = this.__currOffset + 1;
			num = num + (this.getByte(this.__currOffset) << 8);
			this.__currOffset = this.__currOffset + 1;
		}
		return num;
	}
	/*<EndMethod Name="System.UInt16 System.IO.BinaryReader::ReadUInt16()" />*/
	,
	/*<BeginMethod Name="System.Int32 System.IO.BinaryReader::ReadInt32()" />*/
	readInt32: function () {
		if (this.__useStream) {
			this.__currOffset = this.__stream.position();
		}
		var num = 0;
		if (this.__isBigEndian) {
			num = num + (this.getByte(this.__currOffset) << 24);
			this.__currOffset = this.__currOffset + 1;
			num = num + (this.getByte(this.__currOffset) << 16);
			this.__currOffset = this.__currOffset + 1;
			num = num + (this.getByte(this.__currOffset) << 8);
			this.__currOffset = this.__currOffset + 1;
			num = num + this.getByte(this.__currOffset);
			this.__currOffset = this.__currOffset + 1;
		} else {
			num = num + this.getByte(this.__currOffset);
			this.__currOffset = this.__currOffset + 1;
			num = num + (this.getByte(this.__currOffset) << 8);
			this.__currOffset = this.__currOffset + 1;
			num = num + (this.getByte(this.__currOffset) << 16);
			this.__currOffset = this.__currOffset + 1;
			num = num + (this.getByte(this.__currOffset) << 24);
			this.__currOffset = this.__currOffset + 1;
		}
		if (num > 2147483647) {
			num = num - 0xFFFFFFFF - 1;
		}
		return num;
	}
	/*<EndMethod Name="System.Int32 System.IO.BinaryReader::ReadInt32()" />*/
	,
	/*<BeginMethod Name="System.Double System.IO.BinaryReader::ReadDouble()" />*/
	readDouble: function () {
		if (this.__useStream) {
			this.__currOffset = this.__stream.position();
		}
		var bytes = this.getBytesBackwards(this.__currOffset, 8);
		this.__currOffset = this.__currOffset + 8;
		var sign = bytes[0] >>> 7;
		var exponent = 0;
		exponent = exponent + (bytes[1] >>> 4);
		exponent = exponent + ((bytes[0] & 127) << 4);
		var fraction = 1;
		var currByte = bytes[1];
		var factor = 1 / 2;
		var currPos = 0;
		var hasFraction = false;
		for (currPos = 5; currPos <= 8; currPos++) {
			if ((currByte & (1 << (8 - currPos))) > 0) {
				fraction = fraction + factor;
				hasFraction = true;
			}
			factor = factor / 2;
		}
		for (var bytePos = 2; bytePos < 8; bytePos++) {
			currByte = bytes[bytePos];
			for (currPos = 1; currPos <= 8; currPos++) {
				if ((currByte & (1 << (8 - currPos))) > 0) {
					fraction = fraction + factor;
					hasFraction = true;
				}
				factor = factor / 2;
			}
		}
		if (exponent == 0 && !hasFraction) {
			return 0;
		}
		if (exponent == 0 && hasFraction) {
			exponent = 1;
			fraction = fraction - 1;
		}
		if (exponent == 1860 && !hasFraction) {
			if (sign == 1) {
				return $.ig.Number.prototype.nEGATIVE_INFINITY;
			} else {
				return $.ig.Number.prototype.pOSITIVE_INFINITY;
			}
		}
		if (exponent == 1860 && hasFraction) {
			return NaN;
		}
		var biasedExponent = exponent - 1023;
		return Math.pow(-1, sign) * Math.pow(2, biasedExponent) * fraction;
	}
	/*<EndMethod Name="System.Double System.IO.BinaryReader::ReadDouble()" />*/
	,
	/*<BeginMethod Name="System.Single System.IO.BinaryReader::ReadSingle()" />*/
	readSingle: function () {
		if (this.__useStream) {
			this.__currOffset = this.__stream.position();
		}
		var bytes = this.getBytesBackwards(this.__currOffset, 4);
		this.__currOffset = this.__currOffset + 4;
		var sign = bytes[0] >>> 7;
		var exponent = 0;
		exponent = exponent + (bytes[1] >>> 7);
		exponent = exponent + ((bytes[0] & 127) << 1);
		var fraction = 1;
		var currByte = bytes[1];
		var factor = 1 / 2;
		var currPos = 0;
		var hasFraction = false;
		for (currPos = 2; currPos <= 8; currPos++) {
			if ((currByte & (1 << (8 - currPos))) > 0) {
				fraction = fraction + factor;
				hasFraction = true;
			}
			factor = factor / 2;
		}
		for (var bytePos = 2; bytePos < 4; bytePos++) {
			currByte = bytes[bytePos];
			for (currPos = 1; currPos <= 8; currPos++) {
				if ((currByte & (1 << (8 - currPos))) > 0) {
					fraction = fraction + factor;
					hasFraction = true;
				}
				factor = factor / 2;
			}
		}
		if (exponent == 0 && !hasFraction) {
			return 0;
		}
		if (exponent == 0 && hasFraction) {
			exponent = 1;
			fraction = fraction - 1;
		}
		if (exponent == 255 && !hasFraction) {
			if (sign == 1) {
				return $.ig.Number.prototype.nEGATIVE_INFINITY;
			} else {
				return $.ig.Number.prototype.pOSITIVE_INFINITY;
			}
		}
		if (exponent == 255 && hasFraction) {
			return NaN;
		}
		var biasedExponent = exponent - 127;
		return (Math.pow(-1, sign)) * (Math.pow(2, biasedExponent)) * fraction;
	}
	/*<EndMethod Name="System.Single System.IO.BinaryReader::ReadSingle()" />*/
	,
	__stream: null,
	init1: function (initNumber, input) {
		this.__data = null;
		this.__isBigEndian = false;
		this.__currOffset = 0;
		this.__useArray = false;
		this.__useStream = false;
		$.ig.Object.prototype.init.call(this);
		this.__stream = input;
		this.__useStream = true;
	},
	/*<BeginProperty Name="System.IO.Stream System.IO.BinaryReader::BaseStream()" />*/
	baseStream: function () {
		return this.__stream;
	}
	/*<EndProperty Name="System.IO.Stream System.IO.BinaryReader::BaseStream()" />*/
	,
	/*<BeginMethod Name="System.Boolean System.IO.BinaryReader::ReadBoolean()" />*/
	readBoolean: function () {
		if (this.__useStream) {
			this.__currOffset = this.__stream.position();
		}
		var ret = this.getByte(this.__currOffset);
		this.__currOffset = this.__currOffset + 1;
		return ret != 0;
	}
	/*<EndMethod Name="System.Boolean System.IO.BinaryReader::ReadBoolean()" />*/
	,
	/*<BeginMethod Name="System.Int16 System.IO.BinaryReader::ReadInt16()" />*/
	readInt16: function () {
		if (this.__useStream) {
			this.__currOffset = this.__stream.position();
		}
		var num = 0;
		if (this.__isBigEndian) {
			num = num + (this.getByte(this.__currOffset) << 8);
			this.__currOffset = this.__currOffset + 1;
			num = num + this.getByte(this.__currOffset);
			this.__currOffset = this.__currOffset + 1;
		} else {
			num = num + this.getByte(this.__currOffset);
			this.__currOffset = this.__currOffset + 1;
			num = num + (this.getByte(this.__currOffset) << 8);
			this.__currOffset = this.__currOffset + 1;
		}
		if (num > 32767) {
			num -= (65535 + 1);
		}
		return num;
	}
	/*<EndMethod Name="System.Int16 System.IO.BinaryReader::ReadInt16()" />*/
	,
	/*<BeginMethod Name="System.SByte System.IO.BinaryReader::ReadSByte()" />*/
	readSByte: function () {
		if (this.__useStream) {
			this.__currOffset = this.__stream.position();
		}
		var ret = this.getByte(this.__currOffset);
		this.__currOffset = this.__currOffset + 1;
		if (ret > 127) {
			return (ret - 255 + 1);
		}
		return ret;
	}
	/*<EndMethod Name="System.SByte System.IO.BinaryReader::ReadSByte()" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.BinaryReader::Close()" />*/
	close: function () {
		(this).dispose();
	}
	/*<EndMethod Name="System.Void System.IO.BinaryReader::Close()" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.BinaryReader::System.IDisposable.Dispose()" />*/
	dispose: function () {
		if (this.__useStream) {
			this.__stream.dispose();
		}
	}
	/*<EndMethod Name="System.Void System.IO.BinaryReader::System.IDisposable.Dispose()" />*/
	,
	$type: new $.ig.Type('BinaryReader', $.ig.Object.prototype.$type, [$.ig.IDisposable.prototype.$type])
}, true);

/*<EndType Name="System.IO.BinaryReader" />*/

/*<BeginType Name="System.IO.BinaryWriter" />*/

$.ig.util.defType('BinaryWriter', 'Object', {
	__baseStream: null,
	__encoding: null,
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
	init1: function (initNumber, output) {
		$.ig.BinaryWriter.prototype.init2.call(this, 2, output, new $.ig.UTF8Encoding(0, false, true));
	},
	init2: function (initNumber, output, encoding) {
		$.ig.Object.prototype.init.call(this);
		this.__baseStream = output;
		this.__encoding = encoding;
	},
	/*<BeginProperty Name="System.IO.Stream System.IO.BinaryWriter::BaseStream()" />*/
	baseStream: function () {
		return this.__baseStream;
	}
	/*<EndProperty Name="System.IO.Stream System.IO.BinaryWriter::BaseStream()" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.BinaryWriter::Close()" />*/
	close: function () {
		this.disposeCore(true);
	}
	/*<EndMethod Name="System.Void System.IO.BinaryWriter::Close()" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.BinaryWriter::Dispose()" />*/
	dispose: function () {
		this.disposeCore(true);
	}
	/*<EndMethod Name="System.Void System.IO.BinaryWriter::Dispose()" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.BinaryWriter::Dispose(System.Boolean)" />*/
	disposeCore: function (disposing) {
		if (disposing) {
			this.__baseStream.close();
		}
	}
	/*<EndMethod Name="System.Void System.IO.BinaryWriter::Dispose(System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.BinaryWriter::Flush()" />*/
	flush: function () {
		this.__baseStream.flush();
	}
	/*<EndMethod Name="System.Void System.IO.BinaryWriter::Flush()" />*/
	,
	/*<BeginMethod Name="System.Int64 System.IO.BinaryWriter::Seek(System.Int32, System.IO.SeekOrigin)" />*/
	seek: function (offset, origin) {
		return this.__baseStream.seek(offset, origin);
	}
	/*<EndMethod Name="System.Int64 System.IO.BinaryWriter::Seek(System.Int32, System.IO.SeekOrigin)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.BinaryWriter::Write(System.Boolean)" />*/
	write4: function (value) {
		this.__baseStream.write($.ig.BitConverter.prototype.getBytes(value), 0, 1);
	}
	/*<EndMethod Name="System.Void System.IO.BinaryWriter::Write(System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.BinaryWriter::Write(System.Byte)" />*/
	write5: function (value) {
		this.__baseStream.write($.ig.BitConverter.prototype.getBytes3(value), 0, 1);
	}
	/*<EndMethod Name="System.Void System.IO.BinaryWriter::Write(System.Byte)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.BinaryWriter::Write()" />*/
	write: function (buffer) {
		this.__baseStream.write(buffer, 0, buffer.length);
	}
	/*<EndMethod Name="System.Void System.IO.BinaryWriter::Write()" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.BinaryWriter::Write(System.Char)" />*/
	write6: function (ch) {
	}
	/*<EndMethod Name="System.Void System.IO.BinaryWriter::Write(System.Char)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.BinaryWriter::Write()" />*/
	write1: function (chars) {
	}
	/*<EndMethod Name="System.Void System.IO.BinaryWriter::Write()" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.BinaryWriter::Write(System.Double)" />*/
	write7: function (value) {
		this.__baseStream.write($.ig.BitConverter.prototype.getBytes2(value), 0, 8);
	}
	/*<EndMethod Name="System.Void System.IO.BinaryWriter::Write(System.Double)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.BinaryWriter::Write(System.Single)" />*/
	write12: function (value) {
		this.__baseStream.write($.ig.BitConverter.prototype.getBytes6(value), 0, 4);
	}
	/*<EndMethod Name="System.Void System.IO.BinaryWriter::Write(System.Single)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.BinaryWriter::Write(System.Int32)" />*/
	write9: function (value) {
		this.__baseStream.write($.ig.BitConverter.prototype.getBytes4(value), 0, 4);
	}
	/*<EndMethod Name="System.Void System.IO.BinaryWriter::Write(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.BinaryWriter::Write(System.Int64)" />*/
	write10: function (value) {
		this.__baseStream.write($.ig.BitConverter.prototype.getBytes5(value), 0, 8);
	}
	/*<EndMethod Name="System.Void System.IO.BinaryWriter::Write(System.Int64)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.BinaryWriter::Write(System.SByte)" />*/
	write11: function (value) {
		this.__baseStream.write($.ig.BitConverter.prototype.getBytes3(value), 0, 2);
	}
	/*<EndMethod Name="System.Void System.IO.BinaryWriter::Write(System.SByte)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.BinaryWriter::Write(System.Int16)" />*/
	write8: function (value) {
		this.__baseStream.write($.ig.BitConverter.prototype.getBytes3(value), 0, 2);
	}
	/*<EndMethod Name="System.Void System.IO.BinaryWriter::Write(System.Int16)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.BinaryWriter::Write(System.String)" />*/
	write13: function (value) {
	}
	/*<EndMethod Name="System.Void System.IO.BinaryWriter::Write(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.BinaryWriter::Write(System.UInt32)" />*/
	write15: function (value) {
		this.__baseStream.write($.ig.BitConverter.prototype.getBytes8(value), 0, 4);
	}
	/*<EndMethod Name="System.Void System.IO.BinaryWriter::Write(System.UInt32)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.BinaryWriter::Write(System.UInt64)" />*/
	write16: function (value) {
		this.__baseStream.write($.ig.BitConverter.prototype.getBytes9(value), 0, 8);
	}
	/*<EndMethod Name="System.Void System.IO.BinaryWriter::Write(System.UInt64)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.BinaryWriter::Write(System.UInt16)" />*/
	write14: function (value) {
		this.__baseStream.write($.ig.BitConverter.prototype.getBytes7(value), 0, 2);
	}
	/*<EndMethod Name="System.Void System.IO.BinaryWriter::Write(System.UInt16)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.BinaryWriter::Write(, System.Int32, System.Int32)" />*/
	write2: function (buffer, index, count) {
	}
	/*<EndMethod Name="System.Void System.IO.BinaryWriter::Write(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.BinaryWriter::Write(, System.Int32, System.Int32)" />*/
	write3: function (chars, index, count) {
	}
	/*<EndMethod Name="System.Void System.IO.BinaryWriter::Write(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.BinaryWriter::Write7BitEncodedInt(System.Int32)" />*/
	write7BitEncodedInt: function (value) {
	}
	/*<EndMethod Name="System.Void System.IO.BinaryWriter::Write7BitEncodedInt(System.Int32)" />*/
	,
	$type: new $.ig.Type('BinaryWriter', $.ig.Object.prototype.$type, [$.ig.IDisposable.prototype.$type])
}, true);

/*<EndType Name="System.IO.BinaryWriter" />*/

/*<BeginType Name="System.IO.MemoryStream" />*/

$.ig.util.defType('MemoryStream', 'Stream', {
	__data: null,
	__position: 0,
	__length: 0,
	__hasStrings: false,
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
		$.ig.MemoryStream.prototype.init1.call(this, 1, 0);
	},
	init1: function (initNumber, capacity) {
		$.ig.Stream.prototype.init.call(this);
		this.__data = new Array(capacity);
		for (var i = 0; i < capacity; i++) {
			this.__data[i] = 0;
		}
	},
	init2: function (initNumber, buffer) {
		$.ig.Stream.prototype.init.call(this);
		this.__data = buffer;
		this.__length = buffer.length;
		this.__hasStrings = this.__length != 0 && typeof this.__data[0] === 'string';
	},
	/*<BeginProperty Name="System.Boolean System.IO.MemoryStream::CanRead()" />*/
	canRead: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean System.IO.MemoryStream::CanRead()" />*/
	,
	/*<BeginProperty Name="System.Boolean System.IO.MemoryStream::CanSeek()" />*/
	canSeek: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean System.IO.MemoryStream::CanSeek()" />*/
	,
	/*<BeginProperty Name="System.Boolean System.IO.MemoryStream::CanWrite()" />*/
	canWrite: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean System.IO.MemoryStream::CanWrite()" />*/
	,
	/*<BeginProperty Name="System.Int32 System.IO.MemoryStream::Capacity()" />*/
	capacity: function (value) {
		if (arguments.length === 1) {
			if (this.__data.length == value) {
				return;
			}
			for (var i = this.__length; i < value; i++) {
				this.__data[i] = 0;
			}
			return value;
		} else {
			return this.__data.length;
		}
	}
	/*<EndProperty Name="System.Int32 System.IO.MemoryStream::Capacity()" />*/
	,
	/*<BeginProperty Name="System.Int64 System.IO.MemoryStream::Length()" />*/
	length: function () {
		return this.__length;
	}
	/*<EndProperty Name="System.Int64 System.IO.MemoryStream::Length()" />*/
	,
	/*<BeginProperty Name="System.Int64 System.IO.MemoryStream::Position()" />*/
	position: function (value) {
		if (arguments.length === 1) {
			if (this.__position == value) {
				return;
			}
			this.__position = value;
			if (this.capacity() <= this.__position) {
				this.capacity(this.__position + 1);
			}
			return value;
		} else {
			return this.__position;
		}
	}
	/*<EndProperty Name="System.Int64 System.IO.MemoryStream::Position()" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.MemoryStream::Dispose(System.Boolean)" />*/
	disposeCore: function (disposing) {
	}
	/*<EndMethod Name="System.Void System.IO.MemoryStream::Dispose(System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.MemoryStream::Flush()" />*/
	flush: function () {
	}
	/*<EndMethod Name="System.Void System.IO.MemoryStream::Flush()" />*/
	,
	/*<BeginMethod Name=" System.IO.MemoryStream::GetBuffer()" />*/
	getBuffer: function () {
		return this.__data;
	}
	/*<EndMethod Name=" System.IO.MemoryStream::GetBuffer()" />*/
	,
	/*<BeginMethod Name="System.Int32 System.IO.MemoryStream::Read(, System.Int32, System.Int32)" />*/
	read: function (buffer, offset, count) {
		var resolvedCount = Math.min(this.__length - this.__position, count);
		if (this.__hasStrings) {
			for (var i = 0; i < resolvedCount; i++) {
				buffer[offset++] = this.__data[this.__position++].charCodeAt(0) & 0xFF;
			}
		} else {
			for (var i1 = 0; i1 < resolvedCount; i1++) {
				buffer[offset++] = this.__data[this.__position++];
			}
		}
		return resolvedCount;
	}
	/*<EndMethod Name="System.Int32 System.IO.MemoryStream::Read(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.IO.MemoryStream::ReadByte()" />*/
	readByte: function () {
		if (this.__length <= this.__position) {
			return -1;
		}
		if (this.__hasStrings) {
			return this.__data[this.__position++].charCodeAt(0) & 0xFF;
		}
		return this.__data[this.__position++];
	}
	/*<EndMethod Name="System.Int32 System.IO.MemoryStream::ReadByte()" />*/
	,
	/*<BeginMethod Name="System.Int64 System.IO.MemoryStream::Seek(System.Int64, System.IO.SeekOrigin)" />*/
	seek: function (offset, loc) {
		switch (loc) {
			case $.ig.SeekOrigin.prototype.begin:
				this.__position = offset;
				break;
			case $.ig.SeekOrigin.prototype.current:
				this.__position += offset;
				break;
			case $.ig.SeekOrigin.prototype.end:
				this.__position = this.__length + offset;
				break;
		}
		return this.__position;
	}
	/*<EndMethod Name="System.Int64 System.IO.MemoryStream::Seek(System.Int64, System.IO.SeekOrigin)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.MemoryStream::SetLength(System.Int64)" />*/
	setLength: function (value) {
		if (this.capacity() < value) {
			this.capacity(Math.max(value, this.capacity() * 2));
		}
		this.__length = value;
		if (this.__length < this.__position) {
			this.__position = this.__length;
		}
	}
	/*<EndMethod Name="System.Void System.IO.MemoryStream::SetLength(System.Int64)" />*/
	,
	/*<BeginMethod Name=" System.IO.MemoryStream::ToArray()" />*/
	toArray: function () {
		if (this.__hasStrings) {
			var all = new Array(this.__length);
			var position = this.position();
			this.position(0);
			this.read(all, 0, all.length);
			this.position(position);
			return all;
		}
		return this.__data.slice(0, this.__length);
	}
	/*<EndMethod Name=" System.IO.MemoryStream::ToArray()" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.MemoryStream::Write(, System.Int32, System.Int32)" />*/
	write: function (buffer, offset, count) {
		var newPosition = this.__position + count;
		if (this.length() < newPosition) {
			this.setLength(newPosition);
		}
		var isString = count != 0 && typeof buffer[offset] === 'string';
		if (isString == this.__hasStrings) {
			for (var i = 0; i < count; i++) {
				this.__data[this.__position++] = buffer[offset++];
			}
		} else if (isString) {
			for (var i1 = 0; i1 < count; i1++) {
				this.__data[this.__position++] = buffer.charCodeAt(offset++) & 0xFF;
			}
		} else {
			for (var i2 = 0; i2 < count; i2++) {
				this.__data[this.__position++] = String.fromCharCode(buffer[offset++]);
			}
		}
	}
	/*<EndMethod Name="System.Void System.IO.MemoryStream::Write(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.MemoryStream::WriteByte(System.Byte)" />*/
	writeByte: function (value) {
		var isString = typeof value === 'string';
		if (isString == this.__hasStrings) {
			this.__data[this.__position++] = value;
		} else if (isString) {
			this.__data[this.__position++] = value.charCodeAt(0) & 0xFF;
		} else {
			this.__data[this.__position++] = String.fromCharCode(value);
		}
		if (this.__length < this.__position) {
			this.__length = this.__position;
		}
	}
	/*<EndMethod Name="System.Void System.IO.MemoryStream::WriteByte(System.Byte)" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.MemoryStream::WriteTo(System.IO.Stream)" />*/
	writeTo: function (stream) {
		stream.write(this.__data, 0, this.__length);
	}
	/*<EndMethod Name="System.Void System.IO.MemoryStream::WriteTo(System.IO.Stream)" />*/
	,
	$type: new $.ig.Type('MemoryStream', $.ig.Stream.prototype.$type)
}, true);

/*<EndType Name="System.IO.MemoryStream" />*/

/*<BeginType Name="System.IO.TextReader" />*/

$.ig.util.defType('TextReader', 'Object', {
	staticInit: function () {
		$.ig.TextReader.prototype.$null = new $.ig.TextReader_NullTextReader();
	},
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Void System.IO.TextReader::Close()" />*/
	close: function () {
		this.dispose1(true);
	}
	/*<EndMethod Name="System.Void System.IO.TextReader::Close()" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.TextReader::Dispose()" />*/
	dispose: function () {
		this.dispose1(true);
	}
	/*<EndMethod Name="System.Void System.IO.TextReader::Dispose()" />*/
	,
	/*<BeginMethod Name="System.Void System.IO.TextReader::Dispose(System.Boolean)" />*/
	dispose1: function (disposing) {
		if (disposing) {
		}
		return;
	}
	/*<EndMethod Name="System.Void System.IO.TextReader::Dispose(System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.IO.TextReader::Peek()" />*/
	peek: function () {
		return -1;
	}
	/*<EndMethod Name="System.Int32 System.IO.TextReader::Peek()" />*/
	,
	/*<BeginMethod Name="System.Int32 System.IO.TextReader::Read()" />*/
	read: function () {
		return -1;
	}
	/*<EndMethod Name="System.Int32 System.IO.TextReader::Read()" />*/
	,
	/*<BeginMethod Name="System.Int32 System.IO.TextReader::Read(, System.Int32, System.Int32)" />*/
	read1: function (buffer, index, count) {
		var c, i;
		for (i = 0; i < count; i++) {
			if ((c = this.read()) == -1) {
				return i;
			}
			buffer[index + i] = String.fromCharCode(c);
		}
		return i;
	}
	/*<EndMethod Name="System.Int32 System.IO.TextReader::Read(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.IO.TextReader::ReadBlock(, System.Int32, System.Int32)" />*/
	readBlock: function (buffer, index, count) {
		var total_read_count = 0;
		var current_read_count = 0;
		do {
			current_read_count = this.read1(buffer, index, count);
			index += current_read_count;
			total_read_count += current_read_count;
			count -= current_read_count;
		} while (current_read_count != 0 && count > 0);
		return total_read_count;
	}
	/*<EndMethod Name="System.Int32 System.IO.TextReader::ReadBlock(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.String System.IO.TextReader::ReadLine()" />*/
	readLine: function () {
		return String.empty();
	}
	/*<EndMethod Name="System.String System.IO.TextReader::ReadLine()" />*/
	,
	/*<BeginMethod Name="System.String System.IO.TextReader::ReadToEnd()" />*/
	readToEnd: function () {
		return String.empty();
	}
	/*<EndMethod Name="System.String System.IO.TextReader::ReadToEnd()" />*/
	,
	/*<BeginMethod Name="System.IO.TextReader System.IO.TextReader::Synchronized(System.IO.TextReader)" />*/
	synched: function (reader) {
		if (reader == null) {
			throw new $.ig.ArgumentNullException(0, "reader is null");
		}
		if ($.ig.util.cast($.ig.SynchronizedReader.prototype.$type, reader) !== null) {
			return reader;
		}
		return new $.ig.SynchronizedReader(reader);
	}
	/*<EndMethod Name="System.IO.TextReader System.IO.TextReader::Synchronized(System.IO.TextReader)" />*/
	,
	$type: new $.ig.Type('TextReader', $.ig.Object.prototype.$type, [$.ig.IDisposable.prototype.$type])
}, true);

/*<EndType Name="System.IO.TextReader" />*/

/*<BeginType Name="System.IO.StreamReader" />*/

$.ig.util.defType('StreamReader', 'TextReader', {
	__stream: null,
	__encoding: null,
	__decoder: null,
	__charBuffer: null,
	__charBufferLength: 0,
	__charBufferPosition: 0,
	init: function (stream) {
		$.ig.TextReader.prototype.init.call(this);
		this.__stream = stream;
		this.__encoding = $.ig.Encoding.prototype.uTF8();
		this.__decoder = this.__encoding.getDecoder();
		this.__charBuffer = new Array(this.__encoding.getMaxCharCount($.ig.StreamReader.prototype._bufferSize));
	},
	/*<BeginMethod Name="System.Void System.IO.StreamReader::FillBuffer()" />*/
	fillBuffer: function () {
		var buffer = new Array($.ig.StreamReader.prototype._bufferSize);
		var byteCount = this.__stream.read(buffer, 0, buffer.length);
		this.__charBufferLength = this.__decoder.getChars(buffer, 0, byteCount, this.__charBuffer, 0);
		this.__charBufferPosition = 0;
	}
	/*<EndMethod Name="System.Void System.IO.StreamReader::FillBuffer()" />*/
	,
	/*<BeginMethod Name="System.Int32 System.IO.StreamReader::Peek()" />*/
	peek: function () {
		if (this.__charBufferPosition == this.__charBufferLength) {
			this.fillBuffer();
			if (this.__charBufferPosition == this.__charBufferLength) {
				return -1;
			}
		}
		return this.__charBuffer[this.__charBufferPosition].charCodeAt(0);
	}
	/*<EndMethod Name="System.Int32 System.IO.StreamReader::Peek()" />*/
	,
	/*<BeginMethod Name="System.Int32 System.IO.StreamReader::Read()" />*/
	read: function () {
		if (this.__charBufferPosition == this.__charBufferLength) {
			this.fillBuffer();
			if (this.__charBufferPosition == this.__charBufferLength) {
				return -1;
			}
		}
		return this.__charBuffer[this.__charBufferPosition++].charCodeAt(0);
	}
	/*<EndMethod Name="System.Int32 System.IO.StreamReader::Read()" />*/
	,
	/*<BeginMethod Name="System.Int32 System.IO.StreamReader::Read(, System.Int32, System.Int32)" />*/
	read1: function (buffer, index, count) {
		var total = 0;
		while (count > 0) {
			var charsRemaining = Math.min(count, this.__charBufferLength - this.__charBufferPosition);
			if (charsRemaining == 0) {
				this.fillBuffer();
				charsRemaining = Math.min(count, this.__charBufferLength - this.__charBufferPosition);
				if (charsRemaining == 0) {
					break;
				}
			}
			$.ig.util.arrayCopy1(this.__charBuffer, this.__charBufferPosition, buffer, index, charsRemaining);
			total += charsRemaining;
			count -= charsRemaining;
			this.__charBufferPosition += charsRemaining;
		}
		return total;
	}
	/*<EndMethod Name="System.Int32 System.IO.StreamReader::Read(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.String System.IO.StreamReader::ReadLine()" />*/
	readLine: function () {
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndMethod Name="System.String System.IO.StreamReader::ReadLine()" />*/
	,
	/*<BeginMethod Name="System.String System.IO.StreamReader::ReadToEnd()" />*/
	readToEnd: function () {
		var builder = new $.ig.StringBuilder(0);
		while (true) {
			var charsRemaining = this.__charBufferLength - this.__charBufferPosition;
			if (charsRemaining == 0) {
				this.fillBuffer();
				charsRemaining = this.__charBufferLength - this.__charBufferPosition;
				if (charsRemaining == 0) {
					break;
				}
			}
			builder.append(this.__charBuffer, this.__charBufferPosition, charsRemaining);
			this.__charBufferPosition = this.__charBufferLength;
		}
		return builder.toString();
	}
	/*<EndMethod Name="System.String System.IO.StreamReader::ReadToEnd()" />*/
	,
	$type: new $.ig.Type('StreamReader', $.ig.TextReader.prototype.$type)
}, true);

/*<EndType Name="System.IO.StreamReader" />*/

/*<BeginType Name="System.IO.TextReader_NullTextReader" />*/

$.ig.util.defType('TextReader_NullTextReader', 'TextReader', {
	init: function () {
		$.ig.TextReader.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.String System.IO.TextReader_NullTextReader::ReadLine()" />*/
	readLine: function () {
		return null;
	}
	/*<EndMethod Name="System.String System.IO.TextReader_NullTextReader::ReadLine()" />*/
	,
	$type: new $.ig.Type('TextReader_NullTextReader', $.ig.TextReader.prototype.$type)
}, true);

/*<EndType Name="System.IO.TextReader_NullTextReader" />*/

/*<BeginType Name="System.IO.SynchronizedReader" />*/

$.ig.util.defType('SynchronizedReader', 'TextReader', {
	_reader: null,
	init: function (reader) {
		$.ig.TextReader.prototype.init.call(this);
		this._reader = reader;
	},
	/*<BeginMethod Name="System.Void System.IO.SynchronizedReader::Close()" />*/
	close: function () {
		this._reader.close();
	}
	/*<EndMethod Name="System.Void System.IO.SynchronizedReader::Close()" />*/
	,
	/*<BeginMethod Name="System.Int32 System.IO.SynchronizedReader::Peek()" />*/
	peek: function () {
		return this._reader.peek();
	}
	/*<EndMethod Name="System.Int32 System.IO.SynchronizedReader::Peek()" />*/
	,
	/*<BeginMethod Name="System.Int32 System.IO.SynchronizedReader::ReadBlock(, System.Int32, System.Int32)" />*/
	readBlock: function (buffer, index, count) {
		return this._reader.readBlock(buffer, index, count);
	}
	/*<EndMethod Name="System.Int32 System.IO.SynchronizedReader::ReadBlock(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.String System.IO.SynchronizedReader::ReadLine()" />*/
	readLine: function () {
		return this._reader.readLine();
	}
	/*<EndMethod Name="System.String System.IO.SynchronizedReader::ReadLine()" />*/
	,
	/*<BeginMethod Name="System.String System.IO.SynchronizedReader::ReadToEnd()" />*/
	readToEnd: function () {
		return this._reader.readToEnd();
	}
	/*<EndMethod Name="System.String System.IO.SynchronizedReader::ReadToEnd()" />*/
	,
	/*<BeginMethod Name="System.Int32 System.IO.SynchronizedReader::Read()" />*/
	read: function () {
		return this._reader.read();
	}
	/*<EndMethod Name="System.Int32 System.IO.SynchronizedReader::Read()" />*/
	,
	/*<BeginMethod Name="System.Int32 System.IO.SynchronizedReader::Read(, System.Int32, System.Int32)" />*/
	read1: function (buffer, index, count) {
		return this._reader.read1(buffer, index, count);
	}
	/*<EndMethod Name="System.Int32 System.IO.SynchronizedReader::Read(, System.Int32, System.Int32)" />*/
	,
	$type: new $.ig.Type('SynchronizedReader', $.ig.TextReader.prototype.$type)
}, true);

/*<EndType Name="System.IO.SynchronizedReader" />*/

/*<BeginStatics Name="System.BitConverter" />*/

$.ig.BitConverter.prototype.isLittleEndian = false;
/*<EndStatics Name="System.BitConverter" />*/

/*<BeginStatics Name="System.IO.Path" />*/

$.ig.IOPath.prototype.altDirectorySeparatorChar = '/';
$.ig.IOPath.prototype.directorySeparatorChar = '\\';
$.ig.IOPath.prototype.pathSeparator = ';';
$.ig.IOPath.prototype.volumeSeparatorChar = ':';
/*<EndStatics Name="System.IO.Path" />*/

/*<BeginStatics Name="System.IO.TextReader" />*/

$.ig.TextReader.prototype.$null = null;
if ($.ig.TextReader.prototype.staticInit && !$.ig.TextReader.prototype.textReaderStaticInitCalled) { $.ig.TextReader.prototype.staticInit(); $.ig.TextReader.prototype.textReaderStaticInitCalled = true; }
/*<EndStatics Name="System.IO.TextReader" />*/

/*<BeginStatics Name="System.IO.StreamReader" />*/

$.ig.StreamReader.prototype._bufferSize = 1024;
/*<EndStatics Name="System.IO.StreamReader" />*/


/*<BeginFooter/>*/
}));// REMOVE_FROM_COMBINED_FILES
/*<EndFooter/>*/

