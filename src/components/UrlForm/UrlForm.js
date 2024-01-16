import React, { useState } from 'react';

function UrlForm({postNewUrl}) {
  const [title, setTitle] = useState('');
  const [long_url, setLong_url] = useState('');
  const [ errorMessage, setErrorMessage ] = useState('')

  const handleSubmit = e => {
    e.preventDefault();
    if (title === '' || long_url === '') {
      setErrorMessage('All inputs must be filled out.')
    }

    const newUrl = {
      // id: Date.now(),
      long_url,
      title, 
    }
    postNewUrl(newUrl)
    clearInputs();
    setErrorMessage('')
  }

  const clearInputs = () => {
    setTitle('');
    setLong_url('');
  }

  return (
    <form>
      <label>Long Url:</label>
       <input
        data-test='url-inpout'
        type='text'
        placeholder='URL to Shorten...'
        name='long_url'
        value={long_url}
        onChange={(event) => setLong_url(event.target.value) }
      />

      <label>Title:</label>
      <input
        data-test='title-input'
        type='text'
        placeholder='Title...'
        name='title'
        value={title}
        onChange={(event)=> setTitle(event.target.value)}
      />
     
      <button type='button' onClick={e => handleSubmit(e)}>
        Shorten Please!
      </button>

      {errorMessage && <h2 data-test='errorMessage' className='errorMessage' >{errorMessage}</h2>}
    </form>
  )
}

export default UrlForm;
