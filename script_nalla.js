// question 2

function createParagraph() {
    const para = document.createElement('p');
    para.textContent = 'You clicked the button!';
    document.body.appendChild(para);
}
 
// question 3

const htmlEle = document.getElementById("number")
let num = 0;
function innerTextPlusOne() {
    num += 1;
    htmlEle.innerText = num;
}

// question 4

function pink(){
    const box = document.getElementById("box");
    box.style.color = "HotPink";
}

function blue(){
    const box = document.getElementById("box");
    box.style.color = "blue";
}

function red(){
    const box = document.getElementById("box");
    box.style.color = "red";
}

// question 5

function inputButton() {
    const btn= document.getElementById("btn");
    var displaytxt = document.getElementById("inputText").value;
    // document.body.appendChild(displaytxt);
    const para2 = document.createElement('p');
    para2.textContent = displaytxt;
    document.body.appendChild(para2);
}


// question 5 

function ChangeFont(){
    const changePara = document.querySelector(".parapara");
    const selectElement = document.querySelector("#fontselect");
    var value = selectElement.value;
    changePara.style.fontFamily = value;
}

const selector = document.getElementById('fontselect');
selector.addEventListener('change', ChangeFont);



