## ECMAScript数据类型
*******************

**五种基本数据类型:** String,Boolean,Number,Undefined,Null

**一种复杂数据类型：** Object(包括三种子类型：狭义的对象（object）,数组（Array）,函数（function）)


**typeof操作符、instanceof操作符**
```
 typeof 123;//"number"
 typeof null;//"object" null返回object
 typeof "123"//"string"
 function f(){

 }
 typeof f;//"object"


 a = [];
 o instanceof Array;// true
```
*********
### Null,undefined,Bollean值

****

**null**表示空值，即该处的值现在为空。调用函数时，某个参数未设置任何值，这时就可以传入null，表示该参数为空。比如，某个函数接受引擎抛出的错误作为参数，如果运行过程中未出错，那么这个参数就会传入null，表示未发生错误。

**undefined**表示“未定义”,如：变量未赋值，调用函数未传参，对象未复值的属性，函数没有返回值
```
  //1.变量未赋值
  var v;
  v；//undefined;
  //2.调用函数未传参
  function f(a){
    return a;
  }
  f();//undefined
  //3.调用对象属性未赋值
  var o ={};
  o.p;//undefined
  //4.函数没有返回值
  function f(){}
  f();//undefined
```

Boolean类型有 **真“true”** 和 **假“false”** 两个值。

会返回布尔值的操作符：

+ 前置逻辑运算符： ! (Not)
+ 相等运算符：=== 、!==、 ==、 !=
+ 比较运算符：>，>=，<，<=

如果 JavaScript **预期某个位置（常见如if语句）** 应该是布尔值，会将该位置上现有的值自动转为布尔值。转换规则是除了下面六个值被转为**false**，其他值都视为 **true**。

+ undefined
+ null
+ false
+ 0
+ NaN
+ ""或''（空字符串）

### 数值类型

在Javascript中，数字以六十四位浮点数存储。

**数值精度：** 2<sup>53</sup> - 2<sup>-53</sup>

**数值范围：** 2<sup>1024</sup> - 2<sup>-1023</sup>

**数值表示法：**
  1. 科学记数法
  2. 字面表示法
如果小数点前数字多余21个，小数点后0多于5个自动使用科学记数法。

**进制：**
+ 十进制：没有前导0的数值。
+ 八进制：有前缀0o或0O的数值，或者有前导0、且只用到0-7的八个阿拉伯数字的数值。
+ 十六进制：有前缀0x或0X的数值。
+ 二进制：有前缀0b或0B的数值
*注：* 出现不是进制里的数字则会报错，如二进制里出现2。

**特殊数值**
1. +0，-0
2. NAN
3. Infinity(有正负之分)

**数值方法：**
1)parseInt()方法
用途:将字符串转为整数

2)parseFloat()方法
用途:将一个字符串转为浮点数

3)isNaN()方法
用途:判断一个值是否为NaN

4)isFinite()方法
用途:返回一个布尔值，表示某个值是否为正常的数值

