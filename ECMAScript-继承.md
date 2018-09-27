##ECMAScript继承

+ 构造函数
+ 原型对象
+ 实例对象

  每个构造函数包含一个原型对象（prototype），原型对象包含指向构造函数的指针（constructor）,实例对象包含一个指向原型对象的指针（ [ [prototype] ]）。
>实例1
```
function SupType(){
  this.property = true;
  }
SupType.prototype.getSupValue = function(){
  return SupType.property;
}

function SubType(){
  this.property = false;
}

SubType.prototype = new SupType();

SubType.prototype.getSubValue = function(){
  return SubType.property;
}

var value = new SubType();
console.log(value.getSupValue());//true

```
在上例中，构造函数SupType指向SupValue.prototype(原型对象)，通过创建其实例并赋给SubType的原型对象来实现继承。而SubType的实例value此时指向Subtype.protoType,SubType.prototype指向SupType.prototype。所以SubType的原型对象此时继承了SupType的属性和方法。所以调用其实例value会沿着原型链查找名为getSupValue()的方法。发现它位于SupType.prototype中。然后返回结果显然为true。

**因为上述都是引用类型，所有引用类型默认都继承了Object**