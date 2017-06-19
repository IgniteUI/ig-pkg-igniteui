/*!@license
* Infragistics.Web.ClientUI infragistics.undo.js 17.1.20171.1012
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
(function ($) {
	/*!@license
* Infragistics.Web.ClientUI infragistics.undo.js resources 17.1.20171.1012
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global define, jQuery */

	$.ig = $.ig || {};
	$.ig.undo = $.ig.undo || {};
	$.ig.undo.locale = $.ig.undo.locale || {};
	$.extend($.ig.undo.locale, {

		getString: function(name) {
			var str = this[name];
			if (!str) return null;
			if (arguments.length === 1) return str;
			return $.ig.util.stringFormat1(str, Array.prototype.slice.call(arguments, 1));
		},
		AddItemDescription: "Add '{1}'",
		AddItemDescriptionDetailed: "Add '{1}'",
		AddRangeDescription: "Add {1} {2}(s)",
		AddRangeDescriptionDetailed: "Add {1} {2}(s)",
		FallbackTransactionDescription: "",
		LE_AddOpenTransaction: "Cannot add an UndoTransaction that has not been opened or is still open.",
		LE_AddTransactionDirect: "UndoTransaction cannot be added. The RootTransaction is automatically added upon Commit.",
		LE_AddUnitWhileTransactionOpen: "Cannot add an UndoUnit while the transaction contains a nested open transaction '{0}'.",
		LE_ArgumentIsNegative: "The '{0}' must be 0 or greater. Actual value: '{1}'",
		LE_CannotExecuteOpenTransaction: "Cannot invoke Execute while the transaction '{0}' is open.",
		LE_ChangeHistoryInMerge: "Cannot alter the Undo/Redo history while a Merge is being invoked",
		LE_ChangeHistoryInRemoveAll: "Cannot alter the Undo/Redo history while the RemoveAll is being invoked.",
		LE_ChildTransactionNotInUnits: "The specified child transaction '{0}' is not part of the Units of this transaction.",
		LE_ClosingOtherTransaction: "The specified transaction '{0}' is not the currently open transaction '{1}'.",
		LE_EndTransactionWhileSuspended: "Cannot close a transaction while the UndoManager is suspended.",
		LE_EnumEnded: "The enumerator was completed.",
		LE_EnumFailedVersion: "The collection was modified after the enumerator was started.",
		LE_EnumNotStarted: "The enumerator was not started. Call MoveNext.",
		LE_FactoryNullTransaction: "The UndoUnitFactory returned a null UndoTransaction.",
		LE_HasOpenTransaction: "A transaction has already been opened.",
		LE_HistoryItemNotInCurrentHistory: "The UndoHistoryItem does not exist within the associated Undo or Redo history in the UndoManager.",
		LE_InvalidTransactionOwner: "The specified transaction's Owner is not this object.",
		LE_NeedAddRemoveAction: "The specified action must be 'Add' or 'Remove'.",
		LE_NewTransactionWhileSuspended: "A transaction cannot be started while the UndoManager is suspended.",
		LE_RangeCollectionAction: "Range actions are not supported.",
		LE_ReferenceNotRegistered: "The specified reference '{0}' has not been registered with an UndoManager instance. Use the RegisterReference method to register the reference with an UndoManager or pass null as the 'reference' to use the UndoManager.Current thread static/shared instance.",
		LE_ReferenceRegisteredToOther: "The specified reference '{0}' is registered with a different UndoManager instance.",
		LE_RemoveAllFailedVersion: "The collection was modified during the call to RemoveAll.",
		LE_ResetCollectionAction: "Reset action is not supported.",
		LE_TargetCollectionIsReadOnly: "The specified collection '{0}' cannot be read-only.",
		LE_TransactionAlreadyOpened: "The transaction has already been opened.",
		LE_TransactionClosed: "The transaction cannot be modified once it has been closed.",
		LE_TransactionNotOpened: "The specified transaction '{0}' is not open.",
		LE_TransactionNotStarted: "The transaction cannot be modified until it has been started.",
		LE_UndoManagerAsReference: "An 'UndoManager' instance cannot be a reference.",
		LE_UndoRedoInRollback: "Cannot perform an Undo/Redo while a Rollback is in progress.",
		LE_UndoRedoInTransaction: "Cannot perform an undo/redo while a transaction is opened.",
		LE_UndoRedoInUndoRedo: "Cannot perform an Undo/Redo while an Undo/Redo is in progress.",
		LE_UndoRedoWhileSuspended: "Cannot perform an Undo/Redo while the UndoManager has been suspended.",
		MoveItemDescription: "Move '{1}'",
		MoveItemDescriptionDetailed: "Move '{1}' from '{2}' to '{3}'",
		PropertyChangeDescription: "Change '{0}' on '{1}'",
		PropertyChangeDescriptionDetailed: "Change '{0}' on '{1}' to '{3}'",
		ReinitializeCollectionDescription: "Batch '{2}' Change",
		ReinitializeCollectionDescriptionDetailed: "Batch '{2}' Change",
		RemoveItemDescription: "Remove '{1}'",
		RemoveItemDescriptionDetailed: "Remove '{1}'",
		RemoveRangeDescription: "Remove {1} {2}(s)",
		RemoveRangeDescriptionDetailed: "Remove {1} {2}(s)",
		ReplaceItemDescription: "Replace '{1}'",
		ReplaceItemDescriptionDetailed: "Replace '{1}' with '{2}'"
	});


/*<EndHeader/>*/
$.ig = $.ig || {};
var $$t = {};
$.ig.globalDefs = $.ig.globalDefs || {};
$.ig.globalDefs.$$ak = $$t;
$$0 = $.ig.globalDefs.$$0;
$$4 = $.ig.globalDefs.$$4;
$$6 = $.ig.globalDefs.$$6;
$.ig.$currDefinitions = $$t;
$.ig.util.bulkDefine([
"ITypedPropertyChangeListener$2:f",
"IPropertyChangeListener:g",
"ITypedSupportPropertyChangeNotifications$2:h",
"ISupportPropertyChangeNotifications:i",
"IValueChangeListener$1:j",
"IUndoTransactionOwner:ac",
"UndoExecuteContext:ad",
"UndoHistoryItem:ae",
"UndoManager:af",
"UndoMergeContext:ah",
"CustomUndoUnit:ai",
"UndoTransaction:aj",
"UndoUnit:ak"]);
/*<BeginType Name="Infragistics.Undo.UndoManager_BoolProperties" />*/

$.ig.util.defEnum('UndoManager_BoolProperties', true, false, {
	CanUndo: 1,
	CanRedo: 2,
	IsPerformingRedo: 4,
	IsPerformingUndo: 8,
	ShouldPreventMerge: 16,
	AllowMerging: 32,
	IsMerging: 64,
	IsPerformingRollback: 128,
	IsPerformingRemoveAll: 256
});

/*<EndType Name="Infragistics.Undo.UndoManager_BoolProperties" />*/

/*<BeginType Name="Infragistics.Undo.UndoMergeAction" />*/

$.ig.util.defEnum('UndoMergeAction', false, false, {
	NotMerged: 0,
	Merged: 1,
	MergedRemoveUnit: 2
});

/*<EndType Name="Infragistics.Undo.UndoMergeAction" />*/

/*<BeginType Name="Infragistics.Undo.UndoTransactionCloseAction" />*/

$.ig.util.defEnum('UndoTransactionCloseAction', false, false, {
	Commit: 0,
	Rollback: 1,
	Cancel: 2
});

/*<EndType Name="Infragistics.Undo.UndoTransactionCloseAction" />*/

/*<BeginType Name="Infragistics.Undo.UndoExecuteReason" />*/

$.ig.util.defEnum('UndoExecuteReason', false, false, {
	Undo: 0,
	Redo: 1,
	Rollback: 2
});

/*<EndType Name="Infragistics.Undo.UndoExecuteReason" />*/

/*<BeginType Name="Infragistics.Undo.UndoHistoryItemType" />*/

$.ig.util.defEnum('UndoHistoryItemType', false, false, {
	Undo: 0,
	Redo: 1
});

/*<EndType Name="Infragistics.Undo.UndoHistoryItemType" />*/

/*<BeginType Name="AssemblyRef" />*/

$.ig.util.defType('AssemblyRef', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	$type: new $.ig.Type('AssemblyRef', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="AssemblyRef" />*/

/*<BeginType Name="SR" />*/

$.ig.util.defType('SR', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.String SR::GetString(System.String)" />*/
	getString: function (resourceName) {
		return resourceName;
	}
	/*<EndMethod Name="System.String SR::GetString(System.String)" />*/
	,
	/*<BeginMethod Name="System.String SR::GetString(System.String, )" />*/
	getString1: function (resourceName, args) {
		return resourceName;
	}
	/*<EndMethod Name="System.String SR::GetString(System.String, )" />*/
	,
	$type: new $.ig.Type('SR', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="SR" />*/

/*<BeginType Name="Infragistics.CoreUtilities" />*/

$.ig.util.defType('CoreUtilities', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Collections.Generic.IList Infragistics.CoreUtilities::CreateObservableTypedList`1(System.Collections.IList)" />*/
	createObservableTypedList$1: function ($t, list) {
		return new $.ig.CoreUtilities_ObservableTypedList$1($t, list);
	}
	/*<EndMethod Name="System.Collections.Generic.IList Infragistics.CoreUtilities::CreateObservableTypedList`1(System.Collections.IList)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.CoreUtilities::AreClose(System.Double, System.Double)" />*/
	areClose: function (value1, value2) {
		if (value1 == value2) {
			return true;
		}
		return Math.abs(value1 - value2) < 1E-10;
	}
	/*<EndMethod Name="System.Boolean Infragistics.CoreUtilities::AreClose(System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.CoreUtilities::LessThan(System.Double, System.Double)" />*/
	lessThan: function (x, y) {
		return x < y && !$.ig.CoreUtilities.prototype.areClose(x, y);
	}
	/*<EndMethod Name="System.Boolean Infragistics.CoreUtilities::LessThan(System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.CoreUtilities::GreaterThan(System.Double, System.Double)" />*/
	greaterThan: function (x, y) {
		return x > y && !$.ig.CoreUtilities.prototype.areClose(x, y);
	}
	/*<EndMethod Name="System.Boolean Infragistics.CoreUtilities::GreaterThan(System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.CoreUtilities::LessThanOrClose(System.Double, System.Double)" />*/
	lessThanOrClose: function (x, y) {
		return x <= y || $.ig.CoreUtilities.prototype.areClose(x, y);
	}
	/*<EndMethod Name="System.Boolean Infragistics.CoreUtilities::LessThanOrClose(System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.CoreUtilities::GreaterThanOrClose(System.Double, System.Double)" />*/
	greaterThanOrClose: function (x, y) {
		return x >= y || $.ig.CoreUtilities.prototype.areClose(x, y);
	}
	/*<EndMethod Name="System.Boolean Infragistics.CoreUtilities::GreaterThanOrClose(System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.CoreUtilities::AreEqual`1(System.Collections.Generic.IList, System.Collections.Generic.IList, System.Collections.Generic.IEqualityComparer)" />*/
	areEqual$1: function ($t, items1, items2, comparer) {
		if (items1 == items2) {
			return true;
		}
		if (items1 == null || items2 == null) {
			return false;
		}
		if (items1.count() != items2.count()) {
			return false;
		}
		if (comparer == null) {
			comparer = $.ig.EqualityComparer$1.prototype.defaultEqualityComparerValue($t);
		}
		for (var i = 0, count = items1.count(); i < count; i++) {
			if (!comparer.equalsC(items1.item(i), items2.item(i))) {
				return false;
			}
		}
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.CoreUtilities::AreEqual`1(System.Collections.Generic.IList, System.Collections.Generic.IList, System.Collections.Generic.IEqualityComparer)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.CoreUtilities::BinarySearch`1(System.Collections.Generic.IList, Infragistics.CoreUtilities.T, System.Collections.Generic.IComparer, System.Boolean)" />*/
	binarySearch$1: function ($t, list, item, comparer, ignoreItem) {
		if (comparer == null) {
			comparer = $.ig.Comparer$1.prototype.defaultComparerValue($t);
		}
		var si = 0, ei = list.count() - 1;
		var mi = 0;
		var equalComparer = !ignoreItem ? null : $.ig.EqualityComparer$1.prototype.defaultEqualityComparerValue($t);
		while (si <= ei) {
			mi = $.ig.intDivide((si + ei), 2);
			var tempItem = list.item(mi);
			if (null != equalComparer && equalComparer.equalsC(item, tempItem)) {
				if (mi > si) {
					tempItem = list.item(--mi);
				} else if (mi < ei) {
					tempItem = list.item(++mi);
				} else {
					return mi;
				}
			}
			var result = comparer.compare(tempItem, item);
			if (result > 0) {
				ei = mi - 1;
			} else if (result < 0) {
				si = mi + 1;
			} else {
				return mi;
			}
		}
		if (null != equalComparer && si < list.count() - 1 && equalComparer.equalsC(item, list.item(si))) {
			return si;
		}
		return ~si;
	}
	/*<EndMethod Name="System.Int32 Infragistics.CoreUtilities::BinarySearch`1(System.Collections.Generic.IList, Infragistics.CoreUtilities.T, System.Collections.Generic.IComparer, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.CoreUtilities::BinarySearch`2(System.Collections.Generic.IList, System.Func, Infragistics.CoreUtilities.TComparison)" />*/
	binarySearch$2: function ($tItem, $tComparison, items, comparer, value) {
		var si = 0, ei = items.count() - 1;
		var mi = 0;
		while (si <= ei) {
			mi = $.ig.intDivide((si + ei), 2);
			var item = items.item(mi);
			var result = comparer(item, value);
			if (result > 0) {
				ei = mi - 1;
			} else if (result < 0) {
				si = mi + 1;
			} else {
				return mi;
			}
		}
		return ~si;
	}
	/*<EndMethod Name="System.Int32 Infragistics.CoreUtilities::BinarySearch`2(System.Collections.Generic.IList, System.Func, Infragistics.CoreUtilities.TComparison)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.CoreUtilities::Clamp(System.Double, System.Double, System.Double)" />*/
	clamp: function (value, min, max) {
		if (value < min) {
			return min;
		} else if (value > max) {
			return max;
		}
		return value;
	}
	/*<EndMethod Name="System.Double Infragistics.CoreUtilities::Clamp(System.Double, System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CoreUtilities::CopyTo`1(System.Collections.Generic.IEnumerable, , System.Int32)" />*/
	copyTo$1: function ($t, source, dest, destStartIndex) {
		var sourceColl = $.ig.util.cast($.ig.ICollection$1.prototype.$type.specialize($t), source);
		if (null != sourceColl) {
			sourceColl.copyTo(dest, destStartIndex);
		} else {
			var en = source.getEnumerator();
			while (en.moveNext()) {
				var ii = en.current();
				dest[destStartIndex++] = ii;
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.CoreUtilities::CopyTo`1(System.Collections.Generic.IEnumerable, , System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CoreUtilities::CopyTo(System.Collections.IEnumerable, System.Array, System.Int32)" />*/
	copyTo: function (source, dest, destStartIndex) {
		var en = source.getEnumerator();
		while (en.moveNext()) {
			var ii = en.current();
			dest[destStartIndex++] = ii;
		}
	}
	/*<EndMethod Name="System.Void Infragistics.CoreUtilities::CopyTo(System.Collections.IEnumerable, System.Array, System.Int32)" />*/
	,
	/*<BeginMethod Name="Infragistics.CoreUtilities.T Infragistics.CoreUtilities::GetFirstItem`1(System.Collections.Generic.IEnumerable)" />*/
	getFirstItem$1: function ($t, e) {
		if (null != e) {
			var en = e.getEnumerator();
			while (en.moveNext()) {
				var i = en.current();
				return i;
			}
		}
		return $.ig.util.getDefaultValue($t);
	}
	/*<EndMethod Name="Infragistics.CoreUtilities.T Infragistics.CoreUtilities::GetFirstItem`1(System.Collections.Generic.IEnumerable)" />*/
	,
	/*<BeginMethod Name="Infragistics.CoreUtilities.T Infragistics.CoreUtilities::GetFirstItem`1(System.Collections.IEnumerable, System.Boolean)" />*/
	getFirstItem$11: function ($t, e, optimized) {
		if (null != e) {
			if (optimized) {
				var listTyped = $.ig.util.cast($.ig.IList$1.prototype.$type.specialize($t), e);
				if (null != listTyped) {
					return listTyped.count() > 0 ? listTyped.item(0) : $.ig.util.getDefaultValue($t);
				}
				var list = $.ig.util.cast($.ig.IList.prototype.$type, e);
				if (null != list) {
					return list.count() > 0 ? $.ig.util.castObjTo$t($t, list.item(0)) : $.ig.util.getDefaultValue($t);
				}
			}
			var en = e.getEnumerator();
			while (en.moveNext()) {
				var i = en.current();
				return i;
			}
		}
		return $.ig.util.getDefaultValue($t);
	}
	/*<EndMethod Name="Infragistics.CoreUtilities.T Infragistics.CoreUtilities::GetFirstItem`1(System.Collections.IEnumerable, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.List Infragistics.CoreUtilities::GetEnumValues`1()" />*/
	getEnumValues$1: function ($t) {
		var enumType = $t;
		var names = $.ig.Enum.prototype.getNames(enumType);
		var values = new $.ig.List$1($t, 0);
		for (var i = 0; i < names.length; i++) {
			var name = names[i];
			values.add($.ig.util.castObjTo$t($t, $.ig.Enum.prototype.parse(enumType, name, false)));
		}
		return values;
	}
	/*<EndMethod Name="System.Collections.Generic.List Infragistics.CoreUtilities::GetEnumValues`1()" />*/
	,
	/*<BeginMethod Name="System.Type Infragistics.CoreUtilities::GetUnderlyingType(System.Type)" />*/
	getUnderlyingType: function (type) {
		if (type == null) {
			return null;
		}
		var nullabletype = $.ig.Nullable.prototype.getUnderlyingType(type);
		if (nullabletype != null) {
			type = nullabletype;
		}
		return type;
	}
	/*<EndMethod Name="System.Type Infragistics.CoreUtilities::GetUnderlyingType(System.Type)" />*/
	,
	/*<BeginMethod Name="System.Object Infragistics.CoreUtilities::GetWeakReferenceTargetSafe(System.WeakReference)" />*/
	getWeakReferenceTargetSafe: function (weakReference) {
		if (null != weakReference) {
			try {
				return weakReference.target();
			}
			catch (e) {
			}
		}
		return null;
	}
	/*<EndMethod Name="System.Object Infragistics.CoreUtilities::GetWeakReferenceTargetSafe(System.WeakReference)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.CoreUtilities::HasItems(System.Collections.IEnumerable)" />*/
	hasItems: function (e) {
		if (null != e) {
			if ($.ig.util.cast($.ig.ICollection.prototype.$type, e) !== null) {
				return (e).count() > 0;
			}
			if (null != e) {
				var en = e.getEnumerator();
				while (en.moveNext()) {
					var o = en.current();
					return true;
				}
			}
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.CoreUtilities::HasItems(System.Collections.IEnumerable)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CoreUtilities::RaiseReadOnlyCollectionException()" />*/
	raiseReadOnlyCollectionException: function () {
		throw new $.ig.NotSupportedException(0, "Collection is read-only.");
	}
	/*<EndMethod Name="System.Void Infragistics.CoreUtilities::RaiseReadOnlyCollectionException()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CoreUtilities::RemoveAll`1(System.Collections.Generic.List, Infragistics.CoreUtilities.T)" />*/
	removeAll$11: function ($t, list, itemToRemove) {
		var s = $.ig.CoreUtilities.prototype.removeAllHelper$1($t, list, itemToRemove);
		list.removeRange(s, list.count() - s);
	}
	/*<EndMethod Name="System.Void Infragistics.CoreUtilities::RemoveAll`1(System.Collections.Generic.List, Infragistics.CoreUtilities.T)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CoreUtilities::RemoveAll`1(System.Collections.Generic.IList, Infragistics.CoreUtilities.T)" />*/
	removeAll$1: function ($t, list, itemToRemove) {
		var s = $.ig.CoreUtilities.prototype.removeAllHelper$1($t, list, itemToRemove);
		for (var i = list.count() - 1; i >= s; i--) {
			list.removeAt(i);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.CoreUtilities::RemoveAll`1(System.Collections.Generic.IList, Infragistics.CoreUtilities.T)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.CoreUtilities::RemoveAllHelper`1(System.Collections.Generic.IList, Infragistics.CoreUtilities.T)" />*/
	removeAllHelper$1: function ($t, list, itemToRemove) {
		var delta = 0;
		var count = list.count();
		var comparer = $.ig.EqualityComparer$1.prototype.defaultEqualityComparerValue($t);
		for (var i = 0; i < count; i++) {
			if (comparer.equalsC(list.item(i), itemToRemove)) {
				delta++;
			} else if (0 != delta) {
				list.item(i - delta, list.item(i));
			}
		}
		return count - delta;
	}
	/*<EndMethod Name="System.Int32 Infragistics.CoreUtilities::RemoveAllHelper`1(System.Collections.Generic.IList, Infragistics.CoreUtilities.T)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CoreUtilities::ValidateIsNotNegative(System.Double)" />*/
	validateIsNotNegative: function (value) {
		if (value < 0) {
			throw new $.ig.ArgumentException(1, $.ig.SR.prototype.getString("LE_ValueCannotBeNegative"));
		}
	}
	/*<EndMethod Name="System.Void Infragistics.CoreUtilities::ValidateIsNotNegative(System.Double)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CoreUtilities::ValidateIsNotNegative(System.Double, System.String)" />*/
	validateIsNotNegative1: function (value, paramName) {
		if (value < 0) {
			throw new $.ig.ArgumentException(2, paramName, $.ig.SR.prototype.getString("LE_ValueCannotBeNegative"));
		}
	}
	/*<EndMethod Name="System.Void Infragistics.CoreUtilities::ValidateIsNotNegative(System.Double, System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CoreUtilities::ValidateNotNull(System.Object)" />*/
	validateNotNull: function (value) {
		if (null == value) {
			throw new $.ig.ArgumentNullException(1);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.CoreUtilities::ValidateNotNull(System.Object)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CoreUtilities::ValidateNotNull(System.Object, System.String)" />*/
	validateNotNull1: function (value, paramName) {
		if (null == value) {
			throw new $.ig.ArgumentNullException(0, paramName);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.CoreUtilities::ValidateNotNull(System.Object, System.String)" />*/
	,
	$type: new $.ig.Type('CoreUtilities', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.CoreUtilities" />*/

/*<BeginType Name="Infragistics.CoreUtilities_TypedList`1" />*/

$.ig.util.defType('CoreUtilities_TypedList$1', 'Object', {
	$t: null,
	__list: null,
	init: function ($t, list) {
		this.$t = $t;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$t);
		}
		$.ig.Object.prototype.init.call(this);
		$.ig.CoreUtilities.prototype.validateNotNull(list);
		this.__list = list;
	},
	/*<BeginProperty Name="System.Collections.IList Infragistics.CoreUtilities_TypedList`1::List()" />*/
	list: function () {
		return this.__list;
	}
	/*<EndProperty Name="System.Collections.IList Infragistics.CoreUtilities_TypedList`1::List()" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.CoreUtilities_TypedList`1::IndexOf(Infragistics.CoreUtilities_TypedList.T)" />*/
	indexOf: function (item) {
		return this.__list.indexOf($.ig.util.getBoxIfEnum(this.$t, item));
	}
	/*<EndMethod Name="System.Int32 Infragistics.CoreUtilities_TypedList`1::IndexOf(Infragistics.CoreUtilities_TypedList.T)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CoreUtilities_TypedList`1::Insert(System.Int32, Infragistics.CoreUtilities_TypedList.T)" />*/
	insert: function (index, item) {
		this.__list.insert(index, $.ig.util.getBoxIfEnum(this.$t, item));
	}
	/*<EndMethod Name="System.Void Infragistics.CoreUtilities_TypedList`1::Insert(System.Int32, Infragistics.CoreUtilities_TypedList.T)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CoreUtilities_TypedList`1::RemoveAt(System.Int32)" />*/
	removeAt: function (index) {
		this.__list.removeAt(index);
	}
	/*<EndMethod Name="System.Void Infragistics.CoreUtilities_TypedList`1::RemoveAt(System.Int32)" />*/
	,
	/*<BeginProperty Name="Infragistics.CoreUtilities_TypedList.T Infragistics.CoreUtilities_TypedList`1::Item(System.Int32)" />*/
	item: function (index, value) {
		if (arguments.length === 2) {
			this.__list.item(index, $.ig.util.getBoxIfEnum(this.$t, value));
			return value;
		} else {
			return $.ig.util.castObjTo$t(this.$t, this.__list.item(index));
		}
	}
	/*<EndProperty Name="Infragistics.CoreUtilities_TypedList.T Infragistics.CoreUtilities_TypedList`1::Item(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CoreUtilities_TypedList`1::Add(Infragistics.CoreUtilities_TypedList.T)" />*/
	add: function (item) {
		this.__list.add($.ig.util.getBoxIfEnum(this.$t, item));
	}
	/*<EndMethod Name="System.Void Infragistics.CoreUtilities_TypedList`1::Add(Infragistics.CoreUtilities_TypedList.T)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CoreUtilities_TypedList`1::Clear()" />*/
	clear: function () {
		this.__list.clear();
	}
	/*<EndMethod Name="System.Void Infragistics.CoreUtilities_TypedList`1::Clear()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.CoreUtilities_TypedList`1::Contains(Infragistics.CoreUtilities_TypedList.T)" />*/
	contains: function (item) {
		return this.__list.contains($.ig.util.getBoxIfEnum(this.$t, item));
	}
	/*<EndMethod Name="System.Boolean Infragistics.CoreUtilities_TypedList`1::Contains(Infragistics.CoreUtilities_TypedList.T)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CoreUtilities_TypedList`1::CopyTo(, System.Int32)" />*/
	copyTo: function (array, arrayIndex) {
		$.ig.CoreUtilities.prototype.copyTo$1(this.$t, new $.ig.TypedEnumerable$1(this.$t, this.__list), array, arrayIndex);
	}
	/*<EndMethod Name="System.Void Infragistics.CoreUtilities_TypedList`1::CopyTo(, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.CoreUtilities_TypedList`1::Count()" />*/
	count: function () {
		return this.__list.count();
	}
	/*<EndProperty Name="System.Int32 Infragistics.CoreUtilities_TypedList`1::Count()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.CoreUtilities_TypedList`1::IsReadOnly()" />*/
	isReadOnly: function () {
		return this.__list.isReadOnly();
	}
	/*<EndProperty Name="System.Boolean Infragistics.CoreUtilities_TypedList`1::IsReadOnly()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.CoreUtilities_TypedList`1::Remove(Infragistics.CoreUtilities_TypedList.T)" />*/
	remove: function (item) {
		var index = this.__list.indexOf($.ig.util.getBoxIfEnum(this.$t, item));
		if (index >= 0) {
			this.__list.removeAt(index);
		}
		return index >= 0;
	}
	/*<EndMethod Name="System.Boolean Infragistics.CoreUtilities_TypedList`1::Remove(Infragistics.CoreUtilities_TypedList.T)" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerator Infragistics.CoreUtilities_TypedList`1::GetEnumerator()" />*/
	getEnumerator: function () {
		return new $.ig.TypedEnumerable_Enumerator$1(this.$t, this.__list.getEnumerator());
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerator Infragistics.CoreUtilities_TypedList`1::GetEnumerator()" />*/
	,
	/*<BeginMethod Name="System.Collections.IEnumerator Infragistics.CoreUtilities_TypedList`1::System.Collections.IEnumerable.GetEnumerator()" />*/
	getEnumerator: function () {
		return this.__list.getEnumerator();
	}
	/*<EndMethod Name="System.Collections.IEnumerator Infragistics.CoreUtilities_TypedList`1::System.Collections.IEnumerable.GetEnumerator()" />*/
	,
	$type: new $.ig.Type('CoreUtilities_TypedList$1', $.ig.Object.prototype.$type, [$.ig.IList$1.prototype.$type.specialize(0)])
}, true);

/*<EndType Name="Infragistics.CoreUtilities_TypedList`1" />*/

/*<BeginType Name="Infragistics.CoreUtilities_ObservableTypedList`1" />*/

$.ig.util.defType('CoreUtilities_ObservableTypedList$1', 'CoreUtilities_TypedList$1', {
	$t: null,
	init: function ($t, list) {
		this.$t = $t;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$t);
		}
		$.ig.CoreUtilities_TypedList$1.prototype.init.call(this, this.$t, list);
		var incc = $.ig.util.cast($.ig.INotifyCollectionChanged.prototype.$type, list);
		if (incc != null) {
			incc.collectionChanged = $.ig.Delegate.prototype.combine(incc.collectionChanged, this.onCollectionChanged.runOn(this));
		}
		var inpc = $.ig.util.cast($.ig.INotifyPropertyChanged.prototype.$type, list);
		if (inpc != null) {
			inpc.propertyChanged = $.ig.Delegate.prototype.combine(inpc.propertyChanged, this.onCollectionPropertyChanged.runOn(this));
		}
	},
	/*<BeginMethod Name="System.Void Infragistics.CoreUtilities_ObservableTypedList`1::OnCollectionPropertyChanged(System.Object, System.ComponentModel.PropertyChangedEventArgs)" />*/
	onCollectionPropertyChanged: function (sender, e) {
		var handler = this.propertyChanged;
		if (null != handler) {
			handler(this, e);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.CoreUtilities_ObservableTypedList`1::OnCollectionPropertyChanged(System.Object, System.ComponentModel.PropertyChangedEventArgs)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CoreUtilities_ObservableTypedList`1::OnCollectionChanged(System.Object, System.Collections.Specialized.NotifyCollectionChangedEventArgs)" />*/
	onCollectionChanged: function (sender, e) {
		var handler = this.collectionChanged;
		if (null != handler) {
			handler(this, e);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.CoreUtilities_ObservableTypedList`1::OnCollectionChanged(System.Object, System.Collections.Specialized.NotifyCollectionChangedEventArgs)" />*/
	,
	propertyChanged: null,
	collectionChanged: null,
	$type: new $.ig.Type('CoreUtilities_ObservableTypedList$1', $.ig.CoreUtilities_TypedList$1.prototype.$type.specialize(0), [$.ig.INotifyCollectionChanged.prototype.$type, $.ig.INotifyPropertyChanged.prototype.$type])
}, true);

/*<EndType Name="Infragistics.CoreUtilities_ObservableTypedList`1" />*/

/*<BeginType Name="Infragistics.ITypedPropertyChangeListener`2" />*/

$.ig.util.defType('ITypedPropertyChangeListener$2', 'Object', {
	$type: new $.ig.Type('ITypedPropertyChangeListener$2', null)
}, true);

/*<EndType Name="Infragistics.ITypedPropertyChangeListener`2" />*/

/*<BeginType Name="Infragistics.IPropertyChangeListener" />*/

$.ig.util.defType('IPropertyChangeListener', 'Object', {
	$type: new $.ig.Type('IPropertyChangeListener', null, [$.ig.ITypedPropertyChangeListener$2.prototype.$type.specialize($.ig.Object.prototype.$type, String)])
}, true);

/*<EndType Name="Infragistics.IPropertyChangeListener" />*/

/*<BeginType Name="Infragistics.ITypedSupportPropertyChangeNotifications`2" />*/

$.ig.util.defType('ITypedSupportPropertyChangeNotifications$2', 'Object', {
	$type: new $.ig.Type('ITypedSupportPropertyChangeNotifications$2', null)
}, true);

/*<EndType Name="Infragistics.ITypedSupportPropertyChangeNotifications`2" />*/

/*<BeginType Name="Infragistics.ISupportPropertyChangeNotifications" />*/

$.ig.util.defType('ISupportPropertyChangeNotifications', 'Object', {
	$type: new $.ig.Type('ISupportPropertyChangeNotifications', null, [$.ig.ITypedSupportPropertyChangeNotifications$2.prototype.$type.specialize($.ig.Object.prototype.$type, String)])
}, true);

/*<EndType Name="Infragistics.ISupportPropertyChangeNotifications" />*/

/*<BeginType Name="Infragistics.IValueChangeListener`1" />*/

$.ig.util.defType('IValueChangeListener$1', 'Object', {
	$type: new $.ig.Type('IValueChangeListener$1', null)
}, true);

/*<EndType Name="Infragistics.IValueChangeListener`1" />*/

/*<BeginType Name="Infragistics.ListenerList" />*/

$.ig.util.defType('ListenerList', 'List$1', {
	__isTraversingList: 0,
	init: function (capacity) {
		$.ig.List$1.prototype.init2.call(this, $.ig.Object.prototype.$type, 2, capacity);
	},
	/*<BeginMethod Name="System.Object Infragistics.ListenerList::CreateWeakRefHelper(System.Object)" />*/
	createWeakRefHelper: function (obj) {
		var w = $.ig.util.cast($.ig.WeakReference.prototype.$type, obj);
		if (null == w) {
			w = new $.ig.WeakReference(obj);
		}
		return w;
	}
	/*<EndMethod Name="System.Object Infragistics.ListenerList::CreateWeakRefHelper(System.Object)" />*/
	,
	/*<BeginMethod Name="System.Object Infragistics.ListenerList::GetItemHelper(System.Object)" />*/
	getItemHelper: function (obj) {
		var w = $.ig.util.cast($.ig.WeakReference.prototype.$type, obj);
		if (null != w) {
			return $.ig.CoreUtilities.prototype.getWeakReferenceTargetSafe(w);
		}
		return obj;
	}
	/*<EndMethod Name="System.Object Infragistics.ListenerList::GetItemHelper(System.Object)" />*/
	,
	/*<BeginMethod Name="System.Object Infragistics.ListenerList::Add(System.Object, System.Object, System.Boolean)" />*/
	add2: function (currentListener, listener, useWeakReference) {
		$.ig.CoreUtilities.prototype.validateNotNull(listener);
		var listenerObj = useWeakReference ? $.ig.ListenerList.prototype.createWeakRefHelper(listener) : listener;
		if (null == currentListener) {
			return listenerObj;
		} else {
			var list = $.ig.util.cast($.ig.ListenerList.prototype.$type, currentListener);
			if (null != list) {
				list.add1(listenerObj);
			} else {
				list = new $.ig.ListenerList(2);
				list.add1(currentListener);
				list.add1(listenerObj);
			}
			return list;
		}
	}
	/*<EndMethod Name="System.Object Infragistics.ListenerList::Add(System.Object, System.Object, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Object Infragistics.ListenerList::Remove(System.Object, System.Object)" />*/
	remove2: function (currentListener, listener) {
		var list = $.ig.util.cast($.ig.ListenerList.prototype.$type, currentListener);
		if (null != list) {
			for (var i = list.count() - 1; i >= 0; i--) {
				if (listener == $.ig.ListenerList.prototype.getItemHelper(list.__inner[i])) {
					if (0 != list.__isTraversingList) {
						var newList = new $.ig.ListenerList(list.count());
						newList.addRange(list);
						list = newList;
					}
					list.removeAt(i);
					break;
				}
			}
			return 1 == list.count() ? list.__inner[0] : list;
		} else if ($.ig.ListenerList.prototype.getItemHelper(currentListener) == listener) {
			return null;
		} else {
			return currentListener;
		}
	}
	/*<EndMethod Name="System.Object Infragistics.ListenerList::Remove(System.Object, System.Object)" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerable Infragistics.ListenerList::GetListeners(System.Object)" />*/
	getListeners: function (currentListener) {
		var list = $.ig.util.cast($.ig.ListenerList.prototype.$type, currentListener);
		if (null != list) {
			return new $.ig.ListenerList_Enumerable(list);
		} else if (null != currentListener) {
			return [ currentListener ];
		} else {
			return new Array(0);
		}
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerable Infragistics.ListenerList::GetListeners(System.Object)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ListenerList::GetListeners(System.Object, System.Collections.Generic.IEnumerable, System.Object)" />*/
	getListeners1: function (currentListener, multiListeners, singleListener) {
		singleListener = null;
		multiListeners = null;
		var list = $.ig.util.cast($.ig.ListenerList.prototype.$type, currentListener);
		if (null != list) {
			multiListeners = new $.ig.ListenerList_Enumerable(list);
		} else {
			var listner = $.ig.ListenerList.prototype.getItemHelper(currentListener);
			if (null != listner) {
				singleListener = listner;
			}
		}
		return {
			p1: multiListeners,
			p2: singleListener
		};
	}
	/*<EndMethod Name="System.Void Infragistics.ListenerList::GetListeners(System.Object, System.Collections.Generic.IEnumerable, System.Object)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ListenerList::RaisePropertyChanged`2(System.Object, Infragistics.ListenerList.TItem, Infragistics.ListenerList.TProperty, System.Object)" />*/
	raisePropertyChanged$2: function ($tItem, $tProperty, listeners, sender, property, extraInfo) {
		var list = $.ig.util.cast($.ig.ListenerList.prototype.$type, listeners);
		if (null != list) {
			list.__isTraversingList++;
			try {
				for (var i = 0, count = list.count(); i < count; i++) {
					var item = $.ig.ListenerList.prototype.getItemHelper(list.__inner[i]);
					if (null != item) {
						item.onPropertyValueChanged(sender, property, extraInfo);
					}
				}
			}
			finally {
				list.__isTraversingList--;
			}
		} else if (null != listeners) {
			var item1 = $.ig.ListenerList.prototype.getItemHelper(listeners);
			if (null != item1) {
				item1.onPropertyValueChanged(sender, property, extraInfo);
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.ListenerList::RaisePropertyChanged`2(System.Object, Infragistics.ListenerList.TItem, Infragistics.ListenerList.TProperty, System.Object)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ListenerList::RaiseValueChanged`1(System.Object, Infragistics.ListenerList.TItem)" />*/
	raiseValueChanged$1: function ($tItem, listeners, item) {
		var list = $.ig.util.cast($.ig.ListenerList.prototype.$type, listeners);
		if (null != list) {
			list.__isTraversingList++;
			try {
				for (var i = 0, count = list.count(); i < count; i++) {
					var ii = $.ig.ListenerList.prototype.getItemHelper(list.__inner[i]);
					if (null != ii) {
						ii.onValueChanged(item);
					}
				}
			}
			finally {
				list.__isTraversingList--;
			}
		} else if (null != listeners) {
			var ii1 = $.ig.ListenerList.prototype.getItemHelper(listeners);
			if (null != ii1) {
				ii1.onValueChanged(item);
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.ListenerList::RaiseValueChanged`1(System.Object, Infragistics.ListenerList.TItem)" />*/
	,
	$type: new $.ig.Type('ListenerList', $.ig.List$1.prototype.$type.specialize($.ig.Object.prototype.$type))
}, true);

/*<EndType Name="Infragistics.ListenerList" />*/

/*<BeginType Name="Infragistics.ListenerList_Enumerable" />*/

$.ig.util.defType('ListenerList_Enumerable', 'Object', {
	__l: null,
	init: function (l) {
		$.ig.Object.prototype.init.call(this);
		this.__l = l;
	},
	/*<BeginMethod Name="System.Collections.Generic.IEnumerator Infragistics.ListenerList_Enumerable::GetEnumerator()" />*/
	getEnumerator: function () {
		return new $.ig.ListenerList_Enumerable_Enumerator(this.__l);
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerator Infragistics.ListenerList_Enumerable::GetEnumerator()" />*/
	,
	$type: new $.ig.Type('ListenerList_Enumerable', $.ig.Object.prototype.$type, [$.ig.IEnumerable$1.prototype.$type.specialize($.ig.Object.prototype.$type)])
}, true);

/*<EndType Name="Infragistics.ListenerList_Enumerable" />*/

/*<BeginType Name="Infragistics.ListenerList_Enumerable_Enumerator" />*/

$.ig.util.defType('ListenerList_Enumerable_Enumerator', 'Object', {
	__l: null,
	__index: 0,
	__current: null,
	init: function (l) {
		$.ig.Object.prototype.init.call(this);
		this.__l = l;
		this.reset();
	},
	/*<BeginProperty Name="System.Object Infragistics.ListenerList_Enumerable_Enumerator::Current()" />*/
	current: function () {
		return this.__current;
	}
	/*<EndProperty Name="System.Object Infragistics.ListenerList_Enumerable_Enumerator::Current()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ListenerList_Enumerable_Enumerator::Dispose()" />*/
	dispose: function () {
	}
	/*<EndMethod Name="System.Void Infragistics.ListenerList_Enumerable_Enumerator::Dispose()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.ListenerList_Enumerable_Enumerator::MoveNext()" />*/
	moveNext: function () {
		this.__current = null;
		while (null == this.__current && ++this.__index < this.__l.count()) {
			this.__current = $.ig.ListenerList.prototype.getItemHelper(this.__l.item(this.__index));
		}
		return null != this.__current;
	}
	/*<EndMethod Name="System.Boolean Infragistics.ListenerList_Enumerable_Enumerator::MoveNext()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ListenerList_Enumerable_Enumerator::Reset()" />*/
	reset: function () {
		this.__index = -1;
		this.__current = null;
	}
	/*<EndMethod Name="System.Void Infragistics.ListenerList_Enumerable_Enumerator::Reset()" />*/
	,
	$type: new $.ig.Type('ListenerList_Enumerable_Enumerator', $.ig.Object.prototype.$type, [$.ig.IEnumerator$1.prototype.$type.specialize($.ig.Object.prototype.$type)])
}, true);

/*<EndType Name="Infragistics.ListenerList_Enumerable_Enumerator" />*/

/*<BeginType Name="Infragistics.TypedPropertyChangeListenerList`2" />*/

$.ig.util.defType('TypedPropertyChangeListenerList$2', 'Object', {
	$tItem: null,
	$tProperty: null,
	__listeners: null,
	init: function ($tItem, $tProperty) {
		this.$tItem = $tItem;
		this.$tProperty = $tProperty;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$tItem, this.$tProperty);
		}
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Void Infragistics.TypedPropertyChangeListenerList`2::Add(Infragistics.ITypedPropertyChangeListener, System.Boolean)" />*/
	add: function (listener, useWeakReference) {
		this.__listeners = $.ig.ListenerList.prototype.add2(this.__listeners, listener, useWeakReference);
	}
	/*<EndMethod Name="System.Void Infragistics.TypedPropertyChangeListenerList`2::Add(Infragistics.ITypedPropertyChangeListener, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.TypedPropertyChangeListenerList`2::Remove(Infragistics.ITypedPropertyChangeListener)" />*/
	remove: function (listener) {
		this.__listeners = $.ig.ListenerList.prototype.remove2(this.__listeners, listener);
	}
	/*<EndMethod Name="System.Void Infragistics.TypedPropertyChangeListenerList`2::Remove(Infragistics.ITypedPropertyChangeListener)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.TypedPropertyChangeListenerList`2::OnPropertyValueChanged(Infragistics.TypedPropertyChangeListenerList.TItem, Infragistics.TypedPropertyChangeListenerList.TProperty, System.Object)" />*/
	onPropertyValueChanged: function (sender, property, extraInfo) {
		if (null != this.__listeners) {
			$.ig.ListenerList.prototype.raisePropertyChanged$2(this.$tItem, this.$tProperty, this.__listeners, sender, property, extraInfo);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.TypedPropertyChangeListenerList`2::OnPropertyValueChanged(Infragistics.TypedPropertyChangeListenerList.TItem, Infragistics.TypedPropertyChangeListenerList.TProperty, System.Object)" />*/
	,
	$type: new $.ig.Type('TypedPropertyChangeListenerList$2', $.ig.Object.prototype.$type, [$.ig.ITypedPropertyChangeListener$2.prototype.$type.specialize(0, 1)])
}, true);

/*<EndType Name="Infragistics.TypedPropertyChangeListenerList`2" />*/

/*<BeginType Name="Infragistics.PropertyChangeListenerList" />*/

$.ig.util.defType('PropertyChangeListenerList', 'TypedPropertyChangeListenerList$2', {
	init: function () {
		$.ig.TypedPropertyChangeListenerList$2.prototype.init.call(this, $.ig.Object.prototype.$type, String);
	},
	/*<BeginMethod Name="System.Void Infragistics.PropertyChangeListenerList::ManageListenerHelper`1(Infragistics.PropertyChangeListenerList.T, Infragistics.PropertyChangeListenerList.T, Infragistics.IPropertyChangeListener, System.Boolean)" />*/
	manageListenerHelper$1: function ($t, val, newVal, listener, useWeakReference) {
		if ($.ig.util.getBoxIfEnum($t, val) != null) {
			val.removeListener(listener);
		}
		val = newVal;
		if ($.ig.util.getBoxIfEnum($t, val) != null) {
			val.addListener(listener, useWeakReference);
		}
		return {
			p0: val
		};
	}
	/*<EndMethod Name="System.Void Infragistics.PropertyChangeListenerList::ManageListenerHelper`1(Infragistics.PropertyChangeListenerList.T, Infragistics.PropertyChangeListenerList.T, Infragistics.IPropertyChangeListener, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.PropertyChangeListenerList::ManageListenerHelperObj`1(Infragistics.PropertyChangeListenerList.T, Infragistics.PropertyChangeListenerList.T, Infragistics.IPropertyChangeListener, System.Boolean)" />*/
	manageListenerHelperObj$1: function ($t, val, newVal, listener, useWeakReference) {
		var vcn = $.ig.util.cast($.ig.ISupportPropertyChangeNotifications.prototype.$type, val);
		if (vcn != null) {
			vcn.removeListener(listener);
		}
		val = newVal;
		vcn = $.ig.util.cast($.ig.ISupportPropertyChangeNotifications.prototype.$type, newVal);
		if (vcn != null) {
			vcn.addListener(listener, useWeakReference);
		}
		return {
			p0: val
		};
	}
	/*<EndMethod Name="System.Void Infragistics.PropertyChangeListenerList::ManageListenerHelperObj`1(Infragistics.PropertyChangeListenerList.T, Infragistics.PropertyChangeListenerList.T, Infragistics.IPropertyChangeListener, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.PropertyChangeListenerList::OnCollectionChanged(System.Object, System.Collections.Specialized.NotifyCollectionChangedEventArgs)" />*/
	onCollectionChanged: function (sender, e) {
		this.onPropertyValueChanged(sender, $.ig.NotifyCollectionChangedAction.prototype.$getName(e.action()), e);
	}
	/*<EndMethod Name="System.Void Infragistics.PropertyChangeListenerList::OnCollectionChanged(System.Object, System.Collections.Specialized.NotifyCollectionChangedEventArgs)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.PropertyChangeListenerList::RaisePropertyChanged(System.Object, System.Object, System.String, System.Object)" />*/
	raisePropertyChanged: function (listeners, sender, property, extraInfo) {
		$.ig.ListenerList.prototype.raisePropertyChanged$2($.ig.Object.prototype.$type, String, listeners, sender, property, extraInfo);
	}
	/*<EndMethod Name="System.Void Infragistics.PropertyChangeListenerList::RaisePropertyChanged(System.Object, System.Object, System.String, System.Object)" />*/
	,
	$type: new $.ig.Type('PropertyChangeListenerList', $.ig.TypedPropertyChangeListenerList$2.prototype.$type.specialize($.ig.Object.prototype.$type, String), [$.ig.IPropertyChangeListener.prototype.$type])
}, true);

/*<EndType Name="Infragistics.PropertyChangeListenerList" />*/

/*<BeginType Name="Infragistics.PropertyChangeListener`1" />*/

$.ig.util.defType('PropertyChangeListener$1', 'Object', {
	$tOwner: null,
	__wwOwner: null,
	__action: null,
	init: function ($tOwner, owner, action, useWeakReference) {
		this.$tOwner = $tOwner;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$tOwner);
		}
		$.ig.Object.prototype.init.call(this);
		$.ig.CoreUtilities.prototype.validateNotNull(owner);
		this.__wwOwner = useWeakReference ? new $.ig.WeakReference(owner) : owner;
		this.__action = action;
	},
	/*<BeginProperty Name="Infragistics.PropertyChangeListener.TOwner Infragistics.PropertyChangeListener`1::Owner()" />*/
	owner: function () {
		return $.ig.util.castObjTo$t(this.$tOwner, $.ig.ListenerList.prototype.getItemHelper(this.__wwOwner));
	}
	/*<EndProperty Name="Infragistics.PropertyChangeListener.TOwner Infragistics.PropertyChangeListener`1::Owner()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.PropertyChangeListener`1::OnPropertyValueChanged(System.Object, System.String, System.Object)" />*/
	onPropertyValueChanged: function (dataItem, property, extraInfo) {
		var owner = this.owner();
		if (null != owner && null != this.__action) {
			this.__action(owner, dataItem, property, extraInfo);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.PropertyChangeListener`1::OnPropertyValueChanged(System.Object, System.String, System.Object)" />*/
	,
	$type: new $.ig.Type('PropertyChangeListener$1', $.ig.Object.prototype.$type, [$.ig.IPropertyChangeListener.prototype.$type])
}, true);

/*<EndType Name="Infragistics.PropertyChangeListener`1" />*/

/*<BeginType Name="Infragistics.PropertyChangeNotifier" />*/

$.ig.util.defType('PropertyChangeNotifier', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	propertyChanged: null,
	/*<BeginMethod Name="System.Void Infragistics.PropertyChangeNotifier::OnPropertyChanged(System.String)" />*/
	onPropertyChanged: function (propertyName) {
		var handler = this.propertyChanged;
		if (handler != null) {
			handler(this, new $.ig.PropertyChangedEventArgs(propertyName));
		}
	}
	/*<EndMethod Name="System.Void Infragistics.PropertyChangeNotifier::OnPropertyChanged(System.String)" />*/
	,
	$type: new $.ig.Type('PropertyChangeNotifier', $.ig.Object.prototype.$type, [$.ig.INotifyPropertyChanged.prototype.$type])
}, true);

/*<EndType Name="Infragistics.PropertyChangeNotifier" />*/

/*<BeginType Name="Infragistics.PropertyChangeNotifierExtended" />*/

$.ig.util.defType('PropertyChangeNotifierExtended', 'PropertyChangeNotifier', {
	__listeners: null,
	init: function () {
		$.ig.PropertyChangeNotifier.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Void Infragistics.PropertyChangeNotifierExtended::OnPropertyChanged(System.String)" />*/
	onPropertyChanged: function (propertyName) {
		$.ig.PropertyChangeNotifier.prototype.onPropertyChanged.call(this, propertyName);
		this.notifyListeners(this, propertyName, null);
	}
	/*<EndMethod Name="System.Void Infragistics.PropertyChangeNotifierExtended::OnPropertyChanged(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.PropertyChangeNotifierExtended::AddListener(Infragistics.ITypedPropertyChangeListener, System.Boolean)" />*/
	addListener: function (listener, useWeakReference) {
		this.__listeners = $.ig.ListenerList.prototype.add2(this.__listeners, listener, useWeakReference);
	}
	/*<EndMethod Name="System.Void Infragistics.PropertyChangeNotifierExtended::AddListener(Infragistics.ITypedPropertyChangeListener, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.PropertyChangeNotifierExtended::NotifyListeners(System.Object, System.String, System.Object)" />*/
	notifyListeners: function (sender, property, extraInfo) {
		this.onSubObjectPropertyChanged(sender, property, extraInfo);
	}
	/*<EndMethod Name="System.Void Infragistics.PropertyChangeNotifierExtended::NotifyListeners(System.Object, System.String, System.Object)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.PropertyChangeNotifierExtended::OnSubObjectPropertyChanged(System.Object, System.String, System.Object)" />*/
	onSubObjectPropertyChanged: function (sender, property, extraInfo) {
		if (null != this.__listeners) {
			$.ig.ListenerList.prototype.raisePropertyChanged$2($.ig.Object.prototype.$type, String, this.__listeners, sender, property, extraInfo);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.PropertyChangeNotifierExtended::OnSubObjectPropertyChanged(System.Object, System.String, System.Object)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.PropertyChangeNotifierExtended::RemoveListener(Infragistics.ITypedPropertyChangeListener)" />*/
	removeListener: function (listener) {
		this.__listeners = $.ig.ListenerList.prototype.remove2(this.__listeners, listener);
	}
	/*<EndMethod Name="System.Void Infragistics.PropertyChangeNotifierExtended::RemoveListener(Infragistics.ITypedPropertyChangeListener)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.PropertyChangeNotifierExtended::Infragistics.ITypedPropertyChangeListener<System.Object,System.String>.OnPropertyValueChanged(System.Object, System.String, System.Object)" />*/
	onPropertyValueChanged: function (sender, property, extraInfo) {
		this.notifyListeners(sender, property, extraInfo);
	}
	/*<EndMethod Name="System.Void Infragistics.PropertyChangeNotifierExtended::Infragistics.ITypedPropertyChangeListener<System.Object,System.String>.OnPropertyValueChanged(System.Object, System.String, System.Object)" />*/
	,
	$type: new $.ig.Type('PropertyChangeNotifierExtended', $.ig.PropertyChangeNotifier.prototype.$type, [$.ig.ISupportPropertyChangeNotifications.prototype.$type, $.ig.IPropertyChangeListener.prototype.$type])
}, true);

/*<EndType Name="Infragistics.PropertyChangeNotifierExtended" />*/

/*<BeginType Name="Infragistics.AssemblyVersion" />*/

$.ig.util.defType('AssemblyVersion', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	$type: new $.ig.Type('AssemblyVersion', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.AssemblyVersion" />*/

/*<BeginType Name="Infragistics.Undo.StackList`1" />*/

$.ig.util.defType('StackList$1', 'Object', {
	$t: null,
	__maxCapacity: 0,
	__stack: null,
	__version: 0,
	init: function ($t, maxCapacity) {
		this.$t = $t;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$t);
		}
		$.ig.Object.prototype.init.call(this);
		this.maxCapacity(maxCapacity);
		this.__stack = new $.ig.List$1(this.$t, 0);
	},
	/*<BeginProperty Name="System.Int32 Infragistics.Undo.StackList`1::Count()" />*/
	count: function () {
		return this.__stack.count();
	}
	/*<EndProperty Name="System.Int32 Infragistics.Undo.StackList`1::Count()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Undo.StackList`1::MaxCapacity()" />*/
	maxCapacity: function (value) {
		if (arguments.length === 1) {
			if (value != this.__maxCapacity) {
				$.ig.CoreUtilities.prototype.validateIsNotNegative1(value, "value");
				this.__maxCapacity = value > 0 ? value : 0x7FFFFFFF;
				if (null != this.__stack && this.__stack.count() > this.__maxCapacity) {
					this.__stack.removeRange(0, this.__stack.count() - this.__maxCapacity);
					this.__version++;
					this.onCollectionReset();
				}
			}
			return value;
		} else {
			return this.__maxCapacity;
		}
	}
	/*<EndProperty Name="System.Int32 Infragistics.Undo.StackList`1::MaxCapacity()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Undo.StackList`1::Clear()" />*/
	clear: function () {
		if (this.count() == 0) {
			return;
		}
		this.__stack.clear();
		this.__version++;
		this.onCollectionReset();
	}
	/*<EndMethod Name="System.Void Infragistics.Undo.StackList`1::Clear()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Undo.StackList`1::Contains(Infragistics.Undo.StackList.T)" />*/
	contains: function (item) {
		return this.__stack.indexOf(item) >= 0;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Undo.StackList`1::Contains(Infragistics.Undo.StackList.T)" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerator Infragistics.Undo.StackList`1::GetEnumerator()" />*/
	getEnumerator: function () {
		return new $.ig.StackList_Enumerator$1(this.$t, this);
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerator Infragistics.Undo.StackList`1::GetEnumerator()" />*/
	,
	/*<BeginMethod Name="Infragistics.Undo.StackList.T Infragistics.Undo.StackList`1::GetItem(System.Int32)" />*/
	getItem: function (offset) {
		return this.__stack.__inner[this.__stack.count() - ++offset];
	}
	/*<EndMethod Name="Infragistics.Undo.StackList.T Infragistics.Undo.StackList`1::GetItem(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Undo.StackList`1::OnAddOrRemove(Infragistics.Undo.StackList.T, System.Int32, System.Boolean)" />*/
	onAddOrRemove: function (item, index, isAdd) {
		var propHandler = this.propertyChanged;
		if (null != propHandler) {
			propHandler(this, new $.ig.PropertyChangedEventArgs("Count"));
			propHandler(this, new $.ig.PropertyChangedEventArgs("Item[]"));
		}
		var handler = this.collectionChanged;
		if (null != handler) {
			var args = new $.ig.NotifyCollectionChangedEventArgs(1, isAdd ? $.ig.NotifyCollectionChangedAction.prototype.add : $.ig.NotifyCollectionChangedAction.prototype.remove, $.ig.util.getBoxIfEnum(this.$t, item), index);
			handler(this, args);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Undo.StackList`1::OnAddOrRemove(Infragistics.Undo.StackList.T, System.Int32, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Undo.StackList`1::OnCollectionReset()" />*/
	onCollectionReset: function () {
		var propHandler = this.propertyChanged;
		if (null != propHandler) {
			propHandler(this, new $.ig.PropertyChangedEventArgs("Count"));
			propHandler(this, new $.ig.PropertyChangedEventArgs("Item[]"));
		}
		var handler = this.collectionChanged;
		if (null != handler) {
			handler(this, this.$type.getStaticFields($.ig.StackList$1.prototype.$type)._resetArgs);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Undo.StackList`1::OnCollectionReset()" />*/
	,
	/*<BeginMethod Name="Infragistics.Undo.StackList.T Infragistics.Undo.StackList`1::Peek()" />*/
	peek: function () {
		if (this.count() == 0) {
			throw new $.ig.InvalidOperationException(0);
		}
		return this.__stack.__inner[this.count() - 1];
	}
	/*<EndMethod Name="Infragistics.Undo.StackList.T Infragistics.Undo.StackList`1::Peek()" />*/
	,
	/*<BeginMethod Name="Infragistics.Undo.StackList.T Infragistics.Undo.StackList`1::Pop()" />*/
	pop: function () {
		var action = this.peek();
		this.__stack.removeAt(this.count() - 1);
		this.__version++;
		this.onAddOrRemove(action, 0, false);
		return action;
	}
	/*<EndMethod Name="Infragistics.Undo.StackList.T Infragistics.Undo.StackList`1::Pop()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Undo.StackList`1::Push(Infragistics.Undo.StackList.T)" />*/
	push: function (item) {
		this.__version++;
		if (this.__maxCapacity > 0 && this.count() == this.__maxCapacity) {
			var old = this.__stack.__inner[0];
			this.__stack.removeAt(0);
			this.onAddOrRemove(old, this.__maxCapacity - 1, false);
		}
		this.__stack.add(item);
		this.onAddOrRemove(item, 0, true);
	}
	/*<EndMethod Name="System.Void Infragistics.Undo.StackList`1::Push(Infragistics.Undo.StackList.T)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Undo.StackList`1::RemoveAll(System.Func)" />*/
	removeAll: function (match) {
		$.ig.CoreUtilities.prototype.validateNotNull1(match, "match");
		var version = this.__version;
		for (var i = this.__stack.count() - 1; i >= 0; i--) {
			var item = this.__stack.__inner[i];
			if (match(item)) {
				this.__stack.removeAt(i);
				this.onAddOrRemove(item, this.__stack.count() - i, false);
				if (version != this.__version) {
					throw new $.ig.InvalidOperationException(1, $.ig.undo.locale.getString("LE_RemoveAllFailedVersion"));
				}
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Undo.StackList`1::RemoveAll(System.Func)" />*/
	,
	/*<BeginMethod Name=" Infragistics.Undo.StackList`1::ToArray()" />*/
	toArray: function () {
		return this.__stack.toArray();
	}
	/*<EndMethod Name=" Infragistics.Undo.StackList`1::ToArray()" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.Undo.StackList`1::System.Collections.Generic.IList<T>.IndexOf(Infragistics.Undo.StackList.T)" />*/
	indexOf: function (item) {
		var index = this.__stack.indexOf(item);
		if (index >= 0) {
			index = this.__stack.count() - ++index;
		}
		return index;
	}
	/*<EndMethod Name="System.Int32 Infragistics.Undo.StackList`1::System.Collections.Generic.IList<T>.IndexOf(Infragistics.Undo.StackList.T)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Undo.StackList`1::System.Collections.Generic.IList<T>.Insert(System.Int32, Infragistics.Undo.StackList.T)" />*/
	insert: function (index, item) {
		throw new $.ig.NotSupportedException(1);
	}
	/*<EndMethod Name="System.Void Infragistics.Undo.StackList`1::System.Collections.Generic.IList<T>.Insert(System.Int32, Infragistics.Undo.StackList.T)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Undo.StackList`1::System.Collections.Generic.IList<T>.RemoveAt(System.Int32)" />*/
	removeAt: function (index) {
		throw new $.ig.NotSupportedException(1);
	}
	/*<EndMethod Name="System.Void Infragistics.Undo.StackList`1::System.Collections.Generic.IList<T>.RemoveAt(System.Int32)" />*/
	,
	/*<BeginProperty Name="Infragistics.Undo.StackList.T Infragistics.Undo.StackList`1::Item(System.Int32)" />*/
	item: function (index, value) {
		if (arguments.length === 2) {
			throw new $.ig.NotSupportedException(1);
			return value;
		} else {
			return this.getItem(index);
		}
	}
	/*<EndProperty Name="Infragistics.Undo.StackList.T Infragistics.Undo.StackList`1::Item(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Undo.StackList`1::System.Collections.Generic.ICollection<T>.Add(Infragistics.Undo.StackList.T)" />*/
	add: function (item) {
		this.push(item);
	}
	/*<EndMethod Name="System.Void Infragistics.Undo.StackList`1::System.Collections.Generic.ICollection<T>.Add(Infragistics.Undo.StackList.T)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Undo.StackList`1::System.Collections.Generic.ICollection<T>.CopyTo(, System.Int32)" />*/
	copyTo1: function (array, arrayIndex) {
		var list = this.__stack;
		for (var i = list.count() - 1; i >= 0; i--) {
			array[arrayIndex++] = list.__inner[i];
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Undo.StackList`1::System.Collections.Generic.ICollection<T>.CopyTo(, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.Undo.StackList`1::System.Collections.Generic.ICollection<T>.IsReadOnly()" />*/
	isReadOnly: function () {
		return false;
	}
	/*<EndProperty Name="System.Boolean Infragistics.Undo.StackList`1::System.Collections.Generic.ICollection<T>.IsReadOnly()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Undo.StackList`1::System.Collections.Generic.ICollection<T>.Remove(Infragistics.Undo.StackList.T)" />*/
	remove: function (item) {
		throw new $.ig.NotSupportedException(1);
	}
	/*<EndMethod Name="System.Boolean Infragistics.Undo.StackList`1::System.Collections.Generic.ICollection<T>.Remove(Infragistics.Undo.StackList.T)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Undo.StackList`1::System.Collections.ICollection.CopyTo(System.Array, System.Int32)" />*/
	copyTo: function (array, index) {
		(this.__stack).copyTo(array, index);
	}
	/*<EndMethod Name="System.Void Infragistics.Undo.StackList`1::System.Collections.ICollection.CopyTo(System.Array, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.Undo.StackList`1::System.Collections.ICollection.IsSynchronized()" />*/
	isSynchronized: function () {
		return false;
	}
	/*<EndProperty Name="System.Boolean Infragistics.Undo.StackList`1::System.Collections.ICollection.IsSynchronized()" />*/
	,
	/*<BeginProperty Name="System.Object Infragistics.Undo.StackList`1::System.Collections.ICollection.SyncRoot()" />*/
	syncRoot: function () {
		return (this.__stack).syncRoot();
	}
	/*<EndProperty Name="System.Object Infragistics.Undo.StackList`1::System.Collections.ICollection.SyncRoot()" />*/
	,
	collectionChanged: null,
	propertyChanged: null,
	$type: new $.ig.Type('StackList$1', $.ig.Object.prototype.$type, [$.ig.IEnumerable$1.prototype.$type.specialize(0), $.ig.ICollection.prototype.$type, $.ig.INotifyCollectionChanged.prototype.$type, $.ig.IList$1.prototype.$type.specialize(0), $.ig.INotifyPropertyChanged.prototype.$type], function () {
		this._resetArgs = new $.ig.NotifyCollectionChangedEventArgs(0, $.ig.NotifyCollectionChangedAction.prototype.reset);
	})
}, true);

/*<EndType Name="Infragistics.Undo.StackList`1" />*/

/*<BeginType Name="Infragistics.Undo.StackList_Enumerator`1" />*/

$.ig.util.defType('StackList_Enumerator$1', 'Object', {
	$t: null,
	__stack: null,
	__version: 0,
	__index: 0,
	__current: null,
	init: function ($t, stack) {
		this.$t = $t;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$t);
		}
		$.ig.Object.prototype.init.call(this);
		this.__stack = stack;
		this.reset();
	},
	/*<BeginMethod Name="System.Boolean Infragistics.Undo.StackList_Enumerator`1::MoveNext()" />*/
	moveNext: function () {
		if (this.__version != this.__stack.__version) {
			throw new $.ig.InvalidOperationException(1, $.ig.undo.locale.getString("LE_EnumFailedVersion"));
		}
		if (this.__index == $.ig.StackList_Enumerator$1.prototype._enumeratorEnded) {
			return false;
		}
		if (this.__index == $.ig.StackList_Enumerator$1.prototype._enumeratorNotStarted) {
			this.__index = this.__stack.count();
		}
		this.__index--;
		if (this.__index >= 0) {
			this.__current = this.__stack.__stack.__inner[this.__index];
			return true;
		}
		this.__current = $.ig.util.getDefaultValue(this.$t);
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Undo.StackList_Enumerator`1::MoveNext()" />*/
	,
	/*<BeginProperty Name="Infragistics.Undo.StackList_Enumerator.T Infragistics.Undo.StackList_Enumerator`1::Current()" />*/
	current: function () {
		if (this.__index == $.ig.StackList_Enumerator$1.prototype._enumeratorNotStarted) {
			throw new $.ig.InvalidOperationException(1, $.ig.undo.locale.getString("LE_EnumNotStarted"));
		} else if (this.__index == $.ig.StackList_Enumerator$1.prototype._enumeratorEnded) {
			throw new $.ig.InvalidOperationException(1, $.ig.undo.locale.getString("LE_EnumEnded"));
		}
		return this.__current;
	}
	/*<EndProperty Name="Infragistics.Undo.StackList_Enumerator.T Infragistics.Undo.StackList_Enumerator`1::Current()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Undo.StackList_Enumerator`1::Reset()" />*/
	reset: function () {
		this.__version = this.__stack.__version;
		this.__index = $.ig.StackList_Enumerator$1.prototype._enumeratorNotStarted;
		this.__current = $.ig.util.getDefaultValue(this.$t);
	}
	/*<EndMethod Name="System.Void Infragistics.Undo.StackList_Enumerator`1::Reset()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Undo.StackList_Enumerator`1::System.IDisposable.Dispose()" />*/
	dispose: function () {
		this.__index = $.ig.StackList_Enumerator$1.prototype._enumeratorEnded;
	}
	/*<EndMethod Name="System.Void Infragistics.Undo.StackList_Enumerator`1::System.IDisposable.Dispose()" />*/
	,
	$type: new $.ig.Type('StackList_Enumerator$1', $.ig.Object.prototype.$type, [$.ig.IEnumerator$1.prototype.$type.specialize(0)])
}, true);

/*<EndType Name="Infragistics.Undo.StackList_Enumerator`1" />*/

/*<BeginType Name="Infragistics.Undo.IUndoTransactionOwner" />*/

$.ig.util.defType('IUndoTransactionOwner', 'Object', {
	$type: new $.ig.Type('IUndoTransactionOwner', null)
}, true);

/*<EndType Name="Infragistics.Undo.IUndoTransactionOwner" />*/

/*<BeginType Name="Infragistics.Undo.UndoExecuteContext" />*/

$.ig.util.defType('UndoExecuteContext', 'Object', {
	__undoManager: null,
	__reason: 0,
	__executeStack: null,
	init: function (undoManager, reason) {
		this.__executeStack = new $.ig.StackList$1($.ig.UndoUnit.prototype.$type, 0);
		$.ig.Object.prototype.init.call(this);
		$.ig.CoreUtilities.prototype.validateNotNull1(undoManager, "undoManager");
		this.__undoManager = undoManager;
		this.__reason = reason;
	},
	/*<BeginProperty Name="Infragistics.Undo.UndoHistoryItemType Infragistics.Undo.UndoExecuteContext::ExecuteItemType()" />*/
	executeItemType: function () {
		switch (this.__reason) {
			case $.ig.UndoExecuteReason.prototype.undo:
				{
					return $.ig.UndoHistoryItemType.prototype.undo;
				}
			case $.ig.UndoExecuteReason.prototype.redo:
				{
					return $.ig.UndoHistoryItemType.prototype.redo;
				}
			case $.ig.UndoExecuteReason.prototype.rollback:
				{
					if (this.__undoManager.isPerformingUndo()) {
						return $.ig.UndoHistoryItemType.prototype.redo;
					}
					return $.ig.UndoHistoryItemType.prototype.undo;
				}
			default:
				{
					$.ig.Debug.prototype.assert1(false, "Unexpected reason:" + $.ig.UndoExecuteReason.prototype.$getName(this.__reason));
					return $.ig.UndoHistoryItemType.prototype.undo;
				}
		}
	}
	/*<EndProperty Name="Infragistics.Undo.UndoHistoryItemType Infragistics.Undo.UndoExecuteContext::ExecuteItemType()" />*/
	,
	/*<BeginProperty Name="Infragistics.Undo.UndoExecuteReason Infragistics.Undo.UndoExecuteContext::Reason()" />*/
	reason: function () {
		return this.__reason;
	}
	/*<EndProperty Name="Infragistics.Undo.UndoExecuteReason Infragistics.Undo.UndoExecuteContext::Reason()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Undo.UndoExecuteContext::UnitCount()" />*/
	unitCount: function () {
		return this.__executeStack.count();
	}
	/*<EndProperty Name="System.Int32 Infragistics.Undo.UndoExecuteContext::UnitCount()" />*/
	,
	/*<BeginProperty Name="Infragistics.Undo.UndoManager Infragistics.Undo.UndoExecuteContext::UndoManager()" />*/
	undoManager: function () {
		return this.__undoManager;
	}
	/*<EndProperty Name="Infragistics.Undo.UndoManager Infragistics.Undo.UndoExecuteContext::UndoManager()" />*/
	,
	/*<BeginMethod Name="Infragistics.Undo.UndoUnit Infragistics.Undo.UndoExecuteContext::GetUnit(System.Int32)" />*/
	getUnit: function (offset) {
		if (offset < 0 || offset > this.unitCount()) {
			return null;
		}
		return this.__executeStack.getItem(offset);
	}
	/*<EndMethod Name="Infragistics.Undo.UndoUnit Infragistics.Undo.UndoExecuteContext::GetUnit(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Undo.UndoExecuteContext::Execute(Infragistics.Undo.UndoUnit)" />*/
	execute: function (unit) {
		$.ig.CoreUtilities.prototype.validateNotNull1(unit, "unit");
		this.__executeStack.push(unit);
		try {
			return unit.execute(this);
		}
		finally {
			this.__executeStack.pop();
		}
	}
	/*<EndMethod Name="System.Boolean Infragistics.Undo.UndoExecuteContext::Execute(Infragistics.Undo.UndoUnit)" />*/
	,
	$type: new $.ig.Type('UndoExecuteContext', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Undo.UndoExecuteContext" />*/

/*<BeginType Name="Infragistics.Undo.UndoHistoryItem" />*/

$.ig.util.defType('UndoHistoryItem', 'PropertyChangeNotifier', {
	__unit: null,
	__itemType: 0,
	__undoManager: null,
	__shortDescription: null,
	__longDescription: null,
	init: function (unit, itemType, undoManager) {
		$.ig.PropertyChangeNotifier.prototype.init.call(this);
		$.ig.CoreUtilities.prototype.validateNotNull1(unit, "unit");
		$.ig.CoreUtilities.prototype.validateNotNull1(undoManager, "undoManager");
		this.__unit = unit;
		this.__itemType = itemType;
		this.__undoManager = undoManager;
	},
	/*<BeginProperty Name="Infragistics.Undo.UndoHistoryItemType Infragistics.Undo.UndoHistoryItem::ItemType()" />*/
	itemType: function () {
		return this.__itemType;
	}
	/*<EndProperty Name="Infragistics.Undo.UndoHistoryItemType Infragistics.Undo.UndoHistoryItem::ItemType()" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Undo.UndoHistoryItem::LongDescription()" />*/
	longDescription: function () {
		if (null == this.__longDescription) {
			this.__longDescription = (function ($t) { return $t != null ? $t : String.empty(); }(this.__unit.getDescription(this.__itemType, true)));
		}
		return this.__longDescription;
	}
	/*<EndProperty Name="System.String Infragistics.Undo.UndoHistoryItem::LongDescription()" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Undo.UndoHistoryItem::ShortDescription()" />*/
	shortDescription: function () {
		if (null == this.__shortDescription) {
			this.__shortDescription = (function ($t) { return $t != null ? $t : String.empty(); }(this.__unit.getDescription(this.__itemType, false)));
		}
		return this.__shortDescription;
	}
	/*<EndProperty Name="System.String Infragistics.Undo.UndoHistoryItem::ShortDescription()" />*/
	,
	/*<BeginProperty Name="Infragistics.Undo.UndoManager Infragistics.Undo.UndoHistoryItem::UndoManager()" />*/
	undoManager: function () {
		return this.__undoManager;
	}
	/*<EndProperty Name="Infragistics.Undo.UndoManager Infragistics.Undo.UndoHistoryItem::UndoManager()" />*/
	,
	/*<BeginProperty Name="Infragistics.Undo.UndoUnit Infragistics.Undo.UndoHistoryItem::Unit()" />*/
	unit: function () {
		return this.__unit;
	}
	/*<EndProperty Name="Infragistics.Undo.UndoUnit Infragistics.Undo.UndoHistoryItem::Unit()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Undo.UndoHistoryItem::Execute()" />*/
	execute: function () {
		this.performUndoRedo(true);
	}
	/*<EndMethod Name="System.Void Infragistics.Undo.UndoHistoryItem::Execute()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Undo.UndoHistoryItem::CanUndoRedo()" />*/
	canUndoRedo: function () {
		var list = this.itemType() == $.ig.UndoHistoryItemType.prototype.redo ? this.__undoManager.redoHistory() : this.__undoManager.undoHistory();
		return list.indexOf(this) >= 0;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Undo.UndoHistoryItem::CanUndoRedo()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Undo.UndoHistoryItem::PerformUndoRedo(System.Boolean)" />*/
	performUndoRedo: function (validate) {
		var isRedo = this.__itemType == $.ig.UndoHistoryItemType.prototype.redo;
		var list = isRedo ? this.__undoManager.redoHistory() : this.__undoManager.undoHistory();
		var index = list.indexOf(this);
		if (index >= 0) {
			this.__undoManager.performUndoRedo(index + 1, !isRedo);
		} else if (validate) {
			throw new $.ig.InvalidOperationException(1, $.ig.undo.locale.getString("LE_HistoryItemNotInCurrentHistory"));
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Undo.UndoHistoryItem::PerformUndoRedo(System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Undo.UndoHistoryItem::ResetDescription()" />*/
	resetDescription: function () {
		if (this.__shortDescription != null) {
			this.__shortDescription = null;
			this.onPropertyChanged("ShortDescription");
		}
		if (this.__longDescription != null) {
			this.__longDescription = null;
			this.onPropertyChanged("LongDescription");
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Undo.UndoHistoryItem::ResetDescription()" />*/
	,
	$type: new $.ig.Type('UndoHistoryItem', $.ig.PropertyChangeNotifier.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Undo.UndoHistoryItem" />*/

/*<BeginType Name="Infragistics.Undo.UndoManager" />*/

$.ig.util.defType('UndoManager', 'PropertyChangeNotifier', {
	__suspendCount: 0,
	__undoStack: null,
	__redoStack: null,
	__undoHistory: null,
	__redoHistory: null,
	__mergeTimeout: null,
	__lastNewOperation: new Date(),
	__cachedRedoStack: null,
	__boolFlags: 0,
	__rootTransaction: null,
	__currentTransaction: null,
	__topUndoHistoryItem: null,
	__topRedoHistoryItem: null,
	__currentHistoryItem: null,
	init: function () {
		this.__mergeTimeout = (0);
		this.__lastNewOperation = $.ig.Date.prototype.minValue();
		this.__boolFlags = $.ig.UndoManager_BoolProperties.prototype.allowMerging;
		$.ig.PropertyChangeNotifier.prototype.init.call(this);
		this.__undoStack = new $.ig.StackList$1($.ig.UndoHistoryItem.prototype.$type, 0);
		this.__redoStack = new $.ig.StackList$1($.ig.UndoHistoryItem.prototype.$type, 0);
		this.__undoHistory = new $.ig.ReadOnlyNotifyCollection$1($.ig.UndoHistoryItem.prototype.$type, this.__undoStack);
		this.__redoHistory = new $.ig.ReadOnlyNotifyCollection$1($.ig.UndoHistoryItem.prototype.$type, this.__redoStack);
		var $t = this.__undoStack;
		$t.collectionChanged = $.ig.Delegate.prototype.combine($t.collectionChanged, this.onHistoryStackChanged.runOn(this));
		var $t1 = this.__redoStack;
		$t1.collectionChanged = $.ig.Delegate.prototype.combine($t1.collectionChanged, this.onHistoryStackChanged.runOn(this));
	},
	/*<BeginProperty Name="System.Boolean Infragistics.Undo.UndoManager::AllowMerging()" />*/
	allowMerging: function (value) {
		if (arguments.length === 1) {
			this.setBool($.ig.UndoManager_BoolProperties.prototype.allowMerging, value, true);
			return value;
		} else {
			return this.getBool($.ig.UndoManager_BoolProperties.prototype.allowMerging);
		}
	}
	/*<EndProperty Name="System.Boolean Infragistics.Undo.UndoManager::AllowMerging()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.Undo.UndoManager::CanRedo()" />*/
	canRedo: function (value) {
		if (arguments.length === 1) {
			this.setBool($.ig.UndoManager_BoolProperties.prototype.canRedo, value, true);
			return value;
		} else {
			return this.getBool($.ig.UndoManager_BoolProperties.prototype.canRedo);
		}
	}
	/*<EndProperty Name="System.Boolean Infragistics.Undo.UndoManager::CanRedo()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.Undo.UndoManager::CanUndo()" />*/
	canUndo: function (value) {
		if (arguments.length === 1) {
			this.setBool($.ig.UndoManager_BoolProperties.prototype.canUndo, value, true);
			return value;
		} else {
			return this.getBool($.ig.UndoManager_BoolProperties.prototype.canUndo);
		}
	}
	/*<EndProperty Name="System.Boolean Infragistics.Undo.UndoManager::CanUndo()" />*/
	,
	/*<BeginProperty Name="Infragistics.Undo.UndoHistoryItem Infragistics.Undo.UndoManager::CurrentHistoryItem()" />*/
	currentHistoryItem: function (value) {
		if (arguments.length === 1) {
			if (value != this.__currentHistoryItem) {
				this.__currentHistoryItem = value;
				this.onPropertyChanged("CurrentHistoryItem");
			}
			return value;
		} else {
			return this.__currentHistoryItem;
		}
	}
	/*<EndProperty Name="Infragistics.Undo.UndoHistoryItem Infragistics.Undo.UndoManager::CurrentHistoryItem()" />*/
	,
	/*<BeginProperty Name="Infragistics.Undo.UndoTransaction Infragistics.Undo.UndoManager::CurrentTransaction()" />*/
	currentTransaction: function () {
		if (this.__currentTransaction == null) {
			if (this.__rootTransaction != null) {
				this.__currentTransaction = $.ig.UndoTransaction.prototype.getLeafOpenGroup(this.__rootTransaction);
			}
		}
		$.ig.Debug.prototype.assert1(this.__currentTransaction == null || this.__rootTransaction != null, "We still have a current transaction even though we don't have a root one?");
		return this.__currentTransaction;
	}
	/*<EndProperty Name="Infragistics.Undo.UndoTransaction Infragistics.Undo.UndoManager::CurrentTransaction()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.Undo.UndoManager::IsPerformingRedo()" />*/
	isPerformingRedo: function () {
		return this.getBool($.ig.UndoManager_BoolProperties.prototype.isPerformingRedo);
	}
	/*<EndProperty Name="System.Boolean Infragistics.Undo.UndoManager::IsPerformingRedo()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.Undo.UndoManager::IsPerformingRollback()" />*/
	isPerformingRollback: function (value) {
		if (arguments.length === 1) {
			this.setBool($.ig.UndoManager_BoolProperties.prototype.isPerformingRollback, value, true);
			return value;
		} else {
			return this.getBool($.ig.UndoManager_BoolProperties.prototype.isPerformingRollback);
		}
	}
	/*<EndProperty Name="System.Boolean Infragistics.Undo.UndoManager::IsPerformingRollback()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.Undo.UndoManager::IsPerformingUndo()" />*/
	isPerformingUndo: function () {
		return this.getBool($.ig.UndoManager_BoolProperties.prototype.isPerformingUndo);
	}
	/*<EndProperty Name="System.Boolean Infragistics.Undo.UndoManager::IsPerformingUndo()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.Undo.UndoManager::IsSuspended()" />*/
	isSuspended: function () {
		return this.__suspendCount > 0;
	}
	/*<EndProperty Name="System.Boolean Infragistics.Undo.UndoManager::IsSuspended()" />*/
	,
	/*<BeginProperty Name="System.TimeSpan Infragistics.Undo.UndoManager::MergeTimeout()" />*/
	mergeTimeout: function (value) {
		if (arguments.length === 1) {
			$.ig.CoreUtilities.prototype.validateIsNotNegative1($.ig.util.timeSpanTicks(value), "value");
			if (this.__mergeTimeout != value) {
				this.__mergeTimeout = value;
				this.onPropertyChanged("MergeTimeout");
			}
			return value;
		} else {
			return this.__mergeTimeout;
		}
	}
	/*<EndProperty Name="System.TimeSpan Infragistics.Undo.UndoManager::MergeTimeout()" />*/
	,
	/*<BeginProperty Name="System.Collections.Generic.IList Infragistics.Undo.UndoManager::RedoHistory()" />*/
	redoHistory: function () {
		return this.__redoHistory;
	}
	/*<EndProperty Name="System.Collections.Generic.IList Infragistics.Undo.UndoManager::RedoHistory()" />*/
	,
	/*<BeginProperty Name="Infragistics.Undo.UndoTransaction Infragistics.Undo.UndoManager::RootTransaction()" />*/
	rootTransaction: function (value) {
		if (arguments.length === 1) {
			if (value != this.__rootTransaction) {
				this.__rootTransaction = value;
				this.onPropertyChanged("RootTransaction");
			}
			return value;
		} else {
			return this.__rootTransaction;
		}
	}
	/*<EndProperty Name="Infragistics.Undo.UndoTransaction Infragistics.Undo.UndoManager::RootTransaction()" />*/
	,
	/*<BeginProperty Name="Infragistics.Undo.UndoHistoryItem Infragistics.Undo.UndoManager::TopRedoHistoryItem()" />*/
	topRedoHistoryItem: function (value) {
		if (arguments.length === 1) {
			if (this.__topRedoHistoryItem != value) {
				this.__topRedoHistoryItem = value;
				this.onPropertyChanged("TopRedoHistoryItem");
			}
			return value;
		} else {
			return this.__topRedoHistoryItem;
		}
	}
	/*<EndProperty Name="Infragistics.Undo.UndoHistoryItem Infragistics.Undo.UndoManager::TopRedoHistoryItem()" />*/
	,
	/*<BeginProperty Name="Infragistics.Undo.UndoHistoryItem Infragistics.Undo.UndoManager::TopUndoHistoryItem()" />*/
	topUndoHistoryItem: function (value) {
		if (arguments.length === 1) {
			if (this.__topUndoHistoryItem != value) {
				this.__topUndoHistoryItem = value;
				this.onPropertyChanged("TopUndoHistoryItem");
			}
			return value;
		} else {
			return this.__topUndoHistoryItem;
		}
	}
	/*<EndProperty Name="Infragistics.Undo.UndoHistoryItem Infragistics.Undo.UndoManager::TopUndoHistoryItem()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Undo.UndoManager::UndoLimit()" />*/
	undoLimit: function (value) {
		if (arguments.length === 1) {
			if (value != this.undoLimit()) {
				$.ig.Debug.prototype.assert1(this.__undoStack.count() == 0 || this.__redoStack.count() == 0, "The sum of the histories will exceed the max. Do we want to make an arbitrary decision about whether to keep the redo items and some of the undo?");
				this.__undoStack.maxCapacity(this.__redoStack.maxCapacity(value));
				this.onPropertyChanged("UndoLimit");
			}
			return value;
		} else {
			return this.__undoStack.maxCapacity();
		}
	}
	/*<EndProperty Name="System.Int32 Infragistics.Undo.UndoManager::UndoLimit()" />*/
	,
	/*<BeginProperty Name="System.Collections.Generic.IList Infragistics.Undo.UndoManager::UndoHistory()" />*/
	undoHistory: function () {
		return this.__undoHistory;
	}
	/*<EndProperty Name="System.Collections.Generic.IList Infragistics.Undo.UndoManager::UndoHistory()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.Undo.UndoManager::AllowMergingResolved()" />*/
	allowMergingResolved: function () {
		return this.allowMerging() && !this.shouldPreventMerge();
	}
	/*<EndProperty Name="System.Boolean Infragistics.Undo.UndoManager::AllowMergingResolved()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.Undo.UndoManager::IsMerging()" />*/
	isMerging: function (value) {
		if (arguments.length === 1) {
			this.setBool($.ig.UndoManager_BoolProperties.prototype.isMerging, value, false);
			return value;
		} else {
			return this.getBool($.ig.UndoManager_BoolProperties.prototype.isMerging);
		}
	}
	/*<EndProperty Name="System.Boolean Infragistics.Undo.UndoManager::IsMerging()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.Undo.UndoManager::IsPerformingRemoveAll()" />*/
	isPerformingRemoveAll: function (value) {
		if (arguments.length === 1) {
			this.setBool($.ig.UndoManager_BoolProperties.prototype.isPerformingRemoveAll, value, false);
			return value;
		} else {
			return this.getBool($.ig.UndoManager_BoolProperties.prototype.isPerformingRemoveAll);
		}
	}
	/*<EndProperty Name="System.Boolean Infragistics.Undo.UndoManager::IsPerformingRemoveAll()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.Undo.UndoManager::ShouldPreventMerge()" />*/
	shouldPreventMerge: function (value) {
		if (arguments.length === 1) {
			if (this.setBool($.ig.UndoManager_BoolProperties.prototype.shouldPreventMerge, value, false) && value) {
				this.clearCachedRedoStack();
			}
			return value;
		} else {
			return this.getBool($.ig.UndoManager_BoolProperties.prototype.shouldPreventMerge);
		}
	}
	/*<EndProperty Name="System.Boolean Infragistics.Undo.UndoManager::ShouldPreventMerge()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Undo.UndoManager::AddChange(Infragistics.Undo.UndoUnit)" />*/
	addChange3: function (unit) {
		$.ig.CoreUtilities.prototype.validateNotNull1(unit, "unit");
		this.addChangeHelper(unit, false);
	}
	/*<EndMethod Name="System.Void Infragistics.Undo.UndoManager::AddChange(Infragistics.Undo.UndoUnit)" />*/
	,
	/*<BeginMethod Name="Infragistics.Undo.UndoUnit Infragistics.Undo.UndoManager::AddChange(System.String, System.String, System.Func, System.Func, System.Object)" />*/
	addChange1: function (description, detailedDescription, undoMethod, redoMethod, target) {
		if (this.isSuspended()) {
			return null;
		}
		$.ig.CoreUtilities.prototype.validateNotNull1(undoMethod, "undoMethod");
		$.ig.CoreUtilities.prototype.validateNotNull1(redoMethod, "redoMethod");
		var unit = $.ig.UndoManager.prototype.createChange(description, detailedDescription, undoMethod, redoMethod, target);
		return this.addChangeHelper(unit, false);
	}
	/*<EndMethod Name="Infragistics.Undo.UndoUnit Infragistics.Undo.UndoManager::AddChange(System.String, System.String, System.Func, System.Func, System.Object)" />*/
	,
	/*<BeginMethod Name="Infragistics.Undo.UndoUnit Infragistics.Undo.UndoManager::AddChange(System.String, System.String, System.Func, System.Func, System.Object)" />*/
	addChange2: function (description, detailedDescription, undoMethod, redoMethod, target) {
		if (this.isSuspended()) {
			return null;
		}
		$.ig.CoreUtilities.prototype.validateNotNull1(undoMethod, "undoMethod");
		$.ig.CoreUtilities.prototype.validateNotNull1(redoMethod, "redoMethod");
		return this.addChange1(description, detailedDescription, function (c) { return undoMethod(); }, function (c) { return redoMethod(); }, target);
	}
	/*<EndMethod Name="Infragistics.Undo.UndoUnit Infragistics.Undo.UndoManager::AddChange(System.String, System.String, System.Func, System.Func, System.Object)" />*/
	,
	/*<BeginMethod Name="Infragistics.Undo.UndoUnit Infragistics.Undo.UndoManager::AddChange(System.String, System.String, System.Action, System.Action, System.Object)" />*/
	addChange: function (description, detailedDescription, undoMethod, redoMethod, target) {
		if (this.isSuspended()) {
			return null;
		}
		$.ig.CoreUtilities.prototype.validateNotNull1(undoMethod, "undoMethod");
		$.ig.CoreUtilities.prototype.validateNotNull1(redoMethod, "redoMethod");
		return this.addChange1(description, detailedDescription, function (c) {
			undoMethod();
			return true;
		}, function (c) {
			redoMethod();
			return true;
		}, target);
	}
	/*<EndMethod Name="Infragistics.Undo.UndoUnit Infragistics.Undo.UndoManager::AddChange(System.String, System.String, System.Action, System.Action, System.Object)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Undo.UndoManager::ClearHistory()" />*/
	clearHistory: function () {
		this.verifyCanAffectHistory();
		this.clearCachedRedoStack();
		this.__undoStack.clear();
		this.__redoStack.clear();
	}
	/*<EndMethod Name="System.Void Infragistics.Undo.UndoManager::ClearHistory()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Undo.UndoManager::ExecuteInTransaction(System.String, System.String, System.Action)" />*/
	executeInTransaction1: function (description, detailedDescription, action) {
		$.ig.CoreUtilities.prototype.validateNotNull1(action, "action");
		var wasCompleted = false;
		var transaction = this.startTransaction(description, detailedDescription);
		try {
			action();
			wasCompleted = true;
			transaction.commit();
		}
		finally {
			if (!wasCompleted && !transaction.isClosed()) {
				transaction.rollback();
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Undo.UndoManager::ExecuteInTransaction(System.String, System.String, System.Action)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Undo.UndoManager::ExecuteInTransaction(Infragistics.Undo.UndoTransaction, System.Action)" />*/
	executeInTransaction: function (transaction, action) {
		$.ig.CoreUtilities.prototype.validateNotNull1(action, "action");
		$.ig.CoreUtilities.prototype.validateNotNull1(transaction, "transaction");
		var wasCompleted = false;
		this.startTransaction1(transaction);
		try {
			action();
			wasCompleted = true;
			transaction.commit();
		}
		finally {
			if (!wasCompleted && !transaction.isClosed()) {
				transaction.rollback();
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Undo.UndoManager::ExecuteInTransaction(Infragistics.Undo.UndoTransaction, System.Action)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Undo.UndoManager::ForEach(System.Action)" />*/
	forEach: function (action) {
		$.ig.CoreUtilities.prototype.validateNotNull1(action, "action");
		$.ig.UndoManager.prototype.forEach1(action, this.undoHistory());
		$.ig.UndoManager.prototype.forEach1(action, this.redoHistory());
		if (null != this.__cachedRedoStack) {
			$.ig.UndoManager.prototype.forEach1(action, this.__cachedRedoStack);
		}
		var rootTransaction = this.__rootTransaction;
		if (null != rootTransaction) {
			action(rootTransaction);
			rootTransaction.forEach(action);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Undo.UndoManager::ForEach(System.Action)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Undo.UndoManager::ForEach(System.Action, System.Collections.Generic.IEnumerable)" />*/
	forEach1: function (action, history) {
		var en = history.getEnumerator();
		while (en.moveNext()) {
			var historyUnit = en.current();
			var unit = historyUnit.unit();
			action(unit);
			unit.forEach(action);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Undo.UndoManager::ForEach(System.Action, System.Collections.Generic.IEnumerable)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Undo.UndoManager::PreventMerge()" />*/
	preventMerge: function () {
		this.shouldPreventMerge(true);
	}
	/*<EndMethod Name="System.Void Infragistics.Undo.UndoManager::PreventMerge()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Undo.UndoManager::Redo(System.Int32)" />*/
	redo: function (redoCount) {
		this.performUndoRedo(redoCount, false);
	}
	/*<EndMethod Name="System.Void Infragistics.Undo.UndoManager::Redo(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Undo.UndoManager::RemoveAll(System.Func, System.Boolean)" />*/
	removeAll: function (match, includeRootTransaction) {
		$.ig.CoreUtilities.prototype.validateNotNull1(match, "match");
		this.verifyCanAffectHistory();
		var unitMatch = null;
		unitMatch = function (u) {
			if (match(u)) {
				return true;
			}
			return u.removeAll(unitMatch);
		};
		var historyItemMatch = function (o) {
			return unitMatch(o.unit());
		};
		var wasChanging = this.isPerformingRemoveAll();
		this.isPerformingRemoveAll(true);
		try {
			if (includeRootTransaction && this.__rootTransaction != null) {
				unitMatch(this.__rootTransaction);
			}
			var topItem = this.__undoStack.count() == 0 ? null : this.__undoStack.peek();
			this.__undoStack.removeAll(historyItemMatch);
			if (topItem != null && (this.__undoStack.count() == 0 || this.__undoStack.peek() != topItem)) {
				this.clearCachedRedoStack();
			}
			var cachedRedoStack = this.__cachedRedoStack;
			if (cachedRedoStack != null) {
				var redo = cachedRedoStack.toArray();
				var removeCount = 0;
				for (var i = redo.length - 1; i >= 0; i--) {
					if (unitMatch(redo[i].unit())) {
						redo[i] = null;
						removeCount++;
					}
				}
				$.ig.Debug.prototype.assert1(this.__cachedRedoStack == cachedRedoStack, "Stack changed while removing?");
				if (this.__cachedRedoStack == cachedRedoStack) {
					if (removeCount == redo.length) {
						this.clearCachedRedoStack();
					} else if (removeCount > 0) {
						cachedRedoStack = new $.ig.Stack$1($.ig.UndoHistoryItem.prototype.$type);
						for (var i1 = redo.length - 1; i1 >= 0; i1--) {
							var item = redo[i1];
							if (item != null) {
								cachedRedoStack.push(item);
							}
						}
						this.__cachedRedoStack = cachedRedoStack;
					}
				}
			}
			this.__redoStack.removeAll(historyItemMatch);
		}
		finally {
			this.isPerformingRemoveAll(wasChanging);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Undo.UndoManager::RemoveAll(System.Func, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Undo.UndoManager::Resume()" />*/
	resume: function () {
		this.__suspendCount--;
		if (this.__suspendCount == 0) {
			this.onPropertyChanged("IsSuspended");
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Undo.UndoManager::Resume()" />*/
	,
	/*<BeginMethod Name="Infragistics.Undo.UndoTransaction Infragistics.Undo.UndoManager::StartTransaction(System.String, System.String)" />*/
	startTransaction: function (description, detailedDescription) {
		if (this.isSuspended()) {
			throw new $.ig.InvalidOperationException(1, $.ig.undo.locale.getString("LE_NewTransactionWhileSuspended"));
		}
		var group = this.createTransaction(description, detailedDescription);
		if (group == null) {
			throw new $.ig.InvalidOperationException(1, $.ig.undo.locale.getString("LE_FactoryNullTransaction"));
		}
		this.startTransaction1(group);
		return group;
	}
	/*<EndMethod Name="Infragistics.Undo.UndoTransaction Infragistics.Undo.UndoManager::StartTransaction(System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Undo.UndoManager::StartTransaction(Infragistics.Undo.UndoTransaction)" />*/
	startTransaction1: function (transaction) {
		$.ig.CoreUtilities.prototype.validateNotNull1(transaction, "group");
		if ($.ig.util.nullableNotEquals(transaction.openState(), null)) {
			throw new $.ig.InvalidOperationException(1, $.ig.undo.locale.getString("LE_TransactionAlreadyOpened"));
		}
		var leafGroup = this.currentTransaction();
		if (leafGroup != null) {
			leafGroup.add(transaction);
		}
		var parent = leafGroup == null ? this : leafGroup;
		transaction.open(parent);
	}
	/*<EndMethod Name="System.Void Infragistics.Undo.UndoManager::StartTransaction(Infragistics.Undo.UndoTransaction)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Undo.UndoManager::Suspend()" />*/
	suspend: function () {
		this.__suspendCount++;
		if (this.__suspendCount == 1) {
			this.onPropertyChanged("IsSuspended");
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Undo.UndoManager::Suspend()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Undo.UndoManager::Undo(System.Int32)" />*/
	undo: function (undoCount) {
		this.performUndoRedo(undoCount, true);
	}
	/*<EndMethod Name="System.Void Infragistics.Undo.UndoManager::Undo(System.Int32)" />*/
	,
	/*<BeginMethod Name="Infragistics.Undo.UndoUnit Infragistics.Undo.UndoManager::CreateChange(System.String, System.String, System.Func, System.Func, System.Object)" />*/
	createChange: function (description, detailedDescription, undoMethod, redoMethod, target) {
		var executeMethod = function (c) {
			var method = c.executeItemType() == $.ig.UndoHistoryItemType.prototype.redo ? redoMethod : undoMethod;
			if (null == method || !method(c)) {
				return false;
			}
			c.undoManager().addChange3(c.getUnit(0));
			return true;
		};
		return new $.ig.CustomUndoUnit(description, detailedDescription, executeMethod, target);
	}
	/*<EndMethod Name="Infragistics.Undo.UndoUnit Infragistics.Undo.UndoManager::CreateChange(System.String, System.String, System.Func, System.Func, System.Object)" />*/
	,
	/*<BeginMethod Name="Infragistics.Undo.UndoTransaction Infragistics.Undo.UndoManager::CreateTransaction(System.String, System.String)" />*/
	createTransaction: function (description, detailedDescription) {
		return new $.ig.UndoTransaction(description, detailedDescription);
	}
	/*<EndMethod Name="Infragistics.Undo.UndoTransaction Infragistics.Undo.UndoManager::CreateTransaction(System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.Undo.UndoManager::GetDefaultPropertyChangeDescription`1(System.Object, Infragistics.Undo.UndoManager.TProperty, Infragistics.Undo.UndoManager.TProperty, System.String, Infragistics.Undo.UndoHistoryItemType, System.Boolean)" />*/
	getDefaultPropertyChangeDescription$1: function ($tProperty, owner, oldValue, newValue, memberName, itemType, detailed) {
		var description = null;
		if (!String.isNullOrEmpty(memberName)) {
			var resourceName = detailed ? "PropertyChangeDescriptionDetailed" : "PropertyChangeDescription";
			var from = itemType == $.ig.UndoHistoryItemType.prototype.redo ? newValue : oldValue;
			var to = itemType == $.ig.UndoHistoryItemType.prototype.redo ? oldValue : newValue;
			description = $.ig.undo.locale.getString(resourceName, [ memberName, owner, $.ig.util.getBoxIfEnum($tProperty, from), $.ig.util.getBoxIfEnum($tProperty, to) ]);
		}
		return description;
	}
	/*<EndMethod Name="System.String Infragistics.Undo.UndoManager::GetDefaultPropertyChangeDescription`1(System.Object, Infragistics.Undo.UndoManager.TProperty, Infragistics.Undo.UndoManager.TProperty, System.String, Infragistics.Undo.UndoHistoryItemType, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Undo.UndoManager::OnTransactionOpenedOrClosed(Infragistics.Undo.UndoTransaction)" />*/
	onTransactionOpenedOrClosed: function (child) {
		this.__currentTransaction = null;
		this.onPropertyChanged("CurrentTransaction");
	}
	/*<EndMethod Name="System.Void Infragistics.Undo.UndoManager::OnTransactionOpenedOrClosed(Infragistics.Undo.UndoTransaction)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Undo.UndoManager::PerformUndoRedo(System.Int32, System.Boolean)" />*/
	performUndoRedo: function (count, isUndo) {
		if (count <= 0) {
			throw new $.ig.ArgumentOutOfRangeException(2, "count", $.ig.undo.locale.getString("LE_ArgumentIsNegative", [ "count", count ]));
		}
		if (this.isPerformingRedo() || this.isPerformingUndo()) {
			throw new $.ig.InvalidOperationException(1, $.ig.undo.locale.getString("LE_UndoRedoInUndoRedo"));
		}
		if (this.isPerformingRollback()) {
			throw new $.ig.InvalidOperationException(1, $.ig.undo.locale.getString("LE_UndoRedoInRollback"));
		}
		if (this.isSuspended()) {
			throw new $.ig.InvalidOperationException(1, $.ig.undo.locale.getString("LE_UndoRedoWhileSuspended"));
		}
		if (this.__rootTransaction != null) {
			throw new $.ig.InvalidOperationException(1, $.ig.undo.locale.getString("LE_UndoRedoInTransaction"));
		}
		this.verifyCanAffectHistory();
		if (!this.getBool(isUndo ? $.ig.UndoManager_BoolProperties.prototype.canUndo : $.ig.UndoManager_BoolProperties.prototype.canRedo)) {
			return;
		}
		$.ig.Debug.prototype.assert1(this.currentHistoryItem() == null, "The CurrentHistoryItem should only be valid during an undo/redo but we weren't allowing nested undo/redo");
		var isPerformingFlag = isUndo ? $.ig.UndoManager_BoolProperties.prototype.isPerformingUndo : $.ig.UndoManager_BoolProperties.prototype.isPerformingRedo;
		var reason = isUndo ? $.ig.UndoExecuteReason.prototype.undo : $.ig.UndoExecuteReason.prototype.redo;
		try {
			this.setBool(isPerformingFlag, true, true);
			this.clearCachedRedoStack();
			var history = isUndo ? this.__undoStack : this.__redoStack;
			var executeInfo = new $.ig.UndoExecuteContext(this, reason);
			if (history.count() > 0) {
				this.shouldPreventMerge(true);
			}
			for (var i = 0, max = Math.min(count, history.count()); i < max; i++) {
				var item = history.pop();
				this.currentHistoryItem(item);
				executeInfo.execute(item.unit());
			}
		}
		finally {
			this.currentHistoryItem(null);
			this.setBool(isPerformingFlag, false, true);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Undo.UndoManager::PerformUndoRedo(System.Int32, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Undo.UndoManager::Rollback(Infragistics.Undo.UndoUnit)" />*/
	rollback: function (unit) {
		var wasRollingBack = this.isPerformingRollback();
		try {
			this.isPerformingRollback(true);
			var executeInfo = new $.ig.UndoExecuteContext(this, $.ig.UndoExecuteReason.prototype.rollback);
			executeInfo.execute(unit);
		}
		finally {
			this.isPerformingRollback(wasRollingBack);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Undo.UndoManager::Rollback(Infragistics.Undo.UndoUnit)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Undo.UndoManager::VerifyCanClose(Infragistics.Undo.UndoTransaction)" />*/
	verifyCanClose: function (undoTransaction) {
		if (this.isSuspended()) {
			throw new $.ig.InvalidOperationException(1, $.ig.undo.locale.getString("LE_EndTransactionWhileSuspended"));
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Undo.UndoManager::VerifyCanClose(Infragistics.Undo.UndoTransaction)" />*/
	,
	/*<BeginMethod Name="Infragistics.Undo.UndoUnit Infragistics.Undo.UndoManager::AddChangeHelper(Infragistics.Undo.UndoUnit, System.Boolean)" />*/
	addChangeHelper: function (unit, allowTransaction) {
		if (unit == null) {
			return null;
		}
		if (this.isPerformingRollback()) {
			return null;
		}
		if (this.isSuspended()) {
			$.ig.Debug.prototype.assert1(!this.isPerformingRedo() && !this.isPerformingUndo(), "Changes were suspended while an Undo/Redo was in progress?");
			return null;
		}
		this.verifyCanAffectHistory();
		var group = $.ig.util.cast($.ig.UndoTransaction.prototype.$type, unit);
		if (group != null) {
			if ($.ig.util.nullableNotEquals(group.openState(), false)) {
				throw new $.ig.ArgumentException(1, $.ig.undo.locale.getString("LE_AddOpenTransaction"));
			}
			if (!allowTransaction) {
				throw new $.ig.ArgumentException(1, $.ig.undo.locale.getString("LE_AddTransactionDirect"));
			}
		}
		if (this.__rootTransaction != null) {
			var leaf = this.currentTransaction();
			var isUndoOrRedo = this.isPerformingRedo() || this.isPerformingUndo();
			if (!isUndoOrRedo) {
				var mergeResult = this.merge(leaf, unit);
				if (mergeResult != $.ig.UndoMergeAction.prototype.notMerged) {
					if (mergeResult == $.ig.UndoMergeAction.prototype.mergedRemoveUnit) {
						$.ig.Debug.prototype.assert1(leaf.isClosed() == false, "The transaction was closed?");
						leaf.cancel();
					}
					return null;
				}
				this.shouldPreventMerge(false);
			}
			leaf.add(unit);
			if (!isUndoOrRedo) {
				this.resetLastNewOperationTime();
			}
		} else {
			if (this.isPerformingUndo()) {
				this.clearCachedRedoStack();
				this.__redoStack.push(new $.ig.UndoHistoryItem(unit, $.ig.UndoHistoryItemType.prototype.redo, this));
			} else {
				var addToUndo = true;
				var isRedoing = this.isPerformingRedo();
				if (!isRedoing && this.__undoStack.count() > 0) {
					var item = this.__undoStack.peek();
					var mergeResult1 = this.merge(item.unit(), unit);
					if (mergeResult1 != $.ig.UndoMergeAction.prototype.notMerged) {
						this.resetLastNewOperationTime();
						addToUndo = false;
						if (mergeResult1 == $.ig.UndoMergeAction.prototype.merged) {
							item.resetDescription();
						} else {
							$.ig.Debug.prototype.assert1(mergeResult1 == $.ig.UndoMergeAction.prototype.mergedRemoveUnit, "Unexpected result");
							var oldItem = this.__undoStack.pop();
							$.ig.Debug.prototype.assert1(oldItem == item, "Different item popped off the stack?");
							this.restoreCachedRedoStack();
							this.preventMerge();
						}
					}
				}
				this.clearCachedRedoStack();
				if (addToUndo) {
					if (!isRedoing) {
						this.cacheRedoStack();
						this.__redoStack.clear();
						this.shouldPreventMerge(false);
					}
					var historyItem = new $.ig.UndoHistoryItem(unit, $.ig.UndoHistoryItemType.prototype.undo, this);
					this.__undoStack.push(historyItem);
					if (!isRedoing) {
						this.resetLastNewOperationTime();
					}
				}
			}
		}
		return unit;
	}
	/*<EndMethod Name="Infragistics.Undo.UndoUnit Infragistics.Undo.UndoManager::AddChangeHelper(Infragistics.Undo.UndoUnit, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Undo.UndoManager::CacheRedoStack()" />*/
	cacheRedoStack: function () {
		this.__cachedRedoStack = new $.ig.Stack$1($.ig.UndoHistoryItem.prototype.$type);
		var en = this.__redoStack.getEnumerator();
		while (en.moveNext()) {
			var item = en.current();
			this.__cachedRedoStack.push(item);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Undo.UndoManager::CacheRedoStack()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Undo.UndoManager::ClearCachedRedoStack()" />*/
	clearCachedRedoStack: function () {
		this.__cachedRedoStack = null;
	}
	/*<EndMethod Name="System.Void Infragistics.Undo.UndoManager::ClearCachedRedoStack()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Undo.UndoManager::GetBool(Infragistics.Undo.UndoManager_BoolProperties)" />*/
	getBool: function (property) {
		return (this.__boolFlags & property) == property;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Undo.UndoManager::GetBool(Infragistics.Undo.UndoManager_BoolProperties)" />*/
	,
	/*<BeginMethod Name="Infragistics.Undo.UndoMergeAction Infragistics.Undo.UndoManager::Merge(Infragistics.Undo.UndoUnit, Infragistics.Undo.UndoUnit)" />*/
	merge: function (previousUnit, unitToMerge) {
		var result = $.ig.UndoMergeAction.prototype.notMerged;
		if (this.allowMergingResolved()) {
			var canMerge = this.__mergeTimeout == (0);
			if (!canMerge) {
				var now = $.ig.Date.prototype.now();
				canMerge = (now - this.__lastNewOperation) <= this.__mergeTimeout;
			}
			if (canMerge) {
				try {
					$.ig.Debug.prototype.assert1(this.isMerging() == false, "We should not be a merging state while performing a merge");
					this.isMerging(true);
					var mergeInfo = new $.ig.UndoMergeContext(this, unitToMerge);
					result = previousUnit.merge(mergeInfo);
				}
				finally {
					this.isMerging(false);
				}
				if (result != $.ig.UndoMergeAction.prototype.notMerged) {
					this.resetLastNewOperationTime();
				}
			}
		}
		return result;
	}
	/*<EndMethod Name="Infragistics.Undo.UndoMergeAction Infragistics.Undo.UndoManager::Merge(Infragistics.Undo.UndoUnit, Infragistics.Undo.UndoUnit)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Undo.UndoManager::OnHistoryStackChanged(System.Object, System.Collections.Specialized.NotifyCollectionChangedEventArgs)" />*/
	onHistoryStackChanged: function (sender, e) {
		this.canUndo(this.__undoStack.count() > 0);
		this.canRedo(this.__redoStack.count() > 0);
		this.topUndoHistoryItem(this.canUndo() ? this.__undoStack.peek() : null);
		this.topRedoHistoryItem(this.canRedo() ? this.__redoStack.peek() : null);
	}
	/*<EndMethod Name="System.Void Infragistics.Undo.UndoManager::OnHistoryStackChanged(System.Object, System.Collections.Specialized.NotifyCollectionChangedEventArgs)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Undo.UndoManager::ResetLastNewOperationTime()" />*/
	resetLastNewOperationTime: function () {
		this.__lastNewOperation = $.ig.Date.prototype.now();
	}
	/*<EndMethod Name="System.Void Infragistics.Undo.UndoManager::ResetLastNewOperationTime()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Undo.UndoManager::RestoreCachedRedoStack()" />*/
	restoreCachedRedoStack: function () {
		if (this.__cachedRedoStack == null) {
			return;
		}
		$.ig.Debug.prototype.assert1(this.__redoStack.count() == 0, "RedoHistory already has items");
		var redoStack = this.__cachedRedoStack;
		this.clearCachedRedoStack();
		var en = redoStack.getEnumerator();
		while (en.moveNext()) {
			var item = en.current();
			this.__redoStack.push(item);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Undo.UndoManager::RestoreCachedRedoStack()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Undo.UndoManager::SetBool(Infragistics.Undo.UndoManager_BoolProperties, System.Boolean, System.Boolean)" />*/
	setBool: function (property, value, raisePropertyChange) {
		if (value == this.getBool(property)) {
			return false;
		}
		this.__boolFlags ^= property;
		this.onPropertyChanged($.ig.UndoManager_BoolProperties.prototype.$getName(property));
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Undo.UndoManager::SetBool(Infragistics.Undo.UndoManager_BoolProperties, System.Boolean, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Undo.UndoManager::VerifyCanAffectHistory()" />*/
	verifyCanAffectHistory: function () {
		if (this.isMerging()) {
			throw new $.ig.InvalidOperationException(1, $.ig.undo.locale.getString("LE_ChangeHistoryInMerge"));
		}
		if (this.isPerformingRemoveAll()) {
			throw new $.ig.InvalidOperationException(1, $.ig.undo.locale.getString("LE_ChangeHistoryInRemoveAll"));
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Undo.UndoManager::VerifyCanAffectHistory()" />*/
	,
	/*<BeginProperty Name="Infragistics.Undo.UndoManager Infragistics.Undo.UndoManager::Infragistics.Undo.IUndoTransactionOwner.UndoManager()" />*/
	undoManager: function () {
		return this;
	}
	/*<EndProperty Name="Infragistics.Undo.UndoManager Infragistics.Undo.UndoManager::Infragistics.Undo.IUndoTransactionOwner.UndoManager()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Undo.UndoManager::Infragistics.Undo.IUndoTransactionOwner.OnChildOpened(Infragistics.Undo.UndoTransaction)" />*/
	onChildOpened: function (child) {
		$.ig.CoreUtilities.prototype.validateNotNull1(child, "child");
		if (this.__rootTransaction != null) {
			throw new $.ig.InvalidOperationException(1, $.ig.undo.locale.getString("LE_HasOpenTransaction"));
		}
		if ($.ig.util.nullableNotEquals(child.openState(), true)) {
			throw new $.ig.ArgumentException(1, $.ig.undo.locale.getString("LE_TransactionNotOpened", [ child ]));
		}
		if (child.owner() != this) {
			throw new $.ig.ArgumentException(1, $.ig.undo.locale.getString("LE_InvalidTransactionOwner"));
		}
		this.rootTransaction(child);
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Undo.UndoManager::Infragistics.Undo.IUndoTransactionOwner.OnChildOpened(Infragistics.Undo.UndoTransaction)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Undo.UndoManager::Infragistics.Undo.IUndoTransactionOwner.OnChildClosed(Infragistics.Undo.UndoTransaction, Infragistics.Undo.UndoTransactionCloseAction)" />*/
	onChildClosed: function (child, closeAction) {
		$.ig.CoreUtilities.prototype.validateNotNull1(child, "child");
		if (child != this.__rootTransaction) {
			throw new $.ig.ArgumentException(1, $.ig.undo.locale.getString("LE_ClosingOtherTransaction", [ child, this.__rootTransaction ]));
		}
		this.rootTransaction(null);
		if (closeAction == $.ig.UndoTransactionCloseAction.prototype.commit && child.containsNonTransactionUnits()) {
			this.addChangeHelper(child, true);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Undo.UndoManager::Infragistics.Undo.IUndoTransactionOwner.OnChildClosed(Infragistics.Undo.UndoTransaction, Infragistics.Undo.UndoTransactionCloseAction)" />*/
	,
	$type: new $.ig.Type('UndoManager', $.ig.PropertyChangeNotifier.prototype.$type, [$.ig.IUndoTransactionOwner.prototype.$type])
}, true);

/*<EndType Name="Infragistics.Undo.UndoManager" />*/

/*<BeginType Name="Infragistics.Undo.UndoMergeContext" />*/

$.ig.util.defType('UndoMergeContext', 'Object', {
	__unitBeingAdded: null,
	__undoManager: null,
	init: function (undoManager, unitBeingAdded) {
		$.ig.Object.prototype.init.call(this);
		$.ig.CoreUtilities.prototype.validateNotNull1(undoManager, "undoManager");
		$.ig.CoreUtilities.prototype.validateNotNull1(unitBeingAdded, "unitBeingAdded");
		this.__undoManager = undoManager;
		this.__unitBeingAdded = unitBeingAdded;
	},
	/*<BeginProperty Name="Infragistics.Undo.UndoManager Infragistics.Undo.UndoMergeContext::UndoManager()" />*/
	undoManager: function () {
		return this.__undoManager;
	}
	/*<EndProperty Name="Infragistics.Undo.UndoManager Infragistics.Undo.UndoMergeContext::UndoManager()" />*/
	,
	/*<BeginProperty Name="Infragistics.Undo.UndoUnit Infragistics.Undo.UndoMergeContext::UnitBeingAdded()" />*/
	unitBeingAdded: function () {
		return this.__unitBeingAdded;
	}
	/*<EndProperty Name="Infragistics.Undo.UndoUnit Infragistics.Undo.UndoMergeContext::UnitBeingAdded()" />*/
	,
	$type: new $.ig.Type('UndoMergeContext', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Undo.UndoMergeContext" />*/

/*<BeginType Name="Infragistics.Undo.UndoUnit" />*/

$.ig.util.defType('UndoUnit', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginProperty Name="System.Object Infragistics.Undo.UndoUnit::Target()" />*/
	target: function () {
	}
	/*<EndProperty Name="System.Object Infragistics.Undo.UndoUnit::Target()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Undo.UndoUnit::Execute(Infragistics.Undo.UndoExecuteContext)" />*/
	execute: function (executeInfo) {
	}
	/*<EndMethod Name="System.Boolean Infragistics.Undo.UndoUnit::Execute(Infragistics.Undo.UndoExecuteContext)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Undo.UndoUnit::ForEach(System.Action)" />*/
	forEach: function (action) {
	}
	/*<EndMethod Name="System.Void Infragistics.Undo.UndoUnit::ForEach(System.Action)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.Undo.UndoUnit::GetDescription(Infragistics.Undo.UndoHistoryItemType, System.Boolean)" />*/
	getDescription: function (itemType, detailed) {
	}
	/*<EndMethod Name="System.String Infragistics.Undo.UndoUnit::GetDescription(Infragistics.Undo.UndoHistoryItemType, System.Boolean)" />*/
	,
	/*<BeginMethod Name="Infragistics.Undo.UndoMergeAction Infragistics.Undo.UndoUnit::Merge(Infragistics.Undo.UndoMergeContext)" />*/
	merge: function (mergeInfo) {
		return $.ig.UndoMergeAction.prototype.notMerged;
	}
	/*<EndMethod Name="Infragistics.Undo.UndoMergeAction Infragistics.Undo.UndoUnit::Merge(Infragistics.Undo.UndoMergeContext)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Undo.UndoUnit::RemoveAll(System.Func)" />*/
	removeAll: function (match) {
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Undo.UndoUnit::RemoveAll(System.Func)" />*/
	,
	$type: new $.ig.Type('UndoUnit', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Undo.UndoUnit" />*/

/*<BeginType Name="Infragistics.Undo.CustomUndoUnit" />*/

$.ig.util.defType('CustomUndoUnit', 'UndoUnit', {
	__target: null,
	__description: null,
	__detailedDescription: null,
	__executeMethod: null,
	init: function (description, detailedDescription, executeMethod, target) {
		$.ig.UndoUnit.prototype.init.call(this);
		$.ig.CoreUtilities.prototype.validateNotNull1(executeMethod, "executeMethod");
		this.__executeMethod = executeMethod;
		this.__description = description;
		this.__detailedDescription = detailedDescription;
		this.__target = target;
	},
	/*<BeginMethod Name="System.Boolean Infragistics.Undo.CustomUndoUnit::Execute(Infragistics.Undo.UndoExecuteContext)" />*/
	execute: function (executeInfo) {
		return this.__executeMethod(executeInfo);
	}
	/*<EndMethod Name="System.Boolean Infragistics.Undo.CustomUndoUnit::Execute(Infragistics.Undo.UndoExecuteContext)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.Undo.CustomUndoUnit::GetDescription(Infragistics.Undo.UndoHistoryItemType, System.Boolean)" />*/
	getDescription: function (itemType, detailed) {
		return detailed ? this.__detailedDescription : this.__description;
	}
	/*<EndMethod Name="System.String Infragistics.Undo.CustomUndoUnit::GetDescription(Infragistics.Undo.UndoHistoryItemType, System.Boolean)" />*/
	,
	/*<BeginProperty Name="System.Object Infragistics.Undo.CustomUndoUnit::Target()" />*/
	target: function () {
		return this.__target;
	}
	/*<EndProperty Name="System.Object Infragistics.Undo.CustomUndoUnit::Target()" />*/
	,
	$type: new $.ig.Type('CustomUndoUnit', $.ig.UndoUnit.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Undo.CustomUndoUnit" />*/

/*<BeginType Name="Infragistics.Undo.UndoTransaction" />*/

$.ig.util.defType('UndoTransaction', 'UndoUnit', {
	__unitsSource: null,
	__units: null,
	__parent: null,
	__isOpened: $.ig.util.toNullable($.ig.Boolean.prototype.$type, null),
	__openTransaction: null,
	__description: null,
	__descriptionDetailed: null,
	init: function (description, detailedDescription) {
		$.ig.UndoUnit.prototype.init.call(this);
		this.__description = description;
		this.__descriptionDetailed = detailedDescription;
		this.__unitsSource = new $.ig.StackList$1($.ig.UndoUnit.prototype.$type, 0);
		this.__units = new $.ig.ReadOnlyCollection$1($.ig.UndoUnit.prototype.$type, 1, this.__unitsSource);
	},
	/*<BeginMethod Name="System.Boolean Infragistics.Undo.UndoTransaction::Execute(Infragistics.Undo.UndoExecuteContext)" />*/
	execute: function (executeInfo) {
		if (this.__openTransaction != null) {
			throw new $.ig.InvalidOperationException(1, $.ig.undo.locale.getString("LE_CannotExecuteOpenTransaction", [ this.__openTransaction ]));
		}
		var executed = false;
		var transaction = this.startTransaction(executeInfo);
		try {
			var en = this.__unitsSource.getEnumerator();
			while (en.moveNext()) {
				var unit = en.current();
				if (executeInfo.execute(unit)) {
					executed = true;
				}
			}
		}
		finally {
			if (transaction != null && !transaction.isClosed()) {
				transaction.commit();
			}
		}
		return executed;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Undo.UndoTransaction::Execute(Infragistics.Undo.UndoExecuteContext)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Undo.UndoTransaction::ForEach(System.Action)" />*/
	forEach: function (action) {
		$.ig.UndoUnit.prototype.forEach.call(this, action);
		var en = this.__units.getEnumerator();
		while (en.moveNext()) {
			var child = en.current();
			action(child);
			child.forEach(action);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Undo.UndoTransaction::ForEach(System.Action)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.Undo.UndoTransaction::GetDescription(Infragistics.Undo.UndoHistoryItemType, System.Boolean)" />*/
	getDescription: function (itemType, detailed) {
		var description = detailed ? this.__descriptionDetailed : this.__description;
		if (description == null) {
			if (this.__unitsSource.count() > 0) {
				var en = this.__unitsSource.getEnumerator();
				while (en.moveNext()) {
					var undoUnit = en.current();
					description = this.__unitsSource.peek().getDescription(itemType, detailed);
					if (description != null) {
						break;
					}
				}
			}
			if (description == null) {
				description = $.ig.undo.locale.getString("FallbackTransactionDescription");
			}
		}
		return description;
	}
	/*<EndMethod Name="System.String Infragistics.Undo.UndoTransaction::GetDescription(Infragistics.Undo.UndoHistoryItemType, System.Boolean)" />*/
	,
	/*<BeginMethod Name="Infragistics.Undo.UndoMergeAction Infragistics.Undo.UndoTransaction::Merge(Infragistics.Undo.UndoMergeContext)" />*/
	merge: function (mergeInfo) {
		var result = $.ig.UndoMergeAction.prototype.notMerged;
		if ($.ig.util.nullableEquals(this.__isOpened, true) && this.__unitsSource.count() > 0) {
			var last = this.__unitsSource.peek();
			result = last.merge(mergeInfo);
			if (result == $.ig.UndoMergeAction.prototype.mergedRemoveUnit) {
				this.__unitsSource.pop();
				result = $.ig.UndoMergeAction.prototype.merged;
			}
		}
		return result;
	}
	/*<EndMethod Name="Infragistics.Undo.UndoMergeAction Infragistics.Undo.UndoTransaction::Merge(Infragistics.Undo.UndoMergeContext)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Undo.UndoTransaction::RemoveAll(System.Func)" />*/
	removeAll: function (match) {
		this.__unitsSource.removeAll(match);
		return this.__unitsSource.count() == 0;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Undo.UndoTransaction::RemoveAll(System.Func)" />*/
	,
	/*<BeginProperty Name="System.Object Infragistics.Undo.UndoTransaction::Target()" />*/
	target: function () {
		return null;
	}
	/*<EndProperty Name="System.Object Infragistics.Undo.UndoTransaction::Target()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.Undo.UndoTransaction::IsClosed()" />*/
	isClosed: function () {
		return $.ig.util.nullableEquals(this.__isOpened, false);
	}
	/*<EndProperty Name="System.Boolean Infragistics.Undo.UndoTransaction::IsClosed()" />*/
	,
	/*<BeginProperty Name="Infragistics.Undo.UndoTransaction Infragistics.Undo.UndoTransaction::OpenTransaction()" />*/
	openTransaction: function () {
		return this.__openTransaction;
	}
	/*<EndProperty Name="Infragistics.Undo.UndoTransaction Infragistics.Undo.UndoTransaction::OpenTransaction()" />*/
	,
	/*<BeginProperty Name="Infragistics.Undo.UndoTransaction Infragistics.Undo.UndoTransaction::Parent()" />*/
	parent: function () {
		return $.ig.util.cast($.ig.UndoTransaction.prototype.$type, this.__parent);
	}
	/*<EndProperty Name="Infragistics.Undo.UndoTransaction Infragistics.Undo.UndoTransaction::Parent()" />*/
	,
	/*<BeginProperty Name="System.Collections.Generic.IList Infragistics.Undo.UndoTransaction::Units()" />*/
	units: function () {
		return this.__units;
	}
	/*<EndProperty Name="System.Collections.Generic.IList Infragistics.Undo.UndoTransaction::Units()" />*/
	,
	/*<BeginProperty Name="System.Nullable Infragistics.Undo.UndoTransaction::OpenState()" />*/
	openState: function () {
		return this.__isOpened;
	}
	/*<EndProperty Name="System.Nullable Infragistics.Undo.UndoTransaction::OpenState()" />*/
	,
	/*<BeginProperty Name="Infragistics.Undo.IUndoTransactionOwner Infragistics.Undo.UndoTransaction::Owner()" />*/
	owner: function () {
		return this.__parent;
	}
	/*<EndProperty Name="Infragistics.Undo.IUndoTransactionOwner Infragistics.Undo.UndoTransaction::Owner()" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Undo.UndoTransaction::DebuggerDisplay()" />*/
	debuggerDisplay: function () {
		return $.ig.util.stringFormat("{1}: {0} items", this.__units.count(), this.getType().typeName());
	}
	/*<EndProperty Name="System.String Infragistics.Undo.UndoTransaction::DebuggerDisplay()" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Undo.UndoTransaction::Description()" />*/
	description: function () {
		return this.__description;
	}
	/*<EndProperty Name="System.String Infragistics.Undo.UndoTransaction::Description()" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.Undo.UndoTransaction::DetailedDescription()" />*/
	detailedDescription: function () {
		return this.__descriptionDetailed;
	}
	/*<EndProperty Name="System.String Infragistics.Undo.UndoTransaction::DetailedDescription()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Undo.UndoTransaction::Close(Infragistics.Undo.UndoTransactionCloseAction)" />*/
	close: function (closeAction) {
		this.verifyCanModify();
		var mgr = this.__parent.undoManager();
		$.ig.Debug.prototype.assert(null != mgr);
		mgr.verifyCanClose(this);
		if (this.__openTransaction != null) {
			this.__openTransaction.close(closeAction);
		}
		this.__isOpened = $.ig.util.toNullable($.ig.Boolean.prototype.$type, false);
		if (closeAction == $.ig.UndoTransactionCloseAction.prototype.rollback) {
			mgr.rollback(this);
		}
		this.__parent.onChildClosed(this, closeAction);
		mgr.onTransactionOpenedOrClosed(this);
	}
	/*<EndMethod Name="System.Void Infragistics.Undo.UndoTransaction::Close(Infragistics.Undo.UndoTransactionCloseAction)" />*/
	,
	/*<BeginMethod Name="Infragistics.Undo.UndoTransaction Infragistics.Undo.UndoTransaction::StartTransaction(Infragistics.Undo.UndoExecuteContext)" />*/
	startTransaction: function (executeInfo) {
		switch (executeInfo.reason()) {
			case $.ig.UndoExecuteReason.prototype.rollback: return null;
			case $.ig.UndoExecuteReason.prototype.undo:
			case $.ig.UndoExecuteReason.prototype.redo:
				var t = this.createExecuteTransaction(executeInfo);
				if (t != null) {
					executeInfo.undoManager().startTransaction1(t);
				}
				return t;
			default:
				$.ig.Debug.prototype.assert1(false, "Unrecognized reason:" + $.ig.UndoExecuteReason.prototype.$getName(executeInfo.reason()));
				return null;
		}
	}
	/*<EndMethod Name="Infragistics.Undo.UndoTransaction Infragistics.Undo.UndoTransaction::StartTransaction(Infragistics.Undo.UndoExecuteContext)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Undo.UndoTransaction::VerifyCanModify()" />*/
	verifyCanModify: function () {
		if ($.ig.util.nullableEquals(this.__isOpened, null)) {
			throw new $.ig.InvalidOperationException(1, $.ig.undo.locale.getString("LE_TransactionNotStarted"));
		}
		if ($.ig.util.nullableEquals(this.__isOpened, false)) {
			throw new $.ig.InvalidOperationException(1, $.ig.undo.locale.getString("LE_TransactionClosed"));
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Undo.UndoTransaction::VerifyCanModify()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Undo.UndoTransaction::Add(Infragistics.Undo.UndoUnit)" />*/
	add: function (unit) {
		$.ig.CoreUtilities.prototype.validateNotNull1(unit, "unit");
		this.verifyCanModify();
		if (this.__openTransaction != null) {
			throw new $.ig.InvalidOperationException(1, $.ig.undo.locale.getString("LE_AddUnitWhileOpenTransaction", [ this.__openTransaction ]));
		}
		this.__unitsSource.push(unit);
	}
	/*<EndMethod Name="System.Void Infragistics.Undo.UndoTransaction::Add(Infragistics.Undo.UndoUnit)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Undo.UndoTransaction::Cancel()" />*/
	cancel: function () {
		this.close($.ig.UndoTransactionCloseAction.prototype.cancel);
	}
	/*<EndMethod Name="System.Void Infragistics.Undo.UndoTransaction::Cancel()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Undo.UndoTransaction::ContainsNonTransactionUnits()" />*/
	containsNonTransactionUnits: function () {
		var en = this.__unitsSource.getEnumerator();
		while (en.moveNext()) {
			var unit = en.current();
			var transaction = $.ig.util.cast($.ig.UndoTransaction.prototype.$type, unit);
			if (null != transaction) {
				if (transaction.containsNonTransactionUnits()) {
					return true;
				}
			} else {
				return true;
			}
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Undo.UndoTransaction::ContainsNonTransactionUnits()" />*/
	,
	/*<BeginMethod Name="Infragistics.Undo.UndoTransaction Infragistics.Undo.UndoTransaction::GetLeafOpenGroup(Infragistics.Undo.UndoTransaction)" />*/
	getLeafOpenGroup: function (group) {
		$.ig.CoreUtilities.prototype.validateNotNull1(group, "group");
		if ($.ig.util.nullableNotEquals(group.openState(), true)) {
			throw new $.ig.ArgumentException(1, $.ig.undo.locale.getString("LE_TransactionNotOpened", [ group ]));
		}
		while (group.openTransaction() != null) {
			group = group.openTransaction();
		}
		return group;
	}
	/*<EndMethod Name="Infragistics.Undo.UndoTransaction Infragistics.Undo.UndoTransaction::GetLeafOpenGroup(Infragistics.Undo.UndoTransaction)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Undo.UndoTransaction::Open(Infragistics.Undo.IUndoTransactionOwner)" />*/
	open: function (parent) {
		$.ig.CoreUtilities.prototype.validateNotNull1(parent, "parent");
		if ($.ig.util.nullableNotEquals(this.__isOpened, null)) {
			throw new $.ig.InvalidOperationException(1, $.ig.undo.locale.getString("LE_TransactionAlreadyOpened"));
		}
		$.ig.Debug.prototype.assert1(this.__parent == null, "Already have a parent?");
		this.__parent = parent;
		this.__isOpened = $.ig.util.toNullable($.ig.Boolean.prototype.$type, true);
		if (!parent.onChildOpened(this)) {
			this.__isOpened = $.ig.util.toNullable($.ig.Boolean.prototype.$type, null);
			this.__parent = null;
		} else {
			parent.undoManager().onTransactionOpenedOrClosed(this);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Undo.UndoTransaction::Open(Infragistics.Undo.IUndoTransactionOwner)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Undo.UndoTransaction::Commit()" />*/
	commit: function () {
		this.close($.ig.UndoTransactionCloseAction.prototype.commit);
	}
	/*<EndMethod Name="System.Void Infragistics.Undo.UndoTransaction::Commit()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Undo.UndoTransaction::Rollback()" />*/
	rollback: function () {
		this.close($.ig.UndoTransactionCloseAction.prototype.rollback);
	}
	/*<EndMethod Name="System.Void Infragistics.Undo.UndoTransaction::Rollback()" />*/
	,
	/*<BeginMethod Name="Infragistics.Undo.UndoTransaction Infragistics.Undo.UndoTransaction::CreateExecuteTransaction(Infragistics.Undo.UndoExecuteContext)" />*/
	createExecuteTransaction: function (executeInfo) {
		return executeInfo.undoManager().createTransaction(this.__description, this.__descriptionDetailed);
	}
	/*<EndMethod Name="Infragistics.Undo.UndoTransaction Infragistics.Undo.UndoTransaction::CreateExecuteTransaction(Infragistics.Undo.UndoExecuteContext)" />*/
	,
	/*<BeginProperty Name="Infragistics.Undo.UndoManager Infragistics.Undo.UndoTransaction::Infragistics.Undo.IUndoTransactionOwner.UndoManager()" />*/
	undoManager: function () {
		return this.__parent.undoManager();
	}
	/*<EndProperty Name="Infragistics.Undo.UndoManager Infragistics.Undo.UndoTransaction::Infragistics.Undo.IUndoTransactionOwner.UndoManager()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Undo.UndoTransaction::Infragistics.Undo.IUndoTransactionOwner.OnChildOpened(Infragistics.Undo.UndoTransaction)" />*/
	onChildOpened: function (child) {
		$.ig.CoreUtilities.prototype.validateNotNull1(child, "child");
		this.verifyCanModify();
		if (this.__openTransaction != null) {
			throw new $.ig.InvalidOperationException(1, $.ig.undo.locale.getString("LE_HasOpenTransaction"));
		}
		if (!this.__unitsSource.contains(child)) {
			throw new $.ig.ArgumentException(1, $.ig.undo.locale.getString("LE_ChildTransactionNotInUnits", [ child ]));
		}
		if ($.ig.util.nullableNotEquals(child.openState(), true)) {
			throw new $.ig.ArgumentException(1, $.ig.undo.locale.getString("LE_TransactionNotOpened", [ child ]));
		}
		if (child.owner() != this) {
			throw new $.ig.ArgumentException(1, $.ig.undo.locale.getString("LE_InvalidTransactionOwner"));
		}
		this.__openTransaction = child;
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Undo.UndoTransaction::Infragistics.Undo.IUndoTransactionOwner.OnChildOpened(Infragistics.Undo.UndoTransaction)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Undo.UndoTransaction::Infragistics.Undo.IUndoTransactionOwner.OnChildClosed(Infragistics.Undo.UndoTransaction, Infragistics.Undo.UndoTransactionCloseAction)" />*/
	onChildClosed: function (child, closeAction) {
		$.ig.CoreUtilities.prototype.validateNotNull1(child, "child");
		this.verifyCanModify();
		if (child != this.__openTransaction) {
			throw new $.ig.ArgumentException(1, $.ig.undo.locale.getString("LE_ClosingOtherTransaction", [ child, this.__openTransaction ]));
		}
		this.__openTransaction = null;
		if (closeAction != $.ig.UndoTransactionCloseAction.prototype.commit || !child.containsNonTransactionUnits()) {
			$.ig.Debug.prototype.assert1(child == this.__unitsSource.peek(), "Not the last item in the group?");
			this.__unitsSource.pop();
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Undo.UndoTransaction::Infragistics.Undo.IUndoTransactionOwner.OnChildClosed(Infragistics.Undo.UndoTransaction, Infragistics.Undo.UndoTransactionCloseAction)" />*/
	,
	$type: new $.ig.Type('UndoTransaction', $.ig.UndoUnit.prototype.$type, [$.ig.IUndoTransactionOwner.prototype.$type])
}, true);

/*<EndType Name="Infragistics.Undo.UndoTransaction" />*/

/*<BeginType Name="Infragistics.Undo.Utils" />*/

$.ig.util.defType('Utils', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	$type: new $.ig.Type('Utils', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Undo.Utils" />*/

/*<BeginType Name="Infragistics.Collections.ReadOnlyNotifyCollection`1" />*/

$.ig.util.defType('ReadOnlyNotifyCollection$1', 'Object', {
	$t: null,
	__source: null,
	__propChangeListeners: null,
	init: function ($t, source) {
		this.$t = $t;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$t);
		}
		$.ig.Object.prototype.init.call(this);
		this.setSourceCollection(source);
	},
	collectionChanged: null,
	/*<BeginProperty Name="Infragistics.Collections.ReadOnlyNotifyCollection.T Infragistics.Collections.ReadOnlyNotifyCollection`1::Item(System.Int32)" />*/
	item: function (index, value) {
		if (arguments.length === 2) {
			$.ig.CoreUtilities.prototype.raiseReadOnlyCollectionException();
			return value;
		} else {
			return this.__source.item(index);
		}
	}
	/*<EndProperty Name="Infragistics.Collections.ReadOnlyNotifyCollection.T Infragistics.Collections.ReadOnlyNotifyCollection`1::Item(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Collections.ReadOnlyNotifyCollection`1::Contains(Infragistics.Collections.ReadOnlyNotifyCollection.T)" />*/
	contains: function (item) {
		return this.__source.contains(item);
	}
	/*<EndMethod Name="System.Boolean Infragistics.Collections.ReadOnlyNotifyCollection`1::Contains(Infragistics.Collections.ReadOnlyNotifyCollection.T)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Collections.ReadOnlyNotifyCollection`1::CopyTo(, System.Int32)" />*/
	copyTo: function (array, arrayIndex) {
		$.ig.CoreUtilities.prototype.copyTo$1(this.$t, this.__source, array, arrayIndex);
	}
	/*<EndMethod Name="System.Void Infragistics.Collections.ReadOnlyNotifyCollection`1::CopyTo(, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerator Infragistics.Collections.ReadOnlyNotifyCollection`1::GetEnumerator()" />*/
	getEnumerator: function () {
		return this.__source.getEnumerator();
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerator Infragistics.Collections.ReadOnlyNotifyCollection`1::GetEnumerator()" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.Collections.ReadOnlyNotifyCollection`1::IndexOf(Infragistics.Collections.ReadOnlyNotifyCollection.T)" />*/
	indexOf: function (item) {
		return this.__source.indexOf(item);
	}
	/*<EndMethod Name="System.Int32 Infragistics.Collections.ReadOnlyNotifyCollection`1::IndexOf(Infragistics.Collections.ReadOnlyNotifyCollection.T)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Collections.ReadOnlyNotifyCollection`1::OnSourceCollectionChanged(System.Object, System.Collections.Specialized.NotifyCollectionChangedEventArgs)" />*/
	onSourceCollectionChanged: function (sender, e) {
		this.raiseCollectionChanged(e, true);
	}
	/*<EndMethod Name="System.Void Infragistics.Collections.ReadOnlyNotifyCollection`1::OnSourceCollectionChanged(System.Object, System.Collections.Specialized.NotifyCollectionChangedEventArgs)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Collections.ReadOnlyNotifyCollection`1::OnSourcePropertyChanged(System.Object, System.ComponentModel.PropertyChangedEventArgs)" />*/
	onSourcePropertyChanged: function (sender, e) {
		this.raisePropertyChanged(e, true);
	}
	/*<EndMethod Name="System.Void Infragistics.Collections.ReadOnlyNotifyCollection`1::OnSourcePropertyChanged(System.Object, System.ComponentModel.PropertyChangedEventArgs)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Collections.ReadOnlyNotifyCollection`1::RaiseCollectionChanged(System.Collections.Specialized.NotifyCollectionChangedEventArgs, System.Boolean)" />*/
	raiseCollectionChanged: function (eventArgs, notifyListeners) {
		var handler = this.collectionChanged;
		if (handler != null) {
			handler(this, eventArgs);
		}
		if (notifyListeners && null != this.__propChangeListeners) {
			this.__propChangeListeners.onCollectionChanged(this, eventArgs);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Collections.ReadOnlyNotifyCollection`1::RaiseCollectionChanged(System.Collections.Specialized.NotifyCollectionChangedEventArgs, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Collections.ReadOnlyNotifyCollection`1::RaiseCollectionReset()" />*/
	raiseCollectionReset: function () {
		this.raisePropertyChanged(new $.ig.PropertyChangedEventArgs("Count"), true);
		this.raisePropertyChanged(new $.ig.PropertyChangedEventArgs("Item[]"), true);
		this.raiseCollectionChanged(new $.ig.NotifyCollectionChangedEventArgs(0, $.ig.NotifyCollectionChangedAction.prototype.reset), true);
	}
	/*<EndMethod Name="System.Void Infragistics.Collections.ReadOnlyNotifyCollection`1::RaiseCollectionReset()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Collections.ReadOnlyNotifyCollection`1::RaisePropertyChanged(System.ComponentModel.PropertyChangedEventArgs, System.Boolean)" />*/
	raisePropertyChanged: function (eventArgs, notifyListeners) {
		var handler = this.propertyChanged;
		if (handler != null) {
			handler(this, eventArgs);
		}
		if (notifyListeners && null != this.__propChangeListeners) {
			this.__propChangeListeners.onPropertyValueChanged(this, eventArgs.propertyName(), eventArgs);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Collections.ReadOnlyNotifyCollection`1::RaisePropertyChanged(System.ComponentModel.PropertyChangedEventArgs, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Collections.ReadOnlyNotifyCollection`1::SetSourceCollection(System.Collections.Generic.IList)" />*/
	setSourceCollection: function (source) {
		$.ig.CoreUtilities.prototype.validateNotNull(source);
		if (this.__source != source) {
			this.hookUnhook(this.__source, false);
			this.__source = source;
			this.hookUnhook(this.__source, true);
			this.raiseCollectionReset();
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Collections.ReadOnlyNotifyCollection`1::SetSourceCollection(System.Collections.Generic.IList)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Collections.ReadOnlyNotifyCollection`1::HookUnhook(System.Object, System.Boolean)" />*/
	hookUnhook: function (source, hook) {
		if (null != source) {
			var scn = $.ig.util.cast($.ig.ISupportPropertyChangeNotifications.prototype.$type, source);
			if (null != scn) {
				if (hook) {
					scn.addListener(this.propChangeListeners(), false);
				} else {
					scn.removeListener(this.propChangeListeners());
				}
			} else {
				var notifyCollection = $.ig.util.cast($.ig.INotifyCollectionChanged.prototype.$type, this.__source);
				if (null != notifyCollection) {
					if (hook) {
						notifyCollection.collectionChanged = $.ig.Delegate.prototype.combine(notifyCollection.collectionChanged, this.onSourceCollectionChanged.runOn(this));
					} else {
						notifyCollection.collectionChanged = $.ig.Delegate.prototype.remove(notifyCollection.collectionChanged, this.onSourceCollectionChanged.runOn(this));
					}
				} else {
				}
				var notifyProperty = $.ig.util.cast($.ig.INotifyPropertyChanged.prototype.$type, this.__source);
				if (null != notifyProperty) {
					if (hook) {
						notifyProperty.propertyChanged = $.ig.Delegate.prototype.combine(notifyProperty.propertyChanged, this.onSourcePropertyChanged.runOn(this));
					} else {
						notifyProperty.propertyChanged = $.ig.Delegate.prototype.remove(notifyProperty.propertyChanged, this.onSourcePropertyChanged.runOn(this));
					}
				}
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Collections.ReadOnlyNotifyCollection`1::HookUnhook(System.Object, System.Boolean)" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Collections.ReadOnlyNotifyCollection`1::Count()" />*/
	count: function () {
		return this.__source.count();
	}
	/*<EndProperty Name="System.Int32 Infragistics.Collections.ReadOnlyNotifyCollection`1::Count()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.Collections.ReadOnlyNotifyCollection`1::IsReadOnly()" />*/
	isReadOnly: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean Infragistics.Collections.ReadOnlyNotifyCollection`1::IsReadOnly()" />*/
	,
	/*<BeginProperty Name="System.Collections.Generic.IList Infragistics.Collections.ReadOnlyNotifyCollection`1::Source()" />*/
	source: function () {
		return this.__source;
	}
	/*<EndProperty Name="System.Collections.Generic.IList Infragistics.Collections.ReadOnlyNotifyCollection`1::Source()" />*/
	,
	/*<BeginProperty Name="Infragistics.PropertyChangeListenerList Infragistics.Collections.ReadOnlyNotifyCollection`1::PropChangeListeners()" />*/
	propChangeListeners: function () {
		if (null == this.__propChangeListeners) {
			this.__propChangeListeners = new $.ig.PropertyChangeListenerList();
			this.__propChangeListeners.add(new $.ig.PropertyChangeListener$1($.ig.ReadOnlyNotifyCollection$1.prototype.$type.specialize(this.$t), this, this.onListenersSubObjectPropertyChanged.runOn(this), true), false);
		}
		return this.__propChangeListeners;
	}
	/*<EndProperty Name="Infragistics.PropertyChangeListenerList Infragistics.Collections.ReadOnlyNotifyCollection`1::PropChangeListeners()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Collections.ReadOnlyNotifyCollection`1::OnListenersSubObjectPropertyChanged(Infragistics.Collections.ReadOnlyNotifyCollection, System.Object, System.String, System.Object)" />*/
	onListenersSubObjectPropertyChanged: function (owner, sender, property, extraInfo) {
		if (sender == this.__source) {
			var e = $.ig.util.cast($.ig.NotifyCollectionChangedEventArgs.prototype.$type, extraInfo);
			if (null != e) {
				this.raiseCollectionChanged(e, true);
			} else {
				var propArgs = $.ig.util.cast($.ig.PropertyChangedEventArgs.prototype.$type, extraInfo);
				if (null != propArgs) {
					this.raisePropertyChanged(propArgs, true);
				}
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Collections.ReadOnlyNotifyCollection`1::OnListenersSubObjectPropertyChanged(Infragistics.Collections.ReadOnlyNotifyCollection, System.Object, System.String, System.Object)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Collections.ReadOnlyNotifyCollection`1::System.Collections.Generic.IList<T>.Insert(System.Int32, Infragistics.Collections.ReadOnlyNotifyCollection.T)" />*/
	insert: function (index, item) {
		$.ig.CoreUtilities.prototype.raiseReadOnlyCollectionException();
	}
	/*<EndMethod Name="System.Void Infragistics.Collections.ReadOnlyNotifyCollection`1::System.Collections.Generic.IList<T>.Insert(System.Int32, Infragistics.Collections.ReadOnlyNotifyCollection.T)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Collections.ReadOnlyNotifyCollection`1::System.Collections.Generic.IList<T>.RemoveAt(System.Int32)" />*/
	removeAt: function (index) {
		$.ig.CoreUtilities.prototype.raiseReadOnlyCollectionException();
	}
	/*<EndMethod Name="System.Void Infragistics.Collections.ReadOnlyNotifyCollection`1::System.Collections.Generic.IList<T>.RemoveAt(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Collections.ReadOnlyNotifyCollection`1::System.Collections.Generic.ICollection<T>.Add(Infragistics.Collections.ReadOnlyNotifyCollection.T)" />*/
	add: function (item) {
		$.ig.CoreUtilities.prototype.raiseReadOnlyCollectionException();
	}
	/*<EndMethod Name="System.Void Infragistics.Collections.ReadOnlyNotifyCollection`1::System.Collections.Generic.ICollection<T>.Add(Infragistics.Collections.ReadOnlyNotifyCollection.T)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Collections.ReadOnlyNotifyCollection`1::System.Collections.Generic.ICollection<T>.Clear()" />*/
	clear: function () {
		$.ig.CoreUtilities.prototype.raiseReadOnlyCollectionException();
	}
	/*<EndMethod Name="System.Void Infragistics.Collections.ReadOnlyNotifyCollection`1::System.Collections.Generic.ICollection<T>.Clear()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Collections.ReadOnlyNotifyCollection`1::System.Collections.Generic.ICollection<T>.Remove(Infragistics.Collections.ReadOnlyNotifyCollection.T)" />*/
	remove: function (item) {
		$.ig.CoreUtilities.prototype.raiseReadOnlyCollectionException();
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Collections.ReadOnlyNotifyCollection`1::System.Collections.Generic.ICollection<T>.Remove(Infragistics.Collections.ReadOnlyNotifyCollection.T)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Collections.ReadOnlyNotifyCollection`1::Infragistics.ITypedSupportPropertyChangeNotifications<System.Object,System.String>.AddListener(Infragistics.ITypedPropertyChangeListener, System.Boolean)" />*/
	addListener: function (listener, useWeakReference) {
		this.propChangeListeners().add(listener, useWeakReference);
	}
	/*<EndMethod Name="System.Void Infragistics.Collections.ReadOnlyNotifyCollection`1::Infragistics.ITypedSupportPropertyChangeNotifications<System.Object,System.String>.AddListener(Infragistics.ITypedPropertyChangeListener, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Collections.ReadOnlyNotifyCollection`1::Infragistics.ITypedSupportPropertyChangeNotifications<System.Object,System.String>.RemoveListener(Infragistics.ITypedPropertyChangeListener)" />*/
	removeListener: function (listener) {
		this.propChangeListeners().remove(listener);
	}
	/*<EndMethod Name="System.Void Infragistics.Collections.ReadOnlyNotifyCollection`1::Infragistics.ITypedSupportPropertyChangeNotifications<System.Object,System.String>.RemoveListener(Infragistics.ITypedPropertyChangeListener)" />*/
	,
	propertyChanged: null,
	$type: new $.ig.Type('ReadOnlyNotifyCollection$1', $.ig.Object.prototype.$type, [$.ig.IList$1.prototype.$type.specialize(0), $.ig.INotifyCollectionChanged.prototype.$type, $.ig.ISupportPropertyChangeNotifications.prototype.$type, $.ig.INotifyPropertyChanged.prototype.$type])
}, true);

/*<EndType Name="Infragistics.Collections.ReadOnlyNotifyCollection`1" />*/

/*<BeginType Name="Infragistics.Collections.TypedEnumerable`1" />*/

$.ig.util.defType('TypedEnumerable$1', 'Object', {
	$t: null,
	__e: null,
	init: function ($t, e) {
		this.$t = $t;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$t);
		}
		$.ig.Object.prototype.init.call(this);
		this.__e = e || new Array(0);
	},
	/*<BeginMethod Name="System.Void Infragistics.Collections.TypedEnumerable`1::ResetSourceEnumerable(System.Collections.IEnumerable)" />*/
	resetSourceEnumerable: function (e) {
		this.__e = e || new Array(0);
	}
	/*<EndMethod Name="System.Void Infragistics.Collections.TypedEnumerable`1::ResetSourceEnumerable(System.Collections.IEnumerable)" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerator Infragistics.Collections.TypedEnumerable`1::GetEnumerator()" />*/
	getEnumerator: function () {
		return new $.ig.TypedEnumerable_Enumerator$1(this.$t, this.__e.getEnumerator());
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerator Infragistics.Collections.TypedEnumerable`1::GetEnumerator()" />*/
	,
	$type: new $.ig.Type('TypedEnumerable$1', $.ig.Object.prototype.$type, [$.ig.IEnumerable$1.prototype.$type.specialize(0)])
}, true);

/*<EndType Name="Infragistics.Collections.TypedEnumerable`1" />*/

/*<BeginType Name="Infragistics.Collections.TypedEnumerable_Enumerator`1" />*/

$.ig.util.defType('TypedEnumerable_Enumerator$1', 'Object', {
	$t: null,
	__e: null,
	init: function ($t, e) {
		this.$t = $t;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$t);
		}
		$.ig.Object.prototype.init.call(this);
		this.__e = e;
	},
	/*<BeginMethod Name="System.Void Infragistics.Collections.TypedEnumerable_Enumerator`1::Reset()" />*/
	reset: function () {
		this.__e.reset();
	}
	/*<EndMethod Name="System.Void Infragistics.Collections.TypedEnumerable_Enumerator`1::Reset()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Collections.TypedEnumerable_Enumerator`1::MoveNext()" />*/
	moveNext: function () {
		return this.__e.moveNext();
	}
	/*<EndMethod Name="System.Boolean Infragistics.Collections.TypedEnumerable_Enumerator`1::MoveNext()" />*/
	,
	/*<BeginProperty Name="Infragistics.Collections.TypedEnumerable_Enumerator.T Infragistics.Collections.TypedEnumerable_Enumerator`1::Current()" />*/
	current: function () {
		return $.ig.util.castObjTo$t(this.$t, this.__e.current());
	}
	/*<EndProperty Name="Infragistics.Collections.TypedEnumerable_Enumerator.T Infragistics.Collections.TypedEnumerable_Enumerator`1::Current()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Collections.TypedEnumerable_Enumerator`1::Dispose()" />*/
	dispose: function () {
	}
	/*<EndMethod Name="System.Void Infragistics.Collections.TypedEnumerable_Enumerator`1::Dispose()" />*/
	,
	$type: new $.ig.Type('TypedEnumerable_Enumerator$1', $.ig.Object.prototype.$type, [$.ig.IEnumerator$1.prototype.$type.specialize(0)])
}, true);

/*<EndType Name="Infragistics.Collections.TypedEnumerable_Enumerator`1" />*/

/*<BeginStatics Name="AssemblyRef" />*/

$.ig.AssemblyRef.prototype.baseResourceName = "Infragistics.Undo.strings";
$.ig.AssemblyRef.prototype.assemblyName = $.ig.AssemblyVersion.prototype.assemblyNamePrefix + ".Undo" + $.ig.AssemblyVersion.prototype.assemblyNameSuffix;
$.ig.AssemblyRef.prototype.assemblyProduct = $.ig.AssemblyVersion.prototype.product;
$.ig.AssemblyRef.prototype.assemblyDescriptionBase = "Undo Library for " + $.ig.AssemblyVersion.prototype.platform;
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
$.ig.AssemblyVersion.prototype.assemblyNamePrefix = "InfragisticsWPF3";
$.ig.AssemblyVersion.prototype.assemblyNameSuffix = ".v" + $.ig.AssemblyVersion.prototype.majorMinor;
$.ig.AssemblyVersion.prototype.platform = "Javascript";
$.ig.AssemblyVersion.prototype.product = "Infragistics Ultimate";
$.ig.AssemblyVersion.prototype.productTitleSuffix = " [" + $.ig.AssemblyVersion.prototype.configuration + "]";
/*<EndStatics Name="Infragistics.AssemblyVersion" />*/

/*<BeginStatics Name="Infragistics.Undo.StackList`1" />*/

$.ig.StackList$1.prototype.defaultMaxCapacity = 0;
/*<EndStatics Name="Infragistics.Undo.StackList" />*/

/*<BeginStatics Name="Infragistics.Undo.StackList_Enumerator`1" />*/

$.ig.StackList_Enumerator$1.prototype._enumeratorEnded = -1;
$.ig.StackList_Enumerator$1.prototype._enumeratorNotStarted = -2;
/*<EndStatics Name="Infragistics.Undo.StackList_Enumerator" />*/


/*<BeginFooter/>*/
}));// REMOVE_FROM_COMBINED_FILES
/*<EndFooter/>*/

