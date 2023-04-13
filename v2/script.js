//function that splits an element's inner text's letters into individual span elements
const enhance = id => {
  const element = document.getElementById(id), //fetches element
    text = element.innerText.split(""); //splits element text into array
  element.innerText = ""; //removes element's innerText

  //generates a span letter for each element, then appends it into the original element
  text.forEach(letter => {
    const span = document.createElement("span"); //create span element
    span.className = "letter"; //add "letter" class to span
    span.innerText = letter; //insert letter into the span element
    element.appendChild(span); //append new span element into the original element

    //span.style.transform = translateRandom();
  });

}

enhance("email");
enhance("town");

//returns randomized values for 'translate' style property
function translateRandom() {
  let posX = (Math.floor(Math.random() * 8) + 2) * (Math.round(Math.random()) ? 1 : -1); //random number between -9 and 9, but not between -2 and 2
  let posY = (Math.floor(Math.random() * 40) + 10) * (Math.round(Math.random()) ? 1 : -1); //random number between -50 and 50, but not between -10 and 10
  let rotateDeg = (Math.floor(Math.random() * 32) + 8) * (Math.round(Math.random()) ? 1 : -1); //random number between -40 and 40, but not between -8 and 8
  return 'translate(' + posX + '%, ' + posY + '%) rotate(' + rotateDeg + 'deg)'
}

//all fancy words
const fancyWords = Array.from(document.getElementsByClassName("fancy"));

//
fancyWords.forEach(word => {
  //transforms every child letter upon mouseover
  word.addEventListener("mouseover", function () {
    word.childNodes.forEach(letter => {
      letter.style.transform = translateRandom();
      letter.style.position = "relative";
      letter.style.zIndex = -1
    }
    )
  });
  //removes every transform property on every child letter upon mouseout
  word.addEventListener("mouseout", function () {
    word.childNodes.forEach(letter => letter.style.removeProperty("transform"));
    
  });
});