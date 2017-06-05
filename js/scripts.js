$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var libs = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

    libs.forEach(function(lib) {
    var userInput = $("input#" +lib).val();
    $("." + lib).text(userInput);
  });


    $("#story").show();

    event.preventDefault();
  });
});
