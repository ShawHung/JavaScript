//Reflect.has(obj,name);
//返回一个布尔值，相当于in操作符
var obj = {
  name :"xiaohuang",
}

//旧写法
console.log('name' in obj);//true


//新写法
console.log(Reflect.has(obj,'name'));//true