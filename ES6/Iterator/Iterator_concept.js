//实现一个iterator
function makeIterator(array){
  let nextIndex = 0
  return {
    next:function(){
      return nextIndex < array.length?
      {value:array[nextIndex++],done:false}:
      {value:undefined,done:true}
    }
  }
}

var arr1 = ["a",1]
var res = makeIterator(arr1)

console.log(res.next());
console.log(res.next());
console.log(res.next());