import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import Search from '../Search';
import BooksList from '../BooksList';
import Breadcrumb from '../Breadcrumb';
import BooksController from '../../controllers/BooksController';
import ApiContext from '../../contexts/ApiContext';

function App() {

  const bc = new BooksController();

  return (
    <ApiContext.Provider value={{controller: bc}}>
      <Router>
        <Header></Header>
        <Breadcrumb></Breadcrumb>
        <Switch>
          <Route exact path="/">
            <BooksList type={bc.types[0]} getBooks={bc.getMyBooksFilterd} updateBook={bc.updateBook}></BooksList>
          </Route>
          <Route path="/reading">
            <BooksList type={bc.types[0]} getBooks={bc.getMyBooksFilterd} updateBook={bc.updateBook}></BooksList>
          </Route>
          <Route path="/want_read">
            <BooksList type={bc.types[1]} getBooks={bc.getMyBooksFilterd} updateBook={bc.updateBook}></BooksList>
          </Route>
          <Route path="/read">
            <BooksList type={bc.types[2]} getBooks={bc.getMyBooksFilterd} updateBook={bc.updateBook}></BooksList>
          </Route>
          <Route path="/search/:type">
            <Search></Search>
          </Route>
          <Redirect from="/search" to="/" />
          <Route path="/">
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </ApiContext.Provider>
  );
}

export default App;