var Car = function (settings) {
	this.model = settings.model;
	this.color = settings.color; 
};

//Mixin,用于让其他子类继承的
var Mixin = function () {};
Mixin.prototype = {
	driveForward: function () {
		console.log("drive forward");
	},
	driveBackward: function () {
		console.log("drive backward");
	}
};

//通过一个方法将现有对象扩展到另一个对象上！！！！
function extend (receivingClass,givingClass) {
	for (var methodName in givingClass.prototype){
		if(! receivingClass.prototype[methodName]){
			receivingClass.prototype[methodName] = givingClass.prototype[methodName];
		}
	}
}
//使用
extend(Car,Mixin);

//创建一个Car
var myCar = new Car( {
	model: "Ford",
	color: "red"
});

myCar.driveForward();//drive forward

