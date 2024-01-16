import React, { useState, useEffect } from 'react';
import './App.css';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';
import { getUrls } from '../../apiCalls';

function App () {
  const [urls, setUrls] = useState([]);
  const [error, setError] = useState([]);


  useEffect(() => {
    getUrls() 
    .then(urlData => {
      setUrls(urlData.urls)
    })
    .catch(error => {
      setError(error)
    })
  })

  return (
    <main className="App">
      <header>
        <h1>URL Shortener</h1>
        <UrlForm />
      </header>

      <UrlContainer urls={urls}/>
    </main>
  );
}

export default App;
