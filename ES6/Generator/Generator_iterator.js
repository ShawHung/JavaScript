let obj = {}
obj[Symbol.iterator] = function* (){
  yield 1
  yield "hello"
  yield "i have iterator now"
}

console.log([...obj]) //[ 1, 'hello', 'i have iterator now' ]

function* demo(){
  yield 1
}

let demo1 = demo()
console.log(demo1 ==(demo1[Symbol.iterator]()))//true