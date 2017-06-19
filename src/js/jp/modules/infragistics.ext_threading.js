/*!@license
* Infragistics.Web.ClientUI infragistics.ext_threading.js 17.1.20171.1012
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
$.ig.globalDefs.$$9 = $$t;
$$0 = $.ig.globalDefs.$$0;
$$1 = $.ig.globalDefs.$$1;
$$6 = $.ig.globalDefs.$$6;
$.ig.$currDefinitions = $$t;
$.ig.util.bulkDefine([
"Task$1:a",
"Task:b",
"TaskCompletionSource$1:c"]);
/*<BeginType Name="System.ThreadingTasks.TaskStatus" />*/

$.ig.util.defEnum('TaskStatus', false, false, {
	Created: 0,
	RanToCompletion: 5,
	Canceled: 6,
	Faulted: 7
});

/*<EndType Name="System.ThreadingTasks.TaskStatus" />*/

/*<BeginType Name="System.ThreadingTasks.Task" />*/

$.ig.util.defType('Task', 'Object', {
	_promise: null,
	/*<BeginProperty Name="System.JQuery.JQueryPromise System.ThreadingTasks.Task::Promise()" />*/
	promise: function (value) {
		if (arguments.length === 1) {
			this._promise = value;
			return value;
		} else {
			return this._promise;
		}
	}
	/*<EndProperty Name="System.JQuery.JQueryPromise System.ThreadingTasks.Task::Promise()" />*/
	,
	_isCanceled: false,
	/*<BeginProperty Name="System.Boolean System.ThreadingTasks.Task::IsCanceled()" />*/
	isCanceled: function (value) {
		if (arguments.length === 1) {
			this._isCanceled = value;
			return value;
		} else {
			return this._isCanceled;
		}
	}
	/*<EndProperty Name="System.Boolean System.ThreadingTasks.Task::IsCanceled()" />*/
	,
	_exception: null,
	/*<BeginProperty Name="System.AggregateException System.ThreadingTasks.Task::Exception()" />*/
	exception: function (value) {
		if (arguments.length === 1) {
			this._exception = value;
			return value;
		} else {
			return this._exception;
		}
	}
	/*<EndProperty Name="System.AggregateException System.ThreadingTasks.Task::Exception()" />*/
	,
	init: function (initNumber, promise) {
		if (initNumber > 0) {
			switch (initNumber) {
				case 1:
					this.init1.apply(this, arguments);
					break;
			}
			return;
		}
		$.ig.Task.prototype.init1.call(this, 1, promise, null);
	},
	init1: function (initNumber, promise, state) {
		var $self = this;
		$.ig.Object.prototype.init.call(this);
		var doneContinuation = function () {
		};
		var failContinuation = function (exception) {
			if (exception == null) {
				$self.isCanceled(true);
			} else {
				$self.exception(new $.ig.AggregateException(2, "Exception occurred during task execution", exception));
			}
		};
		this.promise(promise.done(doneContinuation).fail(failContinuation));
		this.asyncState(state);
	},
	/*<BeginProperty Name="System.ThreadingTasks.TaskStatus System.ThreadingTasks.Task::Status()" />*/
	status: function () {
		if (this.isCanceled()) {
			return $.ig.TaskStatus.prototype.canceled;
		}
		switch (this.promise().state()) {
			case "pending": return $.ig.TaskStatus.prototype.created;
			case "resolved": return $.ig.TaskStatus.prototype.ranToCompletion;
			case "rejected": return $.ig.TaskStatus.prototype.faulted;
			default: return $.ig.TaskStatus.prototype.created;
		}
	}
	/*<EndProperty Name="System.ThreadingTasks.TaskStatus System.ThreadingTasks.Task::Status()" />*/
	,
	_asyncState: null,
	/*<BeginProperty Name="System.Object System.ThreadingTasks.Task::AsyncState()" />*/
	asyncState: function (value) {
		if (arguments.length === 1) {
			this._asyncState = value;
			return value;
		} else {
			return this._asyncState;
		}
	}
	/*<EndProperty Name="System.Object System.ThreadingTasks.Task::AsyncState()" />*/
	,
	/*<BeginMethod Name="System.ThreadingTasks.Task System.ThreadingTasks.Task::ContinueWith(System.Action)" />*/
	continueWith: function (continuationAction) {
		var $self = this;
		var doneContinuation = function () { continuationAction($self); };
		var failContinuation = function (exception) { continuationAction($self); };
		var continuationPromise = this.promise().done(doneContinuation).fail(failContinuation);
		return new $.ig.Task(0, continuationPromise);
	}
	/*<EndMethod Name="System.ThreadingTasks.Task System.ThreadingTasks.Task::ContinueWith(System.Action)" />*/
	,
	/*<BeginMethod Name="System.ThreadingTasks.Task System.ThreadingTasks.Task::ContinueWith`1(System.Func)" />*/
	continueWith$1: function ($tNewResult, continuationFunction) {
		var $self = this;
		var tcs = new $.ig.TaskCompletionSource$1($tNewResult, 0);
		var continuation = function () {
			try {
				var newResult = continuationFunction($self);
				tcs.setResult(newResult);
			}
			catch (e_) {
				tcs.setException(e_);
			}
		};
		var doneContinuation = function (res) { continuation(); };
		var failContinuation = function (exc) { continuation(); };
		this.promise().done(doneContinuation).fail(failContinuation);
		return tcs.task();
	}
	/*<EndMethod Name="System.ThreadingTasks.Task System.ThreadingTasks.Task::ContinueWith`1(System.Func)" />*/
	,
	$type: new $.ig.Type('Task', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.ThreadingTasks.Task" />*/

/*<BeginType Name="System.ThreadingTasks.Task`1" />*/

$.ig.util.defType('Task$1', 'Task', {
	$tResult: null,
	init: function ($tResult, promise, state) {
		var $self = this;
		this.$tResult = $tResult;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$tResult);
		}
		this.__resultReady = false;
		$.ig.Task.prototype.init1.call(this, 1, promise, state);
		var doneContinuation = function (res) {
			var result = $.ig.util.castObjTo$t($self.$tResult, res);
			$self.__result = result;
			$self.__resultReady = true;
		};
		var failContinuation = function (exc) {
			$self.__resultReady = true;
		};
		this.promise().done(doneContinuation).fail(failContinuation);
	},
	__resultReady: false,
	__result: null,
	/*<BeginProperty Name="System.ThreadingTasks.Task.TResult System.ThreadingTasks.Task`1::Result()" />*/
	result: function () {
		if (!this.__resultReady) {
			throw 'Result is not ready yet';
		}
		if (this.exception() != null) {
			throw this.exception();
		}
		return this.__result;
	}
	/*<EndProperty Name="System.ThreadingTasks.Task.TResult System.ThreadingTasks.Task`1::Result()" />*/
	,
	/*<BeginMethod Name="System.ThreadingTasks.Task System.ThreadingTasks.Task`1::ContinueWith(System.Action)" />*/
	continueWith1: function (continuationAction) {
		return $.ig.Task.prototype.continueWith.call(this, function (t) { continuationAction(t); });
	}
	/*<EndMethod Name="System.ThreadingTasks.Task System.ThreadingTasks.Task`1::ContinueWith(System.Action)" />*/
	,
	/*<BeginMethod Name="System.ThreadingTasks.Task System.ThreadingTasks.Task`1::ContinueWith`1(System.Func)" />*/
	continueWith$11: function ($tNewResult, continuationFunction) {
		var wrapperFunction = function (t) { return $.ig.util.getBoxIfEnum($tNewResult, continuationFunction(t)); };
		return this.continueWithBase$1($.ig.Object.prototype.$type, wrapperFunction).continueWithBase$1($tNewResult, function (t) { return $.ig.util.castObjTo$t($tNewResult, (t).result()); });
	}
	/*<EndMethod Name="System.ThreadingTasks.Task System.ThreadingTasks.Task`1::ContinueWith`1(System.Func)" />*/
	,
	/*<BeginMethod Name="System.ThreadingTasks.Task System.ThreadingTasks.Task`1::ContinueWithBase`1(System.Func)" />*/
	continueWithBase$1: function ($tNewResult, continuationFunction) {
		return $.ig.Task.prototype.continueWith$1.call(this, $tNewResult, continuationFunction);
	}
	/*<EndMethod Name="System.ThreadingTasks.Task System.ThreadingTasks.Task`1::ContinueWithBase`1(System.Func)" />*/
	,
	$type: new $.ig.Type('Task$1', $.ig.Task.prototype.$type)
}, true);

/*<EndType Name="System.ThreadingTasks.Task`1" />*/

/*<BeginType Name="System.ThreadingTasks.TaskCompletionSource`1" />*/

$.ig.util.defType('TaskCompletionSource$1', 'Object', {
	$tResult: null,
	_deferred: null,
	/*<BeginProperty Name="System.JQuery.JQueryDeferred System.ThreadingTasks.TaskCompletionSource`1::Deferred()" />*/
	deferred: function (value) {
		if (arguments.length === 1) {
			this._deferred = value;
			return value;
		} else {
			return this._deferred;
		}
	}
	/*<EndProperty Name="System.JQuery.JQueryDeferred System.ThreadingTasks.TaskCompletionSource`1::Deferred()" />*/
	,
	init: function ($tResult, initNumber) {
		this.$tResult = $tResult;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$tResult);
		}
		if (initNumber > 0) {
			switch (initNumber) {
				case 1:
					this.init1.apply(this, arguments);
					break;
			}
			return;
		}
		$.ig.TaskCompletionSource$1.prototype.init1.call(this, this.$tResult, 1, null);
	},
	init1: function ($tResult, initNumber, state) {
		this.$tResult = $tResult;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$tResult);
		}
		$.ig.Object.prototype.init.call(this);
		this.deferred($.ig.util.deferred());
		this.task(new $.ig.Task$1(this.$tResult, this.deferred().promise(), state));
	},
	/*<BeginMethod Name="System.Void System.ThreadingTasks.TaskCompletionSource`1::SetCanceled()" />*/
	setCanceled: function () {
		this.deferred().reject(null);
	}
	/*<EndMethod Name="System.Void System.ThreadingTasks.TaskCompletionSource`1::SetCanceled()" />*/
	,
	/*<BeginMethod Name="System.Void System.ThreadingTasks.TaskCompletionSource`1::SetException(System.Exception)" />*/
	setException: function (exception) {
		this.deferred().reject(exception);
	}
	/*<EndMethod Name="System.Void System.ThreadingTasks.TaskCompletionSource`1::SetException(System.Exception)" />*/
	,
	/*<BeginMethod Name="System.Void System.ThreadingTasks.TaskCompletionSource`1::SetResult(System.ThreadingTasks.TaskCompletionSource.TResult)" />*/
	setResult: function (result) {
		this.deferred().resolve($.ig.util.getBoxIfEnum(this.$tResult, result));
	}
	/*<EndMethod Name="System.Void System.ThreadingTasks.TaskCompletionSource`1::SetResult(System.ThreadingTasks.TaskCompletionSource.TResult)" />*/
	,
	_task: null,
	/*<BeginProperty Name="System.ThreadingTasks.Task System.ThreadingTasks.TaskCompletionSource`1::Task()" />*/
	task: function (value) {
		if (arguments.length === 1) {
			this._task = value;
			return value;
		} else {
			return this._task;
		}
	}
	/*<EndProperty Name="System.ThreadingTasks.Task System.ThreadingTasks.TaskCompletionSource`1::Task()" />*/
	,
	$type: new $.ig.Type('TaskCompletionSource$1', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.ThreadingTasks.TaskCompletionSource`1" />*/

/*<BeginType Name="System.ThreadingTasks.TaskFactory" />*/

$.ig.util.defType('TaskFactory', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.ThreadingTasks.Task System.ThreadingTasks.TaskFactory::ContinueWhenAll(, System.Action)" />*/
	continueWhenAll: function (tasks, continuationAction) {
		return new $.ig.Task(0, this.whenAll(this.getPromises(tasks)).always(function () { continuationAction(tasks); }));
	}
	/*<EndMethod Name="System.ThreadingTasks.Task System.ThreadingTasks.TaskFactory::ContinueWhenAll(, System.Action)" />*/
	,
	/*<BeginMethod Name="System.ThreadingTasks.Task System.ThreadingTasks.TaskFactory::ContinueWhenAll`1(, System.Func)" />*/
	continueWhenAll$1: function ($tResult, tasks, continuationFunction) {
		var tcs = new $.ig.TaskCompletionSource$1($tResult, 0);
		this.whenAll(this.getPromises(tasks)).always(function () {
			try {
				var result = continuationFunction(tasks);
				tcs.setResult(result);
			}
			catch (e_) {
				tcs.setException(e_);
			}
		});
		return tcs.task();
	}
	/*<EndMethod Name="System.ThreadingTasks.Task System.ThreadingTasks.TaskFactory::ContinueWhenAll`1(, System.Func)" />*/
	,
	/*<BeginMethod Name="System.ThreadingTasks.Task System.ThreadingTasks.TaskFactory::ContinueWhenAll`2(, System.Func)" />*/
	continueWhenAll$2: function ($tAntecedentResult, $tResult, tasks, continuationFunction) {
		var wrapperFunction = function (t) { return $.ig.util.getBoxIfEnum($tResult, continuationFunction(t)); };
		return this.continueWhenAll$1($.ig.Object.prototype.$type, tasks, wrapperFunction).continueWith$11($tResult, function (t) { return $.ig.util.castObjTo$t($tResult, t.result()); });
	}
	/*<EndMethod Name="System.ThreadingTasks.Task System.ThreadingTasks.TaskFactory::ContinueWhenAll`2(, System.Func)" />*/
	,
	/*<BeginMethod Name=" System.ThreadingTasks.TaskFactory::GetPromises()" />*/
	getPromises: function (tasks) {
		var promises = new Array(tasks.length);
		for (var i = 0; i < tasks.length; i++) {
			promises[i] = tasks[i].promise();
		}
		return promises;
	}
	/*<EndMethod Name=" System.ThreadingTasks.TaskFactory::GetPromises()" />*/
	,
	/*<BeginMethod Name="System.JQuery.JQueryPromise System.ThreadingTasks.TaskFactory::WhenAll()" />*/
	whenAll: function (promises) {
		var promises_ = promises;
		var whenPromise = (function (p) {
    //can't use $.when as it rejects the master Deferred as soon as one of the Deferreds is rejected
    //and we need to wait for all to complete
    function whenAll() {
	    var whenDeffered = $.ig.util.deferred();

	    if (arguments.length === 0) {
		    whenDeffered.resolve();
		    return whenDeffered;
	    }
   
	    var count = arguments.length;
	    var resolve = true;
	
	    for (var i = 0; i < arguments.length; i++) {
		    arguments[i].done(
			    function () {
				    resolve = resolve && true;
			    }).fail(
			    function () {
				    resolve = resolve && false;
			    }
		    ).always(function () {
			    count--;
			    if (count <= 0) {
				    if (resolve) {
					    whenDeffered.resolve();
				    } else {
					    whenDeffered.reject();
				    }
			    }
		    });
	    }
	
	    return whenDeffered;
    }
	return whenAll.apply($, p);
})(promises_);;
		return whenPromise;
	}
	/*<EndMethod Name="System.JQuery.JQueryPromise System.ThreadingTasks.TaskFactory::WhenAll()" />*/
	,
	$type: new $.ig.Type('TaskFactory', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.ThreadingTasks.TaskFactory" />*/


/*<BeginFooter/>*/
}));// REMOVE_FROM_COMBINED_FILES
/*<EndFooter/>*/

