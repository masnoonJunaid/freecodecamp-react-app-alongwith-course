import React from 'react';
// import logo from './logo.svg';
import './App.css';

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue:''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render(){
    return(
      <div>
        <GetInput input={this.state.inputValue} handleChange={this.handleChange}/>
        <RenderInput input={this.state.inputValue}/>
      </div>
    );
  }
};

class GetInput extends React.Component {

  render() {
    return(
      <div className="inputfield">
        <h3>Get Input:</h3>
        <input placeholder="Type your text here..." value={this.props.input} onChange={this.props.handleChange}/>
      </div>
    );
    }
  };

  class RenderInput extends React.Component {

    render(){
      return (
        <div id="render">
          <h3>Input Render:</h3>
          <p className="text">{this.props.input}</p>
        </div>
      );
    }
  };


export default MyApp;
