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
  var $logo2 = $('<img src="assets/images/biancovero trasparente_fermoepausa_noloop.gif" id="logo_2">');
  var $hero = $('.hero');
  var $header = $('header');
  var header_bottom_position = ($header.offset().top + $header.outerHeight());
  if ($hero.offset().top < window_top_position) {
      $hero.removeClass('widescreen');
      $hero.addClass('hero-reducted');
      $header.css('background' , '#ffffff');
      $header.css('height' , '90px');
      $('#head-logo').css('width' , '120px');
      $hero.css('margin-top' , '90px');
      $header.css('box-shadow' , '0 3px 2px rgba(255, 255, 255, .8)');
    } else {
      $hero.addClass('widescreen');
      $hero.removeClass('hero-reducted');
      $hero.css('margin-top' , '0');
      $header.css('background' , 'transparent');
      $header.css('height' , '120px');
      $header.css('box-shadow' , 'none');
      $('#head-logo').css('width' , '150px');
      $('#about-link').removeClass('active');
    }

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

$window.on('scroll', check_if_in_view);
$window.on('click', checkMenu);
$window.trigger('click');

  /* Set the width of the side navigation to 250px */
function openNav() {
  $("#mySidenav").css('width', '50%');
  $('.sidenav .invisible').css('display', 'none');
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  $("#mySidenav").css('width', '0');
}

var acc = $(".accordion");
var i;
var panels = $('.panel');
for (i = 0; i < acc.length; i++) {
    $(acc[i]).click (function(){
        if ($(this).hasClass("active")) {
          $(this).removeClass("active");
          panels.removeClass("show");
        } else {
          acc.removeClass('active');
          $(this).addClass("active");
          panels.removeClass("show");
          $(this).next().addClass("show");
        }
    });
}

