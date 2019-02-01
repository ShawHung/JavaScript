let arr = [1,2,3];
for (let index of arr.keys()){
  console.log("键名："+index);
}
// 键名： 0
// 键名： 1
// 键名： 2
for (let value of arr.values()) {
  console.log("键值：" + value);
}
// 键值： 1
// 键值： 2
// 键值： 3
for (let [index,value] of arr.entries()) {
  console.log("[键名:" + index+"键值："+value+"]");
}
// [键名: 0 键值： 1]
// [键名: 1 键值： 2]
// [键名: 2 键值： 3]
