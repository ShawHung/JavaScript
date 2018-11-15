//1.怎么声明函数
/*1.使用function命令 */
function f(x) {
  console.log(x);
}
f(2);//2

/*2.函数表达式 */
var f = function f() {
  console.log(typeof f);
}
f();//function

//2.函数重复声明，后面的会覆盖前面的
function x() {
  console.log(1);
}
x();//Me!

function x() {
  console.log("Me!");
}
x();//Me

//3.函数的调用
//圆括号方法
function sayHello(){
  console.log("Hello");
}
sayHello();//function关键字声明的函数如何调用函数

var sayHi = function () {
  console.log("Hi");
}
sayHi();//函数表达式声明的函数如何调用。
//此处等号右边为匿名函数

var add = function sum(a,b) {
  var result = a+b;
  console.log(result);
}
add(2,3);
//sum(1,2);//报错，因为sum只在函数内部有效
var call = add;//将add赋值给call
call(-1,0);//调用

//4.return语句
function retn(a){
  console.log(a);
  return 0;//return语句后不执行
  console.log("Did i return?");/不会被执行/
}
retn("I'm Groot!");//"I'm Groot!"

//5.函数递归
function recusion(a) {
  if(a<1){
    return 0;
  }
  else{
     return a + recusion(a-1);
  }
}
console.log(recusion(2));

//6.函数名提升
/*使用函数声明方法声明的函数会被解析器先读取，所以存在函数名提升（参考变量提升） */
func(1);//1
//不会报错，因为函数在调用前被提升到了头部，已经声明
function func(a) {
  console.log(a);
}

//func1();会报错，
//TypeError: func1 is not a function
/*等同于：
var func1;
func1();//func1只是被声明而未被赋值。
func1 = function(a){
  console.log(a);
}
*/
var func1 = function (a) {
  console.log(a);
};


/*若使用函数表达式和函数声明声明同一个函数，最后总是函数表达式的定义覆盖函数声明 */
var myFunc = function () {
  console.log("I'm big boss!");
}

function myFunc() {
  console.log("Me too!");
}

myFunc();//"I'm big boss!"
//虽然函数声明后定义但是因为函数名提升问题被提前，所以还是先声明被函数表达式覆盖


//function name属性和length属性

//name属性返回函数名
function funcName() {}
console.log(funcName.name);//funcName

var funcname = function () {};
console.log(funcname.name);//funcname

var funcname2 = function theFunc(){};//此处等号右边函数名只在函数内部有效
console.log(funcname2.name);//theFunc
//length属性表示传入参数个数
function funcLength(a,b,c) {

}
console.log(funcLength.length);

//函数toString()方法
function funcString(para) {
  console.log("hello");
}
console.log(funcString.toString());

//函数作用域问题
//函数内部可访问函数外部变量（函数声明时所在的作用域）
//函数外部无法访问到函数内部的变量
//函数内部变量会覆盖同名外部变量（函数声明时所在的作用域）
var a = 1;
function diffA(){
  var a = 2;
  console.log(a);
}//2

//函数内部变量若不使用var声明，实际上声明的是全局变量
function diff() {
  a = 1;
  var b = 2;
}
console.log(a);//1
//cosole.log(b);//报错

//函数内部的变量提升问题
var x = 1;
function elevate() {
  console.log(x);
  var x = 2;
  console.log(x);
}

elevate();//输出：undefined，2

//第一个console输出undefined，而不是1
//上述代码由于函数内部的变量提升现象，相当于以下代码：
var x = 1
function elevate() {
  var x;//覆盖全局变量
  console.log(x);//x此时声明未定义，所以输出undefined;
  x = 2;
  console.log(x);//2
}

//函数作用域
//函数作用域与其声明时所在的位置有关，与函数运行所在的位置无关
var m = 1;
var fu = function () {
  console.log(m);
}

function fun() {
  var m = 2;
  fu();
}

fun();//输出1.因为函数表达式声明时处于全局作用域，读取的是全局作用域中的m,与运行环境无关


//函数内部声明的函数作用域就是所声明函数的内部
function outerFunc(){
  var mm = 1;
  function innerFunc() {
    return mm;
  }
  return innerFunc;
}

var mm = 2;
var fm = outerFunc();
console.log(fm());