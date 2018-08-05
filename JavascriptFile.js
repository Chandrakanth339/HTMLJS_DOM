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

function mouseOutEvent(){
    // classNames[2].style.color = "green";
    document.getElementById("clkOnMeMEvent").innerHTML = tex;
}

let previousString = null;
function mouseDownEvent(){
    previousString  =  document.getElementById("mouseDownUPId").innerHTML;
    document.getElementById("mouseDownUPId").innerHTML = "new String";
}


function mouseUpEvent(){
    document.getElementById("mouseDownUPId").innerHTML = previousString;
}



