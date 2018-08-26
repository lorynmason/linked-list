var linkTitle = document.querySelector('.link-title');
var linkURL = document.querySelector('.link-url');
var inputButton = document.querySelector('.user-input-button');
var inputedTitle = document.querySelector('.inputed-title');
var linkDisplay = document.querySelector('.link-display');
var deleteButton = document.querySelector('.delete-button');
var readButton;

//when user clicks enter button run function addElem
// document.body.click = addElem;
inputButton.addEventListener('click', function() {
addCard();
clearInputs();
})
// deleteButton.addEventListener('click', deleteLink);



function Card(linkTitle, linkURL) {
  this.linkTitle = linkTitle.value;
  this.linkURL = linkURL.value;
}

function addCard() {
  event.preventDefault();
  var newCard = new Card(linkTitle, linkURL);
  var addInput = `<div>
      <h2 class = "inputed-title">${newCard.linkTitle}</h2>
      <h3 class = "inputed-URL"><a href = "${newCard.linkURL}">${newCard.linkURL}</a></h3>
      <h4><input class = "read-button" type = "button" value = "Read"> 
      <input class = "delete-button" type = "button" value = "Delete"></h4>
    </div>`
  linkDisplay.insertAdjacentHTML('afterbegin', addInput)
}
 
function clearInputs() {
  linkTitle.value = '';
  linkURL.value = '';
  linkTitle.focus();
}

function markAsRead() {
  console.log('click')
  readButton = document.querySelector('.read-button');
}

readButton.addEventListener('click', function() {
  this.markAsRead();
});

function deleteLink() {

}