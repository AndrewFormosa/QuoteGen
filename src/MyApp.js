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
    return (
      <div id="quote-box" class="card shadow">
        <figure class="text-end m-5 ">
          <div class="fade-out">
            <blockquote class="blockquote">
              <p><q>{this.state.AllQuotes[this.state.QuoteNumber].quote}</q></p>
            </blockquote>
            <hr />
            <figcaption class="blockquote-footer m-2">{this.state.AllQuotes[this.state.QuoteNumber].author}</figcaption>
          </div>
          <div class="d-flex justify-content-center">
            <button onClick={this.handleClick} class="btn btn-outline-light m-2">next quote..</button>
          </div>
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


  jQuerycode() {
    $("button").click(function () {

    });
  }
  componentDidMount() {
    this.jQuerycode();
    document.body.style.backgroundColor = bgColor;
  }

  componentDidUnMount() {
    document.body.style.backgroundColor = "white";
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

