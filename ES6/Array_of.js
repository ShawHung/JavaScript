console.log("数组是："+Array.of(3));//[3]
console.log("长度是："+Array.of(3).length); //1
//和Array的不同是参数个数的不同带来的差异
console.log("数组是："+Array(3));//[,,]
console.log("长度是："+Array(3).length); //3

console.log("数组是："+Array.of(1, 23, 3));
console.log("长度是："+Array.of(1, 23, 3).length);

console.log("数组是："+Array(1, 23, 3));
console.log("长度是："+Array(1, 23, 3).length);

console.log("数组是："+Array.of());
console.log("长度是："+Array.of().length);


console.log("数组是：" + Array());
console.log("长度是：" + Array().length);


//实现
function ArrOf() {
  return [].slice.call(arguments);
}
console.log(ArrOf(1,2));