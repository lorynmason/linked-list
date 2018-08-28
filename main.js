var linkTitle = document.querySelector('.link-title');
var linkURL = document.querySelector('.link-url');
var inputButton = document.querySelector('.user-input-button');
var inputedTitle = document.querySelector('.inputed-title');
var linkDisplay = document.querySelector('.link-display');
var readCounter = document.querySelector('.read-counter');
var linkCounter = document.querySelector('.link-counter');
var unreadCounter = document.querySelector('.unread-counter');
var links = document.getElementsByTagName('div');
var read;

linkTitle.focus();

function countLinks() {
  linkCounter.innerText = `Number of Links: ${links.length}`
}

inputButton.addEventListener('click', function() {
  if (linkTitle.value === '' || linkURL.value === '') {
    event.preventDefault();
    alert('Please enter a site name and URL');
  }
  var newCard = new Card(linkTitle, linkURL);
  addCard(newCard);
  clearInputs();
  countLinks();
  countUnread();
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
  readLinks(event);
})

function countUnread() {
  console.log(read)
  if (read === undefined) {
    unreadCounter.innerText = `Number of Unread Links: ${links.length}`
  } else if (read) {
    unreadCounter.innerText = `Number of Unread Links: ${links.length - read.length}`;
  }
}

function Card(linkTitle, linkURL) {
  this.linkTitle = linkTitle.value;
  this.linkURL = linkURL.value;
}

function readLinks() {
    read = document.querySelectorAll('.read');
  // console.log(event.target.classList.contains('read-button'))
    if (event.target.classList.contains('read-button')) {
      readCounter.innerText = `Number of Read Links: ${read.length}`;
      countUnread();
    } else if (event.target.classList.contains('delete-button')) {
      linkCounter.innerText = `Number of Links: ${links.length}`;
      readCounter.innerText = `Number of Read Links: ${read.length}`;
      countUnread();
    }
  }

function addCard(newCard) {
  event.preventDefault();
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
  if (event.target.classList.contains('read-button')) {
    event.target.parentNode.classList.toggle('read');
  } else if (event.target.classList.contains('delete-button')) {
    event.target.parentNode.remove();
  }
}