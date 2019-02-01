//let和const不能重复声明
 var a = 1;
 var a = 2;
console.log(a);//2
 //let a = 3; //报错，const同，SyntaxError: Identifier 'a' has already been declared
// console.log(a);

//暂时性死区
{
  //在声明变量前，变量都不可用
  //console.log(a); //ReferenceError: a is not defined
  let a = 1;
  console.log(a);//1
}

//块级作用域
//ES5不存在块级作用域
{
  var a = 1;//全局变量
}
console.log(a);//1

//ES6存在块级作用域
{
  let i = 1;
}
//console.log(i); //报错，ReferenceError: i is not defined

var a = [];
for (let i= 1; i < 5; i++) {
  a[i] = function () {
    console.log(i); //2
  };
}
a[2]();
//console.log(i); //报错

var a = [];
for (var i = 1; i < 5; i++) {
  a[i] = function () {
    console.log(i); //5
  };
}
a[2]();


function f() {
  console.log("outside");
}

function f1() {
  let f = function () {
    console.log(1);
  };
  f();
}
f1();

(function() {

  if(true){
  function f() {console.log("inside");};
  f();
}
  f();
}());

