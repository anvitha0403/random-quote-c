import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Container from "./Container"

const AuthorQuotes=({ auther })=> {
    const [quotes,setQuotes]=useState([])
    useEffect(() => {
        axios.get(`https://quote-garden.herokuapp.com/api/v3/quotes?author=${auther}`).then(response => {
            console.log(
              `https://quote-garden.herokuapp.com/api/v3/quotes?author=${auther}`
            );
            setQuotes(response.data.data);
            console.log(response.data.data)
            
        })
        
    },[auther])
  return (
    <div className="auther-quotes-container">
      <div>
        <h1>{auther}</h1>
        
        {quotes.length > 0 &&
          quotes.map((item, i) => {
            return <Container key={i}>{item.quoteText}</Container>;
          })}
      </div>
    </div>
  );
}

export default  AuthorQuotes