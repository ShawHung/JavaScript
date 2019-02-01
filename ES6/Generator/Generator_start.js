function* helloGenerator() {
  yield "hello"
  yield "Generator"
  return "bye"
}

var gen1 = helloGenerator()
//并不会返回函数执行结果，而是返回一个遍历器对象

console.log(gen1.next())
console.log(gen1.next())
console.log(gen1.next())
console.log(gen1.next())
// { value: 'hello', done: false }
// { value: 'Generator', done: false }
// { value: 'bye', done: true }
// { value: undefined, done: true }
