/*!@license
* Infragistics.Web.ClientUI infragistics.documents.core_core.js 17.1.20171.1012
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
*     infragistics.ext_ui.js
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
			'./infragistics.ext_ui'
		], factory );
	} else {
		factory(igRoot);
	}
}
(function ($) {
	/*!@license
* Infragistics.Web.ClientUI infragistics.documents.core_core.js resources 17.1.20171.1012
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global define, jQuery */

	$.ig = $.ig || {};
	$.ig.documentsCore = $.ig.documentsCore || {};
	$.ig.documentsCore.locale = $.ig.documentsCore.locale || {};
	$.extend($.ig.documentsCore.locale, {

		getString: function(name) {
			var str = this[name];
			if (!str) return null;
			if (arguments.length === 1) return str;
			return $.ig.util.stringFormat1(str, Array.prototype.slice.call(arguments, 1));
		},
		LE_ArgumentOutOfRangeException_ValueError: "Invalid {0} value. It must be between {1} and {2}.",
		LE_DocumentEncryptedException_DefaultMessage: "The document is encrypted and must be opened with a password.",
		LE_EncryptionAlgorithmNotSupportedException_DefaultMessage: "The document is encrypted with an unsupported encryption algorithm and cannot be decrypted.",
		LE_FormatException_TypeError: "Incorrect {0} format: {0}.",
		LE_InvalidPasswordException_DefaultMessage: "The password used to open the encrypted document is incorrect."
	});


/*<EndHeader/>*/
$.ig = $.ig || {};
var $$t = {};
$.ig.globalDefs = $.ig.globalDefs || {};
$.ig.globalDefs.$$v = $$t;
$$0 = $.ig.globalDefs.$$0;
$$4 = $.ig.globalDefs.$$4;
$$7 = $.ig.globalDefs.$$7;
$$8 = $.ig.globalDefs.$$8;
$$6 = $.ig.globalDefs.$$6;
$$a = $.ig.globalDefs.$$a;
$.ig.$currDefinitions = $$t;
$.ig.util.bulkDefine([
"WorkItem:i",
"WorkItem$1:j",
"WorkItemScheduler:n",
"WorkItemExtensions:o",
"IShallowCloneable:ar",
"IPackageFactory:ax",
"IPackage:ay",
"IPackagePart:az",
"IPackagePartEx:a0",
"IPackageRelationship:a1",
"IInvalidPackageRelationshipTarget:a3",
"Directory:a4",
"DirectoryEntry:a5",
"DirectoryEntryStream:a7",
"DirectoryStream:a8",
"File:bc",
"MasterSATStream:bd",
"SATStream:be",
"SATStreamBase:bf",
"ShortSATStream:bh",
"StructuredStorageManager:bi",
"StructuredStorageStream:bj",
"UserFileStream:bl",
"IDictionaryEnumerator:cr"]);
/*<BeginType Name="Infragistics.Documents.Core.Packaging.RelationshipTargetMode" />*/

$.ig.util.defEnum('RelationshipTargetMode', false, false, {
	Internal: 0,
	External: 1
});

/*<EndType Name="Infragistics.Documents.Core.Packaging.RelationshipTargetMode" />*/

/*<BeginType Name="Infragistics.Documents.Core.StructuredStorage.FileTypes.VariantType" />*/

$.ig.util.defEnum('VariantType', false, false, {
	Empty: 0,
	"Null:$null": 1,
	I2: 2,
	I4: 3,
	R4: 4,
	R8: 5,
	CY: 6,
	Date: 7,
	Bstr: 8,
	Dispatch: 9,
	Error: 10,
	Bool: 11,
	Variant: 12,
	Unknown: 13,
	Decimal: 14,
	I1: 16,
	UI1: 17,
	UI2: 18,
	UI4: 19,
	I8: 20,
	UI8: 21,
	INT: 22,
	UINT: 23,
	VOID: 24,
	Hresult: 25,
	PTR: 26,
	SafeArray: 27,
	CARRAY: 28,
	UserDefined: 29,
	LPSTR: 30,
	LPWSTR: 31,
	FileTime: 64,
	BLOB: 65,
	Stream: 66,
	Storage: 67,
	StreamedObject: 68,
	BLOBObject: 69,
	CF: 70,
	CLSID: 71,
	Vector: 4096,
	Array: 8192,
	ByRef: 16384,
	Reserved: 32768
});

/*<EndType Name="Infragistics.Documents.Core.StructuredStorage.FileTypes.VariantType" />*/

/*<BeginType Name="Infragistics.Documents.Core.StructuredStorage.FileTypes.UserDefinedPropertyType" />*/

$.ig.util.defEnum('UserDefinedPropertyType', false, false, {
	Dictionary: 0,
	SelfDefStructure: 16777218,
	StructureInstance: 16777220,
	Locale: -2147483648
});

/*<EndType Name="Infragistics.Documents.Core.StructuredStorage.FileTypes.UserDefinedPropertyType" />*/

/*<BeginType Name="Infragistics.Documents.Core.StructuredStorage.FileTypes.SummaryPropertyType" />*/

$.ig.util.defEnum('SummaryPropertyType', false, false, {
	Title: 2,
	Subject: 3,
	Author: 4,
	Keywords: 5,
	Comments: 6,
	Template: 7,
	LastSavedBy: 8,
	RevisionNumber: 9,
	TotalEditingTime: 10,
	LastPrinted: 11,
	CreatedDateTime: 12,
	LastSavedDateTime: 13,
	NumberOfPages: 14,
	NumberOfWords: 15,
	NumberOfCharacters: 16,
	Thumbnail: 17,
	NameOfCreatingApplication: 18,
	Security: 19
});

/*<EndType Name="Infragistics.Documents.Core.StructuredStorage.FileTypes.SummaryPropertyType" />*/

/*<BeginType Name="Infragistics.Documents.Core.StructuredStorage.FileTypes.DocumentSummaryPropertyType" />*/

$.ig.util.defEnum('DocumentSummaryPropertyType', false, false, {
	Category: 2,
	PresentationTarget: 3,
	Bytes: 4,
	Lines: 5,
	Paragraphs: 6,
	Slides: 7,
	Notes: 8,
	HiddenSlides: 9,
	MMClips: 10,
	ScaleCrop: 11,
	HeadingPairs: 12,
	TitlesOfParts: 13,
	Manager: 14,
	Company: 15,
	LinksUpToData: 16,
	Status: 27
});

/*<EndType Name="Infragistics.Documents.Core.StructuredStorage.FileTypes.DocumentSummaryPropertyType" />*/

/*<BeginType Name="Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream_StreamType" />*/

$.ig.util.defEnum('StructuredStorageStream_StreamType', false, false, {
	Normal: 0,
	SAT: 1,
	MasterSAT: 2
});

/*<EndType Name="Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream_StreamType" />*/

/*<BeginType Name="Infragistics.Documents.Core.StructuredStorage.DirectoryStream_PropertyType" />*/

$.ig.util.defEnum('DirectoryStream_PropertyType', false, false, {
	Empty: 0,
	Ole2Storage: 1,
	Ole2Stream: 2,
	RootEntry: 5
});

/*<EndType Name="Infragistics.Documents.Core.StructuredStorage.DirectoryStream_PropertyType" />*/

/*<BeginType Name="Infragistics.Documents.Core.StructuredStorage.DirectoryStream_NodeColor" />*/

$.ig.util.defEnum('DirectoryStream_NodeColor', false, false, {
	Red: 0,
	Black: 1
});

/*<EndType Name="Infragistics.Documents.Core.StructuredStorage.DirectoryStream_NodeColor" />*/

/*<BeginType Name="Infragistics.Documents.Core.MsoCrypto.OleDataSpacesEncryptionMode" />*/

$.ig.util.defEnum('OleDataSpacesEncryptionMode', false, false, {
	Standard: 0,
	Agile: 1,
	Latest: 1
});

/*<EndType Name="Infragistics.Documents.Core.MsoCrypto.OleDataSpacesEncryptionMode" />*/

/*<BeginType Name="Infragistics.Documents.Core.Utilities_ColorIndex" />*/

$.ig.util.defEnum('Utilities_ColorIndex', false, false, {
	PaletteIndex: 1,
	PaletteRGB: 2,
	SystemRGB: 4,
	SchemeIndex: 8,
	SysIndex: 16
});

/*<EndType Name="Infragistics.Documents.Core.Utilities_ColorIndex" />*/

/*<BeginType Name="Infragistics.Documents.Core.EscherSysIndex" />*/

$.ig.util.defEnum('EscherSysIndex', false, false, {
	SystemColorButtonFace: 0,
	SystemColorWindowText: 1,
	SystemColorMenu: 2,
	SystemColorHighlight: 3,
	SystemColorHighlightText: 4,
	SystemColorCaptionText: 5,
	SystemColorActiveCaption: 6,
	SystemColorButtonHighlight: 7,
	SystemColorButtonShadow: 8,
	SystemColorButtonText: 9,
	SystemColorGrayText: 10,
	SystemColorInactiveCaption: 11,
	SystemColorInactiveCaptionText: 12,
	SystemColorInfoBackground: 13,
	SystemColorInfoText: 14,
	SystemColorMenuText: 15,
	SystemColorScrollbar: 16,
	SystemColorWindow: 17,
	SystemColorWindowFrame: 18,
	SystemColor3DLight: 19,
	SystemColorMax: 20,
	FillColor: 240,
	LineOrFillColor: 241,
	LineColor: 242,
	ShadowColor: 243,
	"This:$this": 244,
	FillBackColor: 245,
	LineBackColor: 246,
	FillThenLine: 247,
	IndexMask: 255,
	ProcessMask: 16776960,
	ModificationMask: 3840,
	ModFlagMask: 61440,
	Darken: 256,
	Lighten: 512,
	Add: 768,
	Subtract: 1024,
	ReverseSubtract: 1280,
	BlackWhite: 1536,
	Invert: 8192,
	Invert128: 16384,
	Gray: 32768,
	BParamMask: 16711680,
	BParamShift: 16
});

/*<EndType Name="Infragistics.Documents.Core.EscherSysIndex" />*/

/*<BeginType Name="Infragistics.Documents.Core.WorkItemContinuationType" />*/

$.ig.util.defEnum('WorkItemContinuationType', false, false, {
	"Default:$default": 0,
	Synchronous: 1,
	Asynchronous: 2
});

/*<EndType Name="Infragistics.Documents.Core.WorkItemContinuationType" />*/

/*<BeginType Name="Infragistics.Documents.OfficeOpenXml.Core.ST_UniversalMeasure_UnitType" />*/

$.ig.util.defEnum('ST_UniversalMeasure_UnitType', false, false, {
	centimeters: 0,
	millimeters: 1,
	inches: 2,
	points: 3,
	pc: 4,
	pi: 5
});

/*<EndType Name="Infragistics.Documents.OfficeOpenXml.Core.ST_UniversalMeasure_UnitType" />*/

/*<BeginType Name="Infragistics.Documents.OfficeOpenXml.Core.ST_ShapeType" />*/

$.ig.util.defEnum('ST_ShapeType', false, false, {
	line: 0,
	lineInv: 1,
	triangle: 2,
	rtTriangle: 3,
	rect: 4,
	diamond: 5,
	parallelogram: 6,
	trapezoid: 7,
	nonIsoscelesTrapezoid: 8,
	pentagon: 9,
	hexagon: 10,
	heptagon: 11,
	octagon: 12,
	decagon: 13,
	dodecagon: 14,
	star4: 15,
	star5: 16,
	star6: 17,
	star7: 18,
	star8: 19,
	star10: 20,
	star12: 21,
	star16: 22,
	star24: 23,
	star32: 24,
	roundRect: 25,
	round1Rect: 26,
	round2SameRect: 27,
	round2DiagRect: 28,
	snipRoundRect: 29,
	snip1Rect: 30,
	snip2SameRect: 31,
	snip2DiagRect: 32,
	plaque: 33,
	ellipse: 34,
	teardrop: 35,
	homePlate: 36,
	chevron: 37,
	pieWedge: 38,
	pie: 39,
	blockArc: 40,
	donut: 41,
	noSmoking: 42,
	rightArrow: 43,
	leftArrow: 44,
	upArrow: 45,
	downArrow: 46,
	stripedRightArrow: 47,
	notchedRightArrow: 48,
	bentUpArrow: 49,
	leftRightArrow: 50,
	upDownArrow: 51,
	leftUpArrow: 52,
	leftRightUpArrow: 53,
	quadArrow: 54,
	leftArrowCallout: 55,
	rightArrowCallout: 56,
	upArrowCallout: 57,
	downArrowCallout: 58,
	leftRightArrowCallout: 59,
	upDownArrowCallout: 60,
	quadArrowCallout: 61,
	bentArrow: 62,
	uturnArrow: 63,
	circularArrow: 64,
	leftCircularArrow: 65,
	leftRightCircularArrow: 66,
	curvedRightArrow: 67,
	curvedLeftArrow: 68,
	curvedUpArrow: 69,
	curvedDownArrow: 70,
	swooshArrow: 71,
	cube: 72,
	can: 73,
	lightningBolt: 74,
	heart: 75,
	sun: 76,
	moon: 77,
	smileyFace: 78,
	irregularSeal1: 79,
	irregularSeal2: 80,
	foldedCorner: 81,
	bevel: 82,
	frame: 83,
	halfFrame: 84,
	corner: 85,
	diagStripe: 86,
	chord: 87,
	arc: 88,
	leftBracket: 89,
	rightBracket: 90,
	leftBrace: 91,
	rightBrace: 92,
	bracketPair: 93,
	bracePair: 94,
	straightConnector1: 95,
	bentConnector2: 96,
	bentConnector3: 97,
	bentConnector4: 98,
	bentConnector5: 99,
	curvedConnector2: 100,
	curvedConnector3: 101,
	curvedConnector4: 102,
	curvedConnector5: 103,
	callout1: 104,
	callout2: 105,
	callout3: 106,
	accentCallout1: 107,
	accentCallout2: 108,
	accentCallout3: 109,
	borderCallout1: 110,
	borderCallout2: 111,
	borderCallout3: 112,
	accentBorderCallout1: 113,
	accentBorderCallout2: 114,
	accentBorderCallout3: 115,
	wedgeRectCallout: 116,
	wedgeRoundRectCallout: 117,
	wedgeEllipseCallout: 118,
	cloudCallout: 119,
	cloud: 120,
	ribbon: 121,
	ribbon2: 122,
	ellipseRibbon: 123,
	ellipseRibbon2: 124,
	leftRightRibbon: 125,
	verticalScroll: 126,
	horizontalScroll: 127,
	wave: 128,
	doubleWave: 129,
	plus: 130,
	flowChartProcess: 131,
	flowChartDecision: 132,
	flowChartInputOutput: 133,
	flowChartPredefinedProcess: 134,
	flowChartInternalStorage: 135,
	flowChartDocument: 136,
	flowChartMultidocument: 137,
	flowChartTerminator: 138,
	flowChartPreparation: 139,
	flowChartManualInput: 140,
	flowChartManualOperation: 141,
	flowChartConnector: 142,
	flowChartPunchedCard: 143,
	flowChartPunchedTape: 144,
	flowChartSummingJunction: 145,
	flowChartOr: 146,
	flowChartCollate: 147,
	flowChartSort: 148,
	flowChartExtract: 149,
	flowChartMerge: 150,
	flowChartOfflineStorage: 151,
	flowChartOnlineStorage: 152,
	flowChartMagneticTape: 153,
	flowChartMagneticDisk: 154,
	flowChartMagneticDrum: 155,
	flowChartDisplay: 156,
	flowChartDelay: 157,
	flowChartAlternateProcess: 158,
	flowChartOffpageConnector: 159,
	actionButtonBlank: 160,
	actionButtonHome: 161,
	actionButtonHelp: 162,
	actionButtonInformation: 163,
	actionButtonForwardNext: 164,
	actionButtonBackPrevious: 165,
	actionButtonEnd: 166,
	actionButtonBeginning: 167,
	actionButtonReturn: 168,
	actionButtonDocument: 169,
	actionButtonSound: 170,
	actionButtonMovie: 171,
	gear6: 172,
	gear9: 173,
	funnel: 174,
	mathPlus: 175,
	mathMinus: 176,
	mathMultiply: 177,
	mathDivide: 178,
	mathEqual: 179,
	mathNotEqual: 180,
	cornerTabs: 181,
	squareTabs: 182,
	plaqueTabs: 183,
	chartX: 184,
	chartStar: 185,
	chartPlus: 186
});

/*<EndType Name="Infragistics.Documents.OfficeOpenXml.Core.ST_ShapeType" />*/

/*<BeginType Name="Infragistics.Documents.OfficeOpenXml.Excel.ST_TotalsRowFunction" />*/

$.ig.util.defEnum('ST_TotalsRowFunction', false, false, {
	none: 0,
	average: 1,
	count: 2,
	countNums: 3,
	max: 4,
	min: 5,
	sum: 6,
	stdDev: 7,
	"var:$var": 8,
	custom: 9
});

/*<EndType Name="Infragistics.Documents.OfficeOpenXml.Excel.ST_TotalsRowFunction" />*/

/*<BeginType Name="Infragistics.Documents.OfficeOpenXml.Excel.ST_TableStyleType" />*/

$.ig.util.defEnum('ST_TableStyleType', false, false, {
	wholeTable: 0,
	headerRow: 1,
	totalRow: 2,
	firstColumn: 3,
	lastColumn: 4,
	firstRowStripe: 5,
	secondRowStripe: 6,
	firstColumnStripe: 7,
	secondColumnStripe: 8,
	firstHeaderCell: 9,
	lastHeaderCell: 10,
	firstTotalCell: 11,
	lastTotalCell: 12,
	firstSubtotalColumn: 13,
	secondSubtotalColumn: 14,
	thirdSubtotalColumn: 15,
	firstSubtotalRow: 16,
	secondSubtotalRow: 17,
	thirdSubtotalRow: 18,
	blankRow: 19,
	firstColumnSubheading: 20,
	secondColumnSubheading: 21,
	thirdColumnSubheading: 22,
	firstRowSubheading: 23,
	secondRowSubheading: 24,
	thirdRowSubheading: 25,
	pageFieldLabels: 26,
	pageFieldValues: 27
});

/*<EndType Name="Infragistics.Documents.OfficeOpenXml.Excel.ST_TableStyleType" />*/

/*<BeginType Name="Infragistics.Documents.OfficeOpenXml.Excel.ST_SortBy" />*/

$.ig.util.defEnum('ST_SortBy', false, false, {
	value: 0,
	cellColor: 1,
	fontColor: 2,
	icon: 3
});

/*<EndType Name="Infragistics.Documents.OfficeOpenXml.Excel.ST_SortBy" />*/

/*<BeginType Name="Infragistics.Documents.OfficeOpenXml.Excel.ST_FilterOperator" />*/

$.ig.util.defEnum('ST_FilterOperator', false, false, {
	lessThan: 1,
	equal: 2,
	lessThanOrEqual: 3,
	greaterThan: 4,
	notEqual: 5,
	greaterThanOrEqual: 6
});

/*<EndType Name="Infragistics.Documents.OfficeOpenXml.Excel.ST_FilterOperator" />*/

/*<BeginType Name="Infragistics.Documents.OfficeOpenXml.Excel.ST_IconSetType" />*/

$.ig.util.defEnum('ST_IconSetType', false, false, {
	_3Arrows: 0,
	_3ArrowsGray: 1,
	_3Flags: 2,
	_3TrafficLights1: 3,
	_3TrafficLights2: 4,
	_3Signs: 5,
	_3Symbols: 6,
	_3Symbols2: 7,
	_4Arrows: 8,
	_4ArrowsGray: 9,
	_4RedToBlack: 10,
	_4Rating: 11,
	_4TrafficLights: 12,
	_5Arrows: 13,
	_5ArrowsGray: 14,
	_5Rating: 15,
	_5Quarters: 16
});

/*<EndType Name="Infragistics.Documents.OfficeOpenXml.Excel.ST_IconSetType" />*/

/*<BeginType Name="Infragistics.Documents.OfficeOpenXml.Excel.ST_DynamicFilterType" />*/

$.ig.util.defEnum('ST_DynamicFilterType', false, false, {
	_null: 0,
	aboveAverage: 1,
	belowAverage: 2,
	tomorrow: 8,
	today: 9,
	yesterday: 10,
	nextWeek: 11,
	thisWeek: 12,
	lastWeek: 13,
	nextMonth: 14,
	thisMonth: 15,
	lastMonth: 16,
	nextQuarter: 17,
	thisQuarter: 18,
	lastQuarter: 19,
	nextYear: 20,
	thisYear: 21,
	lastYear: 22,
	yearToDate: 23,
	Q1: 24,
	Q2: 25,
	Q3: 26,
	Q4: 27,
	M1: 28,
	M2: 29,
	M3: 30,
	M4: 31,
	M5: 32,
	M6: 33,
	M7: 34,
	M8: 35,
	M9: 36,
	M10: 37,
	M11: 38,
	M12: 39
});

/*<EndType Name="Infragistics.Documents.OfficeOpenXml.Excel.ST_DynamicFilterType" />*/

/*<BeginType Name="Infragistics.Documents.OfficeOpenXml.Excel.ST_DateTimeGrouping" />*/

$.ig.util.defEnum('ST_DateTimeGrouping', false, false, {
	year: 0,
	month: 1,
	day: 2,
	hour: 3,
	minute: 4,
	second: 5
});

/*<EndType Name="Infragistics.Documents.OfficeOpenXml.Excel.ST_DateTimeGrouping" />*/

/*<BeginType Name="Infragistics.Documents.OfficeOpenXml.Excel.ST_CellType" />*/

$.ig.util.defEnum('ST_CellType', false, false, {
	b: 0,
	d: 1,
	n: 2,
	e: 3,
	s: 4,
	str: 5,
	inlineStr: 6
});

/*<EndType Name="Infragistics.Documents.OfficeOpenXml.Excel.ST_CellType" />*/

/*<BeginType Name="System.IO.FileMode" />*/

$.ig.util.defEnum('FileMode', false, false, {
	CreateNew: 1,
	Create: 2,
	Open: 3,
	OpenOrCreate: 4,
	Truncate: 5,
	Append: 6
});

/*<EndType Name="System.IO.FileMode" />*/

/*<BeginType Name="System.IO.FileAccess" />*/

$.ig.util.defEnum('FileAccess', false, false, {
	Read: 1,
	Write: 2,
	ReadWrite: 3
});

/*<EndType Name="System.IO.FileAccess" />*/

/*<BeginType Name="AssemblyRef" />*/

$.ig.util.defType('AssemblyRef', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	$type: new $.ig.Type('AssemblyRef', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="AssemblyRef" />*/

/*<BeginType Name="System.Collections.IDictionaryEnumerator" />*/

$.ig.util.defType('IDictionaryEnumerator', 'Object', {
	$type: new $.ig.Type('IDictionaryEnumerator', null, [$.ig.IEnumerator.prototype.$type])
}, true);

/*<EndType Name="System.Collections.IDictionaryEnumerator" />*/

/*<BeginType Name="Infragistics.AssemblyVersion" />*/

$.ig.util.defType('AssemblyVersion', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	$type: new $.ig.Type('AssemblyVersion', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.AssemblyVersion" />*/

/*<BeginType Name="Infragistics.CodePageEncoding" />*/

$.ig.util.defType('CodePageEncoding', 'Encoding', {
	init: function () {
		$.ig.Encoding.prototype.init.call(this);
	},
	/*<BeginProperty Name="System.Int32 Infragistics.CodePageEncoding::CodePage()" />*/
	_codePage: function () {
	}
	/*<EndProperty Name="System.Int32 Infragistics.CodePageEncoding::CodePage()" />*/
	,
	/*<BeginMethod Name=" Infragistics.CodePageEncoding::GetCharacters(System.UInt16, )" />*/
	_getCharacters: function (nullCharacter, charCodes) {
		var characters = new Array(charCodes.length);
		var nullCh = $.ig.util.toNullable($.ig.String.prototype.$type, null);
		for (var i = 0; i < charCodes.length; i++) {
			characters[i] = charCodes[i] == nullCharacter ? nullCh : $.ig.util.toNullable($.ig.String.prototype.$type, String.fromCharCode(charCodes[i]));
		}
		return characters;
	}
	/*<EndMethod Name=" Infragistics.CodePageEncoding::GetCharacters(System.UInt16, )" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.CodePageEncoding::GetCodePage(System.Text.Encoding)" />*/
	_getCodePage: function (encoding) {
		if (encoding.equals($.ig.Encoding.prototype.unicode())) {
			return 1200;
		}
		if (encoding.equals($.ig.Encoding.prototype.bigEndianUnicode())) {
			return 1201;
		}
		if (encoding.toString().equals($.ig.Encoding.prototype.uTF8().toString())) {
			return 65001;
		}
		var codePageEncoding = $.ig.util.cast($.ig.CodePageEncoding.prototype.$type, encoding);
		return codePageEncoding != null ? codePageEncoding._codePage() : 0;
	}
	/*<EndMethod Name="System.Int32 Infragistics.CodePageEncoding::GetCodePage(System.Text.Encoding)" />*/
	,
	$type: new $.ig.Type('CodePageEncoding', $.ig.Encoding.prototype.$type)
}, true);

/*<EndType Name="Infragistics.CodePageEncoding" />*/

/*<BeginType Name="Infragistics.CodePageDoubleByte" />*/

$.ig.util.defType('CodePageDoubleByte', 'CodePageEncoding', {
	___codePage: 0,
	___codePageLayouts: null,
	___reverseCodePages: null,
	init: function (codePage, codePageLayouts) {
		$.ig.CodePageEncoding.prototype.init.call(this);
		this.___codePage = codePage;
		this.___codePageLayouts = codePageLayouts;
		if (codePageLayouts == null) {
			return;
		}
		if (this.___reverseCodePages != null) {
			return;
		}
		this.___reverseCodePages = new $.ig.Dictionary$2($.ig.String.prototype.$type, Array, 0);
		var en = codePageLayouts.keys().getEnumerator();
		while (en.moveNext()) {
			var key = en.current();
			var codePageLayout = codePageLayouts.item(key);
			for (var i = 0; i < codePageLayout.length; i++) {
				var c = codePageLayout[i];
				if ($.ig.util.nullableNotEquals(c, null) && !this.___reverseCodePages.containsKey(c.value())) {
					this.___reverseCodePages.add(c.value(), [ key, i ]);
				}
			}
		}
	},
	/*<BeginProperty Name="System.Int32 Infragistics.CodePageDoubleByte::CodePage()" />*/
	_codePage: function () {
		return this.___codePage;
	}
	/*<EndProperty Name="System.Int32 Infragistics.CodePageDoubleByte::CodePage()" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.CodePageDoubleByte::GetChars(, System.Int32, System.Int32, , System.Int32)" />*/
	getChars: function (bytes, byteIndex, byteCount, chars, charIndex) {
		if ((bytes == null) || (chars == null)) {
			throw new $.ig.ArgumentNullException(0, (bytes == null) ? "bytes are Null" : "chars are Null");
		}
		if ((byteIndex < 0) || (byteCount < 0)) {
			throw new $.ig.ArgumentOutOfRangeException(1, (byteIndex < 0) ? "byteIndex is out of Range" : "byteCount is out of Range");
		}
		if ((bytes.length - byteIndex) < byteCount) {
			throw new $.ig.ArgumentOutOfRangeException(1, "bytes");
		}
		if ((charIndex < 0) || (charIndex > chars.length)) {
			throw new $.ig.ArgumentOutOfRangeException(1, "charIndex");
		}
		if (bytes.length == 0) {
			return 0;
		}
		if (chars.length == 0) {
			return 0;
		}
		var result = 0;
		var k = 0;
		var textString = this.getString1(bytes, byteIndex, byteCount);
		var resultString = $.ig.util.toCharArray(textString);
		for (var i = 0; i < resultString.length; i++) {
			var x = resultString[i];
			if (charIndex <= x.charCodeAt(0)) {
				if (k < chars.length) {
					chars[k] = x;
					k++;
				}
				result++;
			}
		}
		return result;
	}
	/*<EndMethod Name="System.Int32 Infragistics.CodePageDoubleByte::GetChars(, System.Int32, System.Int32, , System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.CodePageDoubleByte::GetMaxByteCount(System.Int32)" />*/
	getMaxByteCount: function (charCount) {
		return charCount * 2;
	}
	/*<EndMethod Name="System.Int32 Infragistics.CodePageDoubleByte::GetMaxByteCount(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.CodePageDoubleByte::GetMaxCharCount(System.Int32)" />*/
	getMaxCharCount: function (byteCount) {
		return byteCount;
	}
	/*<EndMethod Name="System.Int32 Infragistics.CodePageDoubleByte::GetMaxCharCount(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.CodePageDoubleByte::GetByteCount(, System.Int32, System.Int32)" />*/
	getByteCount: function (chars, index, count) {
		return count;
	}
	/*<EndMethod Name="System.Int32 Infragistics.CodePageDoubleByte::GetByteCount(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.CodePageDoubleByte::GetBytes(, System.Int32, System.Int32, , System.Int32)" />*/
	getBytes2: function (chars, charIndex, charCount, bytes, byteIndex) {
		var reverseCodePage = this.___reverseCodePages;
		for (var end = charIndex + charCount; charIndex < end; charIndex++) {
			var encodedBytes;
			if ((function () { var $ret = reverseCodePage.tryGetValue(chars[charIndex], encodedBytes); encodedBytes = $ret.p1; return $ret.ret; }()) == false && (function () { var $ret = reverseCodePage.tryGetValue('?', encodedBytes); encodedBytes = $ret.p1; return $ret.ret; }()) == false) {
				continue;
			}
			if (encodedBytes[0] == 0) {
				bytes[byteIndex++] = encodedBytes[1];
			} else {
				bytes[byteIndex++] = encodedBytes[0];
				bytes[byteIndex++] = encodedBytes[1];
			}
		}
		return charCount;
	}
	/*<EndMethod Name="System.Int32 Infragistics.CodePageDoubleByte::GetBytes(, System.Int32, System.Int32, , System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.CodePageDoubleByte::GetCharCount(, System.Int32, System.Int32)" />*/
	getCharCount1: function (bytes, index, count) {
		return count;
	}
	/*<EndMethod Name="System.Int32 Infragistics.CodePageDoubleByte::GetCharCount(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.CodePageDoubleByte::GetString(, System.Int32, System.Int32)" />*/
	getString1: function (bytes, index, count) {
		var sb = new $.ig.StringBuilder(0);
		for (var i = index; i < index + count; ) {
			if (this.___codePageLayouts.containsKey(bytes[i])) {
				var layout = this.___codePageLayouts.item(bytes[i]);
				sb.append4($.ig.util.unwrapNullable(layout[bytes[i + 1]]));
				i += 2;
			} else {
				var layout1 = this.___codePageLayouts.item(0);
				sb.append4($.ig.util.unwrapNullable(layout1[bytes[i]]));
				i++;
			}
		}
		return sb.toString();
	}
	/*<EndMethod Name="System.String Infragistics.CodePageDoubleByte::GetString(, System.Int32, System.Int32)" />*/
	,
	$type: new $.ig.Type('CodePageDoubleByte', $.ig.CodePageEncoding.prototype.$type)
}, true);

/*<EndType Name="Infragistics.CodePageDoubleByte" />*/

/*<BeginType Name="Infragistics.CodePageSingleByte" />*/

$.ig.util.defType('CodePageSingleByte', 'CodePageEncoding', {
	___codePageLayout: null,
	___reverseCodePage: null,
	___codePage: 0,
	init: function (codePage, codePageLayout) {
		$.ig.CodePageEncoding.prototype.init.call(this);
		this.___codePage = codePage;
		this.___codePageLayout = codePageLayout;
		if (codePageLayout == null) {
			return;
		}
		if (this.___reverseCodePage != null) {
			return;
		}
		this.___reverseCodePage = new $.ig.Dictionary$2($.ig.String.prototype.$type, $.ig.Number.prototype.$type, 0);
		for (var i = 0; i < codePageLayout.length; i++) {
			var c = codePageLayout[i];
			if ($.ig.util.nullableNotEquals(c, null)) {
				this.___reverseCodePage.add(c.value(), i);
			}
		}
	},
	/*<BeginProperty Name="System.Int32 Infragistics.CodePageSingleByte::CodePage()" />*/
	_codePage: function () {
		return this.___codePage;
	}
	/*<EndProperty Name="System.Int32 Infragistics.CodePageSingleByte::CodePage()" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.CodePageSingleByte::GetChars(, System.Int32, System.Int32, , System.Int32)" />*/
	getChars: function (bytes, byteIndex, byteCount, chars, charIndex) {
		if ((bytes == null) || (chars == null)) {
			throw new $.ig.ArgumentNullException(0, (bytes == null) ? "bytes are Null" : "chars are Null");
		}
		if ((byteIndex < 0) || (byteCount < 0)) {
			throw new $.ig.ArgumentOutOfRangeException(1, (byteIndex < 0) ? "byteIndex is out of Range" : "byteCount is out of Range");
		}
		if ((bytes.length - byteIndex) < byteCount) {
			throw new $.ig.ArgumentOutOfRangeException(1, "bytes");
		}
		if ((charIndex < 0) || (charIndex > chars.length)) {
			throw new $.ig.ArgumentOutOfRangeException(1, "charIndex");
		}
		if (bytes.length == 0) {
			return 0;
		}
		if (chars.length == 0) {
			return 0;
		}
		var layout = this.___codePageLayout;
		var reverseCodePage = this.___reverseCodePage;
		var result = 0;
		var k = 0;
		for (var i = byteIndex; i < byteIndex + byteCount; i++) {
			var x = layout[bytes[i]];
			if ($.ig.util.nullableNotEquals(x, null)) {
				if (reverseCodePage.containsKey(x.value())) {
					if (charIndex <= x.value().charCodeAt(0)) {
						if (k < chars.length) {
							chars[k] = x.value();
							k++;
						}
						result++;
					}
				}
			}
		}
		return result;
	}
	/*<EndMethod Name="System.Int32 Infragistics.CodePageSingleByte::GetChars(, System.Int32, System.Int32, , System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.CodePageSingleByte::GetMaxByteCount(System.Int32)" />*/
	getMaxByteCount: function (charCount) {
		return charCount;
	}
	/*<EndMethod Name="System.Int32 Infragistics.CodePageSingleByte::GetMaxByteCount(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.CodePageSingleByte::GetMaxCharCount(System.Int32)" />*/
	getMaxCharCount: function (byteCount) {
		return byteCount;
	}
	/*<EndMethod Name="System.Int32 Infragistics.CodePageSingleByte::GetMaxCharCount(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.CodePageSingleByte::GetByteCount(, System.Int32, System.Int32)" />*/
	getByteCount: function (chars, index, count) {
		return count;
	}
	/*<EndMethod Name="System.Int32 Infragistics.CodePageSingleByte::GetByteCount(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.CodePageSingleByte::GetBytes(, System.Int32, System.Int32, , System.Int32)" />*/
	getBytes2: function (chars, charIndex, charCount, bytes, byteIndex) {
		var reverseCodePage = this.___reverseCodePage;
		for (var i = charIndex; i < charIndex + charCount; i++) {
			var encodedByte;
			if ((function () { var $ret = reverseCodePage.tryGetValue(chars[i], encodedByte); encodedByte = $ret.p1; return $ret.ret; }()) == false && (function () { var $ret = reverseCodePage.tryGetValue('?', encodedByte); encodedByte = $ret.p1; return $ret.ret; }()) == false) {
				continue;
			}
			bytes[byteIndex + i - charIndex] = encodedByte;
		}
		return charCount;
	}
	/*<EndMethod Name="System.Int32 Infragistics.CodePageSingleByte::GetBytes(, System.Int32, System.Int32, , System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.CodePageSingleByte::GetCharCount(, System.Int32, System.Int32)" />*/
	getCharCount1: function (bytes, index, count) {
		return count;
	}
	/*<EndMethod Name="System.Int32 Infragistics.CodePageSingleByte::GetCharCount(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.CodePageSingleByte::GetString(, System.Int32, System.Int32)" />*/
	getString1: function (bytes, index, count) {
		var layout = this.___codePageLayout;
		var sb = new $.ig.StringBuilder(0);
		for (var i = index; i < index + count; i++) {
			sb.append4($.ig.util.unwrapNullable(layout[bytes[i]]));
		}
		return sb.toString();
	}
	/*<EndMethod Name="System.String Infragistics.CodePageSingleByte::GetString(, System.Int32, System.Int32)" />*/
	,
	$type: new $.ig.Type('CodePageSingleByte', $.ig.CodePageEncoding.prototype.$type)
}, true);

/*<EndType Name="Infragistics.CodePageSingleByte" />*/

/*<BeginType Name="Infragistics.Windows1252Encoding" />*/

$.ig.util.defType('Windows1252Encoding', 'CodePageSingleByte', {
	init: function () {
		$.ig.CodePageSingleByte.prototype.init.call(this, 1252, $.ig.Windows1252Encoding.prototype.__codePageWindows1252Encoding);
	},
	$type: new $.ig.Type('Windows1252Encoding', $.ig.CodePageSingleByte.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Windows1252Encoding" />*/

/*<BeginType Name="Infragistics.Windows932Encoding" />*/

$.ig.util.defType('Windows932Encoding', 'CodePageDoubleByte', {
	_staticInit: function () {
		$.ig.Windows932Encoding.prototype.___codePageLayouts = new $.ig.Dictionary$2($.ig.Number.prototype.$type, Array, 0);
		$.ig.Windows932Encoding.prototype.___codePageLayouts.add(0, $.ig.Windows932Encoding.prototype.__codePageWindows932Encoding00);
		$.ig.Windows932Encoding.prototype.___codePageLayouts.add(129, $.ig.Windows932Encoding.prototype.__codePageWindows932Encoding81);
		$.ig.Windows932Encoding.prototype.___codePageLayouts.add(130, $.ig.Windows932Encoding.prototype.__codePageWindows932Encoding82);
		$.ig.Windows932Encoding.prototype.___codePageLayouts.add(131, $.ig.Windows932Encoding.prototype.__codePageWindows932Encoding83);
		$.ig.Windows932Encoding.prototype.___codePageLayouts.add(132, $.ig.Windows932Encoding.prototype.__codePageWindows932Encoding84);
		$.ig.Windows932Encoding.prototype.___codePageLayouts.add(135, $.ig.Windows932Encoding.prototype.__codePageWindows932Encoding87);
		$.ig.Windows932Encoding.prototype.___codePageLayouts.add(136, $.ig.Windows932Encoding.prototype.__codePageWindows932Encoding88);
		$.ig.Windows932Encoding.prototype.___codePageLayouts.add(137, $.ig.Windows932Encoding.prototype.__codePageWindows932Encoding89);
		$.ig.Windows932Encoding.prototype.___codePageLayouts.add(138, $.ig.Windows932Encoding.prototype.__codePageWindows932Encoding8A);
		$.ig.Windows932Encoding.prototype.___codePageLayouts.add(139, $.ig.Windows932Encoding.prototype.__codePageWindows932Encoding8B);
		$.ig.Windows932Encoding.prototype.___codePageLayouts.add(140, $.ig.Windows932Encoding.prototype.__codePageWindows932Encoding8C);
		$.ig.Windows932Encoding.prototype.___codePageLayouts.add(141, $.ig.Windows932Encoding.prototype.__codePageWindows932Encoding8D);
		$.ig.Windows932Encoding.prototype.___codePageLayouts.add(142, $.ig.Windows932Encoding.prototype.__codePageWindows932Encoding8E);
		$.ig.Windows932Encoding.prototype.___codePageLayouts.add(143, $.ig.Windows932Encoding.prototype.__codePageWindows932Encoding8F);
		$.ig.Windows932Encoding.prototype.___codePageLayouts.add(144, $.ig.Windows932Encoding.prototype.__codePageWindows932Encoding90);
		$.ig.Windows932Encoding.prototype.___codePageLayouts.add(145, $.ig.Windows932Encoding.prototype.__codePageWindows932Encoding91);
		$.ig.Windows932Encoding.prototype.___codePageLayouts.add(146, $.ig.Windows932Encoding.prototype.__codePageWindows932Encoding92);
		$.ig.Windows932Encoding.prototype.___codePageLayouts.add(147, $.ig.Windows932Encoding.prototype.__codePageWindows932Encoding93);
		$.ig.Windows932Encoding.prototype.___codePageLayouts.add(148, $.ig.Windows932Encoding.prototype.__codePageWindows932Encoding94);
		$.ig.Windows932Encoding.prototype.___codePageLayouts.add(149, $.ig.Windows932Encoding.prototype.__codePageWindows932Encoding95);
		$.ig.Windows932Encoding.prototype.___codePageLayouts.add(150, $.ig.Windows932Encoding.prototype.__codePageWindows932Encoding96);
		$.ig.Windows932Encoding.prototype.___codePageLayouts.add(151, $.ig.Windows932Encoding.prototype.__codePageWindows932Encoding97);
		$.ig.Windows932Encoding.prototype.___codePageLayouts.add(152, $.ig.Windows932Encoding.prototype.__codePageWindows932Encoding98);
		$.ig.Windows932Encoding.prototype.___codePageLayouts.add(153, $.ig.Windows932Encoding.prototype.__codePageWindows932Encoding99);
		$.ig.Windows932Encoding.prototype.___codePageLayouts.add(154, $.ig.Windows932Encoding.prototype.__codePageWindows932Encoding9A);
		$.ig.Windows932Encoding.prototype.___codePageLayouts.add(155, $.ig.Windows932Encoding.prototype.__codePageWindows932Encoding9B);
		$.ig.Windows932Encoding.prototype.___codePageLayouts.add(156, $.ig.Windows932Encoding.prototype.__codePageWindows932Encoding9C);
		$.ig.Windows932Encoding.prototype.___codePageLayouts.add(157, $.ig.Windows932Encoding.prototype.__codePageWindows932Encoding9D);
		$.ig.Windows932Encoding.prototype.___codePageLayouts.add(158, $.ig.Windows932Encoding.prototype.__codePageWindows932Encoding9E);
		$.ig.Windows932Encoding.prototype.___codePageLayouts.add(159, $.ig.Windows932Encoding.prototype.__codePageWindows932Encoding9F);
		$.ig.Windows932Encoding.prototype.___codePageLayouts.add(224, $.ig.Windows932Encoding.prototype.__codePageWindows932EncodingE0);
		$.ig.Windows932Encoding.prototype.___codePageLayouts.add(225, $.ig.Windows932Encoding.prototype.__codePageWindows932EncodingE1);
		$.ig.Windows932Encoding.prototype.___codePageLayouts.add(226, $.ig.Windows932Encoding.prototype.__codePageWindows932EncodingE2);
		$.ig.Windows932Encoding.prototype.___codePageLayouts.add(227, $.ig.Windows932Encoding.prototype.__codePageWindows932EncodingE3);
		$.ig.Windows932Encoding.prototype.___codePageLayouts.add(228, $.ig.Windows932Encoding.prototype.__codePageWindows932EncodingE4);
		$.ig.Windows932Encoding.prototype.___codePageLayouts.add(229, $.ig.Windows932Encoding.prototype.__codePageWindows932EncodingE5);
		$.ig.Windows932Encoding.prototype.___codePageLayouts.add(230, $.ig.Windows932Encoding.prototype.__codePageWindows932EncodingE6);
		$.ig.Windows932Encoding.prototype.___codePageLayouts.add(231, $.ig.Windows932Encoding.prototype.__codePageWindows932EncodingE7);
		$.ig.Windows932Encoding.prototype.___codePageLayouts.add(232, $.ig.Windows932Encoding.prototype.__codePageWindows932EncodingE8);
		$.ig.Windows932Encoding.prototype.___codePageLayouts.add(233, $.ig.Windows932Encoding.prototype.__codePageWindows932EncodingE9);
		$.ig.Windows932Encoding.prototype.___codePageLayouts.add(234, $.ig.Windows932Encoding.prototype.__codePageWindows932EncodingEA);
		$.ig.Windows932Encoding.prototype.___codePageLayouts.add(237, $.ig.Windows932Encoding.prototype.__codePageWindows932EncodingED);
		$.ig.Windows932Encoding.prototype.___codePageLayouts.add(238, $.ig.Windows932Encoding.prototype.__codePageWindows932EncodingEE);
		$.ig.Windows932Encoding.prototype.___codePageLayouts.add(250, $.ig.Windows932Encoding.prototype.__codePageWindows932EncodingFA);
		$.ig.Windows932Encoding.prototype.___codePageLayouts.add(251, $.ig.Windows932Encoding.prototype.__codePageWindows932EncodingFB);
		$.ig.Windows932Encoding.prototype.___codePageLayouts.add(252, $.ig.Windows932Encoding.prototype.__codePageWindows932EncodingFC);
	},
	init: function () {
		$.ig.CodePageDoubleByte.prototype.init.call(this, 932, $.ig.Windows932Encoding.prototype.___codePageLayouts);
	},
	$type: new $.ig.Type('Windows932Encoding', $.ig.CodePageDoubleByte.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Windows932Encoding" />*/

/*<BeginType Name="Infragistics.Imaging.ImageFormat" />*/

$.ig.util.defType('ImageFormat', 'Object', {
	init: function (formatGuid) {
		this._guid = new $.ig.Guid();
		$.ig.Object.prototype.init.call(this);
		this.guid(formatGuid);
	},
	_guid: null,
	/*<BeginProperty Name="System.Guid Infragistics.Imaging.ImageFormat::Guid()" />*/
	guid: function (value) {
		if (arguments.length === 1) {
			this._guid = value;
			return value;
		} else {
			return this._guid;
		}
	}
	/*<EndProperty Name="System.Guid Infragistics.Imaging.ImageFormat::Guid()" />*/
	,
	$type: new $.ig.Type('ImageFormat', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Imaging.ImageFormat" />*/

/*<BeginType Name="Infragistics.Documents.OfficeOpenXml.Core.CT_Transform2D" />*/

$.ig.util.defType('CT_Transform2D', 'Object', {
	init: function () {
		this._rotation = new $.ig.ST_Angle();
		$.ig.Object.prototype.init.call(this);
		this.horizontalFlip(false);
		this.verticalFlip(false);
		this.rotation($.ig.ST_Angle.prototype.fromDegrees(0));
	},
	_extents: null,
	/*<BeginProperty Name="Infragistics.Documents.OfficeOpenXml.Core.CT_PositiveSize2D Infragistics.Documents.OfficeOpenXml.Core.CT_Transform2D::Extents()" />*/
	extents: function (value) {
		if (arguments.length === 1) {
			this._extents = value;
			return value;
		} else {
			return this._extents;
		}
	}
	/*<EndProperty Name="Infragistics.Documents.OfficeOpenXml.Core.CT_PositiveSize2D Infragistics.Documents.OfficeOpenXml.Core.CT_Transform2D::Extents()" />*/
	,
	_horizontalFlip: false,
	/*<BeginProperty Name="System.Boolean Infragistics.Documents.OfficeOpenXml.Core.CT_Transform2D::HorizontalFlip()" />*/
	horizontalFlip: function (value) {
		if (arguments.length === 1) {
			this._horizontalFlip = value;
			return value;
		} else {
			return this._horizontalFlip;
		}
	}
	/*<EndProperty Name="System.Boolean Infragistics.Documents.OfficeOpenXml.Core.CT_Transform2D::HorizontalFlip()" />*/
	,
	_offset: null,
	/*<BeginProperty Name="Infragistics.Documents.OfficeOpenXml.Core.CT_Point2D Infragistics.Documents.OfficeOpenXml.Core.CT_Transform2D::Offset()" />*/
	offset: function (value) {
		if (arguments.length === 1) {
			this._offset = value;
			return value;
		} else {
			return this._offset;
		}
	}
	/*<EndProperty Name="Infragistics.Documents.OfficeOpenXml.Core.CT_Point2D Infragistics.Documents.OfficeOpenXml.Core.CT_Transform2D::Offset()" />*/
	,
	_rotation: null,
	/*<BeginProperty Name="Infragistics.Documents.OfficeOpenXml.Core.ST_Angle Infragistics.Documents.OfficeOpenXml.Core.CT_Transform2D::Rotation()" />*/
	rotation: function (value) {
		if (arguments.length === 1) {
			this._rotation = value;
			return value;
		} else {
			return this._rotation;
		}
	}
	/*<EndProperty Name="Infragistics.Documents.OfficeOpenXml.Core.ST_Angle Infragistics.Documents.OfficeOpenXml.Core.CT_Transform2D::Rotation()" />*/
	,
	_verticalFlip: false,
	/*<BeginProperty Name="System.Boolean Infragistics.Documents.OfficeOpenXml.Core.CT_Transform2D::VerticalFlip()" />*/
	verticalFlip: function (value) {
		if (arguments.length === 1) {
			this._verticalFlip = value;
			return value;
		} else {
			return this._verticalFlip;
		}
	}
	/*<EndProperty Name="System.Boolean Infragistics.Documents.OfficeOpenXml.Core.CT_Transform2D::VerticalFlip()" />*/
	,
	$type: new $.ig.Type('CT_Transform2D', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.OfficeOpenXml.Core.CT_Transform2D" />*/

/*<BeginType Name="Infragistics.Documents.OfficeOpenXml.Core.CT_GroupTransform2D" />*/

$.ig.util.defType('CT_GroupTransform2D', 'CT_Transform2D', {
	init: function () {
		$.ig.CT_Transform2D.prototype.init.call(this);
	},
	_childExtents: null,
	/*<BeginProperty Name="Infragistics.Documents.OfficeOpenXml.Core.CT_PositiveSize2D Infragistics.Documents.OfficeOpenXml.Core.CT_GroupTransform2D::ChildExtents()" />*/
	childExtents: function (value) {
		if (arguments.length === 1) {
			this._childExtents = value;
			return value;
		} else {
			return this._childExtents;
		}
	}
	/*<EndProperty Name="Infragistics.Documents.OfficeOpenXml.Core.CT_PositiveSize2D Infragistics.Documents.OfficeOpenXml.Core.CT_GroupTransform2D::ChildExtents()" />*/
	,
	_childOffset: null,
	/*<BeginProperty Name="Infragistics.Documents.OfficeOpenXml.Core.CT_Point2D Infragistics.Documents.OfficeOpenXml.Core.CT_GroupTransform2D::ChildOffset()" />*/
	childOffset: function (value) {
		if (arguments.length === 1) {
			this._childOffset = value;
			return value;
		} else {
			return this._childOffset;
		}
	}
	/*<EndProperty Name="Infragistics.Documents.OfficeOpenXml.Core.CT_Point2D Infragistics.Documents.OfficeOpenXml.Core.CT_GroupTransform2D::ChildOffset()" />*/
	,
	$type: new $.ig.Type('CT_GroupTransform2D', $.ig.CT_Transform2D.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.OfficeOpenXml.Core.CT_GroupTransform2D" />*/

/*<BeginType Name="Infragistics.Documents.OfficeOpenXml.Core.CT_Point2D" />*/

$.ig.util.defType('CT_Point2D', 'Object', {
	init: function () {
		this._x = new $.ig.ST_Coordinate();
		this._y = new $.ig.ST_Coordinate();
		$.ig.Object.prototype.init.call(this);
	},
	_x: null,
	/*<BeginProperty Name="Infragistics.Documents.OfficeOpenXml.Core.ST_Coordinate Infragistics.Documents.OfficeOpenXml.Core.CT_Point2D::X()" />*/
	x: function (value) {
		if (arguments.length === 1) {
			this._x = value;
			return value;
		} else {
			return this._x;
		}
	}
	/*<EndProperty Name="Infragistics.Documents.OfficeOpenXml.Core.ST_Coordinate Infragistics.Documents.OfficeOpenXml.Core.CT_Point2D::X()" />*/
	,
	_y: null,
	/*<BeginProperty Name="Infragistics.Documents.OfficeOpenXml.Core.ST_Coordinate Infragistics.Documents.OfficeOpenXml.Core.CT_Point2D::Y()" />*/
	y: function (value) {
		if (arguments.length === 1) {
			this._y = value;
			return value;
		} else {
			return this._y;
		}
	}
	/*<EndProperty Name="Infragistics.Documents.OfficeOpenXml.Core.ST_Coordinate Infragistics.Documents.OfficeOpenXml.Core.CT_Point2D::Y()" />*/
	,
	$type: new $.ig.Type('CT_Point2D', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.OfficeOpenXml.Core.CT_Point2D" />*/

/*<BeginType Name="Infragistics.Documents.OfficeOpenXml.Core.ST_PositiveCoordinate" />*/

$.ig.util.defType('ST_PositiveCoordinate', 'ValueType', {
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
	__value: 0,
	init1: function (initNumber, emus) {
		$.ig.ValueType.prototype.init.call(this);
		$.ig.DocCoreUtils.prototype.verifyValueInRange$1($.ig.ST_PositiveCoordinate.prototype.$type, emus, "emus", $.ig.ST_PositiveCoordinate.prototype.minValue, $.ig.ST_PositiveCoordinate.prototype.maxValue);
		this.__value = emus;
	},
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.OfficeOpenXml.Core.ST_PositiveCoordinate::Equals(System.Object)" />*/
	equals: function (obj) {
		var other = $.ig.util.toNullable($.ig.ST_PositiveCoordinate.prototype.$type, $.ig.util.cast($.ig.ST_PositiveCoordinate.prototype.$type, obj));
		if ($.ig.ST_PositiveCoordinate.prototype.l_op_Inequality_Lifted(other, $.ig.util.toNullable($.ig.ST_PositiveCoordinate.prototype.$type, null))) {
			return false;
		}
		return $.ig.ST_PositiveCoordinate.prototype.l_op_Equality(this, other.getValueOrDefault());
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.OfficeOpenXml.Core.ST_PositiveCoordinate::Equals(System.Object)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.Documents.OfficeOpenXml.Core.ST_PositiveCoordinate::GetHashCode()" />*/
	getHashCode: function () {
		return (this.__value);
	}
	/*<EndMethod Name="System.Int32 Infragistics.Documents.OfficeOpenXml.Core.ST_PositiveCoordinate::GetHashCode()" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.Documents.OfficeOpenXml.Core.ST_PositiveCoordinate::ToString()" />*/
	toString: function () {
		return this.__value.toString();
	}
	/*<EndMethod Name="System.String Infragistics.Documents.OfficeOpenXml.Core.ST_PositiveCoordinate::ToString()" />*/
	,
	/*<BeginMethod Name="System.Int64 Infragistics.Documents.OfficeOpenXml.Core.ST_PositiveCoordinate::GetEmus()" />*/
	getEmus: function () {
		return this.__value;
	}
	/*<EndMethod Name="System.Int64 Infragistics.Documents.OfficeOpenXml.Core.ST_PositiveCoordinate::GetEmus()" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.Documents.OfficeOpenXml.Core.ST_PositiveCoordinate::GetTwips()" />*/
	getTwips: function () {
		return $.ig.DocCoreUtils.prototype.eMUToTwips(this.__value);
	}
	/*<EndMethod Name="System.Double Infragistics.Documents.OfficeOpenXml.Core.ST_PositiveCoordinate::GetTwips()" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.OfficeOpenXml.Core.ST_PositiveCoordinate Infragistics.Documents.OfficeOpenXml.Core.ST_PositiveCoordinate::Parse(System.String)" />*/
	parse: function (value) {
		var parsedValue = $.ig.ST_PositiveCoordinate.prototype.tryParse(value);
		if ($.ig.ST_PositiveCoordinate.prototype.l_op_Inequality_Lifted(parsedValue, $.ig.util.toNullable($.ig.ST_PositiveCoordinate.prototype.$type, null))) {
			return parsedValue.getValueOrDefault();
		}
		throw $.ig.DocCoreUtils.prototype.createFormatException$1($.ig.ST_PositiveCoordinate.prototype.$type, value);
	}
	/*<EndMethod Name="Infragistics.Documents.OfficeOpenXml.Core.ST_PositiveCoordinate Infragistics.Documents.OfficeOpenXml.Core.ST_PositiveCoordinate::Parse(System.String)" />*/
	,
	/*<BeginMethod Name="System.Nullable Infragistics.Documents.OfficeOpenXml.Core.ST_PositiveCoordinate::TryParse(System.String)" />*/
	tryParse: function (value) {
		var numericValue;
		if ((function () { var $ret = $.ig.util.tryParseInt64_2(value, $.ig.NumberStyles.prototype.integer, $.ig.CultureInfo.prototype.invariantCulture(), numericValue); numericValue = $ret.p3; return $ret.ret; }()) == false) {
			return $.ig.util.toNullable($.ig.ST_PositiveCoordinate.prototype.$type, null);
		}
		return $.ig.util.toNullable($.ig.ST_PositiveCoordinate.prototype.$type, $.ig.ST_PositiveCoordinate.prototype.l_op_Implicit_ST_PositiveCoordinate_Int64(numericValue));
	}
	/*<EndMethod Name="System.Nullable Infragistics.Documents.OfficeOpenXml.Core.ST_PositiveCoordinate::TryParse(System.String)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.OfficeOpenXml.Core.ST_PositiveCoordinate::L_op_Equality(Infragistics.Documents.OfficeOpenXml.Core.ST_PositiveCoordinate, Infragistics.Documents.OfficeOpenXml.Core.ST_PositiveCoordinate)" />*/
	l_op_Equality: function (a, b) {
		return a.__value == b.__value;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.OfficeOpenXml.Core.ST_PositiveCoordinate::L_op_Equality(Infragistics.Documents.OfficeOpenXml.Core.ST_PositiveCoordinate, Infragistics.Documents.OfficeOpenXml.Core.ST_PositiveCoordinate)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.OfficeOpenXml.Core.ST_PositiveCoordinate::L_op_Equality_Lifted(System.Nullable, System.Nullable)" />*/
	l_op_Equality_Lifted: function (a, b) {
		if (!a.hasValue()) {
			return !b.hasValue();
		} else if (!b.hasValue()) {
			return false;
		}
		return $.ig.ST_PositiveCoordinate.prototype.l_op_Equality(a.value(), b.value());
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.OfficeOpenXml.Core.ST_PositiveCoordinate::L_op_Equality_Lifted(System.Nullable, System.Nullable)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.OfficeOpenXml.Core.ST_PositiveCoordinate::L_op_Inequality(Infragistics.Documents.OfficeOpenXml.Core.ST_PositiveCoordinate, Infragistics.Documents.OfficeOpenXml.Core.ST_PositiveCoordinate)" />*/
	l_op_Inequality: function (a, b) {
		return !($.ig.ST_PositiveCoordinate.prototype.l_op_Equality(a, b));
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.OfficeOpenXml.Core.ST_PositiveCoordinate::L_op_Inequality(Infragistics.Documents.OfficeOpenXml.Core.ST_PositiveCoordinate, Infragistics.Documents.OfficeOpenXml.Core.ST_PositiveCoordinate)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.OfficeOpenXml.Core.ST_PositiveCoordinate::L_op_Inequality_Lifted(System.Nullable, System.Nullable)" />*/
	l_op_Inequality_Lifted: function (a, b) {
		if (!a.hasValue()) {
			return b.hasValue();
		} else if (!b.hasValue()) {
			return true;
		}
		return $.ig.ST_PositiveCoordinate.prototype.l_op_Inequality(a.value(), b.value());
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.OfficeOpenXml.Core.ST_PositiveCoordinate::L_op_Inequality_Lifted(System.Nullable, System.Nullable)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.OfficeOpenXml.Core.ST_PositiveCoordinate Infragistics.Documents.OfficeOpenXml.Core.ST_PositiveCoordinate::L_op_Implicit_ST_PositiveCoordinate_Int64(System.Int64)" />*/
	l_op_Implicit_ST_PositiveCoordinate_Int64: function (value) {
		return new $.ig.ST_PositiveCoordinate(1, value);
	}
	/*<EndMethod Name="Infragistics.Documents.OfficeOpenXml.Core.ST_PositiveCoordinate Infragistics.Documents.OfficeOpenXml.Core.ST_PositiveCoordinate::L_op_Implicit_ST_PositiveCoordinate_Int64(System.Int64)" />*/
	,
	/*<BeginMethod Name="System.Nullable Infragistics.Documents.OfficeOpenXml.Core.ST_PositiveCoordinate::L_op_Implicit_ST_PositiveCoordinate_Int64_Lifted(System.Nullable)" />*/
	l_op_Implicit_ST_PositiveCoordinate_Int64_Lifted: function (value) {
		if (!value.hasValue()) {
			return $.ig.util.toNullable($.ig.ST_PositiveCoordinate.prototype.$type, null);
		}
		return $.ig.util.toNullable($.ig.ST_PositiveCoordinate.prototype.$type, $.ig.ST_PositiveCoordinate.prototype.l_op_Implicit_ST_PositiveCoordinate_Int64(value.value()));
	}
	/*<EndMethod Name="System.Nullable Infragistics.Documents.OfficeOpenXml.Core.ST_PositiveCoordinate::L_op_Implicit_ST_PositiveCoordinate_Int64_Lifted(System.Nullable)" />*/
	,
	/*<BeginMethod Name="System.Int64 Infragistics.Documents.OfficeOpenXml.Core.ST_PositiveCoordinate::L_op_Implicit_Int64_ST_PositiveCoordinate(Infragistics.Documents.OfficeOpenXml.Core.ST_PositiveCoordinate)" />*/
	l_op_Implicit_Int64_ST_PositiveCoordinate: function (value) {
		return value.__value;
	}
	/*<EndMethod Name="System.Int64 Infragistics.Documents.OfficeOpenXml.Core.ST_PositiveCoordinate::L_op_Implicit_Int64_ST_PositiveCoordinate(Infragistics.Documents.OfficeOpenXml.Core.ST_PositiveCoordinate)" />*/
	,
	/*<BeginMethod Name="System.Nullable Infragistics.Documents.OfficeOpenXml.Core.ST_PositiveCoordinate::L_op_Implicit_Int64_ST_PositiveCoordinate_Lifted(System.Nullable)" />*/
	l_op_Implicit_Int64_ST_PositiveCoordinate_Lifted: function (value) {
		if (!value.hasValue()) {
			return $.ig.util.toNullable($.ig.Number.prototype.$type, null);
		}
		return $.ig.util.toNullable($.ig.Number.prototype.$type, $.ig.ST_PositiveCoordinate.prototype.l_op_Implicit_Int64_ST_PositiveCoordinate(value.value()));
	}
	/*<EndMethod Name="System.Nullable Infragistics.Documents.OfficeOpenXml.Core.ST_PositiveCoordinate::L_op_Implicit_Int64_ST_PositiveCoordinate_Lifted(System.Nullable)" />*/
	,
	$type: new $.ig.Type('ST_PositiveCoordinate', $.ig.ValueType.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.OfficeOpenXml.Core.ST_PositiveCoordinate" />*/

/*<BeginType Name="Infragistics.Documents.OfficeOpenXml.Core.CT_PositiveSize2D" />*/

$.ig.util.defType('CT_PositiveSize2D', 'Object', {
	init: function () {
		this._cX = new $.ig.ST_PositiveCoordinate();
		this._cY = new $.ig.ST_PositiveCoordinate();
		$.ig.Object.prototype.init.call(this);
	},
	_cX: null,
	/*<BeginProperty Name="Infragistics.Documents.OfficeOpenXml.Core.ST_PositiveCoordinate Infragistics.Documents.OfficeOpenXml.Core.CT_PositiveSize2D::CX()" />*/
	cX: function (value) {
		if (arguments.length === 1) {
			this._cX = value;
			return value;
		} else {
			return this._cX;
		}
	}
	/*<EndProperty Name="Infragistics.Documents.OfficeOpenXml.Core.ST_PositiveCoordinate Infragistics.Documents.OfficeOpenXml.Core.CT_PositiveSize2D::CX()" />*/
	,
	_cY: null,
	/*<BeginProperty Name="Infragistics.Documents.OfficeOpenXml.Core.ST_PositiveCoordinate Infragistics.Documents.OfficeOpenXml.Core.CT_PositiveSize2D::CY()" />*/
	cY: function (value) {
		if (arguments.length === 1) {
			this._cY = value;
			return value;
		} else {
			return this._cY;
		}
	}
	/*<EndProperty Name="Infragistics.Documents.OfficeOpenXml.Core.ST_PositiveCoordinate Infragistics.Documents.OfficeOpenXml.Core.CT_PositiveSize2D::CY()" />*/
	,
	$type: new $.ig.Type('CT_PositiveSize2D', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.OfficeOpenXml.Core.CT_PositiveSize2D" />*/

/*<BeginType Name="Infragistics.Documents.OfficeOpenXml.Core.CT_TextBodyPropertiesBase" />*/

$.ig.util.defType('CT_TextBodyPropertiesBase', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	_columnsRightToLeft: $.ig.util.toNullable($.ig.Boolean.prototype.$type, null),
	/*<BeginProperty Name="System.Nullable Infragistics.Documents.OfficeOpenXml.Core.CT_TextBodyPropertiesBase::ColumnsRightToLeft()" />*/
	columnsRightToLeft: function (value) {
		if (arguments.length === 1) {
			this._columnsRightToLeft = value;
			return value;
		} else {
			return this._columnsRightToLeft;
		}
	}
	/*<EndProperty Name="System.Nullable Infragistics.Documents.OfficeOpenXml.Core.CT_TextBodyPropertiesBase::ColumnsRightToLeft()" />*/
	,
	$type: new $.ig.Type('CT_TextBodyPropertiesBase', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.OfficeOpenXml.Core.CT_TextBodyPropertiesBase" />*/

/*<BeginType Name="Infragistics.Documents.OfficeOpenXml.Core.IgnoreChildrenMarker" />*/

$.ig.util.defType('IgnoreChildrenMarker', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	$type: new $.ig.Type('IgnoreChildrenMarker', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.OfficeOpenXml.Core.IgnoreChildrenMarker" />*/

/*<BeginType Name="Infragistics.Documents.OfficeOpenXml.Core.ST_Angle" />*/

$.ig.util.defType('ST_Angle', 'ValueType', {
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
	__value: 0,
	init1: function (initNumber, value) {
		$.ig.ValueType.prototype.init.call(this);
		this.__value = value;
	},
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.OfficeOpenXml.Core.ST_Angle::Equals(System.Object)" />*/
	equals: function (obj) {
		var other = $.ig.util.toNullable($.ig.ST_Angle.prototype.$type, $.ig.util.cast($.ig.ST_Angle.prototype.$type, obj));
		if ($.ig.ST_Angle.prototype.l_op_Inequality_Lifted(other, $.ig.util.toNullable($.ig.ST_Angle.prototype.$type, null))) {
			return false;
		}
		return $.ig.ST_Angle.prototype.l_op_Equality(this, other.getValueOrDefault());
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.OfficeOpenXml.Core.ST_Angle::Equals(System.Object)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.Documents.OfficeOpenXml.Core.ST_Angle::GetHashCode()" />*/
	getHashCode: function () {
		return (this.__value);
	}
	/*<EndMethod Name="System.Int32 Infragistics.Documents.OfficeOpenXml.Core.ST_Angle::GetHashCode()" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.Documents.OfficeOpenXml.Core.ST_Angle::ToString()" />*/
	toString: function () {
		return this.__value.toString();
	}
	/*<EndMethod Name="System.String Infragistics.Documents.OfficeOpenXml.Core.ST_Angle::ToString()" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.OfficeOpenXml.Core.ST_Angle Infragistics.Documents.OfficeOpenXml.Core.ST_Angle::FromDegrees(System.Single)" />*/
	fromDegrees: function (degrees) {
		return new $.ig.ST_Angle(1, $.ig.truncate($.ig.DocCoreUtils.prototype.midpointRoundingAwayFromZero2(degrees * $.ig.ST_Angle.prototype.unitsPerDegree)));
	}
	/*<EndMethod Name="Infragistics.Documents.OfficeOpenXml.Core.ST_Angle Infragistics.Documents.OfficeOpenXml.Core.ST_Angle::FromDegrees(System.Single)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.OfficeOpenXml.Core.ST_Angle Infragistics.Documents.OfficeOpenXml.Core.ST_Angle::Parse(System.String)" />*/
	parse: function (value) {
		var parsedValue = $.ig.ST_Angle.prototype.tryParse(value);
		if ($.ig.ST_Angle.prototype.l_op_Inequality_Lifted(parsedValue, $.ig.util.toNullable($.ig.ST_Angle.prototype.$type, null))) {
			return parsedValue.getValueOrDefault();
		}
		throw $.ig.DocCoreUtils.prototype.createFormatException$1($.ig.ST_Angle.prototype.$type, value);
	}
	/*<EndMethod Name="Infragistics.Documents.OfficeOpenXml.Core.ST_Angle Infragistics.Documents.OfficeOpenXml.Core.ST_Angle::Parse(System.String)" />*/
	,
	/*<BeginMethod Name="System.Single Infragistics.Documents.OfficeOpenXml.Core.ST_Angle::ToDegrees()" />*/
	toDegrees: function () {
		return this.__value / $.ig.ST_Angle.prototype.unitsPerDegree;
	}
	/*<EndMethod Name="System.Single Infragistics.Documents.OfficeOpenXml.Core.ST_Angle::ToDegrees()" />*/
	,
	/*<BeginMethod Name="System.Nullable Infragistics.Documents.OfficeOpenXml.Core.ST_Angle::TryParse(System.String)" />*/
	tryParse: function (value) {
		var numericValue;
		if ((function () { var $ret = $.ig.util.tryParseInt32_2(value, $.ig.NumberStyles.prototype.integer, $.ig.CultureInfo.prototype.invariantCulture(), numericValue); numericValue = $ret.p3; return $ret.ret; }()) == false) {
			return $.ig.util.toNullable($.ig.ST_Angle.prototype.$type, null);
		}
		return $.ig.util.toNullable($.ig.ST_Angle.prototype.$type, new $.ig.ST_Angle(1, numericValue));
	}
	/*<EndMethod Name="System.Nullable Infragistics.Documents.OfficeOpenXml.Core.ST_Angle::TryParse(System.String)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.OfficeOpenXml.Core.ST_Angle::AreEqual(Infragistics.Documents.OfficeOpenXml.Core.ST_Angle, Infragistics.Documents.OfficeOpenXml.Core.ST_Angle)" />*/
	areEqual: function (a, b) {
		return a.__value == b.__value;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.OfficeOpenXml.Core.ST_Angle::AreEqual(Infragistics.Documents.OfficeOpenXml.Core.ST_Angle, Infragistics.Documents.OfficeOpenXml.Core.ST_Angle)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.OfficeOpenXml.Core.ST_Angle::L_op_Equality(Infragistics.Documents.OfficeOpenXml.Core.ST_Angle, Infragistics.Documents.OfficeOpenXml.Core.ST_Angle)" />*/
	l_op_Equality: function (a, b) {
		return a.__value == b.__value;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.OfficeOpenXml.Core.ST_Angle::L_op_Equality(Infragistics.Documents.OfficeOpenXml.Core.ST_Angle, Infragistics.Documents.OfficeOpenXml.Core.ST_Angle)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.OfficeOpenXml.Core.ST_Angle::L_op_Equality_Lifted(System.Nullable, System.Nullable)" />*/
	l_op_Equality_Lifted: function (a, b) {
		if (!a.hasValue()) {
			return !b.hasValue();
		} else if (!b.hasValue()) {
			return false;
		}
		return $.ig.ST_Angle.prototype.l_op_Equality(a.value(), b.value());
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.OfficeOpenXml.Core.ST_Angle::L_op_Equality_Lifted(System.Nullable, System.Nullable)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.OfficeOpenXml.Core.ST_Angle::L_op_Inequality(Infragistics.Documents.OfficeOpenXml.Core.ST_Angle, Infragistics.Documents.OfficeOpenXml.Core.ST_Angle)" />*/
	l_op_Inequality: function (a, b) {
		return !($.ig.ST_Angle.prototype.l_op_Equality(a, b));
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.OfficeOpenXml.Core.ST_Angle::L_op_Inequality(Infragistics.Documents.OfficeOpenXml.Core.ST_Angle, Infragistics.Documents.OfficeOpenXml.Core.ST_Angle)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.OfficeOpenXml.Core.ST_Angle::L_op_Inequality_Lifted(System.Nullable, System.Nullable)" />*/
	l_op_Inequality_Lifted: function (a, b) {
		if (!a.hasValue()) {
			return b.hasValue();
		} else if (!b.hasValue()) {
			return true;
		}
		return $.ig.ST_Angle.prototype.l_op_Inequality(a.value(), b.value());
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.OfficeOpenXml.Core.ST_Angle::L_op_Inequality_Lifted(System.Nullable, System.Nullable)" />*/
	,
	$type: new $.ig.Type('ST_Angle', $.ig.ValueType.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.OfficeOpenXml.Core.ST_Angle" />*/

/*<BeginType Name="Infragistics.Documents.OfficeOpenXml.Core.ST_CoordinateUnqualified" />*/

$.ig.util.defType('ST_CoordinateUnqualified', 'ValueType', {
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
	__value: 0,
	init1: function (initNumber, value) {
		$.ig.ValueType.prototype.init.call(this);
		this.__value = value;
	},
	/*<BeginMethod Name="System.Int64 Infragistics.Documents.OfficeOpenXml.Core.ST_CoordinateUnqualified::GetEmus()" />*/
	getEmus: function () {
		return this.__value;
	}
	/*<EndMethod Name="System.Int64 Infragistics.Documents.OfficeOpenXml.Core.ST_CoordinateUnqualified::GetEmus()" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.Documents.OfficeOpenXml.Core.ST_CoordinateUnqualified::GetTwips()" />*/
	getTwips: function () {
		return $.ig.DocCoreUtils.prototype.eMUToTwips(this.__value);
	}
	/*<EndMethod Name="System.Double Infragistics.Documents.OfficeOpenXml.Core.ST_CoordinateUnqualified::GetTwips()" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.OfficeOpenXml.Core.ST_CoordinateUnqualified Infragistics.Documents.OfficeOpenXml.Core.ST_CoordinateUnqualified::Parse(System.String)" />*/
	parse: function (value) {
		return $.ig.ST_CoordinateUnqualified.prototype.l_op_Implicit_ST_CoordinateUnqualified_Int64($.ig.util.parseInt64_2(value, $.ig.NumberStyles.prototype.integer, $.ig.CultureInfo.prototype.invariantCulture()));
	}
	/*<EndMethod Name="Infragistics.Documents.OfficeOpenXml.Core.ST_CoordinateUnqualified Infragistics.Documents.OfficeOpenXml.Core.ST_CoordinateUnqualified::Parse(System.String)" />*/
	,
	/*<BeginMethod Name="System.Nullable Infragistics.Documents.OfficeOpenXml.Core.ST_CoordinateUnqualified::TryParse(System.String)" />*/
	tryParse: function (value) {
		var parsedValue;
		if ((function () { var $ret = $.ig.util.tryParseInt64_2(value, $.ig.NumberStyles.prototype.integer, $.ig.CultureInfo.prototype.invariantCulture(), parsedValue); parsedValue = $ret.p3; return $ret.ret; }())) {
			return $.ig.util.toNullable($.ig.ST_CoordinateUnqualified.prototype.$type, $.ig.ST_CoordinateUnqualified.prototype.l_op_Implicit_ST_CoordinateUnqualified_Int64(parsedValue));
		}
		return $.ig.util.toNullable($.ig.ST_CoordinateUnqualified.prototype.$type, null);
	}
	/*<EndMethod Name="System.Nullable Infragistics.Documents.OfficeOpenXml.Core.ST_CoordinateUnqualified::TryParse(System.String)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.Documents.OfficeOpenXml.Core.ST_CoordinateUnqualified::ToString()" />*/
	toString: function () {
		return this.__value.toString();
	}
	/*<EndMethod Name="System.String Infragistics.Documents.OfficeOpenXml.Core.ST_CoordinateUnqualified::ToString()" />*/
	,
	/*<BeginMethod Name="System.Int64 Infragistics.Documents.OfficeOpenXml.Core.ST_CoordinateUnqualified::L_op_Implicit_Int64_ST_CoordinateUnqualified(Infragistics.Documents.OfficeOpenXml.Core.ST_CoordinateUnqualified)" />*/
	l_op_Implicit_Int64_ST_CoordinateUnqualified: function (value) {
		return value.__value;
	}
	/*<EndMethod Name="System.Int64 Infragistics.Documents.OfficeOpenXml.Core.ST_CoordinateUnqualified::L_op_Implicit_Int64_ST_CoordinateUnqualified(Infragistics.Documents.OfficeOpenXml.Core.ST_CoordinateUnqualified)" />*/
	,
	/*<BeginMethod Name="System.Nullable Infragistics.Documents.OfficeOpenXml.Core.ST_CoordinateUnqualified::L_op_Implicit_Int64_ST_CoordinateUnqualified_Lifted(System.Nullable)" />*/
	l_op_Implicit_Int64_ST_CoordinateUnqualified_Lifted: function (value) {
		if (!value.hasValue()) {
			return $.ig.util.toNullable($.ig.Number.prototype.$type, null);
		}
		return $.ig.util.toNullable($.ig.Number.prototype.$type, $.ig.ST_CoordinateUnqualified.prototype.l_op_Implicit_Int64_ST_CoordinateUnqualified(value.value()));
	}
	/*<EndMethod Name="System.Nullable Infragistics.Documents.OfficeOpenXml.Core.ST_CoordinateUnqualified::L_op_Implicit_Int64_ST_CoordinateUnqualified_Lifted(System.Nullable)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.OfficeOpenXml.Core.ST_CoordinateUnqualified Infragistics.Documents.OfficeOpenXml.Core.ST_CoordinateUnqualified::L_op_Implicit_ST_CoordinateUnqualified_Int64(System.Int64)" />*/
	l_op_Implicit_ST_CoordinateUnqualified_Int64: function (value) {
		return new $.ig.ST_CoordinateUnqualified(1, value);
	}
	/*<EndMethod Name="Infragistics.Documents.OfficeOpenXml.Core.ST_CoordinateUnqualified Infragistics.Documents.OfficeOpenXml.Core.ST_CoordinateUnqualified::L_op_Implicit_ST_CoordinateUnqualified_Int64(System.Int64)" />*/
	,
	/*<BeginMethod Name="System.Nullable Infragistics.Documents.OfficeOpenXml.Core.ST_CoordinateUnqualified::L_op_Implicit_ST_CoordinateUnqualified_Int64_Lifted(System.Nullable)" />*/
	l_op_Implicit_ST_CoordinateUnqualified_Int64_Lifted: function (value) {
		if (!value.hasValue()) {
			return $.ig.util.toNullable($.ig.ST_CoordinateUnqualified.prototype.$type, null);
		}
		return $.ig.util.toNullable($.ig.ST_CoordinateUnqualified.prototype.$type, $.ig.ST_CoordinateUnqualified.prototype.l_op_Implicit_ST_CoordinateUnqualified_Int64(value.value()));
	}
	/*<EndMethod Name="System.Nullable Infragistics.Documents.OfficeOpenXml.Core.ST_CoordinateUnqualified::L_op_Implicit_ST_CoordinateUnqualified_Int64_Lifted(System.Nullable)" />*/
	,
	$type: new $.ig.Type('ST_CoordinateUnqualified', $.ig.ValueType.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.OfficeOpenXml.Core.ST_CoordinateUnqualified" />*/

/*<BeginType Name="Infragistics.Documents.OfficeOpenXml.Core.ST_UniversalMeasure" />*/

$.ig.util.defType('ST_UniversalMeasure', 'ValueType', {
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
	__unitType: 0,
	__value: 0,
	init1: function (initNumber, value, unitType) {
		$.ig.ValueType.prototype.init.call(this);
		this.__value = value;
		this.__unitType = unitType;
	},
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.OfficeOpenXml.Core.ST_UniversalMeasure::Equals(System.Object)" />*/
	equals: function (obj) {
		var other = $.ig.util.toNullable($.ig.ST_UniversalMeasure.prototype.$type, $.ig.util.cast($.ig.ST_UniversalMeasure.prototype.$type, obj));
		if ($.ig.ST_UniversalMeasure.prototype.l_op_Inequality_Lifted(other, $.ig.util.toNullable($.ig.ST_UniversalMeasure.prototype.$type, null))) {
			return false;
		}
		return $.ig.ST_UniversalMeasure.prototype.l_op_Equality(this, other.getValueOrDefault());
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.OfficeOpenXml.Core.ST_UniversalMeasure::Equals(System.Object)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.Documents.OfficeOpenXml.Core.ST_UniversalMeasure::GetHashCode()" />*/
	getHashCode: function () {
		return this.__unitType.getHashCode() << 16 ^ (this.__value);
	}
	/*<EndMethod Name="System.Int32 Infragistics.Documents.OfficeOpenXml.Core.ST_UniversalMeasure::GetHashCode()" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.Documents.OfficeOpenXml.Core.ST_UniversalMeasure::ToString()" />*/
	toString: function () {
		return $.ig.ST_UniversalMeasure.prototype.toStringHelper(this.__value, this.__unitType);
	}
	/*<EndMethod Name="System.String Infragistics.Documents.OfficeOpenXml.Core.ST_UniversalMeasure::ToString()" />*/
	,
	/*<BeginMethod Name="System.Nullable Infragistics.Documents.OfficeOpenXml.Core.ST_UniversalMeasure::GetDoubleValue()" />*/
	getDoubleValue: function () {
		return $.ig.util.toNullable(Number, this.getTwips());
	}
	/*<EndMethod Name="System.Nullable Infragistics.Documents.OfficeOpenXml.Core.ST_UniversalMeasure::GetDoubleValue()" />*/
	,
	/*<BeginMethod Name="System.Int64 Infragistics.Documents.OfficeOpenXml.Core.ST_UniversalMeasure::GetEmus()" />*/
	getEmus: function () {
		return $.ig.DocCoreUtils.prototype.twipsToEMU(this.getTwips());
	}
	/*<EndMethod Name="System.Int64 Infragistics.Documents.OfficeOpenXml.Core.ST_UniversalMeasure::GetEmus()" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.Documents.OfficeOpenXml.Core.ST_UniversalMeasure::GetTwips()" />*/
	getTwips: function () {
		return $.ig.ST_UniversalMeasure.prototype.getTwipsHelper(this.__value, this.__unitType);
	}
	/*<EndMethod Name="System.Double Infragistics.Documents.OfficeOpenXml.Core.ST_UniversalMeasure::GetTwips()" />*/
	,
	/*<BeginMethod Name="System.Nullable Infragistics.Documents.OfficeOpenXml.Core.ST_UniversalMeasure::TryParse(System.String)" />*/
	tryParse: function (value) {
		var numericValue;
		var unitType;
		if ((function () { var $ret = $.ig.ST_UniversalMeasure.prototype.tryParseHelper(value, numericValue, unitType); numericValue = $ret.p1; unitType = $ret.p2; return $ret.ret; }()) == false || numericValue < 0) {
			return $.ig.util.toNullable($.ig.ST_UniversalMeasure.prototype.$type, null);
		}
		return $.ig.util.toNullable($.ig.ST_UniversalMeasure.prototype.$type, new $.ig.ST_UniversalMeasure(1, numericValue, unitType));
	}
	/*<EndMethod Name="System.Nullable Infragistics.Documents.OfficeOpenXml.Core.ST_UniversalMeasure::TryParse(System.String)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.Documents.OfficeOpenXml.Core.ST_UniversalMeasure::GetTwipsHelper(System.Double, Infragistics.Documents.OfficeOpenXml.Core.ST_UniversalMeasure_UnitType)" />*/
	getTwipsHelper: function (numericValue, unitType) {
		var TwipsPerPoint = 20;
		var PointsPerInch = 72;
		var CentimetersPerInch = 2.54;
		var MillimetersPerCentimeters = 10;
		var PointsPerPc = 12;
		var t1 = unitType;
		L0: while (true) {
			switch (t1) {
				case $.ig.ST_UniversalMeasure_UnitType.prototype.centimeters:
					numericValue /= CentimetersPerInch;
					t1 = $.ig.ST_UniversalMeasure_UnitType.prototype.inches;
					continue L0;
				case $.ig.ST_UniversalMeasure_UnitType.prototype.inches:
					numericValue *= PointsPerInch;
					t1 = $.ig.ST_UniversalMeasure_UnitType.prototype.points;
					continue L0;
				case $.ig.ST_UniversalMeasure_UnitType.prototype.millimeters:
					numericValue /= MillimetersPerCentimeters;
					t1 = $.ig.ST_UniversalMeasure_UnitType.prototype.centimeters;
					continue L0;
				case $.ig.ST_UniversalMeasure_UnitType.prototype.points: return (numericValue * TwipsPerPoint);
				case $.ig.ST_UniversalMeasure_UnitType.prototype.pc:
				case $.ig.ST_UniversalMeasure_UnitType.prototype.pi:
					numericValue /= PointsPerPc;
					t1 = $.ig.ST_UniversalMeasure_UnitType.prototype.points;
					continue L0;
				default:
					$.ig.DocCoreUtils.prototype.debugFail("Unknown ST_UniversalMeasure_UnitType: " + $.ig.ST_UniversalMeasure_UnitType.prototype.getBox(unitType));
					return $.ig.truncate((numericValue));
			}
			break;
		}
	}
	/*<EndMethod Name="System.Double Infragistics.Documents.OfficeOpenXml.Core.ST_UniversalMeasure::GetTwipsHelper(System.Double, Infragistics.Documents.OfficeOpenXml.Core.ST_UniversalMeasure_UnitType)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.OfficeOpenXml.Core.ST_UniversalMeasure::TryParseHelper(System.String, System.Double, Infragistics.Documents.OfficeOpenXml.Core.ST_UniversalMeasure_UnitType)" />*/
	tryParseHelper: function (value, numericValue, unitType) {
		numericValue = 0;
		unitType = 0;
		if (value.length < 3) {
			return {
				ret: false,
				p1: numericValue,
				p2: unitType
			};
		}
		var numericPortion = value.substr(0, value.length - 2);
		var unitsPortion = value.substr(value.length - 2);
		switch (unitsPortion) {
			case "cm":
				unitType = $.ig.ST_UniversalMeasure_UnitType.prototype.centimeters;
				break;
			case "mm":
				unitType = $.ig.ST_UniversalMeasure_UnitType.prototype.millimeters;
				break;
			case "in":
				unitType = $.ig.ST_UniversalMeasure_UnitType.prototype.inches;
				break;
			case "pt":
				unitType = $.ig.ST_UniversalMeasure_UnitType.prototype.points;
				break;
			case "pc":
				unitType = $.ig.ST_UniversalMeasure_UnitType.prototype.pc;
				break;
			case "pi":
				unitType = $.ig.ST_UniversalMeasure_UnitType.prototype.pi;
				break;
			default: return {
				ret: false,
				p1: numericValue,
				p2: unitType
			};
		}
		if ((function () { var $ret = $.ig.util.tryParseNumber1(numericPortion, $.ig.NumberStyles.prototype.floatNumber | $.ig.NumberStyles.prototype.allowThousands, $.ig.CultureInfo.prototype.invariantCulture(), numericValue); numericValue = $ret.p3; return $ret.ret; }()) == false) {
			return {
				ret: false,
				p1: numericValue,
				p2: unitType
			};
		}
		return {
			ret: true,
			p1: numericValue,
			p2: unitType
		};
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.OfficeOpenXml.Core.ST_UniversalMeasure::TryParseHelper(System.String, System.Double, Infragistics.Documents.OfficeOpenXml.Core.ST_UniversalMeasure_UnitType)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.Documents.OfficeOpenXml.Core.ST_UniversalMeasure::ToStringHelper(System.Double, Infragistics.Documents.OfficeOpenXml.Core.ST_UniversalMeasure_UnitType)" />*/
	toStringHelper: function (value, unitType) {
		var suffix;
		switch (unitType) {
			case $.ig.ST_UniversalMeasure_UnitType.prototype.centimeters:
				suffix = "cm";
				break;
			case $.ig.ST_UniversalMeasure_UnitType.prototype.inches:
				suffix = "in";
				break;
			case $.ig.ST_UniversalMeasure_UnitType.prototype.millimeters:
				suffix = "mm";
				break;
			case $.ig.ST_UniversalMeasure_UnitType.prototype.points:
				suffix = "pt";
				break;
			case $.ig.ST_UniversalMeasure_UnitType.prototype.pc:
				suffix = "pc";
				break;
			case $.ig.ST_UniversalMeasure_UnitType.prototype.pi:
				suffix = "pi";
				break;
			default:
				$.ig.DocCoreUtils.prototype.debugFail("Unknown ST_UniversalMeasure_UnitType: " + $.ig.ST_UniversalMeasure_UnitType.prototype.getBox(unitType));
				suffix = "pt";
				break;
		}
		return value.toString() + suffix;
	}
	/*<EndMethod Name="System.String Infragistics.Documents.OfficeOpenXml.Core.ST_UniversalMeasure::ToStringHelper(System.Double, Infragistics.Documents.OfficeOpenXml.Core.ST_UniversalMeasure_UnitType)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.OfficeOpenXml.Core.ST_UniversalMeasure::AreEqual(Infragistics.Documents.OfficeOpenXml.Core.ST_UniversalMeasure, Infragistics.Documents.OfficeOpenXml.Core.ST_UniversalMeasure)" />*/
	areEqual: function (a, b) {
		return a.__unitType == b.__unitType && a.__value == b.__value;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.OfficeOpenXml.Core.ST_UniversalMeasure::AreEqual(Infragistics.Documents.OfficeOpenXml.Core.ST_UniversalMeasure, Infragistics.Documents.OfficeOpenXml.Core.ST_UniversalMeasure)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.OfficeOpenXml.Core.ST_UniversalMeasure::L_op_Equality(Infragistics.Documents.OfficeOpenXml.Core.ST_UniversalMeasure, Infragistics.Documents.OfficeOpenXml.Core.ST_UniversalMeasure)" />*/
	l_op_Equality: function (a, b) {
		return a.__unitType == b.__unitType && a.__value == b.__value;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.OfficeOpenXml.Core.ST_UniversalMeasure::L_op_Equality(Infragistics.Documents.OfficeOpenXml.Core.ST_UniversalMeasure, Infragistics.Documents.OfficeOpenXml.Core.ST_UniversalMeasure)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.OfficeOpenXml.Core.ST_UniversalMeasure::L_op_Equality_Lifted(System.Nullable, System.Nullable)" />*/
	l_op_Equality_Lifted: function (a, b) {
		if (!a.hasValue()) {
			return !b.hasValue();
		} else if (!b.hasValue()) {
			return false;
		}
		return $.ig.ST_UniversalMeasure.prototype.l_op_Equality(a.value(), b.value());
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.OfficeOpenXml.Core.ST_UniversalMeasure::L_op_Equality_Lifted(System.Nullable, System.Nullable)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.OfficeOpenXml.Core.ST_UniversalMeasure::L_op_Inequality(Infragistics.Documents.OfficeOpenXml.Core.ST_UniversalMeasure, Infragistics.Documents.OfficeOpenXml.Core.ST_UniversalMeasure)" />*/
	l_op_Inequality: function (a, b) {
		return !($.ig.ST_UniversalMeasure.prototype.l_op_Equality(a, b));
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.OfficeOpenXml.Core.ST_UniversalMeasure::L_op_Inequality(Infragistics.Documents.OfficeOpenXml.Core.ST_UniversalMeasure, Infragistics.Documents.OfficeOpenXml.Core.ST_UniversalMeasure)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.OfficeOpenXml.Core.ST_UniversalMeasure::L_op_Inequality_Lifted(System.Nullable, System.Nullable)" />*/
	l_op_Inequality_Lifted: function (a, b) {
		if (!a.hasValue()) {
			return b.hasValue();
		} else if (!b.hasValue()) {
			return true;
		}
		return $.ig.ST_UniversalMeasure.prototype.l_op_Inequality(a.value(), b.value());
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.OfficeOpenXml.Core.ST_UniversalMeasure::L_op_Inequality_Lifted(System.Nullable, System.Nullable)" />*/
	,
	$type: new $.ig.Type('ST_UniversalMeasure', $.ig.ValueType.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.OfficeOpenXml.Core.ST_UniversalMeasure" />*/

/*<BeginType Name="Infragistics.Documents.OfficeOpenXml.Core.ST_Coordinate" />*/

$.ig.util.defType('ST_Coordinate', 'ValueType', {
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
		$.ig.ValueType.prototype.init.call(this);
	},
	__value1: $.ig.util.toNullable($.ig.ST_CoordinateUnqualified.prototype.$type, null),
	__value2: $.ig.util.toNullable($.ig.ST_UniversalMeasure.prototype.$type, null),
	init1: function (initNumber, value) {
		$.ig.ValueType.prototype.init.call(this);
		this.__value1 = $.ig.util.toNullable($.ig.ST_CoordinateUnqualified.prototype.$type, value);
		this.__value2 = $.ig.util.toNullable($.ig.ST_UniversalMeasure.prototype.$type, null);
	},
	init2: function (initNumber, value) {
		$.ig.ValueType.prototype.init.call(this);
		this.__value1 = $.ig.util.toNullable($.ig.ST_CoordinateUnqualified.prototype.$type, null);
		this.__value2 = $.ig.util.toNullable($.ig.ST_UniversalMeasure.prototype.$type, value);
	},
	/*<BeginMethod Name="System.Int64 Infragistics.Documents.OfficeOpenXml.Core.ST_Coordinate::GetEmus()" />*/
	getEmus: function () {
		if ($.ig.util.nullableNotEquals(this.__value1, null)) {
			return this.__value1.getValueOrDefault().getEmus();
		}
		if ($.ig.ST_UniversalMeasure.prototype.l_op_Inequality_Lifted(this.__value2, $.ig.util.toNullable($.ig.ST_UniversalMeasure.prototype.$type, null))) {
			return this.__value2.getValueOrDefault().getEmus();
		}
		return 0;
	}
	/*<EndMethod Name="System.Int64 Infragistics.Documents.OfficeOpenXml.Core.ST_Coordinate::GetEmus()" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.Documents.OfficeOpenXml.Core.ST_Coordinate::GetTwips()" />*/
	getTwips: function () {
		if ($.ig.util.nullableNotEquals(this.__value1, null)) {
			return this.__value1.getValueOrDefault().getTwips();
		}
		if ($.ig.ST_UniversalMeasure.prototype.l_op_Inequality_Lifted(this.__value2, $.ig.util.toNullable($.ig.ST_UniversalMeasure.prototype.$type, null))) {
			return this.__value2.getValueOrDefault().getTwips();
		}
		return 0;
	}
	/*<EndMethod Name="System.Double Infragistics.Documents.OfficeOpenXml.Core.ST_Coordinate::GetTwips()" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.OfficeOpenXml.Core.ST_Coordinate Infragistics.Documents.OfficeOpenXml.Core.ST_Coordinate::Parse(System.String)" />*/
	parse: function (value) {
		var parsedValue = $.ig.ST_Coordinate.prototype.tryParse(value);
		if ($.ig.util.nullableNotEquals(parsedValue, null)) {
			return parsedValue.getValueOrDefault();
		}
		throw $.ig.DocCoreUtils.prototype.createFormatException$1($.ig.ST_Coordinate.prototype.$type, value);
	}
	/*<EndMethod Name="Infragistics.Documents.OfficeOpenXml.Core.ST_Coordinate Infragistics.Documents.OfficeOpenXml.Core.ST_Coordinate::Parse(System.String)" />*/
	,
	/*<BeginMethod Name="System.Nullable Infragistics.Documents.OfficeOpenXml.Core.ST_Coordinate::TryParse(System.String)" />*/
	tryParse: function (value) {
		var auto = $.ig.ST_CoordinateUnqualified.prototype.tryParse(value);
		if ($.ig.util.nullableNotEquals(auto, null)) {
			return $.ig.util.toNullable($.ig.ST_Coordinate.prototype.$type, $.ig.ST_Coordinate.prototype.l_op_Implicit_ST_Coordinate_ST_CoordinateUnqualified(auto.getValueOrDefault()));
		}
		var rgb = $.ig.ST_UniversalMeasure.prototype.tryParse(value);
		if ($.ig.ST_UniversalMeasure.prototype.l_op_Inequality_Lifted(rgb, $.ig.util.toNullable($.ig.ST_UniversalMeasure.prototype.$type, null))) {
			return $.ig.util.toNullable($.ig.ST_Coordinate.prototype.$type, $.ig.ST_Coordinate.prototype.l_op_Implicit_ST_Coordinate_ST_UniversalMeasure(rgb.getValueOrDefault()));
		}
		return $.ig.util.toNullable($.ig.ST_Coordinate.prototype.$type, null);
	}
	/*<EndMethod Name="System.Nullable Infragistics.Documents.OfficeOpenXml.Core.ST_Coordinate::TryParse(System.String)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.Documents.OfficeOpenXml.Core.ST_Coordinate::ToString()" />*/
	toString: function () {
		if ($.ig.util.nullableNotEquals(this.__value1, null)) {
			return this.__value1.getValueOrDefault().toString();
		}
		if ($.ig.ST_UniversalMeasure.prototype.l_op_Inequality_Lifted(this.__value2, $.ig.util.toNullable($.ig.ST_UniversalMeasure.prototype.$type, null))) {
			return this.__value2.getValueOrDefault().toString();
		}
		return String.empty();
	}
	/*<EndMethod Name="System.String Infragistics.Documents.OfficeOpenXml.Core.ST_Coordinate::ToString()" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.OfficeOpenXml.Core.ST_Coordinate Infragistics.Documents.OfficeOpenXml.Core.ST_Coordinate::FromLong(System.Int64)" />*/
	fromLong: function (value) {
		return new $.ig.ST_Coordinate(1, $.ig.ST_CoordinateUnqualified.prototype.l_op_Implicit_ST_CoordinateUnqualified_Int64(value));
	}
	/*<EndMethod Name="Infragistics.Documents.OfficeOpenXml.Core.ST_Coordinate Infragistics.Documents.OfficeOpenXml.Core.ST_Coordinate::FromLong(System.Int64)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.OfficeOpenXml.Core.ST_Coordinate Infragistics.Documents.OfficeOpenXml.Core.ST_Coordinate::L_op_Implicit_ST_Coordinate_Int64(System.Int64)" />*/
	l_op_Implicit_ST_Coordinate_Int64: function (value) {
		return new $.ig.ST_Coordinate(1, $.ig.ST_CoordinateUnqualified.prototype.l_op_Implicit_ST_CoordinateUnqualified_Int64(value));
	}
	/*<EndMethod Name="Infragistics.Documents.OfficeOpenXml.Core.ST_Coordinate Infragistics.Documents.OfficeOpenXml.Core.ST_Coordinate::L_op_Implicit_ST_Coordinate_Int64(System.Int64)" />*/
	,
	/*<BeginMethod Name="System.Nullable Infragistics.Documents.OfficeOpenXml.Core.ST_Coordinate::L_op_Implicit_ST_Coordinate_Int64_Lifted(System.Nullable)" />*/
	l_op_Implicit_ST_Coordinate_Int64_Lifted: function (value) {
		if (!value.hasValue()) {
			return $.ig.util.toNullable($.ig.ST_Coordinate.prototype.$type, null);
		}
		return $.ig.util.toNullable($.ig.ST_Coordinate.prototype.$type, $.ig.ST_Coordinate.prototype.l_op_Implicit_ST_Coordinate_Int64(value.value()));
	}
	/*<EndMethod Name="System.Nullable Infragistics.Documents.OfficeOpenXml.Core.ST_Coordinate::L_op_Implicit_ST_Coordinate_Int64_Lifted(System.Nullable)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.OfficeOpenXml.Core.ST_Coordinate Infragistics.Documents.OfficeOpenXml.Core.ST_Coordinate::L_op_Implicit_ST_Coordinate_ST_CoordinateUnqualified(Infragistics.Documents.OfficeOpenXml.Core.ST_CoordinateUnqualified)" />*/
	l_op_Implicit_ST_Coordinate_ST_CoordinateUnqualified: function (value) {
		return new $.ig.ST_Coordinate(1, value);
	}
	/*<EndMethod Name="Infragistics.Documents.OfficeOpenXml.Core.ST_Coordinate Infragistics.Documents.OfficeOpenXml.Core.ST_Coordinate::L_op_Implicit_ST_Coordinate_ST_CoordinateUnqualified(Infragistics.Documents.OfficeOpenXml.Core.ST_CoordinateUnqualified)" />*/
	,
	/*<BeginMethod Name="System.Nullable Infragistics.Documents.OfficeOpenXml.Core.ST_Coordinate::L_op_Implicit_ST_Coordinate_ST_CoordinateUnqualified_Lifted(System.Nullable)" />*/
	l_op_Implicit_ST_Coordinate_ST_CoordinateUnqualified_Lifted: function (value) {
		if (!value.hasValue()) {
			return $.ig.util.toNullable($.ig.ST_Coordinate.prototype.$type, null);
		}
		return $.ig.util.toNullable($.ig.ST_Coordinate.prototype.$type, $.ig.ST_Coordinate.prototype.l_op_Implicit_ST_Coordinate_ST_CoordinateUnqualified(value.value()));
	}
	/*<EndMethod Name="System.Nullable Infragistics.Documents.OfficeOpenXml.Core.ST_Coordinate::L_op_Implicit_ST_Coordinate_ST_CoordinateUnqualified_Lifted(System.Nullable)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.OfficeOpenXml.Core.ST_CoordinateUnqualified Infragistics.Documents.OfficeOpenXml.Core.ST_Coordinate::L_op_Explicit_ST_CoordinateUnqualified_ST_Coordinate(Infragistics.Documents.OfficeOpenXml.Core.ST_Coordinate)" />*/
	l_op_Explicit_ST_CoordinateUnqualified_ST_Coordinate: function (value) {
		return value.__value1.value();
	}
	/*<EndMethod Name="Infragistics.Documents.OfficeOpenXml.Core.ST_CoordinateUnqualified Infragistics.Documents.OfficeOpenXml.Core.ST_Coordinate::L_op_Explicit_ST_CoordinateUnqualified_ST_Coordinate(Infragistics.Documents.OfficeOpenXml.Core.ST_Coordinate)" />*/
	,
	/*<BeginMethod Name="System.Nullable Infragistics.Documents.OfficeOpenXml.Core.ST_Coordinate::L_op_Explicit_ST_CoordinateUnqualified_ST_Coordinate_Lifted(System.Nullable)" />*/
	l_op_Explicit_ST_CoordinateUnqualified_ST_Coordinate_Lifted: function (value) {
		if (!value.hasValue()) {
			return $.ig.util.toNullable($.ig.ST_CoordinateUnqualified.prototype.$type, null);
		}
		return $.ig.util.toNullable($.ig.ST_CoordinateUnqualified.prototype.$type, $.ig.ST_Coordinate.prototype.l_op_Explicit_ST_CoordinateUnqualified_ST_Coordinate(value.value()));
	}
	/*<EndMethod Name="System.Nullable Infragistics.Documents.OfficeOpenXml.Core.ST_Coordinate::L_op_Explicit_ST_CoordinateUnqualified_ST_Coordinate_Lifted(System.Nullable)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.OfficeOpenXml.Core.ST_Coordinate Infragistics.Documents.OfficeOpenXml.Core.ST_Coordinate::L_op_Implicit_ST_Coordinate_ST_UniversalMeasure(Infragistics.Documents.OfficeOpenXml.Core.ST_UniversalMeasure)" />*/
	l_op_Implicit_ST_Coordinate_ST_UniversalMeasure: function (value) {
		return new $.ig.ST_Coordinate(2, value);
	}
	/*<EndMethod Name="Infragistics.Documents.OfficeOpenXml.Core.ST_Coordinate Infragistics.Documents.OfficeOpenXml.Core.ST_Coordinate::L_op_Implicit_ST_Coordinate_ST_UniversalMeasure(Infragistics.Documents.OfficeOpenXml.Core.ST_UniversalMeasure)" />*/
	,
	/*<BeginMethod Name="System.Nullable Infragistics.Documents.OfficeOpenXml.Core.ST_Coordinate::L_op_Implicit_ST_Coordinate_ST_UniversalMeasure_Lifted(System.Nullable)" />*/
	l_op_Implicit_ST_Coordinate_ST_UniversalMeasure_Lifted: function (value) {
		if (!value.hasValue()) {
			return $.ig.util.toNullable($.ig.ST_Coordinate.prototype.$type, null);
		}
		return $.ig.util.toNullable($.ig.ST_Coordinate.prototype.$type, $.ig.ST_Coordinate.prototype.l_op_Implicit_ST_Coordinate_ST_UniversalMeasure(value.value()));
	}
	/*<EndMethod Name="System.Nullable Infragistics.Documents.OfficeOpenXml.Core.ST_Coordinate::L_op_Implicit_ST_Coordinate_ST_UniversalMeasure_Lifted(System.Nullable)" />*/
	,
	$type: new $.ig.Type('ST_Coordinate', $.ig.ValueType.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.OfficeOpenXml.Core.ST_Coordinate" />*/

/*<BeginType Name="Infragistics.Documents.Core.Async" />*/

$.ig.util.defType('Async', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.Async::For(System.Int32, System.Int32, System.Int32, System.Func)" />*/
	$for: function (initialValue, exclusiveMax, increment, statement) {
		return new $.ig.Async_ForHelper(initialValue, exclusiveMax, increment, statement).execute();
	}
	/*<EndMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.Async::For(System.Int32, System.Int32, System.Int32, System.Func)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.Async::ForSlice(System.Int32, System.Int32, System.Int32, System.Func)" />*/
	forSlice: function (initialValue, exclusiveMax, increment, statement) {
		return new $.ig.Async_ForSliceHelper(initialValue, exclusiveMax, increment, statement).execute();
	}
	/*<EndMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.Async::ForSlice(System.Int32, System.Int32, System.Int32, System.Func)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.Async::ForEach`1(System.Collections.Generic.IEnumerable, System.Func)" />*/
	forEach$1: function ($t, collection, itemAction) {
		return new $.ig.Async_ForEachHelper$1($t, collection.getEnumerator(), itemAction).execute();
	}
	/*<EndMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.Async::ForEach`1(System.Collections.Generic.IEnumerable, System.Func)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.Async::ForEachSlice`1(System.Collections.Generic.IEnumerable, System.Func)" />*/
	forEachSlice$1: function ($t, collection, itemAction) {
		return new $.ig.Async_ForEachSliceHelper$1($t, collection.getEnumerator(), itemAction).execute();
	}
	/*<EndMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.Async::ForEachSlice`1(System.Collections.Generic.IEnumerable, System.Func)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.Async::If(System.Boolean, System.Func, System.Func)" />*/
	$if: function (condition, statement, elseStatement) {
		if (condition) {
			return statement();
		}
		if (elseStatement != null) {
			return elseStatement();
		}
		return null;
	}
	/*<EndMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.Async::If(System.Boolean, System.Func, System.Func)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.Async::Try(System.Func, System.Action)" />*/
	$try: function ($try, $finally) {
		try {
			return $.ig.Async.prototype.$finally($try(), $finally);
		}
		catch (e) {
			$finally();
			throw e;
		}
	}
	/*<EndMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.Async::Try(System.Func, System.Action)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.Async::Try`1(System.Func, System.Action)" />*/
	try$1: function ($tResult, $try, $finally) {
		try {
			var result = $.ig.util.getDefaultValue($tResult);
			return $.ig.WorkItemExtensions.prototype.then$12($tResult, $.ig.Async.prototype.$finally($.ig.WorkItemExtensions.prototype.then$1($tResult, $try(), function (t) {
				result = $.ig.WorkItemExtensions.prototype.getResult$1($tResult, t);
			}, 0), $finally), function () { return result; }, 0);
		}
		catch (e) {
			$finally();
			throw e;
		}
	}
	/*<EndMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.Async::Try`1(System.Func, System.Action)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.Async::Try`1(System.Func, System.Action, System.Action)" />*/
	try$11: function ($tException, $try, $catch, $finally) {
		try {
			return $.ig.Async.prototype.$finally($.ig.Async.prototype.catch$1($tException, $try(), $catch, false), $finally);
		}
		catch (e) {
			try {
				var e1 = $.ig.util.cast($tException, e);
				if (e1 != null) {
					$catch(e1);
					return null;
				}
				throw e;
			}
			finally {
				if ($finally != null) {
					var temp = $finally;
					$finally = null;
					temp();
				}
			}
		}
	}
	/*<EndMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.Async::Try`1(System.Func, System.Action, System.Action)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.Async::Try`2(System.Func, System.Action, System.Action)" />*/
	try$2: function ($tException, $tResult, $try, $catch, $finally) {
		try {
			var result = $.ig.util.getDefaultValue($tResult);
			return $.ig.WorkItemExtensions.prototype.then$12($tResult, $.ig.Async.prototype.$finally($.ig.Async.prototype.catch$1($tException, $.ig.WorkItemExtensions.prototype.then$1($tResult, $try(), function (t) {
				result = $.ig.WorkItemExtensions.prototype.getResult$1($tResult, t);
			}, 0), $catch, false), $finally), function () { return result; }, 0);
		}
		catch (e) {
			try {
				var e1 = $.ig.util.cast($tException, e);
				if (e1 != null) {
					$catch(e1);
					return null;
				}
				throw e;
			}
			finally {
				if ($finally != null) {
					var temp = $finally;
					$finally = null;
					temp();
				}
			}
		}
	}
	/*<EndMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.Async::Try`2(System.Func, System.Action, System.Action)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.Async::Try`2(System.Func, System.Action, System.Action, System.Action)" />*/
	try$21: function ($tException1, $tException2, $try, catch1, catch2, $finally) {
		try {
			return $.ig.Async.prototype.$finally($.ig.Async.prototype.catch$1($tException2, $.ig.Async.prototype.catch$1($tException1, $try(), catch1, false), catch2, true), $finally);
		}
		catch (e) {
			try {
				var e1 = $.ig.util.cast($tException1, e);
				if (e1 != null) {
					catch1(e1);
					return null;
				}
				var e2 = $.ig.util.cast($tException2, e);
				if (e2 != null) {
					catch2(e2);
					return null;
				}
				throw e;
			}
			finally {
				if ($finally != null) {
					var temp = $finally;
					$finally = null;
					temp();
				}
			}
		}
	}
	/*<EndMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.Async::Try`2(System.Func, System.Action, System.Action, System.Action)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.Async::Try`3(System.Func, System.Action, System.Action, System.Action, System.Action)" />*/
	try$3: function ($tException1, $tException2, $tException3, $try, catch1, catch2, catch3, $finally) {
		try {
			return $.ig.Async.prototype.$finally($.ig.Async.prototype.catch$1($tException3, $.ig.Async.prototype.catch$1($tException2, $.ig.Async.prototype.catch$1($tException1, $try(), catch1, false), catch2, true), catch3, true), $finally);
		}
		catch (e) {
			try {
				var e1 = $.ig.util.cast($tException1, e);
				if (e1 != null) {
					catch1(e1);
					return null;
				}
				var e2 = $.ig.util.cast($tException2, e);
				if (e2 != null) {
					catch2(e2);
					return null;
				}
				var e3 = $.ig.util.cast($tException3, e);
				if (e3 != null) {
					catch3(e3);
					return null;
				}
				throw e;
			}
			finally {
				if ($finally != null) {
					var temp = $finally;
					$finally = null;
					temp();
				}
			}
		}
	}
	/*<EndMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.Async::Try`3(System.Func, System.Action, System.Action, System.Action, System.Action)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.Async::Catch`1(Infragistics.Documents.Core.WorkItem, System.Action, System.Boolean)" />*/
	catch$1: function ($tException, $this, action, isSubsequentCatch) {
		return new $.ig.WorkItem_WorkItemCatch$1($tException, action, $this, isSubsequentCatch);
	}
	/*<EndMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.Async::Catch`1(Infragistics.Documents.Core.WorkItem, System.Action, System.Boolean)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.Async::Finally(Infragistics.Documents.Core.WorkItem, System.Action)" />*/
	$finally: function ($this, action) {
		if (action == null) {
			return $this;
		}
		return new $.ig.WorkItem_WorkItemSync(action, $.ig.WorkItemContinuationType.prototype.synchronous, $this, false);
	}
	/*<EndMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.Async::Finally(Infragistics.Documents.Core.WorkItem, System.Action)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.Async::Using`1(Infragistics.Documents.Core.Async.T, System.Func)" />*/
	using$1: function ($t, resource, statement) {
		return new $.ig.Async_UsingHelper$1($t, resource, statement).execute();
	}
	/*<EndMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.Async::Using`1(Infragistics.Documents.Core.Async.T, System.Func)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.Async::Using`2(Infragistics.Documents.Core.Async.T, System.Func)" />*/
	using$2: function ($t, $tResult, resource, statement) {
		return new $.ig.Async_UsingHelper$2($t, $tResult, resource, statement).execute();
	}
	/*<EndMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.Async::Using`2(Infragistics.Documents.Core.Async.T, System.Func)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.Async::While(System.Func, System.Func)" />*/
	$while: function (condition, statement) {
		return new $.ig.Async_WhileHelper(condition, statement).execute();
	}
	/*<EndMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.Async::While(System.Func, System.Func)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.Async::WhileSlice(System.Func, System.Func)" />*/
	whileSlice: function (condition, statement) {
		return new $.ig.Async_WhileSliceHelper(condition, statement).execute();
	}
	/*<EndMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.Async::WhileSlice(System.Func, System.Func)" />*/
	,
	$type: new $.ig.Type('Async', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Core.Async" />*/

/*<BeginType Name="Infragistics.Documents.Core.Async_ForHelper" />*/

$.ig.util.defType('Async_ForHelper', 'Object', {
	__exclusiveMax: 0,
	__executeNextCallback: null,
	__increment: 0,
	__statement: null,
	__value: 0,
	init: function (initialValue, exclusiveMax, increment, statement) {
		$.ig.Object.prototype.init.call(this);
		this.__value = initialValue;
		this.__exclusiveMax = exclusiveMax;
		this.__increment = increment;
		this.__statement = statement;
		this.__executeNextCallback = this.executeNext.runOn(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.Async_ForHelper::Execute()" />*/
	execute: function () {
		if (this.__exclusiveMax <= this.__value) {
			return null;
		}
		return $.ig.WorkItemExtensions.prototype.then2(this.__statement(this.__value), this.__executeNextCallback, 0);
	}
	/*<EndMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.Async_ForHelper::Execute()" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.Async_ForHelper::ExecuteNext()" />*/
	executeNext: function () {
		this.__value += this.__increment;
		return this.execute();
	}
	/*<EndMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.Async_ForHelper::ExecuteNext()" />*/
	,
	$type: new $.ig.Type('Async_ForHelper', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Core.Async_ForHelper" />*/

/*<BeginType Name="Infragistics.Documents.Core.Async_ForSliceHelper" />*/

$.ig.util.defType('Async_ForSliceHelper', 'Object', {
	__exclusiveMax: 0,
	__executeCallback: null,
	__increment: 0,
	__statement: null,
	__value: 0,
	init: function (initialValue, exclusiveMax, increment, statement) {
		$.ig.Object.prototype.init.call(this);
		this.__value = initialValue;
		this.__exclusiveMax = exclusiveMax;
		this.__increment = increment;
		this.__statement = statement;
		this.__executeCallback = this.execute.runOn(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.Async_ForSliceHelper::Execute()" />*/
	execute: function () {
		while (this.__value < this.__exclusiveMax) {
			var result = this.__statement(this.__value);
			this.__value += this.__increment;
			if (!result) {
				return $.ig.WorkItem.prototype.create1(this.__executeCallback, $.ig.WorkItemContinuationType.prototype.asynchronous);
			}
		}
		return null;
	}
	/*<EndMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.Async_ForSliceHelper::Execute()" />*/
	,
	$type: new $.ig.Type('Async_ForSliceHelper', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Core.Async_ForSliceHelper" />*/

/*<BeginType Name="Infragistics.Documents.Core.Async_ForEachHelper`1" />*/

$.ig.util.defType('Async_ForEachHelper$1', 'Object', {
	$t: null,
	__enumerator: null,
	__executeNextCallback: null,
	__itemAction: null,
	init: function ($t, enumerator, itemAction) {
		this.$t = $t;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$t);
		}
		$.ig.Object.prototype.init.call(this);
		this.__enumerator = enumerator;
		this.__itemAction = itemAction;
		this.__executeNextCallback = this.executeNext.runOn(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.Async_ForEachHelper`1::Execute()" />*/
	execute: function () {
		var $self = this;
		return $.ig.Async.prototype.$try(this.__executeNextCallback, function () {
			if ($self.__enumerator != null) {
				$self.__enumerator.dispose();
			}
		});
	}
	/*<EndMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.Async_ForEachHelper`1::Execute()" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.Async_ForEachHelper`1::ExecuteNext()" />*/
	executeNext: function () {
		if (this.__enumerator.moveNext() == false) {
			return null;
		}
		return $.ig.WorkItemExtensions.prototype.then2(this.__itemAction(this.__enumerator.current()), this.__executeNextCallback, 0);
	}
	/*<EndMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.Async_ForEachHelper`1::ExecuteNext()" />*/
	,
	$type: new $.ig.Type('Async_ForEachHelper$1', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Core.Async_ForEachHelper`1" />*/

/*<BeginType Name="Infragistics.Documents.Core.Async_ForEachSliceHelper`1" />*/

$.ig.util.defType('Async_ForEachSliceHelper$1', 'Object', {
	$t: null,
	__enumerator: null,
	__executeNextCallback: null,
	__itemAction: null,
	init: function ($t, enumerator, itemAction) {
		this.$t = $t;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$t);
		}
		$.ig.Object.prototype.init.call(this);
		this.__enumerator = enumerator;
		this.__itemAction = itemAction;
		this.__executeNextCallback = this.executeNext.runOn(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.Async_ForEachSliceHelper`1::Execute()" />*/
	execute: function () {
		var $self = this;
		return $.ig.Async.prototype.$try(this.__executeNextCallback, function () {
			if ($self.__enumerator != null) {
				$self.__enumerator.dispose();
			}
		});
	}
	/*<EndMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.Async_ForEachSliceHelper`1::Execute()" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.Async_ForEachSliceHelper`1::ExecuteNext()" />*/
	executeNext: function () {
		while (this.__enumerator.moveNext()) {
			if (this.__itemAction(this.__enumerator.current()) == false) {
				return $.ig.WorkItem.prototype.create1(this.__executeNextCallback, $.ig.WorkItemContinuationType.prototype.asynchronous);
			}
		}
		return null;
	}
	/*<EndMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.Async_ForEachSliceHelper`1::ExecuteNext()" />*/
	,
	$type: new $.ig.Type('Async_ForEachSliceHelper$1', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Core.Async_ForEachSliceHelper`1" />*/

/*<BeginType Name="Infragistics.Documents.Core.Async_UsingHelper`1" />*/

$.ig.util.defType('Async_UsingHelper$1', 'Object', {
	$t: null,
	__resource: null,
	__statement: null,
	init: function ($t, resource, statement) {
		this.$t = $t;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$t);
		}
		$.ig.Object.prototype.init.call(this);
		this.__resource = resource;
		this.__statement = statement;
	},
	/*<BeginMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.Async_UsingHelper`1::Execute()" />*/
	execute: function () {
		var $self = this;
		return $.ig.Async.prototype.$try(function () { return $self.__statement($self.__resource); }, function () {
			if ($.ig.util.getBoxIfEnum($self.$t, $self.__resource) != null) {
				$self.__resource.dispose();
			}
		});
	}
	/*<EndMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.Async_UsingHelper`1::Execute()" />*/
	,
	$type: new $.ig.Type('Async_UsingHelper$1', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Core.Async_UsingHelper`1" />*/

/*<BeginType Name="Infragistics.Documents.Core.Async_UsingHelper`2" />*/

$.ig.util.defType('Async_UsingHelper$2', 'Object', {
	$t: null,
	$tResult: null,
	__resource: null,
	__statement: null,
	init: function ($t, $tResult, resource, statement) {
		this.$t = $t;
		this.$tResult = $tResult;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$t, this.$tResult);
		}
		$.ig.Object.prototype.init.call(this);
		this.__resource = resource;
		this.__statement = statement;
	},
	/*<BeginMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.Async_UsingHelper`2::Execute()" />*/
	execute: function () {
		var $self = this;
		return $.ig.Async.prototype.try$1(this.$tResult, function () { return $self.__statement($self.__resource); }, function () {
			if ($.ig.util.getBoxIfEnum($self.$t, $self.__resource) != null) {
				$self.__resource.dispose();
			}
		});
	}
	/*<EndMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.Async_UsingHelper`2::Execute()" />*/
	,
	$type: new $.ig.Type('Async_UsingHelper$2', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Core.Async_UsingHelper`2" />*/

/*<BeginType Name="Infragistics.Documents.Core.Async_WhileHelper" />*/

$.ig.util.defType('Async_WhileHelper', 'Object', {
	__executeCallback: null,
	__condition: null,
	__statement: null,
	init: function (condition, statement) {
		$.ig.Object.prototype.init.call(this);
		this.__condition = condition;
		this.__statement = statement;
		this.__executeCallback = this.execute.runOn(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.Async_WhileHelper::Execute()" />*/
	execute: function () {
		if (!this.__condition()) {
			return null;
		}
		return $.ig.WorkItemExtensions.prototype.then2(this.__statement(), this.__executeCallback, 0);
	}
	/*<EndMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.Async_WhileHelper::Execute()" />*/
	,
	$type: new $.ig.Type('Async_WhileHelper', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Core.Async_WhileHelper" />*/

/*<BeginType Name="Infragistics.Documents.Core.Async_WhileSliceHelper" />*/

$.ig.util.defType('Async_WhileSliceHelper', 'Object', {
	__condition: null,
	__executeCallback: null,
	__statement: null,
	init: function (condition, statement) {
		$.ig.Object.prototype.init.call(this);
		this.__condition = condition;
		this.__statement = statement;
		this.__executeCallback = this.execute.runOn(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.Async_WhileSliceHelper::Execute()" />*/
	execute: function () {
		while (this.__condition()) {
			if (!this.__statement()) {
				return $.ig.WorkItem.prototype.create1(this.__executeCallback, $.ig.WorkItemContinuationType.prototype.asynchronous);
			}
		}
		return null;
	}
	/*<EndMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.Async_WhileSliceHelper::Execute()" />*/
	,
	$type: new $.ig.Type('Async_WhileSliceHelper', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Core.Async_WhileSliceHelper" />*/

/*<BeginType Name="Infragistics.Documents.Core.WorkItem" />*/

$.ig.util.defType('WorkItem', 'Object', {
	__exceptionInfo: null,
	__isComplete: false,
	__onlyRunOnNotFaulted: false,
	__next: null,
	__rootItem: null,
	__type: 0,
	init: function (type, previous, onlyRunOnNotFaulted) {
		$.ig.Object.prototype.init.call(this);
		this.__id = $.ig.WorkItem.prototype.__nextId++;
		this.__type = type;
		this.__onlyRunOnNotFaulted = onlyRunOnNotFaulted;
		if (previous != null) {
			previous.setNext(this);
		}
	},
	__id: 0,
	/*<BeginMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.WorkItem::Create(System.Action, Infragistics.Documents.Core.WorkItemContinuationType)" />*/
	create: function (action, type) {
		return new $.ig.WorkItem_WorkItemSync(action, type, null, true);
	}
	/*<EndMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.WorkItem::Create(System.Action, Infragistics.Documents.Core.WorkItemContinuationType)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.WorkItem::Create(System.Func, Infragistics.Documents.Core.WorkItemContinuationType)" />*/
	create1: function (asyncAction, type) {
		return new $.ig.WorkItem_WorkItemAsync(asyncAction, type, null, true);
	}
	/*<EndMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.WorkItem::Create(System.Func, Infragistics.Documents.Core.WorkItemContinuationType)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.WorkItem::Create`1(System.Func, Infragistics.Documents.Core.WorkItemContinuationType)" />*/
	create$1: function ($tResult, action, type) {
		$.ig.DocCoreUtils.prototype.debugAssert($.ig.WorkItem.prototype.$type.isAssignableFrom($tResult) == false, "We should have bound to the async overload of Create");
		return new $.ig.WorkItem_WorkItemSync$1($tResult, action, type, null, true);
	}
	/*<EndMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.WorkItem::Create`1(System.Func, Infragistics.Documents.Core.WorkItemContinuationType)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.WorkItem::Create`1(System.Func, Infragistics.Documents.Core.WorkItemContinuationType)" />*/
	create$11: function ($tResult, asyncAction, type) {
		return new $.ig.WorkItem_WorkItemAsync$1($tResult, asyncAction, type, null, true);
	}
	/*<EndMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.WorkItem::Create`1(System.Func, Infragistics.Documents.Core.WorkItemContinuationType)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.WorkItem::Execute(Infragistics.Documents.Core.WorkItemScheduler)" />*/
	execute: function (scheduler) {
		var $self = this;
		try {
			if (this.isComplete()) {
				return;
			}
			if (this.__exceptionInfo != null && this.__onlyRunOnNotFaulted) {
				if ((function () { var $ret = $self.tryHandleException($self.__exceptionInfo); $self.__exceptionInfo = $ret.p0; return $ret.ret; }())) {
					this.skipSubsequentCatchHandlers();
				}
				this.isComplete(true);
			} else if (this.executeCore(scheduler)) {
				this.isComplete(true);
			}
		}
		catch (e) {
			this.__exceptionInfo = new $.ig.WorkItem_ExceptionInfo(e);
			this.isComplete(true);
		}
		finally {
			if (this.isComplete()) {
				this.runNextWorkItem(scheduler);
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.WorkItem::Execute(Infragistics.Documents.Core.WorkItemScheduler)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Core.WorkItem::ExecuteCore(Infragistics.Documents.Core.WorkItemScheduler)" />*/
	executeCore: function (scheduler) {
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Core.WorkItem::ExecuteCore(Infragistics.Documents.Core.WorkItemScheduler)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Core.WorkItem::ExecuteCoreAsyncHelper(Infragistics.Documents.Core.WorkItem, Infragistics.Documents.Core.WorkItemScheduler)" />*/
	executeCoreAsyncHelper: function (workItem, scheduler) {
		if (workItem == null) {
			return true;
		}
		$.ig.DocCoreUtils.prototype.debugAssert(workItem.isComplete() == false, "A completed work item should not have been returned.");
		workItem.setNext(this);
		if (workItem.isWaitingOnExternalEvent() == false) {
			scheduler.queueWorkItem(workItem);
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Core.WorkItem::ExecuteCoreAsyncHelper(Infragistics.Documents.Core.WorkItem, Infragistics.Documents.Core.WorkItemScheduler)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.WorkItem::FromResult`1(Infragistics.Documents.Core.WorkItem.T)" />*/
	fromResult$1: function ($t, result) {
		return new $.ig.WorkItem_WorkItemSync$1($t, function () { return result; }, $.ig.WorkItemContinuationType.prototype.synchronous, null, true);
	}
	/*<EndMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.WorkItem::FromResult`1(Infragistics.Documents.Core.WorkItem.T)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.WorkItem::FromResultCompleted`1(Infragistics.Documents.Core.WorkItem.T)" />*/
	fromResultCompleted$1: function ($t, result) {
		var workItem = $.ig.WorkItem.prototype.fromResult$1($t, result);
		workItem.execute($.ig.WorkItemScheduler.prototype.synchronous());
		return workItem;
	}
	/*<EndMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.WorkItem::FromResultCompleted`1(Infragistics.Documents.Core.WorkItem.T)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.WorkItem::OnPreviousWorkCompleted(Infragistics.Documents.Core.WorkItem)" />*/
	onPreviousWorkCompleted: function (previous) {
		previous.setNext(null);
		$.ig.DocCoreUtils.prototype.debugAssert(previous.isComplete(), "The Previous work item should have completed its work");
		this.__exceptionInfo = previous.__exceptionInfo;
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.WorkItem::OnPreviousWorkCompleted(Infragistics.Documents.Core.WorkItem)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.WorkItem::RethrowIfExceptional()" />*/
	rethrowIfExceptional: function () {
		if (this.__exceptionInfo == null) {
			return;
		}
		this.__exceptionInfo.rethrow();
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.WorkItem::RethrowIfExceptional()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.WorkItem::RunNextWorkItem(Infragistics.Documents.Core.WorkItemScheduler)" />*/
	runNextWorkItem: function (scheduler) {
		var temp = this.__next;
		if (temp != null) {
			temp.onPreviousWorkCompleted(this);
			if (temp.isWaitingOnExternalEvent() == false) {
				scheduler.queueWorkItem(temp);
			}
		} else {
			this.rethrowIfExceptional();
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.WorkItem::RunNextWorkItem(Infragistics.Documents.Core.WorkItemScheduler)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.WorkItem::SetExceptionInfo(Infragistics.Documents.Core.WorkItem_ExceptionInfo)" />*/
	setExceptionInfo: function (exceptionInfo) {
		this.__exceptionInfo = exceptionInfo;
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.WorkItem::SetExceptionInfo(Infragistics.Documents.Core.WorkItem_ExceptionInfo)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.WorkItem::SetNext(Infragistics.Documents.Core.WorkItem)" />*/
	setNext: function (newValue) {
		if (this.__next == newValue) {
			return;
		}
		if (newValue == null) {
			this.__next.__rootItem = null;
		} else {
			if (this.__next != null) {
				throw new $.ig.InvalidOperationException(1, "This work item has other work already scheduled after it.");
			}
			$.ig.DocCoreUtils.prototype.debugAssert(this.isComplete() == false, "The previous work item  should not be complete already when assign. This work item will never execute.");
			newValue.__rootItem = this.rootItem();
		}
		this.__next = newValue;
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.WorkItem::SetNext(Infragistics.Documents.Core.WorkItem)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.WorkItem::SkipSubsequentCatchHandlers()" />*/
	skipSubsequentCatchHandlers: function () {
		var previous = this;
		var temp = this.__next;
		while (temp != null && temp.isSubsequentCatch()) {
			temp.onPreviousWorkCompleted(previous);
			temp.isComplete(true);
			previous = temp;
			temp = temp.__next;
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.WorkItem::SkipSubsequentCatchHandlers()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Core.WorkItem::TryHandleException(Infragistics.Documents.Core.WorkItem_ExceptionInfo)" />*/
	tryHandleException: function (info) {
		return {
			ret: false,
			p0: info
		};
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Core.WorkItem::TryHandleException(Infragistics.Documents.Core.WorkItem_ExceptionInfo)" />*/
	,
	/*<BeginProperty Name="System.Exception Infragistics.Documents.Core.WorkItem::Exception()" />*/
	exception: function () {
		if (this.__exceptionInfo == null) {
			return null;
		}
		return this.__exceptionInfo.exception();
	}
	/*<EndProperty Name="System.Exception Infragistics.Documents.Core.WorkItem::Exception()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.Documents.Core.WorkItem::IsSubsequentCatch()" />*/
	isSubsequentCatch: function () {
		return false;
	}
	/*<EndProperty Name="System.Boolean Infragistics.Documents.Core.WorkItem::IsSubsequentCatch()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.Documents.Core.WorkItem::IsComplete()" />*/
	isComplete: function (value) {
		if (arguments.length === 1) {
			this.__isComplete = value;
			return value;
		} else {
			return this.__isComplete;
		}
	}
	/*<EndProperty Name="System.Boolean Infragistics.Documents.Core.WorkItem::IsComplete()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.Documents.Core.WorkItem::IsWaitingOnExternalEvent()" />*/
	isWaitingOnExternalEvent: function () {
		return false;
	}
	/*<EndProperty Name="System.Boolean Infragistics.Documents.Core.WorkItem::IsWaitingOnExternalEvent()" />*/
	,
	/*<BeginProperty Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.WorkItem::RootItem()" />*/
	rootItem: function () {
		return this.__rootItem || this;
	}
	/*<EndProperty Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.WorkItem::RootItem()" />*/
	,
	/*<BeginProperty Name="Infragistics.Documents.Core.WorkItemContinuationType Infragistics.Documents.Core.WorkItem::Type()" />*/
	type: function () {
		return this.__type;
	}
	/*<EndProperty Name="Infragistics.Documents.Core.WorkItemContinuationType Infragistics.Documents.Core.WorkItem::Type()" />*/
	,
	$type: new $.ig.Type('WorkItem', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Core.WorkItem" />*/

/*<BeginType Name="Infragistics.Documents.Core.WorkItem_ExceptionInfo" />*/

$.ig.util.defType('WorkItem_ExceptionInfo', 'Object', {
	__exception: null,
	init: function (e) {
		$.ig.Object.prototype.init.call(this);
		this.__exception = e;
	},
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.WorkItem_ExceptionInfo::Rethrow()" />*/
	rethrow: function () {
		throw this.__exception;
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.WorkItem_ExceptionInfo::Rethrow()" />*/
	,
	/*<BeginProperty Name="System.Exception Infragistics.Documents.Core.WorkItem_ExceptionInfo::Exception()" />*/
	exception: function () {
		return this.__exception;
	}
	/*<EndProperty Name="System.Exception Infragistics.Documents.Core.WorkItem_ExceptionInfo::Exception()" />*/
	,
	$type: new $.ig.Type('WorkItem_ExceptionInfo', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Core.WorkItem_ExceptionInfo" />*/

/*<BeginType Name="Infragistics.Documents.Core.WorkItem_WorkItemSync" />*/

$.ig.util.defType('WorkItem_WorkItemSync', 'WorkItem', {
	__action: null,
	init: function (action, type, previous, onlyRunOnNotFaulted) {
		$.ig.WorkItem.prototype.init.call(this, type, previous, onlyRunOnNotFaulted);
		this.__action = action;
	},
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Core.WorkItem_WorkItemSync::ExecuteCore(Infragistics.Documents.Core.WorkItemScheduler)" />*/
	executeCore: function (scheduler) {
		this.__action();
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Core.WorkItem_WorkItemSync::ExecuteCore(Infragistics.Documents.Core.WorkItemScheduler)" />*/
	,
	$type: new $.ig.Type('WorkItem_WorkItemSync', $.ig.WorkItem.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Core.WorkItem_WorkItemSync" />*/

/*<BeginType Name="Infragistics.Documents.Core.WorkItem`1" />*/

$.ig.util.defType('WorkItem$1', 'WorkItem', {
	$tResult: null,
	init: function ($tResult, type, previous, onlyRunOnNotFaulted) {
		this.$tResult = $tResult;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$tResult);
		}
		$.ig.WorkItem.prototype.init.call(this, type, previous, onlyRunOnNotFaulted);
	},
	_resultInternal: null,
	/*<BeginProperty Name="Infragistics.Documents.Core.WorkItem.TResult Infragistics.Documents.Core.WorkItem`1::ResultInternal()" />*/
	resultInternal: function (value) {
		if (arguments.length === 1) {
			this._resultInternal = value;
			return value;
		} else {
			return this._resultInternal;
		}
	}
	/*<EndProperty Name="Infragistics.Documents.Core.WorkItem.TResult Infragistics.Documents.Core.WorkItem`1::ResultInternal()" />*/
	,
	$type: new $.ig.Type('WorkItem$1', $.ig.WorkItem.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Core.WorkItem`1" />*/

/*<BeginType Name="Infragistics.Documents.Core.WorkItem_WorkItemSync`1" />*/

$.ig.util.defType('WorkItem_WorkItemSync$1', 'WorkItem$1', {
	$tResult: null,
	__action: null,
	init: function ($tResult, action, type, previous, onlyRunOnNotFaulted) {
		this.$tResult = $tResult;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$tResult);
		}
		$.ig.WorkItem$1.prototype.init.call(this, this.$tResult, type, previous, onlyRunOnNotFaulted);
		this.__action = action;
	},
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Core.WorkItem_WorkItemSync`1::ExecuteCore(Infragistics.Documents.Core.WorkItemScheduler)" />*/
	executeCore: function (scheduler) {
		this.resultInternal(this.__action());
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Core.WorkItem_WorkItemSync`1::ExecuteCore(Infragistics.Documents.Core.WorkItemScheduler)" />*/
	,
	$type: new $.ig.Type('WorkItem_WorkItemSync$1', $.ig.WorkItem$1.prototype.$type.specialize(0))
}, true);

/*<EndType Name="Infragistics.Documents.Core.WorkItem_WorkItemSync`1" />*/

/*<BeginType Name="Infragistics.Documents.Core.WorkItem_WorkItemAsync" />*/

$.ig.util.defType('WorkItem_WorkItemAsync', 'WorkItem', {
	__preformedAction: false,
	__asyncAction: null,
	init: function (asyncAction, type, previous, onlyRunOnNotFaulted) {
		$.ig.WorkItem.prototype.init.call(this, type, previous, onlyRunOnNotFaulted);
		this.__asyncAction = asyncAction;
	},
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Core.WorkItem_WorkItemAsync::ExecuteCore(Infragistics.Documents.Core.WorkItemScheduler)" />*/
	executeCore: function (scheduler) {
		if (this.__preformedAction == false) {
			this.__preformedAction = true;
			return this.executeCoreAsyncHelper(this.__asyncAction(), scheduler);
		}
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Core.WorkItem_WorkItemAsync::ExecuteCore(Infragistics.Documents.Core.WorkItemScheduler)" />*/
	,
	$type: new $.ig.Type('WorkItem_WorkItemAsync', $.ig.WorkItem.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Core.WorkItem_WorkItemAsync" />*/

/*<BeginType Name="Infragistics.Documents.Core.WorkItem_WorkItemAsync`1" />*/

$.ig.util.defType('WorkItem_WorkItemAsync$1', 'WorkItem$1', {
	$tResult: null,
	__preformedAction: false,
	__asyncAction: null,
	init: function ($tResult, asyncAction, type, previous, onlyRunOnNotFaulted) {
		this.$tResult = $tResult;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$tResult);
		}
		$.ig.WorkItem$1.prototype.init.call(this, this.$tResult, type, previous, onlyRunOnNotFaulted);
		this.__asyncAction = asyncAction;
	},
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Core.WorkItem_WorkItemAsync`1::ExecuteCore(Infragistics.Documents.Core.WorkItemScheduler)" />*/
	executeCore: function (scheduler) {
		if (this.__preformedAction == false) {
			this.__preformedAction = true;
			var workItem = this.__asyncAction();
			this.pendingResultWorkItem(workItem);
			return this.executeCoreAsyncHelper(workItem, scheduler);
		}
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Core.WorkItem_WorkItemAsync`1::ExecuteCore(Infragistics.Documents.Core.WorkItemScheduler)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.WorkItem_WorkItemAsync`1::OnPreviousWorkCompleted(Infragistics.Documents.Core.WorkItem)" />*/
	onPreviousWorkCompleted: function (previous) {
		if (this.pendingResultWorkItem() != null) {
			$.ig.DocCoreUtils.prototype.debugAssert(this.pendingResultWorkItem().isComplete(), "The PendingResultWorkItem should have completed its work");
			if (this.pendingResultWorkItem().exception() == null) {
				this.resultInternal($.ig.WorkItemExtensions.prototype.getResult$1(this.$tResult, this.pendingResultWorkItem()));
			}
			this.pendingResultWorkItem(null);
		}
		$.ig.WorkItem$1.prototype.onPreviousWorkCompleted.call(this, previous);
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.WorkItem_WorkItemAsync`1::OnPreviousWorkCompleted(Infragistics.Documents.Core.WorkItem)" />*/
	,
	_pendingResultWorkItem: null,
	/*<BeginProperty Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.WorkItem_WorkItemAsync`1::PendingResultWorkItem()" />*/
	pendingResultWorkItem: function (value) {
		if (arguments.length === 1) {
			this._pendingResultWorkItem = value;
			return value;
		} else {
			return this._pendingResultWorkItem;
		}
	}
	/*<EndProperty Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.WorkItem_WorkItemAsync`1::PendingResultWorkItem()" />*/
	,
	$type: new $.ig.Type('WorkItem_WorkItemAsync$1', $.ig.WorkItem$1.prototype.$type.specialize(0))
}, true);

/*<EndType Name="Infragistics.Documents.Core.WorkItem_WorkItemAsync`1" />*/

/*<BeginType Name="Infragistics.Documents.Core.WorkItem_WorkItemCatch`1" />*/

$.ig.util.defType('WorkItem_WorkItemCatch$1', 'WorkItem', {
	$tException: null,
	__action: null,
	__isSubsequentCatch: false,
	init: function ($tException, action, previous, isSubsequentCatch) {
		this.$tException = $tException;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$tException);
		}
		$.ig.WorkItem.prototype.init.call(this, $.ig.WorkItemContinuationType.prototype.synchronous, previous, true);
		this.__action = action;
		this.__isSubsequentCatch = isSubsequentCatch;
	},
	/*<BeginProperty Name="System.Boolean Infragistics.Documents.Core.WorkItem_WorkItemCatch`1::IsSubsequentCatch()" />*/
	isSubsequentCatch: function () {
		return this.__isSubsequentCatch;
	}
	/*<EndProperty Name="System.Boolean Infragistics.Documents.Core.WorkItem_WorkItemCatch`1::IsSubsequentCatch()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Core.WorkItem_WorkItemCatch`1::ExecuteCore(Infragistics.Documents.Core.WorkItemScheduler)" />*/
	executeCore: function (scheduler) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Core.WorkItem_WorkItemCatch`1::ExecuteCore(Infragistics.Documents.Core.WorkItemScheduler)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Core.WorkItem_WorkItemCatch`1::TryHandleException(Infragistics.Documents.Core.WorkItem_ExceptionInfo)" />*/
	tryHandleException: function (info) {
		var eTyped = $.ig.util.cast(this.$tException, info.exception());
		if (eTyped != null) {
			try {
				this.__action(eTyped);
				info = null;
			}
			catch (eThrown) {
				info = new $.ig.WorkItem_ExceptionInfo(eThrown);
			}
			return {
				ret: true,
				p0: info
			};
		}
		return {
			ret: false,
			p0: info
		};
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Core.WorkItem_WorkItemCatch`1::TryHandleException(Infragistics.Documents.Core.WorkItem_ExceptionInfo)" />*/
	,
	$type: new $.ig.Type('WorkItem_WorkItemCatch$1', $.ig.WorkItem.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Core.WorkItem_WorkItemCatch`1" />*/

/*<BeginType Name="Infragistics.Documents.Core.ExternalEventWorkItem" />*/

$.ig.util.defType('ExternalEventWorkItem', 'WorkItem', {
	__eventOccurred: false,
	__scheduler: null,
	init: function () {
		$.ig.WorkItem.prototype.init.call(this, $.ig.WorkItemContinuationType.prototype.asynchronous, null, false);
	},
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Core.ExternalEventWorkItem::ExecuteCore(Infragistics.Documents.Core.WorkItemScheduler)" />*/
	executeCore: function (scheduler) {
		if (this.__eventOccurred) {
			return true;
		}
		this.__scheduler = scheduler;
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Core.ExternalEventWorkItem::ExecuteCore(Infragistics.Documents.Core.WorkItemScheduler)" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.Documents.Core.ExternalEventWorkItem::IsWaitingOnExternalEvent()" />*/
	isWaitingOnExternalEvent: function () {
		return this.__eventOccurred == false;
	}
	/*<EndProperty Name="System.Boolean Infragistics.Documents.Core.ExternalEventWorkItem::IsWaitingOnExternalEvent()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.ExternalEventWorkItem::Signal(System.Exception)" />*/
	signal: function (exception) {
		$.ig.DocCoreUtils.prototype.debugAssert(this.__eventOccurred == false, "External event signaled twice.");
		if (exception != null) {
			this.setExceptionInfo(new $.ig.WorkItem_ExceptionInfo(exception));
		}
		this.__eventOccurred = true;
		if (this.__scheduler != null) {
			this.__scheduler.queueWorkItem(this);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.ExternalEventWorkItem::Signal(System.Exception)" />*/
	,
	$type: new $.ig.Type('ExternalEventWorkItem', $.ig.WorkItem.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Core.ExternalEventWorkItem" />*/

/*<BeginType Name="Infragistics.Documents.Core.ExternalEventWorkItem`1" />*/

$.ig.util.defType('ExternalEventWorkItem$1', 'WorkItem$1', {
	$t: null,
	__eventOccurred: false,
	__scheduler: null,
	init: function ($t) {
		this.$t = $t;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$t);
		}
		$.ig.WorkItem$1.prototype.init.call(this, this.$t, $.ig.WorkItemContinuationType.prototype.asynchronous, null, false);
	},
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Core.ExternalEventWorkItem`1::ExecuteCore(Infragistics.Documents.Core.WorkItemScheduler)" />*/
	executeCore: function (scheduler) {
		if (this.__eventOccurred) {
			return true;
		}
		this.__scheduler = scheduler;
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Core.ExternalEventWorkItem`1::ExecuteCore(Infragistics.Documents.Core.WorkItemScheduler)" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.Documents.Core.ExternalEventWorkItem`1::IsWaitingOnExternalEvent()" />*/
	isWaitingOnExternalEvent: function () {
		return this.__eventOccurred == false;
	}
	/*<EndProperty Name="System.Boolean Infragistics.Documents.Core.ExternalEventWorkItem`1::IsWaitingOnExternalEvent()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.ExternalEventWorkItem`1::Signal(Infragistics.Documents.Core.ExternalEventWorkItem.T, System.Exception)" />*/
	signal: function (result, exception) {
		$.ig.DocCoreUtils.prototype.debugAssert(this.__eventOccurred == false, "External event signaled twice.");
		this.resultInternal(result);
		if (exception != null) {
			this.setExceptionInfo(new $.ig.WorkItem_ExceptionInfo(exception));
		}
		this.__eventOccurred = true;
		if (this.__scheduler != null) {
			this.__scheduler.queueWorkItem(this);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.ExternalEventWorkItem`1::Signal(Infragistics.Documents.Core.ExternalEventWorkItem.T, System.Exception)" />*/
	,
	$type: new $.ig.Type('ExternalEventWorkItem$1', $.ig.WorkItem$1.prototype.$type.specialize(0))
}, true);

/*<EndType Name="Infragistics.Documents.Core.ExternalEventWorkItem`1" />*/

/*<BeginType Name="Infragistics.Documents.Core.WorkItemScheduler" />*/

$.ig.util.defType('WorkItemScheduler', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.WorkItemScheduler::Execute(Infragistics.Documents.Core.WorkItem)" />*/
	execute: function (workItem) {
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.WorkItemScheduler::Execute(Infragistics.Documents.Core.WorkItem)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.WorkItemScheduler::QueueWorkItem(Infragistics.Documents.Core.WorkItem)" />*/
	queueWorkItem: function (workItem) {
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.WorkItemScheduler::QueueWorkItem(Infragistics.Documents.Core.WorkItem)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Core.WorkItemScheduler Infragistics.Documents.Core.WorkItemScheduler::Default()" />*/
	$default: function () {
		return $.ig.WorkItemScheduler.prototype.timeSliced();
	}
	/*<EndMethod Name="Infragistics.Documents.Core.WorkItemScheduler Infragistics.Documents.Core.WorkItemScheduler::Default()" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Core.WorkItemScheduler Infragistics.Documents.Core.WorkItemScheduler::Synchronous()" />*/
	synchronous: function () {
		return new $.ig.WorkItemScheduler_SynchronousImpl();
	}
	/*<EndMethod Name="Infragistics.Documents.Core.WorkItemScheduler Infragistics.Documents.Core.WorkItemScheduler::Synchronous()" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Core.WorkItemScheduler Infragistics.Documents.Core.WorkItemScheduler::TimeSliced()" />*/
	timeSliced: function () {
		return new $.ig.WorkItemScheduler_TimeSlicedImpl();
	}
	/*<EndMethod Name="Infragistics.Documents.Core.WorkItemScheduler Infragistics.Documents.Core.WorkItemScheduler::TimeSliced()" />*/
	,
	$type: new $.ig.Type('WorkItemScheduler', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Core.WorkItemScheduler" />*/

/*<BeginType Name="Infragistics.Documents.Core.WorkItemScheduler_SynchronousImpl" />*/

$.ig.util.defType('WorkItemScheduler_SynchronousImpl', 'WorkItemScheduler', {
	__workItems: null,
	init: function () {
		$.ig.WorkItemScheduler.prototype.init.call(this);
		this.__workItems = new $.ig.Queue$1($.ig.WorkItem.prototype.$type);
	},
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.WorkItemScheduler_SynchronousImpl::Execute(Infragistics.Documents.Core.WorkItem)" />*/
	execute: function (workItem) {
		if (workItem == null) {
			return;
		}
		this.queueWorkItem(workItem);
		while (this.__workItems.count() != 0) {
			var current = this.__workItems.dequeue();
			if (current != null) {
				current.execute(this);
			}
		}
		$.ig.DocCoreUtils.prototype.debugAssert(workItem.isComplete(), "The work item should be complete at this point.");
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.WorkItemScheduler_SynchronousImpl::Execute(Infragistics.Documents.Core.WorkItem)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.WorkItemScheduler_SynchronousImpl::QueueWorkItem(Infragistics.Documents.Core.WorkItem)" />*/
	queueWorkItem: function (workItem) {
		$.ig.DocCoreUtils.prototype.debugAssert(workItem.isWaitingOnExternalEvent() == false, "External event work items are not support on a synchronous scheduler.");
		this.__workItems.enqueue(workItem.rootItem());
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.WorkItemScheduler_SynchronousImpl::QueueWorkItem(Infragistics.Documents.Core.WorkItem)" />*/
	,
	$type: new $.ig.Type('WorkItemScheduler_SynchronousImpl', $.ig.WorkItemScheduler.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Core.WorkItemScheduler_SynchronousImpl" />*/

/*<BeginType Name="Infragistics.Documents.Core.WorkItemScheduler_TimeSlicedImpl" />*/

$.ig.util.defType('WorkItemScheduler_TimeSlicedImpl', 'WorkItemScheduler', {
	__workItems: null,
	init: function () {
		$.ig.WorkItemScheduler.prototype.init.call(this);
		this.__workItems = new $.ig.Queue$1($.ig.WorkItem.prototype.$type);
	},
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.WorkItemScheduler_TimeSlicedImpl::Execute(Infragistics.Documents.Core.WorkItem)" />*/
	execute: function (workItem) {
		if (workItem == null) {
			return;
		}
		this.__workItems.enqueue(workItem.rootItem());
		while (this.__workItems.count() != 0) {
			var current = this.__workItems.dequeue();
			if (current != null) {
				current.execute(this);
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.WorkItemScheduler_TimeSlicedImpl::Execute(Infragistics.Documents.Core.WorkItem)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.WorkItemScheduler_TimeSlicedImpl::QueueWorkItem(Infragistics.Documents.Core.WorkItem)" />*/
	queueWorkItem: function (workItem) {
		var $self = this;
		if (workItem.type() == $.ig.WorkItemContinuationType.prototype.asynchronous) {
			setTimeout(function () { $self.execute(workItem); }, 1);
		} else {
			this.__workItems.enqueue(workItem.rootItem());
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.WorkItemScheduler_TimeSlicedImpl::QueueWorkItem(Infragistics.Documents.Core.WorkItem)" />*/
	,
	$type: new $.ig.Type('WorkItemScheduler_TimeSlicedImpl', $.ig.WorkItemScheduler.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Core.WorkItemScheduler_TimeSlicedImpl" />*/

/*<BeginType Name="Infragistics.Documents.Core.WorkItemExtensions" />*/

$.ig.util.defType('WorkItemExtensions', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.WorkItemExtensions::ExecuteSynchronously(Infragistics.Documents.Core.WorkItem)" />*/
	executeSynchronously: function ($this) {
		$.ig.WorkItemScheduler.prototype.synchronous().execute($this);
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.WorkItemExtensions::ExecuteSynchronously(Infragistics.Documents.Core.WorkItem)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.WorkItemExtensions::ExecuteWithDefaultScheduler(Infragistics.Documents.Core.WorkItem)" />*/
	executeWithDefaultScheduler: function ($this) {
		$.ig.WorkItemScheduler.prototype.$default().execute($.ig.WorkItemExtensions.prototype.then1($this, function (t) { t.rethrowIfExceptional(); }, $.ig.WorkItemContinuationType.prototype.synchronous));
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.WorkItemExtensions::ExecuteWithDefaultScheduler(Infragistics.Documents.Core.WorkItem)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Core.WorkItemExtensions.TResult Infragistics.Documents.Core.WorkItemExtensions::GetResult`1(Infragistics.Documents.Core.WorkItem)" />*/
	getResult$1: function ($tResult, $this) {
		if ($this == null) {
			return $.ig.util.getDefaultValue($tResult);
		}
		if ($this.isComplete() == false) {
			$.ig.WorkItemScheduler.prototype.synchronous().execute($this);
			$.ig.DocCoreUtils.prototype.debugAssert($this.isComplete(), "The work should be finished by now");
		}
		$this.rethrowIfExceptional();
		return $this.resultInternal();
	}
	/*<EndMethod Name="Infragistics.Documents.Core.WorkItemExtensions.TResult Infragistics.Documents.Core.WorkItemExtensions::GetResult`1(Infragistics.Documents.Core.WorkItem)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.WorkItemExtensions::Then(Infragistics.Documents.Core.WorkItem, System.Action, Infragistics.Documents.Core.WorkItemContinuationType)" />*/
	then: function ($this, action, type) {
		return new $.ig.WorkItem_WorkItemSync(action, type, $this, true);
	}
	/*<EndMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.WorkItemExtensions::Then(Infragistics.Documents.Core.WorkItem, System.Action, Infragistics.Documents.Core.WorkItemContinuationType)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.WorkItemExtensions::Then(Infragistics.Documents.Core.WorkItem, System.Action, Infragistics.Documents.Core.WorkItemContinuationType)" />*/
	then1: function ($this, action, type) {
		return new $.ig.WorkItem_WorkItemSync(function () { action($this || $.ig.WorkItemExtensions_WorkItemCompleted.prototype.instance); }, type, $this, false);
	}
	/*<EndMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.WorkItemExtensions::Then(Infragistics.Documents.Core.WorkItem, System.Action, Infragistics.Documents.Core.WorkItemContinuationType)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.WorkItemExtensions::Then`1(Infragistics.Documents.Core.WorkItem, System.Action, Infragistics.Documents.Core.WorkItemContinuationType)" />*/
	then$1: function ($t, $this, action, type) {
		return new $.ig.WorkItem_WorkItemSync(function () { action($this || $.ig.WorkItemExtensions_WorkItemCompleted$1.prototype.$type.specialize($t).getStaticFields().instance); }, type, $this, false);
	}
	/*<EndMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.WorkItemExtensions::Then`1(Infragistics.Documents.Core.WorkItem, System.Action, Infragistics.Documents.Core.WorkItemContinuationType)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.WorkItemExtensions::Then(Infragistics.Documents.Core.WorkItem, System.Func, Infragistics.Documents.Core.WorkItemContinuationType)" />*/
	then2: function ($this, asyncAction, type) {
		return new $.ig.WorkItem_WorkItemAsync(asyncAction, type, $this, true);
	}
	/*<EndMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.WorkItemExtensions::Then(Infragistics.Documents.Core.WorkItem, System.Func, Infragistics.Documents.Core.WorkItemContinuationType)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.WorkItemExtensions::Then(Infragistics.Documents.Core.WorkItem, System.Func, Infragistics.Documents.Core.WorkItemContinuationType)" />*/
	then3: function ($this, asyncAction, type) {
		return new $.ig.WorkItem_WorkItemAsync(function () { return asyncAction($this || $.ig.WorkItemExtensions_WorkItemCompleted.prototype.instance); }, type, $this, false);
	}
	/*<EndMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.WorkItemExtensions::Then(Infragistics.Documents.Core.WorkItem, System.Func, Infragistics.Documents.Core.WorkItemContinuationType)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.WorkItemExtensions::Then`1(Infragistics.Documents.Core.WorkItem, System.Func, Infragistics.Documents.Core.WorkItemContinuationType)" />*/
	then$11: function ($t, $this, asyncAction, type) {
		return new $.ig.WorkItem_WorkItemAsync(function () { return asyncAction($this || $.ig.WorkItemExtensions_WorkItemCompleted$1.prototype.$type.specialize($t).getStaticFields().instance); }, type, $this, false);
	}
	/*<EndMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.WorkItemExtensions::Then`1(Infragistics.Documents.Core.WorkItem, System.Func, Infragistics.Documents.Core.WorkItemContinuationType)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.WorkItemExtensions::Then`1(Infragistics.Documents.Core.WorkItem, System.Func, Infragistics.Documents.Core.WorkItemContinuationType)" />*/
	then$12: function ($tResult, $this, action, type) {
		$.ig.DocCoreUtils.prototype.debugAssert($.ig.WorkItem.prototype.$type.isAssignableFrom($tResult) == false, "We should have bound to the async overload of Then");
		return new $.ig.WorkItem_WorkItemSync$1($tResult, action, type, $this, true);
	}
	/*<EndMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.WorkItemExtensions::Then`1(Infragistics.Documents.Core.WorkItem, System.Func, Infragistics.Documents.Core.WorkItemContinuationType)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.WorkItemExtensions::Then`1(Infragistics.Documents.Core.WorkItem, System.Func, Infragistics.Documents.Core.WorkItemContinuationType)" />*/
	then$13: function ($tResult, $this, action, type) {
		$.ig.DocCoreUtils.prototype.debugAssert($.ig.WorkItem.prototype.$type.isAssignableFrom($tResult) == false, "We should have bound to the async overload of Then");
		return new $.ig.WorkItem_WorkItemSync$1($tResult, function () { return action($this || $.ig.WorkItemExtensions_WorkItemCompleted.prototype.instance); }, type, $this, false);
	}
	/*<EndMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.WorkItemExtensions::Then`1(Infragistics.Documents.Core.WorkItem, System.Func, Infragistics.Documents.Core.WorkItemContinuationType)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.WorkItemExtensions::Then`2(Infragistics.Documents.Core.WorkItem, System.Func, Infragistics.Documents.Core.WorkItemContinuationType)" />*/
	then$2: function ($t, $tResult, $this, action, type) {
		$.ig.DocCoreUtils.prototype.debugAssert($.ig.WorkItem.prototype.$type.isAssignableFrom($tResult) == false, "We should have bound to the async overload of Then");
		return new $.ig.WorkItem_WorkItemSync$1($tResult, function () { return action($this || $.ig.WorkItemExtensions_WorkItemCompleted$1.prototype.$type.specialize($t).getStaticFields().instance); }, type, $this, false);
	}
	/*<EndMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.WorkItemExtensions::Then`2(Infragistics.Documents.Core.WorkItem, System.Func, Infragistics.Documents.Core.WorkItemContinuationType)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.WorkItemExtensions::Then`1(Infragistics.Documents.Core.WorkItem, System.Func, Infragistics.Documents.Core.WorkItemContinuationType)" />*/
	then$14: function ($tResult, $this, asyncAction, type) {
		return new $.ig.WorkItem_WorkItemAsync$1($tResult, asyncAction, type, $this, true);
	}
	/*<EndMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.WorkItemExtensions::Then`1(Infragistics.Documents.Core.WorkItem, System.Func, Infragistics.Documents.Core.WorkItemContinuationType)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.WorkItemExtensions::Then`1(Infragistics.Documents.Core.WorkItem, System.Func, Infragistics.Documents.Core.WorkItemContinuationType)" />*/
	then$15: function ($tResult, $this, asyncAction, type) {
		return new $.ig.WorkItem_WorkItemAsync$1($tResult, function () { return asyncAction($this || $.ig.WorkItemExtensions_WorkItemCompleted.prototype.instance); }, type, $this, false);
	}
	/*<EndMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.WorkItemExtensions::Then`1(Infragistics.Documents.Core.WorkItem, System.Func, Infragistics.Documents.Core.WorkItemContinuationType)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.WorkItemExtensions::Then`2(Infragistics.Documents.Core.WorkItem, System.Func, Infragistics.Documents.Core.WorkItemContinuationType)" />*/
	then$21: function ($t, $tResult, $this, asyncAction, type) {
		return new $.ig.WorkItem_WorkItemAsync$1($tResult, function () { return asyncAction($this || $.ig.WorkItemExtensions_WorkItemCompleted$1.prototype.$type.specialize($t).getStaticFields().instance); }, type, $this, false);
	}
	/*<EndMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.WorkItemExtensions::Then`2(Infragistics.Documents.Core.WorkItem, System.Func, Infragistics.Documents.Core.WorkItemContinuationType)" />*/
	,
	$type: new $.ig.Type('WorkItemExtensions', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Core.WorkItemExtensions" />*/

/*<BeginType Name="Infragistics.Documents.Core.WorkItemExtensions_WorkItemCompleted" />*/

$.ig.util.defType('WorkItemExtensions_WorkItemCompleted', 'WorkItem', {
	init: function () {
		$.ig.WorkItem.prototype.init.call(this, $.ig.WorkItemContinuationType.prototype.synchronous, null, true);
		this.isComplete(true);
	},
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Core.WorkItemExtensions_WorkItemCompleted::ExecuteCore(Infragistics.Documents.Core.WorkItemScheduler)" />*/
	executeCore: function (scheduler) {
		$.ig.DocCoreUtils.prototype.debugFail("We should not be executing the WorkItemCompleted.");
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Core.WorkItemExtensions_WorkItemCompleted::ExecuteCore(Infragistics.Documents.Core.WorkItemScheduler)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.WorkItemExtensions_WorkItemCompleted::OnPreviousWorkCompleted(Infragistics.Documents.Core.WorkItem)" />*/
	onPreviousWorkCompleted: function (previous) {
		$.ig.DocCoreUtils.prototype.debugFail("The WorkItemCompleted should not have a previous work item.");
		$.ig.WorkItem.prototype.onPreviousWorkCompleted.call(this, previous);
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.WorkItemExtensions_WorkItemCompleted::OnPreviousWorkCompleted(Infragistics.Documents.Core.WorkItem)" />*/
	,
	$type: new $.ig.Type('WorkItemExtensions_WorkItemCompleted', $.ig.WorkItem.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Core.WorkItemExtensions_WorkItemCompleted" />*/

/*<BeginType Name="Infragistics.Documents.Core.WorkItemExtensions_WorkItemCompleted`1" />*/

$.ig.util.defType('WorkItemExtensions_WorkItemCompleted$1', 'WorkItem$1', {
	$t: null,
	init: function ($t) {
		this.$t = $t;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$t);
		}
		$.ig.WorkItem$1.prototype.init.call(this, this.$t, $.ig.WorkItemContinuationType.prototype.synchronous, null, true);
		this.isComplete(true);
	},
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Core.WorkItemExtensions_WorkItemCompleted`1::ExecuteCore(Infragistics.Documents.Core.WorkItemScheduler)" />*/
	executeCore: function (scheduler) {
		$.ig.DocCoreUtils.prototype.debugFail("We should not be executing the WorkItemCompleted.");
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Core.WorkItemExtensions_WorkItemCompleted`1::ExecuteCore(Infragistics.Documents.Core.WorkItemScheduler)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.WorkItemExtensions_WorkItemCompleted`1::OnPreviousWorkCompleted(Infragistics.Documents.Core.WorkItem)" />*/
	onPreviousWorkCompleted: function (previous) {
		$.ig.DocCoreUtils.prototype.debugFail("The WorkItemCompleted should not have a previous work item.");
		$.ig.WorkItem$1.prototype.onPreviousWorkCompleted.call(this, previous);
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.WorkItemExtensions_WorkItemCompleted`1::OnPreviousWorkCompleted(Infragistics.Documents.Core.WorkItem)" />*/
	,
	$type: new $.ig.Type('WorkItemExtensions_WorkItemCompleted$1', $.ig.WorkItem$1.prototype.$type.specialize(0), null, function () {
		this.instance = new $.ig.WorkItemExtensions_WorkItemCompleted$1(arguments[0]);
	})
}, true);

/*<EndType Name="Infragistics.Documents.Core.WorkItemExtensions_WorkItemCompleted`1" />*/

/*<BeginType Name="Infragistics.Documents.Core.BinaryData" />*/

$.ig.util.defType('BinaryData', 'Object', {
	_buffer: null,
	init: function (buffer) {
		$.ig.Object.prototype.init.call(this);
		this._buffer = buffer;
	},
	$type: new $.ig.Type('BinaryData', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Core.BinaryData" />*/

/*<BeginType Name="Infragistics.Documents.Core.ContextStack" />*/

$.ig.util.defType('ContextStack', 'Object', {
	_contexts: null,
	__shouldIgnoreChildren: false,
	init: function () {
		$.ig.Object.prototype.init.call(this);
		this._contexts = new $.ig.List$1($.ig.Object.prototype.$type, 0);
	},
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.ContextStack::ClearToCount(System.Int32)" />*/
	clearToCount: function (newCount) {
		while (this.count() > newCount) {
			this.pop();
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.ContextStack::ClearToCount(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.ContextStack::ClearToCountOrCurrent(System.Int32, System.Object)" />*/
	clearToCountOrCurrent: function (newCount, newCurrent) {
		while (this.count() > newCount && this.current() != newCurrent) {
			this.pop();
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.ContextStack::ClearToCountOrCurrent(System.Int32, System.Object)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Core.ContextStack.T Infragistics.Documents.Core.ContextStack::Get`1()" />*/
	get$1: function ($t) {
		var type = $t;
		var allowNulls = type == $.ig.Object.prototype.$type;
		for (var i = this._contexts.count() - 1; i >= 0; i--) {
			var context = this._contexts.__inner[i];
			if (context == null) {
				if (allowNulls) {
					return $.ig.util.getDefaultValue($t);
				}
				continue;
			}
			if (type.isInstanceOfType(context)) {
				return $.ig.util.castObjTo$t($t, context);
			}
		}
		return $.ig.util.getDefaultValue($t);
	}
	/*<EndMethod Name="Infragistics.Documents.Core.ContextStack.T Infragistics.Documents.Core.ContextStack::Get`1()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.ContextStack::ReplaceItem(System.Object, System.Object)" />*/
	replaceItem: function (instance, replacement) {
		var index = this._contexts.lastIndexOf(instance);
		if (index < 0) {
			$.ig.DocCoreUtils.prototype.debugFail("Cannot find the item to replace.");
			return;
		}
		this._contexts.__inner[index] = replacement;
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.ContextStack::ReplaceItem(System.Object, System.Object)" />*/
	,
	/*<BeginMethod Name="System.Object Infragistics.Documents.Core.ContextStack::Pop()" />*/
	pop: function () {
		var context = this.current();
		this._contexts.removeAt(this._contexts.count() - 1);
		if (this.__shouldIgnoreChildren && $.ig.Object.prototype.referenceEquals(context, $.ig.IgnoreChildrenMarker.prototype.instance)) {
			this.__shouldIgnoreChildren = this.get$1($.ig.IgnoreChildrenMarker.prototype.$type) != null;
		}
		return context;
	}
	/*<EndMethod Name="System.Object Infragistics.Documents.Core.ContextStack::Pop()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.ContextStack::Push(System.Object)" />*/
	push: function (context) {
		this._contexts.add1(context);
		if (this.__shouldIgnoreChildren == false && $.ig.Object.prototype.referenceEquals(context, $.ig.IgnoreChildrenMarker.prototype.instance)) {
			this.__shouldIgnoreChildren = true;
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.ContextStack::Push(System.Object)" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Core.ContextStack::Count()" />*/
	count: function () {
		return this._contexts.count();
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Core.ContextStack::Count()" />*/
	,
	/*<BeginProperty Name="System.Object Infragistics.Documents.Core.ContextStack::Current()" />*/
	current: function () {
		if (this._contexts.count() == 0) {
			return null;
		}
		return this._contexts.__inner[this._contexts.count() - 1];
	}
	/*<EndProperty Name="System.Object Infragistics.Documents.Core.ContextStack::Current()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.Documents.Core.ContextStack::ShouldIgnoreChildren()" />*/
	shouldIgnoreChildren: function () {
		return this.__shouldIgnoreChildren;
	}
	/*<EndProperty Name="System.Boolean Infragistics.Documents.Core.ContextStack::ShouldIgnoreChildren()" />*/
	,
	$type: new $.ig.Type('ContextStack', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Core.ContextStack" />*/

/*<BeginType Name="Infragistics.Documents.Core.ImageData" />*/

$.ig.util.defType('ImageData', 'Object', {
	__data: null,
	__format: null,
	init: function (initNumber, format, data) {
		if (initNumber > 0) {
			switch (initNumber) {
				case 1:
					this.init1.apply(this, arguments);
					break;
			}
			return;
		}
		$.ig.Object.prototype.init.call(this);
		this.__data = data;
		this.__format = format;
	},
	init1: function (initNumber, format, stream) {
		$.ig.Object.prototype.init.call(this);
		this.__format = format;
		this.__data = $.ig.DocCoreUtils.prototype.streamToArray(stream);
	},
	/*<BeginProperty Name=" Infragistics.Documents.Core.ImageData::Data()" />*/
	data: function () {
		return this.__data;
	}
	/*<EndProperty Name=" Infragistics.Documents.Core.ImageData::Data()" />*/
	,
	/*<BeginProperty Name="Infragistics.Imaging.ImageFormat Infragistics.Documents.Core.ImageData::Format()" />*/
	format: function () {
		return this.__format;
	}
	/*<EndProperty Name="Infragistics.Imaging.ImageFormat Infragistics.Documents.Core.ImageData::Format()" />*/
	,
	_tag: null,
	/*<BeginProperty Name="System.Object Infragistics.Documents.Core.ImageData::Tag()" />*/
	tag: function (value) {
		if (arguments.length === 1) {
			this._tag = value;
			return value;
		} else {
			return this._tag;
		}
	}
	/*<EndProperty Name="System.Object Infragistics.Documents.Core.ImageData::Tag()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.ImageData::Save(System.IO.Stream)" />*/
	save: function (stream) {
		stream.write(this.__data, 0, this.__data.length);
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.ImageData::Save(System.IO.Stream)" />*/
	,
	$type: new $.ig.Type('ImageData', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Core.ImageData" />*/

/*<BeginType Name="Infragistics.Documents.Core.RoundTripControlData" />*/

$.ig.util.defType('RoundTripControlData', 'Object', {
	_relationships: null,
	_xmlData: null,
	_contentType: null,
	_hasBeenConsumed: false,
	_partPath: null,
	init: function (contentType, partPath, xmlData) {
		this._relationships = new $.ig.List$1($.ig.RoundTripPartData.prototype.$type, 0);
		$.ig.Object.prototype.init.call(this);
		this._contentType = contentType;
		this._partPath = partPath;
		this._xmlData = xmlData;
	},
	$type: new $.ig.Type('RoundTripControlData', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Core.RoundTripControlData" />*/

/*<BeginType Name="Infragistics.Documents.Core.RoundTripPartData" />*/

$.ig.util.defType('RoundTripPartData', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	_contentType: null,
	_data: null,
	_partPath: null,
	_relationshipId: null,
	_relationshipType: null,
	$type: new $.ig.Type('RoundTripPartData', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Core.RoundTripPartData" />*/

/*<BeginType Name="Infragistics.Documents.Core.SeekableBufferedStream" />*/

$.ig.util.defType('SeekableBufferedStream', 'Stream', {
	__baseStream: null,
	__length: 0,
	__position: 0,
	__buffer: null,
	__bufferLength: 0,
	__bufferPosition: 0,
	__bytesWrittenToBuffer: false,
	__baseStreamPositionInBuffer: 0,
	init: function (baseStream) {
		$.ig.Stream.prototype.init.call(this);
		this.__baseStream = baseStream;
		this.__buffer = new Array($.ig.SeekableBufferedStream.prototype.__maxBufferLength);
		this.__length = baseStream.length();
		this.__position = baseStream.position();
	},
	/*<BeginProperty Name="System.Boolean Infragistics.Documents.Core.SeekableBufferedStream::CanRead()" />*/
	canRead: function () {
		return this.__baseStream.canRead();
	}
	/*<EndProperty Name="System.Boolean Infragistics.Documents.Core.SeekableBufferedStream::CanRead()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.Documents.Core.SeekableBufferedStream::CanSeek()" />*/
	canSeek: function () {
		return this.__baseStream.canSeek();
	}
	/*<EndProperty Name="System.Boolean Infragistics.Documents.Core.SeekableBufferedStream::CanSeek()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.Documents.Core.SeekableBufferedStream::CanWrite()" />*/
	canWrite: function () {
		return this.__baseStream.canWrite();
	}
	/*<EndProperty Name="System.Boolean Infragistics.Documents.Core.SeekableBufferedStream::CanWrite()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.SeekableBufferedStream::Dispose(System.Boolean)" />*/
	disposeCore: function (disposing) {
		try {
			if (disposing) {
				this.flush();
			}
		}
		finally {
			$.ig.Stream.prototype.disposeCore.call(this, disposing);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.SeekableBufferedStream::Dispose(System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.SeekableBufferedStream::Flush()" />*/
	flush: function () {
		if (this.__bytesWrittenToBuffer) {
			this.__bytesWrittenToBuffer = false;
			if (this.__baseStreamPositionInBuffer > 0) {
				this.__baseStream.seek(-this.__baseStreamPositionInBuffer, $.ig.SeekOrigin.prototype.current);
			}
			this.__baseStream.write(this.__buffer, 0, this.__bufferLength);
		}
		this.__baseStream.position(this.__position);
		this.__bufferPosition = 0;
		this.__bufferLength = 0;
		this.__baseStreamPositionInBuffer = 0;
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.SeekableBufferedStream::Flush()" />*/
	,
	/*<BeginProperty Name="System.Int64 Infragistics.Documents.Core.SeekableBufferedStream::Length()" />*/
	length: function () {
		return this.__length;
	}
	/*<EndProperty Name="System.Int64 Infragistics.Documents.Core.SeekableBufferedStream::Length()" />*/
	,
	/*<BeginProperty Name="System.Int64 Infragistics.Documents.Core.SeekableBufferedStream::Position()" />*/
	position: function (value) {
		if (arguments.length === 1) {
			if (this.__position != value) {
				this.seek(value - this.__position, $.ig.SeekOrigin.prototype.current);
			}
			return value;
		} else {
			return this.__position;
		}
	}
	/*<EndProperty Name="System.Int64 Infragistics.Documents.Core.SeekableBufferedStream::Position()" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.Documents.Core.SeekableBufferedStream::Read(, System.Int32, System.Int32)" />*/
	read: function (array, offset, count) {
		if (count == 0) {
			return 0;
		}
		var bytesNeededForBuffer = count - (this.__bufferLength - this.__bufferPosition);
		if (bytesNeededForBuffer > 0) {
			if (this.__bufferLength + bytesNeededForBuffer <= $.ig.SeekableBufferedStream.prototype.__maxBufferLength) {
				if (this.__baseStreamPositionInBuffer != this.__bufferLength) {
					this.__baseStream.seek(this.__bufferLength - this.__baseStreamPositionInBuffer, $.ig.SeekOrigin.prototype.current);
				}
				var bytesRead = this.__baseStream.read(this.__buffer, this.__bufferLength, $.ig.SeekableBufferedStream.prototype.__maxBufferLength - this.__bufferLength);
				this.__bufferLength += bytesRead;
				this.__baseStreamPositionInBuffer = this.__bufferLength;
				bytesNeededForBuffer -= bytesRead;
			} else {
				this.flush();
				if (count <= $.ig.SeekableBufferedStream.prototype.__maxBufferLength) {
					this.__bufferLength = this.__baseStream.read(this.__buffer, 0, $.ig.SeekableBufferedStream.prototype.__maxBufferLength);
					this.__baseStreamPositionInBuffer = this.__bufferLength;
					bytesNeededForBuffer = count - this.__bufferLength;
				} else {
					var bytesRead1 = this.__baseStream.read(array, offset, count);
					this.__position += bytesRead1;
					return bytesRead1;
				}
			}
		}
		if (bytesNeededForBuffer < 0) {
			bytesNeededForBuffer = 0;
		}
		var bytesToRead = count - bytesNeededForBuffer;
		$.ig.Buffer.prototype.blockCopy(this.__buffer, this.__bufferPosition, array, offset, bytesToRead);
		this.__bufferPosition += bytesToRead;
		this.__position += bytesToRead;
		return bytesToRead;
	}
	/*<EndMethod Name="System.Int32 Infragistics.Documents.Core.SeekableBufferedStream::Read(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int64 Infragistics.Documents.Core.SeekableBufferedStream::Seek(System.Int64, System.IO.SeekOrigin)" />*/
	seek: function (offset, origin) {
		if (origin != $.ig.SeekOrigin.prototype.current) {
			switch (origin) {
				case $.ig.SeekOrigin.prototype.begin:
					$.ig.DocCoreUtils.prototype.debugAssert(offset >= 0, null);
					this.position(offset);
					break;
				case $.ig.SeekOrigin.prototype.end:
					$.ig.DocCoreUtils.prototype.debugAssert(this.__length + offset >= 0, null);
					this.position(this.__length + offset);
					break;
				default:
					$.ig.DocCoreUtils.prototype.debugFail("Unknown seek origin");
					break;
			}
			return this.__position;
		}
		if (offset == 0) {
			return this.__position;
		}
		this.__position += offset;
		if (-2147483648 <= offset && offset <= 0x7FFFFFFF) {
			this.__bufferPosition += offset;
			if (this.__bufferPosition >= 0) {
				if (this.__bufferPosition <= this.__bufferLength) {
					return this.__position;
				}
				if (this.__bufferPosition <= $.ig.SeekableBufferedStream.prototype.__maxBufferLength) {
					if (this.__baseStream.length() - this.__baseStream.position() <= this.__bufferLength - this.__baseStreamPositionInBuffer) {
						return this.__position;
					}
					if (this.__baseStreamPositionInBuffer != this.__bufferLength) {
						this.__baseStream.seek(this.__bufferLength - this.__baseStreamPositionInBuffer, $.ig.SeekOrigin.prototype.current);
					}
					var bytesRead = this.__baseStream.read(this.__buffer, this.__bufferLength, $.ig.SeekableBufferedStream.prototype.__maxBufferLength - this.__bufferLength);
					this.__bufferLength += bytesRead;
					this.__baseStreamPositionInBuffer = this.__bufferLength;
					return this.__position;
				}
			}
		}
		this.flush();
		return this.__position;
	}
	/*<EndMethod Name="System.Int64 Infragistics.Documents.Core.SeekableBufferedStream::Seek(System.Int64, System.IO.SeekOrigin)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.SeekableBufferedStream::SetLength(System.Int64)" />*/
	setLength: function (value) {
		this.flush();
		this.__baseStream.setLength(value);
		this.__length = this.__baseStream.length();
		this.__position = this.__baseStream.position();
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.SeekableBufferedStream::SetLength(System.Int64)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.SeekableBufferedStream::Write(, System.Int32, System.Int32)" />*/
	write: function (array, offset, count) {
		if (count == 0) {
			return;
		}
		var bytesNeededForBuffer = count - (this.__bufferLength - this.__bufferPosition);
		if (bytesNeededForBuffer > 0) {
			if ($.ig.SeekableBufferedStream.prototype.__maxBufferLength < this.__bufferLength + bytesNeededForBuffer) {
				this.flush();
				if ($.ig.SeekableBufferedStream.prototype.__maxBufferLength < count) {
					this.__baseStream.write(array, offset, count);
					this.__position += count;
					if (this.__length < this.__position) {
						this.__length = this.__position;
					}
					return;
				}
			}
		}
		this.__bytesWrittenToBuffer = true;
		$.ig.Buffer.prototype.blockCopy(array, offset, this.__buffer, this.__bufferPosition, count);
		this.__bufferPosition += count;
		this.__position += count;
		if (this.__bufferLength < this.__bufferPosition) {
			this.__bufferLength = this.__bufferPosition;
		}
		if (this.__length < this.__position) {
			this.__length = this.__position;
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.SeekableBufferedStream::Write(, System.Int32, System.Int32)" />*/
	,
	$type: new $.ig.Type('SeekableBufferedStream', $.ig.Stream.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Core.SeekableBufferedStream" />*/

/*<BeginType Name="Infragistics.Documents.Core.StringUtilities" />*/

$.ig.util.defType('StringUtilities', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginProperty Name="System.StringComparison Infragistics.Documents.Core.StringUtilities::StringComparisonInvariantCultureIgnoreCase()" />*/
	stringComparisonInvariantCultureIgnoreCase: function () {
		return $.ig.StringComparison.prototype.invariantCultureIgnoreCase;
	}
	/*<EndProperty Name="System.StringComparison Infragistics.Documents.Core.StringUtilities::StringComparisonInvariantCultureIgnoreCase()" />*/
	,
	/*<BeginProperty Name="System.StringComparer Infragistics.Documents.Core.StringUtilities::StringComparerInvariantCultureIgnoreCase()" />*/
	stringComparerInvariantCultureIgnoreCase: function () {
		return $.ig.StringComparer.prototype.invariantCultureIgnoreCase;
	}
	/*<EndProperty Name="System.StringComparer Infragistics.Documents.Core.StringUtilities::StringComparerInvariantCultureIgnoreCase()" />*/
	,
	/*<BeginProperty Name="System.StringComparison Infragistics.Documents.Core.StringUtilities::StringComparisonInvariantCulture()" />*/
	stringComparisonInvariantCulture: function () {
		return $.ig.StringComparison.prototype.invariantCulture;
	}
	/*<EndProperty Name="System.StringComparison Infragistics.Documents.Core.StringUtilities::StringComparisonInvariantCulture()" />*/
	,
	/*<BeginProperty Name="System.StringComparer Infragistics.Documents.Core.StringUtilities::StringComparerInvariantCulture()" />*/
	stringComparerInvariantCulture: function () {
		return $.ig.StringComparer.prototype.invariantCulture;
	}
	/*<EndProperty Name="System.StringComparer Infragistics.Documents.Core.StringUtilities::StringComparerInvariantCulture()" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.Documents.Core.StringUtilities::StringCompare(System.String, System.String, System.Globalization.CultureInfo, System.Globalization.CompareOptions)" />*/
	stringCompare: function (s1, s2, cultureInfo, compareOptions) {
		return $.ig.util.stringCompare2(s1, s2, cultureInfo, compareOptions);
	}
	/*<EndMethod Name="System.Int32 Infragistics.Documents.Core.StringUtilities::StringCompare(System.String, System.String, System.Globalization.CultureInfo, System.Globalization.CompareOptions)" />*/
	,
	$type: new $.ig.Type('StringUtilities', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Core.StringUtilities" />*/

/*<BeginType Name="Infragistics.Documents.Core.UriUtilities" />*/

$.ig.util.defType('UriUtilities', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Uri Infragistics.Documents.Core.UriUtilities::CreateRelativeOrAbsoluteURI(System.String)" />*/
	createRelativeOrAbsoluteURI: function (uriString) {
		var uri = new $.ig.Uri(1, uriString, $.ig.UriKind.prototype.relativeOrAbsolute);
		return uri;
	}
	/*<EndMethod Name="System.Uri Infragistics.Documents.Core.UriUtilities::CreateRelativeOrAbsoluteURI(System.String)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Core.UriUtilities::TryCreateRelativeOrAbsoluteURI(System.String, System.Uri)" />*/
	tryCreateRelativeOrAbsoluteURI: function (uriString, uri) {
		if (!(function () { var $ret = $.ig.Uri.prototype.tryCreate(uriString, $.ig.UriKind.prototype.relativeOrAbsolute, uri); uri = $ret.p2; return $ret.ret; }())) {
			return {
				ret: false,
				p1: uri
			};
		}
		return {
			ret: true,
			p1: uri
		};
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Core.UriUtilities::TryCreateRelativeOrAbsoluteURI(System.String, System.Uri)" />*/
	,
	$type: new $.ig.Type('UriUtilities', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Core.UriUtilities" />*/

/*<BeginType Name="Infragistics.Documents.Core.Utilities" />*/

$.ig.util.defType('DocCoreUtils', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name=" Infragistics.Documents.Core.Utilities::AppendDataForMD4()" />*/
	appendDataForMD4: function (data) {
		var dataLength = data.length * 8;
		var modulo = (dataLength % 512);
		var bitsToAppend = modulo < 448 ? bitsToAppend = 448 - modulo : bitsToAppend = 960 - modulo;
		$.ig.DocCoreUtils.prototype.debugAssert(bitsToAppend % 8 == 0, null);
		var bytesToAppend = $.ig.intDivide(bitsToAppend, 8);
		$.ig.DocCoreUtils.prototype.debugAssert(bytesToAppend > 0, null);
		var appendedData = new Array(data.length + bytesToAppend + 8);
		$.ig.Buffer.prototype.blockCopy(data, 0, appendedData, 0, data.length);
		appendedData[data.length] = 128;
		$.ig.Buffer.prototype.blockCopy($.ig.BitConverter.prototype.getBytes9(dataLength), 0, appendedData, data.length + bytesToAppend, 8);
		return appendedData;
	}
	/*<EndMethod Name=" Infragistics.Documents.Core.Utilities::AppendDataForMD4()" />*/
	,
	/*<BeginMethod Name="System.FormatException Infragistics.Documents.Core.Utilities::CreateFormatException`1(System.String)" />*/
	createFormatException$1: function ($t, value) {
		return new $.ig.FormatException(1, $ig.documentsCore.locale.getString("LE_FormatException_TypeError", [ $t.typeName(), value ]));
	}
	/*<EndMethod Name="System.FormatException Infragistics.Documents.Core.Utilities::CreateFormatException`1(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.Utilities::DecodeEscherColor(System.Nullable, System.Nullable, System.Nullable, System.Nullable, System.Nullable, System.Nullable)" />*/
	decodeEscherColor: function (colorPropertyValue, opacityPropertyValue, argbValue, schemeIndex, systemColorValue, paletteIndex) {
		argbValue = $.ig.util.toNullable($.ig.Color.prototype.$type, null);
		schemeIndex = $.ig.util.toNullable($.ig.Number.prototype.$type, null);
		systemColorValue = $.ig.util.toNullable($.ig.EscherSysIndex.prototype.$type, null);
		paletteIndex = $.ig.util.toNullable($.ig.Number.prototype.$type, null);
		if ($.ig.util.nullableEquals(colorPropertyValue, null)) {
			return {
				p2: argbValue,
				p3: schemeIndex,
				p4: systemColorValue,
				p5: paletteIndex
			};
		}
		var alpha = 255;
		if ($.ig.util.nullableNotEquals(opacityPropertyValue, null)) {
			var opactiy = $.ig.DocCoreUtils.prototype.decodeFixedPoint16x16Value(opacityPropertyValue.value());
			alpha = $.ig.truncate($.ig.DocCoreUtils.prototype.midpointRoundingAwayFromZero2(opactiy * 255));
		}
		var value = colorPropertyValue.value();
		var highOrderByte = (value >>> 24);
		var colorIndex = highOrderByte;
		switch (colorIndex) {
			case $.ig.Utilities_ColorIndex.prototype.paletteIndex:
				paletteIndex = $.ig.util.toNullable($.ig.Number.prototype.$type, (value & 65535));
				break;
			case $.ig.Utilities_ColorIndex.prototype.schemeIndex:
				schemeIndex = $.ig.util.toNullable($.ig.Number.prototype.$type, (value & 255));
				break;
			case $.ig.Utilities_ColorIndex.prototype.sysIndex:
				systemColorValue = $.ig.util.toNullable($.ig.EscherSysIndex.prototype.$type, (value & 16777215));
				break;
			default:
				var rValue = (value & 255);
				var gValue = ((value & 65280) >>> 8);
				var bValue = ((value & 16711680) >>> 16);
				argbValue = $.ig.util.toNullable($.ig.Color.prototype.$type, $.ig.Color.prototype.fromArgb(alpha, rValue, gValue, bValue));
				break;
		}
		return {
			p2: argbValue,
			p3: schemeIndex,
			p4: systemColorValue,
			p5: paletteIndex
		};
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.Utilities::DecodeEscherColor(System.Nullable, System.Nullable, System.Nullable, System.Nullable, System.Nullable, System.Nullable)" />*/
	,
	/*<BeginMethod Name="System.Single Infragistics.Documents.Core.Utilities::DecodeFixedPoint16x16Value(System.UInt32)" />*/
	decodeFixedPoint16x16Value: function (value) {
		var integerPortion = (value >>> 16);
		var fractionalPortion = (value & 65535);
		return integerPortion + (fractionalPortion / 65536);
	}
	/*<EndMethod Name="System.Single Infragistics.Documents.Core.Utilities::DecodeFixedPoint16x16Value(System.UInt32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.Utilities::EncodeEscherColor(System.Nullable, System.Nullable, System.Nullable, System.Nullable, System.Nullable, System.Nullable)" />*/
	encodeEscherColor: function (argbValue, schemeIndex, systemColorValue, paletteIndex, colorPropertyValue, opacityPropertyValue) {
		colorPropertyValue = $.ig.util.toNullable($.ig.Number.prototype.$type, null);
		opacityPropertyValue = $.ig.util.toNullable($.ig.Number.prototype.$type, null);
		if (argbValue.hasValue()) {
			colorPropertyValue = $.ig.util.toNullable($.ig.Number.prototype.$type, $.ig.util.intSToU(((argbValue.value().b() << 16) | (argbValue.value().g() << 8) | argbValue.value().r())));
			var alpha = argbValue.value().a();
			if (alpha != 255) {
				var opactiy = alpha / 255;
				opacityPropertyValue = $.ig.util.toNullable($.ig.Number.prototype.$type, $.ig.DocCoreUtils.prototype.encodeFixedPoint16x16Value(opactiy));
			}
			return {
				p4: colorPropertyValue,
				p5: opacityPropertyValue
			};
		}
		if ($.ig.util.nullableNotEquals(schemeIndex, null)) {
			var sysIndexMarker = $.ig.util.u32LS($.ig.Utilities_ColorIndex.prototype.schemeIndex, 24);
			colorPropertyValue = $.ig.util.toNullable($.ig.Number.prototype.$type, $.ig.util.u32BitwiseOr(sysIndexMarker, schemeIndex.value()));
			return {
				p4: colorPropertyValue,
				p5: opacityPropertyValue
			};
		}
		if ($.ig.util.nullableNotEquals(systemColorValue, null)) {
			var sysIndexMarker1 = $.ig.util.u32LS($.ig.Utilities_ColorIndex.prototype.sysIndex, 24);
			colorPropertyValue = $.ig.util.toNullable($.ig.Number.prototype.$type, $.ig.util.u32BitwiseOr(sysIndexMarker1, systemColorValue.value()));
			return {
				p4: colorPropertyValue,
				p5: opacityPropertyValue
			};
		}
		if ($.ig.util.nullableNotEquals(paletteIndex, null)) {
			var sysIndexMarker2 = $.ig.util.u32LS($.ig.Utilities_ColorIndex.prototype.paletteIndex, 24);
			colorPropertyValue = $.ig.util.toNullable($.ig.Number.prototype.$type, $.ig.util.u32BitwiseOr(sysIndexMarker2, paletteIndex.value()));
			return {
				p4: colorPropertyValue,
				p5: opacityPropertyValue
			};
		}
		return {
			p4: colorPropertyValue,
			p5: opacityPropertyValue
		};
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.Utilities::EncodeEscherColor(System.Nullable, System.Nullable, System.Nullable, System.Nullable, System.Nullable, System.Nullable)" />*/
	,
	/*<BeginMethod Name="System.UInt32 Infragistics.Documents.Core.Utilities::EncodeFixedPoint16x16Value(System.Double)" />*/
	encodeFixedPoint16x16Value: function (value) {
		var temp = $.ig.DocCoreUtils.prototype.truncate(value);
		$.ig.DocCoreUtils.prototype.debugAssert(-32768 <= temp && temp <= 32767, "The integer portion should not take more than 16 bits.");
		var integerPortion = $.ig.truncate(temp);
		temp = Math.abs(value % 1) * 65536;
		var fractionPortion = $.ig.truncate($.ig.DocCoreUtils.prototype.midpointRoundingAwayFromZero(temp));
		return $.ig.util.intSToU((integerPortion << 16)) + fractionPortion;
	}
	/*<EndMethod Name="System.UInt32 Infragistics.Documents.Core.Utilities::EncodeFixedPoint16x16Value(System.Double)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.Utilities::DebugAssert(System.Boolean, System.String)" />*/
	debugAssert: function (condition, message) {
		if ($.ig.DocCoreUtils.prototype.shouldDisableDebugMessages()) {
			return;
		}
		$.ig.Debug.prototype.assert1(condition, message);
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.Utilities::DebugAssert(System.Boolean, System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.Utilities::DebugFail(System.String)" />*/
	debugFail: function (message) {
		if ($.ig.DocCoreUtils.prototype.shouldDisableDebugMessages()) {
			return;
		}
		$.ig.Debug.prototype.writeLine("FAIL: " + message);
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.Utilities::DebugFail(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.Utilities::ForEach`1(System.Collections.Generic.IEnumerable, System.Action)" />*/
	forEach$1: function ($t, sequence, action) {
		var en = sequence.getEnumerator();
		while (en.moveNext()) {
			var item = en.current();
			action(item);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.Utilities::ForEach`1(System.Collections.Generic.IEnumerable, System.Action)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.Documents.Core.Utilities::EMUToTwips(System.Int64)" />*/
	eMUToTwips: function (emuValue) {
		return (emuValue * $.ig.DocCoreUtils.prototype._twipsPerPoint) / $.ig.DocCoreUtils.prototype._eMUsPerPoint;
	}
	/*<EndMethod Name="System.Double Infragistics.Documents.Core.Utilities::EMUToTwips(System.Int64)" />*/
	,
	/*<BeginMethod Name="System.Text.Encoding Infragistics.Documents.Core.Utilities::EncodingGetEncoding(System.Int32)" />*/
	encodingGetEncoding: function (codePage) {
		switch (codePage) {
			case 1200: return $.ig.Encoding.prototype.unicode();
			case 1201: return $.ig.Encoding.prototype.bigEndianUnicode();
			case 65001: return $.ig.Encoding.prototype.uTF8();
			case 1252: return new $.ig.Windows1252Encoding();
			case 932: return new $.ig.Windows932Encoding();
			default:
				$.ig.DocCoreUtils.prototype.debugFail("Unsupported Encoding");
				return $.ig.Encoding.prototype.uTF8();
		}
	}
	/*<EndMethod Name="System.Text.Encoding Infragistics.Documents.Core.Utilities::EncodingGetEncoding(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.Documents.Core.Utilities::EncodingGetCodePage(System.Text.Encoding)" />*/
	encodingGetCodePage: function (encoding) {
		if (encoding == $.ig.Encoding.prototype.unicode()) {
			return 1200;
		}
		if (encoding == $.ig.Encoding.prototype.bigEndianUnicode()) {
			return 1201;
		}
		if (encoding == $.ig.Encoding.prototype.uTF8()) {
			return 65001;
		}
		$.ig.DocCoreUtils.prototype.debugFail("Unknown Encoding");
		return 0;
	}
	/*<EndMethod Name="System.Int32 Infragistics.Documents.Core.Utilities::EncodingGetCodePage(System.Text.Encoding)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.Documents.Core.Utilities::EncodingGetWebName(System.Text.Encoding)" />*/
	encodingGetWebName: function (encoding) {
		try {
			var s = encoding.webName();
			return s;
		}
		catch (e) {
			return $.ig.DocCoreUtils.prototype.encodingGetCodePage(encoding).toString();
		}
	}
	/*<EndMethod Name="System.String Infragistics.Documents.Core.Utilities::EncodingGetWebName(System.Text.Encoding)" />*/
	,
	/*<BeginMethod Name="System.Globalization.CultureInfo Infragistics.Documents.Core.Utilities::GetCultureInfo(System.Int32)" />*/
	getCultureInfo: function (culture) {
		return $.ig.CultureInfo.prototype.currentCulture();
	}
	/*<EndMethod Name="System.Globalization.CultureInfo Infragistics.Documents.Core.Utilities::GetCultureInfo(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.Documents.Core.Utilities::GetHexValue(System.Char)" />*/
	getHexValue: function (c) {
		if ('0'.charCodeAt(0) <= c.charCodeAt(0) && c.charCodeAt(0) <= '9'.charCodeAt(0)) {
			return c.charCodeAt(0) - '0'.charCodeAt(0);
		}
		if ('a'.charCodeAt(0) <= c.charCodeAt(0) && c.charCodeAt(0) <= 'f'.charCodeAt(0)) {
			return (c.charCodeAt(0) - 'a'.charCodeAt(0)) + 10;
		}
		if ('A'.charCodeAt(0) <= c.charCodeAt(0) && c.charCodeAt(0) <= 'F'.charCodeAt(0)) {
			return (c.charCodeAt(0) - 'A'.charCodeAt(0)) + 10;
		}
		$.ig.DocCoreUtils.prototype.debugFail("Unknown hex value");
		return 0;
	}
	/*<EndMethod Name="System.Int32 Infragistics.Documents.Core.Utilities::GetHexValue(System.Char)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Core.Utilities::IsHexDigit(System.Char)" />*/
	isHexDigit: function (c) {
		return ('0'.charCodeAt(0) <= c.charCodeAt(0) && c.charCodeAt(0) <= '9'.charCodeAt(0)) || ('a'.charCodeAt(0) <= c.charCodeAt(0) && c.charCodeAt(0) <= 'f'.charCodeAt(0)) || ('A'.charCodeAt(0) <= c.charCodeAt(0) && c.charCodeAt(0) <= 'F'.charCodeAt(0));
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Core.Utilities::IsHexDigit(System.Char)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Core.Utilities::IsNullResolved(System.Object)" />*/
	isNullResolved: function (value) {
		return value == null;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Core.Utilities::IsNullResolved(System.Object)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.Utilities::LogDebuggerError(System.String, System.Int32, System.String)" />*/
	logDebuggerError: function (message, level, category) {
		$.ig.Debug.prototype.writeLine(category + ": " + message);
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.Utilities::LogDebuggerError(System.String, System.Int32, System.String)" />*/
	,
	/*<BeginMethod Name="System.Single Infragistics.Documents.Core.Utilities::MidpointRoundingAwayFromZero(System.Single)" />*/
	midpointRoundingAwayFromZero2: function (value) {
		return $.ig.DocCoreUtils.prototype.midpointRoundingAwayFromZero1(value, 0);
	}
	/*<EndMethod Name="System.Single Infragistics.Documents.Core.Utilities::MidpointRoundingAwayFromZero(System.Single)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.Documents.Core.Utilities::MidpointRoundingAwayFromZero(System.Double)" />*/
	midpointRoundingAwayFromZero: function (value) {
		return $.ig.DocCoreUtils.prototype.midpointRoundingAwayFromZero1(value, 0);
	}
	/*<EndMethod Name="System.Double Infragistics.Documents.Core.Utilities::MidpointRoundingAwayFromZero(System.Double)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.Documents.Core.Utilities::MidpointRoundingAwayFromZero(System.Double, System.Int32)" />*/
	midpointRoundingAwayFromZero1: function (value, digits) {
		if (digits < 0 || digits > 15) {
			var factor = Math.pow(10, digits);
			var sign = Math.sign(value);
			return $.ig.DocCoreUtils.prototype.truncate(value * factor + 0.5 * sign) / factor;
		}
		if (Math.abs(value) < 1E+16) {
			var powerOf10 = $.ig.DocCoreUtils.prototype._powersOf10[digits];
			value *= powerOf10;
			var fraction = value % 1;
			value = $.ig.DocCoreUtils.prototype.truncate(value);
			if (Math.abs(fraction) >= 0.5) {
				value += Math.sign(fraction);
			}
			value /= powerOf10;
		}
		return value;
	}
	/*<EndMethod Name="System.Double Infragistics.Documents.Core.Utilities::MidpointRoundingAwayFromZero(System.Double, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.UInt32 Infragistics.Documents.Core.Utilities::RotateBitsLeft(System.UInt32, System.Int32)" />*/
	rotateBitsLeft: function (source, numberOfBits) {
		return $.ig.util.u32BitwiseOr((source >>> (32 - numberOfBits)), ($.ig.util.u32LS(source, numberOfBits)));
	}
	/*<EndMethod Name="System.UInt32 Infragistics.Documents.Core.Utilities::RotateBitsLeft(System.UInt32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.Documents.Core.Utilities::RoundUpToMultiple(System.Int32, System.Int32)" />*/
	roundUpToMultiple: function (value, multipleBase) {
		return value + multipleBase - 1 - ((value - 1) % multipleBase);
	}
	/*<EndMethod Name="System.Int32 Infragistics.Documents.Core.Utilities::RoundUpToMultiple(System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.Utilities::SortMergeGeneric`1(System.Collections.Generic.List, System.Collections.Generic.IComparer)" />*/
	sortMergeGeneric$12: function ($t, list, comparer) {
		var array = list.toArray();
		$.ig.DocCoreUtils.prototype.sortMergeGeneric$1($t, array, null, comparer);
		list.clear();
		list.addRange(array);
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.Utilities::SortMergeGeneric`1(System.Collections.Generic.List, System.Collections.Generic.IComparer)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.Utilities::SortMergeGeneric`1(, , System.Collections.Generic.IComparer)" />*/
	sortMergeGeneric$1: function ($t, arr, tmpArr, comparer) {
		$.ig.DocCoreUtils.prototype.sortMergeGeneric$11($t, arr, tmpArr, comparer, 0, arr.length - 1);
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.Utilities::SortMergeGeneric`1(, , System.Collections.Generic.IComparer)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.Utilities::SortMergeGeneric`1(, , System.Collections.Generic.IComparer, System.Int32, System.Int32)" />*/
	sortMergeGeneric$11: function ($t, arr, tmpArr, comparer, si, ei) {
		if (arr == null) {
			throw new $.ig.ArgumentNullException(0, "arr");
		}
		if (comparer == null) {
			throw new $.ig.ArgumentNullException(0, "comparer");
		}
		if (null == tmpArr) {
			tmpArr = $.ig.util.shallowClone(arr);
		} else {
			$.ig.util.arrayCopy2(arr, tmpArr, arr.length);
		}
		$.ig.DocCoreUtils.prototype.sortMergeHelper$1($t, arr, tmpArr, comparer, si, ei);
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.Utilities::SortMergeGeneric`1(, , System.Collections.Generic.IComparer, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.Utilities::SortMergeHelper`1(, , System.Collections.Generic.IComparer, System.Int32, System.Int32)" />*/
	sortMergeHelper$1: function ($t, arr, tmpArr, comparer, si, ei) {
		var i, j, k, m;
		var o1 = $.ig.util.getDefaultValue($t), o2 = $.ig.util.getDefaultValue($t);
		if (ei - si < 6) {
			for (i = 1 + si; i <= ei; i++) {
				o1 = arr[i];
				for (j = i; j > si; j--) {
					o2 = arr[j - 1];
					if (comparer.compare(o1, o2) < 0) {
						arr[j] = o2;
					} else {
						break;
					}
				}
				if (i != j) {
					arr[j] = o1;
				}
			}
			return;
		}
		m = $.ig.intDivide((si + ei), 2);
		$.ig.DocCoreUtils.prototype.sortMergeHelper$1($t, tmpArr, arr, comparer, si, m);
		$.ig.DocCoreUtils.prototype.sortMergeHelper$1($t, tmpArr, arr, comparer, 1 + m, ei);
		for (i = si , j = 1 + m , k = si; k <= ei; k++) {
			if (i <= m) {
				o1 = tmpArr[i];
			}
			if (j <= ei) {
				o2 = tmpArr[j];
			}
			if (j > ei || i <= m && comparer.compare(o1, o2) <= 0) {
				arr[k] = o1;
				i++;
			} else {
				arr[k] = o2;
				j++;
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.Utilities::SortMergeHelper`1(, , System.Collections.Generic.IComparer, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name=" Infragistics.Documents.Core.Utilities::StreamToArray(System.IO.Stream)" />*/
	streamToArray: function (stream) {
		if (stream.canSeek()) {
			var data = new Array(stream.length());
			stream.read(data, 0, data.length);
			return data;
		}
		var buffer = new Array(16 * 1024);
		{
			var ms = new $.ig.MemoryStream(0);
			try {
				var read;
				while ((read = stream.read(buffer, 0, buffer.length)) > 0) {
					ms.write(buffer, 0, read);
				}
				return ms.toArray();
			}
			finally {
				if (ms != null) {
					ms.dispose();
				}
			}
		}
	}
	/*<EndMethod Name=" Infragistics.Documents.Core.Utilities::StreamToArray(System.IO.Stream)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.Utilities::Swap`1(Infragistics.Documents.Core.Utilities.T, Infragistics.Documents.Core.Utilities.T)" />*/
	swap$1: function ($t, value1, value2) {
		var temp = value1;
		value1 = value2;
		value2 = temp;
		return {
			p0: value1,
			p1: value2
		};
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.Utilities::Swap`1(Infragistics.Documents.Core.Utilities.T, Infragistics.Documents.Core.Utilities.T)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.Documents.Core.Utilities::Truncate(System.Double)" />*/
	truncate: function (value) {
		if (value < 0) {
			return Math.ceil(value);
		}
		return Math.floor(value);
	}
	/*<EndMethod Name="System.Double Infragistics.Documents.Core.Utilities::Truncate(System.Double)" />*/
	,
	/*<BeginMethod Name="System.IO.Stream Infragistics.Documents.Core.Utilities::TryGetFileStream(System.String, System.String, System.String)" />*/
	tryGetFileStream: function (sourcePath, path, resolvedPath) {
		resolvedPath = null;
		return {
			ret: null,
			p2: resolvedPath
		};
	}
	/*<EndMethod Name="System.IO.Stream Infragistics.Documents.Core.Utilities::TryGetFileStream(System.String, System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.Int64 Infragistics.Documents.Core.Utilities::TwipsToEMU(System.Double)" />*/
	twipsToEMU: function (twipsValue) {
		return $.ig.truncate($.ig.DocCoreUtils.prototype.midpointRoundingAwayFromZero((twipsValue / $.ig.DocCoreUtils.prototype._twipsPerPoint) * $.ig.DocCoreUtils.prototype._eMUsPerPoint));
	}
	/*<EndMethod Name="System.Int64 Infragistics.Documents.Core.Utilities::TwipsToEMU(System.Double)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.Utilities::VerifyNotNull(System.Object, System.String)" />*/
	verifyNotNull: function (value, paramName) {
		if (value == null) {
			throw new $.ig.ArgumentNullException(0, paramName);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.Utilities::VerifyNotNull(System.Object, System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.Utilities::VerifyValueInRange`1(System.Double, System.String, System.Double, System.Double)" />*/
	verifyValueInRange$1: function ($t, value, paramName, minValue, maxValue) {
		if (minValue <= value && value <= maxValue) {
			return;
		}
		var message = $ig.documentsCore.locale.getString("LE_ArgumentOutOfRangeException_ValueError", [ $t.typeName(), minValue, maxValue ]);
		throw new $.ig.ArgumentOutOfRangeException(2, paramName, message);
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.Utilities::VerifyValueInRange`1(System.Double, System.String, System.Double, System.Double)" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Core.Utilities::CurrentCultureInfoLCID()" />*/
	currentCultureInfoLCID: function () {
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Core.Utilities::CurrentCultureInfoLCID()" />*/
	,
	/*<BeginProperty Name="System.Text.Encoding Infragistics.Documents.Core.Utilities::EncodingDefault()" />*/
	encodingDefault: function () {
		return $.ig.Encoding.prototype.defaultValue();
	}
	/*<EndProperty Name="System.Text.Encoding Infragistics.Documents.Core.Utilities::EncodingDefault()" />*/
	,
	_shouldDisableDebugMessages: false,
	/*<BeginProperty Name="System.Boolean Infragistics.Documents.Core.Utilities::ShouldDisableDebugMessages()" />*/
	shouldDisableDebugMessages: function (value) {
		if (arguments.length === 1) {
			this._shouldDisableDebugMessages = value;
			return value;
		} else {
			return this._shouldDisableDebugMessages;
		}
	}
	/*<EndProperty Name="System.Boolean Infragistics.Documents.Core.Utilities::ShouldDisableDebugMessages()" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.Documents.Core.Utilities::GetFileName(System.IO.Stream)" />*/
	getFileName: function (stream) {
		return null;
	}
	/*<EndMethod Name="System.String Infragistics.Documents.Core.Utilities::GetFileName(System.IO.Stream)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.Documents.Core.Utilities::GetString(System.Text.Encoding, )" />*/
	getString2: function (encoding, bytes) {
		return encoding.getString1(bytes, 0, bytes.length);
	}
	/*<EndMethod Name="System.String Infragistics.Documents.Core.Utilities::GetString(System.Text.Encoding, )" />*/
	,
	/*<BeginMethod Name="System.Text.Encoding Infragistics.Documents.Core.Utilities::GetEncoding(System.Text.Encoding, System.Int32)" />*/
	getEncoding: function (encoding, codePage) {
		return $.ig.DocCoreUtils.prototype.encodingGetEncoding(codePage);
	}
	/*<EndMethod Name="System.Text.Encoding Infragistics.Documents.Core.Utilities::GetEncoding(System.Text.Encoding, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.Documents.Core.Utilities::ReadNullTerminatedUnicodeString(System.IO.BinaryReader)" />*/
	readNullTerminatedUnicodeString: function (reader) {
		var bytes = new $.ig.List$1($.ig.Number.prototype.$type, 0);
		while (true) {
			var byte1 = reader.readByte();
			var byte2 = reader.readByte();
			if (byte1 == 0 && byte2 == 0) {
				break;
			}
			bytes.add(byte1);
			bytes.add(byte2);
		}
		return $.ig.Encoding.prototype.unicode().getString(bytes.toArray());
	}
	/*<EndMethod Name="System.String Infragistics.Documents.Core.Utilities::ReadNullTerminatedUnicodeString(System.IO.BinaryReader)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.Utilities::WriteNullTerminatedUnicodeString(System.IO.BinaryWriter, System.String)" />*/
	writeNullTerminatedUnicodeString: function (writer, value) {
		writer.write($.ig.Encoding.prototype.unicode().getBytes1(value));
		writer.write5(0);
		writer.write5(0);
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.Utilities::WriteNullTerminatedUnicodeString(System.IO.BinaryWriter, System.String)" />*/
	,
	$type: new $.ig.Type('DocCoreUtils', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Core.Utilities" />*/

/*<BeginType Name="Infragistics.Documents.Core.IShallowCloneable" />*/

$.ig.util.defType('IShallowCloneable', 'Object', {
	$type: new $.ig.Type('IShallowCloneable', null)
}, true);

/*<EndType Name="Infragistics.Documents.Core.IShallowCloneable" />*/

/*<BeginType Name="Infragistics.Documents.Core.ValueTuple" />*/

$.ig.util.defType('ValueTuple', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Core.ValueTuple Infragistics.Documents.Core.ValueTuple::Create`2(Infragistics.Documents.Core.ValueTuple.T1, Infragistics.Documents.Core.ValueTuple.T2)" />*/
	create$2: function ($t1, $t2, item1, item2) {
		return new $.ig.ValueTuple$2($t1, $t2, 1, item1, item2);
	}
	/*<EndMethod Name="Infragistics.Documents.Core.ValueTuple Infragistics.Documents.Core.ValueTuple::Create`2(Infragistics.Documents.Core.ValueTuple.T1, Infragistics.Documents.Core.ValueTuple.T2)" />*/
	,
	$type: new $.ig.Type('ValueTuple', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Core.ValueTuple" />*/

/*<BeginType Name="Infragistics.Documents.Core.ValueTuple`2" />*/

$.ig.util.defType('ValueTuple$2', 'ValueType', {
	$t1: null,
	$t2: null,
	init: function ($t1, $t2, initNumber) {
		this.$t1 = $t1;
		this.$t2 = $t2;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$t1, this.$t2);
		}
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
	__item1: null,
	__item2: null,
	init1: function ($t1, $t2, initNumber, item1, item2) {
		this.$t1 = $t1;
		this.$t2 = $t2;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$t1, this.$t2);
		}
		$.ig.ValueType.prototype.init.call(this);
		this.__item1 = item1;
		this.__item2 = item2;
	},
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Core.ValueTuple`2::Equals(Infragistics.Documents.Core.ValueTuple)" />*/
	equals: function (other) {
		return this.$type.getStaticFields().__comparer1.equalsC(this.__item1, other.__item1) && this.$type.getStaticFields().__comparer2.equalsC(this.__item2, other.__item2);
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Core.ValueTuple`2::Equals(Infragistics.Documents.Core.ValueTuple)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Core.ValueTuple`2::Equals(System.Object)" />*/
	equals1: function (obj) {
		var other = $.ig.util.toNullable($.ig.ValueTuple$2.prototype.$type.specialize(this.$t1, this.$t2), $.ig.util.cast($.ig.ValueTuple$2.prototype.$type.specialize(this.$t1, this.$t2), obj));
		return $.ig.ValueTuple$2.prototype._l_op_Inequality_Lifted(this.$t1, this.$t2, other, $.ig.util.toNullable($.ig.ValueTuple$2.prototype.$type.specialize(this.$t1, this.$t2), null)) && this.equals(other.value());
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Core.ValueTuple`2::Equals(System.Object)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.Documents.Core.ValueTuple`2::GetHashCode()" />*/
	getHashCode: function () {
		return (this.$type.getStaticFields().__comparer1.getHashCodeC(this.__item1) << 5) ^ this.$type.getStaticFields().__comparer2.getHashCodeC(this.__item2);
	}
	/*<EndMethod Name="System.Int32 Infragistics.Documents.Core.ValueTuple`2::GetHashCode()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Core.ValueTuple`2::L_op_Equality(Infragistics.Documents.Core.ValueTuple, Infragistics.Documents.Core.ValueTuple)" />*/
	_l_op_Equality: function ($t1, $t2, left, right) {
		return left.equals(right);
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Core.ValueTuple`2::L_op_Equality(Infragistics.Documents.Core.ValueTuple, Infragistics.Documents.Core.ValueTuple)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Core.ValueTuple`2::L_op_Equality_Lifted(System.Nullable, System.Nullable)" />*/
	_l_op_Equality_Lifted: function ($t1, $t2, left, right) {
		if (!left.hasValue()) {
			return !right.hasValue();
		} else if (!right.hasValue()) {
			return false;
		}
		return $.ig.ValueTuple$2.prototype._l_op_Equality($t1, $t2, left.value(), right.value());
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Core.ValueTuple`2::L_op_Equality_Lifted(System.Nullable, System.Nullable)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Core.ValueTuple`2::L_op_Inequality(Infragistics.Documents.Core.ValueTuple, Infragistics.Documents.Core.ValueTuple)" />*/
	_l_op_Inequality: function ($t1, $t2, left, right) {
		return !left.equals(right);
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Core.ValueTuple`2::L_op_Inequality(Infragistics.Documents.Core.ValueTuple, Infragistics.Documents.Core.ValueTuple)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Core.ValueTuple`2::L_op_Inequality_Lifted(System.Nullable, System.Nullable)" />*/
	_l_op_Inequality_Lifted: function ($t1, $t2, left, right) {
		if (!left.hasValue()) {
			return right.hasValue();
		} else if (!right.hasValue()) {
			return true;
		}
		return $.ig.ValueTuple$2.prototype._l_op_Inequality($t1, $t2, left.value(), right.value());
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Core.ValueTuple`2::L_op_Inequality_Lifted(System.Nullable, System.Nullable)" />*/
	,
	$type: new $.ig.Type('ValueTuple$2', $.ig.ValueType.prototype.$type, [$.ig.IEquatable$1.prototype.$type.specialize(-1)], function () {
		this.__comparer1 = $.ig.EqualityComparer$1.prototype.defaultEqualityComparerValue(arguments[0]);
		this.__comparer2 = $.ig.EqualityComparer$1.prototype.defaultEqualityComparerValue(arguments[1]);
	})
}, true);

$.ig.ValueTuple$2.prototype.$type.initSelfReferences();

/*<EndType Name="Infragistics.Documents.Core.ValueTuple`2" />*/

/*<BeginType Name="Infragistics.Documents.Core.VariantUtilities" />*/

$.ig.util.defType('VariantUtilities', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Core.StructuredStorage.FileTypes.VariantType Infragistics.Documents.Core.VariantUtilities::GetVariantType(System.Object)" />*/
	getVariantType: function (variant) {
		var array = $.ig.util.cast(Array, variant);
		if (array != null) {
			var subType = $.ig.VariantUtilities.prototype.getVariantType(array.getValue(0));
			for (var i = 1; i < array.length; i++) {
				var newSubType = $.ig.VariantUtilities.prototype.getVariantType(array.getValue(i));
				if (newSubType != subType) {
					subType = $.ig.VariantType.prototype.variant;
					break;
				}
			}
			return $.ig.VariantType.prototype.vector | subType;
		} else if ($.ig.util.cast($.ig.Boolean.prototype.$type, variant) !== null) {
			return $.ig.VariantType.prototype.bool;
		} else if (typeof variant === 'number') {
			return $.ig.VariantType.prototype.decimal;
		} else if ($.ig.util.cast($.ig.Date.prototype.$type, variant) !== null) {
			return $.ig.VariantType.prototype.fileTime;
		} else if (typeof variant === 'number') {
			return $.ig.VariantType.prototype.i4;
		} else if (typeof variant === 'number') {
			return $.ig.VariantType.prototype.i1;
		} else if (typeof variant === 'number') {
			return $.ig.VariantType.prototype.i2;
		} else if (typeof variant === 'number') {
			return $.ig.VariantType.prototype.i8;
		} else if (typeof variant === 'number') {
			return $.ig.VariantType.prototype.r4;
		} else if (typeof variant === 'number') {
			return $.ig.VariantType.prototype.r8;
		} else if (typeof variant === 'number') {
			return $.ig.VariantType.prototype.uI1;
		} else if (typeof variant === 'number') {
			return $.ig.VariantType.prototype.uI2;
		} else if (typeof variant === 'number') {
			return $.ig.VariantType.prototype.uI4;
		} else if (typeof variant === 'number') {
			return $.ig.VariantType.prototype.uI8;
		} else if (typeof variant === 'string') {
			return $.ig.VariantType.prototype.lPSTR;
		} else if (variant == null) {
			return $.ig.VariantType.prototype.$null;
		}
		$.ig.DocCoreUtils.prototype.debugFail("Unknown object type");
		return $.ig.VariantType.prototype.unknown;
	}
	/*<EndMethod Name="Infragistics.Documents.Core.StructuredStorage.FileTypes.VariantType Infragistics.Documents.Core.VariantUtilities::GetVariantType(System.Object)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.Documents.Core.VariantUtilities::ReadString(System.IO.BinaryReader, System.Text.Encoding, System.Boolean)" />*/
	readString: function (reader, encoding, isSingleByte) {
		var length = reader.readInt32();
		if (isSingleByte == false) {
			length += (length % 2);
			length *= 2;
		}
		var data = new Array(length);
		var validLength;
		for (validLength = 0; validLength < length; validLength++) {
			var next = reader.readByte();
			if (next == 0) {
				break;
			}
			data[validLength] = next;
			if (isSingleByte == false) {
				validLength++;
				data[validLength] = reader.readByte();
			}
		}
		$.ig.DocCoreUtils.prototype.debugAssert(validLength < length, "There was no trailing zero.");
		for (var i = validLength + 1; i < length; i++) {
			var value = reader.readByte();
			$.ig.DocCoreUtils.prototype.debugAssert(value == 0, null);
		}
		return encoding.getString1(data, 0, validLength);
	}
	/*<EndMethod Name="System.String Infragistics.Documents.Core.VariantUtilities::ReadString(System.IO.BinaryReader, System.Text.Encoding, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Object Infragistics.Documents.Core.VariantUtilities::ReadVariant(System.IO.BinaryReader, System.Text.Encoding)" />*/
	readVariant: function (reader, encoding) {
		var type = reader.readInt32();
		return $.ig.VariantUtilities.prototype.readVariantType(reader, type, encoding);
	}
	/*<EndMethod Name="System.Object Infragistics.Documents.Core.VariantUtilities::ReadVariant(System.IO.BinaryReader, System.Text.Encoding)" />*/
	,
	/*<BeginMethod Name="System.Object Infragistics.Documents.Core.VariantUtilities::ReadVariantType(System.IO.BinaryReader, Infragistics.Documents.Core.StructuredStorage.FileTypes.VariantType, System.Text.Encoding)" />*/
	readVariantType: function (reader, type, encoding) {
		if ((type & $.ig.VariantType.prototype.vector) == $.ig.VariantType.prototype.vector) {
			var subType = type & ~$.ig.VariantType.prototype.vector;
			var elementCount = reader.readInt32();
			var values = new Array(elementCount);
			for (var i = 0; i < elementCount; i++) {
				values[i] = $.ig.VariantUtilities.prototype.readVariantType(reader, subType, encoding);
			}
			return values;
		}
		switch (type) {
			case $.ig.VariantType.prototype.array:
			case $.ig.VariantType.prototype.bLOBObject:
			case $.ig.VariantType.prototype.bstr:
			case $.ig.VariantType.prototype.byRef:
			case $.ig.VariantType.prototype.cARRAY:
			case $.ig.VariantType.prototype.cF:
			case $.ig.VariantType.prototype.cY:
			case $.ig.VariantType.prototype.date:
			case $.ig.VariantType.prototype.dispatch:
			case $.ig.VariantType.prototype.error:
			case $.ig.VariantType.prototype.hresult:
			case $.ig.VariantType.prototype.pTR:
			case $.ig.VariantType.prototype.reserved:
			case $.ig.VariantType.prototype.safeArray:
			case $.ig.VariantType.prototype.storage:
			case $.ig.VariantType.prototype.stream:
			case $.ig.VariantType.prototype.streamedObject:
			case $.ig.VariantType.prototype.unknown:
			case $.ig.VariantType.prototype.userDefined:
			case $.ig.VariantType.prototype.vector:
			case $.ig.VariantType.prototype.vOID:
				$.ig.DocCoreUtils.prototype.debugFail("Don't know how to parse this variant type: " + $.ig.VariantType.prototype.getBox(type));
				break;
			case $.ig.VariantType.prototype.bLOB:
				var cbData = reader.readInt32();
				$.ig.DocCoreUtils.prototype.debugAssert(cbData <= reader.baseStream().length() - reader.baseStream().position(), "The cbData field is longer than the amount of space left in the stream.");
				return reader.readBytes(cbData);
			case $.ig.VariantType.prototype.bool: return reader.readBoolean();
			case $.ig.VariantType.prototype.cLSID: return new $.ig.Guid(1, reader.readBytes(16));
			case $.ig.VariantType.prototype.empty: return null;
			case $.ig.VariantType.prototype.fileTime:
				var lo = reader.readUInt32();
				var hi = reader.readUInt32();
				return $.ig.Date.prototype.fromFileTime($.ig.truncate((hi * Math.pow(2, 32) + lo)));
			case $.ig.VariantType.prototype.i1: return reader.readSByte();
			case $.ig.VariantType.prototype.i2: return reader.readInt16();
			case $.ig.VariantType.prototype.i4:
			case $.ig.VariantType.prototype.iNT:
				return reader.readInt32();
			case $.ig.VariantType.prototype.lPSTR: return $.ig.VariantUtilities.prototype.readString(reader, encoding, encoding.equals($.ig.Encoding.prototype.unicode()) == false);
			case $.ig.VariantType.prototype.lPWSTR: return $.ig.VariantUtilities.prototype.readString(reader, $.ig.Encoding.prototype.unicode(), false);
			case $.ig.VariantType.prototype.$null: return null;
			case $.ig.VariantType.prototype.r4: return reader.readSingle();
			case $.ig.VariantType.prototype.r8: return reader.readDouble();
			case $.ig.VariantType.prototype.uI1: return reader.readByte();
			case $.ig.VariantType.prototype.uI2: return reader.readUInt16();
			case $.ig.VariantType.prototype.uI4:
			case $.ig.VariantType.prototype.uINT:
				return reader.readUInt32();
			case $.ig.VariantType.prototype.variant: return $.ig.VariantUtilities.prototype.readVariant(reader, encoding);
			default:
				$.ig.DocCoreUtils.prototype.debugFail("Unknown property type");
				break;
		}
		return null;
	}
	/*<EndMethod Name="System.Object Infragistics.Documents.Core.VariantUtilities::ReadVariantType(System.IO.BinaryReader, Infragistics.Documents.Core.StructuredStorage.FileTypes.VariantType, System.Text.Encoding)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.VariantUtilities::WriteString(System.IO.BinaryWriter, System.Text.Encoding, System.String, System.Boolean)" />*/
	writeString: function (writer, encoding, value, alignStringLengthBy4Bytes) {
		var data = encoding.getBytes1(value);
		var length = data.length + 1;
		if (alignStringLengthBy4Bytes) {
			length = $.ig.DocCoreUtils.prototype.roundUpToMultiple(length, 4);
		}
		writer.write9(length);
		writer.write(data);
		writer.write5(0);
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.VariantUtilities::WriteString(System.IO.BinaryWriter, System.Text.Encoding, System.String, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.VariantUtilities::WriteVariant(System.IO.BinaryWriter, System.Text.Encoding, System.Object)" />*/
	writeVariant: function (writer, encoding, value) {
		$.ig.VariantUtilities.prototype.writeVariant1(writer, encoding, value, true);
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.VariantUtilities::WriteVariant(System.IO.BinaryWriter, System.Text.Encoding, System.Object)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.VariantUtilities::WriteVariant(System.IO.BinaryWriter, System.Text.Encoding, System.Object, System.Boolean)" />*/
	writeVariant1: function (writer, encoding, value, alignBy4Bytes) {
		var type = $.ig.VariantUtilities.prototype.getVariantType(value);
		writer.write9(type);
		$.ig.VariantUtilities.prototype.writeVariantType(writer, type, encoding, value, alignBy4Bytes);
		if (alignBy4Bytes && (type & $.ig.VariantType.prototype.vector) == 0) {
			while (writer.baseStream().position() % 4 != 0) {
				writer.write5(0);
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.VariantUtilities::WriteVariant(System.IO.BinaryWriter, System.Text.Encoding, System.Object, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.VariantUtilities::WriteVariantType(System.IO.BinaryWriter, Infragistics.Documents.Core.StructuredStorage.FileTypes.VariantType, System.Text.Encoding, System.Object, System.Boolean)" />*/
	writeVariantType: function (writer, type, encoding, value, alignStringLengthBy4Bytes) {
		if ((type & $.ig.VariantType.prototype.vector) == $.ig.VariantType.prototype.vector) {
			var subType = type & ~$.ig.VariantType.prototype.vector;
			var array = value;
			var elementCount = array.length;
			writer.write9(elementCount);
			for (var i = 0; i < elementCount; i++) {
				$.ig.VariantUtilities.prototype.writeVariantType(writer, subType, encoding, array.getValue(i), false);
			}
			return;
		}
		switch (type) {
			case $.ig.VariantType.prototype.array:
			case $.ig.VariantType.prototype.bLOB:
			case $.ig.VariantType.prototype.bLOBObject:
			case $.ig.VariantType.prototype.bstr:
			case $.ig.VariantType.prototype.byRef:
			case $.ig.VariantType.prototype.cARRAY:
			case $.ig.VariantType.prototype.cF:
			case $.ig.VariantType.prototype.cLSID:
			case $.ig.VariantType.prototype.cY:
			case $.ig.VariantType.prototype.date:
			case $.ig.VariantType.prototype.dispatch:
			case $.ig.VariantType.prototype.error:
			case $.ig.VariantType.prototype.hresult:
			case $.ig.VariantType.prototype.pTR:
			case $.ig.VariantType.prototype.reserved:
			case $.ig.VariantType.prototype.safeArray:
			case $.ig.VariantType.prototype.storage:
			case $.ig.VariantType.prototype.stream:
			case $.ig.VariantType.prototype.streamedObject:
			case $.ig.VariantType.prototype.unknown:
			case $.ig.VariantType.prototype.userDefined:
			case $.ig.VariantType.prototype.vector:
			case $.ig.VariantType.prototype.vOID:
				$.ig.DocCoreUtils.prototype.debugFail("Don't know how to parse this variant type: " + $.ig.VariantType.prototype.getBox(type));
				break;
			case $.ig.VariantType.prototype.bool:
				writer.write4(value);
				break;
			case $.ig.VariantType.prototype.empty:
				writer.write9(0);
				break;
			case $.ig.VariantType.prototype.fileTime:
				writer.write10($.ig.Date.prototype.toFileTime((value)));
				break;
			case $.ig.VariantType.prototype.i1:
				writer.write11($.ig.util.getValue(value));
				break;
			case $.ig.VariantType.prototype.i2:
				writer.write8($.ig.util.getValue(value));
				break;
			case $.ig.VariantType.prototype.i4:
			case $.ig.VariantType.prototype.iNT:
				writer.write9($.ig.util.getValue(value));
				break;
			case $.ig.VariantType.prototype.i8:
				writer.write10($.ig.util.getValue(value));
				break;
			case $.ig.VariantType.prototype.lPSTR:
				$.ig.VariantUtilities.prototype.writeString(writer, encoding, value, alignStringLengthBy4Bytes);
				break;
			case $.ig.VariantType.prototype.lPWSTR:
				$.ig.VariantUtilities.prototype.writeString(writer, $.ig.Encoding.prototype.unicode(), value, alignStringLengthBy4Bytes);
				break;
			case $.ig.VariantType.prototype.$null:
				writer.write9(0);
				break;
			case $.ig.VariantType.prototype.r4:
				writer.write12(value);
				break;
			case $.ig.VariantType.prototype.r8:
				writer.write7(value);
				break;
			case $.ig.VariantType.prototype.uI1:
				writer.write5($.ig.util.getValue(value));
				break;
			case $.ig.VariantType.prototype.uI2:
				writer.write14($.ig.util.getValue(value));
				break;
			case $.ig.VariantType.prototype.uI4:
			case $.ig.VariantType.prototype.uINT:
				writer.write15($.ig.util.getValue(value));
				break;
			case $.ig.VariantType.prototype.uI8:
				writer.write16($.ig.util.getValue(value));
				break;
			case $.ig.VariantType.prototype.variant:
				$.ig.VariantUtilities.prototype.writeVariant1(writer, encoding, value, alignStringLengthBy4Bytes);
				break;
			default:
				$.ig.DocCoreUtils.prototype.debugFail("Unknown property type");
				break;
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.VariantUtilities::WriteVariantType(System.IO.BinaryWriter, Infragistics.Documents.Core.StructuredStorage.FileTypes.VariantType, System.Text.Encoding, System.Object, System.Boolean)" />*/
	,
	$type: new $.ig.Type('VariantUtilities', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Core.VariantUtilities" />*/

/*<BeginType Name="Infragistics.Documents.Core.DocumentEncryptedException" />*/

$.ig.documentsCore.DocumentEncryptedException = $.ig.util.defType('documentsCore.DocumentEncryptedException', 'InvalidOperationException', {
	init: function () {
		var initNumber;
		if (arguments.length === 0) {
			initNumber = 0;
		} else if (arguments.length === 1) {
			initNumber = 1;
		} else if (arguments.length === 2) {
			initNumber = 2;
		}
		if (initNumber > 0) {
			switch (initNumber) {
				case 1:
					this._init1.apply(this, arguments);
					break;
				case 2:
					this._init2.apply(this, arguments);
					break;
				default: throw new Error('Invalid arguments');
			}
			return;
		}
		$.ig.InvalidOperationException.prototype.init1.call(this, 1, $ig.documentsCore.locale.getString("LE_DocumentEncryptedException_DefaultMessage"));
	},
	_init1: function (message) {
		$.ig.InvalidOperationException.prototype.init1.call(this, 1, message);
	},
	_init2: function (message, innerException) {
		$.ig.InvalidOperationException.prototype.init2.call(this, 2, message, innerException);
	},
	$type: new $.ig.Type('documentsCore.DocumentEncryptedException', $.ig.InvalidOperationException.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Core.DocumentEncryptedException" />*/

/*<BeginType Name="Infragistics.Documents.Core.MsoCrypto.CryptoUtilities" />*/

$.ig.util.defType('CryptoUtilities', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.MsoCrypto.CryptoUtilities::SetAll`1(, Infragistics.Documents.Core.MsoCrypto.CryptoUtilities.T)" />*/
	setAll$1: function ($t, arr, value) {
		for (var i = 0; i < arr.length; i++) {
			arr[i] = value;
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.MsoCrypto.CryptoUtilities::SetAll`1(, Infragistics.Documents.Core.MsoCrypto.CryptoUtilities.T)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.Documents.Core.MsoCrypto.CryptoUtilities::ToBase64String()" />*/
	toBase64String: function (data) {
		return $.ig.Convert.prototype.toBase64String(data);
	}
	/*<EndMethod Name="System.String Infragistics.Documents.Core.MsoCrypto.CryptoUtilities::ToBase64String()" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.Documents.Core.MsoCrypto.CryptoUtilities::ReadUnicodeLpP4(System.IO.BinaryReader)" />*/
	readUnicodeLpP4: function (reader) {
		var length = reader.readUInt32();
		$.ig.DocCoreUtils.prototype.debugAssert(length % 2 == 0, "The length MUST be a multiple of 2 bytes");
		$.ig.DocCoreUtils.prototype.debugAssert(length <= 0x7FFFFFFF, "The length cannot fit into an integer.");
		var data = reader.readBytes(length);
		while (length % 4 != 0) {
			reader.readByte();
			length++;
		}
		return $.ig.Encoding.prototype.unicode().getString1(data, 0, data.length);
	}
	/*<EndMethod Name="System.String Infragistics.Documents.Core.MsoCrypto.CryptoUtilities::ReadUnicodeLpP4(System.IO.BinaryReader)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.MsoCrypto.CryptoUtilities::WriteUnicodeLpP4(System.String, System.IO.BinaryWriter)" />*/
	writeUnicodeLpP4: function (value, writer) {
		var data = $.ig.Encoding.prototype.unicode().getBytes1(value);
		writer.write15($.ig.util.intSToU(data.length));
		writer.write(data);
		for (var totalLength = data.length; totalLength % 4 != 0; totalLength++) {
			writer.write5(0);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.MsoCrypto.CryptoUtilities::WriteUnicodeLpP4(System.String, System.IO.BinaryWriter)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.Documents.Core.MsoCrypto.CryptoUtilities::ReadUTF8LpP4(System.IO.BinaryReader)" />*/
	readUTF8LpP4: function (reader) {
		var length = reader.readUInt32();
		$.ig.DocCoreUtils.prototype.debugAssert(length <= 0x7FFFFFFF, "The length cannot fit into an integer.");
		if (length == 0) {
			return null;
		}
		if (length == 4) {
			return String.empty();
		}
		var data = reader.readBytes(length);
		while (length % 4 != 0) {
			reader.readByte();
			length++;
		}
		return $.ig.Encoding.prototype.uTF8().getString(data);
	}
	/*<EndMethod Name="System.String Infragistics.Documents.Core.MsoCrypto.CryptoUtilities::ReadUTF8LpP4(System.IO.BinaryReader)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.MsoCrypto.CryptoUtilities::WriteUTF8LpP4(System.String, System.IO.BinaryWriter)" />*/
	writeUTF8LpP4: function (value, writer) {
		if (value == null) {
			writer.write15($.ig.util.intSToU(0));
			return;
		}
		if (value.length == 0) {
			writer.write15($.ig.util.intSToU(4));
			return;
		}
		var data = $.ig.Encoding.prototype.uTF8().getBytes1(value);
		writer.write15($.ig.util.intSToU(data.length));
		writer.write(data);
		for (var totalLength = data.length; totalLength % 4 != 0; totalLength++) {
			writer.write5(0);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.MsoCrypto.CryptoUtilities::WriteUTF8LpP4(System.String, System.IO.BinaryWriter)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.MsoCrypto.CryptoUtilities::WriteUInt16(System.IO.Stream, System.UInt16)" />*/
	writeUInt16: function (stream, value) {
		stream.write($.ig.BitConverter.prototype.getBytes7(value), 0, 2);
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.MsoCrypto.CryptoUtilities::WriteUInt16(System.IO.Stream, System.UInt16)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.MsoCrypto.CryptoUtilities::WriteUInt32(System.IO.Stream, System.UInt32)" />*/
	writeUInt32: function (stream, value) {
		stream.write($.ig.BitConverter.prototype.getBytes8(value), 0, 4);
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.MsoCrypto.CryptoUtilities::WriteUInt32(System.IO.Stream, System.UInt32)" />*/
	,
	$type: new $.ig.Type('CryptoUtilities', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Core.MsoCrypto.CryptoUtilities" />*/

/*<BeginType Name="Infragistics.Documents.Core.MsoCrypto.InPlaceTransform" />*/

$.ig.util.defType('InPlaceTransform', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginProperty Name="Infragistics.Documents.Core.MsoCrypto.InPlaceTransform Infragistics.Documents.Core.MsoCrypto.InPlaceTransform::NoTransform()" />*/
	noTransform: function () {
		if ($.ig.InPlaceTransform.prototype.__noTransform == null) {
			$.ig.InPlaceTransform.prototype.__noTransform = new $.ig.InPlaceTransform_NoTransformImpl();
		}
		return $.ig.InPlaceTransform.prototype.__noTransform;
	}
	/*<EndProperty Name="Infragistics.Documents.Core.MsoCrypto.InPlaceTransform Infragistics.Documents.Core.MsoCrypto.InPlaceTransform::NoTransform()" />*/
	,
	__suspendEncryptionCount: 0,
	/*<BeginProperty Name="System.Boolean Infragistics.Documents.Core.MsoCrypto.InPlaceTransform::IsEncryptionSuspended()" />*/
	isEncryptionSuspended: function () {
		return this.__suspendEncryptionCount > 0;
	}
	/*<EndProperty Name="System.Boolean Infragistics.Documents.Core.MsoCrypto.InPlaceTransform::IsEncryptionSuspended()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.MsoCrypto.InPlaceTransform::OnPostProcessComplete()" />*/
	onPostProcessComplete: function () {
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.MsoCrypto.InPlaceTransform::OnPostProcessComplete()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.Documents.Core.MsoCrypto.InPlaceTransform::SupportsPostProcessingBlocks()" />*/
	supportsPostProcessingBlocks: function () {
		return false;
	}
	/*<EndProperty Name="System.Boolean Infragistics.Documents.Core.MsoCrypto.InPlaceTransform::SupportsPostProcessingBlocks()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.MsoCrypto.InPlaceTransform::PostProcessBlock(System.IO.Stream, System.Int32)" />*/
	postProcessBlock: function (stream, blockLength) {
		if (this.isEncryptionSuspended()) {
			return;
		}
		this.postProcessBlockCore(stream, blockLength);
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.MsoCrypto.InPlaceTransform::PostProcessBlock(System.IO.Stream, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.MsoCrypto.InPlaceTransform::PostProcessBlockCore(System.IO.Stream, System.Int32)" />*/
	postProcessBlockCore: function (stream, blockLength) {
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.MsoCrypto.InPlaceTransform::PostProcessBlockCore(System.IO.Stream, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.MsoCrypto.InPlaceTransform::ResumeTransformations()" />*/
	resumeTransformations: function () {
		if (this.__suspendEncryptionCount == 0) {
			$.ig.DocCoreUtils.prototype.debugFail("Unbalanced ResumeEncryption call.");
			return;
		}
		this.__suspendEncryptionCount--;
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.MsoCrypto.InPlaceTransform::ResumeTransformations()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.MsoCrypto.InPlaceTransform::SetCurrentBlockLength(System.Int32)" />*/
	setCurrentBlockLength: function (blockLength) {
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.MsoCrypto.InPlaceTransform::SetCurrentBlockLength(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.MsoCrypto.InPlaceTransform::SuspendTransformations()" />*/
	suspendTransformations: function () {
		this.__suspendEncryptionCount++;
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.MsoCrypto.InPlaceTransform::SuspendTransformations()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.MsoCrypto.InPlaceTransform::Transform(System.Int64, , System.Int32, System.Int32)" />*/
	transform: function (streamPosition, buffer, offset, count) {
		if (this.isEncryptionSuspended()) {
			return;
		}
		this.transformCore(streamPosition, buffer, offset, count);
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.MsoCrypto.InPlaceTransform::Transform(System.Int64, , System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.MsoCrypto.InPlaceTransform::TransformCore(System.Int64, , System.Int32, System.Int32)" />*/
	transformCore: function (streamPosition, buffer, offset, count) {
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.MsoCrypto.InPlaceTransform::TransformCore(System.Int64, , System.Int32, System.Int32)" />*/
	,
	$type: new $.ig.Type('InPlaceTransform', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Core.MsoCrypto.InPlaceTransform" />*/

/*<BeginType Name="Infragistics.Documents.Core.MsoCrypto.InPlaceTransform_NoTransformImpl" />*/

$.ig.util.defType('InPlaceTransform_NoTransformImpl', 'InPlaceTransform', {
	init: function () {
		$.ig.InPlaceTransform.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.MsoCrypto.InPlaceTransform_NoTransformImpl::TransformCore(System.Int64, , System.Int32, System.Int32)" />*/
	transformCore: function (streamPosition, buffer, offset, count) {
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.MsoCrypto.InPlaceTransform_NoTransformImpl::TransformCore(System.Int64, , System.Int32, System.Int32)" />*/
	,
	$type: new $.ig.Type('InPlaceTransform_NoTransformImpl', $.ig.InPlaceTransform.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Core.MsoCrypto.InPlaceTransform_NoTransformImpl" />*/

/*<BeginType Name="Infragistics.Documents.Core.MsoCrypto.OleDataSpaces" />*/

$.ig.util.defType('OleDataSpaces', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.MsoCrypto.OleDataSpaces::Encrypt(System.IO.Stream, Infragistics.Documents.Core.MsoCrypto.OleDataSpacesEncryptionMode, , System.Func)" />*/
	encrypt: function (stream, encryptionMode, passwordUnicode, savePackageAction) {
		switch (encryptionMode) {
			default:
				$.ig.DocCoreUtils.prototype.debugFail("Unknown OleDataSpacesEncryptionMode: " + $.ig.OleDataSpacesEncryptionMode.prototype.getBox(encryptionMode));
				return null;
		}
	}
	/*<EndMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.MsoCrypto.OleDataSpaces::Encrypt(System.IO.Stream, Infragistics.Documents.Core.MsoCrypto.OleDataSpacesEncryptionMode, , System.Func)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Core.MsoCrypto.OleDataSpaces::IsEncrypted(Infragistics.Documents.Core.StructuredStorage.StructuredStorageManager)" />*/
	isEncrypted: function (manager) {
		return manager._getFileStream($.ig.OleDataSpaces.prototype._encryptionInfoFileName) != null && manager._getFileStream($.ig.OleDataSpaces.prototype._encryptedPackageFileName) != null;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Core.MsoCrypto.OleDataSpaces::IsEncrypted(Infragistics.Documents.Core.StructuredStorage.StructuredStorageManager)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.MsoCrypto.OleDataSpaces::TryDecrypt(System.IO.Stream, System.Func, System.Func, System.Action, System.Action)" />*/
	tryDecrypt: function (stream, getPasswordUnicode, loadPackageAction, throwInvalidPasswordException, throwEncryptionAlgorithmNotSupportedException) {
		if ($.ig.StructuredStorageManager.prototype._isStructuredStorageStream(stream) == false) {
			return $.ig.WorkItem.prototype.fromResult$1($.ig.Boolean.prototype.$type, false);
		}
		var originalPosition = stream.position();
		return $.ig.WorkItemExtensions.prototype.then$2($.ig.Boolean.prototype.$type, $.ig.Boolean.prototype.$type, $.ig.Async.prototype.using$2($.ig.StructuredStorageManager.prototype.$type, $.ig.Boolean.prototype.$type, new $.ig.StructuredStorageManager(stream, true), function (manager) {
			{
				var encryptionInfoStream = manager._getFileStream($.ig.OleDataSpaces.prototype._encryptionInfoFileName);
				try {
					if (encryptionInfoStream != null) {
						throwInvalidPasswordException();
					}
				}
				finally {
					if (encryptionInfoStream != null) {
						encryptionInfoStream.dispose();
					}
				}
			}
			return $.ig.WorkItem.prototype.fromResult$1($.ig.Boolean.prototype.$type, false);
		}), function (t) {
			if ($.ig.WorkItemExtensions.prototype.getResult$1($.ig.Boolean.prototype.$type, t)) {
				return true;
			}
			stream.position(originalPosition);
			return false;
		}, 0);
	}
	/*<EndMethod Name="Infragistics.Documents.Core.WorkItem Infragistics.Documents.Core.MsoCrypto.OleDataSpaces::TryDecrypt(System.IO.Stream, System.Func, System.Func, System.Action, System.Action)" />*/
	,
	$type: new $.ig.Type('OleDataSpaces', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Core.MsoCrypto.OleDataSpaces" />*/

/*<BeginType Name="Infragistics.Documents.Core.MsoCrypto.ProtectionValidationInfo" />*/

$.ig.util.defType('ProtectionValidationInfo', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Core.MsoCrypto.ProtectionValidationInfo Infragistics.Documents.Core.MsoCrypto.ProtectionValidationInfo::Create(System.UInt16)" />*/
	create1: function (xorObfuscationVerifier) {
		return new $.ig.ProtectionValidationInfo_XorObfuscation(xorObfuscationVerifier);
	}
	/*<EndMethod Name="Infragistics.Documents.Core.MsoCrypto.ProtectionValidationInfo Infragistics.Documents.Core.MsoCrypto.ProtectionValidationInfo::Create(System.UInt16)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Core.MsoCrypto.ProtectionValidationInfo Infragistics.Documents.Core.MsoCrypto.ProtectionValidationInfo::Create(System.String, , , System.UInt32)" />*/
	create: function (algorithmName, hashValue, saltValue, spinCount) {
		return new $.ig.ProtectionValidationInfo_Strict(algorithmName, hashValue, saltValue, spinCount);
	}
	/*<EndMethod Name="Infragistics.Documents.Core.MsoCrypto.ProtectionValidationInfo Infragistics.Documents.Core.MsoCrypto.ProtectionValidationInfo::Create(System.String, , , System.UInt32)" />*/
	,
	/*<BeginMethod Name=" Infragistics.Documents.Core.MsoCrypto.ProtectionValidationInfo::GetStrictVerifier(, System.String, , System.UInt32)" />*/
	getStrictVerifier: function (passwordUnicode, algorithmName, saltValue, spinCount) {
		saltValue = passwordUnicode = null;
		algorithmName = null;
		spinCount = 0;
		return {
			ret: null,
			p1: algorithmName,
			p2: saltValue,
			p3: spinCount
		};
	}
	/*<EndMethod Name=" Infragistics.Documents.Core.MsoCrypto.ProtectionValidationInfo::GetStrictVerifier(, System.String, , System.UInt32)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Core.MsoCrypto.ProtectionValidationInfo::GetStrictVerifier(System.String, , , System.Nullable)" />*/
	getStrictVerifier1: function (algorithmName, hashValue, saltValue, spinCount) {
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Core.MsoCrypto.ProtectionValidationInfo::GetStrictVerifier(System.String, , , System.Nullable)" />*/
	,
	/*<BeginMethod Name="System.Nullable Infragistics.Documents.Core.MsoCrypto.ProtectionValidationInfo::GetXorObfuscationVerifier()" />*/
	getXorObfuscationVerifier: function () {
	}
	/*<EndMethod Name="System.Nullable Infragistics.Documents.Core.MsoCrypto.ProtectionValidationInfo::GetXorObfuscationVerifier()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Core.MsoCrypto.ProtectionValidationInfo::HasVerifier()" />*/
	hasVerifier: function () {
		var $self = this;
		var pwd = this.getXorObfuscationVerifier();
		if (pwd.hasValue() && pwd.value() != 0) {
			return true;
		}
		var algorithmName;
		var hashValue, saltValue;
		var spinCount;
		if ((function () { var $ret = $self.getStrictVerifier1(algorithmName, hashValue, saltValue, spinCount); algorithmName = $ret.p0; hashValue = $ret.p1; saltValue = $ret.p2; spinCount = $ret.p3; return $ret.ret; }())) {
			return true;
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Core.MsoCrypto.ProtectionValidationInfo::HasVerifier()" />*/
	,
	$type: new $.ig.Type('ProtectionValidationInfo', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Core.MsoCrypto.ProtectionValidationInfo" />*/

/*<BeginType Name="Infragistics.Documents.Core.MsoCrypto.ProtectionValidationInfo_XorObfuscation" />*/

$.ig.util.defType('ProtectionValidationInfo_XorObfuscation', 'ProtectionValidationInfo', {
	__verifier: 0,
	init: function (verifier) {
		$.ig.ProtectionValidationInfo.prototype.init.call(this);
		this.__verifier = verifier;
	},
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Core.MsoCrypto.ProtectionValidationInfo_XorObfuscation::GetStrictVerifier(System.String, , , System.Nullable)" />*/
	getStrictVerifier1: function (algorithmName, hashValue, saltValue, spinCount) {
		algorithmName = null;
		hashValue = saltValue = null;
		spinCount = $.ig.util.toNullable($.ig.Number.prototype.$type, null);
		return {
			ret: false,
			p0: algorithmName,
			p1: hashValue,
			p2: saltValue,
			p3: spinCount
		};
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Core.MsoCrypto.ProtectionValidationInfo_XorObfuscation::GetStrictVerifier(System.String, , , System.Nullable)" />*/
	,
	/*<BeginMethod Name="System.Nullable Infragistics.Documents.Core.MsoCrypto.ProtectionValidationInfo_XorObfuscation::GetXorObfuscationVerifier()" />*/
	getXorObfuscationVerifier: function () {
		return $.ig.util.toNullable($.ig.Number.prototype.$type, this.__verifier);
	}
	/*<EndMethod Name="System.Nullable Infragistics.Documents.Core.MsoCrypto.ProtectionValidationInfo_XorObfuscation::GetXorObfuscationVerifier()" />*/
	,
	$type: new $.ig.Type('ProtectionValidationInfo_XorObfuscation', $.ig.ProtectionValidationInfo.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Core.MsoCrypto.ProtectionValidationInfo_XorObfuscation" />*/

/*<BeginType Name="Infragistics.Documents.Core.MsoCrypto.ProtectionValidationInfo_Strict" />*/

$.ig.util.defType('ProtectionValidationInfo_Strict', 'ProtectionValidationInfo', {
	__algorithmName: null,
	__hashValue: null,
	__saltValue: null,
	__spinCount: 0,
	init: function (algorithmName, hashValue, saltValue, spinCount) {
		$.ig.ProtectionValidationInfo.prototype.init.call(this);
		this.__algorithmName = algorithmName;
		this.__hashValue = hashValue;
		this.__saltValue = saltValue;
		this.__spinCount = spinCount;
	},
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Core.MsoCrypto.ProtectionValidationInfo_Strict::GetStrictVerifier(System.String, , , System.Nullable)" />*/
	getStrictVerifier1: function (algorithmName, hashValue, saltValue, spinCount) {
		algorithmName = this.__algorithmName;
		hashValue = this.__hashValue;
		saltValue = this.__saltValue;
		spinCount = $.ig.util.toNullable($.ig.Number.prototype.$type, this.__spinCount);
		return {
			ret: true,
			p0: algorithmName,
			p1: hashValue,
			p2: saltValue,
			p3: spinCount
		};
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Core.MsoCrypto.ProtectionValidationInfo_Strict::GetStrictVerifier(System.String, , , System.Nullable)" />*/
	,
	/*<BeginMethod Name="System.Nullable Infragistics.Documents.Core.MsoCrypto.ProtectionValidationInfo_Strict::GetXorObfuscationVerifier()" />*/
	getXorObfuscationVerifier: function () {
		return $.ig.util.toNullable($.ig.Number.prototype.$type, null);
	}
	/*<EndMethod Name="System.Nullable Infragistics.Documents.Core.MsoCrypto.ProtectionValidationInfo_Strict::GetXorObfuscationVerifier()" />*/
	,
	$type: new $.ig.Type('ProtectionValidationInfo_Strict', $.ig.ProtectionValidationInfo.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Core.MsoCrypto.ProtectionValidationInfo_Strict" />*/

/*<BeginType Name="Infragistics.Documents.Core.StructuredStorage.DirectoryEntry" />*/

$.ig.util.defType('DirectoryEntry', 'Object', {
	_firstSectorId: 0,
	_name: null,
	_size: 0,
	_timeStampCreation: null,
	_timeStampModification: null,
	_uniqueIdentifier: null,
	_userFlags: null,
	_parent: null,
	_node: null,
	init: function (name, node) {
		$.ig.Object.prototype.init.call(this);
		this._name = name;
		this._node = node;
	},
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.DirectoryEntry::VerifySize(, System.Int32)" />*/
	verifySize: function (newValue, requiredLength) {
		if (newValue.length != requiredLength) {
			$.ig.DocCoreUtils.prototype.debugFail("The data has an invalid size.");
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.DirectoryEntry::VerifySize(, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Core.StructuredStorage.DirectoryEntry::FirstSectorId()" />*/
	firstSectorId: function (value) {
		if (arguments.length === 1) {
			this._firstSectorId = value;
			return value;
		} else {
			return this._firstSectorId;
		}
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Core.StructuredStorage.DirectoryEntry::FirstSectorId()" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Core.StructuredStorage.DirectoryEntry::Name()" />*/
	name: function () {
		return this._name;
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Core.StructuredStorage.DirectoryEntry::Name()" />*/
	,
	/*<BeginProperty Name="Infragistics.Documents.Core.StructuredStorage.DirectoryStream_DirectoryEntryNode Infragistics.Documents.Core.StructuredStorage.DirectoryEntry::Node()" />*/
	node: function () {
		return this._node;
	}
	/*<EndProperty Name="Infragistics.Documents.Core.StructuredStorage.DirectoryStream_DirectoryEntryNode Infragistics.Documents.Core.StructuredStorage.DirectoryEntry::Node()" />*/
	,
	/*<BeginProperty Name="Infragistics.Documents.Core.StructuredStorage.Directory Infragistics.Documents.Core.StructuredStorage.DirectoryEntry::Parent()" />*/
	parent: function (value) {
		if (arguments.length === 1) {
			this._parent = value;
			return value;
		} else {
			return this._parent;
		}
	}
	/*<EndProperty Name="Infragistics.Documents.Core.StructuredStorage.Directory Infragistics.Documents.Core.StructuredStorage.DirectoryEntry::Parent()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Core.StructuredStorage.DirectoryEntry::Size()" />*/
	size: function (value) {
		if (arguments.length === 1) {
			this._size = value;
			return value;
		} else {
			return this._size;
		}
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Core.StructuredStorage.DirectoryEntry::Size()" />*/
	,
	/*<BeginProperty Name=" Infragistics.Documents.Core.StructuredStorage.DirectoryEntry::TimeStampCreation()" />*/
	timeStampCreation: function (value) {
		if (arguments.length === 1) {
			$.ig.DirectoryEntry.prototype.verifySize(value, 8);
			this._timeStampCreation = value;
			return value;
		} else {
			if (this._timeStampCreation == null) {
				this._timeStampCreation = new Array(8);
			}
			return this._timeStampCreation;
		}
	}
	/*<EndProperty Name=" Infragistics.Documents.Core.StructuredStorage.DirectoryEntry::TimeStampCreation()" />*/
	,
	/*<BeginProperty Name=" Infragistics.Documents.Core.StructuredStorage.DirectoryEntry::TimeStampModification()" />*/
	timeStampModification: function (value) {
		if (arguments.length === 1) {
			$.ig.DirectoryEntry.prototype.verifySize(value, 8);
			this._timeStampModification = value;
			return value;
		} else {
			if (this._timeStampModification == null) {
				this._timeStampModification = new Array(8);
			}
			return this._timeStampModification;
		}
	}
	/*<EndProperty Name=" Infragistics.Documents.Core.StructuredStorage.DirectoryEntry::TimeStampModification()" />*/
	,
	/*<BeginProperty Name=" Infragistics.Documents.Core.StructuredStorage.DirectoryEntry::UniqueIdentifier()" />*/
	uniqueIdentifier: function (value) {
		if (arguments.length === 1) {
			$.ig.DirectoryEntry.prototype.verifySize(value, 16);
			this._uniqueIdentifier = value;
			return value;
		} else {
			if (this._uniqueIdentifier == null) {
				this._uniqueIdentifier = new Array(16);
			}
			return this._uniqueIdentifier;
		}
	}
	/*<EndProperty Name=" Infragistics.Documents.Core.StructuredStorage.DirectoryEntry::UniqueIdentifier()" />*/
	,
	/*<BeginProperty Name=" Infragistics.Documents.Core.StructuredStorage.DirectoryEntry::UserFlags()" />*/
	userFlags: function (value) {
		if (arguments.length === 1) {
			$.ig.DirectoryEntry.prototype.verifySize(value, 4);
			this._userFlags = value;
			return value;
		} else {
			if (this._userFlags == null) {
				this._userFlags = new Array(4);
			}
			return this._userFlags;
		}
	}
	/*<EndProperty Name=" Infragistics.Documents.Core.StructuredStorage.DirectoryEntry::UserFlags()" />*/
	,
	/*<BeginProperty Name="System.Collections.Generic.IComparer Infragistics.Documents.Core.StructuredStorage.DirectoryEntry::EntryNameComparer()" />*/
	entryNameComparer: function () {
		if ($.ig.DirectoryEntry.prototype._entryNameComparer == null) {
			$.ig.DirectoryEntry.prototype._entryNameComparer = new $.ig.DirectoryEntry_NameComparer();
		}
		return $.ig.DirectoryEntry.prototype._entryNameComparer;
	}
	/*<EndProperty Name="System.Collections.Generic.IComparer Infragistics.Documents.Core.StructuredStorage.DirectoryEntry::EntryNameComparer()" />*/
	,
	$type: new $.ig.Type('DirectoryEntry', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Core.StructuredStorage.DirectoryEntry" />*/

/*<BeginType Name="Infragistics.Documents.Core.StructuredStorage.Directory" />*/

$.ig.util.defType('Directory', 'DirectoryEntry', {
	_children: null,
	init: function (name, node) {
		$.ig.DirectoryEntry.prototype.init.call(this, name, node);
		this._children = new $.ig.List$1($.ig.DirectoryEntry.prototype.$type, 0);
	},
	/*<BeginMethod Name="Infragistics.Documents.Core.StructuredStorage.File Infragistics.Documents.Core.StructuredStorage.Directory::AddFile(System.String, Infragistics.Documents.Core.StructuredStorage.DirectoryStream)" />*/
	addFile: function (fileName, directoryStream) {
		var node = new $.ig.DirectoryStream_DirectoryEntryNode();
		var newEntry = null;
		var finalFile;
		var separatorIndex = fileName.indexOf('\\');
		if (separatorIndex < 0) {
			for (var i = 0; i < this.children().count(); i++) {
				var file = $.ig.util.cast($.ig.File.prototype.$type, this.children().__inner[i]);
				if (file != null && file.name() == fileName) {
					$.ig.DocCoreUtils.prototype.debugFail("The file already exists");
					return file;
				}
			}
			finalFile = new $.ig.File(fileName, node);
			newEntry = finalFile;
		} else {
			var directoryName = fileName.substr(0, separatorIndex);
			for (var i1 = 0; i1 < this.children().count(); i1++) {
				var directory = $.ig.util.cast($.ig.Directory.prototype.$type, this.children().__inner[i1]);
				if (directory != null && directory.name() == directoryName) {
					return directory.addFile(fileName.substr(separatorIndex + 1), directoryStream);
				}
			}
			var newDirectory = new $.ig.Directory(directoryName, node);
			finalFile = newDirectory.addFile(fileName.substr(separatorIndex + 1), directoryStream);
			newEntry = newDirectory;
		}
		newEntry.firstSectorId($.ig.StructuredStorageManager.prototype._endOfStreamSectorId);
		newEntry.timeStampCreation($.ig.BitConverter.prototype.getBytes5($.ig.Date.prototype.toFileTime($.ig.Date.prototype.now())));
		newEntry.timeStampModification(newEntry.timeStampCreation());
		node._childProperty = -1;
		node._leftSiblingProperty = -1;
		node._rightSiblingProperty = -1;
		node._color = $.ig.DirectoryStream_NodeColor.prototype.red;
		node._entry = newEntry;
		newEntry.parent(this);
		var insertionIndex;
		for (insertionIndex = 0; insertionIndex < this.children().count(); insertionIndex++) {
			if ($.ig.DirectoryEntry.prototype.entryNameComparer().compare(newEntry, this.children().__inner[insertionIndex]) < 0) {
				break;
			}
		}
		this.children().insert(insertionIndex, newEntry);
		directoryStream._directoryEntryNodes().add(node);
		return finalFile;
	}
	/*<EndMethod Name="Infragistics.Documents.Core.StructuredStorage.File Infragistics.Documents.Core.StructuredStorage.Directory::AddFile(System.String, Infragistics.Documents.Core.StructuredStorage.DirectoryStream)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Core.StructuredStorage.File Infragistics.Documents.Core.StructuredStorage.Directory::GetFile(System.String, System.String)" />*/
	getFile: function (currentPath, fileName) {
		for (var i = 0; i < this._children.count(); i++) {
			var entry = this._children.__inner[i];
			var newPath = currentPath + entry.name();
			var dir = $.ig.util.cast($.ig.Directory.prototype.$type, entry);
			if (dir != null) {
				if (fileName.startsWith1(newPath, $.ig.StringUtilities.prototype.stringComparisonInvariantCultureIgnoreCase())) {
					return dir.getFile(newPath + '\\', fileName);
				}
			} else if (!$.ig.util.stringCompare1(newPath, fileName, $.ig.StringUtilities.prototype.stringComparisonInvariantCultureIgnoreCase())) {
				return entry;
			}
		}
		return null;
	}
	/*<EndMethod Name="Infragistics.Documents.Core.StructuredStorage.File Infragistics.Documents.Core.StructuredStorage.Directory::GetFile(System.String, System.String)" />*/
	,
	/*<BeginProperty Name="System.Collections.Generic.List Infragistics.Documents.Core.StructuredStorage.Directory::Children()" />*/
	children: function () {
		return this._children;
	}
	/*<EndProperty Name="System.Collections.Generic.List Infragistics.Documents.Core.StructuredStorage.Directory::Children()" />*/
	,
	$type: new $.ig.Type('Directory', $.ig.DirectoryEntry.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Core.StructuredStorage.Directory" />*/

/*<BeginType Name="Infragistics.Documents.Core.StructuredStorage.DirectoryEntry_NameComparer" />*/

$.ig.util.defType('DirectoryEntry_NameComparer', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Int32 Infragistics.Documents.Core.StructuredStorage.DirectoryEntry_NameComparer::Compare(Infragistics.Documents.Core.StructuredStorage.DirectoryEntry, Infragistics.Documents.Core.StructuredStorage.DirectoryEntry)" />*/
	compare: function (x, y) {
		if (x.name().length < y.name().length) {
			return -1;
		}
		if (x.name().length == y.name().length) {
			return $.ig.util.stringCompare1(x.name(), y.name(), $.ig.StringComparison.prototype.ordinalIgnoreCase);
		}
		return 1;
	}
	/*<EndMethod Name="System.Int32 Infragistics.Documents.Core.StructuredStorage.DirectoryEntry_NameComparer::Compare(Infragistics.Documents.Core.StructuredStorage.DirectoryEntry, Infragistics.Documents.Core.StructuredStorage.DirectoryEntry)" />*/
	,
	$type: new $.ig.Type('DirectoryEntry_NameComparer', $.ig.Object.prototype.$type, [$.ig.IComparer$1.prototype.$type.specialize($.ig.DirectoryEntry.prototype.$type)])
}, true);

/*<EndType Name="Infragistics.Documents.Core.StructuredStorage.DirectoryEntry_NameComparer" />*/

/*<BeginType Name="Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream" />*/

$.ig.util.defType('StructuredStorageStream', 'Stream', {
	__storageManager: null,
	__containerStream: null,
	__firstSectorId: 0,
	__sectorSize: 0,
	__isShortStream: false,
	__length: 0,
	__position: 0,
	__currentSectorId: 0,
	__currentSectorIndex: 0,
	__positionInCurrentSector: 0,
	__cachedContainerStreamPosition: 0,
	__readBuffer: null,
	init: function (initNumber, structuredStorage, firstSectorId, length) {
		if (initNumber > 0) {
			switch (initNumber) {
				case 1:
					this.init1.apply(this, arguments);
					break;
			}
			return;
		}
		$.ig.StructuredStorageStream.prototype.init1.call(this, 1, structuredStorage, firstSectorId, length, false);
	},
	init1: function (initNumber, structuredStorage, firstSectorId, length, isShortStream) {
		$.ig.Stream.prototype.init.call(this);
		this.__readBuffer = new Array(8);
		this.__storageManager = structuredStorage;
		this.__firstSectorId = firstSectorId;
		this.__length = length;
		this.__isShortStream = isShortStream;
		$.ig.DocCoreUtils.prototype.debugAssert(this.__firstSectorId >= 0 || this.__length == 0, null);
		this._resetCache();
	},
	/*<BeginProperty Name="System.Boolean Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream::CanRead()" />*/
	canRead: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream::CanRead()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream::CanSeek()" />*/
	canSeek: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream::CanSeek()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream::CanWrite()" />*/
	canWrite: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream::CanWrite()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream::Dispose(System.Boolean)" />*/
	disposeCore: function (disposing) {
		if (disposing) {
			if (this.__storageManager != null && this.__storageManager._isDirty()) {
				var remainder = this.length() % this.__sectorSize;
				if (remainder != 0) {
					this.position(this.length());
					var remainingBytes = (this.__sectorSize - remainder);
					var paddingData = new Array(remainingBytes);
					this._writeToCurrentSector(paddingData, 0, paddingData.length);
				}
			}
		}
		$.ig.Stream.prototype.disposeCore.call(this, disposing);
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream::Dispose(System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream::Flush()" />*/
	flush: function () {
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream::Flush()" />*/
	,
	/*<BeginProperty Name="System.Int64 Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream::Length()" />*/
	length: function () {
		return this.__length;
	}
	/*<EndProperty Name="System.Int64 Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream::Length()" />*/
	,
	/*<BeginProperty Name="System.Int64 Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream::Position()" />*/
	position: function (value) {
		if (arguments.length === 1) {
			if (this.__position == value) {
				return;
			}
			if (value < 0) {
				$.ig.DocCoreUtils.prototype.debugFail("Invalid stream position");
				return;
			}
			var difference = (value - this.__position);
			var newPositionInCurrentSector = this.__positionInCurrentSector + difference;
			this.__position = value;
			if (0 <= newPositionInCurrentSector && newPositionInCurrentSector < this.__sectorSize && this.__cachedContainerStreamPosition == this.__containerStream.position()) {
				this.__positionInCurrentSector = newPositionInCurrentSector;
				this.__cachedContainerStreamPosition += difference;
				this.__containerStream.position(this.__cachedContainerStreamPosition);
			} else {
				var oldCurrentSectorIndex = this.__currentSectorIndex;
				var oldCurrentSectorId = this.__currentSectorId;
				var oldPositionInCurrentSector = this.__positionInCurrentSector;
				this._syncPositionMembers();
				if (this.__currentSectorId >= 0) {
					this.__cachedContainerStreamPosition = this.__storageManager._getSectorPosition(this.__currentSectorId, this.__positionInCurrentSector, this.__isShortStream);
				} else {
					this.__currentSectorIndex = oldCurrentSectorIndex;
					this.__currentSectorId = oldCurrentSectorId;
					this.__positionInCurrentSector = oldPositionInCurrentSector;
					this.__cachedContainerStreamPosition = -1;
				}
			}
			return value;
		} else {
			return this.__position;
		}
	}
	/*<EndProperty Name="System.Int64 Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream::Position()" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream::Read(, System.Int32, System.Int32)" />*/
	read: function (buffer, offset, count) {
		if (buffer == null) {
			$.ig.DocCoreUtils.prototype.debugFail("The buffer cannot be null.");
			return 0;
		}
		if (offset < 0) {
			$.ig.DocCoreUtils.prototype.debugFail("The offset cannot be less than zero.");
			return 0;
		}
		if (count < 0) {
			$.ig.DocCoreUtils.prototype.debugFail("The count cannot be less than zero.");
			return 0;
		}
		if (offset + count > buffer.length) {
			$.ig.DocCoreUtils.prototype.debugFail("Cannot write past the end of the buffer.");
			return 0;
		}
		var bytesToRead = Math.min(count, (this.__length - this.__position));
		if (bytesToRead < 0) {
			return 0;
		}
		var bytesRead = 0;
		while (bytesRead < bytesToRead) {
			var currentBytesRead = this._readFromCurrentSector(buffer, offset + bytesRead, bytesToRead - bytesRead);
			if (currentBytesRead == 0) {
				break;
			}
			bytesRead += currentBytesRead;
		}
		$.ig.DocCoreUtils.prototype.debugAssert(bytesRead == bytesToRead, null);
		return bytesRead;
	}
	/*<EndMethod Name="System.Int32 Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream::Read(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int64 Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream::Seek(System.Int64, System.IO.SeekOrigin)" />*/
	seek: function (offset, origin) {
		switch (origin) {
			case $.ig.SeekOrigin.prototype.begin:
				$.ig.DocCoreUtils.prototype.debugAssert(offset >= 0, null);
				this.position(offset);
				break;
			case $.ig.SeekOrigin.prototype.current:
				$.ig.DocCoreUtils.prototype.debugAssert(this.__position + offset >= 0, null);
				this.position(this.__position + offset);
				break;
			case $.ig.SeekOrigin.prototype.end:
				$.ig.DocCoreUtils.prototype.debugAssert(this.__length + offset >= 0, null);
				this.position(this.__length + offset);
				break;
			default:
				$.ig.DocCoreUtils.prototype.debugFail("Unknown seek origin");
				break;
		}
		return this.__position;
	}
	/*<EndMethod Name="System.Int64 Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream::Seek(System.Int64, System.IO.SeekOrigin)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream::SetLength(System.Int64)" />*/
	setLength: function (value) {
		var $self = this;
		if (value == this.__length) {
			return;
		}
		if (value < this.__length) {
			$.ig.DocCoreUtils.prototype.debugFail("This stream cannot be shortened yet.");
			return;
		}
		if (this.__firstSectorId < 0) {
			this._setFirstSectorId(this._allocateNewSector(-1));
		}
		var numberOfSectorsNeeded = (($.ig.intDivide((value - 1), this.__sectorSize)) + 1);
		var sectorIndex = this.__currentSectorIndex;
		var sectorId = this.__currentSectorId;
		if (sectorId < 0) {
			sectorIndex = 0;
			sectorId = this.__firstSectorId;
		}
		while (true) {
			if (numberOfSectorsNeeded <= sectorIndex + 1) {
				break;
			}
			var steps = 1;
			var nextSectorId = (function () { var $ret = $self._getNextSectorId(sectorId, steps); steps = $ret.p1; return $ret.ret; }());
			if (nextSectorId < 0) {
				break;
			}
			sectorId = nextSectorId;
			sectorIndex++;
		}
		while (sectorIndex < numberOfSectorsNeeded - 1) {
			sectorId = this._allocateNewSector(sectorId);
			sectorIndex++;
		}
		this._setLengthInternal(value);
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream::SetLength(System.Int64)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream::Write(, System.Int32, System.Int32)" />*/
	write: function (buffer, offset, count) {
		if (buffer == null) {
			$.ig.DocCoreUtils.prototype.debugFail("The buffer cannot be null.");
			return;
		}
		if (offset < 0) {
			$.ig.DocCoreUtils.prototype.debugFail("The offset cannot be less than zero.");
			return;
		}
		if (count < 0) {
			$.ig.DocCoreUtils.prototype.debugFail("The count cannot be less than zero.");
			return;
		}
		if (offset + count > buffer.length) {
			$.ig.DocCoreUtils.prototype.debugFail("Cannot write past the end of the buffer.");
			return;
		}
		var bytesWritten = 0;
		var newPosition = this.__position + count;
		if (newPosition > this.__length) {
			this.setLength(newPosition);
		}
		while (bytesWritten < count) {
			bytesWritten += this._writeToCurrentSector(buffer, offset + bytesWritten, count - bytesWritten);
		}
		$.ig.DocCoreUtils.prototype.debugAssert(bytesWritten == count, null);
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream::Write(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream::AllocateNewSector(System.Int32)" />*/
	_allocateNewSector: function (lastSectorId) {
		return this.__storageManager._allocateNewSector(lastSectorId, this.__isShortStream, this._type());
	}
	/*<EndMethod Name="System.Int32 Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream::AllocateNewSector(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream::GetNextSectorId(System.Int32, System.Int32)" />*/
	_getNextSectorId: function (lastSectorId, steps) {
		var $self = this;
		return {
			ret: (function () { var $ret = $self.__storageManager._getNextSectorId(lastSectorId, steps, $self.__isShortStream); steps = $ret.p1; return $ret.ret; }()),
			p1: steps
		};
	}
	/*<EndMethod Name="System.Int32 Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream::GetNextSectorId(System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name=" Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream::ReadBytes(System.Int32)" />*/
	_readBytes: function (count) {
		var data = new Array(count);
		var bytesRead = this.read(data, 0, data.length);
		if (bytesRead == count) {
			return data;
		}
		if (bytesRead == 0) {
			return new Array(0);
		}
		var retValue = new Array(bytesRead);
		$.ig.Buffer.prototype.blockCopy(data, 0, retValue, 0, bytesRead);
		return retValue;
	}
	/*<EndMethod Name=" Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream::ReadBytes(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream::ReadFromCurrentSector(, System.Int32, System.Int32)" />*/
	_readFromCurrentSector: function (buffer, offset, count) {
		var $self = this;
		this._syncContainerStreamPosition();
		if (this.__positionInCurrentSector == this.__sectorSize) {
			var steps = 1;
			this.__currentSectorId = (function () { var $ret = $self._getNextSectorId($self.__currentSectorId, steps); steps = $ret.p1; return $ret.ret; }());
			this.__currentSectorIndex++;
			this.__positionInCurrentSector = 0;
			if (this.__currentSectorId >= 0) {
				this.__cachedContainerStreamPosition = this.__storageManager._seekToSector(this.__currentSectorId, this.__isShortStream);
			} else {
				this.__currentSectorIndex = -1;
				this.__cachedContainerStreamPosition = -1;
				return 0;
			}
		}
		var bytesToRead = Math.min(count, this.__sectorSize - this.__positionInCurrentSector);
		var bytesRead = this.__containerStream.read(buffer, offset, bytesToRead);
		$.ig.DocCoreUtils.prototype.debugAssert(bytesRead == bytesToRead, null);
		this.__position += bytesRead;
		this.__positionInCurrentSector += bytesRead;
		this.__cachedContainerStreamPosition += bytesRead;
		$.ig.DocCoreUtils.prototype.debugAssert(this.__positionInCurrentSector <= this.__sectorSize, null);
		return bytesRead;
	}
	/*<EndMethod Name="System.Int32 Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream::ReadFromCurrentSector(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int16 Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream::ReadInt16()" />*/
	_readInt16: function () {
		if (this.read(this.__readBuffer, 0, 2) != 2) {
			$.ig.DocCoreUtils.prototype.debugFail("The end of the stream has been reached.");
			return -1;
		}
		return $.ig.BitConverter.prototype.toInt16(this.__readBuffer, 0);
	}
	/*<EndMethod Name="System.Int16 Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream::ReadInt16()" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream::ReadInt32()" />*/
	_readInt32: function () {
		if (this.read(this.__readBuffer, 0, 4) != 4) {
			$.ig.DocCoreUtils.prototype.debugFail("The end of the stream has been reached.");
			return -1;
		}
		return $.ig.BitConverter.prototype.toInt32(this.__readBuffer, 0);
	}
	/*<EndMethod Name="System.Int32 Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream::ReadInt32()" />*/
	,
	/*<BeginMethod Name="System.UInt16 Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream::ReadUInt16()" />*/
	_readUInt16: function () {
		if (this.read(this.__readBuffer, 0, 2) != 2) {
			$.ig.DocCoreUtils.prototype.debugFail("The end of the stream has been reached.");
			return 0;
		}
		return $.ig.BitConverter.prototype.toUInt16(this.__readBuffer, 0);
	}
	/*<EndMethod Name="System.UInt16 Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream::ReadUInt16()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream::ResetCache()" />*/
	_resetCache: function () {
		this.__currentSectorId = -1;
		this.__currentSectorIndex = -1;
		this.__positionInCurrentSector = -1;
		this.__cachedContainerStreamPosition = -1;
		this.__sectorSize = this.__storageManager._getSectorSize(this.__isShortStream);
		this.__containerStream = this.__storageManager._getStreamContainerStream(this.__isShortStream);
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream::ResetCache()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream::SetFirstSectorId(System.Int32)" />*/
	_setFirstSectorId: function (firstSectorId) {
		$.ig.DocCoreUtils.prototype.debugAssert(firstSectorId >= 0, null);
		this.__firstSectorId = firstSectorId;
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream::SetFirstSectorId(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream::SetLengthInternal(System.Int32)" />*/
	_setLengthInternal: function (value) {
		this.__length = value;
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream::SetLengthInternal(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream::SyncContainerStreamPosition()" />*/
	_syncContainerStreamPosition: function () {
		if (this.__cachedContainerStreamPosition == this.__containerStream.position()) {
			return;
		}
		this._syncPositionMembers();
		this.__cachedContainerStreamPosition = this.__storageManager._seekToSector1(this.__currentSectorId, this.__positionInCurrentSector, this.__isShortStream);
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream::SyncContainerStreamPosition()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream::SyncPositionMembers()" />*/
	_syncPositionMembers: function () {
		var $self = this;
		if (this.__currentSectorId < 0 || this.__currentSectorIndex < 0) {
			this.__currentSectorId = this.__firstSectorId;
			this.__currentSectorIndex = 0;
			$.ig.DocCoreUtils.prototype.debugAssert(this.__currentSectorId >= 0, null);
		}
		this.__positionInCurrentSector = (this.__position % this.__sectorSize);
		var neededSectorIndex = ($.ig.intDivide(this.__position, this.__sectorSize));
		var steps = neededSectorIndex - this.__currentSectorIndex;
		this.__currentSectorId = (function () { var $ret = $self._getNextSectorId($self.__currentSectorId, steps); steps = $ret.p1; return $ret.ret; }());
		this.__currentSectorIndex = neededSectorIndex;
		if (this.__currentSectorId < 0) {
			this.__currentSectorIndex = -1;
			this.__currentSectorId = -1;
			this.__positionInCurrentSector = -1;
			this.__cachedContainerStreamPosition = -1;
			return;
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream::SyncPositionMembers()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream::WriteInt16(System.Int16)" />*/
	_writeInt16: function (value) {
		this.write($.ig.BitConverter.prototype.getBytes3(value), 0, 2);
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream::WriteInt16(System.Int16)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream::WriteInt32(System.Int32)" />*/
	_writeInt32: function (value) {
		this.write($.ig.BitConverter.prototype.getBytes4(value), 0, 4);
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream::WriteInt32(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream::WriteToCurrentSector(, System.Int32, System.Int32)" />*/
	_writeToCurrentSector: function (buffer, offset, count) {
		var $self = this;
		this._syncContainerStreamPosition();
		if (this.__positionInCurrentSector == this.__sectorSize) {
			var steps = 1;
			var nextSectorId = (function () { var $ret = $self._getNextSectorId($self.__currentSectorId, steps); steps = $ret.p1; return $ret.ret; }());
			if (nextSectorId < 0) {
				$.ig.DocCoreUtils.prototype.debugFail("We should have had enough sectors to write to here");
				this.__currentSectorId = this._allocateNewSector(this.__currentSectorId);
			} else {
				this.__currentSectorId = nextSectorId;
			}
			$.ig.DocCoreUtils.prototype.debugAssert(this.__currentSectorId >= 0, null);
			this.__currentSectorIndex++;
			this.__positionInCurrentSector = 0;
			this.__cachedContainerStreamPosition = this.__storageManager._seekToSector(this.__currentSectorId, this.__isShortStream);
		}
		var bytesToWrite = Math.min(count, this.__sectorSize - this.__positionInCurrentSector);
		this.__containerStream.write(buffer, offset, bytesToWrite);
		var bytesWritten = (this.__containerStream.position() - this.__cachedContainerStreamPosition);
		$.ig.DocCoreUtils.prototype.debugAssert(bytesWritten == bytesToWrite, null);
		if (bytesWritten > 0) {
			this.__storageManager._isDirty(true);
		}
		this.__position += bytesWritten;
		this.__positionInCurrentSector += bytesWritten;
		this.__cachedContainerStreamPosition += bytesWritten;
		$.ig.DocCoreUtils.prototype.debugAssert(this.__positionInCurrentSector <= this.__sectorSize, null);
		return bytesWritten;
	}
	/*<EndMethod Name="System.Int32 Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream::WriteToCurrentSector(, System.Int32, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream::FirstSectorId()" />*/
	_firstSectorId: function () {
		return this.__firstSectorId;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream::FirstSectorId()" />*/
	,
	/*<BeginProperty Name="Infragistics.Documents.Core.StructuredStorage.StructuredStorageManager Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream::StorageManager()" />*/
	_storageManager: function () {
		return this.__storageManager;
	}
	/*<EndProperty Name="Infragistics.Documents.Core.StructuredStorage.StructuredStorageManager Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream::StorageManager()" />*/
	,
	/*<BeginProperty Name="Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream_StreamType Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream::Type()" />*/
	_type: function () {
		return $.ig.StructuredStorageStream_StreamType.prototype.normal;
	}
	/*<EndProperty Name="Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream_StreamType Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream::Type()" />*/
	,
	$type: new $.ig.Type('StructuredStorageStream', $.ig.Stream.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream" />*/

/*<BeginType Name="Infragistics.Documents.Core.StructuredStorage.DirectoryEntryStream" />*/

$.ig.util.defType('DirectoryEntryStream', 'StructuredStorageStream', {
	__directoryEntry: null,
	__isDirty: false,
	init: function (initNumber, structuredStorage, directoryEntry) {
		if (initNumber > 0) {
			switch (initNumber) {
				case 1:
					this.init1.apply(this, arguments);
					break;
			}
			return;
		}
		$.ig.DirectoryEntryStream.prototype.init1.call(this, 1, structuredStorage, directoryEntry, false);
	},
	init1: function (initNumber, structuredStorage, directoryEntry, isShortStream) {
		$.ig.StructuredStorageStream.prototype.init1.call(this, 1, structuredStorage, directoryEntry.firstSectorId(), directoryEntry.size(), isShortStream);
		this.__directoryEntry = directoryEntry;
	},
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.DirectoryEntryStream::Dispose(System.Boolean)" />*/
	disposeCore: function (disposing) {
		try {
			if (disposing && this.__isDirty) {
				this.__directoryEntry.timeStampModification($.ig.BitConverter.prototype.getBytes5($.ig.Date.prototype.toFileTime($.ig.Date.prototype.now())));
				this.__isDirty = false;
			}
		}
		finally {
			$.ig.StructuredStorageStream.prototype.disposeCore.call(this, disposing);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.DirectoryEntryStream::Dispose(System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.DirectoryEntryStream::SetFirstSectorId(System.Int32)" />*/
	_setFirstSectorId: function (firstSectorId) {
		$.ig.StructuredStorageStream.prototype._setFirstSectorId.call(this, firstSectorId);
		this.__directoryEntry.firstSectorId(firstSectorId);
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.DirectoryEntryStream::SetFirstSectorId(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.DirectoryEntryStream::SetLengthInternal(System.Int32)" />*/
	_setLengthInternal: function (value) {
		$.ig.StructuredStorageStream.prototype._setLengthInternal.call(this, value);
		this.__directoryEntry.size(value);
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.DirectoryEntryStream::SetLengthInternal(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.DirectoryEntryStream::Write(, System.Int32, System.Int32)" />*/
	write: function (buffer, offset, count) {
		$.ig.StructuredStorageStream.prototype.write.call(this, buffer, offset, count);
		if (count > 0) {
			this.__isDirty = true;
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.DirectoryEntryStream::Write(, System.Int32, System.Int32)" />*/
	,
	$type: new $.ig.Type('DirectoryEntryStream', $.ig.StructuredStorageStream.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Core.StructuredStorage.DirectoryEntryStream" />*/

/*<BeginType Name="Infragistics.Documents.Core.StructuredStorage.DirectoryStream" />*/

$.ig.util.defType('DirectoryStream', 'StructuredStorageStream', {
	__rootEntry: null,
	__directoryEntryNodes: null,
	__entriesPerSector: 0,
	init: function (initNumber, structuredStorage) {
		if (initNumber > 0) {
			switch (initNumber) {
				case 1:
					this.init1.apply(this, arguments);
					break;
			}
			return;
		}
		$.ig.DirectoryStream.prototype.init1.call(this, 1, structuredStorage, structuredStorage._allocateNewSector(-1, false, $.ig.StructuredStorageStream_StreamType.prototype.normal));
		var node = new $.ig.DirectoryStream_DirectoryEntryNode();
		this.__rootEntry = new $.ig.Directory("Root Entry", node);
		this.__rootEntry.firstSectorId($.ig.StructuredStorageManager.prototype._endOfStreamSectorId);
		this.__rootEntry.timeStampCreation($.ig.BitConverter.prototype.getBytes5($.ig.Date.prototype.toFileTime($.ig.Date.prototype.now())));
		this.__rootEntry.timeStampModification(this.__rootEntry.timeStampCreation());
		node._childProperty = -1;
		node._leftSiblingProperty = -1;
		node._rightSiblingProperty = -1;
		node._entry = this.__rootEntry;
		node._color = $.ig.DirectoryStream_NodeColor.prototype.red;
		this.__directoryEntryNodes.add(node);
		this._setLengthInternal(this.__sectorSize);
	},
	init1: function (initNumber, structuredStorage, firstSectorId) {
		$.ig.StructuredStorageStream.prototype.init.call(this, 0, structuredStorage, firstSectorId, 0);
		this.__directoryEntryNodes = new $.ig.List$1($.ig.DirectoryStream_DirectoryEntryNode.prototype.$type, 0);
		this.__entriesPerSector = $.ig.intDivide(this.__sectorSize, $.ig.DirectoryStream.prototype.__directoryEntryHeaderLength);
		$.ig.DocCoreUtils.prototype.debugAssert(this.__sectorSize % $.ig.DirectoryStream.prototype.__directoryEntryHeaderLength == 0, null);
	},
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.DirectoryStream::Dispose(System.Boolean)" />*/
	disposeCore: function (disposing) {
		try {
			if (disposing && this._storageManager()._isDirty()) {
				this.position(0);
				this._assignIndexNumbers();
				var index;
				for (index = 0; index < this.__directoryEntryNodes.count(); index++) {
					this._writeDirectoryEntryHeader(this.__directoryEntryNodes.__inner[index]);
				}
				while (index % this.__entriesPerSector != 0) {
					this._writeDirectoryEntryHeader(null);
					index++;
				}
				$.ig.DocCoreUtils.prototype.debugAssert(this.position() == this.length(), null);
			}
		}
		finally {
			$.ig.StructuredStorageStream.prototype.disposeCore.call(this, disposing);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.DirectoryStream::Dispose(System.Boolean)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Core.StructuredStorage.File Infragistics.Documents.Core.StructuredStorage.DirectoryStream::AddFile(System.String)" />*/
	_addFile: function (fileName) {
		var file = this.__rootEntry.addFile(fileName, this);
		if (file == null) {
			return null;
		}
		return file;
	}
	/*<EndMethod Name="Infragistics.Documents.Core.StructuredStorage.File Infragistics.Documents.Core.StructuredStorage.DirectoryStream::AddFile(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.DirectoryStream::AssignIndexNumbers()" />*/
	_assignIndexNumbers: function () {
		for (var i = 0; i < this.__directoryEntryNodes.count(); i++) {
			var node = this.__directoryEntryNodes.__inner[i];
			var directory = $.ig.util.cast($.ig.Directory.prototype.$type, node._entry);
			if (directory != null && directory.children().count() > 0) {
				var middleIndex = $.ig.intDivide(directory.children().count(), 2);
				var middleEntry = directory.children().__inner[middleIndex];
				node._childProperty = this.__directoryEntryNodes.indexOf(middleEntry.node());
				this._assignSiblingIndexNumbers(middleEntry, directory.children(), 0, directory.children().count() - 1);
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.DirectoryStream::AssignIndexNumbers()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.DirectoryStream::AssignSiblingIndexNumbers(Infragistics.Documents.Core.StructuredStorage.DirectoryEntry, System.Collections.Generic.List, System.Int32, System.Int32)" />*/
	_assignSiblingIndexNumbers: function (currentSiblingEntry, siblings, startIndex, endIndex) {
		var currentSiblingIndex = siblings.indexOf(currentSiblingEntry);
		$.ig.DocCoreUtils.prototype.debugAssert(startIndex <= currentSiblingIndex && currentSiblingIndex <= endIndex, "The current entry is not in the sub-tree");
		if (startIndex < currentSiblingIndex) {
			var lesserSiblingIndex = $.ig.intDivide((startIndex + currentSiblingIndex), 2);
			var lesserSiblingEntry = siblings.__inner[lesserSiblingIndex];
			currentSiblingEntry.node()._leftSiblingProperty = this.__directoryEntryNodes.indexOf(lesserSiblingEntry.node());
			this._assignSiblingIndexNumbers(lesserSiblingEntry, siblings, startIndex, currentSiblingIndex - 1);
		}
		if (currentSiblingIndex < endIndex) {
			var greaterSiblingIndex = $.ig.intDivide((endIndex + currentSiblingIndex + 1), 2);
			var greaterSiblingEntry = siblings.__inner[greaterSiblingIndex];
			currentSiblingEntry.node()._rightSiblingProperty = this.__directoryEntryNodes.indexOf(greaterSiblingEntry.node());
			this._assignSiblingIndexNumbers(greaterSiblingEntry, siblings, currentSiblingIndex + 1, endIndex);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.DirectoryStream::AssignSiblingIndexNumbers(Infragistics.Documents.Core.StructuredStorage.DirectoryEntry, System.Collections.Generic.List, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.DirectoryStream::ReadDirectoryEntryHeaders()" />*/
	_readDirectoryEntryHeaders: function () {
		var $self = this;
		var sectorId = this._firstSectorId();
		while (sectorId >= 0) {
			var steps = 1;
			sectorId = (function () { var $ret = $self._getNextSectorId(sectorId, steps); steps = $ret.p1; return $ret.ret; }());
			this._setLengthInternal((this.length() + this.__sectorSize));
		}
		this.position(0);
		while (this.position() < this.length()) {
			this._readNextDirectoryEntryHeader();
		}
		$.ig.DocCoreUtils.prototype.debugAssert(this.__rootEntry != null, null);
		for (var i = 0; i < this.__directoryEntryNodes.count(); i++) {
			var node = this.__directoryEntryNodes.__inner[i];
			if (node._childProperty < 0) {
				continue;
			}
			$.ig.DocCoreUtils.prototype.debugAssert($.ig.util.cast($.ig.Directory.prototype.$type, node._entry) !== null, null);
			this._storeChildEntries(node._entry, node._childProperty);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.DirectoryStream::ReadDirectoryEntryHeaders()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.DirectoryStream::ReadNextDirectoryEntryHeader()" />*/
	_readNextDirectoryEntryHeader: function () {
		var propertyNameChars = new Array($.ig.DirectoryStream.prototype.__directoryEntryTitleLength);
		var charIndex = 0;
		while (charIndex < $.ig.DirectoryStream.prototype.__directoryEntryTitleLength) {
			propertyNameChars[charIndex++] = String.fromCharCode(this._readUInt16());
		}
		var sizeOfCharBuffer = this._readInt16();
		var titleLength = ($.ig.intDivide(sizeOfCharBuffer, 2)) - 1;
		if (sizeOfCharBuffer == 0) {
			titleLength = 0;
		}
		var propertyName = $.ig.util.createString3(propertyNameChars, 0, titleLength);
		var node = new $.ig.DirectoryStream_DirectoryEntryNode();
		var propertyType = this.readByte();
		node._color = this.readByte();
		node._leftSiblingProperty = this._readInt32();
		node._rightSiblingProperty = this._readInt32();
		node._childProperty = this._readInt32();
		var uniqueIdentifier = this._readBytes(16);
		var userFlags = this._readBytes(4);
		var timeStampCreation = this._readBytes(8);
		var timeStampModification = this._readBytes(8);
		var firstSectorId = this._readInt32();
		var size = this._readInt32();
		this._readBytes(4);
		if (propertyType == $.ig.DirectoryStream_PropertyType.prototype.empty) {
			return;
		}
		$.ig.DocCoreUtils.prototype.debugAssert(propertyType != $.ig.DirectoryStream_PropertyType.prototype.rootEntry || this.__directoryEntryNodes.count() == 0, null);
		switch (propertyType) {
			case $.ig.DirectoryStream_PropertyType.prototype.rootEntry:
				{
					$.ig.DocCoreUtils.prototype.debugAssert(this.__rootEntry == null, "There are two root entries in this stream.");
					this.__rootEntry = new $.ig.Directory(propertyName, node);
					node._entry = this.__rootEntry;
					$.ig.DocCoreUtils.prototype.debugAssert(node._childProperty >= 0, null);
					break;
				}
			case $.ig.DirectoryStream_PropertyType.prototype.ole2Storage:
				{
					node._entry = new $.ig.Directory(propertyName, node);
					$.ig.DocCoreUtils.prototype.debugAssert(node._childProperty >= 0, null);
					break;
				}
			case $.ig.DirectoryStream_PropertyType.prototype.ole2Stream:
				{
					node._entry = new $.ig.File(propertyName, node);
					$.ig.DocCoreUtils.prototype.debugAssert(node._childProperty < 0, null);
					break;
				}
			default:
				{
					$.ig.DocCoreUtils.prototype.debugFail("Unknown property type.");
					return;
				}
		}
		node._entry.size(size);
		node._entry.firstSectorId(firstSectorId);
		node._entry.timeStampCreation(timeStampCreation);
		node._entry.timeStampModification(timeStampModification);
		node._entry.uniqueIdentifier(uniqueIdentifier);
		node._entry.userFlags(userFlags);
		this.__directoryEntryNodes.add(node);
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.DirectoryStream::ReadNextDirectoryEntryHeader()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.DirectoryStream::StoreChildEntries(Infragistics.Documents.Core.StructuredStorage.Directory, System.Int32)" />*/
	_storeChildEntries: function (dirctory, childNodeIndex) {
		var childNode = this.__directoryEntryNodes.__inner[childNodeIndex];
		if (childNode._leftSiblingProperty >= 0) {
			this._storeChildEntries(dirctory, childNode._leftSiblingProperty);
		}
		childNode._entry.parent(dirctory);
		dirctory.children().add(childNode._entry);
		if (childNode._rightSiblingProperty >= 0) {
			this._storeChildEntries(dirctory, childNode._rightSiblingProperty);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.DirectoryStream::StoreChildEntries(Infragistics.Documents.Core.StructuredStorage.Directory, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.DirectoryStream::WriteDirectoryEntryHeader(Infragistics.Documents.Core.StructuredStorage.DirectoryStream_DirectoryEntryNode)" />*/
	_writeDirectoryEntryHeader: function (node) {
		if (node == null) {
			var startingZeros = new Array(($.ig.DirectoryStream.prototype.__directoryEntryTitleLength * 2) + 4);
			this.write(startingZeros, 0, startingZeros.length);
			this._writeInt32(-1);
			this._writeInt32(-1);
			this._writeInt32(-1);
			var endingZeros = new Array(48);
			this.write(endingZeros, 0, endingZeros.length);
		} else {
			var data = $.ig.Encoding.prototype.unicode().getBytes1(node._entry.name());
			var paddedZeros = new Array(($.ig.DirectoryStream.prototype.__directoryEntryTitleLength * 2) - data.length);
			this.write(data, 0, data.length);
			this.write(paddedZeros, 0, paddedZeros.length);
			this._writeInt16((data.length + 2));
			var type = $.ig.DirectoryStream_PropertyType.prototype.empty;
			if (node._entry == this.__rootEntry) {
				type = $.ig.DirectoryStream_PropertyType.prototype.rootEntry;
			} else if ($.ig.util.cast($.ig.File.prototype.$type, node._entry) !== null) {
				type = $.ig.DirectoryStream_PropertyType.prototype.ole2Stream;
			} else if ($.ig.util.cast($.ig.Directory.prototype.$type, node._entry) !== null) {
				type = $.ig.DirectoryStream_PropertyType.prototype.ole2Storage;
			} else {
				$.ig.DocCoreUtils.prototype.debugFail("Unknown type");
			}
			this.writeByte(type);
			this.writeByte(node._color);
			this._writeInt32(node._leftSiblingProperty);
			this._writeInt32(node._rightSiblingProperty);
			this._writeInt32(node._childProperty);
			this.write(node._entry.uniqueIdentifier(), 0, 16);
			this.write(node._entry.userFlags(), 0, 4);
			this.write(node._entry.timeStampCreation(), 0, 8);
			this.write(node._entry.timeStampModification(), 0, 8);
			this._writeInt32(node._entry.firstSectorId());
			this._writeInt32(node._entry.size());
			this._writeInt32(0);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.DirectoryStream::WriteDirectoryEntryHeader(Infragistics.Documents.Core.StructuredStorage.DirectoryStream_DirectoryEntryNode)" />*/
	,
	/*<BeginProperty Name="System.Collections.Generic.List Infragistics.Documents.Core.StructuredStorage.DirectoryStream::DirectoryEntryNodes()" />*/
	_directoryEntryNodes: function () {
		return this.__directoryEntryNodes;
	}
	/*<EndProperty Name="System.Collections.Generic.List Infragistics.Documents.Core.StructuredStorage.DirectoryStream::DirectoryEntryNodes()" />*/
	,
	/*<BeginProperty Name="Infragistics.Documents.Core.StructuredStorage.Directory Infragistics.Documents.Core.StructuredStorage.DirectoryStream::RootEntry()" />*/
	_rootEntry: function () {
		return this.__rootEntry;
	}
	/*<EndProperty Name="Infragistics.Documents.Core.StructuredStorage.Directory Infragistics.Documents.Core.StructuredStorage.DirectoryStream::RootEntry()" />*/
	,
	$type: new $.ig.Type('DirectoryStream', $.ig.StructuredStorageStream.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Core.StructuredStorage.DirectoryStream" />*/

/*<BeginType Name="Infragistics.Documents.Core.StructuredStorage.DirectoryStream_DirectoryEntryNode" />*/

$.ig.util.defType('DirectoryStream_DirectoryEntryNode', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	_entry: null,
	_leftSiblingProperty: 0,
	_rightSiblingProperty: 0,
	_childProperty: 0,
	_color: 0,
	$type: new $.ig.Type('DirectoryStream_DirectoryEntryNode', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Core.StructuredStorage.DirectoryStream_DirectoryEntryNode" />*/

/*<BeginType Name="Infragistics.Documents.Core.StructuredStorage.File" />*/

$.ig.util.defType('File', 'DirectoryEntry', {
	init: function (name, node) {
		$.ig.DirectoryEntry.prototype.init.call(this, name, node);
	},
	$type: new $.ig.Type('File', $.ig.DirectoryEntry.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Core.StructuredStorage.File" />*/

/*<BeginType Name="Infragistics.Documents.Core.StructuredStorage.MasterSATStream" />*/

$.ig.util.defType('MasterSATStream', 'StructuredStorageStream', {
	__masterSATEntriesPerSector: 0,
	__headerMasterSAT: null,
	__cachedMasterSAT: null,
	__masterSATSectorIds: null,
	__headerMasterSATLookupTable: null,
	__cachedMasterSATLookupTable: null,
	init: function (structuredStorage, firstMasterSATSectorId, numberOfMasterSATSectors, headerMasterSAT) {
		$.ig.StructuredStorageStream.prototype.init.call(this, 0, structuredStorage, firstMasterSATSectorId, numberOfMasterSATSectors * structuredStorage._getSectorSize(false));
		this.__headerMasterSAT = headerMasterSAT;
		$.ig.DocCoreUtils.prototype.debugAssert(this.__headerMasterSAT.length == $.ig.StructuredStorageManager.prototype._headerMasterSATLength, null);
		this.__headerMasterSATLookupTable = new $.ig.Dictionary$2($.ig.Number.prototype.$type, $.ig.Number.prototype.$type, 0);
		for (var i = 0; i < headerMasterSAT.length; i++) {
			var sectorIndex = headerMasterSAT[i];
			if (0 <= sectorIndex) {
				this.__headerMasterSATLookupTable.add(sectorIndex, i);
			}
		}
		this.__masterSATEntriesPerSector = ($.ig.intDivide(this.__sectorSize, 4)) - 1;
		this.__masterSATSectorIds = new $.ig.List$1($.ig.Number.prototype.$type, 0);
		this.__cachedMasterSAT = new $.ig.List$1($.ig.Number.prototype.$type, 0);
		this.__cachedMasterSATLookupTable = new $.ig.Dictionary$2($.ig.Number.prototype.$type, $.ig.Number.prototype.$type, 0);
		var masterSATSectorId = firstMasterSATSectorId;
		while (masterSATSectorId >= 0) {
			this._storageManager()._seekToSector(masterSATSectorId, false);
			this.__masterSATSectorIds.add(masterSATSectorId);
			for (var i1 = 0; i1 < this.__sectorSize - 4; i1 += 4) {
				var sectorIndex1 = this._readInt32();
				this.__cachedMasterSAT.add(sectorIndex1);
				if (0 <= sectorIndex1) {
					this.__cachedMasterSATLookupTable.add(sectorIndex1, this.__cachedMasterSAT.count() - 1);
				}
			}
			masterSATSectorId = this._readInt32();
		}
	},
	/*<BeginMethod Name="System.Int32 Infragistics.Documents.Core.StructuredStorage.MasterSATStream::AllocateNewSector(System.Int32)" />*/
	_allocateNewSector: function (lastSectorId) {
		var newSector = $.ig.StructuredStorageStream.prototype._allocateNewSector.call(this, lastSectorId);
		this.__masterSATSectorIds.add(newSector);
		return newSector;
	}
	/*<EndMethod Name="System.Int32 Infragistics.Documents.Core.StructuredStorage.MasterSATStream::AllocateNewSector(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.MasterSATStream::Dispose(System.Boolean)" />*/
	disposeCore: function (disposing) {
		try {
			if (disposing && this._storageManager()._isDirty()) {
				this.position(0);
				var valueIndex = 0;
				for (var sectorIndex = 0; sectorIndex < this.__masterSATSectorIds.count(); sectorIndex++) {
					for (var i = 0; i < this.__masterSATEntriesPerSector; i++) {
						this._writeInt32(this.__cachedMasterSAT.__inner[valueIndex]);
						valueIndex++;
					}
					if (sectorIndex == this.__masterSATSectorIds.count() - 1) {
						this._writeInt32(-1);
					} else {
						this._writeInt32(this.__masterSATSectorIds.__inner[sectorIndex + 1]);
					}
				}
			}
		}
		finally {
			$.ig.StructuredStorageStream.prototype.disposeCore.call(this, disposing);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.MasterSATStream::Dispose(System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.Documents.Core.StructuredStorage.MasterSATStream::GetNextSectorId(System.Int32, System.Int32)" />*/
	_getNextSectorId: function (lastSectorId, steps) {
		if (steps < 0) {
			var i = this.__masterSATSectorIds.count();
			while (steps < 0) {
				if (this.__masterSATSectorIds.__inner[0] == lastSectorId) {
					return {
						ret: $.ig.StructuredStorageManager.prototype._endOfStreamSectorId,
						p1: steps
					};
				}
				var foundSector = false;
				for (i = 1; i < this.__masterSATSectorIds.count(); i++) {
					if (this.__masterSATSectorIds.__inner[i] == lastSectorId) {
						lastSectorId = this.__masterSATSectorIds.__inner[i - 1];
						foundSector = true;
						break;
					}
				}
				if (lastSectorId < 0 || foundSector == false) {
					return {
						ret: $.ig.StructuredStorageManager.prototype._endOfStreamSectorId,
						p1: steps
					};
				}
				steps++;
			}
			if (steps == 0) {
				return {
					ret: lastSectorId,
					p1: steps
				};
			}
			$.ig.DocCoreUtils.prototype.debugAssert(i == this.__masterSATSectorIds.count(), "Couldnt find the sector");
			return {
				ret: $.ig.StructuredStorageManager.prototype._endOfStreamSectorId,
				p1: steps
			};
		} else {
			var i1 = this.__masterSATSectorIds.count();
			while (steps > 0) {
				var foundSector1 = false;
				for (i1 = 0; i1 < this.__masterSATSectorIds.count() - 1; i1++) {
					if (this.__masterSATSectorIds.__inner[i1] == lastSectorId) {
						lastSectorId = this.__masterSATSectorIds.__inner[i1 + 1];
						foundSector1 = true;
						break;
					}
				}
				if (lastSectorId < 0 || foundSector1 == false) {
					return {
						ret: $.ig.StructuredStorageManager.prototype._endOfStreamSectorId,
						p1: steps
					};
				}
				steps--;
			}
			if (steps == 0) {
				return {
					ret: lastSectorId,
					p1: steps
				};
			}
			$.ig.DocCoreUtils.prototype.debugAssert(i1 == this.__masterSATSectorIds.count() - 1, "Couldnt find the sector");
			return {
				ret: $.ig.StructuredStorageManager.prototype._endOfStreamSectorId,
				p1: steps
			};
		}
	}
	/*<EndMethod Name="System.Int32 Infragistics.Documents.Core.StructuredStorage.MasterSATStream::GetNextSectorId(System.Int32, System.Int32)" />*/
	,
	/*<BeginProperty Name="Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream_StreamType Infragistics.Documents.Core.StructuredStorage.MasterSATStream::Type()" />*/
	_type: function () {
		return $.ig.StructuredStorageStream_StreamType.prototype.masterSAT;
	}
	/*<EndProperty Name="Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream_StreamType Infragistics.Documents.Core.StructuredStorage.MasterSATStream::Type()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.MasterSATStream::AddNewSATEntry(System.Int32)" />*/
	_addNewSATEntry: function (SATSectorId) {
		for (var i = 0; i < this.__headerMasterSAT.length; i++) {
			var sectorId = this.__headerMasterSAT[i];
			if (sectorId < 0) {
				$.ig.DocCoreUtils.prototype.debugAssert(sectorId == $.ig.StructuredStorageManager.prototype._freeSectorId, null);
				this.__headerMasterSAT[i] = SATSectorId;
				this.__headerMasterSATLookupTable.add(SATSectorId, i);
				return;
			}
		}
		for (var i1 = 0; i1 < this.__cachedMasterSAT.count(); i1++) {
			var sectorId1 = this.__cachedMasterSAT.__inner[i1];
			if (sectorId1 < 0) {
				$.ig.DocCoreUtils.prototype.debugAssert(sectorId1 == $.ig.StructuredStorageManager.prototype._freeSectorId, null);
				this.__cachedMasterSAT.__inner[i1] = SATSectorId;
				this.__cachedMasterSATLookupTable.add(SATSectorId, i1);
				return;
			}
		}
		this.__cachedMasterSAT.add(SATSectorId);
		this.__cachedMasterSATLookupTable.add(SATSectorId, this.__cachedMasterSAT.count() - 1);
		for (var i2 = 1; i2 < this.__masterSATEntriesPerSector; i2++) {
			this.__cachedMasterSAT.add($.ig.StructuredStorageManager.prototype._freeSectorId);
		}
		this.setLength(this.length() + this.__sectorSize);
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.MasterSATStream::AddNewSATEntry(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.Documents.Core.StructuredStorage.MasterSATStream::GetNextSATSector(System.Int32)" />*/
	_getNextSATSector: function (lastSectorId) {
		var $self = this;
		var headerMasterSATIndex;
		if ((function () { var $ret = $self.__headerMasterSATLookupTable.tryGetValue(lastSectorId, headerMasterSATIndex); headerMasterSATIndex = $ret.p1; return $ret.ret; }())) {
			if (headerMasterSATIndex == this.__headerMasterSAT.length - 1) {
				if (this.__cachedMasterSAT.count() == 0) {
					return -1;
				}
				return this.__cachedMasterSAT.__inner[0];
			}
			return this.__headerMasterSAT[headerMasterSATIndex + 1];
		}
		var cacheMasterSATIndex;
		if ((function () { var $ret = $self.__cachedMasterSATLookupTable.tryGetValue(lastSectorId, cacheMasterSATIndex); cacheMasterSATIndex = $ret.p1; return $ret.ret; }())) {
			if (cacheMasterSATIndex == this.__cachedMasterSAT.count() - 1) {
				return -1;
			}
			return this.__cachedMasterSAT.__inner[cacheMasterSATIndex + 1];
		}
		return -1;
	}
	/*<EndMethod Name="System.Int32 Infragistics.Documents.Core.StructuredStorage.MasterSATStream::GetNextSATSector(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.Documents.Core.StructuredStorage.MasterSATStream::GetPreviousSATSector(System.Int32)" />*/
	_getPreviousSATSector: function (lastSectorId) {
		var $self = this;
		var headerMasterSATIndex;
		if ((function () { var $ret = $self.__headerMasterSATLookupTable.tryGetValue(lastSectorId, headerMasterSATIndex); headerMasterSATIndex = $ret.p1; return $ret.ret; }())) {
			if (headerMasterSATIndex == 0) {
				return -1;
			}
			return this.__headerMasterSAT[headerMasterSATIndex - 1];
		}
		var cacheMasterSATIndex;
		if ((function () { var $ret = $self.__cachedMasterSATLookupTable.tryGetValue(lastSectorId, cacheMasterSATIndex); cacheMasterSATIndex = $ret.p1; return $ret.ret; }()) && 1 <= cacheMasterSATIndex) {
			if (cacheMasterSATIndex == 0) {
				return this.__headerMasterSAT[this.__headerMasterSAT.length - 1];
			}
			return this.__cachedMasterSAT.__inner[cacheMasterSATIndex - 1];
		}
		return -1;
	}
	/*<EndMethod Name="System.Int32 Infragistics.Documents.Core.StructuredStorage.MasterSATStream::GetPreviousSATSector(System.Int32)" />*/
	,
	/*<BeginProperty Name=" Infragistics.Documents.Core.StructuredStorage.MasterSATStream::HeaderMasterSAT()" />*/
	_headerMasterSAT: function () {
		return this.__headerMasterSAT;
	}
	/*<EndProperty Name=" Infragistics.Documents.Core.StructuredStorage.MasterSATStream::HeaderMasterSAT()" />*/
	,
	$type: new $.ig.Type('MasterSATStream', $.ig.StructuredStorageStream.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Core.StructuredStorage.MasterSATStream" />*/

/*<BeginType Name="Infragistics.Documents.Core.StructuredStorage.SATStreamBase" />*/

$.ig.util.defType('SATStreamBase', 'StructuredStorageStream', {
	__sATEntriesPerSector: 0,
	__cachedSAT: null,
	__freeSectorIds: null,
	init: function (structuredStorage, firstSATSectorId, numberOfSATSectors) {
		$.ig.StructuredStorageStream.prototype.init.call(this, 0, structuredStorage, firstSATSectorId, numberOfSATSectors * structuredStorage._getSectorSize(false));
		this.__sATEntriesPerSector = $.ig.intDivide(structuredStorage._getSectorSize(false), 4);
	},
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.SATStreamBase::Dispose(System.Boolean)" />*/
	disposeCore: function (disposing) {
		try {
			if (disposing && this._storageManager()._isDirty()) {
				this.position(0);
				for (var i = 0; i < this.__cachedSAT.count(); i++) {
					this._writeInt32(this.__cachedSAT.__inner[i]._nextSector);
				}
			}
		}
		finally {
			$.ig.StructuredStorageStream.prototype.disposeCore.call(this, disposing);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.SATStreamBase::Dispose(System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.Documents.Core.StructuredStorage.SATStreamBase::AllocateNewSectorForStream(System.Int32, Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream_StreamType)" />*/
	_allocateNewSectorForStream: function (lastSectorId, streamType) {
		var foundFreeSector = false;
		var freeSectorId = Math.max(0, lastSectorId);
		if (this.__freeSectorIds.count() > 0) {
			foundFreeSector = true;
			freeSectorId = this.__freeSectorIds.__inner[0];
			this.__freeSectorIds.removeAt(0);
		}
		if (foundFreeSector == false) {
			for (var i = 0; i < this.__sATEntriesPerSector; i++) {
				this.__freeSectorIds.add(this.__cachedSAT.count());
				this.__cachedSAT.add($.ig.SATStreamBase_SATEntry.prototype.freeEntry());
			}
			this.setLength(this.length() + this.__sectorSize);
			while (freeSectorId < this.__cachedSAT.count()) {
				var currentSectorId = this.__cachedSAT.__inner[freeSectorId]._nextSector;
				if (currentSectorId == $.ig.StructuredStorageManager.prototype._freeSectorId) {
					this.__freeSectorIds.remove(freeSectorId);
					foundFreeSector = true;
					break;
				}
				freeSectorId++;
			}
			if (foundFreeSector == false) {
				$.ig.DocCoreUtils.prototype.debugFail("All newly added entries couldn't have been used up already.");
				return this._allocateNewSectorForStream(lastSectorId, streamType);
			}
		}
		if (lastSectorId >= 0 && streamType == $.ig.StructuredStorageStream_StreamType.prototype.normal) {
			this.__cachedSAT.__inner[lastSectorId]._nextSector = freeSectorId;
			this.__cachedSAT.__inner[freeSectorId]._previousSector = lastSectorId;
		}
		switch (streamType) {
			case $.ig.StructuredStorageStream_StreamType.prototype.masterSAT:
				this.__cachedSAT.__inner[freeSectorId]._nextSector = $.ig.StructuredStorageManager.prototype._masterSATSectorId;
				break;
			case $.ig.StructuredStorageStream_StreamType.prototype.normal:
				this.__cachedSAT.__inner[freeSectorId]._nextSector = $.ig.StructuredStorageManager.prototype._endOfStreamSectorId;
				break;
			case $.ig.StructuredStorageStream_StreamType.prototype.sAT:
				this.__cachedSAT.__inner[freeSectorId]._nextSector = $.ig.StructuredStorageManager.prototype._sATSectorId;
				break;
			default:
				$.ig.DocCoreUtils.prototype.debugFail("Unknown stream type");
				break;
		}
		return freeSectorId;
	}
	/*<EndMethod Name="System.Int32 Infragistics.Documents.Core.StructuredStorage.SATStreamBase::AllocateNewSectorForStream(System.Int32, Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream_StreamType)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.Documents.Core.StructuredStorage.SATStreamBase::GetNextSectorIdInSAT(System.Int32, System.Int32)" />*/
	_getNextSectorIdInSAT: function (lastSectorId, steps) {
		while (steps < 0) {
			lastSectorId = this.__cachedSAT.__inner[lastSectorId]._previousSector;
			if (lastSectorId < 0) {
				return {
					ret: $.ig.StructuredStorageManager.prototype._endOfStreamSectorId,
					p1: steps
				};
			}
			steps++;
		}
		while (steps > 0) {
			lastSectorId = this.__cachedSAT.__inner[lastSectorId]._nextSector;
			if (lastSectorId < 0) {
				return {
					ret: $.ig.StructuredStorageManager.prototype._endOfStreamSectorId,
					p1: steps
				};
			}
			steps--;
		}
		return {
			ret: lastSectorId,
			p1: steps
		};
	}
	/*<EndMethod Name="System.Int32 Infragistics.Documents.Core.StructuredStorage.SATStreamBase::GetNextSectorIdInSAT(System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.SATStreamBase::ReadSATContents(System.Int32, System.Int32)" />*/
	_readSATContents: function (firstSATSectorId, numberOfSATSectors) {
		var totalSATEntries = numberOfSATSectors * this.__sATEntriesPerSector;
		this.__cachedSAT = new $.ig.List$1($.ig.SATStreamBase_SATEntry.prototype.$type, 2, totalSATEntries);
		this.__freeSectorIds = new $.ig.List$1($.ig.Number.prototype.$type, 0);
		if (firstSATSectorId < 0) {
			$.ig.DocCoreUtils.prototype.debugAssert(numberOfSATSectors == 0, null);
			return;
		}
		for (var i = 0; i < totalSATEntries; i++) {
			this.__cachedSAT.add(new $.ig.SATStreamBase_SATEntry($.ig.StructuredStorageManager.prototype._endOfStreamSectorId, this._readInt32()));
		}
		for (var i1 = 0; i1 < this.__cachedSAT.count(); i1++) {
			var entry = this.__cachedSAT.__inner[i1];
			if (entry._nextSector >= 0 && entry._nextSector < this.__cachedSAT.count()) {
				this.__cachedSAT.__inner[entry._nextSector]._previousSector = i1;
			} else if (entry._nextSector == $.ig.StructuredStorageManager.prototype._freeSectorId) {
				this.__freeSectorIds.add(i1);
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.SATStreamBase::ReadSATContents(System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.SATStreamBase::RemoveStream(Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream)" />*/
	_removeStream: function (stream) {
		var sectorId = stream._firstSectorId();
		while (sectorId >= 0) {
			var steps = 1;
			var nextSectorId = (function () { var $ret = stream._getNextSectorId(sectorId, steps); steps = $ret.p1; return $ret.ret; }());
			this.__cachedSAT.__inner[sectorId]._nextSector = $.ig.StructuredStorageManager.prototype._freeSectorId;
			var index = this.__freeSectorIds.binarySearch(sectorId);
			$.ig.DocCoreUtils.prototype.debugAssert(index < 0, "The allocated sector should not have been in the freeSectorIds collection");
			if (index < 0) {
				this.__freeSectorIds.insert(~index, sectorId);
			}
			sectorId = nextSectorId;
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.SATStreamBase::RemoveStream(Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.SATStreamBase::SetSATContents(System.Collections.Generic.List)" />*/
	_setSATContents: function (SAT) {
		$.ig.DocCoreUtils.prototype.debugAssert(this.__cachedSAT == null, null);
		$.ig.DocCoreUtils.prototype.debugAssert(this.length() == SAT.count() * 4, null);
		this.__cachedSAT = SAT;
		this.__freeSectorIds = new $.ig.List$1($.ig.Number.prototype.$type, 0);
		for (var i = 0; i < this.__cachedSAT.count(); i++) {
			if (this.__cachedSAT.__inner[i]._nextSector == $.ig.StructuredStorageManager.prototype._freeSectorId) {
				this.__freeSectorIds.add(i);
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.SATStreamBase::SetSATContents(System.Collections.Generic.List)" />*/
	,
	$type: new $.ig.Type('SATStreamBase', $.ig.StructuredStorageStream.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Core.StructuredStorage.SATStreamBase" />*/

/*<BeginType Name="Infragistics.Documents.Core.StructuredStorage.SATStream" />*/

$.ig.util.defType('SATStream', 'SATStreamBase', {
	__masterSATStream: null,
	init: function (initNumber, structuredStorage, masterSATStream) {
		if (initNumber > 0) {
			switch (initNumber) {
				case 1:
					this.init1.apply(this, arguments);
					break;
			}
			return;
		}
		$.ig.SATStreamBase.prototype.init.call(this, structuredStorage, 0, 1);
		this.__masterSATStream = masterSATStream;
		var SAT = new $.ig.List$1($.ig.SATStreamBase_SATEntry.prototype.$type, 0);
		SAT.add(new $.ig.SATStreamBase_SATEntry($.ig.StructuredStorageManager.prototype._endOfStreamSectorId, $.ig.StructuredStorageManager.prototype._sATSectorId));
		for (var i = 1; i < this.__sATEntriesPerSector; i++) {
			SAT.add($.ig.SATStreamBase_SATEntry.prototype.freeEntry());
		}
		this._setSATContents(SAT);
	},
	init1: function (initNumber, structuredStorage, firstSATSectorId, numberOfSATSectors, masterSATStream) {
		$.ig.SATStreamBase.prototype.init.call(this, structuredStorage, firstSATSectorId, numberOfSATSectors);
		this.__masterSATStream = masterSATStream;
		this._readSATContents(firstSATSectorId, numberOfSATSectors);
	},
	/*<BeginMethod Name="System.Int32 Infragistics.Documents.Core.StructuredStorage.SATStream::AllocateNewSector(System.Int32)" />*/
	_allocateNewSector: function (lastSectorId) {
		var newSectorId = $.ig.SATStreamBase.prototype._allocateNewSector.call(this, lastSectorId);
		this.__masterSATStream._addNewSATEntry(newSectorId);
		return newSectorId;
	}
	/*<EndMethod Name="System.Int32 Infragistics.Documents.Core.StructuredStorage.SATStream::AllocateNewSector(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.SATStream::Dispose(System.Boolean)" />*/
	disposeCore: function (disposing) {
		$.ig.SATStreamBase.prototype.disposeCore.call(this, disposing);
		if (disposing) {
			this.__masterSATStream.dispose();
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.SATStream::Dispose(System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.Documents.Core.StructuredStorage.SATStream::GetNextSectorId(System.Int32, System.Int32)" />*/
	_getNextSectorId: function (lastSectorId, steps) {
		while (steps < 0) {
			lastSectorId = this.__masterSATStream._getPreviousSATSector(lastSectorId);
			if (lastSectorId < 0) {
				return {
					ret: -1,
					p1: steps
				};
			}
			steps++;
		}
		while (steps > 0) {
			lastSectorId = this.__masterSATStream._getNextSATSector(lastSectorId);
			if (lastSectorId < 0) {
				return {
					ret: -1,
					p1: steps
				};
			}
			steps--;
		}
		return {
			ret: lastSectorId,
			p1: steps
		};
	}
	/*<EndMethod Name="System.Int32 Infragistics.Documents.Core.StructuredStorage.SATStream::GetNextSectorId(System.Int32, System.Int32)" />*/
	,
	/*<BeginProperty Name="Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream_StreamType Infragistics.Documents.Core.StructuredStorage.SATStream::Type()" />*/
	_type: function () {
		return $.ig.StructuredStorageStream_StreamType.prototype.sAT;
	}
	/*<EndProperty Name="Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream_StreamType Infragistics.Documents.Core.StructuredStorage.SATStream::Type()" />*/
	,
	/*<BeginProperty Name="Infragistics.Documents.Core.StructuredStorage.MasterSATStream Infragistics.Documents.Core.StructuredStorage.SATStream::MasterSATStream()" />*/
	_masterSATStream: function () {
		return this.__masterSATStream;
	}
	/*<EndProperty Name="Infragistics.Documents.Core.StructuredStorage.MasterSATStream Infragistics.Documents.Core.StructuredStorage.SATStream::MasterSATStream()" />*/
	,
	$type: new $.ig.Type('SATStream', $.ig.SATStreamBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Core.StructuredStorage.SATStream" />*/

/*<BeginType Name="Infragistics.Documents.Core.StructuredStorage.SATStreamBase_SATEntry" />*/

$.ig.util.defType('SATStreamBase_SATEntry', 'Object', {
	_previousSector: 0,
	_nextSector: 0,
	init: function (previousSector, nextSector) {
		$.ig.Object.prototype.init.call(this);
		this._previousSector = previousSector;
		this._nextSector = nextSector;
	},
	/*<BeginProperty Name="Infragistics.Documents.Core.StructuredStorage.SATStreamBase_SATEntry Infragistics.Documents.Core.StructuredStorage.SATStreamBase_SATEntry::FreeEntry()" />*/
	freeEntry: function () {
		return new $.ig.SATStreamBase_SATEntry($.ig.StructuredStorageManager.prototype._endOfStreamSectorId, $.ig.StructuredStorageManager.prototype._freeSectorId);
	}
	/*<EndProperty Name="Infragistics.Documents.Core.StructuredStorage.SATStreamBase_SATEntry Infragistics.Documents.Core.StructuredStorage.SATStreamBase_SATEntry::FreeEntry()" />*/
	,
	$type: new $.ig.Type('SATStreamBase_SATEntry', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Core.StructuredStorage.SATStreamBase_SATEntry" />*/

/*<BeginType Name="Infragistics.Documents.Core.StructuredStorage.ShortSATStream" />*/

$.ig.util.defType('ShortSATStream', 'SATStreamBase', {
	init: function (structuredStorage, firstShortSATSectorId, numberOfShortSATSectors) {
		$.ig.SATStreamBase.prototype.init.call(this, structuredStorage, firstShortSATSectorId, numberOfShortSATSectors);
		this._readSATContents(firstShortSATSectorId, numberOfShortSATSectors);
	},
	$type: new $.ig.Type('ShortSATStream', $.ig.SATStreamBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Core.StructuredStorage.ShortSATStream" />*/

/*<BeginType Name="Infragistics.Documents.Core.StructuredStorage.StructuredStorageManager" />*/

$.ig.util.defType('StructuredStorageManager', 'Object', {
	__id: null,
	__revisionNumberOfFileFormat: 0,
	__versionNumberOfFileFormat: 0,
	__sectorSize: 0,
	__shortSectorSize: 0,
	__minimumSizeForNormalStreams: 0,
	__stream: null,
	__shortStreamContainerStream: null,
	__sATStream: null,
	__shortSATStream: null,
	__directoryStream: null,
	__isOpen: false,
	__isDirty: false,
	init: function (stream, containsValidData) {
		this.__id = new $.ig.Guid();
		this.__revisionNumberOfFileFormat = 62;
		this.__versionNumberOfFileFormat = 3;
		this.__sectorSize = 512;
		this.__shortSectorSize = 64;
		this.__minimumSizeForNormalStreams = 4096;
		$.ig.Object.prototype.init.call(this);
		$.ig.DocCoreUtils.prototype.debugAssert(stream != null, null);
		this.__stream = new $.ig.SeekableBufferedStream(stream);
		if (containsValidData) {
			var reader = new $.ig.BinaryReader(1, this.__stream);
			var fileTypeIDLow = reader.readUInt32();
			var fileTypeIDHigh = reader.readUInt32();
			if (fileTypeIDLow != $.ig.StructuredStorageManager.prototype.__fileTypeIDLow || fileTypeIDHigh != $.ig.StructuredStorageManager.prototype.__fileTypeIDHigh) {
				$.ig.DocCoreUtils.prototype.debugFail("Invalid file type");
				return;
			}
			this.__id = new $.ig.Guid(1, reader.readBytes(16));
			this.__revisionNumberOfFileFormat = reader.readUInt16();
			this.__versionNumberOfFileFormat = reader.readUInt16();
			var binaryFormat = reader.readUInt16();
			$.ig.DocCoreUtils.prototype.debugAssert(binaryFormat == $.ig.StructuredStorageManager.prototype.__littleEndianFormat, null);
			this.__sectorSize = 1 << reader.readUInt16();
			this.__shortSectorSize = 1 << reader.readUInt16();
			$.ig.DocCoreUtils.prototype.debugAssert(this.__sectorSize > this.__shortSectorSize, null);
			reader.readBytes(10);
			var numberOfSATSectors = reader.readInt32();
			var firstDirectoryStreamSectorId = reader.readInt32();
			reader.readBytes(4);
			this.__minimumSizeForNormalStreams = reader.readInt32();
			var firstMasterShortSATSectorId = reader.readInt32();
			var numberOfShortSATSectors = reader.readInt32();
			var firstMasterSATSectorId = reader.readInt32();
			var numberOfMasterSATSectors = reader.readInt32();
			var headerMasterSAT = new Array($.ig.StructuredStorageManager.prototype._headerMasterSATLength);
			for (var i = 0; i < $.ig.StructuredStorageManager.prototype._headerMasterSATLength; i++) {
				headerMasterSAT[i] = reader.readInt32();
			}
			var masterSATStream = new $.ig.MasterSATStream(this, firstMasterSATSectorId, numberOfMasterSATSectors, headerMasterSAT);
			this.__sATStream = new $.ig.SATStream(1, this, headerMasterSAT[0], numberOfSATSectors, masterSATStream);
			this.__shortSATStream = new $.ig.ShortSATStream(this, firstMasterShortSATSectorId, numberOfShortSATSectors);
			this.__directoryStream = new $.ig.DirectoryStream(1, this, firstDirectoryStreamSectorId);
			this.__directoryStream._readDirectoryEntryHeaders();
			this.__shortStreamContainerStream = new $.ig.DirectoryEntryStream(0, this, this.__directoryStream._rootEntry());
		} else {
			var headerMasterSAT1 = new Array($.ig.StructuredStorageManager.prototype._headerMasterSATLength);
			headerMasterSAT1[0] = 0;
			for (var i1 = 1; i1 < $.ig.StructuredStorageManager.prototype._headerMasterSATLength; i1++) {
				headerMasterSAT1[i1] = $.ig.StructuredStorageManager.prototype._freeSectorId;
			}
			var masterSATStream1 = new $.ig.MasterSATStream(this, $.ig.StructuredStorageManager.prototype._endOfStreamSectorId, 0, headerMasterSAT1);
			this.__sATStream = new $.ig.SATStream(0, this, masterSATStream1);
			this.__shortSATStream = new $.ig.ShortSATStream(this, $.ig.StructuredStorageManager.prototype._endOfStreamSectorId, 0);
			this.__directoryStream = new $.ig.DirectoryStream(0, this);
			this.__shortStreamContainerStream = new $.ig.DirectoryEntryStream(0, this, this.__directoryStream._rootEntry());
		}
		this.__isOpen = true;
	},
	/*<BeginMethod Name="System.IO.Stream Infragistics.Documents.Core.StructuredStorage.StructuredStorageManager::AddFile(System.String)" />*/
	_addFile: function (fileName) {
		var file = this.__directoryStream._addFile(fileName);
		if (file == null) {
			return null;
		}
		this.__isDirty = true;
		return new $.ig.UserFileStream(this, file);
	}
	/*<EndMethod Name="System.IO.Stream Infragistics.Documents.Core.StructuredStorage.StructuredStorageManager::AddFile(System.String)" />*/
	,
	/*<BeginMethod Name="System.IO.Stream Infragistics.Documents.Core.StructuredStorage.StructuredStorageManager::GetFileStream(System.String)" />*/
	_getFileStream: function (fileName) {
		if (this.__isOpen == false) {
			$.ig.DocCoreUtils.prototype.debugFail("The structured storage stream is closed");
			return null;
		}
		var file = this.__directoryStream._rootEntry().getFile(String.empty(), fileName);
		if (file == null) {
			return null;
		}
		return new $.ig.UserFileStream(this, file);
	}
	/*<EndMethod Name="System.IO.Stream Infragistics.Documents.Core.StructuredStorage.StructuredStorageManager::GetFileStream(System.String)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Core.StructuredStorage.StructuredStorageManager::IsStructuredStorageStream(System.IO.Stream)" />*/
	_isStructuredStorageStream: function (stream) {
		if (stream.length() < 8) {
			return false;
		}
		stream.position(0);
		try {
			var reader = new $.ig.BinaryReader(1, stream);
			var fileTypeIDLow = reader.readUInt32();
			var fileTypeIDHigh = reader.readUInt32();
			return fileTypeIDLow == $.ig.StructuredStorageManager.prototype.__fileTypeIDLow && fileTypeIDHigh == $.ig.StructuredStorageManager.prototype.__fileTypeIDHigh;
		}
		finally {
			stream.position(0);
		}
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Core.StructuredStorage.StructuredStorageManager::IsStructuredStorageStream(System.IO.Stream)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.StructuredStorageManager::Dispose(System.Boolean)" />*/
	_dispose1: function (disposing) {
		if (this.__isOpen) {
			if (disposing && this.__isDirty) {
				this.__directoryStream.dispose();
				this.__shortStreamContainerStream.dispose();
				this.__shortSATStream.dispose();
				this.__sATStream.dispose();
				this.__stream.position(0);
				var writer = new $.ig.BinaryWriter(1, this.__stream);
				writer.write15($.ig.StructuredStorageManager.prototype.__fileTypeIDLow);
				writer.write15($.ig.StructuredStorageManager.prototype.__fileTypeIDHigh);
				writer.write(this.__id.toByteArray());
				writer.write14(this.__revisionNumberOfFileFormat);
				writer.write14(this.__versionNumberOfFileFormat);
				writer.write14($.ig.StructuredStorageManager.prototype.__littleEndianFormat);
				var sectorSizePower = $.ig.truncate(Math.round(Math.logBase(this.__sectorSize, 2)));
				$.ig.DocCoreUtils.prototype.debugAssert(Math.pow(2, sectorSizePower) == this.__sectorSize, null);
				writer.write14(sectorSizePower);
				var shortSectorSizePower = $.ig.truncate(Math.round(Math.logBase(this.__shortSectorSize, 2)));
				$.ig.DocCoreUtils.prototype.debugAssert(Math.pow(2, shortSectorSizePower) == this.__shortSectorSize, null);
				writer.write14(shortSectorSizePower);
				writer.write(new Array(10));
				writer.write9((($.ig.intDivide((this.__sATStream.length() - 1), this.__sectorSize)) + 1));
				writer.write9(this.__directoryStream._firstSectorId());
				writer.write(new Array(4));
				writer.write9(this.__minimumSizeForNormalStreams);
				writer.write9(this.__shortSATStream._firstSectorId());
				if (this.__shortSATStream.length() == 0) {
					writer.write9(0);
				} else {
					writer.write9((($.ig.intDivide((this.__shortSATStream.length() - 1), this.__sectorSize)) + 1));
				}
				writer.write9(this.__sATStream._masterSATStream()._firstSectorId());
				if (this.__sATStream._masterSATStream().length() == 0) {
					writer.write9(0);
				} else {
					writer.write9((($.ig.intDivide((this.__sATStream._masterSATStream().length() - 1), this.__sectorSize)) + 1));
				}
				var headerMasterSAT = this.__sATStream._masterSATStream()._headerMasterSAT();
				for (var i = 0; i < headerMasterSAT.length; i++) {
					writer.write9(headerMasterSAT[i]);
				}
				this.__stream.flush();
				this.__stream.position(this.__stream.length());
			}
			this.__directoryStream = null;
			this.__shortStreamContainerStream = null;
			this.__shortSATStream = null;
			this.__sATStream = null;
			this.__stream = null;
			this.__isDirty = false;
			this.__isOpen = false;
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.StructuredStorageManager::Dispose(System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.Documents.Core.StructuredStorage.StructuredStorageManager::AllocateNewSector(System.Int32, System.Boolean, Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream_StreamType)" />*/
	_allocateNewSector: function (lastSectorId, isShortStream, streamType) {
		if (isShortStream) {
			$.ig.DocCoreUtils.prototype.debugAssert(streamType == $.ig.StructuredStorageStream_StreamType.prototype.normal, null);
			return this.__shortSATStream._allocateNewSectorForStream(lastSectorId, streamType);
		}
		return this.__sATStream._allocateNewSectorForStream(lastSectorId, streamType);
	}
	/*<EndMethod Name="System.Int32 Infragistics.Documents.Core.StructuredStorage.StructuredStorageManager::AllocateNewSector(System.Int32, System.Boolean, Infragistics.Documents.Core.StructuredStorage.StructuredStorageStream_StreamType)" />*/
	,
	/*<BeginMethod Name="System.Int64 Infragistics.Documents.Core.StructuredStorage.StructuredStorageManager::GetSectorPosition(System.Int32, System.Int32, System.Boolean)" />*/
	_getSectorPosition: function (sectorId, offsetInSector, isShortSector) {
		if (isShortSector) {
			return (sectorId * this.__shortSectorSize) + offsetInSector;
		}
		return $.ig.StructuredStorageManager.prototype.__headerLength + (sectorId * this.__sectorSize) + offsetInSector;
	}
	/*<EndMethod Name="System.Int64 Infragistics.Documents.Core.StructuredStorage.StructuredStorageManager::GetSectorPosition(System.Int32, System.Int32, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.IO.Stream Infragistics.Documents.Core.StructuredStorage.StructuredStorageManager::GetStreamContainerStream(System.Boolean)" />*/
	_getStreamContainerStream: function (isShortStream) {
		if (isShortStream) {
			return this.__shortStreamContainerStream;
		}
		return this.__stream;
	}
	/*<EndMethod Name="System.IO.Stream Infragistics.Documents.Core.StructuredStorage.StructuredStorageManager::GetStreamContainerStream(System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.Documents.Core.StructuredStorage.StructuredStorageManager::GetNextSectorId(System.Int32, System.Int32, System.Boolean)" />*/
	_getNextSectorId: function (lastSectorId, steps, isShortStream) {
		var $self = this;
		if (isShortStream) {
			return {
				ret: (function () { var $ret = $self.__shortSATStream._getNextSectorIdInSAT(lastSectorId, steps); steps = $ret.p1; return $ret.ret; }()),
				p1: steps
			};
		}
		return {
			ret: (function () { var $ret = $self.__sATStream._getNextSectorIdInSAT(lastSectorId, steps); steps = $ret.p1; return $ret.ret; }()),
			p1: steps
		};
	}
	/*<EndMethod Name="System.Int32 Infragistics.Documents.Core.StructuredStorage.StructuredStorageManager::GetNextSectorId(System.Int32, System.Int32, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.Documents.Core.StructuredStorage.StructuredStorageManager::GetSectorSize(System.Boolean)" />*/
	_getSectorSize: function (isShortStream) {
		if (isShortStream) {
			return this.__shortSectorSize;
		}
		return this.__sectorSize;
	}
	/*<EndMethod Name="System.Int32 Infragistics.Documents.Core.StructuredStorage.StructuredStorageManager::GetSectorSize(System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Core.StructuredStorage.StructuredStorageManager::IsShortStream(System.Int32)" />*/
	_isShortStream: function (streamLength) {
		return streamLength < this.__minimumSizeForNormalStreams;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Core.StructuredStorage.StructuredStorageManager::IsShortStream(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int64 Infragistics.Documents.Core.StructuredStorage.StructuredStorageManager::SeekToSector(System.Int32, System.Boolean)" />*/
	_seekToSector: function (sectorId, isShortSector) {
		return this._seekToSector1(sectorId, 0, isShortSector);
	}
	/*<EndMethod Name="System.Int64 Infragistics.Documents.Core.StructuredStorage.StructuredStorageManager::SeekToSector(System.Int32, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Int64 Infragistics.Documents.Core.StructuredStorage.StructuredStorageManager::SeekToSector(System.Int32, System.Int32, System.Boolean)" />*/
	_seekToSector1: function (sectorId, offsetInSector, isShortStream) {
		var newPosition = this._getSectorPosition(sectorId, offsetInSector, isShortStream);
		this._getStreamContainerStream(isShortStream).position(newPosition);
		return newPosition;
	}
	/*<EndMethod Name="System.Int64 Infragistics.Documents.Core.StructuredStorage.StructuredStorageManager::SeekToSector(System.Int32, System.Int32, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.StructuredStorageManager::RemoveStream(Infragistics.Documents.Core.StructuredStorage.UserFileStream)" />*/
	_removeStream: function (stream) {
		if (stream._isShortStream()) {
			this.__shortSATStream._removeStream(stream);
		} else {
			this.__sATStream._removeStream(stream);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.StructuredStorageManager::RemoveStream(Infragistics.Documents.Core.StructuredStorage.UserFileStream)" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.Documents.Core.StructuredStorage.StructuredStorageManager::IsDirty()" />*/
	_isDirty: function (value) {
		if (arguments.length === 1) {
			this.__isDirty = value;
			return value;
		} else {
			return this.__isDirty;
		}
	}
	/*<EndProperty Name="System.Boolean Infragistics.Documents.Core.StructuredStorage.StructuredStorageManager::IsDirty()" />*/
	,
	/*<BeginProperty Name="Infragistics.Documents.Core.StructuredStorage.Directory Infragistics.Documents.Core.StructuredStorage.StructuredStorageManager::RootDirectory()" />*/
	_rootDirectory: function () {
		return this.__directoryStream._rootEntry();
	}
	/*<EndProperty Name="Infragistics.Documents.Core.StructuredStorage.Directory Infragistics.Documents.Core.StructuredStorage.StructuredStorageManager::RootDirectory()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.StructuredStorageManager::Dispose()" />*/
	dispose: function () {
		this._dispose1(true);
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.StructuredStorageManager::Dispose()" />*/
	,
	$type: new $.ig.Type('StructuredStorageManager', $.ig.Object.prototype.$type, [$.ig.IDisposable.prototype.$type])
}, true);

/*<EndType Name="Infragistics.Documents.Core.StructuredStorage.StructuredStorageManager" />*/

/*<BeginType Name="Infragistics.Documents.Core.StructuredStorage.UserFileStream" />*/

$.ig.util.defType('UserFileStream', 'DirectoryEntryStream', {
	__file: null,
	init: function (structuredStorage, file) {
		$.ig.DirectoryEntryStream.prototype.init1.call(this, 1, structuredStorage, file, structuredStorage._isShortStream(file.size()));
		this.__file = file;
	},
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.UserFileStream::SetLength(System.Int64)" />*/
	setLength: function (value) {
		if (this._isShortStream() && this._storageManager()._isShortStream(value) == false) {
			var oldPosition = this.position();
			$.ig.DocCoreUtils.prototype.debugAssert(oldPosition >= 0, null);
			var data = new Array(this.length());
			if (data.length > 0) {
				this.position(0);
				this.read(data, 0, data.length);
				this._setLengthInternal(0);
			}
			this._storageManager()._removeStream(this);
			this.__isShortStream = false;
			this._resetCache();
			this._setFirstSectorId(this._storageManager()._allocateNewSector(-1, this._isShortStream(), this._type()));
			this.__file.firstSectorId(this._firstSectorId());
			if (data.length > 0) {
				this.position(0);
				this.write(data, 0, data.length);
				this.position(oldPosition);
			}
		}
		$.ig.DirectoryEntryStream.prototype.setLength.call(this, value);
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.UserFileStream::SetLength(System.Int64)" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.Documents.Core.StructuredStorage.UserFileStream::IsShortStream()" />*/
	_isShortStream: function () {
		return this.__isShortStream;
	}
	/*<EndProperty Name="System.Boolean Infragistics.Documents.Core.StructuredStorage.UserFileStream::IsShortStream()" />*/
	,
	$type: new $.ig.Type('UserFileStream', $.ig.DirectoryEntryStream.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Core.StructuredStorage.UserFileStream" />*/

/*<BeginType Name="Infragistics.Documents.Core.StructuredStorage.FileTypes.InformationBase" />*/

$.ig.util.defType('InformationBase', 'Object', {
	_defaultProperties: null,
	_encoding: null,
	_id: null,
	init: function () {
		this._encoding = $.ig.DocCoreUtils.prototype.encodingDefault();
		this._id = new $.ig.Guid();
		$.ig.Object.prototype.init.call(this);
		this._defaultProperties = new $.ig.Dictionary$2($.ig.Number.prototype.$type, $.ig.Object.prototype.$type, 0);
	},
	/*<BeginMethod Name="System.Text.Encoding Infragistics.Documents.Core.StructuredStorage.FileTypes.InformationBase::GetRequiredEncoding(System.Collections.Generic.List)" />*/
	getRequiredEncoding: function (stringValues) {
		var encoding = $.ig.DocCoreUtils.prototype.encodingDefault();
		for (var i = 0; i < stringValues.count(); i++) {
			var currentString = stringValues.__inner[i];
			if (currentString != encoding.getString(encoding.getBytes1(currentString))) {
				$.ig.DocCoreUtils.prototype.debugAssert(currentString == $.ig.Encoding.prototype.uTF8().getString($.ig.Encoding.prototype.uTF8().getBytes1(currentString)), null);
				return $.ig.Encoding.prototype.uTF8();
			}
		}
		return encoding;
	}
	/*<EndMethod Name="System.Text.Encoding Infragistics.Documents.Core.StructuredStorage.FileTypes.InformationBase::GetRequiredEncoding(System.Collections.Generic.List)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.FileTypes.InformationBase::Load(System.IO.Stream)" />*/
	load: function (stream) {
		var reader = new $.ig.BinaryReader(1, stream);
		var headerValue = reader.readUInt16();
		if (headerValue != $.ig.InformationBase.prototype._headerValue) {
			$.ig.DocCoreUtils.prototype.debugFail("Invalid header value");
			stream.position(0);
			return;
		}
		var shouldBeZeros = reader.readUInt16();
		$.ig.DocCoreUtils.prototype.debugAssert(shouldBeZeros == 0, null);
		reader.readInt32();
		this._id = new $.ig.Guid(1, reader.readBytes(16));
		var sectionDefinitions = new $.ig.List$1($.ig.InformationBase_PropertySectionDefinition.prototype.$type, 0);
		var numberOfSections = reader.readInt32();
		for (var i = 0; i < numberOfSections; i++) {
			var sectionDefintion = new $.ig.InformationBase_PropertySectionDefinition();
			sectionDefintion._sectionType = new $.ig.Guid(1, reader.readBytes(16));
			sectionDefintion._positionOfSection = reader.readInt32();
			sectionDefinitions.add(sectionDefintion);
		}
		for (var i1 = 0; i1 < numberOfSections; i1++) {
			this.readSection(reader, sectionDefinitions.__inner[i1]);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.FileTypes.InformationBase::Load(System.IO.Stream)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.FileTypes.InformationBase::PopuplateSectionDefinitions(System.Collections.Generic.List)" />*/
	popuplateSectionDefinitions: function (sectionDefinitions) {
		var definition = new $.ig.InformationBase_PropertySectionDefinition();
		definition._sectionType = new $.ig.Guid(3, this.defaultSectionId());
		sectionDefinitions.add(definition);
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.FileTypes.InformationBase::PopuplateSectionDefinitions(System.Collections.Generic.List)" />*/
	,
	/*<BeginMethod Name="System.Object Infragistics.Documents.Core.StructuredStorage.FileTypes.InformationBase::ReadProperty(System.IO.BinaryReader, Infragistics.Documents.Core.StructuredStorage.FileTypes.InformationBase_PropertyDefinition)" />*/
	readProperty: function (reader, definition) {
		reader.baseStream().position(definition._positionOfValue);
		return $.ig.VariantUtilities.prototype.readVariant(reader, this._encoding);
	}
	/*<EndMethod Name="System.Object Infragistics.Documents.Core.StructuredStorage.FileTypes.InformationBase::ReadProperty(System.IO.BinaryReader, Infragistics.Documents.Core.StructuredStorage.FileTypes.InformationBase_PropertyDefinition)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.FileTypes.InformationBase::ReadSection(System.IO.BinaryReader, Infragistics.Documents.Core.StructuredStorage.FileTypes.InformationBase_PropertySectionDefinition)" />*/
	readSection: function (reader, sectionDefintion) {
		reader.baseStream().position(sectionDefintion._positionOfSection);
		sectionDefintion._sectionLength = reader.readInt32();
		sectionDefintion._propertyCount = reader.readInt32();
		sectionDefintion._propertyDefinitions = new $.ig.List$1($.ig.InformationBase_PropertyDefinition.prototype.$type, 2, sectionDefintion._propertyCount);
		for (var j = 0; j < sectionDefintion._propertyCount; j++) {
			var definition = new $.ig.InformationBase_PropertyDefinition();
			definition._type = reader.readInt32();
			definition._positionOfValue = sectionDefintion._positionOfSection + reader.readInt32();
			sectionDefintion._propertyDefinitions.add(definition);
		}
		this.readSectionProperties(reader, sectionDefintion);
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.FileTypes.InformationBase::ReadSection(System.IO.BinaryReader, Infragistics.Documents.Core.StructuredStorage.FileTypes.InformationBase_PropertySectionDefinition)" />*/
	,
	/*<BeginMethod Name="System.Text.Encoding Infragistics.Documents.Core.StructuredStorage.FileTypes.InformationBase::ReadSectionCodePage(System.IO.BinaryReader, Infragistics.Documents.Core.StructuredStorage.FileTypes.InformationBase_PropertySectionDefinition)" />*/
	readSectionCodePage: function (reader, sectionDefintion) {
		for (var i = 0; i < sectionDefintion._propertyCount; i++) {
			var definition = sectionDefintion._propertyDefinitions.__inner[i];
			if (definition._type == $.ig.InformationBase.prototype.codePagePropertyType) {
				return $.ig.DocCoreUtils.prototype.encodingGetEncoding($.ig.util.getValue(this.readProperty(reader, definition)));
			}
		}
		return $.ig.DocCoreUtils.prototype.encodingDefault();
	}
	/*<EndMethod Name="System.Text.Encoding Infragistics.Documents.Core.StructuredStorage.FileTypes.InformationBase::ReadSectionCodePage(System.IO.BinaryReader, Infragistics.Documents.Core.StructuredStorage.FileTypes.InformationBase_PropertySectionDefinition)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.FileTypes.InformationBase::ReadSectionProperties(System.IO.BinaryReader, Infragistics.Documents.Core.StructuredStorage.FileTypes.InformationBase_PropertySectionDefinition)" />*/
	readSectionProperties: function (reader, sectionDefintion) {
		var sectionId = sectionDefintion._sectionType.toString2("N");
		if (sectionId == this.defaultSectionId()) {
			this._defaultProperties = new $.ig.Dictionary$2($.ig.Number.prototype.$type, $.ig.Object.prototype.$type, 0);
			this._encoding = this.readSectionCodePage(reader, sectionDefintion);
			for (var i = 0; i < sectionDefintion._propertyCount; i++) {
				var definition = sectionDefintion._propertyDefinitions.__inner[i];
				if (reader.baseStream().length() < (definition._positionOfValue + 4)) {
					$.ig.DocCoreUtils.prototype.debugFail("Cannot read the current property's variant type. Something is wrong with the information file.");
					continue;
				}
				if (definition._type != $.ig.InformationBase.prototype.codePagePropertyType) {
					this._defaultProperties.add(definition._type, this.readProperty(reader, definition));
				}
			}
		} else {
			$.ig.DocCoreUtils.prototype.debugFail("Unknown section type: " + sectionId);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.FileTypes.InformationBase::ReadSectionProperties(System.IO.BinaryReader, Infragistics.Documents.Core.StructuredStorage.FileTypes.InformationBase_PropertySectionDefinition)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.FileTypes.InformationBase::Save(System.IO.Stream)" />*/
	save: function (stream) {
		this.veridyEncoding();
		var writer = new $.ig.BinaryWriter(1, stream);
		writer.write14($.ig.InformationBase.prototype._headerValue);
		writer.write14(0);
		var osVersion = 0;
		writer.write9(osVersion);
		writer.write(this._id.toByteArray());
		var sectionDefinitions = new $.ig.List$1($.ig.InformationBase_PropertySectionDefinition.prototype.$type, 0);
		this.popuplateSectionDefinitions(sectionDefinitions);
		stream.position(stream.position() + (4 + (20 * sectionDefinitions.count())));
		for (var i = 0; i < sectionDefinitions.count(); i++) {
			var sectionDefintion = sectionDefinitions.__inner[i];
			sectionDefintion._positionOfSection = stream.position();
			this.writeSection(writer, sectionDefintion);
		}
		stream.position(24);
		writer.write9(sectionDefinitions.count());
		for (var i1 = 0; i1 < sectionDefinitions.count(); i1++) {
			var sectionDefintion1 = sectionDefinitions.__inner[i1];
			writer.write(sectionDefintion1._sectionType.toByteArray());
			writer.write9(sectionDefintion1._positionOfSection);
		}
		stream.position(stream.length());
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.FileTypes.InformationBase::Save(System.IO.Stream)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.FileTypes.InformationBase::VeridyEncoding()" />*/
	veridyEncoding: function () {
		var stringValues = new $.ig.List$1(String, 0);
		var en = this._defaultProperties.values().getEnumerator();
		while (en.moveNext()) {
			var value = en.current();
			var stringValue = $.ig.util.cast(String, value);
			if (stringValue != null) {
				stringValues.add(stringValue);
				continue;
			}
			var array = $.ig.util.cast(Array, value);
			if (array != null) {
				for (var i = 0; i < array.length; i++) {
					stringValue = $.ig.util.cast(String, array.getValue(i));
					if (stringValue != null) {
						stringValues.add(stringValue);
					}
				}
			}
		}
		this._encoding = $.ig.InformationBase.prototype.getRequiredEncoding(stringValues);
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.FileTypes.InformationBase::VeridyEncoding()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.FileTypes.InformationBase::WriteSection(System.IO.BinaryWriter, Infragistics.Documents.Core.StructuredStorage.FileTypes.InformationBase_PropertySectionDefinition)" />*/
	writeSection: function (writer, sectionDefintion) {
		writer.baseStream().position(writer.baseStream().position() + 8);
		this.writeSectionProperties(writer, sectionDefintion);
		while (writer.baseStream().position() % 4 != 0) {
			writer.write5(0);
		}
		sectionDefintion._sectionLength = (writer.baseStream().position() - sectionDefintion._positionOfSection);
		writer.baseStream().position(sectionDefintion._positionOfSection);
		writer.write9(sectionDefintion._sectionLength);
		writer.write9(sectionDefintion._propertyDefinitions.count());
		for (var i = 0; i < sectionDefintion._propertyDefinitions.count(); i++) {
			var defintion = sectionDefintion._propertyDefinitions.__inner[i];
			writer.write9(defintion._type);
			writer.write9(defintion._positionOfValue - sectionDefintion._positionOfSection);
		}
		writer.baseStream().position(sectionDefintion._positionOfSection + sectionDefintion._sectionLength);
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.FileTypes.InformationBase::WriteSection(System.IO.BinaryWriter, Infragistics.Documents.Core.StructuredStorage.FileTypes.InformationBase_PropertySectionDefinition)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.FileTypes.InformationBase::WriteSectionProperties(System.IO.BinaryWriter, Infragistics.Documents.Core.StructuredStorage.FileTypes.InformationBase_PropertySectionDefinition)" />*/
	writeSectionProperties: function (writer, sectionDefintion) {
		var sectionId = sectionDefintion._sectionType.toString2("N");
		if (sectionId == this.defaultSectionId()) {
			sectionDefintion._propertyCount = this._defaultProperties.count() + 1;
			sectionDefintion._propertyDefinitions = new $.ig.List$1($.ig.InformationBase_PropertyDefinition.prototype.$type, 0);
			writer.baseStream().position(writer.baseStream().position() + (sectionDefintion._propertyCount * 8));
			var codePageDefinition = new $.ig.InformationBase_PropertyDefinition();
			codePageDefinition._positionOfValue = writer.baseStream().position();
			codePageDefinition._type = $.ig.InformationBase.prototype.codePagePropertyType;
			$.ig.VariantUtilities.prototype.writeVariant(writer, this._encoding, $.ig.DocCoreUtils.prototype.encodingGetCodePage(this._encoding));
			sectionDefintion._propertyDefinitions.add(codePageDefinition);
			var en = this._defaultProperties.getEnumerator();
			while (en.moveNext()) {
				var property = en.current();
				var definition = new $.ig.InformationBase_PropertyDefinition();
				definition._positionOfValue = writer.baseStream().position();
				definition._type = property.key();
				$.ig.VariantUtilities.prototype.writeVariant(writer, this._encoding, property.value());
				sectionDefintion._propertyDefinitions.add(definition);
			}
		} else {
			$.ig.DocCoreUtils.prototype.debugFail("Unknown section type: " + sectionId);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.FileTypes.InformationBase::WriteSectionProperties(System.IO.BinaryWriter, Infragistics.Documents.Core.StructuredStorage.FileTypes.InformationBase_PropertySectionDefinition)" />*/
	,
	/*<BeginProperty Name="System.Collections.Generic.Dictionary Infragistics.Documents.Core.StructuredStorage.FileTypes.InformationBase::DefaultProperties()" />*/
	defaultProperties: function () {
		return this._defaultProperties;
	}
	/*<EndProperty Name="System.Collections.Generic.Dictionary Infragistics.Documents.Core.StructuredStorage.FileTypes.InformationBase::DefaultProperties()" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Core.StructuredStorage.FileTypes.InformationBase::DefaultSectionId()" />*/
	defaultSectionId: function () {
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Core.StructuredStorage.FileTypes.InformationBase::DefaultSectionId()" />*/
	,
	$type: new $.ig.Type('InformationBase', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Core.StructuredStorage.FileTypes.InformationBase" />*/

/*<BeginType Name="Infragistics.Documents.Core.StructuredStorage.FileTypes.DocumentSummaryInformation" />*/

$.ig.util.defType('DocumentSummaryInformation', 'InformationBase', {
	_properties: null,
	_userDefinedProperties: null,
	_userDefinedNames: null,
	_userDefinedPropertiesRaw: null,
	_userSectionEncoding: null,
	init: function () {
		this._userSectionEncoding = $.ig.DocCoreUtils.prototype.encodingDefault();
		$.ig.InformationBase.prototype.init.call(this);
		this._userDefinedNames = new $.ig.List$1(String, 0);
		this._userDefinedPropertiesRaw = new $.ig.Dictionary$2(String, $.ig.Object.prototype.$type, 2, $.ig.StringUtilities.prototype.stringComparerInvariantCultureIgnoreCase());
		this._userDefinedProperties = new $.ig.Dictionary$2($.ig.UserDefinedPropertyType.prototype.$type, $.ig.Object.prototype.$type, 0);
	},
	/*<BeginProperty Name="System.String Infragistics.Documents.Core.StructuredStorage.FileTypes.DocumentSummaryInformation::DefaultSectionId()" />*/
	defaultSectionId: function () {
		return "d5cdd5022e9c101b939708002b2cf9ae";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Core.StructuredStorage.FileTypes.DocumentSummaryInformation::DefaultSectionId()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.FileTypes.DocumentSummaryInformation::PopuplateSectionDefinitions(System.Collections.Generic.List)" />*/
	popuplateSectionDefinitions: function (sectionDefinitions) {
		$.ig.InformationBase.prototype.popuplateSectionDefinitions.call(this, sectionDefinitions);
		if (this._userDefinedPropertiesRaw.count() > 0) {
			var definition = new $.ig.InformationBase_PropertySectionDefinition();
			definition._sectionType = new $.ig.Guid(3, $.ig.DocumentSummaryInformation.prototype._userSectionId);
			sectionDefinitions.add(definition);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.FileTypes.DocumentSummaryInformation::PopuplateSectionDefinitions(System.Collections.Generic.List)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.FileTypes.DocumentSummaryInformation::ReadSectionProperties(System.IO.BinaryReader, Infragistics.Documents.Core.StructuredStorage.FileTypes.InformationBase_PropertySectionDefinition)" />*/
	readSectionProperties: function (reader, sectionDefintion) {
		var sectionId = sectionDefintion._sectionType.toString2("N");
		if (sectionId == $.ig.DocumentSummaryInformation.prototype._userSectionId) {
			this._userSectionEncoding = this.readSectionCodePage(reader, sectionDefintion);
			for (var j = 0; j < sectionDefintion._propertyCount; j++) {
				var definition = sectionDefintion._propertyDefinitions.__inner[j];
				if (definition._type != 1) {
					this.readUserDefinedProperty(reader, definition);
				}
			}
		} else {
			$.ig.InformationBase.prototype.readSectionProperties.call(this, reader, sectionDefintion);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.FileTypes.DocumentSummaryInformation::ReadSectionProperties(System.IO.BinaryReader, Infragistics.Documents.Core.StructuredStorage.FileTypes.InformationBase_PropertySectionDefinition)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.FileTypes.DocumentSummaryInformation::VeridyEncoding()" />*/
	veridyEncoding: function () {
		$.ig.InformationBase.prototype.veridyEncoding.call(this);
		var stringValues = new $.ig.List$1(String, 0);
		var en = this._userDefinedPropertiesRaw.keys().getEnumerator();
		while (en.moveNext()) {
			var name = en.current();
			stringValues.add(name);
		}
		var en1 = this._userDefinedPropertiesRaw.values().getEnumerator();
		while (en1.moveNext()) {
			var value = en1.current();
			var stringValue = $.ig.util.cast(String, value);
			if (stringValue != null) {
				stringValues.add(stringValue);
			}
		}
		this._userSectionEncoding = $.ig.InformationBase.prototype.getRequiredEncoding(stringValues);
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.FileTypes.DocumentSummaryInformation::VeridyEncoding()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.FileTypes.DocumentSummaryInformation::WriteSectionProperties(System.IO.BinaryWriter, Infragistics.Documents.Core.StructuredStorage.FileTypes.InformationBase_PropertySectionDefinition)" />*/
	writeSectionProperties: function (writer, sectionDefintion) {
		var sectionId = sectionDefintion._sectionType.toString2("N");
		if (sectionId == $.ig.DocumentSummaryInformation.prototype._userSectionId) {
			sectionDefintion._propertyCount = this._userDefinedPropertiesRaw.count() + 3;
			sectionDefintion._propertyDefinitions = new $.ig.List$1($.ig.InformationBase_PropertyDefinition.prototype.$type, 0);
			writer.baseStream().position(writer.baseStream().position() + (sectionDefintion._propertyCount * 8));
			var dictionaryDefinition = new $.ig.InformationBase_PropertyDefinition();
			dictionaryDefinition._positionOfValue = writer.baseStream().position();
			dictionaryDefinition._type = $.ig.UserDefinedPropertyType.prototype.dictionary;
			this.writeUserDefinedProperty(writer, dictionaryDefinition);
			sectionDefintion._propertyDefinitions.add(dictionaryDefinition);
			var codePageDefinition = new $.ig.InformationBase_PropertyDefinition();
			codePageDefinition._positionOfValue = writer.baseStream().position();
			codePageDefinition._type = $.ig.InformationBase.prototype.codePagePropertyType;
			$.ig.VariantUtilities.prototype.writeVariant(writer, this._userSectionEncoding, $.ig.DocCoreUtils.prototype.encodingGetCodePage(this._userSectionEncoding));
			sectionDefintion._propertyDefinitions.add(codePageDefinition);
			var localeDefinition = new $.ig.InformationBase_PropertyDefinition();
			localeDefinition._positionOfValue = writer.baseStream().position();
			localeDefinition._type = $.ig.UserDefinedPropertyType.prototype.locale;
			this.writeUserDefinedProperty(writer, localeDefinition);
			sectionDefintion._propertyDefinitions.add(localeDefinition);
			var en = this.userDefinedProperties().getEnumerator();
			while (en.moveNext()) {
				var property = en.current();
				var definition = new $.ig.InformationBase_PropertyDefinition();
				definition._positionOfValue = writer.baseStream().position();
				definition._type = property.key();
				$.ig.VariantUtilities.prototype.writeVariant(writer, this._userSectionEncoding, property.value());
				sectionDefintion._propertyDefinitions.add(definition);
			}
			for (var propertyType = 0; propertyType < this._userDefinedNames.count(); propertyType++) {
				var definition1 = new $.ig.InformationBase_PropertyDefinition();
				definition1._positionOfValue = writer.baseStream().position();
				definition1._type = propertyType + $.ig.DocumentSummaryInformation.prototype._firstUserPropertyType;
				this.writeUserDefinedProperty(writer, definition1);
				sectionDefintion._propertyDefinitions.add(definition1);
			}
		} else {
			$.ig.InformationBase.prototype.writeSectionProperties.call(this, writer, sectionDefintion);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.FileTypes.DocumentSummaryInformation::WriteSectionProperties(System.IO.BinaryWriter, Infragistics.Documents.Core.StructuredStorage.FileTypes.InformationBase_PropertySectionDefinition)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.FileTypes.DocumentSummaryInformation::ReadUserDefinedProperty(System.IO.BinaryReader, Infragistics.Documents.Core.StructuredStorage.FileTypes.InformationBase_PropertyDefinition)" />*/
	readUserDefinedProperty: function (reader, definition) {
		reader.baseStream().position(definition._positionOfValue);
		switch (definition._type) {
			case $.ig.UserDefinedPropertyType.prototype.dictionary:
				{
					var numberOfUserProperties = reader.readInt32();
					this._userDefinedNames = new $.ig.List$1(String, 2, numberOfUserProperties);
					this._userDefinedPropertiesRaw = new $.ig.Dictionary$2(String, $.ig.Object.prototype.$type, 4, numberOfUserProperties, $.ig.StringUtilities.prototype.stringComparerInvariantCultureIgnoreCase());
					for (var i = 0; i < this._userDefinedNames.capacity(); i++) {
						this._userDefinedNames.add(null);
					}
					for (var i1 = 0; i1 < numberOfUserProperties; i1++) {
						var propertyIndex = reader.readInt32();
						this._userDefinedNames.__inner[propertyIndex - $.ig.DocumentSummaryInformation.prototype._firstUserPropertyType] = $.ig.VariantUtilities.prototype.readVariantType(reader, $.ig.VariantType.prototype.lPSTR, this._userSectionEncoding);
					}
					break;
				}
			case $.ig.UserDefinedPropertyType.prototype.selfDefStructure:
			case $.ig.UserDefinedPropertyType.prototype.structureInstance:
				this.userDefinedProperties().add(definition._type, $.ig.VariantUtilities.prototype.readVariant(reader, this._userSectionEncoding));
				break;
			case $.ig.UserDefinedPropertyType.prototype.locale:
				{
					var value = $.ig.VariantUtilities.prototype.readVariant(reader, this._userSectionEncoding);
					var culture = $.ig.DocCoreUtils.prototype.getCultureInfo($.ig.util.getValue(value));
					$.ig.DocCoreUtils.prototype.debugAssert(culture.equals($.ig.CultureInfo.prototype.currentCulture()), null);
					break;
				}
			default:
				{
					this._userDefinedPropertiesRaw.add(this._userDefinedNames.__inner[definition._type - $.ig.DocumentSummaryInformation.prototype._firstUserPropertyType], $.ig.VariantUtilities.prototype.readVariant(reader, this._userSectionEncoding));
					break;
				}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.FileTypes.DocumentSummaryInformation::ReadUserDefinedProperty(System.IO.BinaryReader, Infragistics.Documents.Core.StructuredStorage.FileTypes.InformationBase_PropertyDefinition)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.FileTypes.DocumentSummaryInformation::WriteUserDefinedProperty(System.IO.BinaryWriter, Infragistics.Documents.Core.StructuredStorage.FileTypes.InformationBase_PropertyDefinition)" />*/
	writeUserDefinedProperty: function (writer, definition) {
		if (definition._type == $.ig.UserDefinedPropertyType.prototype.locale) {
			$.ig.VariantUtilities.prototype.writeVariant1(writer, this._userSectionEncoding, $.ig.util.intSToU($.ig.DocCoreUtils.prototype.currentCultureInfoLCID()), true);
		} else if (definition._type == $.ig.UserDefinedPropertyType.prototype.dictionary) {
			writer.write9(this._userDefinedNames.count());
			for (var i = 0; i < this._userDefinedNames.count(); i++) {
				writer.write9(i + $.ig.DocumentSummaryInformation.prototype._firstUserPropertyType);
				$.ig.VariantUtilities.prototype.writeVariantType(writer, $.ig.VariantType.prototype.lPSTR, this._userSectionEncoding, this._userDefinedNames.__inner[i], false);
			}
		} else {
			var value = this._userDefinedPropertiesRaw.item(this._userDefinedNames.__inner[definition._type - $.ig.DocumentSummaryInformation.prototype._firstUserPropertyType]);
			$.ig.VariantUtilities.prototype.writeVariant(writer, this._userSectionEncoding, value);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Core.StructuredStorage.FileTypes.DocumentSummaryInformation::WriteUserDefinedProperty(System.IO.BinaryWriter, Infragistics.Documents.Core.StructuredStorage.FileTypes.InformationBase_PropertyDefinition)" />*/
	,
	/*<BeginProperty Name="Infragistics.Documents.Core.StructuredStorage.FileTypes.DocumentSummaryInformation_DocumentSummaryInformationProperties Infragistics.Documents.Core.StructuredStorage.FileTypes.DocumentSummaryInformation::Properties()" />*/
	properties: function () {
		if (this._properties == null) {
			this._properties = new $.ig.DocumentSummaryInformation_DocumentSummaryInformationProperties(this);
		}
		return this._properties;
	}
	/*<EndProperty Name="Infragistics.Documents.Core.StructuredStorage.FileTypes.DocumentSummaryInformation_DocumentSummaryInformationProperties Infragistics.Documents.Core.StructuredStorage.FileTypes.DocumentSummaryInformation::Properties()" />*/
	,
	/*<BeginProperty Name="System.Collections.Generic.Dictionary Infragistics.Documents.Core.StructuredStorage.FileTypes.DocumentSummaryInformation::UserDefinedProperties()" />*/
	userDefinedProperties: function () {
		return this._userDefinedProperties;
	}
	/*<EndProperty Name="System.Collections.Generic.Dictionary Infragistics.Documents.Core.StructuredStorage.FileTypes.DocumentSummaryInformation::UserDefinedProperties()" />*/
	,
	$type: new $.ig.Type('DocumentSummaryInformation', $.ig.InformationBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Core.StructuredStorage.FileTypes.DocumentSummaryInformation" />*/

/*<BeginType Name="Infragistics.Documents.Core.StructuredStorage.FileTypes.DocumentSummaryInformation_DocumentSummaryInformationProperties" />*/

$.ig.util.defType('DocumentSummaryInformation_DocumentSummaryInformationProperties', 'Object', {
	_documentSummaryInformation: null,
	init: function (summaryInformation) {
		$.ig.Object.prototype.init.call(this);
		this._documentSummaryInformation = summaryInformation;
	},
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Core.StructuredStorage.FileTypes.DocumentSummaryInformation_DocumentSummaryInformationProperties::VerifyPropertyType(Infragistics.Documents.Core.StructuredStorage.FileTypes.DocumentSummaryPropertyType, System.Type)" />*/
	verifyPropertyType: function (propertyType, valueType) {
		if (1 == propertyType) {
			return false;
		}
		switch (propertyType) {
			case $.ig.DocumentSummaryPropertyType.prototype.category:
			case $.ig.DocumentSummaryPropertyType.prototype.presentationTarget:
			case $.ig.DocumentSummaryPropertyType.prototype.manager:
			case $.ig.DocumentSummaryPropertyType.prototype.company:
				return valueType == String;
			case $.ig.DocumentSummaryPropertyType.prototype.bytes:
			case $.ig.DocumentSummaryPropertyType.prototype.lines:
			case $.ig.DocumentSummaryPropertyType.prototype.paragraphs:
			case $.ig.DocumentSummaryPropertyType.prototype.slides:
			case $.ig.DocumentSummaryPropertyType.prototype.notes:
			case $.ig.DocumentSummaryPropertyType.prototype.hiddenSlides:
			case $.ig.DocumentSummaryPropertyType.prototype.mMClips:
				return valueType == $.ig.Number.prototype.$type;
			case $.ig.DocumentSummaryPropertyType.prototype.scaleCrop:
			case $.ig.DocumentSummaryPropertyType.prototype.linksUpToData:
				return valueType == $.ig.Boolean.prototype.$type;
			case $.ig.DocumentSummaryPropertyType.prototype.headingPairs: return valueType == Array;
			case $.ig.DocumentSummaryPropertyType.prototype.titlesOfParts: return valueType == Array;
			default: return true;
		}
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Core.StructuredStorage.FileTypes.DocumentSummaryInformation_DocumentSummaryInformationProperties::VerifyPropertyType(Infragistics.Documents.Core.StructuredStorage.FileTypes.DocumentSummaryPropertyType, System.Type)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Core.StructuredStorage.FileTypes.DocumentSummaryInformation_DocumentSummaryInformationProperties::VerifyPropertyType(Infragistics.Documents.Core.StructuredStorage.FileTypes.UserDefinedPropertyType, System.Type)" />*/
	verifyPropertyType1: function (propertyType, valueType) {
		if (1 == propertyType) {
			return false;
		}
		switch (propertyType) {
			case $.ig.UserDefinedPropertyType.prototype.selfDefStructure: return valueType == String;
			case $.ig.UserDefinedPropertyType.prototype.structureInstance:
				$.ig.DocCoreUtils.prototype.debugFail("Not sure what the expected type of the StructureInstance is.");
				return true;
			default: return true;
		}
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Core.StructuredStorage.FileTypes.DocumentSummaryInformation_DocumentSummaryInformationProperties::VerifyPropertyType(Infragistics.Documents.Core.StructuredStorage.FileTypes.UserDefinedPropertyType, System.Type)" />*/
	,
	/*<BeginProperty Name="System.Object Infragistics.Documents.Core.StructuredStorage.FileTypes.DocumentSummaryInformation_DocumentSummaryInformationProperties::Item(Infragistics.Documents.Core.StructuredStorage.FileTypes.DocumentSummaryPropertyType)" />*/
	item: function (type, value) {
		if (arguments.length === 2) {
			var key = type;
			var array = $.ig.util.cast(Array, value);
			if ($.ig.DocCoreUtils.prototype.isNullResolved(value) || (array != null && array.length == 0)) {
				if (this._documentSummaryInformation.defaultProperties().containsKey(key)) {
					this._documentSummaryInformation.defaultProperties().remove(key);
				}
			} else {
				if ($.ig.DocumentSummaryInformation_DocumentSummaryInformationProperties.prototype.verifyPropertyType(type, value.getType()) == false) {
					$.ig.DocCoreUtils.prototype.debugFail("Invaid type of value for the property.");
					return;
				}
				if (array != null && array.rank() != 1) {
					$.ig.DocCoreUtils.prototype.debugFail("The specified array has too many dimensions.");
					return;
				}
				if (this._documentSummaryInformation.defaultProperties().containsKey(key)) {
					this._documentSummaryInformation.defaultProperties().item(key, value);
				} else {
					this._documentSummaryInformation.defaultProperties().add(key, value);
				}
			}
			return value;
		} else {
			var key = type;
			if (this._documentSummaryInformation.defaultProperties().containsKey(key) == false) {
				return null;
			}
			return this._documentSummaryInformation.defaultProperties().item(key);
		}
	}
	/*<EndProperty Name="System.Object Infragistics.Documents.Core.StructuredStorage.FileTypes.DocumentSummaryInformation_DocumentSummaryInformationProperties::Item(Infragistics.Documents.Core.StructuredStorage.FileTypes.DocumentSummaryPropertyType)" />*/
	,
	/*<BeginProperty Name="System.Object Infragistics.Documents.Core.StructuredStorage.FileTypes.DocumentSummaryInformation_DocumentSummaryInformationProperties::Item(Infragistics.Documents.Core.StructuredStorage.FileTypes.UserDefinedPropertyType)" />*/
	item1: function (type, value) {
		if (arguments.length === 2) {
			var array = $.ig.util.cast(Array, value);
			if ($.ig.DocCoreUtils.prototype.isNullResolved(value) || (array != null && array.length == 0)) {
				if (this._documentSummaryInformation.userDefinedProperties().containsKey(type)) {
					this._documentSummaryInformation.userDefinedProperties().remove(type);
				}
			} else {
				if ($.ig.DocumentSummaryInformation_DocumentSummaryInformationProperties.prototype.verifyPropertyType1(type, value.getType()) == false) {
					$.ig.DocCoreUtils.prototype.debugFail("Invaid type of value for the property.");
					return;
				}
				if (array != null && array.rank() != 1) {
					$.ig.DocCoreUtils.prototype.debugFail("The specified array has too many dimensions.");
					return;
				}
				this._documentSummaryInformation.userDefinedProperties().item(type, value);
			}
			return value;
		} else {
			if (this._documentSummaryInformation.userDefinedProperties().containsKey(type) == false) {
				return null;
			}
			return this._documentSummaryInformation.userDefinedProperties().item(type);
		}
	}
	/*<EndProperty Name="System.Object Infragistics.Documents.Core.StructuredStorage.FileTypes.DocumentSummaryInformation_DocumentSummaryInformationProperties::Item(Infragistics.Documents.Core.StructuredStorage.FileTypes.UserDefinedPropertyType)" />*/
	,
	$type: new $.ig.Type('DocumentSummaryInformation_DocumentSummaryInformationProperties', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Core.StructuredStorage.FileTypes.DocumentSummaryInformation_DocumentSummaryInformationProperties" />*/

/*<BeginType Name="Infragistics.Documents.Core.StructuredStorage.FileTypes.InformationBase_PropertyDefinition" />*/

$.ig.util.defType('InformationBase_PropertyDefinition', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	_type: 0,
	_positionOfValue: 0,
	$type: new $.ig.Type('InformationBase_PropertyDefinition', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Core.StructuredStorage.FileTypes.InformationBase_PropertyDefinition" />*/

/*<BeginType Name="Infragistics.Documents.Core.StructuredStorage.FileTypes.InformationBase_PropertySectionDefinition" />*/

$.ig.util.defType('InformationBase_PropertySectionDefinition', 'Object', {
	init: function () {
		this._sectionType = new $.ig.Guid();
		$.ig.Object.prototype.init.call(this);
	},
	_sectionType: null,
	_sectionLength: 0,
	_positionOfSection: 0,
	_propertyCount: 0,
	_propertyDefinitions: null,
	$type: new $.ig.Type('InformationBase_PropertySectionDefinition', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Core.StructuredStorage.FileTypes.InformationBase_PropertySectionDefinition" />*/

/*<BeginType Name="Infragistics.Documents.Core.StructuredStorage.FileTypes.SummaryInformation" />*/

$.ig.util.defType('SummaryInformation', 'InformationBase', {
	init: function () {
		$.ig.InformationBase.prototype.init.call(this);
	},
	_properties: null,
	/*<BeginProperty Name="System.String Infragistics.Documents.Core.StructuredStorage.FileTypes.SummaryInformation::DefaultSectionId()" />*/
	defaultSectionId: function () {
		return "f29f85e04ff91068ab9108002b27b3d9";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Core.StructuredStorage.FileTypes.SummaryInformation::DefaultSectionId()" />*/
	,
	/*<BeginProperty Name="Infragistics.Documents.Core.StructuredStorage.FileTypes.SummaryInformation_SummaryInformationProperties Infragistics.Documents.Core.StructuredStorage.FileTypes.SummaryInformation::Properties()" />*/
	properties: function () {
		if (this._properties == null) {
			this._properties = new $.ig.SummaryInformation_SummaryInformationProperties(this);
		}
		return this._properties;
	}
	/*<EndProperty Name="Infragistics.Documents.Core.StructuredStorage.FileTypes.SummaryInformation_SummaryInformationProperties Infragistics.Documents.Core.StructuredStorage.FileTypes.SummaryInformation::Properties()" />*/
	,
	$type: new $.ig.Type('SummaryInformation', $.ig.InformationBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Core.StructuredStorage.FileTypes.SummaryInformation" />*/

/*<BeginType Name="Infragistics.Documents.Core.StructuredStorage.FileTypes.SummaryInformation_SummaryInformationProperties" />*/

$.ig.util.defType('SummaryInformation_SummaryInformationProperties', 'Object', {
	_summaryInformation: null,
	init: function (summaryInformation) {
		$.ig.Object.prototype.init.call(this);
		this._summaryInformation = summaryInformation;
	},
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Core.StructuredStorage.FileTypes.SummaryInformation_SummaryInformationProperties::VerifyPropertyType(Infragistics.Documents.Core.StructuredStorage.FileTypes.SummaryPropertyType, System.Type)" />*/
	verifyPropertyType: function (propertyType, valueType) {
		if (1 == propertyType) {
			return false;
		}
		switch (propertyType) {
			case $.ig.SummaryPropertyType.prototype.title:
			case $.ig.SummaryPropertyType.prototype.subject:
			case $.ig.SummaryPropertyType.prototype.author:
			case $.ig.SummaryPropertyType.prototype.keywords:
			case $.ig.SummaryPropertyType.prototype.comments:
			case $.ig.SummaryPropertyType.prototype.template:
			case $.ig.SummaryPropertyType.prototype.lastSavedBy:
			case $.ig.SummaryPropertyType.prototype.revisionNumber:
			case $.ig.SummaryPropertyType.prototype.nameOfCreatingApplication:
				return valueType == String;
			case $.ig.SummaryPropertyType.prototype.totalEditingTime:
			case $.ig.SummaryPropertyType.prototype.lastPrinted:
			case $.ig.SummaryPropertyType.prototype.createdDateTime:
			case $.ig.SummaryPropertyType.prototype.lastSavedDateTime:
				return valueType == $.ig.Date.prototype.$type;
			case $.ig.SummaryPropertyType.prototype.numberOfPages:
			case $.ig.SummaryPropertyType.prototype.numberOfWords:
			case $.ig.SummaryPropertyType.prototype.numberOfCharacters:
			case $.ig.SummaryPropertyType.prototype.security:
				return valueType == $.ig.Number.prototype.$type;
			case $.ig.SummaryPropertyType.prototype.thumbnail: return false;
			default: return true;
		}
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Core.StructuredStorage.FileTypes.SummaryInformation_SummaryInformationProperties::VerifyPropertyType(Infragistics.Documents.Core.StructuredStorage.FileTypes.SummaryPropertyType, System.Type)" />*/
	,
	/*<BeginProperty Name="System.Object Infragistics.Documents.Core.StructuredStorage.FileTypes.SummaryInformation_SummaryInformationProperties::Item(Infragistics.Documents.Core.StructuredStorage.FileTypes.SummaryPropertyType)" />*/
	item: function (type, value) {
		if (arguments.length === 2) {
			var key = type;
			if ($.ig.DocCoreUtils.prototype.isNullResolved(value)) {
				if (this._summaryInformation.defaultProperties().containsKey(key)) {
					this._summaryInformation.defaultProperties().remove(key);
				}
			} else {
				if ($.ig.SummaryInformation_SummaryInformationProperties.prototype.verifyPropertyType(type, value.getType()) == false) {
					$.ig.DocCoreUtils.prototype.debugFail("Invalid type of value for the property.");
					return;
				}
				if (this._summaryInformation.defaultProperties().containsKey(key)) {
					this._summaryInformation.defaultProperties().item(key, value);
				} else {
					this._summaryInformation.defaultProperties().add(key, value);
				}
			}
			return value;
		} else {
			var key = type;
			if (this._summaryInformation.defaultProperties().containsKey(key) == false) {
				return null;
			}
			return this._summaryInformation.defaultProperties().item(key);
		}
	}
	/*<EndProperty Name="System.Object Infragistics.Documents.Core.StructuredStorage.FileTypes.SummaryInformation_SummaryInformationProperties::Item(Infragistics.Documents.Core.StructuredStorage.FileTypes.SummaryPropertyType)" />*/
	,
	$type: new $.ig.Type('SummaryInformation_SummaryInformationProperties', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Core.StructuredStorage.FileTypes.SummaryInformation_SummaryInformationProperties" />*/

/*<BeginType Name="Infragistics.Documents.Core.Packaging.IPackageFactory" />*/

$.ig.util.defType('IPackageFactory', 'Object', {
	$type: new $.ig.Type('IPackageFactory', null)
}, true);

/*<EndType Name="Infragistics.Documents.Core.Packaging.IPackageFactory" />*/

/*<BeginType Name="Infragistics.Documents.Core.Packaging.IPackage" />*/

$.ig.util.defType('IPackage', 'Object', {
	$type: new $.ig.Type('IPackage', null, [$.ig.IDisposable.prototype.$type])
}, true);

/*<EndType Name="Infragistics.Documents.Core.Packaging.IPackage" />*/

/*<BeginType Name="Infragistics.Documents.Core.Packaging.IPackagePart" />*/

$.ig.util.defType('IPackagePart', 'Object', {
	$type: new $.ig.Type('IPackagePart', null)
}, true);

/*<EndType Name="Infragistics.Documents.Core.Packaging.IPackagePart" />*/

/*<BeginType Name="Infragistics.Documents.Core.Packaging.IPackagePartEx" />*/

$.ig.util.defType('IPackagePartEx', 'Object', {
	$type: new $.ig.Type('IPackagePartEx', null, [$.ig.IPackagePart.prototype.$type])
}, true);

/*<EndType Name="Infragistics.Documents.Core.Packaging.IPackagePartEx" />*/

/*<BeginType Name="Infragistics.Documents.Core.Packaging.IPackageRelationship" />*/

$.ig.util.defType('IPackageRelationship', 'Object', {
	$type: new $.ig.Type('IPackageRelationship', null)
}, true);

/*<EndType Name="Infragistics.Documents.Core.Packaging.IPackageRelationship" />*/

/*<BeginType Name="Infragistics.Documents.Core.Packaging.IInvalidPackageRelationshipTarget" />*/

$.ig.util.defType('IInvalidPackageRelationshipTarget', 'Object', {
	$type: new $.ig.Type('IInvalidPackageRelationshipTarget', null, [$.ig.IPackageRelationship.prototype.$type])
}, true);

/*<EndType Name="Infragistics.Documents.Core.Packaging.IInvalidPackageRelationshipTarget" />*/

/*<BeginStatics Name="AssemblyRef" />*/

$.ig.AssemblyRef.prototype.assemblyName = $.ig.AssemblyVersion.prototype.assemblyNamePrefix + ".Documents.Core_CORE" + $.ig.AssemblyVersion.prototype.assemblyNameSuffix;
$.ig.AssemblyRef.prototype.assemblyDescriptionBase = "Documents Core Common Library for " + $.ig.AssemblyVersion.prototype.platform;
/*<EndStatics Name="AssemblyRef" />*/

/*<BeginStatics Name="Infragistics.AssemblyVersion" />*/

$.ig.AssemblyVersion.prototype.majorMinor = "17.1";
$.ig.AssemblyVersion.prototype.build = "0";
$.ig.AssemblyVersion.prototype.revision = "1012";
$.ig.AssemblyVersion.prototype.version = $.ig.AssemblyVersion.prototype.majorMinor + "." + $.ig.AssemblyVersion.prototype.build + "." + $.ig.AssemblyVersion.prototype.revision;
$.ig.AssemblyVersion.prototype.fileVersion = $.ig.AssemblyVersion.prototype.version;
$.ig.AssemblyVersion.prototype.companyName = "Infragistics Inc.";
$.ig.AssemblyVersion.prototype.endCopyrightYear = "2017";
$.ig.AssemblyVersion.prototype.satelliteContractVersion = $.ig.AssemblyVersion.prototype.majorMinor + ".0.0";
$.ig.AssemblyVersion.prototype.configuration = "Debug";
$.ig.AssemblyVersion.prototype.assemblyNamePrefix = "InfragisticsWPF4";
$.ig.AssemblyVersion.prototype.assemblyNameSuffix = ".v" + $.ig.AssemblyVersion.prototype.majorMinor;
$.ig.AssemblyVersion.prototype.platform = "Javascript";
$.ig.AssemblyVersion.prototype.product = "Infragistics Ultimate";
$.ig.AssemblyVersion.prototype.productTitleSuffix = " [" + $.ig.AssemblyVersion.prototype.configuration + "]";
/*<EndStatics Name="Infragistics.AssemblyVersion" />*/

/*<BeginStatics Name="Infragistics.Windows1252Encoding" />*/

$.ig.Windows1252Encoding.prototype.__nULLCH = 65535;
$.ig.Windows1252Encoding.prototype.__codePageWindows1252Encoding = $.ig.CodePageEncoding.prototype._getCharacters($.ig.Windows1252Encoding.prototype.__nULLCH, [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 8364, $.ig.Windows1252Encoding.prototype.__nULLCH, 8218, 402, 8222, 8230, 8224, 8225, 710, 8240, 352, 8249, 338, $.ig.Windows1252Encoding.prototype.__nULLCH, 381, $.ig.Windows1252Encoding.prototype.__nULLCH, $.ig.Windows1252Encoding.prototype.__nULLCH, 8216, 8217, 8220, 8221, 8226, 8211, 8212, 732, 8482, 353, 8250, 339, $.ig.Windows1252Encoding.prototype.__nULLCH, 382, 376, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255 ]);
/*<EndStatics Name="Infragistics.Windows1252Encoding" />*/

/*<BeginStatics Name="Infragistics.Windows932Encoding" />*/

$.ig.Windows932Encoding.prototype.__nULLCH = 0;
$.ig.Windows932Encoding.prototype.__codePageWindows932Encoding00 = $.ig.CodePageEncoding.prototype._getCharacters($.ig.Windows932Encoding.prototype.__nULLCH, [ $.ig.Windows932Encoding.prototype.__nULLCH, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, 65377, 65378, 65379, 65380, 65381, 65382, 65383, 65384, 65385, 65386, 65387, 65388, 65389, 65390, 65391, 65392, 65393, 65394, 65395, 65396, 65397, 65398, 65399, 65400, 65401, 65402, 65403, 65404, 65405, 65406, 65407, 65408, 65409, 65410, 65411, 65412, 65413, 65414, 65415, 65416, 65417, 65418, 65419, 65420, 65421, 65422, 65423, 65424, 65425, 65426, 65427, 65428, 65429, 65430, 65431, 65432, 65433, 65434, 65435, 65436, 65437, 65438, 65439, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH ]);
$.ig.Windows932Encoding.prototype.__codePageWindows932Encoding81 = $.ig.CodePageEncoding.prototype._getCharacters($.ig.Windows932Encoding.prototype.__nULLCH, [ $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, 12288, 12289, 12290, 65292, 65294, 12539, 65306, 65307, 65311, 65281, 12443, 12444, 180, 65344, 168, 65342, 65507, 65343, 12541, 12542, 12445, 12446, 12291, 20189, 12293, 12294, 12295, 12540, 8213, 8208, 65295, 65340, 65374, 8741, 65372, 8230, 8229, 8216, 8217, 8220, 8221, 65288, 65289, 12308, 12309, 65339, 65341, 65371, 65373, 12296, 12297, 12298, 12299, 12300, 12301, 12302, 12303, 12304, 12305, 65291, 65293, 177, 215, $.ig.Windows932Encoding.prototype.__nULLCH, 247, 65309, 8800, 65308, 65310, 8806, 8807, 8734, 8756, 9794, 9792, 176, 8242, 8243, 8451, 65509, 65284, 65504, 65505, 65285, 65283, 65286, 65290, 65312, 167, 9734, 9733, 9675, 9679, 9678, 9671, 9670, 9633, 9632, 9651, 9650, 9661, 9660, 8251, 12306, 8594, 8592, 8593, 8595, 12307, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, 8712, 8715, 8838, 8839, 8834, 8835, 8746, 8745, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, 8743, 8744, 65506, 8658, 8660, 8704, 8707, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, 8736, 8869, 8978, 8706, 8711, 8801, 8786, 8810, 8811, 8730, 8765, 8733, 8757, 8747, 8748, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, 8491, 8240, 9839, 9837, 9834, 8224, 8225, 182, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, 9711, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH ]);
$.ig.Windows932Encoding.prototype.__codePageWindows932Encoding82 = $.ig.CodePageEncoding.prototype._getCharacters($.ig.Windows932Encoding.prototype.__nULLCH, [ $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, 65296, 65297, 65298, 65299, 65300, 65301, 65302, 65303, 65304, 65305, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, 65313, 65314, 65315, 65316, 65317, 65318, 65319, 65320, 65321, 65322, 65323, 65324, 65325, 65326, 65327, 65328, 65329, 65330, 65331, 65332, 65333, 65334, 65335, 65336, 65337, 65338, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, 65345, 65346, 65347, 65348, 65349, 65350, 65351, 65352, 65353, 65354, 65355, 65356, 65357, 65358, 65359, 65360, 65361, 65362, 65363, 65364, 65365, 65366, 65367, 65368, 65369, 65370, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, 12353, 12354, 12355, 12356, 12357, 12358, 12359, 12360, 12361, 12362, 12363, 12364, 12365, 12366, 12367, 12368, 12369, 12370, 12371, 12372, 12373, 12374, 12375, 12376, 12377, 12378, 12379, 12380, 12381, 12382, 12383, 12384, 12385, 12386, 12387, 12388, 12389, 12390, 12391, 12392, 12393, 12394, 12395, 12396, 12397, 12398, 12399, 12400, 12401, 12402, 12403, 12404, 12405, 12406, 12407, 12408, 12409, 12410, 12411, 12412, 12413, 12414, 12415, 12416, 12417, 12418, 12419, 12420, 12421, 12422, 12423, 12424, 12425, 12426, 12427, 12428, 12429, 12430, 12431, 12432, 12433, 12434, 12435, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH ]);
$.ig.Windows932Encoding.prototype.__codePageWindows932Encoding83 = $.ig.CodePageEncoding.prototype._getCharacters($.ig.Windows932Encoding.prototype.__nULLCH, [ $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, 12449, 12450, 12451, 12452, 12453, 12454, 12455, 12456, 12457, 12458, 12459, 12460, 12461, 12462, 12463, 12464, 12465, 12466, 12467, 12468, 12469, 12470, 12471, 12472, 12473, 12474, 12475, 12476, 12477, 12478, 12479, 12480, 12481, 12482, 12483, 12484, 12485, 12486, 12487, 12488, 12489, 12490, 12491, 12492, 12493, 12494, 12495, 12496, 12497, 12498, 12499, 12500, 12501, 12502, 12503, 12504, 12505, 12506, 12507, 12508, 12509, 12510, 12511, $.ig.Windows932Encoding.prototype.__nULLCH, 12512, 12513, 12514, 12515, 12516, 12517, 12518, 12519, 12520, 12521, 12522, 12523, 12524, 12525, 12526, 12527, 12528, 12529, 12530, 12531, 12532, 12533, 12534, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 931, 932, 933, 934, 935, 936, 937, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 963, 964, 965, 966, 967, 968, 969, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH ]);
$.ig.Windows932Encoding.prototype.__codePageWindows932Encoding84 = $.ig.CodePageEncoding.prototype._getCharacters($.ig.Windows932Encoding.prototype.__nULLCH, [ $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, 1040, 1041, 1042, 1043, 1044, 1045, 1025, 1046, 1047, 1048, 1049, 1050, 1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, 1072, 1073, 1074, 1075, 1076, 1077, 1105, 1078, 1079, 1080, 1081, 1082, 1083, 1084, 1085, $.ig.Windows932Encoding.prototype.__nULLCH, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, 9472, 9474, 9484, 9488, 9496, 9492, 9500, 9516, 9508, 9524, 9532, 9473, 9475, 9487, 9491, 9499, 9495, 9507, 9523, 9515, 9531, 9547, 9504, 9519, 9512, 9527, 9535, 9501, 9520, 9509, 9528, 9538, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH ]);
$.ig.Windows932Encoding.prototype.__codePageWindows932Encoding87 = $.ig.CodePageEncoding.prototype._getCharacters($.ig.Windows932Encoding.prototype.__nULLCH, [ $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, 9312, 9313, 9314, 9315, 9316, 9317, 9318, 9319, 9320, 9321, 9322, 9323, 9324, 9325, 9326, 9327, 9328, 9329, 9330, 9331, 8544, 8545, 8546, 8547, 8548, 8549, 8550, 8551, 8552, 8553, $.ig.Windows932Encoding.prototype.__nULLCH, 13129, 13076, 13090, 13133, 13080, 13095, 13059, 13110, 13137, 13143, 13069, 13094, 13091, 13099, 13130, 13115, 13212, 13213, 13214, 13198, 13199, 13252, 13217, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, 13179, $.ig.Windows932Encoding.prototype.__nULLCH, 12317, 12319, 8470, 13261, 8481, 12964, 12965, 12966, 12967, 12968, 12849, 12850, 12857, 13182, 13181, 13180, 8786, 8801, 8747, 8750, 8721, 8730, 8869, 8736, 8735, 8895, 8757, 8745, 8746, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH ]);
$.ig.Windows932Encoding.prototype.__codePageWindows932Encoding88 = $.ig.CodePageEncoding.prototype._getCharacters($.ig.Windows932Encoding.prototype.__nULLCH, [ $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, 20124, 21782, 23043, 38463, 21696, 24859, 25384, 23030, 36898, 33909, 33564, 31312, 24746, 25569, 28197, 26093, 33894, 33446, 39925, 26771, 22311, 26017, 25201, 23451, 22992, 34427, 39156, 32098, 32190, 39822, 25110, 31903, 34999, 23433, 24245, 25353, 26263, 26696, 38343, 38797, 26447, 20197, 20234, 20301, 20381, 20553, 22258, 22839, 22996, 23041, 23561, 24799, 24847, 24944, 26131, 26885, 28858, 30031, 30064, 31227, 32173, 32239, 32963, 33806, 34915, 35586, 36949, 36986, 21307, 20117, 20133, 22495, 32946, 37057, 30959, 19968, 22769, 28322, 36920, 31282, 33576, 33419, 39983, 20801, 21360, 21693, 21729, 22240, 23035, 24341, 39154, 28139, 32996, 34093, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH ]);
$.ig.Windows932Encoding.prototype.__codePageWindows932Encoding89 = $.ig.CodePageEncoding.prototype._getCharacters($.ig.Windows932Encoding.prototype.__nULLCH, [ $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, 38498, 38512, 38560, 38907, 21515, 21491, 23431, 28879, 32701, 36802, 38632, 21359, 40284, 31418, 19985, 30867, 33276, 28198, 22040, 21764, 27421, 34074, 39995, 23013, 21417, 28006, 29916, 38287, 22082, 20113, 36939, 38642, 33615, 39180, 21473, 21942, 23344, 24433, 26144, 26355, 26628, 27704, 27891, 27945, 29787, 30408, 31310, 38964, 33521, 34907, 35424, 37613, 28082, 30123, 30410, 39365, 24742, 35585, 36234, 38322, 27022, 21421, 20870, $.ig.Windows932Encoding.prototype.__nULLCH, 22290, 22576, 22852, 23476, 24310, 24616, 25513, 25588, 27839, 28436, 28814, 28948, 29017, 29141, 29503, 32257, 33398, 33489, 34199, 36960, 37467, 40219, 22633, 26044, 27738, 29989, 20985, 22830, 22885, 24448, 24540, 25276, 26106, 27178, 27431, 27572, 29579, 32705, 35158, 40236, 40206, 40644, 23713, 27798, 33659, 20740, 23627, 25014, 33222, 26742, 29281, 20057, 20474, 21368, 24681, 28201, 31311, 38899, 19979, 21270, 20206, 20309, 20285, 20385, 20339, 21152, 21487, 22025, 22799, 23233, 23478, 23521, 31185, 26247, 26524, 26550, 27468, 27827, 28779, 29634, 31117, 31166, 31292, 31623, 33457, 33499, 33540, 33655, 33775, 33747, 34662, 35506, 22057, 36008, 36838, 36942, 38686, 34442, 20420, 23784, 25105, 29273, 30011, 33253, 33469, 34558, 36032, 38597, 39187, 39381, 20171, 20250, 35299, 22238, 22602, 22730, 24315, 24555, 24618, 24724, 24674, 25040, 25106, 25296, 25913, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH ]);
$.ig.Windows932Encoding.prototype.__codePageWindows932Encoding8A = $.ig.CodePageEncoding.prototype._getCharacters($.ig.Windows932Encoding.prototype.__nULLCH, [ $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, 39745, 26214, 26800, 28023, 28784, 30028, 30342, 32117, 33445, 34809, 38283, 38542, 35997, 20977, 21182, 22806, 21683, 23475, 23830, 24936, 27010, 28079, 30861, 33995, 34903, 35442, 37799, 39608, 28012, 39336, 34521, 22435, 26623, 34510, 37390, 21123, 22151, 21508, 24275, 25313, 25785, 26684, 26680, 27579, 29554, 30906, 31339, 35226, 35282, 36203, 36611, 37101, 38307, 38548, 38761, 23398, 23731, 27005, 38989, 38990, 25499, 31520, 27179, $.ig.Windows932Encoding.prototype.__nULLCH, 27263, 26806, 39949, 28511, 21106, 21917, 24688, 25324, 27963, 28167, 28369, 33883, 35088, 36676, 19988, 39993, 21494, 26907, 27194, 38788, 26666, 20828, 31427, 33970, 37340, 37772, 22107, 40232, 26658, 33541, 33841, 31909, 21000, 33477, 29926, 20094, 20355, 20896, 23506, 21002, 21208, 21223, 24059, 21914, 22570, 23014, 23436, 23448, 23515, 24178, 24185, 24739, 24863, 24931, 25022, 25563, 25954, 26577, 26707, 26874, 27454, 27475, 27735, 28450, 28567, 28485, 29872, 29976, 30435, 30475, 31487, 31649, 31777, 32233, 32566, 32752, 32925, 33382, 33694, 35251, 35532, 36011, 36996, 37969, 38291, 38289, 38306, 38501, 38867, 39208, 33304, 20024, 21547, 23736, 24012, 29609, 30284, 30524, 23721, 32747, 36107, 38593, 38929, 38996, 39000, 20225, 20238, 21361, 21916, 22120, 22522, 22855, 23305, 23492, 23696, 24076, 24190, 24524, 25582, 26426, 26071, 26082, 26399, 26827, 26820, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH ]);
$.ig.Windows932Encoding.prototype.__codePageWindows932Encoding8B = $.ig.CodePageEncoding.prototype._getCharacters($.ig.Windows932Encoding.prototype.__nULLCH, [ $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, 27231, 24112, 27589, 27671, 27773, 30079, 31048, 23395, 31232, 32000, 24509, 35215, 35352, 36020, 36215, 36556, 36637, 39138, 39438, 39740, 20096, 20605, 20736, 22931, 23452, 25135, 25216, 25836, 27450, 29344, 30097, 31047, 32681, 34811, 35516, 35696, 25516, 33738, 38816, 21513, 21507, 21931, 26708, 27224, 35440, 30759, 26485, 40653, 21364, 23458, 33050, 34384, 36870, 19992, 20037, 20167, 20241, 21450, 21560, 23470, 24339, 24613, 25937, $.ig.Windows932Encoding.prototype.__nULLCH, 26429, 27714, 27762, 27875, 28792, 29699, 31350, 31406, 31496, 32026, 31998, 32102, 26087, 29275, 21435, 23621, 24040, 25298, 25312, 25369, 28192, 34394, 35377, 36317, 37624, 28417, 31142, 39770, 20136, 20139, 20140, 20379, 20384, 20689, 20807, 31478, 20849, 20982, 21332, 21281, 21375, 21483, 21932, 22659, 23777, 24375, 24394, 24623, 24656, 24685, 25375, 25945, 27211, 27841, 29378, 29421, 30703, 33016, 33029, 33288, 34126, 37111, 37857, 38911, 39255, 39514, 20208, 20957, 23597, 26241, 26989, 23616, 26354, 26997, 29577, 26704, 31873, 20677, 21220, 22343, 24062, 37670, 26020, 27427, 27453, 29748, 31105, 31165, 31563, 32202, 33465, 33740, 34943, 35167, 35641, 36817, 37329, 21535, 37504, 20061, 20534, 21477, 21306, 29399, 29590, 30697, 33510, 36527, 39366, 39368, 39378, 20855, 24858, 34398, 21936, 31354, 20598, 23507, 36935, 38533, 20018, 27355, 37351, 23633, 23624, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH ]);
$.ig.Windows932Encoding.prototype.__codePageWindows932Encoding8C = $.ig.CodePageEncoding.prototype._getCharacters($.ig.Windows932Encoding.prototype.__nULLCH, [ $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, 25496, 31391, 27795, 38772, 36705, 31402, 29066, 38536, 31874, 26647, 32368, 26705, 37740, 21234, 21531, 34219, 35347, 32676, 36557, 37089, 21350, 34952, 31041, 20418, 20670, 21009, 20804, 21843, 22317, 29674, 22411, 22865, 24418, 24452, 24693, 24950, 24935, 25001, 25522, 25658, 25964, 26223, 26690, 28179, 30054, 31293, 31995, 32076, 32153, 32331, 32619, 33550, 33610, 34509, 35336, 35427, 35686, 36605, 38938, 40335, 33464, 36814, 39912, $.ig.Windows932Encoding.prototype.__nULLCH, 21127, 25119, 25731, 28608, 38553, 26689, 20625, 27424, 27770, 28500, 31348, 32080, 34880, 35363, 26376, 20214, 20537, 20518, 20581, 20860, 21048, 21091, 21927, 22287, 22533, 23244, 24314, 25010, 25080, 25331, 25458, 26908, 27177, 29309, 29356, 29486, 30740, 30831, 32121, 30476, 32937, 35211, 35609, 36066, 36562, 36963, 37749, 38522, 38997, 39443, 40568, 20803, 21407, 21427, 24187, 24358, 28187, 28304, 29572, 29694, 32067, 33335, 35328, 35578, 38480, 20046, 20491, 21476, 21628, 22266, 22993, 23396, 24049, 24235, 24359, 25144, 25925, 26543, 28246, 29392, 31946, 34996, 32929, 32993, 33776, 34382, 35463, 36328, 37431, 38599, 39015, 40723, 20116, 20114, 20237, 21320, 21577, 21566, 23087, 24460, 24481, 24735, 26791, 27278, 29786, 30849, 35486, 35492, 35703, 37264, 20062, 39881, 20132, 20348, 20399, 20505, 20502, 20809, 20844, 21151, 21177, 21246, 21402, 21475, 21521, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH ]);
$.ig.Windows932Encoding.prototype.__codePageWindows932Encoding8D = $.ig.CodePageEncoding.prototype._getCharacters($.ig.Windows932Encoding.prototype.__nULLCH, [ $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, 21518, 21897, 22353, 22434, 22909, 23380, 23389, 23439, 24037, 24039, 24055, 24184, 24195, 24218, 24247, 24344, 24658, 24908, 25239, 25304, 25511, 25915, 26114, 26179, 26356, 26477, 26657, 26775, 27083, 27743, 27946, 28009, 28207, 28317, 30002, 30343, 30828, 31295, 31968, 32005, 32024, 32094, 32177, 32789, 32771, 32943, 32945, 33108, 33167, 33322, 33618, 34892, 34913, 35611, 36002, 36092, 37066, 37237, 37489, 30783, 37628, 38308, 38477, $.ig.Windows932Encoding.prototype.__nULLCH, 38917, 39321, 39640, 40251, 21083, 21163, 21495, 21512, 22741, 25335, 28640, 35946, 36703, 40633, 20811, 21051, 21578, 22269, 31296, 37239, 40288, 40658, 29508, 28425, 33136, 29969, 24573, 24794, 39592, 29403, 36796, 27492, 38915, 20170, 22256, 22372, 22718, 23130, 24680, 25031, 26127, 26118, 26681, 26801, 28151, 30165, 32058, 33390, 39746, 20123, 20304, 21449, 21766, 23919, 24038, 24046, 26619, 27801, 29811, 30722, 35408, 37782, 35039, 22352, 24231, 25387, 20661, 20652, 20877, 26368, 21705, 22622, 22971, 23472, 24425, 25165, 25505, 26685, 27507, 28168, 28797, 37319, 29312, 30741, 30758, 31085, 25998, 32048, 33756, 35009, 36617, 38555, 21092, 22312, 26448, 32618, 36001, 20916, 22338, 38442, 22586, 27018, 32948, 21682, 23822, 22524, 30869, 40442, 20316, 21066, 21643, 25662, 26152, 26388, 26613, 31364, 31574, 32034, 37679, 26716, 39853, 31545, 21273, 20874, 21047, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH ]);
$.ig.Windows932Encoding.prototype.__codePageWindows932Encoding8E = $.ig.CodePageEncoding.prototype._getCharacters($.ig.Windows932Encoding.prototype.__nULLCH, [ $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, 23519, 25334, 25774, 25830, 26413, 27578, 34217, 38609, 30352, 39894, 25420, 37638, 39851, 30399, 26194, 19977, 20632, 21442, 23665, 24808, 25746, 25955, 26719, 29158, 29642, 29987, 31639, 32386, 34453, 35715, 36059, 37240, 39184, 26028, 26283, 27531, 20181, 20180, 20282, 20351, 21050, 21496, 21490, 21987, 22235, 22763, 22987, 22985, 23039, 23376, 23629, 24066, 24107, 24535, 24605, 25351, 25903, 23388, 26031, 26045, 26088, 26525, 27490, $.ig.Windows932Encoding.prototype.__nULLCH, 27515, 27663, 29509, 31049, 31169, 31992, 32025, 32043, 32930, 33026, 33267, 35222, 35422, 35433, 35430, 35468, 35566, 36039, 36060, 38604, 39164, 27503, 20107, 20284, 20365, 20816, 23383, 23546, 24904, 25345, 26178, 27425, 28363, 27835, 29246, 29885, 30164, 30913, 31034, 32780, 32819, 33258, 33940, 36766, 27728, 40575, 24335, 35672, 40235, 31482, 36600, 23437, 38635, 19971, 21489, 22519, 22833, 23241, 23460, 24713, 28287, 28422, 30142, 36074, 23455, 34048, 31712, 20594, 26612, 33437, 23649, 34122, 32286, 33294, 20889, 23556, 25448, 36198, 26012, 29038, 31038, 32023, 32773, 35613, 36554, 36974, 34503, 37034, 20511, 21242, 23610, 26451, 28796, 29237, 37196, 37320, 37675, 33509, 23490, 24369, 24825, 20027, 21462, 23432, 25163, 26417, 27530, 29417, 29664, 31278, 33131, 36259, 37202, 39318, 20754, 21463, 21610, 23551, 25480, 27193, 32172, 38656, 22234, 21454, 21608, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH ]);
$.ig.Windows932Encoding.prototype.__codePageWindows932Encoding8F = $.ig.CodePageEncoding.prototype._getCharacters($.ig.Windows932Encoding.prototype.__nULLCH, [ $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, 23447, 23601, 24030, 20462, 24833, 25342, 27954, 31168, 31179, 32066, 32333, 32722, 33261, 33311, 33936, 34886, 35186, 35728, 36468, 36655, 36913, 37195, 37228, 38598, 37276, 20160, 20303, 20805, 21313, 24467, 25102, 26580, 27713, 28171, 29539, 32294, 37325, 37507, 21460, 22809, 23487, 28113, 31069, 32302, 31899, 22654, 29087, 20986, 34899, 36848, 20426, 23803, 26149, 30636, 31459, 33308, 39423, 20934, 24490, 26092, 26991, 27529, 28147, $.ig.Windows932Encoding.prototype.__nULLCH, 28310, 28516, 30462, 32020, 24033, 36981, 37255, 38918, 20966, 21021, 25152, 26257, 26329, 28186, 24246, 32210, 32626, 26360, 34223, 34295, 35576, 21161, 21465, 22899, 24207, 24464, 24661, 37604, 38500, 20663, 20767, 21213, 21280, 21319, 21484, 21736, 21830, 21809, 22039, 22888, 22974, 23100, 23477, 23558, 23567, 23569, 23578, 24196, 24202, 24288, 24432, 25215, 25220, 25307, 25484, 25463, 26119, 26124, 26157, 26230, 26494, 26786, 27167, 27189, 27836, 28040, 28169, 28248, 28988, 28966, 29031, 30151, 30465, 30813, 30977, 31077, 31216, 31456, 31505, 31911, 32057, 32918, 33750, 33931, 34121, 34909, 35059, 35359, 35388, 35412, 35443, 35937, 36062, 37284, 37478, 37758, 37912, 38556, 38808, 19978, 19976, 19998, 20055, 20887, 21104, 22478, 22580, 22732, 23330, 24120, 24773, 25854, 26465, 26454, 27972, 29366, 30067, 31331, 33976, 35698, 37304, 37664, 22065, 22516, 39166, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH ]);
$.ig.Windows932Encoding.prototype.__codePageWindows932Encoding90 = $.ig.CodePageEncoding.prototype._getCharacters($.ig.Windows932Encoding.prototype.__nULLCH, [ $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, 25325, 26893, 27542, 29165, 32340, 32887, 33394, 35302, 39135, 34645, 36785, 23611, 20280, 20449, 20405, 21767, 23072, 23517, 23529, 24515, 24910, 25391, 26032, 26187, 26862, 27035, 28024, 28145, 30003, 30137, 30495, 31070, 31206, 32051, 33251, 33455, 34218, 35242, 35386, 36523, 36763, 36914, 37341, 38663, 20154, 20161, 20995, 22645, 22764, 23563, 29978, 23613, 33102, 35338, 36805, 38499, 38765, 31525, 35535, 38920, 37218, 22259, 21416, $.ig.Windows932Encoding.prototype.__nULLCH, 36887, 21561, 22402, 24101, 25512, 27700, 28810, 30561, 31883, 32736, 34928, 36930, 37204, 37648, 37656, 38543, 29790, 39620, 23815, 23913, 25968, 26530, 36264, 38619, 25454, 26441, 26905, 33733, 38935, 38592, 35070, 28548, 25722, 23544, 19990, 28716, 30045, 26159, 20932, 21046, 21218, 22995, 24449, 24615, 25104, 25919, 25972, 26143, 26228, 26866, 26646, 27491, 28165, 29298, 29983, 30427, 31934, 32854, 22768, 35069, 35199, 35488, 35475, 35531, 36893, 37266, 38738, 38745, 25993, 31246, 33030, 38587, 24109, 24796, 25114, 26021, 26132, 26512, 30707, 31309, 31821, 32318, 33034, 36012, 36196, 36321, 36447, 30889, 20999, 25305, 25509, 25666, 25240, 35373, 31363, 31680, 35500, 38634, 32118, 33292, 34633, 20185, 20808, 21315, 21344, 23459, 23554, 23574, 24029, 25126, 25159, 25776, 26643, 26676, 27849, 27973, 27927, 26579, 28508, 29006, 29053, 26059, 31359, 31661, 32218, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH ]);
$.ig.Windows932Encoding.prototype.__codePageWindows932Encoding91 = $.ig.CodePageEncoding.prototype._getCharacters($.ig.Windows932Encoding.prototype.__nULLCH, [ $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, 32330, 32680, 33146, 33307, 33337, 34214, 35438, 36046, 36341, 36984, 36983, 37549, 37521, 38275, 39854, 21069, 21892, 28472, 28982, 20840, 31109, 32341, 33203, 31950, 22092, 22609, 23720, 25514, 26366, 26365, 26970, 29401, 30095, 30094, 30990, 31062, 31199, 31895, 32032, 32068, 34311, 35380, 38459, 36961, 40736, 20711, 21109, 21452, 21474, 20489, 21930, 22766, 22863, 29245, 23435, 23652, 21277, 24803, 24819, 25436, 25475, 25407, 25531, $.ig.Windows932Encoding.prototype.__nULLCH, 25805, 26089, 26361, 24035, 27085, 27133, 28437, 29157, 20105, 30185, 30456, 31379, 31967, 32207, 32156, 32865, 33609, 33624, 33900, 33980, 34299, 35013, 36208, 36865, 36973, 37783, 38684, 39442, 20687, 22679, 24974, 33235, 34101, 36104, 36896, 20419, 20596, 21063, 21363, 24687, 25417, 26463, 28204, 36275, 36895, 20439, 23646, 36042, 26063, 32154, 21330, 34966, 20854, 25539, 23384, 23403, 23562, 25613, 26449, 36956, 20182, 22810, 22826, 27760, 35409, 21822, 22549, 22949, 24816, 25171, 26561, 33333, 26965, 38464, 39364, 39464, 20307, 22534, 23550, 32784, 23729, 24111, 24453, 24608, 24907, 25140, 26367, 27888, 28382, 32974, 33151, 33492, 34955, 36024, 36864, 36910, 38538, 40667, 39899, 20195, 21488, 22823, 31532, 37261, 38988, 40441, 28381, 28711, 21331, 21828, 23429, 25176, 25246, 25299, 27810, 28655, 29730, 35351, 37944, 28609, 35582, 33592, 20967, 34552, 21482, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH ]);
$.ig.Windows932Encoding.prototype.__codePageWindows932Encoding92 = $.ig.CodePageEncoding.prototype._getCharacters($.ig.Windows932Encoding.prototype.__nULLCH, [ $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, 21481, 20294, 36948, 36784, 22890, 33073, 24061, 31466, 36799, 26842, 35895, 29432, 40008, 27197, 35504, 20025, 21336, 22022, 22374, 25285, 25506, 26086, 27470, 28129, 28251, 28845, 30701, 31471, 31658, 32187, 32829, 32966, 34507, 35477, 37723, 22243, 22727, 24382, 26029, 26262, 27264, 27573, 30007, 35527, 20516, 30693, 22320, 24347, 24677, 26234, 27744, 30196, 31258, 32622, 33268, 34584, 36933, 39347, 31689, 30044, 31481, 31569, 33988, $.ig.Windows932Encoding.prototype.__nULLCH, 36880, 31209, 31378, 33590, 23265, 30528, 20013, 20210, 23449, 24544, 25277, 26172, 26609, 27880, 34411, 34935, 35387, 37198, 37619, 39376, 27159, 28710, 29482, 33511, 33879, 36015, 19969, 20806, 20939, 21899, 23541, 24086, 24115, 24193, 24340, 24373, 24427, 24500, 25074, 25361, 26274, 26397, 28526, 29266, 30010, 30522, 32884, 33081, 33144, 34678, 35519, 35548, 36229, 36339, 37530, 38263, 38914, 40165, 21189, 25431, 30452, 26389, 27784, 29645, 36035, 37806, 38515, 27941, 22684, 26894, 27084, 36861, 37786, 30171, 36890, 22618, 26626, 25524, 27131, 20291, 28460, 26584, 36795, 34086, 32180, 37716, 26943, 28528, 22378, 22775, 23340, 32044, 29226, 21514, 37347, 40372, 20141, 20302, 20572, 20597, 21059, 35998, 21576, 22564, 23450, 24093, 24213, 24237, 24311, 24351, 24716, 25269, 25402, 25552, 26799, 27712, 30855, 31118, 31243, 32224, 33351, 35330, 35558, 36420, 36883, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH ]);
$.ig.Windows932Encoding.prototype.__codePageWindows932Encoding93 = $.ig.CodePageEncoding.prototype._getCharacters($.ig.Windows932Encoding.prototype.__nULLCH, [ $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, 37048, 37165, 37336, 40718, 27877, 25688, 25826, 25973, 28404, 30340, 31515, 36969, 37841, 28346, 21746, 24505, 25764, 36685, 36845, 37444, 20856, 22635, 22825, 23637, 24215, 28155, 32399, 29980, 36028, 36578, 39003, 28857, 20253, 27583, 28593, 30000, 38651, 20814, 21520, 22581, 22615, 22956, 23648, 24466, 26007, 26460, 28193, 30331, 33759, 36077, 36884, 37117, 37709, 30757, 30778, 21162, 24230, 22303, 22900, 24594, 20498, 20826, 20908, $.ig.Windows932Encoding.prototype.__nULLCH, 20941, 20992, 21776, 22612, 22616, 22871, 23445, 23798, 23947, 24764, 25237, 25645, 26481, 26691, 26812, 26847, 30423, 28120, 28271, 28059, 28783, 29128, 24403, 30168, 31095, 31561, 31572, 31570, 31958, 32113, 21040, 33891, 34153, 34276, 35342, 35588, 35910, 36367, 36867, 36879, 37913, 38518, 38957, 39472, 38360, 20685, 21205, 21516, 22530, 23566, 24999, 25758, 27934, 30643, 31461, 33012, 33796, 36947, 37509, 23776, 40199, 21311, 24471, 24499, 28060, 29305, 30563, 31167, 31716, 27602, 29420, 35501, 26627, 27233, 20984, 31361, 26932, 23626, 40182, 33515, 23493, 37193, 28702, 22136, 23663, 24775, 25958, 27788, 35930, 36929, 38931, 21585, 26311, 37389, 22856, 37027, 20869, 20045, 20970, 34201, 35598, 28760, 25466, 37707, 26978, 39348, 32260, 30071, 21335, 26976, 36575, 38627, 27741, 20108, 23612, 24336, 36841, 21250, 36049, 32905, 34425, 24319, 26085, 20083, 20837, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH ]);
$.ig.Windows932Encoding.prototype.__codePageWindows932Encoding94 = $.ig.CodePageEncoding.prototype._getCharacters($.ig.Windows932Encoding.prototype.__nULLCH, [ $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, 22914, 23615, 38894, 20219, 22922, 24525, 35469, 28641, 31152, 31074, 23527, 33905, 29483, 29105, 24180, 24565, 25467, 25754, 29123, 31896, 20035, 24316, 20043, 22492, 22178, 24745, 28611, 32013, 33021, 33075, 33215, 36786, 35223, 34468, 24052, 25226, 25773, 35207, 26487, 27874, 27966, 29750, 30772, 23110, 32629, 33453, 39340, 20467, 24259, 25309, 25490, 25943, 26479, 30403, 29260, 32972, 32954, 36649, 37197, 20493, 22521, 23186, 26757, $.ig.Windows932Encoding.prototype.__nULLCH, 26995, 29028, 29437, 36023, 22770, 36064, 38506, 36889, 34687, 31204, 30695, 33833, 20271, 21093, 21338, 25293, 26575, 27850, 30333, 31636, 31893, 33334, 34180, 36843, 26333, 28448, 29190, 32283, 33707, 39361, 40614, 20989, 31665, 30834, 31672, 32903, 31560, 27368, 24161, 32908, 30033, 30048, 20843, 37474, 28300, 30330, 37271, 39658, 20240, 32624, 25244, 31567, 38309, 40169, 22138, 22617, 34532, 38588, 20276, 21028, 21322, 21453, 21467, 24070, 25644, 26001, 26495, 27710, 27726, 29256, 29359, 29677, 30036, 32321, 33324, 34281, 36009, 31684, 37318, 29033, 38930, 39151, 25405, 26217, 30058, 30436, 30928, 34115, 34542, 21290, 21329, 21542, 22915, 24199, 24444, 24754, 25161, 25209, 25259, 26000, 27604, 27852, 30130, 30382, 30865, 31192, 32203, 32631, 32933, 34987, 35513, 36027, 36991, 38750, 39131, 27147, 31800, 20633, 23614, 24494, 26503, 27608, 29749, 30473, 32654, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH ]);
$.ig.Windows932Encoding.prototype.__codePageWindows932Encoding95 = $.ig.CodePageEncoding.prototype._getCharacters($.ig.Windows932Encoding.prototype.__nULLCH, [ $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, 40763, 26570, 31255, 21305, 30091, 39661, 24422, 33181, 33777, 32920, 24380, 24517, 30050, 31558, 36924, 26727, 23019, 23195, 32016, 30334, 35628, 20469, 24426, 27161, 27703, 28418, 29922, 31080, 34920, 35413, 35961, 24287, 25551, 30149, 31186, 33495, 37672, 37618, 33948, 34541, 39981, 21697, 24428, 25996, 27996, 28693, 36007, 36051, 38971, 25935, 29942, 19981, 20184, 22496, 22827, 23142, 23500, 20904, 24067, 24220, 24598, 25206, 25975, $.ig.Windows932Encoding.prototype.__nULLCH, 26023, 26222, 28014, 29238, 31526, 33104, 33178, 33433, 35676, 36000, 36070, 36212, 38428, 38468, 20398, 25771, 27494, 33310, 33889, 34154, 37096, 23553, 26963, 39080, 33914, 34135, 20239, 21103, 24489, 24133, 26381, 31119, 33145, 35079, 35206, 28149, 24343, 25173, 27832, 20175, 29289, 39826, 20998, 21563, 22132, 22707, 24996, 25198, 28954, 22894, 31881, 31966, 32027, 38640, 25991, 32862, 19993, 20341, 20853, 22592, 24163, 24179, 24330, 26564, 20006, 34109, 38281, 38491, 31859, 38913, 20731, 22721, 30294, 30887, 21029, 30629, 34065, 31622, 20559, 22793, 29255, 31687, 32232, 36794, 36820, 36941, 20415, 21193, 23081, 24321, 38829, 20445, 33303, 37610, 22275, 25429, 27497, 29995, 35036, 36628, 31298, 21215, 22675, 24917, 25098, 26286, 27597, 31807, 33769, 20515, 20472, 21253, 21574, 22577, 22857, 23453, 23792, 23791, 23849, 24214, 25265, 25447, 25918, 26041, 26379, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH ]);
$.ig.Windows932Encoding.prototype.__codePageWindows932Encoding96 = $.ig.CodePageEncoding.prototype._getCharacters($.ig.Windows932Encoding.prototype.__nULLCH, [ $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, 27861, 27873, 28921, 30770, 32299, 32990, 33459, 33804, 34028, 34562, 35090, 35370, 35914, 37030, 37586, 39165, 40179, 40300, 20047, 20129, 20621, 21078, 22346, 22952, 24125, 24536, 24537, 25151, 26292, 26395, 26576, 26834, 20882, 32033, 32938, 33192, 35584, 35980, 36031, 37502, 38450, 21536, 38956, 21271, 20693, 21340, 22696, 25778, 26420, 29287, 30566, 31302, 37350, 21187, 27809, 27526, 22528, 24140, 22868, 26412, 32763, 20961, 30406, $.ig.Windows932Encoding.prototype.__nULLCH, 25705, 30952, 39764, 40635, 22475, 22969, 26151, 26522, 27598, 21737, 27097, 24149, 33180, 26517, 39850, 26622, 40018, 26717, 20134, 20451, 21448, 25273, 26411, 27819, 36804, 20397, 32365, 40639, 19975, 24930, 28288, 28459, 34067, 21619, 26410, 39749, 24051, 31637, 23724, 23494, 34588, 28234, 34001, 31252, 33032, 22937, 31885, 27665, 30496, 21209, 22818, 28961, 29279, 30683, 38695, 40289, 26891, 23167, 23064, 20901, 21517, 21629, 26126, 30431, 36855, 37528, 40180, 23018, 29277, 28357, 20813, 26825, 32191, 32236, 38754, 40634, 25720, 27169, 33538, 22916, 23391, 27611, 29467, 30450, 32178, 32791, 33945, 20786, 26408, 40665, 30446, 26466, 21247, 39173, 23588, 25147, 31870, 36016, 21839, 24758, 32011, 38272, 21249, 20063, 20918, 22812, 29242, 32822, 37326, 24357, 30690, 21380, 24441, 32004, 34220, 35379, 36493, 38742, 26611, 34222, 37971, 24841, 24840, 27833, 30290, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH ]);
$.ig.Windows932Encoding.prototype.__codePageWindows932Encoding97 = $.ig.CodePageEncoding.prototype._getCharacters($.ig.Windows932Encoding.prototype.__nULLCH, [ $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, 35565, 36664, 21807, 20305, 20778, 21191, 21451, 23461, 24189, 24736, 24962, 25558, 26377, 26586, 28263, 28044, 29494, 29495, 30001, 31056, 35029, 35480, 36938, 37009, 37109, 38596, 34701, 22805, 20104, 20313, 19982, 35465, 36671, 38928, 20653, 24188, 22934, 23481, 24248, 25562, 25594, 25793, 26332, 26954, 27096, 27915, 28342, 29076, 29992, 31407, 32650, 32768, 33865, 33993, 35201, 35617, 36362, 36965, 38525, 39178, 24958, 25233, 27442, $.ig.Windows932Encoding.prototype.__nULLCH, 27779, 28020, 32716, 32764, 28096, 32645, 34746, 35064, 26469, 33713, 38972, 38647, 27931, 32097, 33853, 37226, 20081, 21365, 23888, 27396, 28651, 34253, 34349, 35239, 21033, 21519, 23653, 26446, 26792, 29702, 29827, 30178, 35023, 35041, 37324, 38626, 38520, 24459, 29575, 31435, 33870, 25504, 30053, 21129, 27969, 28316, 29705, 30041, 30827, 31890, 38534, 31452, 40845, 20406, 24942, 26053, 34396, 20102, 20142, 20698, 20001, 20940, 23534, 26009, 26753, 28092, 29471, 30274, 30637, 31260, 31975, 33391, 35538, 36988, 37327, 38517, 38936, 21147, 32209, 20523, 21400, 26519, 28107, 29136, 29747, 33256, 36650, 38563, 40023, 40607, 29792, 22593, 28057, 32047, 39006, 20196, 20278, 20363, 20919, 21169, 23994, 24604, 29618, 31036, 33491, 37428, 38583, 38646, 38666, 40599, 40802, 26278, 27508, 21015, 21155, 28872, 35010, 24265, 24651, 24976, 28451, 29001, 31806, 32244, 32879, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH ]);
$.ig.Windows932Encoding.prototype.__codePageWindows932Encoding98 = $.ig.CodePageEncoding.prototype._getCharacters($.ig.Windows932Encoding.prototype.__nULLCH, [ $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, 34030, 36899, 37676, 21570, 39791, 27347, 28809, 36034, 36335, 38706, 21172, 23105, 24266, 24324, 26391, 27004, 27028, 28010, 28431, 29282, 29436, 31725, 32769, 32894, 34635, 37070, 20845, 40595, 31108, 32907, 37682, 35542, 20525, 21644, 35441, 27498, 36036, 33031, 24785, 26528, 40434, 20121, 20120, 39952, 35435, 34241, 34152, 26880, 28286, 30871, 33109, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, 24332, 19984, 19989, 20010, 20017, 20022, 20028, 20031, 20034, 20054, 20056, 20098, 20101, 35947, 20106, 33298, 24333, 20110, 20126, 20127, 20128, 20130, 20144, 20147, 20150, 20174, 20173, 20164, 20166, 20162, 20183, 20190, 20205, 20191, 20215, 20233, 20314, 20272, 20315, 20317, 20311, 20295, 20342, 20360, 20367, 20376, 20347, 20329, 20336, 20369, 20335, 20358, 20374, 20760, 20436, 20447, 20430, 20440, 20443, 20433, 20442, 20432, 20452, 20453, 20506, 20520, 20500, 20522, 20517, 20485, 20252, 20470, 20513, 20521, 20524, 20478, 20463, 20497, 20486, 20547, 20551, 26371, 20565, 20560, 20552, 20570, 20566, 20588, 20600, 20608, 20634, 20613, 20660, 20658, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH ]);
$.ig.Windows932Encoding.prototype.__codePageWindows932Encoding99 = $.ig.CodePageEncoding.prototype._getCharacters($.ig.Windows932Encoding.prototype.__nULLCH, [ $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, 20681, 20682, 20659, 20674, 20694, 20702, 20709, 20717, 20707, 20718, 20729, 20725, 20745, 20737, 20738, 20758, 20757, 20756, 20762, 20769, 20794, 20791, 20796, 20795, 20799, 20800, 20818, 20812, 20820, 20834, 31480, 20841, 20842, 20846, 20864, 20866, 22232, 20876, 20873, 20879, 20881, 20883, 20885, 20886, 20900, 20902, 20898, 20905, 20906, 20907, 20915, 20913, 20914, 20912, 20917, 20925, 20933, 20937, 20955, 20960, 34389, 20969, 20973, $.ig.Windows932Encoding.prototype.__nULLCH, 20976, 20981, 20990, 20996, 21003, 21012, 21006, 21031, 21034, 21038, 21043, 21049, 21071, 21060, 21067, 21068, 21086, 21076, 21098, 21108, 21097, 21107, 21119, 21117, 21133, 21140, 21138, 21105, 21128, 21137, 36776, 36775, 21164, 21165, 21180, 21173, 21185, 21197, 21207, 21214, 21219, 21222, 39149, 21216, 21235, 21237, 21240, 21241, 21254, 21256, 30008, 21261, 21264, 21263, 21269, 21274, 21283, 21295, 21297, 21299, 21304, 21312, 21318, 21317, 19991, 21321, 21325, 20950, 21342, 21353, 21358, 22808, 21371, 21367, 21378, 21398, 21408, 21414, 21413, 21422, 21424, 21430, 21443, 31762, 38617, 21471, 26364, 29166, 21486, 21480, 21485, 21498, 21505, 21565, 21568, 21548, 21549, 21564, 21550, 21558, 21545, 21533, 21582, 21647, 21621, 21646, 21599, 21617, 21623, 21616, 21650, 21627, 21632, 21622, 21636, 21648, 21638, 21703, 21666, 21688, 21669, 21676, 21700, 21704, 21672, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH ]);
$.ig.Windows932Encoding.prototype.__codePageWindows932Encoding9A = $.ig.CodePageEncoding.prototype._getCharacters($.ig.Windows932Encoding.prototype.__nULLCH, [ $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, 21675, 21698, 21668, 21694, 21692, 21720, 21733, 21734, 21775, 21780, 21757, 21742, 21741, 21754, 21730, 21817, 21824, 21859, 21836, 21806, 21852, 21829, 21846, 21847, 21816, 21811, 21853, 21913, 21888, 21679, 21898, 21919, 21883, 21886, 21912, 21918, 21934, 21884, 21891, 21929, 21895, 21928, 21978, 21957, 21983, 21956, 21980, 21988, 21972, 22036, 22007, 22038, 22014, 22013, 22043, 22009, 22094, 22096, 29151, 22068, 22070, 22066, 22072, $.ig.Windows932Encoding.prototype.__nULLCH, 22123, 22116, 22063, 22124, 22122, 22150, 22144, 22154, 22176, 22164, 22159, 22181, 22190, 22198, 22196, 22210, 22204, 22209, 22211, 22208, 22216, 22222, 22225, 22227, 22231, 22254, 22265, 22272, 22271, 22276, 22281, 22280, 22283, 22285, 22291, 22296, 22294, 21959, 22300, 22310, 22327, 22328, 22350, 22331, 22336, 22351, 22377, 22464, 22408, 22369, 22399, 22409, 22419, 22432, 22451, 22436, 22442, 22448, 22467, 22470, 22484, 22482, 22483, 22538, 22486, 22499, 22539, 22553, 22557, 22642, 22561, 22626, 22603, 22640, 27584, 22610, 22589, 22649, 22661, 22713, 22687, 22699, 22714, 22750, 22715, 22712, 22702, 22725, 22739, 22737, 22743, 22745, 22744, 22757, 22748, 22756, 22751, 22767, 22778, 22777, 22779, 22780, 22781, 22786, 22794, 22800, 22811, 26790, 22821, 22828, 22829, 22834, 22840, 22846, 31442, 22869, 22864, 22862, 22874, 22872, 22882, 22880, 22887, 22892, 22889, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH ]);
$.ig.Windows932Encoding.prototype.__codePageWindows932Encoding9B = $.ig.CodePageEncoding.prototype._getCharacters($.ig.Windows932Encoding.prototype.__nULLCH, [ $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, 22904, 22913, 22941, 20318, 20395, 22947, 22962, 22982, 23016, 23004, 22925, 23001, 23002, 23077, 23071, 23057, 23068, 23049, 23066, 23104, 23148, 23113, 23093, 23094, 23138, 23146, 23194, 23228, 23230, 23243, 23234, 23229, 23267, 23255, 23270, 23273, 23254, 23290, 23291, 23308, 23307, 23318, 23346, 23248, 23338, 23350, 23358, 23363, 23365, 23360, 23377, 23381, 23386, 23387, 23397, 23401, 23408, 23411, 23413, 23416, 25992, 23418, 23424, $.ig.Windows932Encoding.prototype.__nULLCH, 23427, 23462, 23480, 23491, 23495, 23497, 23508, 23504, 23524, 23526, 23522, 23518, 23525, 23531, 23536, 23542, 23539, 23557, 23559, 23560, 23565, 23571, 23584, 23586, 23592, 23608, 23609, 23617, 23622, 23630, 23635, 23632, 23631, 23409, 23660, 23662, 20066, 23670, 23673, 23692, 23697, 23700, 22939, 23723, 23739, 23734, 23740, 23735, 23749, 23742, 23751, 23769, 23785, 23805, 23802, 23789, 23948, 23786, 23819, 23829, 23831, 23900, 23839, 23835, 23825, 23828, 23842, 23834, 23833, 23832, 23884, 23890, 23886, 23883, 23916, 23923, 23926, 23943, 23940, 23938, 23970, 23965, 23980, 23982, 23997, 23952, 23991, 23996, 24009, 24013, 24019, 24018, 24022, 24027, 24043, 24050, 24053, 24075, 24090, 24089, 24081, 24091, 24118, 24119, 24132, 24131, 24128, 24142, 24151, 24148, 24159, 24162, 24164, 24135, 24181, 24182, 24186, 40636, 24191, 24224, 24257, 24258, 24264, 24272, 24271, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH ]);
$.ig.Windows932Encoding.prototype.__codePageWindows932Encoding9C = $.ig.CodePageEncoding.prototype._getCharacters($.ig.Windows932Encoding.prototype.__nULLCH, [ $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, 24278, 24291, 24285, 24282, 24283, 24290, 24289, 24296, 24297, 24300, 24305, 24307, 24304, 24308, 24312, 24318, 24323, 24329, 24413, 24412, 24331, 24337, 24342, 24361, 24365, 24376, 24385, 24392, 24396, 24398, 24367, 24401, 24406, 24407, 24409, 24417, 24429, 24435, 24439, 24451, 24450, 24447, 24458, 24456, 24465, 24455, 24478, 24473, 24472, 24480, 24488, 24493, 24508, 24534, 24571, 24548, 24568, 24561, 24541, 24755, 24575, 24609, 24672, $.ig.Windows932Encoding.prototype.__nULLCH, 24601, 24592, 24617, 24590, 24625, 24603, 24597, 24619, 24614, 24591, 24634, 24666, 24641, 24682, 24695, 24671, 24650, 24646, 24653, 24675, 24643, 24676, 24642, 24684, 24683, 24665, 24705, 24717, 24807, 24707, 24730, 24708, 24731, 24726, 24727, 24722, 24743, 24715, 24801, 24760, 24800, 24787, 24756, 24560, 24765, 24774, 24757, 24792, 24909, 24853, 24838, 24822, 24823, 24832, 24820, 24826, 24835, 24865, 24827, 24817, 24845, 24846, 24903, 24894, 24872, 24871, 24906, 24895, 24892, 24876, 24884, 24893, 24898, 24900, 24947, 24951, 24920, 24921, 24922, 24939, 24948, 24943, 24933, 24945, 24927, 24925, 24915, 24949, 24985, 24982, 24967, 25004, 24980, 24986, 24970, 24977, 25003, 25006, 25036, 25034, 25033, 25079, 25032, 25027, 25030, 25018, 25035, 32633, 25037, 25062, 25059, 25078, 25082, 25076, 25087, 25085, 25084, 25086, 25088, 25096, 25097, 25101, 25100, 25108, 25115, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH ]);
$.ig.Windows932Encoding.prototype.__codePageWindows932Encoding9D = $.ig.CodePageEncoding.prototype._getCharacters($.ig.Windows932Encoding.prototype.__nULLCH, [ $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, 25118, 25121, 25130, 25134, 25136, 25138, 25139, 25153, 25166, 25182, 25187, 25179, 25184, 25192, 25212, 25218, 25225, 25214, 25234, 25235, 25238, 25300, 25219, 25236, 25303, 25297, 25275, 25295, 25343, 25286, 25812, 25288, 25308, 25292, 25290, 25282, 25287, 25243, 25289, 25356, 25326, 25329, 25383, 25346, 25352, 25327, 25333, 25424, 25406, 25421, 25628, 25423, 25494, 25486, 25472, 25515, 25462, 25507, 25487, 25481, 25503, 25525, 25451, $.ig.Windows932Encoding.prototype.__nULLCH, 25449, 25534, 25577, 25536, 25542, 25571, 25545, 25554, 25590, 25540, 25622, 25652, 25606, 25619, 25638, 25654, 25885, 25623, 25640, 25615, 25703, 25711, 25718, 25678, 25898, 25749, 25747, 25765, 25769, 25736, 25788, 25818, 25810, 25797, 25799, 25787, 25816, 25794, 25841, 25831, 33289, 25824, 25825, 25260, 25827, 25839, 25900, 25846, 25844, 25842, 25850, 25856, 25853, 25880, 25884, 25861, 25892, 25891, 25899, 25908, 25909, 25911, 25910, 25912, 30027, 25928, 25942, 25941, 25933, 25944, 25950, 25949, 25970, 25976, 25986, 25987, 35722, 26011, 26015, 26027, 26039, 26051, 26054, 26049, 26052, 26060, 26066, 26075, 26073, 26080, 26081, 26097, 26482, 26122, 26115, 26107, 26483, 26165, 26166, 26164, 26140, 26191, 26180, 26185, 26177, 26206, 26205, 26212, 26215, 26216, 26207, 26210, 26224, 26243, 26248, 26254, 26249, 26244, 26264, 26269, 26305, 26297, 26313, 26302, 26300, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH ]);
$.ig.Windows932Encoding.prototype.__codePageWindows932Encoding9E = $.ig.CodePageEncoding.prototype._getCharacters($.ig.Windows932Encoding.prototype.__nULLCH, [ $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, 26308, 26296, 26326, 26330, 26336, 26175, 26342, 26345, 26352, 26357, 26359, 26383, 26390, 26398, 26406, 26407, 38712, 26414, 26431, 26422, 26433, 26424, 26423, 26438, 26462, 26464, 26457, 26467, 26468, 26505, 26480, 26537, 26492, 26474, 26508, 26507, 26534, 26529, 26501, 26551, 26607, 26548, 26604, 26547, 26601, 26552, 26596, 26590, 26589, 26594, 26606, 26553, 26574, 26566, 26599, 27292, 26654, 26694, 26665, 26688, 26701, 26674, 26702, $.ig.Windows932Encoding.prototype.__nULLCH, 26803, 26667, 26713, 26723, 26743, 26751, 26783, 26767, 26797, 26772, 26781, 26779, 26755, 27310, 26809, 26740, 26805, 26784, 26810, 26895, 26765, 26750, 26881, 26826, 26888, 26840, 26914, 26918, 26849, 26892, 26829, 26836, 26855, 26837, 26934, 26898, 26884, 26839, 26851, 26917, 26873, 26848, 26863, 26920, 26922, 26906, 26915, 26913, 26822, 27001, 26999, 26972, 27000, 26987, 26964, 27006, 26990, 26937, 26996, 26941, 26969, 26928, 26977, 26974, 26973, 27009, 26986, 27058, 27054, 27088, 27071, 27073, 27091, 27070, 27086, 23528, 27082, 27101, 27067, 27075, 27047, 27182, 27025, 27040, 27036, 27029, 27060, 27102, 27112, 27138, 27163, 27135, 27402, 27129, 27122, 27111, 27141, 27057, 27166, 27117, 27156, 27115, 27146, 27154, 27329, 27171, 27155, 27204, 27148, 27250, 27190, 27256, 27207, 27234, 27225, 27238, 27208, 27192, 27170, 27280, 27277, 27296, 27268, 27298, 27299, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH ]);
$.ig.Windows932Encoding.prototype.__codePageWindows932Encoding9F = $.ig.CodePageEncoding.prototype._getCharacters($.ig.Windows932Encoding.prototype.__nULLCH, [ $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, 27287, 34327, 27323, 27331, 27330, 27320, 27315, 27308, 27358, 27345, 27359, 27306, 27354, 27370, 27387, 27397, 34326, 27386, 27410, 27414, 39729, 27423, 27448, 27447, 30428, 27449, 39150, 27463, 27459, 27465, 27472, 27481, 27476, 27483, 27487, 27489, 27512, 27513, 27519, 27520, 27524, 27523, 27533, 27544, 27541, 27550, 27556, 27562, 27563, 27567, 27570, 27569, 27571, 27575, 27580, 27590, 27595, 27603, 27615, 27628, 27627, 27635, 27631, $.ig.Windows932Encoding.prototype.__nULLCH, 40638, 27656, 27667, 27668, 27675, 27684, 27683, 27742, 27733, 27746, 27754, 27778, 27789, 27802, 27777, 27803, 27774, 27752, 27763, 27794, 27792, 27844, 27889, 27859, 27837, 27863, 27845, 27869, 27822, 27825, 27838, 27834, 27867, 27887, 27865, 27882, 27935, 34893, 27958, 27947, 27965, 27960, 27929, 27957, 27955, 27922, 27916, 28003, 28051, 28004, 27994, 28025, 27993, 28046, 28053, 28644, 28037, 28153, 28181, 28170, 28085, 28103, 28134, 28088, 28102, 28140, 28126, 28108, 28136, 28114, 28101, 28154, 28121, 28132, 28117, 28138, 28142, 28205, 28270, 28206, 28185, 28274, 28255, 28222, 28195, 28267, 28203, 28278, 28237, 28191, 28227, 28218, 28238, 28196, 28415, 28189, 28216, 28290, 28330, 28312, 28361, 28343, 28371, 28349, 28335, 28356, 28338, 28372, 28373, 28303, 28325, 28354, 28319, 28481, 28433, 28748, 28396, 28408, 28414, 28479, 28402, 28465, 28399, 28466, 28364, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH ]);
$.ig.Windows932Encoding.prototype.__codePageWindows932EncodingE0 = $.ig.CodePageEncoding.prototype._getCharacters($.ig.Windows932Encoding.prototype.__nULLCH, [ $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, 28478, 28435, 28407, 28550, 28538, 28536, 28545, 28544, 28527, 28507, 28659, 28525, 28546, 28540, 28504, 28558, 28561, 28610, 28518, 28595, 28579, 28577, 28580, 28601, 28614, 28586, 28639, 28629, 28652, 28628, 28632, 28657, 28654, 28635, 28681, 28683, 28666, 28689, 28673, 28687, 28670, 28699, 28698, 28532, 28701, 28696, 28703, 28720, 28734, 28722, 28753, 28771, 28825, 28818, 28847, 28913, 28844, 28856, 28851, 28846, 28895, 28875, 28893, $.ig.Windows932Encoding.prototype.__nULLCH, 28889, 28937, 28925, 28956, 28953, 29029, 29013, 29064, 29030, 29026, 29004, 29014, 29036, 29071, 29179, 29060, 29077, 29096, 29100, 29143, 29113, 29118, 29138, 29129, 29140, 29134, 29152, 29164, 29159, 29173, 29180, 29177, 29183, 29197, 29200, 29211, 29224, 29229, 29228, 29232, 29234, 29243, 29244, 29247, 29248, 29254, 29259, 29272, 29300, 29310, 29314, 29313, 29319, 29330, 29334, 29346, 29351, 29369, 29362, 29379, 29382, 29380, 29390, 29394, 29410, 29408, 29409, 29433, 29431, 20495, 29463, 29450, 29468, 29462, 29469, 29492, 29487, 29481, 29477, 29502, 29518, 29519, 40664, 29527, 29546, 29544, 29552, 29560, 29557, 29563, 29562, 29640, 29619, 29646, 29627, 29632, 29669, 29678, 29662, 29858, 29701, 29807, 29733, 29688, 29746, 29754, 29781, 29759, 29791, 29785, 29761, 29788, 29801, 29808, 29795, 29802, 29814, 29822, 29835, 29854, 29863, 29898, 29903, 29908, 29681, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH ]);
$.ig.Windows932Encoding.prototype.__codePageWindows932EncodingE1 = $.ig.CodePageEncoding.prototype._getCharacters($.ig.Windows932Encoding.prototype.__nULLCH, [ $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, 29920, 29923, 29927, 29929, 29934, 29938, 29936, 29937, 29944, 29943, 29956, 29955, 29957, 29964, 29966, 29965, 29973, 29971, 29982, 29990, 29996, 30012, 30020, 30029, 30026, 30025, 30043, 30022, 30042, 30057, 30052, 30055, 30059, 30061, 30072, 30070, 30086, 30087, 30068, 30090, 30089, 30082, 30100, 30106, 30109, 30117, 30115, 30146, 30131, 30147, 30133, 30141, 30136, 30140, 30129, 30157, 30154, 30162, 30169, 30179, 30174, 30206, 30207, $.ig.Windows932Encoding.prototype.__nULLCH, 30204, 30209, 30192, 30202, 30194, 30195, 30219, 30221, 30217, 30239, 30247, 30240, 30241, 30242, 30244, 30260, 30256, 30267, 30279, 30280, 30278, 30300, 30296, 30305, 30306, 30312, 30313, 30314, 30311, 30316, 30320, 30322, 30326, 30328, 30332, 30336, 30339, 30344, 30347, 30350, 30358, 30355, 30361, 30362, 30384, 30388, 30392, 30393, 30394, 30402, 30413, 30422, 30418, 30430, 30433, 30437, 30439, 30442, 34351, 30459, 30472, 30471, 30468, 30505, 30500, 30494, 30501, 30502, 30491, 30519, 30520, 30535, 30554, 30568, 30571, 30555, 30565, 30591, 30590, 30585, 30606, 30603, 30609, 30624, 30622, 30640, 30646, 30649, 30655, 30652, 30653, 30651, 30663, 30669, 30679, 30682, 30684, 30691, 30702, 30716, 30732, 30738, 31014, 30752, 31018, 30789, 30862, 30836, 30854, 30844, 30874, 30860, 30883, 30901, 30890, 30895, 30929, 30918, 30923, 30932, 30910, 30908, 30917, 30922, 30956, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH ]);
$.ig.Windows932Encoding.prototype.__codePageWindows932EncodingE2 = $.ig.CodePageEncoding.prototype._getCharacters($.ig.Windows932Encoding.prototype.__nULLCH, [ $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, 30951, 30938, 30973, 30964, 30983, 30994, 30993, 31001, 31020, 31019, 31040, 31072, 31063, 31071, 31066, 31061, 31059, 31098, 31103, 31114, 31133, 31143, 40779, 31146, 31150, 31155, 31161, 31162, 31177, 31189, 31207, 31212, 31201, 31203, 31240, 31245, 31256, 31257, 31264, 31263, 31104, 31281, 31291, 31294, 31287, 31299, 31319, 31305, 31329, 31330, 31337, 40861, 31344, 31353, 31357, 31368, 31383, 31381, 31384, 31382, 31401, 31432, 31408, $.ig.Windows932Encoding.prototype.__nULLCH, 31414, 31429, 31428, 31423, 36995, 31431, 31434, 31437, 31439, 31445, 31443, 31449, 31450, 31453, 31457, 31458, 31462, 31469, 31472, 31490, 31503, 31498, 31494, 31539, 31512, 31513, 31518, 31541, 31528, 31542, 31568, 31610, 31492, 31565, 31499, 31564, 31557, 31605, 31589, 31604, 31591, 31600, 31601, 31596, 31598, 31645, 31640, 31647, 31629, 31644, 31642, 31627, 31634, 31631, 31581, 31641, 31691, 31681, 31692, 31695, 31668, 31686, 31709, 31721, 31761, 31764, 31718, 31717, 31840, 31744, 31751, 31763, 31731, 31735, 31767, 31757, 31734, 31779, 31783, 31786, 31775, 31799, 31787, 31805, 31820, 31811, 31828, 31823, 31808, 31824, 31832, 31839, 31844, 31830, 31845, 31852, 31861, 31875, 31888, 31908, 31917, 31906, 31915, 31905, 31912, 31923, 31922, 31921, 31918, 31929, 31933, 31936, 31941, 31938, 31960, 31954, 31964, 31970, 39739, 31983, 31986, 31988, 31990, 31994, 32006, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH ]);
$.ig.Windows932Encoding.prototype.__codePageWindows932EncodingE3 = $.ig.CodePageEncoding.prototype._getCharacters($.ig.Windows932Encoding.prototype.__nULLCH, [ $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, 32002, 32028, 32021, 32010, 32069, 32075, 32046, 32050, 32063, 32053, 32070, 32115, 32086, 32078, 32114, 32104, 32110, 32079, 32099, 32147, 32137, 32091, 32143, 32125, 32155, 32186, 32174, 32163, 32181, 32199, 32189, 32171, 32317, 32162, 32175, 32220, 32184, 32159, 32176, 32216, 32221, 32228, 32222, 32251, 32242, 32225, 32261, 32266, 32291, 32289, 32274, 32305, 32287, 32265, 32267, 32290, 32326, 32358, 32315, 32309, 32313, 32323, 32311, $.ig.Windows932Encoding.prototype.__nULLCH, 32306, 32314, 32359, 32349, 32342, 32350, 32345, 32346, 32377, 32362, 32361, 32380, 32379, 32387, 32213, 32381, 36782, 32383, 32392, 32393, 32396, 32402, 32400, 32403, 32404, 32406, 32398, 32411, 32412, 32568, 32570, 32581, 32588, 32589, 32590, 32592, 32593, 32597, 32596, 32600, 32607, 32608, 32616, 32617, 32615, 32632, 32642, 32646, 32643, 32648, 32647, 32652, 32660, 32670, 32669, 32666, 32675, 32687, 32690, 32697, 32686, 32694, 32696, 35697, 32709, 32710, 32714, 32725, 32724, 32737, 32742, 32745, 32755, 32761, 39132, 32774, 32772, 32779, 32786, 32792, 32793, 32796, 32801, 32808, 32831, 32827, 32842, 32838, 32850, 32856, 32858, 32863, 32866, 32872, 32883, 32882, 32880, 32886, 32889, 32893, 32895, 32900, 32902, 32901, 32923, 32915, 32922, 32941, 20880, 32940, 32987, 32997, 32985, 32989, 32964, 32986, 32982, 33033, 33007, 33009, 33051, 33065, 33059, 33071, 33099, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH ]);
$.ig.Windows932Encoding.prototype.__codePageWindows932EncodingE4 = $.ig.CodePageEncoding.prototype._getCharacters($.ig.Windows932Encoding.prototype.__nULLCH, [ $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, 38539, 33094, 33086, 33107, 33105, 33020, 33137, 33134, 33125, 33126, 33140, 33155, 33160, 33162, 33152, 33154, 33184, 33173, 33188, 33187, 33119, 33171, 33193, 33200, 33205, 33214, 33208, 33213, 33216, 33218, 33210, 33225, 33229, 33233, 33241, 33240, 33224, 33242, 33247, 33248, 33255, 33274, 33275, 33278, 33281, 33282, 33285, 33287, 33290, 33293, 33296, 33302, 33321, 33323, 33336, 33331, 33344, 33369, 33368, 33373, 33370, 33375, 33380, $.ig.Windows932Encoding.prototype.__nULLCH, 33378, 33384, 33386, 33387, 33326, 33393, 33399, 33400, 33406, 33421, 33426, 33451, 33439, 33467, 33452, 33505, 33507, 33503, 33490, 33524, 33523, 33530, 33683, 33539, 33531, 33529, 33502, 33542, 33500, 33545, 33497, 33589, 33588, 33558, 33586, 33585, 33600, 33593, 33616, 33605, 33583, 33579, 33559, 33560, 33669, 33690, 33706, 33695, 33698, 33686, 33571, 33678, 33671, 33674, 33660, 33717, 33651, 33653, 33696, 33673, 33704, 33780, 33811, 33771, 33742, 33789, 33795, 33752, 33803, 33729, 33783, 33799, 33760, 33778, 33805, 33826, 33824, 33725, 33848, 34054, 33787, 33901, 33834, 33852, 34138, 33924, 33911, 33899, 33965, 33902, 33922, 33897, 33862, 33836, 33903, 33913, 33845, 33994, 33890, 33977, 33983, 33951, 34009, 33997, 33979, 34010, 34000, 33985, 33990, 34006, 33953, 34081, 34047, 34036, 34071, 34072, 34092, 34079, 34069, 34068, 34044, 34112, 34147, 34136, 34120, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH ]);
$.ig.Windows932Encoding.prototype.__codePageWindows932EncodingE5 = $.ig.CodePageEncoding.prototype._getCharacters($.ig.Windows932Encoding.prototype.__nULLCH, [ $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, 34113, 34306, 34123, 34133, 34176, 34212, 34184, 34193, 34186, 34216, 34157, 34196, 34203, 34282, 34183, 34204, 34167, 34174, 34192, 34249, 34234, 34255, 34233, 34256, 34261, 34269, 34277, 34268, 34297, 34314, 34323, 34315, 34302, 34298, 34310, 34338, 34330, 34352, 34367, 34381, 20053, 34388, 34399, 34407, 34417, 34451, 34467, 34473, 34474, 34443, 34444, 34486, 34479, 34500, 34502, 34480, 34505, 34851, 34475, 34516, 34526, 34537, 34540, $.ig.Windows932Encoding.prototype.__nULLCH, 34527, 34523, 34543, 34578, 34566, 34568, 34560, 34563, 34555, 34577, 34569, 34573, 34553, 34570, 34612, 34623, 34615, 34619, 34597, 34601, 34586, 34656, 34655, 34680, 34636, 34638, 34676, 34647, 34664, 34670, 34649, 34643, 34659, 34666, 34821, 34722, 34719, 34690, 34735, 34763, 34749, 34752, 34768, 38614, 34731, 34756, 34739, 34759, 34758, 34747, 34799, 34802, 34784, 34831, 34829, 34814, 34806, 34807, 34830, 34770, 34833, 34838, 34837, 34850, 34849, 34865, 34870, 34873, 34855, 34875, 34884, 34882, 34898, 34905, 34910, 34914, 34923, 34945, 34942, 34974, 34933, 34941, 34997, 34930, 34946, 34967, 34962, 34990, 34969, 34978, 34957, 34980, 34992, 35007, 34993, 35011, 35012, 35028, 35032, 35033, 35037, 35065, 35074, 35068, 35060, 35048, 35058, 35076, 35084, 35082, 35091, 35139, 35102, 35109, 35114, 35115, 35137, 35140, 35131, 35126, 35128, 35148, 35101, 35168, 35166, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH ]);
$.ig.Windows932Encoding.prototype.__codePageWindows932EncodingE6 = $.ig.CodePageEncoding.prototype._getCharacters($.ig.Windows932Encoding.prototype.__nULLCH, [ $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, 35174, 35172, 35181, 35178, 35183, 35188, 35191, 35198, 35203, 35208, 35210, 35219, 35224, 35233, 35241, 35238, 35244, 35247, 35250, 35258, 35261, 35263, 35264, 35290, 35292, 35293, 35303, 35316, 35320, 35331, 35350, 35344, 35340, 35355, 35357, 35365, 35382, 35393, 35419, 35410, 35398, 35400, 35452, 35437, 35436, 35426, 35461, 35458, 35460, 35496, 35489, 35473, 35493, 35494, 35482, 35491, 35524, 35533, 35522, 35546, 35563, 35571, 35559, $.ig.Windows932Encoding.prototype.__nULLCH, 35556, 35569, 35604, 35552, 35554, 35575, 35550, 35547, 35596, 35591, 35610, 35553, 35606, 35600, 35607, 35616, 35635, 38827, 35622, 35627, 35646, 35624, 35649, 35660, 35663, 35662, 35657, 35670, 35675, 35674, 35691, 35679, 35692, 35695, 35700, 35709, 35712, 35724, 35726, 35730, 35731, 35734, 35737, 35738, 35898, 35905, 35903, 35912, 35916, 35918, 35920, 35925, 35938, 35948, 35960, 35962, 35970, 35977, 35973, 35978, 35981, 35982, 35988, 35964, 35992, 25117, 36013, 36010, 36029, 36018, 36019, 36014, 36022, 36040, 36033, 36068, 36067, 36058, 36093, 36090, 36091, 36100, 36101, 36106, 36103, 36111, 36109, 36112, 40782, 36115, 36045, 36116, 36118, 36199, 36205, 36209, 36211, 36225, 36249, 36290, 36286, 36282, 36303, 36314, 36310, 36300, 36315, 36299, 36330, 36331, 36319, 36323, 36348, 36360, 36361, 36351, 36381, 36382, 36368, 36383, 36418, 36405, 36400, 36404, 36426, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH ]);
$.ig.Windows932Encoding.prototype.__codePageWindows932EncodingE7 = $.ig.CodePageEncoding.prototype._getCharacters($.ig.Windows932Encoding.prototype.__nULLCH, [ $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, 36423, 36425, 36428, 36432, 36424, 36441, 36452, 36448, 36394, 36451, 36437, 36470, 36466, 36476, 36481, 36487, 36485, 36484, 36491, 36490, 36499, 36497, 36500, 36505, 36522, 36513, 36524, 36528, 36550, 36529, 36542, 36549, 36552, 36555, 36571, 36579, 36604, 36603, 36587, 36606, 36618, 36613, 36629, 36626, 36633, 36627, 36636, 36639, 36635, 36620, 36646, 36659, 36667, 36665, 36677, 36674, 36670, 36684, 36681, 36678, 36686, 36695, 36700, $.ig.Windows932Encoding.prototype.__nULLCH, 36706, 36707, 36708, 36764, 36767, 36771, 36781, 36783, 36791, 36826, 36837, 36834, 36842, 36847, 36999, 36852, 36869, 36857, 36858, 36881, 36885, 36897, 36877, 36894, 36886, 36875, 36903, 36918, 36917, 36921, 36856, 36943, 36944, 36945, 36946, 36878, 36937, 36926, 36950, 36952, 36958, 36968, 36975, 36982, 38568, 36978, 36994, 36989, 36993, 36992, 37002, 37001, 37007, 37032, 37039, 37041, 37045, 37090, 37092, 25160, 37083, 37122, 37138, 37145, 37170, 37168, 37194, 37206, 37208, 37219, 37221, 37225, 37235, 37234, 37259, 37257, 37250, 37282, 37291, 37295, 37290, 37301, 37300, 37306, 37312, 37313, 37321, 37323, 37328, 37334, 37343, 37345, 37339, 37372, 37365, 37366, 37406, 37375, 37396, 37420, 37397, 37393, 37470, 37463, 37445, 37449, 37476, 37448, 37525, 37439, 37451, 37456, 37532, 37526, 37523, 37531, 37466, 37583, 37561, 37559, 37609, 37647, 37626, 37700, 37678, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH ]);
$.ig.Windows932Encoding.prototype.__codePageWindows932EncodingE8 = $.ig.CodePageEncoding.prototype._getCharacters($.ig.Windows932Encoding.prototype.__nULLCH, [ $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, 37657, 37666, 37658, 37667, 37690, 37685, 37691, 37724, 37728, 37756, 37742, 37718, 37808, 37804, 37805, 37780, 37817, 37846, 37847, 37864, 37861, 37848, 37827, 37853, 37840, 37832, 37860, 37914, 37908, 37907, 37891, 37895, 37904, 37942, 37931, 37941, 37921, 37946, 37953, 37970, 37956, 37979, 37984, 37986, 37982, 37994, 37417, 38000, 38005, 38007, 38013, 37978, 38012, 38014, 38017, 38015, 38274, 38279, 38282, 38292, 38294, 38296, 38297, $.ig.Windows932Encoding.prototype.__nULLCH, 38304, 38312, 38311, 38317, 38332, 38331, 38329, 38334, 38346, 28662, 38339, 38349, 38348, 38357, 38356, 38358, 38364, 38369, 38373, 38370, 38433, 38440, 38446, 38447, 38466, 38476, 38479, 38475, 38519, 38492, 38494, 38493, 38495, 38502, 38514, 38508, 38541, 38552, 38549, 38551, 38570, 38567, 38577, 38578, 38576, 38580, 38582, 38584, 38585, 38606, 38603, 38601, 38605, 35149, 38620, 38669, 38613, 38649, 38660, 38662, 38664, 38675, 38670, 38673, 38671, 38678, 38681, 38692, 38698, 38704, 38713, 38717, 38718, 38724, 38726, 38728, 38722, 38729, 38748, 38752, 38756, 38758, 38760, 21202, 38763, 38769, 38777, 38789, 38780, 38785, 38778, 38790, 38795, 38799, 38800, 38812, 38824, 38822, 38819, 38835, 38836, 38851, 38854, 38856, 38859, 38876, 38893, 40783, 38898, 31455, 38902, 38901, 38927, 38924, 38968, 38948, 38945, 38967, 38973, 38982, 38991, 38987, 39019, 39023, 39024, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH ]);
$.ig.Windows932Encoding.prototype.__codePageWindows932EncodingE9 = $.ig.CodePageEncoding.prototype._getCharacters($.ig.Windows932Encoding.prototype.__nULLCH, [ $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, 39025, 39028, 39027, 39082, 39087, 39089, 39094, 39108, 39107, 39110, 39145, 39147, 39171, 39177, 39186, 39188, 39192, 39201, 39197, 39198, 39204, 39200, 39212, 39214, 39229, 39230, 39234, 39241, 39237, 39248, 39243, 39249, 39250, 39244, 39253, 39319, 39320, 39333, 39341, 39342, 39356, 39391, 39387, 39389, 39384, 39377, 39405, 39406, 39409, 39410, 39419, 39416, 39425, 39439, 39429, 39394, 39449, 39467, 39479, 39493, 39490, 39488, 39491, $.ig.Windows932Encoding.prototype.__nULLCH, 39486, 39509, 39501, 39515, 39511, 39519, 39522, 39525, 39524, 39529, 39531, 39530, 39597, 39600, 39612, 39616, 39631, 39633, 39635, 39636, 39646, 39647, 39650, 39651, 39654, 39663, 39659, 39662, 39668, 39665, 39671, 39675, 39686, 39704, 39706, 39711, 39714, 39715, 39717, 39719, 39720, 39721, 39722, 39726, 39727, 39730, 39748, 39747, 39759, 39757, 39758, 39761, 39768, 39796, 39827, 39811, 39825, 39830, 39831, 39839, 39840, 39848, 39860, 39872, 39882, 39865, 39878, 39887, 39889, 39890, 39907, 39906, 39908, 39892, 39905, 39994, 39922, 39921, 39920, 39957, 39956, 39945, 39955, 39948, 39942, 39944, 39954, 39946, 39940, 39982, 39963, 39973, 39972, 39969, 39984, 40007, 39986, 40006, 39998, 40026, 40032, 40039, 40054, 40056, 40167, 40172, 40176, 40201, 40200, 40171, 40195, 40198, 40234, 40230, 40367, 40227, 40223, 40260, 40213, 40210, 40257, 40255, 40254, 40262, 40264, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH ]);
$.ig.Windows932Encoding.prototype.__codePageWindows932EncodingEA = $.ig.CodePageEncoding.prototype._getCharacters($.ig.Windows932Encoding.prototype.__nULLCH, [ $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, 40285, 40286, 40292, 40273, 40272, 40281, 40306, 40329, 40327, 40363, 40303, 40314, 40346, 40356, 40361, 40370, 40388, 40385, 40379, 40376, 40378, 40390, 40399, 40386, 40409, 40403, 40440, 40422, 40429, 40431, 40445, 40474, 40475, 40478, 40565, 40569, 40573, 40577, 40584, 40587, 40588, 40594, 40597, 40593, 40605, 40613, 40617, 40632, 40618, 40621, 38753, 40652, 40654, 40655, 40656, 40660, 40668, 40670, 40669, 40672, 40677, 40680, 40687, $.ig.Windows932Encoding.prototype.__nULLCH, 40692, 40694, 40695, 40697, 40699, 40700, 40701, 40711, 40712, 30391, 40725, 40737, 40748, 40766, 40778, 40786, 40788, 40803, 40799, 40800, 40801, 40806, 40807, 40812, 40810, 40823, 40818, 40822, 40853, 40860, 40864, 22575, 27079, 36953, 29796, 20956, 29081, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH ]);
$.ig.Windows932Encoding.prototype.__codePageWindows932EncodingED = $.ig.CodePageEncoding.prototype._getCharacters($.ig.Windows932Encoding.prototype.__nULLCH, [ $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, 32394, 35100, 37704, 37512, 34012, 20425, 28859, 26161, 26824, 37625, 26363, 24389, 20008, 20193, 20220, 20224, 20227, 20281, 20310, 20370, 20362, 20378, 20372, 20429, 20544, 20514, 20479, 20510, 20550, 20592, 20546, 20628, 20724, 20696, 20810, 20836, 20893, 20926, 20972, 21013, 21148, 21158, 21184, 21211, 21248, 21255, 21284, 21362, 21395, 21426, 21469, 64014, 21660, 21642, 21673, 21759, 21894, 22361, 22373, 22444, 22472, 22471, 64015, $.ig.Windows932Encoding.prototype.__nULLCH, 64016, 22686, 22706, 22795, 22867, 22875, 22877, 22883, 22948, 22970, 23382, 23488, 29999, 23512, 23532, 23582, 23718, 23738, 23797, 23847, 23891, 64017, 23874, 23917, 23992, 23993, 24016, 24353, 24372, 24423, 24503, 24542, 24669, 24709, 24714, 24798, 24789, 24864, 24818, 24849, 24887, 24880, 24984, 25107, 25254, 25589, 25696, 25757, 25806, 25934, 26112, 26133, 26171, 26121, 26158, 26142, 26148, 26213, 26199, 26201, 64018, 26227, 26265, 26272, 26290, 26303, 26362, 26382, 63785, 26470, 26555, 26706, 26560, 26625, 26692, 26831, 64019, 26984, 64020, 27032, 27106, 27184, 27243, 27206, 27251, 27262, 27362, 27364, 27606, 27711, 27740, 27782, 27759, 27866, 27908, 28039, 28015, 28054, 28076, 28111, 28152, 28146, 28156, 28217, 28252, 28199, 28220, 28351, 28552, 28597, 28661, 28677, 28679, 28712, 28805, 28843, 28943, 28932, 29020, 28998, 28999, 64021, 29121, 29182, 29361, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH ]);
$.ig.Windows932Encoding.prototype.__codePageWindows932EncodingEE = $.ig.CodePageEncoding.prototype._getCharacters($.ig.Windows932Encoding.prototype.__nULLCH, [ $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, 29374, 29476, 64022, 29559, 29629, 29641, 29654, 29667, 29650, 29703, 29685, 29734, 29738, 29737, 29742, 29794, 29833, 29855, 29953, 30063, 30338, 30364, 30366, 30363, 30374, 64023, 30534, 21167, 30753, 30798, 30820, 30842, 31024, 64024, 64025, 64026, 31124, 64027, 31131, 31441, 31463, 64028, 31467, 31646, 64029, 32072, 32092, 32183, 32160, 32214, 32338, 32583, 32673, 64030, 33537, 33634, 33663, 33735, 33782, 33864, 33972, 34131, 34137, $.ig.Windows932Encoding.prototype.__nULLCH, 34155, 64031, 34224, 64032, 64033, 34823, 35061, 35346, 35383, 35449, 35495, 35518, 35551, 64034, 35574, 35667, 35711, 36080, 36084, 36114, 36214, 64035, 36559, 64036, 64037, 36967, 37086, 64038, 37141, 37159, 37338, 37335, 37342, 37357, 37358, 37348, 37349, 37382, 37392, 37386, 37434, 37440, 37436, 37454, 37465, 37457, 37433, 37479, 37543, 37495, 37496, 37607, 37591, 37593, 37584, 64039, 37589, 37600, 37587, 37669, 37665, 37627, 64040, 37662, 37631, 37661, 37634, 37744, 37719, 37796, 37830, 37854, 37880, 37937, 37957, 37960, 38290, 63964, 64041, 38557, 38575, 38707, 38715, 38723, 38733, 38735, 38737, 38741, 38999, 39013, 64042, 64043, 39207, 64044, 39326, 39502, 39641, 39644, 39797, 39794, 39823, 39857, 39867, 39936, 40304, 40299, 64045, 40473, 40657, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, 8560, 8561, 8562, 8563, 8564, 8565, 8566, 8567, 8568, 8569, 65506, 65508, 65287, 65282, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH ]);
$.ig.Windows932Encoding.prototype.__codePageWindows932EncodingFA = $.ig.CodePageEncoding.prototype._getCharacters($.ig.Windows932Encoding.prototype.__nULLCH, [ $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, 8560, 8561, 8562, 8563, 8564, 8565, 8566, 8567, 8568, 8569, 8544, 8545, 8546, 8547, 8548, 8549, 8550, 8551, 8552, 8553, 65506, 65508, 65287, 65282, 12849, 8470, 8481, 8757, 32394, 35100, 37704, 37512, 34012, 20425, 28859, 26161, 26824, 37625, 26363, 24389, 20008, 20193, 20220, 20224, 20227, 20281, 20310, 20370, 20362, 20378, 20372, 20429, 20544, 20514, 20479, 20510, 20550, 20592, 20546, 20628, 20724, 20696, 20810, $.ig.Windows932Encoding.prototype.__nULLCH, 20836, 20893, 20926, 20972, 21013, 21148, 21158, 21184, 21211, 21248, 21255, 21284, 21362, 21395, 21426, 21469, 64014, 21660, 21642, 21673, 21759, 21894, 22361, 22373, 22444, 22472, 22471, 64015, 64016, 22686, 22706, 22795, 22867, 22875, 22877, 22883, 22948, 22970, 23382, 23488, 29999, 23512, 23532, 23582, 23718, 23738, 23797, 23847, 23891, 64017, 23874, 23917, 23992, 23993, 24016, 24353, 24372, 24423, 24503, 24542, 24669, 24709, 24714, 24798, 24789, 24864, 24818, 24849, 24887, 24880, 24984, 25107, 25254, 25589, 25696, 25757, 25806, 25934, 26112, 26133, 26171, 26121, 26158, 26142, 26148, 26213, 26199, 26201, 64018, 26227, 26265, 26272, 26290, 26303, 26362, 26382, 63785, 26470, 26555, 26706, 26560, 26625, 26692, 26831, 64019, 26984, 64020, 27032, 27106, 27184, 27243, 27206, 27251, 27262, 27362, 27364, 27606, 27711, 27740, 27782, 27759, 27866, 27908, 28039, 28015, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH ]);
$.ig.Windows932Encoding.prototype.__codePageWindows932EncodingFB = $.ig.CodePageEncoding.prototype._getCharacters($.ig.Windows932Encoding.prototype.__nULLCH, [ $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, 28054, 28076, 28111, 28152, 28146, 28156, 28217, 28252, 28199, 28220, 28351, 28552, 28597, 28661, 28677, 28679, 28712, 28805, 28843, 28943, 28932, 29020, 28998, 28999, 64021, 29121, 29182, 29361, 29374, 29476, 64022, 29559, 29629, 29641, 29654, 29667, 29650, 29703, 29685, 29734, 29738, 29737, 29742, 29794, 29833, 29855, 29953, 30063, 30338, 30364, 30366, 30363, 30374, 64023, 30534, 21167, 30753, 30798, 30820, 30842, 31024, 64024, 64025, $.ig.Windows932Encoding.prototype.__nULLCH, 64026, 31124, 64027, 31131, 31441, 31463, 64028, 31467, 31646, 64029, 32072, 32092, 32183, 32160, 32214, 32338, 32583, 32673, 64030, 33537, 33634, 33663, 33735, 33782, 33864, 33972, 34131, 34137, 34155, 64031, 34224, 64032, 64033, 34823, 35061, 35346, 35383, 35449, 35495, 35518, 35551, 64034, 35574, 35667, 35711, 36080, 36084, 36114, 36214, 64035, 36559, 64036, 64037, 36967, 37086, 64038, 37141, 37159, 37338, 37335, 37342, 37357, 37358, 37348, 37349, 37382, 37392, 37386, 37434, 37440, 37436, 37454, 37465, 37457, 37433, 37479, 37543, 37495, 37496, 37607, 37591, 37593, 37584, 64039, 37589, 37600, 37587, 37669, 37665, 37627, 64040, 37662, 37631, 37661, 37634, 37744, 37719, 37796, 37830, 37854, 37880, 37937, 37957, 37960, 38290, 63964, 64041, 38557, 38575, 38707, 38715, 38723, 38733, 38735, 38737, 38741, 38999, 39013, 64042, 64043, 39207, 64044, 39326, 39502, 39641, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH ]);
$.ig.Windows932Encoding.prototype.__codePageWindows932EncodingFC = $.ig.CodePageEncoding.prototype._getCharacters($.ig.Windows932Encoding.prototype.__nULLCH, [ $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, 39644, 39797, 39794, 39823, 39857, 39867, 39936, 40304, 40299, 64045, 40473, 40657, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH, $.ig.Windows932Encoding.prototype.__nULLCH ]);
$.ig.Windows932Encoding.prototype.___codePageLayouts = null;
if ($.ig.Windows932Encoding.prototype._staticInit && !$.ig.Windows932Encoding.prototype.windows932EncodingStaticInitCalled) { $.ig.Windows932Encoding.prototype._staticInit(); $.ig.Windows932Encoding.prototype.windows932EncodingStaticInitCalled = true; }
/*<EndStatics Name="Infragistics.Windows932Encoding" />*/

/*<BeginStatics Name="Infragistics.Imaging.ImageFormat" />*/

$.ig.ImageFormat.prototype.bmpGuid = new $.ig.Guid(3, "B96B3CAA-0728-11D3-9D7B-0000F81EF32E");
$.ig.ImageFormat.prototype.dibGuid = new $.ig.Guid(3, "824CA8E2-A984-4668-8A14-077225372B1C");
$.ig.ImageFormat.prototype.emfGuid = new $.ig.Guid(3, "B96B3CAC-0728-11D3-9D7B-0000F81EF32E");
$.ig.ImageFormat.prototype.gifGuid = new $.ig.Guid(3, "1FE88D21-FE3D-4F4A-ABD3-8DBAD86C510A");
$.ig.ImageFormat.prototype.jpegGuid = new $.ig.Guid(3, "0C487171-1412-4D76-B20A-4AEA380FFAA7");
$.ig.ImageFormat.prototype.pngGuid = new $.ig.Guid(3, "7B369CF6-0507-4F15-ABE8-5768C70D1454");
$.ig.ImageFormat.prototype.tiffGuid = new $.ig.Guid(3, "069B1E5E-A617-4498-AAEA-D71AF8933FD3");
$.ig.ImageFormat.prototype.wmfGuid = new $.ig.Guid(3, "B96B3CAD-0728-11D3-9D7B-0000F81EF32E");
$.ig.ImageFormat.prototype.bmp = new $.ig.ImageFormat($.ig.ImageFormat.prototype.bmpGuid);
$.ig.ImageFormat.prototype.dib = new $.ig.ImageFormat($.ig.ImageFormat.prototype.dibGuid);
$.ig.ImageFormat.prototype.emf = new $.ig.ImageFormat($.ig.ImageFormat.prototype.emfGuid);
$.ig.ImageFormat.prototype.gif = new $.ig.ImageFormat($.ig.ImageFormat.prototype.gifGuid);
$.ig.ImageFormat.prototype.jpeg = new $.ig.ImageFormat($.ig.ImageFormat.prototype.jpegGuid);
$.ig.ImageFormat.prototype.png = new $.ig.ImageFormat($.ig.ImageFormat.prototype.pngGuid);
$.ig.ImageFormat.prototype.tiff = new $.ig.ImageFormat($.ig.ImageFormat.prototype.tiffGuid);
$.ig.ImageFormat.prototype.wmf = new $.ig.ImageFormat($.ig.ImageFormat.prototype.wmfGuid);
/*<EndStatics Name="Infragistics.Imaging.ImageFormat" />*/

/*<BeginStatics Name="Infragistics.Documents.OfficeOpenXml.Core.ST_PositiveCoordinate" />*/

$.ig.ST_PositiveCoordinate.prototype.minValue = 0;
$.ig.ST_PositiveCoordinate.prototype.maxValue = 27273042316900;
/*<EndStatics Name="Infragistics.Documents.OfficeOpenXml.Core.ST_PositiveCoordinate" />*/

/*<BeginStatics Name="Infragistics.Documents.OfficeOpenXml.Core.IgnoreChildrenMarker" />*/

$.ig.IgnoreChildrenMarker.prototype.instance = new $.ig.IgnoreChildrenMarker();
/*<EndStatics Name="Infragistics.Documents.OfficeOpenXml.Core.IgnoreChildrenMarker" />*/

/*<BeginStatics Name="Infragistics.Documents.OfficeOpenXml.Core.ST_Angle" />*/

$.ig.ST_Angle.prototype.unitsPerDegree = 60000;
/*<EndStatics Name="Infragistics.Documents.OfficeOpenXml.Core.ST_Angle" />*/

/*<BeginStatics Name="Infragistics.Documents.Core.WorkItem" />*/

$.ig.WorkItem.prototype._noOpAction = function () {
};
$.ig.WorkItem.prototype.__nextId = 0;
/*<EndStatics Name="Infragistics.Documents.Core.WorkItem" />*/

/*<BeginStatics Name="Infragistics.Documents.Core.WorkItemExtensions_WorkItemCompleted" />*/

$.ig.WorkItemExtensions_WorkItemCompleted.prototype.instance = new $.ig.WorkItemExtensions_WorkItemCompleted();
/*<EndStatics Name="Infragistics.Documents.Core.WorkItemExtensions_WorkItemCompleted" />*/

/*<BeginStatics Name="Infragistics.Documents.Core.SeekableBufferedStream" />*/

$.ig.SeekableBufferedStream.prototype.__maxBufferLength = 10240;
/*<EndStatics Name="Infragistics.Documents.Core.SeekableBufferedStream" />*/

/*<BeginStatics Name="Infragistics.Documents.Core.Utilities" />*/

$.ig.DocCoreUtils.prototype._eMUsPerPoint = 12700;
$.ig.DocCoreUtils.prototype.regexOptionsCompiled = $.ig.RegexOptions.prototype.compiled;
$.ig.DocCoreUtils.prototype._twipsPerPoint = 20;
$.ig.DocCoreUtils.prototype._powersOf10 = [ 1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 10000000000, 100000000000, 1000000000000, 10000000000000, 100000000000000, 1E+15 ];
/*<EndStatics Name="Infragistics.Documents.Core.Utilities" />*/

/*<BeginStatics Name="Infragistics.Documents.Core.MsoCrypto.InPlaceTransform" />*/

$.ig.InPlaceTransform.prototype.__noTransform = null;
/*<EndStatics Name="Infragistics.Documents.Core.MsoCrypto.InPlaceTransform" />*/

/*<BeginStatics Name="Infragistics.Documents.Core.MsoCrypto.OleDataSpaces" />*/

$.ig.OleDataSpaces.prototype._microsoftContainerDataSpacesFeatureName = "Microsoft.Container.DataSpaces";
$.ig.OleDataSpaces.prototype._microsoftContainerEncryptionTransformId = "{FF9A3F03-56EF-4613-BDD5-5A41C1D07246}";
$.ig.OleDataSpaces.prototype._microsoftContainerEncryptionTransformName = "Microsoft.Container.EncryptionTransform";
$.ig.OleDataSpaces.prototype._dataSpaceMapFileName = "\u0006DataSpaces\\DataSpaceMap";
$.ig.OleDataSpaces.prototype._dataSpaceInfoDirectoryName = "\u0006DataSpaces\\DataSpaceInfo\\";
$.ig.OleDataSpaces.prototype._strongEncryptionTransformDirectoryName = "StrongEncryptionTransform";
$.ig.OleDataSpaces.prototype._transformInfoDirectoryName = "\u0006DataSpaces\\TransformInfo";
$.ig.OleDataSpaces.prototype._versionFileName = "\u0006DataSpaces\\Version";
$.ig.OleDataSpaces.prototype._encryptionInfoFileName = "EncryptionInfo";
$.ig.OleDataSpaces.prototype._encryptedPackageFileName = "EncryptedPackage";
$.ig.OleDataSpaces.prototype._primaryFileName = "\u0006Primary";
$.ig.OleDataSpaces.prototype._strongEncryptionDataSpaceFileName = "StrongEncryptionDataSpace";
/*<EndStatics Name="Infragistics.Documents.Core.MsoCrypto.OleDataSpaces" />*/

/*<BeginStatics Name="Infragistics.Documents.Core.MsoCrypto.ProtectionValidationInfo_Strict" />*/

$.ig.ProtectionValidationInfo_Strict.prototype._defaultAlgorithmName = "SHA-512";
$.ig.ProtectionValidationInfo_Strict.prototype._defaultSpinCount = 100000;
$.ig.ProtectionValidationInfo_Strict.prototype._saltSize = 16;
/*<EndStatics Name="Infragistics.Documents.Core.MsoCrypto.ProtectionValidationInfo_Strict" />*/

/*<BeginStatics Name="Infragistics.Documents.Core.StructuredStorage.DirectoryEntry" />*/

$.ig.DirectoryEntry.prototype._entryNameComparer = null;
/*<EndStatics Name="Infragistics.Documents.Core.StructuredStorage.DirectoryEntry" />*/

/*<BeginStatics Name="Infragistics.Documents.Core.StructuredStorage.DirectoryStream" />*/

$.ig.DirectoryStream.prototype.__directoryEntryHeaderLength = 128;
$.ig.DirectoryStream.prototype.__directoryEntryTitleLength = 32;
/*<EndStatics Name="Infragistics.Documents.Core.StructuredStorage.DirectoryStream" />*/

/*<BeginStatics Name="Infragistics.Documents.Core.StructuredStorage.StructuredStorageManager" />*/

$.ig.StructuredStorageManager.prototype.__fileTypeIDLow = 3759263696;
$.ig.StructuredStorageManager.prototype.__fileTypeIDHigh = 3776623009;
$.ig.StructuredStorageManager.prototype.__littleEndianFormat = 65534;
$.ig.StructuredStorageManager.prototype.__headerLength = 512;
$.ig.StructuredStorageManager.prototype._freeSectorId = -1;
$.ig.StructuredStorageManager.prototype._endOfStreamSectorId = -2;
$.ig.StructuredStorageManager.prototype._sATSectorId = -3;
$.ig.StructuredStorageManager.prototype._masterSATSectorId = -4;
$.ig.StructuredStorageManager.prototype._headerMasterSATLength = 109;
$.ig.StructuredStorageManager.prototype._headerMasterSATPosition = 436;
/*<EndStatics Name="Infragistics.Documents.Core.StructuredStorage.StructuredStorageManager" />*/

/*<BeginStatics Name="Infragistics.Documents.Core.StructuredStorage.FileTypes.InformationBase" />*/

$.ig.InformationBase.prototype.codePagePropertyType = 1;
$.ig.InformationBase.prototype._headerValue = 65534;
/*<EndStatics Name="Infragistics.Documents.Core.StructuredStorage.FileTypes.InformationBase" />*/

/*<BeginStatics Name="Infragistics.Documents.Core.StructuredStorage.FileTypes.DocumentSummaryInformation" />*/

$.ig.DocumentSummaryInformation.prototype._firstUserPropertyType = 2;
$.ig.DocumentSummaryInformation.prototype._userSectionId = "d5cdd5052e9c101b939708002b2cf9ae";
/*<EndStatics Name="Infragistics.Documents.Core.StructuredStorage.FileTypes.DocumentSummaryInformation" />*/


/*<BeginGlobal/>*/
if ($.ig.documentsCore) { $.ig.documentsCore._isNamespace = true; }

/*<EndGlobal/>*/
/*<BeginFooter/>*/
}));// REMOVE_FROM_COMBINED_FILES
/*<EndFooter/>*/

