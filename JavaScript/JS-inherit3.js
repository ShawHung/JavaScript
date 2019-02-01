var overwatch = {
  level:"master",
  Group:["genji","mercy","widow"]
};

var player1 = Object.create(overwatch);

console.log(player1.level); //master
console.log(player1.Group); //[ 'genji', 'mercy', 'widow' ]
player1.name = "xiaohuang";
console.log(player1.name); //xiaohuang
player1.Group.push("rein");
console.log(player1.Group); //[ 'genji', 'mercy', 'widow', 'rein' ]

var player2 = Object.create(overwatch);
console.log(player2.level); //master
console.log(player2.Group); //[ 'genji', 'mercy', 'widow', 'rein' ]
player2.like = "tank";
player2.Group.push("roadhog");

console.log(player2.like);//tank
console.log(player1.like);//undefiend(实例共享传入对象属性，like是实例属性无法共享)
console.log(player1.Group);  //[ 'genji', 'mercy', 'widow', 'rein', 'roadhog' ]
console.log(player2.Group); //[ 'genji', 'mercy', 'widow', 'rein', 'roadhog' ]


