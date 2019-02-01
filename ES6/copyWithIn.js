let arr = [1,2,3,4,5];

//演示复制数组第二个位置到第一个位置
let newArr1 = arr.copyWithin(0,1,2);
console.log("新数组："+newArr1); //[ 2, 2, 3, 4, 5 ]
console.log("原数组：" + arr); //[ 2, 2, 3, 4, 5 ]

//如果第二第三个参数为负值则从倒数开始计算
//演示数组第二位到数组第三位替换数组第一位
let newArr2 = arr.copyWithin(0, -3, -2);
console.log("新数组：" + newArr2); //[ 3, 2, 3, 4, 5 ]
console.log("原数组：" + arr); //[ 3, 2, 3, 4, 5 ]
//省略第三个参数则是从第二个参数到数组尾部
//演示复制数组1到4位从0好位置开始替换
let newArr3 = arr.copyWithin(0, 1);
console.log("新数组：" + newArr3); //[ 2, 3, 4, 5, 5 ]
console.log("原数组：" + arr); //[ 2, 3, 4, 5, 5 ]