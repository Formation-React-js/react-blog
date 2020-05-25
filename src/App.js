import React from 'react';
import './App.css';

import ArticleListPage from './pages/article-list-page';

// Ce composant contient l'application complète, et s'occupe d'appeler les composants à afficher
// en fonction des interactions utilisateur
const App = () => {
  return (
    <ArticleListPage />
  );
}

export default App;
