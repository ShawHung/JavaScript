//Reflect.defineProperty(target,propertyName,attributes)，第一个参数不是对象则报错
//对应Object.defineProperty(target,propertyName,attributes)//设置属性

//Reflect.getOwnPropertyDescriptor(target,propertyKey)第一个参数不是对象则报错
//对应Object.getOwnPropertyDescriptor(target,propertyKey)获取属性对象，第一个参数不是对象返回undefined

var obj = {};

//旧写法设置
Object.defineProperty(obj,'name',{
  value:"xiaohuang",
  configurable:true,
  writable:true,
  enumerable:true,
})
console.log(obj.name);//xia,"name"

//旧写法获取
console.log(Object.getOwnPropertyDescriptor(obj,"name"));
// {
//   value: 'xiaohuang',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }


//新写法设置
Reflect.defineProperty(obj,'age',{
   value: 21,
   configurable: true,
})

//新写法获取
console.log(Reflect.getOwnPropertyDescriptor(obj,'age'));

// {
//   value: 21,
//   writable: false,
//   enumerable: false,
//   configurable: true
// }