//Reflect.set(target,name,value,receiver)

//用于设置target对象的name属性等于value,target不是对象则报错。
var obj = {
  name :"xiaohuang",
  age:21,
}
console.log("设置之前："+obj.name);
console.log("设置之前："+obj.age);
// 设置之前： xiaohuang
// 设置之前： 21

Reflect.set(obj,"name","xiaowang");
Reflect.set(obj,"age",22);

console.log("设置之后：" + obj.name);
console.log("设置之后：" + obj.age);
// 设置之后： xiaowang
// 设置之后： 22

//如果name设置成了赋值函数，则this绑定receciver
var obj1 = {
  name: "xiaohuang",
  age: 21,
  set setAge(value){
    return this.age = value;
  }
}

var recevicerObj = {
  age:20,
}

Reflect.set(obj1,"age",22,recevicerObj);
console.log("Age:"+obj1.age);//Age:21
console.log("Age:" + recevicerObj.age);//Age:22

//Reflect.set会触发Proxy.defineProperty拦截
var p = {
  name:"a",
}

var handler = {
  set(target,name,value,receiver){
    console.log("set");
    Reflect.set(target,name,value,receiver);
  },
  defineProperty(target,name,attribute){
    console.log("defineProperty");
    Reflect.defineProperty(target,name,attribute);
  }
}
var o = new Proxy(p,handler);
o.name = "xiao"; //set,defineProperty