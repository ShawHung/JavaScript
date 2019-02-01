console.log(typeof 123);
console.log(typeof v);
console.log(typeof null);

if(!null){
  console.log("null is false!");
}

var i;
console.log(i);

function f(a) {
  return a;
}
console.log(f());

var o = {};
console.log(o.p);

function f() {

}
console.log(f());

console.log((function f(a,b){}).length);

var a = new Array(1024);
a[0102] = 3;
console.log(a[102]);
console.log(a[66]);

