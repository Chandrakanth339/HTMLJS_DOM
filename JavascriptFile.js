document.getElementById("demo").innerHTML = "Hello World!";

function alterValueById() {
    document.getElementById("inpt").value = "New Value";
}

function alterValueByClassName() {
    var values = document.getElementsByClassName("inptClass");
    values[0].value = "New Altered Value";
    document.getElementById("elmts").innerHTML = values.length;
}

function findTags() {
    document.getElementById("findTags").innerHTML = document.getElementsByTagName("p").length;
}

let variable = "";

function querySelectorEverythng() {
    var arr = document.querySelectorAll("p.c1QuerySelector");
    var itr = arr.length;
    for (var i = 0; i < itr; i++) {
        variable += arr[i].innerHTML;
    }
    document.getElementById("rst").innerHTML = variable;
    variable = "";
}

function changeColr() {
    document.getElementById("chngColor").style.color = "yellow";
    document.getElementById("chngColor").style.backgroundColor = "blue";

}

let classesNames = document.getElementsByClassName("clkOnMe");

function singleClickEvent() {

    classesNames[0].style.color = "blue";
}

function dbClickEvent() {
    classesNames[1].style.color = "yellow";
}

function alertWindow() {
    alert("bing");
}

let tex = null;

function mouseOverEvent() {
    // classNames[2].style.color = "orange";
    tex = document.getElementById("clkOnMeMEvent").innerHTML;
    document.getElementById("clkOnMeMEvent").innerHTML = "Changed Value";
}

function mouseOutEvent() {
    // classNames[2].style.color = "green";
    document.getElementById("clkOnMeMEvent").innerHTML = tex;
}

let previousString = null;

function mouseDownEvent() {
    previousString = document.getElementById("mouseDownUPId").innerHTML;
    document.getElementById("mouseDownUPId").innerHTML = "new String";
}


function mouseUpEvent() {
    document.getElementById("mouseDownUPId").innerHTML = previousString;
}


function keyPressEvent() {
    console.log("You Have Entered something in the input text box...");
}


function onChangeEvent() {
    console.log("something was changed in the input text box");
}

function keyDownEvent() {
    console.log("KeyDown event occured.....");
}

function keyUpEvent() {
    console.log("keyUp event occured.....");
}


function focusEvnt() {
    console.log("You have focussed in the input text field");
}

function blurEvnt() {
    console.log("You have blurred focus on the input field(moved cursor elsewhere)");
}

window.addEventListener("load", () => {
    document.getElementById("eventAttach").addEventListener("click", () => {
        console.log("Triggered Event!")
    });
});

function ajaxRequestResponse() {
    var xhttp = new XMLHttpRequest();
    // onreadystatechange gets triggered each time readystate property changes from 1 upthrough 4
    xhttp.onreadystatechange = () => {

        if (xhttp.readyState == 4 && xhttp.status == 200) {
            // Add the JSON Parser to consider the response as a JSON object 
            var resultVariable = JSON.parse(xhttp.responseText);
            console.log(resultVariable);
        }

    };
    // READY STATE = 3
    xhttp.onprogress = () => {
        console.log("Processing the Request...readyState ", xhttp.readyState);
    }
    // READY STATE = 4
    // xhttp.onreadystatechange gets executed before xhttp.onload, albeit ready state is 4 for both these methods
    xhttp.onload = () => {
        console.log("Request processing is done and Response is Ready... readyState ", xhttp.readyState);
    }
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos/1", "true", null, null);
    console.log("Server Connection Established...readyState ", xhttp.readyState);
    xhttp.send();
};