function* objectEntries(obj){
  let propKeys =Reflect.ownKeys(obj)

  for(let propKey of propKeys){
    yield [propKey,obj[propKey]]
  }
}

let obj1 = {name:"xiaohuang",age:21}


for(let [key,value] of objectEntries(obj1)){
  console.log(`${key}:${value}`)
}
// name: xiaohuang
// age: 21