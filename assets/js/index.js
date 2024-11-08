/* ====================== NAVBAR ====================== */
const menu = document.getElementById('menu')
const nav = document.querySelector('.nav')
const links = nav.querySelectorAll('.menu__link')


nav.addEventListener('click', function (event) {
  if (event.target.closest('#btnOpen')) {
    menu.classList.add('show-menu')
  }

  if (event.target.closest('#btnClose')) {
    menu.classList.remove('show-menu')
  }

  if (event.target.matches('.menu__link')) {
    menu.classList.remove('show-menu')

    for (const link of links) {
      link.classList.remove('active')
    }

    event.target.classList.add('active')
  }
})

/* =================== ScrollReveal =================== */

const sr = new ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
})

sr.reveal('.hero__content-img', { origin: 'right', distance: '100px' })
sr.reveal('.hero__content-body', { origin: 'left', distance: '100px' })
sr.reveal('.about p', { origin: 'bottom', distance: '100px', duration: 2000 })
sr.reveal('.about p+p', { origin: 'bottom', distance: '100px', duration: 3000 })
sr.reveal('.skills__content', { origin: 'top', distance: '100px' })