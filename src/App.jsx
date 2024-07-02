import './App.css'
import React, { Component } from "react";
import { marked } from 'marked';

class MarkdownPreviewer extends Component{
  constructor(props){
    super(props);
    this.state = {
      input: "",
      md: ""
    };
  }
  handleChange(event){
    this.setState({input: event.target.value, 
    md: marked.parse(event.target.value)});
  }
  render(){
    return(
      <div>
        <textarea id={"editor"} onChange={this.handleChange.bind(this)}></textarea>
        <p id={"preview"}>{this.state.md}</p>
      </div>
    );
  }
}


function App() {
  return (
    <div className="App">
    < MarkdownPreviewer />
    </div>
  )
}
export default App

