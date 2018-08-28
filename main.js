var linkTitle = document.querySelector('.link-title');
var linkURL = document.querySelector('.link-url');
var inputButton = document.querySelector('.user-input-button');
var inputedTitle = document.querySelector('.inputed-title');
var linkDisplay = document.querySelector('.link-display');

linkTitle.focus();

inputButton.addEventListener('click', function() {
  var newCard = new Card(linkTitle, linkURL);
  addCard(newCard);
  clearInputs();
  inputButton.disabled = true;
})

linkTitle.addEventListener('keyup', function() {
  if (linkTitle.value !== '' && linkURL.value !== '') {
    inputButton.disabled = false;
  }
})

linkURL.addEventListener('keyup', function() {
  if (linkTitle.value !== '' && linkURL.value !== '') {
    inputButton.disabled = false;
  }
})

linkURL.addEventListener('paste', function() {
  if (linkTitle.value !== '' && linkURL.value !== '') {
    inputButton.disabled = false;
  }
})

linkDisplay.addEventListener('click', function(event) {
  runCardButtons(event);
})

function Card(linkTitle, linkURL) {
  this.linkTitle = linkTitle.value;
  this.linkURL = linkURL.value;
}

function addCard(newCard) {
  event.preventDefault();
  console.log(newCard)
  var addInput = `
    <div class="card">
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

function runCardButtons() {
  console.log(event.target)
  if (event.target.classList.contains('read-button')) {
    console.log(event.target.parentNode.classList)
    event.target.parentNode.classList.toggle('read');
  } else if (event.target.classList.contains('delete-button')) {
    event.target.parentNode.remove();
  }
}