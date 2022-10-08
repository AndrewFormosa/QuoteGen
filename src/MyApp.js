import './MyApp.scss';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery'
import quotes from './quotes.js';
import variables from './MyApp.scss';


let randomeQuoteNumber = () => {
  return (Math.floor(Math.random() * Object.keys(quotes).length))
}

let firstQuoteNumber = randomeQuoteNumber();
let bg = variables.bgColor;



class QuoteDisplayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { AllQuotes: quotes, QuoteNumber: firstQuoteNumber }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    document.body.style.backgroundColor = bg;
  }

  handleClick() {
    let newNumber = randomeQuoteNumber();
    $(".fade-out").animate({ opacity: '0.0' }, "slow", () => this.setState({ QuoteNumber: newNumber }));
    $(".fade-out").animate({ opacity: '1.0' }, "slow");
  }

  render() {

    let quotetext = this.state.AllQuotes[this.state.QuoteNumber].quote;
    let quoteauthor = this.state.AllQuotes[this.state.QuoteNumber].author;
    let twitterHref = "https://twitter.com/intent/tweet?text=" + quotetext + " -" + quoteauthor;
    return (
      <div id="quote-box" class="card shadow fade-out">
        <figure class="text-end">
          <div>
            <blockquote class="blockquote">
              <p id="text"><q>{quotetext}</q></p>
            </blockquote>
            <hr />
            <figcaption id="author" class="blockquote-footer m-2">{this.state.AllQuotes[this.state.QuoteNumber].author}</figcaption>
          </div>
          <div class="d-flex justify-content-center">
            <button id="new-quote" onClick={this.handleClick} class="btn btn-outline-light m-2">next quote..</button>


          </div>
          <a class="twitter-share-button d-flex justify-content-center" id="tweet-quote" href={twitterHref} data-size="large"><svg xmlns="http://www.w3.org/2000/svg" width="5vh" height="5vh" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
          </svg></a>
        </figure>
      </div>
    );
  }
}

class RanGenHeader extends React.Component {
  render() {
    return (
      <div class="container-fluid">
        <h1><svg xmlns="http://www.w3.org/2000/svg" width='6vh' height="6vh" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
        </svg> Happy Thoughts...</h1>
      </div>

    );
  }

}


class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quotes }

  }


  render() {

    return (

      <div class="container-fluid my-5" >
        <RanGenHeader />
        <div class="animate">
          <QuoteDisplayer />
        </div>
        <div class="text-center footer">freeCodeCamp Random Quote Generator Project by Andrew Formosa</div>
      </div>
    );
  }
}

export { MyApp };


