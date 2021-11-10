$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    const shopping = $("#items").val().toUpperCase().split(" ");
    if (shopping === 0) {
      shopping.trim();
    }
    const array = shopping.sort();
    array.forEach(function(item) {
      $("#list").append("<li>" + item + "</li>");
    });
  });
});