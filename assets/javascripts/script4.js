var $overlay = $('<div id="overlay"></div>');
var $immagine = $('<img>');
var $desc = $('<p></p>');

$("body").append($overlay);
$overlay.append($immagine);
$overlay.append($desc);

$($overlay).click(function(){
  $overlay.hide();
});

//Lightbox
$("#lavori img").click(function(){
  var href = $(this).attr("src"); 
  $overlay.show();
  $immagine.attr("src", href);
  $immagine.show();
  var titleDesc = $(this).attr("title");
  $desc.text(titleDesc);
});