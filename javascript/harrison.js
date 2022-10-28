// Problem 2:
// Add a paragraph at the end of the doc that says "You pressed the button!"

function makeText(){
    const text = document.createElement('p');
    text.textContent = "You pressed the button!";
    document.body.appendChild(text);
}

// Problem 3:
// Make a number go up by one every time the button is pressed


let count = 0;
function increaseNumber(){
    const intObject = document.getElementById("stuff");
    count += 1;
    intObject.innerText = count;
}

// Problem 4:
// Change the color of a paragraph based on three buttons

function changeColor(color){
    const colorObject = document.getElementById("experiment");
    try{
        colorObject.style.color = color;
    }
    catch{
        return null
    }
}

// Problem 5:
// Display entered text right after input box

function displayEnteredText(inputID, outputID){
    const input = document.getElementById(inputID);
    const output = document.getElementById(outputID);
    output.innerText = input.value;
}

// Problem 6:
// Drop down menu that changes the font of a paragraph

function changeFont(selectedID, textID){
    const Selection = document.getElementById(selectedID)
    const text = document.getElementById(textID)
    text.style.fontFamily = Selection.value
}

