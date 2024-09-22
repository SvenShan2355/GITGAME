/*
变量
所有的变量声明都将提前执行
但是变量的赋值将按照正常顺序执行
*/
//基本数据类型包括数值、字符串、布尔值
var num = 20;
var text = "AA";
var bul = true;
//复合数据类型:OBJECT(对象)——可嵌套
var user = {
    name: "AA",
    age: 30,
    marry: true,
    job: {
    }
};
//数组也是OBJECT类型
var list = [];


//——————————————————————————————————————————————————————————————————————//


/*
输出方法
*/
//在控制台打印信息
console.log(num);
//弹出框显示信息
alert("输出内容");
//客户端页面输出信息
document.write("输出内容");


//——————————————————————————————————————————————————————————————————————//


/*
关键字
*/
//通过typeof关键字可以判断变量的类型
console.log(typeof bul);


//——————————————————————————————————————————————————————————————————————//


/*
运算符
*/
//相等运算符“==”只比较两个变量值是否相等，严格相等运算符“===”,比较值的同时也比较类型
//“!=”和“!==”为不相等和严格不相等，区别于相等和严格相等相同
var num1 = 10;
var num2 = "10";
console.log(num1 == num2, num1 === num2);//true,false
/*
取反运算符：!
可以将布尔值取反
对非布尔值使用则将其转换为布尔值，其中：
- undefined
- null
- false
- 0
- NaN
- ""
取反后为true，其余值取反后为false
*/

//且运算符：&& 多条件都需要满足才返回true
console.log(100 > 10 && 100 > 20 && 100 < 30);
//或运算符：|| 满足单个条件则返回true
console.log(100 > 10 && (100 > 20 || 100 < 30));


//——————————————————————————————————————————————————————————————————————//


/*
条件判断
*/
var m = true;
if (m) {
    console.log("true");
} else if (m) {
    console.log("true");
} else {
    console.log("false");
}

var day = 1;
switch (day) {
    case 0:
        console.log("0")
        break;
    case 1:
        console.log("1")
        break;
    case 2:
        console.log("2")
        break;
    default:
        console.log("其他值")
}


//——————————————————————————————————————————————————————————————————————//



/*
循环
*/
for (i = 1; i < 100; i++) {
    if(i===5){
        continue;//跳出本轮循环
    }
    console.log(i)
    if(i>=10){
        break;//终止循环
    }
}
var j = 0;
while (j < 100) {
    j++;
}
console.log(j);


//——————————————————————————————————————————————————————————————————————//


/*
字符串方法
*/
var str = "abcdefghijklmn";
console.log(str.length);//字符串长度
console.log(str.charAt(5));//返回对应位置字符
console.log(str.concat("opqrst","uvwxyz",100));//连接多个数据，返回一个字符串
console.log(str.substring(2,4));//从原字符串去除一部分并返回该部分，第一个参数表示开始位置，第二个参数表示结束位置，第二个参数默认为字符串长度
console.log(str.substr(2,4));//从原字符串去除一部分并返回该部分，第一个参数表示开始位置，第二个参数表示子字符串长度
console.log(str.indexOf("e",8));//查找某个字符出现的位置
var str1 = "   dadfaf  "
console.log(str1.trim());//去除字符串两端的空格、制表符、换行符、回车符
console.log(str1.trimEnd());
console.log(str1.trimStart());
console.log(str1.split("a"));//以参数为分割点切分字符串，返回数组


//——————————————————————————————————————————————————————————————————————//


/*
数组方法
*/
var arr = [1,2,3,4,5,6,7,8,9,0];
console.log(Array.isArray(arr));//判断参数是否为数组
console.log(arr.unshift('new1','new2'));//数组开头新增一个或者多个元素，返回新数组长度（改变原数组）
console.log(arr.push('new1','new2'));//数组末尾新增一个或者多个元素，返回新数组长度（改变原数组）
console.log(arr.shift());//数组开头弹出一个元素
console.log(arr.pop());//数组末尾弹出一个元素
console.log(arr.join('-'));//以指定参数为分隔符，将所有数组成员连接为一个字符串返回（默认为“,”）
console.log(arr.concat([11,12,13]));//多个数组合并，返回新数组
console.log(arr.reverse());//数组反序排列（改变原数组）
console.log(arr.indexOf(3));//返回给定元素在数组中第一次出现的位置，没有出现则返回-1


//——————————————————————————————————————————————————————————————————————//


/*
函数
*/
function print(s){
    console.log(s)
    return s;
}