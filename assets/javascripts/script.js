
function openNav() {
  $("#mySidenav").css('width', '50%');
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  $("#mySidenav").css('width', '0');
}


function openForm(){
  $(".form").css('display', 'block');
}

function closeForm(){
  $(".form").css('display', 'none');
}


  //animazioni onscroll
var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if (element_top_position <= window_bottom_position) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
  var $gif = $('<img src="assets/images/me.jpg" alt="me" title="me" id="prova">');
  if (($('#el-logo').hasClass('in-view')) && (!$('#el-logo').children('#prova').length)) {
    $('#el-logo').append($gif);
  } else {
    $('#el-logo').detach($gif);
  };
  var $hero = $('.hero');
  var $header = $('header');
  var header_bottom_position = ($header.offset().top + $header.outerHeight());
  if ($hero.offset().top < header_bottom_position) {
      $hero.css('height' , '450px');
      $('.hero::after').css('border-width','225px 0 225px 100px;');
    } else {
      $hero.css('height' , 'calc(100vh - 90px)');
    }


  if (($('.cta-ok').hasClass('in-view'))) {
    $('.cta').hide();
  } else {
    $('.cta').show();
  };

}

function addBackground(){
  $('#home').css('background-color' , 'rgba(0, 172, 170, .2)');
}

var myDropdown = $('.dropdown-content');

 function openDropdwn(){
      $('.dropdown-content').addClass('show');
      $('.dropdown-content').css('display', 'block');
      $('.dropbtn span').css('transform', 'rotateX(180deg)');
}

function closeDropdwn(){
    $('.dropdown-content').removeClass('show');
    $('.dropdown-content').css('display', 'none');
    $('.dropbtn span').css('transform', 'rotateX(0deg)');
}

function checkMenu(){
  if (!myDropdown.hasClass('show')) {
    $('.dropbtn').on('click', openDropdwn)
  } else {
    $('.dropbtn').on('click', closeDropdwn);
    $('main').on('click', closeDropdwn);
  }
}

$window.on('click', checkMenu);
$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');






