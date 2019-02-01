 function newArray(name,age,job) {
  var arr = new Object();
  arr.name = name;
  arr.age = age;
  arr.job = job;
  arr.sayName = function () {
    console.log(this.name);
  };
  return arr;
}

var ar1 =new newArray("xiao","21","Student");
ar1.sayName();

var ar2 = new newArray("wang", "21", "writer");
ar2.sayName();