$(function () {
  $box = $("#box");

  $box.find(".addNewOne").click(function () {
    var $tmp = $(this).prev().clone();
    $tmp.find("input").val("");
    $tmp
      .find("select > option")
      .first()
      .prop("selected");
    $tmp.insertBefore($(this));
  });

  $box.find('.box-close').click(function () {
    $box.removeClass('show');
    $box.addClass('hide');
  })

  $('.box-show-up').click(function () {
    $box.removeClass('hide');
    $box.addClass('show');
  });
});