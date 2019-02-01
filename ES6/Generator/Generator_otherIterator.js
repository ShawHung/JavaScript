function* model() {
  yield 1
  yield 2
  yield 3
  return 4//此处done为true,所有遍历到这里停止
  yield 5
}

//扩展运算符
console.log([...model()]) //[ 1, 2, 3 ]

console.log(Array.from(model()))//[1,2,3]
let [x, y, z, m] = model()

console.log([x, y, z, m]) //[ 1, 2, 3, undefined ]