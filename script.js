$(document).ready(function() {
  $("#menu-icon").click(function() {
    $(this).toggleClass("active");
    $("#menu-list").toggle("slide");
  });

  $(document).click(function(event) {
    if(!$(event.target).closest('#menu-icon').length && !$(event.target).closest('#menu-list').length) {
      $("#menu-icon").removeClass("active");
      $("#menu-list").hide("slide");
    }
  });
});
