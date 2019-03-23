-----------------------------------数据类型
浮点数不能用来测试值  a+b==3  如果a=0.1b=0.2 那么a+b=0.3000000004
isNaN();任何不能转换为数值的都会返回true  如 NaN "cswv"
数值转换:Number() parseFloat() parseInt()  对于同样的输入会有不同的返回这三个函数 	page :30页
转义字符: page:33
字符串一旦创建就不能改变:var lang="java"; lang=lang+"vwv";第二段代码其实是重新创建了一个"java"字符串在与后面相连  最后销毁之前的lang
字符串调用tostring()方法返回字符串的一个副本
String()方法可以将null和undefine也转换成字符串 toString()则不行
相等会进行类型转换  全等不会进行类型转换
即便函数需要传参  但当调用的时候也不一定要传参 
-----------------------------------变量 作用域  内存问题
变量类型分为:基本类型  引用类型
基本类型:undefined null Boolean String Number   js中String不是引用类型
不能为基本类型值添加属性 尽管不会导致错误 
var name="cvewvew";
name.age=44;
alert(name.age);//undefine
执行环境:每个执行环境都有一个变量对象  全局是window   执行环境分为全局环境和局部环境
作用域链:执行环境的总和 :函数  window 搜索是沿着作用域类型向上搜所  当一个函数被创建时就会创建一个执行环境和一个相应的作用域链
js中没有块级作用域的概念  
例如:
if(true){
	var color="bule";
}
alert(color);//bule
if中的变量会被添加到当前作用域中 当前是window   for while等也一样
使用var声明变量自动会被添加到最接近的环境中  如果不使用var声明变量那么自动会被添加到全局作用域

-----------------------------------object对象创建的三种方式
var one = new Object();//通过构造函数
one.a="d";
one.sayname=function() {
	alert("xianna");
}
var one ={//通过对象字面量   不会调用构造函数
	a:"d",//逗号而不是分号
	sayname:function(){
		alert("xianna");
	}
};//记得加分号
var one ={};//直接通过空括号创建
-----------------------------------funtion
//funtion   函数名称是指针  没有重载  只有覆盖   函数当中声明相同的函数名 后面的将覆盖前面的  可当作参数传递（指针）
function sum (num1,num2) {
	return num1+num2;
}//第一种形式  函数声明  代码执行前加载
var sum=function(num1,num2){
	return num1+num2;
};//第二种形式  函数表达式 函数返回引用赋值给sum  执行到当前行的时候加载
-----------------------------------函数属性和方法
arguments:保存函数参数arguments.参数   有一个属性arguments.callee（)指向当前函数 递归  
this:是函数执行环境的对象 在网页的全局作用域中调用函数this对象就是windows 
caller:指向调用当前函数的函数 	函数.caller或者arguments.callee.caller
length:参数个数
prototype:
apply():在特定作用域中调用函数  两个参数:运行函数的作用域	参数数组		拿来扩充作用域
call():在特定作用域中调用函数		 :				单独列举参数	拿来扩充作用域
function sum (num1,num2) {
	return num1+num2;
}
function callsum1 (num1,num2) {
	return sum.apply(this,arguments)//或者sum.apply(this,[num1,num2]);
}
-----------------------------------面向对象 
//属性类型
数据（对象中的字段)属性:	Configurable:能否delete()从而重新定义属性,能否修改属性特性 默认为true   如果改为false就不能变回true了 不会影响其他属性
		Enumerable:表示能否通过for-in循环返回属性 默认为true
		Writeable:表示能否修改这个值 默认为true   false情况下赋值会被忽略
		Value:属性值是多少 读取属性值的时候首先重这里读取 写入属性值的时候把新值保存到这个位置  默认值是undefined
		不能同时指定Writeable和get或者Value和set
Object.defineProperty():修改属性默认特性 	接受三个参数:属性所在对象	属性名称	描述对字段特性的描述符对象  在这里面设置value会覆盖之前该字段的值 
						如果不存在该字段则创建该字段 同样后面也可以覆盖该vaule值  不会出现设置了value值就一直是这个值  因为一个变量的值存储区域是在
						value这个地方 ，不管怎么赋值，后面的都会覆盖前面的 当然这个是在可写的情况下.对于一个属性在未定义属性特性的时候,在调用该方法的时候如果不指定那么Configurable
						Enumerable Writeable默认值是false,因为定义过了 那么前面会有相应的值	只指定set那么不可读  尝试读取返回undefined 只指定get那么不可写 
						指定set表示Writeable为true
访问器属性:		Configurable:同上
			Enumerable:同上
			Get:读取属性	默认值是undefined
			Set:写入属性	默认值是undefined  通过对象.属性=值得方式调用 其中的值会被当作参数传入set函数中			
Object.defineProperties():可以定义多个属性 接受两个参数:属性所在对象	多个属性的列表
例:Object.defineProperties(person,{
	name:{
		writable:true,
		value:2004
	},
	age:{
		
	}
});
Object.getOwnPropertyDescriptor():该方法用来查看某个字段的属性特性	        接受两个参数:属性所在对象	要查询的字段名称
-----------------------------------对象的创建
//可以使用前面Object的方式创建
------------------------------------------------------------------工厂模式
//使用工厂模式 	即封装创建函数  达到复用功能  避免代码重复
function createPerson () {
	var o = new Object();
	o.name="cav";
	o.sayname=function(){
		alert("cevq");
	}
	return o;
}
------------------------------------------------------------------构造函数模式
/*构造函数模式 构造函数可以当作函数来用  任何函数只要通过new来调用就可以作为一个构造函数  
作为普通函数来用的话 属性和方法都添加给windows了（因为此时的this就是windows)*/
function Person (name,age) {
	this.name=name;
	this.age=age;
	this.sayname=sayname;//此种方法可以解决创建多个对象时函数多次创建问题  即该函数是被person对象共享的   但是不推荐这么做
}
function sayname () {
	alert("vewvew");
}
var person1=new Person("cav","vave");//需要使用new  用instanceof来判断对象类型
------------------------------------------------------------------原型模式
//使用原型模式(prototype 每个函数都有) prototype是一个指针 指向原型对象 原型对象会有一个constructor属性(构造函数)  可将实例共享的方法或则属性包含到这里面
//constructor指向本来创建的函数 每一个对象内部都有一个指针指向原型
function Person () {
}
Person.prototype.name="vewvew";
Person.prototype.age="ewve";
Person.prototype.sayname=function () {
	alert(this.name);
}
var person1=new Person();
var person2=new Person();
alert(person1.name==person2.name)//true
isPrototypeOf():确定对象的[[Prototype]]指针是否指向原型对象
Object.getPrototypeOf():返回对象的[[Prototype]]指针指向的原型对象的prototype的值
读取对象属性或者方法的顺序:现在本对象中早  如果早不到 "沿着该对象的[[Prototype]]指针指向的原型"去早
delete 对象.属性
hasOwnProperty():检测一个属性是存在实例中还是存在原型中   在实例中时返回true	对象.hasOwnProperty(属性)
in:当通过对象能够访问属性时 返回true 语法: 属性 in 对象
for in 循环屏蔽了对象中不可枚举的属性  既包括存在实例中的属性也包括存在原型中的属性
Object.keys():参数是对象 返回一个该对象中所有的可枚举的实例属性
Object.getOwnPropertyNames():参数是对象  返回对象中所有属性 无论是否可以枚举
------------------------------------------------------------------更简单的原型模式语法
var person ={};
person.prototype={
	constructor:person,//因为用字面量方式返回的是一个新的对象所以person.prototype的constructor不再指向person  需要手动指定   据情况而定写不写
	name:"cewvew",
	age:41,
	sayname:function () {
		
	}
};
//即使先创建对象 后在原型上修改  也能在对象上立即反应出来  但是不能全部重写原型对象  如果完全重写原型对象就切断了对象的[[Prototype]]指针
//和原型对象之间的关系
function Person () {
}
var person = new Person();//此时person的[[Prototype]]指向Person最初的原型对象
Person.prototype={//此时Person的原型对象被赋予了一个新的原型对象地址 因此上面的person的原型指针就不再指向Person的原型
	name:"vewvewv"
}
person.name;//此时访问不了
------------------------------------------------------------------组合使用构造函数和原型模式
//即在可以像构造函数里面传参 初始化对象的属性  然后调用原型重写的方式
function person (num1,num2) {
	this.name=num1;
	this.age=num2;
	this.sayname=function(){
		return this.name;
	}
}
person.prototype={
	constructor:person,
	city:"vewv"
}
------------------------------------------------------------------动态原型模式
//即在构造函数里加入判断条件  避免原型初始化之后相应属性重复初始化
if(typeof this.sayname!="function"){
	person.prototype.sayname=function() {
		alert("Cewvew");
	}
}

------------------------------------------------------------------继承
//让一个原型对象等于另一个类型的实例 该原型对象的实例拥有继承类型的全部属性和方法   继承类型的实例属性则存在于当前新的原型对象中 
//继承类型的原型对象中的方法和属性仍然存在于原型对象中x
------------------------------------------------------------------普通原型链
function person (name ,age) {
	this.name=name;
	this.age=age;
}
person.prototype.getvalue=function(){
	return this.name;
}
function subperson (name) {
	this.name=name;
}
subperson.prototype=new person();//此时的subperson.prototype._proto_指针指向person的原型   subperson.prototype.constructor指向person这个构造函数
原型链中的搜索机制:沿着原型链向上搜索  先还是实例实例中没有就沿着原型链向上搜索  注意向上搜索都是沿着原型链指向的原型
------------------------------------------------------------------借用构造函数  但是不能实现继承  用得比较少
//在子类中调用父类的构造函数使用call()或则apply()来调用和传递参数 使得每个对象都有自己的属性值和方法值
-----------------------------------------------------------------组合继承  即将原型链和使用构造函数结合
function Person (num1) {
	this.name=num1;
}
function subPerson (num1,num2) {
	Person.call(this,num2);//第二次
	this.num1=num1;
}
subPerson.prototype=new Person();//第一次
subPerson.prototype.constructor=subPerson;//纠正subPerson.prototype.constructor的指向  
var one = new subPerson(a,b);//缺点:会调用两次构造函数  第一次调用时subperson原型中存在了Person中的name但没有值  第二次调用的时候又会调用父类的构造函数 这时的name位于
							//one实例当中 所以会屏蔽subPerson当中的name属性   解决办法是使用寄生式组合继承
-----------------------------------------------------------------寄生式组合继承
//第一步将继承过程封装成函数
function object (o) {//这里是自定义的object函数不是原生的Object
	function F () {}//定义一个构造函数
	F.prototype=o;
	return new F();
}
//第二步

-----------------------------------------------------------------函数表达式
//函数声明的特征是 函数声明提升  即在函数声明的前面也可以调用  应为函数声明会在执行代码前辈读取
用函数表达式创建的函数叫做匿名函数
闭包:指的是一个函数 有权限访问另一个函作用域中的变量  创建闭包的方式是在一个函数的内部创建另一个函数
一般情况下 一个函数执行完毕之后 局部活动对象就会被销毁但是这是垃圾回收机制检测到其不再用了  但是如果在一个函数的内部创建一个匿名函数并且引用该函数
的变量  那么该匿名函数的作用域链中也会加入改函数的变量对象,即该的变量仍被匿名函数引用 所以垃圾回收器不会回收该函数的变量对象
this:this对象是在运行时基于函数的执行环境进行绑定的 在全局中this是windows 而当函数被作为某个对象的方法调用时 this等于那个对象  
	 但是匿名韩式的执行环境具有全局性 所以它的this就是windows
匿名函数模仿块级作用域:
语法: (function() {
	//这里面的变量变量都是局部的  
})();



screen对象: