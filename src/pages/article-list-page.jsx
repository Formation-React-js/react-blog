import React from 'react';
import ArticlePreview from '../components/article-preview';
import articles from '../data/articles';
import Layout from '../components/layout';

const ArticleListPage = (props) => {
  return (
    <Layout>
      <ul>
        {/* La méthode map permet de transformer chaque élément du tableau de départ en
        un composant JSX qui reçoit ses données comme props */}
        {articles.map(
          (article, index) =>
            <li key={index}>
              {/* Génère un composant en lui passant comme props toutes les propriétés
              de chaque objet article
              Remplace title={article.title}, content={article.content}, etc.
              */}
              <ArticlePreview
                {...article}
              />
            </li>
        )}
      </ul>
    </Layout>
  );
};

export default ArticleListPage;
