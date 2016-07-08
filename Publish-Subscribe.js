//Publish/Subscribe 模式，展示订阅和发布的核心概念，以及取消订阅的概念。
var pubsub = {};

(function (q) {
	var topics = {};
	var subUid = -1;
	//发布或广播事件，包含特定的topic名称和参数
	q.publish  = function (topic,args) {
		if (!topics[topic]) {
			return false;
		}
		var subscribers = topics[topic];
		var len         = subscribers ? subscribers.length : 0;
		while (len --) {
			subscribers[len].func(topic,args);
		}
		return this;
	};
	//通过特定的名称和回调函数订阅时间，topic/event触发时执行事件
	q.subscribe = function (topic,func) {
		if (!topics[topic]) {
			topics[topic] = [];
		}
		var token = (++subUid).toString();
		topics[topic].push({
			token: token,
			func : func
		});
		return token;
	};
	//基于订阅上的标记引用，通过特定topic取消订阅
	q.unsubscribe = function (token) {
		for(var m in topics){
			if (topics[m]) {
				for (var i = 0, j = topics[m].length; i < j; i++) {
					if (topics[m][j].token === token) {
						topics[m].splice(i,1);
						return token;
					}

				}
			}
		}
		return this;
	};
})(pubsub);
//消息记录器记录所有通过订阅者接收到的主题和数据
var messageLogger = function (topics,data) {
	console.log("Logging:" + topics +":" + data);
};
//订阅者监听订阅的topic，一旦该topic广播一个通知，就调用回调函数
var subscription = pubsub.subscribe("vicky",messageLogger);
//发布者发布topic
pubsub.publish("vicky","Come on!");
