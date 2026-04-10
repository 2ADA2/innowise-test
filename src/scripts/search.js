import loadingComponent from "../components/loading/loadingComponents.js";
import updateMain, {filterByAuthor} from "../utils/update.js";

const searchField = document.getElementById('search-field');
const container = document.getElementById('catalogue');
let timer = null
let isLoading = false

function search(text) {
    clearTimeout(timer)
    timer = setTimeout(() => {
        isLoading = false
        updateMain(text)
    }, 1000)
}

searchField.addEventListener('keyup', e => {
    if (!isLoading) {
        isLoading = true
        container.innerHTML = '';
        container.appendChild(loadingComponent());
    }
    search(e.target.value)
})

const filterField = document.getElementById('filter-field');
let filterTimer = null;
let isFilters = false

function startFilter(text) {
    clearTimeout(filterTimer)
    filterTimer = setTimeout(() => {
        isLoading = false
        filterByAuthor(text)
    }, 1000)
}

filterField.addEventListener('keyup', e => {
    if (!isFilters) {
        isFilters = true
    }
    startFilter(e.target.value)
})
