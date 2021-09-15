import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from '../Header';
import Search from '../Search';
import BooksList from '../BooksList';
import BooksController from '../../controllers/BooksController';

function App() {

  const booksController = new BooksController();

  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <BooksList type={booksController.types[0]} getBooks={booksController.getMyBooksFilterd}></BooksList>
        </Route>
        <Route path="/reading">
          <BooksList type={booksController.types[0]} getBooks={booksController.getMyBooksFilterd}></BooksList>
        </Route>
        <Route path="/want_read">
          <BooksList type={booksController.types[1]} getBooks={booksController.getMyBooksFilterd}></BooksList>
        </Route>
        <Route path="/read">
          <BooksList type={booksController.types[2]} getBooks={booksController.getMyBooksFilterd}></BooksList>
        </Route>
        <Route path="/search/:type">
          <Search></Search>
        </Route>
        <Redirect from="/search" to="/" />
        <Route path="/">
          <h1>404</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;