
//给类部署iterator接口使其可被for...of遍历
class RangeIterator{
  constructor(start,stop){
    this.value = start
    this.stop = stop
  }

  [Symbol.iterator](){return this}

  next(){
    var value = this.value
    if(value < this.stop){
      this.value++
      return {value:value,done:false}
    }
    return {value:undefined,done:true}
  }
}

function range(start,stop){
  return new RangeIterator(start,stop)//返回一个遍历器对象实例
}

for(var i of range(0,5)){
  console.log(i)//0，1，2，3，4
}