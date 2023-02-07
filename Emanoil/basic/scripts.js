document.getElementById("btn").addEventListener("click", displayNames);

function displayNames() {
    const firstName = document.getElementById("fname").value;
    const lastName = document.getElementById("lname").value;
    const age = document.getElementById("age").value;


    let color = "red";
    if (firstName.length > 5) {
        color = "green";
    }

    const outputDiv = document.getElementById("output");

    outputDiv.style.display = "block";
    let outputHTML = "Please, enter some values.";
    if (firstName && lastName) {
        outputHTML = `<span style="color: ${color}">${firstName}</span> ${lastName},  Age: ${age} years.`;
    }

    document.getElementById("result").innerHTML = outputHTML;

}