//工厂模式
//工厂模式可以提供一个通用的接口来创建对象，它不显式的要求使用一种构造函数

//定义构造函数
function Car (options) {
	this.doors = options.doors || 4;
	this.state = options.state || "brand new";
	this.color = options.color || "red";
}
function Truck (options) {
	this.state     = options.state || "used";
	this.wheelSize = options.wheelSize || "large";
	this.color     = options.color || "blue";
}

//定义工厂
function VehicleFactory () {}
VehicleFactory.prototype.vehicleClass = Car;
VehicleFactory.prototype.createVehicle = function (options) {
	if (options.vehicleType === "Car") {
		this.vehicleClass = Car;
	} else {
		this.vehicleClass = Truck;
	}
	return new this.vehicleClass(options);
};

var carFactory = new VehicleFactory();
var car = carFactory.createVehicle({
	vehicleType: "war",
	color      : "black",
	doors      : 6
});

console.log(car);
