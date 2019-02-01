## 函数表达式

定义函数方法：
+ 函数声明
**表达方法：**
```
  function functionName（arg1,arg2,arg3）{
    //函数体
  }
```
**函数声明提升：** 在执行代码前会优先读取函数声明，即使在函数声明前调用也不会出错。
```
  functionName();//不会报错
  function functionName（）{
    //函数体
  }
```

+ 函数表达式
```
  var functionName = function（arg1,arg2,arg3）{
    //函数体
  }
```
这种方式创建的函数称为**匿名函数**，因为function关键字后没有标识符。且在调用之前按必须先赋值。
```
  functionName();//报错
  var functionName = function（arg1,arg2,arg3）{
    //函数体
  }
```
