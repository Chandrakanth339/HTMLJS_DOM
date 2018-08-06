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
    xhttp.onreadystatechange = () => {
        if(xhttp.readyState == 4 && xhttp.status == 200){
            
            // Add the JSON Parser to consider the response as a JSON object 
            // var resultVariable = JSON.parse(xhttp.responseText);
            // console.log(resultVariable);

            // If JSON.parse is not added , then the responseText is considered as plain text and
            // whatever is the JSON response we get, it will be considered as character stream, but not as
            // JSON object
            console.log(xhttp.responseText[0]); // WIll print { as this character is @ first index(0)
        }
        if(xhttp.status>200 && xhttp.status<400){
            console.log("Error");
        }
    };
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos/1","true",null,null);
    xhttp.send();
};