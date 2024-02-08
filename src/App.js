import React, { Component } from "react";
import MarkdownInput from "./MarkdownInput";
import NoteDisplay from "./NoteDisplay";
import { Button, Row, Col, List, Modal } from "antd";

class App extends Component {
  state = {
    markdown: "",
    notes: JSON.parse(localStorage.getItem("notes")) || [],
    activeNoteId: null,
    isModalVisible: false,
    selectedNoteForModal: null,
  };

  addNote = () => {
    const newNote = {
      id: Date.now(),
      title: "Nouvelle Note",
      content: "",
    };
    this.setState(
      (prevState) => ({
        notes: [...prevState.notes, newNote],
        activeNoteId: newNote.id,
        markdown: "",
      }),
      this.saveNotes
    );
  };

  selectNote = (id) => {
    const note = this.state.notes.find((note) => note.id === id);
    this.setState({
      activeNoteId: id,
      markdown: note.content,
    });
  };

  updateNote = (updatedNote) => {
    this.setState(
      (prevState) => ({
        notes: prevState.notes.map((note) =>
          note.id === updatedNote.id ? { ...note, ...updatedNote } : note
        ),
      }),
      this.saveNotes
    );
  };

  saveNotes = () => {
    localStorage.setItem("notes", JSON.stringify(this.state.notes));
  };

  openModalWithNote = (note) => {
    this.setState({
      selectedNoteForModal: note,
      isModalVisible: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalVisible: false,
    });
  };

  render() {
    const { notes, activeNoteId, markdown } = this.state;
    const activeNote = notes.find((note) => note.id === activeNoteId) || {};

    return (
      <div className="App">
        <Modal
          title={this.state.selectedNoteForModal?.title || "Aucun titre"}
          open={this.state.isModalVisible}
          onCancel={this.closeModal}
          footer={null}
        >
          <NoteDisplay
            markdown={this.state.selectedNoteForModal?.content || ""}
          />
        </Modal>
        <Button onClick={this.addNote} type="primary">
          Ajouter une note
        </Button>
        <Row gutter={16}>
          <Col span={6}>
            <List
              size="large"
              bordered
              dataSource={notes}
              renderItem={(item) => (
                <List.Item
                  onClick={() => this.openModalWithNote(item)}
                  className={item.id === activeNoteId ? "active" : ""}
                >
                  {item.title}
                </List.Item>
              )}
            />
          </Col>
          <Col span={18}>
            {activeNoteId && (
              <MarkdownInput note={activeNote} onChange={this.updateNote} />
            )}
            {activeNoteId && <NoteDisplay markdown={markdown} />}
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
