document.getElementById("btn").addEventListener("click", changeColor);

function changeColor() {
    let red = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    
    const container = document.getElementsByClassName("container")[0];
    
    container.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}
