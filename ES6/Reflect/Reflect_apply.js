//Reflect.apply(func,thisArg,args)
//等同于Function.prototype.apply.call(func,thisArg,args);用于绑定this对象执行函数

//旧写法
let arr1 = [1,23,4,5,6];
var m = Function.prototype.call.apply(Math.max,arr1);
console.log(m);//23

//相当于
var m2 = Math.max.apply(arr1,arr1);
console.log(m2);//23
//新写法
var m3 = Reflect.apply(Math.max,Math,arr1);
console.log(m3);

//另外一个例子
var name = "window";
let obj1 = {
  name:"xiaohuang",
  length:1,
  sayName:function() {
    return this.name;
  }
}

function f2() {
  return obj1.sayName();
}

var o1 = Function.prototype.call.apply(f2,obj1);
console.log(o1);//"xiaohuang"

//相当于
var o2 =f2.call(obj1);
console.log(o2);//"xiaohuang"

//新写法
var o3 = Reflect.apply(f2,obj1,obj1);
console.log(o3);//"xiaohuang"




