//Command模式
//主要思想：提供一种分离职责的手段，这些职责包括从执行命令的任意地方发布命令以及将该职责转而委托给不同对象

(function () {
	var CarManager = {
		requestInfo: function (model,id) {
			return "The information for" + model +"with Id" + id;
		},
		buyCar: function (model,id) {
			return "You have successfully buy Item " + id + "a" + model;
		},
		arrangeView: function (model,id) {
			return "You have successfully booked a viewing of " + model + "(" + id + ")";
		}
	};
CarManager.execute = function (name) {
	return CarManager[name] && CarManager[name].apply(CarManager,[].slice.call(arguments,1));
}
var a = CarManager.execute("buyCar","BMW","00999");
console.log(a);
})();
