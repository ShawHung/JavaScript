
//join()方法返回以指定符号作为分隔符的字符串
let arr = ["a","b","c"];

let newArr = arr.join("!");
console.log(newArr); //a!b!c

let strArr = arr.join("");
console.log(strArr);//abc

//数组成员是undefined,空，或是Null返回空字符串。
let aArr = [undefined,,null];
let emptyArr = aArr.join(",");
console.log(emptyArr);//",,"

//类数组对象使用join()方法
let obj = {0:1,1:2,length:2};
let objArr = Array.prototype.join.call(obj,",");
console.log(objArr);//1,2