import React, { Component } from 'react';
import MarkdownInput from './MarkdownInput';
import NoteDisplay from './NoteDisplay';
import './App.css'; // Assurez-vous que ce fichier contient tous vos styles.
import { Button } from 'antd'; // Importez le bouton de Ant Design.

class App extends Component {
  state = {
    markdown: localStorage.getItem('markdown') || '',
    notes: [], // Supposons que vous aurez un état pour stocker des notes.
    activeNote: null, // Pour suivre la note actuellement sélectionnée.
  };

  render() {
    return (
      <div className="App">
        <div className="sidebar">
          <Button className="add-note-button" type="primary">Ajouter une note</Button>
          {/* Générer la liste des notes ici */}
          {this.state.notes.map(note => (
            <div 
              key={note.id} 
              className={`note ${this.state.activeNote === note.id ? 'active' : ''}`}
              onClick={() => this.selectNote(note.id)} // Méthode pour sélectionner une note
            >
              {note.title}
            </div>
          ))}
        </div>
        <div className="main-content">
          <MarkdownInput />
          <NoteDisplay markdown={this.state.markdown} />
        </div>
      </div>
    );
  }
}

export default App;