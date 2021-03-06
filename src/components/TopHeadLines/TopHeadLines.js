import React, { useEffect, useState } from 'react';
import News from '../News/News';
const TopHeadLines = () => {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        const url = 'http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b4a8731b46a248f1898363e638b0cdb2';
        fetch(url)
            .then(res => res.json())
            .then(data => setArticles(data.articles))
    }, [])
    return (
        <div style={{ paddings: '10px', margin: '10px',float: 'left' }} >
            <h1>Top Headline: {articles.length}</h1>
            {
                articles.map(article => <News article={article}></News>)
            }
        </div>
    );
};

export default TopHeadLines;