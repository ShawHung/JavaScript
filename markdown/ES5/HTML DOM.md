## HTML DOM
#### 什么是DOM?
DOM 是 JavaScript 操作网页的接口，全称为“文档对象模型”（Document Object Model）。它的作用是将网页转为一个 JavaScript 对象，从而可以用脚本进行各种操作（比如增删内容）。

浏览器会根据 DOM 模型，将结构化文档（比如 HTML 和 XML）解析成一系列的节点，再由这些节点组成一个树状结构（DOM Tree）。所有的节点和最终的树状结构，都有规范的对外接口。

DOM 只是一个接口规范，可以用各种语言实现。所以严格地说，DOM 不是 JavaScript 语法的一部分，但是 DOM 操作是 JavaScript 最常见的任务，离开了 DOM，JavaScript 就无法控制网页。另一方面，JavaScript 也是最常用于 DOM 操作的语言。后面介绍的就是 JavaScript 对 DOM 标准的实现和用法。
###### 总结：
1）DOM是接口，用于操作网页
2）浏览器根据DOM模型将文档解析成节点以形成树状结构

>Node类型

每个节点都有一个 nodeType 属性，用于表明节点的类型。节点类型由在 Node 类型中定义的下列
12 个数值常量来表示，任何节点类型必居其一：
 Node.ELEMENT_NODE (1)；
 Node.ATTRIBUTE_NODE (2)；
 Node.TEXT_NODE (3)；
 Node.CDATA_SECTION_NODE (4)；
 Node.ENTITY_REFERENCE_NODE (5)；
 Node.ENTITY_NODE (6)；
 Node.PROCESSING_INSTRUCTION_NODE (7)；
 Node.COMMENT_NODE (8)；
 Node.DOCUMENT_NODE (9)；
 Node.DOCUMENT_TYPE_NODE (10)；
 Node.DOCUMENT_FRAGMENT_NODE (11)；
 Node.NOTATION_NODE (12)。

>**节点树**

    1）document节点：文档节点
    2）根节点：<html>标签
    3）其他节点及关系：
+ 父节点关系（parentNode）：直接的那个上级节点
+ 子节点关系（childNodes）：直接的下级节点
+ 同级节点关系（sibling）：拥有同一个父节点的节点
DOM提供操作接口，用来获取这三种关系的节点。比如，子节点接口包括firstChild（第一个子节点）和lastChild（最后一个子节点）等属性，同级节点接口包括nextSibling（紧邻在后的那个同级节点）和previousSibling（紧邻在前的那个同级节点）属性。


>**Node接口节点属性**

1)Node.nodeType
  返回一个整数值，表示节点类型。

2）Node.nodeName
  返回节点的名称
  **属性值:**
  + 文档节点（document）：#document
  + 元素节点（element）：大写的标签名
  + 属性节点（attr）：属性的名称
  + 文本节点（text）：#text
  + 文档片断节点（DocumentFragment）：#document-fragment
  + 文档类型节点（DocumentType）：文档的类型
  + 注释节点（Comment）：#comment

3)Node.nodeValue
  返回一个字符串，表示当前节点本身的文本值，该属性可读写。

4)Node.textContent
  返回当前节点和它的所有后代节点的文本内容。可读写

5)Node.baseURI
  返回一个字符串，表示当前网页的绝对路径。浏览器根据这个属性，计算网页上的相对路径的 URL。该属性为只读。

6）Node.ownerDocument
  返回当前节点所在的顶层文档对象，即document对象。(document对象本身的ownerDocument属性，返回null。)

7)Node.nextSibiling
  返回紧跟在当前节点后面的第一个同级节点。如果当前节点后面没有同级节点，则返回null。(该属性还包括文本节点和注释节点（<!-- comment -->）。因此如果当前节点后面有空格，该属性会返回一个文本节点，内容为空格。)

8)Node.previousSibling
  返回当前节点前面的、距离最近的一个同级节点。如果当前节点前面没有同级节点，则返回null。(该属性还包括文本节点和注释节点。因此如果当前节点前面有空格，该属性会返回一个文本节点，内容为空格。)

9)Node.parentNode
  返回当前节点的父节点。对于一个节点来说，它的父节点只可能是三种类型：元素节点（element）、文档节点（document）和文档片段节点（documentfragment）。

10)Node.parentElement
  返回当前的节点的父元素节点

11)Node.firstChild/lastChild
  返回当前节点的第一个子节点，如果当前节点没有子节点，则返回null。

12)Node.childNodes
  返回一个类似数组的对象（NodeList集合），成员包括当前节点的所有子节点。

13）Node.isConnected
  返回一个布尔值，表示当前节点是否在文档之中。

>**Node接口节点方法**

1)Node.appendChild()
  接受一个节点对象作为参数，将其作为最后一个子节点，插入当前节点。该方法的返回值就是插入文档的子节点。

2)Node.hasChildNodes()
  返回一个布尔值，表示当前节点是否有子节点。

3)Node.cloneNodes()
  接受一个布尔值作为参数，表示是否同时克隆子节点。它的返回值是一个克隆出来的新节点。

  **使用注意点：**
  （1）克隆一个节点，会拷贝该节点的所有属性，但是会丧失addEventListener方法和on-属性（即node.onclick = fn），添加在这个节点上的事件回调函数。

  （2）该方法返回的节点不在文档之中，即没有任何父节点，必须使用诸如Node.appendChild这样的方法添加到文档之中。

  （3）克隆一个节点之后，DOM 有可能出现两个有相同id属性（即id="xxx"）的网页元素，这时应该修改其中一个元素的id属性。如果原节点有name属性，可能也需要修改。

4)Node.insertBefore()
  将某个节点插入父节点内部的指定位置。

5)Node.removeChild()
  接受一个子节点作为参数，用于从当前节点移除该子节点。返回值是移除的子节点。

6)Node.replaceChild()
  用于将一个新的节点，替换当前节点的某一个子节点。返回值是替换走的那个节点oldChild。

7)Node.contains()
  返回一个布尔值，表示参数节点是否满足以下三个条件之一。
  + 参数节点为当前节点。
  + 参数节点为当前节点的子节点。
  + 参数节点为当前节点的后代节点

8)Node.compareDocumentPosition()
  返回一个七个比特位的二进制值，表示参数节点与当前节点的关系。

二进制值|十进制值|含义
  ---|:--:|--|---:
000000|	0	|两个节点相同
000001|	1	|两个节点不在同一个文档（即有一个节点不在当前文档）
000010|	2	|参数节点在当前节点的前面
000100|	4	|参数节点在当前节点的后面
001000|	8	|参数节点包含当前节点
010000|	16|	当前节点包含参数节点
100000|	32|	浏览器内部使用

9)Node.isEqualNode(),Node.isSameNode()
  第一个方法返回一个布尔值，用于检查两个节点是否相等。所谓相等的节点，指的是两个节点的类型相同、属性相同、子节点相同。

  第二个方法返回一个布尔值，表示两个节点是否为同一个节点。


10)Node.normalize()
  清理当前节点内部的所有文本节点（text）。它会去除空的文本节点，并且将毗邻的文本节点合并成一个，也就是说不存在空的文本节点，以及毗邻的文本节点。



  ---------

  ### NodeList 接口，HTMLCollection 接口

  #### 两种节点集合

**区别：**NodeList可以包含各种类型的节点，HTMLCollection只能包含 HTML 元素节点。

#### NodeList接口属性

1)NodeList.length
  返回 NodeList 实例包含的节点数量。

#### NodeList接口方法

2)NodeList.forEach()
  用于遍历 NodeList 的所有成员。

3)NodeList.item()
  接受一个整数值作为参数，表示成员的位置，返回该位置上的成员。

4)NodeList.prototype.keys()，NodeList.prototype.values()，NodeList.prototype.entries()

### parentNode和childNode

#### parentNode属性
1)ParentNode.children
  返回一个HTMLCollection实例，成员是当前节点的所有元素子节点。该属性只读。

2)ParentNode.firstElementChild,ParentNode.lastElementChild
  + firstElementChild属性返回当前节点的第一个元素子节点。如果没有任何元素子节点，则返回null。
  + lastElementChild属性返回当前节点的最后一个元素子节点，如果不存在任何元素子节点，则返回null。

3)ParentNode.childElementCount
  childElementCount属性返回一个整数，表示当前节点的所有元素子节点的数目。如果不包含任何元素子节点，则返回0。

#### ParentNode方法
1)ParentNode.append()，ParentNode.prepend()
 + append方法为当前节点追加一个或多个子节点，位置是最后一个元素子节点的后面。
该方法不仅可以添加元素子节点，还可以添加文本子节点。
 + prepend方法为当前节点追加一个或多个子节点，位置是第一个元素子节点的前面。它的用法与append方法完全一致，也是没有返回值。

#### ChildNode方法

1)ChildNode.remove()
  用于从父节点移除当前节点。

2)ChildNode.before(),ChildNode.after()
  + before方法用于在当前节点的前面，插入一个或多个同级节点。两者拥有相同的父节点。
  +  after方法用于在当前节点的前面，插入一个或多个同级节点。两者拥有相同的父节点。

3)ChildNode.replaceWith()
  使用参数节点，替换当前节点。参数可以是元素节点，也可以是文本节点。