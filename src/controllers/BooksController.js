import { getMyBooks, searchBooks, updateBook } from '../api/library.js';
import NavigationPages from '../data/NavigationPages';

class BooksController {
    constructor() {
        this.types = NavigationPages.pages.map((page) => page.shelf);
        this._inscritos = [];
    }

    notificar() {
        this._inscritos.forEach(func => func());
    }

    inscrever(func) {
        this._inscritos.push(func);
    }

    desinscrever(func) {
        this._inscritos = this._inscritos.filter(f => f !== func);
    }

    getMyBooksFilterd(type, setDado) {
        getMyBooks().then(data => {
            const myBooks = data.books.filter(book => book.shelf === type);
            setDado(myBooks);
        });
    }

    updateBook(book, shelf) {
        updateBook(book, shelf).then(data => {
            this.notificar();
        });

    }

    searchBooks(query, setDado){
        searchBooks(query).then(data => {
            setDado(data.books);
        });
    }
}

export default BooksController;