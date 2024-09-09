// src/components/NewsFeed.js
import React, { useState, useEffect } from 'react';
import { fetchNews } from '../services/Api';
import SearchBar from './SearchBar';
import Filters from './Filters';
import './NewsFeed.css'; 

const NewsFeed = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [params, setParams] = useState({ keyword: '', country: '', category: '', page: 1 });

  useEffect(() => {
    const loadNews = async () => {
      setLoading(true);
      setArticles([]);

      try {
        const result = await fetchNews(params);
        if (result.error) {
         
          console.error(result.error);
        } else {
          setArticles(result.articles);
        }
      } catch (error) {
        console.error('An unexpected error occurred.', error);
      }
      
      setLoading(false);
    };

    loadNews();
  }, [params]);

  const handleSearch = (keyword) => {
    setParams((prevParams) => ({ ...prevParams, keyword, page: 1 }));
  };

  const handleFilterChange = (filterType, value) => {
    setParams((prevParams) => ({ ...prevParams, [filterType]: value, page: 1 }));
  };

  return (
    <div className="news-feed">
      <SearchBar onSearch={handleSearch} />
      <Filters onFilterChange={handleFilterChange} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="articles">
          {articles.length === 0 ? (
            <p>No articles found. <br/> Try adjusting your search or filters.
            </p>
          ) : (
            articles.map((article) => (
              <div className="article-card" key={article.url}>
                <img src={article.image} alt={article.title} className='article-card_images'/>
                <h4>{article.title}</h4>
                <p>{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default NewsFeed;
