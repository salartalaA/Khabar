window.onload = init;

function init() {
//get a referance
let btn = document.querySelector("#btnName");
// shortcut key for comment: ctrl+ /
// let game = document.querySelector(".gameContainer");
btn.addEventListener("click", showInfo);

//Drawing the first shape
let canvas = document.querySelector("#mycanvas");
let ctx = canvas.getContext("2d");
//                   X , Y , Width , Height
ctx.beginPath();
ctx.fillStyle= "green";
ctx.strokeStyle="green";
ctx.lineWidth=10;
// ctx.fillRect(...);
ctx.rect(0,0, 500 , 160);
// ctx.stroke();
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.fillStyle= "red";
ctx.strokeStyle="red";
ctx.lineWidth=10;
// ctx.fillRect(...);
ctx.rect(0,500-160, 500 , 160);
// ctx.stroke();
ctx.fill();
ctx.closePath();
ctx.arc(250,250,50,0, 2*Math.PI, false);
ctx.fiilStyle="red";
ctx.fill()
}

function showInfo() {
	let inpTxt = document.querySelector("#txtUsername");
	let title = document.querySelector("#txtTitle");
	title.innerHTML = "Welcome to my first web page " + inpTxt.value + "!";

	let box = document.querySelector("#container");
	let hElement = document.createElement("h2");

	hElement.innerHTML = "Your score: 0";
	
	box.appendChild(hElement);

     let aElement = document.createElement("a");
     aElement.innerHTML = "Click here";
     aElement.href = "https://salartalaa.github.io/Project";
     box.appendChild(aElement);
	inpTxt.value="";
	// alert("Welcome to my first web page " + inpTxt.value + "!");
	}