import React from 'react';
import PropTypes from 'prop-types';

// Le nom "props" peut être remplacé par une série de propriétés entre accolades
// pour les extraire directement de l'objet et les assigner à des constantes.
// La ligne 9 est l'équivalent de:
// const ArticlePreview = (props) => {
//   const { title, content, date } = props;
const ArticlePreview = ({ title, content, date }) => {
  return (
    <article>
      <h2>{title}</h2>
      <p>{content}</p>
      <div>{date.toLocaleDateString()}</div>
    </article>
  );
}

// La bibliothèque PropTypes nous permet de valider la présence et le type des props
// passés à nos composants
ArticlePreview.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  content: PropTypes.string.isRequired,
};

export default ArticlePreview;
