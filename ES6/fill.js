let arr = [1,2,3];

let newArr = arr.fill(7);
console.log("新数组：" + newArr); //新数组：7,7,7
console.log("原数组：" + arr); //原数组：7,7,7


//接受第二和第三个参数表示填充的开始位置和结束位置

let arr1 = [1, 2, 3];

let newArr1= arr1.fill(7,1,2);
console.log("新数组：" + newArr1); //新数组：1,7,3
console.log("原数组：" + arr1);//原数组：1,7,3
