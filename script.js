const redBox = document.getElementById("red");
const blueBox = document.getElementById("blue");
const greenBox = document.getElementById("green");
const yellowBox = document.getElementById("yellow");


redBox.onclick = function() {
    redBox.style.backgroundColor = "red";
}

blueBox.onclick = function(){
    blueBox.style.backgroundColor = "blue";
}

greenBox.onclick = function(){
    greenBox.style.backgroundColor = "green";
}

yellowBox.onclick = function(){
    yellowBox.style.backgroundColor = "yellow";
}


function greetUser() {
    const name = document.getElementById("nameInput").value;

    const greeting = document.getElementById("greeting");

    if(name === ""){
        greeting.innerText = "Hello";
    }else{
        greeting.innerText = "Hello, " + name + "!";
    }

}


