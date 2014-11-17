jQuery(document).ready(function($) {
  $('body').on("click", '.scroll-btn', function(e) {
    var page = $(this).closest('.page');
    if ( $(this).hasClass('up') ) {
      $("html, body").animate({ scrollTop: page.prev().offset().top }, 1000);
    } else if ( $(this).hasClass('down') ) {
      $("html, body").animate({ scrollTop: page.next().offset().top }, 1000);
    }
    e.preventDefault();
  });
});