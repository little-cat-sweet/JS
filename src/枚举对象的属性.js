// 类似于Java增强循环
var student = {
    name : "Jack",
    age : 32,
    address : "AnYue"
}

for(var property in student){
    console.log("The name of property is " + property)
    console.log("The value of property is " + student[property])
}