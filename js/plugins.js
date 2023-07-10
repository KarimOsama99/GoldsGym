$(function () {
  $(window).on("scroll", function () {
    var sc = $(window).scrollTop();

    if (sc > 550) {
      $("#btn-top").fadeIn();
    } else {
      $("#btn-top").fadeOut();
    }
  });

  $("#btn-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
});
