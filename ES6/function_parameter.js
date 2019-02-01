//ES6指定默认参数
function log1(x,y="xiaohuang!"){
  return x + y;
}
console.log(log1("hello"));
console.log(log1("hello",""));
console.log(log1("hello","world"));
console.log(log1("hello",undefined));
console.log(log1("hello",null));

//ES6函数默认参数与解构赋值
function log2({x,y}) {
  console.log(x+y);
}
log2({x:"xiao",y:"huang"});
log2({x:"xiao"});
log2({y:"huang"});
log2({});

//两种写法
function log3({x=0,y=0}) {
  console.log(x,y);
}

function log4({x,y}={x:0,y:0}) {
    console.log(x,y);
}
log3({ x: "xiao", y: "huang" });
log3({ x: "xiao" });//y为默认值
log3({ y: "huang" });
log3({});//x,y均为默认值
//输出结果：
// xiao huang
// xiao 0
// 0 'huang'
// 0 0

log4({ x: "xiao", y: "huang" });
log4({ x: "xiao" });//y为undeifined
log4({ y: "huang" });//x为undefined
log4({});//x,y均为undefined
//输出结果：
// xiao huang
// xiao undefined
// undefined 'huang'
// undefined undefined

//ES6函数参数的位置
//设置了默认值的函数参数应该为尾函数，无法只省略该参数而不省略其后参数，除非使用undefined
function log5(x = 1 ,y) {
    console.log(x,y);
  };
  //log5(,1);此种情况报错
  log5(1);//1,undefined
  log5(1,2);//1,2
  log5(undefined,2);//1,2


//ES6函数length属性
console.log((function a(x, y) { }).length);//2
console.log((function a(x , y = 1) {}).length);//1
//默认参数不是为函数，后面的参数也不计入length属性
console.log((function a(x = 1 , y ) { }).length);//0
//rest参数不计入length属性
console.log((function a(...args) { }).length);//0


//作用域

//案例一
var x = 1;
function f(x,y=x) {
  console.log(y);
}
f(2);//2 x赋值为2，y赋值为x,x=2,y=2.y指向参数x

f()//1，调用时未赋值，所以取到全局变量x x = 1,y = x,y = 1，若此时不声明全局变量则报错
//在本例中，函数设置了参数默认值y，调用f时参数形成了单独的作用域，此时x指向参数x，所以输出2

//下面这种情况也会报错
// var x = 1;
// function f(x = x) {
//   console.log(x);
// }//此时相当于let x = x;出现暂时性死区（x未赋值就调用）

//案例二
let foo = "outside";
function g(func = x=>foo ) {
  let foo  = "inner";
  func();
  console.log(foo);
};
g();//outside
//此例中g函数参数func为匿名函数，返回值为foo,当调用函数g,函数参数形成单独作用域，该作用域内不存在foo,所以调用全局变量foo,输出结果为outside
//此时不声明foo将报错


//inner
//这里因为函数内部foo指向函数参数foo，所以返回inner


//案例三
var x ="out";
function m(x,y=function(){x = 2;}) {
  var x = "in";
  y();
  console.log(x);
}
m();//in
//在本例中，m函数调用时参数形成单独作用域，改作用域中的x和函数内部的x不是同一个，所以输出的是函数内部的x