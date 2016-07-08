//单例模式。在JavaScript中，Singleton充当共享资源命名空间，哦那个全局命名空间中隔离出代码实现，从而为函数提供单一访问点。

var SingletonTester = (function () {
	function Singleton (options) {
		//options:包含Singleton所需配置信息的对象，eg. var options = {name:"test",pointX=5}
		options     = options || {};
		this.name   = options.name ||"SingletonTester";
		this.pointX = options.pointX || 5;
		this.pointY = options.pointY || 10;
	}
	var instance;
	var _static = {
		name: "SingletonTester",
		getInstance: function (options) {
			if (instance === undefined) {
				instance = new Singleton (options);
			}
			return instance;
		}
	};
	return _static;
}) ();

var singletonTest = SingletonTester.getInstance({
	name  : "vicky",
	pointX: 20
});
console.log(singletonTest);