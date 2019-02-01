function* model(x){
   let a = yield x
   let b = yield (a+x)
   return (a+b+x)
}

let mod = model(1)
console.log(mod.next())
console.log(mod.next())
console.log(mod.next())
// { value: 1, done: false }
// { value: NaN, done: false }
// { value: NaN, done: true }
console.log(mod.next())
console.log(mod.next(2))
console.log(mod.next(3))
// { value: 1, done: false }
// { value: 3, done: false }
// { value: 6, done: true }