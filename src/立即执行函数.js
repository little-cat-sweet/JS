// 函数被定义完，立即被调用
// 立即执行函数，往往只会执行一次
(function(a , b){
    console.log("a " + a);
    console.log("b " + b);
})(12, 13);