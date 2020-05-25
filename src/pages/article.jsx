import React from 'react';
import articles from '../data/articles';
import NotFoundPage from './not-found';
import { Link } from 'react-router-dom';
import { Layout } from '../components';

// Le composant page article généré par un composant Route hérite automatiquement des
// données du router via ses props. La propriété "match" contient les informations
// liées aux paramètres qui ont été trouvés dans l'URL demandée.
const ArticlePage = ({ match }) => {
  const id = match.params.id;
  
  const article = articles[id];

  if (typeof article === 'undefined') {
    return <NotFoundPage />;
  }

  return (
    <Layout>
      <article>
        <h1>{article.title}</h1>
        <p>{article.content}</p>
        <div>{article.date.toLocaleDateString()}</div>
      </article>
      <Link to="/articles">
        <button>Retour</button>
      </Link>
    </Layout>
  );
}

export default ArticlePage;
