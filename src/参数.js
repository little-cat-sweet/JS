// 当参数过多时，可以将参数封装到一个对象里

// just like this
var test = function(age, name, address){
    console.log("age is " + age + " name is " + name + " address is " + address);
}

test(123, "Jack", "四川")
var person = {
    age : 123,
    name : "Mary",
    address : "Canada"
}

var test2 = function (person) {
    console.log("age is " + person.age + " name is " + person.name + " address is " + person.address);
}
test2(person)

// 函数也经常作为参数，如匿名函数。test4作为对象，test4(参数)作为返回值
var test3 = function (number) {
    console.log(number)
}

var test4 = function (number) {
    return number;
}
test3(test4(12))