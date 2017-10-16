
// VARIABLES

var titleInput = $("#title-input");
var urlInput = $("#url-input");
var inputButton = document.getElementById("input-button");
var listContainer = $("#list-container")
var cardNumber = 1

// EVENT LISTENERS

inputButton.addEventListener('click', createCard);

// FUNCTIONS


function createCard() {
  var cardTitle = $(titleInput).val();
  var cardUrl = $(urlInput).val();
  var thisCard = "link-card-" + cardNumber;
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
    $("#" + thisCard).toggleClass("read");
  })
  deleteButton.addEventListener('click', function() {
    $("#" + thisCard).remove();
  })

  cardNumber++;
}



