var inputButton = document.querySelector("#input-button");
var titleInput = $("#title-input");
var urlInput = $("#url-input");
var deleteButton = $(".link-card-delete-button")
var listContainer = $("#list-container")
var cardTitle
var cardUrl
var cardNumber = 0;

inputButton.addEventListener('click', createCard);

function createCard() {
  console.log('create click')
  cardTitle = titleInput.val();
  cardUrl = urlInput.val();
  var thisCard = 'link-card-' + cardNumber;

  listContainer.prepend(
    '<article class="link-card-container" id=' + "'" + thisCard + "'" + '> <h2 class="link-card-title">'+ cardTitle + '</h2><p><a href=' + "'" + cardUrl + "'" +'>' + cardUrl + '</a></p> <footer class="link-card-footer"> <button class="link-card-read-button card-button">Read</button> <button class="link-card-delete-button card-button">Delete</button> </footer> </article>'
  );
  // still need to make the links actually be links & style them

  var deleteButton = document.querySelector('.link-card-delete-button')
  var readButton = document.querySelector('.link-card-read-button')

  deleteButton.addEventListener('click', function() {
    $('#'+thisCard).remove()
  });

  readButton.addEventListener('click', function() {
    if( $('#'+thisCard).hasClass('read') ) {
      $('#'+thisCard).removeClass('read')
    } else {
      $('#'+thisCard).addClass('read')
    }
    console.log('reading class')
  });

  cardNumber++
};