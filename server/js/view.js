$(document).on("click", "#saveComment", function() {
  // Grab the id associated with the article from the submit button
  var thisTitle = $("#productTitle").attr("data-title");
  console.log(thisTitle)
  // thisId.replace()
  console.log("/product/" + thisTitle)
  // Run a POST request to change the note, using what's entered in the inputs
  $.ajax({
    method: "POST",
    url: "/product/" + thisTitle,
    data: {
      // Value taken from title input
      author: $("#author").val().trim(),
      title: $("#title").val().trim(),
      // Value taken from note textarea
      rating:$("#rating").val(),
      body: $("#body").val()
    }
  })
    // With that done
    .then(function(data) {
      // Log the response
      console.log(data);
      // Empty the notes section
      // $("#notes").empty();
    });

  // Also, remove the values entered in the input and textarea for note entry
  // $("#titleinput").val("");
  // $("#bodyinput").val("");
});