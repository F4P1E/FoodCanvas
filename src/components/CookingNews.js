import React, { useEffect, useState } from 'react';
import '../styles/CookingNews.scss'; // Ensure you have the updated styles

const CookingNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Fetch cooking news from the API
    fetch('https://newsapi.org/v2/everything?q=cooking&apiKey=598e15c353844db2915746e12b1b3002')
      .then(response => response.json())
      .then(data => setNews(data.articles)) // Assuming 'articles' is the correct property
      .catch(error => console.error('Error fetching cooking news:', error));
  }, []);

  return (
    <div className="cooking-news">
      <h2>Latest Cooking News</h2>
      <div className="news-container">
        {news.map((item, index) => (
          <div className="news-card" key={index}>
            <img src={item.urlToImage || 'https://via.placeholder.com/300'} alt={item.title} className="news-image" />
            <div className="news-content">
              <h3 className="news-title">{item.title}</h3>
              <p className="news-description">{item.description}</p>
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="news-link">Read more</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CookingNews;
