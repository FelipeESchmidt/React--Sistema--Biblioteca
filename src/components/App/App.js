import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import Search from '../Search/Search';

function App() {

  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <h1>Reading</h1>
        </Route>
        <Route path="/reading">
          <h1>Reading</h1>
        </Route>
        <Route path="/want_read">
          <h1>Want to read</h1>
        </Route>
        <Route path="/read">
          <h1>Read</h1>
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