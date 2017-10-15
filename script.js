var inputButton = document.querySelector("#input-button");
var titleInput = $("#title-input");
var urlInput = $("#url-input");
var listContainer = $("#list-container")
var cardTitle
var cardUrl
var cardNumber = 0;

inputButton.addEventListener('click', createCard);

function createCard() {

  cardTitle = titleInput.val();
  cardUrl = urlInput.val();
  if (validateURL(cardUrl) === false ){
    return false};
  var thisCard = 'link-card-' + cardNumber;

  listContainer.prepend(
    '<article class="link-card-container" id=' + "'" + thisCard + "'" + '> <h2 class="link-card-title">'+ cardTitle + '</h2><p><a href=' + "'" + cardUrl + "'" +' target="_blank">' + cardUrl + '</a></p> <footer class="link-card-footer"> <button class="link-card-read-button card-button">Read</button> <button class="link-card-delete-button card-button">Delete</button> </footer> </article>'
  );

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
  });

  titleInput.val("");
  urlInput.val("");
  cardNumber++ ;

};

function validateURL(value) {
    return /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
}