//1.双循环数组去重
//需要注意数组塌陷问题。此方法比较笨重
var arr = [1,2,3,3,3,1,5,5,6,4,3,2];
for (let i = 0; i < arr.length-1; i++) {
  const element = arr[i];
  for (let k = i+1; k < arr.length; k++) {
    if(element===arr[k]){
      arr.splice(k,1);
      k--;
    }
  }
}
console.log(arr);


//indexof去重
//此种方法费时
function uniq(arr){
  var newArr = [];
  for (var i = 0; i< arr.length; i++) {
      if (newArr.indexOf(arr[i])===-1) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
}

console.log(uniq(arr));


//对象去重
function uniqe(arr){
  var nObj = {};
  var nArr = [];
  for(i = 0;i<arr.length;i++){
    if(!nObj[arr[i]]){
      nObj[arr[i]] = true;
      nArr.push(arr[i]);
    }
  }
   return nArr;
}
console.log(uniqe(arr));

//先排序后去重
function sortUniq(arr){
  arr.sort();
  var nArr = [arr[0]];
  for(i = 1;i<arr.length;i++){
    if(arr[i] !== nArr[nArr.length-1]);
    nArr.push(arr[i]);
  }
  return nArr;
}
console.log(sortUniq(arr));




//ES6Set
let newArr = ([...new Set(arr)]);
console.log(newArr)