import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import reportWebVitals from './reportWebVitals';

let count=0;
let start=Date.now();

class Counter extends React.Component {
 
componentDidMount() {
  this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
  }
  componentWillUnmount() {
  clearInterval(this.interval);
}

 render(){
    count++;
  return (
    
      <h1>{count}</h1>

    );}
  
}

class MyApp extends React.Component {

 

  render() {

    count++;
    return (
        
      <div className="game"> 
        <div className="game-board">
       <h1>This is my app <Counter/>{count}</h1>

      <helllo/>
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyApp />);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
