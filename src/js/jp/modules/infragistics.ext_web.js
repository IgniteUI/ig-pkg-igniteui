/*!@license
* Infragistics.Web.ClientUI infragistics.ext_web.js 17.1.20171.1012
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
*     infragistics.ext_threading.js
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
			'./infragistics.ext_threading'
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
$.ig.globalDefs.$$b = $$t;
$$0 = $.ig.globalDefs.$$0;
$$1 = $.ig.globalDefs.$$1;
$$4 = $.ig.globalDefs.$$4;
$$6 = $.ig.globalDefs.$$6;
$$7 = $.ig.globalDefs.$$7;
$$8 = $.ig.globalDefs.$$8;
$$9 = $.ig.globalDefs.$$9;
$.ig.$currDefinitions = $$t;
$.ig.util.bulkDefine([
"ICredentials:c",
"NetworkCredential:d",
"UploadDataCompletedEventHandler:e",
"UploadStringCompletedEventHandler:g"]);
/*<BeginType Name="System.UriParser" />*/

$.ig.util.defType('UriParser', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Boolean System.UriParser::IsKnownScheme(System.String)" />*/
	isKnownScheme: function (schemeName) {
		return $.ig.UriParser.prototype.__knownSchemes.contains(schemeName.toLowerCase());
	}
	/*<EndMethod Name="System.Boolean System.UriParser::IsKnownScheme(System.String)" />*/
	,
	$type: new $.ig.Type('UriParser', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.UriParser" />*/

/*<BeginType Name="System.Web.Script.Serialization.JavaScriptSerializer" />*/

$.ig.util.defType('JavaScriptSerializer', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Object System.Web.Script.Serialization.JavaScriptSerializer::DeserializeObject(System.String)" />*/
	deserializeObject: function (input) {
		var text_ = input;
		return JSON.parse(text_);
	}
	/*<EndMethod Name="System.Object System.Web.Script.Serialization.JavaScriptSerializer::DeserializeObject(System.String)" />*/
	,
	/*<BeginMethod Name="System.String System.Web.Script.Serialization.JavaScriptSerializer::Serialize(System.Object)" />*/
	serialize: function (obj) {
		var value_ = obj;
		return JSON.stringify(value_);
	}
	/*<EndMethod Name="System.String System.Web.Script.Serialization.JavaScriptSerializer::Serialize(System.Object)" />*/
	,
	$type: new $.ig.Type('JavaScriptSerializer', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.Web.Script.Serialization.JavaScriptSerializer" />*/

/*<BeginType Name="System.Net.BinaryFileDownloader" />*/

$.ig.util.defType('BinaryFileDownloader', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
	},
	/*<BeginMethod Name="System.Void System.Net.BinaryFileDownloader::DownloadFile(System.String, System.Action, System.Action)" />*/
	downloadFile: function (uri_, callback_, errorCallback_) {
		$.ig.util.getBinary(uri_, callback_, errorCallback_);
	}
	/*<EndMethod Name="System.Void System.Net.BinaryFileDownloader::DownloadFile(System.String, System.Action, System.Action)" />*/
	,
	$type: new $.ig.Type('BinaryFileDownloader', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.Net.BinaryFileDownloader" />*/

/*<BeginType Name="System.Net.ICredentials" />*/

$.ig.util.defType('ICredentials', 'Object', {
	$type: new $.ig.Type('ICredentials', null)
}, true);

/*<EndType Name="System.Net.ICredentials" />*/

/*<BeginType Name="System.Net.NetworkCredential" />*/

$.ig.util.defType('NetworkCredential', 'Object', {
	init: function (initNumber, userName, password) {
		if (initNumber > 0) {
			switch (initNumber) {
				case 1:
					this.init1.apply(this, arguments);
					break;
			}
			return;
		}
		$.ig.NetworkCredential.prototype.init1.call(this, 1, userName, password, String.empty());
	},
	init1: function (initNumber, userName, password, domain) {
		$.ig.Object.prototype.init.call(this);
		this.userName(userName);
		this.password(password);
		this.domain(domain);
	},
	/*<BeginMethod Name="System.Net.NetworkCredential System.Net.NetworkCredential::GetCredential(System.Uri, System.String)" />*/
	getCredential: function (uri, authType) {
		return this;
	}
	/*<EndMethod Name="System.Net.NetworkCredential System.Net.NetworkCredential::GetCredential(System.Uri, System.String)" />*/
	,
	_userName: null,
	/*<BeginProperty Name="System.String System.Net.NetworkCredential::UserName()" />*/
	userName: function (value) {
		if (arguments.length === 1) {
			this._userName = value;
			return value;
		} else {
			return this._userName;
		}
	}
	/*<EndProperty Name="System.String System.Net.NetworkCredential::UserName()" />*/
	,
	_password: null,
	/*<BeginProperty Name="System.String System.Net.NetworkCredential::Password()" />*/
	password: function (value) {
		if (arguments.length === 1) {
			this._password = value;
			return value;
		} else {
			return this._password;
		}
	}
	/*<EndProperty Name="System.String System.Net.NetworkCredential::Password()" />*/
	,
	_domain: null,
	/*<BeginProperty Name="System.String System.Net.NetworkCredential::Domain()" />*/
	domain: function (value) {
		if (arguments.length === 1) {
			this._domain = value;
			return value;
		} else {
			return this._domain;
		}
	}
	/*<EndProperty Name="System.String System.Net.NetworkCredential::Domain()" />*/
	,
	$type: new $.ig.Type('NetworkCredential', $.ig.Object.prototype.$type, [$.ig.ICredentials.prototype.$type])
}, true);

/*<EndType Name="System.Net.NetworkCredential" />*/

/*<BeginType Name="System.Net.UploadDataCompletedEventArgs" />*/

$.ig.util.defType('UploadDataCompletedEventArgs', 'AsyncCompletedEventArgs', {
	_m_Result: null,
	init: function (result, exception, cancelled, userToken) {
		$.ig.AsyncCompletedEventArgs.prototype.init.call(this, exception, cancelled, userToken);
		this._m_Result = result;
	},
	/*<BeginProperty Name=" System.Net.UploadDataCompletedEventArgs::Result()" />*/
	result: function () {
		this.raiseExceptionIfNecessary();
		return this._m_Result;
	}
	/*<EndProperty Name=" System.Net.UploadDataCompletedEventArgs::Result()" />*/
	,
	$type: new $.ig.Type('UploadDataCompletedEventArgs', $.ig.AsyncCompletedEventArgs.prototype.$type)
}, true);

/*<EndType Name="System.Net.UploadDataCompletedEventArgs" />*/

/*<BeginType Name="System.Net.UploadStringCompletedEventArgs" />*/

$.ig.util.defType('UploadStringCompletedEventArgs', 'AsyncCompletedEventArgs', {
	__result: null,
	init: function (result, exception, cancelled, userToken) {
		$.ig.AsyncCompletedEventArgs.prototype.init.call(this, exception, cancelled, userToken);
		this.__result = result;
	},
	/*<BeginProperty Name="System.String System.Net.UploadStringCompletedEventArgs::Result()" />*/
	result: function () {
		this.raiseExceptionIfNecessary();
		return this.__result;
	}
	/*<EndProperty Name="System.String System.Net.UploadStringCompletedEventArgs::Result()" />*/
	,
	$type: new $.ig.Type('UploadStringCompletedEventArgs', $.ig.AsyncCompletedEventArgs.prototype.$type)
}, true);

/*<EndType Name="System.Net.UploadStringCompletedEventArgs" />*/

/*<BeginType Name="System.Net.WebClient" />*/

$.ig.util.defType('WebClient', 'Object', {
	init: function () {
		$.ig.Object.prototype.init.call(this);
		this.headers(new $.ig.WebHeaderCollection());
	},
	_encoding: null,
	/*<BeginProperty Name="System.Text.Encoding System.Net.WebClient::Encoding()" />*/
	encoding: function (value) {
		if (arguments.length === 1) {
			this._encoding = value;
			return value;
		} else {
			return this._encoding;
		}
	}
	/*<EndProperty Name="System.Text.Encoding System.Net.WebClient::Encoding()" />*/
	,
	_headers: null,
	/*<BeginProperty Name="System.Net.WebHeaderCollection System.Net.WebClient::Headers()" />*/
	headers: function (value) {
		if (arguments.length === 1) {
			this._headers = value;
			return value;
		} else {
			return this._headers;
		}
	}
	/*<EndProperty Name="System.Net.WebHeaderCollection System.Net.WebClient::Headers()" />*/
	,
	_credentials: null,
	/*<BeginProperty Name="System.Net.ICredentials System.Net.WebClient::Credentials()" />*/
	credentials: function (value) {
		if (arguments.length === 1) {
			this._credentials = value;
			return value;
		} else {
			return this._credentials;
		}
	}
	/*<EndProperty Name="System.Net.ICredentials System.Net.WebClient::Credentials()" />*/
	,
	uploadStringCompleted: null,
	/*<BeginMethod Name="System.Void System.Net.WebClient::UploadStringAsync(System.Uri, System.String, System.String, System.Object)" />*/
	uploadStringAsync: function (address, method, data, userData) {
		var $self = this;
		this.uploadStringTaskAsync(address, method, data).continueWith1(function (t) {
			if ($self.uploadStringCompleted != null) {
				var result = null;
				var exception = null;
				try {
					result = t.result();
				}
				catch (e_) {
					exception = e_;
				}
				$self.uploadStringCompleted($self, new $.ig.UploadStringCompletedEventArgs(result, exception, t.status() == $.ig.TaskStatus.prototype.canceled, userData));
			}
		});
	}
	/*<EndMethod Name="System.Void System.Net.WebClient::UploadStringAsync(System.Uri, System.String, System.String, System.Object)" />*/
	,
	/*<BeginMethod Name="System.ThreadingTasks.Task System.Net.WebClient::UploadStringTaskAsync(System.Uri, System.String, System.String)" />*/
	uploadStringTaskAsync: function (address, method, data) {
		var url_ = address.value();
		var method_ = method;
		var data_ = data;
		var contentType_ = this.headers().item("Content-Type");
		var credentials_ = this.credentials();
		var promise = $.ig.util.ajax(url_, contentType_, data_, method_, credentials_);
		return new $.ig.Task$1(String, promise, null);
	}
	/*<EndMethod Name="System.ThreadingTasks.Task System.Net.WebClient::UploadStringTaskAsync(System.Uri, System.String, System.String)" />*/
	,
	uploadDataCompleted: null,
	/*<BeginMethod Name="System.Void System.Net.WebClient::UploadDataAsync(System.Uri, System.String, System.String, System.Object)" />*/
	uploadDataAsync: function (address, method, data, userData) {
		var $self = this;
		this.uploadDataTaskAsync(address, method, data).continueWith1(function (t) {
			if ($self.uploadDataCompleted != null) {
				var result = null;
				var exception = null;
				try {
					result = t.result();
				}
				catch (e_) {
					exception = e_;
				}
				$self.uploadDataCompleted($self, new $.ig.UploadDataCompletedEventArgs(result, exception, t.status() == $.ig.TaskStatus.prototype.canceled, userData));
			}
		});
	}
	/*<EndMethod Name="System.Void System.Net.WebClient::UploadDataAsync(System.Uri, System.String, System.String, System.Object)" />*/
	,
	/*<BeginMethod Name="System.ThreadingTasks.Task System.Net.WebClient::UploadDataTaskAsync(System.Uri, System.String, System.String)" />*/
	uploadDataTaskAsync: function (address, method, data) {
		var url_ = address.value();
		var method_ = method;
		var data_ = data;
		var contentType_ = this.headers().item("Content-Type");
		var credentials_ = this.credentials();
		var promise = $.ig.util.ajax(url_, contentType_, data_, method_, credentials_);
		return new $.ig.Task$1(Array, promise, null);
	}
	/*<EndMethod Name="System.ThreadingTasks.Task System.Net.WebClient::UploadDataTaskAsync(System.Uri, System.String, System.String)" />*/
	,
	/*<BeginMethod Name="System.Void System.Net.WebClient::OnSuccess(System.ThreadingTasks.TaskCompletionSource, System.Object, System.Object, System.Object)" />*/
	onSuccess: function (tcs, data, textStatus, jqXHR) {
		tcs.setResult(data);
	}
	/*<EndMethod Name="System.Void System.Net.WebClient::OnSuccess(System.ThreadingTasks.TaskCompletionSource, System.Object, System.Object, System.Object)" />*/
	,
	/*<BeginMethod Name="System.Void System.Net.WebClient::OnError(System.ThreadingTasks.TaskCompletionSource, System.Object, System.Object, System.Object)" />*/
	onError: function (tcs, jqXHR, textStatus, errorThrown) {
		tcs.setException(new $.ig.Error(1, errorThrown));
	}
	/*<EndMethod Name="System.Void System.Net.WebClient::OnError(System.ThreadingTasks.TaskCompletionSource, System.Object, System.Object, System.Object)" />*/
	,
	$type: new $.ig.Type('WebClient', $.ig.Object.prototype.$type)
}, true);

/*<EndType Name="System.Net.WebClient" />*/

/*<BeginType Name="System.Net.WebHeaderCollection" />*/

$.ig.util.defType('WebHeaderCollection', 'NameValueCollection', {
	init: function () {
		$.ig.NameValueCollection.prototype.init.call(this);
	},
	$type: new $.ig.Type('WebHeaderCollection', $.ig.NameValueCollection.prototype.$type)
}, true);

/*<EndType Name="System.Net.WebHeaderCollection" />*/

/*<BeginStatics Name="System.UriParser" />*/

$.ig.UriParser.prototype.__knownSchemes = new $.ig.List$1(String, 1, [ "http", "https", "ws", "wss", "ftp", "file", "gopher", "nntp", "news", "mailto", "uuid", "telnet", "ldap", "net.tcp", "net.pipe" ]);
/*<EndStatics Name="System.UriParser" />*/


/*<BeginFooter/>*/
}));// REMOVE_FROM_COMBINED_FILES
/*<EndFooter/>*/

