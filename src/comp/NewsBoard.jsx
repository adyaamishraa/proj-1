import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

const NewsBoard = ({category}) => {
  const [article, setArticle] = useState([]);
  //array hai, jisme news ka data store hoga, and setArticle is a function to set the data in article array. right now we are setting an empty array in article, because we are going to fetch the data from the api and then set that data in article array.

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url).then(response => response.json()).then(data => setArticle(data.articles)); 
  }, [category]);
  //ye data jo param me aa rha hai vo response.json() he hai becuase response.json() returns a promise, and then we are setting that data to article, so that we can use it in our component, and then we are using that data in our component to display the news.

  return (
    <div>
      <h2 className='text-center'>Latest <span className='badge bg-danger'>News</span></h2>

      {article.map((news, index) => {
        return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
      }) }
    </div>
  )
}

export default NewsBoard