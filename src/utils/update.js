import {parseBooks} from "./parser.js";
import mainCard from "../components/cards/mainCard.js";
import errorComponent from "../components/error/errorComponent.js";
import loadingComponent from "../components/loading/loadingComponents.js";

const apiUrl = import.meta.env.VITE_API_URL;
const search = import.meta.env.VITE_SEARCH;

const container = document.getElementById('catalogue');
container.appendChild(loadingComponent());

export default async function updateMain(text) {
    text = text.split(" ").join("+")
    try {
        const req = await fetch(apiUrl + search + text);
        const body = await req.json();
        const books = parseBooks(body);

        container.innerHTML = ``;
        books.slice(0, 20).forEach(book => {
            const card = mainCard(book);
            container.appendChild(card);
        });

    } catch (err) {
        container.innerHTML = ``;
        container.appendChild(errorComponent());
        console.log(err)
    }
}

export function updateFavs(){
    console.log(1)
}