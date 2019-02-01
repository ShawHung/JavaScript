//对于类数组对象可以直接调用数组的iterator接口进行[Symbol.iterator]的部署
let arrayLike = {
  0:"hello",
  1:"world",
  2:"xiaohuang",
  length:3,
  [Symbol.iterator]:Array.prototype[Symbol.iterator]
}

for(var value of arrayLike){
  console.log(value);//hello world xiaohuang
}

//对普通对象无效
//如果[Symbol.iterator]返回的不是遍历器对象就报错

