import React from 'react';
import './App.css';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ArticlePage, ArticleListPage, NotFoundPage } from './pages';

// Ce composant contient l'application complète, et s'occupe d'appeler les composants à afficher
// en fonction des interactions utilisateur
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/articles" />
        <Route path="/articles/:id{\d+}" component={ArticlePage} />
        <Route exact path="/articles" component={ArticleListPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
