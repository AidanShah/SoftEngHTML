const name = document.querySelector(".name");
function changeColor() {
    name.style.color = "blue";
}




/*
Questions
Variables: What is the difference between let and const? Why would you use one over the other?
Let - limited to the scope of a block statement 
Const - cannot be reassigned 
Always declare variables with const 
Describe what document.querySelector() does. What does document refer to?
Document -> interface represents any web page loaded in the browser +entry point into DOM Tree. 
document.querySelector() -> returns 1st element that matches the selector (String)
What is an event and event handler? Give an example of each.
Event - something the browser or user does
	Ex. <element event = “some javaScript”
Event handler - handle and verify user input/actions/browser actions
	Ex. <button ="alert('Hello')">Click me.</button>


*/