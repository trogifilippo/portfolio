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