//1.基本用法(复制可枚举属性到目标对象)
var target1 = {name :"xiaohaung"};
var sourse1 = {age:21};
var sourse2 = {hobby:"coding"};


Object.assign(target1,sourse1,sourse2);
console.log(target1); //{ name: 'xiaohaung', age: 21, hobby: 'coding' }

//2.后续重名属性会覆盖先有属性
var target2 = {
  name: "xiaohaung"
};
var sourse3 = {
  age: 21,
  name:"xiaowang"
};
var sourse4 = {
  hobby: "coding",
  age:22,
  name:"xiaohuang xiaowang"
};


Object.assign(target2, sourse3, sourse4);
console.log(target2); //{ name: 'xiaohuang xiaowang', age: 22, hobby: 'coding' }

//只有一个参数返回该对象，参数为undefined,null报错，为其他值转化为对象后返回

console.log(Object.assign({a:1}));//{a:1}

// Object.assign(undefined); //TypeError: Cannot convert undefined or null to object
// Object.assign(null); //TypeError: Cannot convert undefined or null to object


console.log(Object.assign(2,{a:1}));//{ [Number: 2] a: 1 }


//null，undefined出现在非首参数会被跳过，其他基本类型值除了字符串都不会产生效果
//字符串

var str = "hello";
console.log(Object.assign({}, str)); //{ '0': 'h', '1': 'e', '2': 'l', '3': 'l', '4': 'o' }



//注意点

//该方法实行的是浅拷贝，所以得到的是原对象某个属性是对象，目标对象复制的是这个对象的引用，对该对象的所有更改会反映到目标对象上

var copy1 = {a:1,b:{name:"xiaohuang"}};
var copy2 = Object.assign({},copy1);
copy1.b.name = "hello";
console.log(copy2.b.name);//hello


//遇到同名属性则会替换而不是添加
var per1 = {name:"xiaohuang",friend:{name:"hebo"}};
var per2 = {age:21,friend:{name:"Wanghongyan",age:22}};
Object.assign(per1,per2);
console.log(per1); //{ name: 'xiaohuang', friend: { name: 'Wanghongyan' ,age:22}, age: 21 }
//per1中friend属性被per2中完全替代


//用途

//1.为对象添加属性
//2.为对象添加方法
//3.克隆对象
//4.合并多个对象
//5.为属性指定默认值