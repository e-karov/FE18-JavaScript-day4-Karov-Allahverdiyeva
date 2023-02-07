// Select the submit button and attaching the "click"- eventlistener:
document.getElementById("btn").addEventListener("click", displayNames);

// The function that is called by raising the event:
function displayNames() {
    // Save the values from the inputs:
    const firstName = document.getElementById("fname").value;
    const lastName = document.getElementById("lname").value;
    const age = document.getElementById("age").value;
    const profession = document.getElementById("profession").value;

    // Setting a default color in case that a condition is not met (name - shorter than 5 letters):
    let color = "red";
    if (firstName.length > 5) {
        color = "green";
    }
    
    // Displaying some message to user if we don't get input values:
    let outputHTML = "Please, enter some values.";
    // In if we have the inputs, we replace the message with the HTML with the values:
    if (firstName && lastName) {
        outputHTML = `<span style="color: ${color}">${firstName}</span> ${lastName},  Age: ${age} years.`;
    }
    
    // Defining a background color for the output according to the profession:
    let outputDivColor = "";
    switch (profession) {
        case("education"):
        outputDivColor = "green";
        break;
        case("it"):
        outputDivColor = "purple";
        break;
        case("science"):
        outputDivColor = "blue";
        break;
        case("hospitality"):
        outputDivColor = "yellow";
        break;
        default:
            outputDivColor = "grey";
        }
        
        //Making the output div visible with display: block - property and giving it the appropriate backgroung color:
        document.getElementById("result").innerHTML = outputHTML;
        const outputDiv = document.getElementById("output");
        outputDiv.style.display = "block";
        outputDiv.style.backgroundColor = outputDivColor;

}