let pro1 = new Promise(function(resolve,reject){
  resolve("yes")
  reject("error")
})

pro1.then(function (yes) {
  console.log("yes")
},function(error)
{
  console.log("This is a error")
})