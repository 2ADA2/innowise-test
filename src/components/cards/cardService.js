import {updateFavs} from "../../utils/update.js";

const notInFavs = "./src/assets/notInFavs.svg";
const inFavs = "./src/assets/inFavs.svg";
const placeholder = "./src/assets/book_placeholder.png";

export function setPlaceholder(img) {
    img.onerror = null;
    img.src = placeholder;
}

export function checkFav(id) {
    const favs = JSON.parse(localStorage.getItem("favorites"));
    if (favs && id in favs) {
        return inFavs;
    }
    return notInFavs;
}

export function setInFavs(e, book) {
    let books = localStorage.getItem("favorites");
    books = books ? JSON.parse(books) : {};
    const id = book.id
    if (books && id in books) {
        delete books[id]
    } else {
        books[id] = book
    }
    localStorage.setItem("favorites", JSON.stringify(books));

    if (e.target.className === "fav-button") {
        e.target.children[0].src = e.target.src = checkFav(id);
    } else e.target.src = checkFav(id);
    updateFavs();

    // update fav-button status
    const mainButton = document.getElementById(`mf-${book.id}`);
    mainButton.firstChild.src = checkFav(id);
}