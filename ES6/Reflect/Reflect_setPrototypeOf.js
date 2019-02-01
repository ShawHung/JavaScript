var arr = new Array();

//旧写法
Object.setPrototypeOf(arr,Function.prototype);
console.log(Object.getPrototypeOf(arr)===Function.prototype);//true

//新写法
console.log(Reflect.setPrototypeOf(arr,Object.prototype));

console.log(Reflect.getPrototypeOf(arr, Object.prototype) === Object.prototype);

//区别是旧写法如果参数不是对象，会返回参数本身，而Reflect报错
//如果参数是null，undefined均报错