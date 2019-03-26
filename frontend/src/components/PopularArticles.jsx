import React, { useEffect } from 'react';
// import PopularArticleItem from './PopularArticleItem';
// import { useFetchAPI } from './customHooks';
import LoadingIcon from './LoadingIcon';
import '../style/popular-articles.css'

import articles from './mock/populararticles.json';

const PopularArticles = props => {
  //TODO should fetch data from server
  // const url = '';
  // const articles = useFetchAPI(url, { isLoading: true, data: null });

  // grabs popular articles from api
  useEffect(() => {}, []);

  return (
    <div className="popular-articles-container">
      {articles.isLoading ? (
        <LoadingIcon />
      ) : (
        articles.data.map((article, index) => (
          // <PopularArticleItem article={article} position={index} key={index} />
          <div>hi</div>
        ))
      )}
    </div>
  );
};

export default PopularArticles;
