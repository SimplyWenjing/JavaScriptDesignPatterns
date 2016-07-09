//原型模式
var myFriend = {
	name: "jay",
	sing: function () {
		console.log("Hello,I can sing hipop.");
	},
	dance: function () {
		console.log("oh,no,I can not dance.");
	}
};

var yourFriend = Object.create(myFriend);
console.log(yourFriend.name);
