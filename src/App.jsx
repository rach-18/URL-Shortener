import { useState } from 'react'
import axios from "axios";
import './App.css'

function App() {
  const [url, setUrl] = useState('');
  const [shortedUrl, setShortedUrl] = useState(null);
  
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await axios.post("http://localhost:5000/api/url-shortener", {url});
    console.log(response.data);
    alert(response.data.message);
    setShortedUrl(response.data.link);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>URL Shortener</h2>
        <input 
          type="text" 
          name='url'
          placeholder='Enter url'
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button type="submit">Shorten URL</button>
      </form>
      {shortedUrl && <p>Your shorted url is: {shortedUrl}</p>}
    </>
  )
}

export default App
