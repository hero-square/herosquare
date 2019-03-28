import React from 'react';

const PopularArticleItem = props => {
  const { title, image, description } = props.article;
  const { position } = props;
  return (
    <div
      className={`popular-article--item ${
        position === 1 || position === 6
          ? 'popular-article--lrg'
          : 'popular-article--sml'
      }`}>
      <img src={image} alt="article relevant" />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default PopularArticleItem;
