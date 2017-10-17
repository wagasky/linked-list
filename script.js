
// VARIABLES

var titleInput = $("#title-input");
var titleInputJsSelected = document.querySelector("#title-input");
var urlInput = $("#url-input");
var inputButton = document.getElementById("input-button");
var cardCounter = $("#card-count");
var unreadCounter = $("#unread-count");
var listContainer = $("#list-container");
var clearButton = $('#clear-read-button');
var cardNumber = 1;
var readCount = 0;
var cardCount = 0;

///default button state
// inputButton.disabled = true;
// clearButton.disabled = true;
// clearButton.style.visibility = "hidden";

// EVENT LISTENERS

inputButton.addEventListener('click', createCard);

titleInputJsSelected.addEventListener('keyup', enableButton)
$(urlInput).keyup(function() {
  enableButton();
});



$(clearButton).on('click', function(){
  cardCount = cardCount - readCount;
  readCount = 0;
  $('.read').remove();
  $(cardCounter).text(cardCount);
  $(unreadCounter).text(readCount);
  if (cardCount === 0){
        $('#count-container').slideToggle('slow', 'linear')}
})


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
    if( $('#'+thisCard).hasClass('read') ) {
      $('#'+thisCard).removeClass('read');
      readCount--
      $(unreadCounter).text(readCount);
    } else {
      $('#'+thisCard).addClass('read')
      readCount++
      $(unreadCounter).text(readCount);
    }
  })

  deleteButton.addEventListener('click', function() {
    if($('#'+thisCard).hasClass('read')) {
      readCount--
      $(unreadCounter).text(readCount);
      $("#" + thisCard).remove();
      cardCount--;
      $(cardCounter).text(cardCount);
      if (cardCount === 0){
        $('#count-container').slideToggle('slow', 'linear');
      }
    } else {
      $("#" + thisCard).remove();
      cardCount--;
      $(cardCounter).text(cardCount);
      if (cardCount === 0){
        $('#count-container').slideToggle('slow', 'linear');
      }
    }
  })

  $(titleInput).val("");
  $(urlInput).val("");

  if (cardCount === 0){
    $('#count-container').slideToggle('slow', 'linear');
  }

  cardNumber++;
  cardCount++;
  $(cardCounter).text(cardCount);

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
