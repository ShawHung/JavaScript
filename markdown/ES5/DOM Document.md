## Document节点

### 节点属性

+ ####  快捷方式属性
  ##### 1)document.defaultView
    document.defaultView属性返回document对象所属的window对象。如果当前文档不属于window对象，该属性返回null。

  ##### 2)document.doctype
    对于 HTML 文档来说，document对象一般有两个子节点。第一个子节点是document.doctype，指向<DOCTYPE>节点，即文档类型（Document Type Declaration，简写DTD）节点。HTML 的文档类型节点，一般写成<!DOCTYPE html>。如果网页没有声明 DTD，该属性返回null。

  ##### 3)document.documentElement
    返回当前文档的根元素节点（root）。一般为<**html**>节点

  ##### 4)document.body,document.head
    document.body属性指向 <**body**>节点，document.head属性指向<**head**>节点。

  ##### 5)document.scollingElement
    返回文档的滚动元素。也就是说，当文档整体滚动时，到底是哪个元素在滚动。

  ##### 6)document.activeElement
    返回获得当前焦点（focus）的 DOM 元素。通常，这个属性返回的是< **input**>、<**textarea**> ,<**select**>等表单元素，如果当前没有焦点元素，返回body元素或null。

  ##### 7)document.fullscreenElement
    返回当前以全屏状态展示的 DOM 元素。如果不是全屏状态，该属性返回null。

+ #### 节点集合属性
  ##### 1)document.links
    返回当前文档所有设定了href属性的<**a**>及<**area**>节点。
  ##### 2)document.forms
    返回所有<**form**>表单节点。
  ##### 3)document.images
    返回页面所有<**img**>图片节点。
  ##### 4)document.embeds，document.plugins
    document.embeds属性和document.plugins属性，都返回所有<**embed**>节点。
  ##### 5)document.scripts
    返回所有<**script**>节点。
  ##### 6)document.styleSheets
    返回文档内嵌或引入的样式表集合

  **注：** 以上的集合属性返回的都是HTMLCollection实例。

+ #### 文档静态信息属性
   ##### 1)document.documentURI,document.URL
    document.documentURI属性和document.URL属性都返回一个字符串，表示当前文档的网址。不同之处是它们继承自不同的接口，documentURI继承自Document接口，可用于所有文档；URL继承自HTMLDocument接口，只能用于 HTML 文档

  ##### 2)document.domain
    document.domain属性返回当前文档的域名，不包含协议和接口。比如，网页的网址是http://www.example.com:80/hello.html，那么domain属性就等于www.example.com。如果无法获取域名，该属性返回null。

    document.domain基本上是一个只读属性，只有一种情况除外。次级域名的网页，可以把document.domain设为对应的上级域名。比如，当前域名是a.sub.example.com，则document.domain属性可以设置为sub.example.com，也可以设为example.com。修改后，document.domain相同的两个网页，可以读取对方的资源，比如设置的 Cookie。

    另外，设置document.domain会导致端口被改成null。因此，如果通过设置document.domain来进行通信，双方网页都必须设置这个值，才能保证端口相同。
    由于安全方面的限制，也并非可以给 domain 设
    置任何值。如果 URL 中包含一个子域名，例如 p2p.wrox.com，那么就只能将 domain 设置为 "wrox.com"
    （URL 中包含 "www" ，如 www.wrox.com 时，也是如此）。不能将这个属性设置为 URL 中不包含的域，
    如下面的例子所示。
    ```
      //假设页面来自 p2p.wrox.com 域
      document.domain = "wrox.com"; // 成功
      document.domain = "nczonline.net"; // 出错！
    ```
  ##### 3)document.lastModefied
    返回一个字符串，表示当前文档最后修改的时间。不同浏览器的返回值，日期格式是不一样的。
  **注：** document.lastModified属性的值是字符串，所以不能直接用来比较。Date.parse方法将其转为Date实例，才能比较两个网页。
    ```
      var lastVisitedDate = Date.parse('01/01/2018');
      if (Date.parse(document.lastModified) > lastVisitedDate) {
        console.log('网页已经变更');
      }
    ```
  ##### 4)document.title
    返回当前文档的标题。默认情况下，返回<**title**>节点的值。但是该属性是可写的，一旦被修改，就返回修改后的值。
  ##### 5)document.characterSet
    返回当前文档的编码，比如UTF-8、ISO-8859-1等等。
  ##### 6)document.referrer
    返回一个字符串，表示当前文档的访问者来自哪里。
    + 如果无法获取来源，或者用户直接键入网址而不是从其他网页点击进入，document.referrer返回一个空字符串。

    + document.referrer的值，总是与 HTTP 头信息的Referer字段保持一致。
    + 但是，document.referrer的拼写有两个r，而头信息的Referer字段只有一个r。
  ##### 7)document.dir
    返回一个字符串，表示文字方向。它只有两个可能的值：rtl表示文字从右到左，阿拉伯文是这种方式；ltr表示文字从左到右，包括英语和汉语在内的大多数文字采用这种方式。
  ##### 8)document.compatMode
    返回浏览器处理文档的模式，可能的值为BackCompat（向后兼容模式）和CSS1Compat（严格模式）。

    一般来说，如果网页代码的第一行设置了明确的DOCTYPE（比如<**!doctype html>**  ），document.compatMode的值都为CSS1Compat。
+ #### 文档状态属性
  ##### 1)document.hidden
    返回一个布尔值，表示当前页面是否可见。如果窗口最小化、浏览器切换了 Tab，都会导致导致页面不可见，使得document.hidden返回true。
  ##### 2) document.visitbilityState
    返回文档的可见状态。

    *它的值有四种可能*。

    + visible：页面可见。注意，页面可能是部分可见，即不是焦点窗口，前面被其他窗口部分挡住了。
    + hidden： 页面不可见，有可能窗口最小化，或者浏览器切换到了另一个 Tab。
    + prerender：页面处于正在渲染状态，对于用于来说，该页面不可见。
    + unloaded：页面从内存里面卸载了。这个属性可以用在页面加载时，防止加载某些资源；或者页面不可见时，停掉一些页面功能。

##### 3)document.readyState
  返回当前文档的状态，共有三种可能的值。

  + loading：加载 HTML 代码阶段（尚未完成解析）
  + interactive：加载外部资源阶段
  + complete：加载完成
  **变化过程**
  1. 浏览器开始解析 HTML 文档， document.readyState属性等于loading。
  2. 浏览器遇到 HTML 文档中的<**script**>元素，并且没有async或defer属性，就暂停解析，开始执行脚本，这时document.readyState属性还是等于loading。
  3. HTML 文档解析完成，document.readyState属性变成interactive。
  4. 浏览器等待图片、样式表、字体文件等外部资源加载完成，一旦全部加载完成，document.readyState属性变成complete。