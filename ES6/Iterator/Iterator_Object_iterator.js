//构造函数
function Obj(value){
  this.value = value
  this.next = null
}

//部署iterator接口（实例方法）
Obj.prototype[Symbol.iterator] = function(){
  var iterator = {next:next}//返回一个遍历器对象，对象的next属性返回next函数的返回值
  var current = this

  function next(){
    if(current){
      //如果有下一个可遍历对象
      var value = current.value
      current = current.next//指针指向当前遍历对象下一个可遍历对象
      return{value:value,done:false}
    }else{
      return {done:true}
    }

  }
  return iterator//返回遍历器对象，此时指针已经指向下一个对象
}

let obj1 = new Obj("hello")
let obj2 = new Obj("world")
let obj3 = new Obj("xiaohuang")

obj1.next = obj2 //实例对象obj1的下一个指针指向实例对象obj2
obj2.next = obj3 //实例对象obj2的下一个指针指向实例对象obj3

for(var value of obj1){
  console.log(value)//hello world xiaohung
}

