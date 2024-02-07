import React, { Component } from 'react';

class MarkdownInput extends Component {
  state = { input: '' };

  handleChange = (event) => {
    this.setState({ input: event.target.value });
  };

  handleSave = () => {
    const { input } = this.state;
    localStorage.setItem('markdown', input);
    alert('Note sauvegardée !');
  };

  render() {
    return (
      <div>
        <textarea value={this.state.input} onChange={this.handleChange} />
        <button onClick={this.handleSave}>Sauvegarder</button>
      </div>
    );
  }
}

export default MarkdownInput;
