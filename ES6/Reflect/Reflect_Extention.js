//Reflect.isExtensible(target)返回一个布尔值代表当前对象是否可以扩展,传入非对象参数，报错
//Reflect.preventExtensions(target)是对象变为不可扩展，返回一个布尔值，表示操作是否成功,传入非对象参数，报错
//是对象无法添加新属性
//分别对应Object.isExtensible(target),传入非对象参数，返回false
//Object.preventExtensions(target)，传入非对象参数，ES5环境报错，ES6环境返回传入参数



var obj = {
  value:1,
}
//旧写法
console.log("旧写法:" + Object.isExtensible(obj)); //旧写法:true

//新写法
console.log("新写法:" + Reflect.isExtensible(obj)); //新写法:true


//阻止扩展性

//旧写法
Object.preventExtensions(obj);
console.log("旧写法:" + Object.isExtensible(obj)); //旧写法:false

//新写法
Reflect.preventExtensions(obj);
console.log("新写法:" + Reflect.isExtensible(obj)); //新写法:false
