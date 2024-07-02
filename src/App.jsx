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
    md:marked.parse(event.target.value)});
  }
  render(){
    return(
      <div>
        <div id="editorDiv">
          <h1 className="title">Editor</h1>
        <textarea id={"editor"} onChange={this.handleChange.bind(this)}># Welcome to Markdown Previewer!
## Edit the text in the editor to see it rendered as HTML here :)</textarea>
        </div>
        <div id="previewDiv">
          <h1 className="title">Previewer</h1>
        <div id={"preview"} dangerouslySetInnerHTML={{__html: this.state.md}}></div>
        </div>
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
