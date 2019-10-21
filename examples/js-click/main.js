const infoToggle = document.getElementById('info-toggle')
const moreInfo = document.getElementById('more-info')

infoToggle.addEventListener('click', function() {
  if (moreInfo.hidden) {
    infoToggle.innerText = 'Hide text'
    moreInfo.hidden = false
  } else {
    infoToggle.innerText = 'Show text'
    moreInfo.hidden = true
  }
})
