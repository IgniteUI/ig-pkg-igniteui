/*!@license
* Infragistics.Web.ClientUI infragistics.ext_collectionsExtended.js 17.1.20171.1012
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
$.ig.globalDefs.$$5 = $$t;
$$0 = $.ig.globalDefs.$$0;
$$1 = $.ig.globalDefs.$$1;
$$4 = $.ig.globalDefs.$$4;
$$6 = $.ig.globalDefs.$$6;
$.ig.$currDefinitions = $$t;
$.ig.util.bulkDefine([
"IOrderedEnumerable$1:d",
"IGrouping$2:g",
"ExpressionSyntax:t",
"IQueryable:u",
"IQueryable$1:v",
"IQueryProvider:w",
"LambdaExpression:x",
"MemberExpression:y",
"MethodCallExpression:z",
"ParameterExpression:aa"]);
/*<BeginType Name="System.IGLinq.Enumerable" />*/

$.ig.util.defType('Enumerable', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Collections.Generic.IEnumerable System.IGLinq.Enumerable::Where`1(System.Collections.Generic.IEnumerable, System.Func)" />*/
	where$1: function ($tSource, source, predicate) {
		var d__ = new $.ig.Enumerable___Where__IteratorClass$1($tSource, -2);
		d__.__3__source = source;
		d__.__3__predicate = predicate;
		return d__;
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerable System.IGLinq.Enumerable::Where`1(System.Collections.Generic.IEnumerable, System.Func)" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerable System.IGLinq.Enumerable::Where`1(System.Collections.Generic.IEnumerable, System.Func)" />*/
	where$11: function ($tSource, source, predicate) {
		var d__ = new $.ig.Enumerable___Where__IteratorClass1$1($tSource, -2);
		d__.__3__source = source;
		d__.__3__predicate = predicate;
		return d__;
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerable System.IGLinq.Enumerable::Where`1(System.Collections.Generic.IEnumerable, System.Func)" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerable System.IGLinq.Enumerable::Select`2(System.Collections.Generic.IEnumerable, System.Func)" />*/
	select$2: function ($tSource, $tResult, source, selector) {
		var d__ = new $.ig.Enumerable___Select__IteratorClass$2($tSource, $tResult, -2);
		d__.__3__source = source;
		d__.__3__selector = selector;
		return d__;
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerable System.IGLinq.Enumerable::Select`2(System.Collections.Generic.IEnumerable, System.Func)" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerable System.IGLinq.Enumerable::SelectMany`2(System.Collections.Generic.IEnumerable, System.Func)" />*/
	selectMany$2: function ($tSource, $tResult, source, selector) {
		var d__ = new $.ig.Enumerable___SelectMany__IteratorClass$2($tSource, $tResult, -2);
		d__.__3__source = source;
		d__.__3__selector = selector;
		return d__;
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerable System.IGLinq.Enumerable::SelectMany`2(System.Collections.Generic.IEnumerable, System.Func)" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerable System.IGLinq.Enumerable::OfType`1(System.Collections.IEnumerable)" />*/
	ofType$1: function ($tResult, source) {
		var d__ = new $.ig.Enumerable___OfType__IteratorClass$1($tResult, -2);
		d__.__3__source = source;
		return d__;
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerable System.IGLinq.Enumerable::OfType`1(System.Collections.IEnumerable)" />*/
	,
	/*<BeginMethod Name="System.IGLinq.Enumerable.TSource System.IGLinq.Enumerable::Last`1(System.Collections.Generic.IEnumerable)" />*/
	last$1: function ($tSource, source) {
		var ilist = $.ig.util.cast($.ig.IList$1.prototype.$type.specialize($tSource), source);
		if (ilist != null) {
			return ilist.item(ilist.count() - 1);
		}
		var current = $.ig.util.getDefaultValue($tSource);
		var en = source.getEnumerator();
		while (en.moveNext()) {
			var item = en.current();
			current = item;
		}
		return current;
	}
	/*<EndMethod Name="System.IGLinq.Enumerable.TSource System.IGLinq.Enumerable::Last`1(System.Collections.Generic.IEnumerable)" />*/
	,
	/*<BeginMethod Name="System.IGLinq.Enumerable.TSource System.IGLinq.Enumerable::First`1(System.Collections.Generic.IEnumerable)" />*/
	first$1: function ($tSource, source) {
		var en = source.getEnumerator();
		while (en.moveNext()) {
			var item = en.current();
			return item;
		}
		return $.ig.util.getDefaultValue($tSource);
	}
	/*<EndMethod Name="System.IGLinq.Enumerable.TSource System.IGLinq.Enumerable::First`1(System.Collections.Generic.IEnumerable)" />*/
	,
	/*<BeginMethod Name="System.IGLinq.Enumerable.TSource System.IGLinq.Enumerable::First`1(System.Collections.Generic.IEnumerable, System.Func)" />*/
	first$11: function ($tSource, source, predicate) {
		var en = source.getEnumerator();
		while (en.moveNext()) {
			var item = en.current();
			if (predicate(item)) {
				return item;
			}
		}
		return $.ig.util.getDefaultValue($tSource);
	}
	/*<EndMethod Name="System.IGLinq.Enumerable.TSource System.IGLinq.Enumerable::First`1(System.Collections.Generic.IEnumerable, System.Func)" />*/
	,
	/*<BeginMethod Name="System.IGLinq.Enumerable.TSource System.IGLinq.Enumerable::FirstOrDefault`1(System.Collections.Generic.IEnumerable)" />*/
	firstOrDefault$1: function ($tSource, source) {
		var en = source.getEnumerator();
		while (en.moveNext()) {
			var item = en.current();
			return item;
		}
		return $.ig.util.getDefaultValue($tSource);
	}
	/*<EndMethod Name="System.IGLinq.Enumerable.TSource System.IGLinq.Enumerable::FirstOrDefault`1(System.Collections.Generic.IEnumerable)" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IOrderedEnumerable System.IGLinq.Enumerable::OrderBy`2(System.Collections.Generic.IEnumerable, System.Func)" />*/
	orderBy$2: function ($tSource, $tKey, source, keySelector) {
		var buffer = new $.ig.SortedList$1($tSource, source);
		buffer.sort2(function (o1, o2) {
			var t1 = o1;
			var t2 = o2;
			var k1 = keySelector(t1);
			var k2 = keySelector(t2);
			if ($.ig.util.cast($.ig.IComparable.prototype.$type, k1) !== null) {
				return ($.ig.util.cast($.ig.IComparable.prototype.$type, k1)).compareTo($.ig.util.getBoxIfEnum($tKey, k2));
			} else {
				return $.ig.util.toString$1($tKey, k1).compareTo($.ig.util.toString$1($tKey, k2));
			}
		});
		return buffer;
	}
	/*<EndMethod Name="System.Collections.Generic.IOrderedEnumerable System.IGLinq.Enumerable::OrderBy`2(System.Collections.Generic.IEnumerable, System.Func)" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IOrderedEnumerable System.IGLinq.Enumerable::OrderByDescending`2(System.Collections.Generic.IEnumerable, System.Func)" />*/
	orderByDescending$2: function ($tSource, $tKey, source, keySelector) {
		var buffer = new $.ig.SortedList$1($tSource, source);
		buffer.sort2(function (o2, o1) {
			var t1 = o1;
			var t2 = o2;
			var k1 = keySelector(t1);
			var k2 = keySelector(t2);
			if ($.ig.util.cast($.ig.IComparable.prototype.$type, k1) !== null) {
				return ($.ig.util.cast($.ig.IComparable.prototype.$type, k1)).compareTo($.ig.util.getBoxIfEnum($tKey, k2));
			} else {
				return $.ig.util.toString$1($tKey, k1).compareTo($.ig.util.toString$1($tKey, k2));
			}
		});
		return buffer;
	}
	/*<EndMethod Name="System.Collections.Generic.IOrderedEnumerable System.IGLinq.Enumerable::OrderByDescending`2(System.Collections.Generic.IEnumerable, System.Func)" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.List System.IGLinq.Enumerable::ToList`1(System.Collections.Generic.IEnumerable)" />*/
	toList$1: function ($tSource, source) {
		var list = new $.ig.List$1($tSource, 1, source);
		return list;
	}
	/*<EndMethod Name="System.Collections.Generic.List System.IGLinq.Enumerable::ToList`1(System.Collections.Generic.IEnumerable)" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerable System.IGLinq.Enumerable::Range(System.Int32, System.Int32)" />*/
	range: function (startValue, count) {
		var d__ = new $.ig.Enumerable___Range__IteratorClass(-2);
		d__.__3__startValue = startValue;
		d__.__3__count = count;
		return d__;
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerable System.IGLinq.Enumerable::Range(System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerable System.IGLinq.Enumerable::Concat`1(System.Collections.Generic.IEnumerable, System.Collections.Generic.IEnumerable)" />*/
	concat$1: function ($tSource, source1, source2) {
		var d__ = new $.ig.Enumerable___Concat__IteratorClass$1($tSource, -2);
		d__.__3__source1 = source1;
		d__.__3__source2 = source2;
		return d__;
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerable System.IGLinq.Enumerable::Concat`1(System.Collections.Generic.IEnumerable, System.Collections.Generic.IEnumerable)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.IGLinq.Enumerable::Max(System.Collections.Generic.IEnumerable)" />*/
	max: function (source) {
		var first = true;
		var max = 0;
		var en = source.getEnumerator();
		while (en.moveNext()) {
			var item = en.current();
			if (first) {
				first = false;
				max = item;
			} else {
				max = Math.max(max, item);
			}
		}
		return max;
	}
	/*<EndMethod Name="System.Int32 System.IGLinq.Enumerable::Max(System.Collections.Generic.IEnumerable)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.IGLinq.Enumerable::Max`1(System.Collections.Generic.IEnumerable, System.Func)" />*/
	max$1: function ($tSource, source, selector) {
		return $.ig.Enumerable.prototype.max($.ig.Enumerable.prototype.select$2($tSource, $.ig.Number.prototype.$type, source, selector));
	}
	/*<EndMethod Name="System.Int32 System.IGLinq.Enumerable::Max`1(System.Collections.Generic.IEnumerable, System.Func)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.IGLinq.Enumerable::Min(System.Collections.Generic.IEnumerable)" />*/
	min: function (source) {
		var first = true;
		var min = 0;
		var en = source.getEnumerator();
		while (en.moveNext()) {
			var item = en.current();
			if (first) {
				first = false;
				min = item;
			} else {
				min = Math.min(min, item);
			}
		}
		return min;
	}
	/*<EndMethod Name="System.Int32 System.IGLinq.Enumerable::Min(System.Collections.Generic.IEnumerable)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.IGLinq.Enumerable::Min`1(System.Collections.Generic.IEnumerable, System.Func)" />*/
	min$1: function ($tSource, source, selector) {
		return $.ig.Enumerable.prototype.max($.ig.Enumerable.prototype.select$2($tSource, $.ig.Number.prototype.$type, source, selector));
	}
	/*<EndMethod Name="System.Int32 System.IGLinq.Enumerable::Min`1(System.Collections.Generic.IEnumerable, System.Func)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.IGLinq.Enumerable::Count`1(System.Collections.Generic.IEnumerable)" />*/
	count$1: function ($tSource, source) {
		var count = 0;
		var en = source.getEnumerator();
		while (en.moveNext()) {
			var item = en.current();
			count++;
		}
		return count;
	}
	/*<EndMethod Name="System.Int32 System.IGLinq.Enumerable::Count`1(System.Collections.Generic.IEnumerable)" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerable System.IGLinq.Enumerable::Reverse`1(System.Collections.Generic.IEnumerable)" />*/
	reverse$1: function ($tSource, source) {
		var d__ = new $.ig.Enumerable___Reverse__IteratorClass$1($tSource, -2);
		d__.__3__source = source;
		return d__;
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerable System.IGLinq.Enumerable::Reverse`1(System.Collections.Generic.IEnumerable)" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerable System.IGLinq.Enumerable::Cast`1(System.Collections.IEnumerable)" />*/
	cast$1: function ($tResult, source) {
		if (source == null) {
			throw new $.ig.ArgumentNullException(0, "source");
		}
		var enumerable = $.ig.util.cast($.ig.IEnumerable$1.prototype.$type.specialize($tResult), source);
		if (enumerable != null) {
			return enumerable;
		}
		var list = new $.ig.List$1($tResult, 0);
		var en = source.getEnumerator();
		while (en.moveNext()) {
			var item = en.current();
			if ($.ig.util.cast($tResult, item) !== null) {
				list.add($.ig.util.castObjTo$t($tResult, item));
			} else {
				list.add($.ig.util.getDefaultValue($tResult));
			}
		}
		return list;
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerable System.IGLinq.Enumerable::Cast`1(System.Collections.IEnumerable)" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerable System.IGLinq.Enumerable::Take`1(System.Collections.Generic.IEnumerable, System.Int32)" />*/
	take$1: function ($tSource, source, toTake) {
		var d__ = new $.ig.Enumerable___Take__IteratorClass$1($tSource, -2);
		d__.__3__source = source;
		d__.__3__toTake = toTake;
		return d__;
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerable System.IGLinq.Enumerable::Take`1(System.Collections.Generic.IEnumerable, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerable System.IGLinq.Enumerable::Skip`1(System.Collections.Generic.IEnumerable, System.Int32)" />*/
	skip$1: function ($tSource, source, toSkip) {
		var d__ = new $.ig.Enumerable___Skip__IteratorClass$1($tSource, -2);
		d__.__3__source = source;
		d__.__3__toSkip = toSkip;
		return d__;
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerable System.IGLinq.Enumerable::Skip`1(System.Collections.Generic.IEnumerable, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.IGLinq.Enumerable::Any`1(System.Collections.Generic.IEnumerable)" />*/
	any$1: function ($tSource, source) {
		var en = source.getEnumerator();
		while (en.moveNext()) {
			var item = en.current();
			return true;
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean System.IGLinq.Enumerable::Any`1(System.Collections.Generic.IEnumerable)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.IGLinq.Enumerable::Contains`1(System.Collections.Generic.IEnumerable, System.IGLinq.Enumerable.TSource)" />*/
	contains$1: function ($tSource, source, value_) {
		var en = source.getEnumerator();
		while (en.moveNext()) {
			var item_ = en.current();
			if (item_ === value_)
                {
                    return true;
                };
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean System.IGLinq.Enumerable::Contains`1(System.Collections.Generic.IEnumerable, System.IGLinq.Enumerable.TSource)" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerable System.IGLinq.Enumerable::Union`1(System.Collections.Generic.IEnumerable, System.Collections.Generic.IEnumerable)" />*/
	union$1: function ($tSource, first, second) {
		return null;
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerable System.IGLinq.Enumerable::Union`1(System.Collections.Generic.IEnumerable, System.Collections.Generic.IEnumerable)" />*/
	,
	/*<BeginMethod Name=" System.IGLinq.Enumerable::ToArray`1(System.Collections.Generic.IEnumerable)" />*/
	toArray$1: function ($tSource, source) {
		var arr = $.ig.util.cast($.ig.List$1.prototype.$type.specialize($tSource), source);
		if (arr != null) {
			return arr.toArray();
		}
		arr = new $.ig.List$1($tSource, 1, source);
		return arr.asArray();
	}
	/*<EndMethod Name=" System.IGLinq.Enumerable::ToArray`1(System.Collections.Generic.IEnumerable)" />*/
	,
	/*<BeginMethod Name="System.IGLinq.Enumerable.TSource System.IGLinq.Enumerable::ElementAt`1(System.Collections.Generic.IEnumerable, System.Int32)" />*/
	elementAt$1: function ($tSource, source, index) {
		var iList = $.ig.util.cast($.ig.IList$1.prototype.$type.specialize($tSource), source);
		if (iList != null) {
			return iList.item(index);
		}
		return $.ig.Enumerable.prototype.first$1($tSource, $.ig.Enumerable.prototype.skip$1($tSource, source, index));
	}
	/*<EndMethod Name="System.IGLinq.Enumerable.TSource System.IGLinq.Enumerable::ElementAt`1(System.Collections.Generic.IEnumerable, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Double System.IGLinq.Enumerable::Sum(System.Collections.Generic.IEnumerable)" />*/
	sum: function (source) {
		var sum = 0;
		var en = source.getEnumerator();
		while (en.moveNext()) {
			var item = en.current();
			sum += item;
		}
		return sum;
	}
	/*<EndMethod Name="System.Double System.IGLinq.Enumerable::Sum(System.Collections.Generic.IEnumerable)" />*/
	,
	/*<BeginMethod Name="System.Double System.IGLinq.Enumerable::Sum`1(System.Collections.Generic.IEnumerable, System.Func)" />*/
	sum$1: function ($tSource, source, selector) {
		return $.ig.Enumerable.prototype.sum($.ig.Enumerable.prototype.select$2($tSource, Number, source, selector));
	}
	/*<EndMethod Name="System.Double System.IGLinq.Enumerable::Sum`1(System.Collections.Generic.IEnumerable, System.Func)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.IGLinq.Enumerable::SequenceEqual`1(System.Collections.Generic.IEnumerable, System.Collections.Generic.IEnumerable)" />*/
	sequenceEqual$1: function ($tSource, first, second) {
		if (first == null) {
			throw new $.ig.ArgumentNullException(0, "first");
		}
		if (second == null) {
			throw new $.ig.ArgumentNullException(0, "second");
		}
		{
			var enumerator = first.getEnumerator();
			try {
				var enumerator2 = second.getEnumerator();
				try {
					while (enumerator.moveNext()) {
						if (!enumerator2.moveNext() || !$.ig.Object.prototype.equalsStatic($.ig.util.getBoxIfEnum($tSource, enumerator.current()), $.ig.util.getBoxIfEnum($tSource, enumerator2.current()))) {
							return false;
						}
					}
					return (enumerator2.moveNext() == false);
				}
				finally {
					if (enumerator2 != null) {
						enumerator2.dispose();
					}
				}
			}
			finally {
				if (enumerator != null) {
					enumerator.dispose();
				}
			}
		}
	}
	/*<EndMethod Name="System.Boolean System.IGLinq.Enumerable::SequenceEqual`1(System.Collections.Generic.IEnumerable, System.Collections.Generic.IEnumerable)" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerable System.IGLinq.Enumerable::Empty`1()" />*/
	empty$1: function ($tSource) {
		return new $.ig.Enumerable___Empty__IteratorClass$1($tSource, -2);
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerable System.IGLinq.Enumerable::Empty`1()" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerable System.IGLinq.Enumerable::SelectMany`3(System.Collections.Generic.IEnumerable, System.Func, System.Func)" />*/
	selectMany$3: function ($tSource, $tCollection, $tResult, source, collectionSelector, resultSelector) {
		var d__ = new $.ig.Enumerable___SelectMany__IteratorClass1$3($tSource, $tCollection, $tResult, -2);
		d__.__3__source = source;
		d__.__3__collectionSelector = collectionSelector;
		d__.__3__resultSelector = resultSelector;
		return d__;
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerable System.IGLinq.Enumerable::SelectMany`3(System.Collections.Generic.IEnumerable, System.Func, System.Func)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.IGLinq.Enumerable::Any`1(System.Collections.Generic.IEnumerable, System.Func)" />*/
	any$11: function ($tSource, source, predicate) {
		var en = source.getEnumerator();
		while (en.moveNext()) {
			var item = en.current();
			if (predicate(item)) {
				return true;
			}
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean System.IGLinq.Enumerable::Any`1(System.Collections.Generic.IEnumerable, System.Func)" />*/
	,
	/*<BeginMethod Name="System.IGLinq.Enumerable.TSource System.IGLinq.Enumerable::FirstOrDefault`1(System.Collections.Generic.IEnumerable, System.Func)" />*/
	firstOrDefault$11: function ($tSource, source, predicate) {
		var en = source.getEnumerator();
		while (en.moveNext()) {
			var item = en.current();
			if (predicate(item)) {
				return item;
			}
		}
		return $.ig.util.getDefaultValue($tSource);
	}
	/*<EndMethod Name="System.IGLinq.Enumerable.TSource System.IGLinq.Enumerable::FirstOrDefault`1(System.Collections.Generic.IEnumerable, System.Func)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.IGLinq.Enumerable::All`1(System.Collections.Generic.IEnumerable, System.Func)" />*/
	all$1: function ($tSource, source, predicate) {
		var en = source.getEnumerator();
		while (en.moveNext()) {
			var item = en.current();
			if (predicate(item) == false) {
				return false;
			}
		}
		return true;
	}
	/*<EndMethod Name="System.Boolean System.IGLinq.Enumerable::All`1(System.Collections.Generic.IEnumerable, System.Func)" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.Dictionary System.IGLinq.Enumerable::ToDictionary`2(System.Collections.Generic.IEnumerable, System.Func)" />*/
	toDictionary$2: function ($tSource, $tKey, source, keySelector) {
		var d = new $.ig.Dictionary$2($tKey, $tSource, 0);
		var en = source.getEnumerator();
		while (en.moveNext()) {
			var item = en.current();
			d.item(keySelector(item), item);
		}
		return d;
	}
	/*<EndMethod Name="System.Collections.Generic.Dictionary System.IGLinq.Enumerable::ToDictionary`2(System.Collections.Generic.IEnumerable, System.Func)" />*/
	,
	/*<BeginMethod Name="System.IGLinq.Enumerable.TSource System.IGLinq.Enumerable::LastOrDefault`1(System.Collections.Generic.IEnumerable)" />*/
	lastOrDefault$1: function ($tSource, source) {
		throw new $.ig.NotImplementedException(0);
		var ilist = $.ig.util.cast($.ig.IList$1.prototype.$type.specialize($tSource), source);
		if (ilist != null) {
			return ilist.count() == 0 ? $.ig.util.getDefaultValue($tSource) : ilist.item(ilist.count() - 1);
		}
		var current = $.ig.util.getDefaultValue($tSource);
		var en = source.getEnumerator();
		while (en.moveNext()) {
			var item = en.current();
			current = item;
		}
		return current;
	}
	/*<EndMethod Name="System.IGLinq.Enumerable.TSource System.IGLinq.Enumerable::LastOrDefault`1(System.Collections.Generic.IEnumerable)" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerable System.IGLinq.Enumerable::Zip`3(System.Collections.Generic.IEnumerable, System.Collections.Generic.IEnumerable, System.Func)" />*/
	zip$3: function ($tFirst, $tSecond, $tResult, first, second, resultSelector) {
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerable System.IGLinq.Enumerable::Zip`3(System.Collections.Generic.IEnumerable, System.Collections.Generic.IEnumerable, System.Func)" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerable System.IGLinq.Enumerable::Distinct`1(System.Collections.Generic.IEnumerable)" />*/
	distinct$1: function ($tSource, source) {
		throw new $.ig.NotImplementedException(0);
		return null;
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerable System.IGLinq.Enumerable::Distinct`1(System.Collections.Generic.IEnumerable)" />*/
	,
	$type: new $.ig.Type('Enumerable', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.IGLinq.Enumerable" />*/

/*<BeginType Name="System.Collections.Generic.IOrderedEnumerable`1" />*/

$.ig.util.defType('IOrderedEnumerable$1', 'Object', {
	$type: new $.ig.Type('IOrderedEnumerable$1', null, [$.ig.IEnumerable$1.prototype.$type.specialize(0), $.ig.IEnumerable.prototype.$type])
}, true);

/*<EndType Name="System.Collections.Generic.IOrderedEnumerable`1" />*/

/*<BeginType Name="System.IGLinq.SortedList`1" />*/

$.ig.util.defType('SortedList$1', 'List$1', {
	$tElement: null,
	init: function ($tElement, source) {
		this.$tElement = $tElement;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$tElement);
		}
		$.ig.List$1.prototype.init1.call(this, this.$tElement, 1, source);
	},
	/*<BeginMethod Name="System.Collections.IEnumerator System.IGLinq.SortedList`1::GetEnumerator()" />*/
	getEnumerator: function () {
		return $.ig.List$1.prototype.getEnumerator.call(this);
	}
	/*<EndMethod Name="System.Collections.IEnumerator System.IGLinq.SortedList`1::GetEnumerator()" />*/
	,
	$type: new $.ig.Type('SortedList$1', $.ig.List$1.prototype.$type.specialize(0), [$.ig.IOrderedEnumerable$1.prototype.$type.specialize(0)])
}, true);

/*<EndType Name="System.IGLinq.SortedList`1" />*/

/*<BeginType Name="System.IGLinq.IGrouping`2" />*/

$.ig.util.defType('IGrouping$2', 'Object', {
	$type: new $.ig.Type('IGrouping$2', null, [$.ig.IEnumerable$1.prototype.$type.specialize(1), $.ig.IEnumerable.prototype.$type])
}, true);

/*<EndType Name="System.IGLinq.IGrouping`2" />*/

/*<BeginType Name="System.IGLinq.ExpressionSyntax" />*/

$.ig.util.defType('ExpressionSyntax', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.IGLinq.MethodCallExpression System.IGLinq.ExpressionSyntax::Call(System.Type, System.String, , )" />*/
	call: function (type, methodName, typeArguments, arguments) {
		return null;
	}
	/*<EndMethod Name="System.IGLinq.MethodCallExpression System.IGLinq.ExpressionSyntax::Call(System.Type, System.String, , )" />*/
	,
	/*<BeginMethod Name="System.IGLinq.LambdaExpression System.IGLinq.ExpressionSyntax::Lambda(System.IGLinq.ExpressionSyntax, )" />*/
	lambda: function (body, parameters) {
		return null;
	}
	/*<EndMethod Name="System.IGLinq.LambdaExpression System.IGLinq.ExpressionSyntax::Lambda(System.IGLinq.ExpressionSyntax, )" />*/
	,
	/*<BeginMethod Name="System.IGLinq.MemberExpression System.IGLinq.ExpressionSyntax::Property(System.IGLinq.ExpressionSyntax, System.String)" />*/
	property: function (ExpressionSyntax, propertyName) {
		return null;
	}
	/*<EndMethod Name="System.IGLinq.MemberExpression System.IGLinq.ExpressionSyntax::Property(System.IGLinq.ExpressionSyntax, System.String)" />*/
	,
	/*<BeginMethod Name="System.IGLinq.ParameterExpression System.IGLinq.ExpressionSyntax::Parameter(System.Type)" />*/
	parameter: function (type) {
		return null;
	}
	/*<EndMethod Name="System.IGLinq.ParameterExpression System.IGLinq.ExpressionSyntax::Parameter(System.Type)" />*/
	,
	/*<BeginMethod Name="System.IGLinq.ParameterExpression System.IGLinq.ExpressionSyntax::Parameter(System.Type, System.String)" />*/
	parameter1: function (type, name) {
		return null;
	}
	/*<EndMethod Name="System.IGLinq.ParameterExpression System.IGLinq.ExpressionSyntax::Parameter(System.Type, System.String)" />*/
	,
	$type: new $.ig.Type('ExpressionSyntax', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.IGLinq.ExpressionSyntax" />*/

/*<BeginType Name="System.IGLinq.IQueryable" />*/

$.ig.util.defType('IQueryable', 'Object', {
	$type: new $.ig.Type('IQueryable', null)
}, true);

/*<EndType Name="System.IGLinq.IQueryable" />*/

/*<BeginType Name="System.IGLinq.IQueryable`1" />*/

$.ig.util.defType('IQueryable$1', 'Object', {
	$type: new $.ig.Type('IQueryable$1', null, [$.ig.IQueryable.prototype.$type])
}, true);

/*<EndType Name="System.IGLinq.IQueryable`1" />*/

/*<BeginType Name="System.IGLinq.IQueryProvider" />*/

$.ig.util.defType('IQueryProvider', 'Object', {
	$type: new $.ig.Type('IQueryProvider', null)
}, true);

/*<EndType Name="System.IGLinq.IQueryProvider" />*/

/*<BeginType Name="System.IGLinq.LambdaExpression" />*/

$.ig.util.defType('LambdaExpression', 'ExpressionSyntax', {
	init: function () {
		$.ig.ExpressionSyntax.prototype.init.call(this);
	},
	$type: new $.ig.Type('LambdaExpression', $.ig.ExpressionSyntax.prototype.$type)
}, true);

/*<EndType Name="System.IGLinq.LambdaExpression" />*/

/*<BeginType Name="System.IGLinq.MemberExpression" />*/

$.ig.util.defType('MemberExpression', 'ExpressionSyntax', {
	init: function () {
		$.ig.ExpressionSyntax.prototype.init.call(this);
	},
	_expressionSyntax: null,
	/*<BeginProperty Name="System.IGLinq.ExpressionSyntax System.IGLinq.MemberExpression::ExpressionSyntax()" />*/
	expressionSyntax: function (value) {
		if (arguments.length === 1) {
			this._expressionSyntax = value;
			return value;
		} else {
			return this._expressionSyntax;
		}
	}
	/*<EndProperty Name="System.IGLinq.ExpressionSyntax System.IGLinq.MemberExpression::ExpressionSyntax()" />*/
	,
	/*<BeginMethod Name="System.IGLinq.MemberExpression System.IGLinq.MemberExpression::Update(System.IGLinq.ExpressionSyntax)" />*/
	update: function (ExpressionSyntax) {
		return null;
	}
	/*<EndMethod Name="System.IGLinq.MemberExpression System.IGLinq.MemberExpression::Update(System.IGLinq.ExpressionSyntax)" />*/
	,
	$type: new $.ig.Type('MemberExpression', $.ig.ExpressionSyntax.prototype.$type)
}, true);

/*<EndType Name="System.IGLinq.MemberExpression" />*/

/*<BeginType Name="System.IGLinq.MethodCallExpression" />*/

$.ig.util.defType('MethodCallExpression', 'ExpressionSyntax', {
	init: function () {
		$.ig.ExpressionSyntax.prototype.init.call(this);
	},
	_arguments: null,
	/*<BeginProperty Name="System.Collections.ObjectModel.ReadOnlyCollection System.IGLinq.MethodCallExpression::Arguments()" />*/
	arguments: function (value) {
		if (arguments.length === 1) {
			this._arguments = value;
			return value;
		} else {
			return this._arguments;
		}
	}
	/*<EndProperty Name="System.Collections.ObjectModel.ReadOnlyCollection System.IGLinq.MethodCallExpression::Arguments()" />*/
	,
	_object1: null,
	/*<BeginProperty Name="System.IGLinq.ExpressionSyntax System.IGLinq.MethodCallExpression::Object()" />*/
	object1: function (value) {
		if (arguments.length === 1) {
			this._object1 = value;
			return value;
		} else {
			return this._object1;
		}
	}
	/*<EndProperty Name="System.IGLinq.ExpressionSyntax System.IGLinq.MethodCallExpression::Object()" />*/
	,
	/*<BeginMethod Name="System.IGLinq.MethodCallExpression System.IGLinq.MethodCallExpression::Update(System.IGLinq.ExpressionSyntax, System.Collections.Generic.IEnumerable)" />*/
	update: function (object, arguments) {
		return null;
	}
	/*<EndMethod Name="System.IGLinq.MethodCallExpression System.IGLinq.MethodCallExpression::Update(System.IGLinq.ExpressionSyntax, System.Collections.Generic.IEnumerable)" />*/
	,
	$type: new $.ig.Type('MethodCallExpression', $.ig.ExpressionSyntax.prototype.$type)
}, true);

/*<EndType Name="System.IGLinq.MethodCallExpression" />*/

/*<BeginType Name="System.IGLinq.ParameterExpression" />*/

$.ig.util.defType('ParameterExpression', 'ExpressionSyntax', {
	init: function () {
		$.ig.ExpressionSyntax.prototype.init.call(this);
	},
	_isByRef: false,
	/*<BeginProperty Name="System.Boolean System.IGLinq.ParameterExpression::IsByRef()" />*/
	isByRef: function (value) {
		if (arguments.length === 1) {
			this._isByRef = value;
			return value;
		} else {
			return this._isByRef;
		}
	}
	/*<EndProperty Name="System.Boolean System.IGLinq.ParameterExpression::IsByRef()" />*/
	,
	_name: null,
	/*<BeginProperty Name="System.String System.IGLinq.ParameterExpression::Name()" />*/
	name: function (value) {
		if (arguments.length === 1) {
			this._name = value;
			return value;
		} else {
			return this._name;
		}
	}
	/*<EndProperty Name="System.String System.IGLinq.ParameterExpression::Name()" />*/
	,
	$type: new $.ig.Type('ParameterExpression', $.ig.ExpressionSyntax.prototype.$type)
}, true);

/*<EndType Name="System.IGLinq.ParameterExpression" />*/

/*<BeginType Name="System.IGLinq.Queryable" />*/

$.ig.util.defType('Queryable', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.IGLinq.IQueryable System.IGLinq.Queryable::AsQueryable(System.Collections.IEnumerable)" />*/
	asQueryable: function (source) {
		return null;
	}
	/*<EndMethod Name="System.IGLinq.IQueryable System.IGLinq.Queryable::AsQueryable(System.Collections.IEnumerable)" />*/
	,
	$type: new $.ig.Type('Queryable', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.IGLinq.Queryable" />*/

/*<BeginType Name="System.Collections.BitArray" />*/

$.ig.util.defType('BitArray', 'Object', {
	__count: 0,
	__values: null,
	init: function (initNumber, bits) {
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
		$.ig.BitArray.prototype.init3.call(this, 3, bits.__values);
		this.__count = bits.__count;
	},
	init1: function (initNumber, values) {
		$.ig.Object.prototype.init.call(this);
		this.length(values.length);
		for (var i = 0; i < values.length; i++) {
			this.item(i, values[i]);
		}
	},
	init2: function (initNumber, length) {
		$.ig.BitArray.prototype.init4.call(this, 4, length, false);
	},
	init3: function (initNumber, values) {
		$.ig.Object.prototype.init.call(this);
		this.__count = values.length * 32;
		this.__values = new Array(values.length);
		for (var i = 0; i < values.length; i++) {
			this.__values[i] = values[i];
		}
	},
	init4: function (initNumber, length, defaultValue) {
		$.ig.Object.prototype.init.call(this);
		this.__count = length;
		this.__values = new Array(($.ig.intDivide((length - 1), 32)) + 1);
		this.setAll(defaultValue);
	},
	/*<BeginProperty Name="System.Int32 System.Collections.BitArray::Count()" />*/
	count: function () {
		return this.__count;
	}
	/*<EndProperty Name="System.Int32 System.Collections.BitArray::Count()" />*/
	,
	/*<BeginProperty Name="System.Boolean System.Collections.BitArray::IsReadOnly()" />*/
	isReadOnly: function () {
		return false;
	}
	/*<EndProperty Name="System.Boolean System.Collections.BitArray::IsReadOnly()" />*/
	,
	/*<BeginProperty Name="System.Boolean System.Collections.BitArray::IsSynchronized()" />*/
	isSynchronized: function () {
		return false;
	}
	/*<EndProperty Name="System.Boolean System.Collections.BitArray::IsSynchronized()" />*/
	,
	/*<BeginProperty Name="System.Int32 System.Collections.BitArray::Length()" />*/
	length: function (value) {
		if (arguments.length === 1) {
			if (value < 0) {
				throw new $.ig.ArgumentOutOfRangeException(0);
			}
			this.__count = value;
			var newArrayLength = ($.ig.intDivide((this.__count - 1), 32)) + 1;
			if (this.__values.length < newArrayLength) {
				var old = this.__values;
				this.__values = new Array(newArrayLength);
				for (var i = 0; i < old.length; i++) {
					this.__values[i] = old[i];
				}
			}
			return value;
		} else {
			return this.__count;
		}
	}
	/*<EndProperty Name="System.Int32 System.Collections.BitArray::Length()" />*/
	,
	/*<BeginProperty Name="System.Object System.Collections.BitArray::SyncRoot()" />*/
	syncRoot: function () {
		return null;
	}
	/*<EndProperty Name="System.Object System.Collections.BitArray::SyncRoot()" />*/
	,
	/*<BeginProperty Name="System.Boolean System.Collections.BitArray::Item(System.Int32)" />*/
	item: function (index, value) {
		if (arguments.length === 2) {
			if (index < 0 || this.__count <= index) {
				throw new $.ig.IndexOutOfRangeException(0);
			}
			if (value) {
				this.__values[$.ig.intDivide(index, 32)] |= 1 << (index % 32);
			} else {
				this.__values[$.ig.intDivide(index, 32)] &= ~(1 << (index % 32));
			}
			return value;
		} else {
			if (index < 0 || this.__count <= index) {
				throw new $.ig.IndexOutOfRangeException(0);
			}
			return (this.__values[$.ig.intDivide(index, 32)] & (1 << (index % 32))) != 0;
		}
	}
	/*<EndProperty Name="System.Boolean System.Collections.BitArray::Item(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Collections.BitArray System.Collections.BitArray::And(System.Collections.BitArray)" />*/
	and: function (value) {
		if (value.length() != this.length()) {
			throw new $.ig.ArgumentException(1, "The BitArrays do not have the same length");
		}
		for (var i = 0; i < this.__values.length; i++) {
			this.__values[i] &= value.__values[i];
		}
		return this;
	}
	/*<EndMethod Name="System.Collections.BitArray System.Collections.BitArray::And(System.Collections.BitArray)" />*/
	,
	/*<BeginMethod Name="System.Object System.Collections.BitArray::Clone()" />*/
	clone: function () {
		return new $.ig.BitArray(0, this);
	}
	/*<EndMethod Name="System.Object System.Collections.BitArray::Clone()" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.BitArray::CopyTo(System.Array, System.Int32)" />*/
	copyTo: function (array, index) {
		for (var i = 0; i < this.__count; i++) {
			array[index + i] = this.item(i);
		}
	}
	/*<EndMethod Name="System.Void System.Collections.BitArray::CopyTo(System.Array, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Collections.BitArray::Get(System.Int32)" />*/
	get: function (index) {
		return this.item(index);
	}
	/*<EndMethod Name="System.Boolean System.Collections.BitArray::Get(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Collections.IEnumerator System.Collections.BitArray::GetEnumerator()" />*/
	getEnumerator: function () {
		var d__ = new $.ig.BitArray___GetEnumerator__IteratorClass(0);
		d__.__4__this = this;
		return d__;
	}
	/*<EndMethod Name="System.Collections.IEnumerator System.Collections.BitArray::GetEnumerator()" />*/
	,
	/*<BeginMethod Name="System.Collections.BitArray System.Collections.BitArray::Not()" />*/
	not: function () {
		for (var i = 0; i < this.__values.length; i++) {
			this.__values[i] = ~this.__values[i];
		}
		return this;
	}
	/*<EndMethod Name="System.Collections.BitArray System.Collections.BitArray::Not()" />*/
	,
	/*<BeginMethod Name="System.Collections.BitArray System.Collections.BitArray::Or(System.Collections.BitArray)" />*/
	or: function (value) {
		if (value.length() != this.length()) {
			throw new $.ig.ArgumentException(1, "The BitArrays do not have the same length");
		}
		for (var i = 0; i < this.__values.length; i++) {
			this.__values[i] |= value.__values[i];
		}
		return this;
	}
	/*<EndMethod Name="System.Collections.BitArray System.Collections.BitArray::Or(System.Collections.BitArray)" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.BitArray::Set(System.Int32, System.Boolean)" />*/
	set: function (index, value) {
		this.item(index, value);
	}
	/*<EndMethod Name="System.Void System.Collections.BitArray::Set(System.Int32, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.BitArray::SetAll(System.Boolean)" />*/
	setAll: function (value) {
		var val = value ? -1 : 0;
		for (var i = 0; i < this.__values.length; i++) {
			this.__values[i] = val;
		}
	}
	/*<EndMethod Name="System.Void System.Collections.BitArray::SetAll(System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Collections.BitArray System.Collections.BitArray::Xor(System.Collections.BitArray)" />*/
	xor: function (value) {
		if (value.length() != this.length()) {
			throw new $.ig.ArgumentException(1, "The BitArrays do not have the same length");
		}
		for (var i = 0; i < this.__values.length; i++) {
			this.__values[i] ^= value.__values[i];
		}
		return this;
	}
	/*<EndMethod Name="System.Collections.BitArray System.Collections.BitArray::Xor(System.Collections.BitArray)" />*/
	,
	$type: new $.ig.Type('BitArray', $.ig.Object.prototype.$type, [$.ig.ICollection.prototype.$type, $.ig.IEnumerable.prototype.$type])
}, true);

/*<EndType Name="System.Collections.BitArray" />*/

/*<BeginType Name="System.Collections.ObjectModel.ReadOnlyObservableCollection`1" />*/

$.ig.util.defType('ReadOnlyObservableCollection$1', 'ReadOnlyCollection$1', {
	$t: null,
	init: function ($t, list) {
		this.$t = $t;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$t);
		}
		$.ig.ReadOnlyCollection$1.prototype.init.call(this, this.$t, 0);
	},
	collectionChanged: null,
	propertyChanged: null,
	$type: new $.ig.Type('ReadOnlyObservableCollection$1', $.ig.ReadOnlyCollection$1.prototype.$type.specialize(0), [$.ig.INotifyCollectionChanged.prototype.$type, $.ig.INotifyPropertyChanged.prototype.$type])
}, true);

/*<EndType Name="System.Collections.ObjectModel.ReadOnlyObservableCollection`1" />*/

/*<BeginType Name="System.IGLinq.Enumerable___OfType__IteratorClass`1" />*/

$.ig.util.defType('Enumerable___OfType__IteratorClass$1', 'Object', {
	$tResult: null,
	__1__state: 0,
	__2__current: null,
	_itemEnumerator: null,
	__item_5_0: null,
	_source: null,
	__3__source: null,
	init: function ($tResult, _1__state) {
		this.$tResult = $tResult;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$tResult);
		}
		$.ig.Object.prototype.init.call(this);
		this.__1__state = _1__state;
	},
	/*<BeginMethod Name="System.Void System.IGLinq.Enumerable___OfType__IteratorClass`1::_m_Finally0()" />*/
	_m_Finally0: function () {
		this.__1__state = -1;
		var d__ = $.ig.util.cast($.ig.IDisposable.prototype.$type, this._itemEnumerator);
		if (d__ != null) {
			d__.dispose();
		}
	}
	/*<EndMethod Name="System.Void System.IGLinq.Enumerable___OfType__IteratorClass`1::_m_Finally0()" />*/
	,
	/*<BeginMethod Name="System.Boolean System.IGLinq.Enumerable___OfType__IteratorClass`1::MoveNext()" />*/
	moveNext: function () {
		var __hasError__ = false;
		try {
			while (this.__1__state >= 0) {
				switch (this.__1__state) {
					case 0:
						this.__1__state = 1;
						this._itemEnumerator = this._source.getEnumerator();
						this.__1__state = 2;
						break;
					case 2:
						this.__1__state = 1;
						if (this._itemEnumerator.moveNext()) {
							this.__item_5_0 = this._itemEnumerator.current();
							if ($.ig.util.cast(this.$tResult, this.__item_5_0) !== null) {
								this.__2__current = $.ig.util.castObjTo$t(this.$tResult, this.__item_5_0);
								this.__1__state = 2;
								return true;
							}
							this.__1__state = 2;
							break;
						}
						this._m_Finally0();
						break;
				}
			}
		}
		catch (e) {
			__hasError__ = true;
			throw e;
		}
		finally {
			if (__hasError__) {
				(this).dispose();
			}
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean System.IGLinq.Enumerable___OfType__IteratorClass`1::MoveNext()" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerator System.IGLinq.Enumerable___OfType__IteratorClass`1::System.Collections.Generic.IEnumerable<TResult>.GetEnumerator()" />*/
	getEnumerator: function () {
		var d__;
		if (this.__1__state == -2) {
			this.__1__state = 0;
			d__ = this;
		} else {
			d__ = new $.ig.Enumerable___OfType__IteratorClass$1(this.$tResult, 0);
		}
		d__._source = this.__3__source;
		return d__;
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerator System.IGLinq.Enumerable___OfType__IteratorClass`1::System.Collections.Generic.IEnumerable<TResult>.GetEnumerator()" />*/
	,
	/*<BeginMethod Name="System.Void System.IGLinq.Enumerable___OfType__IteratorClass`1::System.Collections.IEnumerator.Reset()" />*/
	reset: function () {
		throw new $.ig.NotSupportedException(1);
	}
	/*<EndMethod Name="System.Void System.IGLinq.Enumerable___OfType__IteratorClass`1::System.Collections.IEnumerator.Reset()" />*/
	,
	/*<BeginMethod Name="System.Void System.IGLinq.Enumerable___OfType__IteratorClass`1::System.IDisposable.Dispose()" />*/
	dispose: function () {
		switch (this.__1__state) {
			case 1:
			case 2:
				this._m_Finally0();
				break;
		}
	}
	/*<EndMethod Name="System.Void System.IGLinq.Enumerable___OfType__IteratorClass`1::System.IDisposable.Dispose()" />*/
	,
	/*<BeginProperty Name="System.IGLinq.Enumerable___OfType__IteratorClass.TResult System.IGLinq.Enumerable___OfType__IteratorClass`1::System.Collections.Generic.IEnumerator<TResult>.Current()" />*/
	current: function () {
		return this.__2__current;
	}
	/*<EndProperty Name="System.IGLinq.Enumerable___OfType__IteratorClass.TResult System.IGLinq.Enumerable___OfType__IteratorClass`1::System.Collections.Generic.IEnumerator<TResult>.Current()" />*/
	,
	/*<BeginProperty Name="System.Object System.IGLinq.Enumerable___OfType__IteratorClass`1::System.Collections.IEnumerator.Current()" />*/
	current1: function () {
		return $.ig.util.getBoxIfEnum(this.$tResult, this.__2__current);
	}
	/*<EndProperty Name="System.Object System.IGLinq.Enumerable___OfType__IteratorClass`1::System.Collections.IEnumerator.Current()" />*/
	,
	$type: new $.ig.Type('Enumerable___OfType__IteratorClass$1', $.ig.Object.prototype.$type, [$.ig.IEnumerable$1.prototype.$type.specialize(0), $.ig.IEnumerable.prototype.$type, $.ig.IEnumerator$1.prototype.$type.specialize(0), $.ig.IEnumerator.prototype.$type, $.ig.IDisposable.prototype.$type])
}, true);

/*<EndType Name="System.IGLinq.Enumerable___OfType__IteratorClass`1" />*/

/*<BeginType Name="System.IGLinq.Enumerable___Reverse__IteratorClass`1" />*/

$.ig.util.defType('Enumerable___Reverse__IteratorClass$1', 'Object', {
	$tSource: null,
	__1__state: 0,
	__2__current: null,
	__list_5_0: null,
	__i_5_1: 0,
	_source: null,
	__3__source: null,
	init: function ($tSource, _1__state) {
		this.$tSource = $tSource;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$tSource);
		}
		$.ig.Object.prototype.init.call(this);
		this.__1__state = _1__state;
	},
	/*<BeginMethod Name="System.Boolean System.IGLinq.Enumerable___Reverse__IteratorClass`1::MoveNext()" />*/
	moveNext: function () {
		while (this.__1__state >= 0) {
			switch (this.__1__state) {
				case 0:
					this.__1__state = -1;
					this.__list_5_0 = new $.ig.List$1(this.$tSource, 1, this._source);
					this.__i_5_1 = this.__list_5_0.count() - 1;
					this.__1__state = 1;
					break;
				case 1:
					this.__1__state = -1;
					if (this.__i_5_1 >= 0) {
						this.__2__current = this.__list_5_0.__inner[this.__i_5_1];
						this.__1__state = 2;
						return true;
					}
					break;
				case 2:
					this.__1__state = -1;
					this.__i_5_1--;
					this.__1__state = 1;
					break;
			}
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean System.IGLinq.Enumerable___Reverse__IteratorClass`1::MoveNext()" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerator System.IGLinq.Enumerable___Reverse__IteratorClass`1::System.Collections.Generic.IEnumerable<TSource>.GetEnumerator()" />*/
	getEnumerator: function () {
		var d__;
		if (this.__1__state == -2) {
			this.__1__state = 0;
			d__ = this;
		} else {
			d__ = new $.ig.Enumerable___Reverse__IteratorClass$1(this.$tSource, 0);
		}
		d__._source = this.__3__source;
		return d__;
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerator System.IGLinq.Enumerable___Reverse__IteratorClass`1::System.Collections.Generic.IEnumerable<TSource>.GetEnumerator()" />*/
	,
	/*<BeginMethod Name="System.Void System.IGLinq.Enumerable___Reverse__IteratorClass`1::System.Collections.IEnumerator.Reset()" />*/
	reset: function () {
		throw new $.ig.NotSupportedException(1);
	}
	/*<EndMethod Name="System.Void System.IGLinq.Enumerable___Reverse__IteratorClass`1::System.Collections.IEnumerator.Reset()" />*/
	,
	/*<BeginMethod Name="System.Void System.IGLinq.Enumerable___Reverse__IteratorClass`1::System.IDisposable.Dispose()" />*/
	dispose: function () {
	}
	/*<EndMethod Name="System.Void System.IGLinq.Enumerable___Reverse__IteratorClass`1::System.IDisposable.Dispose()" />*/
	,
	/*<BeginProperty Name="System.IGLinq.Enumerable___Reverse__IteratorClass.TSource System.IGLinq.Enumerable___Reverse__IteratorClass`1::System.Collections.Generic.IEnumerator<TSource>.Current()" />*/
	current: function () {
		return this.__2__current;
	}
	/*<EndProperty Name="System.IGLinq.Enumerable___Reverse__IteratorClass.TSource System.IGLinq.Enumerable___Reverse__IteratorClass`1::System.Collections.Generic.IEnumerator<TSource>.Current()" />*/
	,
	/*<BeginProperty Name="System.Object System.IGLinq.Enumerable___Reverse__IteratorClass`1::System.Collections.IEnumerator.Current()" />*/
	current1: function () {
		return $.ig.util.getBoxIfEnum(this.$tSource, this.__2__current);
	}
	/*<EndProperty Name="System.Object System.IGLinq.Enumerable___Reverse__IteratorClass`1::System.Collections.IEnumerator.Current()" />*/
	,
	$type: new $.ig.Type('Enumerable___Reverse__IteratorClass$1', $.ig.Object.prototype.$type, [$.ig.IEnumerable$1.prototype.$type.specialize(0), $.ig.IEnumerable.prototype.$type, $.ig.IEnumerator$1.prototype.$type.specialize(0), $.ig.IEnumerator.prototype.$type, $.ig.IDisposable.prototype.$type])
}, true);

/*<EndType Name="System.IGLinq.Enumerable___Reverse__IteratorClass`1" />*/

/*<BeginType Name="System.IGLinq.Enumerable___Take__IteratorClass`1" />*/

$.ig.util.defType('Enumerable___Take__IteratorClass$1', 'Object', {
	$tSource: null,
	__1__state: 0,
	__2__current: null,
	_itemEnumerator: null,
	__item_5_0: null,
	_source: null,
	__3__source: null,
	_toTake: 0,
	__3__toTake: 0,
	init: function ($tSource, _1__state) {
		this.$tSource = $tSource;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$tSource);
		}
		$.ig.Object.prototype.init.call(this);
		this.__1__state = _1__state;
	},
	/*<BeginMethod Name="System.Void System.IGLinq.Enumerable___Take__IteratorClass`1::_m_Finally0()" />*/
	_m_Finally0: function () {
		this.__1__state = -1;
		if (this._itemEnumerator != null) {
			this._itemEnumerator.dispose();
		}
	}
	/*<EndMethod Name="System.Void System.IGLinq.Enumerable___Take__IteratorClass`1::_m_Finally0()" />*/
	,
	/*<BeginMethod Name="System.Boolean System.IGLinq.Enumerable___Take__IteratorClass`1::MoveNext()" />*/
	moveNext: function () {
		var __hasError__ = false;
		try {
			while (this.__1__state >= 0) {
				switch (this.__1__state) {
					case 0:
						this.__1__state = 1;
						this._itemEnumerator = this._source.getEnumerator();
						this.__1__state = 2;
						break;
					case 2:
						this.__1__state = 1;
						if (this._itemEnumerator.moveNext()) {
							this.__item_5_0 = this._itemEnumerator.current();
							if (this._toTake > 0) {
								this._toTake--;
								this.__2__current = this.__item_5_0;
								this.__1__state = 2;
								return true;
							}
							return false;
						}
						this._m_Finally0();
						break;
				}
			}
		}
		catch (e) {
			__hasError__ = true;
			throw e;
		}
		finally {
			if (__hasError__) {
				(this).dispose();
			}
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean System.IGLinq.Enumerable___Take__IteratorClass`1::MoveNext()" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerator System.IGLinq.Enumerable___Take__IteratorClass`1::System.Collections.Generic.IEnumerable<TSource>.GetEnumerator()" />*/
	getEnumerator: function () {
		var d__;
		if (this.__1__state == -2) {
			this.__1__state = 0;
			d__ = this;
		} else {
			d__ = new $.ig.Enumerable___Take__IteratorClass$1(this.$tSource, 0);
		}
		d__._source = this.__3__source;
		d__._toTake = this.__3__toTake;
		return d__;
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerator System.IGLinq.Enumerable___Take__IteratorClass`1::System.Collections.Generic.IEnumerable<TSource>.GetEnumerator()" />*/
	,
	/*<BeginMethod Name="System.Void System.IGLinq.Enumerable___Take__IteratorClass`1::System.Collections.IEnumerator.Reset()" />*/
	reset: function () {
		throw new $.ig.NotSupportedException(1);
	}
	/*<EndMethod Name="System.Void System.IGLinq.Enumerable___Take__IteratorClass`1::System.Collections.IEnumerator.Reset()" />*/
	,
	/*<BeginMethod Name="System.Void System.IGLinq.Enumerable___Take__IteratorClass`1::System.IDisposable.Dispose()" />*/
	dispose: function () {
		switch (this.__1__state) {
			case 1:
			case 2:
				this._m_Finally0();
				break;
		}
	}
	/*<EndMethod Name="System.Void System.IGLinq.Enumerable___Take__IteratorClass`1::System.IDisposable.Dispose()" />*/
	,
	/*<BeginProperty Name="System.IGLinq.Enumerable___Take__IteratorClass.TSource System.IGLinq.Enumerable___Take__IteratorClass`1::System.Collections.Generic.IEnumerator<TSource>.Current()" />*/
	current: function () {
		return this.__2__current;
	}
	/*<EndProperty Name="System.IGLinq.Enumerable___Take__IteratorClass.TSource System.IGLinq.Enumerable___Take__IteratorClass`1::System.Collections.Generic.IEnumerator<TSource>.Current()" />*/
	,
	/*<BeginProperty Name="System.Object System.IGLinq.Enumerable___Take__IteratorClass`1::System.Collections.IEnumerator.Current()" />*/
	current1: function () {
		return $.ig.util.getBoxIfEnum(this.$tSource, this.__2__current);
	}
	/*<EndProperty Name="System.Object System.IGLinq.Enumerable___Take__IteratorClass`1::System.Collections.IEnumerator.Current()" />*/
	,
	$type: new $.ig.Type('Enumerable___Take__IteratorClass$1', $.ig.Object.prototype.$type, [$.ig.IEnumerable$1.prototype.$type.specialize(0), $.ig.IEnumerable.prototype.$type, $.ig.IEnumerator$1.prototype.$type.specialize(0), $.ig.IEnumerator.prototype.$type, $.ig.IDisposable.prototype.$type])
}, true);

/*<EndType Name="System.IGLinq.Enumerable___Take__IteratorClass`1" />*/

/*<BeginType Name="System.IGLinq.Enumerable___Skip__IteratorClass`1" />*/

$.ig.util.defType('Enumerable___Skip__IteratorClass$1', 'Object', {
	$tSource: null,
	__1__state: 0,
	__2__current: null,
	_itemEnumerator: null,
	__item_5_0: null,
	_source: null,
	__3__source: null,
	_toSkip: 0,
	__3__toSkip: 0,
	init: function ($tSource, _1__state) {
		this.$tSource = $tSource;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$tSource);
		}
		$.ig.Object.prototype.init.call(this);
		this.__1__state = _1__state;
	},
	/*<BeginMethod Name="System.Void System.IGLinq.Enumerable___Skip__IteratorClass`1::_m_Finally0()" />*/
	_m_Finally0: function () {
		this.__1__state = -1;
		if (this._itemEnumerator != null) {
			this._itemEnumerator.dispose();
		}
	}
	/*<EndMethod Name="System.Void System.IGLinq.Enumerable___Skip__IteratorClass`1::_m_Finally0()" />*/
	,
	/*<BeginMethod Name="System.Boolean System.IGLinq.Enumerable___Skip__IteratorClass`1::MoveNext()" />*/
	moveNext: function () {
		var __hasError__ = false;
		try {
			while (this.__1__state >= 0) {
				switch (this.__1__state) {
					case 0:
						this.__1__state = 1;
						this._itemEnumerator = this._source.getEnumerator();
						this.__1__state = 2;
						break;
					case 2:
						this.__1__state = 1;
						if (this._itemEnumerator.moveNext()) {
							this.__item_5_0 = this._itemEnumerator.current();
							if (this._toSkip <= 0) {
								this.__2__current = this.__item_5_0;
								this.__1__state = 2;
								return true;
							}
							this._toSkip--;
							this.__1__state = 2;
							break;
						}
						this._m_Finally0();
						break;
				}
			}
		}
		catch (e) {
			__hasError__ = true;
			throw e;
		}
		finally {
			if (__hasError__) {
				(this).dispose();
			}
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean System.IGLinq.Enumerable___Skip__IteratorClass`1::MoveNext()" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerator System.IGLinq.Enumerable___Skip__IteratorClass`1::System.Collections.Generic.IEnumerable<TSource>.GetEnumerator()" />*/
	getEnumerator: function () {
		var d__;
		if (this.__1__state == -2) {
			this.__1__state = 0;
			d__ = this;
		} else {
			d__ = new $.ig.Enumerable___Skip__IteratorClass$1(this.$tSource, 0);
		}
		d__._source = this.__3__source;
		d__._toSkip = this.__3__toSkip;
		return d__;
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerator System.IGLinq.Enumerable___Skip__IteratorClass`1::System.Collections.Generic.IEnumerable<TSource>.GetEnumerator()" />*/
	,
	/*<BeginMethod Name="System.Void System.IGLinq.Enumerable___Skip__IteratorClass`1::System.Collections.IEnumerator.Reset()" />*/
	reset: function () {
		throw new $.ig.NotSupportedException(1);
	}
	/*<EndMethod Name="System.Void System.IGLinq.Enumerable___Skip__IteratorClass`1::System.Collections.IEnumerator.Reset()" />*/
	,
	/*<BeginMethod Name="System.Void System.IGLinq.Enumerable___Skip__IteratorClass`1::System.IDisposable.Dispose()" />*/
	dispose: function () {
		switch (this.__1__state) {
			case 1:
			case 2:
				this._m_Finally0();
				break;
		}
	}
	/*<EndMethod Name="System.Void System.IGLinq.Enumerable___Skip__IteratorClass`1::System.IDisposable.Dispose()" />*/
	,
	/*<BeginProperty Name="System.IGLinq.Enumerable___Skip__IteratorClass.TSource System.IGLinq.Enumerable___Skip__IteratorClass`1::System.Collections.Generic.IEnumerator<TSource>.Current()" />*/
	current: function () {
		return this.__2__current;
	}
	/*<EndProperty Name="System.IGLinq.Enumerable___Skip__IteratorClass.TSource System.IGLinq.Enumerable___Skip__IteratorClass`1::System.Collections.Generic.IEnumerator<TSource>.Current()" />*/
	,
	/*<BeginProperty Name="System.Object System.IGLinq.Enumerable___Skip__IteratorClass`1::System.Collections.IEnumerator.Current()" />*/
	current1: function () {
		return $.ig.util.getBoxIfEnum(this.$tSource, this.__2__current);
	}
	/*<EndProperty Name="System.Object System.IGLinq.Enumerable___Skip__IteratorClass`1::System.Collections.IEnumerator.Current()" />*/
	,
	$type: new $.ig.Type('Enumerable___Skip__IteratorClass$1', $.ig.Object.prototype.$type, [$.ig.IEnumerable$1.prototype.$type.specialize(0), $.ig.IEnumerable.prototype.$type, $.ig.IEnumerator$1.prototype.$type.specialize(0), $.ig.IEnumerator.prototype.$type, $.ig.IDisposable.prototype.$type])
}, true);

/*<EndType Name="System.IGLinq.Enumerable___Skip__IteratorClass`1" />*/

/*<BeginType Name="System.IGLinq.Enumerable___Empty__IteratorClass`1" />*/

$.ig.util.defType('Enumerable___Empty__IteratorClass$1', 'Object', {
	$tSource: null,
	__1__state: 0,
	__2__current: null,
	init: function ($tSource, _1__state) {
		this.$tSource = $tSource;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$tSource);
		}
		$.ig.Object.prototype.init.call(this);
		this.__1__state = _1__state;
	},
	/*<BeginMethod Name="System.Boolean System.IGLinq.Enumerable___Empty__IteratorClass`1::MoveNext()" />*/
	moveNext: function () {
		switch (this.__1__state) {
			case 0:
				this.__1__state = -1;
				return false;
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean System.IGLinq.Enumerable___Empty__IteratorClass`1::MoveNext()" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerator System.IGLinq.Enumerable___Empty__IteratorClass`1::System.Collections.Generic.IEnumerable<TSource>.GetEnumerator()" />*/
	getEnumerator: function () {
		if (this.__1__state == -2) {
			this.__1__state = 0;
			return this;
		}
		return new $.ig.Enumerable___Empty__IteratorClass$1(this.$tSource, 0);
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerator System.IGLinq.Enumerable___Empty__IteratorClass`1::System.Collections.Generic.IEnumerable<TSource>.GetEnumerator()" />*/
	,
	/*<BeginMethod Name="System.Void System.IGLinq.Enumerable___Empty__IteratorClass`1::System.Collections.IEnumerator.Reset()" />*/
	reset: function () {
		throw new $.ig.NotSupportedException(1);
	}
	/*<EndMethod Name="System.Void System.IGLinq.Enumerable___Empty__IteratorClass`1::System.Collections.IEnumerator.Reset()" />*/
	,
	/*<BeginMethod Name="System.Void System.IGLinq.Enumerable___Empty__IteratorClass`1::System.IDisposable.Dispose()" />*/
	dispose: function () {
	}
	/*<EndMethod Name="System.Void System.IGLinq.Enumerable___Empty__IteratorClass`1::System.IDisposable.Dispose()" />*/
	,
	/*<BeginProperty Name="System.IGLinq.Enumerable___Empty__IteratorClass.TSource System.IGLinq.Enumerable___Empty__IteratorClass`1::System.Collections.Generic.IEnumerator<TSource>.Current()" />*/
	current: function () {
		return this.__2__current;
	}
	/*<EndProperty Name="System.IGLinq.Enumerable___Empty__IteratorClass.TSource System.IGLinq.Enumerable___Empty__IteratorClass`1::System.Collections.Generic.IEnumerator<TSource>.Current()" />*/
	,
	/*<BeginProperty Name="System.Object System.IGLinq.Enumerable___Empty__IteratorClass`1::System.Collections.IEnumerator.Current()" />*/
	current1: function () {
		return $.ig.util.getBoxIfEnum(this.$tSource, this.__2__current);
	}
	/*<EndProperty Name="System.Object System.IGLinq.Enumerable___Empty__IteratorClass`1::System.Collections.IEnumerator.Current()" />*/
	,
	$type: new $.ig.Type('Enumerable___Empty__IteratorClass$1', $.ig.Object.prototype.$type, [$.ig.IEnumerable$1.prototype.$type.specialize(0), $.ig.IEnumerable.prototype.$type, $.ig.IEnumerator$1.prototype.$type.specialize(0), $.ig.IEnumerator.prototype.$type, $.ig.IDisposable.prototype.$type])
}, true);

/*<EndType Name="System.IGLinq.Enumerable___Empty__IteratorClass`1" />*/

/*<BeginType Name="System.IGLinq.Enumerable___SelectMany__IteratorClass1`3" />*/

$.ig.util.defType('Enumerable___SelectMany__IteratorClass1$3', 'Object', {
	$tSource: null,
	$tCollection: null,
	$tResult: null,
	__1__state: 0,
	__2__current: null,
	_itemEnumerator: null,
	__item_5_0: null,
	_resultEnumerator: null,
	__result_5_1: null,
	_source: null,
	__3__source: null,
	_collectionSelector: null,
	__3__collectionSelector: null,
	_resultSelector: null,
	__3__resultSelector: null,
	init: function ($tSource, $tCollection, $tResult, _1__state) {
		this.$tSource = $tSource;
		this.$tCollection = $tCollection;
		this.$tResult = $tResult;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$tSource, this.$tCollection, this.$tResult);
		}
		$.ig.Object.prototype.init.call(this);
		this.__1__state = _1__state;
	},
	/*<BeginMethod Name="System.Void System.IGLinq.Enumerable___SelectMany__IteratorClass1`3::_m_Finally0()" />*/
	_m_Finally0: function () {
		this.__1__state = -1;
		if (this._itemEnumerator != null) {
			this._itemEnumerator.dispose();
		}
	}
	/*<EndMethod Name="System.Void System.IGLinq.Enumerable___SelectMany__IteratorClass1`3::_m_Finally0()" />*/
	,
	/*<BeginMethod Name="System.Void System.IGLinq.Enumerable___SelectMany__IteratorClass1`3::_m_Finally1()" />*/
	_m_Finally1: function () {
		this.__1__state = 1;
		if (this._resultEnumerator != null) {
			this._resultEnumerator.dispose();
		}
	}
	/*<EndMethod Name="System.Void System.IGLinq.Enumerable___SelectMany__IteratorClass1`3::_m_Finally1()" />*/
	,
	/*<BeginMethod Name="System.Boolean System.IGLinq.Enumerable___SelectMany__IteratorClass1`3::MoveNext()" />*/
	moveNext: function () {
		var __hasError__ = false;
		try {
			while (this.__1__state >= 0) {
				switch (this.__1__state) {
					case 0:
						this.__1__state = 1;
						this._itemEnumerator = this._source.getEnumerator();
						this.__1__state = 2;
						break;
					case 2:
						this.__1__state = 1;
						if (this._itemEnumerator.moveNext()) {
							this.__item_5_0 = this._itemEnumerator.current();
							this.__1__state = 3;
							this._resultEnumerator = this._collectionSelector(this.__item_5_0).getEnumerator();
							this.__1__state = 4;
							break;
						}
						this._m_Finally0();
						break;
					case 4:
						this.__1__state = 3;
						if (this._resultEnumerator.moveNext()) {
							this.__result_5_1 = this._resultEnumerator.current();
							this.__2__current = this._resultSelector(this.__item_5_0, this.__result_5_1);
							this.__1__state = 4;
							return true;
						}
						this._m_Finally1();
						this.__1__state = 2;
						break;
				}
			}
		}
		catch (e) {
			__hasError__ = true;
			throw e;
		}
		finally {
			if (__hasError__) {
				(this).dispose();
			}
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean System.IGLinq.Enumerable___SelectMany__IteratorClass1`3::MoveNext()" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerator System.IGLinq.Enumerable___SelectMany__IteratorClass1`3::System.Collections.Generic.IEnumerable<TResult>.GetEnumerator()" />*/
	getEnumerator: function () {
		var d__;
		if (this.__1__state == -2) {
			this.__1__state = 0;
			d__ = this;
		} else {
			d__ = new $.ig.Enumerable___SelectMany__IteratorClass1$3(this.$tSource, this.$tCollection, this.$tResult, 0);
		}
		d__._source = this.__3__source;
		d__._collectionSelector = this.__3__collectionSelector;
		d__._resultSelector = this.__3__resultSelector;
		return d__;
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerator System.IGLinq.Enumerable___SelectMany__IteratorClass1`3::System.Collections.Generic.IEnumerable<TResult>.GetEnumerator()" />*/
	,
	/*<BeginMethod Name="System.Void System.IGLinq.Enumerable___SelectMany__IteratorClass1`3::System.Collections.IEnumerator.Reset()" />*/
	reset: function () {
		throw new $.ig.NotSupportedException(1);
	}
	/*<EndMethod Name="System.Void System.IGLinq.Enumerable___SelectMany__IteratorClass1`3::System.Collections.IEnumerator.Reset()" />*/
	,
	/*<BeginMethod Name="System.Void System.IGLinq.Enumerable___SelectMany__IteratorClass1`3::System.IDisposable.Dispose()" />*/
	dispose: function () {
		switch (this.__1__state) {
			case 1:
			case 2:
				this._m_Finally0();
				break;
			case 3:
			case 4:
				try {
					this._m_Finally1();
				}
				finally {
					this._m_Finally0();
				}
				break;
		}
	}
	/*<EndMethod Name="System.Void System.IGLinq.Enumerable___SelectMany__IteratorClass1`3::System.IDisposable.Dispose()" />*/
	,
	/*<BeginProperty Name="System.IGLinq.Enumerable___SelectMany__IteratorClass1.TResult System.IGLinq.Enumerable___SelectMany__IteratorClass1`3::System.Collections.Generic.IEnumerator<TResult>.Current()" />*/
	current: function () {
		return this.__2__current;
	}
	/*<EndProperty Name="System.IGLinq.Enumerable___SelectMany__IteratorClass1.TResult System.IGLinq.Enumerable___SelectMany__IteratorClass1`3::System.Collections.Generic.IEnumerator<TResult>.Current()" />*/
	,
	/*<BeginProperty Name="System.Object System.IGLinq.Enumerable___SelectMany__IteratorClass1`3::System.Collections.IEnumerator.Current()" />*/
	current1: function () {
		return $.ig.util.getBoxIfEnum(this.$tResult, this.__2__current);
	}
	/*<EndProperty Name="System.Object System.IGLinq.Enumerable___SelectMany__IteratorClass1`3::System.Collections.IEnumerator.Current()" />*/
	,
	$type: new $.ig.Type('Enumerable___SelectMany__IteratorClass1$3', $.ig.Object.prototype.$type, [$.ig.IEnumerable$1.prototype.$type.specialize(2), $.ig.IEnumerable.prototype.$type, $.ig.IEnumerator$1.prototype.$type.specialize(2), $.ig.IEnumerator.prototype.$type, $.ig.IDisposable.prototype.$type])
}, true);

/*<EndType Name="System.IGLinq.Enumerable___SelectMany__IteratorClass1`3" />*/

/*<BeginType Name="System.IGLinq.Enumerable___SelectMany__IteratorClass`2" />*/

$.ig.util.defType('Enumerable___SelectMany__IteratorClass$2', 'Object', {
	$tSource: null,
	$tResult: null,
	__1__state: 0,
	__2__current: null,
	_itemEnumerator: null,
	__item_5_0: null,
	_item2Enumerator: null,
	__item2_5_1: null,
	_source: null,
	__3__source: null,
	_selector: null,
	__3__selector: null,
	init: function ($tSource, $tResult, _1__state) {
		this.$tSource = $tSource;
		this.$tResult = $tResult;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$tSource, this.$tResult);
		}
		$.ig.Object.prototype.init.call(this);
		this.__1__state = _1__state;
	},
	/*<BeginMethod Name="System.Void System.IGLinq.Enumerable___SelectMany__IteratorClass`2::_m_Finally0()" />*/
	_m_Finally0: function () {
		this.__1__state = -1;
		if (this._itemEnumerator != null) {
			this._itemEnumerator.dispose();
		}
	}
	/*<EndMethod Name="System.Void System.IGLinq.Enumerable___SelectMany__IteratorClass`2::_m_Finally0()" />*/
	,
	/*<BeginMethod Name="System.Void System.IGLinq.Enumerable___SelectMany__IteratorClass`2::_m_Finally1()" />*/
	_m_Finally1: function () {
		this.__1__state = 1;
		if (this._item2Enumerator != null) {
			this._item2Enumerator.dispose();
		}
	}
	/*<EndMethod Name="System.Void System.IGLinq.Enumerable___SelectMany__IteratorClass`2::_m_Finally1()" />*/
	,
	/*<BeginMethod Name="System.Boolean System.IGLinq.Enumerable___SelectMany__IteratorClass`2::MoveNext()" />*/
	moveNext: function () {
		var __hasError__ = false;
		try {
			while (this.__1__state >= 0) {
				switch (this.__1__state) {
					case 0:
						this.__1__state = 1;
						this._itemEnumerator = this._source.getEnumerator();
						this.__1__state = 2;
						break;
					case 2:
						this.__1__state = 1;
						if (this._itemEnumerator.moveNext()) {
							this.__item_5_0 = this._itemEnumerator.current();
							this.__1__state = 3;
							this._item2Enumerator = this._selector(this.__item_5_0).getEnumerator();
							this.__1__state = 4;
							break;
						}
						this._m_Finally0();
						break;
					case 4:
						this.__1__state = 3;
						if (this._item2Enumerator.moveNext()) {
							this.__item2_5_1 = this._item2Enumerator.current();
							this.__2__current = this.__item2_5_1;
							this.__1__state = 4;
							return true;
						}
						this._m_Finally1();
						this.__1__state = 2;
						break;
				}
			}
		}
		catch (e) {
			__hasError__ = true;
			throw e;
		}
		finally {
			if (__hasError__) {
				(this).dispose();
			}
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean System.IGLinq.Enumerable___SelectMany__IteratorClass`2::MoveNext()" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerator System.IGLinq.Enumerable___SelectMany__IteratorClass`2::System.Collections.Generic.IEnumerable<TResult>.GetEnumerator()" />*/
	getEnumerator: function () {
		var d__;
		if (this.__1__state == -2) {
			this.__1__state = 0;
			d__ = this;
		} else {
			d__ = new $.ig.Enumerable___SelectMany__IteratorClass$2(this.$tSource, this.$tResult, 0);
		}
		d__._source = this.__3__source;
		d__._selector = this.__3__selector;
		return d__;
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerator System.IGLinq.Enumerable___SelectMany__IteratorClass`2::System.Collections.Generic.IEnumerable<TResult>.GetEnumerator()" />*/
	,
	/*<BeginMethod Name="System.Void System.IGLinq.Enumerable___SelectMany__IteratorClass`2::System.Collections.IEnumerator.Reset()" />*/
	reset: function () {
		throw new $.ig.NotSupportedException(1);
	}
	/*<EndMethod Name="System.Void System.IGLinq.Enumerable___SelectMany__IteratorClass`2::System.Collections.IEnumerator.Reset()" />*/
	,
	/*<BeginMethod Name="System.Void System.IGLinq.Enumerable___SelectMany__IteratorClass`2::System.IDisposable.Dispose()" />*/
	dispose: function () {
		switch (this.__1__state) {
			case 1:
			case 2:
				this._m_Finally0();
				break;
			case 3:
			case 4:
				try {
					this._m_Finally1();
				}
				finally {
					this._m_Finally0();
				}
				break;
		}
	}
	/*<EndMethod Name="System.Void System.IGLinq.Enumerable___SelectMany__IteratorClass`2::System.IDisposable.Dispose()" />*/
	,
	/*<BeginProperty Name="System.IGLinq.Enumerable___SelectMany__IteratorClass.TResult System.IGLinq.Enumerable___SelectMany__IteratorClass`2::System.Collections.Generic.IEnumerator<TResult>.Current()" />*/
	current: function () {
		return this.__2__current;
	}
	/*<EndProperty Name="System.IGLinq.Enumerable___SelectMany__IteratorClass.TResult System.IGLinq.Enumerable___SelectMany__IteratorClass`2::System.Collections.Generic.IEnumerator<TResult>.Current()" />*/
	,
	/*<BeginProperty Name="System.Object System.IGLinq.Enumerable___SelectMany__IteratorClass`2::System.Collections.IEnumerator.Current()" />*/
	current1: function () {
		return $.ig.util.getBoxIfEnum(this.$tResult, this.__2__current);
	}
	/*<EndProperty Name="System.Object System.IGLinq.Enumerable___SelectMany__IteratorClass`2::System.Collections.IEnumerator.Current()" />*/
	,
	$type: new $.ig.Type('Enumerable___SelectMany__IteratorClass$2', $.ig.Object.prototype.$type, [$.ig.IEnumerable$1.prototype.$type.specialize(1), $.ig.IEnumerable.prototype.$type, $.ig.IEnumerator$1.prototype.$type.specialize(1), $.ig.IEnumerator.prototype.$type, $.ig.IDisposable.prototype.$type])
}, true);

/*<EndType Name="System.IGLinq.Enumerable___SelectMany__IteratorClass`2" />*/

/*<BeginType Name="System.IGLinq.Enumerable___Select__IteratorClass`2" />*/

$.ig.util.defType('Enumerable___Select__IteratorClass$2', 'Object', {
	$tSource: null,
	$tResult: null,
	__1__state: 0,
	__2__current: null,
	_itemEnumerator: null,
	__item_5_0: null,
	_source: null,
	__3__source: null,
	_selector: null,
	__3__selector: null,
	init: function ($tSource, $tResult, _1__state) {
		this.$tSource = $tSource;
		this.$tResult = $tResult;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$tSource, this.$tResult);
		}
		$.ig.Object.prototype.init.call(this);
		this.__1__state = _1__state;
	},
	/*<BeginMethod Name="System.Void System.IGLinq.Enumerable___Select__IteratorClass`2::_m_Finally0()" />*/
	_m_Finally0: function () {
		this.__1__state = -1;
		if (this._itemEnumerator != null) {
			this._itemEnumerator.dispose();
		}
	}
	/*<EndMethod Name="System.Void System.IGLinq.Enumerable___Select__IteratorClass`2::_m_Finally0()" />*/
	,
	/*<BeginMethod Name="System.Boolean System.IGLinq.Enumerable___Select__IteratorClass`2::MoveNext()" />*/
	moveNext: function () {
		var __hasError__ = false;
		try {
			while (this.__1__state >= 0) {
				switch (this.__1__state) {
					case 0:
						this.__1__state = 1;
						this._itemEnumerator = this._source.getEnumerator();
						this.__1__state = 2;
						break;
					case 2:
						this.__1__state = 1;
						if (this._itemEnumerator.moveNext()) {
							this.__item_5_0 = this._itemEnumerator.current();
							this.__2__current = this._selector(this.__item_5_0);
							this.__1__state = 2;
							return true;
						}
						this._m_Finally0();
						break;
				}
			}
		}
		catch (e) {
			__hasError__ = true;
			throw e;
		}
		finally {
			if (__hasError__) {
				(this).dispose();
			}
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean System.IGLinq.Enumerable___Select__IteratorClass`2::MoveNext()" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerator System.IGLinq.Enumerable___Select__IteratorClass`2::System.Collections.Generic.IEnumerable<TResult>.GetEnumerator()" />*/
	getEnumerator: function () {
		var d__;
		if (this.__1__state == -2) {
			this.__1__state = 0;
			d__ = this;
		} else {
			d__ = new $.ig.Enumerable___Select__IteratorClass$2(this.$tSource, this.$tResult, 0);
		}
		d__._source = this.__3__source;
		d__._selector = this.__3__selector;
		return d__;
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerator System.IGLinq.Enumerable___Select__IteratorClass`2::System.Collections.Generic.IEnumerable<TResult>.GetEnumerator()" />*/
	,
	/*<BeginMethod Name="System.Void System.IGLinq.Enumerable___Select__IteratorClass`2::System.Collections.IEnumerator.Reset()" />*/
	reset: function () {
		throw new $.ig.NotSupportedException(1);
	}
	/*<EndMethod Name="System.Void System.IGLinq.Enumerable___Select__IteratorClass`2::System.Collections.IEnumerator.Reset()" />*/
	,
	/*<BeginMethod Name="System.Void System.IGLinq.Enumerable___Select__IteratorClass`2::System.IDisposable.Dispose()" />*/
	dispose: function () {
		switch (this.__1__state) {
			case 1:
			case 2:
				this._m_Finally0();
				break;
		}
	}
	/*<EndMethod Name="System.Void System.IGLinq.Enumerable___Select__IteratorClass`2::System.IDisposable.Dispose()" />*/
	,
	/*<BeginProperty Name="System.IGLinq.Enumerable___Select__IteratorClass.TResult System.IGLinq.Enumerable___Select__IteratorClass`2::System.Collections.Generic.IEnumerator<TResult>.Current()" />*/
	current: function () {
		return this.__2__current;
	}
	/*<EndProperty Name="System.IGLinq.Enumerable___Select__IteratorClass.TResult System.IGLinq.Enumerable___Select__IteratorClass`2::System.Collections.Generic.IEnumerator<TResult>.Current()" />*/
	,
	/*<BeginProperty Name="System.Object System.IGLinq.Enumerable___Select__IteratorClass`2::System.Collections.IEnumerator.Current()" />*/
	current1: function () {
		return $.ig.util.getBoxIfEnum(this.$tResult, this.__2__current);
	}
	/*<EndProperty Name="System.Object System.IGLinq.Enumerable___Select__IteratorClass`2::System.Collections.IEnumerator.Current()" />*/
	,
	$type: new $.ig.Type('Enumerable___Select__IteratorClass$2', $.ig.Object.prototype.$type, [$.ig.IEnumerable$1.prototype.$type.specialize(1), $.ig.IEnumerable.prototype.$type, $.ig.IEnumerator$1.prototype.$type.specialize(1), $.ig.IEnumerator.prototype.$type, $.ig.IDisposable.prototype.$type])
}, true);

/*<EndType Name="System.IGLinq.Enumerable___Select__IteratorClass`2" />*/

/*<BeginType Name="System.IGLinq.Enumerable___Where__IteratorClass1`1" />*/

$.ig.util.defType('Enumerable___Where__IteratorClass1$1', 'Object', {
	$tSource: null,
	__1__state: 0,
	__2__current: null,
	__index_5_0: 0,
	_itemEnumerator: null,
	__item_5_1: null,
	_source: null,
	__3__source: null,
	_predicate: null,
	__3__predicate: null,
	init: function ($tSource, _1__state) {
		this.$tSource = $tSource;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$tSource);
		}
		$.ig.Object.prototype.init.call(this);
		this.__1__state = _1__state;
	},
	/*<BeginMethod Name="System.Void System.IGLinq.Enumerable___Where__IteratorClass1`1::_m_Finally0()" />*/
	_m_Finally0: function () {
		this.__1__state = -1;
		if (this._itemEnumerator != null) {
			this._itemEnumerator.dispose();
		}
	}
	/*<EndMethod Name="System.Void System.IGLinq.Enumerable___Where__IteratorClass1`1::_m_Finally0()" />*/
	,
	/*<BeginMethod Name="System.Boolean System.IGLinq.Enumerable___Where__IteratorClass1`1::MoveNext()" />*/
	moveNext: function () {
		var __hasError__ = false;
		try {
			while (this.__1__state >= 0) {
				switch (this.__1__state) {
					case 0:
						this.__1__state = -1;
						this.__index_5_0 = 0;
						this.__1__state = 1;
						this._itemEnumerator = this._source.getEnumerator();
						this.__1__state = 2;
						break;
					case 2:
						this.__1__state = 1;
						if (this._itemEnumerator.moveNext()) {
							this.__item_5_1 = this._itemEnumerator.current();
							if (this._predicate(this.__item_5_1, this.__index_5_0)) {
								this.__2__current = this.__item_5_1;
								this.__1__state = 3;
								return true;
							}
							this.__1__state = 3;
							break;
						}
						this._m_Finally0();
						break;
					case 3:
						this.__1__state = 1;
						this.__index_5_0++;
						this.__1__state = 2;
						break;
				}
			}
		}
		catch (e) {
			__hasError__ = true;
			throw e;
		}
		finally {
			if (__hasError__) {
				(this).dispose();
			}
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean System.IGLinq.Enumerable___Where__IteratorClass1`1::MoveNext()" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerator System.IGLinq.Enumerable___Where__IteratorClass1`1::System.Collections.Generic.IEnumerable<TSource>.GetEnumerator()" />*/
	getEnumerator: function () {
		var d__;
		if (this.__1__state == -2) {
			this.__1__state = 0;
			d__ = this;
		} else {
			d__ = new $.ig.Enumerable___Where__IteratorClass1$1(this.$tSource, 0);
		}
		d__._source = this.__3__source;
		d__._predicate = this.__3__predicate;
		return d__;
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerator System.IGLinq.Enumerable___Where__IteratorClass1`1::System.Collections.Generic.IEnumerable<TSource>.GetEnumerator()" />*/
	,
	/*<BeginMethod Name="System.Void System.IGLinq.Enumerable___Where__IteratorClass1`1::System.Collections.IEnumerator.Reset()" />*/
	reset: function () {
		throw new $.ig.NotSupportedException(1);
	}
	/*<EndMethod Name="System.Void System.IGLinq.Enumerable___Where__IteratorClass1`1::System.Collections.IEnumerator.Reset()" />*/
	,
	/*<BeginMethod Name="System.Void System.IGLinq.Enumerable___Where__IteratorClass1`1::System.IDisposable.Dispose()" />*/
	dispose: function () {
		switch (this.__1__state) {
			case 1:
			case 2:
			case 3:
				this._m_Finally0();
				break;
		}
	}
	/*<EndMethod Name="System.Void System.IGLinq.Enumerable___Where__IteratorClass1`1::System.IDisposable.Dispose()" />*/
	,
	/*<BeginProperty Name="System.IGLinq.Enumerable___Where__IteratorClass1.TSource System.IGLinq.Enumerable___Where__IteratorClass1`1::System.Collections.Generic.IEnumerator<TSource>.Current()" />*/
	current: function () {
		return this.__2__current;
	}
	/*<EndProperty Name="System.IGLinq.Enumerable___Where__IteratorClass1.TSource System.IGLinq.Enumerable___Where__IteratorClass1`1::System.Collections.Generic.IEnumerator<TSource>.Current()" />*/
	,
	/*<BeginProperty Name="System.Object System.IGLinq.Enumerable___Where__IteratorClass1`1::System.Collections.IEnumerator.Current()" />*/
	current1: function () {
		return $.ig.util.getBoxIfEnum(this.$tSource, this.__2__current);
	}
	/*<EndProperty Name="System.Object System.IGLinq.Enumerable___Where__IteratorClass1`1::System.Collections.IEnumerator.Current()" />*/
	,
	$type: new $.ig.Type('Enumerable___Where__IteratorClass1$1', $.ig.Object.prototype.$type, [$.ig.IEnumerable$1.prototype.$type.specialize(0), $.ig.IEnumerable.prototype.$type, $.ig.IEnumerator$1.prototype.$type.specialize(0), $.ig.IEnumerator.prototype.$type, $.ig.IDisposable.prototype.$type])
}, true);

/*<EndType Name="System.IGLinq.Enumerable___Where__IteratorClass1`1" />*/

/*<BeginType Name="System.IGLinq.Enumerable___Where__IteratorClass`1" />*/

$.ig.util.defType('Enumerable___Where__IteratorClass$1', 'Object', {
	$tSource: null,
	__1__state: 0,
	__2__current: null,
	_itemEnumerator: null,
	__item_5_0: null,
	_source: null,
	__3__source: null,
	_predicate: null,
	__3__predicate: null,
	init: function ($tSource, _1__state) {
		this.$tSource = $tSource;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$tSource);
		}
		$.ig.Object.prototype.init.call(this);
		this.__1__state = _1__state;
	},
	/*<BeginMethod Name="System.Void System.IGLinq.Enumerable___Where__IteratorClass`1::_m_Finally0()" />*/
	_m_Finally0: function () {
		this.__1__state = -1;
		if (this._itemEnumerator != null) {
			this._itemEnumerator.dispose();
		}
	}
	/*<EndMethod Name="System.Void System.IGLinq.Enumerable___Where__IteratorClass`1::_m_Finally0()" />*/
	,
	/*<BeginMethod Name="System.Boolean System.IGLinq.Enumerable___Where__IteratorClass`1::MoveNext()" />*/
	moveNext: function () {
		var __hasError__ = false;
		try {
			while (this.__1__state >= 0) {
				switch (this.__1__state) {
					case 0:
						this.__1__state = 1;
						this._itemEnumerator = this._source.getEnumerator();
						this.__1__state = 2;
						break;
					case 2:
						this.__1__state = 1;
						if (this._itemEnumerator.moveNext()) {
							this.__item_5_0 = this._itemEnumerator.current();
							if (this._predicate(this.__item_5_0)) {
								this.__2__current = this.__item_5_0;
								this.__1__state = 2;
								return true;
							}
							this.__1__state = 2;
							break;
						}
						this._m_Finally0();
						break;
				}
			}
		}
		catch (e) {
			__hasError__ = true;
			throw e;
		}
		finally {
			if (__hasError__) {
				(this).dispose();
			}
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean System.IGLinq.Enumerable___Where__IteratorClass`1::MoveNext()" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerator System.IGLinq.Enumerable___Where__IteratorClass`1::System.Collections.Generic.IEnumerable<TSource>.GetEnumerator()" />*/
	getEnumerator: function () {
		var d__;
		if (this.__1__state == -2) {
			this.__1__state = 0;
			d__ = this;
		} else {
			d__ = new $.ig.Enumerable___Where__IteratorClass$1(this.$tSource, 0);
		}
		d__._source = this.__3__source;
		d__._predicate = this.__3__predicate;
		return d__;
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerator System.IGLinq.Enumerable___Where__IteratorClass`1::System.Collections.Generic.IEnumerable<TSource>.GetEnumerator()" />*/
	,
	/*<BeginMethod Name="System.Void System.IGLinq.Enumerable___Where__IteratorClass`1::System.Collections.IEnumerator.Reset()" />*/
	reset: function () {
		throw new $.ig.NotSupportedException(1);
	}
	/*<EndMethod Name="System.Void System.IGLinq.Enumerable___Where__IteratorClass`1::System.Collections.IEnumerator.Reset()" />*/
	,
	/*<BeginMethod Name="System.Void System.IGLinq.Enumerable___Where__IteratorClass`1::System.IDisposable.Dispose()" />*/
	dispose: function () {
		switch (this.__1__state) {
			case 1:
			case 2:
				this._m_Finally0();
				break;
		}
	}
	/*<EndMethod Name="System.Void System.IGLinq.Enumerable___Where__IteratorClass`1::System.IDisposable.Dispose()" />*/
	,
	/*<BeginProperty Name="System.IGLinq.Enumerable___Where__IteratorClass.TSource System.IGLinq.Enumerable___Where__IteratorClass`1::System.Collections.Generic.IEnumerator<TSource>.Current()" />*/
	current: function () {
		return this.__2__current;
	}
	/*<EndProperty Name="System.IGLinq.Enumerable___Where__IteratorClass.TSource System.IGLinq.Enumerable___Where__IteratorClass`1::System.Collections.Generic.IEnumerator<TSource>.Current()" />*/
	,
	/*<BeginProperty Name="System.Object System.IGLinq.Enumerable___Where__IteratorClass`1::System.Collections.IEnumerator.Current()" />*/
	current1: function () {
		return $.ig.util.getBoxIfEnum(this.$tSource, this.__2__current);
	}
	/*<EndProperty Name="System.Object System.IGLinq.Enumerable___Where__IteratorClass`1::System.Collections.IEnumerator.Current()" />*/
	,
	$type: new $.ig.Type('Enumerable___Where__IteratorClass$1', $.ig.Object.prototype.$type, [$.ig.IEnumerable$1.prototype.$type.specialize(0), $.ig.IEnumerable.prototype.$type, $.ig.IEnumerator$1.prototype.$type.specialize(0), $.ig.IEnumerator.prototype.$type, $.ig.IDisposable.prototype.$type])
}, true);

/*<EndType Name="System.IGLinq.Enumerable___Where__IteratorClass`1" />*/

/*<BeginType Name="System.Collections.BitArray___GetEnumerator__IteratorClass" />*/

$.ig.util.defType('BitArray___GetEnumerator__IteratorClass', 'Object', {
	__1__state: 0,
	__2__current: null,
	__i_5_0: 0,
	__4__this: null,
	init: function (_1__state) {
		$.ig.Object.prototype.init.call(this);
		this.__1__state = _1__state;
	},
	/*<BeginMethod Name="System.Boolean System.Collections.BitArray___GetEnumerator__IteratorClass::MoveNext()" />*/
	moveNext: function () {
		while (this.__1__state >= 0) {
			switch (this.__1__state) {
				case 0:
					this.__1__state = -1;
					this.__i_5_0 = 0;
					this.__1__state = 1;
					break;
				case 1:
					this.__1__state = -1;
					if (this.__i_5_0 < this.__4__this.__count) {
						this.__2__current = this.__4__this.item(this.__i_5_0);
						this.__1__state = 2;
						return true;
					}
					break;
				case 2:
					this.__1__state = -1;
					this.__i_5_0++;
					this.__1__state = 1;
					break;
			}
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean System.Collections.BitArray___GetEnumerator__IteratorClass::MoveNext()" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.BitArray___GetEnumerator__IteratorClass::System.Collections.IEnumerator.Reset()" />*/
	reset: function () {
		throw new $.ig.NotSupportedException(1);
	}
	/*<EndMethod Name="System.Void System.Collections.BitArray___GetEnumerator__IteratorClass::System.Collections.IEnumerator.Reset()" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.BitArray___GetEnumerator__IteratorClass::System.IDisposable.Dispose()" />*/
	dispose: function () {
	}
	/*<EndMethod Name="System.Void System.Collections.BitArray___GetEnumerator__IteratorClass::System.IDisposable.Dispose()" />*/
	,
	/*<BeginProperty Name="System.Object System.Collections.BitArray___GetEnumerator__IteratorClass::System.Collections.Generic.IEnumerator<System.Object>.Current()" />*/
	current: function () {
		return this.__2__current;
	}
	/*<EndProperty Name="System.Object System.Collections.BitArray___GetEnumerator__IteratorClass::System.Collections.Generic.IEnumerator<System.Object>.Current()" />*/
	,
	/*<BeginProperty Name="System.Object System.Collections.BitArray___GetEnumerator__IteratorClass::System.Collections.IEnumerator.Current()" />*/
	current1: function () {
		return this.__2__current;
	}
	/*<EndProperty Name="System.Object System.Collections.BitArray___GetEnumerator__IteratorClass::System.Collections.IEnumerator.Current()" />*/
	,
	$type: new $.ig.Type('BitArray___GetEnumerator__IteratorClass', $.ig.Object.prototype.$type, [$.ig.IEnumerator$1.prototype.$type.specialize($.ig.Object.prototype.$type), $.ig.IEnumerator.prototype.$type, $.ig.IDisposable.prototype.$type])
}, true);

/*<EndType Name="System.Collections.BitArray___GetEnumerator__IteratorClass" />*/

/*<BeginType Name="System.IGLinq.Enumerable___Range__IteratorClass" />*/

$.ig.util.defType('Enumerable___Range__IteratorClass', 'Object', {
	__1__state: 0,
	__2__current: 0,
	__i_5_0: 0,
	_startValue: 0,
	__3__startValue: 0,
	_count: 0,
	__3__count: 0,
	init: function (_1__state) {
		$.ig.Object.prototype.init.call(this);
		this.__1__state = _1__state;
	},
	/*<BeginMethod Name="System.Boolean System.IGLinq.Enumerable___Range__IteratorClass::MoveNext()" />*/
	moveNext: function () {
		while (this.__1__state >= 0) {
			switch (this.__1__state) {
				case 0:
					this.__1__state = -1;
					this.__i_5_0 = this._startValue;
					this.__1__state = 1;
					break;
				case 1:
					this.__1__state = -1;
					if (this.__i_5_0 < this._count) {
						this.__2__current = this.__i_5_0;
						this.__1__state = 2;
						return true;
					}
					break;
				case 2:
					this.__1__state = -1;
					this.__i_5_0++;
					this.__1__state = 1;
					break;
			}
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean System.IGLinq.Enumerable___Range__IteratorClass::MoveNext()" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerator System.IGLinq.Enumerable___Range__IteratorClass::System.Collections.Generic.IEnumerable<System.Int32>.GetEnumerator()" />*/
	getEnumerator: function () {
		var d__;
		if (this.__1__state == -2) {
			this.__1__state = 0;
			d__ = this;
		} else {
			d__ = new $.ig.Enumerable___Range__IteratorClass(0);
		}
		d__._startValue = this.__3__startValue;
		d__._count = this.__3__count;
		return d__;
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerator System.IGLinq.Enumerable___Range__IteratorClass::System.Collections.Generic.IEnumerable<System.Int32>.GetEnumerator()" />*/
	,
	/*<BeginMethod Name="System.Void System.IGLinq.Enumerable___Range__IteratorClass::System.Collections.IEnumerator.Reset()" />*/
	reset: function () {
		throw new $.ig.NotSupportedException(1);
	}
	/*<EndMethod Name="System.Void System.IGLinq.Enumerable___Range__IteratorClass::System.Collections.IEnumerator.Reset()" />*/
	,
	/*<BeginMethod Name="System.Void System.IGLinq.Enumerable___Range__IteratorClass::System.IDisposable.Dispose()" />*/
	dispose: function () {
	}
	/*<EndMethod Name="System.Void System.IGLinq.Enumerable___Range__IteratorClass::System.IDisposable.Dispose()" />*/
	,
	/*<BeginProperty Name="System.Int32 System.IGLinq.Enumerable___Range__IteratorClass::System.Collections.Generic.IEnumerator<System.Int32>.Current()" />*/
	current: function () {
		return this.__2__current;
	}
	/*<EndProperty Name="System.Int32 System.IGLinq.Enumerable___Range__IteratorClass::System.Collections.Generic.IEnumerator<System.Int32>.Current()" />*/
	,
	/*<BeginProperty Name="System.Object System.IGLinq.Enumerable___Range__IteratorClass::System.Collections.IEnumerator.Current()" />*/
	current1: function () {
		return this.__2__current;
	}
	/*<EndProperty Name="System.Object System.IGLinq.Enumerable___Range__IteratorClass::System.Collections.IEnumerator.Current()" />*/
	,
	$type: new $.ig.Type('Enumerable___Range__IteratorClass', $.ig.Object.prototype.$type, [$.ig.IEnumerable$1.prototype.$type.specialize($.ig.Number.prototype.$type), $.ig.IEnumerable.prototype.$type, $.ig.IEnumerator$1.prototype.$type.specialize($.ig.Number.prototype.$type), $.ig.IEnumerator.prototype.$type, $.ig.IDisposable.prototype.$type])
}, true);

/*<EndType Name="System.IGLinq.Enumerable___Range__IteratorClass" />*/

/*<BeginType Name="System.IGLinq.Enumerable___Concat__IteratorClass`1" />*/

$.ig.util.defType('Enumerable___Concat__IteratorClass$1', 'Object', {
	$tSource: null,
	__1__state: 0,
	__2__current: null,
	_itemEnumerator: null,
	__item_5_0: null,
	_itemEnumerator0: null,
	__item_5_1: null,
	_source1: null,
	__3__source1: null,
	_source2: null,
	__3__source2: null,
	init: function ($tSource, _1__state) {
		this.$tSource = $tSource;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$tSource);
		}
		$.ig.Object.prototype.init.call(this);
		this.__1__state = _1__state;
	},
	/*<BeginMethod Name="System.Void System.IGLinq.Enumerable___Concat__IteratorClass`1::_m_Finally0()" />*/
	_m_Finally0: function () {
		this.__1__state = -1;
		if (this._itemEnumerator != null) {
			this._itemEnumerator.dispose();
		}
	}
	/*<EndMethod Name="System.Void System.IGLinq.Enumerable___Concat__IteratorClass`1::_m_Finally0()" />*/
	,
	/*<BeginMethod Name="System.Void System.IGLinq.Enumerable___Concat__IteratorClass`1::_m_Finally1()" />*/
	_m_Finally1: function () {
		this.__1__state = -1;
		if (this._itemEnumerator0 != null) {
			this._itemEnumerator0.dispose();
		}
	}
	/*<EndMethod Name="System.Void System.IGLinq.Enumerable___Concat__IteratorClass`1::_m_Finally1()" />*/
	,
	/*<BeginMethod Name="System.Boolean System.IGLinq.Enumerable___Concat__IteratorClass`1::MoveNext()" />*/
	moveNext: function () {
		var __hasError__ = false;
		try {
			while (this.__1__state >= 0) {
				switch (this.__1__state) {
					case 0:
						this.__1__state = 1;
						this._itemEnumerator = this._source1.getEnumerator();
						this.__1__state = 2;
						break;
					case 2:
						this.__1__state = 1;
						if (this._itemEnumerator.moveNext()) {
							this.__item_5_0 = this._itemEnumerator.current();
							this.__2__current = this.__item_5_0;
							this.__1__state = 2;
							return true;
						}
						this._m_Finally0();
						this.__1__state = 3;
						this._itemEnumerator0 = this._source2.getEnumerator();
						this.__1__state = 4;
						break;
					case 4:
						this.__1__state = 3;
						if (this._itemEnumerator0.moveNext()) {
							this.__item_5_1 = this._itemEnumerator0.current();
							this.__2__current = this.__item_5_1;
							this.__1__state = 4;
							return true;
						}
						this._m_Finally1();
						break;
				}
			}
		}
		catch (e) {
			__hasError__ = true;
			throw e;
		}
		finally {
			if (__hasError__) {
				(this).dispose();
			}
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean System.IGLinq.Enumerable___Concat__IteratorClass`1::MoveNext()" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerator System.IGLinq.Enumerable___Concat__IteratorClass`1::System.Collections.Generic.IEnumerable<TSource>.GetEnumerator()" />*/
	getEnumerator: function () {
		var d__;
		if (this.__1__state == -2) {
			this.__1__state = 0;
			d__ = this;
		} else {
			d__ = new $.ig.Enumerable___Concat__IteratorClass$1(this.$tSource, 0);
		}
		d__._source1 = this.__3__source1;
		d__._source2 = this.__3__source2;
		return d__;
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerator System.IGLinq.Enumerable___Concat__IteratorClass`1::System.Collections.Generic.IEnumerable<TSource>.GetEnumerator()" />*/
	,
	/*<BeginMethod Name="System.Void System.IGLinq.Enumerable___Concat__IteratorClass`1::System.Collections.IEnumerator.Reset()" />*/
	reset: function () {
		throw new $.ig.NotSupportedException(1);
	}
	/*<EndMethod Name="System.Void System.IGLinq.Enumerable___Concat__IteratorClass`1::System.Collections.IEnumerator.Reset()" />*/
	,
	/*<BeginMethod Name="System.Void System.IGLinq.Enumerable___Concat__IteratorClass`1::System.IDisposable.Dispose()" />*/
	dispose: function () {
		switch (this.__1__state) {
			case 1:
			case 2:
				this._m_Finally0();
				break;
			case 3:
			case 4:
				this._m_Finally1();
				break;
		}
	}
	/*<EndMethod Name="System.Void System.IGLinq.Enumerable___Concat__IteratorClass`1::System.IDisposable.Dispose()" />*/
	,
	/*<BeginProperty Name="System.IGLinq.Enumerable___Concat__IteratorClass.TSource System.IGLinq.Enumerable___Concat__IteratorClass`1::System.Collections.Generic.IEnumerator<TSource>.Current()" />*/
	current: function () {
		return this.__2__current;
	}
	/*<EndProperty Name="System.IGLinq.Enumerable___Concat__IteratorClass.TSource System.IGLinq.Enumerable___Concat__IteratorClass`1::System.Collections.Generic.IEnumerator<TSource>.Current()" />*/
	,
	/*<BeginProperty Name="System.Object System.IGLinq.Enumerable___Concat__IteratorClass`1::System.Collections.IEnumerator.Current()" />*/
	current1: function () {
		return $.ig.util.getBoxIfEnum(this.$tSource, this.__2__current);
	}
	/*<EndProperty Name="System.Object System.IGLinq.Enumerable___Concat__IteratorClass`1::System.Collections.IEnumerator.Current()" />*/
	,
	$type: new $.ig.Type('Enumerable___Concat__IteratorClass$1', $.ig.Object.prototype.$type, [$.ig.IEnumerable$1.prototype.$type.specialize(0), $.ig.IEnumerable.prototype.$type, $.ig.IEnumerator$1.prototype.$type.specialize(0), $.ig.IEnumerator.prototype.$type, $.ig.IDisposable.prototype.$type])
}, true);

/*<EndType Name="System.IGLinq.Enumerable___Concat__IteratorClass`1" />*/


/*<BeginFooter/>*/
}));// REMOVE_FROM_COMBINED_FILES
/*<EndFooter/>*/

