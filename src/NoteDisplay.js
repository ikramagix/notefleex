import React, { Component } from 'react';
import Showdown from 'showdown';

class NoteDisplay extends Component {
  converter = new Showdown.Converter();

  render() {
    const { markdown } = this.props;
    const html = this.converter.makeHtml(markdown);

    return (
      <div dangerouslySetInnerHTML={{ __html: html }} />
    );
  }
}

export default NoteDisplay;


