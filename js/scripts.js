$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    const shopping = $("#items").val().split(" ");
    const array = shopping.sort();
    array.forEach(function(item) {
      $("#list").append("<li>" + item + "</li>");
    });
  });
});