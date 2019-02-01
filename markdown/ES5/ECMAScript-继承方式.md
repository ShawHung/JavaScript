0### ECMAScript继承方式

>借用构造函数
```
function supType()){
  this.name = ["xiao","wang","huang"];
}

function subType() {
  supType.call(this);
}

var person1 = new subType();
person1.name.push("yu");
console.log(person1.name);//["xiao","wang","huang","yu"]

var person2 = new subType();
console.log(person2.name);//["xiao","wang","huang"]
```
借用构造函数是通过call()方法或apply()方法在子类型构造函数中到用超类型构造函数。

（1）向超类型传递参数
```
function supType(name){
  this.name = name;
}

function subType() {
  supType.call(this,"xiao");
  this.age = 20;
}

var person1 = new subType();
console.log(person1.name);//"xiao"
console.log(person1.age);//20
```
(2)**存在的问题**：方法在构造函数中定义，无法进行函数复用，并且超类型原型中的方法对子类不可见。

>组合继承
```
function supType(name){
  //定义属性
  this.name = name;
  this.friends = ["Mike","Greg","Kobe"];
}

supType.prototype.sayName = function () {
  //定义方法
  return this.name;
}

function subType(name,age) {
  //继承属性，借用构造函数模式，实例相互不干扰
  supType.call(this,name);
  //添加属性
  this.age = age;
}
//继承方法
subType.prototype = new supType();
subType.prototype.constructor = subType;
//添加方法
subType.prototype.myAge = function(){
  return this.age;
}

var person1 = new subType("Shaw",20);
person1.friends.push("James");
console.log(person1.sayName());//Shaw
console.log(person1.myAge());//20
console.log(person1.friends); //["Mike","Greg","Kobe","James"]
console.log(person1.age);//20

var person2 = new subType("Hung", 22);
console.log(person2.sayName());//Hung
console.log(person2.myAge());//22
console.log(person2.friends);//["Mike","Greg","Kobe"]
console.log(person2.age);//22
```

结合使用原型链和借用构造函数模式实现继承。通过原型链来继承原型的属性和方法，通过借用构造函数来继承实例的属性和方法。

>原型式继承

使用Object.create()方法来实现。这个方法接收两个参数：一
个用作新对象原型的对象和（可选的）一个为新对象定义额外属性的对象。
```
function Object(o){
  function F(){};
  F.prototype = o;
  return new F();
}
```
通过在函数体内创建一个构造函数并把传入的对象o赋给该构造函数的原型。最后返回该构造函数的新实例来实现继承。这就要求必须传入一个对象。
我的理解是内部构造函数拥有传入对象的所有属性和方法。后面返回实例，添加的方法和属性都会被新实例继承。
```
var overwatch = {
  level:"master",
  Group:["genji","mercy","widow"]
};

var player1 = Object.create(overwatch);

console.log(player1.level); //master
console.log(player1.Group); //[ 'genji', 'mercy', 'widow' ]
player1.name = "xiaohuang";
console.log(player1.name); //xiaohuang
player1.Group.push("rein");
console.log(player1.Group); //[ 'genji', 'mercy', 'widow', 'rein' ]

var player2 = Object.create(overwatch);
console.log(player2.level); //master
console.log(player2.Group); //[ 'genji', 'mercy', 'widow', 'rein' ]
player2.like = "tank";
player2.Group.push("roadhog");

console.log(player2.like);//tank
console.log(player1.like);//undefiend(实例共享传入对象属性，like是实例属性无法共享)
console.log(player1.Group);  //[ 'genji', 'mercy', 'widow', 'rein', 'roadhog' ]
console.log(player2.Group); //[ 'genji', 'mercy', 'widow', 'rein', 'roadhog' ]
```

>寄生式继承

寄生式继承的思路与寄生构造函数和工厂模式类似，即创建一个仅用于封装继承过程的函数，该
函数在内部以某种方式来增强对象，最后再像真地是它做了所有工作一样返回对象。
```
function m(a){
  var b = object(a);
  a.c=function(){
    do something;
  };
  return b;
}
```
>寄生组合式继承

通过借用构造函数来继承属性，通过原型链的混成形式来继承方法。其背
后的基本思路是：不必为了指定子类型的原型而调用超类型的构造函数，我们所需要的无非就是超类型
原型的一个副本而已。本质上，就是使用寄生式继承来继承超类型的原型，然后再将结果指定给子类型
的原型。

```
function inheritPrototype(SubType, SupType){
  var proto = object(SupType.prototype);
  proto.constructor = SubType;
  SubType.prototype = proto;
}

function SupType(name){
this.name = name;
this.colors = ["red", "blue", "green"];
}

SupType.prototype.sayName = function(){
  return this.name;
};

function SubType(name, age){
  SupType.call(this, name);
  this.age = age;
}

inheritPrototype(SubType, SupType);

SubType.prototype.sayAge = function(){
  return this.age;
};
```
