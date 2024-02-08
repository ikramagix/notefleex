import React, { Component } from 'react';
import { Input, Button } from 'antd';

class MarkdownInput extends Component {
  handleChange = (key, value) => {
    this.props.onChange({
      ...this.props.note, 
      [key]: value,      
    });
  };

  handleSave = () => {
    this.props.onChange({
      id: this.props.note.id, 
      title: this.props.note.title,
      content: this.props.note.content,
    });
  };

  render() {
    const { note } = this.props;
    return (
      <div>
        <Input 
          placeholder="Titre de la note" 
          value={note.title} 
          onChange={(e) => this.handleChange('title', e.target.value)}
          style={{ marginBottom: '10px' }}
        />
        <Input.TextArea 
          placeholder="Écrivez votre note en markdown ici..."
          value={note.content}
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
