let arr = [1,-5,3,-6,8];

let arr1 = arr.find(function(value,index,arr){
  return value < 0;
});
console.log(arr1);//-5

let arr2 = arr.findIndex(function (value, index, arr) {
  return value < 0;
});
console.log(arr2);//1