const nMap1 = new Map();
let o = [];

nMap1.set(o,"hello");

console.log(nMap1.get(o));//hello


const nMap2 = new Map([[1,2],[3,[4,5]]]);
console.log(nMap2); //Map { 1 => 2, 3 => [ 4, 5 ] }
console.log(nMap2.get(1));//2
console.log(nMap2.get(3)); //[4,5]


const nMap3 = new Map([
  [1, 2],
  [3, 4, 5]
]);
console.log(nMap3); //Map { 1 => 2, 3 => 4 }
console.log(nMap3.get(1)); //2
console.log(nMap3.get(3)); //4


const nMap4 = new Map();
nMap4.set(NaN,"1");
nMap4.set(NaN, "2");
console.log(nMap4); //Map { NaN => '2' }
//NaN被覆盖。说明在Map内和Set内一样，NaN被认为等于自身


const weak1 = new WeakMap();
let arr1 = [1,2];
weak1.set(arr1,"hello");
console.log(weak1.get(arr1));//hello

