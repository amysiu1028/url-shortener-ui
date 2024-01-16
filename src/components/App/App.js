import React, { useState, useEffect } from 'react';
import './App.css';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';
import { getUrls } from '../../apiCalls';
import { postUrls } from '../../apiCalls';

function App () {
  const [urls, setUrls] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getUrls()
      .then(urlData => {
        setUrls(urlData.urls);
      })
      .catch(error => {
        setError(error)
      })
  }, [])

  function postNewUrl(newUrl) {
    postUrls(newUrl)
    .then(newUrl => {
      console.log("newUrl",newUrl)
      setUrls(urls => [...urls, newUrl])
    })
  }

  function deleteCard(id) {
    const displayRest = urls.filter((card) => card.id !== id)
    setUrls(displayRest)
  }

  return (
    <div>
      {error ? (
        <h2 data-test="error">{`${error}`}</h2>
      ) : (
        <main className="App">
          <header>
            <h1>URL Shortener</h1>
            <UrlForm postNewUrl={postNewUrl} />
          </header>
          <UrlContainer urls={urls} deleteCard={deleteCard} />
        </main>
      )}
    </div>
  )

}
export default App;
