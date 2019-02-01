//几个注意点

//1.+0 不等于 -0

var flag1 = Object.is(+0,-0);
console.log("Result:" + flag1); //Result:false

console.log("===的情况：" + (-0 === -0)); //===的情况：true

//NaN等于自身

var flag2 = Object.is(NaN,NaN);
console.log("Result:" + flag2); //Result:true

console.log("===的情况" + (NaN === NaN)); //===的情况false

