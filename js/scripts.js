// $(document).ready(function() {
//   $(".panel-success").click(function() {
//       $(".definition").slideToggle();
//       $(".panel-title").slideToggle();
//   });
// });

$(document).ready(function() {
  $(".panel-success").click(function() {
    $(this).children().slideToggle("definition");
  });
});
