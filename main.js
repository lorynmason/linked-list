var linkTitle = document.querySelector('.link-title');
var linkURL = document.querySelector('.link-url');
var inputButton = document.querySelector('.user-input-button');
var inputedTitle = document.querySelector('.inputed-title');
var linkDisplay = document.querySelector('.link-display');
var deleteButton;
var readButton;
//when user clicks enter button run function addElem
// document.body.click = addElem;
inputButton.addEventListener('click', function() {
addCard();
clearInputs();
})
// deleteButton.addEventListener('click', deleteLink);
linkDisplay.addEventListener('click', function(event) {
  markAsRead(event);
})


function Card(linkTitle, linkURL) {
  this.linkTitle = linkTitle.value;
  this.linkURL = linkURL.value;
}

function addCard() {
  event.preventDefault();
  var newCard = new Card(linkTitle, linkURL);
  var addInput = `
    <div>
      <h2 class = "inputed-title">${newCard.linkTitle}</h2>
      <h3 class = "inputed-URL"><a href = "${newCard.linkURL}">${newCard.linkURL}</a></h3>
      <input class="read-button" type="button" value="Read"> 
      <input class = "delete-button" type = "button" value = "Delete">
    </div>`

  linkDisplay.insertAdjacentHTML('afterbegin', addInput)
}
 
function clearInputs() {
  linkTitle.value = '';
  linkURL.value = '';
  linkTitle.focus();
}

function markAsRead() {
  console.log('click');
  readButton = document.querySelector('.read-button');
  if (event.target === readButton) {
    event.target.parentNode.classList.toggle('read');
  }
}

function deleteCard() {
  document.querySelector('.delete-button');
}