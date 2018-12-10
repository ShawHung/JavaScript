//关于函数声明与块级作用域的经典问题
//ES6环境
function f() {
  console.log("outside");
}

(function () {
  if(false){
    function f() {
      console.log("inside");
    }
    f();
  }
  f();
}()); //TypeError: f is not a function

//相当于
function f() {
  console.log("outside");
}

(function () {
  var f = undefined;//外部函数重写为undefined
  if (false) {
    //if(false)不会执行，if代码块不会执行
    function f() {
      console.log("inside");
    }
    f();//调用函数，此时f=undefined不是函数，所以报错
  }
  f();
}());

//严格模式
function f() {
  console.log("outside");
}

(function () {
  'use strict'
  if (false) {
    //在严格模式下，函数被提升到if代码块顶部，所以此处if(false)判断为false，代码块内不执行
    function f() {
      console.log("inside");
    }
    f();
  }
  f();//调用外部函数，所以输出outside
}());//outside

//true+非严格模式
function f() {
  console.log("outside");
}

(function () {

  if (true) {
    //
    function f() {
      console.log("inside");
    }
    f();
  }
  f();
}());//inside inside
//相当于
function f() {
  console.log("outside");
}

(function () {
  var f = undefined;//重写f
  if (true) {
    //if判断为true，执行代码
    function f() {
      console.log("inside");
    }//f第二次重写
    f();//输出inside
  }
  f();//在函数内部，调用内部函数，输出第二次inside
}()); //inside inside
//true+严格模式
function f() {
  console.log("outside");
}

(function () {
  'use strict'
  if (true) {
    //if判断为true，执行代码
    //严格模式下，提升到if代码块顶部
    function f() {
      console.log("inside");
    }
    f();//调用内部函数，输出inside
  }
  f();//if代码块内函数对此不可见，调用外部函数，输出outside
}());//inside outside