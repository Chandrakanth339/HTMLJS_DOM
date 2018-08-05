<!-- Set the InnerHTML values -->
document.getElementById("demo").innerHTML = "Hello World!";
<!-- Set the Input Value -->
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

function chgClrOfText(){
    document.getElementById("clkOnMe").style.color = "blue";
}