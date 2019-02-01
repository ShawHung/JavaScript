console.log(...[1,2,3]);


function push(array,...values) {
  array.push(...values);

}
var array = [1,2,3]
var arr = push(array,[1,2,3]);


console.log(...[],[1,2]);//对空数组不管用


function f(x,y,z) {
  console.log(x+y+z);
}
f.apply(null,array);
f(...array);

console.log("apply方法："+Math.max.apply(null,[3,5,8]));
console.log("扩展运算符："+Math.max(...[3, 5, 8]));


//通过push方法将另外一个数组添加到另外一个数组后面
var arr1 = [1,2,3];
var arr2 = [2,3,4];
arr1.push(...arr2);
console.log("push之后:" + arr1); //push之后:1,2,3,2,3,4


console.log(new Date(...[2018,12,28]));


//合并数组
var arr1 = [1, 2, 3];
var arr2 = [2, 3, 4];
var newArr = [...arr1,...arr2];
console.log("拼接后新数组:" + newArr); //拼接后新数组:1,2,3,2,3,4

//解构赋值(扩展运算符只能放在最后)
const [a,...rest] = [1,2,3,4];
console.log("a的值是:" + a); //a的值是:1
console.log("rest的值是:" + rest); //rest的值是:2,3,4

const [x,...y] = [];
console.log("x的值是:" + x); //x的值是:undefined
console.log("y的值是:" + y); //y的值是:

//将字符串转化成数组
const str = [..."hello"];
console.log("转化后:"+str);