import galleryTemplate from '../templates/gallery-template.hbs';
import refs from './refs.js'
import {showToastrInfo, showToastrSuccess} from './notifications.js'
import returnCurentImg from './basicLightbox.js'

const clearDom = () => refs.ulGallery.innerHTML = ''

const KEY = '14396786-a714bdf8d854f524afdc45598';
const perPage = 12
let page = 1
let queryForPageTwo = ''
let isEndPage = false

function fetchImages(query) {
    queryForPageTwo = query
    page = 1
    isEndPage = false
    fetch(`https://pixabay.com/api/?key=${KEY}&image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=${perPage}`)
        .then(response => response.json())
        .then(data => {
            if (data.hits.length === 0) {
                showToastrInfo()
            } else {
                showToastrSuccess(data.totalHits)
            }
            
            const markup = galleryTemplate(data.hits)
            refs.ulGallery.insertAdjacentHTML('beforeend', markup)
            refs.hideSpiner.classList.remove('loader')

            const gallery = document.querySelector('.gallery');
            gallery.addEventListener('click', returnCurentImg)

            if (data.hits.length <= 11) {
                isEndPage = true
                console.log('Верхний меньше 11');
                }
        })
    window.addEventListener('scroll', fetchImagesNextPages)
}
// Scroll Event

function fetchImagesNextPages(e) {
    if (isEndPage) {
        refs.hideSpiner.classList.remove('loader')
        return
    }
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight > scrollHeight - 1) {
        page += 1
        fetch(`https://pixabay.com/api/?key=${KEY}&image_type=photo&orientation=horizontal&q=${queryForPageTwo}&page=${page}&per_page=${perPage}`)
            .then(response => response.json())
            .then(data => {
                if (data.hits.length <= 11) {
                    isEndPage = true
                }
               
                refs.hideSpiner.classList.add('loader')
                const markupNextPage = galleryTemplate(data.hits)
                refs.ulGallery.insertAdjacentHTML('beforeend', markupNextPage)
                const gallery = document.querySelector('.gallery');
                console.log(gallery);
                gallery.addEventListener('click', returnCurentImg)
            })
    }
        refs.hideSpiner.classList.remove('loader')
}

export  { fetchImages,clearDom }

