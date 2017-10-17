
// VARIABLES

var titleInput = $("#title-input");
var titleInputJsSelected = document.querySelector("#title-input");
var urlInput = $("#url-input");
var inputButton = document.getElementById("input-button");
var cardCounter = $("#card-count");
var unreadCounter = $("#unread-count");
var listContainer = $("#list-container");
var cardNumber = 1;
var readCount = 0;
var cardCount = 0;

// default button state
inputButton.disabled = true;

// EVENT LISTENERS

inputButton.addEventListener('click', createCard);
titleInputJsSelected.addEventListener('keyup', enableButton)
$(urlInput).keyup(function() {
  enableButton();
});


// FUNCTIONS

function createCard() {
  var cardTitle = $(titleInput).val();
  var cardUrl = $(urlInput).val();
  var thisCard = "link-card-" + cardNumber;

  if (emptyInputError() === true) {
    $(titleInput).val("");
    $(urlInput).val("");
    return false;
  }
  // emptyInputError();


  listContainer.prepend(
    `<article class="link-card-container" id="${thisCard}">
      <h2 class="link-card-title">${cardTitle}</h2>
        <p><a href='${cardUrl}' target="_blank" title='${cardTitle}'>${cardUrl}</a></p>
        <footer class="link-card-footer">
          <button class="link-card-read-button card-button">Read</button>
          <button class="link-card-delete-button card-button">Delete</button> 
       </footer> 
    </article>`
    );
  var readButton = document.querySelector(".link-card-read-button");
  var deleteButton = document.querySelector(".link-card-delete-button");
  readButton.addEventListener('click', function() {
    // $("#" + thisCard).toggleClass("read");

  })
  deleteButton.addEventListener('click', function() {
    $("#" + thisCard).remove();
    cardCount--;
  })

  $(titleInput).val("");
  $(urlInput).val("");

  cardNumber++;
  cardCount++;

  $(cardCounter).val(cardCount)
  $(unreadCounter).val;

}

function enableButton() {
  if (titleInputJsSelected.value.length === 0 || $(urlInput).val() === ""){
    inputButton.disabled = true;
  } else {
    inputButton.disabled = false;
  }
}

function emptyInputError() {
  if ($(titleInput).val() === "" || $(urlInput).val() === "" || validateURL($(urlInput).val())===false) {
    inputButton.innerText = "Please enter a Title & valid URL"
    setTimeout(function(){ inputButton.innerText = "Enter"; }, 3000);
    return true;
  };
}

function validateURL(value) {
    return /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
}




