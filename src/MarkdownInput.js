import React, { Component } from 'react';
import { Input, Button } from 'antd';

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
        <Input.TextArea 
          value={this.state.input} 
          onChange={this.handleChange} 
          rows={4} // You can set the number of rows for the text area
          placeholder="Écrivez votre note en markdown ici..." 
        />
        <Button 
          type="primary" 
          onClick={this.handleSave}
          style={{ marginTop: '10px' }} // Add some spacing above the button
        >
          Sauvegarder
        </Button>
      </div>
    );
  }
}

export default MarkdownInput;
