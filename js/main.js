
document.getElementsByClassName("class1")[0].style.backgroundColor = "red";


var newH1 = document.createElement("h1");
newH1.innerText = "Hello People";


document.getElementById("divId1").appendChild(newH1);


var anotherNewH1 = document.createElement("h1");
var newTextNode = document.createTextNode("Thirsty People Unite");

anotherNewH1.appendChild(newTextNode);
document.getElementById("divId2").appendChild(anotherNewH1);


function changeImageSrc() {
  var image1 = document.getElementById("image1");

  image1.src = "img/koolaid.jpg"
  image1.alt = "kool aid"
};
