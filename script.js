var inputButton = document.querySelector("#input-button");
var titleInput = $("#title-input");
var urlInput = $("#url-input");
var deleteButton = $(".link-card-delete-button")
var listContainer = $("#list-container")
var cardTitle
var cardUrl

inputButton.addEventListener('click', createCard)
function createCard() {
  console.log('create click')
  cardTitle = titleInput.val();
  cardUrl = urlInput.val();
  var timeId = Date.now();
  listContainer.prepend(
    '<article class="link-card-container" id=' + "'" + timeId + "'" + '> <h2 class="link-card-title">'+ cardTitle + '</h2><p>' + cardUrl + '</p> <footer class="link-card-footer"> <button class="link-card-read-button card-button">Read</button> <button class="link-card-delete-button card-button">Delete</button> </footer> </article>'
  );

  // still need to make links actually links & style them

  var deleteButton = document.querySelector('.link-card-delete-button')
  var readButton = document.querySelector('.link-card-read-button')

  deleteButton.addEventListener('click', function() {
    $('#'+timeId).remove()
  });
  
  readButton.addEventListener('click', function() {
    if( $('#'+timeId).hasClass('read') ) {
      $('#'+timeId).removeClass('read')
    } else {
      $('#'+timeId).addClass('read')
    }
    console.log('class click')
  });

};