//Module模式的实现
	var testModule = (function () {
		var counter = 0;//私有变量

		return {
			incrementCounter: function () {//闭包
				return ++ counter;//共有方法访问私有变量
			},
			resetCounter: function () {//闭包
				console.log("counter value prior to reset:" + counter);
				counter = 0;
			}
		};
	})();

	testModule.incrementCounter();
	testModule.resetCounter();
//Module实现购物车 
	var basketModule = (function () {
		//私有
		var basket = [];//存放商品
		function doSomethingPrivate () {
			// do something
		}

		//返回一个公有的对象
		return {
			//添加item到购物车
			addItem: function (item) {
				basket.push(item);
			},
			//获取购物车里item的数量
			getItemCount: function () {
				return basket.length;
			},
			//获取购物车里item的总价格
			getTotalMoney: function () {
				var itemCount = this.getItemCount();
				var total     = 0;
				for(var i = 0; i < itemCount; i ++) {
					total += basket[i].price;
				}
				return total;
			}
		};
	}) ();
	//basketModule 返回了一个拥有公用API的对象

	basketModule.addItem({
		item : "bread",
		price: 0.5
	});
	basketModule.addItem({
		item : "egg",
		price: 1.0
	});

	var totalMoney = basketModule.getTotalMoney();
	console.log(totalMoney);
	//console.log(basket);