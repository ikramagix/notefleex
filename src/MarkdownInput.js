import React, { Component } from 'react';
import { Input, Button } from 'antd';

class MarkdownInput extends Component {
  handleChange = (key, value) => {
    // Call the onChange prop with the updated key and value
    this.props.onChange({
      ...this.props.note, // Spread the note object to keep other properties
      [key]: value,       // Update the specific key with the new value
    });
  };

  handleSave = () => {
    // When saving, just call the onChange prop with the current note props
    this.props.onChange({
      id: this.props.note.id, // Include the note id
      title: this.props.note.title,
      content: this.props.note.content,
    });
  };

  render() {
    const { note } = this.props; // Destructure note from props
    return (
      <div>
        <Input 
          placeholder="Titre de la note" 
          value={note.title} // Use the title from the note prop
          onChange={(e) => this.handleChange('title', e.target.value)}
          style={{ marginBottom: '10px' }}
        />
        <Input.TextArea 
          placeholder="Écrivez votre note en markdown ici..."
          value={note.content} // Use the content from the note prop
          onChange={(e) => this.handleChange('content', e.target.value)}
          rows={4}
          style={{ marginBottom: '10px' }}
        />
        <Button 
          type="primary" 
          onClick={this.handleSave}
        >
          Sauvegarder
        </Button>
      </div>
    );
  }
}

export default MarkdownInput;
