//(1).静态方法Array.isArray()方法，可弥补typeof方法的不足

var arr1 = [1, 1, 1];
console.log('Type:' + typeof arr1); //object
console.log('Array isArray?:' + Array.isArray(arr1)); //true

//实例方法
//1）.valueOf()方法(返回数组本身)
var arr = [1, 11, 1];
console.log('valueOf:' + arr.valueOf());

//2).toString()方法（返回数组的字符串形式）
var arr = [1, 2, 3, 4];
console.log('toString:' + arr.toString());

//push()方法(在数组末尾添加一个或多个元素，返回数组长度)，
//pop()方法（删除数组最后一个元素，返回该元素本身（被删除的那个元素））
//遵循”后进先出“规则
var arr = [];
//对空数组使用pop()方法返回undefined
console.log(arr.pop()); //undefined

arr.push(1);
console.log(arr.push('xiao', { name: 'huang' }));
console.log(arr);

console.log(arr.pop());
console.log(arr);

//shift()方法（删除数组第一个元素并返回该元素）
//unshift（）方法（在数组第一个位置添加元素（一个或多个），返回数组长度）
var arr = [];
console.log('shift' + arr.shift()); //undefined

console.log('unshift:' + arr.unshift(1, 2));
console.log('unshift:' + arr.unshift('a', 'b'));

console.log(arr);

console.log('shift:' + arr.shift());
console.log('shift:' + arr.shift());

console.log(arr);

//join()方法（以指定参数作为分隔符，将所有数组成员连接为一个字符串返回。如果不提供参数，默认用逗号分隔。）
var arr1 = [1, 2, 3, 4, 5];
console.log('join:' + arr1.join('|')); //1|2|3|4|5
console.log('join:' + arr1.join());

//如果数组成员是undefined或null或空位，会被转成空字符串

console.log([undefined, null, 1, 2].join('#'));
console.log(['a', , 'b'].join('-')); //a--b

//concat()方法（concat方法用于多个数组的合并。它将新数组的成员，添加到原数组成员的后部，然后返回一个新数组，原数组不变，也接受其他值）
console.log([1,2,3].concat([4,5]));
console.log([1,2].concat(1,2));

//revarse()方法（ 颠倒数组，返回新的数组）
var arr = ["a","b","c","d"];
console.log(arr.reverse());
