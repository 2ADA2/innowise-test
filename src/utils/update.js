import {parseBooks} from "./parser.js";
import mainCard from "../components/cards/mainCard.js";
import errorComponent from "../components/error/errorComponent.js";
import loadingComponent from "../components/loading/loadingComponents.js";
import notFoundComponent from "../components/not found/notFound.js";
import favCard from "../components/cards/favCard.js";

const apiUrl = import.meta.env.VITE_API_URL;
const search = import.meta.env.VITE_SEARCH;

const container = document.getElementById('catalogue');
container.appendChild(loadingComponent());

export default async function updateMain(text) {
    text = text.split(" ").join("+");
    try {
        const req = await fetch(apiUrl + search + text);
        const body = await req.json();
        const books = parseBooks(body);

        container.innerHTML = ``;
        if (books.length === 0) {
            container.appendChild(notFoundComponent());
        }
        books.slice(0, 20).forEach(book => {
            const card = mainCard(book);
            container.appendChild(card);
        });

    } catch (err) {
        container.innerHTML = ``;
        let errorText = "Something went wrong"
        if (text.length < 3) {
            errorText = "Your request is too short!"
        }
        container.appendChild(errorComponent(errorText));
        console.log(err);
    }
}


const fav = document.getElementById("fav");
const favInfo = document.getElementById("fav-info");

export function updateFavs() {
    let books = localStorage.getItem('favorites');
    books = books ? JSON.parse(books) : {};
    fav.innerHTML = ``;
    let c = 0
    for (let id in books) {
        const book = books[id];
        fav.appendChild(favCard(book));
        c++;
    }
    favInfo.innerHTML = `${c} books saved`;
}