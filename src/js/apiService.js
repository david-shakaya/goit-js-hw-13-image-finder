import galleryTemplate from '../templates/gallery-template.hbs';
import refs from './refs.js'

// import oneCountryTemplate from '../templates/one-Cty-Template.hbs';
// import { query } from '../index.js'
import toastr, { error } from 'toastr';
     
const clearDom = () => refs.sectionGallery.innerHTML = ''

const KEY = '14396786-a714bdf8d854f524afdc45598';
const perPage = 12


function fetchImages(query) {
fetch(`https://pixabay.com/api/?key=${KEY}&image_type=photo&orientation=horizontal&q=${query}&per_page=${perPage}`)
    .then(response => response.json())
    .then(data => {
        console.log(data.hits);
        const markup = galleryTemplate(data.hits)
        refs.sectionGallery.insertAdjacentHTML('beforeend', markup)

        window.addEventListener('scroll',()=>{
	const {scrollHeight,scrollTop,clientHeight} = document.documentElement;
            if (scrollTop + clientHeight > scrollHeight - 5) {
                fetch(`https://pixabay.com/api/?key=${KEY}&image_type=photo&orientation=horizontal&q=${query}&per_page=${perPage}`)
                const markup = galleryTemplate(data.hits)
                refs.sectionGallery.insertAdjacentHTML('beforeend', markup)
	}
});
    })
}
// The Scroll Event.

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
