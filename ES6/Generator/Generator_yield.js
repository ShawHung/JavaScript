//yield*
function* model1(){
  yield 1
  yield 2
}

function* model2(){
  yield 3
  yield model1()
  yield* model1()
  yield 4
  return 5
}

for(let i of model2()){
  console.log(i) //3,Object [Generator] {},1,2,4
}



let arr = [1,2,3,4]
let str = "hello"
function* iterator(){
  yield arr
  yield* arr

  yield str
  yield* str
}

let ite = iterator()

//使用yield语句
console.log(ite.next()) //第一条yield语句返回值：{ value: [ 1, 2, 3, 4 ], done: false }

//使用yield*语句是遍历数组
console.log(ite.next())
console.log(ite.next())
console.log(ite.next())
console.log(ite.next())
// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: 4, done: false }


//遍历字符串

//使用yield语句
console.log(ite.next()) //{ value: 'hello', done: false }


//使用yield*语句
console.log(ite.next())
console.log(ite.next())
console.log(ite.next())
console.log(ite.next())
console.log(ite.next())
// { value: 'h', done: false }
// { value: 'e', done: false }
// { value: 'l', done: false }
// { value: 'l', done: false }
// { value: 'o', done: false }