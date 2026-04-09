import loadingComponent from "../components/loading/loadingComponents.js";
import updateMain from "../utils/update.js";

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

