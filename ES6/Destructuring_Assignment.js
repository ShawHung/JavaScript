//数组解构赋值
//1.基本结构
let [a,b,c]=[1,2,3];
console.log(`
a:${a}
b:${b}
c:${c}
`);
//2.不完全解构
let [a1,a2,,,a3]=[1,2,3,4,5];
console.log(`a:${a1};b:${a2};c:${a3}`); //a:1;b:2;c:5
//初始值
let [a4,a5 = 1]=[1,2];
console.log(`a4:${a4},a5:${a5}`);//a4:1,a5:2
let [a6,a7 = 1]= [1,undefined];
console.log(`a6:${a7};a7:${a7}`); //a6:1;a7:1
let [a8 = 1] = [null];
console.log(`a8:${a8}`);//a8:null
//对象的解构赋值

//1.变量必须与属性同名才可以赋值
let {name,age,method} = {name:"xiaohuang",age:21};//未找到methoH同名属性,所以是undefined
console.log(`name:${name};age:${age};method:${method}`); //name:xiaohuang;age:21;method:undefined

//2.变量的实际赋值
let {hair:hairs,ear:ears} = {hair:"curly",ear:"ear"};
//console.log(hair); //ReferenceError: hair is not defined
console.log(hairs);

//3.嵌套
let {body,body:{face},body:{face:{nose}}} = {body:{face:{nose:"big"}}};
console.log(`${body}
${face}
${nose}
`);

let obj = {};
let arr = [];
 ({foo:obj.bar,baz:arr[0]} = {foo:123,baz:0});
console.log(`${obj.bar}
${arr[0]}
`)

//4.默认值
let {m=1,n=1} ={}
console.log(`m:${m}
n:${n}
`)

let {m1=1} = {m1:undefined}
console.log(`m1:${m1}`);

let {m2=1} = {m2:null}
console.log(`m2:${m2}`);

//字符串解构赋值
let [s,t,r] = "OPP";
console.log(`s:${s}
t:${t}
r:${r}
`)

//函数解构赋值
function add([x,y]) {
  return x+y;
}
let res = add([1,2])
console.log(res);

