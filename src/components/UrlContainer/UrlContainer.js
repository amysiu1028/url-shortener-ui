import React from 'react';
import './UrlContainer.css';
import Urlcard from '../Urlcard/Urlcard';

const UrlContainer = ({urls}) => {
  const urlEls = urls.map(url => {
    return (
      <Urlcard
        id={url.id}
        key={url.id}
        long_url={url.long_url}
        short_url={url.short_url}
        title={url.title}
      />
     
    )
  });

  return (
    <section>
      { urlEls.length ? urlEls : <p>No urls yet! Find some to shorten!</p> }
    </section>
  )
}

export default UrlContainer;
