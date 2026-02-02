import AOS from 'aos'
import 'aos/dist/aos.css'
import './style.css'

/**
 * Одностраничный сайт (Single Page Application, SPA) —
 * веб-приложение, в котором обновление контента
 * осуществляется без полной перезагрузки страницы.
 */

const GALLERY_URLS: string[] = [
  'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1400&q=80'
]

AOS.init({
  once: true,
  duration: 700,
  offset: 80,
  easing: 'ease-out-cubic'
})

function renderGallery(): void {
  const grid = document.getElementById('galleryGrid')
  if (!grid) return

  grid.innerHTML = GALLERY_URLS.map((url, index) => `
    <figure class="shot" data-aos="fade-up" data-aos-delay="${index * 80}">
      <img src="${url}" alt="Robot image ${index + 1}" />
    </figure>
  `).join('')
}

document.addEventListener('DOMContentLoaded', () => {
  renderGallery()
})
