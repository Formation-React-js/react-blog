import React from 'react';
import ArticlePreview from '../components/article-preview';
import articles from '../data/articles';

const ArticleListPage = (props) => {
  return (
    <ul>
      {/* La méthode map permet de transformer chaque élément du tableau de départ en
      un composant JSX qui reçoit ses données comme props */}
      {articles.map(
        (article, index) =>
          <li key={index}>
            <ArticlePreview              
              title={article.title}
              date={article.date}
              content={article.content}
            />
          </li>
      )}
    </ul>
  );
};

export default ArticleListPage;
