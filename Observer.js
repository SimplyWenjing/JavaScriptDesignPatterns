//观察者模式
function ObserverList () {
	this.observerList = [];
}

ObserverList.prototype.Add    = function (obj) {
	return this.observerList.push(obj);
};
ObserverList.prototype.Empty  = function () {
	this.observerList = [];
};
ObserverList.prototype.Count  = function () {
	return this.observerList.length;
};
ObserverList.prototype.Insert = function (obj,index) {
	var pointer = -1;
	if (index === 0) {
		this.observerList.unshift(obj);
		pointer = index;
	} else if (index === this.observerList.length) {
		this.observerList.push(obj);
		pointer = index;
	}
};
ObserverList.prototype.RemoveIndexAt = function (index) {
	if (index === 0) {
		this.observerList.shift();
	} else if(index === this.observerList.length-1) {
		this.observerList.pop();
	}
};
ObserverList.prototype.GetObserverAt = function (index) {
	if (index > -1 && index < this.observerList.length) {
		return this.observerList[index];
	}
};
ObserverList.prototype.IndexOf = function(obj,startIndex) {
	var i       = startIndex;
	var pointer = -1;
	for(i;i < this.observerList.length; i++) {
		if (observerList[i] === obj) {
			pointer = i;
		}
	}
	return pointer;
};
//扩展对象
function extend (obj,extension) {
	for(var key in obj) {
		extension[key] = obj[key];
	}
}
//目标
function Subject () {
	this.observers = new ObserverList ();
}
Subject.prototype.AddObserver = function (observer) {
	this.observers.Add(observer);
};
Subject.prototype.RemoveObserver = function (observer) {
	this.observers.RemoveIndexAt(this.observers.IndexOf(observer,0));
};
Subject.prototype.Notify = function (context) {
	var observerCount = this.observers.Count();
	for( var i = 0; i < observerCount; i ++) {
		this.observers.GetObserverAt(i).Update(context);
		console.log(222);
	}
};

function Observer () {
	this.Update = function () {
		console.log(1);
	}
}
