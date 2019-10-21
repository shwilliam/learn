$(function() {
  $('#about-link').click(function(event) {
    event.preventDefault() // prevent jump to anchor
    document
      .getElementById('about')
      .scrollIntoView({behavior: 'smooth'})
  })

  $('#contact-link').click(function(event) {
    event.preventDefault()
    document
      .getElementById('contact')
      .scrollIntoView({behavior: 'smooth'})
  })

  $('#more-link').click(function(event) {
    event.preventDefault()
    document
      .getElementById('more')
      .scrollIntoView({behavior: 'smooth'})
  })
})
