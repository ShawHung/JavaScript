let a = Symbol('hello');
console.log(a);

let obj1 = [1, 2];
let a1 = Symbol(obj1);
console.log(a1); //Symbol([object Object])

var sy1 = Symbol();
var sy2 = Symbol();
console.log(sy1 === sy2); //false

var sy1 = Symbol('hello');
var sy2 = Symbol('hello');
console.log(sy1 === sy2); //false

//作为属性名
var s1 = Symbol();
var obj = {};
obj[s1] = 'hello';
console.log(obj[s1]); //hello

//方法二
var obj = {
  [s1]: 'hello'
};
console.log(obj[s1]); //hello

//方法三
Object.defineProperty(obj, s1, { value: 'hello' });
console.log(obj[s1]); //hello

//遍历属性名
var s1 = Symbol('hello');
var s2 = Symbol('world');
var obj = {};

obj[s1] = 'hello';
obj[s2] = 'world';
obj.name = 'xiaohuang';
obj.age = 21;

var res1 = Object.getOwnPropertySymbols(obj);
console.log(res1); //[ Symbol(hello), Symbol(world) ]

var res2 = Object.getOwnPropertyNames(obj);
console.log(res2); //[ 'name', 'age' ]

for (key in obj) {
  console.log(key);
} //name age

for (key of Object.keys(obj)) {
  console.log(key);
} //name age

var res3 = Reflect.ownKeys(obj);
console.log(res3); //[ 'name', 'age', Symbol(hello), Symbol(world) ]


