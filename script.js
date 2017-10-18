// VARIABLES

var $titleInput = $("#title-input");
var $urlInput = $("#url-input");
var inputButton = document.getElementById("input-button");
var $cardCounter = $("#card-count");
var $readCounter = $("#read-count");
var $listContainer = $("#list-container");
var $clearButton = $('#clear-read-button');
var cardNumber = 1;
var readCount = 0;
var cardCount = 0;
var thisCard

// DEFAULT BUTTON STATES

inputButton.disabled = true;

// EVENT LISTENERS

inputButton.addEventListener('click', createCard);

$titleInput.keyup(function() {
  enableButton();
});

$urlInput.keyup(function() {
  enableButton();
});

$clearButton.on('click', function(){
  cardCount = cardCount - readCount;
  readCount = 0;
  $('.read').remove();
  cardCountText();
  readCountText();
  if (cardCount === 0){
    $('#count-container').delay(1500).slideToggle('slow', 'linear')}
})

// FUNCTIONS

function cardCountText() {
  $cardCounter.text(cardCount);
}

function readCountText() {
  $readCounter.text(readCount);
}

function createCard(event) {
  event.preventDefault();
  var cardTitle = $titleInput.val();
  var cardUrl = $urlInput.val();
  var thisCard = "link-card-" + cardNumber;

  if (emptyInputError() === true) {
    $titleInput.val("");
    $urlInput.val("");
    return false;
  }

  $listContainer.prepend(
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
      readCountText();
    } else {
      $('#'+thisCard).addClass('read')
      readCount++
      readCountText();
    }
  })

  deleteButton.addEventListener('click', function() {
    if($('#'+thisCard).hasClass('read')) {
      readCount--
      readCountText();
      $("#" + thisCard).remove();
      cardCount--;
     cardCountText();
      if (cardCount === 0){
        $('#count-container').slideToggle('slow', 'linear');
      }
    } else {
      $("#" + thisCard).remove();
      cardCount--;
      cardCountText();
      if (cardCount === 0){
        $('#count-container').slideToggle('slow', 'linear');
      }
    }
  })

  $titleInput.val("");
  $urlInput.val("");

  if (cardCount === 0){
    $('#count-container').slideToggle('slow', 'linear');
  }
  
  if (cardNumber === 1){ 
    $clearButton.delay(1500).slideToggle('slow')
  }

  cardNumber++;
  cardCount++;
  cardCountText();
}





function enableButton() {
  if ($titleInput.val().length === 0 || $urlInput.val() === ""){
    inputButton.disabled = true;
  } else {
    inputButton.disabled = false;
  }
}

function emptyInputError() {
  if ($titleInput.val() === "" || $urlInput.val() === "" || validateURL($urlInput.val())===false) {
    inputButton.innerText = "Please enter a Title & valid URL"
    setTimeout(function(){ inputButton.innerText = "Enter"; }, 3000);
    return true;
  };
}

function validateURL(value) {
    return /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
}
