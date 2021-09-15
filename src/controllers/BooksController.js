import { getBook, getMyBooks, searchBooks, updateBook } from '../api/library.js';

class BooksController {
    constructor() {
        this.types = ["currentlyReading", "wantToRead", "read"];
    }

    getMyBooksFilterd(type) {
        return new Promise((resolve, reject) => {
            getMyBooks().then(data => {
                const myBooks = data.books.filter(book => book.shelf === type);
                resolve(myBooks);
            }).catch(reject);
        });
    }

    use(){
        getBook();
        searchBooks();
        updateBook();
    }
}

export default BooksController;