import {checkFav, setInFavs, setPlaceholder} from "./cardService.js";

export default function mainCard(book) {
    const card = document.createElement('div');
    card.className = 'main-card';

    card.innerHTML = `
        <div class="card-cover">
            <button class="fav-button" id="mf-${book.id}"><img src="${checkFav(book.id)}"></button>
            <img src="${book.cover}" alt="${book.title}" class="main-card-cover"/>
        </div>
        <div class="card-info">
            <h3 class="card-title">${book.title}</h3>
            <p class="card-author">${book.author}</p>
            <span class="card-year">${book.year || ''}</span>
        </div>
    `;

    const img = card.getElementsByClassName('main-card-cover')[0];
    img.onerror = () => setPlaceholder(img);

    card.querySelector("button").addEventListener('click', (e) => {
        setInFavs(e, book)
    })

    return card;
}