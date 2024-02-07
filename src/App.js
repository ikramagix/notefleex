import React, { Component } from 'react';
import MarkdownInput from './MarkdownInput';
import NoteDisplay from './NoteDisplay';

class App extends Component {
  state = {
    markdown: localStorage.getItem('markdown') || ''
  };

  render() {
    return (
      <div className="App">
        <MarkdownInput />
        <NoteDisplay markdown={this.state.markdown} />
      </div>
    );
  }
}

export default App; 
