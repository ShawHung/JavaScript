//一般情况下返回对象的方法名
var person = {
  name :"xioahuang",
  SayName(){
    console.log(this.name);
  }
}
console.log("name属性是："+person.SayName.name);


//getter 和 setter 函数name属性在属性描述对象get和set上，前面需要加上get和set
var obj = {
  get foo(){},
  set foo(x){}
}

const des = Object.getOwnPropertyDescriptor(obj,"foo");
console.log(des.get.name); //get foo
console.log(des.set.name); //set foo


//bind()方法创造的函数在前面加上bound和原函数名字，Function构造函数创造的函数name属性返回"anonymous"
//bind方法
var doSomething = function () {
  return "hello world";
}
console.log(doSomething.bind().name); //bound doSomething

//Function
console.log((new Function()).name); //anonymous


//Symbol值返回Symbol值的描述

const key1 = Symbol("Hello");
const key2 = Symbol();

var obj2 = {
  [key1](){},
  [key2](){}
}
console.log(obj2[key1].name);
console.log(obj2[key2].name);