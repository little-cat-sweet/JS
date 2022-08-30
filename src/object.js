// new 关键字调用的函数，是构造函数constructor
// 构造函数是专门用来创建对象的函数
// 使用typeof检查一个对象时，会返回object.
var object = new Object();
console.log(typeof object)
//添加属性 obj.属性名 = 属性值
object.name = "jack"
console.log(object)
//读取对象的属性
console.log(object.name)

// 修改属性值，哎，其实也没什么
object.name = "mary"
console.log(object.name)