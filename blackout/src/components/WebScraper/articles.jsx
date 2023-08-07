import React, { useState } from 'react';
import './articles.css'
const Articles = () => {
  const [searchQuery, setSearchQuery] = useState('load shedding news');
  const [searchResults, setSearchResults] = useState([]);
  const [searchDate, setSearchDate] = useState("d1")
  const handleSearch = () => {
    // const API_KEY = 'AIzaSyDvbRDZNFKQ8ZKUnOG2bSxEbUpAb9CFIVg'; // Replace with your Google Search API key
    // const cx = 'c448b059cebb74c23'; // Replace with your custom search engine ID
    // const num_results = 5; // Number of results to retrieve

    // const baseURL = 'https://www.googleapis.com/customsearch/v1';
    // const params = {
    //   key: API_KEY,
    //   q: searchQuery,
    //   num: num_results,
    //   cx: cx,
    //   'dateRestrict': 'd1',
    // };

    // // Build the URL with query parameters
    // const url = new URL(baseURL);
    // url.search = new URLSearchParams(params);

    // fetch(url)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     const items = data.items || [];
    //     setSearchResults(items);
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching search results:', error);
    //   });
    const sampleSearchResults = [
        {
          link: 'https://www.example.com/article1',
          title: 'Sample Article 1',
        },
        {
          link: 'https://www.example.com/article2',
          title: 'Sample Article 2',
        },
        {
          link: 'https://www.example.com/article3',
          title: 'Sample Article 3',
        }
      ];

    setSearchResults(sampleSearchResults)
  };

  return (

    <div className='scraper_card articles'>
      <div className='scraper_head'>
        News feed:
      </div>
      <div className='scraper_table'>
            {searchResults.map((result) => (
                <div className='scraper_tr'>
                  <a className='scraper_link' href={result.link}>
                    <div className='scraper_td'>{result.title}</div>
                  </a>
                </div>
            ))}
        </div>
      <input
        type="text"
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search"
      />
      <div className='scraper_button' onClick={handleSearch}>Search</div>
      
    </div>
  );
};

export default Articles;
