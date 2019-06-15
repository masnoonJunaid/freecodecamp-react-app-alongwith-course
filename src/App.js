import React from 'react';
// import logo from './logo.svg';
import MyInfo from "./components/MyInfo"
import ContactCard from "./components/ContactCard"
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
          <div className="border">
            <p className="text" style={{display:this.props.input?"block":"none"}}>{this.props.input}</p>
          </div>
          <MyInfo/>
          <hr/>
          <ContactCard
            contact={{name:"Mr.Erlich Bachman", imgUrl:"http://placekitten.com/300/200",phone:"(222) 555-1234",

            email:"mr.whiskaz@catnap.meow"}}
            />

          <ContactCard
            contact={{name:"Mr.Richard Henricks",imgUrl:"http://placekitten.com/400/200",  phone:"(212) 555-2345",

            email:"richardhenrick@me.com"}}
            />

          <ContactCard
            contact={{name:"Mr.Gilfoyle",imgUrl:"http://placekitten.com/400/300", phone:"(212) 555-3456",

                email:"ofworlds@yahoo.com"}}
            />
          <ContactCard
            contact={{name:"Mr.Nelson Bughati",imgUrl:"http://placekitten.com/200/100",

            phone:"(122) 555-3456",email:"mrworld@me.com"}}

            />
        </div>
      );
    }
  };


export default MyApp;
