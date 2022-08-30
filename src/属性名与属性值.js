var obj = new Object();
obj.name = "Jack";
// 对象属性名不强制要求遵守标识符的规范， 但还是尽量遵守吧
obj.var = 123
console.log(obj.var)

// 如果要使用特殊的属性名，不能采用.的方式来操作
// 应该这样：
// 对象["属性名"] = 属性值
//
// 属性名为123这种方式无法成功。
// obj.123 = "hello"
// 这种就可以了
obj["123"] = "hello";
console.log(obj["123"])

// in运算符可以检查一个对象中是否含有某个属性， 有，返回true，没有返回， false。
// 语法："属性名" in 对象

var obj2 = new Object();
obj2.name = "Mary";
obj2.age = 123;
console.log("age" in obj2)
console.log("id" in obj2);
