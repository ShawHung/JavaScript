function supType(name){
  this.name = name;
}


function subType() {
  supType.call(this,"xiao");
  this.age = 20;
}

var person1 = new subType();
console.log(person1.name)//"xiao"
console.log(person1.age)//20


