let arr = [1,3,4,5];

let result1 = arr.includes(1);
console.log("返回值：" + result1); //返回值：true

let result2 = arr.includes(8);
console.log("返回值：" + result2); //返回值：false

let result3 = arr.includes(1,0);
console.log("返回值：" + result3); //返回值：true


let result4 = arr.includes(1,3);
console.log("返回值：" + result4); //返回值：false