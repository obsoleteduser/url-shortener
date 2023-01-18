import React, { FC, KeyboardEvent, useEffect, useState } from 'react'

import './App.css'
import { DataService } from './Services/URLService'
import IURL from './Services/URLModel'

function App() {

  const [url, setUrl] = useState<string>('')
  const [urlInfo, setUrlInfo] = useState<IURL>()
  const [copied, setCopied] = useState<boolean>(false);
  const [isloading, setIsLoading] = useState<boolean>(false)

  const getShortURL = ():void=>{
    setIsLoading(true)
    const dataservice = new DataService<IURL>('https://api.shrtco.de/v2/shorten?url=')
    dataservice.getShortenedURL(url)
    .then((data)=>{setUrlInfo(data)})
    .then(()=>setIsLoading(false))

  }

const urlHandler = (event: React.FormEvent<HTMLInputElement>) :void => {
    setUrl(event.currentTarget.value)
    console.log(url)
}


const handleCopy = () => {
  navigator.clipboard.writeText(urlInfo?.result.short_link || '');
  setCopied(true);
}

  
  return (
    <div className="App">
      <div className="shortener">
      <h2>Get Your URL Shortened</h2>
        <div className="controller">
        <input onKeyDown={(event: KeyboardEvent<HTMLInputElement>)=>{
      if(event.keyCode === 13) getShortURL()
    }} autoFocus onInput={urlHandler} type="text" name="" id="" placeholder='URL' value={url}/>
        <button onClick={getShortURL}>Get Link</button>
        </div>
        {isloading===false && Boolean(urlInfo) ?  <div className="short-link">
        <span>{urlInfo?.result.short_link}</span>
        <span className='copy-btn' onClick={handleCopy}>{copied ? 'Copied!' : 'Copy to clipboard'}</span>
        </div> : isloading===false && Boolean(urlInfo) === false ? null : "Loading..." }
      </div>
      
    </div>
  )
}

export default App
