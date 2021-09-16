import { getBook, getMyBooks, searchBooks, updateBook } from '../api/library.js';
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

    getMyBooksFilterd(type, setDado, isDone) {
        getMyBooks().then(data => {
            const myBooks = data.books.filter(book => book.shelf === type);
            isDone = true;
            setDado(myBooks);
        });
    }

    updateBook(book, shelf) {
        updateBook(book, shelf).then(data => {
            this.notificar();
        });

    }

    use() {
        getBook();
        searchBooks();
    }
}

export default BooksController;