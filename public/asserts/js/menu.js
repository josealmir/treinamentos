document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.querySelector('[data-mobile-toggle]')
  const mobileMenu = document.getElementById('mobile-menu')

  function closeMobile() {
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden')
    }
  }

  function closeAllDropdowns() {
    document.querySelectorAll('.dropdown-menu').forEach((el) => {
      el.classList.add('hidden')
    })
    document.querySelectorAll('[data-dropdown] svg').forEach((svg) => {
      svg.classList.remove('rotate-180')
    })
    document.querySelectorAll('.desktop-dropdown-menu').forEach((el) => {
      el.classList.add('opacity-0', 'invisible')
    })
    document.querySelectorAll('[data-dropdown-desktop] svg').forEach((svg) => {
      svg.classList.remove('rotate-180')
    })
  }

  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener('click', function (e) {
      e.stopPropagation()
      mobileMenu.classList.toggle('hidden')
    })
  }

  document.querySelectorAll('[data-dropdown]').forEach((btn) => {
    btn.addEventListener('click', function (e) {
      e.stopPropagation()
      const content = this.nextElementSibling
      if (!content) return
      content.classList.toggle('hidden')
      const svg = this.querySelector('svg')
      if (svg) svg.classList.toggle('rotate-180')
    })
  })

  document.querySelectorAll('[data-dropdown-desktop]').forEach((btn) => {
    btn.addEventListener('click', function (e) {
      e.stopPropagation()
      const isOpen = this.getAttribute('aria-expanded') === 'true'
      closeAllDropdowns()
      if (!isOpen) {
        this.setAttribute('aria-expanded', 'true')
        const content = this.nextElementSibling
        if (content) {
          content.classList.remove('opacity-0', 'invisible')
        }
        const svg = this.querySelector('svg')
        if (svg) svg.classList.add('rotate-180')
      }
    })
  })

  document.addEventListener('click', function (e) {
    if (!e.target.closest('[data-dropdown-desktop]') && !e.target.closest('.desktop-dropdown-menu')) {
      closeAllDropdowns()
    }
    closeMobile()
  })

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeMobile()
      closeAllDropdowns()
    }
  })
})
