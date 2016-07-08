//Publish/Subscribe 模式，展示订阅和发布的核心概念，以及取消订阅的概念。
var pubsub = {};

(function (q) {
	var topics = {};
	var subUid = -1;
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

var messageLogger = function (topics,data) {
	console.log("Logging:" + topics +":" + data);
};
var subscription = pubsub.subscribe("vicky",messageLogger);
pubsub.publish("vicky","Come on!");
