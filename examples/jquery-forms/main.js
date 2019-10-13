// wait until DOM elements are loaded
$(function() {
  $('#form').submit(function(event) {
    event.preventDefault() // stop the page from reloading

    const emailInput = $('#email').val()
    alert('Thanks for submitting ' + emailInput)
  })
})
