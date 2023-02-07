const circle = document.getElementById("circle");

const events = [
    "click",
    "dblclick",
    "mouseenter",
    "mouseout",
];

for (const event of events) {
    circle.addEventListener(event, handleEvents);
}
 
function handleEvents(e) {
    let messageBox = document.querySelector(".message-box");
    switch(e.type) {
        case ("mouseenter"):
        messageBox.innerHTML = "You are in the circle";
        break;
        case ("mouseout"):
        messageBox.innerHTML = "You are outside of the circle";
        break;
        case ("click"):
        this.style.backgroundColor = "grey";
        break;
        case ("dblclick"):
        this.style.backgroundColor = "blue";
        break;
        
    }

}