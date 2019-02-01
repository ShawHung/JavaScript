//Reflect.ownKeys(target)
//返回对象的所有属性
//等同于Object.getOwnPropertyNames和Object.getOwnPropertySymbols的和

var obj = {
  name:"xiaohuang",
  [Symbol('girl')]:"xiaowang",
}

console.log(Object.getOwnPropertyNames(obj)); //[ 'name' ]

console.log(Object.getOwnPropertySymbols(obj)); //[ Symbol(girl) ]

console.log(Reflect.ownKeys(obj)); //[ 'name', Symbol(girl) ]