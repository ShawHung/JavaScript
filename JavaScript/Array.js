//构造函数法
var arr1 = new Array(4);
console.log(arr1.length);
//参数为数组，数值，对象或是字符串，参数返回为新数组的成员
var arr2 = new Array(1,"Array",[1,2,2],{name:"xiao",age:21});
console.log(arr2);
//非正整数值作为参数会报错
//构造函数参数不同会导致其行为很不一样

//数字字面量法（推荐做法）
var arr3 = [1,2,3];
console.log(arr3);


//在下例中，a用构造函数声明，b用数字面量声明，a无键值，b有键值
var a = new Array(3);
var b = [undefined,undefined,undefined];

console.log(a.length);//3
console.log(b.length);//3

console.log(a[0]) ;//undefined
console.log(b[0]) ;//undefined

console.log(0 in a) ;//false
console.log(0 in b) ;//true


var arr3 = [1,2,3,4];

var arr4 = arr3.map(function (x,i) {
  return x+i;
});
console.log(arr4);

arr3.forEach(function (e,i) {
  console.log("["+i+"] :"+e);
});


arr3.forEach(function (e) {
  this.push(e*e);
},arr3);
console.log(arr3);

var arr5 = [1,2,6,7,9,null];
function compare(a) {
    if(a%2 === 0){
      return true;
    }
  }
var carr = arr5.filter(compare);
console.log(carr);

//
console.log(arr3.some( function isEven(params) {
    return params%2 === 0;
}));

console.log(arr3.every(function isEven(params) {
  return params % 2 === 0;
}));

var arr6 = arr3.reduce(function add(a,b){
  return a+b;
})
console.log(arr6);