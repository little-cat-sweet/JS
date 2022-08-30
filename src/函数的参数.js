
var sum = function(left, right){
    return left + right;
}
console.log(sum(2,5));

// 解析器不会管多余的实参

console.log(sum(2,3,5,6,))

// 解析器不会检查实参的类型
console.log(sum(true, false));