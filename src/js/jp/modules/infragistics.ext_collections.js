/*!@license
* Infragistics.Web.ClientUI infragistics.ext_collections.js 17.1.20171.1012
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
$.ig.globalDefs.$$4 = $$t;
$$0 = $.ig.globalDefs.$$0;
$$1 = $.ig.globalDefs.$$1;
$$6 = $.ig.globalDefs.$$6;
$.ig.$currDefinitions = $$t;
$.ig.util.bulkDefine([
"EqualityComparer$1:l",
"DefaultEqualityComparer$1:m",
"IArrayList:q",
"IArray:r",
"IDictionary$2:s",
"INotifyCollectionChanged:ab",
"NotifyCollectionChangedEventHandler:ac"]);
/*<BeginType Name="System.Collections.Specialized.NotifyCollectionChangedAction" />*/

$.ig.util.defEnum('NotifyCollectionChangedAction', false, false, {
	Add: 0,
	Remove: 1,
	Replace: 2,
	Reset: 4
});

/*<EndType Name="System.Collections.Specialized.NotifyCollectionChangedAction" />*/

/*<BeginType Name="System.Buffer" />*/

$.ig.util.defType('Buffer', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Int32 System.Buffer::ByteLength(System.Array)" />*/
	byteLength: function (array) {
		try {
		}
		catch (e) {
		}
		if (array == null) {
			throw new $.ig.ArgumentNullException(0, "array");
		}
		var length = array.length;
		if (length < 0) {
			throw new $.ig.ArgumentException(1, "Object must be an array of primitives.");
		}
		return length;
	}
	/*<EndMethod Name="System.Int32 System.Buffer::ByteLength(System.Array)" />*/
	,
	/*<BeginMethod Name="System.Byte System.Buffer::GetByte(System.Array, System.Int32)" />*/
	getByte: function (array, index) {
		if (index < 0 || index >= $.ig.Buffer.prototype.byteLength(array)) {
			throw new $.ig.ArgumentOutOfRangeException(2, "index", "Value must be non-negative and less than the size of the collection.");
		}
		return $.ig.util.getValue(array[index]);
	}
	/*<EndMethod Name="System.Byte System.Buffer::GetByte(System.Array, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void System.Buffer::SetByte(System.Array, System.Int32, System.Byte)" />*/
	setByte: function (array, index, value) {
		if (index < 0 || index >= $.ig.Buffer.prototype.byteLength(array)) {
			throw new $.ig.ArgumentOutOfRangeException(2, "index", "Value must be non-negative and less than the size of the collection.");
		}
		array[index] = value;
	}
	/*<EndMethod Name="System.Void System.Buffer::SetByte(System.Array, System.Int32, System.Byte)" />*/
	,
	/*<BeginMethod Name="System.Void System.Buffer::BlockCopy(System.Array, System.Int32, System.Array, System.Int32, System.Int32)" />*/
	blockCopy: function (src, srcOffset, dst, dstOffset, count) {
		if (src == null) {
			throw new $.ig.ArgumentNullException(0, "src");
		}
		if (dst == null) {
			throw new $.ig.ArgumentNullException(0, "dst");
		}
		if (srcOffset < 0) {
			throw new $.ig.ArgumentOutOfRangeException(2, "srcOffset", "Non-negative number required.");
		}
		if (dstOffset < 0) {
			throw new $.ig.ArgumentOutOfRangeException(2, "dstOffset", "Non-negative number required.");
		}
		if (count < 0) {
			throw new $.ig.ArgumentOutOfRangeException(2, "count", "Non-negative number required.");
		}
		if ((srcOffset > $.ig.Buffer.prototype.byteLength(src) - count) || (dstOffset > $.ig.Buffer.prototype.byteLength(dst) - count)) {
			throw new $.ig.ArgumentException(1, "Offset and length were out of bounds for the array or count is greater than " + "the number of elements from index to the end of the source collection.");
		}
		for (var i = 0; i < count; i++) {
			dst[dstOffset++] = src[srcOffset++];
		}
	}
	/*<EndMethod Name="System.Void System.Buffer::BlockCopy(System.Array, System.Int32, System.Array, System.Int32, System.Int32)" />*/
	,
	$type: new $.ig.Type('Buffer', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.Buffer" />*/

/*<BeginType Name="System.Collections.AbstractEnumerable" />*/

$.ig.util.defType('AbstractEnumerable', 'Object', {
	__inner: null,
	init: function (inner) {
		$.ig.Object.prototype.init.call(this);
		this.__inner = inner;
	},
	/*<BeginMethod Name="System.Collections.IEnumerator System.Collections.AbstractEnumerable::GetEnumerator()" />*/
	getEnumerator: function () {
		return new $.ig.AbstractEnumerator(this.__inner().getEnumerator());
	}
	/*<EndMethod Name="System.Collections.IEnumerator System.Collections.AbstractEnumerable::GetEnumerator()" />*/
	,
	$type: new $.ig.Type('AbstractEnumerable', $.ig.Object.prototype.$type, [$.ig.IEnumerable.prototype.$type])
}, true);

/*<EndType Name="System.Collections.AbstractEnumerable" />*/

/*<BeginType Name="System.Collections.AbstractEnumerator" />*/

$.ig.util.defType('AbstractEnumerator', 'Object', {
	__inner: null,
	init: function (inner) {
		$.ig.Object.prototype.init.call(this);
		this.__inner = inner;
	},
	/*<BeginProperty Name="System.Object System.Collections.AbstractEnumerator::Current()" />*/
	current: function () {
		return this.__inner.current();
	}
	/*<EndProperty Name="System.Object System.Collections.AbstractEnumerator::Current()" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Collections.AbstractEnumerator::MoveNext()" />*/
	moveNext: function () {
		return this.__inner.moveNext();
	}
	/*<EndMethod Name="System.Boolean System.Collections.AbstractEnumerator::MoveNext()" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.AbstractEnumerator::Reset()" />*/
	reset: function () {
		this.__inner.reset();
	}
	/*<EndMethod Name="System.Void System.Collections.AbstractEnumerator::Reset()" />*/
	,
	$type: new $.ig.Type('AbstractEnumerator', $.ig.Object.prototype.$type, [$.ig.IEnumerator.prototype.$type])
}, true);

/*<EndType Name="System.Collections.AbstractEnumerator" />*/

/*<BeginType Name="System.Collections.Specialized.INotifyCollectionChanged" />*/

$.ig.util.defType('INotifyCollectionChanged', 'Object', {
	$type: new $.ig.Type('INotifyCollectionChanged', null)
}, true);

/*<EndType Name="System.Collections.Specialized.INotifyCollectionChanged" />*/

/*<BeginType Name="System.Collections.Specialized.NotifyCollectionChangedEventArgs" />*/

$.ig.util.defType('NotifyCollectionChangedEventArgs', 'EventArgs', {
	init: function (initNumber, action) {
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
		$.ig.EventArgs.prototype.init.call(this);
		this.__action = action;
		this.__oldItems = new $.ig.List$1($.ig.Object.prototype.$type, 0);
		this.__newItems = new $.ig.List$1($.ig.Object.prototype.$type, 0);
	},
	init1: function (initNumber, action, changedItem, index) {
		$.ig.EventArgs.prototype.init.call(this);
		this.__action = action;
		this.__oldItems = new $.ig.List$1($.ig.Object.prototype.$type, 0);
		if (this.__action == $.ig.NotifyCollectionChangedAction.prototype.remove || this.__action == $.ig.NotifyCollectionChangedAction.prototype.replace) {
			this.__oldItems.add(changedItem);
			this.__oldStartingIndex = index;
		}
		if (this.__action != $.ig.NotifyCollectionChangedAction.prototype.remove) {
			this.__newItems = (function () {
				var $ret = new $.ig.List$1($.ig.Object.prototype.$type, 0);
				$ret.add1(changedItem);
				return $ret;
			}());
		} else {
			this.__newItems = new $.ig.List$1($.ig.Object.prototype.$type, 0);
		}
		this.__newStartingIndex = index;
	},
	init2: function (initNumber, action, newItem, oldItem, index) {
		$.ig.EventArgs.prototype.init.call(this);
		this.__action = action;
		this.__newStartingIndex = index;
		this.__oldStartingIndex = index;
		this.__newItems = (function () {
			var $ret = new $.ig.List$1($.ig.Object.prototype.$type, 0);
			$ret.add1(newItem);
			return $ret;
		}());
		this.__oldItems = (function () {
			var $ret = new $.ig.List$1($.ig.Object.prototype.$type, 0);
			$ret.add1(oldItem);
			return $ret;
		}());
	},
	__action: 0,
	/*<BeginProperty Name="System.Collections.Specialized.NotifyCollectionChangedAction System.Collections.Specialized.NotifyCollectionChangedEventArgs::Action()" />*/
	action: function () {
		return this.__action;
	}
	/*<EndProperty Name="System.Collections.Specialized.NotifyCollectionChangedAction System.Collections.Specialized.NotifyCollectionChangedEventArgs::Action()" />*/
	,
	__newItems: null,
	/*<BeginProperty Name="System.Collections.IList System.Collections.Specialized.NotifyCollectionChangedEventArgs::NewItems()" />*/
	newItems: function () {
		return this.__newItems;
	}
	/*<EndProperty Name="System.Collections.IList System.Collections.Specialized.NotifyCollectionChangedEventArgs::NewItems()" />*/
	,
	__newStartingIndex: 0,
	/*<BeginProperty Name="System.Int32 System.Collections.Specialized.NotifyCollectionChangedEventArgs::NewStartingIndex()" />*/
	newStartingIndex: function () {
		return this.__newStartingIndex;
	}
	/*<EndProperty Name="System.Int32 System.Collections.Specialized.NotifyCollectionChangedEventArgs::NewStartingIndex()" />*/
	,
	__oldItems: null,
	/*<BeginProperty Name="System.Collections.IList System.Collections.Specialized.NotifyCollectionChangedEventArgs::OldItems()" />*/
	oldItems: function () {
		return this.__oldItems;
	}
	/*<EndProperty Name="System.Collections.IList System.Collections.Specialized.NotifyCollectionChangedEventArgs::OldItems()" />*/
	,
	__oldStartingIndex: 0,
	/*<BeginProperty Name="System.Int32 System.Collections.Specialized.NotifyCollectionChangedEventArgs::OldStartingIndex()" />*/
	oldStartingIndex: function () {
		return this.__oldStartingIndex;
	}
	/*<EndProperty Name="System.Int32 System.Collections.Specialized.NotifyCollectionChangedEventArgs::OldStartingIndex()" />*/
	,
	$type: new $.ig.Type('NotifyCollectionChangedEventArgs', $.ig.EventArgs.prototype.$type)
}, true);

/*<EndType Name="System.Collections.Specialized.NotifyCollectionChangedEventArgs" />*/

/*<BeginType Name="System.Collections.Specialized.NameValueCollection" />*/

$.ig.util.defType('NameValueCollection', 'Object', {
	__dict: null,
	init: function () {
		$.ig.Object.prototype.init.call(this);
		this.__dict = new $.ig.Dictionary$2(String, String, 0);
	},
	/*<BeginProperty Name="System.String System.Collections.Specialized.NameValueCollection::Item(System.String)" />*/
	item: function (name, value) {
		if (arguments.length === 2) {
			if (this.__dict.containsKey(name)) {
				this.__dict.item(name, value);
			} else {
				this.__dict.add(name, value);
			}
			return value;
		} else {
			if (this.__dict.containsKey(name)) {
				return this.__dict.item(name);
			} else {
				return null;
			}
		}
	}
	/*<EndProperty Name="System.String System.Collections.Specialized.NameValueCollection::Item(System.String)" />*/
	,
	$type: new $.ig.Type('NameValueCollection', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.Collections.Specialized.NameValueCollection" />*/

/*<BeginType Name="System.Collections.Generic.KeyValuePair`2" />*/

$.ig.util.defType('KeyValuePair$2', 'ValueType', {
	$tKey: null,
	$tValue: null,
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
		$.ig.ValueType.prototype.init.call(this);
	},
	__key: null,
	__value: null,
	init1: function ($tKey, $tValue, initNumber, key, value) {
		this.$tKey = $tKey;
		this.$tValue = $tValue;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$tKey, this.$tValue);
		}
		$.ig.ValueType.prototype.init.call(this);
		this.__key = key;
		this.__value = value;
	},
	/*<BeginProperty Name="System.Collections.Generic.KeyValuePair.TKey System.Collections.Generic.KeyValuePair`2::Key()" />*/
	key: function () {
		return this.__key;
	}
	/*<EndProperty Name="System.Collections.Generic.KeyValuePair.TKey System.Collections.Generic.KeyValuePair`2::Key()" />*/
	,
	/*<BeginProperty Name="System.Collections.Generic.KeyValuePair.TValue System.Collections.Generic.KeyValuePair`2::Value()" />*/
	value: function () {
		return this.__value;
	}
	/*<EndProperty Name="System.Collections.Generic.KeyValuePair.TValue System.Collections.Generic.KeyValuePair`2::Value()" />*/
	,
	$type: new $.ig.Type('KeyValuePair$2', $.ig.ValueType.prototype.$type)
}, true);

/*<EndType Name="System.Collections.Generic.KeyValuePair`2" />*/

/*<BeginType Name="System.Collections.Generic.IDictionary`2" />*/

$.ig.util.defType('IDictionary$2', 'Object', {
	$type: new $.ig.Type('IDictionary$2', null, [$.ig.ICollection$1.prototype.$type.specialize($.ig.KeyValuePair$2.prototype.$type.specialize(0, 1)), $.ig.IEnumerable$1.prototype.$type.specialize($.ig.KeyValuePair$2.prototype.$type.specialize(0, 1)), $.ig.IEnumerable.prototype.$type])
}, true);

/*<EndType Name="System.Collections.Generic.IDictionary`2" />*/

/*<BeginType Name="System.Collections.Generic.Dictionary`2" />*/

$.ig.util.defType('Dictionary$2', 'Object', {
	$tKey: null,
	$tValue: null,
	__comparer: null,
	__count: 0,
	__useStrings: false,
	__needsEnsure: false,
	__assumeUniqueKeys: false,
	__keysUnique: null,
	__values: null,
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
		$.ig.Dictionary$2.prototype.init4.call(this, this.$tKey, this.$tValue, 4, 0, null);
	},
	init1: function ($tKey, $tValue, initNumber, capacity) {
		this.$tKey = $tKey;
		this.$tValue = $tValue;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$tKey, this.$tValue);
		}
		$.ig.Dictionary$2.prototype.init4.call(this, this.$tKey, this.$tValue, 4, capacity, null);
	},
	init2: function ($tKey, $tValue, initNumber, comparer) {
		this.$tKey = $tKey;
		this.$tValue = $tValue;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$tKey, this.$tValue);
		}
		$.ig.Dictionary$2.prototype.init4.call(this, this.$tKey, this.$tValue, 4, 0, comparer);
	},
	init3: function ($tKey, $tValue, initNumber, dictionary) {
		this.$tKey = $tKey;
		this.$tValue = $tValue;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$tKey, this.$tValue);
		}
		$.ig.Dictionary$2.prototype.init1.call(this, this.$tKey, this.$tValue, 1, dictionary.count());
		var en = dictionary.getEnumerator();
		while (en.moveNext()) {
			var pair = en.current();
			this.item(pair.key(), pair.value());
		}
	},
	init4: function ($tKey, $tValue, initNumber, capacity, comparer) {
		this.$tKey = $tKey;
		this.$tValue = $tValue;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$tKey, this.$tValue);
		}
		$.ig.Object.prototype.init.call(this);
		this.__keysUnique = {};
		this.__values = {};
		this.__comparer = comparer || $.ig.EqualityComparer$1.prototype.defaultEqualityComparerValue(this.$tKey);
		this.__useStrings = comparer == null && ($tKey === $.ig.String.prototype.$type || $tKey === String);
		this.__needsEnsure = $tKey === $.ig.Object.prototype.$type || ($tKey.InstanceConstructor && !$tKey.InstanceConstructor.prototype.getHashCode);
		this.__assumeUniqueKeys = comparer == null && (this.__useStrings || this.__needsEnsure || $tKey.InstanceConstructor && $tKey.InstanceConstructor.prototype.getHashCode == $.ig.Object.prototype.getHashCode);
	},
	/*<BeginProperty Name="System.Int32 System.Collections.Generic.Dictionary`2::Count()" />*/
	count: function () {
		return this.__count;
	}
	/*<EndProperty Name="System.Int32 System.Collections.Generic.Dictionary`2::Count()" />*/
	,
	/*<BeginProperty Name="System.Collections.Generic.Dictionary.TValue System.Collections.Generic.Dictionary`2::Item(System.Collections.Generic.Dictionary.TKey)" />*/
	item: function (key_, value) {
		if (arguments.length === 2) {
			this.addHelper(key_, value, false);
			return value;
		} else {
			var $self = this;
			var result;
			if ((function () { var $ret = $self.tryGetValue(key_, result); result = $ret.p1; return $ret.ret; }())) {
				return result;
			}
			return $.ig.util.getDefaultValue(this.$tValue);
		}
	}
	/*<EndProperty Name="System.Collections.Generic.Dictionary.TValue System.Collections.Generic.Dictionary`2::Item(System.Collections.Generic.Dictionary.TKey)" />*/
	,
	/*<BeginProperty Name="System.Int32 System.Collections.Generic.Dictionary`2::Length()" />*/
	length: function () {
		return this.__count;
	}
	/*<EndProperty Name="System.Int32 System.Collections.Generic.Dictionary`2::Length()" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Collections.Generic.Dictionary`2::ContainsKey(System.Collections.Generic.Dictionary.TKey)" />*/
	containsKey: function (key) {
		if (this.__assumeUniqueKeys) {
			var hash = this.hashUnique(key);
			return this.__keysUnique.hasOwnProperty(hash);
		} else {
			var hashCode = this.hashCode(key);
			var current = this.__values[hashCode];
			if (current) {
				if (current.$isHashSetBucket) {
					var $t = current;
					for (var i = 0; i < $t.length; i++) {
						var currentItem = $t[i];
						if (this.__comparer.equalsC(currentItem.key, key)) {
							return true;
						}
					}
				} else {
					return this.__comparer.equalsC(current.key, key);
				}
			}
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean System.Collections.Generic.Dictionary`2::ContainsKey(System.Collections.Generic.Dictionary.TKey)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Collections.Generic.Dictionary`2::Remove(System.Collections.Generic.Dictionary.TKey)" />*/
	remove: function (key) {
		if (this.__assumeUniqueKeys) {
			var hash = this.hashUnique(key);
			if (!this.__keysUnique.hasOwnProperty(hash)) {
				return false;
			}
			delete this.__keysUnique[hash];
			delete this.__values[hash];
			this.__count--;
			return true;
		}
		var hashCode = this.hashCode(key);
		var current = this.__values[hashCode];
		if (current) {
			if (current.$isHashSetBucket) {
				var $t = current;
				for (var i = 0; i < $t.length; i++) {
					var currentItem = $t[i];
					if (this.__comparer.equalsC(currentItem.key, key)) {
						current.removeItem(currentItem);
						if (current.length == 1) {
							this.__values[hashCode] = current[0];
						}
						this.__count--;
						return true;
					}
				}
			} else {
				if (this.__comparer.equalsC(current.key, key)) {
					delete this.__values[hashCode];
					this.__count--;
					return true;
				}
			}
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean System.Collections.Generic.Dictionary`2::Remove(System.Collections.Generic.Dictionary.TKey)" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.Generic.Dictionary`2::Clear()" />*/
	clear: function () {
		this.__count = 0;
		this.__keysUnique = {};
		this.__values = {};
	}
	/*<EndMethod Name="System.Void System.Collections.Generic.Dictionary`2::Clear()" />*/
	,
	/*<BeginMethod Name="System.String System.Collections.Generic.Dictionary`2::HashUnique(System.Collections.Generic.Dictionary.TKey)" />*/
	hashUnique: function (key) {
		if (this.__needsEnsure) {
			$.ig.util.ensureUniqueId(key);
		}
		if (this.__useStrings) {
			return $.ig.util.toString$1(this.$tKey, key);
		} else {
			return key.getHashCode().toString();
		}
	}
	/*<EndMethod Name="System.String System.Collections.Generic.Dictionary`2::HashUnique(System.Collections.Generic.Dictionary.TKey)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Collections.Generic.Dictionary`2::HashCode(System.Collections.Generic.Dictionary.TKey)" />*/
	hashCode: function (key) {
		if (this.__needsEnsure) {
			$.ig.util.ensureUniqueId(key);
		} else {
			if (!key.getHashCode) {
				this.__needsEnsure = true;
				$.ig.util.ensureUniqueId(key);
			}
		}
		return this.__comparer.getHashCodeC(key);
	}
	/*<EndMethod Name="System.Int32 System.Collections.Generic.Dictionary`2::HashCode(System.Collections.Generic.Dictionary.TKey)" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.Generic.Dictionary`2::Add(System.Collections.Generic.Dictionary.TKey, System.Collections.Generic.Dictionary.TValue)" />*/
	add: function (key, value) {
		this.addHelper(key, value, true);
	}
	/*<EndMethod Name="System.Void System.Collections.Generic.Dictionary`2::Add(System.Collections.Generic.Dictionary.TKey, System.Collections.Generic.Dictionary.TValue)" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.Generic.Dictionary`2::AddHelper(System.Collections.Generic.Dictionary.TKey, System.Collections.Generic.Dictionary.TValue, System.Boolean)" />*/
	addHelper: function (key, value, add) {
		if (this.__assumeUniqueKeys) {
			var hash = this.hashUnique(key);
			if (!this.__keysUnique.hasOwnProperty(hash)) {
				this.__count++;
			} else if (add) {
				throw new $.ig.ArgumentException(1, "Duplicate key added to the dictionary");
			}
			this.__keysUnique[hash] = key;
			this.__values[hash] = value;
		} else {
			var hashCode = this.hashCode(key);
			var current = this.__values[hashCode];
			if (current) {
				if (current.$isHashSetBucket) {
					var $t = current;
					for (var i = 0; i < $t.length; i++) {
						var currentItem = $t[i];
						if (this.__comparer.equalsC(currentItem.key, key)) {
							if (add) {
								throw new $.ig.ArgumentException(1, "Duplicate key added to the dictionary");
							}
							currentItem.value = value;
							return;
						}
					}
					current.push({key: key, value: value});
					this.__count++;
				} else {
					if (this.__comparer.equalsC(current.key, key)) {
						if (add) {
							throw new $.ig.ArgumentException(1, "Duplicate key added to the dictionary");
						}
						current.value = value;
					} else {
						var bucket = [current, {key: key, value: value}];
						bucket.$isHashSetBucket = true;;
						this.__values[hashCode] = bucket;
						this.__count++;
					}
				}
			} else {
				this.__values[hashCode] = {key: key, value: value};
				this.__count++;
			}
		}
	}
	/*<EndMethod Name="System.Void System.Collections.Generic.Dictionary`2::AddHelper(System.Collections.Generic.Dictionary.TKey, System.Collections.Generic.Dictionary.TValue, System.Boolean)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Collections.Generic.Dictionary`2::TryGetValue(System.Collections.Generic.Dictionary.TKey, System.Collections.Generic.Dictionary.TValue)" />*/
	tryGetValue: function (key, value) {
		if (this.__assumeUniqueKeys) {
			var hash = this.hashUnique(key);
			if (this.__keysUnique.hasOwnProperty(hash)) {
				value = this.__values[hash];
				return {
					ret: true,
					p1: value
				};
			}
		} else {
			var hashCode = this.hashCode(key);
			var current = this.__values[hashCode];
			if (current) {
				if (current.$isHashSetBucket) {
					var $t = current;
					for (var i = 0; i < $t.length; i++) {
						var currentItem = $t[i];
						if (this.__comparer.equalsC(currentItem.key, key)) {
							value = currentItem.value;
							return {
								ret: true,
								p1: value
							};
						}
					}
				} else {
					if (this.__comparer.equalsC(current.key, key)) {
						value = current.value;
						return {
							ret: true,
							p1: value
						};
					}
				}
			}
		}
		value = $.ig.util.getDefaultValue(this.$tValue);
		return {
			ret: false,
			p1: value
		};
	}
	/*<EndMethod Name="System.Boolean System.Collections.Generic.Dictionary`2::TryGetValue(System.Collections.Generic.Dictionary.TKey, System.Collections.Generic.Dictionary.TValue)" />*/
	,
	/*<BeginProperty Name="System.Boolean System.Collections.Generic.Dictionary`2::IsReadOnly()" />*/
	isReadOnly: function () {
		return false;
	}
	/*<EndProperty Name="System.Boolean System.Collections.Generic.Dictionary`2::IsReadOnly()" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.Generic.Dictionary`2::Add(System.Collections.Generic.KeyValuePair)" />*/
	add1: function (item) {
		this.add(item.key(), item.value());
	}
	/*<EndMethod Name="System.Void System.Collections.Generic.Dictionary`2::Add(System.Collections.Generic.KeyValuePair)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Collections.Generic.Dictionary`2::Contains(System.Collections.Generic.KeyValuePair)" />*/
	contains: function (item) {
		var $self = this;
		var test;
		return (function () { var $ret = $self.tryGetValue(item.key(), test); test = $ret.p1; return $ret.ret; }()) && $.ig.Object.prototype.equalsStatic($.ig.util.getBoxIfEnum(this.$tValue, test), $.ig.util.getBoxIfEnum(this.$tValue, item.value()));
	}
	/*<EndMethod Name="System.Boolean System.Collections.Generic.Dictionary`2::Contains(System.Collections.Generic.KeyValuePair)" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.Generic.Dictionary`2::CopyTo(, System.Int32)" />*/
	copyTo: function (array, arrayIndex) {
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndMethod Name="System.Void System.Collections.Generic.Dictionary`2::CopyTo(, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Collections.Generic.Dictionary`2::Remove(System.Collections.Generic.KeyValuePair)" />*/
	remove1: function (item) {
		this.remove(item.key());
		return true;
	}
	/*<EndMethod Name="System.Boolean System.Collections.Generic.Dictionary`2::Remove(System.Collections.Generic.KeyValuePair)" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerator System.Collections.Generic.Dictionary`2::GetEnumerator()" />*/
	getEnumerator: function () {
		return this.toEnumerable().getEnumerator();
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerator System.Collections.Generic.Dictionary`2::GetEnumerator()" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerable System.Collections.Generic.Dictionary`2::ToEnumerable()" />*/
	toEnumerable: function () {
		var d__ = new $.ig.Dictionary___ToEnumerable__IteratorClass$2(this.$tKey, this.$tValue, -2);
		d__.__4__this = this;
		return d__;
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerable System.Collections.Generic.Dictionary`2::ToEnumerable()" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerable System.Collections.Generic.Dictionary`2::ToEnumerableKeys()" />*/
	toEnumerableKeys: function () {
		var d__ = new $.ig.Dictionary___ToEnumerableKeys__IteratorClass$2(this.$tKey, this.$tValue, -2);
		d__.__4__this = this;
		return d__;
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerable System.Collections.Generic.Dictionary`2::ToEnumerableKeys()" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerable System.Collections.Generic.Dictionary`2::ToEnumerableValues()" />*/
	toEnumerableValues: function () {
		var d__ = new $.ig.Dictionary___ToEnumerableValues__IteratorClass$2(this.$tKey, this.$tValue, -2);
		d__.__4__this = this;
		return d__;
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerable System.Collections.Generic.Dictionary`2::ToEnumerableValues()" />*/
	,
	/*<BeginMethod Name="System.Collections.IEnumerator System.Collections.Generic.Dictionary`2::System.Collections.IEnumerable.GetEnumerator()" />*/
	getEnumerator: function () {
		return this.toEnumerable().getEnumerator();
	}
	/*<EndMethod Name="System.Collections.IEnumerator System.Collections.Generic.Dictionary`2::System.Collections.IEnumerable.GetEnumerator()" />*/
	,
	/*<BeginProperty Name="System.Collections.Generic.ICollection System.Collections.Generic.Dictionary`2::Keys()" />*/
	keys: function () {
		return new $.ig.Dictionary_EnumerableCollection$3(this.$tKey, this.$tValue, this.$tKey, this, this.toEnumerableKeys(), this.__comparer || $.ig.EqualityComparer$1.prototype.defaultEqualityComparerValue(this.$tKey));
	}
	/*<EndProperty Name="System.Collections.Generic.ICollection System.Collections.Generic.Dictionary`2::Keys()" />*/
	,
	/*<BeginProperty Name="System.Collections.Generic.ICollection System.Collections.Generic.Dictionary`2::Values()" />*/
	values: function () {
		return new $.ig.Dictionary_EnumerableCollection$3(this.$tKey, this.$tValue, this.$tValue, this, this.toEnumerableValues(), $.ig.EqualityComparer$1.prototype.defaultEqualityComparerValue(this.$tValue));
	}
	/*<EndProperty Name="System.Collections.Generic.ICollection System.Collections.Generic.Dictionary`2::Values()" />*/
	,
	$type: new $.ig.Type('Dictionary$2', $.ig.Object.prototype.$type, [$.ig.IDictionary$2.prototype.$type.specialize(0, 1), $.ig.IDictionary.prototype.$type])
}, true);

/*<EndType Name="System.Collections.Generic.Dictionary`2" />*/

/*<BeginType Name="System.Collections.Generic.Dictionary_EnumerableCollection`3" />*/

$.ig.util.defType('Dictionary_EnumerableCollection$3', 'Object', {
	$tKey: null,
	$tValue: null,
	$t: null,
	__collection: null,
	__comparer: null,
	__owner: null,
	init: function ($tKey, $tValue, $t, owner, collection, comparer) {
		this.$tKey = $tKey;
		this.$tValue = $tValue;
		this.$t = $t;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$tKey, this.$tValue, this.$t);
		}
		$.ig.Object.prototype.init.call(this);
		this.__collection = collection;
		this.__comparer = comparer;
		this.__owner = owner;
	},
	/*<BeginProperty Name="System.Int32 System.Collections.Generic.Dictionary_EnumerableCollection`3::System.Collections.Generic.ICollection<T>.Count()" />*/
	count: function () {
		return this.__owner.count();
	}
	/*<EndProperty Name="System.Int32 System.Collections.Generic.Dictionary_EnumerableCollection`3::System.Collections.Generic.ICollection<T>.Count()" />*/
	,
	/*<BeginProperty Name="System.Boolean System.Collections.Generic.Dictionary_EnumerableCollection`3::System.Collections.Generic.ICollection<T>.IsReadOnly()" />*/
	isReadOnly: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean System.Collections.Generic.Dictionary_EnumerableCollection`3::System.Collections.Generic.ICollection<T>.IsReadOnly()" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.Generic.Dictionary_EnumerableCollection`3::System.Collections.Generic.ICollection<T>.Add(System.Collections.Generic.Dictionary_EnumerableCollection.T)" />*/
	add: function (item) {
		throw new $.ig.InvalidOperationException(0);
	}
	/*<EndMethod Name="System.Void System.Collections.Generic.Dictionary_EnumerableCollection`3::System.Collections.Generic.ICollection<T>.Add(System.Collections.Generic.Dictionary_EnumerableCollection.T)" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.Generic.Dictionary_EnumerableCollection`3::System.Collections.Generic.ICollection<T>.Clear()" />*/
	clear: function () {
		throw new $.ig.InvalidOperationException(0);
	}
	/*<EndMethod Name="System.Void System.Collections.Generic.Dictionary_EnumerableCollection`3::System.Collections.Generic.ICollection<T>.Clear()" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Collections.Generic.Dictionary_EnumerableCollection`3::System.Collections.Generic.ICollection<T>.Contains(System.Collections.Generic.Dictionary_EnumerableCollection.T)" />*/
	contains: function (item) {
		var en = this.__collection.getEnumerator();
		while (en.moveNext()) {
			var i = en.current();
			if ($.ig.Object.prototype.equalsStatic($.ig.util.getBoxIfEnum(this.$t, i), $.ig.util.getBoxIfEnum(this.$t, item))) {
				return true;
			}
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean System.Collections.Generic.Dictionary_EnumerableCollection`3::System.Collections.Generic.ICollection<T>.Contains(System.Collections.Generic.Dictionary_EnumerableCollection.T)" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.Generic.Dictionary_EnumerableCollection`3::System.Collections.Generic.ICollection<T>.CopyTo(, System.Int32)" />*/
	copyTo: function (array, arrayIndex) {
		var en = this.__collection.getEnumerator();
		while (en.moveNext()) {
			var item = en.current();
			array[arrayIndex++] = item;
		}
	}
	/*<EndMethod Name="System.Void System.Collections.Generic.Dictionary_EnumerableCollection`3::System.Collections.Generic.ICollection<T>.CopyTo(, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Collections.Generic.Dictionary_EnumerableCollection`3::System.Collections.Generic.ICollection<T>.Remove(System.Collections.Generic.Dictionary_EnumerableCollection.T)" />*/
	remove: function (item) {
		throw new $.ig.InvalidOperationException(0);
	}
	/*<EndMethod Name="System.Boolean System.Collections.Generic.Dictionary_EnumerableCollection`3::System.Collections.Generic.ICollection<T>.Remove(System.Collections.Generic.Dictionary_EnumerableCollection.T)" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerator System.Collections.Generic.Dictionary_EnumerableCollection`3::System.Collections.Generic.IEnumerable<T>.GetEnumerator()" />*/
	getEnumerator: function () {
		return this.__collection.getEnumerator();
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerator System.Collections.Generic.Dictionary_EnumerableCollection`3::System.Collections.Generic.IEnumerable<T>.GetEnumerator()" />*/
	,
	/*<BeginMethod Name="System.Collections.IEnumerator System.Collections.Generic.Dictionary_EnumerableCollection`3::System.Collections.IEnumerable.GetEnumerator()" />*/
	getEnumerator1: function () {
		return this.__collection.getEnumerator();
	}
	/*<EndMethod Name="System.Collections.IEnumerator System.Collections.Generic.Dictionary_EnumerableCollection`3::System.Collections.IEnumerable.GetEnumerator()" />*/
	,
	$type: new $.ig.Type('Dictionary_EnumerableCollection$3', $.ig.Object.prototype.$type, [$.ig.ICollection$1.prototype.$type.specialize(2)])
}, true);

/*<EndType Name="System.Collections.Generic.Dictionary_EnumerableCollection`3" />*/

/*<BeginType Name="System.Collections.Generic.EqualityComparer`1" />*/

$.ig.util.defType('EqualityComparer$1', 'Object', {
	$t: null,
	init: function ($t) {
		this.$t = $t;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$t);
		}
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginProperty Name="System.Collections.Generic.EqualityComparer System.Collections.Generic.EqualityComparer`1::Default()" />*/
	defaultEqualityComparerValue: function ($t) {
		return new $.ig.DefaultEqualityComparer$1($t);
	}
	/*<EndProperty Name="System.Collections.Generic.EqualityComparer System.Collections.Generic.EqualityComparer`1::Default()" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Collections.Generic.EqualityComparer`1::Equals(System.Collections.Generic.EqualityComparer.T, System.Collections.Generic.EqualityComparer.T)" />*/
	equalsC: function (x, y) {
	}
	/*<EndMethod Name="System.Boolean System.Collections.Generic.EqualityComparer`1::Equals(System.Collections.Generic.EqualityComparer.T, System.Collections.Generic.EqualityComparer.T)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Collections.Generic.EqualityComparer`1::GetHashCode(System.Collections.Generic.EqualityComparer.T)" />*/
	getHashCodeC: function (obj) {
	}
	/*<EndMethod Name="System.Int32 System.Collections.Generic.EqualityComparer`1::GetHashCode(System.Collections.Generic.EqualityComparer.T)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Collections.Generic.EqualityComparer`1::System.Collections.IEqualityComparer.Equals(System.Object, System.Object)" />*/
	equalsC: function (x, y) {
		return this.equalsC($.ig.util.castObjTo$t(this.$t, x), $.ig.util.castObjTo$t(this.$t, y));
	}
	/*<EndMethod Name="System.Boolean System.Collections.Generic.EqualityComparer`1::System.Collections.IEqualityComparer.Equals(System.Object, System.Object)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Collections.Generic.EqualityComparer`1::System.Collections.IEqualityComparer.GetHashCode(System.Object)" />*/
	getHashCodeC: function (obj) {
		return this.getHashCodeC($.ig.util.castObjTo$t(this.$t, obj));
	}
	/*<EndMethod Name="System.Int32 System.Collections.Generic.EqualityComparer`1::System.Collections.IEqualityComparer.GetHashCode(System.Object)" />*/
	,
	$type: new $.ig.Type('EqualityComparer$1', $.ig.Object.prototype.$type, [$.ig.IEqualityComparer.prototype.$type, $.ig.IEqualityComparer$1.prototype.$type.specialize(0)])
}, true);

/*<EndType Name="System.Collections.Generic.EqualityComparer`1" />*/

/*<BeginType Name="System.Collections.Generic.DefaultEqualityComparer`1" />*/

$.ig.util.defType('DefaultEqualityComparer$1', 'EqualityComparer$1', {
	$t: null,
	init: function ($t) {
		this.$t = $t;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$t);
		}
		$.ig.EqualityComparer$1.prototype.init.call(this, this.$t);
	},
	/*<BeginMethod Name="System.Boolean System.Collections.Generic.DefaultEqualityComparer`1::Equals(System.Collections.Generic.DefaultEqualityComparer.T, System.Collections.Generic.DefaultEqualityComparer.T)" />*/
	equalsC: function (x, y) {
		return $.ig.Object.prototype.equalsStatic($.ig.util.getBoxIfEnum(this.$t, x), $.ig.util.getBoxIfEnum(this.$t, y));
	}
	/*<EndMethod Name="System.Boolean System.Collections.Generic.DefaultEqualityComparer`1::Equals(System.Collections.Generic.DefaultEqualityComparer.T, System.Collections.Generic.DefaultEqualityComparer.T)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Collections.Generic.DefaultEqualityComparer`1::GetHashCode(System.Collections.Generic.DefaultEqualityComparer.T)" />*/
	getHashCodeC: function (obj) {
		return obj.getHashCode();
	}
	/*<EndMethod Name="System.Int32 System.Collections.Generic.DefaultEqualityComparer`1::GetHashCode(System.Collections.Generic.DefaultEqualityComparer.T)" />*/
	,
	$type: new $.ig.Type('DefaultEqualityComparer$1', $.ig.EqualityComparer$1.prototype.$type.specialize(0))
}, true);

/*<EndType Name="System.Collections.Generic.DefaultEqualityComparer`1" />*/

/*<BeginType Name="System.Collections.Generic.GenericEnumerable`1" />*/

$.ig.util.defType('GenericEnumerable$1', 'Object', {
	$t: null,
	__inner: null,
	init: function ($t, inner) {
		this.$t = $t;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$t);
		}
		$.ig.Object.prototype.init.call(this);
		this.__inner = inner;
	},
	/*<BeginMethod Name="System.Collections.Generic.IEnumerator System.Collections.Generic.GenericEnumerable`1::GetEnumerator()" />*/
	getEnumerator: function () {
		return new $.ig.GenericEnumerator$1(this.$t, this.__inner().getEnumerator());
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerator System.Collections.Generic.GenericEnumerable`1::GetEnumerator()" />*/
	,
	/*<BeginMethod Name="System.Collections.IEnumerator System.Collections.Generic.GenericEnumerable`1::System.Collections.IEnumerable.GetEnumerator()" />*/
	getEnumerator: function () {
		return new $.ig.GenericEnumerator$1(this.$t, this.__inner().getEnumerator());
	}
	/*<EndMethod Name="System.Collections.IEnumerator System.Collections.Generic.GenericEnumerable`1::System.Collections.IEnumerable.GetEnumerator()" />*/
	,
	$type: new $.ig.Type('GenericEnumerable$1', $.ig.Object.prototype.$type, [$.ig.IEnumerable$1.prototype.$type.specialize(0)])
}, true);

/*<EndType Name="System.Collections.Generic.GenericEnumerable`1" />*/

/*<BeginType Name="System.Collections.Generic.GenericEnumerator`1" />*/

$.ig.util.defType('GenericEnumerator$1', 'Object', {
	$t: null,
	__inner: null,
	init: function ($t, inner) {
		this.$t = $t;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$t);
		}
		$.ig.Object.prototype.init.call(this);
		this.__inner = inner;
	},
	/*<BeginProperty Name="System.Collections.Generic.GenericEnumerator.T System.Collections.Generic.GenericEnumerator`1::Current()" />*/
	current: function () {
		return this.__inner.current();
	}
	/*<EndProperty Name="System.Collections.Generic.GenericEnumerator.T System.Collections.Generic.GenericEnumerator`1::Current()" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Collections.Generic.GenericEnumerator`1::MoveNext()" />*/
	moveNext: function () {
		return this.__inner.moveNext();
	}
	/*<EndMethod Name="System.Boolean System.Collections.Generic.GenericEnumerator`1::MoveNext()" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.Generic.GenericEnumerator`1::Reset()" />*/
	reset: function () {
		this.__inner.reset();
	}
	/*<EndMethod Name="System.Void System.Collections.Generic.GenericEnumerator`1::Reset()" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.Generic.GenericEnumerator`1::System.IDisposable.Dispose()" />*/
	dispose: function () {
	}
	/*<EndMethod Name="System.Void System.Collections.Generic.GenericEnumerator`1::System.IDisposable.Dispose()" />*/
	,
	$type: new $.ig.Type('GenericEnumerator$1', $.ig.Object.prototype.$type, [$.ig.IEnumerator$1.prototype.$type.specialize(0)])
}, true);

/*<EndType Name="System.Collections.Generic.GenericEnumerator`1" />*/

/*<BeginType Name="System.Collections.Generic.HashSet`1" />*/

$.ig.util.defType('HashSet$1', 'Object', {
	$t: null,
	__comparer: null,
	__count: 0,
	__values: null,
	__useStrings: false,
	__stringPlaceholder: null,
	__needsEnsure: false,
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
				case 2:
					this.init2.apply(this, arguments);
					break;
				case 3:
					this.init3.apply(this, arguments);
					break;
			}
			return;
		}
		$.ig.HashSet$1.prototype.init2.call(this, this.$t, 2, null);
	},
	init1: function ($t, initNumber, collection) {
		this.$t = $t;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$t);
		}
		$.ig.HashSet$1.prototype.init3.call(this, this.$t, 3, collection, null);
	},
	init2: function ($t, initNumber, comparer) {
		this.$t = $t;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$t);
		}
		$.ig.Object.prototype.init.call(this);
		this.__values = {};
		this.__comparer = comparer || $.ig.EqualityComparer$1.prototype.defaultEqualityComparerValue(this.$t);
		this.__useStrings = comparer == null && ($t === $.ig.String.prototype.$type || $t === String);
		this.__needsEnsure = $t === $.ig.Object.prototype.$type || ($t.InstanceConstructor && !$t.InstanceConstructor.prototype.getHashCode);
		this.__stringPlaceholder = {};
	},
	init3: function ($t, initNumber, collection, comparer) {
		this.$t = $t;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$t);
		}
		$.ig.HashSet$1.prototype.init2.call(this, this.$t, 2, comparer);
		var en = collection.getEnumerator();
		while (en.moveNext()) {
			var item = en.current();
			this.add(item);
		}
	},
	/*<BeginProperty Name="System.Boolean System.Collections.Generic.HashSet`1::System.Collections.Generic.ICollection<T>.IsReadOnly()" />*/
	isReadOnly: function () {
		return false;
	}
	/*<EndProperty Name="System.Boolean System.Collections.Generic.HashSet`1::System.Collections.Generic.ICollection<T>.IsReadOnly()" />*/
	,
	/*<BeginProperty Name="System.Collections.Generic.IEqualityComparer System.Collections.Generic.HashSet`1::Comparer()" />*/
	comparer: function () {
		return this.__comparer;
	}
	/*<EndProperty Name="System.Collections.Generic.IEqualityComparer System.Collections.Generic.HashSet`1::Comparer()" />*/
	,
	/*<BeginProperty Name="System.Int32 System.Collections.Generic.HashSet`1::Count()" />*/
	count: function () {
		return this.__count;
	}
	/*<EndProperty Name="System.Int32 System.Collections.Generic.HashSet`1::Count()" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Collections.Generic.HashSet`1::Add(System.Collections.Generic.HashSet.T)" />*/
	add: function (item_) {
		if (this.__useStrings) {
			if (this.__values[item_]) {
				return false;
			}
			this.__values[item_] = this.__stringPlaceholder;
			this.__count++;
			return true;
		}
		if (this.__needsEnsure) {
			$.ig.util.ensureUniqueId(item_);
		}
		var hashCode = this.__comparer.getHashCodeC(item_);
		var current_ = this.__values[hashCode];
		if (current_) {
			if (current_.$isHashSetBucket) {
				var en = current_.getEnumerator();
				while (en.moveNext()) {
					var currentItem = en.current();
					if (this.__comparer.equalsC(currentItem, item_)) {
						return false;
					}
				}
				current_.push(item_);
			} else {
				if (this.__comparer.equalsC(current_, item_)) {
					return false;
				}
				var bucket_ = [current_, item_];
				bucket_.$isHashSetBucket = true;;
				this.__values[hashCode] = bucket_;
			}
		} else {
			this.__values[hashCode] = item_;
		}
		this.__count++;
		return true;
	}
	/*<EndMethod Name="System.Boolean System.Collections.Generic.HashSet`1::Add(System.Collections.Generic.HashSet.T)" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.Generic.HashSet`1::Clear()" />*/
	clear: function () {
		this.__count = 0;
		this.__values = {};
	}
	/*<EndMethod Name="System.Void System.Collections.Generic.HashSet`1::Clear()" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Collections.Generic.HashSet`1::Contains(System.Collections.Generic.HashSet.T)" />*/
	contains: function (item_) {
		if (this.__useStrings) {
			return !!this.__values[item_];
		}
		if (this.__needsEnsure) {
			$.ig.util.ensureUniqueId(item_);
		}
		var hashCode = this.__comparer.getHashCodeC(item_);
		var current_ = this.__values[hashCode];
		if (current_ !== undefined) {
			if (current_.$isHashSetBucket) {
				var en = current_.getEnumerator();
				while (en.moveNext()) {
					var currentItem = en.current();
					if (this.__comparer.equalsC(currentItem, item_)) {
						return true;
					}
				}
			} else {
				if (this.__comparer.equalsC(current_, item_)) {
					return true;
				}
			}
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean System.Collections.Generic.HashSet`1::Contains(System.Collections.Generic.HashSet.T)" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.Generic.HashSet`1::CopyTo()" />*/
	copyTo1: function (array) {
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndMethod Name="System.Void System.Collections.Generic.HashSet`1::CopyTo()" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.Generic.HashSet`1::CopyTo(, System.Int32)" />*/
	copyTo: function (array, arrayIndex) {
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndMethod Name="System.Void System.Collections.Generic.HashSet`1::CopyTo(, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.Generic.HashSet`1::CopyTo(, System.Int32, System.Int32)" />*/
	copyTo2: function (array, arrayIndex, count) {
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndMethod Name="System.Void System.Collections.Generic.HashSet`1::CopyTo(, System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEqualityComparer System.Collections.Generic.HashSet`1::CreateSetComparer()" />*/
	createSetComparer: function ($t) {
		throw new $.ig.NotImplementedException(0);
		return null;
	}
	/*<EndMethod Name="System.Collections.Generic.IEqualityComparer System.Collections.Generic.HashSet`1::CreateSetComparer()" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.Generic.HashSet`1::ExceptWith(System.Collections.Generic.IEnumerable)" />*/
	exceptWith: function (other) {
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndMethod Name="System.Void System.Collections.Generic.HashSet`1::ExceptWith(System.Collections.Generic.IEnumerable)" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerator System.Collections.Generic.HashSet`1::GetEnumerator()" />*/
	getEnumerator: function () {
		if (this.__useStrings) {
			return ($.ig.util.getArrayOfProperties(this.__values)).getEnumerator();
		}
		var result_ = new Array(0);
		var valuesResolved = $.ig.util.getArrayOfValues(this.__values);
		for (var i = 0; i < valuesResolved.length; i++) {
			var item_ = valuesResolved[i];
			if (item_.$isHashSetBucket) {
				var en = item_.getEnumerator();
				while (en.moveNext()) {
					var subItem_ = en.current();
					result_.push(subItem_);
				}
			} else {
				result_.push(item_);
			}
		}
		return result_.getEnumerator();
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerator System.Collections.Generic.HashSet`1::GetEnumerator()" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.Generic.HashSet`1::IntersectWith(System.Collections.Generic.IEnumerable)" />*/
	intersectWith: function (other) {
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndMethod Name="System.Void System.Collections.Generic.HashSet`1::IntersectWith(System.Collections.Generic.IEnumerable)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Collections.Generic.HashSet`1::IsProperSubsetOf(System.Collections.Generic.IEnumerable)" />*/
	isProperSubsetOf: function (other) {
		throw new $.ig.NotImplementedException(0);
		return false;
	}
	/*<EndMethod Name="System.Boolean System.Collections.Generic.HashSet`1::IsProperSubsetOf(System.Collections.Generic.IEnumerable)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Collections.Generic.HashSet`1::IsProperSupersetOf(System.Collections.Generic.IEnumerable)" />*/
	isProperSupersetOf: function (other) {
		throw new $.ig.NotImplementedException(0);
		return false;
	}
	/*<EndMethod Name="System.Boolean System.Collections.Generic.HashSet`1::IsProperSupersetOf(System.Collections.Generic.IEnumerable)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Collections.Generic.HashSet`1::IsSubsetOf(System.Collections.Generic.IEnumerable)" />*/
	isSubsetOf: function (other) {
		throw new $.ig.NotImplementedException(0);
		return false;
	}
	/*<EndMethod Name="System.Boolean System.Collections.Generic.HashSet`1::IsSubsetOf(System.Collections.Generic.IEnumerable)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Collections.Generic.HashSet`1::IsSupersetOf(System.Collections.Generic.IEnumerable)" />*/
	isSupersetOf: function (other) {
		throw new $.ig.NotImplementedException(0);
		return false;
	}
	/*<EndMethod Name="System.Boolean System.Collections.Generic.HashSet`1::IsSupersetOf(System.Collections.Generic.IEnumerable)" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.Generic.HashSet`1::OnDeserialization(System.Object)" />*/
	onDeserialization: function (sender) {
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndMethod Name="System.Void System.Collections.Generic.HashSet`1::OnDeserialization(System.Object)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Collections.Generic.HashSet`1::Overlaps(System.Collections.Generic.IEnumerable)" />*/
	overlaps: function (other) {
		if (this.count() > 0) {
			var en = other.getEnumerator();
			while (en.moveNext()) {
				var item = en.current();
				if (this.contains(item)) {
					return true;
				}
			}
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean System.Collections.Generic.HashSet`1::Overlaps(System.Collections.Generic.IEnumerable)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Collections.Generic.HashSet`1::Remove(System.Collections.Generic.HashSet.T)" />*/
	remove: function (item_) {
		if (this.__useStrings) {
			if (this.__values[item_]) {
				return false;
			}
			delete this.__values[item_];
			this.__count--;
			return true;
		}
		if (this.__needsEnsure) {
			$.ig.util.ensureUniqueId(item_);
		}
		var hashCode_ = this.__comparer.getHashCodeC(item_);
		var current_ = this.__values[hashCode_];
		if (current_) {
			if (current_.$isHashSetBucket) {
				var en = current_.getEnumerator();
				while (en.moveNext()) {
					var currentItem_ = en.current();
					if (this.__comparer.equalsC(currentItem_, item_)) {
						current_.removeItem(currentItem_);
						if (current_.length == 1) {
							this.__values[hashCode_] = current_[0];
						}
						this.__count--;
						return true;
					}
				}
			} else {
				if (this.__comparer.equalsC(current_, item_)) {
					delete this.__values[hashCode_];
					this.__count--;
					return true;
				}
			}
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean System.Collections.Generic.HashSet`1::Remove(System.Collections.Generic.HashSet.T)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Collections.Generic.HashSet`1::SetEquals(System.Collections.Generic.IEnumerable)" />*/
	setEquals: function (other) {
		throw new $.ig.NotImplementedException(0);
		return false;
	}
	/*<EndMethod Name="System.Boolean System.Collections.Generic.HashSet`1::SetEquals(System.Collections.Generic.IEnumerable)" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.Generic.HashSet`1::SymmetricExceptWith(System.Collections.Generic.IEnumerable)" />*/
	symmetricExceptWith: function (other) {
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndMethod Name="System.Void System.Collections.Generic.HashSet`1::SymmetricExceptWith(System.Collections.Generic.IEnumerable)" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.Generic.HashSet`1::TrimExcess()" />*/
	trimExcess: function () {
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndMethod Name="System.Void System.Collections.Generic.HashSet`1::TrimExcess()" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.Generic.HashSet`1::UnionWith(System.Collections.Generic.IEnumerable)" />*/
	unionWith: function (other) {
		var en = other.getEnumerator();
		while (en.moveNext()) {
			var item = en.current();
			this.add(item);
		}
	}
	/*<EndMethod Name="System.Void System.Collections.Generic.HashSet`1::UnionWith(System.Collections.Generic.IEnumerable)" />*/
	,
	$type: new $.ig.Type('HashSet$1', $.ig.Object.prototype.$type, [$.ig.ICollection$1.prototype.$type.specialize(0), $.ig.IEnumerable$1.prototype.$type.specialize(0), $.ig.IEnumerable.prototype.$type])
}, true);

/*<EndType Name="System.Collections.Generic.HashSet`1" />*/

/*<BeginType Name="System.Collections.Generic.IArrayList" />*/

$.ig.util.defType('IArrayList', 'Object', {
	$type: new $.ig.Type('IArrayList', null)
}, true);

/*<EndType Name="System.Collections.Generic.IArrayList" />*/

/*<BeginType Name="System.Collections.Generic.IArray" />*/

$.ig.util.defType('IArray', 'Object', {
	$type: new $.ig.Type('IArray', null)
}, true);

/*<EndType Name="System.Collections.Generic.IArray" />*/

/*<BeginType Name="System.Collections.Generic.LinkedList`1" />*/

$.ig.util.defType('LinkedList$1', 'Object', {
	$t: null,
	init: function ($t) {
		this.$t = $t;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$t);
		}
		$.ig.Object.prototype.init.call(this);
	},
	__first: null,
	/*<BeginProperty Name="System.Collections.Generic.LinkedListNode System.Collections.Generic.LinkedList`1::First()" />*/
	first: function () {
		return this.__first;
	}
	/*<EndProperty Name="System.Collections.Generic.LinkedListNode System.Collections.Generic.LinkedList`1::First()" />*/
	,
	__last: null,
	/*<BeginProperty Name="System.Collections.Generic.LinkedListNode System.Collections.Generic.LinkedList`1::Last()" />*/
	last: function () {
		return this.__last;
	}
	/*<EndProperty Name="System.Collections.Generic.LinkedListNode System.Collections.Generic.LinkedList`1::Last()" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.Generic.LinkedList`1::AddFirst(System.Collections.Generic.LinkedList.T)" />*/
	addFirst: function (item) {
		if (this.__first == null) {
			this.__first = new $.ig.LinkedListNode$1(this.$t, 1, item);
			this.__last = this.__first;
		} else {
			var oldFirst = this.__first;
			this.__first = new $.ig.LinkedListNode$1(this.$t, 1, item);
			this.__first._next = oldFirst;
			oldFirst._prev = this.__first;
		}
	}
	/*<EndMethod Name="System.Void System.Collections.Generic.LinkedList`1::AddFirst(System.Collections.Generic.LinkedList.T)" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.Generic.LinkedList`1::AddLast(System.Collections.Generic.LinkedList.T)" />*/
	addLast: function (item) {
		if (this.__last == null) {
			this.__first = new $.ig.LinkedListNode$1(this.$t, 1, item);
			this.__last = this.__first;
		} else {
			var oldLast = this.__last;
			this.__last = new $.ig.LinkedListNode$1(this.$t, 1, item);
			this.__last._prev = oldLast;
			oldLast._next = this.__last;
		}
	}
	/*<EndMethod Name="System.Void System.Collections.Generic.LinkedList`1::AddLast(System.Collections.Generic.LinkedList.T)" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.Generic.LinkedList`1::RemoveFirst()" />*/
	removeFirst: function () {
		this.remove(this.first());
	}
	/*<EndMethod Name="System.Void System.Collections.Generic.LinkedList`1::RemoveFirst()" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.Generic.LinkedList`1::Clear()" />*/
	clear: function () {
		this.__first = null;
		this.__last = null;
	}
	/*<EndMethod Name="System.Void System.Collections.Generic.LinkedList`1::Clear()" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.Generic.LinkedList`1::Remove(System.Collections.Generic.LinkedListNode)" />*/
	remove: function (node) {
		if (this.__first == node) {
			this.__first = node._next;
			if (node._next != null) {
				node._next._prev = null;
			}
		}
		if (this.__last == node) {
			this.__last = node._prev;
			if (node._prev != null) {
				node._prev._next = null;
			}
		}
		if (node._prev != null) {
			node._prev._next = node._next;
		}
		if (node._next != null) {
			node._next._prev = node._prev;
		}
		node._next = null;
		node._prev = null;
	}
	/*<EndMethod Name="System.Void System.Collections.Generic.LinkedList`1::Remove(System.Collections.Generic.LinkedListNode)" />*/
	,
	$type: new $.ig.Type('LinkedList$1', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.Collections.Generic.LinkedList`1" />*/

/*<BeginType Name="System.Collections.Generic.LinkedListNode`1" />*/

$.ig.util.defType('LinkedListNode$1', 'Object', {
	$t: null,
	_value: null,
	/*<BeginProperty Name="System.Collections.Generic.LinkedListNode.T System.Collections.Generic.LinkedListNode`1::Value()" />*/
	value: function (value) {
		if (arguments.length === 1) {
			this._value = value;
			return value;
		} else {
			return this._value;
		}
	}
	/*<EndProperty Name="System.Collections.Generic.LinkedListNode.T System.Collections.Generic.LinkedListNode`1::Value()" />*/
	,
	_prev: null,
	_next: null,
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
		$.ig.Object.prototype.init.call(this);
	},
	init1: function ($t, initNumber, item) {
		this.$t = $t;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$t);
		}
		$.ig.Object.prototype.init.call(this);
		this.value(item);
	},
	$type: new $.ig.Type('LinkedListNode$1', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.Collections.Generic.LinkedListNode`1" />*/

/*<BeginType Name="System.Collections.Generic.List`1" />*/

$.ig.util.defType('List$1', 'Object', {
	$t: null,
	__inner: null,
	__useFastCompare: false,
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
				case 2:
					this.init2.apply(this, arguments);
					break;
			}
			return;
		}
		this.__syncRoot = {};
		$.ig.Object.prototype.init.call(this);
		this.__inner = [];
		this.__useFastCompare = this.$t.InstanceConstructor && this.$t.InstanceConstructor.prototype.equals === $.ig.Object.prototype.equals;
	},
	init1: function ($t, initNumber, source) {
		this.$t = $t;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$t);
		}
		$.ig.List$1.prototype.init.call(this, this.$t, 0);
		if (this.tryArray(0, source)) {
			return;
		}
		var en = source.getEnumerator();
		while (en.moveNext()) {
			var item = en.current();
			this.add(item);
		}
	},
	init2: function ($t, initNumber, capacity) {
		this.$t = $t;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$t);
		}
		$.ig.List$1.prototype.init.call(this, this.$t, 0);
	},
	/*<BeginMethod Name="System.Void System.Collections.Generic.List`1::SetItem(System.Int32, System.Collections.Generic.List.T)" />*/
	setItem: function (index, newItem) {
		this.__inner[index] = newItem;
	}
	/*<EndMethod Name="System.Void System.Collections.Generic.List`1::SetItem(System.Int32, System.Collections.Generic.List.T)" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.Generic.List`1::InsertItem(System.Int32, System.Collections.Generic.List.T)" />*/
	insertItem: function (index, newItem) {
		this.__inner.splice(index, 0, newItem);
	}
	/*<EndMethod Name="System.Void System.Collections.Generic.List`1::InsertItem(System.Int32, System.Collections.Generic.List.T)" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.Generic.List`1::AddItem(System.Collections.Generic.List.T)" />*/
	addItem: function (newItem) {
		this.__inner.push(newItem);
	}
	/*<EndMethod Name="System.Void System.Collections.Generic.List`1::AddItem(System.Collections.Generic.List.T)" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.Generic.List`1::RemoveItem(System.Int32)" />*/
	removeItem: function (index) {
		this.__inner.splice(index, 1);
	}
	/*<EndMethod Name="System.Void System.Collections.Generic.List`1::RemoveItem(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.Generic.List`1::ClearItems()" />*/
	clearItems: function () {
		this.__inner = [];
	}
	/*<EndMethod Name="System.Void System.Collections.Generic.List`1::ClearItems()" />*/
	,
	/*<BeginProperty Name="System.Collections.Generic.List.T System.Collections.Generic.List`1::Item(System.Int32)" />*/
	item: function (index, value) {
		if (arguments.length === 2) {
			this.setItem(index, value);
			return value;
		} else {
			return this.__inner[index];
		}
	}
	/*<EndProperty Name="System.Collections.Generic.List.T System.Collections.Generic.List`1::Item(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Collections.Generic.List`1::IndexOf(System.Collections.Generic.List.T)" />*/
	indexOf: function (item) {
		if (this.__useFastCompare) {
			return this.__inner.indexOf(item);
		}
		for (var i = 0; i < this.__inner.length; i++) {
			if ($.ig.Object.prototype.equalsStatic($.ig.util.getBoxIfEnum(this.$t, item), $.ig.util.getBoxIfEnum(this.$t, this.__inner[i]))) {
				return i;
			}
		}
		return -1;
	}
	/*<EndMethod Name="System.Int32 System.Collections.Generic.List`1::IndexOf(System.Collections.Generic.List.T)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Collections.Generic.List`1::IndexOf(System.Collections.Generic.List.T, System.Int32)" />*/
	indexOf2: function (item, index) {
		if (this.__useFastCompare) {
			return this.__inner.indexOf(item, index);
		}
		for (; index < this.__inner.length; index++) {
			if ($.ig.Object.prototype.equalsStatic($.ig.util.getBoxIfEnum(this.$t, item), $.ig.util.getBoxIfEnum(this.$t, this.__inner[index]))) {
				return index;
			}
		}
		return -1;
	}
	/*<EndMethod Name="System.Int32 System.Collections.Generic.List`1::IndexOf(System.Collections.Generic.List.T, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Collections.Generic.List`1::LastIndexOf(System.Collections.Generic.List.T)" />*/
	lastIndexOf: function (item) {
		if (this.__useFastCompare) {
			return this.__inner.lastIndexOf(item);
		}
		for (var i = this.__inner.length - 1; i >= 0; i--) {
			if ($.ig.Object.prototype.equalsStatic($.ig.util.getBoxIfEnum(this.$t, item), $.ig.util.getBoxIfEnum(this.$t, this.__inner[i]))) {
				return i;
			}
		}
		return -1;
	}
	/*<EndMethod Name="System.Int32 System.Collections.Generic.List`1::LastIndexOf(System.Collections.Generic.List.T)" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.Generic.List`1::Insert(System.Int32, System.Collections.Generic.List.T)" />*/
	insert: function (index, item) {
		this.insertItem(index, item);
	}
	/*<EndMethod Name="System.Void System.Collections.Generic.List`1::Insert(System.Int32, System.Collections.Generic.List.T)" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.Generic.List`1::RemoveAt(System.Int32)" />*/
	removeAt: function (index) {
		this.removeItem(index);
	}
	/*<EndMethod Name="System.Void System.Collections.Generic.List`1::RemoveAt(System.Int32)" />*/
	,
	/*<BeginProperty Name="System.Int32 System.Collections.Generic.List`1::Count()" />*/
	count: function () {
		return this.__inner.length;
	}
	/*<EndProperty Name="System.Int32 System.Collections.Generic.List`1::Count()" />*/
	,
	/*<BeginProperty Name="System.Boolean System.Collections.Generic.List`1::IsReadOnly()" />*/
	isReadOnly: function () {
		return false;
	}
	/*<EndProperty Name="System.Boolean System.Collections.Generic.List`1::IsReadOnly()" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.Generic.List`1::Add(System.Collections.Generic.List.T)" />*/
	add: function (item) {
		this.addItem(item);
	}
	/*<EndMethod Name="System.Void System.Collections.Generic.List`1::Add(System.Collections.Generic.List.T)" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.Generic.List`1::Clear()" />*/
	clear: function () {
		this.clearItems();
	}
	/*<EndMethod Name="System.Void System.Collections.Generic.List`1::Clear()" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Collections.Generic.List`1::Contains(System.Collections.Generic.List.T)" />*/
	contains: function (item) {
		return this.indexOf(item) >= 0;
	}
	/*<EndMethod Name="System.Boolean System.Collections.Generic.List`1::Contains(System.Collections.Generic.List.T)" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.Generic.List`1::CopyTo(, System.Int32)" />*/
	copyTo: function (array, arrayIndex) {
		for (var i = 0; i < this.__inner.length; i++) {
			array[arrayIndex + i] = this.__inner[i];
		}
	}
	/*<EndMethod Name="System.Void System.Collections.Generic.List`1::CopyTo(, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Collections.Generic.List`1::Remove(System.Collections.Generic.List.T)" />*/
	remove: function (item) {
		var indexOf = this.indexOf(item);
		if (indexOf < 0) {
			return false;
		}
		this.removeItem(indexOf);
		return true;
	}
	/*<EndMethod Name="System.Boolean System.Collections.Generic.List`1::Remove(System.Collections.Generic.List.T)" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerator System.Collections.Generic.List`1::GetEnumerator()" />*/
	getEnumerator: function () {
		return this.__inner.getEnumerator();
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerator System.Collections.Generic.List`1::GetEnumerator()" />*/
	,
	/*<BeginMethod Name="System.Collections.IEnumerator System.Collections.Generic.List`1::System.Collections.IEnumerable.GetEnumerator()" />*/
	getEnumerator: function () {
		return this.__inner.getEnumerator();
	}
	/*<EndMethod Name="System.Collections.IEnumerator System.Collections.Generic.List`1::System.Collections.IEnumerable.GetEnumerator()" />*/
	,
	/*<BeginMethod Name="System.Array System.Collections.Generic.List`1::AsArray()" />*/
	asArray: function () {
		return this.__inner;
	}
	/*<EndMethod Name="System.Array System.Collections.Generic.List`1::AsArray()" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Collections.Generic.List`1::TryArray(System.Int32, System.Object)" />*/
	tryArray: function (index_, collection_) {
		var asArrayList = $.ig.util.cast($.ig.IArrayList.prototype.$type, collection_);
		if (asArrayList != null) {
			var a_ = asArrayList.asArrayList();
			Array.prototype.splice.apply(this.__inner, Array.prototype.concat.apply([index_, 0], a_));
			return true;
		}
		var asArray = $.ig.util.cast($.ig.IArray.prototype.$type, collection_);
		if (asArray != null) {
			var a_ = asArray.asArray();
			Array.prototype.splice.apply(this.__inner, Array.prototype.concat.apply([index_, 0], a_));
			return true;
		}
		var asList_ = $.ig.util.cast($.ig.IList$1.prototype.$type.specialize(this.$t), collection_);
		if (asList_ != null) {
			for (var i_ = 0; i_ < asList_.count(); i_++) {
				var item_ = asList_.item(i_);
				this.__inner.splice(index_ + i_, 0, item_);
			}
			return true;
		}
		var arr_ = Array.isArray(collection_) ? collection_ : null;;
		if (arr_ != null) {
			var inn_ = this.__inner;
			if (this.__inner.length == 0) {
				for (var i_ = 0; i_ < arr_.length; i_++) {
					inn_[index_++] = $.ig.util.castObjTo$t(this.$t, arr_[i_]);
				}
			} else {
				for (var i_ = 0; i_ < arr_.length; i_++) {
					inn_.splice(index_++, 0, arr_[i_]);
				}
			}
			return true;
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean System.Collections.Generic.List`1::TryArray(System.Int32, System.Object)" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.Generic.List`1::InsertRange(System.Int32, System.Collections.IEnumerable)" />*/
	insertRange1: function (index, collection) {
		if (this.tryArray(index, collection)) {
			return;
		}
		var j_ = index;
		var en = collection.getEnumerator();
		while (en.moveNext()) {
			var item_ = en.current();
			this.__inner.splice(j_, 0, item_);
			j_++;
		}
	}
	/*<EndMethod Name="System.Void System.Collections.Generic.List`1::InsertRange(System.Int32, System.Collections.IEnumerable)" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.Generic.List`1::InsertRange(System.Int32, System.Collections.Generic.IEnumerable)" />*/
	insertRange: function (index, collection) {
		if (this.tryArray(index, collection)) {
			return;
		}
		var j_ = index;
		var en = collection.getEnumerator();
		while (en.moveNext()) {
			var item_ = en.current();
			this.__inner.splice(j_, 0, item_);
			j_++;
		}
	}
	/*<EndMethod Name="System.Void System.Collections.Generic.List`1::InsertRange(System.Int32, System.Collections.Generic.IEnumerable)" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.Generic.List`1::RemoveRange(System.Int32, System.Int32)" />*/
	removeRange: function (index_, numToRemove_) {
		this.__inner.splice(index_, numToRemove_);
	}
	/*<EndMethod Name="System.Void System.Collections.Generic.List`1::RemoveRange(System.Int32, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.Generic.List`1::CopyTo(System.Array, System.Int32)" />*/
	copyTo1: function (array, index) {
		$.ig.util.arrayCopyTo(this.__inner, array, index);
	}
	/*<EndMethod Name="System.Void System.Collections.Generic.List`1::CopyTo(System.Array, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.Boolean System.Collections.Generic.List`1::IsFixedSize()" />*/
	isFixedSize: function () {
		return false;
	}
	/*<EndProperty Name="System.Boolean System.Collections.Generic.List`1::IsFixedSize()" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Collections.Generic.List`1::Add(System.Object)" />*/
	add1: function (value) {
		this.addItem($.ig.util.castObjTo$t(this.$t, value));
		return this.__inner.length - 1;
	}
	/*<EndMethod Name="System.Int32 System.Collections.Generic.List`1::Add(System.Object)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Collections.Generic.List`1::Contains(System.Object)" />*/
	contains1: function (item) {
		return this.indexOf1(item) >= 0;
	}
	/*<EndMethod Name="System.Boolean System.Collections.Generic.List`1::Contains(System.Object)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Collections.Generic.List`1::IndexOf(System.Object)" />*/
	indexOf1: function (item) {
		return this.indexOf($.ig.util.castObjTo$t(this.$t, item));
	}
	/*<EndMethod Name="System.Int32 System.Collections.Generic.List`1::IndexOf(System.Object)" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.Generic.List`1::Insert(System.Int32, System.Object)" />*/
	insert1: function (index, value) {
		this.insertItem(index, $.ig.util.castObjTo$t(this.$t, value));
	}
	/*<EndMethod Name="System.Void System.Collections.Generic.List`1::Insert(System.Int32, System.Object)" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.Generic.List`1::Remove(System.Object)" />*/
	remove1: function (value) {
		var indexOf = this.indexOf1(value);
		if (indexOf < 0) {
			return;
		}
		this.removeItem(indexOf);
	}
	/*<EndMethod Name="System.Void System.Collections.Generic.List`1::Remove(System.Object)" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.Generic.List`1::Sort()" />*/
	sort: function () {
		var c = null;
		if (this.$t == Number) {
			c = function (n1, n2) {
				var d1 = n1;
				var d2 = n2;
				if (d1 < d2) {
					return -1;
				}
				if (d1 == d2) {
					return 0;
				}
				return 1;
			};
		} else if (this.$t == $.ig.Number.prototype.$type) {
			c = function (n1, n2) {
				var f1 = n1;
				var f2 = n2;
				if (f1 < f2) {
					return -1;
				}
				if (f1 == f2) {
					return 0;
				}
				return 1;
			};
		} else if (this.$t == $.ig.Number.prototype.$type) {
			c = function (n1, n2) {
				var i1 = $.ig.util.getValue(n1);
				var i2 = $.ig.util.getValue(n2);
				if (i1 < i2) {
					return -1;
				}
				if (i1 == i2) {
					return 0;
				}
				return 1;
			};
		} else if (this.$t == $.ig.Date.prototype.$type) {
			c = function (n1, n2) {
				var d1 = n1;
				var d2 = n2;
				if (d1.getTime() < d2.getTime()) {
					return -1;
				}
				if (d1.getTime() == d2.getTime()) {
					return 0;
				}
				return 1;
			};
		} else {
			c = function (n1, n2) {
				return (n1).compareTo(n2);
			};
		}
		this.sortHelper(c);
	}
	/*<EndMethod Name="System.Void System.Collections.Generic.List`1::Sort()" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.Generic.List`1::SortHelper(System.Collections.CompareCallback)" />*/
	sortHelper: function (compare_) {
		this.__inner.sort(compare_);
	}
	/*<EndMethod Name="System.Void System.Collections.Generic.List`1::SortHelper(System.Collections.CompareCallback)" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.Generic.List`1::Sort(System.Func)" />*/
	sort2: function (compare_) {
		this.__inner.sort(compare_);
	}
	/*<EndMethod Name="System.Void System.Collections.Generic.List`1::Sort(System.Func)" />*/
	,
	_capacity: 0,
	/*<BeginProperty Name="System.Int32 System.Collections.Generic.List`1::Capacity()" />*/
	capacity: function (value) {
		if (arguments.length === 1) {
			this._capacity = value;
			return value;
		} else {
			return this._capacity;
		}
	}
	/*<EndProperty Name="System.Int32 System.Collections.Generic.List`1::Capacity()" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.Generic.List`1::AddRange(System.Collections.Generic.IEnumerable)" />*/
	addRange: function (values) {
		var en = values.getEnumerator();
		while (en.moveNext()) {
			var item_ = en.current();
			this.__inner.push(item_);
		}
	}
	/*<EndMethod Name="System.Void System.Collections.Generic.List`1::AddRange(System.Collections.Generic.IEnumerable)" />*/
	,
	/*<BeginMethod Name=" System.Collections.Generic.List`1::ToArray()" />*/
	toArray: function () {
		return this.__inner;
	}
	/*<EndMethod Name=" System.Collections.Generic.List`1::ToArray()" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.Generic.List`1::ForEach(System.Action)" />*/
	forEach: function (action) {
		for (var i = 0; i < this.__inner.length; i++) {
			action(this.__inner[i]);
		}
	}
	/*<EndMethod Name="System.Void System.Collections.Generic.List`1::ForEach(System.Action)" />*/
	,
	/*<BeginProperty Name="System.Boolean System.Collections.Generic.List`1::IsSynchronized()" />*/
	isSynchronized: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean System.Collections.Generic.List`1::IsSynchronized()" />*/
	,
	__syncRoot: null,
	/*<BeginProperty Name="System.Object System.Collections.Generic.List`1::SyncRoot()" />*/
	syncRoot: function () {
		return this.__syncRoot;
	}
	/*<EndProperty Name="System.Object System.Collections.Generic.List`1::SyncRoot()" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Collections.Generic.List`1::BinarySearch(System.Collections.Generic.List.T)" />*/
	binarySearch: function (item) {
		return this.binarySearch1(item, $.ig.Comparer$1.prototype.defaultComparerValue(this.$t));
	}
	/*<EndMethod Name="System.Int32 System.Collections.Generic.List`1::BinarySearch(System.Collections.Generic.List.T)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Collections.Generic.List`1::BinarySearch(System.Collections.Generic.List.T, System.Collections.Generic.IComparer)" />*/
	binarySearch1: function (item, comparer) {
		var start = 0;
		var end = this.count() - 1;
		while (start <= end) {
			var mid = start + ($.ig.intDivide((end - start), 2));
			var testValue = this.__inner[mid];
			var compareResult = comparer.compare(testValue, item);
			if (compareResult == 0) {
				return mid;
			}
			if (compareResult < 0) {
				start = mid + 1;
			} else {
				end = mid - 1;
			}
		}
		return ~start;
	}
	/*<EndMethod Name="System.Int32 System.Collections.Generic.List`1::BinarySearch(System.Collections.Generic.List.T, System.Collections.Generic.IComparer)" />*/
	,
	/*<BeginMethod Name="System.Collections.ObjectModel.ReadOnlyCollection System.Collections.Generic.List`1::AsReadOnly()" />*/
	asReadOnly: function () {
		return new $.ig.ReadOnlyCollection$1(this.$t, 1, this);
	}
	/*<EndMethod Name="System.Collections.ObjectModel.ReadOnlyCollection System.Collections.Generic.List`1::AsReadOnly()" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.Generic.List`1::Reverse()" />*/
	reverse: function () {
		for (var i = 0; i < $.ig.intDivide(this.count(), 2); i++) {
			var other = this.count() - i - 1;
			var temp = this.__inner[i];
			this.__inner[i] = this.__inner[other];
			this.__inner[other] = temp;
		}
	}
	/*<EndMethod Name="System.Void System.Collections.Generic.List`1::Reverse()" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.Generic.List`1::Sort(System.Collections.Generic.IComparer)" />*/
	sort1: function (comparer) {
		this.sort2(comparer.compare.runOn(comparer));
	}
	/*<EndMethod Name="System.Void System.Collections.Generic.List`1::Sort(System.Collections.Generic.IComparer)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Collections.Generic.List`1::FindIndex(System.Predicate)" />*/
	findIndex: function (match) {
		for (var i = 0; i < this.__inner.length; i++) {
			if (match(this.__inner[i])) {
				return i;
			}
		}
		return -1;
	}
	/*<EndMethod Name="System.Int32 System.Collections.Generic.List`1::FindIndex(System.Predicate)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Collections.Generic.List`1::RemoveAll(System.Predicate)" />*/
	removeAll: function (match) {
		throw new $.ig.NotImplementedException(0);
		return 0;
	}
	/*<EndMethod Name="System.Int32 System.Collections.Generic.List`1::RemoveAll(System.Predicate)" />*/
	,
	$type: new $.ig.Type('List$1', $.ig.Object.prototype.$type, [$.ig.IList$1.prototype.$type.specialize(0), $.ig.IArray.prototype.$type, $.ig.IList.prototype.$type])
}, true);

/*<EndType Name="System.Collections.Generic.List`1" />*/

/*<BeginType Name="System.Collections.Generic.Queue`1" />*/

$.ig.util.defType('Queue$1', 'Object', {
	$t: null,
	__count: 0,
	__head: 0,
	__tail: 0,
	__items: null,
	init: function ($t) {
		this.$t = $t;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$t);
		}
		$.ig.Object.prototype.init.call(this);
		this.__items = new Array(4);
	},
	/*<BeginProperty Name="System.Int32 System.Collections.Generic.Queue`1::Count()" />*/
	count: function () {
		return this.__count;
	}
	/*<EndProperty Name="System.Int32 System.Collections.Generic.Queue`1::Count()" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.Generic.Queue`1::CopyTo(System.Array, System.Int32)" />*/
	copyTo: function (array, index) {
		if (this.__head < this.__tail) {
			for (var i = this.__head; i < this.__tail; i++) {
				array[index++] = $.ig.util.getBoxIfEnum(this.$t, this.__items[i]);
			}
		} else {
			for (var i1 = this.__head; i1 < this.__items.length; i1++) {
				array[index++] = $.ig.util.getBoxIfEnum(this.$t, this.__items[i1]);
			}
			for (var i2 = 0; i2 < this.__tail; i2++) {
				array[index++] = $.ig.util.getBoxIfEnum(this.$t, this.__items[i2]);
			}
		}
	}
	/*<EndMethod Name="System.Void System.Collections.Generic.Queue`1::CopyTo(System.Array, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.Boolean System.Collections.Generic.Queue`1::IsSynchronized()" />*/
	isSynchronized: function () {
		return false;
	}
	/*<EndProperty Name="System.Boolean System.Collections.Generic.Queue`1::IsSynchronized()" />*/
	,
	/*<BeginProperty Name="System.Object System.Collections.Generic.Queue`1::SyncRoot()" />*/
	syncRoot: function () {
		return null;
	}
	/*<EndProperty Name="System.Object System.Collections.Generic.Queue`1::SyncRoot()" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerator System.Collections.Generic.Queue`1::GetEnumerator()" />*/
	getEnumerator: function () {
		var d__ = new $.ig.Queue___GetEnumerator__IteratorClass$1(this.$t, 0);
		d__.__4__this = this;
		return d__;
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerator System.Collections.Generic.Queue`1::GetEnumerator()" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.Generic.Queue`1::Enqueue(System.Collections.Generic.Queue.T)" />*/
	enqueue: function (item) {
		if (this.__count == this.__items.length) {
			var newItems = new Array(Math.max(2, this.__items.length * 2));
			this.copyTo(newItems, 0);
			this.__head = 0;
			this.__tail = this.__items.length;
			this.__items = newItems;
		}
		this.__items[this.__tail] = item;
		this.__tail = (this.__tail + 1) % this.__items.length;
		this.__count++;
	}
	/*<EndMethod Name="System.Void System.Collections.Generic.Queue`1::Enqueue(System.Collections.Generic.Queue.T)" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.Queue.T System.Collections.Generic.Queue`1::Dequeue()" />*/
	dequeue: function () {
		if (this.__count == 0) {
			throw new $.ig.InvalidOperationException(1, "The Queue is empty.");
		}
		var result = this.__items[this.__head];
		this.__items[this.__head] = null;
		this.__head = (this.__head + 1) % this.__items.length;
		this.__count--;
		return result;
	}
	/*<EndMethod Name="System.Collections.Generic.Queue.T System.Collections.Generic.Queue`1::Dequeue()" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.Queue.T System.Collections.Generic.Queue`1::Peek()" />*/
	peek: function () {
		if (this.__count == 0) {
			throw new $.ig.InvalidOperationException(1, "The Queue is empty.");
		}
		return this.__items[this.__head];
	}
	/*<EndMethod Name="System.Collections.Generic.Queue.T System.Collections.Generic.Queue`1::Peek()" />*/
	,
	$type: new $.ig.Type('Queue$1', $.ig.Object.prototype.$type, [$.ig.ICollection.prototype.$type, $.ig.IEnumerable$1.prototype.$type.specialize(0)])
}, true);

/*<EndType Name="System.Collections.Generic.Queue`1" />*/

/*<BeginType Name="System.Collections.Generic.Stack`1" />*/

$.ig.util.defType('Stack$1', 'Object', {
	$t: null,
	init: function ($t) {
		this.$t = $t;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$t);
		}
		this.__inner = new $.ig.Array();
		$.ig.Object.prototype.init.call(this);
	},
	__inner: null,
	/*<BeginMethod Name="System.Void System.Collections.Generic.Stack`1::Push(System.Collections.Generic.Stack.T)" />*/
	push: function (item) {
		this.__inner.add($.ig.util.getBoxIfEnum(this.$t, item));
	}
	/*<EndMethod Name="System.Void System.Collections.Generic.Stack`1::Push(System.Collections.Generic.Stack.T)" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.Stack.T System.Collections.Generic.Stack`1::Peek()" />*/
	peek: function () {
		if (this.__inner.length < 1) {
			return $.ig.util.getDefaultValue(this.$t);
		}
		return $.ig.util.castObjTo$t(this.$t, this.__inner[this.__inner.length - 1]);
	}
	/*<EndMethod Name="System.Collections.Generic.Stack.T System.Collections.Generic.Stack`1::Peek()" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.Stack.T System.Collections.Generic.Stack`1::Pop()" />*/
	pop: function () {
		var ret = this.__inner[this.__inner.length - 1];
		this.__inner.removeAt(this.__inner.length - 1);
		return $.ig.util.castObjTo$t(this.$t, ret);
	}
	/*<EndMethod Name="System.Collections.Generic.Stack.T System.Collections.Generic.Stack`1::Pop()" />*/
	,
	/*<BeginProperty Name="System.Int32 System.Collections.Generic.Stack`1::Count()" />*/
	count: function () {
		return this.__inner.length;
	}
	/*<EndProperty Name="System.Int32 System.Collections.Generic.Stack`1::Count()" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.Generic.Stack`1::Clear()" />*/
	clear: function () {
		this.__inner.clear();
	}
	/*<EndMethod Name="System.Void System.Collections.Generic.Stack`1::Clear()" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Collections.Generic.Stack`1::Contains(System.Collections.Generic.Stack.T)" />*/
	contains: function (item) {
		return this.__inner.contains($.ig.util.getBoxIfEnum(this.$t, item));
	}
	/*<EndMethod Name="System.Boolean System.Collections.Generic.Stack`1::Contains(System.Collections.Generic.Stack.T)" />*/
	,
	/*<BeginMethod Name="System.Collections.IEnumerator System.Collections.Generic.Stack`1::System.Collections.IEnumerable.GetEnumerator()" />*/
	getEnumerator: function () {
		return new $.ig.ReverseArrayEnumerator$1(this.$t, this.__inner);
	}
	/*<EndMethod Name="System.Collections.IEnumerator System.Collections.Generic.Stack`1::System.Collections.IEnumerable.GetEnumerator()" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerator System.Collections.Generic.Stack`1::GetEnumerator()" />*/
	getEnumerator: function () {
		return new $.ig.ReverseArrayEnumerator$1(this.$t, this.__inner);
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerator System.Collections.Generic.Stack`1::GetEnumerator()" />*/
	,
	/*<BeginMethod Name=" System.Collections.Generic.Stack`1::ToArray()" />*/
	toArray: function () {
		var count = this.__inner.length;
		var items = new Array(count);
		for (var i = 0; i < count; i++) {
			items[i] = $.ig.util.castObjTo$t(this.$t, this.__inner[count - (i + 1)]);
		}
		return items;
	}
	/*<EndMethod Name=" System.Collections.Generic.Stack`1::ToArray()" />*/
	,
	$type: new $.ig.Type('Stack$1', $.ig.Object.prototype.$type, [$.ig.IEnumerable$1.prototype.$type.specialize(0)])
}, true);

/*<EndType Name="System.Collections.Generic.Stack`1" />*/

/*<BeginType Name="System.Collections.Generic.ReverseArrayEnumerator`1" />*/

$.ig.util.defType('ReverseArrayEnumerator$1', 'Object', {
	$t: null,
	__index: 0,
	__array: null,
	init: function ($t, array) {
		this.$t = $t;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$t);
		}
		$.ig.Object.prototype.init.call(this);
		this.__array = array;
		this.__index = array.length;
	},
	/*<BeginProperty Name="System.Collections.Generic.ReverseArrayEnumerator.T System.Collections.Generic.ReverseArrayEnumerator`1::Current()" />*/
	current: function () {
		return $.ig.util.castObjTo$t(this.$t, this.__array[this.__index]);
	}
	/*<EndProperty Name="System.Collections.Generic.ReverseArrayEnumerator.T System.Collections.Generic.ReverseArrayEnumerator`1::Current()" />*/
	,
	/*<BeginProperty Name="System.Object System.Collections.Generic.ReverseArrayEnumerator`1::System.Collections.IEnumerator.Current()" />*/
	current: function () {
		return this.__array[this.__index];
	}
	/*<EndProperty Name="System.Object System.Collections.Generic.ReverseArrayEnumerator`1::System.Collections.IEnumerator.Current()" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Collections.Generic.ReverseArrayEnumerator`1::MoveNext()" />*/
	moveNext: function () {
		this.__index--;
		return this.__index >= 0;
	}
	/*<EndMethod Name="System.Boolean System.Collections.Generic.ReverseArrayEnumerator`1::MoveNext()" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.Generic.ReverseArrayEnumerator`1::Reset()" />*/
	reset: function () {
		this.__index = this.__array.length;
	}
	/*<EndMethod Name="System.Void System.Collections.Generic.ReverseArrayEnumerator`1::Reset()" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.Generic.ReverseArrayEnumerator`1::System.IDisposable.Dispose()" />*/
	dispose: function () {
		throw new $.ig.NotImplementedException(0);
	}
	/*<EndMethod Name="System.Void System.Collections.Generic.ReverseArrayEnumerator`1::System.IDisposable.Dispose()" />*/
	,
	$type: new $.ig.Type('ReverseArrayEnumerator$1', $.ig.Object.prototype.$type, [$.ig.IEnumerator$1.prototype.$type.specialize(0)])
}, true);

/*<EndType Name="System.Collections.Generic.ReverseArrayEnumerator`1" />*/

/*<BeginType Name="System.Collections.ObjectModel.Collection`1" />*/

$.ig.util.defType('Collection$1', 'List$1', {
	$t: null,
	init: function ($t) {
		this.$t = $t;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$t);
		}
		$.ig.List$1.prototype.init.call(this, this.$t, 0);
	},
	/*<BeginProperty Name="System.Collections.Generic.IList System.Collections.ObjectModel.Collection`1::Items()" />*/
	items: function () {
		return this;
	}
	/*<EndProperty Name="System.Collections.Generic.IList System.Collections.ObjectModel.Collection`1::Items()" />*/
	,
	$type: new $.ig.Type('Collection$1', $.ig.List$1.prototype.$type.specialize(0))
}, true);

/*<EndType Name="System.Collections.ObjectModel.Collection`1" />*/

/*<BeginType Name="System.Collections.ObjectModel.ObservableCollection`1" />*/

$.ig.util.defType('ObservableCollection$1', 'List$1', {
	$t: null,
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
				case 2:
					this.init2.apply(this, arguments);
					break;
			}
			return;
		}
		$.ig.List$1.prototype.init.call(this, this.$t, 0);
	},
	init1: function ($t, initNumber, source) {
		this.$t = $t;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$t);
		}
		$.ig.List$1.prototype.init1.call(this, this.$t, 1, source);
	},
	init2: function ($t, initNumber, capacity) {
		this.$t = $t;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$t);
		}
		$.ig.List$1.prototype.init2.call(this, this.$t, 2, capacity);
	},
	/*<BeginMethod Name="System.Void System.Collections.ObjectModel.ObservableCollection`1::SetItem(System.Int32, System.Collections.ObjectModel.ObservableCollection.T)" />*/
	setItem: function (index, newItem) {
		var oldItem = this.__inner[index];
		$.ig.List$1.prototype.setItem.call(this, index, newItem);
		if (this.propertyChanged != null) {
			this.onPropertyChanged(new $.ig.PropertyChangedEventArgs("Item[]"));
		}
		if (this.collectionChanged != null) {
			var args = new $.ig.NotifyCollectionChangedEventArgs(2, $.ig.NotifyCollectionChangedAction.prototype.replace, $.ig.util.getBoxIfEnum(this.$t, newItem), $.ig.util.getBoxIfEnum(this.$t, oldItem), index);
			this.onCollectionChanged(args);
		}
	}
	/*<EndMethod Name="System.Void System.Collections.ObjectModel.ObservableCollection`1::SetItem(System.Int32, System.Collections.ObjectModel.ObservableCollection.T)" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.ObjectModel.ObservableCollection`1::ClearItems()" />*/
	clearItems: function () {
		$.ig.List$1.prototype.clearItems.call(this);
		if (this.propertyChanged != null) {
			this.onPropertyChanged(new $.ig.PropertyChangedEventArgs("Count"));
			this.onPropertyChanged(new $.ig.PropertyChangedEventArgs("Item[]"));
		}
		if (this.collectionChanged != null) {
			var args = new $.ig.NotifyCollectionChangedEventArgs(0, $.ig.NotifyCollectionChangedAction.prototype.reset);
			this.onCollectionChanged(args);
		}
	}
	/*<EndMethod Name="System.Void System.Collections.ObjectModel.ObservableCollection`1::ClearItems()" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.ObjectModel.ObservableCollection`1::InsertItem(System.Int32, System.Collections.ObjectModel.ObservableCollection.T)" />*/
	insertItem: function (index, newItem) {
		$.ig.List$1.prototype.insertItem.call(this, index, newItem);
		if (this.propertyChanged != null) {
			this.onPropertyChanged(new $.ig.PropertyChangedEventArgs("Count"));
			this.onPropertyChanged(new $.ig.PropertyChangedEventArgs("Item[]"));
		}
		if (this.collectionChanged != null) {
			var args = new $.ig.NotifyCollectionChangedEventArgs(1, $.ig.NotifyCollectionChangedAction.prototype.add, $.ig.util.getBoxIfEnum(this.$t, newItem), index);
			this.onCollectionChanged(args);
		}
	}
	/*<EndMethod Name="System.Void System.Collections.ObjectModel.ObservableCollection`1::InsertItem(System.Int32, System.Collections.ObjectModel.ObservableCollection.T)" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.ObjectModel.ObservableCollection`1::AddItem(System.Collections.ObjectModel.ObservableCollection.T)" />*/
	addItem: function (newItem) {
		$.ig.List$1.prototype.addItem.call(this, newItem);
		if (this.propertyChanged != null) {
			this.onPropertyChanged(new $.ig.PropertyChangedEventArgs("Count"));
			this.onPropertyChanged(new $.ig.PropertyChangedEventArgs("Item[]"));
		}
		if (this.collectionChanged != null) {
			var args = new $.ig.NotifyCollectionChangedEventArgs(1, $.ig.NotifyCollectionChangedAction.prototype.add, $.ig.util.getBoxIfEnum(this.$t, newItem), this.count() - 1);
			this.onCollectionChanged(args);
		}
	}
	/*<EndMethod Name="System.Void System.Collections.ObjectModel.ObservableCollection`1::AddItem(System.Collections.ObjectModel.ObservableCollection.T)" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.ObjectModel.ObservableCollection`1::RemoveItem(System.Int32)" />*/
	removeItem: function (index) {
		var oldItem = this.__inner[index];
		$.ig.List$1.prototype.removeItem.call(this, index);
		if (this.propertyChanged != null) {
			this.onPropertyChanged(new $.ig.PropertyChangedEventArgs("Count"));
			this.onPropertyChanged(new $.ig.PropertyChangedEventArgs("Item[]"));
		}
		if (this.collectionChanged != null) {
			var args = new $.ig.NotifyCollectionChangedEventArgs(1, $.ig.NotifyCollectionChangedAction.prototype.remove, $.ig.util.getBoxIfEnum(this.$t, oldItem), index);
			this.onCollectionChanged(args);
		}
	}
	/*<EndMethod Name="System.Void System.Collections.ObjectModel.ObservableCollection`1::RemoveItem(System.Int32)" />*/
	,
	collectionChanged: null,
	propertyChanged: null,
	/*<BeginMethod Name="System.Void System.Collections.ObjectModel.ObservableCollection`1::OnPropertyChanged(System.ComponentModel.PropertyChangedEventArgs)" />*/
	onPropertyChanged: function (args) {
		if (this.propertyChanged != null) {
			this.propertyChanged(this, args);
		}
	}
	/*<EndMethod Name="System.Void System.Collections.ObjectModel.ObservableCollection`1::OnPropertyChanged(System.ComponentModel.PropertyChangedEventArgs)" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.ObjectModel.ObservableCollection`1::OnCollectionChanged(System.Collections.Specialized.NotifyCollectionChangedEventArgs)" />*/
	onCollectionChanged: function (args) {
		if (this.collectionChanged != null) {
			this.collectionChanged(this, args);
		}
	}
	/*<EndMethod Name="System.Void System.Collections.ObjectModel.ObservableCollection`1::OnCollectionChanged(System.Collections.Specialized.NotifyCollectionChangedEventArgs)" />*/
	,
	$type: new $.ig.Type('ObservableCollection$1', $.ig.List$1.prototype.$type.specialize(0), [$.ig.INotifyCollectionChanged.prototype.$type, $.ig.INotifyPropertyChanged.prototype.$type])
}, true);

/*<EndType Name="System.Collections.ObjectModel.ObservableCollection`1" />*/

/*<BeginType Name="System.Collections.ObjectModel.ReadOnlyCollection`1" />*/

$.ig.util.defType('ReadOnlyCollection$1', 'Object', {
	$t: null,
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
		this.__syncRoot = {};
		$.ig.Object.prototype.init.call(this);
	},
	init1: function ($t, initNumber, source) {
		this.$t = $t;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$t);
		}
		this.__syncRoot = {};
		$.ig.Object.prototype.init.call(this);
		this.__inner = source;
	},
	__inner: null,
	/*<BeginProperty Name="System.Collections.ObjectModel.ReadOnlyCollection.T System.Collections.ObjectModel.ReadOnlyCollection`1::Item(System.Int32)" />*/
	item: function (index, value) {
		if (arguments.length === 2) {
			this.__inner.item(index, value);
			return value;
		} else {
			return this.__inner.item(index);
		}
	}
	/*<EndProperty Name="System.Collections.ObjectModel.ReadOnlyCollection.T System.Collections.ObjectModel.ReadOnlyCollection`1::Item(System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Collections.ObjectModel.ReadOnlyCollection`1::IndexOf(System.Collections.ObjectModel.ReadOnlyCollection.T)" />*/
	indexOf: function (item) {
		return this.__inner.indexOf(item);
	}
	/*<EndMethod Name="System.Int32 System.Collections.ObjectModel.ReadOnlyCollection`1::IndexOf(System.Collections.ObjectModel.ReadOnlyCollection.T)" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.ObjectModel.ReadOnlyCollection`1::Insert(System.Int32, System.Collections.ObjectModel.ReadOnlyCollection.T)" />*/
	insert: function (index, item) {
	}
	/*<EndMethod Name="System.Void System.Collections.ObjectModel.ReadOnlyCollection`1::Insert(System.Int32, System.Collections.ObjectModel.ReadOnlyCollection.T)" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.ObjectModel.ReadOnlyCollection`1::RemoveAt(System.Int32)" />*/
	removeAt: function (index) {
	}
	/*<EndMethod Name="System.Void System.Collections.ObjectModel.ReadOnlyCollection`1::RemoveAt(System.Int32)" />*/
	,
	/*<BeginProperty Name="System.Int32 System.Collections.ObjectModel.ReadOnlyCollection`1::Count()" />*/
	count: function () {
		return this.__inner.count();
	}
	/*<EndProperty Name="System.Int32 System.Collections.ObjectModel.ReadOnlyCollection`1::Count()" />*/
	,
	/*<BeginProperty Name="System.Boolean System.Collections.ObjectModel.ReadOnlyCollection`1::IsReadOnly()" />*/
	isReadOnly: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean System.Collections.ObjectModel.ReadOnlyCollection`1::IsReadOnly()" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.ObjectModel.ReadOnlyCollection`1::Add(System.Collections.ObjectModel.ReadOnlyCollection.T)" />*/
	add: function (item) {
	}
	/*<EndMethod Name="System.Void System.Collections.ObjectModel.ReadOnlyCollection`1::Add(System.Collections.ObjectModel.ReadOnlyCollection.T)" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.ObjectModel.ReadOnlyCollection`1::Clear()" />*/
	clear: function () {
	}
	/*<EndMethod Name="System.Void System.Collections.ObjectModel.ReadOnlyCollection`1::Clear()" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Collections.ObjectModel.ReadOnlyCollection`1::Contains(System.Collections.ObjectModel.ReadOnlyCollection.T)" />*/
	contains: function (item) {
		return this.__inner.contains(item);
	}
	/*<EndMethod Name="System.Boolean System.Collections.ObjectModel.ReadOnlyCollection`1::Contains(System.Collections.ObjectModel.ReadOnlyCollection.T)" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.ObjectModel.ReadOnlyCollection`1::CopyTo(, System.Int32)" />*/
	copyTo: function (array, arrayIndex) {
		this.__inner.copyTo(array, arrayIndex);
	}
	/*<EndMethod Name="System.Void System.Collections.ObjectModel.ReadOnlyCollection`1::CopyTo(, System.Int32)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Collections.ObjectModel.ReadOnlyCollection`1::Remove(System.Collections.ObjectModel.ReadOnlyCollection.T)" />*/
	remove: function (item) {
		return false;
	}
	/*<EndMethod Name="System.Boolean System.Collections.ObjectModel.ReadOnlyCollection`1::Remove(System.Collections.ObjectModel.ReadOnlyCollection.T)" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerator System.Collections.ObjectModel.ReadOnlyCollection`1::GetEnumerator()" />*/
	getEnumerator: function () {
		return this.__inner.getEnumerator();
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerator System.Collections.ObjectModel.ReadOnlyCollection`1::GetEnumerator()" />*/
	,
	/*<BeginMethod Name="System.Collections.IEnumerator System.Collections.ObjectModel.ReadOnlyCollection`1::System.Collections.IEnumerable.GetEnumerator()" />*/
	getEnumerator: function () {
		return this.__inner.getEnumerator();
	}
	/*<EndMethod Name="System.Collections.IEnumerator System.Collections.ObjectModel.ReadOnlyCollection`1::System.Collections.IEnumerable.GetEnumerator()" />*/
	,
	/*<BeginProperty Name="System.Boolean System.Collections.ObjectModel.ReadOnlyCollection`1::IsFixedSize()" />*/
	isFixedSize: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean System.Collections.ObjectModel.ReadOnlyCollection`1::IsFixedSize()" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Collections.ObjectModel.ReadOnlyCollection`1::Add(System.Object)" />*/
	add1: function (value) {
		return -1;
	}
	/*<EndMethod Name="System.Int32 System.Collections.ObjectModel.ReadOnlyCollection`1::Add(System.Object)" />*/
	,
	/*<BeginMethod Name="System.Boolean System.Collections.ObjectModel.ReadOnlyCollection`1::Contains(System.Object)" />*/
	contains1: function (value) {
		return this.__inner.contains($.ig.util.castObjTo$t(this.$t, value));
	}
	/*<EndMethod Name="System.Boolean System.Collections.ObjectModel.ReadOnlyCollection`1::Contains(System.Object)" />*/
	,
	/*<BeginMethod Name="System.Int32 System.Collections.ObjectModel.ReadOnlyCollection`1::IndexOf(System.Object)" />*/
	indexOf1: function (value) {
		return this.__inner.indexOf($.ig.util.castObjTo$t(this.$t, value));
	}
	/*<EndMethod Name="System.Int32 System.Collections.ObjectModel.ReadOnlyCollection`1::IndexOf(System.Object)" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.ObjectModel.ReadOnlyCollection`1::Insert(System.Int32, System.Object)" />*/
	insert1: function (index, value) {
	}
	/*<EndMethod Name="System.Void System.Collections.ObjectModel.ReadOnlyCollection`1::Insert(System.Int32, System.Object)" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.ObjectModel.ReadOnlyCollection`1::Remove(System.Object)" />*/
	remove1: function (value) {
	}
	/*<EndMethod Name="System.Void System.Collections.ObjectModel.ReadOnlyCollection`1::Remove(System.Object)" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.ObjectModel.ReadOnlyCollection`1::CopyTo(System.Array, System.Int32)" />*/
	copyTo1: function (array, index) {
		this.__inner.copyTo(array, index);
	}
	/*<EndMethod Name="System.Void System.Collections.ObjectModel.ReadOnlyCollection`1::CopyTo(System.Array, System.Int32)" />*/
	,
	/*<BeginProperty Name="System.Collections.Generic.IList System.Collections.ObjectModel.ReadOnlyCollection`1::Items()" />*/
	items: function () {
		return this.__inner;
	}
	/*<EndProperty Name="System.Collections.Generic.IList System.Collections.ObjectModel.ReadOnlyCollection`1::Items()" />*/
	,
	/*<BeginProperty Name="System.Boolean System.Collections.ObjectModel.ReadOnlyCollection`1::IsSynchronized()" />*/
	isSynchronized: function () {
		return true;
	}
	/*<EndProperty Name="System.Boolean System.Collections.ObjectModel.ReadOnlyCollection`1::IsSynchronized()" />*/
	,
	__syncRoot: null,
	/*<BeginProperty Name="System.Object System.Collections.ObjectModel.ReadOnlyCollection`1::SyncRoot()" />*/
	syncRoot: function () {
		return this.__syncRoot;
	}
	/*<EndProperty Name="System.Object System.Collections.ObjectModel.ReadOnlyCollection`1::SyncRoot()" />*/
	,
	$type: new $.ig.Type('ReadOnlyCollection$1', $.ig.Object.prototype.$type, [$.ig.IList$1.prototype.$type.specialize(0), $.ig.IList.prototype.$type])
}, true);

/*<EndType Name="System.Collections.ObjectModel.ReadOnlyCollection`1" />*/

/*<BeginType Name="System.Collections.Generic.Dictionary___ToEnumerableKeys__IteratorClass`2" />*/

$.ig.util.defType('Dictionary___ToEnumerableKeys__IteratorClass$2', 'Object', {
	$tKey: null,
	$tValue: null,
	__1__state: 0,
	__2__current: null,
	__array_5_0: null,
	__i_5_1: 0,
	__array_5_2: null,
	__i_5_3: 0,
	__pair_5_4: null,
	__pArray_5_5: null,
	__j_5_6: 0,
	__4__this: null,
	init: function ($tKey, $tValue, _1__state) {
		this.$tKey = $tKey;
		this.$tValue = $tValue;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$tKey, this.$tValue);
		}
		$.ig.Object.prototype.init.call(this);
		this.__1__state = _1__state;
	},
	/*<BeginMethod Name="System.Boolean System.Collections.Generic.Dictionary___ToEnumerableKeys__IteratorClass`2::MoveNext()" />*/
	moveNext: function () {
		while (this.__1__state >= 0) {
			switch (this.__1__state) {
				case 0:
					this.__1__state = -1;
					if (this.__4__this.__assumeUniqueKeys) {
						this.__array_5_0 = $.ig.util.getArrayOfProperties(this.__4__this.__keysUnique);
						this.__i_5_1 = 0;
						this.__1__state = 1;
						break;
					}
					this.__array_5_2 = $.ig.util.getArrayOfProperties(this.__4__this.__values);
					this.__i_5_3 = 0;
					this.__1__state = 3;
					break;
				case 1:
					this.__1__state = -1;
					if (this.__i_5_1 < this.__array_5_0.length) {
						this.__2__current = this.__4__this.__keysUnique[this.__array_5_0[this.__i_5_1]];
						this.__1__state = 2;
						return true;
					}
					break;
				case 2:
					this.__1__state = -1;
					this.__i_5_1++;
					this.__1__state = 1;
					break;
				case 3:
					this.__1__state = -1;
					if (this.__i_5_3 < this.__array_5_2.length) {
						this.__pair_5_4 = this.__4__this.__values[this.__array_5_2[this.__i_5_3]];
						if (this.__pair_5_4.$isHashSetBucket) {
							this.__pArray_5_5 = this.__pair_5_4;
							this.__j_5_6 = 0;
							this.__1__state = 4;
							break;
						}
						this.__2__current = this.__pair_5_4.key;
						this.__1__state = 6;
						return true;
					}
					break;
				case 4:
					this.__1__state = -1;
					if (this.__j_5_6 < this.__pArray_5_5.length) {
						var subItem_ = this.__pArray_5_5[this.__j_5_6];
						this.__2__current = subItem_.key;
						this.__1__state = 5;
						return true;
					}
					this.__1__state = 6;
					break;
				case 5:
					this.__1__state = -1;
					this.__j_5_6++;
					this.__1__state = 4;
					break;
				case 6:
					this.__1__state = -1;
					this.__i_5_3++;
					this.__1__state = 3;
					break;
			}
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean System.Collections.Generic.Dictionary___ToEnumerableKeys__IteratorClass`2::MoveNext()" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerator System.Collections.Generic.Dictionary___ToEnumerableKeys__IteratorClass`2::System.Collections.Generic.IEnumerable<TKey>.GetEnumerator()" />*/
	getEnumerator: function () {
		var d__;
		if (this.__1__state == -2) {
			this.__1__state = 0;
			d__ = this;
		} else {
			d__ = new $.ig.Dictionary___ToEnumerableKeys__IteratorClass$2(this.$tKey, this.$tValue, 0);
			d__.__4__this = this.__4__this;
		}
		return d__;
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerator System.Collections.Generic.Dictionary___ToEnumerableKeys__IteratorClass`2::System.Collections.Generic.IEnumerable<TKey>.GetEnumerator()" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.Generic.Dictionary___ToEnumerableKeys__IteratorClass`2::System.Collections.IEnumerator.Reset()" />*/
	reset: function () {
		throw new $.ig.NotSupportedException(1);
	}
	/*<EndMethod Name="System.Void System.Collections.Generic.Dictionary___ToEnumerableKeys__IteratorClass`2::System.Collections.IEnumerator.Reset()" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.Generic.Dictionary___ToEnumerableKeys__IteratorClass`2::System.IDisposable.Dispose()" />*/
	dispose: function () {
	}
	/*<EndMethod Name="System.Void System.Collections.Generic.Dictionary___ToEnumerableKeys__IteratorClass`2::System.IDisposable.Dispose()" />*/
	,
	/*<BeginProperty Name="System.Collections.Generic.Dictionary___ToEnumerableKeys__IteratorClass.TKey System.Collections.Generic.Dictionary___ToEnumerableKeys__IteratorClass`2::System.Collections.Generic.IEnumerator<TKey>.Current()" />*/
	current: function () {
		return this.__2__current;
	}
	/*<EndProperty Name="System.Collections.Generic.Dictionary___ToEnumerableKeys__IteratorClass.TKey System.Collections.Generic.Dictionary___ToEnumerableKeys__IteratorClass`2::System.Collections.Generic.IEnumerator<TKey>.Current()" />*/
	,
	/*<BeginProperty Name="System.Object System.Collections.Generic.Dictionary___ToEnumerableKeys__IteratorClass`2::System.Collections.IEnumerator.Current()" />*/
	current1: function () {
		return $.ig.util.getBoxIfEnum(this.$tKey, this.__2__current);
	}
	/*<EndProperty Name="System.Object System.Collections.Generic.Dictionary___ToEnumerableKeys__IteratorClass`2::System.Collections.IEnumerator.Current()" />*/
	,
	$type: new $.ig.Type('Dictionary___ToEnumerableKeys__IteratorClass$2', $.ig.Object.prototype.$type, [$.ig.IEnumerable$1.prototype.$type.specialize(0), $.ig.IEnumerable.prototype.$type, $.ig.IEnumerator$1.prototype.$type.specialize(0), $.ig.IEnumerator.prototype.$type, $.ig.IDisposable.prototype.$type])
}, true);

/*<EndType Name="System.Collections.Generic.Dictionary___ToEnumerableKeys__IteratorClass`2" />*/

/*<BeginType Name="System.Collections.Generic.Queue___GetEnumerator__IteratorClass`1" />*/

$.ig.util.defType('Queue___GetEnumerator__IteratorClass$1', 'Object', {
	$t: null,
	__1__state: 0,
	__2__current: null,
	__i_5_0: 0,
	__i_5_1: 0,
	__i_5_2: 0,
	__4__this: null,
	init: function ($t, _1__state) {
		this.$t = $t;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$t);
		}
		$.ig.Object.prototype.init.call(this);
		this.__1__state = _1__state;
	},
	/*<BeginMethod Name="System.Boolean System.Collections.Generic.Queue___GetEnumerator__IteratorClass`1::MoveNext()" />*/
	moveNext: function () {
		while (this.__1__state >= 0) {
			switch (this.__1__state) {
				case 0:
					this.__1__state = -1;
					if (this.__4__this.__head < this.__4__this.__tail) {
						this.__i_5_0 = this.__4__this.__head;
						this.__1__state = 1;
						break;
					}
					this.__i_5_1 = this.__4__this.__head;
					this.__1__state = 3;
					break;
				case 1:
					this.__1__state = -1;
					if (this.__i_5_0 < this.__4__this.__tail) {
						this.__2__current = this.__4__this.__items[this.__i_5_0];
						this.__1__state = 2;
						return true;
					}
					break;
				case 2:
					this.__1__state = -1;
					this.__i_5_0++;
					this.__1__state = 1;
					break;
				case 3:
					this.__1__state = -1;
					if (this.__i_5_1 < this.__4__this.__items.length) {
						this.__2__current = this.__4__this.__items[this.__i_5_1];
						this.__1__state = 4;
						return true;
					}
					this.__i_5_2 = 0;
					this.__1__state = 5;
					break;
				case 4:
					this.__1__state = -1;
					this.__i_5_1++;
					this.__1__state = 3;
					break;
				case 5:
					this.__1__state = -1;
					if (this.__i_5_2 < this.__4__this.__tail) {
						this.__2__current = this.__4__this.__items[this.__i_5_2];
						this.__1__state = 6;
						return true;
					}
					break;
				case 6:
					this.__1__state = -1;
					this.__i_5_2++;
					this.__1__state = 5;
					break;
			}
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean System.Collections.Generic.Queue___GetEnumerator__IteratorClass`1::MoveNext()" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.Generic.Queue___GetEnumerator__IteratorClass`1::System.Collections.IEnumerator.Reset()" />*/
	reset: function () {
		throw new $.ig.NotSupportedException(1);
	}
	/*<EndMethod Name="System.Void System.Collections.Generic.Queue___GetEnumerator__IteratorClass`1::System.Collections.IEnumerator.Reset()" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.Generic.Queue___GetEnumerator__IteratorClass`1::System.IDisposable.Dispose()" />*/
	dispose: function () {
	}
	/*<EndMethod Name="System.Void System.Collections.Generic.Queue___GetEnumerator__IteratorClass`1::System.IDisposable.Dispose()" />*/
	,
	/*<BeginProperty Name="System.Collections.Generic.Queue___GetEnumerator__IteratorClass.T System.Collections.Generic.Queue___GetEnumerator__IteratorClass`1::System.Collections.Generic.IEnumerator<T>.Current()" />*/
	current: function () {
		return this.__2__current;
	}
	/*<EndProperty Name="System.Collections.Generic.Queue___GetEnumerator__IteratorClass.T System.Collections.Generic.Queue___GetEnumerator__IteratorClass`1::System.Collections.Generic.IEnumerator<T>.Current()" />*/
	,
	/*<BeginProperty Name="System.Object System.Collections.Generic.Queue___GetEnumerator__IteratorClass`1::System.Collections.IEnumerator.Current()" />*/
	current1: function () {
		return $.ig.util.getBoxIfEnum(this.$t, this.__2__current);
	}
	/*<EndProperty Name="System.Object System.Collections.Generic.Queue___GetEnumerator__IteratorClass`1::System.Collections.IEnumerator.Current()" />*/
	,
	$type: new $.ig.Type('Queue___GetEnumerator__IteratorClass$1', $.ig.Object.prototype.$type, [$.ig.IEnumerator$1.prototype.$type.specialize(0), $.ig.IEnumerator.prototype.$type, $.ig.IDisposable.prototype.$type])
}, true);

/*<EndType Name="System.Collections.Generic.Queue___GetEnumerator__IteratorClass`1" />*/

/*<BeginType Name="System.Collections.Generic.Dictionary___ToEnumerableValues__IteratorClass`2" />*/

$.ig.util.defType('Dictionary___ToEnumerableValues__IteratorClass$2', 'Object', {
	$tKey: null,
	$tValue: null,
	__1__state: 0,
	__2__current: null,
	__array_5_0: null,
	__i_5_1: 0,
	__array_5_2: null,
	__i_5_3: 0,
	__pair_5_4: null,
	__pArray_5_5: null,
	__j_5_6: 0,
	__4__this: null,
	init: function ($tKey, $tValue, _1__state) {
		this.$tKey = $tKey;
		this.$tValue = $tValue;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$tKey, this.$tValue);
		}
		$.ig.Object.prototype.init.call(this);
		this.__1__state = _1__state;
	},
	/*<BeginMethod Name="System.Boolean System.Collections.Generic.Dictionary___ToEnumerableValues__IteratorClass`2::MoveNext()" />*/
	moveNext: function () {
		while (this.__1__state >= 0) {
			switch (this.__1__state) {
				case 0:
					this.__1__state = -1;
					if (this.__4__this.__assumeUniqueKeys) {
						this.__array_5_0 = $.ig.util.getArrayOfProperties(this.__4__this.__keysUnique);
						this.__i_5_1 = 0;
						this.__1__state = 1;
						break;
					}
					this.__array_5_2 = $.ig.util.getArrayOfProperties(this.__4__this.__values);
					this.__i_5_3 = 0;
					this.__1__state = 3;
					break;
				case 1:
					this.__1__state = -1;
					if (this.__i_5_1 < this.__array_5_0.length) {
						this.__2__current = this.__4__this.__values[this.__array_5_0[this.__i_5_1]];
						this.__1__state = 2;
						return true;
					}
					break;
				case 2:
					this.__1__state = -1;
					this.__i_5_1++;
					this.__1__state = 1;
					break;
				case 3:
					this.__1__state = -1;
					if (this.__i_5_3 < this.__array_5_2.length) {
						this.__pair_5_4 = this.__4__this.__values[this.__array_5_2[this.__i_5_3]];
						if (this.__pair_5_4.$isHashSetBucket) {
							this.__pArray_5_5 = this.__pair_5_4;
							this.__j_5_6 = 0;
							this.__1__state = 4;
							break;
						}
						this.__2__current = this.__pair_5_4.value;
						this.__1__state = 6;
						return true;
					}
					break;
				case 4:
					this.__1__state = -1;
					if (this.__j_5_6 < this.__pArray_5_5.length) {
						var subItem_ = this.__pArray_5_5[this.__j_5_6];
						this.__2__current = subItem_.value;
						this.__1__state = 5;
						return true;
					}
					this.__1__state = 6;
					break;
				case 5:
					this.__1__state = -1;
					this.__j_5_6++;
					this.__1__state = 4;
					break;
				case 6:
					this.__1__state = -1;
					this.__i_5_3++;
					this.__1__state = 3;
					break;
			}
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean System.Collections.Generic.Dictionary___ToEnumerableValues__IteratorClass`2::MoveNext()" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerator System.Collections.Generic.Dictionary___ToEnumerableValues__IteratorClass`2::System.Collections.Generic.IEnumerable<TValue>.GetEnumerator()" />*/
	getEnumerator: function () {
		var d__;
		if (this.__1__state == -2) {
			this.__1__state = 0;
			d__ = this;
		} else {
			d__ = new $.ig.Dictionary___ToEnumerableValues__IteratorClass$2(this.$tKey, this.$tValue, 0);
			d__.__4__this = this.__4__this;
		}
		return d__;
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerator System.Collections.Generic.Dictionary___ToEnumerableValues__IteratorClass`2::System.Collections.Generic.IEnumerable<TValue>.GetEnumerator()" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.Generic.Dictionary___ToEnumerableValues__IteratorClass`2::System.Collections.IEnumerator.Reset()" />*/
	reset: function () {
		throw new $.ig.NotSupportedException(1);
	}
	/*<EndMethod Name="System.Void System.Collections.Generic.Dictionary___ToEnumerableValues__IteratorClass`2::System.Collections.IEnumerator.Reset()" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.Generic.Dictionary___ToEnumerableValues__IteratorClass`2::System.IDisposable.Dispose()" />*/
	dispose: function () {
	}
	/*<EndMethod Name="System.Void System.Collections.Generic.Dictionary___ToEnumerableValues__IteratorClass`2::System.IDisposable.Dispose()" />*/
	,
	/*<BeginProperty Name="System.Collections.Generic.Dictionary___ToEnumerableValues__IteratorClass.TValue System.Collections.Generic.Dictionary___ToEnumerableValues__IteratorClass`2::System.Collections.Generic.IEnumerator<TValue>.Current()" />*/
	current: function () {
		return this.__2__current;
	}
	/*<EndProperty Name="System.Collections.Generic.Dictionary___ToEnumerableValues__IteratorClass.TValue System.Collections.Generic.Dictionary___ToEnumerableValues__IteratorClass`2::System.Collections.Generic.IEnumerator<TValue>.Current()" />*/
	,
	/*<BeginProperty Name="System.Object System.Collections.Generic.Dictionary___ToEnumerableValues__IteratorClass`2::System.Collections.IEnumerator.Current()" />*/
	current1: function () {
		return $.ig.util.getBoxIfEnum(this.$tValue, this.__2__current);
	}
	/*<EndProperty Name="System.Object System.Collections.Generic.Dictionary___ToEnumerableValues__IteratorClass`2::System.Collections.IEnumerator.Current()" />*/
	,
	$type: new $.ig.Type('Dictionary___ToEnumerableValues__IteratorClass$2', $.ig.Object.prototype.$type, [$.ig.IEnumerable$1.prototype.$type.specialize(1), $.ig.IEnumerable.prototype.$type, $.ig.IEnumerator$1.prototype.$type.specialize(1), $.ig.IEnumerator.prototype.$type, $.ig.IDisposable.prototype.$type])
}, true);

/*<EndType Name="System.Collections.Generic.Dictionary___ToEnumerableValues__IteratorClass`2" />*/

/*<BeginType Name="System.Collections.Generic.Dictionary___ToEnumerable__IteratorClass`2" />*/

$.ig.util.defType('Dictionary___ToEnumerable__IteratorClass$2', 'Object', {
	$tKey: null,
	$tValue: null,
	__1__state: 0,
	__2__current: null,
	__array_5_0: null,
	__i_5_1: 0,
	__array_5_2: null,
	__i_5_3: 0,
	__pair_5_4: null,
	__pArray_5_5: null,
	__j_5_6: 0,
	__4__this: null,
	init: function ($tKey, $tValue, _1__state) {
		this.$tKey = $tKey;
		this.$tValue = $tValue;
		if (!this.hasOwnProperty("$type")) {
			this.$type = this.$type.specialize(this.$tKey, this.$tValue);
		}
		this.__2__current = new $.ig.KeyValuePair$2(this.$tKey, this.$tValue);
		$.ig.Object.prototype.init.call(this);
		this.__1__state = _1__state;
	},
	/*<BeginMethod Name="System.Boolean System.Collections.Generic.Dictionary___ToEnumerable__IteratorClass`2::MoveNext()" />*/
	moveNext: function () {
		while (this.__1__state >= 0) {
			switch (this.__1__state) {
				case 0:
					this.__1__state = -1;
					if (this.__4__this.__assumeUniqueKeys) {
						this.__array_5_0 = $.ig.util.getArrayOfProperties(this.__4__this.__keysUnique);
						this.__i_5_1 = 0;
						this.__1__state = 1;
						break;
					}
					this.__array_5_2 = $.ig.util.getArrayOfProperties(this.__4__this.__values);
					this.__i_5_3 = 0;
					this.__1__state = 3;
					break;
				case 1:
					this.__1__state = -1;
					if (this.__i_5_1 < this.__array_5_0.length) {
						this.__2__current = new $.ig.KeyValuePair$2(this.$tKey, this.$tValue, 1, this.__4__this.__keysUnique[this.__array_5_0[this.__i_5_1]], this.__4__this.__values[this.__array_5_0[this.__i_5_1]]);
						this.__1__state = 2;
						return true;
					}
					break;
				case 2:
					this.__1__state = -1;
					this.__i_5_1++;
					this.__1__state = 1;
					break;
				case 3:
					this.__1__state = -1;
					if (this.__i_5_3 < this.__array_5_2.length) {
						this.__pair_5_4 = this.__4__this.__values[this.__array_5_2[this.__i_5_3]];
						if (this.__pair_5_4.$isHashSetBucket) {
							this.__pArray_5_5 = this.__pair_5_4;
							this.__j_5_6 = 0;
							this.__1__state = 4;
							break;
						}
						this.__2__current = new $.ig.KeyValuePair$2(this.$tKey, this.$tValue, 1, this.__pair_5_4.key, this.__pair_5_4.value);
						this.__1__state = 6;
						return true;
					}
					break;
				case 4:
					this.__1__state = -1;
					if (this.__j_5_6 < this.__pArray_5_5.length) {
						var subItem_ = this.__pArray_5_5[this.__j_5_6];
						this.__2__current = new $.ig.KeyValuePair$2(this.$tKey, this.$tValue, 1, subItem_.key, subItem_.value);
						this.__1__state = 5;
						return true;
					}
					this.__1__state = 6;
					break;
				case 5:
					this.__1__state = -1;
					this.__j_5_6++;
					this.__1__state = 4;
					break;
				case 6:
					this.__1__state = -1;
					this.__i_5_3++;
					this.__1__state = 3;
					break;
			}
		}
		return false;
	}
	/*<EndMethod Name="System.Boolean System.Collections.Generic.Dictionary___ToEnumerable__IteratorClass`2::MoveNext()" />*/
	,
	/*<BeginMethod Name="System.Collections.Generic.IEnumerator System.Collections.Generic.Dictionary___ToEnumerable__IteratorClass`2::System.Collections.Generic.IEnumerable<System.Collections.Generic.KeyValuePair<TKey,TValue>>.GetEnumerator()" />*/
	getEnumerator: function () {
		var d__;
		if (this.__1__state == -2) {
			this.__1__state = 0;
			d__ = this;
		} else {
			d__ = new $.ig.Dictionary___ToEnumerable__IteratorClass$2(this.$tKey, this.$tValue, 0);
			d__.__4__this = this.__4__this;
		}
		return d__;
	}
	/*<EndMethod Name="System.Collections.Generic.IEnumerator System.Collections.Generic.Dictionary___ToEnumerable__IteratorClass`2::System.Collections.Generic.IEnumerable<System.Collections.Generic.KeyValuePair<TKey,TValue>>.GetEnumerator()" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.Generic.Dictionary___ToEnumerable__IteratorClass`2::System.Collections.IEnumerator.Reset()" />*/
	reset: function () {
		throw new $.ig.NotSupportedException(1);
	}
	/*<EndMethod Name="System.Void System.Collections.Generic.Dictionary___ToEnumerable__IteratorClass`2::System.Collections.IEnumerator.Reset()" />*/
	,
	/*<BeginMethod Name="System.Void System.Collections.Generic.Dictionary___ToEnumerable__IteratorClass`2::System.IDisposable.Dispose()" />*/
	dispose: function () {
	}
	/*<EndMethod Name="System.Void System.Collections.Generic.Dictionary___ToEnumerable__IteratorClass`2::System.IDisposable.Dispose()" />*/
	,
	/*<BeginProperty Name="System.Collections.Generic.KeyValuePair System.Collections.Generic.Dictionary___ToEnumerable__IteratorClass`2::System.Collections.Generic.IEnumerator<System.Collections.Generic.KeyValuePair<TKey,TValue>>.Current()" />*/
	current: function () {
		return this.__2__current;
	}
	/*<EndProperty Name="System.Collections.Generic.KeyValuePair System.Collections.Generic.Dictionary___ToEnumerable__IteratorClass`2::System.Collections.Generic.IEnumerator<System.Collections.Generic.KeyValuePair<TKey,TValue>>.Current()" />*/
	,
	/*<BeginProperty Name="System.Object System.Collections.Generic.Dictionary___ToEnumerable__IteratorClass`2::System.Collections.IEnumerator.Current()" />*/
	current1: function () {
		return this.__2__current;
	}
	/*<EndProperty Name="System.Object System.Collections.Generic.Dictionary___ToEnumerable__IteratorClass`2::System.Collections.IEnumerator.Current()" />*/
	,
	$type: new $.ig.Type('Dictionary___ToEnumerable__IteratorClass$2', $.ig.Object.prototype.$type, [$.ig.IEnumerable$1.prototype.$type.specialize($.ig.KeyValuePair$2.prototype.$type.specialize(0, 1)), $.ig.IEnumerable.prototype.$type, $.ig.IEnumerator$1.prototype.$type.specialize($.ig.KeyValuePair$2.prototype.$type.specialize(0, 1)), $.ig.IEnumerator.prototype.$type, $.ig.IDisposable.prototype.$type])
}, true);

/*<EndType Name="System.Collections.Generic.Dictionary___ToEnumerable__IteratorClass`2" />*/


/*<BeginFooter/>*/
}));// REMOVE_FROM_COMBINED_FILES
/*<EndFooter/>*/

