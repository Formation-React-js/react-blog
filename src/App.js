import React from 'react';
import './App.css';

import ArticlePage from './pages/article';
import ArticleListPage from './pages/article-list-page';
import NotFoundPage from './pages/not-found';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// Ce composant contient l'application complète, et s'occupe d'appeler les composants à afficher
// en fonction des interactions utilisateur
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/articles" />
        <Route path="/articles/:id" component={ArticlePage} />
        <Route path="/articles" component={ArticleListPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
