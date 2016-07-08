//揭示模块模式，能够在私有范围内简单定义所有的函数和方法，并返回一个匿名对象，它拥有指向私有函数的引用。
//一个RevealingModule 
var myRevealingModule = function () {
	var privateVar = "Vicky";
	var publicVar  = "Hello,here!";

	function privateFunction () {
		console.log("Name:" + privateVar);
	}
	function publicSetName (strName) {
		privateVar = strName;
	}
	function publicGetName () {
		privateFunction();
	}

	//返回公有指针指向私有函数和属性
	return {
		setName : publicSetName,
		greeting: publicVar,
		getName : publicGetName
	};
} ();

myRevealingModule.setName("jay");
myRevealingModule.getName();
console.log(myRevealingModule.greeting);