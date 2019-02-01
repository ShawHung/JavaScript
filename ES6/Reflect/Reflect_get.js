//Reflect.get(target,name,receiver)
//用于查找并返回target的name属性。
//第一个参数是目标对象,第二个参数是属性名，第三个参数是为可选对象。
var myObj1 = {
  name: "xiaohuang",
  age: 21,
  Job: "JS Engineer",
  sayName() {
  return this.name;
  }
}

console.log(Reflect.get(myObj1, "name"));//"xiaohuang"
console.log(Reflect.get(myObj1,"age"));//21
console.log(Reflect.get(myObj1,"Job"));//JS Engineer
console.log(Reflect.get(myObj1, "sayName")) //[Function: sayName]

//若name部署了读取函数（getter），则this绑定receiver

var myObj2 = {
  name: "xiaohuang",
  age: 21,
  Job: "JS Engineer",
  get sayName() {
    return this.name;
  }
}


var receiverObj1 = {
  name:"xiaowang",
}
console.log(Reflect.get(myObj2,"sayName",receiverObj1));//xiaowang