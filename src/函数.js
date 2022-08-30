// 函数也是一个对象，可以封装要执行的代码
//这种方式将代码以字符串的形式放入参数，可以执行。但一般不会这么放。
var  fun = new Function("console.log('hello world')");
console.log(typeof fun)

// 调用函数：函数对象();
fun();

// 一般使用函数声明来创建一个函数
// function 函数名（参数）{
//     代码块
// }

function sayHello(){
    console.log("hello world");
    console.log("This is my second function")
}
sayHello();


// 使用函数名来创建一个函数
// var 函数名 = function(形参){
//     代码
// }

var sayHello2 = function(){
    console.log("I made a third function");
}

sayHello2();    