// code to add new blog
$(document).ready(function() {
    // Listen for form submit events
    $('#new-post-form').on('submit', function(event) {
      // Prevent the default form submission behavior
      event.preventDefault();
  
      // Get the form data as an object
      var formData = $(this).serializeArray();
  
      // Create a new blog post element
      var postElement = $('<div>').addClass('blog-post');
      $('<h2>').text(formData[0].value).appendTo(postElement);
      $('<p>').text('--By ' + formData[1].value).appendTo(postElement);
      $('<p>').text(formData[2].value).appendTo(postElement);
  
      // Append the new blog post to the page
      $('#blog-posts').append(postElement);
  
      // Clear the form inputs
      $('#new-post-form')[0].reset();
    });
});
  