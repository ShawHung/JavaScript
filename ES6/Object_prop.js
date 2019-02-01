//属性简洁表达
var foo ='name';
var baz = {foo};
console.log(baz);//{foo:'name'}

//函数参数
function f(x,y){
  return {x,y};
}
var fn = f(1,2);
console.log(fn);//{x:1,y:2}

//方法简写
var obj = {
  foo,//相当于foo:name
  method(){
    return this.foo;
  }
}

var o = obj.method();
console.log(o);//name


//用于函数返回值
function f1() {
  var x = 1;
  var y = 2;
  return {x,y};
}
var fn1 = f1();
console.log(fn1);//{x:1,y；2}

//若某方法是Generator函数，需要在前面加上星号
var obj1 = {
  *me(){
    yield "hello method";
  }
}


//属性名表达式
//ES6允许在使用字面量声明对象时使用表达式声明属性名

var obj3 = {
  name:"xiaohuang",
  ['a'+'ge']:21,
}
console.log(`Name:${obj3.name}
Age:${obj3.age}`
);



var obj_foo = 'mnnnn';

var obj4 = {
  [obj_foo]:"hello",
  world:"world"
}

console.log(obj4[obj_foo]+obj4.world);


//属性名表达式如果是对象，会转换成字符串[object,Object]

const keyA = {a:1};
const keyB = {b:2};

var obj5 = {
  [keyA]:'valueA',
  [keyB]:'valueB'//覆盖[keyA](因为keyA也是转化成[object,Object])
}
console.log(obj5); //{ '[object Object]': 'valueB' }