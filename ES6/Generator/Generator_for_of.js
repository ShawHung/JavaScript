function* model(){
  yield 1
  yield 2
  yield 3
  return 4
}

for(let val of model()){
  console.log(val);//1,2,3
}