import React from "react";
import "./css/Pacificquotes.css";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";

const Pacificqoutes = () => {
  const [quotesData, setQuotesData] = useState({});
  const [realData, setRealData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getQuotes = async () => {
      const api = "https://type.fit/api/quotes";
      try {
        let data = await fetch(api);
        let realData = await data.json();
        setRealData(realData);
        setQuotesData(realData[Math.floor(Math.random() * realData.length)]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching quotes:", error);
      }
    };

    getQuotes();
  }, []);

  const tweetNow = () => {
    let tweetPost = `https://twitter.com/intent/tweet?text=${quotesData.text} author: ${quotesData.author}`;
    window.open(tweetPost);
  };

  const getNewQuotes = () => {
    setQuotesData(realData[Math.floor(Math.random() * realData.length)]);
  };

  return (
    <>
      <Navbar />

      <div className="quotes">
        <div className="quotes-container">


          <div className="card">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <>
                {/* <div className="quotes-main">
                <div className="quotes-main-container"> */}

                {/* quote description starts here */}
                <div className="quoteDesc">
                  <div id="quotes"><h1>Quote: </h1> {quotesData.text}</div>
                  <div id="author">
                    <h2>Author:</h2> {quotesData.author || "Unknown"}
                  </div>
                </div>
                {/* quote description ends here */}

                {/* button starts here */}
                <div className="btn">
                  <div className="btn1" onClick={getNewQuotes}>
                    New Quotes
                  </div>
                  <div className="btn1" onClick={tweetNow}>
                    Tweet
                  </div>
                </div>
                {/* button ends here */}

                {/* </div>
              </div> */}
              </>
            )}


          </div>


        </div>
      </div>
    </>
  );
};

export default Pacificqoutes;
