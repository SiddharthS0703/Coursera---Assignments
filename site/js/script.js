	//string += "world";
	//console.log(string + "!");
	//var string= "hello";



//company.name = "apple";
//company.ceo = new Object();
//company.ceo.firstName= "tim";

//console.log(company);
//console.log("company CEO name is :" +company.ceo.firstName);


//better way of doing it (object literal)

// var apple= {
// 	name: "apple",
// 	ceo: {
// 		firstName: "tim",
// 		favColor: "blue"
// 	},
// 	$stock:110
// };
// console.log("apple");

// function multiply(x,y){
// return x*y;
// }
// console.log(multiply(5,3));
// multiply.version ="v.1.0.0";
// console.log(multiply.version);

// //function factory
// function makeMultiplier(multiplier){
// 	var myFunc = function(x){
//      return multiplier= x;
// 	};

// 	return myFunc;
// }

// var multiplyBy3 = makeMultiplier(3);
// console.log( multiplyBy3(10));

// //passing functions as arguments
// function doOperation (x, operation){
// 	return operation(x);
// }

// var result= doOperation(5, multiplyBy3);
// console.log(result);



//pass by value vs pass by reference


// var b =a;
// console.log(a);
// console.log(b);


// b.x=5;
// console.log(a);
// console.log(b);


// //function constructors

// function Circle(radius){
// 	this.radius = radius;
// }
// Circle.prototype.area =
//  function() {
// 	// body...
// 	return Math.PI * Math.pow(this.radius,2);
// };
// var myCircle = new Circle(10);
// console.log(myCircle.area());

// var anotherCircle = new Circle(20);
// console.log(anotherCircle);


//object and this keyword
// var literalCircle={  //new object
// 	radius:10,

// 	 getArea: function(){
// 	 	console.log(this);
// 	 	return Math.PI * Math.pow(this.radius,2);
// 	 }
// }

// literalCircle.getArea


//Array

// var a = new Array();
// a[0] = "Sid";
// a[1] = 1;;
// a[2] =  function(name){
// 	console.log("Hello"+name);
// };;
// a[3] = { course: "HTML, CSS & JS"};
// console.log(a);
// a[2](a[0]);
// console.log(a[3].course);


// var names = [ "sid", "suhani" ,"peachi"];
// var myObj = {
// 	name: "sid",
// 	course: "HTML/CSS/JS",
// 	platform: "Coursera"
// };
// for (var prop in myObj){
// 	console.log(prop+ ":" +myObj[prop])
// }

// for( var name in names){
// 	console.log("hello" + names[name]);
// }


//closure

// function makeMultiplier(multiplier){
   
//     function b(){
//     console.log("multiplier is:" +multiplier);
//     }
//     b();

// 	return{
// 		function (x){
// 			return multiplier * x;

// 		}
// 	};
// }
// var double = makeMultiplier(2);
// console.log( double(10));




// var peachiGreeter={};
// peachiGreeter.name= "peachi";

// peachiGreeter.hello = function () {
// 	console.log("hello" + peachiGreeter.name);
// }


//imediately invoked function expression (IIFE)
// (function(name){
// 	console.log("hello" + name);;
// })(" mofos!");


//DOM Manipulation
// console.log(document.getElementById("title"));

// ///event handling
// document.addEventListener("DOMContentLoaded",
// function(event){
      
//       function sayHello(event){
//        console.log(event);

// 	this.textContent =  "said it!";
// 	var name =
// 		document.getElementById("name").value;
// 		var message = "<h2>Hello" + " " + name + "!</h2>";

// 		// document
// 		// .getElementById("content")
// 		// .textContent = message;


// 		document
// 		.getElementById("content")
// 		.innerHTML = message;

// 		if (name === "student"){
// 			var title =
// 			document
// 			.querySelector("#title")
// 			.textContent;

// 			title += " &lovin' it!";
// 			document
// 			.querySelector("#h1")
// 			.textContent = title;
// 		}
// } 
//         //unobstrusive event binding
// document.querySelector("button")
// .addEventListener("click", sayHello);


//  document.querySelector("button")
//  .addEventListener("mousemove",
//  function(event){
//  	if(event.shiftKey === true){
//  	console.log( "x:" + event.clientX);
//  	console.log("y:" + event.clientY);
// 	 }
// 	}
// 	);

// }
// );

// document.querySelector("button")
// .onclick = sayHello;
 

