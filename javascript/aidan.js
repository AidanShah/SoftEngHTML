//2

pi.onclick= function addElement() {
    const tag = document.createElement("p");
    const text = document.createTextNode("You pressed a button!\n");
    tag.appendChild(text);
  
    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(tag, currentDiv);
  }
//3
//on click gets the h4 text, then increments by 1
count.onclick = function(){document.getElementById('counting').innerHTML=1+parseInt(document.getElementById('counting').innerHTML);}
//4
blue.onclick = function changeBlue(){
    document.getElementById("color").style.color = "blue";
}
red.onclick = function changeRed(){
    document.getElementById("color").style.color = "red";
}
green.onclick = function changeBlue(){
    document.getElementById("color").style.color = "green";
}
//5
enter.onclick = function repeatText(){
    const text = document.getElementById("inputText").value;
    document.getElementById("enterText").innerHTML= text;
}
//6
fots.onclick = function changeTimes(){
    selectElement = document.querySelector('#fonts');
    output = selectElement.value;
    document.getElementById("fontText").style.fontFamily = output;
    const tag = document.createElement("p");
    const text = document.createTextNode(output);
    tag.appendChild(text);
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(tag, currentDiv);
}
