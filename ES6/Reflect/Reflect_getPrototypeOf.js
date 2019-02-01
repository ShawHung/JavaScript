//Reflect.getPrototypeOf(obj)用于获取对象的__proto__属性
//对应Object.getPrototypeOf(obj)(区别是若参数不是对象旧方法会将其转化为对象，而reflect会报错。)

var arr = new Array();

//旧写法
console.log(Object.getPrototypeOf(arr) === Array.prototype);//true

//新写法
console.log(Reflect.getPrototypeOf(arr) ===Array.prototype);//true