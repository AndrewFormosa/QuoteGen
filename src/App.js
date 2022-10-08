import logo from './logo.svg';
import './App.scss';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery'

class Score extends React.Component{
  constructor(props){
    super(props)
  }
render(){
  return(<h2>Score:{this.props.score}</h2>);
}

}

class App extends React.Component {
  constructor(props){
    super(props);
      this.state={counter:this.props.initialValue, step:this.props.incre}
  }

  jQuerycode() {
    $(".mybutton").click(function () {
      $('.mybutton').css('color', 'red');
    });
  }

  componentDidMount(){
    this.jQuerycode();
  }

  increment=()=>{
    this.setState({counter:this.state.counter+=this.state.step});
    console.log("inc");
  }



  render() {
  console.log(this.props.count); 



    return (


      <div class="container-fluid">
        <button class="btn btn-primary">button</button>
      <div class="App"> 
        <div className="game-board">
          <Score score={this.state.counter}/>
       <h1>This is my app using state: {this.state.counter}</h1>
       <button onClick={this.increment}>Please Click</button>
       <h1>This is my app using props: {this.props.initialValue}</h1>
       <button class="mybutton"  onClick={this.inc}>Please Click</button>
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
      </div>
    );
  }
}






export {App};

