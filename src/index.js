import './styles.css';
import '../node_modules/basiclightbox/dist/basiclightbox.min.css'
import refs from './js/refs'
import { fetchImages,clearDom } from './js/apiService'
import '../node_modules/toastr/build/toastr.css';
import debounce from 'lodash.debounce'


const input = refs.searchForm.firstElementChild
input.addEventListener('input', debounce(getsInputValue, 500))

let query = ''
function getsInputValue(e) {
query = e.target.value
     if (query ==='') {
        clearDom()
        return
    }
    refs.hideSpiner.classList.add('loader')
    fetchImages(query)
    clearDom()

 }



