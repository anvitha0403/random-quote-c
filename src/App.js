
import './App.css';
import Auther from './Auther'
import Container from './Container'
import AuthorQuotes from './AuthorQuotes'
import axios from "axios"
import { useEffect,useState,useCallback } from 'react'
 

const App = () => {
  const [Author, setAuthor] = useState("");
  const [quote, setQuote] = useState({});
  const [main, setMain] = useState(true);
  const [isSending, setIsSending] = useState(false);
  const changeMain = () => {
    setMain(false);
  };
  const sendRequest = useCallback(() => {
    // don't send again while we are sending
    console.log("1");
    if (isSending) return;
    // update state
    setIsSending(true);
    // send the actual request
    console.log("2");
    axios
      .get("https://quote-garden.herokuapp.com/api/v3/quotes/random")
      .then((response) => {
        console.log("3");
        setAuthor(response.data.data[0].quoteAuthor);
        setQuote(response.data.data[0]);
        setMain(true);

        console.log("called");
        setIsSending(false);
      });
    // once the request is sent, update state again

    console.log("4");
  }, [isSending]); // update the callback if the state changes

  useEffect(() => {
    console.log("first");
    sendRequest();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="App">
      {main ? (
        <>
          <Container>{quote.quoteText}</Container>
          <Auther change={changeMain}>{Author}</Auther>
          <div className="random" onClick={() => sendRequest()}>
            random
            <i class="fa-solid fa-arrows-rotate" disabled={isSending}></i>
          </div>
        </>
      ) : (
        <>
          <AuthorQuotes auther={Author}></AuthorQuotes>
          <div
            className="random"
            disabled={isSending}
            onClick={() => sendRequest()}
          >
            random <i class="fa-solid fa-arrows-rotate"></i>
          </div>
        </>
      )}
    </div>
  );
};
  

export default App;
