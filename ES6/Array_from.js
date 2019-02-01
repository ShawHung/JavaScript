let arrLike = {
  0:1,
  1:2,
  2:3,
  length:3
};

//ES5写法
let arr1 = [].slice.call(arrLike);
console.log("ES5写法:"+arr1);
//ES6写法
let arr2 = Array.from(arrLike);
console.log("ES6写法:" + arr1);
//类数组元素
console.log(Array.from({length: 4})); //[ undefined, undefined, undefined, undefined ]


console.log(Array.from("hello")); //[ 'h', 'e', 'l', 'l', 'o' ]



function typesOf() {
  return Array.from(arguments, value => typeof value);
}
console.log("示例接受第二个参数："+typesOf(1, "hello", [], {}));

