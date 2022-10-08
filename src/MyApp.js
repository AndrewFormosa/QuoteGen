import logo from './logo.svg';
import './MyApp.scss';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery'
import quotes from './quotes.js';

let bgColor = "rgb(85, 101, 174)";

let randomeQuoteNumber = () => {
  return (Math.floor(Math.random() * Object.keys(quotes).length))
}

let firstQuoteNumber = randomeQuoteNumber();


class QuoteDisplayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { AllQuotes: quotes, QuoteNumber: firstQuoteNumber }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let newNumber = randomeQuoteNumber();
    $(".fade-out").animate({ opacity: '0.0' }, "slow", () => this.setState({ QuoteNumber: newNumber }));
    $(".fade-out").animate({ opacity: '1.0' }, "slow");
  }


  render() {
    let quotetext=this.state.AllQuotes[this.state.QuoteNumber].quote;
    let twitterHref="https://twitter.com/intent/tweet?text="+quotetext;
    return (
      <div id="quote-box" class="card shadow">
        <figure class="text-end m-5 ">
          <div class="fade-out">
            <blockquote class="blockquote">
              <p id="text"><q>{quotetext}</q></p>
            </blockquote>
            <hr />
            <figcaption id="author" class="blockquote-footer m-2">{this.state.AllQuotes[this.state.QuoteNumber].author}</figcaption>
          </div>
          <div class="d-flex justify-content-center">
            <button id="new-quote" onClick={this.handleClick} class="btn btn-outline-light m-2">next quote..</button>
      

          </div>
        <a class="twitter-share-button" id="tweet-quote" href={twitterHref} data-size="large">Share ths quote..<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
</svg></a>
        </figure>
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
        <div class="animate">
          <QuoteDisplayer />
        </div>
      </div>
    );
  }
}

export { MyApp };

