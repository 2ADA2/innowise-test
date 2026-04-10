# 📚 Inno-test ( simple library )

A simple JavaScript application for searching books using an external API, displaying results, and managing a list of favorite books stored in `localStorage`.

---

# How to start development server
```bash
npm run dev
```

## 🚀 Features

* 🔍 Search books by title
* 👤 Filter books by author
* ⭐ Add/remove books from favorites
* 💾 Persist favorites in `localStorage`
* ⚡ Debounced search & filtering
* 🖼️ Fallback images for missing covers
* 📦 Modular project structure

---

## 🗂️ Project Structure

```
public/
src/
│
├── components/
│   ├── cards/
│   │   ├── cardService.js     # Shared logic for cards (favorites, placeholders, etc.)
│   │   ├── favCard.js         # Component for rendering favorite book cards
│   │   └── mainCard.js        # Component for rendering main book cards
│   │
│   ├── error/
│   │   └── errorComponent.js  # UI component for displaying errors
│   │
│   ├── loading/
│   │   └── loadingComponents.js # Loading state component
│   │
│   └── not found/
│       └── notFound.js        # Component for empty results
│
├── scripts/
│   ├── main.js                # App entry point (initial load)
│   └── search.js              # Handles search and filtering logic
│
├── stylesheet/
│   ├── favCard.css
│   ├── favourites.css
│   ├── main.css
│   └── mainCard.css          # Styles for UI components
│
├── utils/
│   ├── parser.js             # Transforms API response into app-friendly format
│   └── update.js             # Core logic for fetching, rendering, filtering, and favorites
│
├── style.css                 # Global styles
└── .env                      # Environment variables
```

---

## 🧩 Module Overview

### `components/cards/`

Contains reusable UI components for displaying books.

* **cardService.js**

    * Handles:

        * Placeholder images
        * Favorites logic (add/remove/check)
        * Updating favorite state in UI
    * Uses `localStorage` to persist data

* **mainCard.js**

    * Renders a book in the main catalogue
    * Includes a favorite button

* **favCard.js**

    * Renders a compact version of a book inside favorites

---

### `components/error/`, `loading/`, `not found/`

Small UI helpers for different states:

* `errorComponent.js` → shows error messages
* `loadingComponents.js` → shows loading indicator
* `notFound.js` → displayed when no books are found

---

### `scripts/`

* **main.js**

    * Entry point of the app
    * Loads default books
    * Initializes favorites

* **search.js**

    * Handles:

        * Search input (debounced)
        * Author filtering (debounced)
        * Loading state UI

---

### `utils/`

* **parser.js**

    * Converts raw API response into a normalized format:

      ```js
      {
        title,
        author,
        year,
        cover,
        id
      }
      ```

* **update.js**

    * Core logic of the app:

        * Fetching books from API
        * Rendering book cards
        * Filtering by author
        * Managing favorites UI

---

## ⚙️ Environment Variables

Create a `.env` file in the root:

```
VITE_API_URL=your_api_base_url
VITE_SEARCH=your_search_endpoint
VITE_DEFAULT_REQ=default_search_query
```

---

## 🔄 Data Flow

1. User types in search field
2. `search.js` debounces input
3. `updateMain()` fetches data from API
4. `parser.js` formats the data
5. `mainCard.js` renders results
6. User can:

    * Add to favorites → saved in `localStorage`
    * Filter results → handled in `update.js`

---

## 💡 Notes

* Favorites are stored as an object in `localStorage`:

  ```json
  {
    "bookId": { bookObject }
  }
  ```
* Max 20 books are displayed at once
* Images fallback to a placeholder if unavailable

---

## 🛠️ Tech Stack

* Vanilla JavaScript (ES Modules)
* HTML / CSS
* Vite (for environment variables and dev setup)
* Open Library API (or similar)

---

## 📌 Future Improvements

* Pagination / infinite scroll
* Better UI/UX
* Sorting options
* Unit tests
* TypeScript support

---

## 📄 License

This project is open-source and available under the MIT License.
