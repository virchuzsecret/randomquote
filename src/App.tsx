import { useState } from 'react'
import './App.css'
import {FaTwitter, FaQuoteLeft, FaQuoteRight} from "react-icons/fa"
import quotes from "./assets/quotes.json"


interface Quote{
  quote: string;
  author: string;
}

const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)]
}

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());

  const changeQuote = () => {
    setQuote(getRandomQuote());
  }

  return (
    <>
      <div class="background">
        <div id="quote-box">
          <div className="quote-content">
            
            <h2 id="text"><FaQuoteLeft size="30" style={{marginRight: "10px"}} />{quote.quote}<FaQuoteRight size="30" style={{marginLeft: "10px"}} /></h2>
            
            <h4 id="author">- {quote.author}</h4>
          </div>
          <div className="buttons">
            <a href="{https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote}}"
               id="tweet-quote"
               style={{
                backgroundColor: "#1DA1F2",
                margin: "10px",
               }}>
                <FaTwitter color="white" />
               </a>
               <button id="new-quote" onClick={changeQuote}>
                 Change Quote
               </button>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
