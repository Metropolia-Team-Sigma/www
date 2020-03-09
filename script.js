
const navWrapper = document.querySelector('.nav-wrapper')
const navToogler = document.querySelector('.nav-toogler')

navToogler.addEventListener('click', function (event) {
  navWrapper.classList.toggle('active')
})
