import galleryTemplate from '../templates/gallery-template.hbs';
import refs from './refs.js'
import showToastrInfo from './notifications.js'

     
const clearDom = () => refs.sectionGallery.innerHTML = ''

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
            }
            const markup = galleryTemplate(data.hits)
            refs.sectionGallery.insertAdjacentHTML('beforeend', markup)
            refs.hideSpiner.classList.remove('loader')
            console.log(page + 'верхний');

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
                refs.sectionGallery.insertAdjacentHTML('beforeend', markupNextPage)
            })
        }
        refs.hideSpiner.classList.remove('loader')
}


export  { fetchImages,clearDom }






// function fetchCountries() {
//     fetch(`https://restcountries.eu/rest/v2/name/${query}`)
//     .then(response => response.json())
//         .then(data => {
//         if (data.status === 404) {
//                 showToastrError()
//                 return
//         }
//         if (data.length === 1) {
//             clearDom()
//             const markup = oneCountryTemplate(data)
//             refs.markupFromTempl.insertAdjacentHTML('beforeend', markup)
//         }
//         if (data.length > 1 && data.length<10) {
//             const markup = listCountriesTemplate(data)
//             refs.markupFromTempl.insertAdjacentHTML('beforeend', markup)
//         } 
//         if (data.length > 10) {
//             showToastrInfo()
//         }
//     })
// }
// export { fetchCountries, refs, clearDom };

//      toastr.options = {
//         "progressBar": true,
//         "showDuration": "0",
//         "timeOut": "2500",
//         "showMethod": "show",
//     }
// const showToastrInfo = () => toastr["warning"]("Введите более конкретный запрос", "Слишком много совпадений")
// const showToastrError = () =>error("Уточните запрос","Ошибка!Такой страны не существует")
