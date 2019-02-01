//Reflect.construct(target,args)
//可以不使用new操作符调用构造函数

function Person(name,age){
  this.name = name;
  this.age = age;
}

//旧写法
let per1 = new Person("xiaohuang",21);
console.log(per1); //Person { name: 'xiaohuang', age: 21 }


//新写法
let per2 = Reflect.construct(Person,['xiao',22]);
console.log(per2); //Person { name: 'xiao', age: 22 }