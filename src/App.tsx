import { FC, useEffect, useState } from 'react'

import './App.css'
import { DataService } from './Services/URLService'
import IURL from './Services/URLModel'

function App() {

  const [url, setUrl] = useState<string>('')

  const getShortURL = ():void=>{

    const dataservice = new DataService<IURL>('https://api.shrtco.de/v2/shorten?url=')
    const data = dataservice.getShortenedURL(url)
    console.log(data)

  }

const urlHandler = (event: React.FormEvent<HTMLInputElement>) :void => {
    setUrl(event.currentTarget.value)
    console.log(url)
}

  
  return (
    <div className="App">
      <div className="shortener">
      <h2>Get Your URL Shortened</h2>
        <div className="controller">
        <input onInput={urlHandler} type="text" name="" id="" placeholder='URL' value={url}/>
        <button onClick={getShortURL}>Get Link</button>
        </div>
      </div>
    </div>
  )
}

export default App
