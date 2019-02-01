var proxy = new Proxy({},{
  get:function(target,handler){
    return 35;
  }
});
console.log(proxy.name);//35
console.log(proxy.age);//35

