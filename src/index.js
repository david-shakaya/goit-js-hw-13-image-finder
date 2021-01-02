import './styles.css';
// import { fetchCountries, refs, clearDom } from './js/fetch-countries.js'
import refs from './js/refs'
import { fetchImages,clearDom } from './js/apiService'
import '../node_modules/toastr/build/toastr.css';
// import './js/apiService.js'

import debounce from 'lodash.debounce'



const input = refs.searchForm.firstElementChild
input.addEventListener('input', debounce(getsInputValue, 500))
let query = ''
function getsInputValue(e) {
query = e.target.value
   
    console.log(query);
     if (query ==='') {
        clearDom()
        return
    }
    fetchImages(query)
    clearDom()

 }


// let query = ''
//  refs.inputСountry.addEventListener('input',debounce(getsNameСountry, 500) )
// function getsNameСountry(e) {
//     query = e.target.value
//     if (query ==='') {
//         clearDom()
//         return
//     }
//     fetchCountries()
//     clearDom()
// }

// export { query }



