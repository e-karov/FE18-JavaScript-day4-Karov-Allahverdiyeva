//Saving the HTML Collection returned from getElementsByTagName method and converting it to array:
const images = document.getElementsByTagName("img");


// Iterating over the array of img-elements and attach the EventListener to each element:
for (const img of images) {
    img.addEventListener("click", hideSanta);
}

function hideSanta(e) {
// Checking if the clicked element satisfies givven condition and if yes - adding to it a class "hidden" property:
   if (e.target.getAttribute("alt") == "Santa Klaus") {
    e.target.className = "hidden";

   }
}