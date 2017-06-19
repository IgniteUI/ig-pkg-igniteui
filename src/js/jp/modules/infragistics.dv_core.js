/*!@license
* Infragistics.Web.ClientUI infragistics.dv_core.js 17.1.20171.1012
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
*     infragistics.ext_ui.js
*/
/*<BeginHeader/>*/
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		define( [
			'./infragistics.util',
			'./infragistics.ext_core',
			'./infragistics.ext_collections',
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
$.ig.globalDefs.$$w = $$t;
$$0 = $.ig.globalDefs.$$0;
$$4 = $.ig.globalDefs.$$4;
$$1 = $.ig.globalDefs.$$1;
$$6 = $.ig.globalDefs.$$6;
$$a = $.ig.globalDefs.$$a;
$.ig.$currDefinitions = $$t;
$.ig.util.bulkDefine([
"ITickProvider:f",
"IFastItemsSourceProvider:o",
"IFastItemsSource:p",
"IRenderer:r",
"EasingFunctionHandler:y",
"FontUtil:aa",
"FontInfo:ab",
"RenderingContext:ad",
"DoubleValueChangedEventHandler:ah",
"IErrorBarCalculator:ak",
"IFastItemColumn$1:an",
"IFastItemColumnPropertyName:ao",
"IFastItemColumnInternal:ap",
"RectChangedEventHandler:ar",
"IPool$1:az",
"IIndexedPool$1:a0",
"IHashPool$2:a1",
"IVisualData:a8",
"BaseDOMEventProxy:cb",
"DOMEventProxy:cc",
"IOverviewPlusDetailControl:ce",
"IOverviewPlusDetailPane:cf",
"ISchedulableRender:ch",
"MouseWheelHandler:cj",
"GestureHandler:ck",
"ZoomGestureHandler:cl",
"FlingGestureHandler:cm",
"TouchHandler:cn",
"ContactHandler:co",
"MouseHandler:cp",
"MouseOverHandler:cq",
"KeyHandler:cr",
"TouchGestureEventHandler:cw",
"CancelableTouchGestureEventHandler:cx",
"IExecutionContext:c4",
"ExecutionContextExecuteCallback:c5",
"SyncableObservableCollectionChangedListener:c7",
"IUnknownValuePlotting:dk",
"PropertyUpdatedEventHandler:dm",
"ILegendContext:dn",
"ILegendSeries:dp",
"IScaleLegendSeries:dq",
"ILegendOwner:dr",
"IInternalLegendOwner:ds",
"ILegendTemplateProvider:dt",
"IChartLegend:du",
"IChartItemLegend:dv",
"IChartScaleLegend:dw",
"ComparableDelegate:dz"]);
/*<BeginType Name="Infragistics.Controls.Charts.UnknownValuePlotting" />*/

$.ig.util.defEnum('UnknownValuePlotting', false, false, {
	LinearInterpolate: 0,
	DontPlot: 1
});

/*<EndType Name="Infragistics.Controls.Charts.UnknownValuePlotting" />*/

/*<BeginType Name="Infragistics.Controls.Charts.TrendLineType" />*/

$.ig.util.defEnum('TrendLineType', false, false, {
	None: 0,
	LinearFit: 1,
	QuadraticFit: 2,
	CubicFit: 3,
	QuarticFit: 4,
	QuinticFit: 5,
	LogarithmicFit: 6,
	ExponentialFit: 7,
	PowerLawFit: 8,
	SimpleAverage: 9,
	ExponentialAverage: 10,
	ModifiedAverage: 11,
	CumulativeAverage: 12,
	WeightedAverage: 13
});

/*<EndType Name="Infragistics.Controls.Charts.TrendLineType" />*/

/*<BeginType Name="Infragistics.Controls.TouchGestureState" />*/

$.ig.util.defEnum('TouchGestureState', false, false, {
	None: 0,
	Pan: 1,
	Zoom: 2,
	Hold: 3,
	PendingPan: 4,
	Flinging: 5
});

/*<EndType Name="Infragistics.Controls.TouchGestureState" />*/

/*<BeginType Name="Infragistics.Controls.InteractionState" />*/

$.ig.util.defEnum('InteractionState', false, false, {
	None: 0,
	DragZoom: 1,
	DragPan: 2,
	Auto: 3
});

/*<EndType Name="Infragistics.Controls.InteractionState" />*/

/*<BeginType Name="Infragistics.FastItemsSourceEventAction" />*/

$.ig.util.defEnum('FastItemsSourceEventAction', false, false, {
	Remove: 0,
	Insert: 1,
	Replace: 2,
	Change: 3,
	Reset: 4
});

/*<EndType Name="Infragistics.FastItemsSourceEventAction" />*/

/*<BeginType Name="Infragistics.ErrorBarCalculatorType" />*/

$.ig.util.defEnum('ErrorBarCalculatorType', false, false, {
	Fixed: 0,
	Percentage: 1,
	Data: 2,
	StandardDeviation: 3,
	StandardError: 4
});

/*<EndType Name="Infragistics.ErrorBarCalculatorType" />*/

/*<BeginType Name="Infragistics.ErrorBarCalculatorReference" />*/

$.ig.util.defEnum('ErrorBarCalculatorReference', false, false, {
	X: 0,
	Y: 1
});

/*<EndType Name="Infragistics.ErrorBarCalculatorReference" />*/

/*<BeginType Name="Infragistics.GradientDirection" />*/

$.ig.util.defEnum('GradientDirection', false, false, {
	TopBottom: 0,
	BottomTop: 1,
	LeftRight: 2,
	RightLeft: 3,
	Radial: 4
});

/*<EndType Name="Infragistics.GradientDirection" />*/

/*<BeginType Name="Infragistics.InterpolationMode" />*/

$.ig.util.defEnum('InterpolationMode', false, false, {
	RGB: 0,
	HSV: 1
});

/*<EndType Name="Infragistics.InterpolationMode" />*/

/*<BeginType Name="Infragistics.CancelBehavior" />*/

$.ig.util.defEnum('CancelBehavior', false, false, {
	KeepCurrent: 0,
	ToEnd: 1,
	ToBeginning: 2
});

/*<EndType Name="Infragistics.CancelBehavior" />*/

/*<BeginType Name="LRUCache`2" />*/

$.ig.util.defType('LRUCache$2', 'Object', {
	$tKey: null,
	$tValue: null,
	init: function ($tKey, $tValue, initNumber, maxItems) {
		this.$tKey = $tKey;
		this.$tValue = $tValue;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$tKey, this.$tValue);
		}
		if (initNumber > 0) {
			switch (initNumber) {
				case 1:
					this.init1.apply(this, arguments);
					break;
			}
			return;
		}
		$.ig.LRUCache$2.prototype.init1.call(this, this.$tKey, this.$tValue, 1, maxItems, null);
	},
	init1: function ($tKey, $tValue, initNumber, maxItems, comparer) {
		this.$tKey = $tKey;
		this.$tValue = $tValue;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$tKey, this.$tValue);
		}
		$.ig.Object.prototype.init.call(this);
		this.__usedOrder = new $.ig.LinkedList$1($.ig.LRUCacheItem$2.prototype.$type.specialize(this.$tKey, this.$tValue));
		this.__cache = new $.ig.FastIterationDictionary$2(this.$tKey, $.ig.LRUCacheItem$2.prototype.$type.specialize(this.$tKey, this.$tValue), 1, comparer);
		this.__maxItems = maxItems;
	},
	__maxItems: 0,
	/*<BeginProperty Name="System.Int32 LRUCache`2::MaxItems()" />*/
	maxItems: function (value) {
		if (arguments.length === 1) {
			this.__maxItems = value;
			while (this.__cache.count() > this.__maxItems) {
				this.remove(this.__usedOrder.last().value().key());
			}
			return value;
		} else {
			return this.__maxItems;
		}
	}
	/*<EndProperty Name="System.Int32 LRUCache`2::MaxItems()" />*/
	,
	__usedOrder: null,
	__cache: null,
	/*<BeginProperty Name="Infragistics.FastIterationDictionary LRUCache`2::InnerCache()" />*/
	innerCache: function () {
		return this.__cache;
	}
	/*<EndProperty Name="Infragistics.FastIterationDictionary LRUCache`2::InnerCache()" />*/
	,
	/*<BeginMethod Name="System.Boolean LRUCache`2::ContainsKey(LRUCache.TKey)" />*/
	containsKey: function (key) {
		return this.__cache.containsKey(key);
	}
	/*<EndMethod Name="System.Boolean LRUCache`2::ContainsKey(LRUCache.TKey)" />*/
	,
	/*<BeginProperty Name="LRUCache.TValue LRUCache`2::Item(LRUCache.TKey)" />*/
	item: function (key, value) {
		if (arguments.length === 2) {
			if (!this.__cache.containsKey(key)) {
				var item = new $.ig.LRUCacheItem$2(this.$tKey, this.$tValue);
				item.value(value);
				item.key(key);
				this.__usedOrder.addFirst(item);
				item.node(this.__usedOrder.first());
				this.__cache.add(key, item);
			} else {
				var oldItem = this.item(key);
				this.__cache.item(key).value(value);
			}
			while (this.__cache.count() > this.__maxItems) {
				this.remove(this.__usedOrder.last().value().key());
			}
			return value;
		} else {
			if (!this.__cache.containsKey(key)) {
				return $.ig.util.getDefaultValue(this.$tValue);
			}
			var ret = this.__cache.item(key);
			var node = ret.node();
			this.__usedOrder.remove(node);
			this.__usedOrder.addFirst(node.value());
			ret.node(this.__usedOrder.first());
			return ret.value();
		}
	}
	/*<EndProperty Name="LRUCache.TValue LRUCache`2::Item(LRUCache.TKey)" />*/
	,
	/*<BeginMethod Name="System.Void LRUCache`2::Remove(LRUCache.TKey)" />*/
	remove: function (key) {
		if (!this.__cache.containsKey(key)) {
			return;
		}
		var item = this.__cache.item(key);
		this.__usedOrder.remove(item.node());
		this.__cache.remove(item.key());
	}
	/*<EndMethod Name="System.Void LRUCache`2::Remove(LRUCache.TKey)" />*/
	,
	/*<BeginMethod Name="System.Void LRUCache`2::Clear()" />*/
	clear: function () {
		this.__cache.clear();
		this.__usedOrder = new $.ig.LinkedList$1($.ig.LRUCacheItem$2.prototype.$type.specialize(this.$tKey, this.$tValue));
	}
	/*<EndMethod Name="System.Void LRUCache`2::Clear()" />*/
	,
	/*<BeginProperty Name="System.Int32 LRUCache`2::Count()" />*/
	count: function () {
		return this.__cache.count();
	}
	/*<EndProperty Name="System.Int32 LRUCache`2::Count()" />*/
	,
	$type: new $.ig.Type('LRUCache$2', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="LRUCache`2" />*/

/*<BeginType Name="LRUCacheItem`2" />*/

$.ig.util.defType('LRUCacheItem$2', 'Object', {
	$tKey: null,
	$tValue: null,
	init: function ($tKey, $tValue) {
		this.$tKey = $tKey;
		this.$tValue = $tValue;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$tKey, this.$tValue);
		}
		$.ig.Object.prototype.init.call(this);
	},
	_key: null,
	/*<BeginProperty Name="LRUCacheItem.TKey LRUCacheItem`2::Key()" />*/
	key: function (value) {
		if (arguments.length === 1) {
			this._key = value;
			return value;
		} else {
			return this._key;
		}
	}
	/*<EndProperty Name="LRUCacheItem.TKey LRUCacheItem`2::Key()" />*/
	,
	_value: null,
	/*<BeginProperty Name="LRUCacheItem.TValue LRUCacheItem`2::Value()" />*/
	value: function (value) {
		if (arguments.length === 1) {
			this._value = value;
			return value;
		} else {
			return this._value;
		}
	}
	/*<EndProperty Name="LRUCacheItem.TValue LRUCacheItem`2::Value()" />*/
	,
	_node: null,
	/*<BeginProperty Name="System.Collections.Generic.LinkedListNode LRUCacheItem`2::Node()" />*/
	node: function (value) {
		if (arguments.length === 1) {
			this._node = value;
			return value;
		} else {
			return this._node;
		}
	}
	/*<EndProperty Name="System.Collections.Generic.LinkedListNode LRUCacheItem`2::Node()" />*/
	,
	$type: new $.ig.Type('LRUCacheItem$2', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="LRUCacheItem`2" />*/

/*<BeginType Name="Infragistics.AnimationManager" />*/

$.ig.util.defType('AnimationManager', 'Object', {
	__tickProvider: null,
	init: function (tickProvider) {
		this.__currentAnimations = new $.ig.Dictionary$2(String, $.ig.AnimationState.prototype.$type, 0);
		this.__isTicking = false;
		this.__tickID = -1;
		$.ig.Object.prototype.init.call(this);
		this.__tickProvider = tickProvider;
	},
	__currentAnimations: null,
	/*<BeginMethod Name="System.DateTime Infragistics.AnimationManager::GetStartTime()" />*/
	getStartTime: function () {
		return $.ig.Date.prototype.now();
	}
	/*<EndMethod Name="System.DateTime Infragistics.AnimationManager::GetStartTime()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.AnimationManager::AddAnimation(System.String, System.Object, System.Int32, System.Action, System.Func, System.Double, System.Double)" />*/
	addAnimation2: function (animationKey, target, duration, tickAnimation, easingFunction, from, to) {
		var state = new $.ig.AnimationState();
		state.fromValue(from);
		state.toValue(to);
		state.target(target);
		state.duration(duration);
		state.startTime(this.getStartTime());
		state.tick(tickAnimation);
		state.easing(easingFunction);
		this.addAnimation(state);
	}
	/*<EndMethod Name="System.Void Infragistics.AnimationManager::AddAnimation(System.String, System.Object, System.Int32, System.Action, System.Func, System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.AnimationManager::AddAnimation(System.String, System.Object, System.Int32, System.Action, System.Func)" />*/
	addAnimation1: function (animationKey, target, duration, tickAnimation, easingFunction) {
		var state = new $.ig.AnimationState();
		state.key(animationKey);
		state.target(target);
		state.duration(duration);
		state.startTime(this.getStartTime());
		state.tick(tickAnimation);
		state.easing(easingFunction);
		this.addAnimation(state);
	}
	/*<EndMethod Name="System.Void Infragistics.AnimationManager::AddAnimation(System.String, System.Object, System.Int32, System.Action, System.Func)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.AnimationManager::AddAnimation(Infragistics.AnimationState)" />*/
	addAnimation: function (state) {
		if (this.__currentAnimations.containsKey(state.key())) {
			this.cancelAnimation(state.key(), $.ig.CancelBehavior.prototype.keepCurrent);
		}
		this.__currentAnimations.add(state.key(), state);
		this.checkTicking();
		this.__tickProvider.requestFrame(this.__tickID);
	}
	/*<EndMethod Name="System.Void Infragistics.AnimationManager::AddAnimation(Infragistics.AnimationState)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.AnimationManager::CancelAnimation(System.String, Infragistics.CancelBehavior)" />*/
	cancelAnimation: function (animationKey, cancelBehavior) {
		if (!this.__currentAnimations.containsKey(animationKey)) {
			return;
		}
		var state = this.__currentAnimations.item(animationKey);
		var tick = state.tick();
		if (cancelBehavior == $.ig.CancelBehavior.prototype.toBeginning) {
			state.tick()(state.easing()(0), state);
		}
		if (cancelBehavior == $.ig.CancelBehavior.prototype.toEnd) {
			state.tick()(state.easing()(1), state);
		}
		this.__currentAnimations.remove(animationKey);
		this.checkTicking();
	}
	/*<EndMethod Name="System.Void Infragistics.AnimationManager::CancelAnimation(System.String, Infragistics.CancelBehavior)" />*/
	,
	__isTicking: false,
	/*<BeginMethod Name="System.Void Infragistics.AnimationManager::CheckTicking()" />*/
	checkTicking: function () {
		if (this.__currentAnimations.count() == 0) {
			this.teardownTicking();
		} else {
			this.setupTicking();
		}
	}
	/*<EndMethod Name="System.Void Infragistics.AnimationManager::CheckTicking()" />*/
	,
	__tickID: 0,
	/*<BeginMethod Name="System.Void Infragistics.AnimationManager::SetupTicking()" />*/
	setupTicking: function () {
		if (this.__isTicking) {
			return;
		}
		this.__isTicking = true;
		this.__tickID = this.__tickProvider.setupTicking(this.tick.runOn(this));
	}
	/*<EndMethod Name="System.Void Infragistics.AnimationManager::SetupTicking()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.AnimationManager::TeardownTicking()" />*/
	teardownTicking: function () {
		if (this.__isTicking) {
			this.__tickProvider.teardownTicking(this.__tickID);
			this.__tickID = -1;
		}
		this.__isTicking = false;
	}
	/*<EndMethod Name="System.Void Infragistics.AnimationManager::TeardownTicking()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.AnimationManager::Tick()" />*/
	tick: function () {
		var currentTime = $.ig.Date.prototype.now();
		var toRemove = new $.ig.List$1(String, 0);
		var en = this.__currentAnimations.values().getEnumerator();
		while (en.moveNext()) {
			var state = en.current();
			var currentCompleted = false;
			var ellapsedMilliseconds = (currentTime.getTime() - state.startTime().getTime());
			if (ellapsedMilliseconds >= state.duration()) {
				ellapsedMilliseconds = state.duration();
				currentCompleted = true;
			}
			if ((ellapsedMilliseconds - state.lastRender() < 16 && ellapsedMilliseconds != state.duration())) {
				continue;
			}
			state.lastRender(ellapsedMilliseconds);
			state.isCompleting(currentCompleted);
			var p = (ellapsedMilliseconds / state.duration());
			p = state.easing()(p);
			state.tick()(p, state);
			if (currentCompleted) {
				toRemove.add(state.key());
			}
		}
		var en1 = toRemove.getEnumerator();
		while (en1.moveNext()) {
			var anim = en1.current();
			this.__currentAnimations.remove(anim);
		}
		this.checkTicking();
		if (this.__isTicking) {
			this.__tickProvider.requestFrame(this.__tickID);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.AnimationManager::Tick()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.AnimationManager::Clear()" />*/
	clear: function () {
		this.__currentAnimations.clear();
		this.teardownTicking();
	}
	/*<EndMethod Name="System.Void Infragistics.AnimationManager::Clear()" />*/
	,
	$type: new $.ig.Type('AnimationManager', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.AnimationManager" />*/

/*<BeginType Name="Infragistics.AnimationState" />*/

$.ig.util.defType('AnimationState', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	_toValue: 0,
	/*<BeginProperty Name="System.Double Infragistics.AnimationState::ToValue()" />*/
	toValue: function (value) {
		if (arguments.length === 1) {
			this._toValue = value;
			return value;
		} else {
			return this._toValue;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.AnimationState::ToValue()" />*/
	,
	_fromValue: 0,
	/*<BeginProperty Name="System.Double Infragistics.AnimationState::FromValue()" />*/
	fromValue: function (value) {
		if (arguments.length === 1) {
			this._fromValue = value;
			return value;
		} else {
			return this._fromValue;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.AnimationState::FromValue()" />*/
	,
	_target: null,
	/*<BeginProperty Name="System.Object Infragistics.AnimationState::Target()" />*/
	target: function (value) {
		if (arguments.length === 1) {
			this._target = value;
			return value;
		} else {
			return this._target;
		}
	}
	/*<EndProperty Name="System.Object Infragistics.AnimationState::Target()" />*/
	,
	_duration: 0,
	/*<BeginProperty Name="System.Int32 Infragistics.AnimationState::Duration()" />*/
	duration: function (value) {
		if (arguments.length === 1) {
			this._duration = value;
			return value;
		} else {
			return this._duration;
		}
	}
	/*<EndProperty Name="System.Int32 Infragistics.AnimationState::Duration()" />*/
	,
	_startTime: new Date(),
	/*<BeginProperty Name="System.DateTime Infragistics.AnimationState::StartTime()" />*/
	startTime: function (value) {
		if (arguments.length === 1) {
			this._startTime = value;
			return value;
		} else {
			return this._startTime;
		}
	}
	/*<EndProperty Name="System.DateTime Infragistics.AnimationState::StartTime()" />*/
	,
	_tick: null,
	/*<BeginProperty Name="System.Action Infragistics.AnimationState::Tick()" />*/
	tick: function (value) {
		if (arguments.length === 1) {
			this._tick = value;
			return value;
		} else {
			return this._tick;
		}
	}
	/*<EndProperty Name="System.Action Infragistics.AnimationState::Tick()" />*/
	,
	_easing: null,
	/*<BeginProperty Name="System.Func Infragistics.AnimationState::Easing()" />*/
	easing: function (value) {
		if (arguments.length === 1) {
			this._easing = value;
			return value;
		} else {
			return this._easing;
		}
	}
	/*<EndProperty Name="System.Func Infragistics.AnimationState::Easing()" />*/
	,
	_key: null,
	/*<BeginProperty Name="System.String Infragistics.AnimationState::Key()" />*/
	key: function (value) {
		if (arguments.length === 1) {
			this._key = value;
			return value;
		} else {
			return this._key;
		}
	}
	/*<EndProperty Name="System.String Infragistics.AnimationState::Key()" />*/
	,
	_lastRender: 0,
	/*<BeginProperty Name="System.Int32 Infragistics.AnimationState::LastRender()" />*/
	lastRender: function (value) {
		if (arguments.length === 1) {
			this._lastRender = value;
			return value;
		} else {
			return this._lastRender;
		}
	}
	/*<EndProperty Name="System.Int32 Infragistics.AnimationState::LastRender()" />*/
	,
	_isCompleting: false,
	/*<BeginProperty Name="System.Boolean Infragistics.AnimationState::IsCompleting()" />*/
	isCompleting: function (value) {
		if (arguments.length === 1) {
			this._isCompleting = value;
			return value;
		} else {
			return this._isCompleting;
		}
	}
	/*<EndProperty Name="System.Boolean Infragistics.AnimationState::IsCompleting()" />*/
	,
	$type: new $.ig.Type('AnimationState', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.AnimationState" />*/

/*<BeginType Name="Infragistics.ITickProvider" />*/

$.ig.util.defType('ITickProvider', 'Object', {
	$type: new $.ig.Type('ITickProvider', null)
}, true);

/*<EndType Name="Infragistics.ITickProvider" />*/

/*<BeginType Name="Infragistics.ErrorMessageDisplayingEventArgs" />*/

$.ig.util.defType('ErrorMessageDisplayingEventArgs', 'EventArgs', {
	init: function (errorMessage) {
		$.ig.EventArgs.prototype.init.call(this);
		this.errorMessage(errorMessage);
	},
	__errorMessage: null,
	/*<BeginProperty Name="System.String Infragistics.ErrorMessageDisplayingEventArgs::ErrorMessage()" />*/
	errorMessage: function (value) {
		if (arguments.length === 1) {
			this.__errorMessage = value;
			return value;
		} else {
			return this.__errorMessage;
		}
	}
	/*<EndProperty Name="System.String Infragistics.ErrorMessageDisplayingEventArgs::ErrorMessage()" />*/
	,
	$type: new $.ig.Type('ErrorMessageDisplayingEventArgs', $.ig.EventArgs.prototype.$type)
}, true);

/*<EndType Name="Infragistics.ErrorMessageDisplayingEventArgs" />*/

/*<BeginType Name="Infragistics.IFastItemColumnInternal" />*/

$.ig.util.defType('IFastItemColumnInternal', 'Object', {
	$type: new $.ig.Type('IFastItemColumnInternal', null)
}, true);

/*<EndType Name="Infragistics.IFastItemColumnInternal" />*/

/*<BeginType Name="Infragistics.IFastItemColumnPropertyName" />*/

$.ig.util.defType('IFastItemColumnPropertyName', 'Object', {
	$type: new $.ig.Type('IFastItemColumnPropertyName', null)
}, true);

/*<EndType Name="Infragistics.IFastItemColumnPropertyName" />*/

/*<BeginType Name="Infragistics.IFastItemColumn`1" />*/

$.ig.util.defType('IFastItemColumn$1', 'Object', {
	$type: new $.ig.Type('IFastItemColumn$1', null, [$.ig.IList$1.prototype.$type.specialize(0), $.ig.IFastItemColumnPropertyName.prototype.$type])
}, true);

/*<EndType Name="Infragistics.IFastItemColumn`1" />*/

/*<BeginType Name="Infragistics.FastItemColumn" />*/

$.ig.util.defType('FastItemColumn', 'Object', {
	__coerceValue: null,
	__expectFunctions: false,
	init: function (fastItemsSource, propertyName, coerceValue, expectFunctions) {
		this.__coerceValue = null;
		this.__expectFunctions = false;
		this.__propertyName = null;
		this.__unknownCount = 0;
		$.ig.Object.prototype.init.call(this);
		this.__coerceValue = coerceValue;
		this.__expectFunctions = expectFunctions;
		this.propertyName(propertyName);
		this.fastItemsSource(fastItemsSource);
	},
	/*<BeginProperty Name="Infragistics.IFastItemsSource Infragistics.FastItemColumn::FastItemsSource()" />*/
	fastItemsSource: function (value) {
		if (arguments.length === 1) {
			this._fastItemsSource = value;
			this.reset();
			return value;
		} else {
			return this._fastItemsSource;
		}
	}
	/*<EndProperty Name="Infragistics.IFastItemsSource Infragistics.FastItemColumn::FastItemsSource()" />*/
	,
	_fastItemsSource: null,
	__propertyName: null,
	/*<BeginProperty Name="System.String Infragistics.FastItemColumn::PropertyName()" />*/
	propertyName: function (value) {
		if (arguments.length === 1) {
			this.__propertyName = value;
			return value;
		} else {
			return this.__propertyName;
		}
	}
	/*<EndProperty Name="System.String Infragistics.FastItemColumn::PropertyName()" />*/
	,
	/*<BeginProperty Name="System.Double Infragistics.FastItemColumn::Minimum()" />*/
	minimum: function (value) {
		if (arguments.length === 1) {
			this._minimum = value;
			return value;
		} else {
			if ($.ig.util.isNaN(this._minimum) && this.values() != null) {
				this._minimum = Number.POSITIVE_INFINITY;
				var en = this.values().getEnumerator();
				while (en.moveNext()) {
					var value = en.current();
					if (!$.ig.util.isNaN(value)) {
						this._minimum = Math.min(this._minimum, value);
					}
				}
			}
			return this._minimum;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.FastItemColumn::Minimum()" />*/
	,
	_minimum: 0,
	/*<BeginProperty Name="System.Double Infragistics.FastItemColumn::Maximum()" />*/
	maximum: function (value) {
		if (arguments.length === 1) {
			this._maximum = value;
			return value;
		} else {
			if ($.ig.util.isNaN(this._maximum) && this.values() != null) {
				this._maximum = Number.NEGATIVE_INFINITY;
				var en = this.values().getEnumerator();
				while (en.moveNext()) {
					var value = en.current();
					if (!$.ig.util.isNaN(value)) {
						this._maximum = Math.max(this._maximum, value);
					}
				}
			}
			return this._maximum;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.FastItemColumn::Maximum()" />*/
	,
	_maximum: 0,
	/*<BeginProperty Name="System.Double Infragistics.FastItemColumn::Item(System.Int32)" />*/
	item: function (index, value) {
		if (arguments.length === 2) {
			this.values().__inner[index] = value;
			return value;
		} else {
			return this.values().__inner[index];
		}
	}
	/*<EndProperty Name="System.Double Infragistics.FastItemColumn::Item(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerator Infragistics.FastItemColumn::GetEnumerator()" />*/
	getEnumerator: function () {
		return this.values().getEnumerator();
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerator Infragistics.FastItemColumn::GetEnumerator()" />*/
	,
	/*<BeginMethod Name="System.Collections.IEnumerator Infragistics.FastItemColumn::System.Collections.IEnumerable.GetEnumerator()" />*/
	getEnumerator: function () {
		return this.values().getEnumerator();
	}
	/*<EndMethod Name="System.Collections.IEnumerator Infragistics.FastItemColumn::System.Collections.IEnumerable.GetEnumerator()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.FastItemColumn::Contains(System.Double)" />*/
	contains: function (item) {
		return this.values().contains(item);
	}
	/*<EndMethod Name="System.Boolean Infragistics.FastItemColumn::Contains(System.Double)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.FastItemColumn::CopyTo(, System.Int32)" />*/
	copyTo: function (array, arrayIndex) {
		this.values().copyTo(array, arrayIndex);
	}
	/*<EndMethod Name="System.Void Infragistics.FastItemColumn::CopyTo(, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.FastItemColumn::Count()" />*/
	count: function () {
		return this.values().count();
	}
	/*<EndProperty Name="System.Int32 Infragistics.FastItemColumn::Count()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.FastItemColumn::IsReadOnly()" />*/
	isReadOnly: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean Infragistics.FastItemColumn::IsReadOnly()" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.FastItemColumn::IndexOf(System.Double)" />*/
	indexOf: function (item) {
		return this.values().indexOf(item);
	}
	/*<EndMethod Name="System.Int32 Infragistics.FastItemColumn::IndexOf(System.Double)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.FastItemColumn::Add(System.Double)" />*/
	add: function (item) {
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndMethod Name="System.Void Infragistics.FastItemColumn::Add(System.Double)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.FastItemColumn::Clear()" />*/
	clear: function () {
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndMethod Name="System.Void Infragistics.FastItemColumn::Clear()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.FastItemColumn::Remove(System.Double)" />*/
	remove: function (item) {
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndMethod Name="System.Boolean Infragistics.FastItemColumn::Remove(System.Double)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.FastItemColumn::Insert(System.Int32, System.Double)" />*/
	insert: function (index, item) {
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndMethod Name="System.Void Infragistics.FastItemColumn::Insert(System.Int32, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.FastItemColumn::RemoveAt(System.Int32)" />*/
	removeAt: function (index) {
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndMethod Name="System.Void Infragistics.FastItemColumn::RemoveAt(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.FastItemColumn::Reset()" />*/
	reset: function () {
		this.values(null);
		this.minimum(NaN);
		this.maximum(NaN);
		this.__unknownCount = 0;
		return this.fastItemsSource() != null ? this.insertRange(0, this.fastItemsSource().count()) : true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.FastItemColumn::Reset()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.FastItemColumn::InsertRange(System.Int32, System.Int32)" />*/
	insertRange: function (position, count) {
		var newValues = new Array(count);
		var source_ = this._fastItemsSource.asArray();
		var item_;
		var minimum = this.minimum();
		var maximum = this.maximum();
		var minimumIsNaN = $.ig.util.isNaN(this.minimum());
		var maximumIsNaN = $.ig.util.isNaN(this.maximum());
		var newCount = 0;
		var newValue;
		var coerce = this.__coerceValue;
		var sourceItem_ = null;
		if (this.__coerceValue != null || this.__expectFunctions) {
			for (var i_ = position; i_ < position + count; ++i_) {
				sourceItem_ = source_[i_];
				if (sourceItem_ == null) {
					item_ = NaN;
				} else {
					item_ = sourceItem_[this.__propertyName];
				}
				if (this.__expectFunctions) {
					if (typeof(item_) == 'function') {
						item_ = item_();
					}
				}
				if (coerce != null) {
					item_ = coerce(item_);
				}
				newValue = item_ == null ? NaN : item_;
				var valIsNaN = (newValue != newValue);
				if (valIsNaN) {
					this.__unknownCount++;
				}
				if (minimumIsNaN || newValue < minimum) {
					minimum = newValue;
					minimumIsNaN = valIsNaN;
				}
				if (maximumIsNaN || newValue > maximum) {
					maximum = newValue;
					maximumIsNaN = valIsNaN;
				}
				newValues[newCount] = newValue;
				newCount++;
			}
		} else {
			for (var i_ = position; i_ < position + count; ++i_) {
				sourceItem_ = source_[i_];
				if (sourceItem_ == null) {
					item_ = NaN;
				} else {
					item_ = sourceItem_[this.__propertyName];
				}
				newValue = item_ == null ? NaN : item_;
				var valIsNaN1 = (newValue != newValue);
				if (valIsNaN1) {
					this.__unknownCount++;
				}
				if (minimumIsNaN || newValue < minimum) {
					minimum = newValue;
					minimumIsNaN = valIsNaN1;
				}
				if (maximumIsNaN || newValue > maximum) {
					maximum = newValue;
					maximumIsNaN = valIsNaN1;
				}
				newValues[newCount] = newValue;
				newCount++;
			}
		}
		this.minimum(minimum);
		this.maximum(maximum);
		if (this.values() == null) {
			this.values(new $.ig.List$1(Number, 1, newValues));
		} else {
			this.values().insertRange(position, newValues);
		}
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.FastItemColumn::InsertRange(System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.FastItemColumn::RemoveRange(System.Int32, System.Int32)" />*/
	removeRange: function (position, count) {
		for (var i = position; i < position + count && !$.ig.util.isNaN(this.minimum()) && !$.ig.util.isNaN(this.maximum()); ++i) {
			if (this.item(i) == this.minimum()) {
				this.minimum(NaN);
			}
			if (this.item(i) == this.maximum()) {
				this.maximum(NaN);
			}
			if ($.ig.util.isNaN(this.item(i))) {
				this.__unknownCount--;
			}
		}
		this.values().removeRange(position, count);
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.FastItemColumn::RemoveRange(System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.FastItemColumn::ReplaceMinMax(System.Double, System.Double)" />*/
	replaceMinMax: function (oldValue, newValue) {
		if ($.ig.util.isNaN(oldValue)) {
			if (!$.ig.util.isNaN(newValue)) {
				if (!$.ig.util.isNaN(this.minimum())) {
					this.minimum(Math.min(newValue, this.minimum()));
				}
				if (!$.ig.util.isNaN(this.maximum())) {
					this.maximum(Math.max(newValue, this.maximum()));
				}
			}
			return;
		}
		if ($.ig.util.isNaN(newValue)) {
			this.minimum(!$.ig.util.isNaN(this.minimum()) && oldValue == this.minimum() ? NaN : this.minimum());
			this.maximum(!$.ig.util.isNaN(this.maximum()) && oldValue == this.maximum() ? NaN : this.maximum());
			return;
		}
		if (!$.ig.util.isNaN(this.minimum())) {
			if (oldValue == this.minimum() && newValue > this.minimum()) {
				this.minimum(NaN);
			} else {
				this.minimum(Math.min(newValue, this.minimum()));
			}
		}
		if (!$.ig.util.isNaN(this.maximum())) {
			if (oldValue == this.maximum() && newValue < this.maximum()) {
				this.maximum(NaN);
			} else {
				this.maximum(Math.max(newValue, this.maximum()));
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.FastItemColumn::ReplaceMinMax(System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.FastItemColumn::ReplaceRange(System.Int32, System.Int32)" />*/
	replaceRange: function (position, count) {
		var ret = false;
		for (var i = 0; i < count; ++i) {
			var oldValue = this.values().__inner[position + i];
			var newValue = this.toDouble(this.fastItemsSource().item(position + i));
			if ($.ig.util.isNaN(oldValue)) {
				this.__unknownCount--;
			}
			if ($.ig.util.isNaN(newValue)) {
				this.__unknownCount++;
			}
			if (oldValue != newValue) {
				this.values().__inner[position + i] = newValue;
				ret = true;
				this.replaceMinMax(oldValue, newValue);
			}
		}
		return ret;
	}
	/*<EndMethod Name="System.Boolean Infragistics.FastItemColumn::ReplaceRange(System.Int32, System.Int32)" />*/
	,
	_fastReflectionHelper: null,
	/*<BeginMethod Name="System.Double Infragistics.FastItemColumn::ToDouble(System.Object)" />*/
	toDouble: function (item) {
		if (item == null) {
			return NaN;
		}
		var from_ = item;
		item = from_[this.__propertyName];
		if (this.__expectFunctions) {
			from_ = item;
			if (typeof(from_) == 'function') {
				item = from_();
			}
		}
		if (this.__coerceValue != null) {
			item = this.__coerceValue(item);
		}
		if (item == null) {
			return NaN;
		}
		return item;
		if (typeof item === 'number') {
			return item;
		}
	}
	/*<EndMethod Name="System.Double Infragistics.FastItemColumn::ToDouble(System.Object)" />*/
	,
	_values: null,
	/*<BeginProperty Name="System.Collections.Generic.List Infragistics.FastItemColumn::Values()" />*/
	values: function (value) {
		if (arguments.length === 1) {
			this._values = value;
			return value;
		} else {
			return this._values;
		}
	}
	/*<EndProperty Name="System.Collections.Generic.List Infragistics.FastItemColumn::Values()" />*/
	,
	__unknownCount: 0,
	/*<BeginProperty Name="System.Boolean Infragistics.FastItemColumn::MayContainUnknowns()" />*/
	mayContainUnknowns: function () {
		return this.__unknownCount > 0;
	}
	/*<EndProperty Name="System.Boolean Infragistics.FastItemColumn::MayContainUnknowns()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.FastItemColumn::QuickSort(System.Collections.IList, System.Func)" />*/
	quickSort: function (list, comparison) {
		$.ig.FastItemColumn.prototype.quickSort1(list, 0, list.count() - 1, comparison);
	}
	/*<EndMethod Name="System.Void Infragistics.FastItemColumn::QuickSort(System.Collections.IList, System.Func)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.FastItemColumn::QuickSort(System.Collections.IList, System.Int32, System.Int32, System.Func)" />*/
	quickSort1: function (list, low, high, comparison) {
		if (low < high) {
			var pp = $.ig.FastItemColumn.prototype.partition(list, low, high, comparison);
			$.ig.FastItemColumn.prototype.quickSort1(list, low, pp - 1, comparison);
			$.ig.FastItemColumn.prototype.quickSort1(list, pp + 1, high, comparison);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.FastItemColumn::QuickSort(System.Collections.IList, System.Int32, System.Int32, System.Func)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.FastItemColumn::Partition(System.Collections.IList, System.Int32, System.Int32, System.Func)" />*/
	partition: function (list, low, high, comparison) {
		var pivot = list.item(high);
		var ii = low;
		for (var jj = low; jj < high; jj++) {
			if (comparison(list.item(jj), pivot) <= 0) {
				var swapA = list.item(ii);
				list.item(ii, list.item(jj));
				list.item(jj, swapA);
				ii++;
			}
		}
		var swapB = list.item(ii);
		list.item(ii, list.item(high));
		list.item(high, swapB);
		return ii;
	}
	/*<EndMethod Name="System.Int32 Infragistics.FastItemColumn::Partition(System.Collections.IList, System.Int32, System.Int32, System.Func)" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.List Infragistics.FastItemColumn::GetSortedIndices(System.Collections.IList, System.Func)" />*/
	getSortedIndices1: function (values, comparison) {
		var result = new $.ig.List$1($.ig.Number.prototype.$type, 2, values.count());
		for (var i = 0; i < values.count(); i++) {
			result.add(i);
		}
		if (values.count() < 22) {
			$.ig.FastItemColumn.prototype.quickSort(result, function (i1, i2) {
				var v1 = values.item($.ig.util.getValue(i1));
				var v2 = values.item($.ig.util.getValue(i2));
				return comparison(v1, v2);
			});
		} else {
			result.sort2(function (i1, i2) {
				var v1 = values.item(i1);
				var v2 = values.item(i2);
				return comparison(v1, v2);
			});
		}
		return result;
	}
	/*<EndMethod Name="System.Collections.Generic.List Infragistics.FastItemColumn::GetSortedIndices(System.Collections.IList, System.Func)" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.List Infragistics.FastItemColumn::GetSortedIndices()" />*/
	getSortedIndices: function () {
		return $.ig.FastItemColumn.prototype.getSortedIndices1(this.values(), function (o1, o2) {
			var d1 = o1;
			var d2 = o2;
			if (d1 < d2) {
				return -1;
			}
			if (d1 > d2) {
				return 1;
			}
			return 0;
		});
	}
	/*<EndMethod Name="System.Collections.Generic.List Infragistics.FastItemColumn::GetSortedIndices()" />*/
	,
	/*<BeginMethod Name=" Infragistics.FastItemColumn::AsArray()" />*/
	asArray: function () {
		return this.values().asArray();
	}
	/*<EndMethod Name=" Infragistics.FastItemColumn::AsArray()" />*/
	,
	$type: new $.ig.Type('FastItemColumn', $.ig.Object.prototype.$type, [$.ig.IFastItemColumnInternal.prototype.$type, $.ig.IFastItemColumn$1.prototype.$type.specialize(Number)])
}, true);

/*<EndType Name="Infragistics.FastItemColumn" />*/

/*<BeginType Name="Infragistics.FastItemDateTimeColumn" />*/

$.ig.util.defType('FastItemDateTimeColumn', 'Object', {
	__coerceValue: null,
	__expectFunctions: false,
	init: function (fastItemsSource, propertyName, coerceValue, expectFunctions) {
		this.__propertyName = null;
		this._hasMinimum = false;
		this._hasMaximum = false;
		$.ig.Object.prototype.init.call(this);
		this.__coerceValue = coerceValue;
		this.__expectFunctions = expectFunctions;
		this.propertyName(propertyName);
		this.fastItemsSource(fastItemsSource);
	},
	/*<BeginProperty Name="Infragistics.IFastItemsSource Infragistics.FastItemDateTimeColumn::FastItemsSource()" />*/
	fastItemsSource: function (value) {
		if (arguments.length === 1) {
			this._fastItemsSource = value;
			this.reset();
			return value;
		} else {
			return this._fastItemsSource;
		}
	}
	/*<EndProperty Name="Infragistics.IFastItemsSource Infragistics.FastItemDateTimeColumn::FastItemsSource()" />*/
	,
	_fastItemsSource: null,
	__propertyName: null,
	/*<BeginProperty Name="System.String Infragistics.FastItemDateTimeColumn::PropertyName()" />*/
	propertyName: function (value) {
		if (arguments.length === 1) {
			this.__propertyName = value;
			return value;
		} else {
			return this.__propertyName;
		}
	}
	/*<EndProperty Name="System.String Infragistics.FastItemDateTimeColumn::PropertyName()" />*/
	,
	_hasMinimum: false,
	_hasMaximum: false,
	/*<BeginProperty Name="System.DateTime Infragistics.FastItemDateTimeColumn::Minimum()" />*/
	minimum: function (value) {
		if (arguments.length === 1) {
			this._minimum = value;
			return value;
		} else {
			if (!this._hasMinimum && this.values() != null) {
				var en = this.values().getEnumerator();
				while (en.moveNext()) {
					var value = en.current();
					if (value < this._minimum) {
						this._minimum = value;
					}
				}
				if (this.values().count() > 0) {
					this._hasMinimum = true;
				}
			}
			return this._minimum;
		}
	}
	/*<EndProperty Name="System.DateTime Infragistics.FastItemDateTimeColumn::Minimum()" />*/
	,
	_minimum: new Date(),
	/*<BeginProperty Name="System.DateTime Infragistics.FastItemDateTimeColumn::Maximum()" />*/
	maximum: function (value) {
		if (arguments.length === 1) {
			this._maximum = value;
			return value;
		} else {
			if (!this._hasMaximum && this.values() != null) {
				var en = this.values().getEnumerator();
				while (en.moveNext()) {
					var value = en.current();
					if (value > this._maximum) {
						this._maximum = value;
					}
				}
				if (this.values().count() > 0) {
					this._hasMaximum = true;
				}
			}
			return this._maximum;
		}
	}
	/*<EndProperty Name="System.DateTime Infragistics.FastItemDateTimeColumn::Maximum()" />*/
	,
	_maximum: new Date(),
	/*<BeginProperty Name="System.DateTime Infragistics.FastItemDateTimeColumn::Item(System.Int32)" />*/
	item: function (index, value) {
		if (arguments.length === 2) {
			throw new $.ig.NotImplementedException(0);
			return value;
		} else {
			return this.values().__inner[index];
		}
	}
	/*<EndProperty Name="System.DateTime Infragistics.FastItemDateTimeColumn::Item(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerator Infragistics.FastItemDateTimeColumn::GetEnumerator()" />*/
	getEnumerator: function () {
		return this.values().getEnumerator();
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerator Infragistics.FastItemDateTimeColumn::GetEnumerator()" />*/
	,
	/*<BeginMethod Name="System.Collections.IEnumerator Infragistics.FastItemDateTimeColumn::System.Collections.IEnumerable.GetEnumerator()" />*/
	getEnumerator: function () {
		return this.values().getEnumerator();
	}
	/*<EndMethod Name="System.Collections.IEnumerator Infragistics.FastItemDateTimeColumn::System.Collections.IEnumerable.GetEnumerator()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.FastItemDateTimeColumn::Contains(System.DateTime)" />*/
	contains: function (item) {
		return this.values().contains(item);
	}
	/*<EndMethod Name="System.Boolean Infragistics.FastItemDateTimeColumn::Contains(System.DateTime)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.FastItemDateTimeColumn::CopyTo(, System.Int32)" />*/
	copyTo: function (array, arrayIndex) {
		this.values().copyTo(array, arrayIndex);
	}
	/*<EndMethod Name="System.Void Infragistics.FastItemDateTimeColumn::CopyTo(, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.FastItemDateTimeColumn::Count()" />*/
	count: function () {
		return this.values().count();
	}
	/*<EndProperty Name="System.Int32 Infragistics.FastItemDateTimeColumn::Count()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.FastItemDateTimeColumn::IsReadOnly()" />*/
	isReadOnly: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean Infragistics.FastItemDateTimeColumn::IsReadOnly()" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.FastItemDateTimeColumn::IndexOf(System.DateTime)" />*/
	indexOf: function (item) {
		return this.values().indexOf(item);
	}
	/*<EndMethod Name="System.Int32 Infragistics.FastItemDateTimeColumn::IndexOf(System.DateTime)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.FastItemDateTimeColumn::Add(System.DateTime)" />*/
	add: function (item) {
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndMethod Name="System.Void Infragistics.FastItemDateTimeColumn::Add(System.DateTime)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.FastItemDateTimeColumn::Clear()" />*/
	clear: function () {
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndMethod Name="System.Void Infragistics.FastItemDateTimeColumn::Clear()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.FastItemDateTimeColumn::Remove(System.DateTime)" />*/
	remove: function (item) {
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndMethod Name="System.Boolean Infragistics.FastItemDateTimeColumn::Remove(System.DateTime)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.FastItemDateTimeColumn::Insert(System.Int32, System.DateTime)" />*/
	insert: function (index, item) {
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndMethod Name="System.Void Infragistics.FastItemDateTimeColumn::Insert(System.Int32, System.DateTime)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.FastItemDateTimeColumn::RemoveAt(System.Int32)" />*/
	removeAt: function (index) {
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndMethod Name="System.Void Infragistics.FastItemDateTimeColumn::RemoveAt(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.FastItemDateTimeColumn::Reset()" />*/
	reset: function () {
		this.values(null);
		this._hasMinimum = false;
		this._hasMaximum = false;
		return this.fastItemsSource() != null ? this.insertRange(0, this.fastItemsSource().count()) : true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.FastItemDateTimeColumn::Reset()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.FastItemDateTimeColumn::InsertRange(System.Int32, System.Int32)" />*/
	insertRange: function (position, count) {
		var newValues = new Array(count);
		var source_ = this._fastItemsSource.asArray();
		var item_;
		var minimum = this.minimum();
		var maximum = this.maximum();
		var newValue;
		var newCount = 0;
		var coerce = this.__coerceValue;
		if (this.__coerceValue != null || this.__expectFunctions) {
			for (var i_ = position; i_ < position + count; ++i_) {
				item_ = source_[i_][this.__propertyName];
				if (this.__expectFunctions) {
					if (typeof(item_) == 'function') {
						item_ = item_();
					}
				}
				if (coerce != null) {
					item_ = coerce(item_);
				}
				newValue = item_ == null ? new Date() : item_;
				if (!this._hasMinimum) {
					minimum = newValue;
					this._hasMinimum = true;
				} else if (newValue < minimum) {
					minimum = newValue;
				}
				if (!this._hasMaximum) {
					maximum = newValue;
					this._hasMaximum = true;
				} else if (newValue > maximum) {
					maximum = newValue;
				}
				newValues[newCount] = newValue;
				newCount++;
			}
		} else {
			for (var i_ = position; i_ < position + count; ++i_) {
				item_ = source_[i_][this.__propertyName];
				newValue = item_ == null ? new Date() : item_;
				if (!this._hasMinimum) {
					minimum = newValue;
					this._hasMinimum = true;
				} else if (newValue < minimum) {
					minimum = newValue;
				}
				if (!this._hasMaximum) {
					maximum = newValue;
					this._hasMaximum = true;
				} else if (newValue > maximum) {
					maximum = newValue;
				}
				newValues[newCount] = newValue;
				newCount++;
			}
		}
		this.minimum(minimum);
		this.maximum(maximum);
		if (this.values() == null) {
			this.values(new $.ig.List$1($.ig.Date.prototype.$type, 1, newValues));
		} else {
			this.values().insertRange(position, newValues);
		}
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.FastItemDateTimeColumn::InsertRange(System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.FastItemDateTimeColumn::RemoveRange(System.Int32, System.Int32)" />*/
	removeRange: function (position, count) {
		for (var i = position; i < position + count; ++i) {
			if (+(this.item(i)) == +(this.minimum())) {
				this._hasMinimum = false;
			}
			if (+(this.item(i)) == +(this.maximum())) {
				this._hasMaximum = false;
			}
		}
		this.values().removeRange(position, count);
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.FastItemDateTimeColumn::RemoveRange(System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.FastItemDateTimeColumn::ReplaceMinMax(System.DateTime, System.DateTime)" />*/
	replaceMinMax: function (oldValue, newValue) {
		if (+oldValue != +($.ig.Date.prototype.minValue())) {
			if (+newValue != +($.ig.Date.prototype.minValue())) {
				this.minimum(newValue < this.minimum() ? newValue : this.minimum());
				this.maximum(newValue > this.maximum() ? newValue : this.maximum());
			}
			return;
		}
		this.minimum(newValue < this.minimum() ? newValue : this.minimum());
		this.maximum(newValue > this.maximum() ? newValue : this.maximum());
	}
	/*<EndMethod Name="System.Void Infragistics.FastItemDateTimeColumn::ReplaceMinMax(System.DateTime, System.DateTime)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.FastItemDateTimeColumn::ReplaceRange(System.Int32, System.Int32)" />*/
	replaceRange: function (position, count) {
		var ret = false;
		for (var i = 0; i < count; ++i) {
			var oldValue = this.values().__inner[position + i];
			var newValue = this.toDateTime(this.fastItemsSource().item(position + i));
			if (+oldValue != +newValue) {
				this.values().__inner[position + i] = newValue;
				ret = true;
				this.replaceMinMax(oldValue, newValue);
			}
		}
		return ret;
	}
	/*<EndMethod Name="System.Boolean Infragistics.FastItemDateTimeColumn::ReplaceRange(System.Int32, System.Int32)" />*/
	,
	_fastReflectionHelper: null,
	/*<BeginMethod Name="System.DateTime Infragistics.FastItemDateTimeColumn::ToDateTime(System.Object)" />*/
	toDateTime: function (item) {
		if (item == null) {
			return $.ig.Date.prototype.minValue();
		}
		var from_ = item;
		item = from_[this.__propertyName];
		if (this.__expectFunctions) {
			from_ = item;
			if (typeof(from_) == 'function') {
				item = from_();
			}
		}
		if (this.__coerceValue != null) {
			item = this.__coerceValue(item);
		}
		if (item == null) {
			return $.ig.Date.prototype.minValue();
		}
		return item;
	}
	/*<EndMethod Name="System.DateTime Infragistics.FastItemDateTimeColumn::ToDateTime(System.Object)" />*/
	,
	_values: null,
	/*<BeginProperty Name="System.Collections.Generic.List Infragistics.FastItemDateTimeColumn::Values()" />*/
	values: function (value) {
		if (arguments.length === 1) {
			this._values = value;
			return value;
		} else {
			return this._values;
		}
	}
	/*<EndProperty Name="System.Collections.Generic.List Infragistics.FastItemDateTimeColumn::Values()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.FastItemDateTimeColumn::MayContainUnknowns()" />*/
	mayContainUnknowns: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean Infragistics.FastItemDateTimeColumn::MayContainUnknowns()" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.List Infragistics.FastItemDateTimeColumn::GetSortedIndices()" />*/
	getSortedIndices: function () {
		return $.ig.FastItemColumn.prototype.getSortedIndices1(this.values(), function (o1, o2) {
			var d1 = o1;
			var d2 = o2;
			if (d1 < d2) {
				return -1;
			}
			if (d1 > d2) {
				return 1;
			}
			return 0;
		});
	}
	/*<EndMethod Name="System.Collections.Generic.List Infragistics.FastItemDateTimeColumn::GetSortedIndices()" />*/
	,
	/*<BeginMethod Name=" Infragistics.FastItemDateTimeColumn::AsArray()" />*/
	asArray: function () {
		return this.values().asArray();
	}
	/*<EndMethod Name=" Infragistics.FastItemDateTimeColumn::AsArray()" />*/
	,
	$type: new $.ig.Type('FastItemDateTimeColumn', $.ig.Object.prototype.$type, [$.ig.IFastItemColumnInternal.prototype.$type, $.ig.IFastItemColumn$1.prototype.$type.specialize($.ig.Date.prototype.$type)])
}, true);

/*<EndType Name="Infragistics.FastItemDateTimeColumn" />*/

/*<BeginType Name="Infragistics.FastItemObjectColumn" />*/

$.ig.util.defType('FastItemObjectColumn', 'Object', {
	__coerceValue: null,
	__expectFunctions: false,
	init: function (fastItemsSource, propertyName, coerceValue, expectFunctions) {
		$.ig.Object.prototype.init.call(this);
		this.__coerceValue = coerceValue;
		this.__expectFunctions = expectFunctions;
		this.propertyName(propertyName);
		this.fastItemsSource(fastItemsSource);
	},
	/*<BeginProperty Name="Infragistics.IFastItemsSource Infragistics.FastItemObjectColumn::FastItemsSource()" />*/
	fastItemsSource: function (value) {
		if (arguments.length === 1) {
			this._fastItemsSource = value;
			this.reset();
			return value;
		} else {
			return this._fastItemsSource;
		}
	}
	/*<EndProperty Name="Infragistics.IFastItemsSource Infragistics.FastItemObjectColumn::FastItemsSource()" />*/
	,
	_fastItemsSource: null,
	__propertyName: null,
	/*<BeginProperty Name="System.String Infragistics.FastItemObjectColumn::PropertyName()" />*/
	propertyName: function (value) {
		if (arguments.length === 1) {
			this.__propertyName = value;
			return value;
		} else {
			return this.__propertyName;
		}
	}
	/*<EndProperty Name="System.String Infragistics.FastItemObjectColumn::PropertyName()" />*/
	,
	/*<BeginProperty Name="System.Object Infragistics.FastItemObjectColumn::Minimum()" />*/
	minimum: function (value) {
		if (arguments.length === 1) {
			this.__minimum = value;
			return value;
		} else {
			return this.__minimum;
		}
	}
	/*<EndProperty Name="System.Object Infragistics.FastItemObjectColumn::Minimum()" />*/
	,
	__minimum: null,
	/*<BeginProperty Name="System.Object Infragistics.FastItemObjectColumn::Maximum()" />*/
	maximum: function (value) {
		if (arguments.length === 1) {
			this.__maximum = value;
			return value;
		} else {
			return this.__maximum;
		}
	}
	/*<EndProperty Name="System.Object Infragistics.FastItemObjectColumn::Maximum()" />*/
	,
	__maximum: null,
	/*<BeginProperty Name="System.Object Infragistics.FastItemObjectColumn::Item(System.Int32)" />*/
	item: function (index, value) {
		if (arguments.length === 2) {
			throw new $.ig.NotImplementedException(0);
			return value;
		} else {
			return this.values().__inner[index];
		}
	}
	/*<EndProperty Name="System.Object Infragistics.FastItemObjectColumn::Item(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerator Infragistics.FastItemObjectColumn::GetEnumerator()" />*/
	getEnumerator: function () {
		return this.values().getEnumerator();
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerator Infragistics.FastItemObjectColumn::GetEnumerator()" />*/
	,
	/*<BeginMethod Name="System.Collections.IEnumerator Infragistics.FastItemObjectColumn::System.Collections.IEnumerable.GetEnumerator()" />*/
	getEnumerator: function () {
		return this.values().getEnumerator();
	}
	/*<EndMethod Name="System.Collections.IEnumerator Infragistics.FastItemObjectColumn::System.Collections.IEnumerable.GetEnumerator()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.FastItemObjectColumn::Contains(System.Object)" />*/
	contains: function (item) {
		return this.values().contains1(item);
	}
	/*<EndMethod Name="System.Boolean Infragistics.FastItemObjectColumn::Contains(System.Object)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.FastItemObjectColumn::CopyTo(, System.Int32)" />*/
	copyTo: function (array, arrayIndex) {
		this.values().copyTo(array, arrayIndex);
	}
	/*<EndMethod Name="System.Void Infragistics.FastItemObjectColumn::CopyTo(, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.FastItemObjectColumn::Count()" />*/
	count: function () {
		return this.values().count();
	}
	/*<EndProperty Name="System.Int32 Infragistics.FastItemObjectColumn::Count()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.FastItemObjectColumn::IsReadOnly()" />*/
	isReadOnly: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean Infragistics.FastItemObjectColumn::IsReadOnly()" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.FastItemObjectColumn::IndexOf(System.Object)" />*/
	indexOf: function (item) {
		return this.values().indexOf1(item);
	}
	/*<EndMethod Name="System.Int32 Infragistics.FastItemObjectColumn::IndexOf(System.Object)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.FastItemObjectColumn::Add(System.Object)" />*/
	add: function (item) {
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndMethod Name="System.Void Infragistics.FastItemObjectColumn::Add(System.Object)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.FastItemObjectColumn::Clear()" />*/
	clear: function () {
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndMethod Name="System.Void Infragistics.FastItemObjectColumn::Clear()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.FastItemObjectColumn::Remove(System.Object)" />*/
	remove: function (item) {
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndMethod Name="System.Boolean Infragistics.FastItemObjectColumn::Remove(System.Object)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.FastItemObjectColumn::Insert(System.Int32, System.Object)" />*/
	insert: function (index, item) {
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndMethod Name="System.Void Infragistics.FastItemObjectColumn::Insert(System.Int32, System.Object)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.FastItemObjectColumn::RemoveAt(System.Int32)" />*/
	removeAt: function (index) {
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndMethod Name="System.Void Infragistics.FastItemObjectColumn::RemoveAt(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.FastItemObjectColumn::Reset()" />*/
	reset: function () {
		this.values(null);
		return this.fastItemsSource() != null ? this.insertRange(0, this.fastItemsSource().count()) : true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.FastItemObjectColumn::Reset()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.FastItemObjectColumn::InsertRange(System.Int32, System.Int32)" />*/
	insertRange: function (position, count) {
		var newValues = (function () {
			var $ret = new $.ig.List$1($.ig.Object.prototype.$type, 0);
			$ret.capacity(count);
			return $ret;
		}());
		for (var i = position; i < position + count; ++i) {
			var newValue = this.toObject(this.fastItemsSource().item(i));
			newValues.add1(newValue);
		}
		if (this.values() == null) {
			this.values(newValues);
		} else {
			this.values().insertRange(position, newValues);
		}
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.FastItemObjectColumn::InsertRange(System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.FastItemObjectColumn::ReplaceRange(System.Int32, System.Int32)" />*/
	replaceRange: function (position, count) {
		var ret = false;
		for (var i = 0; i < count; ++i) {
			var oldValue = this.values().__inner[position + i];
			var newValue = this.toObject(this.fastItemsSource().item(position + i));
			if (oldValue != newValue) {
				this.values().__inner[position + i] = newValue;
				ret = true;
			}
		}
		return ret;
	}
	/*<EndMethod Name="System.Boolean Infragistics.FastItemObjectColumn::ReplaceRange(System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.FastItemObjectColumn::RemoveRange(System.Int32, System.Int32)" />*/
	removeRange: function (position, count) {
		this.values().removeRange(position, count);
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.FastItemObjectColumn::RemoveRange(System.Int32, System.Int32)" />*/
	,
	_fastReflectionHelper: null,
	/*<BeginMethod Name="System.Object Infragistics.FastItemObjectColumn::ToObject(System.Object)" />*/
	toObject: function (item) {
		if (item == null) {
			return null;
		}
		var from_ = item;
		item = from_[this.__propertyName];
		if (this.__expectFunctions) {
			from_ = item;
			if (typeof(from_) == 'function') {
				item = from_();
			}
		}
		if (this.__coerceValue != null) {
			item = this.__coerceValue(item);
		}
		return item;
	}
	/*<EndMethod Name="System.Object Infragistics.FastItemObjectColumn::ToObject(System.Object)" />*/
	,
	_values: null,
	/*<BeginProperty Name="System.Collections.Generic.List Infragistics.FastItemObjectColumn::Values()" />*/
	values: function (value) {
		if (arguments.length === 1) {
			this._values = value;
			return value;
		} else {
			return this._values;
		}
	}
	/*<EndProperty Name="System.Collections.Generic.List Infragistics.FastItemObjectColumn::Values()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.FastItemObjectColumn::MayContainUnknowns()" />*/
	mayContainUnknowns: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean Infragistics.FastItemObjectColumn::MayContainUnknowns()" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.List Infragistics.FastItemObjectColumn::GetSortedIndices()" />*/
	getSortedIndices: function () {
		return $.ig.FastItemColumn.prototype.getSortedIndices1(this.values(), function (o1, o2) {
			var d1 = parseFloat(o1);
			var d2 = parseFloat(o2);
			if (d1 < d2) {
				return -1;
			}
			if (d1 > d2) {
				return 1;
			}
			return 0;
		});
	}
	/*<EndMethod Name="System.Collections.Generic.List Infragistics.FastItemObjectColumn::GetSortedIndices()" />*/
	,
	/*<BeginMethod Name=" Infragistics.FastItemObjectColumn::AsArray()" />*/
	asArray: function () {
		return this.values().asArray();
	}
	/*<EndMethod Name=" Infragistics.FastItemObjectColumn::AsArray()" />*/
	,
	$type: new $.ig.Type('FastItemObjectColumn', $.ig.Object.prototype.$type, [$.ig.IFastItemColumnInternal.prototype.$type, $.ig.IFastItemColumn$1.prototype.$type.specialize($.ig.Object.prototype.$type)])
}, true);

/*<EndType Name="Infragistics.FastItemObjectColumn" />*/

/*<BeginType Name="Infragistics.FastItemIntColumn" />*/

$.ig.util.defType('FastItemIntColumn', 'Object', {
	__coerceValue: null,
	__expectFunctions: false,
	init: function (fastItemsSource, propertyName, coerceValue, expectFunctions) {
		this.__propertyName = null;
		$.ig.Object.prototype.init.call(this);
		this.__coerceValue = coerceValue;
		this.__expectFunctions = expectFunctions;
		this.propertyName(propertyName);
		this.fastItemsSource(fastItemsSource);
	},
	/*<BeginProperty Name="Infragistics.IFastItemsSource Infragistics.FastItemIntColumn::FastItemsSource()" />*/
	fastItemsSource: function (value) {
		if (arguments.length === 1) {
			this._fastItemsSource = value;
			this.reset();
			return value;
		} else {
			return this._fastItemsSource;
		}
	}
	/*<EndProperty Name="Infragistics.IFastItemsSource Infragistics.FastItemIntColumn::FastItemsSource()" />*/
	,
	_fastItemsSource: null,
	__propertyName: null,
	/*<BeginProperty Name="System.String Infragistics.FastItemIntColumn::PropertyName()" />*/
	propertyName: function (value) {
		if (arguments.length === 1) {
			this.__propertyName = value;
			return value;
		} else {
			return this.__propertyName;
		}
	}
	/*<EndProperty Name="System.String Infragistics.FastItemIntColumn::PropertyName()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.FastItemIntColumn::Minimum()" />*/
	minimum: function (value) {
		if (arguments.length === 1) {
			this.__minimum = value;
			return value;
		} else {
			return this.__minimum;
		}
	}
	/*<EndProperty Name="System.Int32 Infragistics.FastItemIntColumn::Minimum()" />*/
	,
	__minimum: 0,
	/*<BeginProperty Name="System.Int32 Infragistics.FastItemIntColumn::Maximum()" />*/
	maximum: function (value) {
		if (arguments.length === 1) {
			this.__maximum = value;
			return value;
		} else {
			return this.__maximum;
		}
	}
	/*<EndProperty Name="System.Int32 Infragistics.FastItemIntColumn::Maximum()" />*/
	,
	__maximum: 0,
	/*<BeginProperty Name="System.Int32 Infragistics.FastItemIntColumn::Item(System.Int32)" />*/
	item: function (index, value) {
		if (arguments.length === 2) {
			throw new $.ig.NotImplementedException(0);
			return value;
		} else {
			return this.values().__inner[index];
		}
	}
	/*<EndProperty Name="System.Int32 Infragistics.FastItemIntColumn::Item(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerator Infragistics.FastItemIntColumn::GetEnumerator()" />*/
	getEnumerator: function () {
		return this.values().getEnumerator();
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerator Infragistics.FastItemIntColumn::GetEnumerator()" />*/
	,
	/*<BeginMethod Name="System.Collections.IEnumerator Infragistics.FastItemIntColumn::System.Collections.IEnumerable.GetEnumerator()" />*/
	getEnumerator: function () {
		return this.values().getEnumerator();
	}
	/*<EndMethod Name="System.Collections.IEnumerator Infragistics.FastItemIntColumn::System.Collections.IEnumerable.GetEnumerator()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.FastItemIntColumn::Contains(System.Int32)" />*/
	contains: function (item) {
		return this.values().contains(item);
	}
	/*<EndMethod Name="System.Boolean Infragistics.FastItemIntColumn::Contains(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.FastItemIntColumn::CopyTo(, System.Int32)" />*/
	copyTo: function (array, arrayIndex) {
		this.values().copyTo(array, arrayIndex);
	}
	/*<EndMethod Name="System.Void Infragistics.FastItemIntColumn::CopyTo(, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.FastItemIntColumn::Count()" />*/
	count: function () {
		return this.values().count();
	}
	/*<EndProperty Name="System.Int32 Infragistics.FastItemIntColumn::Count()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.FastItemIntColumn::IsReadOnly()" />*/
	isReadOnly: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean Infragistics.FastItemIntColumn::IsReadOnly()" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.FastItemIntColumn::IndexOf(System.Int32)" />*/
	indexOf: function (item) {
		return this.values().indexOf(item);
	}
	/*<EndMethod Name="System.Int32 Infragistics.FastItemIntColumn::IndexOf(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.FastItemIntColumn::Add(System.Int32)" />*/
	add: function (item) {
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndMethod Name="System.Void Infragistics.FastItemIntColumn::Add(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.FastItemIntColumn::Clear()" />*/
	clear: function () {
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndMethod Name="System.Void Infragistics.FastItemIntColumn::Clear()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.FastItemIntColumn::Remove(System.Int32)" />*/
	remove: function (item) {
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndMethod Name="System.Boolean Infragistics.FastItemIntColumn::Remove(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.FastItemIntColumn::Insert(System.Int32, System.Int32)" />*/
	insert: function (index, item) {
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndMethod Name="System.Void Infragistics.FastItemIntColumn::Insert(System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.FastItemIntColumn::RemoveAt(System.Int32)" />*/
	removeAt: function (index) {
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndMethod Name="System.Void Infragistics.FastItemIntColumn::RemoveAt(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.FastItemIntColumn::Reset()" />*/
	reset: function () {
		this.values(null);
		return this.fastItemsSource() != null ? this.insertRange(0, this.fastItemsSource().count()) : true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.FastItemIntColumn::Reset()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.FastItemIntColumn::InsertRange(System.Int32, System.Int32)" />*/
	insertRange: function (position, count) {
		var newValues = new Array(count);
		var source_ = this._fastItemsSource.asArray();
		var item_;
		var minimum = this.minimum();
		var maximum = this.maximum();
		var newCount = 0;
		var coerce = this.__coerceValue;
		if (this.__coerceValue != null || this.__expectFunctions) {
			for (var i_ = position; i_ < position + count; ++i_) {
				item_ = source_[i_][this.__propertyName];
				if (this.__expectFunctions) {
					if (typeof(item_) == 'function') {
						item_ = item_();
					}
				}
				if (coerce != null) {
					item_ = coerce(item_);
				}
				var newValue = item_ == null ? 0 : $.ig.util.getValue(item_);
				newValues[newCount] = newValue;
				newCount++;
			}
		} else {
			for (var i_ = position; i_ < position + count; ++i_) {
				item_ = source_[i_][this.__propertyName];
				var newValue1 = item_ == null ? 0 : $.ig.util.getValue(item_);
				newValues[newCount] = newValue1;
				newCount++;
			}
		}
		if (this.values() == null) {
			this.values(new $.ig.List$1($.ig.Number.prototype.$type, 1, newValues));
		} else {
			this.values().insertRange(position, newValues);
		}
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.FastItemIntColumn::InsertRange(System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.FastItemIntColumn::ReplaceRange(System.Int32, System.Int32)" />*/
	replaceRange: function (position, count) {
		var ret = false;
		for (var i = 0; i < count; ++i) {
			var oldValue = this.values().__inner[position + i];
			var newValue = this.toInt(this.fastItemsSource().item(position + i));
			if (oldValue != newValue) {
				this.values().__inner[position + i] = newValue;
				ret = true;
			}
		}
		return ret;
	}
	/*<EndMethod Name="System.Boolean Infragistics.FastItemIntColumn::ReplaceRange(System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.FastItemIntColumn::RemoveRange(System.Int32, System.Int32)" />*/
	removeRange: function (position, count) {
		this.values().removeRange(position, count);
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.FastItemIntColumn::RemoveRange(System.Int32, System.Int32)" />*/
	,
	_fastReflectionHelper: null,
	/*<BeginMethod Name="System.Int32 Infragistics.FastItemIntColumn::ToInt(System.Object)" />*/
	toInt: function (item) {
		var from_ = item;
		item = from_[this.__propertyName];
		if (this.__expectFunctions) {
			from_ = item;
			if (typeof(from_) == 'function') {
				item = from_();
			}
		}
		if (this.__coerceValue != null) {
			item = this.__coerceValue(item);
		}
		if (item == null) {
			return 0;
		}
		return $.ig.util.getValue(item);
	}
	/*<EndMethod Name="System.Int32 Infragistics.FastItemIntColumn::ToInt(System.Object)" />*/
	,
	_values: null,
	/*<BeginProperty Name="System.Collections.Generic.List Infragistics.FastItemIntColumn::Values()" />*/
	values: function (value) {
		if (arguments.length === 1) {
			this._values = value;
			return value;
		} else {
			return this._values;
		}
	}
	/*<EndProperty Name="System.Collections.Generic.List Infragistics.FastItemIntColumn::Values()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.FastItemIntColumn::MayContainUnknowns()" />*/
	mayContainUnknowns: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean Infragistics.FastItemIntColumn::MayContainUnknowns()" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.List Infragistics.FastItemIntColumn::GetSortedIndices()" />*/
	getSortedIndices: function () {
		return $.ig.FastItemColumn.prototype.getSortedIndices1(this.values(), function (o1, o2) {
			var d1 = $.ig.util.getValue(o1);
			var d2 = $.ig.util.getValue(o2);
			if (d1 < d2) {
				return -1;
			}
			if (d1 > d2) {
				return 1;
			}
			return 0;
		});
	}
	/*<EndMethod Name="System.Collections.Generic.List Infragistics.FastItemIntColumn::GetSortedIndices()" />*/
	,
	/*<BeginMethod Name=" Infragistics.FastItemIntColumn::AsArray()" />*/
	asArray: function () {
		return this.values().asArray();
	}
	/*<EndMethod Name=" Infragistics.FastItemIntColumn::AsArray()" />*/
	,
	$type: new $.ig.Type('FastItemIntColumn', $.ig.Object.prototype.$type, [$.ig.IFastItemColumnInternal.prototype.$type, $.ig.IFastItemColumn$1.prototype.$type.specialize($.ig.Number.prototype.$type)])
}, true);

/*<EndType Name="Infragistics.FastItemIntColumn" />*/

/*<BeginType Name="Infragistics.IFastItemsSource" />*/

$.ig.util.defType('IFastItemsSource', 'Object', {
	$type: new $.ig.Type('IFastItemsSource', null)
}, true);

/*<EndType Name="Infragistics.IFastItemsSource" />*/

/*<BeginType Name="Infragistics.FastItemsSource" />*/

$.ig.util.defType('FastItemsSource', 'Object', {
	init: function () {
		this._columns = new $.ig.Dictionary$2(String, $.ig.ColumnReference.prototype.$type, 0);
		this._contents = new $.ig.List$1($.ig.Object.prototype.$type, 0);
		this._index = null;
		$.ig.Object.prototype.init.call(this);
	},
	event: null,
	/*<BeginMethod Name="System.Void Infragistics.FastItemsSource::RaiseDataSourceEvent(Infragistics.FastItemsSourceEventAction, System.Int32, System.Int32)" />*/
	raiseDataSourceEvent: function (action, position, count) {
		if (this.event != null) {
			this.event(this, new $.ig.FastItemsSourceEventArgs(0, action, position, count));
		}
	}
	/*<EndMethod Name="System.Void Infragistics.FastItemsSource::RaiseDataSourceEvent(Infragistics.FastItemsSourceEventAction, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.FastItemsSource::RaiseDataSourceEvent(System.Int32, System.String)" />*/
	raiseDataSourceEvent1: function (position, propertyName) {
		if (this.event != null) {
			this.event(this, new $.ig.FastItemsSourceEventArgs(1, position, propertyName));
		}
	}
	/*<EndMethod Name="System.Void Infragistics.FastItemsSource::RaiseDataSourceEvent(System.Int32, System.String)" />*/
	,
	/*<BeginProperty Name="System.Collections.IEnumerable Infragistics.FastItemsSource::ItemsSource()" />*/
	itemsSource: function (value) {
		if (arguments.length === 1) {
			if (this._itemsSource == value) {
				return;
			}
			this.detach();
			this._itemsSource = value;
			this._contents.clear();
			this._index = null;
			this.attach();
			var en = this._columns.values().getEnumerator();
			while (en.moveNext()) {
				var referencedColumn = en.current();
				referencedColumn._fastItemColumn.reset();
			}
			this.raiseDataSourceEvent($.ig.FastItemsSourceEventAction.prototype.insert, 0, this._contents.count());
			return value;
		} else {
			return this._itemsSource;
		}
	}
	/*<EndProperty Name="System.Collections.IEnumerable Infragistics.FastItemsSource::ItemsSource()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.FastItemsSource::Detach()" />*/
	detach: function () {
	}
	/*<EndMethod Name="System.Void Infragistics.FastItemsSource::Detach()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.FastItemsSource::OnItemsSourceEventProxyWeakCollectionChanged(Infragistics.IFastItemsSource, System.Object, System.Collections.Specialized.NotifyCollectionChangedEventArgs)" />*/
	onItemsSourceEventProxyWeakCollectionChanged: function (fastItemsSource, sender, e) {
		var fis = fastItemsSource;
		switch (e.action()) {
			case $.ig.NotifyCollectionChangedAction.prototype.add:
				fis.dataSourceAdd(e.newStartingIndex(), e.newItems());
				break;
			case $.ig.NotifyCollectionChangedAction.prototype.remove:
				fis.dataSourceRemove(e.oldStartingIndex(), e.oldItems());
				break;
			case $.ig.NotifyCollectionChangedAction.prototype.replace:
				fis.dataSourceReplace(e.newStartingIndex(), e.oldItems(), e.newItems());
				break;
			case $.ig.NotifyCollectionChangedAction.prototype.reset:
				fis.dataSourceReset();
				break;
		}
	}
	/*<EndMethod Name="System.Void Infragistics.FastItemsSource::OnItemsSourceEventProxyWeakCollectionChanged(Infragistics.IFastItemsSource, System.Object, System.Collections.Specialized.NotifyCollectionChangedEventArgs)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.FastItemsSource::Attach()" />*/
	attach: function () {
		this._contents.insertRange1(this._contents.count(), this._itemsSource);
	}
	/*<EndMethod Name="System.Void Infragistics.FastItemsSource::Attach()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.FastItemsSource::dataSourceAdd(System.Int32, System.Collections.IList)" />*/
	dataSourceAdd: function (position, newItems) {
		if (this._index != null) {
			for (var i = 0; i < newItems.count(); ++i) {
				this._index.add(newItems.item(i), position + i);
			}
			for (var i1 = position; i1 < this._contents.count(); ++i1) {
				this._index.item(this._contents.__inner[i1], i1 + newItems.count());
			}
		}
		this._contents.insertRange1(position, newItems);
		var en = this._columns.values().getEnumerator();
		while (en.moveNext()) {
			var referencedColumn = en.current();
			referencedColumn._fastItemColumn.insertRange(position, newItems.count());
		}
		this.raiseDataSourceEvent($.ig.FastItemsSourceEventAction.prototype.insert, position, newItems.count());
	}
	/*<EndMethod Name="System.Void Infragistics.FastItemsSource::dataSourceAdd(System.Int32, System.Collections.IList)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.FastItemsSource::dataSourceRemove(System.Int32, System.Collections.IList)" />*/
	dataSourceRemove: function (position, oldItems) {
		this._contents.removeRange(position, oldItems.count());
		if (this._index != null) {
			var en = oldItems.getEnumerator();
			while (en.moveNext()) {
				var item = en.current();
				this._index.remove(item);
			}
			for (var i = position; i < this._contents.count(); ++i) {
				this._index.item(this._contents.__inner[i], i);
			}
		}
		var en1 = this._columns.values().getEnumerator();
		while (en1.moveNext()) {
			var referencedColumn = en1.current();
			referencedColumn._fastItemColumn.removeRange(position, oldItems.count());
		}
		this.raiseDataSourceEvent($.ig.FastItemsSourceEventAction.prototype.remove, position, oldItems.count());
	}
	/*<EndMethod Name="System.Void Infragistics.FastItemsSource::dataSourceRemove(System.Int32, System.Collections.IList)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.FastItemsSource::dataSourceReplace(System.Int32, System.Collections.IList, System.Collections.IList)" />*/
	dataSourceReplace: function (position, oldItems, newItems) {
		for (var i = 0; i < newItems.count(); ++i) {
			this._contents.__inner[position + i] = newItems.item(i);
		}
		if (this._index != null) {
			var en = oldItems.getEnumerator();
			while (en.moveNext()) {
				var item = en.current();
				this._index.remove(item);
			}
			for (var i1 = 0; i1 < newItems.count(); ++i1) {
				this._index.add(newItems.item(i1), position + i1);
			}
		}
		var en1 = this._columns.values().getEnumerator();
		while (en1.moveNext()) {
			var referencedColumn = en1.current();
			referencedColumn._fastItemColumn.replaceRange(position, newItems.count());
		}
		this.raiseDataSourceEvent($.ig.FastItemsSourceEventAction.prototype.replace, position, oldItems.count());
	}
	/*<EndMethod Name="System.Void Infragistics.FastItemsSource::dataSourceReplace(System.Int32, System.Collections.IList, System.Collections.IList)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.FastItemsSource::dataSourceReset()" />*/
	dataSourceReset: function () {
		this._contents.clear();
		this._index = null;
		this._contents.insertRange1(0, this._itemsSource);
		var en = this._columns.values().getEnumerator();
		while (en.moveNext()) {
			var referencedColumn = en.current();
			referencedColumn._fastItemColumn.reset();
		}
		this.raiseDataSourceEvent($.ig.FastItemsSourceEventAction.prototype.reset, 0, this._contents.count());
	}
	/*<EndMethod Name="System.Void Infragistics.FastItemsSource::dataSourceReset()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.FastItemsSource::dataSourceChange(System.Object, System.String)" />*/
	dataSourceChange: function (item, propertyName) {
		var $self = this;
		var columnReference = null;
		var position = this.indexOf(item);
		if (position == -1) {
			throw new $.ig.ArgumentException(1, "item");
		}
		if (String.isNullOrEmpty(propertyName)) {
			var en = this._columns.getEnumerator();
			while (en.moveNext()) {
				var col = en.current();
				col.value()._fastItemColumn.replaceRange(position, 1);
				this.raiseDataSourceEvent1(position, col.value()._fastItemColumn.propertyName());
			}
		} else {
			if ((function () { var $ret = $self._columns.tryGetValue(propertyName, columnReference); columnReference = $ret.p1; return $ret.ret; }())) {
				columnReference._fastItemColumn.replaceRange(position, 1);
			}
			if ((function () { var $ret = $self._columns.tryGetValue(propertyName + "_object", columnReference); columnReference = $ret.p1; return $ret.ret; }())) {
				columnReference._fastItemColumn.replaceRange(position, 1);
			}
			this.raiseDataSourceEvent1(position, propertyName);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.FastItemsSource::dataSourceChange(System.Object, System.String)" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.FastItemsSource::Count()" />*/
	count: function () {
		return this._contents.count();
	}
	/*<EndProperty Name="System.Int32 Infragistics.FastItemsSource::Count()" />*/
	,
	/*<BeginProperty Name="System.Object Infragistics.FastItemsSource::Item(System.Int32)" />*/
	item: function (i) {
		return this._contents.__inner[i];
	}
	/*<EndProperty Name="System.Object Infragistics.FastItemsSource::Item(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Collections.IEnumerator Infragistics.FastItemsSource::GetEnumerator()" />*/
	getEnumerator: function () {
		return this._contents.getEnumerator();
	}
	/*<EndMethod Name="System.Collections.IEnumerator Infragistics.FastItemsSource::GetEnumerator()" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.FastItemsSource::IndexOf(System.Object)" />*/
	indexOf: function (item) {
		var $self = this;
		var ret;
		if (this._index == null && this._contents.count() > 0) {
			this._index = new $.ig.Dictionary$2($.ig.Object.prototype.$type, $.ig.Number.prototype.$type, 0);
			var contents_ = this._contents;
			var index_ = this._index;
			for (var j_ = 0; j_ < this._contents.count(); j_++) {
				var o = contents_.__inner[j_];
				if (!this._index.containsKey(o)) {
					this._index.add(o, j_);
				}
			}
		}
		if ((function () { var $ret = $self._index.tryGetValue(item, ret); ret = $ret.p1; return $ret.ret; }())) {
			return ret;
		} else {
			return -1;
		}
	}
	/*<EndMethod Name="System.Int32 Infragistics.FastItemsSource::IndexOf(System.Object)" />*/
	,
	/*<BeginMethod Name="Infragistics.IFastItemColumn Infragistics.FastItemsSource::RegisterColumnDateTime(System.String, System.Func, System.Boolean)" />*/
	registerColumnDateTime: function (propertyName, coerceValue, expectFunctions) {
		var $self = this;
		var fastItemColumn = null;
		if (propertyName != null) {
			var columnReference = null;
			if (!(function () { var $ret = $self._columns.tryGetValue(propertyName, columnReference); columnReference = $ret.p1; return $ret.ret; }())) {
				columnReference = new $.ig.ColumnReference(new $.ig.FastItemDateTimeColumn(this, propertyName, coerceValue, expectFunctions));
				this._columns.add(propertyName, columnReference);
			}
			columnReference.references(columnReference.references() + 1);
			fastItemColumn = $.ig.util.cast($.ig.IFastItemColumn$1.prototype.$type.specialize($.ig.Date.prototype.$type), columnReference._fastItemColumn);
		}
		return fastItemColumn;
	}
	/*<EndMethod Name="Infragistics.IFastItemColumn Infragistics.FastItemsSource::RegisterColumnDateTime(System.String, System.Func, System.Boolean)" />*/
	,
	/*<BeginMethod Name="Infragistics.IFastItemColumn Infragistics.FastItemsSource::RegisterColumnObject(System.String, System.Func, System.Boolean)" />*/
	registerColumnObject: function (propertyName, coerceValue, expectFunctions) {
		var $self = this;
		var fastItemColumn = null;
		var key = propertyName + "_object";
		if (propertyName != null) {
			var columnReference = null;
			if (!(function () { var $ret = $self._columns.tryGetValue(key, columnReference); columnReference = $ret.p1; return $ret.ret; }())) {
				columnReference = new $.ig.ColumnReference(new $.ig.FastItemObjectColumn(this, propertyName, coerceValue, expectFunctions));
				this._columns.add(key, columnReference);
			}
			columnReference.references(columnReference.references() + 1);
			fastItemColumn = $.ig.util.cast($.ig.IFastItemColumn$1.prototype.$type.specialize($.ig.Object.prototype.$type), columnReference._fastItemColumn);
		}
		return fastItemColumn;
	}
	/*<EndMethod Name="Infragistics.IFastItemColumn Infragistics.FastItemsSource::RegisterColumnObject(System.String, System.Func, System.Boolean)" />*/
	,
	/*<BeginMethod Name="Infragistics.IFastItemColumn Infragistics.FastItemsSource::RegisterColumnInt(System.String, System.Func, System.Boolean)" />*/
	registerColumnInt: function (propertyName, coerceValue, expectFunctions) {
		var $self = this;
		var fastItemColumn = null;
		if (propertyName == null) {
			propertyName = "";
		}
		var columnReference = null;
		if (!(function () { var $ret = $self._columns.tryGetValue(propertyName, columnReference); columnReference = $ret.p1; return $ret.ret; }())) {
			columnReference = new $.ig.ColumnReference(new $.ig.FastItemIntColumn(this, propertyName, coerceValue, expectFunctions));
			this._columns.add(propertyName, columnReference);
		}
		columnReference.references(columnReference.references() + 1);
		fastItemColumn = $.ig.util.cast($.ig.IFastItemColumn$1.prototype.$type.specialize($.ig.Number.prototype.$type), columnReference._fastItemColumn);
		return fastItemColumn;
	}
	/*<EndMethod Name="Infragistics.IFastItemColumn Infragistics.FastItemsSource::RegisterColumnInt(System.String, System.Func, System.Boolean)" />*/
	,
	/*<BeginMethod Name="Infragistics.IFastItemColumn Infragistics.FastItemsSource::RegisterColumn(System.String, System.Func, System.Boolean)" />*/
	registerColumn: function (propertyName, coerceValue, expectFunctions) {
		var $self = this;
		var fastItemColumn = null;
		if (propertyName == null) {
			propertyName = "";
		}
		var columnReference = null;
		if (!(function () { var $ret = $self._columns.tryGetValue(propertyName, columnReference); columnReference = $ret.p1; return $ret.ret; }())) {
			columnReference = new $.ig.ColumnReference(new $.ig.FastItemColumn(this, propertyName, coerceValue, expectFunctions));
			this._columns.add(propertyName, columnReference);
		}
		columnReference.references(columnReference.references() + 1);
		fastItemColumn = $.ig.util.cast($.ig.IFastItemColumn$1.prototype.$type.specialize(Number), columnReference._fastItemColumn);
		return fastItemColumn;
	}
	/*<EndMethod Name="Infragistics.IFastItemColumn Infragistics.FastItemsSource::RegisterColumn(System.String, System.Func, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.FastItemsSource::DeregisterColumn(Infragistics.IFastItemColumnPropertyName)" />*/
	deregisterColumn: function (fastItemColumn) {
		var $self = this;
		var propertyName = fastItemColumn != null ? fastItemColumn.propertyName() : null;
		var key = propertyName;
		if ($.ig.util.cast($.ig.IFastItemColumn$1.prototype.$type.specialize($.ig.Object.prototype.$type), fastItemColumn) !== null) {
			key += "_object";
		}
		if (propertyName != null) {
			var columnReference = null;
			if ((function () { var $ret = $self._columns.tryGetValue(propertyName, columnReference); columnReference = $ret.p1; return $ret.ret; }())) {
				columnReference.references(columnReference.references() - 1);
				if (columnReference.references() == 0) {
					this._columns.remove(key);
				}
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.FastItemsSource::DeregisterColumn(Infragistics.IFastItemColumnPropertyName)" />*/
	,
	_columns: null,
	_itemsSource: null,
	_contents: null,
	_index: null,
	/*<BeginMethod Name=" Infragistics.FastItemsSource::AsArray()" />*/
	asArray: function () {
		return this._contents.asArray();
	}
	/*<EndMethod Name=" Infragistics.FastItemsSource::AsArray()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.FastItemsSource::HandleCollectionChanged(System.Collections.Specialized.NotifyCollectionChangedEventArgs)" />*/
	handleCollectionChanged: function (e) {
		switch (e.action()) {
			case $.ig.NotifyCollectionChangedAction.prototype.add:
				this.dataSourceAdd(e.newStartingIndex(), e.newItems());
				break;
			case $.ig.NotifyCollectionChangedAction.prototype.remove:
				this.dataSourceRemove(e.oldStartingIndex(), e.oldItems());
				break;
			case $.ig.NotifyCollectionChangedAction.prototype.replace:
				this.dataSourceReplace(e.newStartingIndex(), e.oldItems(), e.newItems());
				break;
			case $.ig.NotifyCollectionChangedAction.prototype.reset:
				this.dataSourceReset();
				break;
		}
	}
	/*<EndMethod Name="System.Void Infragistics.FastItemsSource::HandleCollectionChanged(System.Collections.Specialized.NotifyCollectionChangedEventArgs)" />*/
	,
	$type: new $.ig.Type('FastItemsSource', $.ig.Object.prototype.$type, [$.ig.IEnumerable.prototype.$type, $.ig.IFastItemsSource.prototype.$type])
}, true);

/*<EndType Name="Infragistics.FastItemsSource" />*/

/*<BeginType Name="Infragistics.ColumnReference" />*/

$.ig.util.defType('ColumnReference', 'Object', {
	init: function (fastItemColumn) {
		$.ig.Object.prototype.init.call(this);
		this._fastItemColumn = fastItemColumn;
		this.references(0);
	},
	_fastItemColumn: null,
	_references: 0,
	/*<BeginProperty Name="System.Int32 Infragistics.ColumnReference::References()" />*/
	references: function (value) {
		if (arguments.length === 1) {
			this._references = value;
			return value;
		} else {
			return this._references;
		}
	}
	/*<EndProperty Name="System.Int32 Infragistics.ColumnReference::References()" />*/
	,
	$type: new $.ig.Type('ColumnReference', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.ColumnReference" />*/

/*<BeginType Name="Infragistics.FastItemsSourceReference" />*/

$.ig.util.defType('FastItemsSourceReference', 'Object', {
	init: function (source) {
		$.ig.Object.prototype.init.call(this);
		this._fastItemsSource = source;
		this._references = 0;
	},
	_fastItemsSource: null,
	_references: 0,
	$type: new $.ig.Type('FastItemsSourceReference', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.FastItemsSourceReference" />*/

/*<BeginType Name="Infragistics.IFastItemsSourceProvider" />*/

$.ig.util.defType('IFastItemsSourceProvider', 'Object', {
	$type: new $.ig.Type('IFastItemsSourceProvider', null)
}, true);

/*<EndType Name="Infragistics.IFastItemsSourceProvider" />*/

/*<BeginType Name="Infragistics.FastReflectionHelper" />*/

$.ig.util.defType('FastReflectionHelper', 'Object', {
	init: function (useTraditionalReflection, propertyName) {
		$.ig.Object.prototype.init.call(this);
		this.useTraditionalReflection(useTraditionalReflection);
		this.updatePropertyName(propertyName);
	},
	__propertyName: null,
	/*<BeginMethod Name="System.Void Infragistics.FastReflectionHelper::UpdatePropertyName(System.String)" />*/
	updatePropertyName: function (propertyName) {
		this.__propertyName = propertyName;
	}
	/*<EndMethod Name="System.Void Infragistics.FastReflectionHelper::UpdatePropertyName(System.String)" />*/
	,
	_useTraditionalReflection: false,
	/*<BeginProperty Name="System.Boolean Infragistics.FastReflectionHelper::UseTraditionalReflection()" />*/
	useTraditionalReflection: function (value) {
		if (arguments.length === 1) {
			this._useTraditionalReflection = value;
			return value;
		} else {
			return this._useTraditionalReflection;
		}
	}
	/*<EndProperty Name="System.Boolean Infragistics.FastReflectionHelper::UseTraditionalReflection()" />*/
	,
	/*<BeginMethod Name="System.Object Infragistics.FastReflectionHelper::GetPropertyValue(System.Object)" />*/
	getPropertyValue: function (item) {
		var from_ = item;
		return from_[this.__propertyName];
	}
	/*<EndMethod Name="System.Object Infragistics.FastReflectionHelper::GetPropertyValue(System.Object)" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.FastReflectionHelper::Invalid()" />*/
	invalid: function () {
		return false;
	}
	/*<EndProperty Name="System.Boolean Infragistics.FastReflectionHelper::Invalid()" />*/
	,
	$type: new $.ig.Type('FastReflectionHelper', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.FastReflectionHelper" />*/

/*<BeginType Name="Infragistics.IRenderer" />*/

$.ig.util.defType('IRenderer', 'Object', {
	$type: new $.ig.Type('IRenderer', null)
}, true);

/*<EndType Name="Infragistics.IRenderer" />*/

/*<BeginType Name="Infragistics.BrushUtil" />*/

$.ig.util.defType('BrushUtil', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Windows.Media.Brush Infragistics.BrushUtil::GetLightened(System.Windows.Media.Brush, System.Double)" />*/
	getLightened: function (brush, interpolation) {
		if (brush == null) {
			return brush;
		}
		if (brush._isGradient) {
			var newBrush = (brush).clone();
			for (var i = 0; i < newBrush._gradientStops.length; i++) {
				var currentStop = newBrush._gradientStops[i];
				currentStop.color($.ig.ColorUtil.prototype.getLightened(currentStop.color(), interpolation));
			}
			return newBrush;
		} else {
			var l = $.ig.ColorUtil.prototype.getLightened(brush.color(), interpolation);
			return (function () {
				var $ret = new $.ig.Brush();
				$ret.color(l);
				return $ret;
			}());
		}
	}
	/*<EndMethod Name="System.Windows.Media.Brush Infragistics.BrushUtil::GetLightened(System.Windows.Media.Brush, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Windows.Media.Brush Infragistics.BrushUtil::GetInterpolation(System.Windows.Media.Brush, System.Double, System.Windows.Media.Brush, Infragistics.InterpolationMode)" />*/
	getInterpolation: function (minimum, interpolation, maximum, interpolationMode) {
		var target = new $.ig.Brush();
		if (minimum == null && maximum == null) {
			target.__fill = "transparent";
			return target;
		}
		var minSolid = null, maxSolid = null;
		var minLinear = null, maxLinear = null;
		if (minimum == null) {
			var c = maximum._isGradient ? (function () {
				var $ret = new $.ig.Color();
				$ret.a(0);
				$ret.r(255);
				$ret.g(255);
				$ret.b(255);
				return $ret;
			}()) : (function () {
				var $ret = new $.ig.Color();
				$ret.a(0);
				$ret.r(maximum.color().r());
				$ret.g(maximum.color().g());
				$ret.b(maximum.color().b());
				return $ret;
			}());
			minSolid = (function () {
				var $ret = new $.ig.Brush();
				$ret.color(c);
				return $ret;
			}());
		} else {
			if (minimum._isGradient) {
				minLinear = minimum;
			} else {
				minSolid = minimum;
			}
		}
		if (maximum == null) {
			var c1 = minimum._isGradient ? (function () {
				var $ret = new $.ig.Color();
				$ret.a(0);
				$ret.r(255);
				$ret.g(255);
				$ret.b(255);
				return $ret;
			}()) : (function () {
				var $ret = new $.ig.Color();
				$ret.a(0);
				$ret.r(minimum.color().r());
				$ret.g(minimum.color().g());
				$ret.b(minimum.color().b());
				return $ret;
			}());
			maxSolid = (function () {
				var $ret = new $.ig.Brush();
				$ret.color(c1);
				return $ret;
			}());
		} else {
			if (maximum._isGradient) {
				maxLinear = maximum;
			} else {
				maxSolid = maximum;
			}
		}
		if (minSolid != null && maxSolid != null) {
			return $.ig.BrushUtil.prototype.solidSolid(minSolid, interpolation, maxSolid, interpolationMode);
		}
		if (minSolid != null && maxLinear != null) {
			return $.ig.BrushUtil.prototype.solidLinear(minSolid, interpolation, maxLinear, interpolationMode);
		}
		if (minLinear != null && maxSolid != null) {
			return $.ig.BrushUtil.prototype.solidLinear(maxSolid, 1 - interpolation, minLinear, interpolationMode);
		}
		if (minLinear != null && maxLinear != null) {
			return $.ig.BrushUtil.prototype.linearLinear(minLinear, interpolation, maxLinear, interpolationMode);
		}
		return target;
	}
	/*<EndMethod Name="System.Windows.Media.Brush Infragistics.BrushUtil::GetInterpolation(System.Windows.Media.Brush, System.Double, System.Windows.Media.Brush, Infragistics.InterpolationMode)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.BrushUtil::IsTransparent(System.Windows.Media.Brush)" />*/
	isTransparent: function (brush) {
		if (brush == null || brush.__fill == "transparent") {
			return true;
		}
		var fill = brush.__fill;
		fill = fill.trim([]);
		if (fill.substr(0, 4) == "rgba") {
			var parts = fill.substr(5).split(',');
			if (parts.length == 4) {
				var opacity = parts[3];
				opacity = opacity.trim([]);
				if (opacity.charAt(0) == '0') {
					for (var i = 1; i < opacity.length; i++) {
						var c = opacity.charAt(i);
						switch (c) {
							case '.': break;
							case ')': return true;
							case '1':
							case '2':
							case '3':
							case '4':
							case '5':
							case '6':
							case '7':
							case '8':
							case '9':
								return false;
						}
					}
				}
			}
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.BrushUtil::IsTransparent(System.Windows.Media.Brush)" />*/
	,
	/*<BeginMethod Name="System.Windows.Media.Brush Infragistics.BrushUtil::SolidSolid(System.Windows.Media.Brush, System.Double, System.Windows.Media.Brush, Infragistics.InterpolationMode)" />*/
	solidSolid: function (min, p, max, interpolationMode) {
		var b = new $.ig.Brush();
		b.color($.ig.ColorUtil.prototype.getInterpolation(min.color(), p, max.color(), interpolationMode));
		return b;
	}
	/*<EndMethod Name="System.Windows.Media.Brush Infragistics.BrushUtil::SolidSolid(System.Windows.Media.Brush, System.Double, System.Windows.Media.Brush, Infragistics.InterpolationMode)" />*/
	,
	/*<BeginMethod Name="System.Windows.Media.Brush Infragistics.BrushUtil::SolidLinear(System.Windows.Media.Brush, System.Double, System.Windows.Media.LinearGradientBrush, Infragistics.InterpolationMode)" />*/
	solidLinear: function (min, p, max, interpolationMode) {
		var b = new $.ig.LinearGradientBrush();
		b._gradientStops = $.ig.BrushUtil.prototype.gradientStops1(min.color(), p, max._gradientStops, interpolationMode);
		if (max._useCustomDirection) {
			b._useCustomDirection = true;
			b._startX = max._startX;
			b._startY = max._startY;
			b._endX = max._endX;
			b._endY = max._endY;
		}
		return b;
	}
	/*<EndMethod Name="System.Windows.Media.Brush Infragistics.BrushUtil::SolidLinear(System.Windows.Media.Brush, System.Double, System.Windows.Media.LinearGradientBrush, Infragistics.InterpolationMode)" />*/
	,
	/*<BeginMethod Name="System.Windows.Media.Brush Infragistics.BrushUtil::LinearLinear(System.Windows.Media.LinearGradientBrush, System.Double, System.Windows.Media.LinearGradientBrush, Infragistics.InterpolationMode)" />*/
	linearLinear: function (min, p, max, interpolationMode) {
		var b = new $.ig.LinearGradientBrush();
		b._gradientStops = $.ig.BrushUtil.prototype.gradientStops(min._gradientStops, p, max._gradientStops, interpolationMode);
		if (min._useCustomDirection || max._useCustomDirection) {
			b._useCustomDirection = true;
			b._startX = min._startX + p * (max._startX - min._startX);
			b._startY = min._startY + p * (max._startY - min._startY);
			b._endX = (1 - p) * min._endX + p * max._endX;
			b._endY = (1 - p) * min._endY + p * max._endY;
		}
		return b;
	}
	/*<EndMethod Name="System.Windows.Media.Brush Infragistics.BrushUtil::LinearLinear(System.Windows.Media.LinearGradientBrush, System.Double, System.Windows.Media.LinearGradientBrush, Infragistics.InterpolationMode)" />*/
	,
	/*<BeginMethod Name=" Infragistics.BrushUtil::GradientStops(System.Windows.Media.Color, System.Double, , Infragistics.InterpolationMode)" />*/
	gradientStops1: function (min, p, max, interpolationMode) {
		var gradientStopCollection = new Array(max.length);
		for (var i = 0; i < max.length; ++i) {
			gradientStopCollection[i] = (function () {
				var $ret = new $.ig.GradientStop();
				$ret._offset = max[i]._offset;
				$ret.color($.ig.ColorUtil.prototype.getInterpolation(min, p, max[i].color(), interpolationMode));
				return $ret;
			}());
		}
		return gradientStopCollection;
	}
	/*<EndMethod Name=" Infragistics.BrushUtil::GradientStops(System.Windows.Media.Color, System.Double, , Infragistics.InterpolationMode)" />*/
	,
	/*<BeginMethod Name=" Infragistics.BrushUtil::GradientStops(, System.Double, , Infragistics.InterpolationMode)" />*/
	gradientStops: function (min, p, max, interpolationMode) {
		var minimumCount = Math.min(min.length, max.length);
		var maxCount = Math.max(min.length, max.length);
		var gradientStopCollection = new Array(maxCount);
		var i = 0;
		for (; i < minimumCount; ++i) {
			gradientStopCollection[i] = (function () {
				var $ret = new $.ig.GradientStop();
				$ret._offset = (1 - p) * min[i]._offset + p * max[i]._offset;
				$ret.color($.ig.ColorUtil.prototype.getInterpolation(min[i].color(), p, max[i].color(), interpolationMode));
				return $ret;
			}());
		}
		for (; i < min.length; ++i) {
			gradientStopCollection[i] = (function () {
				var $ret = new $.ig.GradientStop();
				$ret._offset = (1 - p) * min[i]._offset + p * max[max.length - 1]._offset;
				$ret.color($.ig.ColorUtil.prototype.getInterpolation(min[i].color(), p, max[max.length - 1].color(), interpolationMode));
				return $ret;
			}());
		}
		for (; i < max.length; ++i) {
			gradientStopCollection[i] = (function () {
				var $ret = new $.ig.GradientStop();
				$ret._offset = (1 - p) * min[min.length - 1]._offset + p * max[i]._offset;
				$ret.color($.ig.ColorUtil.prototype.getInterpolation(min[min.length - 1].color(), p, max[i].color(), interpolationMode));
				return $ret;
			}());
		}
		return gradientStopCollection;
	}
	/*<EndMethod Name=" Infragistics.BrushUtil::GradientStops(, System.Double, , Infragistics.InterpolationMode)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.BrushUtil::IsFullyTransparent(System.Windows.Media.Brush)" />*/
	isFullyTransparent: function (brush) {
		var linearBrush = $.ig.util.cast($.ig.LinearGradientBrush.prototype.$type, brush);
		if (linearBrush != null) {
			return $.ig.BrushUtil.prototype.isFullyTransparent2(linearBrush);
		}
		if (brush.color().a() == 0) {
			return true;
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.BrushUtil::IsFullyTransparent(System.Windows.Media.Brush)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.BrushUtil::IsFullyTransparent(System.Windows.Media.LinearGradientBrush)" />*/
	isFullyTransparent2: function (brush) {
		var $t = brush._gradientStops;
		for (var i = 0; i < $t.length; i++) {
			var stop = $t[i];
			if (!$.ig.BrushUtil.prototype.isFullyTransparent1(stop)) {
				return false;
			}
		}
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.BrushUtil::IsFullyTransparent(System.Windows.Media.LinearGradientBrush)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.BrushUtil::IsFullyTransparent(System.Windows.Media.GradientStop)" />*/
	isFullyTransparent1: function (gradientStop) {
		if (gradientStop.color().a() == 0) {
			return true;
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.BrushUtil::IsFullyTransparent(System.Windows.Media.GradientStop)" />*/
	,
	/*<BeginMethod Name=" Infragistics.BrushUtil::GetCssBrushColors(System.String, System.Html.IDomWrapper)" />*/
	getCssBrushColors: function (className, obj) {
		var brushes = new Array(2);
		obj.addClass(className);
		var fill = new $.ig.Brush();
		fill.__fill = obj.getStyleProperty("background-color");
		var outline = new $.ig.Brush();
		outline.__fill = obj.getStyleProperty("border-top-color");
		obj.removeClass(className);
		brushes[0] = fill;
		brushes[1] = outline;
		return brushes;
	}
	/*<EndMethod Name=" Infragistics.BrushUtil::GetCssBrushColors(System.String, System.Html.IDomWrapper)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.BrushUtil::GetBrushCollection(System.String, System.Html.IDomRenderer, Infragistics.BrushCollection, Infragistics.BrushCollection, )" />*/
	getBrushCollection: function (palleteName_, container_, brushes, outlines, defaultColors) {
		brushes = new $.ig.BrushCollection();
		outlines = new $.ig.BrushCollection();
		var tempBrush;
		var names = new $.ig.List$1(String, 0);
		names.add("background-color");
		names.add("border-top-color");
		container_.startCSSQuery();
		var isNotInDom = false;
		var palette = container_.getCssDefaultValuesForClassCollection("ui-" + palleteName_ + "-palette-", names.toArray());
		var numPaletteColors = palette.length;
		if (numPaletteColors == 0) {
			if (defaultColors == null) {
				defaultColors = [ "#B1BFC9", "#50a8be", "#798995", "#fc6754", "#4F606C", "#fec33c", "#374650", "#3c6399", "#162C3B", "#91af49" ];
			}
			for (var i = 0; i < defaultColors.length - 1; i += 2) {
				tempBrush = new $.ig.Brush();
				tempBrush.__fill = defaultColors[i];
				outlines.add(tempBrush);
				tempBrush = new $.ig.Brush();
				tempBrush.__fill = defaultColors[i + 1];
				brushes.add(tempBrush);
			}
		}
		for (var i1 = 0; i1 < numPaletteColors; i1++) {
			var fillBrush = new $.ig.Brush();
			fillBrush.__fill = palette[i1][0];
			var outlineBrush = new $.ig.Brush();
			outlineBrush.__fill = palette[i1][1];
			brushes.add(fillBrush);
			outlines.add(outlineBrush);
		}
		container_.endCSSQuery();
		return {
			p2: brushes,
			p3: outlines
		};
	}
	/*<EndMethod Name="System.Void Infragistics.BrushUtil::GetBrushCollection(System.String, System.Html.IDomRenderer, Infragistics.BrushCollection, Infragistics.BrushCollection, )" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.BrushUtil::GetGradientBrushCollection(System.String, System.String, System.String, System.Html.IDomRenderer, Infragistics.BrushCollection, Infragistics.BrushCollection, )" />*/
	getGradientBrushCollection: function (fillGradientPaletteName, outlineGradientPaletteName, paletteName, container_, brushes, outlines, defaultColors) {
		brushes = new $.ig.BrushCollection();
		outlines = new $.ig.BrushCollection();
		if (defaultColors == null) {
			defaultColors = [ "#B1BFC9", "#50a8be", "#798995", "#fc6754", "#4F606C", "#fec33c", "#374650", "#3c6399", "#162C3B", "#91af49" ];
		}
		container_.startCSSQuery();
		var names = new $.ig.List$1(String, 0);
		names.add("background-image");
		var fillsPalette = container_.getCssDefaultValuesForClassCollection(fillGradientPaletteName, names.toArray());
		var numFillsPaletteColors = fillsPalette.length;
		var outlinesPalette = container_.getCssDefaultValuesForClassCollection(outlineGradientPaletteName, names.toArray());
		var numOutlinesPaletteColors = outlinesPalette.length;
		for (var i = 0; i < numFillsPaletteColors; i++) {
			brushes.add($.ig.CssGradientUtil.prototype.brushFromGradientString(fillsPalette[i][0]));
		}
		for (var i1 = 0; i1 < numOutlinesPaletteColors; i1++) {
			outlines.add($.ig.CssGradientUtil.prototype.brushFromGradientString(outlinesPalette[i1][0]));
		}
		names.clear();
		var fillIndex = 0;
		var outlineIndex = 0;
		var numPaletteColors = Math.min(numFillsPaletteColors, numOutlinesPaletteColors);
		var palette = null;
		if (numFillsPaletteColors == 0) {
			names.add("background-color");
		}
		if (numOutlinesPaletteColors == 0) {
			names.add("border-top-color");
			outlineIndex = numFillsPaletteColors == 0 ? 1 : 0;
		}
		if (names.count() > 0) {
			palette = container_.getCssDefaultValuesForClassCollection(paletteName, names.toArray());
			numPaletteColors = palette.length;
		}
		if (numFillsPaletteColors == 0) {
			if (numPaletteColors > 0) {
				for (var i2 = 0; i2 < numPaletteColors; i2++) {
					var fillBrush = new $.ig.Brush();
					fillBrush.__fill = palette[i2][fillIndex];
					brushes.add(fillBrush);
				}
			} else {
				for (var i3 = 0; i3 < defaultColors.length - 1; i3 += 2) {
					var fillBrush1 = new $.ig.Brush();
					fillBrush1 = new $.ig.Brush();
					fillBrush1.__fill = defaultColors[i3 + 1];
					brushes.add(fillBrush1);
				}
			}
		}
		if (numOutlinesPaletteColors == 0) {
			if (numPaletteColors > 0) {
				for (var i4 = 0; i4 < numPaletteColors; i4++) {
					var outlineBrush = new $.ig.Brush();
					outlineBrush.__fill = palette[i4][outlineIndex];
					outlines.add(outlineBrush);
				}
			} else {
				for (var i5 = 0; i5 < defaultColors.length - 1; i5 += 2) {
					var outlineBrush1 = new $.ig.Brush();
					outlineBrush1.__fill = defaultColors[i5];
					outlines.add(outlineBrush1);
				}
			}
		}
		container_.endCSSQuery();
		return {
			p4: brushes,
			p5: outlines
		};
	}
	/*<EndMethod Name="System.Void Infragistics.BrushUtil::GetGradientBrushCollection(System.String, System.String, System.String, System.Html.IDomRenderer, Infragistics.BrushCollection, Infragistics.BrushCollection, )" />*/
	,
	/*<BeginMethod Name="System.Windows.Media.Brush Infragistics.BrushUtil::GetGradientBrush(System.String, System.String, System.String, System.Html.IDomRenderer, System.String)" />*/
	getGradientBrush: function (gradientClassName, className, cssProp, container_, fallbackColor) {
		var b = null;
		container_.startCSSQuery();
		var gradientString = container_.getCssDefaultPropertyValue(gradientClassName, "background-image");
		if (gradientString != null) {
			b = $.ig.CssGradientUtil.prototype.brushFromGradientString(gradientString);
		}
		if (b == null) {
			b = new $.ig.Brush();
			var fillColor = container_.getCssDefaultPropertyValue(className, cssProp);
			b.__fill = fillColor != null ? fillColor : fallbackColor;
		}
		container_.endCSSQuery();
		return b;
	}
	/*<EndMethod Name="System.Windows.Media.Brush Infragistics.BrushUtil::GetGradientBrush(System.String, System.String, System.String, System.Html.IDomRenderer, System.String)" />*/
	,
	$type: new $.ig.Type('BrushUtil', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.BrushUtil" />*/

/*<BeginType Name="Infragistics.ColorUtil" />*/

$.ig.util.defType('ColorUtil', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Windows.Media.Color Infragistics.ColorUtil::RandomColor(System.Byte)" />*/
	randomColor: function (alpha) {
		return $.ig.Color.prototype.fromArgb(alpha, $.ig.ColorUtil.prototype._r.next2(0, 255), $.ig.ColorUtil.prototype._r.next2(0, 255), $.ig.ColorUtil.prototype._r.next2(0, 255));
	}
	/*<EndMethod Name="System.Windows.Media.Color Infragistics.ColorUtil::RandomColor(System.Byte)" />*/
	,
	/*<BeginMethod Name="System.Windows.Media.Color Infragistics.ColorUtil::RandomHue(System.Windows.Media.Color)" />*/
	randomHue: function (color) {
		var ahsv = $.ig.ColorUtil.prototype.getAHSV(color);
		return $.ig.ColorUtil.prototype.fromAHSV(ahsv[0], $.ig.ColorUtil.prototype._r.next2(0, 359), ahsv[2], ahsv[3]);
	}
	/*<EndMethod Name="System.Windows.Media.Color Infragistics.ColorUtil::RandomHue(System.Windows.Media.Color)" />*/
	,
	/*<BeginMethod Name="System.Windows.Media.Color Infragistics.ColorUtil::GetInterpolation(System.Windows.Media.Color, System.Double, System.Windows.Media.Color, Infragistics.InterpolationMode)" />*/
	getInterpolation: function (minimum, interpolation_, maximum_, interpolationMode) {
		var min_ = minimum;
		switch (interpolationMode) {
			case $.ig.InterpolationMode.prototype.hSV:
				{
					var b = $.ig.ColorUtil.prototype.getAHSV(minimum);
					var e = $.ig.ColorUtil.prototype.getAHSV(maximum_);
					var b1 = b[1] >= 0 ? b[1] : e[1];
					var e1 = e[1] >= 0 ? e[1] : b[1];
					if (b1 >= 0 && e1 >= 0 && Math.abs(e1 - b1) > 180) {
						if (e1 > b1) {
							b1 += 360;
						} else {
							e1 += 360;
						}
					}
					interpolation_ = Math.max(0, Math.min(1, interpolation_));
					return $.ig.ColorUtil.prototype.fromAHSV(b[0] + interpolation_ * (e[0] - b[0]), b1 + interpolation_ * (e1 - b1), b[2] + interpolation_ * (e[2] - b[2]), b[3] + interpolation_ * (e[3] - b[3]));
				}
			case $.ig.InterpolationMode.prototype.rGB: return $.ig.Color.prototype.fromArgb(min_.__a + interpolation_ * (maximum_.__a - min_.__a), min_.__r + interpolation_ * (maximum_.__r - min_.__r), min_.__g + interpolation_ * (maximum_.__g - min_.__g), min_.__b + interpolation_ * (maximum_.__b - min_.__b));
		}
		return minimum;
	}
	/*<EndMethod Name="System.Windows.Media.Color Infragistics.ColorUtil::GetInterpolation(System.Windows.Media.Color, System.Double, System.Windows.Media.Color, Infragistics.InterpolationMode)" />*/
	,
	/*<BeginMethod Name="System.Windows.Media.Color Infragistics.ColorUtil::GetAHSVInterpolation(, System.Double, )" />*/
	getAHSVInterpolation: function (minimum, interpolation, maximum) {
		var b1 = minimum[1] >= 0 ? minimum[1] : maximum[1];
		var e1 = maximum[1] >= 0 ? maximum[1] : minimum[1];
		if (b1 >= 0 && e1 >= 0 && Math.abs(e1 - b1) > 180) {
			if (e1 > b1) {
				b1 += 360;
			} else {
				e1 += 360;
			}
		}
		interpolation = Math.max(0, Math.min(1, interpolation));
		return $.ig.ColorUtil.prototype.fromAHSV(minimum[0] + interpolation * (maximum[0] - minimum[0]), b1 + interpolation * (e1 - b1), minimum[2] + interpolation * (maximum[2] - minimum[2]), minimum[3] + interpolation * (maximum[3] - minimum[3]));
	}
	/*<EndMethod Name="System.Windows.Media.Color Infragistics.ColorUtil::GetAHSVInterpolation(, System.Double, )" />*/
	,
	/*<BeginMethod Name="System.Windows.Media.Color Infragistics.ColorUtil::GetLightened(System.Windows.Media.Color, System.Double)" />*/
	getLightened: function (color, interpolation) {
		var ahsl = $.ig.ColorUtil.prototype.getAHSL(color);
		if (interpolation < 0) {
			return $.ig.ColorUtil.prototype.fromAHSL(ahsl[0], ahsl[1], ahsl[2], ahsl[3] * (1 - $.ig.MathUtil.prototype.clamp(-interpolation, 0, 1)));
		} else {
			return $.ig.ColorUtil.prototype.fromAHSL(ahsl[0], ahsl[1], ahsl[2], ahsl[3] + $.ig.MathUtil.prototype.clamp(interpolation, 0, 1) * (1 - ahsl[3]));
		}
	}
	/*<EndMethod Name="System.Windows.Media.Color Infragistics.ColorUtil::GetLightened(System.Windows.Media.Color, System.Double)" />*/
	,
	/*<BeginMethod Name=" Infragistics.ColorUtil::GetAHSL(System.Windows.Media.Color)" />*/
	getAHSL: function (color) {
		var ahsl = new Array(4);
		var r = color.r() / 255;
		var g = color.g() / 255;
		var b = color.b() / 255;
		var min = Math.min(Math.min(r, g), b);
		var max = Math.max(Math.max(r, g), b);
		var delta = max - min;
		ahsl[0] = color.a() / 255;
		ahsl[3] = (max + min) / 2;
		if (delta == 0) {
			ahsl[1] = -1;
			ahsl[2] = 0;
		} else {
			ahsl[1] = $.ig.ColorUtil.prototype.h(max, delta, r, g, b);
			ahsl[2] = ahsl[3] < 0.5 ? delta / (max + min) : delta / (2 - max - min);
		}
		return ahsl;
	}
	/*<EndMethod Name=" Infragistics.ColorUtil::GetAHSL(System.Windows.Media.Color)" />*/
	,
	/*<BeginMethod Name=" Infragistics.ColorUtil::GetAHSV(System.Windows.Media.Color)" />*/
	getAHSV: function (color) {
		var a = color.a() / 255;
		var r = color.r() / 255;
		var g = color.g() / 255;
		var b = color.b() / 255;
		var min = Math.min(r, Math.min(g, b));
		var max = Math.max(r, Math.max(g, b));
		var delta = max - min;
		var ahsv = new Array(4);
		ahsv[0] = a;
		ahsv[3] = max;
		if (delta == 0) {
			ahsv[1] = -1;
			ahsv[2] = 0;
		} else {
			ahsv[1] = $.ig.ColorUtil.prototype.h(max, delta, r, g, b);
			ahsv[2] = delta / max;
		}
		return ahsv;
	}
	/*<EndMethod Name=" Infragistics.ColorUtil::GetAHSV(System.Windows.Media.Color)" />*/
	,
	/*<BeginMethod Name="System.Windows.Media.Color Infragistics.ColorUtil::FromAHSL(System.Double, System.Double, System.Double, System.Double)" />*/
	fromAHSL: function (alpha, hue, saturation, lightness) {
		var r;
		var g;
		var b;
		if (saturation == 0) {
			r = lightness;
			g = lightness;
			b = lightness;
		} else {
			var q = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - (lightness * saturation);
			var p = 2 * lightness - q;
			var hk = hue / 360;
			r = $.ig.ColorUtil.prototype.c(p, q, hk + 1 / 3);
			g = $.ig.ColorUtil.prototype.c(p, q, hk);
			b = $.ig.ColorUtil.prototype.c(p, q, hk - 1 / 3);
		}
		return $.ig.Color.prototype.fromArgb($.ig.truncate((alpha * 255)), $.ig.truncate((r * 255)), $.ig.truncate((g * 255)), $.ig.truncate((b * 255)));
	}
	/*<EndMethod Name="System.Windows.Media.Color Infragistics.ColorUtil::FromAHSL(System.Double, System.Double, System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Windows.Media.Color Infragistics.ColorUtil::FromAHSV(System.Double, System.Double, System.Double, System.Double)" />*/
	fromAHSV: function (alpha, hue, saturation, value) {
		var r;
		var g;
		var b;
		while (hue >= 360) {
			hue -= 360;
		}
		if (saturation == 0) {
			r = value;
			g = value;
			b = value;
		} else {
			hue /= 60;
			var i = Math.floor(hue);
			var f = hue - i;
			var p = value * (1 - saturation);
			var q = value * (1 - saturation * f);
			var t = value * (1 - saturation * (1 - f));
			switch ($.ig.truncate(i)) {
				case 0:
					r = value;
					g = t;
					b = p;
					break;
				case 1:
					r = q;
					g = value;
					b = p;
					break;
				case 2:
					r = p;
					g = value;
					b = t;
					break;
				case 3:
					r = p;
					g = q;
					b = value;
					break;
				case 4:
					r = t;
					g = p;
					b = value;
					break;
				default:
					r = value;
					g = p;
					b = q;
					break;
			}
		}
		return $.ig.Color.prototype.fromArgb($.ig.truncate((alpha * 255)), $.ig.truncate((r * 255)), $.ig.truncate((g * 255)), $.ig.truncate((b * 255)));
	}
	/*<EndMethod Name="System.Windows.Media.Color Infragistics.ColorUtil::FromAHSV(System.Double, System.Double, System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.ColorUtil::H(System.Double, System.Double, System.Double, System.Double, System.Double)" />*/
	h: function (max, delta, r, g, b) {
		var h = r == max ? (g - b) / delta : g == max ? 2 + (b - r) / delta : 4 + (r - g) / delta;
		h *= 60;
		if (h < 0) {
			h += 360;
		}
		return h;
	}
	/*<EndMethod Name="System.Double Infragistics.ColorUtil::H(System.Double, System.Double, System.Double, System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.ColorUtil::C(System.Double, System.Double, System.Double)" />*/
	c: function (p, q, t) {
		t = t < 0 ? t + 1 : t > 1 ? t - 1 : t;
		if (t < 1 / 6) {
			return p + ((q - p) * 6 * t);
		}
		if (t < 1 / 2) {
			return q;
		}
		if (t < 2 / 3) {
			return p + ((q - p) * 6 * (2 / 3 - t));
		}
		return p;
	}
	/*<EndMethod Name="System.Double Infragistics.ColorUtil::C(System.Double, System.Double, System.Double)" />*/
	,
	/*<BeginProperty Name=" Infragistics.ColorUtil::RandomColors()" />*/
	randomColors: function () {
		if ($.ig.ColorUtil.prototype.__randomColors == null) {
			$.ig.ColorUtil.prototype.__randomColors = new Array(100);
			$.ig.ColorUtil.prototype.__randomColors[0] = $.ig.Color.prototype.fromArgb(255, 70, 130, 180);
			$.ig.ColorUtil.prototype.__randomColors[1] = $.ig.Color.prototype.fromArgb(255, 65, 105, 225);
			$.ig.ColorUtil.prototype.__randomColors[2] = $.ig.Color.prototype.fromArgb(255, 100, 149, 237);
			$.ig.ColorUtil.prototype.__randomColors[3] = $.ig.Color.prototype.fromArgb(255, 176, 196, 222);
			$.ig.ColorUtil.prototype.__randomColors[4] = $.ig.Color.prototype.fromArgb(255, 123, 104, 238);
			$.ig.ColorUtil.prototype.__randomColors[5] = $.ig.Color.prototype.fromArgb(255, 106, 90, 205);
			$.ig.ColorUtil.prototype.__randomColors[6] = $.ig.Color.prototype.fromArgb(255, 72, 61, 139);
			$.ig.ColorUtil.prototype.__randomColors[7] = $.ig.Color.prototype.fromArgb(255, 25, 25, 112);
			for (var colorIndex = 8; colorIndex < 100; colorIndex++) {
				$.ig.ColorUtil.prototype.__randomColors[colorIndex] = $.ig.Color.prototype.fromArgb(255, $.ig.ColorUtil.prototype._r.next1(255), $.ig.ColorUtil.prototype._r.next1(255), $.ig.ColorUtil.prototype._r.next1(255));
			}
		}
		return $.ig.ColorUtil.prototype.__randomColors;
	}
	/*<EndProperty Name=" Infragistics.ColorUtil::RandomColors()" />*/
	,
	/*<BeginMethod Name="System.Windows.Media.Color Infragistics.ColorUtil::GetRandomColor(System.Int32)" />*/
	getRandomColor: function (index) {
		index %= 100;
		return $.ig.ColorUtil.prototype.randomColors()[index];
	}
	/*<EndMethod Name="System.Windows.Media.Color Infragistics.ColorUtil::GetRandomColor(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.ColorUtil::ColorToInt(System.Windows.Media.Color)" />*/
	colorToInt: function (color) {
		var aa = color.a() / 255;
		var rr = $.ig.truncate((color.r() * aa));
		var gg = $.ig.truncate((color.g() * aa));
		var bb = $.ig.truncate((color.b() * aa));
		return color.a() << 24 | rr << 16 | gg << 8 | bb;
	}
	/*<EndMethod Name="System.Int32 Infragistics.ColorUtil::ColorToInt(System.Windows.Media.Color)" />*/
	,
	/*<BeginMethod Name="System.Windows.Media.Color Infragistics.ColorUtil::GetColor(System.Windows.Media.Brush)" />*/
	getColor: function (brush) {
		return brush.color();
	}
	/*<EndMethod Name="System.Windows.Media.Color Infragistics.ColorUtil::GetColor(System.Windows.Media.Brush)" />*/
	,
	$type: new $.ig.Type('ColorUtil', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.ColorUtil" />*/

/*<BeginType Name="Infragistics.CssGradientUtil" />*/

$.ig.util.defType('CssGradientUtil', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Boolean Infragistics.CssGradientUtil::IsGradient(System.String)" />*/
	isGradient: function (value) {
		return value.contains("linear-gradient") || value.contains("radial-gradient");
	}
	/*<EndMethod Name="System.Boolean Infragistics.CssGradientUtil::IsGradient(System.String)" />*/
	,
	/*<BeginMethod Name="System.Windows.Media.Brush Infragistics.CssGradientUtil::BrushFromGradientString(System.String)" />*/
	brushFromGradientString: function (value) {
		var regex = /hsl\([\s\S]+?\)[\s\S]*?[,\)]|rgba?\([\s\S]+?\)[\s\S]*?[,\)]|[^\(\)]*?[,\)]/gim, percentRegex = /\s*\d*%\s*$/, trimStartRegex = /^\s\s*/, trimEndRegex = /\s\s*$/, trimEndCharactersRegex = /[,\)]?$/;
		var match;
		var angle, i = 1, j = 0, length, offsetIndex;
		var hasUnsetOffsets = false;
		var stops;
		var matches = value.match(regex);
		if (matches == null || matches.length <= 1) {
			return null;
		}
		var b = new $.ig.LinearGradientBrush();
		length = matches.length;
		match = matches[0];
		if (match.contains("to") || match.contains("deg")) {
			angle = $.ig.CssGradientUtil.prototype.angleFromString(match);
			b._useCustomDirection = true;
			var points = $.ig.CssGradientUtil.prototype.calculatePointsFromAngle(angle);
			b._startX = points[0].__x;
			b._startY = points[0].__y;
			b._endX = points[1].__x;
			b._endY = points[1].__y;
			stops = new Array(length - 1);
		} else {
			stops = new Array(length);
			i = 0;
		}
		for (; i < length; i++) {
			var stop = new $.ig.GradientStop();
			match = matches[i];
			match = match.replace(trimStartRegex, "").replace(trimEndRegex, "").replace(trimEndCharactersRegex, "");
			offsetIndex = match.search(percentRegex);
			if (offsetIndex != -1) {
				stop.__fill = match.substr(0, offsetIndex);
				stop._offset = parseFloat(match.substr(offsetIndex + 1)) / 100;
			} else {
				stop.__fill = match;
				stop._offset = -1;
				hasUnsetOffsets = true;
			}
			stops[j] = stop;
			j++;
		}
		if (hasUnsetOffsets) {
			if (stops[0]._offset == -1) {
				stops[0]._offset = 0;
			}
			if (stops[stops.length - 1]._offset == -1) {
				stops[stops.length - 1]._offset = 1;
			}
			$.ig.CssGradientUtil.prototype.fixUnsetOffsets(stops);
			b._gradientStops = stops;
		}
		return b;
	}
	/*<EndMethod Name="System.Windows.Media.Brush Infragistics.CssGradientUtil::BrushFromGradientString(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.CssGradientUtil::FixUnsetOffsets()" />*/
	fixUnsetOffsets: function (stops) {
		var i, j, k, offsetRange, maxOffset = -1, lastSetOffsetIndex = -1, lastSetOffset = 0;
		var hasUnsetOffsets = false;
		for (i = lastSetOffsetIndex + 1; i < stops.length; i++) {
			var stop = stops[i];
			if (stop._offset != -1) {
				maxOffset = Math.max(maxOffset, stop._offset);
				stop._offset = maxOffset;
				if (hasUnsetOffsets) {
					k = 1;
					offsetRange = $.ig.intDivide((maxOffset - lastSetOffset), (i - lastSetOffsetIndex));
					for (j = lastSetOffsetIndex + 1; j < i; j++) {
						stops[j]._offset = lastSetOffset + offsetRange * k;
						k++;
					}
					hasUnsetOffsets = false;
				}
				lastSetOffsetIndex = i;
				lastSetOffset = maxOffset;
			} else {
				hasUnsetOffsets = true;
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.CssGradientUtil::FixUnsetOffsets()" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.CssGradientUtil::AngleFromString(System.String)" />*/
	angleFromString: function (value) {
		var toTopRegex = /to\s*top\s*/i, toRightTopRegex = /to\s*right\s*top\s*/i, toRightRegex = /to\s*right\s*/i, toRightBottomRegex = /to\s*right\s*bottom\s*/i, toBottomRegex = /to\s*bottom\s*/i, toLeftBottomRegex = /to\s*left\s*bottom\s*/i, toLeftRegex = /to\s*left\s*/i, toLeftTopRegex = /to\s*left\s*top\s*/i;
		if (value.contains("deg")) {
			return parseFloat(value);
		}
		if (toTopRegex.test(value)) {
			return 0;
		}
		if (toRightTopRegex.test(value)) {
			return 45;
		}
		if (toRightRegex.test(value)) {
			return 90;
		}
		if (toRightBottomRegex.test(value)) {
			return 135;
		}
		if (toBottomRegex.test(value)) {
			return 180;
		}
		if (toLeftBottomRegex.test(value)) {
			return 225;
		}
		if (toLeftRegex.test(value)) {
			return 270;
		}
		return toLeftTopRegex.test(value) ? 315 : 180;
	}
	/*<EndMethod Name="System.Double Infragistics.CssGradientUtil::AngleFromString(System.String)" />*/
	,
	/*<BeginMethod Name=" Infragistics.CssGradientUtil::CalculatePointsFromAngle(System.Number)" />*/
	calculatePointsFromAngle: function (inputAngle) {
		var points = new Array(2);
		var p1 = new $.ig.Point(0);
		var p2 = new $.ig.Point(0);
		var angle = $.ig.CoreGeometryUtil.prototype.simplifyAngle(inputAngle);
		if (angle >= 0 && angle <= 45) {
			var tan = Math.tan($.ig.MathUtil.prototype.radians(angle));
			p1.__x = 0.5 - 0.5 * tan;
			p1.__y = 1;
			p2.__x = 0.5 + 0.5 * tan;
			p2.__y = 0;
		} else if (angle > 180 && angle <= 225) {
			var tan1 = Math.tan($.ig.MathUtil.prototype.radians(angle - 180));
			p1.__x = 0.5 + 0.5 * tan1;
			p1.__y = 0;
			p2.__x = 0.5 - 0.5 * tan1;
			p2.__y = 1;
		} else if (angle > 135 && angle <= 180) {
			var tan2 = Math.tan($.ig.MathUtil.prototype.radians(180 - angle));
			p1.__x = 0.5 - 0.5 * tan2;
			p1.__y = 0;
			p2.__x = 0.5 + 0.5 * tan2;
			p2.__y = 1;
		} else if (angle > 315 && angle < 360) {
			var tan3 = Math.tan($.ig.MathUtil.prototype.radians(360 - angle));
			p1.__x = 0.5 + 0.5 * tan3;
			p1.__y = 1;
			p2.__x = 0.5 - 0.5 * tan3;
			p2.__y = 0;
		} else if (angle > 45 && angle <= 90) {
			var tan4 = Math.tan($.ig.MathUtil.prototype.radians(90 - angle));
			p2.__y = 0.5 - 0.5 * tan4;
			p2.__x = 1;
			p1.__y = 0.5 + 0.5 * tan4;
			p1.__x = 0;
		} else if (angle > 90 && angle <= 135) {
			var tan5 = Math.tan($.ig.MathUtil.prototype.radians(angle - 90));
			p2.__y = 0.5 + 0.5 * tan5;
			p2.__x = 1;
			p1.__y = 0.5 - 0.5 * tan5;
			p1.__x = 0;
		} else if (angle > 225 && angle <= 270) {
			var tan6 = Math.tan($.ig.MathUtil.prototype.radians(270 - angle));
			p1.__y = 0.5 - 0.5 * tan6;
			p1.__x = 1;
			p2.__y = 0.5 + 0.5 * tan6;
			p2.__x = 0;
		} else if (angle > 270 && angle <= 315) {
			var tan7 = Math.tan($.ig.MathUtil.prototype.radians(angle - 270));
			p1.__y = 0.5 + 0.5 * tan7;
			p1.__x = 1;
			p2.__y = 0.5 - 0.5 * tan7;
			p2.__x = 0;
		}
		points[0] = p1;
		points[1] = p2;
		return points;
	}
	/*<EndMethod Name=" Infragistics.CssGradientUtil::CalculatePointsFromAngle(System.Number)" />*/
	,
	$type: new $.ig.Type('CssGradientUtil', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.CssGradientUtil" />*/

/*<BeginType Name="Infragistics.CssHelper" />*/

$.ig.util.defType('CssHelper', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Html.IDomWrapper Infragistics.CssHelper::GetDisoveryElement(System.Html.IDomRenderer)" />*/
	getDisoveryElement: function (renderer) {
		var discoveryStyle = $("#fakediscoveryelementstyle");
		if (discoveryStyle.length == 0) {
			var styleText = "fakediscoveryelement\n" + "{\n" + "\tdisplay: block;\n" + "   position: absolute;\n" + "   box-sizing: content-box;\n" + "   -moz-box-sizing: content-box;\n" + "\tmargin: " + $.ig.CssHelper.prototype.defaultMarginValue + ";\n" + "\tcolor: " + $.ig.CssHelper.prototype.defaultColorValue + ";\n" + "   border-style: solid;\n" + "   border-color: " + $.ig.CssHelper.prototype.defaultColorValue + ";\n" + "   background-color: " + $.ig.CssHelper.prototype.defaultColorValue + ";\n" + "   background-image: " + $.ig.CssHelper.prototype.defaultBackgroundImageValue + ";\n" + "   border-width: " + $.ig.CssHelper.prototype.defaultWidthHeightValue + ";\n" + "   border-radius: " + $.ig.CssHelper.prototype.defaultWidthHeightValue + ";\n" + "   vertical-align: " + $.ig.CssHelper.prototype.defaultVerticalAlignValue + ";\n" + "   text-align: " + $.ig.CssHelper.prototype.defaultTextAlignValue + ";\n" + "   opacity: " + $.ig.CssHelper.prototype.defaultOpacityValue + ";\n" + "   visibility: " + $.ig.CssHelper.prototype.defaultVisibilityValue + ";\n" + "   padding: " + $.ig.CssHelper.prototype.defaultWidthHeightValue + ";\n" + "   width: " + $.ig.CssHelper.prototype.defaultWidthHeightValue + ";\n" + "   height: " + $.ig.CssHelper.prototype.defaultWidthHeightValue + ";\n" + "}\n";
			discoveryStyle = $("<style id='fakediscoveryelementstyle'></style>");
			discoveryStyle.html(styleText);
			$("head").append(discoveryStyle);
		}
		var elem = renderer.createElement("fakediscoveryelement");
		elem.setStyleProperty("box-sizing", "content-box");
		return elem;
	}
	/*<EndMethod Name="System.Html.IDomWrapper Infragistics.CssHelper::GetDisoveryElement(System.Html.IDomRenderer)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.CssHelper::GetDefaultValue(System.String)" />*/
	getDefaultValue: function (propertyName) {
		if (propertyName == "color" || propertyName == "border-color" || propertyName == "border-top-color" || propertyName == "border-left-color" || propertyName == "border-right-color" || propertyName == "border-bottom-color" || propertyName == "background-color") {
			return $.ig.CssHelper.prototype.defaultColorValue;
		} else if (propertyName == "margin-left" || propertyName == "margin-top" || propertyName == "margin-right" || propertyName == "margin-bottom") {
			return $.ig.CssHelper.prototype.defaultMarginValue;
		} else if (propertyName == "vertical-align") {
			return $.ig.CssHelper.prototype.defaultVerticalAlignValue;
		} else if (propertyName == "opacity") {
			return $.ig.CssHelper.prototype.defaultOpacityValue;
		} else if (propertyName == "background-image") {
			return $.ig.CssHelper.prototype.defaultBackgroundImageValue;
		} else if (propertyName == "text-align") {
			return $.ig.CssHelper.prototype.defaultTextAlignValue;
		} else if (propertyName == "visibility") {
			return $.ig.CssHelper.prototype.defaultVisibilityValue;
		} else if ($.ig.CssHelper.prototype.isWidthProperty(propertyName)) {
			return $.ig.CssHelper.prototype.defaultWidthHeightValue;
		}
		return "DEFAULT";
	}
	/*<EndMethod Name="System.String Infragistics.CssHelper::GetDefaultValue(System.String)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.CssHelper::NumberOfClasses(System.Html.IDomWrapper, System.String, System.String)" />*/
	numberOfClasses: function (discoveryElement, classPrefix, propertyName) {
		var defaultValue = $.ig.CssHelper.prototype.getDefaultValue(propertyName);
		var curr = 1;
		var done = false;
		while (!done && curr < $.ig.CssHelper.prototype.maxClasses) {
			var className = classPrefix + curr.toString();
			discoveryElement.addClass(className);
			var propValue = discoveryElement.getStyleProperty(propertyName);
			if (propValue == defaultValue) {
				break;
			}
			curr++;
		}
		return curr;
	}
	/*<EndMethod Name="System.Int32 Infragistics.CssHelper::NumberOfClasses(System.Html.IDomWrapper, System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.CssHelper::GetPropertyValue(System.Html.IDomWrapper, System.String, System.String)" />*/
	getPropertyValue1: function (discoveryElement, className, propertyName) {
		if (className != null) {
			discoveryElement.addClass(className);
		}
		var ret_ = discoveryElement.getStyleProperty(propertyName);
		if (className != null) {
			discoveryElement.removeClass(className);
		}
		if (propertyName == "opacity") {
			ret_ = Math.round(1000.0 * ret_) / 1000.0;
		}
		if ($.ig.CssHelper.prototype.isEqualToDefault(ret_, $.ig.CssHelper.prototype.getDefaultValue(propertyName), propertyName)) {
			return null;
		}
		return ret_;
	}
	/*<EndMethod Name="System.String Infragistics.CssHelper::GetPropertyValue(System.Html.IDomWrapper, System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.CssHelper::GetPropertyValue(System.Html.IDomWrapper, System.String)" />*/
	getPropertyValue: function (discoveryElement, propertyName) {
		return $.ig.CssHelper.prototype.getPropertyValue1(discoveryElement, null, propertyName);
	}
	/*<EndMethod Name="System.String Infragistics.CssHelper::GetPropertyValue(System.Html.IDomWrapper, System.String)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.CssHelper::IsEqualToDefault(System.String, System.String, System.String)" />*/
	isEqualToDefault: function (propValue, defaultValue, propertyName) {
		if (propValue == defaultValue) {
			return true;
		}
		if ($.ig.CssHelper.prototype.isWidthProperty(propertyName) && propValue != null && propValue.contains("px")) {
			var num = $.ig.util.replace(propValue, "px", "");
			var val = parseFloat(num);
			if (Math.abs(Math.round(val) - 4321) < 2) {
				return true;
			}
			return false;
		} else if ($.ig.CssHelper.prototype.isMarginProperty(propertyName) && propValue != null && propValue.contains("px")) {
			var num1 = $.ig.util.replace(propValue, "px", "");
			var val1 = parseFloat(num1);
			if (Math.abs(Math.round(val1) + 4321) < 2) {
				return true;
			}
			return false;
		} else {
			return propValue == defaultValue;
		}
	}
	/*<EndMethod Name="System.Boolean Infragistics.CssHelper::IsEqualToDefault(System.String, System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.CssHelper::IsWidthProperty(System.String)" />*/
	isWidthProperty: function (propertyName) {
		return propertyName == "width" || propertyName == "height" || propertyName == "border-top-width" || propertyName == "border-left-width" || propertyName == "border-right-width" || propertyName == "border-bottom-width" || propertyName == "border-width" || propertyName == "border-radius" || propertyName == "padding" || propertyName == "padding-top" || propertyName == "padding-left" || propertyName == "padding-bottom" || propertyName == "padding-right" || propertyName == "border-top-left-radius";
	}
	/*<EndMethod Name="System.Boolean Infragistics.CssHelper::IsWidthProperty(System.String)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.CssHelper::IsMarginProperty(System.String)" />*/
	isMarginProperty: function (propertyName) {
		return propertyName == "margin-top" || propertyName == "margin-left" || propertyName == "margin-right" || propertyName == "margin-bottom";
	}
	/*<EndMethod Name="System.Boolean Infragistics.CssHelper::IsMarginProperty(System.String)" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.List Infragistics.CssHelper::GetValuesForClassCollection(System.Html.IDomWrapper, System.String, System.Collections.Generic.List)" />*/
	getValuesForClassCollection: function (discoveryElement, classPrefix, propertyNames) {
		var ret = new $.ig.List$1($.ig.List$1.prototype.$type.specialize(String), 0);
		var curr = 1;
		var done = false;
		while (!done && curr < $.ig.CssHelper.prototype.maxClasses) {
			var className = classPrefix + curr.toString();
			discoveryElement.addClass(className);
			var row = new $.ig.List$1(String, 0);
			for (var i = 0; i < propertyNames.count(); i++) {
				var propertyName = propertyNames.__inner[i];
				var defaultValue = $.ig.CssHelper.prototype.getDefaultValue(propertyName);
				var propValue = discoveryElement.getStyleProperty(propertyName);
				if ($.ig.CssHelper.prototype.isEqualToDefault(propValue, defaultValue, propertyName)) {
					done = true;
					break;
				}
				row.add(propValue);
			}
			discoveryElement.removeClass(className);
			if (!done) {
				ret.add(row);
			}
			curr++;
		}
		return ret;
	}
	/*<EndMethod Name="System.Collections.Generic.List Infragistics.CssHelper::GetValuesForClassCollection(System.Html.IDomWrapper, System.String, System.Collections.Generic.List)" />*/
	,
	$type: new $.ig.Type('CssHelper', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.CssHelper" />*/

/*<BeginType Name="Infragistics.DoubleAnimator" />*/

$.ig.util.defType('DoubleAnimator', 'Object', {
	/*<BeginProperty Name="System.Boolean Infragistics.DoubleAnimator::NeedsFlush()" />*/
	needsFlush: function () {
		return this.transitionProgress() == 0;
	}
	/*<EndProperty Name="System.Boolean Infragistics.DoubleAnimator::NeedsFlush()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.DoubleAnimator::Flush()" />*/
	flush: function () {
		this.update(true);
	}
	/*<EndMethod Name="System.Void Infragistics.DoubleAnimator::Flush()" />*/
	,
	__transitionProgress: 0,
	/*<BeginProperty Name="System.Double Infragistics.DoubleAnimator::TransitionProgress()" />*/
	transitionProgress: function (value) {
		if (arguments.length === 1) {
			this.__transitionProgress = value;
			if (this.propertyChanged != null) {
				this.propertyChanged(this, new $.ig.PropertyChangedEventArgs("TransitionProgress"));
			}
			return value;
		} else {
			return this.__transitionProgress;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.DoubleAnimator::TransitionProgress()" />*/
	,
	__intervalMilliseconds: 0,
	/*<BeginProperty Name="System.Int32 Infragistics.DoubleAnimator::IntervalMilliseconds()" />*/
	intervalMilliseconds: function (value) {
		if (arguments.length === 1) {
			this.__intervalMilliseconds = value;
			return value;
		} else {
			return this.__intervalMilliseconds;
		}
	}
	/*<EndProperty Name="System.Int32 Infragistics.DoubleAnimator::IntervalMilliseconds()" />*/
	,
	__easingFunction: null,
	/*<BeginProperty Name="Infragistics.EasingFunctionHandler Infragistics.DoubleAnimator::EasingFunction()" />*/
	easingFunction: function (value) {
		if (arguments.length === 1) {
			this.__easingFunction = value;
			return value;
		} else {
			return this.__easingFunction;
		}
	}
	/*<EndProperty Name="Infragistics.EasingFunctionHandler Infragistics.DoubleAnimator::EasingFunction()" />*/
	,
	__from: 0,
	__to: 0,
	/*<BeginProperty Name="System.Double Infragistics.DoubleAnimator::From()" />*/
	from: function (value) {
		if (arguments.length === 1) {
			this.__from = value;
			return value;
		} else {
			return this.__from;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.DoubleAnimator::From()" />*/
	,
	/*<BeginProperty Name="System.Double Infragistics.DoubleAnimator::To()" />*/
	to: function (value) {
		if (arguments.length === 1) {
			this.__to = value;
			return value;
		} else {
			return this.__to;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.DoubleAnimator::To()" />*/
	,
	init: function (from, to, intervalMilliseconds) {
		this.__easingFunction = null;
		this.__from = 0;
		this.__to = 0;
		this.__active = false;
		this.__intervalId = -1;
		this.__lastRender = 0;
		$.ig.Object.prototype.init.call(this);
		this.__from = from;
		this.__to = to;
		this.__intervalMilliseconds = intervalMilliseconds;
		this.requestAnimationFrame(window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function(callback) {
                window.setTimeout(callback, 1000 / 60);
            });
	},
	_requestAnimationFrame: null,
	/*<BeginProperty Name="System.Action Infragistics.DoubleAnimator::RequestAnimationFrame()" />*/
	requestAnimationFrame: function (value) {
		if (arguments.length === 1) {
			this._requestAnimationFrame = value;
			return value;
		} else {
			return this._requestAnimationFrame;
		}
	}
	/*<EndProperty Name="System.Action Infragistics.DoubleAnimator::RequestAnimationFrame()" />*/
	,
	__active: false,
	/*<BeginProperty Name="System.Boolean Infragistics.DoubleAnimator::Active()" />*/
	active: function (value) {
		if (arguments.length === 1) {
			this.__active = value;
			return value;
		} else {
			return this.__active;
		}
	}
	/*<EndProperty Name="System.Boolean Infragistics.DoubleAnimator::Active()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.DoubleAnimator::Start()" />*/
	start: function () {
		this.__transitionProgress = 0;
		this.__lastRender = 0;
		this.__startTime = $.ig.Date.prototype.now();
		if (!this.__active) {
			this.__active = true;
			this.requestAnimationFrame()(this.tick.runOn(this));
		}
	}
	/*<EndMethod Name="System.Void Infragistics.DoubleAnimator::Start()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.DoubleAnimator::Stop()" />*/
	stop: function () {
		this.__active = false;
		this.__transitionProgress = 0;
		this.__lastRender = 0;
	}
	/*<EndMethod Name="System.Void Infragistics.DoubleAnimator::Stop()" />*/
	,
	__startTime: new Date(),
	__intervalId: 0,
	__lastRender: 0,
	/*<BeginMethod Name="System.Void Infragistics.DoubleAnimator::Tick()" />*/
	tick: function () {
		this.update(false);
	}
	/*<EndMethod Name="System.Void Infragistics.DoubleAnimator::Tick()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.DoubleAnimator::Update(System.Boolean)" />*/
	update: function (flush) {
		if (!this.__active) {
			this.stop();
			return;
		}
		var currentTime = $.ig.Date.prototype.now();
		var ellapsedMilliseconds = currentTime.getTime() - this.__startTime.getTime();
		if (ellapsedMilliseconds > this.__intervalMilliseconds) {
			ellapsedMilliseconds = this.__intervalMilliseconds;
		}
		if ((ellapsedMilliseconds - this.__lastRender < 16 && ellapsedMilliseconds != this.__intervalMilliseconds) && !flush) {
			this.requestAnimationFrame()(this.tick.runOn(this));
			return;
		}
		this.__lastRender = ellapsedMilliseconds;
		var p = (ellapsedMilliseconds / this.__intervalMilliseconds);
		if (this.__easingFunction != null) {
			p = this.__easingFunction(p);
		}
		var interpolatedValue = this.__from + ((this.__to - this.__from) * p);
		if (!flush) {
			if (ellapsedMilliseconds == this.__intervalMilliseconds) {
				this.stop();
			} else {
				this.requestAnimationFrame()(this.tick.runOn(this));
			}
		}
		this.transitionProgress(interpolatedValue);
	}
	/*<EndMethod Name="System.Void Infragistics.DoubleAnimator::Update(System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.DoubleAnimator::GetElapsedMilliseconds()" />*/
	getElapsedMilliseconds: function () {
		return this.__active ? $.ig.Date.prototype.now().getTime() - this.__startTime.getTime() : 0;
	}
	/*<EndMethod Name="System.Double Infragistics.DoubleAnimator::GetElapsedMilliseconds()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.DoubleAnimator::AnimationActive()" />*/
	animationActive: function () {
		return this.__active;
	}
	/*<EndMethod Name="System.Boolean Infragistics.DoubleAnimator::AnimationActive()" />*/
	,
	propertyChanged: null,
	$type: new $.ig.Type('DoubleAnimator', $.ig.Object.prototype.$type, [$.ig.INotifyPropertyChanged.prototype.$type])
}, true);

/*<EndType Name="Infragistics.DoubleAnimator" />*/

/*<BeginType Name="Infragistics.FastIterationDictionary`2" />*/

$.ig.util.defType('FastIterationDictionary$2', 'Object', {
	$tKey: null,
	$tValue: null,
	__internalDictionary: null,
	_keyList: null,
	/*<BeginProperty Name="System.Collections.Generic.List Infragistics.FastIterationDictionary`2::KeyList()" />*/
	keyList: function (value) {
		if (arguments.length === 1) {
			this._keyList = value;
			return value;
		} else {
			return this._keyList;
		}
	}
	/*<EndProperty Name="System.Collections.Generic.List Infragistics.FastIterationDictionary`2::KeyList()" />*/
	,
	_valueList: null,
	/*<BeginProperty Name="System.Collections.Generic.List Infragistics.FastIterationDictionary`2::ValueList()" />*/
	valueList: function (value) {
		if (arguments.length === 1) {
			this._valueList = value;
			return value;
		} else {
			return this._valueList;
		}
	}
	/*<EndProperty Name="System.Collections.Generic.List Infragistics.FastIterationDictionary`2::ValueList()" />*/
	,
	_removedList: null,
	/*<BeginProperty Name="System.Collections.Generic.List Infragistics.FastIterationDictionary`2::RemovedList()" />*/
	removedList: function (value) {
		if (arguments.length === 1) {
			this._removedList = value;
			return value;
		} else {
			return this._removedList;
		}
	}
	/*<EndProperty Name="System.Collections.Generic.List Infragistics.FastIterationDictionary`2::RemovedList()" />*/
	,
	_listMap: null,
	/*<BeginProperty Name="System.Collections.Generic.Dictionary Infragistics.FastIterationDictionary`2::ListMap()" />*/
	listMap: function (value) {
		if (arguments.length === 1) {
			this._listMap = value;
			return value;
		} else {
			return this._listMap;
		}
	}
	/*<EndProperty Name="System.Collections.Generic.Dictionary Infragistics.FastIterationDictionary`2::ListMap()" />*/
	,
	init: function ($tKey, $tValue, initNumber) {
		this.$tKey = $tKey;
		this.$tValue = $tValue;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$tKey, this.$tValue);
		}
		if (initNumber > 0) {
			switch (initNumber) {
				case 1:
					this.init1.apply(this, arguments);
					break;
			}
			return;
		}
		$.ig.FastIterationDictionary$2.prototype.init1.call(this, this.$tKey, this.$tValue, 1, null);
	},
	init1: function ($tKey, $tValue, initNumber, comparer) {
		this.$tKey = $tKey;
		this.$tValue = $tValue;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$tKey, this.$tValue);
		}
		this.__suspendCleaning = false;
		$.ig.Object.prototype.init.call(this);
		this.__internalDictionary = new $.ig.Dictionary$2(this.$tKey, this.$tValue, 2, comparer);
		this.keyList(new $.ig.List$1(this.$tKey, 0));
		this.valueList(new $.ig.List$1(this.$tValue, 0));
		this.listMap(new $.ig.Dictionary$2(this.$tKey, $.ig.Number.prototype.$type, 0));
		this.removedList(new $.ig.List$1($.ig.Boolean.prototype.$type, 0));
	},
	/*<BeginMethod Name="System.Void Infragistics.FastIterationDictionary`2::Add(Infragistics.FastIterationDictionary.TKey, Infragistics.FastIterationDictionary.TValue)" />*/
	add: function (key, value) {
		this.__internalDictionary.add(key, value);
		this.keyList().add(key);
		this.valueList().add(value);
		this.listMap().add(key, this.keyList().count() - 1);
		this.removedList().add(false);
	}
	/*<EndMethod Name="System.Void Infragistics.FastIterationDictionary`2::Add(Infragistics.FastIterationDictionary.TKey, Infragistics.FastIterationDictionary.TValue)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.FastIterationDictionary`2::Clear()" />*/
	clear: function () {
		this.__internalDictionary.clear();
		this.keyList().clear();
		this.valueList().clear();
		this.listMap().clear();
		this.removedList().clear();
	}
	/*<EndMethod Name="System.Void Infragistics.FastIterationDictionary`2::Clear()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.FastIterationDictionary`2::ContainsKey(Infragistics.FastIterationDictionary.TKey)" />*/
	containsKey: function (key) {
		return this.__internalDictionary.containsKey(key);
	}
	/*<EndMethod Name="System.Boolean Infragistics.FastIterationDictionary`2::ContainsKey(Infragistics.FastIterationDictionary.TKey)" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.FastIterationDictionary`2::Count()" />*/
	count: function () {
		return this.__internalDictionary.count();
	}
	/*<EndProperty Name="System.Int32 Infragistics.FastIterationDictionary`2::Count()" />*/
	,
	/*<BeginProperty Name="System.Collections.Generic.IEnumerable Infragistics.FastIterationDictionary`2::Keys()" />*/
	keys: function () {
		return this.__internalDictionary.keys();
	}
	/*<EndProperty Name="System.Collections.Generic.IEnumerable Infragistics.FastIterationDictionary`2::Keys()" />*/
	,
	__suspendCleaning: false,
	/*<BeginProperty Name="System.Boolean Infragistics.FastIterationDictionary`2::SuspendCleaning()" />*/
	suspendCleaning: function (value) {
		if (arguments.length === 1) {
			this.__suspendCleaning = value;
			if (this.removedList().count() > (this.listMap().count() * 3)) {
				this.clean();
			}
			return value;
		} else {
			return this.__suspendCleaning;
		}
	}
	/*<EndProperty Name="System.Boolean Infragistics.FastIterationDictionary`2::SuspendCleaning()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.FastIterationDictionary`2::Remove(Infragistics.FastIterationDictionary.TKey)" />*/
	remove: function (key) {
		var ret = this.__internalDictionary.remove(key);
		if (ret) {
			var ind = this.listMap().item(key);
			this.removedList().__inner[ind] = true;
			this.listMap().remove(key);
			if (this.removedList().count() > (this.listMap().count() * 3)) {
				this.clean();
			}
			return ret;
		}
		return ret;
	}
	/*<EndMethod Name="System.Boolean Infragistics.FastIterationDictionary`2::Remove(Infragistics.FastIterationDictionary.TKey)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.FastIterationDictionary`2::Clean()" />*/
	clean: function () {
		if (this.suspendCleaning()) {
			return;
		}
		var count = this.removedList().count();
		var j = 0;
		var removed = false;
		for (var i = 0; i < count; i++) {
			if (this.removedList().__inner[i]) {
				this.keyList().removeAt(i);
				this.valueList().removeAt(i);
				this.removedList().removeAt(i);
				i--;
				count--;
				removed = true;
			} else {
				if (removed) {
					this.listMap().remove(this.keyList().__inner[i]);
					this.listMap().add(this.keyList().__inner[i], j);
				}
				j++;
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.FastIterationDictionary`2::Clean()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.FastIterationDictionary`2::TryGetValue(Infragistics.FastIterationDictionary.TKey, Infragistics.FastIterationDictionary.TValue)" />*/
	tryGetValue: function (key, value) {
		var $self = this;
		return {
			ret: (function () { var $ret = $self.__internalDictionary.tryGetValue(key, value); value = $ret.p1; return $ret.ret; }()),
			p1: value
		};
	}
	/*<EndMethod Name="System.Boolean Infragistics.FastIterationDictionary`2::TryGetValue(Infragistics.FastIterationDictionary.TKey, Infragistics.FastIterationDictionary.TValue)" />*/
	,
	/*<BeginProperty Name="System.Collections.Generic.IEnumerable Infragistics.FastIterationDictionary`2::Values()" />*/
	values: function () {
		return this.__internalDictionary.values();
	}
	/*<EndProperty Name="System.Collections.Generic.IEnumerable Infragistics.FastIterationDictionary`2::Values()" />*/
	,
	/*<BeginProperty Name="Infragistics.FastIterationDictionary.TValue Infragistics.FastIterationDictionary`2::Item(Infragistics.FastIterationDictionary.TKey)" />*/
	item: function (key, value) {
		if (arguments.length === 2) {
			if (!this.containsKey(key)) {
				this.add(key, value);
			} else {
				this.__internalDictionary.item(key, value);
				var index = this.listMap().item(key);
				this.valueList().__inner[index] = value;
				this.removedList().__inner[index] = false;
			}
			return value;
		} else {
			return this.__internalDictionary.item(key);
		}
	}
	/*<EndProperty Name="Infragistics.FastIterationDictionary.TValue Infragistics.FastIterationDictionary`2::Item(Infragistics.FastIterationDictionary.TKey)" />*/
	,
	$type: new $.ig.Type('FastIterationDictionary$2', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.FastIterationDictionary`2" />*/

/*<BeginType Name="Infragistics.FontInfo" />*/

$.ig.util.defType('FontInfo', 'Object', {
	init: function () {
		this.__versionNumber = 0;
		$.ig.Object.prototype.init.call(this);
		this.fontSize(NaN);
		this.lineHeight(NaN);
	},
	__versionNumber: 0,
	/*<BeginProperty Name="System.Int32 Infragistics.FontInfo::VersionNumber()" />*/
	versionNumber: function () {
		return this.__versionNumber;
	}
	/*<EndProperty Name="System.Int32 Infragistics.FontInfo::VersionNumber()" />*/
	,
	__fontStyle: null,
	/*<BeginProperty Name="System.String Infragistics.FontInfo::FontStyle()" />*/
	fontStyle: function (value) {
		if (arguments.length === 1) {
			var oldValue = this.__fontStyle;
			this.__fontStyle = value;
			if (oldValue != this.__fontStyle) {
				this.onPropertyChanged("FontStyle");
			}
			return value;
		} else {
			return this.__fontStyle;
		}
	}
	/*<EndProperty Name="System.String Infragistics.FontInfo::FontStyle()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.FontInfo::OnPropertyChanged(System.String)" />*/
	onPropertyChanged: function (propertyName) {
		if (propertyName != "FontString") {
			this.__fontString = null;
		}
		if (this.__versionNumber < 100000) {
			this.__versionNumber++;
		} else {
			this.__versionNumber = 0;
		}
	}
	/*<EndMethod Name="System.Void Infragistics.FontInfo::OnPropertyChanged(System.String)" />*/
	,
	__fontVariant: null,
	/*<BeginProperty Name="System.String Infragistics.FontInfo::FontVariant()" />*/
	fontVariant: function (value) {
		if (arguments.length === 1) {
			var oldValue = this.__fontVariant;
			this.__fontVariant = value;
			if (this.__fontVariant != oldValue) {
				this.onPropertyChanged("FontVariant");
			}
			return value;
		} else {
			return this.__fontVariant;
		}
	}
	/*<EndProperty Name="System.String Infragistics.FontInfo::FontVariant()" />*/
	,
	__fontWeight: null,
	/*<BeginProperty Name="System.String Infragistics.FontInfo::FontWeight()" />*/
	fontWeight: function (value) {
		if (arguments.length === 1) {
			var oldValue = this.__fontWeight;
			this.__fontWeight = value;
			if (this.__fontWeight != oldValue) {
				this.onPropertyChanged("FontWeight");
			}
			return value;
		} else {
			return this.__fontWeight;
		}
	}
	/*<EndProperty Name="System.String Infragistics.FontInfo::FontWeight()" />*/
	,
	__fontSize: 0,
	/*<BeginProperty Name="System.Double Infragistics.FontInfo::FontSize()" />*/
	fontSize: function (value) {
		if (arguments.length === 1) {
			var oldValue = this.__fontSize;
			this.__fontSize = value;
			if (this.__fontSize != oldValue) {
				this.onPropertyChanged("FontSize");
			}
			return value;
		} else {
			return this.__fontSize;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.FontInfo::FontSize()" />*/
	,
	__lineHeight: 0,
	/*<BeginProperty Name="System.Double Infragistics.FontInfo::LineHeight()" />*/
	lineHeight: function (value) {
		if (arguments.length === 1) {
			var oldValue = this.__lineHeight;
			this.__lineHeight = value;
			if (this.__lineHeight != oldValue) {
				this.onPropertyChanged("LineHeight");
			}
			return value;
		} else {
			return this.__lineHeight;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.FontInfo::LineHeight()" />*/
	,
	__fontFamily: null,
	/*<BeginProperty Name="System.String Infragistics.FontInfo::FontFamily()" />*/
	fontFamily: function (value) {
		if (arguments.length === 1) {
			var oldValue = this.__fontFamily;
			this.__fontFamily = value;
			if (this.__fontFamily != oldValue) {
				this.onPropertyChanged("FontFamily");
			}
			return value;
		} else {
			return this.__fontFamily;
		}
	}
	/*<EndProperty Name="System.String Infragistics.FontInfo::FontFamily()" />*/
	,
	__fontStretch: null,
	/*<BeginProperty Name="System.String Infragistics.FontInfo::FontStretch()" />*/
	fontStretch: function (value) {
		if (arguments.length === 1) {
			var oldValue = this.__fontStretch;
			this.__fontStretch = value;
			if (this.__fontStretch != oldValue) {
				this.onPropertyChanged("FontStretch");
			}
			return value;
		} else {
			return this.__fontStretch;
		}
	}
	/*<EndProperty Name="System.String Infragistics.FontInfo::FontStretch()" />*/
	,
	__fontString: null,
	/*<BeginProperty Name="System.String Infragistics.FontInfo::FontString()" />*/
	fontString: function (value) {
		if (arguments.length === 1) {
			var oldValue = this.__fontString;
			this.__fontString = value;
			if (this.__fontString != oldValue) {
				this.onPropertyChanged("FontString");
			}
			return value;
		} else {
			if (this.__fontString == null) {
				$.ig.FontUtil.prototype.updateFontString(this);
			}
			return this.__fontString;
		}
	}
	/*<EndProperty Name="System.String Infragistics.FontInfo::FontString()" />*/
	,
	/*<BeginMethod Name="Infragistics.FontInfo Infragistics.FontInfo::CopyFontInfo()" />*/
	copyFontInfo: function () {
		var $self = this;
		return (function () {
			var $ret = new $.ig.FontInfo();
			$ret.fontStyle($self.fontStyle());
			$ret.fontVariant($self.fontVariant());
			$ret.fontWeight($self.fontWeight());
			$ret.fontSize($self.fontSize());
			$ret.lineHeight($self.lineHeight());
			$ret.fontFamily($self.fontFamily());
			$ret.fontStretch($self.fontStretch());
			$ret.fontString($self.fontString());
			return $ret;
		}());
	}
	/*<EndMethod Name="Infragistics.FontInfo Infragistics.FontInfo::CopyFontInfo()" />*/
	,
	$type: new $.ig.Type('FontInfo', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.FontInfo" />*/

/*<BeginType Name="Infragistics.FontUtil" />*/

$.ig.util.defType('FontUtil', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Double Infragistics.FontUtil::GetCurrentFontHeight(System.Html.IDomRenderer, Infragistics.FontInfo)" />*/
	getCurrentFontHeight: function (renderer, font) {
		if (renderer == null) {
			return 14;
		}
		var fontString = null;
		if (font != null) {
			fontString = font.fontString();
		}
		return renderer.getHeightForFontString(fontString, "M", true);
	}
	/*<EndMethod Name="System.Double Infragistics.FontUtil::GetCurrentFontHeight(System.Html.IDomRenderer, Infragistics.FontInfo)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.FontUtil::MeasureStringHeight(System.Html.IDomRenderer, System.String, Infragistics.FontInfo)" />*/
	measureStringHeight: function (renderer, text, font) {
		var height = renderer.getHeightForFontString(font.fontString(), text, false);
		return height;
	}
	/*<EndMethod Name="System.Double Infragistics.FontUtil::MeasureStringHeight(System.Html.IDomRenderer, System.String, Infragistics.FontInfo)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.FontUtil::MeasureStringWidth(System.String, System.String, Infragistics.RenderingContext)" />*/
	measureStringWidth1: function (text, font, context) {
		context.save();
		context.setFont(font);
		var width = context.measureTextWidth(text);
		context.restore();
		return width;
	}
	/*<EndMethod Name="System.Double Infragistics.FontUtil::MeasureStringWidth(System.String, System.String, Infragistics.RenderingContext)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.FontUtil::MeasureStringWidth(System.String, Infragistics.FontInfo, Infragistics.RenderingContext)" />*/
	measureStringWidth: function (text, font, context) {
		context.save();
		context.setFontInfo(font);
		var width = context.measureTextWidth(text);
		context.restore();
		return width;
	}
	/*<EndMethod Name="System.Double Infragistics.FontUtil::MeasureStringWidth(System.String, Infragistics.FontInfo, Infragistics.RenderingContext)" />*/
	,
	/*<BeginMethod Name="Infragistics.FontInfo Infragistics.FontUtil::GetDefaultFont(System.Html.IDomRenderer)" />*/
	getDefaultFont: function (renderer) {
		if ($.ig.FontUtil.prototype.__defaultInfo == null) {
			$.ig.FontUtil.prototype.__defaultInfo = $.ig.FontUtil.prototype.getFontInfoFromString(renderer, "12px Verdana");
		}
		return $.ig.FontUtil.prototype.__defaultInfo;
	}
	/*<EndMethod Name="Infragistics.FontInfo Infragistics.FontUtil::GetDefaultFont(System.Html.IDomRenderer)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.FontUtil::GetFontSize(Infragistics.FontInfo)" />*/
	getFontSize: function (font) {
		return font.fontSize();
	}
	/*<EndMethod Name="System.Double Infragistics.FontUtil::GetFontSize(Infragistics.FontInfo)" />*/
	,
	/*<BeginMethod Name="Infragistics.FontInfo Infragistics.FontUtil::GetFontWithNewFontSize(Infragistics.FontInfo, System.Double)" />*/
	getFontWithNewFontSize: function (font, fontSize) {
		var tempFont = font.copyFontInfo();
		tempFont.fontSize(fontSize);
		tempFont.fontString(fontSize + "px " + font.fontFamily());
		return tempFont;
	}
	/*<EndMethod Name="Infragistics.FontInfo Infragistics.FontUtil::GetFontWithNewFontSize(Infragistics.FontInfo, System.Double)" />*/
	,
	/*<BeginMethod Name="Infragistics.FontInfo Infragistics.FontUtil::GetFontInfoFromString(System.Html.IDomRenderer, System.String)" />*/
	getFontInfoFromString: function (renderer, font) {
		renderer.startCSSQuery();
		renderer.setCssQueryFontString(font);
		var fontStyle = renderer.getCssDefaultPropertyValue("", "font-style");
		var fontVariant = renderer.getCssDefaultPropertyValue("", "font-variant");
		var fontWeight = renderer.getCssDefaultPropertyValue("", "font-weight");
		switch (fontWeight) {
			case "400":
				fontWeight = "normal";
				break;
			case "800":
				fontWeight = "bold";
				break;
		}
		var fontSize = renderer.getCssDefaultPropertyValue("", "font-size");
		var lineHeight = renderer.getCssDefaultPropertyValue("", "line-height");
		var fontFamily = renderer.getCssDefaultPropertyValue("", "font-family");
		renderer.endCSSQuery();
		var returnFont = new $.ig.FontInfo();
		var first = true;
		font = "";
		if (fontStyle.length > 0) {
			if (!first) {
				font += " ";
			} else {
				first = false;
			}
			font += fontStyle;
		}
		if (fontVariant.length > 0) {
			if (!first) {
				font += " ";
			} else {
				first = false;
			}
			font += fontVariant;
		}
		if (fontWeight.length > 0) {
			if (!first) {
				font += " ";
			} else {
				first = false;
			}
			font += fontWeight;
		}
		if (fontSize.length > 0) {
			if (!first) {
				font += " ";
			} else {
				first = false;
			}
			font += fontSize;
		}
		if (lineHeight.length > 0) {
			if (!first) {
				font += "/";
			} else {
				first = false;
			}
			font += lineHeight;
		}
		if (fontFamily.length > 0) {
			if (!first) {
				font += " ";
			} else {
				first = false;
			}
			font += fontFamily;
		}
		var info = new $.ig.FontInfo();
		info.fontFamily(fontFamily);
		info.fontSize(parseFloat(fontSize));
		info.fontStretch("Normal");
		info.fontStyle(fontStyle);
		info.fontVariant(fontVariant);
		info.fontWeight(fontWeight);
		info.fontString(font);
		return info;
	}
	/*<EndMethod Name="Infragistics.FontInfo Infragistics.FontUtil::GetFontInfoFromString(System.Html.IDomRenderer, System.String)" />*/
	,
	/*<BeginMethod Name="Infragistics.FontInfo Infragistics.FontUtil::GetFontForClass(System.Html.IDomRenderer, System.String)" />*/
	getFontForClass: function (container, className) {
		var font = String.empty();
		container.startCSSQuery();
		var fontStyle = container.getCssDefaultPropertyValue(className, "font-style");
		var fontVariant = container.getCssDefaultPropertyValue(className, "font-variant");
		var fontWeight = container.getCssDefaultPropertyValue(className, "font-weight");
		switch (fontWeight) {
			case "400":
				fontWeight = "normal";
				break;
			case "800":
				fontWeight = "bold";
				break;
		}
		var fontSize = container.getCssDefaultPropertyValue(className, "font-size");
		var lineHeight = container.getCssDefaultPropertyValue(className, "line-height");
		var fontFamily = container.getCssDefaultPropertyValue(className, "font-family");
		container.endCSSQuery();
		var first = true;
		if (fontStyle.length > 0) {
			if (!first) {
				font += " ";
			} else {
				first = false;
			}
			font += fontStyle;
		}
		if (fontVariant.length > 0) {
			if (!first) {
				font += " ";
			} else {
				first = false;
			}
			font += fontVariant;
		}
		if (fontWeight.length > 0) {
			if (!first) {
				font += " ";
			} else {
				first = false;
			}
			font += fontWeight;
		}
		if (fontSize.length > 0) {
			if (!first) {
				font += " ";
			} else {
				first = false;
			}
			font += fontSize;
		}
		if (lineHeight.length > 0) {
			if (!first) {
				font += "/";
			} else {
				first = false;
			}
			font += lineHeight;
		}
		if (fontFamily.length > 0) {
			if (!first) {
				font += " ";
			} else {
				first = false;
			}
			font += fontFamily;
		}
		var info = new $.ig.FontInfo();
		info.fontFamily(fontFamily);
		info.fontSize(parseFloat(fontSize));
		info.fontStretch("Normal");
		info.fontStyle(fontStyle);
		info.fontVariant(fontVariant);
		info.fontWeight(fontWeight);
		info.fontString(font);
		return info;
	}
	/*<EndMethod Name="Infragistics.FontInfo Infragistics.FontUtil::GetFontForClass(System.Html.IDomRenderer, System.String)" />*/
	,
	/*<BeginMethod Name="Infragistics.FontInfo Infragistics.FontUtil::GetFont(System.Html.IDomRenderer)" />*/
	getFont: function (container) {
		return $.ig.FontUtil.prototype.getFontForClass(container, "");
	}
	/*<EndMethod Name="Infragistics.FontInfo Infragistics.FontUtil::GetFont(System.Html.IDomRenderer)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.FontUtil::UpdateFontString(Infragistics.FontInfo)" />*/
	updateFontString: function (fontInfo) {
		var font = String.empty();
		var fontStyle = fontInfo.fontStyle();
		var fontVariant = fontInfo.fontVariant();
		var fontWeight = fontInfo.fontWeight();
		var fontSize = fontInfo.fontSize().toString();
		var lineHeight = "normal";
		var fontFamily = fontInfo.fontFamily();
		var first = true;
		if (fontStyle != null && fontStyle.length > 0) {
			if (!first) {
				font += " ";
			} else {
				first = false;
			}
			font += fontStyle;
		}
		if (fontVariant != null && fontVariant.length > 0) {
			if (!first) {
				font += " ";
			} else {
				first = false;
			}
			font += fontVariant;
		}
		if (fontWeight != null && fontWeight.length > 0) {
			if (!first) {
				font += " ";
			} else {
				first = false;
			}
			font += fontWeight;
		}
		if (fontSize.length > 0) {
			if (!first) {
				font += " ";
			} else {
				first = false;
			}
			font += fontSize + "px";
		}
		if (lineHeight != null && lineHeight.length > 0) {
			if (!first) {
				font += "/";
			} else {
				first = false;
			}
			font += lineHeight;
		}
		if (fontFamily != null && fontFamily.length > 0) {
			if (!first) {
				font += " ";
			} else {
				first = false;
			}
			font += fontFamily;
		}
		fontInfo.fontString(font);
	}
	/*<EndMethod Name="System.Void Infragistics.FontUtil::UpdateFontString(Infragistics.FontInfo)" />*/
	,
	/*<BeginMethod Name="Infragistics.FontInfo Infragistics.FontUtil::GetFontInfo(System.Html.IDomRenderer, System.Windows.FrameworkElement, Infragistics.FontInfo)" />*/
	getFontInfo: function (renderer, tb, fontDescriptor) {
		if (fontDescriptor == null) {
			var fi = new $.ig.FontInfo();
			renderer.startCSSQuery();
			var fontStyle = renderer.getCssDefaultPropertyValue("", "font-style");
			var fontVariant = renderer.getCssDefaultPropertyValue("", "font-variant");
			var fontWeight = renderer.getCssDefaultPropertyValue("", "font-weight");
			switch (fontWeight) {
				case "400":
					fontWeight = "normal";
					break;
				case "800":
					fontWeight = "bold";
					break;
			}
			var fontSize = renderer.getCssDefaultPropertyValue("", "font-size");
			var lineHeight = renderer.getCssDefaultPropertyValue("", "line-height");
			var fontFamily = renderer.getCssDefaultPropertyValue("", "font-family");
			fi.fontFamily($.ig.util.replace(fontFamily, "'", ""));
			fi.fontStyle($.ig.FontUtil.prototype.toUpperFirst(fontStyle));
			fi.fontWeight($.ig.FontUtil.prototype.toUpperFirst(fontWeight.toString()));
			fi.fontVariant(fontVariant);
			fi.lineHeight(parseFloat(lineHeight));
			fi.fontSize(parseFloat(fontSize));
			renderer.endCSSQuery();
			return fi;
		}
		return fontDescriptor;
	}
	/*<EndMethod Name="Infragistics.FontInfo Infragistics.FontUtil::GetFontInfo(System.Html.IDomRenderer, System.Windows.FrameworkElement, Infragistics.FontInfo)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.FontUtil::ToUpperFirst(System.String)" />*/
	toUpperFirst: function (label) {
		if (String.isNullOrEmpty(label)) {
			return String.empty();
		}
		var result = label.substr(0, 1).toUpperCase();
		if (label.length > 1) {
			result += label.substr(1);
		}
		return result;
	}
	/*<EndMethod Name="System.String Infragistics.FontUtil::ToUpperFirst(System.String)" />*/
	,
	/*<BeginMethod Name="Infragistics.FontInfo Infragistics.FontUtil::ToFontInfo(System.Html.IDomRenderer, System.String)" />*/
	toFontInfo: function (renderer, font) {
		if (font == null) {
			return null;
		}
		return $.ig.FontUtil.prototype.getFontInfoFromString(renderer, font);
	}
	/*<EndMethod Name="Infragistics.FontInfo Infragistics.FontUtil::ToFontInfo(System.Html.IDomRenderer, System.String)" />*/
	,
	/*<BeginMethod Name=" Infragistics.FontUtil::SplitString(System.String, )" />*/
	splitString: function (text, delimiters) {
		return $.ig.util.stringSplit(text, delimiters, $.ig.StringSplitOptions.prototype.none);
	}
	/*<EndMethod Name=" Infragistics.FontUtil::SplitString(System.String, )" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.FontUtil::InterpolateFont(Infragistics.FontInfo, System.Double, Infragistics.FontInfo, Infragistics.FontInfo)" />*/
	interpolateFont: function (actualFont, p, fromFont, toFont) {
		if (fromFont == null) {
			fromFont = toFont;
		}
		if (toFont == null) {
			toFont = fromFont;
		}
		if (fromFont == null && toFont == null) {
			return;
		}
		if (p > 0.5) {
			actualFont.fontFamily(toFont.fontFamily());
			actualFont.fontStretch(toFont.fontStretch());
			actualFont.fontStyle(toFont.fontStyle());
			actualFont.fontVariant(toFont.fontVariant());
			actualFont.fontWeight(toFont.fontWeight());
			actualFont.lineHeight(toFont.lineHeight());
			actualFont.fontSize(toFont.fontSize());
		} else {
			actualFont.fontFamily(fromFont.fontFamily());
			actualFont.fontStretch(fromFont.fontStretch());
			actualFont.fontStyle(fromFont.fontStyle());
			actualFont.fontVariant(fromFont.fontVariant());
			actualFont.fontWeight(fromFont.fontWeight());
			actualFont.lineHeight(fromFont.lineHeight());
			actualFont.fontSize(fromFont.fontSize());
		}
		if (!$.ig.util.isNaN(fromFont.fontSize()) && !$.ig.util.isNaN(toFont.fontSize())) {
			actualFont.fontSize(fromFont.fontSize() + (toFont.fontSize() - fromFont.fontSize()) * p);
		}
		$.ig.FontUtil.prototype.updateFontString(actualFont);
	}
	/*<EndMethod Name="System.Void Infragistics.FontUtil::InterpolateFont(Infragistics.FontInfo, System.Double, Infragistics.FontInfo, Infragistics.FontInfo)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.FontUtil::CharsEqual(System.String, System.Int32, , System.Int32)" />*/
	charsEqual: function (text1, index1, chars, index2) {
		return text1.charAt(index1).equals(chars[index2]);
	}
	/*<EndMethod Name="System.Boolean Infragistics.FontUtil::CharsEqual(System.String, System.Int32, , System.Int32)" />*/
	,
	$type: new $.ig.Type('FontUtil', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.FontUtil" />*/

/*<BeginType Name="Infragistics.RenderingContext" />*/

$.ig.util.defType('RenderingContext', 'Object', {
	__renderer: null,
	/*<BeginMethod Name="System.Object Infragistics.RenderingContext::GetUnderlyingContext()" />*/
	getUnderlyingContext: function () {
		if (this.__renderer == null) {
			return null;
		}
		return this.__renderer.getUnderlyingContext();
	}
	/*<EndMethod Name="System.Object Infragistics.RenderingContext::GetUnderlyingContext()" />*/
	,
	init: function (renderer, data) {
		this.__renderer = null;
		$.ig.Object.prototype.init.call(this);
		this.__renderer = renderer;
		if (this.__renderer != null) {
			this.__renderer.data(data);
		}
	},
	/*<BeginProperty Name="System.Boolean Infragistics.RenderingContext::ShouldRender()" />*/
	shouldRender: function () {
		if (this.__renderer == null) {
			return false;
		}
		return true;
	}
	/*<EndProperty Name="System.Boolean Infragistics.RenderingContext::ShouldRender()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.RenderingContext::RenderRectangle(System.Windows.Shapes.Rectangle)" />*/
	renderRectangle: function (rectangle) {
		if (this.__renderer == null) {
			return;
		}
		this.__renderer.renderRectangle(rectangle);
	}
	/*<EndMethod Name="System.Void Infragistics.RenderingContext::RenderRectangle(System.Windows.Shapes.Rectangle)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.RenderingContext::RenderPath(System.Windows.Shapes.Path)" />*/
	renderPath: function (path) {
		if (this.__renderer == null) {
			return;
		}
		this.__renderer.renderPath(path);
	}
	/*<EndMethod Name="System.Void Infragistics.RenderingContext::RenderPath(System.Windows.Shapes.Path)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.RenderingContext::RenderGeometry(System.Windows.Media.Geometry)" />*/
	renderGeometry: function (geometry) {
		if (this.__renderer == null) {
			return;
		}
		this.__renderer.renderGeometry(geometry);
	}
	/*<EndMethod Name="System.Void Infragistics.RenderingContext::RenderGeometry(System.Windows.Media.Geometry)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.RenderingContext::RenderTextBlock(System.Windows.Controls.TextBlock)" />*/
	renderTextBlock: function (tb) {
		if (this.__renderer == null) {
			return;
		}
		this.__renderer.renderTextBlock(tb);
	}
	/*<EndMethod Name="System.Void Infragistics.RenderingContext::RenderTextBlock(System.Windows.Controls.TextBlock)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.RenderingContext::RenderTextBlockInRect(System.Windows.Controls.TextBlock, System.Windows.Rect, System.Double)" />*/
	renderTextBlockInRect: function (tb, rect, lineHeight) {
		if (this.__renderer == null) {
			return;
		}
		this.__renderer.renderTextBlockInRect(tb, rect, lineHeight);
	}
	/*<EndMethod Name="System.Void Infragistics.RenderingContext::RenderTextBlockInRect(System.Windows.Controls.TextBlock, System.Windows.Rect, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.RenderingContext::RenderPolygon(System.Windows.Shapes.Polygon)" />*/
	renderPolygon: function (polygon) {
		if (this.__renderer == null) {
			return;
		}
		this.__renderer.renderPolygon(polygon);
	}
	/*<EndMethod Name="System.Void Infragistics.RenderingContext::RenderPolygon(System.Windows.Shapes.Polygon)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.RenderingContext::RenderPolyline(System.Windows.Shapes.Polyline)" />*/
	renderPolyline: function (polyline) {
		if (this.__renderer == null) {
			return;
		}
		this.__renderer.renderPolyline(polyline);
	}
	/*<EndMethod Name="System.Void Infragistics.RenderingContext::RenderPolyline(System.Windows.Shapes.Polyline)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.RenderingContext::RenderContentControl(System.Windows.DataTemplateRenderInfo, System.Windows.ContentControl)" />*/
	renderContentControl: function (info, marker) {
		if (this.__renderer == null) {
			return;
		}
		this.__renderer.renderContentControl(info, marker);
	}
	/*<EndMethod Name="System.Void Infragistics.RenderingContext::RenderContentControl(System.Windows.DataTemplateRenderInfo, System.Windows.ContentControl)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.RenderingContext::ApplyTransform(System.Windows.Media.Transform)" />*/
	applyTransform: function (transform) {
		if (this.__renderer == null) {
			return;
		}
		this.__renderer.applyTransform(transform);
	}
	/*<EndMethod Name="System.Void Infragistics.RenderingContext::ApplyTransform(System.Windows.Media.Transform)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.RenderingContext::RenderLine(System.Windows.Shapes.Line)" />*/
	renderLine: function (line) {
		if (this.__renderer == null) {
			return;
		}
		this.__renderer.renderLine(line);
	}
	/*<EndMethod Name="System.Void Infragistics.RenderingContext::RenderLine(System.Windows.Shapes.Line)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.RenderingContext::Save()" />*/
	save: function () {
		if (this.__renderer == null) {
			return;
		}
		this.__renderer.save();
	}
	/*<EndMethod Name="System.Void Infragistics.RenderingContext::Save()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.RenderingContext::Restore()" />*/
	restore: function () {
		if (this.__renderer == null) {
			return;
		}
		this.__renderer.restore();
	}
	/*<EndMethod Name="System.Void Infragistics.RenderingContext::Restore()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.RenderingContext::SetRectangleClip(System.Windows.Rect)" />*/
	setRectangleClip: function (clipRectangle) {
		if (this.__renderer == null) {
			return;
		}
		this.__renderer.setRectangleClip(clipRectangle);
	}
	/*<EndMethod Name="System.Void Infragistics.RenderingContext::SetRectangleClip(System.Windows.Rect)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.RenderingContext::Scale(System.Double, System.Double)" />*/
	scale: function (x, y) {
		if (this.__renderer == null) {
			return;
		}
		this.__renderer.scale(x, y);
	}
	/*<EndMethod Name="System.Void Infragistics.RenderingContext::Scale(System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.RenderingContext::Translate(System.Double, System.Double)" />*/
	translate: function (x, y) {
		if (this.__renderer == null) {
			return;
		}
		this.__renderer.translate(x, y);
	}
	/*<EndMethod Name="System.Void Infragistics.RenderingContext::Translate(System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.RenderingContext::ClearRectangle(System.Double, System.Double, System.Double, System.Double)" />*/
	clearRectangle: function (left, top, width, height) {
		if (this.__renderer == null) {
			return;
		}
		this.__renderer.clearRectangle(left, top, width, height);
	}
	/*<EndMethod Name="System.Void Infragistics.RenderingContext::ClearRectangle(System.Double, System.Double, System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.RenderingContext::DrawImage(System.Object, System.Double, System.Double, System.Double, System.Double, System.Double, System.Double, System.Double, System.Double, System.Double)" />*/
	drawImage1: function (image, opacity, sourceLeft, sourceTop, sourceWidth, sourceHeight, left, top, width, height) {
		if (this.__renderer == null) {
			return;
		}
		this.__renderer.drawImage1(image, opacity, sourceLeft, sourceTop, sourceWidth, sourceHeight, left, top, width, height);
	}
	/*<EndMethod Name="System.Void Infragistics.RenderingContext::DrawImage(System.Object, System.Double, System.Double, System.Double, System.Double, System.Double, System.Double, System.Double, System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.RenderingContext::DrawImage(System.Object, System.Double, System.Double, System.Double, System.Double, System.Double)" />*/
	drawImage: function (image, opacity, left, top, width, height) {
		if (this.__renderer == null) {
			return;
		}
		this.__renderer.drawImage(image, opacity, left, top, width, height);
	}
	/*<EndMethod Name="System.Void Infragistics.RenderingContext::DrawImage(System.Object, System.Double, System.Double, System.Double, System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name=" Infragistics.RenderingContext::GetPixelAt(System.Int32, System.Int32)" />*/
	getPixelAt: function (x, y) {
		if (this.__renderer == null) {
			return null;
		}
		return this.__renderer.getPixelAt(x, y);
	}
	/*<EndMethod Name=" Infragistics.RenderingContext::GetPixelAt(System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.RenderingContext::GetFont()" />*/
	getFont: function () {
		if (this.__renderer == null) {
			return null;
		}
		return this.__renderer.getFont();
	}
	/*<EndMethod Name="System.String Infragistics.RenderingContext::GetFont()" />*/
	,
	/*<BeginMethod Name="Infragistics.FontInfo Infragistics.RenderingContext::GetFontInfo()" />*/
	getFontInfo: function () {
		if (this.__renderer == null) {
			return null;
		}
		return this.__renderer.getFontInfo();
	}
	/*<EndMethod Name="Infragistics.FontInfo Infragistics.RenderingContext::GetFontInfo()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.RenderingContext::SetFont(System.String)" />*/
	setFont: function (font) {
		if (this.__renderer == null) {
			return;
		}
		this.__renderer.setFont(font);
	}
	/*<EndMethod Name="System.Void Infragistics.RenderingContext::SetFont(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.RenderingContext::SetFontInfo(Infragistics.FontInfo)" />*/
	setFontInfo: function (fontInfo) {
		if (this.__renderer == null) {
			return;
		}
		this.__renderer.setFontInfo(fontInfo);
	}
	/*<EndMethod Name="System.Void Infragistics.RenderingContext::SetFontInfo(Infragistics.FontInfo)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.RenderingContext::MeasureTextWidth(System.String)" />*/
	measureTextWidth: function (text) {
		if (this.__renderer == null) {
			return NaN;
		}
		return this.__renderer.measureTextWidth(text);
	}
	/*<EndMethod Name="System.Double Infragistics.RenderingContext::MeasureTextWidth(System.String)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.RenderingContext::MeasureTextBlockWidth(System.Windows.Controls.TextBlock)" />*/
	measureTextBlockWidth: function (text) {
		if (this.__renderer == null) {
			return NaN;
		}
		var context = this.__renderer.getFontInfo();
		var contextVersion = 0;
		if (context == null) {
			context = this.__renderer.getFont();
		} else {
			contextVersion = (context).versionNumber();
		}
		var hist = text.getHistoricalWidth(context, contextVersion);
		if (hist >= 0) {
			return hist;
		}
		var width = this.__renderer.measureTextWidth(text.text());
		text.setHistoricalWidth(context, contextVersion, width);
		return width;
	}
	/*<EndMethod Name="System.Double Infragistics.RenderingContext::MeasureTextBlockWidth(System.Windows.Controls.TextBlock)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.RenderingContext::SetOpacity(System.Double)" />*/
	setOpacity: function (p) {
		if (this.__renderer == null) {
			return;
		}
		this.__renderer.setOpacity(p);
	}
	/*<EndMethod Name="System.Void Infragistics.RenderingContext::SetOpacity(System.Double)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.RenderingContext::ApplyStyle(System.Windows.Shapes.Shape, System.Windows.Style)" />*/
	applyStyle: function (shape, style) {
		if (this.__renderer == null) {
			return;
		}
		this.__renderer.applyStyle(shape, style);
	}
	/*<EndMethod Name="System.Void Infragistics.RenderingContext::ApplyStyle(System.Windows.Shapes.Shape, System.Windows.Style)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.RenderingContext::EnableDropShadow(System.String, System.Double, System.Double, System.Double)" />*/
	enableDropShadow: function (color, blur, offsetX, offsetY) {
		if (this.__renderer == null) {
			return;
		}
		this.__renderer.enableDropShadow(color, blur, offsetX, offsetY);
	}
	/*<EndMethod Name="System.Void Infragistics.RenderingContext::EnableDropShadow(System.String, System.Double, System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.RenderingContext::DisableDropShadow()" />*/
	disableDropShadow: function () {
		if (this.__renderer == null) {
			return;
		}
		this.__renderer.disableDropShadow();
	}
	/*<EndMethod Name="System.Void Infragistics.RenderingContext::DisableDropShadow()" />*/
	,
	$type: new $.ig.Type('RenderingContext', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.RenderingContext" />*/

/*<BeginType Name="Infragistics.EasingFunctions" />*/

$.ig.util.defType('EasingFunctions', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Double Infragistics.EasingFunctions::Cubic(System.Double)" />*/
	cubic: function (p) {
		return p * p * p;
	}
	/*<EndMethod Name="System.Double Infragistics.EasingFunctions::Cubic(System.Double)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.EasingFunctions::Exponential(System.Double)" />*/
	exponential: function (p) {
		return (Math.exp(2 * p) - 1) / (Math.exp(2) - 1);
	}
	/*<EndMethod Name="System.Double Infragistics.EasingFunctions::Exponential(System.Double)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.EasingFunctions::Circle(System.Double)" />*/
	circle: function (p) {
		return 1 - Math.sqrt(1 - p * p);
	}
	/*<EndMethod Name="System.Double Infragistics.EasingFunctions::Circle(System.Double)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.EasingFunctions::DoIn(System.Double, System.Func)" />*/
	doIn: function (t, func) {
		var fastTime = t * 2;
		return 0.5 * func(fastTime);
	}
	/*<EndMethod Name="System.Double Infragistics.EasingFunctions::DoIn(System.Double, System.Func)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.EasingFunctions::DoOut(System.Double, System.Func)" />*/
	doOut: function (t, func) {
		var fastTime = (1 - t) * 2;
		var y = 1 - func(fastTime);
		return 0.5 * y + 0.5;
	}
	/*<EndMethod Name="System.Double Infragistics.EasingFunctions::DoOut(System.Double, System.Func)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.EasingFunctions::CubicEase(System.Double)" />*/
	cubicEase: function (t) {
		if (t < 0.5) {
			var fastTime = t * 2;
			return 0.5 * $.ig.EasingFunctions.prototype.cubic(fastTime);
		}
		var outFastTime = (1 - t) * 2;
		var y = 1 - $.ig.EasingFunctions.prototype.cubic(outFastTime);
		return 0.5 * y + 0.5;
	}
	/*<EndMethod Name="System.Double Infragistics.EasingFunctions::CubicEase(System.Double)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.EasingFunctions::ExponentialEase(System.Double)" />*/
	exponentialEase: function (t) {
		if (t < 0.5) {
			return $.ig.EasingFunctions.prototype.doIn(t, $.ig.EasingFunctions.prototype.exponential);
		}
		return $.ig.EasingFunctions.prototype.doOut(t, $.ig.EasingFunctions.prototype.exponential);
	}
	/*<EndMethod Name="System.Double Infragistics.EasingFunctions::ExponentialEase(System.Double)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.EasingFunctions::CircleEase(System.Double)" />*/
	circleEase: function (t) {
		if (t < 0.5) {
			return $.ig.EasingFunctions.prototype.doIn(t, $.ig.EasingFunctions.prototype.circle);
		}
		return $.ig.EasingFunctions.prototype.doOut(t, $.ig.EasingFunctions.prototype.circle);
	}
	/*<EndMethod Name="System.Double Infragistics.EasingFunctions::CircleEase(System.Double)" />*/
	,
	$type: new $.ig.Type('EasingFunctions', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.EasingFunctions" />*/

/*<BeginType Name="Infragistics.BrushCollection" />*/

$.ig.util.defType('BrushCollection', 'ObservableCollection$1', {
	init: function () {
		this._interpolationMode = $.ig.InterpolationMode.prototype.rGB;
		$.ig.ObservableCollection$1.prototype.init.call(this, $.ig.Brush.prototype.$type, 0);
	},
	/*<BeginMethod Name="System.Windows.Media.Brush Infragistics.BrushCollection::SelectRandom()" />*/
	selectRandom: function () {
		return this.item($.ig.BrushCollection.prototype._random.next1(this.count()));
	}
	/*<EndMethod Name="System.Windows.Media.Brush Infragistics.BrushCollection::SelectRandom()" />*/
	,
	/*<BeginMethod Name="System.Windows.Media.Brush Infragistics.BrushCollection::InterpolateRandom()" />*/
	interpolateRandom: function () {
		return this.getInterpolatedBrush($.ig.BrushCollection.prototype._random.nextDouble() * (this.count() - 1));
	}
	/*<EndMethod Name="System.Windows.Media.Brush Infragistics.BrushCollection::InterpolateRandom()" />*/
	,
	/*<BeginProperty Name="Infragistics.InterpolationMode Infragistics.BrushCollection::InterpolationMode()" />*/
	interpolationMode: function (value) {
		if (arguments.length === 1) {
			if (this._interpolationMode != value) {
				this._interpolationMode = value;
				this.onCollectionChanged(new $.ig.NotifyCollectionChangedEventArgs(0, $.ig.NotifyCollectionChangedAction.prototype.reset));
			}
			return value;
		} else {
			return this._interpolationMode;
		}
	}
	/*<EndProperty Name="Infragistics.InterpolationMode Infragistics.BrushCollection::InterpolationMode()" />*/
	,
	_interpolationMode: 0,
	/*<BeginProperty Name="System.Windows.Media.Brush Infragistics.BrushCollection::Item(System.Int32)" />*/
	item: function (index, value) {
		if (arguments.length === 2) {
			$.ig.ObservableCollection$1.prototype.item.call(this, index, value);
			return value;
		} else {
			if (index < 0 || index >= this.count()) {
				return null;
			}
			return $.ig.ObservableCollection$1.prototype.item.call(this, index);
		}
	}
	/*<EndProperty Name="System.Windows.Media.Brush Infragistics.BrushCollection::Item(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Windows.Media.Brush Infragistics.BrushCollection::GetInterpolatedBrush(System.Double)" />*/
	getInterpolatedBrush: function (index) {
		if ($.ig.util.isNaN(index)) {
			return null;
		}
		index = $.ig.MathUtil.prototype.clamp(index, 0, this.count() - 1);
		var i = $.ig.truncate(Math.floor(index));
		if (i == index) {
			return this.item(i);
		}
		return this.interpolateBrushes(index - i, this.item(i), this.item(i + 1), this.interpolationMode());
	}
	/*<EndMethod Name="System.Windows.Media.Brush Infragistics.BrushCollection::GetInterpolatedBrush(System.Double)" />*/
	,
	/*<BeginMethod Name="System.Windows.Media.Brush Infragistics.BrushCollection::InterpolateBrushes(System.Double, System.Windows.Media.Brush, System.Windows.Media.Brush, Infragistics.InterpolationMode)" />*/
	interpolateBrushes: function (p, minBrush, maxBrush, InterpolationMode) {
		var minFill = minBrush.color();
		var maxFill = maxBrush.color();
		var interp = $.ig.ColorUtil.prototype.getInterpolation(minFill, p, maxFill, InterpolationMode);
		var b = new $.ig.Brush();
		b.color(interp);
		return b;
	}
	/*<EndMethod Name="System.Windows.Media.Brush Infragistics.BrushCollection::InterpolateBrushes(System.Double, System.Windows.Media.Brush, System.Windows.Media.Brush, Infragistics.InterpolationMode)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.BrushCollection::Equals(System.Object)" />*/
	equals: function (obj) {
		if (obj == null) {
			return false;
		}
		var bc = obj;
		if (bc.count() != this.count()) {
			return false;
		}
		for (var i = 0; i < bc.count(); i++) {
			if (!bc.item(i).equals(this.item(i))) {
				return false;
			}
		}
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.BrushCollection::Equals(System.Object)" />*/
	,
	$type: new $.ig.Type('BrushCollection', $.ig.ObservableCollection$1.prototype.$type.specialize($.ig.Brush.prototype.$type))
}, true);

/*<EndType Name="Infragistics.BrushCollection" />*/

/*<BeginType Name="Infragistics.DoubleValueChangedEventArgs" />*/

$.ig.util.defType('DoubleValueChangedEventArgs', 'EventArgs', {
	init: function (oldValue, newValue) {
		$.ig.EventArgs.prototype.init.call(this);
		this.oldValue(oldValue);
		this.newValue(newValue);
	},
	_oldValue: 0,
	/*<BeginProperty Name="System.Double Infragistics.DoubleValueChangedEventArgs::OldValue()" />*/
	oldValue: function (value) {
		if (arguments.length === 1) {
			this._oldValue = value;
			return value;
		} else {
			return this._oldValue;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.DoubleValueChangedEventArgs::OldValue()" />*/
	,
	_newValue: 0,
	/*<BeginProperty Name="System.Double Infragistics.DoubleValueChangedEventArgs::NewValue()" />*/
	newValue: function (value) {
		if (arguments.length === 1) {
			this._newValue = value;
			return value;
		} else {
			return this._newValue;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.DoubleValueChangedEventArgs::NewValue()" />*/
	,
	$type: new $.ig.Type('DoubleValueChangedEventArgs', $.ig.EventArgs.prototype.$type)
}, true);

/*<EndType Name="Infragistics.DoubleValueChangedEventArgs" />*/

/*<BeginType Name="Infragistics.IErrorBarCalculator" />*/

$.ig.util.defType('IErrorBarCalculator', 'Object', {
	$type: new $.ig.Type('IErrorBarCalculator', null)
}, true);

/*<EndType Name="Infragistics.IErrorBarCalculator" />*/

/*<BeginType Name="Infragistics.FastItemsSourceEventArgs" />*/

$.ig.util.defType('FastItemsSourceEventArgs', 'EventArgs', {
	init: function (initNumber, action, position, count) {
		if (initNumber > 0) {
			switch (initNumber) {
				case 1:
					this.init1.apply(this, arguments);
					break;
			}
			return;
		}
		$.ig.EventArgs.prototype.init.call(this);
		this.action(action);
		this.position(position);
		this.count(count);
		this.propertyName(null);
	},
	init1: function (initNumber, position, propertyName) {
		$.ig.EventArgs.prototype.init.call(this);
		this.action($.ig.FastItemsSourceEventAction.prototype.change);
		this.position(position);
		this.count(1);
		this.propertyName(propertyName);
	},
	_action: 0,
	/*<BeginProperty Name="Infragistics.FastItemsSourceEventAction Infragistics.FastItemsSourceEventArgs::Action()" />*/
	action: function (value) {
		if (arguments.length === 1) {
			this._action = value;
			return value;
		} else {
			return this._action;
		}
	}
	/*<EndProperty Name="Infragistics.FastItemsSourceEventAction Infragistics.FastItemsSourceEventArgs::Action()" />*/
	,
	_position: 0,
	/*<BeginProperty Name="System.Int32 Infragistics.FastItemsSourceEventArgs::Position()" />*/
	position: function (value) {
		if (arguments.length === 1) {
			this._position = value;
			return value;
		} else {
			return this._position;
		}
	}
	/*<EndProperty Name="System.Int32 Infragistics.FastItemsSourceEventArgs::Position()" />*/
	,
	_count: 0,
	/*<BeginProperty Name="System.Int32 Infragistics.FastItemsSourceEventArgs::Count()" />*/
	count: function (value) {
		if (arguments.length === 1) {
			this._count = value;
			return value;
		} else {
			return this._count;
		}
	}
	/*<EndProperty Name="System.Int32 Infragistics.FastItemsSourceEventArgs::Count()" />*/
	,
	_propertyName: null,
	/*<BeginProperty Name="System.String Infragistics.FastItemsSourceEventArgs::PropertyName()" />*/
	propertyName: function (value) {
		if (arguments.length === 1) {
			this._propertyName = value;
			return value;
		} else {
			return this._propertyName;
		}
	}
	/*<EndProperty Name="System.String Infragistics.FastItemsSourceEventArgs::PropertyName()" />*/
	,
	$type: new $.ig.Type('FastItemsSourceEventArgs', $.ig.EventArgs.prototype.$type)
}, true);

/*<EndType Name="Infragistics.FastItemsSourceEventArgs" />*/

/*<BeginType Name="Infragistics.RectChangedEventArgs" />*/

$.ig.util.defType('RectChangedEventArgs', 'EventArgs', {
	init: function (oldRect, newRect) {
		$.ig.EventArgs.prototype.init.call(this);
		this.oldRect(oldRect);
		this.newRect(newRect);
	},
	_oldRect: null,
	/*<BeginProperty Name="System.Windows.Rect Infragistics.RectChangedEventArgs::OldRect()" />*/
	oldRect: function (value) {
		if (arguments.length === 1) {
			this._oldRect = value;
			return value;
		} else {
			return this._oldRect;
		}
	}
	/*<EndProperty Name="System.Windows.Rect Infragistics.RectChangedEventArgs::OldRect()" />*/
	,
	_newRect: null,
	/*<BeginProperty Name="System.Windows.Rect Infragistics.RectChangedEventArgs::NewRect()" />*/
	newRect: function (value) {
		if (arguments.length === 1) {
			this._newRect = value;
			return value;
		} else {
			return this._newRect;
		}
	}
	/*<EndProperty Name="System.Windows.Rect Infragistics.RectChangedEventArgs::NewRect()" />*/
	,
	$type: new $.ig.Type('RectChangedEventArgs', $.ig.EventArgs.prototype.$type)
}, true);

/*<EndType Name="Infragistics.RectChangedEventArgs" />*/

/*<BeginType Name="Infragistics.ArrayUtil" />*/

$.ig.util.defType('ArrayUtil', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Void Infragistics.ArrayUtil::Shuffle`1(System.Collections.Generic.IList)" />*/
	shuffle$1: function ($t, list) {
		if (list != null) {
			var random = new $.ig.Random(0);
			for (var n = list.count() - 1; n > 0; --n) {
				var k = random.next1(n);
				var temp = list.item(n);
				list.item(n, list.item(k));
				list.item(k, temp);
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.ArrayUtil::Shuffle`1(System.Collections.Generic.IList)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.ArrayUtil::InsertionIndex`1(System.Collections.Generic.IList, Infragistics.ArrayUtil.T)" />*/
	insertionIndex$1: function ($t, collection, value) {
		var index = -1;
		var b = 0;
		var e = collection.count();
		while (index == -1) {
			if (e <= b) {
				index = b;
			} else {
				var m = $.ig.intDivide((b + e), 2);
				switch (Math.sign((value).compareTo($.ig.util.getBoxIfEnum($t, collection.item(m))))) {
					case -1:
						e = m;
						break;
					case 0:
						index = m;
						break;
					case 1:
						b = m + 1;
						break;
				}
			}
		}
		return index;
	}
	/*<EndMethod Name="System.Int32 Infragistics.ArrayUtil::InsertionIndex`1(System.Collections.Generic.IList, Infragistics.ArrayUtil.T)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.ArrayUtil::InsertionIndex`1(System.Collections.Generic.IList, System.Comparison, Infragistics.ArrayUtil.T)" />*/
	insertionIndex$11: function ($t, collection, comparison, value) {
		var index = -1;
		var b = 0;
		var e = collection.count();
		while (index == -1) {
			if (e <= b) {
				index = b;
			} else {
				var m = $.ig.intDivide((b + e), 2);
				switch (Math.sign(comparison(value, collection.item(m)))) {
					case -1:
						e = m;
						break;
					case 0:
						index = m;
						break;
					case 1:
						b = m + 1;
						break;
				}
			}
		}
		return index;
	}
	/*<EndMethod Name="System.Int32 Infragistics.ArrayUtil::InsertionIndex`1(System.Collections.Generic.IList, System.Comparison, Infragistics.ArrayUtil.T)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.ArrayUtil::BinarySearch`1(System.Collections.Generic.IList, System.Func)" />*/
	binarySearch$11: function ($t, list, comparisonFunction) {
		var currMin = 0;
		var currMax = list.count() - 1;
		while (currMin <= currMax) {
			var currMid = (currMin + ((currMax - currMin) >> 1));
			var compResult = comparisonFunction(list.item(currMid));
			if (compResult < 0) {
				currMax = currMid - 1;
			} else if (compResult > 0) {
				currMin = currMid + 1;
			} else {
				return currMid;
			}
		}
		return ~currMin;
	}
	/*<EndMethod Name="System.Int32 Infragistics.ArrayUtil::BinarySearch`1(System.Collections.Generic.IList, System.Func)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.ArrayUtil::BinarySearch`1(Infragistics.IIndexedPool, System.Func)" />*/
	binarySearch$1: function ($t, list, comparisonFunction) {
		var currMin = 0;
		var currMax = list.count() - 1;
		while (currMin <= currMax) {
			var currMid = (currMin + ((currMax - currMin) >> 1));
			var compResult = comparisonFunction(list.item(currMid));
			if (compResult < 0) {
				currMax = currMid - 1;
			} else if (compResult > 0) {
				currMin = currMid + 1;
			} else {
				return currMid;
			}
		}
		return ~currMin;
	}
	/*<EndMethod Name="System.Int32 Infragistics.ArrayUtil::BinarySearch`1(Infragistics.IIndexedPool, System.Func)" />*/
	,
	/*<BeginMethod Name="Infragistics.ArrayUtil.T Infragistics.ArrayUtil::ElementAtMod`1(System.Collections.Generic.IList, System.Int32)" />*/
	elementAtMod$1: function ($t, list, index) {
		if (list == null) {
			return $.ig.util.getDefaultValue($t);
		}
		if (list.count() == 0) {
			return $.ig.util.getDefaultValue($t);
		}
		return list.item(index % list.count());
	}
	/*<EndMethod Name="Infragistics.ArrayUtil.T Infragistics.ArrayUtil::ElementAtMod`1(System.Collections.Generic.IList, System.Int32)" />*/
	,
	$type: new $.ig.Type('ArrayUtil', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.ArrayUtil" />*/

/*<BeginType Name="Infragistics.CoreGeometryUtil" />*/

$.ig.util.defType('CoreGeometryUtil', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Double Infragistics.CoreGeometryUtil::SimplifyAngle(System.Double)" />*/
	simplifyAngle: function (angle) {
		if ($.ig.util.isNaN(angle) || Number.isInfinity(angle)) {
			return angle;
		}
		while (angle > 360) {
			angle -= 360;
		}
		while (angle < 0) {
			angle += 360;
		}
		return angle;
	}
	/*<EndMethod Name="System.Double Infragistics.CoreGeometryUtil::SimplifyAngle(System.Double)" />*/
	,
	/*<BeginMethod Name="System.Windows.Point Infragistics.CoreGeometryUtil::GetCenterFromArcSegment(System.Windows.Point, System.Windows.Point, System.Double, System.Boolean, System.Boolean)" />*/
	getCenterFromArcSegment: function (startPoint, endPoint, radius, isCounter, isLargeArc) {
		var midway = { __x: (startPoint.__x + endPoint.__x) / 2, __y: (startPoint.__y + endPoint.__y) / 2, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName };
		var vectorX = endPoint.__x - startPoint.__x;
		var vectorY = endPoint.__y - startPoint.__y;
		var vectorLength = Math.sqrt(vectorX * vectorX + vectorY * vectorY);
		var rotatedVectorX = vectorY;
		var rotatedVectorY = vectorX * -1;
		if (isLargeArc == isCounter) {
			rotatedVectorX = vectorY * -1;
			rotatedVectorY = vectorX;
		}
		var maxAbs = Math.max(Math.abs(rotatedVectorX), Math.abs(rotatedVectorY));
		rotatedVectorX = rotatedVectorX / maxAbs;
		rotatedVectorY = rotatedVectorY / maxAbs;
		var rotatedVectorLength = Math.sqrt(rotatedVectorX * rotatedVectorX + rotatedVectorY * rotatedVectorY);
		var normalizedVectorX = rotatedVectorX / rotatedVectorLength;
		var normalizedVectorY = rotatedVectorY / rotatedVectorLength;
		var halfChordLength = vectorLength / 2;
		var distToCenter = Math.sqrt(radius * radius - halfChordLength * halfChordLength);
		if ($.ig.util.isNaN(distToCenter)) {
			distToCenter = 0;
		}
		var centerVectorX = distToCenter * normalizedVectorX;
		var centerVectorY = distToCenter * normalizedVectorY;
		var center = { __x: midway.__x + centerVectorX, __y: midway.__y + centerVectorY, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName };
		return center;
	}
	/*<EndMethod Name="System.Windows.Point Infragistics.CoreGeometryUtil::GetCenterFromArcSegment(System.Windows.Point, System.Windows.Point, System.Double, System.Boolean, System.Boolean)" />*/
	,
	$type: new $.ig.Type('CoreGeometryUtil', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.CoreGeometryUtil" />*/

/*<BeginType Name="Infragistics.DeviceUtils" />*/

$.ig.util.defType('DeviceUtils', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Double Infragistics.DeviceUtils::ToPixelUnits(System.Double)" />*/
	toPixelUnits: function (value) {
		return value;
	}
	/*<EndMethod Name="System.Double Infragistics.DeviceUtils::ToPixelUnits(System.Double)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.DeviceUtils::ToFontPixelUnits(System.Double)" />*/
	toFontPixelUnits: function (value) {
		return value;
	}
	/*<EndMethod Name="System.Double Infragistics.DeviceUtils::ToFontPixelUnits(System.Double)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.DeviceUtils::ClampPixelScalingRatio(System.Double)" />*/
	clampPixelScalingRatio: function (value) {
		if ($.ig.util.isNaN(value)) {
			return NaN;
		}
		if (value <= 0) {
			return NaN;
		}
		return value;
	}
	/*<EndMethod Name="System.Double Infragistics.DeviceUtils::ClampPixelScalingRatio(System.Double)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.DeviceUtils::FromPixelUnits(System.Double)" />*/
	fromPixelUnits1: function (value) {
		return value * $.ig.DeviceUtils.prototype.getDIPScalingRatio();
	}
	/*<EndMethod Name="System.Double Infragistics.DeviceUtils::FromPixelUnits(System.Double)" />*/
	,
	/*<BeginMethod Name="Infragistics.RectData Infragistics.DeviceUtils::FromPixelUnits(Infragistics.RectData)" />*/
	fromPixelUnits: function (value) {
		if (value == null) {
			return null;
		}
		var left = $.ig.DeviceUtils.prototype.fromPixelUnits1(value.left());
		var top = $.ig.DeviceUtils.prototype.fromPixelUnits1(value.top());
		var width = $.ig.DeviceUtils.prototype.fromPixelUnits1(value.width());
		var height = $.ig.DeviceUtils.prototype.fromPixelUnits1(value.height());
		return new $.ig.RectData(left, top, width, height);
	}
	/*<EndMethod Name="Infragistics.RectData Infragistics.DeviceUtils::FromPixelUnits(Infragistics.RectData)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.DeviceUtils::FromFontPixelUnits(System.Double)" />*/
	fromFontPixelUnits: function (value) {
		return value * $.ig.DeviceUtils.prototype.getFontDIPScalingRatio();
	}
	/*<EndMethod Name="System.Double Infragistics.DeviceUtils::FromFontPixelUnits(System.Double)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.DeviceUtils::GetDIPScalingRatio()" />*/
	getDIPScalingRatio: function () {
		var val = $.ig.DeviceUtils.prototype.toPixelUnits(2);
		return 2 / val;
	}
	/*<EndMethod Name="System.Double Infragistics.DeviceUtils::GetDIPScalingRatio()" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.DeviceUtils::GetFontDIPScalingRatio()" />*/
	getFontDIPScalingRatio: function () {
		var val = $.ig.DeviceUtils.prototype.toFontPixelUnits(2);
		return 2 / val;
	}
	/*<EndMethod Name="System.Double Infragistics.DeviceUtils::GetFontDIPScalingRatio()" />*/
	,
	$type: new $.ig.Type('DeviceUtils', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.DeviceUtils" />*/

/*<BeginType Name="Infragistics.Extensions" />*/

$.ig.util.defType('Extensions', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Void Infragistics.Extensions::Reset(System.Windows.Media.PathGeometry)" />*/
	reset1: function (geom) {
		geom.figures().clear();
		geom.figures().add(new $.ig.PathFigure());
		geom.figures().removeAt(0);
	}
	/*<EndMethod Name="System.Void Infragistics.Extensions::Reset(System.Windows.Media.PathGeometry)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Extensions::Reset(System.Windows.Media.GeometryGroup)" />*/
	reset: function (geom) {
		geom.children().clear();
		geom.children().add(new $.ig.PathGeometry());
		geom.children().removeAt(0);
	}
	/*<EndMethod Name="System.Void Infragistics.Extensions::Reset(System.Windows.Media.GeometryGroup)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Extensions::Detach(System.Windows.FrameworkElement)" />*/
	detach: function (child) {
		if (child == null) {
			return;
		}
		var parent = $.ig.util.cast($.ig.Panel.prototype.$type, child.parent());
		if (parent != null) {
			parent.children().remove(child);
			return;
		}
		var cont = $.ig.util.cast($.ig.ContentControl.prototype.$type, child.parent());
		if (cont != null) {
			cont.content(null);
			return;
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Extensions::Detach(System.Windows.FrameworkElement)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Extensions::TransferChildrenTo(System.Windows.Controls.Panel, System.Windows.Controls.Panel)" />*/
	transferChildrenTo: function (from, to) {
		var transfer = new $.ig.List$1($.ig.UIElement.prototype.$type, 0);
		var en = from.children().getEnumerator();
		while (en.moveNext()) {
			var child = en.current();
			if ($.ig.util.cast($.ig.UIElement.prototype.$type, child) !== null) {
				transfer.add(child);
			}
		}
		var en1 = transfer.getEnumerator();
		while (en1.moveNext()) {
			var child1 = en1.current();
			from.children().remove(child1);
			to.children().add(child1);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Extensions::TransferChildrenTo(System.Windows.Controls.Panel, System.Windows.Controls.Panel)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Extensions::IsPlottable(System.Windows.Point)" />*/
	isPlottable: function (point) {
		return !$.ig.util.isNaN(point.__x) && !$.ig.util.isNaN(point.__y) && !Number.isInfinity(point.__x) && !Number.isInfinity(point.__y);
	}
	/*<EndMethod Name="System.Boolean Infragistics.Extensions::IsPlottable(System.Windows.Point)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Extensions::IsPlottable(System.Windows.Rect)" />*/
	isPlottable1: function (rect) {
		return !$.ig.util.isNaN(rect.left()) && !$.ig.util.isNaN(rect.right()) && !$.ig.util.isNaN(rect.top()) && !$.ig.util.isNaN(rect.bottom()) && !Number.isInfinity(rect.left()) && !Number.isInfinity(rect.right()) && !Number.isInfinity(rect.top()) && !Number.isInfinity(rect.bottom());
	}
	/*<EndMethod Name="System.Boolean Infragistics.Extensions::IsPlottable(System.Windows.Rect)" />*/
	,
	$type: new $.ig.Type('Extensions', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Extensions" />*/

/*<BeginType Name="Infragistics.FrameworkElementExtensions" />*/

$.ig.util.defType('FrameworkElementExtensions', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Boolean Infragistics.FrameworkElementExtensions::HasParent(System.Windows.FrameworkElement, System.Windows.Controls.Panel)" />*/
	hasParent: function (frameworkElement, collection) {
		return frameworkElement.parent() != null;
	}
	/*<EndMethod Name="System.Boolean Infragistics.FrameworkElementExtensions::HasParent(System.Windows.FrameworkElement, System.Windows.Controls.Panel)" />*/
	,
	$type: new $.ig.Type('FrameworkElementExtensions', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.FrameworkElementExtensions" />*/

/*<BeginType Name="Infragistics.MathUtil" />*/

$.ig.util.defType('MathUtil', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Double Infragistics.MathUtil::Asinh(System.Double)" />*/
	asinh: function (angle) {
		return Math.log(angle + Math.sqrt(angle * angle + 1));
	}
	/*<EndMethod Name="System.Double Infragistics.MathUtil::Asinh(System.Double)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.MathUtil::Hypot(System.Double, System.Double)" />*/
	hypot: function (x, y) {
		return Math.sqrt(x * x + y * y);
	}
	/*<EndMethod Name="System.Double Infragistics.MathUtil::Hypot(System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.MathUtil::Sqr(System.Double)" />*/
	sqr: function (x) {
		return x * x;
	}
	/*<EndMethod Name="System.Double Infragistics.MathUtil::Sqr(System.Double)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.MathUtil::GammaLn(System.Double)" />*/
	gammaLn: function (x) {
		if (x <= 0) {
			return NaN;
		}
		var cof = [ 57.156235665862923, -59.597960355475493, 14.136097974741746, -0.49191381609762019, 3.3994649984811891E-05, 4.6523628927048578E-05, -9.8374475304879565E-05, 0.00015808870322491249, -0.00021026444172410488, 0.00021743961811521265, -0.00016431810653676389, 8.441822398385275E-05, -2.6190838401581408E-05, 3.6899182659531625E-06 ];
		var y = x;
		var t = (x + 0.5) * Math.log(x + 5.2421875) - (x + 5.2421875);
		var s = 0.99999999999999711;
		for (var j = 0; j < 14; j++) {
			s += cof[j] / ++y;
		}
		return t + Math.log(2.5066282746310007 * s / x);
	}
	/*<EndMethod Name="System.Double Infragistics.MathUtil::GammaLn(System.Double)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.MathUtil::Clamp(System.Double, System.Double, System.Double)" />*/
	clamp: function (value, minimum, maximum) {
		return Math.min(maximum, Math.max(minimum, value));
	}
	/*<EndMethod Name="System.Double Infragistics.MathUtil::Clamp(System.Double, System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.MathUtil::Radians(System.Double)" />*/
	radians: function (degrees) {
		return Math.PI * degrees / 180;
	}
	/*<EndMethod Name="System.Double Infragistics.MathUtil::Radians(System.Double)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.MathUtil::Degrees(System.Double)" />*/
	degrees: function (radians) {
		return 180 * radians / Math.PI;
	}
	/*<EndMethod Name="System.Double Infragistics.MathUtil::Degrees(System.Double)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.MathUtil::Noise(System.Double, System.Double, System.Double)" />*/
	noise: function (x, y, z) {
		var X = $.ig.truncate(Math.floor(x)) & 255;
		var Y = $.ig.truncate(Math.floor(y)) & 255;
		var Z = $.ig.truncate(Math.floor(z)) & 255;
		x -= Math.floor(x);
		y -= Math.floor(y);
		z -= Math.floor(z);
		var u = $.ig.MathUtil.prototype.fade(x);
		var v = $.ig.MathUtil.prototype.fade(y);
		var w = $.ig.MathUtil.prototype.fade(z);
		var A = $.ig.MathUtil.prototype._basis[X] + Y;
		var AA = $.ig.MathUtil.prototype._basis[A] + Z;
		var AB = $.ig.MathUtil.prototype._basis[A + 1] + Z;
		var B = $.ig.MathUtil.prototype._basis[X + 1] + Y;
		var BA = $.ig.MathUtil.prototype._basis[B] + Z;
		var BB = $.ig.MathUtil.prototype._basis[B + 1] + Z;
		return $.ig.MathUtil.prototype.lerp(w, $.ig.MathUtil.prototype.lerp(v, $.ig.MathUtil.prototype.lerp(u, $.ig.MathUtil.prototype.grad($.ig.MathUtil.prototype._basis[AA], x, y, z), $.ig.MathUtil.prototype.grad($.ig.MathUtil.prototype._basis[BA], x - 1, y, z)), $.ig.MathUtil.prototype.lerp(u, $.ig.MathUtil.prototype.grad($.ig.MathUtil.prototype._basis[AB], x, y - 1, z), $.ig.MathUtil.prototype.grad($.ig.MathUtil.prototype._basis[BB], x - 1, y - 1, z))), $.ig.MathUtil.prototype.lerp(v, $.ig.MathUtil.prototype.lerp(u, $.ig.MathUtil.prototype.grad($.ig.MathUtil.prototype._basis[AA + 1], x, y, z - 1), $.ig.MathUtil.prototype.grad($.ig.MathUtil.prototype._basis[BA + 1], x - 1, y, z - 1)), $.ig.MathUtil.prototype.lerp(u, $.ig.MathUtil.prototype.grad($.ig.MathUtil.prototype._basis[AB + 1], x, y - 1, z - 1), $.ig.MathUtil.prototype.grad($.ig.MathUtil.prototype._basis[BB + 1], x - 1, y - 1, z - 1))));
	}
	/*<EndMethod Name="System.Double Infragistics.MathUtil::Noise(System.Double, System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.MathUtil::fade(System.Double)" />*/
	fade: function (t) {
		return t * t * t * (t * (t * 6 - 15) + 10);
	}
	/*<EndMethod Name="System.Double Infragistics.MathUtil::fade(System.Double)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.MathUtil::lerp(System.Double, System.Double, System.Double)" />*/
	lerp: function (t, a, b) {
		return a + t * (b - a);
	}
	/*<EndMethod Name="System.Double Infragistics.MathUtil::lerp(System.Double, System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.MathUtil::grad(System.Int32, System.Double, System.Double, System.Double)" />*/
	grad: function (hash, x, y, z) {
		var h = hash & 15;
		var u = h < 8 ? x : y;
		var v = h < 4 ? y : h == 12 || h == 14 ? x : z;
		return ((h & 1) == 0 ? u : -u) + ((h & 2) == 0 ? v : -v);
	}
	/*<EndMethod Name="System.Double Infragistics.MathUtil::grad(System.Int32, System.Double, System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.MathUtil::NiceFloor(System.Double)" />*/
	niceFloor: function (value) {
		if (value == 0) {
			return 0;
		}
		if (value < 0) {
			return -$.ig.MathUtil.prototype.niceCeiling(-value);
		}
		var expv = $.ig.truncate(Math.floor(Math.log10(value)));
		var f = value / $.ig.MathUtil.prototype.expt(10, expv);
		var nf = f < 2 ? 1 : (f < 5 ? 2 : (f < 10 ? 5 : 10));
		return nf * $.ig.MathUtil.prototype.expt(10, expv);
	}
	/*<EndMethod Name="System.Double Infragistics.MathUtil::NiceFloor(System.Double)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.MathUtil::NiceRound(System.Double)" />*/
	niceRound: function (value) {
		if (value == 0) {
			return 0;
		}
		if (value < 0) {
			return -$.ig.MathUtil.prototype.niceRound(-value);
		}
		var expv = $.ig.truncate(Math.floor(Math.log10(value)));
		var f = value / $.ig.MathUtil.prototype.expt(10, expv);
		var nf = f < 1 ? 1 : (f < 3 ? 2 : (f < 7 ? 5 : 10));
		return nf * $.ig.MathUtil.prototype.expt(10, expv);
	}
	/*<EndMethod Name="System.Double Infragistics.MathUtil::NiceRound(System.Double)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.MathUtil::NiceCeiling(System.Double)" />*/
	niceCeiling: function (value) {
		if (value == 0) {
			return 0;
		}
		if (value < 0) {
			return -$.ig.MathUtil.prototype.niceFloor(-value);
		}
		var expv = $.ig.truncate(Math.floor(Math.log10(value)));
		var f = value / $.ig.MathUtil.prototype.expt(10, expv);
		var nf = f <= 1 ? 1 : (f <= 2 ? 2 : (f <= 5 ? 5 : 10));
		return nf * $.ig.MathUtil.prototype.expt(10, expv);
	}
	/*<EndMethod Name="System.Double Infragistics.MathUtil::NiceCeiling(System.Double)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.MathUtil::expt(System.Double, System.Int32)" />*/
	expt: function (a, n) {
		var x = 1;
		for (; n > 0; --n) {
			x *= a;
		}
		for (; n < 0; ++n) {
			x /= a;
		}
		return x;
	}
	/*<EndMethod Name="System.Double Infragistics.MathUtil::expt(System.Double, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.MathUtil::Min3(System.Double, System.Double, System.Double)" />*/
	min3: function (v1, v2, v3) {
		return Math.min(v1, Math.min(v2, v3));
	}
	/*<EndMethod Name="System.Double Infragistics.MathUtil::Min3(System.Double, System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.MathUtil::Max3(System.Double, System.Double, System.Double)" />*/
	max3: function (v1, v2, v3) {
		return Math.max(v1, Math.max(v2, v3));
	}
	/*<EndMethod Name="System.Double Infragistics.MathUtil::Max3(System.Double, System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.MathUtil::Min()" />*/
	min: function (a) {
		var min = a[0];
		for (var i = 1; i < a.length; ++i) {
			min = Math.min(min, a[i]);
		}
		return min;
	}
	/*<EndMethod Name="System.Double Infragistics.MathUtil::Min()" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.MathUtil::Max()" />*/
	max: function (a) {
		var max = a[0];
		for (var i = 1; i < a.length; ++i) {
			max = Math.max(max, a[i]);
		}
		return max;
	}
	/*<EndMethod Name="System.Double Infragistics.MathUtil::Max()" />*/
	,
	$type: new $.ig.Type('MathUtil', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.MathUtil" />*/

/*<BeginType Name="Infragistics.IPool`1" />*/

$.ig.util.defType('IPool$1', 'Object', {
	$type: new $.ig.Type('IPool$1', null)
}, true);

/*<EndType Name="Infragistics.IPool`1" />*/

/*<BeginType Name="Infragistics.IIndexedPool`1" />*/

$.ig.util.defType('IIndexedPool$1', 'Object', {
	$type: new $.ig.Type('IIndexedPool$1', null, [$.ig.IPool$1.prototype.$type.specialize(0)])
}, true);

/*<EndType Name="Infragistics.IIndexedPool`1" />*/

/*<BeginType Name="Infragistics.Pool`1" />*/

$.ig.util.defType('Pool$1', 'Object', {
	$t: null,
	init: function ($t) {
		this.$t = $t;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$t);
		}
		$.ig.Object.prototype.init.call(this);
		this.active(new $.ig.List$1(this.$t, 0));
		this.inactive(new $.ig.List$1(this.$t, 0));
	},
	_create: null,
	/*<BeginProperty Name="System.Func Infragistics.Pool`1::Create()" />*/
	create: function (value) {
		if (arguments.length === 1) {
			this._create = value;
			return value;
		} else {
			return this._create;
		}
	}
	/*<EndProperty Name="System.Func Infragistics.Pool`1::Create()" />*/
	,
	_disactivate: null,
	/*<BeginProperty Name="System.Action Infragistics.Pool`1::Disactivate()" />*/
	disactivate: function (value) {
		if (arguments.length === 1) {
			this._disactivate = value;
			return value;
		} else {
			return this._disactivate;
		}
	}
	/*<EndProperty Name="System.Action Infragistics.Pool`1::Disactivate()" />*/
	,
	_activate: null,
	/*<BeginProperty Name="System.Action Infragistics.Pool`1::Activate()" />*/
	activate: function (value) {
		if (arguments.length === 1) {
			this._activate = value;
			return value;
		} else {
			return this._activate;
		}
	}
	/*<EndProperty Name="System.Action Infragistics.Pool`1::Activate()" />*/
	,
	_destroy: null,
	/*<BeginProperty Name="System.Action Infragistics.Pool`1::Destroy()" />*/
	destroy: function (value) {
		if (arguments.length === 1) {
			this._destroy = value;
			return value;
		} else {
			return this._destroy;
		}
	}
	/*<EndProperty Name="System.Action Infragistics.Pool`1::Destroy()" />*/
	,
	/*<BeginProperty Name="Infragistics.Pool.T Infragistics.Pool`1::Item(System.Int32)" />*/
	item: function (index) {
		if (index >= this.count()) {
			this.count(index + 1);
		}
		return this.active().__inner[index];
	}
	/*<EndProperty Name="Infragistics.Pool.T Infragistics.Pool`1::Item(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Pool`1::Clear()" />*/
	clear: function () {
		this.count(0);
	}
	/*<EndMethod Name="System.Void Infragistics.Pool`1::Clear()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Pool`1::Count()" />*/
	count: function (value) {
		if (arguments.length === 1) {
			var activeCount = this.active().count();
			while (value > this.active().count() && this.inactive().count() > 0) {
				var item = this.inactive().__inner[this.inactive().count() - 1];
				this.active().add(item);
				this.inactive().removeAt(this.inactive().count() - 1);
				if (this.activate() != null) {
					this.activate()(item);
				}
			}
			while (value > this.active().count() && this.inactive().count() == 0) {
				var item1 = this.create()();
				this.active().add(item1);
				if (this.activate() != null) {
					this.activate()(item1);
				}
			}
			var inactiveCount = 2;
			while (activeCount != 0) {
				activeCount >>= 1;
				inactiveCount <<= 1;
			}
			while (value < this.active().count()) {
				var item2 = this.active().__inner[this.active().count() - 1];
				this.active().removeAt(this.active().count() - 1);
				if (this.disactivate() != null) {
					this.disactivate()(item2);
				}
				if (this.inactive().count() < inactiveCount) {
					this.inactive().add(item2);
				} else {
					if (this.destroy() != null) {
						this.destroy()(item2);
					}
				}
			}
			if (inactiveCount < this.inactive().count()) {
				for (var i = inactiveCount; i < this.inactive().count(); ++i) {
					this.destroy()(this.inactive().__inner[i]);
				}
				this.inactive().removeRange(inactiveCount, this.inactive().count() - inactiveCount);
			}
			return value;
		} else {
			return this.active().count();
		}
	}
	/*<EndProperty Name="System.Int32 Infragistics.Pool`1::Count()" />*/
	,
	_active: null,
	/*<BeginProperty Name="System.Collections.Generic.List Infragistics.Pool`1::Active()" />*/
	active: function (value) {
		if (arguments.length === 1) {
			this._active = value;
			return value;
		} else {
			return this._active;
		}
	}
	/*<EndProperty Name="System.Collections.Generic.List Infragistics.Pool`1::Active()" />*/
	,
	_inactive: null,
	/*<BeginProperty Name="System.Collections.Generic.List Infragistics.Pool`1::Inactive()" />*/
	inactive: function (value) {
		if (arguments.length === 1) {
			this._inactive = value;
			return value;
		} else {
			return this._inactive;
		}
	}
	/*<EndProperty Name="System.Collections.Generic.List Infragistics.Pool`1::Inactive()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Pool`1::DoToAll(System.Action)" />*/
	doToAll: function (action) {
		for (var i = 0; i < this.inactive().count(); i++) {
			action(this.inactive().__inner[i]);
		}
		for (var i1 = 0; i1 < this.active().count(); i1++) {
			action(this.active().__inner[i1]);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Pool`1::DoToAll(System.Action)" />*/
	,
	$type: new $.ig.Type('Pool$1', $.ig.Object.prototype.$type, [$.ig.IIndexedPool$1.prototype.$type.specialize(0)])
}, true);

/*<EndType Name="Infragistics.Pool`1" />*/

/*<BeginType Name="Infragistics.IHashPool`2" />*/

$.ig.util.defType('IHashPool$2', 'Object', {
	$type: new $.ig.Type('IHashPool$2', null, [$.ig.IPool$1.prototype.$type.specialize(1)])
}, true);

/*<EndType Name="Infragistics.IHashPool`2" />*/

/*<BeginType Name="Infragistics.HashPool`2" />*/

$.ig.util.defType('HashPool$2', 'Object', {
	$tKey: null,
	$tValue: null,
	_inactive: null,
	/*<BeginProperty Name="System.Collections.Generic.List Infragistics.HashPool`2::Inactive()" />*/
	inactive: function (value) {
		if (arguments.length === 1) {
			this._inactive = value;
			return value;
		} else {
			return this._inactive;
		}
	}
	/*<EndProperty Name="System.Collections.Generic.List Infragistics.HashPool`2::Inactive()" />*/
	,
	_active: null,
	/*<BeginProperty Name="System.Collections.Generic.Dictionary Infragistics.HashPool`2::Active()" />*/
	active: function (value) {
		if (arguments.length === 1) {
			this._active = value;
			return value;
		} else {
			return this._active;
		}
	}
	/*<EndProperty Name="System.Collections.Generic.Dictionary Infragistics.HashPool`2::Active()" />*/
	,
	init: function ($tKey, $tValue) {
		this.$tKey = $tKey;
		this.$tValue = $tValue;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$tKey, this.$tValue);
		}
		$.ig.Object.prototype.init.call(this);
		this.inactive(new $.ig.List$1(this.$tValue, 0));
		this.active(new $.ig.Dictionary$2(this.$tKey, this.$tValue, 0));
	},
	_create: null,
	/*<BeginProperty Name="System.Func Infragistics.HashPool`2::Create()" />*/
	create: function (value) {
		if (arguments.length === 1) {
			this._create = value;
			return value;
		} else {
			return this._create;
		}
	}
	/*<EndProperty Name="System.Func Infragistics.HashPool`2::Create()" />*/
	,
	_disactivate: null,
	/*<BeginProperty Name="System.Action Infragistics.HashPool`2::Disactivate()" />*/
	disactivate: function (value) {
		if (arguments.length === 1) {
			this._disactivate = value;
			return value;
		} else {
			return this._disactivate;
		}
	}
	/*<EndProperty Name="System.Action Infragistics.HashPool`2::Disactivate()" />*/
	,
	_activate: null,
	/*<BeginProperty Name="System.Action Infragistics.HashPool`2::Activate()" />*/
	activate: function (value) {
		if (arguments.length === 1) {
			this._activate = value;
			return value;
		} else {
			return this._activate;
		}
	}
	/*<EndProperty Name="System.Action Infragistics.HashPool`2::Activate()" />*/
	,
	_destroy: null,
	/*<BeginProperty Name="System.Action Infragistics.HashPool`2::Destroy()" />*/
	destroy: function (value) {
		if (arguments.length === 1) {
			this._destroy = value;
			return value;
		} else {
			return this._destroy;
		}
	}
	/*<EndProperty Name="System.Action Infragistics.HashPool`2::Destroy()" />*/
	,
	/*<BeginProperty Name="Infragistics.HashPool.TValue Infragistics.HashPool`2::Item(Infragistics.HashPool.TKey)" />*/
	item: function (key) {
		var $self = this;
		var ret;
		if (!(function () { var $ret = $self.active().tryGetValue(key, ret); ret = $ret.p1; return $ret.ret; }())) {
			if (this.inactive().count() > 0) {
				ret = this.inactive().__inner[this.inactive().count() - 1];
				this.inactive().removeAt(this.inactive().count() - 1);
			} else {
				ret = this.create()();
			}
			if (this.activate() != null) {
				this.activate()(ret);
			}
			this.active().item(key, ret);
		}
		return ret;
	}
	/*<EndProperty Name="Infragistics.HashPool.TValue Infragistics.HashPool`2::Item(Infragistics.HashPool.TKey)" />*/
	,
	/*<BeginProperty Name="System.Collections.Generic.IEnumerable Infragistics.HashPool`2::ActiveKeys()" />*/
	activeKeys: function () {
		return this.active().keys();
	}
	/*<EndProperty Name="System.Collections.Generic.IEnumerable Infragistics.HashPool`2::ActiveKeys()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.HashPool`2::IsActiveKey(Infragistics.HashPool.TKey)" />*/
	isActiveKey: function (key) {
		return this.active().containsKey(key);
	}
	/*<EndMethod Name="System.Boolean Infragistics.HashPool`2::IsActiveKey(Infragistics.HashPool.TKey)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.HashPool`2::Remove(Infragistics.HashPool.TKey)" />*/
	remove: function (key) {
		var $self = this;
		var remove;
		if ((function () { var $ret = $self.active().tryGetValue(key, remove); remove = $ret.p1; return $ret.ret; }())) {
			this.active().remove(key);
			if (this.disactivate() != null) {
				this.disactivate()(remove);
			}
			this.inactive().add(remove);
			var activeCount = this.active().count();
			var inactiveCount = 2;
			while (activeCount != 0) {
				activeCount >>= 1;
				inactiveCount <<= 1;
			}
			if (inactiveCount < this.inactive().count()) {
				for (var i = inactiveCount; i < this.inactive().count(); ++i) {
					this.destroy()(this.inactive().__inner[i]);
				}
				this.inactive().removeRange(inactiveCount, this.inactive().count() - inactiveCount);
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.HashPool`2::Remove(Infragistics.HashPool.TKey)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.HashPool`2::Clear()" />*/
	clear: function () {
		var deactivate = new $.ig.List$1(this.$tKey, 0);
		var en = this.active().keys().getEnumerator();
		while (en.moveNext()) {
			var active = en.current();
			deactivate.add(active);
		}
		var en1 = deactivate.getEnumerator();
		while (en1.moveNext()) {
			var key = en1.current();
			this.remove(key);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.HashPool`2::Clear()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.HashPool`2::ActiveCount()" />*/
	activeCount: function () {
		return this.active().count();
	}
	/*<EndProperty Name="System.Int32 Infragistics.HashPool`2::ActiveCount()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.HashPool`2::DoToAll(System.Action)" />*/
	doToAll: function (action) {
		for (var i = 0; i < this.inactive().count(); i++) {
			action(this.inactive().__inner[i]);
		}
		var en = this.active().values().getEnumerator();
		while (en.moveNext()) {
			var item = en.current();
			action(item);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.HashPool`2::DoToAll(System.Action)" />*/
	,
	$type: new $.ig.Type('HashPool$2', $.ig.Object.prototype.$type, [$.ig.IHashPool$2.prototype.$type.specialize(0, 1)])
}, true);

/*<EndType Name="Infragistics.HashPool`2" />*/

/*<BeginType Name="Infragistics.RearrangedList`1" />*/

$.ig.util.defType('RearrangedList$1', 'Object', {
	$t: null,
	__inner: null,
	__indexes: null,
	init: function ($t, inner, indexes) {
		this.$t = $t;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$t);
		}
		$.ig.Object.prototype.init.call(this);
		this.__inner = inner;
		this.__indexes = indexes;
	},
	/*<BeginMethod Name="System.Int32 Infragistics.RearrangedList`1::IndexOf(Infragistics.RearrangedList.T)" />*/
	indexOf: function (item) {
		var innerIndex = this.__inner.indexOf(item);
		if (innerIndex == -1) {
			return -1;
		}
		return this.__indexes.indexOf(innerIndex);
	}
	/*<EndMethod Name="System.Int32 Infragistics.RearrangedList`1::IndexOf(Infragistics.RearrangedList.T)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.RearrangedList`1::Insert(System.Int32, Infragistics.RearrangedList.T)" />*/
	insert: function (index, item) {
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndMethod Name="System.Void Infragistics.RearrangedList`1::Insert(System.Int32, Infragistics.RearrangedList.T)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.RearrangedList`1::RemoveAt(System.Int32)" />*/
	removeAt: function (index) {
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndMethod Name="System.Void Infragistics.RearrangedList`1::RemoveAt(System.Int32)" />*/
	,
	/*<BeginProperty Name="Infragistics.RearrangedList.T Infragistics.RearrangedList`1::Item(System.Int32)" />*/
	item: function (index, value) {
		if (arguments.length === 2) {
			throw new $.ig.NotImplementedException(0);
			return value;
		} else {
			return this.__inner.item(this.__indexes.item(index));
		}
	}
	/*<EndProperty Name="Infragistics.RearrangedList.T Infragistics.RearrangedList`1::Item(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.RearrangedList`1::Add(Infragistics.RearrangedList.T)" />*/
	add: function (item) {
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndMethod Name="System.Void Infragistics.RearrangedList`1::Add(Infragistics.RearrangedList.T)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.RearrangedList`1::Clear()" />*/
	clear: function () {
		this.__indexes.clear();
	}
	/*<EndMethod Name="System.Void Infragistics.RearrangedList`1::Clear()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.RearrangedList`1::Contains(Infragistics.RearrangedList.T)" />*/
	contains: function (item) {
		return this.__inner.contains(item);
	}
	/*<EndMethod Name="System.Boolean Infragistics.RearrangedList`1::Contains(Infragistics.RearrangedList.T)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.RearrangedList`1::CopyTo(, System.Int32)" />*/
	copyTo: function (array, arrayIndex) {
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndMethod Name="System.Void Infragistics.RearrangedList`1::CopyTo(, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.RearrangedList`1::Count()" />*/
	count: function () {
		return this.__indexes.count();
	}
	/*<EndProperty Name="System.Int32 Infragistics.RearrangedList`1::Count()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.RearrangedList`1::IsReadOnly()" />*/
	isReadOnly: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean Infragistics.RearrangedList`1::IsReadOnly()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.RearrangedList`1::Remove(Infragistics.RearrangedList.T)" />*/
	remove: function (item) {
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndMethod Name="System.Boolean Infragistics.RearrangedList`1::Remove(Infragistics.RearrangedList.T)" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerator Infragistics.RearrangedList`1::GetEnumerator()" />*/
	getEnumerator: function () {
		var d__ = new $.ig.RearrangedList___GetEnumerator__IteratorClass$1(this.$t, 0);
		d__.__4__this = this;
		return d__;
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerator Infragistics.RearrangedList`1::GetEnumerator()" />*/
	,
	/*<BeginMethod Name="System.Collections.IEnumerator Infragistics.RearrangedList`1::System.Collections.IEnumerable.GetEnumerator()" />*/
	getEnumerator: function () {
		var d__ = new $.ig.RearrangedList___GetEnumerator__IteratorClass1$1(this.$t, 0);
		d__.__4__this = this;
		return d__;
	}
	/*<EndMethod Name="System.Collections.IEnumerator Infragistics.RearrangedList`1::System.Collections.IEnumerable.GetEnumerator()" />*/
	,
	$type: new $.ig.Type('RearrangedList$1', $.ig.Object.prototype.$type, [$.ig.IList$1.prototype.$type.specialize(0)])
}, true);

/*<EndType Name="Infragistics.RearrangedList`1" />*/

/*<BeginType Name="Infragistics.RectUtil" />*/

$.ig.util.defType('RectUtil', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Windows.Point Infragistics.RectUtil::GetCenter(System.Windows.Rect)" />*/
	getCenter: function (rect) {
		if (rect.isEmpty()) {
			return { __x: NaN, __y: NaN, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName };
		}
		return { __x: 0.5 * (rect.left() + rect.right()), __y: 0.5 * (rect.bottom() + rect.top()), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName };
	}
	/*<EndMethod Name="System.Windows.Point Infragistics.RectUtil::GetCenter(System.Windows.Rect)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.RectUtil::GetArea(System.Windows.Rect)" />*/
	getArea: function (rect) {
		if (rect.isEmpty()) {
			return 0;
		}
		return rect.width() * rect.height();
	}
	/*<EndMethod Name="System.Double Infragistics.RectUtil::GetArea(System.Windows.Rect)" />*/
	,
	/*<BeginMethod Name="System.Windows.Rect Infragistics.RectUtil::Duplicate(System.Windows.Rect)" />*/
	duplicate: function (rect) {
		if (rect.isEmpty()) {
			return rect;
		}
		return new $.ig.Rect(0, rect.left(), rect.top(), rect.width(), rect.height());
	}
	/*<EndMethod Name="System.Windows.Rect Infragistics.RectUtil::Duplicate(System.Windows.Rect)" />*/
	,
	/*<BeginMethod Name="System.Windows.Point Infragistics.RectUtil::GetLeader(System.Windows.Rect, System.Windows.Point)" />*/
	getLeader: function (rect, anchor) {
		if (rect.containsPoint(anchor)) {
			return anchor;
		}
		var C = { __x: rect.left() + 0.5 * rect.width(), __y: rect.top() + 0.5 * rect.height(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName };
		var D = { __x: anchor.__x - C.__x, __y: anchor.__y - C.__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName };
		var p;
		if (D.__x != 0) {
			p = (rect.left() - C.__x) / D.__x;
			var y = C.__y + p * D.__y;
			if (y > rect.top() && y < rect.bottom()) {
				return p > 0 ? { __x: rect.left(), __y: y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName } : { __x: rect.right(), __y: C.__y - p * D.__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName };
			}
		}
		p = (rect.top() - C.__y) / D.__y;
		var x = C.__x + p * D.__x;
		return p > 0 ? { __x: x, __y: rect.top(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName } : { __x: C.__x - p * D.__x, __y: rect.bottom(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName };
	}
	/*<EndMethod Name="System.Windows.Point Infragistics.RectUtil::GetLeader(System.Windows.Rect, System.Windows.Point)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.RectUtil::GetDistanceSquared(System.Windows.Rect, System.Windows.Point)" />*/
	getDistanceSquared1: function (rect, pt) {
		if (rect.isEmpty()) {
			return NaN;
		}
		return $.ig.RectUtil.prototype.getDistanceSquared(rect, pt.__x, pt.__y);
	}
	/*<EndMethod Name="System.Double Infragistics.RectUtil::GetDistanceSquared(System.Windows.Rect, System.Windows.Point)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.RectUtil::GetDistanceSquared(System.Windows.Rect, System.Windows.Rect)" />*/
	getDistanceSquared2: function (rect, rc) {
		if (rect.isEmpty()) {
			return Number.POSITIVE_INFINITY;
		}
		var d2 = $.ig.RectUtil.prototype.getDistanceSquared(rect, rc.left(), rc.top());
		if (d2 > 0) {
			d2 = Math.min(d2, $.ig.RectUtil.prototype.getDistanceSquared(rect, rc.left(), rc.bottom()));
		}
		if (d2 > 0) {
			d2 = Math.min(d2, $.ig.RectUtil.prototype.getDistanceSquared(rect, rc.right(), rc.bottom()));
		}
		if (d2 > 0) {
			d2 = Math.min(d2, $.ig.RectUtil.prototype.getDistanceSquared(rect, rc.right(), rc.top()));
		}
		if (d2 > 0) {
			d2 = Math.min(d2, $.ig.RectUtil.prototype.getDistanceSquared(rc, rect.left(), rect.top()));
		}
		if (d2 > 0) {
			d2 = Math.min(d2, $.ig.RectUtil.prototype.getDistanceSquared(rc, rect.left(), rect.bottom()));
		}
		if (d2 > 0) {
			d2 = Math.min(d2, $.ig.RectUtil.prototype.getDistanceSquared(rc, rect.right(), rect.bottom()));
		}
		if (d2 > 0) {
			d2 = Math.min(d2, $.ig.RectUtil.prototype.getDistanceSquared(rc, rect.right(), rect.top()));
		}
		return d2;
	}
	/*<EndMethod Name="System.Double Infragistics.RectUtil::GetDistanceSquared(System.Windows.Rect, System.Windows.Rect)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.RectUtil::GetDistanceSquared(System.Windows.Rect, System.Double, System.Double)" />*/
	getDistanceSquared: function (rc, X, Y) {
		var vs = X - rc.left();
		var vt = Y - rc.top();
		var s = rc.width() * vs;
		var t = rc.height() * vt;
		if (s > 0) {
			var s0 = rc.width() * rc.width();
			if (s < s0) {
				vs -= (s / s0) * rc.width();
			} else {
				vs -= rc.width();
			}
		}
		if (t > 0) {
			var t0 = rc.height() * rc.height();
			if (t < t0) {
				vt -= (t / t0) * rc.height();
			} else {
				vt -= rc.height();
			}
		}
		return vs * vs + vt * vt;
	}
	/*<EndMethod Name="System.Double Infragistics.RectUtil::GetDistanceSquared(System.Windows.Rect, System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.RectUtil::Contains(System.Windows.Rect, System.Windows.Rect)" />*/
	contains: function (rect, rc) {
		if (rect.isEmpty() || rc.isEmpty()) {
			return false;
		}
		if (rect.left() > rc.left()) {
			return false;
		}
		if (rect.right() < rc.right()) {
			return false;
		}
		if (rect.top() > rc.top()) {
			return false;
		}
		if (rect.bottom() < rc.bottom()) {
			return false;
		}
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.RectUtil::Contains(System.Windows.Rect, System.Windows.Rect)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.RectUtil::IntersectsWith(System.Windows.Rect, System.Windows.Rect)" />*/
	intersectsWith: function (rect, rc) {
		if (rect.isEmpty() || rc.isEmpty()) {
			return false;
		}
		if (rect.right() < rc.left()) {
			return false;
		}
		if (rect.left() > rc.right()) {
			return false;
		}
		if (rect.top() > rc.bottom()) {
			return false;
		}
		if (rect.bottom() < rc.top()) {
			return false;
		}
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.RectUtil::IntersectsWith(System.Windows.Rect, System.Windows.Rect)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.RectUtil::IntersectionArea(System.Windows.Rect, System.Windows.Rect)" />*/
	intersectionArea: function (rect, rc) {
		if (rect.isEmpty() || rc.isEmpty()) {
			return 0;
		}
		var width = Math.min(rect.right(), rc.right()) - Math.max(rect.left(), rc.left());
		if (width <= 0) {
			return 0;
		}
		var height = Math.min(rect.bottom(), rc.bottom()) - Math.max(rect.top(), rc.top());
		if (height <= 0) {
			return 0;
		}
		return width * height;
	}
	/*<EndMethod Name="System.Double Infragistics.RectUtil::IntersectionArea(System.Windows.Rect, System.Windows.Rect)" />*/
	,
	/*<BeginMethod Name="System.Windows.Rect Infragistics.RectUtil::GetInflated(System.Windows.Rect, System.Double, System.Double)" />*/
	getInflated: function (rect, width, height) {
		if (rect.isEmpty()) {
			return rect;
		}
		return new $.ig.Rect(0, rect.x() - width, rect.y() - height, Math.max(0, rect.width() + 2 * width), Math.max(0, rect.height() + 2 * height));
	}
	/*<EndMethod Name="System.Windows.Rect Infragistics.RectUtil::GetInflated(System.Windows.Rect, System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Windows.Rect Infragistics.RectUtil::InflateBy(System.Windows.Rect, System.Double, System.Double)" />*/
	inflateBy: function (rect, dx, dy) {
		rect.x(rect.x() - dx);
		rect.y(rect.y() - dy);
		var width = rect.width() + 2 * dx;
		var height = rect.height() + 2 * dy;
		rect.width(width > 1 ? width : 1);
		rect.height(height > 1 ? height : 1);
		return rect;
	}
	/*<EndMethod Name="System.Windows.Rect Infragistics.RectUtil::InflateBy(System.Windows.Rect, System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Windows.Rect Infragistics.RectUtil::Inflate(System.Windows.Rect, System.Double, System.Double)" />*/
	inflate1: function (rect, dx, dy) {
		rect.x(rect.x() - dx);
		rect.y(rect.y() - dy);
		var width = rect.width() + 2 * dx;
		var height = rect.height() + 2 * dy;
		rect.width(width > 1 ? width : 1);
		rect.height(height > 1 ? height : 1);
		return rect;
	}
	/*<EndMethod Name="System.Windows.Rect Infragistics.RectUtil::Inflate(System.Windows.Rect, System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Windows.Rect Infragistics.RectUtil::Inflate(System.Windows.Rect, System.Double)" />*/
	inflate: function (rect, thickness) {
		var newX = rect.x() - thickness;
		var newY = rect.y() - thickness;
		var width = rect.width() + thickness + thickness;
		var height = rect.height() + thickness + thickness;
		var newWidth = width > 0 ? width : 0;
		var newHeight = height > 0 ? height : 0;
		return new $.ig.Rect(0, newX, newY, newWidth, newHeight);
	}
	/*<EndMethod Name="System.Windows.Rect Infragistics.RectUtil::Inflate(System.Windows.Rect, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Windows.Rect Infragistics.RectUtil::Round(System.Windows.Rect)" />*/
	round: function (rect) {
		rect.x(Math.round(rect.x()));
		rect.y(Math.round(rect.y()));
		rect.width(Math.round(rect.width()));
		rect.height(Math.round(rect.height()));
		return rect;
	}
	/*<EndMethod Name="System.Windows.Rect Infragistics.RectUtil::Round(System.Windows.Rect)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.RectUtil::IsNull(System.Windows.Rect)" />*/
	isNull: function (rect) {
		return rect.x() == 0 && rect.y() == 0 && rect.width() == 0 && rect.height() == 0;
	}
	/*<EndMethod Name="System.Boolean Infragistics.RectUtil::IsNull(System.Windows.Rect)" />*/
	,
	/*<BeginMethod Name="System.Windows.Size Infragistics.RectUtil::Size(System.Windows.Rect)" />*/
	size: function (rect) {
		var value = new $.ig.Size(1, rect.width(), rect.height());
		return value;
	}
	/*<EndMethod Name="System.Windows.Size Infragistics.RectUtil::Size(System.Windows.Rect)" />*/
	,
	/*<BeginMethod Name="System.Windows.Rect Infragistics.RectUtil::Normalize(System.Windows.Rect, System.Windows.Rect)" />*/
	normalize: function (current, rect) {
		var normalizeRect = $.ig.RectUtil.prototype.normalize1(current, $.ig.RectUtil.prototype.size(rect));
		return normalizeRect;
	}
	/*<EndMethod Name="System.Windows.Rect Infragistics.RectUtil::Normalize(System.Windows.Rect, System.Windows.Rect)" />*/
	,
	/*<BeginMethod Name="System.Windows.Rect Infragistics.RectUtil::Normalize(System.Windows.Rect, System.Windows.Size)" />*/
	normalize1: function (current, size) {
		var normalizeRect = current;
		normalizeRect.x(current.x() / size.width());
		normalizeRect.y(current.y() / size.height());
		normalizeRect.width(current.width() / size.width());
		normalizeRect.height(current.height() / size.height());
		return normalizeRect;
	}
	/*<EndMethod Name="System.Windows.Rect Infragistics.RectUtil::Normalize(System.Windows.Rect, System.Windows.Size)" />*/
	,
	/*<BeginMethod Name="System.Windows.Point Infragistics.RectUtil::GetTopLeft(System.Windows.Rect)" />*/
	getTopLeft: function (rect) {
		var value = { __x: rect.x(), __y: rect.y(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName };
		return value;
	}
	/*<EndMethod Name="System.Windows.Point Infragistics.RectUtil::GetTopLeft(System.Windows.Rect)" />*/
	,
	/*<BeginMethod Name="System.Windows.Point Infragistics.RectUtil::GetTopRight(System.Windows.Rect)" />*/
	getTopRight: function (rect) {
		var value = { __x: rect.x() + rect.width(), __y: rect.y(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName };
		return value;
	}
	/*<EndMethod Name="System.Windows.Point Infragistics.RectUtil::GetTopRight(System.Windows.Rect)" />*/
	,
	/*<BeginMethod Name="System.Windows.Point Infragistics.RectUtil::GetBottomLeft(System.Windows.Rect)" />*/
	getBottomLeft: function (rect) {
		var value = { __x: rect.x(), __y: rect.y() + rect.height(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName };
		return value;
	}
	/*<EndMethod Name="System.Windows.Point Infragistics.RectUtil::GetBottomLeft(System.Windows.Rect)" />*/
	,
	/*<BeginMethod Name="System.Windows.Point Infragistics.RectUtil::GetBottomRight(System.Windows.Rect)" />*/
	getBottomRight: function (rect) {
		var value = { __x: rect.x() + rect.width(), __y: rect.y() + rect.height(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName };
		return value;
	}
	/*<EndMethod Name="System.Windows.Point Infragistics.RectUtil::GetBottomRight(System.Windows.Rect)" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.List Infragistics.RectUtil::GetCorners(System.Windows.Rect)" />*/
	getCorners: function (rect) {
		var points = (function () {
			var $ret = new $.ig.List$1($.ig.Point.prototype.$type, 0);
			$ret.add($.ig.RectUtil.prototype.getTopLeft(rect));
			$ret.add($.ig.RectUtil.prototype.getTopRight(rect));
			$ret.add($.ig.RectUtil.prototype.getBottomRight(rect));
			$ret.add($.ig.RectUtil.prototype.getBottomLeft(rect));
			return $ret;
		}());
		return points;
	}
	/*<EndMethod Name="System.Collections.Generic.List Infragistics.RectUtil::GetCorners(System.Windows.Rect)" />*/
	,
	/*<BeginMethod Name="System.Windows.Rect Infragistics.RectUtil::RotateAboutCenter(System.Windows.Rect, System.Double)" />*/
	rotateAboutCenter: function (rect, angle) {
		angle = $.ig.CoreGeometryUtil.prototype.simplifyAngle(angle);
		if (angle == 0 || angle == 180) {
			return new $.ig.Rect(0, rect.left(), rect.top(), rect.width(), rect.height());
		}
		var center = $.ig.RectUtil.prototype.getCenter(rect);
		if (angle == 90 || angle == 270) {
			var halfHeight = rect.height() / 2;
			var halfWidth = rect.width() / 2;
			return new $.ig.Rect(0, center.__x - halfHeight, center.__y - halfWidth, rect.height(), rect.width());
		}
		return $.ig.RectUtil.prototype.rotateAboutPoint(rect, center.__x, center.__y, angle);
	}
	/*<EndMethod Name="System.Windows.Rect Infragistics.RectUtil::RotateAboutCenter(System.Windows.Rect, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Windows.Rect Infragistics.RectUtil::RotateAboutPoint(System.Windows.Rect, System.Double, System.Double, System.Double)" />*/
	rotateAboutPoint: function (rect, x, y, angle) {
		var points = $.ig.RectUtil.prototype.getCorners(rect);
		var angleRadians = $.ig.MathUtil.prototype.radians(angle);
		var cos = Math.cos(angleRadians);
		var sin = Math.sin(angleRadians);
		var top = 1.7976931348623157E+308;
		var left = 1.7976931348623157E+308;
		var right = -1.7976931348623157E+308;
		var bottom = -1.7976931348623157E+308;
		var p;
		for (var i = 0; i < points.count(); i++) {
			p = points.__inner[i];
			var rotatedX = (cos * (p.__x - x) - sin * (p.__y - y) + x);
			var rotatedY = (sin * (p.__x - x) + cos * (p.__y - y) + y);
			top = Math.min(top, rotatedY);
			left = Math.min(left, rotatedX);
			right = Math.max(right, rotatedX);
			bottom = Math.max(bottom, rotatedY);
		}
		var ret = new $.ig.Rect(0, left, top, right - left, bottom - top);
		return ret;
	}
	/*<EndMethod Name="System.Windows.Rect Infragistics.RectUtil::RotateAboutPoint(System.Windows.Rect, System.Double, System.Double, System.Double)" />*/
	,
	$type: new $.ig.Type('RectUtil', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.RectUtil" />*/

/*<BeginType Name="Infragistics.StackPool`1" />*/

$.ig.util.defType('StackPool$1', 'Object', {
	$t: null,
	init: function ($t) {
		this.$t = $t;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$t);
		}
		this._deferDisactivate = false;
		this._active = new $.ig.Dictionary$2(this.$t, $.ig.Object.prototype.$type, 0);
		this._limbo = new $.ig.Stack$1(this.$t);
		this._inactive = new $.ig.Stack$1(this.$t);
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.StackPool.T Infragistics.StackPool`1::Pop()" />*/
	pop: function () {
		var t;
		if (this._limbo.count() != 0) {
			t = this._limbo.pop();
		} else {
			t = this._inactive.count() != 0 ? this._inactive.pop() : this.create()();
			this.activate()(t);
		}
		this._active.add(t, null);
		return t;
	}
	/*<EndMethod Name="Infragistics.StackPool.T Infragistics.StackPool`1::Pop()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.StackPool`1::Push(Infragistics.StackPool.T)" />*/
	push: function (t) {
		this._active.remove(t);
		if (this.deferDisactivate()) {
			this._limbo.push(t);
		} else {
			this.deactivate()(t);
			var inactiveCount = $.ig.StackPool$1.prototype.roundUp(this.$t, this._active.count());
			if (this._inactive.count() < inactiveCount) {
				this.destroy()(t);
			} else {
				this._inactive.push(t);
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.StackPool`1::Push(Infragistics.StackPool.T)" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.StackPool`1::DeferDisactivate()" />*/
	deferDisactivate: function (value) {
		if (arguments.length === 1) {
			if (this._deferDisactivate != value) {
				this._deferDisactivate = value;
				if (!this._deferDisactivate) {
					var inactiveCount = $.ig.StackPool$1.prototype.roundUp(this.$t, this._active.count());
					while (this._limbo.count() > 0 && this._inactive.count() <= inactiveCount) {
						var t = this._limbo.pop();
						this.deactivate()(t);
						this._inactive.push(t);
					}
					while (this._limbo.count() > 0) {
						var t1 = this._limbo.pop();
						this.deactivate()(t1);
						this.destroy()(t1);
					}
					while (this._inactive.count() > inactiveCount) {
						this.destroy()(this._inactive.pop());
					}
				}
			}
			return value;
		} else {
			return this._deferDisactivate;
		}
	}
	/*<EndProperty Name="System.Boolean Infragistics.StackPool`1::DeferDisactivate()" />*/
	,
	_deferDisactivate: false,
	/*<BeginProperty Name="System.Int32 Infragistics.StackPool`1::ActiveCount()" />*/
	activeCount: function () {
		return this._active.count();
	}
	/*<EndProperty Name="System.Int32 Infragistics.StackPool`1::ActiveCount()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.StackPool`1::InactiveCount()" />*/
	inactiveCount: function () {
		return this._inactive.count();
	}
	/*<EndProperty Name="System.Int32 Infragistics.StackPool`1::InactiveCount()" />*/
	,
	_create: null,
	/*<BeginProperty Name="System.Func Infragistics.StackPool`1::Create()" />*/
	create: function (value) {
		if (arguments.length === 1) {
			this._create = value;
			return value;
		} else {
			return this._create;
		}
	}
	/*<EndProperty Name="System.Func Infragistics.StackPool`1::Create()" />*/
	,
	_deactivate: null,
	/*<BeginProperty Name="System.Action Infragistics.StackPool`1::Deactivate()" />*/
	deactivate: function (value) {
		if (arguments.length === 1) {
			this._deactivate = value;
			return value;
		} else {
			return this._deactivate;
		}
	}
	/*<EndProperty Name="System.Action Infragistics.StackPool`1::Deactivate()" />*/
	,
	_activate: null,
	/*<BeginProperty Name="System.Action Infragistics.StackPool`1::Activate()" />*/
	activate: function (value) {
		if (arguments.length === 1) {
			this._activate = value;
			return value;
		} else {
			return this._activate;
		}
	}
	/*<EndProperty Name="System.Action Infragistics.StackPool`1::Activate()" />*/
	,
	_destroy: null,
	/*<BeginProperty Name="System.Action Infragistics.StackPool`1::Destroy()" />*/
	destroy: function (value) {
		if (arguments.length === 1) {
			this._destroy = value;
			return value;
		} else {
			return this._destroy;
		}
	}
	/*<EndProperty Name="System.Action Infragistics.StackPool`1::Destroy()" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.StackPool`1::RoundUp(System.Int32)" />*/
	roundUp: function ($t, a) {
		var p = 2;
		while (a > p) {
			p = p << 1;
		}
		return p;
	}
	/*<EndMethod Name="System.Int32 Infragistics.StackPool`1::RoundUp(System.Int32)" />*/
	,
	_active: null,
	_limbo: null,
	_inactive: null,
	$type: new $.ig.Type('StackPool$1', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.StackPool`1" />*/

/*<BeginType Name="Infragistics.IVisualData" />*/

$.ig.util.defType('IVisualData', 'Object', {
	$type: new $.ig.Type('IVisualData', null)
}, true);

/*<EndType Name="Infragistics.IVisualData" />*/

/*<BeginType Name="Infragistics.PrimitiveVisualData" />*/

$.ig.util.defType('PrimitiveVisualData', 'Object', {
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
	init1: function (initNumber, name) {
		$.ig.Object.prototype.init.call(this);
		this.name(name);
		this.tags(new $.ig.ShapeTags());
		this.appearance(new $.ig.PrimitiveAppearanceData());
	},
	_appearance: null,
	/*<BeginProperty Name="Infragistics.PrimitiveAppearanceData Infragistics.PrimitiveVisualData::Appearance()" />*/
	appearance: function (value) {
		if (arguments.length === 1) {
			this._appearance = value;
			return value;
		} else {
			return this._appearance;
		}
	}
	/*<EndProperty Name="Infragistics.PrimitiveAppearanceData Infragistics.PrimitiveVisualData::Appearance()" />*/
	,
	_tags: null,
	/*<BeginProperty Name="Infragistics.ShapeTags Infragistics.PrimitiveVisualData::Tags()" />*/
	tags: function (value) {
		if (arguments.length === 1) {
			this._tags = value;
			return value;
		} else {
			return this._tags;
		}
	}
	/*<EndProperty Name="Infragistics.ShapeTags Infragistics.PrimitiveVisualData::Tags()" />*/
	,
	/*<BeginProperty Name="System.String Infragistics.PrimitiveVisualData::Type()" />*/
	type: function () {
	}
	/*<EndProperty Name="System.String Infragistics.PrimitiveVisualData::Type()" />*/
	,
	_name: null,
	/*<BeginProperty Name="System.String Infragistics.PrimitiveVisualData::Name()" />*/
	name: function (value) {
		if (arguments.length === 1) {
			this._name = value;
			return value;
		} else {
			return this._name;
		}
	}
	/*<EndProperty Name="System.String Infragistics.PrimitiveVisualData::Name()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.PrimitiveVisualData::ScaleByViewport(Infragistics.RectData)" />*/
	scaleByViewport: function (viewport) {
		this.appearance().scaleByViewport(viewport);
	}
	/*<EndMethod Name="System.Void Infragistics.PrimitiveVisualData::ScaleByViewport(Infragistics.RectData)" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.List Infragistics.PrimitiveVisualData::GetPoints(Infragistics.GetPointsSettings)" />*/
	getPoints: function (settings) {
		var points = new $.ig.List$1($.ig.List$1.prototype.$type.specialize($.ig.PointData.prototype.$type), 0);
		this.getPointsOverride(points, settings);
		return points;
	}
	/*<EndMethod Name="System.Collections.Generic.List Infragistics.PrimitiveVisualData::GetPoints(Infragistics.GetPointsSettings)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.PrimitiveVisualData::GetPointsOverride(System.Collections.Generic.List, Infragistics.GetPointsSettings)" />*/
	getPointsOverride: function (points, settings) {
	}
	/*<EndMethod Name="System.Void Infragistics.PrimitiveVisualData::GetPointsOverride(System.Collections.Generic.List, Infragistics.GetPointsSettings)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.PrimitiveVisualData::Serialize()" />*/
	serialize: function () {
		var sb = new $.ig.StringBuilder(0);
		sb.appendLine1("{");
		sb.appendLine1("appearance: " + (this.appearance() != null ? this.appearance().serialize() : "null") + ", ");
		sb.appendLine1("tags: [");
		for (var i = 0; i < this.tags().count(); i++) {
			if (i != 0) {
				sb.append5(", ");
			}
			sb.append5("\"" + this.tags().__inner[i] + "\"");
		}
		sb.appendLine1("],");
		sb.appendLine1("type: \"" + this.type() + "\", ");
		sb.appendLine1("name: \"" + this.name() + "\", ");
		sb.appendLine1(this.serializeOverride());
		sb.appendLine1("}");
		return sb.toString();
	}
	/*<EndMethod Name="System.String Infragistics.PrimitiveVisualData::Serialize()" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.PrimitiveVisualData::SerializeOverride()" />*/
	serializeOverride: function () {
		return "";
	}
	/*<EndMethod Name="System.String Infragistics.PrimitiveVisualData::SerializeOverride()" />*/
	,
	$type: new $.ig.Type('PrimitiveVisualData', $.ig.Object.prototype.$type, [$.ig.IVisualData.prototype.$type])
}, true);

/*<EndType Name="Infragistics.PrimitiveVisualData" />*/

/*<BeginType Name="Infragistics.PrimitiveVisualDataList" />*/

$.ig.util.defType('PrimitiveVisualDataList', 'List$1', {
	init: function () {
		$.ig.List$1.prototype.init.call(this, $.ig.PrimitiveVisualData.prototype.$type, 0);
	},
	/*<BeginMethod Name="Infragistics.PrimitiveVisualDataList Infragistics.PrimitiveVisualDataList::ContainingTag(System.String)" />*/
	containingTag: function (tag) {
		var ret = new $.ig.PrimitiveVisualDataList();
		for (var i = 0; i < this.count(); i++) {
			var curr = this.__inner[i];
			for (var j = 0; j < curr.tags().count(); j++) {
				if (curr.tags().__inner[j] == tag) {
					ret.add(curr);
					break;
				}
			}
		}
		return ret;
	}
	/*<EndMethod Name="Infragistics.PrimitiveVisualDataList Infragistics.PrimitiveVisualDataList::ContainingTag(System.String)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.PrimitiveVisualDataList::Serialize()" />*/
	serialize: function () {
		var sb = new $.ig.StringBuilder(0);
		sb.append5("{ items: [");
		for (var i = 0; i < this.count(); i++) {
			if (i != 0) {
				sb.append5(", ");
			}
			sb.append5(this.__inner[i].serialize());
		}
		return sb.toString();
	}
	/*<EndMethod Name="System.String Infragistics.PrimitiveVisualDataList::Serialize()" />*/
	,
	$type: new $.ig.Type('PrimitiveVisualDataList', $.ig.List$1.prototype.$type.specialize($.ig.PrimitiveVisualData.prototype.$type), [$.ig.IVisualData.prototype.$type])
}, true);

/*<EndType Name="Infragistics.PrimitiveVisualDataList" />*/

/*<BeginType Name="Infragistics.LabelAppearanceData" />*/

$.ig.util.defType('LabelAppearanceData', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	_text: null,
	/*<BeginProperty Name="System.String Infragistics.LabelAppearanceData::Text()" />*/
	text: function (value) {
		if (arguments.length === 1) {
			this._text = value;
			return value;
		} else {
			return this._text;
		}
	}
	/*<EndProperty Name="System.String Infragistics.LabelAppearanceData::Text()" />*/
	,
	_horizontalAlignment: null,
	/*<BeginProperty Name="System.String Infragistics.LabelAppearanceData::HorizontalAlignment()" />*/
	horizontalAlignment: function (value) {
		if (arguments.length === 1) {
			this._horizontalAlignment = value;
			return value;
		} else {
			return this._horizontalAlignment;
		}
	}
	/*<EndProperty Name="System.String Infragistics.LabelAppearanceData::HorizontalAlignment()" />*/
	,
	_verticalAlignment: null,
	/*<BeginProperty Name="System.String Infragistics.LabelAppearanceData::VerticalAlignment()" />*/
	verticalAlignment: function (value) {
		if (arguments.length === 1) {
			this._verticalAlignment = value;
			return value;
		} else {
			return this._verticalAlignment;
		}
	}
	/*<EndProperty Name="System.String Infragistics.LabelAppearanceData::VerticalAlignment()" />*/
	,
	_textAlignment: null,
	/*<BeginProperty Name="System.String Infragistics.LabelAppearanceData::TextAlignment()" />*/
	textAlignment: function (value) {
		if (arguments.length === 1) {
			this._textAlignment = value;
			return value;
		} else {
			return this._textAlignment;
		}
	}
	/*<EndProperty Name="System.String Infragistics.LabelAppearanceData::TextAlignment()" />*/
	,
	_textWrapping: null,
	/*<BeginProperty Name="System.String Infragistics.LabelAppearanceData::TextWrapping()" />*/
	textWrapping: function (value) {
		if (arguments.length === 1) {
			this._textWrapping = value;
			return value;
		} else {
			return this._textWrapping;
		}
	}
	/*<EndProperty Name="System.String Infragistics.LabelAppearanceData::TextWrapping()" />*/
	,
	_textPosition: null,
	/*<BeginProperty Name="System.String Infragistics.LabelAppearanceData::TextPosition()" />*/
	textPosition: function (value) {
		if (arguments.length === 1) {
			this._textPosition = value;
			return value;
		} else {
			return this._textPosition;
		}
	}
	/*<EndProperty Name="System.String Infragistics.LabelAppearanceData::TextPosition()" />*/
	,
	_labelBrush: null,
	/*<BeginProperty Name="Infragistics.ColorData Infragistics.LabelAppearanceData::LabelBrush()" />*/
	labelBrush: function (value) {
		if (arguments.length === 1) {
			this._labelBrush = value;
			return value;
		} else {
			return this._labelBrush;
		}
	}
	/*<EndProperty Name="Infragistics.ColorData Infragistics.LabelAppearanceData::LabelBrush()" />*/
	,
	_labelBrushExtended: null,
	/*<BeginProperty Name="Infragistics.BrushAppearanceData Infragistics.LabelAppearanceData::LabelBrushExtended()" />*/
	labelBrushExtended: function (value) {
		if (arguments.length === 1) {
			this._labelBrushExtended = value;
			return value;
		} else {
			return this._labelBrushExtended;
		}
	}
	/*<EndProperty Name="Infragistics.BrushAppearanceData Infragistics.LabelAppearanceData::LabelBrushExtended()" />*/
	,
	_angle: 0,
	/*<BeginProperty Name="System.Double Infragistics.LabelAppearanceData::Angle()" />*/
	angle: function (value) {
		if (arguments.length === 1) {
			this._angle = value;
			return value;
		} else {
			return this._angle;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.LabelAppearanceData::Angle()" />*/
	,
	_opacity: 0,
	/*<BeginProperty Name="System.Double Infragistics.LabelAppearanceData::Opacity()" />*/
	opacity: function (value) {
		if (arguments.length === 1) {
			this._opacity = value;
			return value;
		} else {
			return this._opacity;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.LabelAppearanceData::Opacity()" />*/
	,
	_visibility: false,
	/*<BeginProperty Name="System.Boolean Infragistics.LabelAppearanceData::Visibility()" />*/
	visibility: function (value) {
		if (arguments.length === 1) {
			this._visibility = value;
			return value;
		} else {
			return this._visibility;
		}
	}
	/*<EndProperty Name="System.Boolean Infragistics.LabelAppearanceData::Visibility()" />*/
	,
	_font: null,
	/*<BeginProperty Name="System.String Infragistics.LabelAppearanceData::Font()" />*/
	font: function (value) {
		if (arguments.length === 1) {
			this._font = value;
			return value;
		} else {
			return this._font;
		}
	}
	/*<EndProperty Name="System.String Infragistics.LabelAppearanceData::Font()" />*/
	,
	_fontFamily: null,
	/*<BeginProperty Name="System.String Infragistics.LabelAppearanceData::FontFamily()" />*/
	fontFamily: function (value) {
		if (arguments.length === 1) {
			this._fontFamily = value;
			return value;
		} else {
			return this._fontFamily;
		}
	}
	/*<EndProperty Name="System.String Infragistics.LabelAppearanceData::FontFamily()" />*/
	,
	_fontSize: 0,
	/*<BeginProperty Name="System.Double Infragistics.LabelAppearanceData::FontSize()" />*/
	fontSize: function (value) {
		if (arguments.length === 1) {
			this._fontSize = value;
			return value;
		} else {
			return this._fontSize;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.LabelAppearanceData::FontSize()" />*/
	,
	_fontWeight: null,
	/*<BeginProperty Name="System.String Infragistics.LabelAppearanceData::FontWeight()" />*/
	fontWeight: function (value) {
		if (arguments.length === 1) {
			this._fontWeight = value;
			return value;
		} else {
			return this._fontWeight;
		}
	}
	/*<EndProperty Name="System.String Infragistics.LabelAppearanceData::FontWeight()" />*/
	,
	_fontStyle: null,
	/*<BeginProperty Name="System.String Infragistics.LabelAppearanceData::FontStyle()" />*/
	fontStyle: function (value) {
		if (arguments.length === 1) {
			this._fontStyle = value;
			return value;
		} else {
			return this._fontStyle;
		}
	}
	/*<EndProperty Name="System.String Infragistics.LabelAppearanceData::FontStyle()" />*/
	,
	_fontStretch: null,
	/*<BeginProperty Name="System.String Infragistics.LabelAppearanceData::FontStretch()" />*/
	fontStretch: function (value) {
		if (arguments.length === 1) {
			this._fontStretch = value;
			return value;
		} else {
			return this._fontStretch;
		}
	}
	/*<EndProperty Name="System.String Infragistics.LabelAppearanceData::FontStretch()" />*/
	,
	_marginLeft: 0,
	/*<BeginProperty Name="System.Double Infragistics.LabelAppearanceData::MarginLeft()" />*/
	marginLeft: function (value) {
		if (arguments.length === 1) {
			this._marginLeft = value;
			return value;
		} else {
			return this._marginLeft;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.LabelAppearanceData::MarginLeft()" />*/
	,
	_marginRight: 0,
	/*<BeginProperty Name="System.Double Infragistics.LabelAppearanceData::MarginRight()" />*/
	marginRight: function (value) {
		if (arguments.length === 1) {
			this._marginRight = value;
			return value;
		} else {
			return this._marginRight;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.LabelAppearanceData::MarginRight()" />*/
	,
	_marginTop: 0,
	/*<BeginProperty Name="System.Double Infragistics.LabelAppearanceData::MarginTop()" />*/
	marginTop: function (value) {
		if (arguments.length === 1) {
			this._marginTop = value;
			return value;
		} else {
			return this._marginTop;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.LabelAppearanceData::MarginTop()" />*/
	,
	_marginBottom: 0,
	/*<BeginProperty Name="System.Double Infragistics.LabelAppearanceData::MarginBottom()" />*/
	marginBottom: function (value) {
		if (arguments.length === 1) {
			this._marginBottom = value;
			return value;
		} else {
			return this._marginBottom;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.LabelAppearanceData::MarginBottom()" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.LabelAppearanceData::Serialize()" />*/
	serialize: function () {
		var sb = new $.ig.StringBuilder(0);
		sb.appendLine1("{");
		sb.appendLine1("text: \"" + (this.text() != null ? this.text() : "") + "\", ");
		if (this.textAlignment() != null) {
			sb.appendLine1("textAlignment: \"" + this.textAlignment() + "\", ");
		}
		if (this.textWrapping() != null) {
			sb.appendLine1("textWrapping: \"" + this.textWrapping() + "\", ");
		}
		sb.appendLine1("labelBrush: " + (this.labelBrush() != null ? this.labelBrush().serialize() : "null") + ", ");
		sb.appendLine1("labelBrushExtended: " + (this.labelBrushExtended() != null ? this.labelBrushExtended().serialize() : "null") + ", ");
		sb.appendLine1("angle: " + this.angle() + ", ");
		sb.appendLine1("marginLeft: " + this.marginLeft() + ", ");
		sb.appendLine1("marginRight: " + this.marginRight() + ", ");
		sb.appendLine1("marginTop: " + this.marginTop() + ", ");
		sb.appendLine1("marginBottom: " + this.marginBottom() + ", ");
		sb.appendLine1("opacity: " + this.opacity() + ", ");
		sb.appendLine1("visibility: " + (this.visibility() ? "true" : "false") + ", ");
		if (this.horizontalAlignment() != null) {
			sb.appendLine1("horizontalAlignment: \"" + this.horizontalAlignment() + "\", ");
		}
		if (this.verticalAlignment() != null) {
			sb.appendLine1("verticalAlignment: \"" + this.verticalAlignment() + "\", ");
		}
		if (this.font() != null) {
			sb.appendLine1("font: \"" + this.font() + "\",");
		}
		if (this.fontFamily() != null) {
			sb.appendLine1("fontFamily: \"" + $.ig.util.replace(this.fontFamily(), "\"", "'") + "\",");
		}
		if (this.fontWeight() != null) {
			sb.appendLine1("fontWeight: \"" + this.fontWeight() + "\",");
		}
		if (this.fontStyle() != null) {
			sb.appendLine1("fontStyle: \"" + this.fontStyle() + "\",");
		}
		if (this.fontStretch() != null) {
			sb.appendLine1("fontStretch: \"" + this.fontStretch() + "\",");
		}
		sb.appendLine1("fontSize: " + this.fontSize());
		sb.appendLine1("}");
		return sb.toString();
	}
	/*<EndMethod Name="System.String Infragistics.LabelAppearanceData::Serialize()" />*/
	,
	$type: new $.ig.Type('LabelAppearanceData', $.ig.Object.prototype.$type, [$.ig.IVisualData.prototype.$type])
}, true);

/*<EndType Name="Infragistics.LabelAppearanceData" />*/

/*<BeginType Name="Infragistics.VisualDataPixelScalingOptions" />*/

$.ig.util.defType('VisualDataPixelScalingOptions', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	$type: new $.ig.Type('VisualDataPixelScalingOptions', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.VisualDataPixelScalingOptions" />*/

/*<BeginType Name="Infragistics.LabelAppearanceDataList" />*/

$.ig.util.defType('LabelAppearanceDataList', 'List$1', {
	init: function () {
		$.ig.List$1.prototype.init.call(this, $.ig.LabelAppearanceData.prototype.$type, 0);
	},
	/*<BeginMethod Name="System.String Infragistics.LabelAppearanceDataList::Serialize()" />*/
	serialize: function () {
		var sb = new $.ig.StringBuilder(0);
		sb.append5("{ items: [");
		for (var i = 0; i < this.count(); i++) {
			if (i != 0) {
				sb.append5(", ");
			}
			sb.append5(this.__inner[i].serialize());
		}
		return sb.toString();
	}
	/*<EndMethod Name="System.String Infragistics.LabelAppearanceDataList::Serialize()" />*/
	,
	$type: new $.ig.Type('LabelAppearanceDataList', $.ig.List$1.prototype.$type.specialize($.ig.LabelAppearanceData.prototype.$type), [$.ig.IVisualData.prototype.$type])
}, true);

/*<EndType Name="Infragistics.LabelAppearanceDataList" />*/

/*<BeginType Name="Infragistics.BrushAppearanceData" />*/

$.ig.util.defType('BrushAppearanceData', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginProperty Name="System.String Infragistics.BrushAppearanceData::Type()" />*/
	type: function () {
	}
	/*<EndProperty Name="System.String Infragistics.BrushAppearanceData::Type()" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.BrushAppearanceData::Serialize()" />*/
	serialize: function () {
		return "{ type: \"" + this.type() + "\", " + this.serializeOverride() + " }";
	}
	/*<EndMethod Name="System.String Infragistics.BrushAppearanceData::Serialize()" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.BrushAppearanceData::SerializeOverride()" />*/
	serializeOverride: function () {
		return "";
	}
	/*<EndMethod Name="System.String Infragistics.BrushAppearanceData::SerializeOverride()" />*/
	,
	$type: new $.ig.Type('BrushAppearanceData', $.ig.Object.prototype.$type, [$.ig.IVisualData.prototype.$type])
}, true);

/*<EndType Name="Infragistics.BrushAppearanceData" />*/

/*<BeginType Name="Infragistics.ColorData" />*/

$.ig.util.defType('ColorData', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	_a: 0,
	/*<BeginProperty Name="System.Int32 Infragistics.ColorData::A()" />*/
	a: function (value) {
		if (arguments.length === 1) {
			this._a = value;
			return value;
		} else {
			return this._a;
		}
	}
	/*<EndProperty Name="System.Int32 Infragistics.ColorData::A()" />*/
	,
	_r: 0,
	/*<BeginProperty Name="System.Int32 Infragistics.ColorData::R()" />*/
	r: function (value) {
		if (arguments.length === 1) {
			this._r = value;
			return value;
		} else {
			return this._r;
		}
	}
	/*<EndProperty Name="System.Int32 Infragistics.ColorData::R()" />*/
	,
	_g: 0,
	/*<BeginProperty Name="System.Int32 Infragistics.ColorData::G()" />*/
	g: function (value) {
		if (arguments.length === 1) {
			this._g = value;
			return value;
		} else {
			return this._g;
		}
	}
	/*<EndProperty Name="System.Int32 Infragistics.ColorData::G()" />*/
	,
	_b: 0,
	/*<BeginProperty Name="System.Int32 Infragistics.ColorData::B()" />*/
	b: function (value) {
		if (arguments.length === 1) {
			this._b = value;
			return value;
		} else {
			return this._b;
		}
	}
	/*<EndProperty Name="System.Int32 Infragistics.ColorData::B()" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.ColorData::Serialize()" />*/
	serialize: function () {
		return "{ a: " + this.a() + ", r: " + this.r() + ", g: " + this.g() + ", b: " + this.b() + "}";
	}
	/*<EndMethod Name="System.String Infragistics.ColorData::Serialize()" />*/
	,
	/*<BeginMethod Name="Infragistics.ColorData Infragistics.ColorData::FromColor(System.Windows.Media.Color)" />*/
	fromColor: function (color) {
		var d = new $.ig.ColorData();
		d.a(color.a());
		d.r(color.r());
		d.g(color.g());
		d.b(color.b());
		return d;
	}
	/*<EndMethod Name="Infragistics.ColorData Infragistics.ColorData::FromColor(System.Windows.Media.Color)" />*/
	,
	/*<BeginMethod Name="System.Windows.Media.Color Infragistics.ColorData::ToColor()" />*/
	toColor: function () {
		var c = new $.ig.Color();
		c.a(this.a());
		c.r(this.r());
		c.g(this.g());
		c.b(this.b());
		return c;
	}
	/*<EndMethod Name="System.Windows.Media.Color Infragistics.ColorData::ToColor()" />*/
	,
	$type: new $.ig.Type('ColorData', $.ig.Object.prototype.$type, [$.ig.IVisualData.prototype.$type])
}, true);

/*<EndType Name="Infragistics.ColorData" />*/

/*<BeginType Name="Infragistics.RectData" />*/

$.ig.util.defType('RectData', 'Object', {
	init: function (left, top, width, height) {
		$.ig.Object.prototype.init.call(this);
		this.left(left);
		this.top(top);
		this.width(width);
		this.height(height);
	},
	_top: 0,
	/*<BeginProperty Name="System.Double Infragistics.RectData::Top()" />*/
	top: function (value) {
		if (arguments.length === 1) {
			this._top = value;
			return value;
		} else {
			return this._top;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.RectData::Top()" />*/
	,
	_left: 0,
	/*<BeginProperty Name="System.Double Infragistics.RectData::Left()" />*/
	left: function (value) {
		if (arguments.length === 1) {
			this._left = value;
			return value;
		} else {
			return this._left;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.RectData::Left()" />*/
	,
	_width: 0,
	/*<BeginProperty Name="System.Double Infragistics.RectData::Width()" />*/
	width: function (value) {
		if (arguments.length === 1) {
			this._width = value;
			return value;
		} else {
			return this._width;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.RectData::Width()" />*/
	,
	_height: 0,
	/*<BeginProperty Name="System.Double Infragistics.RectData::Height()" />*/
	height: function (value) {
		if (arguments.length === 1) {
			this._height = value;
			return value;
		} else {
			return this._height;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.RectData::Height()" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.RectData::Serialize()" />*/
	serialize: function () {
		return "{ top: " + this.top() + ", left: " + this.left() + ", width: " + this.width() + ", height: " + this.height() + "}";
	}
	/*<EndMethod Name="System.String Infragistics.RectData::Serialize()" />*/
	,
	/*<BeginMethod Name="Infragistics.RectData Infragistics.RectData::FromRect(System.Windows.Rect)" />*/
	fromRect: function (rect) {
		var d = new $.ig.RectData(rect.left(), rect.top(), rect.width(), rect.height());
		return d;
	}
	/*<EndMethod Name="Infragistics.RectData Infragistics.RectData::FromRect(System.Windows.Rect)" />*/
	,
	/*<BeginMethod Name="System.Windows.Rect Infragistics.RectData::ToRect()" />*/
	toRect: function () {
		var r = new $.ig.Rect(0, this.left(), this.top(), this.width(), this.height());
		return r;
	}
	/*<EndMethod Name="System.Windows.Rect Infragistics.RectData::ToRect()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.RectData::IsEmpty()" />*/
	isEmpty: function () {
		return this.width() < 0;
	}
	/*<EndProperty Name="System.Boolean Infragistics.RectData::IsEmpty()" />*/
	,
	/*<BeginProperty Name="Infragistics.RectData Infragistics.RectData::Empty()" />*/
	empty: function () {
		return new $.ig.RectData(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY);
	}
	/*<EndProperty Name="Infragistics.RectData Infragistics.RectData::Empty()" />*/
	,
	$type: new $.ig.Type('RectData', $.ig.Object.prototype.$type, [$.ig.IVisualData.prototype.$type])
}, true);

/*<EndType Name="Infragistics.RectData" />*/

/*<BeginType Name="Infragistics.PointData" />*/

$.ig.util.defType('PointData', 'Object', {
	init: function (x, y) {
		$.ig.Object.prototype.init.call(this);
		this.x(x);
		this.y(y);
	},
	_x: 0,
	/*<BeginProperty Name="System.Double Infragistics.PointData::X()" />*/
	x: function (value) {
		if (arguments.length === 1) {
			this._x = value;
			return value;
		} else {
			return this._x;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.PointData::X()" />*/
	,
	_y: 0,
	/*<BeginProperty Name="System.Double Infragistics.PointData::Y()" />*/
	y: function (value) {
		if (arguments.length === 1) {
			this._y = value;
			return value;
		} else {
			return this._y;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.PointData::Y()" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.PointData::Serialize()" />*/
	serialize: function () {
		return "{ x: " + this.x() + ", y: " + this.y() + "}";
	}
	/*<EndMethod Name="System.String Infragistics.PointData::Serialize()" />*/
	,
	/*<BeginMethod Name="Infragistics.PointData Infragistics.PointData::FromPoint(System.Windows.Point)" />*/
	fromPoint: function (p) {
		var d = new $.ig.PointData(p.__x, p.__y);
		return d;
	}
	/*<EndMethod Name="Infragistics.PointData Infragistics.PointData::FromPoint(System.Windows.Point)" />*/
	,
	/*<BeginMethod Name="System.Windows.Point Infragistics.PointData::ToPoint()" />*/
	toPoint: function () {
		var p = new $.ig.Point(0);
		p.__x = this.x();
		p.__y = this.y();
		return p;
	}
	/*<EndMethod Name="System.Windows.Point Infragistics.PointData::ToPoint()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.PointData::Equals(System.Object)" />*/
	equals: function (obj) {
		var p = $.ig.util.cast($.ig.PointData.prototype.$type, obj);
		if (p == null) {
			return false;
		}
		return p.x() == this.x() && p.y() == this.y();
	}
	/*<EndMethod Name="System.Boolean Infragistics.PointData::Equals(System.Object)" />*/
	,
	$type: new $.ig.Type('PointData', $.ig.Object.prototype.$type, [$.ig.IVisualData.prototype.$type])
}, true);

/*<EndType Name="Infragistics.PointData" />*/

/*<BeginType Name="Infragistics.SizeData" />*/

$.ig.util.defType('SizeData', 'Object', {
	init: function (width, height) {
		$.ig.Object.prototype.init.call(this);
		this.width(width);
		this.height(height);
	},
	_width: 0,
	/*<BeginProperty Name="System.Double Infragistics.SizeData::Width()" />*/
	width: function (value) {
		if (arguments.length === 1) {
			this._width = value;
			return value;
		} else {
			return this._width;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.SizeData::Width()" />*/
	,
	_height: 0,
	/*<BeginProperty Name="System.Double Infragistics.SizeData::Height()" />*/
	height: function (value) {
		if (arguments.length === 1) {
			this._height = value;
			return value;
		} else {
			return this._height;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.SizeData::Height()" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.SizeData::Serialize()" />*/
	serialize: function () {
		return "{ width: " + this.width() + ", height: " + this.height() + "}";
	}
	/*<EndMethod Name="System.String Infragistics.SizeData::Serialize()" />*/
	,
	/*<BeginMethod Name="Infragistics.SizeData Infragistics.SizeData::FromSize(System.Windows.Size)" />*/
	fromSize: function (p) {
		var d = new $.ig.SizeData(p.width(), p.height());
		return d;
	}
	/*<EndMethod Name="Infragistics.SizeData Infragistics.SizeData::FromSize(System.Windows.Size)" />*/
	,
	/*<BeginMethod Name="System.Windows.Size Infragistics.SizeData::ToSize()" />*/
	toSize: function () {
		var p = new $.ig.Size(1, this.width(), this.height());
		return p;
	}
	/*<EndMethod Name="System.Windows.Size Infragistics.SizeData::ToSize()" />*/
	,
	$type: new $.ig.Type('SizeData', $.ig.Object.prototype.$type, [$.ig.IVisualData.prototype.$type])
}, true);

/*<EndType Name="Infragistics.SizeData" />*/

/*<BeginType Name="Infragistics.SolidBrushAppearanceData" />*/

$.ig.util.defType('SolidBrushAppearanceData', 'BrushAppearanceData', {
	init: function () {
		$.ig.BrushAppearanceData.prototype.init.call(this);
	},
	/*<BeginProperty Name="System.String Infragistics.SolidBrushAppearanceData::Type()" />*/
	type: function () {
		return "solid";
	}
	/*<EndProperty Name="System.String Infragistics.SolidBrushAppearanceData::Type()" />*/
	,
	_colorValue: null,
	/*<BeginProperty Name="Infragistics.ColorData Infragistics.SolidBrushAppearanceData::ColorValue()" />*/
	colorValue: function (value) {
		if (arguments.length === 1) {
			this._colorValue = value;
			return value;
		} else {
			return this._colorValue;
		}
	}
	/*<EndProperty Name="Infragistics.ColorData Infragistics.SolidBrushAppearanceData::ColorValue()" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.SolidBrushAppearanceData::SerializeOverride()" />*/
	serializeOverride: function () {
		return "colorValue: " + (this.colorValue() != null ? this.colorValue().serialize() : "null");
	}
	/*<EndMethod Name="System.String Infragistics.SolidBrushAppearanceData::SerializeOverride()" />*/
	,
	$type: new $.ig.Type('SolidBrushAppearanceData', $.ig.BrushAppearanceData.prototype.$type)
}, true);

/*<EndType Name="Infragistics.SolidBrushAppearanceData" />*/

/*<BeginType Name="Infragistics.LinearGradientBrushAppearanceData" />*/

$.ig.util.defType('LinearGradientBrushAppearanceData', 'BrushAppearanceData', {
	init: function () {
		$.ig.BrushAppearanceData.prototype.init.call(this);
		this.stops(new $.ig.List$1($.ig.GradientStopAppearanceData.prototype.$type, 0));
	},
	/*<BeginProperty Name="System.String Infragistics.LinearGradientBrushAppearanceData::Type()" />*/
	type: function () {
		return "linear";
	}
	/*<EndProperty Name="System.String Infragistics.LinearGradientBrushAppearanceData::Type()" />*/
	,
	_startX: 0,
	/*<BeginProperty Name="System.Double Infragistics.LinearGradientBrushAppearanceData::StartX()" />*/
	startX: function (value) {
		if (arguments.length === 1) {
			this._startX = value;
			return value;
		} else {
			return this._startX;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.LinearGradientBrushAppearanceData::StartX()" />*/
	,
	_startY: 0,
	/*<BeginProperty Name="System.Double Infragistics.LinearGradientBrushAppearanceData::StartY()" />*/
	startY: function (value) {
		if (arguments.length === 1) {
			this._startY = value;
			return value;
		} else {
			return this._startY;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.LinearGradientBrushAppearanceData::StartY()" />*/
	,
	_endX: 0,
	/*<BeginProperty Name="System.Double Infragistics.LinearGradientBrushAppearanceData::EndX()" />*/
	endX: function (value) {
		if (arguments.length === 1) {
			this._endX = value;
			return value;
		} else {
			return this._endX;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.LinearGradientBrushAppearanceData::EndX()" />*/
	,
	_endY: 0,
	/*<BeginProperty Name="System.Double Infragistics.LinearGradientBrushAppearanceData::EndY()" />*/
	endY: function (value) {
		if (arguments.length === 1) {
			this._endY = value;
			return value;
		} else {
			return this._endY;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.LinearGradientBrushAppearanceData::EndY()" />*/
	,
	_stops: null,
	/*<BeginProperty Name="System.Collections.Generic.List Infragistics.LinearGradientBrushAppearanceData::Stops()" />*/
	stops: function (value) {
		if (arguments.length === 1) {
			this._stops = value;
			return value;
		} else {
			return this._stops;
		}
	}
	/*<EndProperty Name="System.Collections.Generic.List Infragistics.LinearGradientBrushAppearanceData::Stops()" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.LinearGradientBrushAppearanceData::SerializeOverride()" />*/
	serializeOverride: function () {
		var sb = new $.ig.StringBuilder(0);
		sb.append5("startX: " + this.startX() + ", endX: " + this.endX() + ", startY: " + this.startY() + ", endY: " + this.endY());
		sb.append5(", stops: [");
		for (var i = 0; i < this.stops().count(); i++) {
			if (i > 0) {
				sb.append5(", ");
			}
			sb.append5(this.stops().__inner[i].serialize());
		}
		sb.append5("]");
		return sb.toString();
	}
	/*<EndMethod Name="System.String Infragistics.LinearGradientBrushAppearanceData::SerializeOverride()" />*/
	,
	$type: new $.ig.Type('LinearGradientBrushAppearanceData', $.ig.BrushAppearanceData.prototype.$type)
}, true);

/*<EndType Name="Infragistics.LinearGradientBrushAppearanceData" />*/

/*<BeginType Name="Infragistics.GradientStopAppearanceData" />*/

$.ig.util.defType('GradientStopAppearanceData', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	_colorValue: null,
	/*<BeginProperty Name="Infragistics.ColorData Infragistics.GradientStopAppearanceData::ColorValue()" />*/
	colorValue: function (value) {
		if (arguments.length === 1) {
			this._colorValue = value;
			return value;
		} else {
			return this._colorValue;
		}
	}
	/*<EndProperty Name="Infragistics.ColorData Infragistics.GradientStopAppearanceData::ColorValue()" />*/
	,
	_offset: 0,
	/*<BeginProperty Name="System.Double Infragistics.GradientStopAppearanceData::Offset()" />*/
	offset: function (value) {
		if (arguments.length === 1) {
			this._offset = value;
			return value;
		} else {
			return this._offset;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.GradientStopAppearanceData::Offset()" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.GradientStopAppearanceData::Serialize()" />*/
	serialize: function () {
		return "{ " + "colorValue: " + (this.colorValue() != null ? this.colorValue().serialize() : "null") + ", offset: " + this.offset() + " }";
	}
	/*<EndMethod Name="System.String Infragistics.GradientStopAppearanceData::Serialize()" />*/
	,
	$type: new $.ig.Type('GradientStopAppearanceData', $.ig.Object.prototype.$type, [$.ig.IVisualData.prototype.$type])
}, true);

/*<EndType Name="Infragistics.GradientStopAppearanceData" />*/

/*<BeginType Name="Infragistics.PrimitiveAppearanceData" />*/

$.ig.util.defType('PrimitiveAppearanceData', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	_stroke: null,
	/*<BeginProperty Name="Infragistics.ColorData Infragistics.PrimitiveAppearanceData::Stroke()" />*/
	stroke: function (value) {
		if (arguments.length === 1) {
			this._stroke = value;
			return value;
		} else {
			return this._stroke;
		}
	}
	/*<EndProperty Name="Infragistics.ColorData Infragistics.PrimitiveAppearanceData::Stroke()" />*/
	,
	_strokeExtended: null,
	/*<BeginProperty Name="Infragistics.BrushAppearanceData Infragistics.PrimitiveAppearanceData::StrokeExtended()" />*/
	strokeExtended: function (value) {
		if (arguments.length === 1) {
			this._strokeExtended = value;
			return value;
		} else {
			return this._strokeExtended;
		}
	}
	/*<EndProperty Name="Infragistics.BrushAppearanceData Infragistics.PrimitiveAppearanceData::StrokeExtended()" />*/
	,
	_fill: null,
	/*<BeginProperty Name="Infragistics.ColorData Infragistics.PrimitiveAppearanceData::Fill()" />*/
	fill: function (value) {
		if (arguments.length === 1) {
			this._fill = value;
			return value;
		} else {
			return this._fill;
		}
	}
	/*<EndProperty Name="Infragistics.ColorData Infragistics.PrimitiveAppearanceData::Fill()" />*/
	,
	_fillExtended: null,
	/*<BeginProperty Name="Infragistics.BrushAppearanceData Infragistics.PrimitiveAppearanceData::FillExtended()" />*/
	fillExtended: function (value) {
		if (arguments.length === 1) {
			this._fillExtended = value;
			return value;
		} else {
			return this._fillExtended;
		}
	}
	/*<EndProperty Name="Infragistics.BrushAppearanceData Infragistics.PrimitiveAppearanceData::FillExtended()" />*/
	,
	_strokeThickness: 0,
	/*<BeginProperty Name="System.Double Infragistics.PrimitiveAppearanceData::StrokeThickness()" />*/
	strokeThickness: function (value) {
		if (arguments.length === 1) {
			this._strokeThickness = value;
			return value;
		} else {
			return this._strokeThickness;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.PrimitiveAppearanceData::StrokeThickness()" />*/
	,
	_isVisible: false,
	/*<BeginProperty Name="System.Boolean Infragistics.PrimitiveAppearanceData::IsVisible()" />*/
	isVisible: function (value) {
		if (arguments.length === 1) {
			this._isVisible = value;
			return value;
		} else {
			return this._isVisible;
		}
	}
	/*<EndProperty Name="System.Boolean Infragistics.PrimitiveAppearanceData::IsVisible()" />*/
	,
	_opacity: 0,
	/*<BeginProperty Name="System.Double Infragistics.PrimitiveAppearanceData::Opacity()" />*/
	opacity: function (value) {
		if (arguments.length === 1) {
			this._opacity = value;
			return value;
		} else {
			return this._opacity;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.PrimitiveAppearanceData::Opacity()" />*/
	,
	_canvasLeft: 0,
	/*<BeginProperty Name="System.Double Infragistics.PrimitiveAppearanceData::CanvasLeft()" />*/
	canvasLeft: function (value) {
		if (arguments.length === 1) {
			this._canvasLeft = value;
			return value;
		} else {
			return this._canvasLeft;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.PrimitiveAppearanceData::CanvasLeft()" />*/
	,
	_canvasTop: 0,
	/*<BeginProperty Name="System.Double Infragistics.PrimitiveAppearanceData::CanvasTop()" />*/
	canvasTop: function (value) {
		if (arguments.length === 1) {
			this._canvasTop = value;
			return value;
		} else {
			return this._canvasTop;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.PrimitiveAppearanceData::CanvasTop()" />*/
	,
	_canvaZIndex: 0,
	/*<BeginProperty Name="System.Int32 Infragistics.PrimitiveAppearanceData::CanvaZIndex()" />*/
	canvaZIndex: function (value) {
		if (arguments.length === 1) {
			this._canvaZIndex = value;
			return value;
		} else {
			return this._canvaZIndex;
		}
	}
	/*<EndProperty Name="System.Int32 Infragistics.PrimitiveAppearanceData::CanvaZIndex()" />*/
	,
	_dashArray: null,
	/*<BeginProperty Name="System.Array Infragistics.PrimitiveAppearanceData::DashArray()" />*/
	dashArray: function (value) {
		if (arguments.length === 1) {
			this._dashArray = value;
			return value;
		} else {
			return this._dashArray;
		}
	}
	/*<EndProperty Name="System.Array Infragistics.PrimitiveAppearanceData::DashArray()" />*/
	,
	_dashCap: 0,
	/*<BeginProperty Name="System.Int32 Infragistics.PrimitiveAppearanceData::DashCap()" />*/
	dashCap: function (value) {
		if (arguments.length === 1) {
			this._dashCap = value;
			return value;
		} else {
			return this._dashCap;
		}
	}
	/*<EndProperty Name="System.Int32 Infragistics.PrimitiveAppearanceData::DashCap()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.PrimitiveAppearanceData::ScaleByViewport(Infragistics.RectData)" />*/
	scaleByViewport: function (viewport) {
		this.canvasLeft((this.canvasLeft() - viewport.left()) / viewport.width());
		this.canvasTop((this.canvasTop() - viewport.top()) / viewport.height());
	}
	/*<EndMethod Name="System.Void Infragistics.PrimitiveAppearanceData::ScaleByViewport(Infragistics.RectData)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.PrimitiveAppearanceData::Serialize()" />*/
	serialize: function () {
		var sb = new $.ig.StringBuilder(0);
		sb.appendLine1("{");
		sb.appendLine1("stroke: " + (this.stroke() != null ? this.stroke().serialize() : "null") + ", ");
		sb.appendLine1("fill: " + (this.fill() != null ? this.fill().serialize() : "null") + ", ");
		sb.appendLine1("strokeExtended: " + (this.strokeExtended() != null ? this.strokeExtended().serialize() : "null") + ", ");
		sb.appendLine1("fillExtended: " + (this.fillExtended() != null ? this.fillExtended().serialize() : "null") + ", ");
		sb.appendLine1("strokeThickness: " + this.strokeThickness() + ", ");
		sb.appendLine1("isVisible: " + (this.isVisible() ? "true" : "false") + ", ");
		sb.appendLine1("opacity: " + this.opacity() + ", ");
		sb.appendLine1("canvasLeft: " + this.canvasLeft() + ", ");
		sb.appendLine1("canvasTop: " + this.canvasTop() + ", ");
		sb.appendLine1("canvasZIndex: " + this.canvaZIndex() + ", ");
		sb.appendLine1("dashArray: null, ");
		sb.appendLine1("dashCap: " + this.dashCap());
		sb.appendLine1("}");
		return sb.toString();
	}
	/*<EndMethod Name="System.String Infragistics.PrimitiveAppearanceData::Serialize()" />*/
	,
	$type: new $.ig.Type('PrimitiveAppearanceData', $.ig.Object.prototype.$type, [$.ig.IVisualData.prototype.$type])
}, true);

/*<EndType Name="Infragistics.PrimitiveAppearanceData" />*/

/*<BeginType Name="Infragistics.GetPointsSettings" />*/

$.ig.util.defType('GetPointsSettings', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	_ignoreFigureStartPoint: false,
	/*<BeginProperty Name="System.Boolean Infragistics.GetPointsSettings::IgnoreFigureStartPoint()" />*/
	ignoreFigureStartPoint: function (value) {
		if (arguments.length === 1) {
			this._ignoreFigureStartPoint = value;
			return value;
		} else {
			return this._ignoreFigureStartPoint;
		}
	}
	/*<EndProperty Name="System.Boolean Infragistics.GetPointsSettings::IgnoreFigureStartPoint()" />*/
	,
	$type: new $.ig.Type('GetPointsSettings', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.GetPointsSettings" />*/

/*<BeginType Name="Infragistics.RectangleVisualData" />*/

$.ig.util.defType('RectangleVisualData', 'PrimitiveVisualData', {
	init: function (initNumber) {
		if (initNumber > 0) {
			switch (initNumber) {
				case 1:
					this.init1.apply(this, arguments);
					break;
			}
			return;
		}
		$.ig.PrimitiveVisualData.prototype.init1.call(this, 1, "rect1");
	},
	_width: 0,
	/*<BeginProperty Name="System.Double Infragistics.RectangleVisualData::Width()" />*/
	width: function (value) {
		if (arguments.length === 1) {
			this._width = value;
			return value;
		} else {
			return this._width;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.RectangleVisualData::Width()" />*/
	,
	_height: 0,
	/*<BeginProperty Name="System.Double Infragistics.RectangleVisualData::Height()" />*/
	height: function (value) {
		if (arguments.length === 1) {
			this._height = value;
			return value;
		} else {
			return this._height;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.RectangleVisualData::Height()" />*/
	,
	_radiusX: 0,
	/*<BeginProperty Name="System.Double Infragistics.RectangleVisualData::RadiusX()" />*/
	radiusX: function (value) {
		if (arguments.length === 1) {
			this._radiusX = value;
			return value;
		} else {
			return this._radiusX;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.RectangleVisualData::RadiusX()" />*/
	,
	_radiusY: 0,
	/*<BeginProperty Name="System.Double Infragistics.RectangleVisualData::RadiusY()" />*/
	radiusY: function (value) {
		if (arguments.length === 1) {
			this._radiusY = value;
			return value;
		} else {
			return this._radiusY;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.RectangleVisualData::RadiusY()" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.RectangleVisualData::SerializeOverride()" />*/
	serializeOverride: function () {
		return "width: " + this.width() + ", height: " + this.height() + ", radiusX: " + this.radiusX() + ", radiusY: " + this.radiusY();
	}
	/*<EndMethod Name="System.String Infragistics.RectangleVisualData::SerializeOverride()" />*/
	,
	init1: function (initNumber, name, rect) {
		$.ig.PrimitiveVisualData.prototype.init1.call(this, 1, name);
		this.width(rect.width());
		this.height(rect.height());
		this.radiusX(rect.radiusX());
		this.radiusY(rect.radiusY());
		$.ig.AppearanceHelper.prototype.getShapeAppearance(this.appearance(), rect);
	},
	/*<BeginProperty Name="System.String Infragistics.RectangleVisualData::Type()" />*/
	type: function () {
		return "Rectangle";
	}
	/*<EndProperty Name="System.String Infragistics.RectangleVisualData::Type()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.RectangleVisualData::ScaleByViewport(Infragistics.RectData)" />*/
	scaleByViewport: function (viewport) {
		$.ig.PrimitiveVisualData.prototype.scaleByViewport.call(this, viewport);
		this.width(this.width() / viewport.width());
		this.height(this.height() / viewport.height());
	}
	/*<EndMethod Name="System.Void Infragistics.RectangleVisualData::ScaleByViewport(Infragistics.RectData)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.RectangleVisualData::GetPointsOverride(System.Collections.Generic.List, Infragistics.GetPointsSettings)" />*/
	getPointsOverride: function (points, settings) {
		var current = new $.ig.List$1($.ig.PointData.prototype.$type, 0);
		points.add(current);
		current.add(new $.ig.PointData(this.appearance().canvasLeft(), this.appearance().canvasTop()));
		current.add(new $.ig.PointData(this.appearance().canvasLeft() + this.width(), this.appearance().canvasTop()));
		current.add(new $.ig.PointData(this.appearance().canvasLeft() + this.width(), this.appearance().canvasTop() + this.height()));
		current.add(new $.ig.PointData(this.appearance().canvasLeft(), this.appearance().canvasTop() + this.height()));
	}
	/*<EndMethod Name="System.Void Infragistics.RectangleVisualData::GetPointsOverride(System.Collections.Generic.List, Infragistics.GetPointsSettings)" />*/
	,
	$type: new $.ig.Type('RectangleVisualData', $.ig.PrimitiveVisualData.prototype.$type)
}, true);

/*<EndType Name="Infragistics.RectangleVisualData" />*/

/*<BeginType Name="Infragistics.ShapeTags" />*/

$.ig.util.defType('ShapeTags', 'List$1', {
	init: function () {
		$.ig.List$1.prototype.init.call(this, String, 0);
	},
	$type: new $.ig.Type('ShapeTags', $.ig.List$1.prototype.$type.specialize(String))
}, true);

/*<EndType Name="Infragistics.ShapeTags" />*/

/*<BeginType Name="Infragistics.LineVisualData" />*/

$.ig.util.defType('LineVisualData', 'PrimitiveVisualData', {
	/*<BeginProperty Name="System.String Infragistics.LineVisualData::Type()" />*/
	type: function () {
		return "Line";
	}
	/*<EndProperty Name="System.String Infragistics.LineVisualData::Type()" />*/
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
		$.ig.PrimitiveVisualData.prototype.init1.call(this, 1, "line1");
	},
	init1: function (initNumber, name, line) {
		$.ig.PrimitiveVisualData.prototype.init1.call(this, 1, name);
		this.x1(line.x1());
		this.y1(line.y1());
		this.x2(line.x2());
		this.y2(line.y2());
		$.ig.AppearanceHelper.prototype.getShapeAppearance(this.appearance(), line);
	},
	_x1: 0,
	/*<BeginProperty Name="System.Double Infragistics.LineVisualData::X1()" />*/
	x1: function (value) {
		if (arguments.length === 1) {
			this._x1 = value;
			return value;
		} else {
			return this._x1;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.LineVisualData::X1()" />*/
	,
	_y1: 0,
	/*<BeginProperty Name="System.Double Infragistics.LineVisualData::Y1()" />*/
	y1: function (value) {
		if (arguments.length === 1) {
			this._y1 = value;
			return value;
		} else {
			return this._y1;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.LineVisualData::Y1()" />*/
	,
	_x2: 0,
	/*<BeginProperty Name="System.Double Infragistics.LineVisualData::X2()" />*/
	x2: function (value) {
		if (arguments.length === 1) {
			this._x2 = value;
			return value;
		} else {
			return this._x2;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.LineVisualData::X2()" />*/
	,
	_y2: 0,
	/*<BeginProperty Name="System.Double Infragistics.LineVisualData::Y2()" />*/
	y2: function (value) {
		if (arguments.length === 1) {
			this._y2 = value;
			return value;
		} else {
			return this._y2;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.LineVisualData::Y2()" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.LineVisualData::SerializeOverride()" />*/
	serializeOverride: function () {
		return "x1: " + this.x1() + ", y1: " + this.y1() + ", x2: " + this.x2() + ", y2: " + this.y2();
	}
	/*<EndMethod Name="System.String Infragistics.LineVisualData::SerializeOverride()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.LineVisualData::ScaleByViewport(Infragistics.RectData)" />*/
	scaleByViewport: function (viewport) {
		$.ig.PrimitiveVisualData.prototype.scaleByViewport.call(this, viewport);
		this.x1((this.x1() - viewport.left()) / viewport.width());
		this.y1((this.y1() - viewport.top()) / viewport.height());
	}
	/*<EndMethod Name="System.Void Infragistics.LineVisualData::ScaleByViewport(Infragistics.RectData)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.LineVisualData::GetPointsOverride(System.Collections.Generic.List, Infragistics.GetPointsSettings)" />*/
	getPointsOverride: function (points, settings) {
		var current = new $.ig.List$1($.ig.PointData.prototype.$type, 0);
		points.add(current);
		current.add(new $.ig.PointData(this.x1(), this.y1()));
		current.add(new $.ig.PointData(this.x2(), this.y2()));
	}
	/*<EndMethod Name="System.Void Infragistics.LineVisualData::GetPointsOverride(System.Collections.Generic.List, Infragistics.GetPointsSettings)" />*/
	,
	$type: new $.ig.Type('LineVisualData', $.ig.PrimitiveVisualData.prototype.$type)
}, true);

/*<EndType Name="Infragistics.LineVisualData" />*/

/*<BeginType Name="Infragistics.PolyLineVisualData" />*/

$.ig.util.defType('PolyLineVisualData', 'PrimitiveVisualData', {
	/*<BeginProperty Name="System.String Infragistics.PolyLineVisualData::Type()" />*/
	type: function () {
		return "Polyline";
	}
	/*<EndProperty Name="System.String Infragistics.PolyLineVisualData::Type()" />*/
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
		$.ig.PrimitiveVisualData.prototype.init1.call(this, 1, "polyLine1");
		this.points(new $.ig.List$1($.ig.PointData.prototype.$type, 0));
	},
	init1: function (initNumber, name, line) {
		$.ig.PrimitiveVisualData.prototype.init1.call(this, 1, name);
		this.points(new $.ig.List$1($.ig.PointData.prototype.$type, 0));
		for (var i = 0; i < line.points().count(); i++) {
			this.points().add($.ig.PointData.prototype.fromPoint(line.points().__inner[i]));
		}
		$.ig.AppearanceHelper.prototype.getShapeAppearance(this.appearance(), line);
	},
	_points: null,
	/*<BeginProperty Name="System.Collections.Generic.List Infragistics.PolyLineVisualData::Points()" />*/
	points: function (value) {
		if (arguments.length === 1) {
			this._points = value;
			return value;
		} else {
			return this._points;
		}
	}
	/*<EndProperty Name="System.Collections.Generic.List Infragistics.PolyLineVisualData::Points()" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.PolyLineVisualData::SerializeOverride()" />*/
	serializeOverride: function () {
		var sb = new $.ig.StringBuilder(0);
		sb.appendLine1("points: [");
		for (var i = 0; i < this.points().count(); i++) {
			if (i != 0) {
				sb.append5(", ");
			}
			sb.append5("{ x: " + this.points().__inner[i].x() + ", y: " + this.points().__inner[i].y() + "}");
		}
		sb.appendLine1("]");
		return sb.toString();
	}
	/*<EndMethod Name="System.String Infragistics.PolyLineVisualData::SerializeOverride()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.PolyLineVisualData::ScaleByViewport(Infragistics.RectData)" />*/
	scaleByViewport: function (viewport) {
		$.ig.PrimitiveVisualData.prototype.scaleByViewport.call(this, viewport);
		for (var i = 0; i < this.points().count(); i++) {
			this.points().__inner[i] = new $.ig.PointData((this.points().__inner[i].x() - viewport.left()) / viewport.width(), (this.points().__inner[i].y() - viewport.top()) / viewport.height());
		}
	}
	/*<EndMethod Name="System.Void Infragistics.PolyLineVisualData::ScaleByViewport(Infragistics.RectData)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.PolyLineVisualData::GetPointsOverride(System.Collections.Generic.List, Infragistics.GetPointsSettings)" />*/
	getPointsOverride: function (points, settings) {
		var current = new $.ig.List$1($.ig.PointData.prototype.$type, 0);
		points.add(current);
		for (var i = 0; i < this.points().count(); i++) {
			current.add(this.points().__inner[i]);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.PolyLineVisualData::GetPointsOverride(System.Collections.Generic.List, Infragistics.GetPointsSettings)" />*/
	,
	$type: new $.ig.Type('PolyLineVisualData', $.ig.PrimitiveVisualData.prototype.$type)
}, true);

/*<EndType Name="Infragistics.PolyLineVisualData" />*/

/*<BeginType Name="Infragistics.PolygonVisualData" />*/

$.ig.util.defType('PolygonVisualData', 'PrimitiveVisualData', {
	/*<BeginProperty Name="System.String Infragistics.PolygonVisualData::Type()" />*/
	type: function () {
		return "Polygon";
	}
	/*<EndProperty Name="System.String Infragistics.PolygonVisualData::Type()" />*/
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
		$.ig.PrimitiveVisualData.prototype.init1.call(this, 1, "polygon1");
		this.points(new $.ig.List$1($.ig.PointData.prototype.$type, 0));
	},
	init1: function (initNumber, name, polygon) {
		$.ig.PrimitiveVisualData.prototype.init1.call(this, 1, name);
		this.points(new $.ig.List$1($.ig.PointData.prototype.$type, 0));
		for (var i = 0; i < polygon.points().count(); i++) {
			this.points().add($.ig.PointData.prototype.fromPoint(polygon.points().__inner[i]));
		}
		$.ig.AppearanceHelper.prototype.getShapeAppearance(this.appearance(), polygon);
	},
	_points: null,
	/*<BeginProperty Name="System.Collections.Generic.List Infragistics.PolygonVisualData::Points()" />*/
	points: function (value) {
		if (arguments.length === 1) {
			this._points = value;
			return value;
		} else {
			return this._points;
		}
	}
	/*<EndProperty Name="System.Collections.Generic.List Infragistics.PolygonVisualData::Points()" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.PolygonVisualData::SerializeOverride()" />*/
	serializeOverride: function () {
		var sb = new $.ig.StringBuilder(0);
		sb.appendLine1("points: [");
		for (var i = 0; i < this.points().count(); i++) {
			if (i != 0) {
				sb.append5(", ");
			}
			sb.append5("{ x: " + this.points().__inner[i].x() + ", y: " + this.points().__inner[i].y() + "}");
		}
		sb.appendLine1("]");
		return sb.toString();
	}
	/*<EndMethod Name="System.String Infragistics.PolygonVisualData::SerializeOverride()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.PolygonVisualData::ScaleByViewport(Infragistics.RectData)" />*/
	scaleByViewport: function (viewport) {
		$.ig.PrimitiveVisualData.prototype.scaleByViewport.call(this, viewport);
		for (var i = 0; i < this.points().count(); i++) {
			this.points().__inner[i] = new $.ig.PointData((this.points().__inner[i].x() - viewport.left()) / viewport.width(), (this.points().__inner[i].y() - viewport.top()) / viewport.height());
		}
	}
	/*<EndMethod Name="System.Void Infragistics.PolygonVisualData::ScaleByViewport(Infragistics.RectData)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.PolygonVisualData::GetPointsOverride(System.Collections.Generic.List, Infragistics.GetPointsSettings)" />*/
	getPointsOverride: function (points, settings) {
		var current = new $.ig.List$1($.ig.PointData.prototype.$type, 0);
		points.add(current);
		for (var i = 0; i < this.points().count(); i++) {
			current.add(this.points().__inner[i]);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.PolygonVisualData::GetPointsOverride(System.Collections.Generic.List, Infragistics.GetPointsSettings)" />*/
	,
	$type: new $.ig.Type('PolygonVisualData', $.ig.PrimitiveVisualData.prototype.$type)
}, true);

/*<EndType Name="Infragistics.PolygonVisualData" />*/

/*<BeginType Name="Infragistics.PathVisualData" />*/

$.ig.util.defType('PathVisualData', 'PrimitiveVisualData', {
	/*<BeginProperty Name="System.String Infragistics.PathVisualData::Type()" />*/
	type: function () {
		return "Path";
	}
	/*<EndProperty Name="System.String Infragistics.PathVisualData::Type()" />*/
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
		$.ig.PrimitiveVisualData.prototype.init1.call(this, 1, "path1");
		this.data(new $.ig.List$1($.ig.GeometryData.prototype.$type, 0));
	},
	init1: function (initNumber, name, path) {
		$.ig.PrimitiveVisualData.prototype.init1.call(this, 1, name);
		this.data($.ig.AppearanceHelper.prototype.fromGeometry(path.data()));
		$.ig.AppearanceHelper.prototype.getShapeAppearance(this.appearance(), path);
	},
	init2: function (initNumber, name, line) {
		$.ig.PrimitiveVisualData.prototype.init1.call(this, 1, name);
		this.data($.ig.AppearanceHelper.prototype.fromLineData(line));
		$.ig.AppearanceHelper.prototype.getShapeAppearance(this.appearance(), line);
	},
	_data: null,
	/*<BeginProperty Name="System.Collections.Generic.List Infragistics.PathVisualData::Data()" />*/
	data: function (value) {
		if (arguments.length === 1) {
			this._data = value;
			return value;
		} else {
			return this._data;
		}
	}
	/*<EndProperty Name="System.Collections.Generic.List Infragistics.PathVisualData::Data()" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.PathVisualData::SerializeOverride()" />*/
	serializeOverride: function () {
		var sb = new $.ig.StringBuilder(0);
		sb.appendLine1("data: [");
		for (var i = 0; i < this.data().count(); i++) {
			if (i != 0) {
				sb.append5(", ");
			}
			sb.append5((this.data().__inner[i] != null ? this.data().__inner[i].serialize() : "null"));
		}
		sb.appendLine1("]");
		return sb.toString();
	}
	/*<EndMethod Name="System.String Infragistics.PathVisualData::SerializeOverride()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.PathVisualData::ScaleByViewport(Infragistics.RectData)" />*/
	scaleByViewport: function (viewport) {
		$.ig.PrimitiveVisualData.prototype.scaleByViewport.call(this, viewport);
		var en = this.data().getEnumerator();
		while (en.moveNext()) {
			var data = en.current();
			data.scaleByViewport(viewport);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.PathVisualData::ScaleByViewport(Infragistics.RectData)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.PathVisualData::GetPointsOverride(System.Collections.Generic.List, Infragistics.GetPointsSettings)" />*/
	getPointsOverride: function (points, settings) {
		for (var i = 0; i < this.data().count(); i++) {
			var data = this.data().__inner[i];
			data.getPointsOverride(points, settings);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.PathVisualData::GetPointsOverride(System.Collections.Generic.List, Infragistics.GetPointsSettings)" />*/
	,
	$type: new $.ig.Type('PathVisualData', $.ig.PrimitiveVisualData.prototype.$type)
}, true);

/*<EndType Name="Infragistics.PathVisualData" />*/

/*<BeginType Name="Infragistics.GeometryData" />*/

$.ig.util.defType('GeometryData', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginProperty Name="System.String Infragistics.GeometryData::Type()" />*/
	type: function () {
	}
	/*<EndProperty Name="System.String Infragistics.GeometryData::Type()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.GeometryData::ScaleByViewport(Infragistics.RectData)" />*/
	scaleByViewport: function (viewport) {
	}
	/*<EndMethod Name="System.Void Infragistics.GeometryData::ScaleByViewport(Infragistics.RectData)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.GeometryData::GetPointsOverride(System.Collections.Generic.List, Infragistics.GetPointsSettings)" />*/
	getPointsOverride: function (points, settings) {
	}
	/*<EndMethod Name="System.Void Infragistics.GeometryData::GetPointsOverride(System.Collections.Generic.List, Infragistics.GetPointsSettings)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.GeometryData::Serialize()" />*/
	serialize: function () {
		return "{ type: \"" + this.type() + "\", " + this.serializeOverride() + "}";
	}
	/*<EndMethod Name="System.String Infragistics.GeometryData::Serialize()" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.GeometryData::SerializeOverride()" />*/
	serializeOverride: function () {
		return "";
	}
	/*<EndMethod Name="System.String Infragistics.GeometryData::SerializeOverride()" />*/
	,
	$type: new $.ig.Type('GeometryData', $.ig.Object.prototype.$type, [$.ig.IVisualData.prototype.$type])
}, true);

/*<EndType Name="Infragistics.GeometryData" />*/

/*<BeginType Name="Infragistics.PathGeometryData" />*/

$.ig.util.defType('PathGeometryData', 'GeometryData', {
	init: function () {
		$.ig.GeometryData.prototype.init.call(this);
		this.figures(new $.ig.List$1($.ig.PathFigureData.prototype.$type, 0));
	},
	/*<BeginProperty Name="System.String Infragistics.PathGeometryData::Type()" />*/
	type: function () {
		return "Path";
	}
	/*<EndProperty Name="System.String Infragistics.PathGeometryData::Type()" />*/
	,
	_figures: null,
	/*<BeginProperty Name="System.Collections.Generic.List Infragistics.PathGeometryData::Figures()" />*/
	figures: function (value) {
		if (arguments.length === 1) {
			this._figures = value;
			return value;
		} else {
			return this._figures;
		}
	}
	/*<EndProperty Name="System.Collections.Generic.List Infragistics.PathGeometryData::Figures()" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.PathGeometryData::SerializeOverride()" />*/
	serializeOverride: function () {
		var sb = new $.ig.StringBuilder(0);
		sb.appendLine1("figures: [");
		for (var i = 0; i < this.figures().count(); i++) {
			if (i != 0) {
				sb.append5(", ");
			}
			sb.append5(this.figures().__inner[i].serialize());
		}
		sb.appendLine1("]");
		return sb.toString();
	}
	/*<EndMethod Name="System.String Infragistics.PathGeometryData::SerializeOverride()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.PathGeometryData::ScaleByViewport(Infragistics.RectData)" />*/
	scaleByViewport: function (viewport) {
		var en = this.figures().getEnumerator();
		while (en.moveNext()) {
			var figure = en.current();
			figure.scaleByViewport(viewport);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.PathGeometryData::ScaleByViewport(Infragistics.RectData)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.PathGeometryData::GetPointsOverride(System.Collections.Generic.List, Infragistics.GetPointsSettings)" />*/
	getPointsOverride: function (points, settings) {
		for (var i = 0; i < this.figures().count(); i++) {
			var figure = this.figures().__inner[i];
			figure.getPointsOverride(points, settings);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.PathGeometryData::GetPointsOverride(System.Collections.Generic.List, Infragistics.GetPointsSettings)" />*/
	,
	$type: new $.ig.Type('PathGeometryData', $.ig.GeometryData.prototype.$type)
}, true);

/*<EndType Name="Infragistics.PathGeometryData" />*/

/*<BeginType Name="Infragistics.LineGeometryData" />*/

$.ig.util.defType('LineGeometryData', 'GeometryData', {
	init: function () {
		$.ig.GeometryData.prototype.init.call(this);
	},
	/*<BeginProperty Name="System.String Infragistics.LineGeometryData::Type()" />*/
	type: function () {
		return "Line";
	}
	/*<EndProperty Name="System.String Infragistics.LineGeometryData::Type()" />*/
	,
	_x1: 0,
	/*<BeginProperty Name="System.Double Infragistics.LineGeometryData::X1()" />*/
	x1: function (value) {
		if (arguments.length === 1) {
			this._x1 = value;
			return value;
		} else {
			return this._x1;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.LineGeometryData::X1()" />*/
	,
	_y1: 0,
	/*<BeginProperty Name="System.Double Infragistics.LineGeometryData::Y1()" />*/
	y1: function (value) {
		if (arguments.length === 1) {
			this._y1 = value;
			return value;
		} else {
			return this._y1;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.LineGeometryData::Y1()" />*/
	,
	_x2: 0,
	/*<BeginProperty Name="System.Double Infragistics.LineGeometryData::X2()" />*/
	x2: function (value) {
		if (arguments.length === 1) {
			this._x2 = value;
			return value;
		} else {
			return this._x2;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.LineGeometryData::X2()" />*/
	,
	_y2: 0,
	/*<BeginProperty Name="System.Double Infragistics.LineGeometryData::Y2()" />*/
	y2: function (value) {
		if (arguments.length === 1) {
			this._y2 = value;
			return value;
		} else {
			return this._y2;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.LineGeometryData::Y2()" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.LineGeometryData::SerializeOverride()" />*/
	serializeOverride: function () {
		return "x1: " + this.x1() + ", y1: " + this.y1() + ", x2: " + this.x2() + ", y2:" + this.y2();
	}
	/*<EndMethod Name="System.String Infragistics.LineGeometryData::SerializeOverride()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.LineGeometryData::ScaleByViewport(Infragistics.RectData)" />*/
	scaleByViewport: function (viewport) {
		this.x1((this.x1() - viewport.left()) / viewport.width());
		this.y1((this.y1() - viewport.top()) / viewport.height());
		this.x2((this.x2() - viewport.left()) / viewport.width());
		this.y2((this.y2() - viewport.top()) / viewport.height());
	}
	/*<EndMethod Name="System.Void Infragistics.LineGeometryData::ScaleByViewport(Infragistics.RectData)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.LineGeometryData::GetPointsOverride(System.Collections.Generic.List, Infragistics.GetPointsSettings)" />*/
	getPointsOverride: function (points, settings) {
		var current = new $.ig.List$1($.ig.PointData.prototype.$type, 0);
		points.add(current);
		current.add(new $.ig.PointData(this.x1(), this.y1()));
		current.add(new $.ig.PointData(this.x2(), this.y2()));
	}
	/*<EndMethod Name="System.Void Infragistics.LineGeometryData::GetPointsOverride(System.Collections.Generic.List, Infragistics.GetPointsSettings)" />*/
	,
	$type: new $.ig.Type('LineGeometryData', $.ig.GeometryData.prototype.$type)
}, true);

/*<EndType Name="Infragistics.LineGeometryData" />*/

/*<BeginType Name="Infragistics.RectangleGeometryData" />*/

$.ig.util.defType('RectangleGeometryData', 'GeometryData', {
	init: function () {
		$.ig.GeometryData.prototype.init.call(this);
	},
	/*<BeginProperty Name="System.String Infragistics.RectangleGeometryData::Type()" />*/
	type: function () {
		return "Rectangle";
	}
	/*<EndProperty Name="System.String Infragistics.RectangleGeometryData::Type()" />*/
	,
	_x: 0,
	/*<BeginProperty Name="System.Double Infragistics.RectangleGeometryData::X()" />*/
	x: function (value) {
		if (arguments.length === 1) {
			this._x = value;
			return value;
		} else {
			return this._x;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.RectangleGeometryData::X()" />*/
	,
	_y: 0,
	/*<BeginProperty Name="System.Double Infragistics.RectangleGeometryData::Y()" />*/
	y: function (value) {
		if (arguments.length === 1) {
			this._y = value;
			return value;
		} else {
			return this._y;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.RectangleGeometryData::Y()" />*/
	,
	_width: 0,
	/*<BeginProperty Name="System.Double Infragistics.RectangleGeometryData::Width()" />*/
	width: function (value) {
		if (arguments.length === 1) {
			this._width = value;
			return value;
		} else {
			return this._width;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.RectangleGeometryData::Width()" />*/
	,
	_height: 0,
	/*<BeginProperty Name="System.Double Infragistics.RectangleGeometryData::Height()" />*/
	height: function (value) {
		if (arguments.length === 1) {
			this._height = value;
			return value;
		} else {
			return this._height;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.RectangleGeometryData::Height()" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.RectangleGeometryData::SerializeOverride()" />*/
	serializeOverride: function () {
		return "x: " + this.x() + ", y: " + this.y() + ", width: " + this.width() + ", height: " + this.height();
	}
	/*<EndMethod Name="System.String Infragistics.RectangleGeometryData::SerializeOverride()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.RectangleGeometryData::ScaleByViewport(Infragistics.RectData)" />*/
	scaleByViewport: function (viewport) {
		this.x((this.x() - viewport.left()) / viewport.width());
		this.y((this.y() - viewport.top()) / viewport.height());
		this.width(this.width() / viewport.width());
		this.height(this.height() / viewport.height());
	}
	/*<EndMethod Name="System.Void Infragistics.RectangleGeometryData::ScaleByViewport(Infragistics.RectData)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.RectangleGeometryData::GetPointsOverride(System.Collections.Generic.List, Infragistics.GetPointsSettings)" />*/
	getPointsOverride: function (points, settings) {
		var current = new $.ig.List$1($.ig.PointData.prototype.$type, 0);
		points.add(current);
		current.add(new $.ig.PointData(this.x(), this.y()));
		current.add(new $.ig.PointData(this.x() + this.width(), this.y()));
		current.add(new $.ig.PointData(this.x() + this.width(), this.y() + this.height()));
		current.add(new $.ig.PointData(this.x(), this.y() + this.height()));
	}
	/*<EndMethod Name="System.Void Infragistics.RectangleGeometryData::GetPointsOverride(System.Collections.Generic.List, Infragistics.GetPointsSettings)" />*/
	,
	$type: new $.ig.Type('RectangleGeometryData', $.ig.GeometryData.prototype.$type)
}, true);

/*<EndType Name="Infragistics.RectangleGeometryData" />*/

/*<BeginType Name="Infragistics.EllipseGeometryData" />*/

$.ig.util.defType('EllipseGeometryData', 'GeometryData', {
	init: function () {
		$.ig.GeometryData.prototype.init.call(this);
	},
	/*<BeginProperty Name="System.String Infragistics.EllipseGeometryData::Type()" />*/
	type: function () {
		return "Ellipse";
	}
	/*<EndProperty Name="System.String Infragistics.EllipseGeometryData::Type()" />*/
	,
	_centerX: 0,
	/*<BeginProperty Name="System.Double Infragistics.EllipseGeometryData::CenterX()" />*/
	centerX: function (value) {
		if (arguments.length === 1) {
			this._centerX = value;
			return value;
		} else {
			return this._centerX;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.EllipseGeometryData::CenterX()" />*/
	,
	_centerY: 0,
	/*<BeginProperty Name="System.Double Infragistics.EllipseGeometryData::CenterY()" />*/
	centerY: function (value) {
		if (arguments.length === 1) {
			this._centerY = value;
			return value;
		} else {
			return this._centerY;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.EllipseGeometryData::CenterY()" />*/
	,
	_radiusX: 0,
	/*<BeginProperty Name="System.Double Infragistics.EllipseGeometryData::RadiusX()" />*/
	radiusX: function (value) {
		if (arguments.length === 1) {
			this._radiusX = value;
			return value;
		} else {
			return this._radiusX;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.EllipseGeometryData::RadiusX()" />*/
	,
	_radiusY: 0,
	/*<BeginProperty Name="System.Double Infragistics.EllipseGeometryData::RadiusY()" />*/
	radiusY: function (value) {
		if (arguments.length === 1) {
			this._radiusY = value;
			return value;
		} else {
			return this._radiusY;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.EllipseGeometryData::RadiusY()" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.EllipseGeometryData::SerializeOverride()" />*/
	serializeOverride: function () {
		return "centerX: " + this.centerX() + ", centerY: " + this.centerY() + ", radiusX: " + this.radiusX() + ", radiusY: " + this.radiusY();
	}
	/*<EndMethod Name="System.String Infragistics.EllipseGeometryData::SerializeOverride()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.EllipseGeometryData::ScaleByViewport(Infragistics.RectData)" />*/
	scaleByViewport: function (viewport) {
		this.centerX((this.centerX() - viewport.left()) / viewport.width());
		this.centerY((this.centerY() - viewport.top()) / viewport.height());
		this.radiusX(this.radiusX() / viewport.width());
		this.radiusY(this.radiusY() / viewport.height());
	}
	/*<EndMethod Name="System.Void Infragistics.EllipseGeometryData::ScaleByViewport(Infragistics.RectData)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.EllipseGeometryData::GetPointsOverride(System.Collections.Generic.List, Infragistics.GetPointsSettings)" />*/
	getPointsOverride: function (points, settings) {
		var current = new $.ig.List$1($.ig.PointData.prototype.$type, 0);
		points.add(current);
		current.add(new $.ig.PointData(this.centerX(), this.centerY()));
	}
	/*<EndMethod Name="System.Void Infragistics.EllipseGeometryData::GetPointsOverride(System.Collections.Generic.List, Infragistics.GetPointsSettings)" />*/
	,
	$type: new $.ig.Type('EllipseGeometryData', $.ig.GeometryData.prototype.$type)
}, true);

/*<EndType Name="Infragistics.EllipseGeometryData" />*/

/*<BeginType Name="Infragistics.PathFigureData" />*/

$.ig.util.defType('PathFigureData', 'Object', {
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
		this.segments(new $.ig.List$1($.ig.SegmentData.prototype.$type, 0));
		this.startPoint(new $.ig.PointData(NaN, NaN));
	},
	init1: function (initNumber, fig) {
		$.ig.Object.prototype.init.call(this);
		this.segments(new $.ig.List$1($.ig.SegmentData.prototype.$type, 0));
		this.startPoint($.ig.PointData.prototype.fromPoint(fig.__startPoint));
		for (var i = 0; i < fig.__segments.count(); i++) {
			var seg = fig.__segments.__inner[i];
			var newData = null;
			switch (seg.type()) {
				case $.ig.PathSegmentType.prototype.line:
					newData = new $.ig.LineSegmentData(1, seg);
					break;
				case $.ig.PathSegmentType.prototype.polyLine:
					newData = new $.ig.PolylineSegmentData(1, seg);
					break;
				case $.ig.PathSegmentType.prototype.arc:
					newData = new $.ig.ArcSegmentData(1, seg);
					break;
				case $.ig.PathSegmentType.prototype.polyBezier:
					newData = new $.ig.PolyBezierSegmentData(1, seg);
					break;
				case $.ig.PathSegmentType.prototype.bezier:
					newData = new $.ig.BezierSegmentData(1, seg);
					break;
			}
			this.segments().add(newData);
		}
	},
	_startPoint: null,
	/*<BeginProperty Name="Infragistics.PointData Infragistics.PathFigureData::StartPoint()" />*/
	startPoint: function (value) {
		if (arguments.length === 1) {
			this._startPoint = value;
			return value;
		} else {
			return this._startPoint;
		}
	}
	/*<EndProperty Name="Infragistics.PointData Infragistics.PathFigureData::StartPoint()" />*/
	,
	_segments: null,
	/*<BeginProperty Name="System.Collections.Generic.List Infragistics.PathFigureData::Segments()" />*/
	segments: function (value) {
		if (arguments.length === 1) {
			this._segments = value;
			return value;
		} else {
			return this._segments;
		}
	}
	/*<EndProperty Name="System.Collections.Generic.List Infragistics.PathFigureData::Segments()" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.PathFigureData::Serialize()" />*/
	serialize: function () {
		var sb = new $.ig.StringBuilder(0);
		sb.appendLine1("{");
		if (this.startPoint() != null) {
			sb.appendLine1("startPoint: { x: " + this.startPoint().x() + ", y: " + this.startPoint().y() + "}, ");
		}
		sb.appendLine1("segments: [");
		for (var i = 0; i < this.segments().count(); i++) {
			if (i != 0) {
				sb.append5(", ");
			}
			sb.append5(this.segments().__inner[i].serialize());
		}
		sb.appendLine1("]");
		sb.appendLine1("}");
		return sb.toString();
	}
	/*<EndMethod Name="System.String Infragistics.PathFigureData::Serialize()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.PathFigureData::ScaleByViewport(Infragistics.RectData)" />*/
	scaleByViewport: function (viewport) {
		if (this.startPoint() != null) {
			this.startPoint(new $.ig.PointData((this.startPoint().x() - viewport.left()) / viewport.width(), (this.startPoint().y() - viewport.top()) / viewport.height()));
		}
		for (var i = 0; i < this.segments().count(); i++) {
			this.segments().__inner[i].scaleByViewport(viewport);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.PathFigureData::ScaleByViewport(Infragistics.RectData)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.PathFigureData::GetPointsOverride(System.Collections.Generic.List, Infragistics.GetPointsSettings)" />*/
	getPointsOverride: function (points, settings) {
		var current = new $.ig.List$1($.ig.PointData.prototype.$type, 0);
		points.add(current);
		if (!settings.ignoreFigureStartPoint()) {
			current.add(new $.ig.PointData(this.startPoint().x(), this.startPoint().y()));
		}
		for (var i = 0; i < this.segments().count(); i++) {
			this.segments().__inner[i].getPointsOverride(current, settings);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.PathFigureData::GetPointsOverride(System.Collections.Generic.List, Infragistics.GetPointsSettings)" />*/
	,
	$type: new $.ig.Type('PathFigureData', $.ig.Object.prototype.$type, [$.ig.IVisualData.prototype.$type])
}, true);

/*<EndType Name="Infragistics.PathFigureData" />*/

/*<BeginType Name="Infragistics.SegmentData" />*/

$.ig.util.defType('SegmentData', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginProperty Name="System.String Infragistics.SegmentData::Type()" />*/
	type: function () {
	}
	/*<EndProperty Name="System.String Infragistics.SegmentData::Type()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SegmentData::ScaleByViewport(Infragistics.RectData)" />*/
	scaleByViewport: function (viewport) {
	}
	/*<EndMethod Name="System.Void Infragistics.SegmentData::ScaleByViewport(Infragistics.RectData)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.SegmentData::GetPointsOverride(System.Collections.Generic.List, Infragistics.GetPointsSettings)" />*/
	getPointsOverride: function (current, settings) {
	}
	/*<EndMethod Name="System.Void Infragistics.SegmentData::GetPointsOverride(System.Collections.Generic.List, Infragistics.GetPointsSettings)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.SegmentData::Serialize()" />*/
	serialize: function () {
		var sb = new $.ig.StringBuilder(0);
		sb.appendLine1("{");
		sb.appendLine1("type: \"" + this.type() + "\", ");
		sb.appendLine1(this.serializeOverride());
		sb.appendLine1("}");
		return sb.toString();
	}
	/*<EndMethod Name="System.String Infragistics.SegmentData::Serialize()" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.SegmentData::SerializeOverride()" />*/
	serializeOverride: function () {
		return "";
	}
	/*<EndMethod Name="System.String Infragistics.SegmentData::SerializeOverride()" />*/
	,
	$type: new $.ig.Type('SegmentData', $.ig.Object.prototype.$type, [$.ig.IVisualData.prototype.$type])
}, true);

/*<EndType Name="Infragistics.SegmentData" />*/

/*<BeginType Name="Infragistics.LineSegmentData" />*/

$.ig.util.defType('LineSegmentData', 'SegmentData', {
	init: function (initNumber) {
		if (initNumber > 0) {
			switch (initNumber) {
				case 1:
					this.init1.apply(this, arguments);
					break;
			}
			return;
		}
		$.ig.SegmentData.prototype.init.call(this);
		this.point(new $.ig.PointData(NaN, NaN));
	},
	init1: function (initNumber, seg) {
		$.ig.SegmentData.prototype.init.call(this);
		this.point($.ig.PointData.prototype.fromPoint(seg.point()));
	},
	/*<BeginProperty Name="System.String Infragistics.LineSegmentData::Type()" />*/
	type: function () {
		return "Line";
	}
	/*<EndProperty Name="System.String Infragistics.LineSegmentData::Type()" />*/
	,
	_point: null,
	/*<BeginProperty Name="Infragistics.PointData Infragistics.LineSegmentData::Point()" />*/
	point: function (value) {
		if (arguments.length === 1) {
			this._point = value;
			return value;
		} else {
			return this._point;
		}
	}
	/*<EndProperty Name="Infragistics.PointData Infragistics.LineSegmentData::Point()" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.LineSegmentData::SerializeOverride()" />*/
	serializeOverride: function () {
		return "point: { x: " + this.point().x() + ", y: " + this.point().y() + "}";
	}
	/*<EndMethod Name="System.String Infragistics.LineSegmentData::SerializeOverride()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.LineSegmentData::ScaleByViewport(Infragistics.RectData)" />*/
	scaleByViewport: function (viewport) {
		this.point(new $.ig.PointData((this.point().x() - viewport.left()) / viewport.width(), (this.point().y() - viewport.top()) / viewport.height()));
	}
	/*<EndMethod Name="System.Void Infragistics.LineSegmentData::ScaleByViewport(Infragistics.RectData)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.LineSegmentData::GetPointsOverride(System.Collections.Generic.List, Infragistics.GetPointsSettings)" />*/
	getPointsOverride: function (current, settings) {
		current.add(new $.ig.PointData(this.point().x(), this.point().y()));
	}
	/*<EndMethod Name="System.Void Infragistics.LineSegmentData::GetPointsOverride(System.Collections.Generic.List, Infragistics.GetPointsSettings)" />*/
	,
	$type: new $.ig.Type('LineSegmentData', $.ig.SegmentData.prototype.$type)
}, true);

/*<EndType Name="Infragistics.LineSegmentData" />*/

/*<BeginType Name="Infragistics.PolylineSegmentData" />*/

$.ig.util.defType('PolylineSegmentData', 'SegmentData', {
	init: function (initNumber) {
		if (initNumber > 0) {
			switch (initNumber) {
				case 1:
					this.init1.apply(this, arguments);
					break;
			}
			return;
		}
		$.ig.SegmentData.prototype.init.call(this);
		this.points(new $.ig.List$1($.ig.PointData.prototype.$type, 0));
	},
	init1: function (initNumber, poly) {
		$.ig.SegmentData.prototype.init.call(this);
		this.points(new $.ig.List$1($.ig.PointData.prototype.$type, 0));
		for (var i = 0; i < poly.__points.count(); i++) {
			this.points().add($.ig.PointData.prototype.fromPoint(poly.__points.__inner[i]));
		}
	},
	/*<BeginProperty Name="System.String Infragistics.PolylineSegmentData::Type()" />*/
	type: function () {
		return "Polyline";
	}
	/*<EndProperty Name="System.String Infragistics.PolylineSegmentData::Type()" />*/
	,
	_points: null,
	/*<BeginProperty Name="System.Collections.Generic.List Infragistics.PolylineSegmentData::Points()" />*/
	points: function (value) {
		if (arguments.length === 1) {
			this._points = value;
			return value;
		} else {
			return this._points;
		}
	}
	/*<EndProperty Name="System.Collections.Generic.List Infragistics.PolylineSegmentData::Points()" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.PolylineSegmentData::SerializeOverride()" />*/
	serializeOverride: function () {
		var sb = new $.ig.StringBuilder(0);
		sb.appendLine1("points: [");
		for (var i = 0; i < this.points().count(); i++) {
			if (i != 0) {
				sb.append5(", ");
			}
			sb.append5("{ x: " + this.points().__inner[i].x() + ", y: " + this.points().__inner[i].y() + "}");
		}
		sb.appendLine1("]");
		return sb.toString();
	}
	/*<EndMethod Name="System.String Infragistics.PolylineSegmentData::SerializeOverride()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.PolylineSegmentData::ScaleByViewport(Infragistics.RectData)" />*/
	scaleByViewport: function (viewport) {
		for (var i = 0; i < this.points().count(); i++) {
			this.points().__inner[i] = new $.ig.PointData((this.points().__inner[i].x() - viewport.left()) / viewport.width(), (this.points().__inner[i].y() - viewport.top()) / viewport.height());
		}
	}
	/*<EndMethod Name="System.Void Infragistics.PolylineSegmentData::ScaleByViewport(Infragistics.RectData)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.PolylineSegmentData::GetPointsOverride(System.Collections.Generic.List, Infragistics.GetPointsSettings)" />*/
	getPointsOverride: function (current, settings) {
		for (var i = 0; i < this.points().count(); i++) {
			current.add(new $.ig.PointData(this.points().__inner[i].x(), this.points().__inner[i].y()));
		}
	}
	/*<EndMethod Name="System.Void Infragistics.PolylineSegmentData::GetPointsOverride(System.Collections.Generic.List, Infragistics.GetPointsSettings)" />*/
	,
	$type: new $.ig.Type('PolylineSegmentData', $.ig.SegmentData.prototype.$type)
}, true);

/*<EndType Name="Infragistics.PolylineSegmentData" />*/

/*<BeginType Name="Infragistics.BezierSegmentData" />*/

$.ig.util.defType('BezierSegmentData', 'SegmentData', {
	init: function (initNumber) {
		if (initNumber > 0) {
			switch (initNumber) {
				case 1:
					this.init1.apply(this, arguments);
					break;
			}
			return;
		}
		$.ig.SegmentData.prototype.init.call(this);
		this.points(new $.ig.List$1($.ig.PointData.prototype.$type, 0));
	},
	init1: function (initNumber, segment) {
		$.ig.SegmentData.prototype.init.call(this);
		this.points(new $.ig.List$1($.ig.PointData.prototype.$type, 0));
		this.points().add($.ig.PointData.prototype.fromPoint(segment.point1()));
		this.points().add($.ig.PointData.prototype.fromPoint(segment.point2()));
		this.points().add($.ig.PointData.prototype.fromPoint(segment.point3()));
	},
	/*<BeginProperty Name="System.String Infragistics.BezierSegmentData::Type()" />*/
	type: function () {
		return "Bezier";
	}
	/*<EndProperty Name="System.String Infragistics.BezierSegmentData::Type()" />*/
	,
	_points: null,
	/*<BeginProperty Name="System.Collections.Generic.List Infragistics.BezierSegmentData::Points()" />*/
	points: function (value) {
		if (arguments.length === 1) {
			this._points = value;
			return value;
		} else {
			return this._points;
		}
	}
	/*<EndProperty Name="System.Collections.Generic.List Infragistics.BezierSegmentData::Points()" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.BezierSegmentData::SerializeOverride()" />*/
	serializeOverride: function () {
		var sb = new $.ig.StringBuilder(0);
		sb.appendLine1("points: [");
		for (var i = 0; i < this.points().count(); i++) {
			if (this.points().__inner[i] == null) {
				break;
			}
			if (i != 0) {
				sb.append5(", ");
			}
			sb.append5("{ x: " + this.points().__inner[i].x() + ", y: " + this.points().__inner[i].y() + "}");
		}
		sb.appendLine1("]");
		return sb.toString();
	}
	/*<EndMethod Name="System.String Infragistics.BezierSegmentData::SerializeOverride()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.BezierSegmentData::ScaleByViewport(Infragistics.RectData)" />*/
	scaleByViewport: function (viewport) {
		for (var i = 0; i < this.points().count(); i++) {
			if (this.points().__inner[i] == null) {
				break;
			}
			this.points().__inner[i] = new $.ig.PointData((this.points().__inner[i].x() - viewport.left()) / viewport.width(), (this.points().__inner[i].y() - viewport.top()) / viewport.height());
		}
	}
	/*<EndMethod Name="System.Void Infragistics.BezierSegmentData::ScaleByViewport(Infragistics.RectData)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.BezierSegmentData::GetPointsOverride(System.Collections.Generic.List, Infragistics.GetPointsSettings)" />*/
	getPointsOverride: function (current, settings) {
		for (var i = 0; i < this.points().count(); i++) {
			current.add(new $.ig.PointData(this.points().__inner[i].x(), this.points().__inner[i].y()));
		}
	}
	/*<EndMethod Name="System.Void Infragistics.BezierSegmentData::GetPointsOverride(System.Collections.Generic.List, Infragistics.GetPointsSettings)" />*/
	,
	$type: new $.ig.Type('BezierSegmentData', $.ig.SegmentData.prototype.$type)
}, true);

/*<EndType Name="Infragistics.BezierSegmentData" />*/

/*<BeginType Name="Infragistics.PolyBezierSegmentData" />*/

$.ig.util.defType('PolyBezierSegmentData', 'SegmentData', {
	init: function (initNumber) {
		if (initNumber > 0) {
			switch (initNumber) {
				case 1:
					this.init1.apply(this, arguments);
					break;
			}
			return;
		}
		$.ig.SegmentData.prototype.init.call(this);
		this.points(new $.ig.List$1($.ig.PointData.prototype.$type, 0));
	},
	init1: function (initNumber, poly) {
		$.ig.SegmentData.prototype.init.call(this);
		this.points(new $.ig.List$1($.ig.PointData.prototype.$type, 0));
		for (var i = 0; i < poly.points().count(); i++) {
			this.points().add($.ig.PointData.prototype.fromPoint(poly.points().__inner[i]));
		}
	},
	/*<BeginProperty Name="System.String Infragistics.PolyBezierSegmentData::Type()" />*/
	type: function () {
		return "PolyBezierSpline";
	}
	/*<EndProperty Name="System.String Infragistics.PolyBezierSegmentData::Type()" />*/
	,
	_points: null,
	/*<BeginProperty Name="System.Collections.Generic.List Infragistics.PolyBezierSegmentData::Points()" />*/
	points: function (value) {
		if (arguments.length === 1) {
			this._points = value;
			return value;
		} else {
			return this._points;
		}
	}
	/*<EndProperty Name="System.Collections.Generic.List Infragistics.PolyBezierSegmentData::Points()" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.PolyBezierSegmentData::SerializeOverride()" />*/
	serializeOverride: function () {
		var sb = new $.ig.StringBuilder(0);
		sb.appendLine1("points: [");
		for (var i = 0; i < this.points().count(); i++) {
			if (i != 0) {
				sb.append5(", ");
			}
			sb.append5("{ x: " + this.points().__inner[i].x() + ", y: " + this.points().__inner[i].y() + "}");
		}
		sb.appendLine1("]");
		return sb.toString();
	}
	/*<EndMethod Name="System.String Infragistics.PolyBezierSegmentData::SerializeOverride()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.PolyBezierSegmentData::ScaleByViewport(Infragistics.RectData)" />*/
	scaleByViewport: function (viewport) {
		for (var i = 0; i < this.points().count(); i++) {
			this.points().__inner[i] = new $.ig.PointData((this.points().__inner[i].x() - viewport.left()) / viewport.width(), (this.points().__inner[i].y() - viewport.top()) / viewport.height());
		}
	}
	/*<EndMethod Name="System.Void Infragistics.PolyBezierSegmentData::ScaleByViewport(Infragistics.RectData)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.PolyBezierSegmentData::GetPointsOverride(System.Collections.Generic.List, Infragistics.GetPointsSettings)" />*/
	getPointsOverride: function (current, settings) {
		for (var i = 0; i < this.points().count(); i++) {
			current.add(new $.ig.PointData(this.points().__inner[i].x(), this.points().__inner[i].y()));
		}
	}
	/*<EndMethod Name="System.Void Infragistics.PolyBezierSegmentData::GetPointsOverride(System.Collections.Generic.List, Infragistics.GetPointsSettings)" />*/
	,
	$type: new $.ig.Type('PolyBezierSegmentData', $.ig.SegmentData.prototype.$type)
}, true);

/*<EndType Name="Infragistics.PolyBezierSegmentData" />*/

/*<BeginType Name="Infragistics.ArcSegmentData" />*/

$.ig.util.defType('ArcSegmentData', 'SegmentData', {
	init: function (initNumber) {
		if (initNumber > 0) {
			switch (initNumber) {
				case 1:
					this.init1.apply(this, arguments);
					break;
			}
			return;
		}
		$.ig.SegmentData.prototype.init.call(this);
		this.point(new $.ig.PointData(NaN, NaN));
		this.isLargeArc(false);
		this.isCounterClockwise(true);
		this.rotationAngle(0);
	},
	init1: function (initNumber, arc) {
		$.ig.SegmentData.prototype.init.call(this);
		this.point($.ig.PointData.prototype.fromPoint(arc.point()));
		this.isLargeArc(arc.isLargeArc());
		this.isCounterClockwise(arc.sweepDirection() == $.ig.SweepDirection.prototype.counterclockwise);
		this.sizeX(arc.size().width());
		this.sizeY(arc.size().height());
		this.rotationAngle(arc.rotationAngle());
	},
	/*<BeginProperty Name="System.String Infragistics.ArcSegmentData::Type()" />*/
	type: function () {
		return "Arc";
	}
	/*<EndProperty Name="System.String Infragistics.ArcSegmentData::Type()" />*/
	,
	_point: null,
	/*<BeginProperty Name="Infragistics.PointData Infragistics.ArcSegmentData::Point()" />*/
	point: function (value) {
		if (arguments.length === 1) {
			this._point = value;
			return value;
		} else {
			return this._point;
		}
	}
	/*<EndProperty Name="Infragistics.PointData Infragistics.ArcSegmentData::Point()" />*/
	,
	_isLargeArc: false,
	/*<BeginProperty Name="System.Boolean Infragistics.ArcSegmentData::IsLargeArc()" />*/
	isLargeArc: function (value) {
		if (arguments.length === 1) {
			this._isLargeArc = value;
			return value;
		} else {
			return this._isLargeArc;
		}
	}
	/*<EndProperty Name="System.Boolean Infragistics.ArcSegmentData::IsLargeArc()" />*/
	,
	_isCounterClockwise: false,
	/*<BeginProperty Name="System.Boolean Infragistics.ArcSegmentData::IsCounterClockwise()" />*/
	isCounterClockwise: function (value) {
		if (arguments.length === 1) {
			this._isCounterClockwise = value;
			return value;
		} else {
			return this._isCounterClockwise;
		}
	}
	/*<EndProperty Name="System.Boolean Infragistics.ArcSegmentData::IsCounterClockwise()" />*/
	,
	_sizeX: 0,
	/*<BeginProperty Name="System.Double Infragistics.ArcSegmentData::SizeX()" />*/
	sizeX: function (value) {
		if (arguments.length === 1) {
			this._sizeX = value;
			return value;
		} else {
			return this._sizeX;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.ArcSegmentData::SizeX()" />*/
	,
	_sizeY: 0,
	/*<BeginProperty Name="System.Double Infragistics.ArcSegmentData::SizeY()" />*/
	sizeY: function (value) {
		if (arguments.length === 1) {
			this._sizeY = value;
			return value;
		} else {
			return this._sizeY;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.ArcSegmentData::SizeY()" />*/
	,
	_rotationAngle: 0,
	/*<BeginProperty Name="System.Double Infragistics.ArcSegmentData::RotationAngle()" />*/
	rotationAngle: function (value) {
		if (arguments.length === 1) {
			this._rotationAngle = value;
			return value;
		} else {
			return this._rotationAngle;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.ArcSegmentData::RotationAngle()" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.ArcSegmentData::SerializeOverride()" />*/
	serializeOverride: function () {
		return "point: { x: " + this.point().x() + ", y: " + this.point().y() + " }, isLargeArc: " + (this.isLargeArc() ? "true" : "false") + ", isCounterClockwise: " + (this.isCounterClockwise() ? "true" : "false") + ", sizeX: " + this.sizeX() + ", sizeY: " + this.sizeY() + ", rotationAngle: " + this.rotationAngle();
	}
	/*<EndMethod Name="System.String Infragistics.ArcSegmentData::SerializeOverride()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ArcSegmentData::ScaleByViewport(Infragistics.RectData)" />*/
	scaleByViewport: function (viewport) {
		this.point(new $.ig.PointData((this.point().x() - viewport.left()) / viewport.width(), (this.point().y() - viewport.top()) / viewport.height()));
		this.sizeX(this.sizeX() / viewport.width());
		this.sizeY(this.sizeY() / viewport.height());
	}
	/*<EndMethod Name="System.Void Infragistics.ArcSegmentData::ScaleByViewport(Infragistics.RectData)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.ArcSegmentData::GetPointsOverride(System.Collections.Generic.List, Infragistics.GetPointsSettings)" />*/
	getPointsOverride: function (current, settings) {
		current.add(new $.ig.PointData(this.point().x(), this.point().y()));
	}
	/*<EndMethod Name="System.Void Infragistics.ArcSegmentData::GetPointsOverride(System.Collections.Generic.List, Infragistics.GetPointsSettings)" />*/
	,
	$type: new $.ig.Type('ArcSegmentData', $.ig.SegmentData.prototype.$type)
}, true);

/*<EndType Name="Infragistics.ArcSegmentData" />*/

/*<BeginType Name="Infragistics.AppearanceHelper" />*/

$.ig.util.defType('AppearanceHelper', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="Infragistics.ColorData Infragistics.AppearanceHelper::FromBrush(System.Windows.Media.Brush)" />*/
	fromBrush: function (b) {
		if (b == null) {
			return $.ig.ColorData.prototype.fromColor($.ig.Color.prototype.fromArgb(0, 0, 0, 0));
		}
		if ($.ig.Color.prototype.l_op_Equality_Lifted($.ig.util.toNullable($.ig.Color.prototype.$type, b.color()), $.ig.util.toNullable($.ig.Color.prototype.$type, null))) {
			return $.ig.ColorData.prototype.fromColor($.ig.Color.prototype.fromArgb(0, 0, 0, 0));
		}
		return $.ig.ColorData.prototype.fromColor(b.color());
	}
	/*<EndMethod Name="Infragistics.ColorData Infragistics.AppearanceHelper::FromBrush(System.Windows.Media.Brush)" />*/
	,
	/*<BeginMethod Name="Infragistics.BrushAppearanceData Infragistics.AppearanceHelper::FromBrushExtended(System.Windows.Media.Brush)" />*/
	fromBrushExtended: function (b) {
		if (b == null) {
			return null;
		}
		if (b._isGradient) {
			var linear = new $.ig.LinearGradientBrushAppearanceData();
			var inLinear = b;
			linear.startX(inLinear._startX);
			linear.startY(inLinear._startY);
			linear.endX(inLinear._endX);
			linear.endY(inLinear._endY);
			var $t = inLinear._gradientStops;
			for (var i = 0; i < $t.length; i++) {
				var stop = $t[i];
				var newStop = new $.ig.GradientStopAppearanceData();
				newStop.colorValue($.ig.ColorData.prototype.fromColor(stop.color()));
				newStop.offset(stop._offset);
				linear.stops().add(newStop);
			}
			return linear;
		} else if (b._isRadialGradient) {
			return null;
		} else {
			var solid = new $.ig.SolidBrushAppearanceData();
			solid.colorValue($.ig.ColorData.prototype.fromColor(b.color()));
			return solid;
		}
		return null;
	}
	/*<EndMethod Name="Infragistics.BrushAppearanceData Infragistics.AppearanceHelper::FromBrushExtended(System.Windows.Media.Brush)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.AppearanceHelper::GetCanvasLeft(System.Windows.FrameworkElement)" />*/
	getCanvasLeft: function (visual) {
		return visual.canvasLeft();
	}
	/*<EndMethod Name="System.Double Infragistics.AppearanceHelper::GetCanvasLeft(System.Windows.FrameworkElement)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.AppearanceHelper::GetCanvasTop(System.Windows.FrameworkElement)" />*/
	getCanvasTop: function (visual) {
		return visual.canvasTop();
	}
	/*<EndMethod Name="System.Double Infragistics.AppearanceHelper::GetCanvasTop(System.Windows.FrameworkElement)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.AppearanceHelper::GetCanvasZIndex(System.Windows.FrameworkElement)" />*/
	getCanvasZIndex: function (line) {
		return line.canvasZIndex();
	}
	/*<EndMethod Name="System.Int32 Infragistics.AppearanceHelper::GetCanvasZIndex(System.Windows.FrameworkElement)" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.List Infragistics.AppearanceHelper::FromPathData(System.Windows.Shapes.Path)" />*/
	fromPathData: function (path) {
		return $.ig.AppearanceHelper.prototype.fromGeometry(path.data());
	}
	/*<EndMethod Name="System.Collections.Generic.List Infragistics.AppearanceHelper::FromPathData(System.Windows.Shapes.Path)" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.List Infragistics.AppearanceHelper::FromLineData(System.Windows.Shapes.Line)" />*/
	fromLineData: function (line) {
		var lineGeometry = new $.ig.LineGeometry();
		lineGeometry.endPoint({ __x: line.x2(), __y: line.y2(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName });
		lineGeometry.startPoint({ __x: line.x1(), __y: line.y1(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName });
		return $.ig.AppearanceHelper.prototype.fromGeometry(lineGeometry);
	}
	/*<EndMethod Name="System.Collections.Generic.List Infragistics.AppearanceHelper::FromLineData(System.Windows.Shapes.Line)" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.List Infragistics.AppearanceHelper::FromGeometry(System.Windows.Media.Geometry)" />*/
	fromGeometry: function (data) {
		if (data == null) {
			return new $.ig.List$1($.ig.GeometryData.prototype.$type, 0);
		}
		if ($.ig.util.cast($.ig.GeometryGroup.prototype.$type, data) !== null) {
			var ret = new $.ig.List$1($.ig.GeometryData.prototype.$type, 0);
			var group = data;
			for (var i = 0; i < group.children().count(); i++) {
				var items = $.ig.AppearanceHelper.prototype.fromGeometry(group.children().__inner[i]);
				for (var j = 0; j < items.count(); j++) {
					ret.add(items.__inner[j]);
				}
			}
			return ret;
		} else if ($.ig.util.cast($.ig.PathGeometry.prototype.$type, data) !== null) {
			return $.ig.AppearanceHelper.prototype.fromPathGeometry(data);
		} else if ($.ig.util.cast($.ig.LineGeometry.prototype.$type, data) !== null) {
			return $.ig.AppearanceHelper.prototype.fromLineGeometry(data);
		} else if ($.ig.util.cast($.ig.RectangleGeometry.prototype.$type, data) !== null) {
			return $.ig.AppearanceHelper.prototype.fromRectangleGeometry(data);
		} else if ($.ig.util.cast($.ig.EllipseGeometry.prototype.$type, data) !== null) {
			return $.ig.AppearanceHelper.prototype.fromEllipseGeometry(data);
		} else {
			throw new $.ig.Error(1, "not supported");
		}
	}
	/*<EndMethod Name="System.Collections.Generic.List Infragistics.AppearanceHelper::FromGeometry(System.Windows.Media.Geometry)" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.List Infragistics.AppearanceHelper::FromEllipseGeometry(System.Windows.Media.EllipseGeometry)" />*/
	fromEllipseGeometry: function (ellipseGeometry) {
		var ret = new $.ig.List$1($.ig.GeometryData.prototype.$type, 0);
		var newData = new $.ig.EllipseGeometryData();
		ret.add(newData);
		newData.centerX(ellipseGeometry.center().__x);
		newData.centerY(ellipseGeometry.center().__y);
		newData.radiusX(ellipseGeometry.radiusX());
		newData.radiusY(ellipseGeometry.radiusY());
		return ret;
	}
	/*<EndMethod Name="System.Collections.Generic.List Infragistics.AppearanceHelper::FromEllipseGeometry(System.Windows.Media.EllipseGeometry)" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.List Infragistics.AppearanceHelper::FromRectangleGeometry(System.Windows.Media.RectangleGeometry)" />*/
	fromRectangleGeometry: function (rectangleGeometry) {
		var ret = new $.ig.List$1($.ig.GeometryData.prototype.$type, 0);
		var newData = new $.ig.RectangleGeometryData();
		ret.add(newData);
		newData.x(rectangleGeometry.rect().x());
		newData.y(rectangleGeometry.rect().y());
		newData.width(rectangleGeometry.rect().width());
		newData.height(rectangleGeometry.rect().height());
		return ret;
	}
	/*<EndMethod Name="System.Collections.Generic.List Infragistics.AppearanceHelper::FromRectangleGeometry(System.Windows.Media.RectangleGeometry)" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.List Infragistics.AppearanceHelper::FromLineGeometry(System.Windows.Media.LineGeometry)" />*/
	fromLineGeometry: function (lineGeometry) {
		var ret = new $.ig.List$1($.ig.GeometryData.prototype.$type, 0);
		var newData = new $.ig.LineGeometryData();
		ret.add(newData);
		newData.x1(lineGeometry.startPoint().__x);
		newData.y1(lineGeometry.startPoint().__y);
		newData.x2(lineGeometry.endPoint().__x);
		newData.y2(lineGeometry.endPoint().__y);
		return ret;
	}
	/*<EndMethod Name="System.Collections.Generic.List Infragistics.AppearanceHelper::FromLineGeometry(System.Windows.Media.LineGeometry)" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.List Infragistics.AppearanceHelper::FromPathGeometry(System.Windows.Media.PathGeometry)" />*/
	fromPathGeometry: function (pathGeometry) {
		var ret = new $.ig.List$1($.ig.GeometryData.prototype.$type, 0);
		var newData = new $.ig.PathGeometryData();
		ret.add(newData);
		for (var i = 0; i < pathGeometry.figures().count(); i++) {
			var figure = pathGeometry.figures().__inner[i];
			var f = new $.ig.PathFigureData(1, figure);
			newData.figures().add(f);
		}
		return ret;
	}
	/*<EndMethod Name="System.Collections.Generic.List Infragistics.AppearanceHelper::FromPathGeometry(System.Windows.Media.PathGeometry)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.AppearanceHelper::GetShapeAppearance(Infragistics.PrimitiveAppearanceData, System.Windows.Shapes.Shape)" />*/
	getShapeAppearance: function (appearance, path) {
		appearance.stroke($.ig.AppearanceHelper.prototype.fromBrush(path.__stroke));
		appearance.fill($.ig.AppearanceHelper.prototype.fromBrush(path.__fill));
		appearance.strokeExtended($.ig.AppearanceHelper.prototype.fromBrushExtended(path.__stroke));
		appearance.fillExtended($.ig.AppearanceHelper.prototype.fromBrushExtended(path.__fill));
		appearance.strokeThickness(path.strokeThickness());
		appearance.dashArray(null);
		if (path.strokeDashArray() != null) {
			appearance.dashArray(path.strokeDashArray().asArray());
		}
		appearance.dashCap(path.strokeDashCap());
		appearance.isVisible(path.__visibility == $.ig.Visibility.prototype.visible);
		appearance.opacity(path.__opacity);
		appearance.canvasLeft($.ig.AppearanceHelper.prototype.getCanvasLeft(path));
		appearance.canvasTop($.ig.AppearanceHelper.prototype.getCanvasTop(path));
		appearance.canvaZIndex($.ig.AppearanceHelper.prototype.getCanvasZIndex(path));
	}
	/*<EndMethod Name="System.Void Infragistics.AppearanceHelper::GetShapeAppearance(Infragistics.PrimitiveAppearanceData, System.Windows.Shapes.Shape)" />*/
	,
	/*<BeginMethod Name="Infragistics.LabelAppearanceData Infragistics.AppearanceHelper::FromTextElement(System.Windows.FrameworkElement, Infragistics.FontInfo)" />*/
	fromTextElement: function (frameworkElement, fontInfo) {
		var lad = new $.ig.LabelAppearanceData();
		var tb = frameworkElement;
		lad.text(tb.text());
		lad.labelBrush($.ig.AppearanceHelper.prototype.fromBrush(tb.fill()));
		lad.labelBrushExtended($.ig.AppearanceHelper.prototype.fromBrushExtended(tb.fill()));
		lad.visibility((tb.__visibility == $.ig.Visibility.prototype.visible) ? true : false);
		lad.opacity(tb.__opacity);
		if (fontInfo != null) {
			if (fontInfo.fontFamily() != null) {
				lad.fontFamily(fontInfo.fontFamily());
			}
			if (!$.ig.util.isNaN(fontInfo.fontSize())) {
				lad.fontSize(fontInfo.fontSize());
			}
			if (fontInfo.fontWeight() != null) {
				lad.fontWeight(fontInfo.fontWeight());
			}
			if (fontInfo.fontStyle() != null) {
				lad.fontStyle(fontInfo.fontStyle());
			}
			if (fontInfo.fontStretch() != null) {
				lad.fontStretch(fontInfo.fontStyle());
			}
		}
		var angle = 0;
		var xForm = tb.renderTransform();
		if ($.ig.util.cast($.ig.RotateTransform.prototype.$type, xForm) !== null) {
			var rt = $.ig.util.cast($.ig.RotateTransform.prototype.$type, xForm);
			angle = rt.angle();
		} else if ($.ig.util.cast($.ig.TransformGroup.prototype.$type, xForm) !== null) {
			var tg = $.ig.util.cast($.ig.TransformGroup.prototype.$type, xForm);
			var en = tg.children().getEnumerator();
			while (en.moveNext()) {
				var child = en.current();
				if ($.ig.util.cast($.ig.RotateTransform.prototype.$type, child) !== null) {
					var rt1 = $.ig.util.cast($.ig.RotateTransform.prototype.$type, child);
					angle = rt1.angle();
					break;
				}
			}
		}
		lad.angle(angle);
		return lad;
	}
	/*<EndMethod Name="Infragistics.LabelAppearanceData Infragistics.AppearanceHelper::FromTextElement(System.Windows.FrameworkElement, Infragistics.FontInfo)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.AppearanceHelper::SerializeItems(System.Text.StringBuilder, System.String, System.Collections.Generic.IEnumerable, System.Boolean)" />*/
	serializeItems: function (sb, name, items, isFirst) {
		if (items != null) {
			if (!isFirst) {
				sb.append5(", ");
			}
			sb.append5(name);
			sb.append5(": [");
			var addedFirst = false;
			var en = items.getEnumerator();
			while (en.moveNext()) {
				var item = en.current();
				if (addedFirst) {
					sb.appendLine1(", ");
				} else {
					addedFirst = true;
				}
				sb.append5(item.serialize());
			}
			sb.appendLine1("]");
			return true;
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.AppearanceHelper::SerializeItems(System.Text.StringBuilder, System.String, System.Collections.Generic.IEnumerable, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.AppearanceHelper::SerializeItem(System.Text.StringBuilder, System.String, Infragistics.IVisualData, System.Boolean)" />*/
	serializeItem: function (sb, name, item, isFirst) {
		if (item != null) {
			if (!isFirst) {
				sb.append5(", ");
			}
			sb.append5(name);
			sb.append5(": ");
			sb.appendLine1(item.serialize());
			return true;
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.AppearanceHelper::SerializeItem(System.Text.StringBuilder, System.String, Infragistics.IVisualData, System.Boolean)" />*/
	,
	$type: new $.ig.Type('AppearanceHelper', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.AppearanceHelper" />*/

/*<BeginType Name="Infragistics.Controls.CanvasRenderScheduler" />*/

$.ig.util.defType('CanvasRenderScheduler', 'Object', {
	init: function () {
		this.__sortDirty = true;
		this.__scheduled = false;
		this.__scheduledId = -1;
		$.ig.Object.prototype.init.call(this);
		this.targets(new $.ig.List$1($.ig.ISchedulableRender.prototype.$type, 0));
		this.dependsOn(new $.ig.List$1($.ig.CanvasRenderScheduler.prototype.$type, 0));
	},
	__sortDirty: false,
	_targets: null,
	/*<BeginProperty Name="System.Collections.Generic.List Infragistics.Controls.CanvasRenderScheduler::Targets()" />*/
	targets: function (value) {
		if (arguments.length === 1) {
			this._targets = value;
			return value;
		} else {
			return this._targets;
		}
	}
	/*<EndProperty Name="System.Collections.Generic.List Infragistics.Controls.CanvasRenderScheduler::Targets()" />*/
	,
	_dependsOn: null,
	/*<BeginProperty Name="System.Collections.Generic.List Infragistics.Controls.CanvasRenderScheduler::DependsOn()" />*/
	dependsOn: function (value) {
		if (arguments.length === 1) {
			this._dependsOn = value;
			return value;
		} else {
			return this._dependsOn;
		}
	}
	/*<EndProperty Name="System.Collections.Generic.List Infragistics.Controls.CanvasRenderScheduler::DependsOn()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasRenderScheduler::Register(Infragistics.Controls.ISchedulableRender)" />*/
	register: function (target) {
		this.__sortDirty = true;
		this.targets().add(target);
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasRenderScheduler::Register(Infragistics.Controls.ISchedulableRender)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasRenderScheduler::UnRegister(Infragistics.Controls.ISchedulableRender)" />*/
	unRegister: function (target) {
		this.__sortDirty = true;
		this.targets().remove(target);
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasRenderScheduler::UnRegister(Infragistics.Controls.ISchedulableRender)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasRenderScheduler::SortDirty()" />*/
	sortDirty: function () {
		this.__sortDirty = true;
		this.schedule();
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasRenderScheduler::SortDirty()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.Controls.CanvasRenderScheduler::IsScheduled()" />*/
	isScheduled: function () {
		return this.__scheduled;
	}
	/*<EndProperty Name="System.Boolean Infragistics.Controls.CanvasRenderScheduler::IsScheduled()" />*/
	,
	__scheduled: false,
	__scheduledId: 0,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasRenderScheduler::Schedule()" />*/
	schedule: function () {
		if (!this.__scheduled) {
			this.__scheduled = true;
			this.__scheduledId = window.setTimeout(this.refresh.runOn(this), 0);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasRenderScheduler::Schedule()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasRenderScheduler::Schedule(Infragistics.RenderingContext, Infragistics.RenderingContext)" />*/
	schedule1: function (context1, context2) {
		this.schedule();
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasRenderScheduler::Schedule(Infragistics.RenderingContext, Infragistics.RenderingContext)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasRenderScheduler::Flush()" />*/
	flush: function () {
		if (this.__scheduledId != -1) {
			window.clearTimeout(this.__scheduledId);
			this.__scheduledId = -1;
		}
		if (this.__scheduled) {
			this.refresh();
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasRenderScheduler::Flush()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasRenderScheduler::Refresh()" />*/
	refresh: function () {
		this.__scheduledId = -1;
		if (this.__scheduled) {
			this.__scheduled = false;
			if (this.dependsOn().count() > 0) {
				for (var i = 0; i < this.dependsOn().count(); i++) {
					this.dependsOn().__inner[i].flush();
				}
			}
			if (this.__sortDirty) {
				this.sortTargets();
			}
			this.renderTargets();
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasRenderScheduler::Refresh()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasRenderScheduler::RenderTargets()" />*/
	renderTargets: function () {
		if (this.isDisabled()) {
			return;
		}
		var first = true;
		for (var i = 0; i < this.targets().count(); i++) {
			var target = this.targets().__inner[i];
			target.preRender();
		}
		for (var i1 = 0; i1 < this.targets().count(); i1++) {
			var target1 = this.targets().__inner[i1];
			target1.undirty(first);
			first = false;
		}
		for (var i2 = 0; i2 < this.targets().count(); i2++) {
			var target2 = this.targets().__inner[i2];
			target2.postRender();
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasRenderScheduler::RenderTargets()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasRenderScheduler::SortTargets()" />*/
	sortTargets: function () {
		this.targets().sort2(function (o1, o2) {
			var t1 = o1;
			var t2 = o2;
			if (t1.index() < t2.index()) {
				return -1;
			}
			if (t1.index() > t2.index()) {
				return 1;
			}
			return 0;
		});
		this.__sortDirty = false;
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasRenderScheduler::SortTargets()" />*/
	,
	_isDisabled: false,
	/*<BeginProperty Name="System.Boolean Infragistics.Controls.CanvasRenderScheduler::IsDisabled()" />*/
	isDisabled: function (value) {
		if (arguments.length === 1) {
			this._isDisabled = value;
			return value;
		} else {
			return this._isDisabled;
		}
	}
	/*<EndProperty Name="System.Boolean Infragistics.Controls.CanvasRenderScheduler::IsDisabled()" />*/
	,
	$type: new $.ig.Type('CanvasRenderScheduler', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Controls.CanvasRenderScheduler" />*/

/*<BeginType Name="Infragistics.Controls.CanvasViewRenderer" />*/

$.ig.util.defType('CanvasViewRenderer', 'Object', {
	init: function () {
		this.__trackBounds = false;
		this.__validBounds = false;
		this.__globalAlpha = 1;
		$.ig.Object.prototype.init.call(this);
	},
	__context: null,
	/*<BeginMethod Name="System.Object Infragistics.Controls.CanvasViewRenderer::GetUnderlyingContext()" />*/
	getUnderlyingContext: function () {
		return this.__context;
	}
	/*<EndMethod Name="System.Object Infragistics.Controls.CanvasViewRenderer::GetUnderlyingContext()" />*/
	,
	/*<BeginProperty Name="System.Object Infragistics.Controls.CanvasViewRenderer::Data()" />*/
	data: function (value) {
		if (arguments.length === 1) {
			this.__context = value;
			return value;
		} else {
			return this.__context;
		}
	}
	/*<EndProperty Name="System.Object Infragistics.Controls.CanvasViewRenderer::Data()" />*/
	,
	/*<BeginMethod Name="System.Html.Media.Graphics.Gradient Infragistics.Controls.CanvasViewRenderer::CreateGradient(System.Windows.Media.LinearGradientBrush, System.Double, System.Double, System.Double, System.Double, System.Double, System.Boolean)" />*/
	createGradient1: function (brush, minX, minY, maxX, maxY, lineWidth, isStroke) {
		return $.ig.CanvasViewRenderer.prototype.createGradient(this.__context, brush, minX, minY, maxX, maxY, lineWidth, isStroke);
	}
	/*<EndMethod Name="System.Html.Media.Graphics.Gradient Infragistics.Controls.CanvasViewRenderer::CreateGradient(System.Windows.Media.LinearGradientBrush, System.Double, System.Double, System.Double, System.Double, System.Double, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Html.Media.Graphics.Gradient Infragistics.Controls.CanvasViewRenderer::CreateGradient(System.Html.Media.Graphics.CanvasContext2D, System.Windows.Media.LinearGradientBrush, System.Double, System.Double, System.Double, System.Double, System.Double, System.Boolean)" />*/
	createGradient: function (context, brush, minX, minY, maxX, maxY, lineWidth, isStroke) {
		var gradient;
		if (brush._useCustomDirection) {
			var _minX, _minY, _maxX, _maxY, ratio;
			ratio = maxX - minX;
			_minX = minX + brush._startX * ratio;
			_maxX = minX + brush._endX * ratio;
			ratio = maxY - minY;
			_minY = minY + brush._startY * ratio;
			_maxY = minY + brush._endY * ratio;
			if (isStroke) {
				var halfWidth = lineWidth / 2;
				_minX -= halfWidth;
				_maxX += halfWidth;
				_minY -= halfWidth;
				_maxY += halfWidth;
			}
			gradient = context.createLinearGradient(_minX, _minY, _maxX, _maxY);
		} else {
			if (isStroke) {
				var halfWidth1 = lineWidth / 2;
				minX -= halfWidth1;
				maxX += halfWidth1;
				minY -= halfWidth1;
				maxY += halfWidth1;
			}
			gradient = context.createLinearGradient(minX, minY, minX, maxY);
		}
		for (var i = 0; i < brush._gradientStops.length; i++) {
			var stop = brush._gradientStops[i];
			gradient.addColorStop(stop._offset, stop.__fill);
		}
		return gradient;
	}
	/*<EndMethod Name="System.Html.Media.Graphics.Gradient Infragistics.Controls.CanvasViewRenderer::CreateGradient(System.Html.Media.Graphics.CanvasContext2D, System.Windows.Media.LinearGradientBrush, System.Double, System.Double, System.Double, System.Double, System.Double, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::RenderRectangle(System.Windows.Shapes.Rectangle)" />*/
	renderRectangle: function (rectangle) {
		if (rectangle.__visibility != $.ig.Visibility.prototype.visible) {
			return;
		}
		var left = rectangle.canvasLeft();
		var top = rectangle.canvasTop();
		var width = rectangle.width();
		var height = rectangle.height();
		var radiusX = rectangle.radiusX();
		var radiusY = rectangle.radiusY();
		this.__context.beginPath();
		this.__context.globalAlpha = (rectangle.__opacity * this.__globalAlpha);
		if (radiusX > 0 || radiusY > 0) {
			if (radiusX > width / 2) {
				radiusX = (width / 2);
			}
			if (radiusY > height / 2) {
				radiusY = (height / 2);
			}
			var radius = Math.min(radiusX, radiusY);
			this.__context.beginPath();
			this.__context.moveTo(left + radius, top);
			this.__context.lineTo(left + width - radius, top);
			this.__context.arc(left + width - radius, top + radius, radius, (3 / 2 * Math.PI), 0, false);
			this.__context.lineTo(left + width, top + height - radius);
			this.__context.arc(left + width - radius, top + height - radius, radius, 0, (Math.PI / 2), false);
			this.__context.lineTo(left + radius, top + height);
			this.__context.arc(left + radius, top + height - radius, radius, (Math.PI / 2), Math.PI, false);
			this.__context.lineTo(left, top + radius);
			this.__context.arc(left + radius, top + radius, radius, Math.PI, (3 / 2 * Math.PI), false);
			this.__context.closePath();
		} else {
			this.__context.rect(left, top, width, height);
		}
		var fill = rectangle.__fill;
		var stroke = rectangle.__stroke;
		if (fill != null) {
			if (fill._isGradient && top == top && left == left) {
				this.__context.fillStyle = this.createGradient1(fill, left, top, left + width, top + height, rectangle.strokeThickness(), false);
			} else {
				this.__context.fillStyle = fill.__fill;
			}
			this.__context.fill();
		}
		if (stroke != null) {
			if (stroke._isGradient && top == top && left == left) {
				this.__context.strokeStyle = this.createGradient1(stroke, left, top, left + width, top + height, rectangle.strokeThickness(), true);
			} else {
				this.__context.strokeStyle = stroke.__fill;
			}
			this.__context.lineWidth = rectangle.strokeThickness();
			this.__context.stroke();
		}
		this.__context.globalAlpha = 1;
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::RenderRectangle(System.Windows.Shapes.Rectangle)" />*/
	,
	__minX: 0,
	__maxX: 0,
	__minY: 0,
	__maxY: 0,
	__trackBounds: false,
	__validBounds: false,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::RenderPath(System.Windows.Shapes.Path)" />*/
	renderPath: function (path) {
		if (path.__visibility != $.ig.Visibility.prototype.visible) {
			return;
		}
		this.__context.beginPath();
		if (path.__opacity < 1 || this.__globalAlpha < 1) {
			this.__context.globalAlpha = (path.__opacity * this.__globalAlpha);
		}
		var fill = path.__fill;
		var stroke = path.__stroke;
		this.__trackBounds = (fill != null && fill._isGradient) || (stroke != null && stroke._isGradient);
		if (this.__trackBounds) {
			this.__maxX = -1.7976931348623157E+308;
			this.__maxY = -1.7976931348623157E+308;
			this.__minX = 1.7976931348623157E+308;
			this.__minY = 1.7976931348623157E+308;
			this.__validBounds = false;
		}
		this.renderGeometry(path.data());
		if (fill != null) {
			if (fill._isGradient && this.__validBounds) {
				this.__context.fillStyle = this.createGradient1(fill, this.__minX, this.__minY, this.__maxX, this.__maxY, path.strokeThickness(), false);
			} else {
				this.__context.fillStyle = path.__fill.__fill;
			}
			this.__context.fill();
		}
		if (stroke != null) {
			if (stroke._isGradient && this.__validBounds) {
				this.__context.strokeStyle = this.createGradient1(stroke, this.__minX, this.__minY, this.__maxX, this.__maxY, path.strokeThickness(), true);
			} else {
				this.__context.strokeStyle = path.__stroke.__fill;
			}
			this.__context.lineWidth = path.strokeThickness();
			if (path.strokeThickness() > 0) {
				this.__context.stroke();
			}
		}
		if (path.__opacity < 1 || this.__globalAlpha < 1) {
			this.__context.globalAlpha = 1;
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::RenderPath(System.Windows.Shapes.Path)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::RenderGeometry(System.Windows.Media.Geometry)" />*/
	renderGeometry: function (geometry) {
		if (geometry == null) {
			return;
		}
		var type = geometry.type();
		switch (type) {
			case $.ig.GeometryType.prototype.group:
				for (var i = 0; i < (geometry).children().count(); i++) {
					this.renderGeometry((geometry).children().__inner[i]);
				}
				break;
			case $.ig.GeometryType.prototype.path:
				this.renderPathGeometry(geometry);
				break;
			case $.ig.GeometryType.prototype.line:
				this.renderLineGeometry(geometry);
				break;
			case $.ig.GeometryType.prototype.rectangle:
				this.renderRectangleGeometry(geometry);
				break;
			case $.ig.GeometryType.prototype.ellipse:
				this.renderEllipseGeometry(geometry);
				break;
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::RenderGeometry(System.Windows.Media.Geometry)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::RenderEllipseGeometry(System.Windows.Media.EllipseGeometry)" />*/
	renderEllipseGeometry: function (ellipseGeometry) {
		this.__context.moveTo(ellipseGeometry.center().__x, (ellipseGeometry.center().__y - ellipseGeometry.radiusY()));
		this.__lastSegmentPoint = { __x: ellipseGeometry.center().__x, __y: ellipseGeometry.center().__y - ellipseGeometry.radiusY(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName };
		var a1 = (function () {
			var $ret = new $.ig.ArcSegment();
			$ret.point({ __x: ellipseGeometry.center().__x, __y: ellipseGeometry.center().__y + ellipseGeometry.radiusY(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName });
			$ret.isLargeArc(false);
			$ret.size(new $.ig.Size(1, ellipseGeometry.radiusX(), ellipseGeometry.radiusY()));
			return $ret;
		}());
		var a2 = (function () {
			var $ret = new $.ig.ArcSegment();
			$ret.point({ __x: ellipseGeometry.center().__x, __y: ellipseGeometry.center().__y - ellipseGeometry.radiusY(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName });
			$ret.isLargeArc(false);
			$ret.size(new $.ig.Size(1, ellipseGeometry.radiusX(), ellipseGeometry.radiusY()));
			return $ret;
		}());
		var oldTrack = this.__trackBounds;
		this.__trackBounds = false;
		this.renderArcSegment(a1);
		this.renderArcSegment(a2);
		this.__trackBounds = oldTrack;
		if (!this.__trackBounds) {
			return;
		}
		var minX = ellipseGeometry.center().__x - ellipseGeometry.radiusX();
		var maxX = ellipseGeometry.center().__y + ellipseGeometry.radiusX();
		var minY = ellipseGeometry.center().__x - ellipseGeometry.radiusY();
		var maxY = ellipseGeometry.center().__y + ellipseGeometry.radiusY();
		var currMaxX = this.__maxX;
		var currMaxY = this.__maxY;
		var currMinX = this.__minX;
		var currMinY = this.__minY;
		this.__minX = minX < currMinX ? minX : currMinX;
		this.__minY = minY < currMinY ? minY : currMinY;
		this.__maxX = maxX > currMaxX ? maxX : currMaxX;
		this.__maxY = maxY > currMaxY ? maxY : currMaxY;
		this.__validBounds = true;
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::RenderEllipseGeometry(System.Windows.Media.EllipseGeometry)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::RenderPathGeometry(System.Windows.Media.PathGeometry)" />*/
	renderPathGeometry: function (pathGeometry) {
		var figures = pathGeometry.figures();
		var count = figures.count();
		for (var i = 0; i < count; i++) {
			this.renderFigure(figures.__inner[i]);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::RenderPathGeometry(System.Windows.Media.PathGeometry)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::RenderFigure(System.Windows.Media.PathFigure)" />*/
	renderFigure: function (figure) {
		var p = figure == null ? null : figure.__startPoint;
		if ($.ig.Point.prototype.l_op_Equality(p, null)) {
			return;
		}
		var x = p.__x;
		var y = p.__y;
		this.__context.moveTo(x, y);
		if (this.__trackBounds) {
			var currMaxX = this.__maxX;
			var currMaxY = this.__maxY;
			var currMinX = this.__minX;
			var currMinY = this.__minY;
			this.__minX = x < currMinX ? x : currMinX;
			this.__minY = y < currMinY ? y : currMinY;
			this.__maxX = x > currMaxX ? x : currMaxX;
			this.__maxY = y > currMaxY ? y : currMaxY;
			this.__validBounds = true;
		}
		this.__lastSegmentPoint = p;
		var segments = figure.__segments;
		var count = segments.count();
		for (var i = 0; i < count; i++) {
			this.renderSegment(segments.__inner[i]);
		}
		if (figure.__isClosed) {
			this.__context.closePath();
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::RenderFigure(System.Windows.Media.PathFigure)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::RenderSegment(System.Windows.Media.PathSegment)" />*/
	renderSegment: function (segment) {
		var type = segment.type();
		switch (type) {
			case $.ig.PathSegmentType.prototype.line:
				this.renderLineSegment(segment);
				break;
			case $.ig.PathSegmentType.prototype.polyLine:
				this.renderPolyLineSegment(segment);
				break;
			case $.ig.PathSegmentType.prototype.arc:
				this.renderArcSegment(segment);
				break;
			case $.ig.PathSegmentType.prototype.bezier:
				this.renderBezierSegment(segment);
				break;
			case $.ig.PathSegmentType.prototype.polyBezier:
				this.renderPolyBezierSegment(segment);
				break;
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::RenderSegment(System.Windows.Media.PathSegment)" />*/
	,
	__lastSegmentPoint: null,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::UpdateBoundsFromBezier(System.Single, System.Single, System.Single, System.Single, System.Single, System.Single, System.Single, System.Single)" />*/
	updateBoundsFromBezier: function (x0, y0, x1, y1, x2, y2, x3, y3) {
		var delta = 1 / 50;
		var oneMinusT;
		var oneMinusT2;
		var oneMinusT3;
		var t2;
		var t3;
		var currX;
		var currY;
		var currMinX = this.__minX;
		var currMinY = this.__minY;
		var currMaxX = this.__maxX;
		var currMaxY = this.__maxY;
		for (var t = 0; t <= 1; t += delta) {
			oneMinusT = 1 - t;
			oneMinusT2 = oneMinusT * oneMinusT;
			oneMinusT3 = oneMinusT2 * oneMinusT;
			t2 = t * t;
			t3 = t2 * t;
			currX = oneMinusT3 * x0 + 3 * oneMinusT2 * t * x1 + 3 * oneMinusT * t2 * x2 + t3 * x3;
			currY = oneMinusT3 * y0 + 3 * oneMinusT2 * t * y1 + 3 * oneMinusT * t2 * y2 + t3 * y3;
			currMinX = currX < currMinX ? currX : currMinX;
			currMinY = currY < currMinY ? currY : currMinY;
			currMaxX = currX > currMaxX ? currX : currMaxX;
			currMaxY = currY > currMaxY ? currY : currMaxY;
		}
		this.__minX = currMinX;
		this.__minY = currMinY;
		this.__maxX = currMaxX;
		this.__maxY = currMaxY;
		this.__validBounds = true;
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::UpdateBoundsFromBezier(System.Single, System.Single, System.Single, System.Single, System.Single, System.Single, System.Single, System.Single)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::RenderBezierSegment(System.Windows.Media.BezierSegment)" />*/
	renderBezierSegment: function (segment) {
		this.__context.bezierCurveTo(segment.point1().__x, segment.point1().__y, segment.point2().__x, segment.point2().__y, segment.point3().__x, segment.point3().__y);
		if (this.__trackBounds) {
			this.updateBoundsFromBezier(this.__lastSegmentPoint.__x, this.__lastSegmentPoint.__y, segment.point1().__x, segment.point1().__y, segment.point2().__x, segment.point2().__y, segment.point3().__x, segment.point3().__y);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::RenderBezierSegment(System.Windows.Media.BezierSegment)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::RenderPolyBezierSegment(System.Windows.Media.PolyBezierSegment)" />*/
	renderPolyBezierSegment: function (arcSegment) {
		var i = 0;
		var pointsCount = arcSegment.points().count();
		var points = arcSegment.points();
		var p1 = this.__lastSegmentPoint;
		var p2 = this.__lastSegmentPoint;
		var p3 = this.__lastSegmentPoint;
		var trackBounds = this.__trackBounds;
		while (i < pointsCount) {
			if (i + 1 < pointsCount && i + 2 < pointsCount) {
				p1 = points.__inner[i];
				p2 = points.__inner[i + 1];
				p3 = points.__inner[i + 2];
				this.__context.bezierCurveTo(p1.__x, p1.__y, p2.__x, p2.__y, p3.__x, p3.__y);
				if (trackBounds) {
					this.updateBoundsFromBezier(this.__lastSegmentPoint.__x, this.__lastSegmentPoint.__y, p1.__x, p1.__y, p2.__x, p2.__y, p3.__x, p3.__y);
					this.__lastSegmentPoint = p3;
				}
			}
			i = i + 3;
		}
		this.__lastSegmentPoint = p3;
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::RenderPolyBezierSegment(System.Windows.Media.PolyBezierSegment)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::UpdateBoundsFromArc(System.Windows.Point, System.Double, System.Double, System.Double, System.Boolean)" />*/
	updateBoundsFromArc: function (center, startAngle, endAngle, radius, isCounter) {
		var points = new $.ig.List$1($.ig.Point.prototype.$type, 0);
		points.add(center);
		points.add({ __x: center.__x + Math.cos(startAngle) * radius, __y: center.__y + Math.sin(startAngle) * radius, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName });
		points.add({ __x: center.__x + Math.cos(endAngle) * radius, __y: center.__y + Math.sin(endAngle) * radius, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName });
		var threeSixty = Math.PI * 2;
		var ninety = Math.PI / 2;
		var oneEighty = Math.PI;
		var twoSeventy = Math.PI * 3 / 2;
		while (startAngle < 0) {
			startAngle += threeSixty;
		}
		while (startAngle > threeSixty) {
			startAngle -= threeSixty;
		}
		while (endAngle < 0) {
			endAngle += threeSixty;
		}
		while (endAngle > threeSixty) {
			endAngle -= threeSixty;
		}
		if (isCounter) {
			if ((0 > endAngle && 0 < startAngle) || (threeSixty > endAngle && threeSixty < startAngle) || (startAngle < endAngle)) {
				points.add({ __x: center.__x + Math.cos(0) * radius, __y: center.__y + Math.sin(0) * radius, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName });
			}
			if (ninety > endAngle && ninety < startAngle) {
				points.add({ __x: center.__x + Math.cos(ninety) * radius, __y: center.__y + Math.sin(ninety) * radius, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName });
			}
			if (oneEighty > endAngle && oneEighty < startAngle) {
				points.add({ __x: center.__x + Math.cos(oneEighty) * radius, __y: center.__y + Math.sin(oneEighty) * radius, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName });
			}
			if (twoSeventy > endAngle && twoSeventy < startAngle) {
				points.add({ __x: center.__x + Math.cos(twoSeventy) * radius, __y: center.__y + Math.sin(twoSeventy) * radius, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName });
			}
		} else {
			if ((0 > startAngle && 0 < endAngle) || (threeSixty > startAngle && threeSixty < endAngle) || (endAngle < startAngle)) {
				points.add({ __x: center.__x + Math.cos(0) * radius, __y: center.__y + Math.sin(0) * radius, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName });
			}
			if (ninety > startAngle && ninety < endAngle) {
				points.add({ __x: center.__x + Math.cos(ninety) * radius, __y: center.__y + Math.sin(ninety) * radius, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName });
			}
			if (oneEighty > startAngle && oneEighty < endAngle) {
				points.add({ __x: center.__x + Math.cos(oneEighty) * radius, __y: center.__y + Math.sin(oneEighty) * radius, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName });
			}
			if (twoSeventy > startAngle && twoSeventy < endAngle) {
				points.add({ __x: center.__x + Math.cos(twoSeventy) * radius, __y: center.__y + Math.sin(twoSeventy) * radius, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName });
			}
		}
		var minX = 1.7976931348623157E+308;
		var minY = 1.7976931348623157E+308;
		var maxX = -1.7976931348623157E+308;
		var maxY = -1.7976931348623157E+308;
		for (var i = 0; i < points.count(); i++) {
			var point = points.__inner[i];
			minX = Math.min(minX, point.__x);
			minY = Math.min(minY, point.__y);
			maxX = Math.max(maxX, point.__x);
			maxY = Math.max(maxY, point.__y);
		}
		this.__minX = Math.min(this.__minX, minX);
		this.__minY = Math.min(this.__minY, minY);
		this.__maxX = Math.max(this.__maxX, maxX);
		this.__maxY = Math.max(this.__maxY, maxY);
		this.__validBounds = true;
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::UpdateBoundsFromArc(System.Windows.Point, System.Double, System.Double, System.Double, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::RenderArcSegment(System.Windows.Media.ArcSegment)" />*/
	renderArcSegment: function (arcSegment) {
		var startPoint = this.__lastSegmentPoint;
		var endPoint = arcSegment.point();
		if (arcSegment.size().width() != arcSegment.size().height()) {
			this.__context.save();
			this.__context.scale(arcSegment.size().width() / arcSegment.size().height(), 1);
			startPoint = { __x: startPoint.__x * (arcSegment.size().height() / arcSegment.size().width()), __y: startPoint.__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName };
			endPoint = { __x: endPoint.__x * (arcSegment.size().height() / arcSegment.size().width()), __y: endPoint.__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName };
		}
		var isCounter = arcSegment.sweepDirection() == $.ig.SweepDirection.prototype.counterclockwise;
		var center = $.ig.CoreGeometryUtil.prototype.getCenterFromArcSegment(startPoint, endPoint, arcSegment.size().height(), isCounter, arcSegment.isLargeArc());
		var startAngle = Math.atan2(startPoint.__y - center.__y, startPoint.__x - center.__x);
		var endAngle = Math.atan2(endPoint.__y - center.__y, endPoint.__x - center.__x);
		var lessThan180 = (Math.abs(endAngle - startAngle) < Math.PI);
		if (arcSegment.isLargeArc() == lessThan180) {
			if (startAngle < endAngle) {
				startAngle += 2 * Math.PI;
			} else {
				endAngle += 2 * Math.PI;
			}
		}
		if (!$.ig.util.isNaN(center.__x) && !$.ig.util.isNaN(center.__y) && !$.ig.util.isNaN(arcSegment.size().height()) && !$.ig.util.isNaN(startAngle) && !$.ig.util.isNaN(endAngle)) {
			this.__context.arc(center.__x, center.__y, arcSegment.size().height(), startAngle, endAngle, isCounter);
			if (this.__trackBounds) {
				this.updateBoundsFromArc(center, startAngle, endAngle, arcSegment.size().height(), isCounter);
			}
		}
		this.__lastSegmentPoint = arcSegment.point();
		if (arcSegment.size().width() != arcSegment.size().height()) {
			this.__context.restore();
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::RenderArcSegment(System.Windows.Media.ArcSegment)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::RenderLineSegment(System.Windows.Media.LineSegment)" />*/
	renderLineSegment: function (lineSegment) {
		var x = lineSegment.point().__x;
		var y = lineSegment.point().__y;
		this.__context.lineTo(x, y);
		this.__lastSegmentPoint = lineSegment.point();
		if (this.__trackBounds) {
			var currMaxX = this.__maxX;
			var currMaxY = this.__maxY;
			var currMinX = this.__minX;
			var currMinY = this.__minY;
			this.__minX = x < currMinX ? x : currMinX;
			this.__minY = y < currMinY ? y : currMinY;
			this.__maxX = x > currMaxX ? x : currMaxX;
			this.__maxY = y > currMaxY ? y : currMaxY;
			this.__validBounds = true;
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::RenderLineSegment(System.Windows.Media.LineSegment)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::RenderPolyLineSegment(System.Windows.Media.PolyLineSegment)" />*/
	renderPolyLineSegment: function (polyLineSegment) {
		var points = polyLineSegment.__points;
		var count = points.count();
		if (this.__trackBounds) {
			var currMinX = this.__minX;
			var currMinY = this.__minY;
			var currMaxX = this.__maxX;
			var currMaxY = this.__maxY;
			var x;
			var y;
			for (var i = 0; i < count; i++) {
				x = points.__inner[i].__x;
				y = points.__inner[i].__y;
				this.__context.lineTo(x, y);
				currMinX = x < currMinX ? x : currMinX;
				currMinY = y < currMinY ? y : currMinY;
				currMaxX = x > currMaxX ? x : currMaxX;
				currMaxY = y > currMaxY ? y : currMaxY;
			}
			this.__minX = currMinX;
			this.__minY = currMinY;
			this.__maxX = currMaxX;
			this.__maxY = currMaxY;
			this.__validBounds = true;
		} else {
			for (var i1 = 0; i1 < count; i1++) {
				this.__context.lineTo(points.__inner[i1].__x, points.__inner[i1].__y);
			}
		}
		this.__lastSegmentPoint = polyLineSegment.__points.__inner[count - 1];
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::RenderPolyLineSegment(System.Windows.Media.PolyLineSegment)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::RenderRectangleGeometry(System.Windows.Media.RectangleGeometry)" />*/
	renderRectangleGeometry: function (rectangleGeometry) {
		this.__context.rect(rectangleGeometry.rect().left(), rectangleGeometry.rect().top(), rectangleGeometry.rect().width(), rectangleGeometry.rect().height());
		if (this.__trackBounds) {
			var rect = rectangleGeometry.rect();
			var currMinX = this.__minX;
			var currMinY = this.__minY;
			var currMaxX = this.__maxX;
			var currMaxY = this.__maxY;
			var minX = rect.left();
			var maxX = rect.right();
			var minY = rect.top();
			var maxY = rect.bottom();
			this.__minX = minX < currMinX ? minX : currMinX;
			this.__minY = minY < currMinY ? minY : currMinY;
			this.__maxX = maxX > currMaxX ? maxX : currMaxX;
			this.__maxY = maxY > currMaxY ? maxY : currMaxY;
			this.__validBounds = true;
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::RenderRectangleGeometry(System.Windows.Media.RectangleGeometry)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::RenderLineGeometry(System.Windows.Media.LineGeometry)" />*/
	renderLineGeometry: function (lineGeometry) {
		this.__context.moveTo(lineGeometry.startPoint().__x, lineGeometry.startPoint().__y);
		this.__context.lineTo(lineGeometry.endPoint().__x, lineGeometry.endPoint().__y);
		if (this.__trackBounds) {
			var p1 = lineGeometry.startPoint();
			var p2 = lineGeometry.endPoint();
			var currMinX = this.__minX;
			var currMinY = this.__minY;
			var currMaxX = this.__maxX;
			var currMaxY = this.__maxY;
			var minX = p1.__x < p2.__x ? p1.__x : p2.__x;
			var maxX = p1.__x > p2.__x ? p1.__x : p2.__x;
			var minY = p1.__y < p2.__y ? p1.__y : p2.__y;
			var maxY = p1.__y > p2.__y ? p1.__y : p2.__y;
			this.__minX = minX < currMinX ? minX : currMinX;
			this.__minY = minY < currMinY ? minY : currMinY;
			this.__maxX = maxX > currMaxX ? maxX : currMaxX;
			this.__maxY = maxY > currMaxY ? maxY : currMaxY;
			this.__validBounds = true;
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::RenderLineGeometry(System.Windows.Media.LineGeometry)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::RenderTextBlock(System.Windows.Controls.TextBlock)" />*/
	renderTextBlock: function (tb) {
		if (tb.__visibility == $.ig.Visibility.prototype.visible) {
			if (tb.__opacity < 1 || this.__globalAlpha < 1) {
				this.__context.globalAlpha = (tb.__opacity * this.__globalAlpha);
			}
			this.__context.fillStyle = tb.fill().__fill;
			this.__context.textBaseline = "top";
			this.__context.fillText(tb.text(), tb.canvasLeft(), tb.canvasTop());
			if (tb.__opacity < 1 || this.__globalAlpha < 1) {
				this.__context.globalAlpha = 1;
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::RenderTextBlock(System.Windows.Controls.TextBlock)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::RenderTextBlockInRect(System.Windows.Controls.TextBlock, System.Windows.Rect, System.Double)" />*/
	renderTextBlockInRect: function (tb, rect, lineHeight) {
		if (tb.__visibility == $.ig.Visibility.prototype.visible) {
			if (tb.__opacity < 1 || this.__globalAlpha < 1) {
				this.__context.globalAlpha = (tb.__opacity * this.__globalAlpha);
			}
			var x = rect.left() + rect.width() / 2;
			var words = tb.text().split(' ');
			this.__context.fillStyle = tb.fill().__fill;
			this.__context.textBaseline = "top";
			this.__context.textAlign = "center";
			var maxWidth = rect.width();
			var maxHeight = rect.height();
			var currentY = rect.top();
			var line = "";
			for (var i = 0; i < words.length; i++) {
				var currentLine = line + words[i];
				var textMetrics = this.__context.measureText(currentLine);
				if (textMetrics.width > maxWidth) {
					this.__context.fillText(line, x, currentY);
					line = "";
					currentY = currentY + lineHeight;
				}
				line = line + words[i] + " ";
			}
			this.__context.fillText(line, x, currentY);
			if (tb.__opacity < 1 || this.__globalAlpha < 1) {
				this.__context.globalAlpha = 1;
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::RenderTextBlockInRect(System.Windows.Controls.TextBlock, System.Windows.Rect, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::RenderPolygon(System.Windows.Shapes.Polygon)" />*/
	renderPolygon: function (polygon) {
		if (polygon.points() == null || polygon.points().count() < 1) {
			return;
		}
		this.__context.beginPath();
		this.__context.globalAlpha = (polygon.__opacity * this.__globalAlpha);
		var points = polygon.points();
		var startPoint = points.__inner[0];
		var fill = polygon.__fill;
		var stroke = polygon.__stroke;
		this.__trackBounds = (fill != null && fill._isGradient) || (stroke != null && stroke._isGradient);
		if (this.__trackBounds) {
			var minX = 1.7976931348623157E+308;
			var maxX = -1.7976931348623157E+308;
			var minY = 1.7976931348623157E+308;
			var maxY = -1.7976931348623157E+308;
			var x = startPoint.__x;
			var y = startPoint.__y;
			minX = x < minX ? x : minX;
			minY = y < minY ? y : minY;
			maxX = x > maxX ? x : maxX;
			maxY = y > maxY ? y : maxY;
			this.__context.moveTo(x, y);
			for (var i = 1; i < points.count(); i++) {
				x = points.__inner[i].__x;
				y = points.__inner[i].__y;
				this.__context.lineTo(x, y);
				minX = x < minX ? x : minX;
				minY = y < minY ? y : minY;
				maxX = x > maxX ? x : maxX;
				maxY = y > maxY ? y : maxY;
			}
			this.__context.closePath();
			this.__minX = minX;
			this.__minY = minY;
			this.__maxX = maxX;
			this.__maxY = maxY;
		} else {
			this.__context.moveTo(startPoint.__x, startPoint.__y);
			for (var i1 = 1; i1 < points.count(); i1++) {
				this.__context.lineTo(points.__inner[i1].__x, points.__inner[i1].__y);
			}
			this.__context.closePath();
		}
		if (fill != null) {
			if (fill._isGradient) {
				this.__context.fillStyle = this.createGradient1(fill, this.__minX, this.__minY, this.__maxX, this.__maxY, polygon.strokeThickness(), false);
			} else {
				this.__context.fillStyle = fill.__fill;
			}
			this.__context.fill();
		}
		if (stroke != null) {
			if (stroke._isGradient) {
				this.__context.strokeStyle = this.createGradient1(stroke, this.__minX, this.__minY, this.__maxX, this.__maxY, polygon.strokeThickness(), true);
			} else {
				this.__context.strokeStyle = stroke.__fill;
			}
			this.__context.lineWidth = polygon.strokeThickness();
			this.__context.stroke();
		}
		this.__context.globalAlpha = 1;
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::RenderPolygon(System.Windows.Shapes.Polygon)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::RenderPolyline(System.Windows.Shapes.Polyline)" />*/
	renderPolyline: function (polyline) {
		if (polyline.points() == null || polyline.points().count() < 1) {
			return;
		}
		this.__context.beginPath();
		this.__context.globalAlpha = (polyline.__opacity * this.__globalAlpha);
		var points = polyline.points();
		var startPoint = points.__inner[0];
		var fill = polyline.__fill;
		var stroke = polyline.__stroke;
		this.__trackBounds = (fill != null && fill._isGradient) || (stroke != null && stroke._isGradient);
		if (this.__trackBounds) {
			var minX = 1.7976931348623157E+308;
			var maxX = -1.7976931348623157E+308;
			var minY = 1.7976931348623157E+308;
			var maxY = -1.7976931348623157E+308;
			var x = startPoint.__x;
			var y = startPoint.__y;
			minX = x < minX ? x : minX;
			minY = y < minY ? y : minY;
			maxX = x > maxX ? x : maxX;
			maxY = y > maxY ? y : maxY;
			this.__context.moveTo(x, y);
			for (var i = 1; i < points.count(); i++) {
				x = points.__inner[i].__x;
				y = points.__inner[i].__y;
				this.__context.lineTo(x, y);
				minX = x < minX ? x : minX;
				minY = y < minY ? y : minY;
				maxX = x > maxX ? x : maxX;
				maxY = y > maxY ? y : maxY;
			}
			this.__minX = minX;
			this.__minY = minY;
			this.__maxX = maxX;
			this.__maxY = maxY;
		} else {
			this.__context.moveTo(startPoint.__x, startPoint.__y);
			for (var i1 = 1; i1 < points.count(); i1++) {
				this.__context.lineTo(points.__inner[i1].__x, points.__inner[i1].__y);
			}
		}
		if (fill != null) {
			if (fill._isGradient) {
				this.__context.fillStyle = this.createGradient1(fill, this.__minX, this.__minY, this.__maxX, this.__maxY, polyline.strokeThickness(), false);
			} else {
				this.__context.fillStyle = fill.__fill;
			}
			this.__context.fill();
		}
		if (stroke != null) {
			if (stroke._isGradient) {
				this.__context.strokeStyle = this.createGradient1(stroke, this.__minX, this.__minY, this.__maxX, this.__maxY, polyline.strokeThickness(), true);
			} else {
				this.__context.strokeStyle = stroke.__fill;
			}
			this.__context.lineWidth = polyline.strokeThickness();
			this.__context.stroke();
		}
		this.__context.globalAlpha = 1;
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::RenderPolyline(System.Windows.Shapes.Polyline)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::RenderContentControl(System.Windows.DataTemplateRenderInfo, System.Windows.ContentControl)" />*/
	renderContentControl: function (renderInfo, marker) {
		if (marker.__visibility == $.ig.Visibility.prototype.collapsed) {
			return;
		}
		if ((marker.__opacity != 1 || this.__globalAlpha != 1) && !renderInfo.isHitTestRender) {
			this.__context.globalAlpha = (marker.__opacity * this.__globalAlpha);
		}
		var template = marker.contentTemplate();
		if (template != null && template.render() != null) {
			renderInfo.context = this.__context;
			renderInfo.xPosition = marker.canvasLeft();
			renderInfo.yPosition = marker.canvasTop();
			renderInfo.data = marker.content();
			template.render()(renderInfo);
		}
		this.__context.globalAlpha = 1;
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::RenderContentControl(System.Windows.DataTemplateRenderInfo, System.Windows.ContentControl)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::ApplyTransform(System.Windows.Media.Transform)" />*/
	applyTransform: function (transform) {
		if ($.ig.util.cast($.ig.TransformGroup.prototype.$type, transform) !== null) {
			var tg = transform;
			for (var i = tg.children().count() - 1; i >= 0; i--) {
				var tran = tg.children().__inner[i];
				this.applyTransform(tran);
			}
		} else if ($.ig.util.cast($.ig.TranslateTransform.prototype.$type, transform) !== null) {
			var trans = transform;
			this.__context.translate(trans.x(), trans.y());
		} else if ($.ig.util.cast($.ig.RotateTransform.prototype.$type, transform) !== null) {
			var rot = transform;
			var angle = rot.angle() * Math.PI / 180;
			var x = Math.cos(angle);
			var y = Math.sin(angle);
			var offsetX = rot.centerX() * (1 - x) + rot.centerY() * y;
			var offsetY = rot.centerY() * (1 - x) - rot.centerX() * y;
			this.__context.transform(x, y, y * -1, x, offsetX, offsetY);
		} else if ($.ig.util.cast($.ig.ScaleTransform.prototype.$type, transform) !== null) {
			var scale = transform;
			this.__context.transform(scale.scaleX(), 0, 0, scale.scaleY(), scale.centerX() - scale.scaleX() * scale.centerX(), scale.centerY() - scale.scaleY() * scale.centerY());
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::ApplyTransform(System.Windows.Media.Transform)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::RenderLine(System.Windows.Shapes.Line)" />*/
	renderLine: function (line) {
		if (line.__visibility != $.ig.Visibility.prototype.visible) {
			return;
		}
		this.__context.beginPath();
		this.__context.globalAlpha = (line.__opacity * this.__globalAlpha);
		this.__context.moveTo(line.x1(), line.y1());
		this.__context.lineTo(line.x2(), line.y2());
		if (this.__trackBounds) {
			this.__minX = 1.7976931348623157E+308;
			this.__maxX = -1.7976931348623157E+308;
			this.__minY = 1.7976931348623157E+308;
			this.__maxY = -1.7976931348623157E+308;
			var currMinX = this.__minX;
			var currMinY = this.__minY;
			var currMaxX = this.__maxX;
			var currMaxY = this.__maxY;
			var minX = line.x1() < line.x2() ? line.x1() : line.x2();
			var maxX = line.x1() > line.x2() ? line.x1() : line.x2();
			var minY = line.y1() < line.y2() ? line.y1() : line.y2();
			var maxY = line.y1() > line.y2() ? line.y1() : line.y2();
			this.__minX = minX < currMinX ? minX : currMinX;
			this.__minY = minY < currMinY ? minY : currMinY;
			this.__maxX = maxX > currMaxX ? maxX : currMaxX;
			this.__maxY = maxY > currMaxY ? maxY : currMaxY;
		}
		var fill = line.__fill;
		var stroke = line.__stroke;
		if (fill != null) {
			if (fill._isGradient) {
				this.__context.fillStyle = this.createGradient1(fill, this.__minX, this.__minY, this.__maxX, this.__maxX, line.strokeThickness(), false);
			} else {
				this.__context.fillStyle = fill.__fill;
			}
			this.__context.fill();
		}
		if (stroke != null) {
			if (stroke._isGradient) {
				this.__context.strokeStyle = this.createGradient1(stroke, this.__minX, this.__minY, this.__maxX, this.__maxX, line.strokeThickness(), true);
			} else {
				this.__context.strokeStyle = line.__stroke.__fill;
			}
			this.__context.lineWidth = line.strokeThickness();
			this.__context.stroke();
		}
		this.__context.globalAlpha = 1;
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::RenderLine(System.Windows.Shapes.Line)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::SetRectangleClip(System.Windows.Rect)" />*/
	setRectangleClip: function (rect) {
		this.__context.beginPath();
		this.__context.rect(rect.left(), rect.top(), rect.width(), rect.height());
		this.__context.clip();
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::SetRectangleClip(System.Windows.Rect)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::Save()" />*/
	save: function () {
		this.__context.save();
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::Save()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::Restore()" />*/
	restore: function () {
		this.__context.restore();
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::Restore()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::Scale(System.Double, System.Double)" />*/
	scale: function (x, y) {
		this.__context.scale(x, y);
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::Scale(System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::Translate(System.Double, System.Double)" />*/
	translate: function (x, y) {
		this.__context.translate(x, y);
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::Translate(System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::ClearRectangle(System.Double, System.Double, System.Double, System.Double)" />*/
	clearRectangle: function (left, top, width, height) {
		this.__context.clearRect(left, top, width, height);
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::ClearRectangle(System.Double, System.Double, System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::DrawImage(System.Object, System.Double, System.Double, System.Double, System.Double, System.Double)" />*/
	drawImage: function (image, opacity, left, top, width, height) {
		if (opacity != 1) {
			this.__context.globalAlpha = (opacity * this.__globalAlpha);
		}
		this.__context.drawImage(image, left, top, width, height);
		if (opacity != 1) {
			this.__context.globalAlpha = 1;
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::DrawImage(System.Object, System.Double, System.Double, System.Double, System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::DrawImage(System.Object, System.Double, System.Double, System.Double, System.Double, System.Double, System.Double, System.Double, System.Double, System.Double)" />*/
	drawImage1: function (image, opacity, sourceLeft, sourceTop, sourceWidth, sourceHeight, left, top, width, height) {
		if (opacity != 1) {
			this.__context.globalAlpha = (opacity * this.__globalAlpha);
		}
		this.__context.drawImage(image, sourceLeft, sourceTop, sourceWidth, sourceHeight, left, top, width, height);
		if (opacity != 1) {
			this.__context.globalAlpha = 1;
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::DrawImage(System.Object, System.Double, System.Double, System.Double, System.Double, System.Double, System.Double, System.Double, System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name=" Infragistics.Controls.CanvasViewRenderer::GetPixelAt(System.Int32, System.Int32)" />*/
	getPixelAt: function (x, y) {
		var data = this.__context.getImageData(x, y, 1, 1);
		var ret = new Array(4);
		ret[0] = data.data[0];
		ret[1] = data.data[1];
		ret[2] = data.data[2];
		ret[3] = data.data[3];
		return ret;
	}
	/*<EndMethod Name=" Infragistics.Controls.CanvasViewRenderer::GetPixelAt(System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.String Infragistics.Controls.CanvasViewRenderer::GetFont()" />*/
	getFont: function () {
		return this.__context.font;
	}
	/*<EndMethod Name="System.String Infragistics.Controls.CanvasViewRenderer::GetFont()" />*/
	,
	/*<BeginMethod Name="Infragistics.FontInfo Infragistics.Controls.CanvasViewRenderer::GetFontInfo()" />*/
	getFontInfo: function () {
		return this.__fontInfo;
	}
	/*<EndMethod Name="Infragistics.FontInfo Infragistics.Controls.CanvasViewRenderer::GetFontInfo()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::SetFont(System.String)" />*/
	setFont: function (font) {
		if (this.__context.font != font) {
			this.__context.font = font;
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::SetFont(System.String)" />*/
	,
	__fontInfo: null,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::SetFontInfo(Infragistics.FontInfo)" />*/
	setFontInfo: function (font) {
		this.__fontInfo = font;
		if (this.__context.font != font.fontString()) {
			this.__context.font = font.fontString();
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::SetFontInfo(Infragistics.FontInfo)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.Controls.CanvasViewRenderer::MeasureTextWidth(System.String)" />*/
	measureTextWidth: function (text) {
		var metrics = this.__context.measureText(text);
		return metrics.width;
	}
	/*<EndMethod Name="System.Double Infragistics.Controls.CanvasViewRenderer::MeasureTextWidth(System.String)" />*/
	,
	__globalAlpha: 0,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::SetOpacity(System.Double)" />*/
	setOpacity: function (p) {
		this.__globalAlpha = p;
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::SetOpacity(System.Double)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::ApplyStyle(System.Windows.Shapes.Shape, System.Windows.Style)" />*/
	applyStyle: function (shape_, style_) {
		if (style_ == null) {
			return;
		}
		var fillColor_ = null;
		var strokeColor_ = null;
		var strokeThickness_ = NaN;
		var opacity_ = NaN;
		if (style_.fill) { fillColor_ = style_.fill };
		if (style_.stroke) { strokeColor_ = style_.stroke };
		if (style_.strokeThickness) { strokeThickness_ = style_.strokeThickness };
		if (style_.opacity) { opacity_ = style_.opacity };
		if (fillColor_ != null) {
			shape_.__fill = (function () {
				var $ret = new $.ig.Brush();
				$ret.fill(fillColor_);
				return $ret;
			}());
		}
		if (strokeColor_ != null) {
			shape_.__stroke = (function () {
				var $ret = new $.ig.Brush();
				$ret.fill(strokeColor_);
				return $ret;
			}());
		}
		if (!$.ig.util.isNaN(strokeThickness_)) {
			shape_.strokeThickness(strokeThickness_);
		}
		if (!$.ig.util.isNaN(opacity_)) {
			shape_.__opacity = opacity_;
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::ApplyStyle(System.Windows.Shapes.Shape, System.Windows.Style)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::EnableDropShadow(System.String, System.Double, System.Double, System.Double)" />*/
	enableDropShadow: function (color, blur, offsetX, offsetY) {
		this.__context.shadowColor = color;
		this.__context.shadowBlur = blur;
		this.__context.shadowOffsetX = offsetX;
		this.__context.shadowOffsetY = offsetY;
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::EnableDropShadow(System.String, System.Double, System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::DisableDropShadow()" />*/
	disableDropShadow: function () {
		this.__context.shadowColor = "rgba(0,0,0,0)";
		this.__context.shadowBlur = 0;
		this.__context.shadowOffsetX = 0;
		this.__context.shadowOffsetY = 0;
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasViewRenderer::DisableDropShadow()" />*/
	,
	$type: new $.ig.Type('CanvasViewRenderer', $.ig.Object.prototype.$type, [$.ig.IRenderer.prototype.$type])
}, true);

/*<EndType Name="Infragistics.Controls.CanvasViewRenderer" />*/

/*<BeginType Name="Infragistics.Controls.EventProxy" />*/

$.ig.util.defType('EventProxy', 'Object', {
	init: function () {
		this.__isInteractionDisabled = false;
		$.ig.Object.prototype.init.call(this);
	},
	onMouseWheel: null,
	onPinchStarted: null,
	onPinchDelta: null,
	onGestureCompleted: null,
	onZoomStarted: null,
	onZoomDelta: null,
	onZoomCompleted: null,
	onFlingStarted: null,
	onContactStarted: null,
	onDragStarted: null,
	onContactMoved: null,
	onDragDelta: null,
	onContactCompleted: null,
	onDragCompleted: null,
	onMouseLeave: null,
	onMouseOver: null,
	onMouseEnter: null,
	onMouseDown: null,
	onMouseUp: null,
	onDoubleTap: null,
	onHold: null,
	onKeyDown: null,
	onKeyUp: null,
	_viewport: null,
	/*<BeginProperty Name="System.Windows.Rect Infragistics.Controls.EventProxy::Viewport()" />*/
	viewport: function (value) {
		if (arguments.length === 1) {
			this._viewport = value;
			return value;
		} else {
			return this._viewport;
		}
	}
	/*<EndProperty Name="System.Windows.Rect Infragistics.Controls.EventProxy::Viewport()" />*/
	,
	_currentModifiers: 0,
	/*<BeginProperty Name="System.Windows.Input.ModifierKeys Infragistics.Controls.EventProxy::CurrentModifiers()" />*/
	currentModifiers: function (value) {
		if (arguments.length === 1) {
			this._currentModifiers = value;
			return value;
		} else {
			return this._currentModifiers;
		}
	}
	/*<EndProperty Name="System.Windows.Input.ModifierKeys Infragistics.Controls.EventProxy::CurrentModifiers()" />*/
	,
	_rightButton: false,
	/*<BeginProperty Name="System.Boolean Infragistics.Controls.EventProxy::RightButton()" />*/
	rightButton: function (value) {
		if (arguments.length === 1) {
			this._rightButton = value;
			return value;
		} else {
			return this._rightButton;
		}
	}
	/*<EndProperty Name="System.Boolean Infragistics.Controls.EventProxy::RightButton()" />*/
	,
	_shouldInteract: null,
	/*<BeginProperty Name="System.Func Infragistics.Controls.EventProxy::ShouldInteract()" />*/
	shouldInteract: function (value) {
		if (arguments.length === 1) {
			this._shouldInteract = value;
			return value;
		} else {
			return this._shouldInteract;
		}
	}
	/*<EndProperty Name="System.Func Infragistics.Controls.EventProxy::ShouldInteract()" />*/
	,
	/*<BeginMethod Name="Infragistics.Controls.EventProxy Infragistics.Controls.EventProxy::Clone()" />*/
	clone: function () {
	}
	/*<EndMethod Name="Infragistics.Controls.EventProxy Infragistics.Controls.EventProxy::Clone()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.EventProxy::Destroy()" />*/
	destroy: function () {
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.EventProxy::Destroy()" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.Controls.EventProxy::SupportsNonIsometricZoom()" />*/
	supportsNonIsometricZoom: function () {
		return false;
	}
	/*<EndProperty Name="System.Boolean Infragistics.Controls.EventProxy::SupportsNonIsometricZoom()" />*/
	,
	_originalEvent: null,
	/*<BeginProperty Name="System.Object Infragistics.Controls.EventProxy::OriginalEvent()" />*/
	originalEvent: function (value) {
		if (arguments.length === 1) {
			this._originalEvent = value;
			return value;
		} else {
			return this._originalEvent;
		}
	}
	/*<EndProperty Name="System.Object Infragistics.Controls.EventProxy::OriginalEvent()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Controls.EventProxy::RaiseOnMouseWheel(System.Windows.Point, System.Double)" />*/
	raiseOnMouseWheel: function (point, delta) {
		if (this.onMouseWheel != null && !this.isInteractionDisabled()) {
			return this.onMouseWheel(point, delta);
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Controls.EventProxy::RaiseOnMouseWheel(System.Windows.Point, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.EventProxy::RaiseOnPinchStarted(System.Windows.Point, System.Double)" />*/
	raiseOnPinchStarted: function (point, scale) {
		if (this.onPinchStarted != null && !this.isInteractionDisabled()) {
			this.onPinchStarted(point, scale);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.EventProxy::RaiseOnPinchStarted(System.Windows.Point, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.EventProxy::RaiseOnZoomStarted(System.Windows.Point, System.Double, System.Double, System.Double)" />*/
	raiseOnZoomStarted: function (point, scaleX, scaleY, isoScaleDelta) {
		if (this.onZoomStarted != null && !this.isInteractionDisabled()) {
			this.onZoomStarted(point, scaleX, scaleY, isoScaleDelta);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.EventProxy::RaiseOnZoomStarted(System.Windows.Point, System.Double, System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Controls.EventProxy::RaiseOnFlingStarted(System.Windows.Point, System.Double, System.Double)" />*/
	raiseOnFlingStarted: function (point, velocityX, velocityY) {
		if (this.onFlingStarted != null && !this.isInteractionDisabled()) {
			return this.onFlingStarted(point, velocityX, velocityY);
		}
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Controls.EventProxy::RaiseOnFlingStarted(System.Windows.Point, System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.EventProxy::RaiseOnPinchDelta(System.Windows.Point, System.Double)" />*/
	raiseOnPinchDelta: function (point, scale) {
		if (this.onPinchDelta != null && !this.isInteractionDisabled()) {
			this.onPinchDelta(point, scale);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.EventProxy::RaiseOnPinchDelta(System.Windows.Point, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.EventProxy::RaiseOnZoomDelta(System.Windows.Point, System.Double, System.Double, System.Double)" />*/
	raiseOnZoomDelta: function (point, scaleX, scaleY, isoScaleDelta) {
		if (this.onZoomDelta != null && !this.isInteractionDisabled()) {
			this.onZoomDelta(point, scaleX, scaleY, isoScaleDelta);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.EventProxy::RaiseOnZoomDelta(System.Windows.Point, System.Double, System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.EventProxy::RaiseOnZoomCompleted(System.Windows.Point, System.Double, System.Double, System.Double)" />*/
	raiseOnZoomCompleted: function (point, scaleX, scaleY, isoScaleDelta) {
		if (this.onZoomCompleted != null && !this.isInteractionDisabled()) {
			this.onZoomCompleted(point, scaleX, scaleY, isoScaleDelta);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.EventProxy::RaiseOnZoomCompleted(System.Windows.Point, System.Double, System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.EventProxy::RaiseOnGestureCompleted(System.Windows.Point, System.Double)" />*/
	raiseOnGestureCompleted: function (point, scale) {
		if (this.onGestureCompleted != null && !this.isInteractionDisabled()) {
			this.onGestureCompleted(point, scale);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.EventProxy::RaiseOnGestureCompleted(System.Windows.Point, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.EventProxy::RaiseOnContactStarted(System.Windows.Point, System.Boolean)" />*/
	raiseOnContactStarted: function (point, isFinger) {
		if (this.onContactStarted != null && !this.isInteractionDisabled()) {
			this.onContactStarted(point, isFinger);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.EventProxy::RaiseOnContactStarted(System.Windows.Point, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.EventProxy::RaiseOnDragStarted(System.Windows.Point)" />*/
	raiseOnDragStarted: function (point) {
		if (this.onDragStarted != null && !this.isInteractionDisabled()) {
			this.onDragStarted(point);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.EventProxy::RaiseOnDragStarted(System.Windows.Point)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.EventProxy::RaiseOnContactMoved(System.Windows.Point, System.Boolean)" />*/
	raiseOnContactMoved: function (point, isFinger) {
		if (this.onContactMoved != null && !this.isInteractionDisabled()) {
			this.onContactMoved(point, isFinger);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.EventProxy::RaiseOnContactMoved(System.Windows.Point, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.EventProxy::RaiseOnDragDelta(System.Windows.Point)" />*/
	raiseOnDragDelta: function (point) {
		if (this.onDragDelta != null && !this.isInteractionDisabled()) {
			this.onDragDelta(point);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.EventProxy::RaiseOnDragDelta(System.Windows.Point)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.EventProxy::RaiseOnContactCompleted(System.Windows.Point, System.Boolean)" />*/
	raiseOnContactCompleted: function (point, isFinger) {
		if (this.onContactCompleted != null && !this.isInteractionDisabled()) {
			this.onContactCompleted(point, isFinger);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.EventProxy::RaiseOnContactCompleted(System.Windows.Point, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.EventProxy::RaiseOnDragCompleted(System.Windows.Point)" />*/
	raiseOnDragCompleted: function (point) {
		if (this.onDragCompleted != null && !this.isInteractionDisabled()) {
			this.onDragCompleted(point);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.EventProxy::RaiseOnDragCompleted(System.Windows.Point)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.EventProxy::RaiseOnMouseLeave(System.Windows.Point)" />*/
	raiseOnMouseLeave: function (point) {
		if (this.onMouseLeave != null && !this.isInteractionDisabled()) {
			this.onMouseLeave(point);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.EventProxy::RaiseOnMouseLeave(System.Windows.Point)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.EventProxy::RaiseOnMouseOver(System.Windows.Point, System.Boolean, System.Boolean)" />*/
	raiseOnMouseOver: function (point, onMouseMove, isFinger) {
		if (this.onMouseOver != null && !this.isInteractionDisabled()) {
			this.onMouseOver(point, onMouseMove, isFinger);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.EventProxy::RaiseOnMouseOver(System.Windows.Point, System.Boolean, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.EventProxy::RaiseOnMouseEnter(System.Windows.Point)" />*/
	raiseOnMouseEnter: function (point) {
		if (this.onMouseEnter != null && !this.isInteractionDisabled()) {
			this.onMouseEnter(point);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.EventProxy::RaiseOnMouseEnter(System.Windows.Point)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.EventProxy::RaiseOnMouseDown(System.Windows.Point)" />*/
	raiseOnMouseDown: function (point) {
		if (this.onMouseDown != null && !this.isInteractionDisabled()) {
			this.onMouseDown(point);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.EventProxy::RaiseOnMouseDown(System.Windows.Point)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.EventProxy::RaiseOnMouseUp(System.Windows.Point)" />*/
	raiseOnMouseUp: function (point) {
		if (this.onMouseUp != null && !this.isInteractionDisabled()) {
			this.onMouseUp(point);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.EventProxy::RaiseOnMouseUp(System.Windows.Point)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Controls.EventProxy::RaiseOnKeyDown(System.Windows.Input.Key)" />*/
	raiseOnKeyDown: function (key) {
		if (this.onKeyDown != null && !this.isInteractionDisabled()) {
			return this.onKeyDown(key);
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Controls.EventProxy::RaiseOnKeyDown(System.Windows.Input.Key)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Controls.EventProxy::RaiseOnKeyUp(System.Windows.Input.Key)" />*/
	raiseOnKeyUp: function (key) {
		if (this.onKeyUp != null && !this.isInteractionDisabled()) {
			return this.onKeyUp(key);
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Controls.EventProxy::RaiseOnKeyUp(System.Windows.Input.Key)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.EventProxy::RaiseOnDoubleTap(System.Windows.Point)" />*/
	raiseOnDoubleTap: function (point) {
		if (this.onDoubleTap != null && !this.isInteractionDisabled()) {
			this.onDoubleTap(point);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.EventProxy::RaiseOnDoubleTap(System.Windows.Point)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.EventProxy::RaiseOnHold(System.Windows.Point)" />*/
	raiseOnHold: function (point) {
		if (this.onHold != null && !this.isInteractionDisabled()) {
			this.onHold(point);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.EventProxy::RaiseOnHold(System.Windows.Point)" />*/
	,
	/*<BeginMethod Name="System.Windows.Point Infragistics.Controls.EventProxy::GetSourceOffsets()" />*/
	getSourceOffsets: function () {
	}
	/*<EndMethod Name="System.Windows.Point Infragistics.Controls.EventProxy::GetSourceOffsets()" />*/
	,
	__isInteractionDisabled: false,
	/*<BeginProperty Name="System.Boolean Infragistics.Controls.EventProxy::IsInteractionDisabled()" />*/
	isInteractionDisabled: function (value) {
		if (arguments.length === 1) {
			this.__isInteractionDisabled = value;
			this.onIsInteractionDisabledChanged();
			return value;
		} else {
			return this.__isInteractionDisabled;
		}
	}
	/*<EndProperty Name="System.Boolean Infragistics.Controls.EventProxy::IsInteractionDisabled()" />*/
	,
	_deferredTouchStartMode: false,
	/*<BeginProperty Name="System.Boolean Infragistics.Controls.EventProxy::DeferredTouchStartMode()" />*/
	deferredTouchStartMode: function (value) {
		if (arguments.length === 1) {
			this._deferredTouchStartMode = value;
			return value;
		} else {
			return this._deferredTouchStartMode;
		}
	}
	/*<EndProperty Name="System.Boolean Infragistics.Controls.EventProxy::DeferredTouchStartMode()" />*/
	,
	_shouldInteractForDirection: null,
	/*<BeginProperty Name="System.Func Infragistics.Controls.EventProxy::ShouldInteractForDirection()" />*/
	shouldInteractForDirection: function (value) {
		if (arguments.length === 1) {
			this._shouldInteractForDirection = value;
			return value;
		} else {
			return this._shouldInteractForDirection;
		}
	}
	/*<EndProperty Name="System.Func Infragistics.Controls.EventProxy::ShouldInteractForDirection()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.EventProxy::OnIsInteractionDisabledChanged()" />*/
	onIsInteractionDisabledChanged: function () {
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.EventProxy::OnIsInteractionDisabledChanged()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.EventProxy::BindToSource(System.Object, System.String)" />*/
	bindToSource: function (source, sourceId) {
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.EventProxy::BindToSource(System.Object, System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.EventProxy::UnbindFromSource(System.Object, System.String)" />*/
	unbindFromSource: function (source, sourceId) {
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.EventProxy::UnbindFromSource(System.Object, System.String)" />*/
	,
	$type: new $.ig.Type('EventProxy', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Controls.EventProxy" />*/

/*<BeginType Name="Infragistics.Controls.BaseDOMEventProxy" />*/

$.ig.util.defType('BaseDOMEventProxy', 'EventProxy', {
	init: function () {
		this.__touchCaptureEnabled = false;
		this.__mouseX = 0;
		this.__mouseY = 0;
		this.__containerMouseX = 0;
		this.__containerMouseY = 0;
		this.__numTouches = 0;
		this.__suppressMouseEvents = false;
		this.__suppressId = $.ig.BaseDOMEventProxy.prototype.nullTimer;
		this.__touchStartDeferred = false;
		this.__mouseCaptured = false;
		$.ig.EventProxy.prototype.init.call(this);
	},
	_eventSource: null,
	/*<BeginProperty Name="System.Html.IDomWrapper Infragistics.Controls.BaseDOMEventProxy::EventSource()" />*/
	eventSource: function (value) {
		if (arguments.length === 1) {
			this._eventSource = value;
			return value;
		} else {
			return this._eventSource;
		}
	}
	/*<EndProperty Name="System.Html.IDomWrapper Infragistics.Controls.BaseDOMEventProxy::EventSource()" />*/
	,
	/*<BeginMethod Name="Infragistics.Controls.EventProxy Infragistics.Controls.BaseDOMEventProxy::Clone()" />*/
	clone: function () {
		var ret = new $.ig.DOMEventProxy(this.eventSource(), this.renderer());
		ret.deferredTouchStartMode(this.deferredTouchStartMode());
		ret.shouldInteractForDirection(this.shouldInteractForDirection());
		return ret;
	}
	/*<EndMethod Name="Infragistics.Controls.EventProxy Infragistics.Controls.BaseDOMEventProxy::Clone()" />*/
	,
	_renderer: null,
	/*<BeginProperty Name="System.Html.IDomRenderer Infragistics.Controls.BaseDOMEventProxy::Renderer()" />*/
	renderer: function (value) {
		if (arguments.length === 1) {
			this._renderer = value;
			return value;
		} else {
			return this._renderer;
		}
	}
	/*<EndProperty Name="System.Html.IDomRenderer Infragistics.Controls.BaseDOMEventProxy::Renderer()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.BaseDOMEventProxy::PreventDefault(System.Html.INormalizedEvent)" />*/
	preventDefault: function (e) {
		if (!this.isInteractionDisabled()) {
			if (this.isCancelable(e)) {
				e.preventDefault();
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.BaseDOMEventProxy::PreventDefault(System.Html.INormalizedEvent)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Controls.BaseDOMEventProxy::IsCancelable(System.Html.INormalizedEvent)" />*/
	isCancelable: function (e_) {
		return e_.originalEvent.cancelable || e_.originalEvent.cancelable == undefined;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Controls.BaseDOMEventProxy::IsCancelable(System.Html.INormalizedEvent)" />*/
	,
	__touchCaptureEnabled: false,
	/*<BeginMethod Name="System.Void Infragistics.Controls.BaseDOMEventProxy::EnableTouchCapture()" />*/
	enableTouchCapture: function () {
		var source_ = this.eventSource().getNativeElement();
		$.ig.BaseDOMEventProxy.prototype.grabTouches(source_);
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.BaseDOMEventProxy::EnableTouchCapture()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.BaseDOMEventProxy::GrabTouches(System.Object)" />*/
	grabTouches: function (source_) {
		if ($.ig.BaseDOMEventProxy.prototype.pointerEnabled) {
			source_.style.touchAction = 'none';
		} else {
			source_.style.msTouchAction = 'none';
		}
		source_.style.msUserSelect = 'none';
		source_.style.webkitTouchCallout = 'none';
		source_.style.webkitUserSelect = 'none';
		source_.style.khtmlUserSelect = 'none';
		source_.style.mozUserSelect = 'none';
		source_.style.userSelect = 'none';
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.BaseDOMEventProxy::GrabTouches(System.Object)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.BaseDOMEventProxy::DeferTouches(System.Object)" />*/
	deferTouches: function (source_) {
		if ($.ig.BaseDOMEventProxy.prototype.pointerEnabled) {
			source_.style.touchAction = 'auto';
		} else {
			source_.style.msTouchAction = 'auto';
		}
		source_.style.msUserSelect = 'auto';
		source_.style.webkitTouchCallout = 'none';
		source_.style.webkitUserSelect = 'auto';
		source_.style.khtmlUserSelect = 'auto';
		source_.style.mozUserSelect = 'auto';
		source_.style.userSelect = 'auto';
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.BaseDOMEventProxy::DeferTouches(System.Object)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.BaseDOMEventProxy::DisableTouchCapture()" />*/
	disableTouchCapture: function () {
		var source_ = this.eventSource().getNativeElement();
		$.ig.BaseDOMEventProxy.prototype.deferTouches(source_);
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.BaseDOMEventProxy::DisableTouchCapture()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.BaseDOMEventProxy::OnIsInteractionDisabledChanged()" />*/
	onIsInteractionDisabledChanged: function () {
		$.ig.EventProxy.prototype.onIsInteractionDisabledChanged.call(this);
		if (!this.isInteractionDisabled()) {
			this.enableTouchCapture();
		} else {
			this.disableTouchCapture();
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.BaseDOMEventProxy::OnIsInteractionDisabledChanged()" />*/
	,
	/*<BeginMethod Name="System.Single Infragistics.Controls.BaseDOMEventProxy::GetTridentVersion()" />*/
	getTridentVersion: function () {
		var ver_ = -1;
		var matchIE_ = /Trident\/([\d.]+)/;
		if (matchIE_.exec(navigator.userAgent) != null) {
			ver_ = parseFloat(RegExp.$1);
		}
		return ver_;
	}
	/*<EndMethod Name="System.Single Infragistics.Controls.BaseDOMEventProxy::GetTridentVersion()" />*/
	,
	/*<BeginMethod Name="System.Single Infragistics.Controls.BaseDOMEventProxy::GetEdgeVersion()" />*/
	getEdgeVersion: function () {
		var ver_ = -1;
		var matchIE_ = /Edge\/([\d.]+)/;
		if (matchIE_.exec(navigator.userAgent) != null) {
			ver_ = parseFloat(RegExp.$1);
		}
		return ver_;
	}
	/*<EndMethod Name="System.Single Infragistics.Controls.BaseDOMEventProxy::GetEdgeVersion()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.BaseDOMEventProxy::FixEvent(System.Html.INormalizedEvent)" />*/
	fixEvent: function (e_) {
		var ieHack = $.ig.BaseDOMEventProxy.prototype.tridentVersion >= 6;
		var oe_ = e_.originalEvent;
		if (((typeof e_.pageX == 'undefined') || ieHack) && oe_.clientX != null) {
			var od_ = e_.target.ownerDocument;
			var ed_ = od_ ? od_ : document;
			var doc_ = ed_.documentElement;
			var body_ = ed_.body;
			var clientX_ = oe_.clientX;
			var clientY_ = oe_.clientY;
			var scrollLeft_ = doc_ && doc_.scrollLeft || body_ && body_.scrollLeft || 0;
			var scrollTop_ = doc_ && doc_.scrollTop || body_ && body_.scrollTop || 0;
			var clientLeft_ = doc_ && doc_.clientLeft || body_ && body_.clientLeft || 0;
			var clientTop_ = doc_ && doc_.clientTop || body_ && body_.clientTop || 0;
			e_.pageX = clientX_ + (scrollLeft_ - clientLeft_);
			e_.pageY = clientY_ + (scrollTop_ - clientTop_);
		}
		if (!e_.pageX) {
			e_.pageX = e_.originalEvent.pageX;
		}
		if (!e_.pageY) {
			e_.pageY = e_.originalEvent.pageY;
		}
		if ((typeof e_.button == 'undefined') && (typeof oe_.button != 'undefined')) {
			e_.button = oe_.button;
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.BaseDOMEventProxy::FixEvent(System.Html.INormalizedEvent)" />*/
	,
	/*<BeginMethod Name="System.Windows.Rect Infragistics.Controls.BaseDOMEventProxy::GetOffset(System.Html.IDomWrapper)" />*/
	getOffset: function (source) {
		var ieHack = $.ig.BaseDOMEventProxy.prototype.tridentVersion >= 6;
		var source_ = source.getNativeElement();
		var d_ = source_.ownerDocument;
		var doc_ = d_ ? d_.documentElement : null;
		var z_ = doc_ ? doc_.msContentZoomFactor : null;
		var body_ = doc_.body;
		if (z_ && z_ > 1 || ieHack) {
			var rect_ = source_.getBoundingClientRect();
			var x_ = rect_.left;
			var y_ = rect_.top;
			var scrollLeft_ = doc_ && doc_.scrollLeft || body_ && body_.scrollLeft || 0;
			var scrollTop_ = doc_ && doc_.scrollTop || body_ && body_.scrollTop || 0;
			var clientLeft_ = doc_ && doc_.clientLeft || body_ && body_.clientLeft || 0;
			var clientTop_ = doc_ && doc_.clientTop || body_ && body_.clientTop || 0;
			var left = x_ + scrollLeft_ - clientLeft_;
			var top = y_ + scrollTop_ - clientTop_;
			return new $.ig.Rect(0, left, top, 0, 0);
		} else {
			var offset = source.getOffset();
			return new $.ig.Rect(0, offset.left, offset.top, 0, 0);
		}
	}
	/*<EndMethod Name="System.Windows.Rect Infragistics.Controls.BaseDOMEventProxy::GetOffset(System.Html.IDomWrapper)" />*/
	,
	__mouseX: 0,
	__mouseY: 0,
	__containerMouseX: 0,
	__containerMouseY: 0,
	__numTouches: 0,
	_mousePoint: null,
	/*<BeginProperty Name="System.Windows.Point Infragistics.Controls.BaseDOMEventProxy::MousePoint()" />*/
	mousePoint: function (value) {
		if (arguments.length === 1) {
			this._mousePoint = value;
			return value;
		} else {
			return this._mousePoint;
		}
	}
	/*<EndProperty Name="System.Windows.Point Infragistics.Controls.BaseDOMEventProxy::MousePoint()" />*/
	,
	_containerMousePoint: null,
	/*<BeginProperty Name="System.Windows.Point Infragistics.Controls.BaseDOMEventProxy::ContainerMousePoint()" />*/
	containerMousePoint: function (value) {
		if (arguments.length === 1) {
			this._containerMousePoint = value;
			return value;
		} else {
			return this._containerMousePoint;
		}
	}
	/*<EndProperty Name="System.Windows.Point Infragistics.Controls.BaseDOMEventProxy::ContainerMousePoint()" />*/
	,
	/*<BeginProperty Name="System.Int32 Infragistics.Controls.BaseDOMEventProxy::NumTouches()" />*/
	numTouches: function (value) {
		if (arguments.length === 1) {
			this.__numTouches = value;
			return value;
		} else {
			return this.__numTouches;
		}
	}
	/*<EndProperty Name="System.Int32 Infragistics.Controls.BaseDOMEventProxy::NumTouches()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.BaseDOMEventProxy::UpdateMousePosition(System.Html.INormalizedEvent)" />*/
	updateMousePosition: function (e) {
		this.originalEvent(e);
		$.ig.BaseDOMEventProxy.prototype.fixEvent(e);
		var offset = $.ig.BaseDOMEventProxy.prototype.getOffset(this.eventSource());
		this.__mouseX = e.pageX - offset.left();
		this.__mouseY = e.pageY - offset.top();
		this.__containerMouseX = this.__mouseX - this.viewport().left();
		this.__containerMouseY = this.__mouseY - this.viewport().top();
		this.mousePoint({ __x: this.__mouseX, __y: this.__mouseY, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName });
		this.containerMousePoint({ __x: this.__containerMouseX, __y: this.__containerMouseY, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName });
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.BaseDOMEventProxy::UpdateMousePosition(System.Html.INormalizedEvent)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.BaseDOMEventProxy::UpdateTouchPosition(System.Html.INormalizedEvent)" />*/
	updateTouchPosition: function (e_) {
		this.originalEvent(e_);
		$.ig.BaseDOMEventProxy.prototype.fixEvent(e_);
		if ($.ig.BaseDOMEventProxy.prototype.mSPointerEnabled || $.ig.BaseDOMEventProxy.prototype.pointerEnabled) {
			var pageX = e_.pageX;
			var pageY = e_.pageY;
			var offset = $.ig.BaseDOMEventProxy.prototype.getOffset(this.eventSource());
			this.__mouseX = pageX - offset.left();
			this.__mouseY = pageY - offset.top();
		} else {
			this.__numTouches = 0;
			if (!e_.originalEvent.targetTouches || e_.originalEvent.targetTouches.length < 1) { return; };
			this.__numTouches = e_.originalEvent.targetTouches.length;
			var pageX1 = e_.originalEvent.targetTouches[0].pageX;
			var pageY1 = e_.originalEvent.targetTouches[0].pageY;
			var offset1 = $.ig.BaseDOMEventProxy.prototype.getOffset(this.eventSource());
			this.__mouseX = pageX1 - offset1.left();
			this.__mouseY = pageY1 - offset1.top();
		}
		this.__containerMouseX = this.__mouseX - this.viewport().left();
		this.__containerMouseY = this.__mouseY - this.viewport().top();
		this.mousePoint({ __x: this.__mouseX, __y: this.__mouseY, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName });
		this.containerMousePoint({ __x: this.__containerMouseX, __y: this.__containerMouseY, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName });
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.BaseDOMEventProxy::UpdateTouchPosition(System.Html.INormalizedEvent)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.BaseDOMEventProxy::CanvasMouseScroll(System.Html.INormalizedEvent)" />*/
	canvasMouseScroll: function (e_) {
		this.updateModifiers(e_);
		if (this.shouldInteract()(this.mousePoint())) {
			var delta_ = 0;
			if (e_.wheelDelta) { delta_ = e_.wheelDelta/120; };
			if (e_.originalEvent && e_.originalEvent.wheelDelta) { delta_ = e_.originalEvent.wheelDelta/120; };
			if (e_.detail) { delta_ = -e_.detail/3; };
			if (e_.originalEvent && e_.originalEvent.detail) { delta_ = -e_.originalEvent.detail/3; };
			delta_ = delta_ / 10;
			var handled = this.raiseOnMouseWheel(this.containerMousePoint(), delta_);
			if (handled) {
				this.preventDefault(e_);
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.BaseDOMEventProxy::CanvasMouseScroll(System.Html.INormalizedEvent)" />*/
	,
	__suppressMouseEvents: false,
	__suppressId: 0,
	/*<BeginMethod Name="System.Void Infragistics.Controls.BaseDOMEventProxy::EndMouseSuppress()" />*/
	endMouseSuppress: function () {
		if (this.__suppressMouseEvents) {
			if (this.__suppressId == $.ig.BaseDOMEventProxy.prototype.nullTimer) {
				this.__suppressId = window.setTimeout(this.doEndSuppress.runOn(this), 500);
			} else {
				window.clearTimeout(this.__suppressId);
				this.__suppressId = $.ig.BaseDOMEventProxy.prototype.nullTimer;
				this.__suppressId = window.setTimeout(this.doEndSuppress.runOn(this), 500);
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.BaseDOMEventProxy::EndMouseSuppress()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.BaseDOMEventProxy::BeginMouseSuppress()" />*/
	beginMouseSuppress: function () {
		this.__suppressMouseEvents = true;
		if (this.__suppressId != $.ig.BaseDOMEventProxy.prototype.nullTimer) {
			window.clearTimeout(this.__suppressId);
			this.__suppressId = $.ig.BaseDOMEventProxy.prototype.nullTimer;
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.BaseDOMEventProxy::BeginMouseSuppress()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.BaseDOMEventProxy::DoEndSuppress()" />*/
	doEndSuppress: function () {
		this.__suppressMouseEvents = false;
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.BaseDOMEventProxy::DoEndSuppress()" />*/
	,
	_mouseIsOver: false,
	/*<BeginProperty Name="System.Boolean Infragistics.Controls.BaseDOMEventProxy::MouseIsOver()" />*/
	mouseIsOver: function (value) {
		if (arguments.length === 1) {
			this._mouseIsOver = value;
			return value;
		} else {
			return this._mouseIsOver;
		}
	}
	/*<EndProperty Name="System.Boolean Infragistics.Controls.BaseDOMEventProxy::MouseIsOver()" />*/
	,
	__touchStartDeferred: false,
	/*<BeginProperty Name="System.Boolean Infragistics.Controls.BaseDOMEventProxy::TouchStartDeferred()" />*/
	touchStartDeferred: function (value) {
		if (arguments.length === 1) {
			this.__touchStartDeferred = value;
			return value;
		} else {
			return this.__touchStartDeferred;
		}
	}
	/*<EndProperty Name="System.Boolean Infragistics.Controls.BaseDOMEventProxy::TouchStartDeferred()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.BaseDOMEventProxy::CanvasMouseLeave(System.Html.INormalizedEvent)" />*/
	canvasMouseLeave: function (e) {
		if (this.__touchStartDeferred || this.__suppressMouseEvents) {
			return;
		}
		this.updateMousePosition(e);
		if (this.mouseIsOver()) {
			this.mouseIsOver(false);
			this.raiseOnMouseLeave(this.containerMousePoint());
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.BaseDOMEventProxy::CanvasMouseLeave(System.Html.INormalizedEvent)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.BaseDOMEventProxy::CanvasMouseMove(System.Html.INormalizedEvent)" />*/
	canvasMouseMove: function (e) {
		if (this.__touchStartDeferred || this.__suppressMouseEvents) {
			return;
		}
		this.updateMousePosition(e);
		this.updateModifiers(e);
		var me = new $.ig.MouseEventArgs();
		me.position(this.mousePoint());
		if (this.shouldInteract()(this.mousePoint())) {
			if (!this.mouseIsOver()) {
				this.mouseIsOver(true);
				this.raiseOnMouseEnter(this.mousePoint());
			}
			this.raiseOnMouseOver(this.mousePoint(), true, false);
			this.raiseOnContactMoved(this.containerMousePoint(), false);
		} else if (this.mouseIsOver()) {
			this.canvasMouseLeave(e);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.BaseDOMEventProxy::CanvasMouseMove(System.Html.INormalizedEvent)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.BaseDOMEventProxy::SetFocus(System.Html.INormalizedEvent)" />*/
	setFocus: function (e) {
		this.eventSource().focus();
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.BaseDOMEventProxy::SetFocus(System.Html.INormalizedEvent)" />*/
	,
	__mouseCaptured: false,
	/*<BeginMethod Name="System.Void Infragistics.Controls.BaseDOMEventProxy::CanvasMouseDown(System.Html.INormalizedEvent)" />*/
	canvasMouseDown: function (e) {
		if (this.__touchStartDeferred || this.__suppressMouseEvents) {
			return;
		}
		this.setFocus(e);
		this.updateMousePosition(e);
		this.updateModifiers(e);
		if (this.shouldInteract()(this.mousePoint())) {
			this.__mouseCaptured = true;
			this.raiseOnMouseDown(this.mousePoint());
			this.raiseOnContactStarted(this.containerMousePoint(), false);
			this.preventDefault(e);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.BaseDOMEventProxy::CanvasMouseDown(System.Html.INormalizedEvent)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.BaseDOMEventProxy::WindowMouseUp(System.Html.INormalizedEvent)" />*/
	windowMouseUp: function (e) {
		if (this.__touchStartDeferred || this.__suppressMouseEvents) {
			return;
		}
		if (this.__mouseCaptured) {
			this.canvasMouseUp(e);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.BaseDOMEventProxy::WindowMouseUp(System.Html.INormalizedEvent)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.BaseDOMEventProxy::CanvasMouseUp(System.Html.INormalizedEvent)" />*/
	canvasMouseUp: function (e) {
		if (this.__touchStartDeferred || this.__suppressMouseEvents) {
			return;
		}
		this.updateModifiers(e);
		var shouldPrevent = this.shouldInteract()(this.mousePoint()) || this.__mouseCaptured || this.mouseIsOver();
		this.__mouseCaptured = false;
		this.raiseOnMouseUp(this.mousePoint());
		this.raiseOnContactCompleted(this.containerMousePoint(), false);
		if (shouldPrevent) {
			this.preventDefault(e);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.BaseDOMEventProxy::CanvasMouseUp(System.Html.INormalizedEvent)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.BaseDOMEventProxy::CanvasKeyDown(System.Html.INormalizedEvent)" />*/
	canvasKeyDown: function (e) {
		this.canvasKeyEvent(e, true);
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.BaseDOMEventProxy::CanvasKeyDown(System.Html.INormalizedEvent)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.BaseDOMEventProxy::CanvasKeyUp(System.Html.INormalizedEvent)" />*/
	canvasKeyUp: function (e) {
		this.canvasKeyEvent(e, false);
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.BaseDOMEventProxy::CanvasKeyUp(System.Html.INormalizedEvent)" />*/
	,
	/*<BeginMethod Name="System.Windows.Input.Key Infragistics.Controls.BaseDOMEventProxy::GetKeyOverride(System.Html.INormalizedEvent)" />*/
	getKeyOverride: function (e) {
		return $.ig.BaseDOMEventProxy.prototype.getKey(e);
	}
	/*<EndMethod Name="System.Windows.Input.Key Infragistics.Controls.BaseDOMEventProxy::GetKeyOverride(System.Html.INormalizedEvent)" />*/
	,
	/*<BeginMethod Name="System.Windows.Input.Key Infragistics.Controls.BaseDOMEventProxy::GetKey(System.Html.INormalizedEvent)" />*/
	getKey: function (e) {
		var downKey;
		switch (e.which) {
			case 33:
				downKey = $.ig.Key.prototype.pageUp;
				break;
			case 34:
				downKey = $.ig.Key.prototype.pageDown;
				break;
			case 36:
				downKey = $.ig.Key.prototype.home;
				break;
			case 37:
				downKey = $.ig.Key.prototype.left;
				break;
			case 38:
				downKey = $.ig.Key.prototype.up;
				break;
			case 39:
				downKey = $.ig.Key.prototype.right;
				break;
			case 40:
				downKey = $.ig.Key.prototype.down;
				break;
			case 9:
				downKey = $.ig.Key.prototype.tab;
				break;
			case 32:
				downKey = $.ig.Key.prototype.space;
				break;
			case 13:
				downKey = $.ig.Key.prototype.enter;
				break;
			case 27:
				downKey = $.ig.Key.prototype.escape;
				break;
			case 16:
				downKey = $.ig.Key.prototype.shift;
				break;
			case 17:
				downKey = $.ig.Key.prototype.ctrl;
				break;
			case 18:
				downKey = $.ig.Key.prototype.alt;
				break;
			case 8:
				downKey = $.ig.Key.prototype.back;
				break;
			case 35:
				downKey = $.ig.Key.prototype.end;
				break;
			case 45:
				downKey = $.ig.Key.prototype.insert;
				break;
			case 46:
				downKey = $.ig.Key.prototype.del;
				break;
			case 106:
				downKey = $.ig.Key.prototype.multiply;
				break;
			case 107:
				downKey = $.ig.Key.prototype.add;
				break;
			case 109:
				downKey = $.ig.Key.prototype.subtract;
				break;
			case 110:
				downKey = $.ig.Key.prototype.decimal;
				break;
			case 111:
				downKey = $.ig.Key.prototype.divide;
				break;
			case 220:
				downKey = $.ig.Key.prototype.oemPipe;
				break;
			case 192:
				downKey = $.ig.Key.prototype.oemTilde;
				break;
			case 191:
				downKey = $.ig.Key.prototype.oemQuestion;
				break;
			case 186:
				downKey = $.ig.Key.prototype.oemSemicolon;
				break;
			default:
				if (112 <= e.which && e.which <= 123) {
					downKey = ($.ig.Key.prototype.f1 + e.which - 112);
				} else if (65 <= e.which && e.which <= 90) {
					downKey = ($.ig.Key.prototype.a + e.which - 65);
				} else if (48 <= e.which && e.which <= 57) {
					downKey = ($.ig.Key.prototype.d0 + e.which - 48);
				} else if (96 <= e.which && e.which <= 105) {
					downKey = ($.ig.Key.prototype.numPad0 + e.which - 96);
				} else {
					downKey = $.ig.Key.prototype.none;
				}
				break;
		}
		return downKey;
	}
	/*<EndMethod Name="System.Windows.Input.Key Infragistics.Controls.BaseDOMEventProxy::GetKey(System.Html.INormalizedEvent)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.BaseDOMEventProxy::CanvasKeyEvent(System.Html.INormalizedEvent, System.Boolean)" />*/
	canvasKeyEvent: function (e, isDown) {
		var downKey = this.getKeyOverride(e);
		var send = downKey != $.ig.Key.prototype.none;
		this.updateModifiers(e);
		if (send) {
			var handled = false;
			if (isDown) {
				handled = this.raiseOnKeyDown(downKey);
			} else {
				handled = this.raiseOnKeyUp(downKey);
			}
			if (handled) {
				this.preventDefault(e);
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.BaseDOMEventProxy::CanvasKeyEvent(System.Html.INormalizedEvent, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.BaseDOMEventProxy::UpdateModifiers(System.Html.INormalizedEvent)" />*/
	updateModifiers: function (e) {
		this.originalEvent(e);
		this.currentModifiers($.ig.ModifierKeys.prototype.none);
		if (e.shiftKey) {
			this.currentModifiers(this.currentModifiers() | $.ig.ModifierKeys.prototype.shift);
		}
		if (e.altKey) {
			this.currentModifiers(this.currentModifiers() | $.ig.ModifierKeys.prototype.alt);
		}
		if (e.ctrlKey) {
			this.currentModifiers(this.currentModifiers() | $.ig.ModifierKeys.prototype.control);
		}
		this.rightButton(e.button == 2);
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.BaseDOMEventProxy::UpdateModifiers(System.Html.INormalizedEvent)" />*/
	,
	/*<BeginMethod Name="System.Windows.Point Infragistics.Controls.BaseDOMEventProxy::GetSourceOffsets()" />*/
	getSourceOffsets: function () {
		var offset = $.ig.BaseDOMEventProxy.prototype.getOffset(this.eventSource());
		var x = offset.left();
		var y = offset.top();
		return { __x: x, __y: y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName };
	}
	/*<EndMethod Name="System.Windows.Point Infragistics.Controls.BaseDOMEventProxy::GetSourceOffsets()" />*/
	,
	$type: new $.ig.Type('BaseDOMEventProxy', $.ig.EventProxy.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Controls.BaseDOMEventProxy" />*/

/*<BeginType Name="Infragistics.Controls.CanvasGestureDOMEventProxy" />*/

$.ig.util.defType('CanvasGestureDOMEventProxy', 'BaseDOMEventProxy', {
	__proxyID: 0,
	__eventNS: null,
	__gestureRecognizer: null,
	/*<BeginMethod Name="Infragistics.Controls.EventProxy Infragistics.Controls.CanvasGestureDOMEventProxy::Clone()" />*/
	clone: function () {
		var ret = new $.ig.CanvasGestureDOMEventProxy(this.eventSource(), this.renderer());
		ret.deferredTouchStartMode(this.deferredTouchStartMode());
		ret.shouldInteractForDirection(this.shouldInteractForDirection());
		return ret;
	}
	/*<EndMethod Name="Infragistics.Controls.EventProxy Infragistics.Controls.CanvasGestureDOMEventProxy::Clone()" />*/
	,
	_mGesture: null,
	/*<BeginProperty Name="System.Html.MSGesture Infragistics.Controls.CanvasGestureDOMEventProxy::MGesture()" />*/
	mGesture: function (value) {
		if (arguments.length === 1) {
			this._mGesture = value;
			return value;
		} else {
			return this._mGesture;
		}
	}
	/*<EndProperty Name="System.Html.MSGesture Infragistics.Controls.CanvasGestureDOMEventProxy::MGesture()" />*/
	,
	init: function (DOMEventSource, renderer) {
		this.__proxyID = 0;
		this.__eventNS = "";
		this.__unbinder = new $.ig.Dictionary$2(String, $.ig.List$1.prototype.$type.specialize($.ig.Action.prototype.$type), 0);
		this.__lastScale = 1;
		this.__dragCaptured = false;
		this.__pointerIds = new $.ig.List$1($.ig.Number.prototype.$type, 0);
		this.__pointerLocations = new $.ig.List$1($.ig.Point.prototype.$type, 0);
		this.__touches = new $.ig.List$1($.ig.TouchPointInfo.prototype.$type, 0);
		this.__dragStart = null;
		$.ig.BaseDOMEventProxy.prototype.init.call(this);
		this.renderer(renderer);
		this.__gestureRecognizer = new $.ig.TouchGestureRecognizer(new $.ig.DOMExecutionContext());
		var $t = this.__gestureRecognizer;
		$t.holdEnding = $.ig.Delegate.prototype.combine($t.holdEnding, this._gestureRecognizer_HoldEnding.runOn(this));
		var $t1 = this.__gestureRecognizer;
		$t1.holdStarting = $.ig.Delegate.prototype.combine($t1.holdStarting, this._gestureRecognizer_HoldStarting.runOn(this));
		var $t2 = this.__gestureRecognizer;
		$t2.zoomStarting = $.ig.Delegate.prototype.combine($t2.zoomStarting, this._gestureRecognizer_ZoomStarting.runOn(this));
		var $t3 = this.__gestureRecognizer;
		$t3.zoomEnding = $.ig.Delegate.prototype.combine($t3.zoomEnding, this._gestureRecognizer_ZoomEnding.runOn(this));
		var $t4 = this.__gestureRecognizer;
		$t4.panStarting = $.ig.Delegate.prototype.combine($t4.panStarting, this._gestureRecognizer_PanStarting.runOn(this));
		var $t5 = this.__gestureRecognizer;
		$t5.panEnding = $.ig.Delegate.prototype.combine($t5.panEnding, this._gestureRecognizer_PanEnding.runOn(this));
		var $t6 = this.__gestureRecognizer;
		$t6.manipulationStarting = $.ig.Delegate.prototype.combine($t6.manipulationStarting, this._gestureRecognizer_ManipulationStarting.runOn(this));
		var $t7 = this.__gestureRecognizer;
		$t7.manipulationChanging = $.ig.Delegate.prototype.combine($t7.manipulationChanging, this._gestureRecognizer_ManipulationChanging.runOn(this));
		var $t8 = this.__gestureRecognizer;
		$t8.manipulationEnding = $.ig.Delegate.prototype.combine($t8.manipulationEnding, this._gestureRecognizer_ManipulationEnding.runOn(this));
		var $t9 = this.__gestureRecognizer;
		$t9.doubleTapped = $.ig.Delegate.prototype.combine($t9.doubleTapped, this._gestureRecognizer_DoubleTapped.runOn(this));
		var $t10 = this.__gestureRecognizer;
		$t10.flingStarting = $.ig.Delegate.prototype.combine($t10.flingStarting, this._gestureRecognizer_FlingStarting.runOn(this));
		this.shouldInteractForDirection(function (p) { return true; });
		this.deferredTouchStartMode(true);
		$.ig.CanvasGestureDOMEventProxy.prototype.__proxyCount++;
		this.__proxyID = $.ig.CanvasGestureDOMEventProxy.prototype.__proxyCount;
		this.__eventNS = ".DOMProxy" + this.__proxyID.toString();
		this.currentModifiers($.ig.ModifierKeys.prototype.none);
		this.eventSource(DOMEventSource);
		$.ig.BaseDOMEventProxy.prototype.mSPointerEnabled = false;
		try {
			$.ig.BaseDOMEventProxy.prototype.mSPointerEnabled = window.navigator.msPointerEnabled && MSGesture !== undefined;
		}
		catch (e) {
		}
		$.ig.BaseDOMEventProxy.prototype.pointerEnabled = false;
		try {
			$.ig.BaseDOMEventProxy.prototype.pointerEnabled = window.navigator.pointerEnabled;
		}
		catch (e1) {
		}
		if ($.ig.BaseDOMEventProxy.prototype.mSPointerEnabled || $.ig.BaseDOMEventProxy.prototype.pointerEnabled) {
			this.deferredTouchStartMode(false);
		}
		$.ig.BaseDOMEventProxy.prototype.tridentVersion = this.getTridentVersion();
		$.ig.BaseDOMEventProxy.prototype.edgeVersion = this.getEdgeVersion();
		this.bindToSource(this.eventSource(), "");
		this.shouldInteract(function (p) { return true; });
	},
	/*<BeginMethod Name="System.Boolean Infragistics.Controls.CanvasGestureDOMEventProxy::_gestureRecognizer_FlingStarting(System.Object, Infragistics.Controls.TouchGestureEventArgs)" />*/
	_gestureRecognizer_FlingStarting: function (sender, args) {
		return this.raiseOnFlingStarted({ __x: args.centroidX(), __y: args.centroidY(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName }, args.velocityX(), args.velocityY());
	}
	/*<EndMethod Name="System.Boolean Infragistics.Controls.CanvasGestureDOMEventProxy::_gestureRecognizer_FlingStarting(System.Object, Infragistics.Controls.TouchGestureEventArgs)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasGestureDOMEventProxy::_gestureRecognizer_DoubleTapped(System.Object, Infragistics.Controls.TouchGestureEventArgs)" />*/
	_gestureRecognizer_DoubleTapped: function (sender, args) {
		this.raiseOnDoubleTap({ __x: args.centroidX(), __y: args.centroidY(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName });
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasGestureDOMEventProxy::_gestureRecognizer_DoubleTapped(System.Object, Infragistics.Controls.TouchGestureEventArgs)" />*/
	,
	/*<BeginProperty Name="System.Boolean Infragistics.Controls.CanvasGestureDOMEventProxy::SupportsNonIsometricZoom()" />*/
	supportsNonIsometricZoom: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean Infragistics.Controls.CanvasGestureDOMEventProxy::SupportsNonIsometricZoom()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasGestureDOMEventProxy::_gestureRecognizer_ManipulationEnding(System.Object, Infragistics.Controls.TouchGestureEventArgs)" />*/
	_gestureRecognizer_ManipulationEnding: function (sender, args) {
		if (this.__gestureRecognizer.currentState() == $.ig.TouchGestureState.prototype.none) {
			this.raiseOnGestureCompleted({ __x: args.centroidX(), __y: args.centroidY(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName }, args.scaleDeltaX());
			this.endMouseSuppress();
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasGestureDOMEventProxy::_gestureRecognizer_ManipulationEnding(System.Object, Infragistics.Controls.TouchGestureEventArgs)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasGestureDOMEventProxy::_gestureRecognizer_ManipulationChanging(System.Object, Infragistics.Controls.TouchGestureEventArgs)" />*/
	_gestureRecognizer_ManipulationChanging: function (sender, args) {
		if (this.__gestureRecognizer.currentState() == $.ig.TouchGestureState.prototype.zoom) {
			this.raiseOnPinchDelta({ __x: args.centroidX(), __y: args.centroidY(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName }, args.scaleDeltaX());
			this.raiseOnZoomDelta({ __x: args.centroidX(), __y: args.centroidY(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName }, args.scaleDeltaX(), args.scaleDeltaY(), args.isoScaleDelta());
		}
		if (this.__gestureRecognizer.currentState() == $.ig.TouchGestureState.prototype.pan || this.__gestureRecognizer.currentState() == $.ig.TouchGestureState.prototype.flinging) {
			this.raiseOnContactMoved({ __x: args.centroidX(), __y: args.centroidY(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName }, true);
			this.raiseOnDragDelta({ __x: args.centroidX(), __y: args.centroidY(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName });
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasGestureDOMEventProxy::_gestureRecognizer_ManipulationChanging(System.Object, Infragistics.Controls.TouchGestureEventArgs)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasGestureDOMEventProxy::_gestureRecognizer_ManipulationStarting(System.Object, Infragistics.Controls.TouchGestureEventArgs)" />*/
	_gestureRecognizer_ManipulationStarting: function (sender, args) {
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasGestureDOMEventProxy::_gestureRecognizer_ManipulationStarting(System.Object, Infragistics.Controls.TouchGestureEventArgs)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasGestureDOMEventProxy::_gestureRecognizer_PanEnding(System.Object, Infragistics.Controls.TouchGestureEventArgs)" />*/
	_gestureRecognizer_PanEnding: function (sender, args) {
		this.__dragCaptured = false;
		if (this.__gestureRecognizer.currentState() == $.ig.TouchGestureState.prototype.none) {
			this.raiseOnContactCompleted({ __x: args.centroidX(), __y: args.centroidY(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName }, true);
			this.raiseOnDragCompleted({ __x: args.centroidX(), __y: args.centroidY(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName });
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasGestureDOMEventProxy::_gestureRecognizer_PanEnding(System.Object, Infragistics.Controls.TouchGestureEventArgs)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasGestureDOMEventProxy::_gestureRecognizer_PanStarting(System.Object, Infragistics.Controls.TouchGestureEventArgs)" />*/
	_gestureRecognizer_PanStarting: function (sender, args) {
		this.raiseOnDragStarted({ __x: args.centroidX(), __y: args.centroidY(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName });
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasGestureDOMEventProxy::_gestureRecognizer_PanStarting(System.Object, Infragistics.Controls.TouchGestureEventArgs)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasGestureDOMEventProxy::_gestureRecognizer_ZoomEnding(System.Object, Infragistics.Controls.TouchGestureEventArgs)" />*/
	_gestureRecognizer_ZoomEnding: function (sender, args) {
		this.raiseOnZoomCompleted({ __x: args.centroidX(), __y: args.centroidY(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName }, args.scaleDeltaX(), args.scaleDeltaY(), args.isoScaleDelta());
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasGestureDOMEventProxy::_gestureRecognizer_ZoomEnding(System.Object, Infragistics.Controls.TouchGestureEventArgs)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasGestureDOMEventProxy::_gestureRecognizer_ZoomStarting(System.Object, Infragistics.Controls.TouchGestureEventArgs)" />*/
	_gestureRecognizer_ZoomStarting: function (sender, args) {
		this.raiseOnPinchStarted({ __x: args.centroidX(), __y: args.centroidY(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName }, 1);
		this.raiseOnZoomStarted({ __x: args.centroidX(), __y: args.centroidY(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName }, 1, 1, 1);
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasGestureDOMEventProxy::_gestureRecognizer_ZoomStarting(System.Object, Infragistics.Controls.TouchGestureEventArgs)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasGestureDOMEventProxy::_gestureRecognizer_HoldStarting(System.Object, Infragistics.Controls.TouchGestureEventArgs)" />*/
	_gestureRecognizer_HoldStarting: function (sender, args) {
		this.__dragCaptured = true;
		this.raiseOnHold({ __x: args.centroidX(), __y: args.centroidY(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName });
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasGestureDOMEventProxy::_gestureRecognizer_HoldStarting(System.Object, Infragistics.Controls.TouchGestureEventArgs)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasGestureDOMEventProxy::_gestureRecognizer_HoldEnding(System.Object, Infragistics.Controls.TouchGestureEventArgs)" />*/
	_gestureRecognizer_HoldEnding: function (sender, args) {
		if (this.__gestureRecognizer.currentState() == $.ig.TouchGestureState.prototype.none) {
			this.raiseOnContactCompleted({ __x: args.centroidX(), __y: args.centroidY(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName }, true);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasGestureDOMEventProxy::_gestureRecognizer_HoldEnding(System.Object, Infragistics.Controls.TouchGestureEventArgs)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Controls.CanvasGestureDOMEventProxy::IsPointerEnabled()" />*/
	isPointerEnabled: function () {
		$.ig.BaseDOMEventProxy.prototype.mSPointerEnabled = false;
		try {
			$.ig.BaseDOMEventProxy.prototype.mSPointerEnabled = window.navigator.msPointerEnabled && MSGesture !== undefined;
		}
		catch (e) {
		}
		$.ig.BaseDOMEventProxy.prototype.pointerEnabled = false;
		try {
			$.ig.BaseDOMEventProxy.prototype.pointerEnabled = window.navigator.pointerEnabled;
		}
		catch (e1) {
		}
		return $.ig.BaseDOMEventProxy.prototype.mSPointerEnabled || $.ig.BaseDOMEventProxy.prototype.pointerEnabled;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Controls.CanvasGestureDOMEventProxy::IsPointerEnabled()" />*/
	,
	__unbinder: null,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasGestureDOMEventProxy::BindToSourceOverride(System.Object, System.String, System.Collections.Generic.List)" />*/
	bindToSourceOverride: function (objSource, sourceID, toUnbind) {
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasGestureDOMEventProxy::BindToSourceOverride(System.Object, System.String, System.Collections.Generic.List)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasGestureDOMEventProxy::BindToSource(System.Object, System.String)" />*/
	bindToSource: function (objSource, sourceID) {
		var source = objSource;
		if (!this.renderer().supportsDOMEvents()) {
			return;
		}
		var ns = this.__eventNS + sourceID;
		var toUnbind = new $.ig.List$1($.ig.Action.prototype.$type, 0);
		this.__unbinder.add(ns, toUnbind);
		this.bindToSourceOverride(objSource, sourceID, toUnbind);
		if (!$.ig.BaseDOMEventProxy.prototype.mSPointerEnabled && !$.ig.BaseDOMEventProxy.prototype.pointerEnabled) {
			toUnbind.add(source.listen("mousemove", this.canvasMouseMove.runOn(this)));
			toUnbind.add(source.listen("mouseleave", this.canvasMouseLeave.runOn(this)));
			toUnbind.add(source.listen("mousedown", this.canvasMouseDown.runOn(this)));
			toUnbind.add(source.listen("mouseup", this.canvasMouseUp.runOn(this)));
			toUnbind.add(this.renderer().globalListen("window", "mouseup", this.windowMouseUp.runOn(this)));
		}
		toUnbind.add(source.listen("keydown", this.canvasKeyDown.runOn(this)));
		toUnbind.add(source.listen("keyup", this.canvasKeyUp.runOn(this)));
		if ($.ig.BaseDOMEventProxy.prototype.mSPointerEnabled || $.ig.BaseDOMEventProxy.prototype.pointerEnabled) {
			var source_ = this.eventSource().getNativeElement();
			$.ig.BaseDOMEventProxy.prototype.grabTouches(source_);
			var container = this.eventSource().getNativeElement();
			if ($.ig.BaseDOMEventProxy.prototype.pointerEnabled) {
				toUnbind.add(source.listen("pointerdown", this.canvasMSPointerDown.runOn(this)));
				toUnbind.add(source.listen("pointerup", this.canvasMSPointerUp.runOn(this)));
				toUnbind.add(source.listen("pointercancel", this.canvasMSPointerCancel.runOn(this)));
				toUnbind.add(source.listen("pointermove", this.canvasMSPointerMove.runOn(this)));
				toUnbind.add(source.listen("pointerout", this.canvasMSPointerOut.runOn(this)));
				toUnbind.add(source.listen("lostpointercapture", this.canvasMSLostPointerCapture.runOn(this)));
			} else {
				toUnbind.add(source.listen("MSPointerDown", this.canvasMSPointerDown.runOn(this)));
				toUnbind.add(source.listen("MSPointerUp", this.canvasMSPointerUp.runOn(this)));
				toUnbind.add(source.listen("MSPointerCancel", this.canvasMSPointerCancel.runOn(this)));
				toUnbind.add(source.listen("MSPointerMove", this.canvasMSPointerMove.runOn(this)));
				toUnbind.add(source.listen("MSPointerOut", this.canvasMSPointerOut.runOn(this)));
				toUnbind.add(source.listen("MSLostPointerCapture", this.canvasMSLostPointerCapture.runOn(this)));
			}
		}
		toUnbind.add(source.listen("DOMMouseScroll", this.canvasMouseScroll.runOn(this)));
		toUnbind.add(source.listen("mousewheel", this.canvasMouseScroll.runOn(this)));
		toUnbind.add(source.listen("touchstart", this.canvasTouchStart.runOn(this)));
		toUnbind.add(source.listen("touchmove", this.canvasTouchMove.runOn(this)));
		toUnbind.add(source.listen("touchend", this.canvasTouchEnd.runOn(this)));
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasGestureDOMEventProxy::BindToSource(System.Object, System.String)" />*/
	,
	__lastScale: 0,
	__touchContainerStart: null,
	__dragCaptured: false,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasGestureDOMEventProxy::CanvasMSPointerUp(System.Html.INormalizedEvent)" />*/
	canvasMSPointerUp: function (e_) {
		var isFinger = this.isFinger(e_);
		var index = this.__pointerIds.indexOf(e_.originalEvent.pointerId);
		if (index >= 0) {
			this.__pointerIds.removeAt(index);
			this.__pointerLocations.removeAt(index);
			this.numTouches(this.__pointerIds.count());
		}
		if (isFinger) {
			this.canvasTouchEnd(e_);
		} else {
			this.canvasMouseUp(e_);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasGestureDOMEventProxy::CanvasMSPointerUp(System.Html.INormalizedEvent)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasGestureDOMEventProxy::CanvasMSLostPointerCapture(System.Html.INormalizedEvent)" />*/
	canvasMSLostPointerCapture: function (e_) {
		var isFinger = this.isFinger(e_);
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasGestureDOMEventProxy::CanvasMSLostPointerCapture(System.Html.INormalizedEvent)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasGestureDOMEventProxy::CanvasMSPointerCancel(System.Html.INormalizedEvent)" />*/
	canvasMSPointerCancel: function (e_) {
		var isFinger = this.isFinger(e_);
		var index = this.__pointerIds.indexOf(e_.originalEvent.pointerId);
		if (index >= 0) {
			this.__pointerIds.removeAt(index);
			this.__pointerLocations.removeAt(index);
			this.numTouches(this.__pointerIds.count());
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasGestureDOMEventProxy::CanvasMSPointerCancel(System.Html.INormalizedEvent)" />*/
	,
	__pointerIds: null,
	__pointerLocations: null,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasGestureDOMEventProxy::CanvasMSPointerDown(System.Html.INormalizedEvent)" />*/
	canvasMSPointerDown: function (e_) {
		var isFinger = this.isFinger(e_);
		$.ig.BaseDOMEventProxy.prototype.fixEvent(e_);
		this.__pointerIds.add(e_.originalEvent.pointerId);
		this.__pointerLocations.add({ __x: e_.pageX, __y: e_.pageY, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName });
		this.numTouches(this.__pointerIds.count());
		if (isFinger) {
			this.updateTouchPosition(e_);
		} else {
			this.updateMousePosition(e_);
		}
		this.updateModifiers(e_);
		if (this.shouldInteract()(this.mousePoint())) {
			var eventSource_ = this.eventSource().getNativeElement();
			if ($.ig.BaseDOMEventProxy.prototype.pointerEnabled) {
				eventSource_.setPointerCapture(e_.originalEvent.pointerId);
			} else {
				eventSource_.msSetPointerCapture(e_.originalEvent.pointerId);
			}
		}
		if (isFinger) {
			this.canvasTouchStart(e_);
		} else {
			this.canvasMouseDown(e_);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasGestureDOMEventProxy::CanvasMSPointerDown(System.Html.INormalizedEvent)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Controls.CanvasGestureDOMEventProxy::IsFinger(System.Html.INormalizedEvent)" />*/
	isFinger: function (e_) {
		var pointerEvent_ = e_.originalEvent;
		var isFinger = false;
		if ($.ig.BaseDOMEventProxy.prototype.pointerEnabled) {
			isFinger = pointerEvent_.pointerType == 'touch';
		} else {
			isFinger = pointerEvent_.pointerType == pointerEvent_.MSPOINTER_TYPE_TOUCH;
		}
		return isFinger;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Controls.CanvasGestureDOMEventProxy::IsFinger(System.Html.INormalizedEvent)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasGestureDOMEventProxy::CanvasMSPointerMove(System.Html.INormalizedEvent)" />*/
	canvasMSPointerMove: function (e_) {
		var isFinger = this.isFinger(e_);
		$.ig.BaseDOMEventProxy.prototype.fixEvent(e_);
		var index = this.__pointerIds.indexOf(e_.originalEvent.pointerId);
		if (index >= 0) {
			this.__pointerLocations.__inner[index] = { __x: e_.pageX, __y: e_.pageY, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName };
		}
		if (isFinger) {
			this.canvasTouchMove(e_);
		} else {
			this.canvasMouseMove(e_);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasGestureDOMEventProxy::CanvasMSPointerMove(System.Html.INormalizedEvent)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasGestureDOMEventProxy::CanvasMSPointerOut(System.Html.INormalizedEvent)" />*/
	canvasMSPointerOut: function (e_) {
		var isFinger = this.isFinger(e_);
		if (isFinger) {
		} else {
			this.canvasMouseLeave(e_);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasGestureDOMEventProxy::CanvasMSPointerOut(System.Html.INormalizedEvent)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasGestureDOMEventProxy::CanvasTouchStart(System.Html.INormalizedEvent)" />*/
	canvasTouchStart: function (e_) {
		this.mouseIsOver(true);
		this.updateModifiers(e_);
		this.updateTouchPosition(e_);
		this.__touchContainerStart = this.containerMousePoint();
		if (this.shouldInteract()(this.mousePoint())) {
			if (!this.deferredTouchStartMode() || this.numTouches() > 1) {
				if (this.touchStartDeferred()) {
					this.touchStartDeferred(false);
					this.beginMouseSuppress();
				}
				this.preventDefault(e_);
			} else {
				this.touchStartDeferred(true);
				this.__dragCaptured = false;
			}
			this.raiseOnMouseOver(this.mousePoint(), false, true);
			this.raiseOnMouseDown(this.mousePoint());
			this.raiseOnContactStarted(this.containerMousePoint(), true);
			this.__gestureRecognizer.processTouches(this.getTouches(e_));
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasGestureDOMEventProxy::CanvasTouchStart(System.Html.INormalizedEvent)" />*/
	,
	__touches: null,
	/*<BeginMethod Name="System.Collections.Generic.List Infragistics.Controls.CanvasGestureDOMEventProxy::GetTouches(System.Html.INormalizedEvent)" />*/
	getTouches: function (e_) {
		var offset = $.ig.BaseDOMEventProxy.prototype.getOffset(this.eventSource());
		var viewport = this.viewport();
		this.__touches.clear();
		if ($.ig.BaseDOMEventProxy.prototype.mSPointerEnabled || $.ig.BaseDOMEventProxy.prototype.pointerEnabled) {
			var i = this.__pointerIds.count();
			for (var j_ = 0; j_ < i; j_++) {
				var pointerId = this.__pointerIds.__inner[j_];
				var pageLocation = this.__pointerLocations.__inner[j_];
				var pageX = pageLocation.__x;
				var pageY = pageLocation.__y;
				var info = new $.ig.TouchPointInfo(1);
				info.x((pageX - offset.left()) - viewport.left());
				info.y((pageY - offset.top()) - viewport.top());
				this.__touches.add(info);
			}
		} else {
			var i1 = e_.originalEvent.targetTouches.length;
			for (var j_ = 0; j_ < i1; j_++) {
				var pageX1 = e_.originalEvent.targetTouches[j_].pageX;
				var pageY1 = e_.originalEvent.targetTouches[j_].pageY;
				var info1 = new $.ig.TouchPointInfo(1);
				info1.x((pageX1 - offset.left()) - viewport.left());
				info1.y((pageY1 - offset.top()) - viewport.top());
				this.__touches.add(info1);
			}
		}
		return this.__touches;
	}
	/*<EndMethod Name="System.Collections.Generic.List Infragistics.Controls.CanvasGestureDOMEventProxy::GetTouches(System.Html.INormalizedEvent)" />*/
	,
	__dragStart: null,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasGestureDOMEventProxy::CanvasTouchMove(System.Html.INormalizedEvent)" />*/
	canvasTouchMove: function (e) {
		this.mouseIsOver(true);
		this.updateModifiers(e);
		this.updateTouchPosition(e);
		if (this.touchStartDeferred()) {
			if ((this.shouldInteract()(this.mousePoint()) && this.shouldAllowTouchDrag()) || this.__dragCaptured == true || this.__gestureRecognizer.currentState() == $.ig.TouchGestureState.prototype.zoom) {
				this.touchStartDeferred(false);
				this.beginMouseSuppress();
			}
		}
		if ((this.__dragCaptured || this.__gestureRecognizer.currentState() == $.ig.TouchGestureState.prototype.zoom || this.shouldInteract()(this.mousePoint())) && !this.touchStartDeferred()) {
			this.__dragCaptured = true;
			this.preventDefault(e);
			this.__gestureRecognizer.processTouches(this.getTouches(e));
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasGestureDOMEventProxy::CanvasTouchMove(System.Html.INormalizedEvent)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Controls.CanvasGestureDOMEventProxy::ShouldAllowTouchDrag()" />*/
	shouldAllowTouchDrag: function () {
		var direction = { __x: this.__touchContainerStart.__x - this.containerMousePoint().__x, __y: this.__touchContainerStart.__y - this.containerMousePoint().__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName };
		if (Math.abs(direction.__x) > Math.abs(direction.__y)) {
			direction.__y = 0;
		}
		if (Math.abs(direction.__y) > Math.abs(direction.__x)) {
			direction.__x = 0;
		}
		return this.shouldInteractForDirection()(direction);
	}
	/*<EndMethod Name="System.Boolean Infragistics.Controls.CanvasGestureDOMEventProxy::ShouldAllowTouchDrag()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasGestureDOMEventProxy::CanvasTouchEnd(System.Html.INormalizedEvent)" />*/
	canvasTouchEnd: function (e) {
		this.mouseIsOver(false);
		this.updateModifiers(e);
		this.updateTouchPosition(e);
		if (this.touchStartDeferred()) {
			this.touchStartDeferred(false);
			this.beginMouseSuppress();
		}
		var originalGestureState = this.__gestureRecognizer.currentState();
		var shouldPreventDefault = this.shouldInteract()(this.mousePoint()) || originalGestureState != $.ig.TouchGestureState.prototype.none;
		if (this.__gestureRecognizer.currentState() != $.ig.TouchGestureState.prototype.zoom && this.__gestureRecognizer.currentState() != $.ig.TouchGestureState.prototype.flinging) {
			this.raiseOnMouseOver(this.mousePoint(), false, true);
			this.raiseOnMouseUp(this.mousePoint());
		}
		var wasZooming = this.__gestureRecognizer.currentState() == $.ig.TouchGestureState.prototype.zoom;
		if (wasZooming) {
			shouldPreventDefault = true;
			this.raiseOnContactCompleted({ __x: this.__gestureRecognizer.centroidX(), __y: this.__gestureRecognizer.centroidY(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName }, true);
		}
		this.__gestureRecognizer.processTouches(this.getTouches(e));
		if (this.__gestureRecognizer.currentState() == $.ig.TouchGestureState.prototype.none) {
			this.endMouseSuppress();
		}
		if (!wasZooming && this.__gestureRecognizer.currentState() == $.ig.TouchGestureState.prototype.none) {
			this.raiseOnContactCompleted({ __x: this.__gestureRecognizer.centroidX(), __y: this.__gestureRecognizer.centroidY(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName }, true);
		}
		if (this.__gestureRecognizer.currentState() != $.ig.TouchGestureState.prototype.none) {
			shouldPreventDefault = true;
		}
		if (shouldPreventDefault) {
			this.preventDefault(e);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasGestureDOMEventProxy::CanvasTouchEnd(System.Html.INormalizedEvent)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasGestureDOMEventProxy::DoUnbind(System.String)" />*/
	doUnbind: function (ns) {
		if (this.__unbinder.containsKey(ns)) {
			var toUnbind = this.__unbinder.item(ns);
			this.__unbinder.remove(ns);
			for (var i = 0; i < toUnbind.count(); i++) {
				toUnbind.__inner[i]();
			}
			toUnbind.clear();
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasGestureDOMEventProxy::DoUnbind(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasGestureDOMEventProxy::UnbindFromSource(System.Object, System.String)" />*/
	unbindFromSource: function (objSource, sourceID) {
		var source = objSource;
		var ns = this.__eventNS + sourceID;
		this.doUnbind(ns);
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasGestureDOMEventProxy::UnbindFromSource(System.Object, System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.CanvasGestureDOMEventProxy::Destroy()" />*/
	destroy: function () {
		if (this.eventSource() == null) {
			return;
		}
		this.doUnbind(this.__eventNS);
		this.eventSource(null);
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.CanvasGestureDOMEventProxy::Destroy()" />*/
	,
	$type: new $.ig.Type('CanvasGestureDOMEventProxy', $.ig.BaseDOMEventProxy.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Controls.CanvasGestureDOMEventProxy" />*/

/*<BeginType Name="Infragistics.Controls.IExecutionContext" />*/

$.ig.util.defType('IExecutionContext', 'Object', {
	$type: new $.ig.Type('IExecutionContext', null)
}, true);

/*<EndType Name="Infragistics.Controls.IExecutionContext" />*/

/*<BeginType Name="Infragistics.Controls.DOMExecutionContext" />*/

$.ig.util.defType('DOMExecutionContext', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
		this.requestAnimationFrame(window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function(callback) {
                window.setTimeout(callback, 1000 / 60);
            });
		this.__startTime = $.ig.Date.prototype.now().getTime();
	},
	__startTime: 0,
	_requestAnimationFrame: null,
	/*<BeginProperty Name="System.Action Infragistics.Controls.DOMExecutionContext::RequestAnimationFrame()" />*/
	requestAnimationFrame: function (value) {
		if (arguments.length === 1) {
			this._requestAnimationFrame = value;
			return value;
		} else {
			return this._requestAnimationFrame;
		}
	}
	/*<EndProperty Name="System.Action Infragistics.Controls.DOMExecutionContext::RequestAnimationFrame()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.DOMExecutionContext::Execute(Infragistics.Controls.ExecutionContextExecuteCallback)" />*/
	execute: function (callback) {
		callback();
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.DOMExecutionContext::Execute(Infragistics.Controls.ExecutionContextExecuteCallback)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.DOMExecutionContext::EnqueueAction(Infragistics.Controls.ExecutionContextExecuteCallback)" />*/
	enqueueAction: function (callback) {
		window.setTimeout(callback, 0);
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.DOMExecutionContext::EnqueueAction(Infragistics.Controls.ExecutionContextExecuteCallback)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.DOMExecutionContext::EnqueueAnimationAction(Infragistics.Controls.ExecutionContextExecuteCallback)" />*/
	enqueueAnimationAction: function (callback) {
		this.requestAnimationFrame()(callback);
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.DOMExecutionContext::EnqueueAnimationAction(Infragistics.Controls.ExecutionContextExecuteCallback)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.DOMExecutionContext::ExecuteDelayed(Infragistics.Controls.ExecutionContextExecuteCallback, System.Int32)" />*/
	executeDelayed: function (callback, delayMilliseconds) {
		window.setTimeout(callback, delayMilliseconds);
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.DOMExecutionContext::ExecuteDelayed(Infragistics.Controls.ExecutionContextExecuteCallback, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int64 Infragistics.Controls.DOMExecutionContext::GetCurrentRelativeTime()" />*/
	getCurrentRelativeTime: function () {
		return $.ig.Date.prototype.now().getTime() - this.__startTime;
	}
	/*<EndMethod Name="System.Int64 Infragistics.Controls.DOMExecutionContext::GetCurrentRelativeTime()" />*/
	,
	$type: new $.ig.Type('DOMExecutionContext', $.ig.Object.prototype.$type, [$.ig.IExecutionContext.prototype.$type])
}, true);

/*<EndType Name="Infragistics.Controls.DOMExecutionContext" />*/

/*<BeginType Name="Infragistics.Controls.DOMEventProxy" />*/

$.ig.util.defType('DOMEventProxy', 'BaseDOMEventProxy', {
	__proxyID: 0,
	__eventNS: null,
	__pinching: false,
	_mGesture: null,
	/*<BeginProperty Name="System.Html.MSGesture Infragistics.Controls.DOMEventProxy::MGesture()" />*/
	mGesture: function (value) {
		if (arguments.length === 1) {
			this._mGesture = value;
			return value;
		} else {
			return this._mGesture;
		}
	}
	/*<EndProperty Name="System.Html.MSGesture Infragistics.Controls.DOMEventProxy::MGesture()" />*/
	,
	init: function (DOMEventSource, renderer) {
		this.__proxyID = 0;
		this.__eventNS = "";
		this.__pinching = false;
		this.__unbinder = new $.ig.Dictionary$2(String, $.ig.List$1.prototype.$type.specialize($.ig.Action.prototype.$type), 0);
		this.__lastScale = 1;
		this.__holdId = $.ig.BaseDOMEventProxy.prototype.nullTimer;
		this.__tapArea = null;
		this.__holdStartX = 0;
		this.__holdStartY = 0;
		this.__holdCancelDistance = 5;
		this.__dragging = false;
		this.__dragStart = null;
		$.ig.BaseDOMEventProxy.prototype.init.call(this);
		this.renderer(renderer);
		this.shouldInteractForDirection(function (p) { return true; });
		this.deferredTouchStartMode(false);
		$.ig.DOMEventProxy.prototype.__proxyCount++;
		this.__proxyID = $.ig.DOMEventProxy.prototype.__proxyCount;
		this.__eventNS = ".DOMProxy" + this.__proxyID.toString();
		this.currentModifiers($.ig.ModifierKeys.prototype.none);
		this.eventSource(DOMEventSource);
		$.ig.BaseDOMEventProxy.prototype.mSPointerEnabled = false;
		try {
			$.ig.BaseDOMEventProxy.prototype.mSPointerEnabled = window.navigator.msPointerEnabled && MSGesture !== undefined;
		}
		catch (e) {
		}
		$.ig.BaseDOMEventProxy.prototype.pointerEnabled = false;
		try {
			$.ig.BaseDOMEventProxy.prototype.pointerEnabled = window.navigator.pointerEnabled;
		}
		catch (e1) {
		}
		$.ig.BaseDOMEventProxy.prototype.tridentVersion = this.getTridentVersion();
		$.ig.BaseDOMEventProxy.prototype.edgeVersion = this.getEdgeVersion();
		this.bindToSource(this.eventSource(), "");
		this.shouldInteract(function (p) { return true; });
	},
	__unbinder: null,
	/*<BeginMethod Name="System.Void Infragistics.Controls.DOMEventProxy::BindToSourceOverride(System.Object, System.String, System.Collections.Generic.List)" />*/
	bindToSourceOverride: function (objSource, sourceID, toUnbind) {
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.DOMEventProxy::BindToSourceOverride(System.Object, System.String, System.Collections.Generic.List)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.DOMEventProxy::BindToSource(System.Object, System.String)" />*/
	bindToSource: function (objSource, sourceID) {
		var source = objSource;
		var ns = this.__eventNS + sourceID;
		if (!this.renderer().supportsDOMEvents()) {
			return;
		}
		var toUnbind = new $.ig.List$1($.ig.Action.prototype.$type, 0);
		this.__unbinder.add(ns, toUnbind);
		this.bindToSourceOverride(objSource, sourceID, toUnbind);
		if ((!$.ig.BaseDOMEventProxy.prototype.mSPointerEnabled && !$.ig.BaseDOMEventProxy.prototype.pointerEnabled)) {
			toUnbind.add(source.listen("mousemove", this.canvasMouseMove.runOn(this)));
			toUnbind.add(source.listen("mouseleave", this.canvasMouseLeave.runOn(this)));
			toUnbind.add(source.listen("mousedown", this.canvasMouseDown.runOn(this)));
			toUnbind.add(source.listen("mouseup", this.canvasMouseUp.runOn(this)));
			toUnbind.add(this.renderer().globalListen("window", "mouseup", this.windowMouseUp.runOn(this)));
		}
		toUnbind.add(source.listen("keydown", this.canvasKeyDown.runOn(this)));
		toUnbind.add(source.listen("keyup", this.canvasKeyUp.runOn(this)));
		var source_ = this.eventSource().getNativeElement();
		if (!this.isInteractionDisabled()) {
			$.ig.BaseDOMEventProxy.prototype.grabTouches(source_);
		}
		if ($.ig.BaseDOMEventProxy.prototype.mSPointerEnabled || $.ig.BaseDOMEventProxy.prototype.pointerEnabled) {
			var container = this.eventSource().getNativeElement();
			if (window.MSGesture !== undefined) {
				var gesture = new MSGesture();
				gesture.target = container;
				this.mGesture(gesture);
				toUnbind.add(source.listen("MSGestureStart", this.canvasGestureStart.runOn(this)));
				toUnbind.add(source.listen("MSGestureChange", this.canvasGestureChange.runOn(this)));
				toUnbind.add(source.listen("MSGestureEnd", this.canvasGestureEnd.runOn(this)));
			}
			if ($.ig.BaseDOMEventProxy.prototype.pointerEnabled) {
				toUnbind.add(source.listen("pointerdown", this.canvasMSPointerDown.runOn(this)));
				toUnbind.add(source.listen("pointerup", this.canvasMSPointerUp.runOn(this)));
				toUnbind.add(source.listen("pointercancel", this.canvasMSPointerCancel.runOn(this)));
				toUnbind.add(source.listen("pointermove", this.canvasMSPointerMove.runOn(this)));
				toUnbind.add(source.listen("pointerout", this.canvasMSPointerOut.runOn(this)));
				toUnbind.add(source.listen("lostpointercapture", this.canvasMSLostPointerCapture.runOn(this)));
			} else {
				toUnbind.add(source.listen("MSPointerDown", this.canvasMSPointerDown.runOn(this)));
				toUnbind.add(source.listen("MSPointerUp", this.canvasMSPointerUp.runOn(this)));
				toUnbind.add(source.listen("MSPointerCancel", this.canvasMSPointerCancel.runOn(this)));
				toUnbind.add(source.listen("MSPointerMove", this.canvasMSPointerMove.runOn(this)));
				toUnbind.add(source.listen("MSPointerOut", this.canvasMSPointerOut.runOn(this)));
				toUnbind.add(source.listen("MSLostPointerCapture", this.canvasMSLostPointerCapture.runOn(this)));
			}
		}
		toUnbind.add(source.listen("DOMMouseScroll", this.canvasMouseScroll.runOn(this)));
		toUnbind.add(source.listen("mousewheel", this.canvasMouseScroll.runOn(this)));
		toUnbind.add(source.listen("gesturestart", this.canvasGestureStart.runOn(this)));
		toUnbind.add(source.listen("gesturechange", this.canvasGestureChange.runOn(this)));
		toUnbind.add(source.listen("gestureend", this.canvasGestureEnd.runOn(this)));
		toUnbind.add(source.listen("touchstart", this.canvasTouchStart.runOn(this)));
		toUnbind.add(source.listen("touchmove", this.canvasTouchMove.runOn(this)));
		toUnbind.add(source.listen("touchend", this.canvasTouchEnd.runOn(this)));
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.DOMEventProxy::BindToSource(System.Object, System.String)" />*/
	,
	__lastScale: 0,
	/*<BeginMethod Name="System.Void Infragistics.Controls.DOMEventProxy::CanvasMSPointerUp(System.Html.INormalizedEvent)" />*/
	canvasMSPointerUp: function (e_) {
		var isFinger = this.isFinger(e_);
		if (isFinger) {
			this.numTouches(this.numTouches() - 1);
			if (this.numTouches() < 0) {
				this.numTouches(0);
			}
		}
		if (this.numTouches() < 2 && this.__pinching && isFinger) {
			this.__pinching = false;
			var scale = e_.originalEvent.scale;
			this.raiseOnGestureCompleted(this.containerMousePoint(), scale);
		} else {
			if (isFinger) {
				this.canvasTouchEnd(e_);
			} else {
				this.canvasMouseUp(e_);
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.DOMEventProxy::CanvasMSPointerUp(System.Html.INormalizedEvent)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.DOMEventProxy::CanvasMSLostPointerCapture(System.Html.INormalizedEvent)" />*/
	canvasMSLostPointerCapture: function (e_) {
		var isFinger = this.isFinger(e_);
		if (isFinger) {
			(function ($obj) { var $value = $obj.numTouches(); $obj.numTouches($value - 1); return $value; }(this));
			if (this.numTouches() < 0) {
				this.numTouches(0);
			}
		}
		if (this.numTouches() < 2 && this.__pinching && isFinger) {
			this.__pinching = false;
			var scale = e_.originalEvent.scale;
			this.raiseOnGestureCompleted(this.containerMousePoint(), scale);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.DOMEventProxy::CanvasMSLostPointerCapture(System.Html.INormalizedEvent)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.DOMEventProxy::CanvasMSPointerCancel(System.Html.INormalizedEvent)" />*/
	canvasMSPointerCancel: function (e_) {
		var isFinger = this.isFinger(e_);
		if (isFinger) {
			(function ($obj) { var $value = $obj.numTouches(); $obj.numTouches($value - 1); return $value; }(this));
			if (this.numTouches() < 0) {
				this.numTouches(0);
			}
		}
		if (this.numTouches() < 2 && this.__pinching && isFinger) {
			this.__pinching = false;
			var scale = e_.originalEvent.scale;
			this.raiseOnGestureCompleted(this.containerMousePoint(), scale);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.DOMEventProxy::CanvasMSPointerCancel(System.Html.INormalizedEvent)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.DOMEventProxy::CanvasMSPointerDown(System.Html.INormalizedEvent)" />*/
	canvasMSPointerDown: function (e_) {
		var isFinger = this.isFinger(e_);
		if (this.mGesture() != null && isFinger) {
			(function ($obj) { var $value = $obj.numTouches(); $obj.numTouches($value + 1); return $value; }(this));
			this.mGesture().addPointer(e_.originalEvent.pointerId);
		}
		var eventSource_ = this.eventSource().getNativeElement();
		if ($.ig.BaseDOMEventProxy.prototype.pointerEnabled) {
			eventSource_.setPointerCapture(e_.originalEvent.pointerId);
		} else {
			eventSource_.msSetPointerCapture(e_.originalEvent.pointerId);
		}
		if (this.numTouches() > 1 && !this.__pinching && isFinger) {
			this.__pinching = true;
			this.updateTouchPosition(e_);
			var scale = e_.originalEvent.scale;
			this.raiseOnPinchStarted(this.containerMousePoint(), scale);
		} else {
			if (isFinger) {
				this.canvasTouchStart(e_);
			} else {
				this.canvasMouseDown(e_);
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.DOMEventProxy::CanvasMSPointerDown(System.Html.INormalizedEvent)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Controls.DOMEventProxy::IsFinger(System.Html.INormalizedEvent)" />*/
	isFinger: function (e_) {
		var pointerEvent_ = e_.originalEvent;
		var isFinger = false;
		if ($.ig.BaseDOMEventProxy.prototype.pointerEnabled) {
			isFinger = pointerEvent_.pointerType == 'touch';
		} else {
			isFinger = pointerEvent_.pointerType == pointerEvent_.MSPOINTER_TYPE_TOUCH;
		}
		return isFinger;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Controls.DOMEventProxy::IsFinger(System.Html.INormalizedEvent)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.DOMEventProxy::CanvasMSPointerMove(System.Html.INormalizedEvent)" />*/
	canvasMSPointerMove: function (e_) {
		var isFinger = this.isFinger(e_);
		if (this.__pinching) {
			return;
		}
		if (isFinger) {
			this.canvasTouchMove(e_);
		} else {
			this.canvasMouseMove(e_);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.DOMEventProxy::CanvasMSPointerMove(System.Html.INormalizedEvent)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.DOMEventProxy::CanvasMSPointerOut(System.Html.INormalizedEvent)" />*/
	canvasMSPointerOut: function (e_) {
		var isFinger = this.isFinger(e_);
		if (this.__pinching) {
			return;
		}
		if (isFinger) {
		} else {
			this.canvasMouseLeave(e_);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.DOMEventProxy::CanvasMSPointerOut(System.Html.INormalizedEvent)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.DOMEventProxy::CanvasGestureStart(System.Html.INormalizedEvent)" />*/
	canvasGestureStart: function (e_) {
		this.mouseIsOver(true);
		this.updateModifiers(e_);
		this.updateTouchPosition(e_);
		this.dragStopHoldTimer();
		if (this.shouldInteract()(this.mousePoint())) {
			this.preventDefault(e_);
			if ($.ig.BaseDOMEventProxy.prototype.mSPointerEnabled || $.ig.BaseDOMEventProxy.prototype.pointerEnabled) {
				this.__lastScale = 1;
			}
			if (($.ig.BaseDOMEventProxy.prototype.mSPointerEnabled || $.ig.BaseDOMEventProxy.prototype.pointerEnabled) && this.numTouches() < 2) {
				return;
			}
			var scale = e_.originalEvent.scale;
			this.raiseOnPinchStarted(this.containerMousePoint(), scale);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.DOMEventProxy::CanvasGestureStart(System.Html.INormalizedEvent)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.DOMEventProxy::CanvasGestureChange(System.Html.INormalizedEvent)" />*/
	canvasGestureChange: function (e_) {
		this.mouseIsOver(true);
		this.updateModifiers(e_);
		this.updateTouchPosition(e_);
		if (this.shouldInteract()(this.mousePoint())) {
			this.preventDefault(e_);
			if (($.ig.BaseDOMEventProxy.prototype.mSPointerEnabled || $.ig.BaseDOMEventProxy.prototype.pointerEnabled) && this.numTouches() < 2) {
				return;
			}
			var scale = e_.originalEvent.scale;
			this.raiseOnPinchDelta(this.containerMousePoint(), scale);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.DOMEventProxy::CanvasGestureChange(System.Html.INormalizedEvent)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.DOMEventProxy::CanvasGestureEnd(System.Html.INormalizedEvent)" />*/
	canvasGestureEnd: function (e_) {
		this.preventDefault(e_);
		var scale = e_.originalEvent.scale;
		this.mouseIsOver(false);
		this.updateModifiers(e_);
		this.updateTouchPosition(e_);
		if ((!$.ig.BaseDOMEventProxy.prototype.mSPointerEnabled && !$.ig.BaseDOMEventProxy.prototype.pointerEnabled) || this.__pinching) {
			this.raiseOnGestureCompleted(this.containerMousePoint(), scale);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.DOMEventProxy::CanvasGestureEnd(System.Html.INormalizedEvent)" />*/
	,
	__touchContainerStart: null,
	/*<BeginMethod Name="System.Void Infragistics.Controls.DOMEventProxy::CanvasTouchStart(System.Html.INormalizedEvent)" />*/
	canvasTouchStart: function (e_) {
		this.mouseIsOver(true);
		this.updateModifiers(e_);
		this.updateTouchPosition(e_);
		this.__touchContainerStart = this.containerMousePoint();
		if (this.shouldInteract()(this.mousePoint())) {
			if (!this.deferredTouchStartMode()) {
				this.preventDefault(e_);
			} else {
				this.touchStartDeferred(true);
			}
			this.raiseOnMouseOver(this.mousePoint(), false, true);
			this.raiseOnMouseDown(this.mousePoint());
			this.raiseOnContactStarted(this.containerMousePoint(), true);
			this.startHoldTimer();
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.DOMEventProxy::CanvasTouchStart(System.Html.INormalizedEvent)" />*/
	,
	__holdId: 0,
	__tapArea: null,
	__holdStartX: 0,
	__holdStartY: 0,
	__holdCancelDistance: 0,
	/*<BeginMethod Name="System.Void Infragistics.Controls.DOMEventProxy::StartHoldTimer()" />*/
	startHoldTimer: function () {
		if (this.__holdId == $.ig.BaseDOMEventProxy.prototype.nullTimer) {
			this.__holdStartX = this.mousePoint().__x;
			this.__holdStartY = this.mousePoint().__y;
			this.__holdId = window.setTimeout(this.onHoldTimer.runOn(this), 1500);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.DOMEventProxy::StartHoldTimer()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.DOMEventProxy::DragStopHoldTimer()" />*/
	dragStopHoldTimer: function () {
		if (Math.abs(this.__holdStartX - this.mousePoint().__x) > this.__holdCancelDistance || Math.abs(this.__holdStartY - this.mousePoint().__y) > this.__holdCancelDistance) {
			this.stopHoldTimer();
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.DOMEventProxy::DragStopHoldTimer()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.DOMEventProxy::StopHoldTimer()" />*/
	stopHoldTimer: function () {
		if (this.__holdId != $.ig.BaseDOMEventProxy.prototype.nullTimer) {
			window.clearTimeout(this.__holdId);
			this.__holdId = $.ig.BaseDOMEventProxy.prototype.nullTimer;
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.DOMEventProxy::StopHoldTimer()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.DOMEventProxy::OnHoldTimer()" />*/
	onHoldTimer: function () {
		this.__holdId = $.ig.BaseDOMEventProxy.prototype.nullTimer;
		if (this.touchStartDeferred()) {
			this.touchStartDeferred(false);
			this.beginMouseSuppress();
		}
		this.raiseOnHold(this.containerMousePoint());
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.DOMEventProxy::OnHoldTimer()" />*/
	,
	__dragging: false,
	__dragStart: null,
	/*<BeginMethod Name="System.Void Infragistics.Controls.DOMEventProxy::CanvasTouchMove(System.Html.INormalizedEvent)" />*/
	canvasTouchMove: function (e) {
		this.mouseIsOver(true);
		this.updateModifiers(e);
		this.updateTouchPosition(e);
		if (this.touchStartDeferred()) {
			if (this.shouldInteract()(this.mousePoint()) && this.shouldAllowTouchDrag()) {
				this.touchStartDeferred(false);
				this.beginMouseSuppress();
			}
		}
		this.dragStopHoldTimer();
		this.stopTapTimer();
		if (this.shouldInteract()(this.mousePoint()) && this.numTouches() == 1 && !this.touchStartDeferred()) {
			this.preventDefault(e);
			if (!this.__dragging) {
				this.__dragging = true;
				this.__dragStart = this.containerMousePoint();
				this.raiseOnDragStarted(this.__dragStart);
			} else {
				this.raiseOnMouseOver(this.mousePoint(), true, true);
				this.raiseOnContactMoved(this.containerMousePoint(), true);
				this.raiseOnDragDelta(this.containerMousePoint());
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.DOMEventProxy::CanvasTouchMove(System.Html.INormalizedEvent)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Controls.DOMEventProxy::ShouldAllowTouchDrag()" />*/
	shouldAllowTouchDrag: function () {
		var direction = { __x: this.__touchContainerStart.__x - this.containerMousePoint().__x, __y: this.__touchContainerStart.__y - this.containerMousePoint().__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName };
		if (Math.abs(direction.__x) < 2 && Math.abs(direction.__y) < 2) {
			return false;
		}
		if (Math.abs(direction.__x) > Math.abs(direction.__y)) {
			direction.__y = 0;
		}
		if (Math.abs(direction.__y) > Math.abs(direction.__x)) {
			direction.__x = 0;
		}
		return this.shouldInteractForDirection()(direction);
	}
	/*<EndMethod Name="System.Boolean Infragistics.Controls.DOMEventProxy::ShouldAllowTouchDrag()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.DOMEventProxy::CanvasTouchEnd(System.Html.INormalizedEvent)" />*/
	canvasTouchEnd: function (e) {
		this.mouseIsOver(false);
		this.updateModifiers(e);
		this.updateTouchPosition(e);
		this.stopHoldTimer();
		if (this.touchStartDeferred()) {
			this.touchStartDeferred(false);
			this.beginMouseSuppress();
		}
		this.preventDefault(e);
		this.raiseOnMouseOver(this.mousePoint(), false, true);
		this.raiseOnMouseUp(this.mousePoint());
		if (this.numTouches() == 0) {
			this.raiseDoubleTap(this.mousePoint());
			this.endMouseSuppress();
		}
		if (this.__dragging && this.numTouches() == 0) {
			this.__dragging = false;
			this.__dragStart = null;
			this.raiseOnDragCompleted(this.containerMousePoint());
			this.endMouseSuppress();
		}
		this.raiseOnContactCompleted(this.containerMousePoint(), true);
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.DOMEventProxy::CanvasTouchEnd(System.Html.INormalizedEvent)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.DOMEventProxy::RaiseDoubleTap(System.Windows.Point)" />*/
	raiseDoubleTap: function (pt) {
		if ($.ig.Rect.prototype.l_op_Equality(this.__tapArea, null)) {
			this.__tapArea = new $.ig.Rect(0, pt.__x - 50, pt.__y - 50, 100, 100);
			window.setTimeout(this.stopTapTimer.runOn(this), 500);
		} else {
			if (pt.__x >= this.__tapArea.x() && pt.__x <= this.__tapArea.right() && pt.__y >= this.__tapArea.y() && pt.__y <= this.__tapArea.bottom()) {
				this.stopTapTimer();
				this.raiseOnDoubleTap(pt);
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.DOMEventProxy::RaiseDoubleTap(System.Windows.Point)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.DOMEventProxy::StopTapTimer()" />*/
	stopTapTimer: function () {
		this.__tapArea = null;
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.DOMEventProxy::StopTapTimer()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.DOMEventProxy::DoUnbind(System.String)" />*/
	doUnbind: function (ns) {
		if (this.__unbinder.containsKey(ns)) {
			var toUnbind = this.__unbinder.item(ns);
			this.__unbinder.remove(ns);
			for (var i = 0; i < toUnbind.count(); i++) {
				toUnbind.__inner[i]();
			}
			toUnbind.clear();
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.DOMEventProxy::DoUnbind(System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.DOMEventProxy::UnbindFromSource(System.Object, System.String)" />*/
	unbindFromSource: function (objSource, sourceID) {
		var source = objSource;
		var ns = this.__eventNS + sourceID;
		this.doUnbind(ns);
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.DOMEventProxy::UnbindFromSource(System.Object, System.String)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.DOMEventProxy::Destroy()" />*/
	destroy: function () {
		if (this.eventSource() == null) {
			return;
		}
		this.doUnbind(this.__eventNS);
		this.eventSource(null);
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.DOMEventProxy::Destroy()" />*/
	,
	$type: new $.ig.Type('DOMEventProxy', $.ig.BaseDOMEventProxy.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Controls.DOMEventProxy" />*/

/*<BeginType Name="Infragistics.Controls.DependencyObjectNotifier" />*/

$.ig.util.defType('DependencyObjectNotifier', 'DependencyObject', {
	init: function () {
		$.ig.DependencyObject.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Void Infragistics.Controls.DependencyObjectNotifier::OnPropertyChanged(System.String)" />*/
	onPropertyChanged: function (propertyName) {
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new $.ig.PropertyChangedEventArgs(propertyName));
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.DependencyObjectNotifier::OnPropertyChanged(System.String)" />*/
	,
	propertyChanged: null,
	$type: new $.ig.Type('DependencyObjectNotifier', $.ig.DependencyObject.prototype.$type, [$.ig.INotifyPropertyChanged.prototype.$type])
}, true);

/*<EndType Name="Infragistics.Controls.DependencyObjectNotifier" />*/

/*<BeginType Name="Infragistics.Controls.IOverviewPlusDetailControl" />*/

$.ig.util.defType('IOverviewPlusDetailControl', 'Object', {
	$type: new $.ig.Type('IOverviewPlusDetailControl', null)
}, true);

/*<EndType Name="Infragistics.Controls.IOverviewPlusDetailControl" />*/

/*<BeginType Name="Infragistics.Controls.IOverviewPlusDetailPane" />*/

$.ig.util.defType('IOverviewPlusDetailPane', 'Object', {
	$type: new $.ig.Type('IOverviewPlusDetailPane', null)
}, true);

/*<EndType Name="Infragistics.Controls.IOverviewPlusDetailPane" />*/

/*<BeginType Name="Infragistics.Controls.PropertyChangedEventArgs`1" />*/

$.ig.util.defType('PropertyChangedEventArgs$1', 'PropertyChangedEventArgs', {
	$t: null,
	init: function ($t, propertyName, oldValue, newValue) {
		this.$t = $t;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$t);
		}
		$.ig.PropertyChangedEventArgs.prototype.init.call(this, propertyName);
		this.oldValue(oldValue);
		this.newValue(newValue);
	},
	_oldValue: null,
	/*<BeginProperty Name="Infragistics.Controls.PropertyChangedEventArgs.T Infragistics.Controls.PropertyChangedEventArgs`1::OldValue()" />*/
	oldValue: function (value) {
		if (arguments.length === 1) {
			this._oldValue = value;
			return value;
		} else {
			return this._oldValue;
		}
	}
	/*<EndProperty Name="Infragistics.Controls.PropertyChangedEventArgs.T Infragistics.Controls.PropertyChangedEventArgs`1::OldValue()" />*/
	,
	_newValue: null,
	/*<BeginProperty Name="Infragistics.Controls.PropertyChangedEventArgs.T Infragistics.Controls.PropertyChangedEventArgs`1::NewValue()" />*/
	newValue: function (value) {
		if (arguments.length === 1) {
			this._newValue = value;
			return value;
		} else {
			return this._newValue;
		}
	}
	/*<EndProperty Name="Infragistics.Controls.PropertyChangedEventArgs.T Infragistics.Controls.PropertyChangedEventArgs`1::NewValue()" />*/
	,
	$type: new $.ig.Type('PropertyChangedEventArgs$1', $.ig.PropertyChangedEventArgs.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Controls.PropertyChangedEventArgs`1" />*/

/*<BeginType Name="Infragistics.Controls.ISchedulableRender" />*/

$.ig.util.defType('ISchedulableRender', 'Object', {
	$type: new $.ig.Type('ISchedulableRender', null)
}, true);

/*<EndType Name="Infragistics.Controls.ISchedulableRender" />*/

/*<BeginType Name="Infragistics.Controls.TouchPointInfo" />*/

$.ig.util.defType('TouchPointInfo', 'Object', {
	init: function (initNumber, x, y) {
		if (initNumber > 0) {
			switch (initNumber) {
				case 1:
					this.init1.apply(this, arguments);
					break;
			}
			return;
		}
		$.ig.Object.prototype.init.call(this);
		this.x(x);
		this.y(y);
	},
	init1: function (initNumber) {
		$.ig.Object.prototype.init.call(this);
	},
	_x: 0,
	/*<BeginProperty Name="System.Double Infragistics.Controls.TouchPointInfo::X()" />*/
	x: function (value) {
		if (arguments.length === 1) {
			this._x = value;
			return value;
		} else {
			return this._x;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.Controls.TouchPointInfo::X()" />*/
	,
	_y: 0,
	/*<BeginProperty Name="System.Double Infragistics.Controls.TouchPointInfo::Y()" />*/
	y: function (value) {
		if (arguments.length === 1) {
			this._y = value;
			return value;
		} else {
			return this._y;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.Controls.TouchPointInfo::Y()" />*/
	,
	$type: new $.ig.Type('TouchPointInfo', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Controls.TouchPointInfo" />*/

/*<BeginType Name="Infragistics.Controls.TouchGestureRecognizer" />*/

$.ig.util.defType('TouchGestureRecognizer', 'Object', {
	init: function (executionContext) {
		this.__tracker = new $.ig.TouchVelocityTracker();
		this.__startDistanceX = NaN;
		this.__startDistanceY = NaN;
		this.__startDistanceLine = NaN;
		this.__scaleX = 1;
		this.__scaleY = 1;
		this.__isoScale = 1;
		this.__holdSlopDistance = 10;
		this.__tapTime = -1;
		this.__previousScaleX = 1;
		this.__previousScaleY = 1;
		this.__previousIsoScale = 1;
		this.__previousPosX = NaN;
		this.__previousPosY = NaN;
		this.__flingVel = null;
		this._decelFactor = 800;
		this.__flingTime = -1;
		this.__startHoldTime = -1;
		$.ig.Object.prototype.init.call(this);
		this.__executionContext = executionContext;
	},
	_currentState: 0,
	/*<BeginProperty Name="Infragistics.Controls.TouchGestureState Infragistics.Controls.TouchGestureRecognizer::CurrentState()" />*/
	currentState: function (value) {
		if (arguments.length === 1) {
			this._currentState = value;
			return value;
		} else {
			return this._currentState;
		}
	}
	/*<EndProperty Name="Infragistics.Controls.TouchGestureState Infragistics.Controls.TouchGestureRecognizer::CurrentState()" />*/
	,
	__tracker: null,
	__centroidX: 0,
	__centroidY: 0,
	__pendingX: 0,
	__pendingY: 0,
	__checkPanDisplacementX: 0,
	__checkPanDisplacementY: 0,
	__startDistanceX: 0,
	__startDistanceY: 0,
	__startDistanceLine: 0,
	__scaleX: 0,
	__scaleY: 0,
	__isoScale: 0,
	__holdSlopDistance: 0,
	/*<BeginProperty Name="System.Double Infragistics.Controls.TouchGestureRecognizer::HoldSlopDistance()" />*/
	holdSlopDistance: function (value) {
		if (arguments.length === 1) {
			this.__holdSlopDistance = value;
			return value;
		} else {
			return this.__holdSlopDistance;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.Controls.TouchGestureRecognizer::HoldSlopDistance()" />*/
	,
	/*<BeginProperty Name="System.Double Infragistics.Controls.TouchGestureRecognizer::CentroidX()" />*/
	centroidX: function () {
		return this.__centroidX;
	}
	/*<EndProperty Name="System.Double Infragistics.Controls.TouchGestureRecognizer::CentroidX()" />*/
	,
	/*<BeginProperty Name="System.Double Infragistics.Controls.TouchGestureRecognizer::CentroidY()" />*/
	centroidY: function () {
		return this.__centroidY;
	}
	/*<EndProperty Name="System.Double Infragistics.Controls.TouchGestureRecognizer::CentroidY()" />*/
	,
	/*<BeginMethod Name="System.Windows.Point Infragistics.Controls.TouchGestureRecognizer::GetPendingPanDisplacement()" />*/
	getPendingPanDisplacement: function () {
		return { __x: Math.abs(this.__checkPanDisplacementX - this.__pendingX), __y: Math.abs(this.__checkPanDisplacementY - this.__pendingY), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName };
	}
	/*<EndMethod Name="System.Windows.Point Infragistics.Controls.TouchGestureRecognizer::GetPendingPanDisplacement()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.TouchGestureRecognizer::UpdateDisplacement(System.Collections.Generic.List)" />*/
	updateDisplacement: function (touchPoints) {
		var shouldStopHoldTimer = false;
		if (!$.ig.util.isNaN(this.__pendingX) && !$.ig.util.isNaN(this.__pendingY)) {
			this.__checkPanDisplacementX = touchPoints.__inner[0].x();
			this.__checkPanDisplacementY = touchPoints.__inner[0].y();
			if (Math.abs(touchPoints.__inner[0].x() - this.__pendingX) > this.__holdSlopDistance || Math.abs(touchPoints.__inner[0].y() - this.__pendingY) > this.__holdSlopDistance) {
				shouldStopHoldTimer = true;
			}
		}
		if (shouldStopHoldTimer) {
			this.stopHoldTimer();
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.TouchGestureRecognizer::UpdateDisplacement(System.Collections.Generic.List)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.TouchGestureRecognizer::ProcessTouches(System.Collections.Generic.List)" />*/
	processTouches: function (touchPoints) {
		$.ig.Debug.prototype.writeLine("process touches:  " + touchPoints.count());
		var newCount = touchPoints.count();
		var newState = this.currentState();
		var shouldEndHold = false;
		var shouldStartHoldTimer = false;
		var shouldStopHoldTimer = false;
		var shouldEndZoom = false;
		var shouldStartZoom = false;
		var shouldEndPan = false;
		var shouldStartPan = false;
		var shouldCancelFling = false;
		var currDistanceX = 0;
		var currDistanceY = 0;
		var currDistanceLine = 0;
		var previousState = this.currentState();
		if (newCount > 0 && newCount < 2) {
			switch (this.currentState()) {
				case $.ig.TouchGestureState.prototype.flinging:
					newState = $.ig.TouchGestureState.prototype.pendingPan;
					shouldStartHoldTimer = true;
					shouldStartPan = true;
					break;
				case $.ig.TouchGestureState.prototype.none:
					newState = $.ig.TouchGestureState.prototype.pendingPan;
					shouldStartHoldTimer = true;
					break;
				case $.ig.TouchGestureState.prototype.zoom:
					newState = $.ig.TouchGestureState.prototype.pan;
					shouldStartPan = true;
					shouldEndZoom = true;
					break;
			}
		}
		if (newCount > 1) {
			switch (this.currentState()) {
				case $.ig.TouchGestureState.prototype.flinging:
					newState = $.ig.TouchGestureState.prototype.zoom;
					shouldStartZoom = true;
					shouldCancelFling = true;
					break;
				case $.ig.TouchGestureState.prototype.pendingPan:
					shouldStopHoldTimer = true;
					newState = $.ig.TouchGestureState.prototype.zoom;
					shouldStartZoom = true;
					break;
				case $.ig.TouchGestureState.prototype.none:
					newState = $.ig.TouchGestureState.prototype.zoom;
					shouldStartZoom = true;
					break;
				case $.ig.TouchGestureState.prototype.pan:
					newState = $.ig.TouchGestureState.prototype.zoom;
					shouldEndPan = true;
					shouldStartZoom = true;
					break;
			}
		}
		if (newCount == 0) {
			switch (this.currentState()) {
				case $.ig.TouchGestureState.prototype.pendingPan:
					if (this.checkDoubleTap(new $.ig.TouchPointInfo(0, this.__centroidX, this.__centroidY))) {
						newState = $.ig.TouchGestureState.prototype.none;
						shouldStopHoldTimer = true;
						if (this.doubleTapped != null) {
							this.doubleTapped(this, this.getGestureArgs());
						}
					} else {
						shouldStopHoldTimer = true;
						newState = $.ig.TouchGestureState.prototype.none;
					}
					break;
				case $.ig.TouchGestureState.prototype.pan:
					newState = $.ig.TouchGestureState.prototype.none;
					shouldEndPan = true;
					break;
				case $.ig.TouchGestureState.prototype.zoom:
					newState = $.ig.TouchGestureState.prototype.none;
					shouldEndZoom = true;
					break;
				case $.ig.TouchGestureState.prototype.hold:
					newState = $.ig.TouchGestureState.prototype.none;
					shouldEndHold = true;
					break;
			}
		}
		if (shouldCancelFling) {
			if (shouldStartPan) {
				if (this.panEnding != null) {
					this.panEnding(this, this.getGestureArgs());
				}
				if (this.manipulationEnding != null) {
					this.manipulationEnding(this, this.getGestureArgs());
				}
			}
			this.cancelFling();
		}
		if (shouldStartHoldTimer) {
			this.__pendingX = touchPoints.__inner[0].x();
			this.__pendingY = touchPoints.__inner[0].y();
		}
		if (newState == $.ig.TouchGestureState.prototype.pendingPan) {
			if (!$.ig.util.isNaN(this.__pendingX) && !$.ig.util.isNaN(this.__pendingY)) {
				this.__checkPanDisplacementX = touchPoints.__inner[0].x();
				this.__checkPanDisplacementY = touchPoints.__inner[0].y();
				if (Math.abs(touchPoints.__inner[0].x() - this.__pendingX) > this.__holdSlopDistance || Math.abs(touchPoints.__inner[0].y() - this.__pendingY) > this.__holdSlopDistance) {
					shouldStopHoldTimer = true;
					shouldStartPan = true;
					newState = $.ig.TouchGestureState.prototype.pan;
				}
			}
		}
		var newCentroidX = 0;
		var newCentroidY = 0;
		for (var i = 0; i < newCount; i++) {
			newCentroidX += touchPoints.__inner[i].x();
			newCentroidY += touchPoints.__inner[i].y();
		}
		newCentroidX /= newCount;
		newCentroidY /= newCount;
		if (newCount == 0) {
			newCentroidX = this.__previousPosX;
			newCentroidY = this.__previousPosY;
		}
		this.__centroidX = newCentroidX;
		this.__centroidY = newCentroidY;
		this.__tracker.trackPoint(this.__centroidX, this.__centroidY, this.getCurrentTime());
		if (shouldStartZoom) {
			var dx = touchPoints.__inner[0].x() - touchPoints.__inner[1].x();
			var dy = touchPoints.__inner[0].y() - touchPoints.__inner[1].y();
			this.__startDistanceX = Math.abs(dx);
			this.__startDistanceY = Math.abs(dy);
			this.__startDistanceLine = Math.sqrt(dx * dx + dy * dy);
			if (this.__startDistanceX < 1) {
				this.__startDistanceX = 1;
			}
			if (this.__startDistanceY < 1) {
				this.__startDistanceY = 1;
			}
			if (this.__startDistanceLine < 1) {
				this.__startDistanceLine = 1;
			}
		}
		if (newState == $.ig.TouchGestureState.prototype.zoom) {
			var dx1 = touchPoints.__inner[0].x() - touchPoints.__inner[1].x();
			var dy1 = touchPoints.__inner[0].y() - touchPoints.__inner[1].y();
			currDistanceX = Math.abs(dx1);
			currDistanceY = Math.abs(dy1);
			currDistanceLine = Math.sqrt(dx1 * dx1 + dy1 * dy1);
			if (currDistanceX < 1) {
				currDistanceX = 1;
			}
			if (currDistanceY < 1) {
				currDistanceY = 1;
			}
			if (currDistanceLine < 1) {
				currDistanceLine = 1;
			}
			this.__scaleX = currDistanceX / this.__startDistanceX;
			this.__scaleY = currDistanceY / this.__startDistanceY;
			this.__isoScale = currDistanceLine / this.__startDistanceLine;
		} else {
			this.__startDistanceX = NaN;
			this.__startDistanceY = NaN;
			this.__scaleX = 1;
			this.__scaleY = 1;
			this.__scaleDeltaX = 1;
			this.__scaleDeltaY = 1;
			this.__isoScaleDelta = 1;
		}
		this.currentState(newState);
		if (previousState == $.ig.TouchGestureState.prototype.none && this.currentState() == $.ig.TouchGestureState.prototype.pan || this.currentState() == $.ig.TouchGestureState.prototype.zoom) {
			if (this.manipulationStarting != null) {
				this.manipulationStarting(this, this.getGestureArgs());
			}
		}
		if (shouldEndZoom) {
			this.endZoom();
		}
		if (shouldEndPan) {
			this.endPan();
		}
		if (shouldEndHold) {
			this.endHold();
		}
		if (shouldStopHoldTimer) {
			this.stopHoldTimer();
		}
		if (shouldStartPan) {
			this.startPan();
		}
		if (shouldStartHoldTimer) {
			this.startHoldTimer();
		}
		if (shouldStartZoom) {
			this.startZoom();
		}
		if (this.currentState() == $.ig.TouchGestureState.prototype.zoom) {
			this.__scaleDeltaX = this.__scaleX / this.__previousScaleX;
			this.__scaleDeltaY = this.__scaleY / this.__previousScaleY;
			this.__isoScaleDelta = this.__isoScale / this.__previousIsoScale;
			this.__transDeltaX = this.__centroidX - this.__previousPosX;
			this.__transDeltaY = this.__centroidY - this.__previousPosY;
			this.__previousScaleX = this.__previousScaleX * this.__scaleDeltaX;
			this.__previousScaleY = this.__previousScaleY * this.__scaleDeltaY;
			this.__previousIsoScale = this.__previousIsoScale * this.__isoScaleDelta;
			this.__previousPosX = this.__centroidX;
			this.__previousPosY = this.__centroidY;
			if (this.manipulationChanging != null) {
				this.manipulationChanging(this, this.getGestureArgs());
			}
		}
		if (this.currentState() == $.ig.TouchGestureState.prototype.pan) {
			this.__transDeltaX = this.__centroidX - this.__previousPosX;
			this.__transDeltaY = this.__centroidY - this.__previousPosY;
			this.__previousPosX = this.__centroidX;
			this.__previousPosY = this.__centroidY;
			if (this.manipulationChanging != null) {
				this.manipulationChanging(this, this.getGestureArgs());
			}
		}
		this.__previousPosX = this.__centroidX;
		this.__previousPosY = this.__centroidY;
		if ((shouldEndPan || shouldEndZoom) && this.currentState() == $.ig.TouchGestureState.prototype.none) {
			if (this.manipulationEnding != null) {
				this.manipulationEnding(this, this.getGestureArgs());
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.TouchGestureRecognizer::ProcessTouches(System.Collections.Generic.List)" />*/
	,
	__tapTime: 0,
	__tapLocationX: 0,
	__tapLocationY: 0,
	/*<BeginMethod Name="System.Boolean Infragistics.Controls.TouchGestureRecognizer::CheckDoubleTap(Infragistics.Controls.TouchPointInfo)" />*/
	checkDoubleTap: function (touchPointInfo) {
		var currentTime = this.getCurrentTime();
		if ((currentTime - this.__tapTime) < 500) {
			if (Math.abs(touchPointInfo.x() - this.__tapLocationX) < 50 && Math.abs(touchPointInfo.y() - this.__tapLocationY) < 50) {
				return true;
			}
		}
		this.__tapLocationX = touchPointInfo.x();
		this.__tapLocationY = touchPointInfo.y();
		this.__tapTime = currentTime;
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Controls.TouchGestureRecognizer::CheckDoubleTap(Infragistics.Controls.TouchPointInfo)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.TouchGestureRecognizer::StartHoldTimer()" />*/
	startHoldTimer: function () {
		this.__startHoldTime = this.getCurrentTime();
		if (!this.__holding) {
			this.__holding = true;
			this.__executionContext.executeDelayed(this.checkHold.runOn(this), 1000);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.TouchGestureRecognizer::StartHoldTimer()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.TouchGestureRecognizer::CheckHold()" />*/
	checkHold: function () {
		if (!this.__holding) {
			return;
		}
		var currentTime = this.getCurrentTime();
		if (currentTime - this.__startHoldTime >= $.ig.TouchGestureRecognizer.prototype._checkHoldTime) {
			this.startHold();
		} else {
			this.__executionContext.executeDelayed(this.checkHold.runOn(this), ($.ig.TouchGestureRecognizer.prototype._checkHoldTime - (currentTime - this.__startHoldTime)));
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.TouchGestureRecognizer::CheckHold()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.TouchGestureRecognizer::StopHoldTimer()" />*/
	stopHoldTimer: function () {
		this.__holding = false;
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.TouchGestureRecognizer::StopHoldTimer()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.TouchGestureRecognizer::EndZoom()" />*/
	endZoom: function () {
		this.__tracker.clear();
		if (this.zoomEnding != null) {
			this.zoomEnding(this, this.getGestureArgs());
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.TouchGestureRecognizer::EndZoom()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.TouchGestureRecognizer::StartHold()" />*/
	startHold: function () {
		if (this.holdStarting != null) {
			this.holdStarting(this, this.getGestureArgs());
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.TouchGestureRecognizer::StartHold()" />*/
	,
	__previousScaleX: 0,
	__previousScaleY: 0,
	__previousIsoScale: 0,
	__previousPosX: 0,
	__previousPosY: 0,
	/*<BeginMethod Name="System.Void Infragistics.Controls.TouchGestureRecognizer::StartZoom()" />*/
	startZoom: function () {
		this.__tracker.clear();
		this.cancelFling();
		this.__previousScaleX = 1;
		this.__previousScaleY = 1;
		this.__previousIsoScale = 1;
		this.__previousPosX = this.__centroidX;
		this.__previousPosY = this.__centroidY;
		if (this.zoomStarting != null) {
			this.zoomStarting(this, this.getGestureArgs());
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.TouchGestureRecognizer::StartZoom()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.TouchGestureRecognizer::EndHold()" />*/
	endHold: function () {
		if (this.holdEnding != null) {
			this.holdEnding(this, this.getGestureArgs());
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.TouchGestureRecognizer::EndHold()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.TouchGestureRecognizer::StartPan()" />*/
	startPan: function () {
		this.__tracker.clear();
		this.cancelFling();
		this.__previousPosX = this.__centroidX;
		this.__previousPosY = this.__centroidY;
		if (this.panStarting != null) {
			this.panStarting(this, this.getGestureArgs());
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.TouchGestureRecognizer::StartPan()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.TouchGestureRecognizer::CancelFling()" />*/
	cancelFling: function () {
		if (this.currentState() == $.ig.TouchGestureState.prototype.flinging) {
			this.currentState($.ig.TouchGestureState.prototype.none);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.TouchGestureRecognizer::CancelFling()" />*/
	,
	__flingVel: null,
	_decelFactor: 0,
	__flingTime: 0,
	/*<BeginMethod Name="System.Void Infragistics.Controls.TouchGestureRecognizer::UpdateFling()" />*/
	updateFling: function () {
		if (this.currentState() != $.ig.TouchGestureState.prototype.flinging) {
			return;
		}
		if (this.__flingVel == null || this.__flingTime == -1) {
			this.cancelFling();
			return;
		}
		var currentTime = this.getCurrentTime();
		var deltaTime = currentTime - this.__flingTime;
		if (deltaTime < 16) {
			this.queueFrame(this.updateFling.runOn(this));
			return;
		}
		this.__flingTime = currentTime;
		var deltaSeconds = deltaTime / 1000;
		var velDelta = this._decelFactor * deltaSeconds;
		var flingVel = this.__flingVel;
		if (flingVel.x() > 0) {
			flingVel.x(flingVel.x() - velDelta);
			if (flingVel.x() < 0) {
				flingVel.x(0);
			}
		}
		if (flingVel.x() < 0) {
			flingVel.x(flingVel.x() + velDelta);
			if (flingVel.x() > 0) {
				flingVel.x(0);
			}
		}
		if (flingVel.y() > 0) {
			flingVel.y(flingVel.y() - velDelta);
			if (flingVel.y() < 0) {
				flingVel.y(0);
			}
		}
		if (flingVel.y() < 0) {
			flingVel.y(flingVel.y() + velDelta);
			if (flingVel.y() > 0) {
				flingVel.y(0);
			}
		}
		if (flingVel.x() == 0 && flingVel.y() == 0) {
			this.currentState($.ig.TouchGestureState.prototype.none);
			if (this.panEnding != null) {
				this.panEnding(this, this.getGestureArgs());
			}
			if (this.manipulationEnding != null) {
				this.manipulationEnding(this, this.getGestureArgs());
			}
			this.cancelFling();
			return;
		}
		this.__centroidX += flingVel.x() * deltaSeconds;
		this.__centroidY += flingVel.y() * deltaSeconds;
		this.__transDeltaX = this.__centroidX - this.__previousPosX;
		this.__transDeltaY = this.__centroidY - this.__previousPosY;
		this.__previousPosX = this.__centroidX;
		this.__previousPosY = this.__centroidY;
		if (this.manipulationChanging != null) {
			this.manipulationChanging(this, this.getGestureArgs());
		}
		this.queueFrame(this.updateFling.runOn(this));
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.TouchGestureRecognizer::UpdateFling()" />*/
	,
	__executionContext: null,
	__holding: false,
	__startHoldTime: 0,
	/*<BeginMethod Name="System.Boolean Infragistics.Controls.TouchGestureRecognizer::StartFling(Infragistics.Controls.TouchVelocityReading)" />*/
	startFling: function (vel) {
		if (this.currentState() == $.ig.TouchGestureState.prototype.flinging) {
			this.cancelFling();
		}
		this.__flingTime = this.getCurrentTime();
		this.__flingVel = vel;
		this.currentState($.ig.TouchGestureState.prototype.flinging);
		this.queueFrame(this.updateFling.runOn(this));
		if (this.flingStarting != null) {
			if (!this.flingStarting(this, this.getGestureArgs())) {
				this.cancelFling();
				return false;
			}
		}
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Controls.TouchGestureRecognizer::StartFling(Infragistics.Controls.TouchVelocityReading)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.TouchGestureRecognizer::QueueFrame(Infragistics.Controls.ExecutionContextExecuteCallback)" />*/
	queueFrame: function (action) {
		this.__executionContext.enqueueAnimationAction(action);
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.TouchGestureRecognizer::QueueFrame(Infragistics.Controls.ExecutionContextExecuteCallback)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.TouchGestureRecognizer::EndPan()" />*/
	endPan: function () {
		var vel = this.__tracker.getVelocity(this.getCurrentTime());
		if ((vel.x() > 5 || vel.x() < -5 || vel.y() > 5 || vel.y() < -5) && this.currentState() == $.ig.TouchGestureState.prototype.none) {
			this.currentState($.ig.TouchGestureState.prototype.pan);
			if (!this.startFling(vel)) {
				if (this.currentState() == $.ig.TouchGestureState.prototype.none) {
					if (this.panEnding != null) {
						this.panEnding(this, this.getGestureArgs());
					}
					if (this.manipulationEnding != null) {
						this.manipulationEnding(this, this.getGestureArgs());
					}
				}
			}
		} else {
			if (this.panEnding != null) {
				this.panEnding(this, this.getGestureArgs());
			}
			if (this.currentState() == $.ig.TouchGestureState.prototype.none) {
				if (this.manipulationEnding != null) {
					this.manipulationEnding(this, this.getGestureArgs());
				}
			}
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.TouchGestureRecognizer::EndPan()" />*/
	,
	/*<BeginMethod Name="Infragistics.Controls.TouchGestureEventArgs Infragistics.Controls.TouchGestureRecognizer::GetGestureArgs()" />*/
	getGestureArgs: function () {
		var args = new $.ig.TouchGestureEventArgs();
		args.centroidX(this.__centroidX);
		args.centroidY(this.__centroidY);
		args.scaleDeltaX(this.__scaleDeltaX);
		args.scaleDeltaY(this.__scaleDeltaY);
		args.isoScaleDelta(this.__isoScaleDelta);
		args.translationDeltaX(this.__transDeltaX);
		args.translationDeltaY(this.__transDeltaY);
		args.velocityX(this.__flingVel != null ? this.__flingVel.x() : this.__tracker.getVelocity(this.getCurrentTime()).x());
		args.velocityY(this.__flingVel != null ? this.__flingVel.y() : this.__tracker.getVelocity(this.getCurrentTime()).y());
		return args;
	}
	/*<EndMethod Name="Infragistics.Controls.TouchGestureEventArgs Infragistics.Controls.TouchGestureRecognizer::GetGestureArgs()" />*/
	,
	/*<BeginMethod Name="System.Int64 Infragistics.Controls.TouchGestureRecognizer::GetCurrentTime()" />*/
	getCurrentTime: function () {
		return this.__executionContext.getCurrentRelativeTime();
	}
	/*<EndMethod Name="System.Int64 Infragistics.Controls.TouchGestureRecognizer::GetCurrentTime()" />*/
	,
	holdStarting: null,
	holdEnding: null,
	panStarting: null,
	manipulationStarting: null,
	manipulationChanging: null,
	manipulationEnding: null,
	panEnding: null,
	zoomStarting: null,
	zoomEnding: null,
	flingStarting: null,
	doubleTapped: null,
	__scaleDeltaX: 0,
	__scaleDeltaY: 0,
	__isoScaleDelta: 0,
	__transDeltaX: 0,
	__transDeltaY: 0,
	$type: new $.ig.Type('TouchGestureRecognizer', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Controls.TouchGestureRecognizer" />*/

/*<BeginType Name="Infragistics.Controls.TouchGestureEventArgs" />*/

$.ig.util.defType('TouchGestureEventArgs', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	_scaleDeltaX: 0,
	/*<BeginProperty Name="System.Double Infragistics.Controls.TouchGestureEventArgs::ScaleDeltaX()" />*/
	scaleDeltaX: function (value) {
		if (arguments.length === 1) {
			this._scaleDeltaX = value;
			return value;
		} else {
			return this._scaleDeltaX;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.Controls.TouchGestureEventArgs::ScaleDeltaX()" />*/
	,
	_scaleDeltaY: 0,
	/*<BeginProperty Name="System.Double Infragistics.Controls.TouchGestureEventArgs::ScaleDeltaY()" />*/
	scaleDeltaY: function (value) {
		if (arguments.length === 1) {
			this._scaleDeltaY = value;
			return value;
		} else {
			return this._scaleDeltaY;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.Controls.TouchGestureEventArgs::ScaleDeltaY()" />*/
	,
	_isoScaleDelta: 0,
	/*<BeginProperty Name="System.Double Infragistics.Controls.TouchGestureEventArgs::IsoScaleDelta()" />*/
	isoScaleDelta: function (value) {
		if (arguments.length === 1) {
			this._isoScaleDelta = value;
			return value;
		} else {
			return this._isoScaleDelta;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.Controls.TouchGestureEventArgs::IsoScaleDelta()" />*/
	,
	_translationDeltaX: 0,
	/*<BeginProperty Name="System.Double Infragistics.Controls.TouchGestureEventArgs::TranslationDeltaX()" />*/
	translationDeltaX: function (value) {
		if (arguments.length === 1) {
			this._translationDeltaX = value;
			return value;
		} else {
			return this._translationDeltaX;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.Controls.TouchGestureEventArgs::TranslationDeltaX()" />*/
	,
	_translationDeltaY: 0,
	/*<BeginProperty Name="System.Double Infragistics.Controls.TouchGestureEventArgs::TranslationDeltaY()" />*/
	translationDeltaY: function (value) {
		if (arguments.length === 1) {
			this._translationDeltaY = value;
			return value;
		} else {
			return this._translationDeltaY;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.Controls.TouchGestureEventArgs::TranslationDeltaY()" />*/
	,
	_centroidX: 0,
	/*<BeginProperty Name="System.Double Infragistics.Controls.TouchGestureEventArgs::CentroidX()" />*/
	centroidX: function (value) {
		if (arguments.length === 1) {
			this._centroidX = value;
			return value;
		} else {
			return this._centroidX;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.Controls.TouchGestureEventArgs::CentroidX()" />*/
	,
	_centroidY: 0,
	/*<BeginProperty Name="System.Double Infragistics.Controls.TouchGestureEventArgs::CentroidY()" />*/
	centroidY: function (value) {
		if (arguments.length === 1) {
			this._centroidY = value;
			return value;
		} else {
			return this._centroidY;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.Controls.TouchGestureEventArgs::CentroidY()" />*/
	,
	_velocityX: 0,
	/*<BeginProperty Name="System.Double Infragistics.Controls.TouchGestureEventArgs::VelocityX()" />*/
	velocityX: function (value) {
		if (arguments.length === 1) {
			this._velocityX = value;
			return value;
		} else {
			return this._velocityX;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.Controls.TouchGestureEventArgs::VelocityX()" />*/
	,
	_velocityY: 0,
	/*<BeginProperty Name="System.Double Infragistics.Controls.TouchGestureEventArgs::VelocityY()" />*/
	velocityY: function (value) {
		if (arguments.length === 1) {
			this._velocityY = value;
			return value;
		} else {
			return this._velocityY;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.Controls.TouchGestureEventArgs::VelocityY()" />*/
	,
	$type: new $.ig.Type('TouchGestureEventArgs', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Controls.TouchGestureEventArgs" />*/

/*<BeginType Name="Infragistics.Controls.TouchHistoryItem" />*/

$.ig.util.defType('TouchHistoryItem', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	_x: 0,
	/*<BeginProperty Name="System.Double Infragistics.Controls.TouchHistoryItem::X()" />*/
	x: function (value) {
		if (arguments.length === 1) {
			this._x = value;
			return value;
		} else {
			return this._x;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.Controls.TouchHistoryItem::X()" />*/
	,
	_y: 0,
	/*<BeginProperty Name="System.Double Infragistics.Controls.TouchHistoryItem::Y()" />*/
	y: function (value) {
		if (arguments.length === 1) {
			this._y = value;
			return value;
		} else {
			return this._y;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.Controls.TouchHistoryItem::Y()" />*/
	,
	_time: 0,
	/*<BeginProperty Name="System.Int64 Infragistics.Controls.TouchHistoryItem::Time()" />*/
	time: function (value) {
		if (arguments.length === 1) {
			this._time = value;
			return value;
		} else {
			return this._time;
		}
	}
	/*<EndProperty Name="System.Int64 Infragistics.Controls.TouchHistoryItem::Time()" />*/
	,
	$type: new $.ig.Type('TouchHistoryItem', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Controls.TouchHistoryItem" />*/

/*<BeginType Name="Infragistics.Controls.TouchVelocityReading" />*/

$.ig.util.defType('TouchVelocityReading', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	_x: 0,
	/*<BeginProperty Name="System.Double Infragistics.Controls.TouchVelocityReading::X()" />*/
	x: function (value) {
		if (arguments.length === 1) {
			this._x = value;
			return value;
		} else {
			return this._x;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.Controls.TouchVelocityReading::X()" />*/
	,
	_y: 0,
	/*<BeginProperty Name="System.Double Infragistics.Controls.TouchVelocityReading::Y()" />*/
	y: function (value) {
		if (arguments.length === 1) {
			this._y = value;
			return value;
		} else {
			return this._y;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.Controls.TouchVelocityReading::Y()" />*/
	,
	$type: new $.ig.Type('TouchVelocityReading', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Controls.TouchVelocityReading" />*/

/*<BeginType Name="Infragistics.Controls.TouchVelocityTracker" />*/

$.ig.util.defType('TouchVelocityTracker', 'Object', {
	init: function () {
		this.__history = new Array($.ig.TouchVelocityTracker.prototype._touchHistoryLength);
		this.__touchHistoryPosition = 0;
		$.ig.Object.prototype.init.call(this);
	},
	__history: null,
	__touchHistoryPosition: 0,
	/*<BeginMethod Name="System.Void Infragistics.Controls.TouchVelocityTracker::TrackPoint(System.Double, System.Double, System.Int64)" />*/
	trackPoint: function (x, y, time) {
		if ($.ig.util.isNaN(x) || $.ig.util.isNaN(y)) {
			return;
		}
		var historyItem = (function () {
			var $ret = new $.ig.TouchHistoryItem();
			$ret.x(x);
			$ret.y(y);
			$ret.time(time);
			return $ret;
		}());
		this.__history[this.__touchHistoryPosition] = historyItem;
		this.__touchHistoryPosition++;
		if (this.__touchHistoryPosition > $.ig.TouchVelocityTracker.prototype._touchHistoryLength - 1) {
			this.__touchHistoryPosition = 0;
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.TouchVelocityTracker::TrackPoint(System.Double, System.Double, System.Int64)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.TouchVelocityTracker::Clear()" />*/
	clear: function () {
		this.__touchHistoryPosition = 0;
		for (var i = 0; i < $.ig.TouchVelocityTracker.prototype._touchHistoryLength; i++) {
			this.__history[i] = null;
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.TouchVelocityTracker::Clear()" />*/
	,
	/*<BeginMethod Name="Infragistics.Controls.TouchVelocityReading Infragistics.Controls.TouchVelocityTracker::GetVelocity(System.Int64)" />*/
	getVelocity: function (time) {
		var currentTime = time;
		var maxX = NaN;
		var minX = NaN;
		var maxY = NaN;
		var minY = NaN;
		var minTime = 0;
		var maxTime = 0;
		var first = true;
		for (var i = 0; i < $.ig.TouchVelocityTracker.prototype._touchHistoryLength; i++) {
			if (this.__history[i] == null) {
				continue;
			}
			var tooOld = (this.__history[i].time() - currentTime) > 300;
			if (tooOld) {
				continue;
			}
			if (first) {
				first = false;
				maxX = this.__history[i].x();
				minX = this.__history[i].x();
				maxY = this.__history[i].y();
				minY = this.__history[i].y();
				minTime = this.__history[i].time();
				maxTime = this.__history[i].time();
			} else {
				if (this.__history[i].time() < minTime) {
					minTime = this.__history[i].time();
					minX = this.__history[i].x();
					minY = this.__history[i].y();
				}
				if (this.__history[i].time() > maxTime) {
					maxTime = this.__history[i].time();
					maxX = this.__history[i].x();
					maxY = this.__history[i].y();
				}
			}
		}
		if (minTime == maxTime || $.ig.util.isNaN(maxX) || $.ig.util.isNaN(minX) || $.ig.util.isNaN(maxY) || $.ig.util.isNaN(minY)) {
			return (function () {
				var $ret = new $.ig.TouchVelocityReading();
				$ret.x(NaN);
				$ret.y(NaN);
				return $ret;
			}());
		}
		return (function () {
			var $ret = new $.ig.TouchVelocityReading();
			$ret.x((maxX - minX) / ((maxTime - minTime) / 1000));
			$ret.y((maxY - minY) / ((maxTime - minTime) / 1000));
			return $ret;
		}());
	}
	/*<EndMethod Name="Infragistics.Controls.TouchVelocityReading Infragistics.Controls.TouchVelocityTracker::GetVelocity(System.Int64)" />*/
	,
	$type: new $.ig.Type('TouchVelocityTracker', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Controls.TouchVelocityTracker" />*/

/*<BeginType Name="Infragistics.Controls.ArrayAccessHelper" />*/

$.ig.util.defType('ArrayAccessHelper', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name=" Infragistics.Controls.ArrayAccessHelper::AsDoubleArray(System.Collections.Generic.IList)" />*/
	asDoubleArray: function (values_) {
		var arr = Array.isArray(values_) ? values_ : null;;
		return arr;
		return null;
	}
	/*<EndMethod Name=" Infragistics.Controls.ArrayAccessHelper::AsDoubleArray(System.Collections.Generic.IList)" />*/
	,
	/*<BeginMethod Name=" Infragistics.Controls.ArrayAccessHelper::AsIntArray(System.Collections.Generic.IList)" />*/
	asIntArray: function (values_) {
		var arr = Array.isArray(values_) ? values_ : null;;
		return arr;
		return null;
	}
	/*<EndMethod Name=" Infragistics.Controls.ArrayAccessHelper::AsIntArray(System.Collections.Generic.IList)" />*/
	,
	/*<BeginMethod Name=" Infragistics.Controls.ArrayAccessHelper::AsBucketArray(System.Collections.Generic.IList)" />*/
	asBucketArray: function (buckets) {
		if ($.ig.util.cast($.ig.List$1.prototype.$type.specialize(Array), buckets) !== null) {
			return (buckets).asArray();
		}
		return null;
	}
	/*<EndMethod Name=" Infragistics.Controls.ArrayAccessHelper::AsBucketArray(System.Collections.Generic.IList)" />*/
	,
	$type: new $.ig.Type('ArrayAccessHelper', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Controls.ArrayAccessHelper" />*/

/*<BeginType Name="Infragistics.Controls.InterpolationUtil" />*/

$.ig.util.defType('InterpolationUtil', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Collections.Generic.List Infragistics.Controls.InterpolationUtil::InterpolatePoints(System.Collections.Generic.List, System.Double, System.Collections.Generic.List, System.Collections.Generic.List)" />*/
	interpolatePoints: function (interpolatedPoints, p, minPoints, maxPoints) {
		var q = 1 - p;
		if (interpolatedPoints == null) {
			interpolatedPoints = new $.ig.List$1($.ig.Point.prototype.$type, 0);
		}
		if (minPoints == null) {
			minPoints = new $.ig.List$1($.ig.Point.prototype.$type, 0);
		}
		var minCount = minPoints.count();
		var maxCount = maxPoints.count();
		var count = Math.max(minCount, maxCount);
		var interpolatedCount = interpolatedPoints.count();
		if (interpolatedCount < count) {
			interpolatedPoints.insertRange(interpolatedCount, new Array(count - interpolatedCount));
		}
		if (interpolatedCount > count) {
			interpolatedPoints.removeRange(count, interpolatedCount - count);
		}
		for (var i = 0; i < Math.min(minCount, maxCount); ++i) {
			interpolatedPoints.__inner[i] = { __x: (minPoints.__inner[i].__x * q) + (maxPoints.__inner[i].__x * p), __y: (minPoints.__inner[i].__y * q) + (maxPoints.__inner[i].__y * p), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName };
		}
		if (minCount < maxCount) {
			var mn = minCount > 0 ? minPoints.__inner[minCount - 1] : { __x: 0, __y: 0, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName };
			for (var i1 = minCount; i1 < maxCount; ++i1) {
				interpolatedPoints.__inner[i1] = { __x: (mn.__x * q) + (maxPoints.__inner[i1].__x * p), __y: (mn.__y * q) + (maxPoints.__inner[i1].__y * p), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName };
			}
		}
		if (minCount > maxCount) {
			var mx = maxCount > 0 ? maxPoints.__inner[maxCount - 1] : { __x: 0, __y: 0, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName };
			for (var i2 = maxCount; i2 < minCount; ++i2) {
				interpolatedPoints.__inner[i2] = interpolatedPoints.__inner[i2] = { __x: (minPoints.__inner[i2].__x * q) + (mx.__x * p), __y: (minPoints.__inner[i2].__y * q) + (mx.__y * p), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName };
			}
		}
		return interpolatedPoints;
	}
	/*<EndMethod Name="System.Collections.Generic.List Infragistics.Controls.InterpolationUtil::InterpolatePoints(System.Collections.Generic.List, System.Double, System.Collections.Generic.List, System.Collections.Generic.List)" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.List Infragistics.Controls.InterpolationUtil::InterpolateValues`1(System.Collections.Generic.List, System.Double, System.Collections.Generic.List, System.Collections.Generic.List, System.Func, System.Func)" />*/
	interpolateValues$1: function ($t, interpolatedValues, p, minValues, maxValues, createEmpty, interpolate) {
		var q = 1 - p;
		if (interpolatedValues == null) {
			interpolatedValues = new $.ig.List$1($t, 0);
		}
		if (minValues == null) {
			minValues = new $.ig.List$1($t, 0);
		}
		var minCount = minValues.count();
		var maxCount = maxValues.count();
		var count = Math.max(minCount, maxCount);
		if (interpolatedValues.count() < count) {
			var capacity = count - interpolatedValues.count();
			var range = new Array(capacity);
			interpolatedValues.insertRange(interpolatedValues.count(), range);
		}
		if (interpolatedValues.count() > count) {
			interpolatedValues.removeRange(count, interpolatedValues.count() - count);
		}
		for (var i = 0; i < Math.min(minCount, maxCount); ++i) {
			interpolatedValues.__inner[i] = interpolate(p, q, minValues.__inner[i], maxValues.__inner[i]);
		}
		if (minCount < maxCount) {
			var mn = minCount > 0 ? minValues.__inner[minCount - 1] : createEmpty();
			for (var i1 = minCount; i1 < maxCount; ++i1) {
				interpolatedValues.__inner[i1] = interpolate(p, q, mn, maxValues.__inner[i1]);
			}
		}
		if (minCount > maxCount) {
			var mx = maxCount > 0 ? maxValues.__inner[maxCount - 1] : createEmpty();
			for (var i2 = maxCount; i2 < minCount; ++i2) {
				interpolatedValues.__inner[i2] = interpolate(p, q, minValues.__inner[i2], mx);
			}
		}
		return interpolatedValues;
	}
	/*<EndMethod Name="System.Collections.Generic.List Infragistics.Controls.InterpolationUtil::InterpolateValues`1(System.Collections.Generic.List, System.Double, System.Collections.Generic.List, System.Collections.Generic.List, System.Func, System.Func)" />*/
	,
	$type: new $.ig.Type('InterpolationUtil', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Controls.InterpolationUtil" />*/

/*<BeginType Name="Infragistics.Controls.SyncableObservableCollection`1" />*/

$.ig.util.defType('SyncableObservableCollection$1', 'Object', {
	$t: null,
	__syncTarget: null,
	/*<BeginProperty Name="Infragistics.Controls.SyncableObservableCollection Infragistics.Controls.SyncableObservableCollection`1::SyncTarget()" />*/
	syncTarget: function (value) {
		if (arguments.length === 1) {
			var oldValue = this.__syncTarget;
			this.__syncTarget = value;
			this.onSyncTargetChanged(oldValue, this.__syncTarget);
			return value;
		} else {
			return this.__syncTarget;
		}
	}
	/*<EndProperty Name="Infragistics.Controls.SyncableObservableCollection Infragistics.Controls.SyncableObservableCollection`1::SyncTarget()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.SyncableObservableCollection`1::OnSyncTargetChanged(Infragistics.Controls.SyncableObservableCollection, Infragistics.Controls.SyncableObservableCollection)" />*/
	onSyncTargetChanged: function (oldValue, newValue) {
		if (oldValue != null) {
			oldValue.removeListener(this.targetChanged.runOn(this));
		}
		this.syncWithTarget();
		if (newValue != null) {
			newValue.addListener(this.targetChanged.runOn(this));
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.SyncableObservableCollection`1::OnSyncTargetChanged(Infragistics.Controls.SyncableObservableCollection, Infragistics.Controls.SyncableObservableCollection)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.SyncableObservableCollection`1::SyncWithTarget()" />*/
	syncWithTarget: function () {
		if (this.__syncTarget == null) {
			return;
		}
		this.__duringSync = true;
		var union = new $.ig.List$1(this.$t, 0);
		var seen = new $.ig.HashSet$1(this.$t, 0);
		for (var i = 0; i < this.all().count(); i++) {
			if (!seen.contains(this.all().item(i))) {
				union.add(this.all().item(i));
				seen.add(this.all().item(i));
			}
		}
		for (var i1 = 0; i1 < this.__syncTarget.all().count(); i1++) {
			if (!seen.contains(this.__syncTarget.all().item(i1))) {
				union.add(this.__syncTarget.all().item(i1));
				seen.add(this.__syncTarget.all().item(i1));
			}
		}
		this.syncWithUnion(union, this.all());
		this.syncWithUnion(union, this.__syncTarget.all());
		this.__duringSync = false;
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.SyncableObservableCollection`1::SyncWithTarget()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.SyncableObservableCollection`1::SyncWithUnion(System.Collections.Generic.List, System.Collections.Generic.IList)" />*/
	syncWithUnion: function (union, list) {
		var toRemove = new $.ig.List$1($.ig.Number.prototype.$type, 0);
		var j = 0;
		for (var i = 0; i < list.count(); i++) {
			if ($.ig.util.getBoxIfEnum(this.$t, list.item(i)) == null) {
				toRemove.add(i);
				continue;
			}
			if (j > union.count() - 1) {
				toRemove.add(i);
				continue;
			}
			if (list.item(i).equals($.ig.util.getBoxIfEnum(this.$t, union.__inner[j]))) {
				j++;
				continue;
			}
			list.insert(i, union.__inner[j]);
			j++;
		}
		for (var i1 = toRemove.count() - 1; i1 >= 0; i1--) {
			list.removeAt(i1);
		}
		for (; j < union.count(); j++) {
			list.add(union.__inner[j]);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.SyncableObservableCollection`1::SyncWithUnion(System.Collections.Generic.List, System.Collections.Generic.IList)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.SyncableObservableCollection`1::TargetChanged(System.Object, System.Collections.Specialized.NotifyCollectionChangedEventArgs)" />*/
	targetChanged: function (sender, e) {
		if (this.__syncTarget == null) {
			return;
		}
		if (this.__duringSync) {
			return;
		}
		if (this.__duringSelfChange) {
			return;
		}
		var inner = this.__syncTarget.all();
		this.__duringTargetChange = true;
		this.syncChange(e, this.all(), inner);
		this.__duringTargetChange = false;
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.SyncableObservableCollection`1::TargetChanged(System.Object, System.Collections.Specialized.NotifyCollectionChangedEventArgs)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.SyncableObservableCollection`1::OnSelfChanged(System.Collections.Specialized.NotifyCollectionChangedEventArgs)" />*/
	onSelfChanged: function (e) {
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.SyncableObservableCollection`1::OnSelfChanged(System.Collections.Specialized.NotifyCollectionChangedEventArgs)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.SyncableObservableCollection`1::SelfChanged(System.Object, System.Collections.Specialized.NotifyCollectionChangedEventArgs)" />*/
	selfChanged: function (sender, e) {
		this.onSelfChanged(e);
		if (this.__syncTarget == null) {
			return;
		}
		if (this.__duringSync) {
			return;
		}
		if (this.__duringTargetChange) {
			return;
		}
		var inner = this.__syncTarget.all();
		this.__duringSelfChange = true;
		this.syncChange(e, inner, this.all());
		this.__duringSelfChange = false;
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.SyncableObservableCollection`1::SelfChanged(System.Object, System.Collections.Specialized.NotifyCollectionChangedEventArgs)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.SyncableObservableCollection`1::SyncChange(System.Collections.Specialized.NotifyCollectionChangedEventArgs, System.Collections.Generic.IList, System.Collections.Generic.IList)" />*/
	syncChange: function (e, to, from) {
		switch (e.action()) {
			case $.ig.NotifyCollectionChangedAction.prototype.add:
				if (e.newItems() != null) {
					for (var i = 0; i < e.newItems().count(); i++) {
						to.insert(i + e.newStartingIndex(), $.ig.util.castObjTo$t(this.$t, e.newItems().item(i)));
					}
				}
				break;
			case $.ig.NotifyCollectionChangedAction.prototype.remove:
				if (e.oldItems() != null) {
					for (var j = 0; j < e.oldItems().count(); j++) {
						to.removeAt(e.oldStartingIndex());
					}
				}
				break;
			case $.ig.NotifyCollectionChangedAction.prototype.replace:
				if (e.oldItems() != null) {
					for (var k = 0; k < e.oldItems().count(); k++) {
						to.removeAt(e.oldStartingIndex());
					}
				}
				if (e.newItems() != null) {
					for (var m = 0; m < e.newItems().count(); m++) {
						to.insert(m + e.newStartingIndex(), $.ig.util.castObjTo$t(this.$t, e.newItems().item(m)));
					}
				}
				break;
			case $.ig.NotifyCollectionChangedAction.prototype.reset:
				to.clear();
				var en = from.getEnumerator();
				while (en.moveNext()) {
					var item = en.current();
					to.add(item);
				}
				break;
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.SyncableObservableCollection`1::SyncChange(System.Collections.Specialized.NotifyCollectionChangedEventArgs, System.Collections.Generic.IList, System.Collections.Generic.IList)" />*/
	,
	__duringSync: false,
	__duringTargetChange: false,
	__duringSelfChange: false,
	__inner: null,
	init: function ($t, initNumber) {
		this.$t = $t;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$t);
		}
		if (initNumber > 0) {
			switch (initNumber) {
				case 1:
					this.init1.apply(this, arguments);
					break;
			}
			return;
		}
		this.__listeners = new $.ig.List$1($.ig.SyncableObservableCollectionChangedListener.prototype.$type, 0);
		$.ig.Object.prototype.init.call(this);
		this.__inner = new $.ig.ObservableCollection$1(this.$t, 0);
		this.addListener(this.selfChanged.runOn(this));
		var $t = this.__inner;
		$t.collectionChanged = $.ig.Delegate.prototype.combine($t.collectionChanged, this._sortDescriptions_CollectionChanged.runOn(this));
	},
	/*<BeginMethod Name="System.Void Infragistics.Controls.SyncableObservableCollection`1::_sortDescriptions_CollectionChanged(System.Object, System.Collections.Specialized.NotifyCollectionChangedEventArgs)" />*/
	_sortDescriptions_CollectionChanged: function (sender, e) {
		var en = this.__listeners.getEnumerator();
		while (en.moveNext()) {
			var listener = en.current();
			listener.onChanged(this);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.SyncableObservableCollection`1::_sortDescriptions_CollectionChanged(System.Object, System.Collections.Specialized.NotifyCollectionChangedEventArgs)" />*/
	,
	init1: function ($t, initNumber, _internalDescriptors) {
		this.$t = $t;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$t);
		}
		this.__listeners = new $.ig.List$1($.ig.SyncableObservableCollectionChangedListener.prototype.$type, 0);
		$.ig.Object.prototype.init.call(this);
		this.__inner = _internalDescriptors;
	},
	/*<BeginMethod Name="System.Boolean Infragistics.Controls.SyncableObservableCollection`1::Add(Infragistics.Controls.SyncableObservableCollection.T)" />*/
	add: function (item) {
		this.__inner.add(item);
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Controls.SyncableObservableCollection`1::Add(Infragistics.Controls.SyncableObservableCollection.T)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.SyncableObservableCollection`1::Add(System.Int32, Infragistics.Controls.SyncableObservableCollection.T)" />*/
	add1: function (index, item) {
		this.__inner.insert(index, item);
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.SyncableObservableCollection`1::Add(System.Int32, Infragistics.Controls.SyncableObservableCollection.T)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.SyncableObservableCollection`1::Clear()" />*/
	clear: function () {
		this.__inner.clear();
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.SyncableObservableCollection`1::Clear()" />*/
	,
	/*<BeginMethod Name="Infragistics.Controls.SyncableObservableCollection.T Infragistics.Controls.SyncableObservableCollection`1::Get(System.Int32)" />*/
	get: function (index) {
		return this.__inner.__inner[index];
	}
	/*<EndMethod Name="Infragistics.Controls.SyncableObservableCollection.T Infragistics.Controls.SyncableObservableCollection`1::Get(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.Controls.SyncableObservableCollection`1::IndexOf(Infragistics.Controls.SyncableObservableCollection.T)" />*/
	indexOf: function (item) {
		return this.__inner.indexOf(item);
	}
	/*<EndMethod Name="System.Int32 Infragistics.Controls.SyncableObservableCollection`1::IndexOf(Infragistics.Controls.SyncableObservableCollection.T)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Controls.SyncableObservableCollection`1::Remove(Infragistics.Controls.SyncableObservableCollection.T)" />*/
	remove1: function (item) {
		var has = this.__inner.contains(item);
		this.__inner.remove(item);
		return has;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Controls.SyncableObservableCollection`1::Remove(Infragistics.Controls.SyncableObservableCollection.T)" />*/
	,
	/*<BeginMethod Name="Infragistics.Controls.SyncableObservableCollection.T Infragistics.Controls.SyncableObservableCollection`1::Remove(System.Int32)" />*/
	remove: function (index) {
		var item = this.__inner.__inner[index];
		this.__inner.removeAt(index);
		return item;
	}
	/*<EndMethod Name="Infragistics.Controls.SyncableObservableCollection.T Infragistics.Controls.SyncableObservableCollection`1::Remove(System.Int32)" />*/
	,
	/*<BeginMethod Name="Infragistics.Controls.SyncableObservableCollection.T Infragistics.Controls.SyncableObservableCollection`1::Set(System.Int32, Infragistics.Controls.SyncableObservableCollection.T)" />*/
	set: function (index, value) {
		this.__inner.item(index, value);
		return value;
	}
	/*<EndMethod Name="Infragistics.Controls.SyncableObservableCollection.T Infragistics.Controls.SyncableObservableCollection`1::Set(System.Int32, Infragistics.Controls.SyncableObservableCollection.T)" />*/
	,
	/*<BeginMethod Name="System.Int32 Infragistics.Controls.SyncableObservableCollection`1::Size()" />*/
	size: function () {
		return this.__inner.count();
	}
	/*<EndMethod Name="System.Int32 Infragistics.Controls.SyncableObservableCollection`1::Size()" />*/
	,
	__listeners: null,
	/*<BeginMethod Name="System.Void Infragistics.Controls.SyncableObservableCollection`1::AddChangedListener(Infragistics.Controls.ISyncableObservableCollectionChangedListener)" />*/
	addChangedListener: function (listener) {
		this.__listeners.add(listener);
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.SyncableObservableCollection`1::AddChangedListener(Infragistics.Controls.ISyncableObservableCollectionChangedListener)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.SyncableObservableCollection`1::RemoveChangedListener(Infragistics.Controls.ISyncableObservableCollectionChangedListener)" />*/
	removeChangedListener: function (listener) {
		this.__listeners.remove(listener);
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.SyncableObservableCollection`1::RemoveChangedListener(Infragistics.Controls.ISyncableObservableCollectionChangedListener)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.SyncableObservableCollection`1::AddListener(System.Collections.Specialized.NotifyCollectionChangedEventHandler)" />*/
	addListener: function (eventHandler) {
		var $t = this.__inner;
		$t.collectionChanged = $.ig.Delegate.prototype.combine($t.collectionChanged, eventHandler);
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.SyncableObservableCollection`1::AddListener(System.Collections.Specialized.NotifyCollectionChangedEventHandler)" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.SyncableObservableCollection`1::RemoveListener(System.Collections.Specialized.NotifyCollectionChangedEventHandler)" />*/
	removeListener: function (eventHandler) {
		var $t = this.__inner;
		$t.collectionChanged = $.ig.Delegate.prototype.remove($t.collectionChanged, eventHandler);
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.SyncableObservableCollection`1::RemoveListener(System.Collections.Specialized.NotifyCollectionChangedEventHandler)" />*/
	,
	/*<BeginProperty Name="System.Collections.Generic.IList Infragistics.Controls.SyncableObservableCollection`1::All()" />*/
	all: function () {
		return this.__inner;
	}
	/*<EndProperty Name="System.Collections.Generic.IList Infragistics.Controls.SyncableObservableCollection`1::All()" />*/
	,
	$type: new $.ig.Type('SyncableObservableCollection$1', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Controls.SyncableObservableCollection`1" />*/

/*<BeginType Name="Infragistics.Controls.ISyncableObservableCollectionChangedListener" />*/

$.ig.util.defType('SyncableObservableCollectionChangedListener', 'Object', {
	$type: new $.ig.Type('SyncableObservableCollectionChangedListener', null)
}, true);

/*<EndType Name="Infragistics.Controls.ISyncableObservableCollectionChangedListener" />*/

/*<BeginType Name="Infragistics.Controls.Charts.LegendItemHelper" />*/

$.ig.util.defType('LegendItemHelper', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginProperty Name="System.Double Infragistics.Controls.Charts.LegendItemHelper::PixelRatio()" />*/
	pixelRatio: function (value) {
		if (arguments.length === 1) {
			$.ig.LegendItemHelper.prototype.__pixelRatio = value;
			return value;
		} else {
			if ($.ig.util.isNaN($.ig.LegendItemHelper.prototype.__pixelRatio)) {
				$.ig.LegendItemHelper.prototype.__pixelRatio = window.devicePixelRatio == window.undefined ? 1 : window.devicePixelRatio;
			}
			return $.ig.LegendItemHelper.prototype.__pixelRatio;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.Controls.Charts.LegendItemHelper::PixelRatio()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.Charts.LegendItemHelper::CoreLegendItemRender(System.Object, System.Double, System.Double, System.Double, System.Double, System.Object, System.String, System.Windows.DataTemplate, System.Windows.DataTemplatePassInfo)" />*/
	coreLegendItemRender: function (context, xPosition, yPosition, availableWidth, availableHeight, data, title, template, passInfo) {
		var obj = context;
		var cont = data;
		if (cont != null && cont.series() != null) {
			if (template != null) {
				var BadgeWidth = 18, BadgeHeight = 16;
				var badgeDom = obj.createElement("canvas");
				badgeDom.setAttribute("width", (BadgeWidth * $.ig.LegendItemHelper.prototype.pixelRatio()).toString());
				badgeDom.setAttribute("height", (BadgeHeight * $.ig.LegendItemHelper.prototype.pixelRatio()).toString());
				badgeDom.setStyleProperty("width", BadgeWidth.toString() + "px");
				badgeDom.setStyleProperty("height", BadgeHeight.toString() + "px");
				var badgeCellDom = obj.createElement("td");
				badgeCellDom.addClass("ui-legend-item-badge");
				badgeCellDom.append(badgeDom);
				var badgeContext = obj.get2DCanvasContext(badgeDom);
				var measureInfo = new $.ig.DataTemplateMeasureInfo();
				measureInfo.passInfo = passInfo;
				measureInfo.context = badgeContext;
				measureInfo.width = BadgeWidth;
				measureInfo.height = BadgeHeight;
				measureInfo.data = cont;
				template.measure()(measureInfo);
				var renderInfo = new $.ig.DataTemplateRenderInfo();
				renderInfo.availableWidth = ($.ig.util.isNaN(measureInfo.width) ? BadgeWidth : Math.min(measureInfo.width, BadgeWidth));
				renderInfo.availableHeight = ($.ig.util.isNaN(measureInfo.height) ? BadgeHeight : Math.min(measureInfo.height, BadgeHeight));
				renderInfo.passInfo = passInfo;
				renderInfo.context = badgeContext;
				renderInfo.data = cont;
				renderInfo.xPosition = 0;
				renderInfo.yPosition = 0;
				if ($.ig.LegendItemHelper.prototype.pixelRatio() != 1) {
					badgeContext.save();
					badgeContext.scale($.ig.LegendItemHelper.prototype.pixelRatio(), $.ig.LegendItemHelper.prototype.pixelRatio());
				}
				template.render()(renderInfo);
				if ($.ig.LegendItemHelper.prototype.pixelRatio() != 1) {
					badgeContext.restore();
				}
				obj.append(badgeCellDom);
			}
			var titleDom = obj.createElement("td");
			var titleSpan = obj.createElement("span");
			titleSpan.setText(title);
			titleDom.append(titleSpan);
			titleDom.addClass("ui-legend-item-text");
			obj.append(titleDom);
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.Charts.LegendItemHelper::CoreLegendItemRender(System.Object, System.Double, System.Double, System.Double, System.Double, System.Object, System.String, System.Windows.DataTemplate, System.Windows.DataTemplatePassInfo)" />*/
	,
	$type: new $.ig.Type('LegendItemHelper', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Controls.Charts.LegendItemHelper" />*/

/*<BeginType Name="Infragistics.Controls.Charts.ILegendContext" />*/

$.ig.util.defType('ILegendContext', 'Object', {
	$type: new $.ig.Type('ILegendContext', null)
}, true);

/*<EndType Name="Infragistics.Controls.Charts.ILegendContext" />*/

/*<BeginType Name="Infragistics.Controls.Charts.DataContext" />*/

$.ig.util.defType('DataContext', 'Object', {
	init: function () {
		this.__actualItemBrush = null;
		this.__outline = null;
		this.__itemLabel = null;
		this.__itemBrush = null;
		this.__thickness = 0;
		this.__legendLabel = null;
		$.ig.Object.prototype.init.call(this);
	},
	_series: null,
	/*<BeginProperty Name="System.Object Infragistics.Controls.Charts.DataContext::Series()" />*/
	series: function (value) {
		if (arguments.length === 1) {
			this._series = value;
			return value;
		} else {
			return this._series;
		}
	}
	/*<EndProperty Name="System.Object Infragistics.Controls.Charts.DataContext::Series()" />*/
	,
	__item: null,
	/*<BeginProperty Name="System.Object Infragistics.Controls.Charts.DataContext::Item()" />*/
	item: function (value) {
		if (arguments.length === 1) {
			if (value != this.__item) {
				this.__item = value;
				this.onPropetyChanged("Item");
			}
			return value;
		} else {
			return this.__item;
		}
	}
	/*<EndProperty Name="System.Object Infragistics.Controls.Charts.DataContext::Item()" />*/
	,
	__actualItemBrush: null,
	/*<BeginProperty Name="System.Windows.Media.Brush Infragistics.Controls.Charts.DataContext::ActualItemBrush()" />*/
	actualItemBrush: function (value) {
		if (arguments.length === 1) {
			if (value != this.__actualItemBrush) {
				this.__actualItemBrush = value;
				this.onPropetyChanged("ActualItemBrush");
			}
			return value;
		} else {
			return this.__actualItemBrush;
		}
	}
	/*<EndProperty Name="System.Windows.Media.Brush Infragistics.Controls.Charts.DataContext::ActualItemBrush()" />*/
	,
	__outline: null,
	/*<BeginProperty Name="System.Windows.Media.Brush Infragistics.Controls.Charts.DataContext::Outline()" />*/
	outline: function (value) {
		if (arguments.length === 1) {
			if (value != this.__outline) {
				this.__outline = value;
				this.onPropetyChanged("Outline");
			}
			return value;
		} else {
			return this.__outline;
		}
	}
	/*<EndProperty Name="System.Windows.Media.Brush Infragistics.Controls.Charts.DataContext::Outline()" />*/
	,
	__itemLabel: null,
	/*<BeginProperty Name="System.Object Infragistics.Controls.Charts.DataContext::ItemLabel()" />*/
	itemLabel: function (value) {
		if (arguments.length === 1) {
			if (value != this.__itemLabel) {
				this.__itemLabel = value;
				this.onPropetyChanged("ItemLabel");
			}
			return value;
		} else {
			return this.__itemLabel;
		}
	}
	/*<EndProperty Name="System.Object Infragistics.Controls.Charts.DataContext::ItemLabel()" />*/
	,
	__itemBrush: null,
	/*<BeginProperty Name="System.Windows.Media.Brush Infragistics.Controls.Charts.DataContext::ItemBrush()" />*/
	itemBrush: function (value) {
		if (arguments.length === 1) {
			if (value != this.__itemBrush) {
				this.__itemBrush = value;
				this.onPropetyChanged("ItemBrush");
			}
			return value;
		} else {
			return this.__itemBrush;
		}
	}
	/*<EndProperty Name="System.Windows.Media.Brush Infragistics.Controls.Charts.DataContext::ItemBrush()" />*/
	,
	__thickness: 0,
	/*<BeginProperty Name="System.Double Infragistics.Controls.Charts.DataContext::Thickness()" />*/
	thickness: function (value) {
		if (arguments.length === 1) {
			if (value != this.__thickness) {
				this.__thickness = value;
				this.onPropetyChanged("Thickness");
			}
			return value;
		} else {
			return this.__thickness;
		}
	}
	/*<EndProperty Name="System.Double Infragistics.Controls.Charts.DataContext::Thickness()" />*/
	,
	__legendLabel: null,
	/*<BeginProperty Name="System.Object Infragistics.Controls.Charts.DataContext::LegendLabel()" />*/
	legendLabel: function (value) {
		if (arguments.length === 1) {
			if (value != this.__legendLabel) {
				this.__legendLabel = value;
				this.onPropetyChanged("LegendLabel");
			}
			return value;
		} else {
			return this.__legendLabel;
		}
	}
	/*<EndProperty Name="System.Object Infragistics.Controls.Charts.DataContext::LegendLabel()" />*/
	,
	propertyChanged: null,
	/*<BeginMethod Name="System.Void Infragistics.Controls.Charts.DataContext::OnPropetyChanged(System.String)" />*/
	onPropetyChanged: function (propertyName) {
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new $.ig.PropertyChangedEventArgs(propertyName));
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.Charts.DataContext::OnPropetyChanged(System.String)" />*/
	,
	/*<BeginMethod Name="System.Object Infragistics.Controls.Charts.DataContext::Flatten()" />*/
	flatten: function () {
		var series_ = this.series();
		var item_ = this.item();
		var actualItemBrush_ = this.actualItemBrush();
		var outline_ = this.outline();
		var itemLabel_ = this.itemLabel();
		var itemBrush_ = this.itemBrush();
		var thickness_ = this.thickness();
		return { item: item_, itemBrush: actualItemBrush_, outline: outline_, itemLabel: itemLabel_, thickness: thickness_ };
	}
	/*<EndMethod Name="System.Object Infragistics.Controls.Charts.DataContext::Flatten()" />*/
	,
	$type: new $.ig.Type('DataContext', $.ig.Object.prototype.$type, [$.ig.ILegendContext.prototype.$type, $.ig.INotifyPropertyChanged.prototype.$type])
}, true);

/*<EndType Name="Infragistics.Controls.Charts.DataContext" />*/

/*<BeginType Name="Infragistics.Controls.Charts.TrendCalculators" />*/

$.ig.util.defType('TrendCalculators', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Collections.Generic.IEnumerable Infragistics.Controls.Charts.TrendCalculators::WMA(System.Collections.Generic.IEnumerable, System.Int32)" />*/
	wMA: function (sequence, period) {
		var d__ = new $.ig.TrendCalculators___WMA__IteratorClass(-2);
		d__.__3__sequence = sequence;
		d__.__3__period = period;
		return d__;
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerable Infragistics.Controls.Charts.TrendCalculators::WMA(System.Collections.Generic.IEnumerable, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerable Infragistics.Controls.Charts.TrendCalculators::EMA(System.Collections.Generic.IEnumerable, System.Int32)" />*/
	eMA: function (sequence, period) {
		var d__ = new $.ig.TrendCalculators___EMA__IteratorClass(-2);
		d__.__3__sequence = sequence;
		d__.__3__period = period;
		return d__;
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerable Infragistics.Controls.Charts.TrendCalculators::EMA(System.Collections.Generic.IEnumerable, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerable Infragistics.Controls.Charts.TrendCalculators::MMA(System.Collections.Generic.IEnumerable, System.Int32)" />*/
	mMA: function (sequence, period) {
		var d__ = new $.ig.TrendCalculators___MMA__IteratorClass(-2);
		d__.__3__sequence = sequence;
		d__.__3__period = period;
		return d__;
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerable Infragistics.Controls.Charts.TrendCalculators::MMA(System.Collections.Generic.IEnumerable, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerable Infragistics.Controls.Charts.TrendCalculators::CMA(System.Collections.Generic.IEnumerable)" />*/
	cMA: function (sequence) {
		var d__ = new $.ig.TrendCalculators___CMA__IteratorClass(-2);
		d__.__3__sequence = sequence;
		return d__;
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerable Infragistics.Controls.Charts.TrendCalculators::CMA(System.Collections.Generic.IEnumerable)" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerable Infragistics.Controls.Charts.TrendCalculators::SMA(System.Collections.Generic.IEnumerable, System.Int32)" />*/
	sMA: function (sequence, period) {
		var d__ = new $.ig.TrendCalculators___SMA__IteratorClass(-2);
		d__.__3__sequence = sequence;
		d__.__3__period = period;
		return d__;
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerable Infragistics.Controls.Charts.TrendCalculators::SMA(System.Collections.Generic.IEnumerable, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerable Infragistics.Controls.Charts.TrendCalculators::MovingSum(System.Collections.Generic.IEnumerable, System.Int32)" />*/
	movingSum: function (sequence, period) {
		var d__ = new $.ig.TrendCalculators___MovingSum__IteratorClass(-2);
		d__.__3__sequence = sequence;
		d__.__3__period = period;
		return d__;
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerable Infragistics.Controls.Charts.TrendCalculators::MovingSum(System.Collections.Generic.IEnumerable, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerable Infragistics.Controls.Charts.TrendCalculators::STDEV(System.Collections.Generic.IEnumerable, System.Int32)" />*/
	sTDEV: function (sequence, period) {
		var d__ = new $.ig.TrendCalculators___STDEV__IteratorClass(-2);
		d__.__3__sequence = sequence;
		d__.__3__period = period;
		return d__;
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerable Infragistics.Controls.Charts.TrendCalculators::STDEV(System.Collections.Generic.IEnumerable, System.Int32)" />*/
	,
	$type: new $.ig.Type('TrendCalculators', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Controls.Charts.TrendCalculators" />*/

/*<BeginType Name="Infragistics.Controls.Charts.IUnknownValuePlotting" />*/

$.ig.util.defType('IUnknownValuePlotting', 'Object', {
	$type: new $.ig.Type('IUnknownValuePlotting', null)
}, true);

/*<EndType Name="Infragistics.Controls.Charts.IUnknownValuePlotting" />*/

/*<BeginType Name="Infragistics.Controls.Charts.PropertyUpdatedEventArgs" />*/

$.ig.util.defType('PropertyUpdatedEventArgs', 'EventArgs', {
	init: function (propertyName, oldValue, newValue) {
		$.ig.EventArgs.prototype.init.call(this);
		this.propertyName(propertyName);
		this.oldValue(oldValue);
		this.newValue(newValue);
	},
	_propertyName: null,
	/*<BeginProperty Name="System.String Infragistics.Controls.Charts.PropertyUpdatedEventArgs::PropertyName()" />*/
	propertyName: function (value) {
		if (arguments.length === 1) {
			this._propertyName = value;
			return value;
		} else {
			return this._propertyName;
		}
	}
	/*<EndProperty Name="System.String Infragistics.Controls.Charts.PropertyUpdatedEventArgs::PropertyName()" />*/
	,
	_oldValue: null,
	/*<BeginProperty Name="System.Object Infragistics.Controls.Charts.PropertyUpdatedEventArgs::OldValue()" />*/
	oldValue: function (value) {
		if (arguments.length === 1) {
			this._oldValue = value;
			return value;
		} else {
			return this._oldValue;
		}
	}
	/*<EndProperty Name="System.Object Infragistics.Controls.Charts.PropertyUpdatedEventArgs::OldValue()" />*/
	,
	_newValue: null,
	/*<BeginProperty Name="System.Object Infragistics.Controls.Charts.PropertyUpdatedEventArgs::NewValue()" />*/
	newValue: function (value) {
		if (arguments.length === 1) {
			this._newValue = value;
			return value;
		} else {
			return this._newValue;
		}
	}
	/*<EndProperty Name="System.Object Infragistics.Controls.Charts.PropertyUpdatedEventArgs::NewValue()" />*/
	,
	$type: new $.ig.Type('PropertyUpdatedEventArgs', $.ig.EventArgs.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Controls.Charts.PropertyUpdatedEventArgs" />*/

/*<BeginType Name="Infragistics.Controls.Charts.ILegendSeries" />*/

$.ig.util.defType('ILegendSeries', 'Object', {
	$type: new $.ig.Type('ILegendSeries', null)
}, true);

/*<EndType Name="Infragistics.Controls.Charts.ILegendSeries" />*/

/*<BeginType Name="Infragistics.Controls.Charts.IScaleLegendSeries" />*/

$.ig.util.defType('IScaleLegendSeries', 'Object', {
	$type: new $.ig.Type('IScaleLegendSeries', null, [$.ig.ILegendSeries.prototype.$type])
}, true);

/*<EndType Name="Infragistics.Controls.Charts.IScaleLegendSeries" />*/

/*<BeginType Name="Infragistics.Controls.Charts.ILegendOwner" />*/

$.ig.util.defType('ILegendOwner', 'Object', {
	$type: new $.ig.Type('ILegendOwner', null)
}, true);

/*<EndType Name="Infragistics.Controls.Charts.ILegendOwner" />*/

/*<BeginType Name="Infragistics.Controls.Charts.IInternalLegendOwner" />*/

$.ig.util.defType('IInternalLegendOwner', 'Object', {
	$type: new $.ig.Type('IInternalLegendOwner', null)
}, true);

/*<EndType Name="Infragistics.Controls.Charts.IInternalLegendOwner" />*/

/*<BeginType Name="Infragistics.Controls.Charts.ILegendTemplateProvider" />*/

$.ig.util.defType('ILegendTemplateProvider', 'Object', {
	$type: new $.ig.Type('ILegendTemplateProvider', null)
}, true);

/*<EndType Name="Infragistics.Controls.Charts.ILegendTemplateProvider" />*/

/*<BeginType Name="Infragistics.Controls.Charts.IChartLegend" />*/

$.ig.util.defType('IChartLegend', 'Object', {
	$type: new $.ig.Type('IChartLegend', null)
}, true);

/*<EndType Name="Infragistics.Controls.Charts.IChartLegend" />*/

/*<BeginType Name="Infragistics.Controls.Charts.IChartItemLegend" />*/

$.ig.util.defType('IChartItemLegend', 'Object', {
	$type: new $.ig.Type('IChartItemLegend', null, [$.ig.IChartLegend.prototype.$type])
}, true);

/*<EndType Name="Infragistics.Controls.Charts.IChartItemLegend" />*/

/*<BeginType Name="Infragistics.Controls.Charts.IChartScaleLegend" />*/

$.ig.util.defType('IChartScaleLegend', 'Object', {
	$type: new $.ig.Type('IChartScaleLegend', null, [$.ig.IChartLegend.prototype.$type])
}, true);

/*<EndType Name="Infragistics.Controls.Charts.IChartScaleLegend" />*/

/*<BeginType Name="Infragistics.Controls.Charts.Util.Numeric" />*/

$.ig.util.defType('Numeric', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Boolean Infragistics.Controls.Charts.Util.Numeric::Solve(System.Collections.Generic.List, System.Collections.Generic.List, System.Collections.Generic.List, System.Collections.Generic.List, System.Collections.Generic.List)" />*/
	solve1: function (a, b, c, r, u) {
		var j;
		var n = a.count();
		var gam = new Array(n);
		if (b.__inner[0] == 0) {
			return false;
		}
		var bet = b.__inner[0];
		u.__inner[0] = r.__inner[0] / (bet);
		for (j = 1; j < n; j++) {
			gam[j] = c.__inner[j - 1] / bet;
			bet = b.__inner[j] - a.__inner[j] * gam[j];
			if (bet == 0) {
				return false;
			}
			u.__inner[j] = (r.__inner[j] - a.__inner[j] * u.__inner[j - 1]) / bet;
		}
		for (j = (n - 2); j >= 0; j--) {
			u.__inner[j] -= gam[j + 1] * u.__inner[j + 1];
		}
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Controls.Charts.Util.Numeric::Solve(System.Collections.Generic.List, System.Collections.Generic.List, System.Collections.Generic.List, System.Collections.Generic.List, System.Collections.Generic.List)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Controls.Charts.Util.Numeric::Solve(, )" />*/
	solve: function (a, b) {
		var n = a.getLength(0);
		var indxc = new Array(n);
		var indxr = new Array(n);
		var ipiv = new Array(n);
		for (var i = 0; i < n; i++) {
			ipiv[i] = 0;
		}
		for (var i1 = 0; i1 < n; i1++) {
			var big = 0;
			var irow = 0;
			var icol = 0;
			for (var j = 0; j < n; j++) {
				if (ipiv[j] != 1) {
					for (var k = 0; k < n; k++) {
						if (ipiv[k] == 0) {
							if (Math.abs(a[j][k]) >= big) {
								big = Math.abs(a[j][k]);
								irow = j;
								icol = k;
							}
						}
					}
				}
			}
			++(ipiv[icol]);
			if (irow != icol) {
				for (var j1 = 0; j1 < n; j1++) {
					var t = a[irow][j1];
					a[irow][j1] = a[icol][j1];
					a[icol][j1] = t;
				}
				{
					var t1 = b[irow];
					b[irow] = b[icol];
					b[icol] = t1;
				}
			}
			indxr[i1] = irow;
			indxc[i1] = icol;
			if (a[icol][icol] == 0) {
				return false;
			}
			var pivinv = 1 / a[icol][icol];
			a[icol][icol] = 1;
			for (var j2 = 0; j2 < n; j2++) {
				a[icol][j2] *= pivinv;
			}
			b[icol] *= pivinv;
			for (var j3 = 0; j3 < n; j3++) {
				if (j3 != icol) {
					var dum = a[j3][icol];
					a[j3][icol] = 0;
					for (var l = 0; l < n; l++) {
						a[j3][l] -= a[icol][l] * dum;
					}
					b[j3] -= b[icol] * dum;
				}
			}
		}
		for (var i2 = n - 1; i2 >= 0; i2--) {
			if (indxr[i2] != indxc[i2]) {
				for (var j4 = 0; j4 < n; j4++) {
					var t2 = a[j4][indxr[i2]];
					a[j4][indxr[i2]] = a[j4][indxc[i2]];
					a[j4][indxc[i2]] = t2;
				}
			}
		}
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Controls.Charts.Util.Numeric::Solve(, )" />*/
	,
	/*<BeginMethod Name=" Infragistics.Controls.Charts.Util.Numeric::SafeCubicSplineFit(System.Int32, System.Func, System.Func, System.Double, System.Double)" />*/
	safeCubicSplineFit: function (count, x, y, yp1, ypn) {
		var ret = new $.ig.List$1(Number, 0);
		for (var i = 0; i < count; ++i) {
			while (i < count && ($.ig.util.isNaN(x(i)) || $.ig.util.isNaN(y(i)))) {
				ret.add(NaN);
				++i;
			}
			var j = i;
			while (i < count && !$.ig.util.isNaN(x(i)) && !$.ig.util.isNaN(y(i))) {
				++i;
			}
			--i;
			if (i - j > 0) {
				ret.addRange($.ig.Numeric.prototype.cubicSplineFit1(j, i - j + 1, x, y, yp1, ypn));
			} else {
				for (; j <= i; ++j) {
					ret.add(NaN);
				}
			}
		}
		return ret.toArray();
	}
	/*<EndMethod Name=" Infragistics.Controls.Charts.Util.Numeric::SafeCubicSplineFit(System.Int32, System.Func, System.Func, System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name=" Infragistics.Controls.Charts.Util.Numeric::CubicSplineFit(System.Int32, System.Int32, System.Func, System.Func, System.Double, System.Double)" />*/
	cubicSplineFit1: function (start, count, x, y, yp1, ypn) {
		return $.ig.Numeric.prototype.cubicSplineFit(count, function (i) { return x(i + start); }, function (i) { return y(i + start); }, yp1, ypn);
	}
	/*<EndMethod Name=" Infragistics.Controls.Charts.Util.Numeric::CubicSplineFit(System.Int32, System.Int32, System.Func, System.Func, System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name=" Infragistics.Controls.Charts.Util.Numeric::CubicSplineFit(System.Int32, System.Func, System.Func, System.Double, System.Double)" />*/
	cubicSplineFit: function (count, x, y, yp1, ypn) {
		var u = new Array(count - 1);
		var y2 = new Array(count);
		y2[0] = $.ig.util.isNaN(yp1) ? 0 : -0.5;
		u[0] = $.ig.util.isNaN(yp1) ? 0 : (3 / (x(1) - x(0))) * ((y(1) - y(0)) / (x(1) - x(0)) - yp1);
		for (var i = 1; i < count - 1; i++) {
			var sig = (x(i) - x(i - 1)) / (x(i + 1) - x(i - 1));
			var p = sig * y2[i - 1] + 2;
			y2[i] = (sig - 1) / p;
			u[i] = (y(i + 1) - y(i)) / (x(i + 1) - x(i)) - (y(i) - y(i - 1)) / (x(i) - x(i - 1));
			u[i] = (6 * u[i] / (x(i + 1) - x(i - 1)) - sig * u[i - 1]) / p;
		}
		var qn = $.ig.util.isNaN(ypn) ? 0 : 0.5;
		var un = $.ig.util.isNaN(ypn) ? 0 : (3 / (x(count - 1) - x(count - 2))) * (ypn - (y(count - 1) - y(count - 2)) / (x(count - 1) - x(count - 2)));
		y2[count - 1] = (un - qn * u[count - 2]) / (qn * y2[count - 2] + 1);
		for (var i1 = count - 2; i1 >= 0; i1--) {
			y2[i1] = y2[i1] * y2[i1 + 1] + u[i1];
		}
		return y2;
	}
	/*<EndMethod Name=" Infragistics.Controls.Charts.Util.Numeric::CubicSplineFit(System.Int32, System.Func, System.Func, System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.Controls.Charts.Util.Numeric::CubicSplineEvaluate(System.Double, System.Double, System.Double, System.Double, System.Double, System.Double, System.Double)" />*/
	cubicSplineEvaluate: function (x, x1, y1, x2, y2, u1, u2) {
		var h = x2 - x1;
		var a = (x2 - x) / h;
		var b = (x - x1) / h;
		return a * y1 + b * y2 + ((a * a * a - a) * u1 + (b * b * b - b) * u2) * (h * h) / 6;
	}
	/*<EndMethod Name="System.Double Infragistics.Controls.Charts.Util.Numeric::CubicSplineEvaluate(System.Double, System.Double, System.Double, System.Double, System.Double, System.Double, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Windows.Media.PathFigureCollection Infragistics.Controls.Charts.Util.Numeric::Spline2D(System.Int32, System.Func, System.Func, System.Double)" />*/
	spline2D1: function (count, x, y, stiffness) {
		var result = new $.ig.PathFigureCollection();
		var currentSegmentStart = 0;
		var currentSegmentEnd = -1;
		var valueX = NaN;
		var valueY = NaN;
		for (var i = 0; i < count; i++) {
			valueX = x(i);
			valueY = y(i);
			if ($.ig.util.isNaN(valueX) || $.ig.util.isNaN(valueY)) {
				currentSegmentEnd = i - 1;
				if (currentSegmentEnd - currentSegmentStart > 0) {
					result.add($.ig.Numeric.prototype.spline2D(currentSegmentStart, currentSegmentEnd, x, y, stiffness));
				}
				currentSegmentStart = i + 1;
			}
		}
		if (!$.ig.util.isNaN(valueX) && !$.ig.util.isNaN(valueY)) {
			currentSegmentEnd = count - 1;
		}
		if (currentSegmentEnd - currentSegmentStart > 0) {
			result.add($.ig.Numeric.prototype.spline2D(currentSegmentStart, currentSegmentEnd, x, y, stiffness));
		}
		return result;
	}
	/*<EndMethod Name="System.Windows.Media.PathFigureCollection Infragistics.Controls.Charts.Util.Numeric::Spline2D(System.Int32, System.Func, System.Func, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Windows.Media.PathFigure Infragistics.Controls.Charts.Util.Numeric::Spline2D(System.Int32, System.Int32, System.Func, System.Func, System.Double)" />*/
	spline2D: function (startIndex, endIndex, x, y, stiffness) {
		stiffness = 0.5 * $.ig.MathUtil.prototype.clamp($.ig.util.isNaN(stiffness) ? 0.5 : stiffness, 0, 1);
		var pathFigure = new $.ig.PathFigure();
		var count = endIndex - startIndex + 1;
		if (count < 2) {
			return pathFigure;
		}
		if (count == 2) {
			pathFigure.__startPoint = { __x: x(startIndex), __y: y(startIndex), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName };
			var newSeg = (function () {
				var $ret = new $.ig.LineSegment(1);
				$ret.point({ __x: x(startIndex + 1), __y: y(startIndex + 1), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName });
				return $ret;
			}());
			pathFigure.__segments.add(newSeg);
			return pathFigure;
		}
		var Segment = new $.ig.PolyBezierSegment();
		var pix = x(startIndex);
		var piy = y(startIndex);
		var pixnext = x(startIndex + 1);
		var piynext = y(startIndex + 1);
		while (pixnext == pix && piynext == piy && startIndex + 1 <= endIndex) {
			startIndex++;
			pixnext = x(startIndex + 1);
			piynext = y(startIndex + 1);
		}
		var tix = pixnext - pix;
		var tiy = piynext - piy;
		var li = Math.sqrt(tix * tix + tiy * tiy);
		for (var j = startIndex + 1; j < endIndex; ++j) {
			var pjx = x(j);
			var pjy = y(j);
			if (pjx == pix && pjy == piy) {
				continue;
			}
			var tjx = x(j + 1) - x(j - 1);
			var tjy = y(j + 1) - y(j - 1);
			var lj = tjx * tjx + tjy * tjy;
			if (lj < 0.01) {
				tjx = -(y(j + 1) - y(j));
				tjy = x(j + 1) - x(j);
				lj = tjx * tjx + tjy * tjy;
			}
			lj = Math.sqrt(lj);
			var d = stiffness * Math.sqrt((pjx - pix) * (pjx - pix) + (pjy - piy) * (pjy - piy));
			if (lj > 0.01) {
				Segment.points().add({ __x: pix + tix * d / li, __y: piy + tiy * d / li, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName });
				Segment.points().add({ __x: pjx - tjx * d / lj, __y: pjy - tjy * d / lj, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName });
				Segment.points().add({ __x: pjx, __y: pjy, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName });
				pix = pjx;
				piy = pjy;
				tix = tjx;
				tiy = tjy;
				li = lj;
			}
		}
		{
			var j1 = endIndex;
			var pjx1 = x(j1);
			var pjy1 = y(j1);
			var tjx1 = x(j1) - x(j1 - 1);
			var tjy1 = y(j1) - y(j1 - 1);
			var lj1 = tjx1 * tjx1 + tjy1 * tjy1;
			var d1 = stiffness * Math.sqrt((pjx1 - pix) * (pjx1 - pix) + (pjy1 - piy) * (pjy1 - piy));
			Segment.points().add({ __x: pix + tix * d1 / li, __y: piy + tiy * d1 / li, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName });
			Segment.points().add({ __x: pjx1 - tjx1 * d1 / lj1, __y: pjy1 - tjy1 * d1 / lj1, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName });
			Segment.points().add({ __x: pjx1, __y: pjy1, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName });
		}
		pathFigure.__startPoint = { __x: x(startIndex), __y: y(startIndex), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName };
		pathFigure.__segments.add(Segment);
		return pathFigure;
	}
	/*<EndMethod Name="System.Windows.Media.PathFigure Infragistics.Controls.Charts.Util.Numeric::Spline2D(System.Int32, System.Int32, System.Func, System.Func, System.Double)" />*/
	,
	$type: new $.ig.Type('Numeric', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Controls.Charts.Util.Numeric" />*/

/*<BeginType Name="Infragistics.Controls.Charts.Util.LeastSquaresFit" />*/

$.ig.util.defType('LeastSquaresFit', 'Numeric', {
	/*<BeginMethod Name="System.Boolean Infragistics.Controls.Charts.Util.LeastSquaresFit::Test()" />*/
	test: function () {
		return $.ig.LeastSquaresFit.prototype.linearTest() && $.ig.LeastSquaresFit.prototype.logarithmicTest() && $.ig.LeastSquaresFit.prototype.exponentialTest() && $.ig.LeastSquaresFit.prototype.powerLawTest() && $.ig.LeastSquaresFit.prototype.quadraticTest() && $.ig.LeastSquaresFit.prototype.cubicTest() && $.ig.LeastSquaresFit.prototype.quarticTest() && $.ig.LeastSquaresFit.prototype.quinticTest();
	}
	/*<EndMethod Name="System.Boolean Infragistics.Controls.Charts.Util.LeastSquaresFit::Test()" />*/
	,
	init: function () {
		$.ig.Numeric.prototype.init.call(this);
	},
	/*<BeginMethod Name=" Infragistics.Controls.Charts.Util.LeastSquaresFit::LinearFit(System.Int32, System.Func, System.Func)" />*/
	linearFit: function (n, x, y) {
		var s0 = 0;
		var s1 = 0;
		var s2 = 0;
		var s3 = 0;
		var N = 0;
		for (var i = 0; i < n; ++i) {
			var xi = x(i);
			var yi = y(i);
			if (!$.ig.util.isNaN(xi) && !$.ig.util.isNaN(yi)) {
				s0 += yi;
				s1 += xi * xi;
				s2 += xi;
				s3 += xi * yi;
				++N;
			}
		}
		if (N < 2) {
			return null;
		}
		var A = (s0 * s1 - s2 * s3) / (N * s1 - s2 * s2);
		var B = (N * s3 - s2 * s0) / (N * s1 - s2 * s2);
		return [ A, B ];
	}
	/*<EndMethod Name=" Infragistics.Controls.Charts.Util.LeastSquaresFit::LinearFit(System.Int32, System.Func, System.Func)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.Controls.Charts.Util.LeastSquaresFit::LinearEvaluate(, System.Double)" />*/
	linearEvaluate: function (a, x) {
		if (a.length != 2) {
			return NaN;
		}
		return a[0] + a[1] * x;
	}
	/*<EndMethod Name="System.Double Infragistics.Controls.Charts.Util.LeastSquaresFit::LinearEvaluate(, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Controls.Charts.Util.LeastSquaresFit::LinearTest()" />*/
	linearTest: function () {
		var random = new $.ig.Random(0);
		var coeffs = new Array(2);
		for (var i = 0; i < coeffs.length; ++i) {
			coeffs[i] = 10 * random.nextDouble();
		}
		var x = new $.ig.List$1(Number, 0);
		var y = new $.ig.List$1(Number, 0);
		for (var i1 = -100; i1 < 100; ++i1) {
			var X = i1;
			var Y = $.ig.LeastSquaresFit.prototype.linearEvaluate(coeffs, X);
			if (!$.ig.util.isNaN(Y)) {
				x.add(X);
				y.add(Y);
			}
		}
		var fit = $.ig.LeastSquaresFit.prototype.linearFit(x.count(), function (i) {
			return x.__inner[i];
		}, function (i) {
			return y.__inner[i];
		});
		for (var i2 = 0; i2 < coeffs.length; ++i2) {
			if (Math.abs(coeffs[i2] - fit[i2]) > 0.0001) {
			}
		}
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Controls.Charts.Util.LeastSquaresFit::LinearTest()" />*/
	,
	/*<BeginMethod Name=" Infragistics.Controls.Charts.Util.LeastSquaresFit::LogarithmicFit(System.Int32, System.Func, System.Func)" />*/
	logarithmicFit: function (n, x, y) {
		var s0 = 0;
		var s1 = 0;
		var s2 = 0;
		var s3 = 0;
		var N = 0;
		for (var i = 0; i < n; ++i) {
			var xi = x(i);
			var yi = y(i);
			if (!$.ig.util.isNaN(xi) && !$.ig.util.isNaN(yi) && xi > 0) {
				var lnxi = Math.log(xi);
				s0 += yi * lnxi;
				s1 += yi;
				s2 += lnxi;
				s3 += lnxi * lnxi;
				++N;
			}
		}
		if (N < 2) {
			return null;
		}
		var B = (N * s0 - s1 * s2) / (N * s3 - s2 * s2);
		var A = (s1 - B * s2) / N;
		return [ A, B ];
	}
	/*<EndMethod Name=" Infragistics.Controls.Charts.Util.LeastSquaresFit::LogarithmicFit(System.Int32, System.Func, System.Func)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.Controls.Charts.Util.LeastSquaresFit::LogarithmicEvaluate(, System.Double)" />*/
	logarithmicEvaluate: function (a, x) {
		if (a.length != 2 || x < 0 || Number.isInfinity(x) || $.ig.util.isNaN(x)) {
			return NaN;
		}
		return a[0] + a[1] * Math.log(x);
	}
	/*<EndMethod Name="System.Double Infragistics.Controls.Charts.Util.LeastSquaresFit::LogarithmicEvaluate(, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Controls.Charts.Util.LeastSquaresFit::LogarithmicTest()" />*/
	logarithmicTest: function () {
		var random = new $.ig.Random(0);
		var coeffs = new Array(2);
		for (var i = 0; i < coeffs.length; ++i) {
			coeffs[i] = 10 * random.nextDouble();
		}
		var x = new $.ig.List$1(Number, 0);
		var y = new $.ig.List$1(Number, 0);
		for (var i1 = 1; i1 < 100; ++i1) {
			var X = i1;
			var Y = $.ig.LeastSquaresFit.prototype.logarithmicEvaluate(coeffs, X);
			if (!$.ig.util.isNaN(Y)) {
				x.add(X);
				y.add(Y);
			}
		}
		var fit = $.ig.LeastSquaresFit.prototype.logarithmicFit(x.count(), function (i) {
			return x.__inner[i];
		}, function (i) {
			return y.__inner[i];
		});
		for (var i2 = 0; i2 < coeffs.length; ++i2) {
			if (Math.abs(coeffs[i2] - fit[i2]) > 0.0001) {
			}
		}
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Controls.Charts.Util.LeastSquaresFit::LogarithmicTest()" />*/
	,
	/*<BeginMethod Name=" Infragistics.Controls.Charts.Util.LeastSquaresFit::ExponentialFit(System.Int32, System.Func, System.Func)" />*/
	exponentialFit: function (n, x, y) {
		var s0 = 0;
		var s1 = 0;
		var s2 = 0;
		var s3 = 0;
		var s4 = 0;
		var N = 0;
		for (var i = 0; i < n; ++i) {
			var xi = x(i);
			var yi = y(i);
			if (!$.ig.util.isNaN(xi) && !$.ig.util.isNaN(yi) && yi > 0) {
				var lnyi = Math.log(yi);
				s0 += xi * xi * yi;
				s1 += yi * lnyi;
				s2 += xi * yi;
				s3 += xi * yi * lnyi;
				s4 += yi;
				++N;
			}
		}
		if (N < 2) {
			return null;
		}
		var a = (s0 * s1 - s2 * s3) / (s4 * s0 - s2 * s2);
		var B = (s4 * s3 - s2 * s1) / (s4 * s0 - s2 * s2);
		return [ Math.exp(a), B ];
	}
	/*<EndMethod Name=" Infragistics.Controls.Charts.Util.LeastSquaresFit::ExponentialFit(System.Int32, System.Func, System.Func)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.Controls.Charts.Util.LeastSquaresFit::ExponentialEvaluate(, System.Double)" />*/
	exponentialEvaluate: function (a, x) {
		if (a.length != 2 || x < 0 || Number.isInfinity(x) || $.ig.util.isNaN(x)) {
			return NaN;
		}
		return a[0] * Math.exp(a[1] * x);
	}
	/*<EndMethod Name="System.Double Infragistics.Controls.Charts.Util.LeastSquaresFit::ExponentialEvaluate(, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Controls.Charts.Util.LeastSquaresFit::ExponentialTest()" />*/
	exponentialTest: function () {
		var random = new $.ig.Random(0);
		var coeffs = new Array(2);
		for (var i = 0; i < coeffs.length; ++i) {
			coeffs[i] = 2 * random.nextDouble();
		}
		var x = new $.ig.List$1(Number, 0);
		var y = new $.ig.List$1(Number, 0);
		for (var i1 = 1; i1 < 100; ++i1) {
			var X = i1;
			var Y = $.ig.LeastSquaresFit.prototype.exponentialEvaluate(coeffs, X);
			if (!$.ig.util.isNaN(Y)) {
				x.add(X);
				y.add(Y);
			}
		}
		var fit = $.ig.LeastSquaresFit.prototype.exponentialFit(x.count(), function (i) {
			return x.__inner[i];
		}, function (i) {
			return y.__inner[i];
		});
		for (var i2 = 0; i2 < coeffs.length; ++i2) {
			if (Math.abs(coeffs[i2] - fit[i2]) > 0.0001) {
				return false;
			}
		}
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Controls.Charts.Util.LeastSquaresFit::ExponentialTest()" />*/
	,
	/*<BeginMethod Name=" Infragistics.Controls.Charts.Util.LeastSquaresFit::PowerLawFit(System.Int32, System.Func, System.Func)" />*/
	powerLawFit: function (n, x, y) {
		var s0 = 0;
		var s1 = 0;
		var s2 = 0;
		var s3 = 0;
		var N = 0;
		for (var i = 0; i < n; ++i) {
			var xi = x(i);
			var yi = y(i);
			if (!$.ig.util.isNaN(xi) && !$.ig.util.isNaN(yi) && xi > 0 && yi > 0) {
				var lnxi = Math.log(x(i));
				var lnyi = Math.log(y(i));
				s0 += lnxi * lnyi;
				s1 += lnxi;
				s2 += lnyi;
				s3 += lnxi * lnxi;
				++N;
			}
		}
		if (N < 2) {
			return null;
		}
		var B = (N * s0 - s1 * s2) / (N * s3 - s1 * s1);
		var A = Math.exp((s2 - B * s1) / N);
		return [ A, B ];
	}
	/*<EndMethod Name=" Infragistics.Controls.Charts.Util.LeastSquaresFit::PowerLawFit(System.Int32, System.Func, System.Func)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.Controls.Charts.Util.LeastSquaresFit::PowerLawEvaluate(, System.Double)" />*/
	powerLawEvaluate: function (a, x) {
		if (a.length != 2 || x < 0 || Number.isInfinity(x) || $.ig.util.isNaN(x)) {
			return NaN;
		}
		return a[0] * Math.pow(x, a[1]);
	}
	/*<EndMethod Name="System.Double Infragistics.Controls.Charts.Util.LeastSquaresFit::PowerLawEvaluate(, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Controls.Charts.Util.LeastSquaresFit::PowerLawTest()" />*/
	powerLawTest: function () {
		var random = new $.ig.Random(0);
		var coeffs = new Array(2);
		for (var i = 0; i < coeffs.length; ++i) {
			coeffs[i] = 10 * random.nextDouble();
		}
		var x = new $.ig.List$1(Number, 0);
		var y = new $.ig.List$1(Number, 0);
		for (var i1 = -100; i1 < 100; ++i1) {
			x.add(i1);
			y.add($.ig.LeastSquaresFit.prototype.powerLawEvaluate(coeffs, i1));
		}
		var fit = $.ig.LeastSquaresFit.prototype.powerLawFit(x.count(), function (i) {
			return x.__inner[i];
		}, function (i) {
			return y.__inner[i];
		});
		for (var i2 = 0; i2 < coeffs.length; ++i2) {
			if (Math.abs(coeffs[i2] - fit[i2]) > 0.0001) {
				return false;
			}
		}
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Controls.Charts.Util.LeastSquaresFit::PowerLawTest()" />*/
	,
	/*<BeginMethod Name=" Infragistics.Controls.Charts.Util.LeastSquaresFit::QuadraticFit(System.Int32, System.Func, System.Func)" />*/
	quadraticFit: function (n, x, y) {
		return $.ig.LeastSquaresFit.prototype.polynomialFit(n, 2, x, y);
	}
	/*<EndMethod Name=" Infragistics.Controls.Charts.Util.LeastSquaresFit::QuadraticFit(System.Int32, System.Func, System.Func)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.Controls.Charts.Util.LeastSquaresFit::QuadraticEvaluate(, System.Double)" />*/
	quadraticEvaluate: function (a, x) {
		return $.ig.LeastSquaresFit.prototype.polynomialEvaluate(a, x);
	}
	/*<EndMethod Name="System.Double Infragistics.Controls.Charts.Util.LeastSquaresFit::QuadraticEvaluate(, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Controls.Charts.Util.LeastSquaresFit::QuadraticTest()" />*/
	quadraticTest: function () {
		return $.ig.LeastSquaresFit.prototype.polynomialTest(2);
	}
	/*<EndMethod Name="System.Boolean Infragistics.Controls.Charts.Util.LeastSquaresFit::QuadraticTest()" />*/
	,
	/*<BeginMethod Name=" Infragistics.Controls.Charts.Util.LeastSquaresFit::CubicFit(System.Int32, System.Func, System.Func)" />*/
	cubicFit: function (n, x, y) {
		return $.ig.LeastSquaresFit.prototype.polynomialFit(n, 3, x, y);
	}
	/*<EndMethod Name=" Infragistics.Controls.Charts.Util.LeastSquaresFit::CubicFit(System.Int32, System.Func, System.Func)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.Controls.Charts.Util.LeastSquaresFit::CubicEvaluate(, System.Double)" />*/
	cubicEvaluate: function (a, x) {
		return $.ig.LeastSquaresFit.prototype.polynomialEvaluate(a, x);
	}
	/*<EndMethod Name="System.Double Infragistics.Controls.Charts.Util.LeastSquaresFit::CubicEvaluate(, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Controls.Charts.Util.LeastSquaresFit::CubicTest()" />*/
	cubicTest: function () {
		return $.ig.LeastSquaresFit.prototype.polynomialTest(3);
	}
	/*<EndMethod Name="System.Boolean Infragistics.Controls.Charts.Util.LeastSquaresFit::CubicTest()" />*/
	,
	/*<BeginMethod Name=" Infragistics.Controls.Charts.Util.LeastSquaresFit::QuarticFit(System.Int32, System.Func, System.Func)" />*/
	quarticFit: function (n, x, y) {
		return $.ig.LeastSquaresFit.prototype.polynomialFit(n, 4, x, y);
	}
	/*<EndMethod Name=" Infragistics.Controls.Charts.Util.LeastSquaresFit::QuarticFit(System.Int32, System.Func, System.Func)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.Controls.Charts.Util.LeastSquaresFit::QuarticEvaluate(, System.Double)" />*/
	quarticEvaluate: function (a, x) {
		return $.ig.LeastSquaresFit.prototype.polynomialEvaluate(a, x);
	}
	/*<EndMethod Name="System.Double Infragistics.Controls.Charts.Util.LeastSquaresFit::QuarticEvaluate(, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Controls.Charts.Util.LeastSquaresFit::QuarticTest()" />*/
	quarticTest: function () {
		return $.ig.LeastSquaresFit.prototype.polynomialTest(4);
	}
	/*<EndMethod Name="System.Boolean Infragistics.Controls.Charts.Util.LeastSquaresFit::QuarticTest()" />*/
	,
	/*<BeginMethod Name=" Infragistics.Controls.Charts.Util.LeastSquaresFit::QuinticFit(System.Int32, System.Func, System.Func)" />*/
	quinticFit: function (n, x, y) {
		return $.ig.LeastSquaresFit.prototype.polynomialFit(n, 5, x, y);
	}
	/*<EndMethod Name=" Infragistics.Controls.Charts.Util.LeastSquaresFit::QuinticFit(System.Int32, System.Func, System.Func)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.Controls.Charts.Util.LeastSquaresFit::QuinticEvaluate(, System.Double)" />*/
	quinticEvaluate: function (a, x) {
		return $.ig.LeastSquaresFit.prototype.polynomialEvaluate(a, x);
	}
	/*<EndMethod Name="System.Double Infragistics.Controls.Charts.Util.LeastSquaresFit::QuinticEvaluate(, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Controls.Charts.Util.LeastSquaresFit::QuinticTest()" />*/
	quinticTest: function () {
		return $.ig.LeastSquaresFit.prototype.polynomialTest(5);
	}
	/*<EndMethod Name="System.Boolean Infragistics.Controls.Charts.Util.LeastSquaresFit::QuinticTest()" />*/
	,
	/*<BeginMethod Name=" Infragistics.Controls.Charts.Util.LeastSquaresFit::PolynomialFit(System.Int32, System.Int32, System.Func, System.Func)" />*/
	polynomialFit: function (n, k, x, y) {
		var ps = new Array(1 + 2 * k);
		for (var ind1 = 0; ind1 < ps.length; ind1++) {
			ps[ind1] = 0;
		}
		var A = (function () {
			var $ret = new Array($firstRank = k + 1);
			var $currRet = $ret;
			for (var $rankInit = 0; $rankInit < $firstRank; $rankInit++) {
				$currRet[$rankInit] = new Array(k + 1);
			}
			return $ret;
		}());
		var B = new Array(k + 1);
		for (var ind2 = 0; ind2 < B.length; ind2++) {
			B[ind2] = 0;
		}
		var N = 0;
		for (var i = 0; i < n; ++i) {
			var s = 1;
			var xi = x(i);
			if (!$.ig.util.isNaN(xi) && !$.ig.util.isNaN(y(i))) {
				for (var p = 0; p < ps.length; ++p) {
					ps[p] += s;
					s *= xi;
					++N;
				}
			}
		}
		if (N < k) {
			return null;
		}
		for (var i1 = 0; i1 <= k; ++i1) {
			for (var j = 0; j <= k; ++j) {
				A[i1][j] = ps[i1 + j];
			}
		}
		for (var i2 = 0; i2 < n; ++i2) {
			var xi1 = x(i2);
			var yi = y(i2);
			if (!$.ig.util.isNaN(xi1) && !$.ig.util.isNaN(yi)) {
				for (var j1 = 0; j1 <= k; ++j1) {
					B[j1] += (Math.pow(xi1, j1) * yi);
				}
			}
		}
		return $.ig.Numeric.prototype.solve(A, B) ? B : null;
	}
	/*<EndMethod Name=" Infragistics.Controls.Charts.Util.LeastSquaresFit::PolynomialFit(System.Int32, System.Int32, System.Func, System.Func)" />*/
	,
	/*<BeginMethod Name="System.Double Infragistics.Controls.Charts.Util.LeastSquaresFit::PolynomialEvaluate(, System.Double)" />*/
	polynomialEvaluate: function (a, x) {
		if (a.length < 1 || Number.isInfinity(x) || $.ig.util.isNaN(x)) {
			return NaN;
		}
		var y = 0;
		for (var i = 0; i < a.length; ++i) {
			y += a[i] * Math.pow(x, i);
		}
		return y;
	}
	/*<EndMethod Name="System.Double Infragistics.Controls.Charts.Util.LeastSquaresFit::PolynomialEvaluate(, System.Double)" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Controls.Charts.Util.LeastSquaresFit::PolynomialTest(System.Int32)" />*/
	polynomialTest: function (k) {
		var random = new $.ig.Random(0);
		var coeffs = new Array(k + 1);
		for (var i = 0; i < coeffs.length; ++i) {
			coeffs[i] = 2 * random.nextDouble();
		}
		var x = new $.ig.List$1(Number, 0);
		var y = new $.ig.List$1(Number, 0);
		for (var i1 = -100; i1 < 100; ++i1) {
			var X = i1;
			var Y = $.ig.LeastSquaresFit.prototype.polynomialEvaluate(coeffs, X);
			if (!$.ig.util.isNaN(Y)) {
				x.add(X);
				y.add(Y);
			}
		}
		var fit = $.ig.LeastSquaresFit.prototype.polynomialFit(x.count(), k, function (i) {
			return x.__inner[i];
		}, function (i) {
			return y.__inner[i];
		});
		for (var i2 = 0; i2 < k; ++i2) {
			if (Math.abs(coeffs[i2] - fit[i2]) > 0.0001) {
				return false;
			}
		}
		return true;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Controls.Charts.Util.LeastSquaresFit::PolynomialTest(System.Int32)" />*/
	,
	$type: new $.ig.Type('LeastSquaresFit', $.ig.Numeric.prototype.$type)
}, true);

/*<EndType Name="Infragistics.Controls.Charts.Util.LeastSquaresFit" />*/

/*<BeginType Name="Infragistics.Controls.Charts.TrendCalculators___MovingSum__IteratorClass" />*/

$.ig.util.defType('TrendCalculators___MovingSum__IteratorClass', 'Object', {
	__1__state: 0,
	__2__current: 0,
	__buffer_5_0: null,
	__i_5_1: 0,
	__ms_5_2: 0,
	_valueEnumerator: null,
	__value_5_3: 0,
	_sequence: null,
	__3__sequence: null,
	_period: 0,
	__3__period: 0,
	init: function (_1__state) {
		$.ig.Object.prototype.init.call(this);
		this.__1__state = _1__state;
	},
	/*<BeginMethod Name="System.Void Infragistics.Controls.Charts.TrendCalculators___MovingSum__IteratorClass::_m_Finally0()" />*/
	_m_Finally0: function () {
		this.__1__state = -1;
		if (this._valueEnumerator != null) {
			this._valueEnumerator.dispose();
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.Charts.TrendCalculators___MovingSum__IteratorClass::_m_Finally0()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Controls.Charts.TrendCalculators___MovingSum__IteratorClass::MoveNext()" />*/
	moveNext: function () {
		var __hasError__ = false;
		try {
			while (this.__1__state >= 0) {
				switch (this.__1__state) {
					case 0:
						this.__1__state = -1;
						this.__buffer_5_0 = new Array(this._period);
						this.__i_5_1 = 0;
						for (this.__i_5_1 = 0; this.__i_5_1 < this._period; this.__i_5_1++) {
							this.__buffer_5_0[this.__i_5_1] = 0;
						}
						this.__i_5_1 = 0;
						this.__ms_5_2 = NaN;
						this.__1__state = 1;
						this._valueEnumerator = this._sequence.getEnumerator();
						this.__1__state = 2;
						break;
					case 2:
						this.__1__state = 1;
						if (this._valueEnumerator.moveNext()) {
							this.__value_5_3 = this._valueEnumerator.current();
							if (!$.ig.util.isNaN(this.__value_5_3)) {
								var next = this.__value_5_3;
								var cursor = this.__i_5_1 % this._period;
								if (this.__i_5_1 < this._period) {
									this.__ms_5_2 = $.ig.util.isNaN(this.__ms_5_2) ? next : this.__ms_5_2 + next;
								} else {
									this.__ms_5_2 = this.__ms_5_2 + next - this.__buffer_5_0[cursor];
								}
								this.__buffer_5_0[cursor] = next;
								++this.__i_5_1;
							}
							this.__2__current = this.__ms_5_2;
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
	/*<EndMethod Name="System.Boolean Infragistics.Controls.Charts.TrendCalculators___MovingSum__IteratorClass::MoveNext()" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerator Infragistics.Controls.Charts.TrendCalculators___MovingSum__IteratorClass::System.Collections.Generic.IEnumerable<System.Double>.GetEnumerator()" />*/
	getEnumerator: function () {
		var d__;
		if (this.__1__state == -2) {
			this.__1__state = 0;
			d__ = this;
		} else {
			d__ = new $.ig.TrendCalculators___MovingSum__IteratorClass(0);
		}
		d__._sequence = this.__3__sequence;
		d__._period = this.__3__period;
		return d__;
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerator Infragistics.Controls.Charts.TrendCalculators___MovingSum__IteratorClass::System.Collections.Generic.IEnumerable<System.Double>.GetEnumerator()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.Charts.TrendCalculators___MovingSum__IteratorClass::System.Collections.IEnumerator.Reset()" />*/
	reset: function () {
		throw new $.ig.NotSupportedException(1);
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.Charts.TrendCalculators___MovingSum__IteratorClass::System.Collections.IEnumerator.Reset()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.Charts.TrendCalculators___MovingSum__IteratorClass::System.IDisposable.Dispose()" />*/
	dispose: function () {
		switch (this.__1__state) {
			case 1:
			case 2:
				this._m_Finally0();
				break;
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.Charts.TrendCalculators___MovingSum__IteratorClass::System.IDisposable.Dispose()" />*/
	,
	/*<BeginProperty Name="System.Double Infragistics.Controls.Charts.TrendCalculators___MovingSum__IteratorClass::System.Collections.Generic.IEnumerator<System.Double>.Current()" />*/
	current: function () {
		return this.__2__current;
	}
	/*<EndProperty Name="System.Double Infragistics.Controls.Charts.TrendCalculators___MovingSum__IteratorClass::System.Collections.Generic.IEnumerator<System.Double>.Current()" />*/
	,
	/*<BeginProperty Name="System.Object Infragistics.Controls.Charts.TrendCalculators___MovingSum__IteratorClass::System.Collections.IEnumerator.Current()" />*/
	current1: function () {
		return this.__2__current;
	}
	/*<EndProperty Name="System.Object Infragistics.Controls.Charts.TrendCalculators___MovingSum__IteratorClass::System.Collections.IEnumerator.Current()" />*/
	,
	$type: new $.ig.Type('TrendCalculators___MovingSum__IteratorClass', $.ig.Object.prototype.$type, [$.ig.IEnumerable$1.prototype.$type.specialize(Number), $.ig.IEnumerable.prototype.$type, $.ig.IEnumerator$1.prototype.$type.specialize(Number), $.ig.IEnumerator.prototype.$type, $.ig.IDisposable.prototype.$type])
}, true);

/*<EndType Name="Infragistics.Controls.Charts.TrendCalculators___MovingSum__IteratorClass" />*/

/*<BeginType Name="Infragistics.Controls.Charts.TrendCalculators___SMA__IteratorClass" />*/

$.ig.util.defType('TrendCalculators___SMA__IteratorClass', 'Object', {
	__1__state: 0,
	__2__current: 0,
	__buffer_5_0: null,
	__i_5_1: 0,
	__sma_5_2: 0,
	_valueEnumerator: null,
	__value_5_3: 0,
	_sequence: null,
	__3__sequence: null,
	_period: 0,
	__3__period: 0,
	init: function (_1__state) {
		$.ig.Object.prototype.init.call(this);
		this.__1__state = _1__state;
	},
	/*<BeginMethod Name="System.Void Infragistics.Controls.Charts.TrendCalculators___SMA__IteratorClass::_m_Finally0()" />*/
	_m_Finally0: function () {
		this.__1__state = -1;
		if (this._valueEnumerator != null) {
			this._valueEnumerator.dispose();
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.Charts.TrendCalculators___SMA__IteratorClass::_m_Finally0()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Controls.Charts.TrendCalculators___SMA__IteratorClass::MoveNext()" />*/
	moveNext: function () {
		var __hasError__ = false;
		try {
			while (this.__1__state >= 0) {
				switch (this.__1__state) {
					case 0:
						this.__1__state = -1;
						this.__buffer_5_0 = new Array(this._period);
						this.__i_5_1 = 0;
						for (this.__i_5_1 = 0; this.__i_5_1 < this._period; this.__i_5_1++) {
							this.__buffer_5_0[this.__i_5_1] = 0;
						}
						this.__i_5_1 = 0;
						this.__sma_5_2 = NaN;
						this.__1__state = 1;
						this._valueEnumerator = this._sequence.getEnumerator();
						this.__1__state = 2;
						break;
					case 2:
						this.__1__state = 1;
						if (this._valueEnumerator.moveNext()) {
							this.__value_5_3 = this._valueEnumerator.current();
							if (!$.ig.util.isNaN(this.__value_5_3)) {
								var next = this.__value_5_3 / this._period;
								var cursor = this.__i_5_1 % this._period;
								if (this.__i_5_1 < this._period) {
									this.__sma_5_2 = $.ig.util.isNaN(this.__sma_5_2) ? this.__value_5_3 : (this.__sma_5_2 * this.__i_5_1 + this.__value_5_3) / (this.__i_5_1 + 1);
								} else {
									this.__sma_5_2 = this.__sma_5_2 + next - this.__buffer_5_0[cursor];
								}
								this.__buffer_5_0[cursor] = next;
								++this.__i_5_1;
							}
							this.__2__current = this.__sma_5_2;
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
	/*<EndMethod Name="System.Boolean Infragistics.Controls.Charts.TrendCalculators___SMA__IteratorClass::MoveNext()" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerator Infragistics.Controls.Charts.TrendCalculators___SMA__IteratorClass::System.Collections.Generic.IEnumerable<System.Double>.GetEnumerator()" />*/
	getEnumerator: function () {
		var d__;
		if (this.__1__state == -2) {
			this.__1__state = 0;
			d__ = this;
		} else {
			d__ = new $.ig.TrendCalculators___SMA__IteratorClass(0);
		}
		d__._sequence = this.__3__sequence;
		d__._period = this.__3__period;
		return d__;
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerator Infragistics.Controls.Charts.TrendCalculators___SMA__IteratorClass::System.Collections.Generic.IEnumerable<System.Double>.GetEnumerator()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.Charts.TrendCalculators___SMA__IteratorClass::System.Collections.IEnumerator.Reset()" />*/
	reset: function () {
		throw new $.ig.NotSupportedException(1);
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.Charts.TrendCalculators___SMA__IteratorClass::System.Collections.IEnumerator.Reset()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.Charts.TrendCalculators___SMA__IteratorClass::System.IDisposable.Dispose()" />*/
	dispose: function () {
		switch (this.__1__state) {
			case 1:
			case 2:
				this._m_Finally0();
				break;
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.Charts.TrendCalculators___SMA__IteratorClass::System.IDisposable.Dispose()" />*/
	,
	/*<BeginProperty Name="System.Double Infragistics.Controls.Charts.TrendCalculators___SMA__IteratorClass::System.Collections.Generic.IEnumerator<System.Double>.Current()" />*/
	current: function () {
		return this.__2__current;
	}
	/*<EndProperty Name="System.Double Infragistics.Controls.Charts.TrendCalculators___SMA__IteratorClass::System.Collections.Generic.IEnumerator<System.Double>.Current()" />*/
	,
	/*<BeginProperty Name="System.Object Infragistics.Controls.Charts.TrendCalculators___SMA__IteratorClass::System.Collections.IEnumerator.Current()" />*/
	current1: function () {
		return this.__2__current;
	}
	/*<EndProperty Name="System.Object Infragistics.Controls.Charts.TrendCalculators___SMA__IteratorClass::System.Collections.IEnumerator.Current()" />*/
	,
	$type: new $.ig.Type('TrendCalculators___SMA__IteratorClass', $.ig.Object.prototype.$type, [$.ig.IEnumerable$1.prototype.$type.specialize(Number), $.ig.IEnumerable.prototype.$type, $.ig.IEnumerator$1.prototype.$type.specialize(Number), $.ig.IEnumerator.prototype.$type, $.ig.IDisposable.prototype.$type])
}, true);

/*<EndType Name="Infragistics.Controls.Charts.TrendCalculators___SMA__IteratorClass" />*/

/*<BeginType Name="Infragistics.Controls.Charts.TrendCalculators___CMA__IteratorClass" />*/

$.ig.util.defType('TrendCalculators___CMA__IteratorClass', 'Object', {
	__1__state: 0,
	__2__current: 0,
	__cma_5_0: 0,
	__i_5_1: 0,
	_valueEnumerator: null,
	__value_5_2: 0,
	_sequence: null,
	__3__sequence: null,
	init: function (_1__state) {
		$.ig.Object.prototype.init.call(this);
		this.__1__state = _1__state;
	},
	/*<BeginMethod Name="System.Void Infragistics.Controls.Charts.TrendCalculators___CMA__IteratorClass::_m_Finally0()" />*/
	_m_Finally0: function () {
		this.__1__state = -1;
		if (this._valueEnumerator != null) {
			this._valueEnumerator.dispose();
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.Charts.TrendCalculators___CMA__IteratorClass::_m_Finally0()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Controls.Charts.TrendCalculators___CMA__IteratorClass::MoveNext()" />*/
	moveNext: function () {
		var __hasError__ = false;
		try {
			while (this.__1__state >= 0) {
				switch (this.__1__state) {
					case 0:
						this.__1__state = -1;
						this.__cma_5_0 = NaN;
						this.__i_5_1 = 0;
						this.__1__state = 1;
						this._valueEnumerator = this._sequence.getEnumerator();
						this.__1__state = 2;
						break;
					case 2:
						this.__1__state = 1;
						if (this._valueEnumerator.moveNext()) {
							this.__value_5_2 = this._valueEnumerator.current();
							if (!$.ig.util.isNaN(this.__value_5_2)) {
								this.__cma_5_0 = $.ig.util.isNaN(this.__cma_5_0) ? this.__value_5_2 : (this.__cma_5_0 * this.__i_5_1 + this.__value_5_2) / (this.__i_5_1 + 1);
								++this.__i_5_1;
							}
							this.__2__current = this.__cma_5_0;
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
	/*<EndMethod Name="System.Boolean Infragistics.Controls.Charts.TrendCalculators___CMA__IteratorClass::MoveNext()" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerator Infragistics.Controls.Charts.TrendCalculators___CMA__IteratorClass::System.Collections.Generic.IEnumerable<System.Double>.GetEnumerator()" />*/
	getEnumerator: function () {
		var d__;
		if (this.__1__state == -2) {
			this.__1__state = 0;
			d__ = this;
		} else {
			d__ = new $.ig.TrendCalculators___CMA__IteratorClass(0);
		}
		d__._sequence = this.__3__sequence;
		return d__;
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerator Infragistics.Controls.Charts.TrendCalculators___CMA__IteratorClass::System.Collections.Generic.IEnumerable<System.Double>.GetEnumerator()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.Charts.TrendCalculators___CMA__IteratorClass::System.Collections.IEnumerator.Reset()" />*/
	reset: function () {
		throw new $.ig.NotSupportedException(1);
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.Charts.TrendCalculators___CMA__IteratorClass::System.Collections.IEnumerator.Reset()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.Charts.TrendCalculators___CMA__IteratorClass::System.IDisposable.Dispose()" />*/
	dispose: function () {
		switch (this.__1__state) {
			case 1:
			case 2:
				this._m_Finally0();
				break;
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.Charts.TrendCalculators___CMA__IteratorClass::System.IDisposable.Dispose()" />*/
	,
	/*<BeginProperty Name="System.Double Infragistics.Controls.Charts.TrendCalculators___CMA__IteratorClass::System.Collections.Generic.IEnumerator<System.Double>.Current()" />*/
	current: function () {
		return this.__2__current;
	}
	/*<EndProperty Name="System.Double Infragistics.Controls.Charts.TrendCalculators___CMA__IteratorClass::System.Collections.Generic.IEnumerator<System.Double>.Current()" />*/
	,
	/*<BeginProperty Name="System.Object Infragistics.Controls.Charts.TrendCalculators___CMA__IteratorClass::System.Collections.IEnumerator.Current()" />*/
	current1: function () {
		return this.__2__current;
	}
	/*<EndProperty Name="System.Object Infragistics.Controls.Charts.TrendCalculators___CMA__IteratorClass::System.Collections.IEnumerator.Current()" />*/
	,
	$type: new $.ig.Type('TrendCalculators___CMA__IteratorClass', $.ig.Object.prototype.$type, [$.ig.IEnumerable$1.prototype.$type.specialize(Number), $.ig.IEnumerable.prototype.$type, $.ig.IEnumerator$1.prototype.$type.specialize(Number), $.ig.IEnumerator.prototype.$type, $.ig.IDisposable.prototype.$type])
}, true);

/*<EndType Name="Infragistics.Controls.Charts.TrendCalculators___CMA__IteratorClass" />*/

/*<BeginType Name="Infragistics.Controls.Charts.TrendCalculators___MMA__IteratorClass" />*/

$.ig.util.defType('TrendCalculators___MMA__IteratorClass', 'Object', {
	__1__state: 0,
	__2__current: 0,
	__i_5_0: 0,
	__mma_5_1: 0,
	__alpha_5_2: 0,
	_valueEnumerator: null,
	__value_5_3: 0,
	_sequence: null,
	__3__sequence: null,
	_period: 0,
	__3__period: 0,
	init: function (_1__state) {
		$.ig.Object.prototype.init.call(this);
		this.__1__state = _1__state;
	},
	/*<BeginMethod Name="System.Void Infragistics.Controls.Charts.TrendCalculators___MMA__IteratorClass::_m_Finally0()" />*/
	_m_Finally0: function () {
		this.__1__state = -1;
		if (this._valueEnumerator != null) {
			this._valueEnumerator.dispose();
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.Charts.TrendCalculators___MMA__IteratorClass::_m_Finally0()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Controls.Charts.TrendCalculators___MMA__IteratorClass::MoveNext()" />*/
	moveNext: function () {
		var __hasError__ = false;
		try {
			while (this.__1__state >= 0) {
				switch (this.__1__state) {
					case 0:
						this.__1__state = -1;
						this.__i_5_0 = 0;
						this.__mma_5_1 = NaN;
						this.__alpha_5_2 = 1 / this._period;
						this.__1__state = 1;
						this._valueEnumerator = this._sequence.getEnumerator();
						this.__1__state = 2;
						break;
					case 2:
						this.__1__state = 1;
						if (this._valueEnumerator.moveNext()) {
							this.__value_5_3 = this._valueEnumerator.current();
							if (!$.ig.util.isNaN(this.__value_5_3)) {
								if (this.__i_5_0 < this._period) {
									this.__mma_5_1 = $.ig.util.isNaN(this.__mma_5_1) ? this.__value_5_3 : (this.__mma_5_1 * this.__i_5_0 + this.__value_5_3) / (this.__i_5_0 + 1);
								} else {
									this.__mma_5_1 = (this.__value_5_3 - this.__mma_5_1) * this.__alpha_5_2 + this.__mma_5_1;
								}
								++this.__i_5_0;
							}
							this.__2__current = this.__mma_5_1;
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
	/*<EndMethod Name="System.Boolean Infragistics.Controls.Charts.TrendCalculators___MMA__IteratorClass::MoveNext()" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerator Infragistics.Controls.Charts.TrendCalculators___MMA__IteratorClass::System.Collections.Generic.IEnumerable<System.Double>.GetEnumerator()" />*/
	getEnumerator: function () {
		var d__;
		if (this.__1__state == -2) {
			this.__1__state = 0;
			d__ = this;
		} else {
			d__ = new $.ig.TrendCalculators___MMA__IteratorClass(0);
		}
		d__._sequence = this.__3__sequence;
		d__._period = this.__3__period;
		return d__;
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerator Infragistics.Controls.Charts.TrendCalculators___MMA__IteratorClass::System.Collections.Generic.IEnumerable<System.Double>.GetEnumerator()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.Charts.TrendCalculators___MMA__IteratorClass::System.Collections.IEnumerator.Reset()" />*/
	reset: function () {
		throw new $.ig.NotSupportedException(1);
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.Charts.TrendCalculators___MMA__IteratorClass::System.Collections.IEnumerator.Reset()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.Charts.TrendCalculators___MMA__IteratorClass::System.IDisposable.Dispose()" />*/
	dispose: function () {
		switch (this.__1__state) {
			case 1:
			case 2:
				this._m_Finally0();
				break;
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.Charts.TrendCalculators___MMA__IteratorClass::System.IDisposable.Dispose()" />*/
	,
	/*<BeginProperty Name="System.Double Infragistics.Controls.Charts.TrendCalculators___MMA__IteratorClass::System.Collections.Generic.IEnumerator<System.Double>.Current()" />*/
	current: function () {
		return this.__2__current;
	}
	/*<EndProperty Name="System.Double Infragistics.Controls.Charts.TrendCalculators___MMA__IteratorClass::System.Collections.Generic.IEnumerator<System.Double>.Current()" />*/
	,
	/*<BeginProperty Name="System.Object Infragistics.Controls.Charts.TrendCalculators___MMA__IteratorClass::System.Collections.IEnumerator.Current()" />*/
	current1: function () {
		return this.__2__current;
	}
	/*<EndProperty Name="System.Object Infragistics.Controls.Charts.TrendCalculators___MMA__IteratorClass::System.Collections.IEnumerator.Current()" />*/
	,
	$type: new $.ig.Type('TrendCalculators___MMA__IteratorClass', $.ig.Object.prototype.$type, [$.ig.IEnumerable$1.prototype.$type.specialize(Number), $.ig.IEnumerable.prototype.$type, $.ig.IEnumerator$1.prototype.$type.specialize(Number), $.ig.IEnumerator.prototype.$type, $.ig.IDisposable.prototype.$type])
}, true);

/*<EndType Name="Infragistics.Controls.Charts.TrendCalculators___MMA__IteratorClass" />*/

/*<BeginType Name="Infragistics.Controls.Charts.TrendCalculators___EMA__IteratorClass" />*/

$.ig.util.defType('TrendCalculators___EMA__IteratorClass', 'Object', {
	__1__state: 0,
	__2__current: 0,
	__i_5_0: 0,
	__ema_5_1: 0,
	__alpha_5_2: 0,
	_valueEnumerator: null,
	__value_5_3: 0,
	_sequence: null,
	__3__sequence: null,
	_period: 0,
	__3__period: 0,
	init: function (_1__state) {
		$.ig.Object.prototype.init.call(this);
		this.__1__state = _1__state;
	},
	/*<BeginMethod Name="System.Void Infragistics.Controls.Charts.TrendCalculators___EMA__IteratorClass::_m_Finally0()" />*/
	_m_Finally0: function () {
		this.__1__state = -1;
		if (this._valueEnumerator != null) {
			this._valueEnumerator.dispose();
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.Charts.TrendCalculators___EMA__IteratorClass::_m_Finally0()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Controls.Charts.TrendCalculators___EMA__IteratorClass::MoveNext()" />*/
	moveNext: function () {
		var __hasError__ = false;
		try {
			while (this.__1__state >= 0) {
				switch (this.__1__state) {
					case 0:
						this.__1__state = -1;
						this.__i_5_0 = 0;
						this.__ema_5_1 = NaN;
						this.__alpha_5_2 = 2 / (1 + this._period);
						this.__1__state = 1;
						this._valueEnumerator = this._sequence.getEnumerator();
						this.__1__state = 2;
						break;
					case 2:
						this.__1__state = 1;
						if (this._valueEnumerator.moveNext()) {
							this.__value_5_3 = this._valueEnumerator.current();
							if (!$.ig.util.isNaN(this.__value_5_3)) {
								if (this.__i_5_0 < this._period) {
									this.__ema_5_1 = $.ig.util.isNaN(this.__ema_5_1) ? this.__value_5_3 : (this.__ema_5_1 * this.__i_5_0 + this.__value_5_3) / (this.__i_5_0 + 1);
								} else {
									this.__ema_5_1 = (this.__value_5_3 - this.__ema_5_1) * this.__alpha_5_2 + this.__ema_5_1;
								}
								++this.__i_5_0;
							}
							this.__2__current = this.__ema_5_1;
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
	/*<EndMethod Name="System.Boolean Infragistics.Controls.Charts.TrendCalculators___EMA__IteratorClass::MoveNext()" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerator Infragistics.Controls.Charts.TrendCalculators___EMA__IteratorClass::System.Collections.Generic.IEnumerable<System.Double>.GetEnumerator()" />*/
	getEnumerator: function () {
		var d__;
		if (this.__1__state == -2) {
			this.__1__state = 0;
			d__ = this;
		} else {
			d__ = new $.ig.TrendCalculators___EMA__IteratorClass(0);
		}
		d__._sequence = this.__3__sequence;
		d__._period = this.__3__period;
		return d__;
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerator Infragistics.Controls.Charts.TrendCalculators___EMA__IteratorClass::System.Collections.Generic.IEnumerable<System.Double>.GetEnumerator()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.Charts.TrendCalculators___EMA__IteratorClass::System.Collections.IEnumerator.Reset()" />*/
	reset: function () {
		throw new $.ig.NotSupportedException(1);
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.Charts.TrendCalculators___EMA__IteratorClass::System.Collections.IEnumerator.Reset()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.Charts.TrendCalculators___EMA__IteratorClass::System.IDisposable.Dispose()" />*/
	dispose: function () {
		switch (this.__1__state) {
			case 1:
			case 2:
				this._m_Finally0();
				break;
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.Charts.TrendCalculators___EMA__IteratorClass::System.IDisposable.Dispose()" />*/
	,
	/*<BeginProperty Name="System.Double Infragistics.Controls.Charts.TrendCalculators___EMA__IteratorClass::System.Collections.Generic.IEnumerator<System.Double>.Current()" />*/
	current: function () {
		return this.__2__current;
	}
	/*<EndProperty Name="System.Double Infragistics.Controls.Charts.TrendCalculators___EMA__IteratorClass::System.Collections.Generic.IEnumerator<System.Double>.Current()" />*/
	,
	/*<BeginProperty Name="System.Object Infragistics.Controls.Charts.TrendCalculators___EMA__IteratorClass::System.Collections.IEnumerator.Current()" />*/
	current1: function () {
		return this.__2__current;
	}
	/*<EndProperty Name="System.Object Infragistics.Controls.Charts.TrendCalculators___EMA__IteratorClass::System.Collections.IEnumerator.Current()" />*/
	,
	$type: new $.ig.Type('TrendCalculators___EMA__IteratorClass', $.ig.Object.prototype.$type, [$.ig.IEnumerable$1.prototype.$type.specialize(Number), $.ig.IEnumerable.prototype.$type, $.ig.IEnumerator$1.prototype.$type.specialize(Number), $.ig.IEnumerator.prototype.$type, $.ig.IDisposable.prototype.$type])
}, true);

/*<EndType Name="Infragistics.Controls.Charts.TrendCalculators___EMA__IteratorClass" />*/

/*<BeginType Name="Infragistics.Controls.Charts.TrendCalculators___WMA__IteratorClass" />*/

$.ig.util.defType('TrendCalculators___WMA__IteratorClass', 'Object', {
	__1__state: 0,
	__2__current: 0,
	__buffer_5_0: null,
	__i_5_1: 0,
	__total_5_2: 0,
	__numerator_5_3: 0,
	__weightsum_5_4: 0,
	__wma_5_5: 0,
	_valueEnumerator: null,
	__value_5_6: 0,
	_sequence: null,
	__3__sequence: null,
	_period: 0,
	__3__period: 0,
	init: function (_1__state) {
		$.ig.Object.prototype.init.call(this);
		this.__1__state = _1__state;
	},
	/*<BeginMethod Name="System.Void Infragistics.Controls.Charts.TrendCalculators___WMA__IteratorClass::_m_Finally0()" />*/
	_m_Finally0: function () {
		this.__1__state = -1;
		if (this._valueEnumerator != null) {
			this._valueEnumerator.dispose();
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.Charts.TrendCalculators___WMA__IteratorClass::_m_Finally0()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.Controls.Charts.TrendCalculators___WMA__IteratorClass::MoveNext()" />*/
	moveNext: function () {
		var __hasError__ = false;
		try {
			while (this.__1__state >= 0) {
				switch (this.__1__state) {
					case 0:
						this.__1__state = -1;
						this.__buffer_5_0 = new Array(this._period);
						this.__i_5_1 = 0;
						for (this.__i_5_1 = 0; this.__i_5_1 < this._period; this.__i_5_1++) {
							this.__buffer_5_0[this.__i_5_1] = 0;
						}
						this.__total_5_2 = NaN;
						this.__numerator_5_3 = NaN;
						this.__weightsum_5_4 = NaN;
						this.__wma_5_5 = NaN;
						this.__i_5_1 = 0;
						this.__1__state = 1;
						this._valueEnumerator = this._sequence.getEnumerator();
						this.__1__state = 2;
						break;
					case 2:
						this.__1__state = 1;
						if (this._valueEnumerator.moveNext()) {
							this.__value_5_6 = this._valueEnumerator.current();
							if (!$.ig.util.isNaN(this.__value_5_6)) {
								var cursor = this.__i_5_1 % this._period;
								if (this.__i_5_1 == 0) {
									this.__weightsum_5_4 = 1;
									this.__wma_5_5 = this.__numerator_5_3 = this.__total_5_2 = this.__value_5_6;
								} else if (this.__i_5_1 < this._period) {
									this.__weightsum_5_4 += (this.__i_5_1 + 1);
									this.__total_5_2 += this.__value_5_6;
									this.__numerator_5_3 += (this.__i_5_1 + 1) * this.__value_5_6;
									this.__wma_5_5 = this.__numerator_5_3 / this.__weightsum_5_4;
								} else {
									this.__numerator_5_3 = this.__numerator_5_3 + (this._period * this.__value_5_6) - this.__total_5_2;
									this.__wma_5_5 = this.__numerator_5_3 / this.__weightsum_5_4;
									this.__total_5_2 = this.__total_5_2 + this.__value_5_6 - this.__buffer_5_0[cursor];
								}
								this.__buffer_5_0[cursor] = this.__value_5_6;
								++this.__i_5_1;
							}
							this.__2__current = this.__wma_5_5;
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
	/*<EndMethod Name="System.Boolean Infragistics.Controls.Charts.TrendCalculators___WMA__IteratorClass::MoveNext()" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerator Infragistics.Controls.Charts.TrendCalculators___WMA__IteratorClass::System.Collections.Generic.IEnumerable<System.Double>.GetEnumerator()" />*/
	getEnumerator: function () {
		var d__;
		if (this.__1__state == -2) {
			this.__1__state = 0;
			d__ = this;
		} else {
			d__ = new $.ig.TrendCalculators___WMA__IteratorClass(0);
		}
		d__._sequence = this.__3__sequence;
		d__._period = this.__3__period;
		return d__;
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerator Infragistics.Controls.Charts.TrendCalculators___WMA__IteratorClass::System.Collections.Generic.IEnumerable<System.Double>.GetEnumerator()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.Charts.TrendCalculators___WMA__IteratorClass::System.Collections.IEnumerator.Reset()" />*/
	reset: function () {
		throw new $.ig.NotSupportedException(1);
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.Charts.TrendCalculators___WMA__IteratorClass::System.Collections.IEnumerator.Reset()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.Charts.TrendCalculators___WMA__IteratorClass::System.IDisposable.Dispose()" />*/
	dispose: function () {
		switch (this.__1__state) {
			case 1:
			case 2:
				this._m_Finally0();
				break;
		}
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.Charts.TrendCalculators___WMA__IteratorClass::System.IDisposable.Dispose()" />*/
	,
	/*<BeginProperty Name="System.Double Infragistics.Controls.Charts.TrendCalculators___WMA__IteratorClass::System.Collections.Generic.IEnumerator<System.Double>.Current()" />*/
	current: function () {
		return this.__2__current;
	}
	/*<EndProperty Name="System.Double Infragistics.Controls.Charts.TrendCalculators___WMA__IteratorClass::System.Collections.Generic.IEnumerator<System.Double>.Current()" />*/
	,
	/*<BeginProperty Name="System.Object Infragistics.Controls.Charts.TrendCalculators___WMA__IteratorClass::System.Collections.IEnumerator.Current()" />*/
	current1: function () {
		return this.__2__current;
	}
	/*<EndProperty Name="System.Object Infragistics.Controls.Charts.TrendCalculators___WMA__IteratorClass::System.Collections.IEnumerator.Current()" />*/
	,
	$type: new $.ig.Type('TrendCalculators___WMA__IteratorClass', $.ig.Object.prototype.$type, [$.ig.IEnumerable$1.prototype.$type.specialize(Number), $.ig.IEnumerable.prototype.$type, $.ig.IEnumerator$1.prototype.$type.specialize(Number), $.ig.IEnumerator.prototype.$type, $.ig.IDisposable.prototype.$type])
}, true);

/*<EndType Name="Infragistics.Controls.Charts.TrendCalculators___WMA__IteratorClass" />*/

/*<BeginType Name="Infragistics.RearrangedList___GetEnumerator__IteratorClass1`1" />*/

$.ig.util.defType('RearrangedList___GetEnumerator__IteratorClass1$1', 'Object', {
	$t: null,
	__1__state: 0,
	__2__current: null,
	_indEnumerator: null,
	__ind_5_0: 0,
	__4__this: null,
	init: function ($t, _1__state) {
		this.$t = $t;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$t);
		}
		$.ig.Object.prototype.init.call(this);
		this.__1__state = _1__state;
	},
	/*<BeginMethod Name="System.Void Infragistics.RearrangedList___GetEnumerator__IteratorClass1`1::_m_Finally0()" />*/
	_m_Finally0: function () {
		this.__1__state = -1;
		if (this._indEnumerator != null) {
			this._indEnumerator.dispose();
		}
	}
	/*<EndMethod Name="System.Void Infragistics.RearrangedList___GetEnumerator__IteratorClass1`1::_m_Finally0()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.RearrangedList___GetEnumerator__IteratorClass1`1::MoveNext()" />*/
	moveNext: function () {
		var __hasError__ = false;
		try {
			while (this.__1__state >= 0) {
				switch (this.__1__state) {
					case 0:
						this.__1__state = 1;
						this._indEnumerator = (this.__4__this.__indexes).getEnumerator();
						this.__1__state = 2;
						break;
					case 2:
						this.__1__state = 1;
						if (this._indEnumerator.moveNext()) {
							this.__ind_5_0 = this._indEnumerator.current();
							this.__2__current = $.ig.util.getBoxIfEnum(this.$t, this.__4__this.__inner.item(this.__ind_5_0));
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
	/*<EndMethod Name="System.Boolean Infragistics.RearrangedList___GetEnumerator__IteratorClass1`1::MoveNext()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.RearrangedList___GetEnumerator__IteratorClass1`1::System.Collections.IEnumerator.Reset()" />*/
	reset: function () {
		throw new $.ig.NotSupportedException(1);
	}
	/*<EndMethod Name="System.Void Infragistics.RearrangedList___GetEnumerator__IteratorClass1`1::System.Collections.IEnumerator.Reset()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.RearrangedList___GetEnumerator__IteratorClass1`1::System.IDisposable.Dispose()" />*/
	dispose: function () {
		switch (this.__1__state) {
			case 1:
			case 2:
				this._m_Finally0();
				break;
		}
	}
	/*<EndMethod Name="System.Void Infragistics.RearrangedList___GetEnumerator__IteratorClass1`1::System.IDisposable.Dispose()" />*/
	,
	/*<BeginProperty Name="System.Object Infragistics.RearrangedList___GetEnumerator__IteratorClass1`1::System.Collections.Generic.IEnumerator<System.Object>.Current()" />*/
	current: function () {
		return this.__2__current;
	}
	/*<EndProperty Name="System.Object Infragistics.RearrangedList___GetEnumerator__IteratorClass1`1::System.Collections.Generic.IEnumerator<System.Object>.Current()" />*/
	,
	/*<BeginProperty Name="System.Object Infragistics.RearrangedList___GetEnumerator__IteratorClass1`1::System.Collections.IEnumerator.Current()" />*/
	current1: function () {
		return this.__2__current;
	}
	/*<EndProperty Name="System.Object Infragistics.RearrangedList___GetEnumerator__IteratorClass1`1::System.Collections.IEnumerator.Current()" />*/
	,
	$type: new $.ig.Type('RearrangedList___GetEnumerator__IteratorClass1$1', $.ig.Object.prototype.$type, [$.ig.IEnumerator$1.prototype.$type.specialize($.ig.Object.prototype.$type), $.ig.IEnumerator.prototype.$type, $.ig.IDisposable.prototype.$type])
}, true);

/*<EndType Name="Infragistics.RearrangedList___GetEnumerator__IteratorClass1`1" />*/

/*<BeginType Name="Infragistics.Controls.Charts.TrendCalculators___STDEV__IteratorClass" />*/

$.ig.util.defType('TrendCalculators___STDEV__IteratorClass', 'Object', {
	__1__state: 0,
	__2__current: 0,
	__sma_5_0: null,
	__price_5_1: null,
	__buffer_5_2: null,
	__i_5_3: 0,
	__s_5_4: 0,
	_sequence: null,
	__3__sequence: null,
	_period: 0,
	__3__period: 0,
	init: function (_1__state) {
		$.ig.Object.prototype.init.call(this);
		this.__1__state = _1__state;
	},
	/*<BeginMethod Name="System.Boolean Infragistics.Controls.Charts.TrendCalculators___STDEV__IteratorClass::MoveNext()" />*/
	moveNext: function () {
		while (this.__1__state >= 0) {
			switch (this.__1__state) {
				case 0:
					this.__1__state = -1;
					this.__sma_5_0 = $.ig.TrendCalculators.prototype.sMA(this._sequence, this._period).getEnumerator();
					this.__price_5_1 = this._sequence.getEnumerator();
					this.__buffer_5_2 = new Array(this._period);
					this.__i_5_3 = 0;
					for (this.__i_5_3 = 0; this.__i_5_3 < this._period; this.__i_5_3++) {
						this.__buffer_5_2[this.__i_5_3] = 0;
					}
					this.__i_5_3 = 0;
					this.__1__state = 1;
					break;
				case 1:
					this.__1__state = -1;
					if (this.__price_5_1.moveNext() && this.__sma_5_0.moveNext()) {
						this.__buffer_5_2[(this.__i_5_3++) % this._period] = this.__price_5_1.current();
						this.__s_5_4 = 0;
						if (this.__i_5_3 < this._period) {
							var effectivePeriod = 0;
							for (var j = 0; j < this.__i_5_3; j++) {
								var t = (this.__sma_5_0.current() - this.__buffer_5_2[j]);
								this.__s_5_4 += t * t;
								effectivePeriod++;
							}
							this.__2__current = Math.sqrt(this.__s_5_4 / effectivePeriod);
							this.__1__state = 1;
							return true;
						}
						for (var j1 = 0; j1 < this._period; ++j1) {
							var t1 = (this.__sma_5_0.current() - this.__buffer_5_2[j1]);
							this.__s_5_4 += t1 * t1;
						}
						this.__2__current = Math.sqrt(this.__s_5_4 / this._period);
						this.__1__state = 1;
						return true;
					}
					break;
			}
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean Infragistics.Controls.Charts.TrendCalculators___STDEV__IteratorClass::MoveNext()" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerator Infragistics.Controls.Charts.TrendCalculators___STDEV__IteratorClass::System.Collections.Generic.IEnumerable<System.Double>.GetEnumerator()" />*/
	getEnumerator: function () {
		var d__;
		if (this.__1__state == -2) {
			this.__1__state = 0;
			d__ = this;
		} else {
			d__ = new $.ig.TrendCalculators___STDEV__IteratorClass(0);
		}
		d__._sequence = this.__3__sequence;
		d__._period = this.__3__period;
		return d__;
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerator Infragistics.Controls.Charts.TrendCalculators___STDEV__IteratorClass::System.Collections.Generic.IEnumerable<System.Double>.GetEnumerator()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.Charts.TrendCalculators___STDEV__IteratorClass::System.Collections.IEnumerator.Reset()" />*/
	reset: function () {
		throw new $.ig.NotSupportedException(1);
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.Charts.TrendCalculators___STDEV__IteratorClass::System.Collections.IEnumerator.Reset()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.Controls.Charts.TrendCalculators___STDEV__IteratorClass::System.IDisposable.Dispose()" />*/
	dispose: function () {
	}
	/*<EndMethod Name="System.Void Infragistics.Controls.Charts.TrendCalculators___STDEV__IteratorClass::System.IDisposable.Dispose()" />*/
	,
	/*<BeginProperty Name="System.Double Infragistics.Controls.Charts.TrendCalculators___STDEV__IteratorClass::System.Collections.Generic.IEnumerator<System.Double>.Current()" />*/
	current: function () {
		return this.__2__current;
	}
	/*<EndProperty Name="System.Double Infragistics.Controls.Charts.TrendCalculators___STDEV__IteratorClass::System.Collections.Generic.IEnumerator<System.Double>.Current()" />*/
	,
	/*<BeginProperty Name="System.Object Infragistics.Controls.Charts.TrendCalculators___STDEV__IteratorClass::System.Collections.IEnumerator.Current()" />*/
	current1: function () {
		return this.__2__current;
	}
	/*<EndProperty Name="System.Object Infragistics.Controls.Charts.TrendCalculators___STDEV__IteratorClass::System.Collections.IEnumerator.Current()" />*/
	,
	$type: new $.ig.Type('TrendCalculators___STDEV__IteratorClass', $.ig.Object.prototype.$type, [$.ig.IEnumerable$1.prototype.$type.specialize(Number), $.ig.IEnumerable.prototype.$type, $.ig.IEnumerator$1.prototype.$type.specialize(Number), $.ig.IEnumerator.prototype.$type, $.ig.IDisposable.prototype.$type])
}, true);

/*<EndType Name="Infragistics.Controls.Charts.TrendCalculators___STDEV__IteratorClass" />*/

/*<BeginType Name="Infragistics.RearrangedList___GetEnumerator__IteratorClass`1" />*/

$.ig.util.defType('RearrangedList___GetEnumerator__IteratorClass$1', 'Object', {
	$t: null,
	__1__state: 0,
	__2__current: null,
	_indEnumerator: null,
	__ind_5_0: 0,
	__4__this: null,
	init: function ($t, _1__state) {
		this.$t = $t;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$t);
		}
		$.ig.Object.prototype.init.call(this);
		this.__1__state = _1__state;
	},
	/*<BeginMethod Name="System.Void Infragistics.RearrangedList___GetEnumerator__IteratorClass`1::_m_Finally0()" />*/
	_m_Finally0: function () {
		this.__1__state = -1;
		if (this._indEnumerator != null) {
			this._indEnumerator.dispose();
		}
	}
	/*<EndMethod Name="System.Void Infragistics.RearrangedList___GetEnumerator__IteratorClass`1::_m_Finally0()" />*/
	,
	/*<BeginMethod Name="System.Boolean Infragistics.RearrangedList___GetEnumerator__IteratorClass`1::MoveNext()" />*/
	moveNext: function () {
		var __hasError__ = false;
		try {
			while (this.__1__state >= 0) {
				switch (this.__1__state) {
					case 0:
						this.__1__state = 1;
						this._indEnumerator = (this.__4__this.__indexes).getEnumerator();
						this.__1__state = 2;
						break;
					case 2:
						this.__1__state = 1;
						if (this._indEnumerator.moveNext()) {
							this.__ind_5_0 = this._indEnumerator.current();
							this.__2__current = this.__4__this.__inner.item(this.__ind_5_0);
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
	/*<EndMethod Name="System.Boolean Infragistics.RearrangedList___GetEnumerator__IteratorClass`1::MoveNext()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.RearrangedList___GetEnumerator__IteratorClass`1::System.Collections.IEnumerator.Reset()" />*/
	reset: function () {
		throw new $.ig.NotSupportedException(1);
	}
	/*<EndMethod Name="System.Void Infragistics.RearrangedList___GetEnumerator__IteratorClass`1::System.Collections.IEnumerator.Reset()" />*/
	,
	/*<BeginMethod Name="System.Void Infragistics.RearrangedList___GetEnumerator__IteratorClass`1::System.IDisposable.Dispose()" />*/
	dispose: function () {
		switch (this.__1__state) {
			case 1:
			case 2:
				this._m_Finally0();
				break;
		}
	}
	/*<EndMethod Name="System.Void Infragistics.RearrangedList___GetEnumerator__IteratorClass`1::System.IDisposable.Dispose()" />*/
	,
	/*<BeginProperty Name="Infragistics.RearrangedList___GetEnumerator__IteratorClass.T Infragistics.RearrangedList___GetEnumerator__IteratorClass`1::System.Collections.Generic.IEnumerator<T>.Current()" />*/
	current: function () {
		return this.__2__current;
	}
	/*<EndProperty Name="Infragistics.RearrangedList___GetEnumerator__IteratorClass.T Infragistics.RearrangedList___GetEnumerator__IteratorClass`1::System.Collections.Generic.IEnumerator<T>.Current()" />*/
	,
	/*<BeginProperty Name="System.Object Infragistics.RearrangedList___GetEnumerator__IteratorClass`1::System.Collections.IEnumerator.Current()" />*/
	current1: function () {
		return $.ig.util.getBoxIfEnum(this.$t, this.__2__current);
	}
	/*<EndProperty Name="System.Object Infragistics.RearrangedList___GetEnumerator__IteratorClass`1::System.Collections.IEnumerator.Current()" />*/
	,
	$type: new $.ig.Type('RearrangedList___GetEnumerator__IteratorClass$1', $.ig.Object.prototype.$type, [$.ig.IEnumerator$1.prototype.$type.specialize(0), $.ig.IEnumerator.prototype.$type, $.ig.IDisposable.prototype.$type])
}, true);

/*<EndType Name="Infragistics.RearrangedList___GetEnumerator__IteratorClass`1" />*/

/*<BeginStatics Name="Infragistics.ColorUtil" />*/

$.ig.ColorUtil.prototype._r = new $.ig.Random(0);
$.ig.ColorUtil.prototype.__randomColors = null;
/*<EndStatics Name="Infragistics.ColorUtil" />*/

/*<BeginStatics Name="Infragistics.CssHelper" />*/

$.ig.CssHelper.prototype.defaultMarginValue = "-4321px";
$.ig.CssHelper.prototype.defaultColorValue = "rgb(3, 2, 1)";
$.ig.CssHelper.prototype.defaultBackgroundImageValue = "none";
$.ig.CssHelper.prototype.defaultTextAlignValue = "justify";
$.ig.CssHelper.prototype.defaultVerticalAlignValue = "baseline";
$.ig.CssHelper.prototype.defaultOpacityValue = "0.888";
$.ig.CssHelper.prototype.defaultVisibilityValue = "hidden";
$.ig.CssHelper.prototype.defaultWidthHeightValue = "4321px";
$.ig.CssHelper.prototype.maxClasses = 500;
/*<EndStatics Name="Infragistics.CssHelper" />*/

/*<BeginStatics Name="Infragistics.FontUtil" />*/

$.ig.FontUtil.prototype.__defaultInfo = null;
/*<EndStatics Name="Infragistics.FontUtil" />*/

/*<BeginStatics Name="Infragistics.BrushCollection" />*/

$.ig.BrushCollection.prototype._random = new $.ig.Random(0);
/*<EndStatics Name="Infragistics.BrushCollection" />*/

/*<BeginStatics Name="Infragistics.MathUtil" />*/

$.ig.MathUtil.prototype.degreeAsRadian = Math.PI / 180;
$.ig.MathUtil.prototype.pHI = (1 + Math.sqrt(5)) / 2;
$.ig.MathUtil.prototype.sQRT2 = Math.sqrt(2);
$.ig.MathUtil.prototype._basis = [ 151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180, 151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180 ];
/*<EndStatics Name="Infragistics.MathUtil" />*/

/*<BeginStatics Name="Infragistics.Controls.BaseDOMEventProxy" />*/

$.ig.BaseDOMEventProxy.prototype.nullTimer = -1;
$.ig.BaseDOMEventProxy.prototype.mSPointerEnabled = false;
$.ig.BaseDOMEventProxy.prototype.pointerEnabled = false;
$.ig.BaseDOMEventProxy.prototype.tridentVersion = 0;
$.ig.BaseDOMEventProxy.prototype.edgeVersion = 0;
/*<EndStatics Name="Infragistics.Controls.BaseDOMEventProxy" />*/

/*<BeginStatics Name="Infragistics.Controls.CanvasGestureDOMEventProxy" />*/

$.ig.CanvasGestureDOMEventProxy.prototype.__proxyCount = 0;
/*<EndStatics Name="Infragistics.Controls.CanvasGestureDOMEventProxy" />*/

/*<BeginStatics Name="Infragistics.Controls.DOMEventProxy" />*/

$.ig.DOMEventProxy.prototype.__proxyCount = 0;
/*<EndStatics Name="Infragistics.Controls.DOMEventProxy" />*/

/*<BeginStatics Name="Infragistics.Controls.TouchGestureRecognizer" />*/

$.ig.TouchGestureRecognizer.prototype._checkHoldTime = 1000;
/*<EndStatics Name="Infragistics.Controls.TouchGestureRecognizer" />*/

/*<BeginStatics Name="Infragistics.Controls.TouchVelocityTracker" />*/

$.ig.TouchVelocityTracker.prototype._touchHistoryLength = 5;
$.ig.TouchVelocityTracker.prototype.minimumMovement = 5;
/*<EndStatics Name="Infragistics.Controls.TouchVelocityTracker" />*/

/*<BeginStatics Name="Infragistics.Controls.Charts.LegendItemHelper" />*/

$.ig.LegendItemHelper.prototype.__pixelRatio = NaN;
/*<EndStatics Name="Infragistics.Controls.Charts.LegendItemHelper" />*/


/*<BeginFooter/>*/
}));// REMOVE_FROM_COMBINED_FILES
/*<EndFooter/>*/

