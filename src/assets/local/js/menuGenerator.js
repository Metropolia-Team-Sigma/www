const pages = [
  { title: 'Koti', href: 'index.html' },
  { title: 'Tietoja', href: 'about.html' }
]

const items = pages.map(page => `<li><a href="${page.href}">${page.title}</a></li>`)

document.getElementById('menu').innerHTML = items.join('')
