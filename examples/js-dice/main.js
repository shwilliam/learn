const diceButton = document.getElementById('dice-button')

diceButton.addEventListener('click', function() {
  const randomNumber = Math.floor(Math.random() * Math.floor(6))

  alert('You rolled: ' + randomNumber)
})
