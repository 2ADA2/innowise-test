export function parseBooks(data) {
    return data.docs.map(book => ({
        title: book.title || "No title",
        author: book.author_name ? book.author_name.join(", ") : "Unknown",
        year: book.first_publish_year || null,
        cover: book.cover_i
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}.jpg`
            : null,
        id:book.title + book.author + book.year
    }));
}