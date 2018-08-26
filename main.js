var linkTitle = document.querySelector('.link-title');
var linkURL = document.querySelector('.link-url');
var inputButton = document.querySelector('.user-input-button');
var inputedTitle = document.querySelector('.inputed-title');
var linkDisplay = document.querySelector('.link-display')

//when user clicks enter button run function addElem
// document.body.click = addElem;
inputButton.addEventListener('click', addCard)

function Card(linkTitle, linkURL) {
  this.linkTitle = linkTitle.value;
  this.linkURL = linkURL.value;
}

function addCard() {
  event.preventDefault();
  var newCard = new Card(linkTitle, linkURL);
  console.log(newCard.linkURL);
  var addInput = `<div>
      <h2 class = "inputed-title">${newCard.linkTitle}</h2>
      <h3 class = "inputed-URL"><a href = "${newCard.linkURL}">${newCard.linkURL}</a></h3>
      <h4><span class = "read-button">Read</span> 
      <span class = "delete-button">Delete</span></h4>
    </div>`
  linkDisplay.innerHTML = addInput;
}