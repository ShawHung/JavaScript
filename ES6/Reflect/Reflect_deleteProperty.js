//Reflect.deleteProperty(obj,name)
//用于删除对象属性，等同于delete obj[name]

var obj1 = {
  name:"xiaohuang",
}

//旧写法
console.log("删除前：" + obj1.name); //删除前：xiaohuang
delete obj1.name;
console.log("删除后：" + obj1.name); //删除后：undefined


var obj2 = {
  name: "xiaohuang",
}

//新写法
console.log("删除前：" + obj2.name); //删除前：xiaohuang
Reflect.deleteProperty(obj2,'name');
console.log("删除后：" + obj2.name); //删除后：undefined