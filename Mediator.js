//中介者模式，它允许我们公开一个统一的接口，系统的不同部分可以通过该接口进行通信
var mediator = (function () {
	var topics = {};
	//订阅一个topic，提供一个回调函数，一旦topic被广播，就执行该回调函数
	var subscribe = function (topic,fn) {
		if (!topics[topic]) {
			topics[topic] = [];
		}
		topics[topic].push({context:this,callback:fn});
		return this;
	};
	//发布事件
	var publish = function (topic) {
		var args;
		if (!topics[topic]) {
			return false;
		}
		args = Array.prototype.slice.call(arguments,1);
		for(var i = 0;i < topics[topic].length; i ++) {
			var subscription = topics[topic][i];
			subscription.callback.apply(subscription.context,args);
		}
		return this;
	};
	return {
		Publish:publish,
		Subscribe:subscribe,
		installTo:function (obj) {
			obj.subscribe = subscribe;
			obj.publish = publish;
		}
	};
})();