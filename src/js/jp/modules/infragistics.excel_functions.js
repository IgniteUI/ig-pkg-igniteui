/*!@license
* Infragistics.Web.ClientUI infragistics.excel_functions.js 17.1.20171.1012
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
*     infragistics.ext_collectionsExtended.js
*     infragistics.ext_io.js
*     infragistics.ext_text.js
*     infragistics.documents.core_core.js
*     infragistics.excel_core.js
*     infragistics.ext_ui.js
*/
/*<BeginHeader/>*/
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		define( [
			'./infragistics.util',
			'./infragistics.ext_core',
			'./infragistics.ext_collections',
			'./infragistics.ext_collectionsExtended',
			'./infragistics.ext_io',
			'./infragistics.ext_text',
			'./infragistics.documents.core_core',
			'./infragistics.excel_core',
			'./infragistics.ext_ui'
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
$.ig.globalDefs.$$af = $$t;
$$0 = $.ig.globalDefs.$$0;
$$4 = $.ig.globalDefs.$$4;
$$5 = $.ig.globalDefs.$$5;
$$7 = $.ig.globalDefs.$$7;
$$8 = $.ig.globalDefs.$$8;
$$v = $.ig.globalDefs.$$v;
$$a4 = $.ig.globalDefs.$$a4;
$$6 = $.ig.globalDefs.$$6;
$$a = $.ig.globalDefs.$$a;
$.ig.$currDefinitions = $$t;
$.ig.util.bulkDefine([
"SumElementCallback1:fr",
"SumElementCallback2:fs"]);
/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcConditionalFunctionBase_CriteriaEvaluator_Operator" />*/

$.ig.util.defEnum('UltraCalcConditionalFunctionBase_CriteriaEvaluator_Operator', false, false, {
	Equals: 0,
	NotEquals: 1,
	GreaterThan: 2,
	GreaterThanOrEqual: 3,
	LessThan: 4,
	LessThanOrEqual: 5
});

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcConditionalFunctionBase_CriteriaEvaluator_Operator" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConvert_MeasurementUnitCategory" />*/

$.ig.util.defEnum('UltraCalcFunctionConvert_MeasurementUnitCategory', false, false, {
	Unknown: 0,
	WeightAndMass: 1,
	Distance: 2,
	Time: 3,
	Pressure: 4,
	Force: 5,
	Energy: 6,
	Power: 7,
	Magnetism: 8,
	Temperature: 9,
	LiquidMeasure: 10
});

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConvert_MeasurementUnitCategory" />*/

/*<BeginType Name="AssemblyRef" />*/

$.ig.util.defType('AssemblyRef', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	$type: new $.ig.Type('AssemblyRef', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="AssemblyRef" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLoader" />*/

$.ig.util.defType('UltraCalcFunctionLoader', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	staticInit: function () {
		$.ig.UltraCalcFunctionLoader.prototype.registerLoader();
	},
	/*<BeginMethod Name="System.Void Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLoader::RegisterLoader()" />*/
	registerLoader: function () {
		$.ig.UltraCalcFunctionFactory.prototype._loader(function (f) {
			f._add(new $.ig.UltraCalcFunctionSum());
			f._add(new $.ig.UltraCalcFunctionAverage());
			f._add(new $.ig.UltraCalcFunctionIf());
			f._add(new $.ig.UltraCalcFunctionAbs());
			f._add(new $.ig.UltraCalcFunctionMod());
			f._add(new $.ig.UltraCalcFunctionQuotient());
			f._add(new $.ig.UltraCalcFunctionProduct());
			f._add(new $.ig.UltraCalcFunctionPower());
			f._add(new $.ig.UltraCalcFunctionInt());
			f._add(new $.ig.UltraCalcFunctionCount());
			f._add(new $.ig.UltraCalcFunctionTrue());
			f._add(new $.ig.UltraCalcFunctionFalse());
			f._add(new $.ig.UltraCalcFunctionAnd());
			f._add(new $.ig.UltraCalcFunctionOr());
			f._add(new $.ig.UltraCalcFunctionNot());
			f._add(new $.ig.UltraCalcFunctionMax());
			f._add(new $.ig.UltraCalcFunctionMin());
			f._add(new $.ig.UltraCalcFunctionMedian());
			f._add(new $.ig.UltraCalcFunctionVar());
			f._add(new $.ig.UltraCalcFunctionStdev());
			f._add(new $.ig.UltraCalcFunctionRound());
			f._add(new $.ig.UltraCalcFunctionExp());
			f._add(new $.ig.UltraCalcFunctionPi());
			f._add(new $.ig.UltraCalcFunctionSqrt());
			f._add(new $.ig.UltraCalcFunctionCos());
			f._add(new $.ig.UltraCalcFunctionCosh());
			f._add(new $.ig.UltraCalcFunctionACos());
			f._add(new $.ig.UltraCalcFunctionSin());
			f._add(new $.ig.UltraCalcFunctionSinh());
			f._add(new $.ig.UltraCalcFunctionASin());
			f._add(new $.ig.UltraCalcFunctionTan());
			f._add(new $.ig.UltraCalcFunctionTanh());
			f._add(new $.ig.UltraCalcFunctionATan());
			f._add(new $.ig.UltraCalcFunctionATan2());
			f._add(new $.ig.UltraCalcFunctionFloor());
			f._add(new $.ig.UltraCalcFunctionCeiling());
			f._add(new $.ig.UltraCalcFunctionRand());
			f._add(new $.ig.UltraCalcFunctionLn());
			f._add(new $.ig.UltraCalcFunctionLog());
			f._add(new $.ig.UltraCalcFunctionLog10());
			f._add(new $.ig.UltraCalcFunctionNPV());
			f._add(new $.ig.UltraCalcFunctionFV());
			f._add(new $.ig.UltraCalcFunctionPV());
			f._add(new $.ig.UltraCalcFunctionPmt());
			f._add(new $.ig.UltraCalcFunctionNPer());
			f._add(new $.ig.UltraCalcFunctionTrunc());
			f._add(new $.ig.UltraCalcFunctionEven());
			f._add(new $.ig.UltraCalcFunctionOdd());
			f._add(new $.ig.UltraCalcFunctionPPmt());
			f._add(new $.ig.UltraCalcFunctionIPmt());
			f._add(new $.ig.UltraCalcFunctionConcatenate());
			f._add(new $.ig.UltraCalcFunctionLower());
			f._add(new $.ig.UltraCalcFunctionUpper());
			f._add(new $.ig.UltraCalcFunctionLeft());
			f._add(new $.ig.UltraCalcFunctionRight());
			f._add(new $.ig.UltraCalcFunctionMid());
			f._add(new $.ig.UltraCalcFunctionLen());
			f._add(new $.ig.UltraCalcFunctionTrim());
			f._add(new $.ig.UltraCalcFunctionValue());
			f._add(new $.ig.UltraCalcFunctionFind());
			f._add(new $.ig.UltraCalcFunctionReplace());
			f._add(new $.ig.UltraCalcFunctionSYD());
			f._add(new $.ig.UltraCalcFunctionSLN());
			f._add(new $.ig.UltraCalcFunctionDB());
			f._add(new $.ig.UltraCalcFunctionDDB());
			f._add(new $.ig.UltraCalcFunctionIntRate());
			f._add(new $.ig.UltraCalcFunctionDate());
			f._add(new $.ig.UltraCalcFunctionDateValue());
			f._add(new $.ig.UltraCalcFunctionDays360());
			f._add(new $.ig.UltraCalcFunctionDay());
			f._add(new $.ig.UltraCalcFunctionMonth());
			f._add(new $.ig.UltraCalcFunctionYear());
			f._add(new $.ig.UltraCalcFunctionHour());
			f._add(new $.ig.UltraCalcFunctionMinute());
			f._add(new $.ig.UltraCalcFunctionSecond());
			f._add(new $.ig.UltraCalcFunctionTime());
			f._add(new $.ig.UltraCalcFunctionNow());
			f._add(new $.ig.UltraCalcFunctionTimeValue());
			f._add(new $.ig.UltraCalcFunctionNa());
			f._add(new $.ig.UltraCalcFunctionType());
			f._add(new $.ig.UltraCalcFunctionErrorType());
			f._add(new $.ig.UltraCalcFunctionIsBlank());
			f._add(new $.ig.UltraCalcFunctionIsErr());
			f._add(new $.ig.UltraCalcFunctionIsError());
			f._add(new $.ig.UltraCalcFunctionIsLogical());
			f._add(new $.ig.UltraCalcFunctionIsNa());
			f._add(new $.ig.UltraCalcFunctionIsNonText());
			f._add(new $.ig.UltraCalcFunctionIsNumber());
			f._add(new $.ig.UltraCalcFunctionIsRef());
			f._add(new $.ig.UltraCalcFunctionIsText());
			f._add(new $.ig.UltraCalcFunctionIsOdd());
			f._add(new $.ig.UltraCalcFunctionIsEven());
			f._add(new $.ig.UltraCalcFunctionIRR());
			f._add(new $.ig.UltraCalcFunctionRate());
			f._add(new $.ig.UltraCalcFunctionNull());
			f._add(new $.ig.UltraCalcFunctionIsNull());
			f._add(new $.ig.UltraCalcFunctionDBNull());
			f._add(new $.ig.UltraCalcFunctionIsDBNull());
			f._add(new $.ig.UltraCalcFunctionDateAdd());
			f._add(new $.ig.UltraCalcFunctionDateDiff());
			f._add(new $.ig.UltraCalcFunctionChar());
			f._add(new $.ig.UltraCalcFunctionCode());
			f._add(new $.ig.UltraCalcFunctionFixed());
			f._add(new $.ig.UltraCalcFunctionToday());
			f._add(new $.ig.UltraCalcFunctionASinh());
			f._add(new $.ig.UltraCalcFunctionATanh());
			f._add(new $.ig.UltraCalcFunctionACosh());
			f._add(new $.ig.UltraCalcFunctionEDate());
			f._add(new $.ig.UltraCalcFunctionEOMonth());
			f._add(new $.ig.UltraCalcFunctionWeekDay());
			f._add(new $.ig.UltraCalcFunctionNetWorkDays());
			f._add(new $.ig.UltraCalcFunctionWeekNum());
			f._add(new $.ig.UltraCalcFunctionWorkDay());
			f._add(new $.ig.UltraCalcFunctionDec2Bin());
			f._add(new $.ig.UltraCalcFunctionDec2Hex());
			f._add(new $.ig.UltraCalcFunctionDec2Oct());
			f._add(new $.ig.UltraCalcFunctionBin2Dec());
			f._add(new $.ig.UltraCalcFunctionHex2Dec());
			f._add(new $.ig.UltraCalcFunctionOct2Dec());
			f._add(new $.ig.UltraCalcFunctionBin2Oct());
			f._add(new $.ig.UltraCalcFunctionBin2Hex());
			f._add(new $.ig.UltraCalcFunctionOct2Bin());
			f._add(new $.ig.UltraCalcFunctionOct2Hex());
			f._add(new $.ig.UltraCalcFunctionHex2Bin());
			f._add(new $.ig.UltraCalcFunctionHex2Oct());
			f._add(new $.ig.UltraCalcFunctionConvert());
			f._add(new $.ig.UltraCalcFunctionDelta());
			f._add(new $.ig.UltraCalcFunctionGeStep());
			f._add(new $.ig.UltraCalcFunctionComplex());
			f._add(new $.ig.UltraCalcFunctionImAbs());
			f._add(new $.ig.UltraCalcFunctionImaginary());
			f._add(new $.ig.UltraCalcFunctionImReal());
			f._add(new $.ig.UltraCalcFunctionImArgument());
			f._add(new $.ig.UltraCalcFunctionImConjugate());
			f._add(new $.ig.UltraCalcFunctionImCos());
			f._add(new $.ig.UltraCalcFunctionImDiv());
			f._add(new $.ig.UltraCalcFunctionImProduct());
			f._add(new $.ig.UltraCalcFunctionImSum());
			f._add(new $.ig.UltraCalcFunctionImSub());
			f._add(new $.ig.UltraCalcFunctionImExp());
			f._add(new $.ig.UltraCalcFunctionImLn());
			f._add(new $.ig.UltraCalcFunctionImLog10());
			f._add(new $.ig.UltraCalcFunctionImLog2());
			f._add(new $.ig.UltraCalcFunctionImSin());
			f._add(new $.ig.UltraCalcFunctionImSqrt());
			f._add(new $.ig.UltraCalcFunctionImPower());
			f._add(new $.ig.UltraCalcFunctionDollarFr());
			f._add(new $.ig.UltraCalcFunctionDollarDe());
			f._add(new $.ig.UltraCalcFunctionInfo());
			f._add(new $.ig.UltraCalcFunctionN());
			f._add(new $.ig.UltraCalcFunctionFact());
			f._add(new $.ig.UltraCalcFunctionFactDouble());
			f._add(new $.ig.UltraCalcFunctionCombin());
			f._add(new $.ig.UltraCalcFunctionDegrees());
			f._add(new $.ig.UltraCalcFunctionRadians());
			f._add(new $.ig.UltraCalcFunctionGcd());
			f._add(new $.ig.UltraCalcFunctionLcm());
			f._add(new $.ig.UltraCalcFunctionMultinomial());
			f._add(new $.ig.UltraCalcFunctionMRound());
			f._add(new $.ig.UltraCalcFunctionRandBetween());
			f._add(new $.ig.UltraCalcFunctionRoman());
			f._add(new $.ig.UltraCalcFunctionRoundDown());
			f._add(new $.ig.UltraCalcFunctionRoundUp());
			f._add(new $.ig.UltraCalcFunctionSeriesSum());
			f._add(new $.ig.UltraCalcFunctionSign());
			f._add(new $.ig.UltraCalcFunctionSqrtPi());
			f._add(new $.ig.UltraCalcFunctionChoose());
			f._add(new $.ig.UltraCalcFunctionRept());
			f._add(new $.ig.UltraCalcFunctionSubtotal());
			f._add(new $.ig.UltraCalcFunctionText());
			f._add(new $.ig.UltraCalcFunctionIfError());
			f._add(new $.ig.UltraCalcFunctionCountA());
			f._add(new $.ig.UltraCalcFunctionSearch());
			f._add(new $.ig.UltraCalcFunctionSearchB());
			f._add(new $.ig.UltraCalcFunctionAveDev());
			f._add(new $.ig.UltraCalcFunctionCombina());
			f._add(new $.ig.UltraCalcFunctionBinomDist());
			f._add(new $.ig.UltraCalcFunctionCritBinom());
			f._add(new $.ig.UltraCalcFunctionBinom_Dist());
			f._add(new $.ig.UltraCalcFunctionBinom_Dist_Range());
			f._add(new $.ig.UltraCalcFunctionBinom_Inv());
			f._add(new $.ig.UltraCalcFunctionAddress());
			f._add(new $.ig.UltraCalcFunctionAreas());
			f._add(new $.ig.UltraCalcFunctionAverageIf());
			f._add(new $.ig.UltraCalcFunctionColumn());
			f._add(new $.ig.UltraCalcFunctionColumns());
			f._add(new $.ig.UltraCalcFunctionCorrel());
			f._add(new $.ig.UltraCalcFunctionCountIf());
			f._add(new $.ig.UltraCalcFunctionCovar());
			f._add(new $.ig.UltraCalcFunctionForecast());
			f._add(new $.ig.UltraCalcFunctionHLookup());
			f._add(new $.ig.UltraCalcFunctionHyperlink());
			f._add(new $.ig.UltraCalcFunctionIndex());
			f._add(new $.ig.UltraCalcFunctionIndirect());
			f._add(new $.ig.UltraCalcFunctionIntercept());
			f._add(new $.ig.UltraCalcFunctionLookup());
			f._add(new $.ig.UltraCalcFunctionMatch());
			f._add(new $.ig.UltraCalcFunctionMdeterm());
			f._add(new $.ig.UltraCalcFunctionMinverse());
			f._add(new $.ig.UltraCalcFunctionMmult());
			f._add(new $.ig.UltraCalcFunctionOffset());
			f._add(new $.ig.UltraCalcFunctionPearson());
			f._add(new $.ig.UltraCalcFunctionRow());
			f._add(new $.ig.UltraCalcFunctionRows());
			f._add(new $.ig.UltraCalcFunctionRsq());
			f._add(new $.ig.UltraCalcFunctionSlope());
			f._add(new $.ig.UltraCalcFunctionSteyx());
			f._add(new $.ig.UltraCalcFunctionSumIf());
			f._add(new $.ig.UltraCalcFunctionSumproduct());
			f._add(new $.ig.UltraCalcFunctionSumx2my2());
			f._add(new $.ig.UltraCalcFunctionSumx2py2());
			f._add(new $.ig.UltraCalcFunctionSumxmy2());
			f._add(new $.ig.UltraCalcFunctionTranspose());
			f._add(new $.ig.UltraCalcFunctionVLookup());
		});
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLoader::RegisterLoader()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionLoader', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLoader" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConcatenate" />*/

$.ig.util.defType('UltraCalcFunctionConcatenate', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConcatenate::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var sb = new $.ig.StringBuilder(0);
		var args = new $.ig.List$1($.ig.excel.ExcelCalcValue.prototype.$type, 0);
		for (var arg_count = 0; arg_count < argumentCount; arg_count++) {
			args.add(numberStack.pop());
		}
		for (var arg_count1 = args.count(); arg_count1 > 0; arg_count1--) {
			var valueArg = args.__inner[arg_count1 - 1];
			if ($.ig.excel.ExcelCalcValue.prototype._useExcelFunctionCompatibility == false && valueArg.isReference() && valueArg.toReference().isEnumerable()) {
				var ReferenceCollection = valueArg.toReference().references();
				var en = ReferenceCollection.getEnumerator();
				while (en.moveNext()) {
					var cellReference = en.current();
					if (cellReference.value().isError()) {
						return new $.ig.excel.ExcelCalcValue(cellReference.value().toErrorValue());
					}
					sb.append5(cellReference.value().toString());
				}
			} else {
				if (valueArg.isError()) {
					return new $.ig.excel.ExcelCalcValue(valueArg.toErrorValue());
				}
				sb.append5(valueArg.toString());
			}
		}
		return new $.ig.excel.ExcelCalcValue(sb.toString());
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConcatenate::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConcatenate::CanParameterBeEnumerable(System.Int32)" />*/
	canParameterBeEnumerable: function (parameterIndex) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConcatenate::CanParameterBeEnumerable(System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConcatenate::Name()" />*/
	name: function () {
		return "concatenate";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConcatenate::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConcatenate::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConcatenate::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConcatenate::MaxArgs()" />*/
	maxArgs: function () {
		return 0x7FFFFFFF;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConcatenate::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConcatenate::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConcatenate::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionConcatenate', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConcatenate" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAverage" />*/

$.ig.util.defType('UltraCalcFunctionAverage', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAverage::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var args = this._getArguments(numberStack, argumentCount, true);
		return $.ig.UltraCalcFunctionAverage.prototype._evaluateHelper(args);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAverage::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAverage::CanParameterBeEnumerable(System.Int32)" />*/
	canParameterBeEnumerable: function (parameterIndex) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAverage::CanParameterBeEnumerable(System.Int32)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAverage::EvaluateHelper(System.Collections.Generic.IList)" />*/
	_evaluateHelper: function (args) {
		var valueCount = 0;
		var totalValue = 0;
		var en = args.getEnumerator();
		while (en.moveNext()) {
			var arg = en.current();
			if (null != arg) {
				if (arg.isError()) {
					return new $.ig.excel.ExcelCalcValue(arg.toErrorValue());
				}
				if ($.ig.excel.ExcelCalcValue.prototype._useExcelFunctionCompatibility && arg.isString()) {
					continue;
				}
				if (!arg.isBoolean()) {
					var value;
					if ((function () { var $ret = arg._toDouble1(value); value = $ret.p0; return $ret.ret; }())) {
						totalValue += value;
						valueCount++;
					}
				}
			}
		}
		totalValue /= valueCount;
		return new $.ig.excel.ExcelCalcValue(totalValue);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAverage::EvaluateHelper(System.Collections.Generic.IList)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAverage::Name()" />*/
	name: function () {
		return "average";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAverage::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAverage::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAverage::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAverage::MaxArgs()" />*/
	maxArgs: function () {
		return 0x7FFFFFFF;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAverage::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAverage::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return (isCreatedFromRegionReference == false);
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAverage::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionAverage', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAverage" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSum" />*/

$.ig.util.defType('UltraCalcFunctionSum', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSum::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var args = this._getArguments(numberStack, argumentCount, true);
		return $.ig.UltraCalcFunctionSum.prototype._evaluateHelper(args);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSum::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSum::CanParameterBeEnumerable(System.Int32)" />*/
	canParameterBeEnumerable: function (parameterIndex) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSum::CanParameterBeEnumerable(System.Int32)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSum::EvaluateHelper(System.Collections.Generic.IList)" />*/
	_evaluateHelper: function (args) {
		var totalValue = 0;
		var en = args.getEnumerator();
		while (en.moveNext()) {
			var arg = en.current();
			if (null != arg) {
				if (arg.isError()) {
					return new $.ig.excel.ExcelCalcValue(arg.toErrorValue());
				}
				if ($.ig.excel.ExcelCalcValue.prototype._useExcelFunctionCompatibility && arg.isString()) {
					continue;
				}
				var value;
				if ((function () { var $ret = arg._toDouble1(value); value = $ret.p0; return $ret.ret; }())) {
					totalValue += value;
				}
			}
		}
		return new $.ig.excel.ExcelCalcValue(totalValue);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSum::EvaluateHelper(System.Collections.Generic.IList)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSum::Name()" />*/
	name: function () {
		return "sum";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSum::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSum::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSum::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSum::MaxArgs()" />*/
	maxArgs: function () {
		return 0x7FFFFFFF;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSum::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSum::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return (isCreatedFromRegionReference == false);
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSum::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionSum', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSum" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIf" />*/

$.ig.util.defType('UltraCalcFunctionIf', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIf::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var ifFalse = null;
		if (argumentCount == 3) {
			ifFalse = numberStack.pop();
		}
		var ifTrue = numberStack.pop();
		var comparison = numberStack.pop();
		if (comparison.isError()) {
			return new $.ig.excel.ExcelCalcValue(comparison.toErrorValue());
		}
		if (comparison._toBoolean1() == true) {
			return ifTrue;
		} else {
			if (ifFalse == null) {
				return new $.ig.excel.ExcelCalcValue(false);
			}
			return ifFalse;
		}
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIf::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIf::Name()" />*/
	name: function () {
		return "if";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIf::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIf::MinArgs()" />*/
	minArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIf::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIf::MaxArgs()" />*/
	maxArgs: function () {
		return 3;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIf::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIf::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return (isCreatedFromRegionReference == false);
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIf::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIf::IsSelectorFunction()" />*/
	_isSelectorFunction: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIf::IsSelectorFunction()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIf::WillParameterBeDereferenced(System.Int32)" />*/
	_willParameterBeDereferenced: function (parameterIndex) {
		if (parameterIndex == 1 || parameterIndex == 2) {
			return false;
		}
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIf::WillParameterBeDereferenced(System.Int32)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionIf', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIf" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAbs" />*/

$.ig.util.defType('UltraCalcFunctionAbs', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAbs::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var value = numberStack.pop();
		if (value.isError()) {
			return new $.ig.excel.ExcelCalcValue(value.toErrorValue());
		}
		var result;
		if (!(function () { var $ret = value._toDouble1(result); result = $ret.p0; return $ret.ret; }())) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
		}
		return new $.ig.excel.ExcelCalcValue(Math.abs(result));
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAbs::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAbs::Name()" />*/
	name: function () {
		return "abs";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAbs::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAbs::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAbs::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAbs::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAbs::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAbs::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAbs::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionAbs', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAbs" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMod" />*/

$.ig.util.defType('UltraCalcFunctionMod', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMod::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var right = numberStack.pop();
		var left = numberStack.pop();
		if (left.isError()) {
			return new $.ig.excel.ExcelCalcValue(left.toErrorValue());
		}
		if (right.isError()) {
			return new $.ig.excel.ExcelCalcValue(right.toErrorValue());
		}
		var divisor, number;
		if (!(function () { var $ret = right._toDouble1(divisor); divisor = $ret.p0; return $ret.ret; }()) || !(function () { var $ret = left._toDouble1(number); number = $ret.p0; return $ret.ret; }())) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		if (divisor == 0) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.div));
		} else {
			var d = number % divisor;
			var sign = Math.sign(d);
			if (sign != 0 && sign != Math.sign(divisor)) {
				d *= -1;
			}
			return new $.ig.excel.ExcelCalcValue(d);
		}
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMod::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMod::Name()" />*/
	name: function () {
		return "mod";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMod::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMod::MinArgs()" />*/
	minArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMod::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMod::MaxArgs()" />*/
	maxArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMod::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMod::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMod::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionMod', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMod" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionQuotient" />*/

$.ig.util.defType('UltraCalcFunctionQuotient', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionQuotient::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var right = numberStack.pop();
		var left = numberStack.pop();
		if (left.isError()) {
			return new $.ig.excel.ExcelCalcValue(left.toErrorValue());
		}
		if (right.isError()) {
			return new $.ig.excel.ExcelCalcValue(right.toErrorValue());
		}
		var denominator, numerator;
		if (!(function () { var $ret = right._toDouble1(denominator); denominator = $ret.p0; return $ret.ret; }()) || !(function () { var $ret = left._toDouble1(numerator); numerator = $ret.p0; return $ret.ret; }())) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		if (denominator == 0) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.div));
		} else {
			return new $.ig.excel.ExcelCalcValue((numerator - (numerator % denominator)) / denominator);
		}
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionQuotient::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionQuotient::Name()" />*/
	name: function () {
		return "quotient";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionQuotient::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionQuotient::MinArgs()" />*/
	minArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionQuotient::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionQuotient::MaxArgs()" />*/
	maxArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionQuotient::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionQuotient', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionQuotient" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionProduct" />*/

$.ig.util.defType('UltraCalcFunctionProduct', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionProduct::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var args = this._getArguments(numberStack, argumentCount, true);
		return $.ig.UltraCalcFunctionProduct.prototype._evaluateHelper(args);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionProduct::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionProduct::CanParameterBeEnumerable(System.Int32)" />*/
	canParameterBeEnumerable: function (parameterIndex) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionProduct::CanParameterBeEnumerable(System.Int32)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionProduct::EvaluateHelper(System.Collections.Generic.IList)" />*/
	_evaluateHelper: function (args) {
		var prodValue = 1;
		var en = args.getEnumerator();
		while (en.moveNext()) {
			var arg = en.current();
			if (null != arg) {
				if (arg.isError()) {
					return new $.ig.excel.ExcelCalcValue(arg.toErrorValue());
				}
				if ($.ig.excel.ExcelCalcValue.prototype._useExcelFunctionCompatibility && arg.isString()) {
					continue;
				}
				var value;
				if ((function () { var $ret = arg._toDouble1(value); value = $ret.p0; return $ret.ret; }())) {
					prodValue *= value;
				}
			}
		}
		return new $.ig.excel.ExcelCalcValue(prodValue);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionProduct::EvaluateHelper(System.Collections.Generic.IList)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionProduct::Name()" />*/
	name: function () {
		return "product";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionProduct::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionProduct::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionProduct::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionProduct::MaxArgs()" />*/
	maxArgs: function () {
		return 0x7FFFFFFF;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionProduct::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionProduct::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return (isCreatedFromRegionReference == false);
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionProduct::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionProduct', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionProduct" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionPower" />*/

$.ig.util.defType('UltraCalcFunctionPower', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionPower::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var right = numberStack.pop();
		var left = numberStack.pop();
		if (left.isError()) {
			return new $.ig.excel.ExcelCalcValue(left.toErrorValue());
		}
		if (right.isError()) {
			return new $.ig.excel.ExcelCalcValue(right.toErrorValue());
		}
		var leftDbl, rightDbl;
		if (!(function () { var $ret = right._toDouble1(rightDbl); rightDbl = $ret.p0; return $ret.ret; }()) || !(function () { var $ret = left._toDouble1(leftDbl); leftDbl = $ret.p0; return $ret.ret; }())) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
		}
		if ($.ig.excel.ExcelCalcValue.prototype._useExcelFunctionCompatibility && leftDbl == 0) {
			if (rightDbl == 0) {
				return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
			} else if (rightDbl < 0) {
				return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.div));
			}
		}
		return new $.ig.excel.ExcelCalcValue(Math.pow(leftDbl, rightDbl));
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionPower::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionPower::Name()" />*/
	name: function () {
		return "power";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionPower::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionPower::MinArgs()" />*/
	minArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionPower::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionPower::MaxArgs()" />*/
	maxArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionPower::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionPower', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionPower" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionInt" />*/

$.ig.util.defType('UltraCalcFunctionInt', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionInt::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var d = numberStack.pop()._toDecimal2();
		return new $.ig.excel.ExcelCalcValue($.ig.truncate(Math.floor(d)));
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionInt::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionInt::Name()" />*/
	name: function () {
		return "int";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionInt::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionInt::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionInt::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionInt::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionInt::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionInt::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionInt::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionInt', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionInt" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTrunc" />*/

$.ig.util.defType('UltraCalcFunctionTrunc', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTrunc::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var num_digits = 0;
		if (argumentCount == 2) {
			var numDigits = numberStack.pop();
			if (numDigits.isError()) {
				return new $.ig.excel.ExcelCalcValue(numDigits.toErrorValue());
			}
			num_digits = numDigits._toInt321();
		}
		var number;
		var numberVal = numberStack.pop();
		if (numberVal.isError()) {
			return new $.ig.excel.ExcelCalcValue(numberVal.toErrorValue());
		}
		if (!(function () { var $ret = numberVal._toDouble1(number); number = $ret.p0; return $ret.ret; }())) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		var factor = Math.pow(10, num_digits);
		var result = number * factor;
		result = result >= 0 ? Math.floor(result) : Math.ceil(result);
		result /= factor;
		return new $.ig.excel.ExcelCalcValue(result);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTrunc::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTrunc::Name()" />*/
	name: function () {
		return "trunc";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTrunc::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTrunc::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTrunc::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTrunc::MaxArgs()" />*/
	maxArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTrunc::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTrunc::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTrunc::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionTrunc', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTrunc" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCount" />*/

$.ig.util.defType('UltraCalcFunctionCount', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCount::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var args = this._getArguments(numberStack, argumentCount, true);
		return $.ig.UltraCalcFunctionCount.prototype._evaluateHelper(args);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCount::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCount::CanParameterBeEnumerable(System.Int32)" />*/
	canParameterBeEnumerable: function (parameterIndex) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCount::CanParameterBeEnumerable(System.Int32)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCount::EvaluateHelper(System.Collections.Generic.IList)" />*/
	_evaluateHelper: function (args) {
		var count = 0;
		var en = args.getEnumerator();
		while (en.moveNext()) {
			var arg = en.current();
			if (arg.isBoolean() || arg.isError()) {
				continue;
			}
			if ($.ig.excel.ExcelCalcValue.prototype._useExcelFunctionCompatibility && arg.isString()) {
				continue;
			}
			var temp;
			if ((function () { var $ret = arg._toDouble1(temp); temp = $ret.p0; return $ret.ret; }())) {
				count++;
			} else {
				try {
					arg._toDateTime1();
					count++;
				}
				catch (e) {
				}
			}
		}
		return new $.ig.excel.ExcelCalcValue(count);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCount::EvaluateHelper(System.Collections.Generic.IList)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCount::Name()" />*/
	name: function () {
		return "count";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCount::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCount::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCount::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCount::MaxArgs()" />*/
	maxArgs: function () {
		return 0x7FFFFFFF;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCount::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionCount', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCount" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTrue" />*/

$.ig.util.defType('UltraCalcFunctionTrue', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTrue::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		return new $.ig.excel.ExcelCalcValue(true);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTrue::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTrue::Name()" />*/
	name: function () {
		return "true";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTrue::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTrue::MinArgs()" />*/
	minArgs: function () {
		return 0;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTrue::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTrue::MaxArgs()" />*/
	maxArgs: function () {
		return 0;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTrue::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionTrue', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTrue" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFalse" />*/

$.ig.util.defType('UltraCalcFunctionFalse', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFalse::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		return new $.ig.excel.ExcelCalcValue(false);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFalse::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFalse::Name()" />*/
	name: function () {
		return "false";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFalse::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFalse::MinArgs()" />*/
	minArgs: function () {
		return 0;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFalse::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFalse::MaxArgs()" />*/
	maxArgs: function () {
		return 0;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFalse::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionFalse', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFalse" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNot" />*/

$.ig.util.defType('UltraCalcFunctionNot', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNot::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var value = numberStack.pop();
		if (value.isError()) {
			return new $.ig.excel.ExcelCalcValue(value.toErrorValue());
		}
		return new $.ig.excel.ExcelCalcValue(!value._toBoolean1());
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNot::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNot::Name()" />*/
	name: function () {
		return "not";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNot::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNot::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNot::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNot::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNot::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNot::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return (isCreatedFromRegionReference == false);
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNot::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionNot', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNot" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAnd" />*/

$.ig.util.defType('UltraCalcFunctionAnd', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAnd::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var condition = true;
		var foundLogicalValue = false;
		var args = this._getArguments(numberStack, argumentCount, true);
		for (var i = 0; i < args.length; i++) {
			var arg = args[i];
			if (arg.isError()) {
				return new $.ig.excel.ExcelCalcValue(arg.toErrorValue());
			}
			try {
				if (!arg._toBoolean1()) {
					condition = false;
				}
				foundLogicalValue = true;
			}
			catch (e) {
			}
		}
		if (foundLogicalValue) {
			return new $.ig.excel.ExcelCalcValue(condition);
		}
		return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAnd::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAnd::CanParameterBeEnumerable(System.Int32)" />*/
	canParameterBeEnumerable: function (parameterIndex) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAnd::CanParameterBeEnumerable(System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAnd::Name()" />*/
	name: function () {
		return "and";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAnd::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAnd::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAnd::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAnd::MaxArgs()" />*/
	maxArgs: function () {
		return 0x7FFFFFFF;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAnd::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAnd::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return (isCreatedFromRegionReference == false);
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAnd::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionAnd', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAnd" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOr" />*/

$.ig.util.defType('UltraCalcFunctionOr', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOr::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var condition = false;
		var foundLogicalValue = false;
		var args = this._getArguments(numberStack, argumentCount, true);
		for (var i = 0; i < args.length; i++) {
			var arg = args[i];
			if (arg.isError()) {
				return new $.ig.excel.ExcelCalcValue(arg.toErrorValue());
			}
			try {
				if (arg._toBoolean1()) {
					condition = true;
				}
				foundLogicalValue = true;
			}
			catch (e) {
			}
		}
		if (foundLogicalValue) {
			return new $.ig.excel.ExcelCalcValue(condition);
		}
		return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOr::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOr::CanParameterBeEnumerable(System.Int32)" />*/
	canParameterBeEnumerable: function (parameterIndex) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOr::CanParameterBeEnumerable(System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOr::Name()" />*/
	name: function () {
		return "or";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOr::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOr::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOr::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOr::MaxArgs()" />*/
	maxArgs: function () {
		return 0x7FFFFFFF;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOr::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOr::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return (isCreatedFromRegionReference == false);
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOr::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionOr', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOr" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMin" />*/

$.ig.util.defType('UltraCalcFunctionMin', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMin::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var args = this._getArguments(numberStack, argumentCount, true);
		return $.ig.UltraCalcFunctionMin.prototype._evaluateHelper(args);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMin::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMin::CanParameterBeEnumerable(System.Int32)" />*/
	canParameterBeEnumerable: function (parameterIndex) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMin::CanParameterBeEnumerable(System.Int32)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMin::EvaluateHelper(System.Collections.Generic.IList)" />*/
	_evaluateHelper: function (args) {
		var foundValue = false;
		var minimum = 0;
		var temp;
		var en = args.getEnumerator();
		while (en.moveNext()) {
			var calcValue = en.current();
			if (null != calcValue) {
				if (calcValue.isError()) {
					return new $.ig.excel.ExcelCalcValue(calcValue.toErrorValue());
				}
				if ($.ig.excel.ExcelCalcValue.prototype._useExcelFunctionCompatibility && calcValue.isString()) {
					continue;
				}
				if ((function () { var $ret = calcValue._toDouble1(temp); temp = $ret.p0; return $ret.ret; }())) {
					if (!foundValue || temp < minimum) {
						minimum = temp;
					}
					foundValue = true;
				}
			}
		}
		return new $.ig.excel.ExcelCalcValue(minimum);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMin::EvaluateHelper(System.Collections.Generic.IList)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMin::Name()" />*/
	name: function () {
		return "min";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMin::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMin::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMin::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMin::MaxArgs()" />*/
	maxArgs: function () {
		return 0x7FFFFFFF;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMin::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMin::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return (isCreatedFromRegionReference == false);
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMin::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionMin', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMin" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMax" />*/

$.ig.util.defType('UltraCalcFunctionMax', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMax::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var args = this._getArguments(numberStack, argumentCount, true);
		return $.ig.UltraCalcFunctionMax.prototype._evaluateHelper(args);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMax::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMax::CanParameterBeEnumerable(System.Int32)" />*/
	canParameterBeEnumerable: function (parameterIndex) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMax::CanParameterBeEnumerable(System.Int32)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMax::EvaluateHelper(System.Collections.Generic.IList)" />*/
	_evaluateHelper: function (args) {
		var foundValue = false;
		var maximum = 0;
		var temp;
		var en = args.getEnumerator();
		while (en.moveNext()) {
			var calcValue = en.current();
			if (null != calcValue) {
				if (calcValue.isError()) {
					return new $.ig.excel.ExcelCalcValue(calcValue.toErrorValue());
				}
				if ($.ig.excel.ExcelCalcValue.prototype._useExcelFunctionCompatibility && calcValue.isString()) {
					continue;
				}
				if ((function () { var $ret = calcValue._toDouble1(temp); temp = $ret.p0; return $ret.ret; }())) {
					if (!foundValue || temp > maximum) {
						maximum = temp;
					}
					foundValue = true;
				}
			}
		}
		return new $.ig.excel.ExcelCalcValue(maximum);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMax::EvaluateHelper(System.Collections.Generic.IList)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMax::Name()" />*/
	name: function () {
		return "max";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMax::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMax::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMax::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMax::MaxArgs()" />*/
	maxArgs: function () {
		return 0x7FFFFFFF;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMax::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMax::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return (isCreatedFromRegionReference == false);
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMax::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionMax', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMax" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionExp" />*/

$.ig.util.defType('UltraCalcFunctionExp', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionExp::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var value = numberStack.pop();
		if (value.isError()) {
			return new $.ig.excel.ExcelCalcValue(value.toErrorValue());
		}
		var temp;
		if (!(function () { var $ret = value._toDouble1(temp); temp = $ret.p0; return $ret.ret; }())) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
		}
		var result = Math.exp(temp);
		if ($.ig.excel.ExcelCalcValue.prototype._useExcelFunctionCompatibility && Number.isInfinity(result)) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
		}
		return new $.ig.excel.ExcelCalcValue(result);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionExp::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionExp::Name()" />*/
	name: function () {
		return "exp";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionExp::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionExp::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionExp::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionExp::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionExp::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionExp::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionExp::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionExp', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionExp" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRound" />*/

$.ig.util.defType('UltraCalcFunctionRound', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRound::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var roundStyle = null;
		if (argumentCount == 3) {
			roundStyle = numberStack.pop();
		}
		var num_digits = numberStack.pop();
		var number = numberStack.pop();
		if (num_digits.isError()) {
			return new $.ig.excel.ExcelCalcValue(num_digits.toErrorValue());
		}
		if (number.isError()) {
			return new $.ig.excel.ExcelCalcValue(number.toErrorValue());
		}
		if (roundStyle != null && roundStyle.isError()) {
			return new $.ig.excel.ExcelCalcValue(roundStyle.toErrorValue());
		}
		var power;
		if (!(function () { var $ret = num_digits._toDouble1(power); power = $ret.p0; return $ret.ret; }())) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		var d;
		if (!(function () { var $ret = number._toDouble1(d); d = $ret.p0; return $ret.ret; }())) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		if ($.ig.excel.ExcelCalcValue.prototype._useExcelFunctionCompatibility) {
			d = $.ig.MathUtilities.prototype.roundToExcelDisplayValue(d);
		}
		var rs = 0;
		if (roundStyle != null) {
			if (!(function () { var $ret = roundStyle._toDouble1(rs); rs = $ret.p0; return $ret.ret; }())) {
				return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
			}
			if ($.ig.truncate(rs) < 0 || $.ig.truncate(rs) > 1) {
				return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
			}
		}
		return new $.ig.excel.ExcelCalcValue($.ig.UltraCalcFunctionRound.prototype._round1(d, $.ig.truncate(power), $.ig.truncate(rs)));
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRound::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRound::Name()" />*/
	name: function () {
		return "round";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRound::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRound::MinArgs()" />*/
	minArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRound::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRound::MaxArgs()" />*/
	maxArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRound::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRound::Round(System.Double, System.Int32)" />*/
	_round: function (number, power) {
		return $.ig.UltraCalcFunctionRound.prototype._round1(number, power, 0);
	}
	/*<EndMethod Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRound::Round(System.Double, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRound::Round(System.Double, System.Int32, System.Int32)" />*/
	_round1: function (number, power, roundStyle) {
		if (roundStyle == 0) {
			return $.ig.MathUtilities.prototype.midpointRoundingAwayFromZero1(number, power);
		}
		if (power <= 15) {
			return Math.round10N(number, power);
		}
		var factor = Math.pow(10, power);
		var shiftedValue = $.ig.MathUtilities.prototype.roundToExcelDisplayValue(number * factor);
		return Math.round(shiftedValue) / factor;
	}
	/*<EndMethod Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRound::Round(System.Double, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRound::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRound::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionRound', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRound" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionPi" />*/

$.ig.util.defType('UltraCalcFunctionPi', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionPi::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		return new $.ig.excel.ExcelCalcValue(3.14159265358979);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionPi::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionPi::Name()" />*/
	name: function () {
		return "pi";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionPi::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionPi::MinArgs()" />*/
	minArgs: function () {
		return 0;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionPi::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionPi::MaxArgs()" />*/
	maxArgs: function () {
		return 0;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionPi::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionPi', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionPi" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSqrt" />*/

$.ig.util.defType('UltraCalcFunctionSqrt', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSqrt::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var value = numberStack.pop();
		if (value.isError()) {
			return new $.ig.excel.ExcelCalcValue(value.toErrorValue());
		}
		var d;
		if (!(function () { var $ret = value._toDouble1(d); d = $ret.p0; return $ret.ret; }()) || d < 0) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		return new $.ig.excel.ExcelCalcValue(Math.sqrt(d));
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSqrt::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSqrt::Name()" />*/
	name: function () {
		return "sqrt";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSqrt::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSqrt::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSqrt::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSqrt::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSqrt::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSqrt::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSqrt::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionSqrt', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSqrt" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCos" />*/

$.ig.util.defType('UltraCalcFunctionCos', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCos::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var value = numberStack.pop();
		if (value.isError()) {
			return new $.ig.excel.ExcelCalcValue(value.toErrorValue());
		}
		var temp;
		if (!(function () { var $ret = value._toDouble1(temp); temp = $ret.p0; return $ret.ret; }())) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		return new $.ig.excel.ExcelCalcValue(Math.cos(temp));
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCos::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCos::Name()" />*/
	name: function () {
		return "cos";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCos::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCos::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCos::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCos::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCos::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCos::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCos::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionCos', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCos" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionACos" />*/

$.ig.util.defType('UltraCalcFunctionACos', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionACos::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var value = numberStack.pop();
		if (value.isError()) {
			return new $.ig.excel.ExcelCalcValue(value.toErrorValue());
		}
		var temp;
		if (!(function () { var $ret = value._toDouble1(temp); temp = $ret.p0; return $ret.ret; }())) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		return new $.ig.excel.ExcelCalcValue(Math.acos(temp));
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionACos::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionACos::Name()" />*/
	name: function () {
		return "acos";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionACos::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionACos::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionACos::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionACos::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionACos::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionACos::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionACos::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionACos', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionACos" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCosh" />*/

$.ig.util.defType('UltraCalcFunctionCosh', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCosh::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var value = numberStack.pop();
		if (value.isError()) {
			return new $.ig.excel.ExcelCalcValue(value.toErrorValue());
		}
		var temp;
		if (!(function () { var $ret = value._toDouble1(temp); temp = $ret.p0; return $ret.ret; }())) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		return new $.ig.excel.ExcelCalcValue(Math.cosh(temp));
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCosh::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCosh::Name()" />*/
	name: function () {
		return "cosh";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCosh::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCosh::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCosh::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCosh::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCosh::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCosh::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCosh::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionCosh', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCosh" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSin" />*/

$.ig.util.defType('UltraCalcFunctionSin', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSin::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var value = numberStack.pop();
		if (value.isError()) {
			return new $.ig.excel.ExcelCalcValue(value.toErrorValue());
		}
		var temp;
		if (!(function () { var $ret = value._toDouble1(temp); temp = $ret.p0; return $ret.ret; }())) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		return new $.ig.excel.ExcelCalcValue(Math.sin(temp));
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSin::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSin::Name()" />*/
	name: function () {
		return "sin";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSin::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSin::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSin::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSin::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSin::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSin::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSin::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionSin', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSin" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSinh" />*/

$.ig.util.defType('UltraCalcFunctionSinh', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSinh::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var value = numberStack.pop();
		if (value.isError()) {
			return new $.ig.excel.ExcelCalcValue(value.toErrorValue());
		}
		var temp;
		if (!(function () { var $ret = value._toDouble1(temp); temp = $ret.p0; return $ret.ret; }())) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		return new $.ig.excel.ExcelCalcValue(Math.sinh(temp));
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSinh::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSinh::Name()" />*/
	name: function () {
		return "sinh";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSinh::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSinh::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSinh::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSinh::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSinh::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSinh::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSinh::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionSinh', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSinh" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionASin" />*/

$.ig.util.defType('UltraCalcFunctionASin', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionASin::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var value = numberStack.pop();
		if (value.isError()) {
			return new $.ig.excel.ExcelCalcValue(value.toErrorValue());
		}
		var temp;
		if (!(function () { var $ret = value._toDouble1(temp); temp = $ret.p0; return $ret.ret; }())) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		return new $.ig.excel.ExcelCalcValue(Math.asin(temp));
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionASin::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionASin::Name()" />*/
	name: function () {
		return "asin";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionASin::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionASin::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionASin::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionASin::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionASin::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionASin::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionASin::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionASin', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionASin" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTan" />*/

$.ig.util.defType('UltraCalcFunctionTan', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTan::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var value = numberStack.pop();
		if (value.isError()) {
			return new $.ig.excel.ExcelCalcValue(value.toErrorValue());
		}
		var temp;
		if (!(function () { var $ret = value._toDouble1(temp); temp = $ret.p0; return $ret.ret; }())) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		return new $.ig.excel.ExcelCalcValue(Math.tan(temp));
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTan::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTan::Name()" />*/
	name: function () {
		return "tan";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTan::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTan::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTan::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTan::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTan::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTan::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTan::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionTan', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTan" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTanh" />*/

$.ig.util.defType('UltraCalcFunctionTanh', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTanh::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var value = numberStack.pop();
		if (value.isError()) {
			return new $.ig.excel.ExcelCalcValue(value.toErrorValue());
		}
		var temp;
		if (!(function () { var $ret = value._toDouble1(temp); temp = $ret.p0; return $ret.ret; }())) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		return new $.ig.excel.ExcelCalcValue(Math.tanh(temp));
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTanh::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTanh::Name()" />*/
	name: function () {
		return "tanh";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTanh::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTanh::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTanh::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTanh::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTanh::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTanh::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTanh::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionTanh', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTanh" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionATan" />*/

$.ig.util.defType('UltraCalcFunctionATan', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionATan::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var value = numberStack.pop();
		if (value.isError()) {
			return new $.ig.excel.ExcelCalcValue(value.toErrorValue());
		}
		var temp;
		if (!(function () { var $ret = value._toDouble1(temp); temp = $ret.p0; return $ret.ret; }())) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		return new $.ig.excel.ExcelCalcValue(Math.atan(temp));
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionATan::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionATan::Name()" />*/
	name: function () {
		return "atan";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionATan::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionATan::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionATan::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionATan::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionATan::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionATan::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionATan::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionATan', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionATan" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionATan2" />*/

$.ig.util.defType('UltraCalcFunctionATan2', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionATan2::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var yValue = numberStack.pop();
		var xValue = numberStack.pop();
		if (xValue.isError()) {
			return new $.ig.excel.ExcelCalcValue(xValue.toErrorValue());
		}
		if (yValue.isError()) {
			return new $.ig.excel.ExcelCalcValue(yValue.toErrorValue());
		}
		var x, y;
		if (!(function () { var $ret = yValue._toDouble1(y); y = $ret.p0; return $ret.ret; }()) || !(function () { var $ret = xValue._toDouble1(x); x = $ret.p0; return $ret.ret; }())) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		if (x == 0 && y == 0) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.div));
		}
		return new $.ig.excel.ExcelCalcValue(Math.atan2(y, x));
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionATan2::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionATan2::Name()" />*/
	name: function () {
		return "atan2";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionATan2::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionATan2::MinArgs()" />*/
	minArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionATan2::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionATan2::MaxArgs()" />*/
	maxArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionATan2::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionATan2::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionATan2::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionATan2', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionATan2" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFloor" />*/

$.ig.util.defType('UltraCalcFunctionFloor', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFloor::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var significance = 1;
		if (argumentCount > 1) {
			var significanceValue = numberStack.pop();
			if (significanceValue.isError()) {
				return new $.ig.excel.ExcelCalcValue(significanceValue.toErrorValue());
			}
			if (!(function () { var $ret = significanceValue._toDouble1(significance); significance = $ret.p0; return $ret.ret; }())) {
				return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
			}
		}
		var value = numberStack.pop();
		if (value.isError()) {
			return new $.ig.excel.ExcelCalcValue(value.toErrorValue());
		}
		var temp;
		if (!(function () { var $ret = value._toDouble1(temp); temp = $ret.p0; return $ret.ret; }())) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		if (temp == 0 && significance == 0) {
			return new $.ig.excel.ExcelCalcValue(0);
		}
		if (significance == 0) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.div));
		}
		var valueSign = temp < 0 ? -1 : 1;
		var significanceSign = significance < 0 ? -1 : 1;
		if ($.ig.excel.ExcelCalcValue.prototype._useExcelFunctionCompatibility) {
			if (temp != 0 && significance != 0 && 0 < valueSign && significanceSign < 0) {
				return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
			}
		}
		var floor = Math.floor($.ig.MathUtilities.prototype.roundToExcelDisplayValue(temp / significance)) * significance;
		return new $.ig.excel.ExcelCalcValue(floor);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFloor::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFloor::Name()" />*/
	name: function () {
		return "floor";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFloor::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFloor::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFloor::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFloor::MaxArgs()" />*/
	maxArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFloor::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFloor::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFloor::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionFloor', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFloor" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCeiling" />*/

$.ig.util.defType('UltraCalcFunctionCeiling', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCeiling::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var significance = 1;
		if (argumentCount > 1) {
			var significanceValue = numberStack.pop();
			if (significanceValue.isError()) {
				return new $.ig.excel.ExcelCalcValue(significanceValue.toErrorValue());
			}
			if (!(function () { var $ret = significanceValue._toDouble1(significance); significance = $ret.p0; return $ret.ret; }())) {
				return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
			}
		}
		var value = numberStack.pop();
		if (value.isError()) {
			return new $.ig.excel.ExcelCalcValue(value.toErrorValue());
		}
		var temp;
		if (!(function () { var $ret = value._toDouble1(temp); temp = $ret.p0; return $ret.ret; }())) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		if (significance == 0) {
			return new $.ig.excel.ExcelCalcValue(0);
		}
		var valueSign = temp < 0 ? -1 : 1;
		var significanceSign = significance < 0 ? -1 : 1;
		if ($.ig.excel.ExcelCalcValue.prototype._useExcelFunctionCompatibility) {
			if (temp != 0 && significance != 0 && 0 < valueSign && significanceSign < 0) {
				return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
			}
		}
		var ceiling = Math.ceil($.ig.MathUtilities.prototype.roundToExcelDisplayValue(temp / significance)) * significance;
		return new $.ig.excel.ExcelCalcValue(ceiling);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCeiling::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCeiling::Name()" />*/
	name: function () {
		return "ceiling";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCeiling::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCeiling::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCeiling::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCeiling::MaxArgs()" />*/
	maxArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCeiling::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCeiling::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCeiling::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionCeiling', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCeiling" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRand" />*/

$.ig.util.defType('UltraCalcFunctionRand', 'BuiltInFunctionBase', {
	init: function () {
		this.__random = new $.ig.Random(0);
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	__random: null,
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRand::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		return new $.ig.excel.ExcelCalcValue(this.__random.nextDouble());
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRand::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRand::Name()" />*/
	name: function () {
		return "rand";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRand::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRand::MinArgs()" />*/
	minArgs: function () {
		return 0;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRand::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRand::MaxArgs()" />*/
	maxArgs: function () {
		return 0;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRand::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionRand', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRand" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLn" />*/

$.ig.util.defType('UltraCalcFunctionLn', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLn::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var value = numberStack.pop();
		if (value.isError()) {
			return new $.ig.excel.ExcelCalcValue(value.toErrorValue());
		}
		var temp;
		if (!(function () { var $ret = value._toDouble1(temp); temp = $ret.p0; return $ret.ret; }())) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
		}
		var result = Math.log(temp);
		if ($.ig.excel.ExcelCalcValue.prototype._useExcelFunctionCompatibility && Number.isInfinity(result)) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		return new $.ig.excel.ExcelCalcValue(result);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLn::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLn::Name()" />*/
	name: function () {
		return "ln";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLn::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLn::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLn::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLn::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLn::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLn::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLn::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionLn', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLn" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLog10" />*/

$.ig.util.defType('UltraCalcFunctionLog10', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLog10::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var value = numberStack.pop();
		if (value.isError()) {
			return new $.ig.excel.ExcelCalcValue(value.toErrorValue());
		}
		var temp;
		if (!(function () { var $ret = value._toDouble1(temp); temp = $ret.p0; return $ret.ret; }())) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
		}
		if ($.ig.excel.ExcelCalcValue.prototype._useExcelFunctionCompatibility && temp == 0) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		return new $.ig.excel.ExcelCalcValue(Math.log10(temp));
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLog10::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLog10::Name()" />*/
	name: function () {
		return "log10";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLog10::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLog10::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLog10::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLog10::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLog10::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLog10::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLog10::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionLog10', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLog10" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLog" />*/

$.ig.util.defType('UltraCalcFunctionLog', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLog::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var logBaseValue = null;
		if (argumentCount == 2) {
			logBaseValue = numberStack.pop();
		}
		var numberValue = numberStack.pop();
		if (numberValue.isError()) {
			return new $.ig.excel.ExcelCalcValue(numberValue.toErrorValue());
		}
		if (logBaseValue != null && logBaseValue.isError()) {
			return new $.ig.excel.ExcelCalcValue(logBaseValue.toErrorValue());
		}
		var logBase, number;
		if (logBaseValue != null) {
			if ((function () { var $ret = logBaseValue._toDouble1(logBase); logBase = $ret.p0; return $ret.ret; }()) == false) {
				return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
			}
		} else {
			logBase = 10;
		}
		if ((function () { var $ret = numberValue._toDouble1(number); number = $ret.p0; return $ret.ret; }()) == false) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
		}
		if ($.ig.excel.ExcelCalcValue.prototype._useExcelFunctionCompatibility && number == 0) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		return new $.ig.excel.ExcelCalcValue(Math.logBase(number, logBase));
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLog::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLog::Name()" />*/
	name: function () {
		return "log";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLog::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLog::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLog::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLog::MaxArgs()" />*/
	maxArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLog::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLog::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLog::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionLog', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLog" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNPV" />*/

$.ig.util.defType('UltraCalcFunctionNPV', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNPV::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var temp;
		var fv = 0;
		var args = new Array(argumentCount - 1);
		for (var arg_count = 0; arg_count < argumentCount - 1; arg_count++) {
			args[arg_count] = numberStack.pop();
		}
		var rateFactor;
		if (!(function () { var $ret = numberStack.pop()._toDouble1(rateFactor); rateFactor = $ret.p0; return $ret.ret; }())) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		rateFactor += 1;
		var cashFlowCount = 1;
		for (var arg_count1 = args.length; arg_count1 > 0; arg_count1--) {
			var valueArg = args[arg_count1 - 1];
			if (valueArg.isReference() && valueArg.toReference().isEnumerable()) {
				var ReferenceCollection = valueArg.toReference().references();
				var en = ReferenceCollection.getEnumerator();
				while (en.moveNext()) {
					var cellReference = en.current();
					var val = cellReference.value();
					if (val.isError()) {
						return new $.ig.excel.ExcelCalcValue(val.toErrorValue());
					}
					if ((function () { var $ret = val._toDouble1(temp); temp = $ret.p0; return $ret.ret; }())) {
						fv += temp / Math.pow(rateFactor, cashFlowCount++);
					}
				}
			} else {
				if (valueArg.isError()) {
					return new $.ig.excel.ExcelCalcValue(valueArg.toErrorValue());
				}
				if ((function () { var $ret = valueArg._toDouble1(temp); temp = $ret.p0; return $ret.ret; }())) {
					fv += temp / Math.pow(rateFactor, cashFlowCount++);
				}
			}
		}
		return new $.ig.excel.ExcelCalcValue(fv);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNPV::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNPV::CanParameterBeEnumerable(System.Int32)" />*/
	canParameterBeEnumerable: function (parameterIndex) {
		return 1 <= parameterIndex;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNPV::CanParameterBeEnumerable(System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNPV::Name()" />*/
	name: function () {
		return "npv";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNPV::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNPV::MinArgs()" />*/
	minArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNPV::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNPV::MaxArgs()" />*/
	maxArgs: function () {
		return 0x7FFFFFFF;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNPV::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionNPV', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNPV" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFV" />*/

$.ig.util.defType('UltraCalcFunctionFV', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFV::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var option = 0;
		if (argumentCount == 5) {
			var optionArg = numberStack.pop();
			if (optionArg.isError()) {
				return optionArg;
			}
			option = optionArg._toInt321();
		}
		var startingValue = 0;
		if (argumentCount >= 4) {
			var value = numberStack.pop();
			if (value.isError()) {
				return new $.ig.excel.ExcelCalcValue(value.toErrorValue());
			}
			if (!(function () { var $ret = value._toDouble1(startingValue); startingValue = $ret.p0; return $ret.ret; }())) {
				return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
			}
		}
		var payment, period, rate;
		var paymentArg = numberStack.pop();
		var periodArg = numberStack.pop();
		var rateArg = numberStack.pop();
		if (rateArg.isError()) {
			return rateArg;
		}
		if (periodArg.isError()) {
			return periodArg;
		}
		if (paymentArg.isError()) {
			return paymentArg;
		}
		if (!(function () { var $ret = paymentArg._toDouble1(payment); payment = $ret.p0; return $ret.ret; }()) || !(function () { var $ret = periodArg._toDouble1(period); period = $ret.p0; return $ret.ret; }()) || !(function () { var $ret = rateArg._toDouble1(rate); rate = $ret.p0; return $ret.ret; }())) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		return new $.ig.excel.ExcelCalcValue($.ig.UltraCalcFunctionFV.prototype._calculateFV(rate, period, payment, startingValue, option));
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFV::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFV::CalculateFV(System.Double, System.Double, System.Double, System.Double, System.Int32)" />*/
	_calculateFV: function (rate, period, payment, startingValue, option) {
		return (payment * ((Math.pow(1 + rate, option == 0 ? period : period + 1) - 1) / rate) - (option == 0 ? 0 : payment) + (startingValue * Math.pow(1 + rate, period))) * -1;
	}
	/*<EndMethod Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFV::CalculateFV(System.Double, System.Double, System.Double, System.Double, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFV::Name()" />*/
	name: function () {
		return "fv";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFV::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFV::MinArgs()" />*/
	minArgs: function () {
		return 3;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFV::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFV::MaxArgs()" />*/
	maxArgs: function () {
		return 5;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFV::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFV::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFV::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionFV', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFV" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionPV" />*/

$.ig.util.defType('UltraCalcFunctionPV', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionPV::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var option = 0;
		if (argumentCount == 5) {
			option = numberStack.pop()._toInt321();
		}
		var fv = 0;
		if (argumentCount >= 4 && !(function () { var $ret = numberStack.pop()._toDouble1(fv); fv = $ret.p0; return $ret.ret; }())) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		var payment, period, rate;
		if (!(function () { var $ret = numberStack.pop()._toDouble1(payment); payment = $ret.p0; return $ret.ret; }()) || !(function () { var $ret = numberStack.pop()._toDouble1(period); period = $ret.p0; return $ret.ret; }()) || !(function () { var $ret = numberStack.pop()._toDouble1(rate); rate = $ret.p0; return $ret.ret; }())) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		if (option != 0) {
			payment *= 1 + rate;
		}
		return new $.ig.excel.ExcelCalcValue((payment * (1 - Math.pow(1 + rate, -period)) / rate + (fv / Math.pow(1 + rate, period))) * -1);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionPV::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionPV::Name()" />*/
	name: function () {
		return "pv";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionPV::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionPV::MinArgs()" />*/
	minArgs: function () {
		return 3;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionPV::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionPV::MaxArgs()" />*/
	maxArgs: function () {
		return 5;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionPV::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionPV', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionPV" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionPmt" />*/

$.ig.util.defType('UltraCalcFunctionPmt', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionPmt::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var option = 0;
		if (argumentCount == 5) {
			option = numberStack.pop()._toInt321();
		}
		var fv = 0;
		if (argumentCount >= 4 && !(function () { var $ret = numberStack.pop()._toDouble1(fv); fv = $ret.p0; return $ret.ret; }())) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		var pv, period, rate;
		if (!(function () { var $ret = numberStack.pop()._toDouble1(pv); pv = $ret.p0; return $ret.ret; }()) || !(function () { var $ret = numberStack.pop()._toDouble1(period); period = $ret.p0; return $ret.ret; }()) || !(function () { var $ret = numberStack.pop()._toDouble1(rate); rate = $ret.p0; return $ret.ret; }())) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		if (fv != 0 && rate != 0) {
			fv = option == 0 ? (fv * rate) / (1 - Math.pow(rate + 1, period)) : ((fv * rate) / (1 - Math.pow(rate + 1, period))) / (rate + 1);
		}
		if (rate != 0) {
			if (option == 0) {
				return new $.ig.excel.ExcelCalcValue((pv * (rate / (1 - Math.pow(rate + 1, -period))) - fv) * -1);
			} else {
				return new $.ig.excel.ExcelCalcValue(((pv / (1 + rate)) * (rate / (1 - Math.pow(rate + 1, -period))) - fv) * -1);
			}
		}
		return new $.ig.excel.ExcelCalcValue((pv / period - fv) * -1);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionPmt::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionPmt::Name()" />*/
	name: function () {
		return "pmt";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionPmt::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionPmt::MinArgs()" />*/
	minArgs: function () {
		return 3;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionPmt::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionPmt::MaxArgs()" />*/
	maxArgs: function () {
		return 5;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionPmt::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionPmt', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionPmt" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNPer" />*/

$.ig.util.defType('UltraCalcFunctionNPer', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNPer::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var option = 0;
		if (argumentCount == 5) {
			option = numberStack.pop()._toInt321();
		}
		var fv = 0;
		if (argumentCount >= 4 && !(function () { var $ret = numberStack.pop()._toDouble1(fv); fv = $ret.p0; return $ret.ret; }())) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		var pv, pmt, rate;
		if (!(function () { var $ret = numberStack.pop()._toDouble1(pv); pv = $ret.p0; return $ret.ret; }()) || !(function () { var $ret = numberStack.pop()._toDouble1(pmt); pmt = $ret.p0; return $ret.ret; }()) || pmt == 0 || !(function () { var $ret = numberStack.pop()._toDouble1(rate); rate = $ret.p0; return $ret.ret; }())) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		if (rate <= -1) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		if (rate == 0 && pmt == 0) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		var dueDate = option;
		var nper = $.ig.Financial.prototype.nPer(rate, pmt, pv, fv, dueDate);
		return new $.ig.excel.ExcelCalcValue(nper);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNPer::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNPer::Name()" />*/
	name: function () {
		return "nper";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNPer::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNPer::MinArgs()" />*/
	minArgs: function () {
		return 3;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNPer::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNPer::MaxArgs()" />*/
	maxArgs: function () {
		return 5;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNPer::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionNPer', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNPer" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionEven" />*/

$.ig.util.defType('UltraCalcFunctionEven', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionEven::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var value = numberStack.pop();
		if (value.isError()) {
			return new $.ig.excel.ExcelCalcValue(value.toErrorValue());
		}
		var number;
		if (!(function () { var $ret = value._toDouble1(number); number = $ret.p0; return $ret.ret; }())) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		var dividend = Math.ceil(Math.abs(number));
		var result = dividend + Math.abs(Math.ieeeRemainder(dividend, 2));
		if (number < 0) {
			result *= -1;
		}
		return new $.ig.excel.ExcelCalcValue(result);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionEven::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionEven::Name()" />*/
	name: function () {
		return "even";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionEven::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionEven::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionEven::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionEven::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionEven::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionEven::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionEven::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionEven', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionEven" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOdd" />*/

$.ig.util.defType('UltraCalcFunctionOdd', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOdd::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var number;
		var numberArg = numberStack.pop();
		if (numberArg.isError()) {
			return numberArg;
		}
		if ((function () { var $ret = numberArg._toDouble1(number); number = $ret.p0; return $ret.ret; }()) == false) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		var dividend = Math.ceil(Math.abs(number));
		var remainder = Math.abs(Math.ieeeRemainder(dividend, 2));
		if (remainder == 0) {
			dividend++;
		}
		if (number < 0) {
			dividend *= -1;
		}
		return new $.ig.excel.ExcelCalcValue(dividend);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOdd::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOdd::Name()" />*/
	name: function () {
		return "odd";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOdd::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOdd::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOdd::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOdd::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOdd::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOdd::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOdd::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionOdd', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOdd" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionPPmt" />*/

$.ig.util.defType('UltraCalcFunctionPPmt', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionPPmt::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var ppmt = 0;
		var option = 0;
		var fv = 0;
		var pv, nper, per, rate;
		if ((argumentCount == 6 && !(function () { var $ret = numberStack.pop()._toDouble1(option); option = $ret.p0; return $ret.ret; }())) || (argumentCount >= 5 && !(function () { var $ret = numberStack.pop()._toDouble1(fv); fv = $ret.p0; return $ret.ret; }())) || !(function () { var $ret = numberStack.pop()._toDouble1(pv); pv = $ret.p0; return $ret.ret; }()) || !(function () { var $ret = numberStack.pop()._toDouble1(nper); nper = $ret.p0; return $ret.ret; }()) || !(function () { var $ret = numberStack.pop()._toDouble1(per); per = $ret.p0; return $ret.ret; }()) || !(function () { var $ret = numberStack.pop()._toDouble1(rate); rate = $ret.p0; return $ret.ret; }())) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		if (nper <= 0 || per <= 0 || per > nper) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		var dueDate = option;
		ppmt = $.ig.Financial.prototype.pPmt(rate, per, nper, pv, fv, dueDate);
		return new $.ig.excel.ExcelCalcValue(ppmt);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionPPmt::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionPPmt::Name()" />*/
	name: function () {
		return "ppmt";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionPPmt::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionPPmt::MinArgs()" />*/
	minArgs: function () {
		return 4;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionPPmt::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionPPmt::MaxArgs()" />*/
	maxArgs: function () {
		return 6;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionPPmt::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionPPmt', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionPPmt" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIPmt" />*/

$.ig.util.defType('UltraCalcFunctionIPmt', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIPmt::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var option = 0;
		var fv = 0;
		var pv, nper, per, rate;
		if ((argumentCount == 6 && !(function () { var $ret = numberStack.pop()._toDouble1(option); option = $ret.p0; return $ret.ret; }())) || (argumentCount >= 5 && !(function () { var $ret = numberStack.pop()._toDouble1(fv); fv = $ret.p0; return $ret.ret; }())) || !(function () { var $ret = numberStack.pop()._toDouble1(pv); pv = $ret.p0; return $ret.ret; }()) || !(function () { var $ret = numberStack.pop()._toDouble1(nper); nper = $ret.p0; return $ret.ret; }()) || !(function () { var $ret = numberStack.pop()._toDouble1(per); per = $ret.p0; return $ret.ret; }()) || !(function () { var $ret = numberStack.pop()._toDouble1(rate); rate = $ret.p0; return $ret.ret; }())) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		if (nper <= 0 || per <= 0 || per > nper) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		var ipmt = 0;
		var dueDate = option;
		ipmt = $.ig.Financial.prototype.iPmt(rate, per, nper, pv, fv, dueDate);
		return new $.ig.excel.ExcelCalcValue(ipmt);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIPmt::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIPmt::Name()" />*/
	name: function () {
		return "ipmt";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIPmt::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIPmt::MinArgs()" />*/
	minArgs: function () {
		return 4;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIPmt::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIPmt::MaxArgs()" />*/
	maxArgs: function () {
		return 6;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIPmt::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionIPmt', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIPmt" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLower" />*/

$.ig.util.defType('UltraCalcFunctionLower', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLower::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		if ($.ig.excel.ExcelCalcValue.prototype._useExcelFunctionCompatibility) {
			var value = numberStack.pop();
			if (value.isError()) {
				return value;
			}
			return new $.ig.excel.ExcelCalcValue(value.toString().toLowerCase());
		}
		if (numberStack.peek().isString()) {
			return new $.ig.excel.ExcelCalcValue(numberStack.pop().toString().toLocaleLowerCase(numberStack._culture()));
		} else {
			return numberStack.pop();
		}
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLower::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLower::Name()" />*/
	name: function () {
		return "lower";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLower::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLower::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLower::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLower::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLower::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLower::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLower::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionLower', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLower" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionUpper" />*/

$.ig.util.defType('UltraCalcFunctionUpper', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionUpper::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		if ($.ig.excel.ExcelCalcValue.prototype._useExcelFunctionCompatibility) {
			var value = numberStack.pop();
			if (value.isError()) {
				return value;
			}
			return new $.ig.excel.ExcelCalcValue(value.toString().toUpperCase());
		}
		if (numberStack.peek().isString()) {
			return new $.ig.excel.ExcelCalcValue(numberStack.pop().toString().toLocaleUpperCase(numberStack._culture()));
		} else {
			return numberStack.pop();
		}
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionUpper::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionUpper::Name()" />*/
	name: function () {
		return "upper";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionUpper::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionUpper::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionUpper::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionUpper::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionUpper::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionUpper::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionUpper::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionUpper', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionUpper" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLeft" />*/

$.ig.util.defType('UltraCalcFunctionLeft', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLeft::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var numChars = 1;
		if (argumentCount > 1) {
			var charCount = numberStack.pop();
			if (charCount.isError()) {
				return new $.ig.excel.ExcelCalcValue(charCount.toErrorValue());
			}
			numChars = charCount._toInt321();
			if (numChars < 0) {
				return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
			}
		}
		var value = numberStack.pop();
		if (value.isError()) {
			return new $.ig.excel.ExcelCalcValue(value.toErrorValue());
		}
		var s = value.toString();
		return new $.ig.excel.ExcelCalcValue(s.substr(0, numChars > s.length ? s.length : numChars));
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLeft::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLeft::Name()" />*/
	name: function () {
		return "left";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLeft::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLeft::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLeft::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLeft::MaxArgs()" />*/
	maxArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLeft::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLeft::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return (isCreatedFromRegionReference == false);
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLeft::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionLeft', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLeft" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRight" />*/

$.ig.util.defType('UltraCalcFunctionRight', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRight::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var numChars = 1;
		if (argumentCount > 1) {
			var charCount = numberStack.pop();
			if (charCount.isError()) {
				return new $.ig.excel.ExcelCalcValue(charCount.toErrorValue());
			}
			numChars = charCount._toInt321();
			if (numChars < 0) {
				return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
			}
		}
		if (numChars < 0) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
		}
		var value = numberStack.pop();
		if (value.isError()) {
			return new $.ig.excel.ExcelCalcValue(value.toErrorValue());
		}
		var s = value.toString();
		return new $.ig.excel.ExcelCalcValue(s.substr(numChars > s.length ? 0 : s.length - numChars));
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRight::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRight::Name()" />*/
	name: function () {
		return "right";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRight::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRight::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRight::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRight::MaxArgs()" />*/
	maxArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRight::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRight::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return (isCreatedFromRegionReference == false);
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRight::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionRight', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRight" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMid" />*/

$.ig.util.defType('UltraCalcFunctionMid', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMid::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var numChars = 0;
		if (argumentCount > 2) {
			var charCount = numberStack.pop();
			if (charCount.isError()) {
				return new $.ig.excel.ExcelCalcValue(charCount.toErrorValue());
			}
			numChars = charCount._toInt321();
			if (numChars < 0) {
				return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
			}
		}
		var startNum = 1;
		if (argumentCount > 1) {
			var startValue = numberStack.pop();
			if (startValue.isError()) {
				return new $.ig.excel.ExcelCalcValue(startValue.toErrorValue());
			}
			startNum = startValue._toInt321();
			if (numChars < 1) {
				return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
			}
		}
		var value = numberStack.pop();
		if (value.isError()) {
			return new $.ig.excel.ExcelCalcValue(value.toErrorValue());
		}
		var s = value.toString();
		if (startNum > s.length) {
			return new $.ig.excel.ExcelCalcValue(String.empty());
		} else if (startNum + numChars - 1 > s.length) {
			return new $.ig.excel.ExcelCalcValue(s.substr(startNum - 1));
		} else {
			return new $.ig.excel.ExcelCalcValue(s.substr(startNum - 1, numChars));
		}
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMid::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMid::Name()" />*/
	name: function () {
		return "mid";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMid::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMid::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMid::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMid::MaxArgs()" />*/
	maxArgs: function () {
		return 3;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMid::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMid::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMid::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionMid', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMid" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTrim" />*/

$.ig.util.defType('UltraCalcFunctionTrim', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTrim::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var value = numberStack.pop();
		if (value.isError()) {
			return new $.ig.excel.ExcelCalcValue(value.toErrorValue());
		}
		var text = value.toString().trim([]);
		var sb = new $.ig.StringBuilder(1, text.length);
		var lastCharWhiteSpace = false;
		for (var i = 0; i < text.length; i++) {
			var c = text.charAt(i);
			var isWhiteSpace = /\s/i.test(c);
			if (!lastCharWhiteSpace || !isWhiteSpace) {
				sb.append1(c);
			}
			lastCharWhiteSpace = isWhiteSpace;
		}
		return new $.ig.excel.ExcelCalcValue(sb.toString());
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTrim::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTrim::Name()" />*/
	name: function () {
		return "trim";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTrim::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTrim::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTrim::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTrim::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTrim::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTrim::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTrim::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionTrim', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTrim" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLen" />*/

$.ig.util.defType('UltraCalcFunctionLen', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLen::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var value = numberStack.pop();
		if (value.isError()) {
			return new $.ig.excel.ExcelCalcValue(value.toErrorValue());
		}
		return new $.ig.excel.ExcelCalcValue(value.toString().length);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLen::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLen::Name()" />*/
	name: function () {
		return "len";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLen::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLen::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLen::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLen::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLen::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLen::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLen::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionLen', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLen" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionValue" />*/

$.ig.util.defType('UltraCalcFunctionValue', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionValue::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var value = numberStack.pop();
		if (value.isError()) {
			return new $.ig.excel.ExcelCalcValue(value.toErrorValue());
		}
		var successful = false;
		var result = 0;
		if (typeof value.value() === 'string') {
			var arg = (value.value()).trim([]);
			if (arg.endsWith("kr", 0)) {
				arg = arg.substr(0, arg.length - 2);
			} else if (arg.startsWith("R$") || arg.startsWith("S/")) {
				arg = arg.substr(2, arg.length - 2);
			} else {
				arg = arg.trim($.ig.UltraCalcFunctionValue.prototype.__currencySymbols);
			}
			successful = (function () { var $ret = $.ig.MathUtilities.prototype.doubleTryParse(arg, numberStack._culture(), result); result = $ret.p2; return $ret.ret; }());
		}
		if (!successful) {
			successful = (function () { var $ret = value._toDouble1(result); result = $ret.p0; return $ret.ret; }());
		}
		return (successful) ? new $.ig.excel.ExcelCalcValue(result) : new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionValue::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionValue::Name()" />*/
	name: function () {
		return "value";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionValue::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionValue::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionValue::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionValue::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionValue::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionValue::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionValue::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionValue', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionValue" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFind" />*/

$.ig.util.defType('UltraCalcFunctionFind', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFind::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var startNum = 0;
		if (argumentCount > 2) {
			if (numberStack.peek().isError()) {
				return new $.ig.excel.ExcelCalcValue(numberStack.pop().toErrorValue());
			}
			startNum = numberStack.pop()._toInt321() - 1;
			if (startNum < 0) {
				return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
			}
		}
		if (numberStack.peek().isError()) {
			return new $.ig.excel.ExcelCalcValue(numberStack.pop().toErrorValue());
		}
		var strWithinText = numberStack.pop().toString();
		if (startNum > strWithinText.length - 1) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
		}
		if (numberStack.peek().isError()) {
			return new $.ig.excel.ExcelCalcValue(numberStack.pop().toErrorValue());
		}
		var pos = -1;
		var strFindText = numberStack.pop().toString();
		if (strFindText.length == 0) {
			pos = 1;
		} else {
			pos = strWithinText.indexOf(strFindText, startNum);
		}
		if (pos != -1) {
			return new $.ig.excel.ExcelCalcValue(pos + 1);
		} else {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
		}
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFind::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFind::Name()" />*/
	name: function () {
		return "find";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFind::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFind::MinArgs()" />*/
	minArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFind::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFind::MaxArgs()" />*/
	maxArgs: function () {
		return 3;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFind::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFind::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFind::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionFind', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFind" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionReplace" />*/

$.ig.util.defType('UltraCalcFunctionReplace', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionReplace::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var strNewTextArg = numberStack.pop();
		var numCharsArg = numberStack.pop();
		var startNumArg = numberStack.pop();
		var strOldTextArg = numberStack.pop();
		if (strOldTextArg.isError()) {
			return strOldTextArg;
		}
		if (startNumArg.isError()) {
			return startNumArg;
		}
		if (numCharsArg.isError()) {
			return numCharsArg;
		}
		if (strNewTextArg.isError()) {
			return strNewTextArg;
		}
		var strNewText = strNewTextArg.toString();
		var numChars = numCharsArg._toInt321();
		var startNum = startNumArg._toInt321() - 1;
		var strOldText = strOldTextArg.toString();
		if (startNum < 0 || startNum > strOldText.length) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
		}
		if (numChars < 0) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
		}
		if (numChars > strOldText.length - startNum) {
			numChars = strOldText.length - startNum;
		}
		var strResult = strOldText.substr(0, startNum) + strNewText + strOldText.substr(startNum + numChars);
		return new $.ig.excel.ExcelCalcValue(strResult);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionReplace::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionReplace::Name()" />*/
	name: function () {
		return "replace";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionReplace::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionReplace::MinArgs()" />*/
	minArgs: function () {
		return 4;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionReplace::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionReplace::MaxArgs()" />*/
	maxArgs: function () {
		return 4;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionReplace::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionReplace::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionReplace::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionReplace', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionReplace" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSYD" />*/

$.ig.util.defType('UltraCalcFunctionSYD', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSYD::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var per = numberStack.pop()._toInt321();
		if (per <= 0) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		var life = numberStack.pop()._toInt321();
		if (life <= 0) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		var salvage, cost;
		if (!(function () { var $ret = numberStack.pop()._toDouble1(salvage); salvage = $ret.p0; return $ret.ret; }()) || !(function () { var $ret = numberStack.pop()._toDouble1(cost); cost = $ret.p0; return $ret.ret; }())) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		return new $.ig.excel.ExcelCalcValue(((cost - salvage) * (life - per + 1) * 2) / (life * (life + 1)));
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSYD::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSYD::Name()" />*/
	name: function () {
		return "syd";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSYD::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSYD::MinArgs()" />*/
	minArgs: function () {
		return 4;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSYD::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSYD::MaxArgs()" />*/
	maxArgs: function () {
		return 4;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSYD::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSYD::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSYD::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionSYD', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSYD" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSLN" />*/

$.ig.util.defType('UltraCalcFunctionSLN', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSLN::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var life = numberStack.pop()._toInt321();
		if (life == 0) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.div));
		}
		var salvage, cost;
		if (!(function () { var $ret = numberStack.pop()._toDouble1(salvage); salvage = $ret.p0; return $ret.ret; }()) || !(function () { var $ret = numberStack.pop()._toDouble1(cost); cost = $ret.p0; return $ret.ret; }())) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		return new $.ig.excel.ExcelCalcValue((cost - salvage) / life);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSLN::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSLN::Name()" />*/
	name: function () {
		return "sln";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSLN::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSLN::MinArgs()" />*/
	minArgs: function () {
		return 3;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSLN::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSLN::MaxArgs()" />*/
	maxArgs: function () {
		return 3;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSLN::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSLN::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSLN::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionSLN', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSLN" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDB" />*/

$.ig.util.defType('UltraCalcFunctionDB', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDB::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var month = 12;
		if (argumentCount > 4) {
			month = numberStack.pop()._toInt321();
		}
		var per = numberStack.pop()._toInt321();
		if (per <= 0) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		var life;
		if (!(function () { var $ret = numberStack.pop()._toDouble1(life); life = $ret.p0; return $ret.ret; }()) || life <= 0) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		var salvage, cost;
		if (!(function () { var $ret = numberStack.pop()._toDouble1(salvage); salvage = $ret.p0; return $ret.ret; }()) || !(function () { var $ret = numberStack.pop()._toDouble1(cost); cost = $ret.p0; return $ret.ret; }())) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		var rate = Math.round10N(1 - Math.pow(salvage / cost, 1 / life), 3);
		if (per > life + 1) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		if ((per == life + 1) && month == 12) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		var depreciation = 0;
		var accumulatedDepreciation = 0;
		var tempCost = cost;
		for (var currentPeriod = 1; currentPeriod <= per; currentPeriod++) {
			if (currentPeriod == 1) {
				depreciation = tempCost * rate * (month / 12);
			} else if ((currentPeriod == (life + 1)) && month < 12) {
				depreciation = (tempCost * rate * (12 - month)) / 12;
			} else {
				depreciation = tempCost * rate;
			}
			accumulatedDepreciation += depreciation;
			tempCost -= depreciation;
		}
		return new $.ig.excel.ExcelCalcValue(depreciation);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDB::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDB::Name()" />*/
	name: function () {
		return "db";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDB::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDB::MinArgs()" />*/
	minArgs: function () {
		return 4;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDB::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDB::MaxArgs()" />*/
	maxArgs: function () {
		return 5;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDB::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionDB', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDB" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDDB" />*/

$.ig.util.defType('UltraCalcFunctionDDB', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDDB::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var factorVal = argumentCount > 4 ? numberStack.pop() : new $.ig.excel.ExcelCalcValue(2);
		var periodVal = numberStack.pop();
		var lifeVal = numberStack.pop();
		var salvageVal = numberStack.pop();
		var costVal = numberStack.pop();
		if (factorVal.isNull() || periodVal.isNull() || lifeVal.isNull() || salvageVal.isNull() || costVal.isNull()) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		var factor, per, life, salvage, cost;
		if (!(function () { var $ret = factorVal._toDouble1(factor); factor = $ret.p0; return $ret.ret; }()) || !(function () { var $ret = periodVal._toDouble1(per); per = $ret.p0; return $ret.ret; }()) || !(function () { var $ret = lifeVal._toDouble1(life); life = $ret.p0; return $ret.ret; }()) || !(function () { var $ret = salvageVal._toDouble1(salvage); salvage = $ret.p0; return $ret.ret; }()) || !(function () { var $ret = costVal._toDouble1(cost); cost = $ret.p0; return $ret.ret; }())) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
		}
		var adjBase = cost * Math.pow(1 - factor / life, per - 1);
		var dep = adjBase - (adjBase * (1 - factor / life));
		if (salvage > adjBase - dep) {
			if (adjBase - salvage > 0) {
				dep = adjBase - salvage;
			} else {
				dep = 0;
			}
		}
		return new $.ig.excel.ExcelCalcValue(dep);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDDB::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDDB::Name()" />*/
	name: function () {
		return "ddb";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDDB::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDDB::MinArgs()" />*/
	minArgs: function () {
		return 4;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDDB::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDDB::MaxArgs()" />*/
	maxArgs: function () {
		return 5;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDDB::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionDDB', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDDB" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIntRate" />*/

$.ig.util.defType('UltraCalcFunctionIntRate', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIntRate::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var basis = 0;
		if (argumentCount > 4 && !(function () { var $ret = numberStack.pop()._toDouble1(basis); basis = $ret.p0; return $ret.ret; }())) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		if (basis < 0 || basis > 4) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		var redemption, investment;
		if (!(function () { var $ret = numberStack.pop()._toDouble1(redemption); redemption = $ret.p0; return $ret.ret; }()) || !(function () { var $ret = numberStack.pop()._toDouble1(investment); investment = $ret.p0; return $ret.ret; }())) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		if (investment <= 0 || redemption <= 0) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		var maturity = numberStack.pop();
		var dateMaturity = maturity._toDateTime1();
		var settlement = numberStack.pop();
		var dateSettlement = settlement._toDateTime1();
		if (dateSettlement >= dateMaturity) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		var daysInYear;
		var dim;
		if (basis == 0 || basis == 4) {
			var result = $.ig.UltraCalcFunctionDays360.prototype._evaluateHelper(dateSettlement, dateMaturity, basis != 4 ? false : true);
			if ((function () { var $ret = result._toDouble1(dim); dim = $ret.p0; return $ret.ret; }()) == false) {
				return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
			}
			daysInYear = 360;
		} else {
			if (basis == 1) {
				daysInYear = 365.2422;
			} else if (basis == 2) {
				daysInYear = 360;
			} else {
				daysInYear = 365;
			}
			dim = $.ig.util.timeSpanDays((dateMaturity - dateSettlement));
		}
		return new $.ig.excel.ExcelCalcValue(((redemption - investment) / investment) * (daysInYear / dim));
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIntRate::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIntRate::Name()" />*/
	name: function () {
		return "intrate";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIntRate::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIntRate::MinArgs()" />*/
	minArgs: function () {
		return 4;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIntRate::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIntRate::MaxArgs()" />*/
	maxArgs: function () {
		return 5;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIntRate::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionIntRate', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIntRate" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDateValue" />*/

$.ig.util.defType('UltraCalcFunctionDateValue', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDateValue::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var dtArg = numberStack.pop();
		var dt;
		if ((function () { var $ret = dtArg._toDateTimeHelper(dtArg._culture(), dt); dt = $ret.p1; return $ret.ret; }()) == false) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
		}
		return new $.ig.excel.ExcelCalcValue(dt);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDateValue::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDateValue::Name()" />*/
	name: function () {
		return "datevalue";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDateValue::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDateValue::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDateValue::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDateValue::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDateValue::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDateValue::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDateValue::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionDateValue', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDateValue" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDate" />*/

$.ig.util.defType('UltraCalcFunctionDate', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDate::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var dayValue = numberStack.pop();
		var monthValue = numberStack.pop();
		var yearValue = numberStack.pop();
		if (yearValue.isError()) {
			return yearValue;
		}
		var yearRaw;
		if ((function () { var $ret = yearValue._toDouble1(yearRaw); yearRaw = $ret.p0; return $ret.ret; }()) == false) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
		}
		if (monthValue.isError()) {
			return monthValue;
		}
		var monthRaw;
		if ((function () { var $ret = monthValue._toDouble1(monthRaw); monthRaw = $ret.p0; return $ret.ret; }()) == false) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
		}
		if (dayValue.isError()) {
			return dayValue;
		}
		var dayRaw;
		if ((function () { var $ret = dayValue._toDouble1(dayRaw); dayRaw = $ret.p0; return $ret.ret; }()) == false) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
		}
		var year = $.ig.truncate(Math.floor(yearRaw));
		var month = $.ig.truncate(Math.floor(monthRaw));
		var day = $.ig.truncate(Math.floor(dayRaw));
		if ($.ig.excel.ExcelCalcValue.prototype._useExcelFunctionCompatibility) {
			var BaseYear = 1900;
			if (year < BaseYear) {
				year += BaseYear;
			}
		}
		while (true) {
			var monthIndex = (month - 1);
			var extraYears = $.ig.intDivide(monthIndex, 12);
			if (extraYears > 0) {
				year += extraYears;
				month = (monthIndex % 12) + 1;
			}
			if (10000 <= year) {
				return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
			}
			var maxDay = $.ig.Date.prototype.daysInMonth(year, month);
			if (day <= maxDay) {
				break;
			}
			day -= maxDay;
			month++;
		}
		if ($.ig.excel.ExcelCalcValue.prototype._useExcelFunctionCompatibility) {
			if (year < 1900) {
				return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
			}
			var workbook = $.ig.excel.ExcelCalcFunction.prototype._getWorkbook(numberStack);
			if (workbook != null && workbook.dateSystem() == $.ig.excel.DateSystem.from1904 && year < 1904) {
				return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
			}
			if (10000 <= year) {
				return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
			}
		} else {
			if (year < 0) {
				return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
			}
		}
		var dt = $.ig.Date.prototype.fromValues(year, month, day, 0, 0, 0, 0);
		return new $.ig.excel.ExcelCalcValue(dt);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDate::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDate::Name()" />*/
	name: function () {
		return "date";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDate::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDate::MinArgs()" />*/
	minArgs: function () {
		return 3;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDate::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDate::MaxArgs()" />*/
	maxArgs: function () {
		return 3;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDate::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDate::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDate::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionDate', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDate" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDays360" />*/

$.ig.util.defType('UltraCalcFunctionDays360', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDays360::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var method = false;
		if (argumentCount > 2) {
			if (numberStack.peek().isError()) {
				return new $.ig.excel.ExcelCalcValue(numberStack.pop().toErrorValue());
			}
			method = numberStack.pop()._toBoolean1();
		}
		var endDate = numberStack.pop()._toDateTime1();
		var startDate = numberStack.pop()._toDateTime1();
		return $.ig.UltraCalcFunctionDays360.prototype._evaluateHelper(startDate, endDate, method);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDays360::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDays360::EvaluateHelper(System.DateTime, System.DateTime, System.Boolean)" />*/
	_evaluateHelper: function (startDate, endDate, method) {
		if (startDate.getDate() == 31) {
			startDate = $.ig.Date.prototype.fromValues(startDate.getFullYear(), $.ig.Date.prototype.getMonth(startDate), 30, 0, 0, 0, 0);
		}
		if (endDate.getDate() == 31) {
			if (!method) {
				if (startDate.getDate() < 30) {
					endDate = $.ig.Date.prototype.fromValues($.ig.Date.prototype.getMonth(endDate) < 12 ? endDate.getFullYear() : endDate.getFullYear() + 1, $.ig.Date.prototype.getMonth(endDate) < 12 ? $.ig.Date.prototype.getMonth(endDate) + 1 : 1, 1, 0, 0, 0, 0);
				} else {
					endDate = $.ig.Date.prototype.fromValues(endDate.getFullYear(), $.ig.Date.prototype.getMonth(endDate), 30, 0, 0, 0, 0);
				}
			} else {
				endDate = $.ig.Date.prototype.fromValues(endDate.getFullYear(), $.ig.Date.prototype.getMonth(endDate), 30, 0, 0, 0, 0);
			}
		}
		return new $.ig.excel.ExcelCalcValue((endDate.getFullYear() * 360 + $.ig.Date.prototype.getMonth(endDate) * 30 + endDate.getDate()) - (startDate.getFullYear() * 360 + $.ig.Date.prototype.getMonth(startDate) * 30 + startDate.getDate()));
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDays360::EvaluateHelper(System.DateTime, System.DateTime, System.Boolean)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDays360::Name()" />*/
	name: function () {
		return "days360";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDays360::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDays360::MinArgs()" />*/
	minArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDays360::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDays360::MaxArgs()" />*/
	maxArgs: function () {
		return 3;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDays360::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionDays360', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDays360" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDay" />*/

$.ig.util.defType('UltraCalcFunctionDay', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDay::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var value = numberStack.pop();
		if (value.isError()) {
			return new $.ig.excel.ExcelCalcValue(value.toErrorValue());
		}
		if ($.ig.excel.ExcelCalcValue.prototype._useExcelFunctionCompatibility) {
			var result;
			if (value.isNull() || ((function () { var $ret = value._toDouble1(result); result = $ret.p0; return $ret.ret; }()) && result == 0)) {
				return new $.ig.excel.ExcelCalcValue(0);
			}
		}
		var date = value._toDateTime1();
		return new $.ig.excel.ExcelCalcValue(date.getDate());
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDay::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDay::Name()" />*/
	name: function () {
		return "day";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDay::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDay::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDay::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDay::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDay::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDay::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDay::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionDay', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDay" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMonth" />*/

$.ig.util.defType('UltraCalcFunctionMonth', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMonth::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var value = numberStack.pop();
		if (value.isError()) {
			return new $.ig.excel.ExcelCalcValue(value.toErrorValue());
		}
		if ($.ig.excel.ExcelCalcValue.prototype._useExcelFunctionCompatibility) {
			var result;
			if (value.isNull() || ((function () { var $ret = value._toDouble1(result); result = $ret.p0; return $ret.ret; }()) && result == 0)) {
				return new $.ig.excel.ExcelCalcValue(1);
			}
		}
		var date = value._toDateTime1();
		return new $.ig.excel.ExcelCalcValue($.ig.Date.prototype.getMonth(date));
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMonth::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMonth::Name()" />*/
	name: function () {
		return "month";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMonth::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMonth::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMonth::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMonth::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMonth::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMonth::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMonth::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionMonth', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMonth" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionYear" />*/

$.ig.util.defType('UltraCalcFunctionYear', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionYear::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var value = numberStack.pop();
		if (value.isError()) {
			return new $.ig.excel.ExcelCalcValue(value.toErrorValue());
		}
		if ($.ig.excel.ExcelCalcValue.prototype._useExcelFunctionCompatibility) {
			var result;
			if (value.isNull() || ((function () { var $ret = value._toDouble1(result); result = $ret.p0; return $ret.ret; }()) && result == 0)) {
				var workbook = numberStack._workbook();
				if (workbook != null && workbook.dateSystem() == $.ig.excel.DateSystem.from1904) {
					return new $.ig.excel.ExcelCalcValue(1904);
				}
				return new $.ig.excel.ExcelCalcValue(1900);
			}
		}
		var date = value._toDateTime1();
		return new $.ig.excel.ExcelCalcValue(date.getFullYear());
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionYear::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionYear::Name()" />*/
	name: function () {
		return "year";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionYear::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionYear::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionYear::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionYear::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionYear::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionYear::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionYear::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionYear', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionYear" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHour" />*/

$.ig.util.defType('UltraCalcFunctionHour', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHour::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var value = numberStack.pop();
		if (value.isError()) {
			return new $.ig.excel.ExcelCalcValue(value.toErrorValue());
		}
		if ($.ig.excel.ExcelCalcValue.prototype._useExcelFunctionCompatibility) {
			var result;
			if (value.isNull() || ((function () { var $ret = value._toDouble1(result); result = $ret.p0; return $ret.ret; }()) && result == 0)) {
				return new $.ig.excel.ExcelCalcValue(0);
			}
		}
		var date = value._toDateTime1();
		return new $.ig.excel.ExcelCalcValue(date.getHours());
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHour::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHour::Name()" />*/
	name: function () {
		return "hour";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHour::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHour::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHour::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHour::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHour::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHour::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHour::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionHour', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHour" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMinute" />*/

$.ig.util.defType('UltraCalcFunctionMinute', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMinute::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var value = numberStack.pop();
		if (value.isError()) {
			return new $.ig.excel.ExcelCalcValue(value.toErrorValue());
		}
		if ($.ig.excel.ExcelCalcValue.prototype._useExcelFunctionCompatibility) {
			var result;
			if (value.isNull() || ((function () { var $ret = value._toDouble1(result); result = $ret.p0; return $ret.ret; }()) && result == 0)) {
				return new $.ig.excel.ExcelCalcValue(0);
			}
		}
		var date = value._toDateTime1();
		return new $.ig.excel.ExcelCalcValue(date.getMinutes());
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMinute::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMinute::Name()" />*/
	name: function () {
		return "minute";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMinute::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMinute::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMinute::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMinute::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMinute::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMinute::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMinute::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionMinute', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMinute" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSecond" />*/

$.ig.util.defType('UltraCalcFunctionSecond', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSecond::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var value = numberStack.pop();
		if (value.isError()) {
			return new $.ig.excel.ExcelCalcValue(value.toErrorValue());
		}
		if ($.ig.excel.ExcelCalcValue.prototype._useExcelFunctionCompatibility) {
			var result;
			if (value.isNull() || ((function () { var $ret = value._toDouble1(result); result = $ret.p0; return $ret.ret; }()) && result == 0)) {
				return new $.ig.excel.ExcelCalcValue(0);
			}
		}
		var date = value._toDateTime1();
		return new $.ig.excel.ExcelCalcValue(date.getSeconds());
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSecond::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSecond::Name()" />*/
	name: function () {
		return "second";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSecond::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSecond::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSecond::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSecond::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSecond::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSecond::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSecond::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionSecond', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSecond" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNow" />*/

$.ig.util.defType('UltraCalcFunctionNow', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNow::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		return new $.ig.excel.ExcelCalcValue($.ig.Date.prototype.now());
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNow::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNow::Name()" />*/
	name: function () {
		return "now";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNow::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNow::MinArgs()" />*/
	minArgs: function () {
		return 0;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNow::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNow::MaxArgs()" />*/
	maxArgs: function () {
		return 0;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNow::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionNow', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNow" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTimeValue" />*/

$.ig.util.defType('UltraCalcFunctionTimeValue', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTimeValue::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var argument = numberStack.pop();
		if (argument.isError()) {
			return argument;
		}
		var time = $.ig.Date.prototype.getTimeOfDay(argument._toDateTime1());
		if ($.ig.excel.ExcelCalcValue.prototype._useExcelValueCompatibility) {
			var value = $.ig.excel.ExcelCalcValue.prototype._timeOfDayToExcelDate(time, false);
			return new $.ig.excel.ExcelCalcValue(value);
		}
		return new $.ig.excel.ExcelCalcValue($.ig.Date.prototype.fromTicks($.ig.util.timeSpanTicks(time)));
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTimeValue::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTimeValue::Name()" />*/
	name: function () {
		return "timevalue";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTimeValue::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTimeValue::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTimeValue::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTimeValue::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTimeValue::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTimeValue::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTimeValue::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionTimeValue', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTimeValue" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTime" />*/

$.ig.util.defType('UltraCalcFunctionTime', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTime::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var secondArg = numberStack.pop();
		var minuteArg = numberStack.pop();
		var hourArg = numberStack.pop();
		if (hourArg.isError()) {
			return hourArg;
		}
		if (minuteArg.isError()) {
			return minuteArg;
		}
		if (secondArg.isError()) {
			return secondArg;
		}
		var second = secondArg._toInt321();
		var minute = minuteArg._toInt321();
		var hour = hourArg._toInt321();
		if ($.ig.excel.ExcelCalcValue.prototype._useExcelFunctionCompatibility) {
			var maxValue = 32767;
			if (second < 0 || minute < 0 || hour < 0 || maxValue < second || maxValue < minute || maxValue < hour) {
				return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
			}
			minute += ($.ig.intDivide(second, 60));
			second = second % 60;
			hour += ($.ig.intDivide(minute, 60));
			minute = minute % 60;
			hour = hour % 24;
		}
		if ($.ig.excel.ExcelCalcValue.prototype._useExcelValueCompatibility) {
			var time = $.ig.util.timeSpanInit1(hour, minute, second);
			var value = $.ig.excel.ExcelCalcValue.prototype._timeOfDayToExcelDate(time, false);
			return new $.ig.excel.ExcelCalcValue(value);
		} else {
			var dt = $.ig.Date.prototype.fromValues(1, 1, 1, hour, minute, second, 0);
			return new $.ig.excel.ExcelCalcValue(dt.getTime());
		}
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTime::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTime::Name()" />*/
	name: function () {
		return "time";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTime::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTime::MinArgs()" />*/
	minArgs: function () {
		return 3;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTime::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTime::MaxArgs()" />*/
	maxArgs: function () {
		return 3;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTime::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTime::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTime::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionTime', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTime" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMedian" />*/

$.ig.util.defType('UltraCalcFunctionMedian', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMedian::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var valueArray = new $.ig.List$1(Number, 0);
		if (!$.ig.excel.ExcelCalcFunction.prototype._popArrayList(numberStack, argumentCount, valueArray, true, true)) {
			return numberStack.pop();
		}
		valueArray.sort();
		if (valueArray.count() == 0) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		var median;
		var index = $.ig.intDivide(valueArray.count(), 2);
		if (valueArray.count() % 2 == 1) {
			median = valueArray.__inner[index];
		} else {
			var d = (valueArray.__inner[index - 1] + valueArray.__inner[index]) / 2;
			median = d;
		}
		return new $.ig.excel.ExcelCalcValue(median);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMedian::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMedian::CanParameterBeEnumerable(System.Int32)" />*/
	canParameterBeEnumerable: function (parameterIndex) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMedian::CanParameterBeEnumerable(System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMedian::Name()" />*/
	name: function () {
		return "median";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMedian::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMedian::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMedian::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMedian::MaxArgs()" />*/
	maxArgs: function () {
		return 0x7FFFFFFF;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMedian::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMedian::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return (isCreatedFromRegionReference == false);
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMedian::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionMedian', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMedian" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionVar" />*/

$.ig.util.defType('UltraCalcFunctionVar', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionVar::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		return this._calculateVariance(numberStack, argumentCount);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionVar::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionVar::CanParameterBeEnumerable(System.Int32)" />*/
	canParameterBeEnumerable: function (parameterIndex) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionVar::CanParameterBeEnumerable(System.Int32)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionVar::CalculateVariance(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	_calculateVariance: function (numberStack, argumentCount) {
		var args = this._getArguments(numberStack, argumentCount, true);
		return $.ig.UltraCalcFunctionVar.prototype._evaluateHelper(args);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionVar::CalculateVariance(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionVar::EvaluateHelper(System.Collections.Generic.IList)" />*/
	_evaluateHelper: function (args) {
		var average = 0;
		var count = 0;
		var en = args.getEnumerator();
		while (en.moveNext()) {
			var calcValue = en.current();
			if (null != calcValue) {
				if (calcValue.isError()) {
					return new $.ig.excel.ExcelCalcValue(calcValue.toErrorValue());
				}
				if ($.ig.excel.ExcelCalcValue.prototype._useExcelFunctionCompatibility && calcValue.isString()) {
					continue;
				}
				var d;
				if ((function () { var $ret = calcValue._toDouble1(d); d = $ret.p0; return $ret.ret; }())) {
					average += d;
					count++;
				} else {
					return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
				}
			}
		}
		if (count == 0) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		if (count == 1) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.div));
		}
		average = average / count;
		var accum = 0;
		var en1 = args.getEnumerator();
		while (en1.moveNext()) {
			var calcValue1 = en1.current();
			if (null != calcValue1) {
				if (calcValue1.isError()) {
					return new $.ig.excel.ExcelCalcValue(calcValue1.toErrorValue());
				}
				var d1;
				if ((function () { var $ret = calcValue1._toDouble1(d1); d1 = $ret.p0; return $ret.ret; }())) {
					var delta = d1 - average;
					accum += delta * delta;
				} else {
					return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
				}
			}
		}
		var $var = accum / (count - 1);
		return new $.ig.excel.ExcelCalcValue($var);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionVar::EvaluateHelper(System.Collections.Generic.IList)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionVar::Name()" />*/
	name: function () {
		return "var";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionVar::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionVar::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionVar::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionVar::MaxArgs()" />*/
	maxArgs: function () {
		return 0x7FFFFFFF;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionVar::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionVar::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return (isCreatedFromRegionReference == false);
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionVar::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionVar', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionVar" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionStdev" />*/

$.ig.util.defType('UltraCalcFunctionStdev', 'UltraCalcFunctionVar', {
	init: function () {
		$.ig.UltraCalcFunctionVar.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionStdev::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var args = this._getArguments(numberStack, argumentCount, true);
		return $.ig.UltraCalcFunctionStdev.prototype._evaluateHelper(args);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionStdev::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionStdev::CanParameterBeEnumerable(System.Int32)" />*/
	canParameterBeEnumerable: function (parameterIndex) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionStdev::CanParameterBeEnumerable(System.Int32)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionStdev::EvaluateHelper(System.Collections.Generic.IList)" />*/
	_evaluateHelper: function (args) {
		var varianceValue = $.ig.UltraCalcFunctionVar.prototype._evaluateHelper(args);
		if (varianceValue.isError()) {
			return varianceValue;
		}
		var varVal;
		if (!(function () { var $ret = varianceValue._toDouble1(varVal); varVal = $ret.p0; return $ret.ret; }())) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		return new $.ig.excel.ExcelCalcValue(Math.sqrt(varVal));
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionStdev::EvaluateHelper(System.Collections.Generic.IList)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionStdev::Name()" />*/
	name: function () {
		return "stdev";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionStdev::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionStdev::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionStdev::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionStdev::MaxArgs()" />*/
	maxArgs: function () {
		return 0x7FFFFFFF;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionStdev::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionStdev::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return (isCreatedFromRegionReference == false);
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionStdev::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionStdev', $.ig.UltraCalcFunctionVar.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionStdev" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionType" />*/

$.ig.util.defType('UltraCalcFunctionType', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionType::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var type;
		var value = numberStack.pop();
		if (value.isError()) {
			type = 16;
		} else if (value.isBoolean()) {
			type = 4;
		} else if (value.isString()) {
			type = 2;
		} else if (value.isArray()) {
			type = 64;
		} else {
			var d;
			if (!(function () { var $ret = value._toDouble1(d); d = $ret.p0; return $ret.ret; }())) {
				return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
			}
			type = 1;
		}
		return new $.ig.excel.ExcelCalcValue(type);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionType::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionType::Name()" />*/
	name: function () {
		return "type";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionType::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionType::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionType::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionType::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionType::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionType', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionType" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionErrorType" />*/

$.ig.util.defType('UltraCalcFunctionErrorType', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionErrorType::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var type;
		var value = numberStack.pop();
		if (value.isError()) {
			var errorValue = value.toErrorValue();
			switch (errorValue.code()) {
				case $.ig.excel.ExcelCalcErrorCode.$null:
					type = 1;
					break;
				case $.ig.excel.ExcelCalcErrorCode.div:
					type = 2;
					break;
				case $.ig.excel.ExcelCalcErrorCode.value:
					type = 3;
					break;
				case $.ig.excel.ExcelCalcErrorCode.reference:
					type = 4;
					break;
				case $.ig.excel.ExcelCalcErrorCode.name:
					type = 5;
					break;
				case $.ig.excel.ExcelCalcErrorCode.num:
					type = 6;
					break;
				case $.ig.excel.ExcelCalcErrorCode.nA:
					type = 7;
					break;
				default: return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.nA));
			}
			return new $.ig.excel.ExcelCalcValue(type);
		} else {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.nA));
		}
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionErrorType::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionErrorType::Name()" />*/
	name: function () {
		return "errortype";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionErrorType::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionErrorType::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionErrorType::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionErrorType::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionErrorType::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionErrorType', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionErrorType" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNa" />*/

$.ig.util.defType('UltraCalcFunctionNa', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNa::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.nA));
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNa::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNa::Name()" />*/
	name: function () {
		return "na";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNa::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNa::MinArgs()" />*/
	minArgs: function () {
		return 0;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNa::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNa::MaxArgs()" />*/
	maxArgs: function () {
		return 0;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNa::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionNa', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNa" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsBlank" />*/

$.ig.util.defType('UltraCalcFunctionIsBlank', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsBlank::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var value = numberStack.pop();
		return new $.ig.excel.ExcelCalcValue(value.isNull());
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsBlank::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsBlank::Name()" />*/
	name: function () {
		return "isblank";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsBlank::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsBlank::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsBlank::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsBlank::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsBlank::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionIsBlank', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsBlank" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsErr" />*/

$.ig.util.defType('UltraCalcFunctionIsErr', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsErr::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var value = numberStack.pop();
		return new $.ig.excel.ExcelCalcValue(value.isError() && value.toErrorValue().code() != $.ig.excel.ExcelCalcErrorCode.nA);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsErr::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsErr::Name()" />*/
	name: function () {
		return "iserr";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsErr::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsErr::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsErr::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsErr::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsErr::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionIsErr', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsErr" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsError" />*/

$.ig.util.defType('UltraCalcFunctionIsError', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsError::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var value = numberStack.pop();
		return new $.ig.excel.ExcelCalcValue(value.isError());
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsError::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsError::Name()" />*/
	name: function () {
		return "iserror";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsError::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsError::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsError::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsError::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsError::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionIsError', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsError" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsLogical" />*/

$.ig.util.defType('UltraCalcFunctionIsLogical', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsLogical::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var value = numberStack.pop();
		return new $.ig.excel.ExcelCalcValue(value.isBoolean());
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsLogical::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsLogical::Name()" />*/
	name: function () {
		return "islogical";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsLogical::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsLogical::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsLogical::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsLogical::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsLogical::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionIsLogical', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsLogical" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsNa" />*/

$.ig.util.defType('UltraCalcFunctionIsNa', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsNa::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var value = numberStack.pop();
		return new $.ig.excel.ExcelCalcValue(value.isError() && value.toErrorValue().code() == $.ig.excel.ExcelCalcErrorCode.nA);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsNa::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsNa::Name()" />*/
	name: function () {
		return "isna";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsNa::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsNa::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsNa::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsNa::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsNa::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionIsNa', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsNa" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsNonText" />*/

$.ig.util.defType('UltraCalcFunctionIsNonText', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsNonText::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var value = numberStack.pop();
		return new $.ig.excel.ExcelCalcValue(!value.isString());
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsNonText::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsNonText::Name()" />*/
	name: function () {
		return "isnontext";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsNonText::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsNonText::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsNonText::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsNonText::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsNonText::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionIsNonText', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsNonText" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsNumber" />*/

$.ig.util.defType('UltraCalcFunctionIsNumber', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsNumber::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var stackLevel = numberStack.count();
		var value = numberStack.pop();
		if ($.ig.excel.ExcelCalcValue.prototype._useExcelValueCompatibility) {
			if (value.isNull()) {
				return new $.ig.excel.ExcelCalcValue(false);
			}
		}
		var d;
		return new $.ig.excel.ExcelCalcValue((function () { var $ret = value._toDouble1(d); d = $ret.p0; return $ret.ret; }()));
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsNumber::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsNumber::Name()" />*/
	name: function () {
		return "isnumber";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsNumber::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsNumber::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsNumber::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsNumber::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsNumber::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionIsNumber', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsNumber" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsRef" />*/

$.ig.util.defType('UltraCalcFunctionIsRef', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsRef::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var value = numberStack.pop();
		return new $.ig.excel.ExcelCalcValue(value.isReference());
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsRef::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsRef::Name()" />*/
	name: function () {
		return "isref";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsRef::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsRef::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsRef::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsRef::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsRef::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionIsRef', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsRef" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsText" />*/

$.ig.util.defType('UltraCalcFunctionIsText', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsText::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var value = numberStack.pop();
		return new $.ig.excel.ExcelCalcValue(value.isString());
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsText::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsText::Name()" />*/
	name: function () {
		return "istext";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsText::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsText::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsText::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsText::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsText::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionIsText', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsText" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsEven" />*/

$.ig.util.defType('UltraCalcFunctionIsEven', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsEven::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var value = numberStack.pop();
		if (value.isError()) {
			return new $.ig.excel.ExcelCalcValue(value.toErrorValue());
		}
		var number;
		if (!(function () { var $ret = value._toDouble1(number); number = $ret.p0; return $ret.ret; }())) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		number = Math.floor(number);
		return new $.ig.excel.ExcelCalcValue(number % 2 == 0);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsEven::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsEven::Name()" />*/
	name: function () {
		return "iseven";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsEven::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsEven::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsEven::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsEven::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsEven::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionIsEven', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsEven" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsOdd" />*/

$.ig.util.defType('UltraCalcFunctionIsOdd', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsOdd::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var value = numberStack.pop();
		if (value.isError()) {
			return new $.ig.excel.ExcelCalcValue(value.toErrorValue());
		}
		var number;
		if (!(function () { var $ret = value._toDouble1(number); number = $ret.p0; return $ret.ret; }())) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		number = Math.floor(number);
		var remainder = $.ig.truncate((number % 2));
		return new $.ig.excel.ExcelCalcValue(1 == remainder || -1 == remainder);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsOdd::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsOdd::Name()" />*/
	name: function () {
		return "isodd";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsOdd::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsOdd::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsOdd::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsOdd::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsOdd::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionIsOdd', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsOdd" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIRR" />*/

$.ig.util.defType('UltraCalcFunctionIRR', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIRR::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var delta = 1E-07;
		var guess = 0.1;
		if (argumentCount == 2) {
			var guessArg = numberStack.pop();
			if (!(function () { var $ret = guessArg._toDouble1(guess); guess = $ret.p0; return $ret.ret; }())) {
				return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
			}
			if (Math.abs(guess) < delta) {
				guess = 0.1;
			}
		}
		guess += 1;
		var rangeArg = numberStack.pop();
		if (rangeArg._isArrayRaw() == false) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
		}
		var fElement = 0;
		var fElementPrime = 0;
		var element = 0;
		for (var iteration = 0; iteration < 20; ++iteration) {
			var firstValueLoop = true;
			var elementCount = 0;
			var hasPositiveValue = false;
			var hasNegativeValue = false;
			var arrayProxy = rangeArg.toArrayProxy();
			var en = arrayProxy.getEnumerator();
			while (en.moveNext()) {
				var value = en.current();
				if (!(function () { var $ret = value._toDouble1(element); element = $ret.p0; return $ret.ret; }())) {
					continue;
				}
				if (element < 0) {
					hasNegativeValue = true;
				} else if (0 < element) {
					hasPositiveValue = true;
				}
				elementCount++;
				if (firstValueLoop) {
					fElement = element;
					fElementPrime = 0;
					firstValueLoop = false;
				} else {
					fElementPrime = fElement + (fElementPrime * guess);
					fElement = element + (fElement * guess);
				}
			}
			if (elementCount < 2 || hasNegativeValue == false || hasPositiveValue == false) {
				return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
			}
			var nextGuess = fElement / fElementPrime;
			guess -= nextGuess;
			if (Math.abs(nextGuess) < delta) {
				return new $.ig.excel.ExcelCalcValue(guess - 1);
			}
			if (Math.abs(guess) < delta) {
				return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
			}
		}
		return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIRR::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIRR::CanParameterBeEnumerable(System.Int32)" />*/
	canParameterBeEnumerable: function (parameterIndex) {
		return parameterIndex == 0;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIRR::CanParameterBeEnumerable(System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIRR::Name()" />*/
	name: function () {
		return "irr";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIRR::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIRR::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIRR::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIRR::MaxArgs()" />*/
	maxArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIRR::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionIRR', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIRR" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRate" />*/

$.ig.util.defType('UltraCalcFunctionRate', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRate::calcFV(System.Double, System.Double, System.Double, System.Double, System.Int32, System.Double, System.Int32)" />*/
	_calcFV: function (rate, term, payment, pv, type, fv, sign) {
		var fvPrime = $.ig.UltraCalcFunctionFV.prototype._calculateFV(rate, term, payment, pv, type);
		fvPrime -= fv;
		sign = Math.sign(fvPrime);
		return {
			ret: Math.abs(fvPrime) < $.ig.UltraCalcFunctionRate.prototype.__cEPS,
			p6: sign
		};
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRate::calcFV(System.Double, System.Double, System.Double, System.Double, System.Int32, System.Double, System.Int32)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRate::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var $self = this;
		var fv = 0;
		var pv = 0;
		var pmt = 0;
		var term = 0;
		var iType = 0;
		var guess = 0.1;
		if (argumentCount < 3 || argumentCount > 6) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
		}
		if (argumentCount == 6 && !(function () { var $ret = numberStack.pop()._toDouble1(guess); guess = $ret.p0; return $ret.ret; }())) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		if (argumentCount >= 5) {
			iType = numberStack.pop()._toInt();
			if (iType < 0 || iType > 1) {
				return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
			}
		}
		if (argumentCount >= 4 && !(function () { var $ret = numberStack.pop()._toDouble1(fv); fv = $ret.p0; return $ret.ret; }())) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		if (argumentCount >= 3) {
			if (!(function () { var $ret = numberStack.pop()._toDouble1(pv); pv = $ret.p0; return $ret.ret; }()) || !(function () { var $ret = numberStack.pop()._toDouble1(pmt); pmt = $ret.p0; return $ret.ret; }()) || !(function () { var $ret = numberStack.pop()._toDouble1(term); term = $ret.p0; return $ret.ret; }())) {
				return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
			}
			if (term <= 0) {
				return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
			}
		}
		var initialSign = 0;
		if ((function () { var $ret = $self._calcFV(guess, term, pmt, pv, iType, fv, initialSign); initialSign = $ret.p6; return $ret.ret; }())) {
			return new $.ig.excel.ExcelCalcValue(guess);
		}
		var step = 0.0001;
		var upperBound = guess + step;
		var lowerBound = guess - step;
		var bFoundSignChange = false;
		for (var i = 0; i < $.ig.UltraCalcFunctionRate.prototype.__iTMAX && bFoundSignChange == false; ++i) {
			var nextSign = 0;
			if ((function () { var $ret = $self._calcFV(upperBound, term, pmt, pv, iType, fv, nextSign); nextSign = $ret.p6; return $ret.ret; }())) {
				return new $.ig.excel.ExcelCalcValue(upperBound);
			}
			if (nextSign != initialSign) {
				bFoundSignChange = true;
				lowerBound = upperBound - step;
				continue;
			}
			if (lowerBound > -1) {
				if ((function () { var $ret = $self._calcFV(lowerBound, term, pmt, pv, iType, fv, nextSign); nextSign = $ret.p6; return $ret.ret; }())) {
					return new $.ig.excel.ExcelCalcValue(lowerBound);
				}
				if (nextSign != initialSign) {
					bFoundSignChange = true;
					upperBound = lowerBound + step;
					continue;
				}
			}
			if ((i == 25) || (i == 50) || (i == 100)) {
				step = step * 10;
			}
			upperBound += step;
			lowerBound -= step;
		}
		if (bFoundSignChange == false) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		for (var i1 = 0; i1 < $.ig.UltraCalcFunctionRate.prototype.__iTMAX; ++i1) {
			guess = lowerBound + ((upperBound - lowerBound) / 2);
			var guessSign = 0;
			if ((function () { var $ret = $self._calcFV(guess, term, pmt, pv, iType, fv, guessSign); guessSign = $ret.p6; return $ret.ret; }())) {
				return new $.ig.excel.ExcelCalcValue(guess);
			}
			var nextSign1 = 0;
			var $ret = this._calcFV(upperBound, term, pmt, pv, iType, fv, nextSign1);
			nextSign1 = $ret.p6;
			if (guessSign == nextSign1) {
				upperBound = guess;
			} else {
				lowerBound = guess;
			}
		}
		return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRate::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRate::Name()" />*/
	name: function () {
		return "rate";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRate::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRate::MinArgs()" />*/
	minArgs: function () {
		return 3;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRate::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRate::MaxArgs()" />*/
	maxArgs: function () {
		return 6;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRate::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionRate', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRate" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsNull" />*/

$.ig.util.defType('UltraCalcFunctionIsNull', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsNull::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var value = numberStack.pop();
		if (value.isReference()) {
			value = value.toReference().value();
		}
		return new $.ig.excel.ExcelCalcValue(value.value() == null);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsNull::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsNull::Name()" />*/
	name: function () {
		return "isnull";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsNull::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsNull::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsNull::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsNull::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsNull::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionIsNull', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsNull" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNull" />*/

$.ig.util.defType('UltraCalcFunctionNull', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNull::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		return new $.ig.excel.ExcelCalcValue(null);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNull::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNull::Name()" />*/
	name: function () {
		return "null";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNull::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNull::MinArgs()" />*/
	minArgs: function () {
		return 0;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNull::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNull::MaxArgs()" />*/
	maxArgs: function () {
		return 0;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNull::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionNull', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNull" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsDBNull" />*/

$.ig.util.defType('UltraCalcFunctionIsDBNull', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsDBNull::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		return new $.ig.excel.ExcelCalcValue(numberStack.pop().isDBNull());
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsDBNull::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsDBNull::Name()" />*/
	name: function () {
		return "isdbnull";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsDBNull::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsDBNull::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsDBNull::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsDBNull::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsDBNull::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionIsDBNull', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIsDBNull" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDBNull" />*/

$.ig.util.defType('UltraCalcFunctionDBNull', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDBNull::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		return new $.ig.excel.ExcelCalcValue(null);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDBNull::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDBNull::Name()" />*/
	name: function () {
		return "dbnull";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDBNull::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDBNull::MinArgs()" />*/
	minArgs: function () {
		return 0;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDBNull::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDBNull::MaxArgs()" />*/
	maxArgs: function () {
		return 0;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDBNull::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionDBNull', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDBNull" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDateAdd" />*/

$.ig.util.defType('UltraCalcFunctionDateAdd', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDateAdd::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var date = numberStack.pop()._toDateTime1();
		var number;
		if (!(function () { var $ret = numberStack.pop()._toDouble1(number); number = $ret.p0; return $ret.ret; }())) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		var interval = numberStack.pop().toString().toLowerCase().trim([]);
		var result = $.ig.CalcManagerUtilities.prototype.dateAndTimeDateAdd1(interval, number, date);
		return new $.ig.excel.ExcelCalcValue(result);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDateAdd::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDateAdd::Name()" />*/
	name: function () {
		return "dateadd";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDateAdd::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDateAdd::MinArgs()" />*/
	minArgs: function () {
		return 3;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDateAdd::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDateAdd::MaxArgs()" />*/
	maxArgs: function () {
		return 3;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDateAdd::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionDateAdd', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDateAdd" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDateDiff" />*/

$.ig.util.defType('UltraCalcFunctionDateDiff', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDateDiff::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var val2 = numberStack.pop();
		var val1 = numberStack.pop();
		var interval = numberStack.pop().toString().toLowerCase().trim([]);
		if (val2.isNull() || val1.isNull()) {
			var error = new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num);
			return new $.ig.excel.ExcelCalcValue(error);
		}
		var date2 = val2._toDateTime1();
		var date1 = val1._toDateTime1();
		var result = $.ig.UltraCalcFunctionDateDiff.prototype._dateDiffInvariant1(numberStack._culture(), interval, date1, date2);
		return new $.ig.excel.ExcelCalcValue(result);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDateDiff::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDateDiff::Fix(System.Double)" />*/
	_fix: function (number) {
		if (number >= 0) {
			return Math.floor(number);
		}
		return -Math.floor(-number);
	}
	/*<EndMethod Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDateDiff::Fix(System.Double)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDateDiff::Name()" />*/
	name: function () {
		return "datediff";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDateDiff::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDateDiff::MinArgs()" />*/
	minArgs: function () {
		return 3;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDateDiff::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDateDiff::MaxArgs()" />*/
	maxArgs: function () {
		return 3;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDateDiff::MaxArgs()" />*/
	,
	/*<BeginMethod Name="Infragistics.FirstWeekOfYear Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDateDiff::GetFirstWeekOfYear(System.Globalization.CalendarWeekRule)" />*/
	_getFirstWeekOfYear: function (calendarWeekRule) {
		switch (calendarWeekRule) {
			case $.ig.CalendarWeekRule.prototype.firstFourDayWeek: return $.ig.excel.FirstWeekOfYear.firstFourDays;
			case $.ig.CalendarWeekRule.prototype.firstFullWeek: return $.ig.excel.FirstWeekOfYear.firstFullWeek;
			case $.ig.CalendarWeekRule.prototype.firstDay:
			default:
				return $.ig.excel.FirstWeekOfYear.jan1;
		}
	}
	/*<EndMethod Name="Infragistics.FirstWeekOfYear Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDateDiff::GetFirstWeekOfYear(System.Globalization.CalendarWeekRule)" />*/
	,
	/*<BeginMethod Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDateDiff::DateDiffInvariant(System.Globalization.CultureInfo, System.String, System.DateTime, System.DateTime)" />*/
	_dateDiffInvariant1: function (culture, interval, date1, date2) {
		var firstDayOfWeek = ((culture.dateTimeFormat().firstDayOfWeek()) + 1);
		var firstWeekOfYear = $.ig.UltraCalcFunctionDateDiff.prototype._getFirstWeekOfYear(culture.dateTimeFormat().calendarWeekRule());
		var result = $.ig.CalcManagerUtilities.prototype.dateAndTimeDateDiff1(interval, date1, date2, firstDayOfWeek, firstWeekOfYear);
		return result;
	}
	/*<EndMethod Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDateDiff::DateDiffInvariant(System.Globalization.CultureInfo, System.String, System.DateTime, System.DateTime)" />*/
	,
	/*<BeginMethod Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDateDiff::DateDiffInvariant(System.Globalization.CultureInfo, Infragistics.DateInterval, System.DateTime, System.DateTime)" />*/
	_dateDiffInvariant: function (culture, interval, date1, date2) {
		var firstDayOfWeek = ((culture.dateTimeFormat().firstDayOfWeek()) + 1);
		var firstWeekOfYear = $.ig.UltraCalcFunctionDateDiff.prototype._getFirstWeekOfYear(culture.dateTimeFormat().calendarWeekRule());
		var result = $.ig.CalcManagerUtilities.prototype.dateAndTimeDateDiff(interval, date1, date2, firstDayOfWeek, firstWeekOfYear);
		return result;
	}
	/*<EndMethod Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDateDiff::DateDiffInvariant(System.Globalization.CultureInfo, Infragistics.DateInterval, System.DateTime, System.DateTime)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionDateDiff', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDateDiff" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionChar" />*/

$.ig.util.defType('UltraCalcFunctionChar', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionChar::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var value = numberStack.pop();
		if (value.isError()) {
			return new $.ig.excel.ExcelCalcValue(value.toErrorValue());
		}
		var number = value._toInt321();
		return new $.ig.excel.ExcelCalcValue($.ig.Convert.prototype.toChar1(number));
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionChar::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionChar::Name()" />*/
	name: function () {
		return "char";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionChar::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionChar::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionChar::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionChar::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionChar::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionChar', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionChar" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCode" />*/

$.ig.util.defType('UltraCalcFunctionCode', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCode::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var value = numberStack.pop();
		if (value.isError()) {
			return new $.ig.excel.ExcelCalcValue(value.toErrorValue());
		}
		var text = value.toString();
		if (text == null || text.length == 0) {
			return new $.ig.excel.ExcelCalcValue(0);
		}
		return new $.ig.excel.ExcelCalcValue(text.charAt(0).charCodeAt(0));
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCode::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCode::Name()" />*/
	name: function () {
		return "code";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCode::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCode::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCode::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCode::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCode::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionCode', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCode" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFixed" />*/

$.ig.util.defType('UltraCalcFunctionFixed', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFixed::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var number = 0;
		var decimals = 2;
		var noCommas = false;
		var format = new $.ig.StringBuilder(1, 100);
		var value;
		if (2 < argumentCount) {
			value = numberStack.pop();
			if (value.isError()) {
				return new $.ig.excel.ExcelCalcValue(value.toErrorValue());
			}
			noCommas = value._toBoolean1();
		}
		if (1 < argumentCount) {
			value = numberStack.pop();
			if (value.isError()) {
				return new $.ig.excel.ExcelCalcValue(value.toErrorValue());
			}
			decimals = value._toInt();
		}
		value = numberStack.pop();
		if (value.isError()) {
			return new $.ig.excel.ExcelCalcValue(value.toErrorValue());
		}
		number = value._toDouble3();
		var retVal = number.toLocaleString(numberStack._culture().name(), { minimumFractionDigits: decimals, maximumFractionDigits: decimals, useGrouping: noCommas } );
		if (retVal == null || retVal.length == 0) {
			retVal = "0";
		}
		return new $.ig.excel.ExcelCalcValue(retVal);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFixed::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFixed::Name()" />*/
	name: function () {
		return "fixed";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFixed::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFixed::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFixed::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFixed::MaxArgs()" />*/
	maxArgs: function () {
		return 3;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFixed::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFixed::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFixed::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionFixed', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFixed" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionToday" />*/

$.ig.util.defType('UltraCalcFunctionToday', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionToday::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		return new $.ig.excel.ExcelCalcValue($.ig.Date.prototype.today());
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionToday::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionToday::Name()" />*/
	name: function () {
		return "today";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionToday::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionToday::MinArgs()" />*/
	minArgs: function () {
		return 0;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionToday::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionToday::MaxArgs()" />*/
	maxArgs: function () {
		return 0;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionToday::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionToday', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionToday" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionASinh" />*/

$.ig.util.defType('UltraCalcFunctionASinh', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionASinh::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var arg = numberStack.pop();
		if (arg.isError()) {
			return new $.ig.excel.ExcelCalcValue(arg.toErrorValue());
		}
		var x;
		if (!(function () { var $ret = arg._toDouble1(x); x = $ret.p0; return $ret.ret; }())) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		var arcsinh = Math.log(x + Math.sqrt((x * x) + 1));
		return new $.ig.excel.ExcelCalcValue(arcsinh);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionASinh::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionASinh::Name()" />*/
	name: function () {
		return "asinh";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionASinh::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionASinh::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionASinh::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionASinh::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionASinh::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionASinh::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionASinh::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionASinh', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionASinh" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionATanh" />*/

$.ig.util.defType('UltraCalcFunctionATanh', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionATanh::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var arg = numberStack.pop();
		if (arg.isError()) {
			return new $.ig.excel.ExcelCalcValue(arg.toErrorValue());
		}
		var x;
		if (!(function () { var $ret = arg._toDouble1(x); x = $ret.p0; return $ret.ret; }())) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		var arctanh;
		if (1 == x) {
			arctanh = Number.POSITIVE_INFINITY;
		} else if (-1 == x) {
			arctanh = Number.NEGATIVE_INFINITY;
		} else {
			arctanh = Math.log((1 + x) / (1 - x)) / 2;
		}
		return new $.ig.excel.ExcelCalcValue(arctanh);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionATanh::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionATanh::Name()" />*/
	name: function () {
		return "atanh";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionATanh::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionATanh::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionATanh::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionATanh::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionATanh::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionATanh::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionATanh::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionATanh', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionATanh" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionACosh" />*/

$.ig.util.defType('UltraCalcFunctionACosh', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionACosh::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var arg = numberStack.pop();
		if (arg.isError()) {
			return new $.ig.excel.ExcelCalcValue(arg.toErrorValue());
		}
		var x;
		if (!(function () { var $ret = arg._toDouble1(x); x = $ret.p0; return $ret.ret; }())) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		if (x < 1) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		var arccosh = Math.log(x + Math.sqrt((x * x) - 1));
		return new $.ig.excel.ExcelCalcValue(arccosh);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionACosh::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionACosh::Name()" />*/
	name: function () {
		return "acosh";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionACosh::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionACosh::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionACosh::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionACosh::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionACosh::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionACosh::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionACosh::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionACosh', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionACosh" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionEDate" />*/

$.ig.util.defType('UltraCalcFunctionEDate', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionEDate::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var numberOfMonths = numberStack.pop()._toDouble3();
		var date = $.ig.Date.prototype.getDate(numberStack.pop()._toDateTime1());
		date = $.ig.CalcManagerUtilities.prototype.dateAndTimeDateAdd($.ig.excel.DateInterval.month, numberOfMonths, date);
		return new $.ig.excel.ExcelCalcValue(date);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionEDate::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionEDate::Name()" />*/
	name: function () {
		return "edate";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionEDate::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionEDate::MinArgs()" />*/
	minArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionEDate::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionEDate::MaxArgs()" />*/
	maxArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionEDate::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionEDate', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionEDate" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionEOMonth" />*/

$.ig.util.defType('UltraCalcFunctionEOMonth', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionEOMonth::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var numberOfMonths = numberStack.pop()._toDouble3();
		var date = $.ig.Date.prototype.getDate(numberStack.pop()._toDateTime1());
		date = $.ig.CalcManagerUtilities.prototype.dateAndTimeDateAdd($.ig.excel.DateInterval.month, numberOfMonths, date);
		date = $.ig.Date.prototype.fromValues(date.getFullYear(), $.ig.Date.prototype.getMonth(date), $.ig.Date.prototype.daysInMonth(date.getFullYear(), $.ig.Date.prototype.getMonth(date)), 0, 0, 0, 0);
		return new $.ig.excel.ExcelCalcValue(date);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionEOMonth::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionEOMonth::Name()" />*/
	name: function () {
		return "eomonth";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionEOMonth::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionEOMonth::MinArgs()" />*/
	minArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionEOMonth::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionEOMonth::MaxArgs()" />*/
	maxArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionEOMonth::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionEOMonth', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionEOMonth" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionWeekDay" />*/

$.ig.util.defType('UltraCalcFunctionWeekDay', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionWeekDay::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var returnType = (argumentCount == 2) ? numberStack.pop()._toInt321() : 1;
		var date = $.ig.Date.prototype.getDate(numberStack.pop()._toDateTime1());
		if ($.ig.excel.ExcelCalcValue.prototype._useExcelFunctionCompatibility) {
			if (date <= $.ig.Date.prototype.fromValues(1900, 3, 1, 0, 0, 0, 0)) {
				date = $.ig.Date.prototype.addDays(date, -1);
			}
		}
		var dayOfWeek = date.getDay();
		var modifier;
		switch (returnType) {
			case 1:
				modifier = 1;
				break;
			case 2:
				modifier = (dayOfWeek != $.ig.DayOfWeek.prototype.sunday) ? 0 : 7;
				break;
			case 3:
				modifier = (dayOfWeek != $.ig.DayOfWeek.prototype.sunday) ? -1 : 6;
				break;
			default: return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		var dayOfWeekInt = dayOfWeek;
		dayOfWeekInt += modifier;
		return new $.ig.excel.ExcelCalcValue(dayOfWeekInt);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionWeekDay::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionWeekDay::Name()" />*/
	name: function () {
		return "weekday";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionWeekDay::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionWeekDay::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionWeekDay::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionWeekDay::MaxArgs()" />*/
	maxArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionWeekDay::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionWeekDay::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionWeekDay::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionWeekDay', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionWeekDay" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNetWorkDays" />*/

$.ig.util.defType('UltraCalcFunctionNetWorkDays', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNetWorkDays::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var holidayRefs = this._getArguments(numberStack, argumentCount - 2, true);
		var holidays;
		var errorValue;
		var success = (function () { var $ret = $.ig.UltraCalcFunctionWorkDay.prototype._getHolidayList(holidayRefs, holidays, errorValue); holidays = $ret.p1; errorValue = $ret.p2; return $ret.ret; }());
		if (success == false) {
			return errorValue;
		}
		var endDate = $.ig.Date.prototype.getDate(numberStack.pop()._toDateTime1());
		var startDate = $.ig.Date.prototype.getDate(numberStack.pop()._toDateTime1());
		var sign = 1;
		if (startDate > endDate) {
			sign = -1;
			var tempDate = startDate;
			startDate = endDate;
			endDate = tempDate;
		}
		var workDayCount = $.ig.UltraCalcFunctionDateDiff.prototype._dateDiffInvariant(numberStack._culture(), $.ig.excel.DateInterval.day, startDate, endDate);
		workDayCount += 1;
		if (workDayCount > 0) {
			var weeks = ($.ig.intDivide(workDayCount, 7));
			var days = (workDayCount % 7);
			workDayCount -= (weeks * 2);
			switch (startDate.getDay()) {
				case $.ig.DayOfWeek.prototype.monday:
				case $.ig.DayOfWeek.prototype.tuesday:
				case $.ig.DayOfWeek.prototype.wednesday:
				case $.ig.DayOfWeek.prototype.thursday:
				case $.ig.DayOfWeek.prototype.friday:
				case $.ig.DayOfWeek.prototype.saturday:
					var daysToCoverWeekend = 8 - startDate.getDay();
					if (days >= daysToCoverWeekend) {
						workDayCount -= Math.min(2, daysToCoverWeekend);
					} else if (days == (daysToCoverWeekend - 1)) {
						workDayCount -= Math.min(1, daysToCoverWeekend);
					}
					break;
				case $.ig.DayOfWeek.prototype.sunday:
					if (days >= 1) {
						workDayCount -= 1;
					}
					break;
				default:
					$.ig.CalcManagerUtilities.prototype.debugFail("Unknown DayOfWeek");
					break;
			}
			if (holidays != null) {
				var en = holidays.keys().getEnumerator();
				while (en.moveNext()) {
					var holiday = en.current();
					if (holiday >= startDate && holiday <= endDate) {
						workDayCount -= 1;
					}
				}
			}
			workDayCount *= sign;
		}
		return new $.ig.excel.ExcelCalcValue(workDayCount);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNetWorkDays::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNetWorkDays::CanParameterBeEnumerable(System.Int32)" />*/
	canParameterBeEnumerable: function (parameterIndex) {
		return parameterIndex == 2;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNetWorkDays::CanParameterBeEnumerable(System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNetWorkDays::Name()" />*/
	name: function () {
		return "networkdays";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNetWorkDays::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNetWorkDays::MinArgs()" />*/
	minArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNetWorkDays::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNetWorkDays::MaxArgs()" />*/
	maxArgs: function () {
		return 3;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNetWorkDays::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionNetWorkDays', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionNetWorkDays" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionWeekNum" />*/

$.ig.util.defType('UltraCalcFunctionWeekNum', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionWeekNum::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var returnType = (argumentCount == 2) ? numberStack.pop()._toInt321() : 1;
		var startingDayOfWeek;
		switch (returnType) {
			case 1:
				startingDayOfWeek = $.ig.DayOfWeek.prototype.sunday;
				break;
			case 2:
				startingDayOfWeek = $.ig.DayOfWeek.prototype.monday;
				break;
			default: return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		var date = $.ig.Date.prototype.getDate(numberStack.pop()._toDateTime1());
		var firstDayOfYear = $.ig.Date.prototype.fromValues(date.getFullYear(), 1, 1, 0, 0, 0, 0);
		var firstWeekStart = firstDayOfYear;
		while (firstWeekStart.getDay() != startingDayOfWeek) {
			firstWeekStart = $.ig.Date.prototype.addDays(firstWeekStart, 1);
		}
		var weekNum = ($.ig.intDivide(($.ig.util.timeSpanDays((date - firstWeekStart))), 7)) + 1;
		if (+firstDayOfYear != +firstWeekStart && date >= firstWeekStart) {
			weekNum += 1;
		}
		return new $.ig.excel.ExcelCalcValue(weekNum);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionWeekNum::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionWeekNum::Name()" />*/
	name: function () {
		return "weeknum";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionWeekNum::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionWeekNum::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionWeekNum::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionWeekNum::MaxArgs()" />*/
	maxArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionWeekNum::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionWeekNum::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return (isCreatedFromRegionReference == false);
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionWeekNum::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionWeekNum', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionWeekNum" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionWorkDay" />*/

$.ig.util.defType('UltraCalcFunctionWorkDay', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionWorkDay::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var holidayRefs = this._getArguments(numberStack, argumentCount - 2, true);
		var holidays;
		var errorValue;
		var success = (function () { var $ret = $.ig.UltraCalcFunctionWorkDay.prototype._getHolidayList(holidayRefs, holidays, errorValue); holidays = $ret.p1; errorValue = $ret.p2; return $ret.ret; }());
		if (success == false) {
			return errorValue;
		}
		var days = numberStack.pop()._toInt321();
		var startDate = $.ig.Date.prototype.getDate(numberStack.pop()._toDateTime1());
		var day = startDate;
		var targetWorkDays = Math.abs(days);
		var workdaysFound = 0;
		if (days != 0) {
			var increment = days < 0 ? -1 : 1;
			do {
				day = $.ig.Date.prototype.addDays(day, increment);
				workdaysFound += this._isWorkDay(day, holidays) ? 1 : 0;
			} while (workdaysFound < targetWorkDays);
		}
		return new $.ig.excel.ExcelCalcValue(day);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionWorkDay::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionWorkDay::CanParameterBeEnumerable(System.Int32)" />*/
	canParameterBeEnumerable: function (parameterIndex) {
		return parameterIndex == 2;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionWorkDay::CanParameterBeEnumerable(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionWorkDay::IsWorkDay(System.DateTime, System.Collections.Generic.Dictionary)" />*/
	_isWorkDay: function (workDay, holidays) {
		if ($.ig.UltraCalcFunctionWorkDay.prototype._isWeekend(workDay)) {
			return false;
		}
		if (holidays != null && holidays.containsKey(workDay)) {
			return false;
		}
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionWorkDay::IsWorkDay(System.DateTime, System.Collections.Generic.Dictionary)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionWorkDay::Name()" />*/
	name: function () {
		return "workday";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionWorkDay::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionWorkDay::MinArgs()" />*/
	minArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionWorkDay::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionWorkDay::MaxArgs()" />*/
	maxArgs: function () {
		return 3;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionWorkDay::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionWorkDay::GetHolidayList(, System.Collections.Generic.Dictionary, Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue)" />*/
	_getHolidayList: function (holidayRefs, holidays, errorValue) {
		if (holidayRefs.length > 0) {
			holidays = new $.ig.Dictionary$2($.ig.Date.prototype.$type, $.ig.Object.prototype.$type, 1, holidayRefs.length);
			for (var i = 0; i < holidayRefs.length; i++) {
				var holidayRef = holidayRefs[i];
				if (holidayRef.isError()) {
					errorValue = new $.ig.excel.ExcelCalcValue(holidayRef.toErrorValue());
					return {
						ret: false,
						p1: holidays,
						p2: errorValue
					};
				}
				var holiday = $.ig.Date.prototype.getDate(holidayRef._toDateTime1());
				if ($.ig.UltraCalcFunctionWorkDay.prototype._isWeekend(holiday) == false) {
					if (holidays.containsKey(holiday) == false) {
						holidays.add(holiday, null);
					}
				}
			}
		} else {
			holidays = null;
		}
		errorValue = null;
		return {
			ret: true,
			p1: holidays,
			p2: errorValue
		};
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionWorkDay::GetHolidayList(, System.Collections.Generic.Dictionary, Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionWorkDay::IsWeekend(System.DateTime)" />*/
	_isWeekend: function (date) {
		return $.ig.UltraCalcFunctionWorkDay.prototype._isWeekend1(date.getDay());
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionWorkDay::IsWeekend(System.DateTime)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionWorkDay::IsWeekend(System.DayOfWeek)" />*/
	_isWeekend1: function (dayOfWeek) {
		return dayOfWeek == $.ig.DayOfWeek.prototype.saturday || dayOfWeek == $.ig.DayOfWeek.prototype.sunday;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionWorkDay::IsWeekend(System.DayOfWeek)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionWorkDay::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return (isCreatedFromRegionReference == false);
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionWorkDay::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionWorkDay', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionWorkDay" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDec2XBase" />*/

$.ig.util.defType('UltraCalcFunctionDec2XBase', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDec2XBase::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var minPlaces = 0;
		if (argumentCount == 2) {
			var places = numberStack.pop()._toInt321();
			if (places <= 0) {
				return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
			} else {
				minPlaces = places;
			}
		}
		var numberArg = numberStack.pop();
		if (numberArg.isError()) {
			return new $.ig.excel.ExcelCalcValue(numberArg.toErrorValue());
		}
		var number = numberArg._toInt641();
		if (number < this._minNumber() || number > this._maxNumber()) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		var convertedString = $.ig.UltraCalcFunctionDec2XBase.prototype._convertToNumberSystem(number, this._numberSystem(), this._minNumber(), this._maxNumber());
		if (minPlaces > 0) {
			if (convertedString.length < 10 && convertedString.length > minPlaces) {
				return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
			}
		} else {
			minPlaces = 1;
		}
		while (convertedString.length < minPlaces) {
			convertedString = $.ig.util.stringFormat("{0}{1}", "0", convertedString);
		}
		return new $.ig.excel.ExcelCalcValue(convertedString);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDec2XBase::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDec2XBase::MinNumber()" />*/
	_minNumber: function () {
	}
	/*<EndProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDec2XBase::MinNumber()" />*/
	,
	/*<BeginProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDec2XBase::MaxNumber()" />*/
	_maxNumber: function () {
	}
	/*<EndProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDec2XBase::MaxNumber()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDec2XBase::NumberSystem()" />*/
	_numberSystem: function () {
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDec2XBase::NumberSystem()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDec2XBase::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDec2XBase::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDec2XBase::MaxArgs()" />*/
	maxArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDec2XBase::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDec2XBase::ConvertToNumberSystem(System.Int64, System.Int32, System.Int64, System.Int64)" />*/
	_convertToNumberSystem: function (number, numberSystem, minNumber, maxNumber) {
		var isNegative = false;
		if (number < 0) {
			number -= minNumber;
			isNegative = true;
		}
		number &= maxNumber;
		if (isNegative) {
			number |= (-minNumber);
		}
		var convertedString = String.empty();
		if (number == 0) {
			convertedString = "0";
		}
		while (number > 0) {
			var part = number % numberSystem;
			var partString;
			if (part < 10) {
				partString = part.toString();
			} else {
				part = part - 10;
				partString = (String.fromCharCode((part + 65))).toString();
			}
			convertedString = $.ig.util.stringFormat("{0}{1}", partString, convertedString);
			number = $.ig.intDivide(number, numberSystem);
		}
		return convertedString;
	}
	/*<EndMethod Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDec2XBase::ConvertToNumberSystem(System.Int64, System.Int32, System.Int64, System.Int64)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionDec2XBase', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDec2XBase" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDec2Bin" />*/

$.ig.util.defType('UltraCalcFunctionDec2Bin', 'UltraCalcFunctionDec2XBase', {
	init: function () {
		$.ig.UltraCalcFunctionDec2XBase.prototype.init.call(this);
	},
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDec2Bin::Name()" />*/
	name: function () {
		return "dec2bin";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDec2Bin::Name()" />*/
	,
	/*<BeginProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDec2Bin::MinNumber()" />*/
	_minNumber: function () {
		return $.ig.UltraCalcFunctionDec2XBase.prototype._minNumberBin;
	}
	/*<EndProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDec2Bin::MinNumber()" />*/
	,
	/*<BeginProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDec2Bin::MaxNumber()" />*/
	_maxNumber: function () {
		return $.ig.UltraCalcFunctionDec2XBase.prototype._maxNumberBin;
	}
	/*<EndProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDec2Bin::MaxNumber()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDec2Bin::NumberSystem()" />*/
	_numberSystem: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDec2Bin::NumberSystem()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionDec2Bin', $.ig.UltraCalcFunctionDec2XBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDec2Bin" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDec2Hex" />*/

$.ig.util.defType('UltraCalcFunctionDec2Hex', 'UltraCalcFunctionDec2XBase', {
	init: function () {
		$.ig.UltraCalcFunctionDec2XBase.prototype.init.call(this);
	},
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDec2Hex::Name()" />*/
	name: function () {
		return "dec2hex";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDec2Hex::Name()" />*/
	,
	/*<BeginProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDec2Hex::MinNumber()" />*/
	_minNumber: function () {
		return $.ig.UltraCalcFunctionDec2XBase.prototype._minNumberHex;
	}
	/*<EndProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDec2Hex::MinNumber()" />*/
	,
	/*<BeginProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDec2Hex::MaxNumber()" />*/
	_maxNumber: function () {
		return $.ig.UltraCalcFunctionDec2XBase.prototype._maxNumberHex;
	}
	/*<EndProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDec2Hex::MaxNumber()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDec2Hex::NumberSystem()" />*/
	_numberSystem: function () {
		return 16;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDec2Hex::NumberSystem()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionDec2Hex', $.ig.UltraCalcFunctionDec2XBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDec2Hex" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDec2Oct" />*/

$.ig.util.defType('UltraCalcFunctionDec2Oct', 'UltraCalcFunctionDec2XBase', {
	init: function () {
		$.ig.UltraCalcFunctionDec2XBase.prototype.init.call(this);
	},
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDec2Oct::Name()" />*/
	name: function () {
		return "dec2oct";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDec2Oct::Name()" />*/
	,
	/*<BeginProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDec2Oct::MinNumber()" />*/
	_minNumber: function () {
		return $.ig.UltraCalcFunctionDec2XBase.prototype._minNumberOct;
	}
	/*<EndProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDec2Oct::MinNumber()" />*/
	,
	/*<BeginProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDec2Oct::MaxNumber()" />*/
	_maxNumber: function () {
		return $.ig.UltraCalcFunctionDec2XBase.prototype._maxNumberOct;
	}
	/*<EndProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDec2Oct::MaxNumber()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDec2Oct::NumberSystem()" />*/
	_numberSystem: function () {
		return 8;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDec2Oct::NumberSystem()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionDec2Oct', $.ig.UltraCalcFunctionDec2XBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDec2Oct" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionXBase2Dec" />*/

$.ig.util.defType('UltraCalcFunctionXBase2Dec', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionXBase2Dec::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var $self = this;
		var numberArg = numberStack.pop();
		if (numberArg.isError()) {
			return new $.ig.excel.ExcelCalcValue(numberArg.toErrorValue());
		}
		var number = numberArg.toString();
		if (number.length > this._maxLength()) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		var error;
		var value = (function () { var $ret = $.ig.UltraCalcFunctionXBase2Dec.prototype._convertFromNumberSystem(numberStack._culture(), number, $self._numberSystem(), $self._minNumber(), $self._maxNumber(), error); error = $ret.p5; return $ret.ret; }());
		if (null != error) {
			return new $.ig.excel.ExcelCalcValue(error);
		}
		return new $.ig.excel.ExcelCalcValue(value);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionXBase2Dec::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionXBase2Dec::MinNumber()" />*/
	_minNumber: function () {
	}
	/*<EndProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionXBase2Dec::MinNumber()" />*/
	,
	/*<BeginProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionXBase2Dec::MaxNumber()" />*/
	_maxNumber: function () {
	}
	/*<EndProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionXBase2Dec::MaxNumber()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionXBase2Dec::NumberSystem()" />*/
	_numberSystem: function () {
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionXBase2Dec::NumberSystem()" />*/
	,
	/*<BeginProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionXBase2Dec::MaxLength()" />*/
	_maxLength: function () {
	}
	/*<EndProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionXBase2Dec::MaxLength()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionXBase2Dec::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionXBase2Dec::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionXBase2Dec::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionXBase2Dec::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionXBase2Dec::ConvertFromNumberSystem(System.Globalization.CultureInfo, System.String, System.Int32, System.Int64, System.Int64, Infragistics.Documents.Excel.CalcEngine.ExcelCalcErrorValue)" />*/
	_convertFromNumberSystem: function (culture, number, numberSystem, minNumber, maxNumber, error) {
		error = null;
		number = number.trim([]);
		var total = 0;
		var charCount = number.length;
		var chars = $.ig.util.toCharArray(number);
		var multiplier = 1;
		var errorChar = String.fromCharCode(0);
		for (var i = charCount - 1; i >= 0; i--) {
			var c = chars[i];
			if (c == '-') {
				continue;
			}
			var digit;
			var success = (function () { var $ret = $.ig.util.tryParseInt64_2(c.toString(), $.ig.NumberStyles.prototype.floatNumber | $.ig.NumberStyles.prototype.allowThousands, culture, digit); digit = $ret.p3; return $ret.ret; }());
			if (success == false) {
				digit = (c.charCodeAt(0)) - 65;
				digit += 10;
			}
			if (digit >= numberSystem) {
				errorChar = c;
				continue;
			}
			total += digit * multiplier;
			multiplier *= numberSystem;
		}
		if (0 != errorChar.charCodeAt(0)) {
			error = new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num, $.ig.excel.locale.getString("Error_InvalidNumberSystemDigit", [ errorChar, number, numberSystem ]));
			return {
				ret: 0,
				p5: error
			};
		}
		if (maxNumber < total) {
			total -= (maxNumber - minNumber + 1);
		}
		return {
			ret: total,
			p5: error
		};
	}
	/*<EndMethod Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionXBase2Dec::ConvertFromNumberSystem(System.Globalization.CultureInfo, System.String, System.Int32, System.Int64, System.Int64, Infragistics.Documents.Excel.CalcEngine.ExcelCalcErrorValue)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionXBase2Dec::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return (isCreatedFromRegionReference == false);
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionXBase2Dec::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionXBase2Dec', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionXBase2Dec" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBin2Dec" />*/

$.ig.util.defType('UltraCalcFunctionBin2Dec', 'UltraCalcFunctionXBase2Dec', {
	init: function () {
		$.ig.UltraCalcFunctionXBase2Dec.prototype.init.call(this);
	},
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBin2Dec::Name()" />*/
	name: function () {
		return "bin2dec";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBin2Dec::Name()" />*/
	,
	/*<BeginProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBin2Dec::MinNumber()" />*/
	_minNumber: function () {
		return $.ig.UltraCalcFunctionDec2XBase.prototype._minNumberBin;
	}
	/*<EndProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBin2Dec::MinNumber()" />*/
	,
	/*<BeginProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBin2Dec::MaxNumber()" />*/
	_maxNumber: function () {
		return $.ig.UltraCalcFunctionDec2XBase.prototype._maxNumberBin;
	}
	/*<EndProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBin2Dec::MaxNumber()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBin2Dec::NumberSystem()" />*/
	_numberSystem: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBin2Dec::NumberSystem()" />*/
	,
	/*<BeginProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBin2Dec::MaxLength()" />*/
	_maxLength: function () {
		return 10;
	}
	/*<EndProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBin2Dec::MaxLength()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionBin2Dec', $.ig.UltraCalcFunctionXBase2Dec.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBin2Dec" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHex2Dec" />*/

$.ig.util.defType('UltraCalcFunctionHex2Dec', 'UltraCalcFunctionXBase2Dec', {
	init: function () {
		$.ig.UltraCalcFunctionXBase2Dec.prototype.init.call(this);
	},
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHex2Dec::Name()" />*/
	name: function () {
		return "hex2dec";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHex2Dec::Name()" />*/
	,
	/*<BeginProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHex2Dec::MinNumber()" />*/
	_minNumber: function () {
		return $.ig.UltraCalcFunctionDec2XBase.prototype._minNumberHex;
	}
	/*<EndProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHex2Dec::MinNumber()" />*/
	,
	/*<BeginProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHex2Dec::MaxNumber()" />*/
	_maxNumber: function () {
		return $.ig.UltraCalcFunctionDec2XBase.prototype._maxNumberHex;
	}
	/*<EndProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHex2Dec::MaxNumber()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHex2Dec::NumberSystem()" />*/
	_numberSystem: function () {
		return 16;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHex2Dec::NumberSystem()" />*/
	,
	/*<BeginProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHex2Dec::MaxLength()" />*/
	_maxLength: function () {
		return 10;
	}
	/*<EndProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHex2Dec::MaxLength()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionHex2Dec', $.ig.UltraCalcFunctionXBase2Dec.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHex2Dec" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOct2Dec" />*/

$.ig.util.defType('UltraCalcFunctionOct2Dec', 'UltraCalcFunctionXBase2Dec', {
	init: function () {
		$.ig.UltraCalcFunctionXBase2Dec.prototype.init.call(this);
	},
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOct2Dec::Name()" />*/
	name: function () {
		return "oct2dec";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOct2Dec::Name()" />*/
	,
	/*<BeginProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOct2Dec::MinNumber()" />*/
	_minNumber: function () {
		return $.ig.UltraCalcFunctionDec2XBase.prototype._minNumberOct;
	}
	/*<EndProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOct2Dec::MinNumber()" />*/
	,
	/*<BeginProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOct2Dec::MaxNumber()" />*/
	_maxNumber: function () {
		return $.ig.UltraCalcFunctionDec2XBase.prototype._maxNumberOct;
	}
	/*<EndProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOct2Dec::MaxNumber()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOct2Dec::NumberSystem()" />*/
	_numberSystem: function () {
		return 8;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOct2Dec::NumberSystem()" />*/
	,
	/*<BeginProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOct2Dec::MaxLength()" />*/
	_maxLength: function () {
		return 10;
	}
	/*<EndProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOct2Dec::MaxLength()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionOct2Dec', $.ig.UltraCalcFunctionXBase2Dec.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOct2Dec" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionXBase2XBase" />*/

$.ig.util.defType('UltraCalcFunctionXBase2XBase', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionXBase2XBase::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var $self = this;
		var minPlaces = 0;
		if (argumentCount == 2) {
			var places = numberStack.pop()._toInt321();
			if (places <= 0) {
				return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
			} else {
				minPlaces = places;
			}
		}
		var numberArg = numberStack.pop();
		if (numberArg.isError()) {
			return new $.ig.excel.ExcelCalcValue(numberArg.toErrorValue());
		}
		var number = numberArg.toString();
		if (number.length > this._maxLength()) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		var error;
		var decimalValue = (function () { var $ret = $.ig.UltraCalcFunctionXBase2Dec.prototype._convertFromNumberSystem(numberStack._culture(), number, $self._originalNumberSystem(), $self._originalMinNumber(), $self._originalMaxNumber(), error); error = $ret.p5; return $ret.ret; }());
		if (null != error) {
			return new $.ig.excel.ExcelCalcValue(error);
		}
		if (decimalValue < this._newMinNumber() || this._newMaxNumber() < decimalValue) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		var convertedString = $.ig.UltraCalcFunctionDec2XBase.prototype._convertToNumberSystem(decimalValue, this._newNumberSystem(), this._newMinNumber(), this._newMaxNumber());
		if (minPlaces > 0) {
			if (convertedString.length < 10 && convertedString.length > minPlaces) {
				return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
			}
		} else {
			minPlaces = 1;
		}
		while (convertedString.length < minPlaces) {
			convertedString = $.ig.util.stringFormat("{0}{1}", "0", convertedString);
		}
		return new $.ig.excel.ExcelCalcValue(convertedString);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionXBase2XBase::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionXBase2XBase::OriginalMinNumber()" />*/
	_originalMinNumber: function () {
	}
	/*<EndProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionXBase2XBase::OriginalMinNumber()" />*/
	,
	/*<BeginProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionXBase2XBase::OriginalMaxNumber()" />*/
	_originalMaxNumber: function () {
	}
	/*<EndProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionXBase2XBase::OriginalMaxNumber()" />*/
	,
	/*<BeginProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionXBase2XBase::NewMinNumber()" />*/
	_newMinNumber: function () {
	}
	/*<EndProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionXBase2XBase::NewMinNumber()" />*/
	,
	/*<BeginProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionXBase2XBase::NewMaxNumber()" />*/
	_newMaxNumber: function () {
	}
	/*<EndProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionXBase2XBase::NewMaxNumber()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionXBase2XBase::OriginalNumberSystem()" />*/
	_originalNumberSystem: function () {
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionXBase2XBase::OriginalNumberSystem()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionXBase2XBase::NewNumberSystem()" />*/
	_newNumberSystem: function () {
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionXBase2XBase::NewNumberSystem()" />*/
	,
	/*<BeginProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionXBase2XBase::MaxLength()" />*/
	_maxLength: function () {
	}
	/*<EndProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionXBase2XBase::MaxLength()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionXBase2XBase::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionXBase2XBase::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionXBase2XBase::MaxArgs()" />*/
	maxArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionXBase2XBase::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionXBase2XBase', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionXBase2XBase" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBin2Oct" />*/

$.ig.util.defType('UltraCalcFunctionBin2Oct', 'UltraCalcFunctionXBase2XBase', {
	init: function () {
		$.ig.UltraCalcFunctionXBase2XBase.prototype.init.call(this);
	},
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBin2Oct::Name()" />*/
	name: function () {
		return "bin2oct";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBin2Oct::Name()" />*/
	,
	/*<BeginProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBin2Oct::OriginalMinNumber()" />*/
	_originalMinNumber: function () {
		return $.ig.UltraCalcFunctionDec2XBase.prototype._minNumberBin;
	}
	/*<EndProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBin2Oct::OriginalMinNumber()" />*/
	,
	/*<BeginProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBin2Oct::OriginalMaxNumber()" />*/
	_originalMaxNumber: function () {
		return $.ig.UltraCalcFunctionDec2XBase.prototype._maxNumberBin;
	}
	/*<EndProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBin2Oct::OriginalMaxNumber()" />*/
	,
	/*<BeginProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBin2Oct::NewMinNumber()" />*/
	_newMinNumber: function () {
		return $.ig.UltraCalcFunctionDec2XBase.prototype._minNumberOct;
	}
	/*<EndProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBin2Oct::NewMinNumber()" />*/
	,
	/*<BeginProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBin2Oct::NewMaxNumber()" />*/
	_newMaxNumber: function () {
		return $.ig.UltraCalcFunctionDec2XBase.prototype._maxNumberOct;
	}
	/*<EndProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBin2Oct::NewMaxNumber()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBin2Oct::OriginalNumberSystem()" />*/
	_originalNumberSystem: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBin2Oct::OriginalNumberSystem()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBin2Oct::NewNumberSystem()" />*/
	_newNumberSystem: function () {
		return 8;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBin2Oct::NewNumberSystem()" />*/
	,
	/*<BeginProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBin2Oct::MaxLength()" />*/
	_maxLength: function () {
		return 10;
	}
	/*<EndProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBin2Oct::MaxLength()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionBin2Oct', $.ig.UltraCalcFunctionXBase2XBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBin2Oct" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBin2Hex" />*/

$.ig.util.defType('UltraCalcFunctionBin2Hex', 'UltraCalcFunctionXBase2XBase', {
	init: function () {
		$.ig.UltraCalcFunctionXBase2XBase.prototype.init.call(this);
	},
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBin2Hex::Name()" />*/
	name: function () {
		return "bin2hex";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBin2Hex::Name()" />*/
	,
	/*<BeginProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBin2Hex::OriginalMinNumber()" />*/
	_originalMinNumber: function () {
		return $.ig.UltraCalcFunctionDec2XBase.prototype._minNumberBin;
	}
	/*<EndProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBin2Hex::OriginalMinNumber()" />*/
	,
	/*<BeginProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBin2Hex::OriginalMaxNumber()" />*/
	_originalMaxNumber: function () {
		return $.ig.UltraCalcFunctionDec2XBase.prototype._maxNumberBin;
	}
	/*<EndProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBin2Hex::OriginalMaxNumber()" />*/
	,
	/*<BeginProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBin2Hex::NewMinNumber()" />*/
	_newMinNumber: function () {
		return $.ig.UltraCalcFunctionDec2XBase.prototype._minNumberHex;
	}
	/*<EndProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBin2Hex::NewMinNumber()" />*/
	,
	/*<BeginProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBin2Hex::NewMaxNumber()" />*/
	_newMaxNumber: function () {
		return $.ig.UltraCalcFunctionDec2XBase.prototype._maxNumberHex;
	}
	/*<EndProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBin2Hex::NewMaxNumber()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBin2Hex::OriginalNumberSystem()" />*/
	_originalNumberSystem: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBin2Hex::OriginalNumberSystem()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBin2Hex::NewNumberSystem()" />*/
	_newNumberSystem: function () {
		return 16;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBin2Hex::NewNumberSystem()" />*/
	,
	/*<BeginProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBin2Hex::MaxLength()" />*/
	_maxLength: function () {
		return 10;
	}
	/*<EndProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBin2Hex::MaxLength()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionBin2Hex', $.ig.UltraCalcFunctionXBase2XBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBin2Hex" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOct2Bin" />*/

$.ig.util.defType('UltraCalcFunctionOct2Bin', 'UltraCalcFunctionXBase2XBase', {
	init: function () {
		$.ig.UltraCalcFunctionXBase2XBase.prototype.init.call(this);
	},
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOct2Bin::Name()" />*/
	name: function () {
		return "oct2bin";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOct2Bin::Name()" />*/
	,
	/*<BeginProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOct2Bin::OriginalMinNumber()" />*/
	_originalMinNumber: function () {
		return $.ig.UltraCalcFunctionDec2XBase.prototype._minNumberOct;
	}
	/*<EndProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOct2Bin::OriginalMinNumber()" />*/
	,
	/*<BeginProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOct2Bin::OriginalMaxNumber()" />*/
	_originalMaxNumber: function () {
		return $.ig.UltraCalcFunctionDec2XBase.prototype._maxNumberOct;
	}
	/*<EndProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOct2Bin::OriginalMaxNumber()" />*/
	,
	/*<BeginProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOct2Bin::NewMinNumber()" />*/
	_newMinNumber: function () {
		return $.ig.UltraCalcFunctionDec2XBase.prototype._minNumberBin;
	}
	/*<EndProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOct2Bin::NewMinNumber()" />*/
	,
	/*<BeginProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOct2Bin::NewMaxNumber()" />*/
	_newMaxNumber: function () {
		return $.ig.UltraCalcFunctionDec2XBase.prototype._maxNumberBin;
	}
	/*<EndProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOct2Bin::NewMaxNumber()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOct2Bin::OriginalNumberSystem()" />*/
	_originalNumberSystem: function () {
		return 8;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOct2Bin::OriginalNumberSystem()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOct2Bin::NewNumberSystem()" />*/
	_newNumberSystem: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOct2Bin::NewNumberSystem()" />*/
	,
	/*<BeginProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOct2Bin::MaxLength()" />*/
	_maxLength: function () {
		return 10;
	}
	/*<EndProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOct2Bin::MaxLength()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionOct2Bin', $.ig.UltraCalcFunctionXBase2XBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOct2Bin" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOct2Hex" />*/

$.ig.util.defType('UltraCalcFunctionOct2Hex', 'UltraCalcFunctionXBase2XBase', {
	init: function () {
		$.ig.UltraCalcFunctionXBase2XBase.prototype.init.call(this);
	},
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOct2Hex::Name()" />*/
	name: function () {
		return "oct2hex";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOct2Hex::Name()" />*/
	,
	/*<BeginProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOct2Hex::OriginalMinNumber()" />*/
	_originalMinNumber: function () {
		return $.ig.UltraCalcFunctionDec2XBase.prototype._minNumberOct;
	}
	/*<EndProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOct2Hex::OriginalMinNumber()" />*/
	,
	/*<BeginProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOct2Hex::OriginalMaxNumber()" />*/
	_originalMaxNumber: function () {
		return $.ig.UltraCalcFunctionDec2XBase.prototype._maxNumberOct;
	}
	/*<EndProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOct2Hex::OriginalMaxNumber()" />*/
	,
	/*<BeginProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOct2Hex::NewMinNumber()" />*/
	_newMinNumber: function () {
		return $.ig.UltraCalcFunctionDec2XBase.prototype._minNumberHex;
	}
	/*<EndProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOct2Hex::NewMinNumber()" />*/
	,
	/*<BeginProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOct2Hex::NewMaxNumber()" />*/
	_newMaxNumber: function () {
		return $.ig.UltraCalcFunctionDec2XBase.prototype._maxNumberHex;
	}
	/*<EndProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOct2Hex::NewMaxNumber()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOct2Hex::OriginalNumberSystem()" />*/
	_originalNumberSystem: function () {
		return 8;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOct2Hex::OriginalNumberSystem()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOct2Hex::NewNumberSystem()" />*/
	_newNumberSystem: function () {
		return 16;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOct2Hex::NewNumberSystem()" />*/
	,
	/*<BeginProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOct2Hex::MaxLength()" />*/
	_maxLength: function () {
		return 10;
	}
	/*<EndProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOct2Hex::MaxLength()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionOct2Hex', $.ig.UltraCalcFunctionXBase2XBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOct2Hex" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHex2Bin" />*/

$.ig.util.defType('UltraCalcFunctionHex2Bin', 'UltraCalcFunctionXBase2XBase', {
	init: function () {
		$.ig.UltraCalcFunctionXBase2XBase.prototype.init.call(this);
	},
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHex2Bin::Name()" />*/
	name: function () {
		return "hex2bin";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHex2Bin::Name()" />*/
	,
	/*<BeginProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHex2Bin::OriginalMinNumber()" />*/
	_originalMinNumber: function () {
		return $.ig.UltraCalcFunctionDec2XBase.prototype._minNumberHex;
	}
	/*<EndProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHex2Bin::OriginalMinNumber()" />*/
	,
	/*<BeginProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHex2Bin::OriginalMaxNumber()" />*/
	_originalMaxNumber: function () {
		return $.ig.UltraCalcFunctionDec2XBase.prototype._maxNumberHex;
	}
	/*<EndProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHex2Bin::OriginalMaxNumber()" />*/
	,
	/*<BeginProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHex2Bin::NewMinNumber()" />*/
	_newMinNumber: function () {
		return $.ig.UltraCalcFunctionDec2XBase.prototype._minNumberBin;
	}
	/*<EndProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHex2Bin::NewMinNumber()" />*/
	,
	/*<BeginProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHex2Bin::NewMaxNumber()" />*/
	_newMaxNumber: function () {
		return $.ig.UltraCalcFunctionDec2XBase.prototype._maxNumberBin;
	}
	/*<EndProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHex2Bin::NewMaxNumber()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHex2Bin::OriginalNumberSystem()" />*/
	_originalNumberSystem: function () {
		return 16;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHex2Bin::OriginalNumberSystem()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHex2Bin::NewNumberSystem()" />*/
	_newNumberSystem: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHex2Bin::NewNumberSystem()" />*/
	,
	/*<BeginProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHex2Bin::MaxLength()" />*/
	_maxLength: function () {
		return 10;
	}
	/*<EndProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHex2Bin::MaxLength()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionHex2Bin', $.ig.UltraCalcFunctionXBase2XBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHex2Bin" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHex2Oct" />*/

$.ig.util.defType('UltraCalcFunctionHex2Oct', 'UltraCalcFunctionXBase2XBase', {
	init: function () {
		$.ig.UltraCalcFunctionXBase2XBase.prototype.init.call(this);
	},
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHex2Oct::Name()" />*/
	name: function () {
		return "hex2oct";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHex2Oct::Name()" />*/
	,
	/*<BeginProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHex2Oct::OriginalMinNumber()" />*/
	_originalMinNumber: function () {
		return $.ig.UltraCalcFunctionDec2XBase.prototype._minNumberHex;
	}
	/*<EndProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHex2Oct::OriginalMinNumber()" />*/
	,
	/*<BeginProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHex2Oct::OriginalMaxNumber()" />*/
	_originalMaxNumber: function () {
		return $.ig.UltraCalcFunctionDec2XBase.prototype._maxNumberHex;
	}
	/*<EndProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHex2Oct::OriginalMaxNumber()" />*/
	,
	/*<BeginProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHex2Oct::NewMinNumber()" />*/
	_newMinNumber: function () {
		return $.ig.UltraCalcFunctionDec2XBase.prototype._minNumberOct;
	}
	/*<EndProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHex2Oct::NewMinNumber()" />*/
	,
	/*<BeginProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHex2Oct::NewMaxNumber()" />*/
	_newMaxNumber: function () {
		return $.ig.UltraCalcFunctionDec2XBase.prototype._maxNumberOct;
	}
	/*<EndProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHex2Oct::NewMaxNumber()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHex2Oct::OriginalNumberSystem()" />*/
	_originalNumberSystem: function () {
		return 16;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHex2Oct::OriginalNumberSystem()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHex2Oct::NewNumberSystem()" />*/
	_newNumberSystem: function () {
		return 8;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHex2Oct::NewNumberSystem()" />*/
	,
	/*<BeginProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHex2Oct::MaxLength()" />*/
	_maxLength: function () {
		return 10;
	}
	/*<EndProperty Name="System.Int64 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHex2Oct::MaxLength()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionHex2Oct', $.ig.UltraCalcFunctionXBase2XBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHex2Oct" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConvert" />*/

$.ig.util.defType('UltraCalcFunctionConvert', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConvert::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var toUnit = numberStack.pop().toString();
		var fromUnit = numberStack.pop().toString();
		var arg = numberStack.pop();
		if (arg.isError()) {
			return new $.ig.excel.ExcelCalcValue(arg.toErrorValue());
		}
		var number = arg._toDouble3();
		var fromUnitInfo = $.ig.UltraCalcFunctionConvert_UnitInfo.prototype.fromString(fromUnit);
		var toUnitInfo = $.ig.UltraCalcFunctionConvert_UnitInfo.prototype.fromString(toUnit);
		if (fromUnitInfo == null || toUnitInfo == null) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.nA));
		}
		var toUnitCategory = toUnitInfo.measurementUnitCategory();
		var fromUnitCategory = fromUnitInfo.measurementUnitCategory();
		if (toUnitCategory == $.ig.UltraCalcFunctionConvert_MeasurementUnitCategory.prototype.unknown || fromUnitCategory == $.ig.UltraCalcFunctionConvert_MeasurementUnitCategory.prototype.unknown || toUnitCategory != fromUnitCategory) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.nA));
		}
		fromUnit = fromUnitInfo.unit();
		toUnit = toUnitInfo.unit();
		number *= fromUnitInfo.prefixMultipler();
		var value;
		switch (toUnitCategory) {
			case $.ig.UltraCalcFunctionConvert_MeasurementUnitCategory.prototype.weightAndMass:
				value = $.ig.UltraCalcFunctionConvert.prototype._convertWeight(number, fromUnit, toUnit);
				break;
			case $.ig.UltraCalcFunctionConvert_MeasurementUnitCategory.prototype.distance:
				value = $.ig.UltraCalcFunctionConvert.prototype._convertDistance(number, fromUnit, toUnit);
				break;
			case $.ig.UltraCalcFunctionConvert_MeasurementUnitCategory.prototype.time:
				value = $.ig.UltraCalcFunctionConvert.prototype._convertTime(number, fromUnit, toUnit);
				break;
			case $.ig.UltraCalcFunctionConvert_MeasurementUnitCategory.prototype.pressure:
				value = $.ig.UltraCalcFunctionConvert.prototype._convertPressure(number, fromUnit, toUnit);
				break;
			case $.ig.UltraCalcFunctionConvert_MeasurementUnitCategory.prototype.force:
				value = $.ig.UltraCalcFunctionConvert.prototype._convertForce(number, fromUnit, toUnit);
				break;
			case $.ig.UltraCalcFunctionConvert_MeasurementUnitCategory.prototype.energy:
				value = $.ig.UltraCalcFunctionConvert.prototype._convertEnergy(number, fromUnit, toUnit);
				break;
			case $.ig.UltraCalcFunctionConvert_MeasurementUnitCategory.prototype.power:
				value = $.ig.UltraCalcFunctionConvert.prototype._convertPower(number, fromUnit, toUnit);
				break;
			case $.ig.UltraCalcFunctionConvert_MeasurementUnitCategory.prototype.magnetism:
				value = $.ig.UltraCalcFunctionConvert.prototype._convertMagnetism(number, fromUnit, toUnit);
				break;
			case $.ig.UltraCalcFunctionConvert_MeasurementUnitCategory.prototype.temperature:
				value = $.ig.UltraCalcFunctionConvert.prototype._convertTemperature(number, fromUnit, toUnit);
				break;
			case $.ig.UltraCalcFunctionConvert_MeasurementUnitCategory.prototype.liquidMeasure:
				value = $.ig.UltraCalcFunctionConvert.prototype._convertLiquidMeasure(number, fromUnit, toUnit);
				break;
			default:
				$.ig.CalcManagerUtilities.prototype.debugFail("Unknown MeasurementUnitCategory");
				return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.nA));
		}
		value /= toUnitInfo.prefixMultipler();
		value = $.ig.MathUtilities.prototype.roundToExcelDisplayValue(value);
		return new $.ig.excel.ExcelCalcValue(value);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConvert::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConvert::Name()" />*/
	name: function () {
		return "convert";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConvert::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConvert::MinArgs()" />*/
	minArgs: function () {
		return 3;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConvert::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConvert::MaxArgs()" />*/
	maxArgs: function () {
		return 3;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConvert::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConvert::ConvertTime(System.Double, System.String, System.String)" />*/
	_convertTime: function (number, fromUnit, toUnit) {
		var daysPerYear = 365.25;
		var hoursPerDay = 24;
		var minutesPerHour = 60;
		var secondsPerMinute = 60;
		var seconds = 0;
		switch (fromUnit) {
			case "yr":
				seconds = number * daysPerYear * hoursPerDay * minutesPerHour * secondsPerMinute;
				break;
			case "day":
				seconds = number * hoursPerDay * minutesPerHour * secondsPerMinute;
				break;
			case "hr":
				seconds = number * minutesPerHour * secondsPerMinute;
				break;
			case "mn":
				seconds = number * secondsPerMinute;
				break;
			case "sec":
				seconds = number;
				break;
			default: throw new $.ig.ArgumentException(1, "fromUnit");
		}
		var secondsInt = $.ig.truncate(Math.round10N(seconds, 0));
		var millisecondsInt = $.ig.truncate(((seconds - secondsInt) * 1000));
		var timeSpan = $.ig.util.timeSpanInit2(0, 0, 0, secondsInt, millisecondsInt);
		switch (toUnit) {
			case "yr": return $.ig.util.timeSpanTotalDays(timeSpan) / daysPerYear;
			case "day": return $.ig.util.timeSpanTotalDays(timeSpan);
			case "hr": return $.ig.util.timeSpanTotalHours(timeSpan);
			case "mn": return $.ig.util.timeSpanTotalMinutes(timeSpan);
			case "sec": return $.ig.util.timeSpanTotalSeconds(timeSpan);
			default: throw new $.ig.ArgumentException(1, "toUnit");
		}
	}
	/*<EndMethod Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConvert::ConvertTime(System.Double, System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConvert::ConvertWeight(System.Double, System.String, System.String)" />*/
	_convertWeight: function (number, fromUnit, toUnit) {
		var gramsPerSlug = 14593.9029372064;
		var gramsPerPoundMass = 453.59237;
		var gramsPerOunceMass = 28.349523125;
		var gramsPerAtomicMassUnit = 1.66053100460465E-24;
		var grams = 0;
		switch (fromUnit) {
			case "sg":
				grams = number * gramsPerSlug;
				break;
			case "lbm":
				grams = number * gramsPerPoundMass;
				break;
			case "ozm":
				grams = number * gramsPerOunceMass;
				break;
			case "g":
				grams = number;
				break;
			case "u":
				grams = number * gramsPerAtomicMassUnit;
				break;
			default: throw new $.ig.ArgumentException(1, "fromUnit");
		}
		switch (toUnit) {
			case "u": return grams / gramsPerAtomicMassUnit;
			case "g": return grams;
			case "ozm": return grams / gramsPerOunceMass;
			case "lbm": return grams / gramsPerPoundMass;
			case "sg": return grams / gramsPerSlug;
			default: throw new $.ig.ArgumentException(1, "toUnit");
		}
	}
	/*<EndMethod Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConvert::ConvertWeight(System.Double, System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConvert::ConvertDistance(System.Double, System.String, System.String)" />*/
	_convertDistance: function (number, fromUnit, toUnit) {
		var inchesPerNauticalMile = 72913.3858267717;
		var inchesPerMile = 63360;
		var inchesPerMeter = 39.3700787401575;
		var inchesPerYard = 36;
		var inchesPerFoot = 12;
		var inchesPerPica = 0.0138888888888889;
		var inchesPerpica = 0.166666666666667;
		var inchesPerAngstrom = 3.93700787401575E-09;
		var inches = 0;
		switch (fromUnit) {
			case "Nmi":
				inches = number * inchesPerNauticalMile;
				break;
			case "mi":
				inches = number * inchesPerMile;
				break;
			case "m":
				inches = number * inchesPerMeter;
				break;
			case "yd":
				inches = number * inchesPerYard;
				break;
			case "ft":
				inches = number * inchesPerFoot;
				break;
			case "in":
				inches = number;
				break;
			case "pica":
				inches = number * inchesPerpica;
				break;
			case "Pica":
				inches = number * inchesPerPica;
				break;
			case "ang":
				inches = number * inchesPerAngstrom;
				break;
			default: throw new $.ig.ArgumentException(1, "fromUnit");
		}
		switch (toUnit) {
			case "ang": return inches / inchesPerAngstrom;
			case "pica": return inches / inchesPerpica;
			case "Pica": return inches / inchesPerPica;
			case "in": return inches;
			case "ft": return inches / inchesPerFoot;
			case "yd": return inches / inchesPerYard;
			case "m": return inches / inchesPerMeter;
			case "mi": return inches / inchesPerMile;
			case "Nmi": return inches / inchesPerNauticalMile;
			default: throw new $.ig.ArgumentException(1, "toUnit");
		}
	}
	/*<EndMethod Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConvert::ConvertDistance(System.Double, System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConvert::ConvertPressure(System.Double, System.String, System.String)" />*/
	_convertPressure: function (number, fromUnit, toUnit) {
		var mmOfMercuryPERAtmosphere = 760;
		var mmOfMercuryPERPascal = 0.0075006168270417;
		var mmOfMercury = 0;
		switch (fromUnit) {
			case "Pa":
			case "p":
				mmOfMercury = number * mmOfMercuryPERPascal;
				break;
			case "atm":
			case "at":
				mmOfMercury = number * mmOfMercuryPERAtmosphere;
				break;
			case "mmHg":
				mmOfMercury = number;
				break;
			default: throw new $.ig.ArgumentException(1, "fromUnit");
		}
		switch (toUnit) {
			case "mmHg": return mmOfMercury;
			case "Pa":
			case "p":
				return mmOfMercury / mmOfMercuryPERPascal;
			case "atm":
			case "at":
				return mmOfMercury / mmOfMercuryPERAtmosphere;
			default: throw new $.ig.ArgumentException(1, "toUnit");
		}
	}
	/*<EndMethod Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConvert::ConvertPressure(System.Double, System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConvert::ConvertForce(System.Double, System.String, System.String)" />*/
	_convertForce: function (number, fromUnit, toUnit) {
		var newtonsPerPoundForce = 4.4482216152605;
		var newtonsPerDyne = 1E-05;
		var newtons = 0;
		switch (fromUnit) {
			case "lbf":
				newtons = number * newtonsPerPoundForce;
				break;
			case "N":
				newtons = number;
				break;
			case "dyn":
			case "dy":
				newtons = number * newtonsPerDyne;
				break;
			default: throw new $.ig.ArgumentException(1, "fromUnit");
		}
		switch (toUnit) {
			case "dyn":
			case "dy":
				return newtons / newtonsPerDyne;
			case "N": return newtons;
			case "lbf": return newtons / newtonsPerPoundForce;
			default: throw new $.ig.ArgumentException(1, "toUnit");
		}
	}
	/*<EndMethod Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConvert::ConvertForce(System.Double, System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConvert::ConvertEnergy(System.Double, System.String, System.String)" />*/
	_convertEnergy: function (number, fromUnit, toUnit) {
		var ergsPerHorsePowerHour = 26845195376961.7;
		var ergsPerWattHour = 36000000000;
		var ergsPerBTU = 10550558526.2;
		var ergsPerITCalorie = 41868000;
		var ergsPerThermodynamicCalorie = 41840000;
		var ergsPerJoule = 10000000;
		var ergsPerFootPound = 13558179.483314;
		var ergsPerElectronVolt = 1.60219000146921E-12;
		var ergs;
		switch (fromUnit) {
			case "HPh":
			case "hh":
				ergs = number * ergsPerHorsePowerHour;
				break;
			case "Wh":
			case "wh":
				ergs = number * ergsPerWattHour;
				break;
			case "BTU":
			case "btu":
				ergs = number * ergsPerBTU;
				break;
			case "cal":
				ergs = number * ergsPerITCalorie;
				break;
			case "c":
				ergs = number * ergsPerThermodynamicCalorie;
				break;
			case "J":
				ergs = number * ergsPerJoule;
				break;
			case "flb":
				ergs = number * ergsPerFootPound;
				break;
			case "e":
				ergs = number;
				break;
			case "eV":
			case "ev":
				ergs = number * ergsPerElectronVolt;
				break;
			default: throw new $.ig.ArgumentException(1, "fromUnit");
		}
		switch (toUnit) {
			case "eV":
			case "ev":
				return ergs / ergsPerElectronVolt;
			case "e": return ergs;
			case "flb": return ergs / ergsPerFootPound;
			case "J": return ergs / ergsPerJoule;
			case "c": return ergs / ergsPerThermodynamicCalorie;
			case "cal": return ergs / ergsPerITCalorie;
			case "BTU":
			case "btu":
				return ergs / ergsPerBTU;
			case "Wh":
			case "wh":
				return ergs / ergsPerWattHour;
			case "HPh":
			case "hh":
				return ergs / ergsPerHorsePowerHour;
			default: throw new $.ig.ArgumentException(1, "toUnit");
		}
	}
	/*<EndMethod Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConvert::ConvertEnergy(System.Double, System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConvert::ConvertPower(System.Double, System.String, System.String)" />*/
	_convertPower: function (number, fromUnit, toUnit) {
		var wattsPerHorsePower = 745.69987158227;
		var watts;
		switch (fromUnit) {
			case "HP":
			case "h":
				watts = number * wattsPerHorsePower;
				break;
			case "W":
			case "w":
				watts = number;
				break;
			default: throw new $.ig.ArgumentException(1, "fromUnit");
		}
		switch (toUnit) {
			case "W":
			case "w":
				return watts;
			case "HP":
			case "h":
				return watts / wattsPerHorsePower;
			default: throw new $.ig.ArgumentException(1, "toUnit");
		}
	}
	/*<EndMethod Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConvert::ConvertPower(System.Double, System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConvert::ConvertMagnetism(System.Double, System.String, System.String)" />*/
	_convertMagnetism: function (number, fromUnit, toUnit) {
		var gaussPerTesla = 10000;
		var gauss;
		switch (fromUnit) {
			case "T":
				gauss = number * gaussPerTesla;
				break;
			case "ga":
				gauss = number;
				break;
			default: throw new $.ig.ArgumentException(1, "fromUnit");
		}
		switch (toUnit) {
			case "ga": return gauss;
			case "T": return gauss / gaussPerTesla;
			default: throw new $.ig.ArgumentException(1, "toUnit");
		}
	}
	/*<EndMethod Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConvert::ConvertMagnetism(System.Double, System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConvert::ConvertLiquidMeasure(System.Double, System.String, System.String)" />*/
	_convertLiquidMeasure: function (number, fromUnit, toUnit) {
		var teaspoonsPerGallon = 768;
		var teaspoonsPerLiter = 202.884136211058;
		var teaspoonsPerQuart = 192;
		var teaspoonsPerUKPint = 115.291192848466;
		var teaspoonsPerPint = 96;
		var teaspoonsPerCup = 48;
		var teaspoonsPerFluidOunce = 6;
		var teaspoonsPerTablespoon = 3;
		var teaspoons;
		switch (fromUnit) {
			case "gal":
				teaspoons = number * teaspoonsPerGallon;
				break;
			case "l":
			case "lt":
				teaspoons = number * teaspoonsPerLiter;
				break;
			case "qt":
				teaspoons = number * teaspoonsPerQuart;
				break;
			case "uk_pt":
				teaspoons = number * teaspoonsPerUKPint;
				break;
			case "pt":
			case "us_pt":
				teaspoons = number * teaspoonsPerPint;
				break;
			case "cup":
				teaspoons = number * teaspoonsPerCup;
				break;
			case "oz":
				teaspoons = number * teaspoonsPerFluidOunce;
				break;
			case "tbs":
				teaspoons = number * teaspoonsPerTablespoon;
				break;
			case "tsp":
				teaspoons = number;
				break;
			default: throw new $.ig.ArgumentException(1, "fromUnit");
		}
		switch (toUnit) {
			case "tsp": return teaspoons;
			case "tbs": return teaspoons / teaspoonsPerTablespoon;
			case "oz": return teaspoons / teaspoonsPerFluidOunce;
			case "cup": return teaspoons / teaspoonsPerCup;
			case "pt":
			case "us_pt":
				return teaspoons / teaspoonsPerPint;
			case "uk_pt": return teaspoons / teaspoonsPerUKPint;
			case "qt": return teaspoons / teaspoonsPerQuart;
			case "l":
			case "lt":
				return teaspoons / teaspoonsPerLiter;
			case "gal": return teaspoons / teaspoonsPerGallon;
			default: throw new $.ig.ArgumentException(1, "toUnit");
		}
	}
	/*<EndMethod Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConvert::ConvertLiquidMeasure(System.Double, System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConvert::ConvertTemperature(System.Double, System.String, System.String)" />*/
	_convertTemperature: function (number, fromUnit, toUnit) {
		fromUnit = $.ig.UltraCalcFunctionConvert.prototype._getTemperatureUnitResolved(fromUnit);
		toUnit = $.ig.UltraCalcFunctionConvert.prototype._getTemperatureUnitResolved(toUnit);
		if ($.ig.util.compare(fromUnit, toUnit) == 0) {
			return number;
		}
		var celcius;
		switch (fromUnit) {
			case "C": switch (toUnit) {
				case "F": return ((number * 9) / 5) + 32;
				case "K": return number + 273.15;
				default: throw new $.ig.ArgumentException(1, "toUnit");
			}
			case "F":
				celcius = ((number - 32) / 9) * 5;
				switch (toUnit) {
					case "C": return celcius;
					case "K": return celcius + 273.15;
					default: throw new $.ig.ArgumentException(1, "toUnit");
				}
			case "K":
				celcius = (number - 273.15);
				switch (toUnit) {
					case "C": return celcius;
					case "F": return ((celcius * 9) / 5) + 32;
					default: throw new $.ig.ArgumentException(1, "toUnit");
				}
			default: throw new $.ig.ArgumentException(1, "fromUnit");
		}
	}
	/*<EndMethod Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConvert::ConvertTemperature(System.Double, System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConvert::GetTemperatureUnitResolved(System.String)" />*/
	_getTemperatureUnitResolved: function (unit) {
		switch (unit) {
			case "C":
			case "cel":
				return "C";
			case "F":
			case "fah":
				return "F";
			case "K":
			case "kel":
				return "K";
			default: throw new $.ig.ArgumentException(1, "unit");
		}
	}
	/*<EndMethod Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConvert::GetTemperatureUnitResolved(System.String)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConvert::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return (isCreatedFromRegionReference == false);
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConvert::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionConvert', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConvert" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConvert_UnitInfo" />*/

$.ig.util.defType('UltraCalcFunctionConvert_UnitInfo', 'Object', {
	_unit: null,
	_isMetric: false,
	_prefixMulitplier: 0,
	_measurementUnitCategory: 0,
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConvert_UnitInfo Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConvert_UnitInfo::FromString(System.String)" />*/
	fromString: function (unit) {
		var baseUnit = unit;
		var prefixMultiplier = 1;
		var measurementUnitCategory = $.ig.UltraCalcFunctionConvert_UnitInfo.prototype.getUnitCategory(baseUnit);
		if (measurementUnitCategory == $.ig.UltraCalcFunctionConvert_MeasurementUnitCategory.prototype.unknown) {
			baseUnit = baseUnit.substr(1);
			measurementUnitCategory = $.ig.UltraCalcFunctionConvert_UnitInfo.prototype.getUnitCategory(baseUnit);
			if (measurementUnitCategory == $.ig.UltraCalcFunctionConvert_MeasurementUnitCategory.prototype.unknown) {
				return null;
			} else {
				var success = (function () { var $ret = $.ig.UltraCalcFunctionConvert_UnitInfo.prototype.tryGetPrefixMultiplier(unit.substr(0, 1), prefixMultiplier); prefixMultiplier = $ret.p1; return $ret.ret; }());
				if (success == false) {
					return null;
				}
			}
		}
		var isMetric = $.ig.UltraCalcFunctionConvert_UnitInfo.prototype.isMetricUnit(baseUnit);
		if (isMetric == false && prefixMultiplier != 1) {
			return null;
		}
		return new $.ig.UltraCalcFunctionConvert_UnitInfo(baseUnit, isMetric, prefixMultiplier, measurementUnitCategory);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConvert_UnitInfo Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConvert_UnitInfo::FromString(System.String)" />*/
	,
	init: function (unit, isMetric, prefixMulitplier, measurementUnitCategory) {
		$.ig.Object.prototype.init.call(this);
		this._unit = unit;
		this._isMetric = isMetric;
		this._prefixMulitplier = prefixMulitplier;
		this._measurementUnitCategory = measurementUnitCategory;
	},
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConvert_UnitInfo::Unit()" />*/
	unit: function () {
		return this._unit;
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConvert_UnitInfo::Unit()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConvert_UnitInfo::IsMetric()" />*/
	isMetric: function () {
		return this._isMetric;
	}
	/*<EndProperty Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConvert_UnitInfo::IsMetric()" />*/
	,
	/*<BeginProperty Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConvert_UnitInfo::PrefixMultipler()" />*/
	prefixMultipler: function () {
		return this._prefixMulitplier;
	}
	/*<EndProperty Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConvert_UnitInfo::PrefixMultipler()" />*/
	,
	/*<BeginProperty Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConvert_MeasurementUnitCategory Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConvert_UnitInfo::MeasurementUnitCategory()" />*/
	measurementUnitCategory: function () {
		return this._measurementUnitCategory;
	}
	/*<EndProperty Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConvert_MeasurementUnitCategory Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConvert_UnitInfo::MeasurementUnitCategory()" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConvert_MeasurementUnitCategory Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConvert_UnitInfo::GetUnitCategory(System.String)" />*/
	getUnitCategory: function (unit) {
		switch (unit) {
			case "g":
			case "sg":
			case "lbm":
			case "u":
			case "ozm":
				return $.ig.UltraCalcFunctionConvert_MeasurementUnitCategory.prototype.weightAndMass;
			case "m":
			case "mi":
			case "Nmi":
			case "in":
			case "ft":
			case "yd":
			case "ang":
			case "pica":
			case "Pica":
				return $.ig.UltraCalcFunctionConvert_MeasurementUnitCategory.prototype.distance;
			case "yr":
			case "day":
			case "hr":
			case "mn":
			case "sec":
				return $.ig.UltraCalcFunctionConvert_MeasurementUnitCategory.prototype.time;
			case "Pa":
			case "p":
			case "atm":
			case "at":
			case "mmHg":
				return $.ig.UltraCalcFunctionConvert_MeasurementUnitCategory.prototype.pressure;
			case "N":
			case "dyn":
			case "dy":
			case "lbf":
				return $.ig.UltraCalcFunctionConvert_MeasurementUnitCategory.prototype.force;
			case "J":
			case "e":
			case "c":
			case "cal":
			case "eV":
			case "ev":
			case "HPh":
			case "hh":
			case "Wh":
			case "wh":
			case "flb":
			case "BTU":
			case "btu":
				return $.ig.UltraCalcFunctionConvert_MeasurementUnitCategory.prototype.energy;
			case "HP":
			case "h":
			case "W":
			case "w":
				return $.ig.UltraCalcFunctionConvert_MeasurementUnitCategory.prototype.power;
			case "T":
			case "ga":
				return $.ig.UltraCalcFunctionConvert_MeasurementUnitCategory.prototype.magnetism;
			case "C":
			case "cel":
			case "F":
			case "fah":
			case "K":
			case "kel":
				return $.ig.UltraCalcFunctionConvert_MeasurementUnitCategory.prototype.temperature;
			case "tsp":
			case "tbs":
			case "oz":
			case "cup":
			case "pt":
			case "us_pt":
			case "uk_pt":
			case "qt":
			case "gal":
			case "l":
			case "lt":
				return $.ig.UltraCalcFunctionConvert_MeasurementUnitCategory.prototype.liquidMeasure;
		}
		return $.ig.UltraCalcFunctionConvert_MeasurementUnitCategory.prototype.unknown;
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConvert_MeasurementUnitCategory Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConvert_UnitInfo::GetUnitCategory(System.String)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConvert_UnitInfo::TryGetPrefixMultiplier(System.String, System.Double)" />*/
	tryGetPrefixMultiplier: function (prefix, multipler) {
		switch (prefix) {
			case "E":
				multipler = 1E+18;
				return {
					ret: true,
					p1: multipler
				};
			case "P":
				multipler = 1E+15;
				return {
					ret: true,
					p1: multipler
				};
			case "T":
				multipler = 1000000000000;
				return {
					ret: true,
					p1: multipler
				};
			case "G":
				multipler = 1000000000;
				return {
					ret: true,
					p1: multipler
				};
			case "M":
				multipler = 1000000;
				return {
					ret: true,
					p1: multipler
				};
			case "k":
				multipler = 1000;
				return {
					ret: true,
					p1: multipler
				};
			case "h":
				multipler = 100;
				return {
					ret: true,
					p1: multipler
				};
			case "e":
				multipler = 10;
				return {
					ret: true,
					p1: multipler
				};
			case "d":
				multipler = 0.1;
				return {
					ret: true,
					p1: multipler
				};
			case "c":
				multipler = 0.01;
				return {
					ret: true,
					p1: multipler
				};
			case "m":
				multipler = 0.001;
				return {
					ret: true,
					p1: multipler
				};
			case "u":
				multipler = 1E-06;
				return {
					ret: true,
					p1: multipler
				};
			case "n":
				multipler = 1E-09;
				return {
					ret: true,
					p1: multipler
				};
			case "p":
				multipler = 1E-12;
				return {
					ret: true,
					p1: multipler
				};
			case "f":
				multipler = 1E-15;
				return {
					ret: true,
					p1: multipler
				};
			case "a":
				multipler = 1E-18;
				return {
					ret: true,
					p1: multipler
				};
		}
		multipler = 1;
		return {
			ret: false,
			p1: multipler
		};
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConvert_UnitInfo::TryGetPrefixMultiplier(System.String, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConvert_UnitInfo::IsMetricUnit(System.String)" />*/
	isMetricUnit: function (baseUnit) {
		switch (baseUnit) {
			case "g":
			case "u":
				return true;
			case "sg":
			case "lbm":
			case "ozm":
				return false;
			case "m":
			case "ang":
				return true;
			case "mi":
			case "Nmi":
			case "in":
			case "ft":
			case "yd":
			case "pica":
			case "Pica":
				return false;
			case "sec": return true;
			case "yr":
			case "day":
			case "hr":
			case "mn":
				return false;
			case "Pa":
			case "p":
			case "atm":
			case "at":
			case "mmHg":
				return true;
			case "N":
			case "dyn":
			case "dy":
				return true;
			case "lbf": return false;
			case "J":
			case "e":
			case "c":
			case "cal":
			case "eV":
			case "ev":
			case "Wh":
			case "wh":
				return true;
			case "HPh":
			case "hh":
			case "flb":
			case "BTU":
			case "btu":
				return false;
			case "HP":
			case "h":
				return false;
			case "W":
			case "w":
				return true;
			case "T":
			case "ga":
				return true;
			case "C":
			case "cel":
			case "F":
			case "fah":
				return false;
			case "K":
			case "kel":
				return true;
			case "tsp":
			case "tbs":
			case "oz":
			case "cup":
			case "pt":
			case "us_pt":
			case "uk_pt":
			case "qt":
			case "gal":
				return false;
			case "l":
			case "lt":
				return true;
		}
		throw new $.ig.ArgumentException(2, "baseUnit must be a unit with no metric prefix", "baseUnit");
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConvert_UnitInfo::IsMetricUnit(System.String)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionConvert_UnitInfo', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionConvert_UnitInfo" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDelta" />*/

$.ig.util.defType('UltraCalcFunctionDelta', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDelta::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var arg;
		var number2;
		if (argumentCount == 2) {
			arg = numberStack.pop();
			if (arg.isError()) {
				return new $.ig.excel.ExcelCalcValue(arg.toErrorValue());
			}
			number2 = arg._toDouble3();
		} else {
			number2 = 0;
		}
		arg = numberStack.pop();
		if (arg.isError()) {
			return new $.ig.excel.ExcelCalcValue(arg.toErrorValue());
		}
		var number1 = arg._toDouble3();
		var value = (number1 == number2) ? 1 : 0;
		return new $.ig.excel.ExcelCalcValue(value);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDelta::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDelta::Name()" />*/
	name: function () {
		return "delta";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDelta::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDelta::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDelta::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDelta::MaxArgs()" />*/
	maxArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDelta::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDelta::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return (isCreatedFromRegionReference == false);
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDelta::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionDelta', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDelta" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionGeStep" />*/

$.ig.util.defType('UltraCalcFunctionGeStep', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionGeStep::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var arg;
		var number2;
		if (argumentCount == 2) {
			arg = numberStack.pop();
			if (arg.isError()) {
				return new $.ig.excel.ExcelCalcValue(arg.toErrorValue());
			}
			number2 = arg._toDouble3();
		} else {
			number2 = 0;
		}
		arg = numberStack.pop();
		if (arg.isError()) {
			return new $.ig.excel.ExcelCalcValue(arg.toErrorValue());
		}
		var number1 = arg._toDouble3();
		var value = (number1 >= number2) ? 1 : 0;
		return new $.ig.excel.ExcelCalcValue(value);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionGeStep::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionGeStep::Name()" />*/
	name: function () {
		return "gestep";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionGeStep::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionGeStep::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionGeStep::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionGeStep::MaxArgs()" />*/
	maxArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionGeStep::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionGeStep::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return (isCreatedFromRegionReference == false);
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionGeStep::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionGeStep', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionGeStep" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex" />*/

$.ig.util.defType('UltraCalcFunctionComplex', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var arg;
		var suffix = (argumentCount == 3) ? numberStack.pop().toString() : "i";
		if ($.ig.util.stringCompare1(suffix, "i", $.ig.StringComparison.prototype.ordinal) != 0 && $.ig.util.stringCompare1(suffix, "j", $.ig.StringComparison.prototype.ordinal) != 0) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
		}
		arg = numberStack.pop();
		if (arg.isError()) {
			return new $.ig.excel.ExcelCalcValue(arg.toErrorValue());
		}
		var imaginaryNumber = arg._toDouble3();
		arg = numberStack.pop();
		if (arg.isError()) {
			return new $.ig.excel.ExcelCalcValue(arg.toErrorValue());
		}
		var realNumber = arg._toDouble3();
		var complexNumber = new $.ig.UltraCalcFunctionComplex_ComplexNumber(0, realNumber, imaginaryNumber, suffix);
		var value = complexNumber.toString();
		return new $.ig.excel.ExcelCalcValue(value);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex::Name()" />*/
	name: function () {
		return "complex";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex::MinArgs()" />*/
	minArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex::MaxArgs()" />*/
	maxArgs: function () {
		return 3;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionComplex', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber" />*/

$.ig.util.defType('UltraCalcFunctionComplex_ComplexNumber', 'Object', {
	_realNumber: 0,
	_imaginaryNumber: 0,
	_suffix: null,
	_isValid: false,
	init: function (initNumber, realNumber, imaginaryNumber, suffix) {
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
		$.ig.UltraCalcFunctionComplex_ComplexNumber.prototype.init2.call(this, 2, realNumber, imaginaryNumber, suffix, true);
	},
	init1: function (initNumber, culture, complexNumber) {
		var $self = this;
		$.ig.Object.prototype.init.call(this);
		this._isValid = (function () { var $ret = $.ig.UltraCalcFunctionComplex_ComplexNumber.prototype.tryParseComplexNumber(culture, complexNumber, $self._realNumber, $self._imaginaryNumber, $self._suffix); $self._realNumber = $ret.p2; $self._imaginaryNumber = $ret.p3; $self._suffix = $ret.p4; return $ret.ret; }());
	},
	init2: function (initNumber, realNumber, imaginaryNumber, suffix, isValid) {
		$.ig.Object.prototype.init.call(this);
		this._realNumber = realNumber;
		this._imaginaryNumber = imaginaryNumber;
		this._suffix = suffix;
		this._isValid = isValid;
	},
	/*<BeginProperty Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber::RealNumber()" />*/
	realNumber: function (value) {
		if (arguments.length === 1) {
			this._realNumber = value;
			return value;
		} else {
			return this._realNumber;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber::RealNumber()" />*/
	,
	/*<BeginProperty Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber::ImaginaryNumber()" />*/
	imaginaryNumber: function () {
		return this._imaginaryNumber;
	}
	/*<EndProperty Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber::ImaginaryNumber()" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber::Suffix()" />*/
	suffix: function (value) {
		if (arguments.length === 1) {
			if (value != "i" && value != "j") {
				throw new $.ig.ArgumentOutOfRangeException(0);
			}
			this._suffix = value;
			return value;
		} else {
			return this._suffix;
		}
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber::Suffix()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber::IsValid()" />*/
	isValid: function () {
		if (Number.isInfinity(this.realNumber()) || $.ig.util.isNaN(this.realNumber())) {
			return false;
		}
		if (Number.isInfinity(this.imaginaryNumber()) || $.ig.util.isNaN(this.imaginaryNumber())) {
			return false;
		}
		return this._isValid;
	}
	/*<EndProperty Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber::IsValid()" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber::ToString()" />*/
	toString: function () {
		if (this.isValid() == false) {
			return "#NUM";
		}
		return $.ig.UltraCalcFunctionComplex_ComplexNumber.prototype.complex(this.realNumber(), this.imaginaryNumber(), this.suffix());
	}
	/*<EndMethod Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber::ToString()" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber::Abs()" />*/
	abs: function () {
		return Math.sqrt(Math.pow(this.realNumber(), 2) + Math.pow(this.imaginaryNumber(), 2));
	}
	/*<EndMethod Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber::Abs()" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber::Argument()" />*/
	argument: function () {
		if (this.imaginaryNumber() == 0 && this.realNumber() == 0) {
			throw new $.ig.excel.DivideByZeroException(null, null);
		}
		return Math.atan2(this.imaginaryNumber(), this.realNumber());
	}
	/*<EndMethod Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber::Argument()" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber::Conjugate()" />*/
	conjugate: function () {
		return new $.ig.UltraCalcFunctionComplex_ComplexNumber(0, this._realNumber, -this._imaginaryNumber, this._suffix);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber::Conjugate()" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber::Cos()" />*/
	cos: function () {
		var newRealNumber = Math.cos(this.realNumber()) * Math.cosh(this.imaginaryNumber());
		var newImaginaryNumber = -(Math.sin(this.realNumber()) * Math.sinh(this.imaginaryNumber()));
		return new $.ig.UltraCalcFunctionComplex_ComplexNumber(0, newRealNumber, newImaginaryNumber, this.suffix());
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber::Cos()" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber::Exponential()" />*/
	exponential: function () {
		var d = Math.pow(2.7182818284590451, this.realNumber());
		var newRealNumber = Math.cos(this.imaginaryNumber()) * d;
		var newImaginaryNumber = Math.sin(this.imaginaryNumber()) * d;
		var result = new $.ig.UltraCalcFunctionComplex_ComplexNumber(0, newRealNumber, newImaginaryNumber, this.suffix());
		return result;
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber::Exponential()" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber::Hypotenuse()" />*/
	hypotenuse: function () {
		var realNumberSquared = Math.pow(this.realNumber(), 2);
		var imaginaryNumberSquared = Math.pow(this.imaginaryNumber(), 2);
		var sum = realNumberSquared + imaginaryNumberSquared;
		var sqrt = Math.sqrt(sum);
		return sqrt;
	}
	/*<EndMethod Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber::Hypotenuse()" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber::LN()" />*/
	lN: function () {
		var r = this.hypotenuse();
		var newRealNumber = Math.log(r);
		var newImaginaryNumber = this.theta();
		var result = new $.ig.UltraCalcFunctionComplex_ComplexNumber(0, newRealNumber, newImaginaryNumber, this.suffix());
		return result;
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber::LN()" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber::Log10()" />*/
	log10: function () {
		return $.ig.UltraCalcFunctionComplex_ComplexNumber.prototype.l_op_Multiply1(this.lN(), $.ig.UltraCalcFunctionComplex_ComplexNumber.prototype._log10Multiplier);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber::Log10()" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber::Log2()" />*/
	log2: function () {
		return $.ig.UltraCalcFunctionComplex_ComplexNumber.prototype.l_op_Multiply1(this.lN(), $.ig.UltraCalcFunctionComplex_ComplexNumber.prototype._log2Multiplier);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber::Log2()" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber::Power(System.Double)" />*/
	power: function (power) {
		var r = this.hypotenuse();
		var theta = this.theta();
		var rPower = Math.pow(r, power);
		var thetaPower = theta * power;
		var newRealNumber = rPower * (Math.cos(thetaPower));
		var newImaginaryNumber = rPower * (Math.sin(thetaPower));
		return new $.ig.UltraCalcFunctionComplex_ComplexNumber(0, newRealNumber, newImaginaryNumber, this.suffix());
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber::Power(System.Double)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber::Sin()" />*/
	sin: function () {
		var newRealNumber = Math.sin(this.realNumber()) * Math.cosh(this.imaginaryNumber());
		var newImaginaryNumber = Math.cos(this.realNumber()) * Math.sinh(this.imaginaryNumber());
		return new $.ig.UltraCalcFunctionComplex_ComplexNumber(0, newRealNumber, newImaginaryNumber, this.suffix());
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber::Sin()" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber::Sqrt()" />*/
	sqrt: function () {
		var r = this.hypotenuse();
		var theta = this.theta();
		var sqrtR = Math.sqrt(r);
		var thetaOver2 = theta / 2;
		var newRealNumber = sqrtR * Math.cos(thetaOver2);
		var newImaginaryNumber = sqrtR * Math.sin(thetaOver2);
		return new $.ig.UltraCalcFunctionComplex_ComplexNumber(0, newRealNumber, newImaginaryNumber, this.suffix());
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber::Sqrt()" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber::Theta()" />*/
	theta: function () {
		return Math.atan2(this.imaginaryNumber(), this.realNumber());
	}
	/*<EndMethod Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber::Theta()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber::TryParseComplexNumber(System.Globalization.CultureInfo, System.String, System.Double, System.Double, System.String)" />*/
	tryParseComplexNumber: function (culture, complexNumber, realNumber, imaginaryNumber, suffix) {
		complexNumber = $.ig.util.replace(complexNumber, " ", "");
		var complexNumberParts = $.ig.UltraCalcFunctionComplex_ComplexNumber.prototype.splitComplexNumber(complexNumber);
		var partCount = complexNumberParts.length;
		if (partCount > 2 || partCount <= 0) {
			realNumber = 0;
			imaginaryNumber = 0;
			suffix = "i";
			return {
				ret: false,
				p2: realNumber,
				p3: imaginaryNumber,
				p4: suffix
			};
		}
		var realNumberPart;
		var imaginaryNumberPart;
		var success;
		if (partCount == 1) {
			imaginaryNumberPart = complexNumber;
			success = (function () { var $ret = $.ig.UltraCalcFunctionComplex_ComplexNumber.prototype.tryParseImaginaryNumber(culture, complexNumber, imaginaryNumber, suffix); imaginaryNumber = $ret.p2; suffix = $ret.p3; return $ret.ret; }());
			if (success) {
				realNumber = 0;
			} else {
				imaginaryNumber = 0;
				success = (function () { var $ret = $.ig.MathUtilities.prototype.doubleTryParse(complexNumber, culture, realNumber); realNumber = $ret.p2; return $ret.ret; }());
				if (success == false) {
					return {
						ret: false,
						p2: realNumber,
						p3: imaginaryNumber,
						p4: suffix
					};
				}
			}
		} else {
			realNumberPart = complexNumberParts[0];
			imaginaryNumberPart = complexNumberParts[1];
			success = (function () { var $ret = $.ig.MathUtilities.prototype.doubleTryParse(realNumberPart, culture, realNumber); realNumber = $ret.p2; return $ret.ret; }());
			if (success == false) {
				imaginaryNumber = 0;
				suffix = "i";
				return {
					ret: false,
					p2: realNumber,
					p3: imaginaryNumber,
					p4: suffix
				};
			}
			success = (function () { var $ret = $.ig.UltraCalcFunctionComplex_ComplexNumber.prototype.tryParseImaginaryNumber(culture, imaginaryNumberPart, imaginaryNumber, suffix); imaginaryNumber = $ret.p2; suffix = $ret.p3; return $ret.ret; }());
			if (success == false) {
				return {
					ret: false,
					p2: realNumber,
					p3: imaginaryNumber,
					p4: suffix
				};
			}
		}
		return {
			ret: true,
			p2: realNumber,
			p3: imaginaryNumber,
			p4: suffix
		};
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber::TryParseComplexNumber(System.Globalization.CultureInfo, System.String, System.Double, System.Double, System.String)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber::TryParseImaginaryNumber(System.Globalization.CultureInfo, System.String, System.Double, System.String)" />*/
	tryParseImaginaryNumber: function (culture, imaginaryNumberString, imaginaryNumber, suffix) {
		suffix = imaginaryNumberString.contains("j") ? "j" : "i";
		if (imaginaryNumberString.contains("i") == false && imaginaryNumberString.contains("j") == false) {
			imaginaryNumber = 0;
			return {
				ret: false,
				p2: imaginaryNumber,
				p3: suffix
			};
		}
		switch (imaginaryNumberString) {
			case "i":
			case "j":
			case "+i":
			case "+j":
				imaginaryNumber = 1;
				return {
					ret: true,
					p2: imaginaryNumber,
					p3: suffix
				};
			case "-i":
			case "-j":
				imaginaryNumber = -1;
				return {
					ret: true,
					p2: imaginaryNumber,
					p3: suffix
				};
		}
		imaginaryNumberString = $.ig.util.replace(imaginaryNumberString, "i", String.empty());
		imaginaryNumberString = $.ig.util.replace(imaginaryNumberString, "j", String.empty());
		return {
			ret: (function () { var $ret = $.ig.MathUtilities.prototype.doubleTryParse(imaginaryNumberString, culture, imaginaryNumber); imaginaryNumber = $ret.p2; return $ret.ret; }()),
			p2: imaginaryNumber,
			p3: suffix
		};
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber::TryParseImaginaryNumber(System.Globalization.CultureInfo, System.String, System.Double, System.String)" />*/
	,
	/*<BeginMethod Name=" Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber::SplitComplexNumber(System.String)" />*/
	splitComplexNumber: function (complexNumber) {
		var parts = new $.ig.List$1(String, 2, 1);
		var part = complexNumber.substr(0, 1);
		var chars = $.ig.util.toCharArray(complexNumber);
		for (var i = 1; i < chars.length; i++) {
			var c = chars[i];
			if (c == '-' || c == '+') {
				var previousChar = chars[i - 1].toString().toLowerCase();
				if (previousChar != "e") {
					parts.add(part);
					part = String.empty();
				}
			}
			part += c;
		}
		parts.add(part);
		return parts.toArray();
	}
	/*<EndMethod Name=" Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber::SplitComplexNumber(System.String)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber::Complex(System.Double, System.Double, System.String)" />*/
	complex: function (realNumber, imaginaryNumber, suffix) {
		var numberFormat = "G";
		realNumber = $.ig.MathUtilities.prototype.roundToExcelDisplayValue(realNumber);
		imaginaryNumber = $.ig.MathUtilities.prototype.roundToExcelDisplayValue(imaginaryNumber);
		var value;
		if (realNumber == 0 && imaginaryNumber == 0) {
			value = "0";
		} else if (realNumber != 0 && imaginaryNumber == 0) {
			value = $.ig.util.numberToString1(realNumber, numberFormat, null);
		} else {
			var sign = (imaginaryNumber > 0) ? "+" : "-";
			var realNumberString;
			if (realNumber != 0) {
				realNumberString = $.ig.util.numberToString1(realNumber, numberFormat, null);
			} else {
				realNumberString = String.empty();
				if (sign == "+") {
					sign = String.empty();
				}
			}
			imaginaryNumber = Math.abs(imaginaryNumber);
			var imaginaryNumberString = $.ig.util.stringFormat("{0}{1}", sign, (imaginaryNumber == 1) ? String.empty() : $.ig.util.numberToString1(imaginaryNumber, numberFormat, null));
			value = $.ig.util.stringFormat("{0}{1}{2}", realNumberString, imaginaryNumberString, suffix);
		}
		return value;
	}
	/*<EndMethod Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber::Complex(System.Double, System.Double, System.String)" />*/
	,
	/*<BeginProperty Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber::InvalidComplexNumber()" />*/
	invalidComplexNumber: function () {
		if ($.ig.UltraCalcFunctionComplex_ComplexNumber.prototype._invalidComplexNumber == null) {
			$.ig.UltraCalcFunctionComplex_ComplexNumber.prototype._invalidComplexNumber = new $.ig.UltraCalcFunctionComplex_ComplexNumber(2, 0, 0, "i", false);
		}
		return $.ig.UltraCalcFunctionComplex_ComplexNumber.prototype._invalidComplexNumber;
	}
	/*<EndProperty Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber::InvalidComplexNumber()" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber::L_op_Division(Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber, Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber)" />*/
	l_op_Division: function (dividend, divisor) {
		if ($.ig.util.compare(divisor.suffix(), dividend.suffix()) != 0) {
			return $.ig.UltraCalcFunctionComplex_ComplexNumber.prototype.invalidComplexNumber();
		}
		var d = Math.pow(divisor.realNumber(), 2) + Math.pow(divisor.imaginaryNumber(), 2);
		var newRealNumber = ((dividend.realNumber() * divisor.realNumber()) + (dividend.imaginaryNumber() * divisor.imaginaryNumber())) / d;
		var newImaginaryNumber = ((dividend.imaginaryNumber() * divisor.realNumber()) - (dividend.realNumber() * divisor.imaginaryNumber())) / d;
		var result = new $.ig.UltraCalcFunctionComplex_ComplexNumber(0, newRealNumber, newImaginaryNumber, dividend.suffix());
		return result;
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber::L_op_Division(Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber, Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber::L_op_Multiply(Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber, Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber)" />*/
	l_op_Multiply: function (complexNumber1, complexNumber2) {
		if ($.ig.util.compare(complexNumber1.suffix(), complexNumber2.suffix()) != 0) {
			return $.ig.UltraCalcFunctionComplex_ComplexNumber.prototype.invalidComplexNumber();
		}
		var newRealNumber = ((complexNumber1.realNumber() * complexNumber2.realNumber()) - (complexNumber1.imaginaryNumber() * complexNumber2.imaginaryNumber()));
		var newImaginaryNumber = ((complexNumber1.realNumber() * complexNumber2.imaginaryNumber()) + (complexNumber1.imaginaryNumber() * complexNumber2.realNumber()));
		var result = new $.ig.UltraCalcFunctionComplex_ComplexNumber(0, newRealNumber, newImaginaryNumber, complexNumber1.suffix());
		return result;
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber::L_op_Multiply(Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber, Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber::L_op_Multiply(Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber, System.Double)" />*/
	l_op_Multiply1: function (complexNumber1, d) {
		var suffix = complexNumber1.suffix();
		var newRealNumber = complexNumber1.realNumber() * d;
		var newImaginaryNumber = complexNumber1.imaginaryNumber() * d;
		return new $.ig.UltraCalcFunctionComplex_ComplexNumber(0, newRealNumber, newImaginaryNumber, suffix);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber::L_op_Multiply(Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber, System.Double)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber::L_op_Addition(Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber, Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber)" />*/
	l_op_Addition: function (complexNumber1, complexNumber2) {
		if ($.ig.util.compare(complexNumber1.suffix(), complexNumber2.suffix()) != 0) {
			return $.ig.UltraCalcFunctionComplex_ComplexNumber.prototype.invalidComplexNumber();
		}
		var newRealNumber = complexNumber1.realNumber() + complexNumber2.realNumber();
		var newImaginaryNumber = complexNumber1.imaginaryNumber() + complexNumber2.imaginaryNumber();
		var result = new $.ig.UltraCalcFunctionComplex_ComplexNumber(0, newRealNumber, newImaginaryNumber, complexNumber1.suffix());
		return result;
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber::L_op_Addition(Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber, Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber::L_op_Subtraction(Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber, Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber)" />*/
	l_op_Subtraction: function (complexNumber1, complexNumber2) {
		if ($.ig.util.compare(complexNumber1.suffix(), complexNumber2.suffix()) != 0) {
			return $.ig.UltraCalcFunctionComplex_ComplexNumber.prototype.invalidComplexNumber();
		}
		var newRealNumber = complexNumber1.realNumber() - complexNumber2.realNumber();
		var newImaginaryNumber = complexNumber1.imaginaryNumber() - complexNumber2.imaginaryNumber();
		var result = new $.ig.UltraCalcFunctionComplex_ComplexNumber(0, newRealNumber, newImaginaryNumber, complexNumber1.suffix());
		return result;
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber::L_op_Subtraction(Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber, Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionComplex_ComplexNumber', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImAbs" />*/

$.ig.util.defType('UltraCalcFunctionImAbs', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImAbs::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var complexNumberArg = numberStack.pop();
		if (complexNumberArg.isError()) {
			return complexNumberArg;
		}
		var complexNumberString = complexNumberArg.toString();
		var complexNumber = new $.ig.UltraCalcFunctionComplex_ComplexNumber(1, numberStack._culture(), complexNumberString);
		if (complexNumber.isValid() == false) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		return new $.ig.excel.ExcelCalcValue(complexNumber.abs());
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImAbs::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImAbs::Name()" />*/
	name: function () {
		return "imabs";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImAbs::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImAbs::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImAbs::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImAbs::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImAbs::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImAbs::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return (isCreatedFromRegionReference == false);
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImAbs::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionImAbs', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImAbs" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImaginary" />*/

$.ig.util.defType('UltraCalcFunctionImaginary', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImaginary::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var complexNumberString = numberStack.pop().toString();
		var complexNumber = new $.ig.UltraCalcFunctionComplex_ComplexNumber(1, numberStack._culture(), complexNumberString);
		if (complexNumber.isValid() == false) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		return new $.ig.excel.ExcelCalcValue(complexNumber.imaginaryNumber());
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImaginary::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImaginary::Name()" />*/
	name: function () {
		return "imaginary";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImaginary::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImaginary::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImaginary::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImaginary::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImaginary::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionImaginary', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImaginary" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImArgument" />*/

$.ig.util.defType('UltraCalcFunctionImArgument', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImArgument::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var complexNumberArg = numberStack.pop();
		if (complexNumberArg.isError()) {
			return complexNumberArg;
		}
		var complexNumberString = complexNumberArg.toString();
		var complexNumber = new $.ig.UltraCalcFunctionComplex_ComplexNumber(1, numberStack._culture(), complexNumberString);
		if (complexNumber.isValid() == false) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		return new $.ig.excel.ExcelCalcValue(complexNumber.argument());
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImArgument::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImArgument::Name()" />*/
	name: function () {
		return "imargument";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImArgument::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImArgument::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImArgument::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImArgument::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImArgument::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImArgument::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return (isCreatedFromRegionReference == false);
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImArgument::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionImArgument', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImArgument" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImConjugate" />*/

$.ig.util.defType('UltraCalcFunctionImConjugate', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImConjugate::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var complexNumberArg = numberStack.pop();
		if (complexNumberArg.isError()) {
			return complexNumberArg;
		}
		var complexNumberString = complexNumberArg.toString();
		var complexNumber = new $.ig.UltraCalcFunctionComplex_ComplexNumber(1, numberStack._culture(), complexNumberString);
		if (complexNumber.isValid() == false) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		var result = complexNumber.conjugate();
		return new $.ig.excel.ExcelCalcValue(result.toString());
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImConjugate::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImConjugate::Name()" />*/
	name: function () {
		return "imconjugate";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImConjugate::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImConjugate::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImConjugate::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImConjugate::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImConjugate::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImConjugate::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return (isCreatedFromRegionReference == false);
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImConjugate::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionImConjugate', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImConjugate" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImCos" />*/

$.ig.util.defType('UltraCalcFunctionImCos', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImCos::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var complexNumberArg = numberStack.pop();
		if (complexNumberArg.isError()) {
			return complexNumberArg;
		}
		var complexNumberString = complexNumberArg.toString();
		var complexNumber = new $.ig.UltraCalcFunctionComplex_ComplexNumber(1, numberStack._culture(), complexNumberString);
		if (complexNumber.isValid() == false) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		var result = complexNumber.cos();
		return new $.ig.excel.ExcelCalcValue(result.toString());
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImCos::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImCos::Name()" />*/
	name: function () {
		return "imcos";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImCos::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImCos::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImCos::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImCos::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImCos::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImCos::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return (isCreatedFromRegionReference == false);
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImCos::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionImCos', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImCos" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImDiv" />*/

$.ig.util.defType('UltraCalcFunctionImDiv', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImDiv::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var divisorArg = numberStack.pop();
		if (divisorArg.isError()) {
			return divisorArg;
		}
		var divisorString = divisorArg.toString();
		var divisor = new $.ig.UltraCalcFunctionComplex_ComplexNumber(1, numberStack._culture(), divisorString);
		if (divisor.isValid() == false) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		var dividendArg = numberStack.pop();
		if (dividendArg.isError()) {
			return dividendArg;
		}
		var dividendString = dividendArg.toString();
		var dividend = new $.ig.UltraCalcFunctionComplex_ComplexNumber(1, numberStack._culture(), dividendString);
		if (dividend.isValid() == false) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		var result = $.ig.UltraCalcFunctionComplex_ComplexNumber.prototype.l_op_Division(dividend, divisor);
		if (result.isValid() == false) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		return new $.ig.excel.ExcelCalcValue(result.toString());
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImDiv::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImDiv::Name()" />*/
	name: function () {
		return "imdiv";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImDiv::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImDiv::MinArgs()" />*/
	minArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImDiv::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImDiv::MaxArgs()" />*/
	maxArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImDiv::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImDiv::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return (isCreatedFromRegionReference == false);
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImDiv::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionImDiv', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImDiv" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImExp" />*/

$.ig.util.defType('UltraCalcFunctionImExp', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImExp::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var complexNumberArg = numberStack.pop();
		if (complexNumberArg.isError()) {
			return complexNumberArg;
		}
		var complexNumberString = complexNumberArg.toString();
		var complexNumber = new $.ig.UltraCalcFunctionComplex_ComplexNumber(1, numberStack._culture(), complexNumberString);
		if (complexNumber.isValid() == false) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		var result = complexNumber.exponential();
		if (result.isValid() == false) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		return new $.ig.excel.ExcelCalcValue(result.toString());
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImExp::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImExp::Name()" />*/
	name: function () {
		return "imexp";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImExp::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImExp::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImExp::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImExp::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImExp::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImExp::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return (isCreatedFromRegionReference == false);
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImExp::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionImExp', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImExp" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImLn" />*/

$.ig.util.defType('UltraCalcFunctionImLn', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImLn::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var complexNumberArg = numberStack.pop();
		if (complexNumberArg.isError()) {
			return complexNumberArg;
		}
		var complexNumberString = complexNumberArg.toString();
		var complexNumber = new $.ig.UltraCalcFunctionComplex_ComplexNumber(1, numberStack._culture(), complexNumberString);
		if (complexNumber.isValid() == false) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		var result = complexNumber.lN();
		if (result.isValid() == false) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		return new $.ig.excel.ExcelCalcValue(result.toString());
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImLn::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImLn::Name()" />*/
	name: function () {
		return "imln";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImLn::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImLn::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImLn::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImLn::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImLn::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImLn::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return (isCreatedFromRegionReference == false);
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImLn::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionImLn', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImLn" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImReal" />*/

$.ig.util.defType('UltraCalcFunctionImReal', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImReal::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var complexNumberArg = numberStack.pop();
		if (complexNumberArg.isError()) {
			return complexNumberArg;
		}
		var complexNumberString = complexNumberArg.toString();
		var complexNumber = new $.ig.UltraCalcFunctionComplex_ComplexNumber(1, numberStack._culture(), complexNumberString);
		if (complexNumber.isValid() == false) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		return new $.ig.excel.ExcelCalcValue(complexNumber.realNumber());
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImReal::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImReal::Name()" />*/
	name: function () {
		return "imreal";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImReal::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImReal::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImReal::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImReal::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImReal::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImReal::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return (isCreatedFromRegionReference == false);
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImReal::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionImReal', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImReal" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImSub" />*/

$.ig.util.defType('UltraCalcFunctionImSub', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImSub::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var complexNumberArg2 = numberStack.pop();
		if (complexNumberArg2.isError()) {
			return complexNumberArg2;
		}
		var complexNumberString2 = complexNumberArg2.toString();
		var complexNumber2 = new $.ig.UltraCalcFunctionComplex_ComplexNumber(1, numberStack._culture(), complexNumberString2);
		if (complexNumber2.isValid() == false) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		var complexNumberArg1 = numberStack.pop();
		if (complexNumberArg1.isError()) {
			return complexNumberArg1;
		}
		var complexNumberString1 = complexNumberArg1.toString();
		var complexNumber1 = new $.ig.UltraCalcFunctionComplex_ComplexNumber(1, numberStack._culture(), complexNumberString1);
		if (complexNumber1.isValid() == false) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		var result = $.ig.UltraCalcFunctionComplex_ComplexNumber.prototype.l_op_Subtraction(complexNumber1, complexNumber2);
		if (result.isValid() == false) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		return new $.ig.excel.ExcelCalcValue(result.toString());
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImSub::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImSub::Name()" />*/
	name: function () {
		return "imsub";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImSub::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImSub::MinArgs()" />*/
	minArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImSub::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImSub::MaxArgs()" />*/
	maxArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImSub::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImSub::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return (isCreatedFromRegionReference == false);
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImSub::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionImSub', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImSub" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImProduct" />*/

$.ig.util.defType('UltraCalcFunctionImProduct', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImProduct::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var args = this._getArguments(numberStack, argumentCount, true);
		$.ig.Array.prototype.reverse(args);
		var product = null;
		var suffix = null;
		for (var i = 0; i < args.length; i++) {
			var arg = args[i];
			if (arg.isError()) {
				return new $.ig.excel.ExcelCalcValue(arg.toErrorValue());
			}
			var complexNumber = new $.ig.UltraCalcFunctionComplex_ComplexNumber(1, numberStack._culture(), arg.toString());
			if (complexNumber.isValid() == false) {
				return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
			}
			if (suffix == null) {
				suffix = complexNumber.suffix();
			} else if (complexNumber.suffix() != suffix) {
				return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
			}
			if (product == null) {
				product = complexNumber;
			} else {
				product *= complexNumber;
			}
		}
		if (product.isValid() == false) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		return new $.ig.excel.ExcelCalcValue(product.toString());
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImProduct::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImProduct::CanParameterBeEnumerable(System.Int32)" />*/
	canParameterBeEnumerable: function (parameterIndex) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImProduct::CanParameterBeEnumerable(System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImProduct::Name()" />*/
	name: function () {
		return "improduct";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImProduct::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImProduct::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImProduct::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImProduct::MaxArgs()" />*/
	maxArgs: function () {
		return 0x7FFFFFFF;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImProduct::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionImProduct', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImProduct" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImSum" />*/

$.ig.util.defType('UltraCalcFunctionImSum', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImSum::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var args = this._getArguments(numberStack, argumentCount, true);
		$.ig.Array.prototype.reverse(args);
		var sum = null;
		var suffix = null;
		for (var i = 0; i < args.length; i++) {
			var arg = args[i];
			if (arg.isError()) {
				return new $.ig.excel.ExcelCalcValue(arg.toErrorValue());
			}
			var complexNumber = new $.ig.UltraCalcFunctionComplex_ComplexNumber(1, numberStack._culture(), arg.toString());
			if (complexNumber.isValid() == false) {
				return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
			}
			if (suffix == null) {
				suffix = complexNumber.suffix();
			} else if (complexNumber.suffix() != suffix) {
				return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
			}
			if (sum == null) {
				sum = complexNumber;
			} else {
				sum += complexNumber;
			}
		}
		if (sum.isValid() == false) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		return new $.ig.excel.ExcelCalcValue(sum.toString());
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImSum::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImSum::CanParameterBeEnumerable(System.Int32)" />*/
	canParameterBeEnumerable: function (parameterIndex) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImSum::CanParameterBeEnumerable(System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImSum::Name()" />*/
	name: function () {
		return "imsum";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImSum::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImSum::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImSum::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImSum::MaxArgs()" />*/
	maxArgs: function () {
		return 0x7FFFFFFF;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImSum::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionImSum', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImSum" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImLog10" />*/

$.ig.util.defType('UltraCalcFunctionImLog10', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImLog10::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var complexNumberArg = numberStack.pop();
		if (complexNumberArg.isError()) {
			return complexNumberArg;
		}
		var complexNumberString = complexNumberArg.toString();
		var complexNumber = new $.ig.UltraCalcFunctionComplex_ComplexNumber(1, numberStack._culture(), complexNumberString);
		if (complexNumber.isValid() == false) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		var result = complexNumber.log10();
		if (result.isValid() == false) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		return new $.ig.excel.ExcelCalcValue(result.toString());
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImLog10::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImLog10::Name()" />*/
	name: function () {
		return "imlog10";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImLog10::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImLog10::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImLog10::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImLog10::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImLog10::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImLog10::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return (isCreatedFromRegionReference == false);
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImLog10::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionImLog10', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImLog10" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImLog2" />*/

$.ig.util.defType('UltraCalcFunctionImLog2', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImLog2::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var complexNumberArg = numberStack.pop();
		if (complexNumberArg.isError()) {
			return complexNumberArg;
		}
		var complexNumberString = complexNumberArg.toString();
		var complexNumber = new $.ig.UltraCalcFunctionComplex_ComplexNumber(1, numberStack._culture(), complexNumberString);
		if (complexNumber.isValid() == false) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		var result = complexNumber.log2();
		if (result.isValid() == false) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		return new $.ig.excel.ExcelCalcValue(result.toString());
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImLog2::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImLog2::Name()" />*/
	name: function () {
		return "imlog2";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImLog2::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImLog2::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImLog2::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImLog2::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImLog2::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImLog2::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return (isCreatedFromRegionReference == false);
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImLog2::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionImLog2', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImLog2" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImSin" />*/

$.ig.util.defType('UltraCalcFunctionImSin', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImSin::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var complexNumberArg = numberStack.pop();
		if (complexNumberArg.isError()) {
			return complexNumberArg;
		}
		var complexNumberString = complexNumberArg.toString();
		var complexNumber = new $.ig.UltraCalcFunctionComplex_ComplexNumber(1, numberStack._culture(), complexNumberString);
		if (complexNumber.isValid() == false) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		var result = complexNumber.sin();
		if (result.isValid() == false) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		return new $.ig.excel.ExcelCalcValue(result.toString());
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImSin::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImSin::Name()" />*/
	name: function () {
		return "imsin";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImSin::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImSin::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImSin::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImSin::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImSin::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImSin::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return (isCreatedFromRegionReference == false);
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImSin::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionImSin', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImSin" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImSqrt" />*/

$.ig.util.defType('UltraCalcFunctionImSqrt', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImSqrt::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var complexNumberArg = numberStack.pop();
		if (complexNumberArg.isError()) {
			return complexNumberArg;
		}
		var complexNumberString = complexNumberArg.toString();
		var complexNumber = new $.ig.UltraCalcFunctionComplex_ComplexNumber(1, numberStack._culture(), complexNumberString);
		if (complexNumber.isValid() == false) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		var result = complexNumber.sqrt();
		if (result.isValid() == false) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		return new $.ig.excel.ExcelCalcValue(result.toString());
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImSqrt::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImSqrt::Name()" />*/
	name: function () {
		return "imsqrt";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImSqrt::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImSqrt::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImSqrt::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImSqrt::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImSqrt::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImSqrt::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return (isCreatedFromRegionReference == false);
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImSqrt::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionImSqrt', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImSqrt" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImPower" />*/

$.ig.util.defType('UltraCalcFunctionImPower', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImPower::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var arg = numberStack.pop();
		if (arg.isError()) {
			return new $.ig.excel.ExcelCalcValue(arg.toErrorValue());
		}
		var power = arg._toDouble3();
		var complexNumberArg = numberStack.pop();
		if (complexNumberArg.isError()) {
			return complexNumberArg;
		}
		var complexNumberString = complexNumberArg.toString();
		var complexNumber = new $.ig.UltraCalcFunctionComplex_ComplexNumber(1, numberStack._culture(), complexNumberString);
		if (complexNumber.isValid() == false) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		var result = complexNumber.power(power);
		if (result.isValid() == false) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		return new $.ig.excel.ExcelCalcValue(result.toString());
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImPower::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImPower::Name()" />*/
	name: function () {
		return "impower";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImPower::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImPower::MinArgs()" />*/
	minArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImPower::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImPower::MaxArgs()" />*/
	maxArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImPower::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImPower::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return (isCreatedFromRegionReference == false);
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImPower::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionImPower', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionImPower" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDollarFr" />*/

$.ig.util.defType('UltraCalcFunctionDollarFr', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDollarFr::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var arg = numberStack.pop();
		if (arg.isError()) {
			return new $.ig.excel.ExcelCalcValue(arg.toErrorValue());
		}
		var d = arg._toDecimal2();
		if (d < 0) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		var denominator = $.ig.truncate(d);
		if (denominator == 0) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.div));
		}
		arg = numberStack.pop();
		if (arg.isError()) {
			return new $.ig.excel.ExcelCalcValue(arg.toErrorValue());
		}
		var dollarAmount = arg._toDouble3();
		var wholeDollarAmount = $.ig.MathUtilities.prototype.truncate(dollarAmount);
		var fractionDollarAmount = dollarAmount - wholeDollarAmount;
		fractionDollarAmount *= denominator;
		var divisor = $.ig.UltraCalcFunctionDollarFr.prototype._calculateBase(denominator);
		fractionDollarAmount /= divisor;
		dollarAmount = wholeDollarAmount + fractionDollarAmount;
		return new $.ig.excel.ExcelCalcValue(dollarAmount);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDollarFr::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDollarFr::CalculateBase(System.Int32)" />*/
	_calculateBase: function (denominator) {
		var log10 = Math.log10(denominator);
		var round = Math.round(log10);
		var pow = Math.pow(10, round);
		if (pow < denominator) {
			pow *= 10;
		}
		var divisor = Math.round10N(pow, 0);
		return divisor;
	}
	/*<EndMethod Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDollarFr::CalculateBase(System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDollarFr::Name()" />*/
	name: function () {
		return "dollarfr";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDollarFr::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDollarFr::MinArgs()" />*/
	minArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDollarFr::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDollarFr::MaxArgs()" />*/
	maxArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDollarFr::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionDollarFr', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDollarFr" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDollarDe" />*/

$.ig.util.defType('UltraCalcFunctionDollarDe', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDollarDe::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var arg = numberStack.pop();
		if (arg.isError()) {
			return new $.ig.excel.ExcelCalcValue(arg.toErrorValue());
		}
		var d = arg._toDecimal2();
		if (d < 0) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		var denominator = $.ig.truncate(d);
		if (denominator == 0) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.div));
		}
		arg = numberStack.pop();
		if (arg.isError()) {
			return new $.ig.excel.ExcelCalcValue(arg.toErrorValue());
		}
		var dollarAmount = arg._toDouble3();
		var wholeDollarAmount = $.ig.MathUtilities.prototype.truncate(dollarAmount);
		var fractionDollarAmount = dollarAmount - wholeDollarAmount;
		fractionDollarAmount /= denominator;
		var multiplier = $.ig.UltraCalcFunctionDollarFr.prototype._calculateBase(denominator);
		fractionDollarAmount *= multiplier;
		dollarAmount = wholeDollarAmount + fractionDollarAmount;
		return new $.ig.excel.ExcelCalcValue(dollarAmount);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDollarDe::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDollarDe::Name()" />*/
	name: function () {
		return "dollarde";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDollarDe::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDollarDe::MinArgs()" />*/
	minArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDollarDe::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDollarDe::MaxArgs()" />*/
	maxArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDollarDe::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionDollarDe', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDollarDe" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionInfo" />*/

$.ig.util.defType('UltraCalcFunctionInfo', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionInfo::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var arg = numberStack.pop();
		if (arg.isError()) {
			return new $.ig.excel.ExcelCalcValue(arg.toErrorValue());
		}
		var type = arg.toString();
		switch (type) {
			case "system": return new $.ig.excel.ExcelCalcValue("pcdos");
			case "numfile":
			case "origin":
			case "recalc":
			case "release":
				break;
			case "memavail":
			case "memused":
			case "totmem":
				break;
		}
		return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.nA));
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionInfo::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionInfo::Name()" />*/
	name: function () {
		return "info";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionInfo::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionInfo::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionInfo::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionInfo::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionInfo::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionInfo', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionInfo" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionN" />*/

$.ig.util.defType('UltraCalcFunctionN', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionN::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var arg = numberStack.pop();
		if (arg.isError()) {
			return new $.ig.excel.ExcelCalcValue(arg.toErrorValue());
		}
		var n;
		if (arg.isBoolean()) {
			n = arg._toBoolean1() ? 1 : 0;
			return new $.ig.excel.ExcelCalcValue(n);
		}
		var value = arg._getResolvedValue();
		if ($.ig.util.cast($.ig.Date.prototype.$type, value) !== null) {
			return new $.ig.excel.ExcelCalcValue(value);
		}
		if (typeof value === 'string') {
			return new $.ig.excel.ExcelCalcValue(0);
		}
		var success = (function () { var $ret = arg._toDouble1(n); n = $ret.p0; return $ret.ret; }());
		if (success) {
			return new $.ig.excel.ExcelCalcValue(n);
		}
		return new $.ig.excel.ExcelCalcValue(0);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionN::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionN::Name()" />*/
	name: function () {
		return "n";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionN::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionN::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionN::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionN::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionN::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionN::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return (isCreatedFromRegionReference == false);
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionN::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionN', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionN" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFact" />*/

$.ig.util.defType('UltraCalcFunctionFact', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFact::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var arg = numberStack.pop();
		if (arg.isError()) {
			return new $.ig.excel.ExcelCalcValue(arg.toErrorValue());
		}
		var d = arg._toDecimal2();
		if (d < 0) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		var number = $.ig.truncate(d);
		var factorial = $.ig.UltraCalcFunctionFact.prototype._factorial(number);
		if (Number.isInfinity(factorial)) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		return new $.ig.excel.ExcelCalcValue(factorial);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFact::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFact::Name()" />*/
	name: function () {
		return "fact";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFact::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFact::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFact::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFact::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFact::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFact::Factorial(System.Int32)" />*/
	_factorial: function (number) {
		return $.ig.UltraCalcFunctionFact.prototype._factorial1(number, 1);
	}
	/*<EndMethod Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFact::Factorial(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFact::Factorial(System.Int32, System.Int32)" />*/
	_factorial1: function (number, step) {
		if (number == 0) {
			number = 1;
		}
		var factorial = 1;
		for (var i = number; i > 1; i -= step) {
			factorial *= i;
		}
		return factorial;
	}
	/*<EndMethod Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFact::Factorial(System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFact::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFact::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionFact', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFact" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFactDouble" />*/

$.ig.util.defType('UltraCalcFunctionFactDouble', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFactDouble::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var arg = numberStack.pop();
		if (arg.isError()) {
			return new $.ig.excel.ExcelCalcValue(arg.toErrorValue());
		}
		var d = arg._toDecimal2();
		if (d < 0) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		var number = $.ig.truncate(d);
		var factorial = $.ig.UltraCalcFunctionFact.prototype._factorial1(number, 2);
		if (Number.isInfinity(factorial)) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		return new $.ig.excel.ExcelCalcValue(factorial);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFactDouble::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFactDouble::Name()" />*/
	name: function () {
		return "factdouble";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFactDouble::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFactDouble::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFactDouble::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFactDouble::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFactDouble::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFactDouble::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return (isCreatedFromRegionReference == false);
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFactDouble::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionFactDouble', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionFactDouble" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCombin" />*/

$.ig.util.defType('UltraCalcFunctionCombin', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCombin::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var arg = numberStack.pop();
		if (arg.isError()) {
			return new $.ig.excel.ExcelCalcValue(arg.toErrorValue());
		}
		var numberChosenD = arg._toDecimal2();
		arg = numberStack.pop();
		if (arg.isError()) {
			return new $.ig.excel.ExcelCalcValue(arg.toErrorValue());
		}
		var numberD = arg._toDecimal2();
		var numberChosen = $.ig.truncate(numberChosenD);
		var number = $.ig.truncate(numberD);
		if (numberD < 0 || numberChosenD < 0 || number < numberChosen) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		var combinations = $.ig.UltraCalcFunctionCombin.prototype._combinations(number, numberChosen, false);
		if ($.ig.util.isNaN(combinations)) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		return new $.ig.excel.ExcelCalcValue(combinations);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCombin::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCombin::Combinations(System.Int32, System.Int32, System.Boolean)" />*/
	_combinations: function (number, numberChosen, withRepetitions) {
		if (withRepetitions) {
			number = number + numberChosen - 1;
		}
		if (number <= 170) {
			var nFact = $.ig.UltraCalcFunctionFact.prototype._factorial(number);
			var numberChosenFact = $.ig.UltraCalcFunctionFact.prototype._factorial(numberChosen);
			var nMinusK = number - numberChosen;
			var nMinusKFact = $.ig.UltraCalcFunctionFact.prototype._factorial(nMinusK);
			var combinations = nFact / (numberChosenFact * nMinusKFact);
			return combinations;
		} else {
			return $.ig.UltraCalcFunctionCombin.prototype._largeCombinations(number, numberChosen);
		}
	}
	/*<EndMethod Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCombin::Combinations(System.Int32, System.Int32, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCombin::LargeCombinations(System.Int32, System.Int32)" />*/
	_largeCombinations: function (n, k) {
		if (k > n) {
			return NaN;
		}
		if ($.ig.UltraCalcFunctionCombin.prototype.___tempKs == null) {
			$.ig.UltraCalcFunctionCombin.prototype.___tempKs = new $.ig.Stack$1($.ig.Number.prototype.$type);
		} else {
			$.ig.UltraCalcFunctionCombin.prototype.___tempKs.clear();
		}
		if ($.ig.UltraCalcFunctionCombin.prototype.___tempNs == null) {
			$.ig.UltraCalcFunctionCombin.prototype.___tempNs = new $.ig.Stack$1($.ig.Number.prototype.$type);
		} else {
			$.ig.UltraCalcFunctionCombin.prototype.___tempNs.clear();
		}
		var value = 1;
		while (true) {
			if (k <= 0) {
				break;
			}
			if (k > $.ig.intDivide(n, 2)) {
				k = n - k;
			} else {
				$.ig.UltraCalcFunctionCombin.prototype.___tempKs.push(k);
				$.ig.UltraCalcFunctionCombin.prototype.___tempNs.push(n);
				n--;
				k--;
			}
		}
		while ($.ig.UltraCalcFunctionCombin.prototype.___tempNs.count() > 0) {
			var n1 = $.ig.UltraCalcFunctionCombin.prototype.___tempNs.pop();
			var k1 = $.ig.UltraCalcFunctionCombin.prototype.___tempKs.pop();
			value = n1 * value / k1;
		}
		return value;
	}
	/*<EndMethod Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCombin::LargeCombinations(System.Int32, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCombin::Name()" />*/
	name: function () {
		return "combin";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCombin::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCombin::MinArgs()" />*/
	minArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCombin::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCombin::MaxArgs()" />*/
	maxArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCombin::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionCombin', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCombin" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCombina" />*/

$.ig.util.defType('UltraCalcFunctionCombina', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCombina::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var arg = numberStack.pop();
		if (arg.isError()) {
			return new $.ig.excel.ExcelCalcValue(arg.toErrorValue());
		}
		var numberChosenD = arg._toDecimal2();
		arg = numberStack.pop();
		if (arg.isError()) {
			return new $.ig.excel.ExcelCalcValue(arg.toErrorValue());
		}
		var numberD = arg._toDecimal2();
		var numberChosen = $.ig.truncate(numberChosenD);
		var number = $.ig.truncate(numberD);
		if (numberD < 0 || numberChosenD < 0 || (number == 0 && numberChosen > 0)) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		var combinations = $.ig.UltraCalcFunctionCombin.prototype._combinations(number, numberChosen, true);
		if ($.ig.util.isNaN(combinations)) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		return new $.ig.excel.ExcelCalcValue(combinations);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCombina::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCombina::Name()" />*/
	name: function () {
		return "combina";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCombina::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCombina::MinArgs()" />*/
	minArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCombina::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCombina::MaxArgs()" />*/
	maxArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCombina::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionCombina', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCombina" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBinomDist" />*/

$.ig.util.defType('UltraCalcFunctionBinomDist', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBinomDist::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var arg = numberStack.pop();
		if (arg.isError()) {
			return new $.ig.excel.ExcelCalcValue(arg.toErrorValue());
		}
		var cumulative = arg._toBoolean1();
		arg = numberStack.pop();
		if (arg.isError()) {
			return new $.ig.excel.ExcelCalcValue(arg.toErrorValue());
		}
		var probability = arg._toDouble3();
		arg = numberStack.pop();
		if (arg.isError()) {
			return new $.ig.excel.ExcelCalcValue(arg.toErrorValue());
		}
		var trials = $.ig.truncate(arg._toDecimal2());
		arg = numberStack.pop();
		if (arg.isError()) {
			return new $.ig.excel.ExcelCalcValue(arg.toErrorValue());
		}
		var number = $.ig.truncate(arg._toDecimal2());
		return $.ig.UltraCalcFunctionBinomDist.prototype._binomDist(trials, probability, cumulative ? 0 : number, number);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBinomDist::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBinomDist::BinomDist(System.Int32, System.Double, System.Int32, System.Int32)" />*/
	_binomDist: function (trials, probability, numberLower, numberUpper) {
		if (numberLower < 0 || numberLower > trials || probability < 0 || probability > 1 || numberLower > numberUpper || numberUpper > trials) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		var value = 0;
		if (trials >= 1030) {
			var EssentiallyZero = Math.pow(10, -12);
			var totalUnscaledProbability = 0;
			var unscaledResult = 0;
			var x1 = numberLower;
			var x2 = numberUpper;
			var n = trials;
			var p = probability;
			var m = $.ig.truncate((n * p));
			var hasRange = numberLower != numberUpper;
			totalUnscaledProbability++;
			if (x1 <= m && m <= x2) {
				unscaledResult++;
			}
			var previousValue = 1;
			var done = false;
			var k = m + 1;
			while (!done && k <= n) {
				var currentValue = previousValue * (n - k + 1) * p / (k * (1 - p));
				totalUnscaledProbability += currentValue;
				if (x1 <= k && k <= x2) {
					unscaledResult += currentValue;
				}
				if (currentValue <= EssentiallyZero) {
					done = true;
				}
				previousValue = currentValue;
				k++;
			}
			previousValue = 1;
			done = false;
			k = m - 1;
			while (!done && k >= 0) {
				var currentValue1 = previousValue * (k + 1) * (1 - p) / ((n - k) * p);
				totalUnscaledProbability += currentValue1;
				if (x1 <= k && k <= x2) {
					unscaledResult += currentValue1;
				}
				if (currentValue1 <= EssentiallyZero) {
					done = true;
				}
				previousValue = currentValue1;
				k--;
			}
			value = unscaledResult / totalUnscaledProbability;
		} else {
			for (var i = numberLower; i <= numberUpper && !$.ig.util.isNaN(value); i++) {
				value += $.ig.UltraCalcFunctionBinomDist.prototype._binomialProbabilityMass(i, trials, probability);
			}
		}
		if ($.ig.util.isNaN(value)) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		return new $.ig.excel.ExcelCalcValue(value);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBinomDist::BinomDist(System.Int32, System.Double, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBinomDist::BinomialProbabilityMass(System.Int32, System.Int32, System.Double)" />*/
	_binomialProbabilityMass: function (number, trials, probability) {
		var combinations = $.ig.UltraCalcFunctionCombin.prototype._combinations(trials, number, false);
		return combinations * Math.pow(probability, number) * Math.pow(1 - probability, trials - number);
	}
	/*<EndMethod Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBinomDist::BinomialProbabilityMass(System.Int32, System.Int32, System.Double)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBinomDist::Name()" />*/
	name: function () {
		return "binomdist";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBinomDist::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBinomDist::MinArgs()" />*/
	minArgs: function () {
		return 4;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBinomDist::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBinomDist::MaxArgs()" />*/
	maxArgs: function () {
		return 4;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBinomDist::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionBinomDist', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBinomDist" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCritBinom" />*/

$.ig.util.defType('UltraCalcFunctionCritBinom', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCritBinom::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var arg = numberStack.pop();
		if (arg.isError()) {
			return new $.ig.excel.ExcelCalcValue(arg.toErrorValue());
		}
		var alpha = arg._toDouble3();
		arg = numberStack.pop();
		if (arg.isError()) {
			return new $.ig.excel.ExcelCalcValue(arg.toErrorValue());
		}
		var probability = arg._toDouble3();
		arg = numberStack.pop();
		if (arg.isError()) {
			return new $.ig.excel.ExcelCalcValue(arg.toErrorValue());
		}
		var trials = $.ig.truncate(arg._toDecimal2());
		if (trials < 0 || probability <= 0 || probability >= 1 || alpha <= 0 || alpha >= 1) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		var number = 0;
		if (trials >= 1030) {
			var EssentiallyZero = Math.pow(10, -12);
			var n = trials;
			var p = probability;
			var t, nApprox;
			if (alpha <= 0.5) {
				t = Math.sqrt(Math.log(1 / (alpha * alpha)));
				nApprox = -t + (2.515517 + 0.802853 * t + 0.010328 * t * t) / (1 + 1.432788 * t + 0.189269 * t * t + 0.001308 * t * t * t);
			} else {
				t = Math.sqrt(Math.log(1 / Math.pow(1 - alpha, 2)));
				nApprox = t - (2.515517 + 0.802853 * t + 0.010328 * t * t) / (1 + 1.432788 * t + 0.189269 * t * t + 0.001308 * t * t * t);
			}
			var guess = $.ig.truncate(Math.floor(n * p + nApprox * Math.sqrt(n * p * (1 - p))));
			if (guess < 0) {
				guess = 0;
			} else if (guess > n) {
				guess = n;
			}
			var m = $.ig.truncate((n * p));
			var totalUnscaledProbability = 0;
			var unscaledPGuess = 0;
			var unscaledCumPGuess = 0;
			totalUnscaledProbability = totalUnscaledProbability + 1;
			if (m == guess) {
				unscaledPGuess = unscaledPGuess + 1;
			}
			if (m <= guess) {
				unscaledCumPGuess = unscaledCumPGuess + 1;
			}
			var previousValue = 1;
			var done = false;
			var k = m + 1;
			while (!done && k <= n) {
				var currentValue = previousValue * (n - k + 1) * p / (k * (1 - p));
				totalUnscaledProbability += currentValue;
				if (k == guess) {
					unscaledPGuess += currentValue;
				}
				if (k <= guess) {
					unscaledCumPGuess += currentValue;
				}
				if (currentValue <= EssentiallyZero) {
					done = true;
				}
				previousValue = currentValue;
				k = k + 1;
			}
			previousValue = 1;
			done = false;
			k = m - 1;
			while (!done && k >= 0) {
				var currentValue1 = previousValue * (k + 1) * (1 - p) / ((n - k) * p);
				totalUnscaledProbability = totalUnscaledProbability + currentValue1;
				if (k == guess) {
					unscaledPGuess += currentValue1;
				}
				if (k <= guess) {
					unscaledCumPGuess += currentValue1;
				}
				if (currentValue1 <= EssentiallyZero) {
					done = true;
				}
				previousValue = currentValue1;
				k = k - 1;
			}
			var pGuess = unscaledPGuess / totalUnscaledProbability;
			var cumPGuess = unscaledCumPGuess / totalUnscaledProbability;
			var cumPGuessMinus1 = cumPGuess - pGuess;
			while (true) {
				if (cumPGuessMinus1 < alpha && cumPGuess >= alpha) {
					number = guess;
					break;
				}
				if (cumPGuessMinus1 < alpha && cumPGuess < alpha) {
					var pGuessPlus1 = pGuess * (n - guess) * p / guess / (1 - p);
					cumPGuessMinus1 = cumPGuess;
					cumPGuess = cumPGuess + pGuessPlus1;
					pGuess = pGuessPlus1;
					guess++;
				} else if (cumPGuessMinus1 > alpha && cumPGuess > alpha) {
					var pGuessMinus1 = pGuess * guess * (1 - p) / (n - guess + 1) / p;
					cumPGuess = cumPGuessMinus1;
					cumPGuessMinus1 = cumPGuessMinus1 - pGuess;
					pGuess = pGuessMinus1;
					guess--;
				} else {
					$.ig.Debug.prototype.assert1(false, "Why is it getting here?");
					break;
				}
			}
		} else {
			var value = 0;
			for (number = 0; number <= trials; number++) {
				value += $.ig.UltraCalcFunctionBinomDist.prototype._binomialProbabilityMass(number, trials, probability);
				if (value >= alpha) {
					break;
				}
			}
		}
		return new $.ig.excel.ExcelCalcValue(number);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCritBinom::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCritBinom::Name()" />*/
	name: function () {
		return "critbinom";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCritBinom::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCritBinom::MinArgs()" />*/
	minArgs: function () {
		return 3;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCritBinom::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCritBinom::MaxArgs()" />*/
	maxArgs: function () {
		return 3;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCritBinom::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionCritBinom', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCritBinom" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDegrees" />*/

$.ig.util.defType('UltraCalcFunctionDegrees', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDegrees::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var arg = numberStack.pop();
		if (arg.isError()) {
			return new $.ig.excel.ExcelCalcValue(arg.toErrorValue());
		}
		var radians = arg._toDouble3();
		var degrees = $.ig.UltraCalcFunctionDegrees.prototype._degrees(radians);
		return new $.ig.excel.ExcelCalcValue(degrees);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDegrees::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDegrees::Name()" />*/
	name: function () {
		return "degrees";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDegrees::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDegrees::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDegrees::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDegrees::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDegrees::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDegrees::Degrees(System.Double)" />*/
	_degrees: function (radians) {
		var multiplier = 180 / Math.PI;
		return radians * multiplier;
	}
	/*<EndMethod Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDegrees::Degrees(System.Double)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDegrees::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDegrees::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionDegrees', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDegrees" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRadians" />*/

$.ig.util.defType('UltraCalcFunctionRadians', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRadians::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var arg = numberStack.pop();
		if (arg.isError()) {
			return new $.ig.excel.ExcelCalcValue(arg.toErrorValue());
		}
		var degrees = arg._toDouble3();
		var radians = $.ig.UltraCalcFunctionRadians.prototype._radians(degrees);
		return new $.ig.excel.ExcelCalcValue(radians);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRadians::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRadians::Name()" />*/
	name: function () {
		return "radians";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRadians::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRadians::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRadians::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRadians::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRadians::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRadians::Radians(System.Double)" />*/
	_radians: function (degrees) {
		var multiplier = Math.PI / 180;
		return degrees * multiplier;
	}
	/*<EndMethod Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRadians::Radians(System.Double)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRadians::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRadians::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionRadians', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRadians" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionGcd" />*/

$.ig.util.defType('UltraCalcFunctionGcd', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionGcd::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var args = this._getArguments(numberStack, argumentCount, true);
		var num1 = args[0]._toInt();
		if (num1 < 0) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		var num2;
		if (args.length == 1) {
			return new $.ig.excel.ExcelCalcValue(num1);
		}
		for (var i = 1; i < args.length; i++) {
			var arg = args[i];
			if (arg.isError()) {
				return new $.ig.excel.ExcelCalcValue(arg.toErrorValue());
			}
			num2 = arg._toInt();
			if (num2 < 0) {
				return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
			}
			num1 = $.ig.UltraCalcFunctionGcd.prototype._gCD(num1, num2);
		}
		return new $.ig.excel.ExcelCalcValue(num1);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionGcd::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionGcd::CanParameterBeEnumerable(System.Int32)" />*/
	canParameterBeEnumerable: function (parameterIndex) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionGcd::CanParameterBeEnumerable(System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionGcd::Name()" />*/
	name: function () {
		return "gcd";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionGcd::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionGcd::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionGcd::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionGcd::MaxArgs()" />*/
	maxArgs: function () {
		return 0x7FFFFFFF;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionGcd::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionGcd::GCD(System.Int32, System.Int32)" />*/
	_gCD: function (num1, num2) {
		if (num2 == 0) {
			return num1;
		}
		return $.ig.UltraCalcFunctionGcd.prototype._gCD(num2, num1 % num2);
	}
	/*<EndMethod Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionGcd::GCD(System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionGcd::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return (isCreatedFromRegionReference == false);
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionGcd::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionGcd', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionGcd" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLcm" />*/

$.ig.util.defType('UltraCalcFunctionLcm', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLcm::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var args = this._getArguments(numberStack, argumentCount, true);
		var num1 = args[0]._toInt();
		if (num1 < 0) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		var num2;
		if (args.length == 1) {
			return new $.ig.excel.ExcelCalcValue(num1);
		}
		for (var i = 1; i < args.length; i++) {
			var arg = args[i];
			if (arg.isError()) {
				return new $.ig.excel.ExcelCalcValue(arg.toErrorValue());
			}
			num2 = arg._toInt();
			if (num2 < 0) {
				return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
			}
			num1 = $.ig.UltraCalcFunctionLcm.prototype._lCM(num1, num2);
		}
		return new $.ig.excel.ExcelCalcValue(num1);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLcm::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLcm::CanParameterBeEnumerable(System.Int32)" />*/
	canParameterBeEnumerable: function (parameterIndex) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLcm::CanParameterBeEnumerable(System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLcm::Name()" />*/
	name: function () {
		return "lcm";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLcm::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLcm::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLcm::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLcm::MaxArgs()" />*/
	maxArgs: function () {
		return 0x7FFFFFFF;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLcm::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLcm::LCM(System.Int32, System.Int32)" />*/
	_lCM: function (num1, num2) {
		if (num1 == 0 && num2 == 0) {
			return 0;
		}
		return $.ig.intDivide((num1 * num2), $.ig.UltraCalcFunctionGcd.prototype._gCD(num1, num2));
	}
	/*<EndMethod Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLcm::LCM(System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLcm::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return (isCreatedFromRegionReference == false);
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLcm::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionLcm', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLcm" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMultinomial" />*/

$.ig.util.defType('UltraCalcFunctionMultinomial', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMultinomial::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var args = this._getArguments(numberStack, argumentCount, true);
		var sum = 0;
		var divisor = 1;
		for (var i = 0; i < args.length; i++) {
			var arg = args[i];
			if (arg.isError()) {
				return new $.ig.excel.ExcelCalcValue(arg.toErrorValue());
			}
			var number = arg._toInt();
			if (number < 0) {
				return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
			}
			sum += number;
			divisor *= $.ig.UltraCalcFunctionFact.prototype._factorial(number);
		}
		var dividend = $.ig.UltraCalcFunctionFact.prototype._factorial(sum);
		var multinomial = dividend / divisor;
		return new $.ig.excel.ExcelCalcValue(multinomial);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMultinomial::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMultinomial::CanParameterBeEnumerable(System.Int32)" />*/
	canParameterBeEnumerable: function (parameterIndex) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMultinomial::CanParameterBeEnumerable(System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMultinomial::Name()" />*/
	name: function () {
		return "multinomial";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMultinomial::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMultinomial::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMultinomial::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMultinomial::MaxArgs()" />*/
	maxArgs: function () {
		return 0x7FFFFFFF;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMultinomial::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMultinomial::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return (isCreatedFromRegionReference == false);
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMultinomial::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionMultinomial', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMultinomial" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMRound" />*/

$.ig.util.defType('UltraCalcFunctionMRound', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMRound::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var arg = numberStack.pop();
		if (arg.isError()) {
			return new $.ig.excel.ExcelCalcValue(arg.toErrorValue());
		}
		var multiple = arg._toDouble3();
		var arg2 = numberStack.pop();
		if (arg2.isError()) {
			return new $.ig.excel.ExcelCalcValue(arg2.toErrorValue());
		}
		var number = arg2._toDouble3();
		if (number < 0 && multiple > 0 || number > 0 && multiple < 0) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		var mround = $.ig.UltraCalcFunctionMRound.prototype._mRound(number, multiple);
		return new $.ig.excel.ExcelCalcValue(mround);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMRound::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMRound::Name()" />*/
	name: function () {
		return "mround";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMRound::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMRound::MinArgs()" />*/
	minArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMRound::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMRound::MaxArgs()" />*/
	maxArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMRound::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMRound::MRound(System.Double, System.Double)" />*/
	_mRound: function (number, multiple) {
		var d = number / multiple;
		if (Number.isInfinity(d) || $.ig.util.isNaN(d)) {
			return 0;
		}
		d += 0.5;
		d = Math.floor(d);
		return d * multiple;
	}
	/*<EndMethod Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMRound::MRound(System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMRound::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return (isCreatedFromRegionReference == false);
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMRound::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionMRound', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMRound" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRandBetween" />*/

$.ig.util.defType('UltraCalcFunctionRandBetween', 'BuiltInFunctionBase', {
	init: function () {
		this.__random = new $.ig.Random(0);
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	__random: null,
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRandBetween::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var arg = numberStack.pop();
		if (arg.isError()) {
			return new $.ig.excel.ExcelCalcValue(arg.toErrorValue());
		}
		var max = arg._toInt();
		arg = numberStack.pop();
		if (arg.isError()) {
			return new $.ig.excel.ExcelCalcValue(arg.toErrorValue());
		}
		var min = arg._toInt();
		if (max < min) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		return new $.ig.excel.ExcelCalcValue(this.__random.next2(min, max + 1));
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRandBetween::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRandBetween::Name()" />*/
	name: function () {
		return "randbetween";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRandBetween::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRandBetween::MinArgs()" />*/
	minArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRandBetween::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRandBetween::MaxArgs()" />*/
	maxArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRandBetween::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionRandBetween', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRandBetween" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRoman" />*/

$.ig.util.defType('UltraCalcFunctionRoman', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRoman::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var form;
		var arg;
		if (argumentCount == 2) {
			arg = numberStack.pop();
			if (arg.isError()) {
				return new $.ig.excel.ExcelCalcValue(arg.toErrorValue());
			}
			var formValue = arg._getResolvedValue();
			if ($.ig.util.cast($.ig.Boolean.prototype.$type, formValue) !== null) {
				form = formValue ? 0 : 4;
			} else {
				form = arg._toInt();
			}
		} else {
			form = 0;
		}
		arg = numberStack.pop();
		if (arg.isError()) {
			return new $.ig.excel.ExcelCalcValue(arg.toErrorValue());
		}
		var number = arg._toInt();
		if (number < 0 || number > 3999) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
		}
		var romanNumeral = new $.ig.UltraCalcFunctionRoman_RomanNumeral(number);
		return new $.ig.excel.ExcelCalcValue(romanNumeral.toString2(form));
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRoman::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRoman::Name()" />*/
	name: function () {
		return "roman";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRoman::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRoman::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRoman::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRoman::MaxArgs()" />*/
	maxArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRoman::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRoman::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRoman::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionRoman', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRoman" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRoman_RomanNumeral" />*/

$.ig.util.defType('UltraCalcFunctionRoman_RomanNumeral', 'Object', {
	_number: 0,
	init: function (number) {
		$.ig.Object.prototype.init.call(this);
		if (number < 0 || number > 3999) {
			throw new $.ig.ArgumentException(2, "Number must be between 1 and 3999", "number");
		}
		this._number = number;
	},
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRoman_RomanNumeral::Number()" />*/
	number: function () {
		return this._number;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRoman_RomanNumeral::Number()" />*/
	,
	/*<BeginProperty Name="System.Collections.Generic.List Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRoman_RomanNumeral::ClassicValues()" />*/
	classicValues: function () {
		if ($.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._classicValues == null) {
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._classicValues = new $.ig.List$1($.ig.Tuple$2.prototype.$type.specialize($.ig.Number.prototype.$type, String), 2, 13);
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._classicValues.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 1000, "M"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._classicValues.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 900, "CM"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._classicValues.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 500, "D"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._classicValues.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 400, "CD"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._classicValues.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 100, "C"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._classicValues.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 90, "XC"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._classicValues.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 50, "L"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._classicValues.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 40, "XL"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._classicValues.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 10, "X"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._classicValues.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 9, "IX"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._classicValues.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 5, "V"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._classicValues.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 4, "IV"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._classicValues.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 1, "I"));
		}
		return $.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._classicValues;
	}
	/*<EndProperty Name="System.Collections.Generic.List Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRoman_RomanNumeral::ClassicValues()" />*/
	,
	/*<BeginProperty Name="System.Collections.Generic.List Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRoman_RomanNumeral::ConciseValues1()" />*/
	conciseValues1: function () {
		if ($.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues1 == null) {
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues1 = new $.ig.List$1($.ig.Tuple$2.prototype.$type.specialize($.ig.Number.prototype.$type, String), 2, 17);
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues1.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 1000, "M"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues1.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 950, "LM"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues1.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 900, "CM"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues1.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 500, "D"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues1.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 450, "LD"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues1.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 400, "CD"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues1.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 100, "C"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues1.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 95, "VC"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues1.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 90, "XC"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues1.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 50, "L"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues1.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 45, "VL"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues1.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 40, "XL"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues1.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 10, "X"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues1.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 9, "IX"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues1.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 5, "V"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues1.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 4, "IV"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues1.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 1, "I"));
		}
		return $.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues1;
	}
	/*<EndProperty Name="System.Collections.Generic.List Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRoman_RomanNumeral::ConciseValues1()" />*/
	,
	/*<BeginProperty Name="System.Collections.Generic.List Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRoman_RomanNumeral::ConciseValues2()" />*/
	conciseValues2: function () {
		if ($.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues2 == null) {
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues2 = new $.ig.List$1($.ig.Tuple$2.prototype.$type.specialize($.ig.Number.prototype.$type, String), 2, 21);
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues2.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 1000, "M"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues2.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 990, "XM"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues2.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 950, "LM"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues2.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 900, "CM"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues2.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 500, "D"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues2.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 490, "XD"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues2.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 450, "LD"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues2.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 400, "CD"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues2.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 100, "C"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues2.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 99, "IC"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues2.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 95, "VC"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues2.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 90, "XC"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues2.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 50, "L"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues2.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 49, "IL"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues2.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 45, "VL"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues2.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 40, "XL"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues2.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 10, "X"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues2.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 9, "IX"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues2.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 5, "V"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues2.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 4, "IV"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues2.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 1, "I"));
		}
		return $.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues2;
	}
	/*<EndProperty Name="System.Collections.Generic.List Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRoman_RomanNumeral::ConciseValues2()" />*/
	,
	/*<BeginProperty Name="System.Collections.Generic.List Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRoman_RomanNumeral::ConciseValues3()" />*/
	conciseValues3: function () {
		if ($.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues3 == null) {
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues3 = new $.ig.List$1($.ig.Tuple$2.prototype.$type.specialize($.ig.Number.prototype.$type, String), 2, 23);
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues3.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 1000, "M"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues3.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 995, "VM"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues3.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 990, "XM"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues3.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 950, "LM"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues3.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 900, "CM"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues3.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 500, "D"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues3.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 495, "VD"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues3.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 490, "XD"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues3.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 450, "LD"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues3.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 400, "CD"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues3.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 100, "C"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues3.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 99, "IC"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues3.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 95, "VC"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues3.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 90, "XC"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues3.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 50, "L"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues3.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 49, "IL"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues3.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 45, "VL"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues3.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 40, "XL"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues3.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 10, "X"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues3.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 9, "IX"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues3.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 5, "V"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues3.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 4, "IV"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues3.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 1, "I"));
		}
		return $.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues3;
	}
	/*<EndProperty Name="System.Collections.Generic.List Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRoman_RomanNumeral::ConciseValues3()" />*/
	,
	/*<BeginProperty Name="System.Collections.Generic.List Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRoman_RomanNumeral::SimplifiedValues()" />*/
	simplifiedValues: function () {
		if ($.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._simplifiedValues == null) {
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._simplifiedValues = new $.ig.List$1($.ig.Tuple$2.prototype.$type.specialize($.ig.Number.prototype.$type, String), 2, 25);
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._simplifiedValues.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 1000, "M"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._simplifiedValues.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 999, "IM"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._simplifiedValues.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 995, "VM"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._simplifiedValues.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 990, "XM"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._simplifiedValues.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 950, "LM"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._simplifiedValues.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 900, "CM"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._simplifiedValues.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 500, "D"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._simplifiedValues.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 499, "ID"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._simplifiedValues.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 495, "VD"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._simplifiedValues.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 490, "XD"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._simplifiedValues.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 450, "LD"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._simplifiedValues.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 400, "CD"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._simplifiedValues.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 100, "C"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._simplifiedValues.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 99, "IC"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._simplifiedValues.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 95, "VC"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._simplifiedValues.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 90, "XC"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._simplifiedValues.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 50, "L"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._simplifiedValues.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 49, "IL"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._simplifiedValues.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 45, "VL"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._simplifiedValues.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 40, "XL"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._simplifiedValues.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 10, "X"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._simplifiedValues.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 9, "IX"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._simplifiedValues.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 5, "V"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._simplifiedValues.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 4, "IV"));
			$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._simplifiedValues.add($.ig.Tuple.prototype.create$2($.ig.Number.prototype.$type, String, 1, "I"));
		}
		return $.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._simplifiedValues;
	}
	/*<EndProperty Name="System.Collections.Generic.List Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRoman_RomanNumeral::SimplifiedValues()" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRoman_RomanNumeral::ToString()" />*/
	toString: function () {
		return this.toString2(0);
	}
	/*<EndMethod Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRoman_RomanNumeral::ToString()" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRoman_RomanNumeral::ToString(System.Boolean)" />*/
	toString1: function (form) {
		if (form) {
			return this.toString2(0);
		} else {
			return this.toString2(4);
		}
	}
	/*<EndMethod Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRoman_RomanNumeral::ToString(System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRoman_RomanNumeral::ToString(System.Int32)" />*/
	toString2: function (form) {
		if (this._number == 0) {
			return String.empty();
		}
		return $.ig.UltraCalcFunctionRoman_RomanNumeral.prototype.getRomanNumeral(this._number, form);
	}
	/*<EndMethod Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRoman_RomanNumeral::ToString(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRoman_RomanNumeral::GetRomanNumeral(System.Int32, System.Int32)" />*/
	getRomanNumeral: function (number, form) {
		var values;
		switch (form) {
			case 0:
				values = $.ig.UltraCalcFunctionRoman_RomanNumeral.prototype.classicValues();
				break;
			case 1:
				values = $.ig.UltraCalcFunctionRoman_RomanNumeral.prototype.conciseValues1();
				break;
			case 2:
				values = $.ig.UltraCalcFunctionRoman_RomanNumeral.prototype.conciseValues2();
				break;
			case 3:
				values = $.ig.UltraCalcFunctionRoman_RomanNumeral.prototype.conciseValues3();
				break;
			case 4:
				values = $.ig.UltraCalcFunctionRoman_RomanNumeral.prototype.simplifiedValues();
				break;
			default: throw new $.ig.ArgumentException(1, "form");
		}
		var SB = new $.ig.StringBuilder(0);
		var rn = String.empty();
		var en = values.getEnumerator();
		while (en.moveNext()) {
			var value = en.current();
			while (number >= value.item1()) {
				number -= value.item1();
				SB.append5(value.item2());
			}
		}
		return SB.toString();
	}
	/*<EndMethod Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRoman_RomanNumeral::GetRomanNumeral(System.Int32, System.Int32)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionRoman_RomanNumeral', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRoman_RomanNumeral" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRoundDown" />*/

$.ig.util.defType('UltraCalcFunctionRoundDown', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRoundDown::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var arg = numberStack.pop();
		if (arg.isError()) {
			return new $.ig.excel.ExcelCalcValue(arg.toErrorValue());
		}
		var digits = arg._toInt();
		var arg2 = numberStack.pop();
		if (arg2.isError()) {
			return new $.ig.excel.ExcelCalcValue(arg2.toErrorValue());
		}
		var number = arg2._toDouble3();
		var power = digits;
		var multiplier = Math.pow(10, power);
		number *= multiplier;
		number = $.ig.MathUtilities.prototype.roundToExcelDisplayValue(number);
		number = $.ig.MathUtilities.prototype.truncate(number);
		number /= multiplier;
		number = $.ig.MathUtilities.prototype.roundToExcelDisplayValue(number);
		if (number == -0) {
			number = 0;
		}
		return new $.ig.excel.ExcelCalcValue(number);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRoundDown::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRoundDown::Name()" />*/
	name: function () {
		return "rounddown";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRoundDown::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRoundDown::MinArgs()" />*/
	minArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRoundDown::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRoundDown::MaxArgs()" />*/
	maxArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRoundDown::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRoundDown::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRoundDown::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionRoundDown', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRoundDown" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRoundUp" />*/

$.ig.util.defType('UltraCalcFunctionRoundUp', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRoundUp::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var arg = numberStack.pop();
		if (arg.isError()) {
			return new $.ig.excel.ExcelCalcValue(arg.toErrorValue());
		}
		var digits = arg._toInt();
		var arg2 = numberStack.pop();
		if (arg2.isError()) {
			return new $.ig.excel.ExcelCalcValue(arg2.toErrorValue());
		}
		var number = arg2._toDouble3();
		var sign = number >= 0 ? 1 : -1;
		number = Math.abs(number);
		var multiplier = Math.pow(10, digits);
		number *= multiplier;
		number = $.ig.MathUtilities.prototype.roundToExcelDisplayValue(number);
		number = Math.ceil(number);
		number /= multiplier;
		number *= sign;
		number = $.ig.MathUtilities.prototype.roundToExcelDisplayValue(number);
		if (number == -0) {
			number = 0;
		}
		return new $.ig.excel.ExcelCalcValue(number);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRoundUp::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRoundUp::Name()" />*/
	name: function () {
		return "roundup";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRoundUp::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRoundUp::MinArgs()" />*/
	minArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRoundUp::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRoundUp::MaxArgs()" />*/
	maxArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRoundUp::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRoundUp::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRoundUp::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionRoundUp', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRoundUp" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSeriesSum" />*/

$.ig.util.defType('UltraCalcFunctionSeriesSum', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSeriesSum::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var coefficientArgs = this._getArguments(numberStack, argumentCount - 3, true);
		$.ig.Array.prototype.reverse(coefficientArgs);
		var arg = numberStack.pop();
		if (arg.isError()) {
			return new $.ig.excel.ExcelCalcValue(arg.toErrorValue());
		}
		var step = arg._toInt();
		arg = numberStack.pop();
		if (arg.isError()) {
			return new $.ig.excel.ExcelCalcValue(arg.toErrorValue());
		}
		var initialPower = arg._toInt();
		arg = numberStack.pop();
		if (arg.isError()) {
			return new $.ig.excel.ExcelCalcValue(arg.toErrorValue());
		}
		var inputValue = arg._toDouble3();
		var power = initialPower;
		var result = 0;
		for (var i = 0; i < coefficientArgs.length; i++) {
			var coefficientArg = coefficientArgs[i];
			if (coefficientArg.isError()) {
				return new $.ig.excel.ExcelCalcValue(coefficientArg.toErrorValue());
			}
			var coefficient = coefficientArg._toDouble3();
			var term = coefficient * Math.pow(inputValue, power);
			result += term;
			power += step;
		}
		return new $.ig.excel.ExcelCalcValue(result);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSeriesSum::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSeriesSum::CanParameterBeEnumerable(System.Int32)" />*/
	canParameterBeEnumerable: function (parameterIndex) {
		return parameterIndex == 3;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSeriesSum::CanParameterBeEnumerable(System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSeriesSum::Name()" />*/
	name: function () {
		return "seriessum";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSeriesSum::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSeriesSum::MinArgs()" />*/
	minArgs: function () {
		return 4;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSeriesSum::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSeriesSum::MaxArgs()" />*/
	maxArgs: function () {
		return 4;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSeriesSum::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSeriesSum::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return (isCreatedFromRegionReference == false);
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSeriesSum::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionSeriesSum', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSeriesSum" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSign" />*/

$.ig.util.defType('UltraCalcFunctionSign', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSign::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var arg = numberStack.pop();
		if (arg.isError()) {
			return new $.ig.excel.ExcelCalcValue(arg.toErrorValue());
		}
		var number = arg._toDouble3();
		var sign;
		if (number < 0) {
			sign = -1;
		} else if (number > 0) {
			sign = 1;
		} else {
			sign = 0;
		}
		return new $.ig.excel.ExcelCalcValue(sign);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSign::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSign::Name()" />*/
	name: function () {
		return "sign";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSign::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSign::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSign::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSign::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSign::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSign::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSign::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionSign', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSign" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSqrtPi" />*/

$.ig.util.defType('UltraCalcFunctionSqrtPi', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSqrtPi::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var arg = numberStack.pop();
		if (arg.isError()) {
			return new $.ig.excel.ExcelCalcValue(arg.toErrorValue());
		}
		var number = arg._toDouble3();
		if (number < 0) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.num));
		}
		var sqrtpi = Math.sqrt(Math.PI * number);
		return new $.ig.excel.ExcelCalcValue(sqrtpi);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSqrtPi::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSqrtPi::Name()" />*/
	name: function () {
		return "sqrtpi";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSqrtPi::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSqrtPi::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSqrtPi::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSqrtPi::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSqrtPi::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSqrtPi::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return (isCreatedFromRegionReference == false);
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSqrtPi::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionSqrtPi', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSqrtPi" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionChoose" />*/

$.ig.util.defType('UltraCalcFunctionChoose', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionChoose::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var chooseValues = new $.ig.List$1($.ig.excel.ExcelCalcValue.prototype.$type, 0);
		for (var i = 0; i < argumentCount - 1; i++) {
			chooseValues.insert(0, numberStack.pop());
		}
		var indexNumArg = numberStack.pop();
		if (indexNumArg.isError()) {
			return new $.ig.excel.ExcelCalcValue(indexNumArg.toErrorValue());
		}
		var indexNumRaw;
		if ((function () { var $ret = indexNumArg._toDouble1(indexNumRaw); indexNumRaw = $ret.p0; return $ret.ret; }()) == false) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
		}
		var indexNum = $.ig.truncate(Math.floor(indexNumRaw));
		if (indexNum < 1 || chooseValues.count() < indexNum) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
		}
		return chooseValues.__inner[indexNum - 1];
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionChoose::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionChoose::Name()" />*/
	name: function () {
		return "choose";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionChoose::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionChoose::MinArgs()" />*/
	minArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionChoose::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionChoose::MaxArgs()" />*/
	maxArgs: function () {
		return 0x7FFFFFFF;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionChoose::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionChoose::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return (isCreatedFromRegionReference == false);
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionChoose::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionChoose::IsSelectorFunction()" />*/
	_isSelectorFunction: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionChoose::IsSelectorFunction()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionChoose::WillParameterBeDereferenced(System.Int32)" />*/
	_willParameterBeDereferenced: function (parameterIndex) {
		if (parameterIndex == 0) {
			return true;
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionChoose::WillParameterBeDereferenced(System.Int32)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionChoose', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionChoose" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRept" />*/

$.ig.util.defType('UltraCalcFunctionRept', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRept::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var repeatCountArg = numberStack.pop();
		var textArg = numberStack.pop();
		if (textArg.isError()) {
			return new $.ig.excel.ExcelCalcValue(textArg.toErrorValue());
		}
		if (repeatCountArg.isError()) {
			return new $.ig.excel.ExcelCalcValue(repeatCountArg.toErrorValue());
		}
		var repeatCount = repeatCountArg._toInt321();
		if (repeatCount < 0) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
		}
		var text = textArg.toString();
		if (repeatCount == 0 || String.isNullOrEmpty(text)) {
			return new $.ig.excel.ExcelCalcValue(String.empty());
		}
		var finalLength = text.length * repeatCount;
		if (32767 < finalLength) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
		}
		var sb = new $.ig.StringBuilder(1, finalLength);
		for (var i = 0; i < repeatCount; i++) {
			sb.append5(text);
		}
		return new $.ig.excel.ExcelCalcValue(sb.toString());
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRept::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRept::Name()" />*/
	name: function () {
		return "rept";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRept::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRept::MinArgs()" />*/
	minArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRept::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRept::MaxArgs()" />*/
	maxArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRept::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRept::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRept::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionRept', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRept" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSubtotal" />*/

$.ig.util.defType('UltraCalcFunctionSubtotal', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSubtotal::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var rawValues = new Array(argumentCount - 1);
		for (var i = rawValues.length - 1; i >= 0; i--) {
			var value = numberStack.pop();
			if (value.isError()) {
				return value;
			}
			rawValues[i] = value;
		}
		var functionNumValue = numberStack.pop();
		if (functionNumValue.isError()) {
			return functionNumValue;
		}
		var functionNumDouble;
		if ((function () { var $ret = functionNumValue._toDouble1(functionNumDouble); functionNumDouble = $ret.p0; return $ret.ret; }()) == false) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
		}
		var functionNum = $.ig.truncate(functionNumDouble);
		var ignoreHiddenValues = false;
		if (functionNum > 100) {
			ignoreHiddenValues = true;
			functionNum -= 100;
		}
		var args = new $.ig.List$1($.ig.excel.ExcelCalcValue.prototype.$type, 0);
		for (var i1 = 0; i1 < rawValues.length; i1++) {
			this._getArguments3(args, rawValues[i1], false, ignoreHiddenValues);
		}
		switch (functionNum) {
			case 1: return $.ig.UltraCalcFunctionAverage.prototype._evaluateHelper(args);
			case 2: return $.ig.UltraCalcFunctionCount.prototype._evaluateHelper(args);
			case 3: return $.ig.UltraCalcFunctionCountA.prototype._evaluateHelper(args);
			case 4: return $.ig.UltraCalcFunctionMax.prototype._evaluateHelper(args);
			case 5: return $.ig.UltraCalcFunctionMin.prototype._evaluateHelper(args);
			case 6: return $.ig.UltraCalcFunctionProduct.prototype._evaluateHelper(args);
			case 7: return $.ig.UltraCalcFunctionStdev.prototype._evaluateHelper(args);
			case 9: return $.ig.UltraCalcFunctionSum.prototype._evaluateHelper(args);
			case 10: return $.ig.UltraCalcFunctionVar.prototype._evaluateHelper(args);
			default: return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
		}
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSubtotal::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSubtotal::CanParameterBeEnumerable(System.Int32)" />*/
	canParameterBeEnumerable: function (parameterIndex) {
		return 1 <= parameterIndex;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSubtotal::CanParameterBeEnumerable(System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSubtotal::Name()" />*/
	name: function () {
		return "subtotal";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSubtotal::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSubtotal::MinArgs()" />*/
	minArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSubtotal::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSubtotal::MaxArgs()" />*/
	maxArgs: function () {
		return 0x7FFFFFFF;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSubtotal::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSubtotal::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSubtotal::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionSubtotal', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSubtotal" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionText" />*/

$.ig.util.defType('UltraCalcFunctionText', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionText::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var formatTextArg = numberStack.pop();
		var valueArg = numberStack.pop();
		if (valueArg.isError()) {
			return valueArg;
		}
		if (formatTextArg.isError()) {
			return formatTextArg;
		}
		if (formatTextArg.isBoolean()) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
		}
		var valueString = valueArg.toString();
		var formatText = formatTextArg.toString();
		var value;
		var valueIsValid = (function () { var $ret = valueArg._toDouble1(value); value = $ret.p0; return $ret.ret; }());
		if (valueIsValid == false && valueArg.isString()) {
			var timeValue = this._parseTime(valueString);
			if (timeValue.hasValue()) {
				value = timeValue.value();
				valueIsValid = true;
			} else {
				var valueDateTime;
				if ((function () { var $ret = $.ig.Date.prototype.tryParse(valueString, valueDateTime); valueDateTime = $ret.p1; return $ret.ret; }())) {
					var excelDateTime = $.ig.excel.ExcelCalcValue.prototype._dateTimeToExcelDate(valueArg._workbook(), valueDateTime);
					if (excelDateTime.hasValue()) {
						value = excelDateTime.value();
						valueIsValid = true;
					}
				}
			}
		}
		var valueResolved = NaN;
		if (valueIsValid) {
			valueResolved = value;
		}
		var converter = new $.ig.ValueFormatter(0, valueArg._workbook(), formatText, numberStack._culture());
		var text;
		if ((function () { var $ret = converter.tryFormatValue(valueResolved, valueString, text); text = $ret.p2; return $ret.ret; }()) == false) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
		}
		return new $.ig.excel.ExcelCalcValue(text);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionText::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionText::Name()" />*/
	name: function () {
		return "text";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionText::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionText::MinArgs()" />*/
	minArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionText::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionText::MaxArgs()" />*/
	maxArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionText::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Nullable Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionText::ParseTime(System.String)" />*/
	_parseTime: function (valueString) {
		var match = $.ig.UltraCalcFunctionText.prototype._timeRegex().match(valueString);
		if (match.success() == false) {
			return $.ig.util.toNullable(Number, null);
		}
		var hours = 0;
		var minutes = 0;
		var seconds = 0;
		var milliseconds = 0;
		var hoursGroup = match.groups().item1("Hours");
		if (hoursGroup.length() != 0) {
			if ((function () { var $ret = $.ig.util.tryParseInt32_1(hoursGroup.value(), hours); hours = $ret.p1; return $ret.ret; }()) == false) {
				$.ig.ExcelUtils.prototype.debugFail("Couldn't parse value.");
			}
		}
		var minutesGroup = match.groups().item1("Minutes");
		if (minutesGroup.length() != 0) {
			if ((function () { var $ret = $.ig.util.tryParseInt32_1(minutesGroup.value(), minutes); minutes = $ret.p1; return $ret.ret; }()) == false) {
				$.ig.ExcelUtils.prototype.debugFail("Couldn't parse value.");
			}
		}
		var secondsGroup = match.groups().item1("Seconds");
		if (secondsGroup.length() != 0) {
			if ((function () { var $ret = $.ig.util.tryParseInt32_1(secondsGroup.value(), seconds); seconds = $ret.p1; return $ret.ret; }()) == false) {
				$.ig.ExcelUtils.prototype.debugFail("Couldn't parse value.");
			}
		}
		var millisecondsGroup = match.groups().item1("Milliseconds");
		if (millisecondsGroup.length() != 0) {
			var millisecondsGroupText = millisecondsGroup.value();
			while (millisecondsGroupText.length < 4) {
				millisecondsGroupText += "0";
			}
			if ((function () { var $ret = $.ig.util.tryParseInt32_1(millisecondsGroupText, milliseconds); milliseconds = $ret.p1; return $ret.ret; }()) == false) {
				$.ig.ExcelUtils.prototype.debugFail("Couldn't parse value.");
			}
		}
		var ampmSectionGroup = match.groups().item1("AMPM");
		if (ampmSectionGroup.length() != 0) {
			if (hours >= 12) {
				return $.ig.util.toNullable(Number, null);
			}
			if (ampmSectionGroup.value().startsWith1("P", $.ig.StringUtilities.prototype.stringComparisonInvariantCultureIgnoreCase())) {
				hours += 12;
			}
		}
		return $.ig.util.toNullable(Number, (hours / 24) + (minutes / 1440) + (seconds / 86400) + (milliseconds / 864000000));
	}
	/*<EndMethod Name="System.Nullable Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionText::ParseTime(System.String)" />*/
	,
	/*<BeginProperty Name="System.Text.RegularExpressions.Regex Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionText::TimeRegex()" />*/
	_timeRegex: function () {
		if ($.ig.UltraCalcFunctionText.prototype.__timeRegex == null) {
			var hoursGroup = "(?'Hours'[0-9]{1,4})\\s*";
			var minutesGroup = "\\s*(?'Minutes'[0-9]?[0-9])\\s*";
			var secondsGroup = "\\s*(?'Seconds'[0-9]?[0-9])\\s*";
			var millisecondsGroup = ".\\s*(?'Milliseconds'[0-9]{0,4})[0-9]*\\s*";
			var ampmGroup = "(\\s+(?'AMPM'(a|p)m?)\\s*)";
			var hoursAndAMPMSection = $.ig.util.stringFormat("({0}{1})", hoursGroup, ampmGroup);
			var hoursAndMinutes = $.ig.util.stringFormat1("({0}:{1}(:{2}({3})?)?{4}?)", [ hoursGroup, minutesGroup, secondsGroup, millisecondsGroup, ampmGroup ]);
			var minutesSecondsAndMilliseconds = $.ig.util.stringFormat1("({0}:{1}{2}{3}?)", [ minutesGroup, secondsGroup, millisecondsGroup, ampmGroup ]);
			$.ig.UltraCalcFunctionText.prototype.__timeRegex = new $.ig.Regex(1, $.ig.util.stringFormat("^({0}|{1}|{2})$", hoursAndAMPMSection, hoursAndMinutes, minutesSecondsAndMilliseconds), $.ig.ExcelUtils.prototype.regexOptionsCompiled | $.ig.RegexOptions.prototype.ignoreCase | $.ig.RegexOptions.prototype.ignorePatternWhitespace | $.ig.RegexOptions.prototype.cultureInvariant);
		}
		return $.ig.UltraCalcFunctionText.prototype.__timeRegex;
	}
	/*<EndProperty Name="System.Text.RegularExpressions.Regex Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionText::TimeRegex()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionText::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionText::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionText', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionText" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIfError" />*/

$.ig.util.defType('UltraCalcFunctionIfError', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIfError::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var valueIfErrorArg = numberStack.pop();
		var valueArg = numberStack.pop();
		var testValue = valueArg._getResolvedValue();
		if ($.ig.util.cast($.ig.excel.ExcelCalcErrorValue.prototype.$type, testValue) !== null) {
			return valueIfErrorArg;
		}
		return new $.ig.excel.ExcelCalcValue(testValue);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIfError::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIfError::Name()" />*/
	name: function () {
		return "iferror";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIfError::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIfError::MinArgs()" />*/
	minArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIfError::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIfError::MaxArgs()" />*/
	maxArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIfError::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionIfError', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIfError" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCountA" />*/

$.ig.util.defType('UltraCalcFunctionCountA', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCountA::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var args = this._getArguments(numberStack, argumentCount, true);
		return $.ig.UltraCalcFunctionCountA.prototype._evaluateHelper(args);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCountA::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCountA::CanParameterBeEnumerable(System.Int32)" />*/
	canParameterBeEnumerable: function (parameterIndex) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCountA::CanParameterBeEnumerable(System.Int32)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCountA::EvaluateHelper(System.Collections.Generic.IList)" />*/
	_evaluateHelper: function (args) {
		var count = 0;
		var en = args.getEnumerator();
		while (en.moveNext()) {
			var arg = en.current();
			if (arg.isNull()) {
				continue;
			}
			count++;
		}
		return new $.ig.excel.ExcelCalcValue(count);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCountA::EvaluateHelper(System.Collections.Generic.IList)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCountA::Name()" />*/
	name: function () {
		return "counta";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCountA::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCountA::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCountA::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCountA::MaxArgs()" />*/
	maxArgs: function () {
		return 0x7FFFFFFF;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCountA::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionCountA', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCountA" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSearch" />*/

$.ig.util.defType('UltraCalcFunctionSearch', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSearch::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var startNumValue = null;
		if (argumentCount > 2) {
			startNumValue = numberStack.pop();
		}
		var withinTextValue = numberStack.pop();
		var findTextValue = numberStack.pop();
		if (findTextValue.isError()) {
			return findTextValue;
		}
		if (withinTextValue.isError()) {
			return withinTextValue;
		}
		if (startNumValue != null && startNumValue.isError()) {
			return startNumValue;
		}
		var findText = findTextValue.toString();
		var withinText = withinTextValue.toString();
		var startIndex = 0;
		if (startNumValue != null) {
			var startIndexNumber;
			if ((function () { var $ret = startNumValue._toDouble1(startIndexNumber); startIndexNumber = $ret.p0; return $ret.ret; }()) == false) {
				return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
			}
			startIndex = $.ig.truncate($.ig.MathUtilities.prototype.truncate(startIndexNumber)) - 1;
			if (startIndex < 0 || withinText.length <= startIndex) {
				return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
			}
		}
		var index = numberStack._culture().compareInfo().indexOf6(withinText, findText, startIndex, $.ig.CompareOptions.prototype.ignoreCase);
		if (index < 0) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
		}
		return new $.ig.excel.ExcelCalcValue(index + 1);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSearch::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSearch::Name()" />*/
	name: function () {
		return "search";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSearch::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSearch::MinArgs()" />*/
	minArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSearch::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSearch::MaxArgs()" />*/
	maxArgs: function () {
		return 3;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSearch::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSearch::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSearch::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionSearch', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSearch" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSearchB" />*/

$.ig.util.defType('UltraCalcFunctionSearchB', 'UltraCalcFunctionSearch', {
	init: function () {
		$.ig.UltraCalcFunctionSearch.prototype.init.call(this);
	},
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSearchB::Name()" />*/
	name: function () {
		return "searchb";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSearchB::Name()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionSearchB', $.ig.UltraCalcFunctionSearch.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSearchB" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAveDev" />*/

$.ig.util.defType('UltraCalcFunctionAveDev', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAveDev::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var totalValue = 0;
		var args = this._getArguments(numberStack, argumentCount, true);
		var values = new $.ig.List$1(Number, 2, args.length);
		for (var i = 0; i < args.length; i++) {
			var arg = args[i];
			if (arg == null) {
				continue;
			}
			if (arg.isError()) {
				return new $.ig.excel.ExcelCalcValue(arg.toErrorValue());
			}
			var value;
			if ((function () { var $ret = arg._toDouble1(value); value = $ret.p0; return $ret.ret; }())) {
				totalValue += value;
				values.add(value);
			}
		}
		var average = totalValue / values.count();
		var totalDeviation = 0;
		for (var i1 = 0; i1 < values.count(); i1++) {
			totalDeviation += Math.abs(values.__inner[i1] - average);
		}
		var averageDeviation = totalDeviation / values.count();
		return new $.ig.excel.ExcelCalcValue(averageDeviation);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAveDev::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAveDev::Name()" />*/
	name: function () {
		return "avedev";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAveDev::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAveDev::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAveDev::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAveDev::MaxArgs()" />*/
	maxArgs: function () {
		return 0x7FFFFFFF;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAveDev::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAveDev::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return (isCreatedFromRegionReference == false);
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAveDev::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionAveDev', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAveDev" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcConditionalFunctionBase" />*/

$.ig.util.defType('UltraCalcConditionalFunctionBase', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcConditionalFunctionBase::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		if (parameterIndex == 1) {
			return (isCreatedFromRegionReference == false);
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcConditionalFunctionBase::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcConditionalFunctionBase::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var funcRangeArg = null;
		if (this._supportsFuncRangeArg() && argumentCount == 3) {
			funcRangeArg = numberStack.pop();
		}
		var criteriaArg = numberStack.pop();
		var rangeArg = numberStack.pop();
		if (rangeArg.isError()) {
			return rangeArg;
		}
		if (criteriaArg.isError()) {
			return criteriaArg;
		}
		if (funcRangeArg != null && funcRangeArg.isError()) {
			return funcRangeArg;
		}
		if (rangeArg.isArrayGroup() || rangeArg.isReference() == false) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
		}
		var evaluator = new $.ig.UltraCalcConditionalFunctionBase_CriteriaEvaluator(numberStack._culture(), criteriaArg._getResolvedValue());
		if (funcRangeArg != null && (funcRangeArg.isArrayGroup() || funcRangeArg.isReference() == false)) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
		}
		var rangeArray = rangeArg.toArrayProxy();
		var rootCellForFuncRange = null;
		if (funcRangeArg != null) {
			rootCellForFuncRange = $.ig.util.cast($.ig.CellCalcReference.prototype.$type, funcRangeArg._toArrayProxy1(false).item(0, 0).value());
			if (rootCellForFuncRange == null) {
				return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
			}
		}
		var helper = new $.ig.UltraCalcConditionalFunctionBase_EvaluateHelper(this, evaluator, rangeArray);
		if (rootCellForFuncRange == null) {
			rangeArray._iterateValues(false, helper.valueCallback.runOn(helper));
		} else {
			var funcRangeFirstColumnIndex = rootCellForFuncRange._columnIndex();
			var funcRangeFirstRowIndex = rootCellForFuncRange._row().index();
			var worksheet = rootCellForFuncRange._worksheet();
			var maxColumnIndex = worksheet.columns().maxCount() - 1;
			var funcRangeLastColumnIndex = Math.min(maxColumnIndex, funcRangeFirstColumnIndex + rangeArray.getLength(0) - 1);
			var maxRowIndex = worksheet.rows().maxCount() - 1;
			var funcRangeLastRowIndex = Math.min(maxRowIndex, funcRangeFirstRowIndex + rangeArray.getLength(1) - 1);
			var funcRangeRegionResolved = worksheet._getCachedRegion1(funcRangeFirstRowIndex, funcRangeFirstColumnIndex, funcRangeLastRowIndex, funcRangeLastColumnIndex);
			var funcRangeCalcReference = new $.ig.excel.ExcelCalcValue(funcRangeRegionResolved._calcReference());
			funcRangeCalcReference.__calculationContext = funcRangeArg.__calculationContext;
			funcRangeCalcReference._isDynamicReference(true);
			var funcRangeResolvedArray = funcRangeCalcReference._toArrayProxy1(false);
			funcRangeResolvedArray._iterateValues(false, helper.valueCallback.runOn(helper));
		}
		return this._getReturnValue(helper.totalValue(), helper.valueCount());
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcConditionalFunctionBase::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcConditionalFunctionBase::MinArgs()" />*/
	minArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcConditionalFunctionBase::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcConditionalFunctionBase::MaxArgs()" />*/
	maxArgs: function () {
		if (this._supportsFuncRangeArg()) {
			return 3;
		}
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcConditionalFunctionBase::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcConditionalFunctionBase::WillParameterBeDereferenced(System.Int32)" />*/
	_willParameterBeDereferenced: function (parameterIndex) {
		if (parameterIndex == 2) {
			return false;
		}
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcConditionalFunctionBase::WillParameterBeDereferenced(System.Int32)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcConditionalFunctionBase::GetReturnValue(System.Double, System.Int32)" />*/
	_getReturnValue: function (totalValue, valueCount) {
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcConditionalFunctionBase::GetReturnValue(System.Double, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcConditionalFunctionBase::ShouldTotalValues()" />*/
	_shouldTotalValues: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcConditionalFunctionBase::ShouldTotalValues()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcConditionalFunctionBase::SupportsFuncRangeArg()" />*/
	_supportsFuncRangeArg: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcConditionalFunctionBase::SupportsFuncRangeArg()" />*/
	,
	$type: new $.ig.Type('UltraCalcConditionalFunctionBase', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcConditionalFunctionBase" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcConditionalFunctionBase_CriteriaEvaluator" />*/

$.ig.util.defType('UltraCalcConditionalFunctionBase_CriteriaEvaluator', 'Object', {
	__operand: null,
	__operandResolvedStrValue: null,
	__operandResolvedValue: null,
	__operator: 0,
	init: function (culture, criteria) {
		this.__operator = $.ig.UltraCalcConditionalFunctionBase_CriteriaEvaluator_Operator.prototype.equals;
		$.ig.Object.prototype.init.call(this);
		this.__operandResolvedStrValue = criteria != null ? criteria.toString() : null;
		var operand;
		var strCriteria = $.ig.util.cast(String, criteria);
		if (String.isNullOrEmpty(strCriteria) == false) {
			var canCompareStringsAsNumbers = true;
			var strOperand = null;
			switch (strCriteria.charAt(0)) {
				case '=':
					this.__operator = $.ig.UltraCalcConditionalFunctionBase_CriteriaEvaluator_Operator.prototype.equals;
					strOperand = strCriteria.substr(1);
					break;
				case '<':
					canCompareStringsAsNumbers = false;
					if (strCriteria.length > 1) {
						switch (strCriteria.charAt(1)) {
							case '>':
								this.__operator = $.ig.UltraCalcConditionalFunctionBase_CriteriaEvaluator_Operator.prototype.notEquals;
								strOperand = strCriteria.substr(2);
								break;
							case '=':
								this.__operator = $.ig.UltraCalcConditionalFunctionBase_CriteriaEvaluator_Operator.prototype.lessThanOrEqual;
								strOperand = strCriteria.substr(2);
								break;
						}
					}
					if (strOperand == null) {
						this.__operator = $.ig.UltraCalcConditionalFunctionBase_CriteriaEvaluator_Operator.prototype.lessThan;
						strOperand = strCriteria.substr(1);
					}
					break;
				case '>':
					canCompareStringsAsNumbers = false;
					if (strCriteria.length > 1 && strCriteria.charAt(1) == '=') {
						this.__operator = $.ig.UltraCalcConditionalFunctionBase_CriteriaEvaluator_Operator.prototype.greaterThanOrEqual;
						strOperand = strCriteria.substr(2);
					} else {
						this.__operator = $.ig.UltraCalcConditionalFunctionBase_CriteriaEvaluator_Operator.prototype.greaterThan;
						strOperand = strCriteria.substr(1);
					}
					break;
				default:
					strOperand = strCriteria;
					break;
			}
			this.__operandResolvedStrValue = strOperand;
			var number;
			if ((function () { var $ret = $.ig.MathUtilities.prototype.doubleTryParse(strOperand.trim([]), culture, number); number = $ret.p2; return $ret.ret; }())) {
				operand = number;
				if (canCompareStringsAsNumbers == false) {
					this.__operandResolvedStrValue = null;
				}
			} else {
				operand = strOperand;
			}
		} else {
			operand = criteria;
		}
		this.__operand = new $.ig.excel.ExcelCalcValue(operand);
		this.__operandResolvedValue = this.__operand._getResolvedValue3(false);
	},
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcConditionalFunctionBase_CriteriaEvaluator::MeetsCriteria(Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue)" />*/
	meetsCriteria: function (testValue) {
		var resolvedTestValue = testValue._getResolvedValue3(false);
		if ($.ig.excel.ExcelCalcValue.prototype._isErrorHelper(resolvedTestValue)) {
			return false;
		}
		if ($.ig.excel.ExcelCalcValue.prototype._isNullHelper(resolvedTestValue) != $.ig.excel.ExcelCalcValue.prototype._isNullHelper(this.__operandResolvedValue)) {
			return false;
		}
		var compareAsStrings = false;
		if ($.ig.excel.ExcelCalcValue.prototype._isStringHelper(resolvedTestValue)) {
			if (this.__operandResolvedStrValue == null) {
				return false;
			}
			compareAsStrings = true;
		}
		if ($.ig.excel.ExcelCalcValue.prototype._isBooleanHelper(resolvedTestValue) != $.ig.excel.ExcelCalcValue.prototype._isBooleanHelper(this.__operandResolvedValue)) {
			return false;
		}
		var compareResult = $.ig.excel.ExcelCalcValue.prototype._compareToHelper(testValue, resolvedTestValue, this.__operand, compareAsStrings ? this.__operandResolvedStrValue : this.__operandResolvedValue);
		switch (this.__operator) {
			case $.ig.UltraCalcConditionalFunctionBase_CriteriaEvaluator_Operator.prototype.equals: return compareResult == 0;
			case $.ig.UltraCalcConditionalFunctionBase_CriteriaEvaluator_Operator.prototype.notEquals: return compareResult != 0;
			case $.ig.UltraCalcConditionalFunctionBase_CriteriaEvaluator_Operator.prototype.greaterThan: return compareResult > 0;
			case $.ig.UltraCalcConditionalFunctionBase_CriteriaEvaluator_Operator.prototype.greaterThanOrEqual: return compareResult >= 0;
			case $.ig.UltraCalcConditionalFunctionBase_CriteriaEvaluator_Operator.prototype.lessThan: return compareResult < 0;
			case $.ig.UltraCalcConditionalFunctionBase_CriteriaEvaluator_Operator.prototype.lessThanOrEqual: return compareResult <= 0;
			default:
				$.ig.ExcelUtils.prototype.debugFail("Unknown Operator: " + $.ig.UltraCalcConditionalFunctionBase_CriteriaEvaluator_Operator.prototype.getBox(this.__operator));
				return false;
		}
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcConditionalFunctionBase_CriteriaEvaluator::MeetsCriteria(Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue)" />*/
	,
	$type: new $.ig.Type('UltraCalcConditionalFunctionBase_CriteriaEvaluator', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcConditionalFunctionBase_CriteriaEvaluator" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcConditionalFunctionBase_EvaluateHelper" />*/

$.ig.util.defType('UltraCalcConditionalFunctionBase_EvaluateHelper', 'Object', {
	_evaluator: null,
	_owner: null,
	_rangeArray: null,
	_totalValue: 0,
	_valueCount: 0,
	init: function (owner, evaluator, rangeArray) {
		$.ig.Object.prototype.init.call(this);
		this._owner = owner;
		this._evaluator = evaluator;
		this._rangeArray = rangeArray;
	},
	/*<BeginMethod Name="System.Void Infragistics.Documents.Excel.CalcEngine.UltraCalcConditionalFunctionBase_EvaluateHelper::ValueCallback(Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue, Infragistics.Documents.Excel.CalcEngine.ArrayValueContext)" />*/
	valueCallback: function (currentValue, valueContext) {
		var currentTestValue = this._rangeArray._getValue(valueContext);
		if (this._evaluator.meetsCriteria(currentTestValue)) {
			this._valueCount++;
			if (this._owner._shouldTotalValues()) {
				var number;
				if ((function () { var $ret = currentValue._toDouble1(number); number = $ret.p0; return $ret.ret; }())) {
					this._totalValue += number;
				}
			}
		}
		if (this._rangeArray._areValuesReusable()) {
			$.ig.excel.ExcelCalcNumberStack.prototype._onReusableValueReleased(currentTestValue);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Excel.CalcEngine.UltraCalcConditionalFunctionBase_EvaluateHelper::ValueCallback(Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue, Infragistics.Documents.Excel.CalcEngine.ArrayValueContext)" />*/
	,
	/*<BeginProperty Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcConditionalFunctionBase_EvaluateHelper::TotalValue()" />*/
	totalValue: function () {
		return this._totalValue;
	}
	/*<EndProperty Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcConditionalFunctionBase_EvaluateHelper::TotalValue()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcConditionalFunctionBase_EvaluateHelper::ValueCount()" />*/
	valueCount: function () {
		return this._valueCount;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcConditionalFunctionBase_EvaluateHelper::ValueCount()" />*/
	,
	$type: new $.ig.Type('UltraCalcConditionalFunctionBase_EvaluateHelper', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcConditionalFunctionBase_EvaluateHelper" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAddress" />*/

$.ig.util.defType('UltraCalcFunctionAddress', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAddress::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var sheetNameArg = null;
		if (argumentCount == 5) {
			sheetNameArg = numberStack.pop();
		}
		var a1Arg = null;
		if (argumentCount >= 4) {
			a1Arg = numberStack.pop();
		}
		var absNumArg = null;
		if (argumentCount >= 3) {
			absNumArg = numberStack.pop();
		}
		var columnNumArg = numberStack.pop();
		var rowNumArg = numberStack.pop();
		if (rowNumArg.isError()) {
			return rowNumArg;
		}
		if (columnNumArg.isError()) {
			return columnNumArg;
		}
		if (absNumArg != null && absNumArg.isError()) {
			return absNumArg;
		}
		if (a1Arg != null && a1Arg.isError()) {
			return a1Arg;
		}
		if (sheetNameArg != null && sheetNameArg.isError()) {
			return sheetNameArg;
		}
		var rowNum = rowNumArg._toInt321();
		var columnNum = columnNumArg._toInt321();
		var absNum = absNumArg == null ? 1 : absNumArg._toInt321();
		var a1 = a1Arg == null ? true : a1Arg._toBoolean1();
		var sheetName = sheetNameArg == null ? null : sheetNameArg.toString();
		var format = this._getWorkbookFormat(numberStack);
		var maxRowNum = $.ig.excel.Workbook.prototype.getMaxRowCount(format);
		var maxColumnNum = $.ig.excel.Workbook.prototype.getMaxColumnCount(format);
		if (rowNum < 1 || maxRowNum < rowNum) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
		}
		if (columnNum < 1 || maxColumnNum < columnNum) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
		}
		var relativeRow;
		var relativeColumn;
		switch (absNum) {
			case 1:
				relativeRow = false;
				relativeColumn = false;
				break;
			case 2:
				relativeRow = false;
				relativeColumn = true;
				break;
			case 3:
				relativeRow = true;
				relativeColumn = false;
				break;
			case 4:
				relativeRow = true;
				relativeColumn = true;
				break;
			default: return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
		}
		var cellReferenceMode = a1 ? $.ig.excel.CellReferenceMode.a1 : $.ig.excel.CellReferenceMode.r1C1;
		var addressString = String.empty();
		if (sheetName != null) {
			addressString += $.ig.ExcelUtils.prototype.createReferenceString1(null, sheetName);
		}
		if (cellReferenceMode == $.ig.excel.CellReferenceMode.r1C1) {
			if (relativeRow) {
				rowNum++;
			}
			if (relativeColumn) {
				columnNum++;
			}
		}
		addressString += $.ig.CellAddress.prototype.getCellReferenceString(rowNum - 1, columnNum - 1, format, relativeRow, relativeColumn, -1, -1, false, cellReferenceMode);
		return new $.ig.excel.ExcelCalcValue(addressString);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAddress::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginMethod Name="Infragistics.Documents.Excel.WorkbookFormat Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAddress::GetWorkbookFormat(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack)" />*/
	_getWorkbookFormat: function (numberStack) {
		var workbook = numberStack._workbook();
		if (workbook != null) {
			return workbook.currentFormat();
		}
		return $.ig.excel.Workbook.prototype._latestFormat;
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.WorkbookFormat Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAddress::GetWorkbookFormat(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAddress::Name()" />*/
	name: function () {
		return "address";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAddress::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAddress::MinArgs()" />*/
	minArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAddress::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAddress::MaxArgs()" />*/
	maxArgs: function () {
		return 5;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAddress::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAddress::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		if (parameterIndex == 3) {
			return false;
		}
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAddress::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionAddress', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAddress" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAreas" />*/

$.ig.util.defType('UltraCalcFunctionAreas', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAreas::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var arg = numberStack.pop();
		if (arg.isReference() == false) {
			if (arg.isError()) {
				return arg;
			}
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
		}
		return new $.ig.excel.ExcelCalcValue(arg._toArrayProxyGroup1(false).length);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAreas::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAreas::Name()" />*/
	name: function () {
		return "areas";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAreas::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAreas::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAreas::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAreas::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAreas::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAreas::WillParameterBeDereferenced(System.Int32)" />*/
	_willParameterBeDereferenced: function (parameterIndex) {
		$.ig.Debug.prototype.assert1(parameterIndex == 0, "Unexpected parameterIndex value.");
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAreas::WillParameterBeDereferenced(System.Int32)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionAreas', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAreas" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAverageIf" />*/

$.ig.util.defType('UltraCalcFunctionAverageIf', 'UltraCalcConditionalFunctionBase', {
	init: function () {
		$.ig.UltraCalcConditionalFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAverageIf::GetReturnValue(System.Double, System.Int32)" />*/
	_getReturnValue: function (totalValue, valueCount) {
		if (valueCount == 0) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.div));
		}
		return new $.ig.excel.ExcelCalcValue(totalValue / valueCount);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAverageIf::GetReturnValue(System.Double, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAverageIf::Name()" />*/
	name: function () {
		return "averageif";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAverageIf::Name()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionAverageIf', $.ig.UltraCalcConditionalFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionAverageIf" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionColumn" />*/

$.ig.util.defType('UltraCalcFunctionColumn', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionColumn::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var columnNumbers;
		if (argumentCount == 0) {
			columnNumbers = $.ig.UltraCalcFunctionColumn.prototype._getColumnNumbersFromReference(numberStack._formulaOwner());
		} else {
			var arg = numberStack.pop();
			if (arg.isReference() == false) {
				if (arg.isError()) {
					return arg;
				}
				return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
			}
			columnNumbers = $.ig.UltraCalcFunctionColumn.prototype._getColumnNumbersFromReference(arg.toReference());
		}
		if (columnNumbers[0][0] == $.ig.UltraCalcFunctionColumn.prototype.__referenceErrorIndex) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.reference));
		}
		var numColumns = columnNumbers.getLength(0);
		var numRows = columnNumbers.getLength(1);
		var array = (function () {
			var $ret = new Array($firstRank = numColumns);
			var $currRet = $ret;
			for (var $rankInit = 0; $rankInit < $firstRank; $rankInit++) {
				$currRet[$rankInit] = new Array(numRows);
			}
			return $ret;
		}());
		for (var y = 0; y < numRows; y++) {
			for (var x = 0; x < numColumns; x++) {
				$.ig.Debug.prototype.assert1(columnNumbers[x][y] > 0, "Invalid column number.");
				array[x][y] = new $.ig.excel.ExcelCalcValue(columnNumbers[x][y]);
			}
		}
		return new $.ig.excel.ExcelCalcValue(array);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionColumn::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginMethod Name=" Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionColumn::GetColumnNumbersFromReference(Infragistics.Documents.Excel.CalcEngine.IExcelCalcReference)" />*/
	_getColumnNumbersFromReference: function (reference) {
		var cellReference = $.ig.util.cast($.ig.CellCalcReference.prototype.$type, reference.context());
		if (cellReference != null) {
			return (function () {
				var $ret = new Array();
				$ret.add([ cellReference._columnIndex() + 1 ]);
				return $ret;
			}());
		}
		var region = $.ig.util.cast($.ig.excel.WorksheetRegion.prototype.$type, reference.context());
		if (region != null) {
			return $.ig.UltraCalcFunctionColumn.prototype._getColumnNumbersFromRegion(region);
		}
		var regions = $.ig.util.cast($.ig.ReadOnlyCollection$1.prototype.$type.specialize($.ig.excel.WorksheetRegion.prototype.$type), reference.context());
		if (regions != null) {
			if (regions.count() != 1) {
				return (function () {
					var $ret = new Array();
					$ret.add([ $.ig.UltraCalcFunctionColumn.prototype.__referenceErrorIndex ]);
					return $ret;
				}());
			}
			return $.ig.UltraCalcFunctionColumn.prototype._getColumnNumbersFromRegion(regions.item(0));
		}
		$.ig.ExcelUtils.prototype.debugFail("Unknown context");
		return (function () {
			var $ret = new Array();
			$ret.add([ $.ig.UltraCalcFunctionColumn.prototype.__referenceErrorIndex ]);
			return $ret;
		}());
	}
	/*<EndMethod Name=" Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionColumn::GetColumnNumbersFromReference(Infragistics.Documents.Excel.CalcEngine.IExcelCalcReference)" />*/
	,
	/*<BeginMethod Name=" Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionColumn::GetColumnNumbersFromRegion(Infragistics.Documents.Excel.WorksheetRegion)" />*/
	_getColumnNumbersFromRegion: function (region) {
		var rows = (function () {
			var $ret = new Array($firstRank = region._width());
			var $currRet = $ret;
			for (var $rankInit = 0; $rankInit < $firstRank; $rankInit++) {
				$currRet[$rankInit] = new Array(region._height());
			}
			return $ret;
		}());
		for (var y = 0; y < region._height(); y++) {
			for (var x = 0; x < region._width(); x++) {
				rows[x][y] = region.firstColumn() + x + 1;
			}
		}
		return rows;
	}
	/*<EndMethod Name=" Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionColumn::GetColumnNumbersFromRegion(Infragistics.Documents.Excel.WorksheetRegion)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionColumn::Name()" />*/
	name: function () {
		return "column";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionColumn::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionColumn::MinArgs()" />*/
	minArgs: function () {
		return 0;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionColumn::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionColumn::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionColumn::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionColumn::WillParameterBeDereferenced(System.Int32)" />*/
	_willParameterBeDereferenced: function (parameterIndex) {
		$.ig.Debug.prototype.assert1(parameterIndex == 0, "Unexpected parameterIndex value.");
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionColumn::WillParameterBeDereferenced(System.Int32)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionColumn', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionColumn" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionColumns" />*/

$.ig.util.defType('UltraCalcFunctionColumns', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionColumns::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var arg = numberStack.pop();
		if (arg.isReference() == false && arg.isError()) {
			return arg;
		}
		var arrayGroup = arg._toArrayProxyGroup1(false);
		if (arrayGroup.length != 1) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.reference));
		}
		return new $.ig.excel.ExcelCalcValue(arrayGroup[0].getLength(0));
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionColumns::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionColumns::Name()" />*/
	name: function () {
		return "columns";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionColumns::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionColumns::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionColumns::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionColumns::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionColumns::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionColumns::WillParameterBeDereferenced(System.Int32)" />*/
	_willParameterBeDereferenced: function (parameterIndex) {
		$.ig.Debug.prototype.assert1(parameterIndex == 0, "Unexpected parameterIndex value.");
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionColumns::WillParameterBeDereferenced(System.Int32)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionColumns', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionColumns" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTwoMatrixFunction" />*/

$.ig.util.defType('UltraCalcFunctionTwoMatrixFunction', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTwoMatrixFunction::EvaluateHelper(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTwoMatrixFunction.SumElementCallback2)" />*/
	_evaluateHelper: function (numberStack, callback) {
		var error;
		var matrix1;
		var matrix2;
		var $ret = $.ig.UltraCalcFunctionTwoMatrixFunction.prototype._getArguments4(numberStack, error, matrix1, matrix2);
		error = $ret.p1;
		matrix1 = $ret.p2;
		matrix2 = $ret.p3;
		if (error != null) {
			return new $.ig.excel.ExcelCalcValue(error);
		}
		return new $.ig.excel.ExcelCalcValue($.ig.UltraCalcFunctionTwoMatrixFunction.prototype._sumElements(matrix1, matrix2, callback));
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTwoMatrixFunction::EvaluateHelper(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTwoMatrixFunction.SumElementCallback2)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTwoMatrixFunction::CalculatePearsonsCorrelationCoefficient(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, Infragistics.Documents.Excel.CalcEngine.ExcelCalcErrorValue)" />*/
	_calculatePearsonsCorrelationCoefficient: function (numberStack, error) {
		error = null;
		var matrix1;
		var matrix2;
		var $ret = $.ig.UltraCalcFunctionTwoMatrixFunction.prototype._getArguments4(numberStack, error, matrix1, matrix2);
		error = $ret.p1;
		matrix1 = $ret.p2;
		matrix2 = $ret.p3;
		if (error != null) {
			return {
				ret: 0,
				p1: error
			};
		}
		var elementCount;
		var total1;
		var total2;
		var $ret1 = $.ig.UltraCalcFunctionTwoMatrixFunction.prototype._getTotals(matrix1, matrix2, elementCount, total1, total2);
		elementCount = $ret1.p2;
		total1 = $ret1.p3;
		total2 = $ret1.p4;
		var average1 = total1 / elementCount;
		var average2 = total2 / elementCount;
		var numerator = $.ig.UltraCalcFunctionTwoMatrixFunction.prototype._sumElements(matrix1, matrix2, function (element1, element2) {
			return (element1 - average1) * (element2 - average2);
		});
		var denominator1 = $.ig.UltraCalcFunctionTwoMatrixFunction.prototype._sumElements1(matrix1, function (element) {
			return Math.pow(element - average1, 2);
		});
		var denominator2 = $.ig.UltraCalcFunctionTwoMatrixFunction.prototype._sumElements1(matrix2, function (element) {
			return Math.pow(element - average2, 2);
		});
		var denominator = Math.sqrt(denominator1 * denominator2);
		if (denominator == 0) {
			error = new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.div);
			return {
				ret: 0,
				p1: error
			};
		}
		return {
			ret: numerator / denominator,
			p1: error
		};
	}
	/*<EndMethod Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTwoMatrixFunction::CalculatePearsonsCorrelationCoefficient(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, Infragistics.Documents.Excel.CalcEngine.ExcelCalcErrorValue)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTwoMatrixFunction::GetArguments(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, Infragistics.Documents.Excel.CalcEngine.ExcelCalcErrorValue, , )" />*/
	_getArguments4: function (numberStack, error, matrix1, matrix2) {
		error = null;
		matrix1 = null;
		matrix2 = null;
		var array2Arg = numberStack.pop();
		var array1Arg = numberStack.pop();
		if (array1Arg.isError()) {
			error = array1Arg.toErrorValue();
			return {
				p1: error,
				p2: matrix1,
				p3: matrix2
			};
		}
		if (array2Arg.isError()) {
			error = array2Arg.toErrorValue();
			return {
				p1: error,
				p2: matrix1,
				p3: matrix2
			};
		}
		var array1 = array1Arg.toArrayProxy();
		var array1Columns = array1.getLength(0);
		var array1Rows = array1.getLength(1);
		var array2 = array2Arg.toArrayProxy();
		var array2Columns = array2.getLength(0);
		var array2Rows = array2.getLength(1);
		if (array1Columns != array2Columns || array1Rows != array2Rows) {
			error = new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.nA);
			return {
				p1: error,
				p2: matrix1,
				p3: matrix2
			};
		}
		matrix1 = (function () { var $ret = $.ig.MatrixUtilities.prototype.convertArrayToMatrix(array1, $.ig.NonNumericElementBehavior.prototype.ignore, error); error = $ret.p2; return $ret.ret; }());
		if (error != null) {
			return {
				p1: error,
				p2: matrix1,
				p3: matrix2
			};
		}
		matrix2 = (function () { var $ret = $.ig.MatrixUtilities.prototype.convertArrayToMatrix(array2, $.ig.NonNumericElementBehavior.prototype.ignore, error); error = $ret.p2; return $ret.ret; }());
		return {
			p1: error,
			p2: matrix1,
			p3: matrix2
		};
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTwoMatrixFunction::GetArguments(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, Infragistics.Documents.Excel.CalcEngine.ExcelCalcErrorValue, , )" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTwoMatrixFunction::GetCompareInfo(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Double, System.Double, Infragistics.Documents.Excel.CalcEngine.ExcelCalcErrorValue)" />*/
	_getCompareInfo1: function (numberStack, regressionLineSlope, regressionLineYIntercept, error) {
		error = null;
		regressionLineSlope = 0;
		regressionLineYIntercept = 0;
		var knownYs;
		var knownXs;
		var $ret = $.ig.UltraCalcFunctionTwoMatrixFunction.prototype._getArguments4(numberStack, error, knownYs, knownXs);
		error = $ret.p1;
		knownYs = $ret.p2;
		knownXs = $ret.p3;
		if (error != null) {
			return {
				p1: regressionLineSlope,
				p2: regressionLineYIntercept,
				p3: error
			};
		}
		var knownYAverage;
		var knownXAverage;
		var $ret1 = $.ig.UltraCalcFunctionTwoMatrixFunction.prototype._getCompareInfo(knownYs, knownXs, knownYAverage, knownXAverage, regressionLineSlope, regressionLineYIntercept, error);
		knownYAverage = $ret1.p2;
		knownXAverage = $ret1.p3;
		regressionLineSlope = $ret1.p4;
		regressionLineYIntercept = $ret1.p5;
		error = $ret1.p6;
		return {
			p1: regressionLineSlope,
			p2: regressionLineYIntercept,
			p3: error
		};
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTwoMatrixFunction::GetCompareInfo(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Double, System.Double, Infragistics.Documents.Excel.CalcEngine.ExcelCalcErrorValue)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTwoMatrixFunction::GetCompareInfo(, , System.Double, System.Double, System.Double, System.Double, Infragistics.Documents.Excel.CalcEngine.ExcelCalcErrorValue)" />*/
	_getCompareInfo: function (knownYs, knownXs, knownYAverage, knownXAverage, regressionLineSlope, regressionLineYIntercept, error) {
		error = null;
		regressionLineSlope = 0;
		regressionLineYIntercept = 0;
		var elementCount;
		var knownYTotal;
		var knownXTotal;
		var $ret = $.ig.UltraCalcFunctionTwoMatrixFunction.prototype._getTotals(knownYs, knownXs, elementCount, knownYTotal, knownXTotal);
		elementCount = $ret.p2;
		knownYTotal = $ret.p3;
		knownXTotal = $ret.p4;
		knownYAverage = knownYTotal / elementCount;
		knownXAverage = knownXTotal / elementCount;
		var knownYAverageCopy = knownYAverage;
		var knownXAverageCopy = knownXAverage;
		var numerator = $.ig.UltraCalcFunctionTwoMatrixFunction.prototype._sumElements(knownYs, knownXs, function (elementY, elementX) {
			return (elementY - knownYAverageCopy) * (elementX - knownXAverageCopy);
		});
		var denominator = $.ig.UltraCalcFunctionTwoMatrixFunction.prototype._sumElements1(knownXs, function (elementX) {
			return Math.pow(elementX - knownXAverageCopy, 2);
		});
		if (denominator == 0) {
			error = new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.div);
			return {
				p2: knownYAverage,
				p3: knownXAverage,
				p4: regressionLineSlope,
				p5: regressionLineYIntercept,
				p6: error
			};
		}
		regressionLineSlope = numerator / denominator;
		regressionLineYIntercept = knownYAverage - (regressionLineSlope * knownXAverage);
		return {
			p2: knownYAverage,
			p3: knownXAverage,
			p4: regressionLineSlope,
			p5: regressionLineYIntercept,
			p6: error
		};
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTwoMatrixFunction::GetCompareInfo(, , System.Double, System.Double, System.Double, System.Double, Infragistics.Documents.Excel.CalcEngine.ExcelCalcErrorValue)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTwoMatrixFunction::GetTotals(, , System.Int32, System.Double, System.Double)" />*/
	_getTotals: function (matrix1, matrix2, elementCount, total1, total2) {
		var columns = matrix1.getLength(0);
		var rows = matrix1.getLength(1);
		elementCount = columns * rows;
		total1 = 0;
		total2 = 0;
		for (var x = 0; x < columns; x++) {
			for (var y = 0; y < rows; y++) {
				var value1 = matrix1[x][y];
				var value2 = matrix2[x][y];
				if ($.ig.util.isNaN(value1) || $.ig.util.isNaN(value2)) {
					elementCount--;
					matrix1[x][y] = NaN;
					matrix2[x][y] = NaN;
					continue;
				}
				total1 += value1;
				total2 += value2;
			}
		}
		return {
			p2: elementCount,
			p3: total1,
			p4: total2
		};
	}
	/*<EndMethod Name="System.Void Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTwoMatrixFunction::GetTotals(, , System.Int32, System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTwoMatrixFunction::SumElements(, Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTwoMatrixFunction.SumElementCallback1)" />*/
	_sumElements1: function (matrix, callback) {
		var columns = matrix.getLength(0);
		var rows = matrix.getLength(1);
		var total = 0;
		for (var x = 0; x < columns; x++) {
			for (var y = 0; y < rows; y++) {
				var value = matrix[x][y];
				if ($.ig.util.isNaN(value)) {
					continue;
				}
				total += callback(value);
			}
		}
		return total;
	}
	/*<EndMethod Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTwoMatrixFunction::SumElements(, Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTwoMatrixFunction.SumElementCallback1)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTwoMatrixFunction::SumElements(, , Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTwoMatrixFunction.SumElementCallback2)" />*/
	_sumElements: function (matrix1, matrix2, callback) {
		var columns = matrix1.getLength(0);
		var rows = matrix1.getLength(1);
		var total = 0;
		for (var x = 0; x < columns; x++) {
			for (var y = 0; y < rows; y++) {
				var value1 = matrix1[x][y];
				var value2 = matrix2[x][y];
				if ($.ig.util.isNaN(value1) || $.ig.util.isNaN(value2)) {
					continue;
				}
				total += callback(value1, value2);
			}
		}
		return total;
	}
	/*<EndMethod Name="System.Double Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTwoMatrixFunction::SumElements(, , Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTwoMatrixFunction.SumElementCallback2)" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTwoMatrixFunction::MinArgs()" />*/
	minArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTwoMatrixFunction::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTwoMatrixFunction::MaxArgs()" />*/
	maxArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTwoMatrixFunction::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionTwoMatrixFunction', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTwoMatrixFunction" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCorrel" />*/

$.ig.util.defType('UltraCalcFunctionCorrel', 'UltraCalcFunctionTwoMatrixFunction', {
	init: function () {
		$.ig.UltraCalcFunctionTwoMatrixFunction.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCorrel::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var error;
		var matrix1;
		var matrix2;
		var $ret = $.ig.UltraCalcFunctionTwoMatrixFunction.prototype._getArguments4(numberStack, error, matrix1, matrix2);
		error = $ret.p1;
		matrix1 = $ret.p2;
		matrix2 = $ret.p3;
		if (error != null) {
			return new $.ig.excel.ExcelCalcValue(error);
		}
		var elementCount;
		var total1;
		var total2;
		var $ret1 = $.ig.UltraCalcFunctionTwoMatrixFunction.prototype._getTotals(matrix1, matrix2, elementCount, total1, total2);
		elementCount = $ret1.p2;
		total1 = $ret1.p3;
		total2 = $ret1.p4;
		var squareTotalCallback = function (element) {
			return element * element;
		};
		var squareTotal1 = $.ig.UltraCalcFunctionTwoMatrixFunction.prototype._sumElements1(matrix1, squareTotalCallback);
		var squareTotal2 = $.ig.UltraCalcFunctionTwoMatrixFunction.prototype._sumElements1(matrix2, squareTotalCallback);
		var ssX = squareTotal1 - ((total1 * total1) / elementCount);
		var ssY = squareTotal2 - ((total2 * total2) / elementCount);
		var sumProduct = $.ig.UltraCalcFunctionTwoMatrixFunction.prototype._sumElements(matrix1, matrix2, function (element1, element2) {
			return element1 * element2;
		});
		var scpXY = sumProduct - ((total1 * total2) / elementCount);
		if (ssX == 0 || ssY == 0) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.div));
		}
		var $final = scpXY / (Math.sqrt(ssX) * Math.sqrt(ssY));
		return new $.ig.excel.ExcelCalcValue($final);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCorrel::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCorrel::Name()" />*/
	name: function () {
		return "correl";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCorrel::Name()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionCorrel', $.ig.UltraCalcFunctionTwoMatrixFunction.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCorrel" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCountIf" />*/

$.ig.util.defType('UltraCalcFunctionCountIf', 'UltraCalcConditionalFunctionBase', {
	init: function () {
		$.ig.UltraCalcConditionalFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCountIf::GetReturnValue(System.Double, System.Int32)" />*/
	_getReturnValue: function (totalValue, valueCount) {
		return new $.ig.excel.ExcelCalcValue(valueCount);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCountIf::GetReturnValue(System.Double, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCountIf::Name()" />*/
	name: function () {
		return "countif";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCountIf::Name()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCountIf::ShouldTotalValues()" />*/
	_shouldTotalValues: function () {
		return false;
	}
	/*<EndProperty Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCountIf::ShouldTotalValues()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCountIf::SupportsFuncRangeArg()" />*/
	_supportsFuncRangeArg: function () {
		return false;
	}
	/*<EndProperty Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCountIf::SupportsFuncRangeArg()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionCountIf', $.ig.UltraCalcConditionalFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCountIf" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCovar" />*/

$.ig.util.defType('UltraCalcFunctionCovar', 'UltraCalcFunctionTwoMatrixFunction', {
	init: function () {
		$.ig.UltraCalcFunctionTwoMatrixFunction.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCovar::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var error;
		var matrix1;
		var matrix2;
		var $ret = $.ig.UltraCalcFunctionTwoMatrixFunction.prototype._getArguments4(numberStack, error, matrix1, matrix2);
		error = $ret.p1;
		matrix1 = $ret.p2;
		matrix2 = $ret.p3;
		if (error != null) {
			return new $.ig.excel.ExcelCalcValue(error);
		}
		var elementCount;
		var total1;
		var total2;
		var $ret1 = $.ig.UltraCalcFunctionTwoMatrixFunction.prototype._getTotals(matrix1, matrix2, elementCount, total1, total2);
		elementCount = $ret1.p2;
		total1 = $ret1.p3;
		total2 = $ret1.p4;
		var average1 = total1 / elementCount;
		var average2 = total2 / elementCount;
		var numerator = $.ig.UltraCalcFunctionTwoMatrixFunction.prototype._sumElements(matrix1, matrix2, function (element1, element2) {
			return (element1 - average1) * (element2 - average2);
		});
		return new $.ig.excel.ExcelCalcValue(numerator / elementCount);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCovar::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCovar::Name()" />*/
	name: function () {
		return "covar";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCovar::Name()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionCovar', $.ig.UltraCalcFunctionTwoMatrixFunction.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCovar" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionForecast" />*/

$.ig.util.defType('UltraCalcFunctionForecast', 'UltraCalcFunctionTwoMatrixFunction', {
	init: function () {
		$.ig.UltraCalcFunctionTwoMatrixFunction.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionForecast::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var error;
		var knownYs;
		var knownXs;
		var $ret = $.ig.UltraCalcFunctionTwoMatrixFunction.prototype._getArguments4(numberStack, error, knownYs, knownXs);
		error = $ret.p1;
		knownYs = $ret.p2;
		knownXs = $ret.p3;
		var xArg = numberStack.pop();
		if (xArg.isError()) {
			return xArg;
		}
		var xValue = xArg._toDouble3();
		if (error != null) {
			return new $.ig.excel.ExcelCalcValue(error);
		}
		var knownYAverage;
		var knownXAverage;
		var regressionLineSlope;
		var regressionLineYIntercept;
		var $ret1 = $.ig.UltraCalcFunctionTwoMatrixFunction.prototype._getCompareInfo(knownYs, knownXs, knownYAverage, knownXAverage, regressionLineSlope, regressionLineYIntercept, error);
		knownYAverage = $ret1.p2;
		knownXAverage = $ret1.p3;
		regressionLineSlope = $ret1.p4;
		regressionLineYIntercept = $ret1.p5;
		error = $ret1.p6;
		if (error != null) {
			return new $.ig.excel.ExcelCalcValue(error);
		}
		return new $.ig.excel.ExcelCalcValue(regressionLineYIntercept + (regressionLineSlope * xValue));
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionForecast::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionForecast::Name()" />*/
	name: function () {
		return "forecast";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionForecast::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionForecast::MinArgs()" />*/
	minArgs: function () {
		return 3;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionForecast::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionForecast::MaxArgs()" />*/
	maxArgs: function () {
		return 3;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionForecast::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionForecast::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionForecast::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionForecast', $.ig.UltraCalcFunctionTwoMatrixFunction.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionForecast" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLookupBase" />*/

$.ig.util.defType('UltraCalcFunctionLookupBase', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Nullable Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLookupBase::CompareValues(Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue, System.Boolean, System.String, System.Boolean, System.Boolean, System.Double, System.Text.RegularExpressions.Regex)" />*/
	_compareValues: function (testValue, lookupValueIsString, lookupValueString, lookupValueIsBoolean, lookupValueBoolean, lookupValueNumber, matchRegex) {
		var resolvedTestValue = testValue._getResolvedValue();
		if ($.ig.ExcelUtils.prototype.isNullResolved(resolvedTestValue)) {
			return $.ig.util.toNullable($.ig.Number.prototype.$type, null);
		}
		if (lookupValueIsString) {
			if ($.ig.excel.ExcelCalcValue.prototype._isStringHelper(resolvedTestValue) == false) {
				return $.ig.util.toNullable($.ig.Number.prototype.$type, null);
			}
			var testValueString = testValue._toStringHelper(resolvedTestValue, testValue._culture());
			if (matchRegex == null) {
				return $.ig.util.toNullable($.ig.Number.prototype.$type, $.ig.StringUtilities.prototype.stringCompare(testValueString, lookupValueString, testValue._culture(), $.ig.CompareOptions.prototype.ignoreCase));
			}
			var match = matchRegex.match(testValueString);
			if (match.success() && match.length() == testValueString.length) {
				return $.ig.util.toNullable($.ig.Number.prototype.$type, 0);
			}
			return $.ig.util.toNullable($.ig.Number.prototype.$type, -1);
		}
		if (lookupValueIsBoolean) {
			if (testValue.isBoolean() == false) {
				return $.ig.util.toNullable($.ig.Number.prototype.$type, null);
			}
			return $.ig.util.toNullable($.ig.Number.prototype.$type, $.ig.util.boolCompare(testValue._toBoolean1(), lookupValueBoolean));
		}
		var testValueNumber;
		var exc;
		if ((function () { var $ret = testValue._toDoubleHelper(resolvedTestValue, testValueNumber, testValue._culture(), exc); testValueNumber = $ret.p1; exc = $ret.p3; return $ret.ret; }()) == false) {
			return $.ig.util.toNullable($.ig.Number.prototype.$type, null);
		}
		return $.ig.util.toNullable($.ig.Number.prototype.$type, $.ig.util.compareSimple(testValueNumber, lookupValueNumber));
	}
	/*<EndMethod Name="System.Nullable Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLookupBase::CompareValues(Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue, System.Boolean, System.String, System.Boolean, System.Boolean, System.Double, System.Text.RegularExpressions.Regex)" />*/
	,
	/*<BeginMethod Name="System.Text.RegularExpressions.Regex Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLookupBase::ConvertLookupValueToRegex(System.String)" />*/
	_convertLookupValueToRegex: function (lookupValue) {
		var hasWildcards;
		return (function () { var $ret = $.ig.ExcelUtils.prototype.createWildcardRegex(lookupValue, hasWildcards); hasWildcards = $ret.p1; return $ret.ret; }());
	}
	/*<EndMethod Name="System.Text.RegularExpressions.Regex Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLookupBase::ConvertLookupValueToRegex(System.String)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLookupBase::LookupValue(System.Collections.Generic.IEnumerable, Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue, System.Int32)" />*/
	_lookupValue: function (lookupRange, lookupValue, matchType) {
		var lookupValueIsString = lookupValue.isString();
		var lookupValueString = lookupValueIsString ? lookupValue.toString() : null;
		var lookupValueIsBoolean = lookupValue.isBoolean();
		var lookupValueBoolean = lookupValueIsBoolean ? lookupValue._toBoolean1() : false;
		var lookupValueNumber = 0;
		if (lookupValueIsBoolean == false && lookupValueIsString == false) {
			var $ret = lookupValue._toDouble1(lookupValueNumber);
			lookupValueNumber = $ret.p0;
		}
		var matchRegex = null;
		if (lookupValueIsString && matchType == 0) {
			matchRegex = $.ig.UltraCalcFunctionLookupBase.prototype._convertLookupValueToRegex(lookupValueString);
		}
		var lastPotentialMatch = -1;
		var en = lookupRange.getEnumerator();
		while (en.moveNext()) {
			var pair = en.current();
			var itemIndex = pair.key();
			var testValue = pair.value();
			testValue._isDynamicReference(true);
			var compareResult = $.ig.UltraCalcFunctionLookupBase.prototype._compareValues(testValue, lookupValueIsString, lookupValueString, lookupValueIsBoolean, lookupValueBoolean, lookupValueNumber, matchRegex);
			if (compareResult.hasValue() == false) {
				continue;
			}
			if (compareResult.value() == 0) {
				return itemIndex;
			}
			if (matchType != 0) {
				if (matchType < 0) {
					if (compareResult.value() > 0) {
						lastPotentialMatch = itemIndex;
					}
				} else {
					if (compareResult.value() < 0) {
						lastPotentialMatch = itemIndex;
					}
				}
			}
		}
		return lastPotentialMatch;
	}
	/*<EndMethod Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLookupBase::LookupValue(System.Collections.Generic.IEnumerable, Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLookupBase::TryParseRangeLookupArg(Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue, System.Boolean)" />*/
	_tryParseRangeLookupArg: function (rangeLookupArg, rangeLookup) {
		rangeLookup = true;
		if (rangeLookupArg != null) {
			if (rangeLookupArg.isBoolean()) {
				rangeLookup = rangeLookupArg._toBoolean1();
			} else if (rangeLookupArg.isDateTime()) {
				rangeLookup = true;
			} else {
				var result;
				if ((function () { var $ret = rangeLookupArg._toDouble1(result); result = $ret.p0; return $ret.ret; }())) {
					rangeLookup = (result != 0);
				} else {
					return {
						ret: false,
						p1: rangeLookup
					};
				}
			}
		}
		return {
			ret: true,
			p1: rangeLookup
		};
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLookupBase::TryParseRangeLookupArg(Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue, System.Boolean)" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLookupBase::MinArgs()" />*/
	minArgs: function () {
		return 3;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLookupBase::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLookupBase::MaxArgs()" />*/
	maxArgs: function () {
		return 4;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLookupBase::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLookupBase::WillParameterBeDereferenced(System.Int32)" />*/
	_willParameterBeDereferenced: function (parameterIndex) {
		if (parameterIndex == 1) {
			return false;
		}
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLookupBase::WillParameterBeDereferenced(System.Int32)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionLookupBase', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLookupBase" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHLookup" />*/

$.ig.util.defType('UltraCalcFunctionHLookup', 'UltraCalcFunctionLookupBase', {
	init: function () {
		$.ig.UltraCalcFunctionLookupBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHLookup::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var rangeLookupArg = null;
		if (argumentCount == 4) {
			rangeLookupArg = numberStack.pop();
		}
		var rowIndexNumArg = numberStack.pop();
		var tableArrayArg = numberStack.pop();
		var lookupValueArg = numberStack.pop();
		if (lookupValueArg.isError()) {
			return lookupValueArg;
		}
		if (tableArrayArg.isError()) {
			return tableArrayArg;
		}
		if (rowIndexNumArg.isError()) {
			return rowIndexNumArg;
		}
		if (rangeLookupArg != null && rangeLookupArg.isError()) {
			return rangeLookupArg;
		}
		if (lookupValueArg.isArray() || lookupValueArg.isArrayGroup()) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.nA));
		}
		if (lookupValueArg.isNull()) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.nA));
		}
		var tableArray = tableArrayArg._toArrayProxy1(false);
		var rowIndexNum;
		if ((function () { var $ret = rowIndexNumArg._toDouble1(rowIndexNum); rowIndexNum = $ret.p0; return $ret.ret; }()) == false || rowIndexNum < 1) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
		}
		var rowIndex = $.ig.truncate(Math.floor(rowIndexNum)) - 1;
		var rangeLookup;
		if ((function () { var $ret = $.ig.UltraCalcFunctionLookupBase.prototype._tryParseRangeLookupArg(rangeLookupArg, rangeLookup); rangeLookup = $ret.p1; return $ret.ret; }()) == false) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
		}
		var columnCount = tableArray.getLength(0);
		var matchingColumn = $.ig.UltraCalcFunctionLookupBase.prototype._lookupValue(tableArray._getIterator(1, 0), lookupValueArg, rangeLookup ? 1 : 0);
		if (matchingColumn < 0 || columnCount <= matchingColumn) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.nA));
		}
		var rowCount = tableArray.getLength(1);
		if (rowCount <= rowIndex) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.reference));
		}
		var returnValue = tableArray.item(matchingColumn, rowIndex);
		returnValue._isDynamicReference(true);
		return new $.ig.excel.ExcelCalcValue(returnValue._getResolvedValue());
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHLookup::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHLookup::Name()" />*/
	name: function () {
		return "hlookup";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHLookup::Name()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionHLookup', $.ig.UltraCalcFunctionLookupBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHLookup" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHyperlink" />*/

$.ig.util.defType('UltraCalcFunctionHyperlink', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHyperlink::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var friendlyNameArg = null;
		if (argumentCount == 2) {
			friendlyNameArg = numberStack.pop();
		}
		var linkLocationArg = numberStack.pop();
		if (linkLocationArg.isError()) {
			return linkLocationArg;
		}
		if (friendlyNameArg != null && friendlyNameArg.isError()) {
			return friendlyNameArg;
		}
		var linkLocation = linkLocationArg.toString();
		var friendlyName = friendlyNameArg == null ? linkLocation : friendlyNameArg.toString();
		return new $.ig.excel.ExcelCalcValue(new $.ig.HyperlinkResult(linkLocation, friendlyName));
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHyperlink::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHyperlink::Name()" />*/
	name: function () {
		return "hyperlink";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHyperlink::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHyperlink::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHyperlink::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHyperlink::MaxArgs()" />*/
	maxArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHyperlink::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionHyperlink', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionHyperlink" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIndex" />*/

$.ig.util.defType('UltraCalcFunctionIndex', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIndex::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var areaNumArg = null;
		if (argumentCount == 4) {
			areaNumArg = numberStack.pop();
		}
		var columnNumArg = null;
		if (argumentCount >= 3) {
			columnNumArg = numberStack.pop();
		}
		var rowNumArg = numberStack.pop();
		var referenceArg = numberStack.pop();
		if (referenceArg.isReference() == false && referenceArg.isError()) {
			return referenceArg;
		}
		if (rowNumArg.isError()) {
			return rowNumArg;
		}
		if (columnNumArg != null && columnNumArg.isError()) {
			return columnNumArg;
		}
		if (areaNumArg != null && areaNumArg.isError()) {
			return areaNumArg;
		}
		if (referenceArg.isReference() == false) {
			if (referenceArg.isString() || referenceArg.isBoolean()) {
				return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
			}
		}
		var rowIndex = rowNumArg._toInt321() - 1;
		var columnIndex = (columnNumArg == null ? 1 : columnNumArg._toInt321()) - 1;
		var areaIndex = (areaNumArg == null ? 1 : areaNumArg._toInt321()) - 1;
		var arrayGroup = referenceArg._toArrayProxyGroup1(false);
		if (arrayGroup.length <= areaIndex) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.reference));
		}
		var array = arrayGroup[areaIndex];
		var columnCount = array.getLength(0);
		var rowCount = array.getLength(1);
		if (columnNumArg == null && columnCount > 1) {
			if (rowCount == 1) {
				columnIndex = rowIndex;
				rowIndex = 0;
			} else {
				return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.reference));
			}
		}
		if (columnCount <= columnIndex || rowCount <= rowIndex) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.reference));
		}
		return array.item(columnIndex, rowIndex);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIndex::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIndex::Name()" />*/
	name: function () {
		return "index";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIndex::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIndex::MinArgs()" />*/
	minArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIndex::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIndex::MaxArgs()" />*/
	maxArgs: function () {
		return 4;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIndex::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIndex::WillParameterBeDereferenced(System.Int32)" />*/
	_willParameterBeDereferenced: function (parameterIndex) {
		if (parameterIndex == 0) {
			return false;
		}
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIndex::WillParameterBeDereferenced(System.Int32)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionIndex', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIndex" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIndirect" />*/

$.ig.util.defType('UltraCalcFunctionIndirect', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIndirect::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var a1Arg = null;
		if (argumentCount == 2) {
			a1Arg = numberStack.pop();
		}
		var referenceArg = numberStack.pop();
		if (referenceArg.isError()) {
			return referenceArg;
		}
		if (a1Arg != null && a1Arg.isError()) {
			return a1Arg;
		}
		var reference = referenceArg.toString();
		var a1 = a1Arg == null ? true : a1Arg._toBoolean1();
		var cellReferenceMode = a1 ? $.ig.excel.CellReferenceMode.a1 : $.ig.excel.CellReferenceMode.r1C1;
		var formulaOwner = $.ig.util.cast($.ig.RefBase.prototype.$type, $.ig.ExcelCalcEngine.prototype.getResolvedReference(numberStack._formulaOwner()));
		if (formulaOwner == null) {
			return new $.ig.excel.ExcelCalcValue($.ig.ExcelReferenceError.prototype._instance);
		}
		var referenceValue = $.ig.CalcUtilities.prototype.getReference1(reference, formulaOwner._row(), formulaOwner._columnIndex(), formulaOwner._worksheet(), formulaOwner._workbook(), cellReferenceMode);
		return new $.ig.excel.ExcelCalcValue(referenceValue);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIndirect::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIndirect::Name()" />*/
	name: function () {
		return "indirect";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIndirect::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIndirect::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIndirect::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIndirect::MaxArgs()" />*/
	maxArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIndirect::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionIndirect', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIndirect" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIntercept" />*/

$.ig.util.defType('UltraCalcFunctionIntercept', 'UltraCalcFunctionTwoMatrixFunction', {
	init: function () {
		$.ig.UltraCalcFunctionTwoMatrixFunction.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIntercept::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var error;
		var regressionLineSlope;
		var regressionLineYIntercept;
		var $ret = $.ig.UltraCalcFunctionTwoMatrixFunction.prototype._getCompareInfo1(numberStack, regressionLineSlope, regressionLineYIntercept, error);
		regressionLineSlope = $ret.p1;
		regressionLineYIntercept = $ret.p2;
		error = $ret.p3;
		if (error != null) {
			return new $.ig.excel.ExcelCalcValue(error);
		}
		return new $.ig.excel.ExcelCalcValue(regressionLineYIntercept);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIntercept::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIntercept::Name()" />*/
	name: function () {
		return "intercept";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIntercept::Name()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionIntercept', $.ig.UltraCalcFunctionTwoMatrixFunction.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionIntercept" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLookup" />*/

$.ig.util.defType('UltraCalcFunctionLookup', 'UltraCalcFunctionLookupBase', {
	init: function () {
		$.ig.UltraCalcFunctionLookupBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLookup::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var resultVectorArg = null;
		if (argumentCount == 3) {
			resultVectorArg = numberStack.pop();
		}
		var lookupArrayArg = numberStack.pop();
		var lookupValueArg = numberStack.pop();
		if (lookupValueArg.isError()) {
			return lookupValueArg;
		}
		if (lookupArrayArg.isError()) {
			return lookupArrayArg;
		}
		if (resultVectorArg != null && resultVectorArg.isError()) {
			return resultVectorArg;
		}
		if (lookupValueArg.isNull()) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.nA));
		}
		var lookupArray = lookupArrayArg._toArrayProxy1(false);
		var columnCount = lookupArray.getLength(0);
		var rowCount = lookupArray.getLength(1);
		var searchInFirstRow = (rowCount < columnCount);
		var maxItemCount = searchInFirstRow ? columnCount : rowCount;
		var resultArray = null;
		var resultColumnCount = 0;
		var resultRowCount = 0;
		var searchInResultRow = false;
		if (resultVectorArg != null) {
			resultArray = resultVectorArg.toArrayProxy();
			resultColumnCount = resultArray.getLength(0);
			resultRowCount = resultArray.getLength(1);
			if (resultColumnCount == 1) {
				searchInResultRow = false;
			} else if (resultRowCount == 1) {
				searchInResultRow = true;
			} else {
				return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.nA));
			}
		}
		var matchingItemIndex = $.ig.UltraCalcFunctionLookupBase.prototype._lookupValue(lookupArray._getIterator(searchInFirstRow ? 1 : 0, 0), lookupValueArg, 1);
		if (matchingItemIndex < 0 || maxItemCount <= matchingItemIndex) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.nA));
		}
		var returnValue;
		if (resultArray != null) {
			if (searchInResultRow) {
				if (resultColumnCount <= matchingItemIndex) {
					return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.nA));
				}
				returnValue = resultArray.item(matchingItemIndex, 0);
			} else {
				if (resultRowCount <= matchingItemIndex) {
					return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.nA));
				}
				returnValue = resultArray.item(0, matchingItemIndex);
			}
		} else {
			if (searchInFirstRow) {
				returnValue = lookupArray.item(matchingItemIndex, rowCount - 1);
			} else {
				returnValue = lookupArray.item(columnCount - 1, matchingItemIndex);
			}
		}
		returnValue._isDynamicReference(true);
		return new $.ig.excel.ExcelCalcValue(returnValue._getResolvedValue());
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLookup::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLookup::MinArgs()" />*/
	minArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLookup::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLookup::MaxArgs()" />*/
	maxArgs: function () {
		return 3;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLookup::MaxArgs()" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLookup::Name()" />*/
	name: function () {
		return "lookup";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLookup::Name()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLookup::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		if (parameterIndex == 1) {
			return true;
		}
		return (isCreatedFromRegionReference == false);
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLookup::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionLookup', $.ig.UltraCalcFunctionLookupBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLookup" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMatch" />*/

$.ig.util.defType('UltraCalcFunctionMatch', 'UltraCalcFunctionLookupBase', {
	init: function () {
		$.ig.UltraCalcFunctionLookupBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMatch::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var matchTypeArg = null;
		if (argumentCount == 3) {
			matchTypeArg = numberStack.pop();
		}
		var lookupArrayArg = numberStack.pop();
		var lookupValueArg = numberStack.pop();
		if (lookupValueArg.isError()) {
			return lookupValueArg;
		}
		if (lookupArrayArg.isError()) {
			return lookupArrayArg;
		}
		if (matchTypeArg != null && matchTypeArg.isError()) {
			return matchTypeArg;
		}
		if (lookupValueArg.isNull()) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.nA));
		}
		var lookupArray = lookupArrayArg._toArrayProxy1(false);
		var columnCount = lookupArray.getLength(0);
		var rowCount = lookupArray.getLength(1);
		if (columnCount != 1 && rowCount != 1) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.nA));
		}
		var searchInFirstRow = (rowCount < columnCount);
		var maxItemCount = searchInFirstRow ? columnCount : rowCount;
		var matchTypeTemp = 1;
		if (matchTypeArg != null && (function () { var $ret = matchTypeArg._toDouble1(matchTypeTemp); matchTypeTemp = $ret.p0; return $ret.ret; }()) == false) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
		}
		var matchType = $.ig.truncate($.ig.MathUtilities.prototype.truncate(matchTypeTemp));
		var matchingItemIndex = $.ig.UltraCalcFunctionLookupBase.prototype._lookupValue(lookupArray._getIterator(searchInFirstRow ? 1 : 0, 0), lookupValueArg, matchType);
		if (matchingItemIndex < 0 || maxItemCount <= matchingItemIndex) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.nA));
		}
		return new $.ig.excel.ExcelCalcValue(matchingItemIndex + 1);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMatch::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMatch::Name()" />*/
	name: function () {
		return "match";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMatch::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMatch::MinArgs()" />*/
	minArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMatch::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMatch::MaxArgs()" />*/
	maxArgs: function () {
		return 3;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMatch::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMatch::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return (isCreatedFromRegionReference == false);
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMatch::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionMatch', $.ig.UltraCalcFunctionLookupBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMatch" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMdeterm" />*/

$.ig.util.defType('UltraCalcFunctionMdeterm', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMdeterm::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var arrayArg = numberStack.pop();
		if (arrayArg.isError()) {
			return arrayArg;
		}
		var array = arrayArg.toArrayProxy();
		var n = array.getLength(0);
		if (n != array.getLength(1)) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
		}
		var error;
		var matrix = (function () { var $ret = $.ig.MatrixUtilities.prototype.convertArrayToMatrix(array, $.ig.NonNumericElementBehavior.prototype.causesError, error); error = $ret.p2; return $ret.ret; }());
		if (error != null) {
			return new $.ig.excel.ExcelCalcValue(error);
		}
		return new $.ig.excel.ExcelCalcValue($.ig.MatrixUtilities.prototype.calculateDeterminant(matrix, n));
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMdeterm::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMdeterm::Name()" />*/
	name: function () {
		return "mdeterm";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMdeterm::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMdeterm::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMdeterm::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMdeterm::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMdeterm::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionMdeterm', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMdeterm" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMinverse" />*/

$.ig.util.defType('UltraCalcFunctionMinverse', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMinverse::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var arrayArg = numberStack.pop();
		if (arrayArg.isError()) {
			return arrayArg;
		}
		var array = arrayArg.toArrayProxy();
		var n = array.getLength(0);
		if (n != array.getLength(1)) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
		}
		var error;
		var matrix = (function () { var $ret = $.ig.MatrixUtilities.prototype.convertArrayToMatrix(array, $.ig.NonNumericElementBehavior.prototype.causesError, error); error = $ret.p2; return $ret.ret; }());
		if (error != null) {
			return new $.ig.excel.ExcelCalcValue(error);
		}
		var inverse = (function () { var $ret = $.ig.MatrixUtilities.prototype.calculateInverse(matrix, n, error); error = $ret.p2; return $ret.ret; }());
		if (error != null) {
			return new $.ig.excel.ExcelCalcValue(error);
		}
		var finalValues = (function () {
			var $ret = new Array($firstRank = n);
			var $currRet = $ret;
			for (var $rankInit = 0; $rankInit < $firstRank; $rankInit++) {
				$currRet[$rankInit] = new Array(n);
			}
			return $ret;
		}());
		for (var x = 0; x < n; x++) {
			for (var y = 0; y < n; y++) {
				finalValues[x][y] = new $.ig.excel.ExcelCalcValue(inverse[x][y]);
			}
		}
		return new $.ig.excel.ExcelCalcValue(finalValues);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMinverse::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMinverse::Name()" />*/
	name: function () {
		return "minverse";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMinverse::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMinverse::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMinverse::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMinverse::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMinverse::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionMinverse', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMinverse" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMmult" />*/

$.ig.util.defType('UltraCalcFunctionMmult', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMmult::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var array2Arg = numberStack.pop();
		var array1Arg = numberStack.pop();
		if (array1Arg.isError()) {
			return array1Arg;
		}
		if (array2Arg.isError()) {
			return array2Arg;
		}
		var array1 = array1Arg.toArrayProxy();
		var array1Columns = array1.getLength(0);
		var array1Rows = array1.getLength(1);
		var array2 = array2Arg.toArrayProxy();
		var array2Columns = array2.getLength(0);
		var array2Rows = array2.getLength(1);
		if (array1Columns != array2Rows) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
		}
		var error;
		var matrix1 = (function () { var $ret = $.ig.MatrixUtilities.prototype.convertArrayToMatrix(array1, $.ig.NonNumericElementBehavior.prototype.causesError, error); error = $ret.p2; return $ret.ret; }());
		if (error != null) {
			return new $.ig.excel.ExcelCalcValue(error);
		}
		var matrix2 = (function () { var $ret = $.ig.MatrixUtilities.prototype.convertArrayToMatrix(array2, $.ig.NonNumericElementBehavior.prototype.causesError, error); error = $ret.p2; return $ret.ret; }());
		if (error != null) {
			return new $.ig.excel.ExcelCalcValue(error);
		}
		var finalMatrix = (function () {
			var $ret = new Array($firstRank = array2Columns);
			var $currRet = $ret;
			for (var $rankInit = 0; $rankInit < $firstRank; $rankInit++) {
				$currRet[$rankInit] = new Array(array1Rows);
			}
			return $ret;
		}());
		for (var finalMatrixColumn = 0; finalMatrixColumn < array2Columns; finalMatrixColumn++) {
			for (var finalMatrixRow = 0; finalMatrixRow < array1Rows; finalMatrixRow++) {
				var currentTotal = 0;
				for (var element = 0; element < array1Columns; element++) {
					currentTotal += matrix1[element][finalMatrixRow] * matrix2[finalMatrixColumn][element];
				}
				finalMatrix[finalMatrixColumn][finalMatrixRow] = new $.ig.excel.ExcelCalcValue(currentTotal);
			}
		}
		return new $.ig.excel.ExcelCalcValue(finalMatrix);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMmult::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMmult::Name()" />*/
	name: function () {
		return "mmult";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMmult::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMmult::MinArgs()" />*/
	minArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMmult::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMmult::MaxArgs()" />*/
	maxArgs: function () {
		return 2;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMmult::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionMmult', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionMmult" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOffset" />*/

$.ig.util.defType('UltraCalcFunctionOffset', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOffset::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var widthArg = null;
		if (argumentCount == 5) {
			widthArg = numberStack.pop();
		}
		var heightArg = null;
		if (argumentCount >= 4) {
			heightArg = numberStack.pop();
		}
		var colsArg = numberStack.pop();
		var rowsArg = numberStack.pop();
		var referenceArg = numberStack.pop();
		if (referenceArg.isReference() == false && referenceArg.isError()) {
			return referenceArg;
		}
		if (rowsArg.isError()) {
			return rowsArg;
		}
		if (colsArg.isError()) {
			return colsArg;
		}
		if (heightArg != null && heightArg.isError()) {
			return heightArg;
		}
		if (widthArg != null && widthArg.isError()) {
			return widthArg;
		}
		if (referenceArg.isReference() == false) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
		}
		var regionGroupReference = $.ig.RegionGroupCalcReference.prototype._fromReference(referenceArg.toReference());
		if (regionGroupReference._regions().count() != 1) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
		}
		var region = regionGroupReference._regions().item(0);
		var rowOffset = rowsArg._toInt321();
		var colOffset = colsArg._toInt321();
		var height = heightArg == null ? region._height() : heightArg._toInt321();
		var width = widthArg == null ? region._width() : widthArg._toInt321();
		if (height <= 0 || width <= 0) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.reference));
		}
		var newFirstRow = region.firstRow() + rowOffset;
		var newFirstColumn = region.firstColumn() + colOffset;
		if (newFirstColumn < 0 || newFirstRow < 0) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.reference));
		}
		var newLastRow = newFirstRow + height - 1;
		var newLastColumn = newFirstColumn + width - 1;
		var worksheet = region.worksheet();
		if (worksheet == null) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.reference));
		}
		var maxRowIndex = worksheet.rows().maxCount() - 1;
		var maxColumnIndex = worksheet.columns().maxCount() - 1;
		if (maxRowIndex < newLastRow || maxColumnIndex < newLastColumn) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.reference));
		}
		return new $.ig.excel.ExcelCalcValue(worksheet._getCachedRegion1(newFirstRow, newFirstColumn, newLastRow, newLastColumn)._calcReference());
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOffset::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOffset::Name()" />*/
	name: function () {
		return "offset";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOffset::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOffset::MinArgs()" />*/
	minArgs: function () {
		return 3;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOffset::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOffset::MaxArgs()" />*/
	maxArgs: function () {
		return 5;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOffset::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOffset::WillParameterBeDereferenced(System.Int32)" />*/
	_willParameterBeDereferenced: function (parameterIndex) {
		if (parameterIndex == 0) {
			return false;
		}
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOffset::WillParameterBeDereferenced(System.Int32)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionOffset', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionOffset" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionPearson" />*/

$.ig.util.defType('UltraCalcFunctionPearson', 'UltraCalcFunctionTwoMatrixFunction', {
	init: function () {
		$.ig.UltraCalcFunctionTwoMatrixFunction.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionPearson::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var error;
		var pearsons = (function () { var $ret = $.ig.UltraCalcFunctionTwoMatrixFunction.prototype._calculatePearsonsCorrelationCoefficient(numberStack, error); error = $ret.p1; return $ret.ret; }());
		if (error != null) {
			return new $.ig.excel.ExcelCalcValue(error);
		}
		return new $.ig.excel.ExcelCalcValue(pearsons);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionPearson::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionPearson::Name()" />*/
	name: function () {
		return "pearson";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionPearson::Name()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionPearson', $.ig.UltraCalcFunctionTwoMatrixFunction.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionPearson" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRow" />*/

$.ig.util.defType('UltraCalcFunctionRow', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRow::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var rowNumbers;
		if (argumentCount == 0) {
			rowNumbers = $.ig.UltraCalcFunctionRow.prototype._getRowNumbersFromReference(numberStack._formulaOwner());
		} else {
			var arg = numberStack.pop();
			if (arg.isReference() == false) {
				if (arg.isError()) {
					return arg;
				}
				return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
			}
			rowNumbers = $.ig.UltraCalcFunctionRow.prototype._getRowNumbersFromReference(arg.toReference());
		}
		if (rowNumbers[0][0] == $.ig.UltraCalcFunctionRow.prototype.__referenceErrorIndex) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.reference));
		}
		var numColumns = rowNumbers.getLength(0);
		var numRows = rowNumbers.getLength(1);
		var array = (function () {
			var $ret = new Array($firstRank = numColumns);
			var $currRet = $ret;
			for (var $rankInit = 0; $rankInit < $firstRank; $rankInit++) {
				$currRet[$rankInit] = new Array(numRows);
			}
			return $ret;
		}());
		for (var y = 0; y < numRows; y++) {
			for (var x = 0; x < numColumns; x++) {
				$.ig.Debug.prototype.assert1(rowNumbers[x][y] > 0, "Invalid row number.");
				array[x][y] = new $.ig.excel.ExcelCalcValue(rowNumbers[x][y]);
			}
		}
		return new $.ig.excel.ExcelCalcValue(array);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRow::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginMethod Name=" Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRow::GetRowNumbersFromReference(Infragistics.Documents.Excel.CalcEngine.IExcelCalcReference)" />*/
	_getRowNumbersFromReference: function (reference) {
		var cellReference = $.ig.util.cast($.ig.CellCalcReference.prototype.$type, reference.context());
		if (cellReference != null) {
			return (function () {
				var $ret = new Array();
				$ret.add([ cellReference._row().index() + 1 ]);
				return $ret;
			}());
		}
		var region = $.ig.util.cast($.ig.excel.WorksheetRegion.prototype.$type, reference.context());
		if (region != null) {
			return $.ig.UltraCalcFunctionRow.prototype._getRowNumbersFromRegion(region);
		}
		var regions = $.ig.util.cast($.ig.ReadOnlyCollection$1.prototype.$type.specialize($.ig.excel.WorksheetRegion.prototype.$type), reference.context());
		if (regions != null) {
			if (regions.count() != 1) {
				return (function () {
					var $ret = new Array();
					$ret.add([ $.ig.UltraCalcFunctionRow.prototype.__referenceErrorIndex ]);
					return $ret;
				}());
			}
			return $.ig.UltraCalcFunctionRow.prototype._getRowNumbersFromRegion(regions.item(0));
		}
		$.ig.ExcelUtils.prototype.debugFail("Unknown context");
		return (function () {
			var $ret = new Array();
			$ret.add([ $.ig.UltraCalcFunctionRow.prototype.__referenceErrorIndex ]);
			return $ret;
		}());
	}
	/*<EndMethod Name=" Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRow::GetRowNumbersFromReference(Infragistics.Documents.Excel.CalcEngine.IExcelCalcReference)" />*/
	,
	/*<BeginMethod Name=" Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRow::GetRowNumbersFromRegion(Infragistics.Documents.Excel.WorksheetRegion)" />*/
	_getRowNumbersFromRegion: function (region) {
		var rows = (function () {
			var $ret = new Array($firstRank = region._width());
			var $currRet = $ret;
			for (var $rankInit = 0; $rankInit < $firstRank; $rankInit++) {
				$currRet[$rankInit] = new Array(region._height());
			}
			return $ret;
		}());
		for (var y = 0; y < region._height(); y++) {
			for (var x = 0; x < region._width(); x++) {
				rows[x][y] = region.firstRow() + y + 1;
			}
		}
		return rows;
	}
	/*<EndMethod Name=" Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRow::GetRowNumbersFromRegion(Infragistics.Documents.Excel.WorksheetRegion)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRow::Name()" />*/
	name: function () {
		return "row";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRow::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRow::MinArgs()" />*/
	minArgs: function () {
		return 0;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRow::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRow::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRow::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRow::WillParameterBeDereferenced(System.Int32)" />*/
	_willParameterBeDereferenced: function (parameterIndex) {
		$.ig.Debug.prototype.assert1(parameterIndex == 0, "Unexpected parameterIndex value.");
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRow::WillParameterBeDereferenced(System.Int32)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionRow', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRow" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRows" />*/

$.ig.util.defType('UltraCalcFunctionRows', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRows::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var arg = numberStack.pop();
		if (arg.isReference() == false && arg.isError()) {
			return arg;
		}
		var arrayGroup = arg._toArrayProxyGroup1(false);
		if (arrayGroup.length != 1) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.reference));
		}
		return new $.ig.excel.ExcelCalcValue(arrayGroup[0].getLength(1));
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRows::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRows::Name()" />*/
	name: function () {
		return "rows";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRows::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRows::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRows::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRows::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRows::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRows::WillParameterBeDereferenced(System.Int32)" />*/
	_willParameterBeDereferenced: function (parameterIndex) {
		$.ig.Debug.prototype.assert1(parameterIndex == 0, "Unexpected parameterIndex value.");
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRows::WillParameterBeDereferenced(System.Int32)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionRows', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRows" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRsq" />*/

$.ig.util.defType('UltraCalcFunctionRsq', 'UltraCalcFunctionTwoMatrixFunction', {
	init: function () {
		$.ig.UltraCalcFunctionTwoMatrixFunction.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRsq::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var error;
		var pearsons = (function () { var $ret = $.ig.UltraCalcFunctionTwoMatrixFunction.prototype._calculatePearsonsCorrelationCoefficient(numberStack, error); error = $ret.p1; return $ret.ret; }());
		if (error != null) {
			return new $.ig.excel.ExcelCalcValue(error);
		}
		return new $.ig.excel.ExcelCalcValue(pearsons * pearsons);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRsq::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRsq::Name()" />*/
	name: function () {
		return "rsq";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRsq::Name()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionRsq', $.ig.UltraCalcFunctionTwoMatrixFunction.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRsq" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSlope" />*/

$.ig.util.defType('UltraCalcFunctionSlope', 'UltraCalcFunctionTwoMatrixFunction', {
	init: function () {
		$.ig.UltraCalcFunctionTwoMatrixFunction.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSlope::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var error;
		var regressionLineSlope;
		var regressionLineYIntercept;
		var $ret = $.ig.UltraCalcFunctionTwoMatrixFunction.prototype._getCompareInfo1(numberStack, regressionLineSlope, regressionLineYIntercept, error);
		regressionLineSlope = $ret.p1;
		regressionLineYIntercept = $ret.p2;
		error = $ret.p3;
		if (error != null) {
			return new $.ig.excel.ExcelCalcValue(error);
		}
		return new $.ig.excel.ExcelCalcValue(regressionLineSlope);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSlope::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSlope::Name()" />*/
	name: function () {
		return "slope";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSlope::Name()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionSlope', $.ig.UltraCalcFunctionTwoMatrixFunction.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSlope" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSteyx" />*/

$.ig.util.defType('UltraCalcFunctionSteyx', 'UltraCalcFunctionTwoMatrixFunction', {
	init: function () {
		$.ig.UltraCalcFunctionTwoMatrixFunction.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSteyx::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var error;
		var knownYs;
		var knownXs;
		var $ret = $.ig.UltraCalcFunctionTwoMatrixFunction.prototype._getArguments4(numberStack, error, knownYs, knownXs);
		error = $ret.p1;
		knownYs = $ret.p2;
		knownXs = $ret.p3;
		if (error != null) {
			return new $.ig.excel.ExcelCalcValue(error);
		}
		var elementCount;
		var knownYTotal;
		var knownXTotal;
		var $ret1 = $.ig.UltraCalcFunctionTwoMatrixFunction.prototype._getTotals(knownYs, knownXs, elementCount, knownYTotal, knownXTotal);
		elementCount = $ret1.p2;
		knownYTotal = $ret1.p3;
		knownXTotal = $ret1.p4;
		if (elementCount < 3) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.div));
		}
		var knownYAverage = knownYTotal / elementCount;
		var knownXAverage = knownXTotal / elementCount;
		var sumOfXDiffsTimesYDiffs = $.ig.UltraCalcFunctionTwoMatrixFunction.prototype._sumElements(knownYs, knownXs, function (elementY, elementX) {
			return (elementY - knownYAverage) * (elementX - knownXAverage);
		});
		var sumOfSquaredYDiffs = $.ig.UltraCalcFunctionTwoMatrixFunction.prototype._sumElements1(knownYs, function (element) {
			return Math.pow((element - knownYAverage), 2);
		});
		var sumOfSquaredXDiffs = $.ig.UltraCalcFunctionTwoMatrixFunction.prototype._sumElements1(knownXs, function (element) {
			return Math.pow((element - knownXAverage), 2);
		});
		if (sumOfSquaredXDiffs == 0) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.div));
		}
		var part1 = 1 / (elementCount - 2);
		var part2 = sumOfSquaredYDiffs - ((sumOfXDiffsTimesYDiffs * sumOfXDiffsTimesYDiffs) / sumOfSquaredXDiffs);
		var result = Math.sqrt(part1 * part2);
		return new $.ig.excel.ExcelCalcValue(result);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSteyx::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSteyx::Name()" />*/
	name: function () {
		return "steyx";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSteyx::Name()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionSteyx', $.ig.UltraCalcFunctionTwoMatrixFunction.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSteyx" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSumIf" />*/

$.ig.util.defType('UltraCalcFunctionSumIf', 'UltraCalcConditionalFunctionBase', {
	init: function () {
		$.ig.UltraCalcConditionalFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSumIf::GetReturnValue(System.Double, System.Int32)" />*/
	_getReturnValue: function (totalValue, valueCount) {
		return new $.ig.excel.ExcelCalcValue(totalValue);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSumIf::GetReturnValue(System.Double, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSumIf::Name()" />*/
	name: function () {
		return "sumif";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSumIf::Name()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionSumIf', $.ig.UltraCalcConditionalFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSumIf" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSumproduct" />*/

$.ig.util.defType('UltraCalcFunctionSumproduct', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSumproduct::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var arrays = new Array(argumentCount);
		var columns = 0;
		var rows = 0;
		var argumentsPopped = 0;
		try {
			for (; argumentsPopped < argumentCount; argumentsPopped++) {
				var value = numberStack.pop();
				if (value.isError()) {
					return value;
				}
				var error;
				var array = (function () { var $ret = $.ig.MatrixUtilities.prototype.convertArrayToMatrix(value.toArrayProxy(), $.ig.NonNumericElementBehavior.prototype.treatAsZero, error); error = $ret.p2; return $ret.ret; }());
				if (error != null) {
					return new $.ig.excel.ExcelCalcValue(error);
				}
				if (argumentsPopped == 0) {
					columns = array.getLength(0);
					rows = array.getLength(1);
				} else {
					if (columns != array.getLength(0) || rows != array.getLength(1)) {
						return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
					}
				}
				arrays[argumentsPopped] = array;
			}
		}
		finally {
			for (argumentsPopped++; argumentsPopped < argumentCount; argumentsPopped++) {
				numberStack.pop();
			}
		}
		var total = 0;
		for (var x = 0; x < columns; x++) {
			for (var y = 0; y < rows; y++) {
				var product = 1;
				for (var i = 0; i < argumentCount; i++) {
					product *= arrays[i][x][y];
				}
				total += product;
			}
		}
		return new $.ig.excel.ExcelCalcValue(total);
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSumproduct::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSumproduct::Name()" />*/
	name: function () {
		return "sumproduct";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSumproduct::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSumproduct::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSumproduct::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSumproduct::MaxArgs()" />*/
	maxArgs: function () {
		return 0x7FFFFFFF;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSumproduct::MaxArgs()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSumproduct::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	doesParameterAllowIntermediateResultArray: function (parameterIndex, isCreatedFromRegionReference) {
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSumproduct::DoesParameterAllowIntermediateResultArray(System.Int32, System.Boolean)" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionSumproduct', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSumproduct" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSumx2my2" />*/

$.ig.util.defType('UltraCalcFunctionSumx2my2', 'UltraCalcFunctionTwoMatrixFunction', {
	init: function () {
		$.ig.UltraCalcFunctionTwoMatrixFunction.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSumx2my2::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		return this._evaluateHelper(numberStack, function (element1, element2) {
			return (element1 * element1) - (element2 * element2);
		});
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSumx2my2::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSumx2my2::Name()" />*/
	name: function () {
		return "sumx2my2";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSumx2my2::Name()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionSumx2my2', $.ig.UltraCalcFunctionTwoMatrixFunction.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSumx2my2" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSumx2py2" />*/

$.ig.util.defType('UltraCalcFunctionSumx2py2', 'UltraCalcFunctionTwoMatrixFunction', {
	init: function () {
		$.ig.UltraCalcFunctionTwoMatrixFunction.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSumx2py2::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		return this._evaluateHelper(numberStack, function (element1, element2) {
			return (element1 * element1) + (element2 * element2);
		});
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSumx2py2::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSumx2py2::Name()" />*/
	name: function () {
		return "sumx2py2";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSumx2py2::Name()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionSumx2py2', $.ig.UltraCalcFunctionTwoMatrixFunction.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSumx2py2" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSumxmy2" />*/

$.ig.util.defType('UltraCalcFunctionSumxmy2', 'UltraCalcFunctionTwoMatrixFunction', {
	init: function () {
		$.ig.UltraCalcFunctionTwoMatrixFunction.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSumxmy2::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		return this._evaluateHelper(numberStack, function (element1, element2) {
			return Math.pow((element1 - element2), 2);
		});
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSumxmy2::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSumxmy2::Name()" />*/
	name: function () {
		return "sumxmy2";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSumxmy2::Name()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionSumxmy2', $.ig.UltraCalcFunctionTwoMatrixFunction.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionSumxmy2" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTranspose" />*/

$.ig.util.defType('UltraCalcFunctionTranspose', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTranspose::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var arg = numberStack.pop();
		if (arg.isError()) {
			return arg;
		}
		return new $.ig.excel.ExcelCalcValue($.ig.MatrixUtilities.prototype.transposeMatrix(arg.toArrayProxy()));
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTranspose::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTranspose::Name()" />*/
	name: function () {
		return "transpose";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTranspose::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTranspose::MinArgs()" />*/
	minArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTranspose::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTranspose::MaxArgs()" />*/
	maxArgs: function () {
		return 1;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTranspose::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionTranspose', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionTranspose" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionVLookup" />*/

$.ig.util.defType('UltraCalcFunctionVLookup', 'UltraCalcFunctionLookupBase', {
	init: function () {
		$.ig.UltraCalcFunctionLookupBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionVLookup::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var rangeLookupArg = null;
		if (argumentCount == 4) {
			rangeLookupArg = numberStack.pop();
		}
		var colIndexNumArg = numberStack.pop();
		var tableArrayArg = numberStack.pop();
		var lookupValueArg = numberStack.pop();
		if (lookupValueArg.isError()) {
			return lookupValueArg;
		}
		if (tableArrayArg.isError()) {
			return tableArrayArg;
		}
		if (colIndexNumArg.isError()) {
			return colIndexNumArg;
		}
		if (rangeLookupArg != null && rangeLookupArg.isError()) {
			return rangeLookupArg;
		}
		if (lookupValueArg.isArray() || lookupValueArg.isArrayGroup()) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.nA));
		}
		if (lookupValueArg.isNull()) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.nA));
		}
		var tableArray = tableArrayArg._toArrayProxy1(false);
		var colIndexNum;
		if ((function () { var $ret = colIndexNumArg._toDouble1(colIndexNum); colIndexNum = $ret.p0; return $ret.ret; }()) == false || colIndexNum < 1) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
		}
		var columnIndex = $.ig.truncate(Math.floor(colIndexNum)) - 1;
		var rangeLookup;
		if ((function () { var $ret = $.ig.UltraCalcFunctionLookupBase.prototype._tryParseRangeLookupArg(rangeLookupArg, rangeLookup); rangeLookup = $ret.p1; return $ret.ret; }()) == false) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.value));
		}
		var rowCount = tableArray.getLength(1);
		var matchingRow = $.ig.UltraCalcFunctionLookupBase.prototype._lookupValue(tableArray._getIterator(0, 0), lookupValueArg, rangeLookup ? 1 : 0);
		if (matchingRow < 0 || rowCount <= matchingRow) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.nA));
		}
		var columnCount = tableArray.getLength(0);
		if (columnCount <= columnIndex) {
			return new $.ig.excel.ExcelCalcValue(new $.ig.excel.ExcelCalcErrorValue($.ig.excel.ExcelCalcErrorCode.reference));
		}
		var returnValue = tableArray.item(columnIndex, matchingRow);
		returnValue._isDynamicReference(true);
		return new $.ig.excel.ExcelCalcValue(returnValue._getResolvedValue());
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionVLookup::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionVLookup::Name()" />*/
	name: function () {
		return "vlookup";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionVLookup::Name()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionVLookup', $.ig.UltraCalcFunctionLookupBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionVLookup" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBinom_Dist" />*/

$.ig.util.defType('UltraCalcFunctionBinom_Dist', 'UltraCalcFunctionBinomDist', {
	init: function () {
		$.ig.UltraCalcFunctionBinomDist.prototype.init.call(this);
	},
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBinom_Dist::Name()" />*/
	name: function () {
		return "binom.dist";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBinom_Dist::Name()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionBinom_Dist', $.ig.UltraCalcFunctionBinomDist.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBinom_Dist" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBinom_Inv" />*/

$.ig.util.defType('UltraCalcFunctionBinom_Inv', 'UltraCalcFunctionCritBinom', {
	init: function () {
		$.ig.UltraCalcFunctionCritBinom.prototype.init.call(this);
	},
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBinom_Inv::Name()" />*/
	name: function () {
		return "binom.inv";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBinom_Inv::Name()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionBinom_Inv', $.ig.UltraCalcFunctionCritBinom.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBinom_Inv" />*/

/*<BeginType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBinom_Dist_Range" />*/

$.ig.util.defType('UltraCalcFunctionBinom_Dist_Range', 'BuiltInFunctionBase', {
	init: function () {
		$.ig.BuiltInFunctionBase.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBinom_Dist_Range::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	evaluate: function (numberStack, argumentCount) {
		var arg;
		var numberUpper = 0;
		if (argumentCount == 4) {
			arg = numberStack.pop();
			if (arg.isError()) {
				return new $.ig.excel.ExcelCalcValue(arg.toErrorValue());
			}
			numberUpper = $.ig.truncate(arg._toDecimal2());
		}
		arg = numberStack.pop();
		if (arg.isError()) {
			return new $.ig.excel.ExcelCalcValue(arg.toErrorValue());
		}
		var number = $.ig.truncate(arg._toDecimal2());
		arg = numberStack.pop();
		if (arg.isError()) {
			return new $.ig.excel.ExcelCalcValue(arg.toErrorValue());
		}
		var probability = arg._toDouble3();
		arg = numberStack.pop();
		if (arg.isError()) {
			return new $.ig.excel.ExcelCalcValue(arg.toErrorValue());
		}
		var trials = $.ig.truncate(arg._toDecimal2());
		if (argumentCount == 3 || numberUpper == number) {
			return $.ig.UltraCalcFunctionBinomDist.prototype._binomDist(trials, probability, number, number);
		} else {
			return $.ig.UltraCalcFunctionBinomDist.prototype._binomDist(trials, probability, number, numberUpper);
		}
	}
	/*<EndMethod Name="Infragistics.Documents.Excel.CalcEngine.ExcelCalcValue Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBinom_Dist_Range::Evaluate(Infragistics.Documents.Excel.CalcEngine.ExcelCalcNumberStack, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBinom_Dist_Range::Name()" />*/
	name: function () {
		return "binom.dist.range";
	}
	/*<EndProperty Name="System.String Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBinom_Dist_Range::Name()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBinom_Dist_Range::MinArgs()" />*/
	minArgs: function () {
		return 3;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBinom_Dist_Range::MinArgs()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBinom_Dist_Range::MaxArgs()" />*/
	maxArgs: function () {
		return 4;
	}
	/*<EndProperty Name="System.Int32 Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBinom_Dist_Range::MaxArgs()" />*/
	,
	$type: new $.ig.Type('UltraCalcFunctionBinom_Dist_Range', $.ig.BuiltInFunctionBase.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionBinom_Dist_Range" />*/

/*<BeginStatics Name="AssemblyRef" />*/

$.ig.AssemblyRef.prototype.assemblyName = $.ig.AssemblyVersion.prototype.assemblyNamePrefix + ".Documents.Excel_FUNCTIONS" + $.ig.AssemblyVersion.prototype.assemblyNameSuffix;
$.ig.AssemblyRef.prototype.assemblyDescriptionBase = "Excel Function Library for " + $.ig.AssemblyVersion.prototype.platform;
/*<EndStatics Name="AssemblyRef" />*/

/*<BeginStatics Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLoader" />*/

if ($.ig.UltraCalcFunctionLoader.prototype.staticInit && !$.ig.UltraCalcFunctionLoader.prototype.ultraCalcFunctionLoaderStaticInitCalled) { $.ig.UltraCalcFunctionLoader.prototype.staticInit(); $.ig.UltraCalcFunctionLoader.prototype.ultraCalcFunctionLoaderStaticInitCalled = true; }
/*<EndStatics Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionLoader" />*/

/*<BeginStatics Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionValue" />*/

$.ig.UltraCalcFunctionValue.prototype.__currencySymbols = [ '$', '\u0080', '£', '¤', '¥', '৲', '৳', '฿', '៛', '₠', '₡', '₢', '₣', '₤', '₦', '₧', '₨', '₩', '₪', '₫', '€', '₭', '₮', '₯', '﷼', '﹩', '＄', '￡', '￥', '￦' ];
/*<EndStatics Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionValue" />*/

/*<BeginStatics Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRate" />*/

$.ig.UltraCalcFunctionRate.prototype.__iTMAX = 110;
$.ig.UltraCalcFunctionRate.prototype.__cEPS = 1E-10;
/*<EndStatics Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRate" />*/

/*<BeginStatics Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDec2XBase" />*/

$.ig.UltraCalcFunctionDec2XBase.prototype._minNumberBin = -512;
$.ig.UltraCalcFunctionDec2XBase.prototype._maxNumberBin = 511;
$.ig.UltraCalcFunctionDec2XBase.prototype._minNumberOct = -536870912;
$.ig.UltraCalcFunctionDec2XBase.prototype._maxNumberOct = 536870911;
$.ig.UltraCalcFunctionDec2XBase.prototype._minNumberHex = -549755813888;
$.ig.UltraCalcFunctionDec2XBase.prototype._maxNumberHex = 549755813887;
/*<EndStatics Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionDec2XBase" />*/

/*<BeginStatics Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber" />*/

$.ig.UltraCalcFunctionComplex_ComplexNumber.prototype._invalidComplexNumber = null;
$.ig.UltraCalcFunctionComplex_ComplexNumber.prototype._signs = [ '+', '-' ];
$.ig.UltraCalcFunctionComplex_ComplexNumber.prototype._log10Multiplier = Math.log10(2.7182818284590451);
$.ig.UltraCalcFunctionComplex_ComplexNumber.prototype._log2Multiplier = Math.logBase(2.7182818284590451, 2);
/*<EndStatics Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionComplex_ComplexNumber" />*/

/*<BeginStatics Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCombin" />*/

$.ig.UltraCalcFunctionCombin.prototype.___tempKs = null;
$.ig.UltraCalcFunctionCombin.prototype.___tempNs = null;
/*<EndStatics Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionCombin" />*/

/*<BeginStatics Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRoman_RomanNumeral" />*/

$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._classicValues = null;
$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues1 = null;
$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues2 = null;
$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._conciseValues3 = null;
$.ig.UltraCalcFunctionRoman_RomanNumeral.prototype._simplifiedValues = null;
/*<EndStatics Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRoman_RomanNumeral" />*/

/*<BeginStatics Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionText" />*/

$.ig.UltraCalcFunctionText.prototype.__timeRegex = null;
/*<EndStatics Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionText" />*/

/*<BeginStatics Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionColumn" />*/

$.ig.UltraCalcFunctionColumn.prototype.__referenceErrorIndex = -1;
/*<EndStatics Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionColumn" />*/

/*<BeginStatics Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRow" />*/

$.ig.UltraCalcFunctionRow.prototype.__referenceErrorIndex = -1;
/*<EndStatics Name="Infragistics.Documents.Excel.CalcEngine.UltraCalcFunctionRow" />*/


/*<BeginGlobal/>*/
if ($.ig.excel) { $.ig.excel._isNamespace = true; }

/*<EndGlobal/>*/
/*<BeginFooter/>*/
}));// REMOVE_FROM_COMBINED_FILES
/*<EndFooter/>*/

