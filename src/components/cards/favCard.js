import {checkFav, placeholder, setInFavs, setPlaceholder} from "./cardService.js";

export default function favCard(book) {
    const card = document.createElement('div');
    card.className = 'fav-card';

    let title = book.title.length > 50 ? book.title.substring(0, 50) + '...' : book.title;
    let author = book.author.length > 30 ? book.author.substring(0, 30) + '...' : book.author;

    card.innerHTML = `
        <div class="fav-card-cover">
            <img src="${book.cover || placeholder}" alt="${book.title}" class="fav-card-cover"/>
        </div>
        <div class="fav-card-info">
            <h5 class="fav-card-title">${title}</h5>
            <p class="fav-card-author">${author}</p>
            <span class="fav-card-year">${book.year || ''}</span>
        </div>
        <button class="fav-button" id="ff-${book.id}"><img src="${checkFav(book.id)}"></button>
    `;

    const img = card.getElementsByClassName('fav-card-cover')[0];
    img.onerror = () => setPlaceholder(img);

    card.querySelector("button").addEventListener('click', (e) => {
        setInFavs(e, book)
    })

    return card;
}