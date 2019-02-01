let arr1 = [1,2,3];
let ite = arr1[Symbol.iterator]();//arr1是一个数组，数组本身部署了iterator接口，通过调用该方法遍历，参考实现一个iterator

console.log(ite.next());
console.log(ite.next());
console.log(ite.next());
console.log(ite.next());