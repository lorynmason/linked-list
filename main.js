var linkTitle = document.querySelector('.link-title');
var linkURL = document.querySelector('.website-URL');
var inputButton = document.querySelector('.user-input-button')
var inputedTitle = document.querySelector('.inputed-title');

//when user clicks enter button run function addElem
// document.body.click = addElem;
inputButton.addEventListener('click', addCard)

function Card(linkTitle, linkUrl) {
  this.linkTitle = linkTitle;
  this.linkUrl = linkUrl;
}

function addCard() {
  var newCard = new Card(linkTitle, linkUrl);
  var addLink = document.createElement("div"); 
  addLink.prepend(newCard)
}
