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

