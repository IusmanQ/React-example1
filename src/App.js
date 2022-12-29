import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    userInput: ''
  }
  changeInputhandler=(event) => {
    this.setState({userInput: event.target.value});
  };

  deleteInputhandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index,1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText});
  }

  render() {
    const charList = this.state.userInput.split('').map((ch,index) => {
     return  <Char character={ch} key={index} clicked={()=>this.deleteInputhandler(index)}/>;
    });

    return (
      <div className="App">
        <input type="Text" onChange={this.changeInputhandler} value={this.state.userInput}/>
        <p>{this.state.userInput}</p>
        <Validation textLength={this.state.userInput.length}/>
        {charList}
      </div>
    );
  }
}

export default App;
