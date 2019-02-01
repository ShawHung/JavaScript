console.log( Number('false') );

var m = {
  valueOf:function () {
    return "world";
  },
  toString:function () {
    return "hello";
  }
}
console.log(m + 1);

// var obj = new Date();
// obj.valueOf = function () {
//   return 1;
// };
// obj.toString = function () {
//   return "hello";
// }
// console.log(obj + 1);

// console.log("cat" > "dog");//false
// console.log("cat的ASCII码值：" + "cat".charCodeAt());
// console.log("dog的ASCII码值：" + "dog".charCodeAt());
// console.log("5" > "11" );//true
// console.log("5的ASCII码值："+"5".charCodeAt());
// console.log("11的ASCII码值："+"11".charCodeAt());

var x = {
  p:1
}
console.log(1 == x);