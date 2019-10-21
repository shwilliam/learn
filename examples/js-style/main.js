const backgroundSelect = document.getElementById('background-select')

backgroundSelect.addEventListener('change', function() {
  document.body.style.backgroundColor = backgroundSelect.value
})
