export function getUrls() {
  return fetch('http://localhost:3001/api/v1/urls')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json(); 
  })
}

export function postUrls(newUrl) {
  return fetch('http://localhost:3001/api/v1/urls', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newUrl),
  })
    .then((response) => {
      console.log(response,"response")
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      return response.json(); 
    })
    .catch((error) => {
      throw error;
    });
}