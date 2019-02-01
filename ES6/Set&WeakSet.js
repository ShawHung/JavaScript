var s = new Set();
[1, 1, 1, 2, 2, 4, 3, 2, 3, 2, 4].forEach(x => s.add(x));
console.log(s); //Set { 1, 2, 4, 3 }

const s1 = new Set([6,4,6,5,6,4,3,3,2]);
console.log([...s1]);
//[ 6, 4, 5, 3, 2 ]

const set2 = new Set();

set2.add(1);
set2.add(1);//重复
set2.add(2);
console.log(set2); //Set { 1, 2 }


console.log(set2.has(1));//true

let res1 = set2.delete(1);
console.log(res1);//true

console.log(set2.has(1));//false

set2.clear();
console.log(set2); //Set {}


const setArr = new Set([1, 2, 3]);
var result = Array.from(setArr);
console.log(result); //[ 1, 2, 3 ]

const nSet1 = new Set([1,2,3,4]);
for( let key of nSet1.keys()){
  console.log(key);
}
//1
//2
//3
//4
for (let val of nSet1.values()) {
  console.log(val);
}
//1
//2
//3
//4
for ( let ent1 of nSet1.entries()) {
  console.log(ent1);
}
// [1, 1]
// [2, 2]
// [3, 3]
// [4, 4]

nSet1.forEach((val,keys) => { console.log(val*keys);})
// 1 1x1
// 4 2x2
// 9 3x3
// 16 4x4


let nSet = new Set([1, 2, 3, 4]);
let nMap = new Set([...nSet].map(x => x * 3));
console.log([...nMap]); //[ 3, 6, 9, 12 ]

let nFilter = new Set([...nSet].filter(x => x%2 == 0));
console.log([...nFilter]); //[ 2, 4 ]


let aSet = new Set([1,2]);
let bSet = new Set([1,3,4]);

//并集
let newArr1 = new Set([...aSet,...bSet]);
console.log([...newArr1]); //[ 1, 2, 3, 4 ]

//交集
let newArr2 = new Set([...aSet].filter( x => bSet.has(x)));
console.log([...newArr2]); //[ 1 ]

//差集
let newArr3 = new Set([...bSet].filter(x => !aSet.has(x)));
console.log([...newArr3]); //[ 3,4]