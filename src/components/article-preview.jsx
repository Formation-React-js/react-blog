import React from 'react';
import PropTypes from 'prop-types';

const ArticlePreview = (props) => {
  return (
    <article>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <div>{props.date.toLocaleDateString()}</div>
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
