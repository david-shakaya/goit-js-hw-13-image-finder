import galleryTemplate from '../templates/gallery-template.hbs';
import refs from './refs.js'

// import oneCountryTemplate from '../templates/one-Cty-Template.hbs';
// import { query } from '../index.js'
import toastr, { error } from 'toastr';
     
// const clearDom = () => refs.markupFromTempl.innerHTML = ''



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

const KEY = '14396786-a714bdf8d854f524afdc45598';
const perPage = 12

function fetchImages() {
fetch(`https://pixabay.com/api/?key=${KEY}&image_type=photo&orientation=horizontal&q=ye&per_page=${perPage}`)
    .then(response => response.json())
    .then(data => {
        console.log(data.hits);
        const markup = galleryTemplate(data.hits)
        refs.markupFromTempl.insertAdjacentHTML('beforeend', markup)
    })
}
fetchImages()