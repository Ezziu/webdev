let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.getElementsByTagName("ul")[1];
let li = document.getElementsByTagName("li");

function inputLength(){
	return input.value.length;
}

function createListElement(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function pressList(event){
	if (inputLength() > 0 && event.keyCode === 13){
		createListElement();
	}
}

function clickList(){
	if (inputLength() > 0){
		createListElement();
	}
}

button.addEventListener("click", clickList);
input.addEventListener("keypress", pressList);



// let gospace = function(){
// 	var age = Number(prompt("Age?"));
// 	if (age >= 18) {
// 		//alert("k, go 2 space!")
// 		return console.log("k, go 2 space!")
// 	}
// 	else {
// 		//alert("No go, kiddo!")
// 		return console.log("no go 2 space!")
// 	}
// };
// gospace();

