var linkTitle = document.querySelector('.link-title');
var linkURL = document.querySelector('.link-url');
var inputButton = document.querySelector('.user-input-button');
var inputedTitle = document.querySelector('.inputed-title');
var linkDisplay = document.querySelector('.link-display');
var readCounter = document.querySelector('.read-counter');
var linkCounter = document.querySelector('.link-counter');
var unreadCounter = document.querySelector('.unread-counter');
var links = document.getElementsByTagName('div');

linkTitle.focus();

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

inputButton.addEventListener('click', function() {
  event.preventDefault();
  checkInputs();
  var newCard = new Card(linkTitle, linkURL);
  addCard(newCard);
  clearInputs();
  countUnread();
  countLinks();
  inputButton.disabled = true;
})

linkDisplay.addEventListener('click', function(event) {
  runCardButtons(event);
  readLinks(event);
})

function Card(linkTitle, linkURL) {
  this.linkTitle = linkTitle.value;
  this.linkURL = linkURL.value;
}

function addCard(newCard) {
  var addInput = `
  <div class="card">
  <h2 class = "inputed-title">${newCard.linkTitle}</h2>
  <h3 class = "inputed-URL"><a href ="http://${newCard.linkURL}" target="_blank">${newCard.linkURL}</a></h3>
  <input class="read-button" type="button" value="Read"> 
  <input class = "delete-button" type = "button" value = "Delete">
  </div>`
  
  linkDisplay.insertAdjacentHTML('afterbegin', addInput)
}

function runCardButtons() {
  if (event.target.classList.contains('read-button')) {
    event.target.parentNode.classList.toggle('read');
  } else if (event.target.classList.contains('delete-button')) {
    event.target.parentNode.remove();
  }
}

function checkInputs() {
  console.log(linkTitle.value)
  if (linkTitle.value === ' ' || linkURL.value === ' ') {
    event.preventDefault();
    alert('Please enter a site name and URL');
    return;
  }
}

function clearInputs() {
  linkTitle.value = '';
  linkTitle.focus();
  linkURL.value = '';
}

function countLinks() {
  linkCounter.innerText = `Number of Links: ${links.length}`
}

function countUnread(read) {
  if (!read) {
    unreadCounter.innerText = `Number of Unread Links: ${links.length}`
  } else if (read) {
    unreadCounter.innerText = `Number of Unread Links: ${links.length - read.length}`;
  }
}

function readLinks() {
  var read = document.querySelectorAll('.read');
  if (event.target.classList.contains('read-button')) {
    readCounter.innerText = `Number of Read Links: ${read.length}`;
    countUnread(read);
  } else if (event.target.classList.contains('delete-button')) {
    linkCounter.innerText = `Number of Links: ${links.length}`;
    readCounter.innerText = `Number of Read Links: ${read.length}`;
    countUnread(read);
  }
}  