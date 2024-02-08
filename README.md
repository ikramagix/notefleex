# What is **notefleex** ?

A React application that enables users to create notes with Markdown formatting and view them. Stored in the browser's local storage, notes persist between sessions. The interface is built using React and Ant Design, providing a clean and user-friendly experience.

## Key features

- **Create notes**: Users can add new notes, specifying a title and Markdown-formatted content.
- **View notes**: A sidebar lists all created notes. Clicking on a note's title opens a modal that displays the note's content with Markdown formatting applied.

## Components

- **App**: The central component managing application state, including the notes array and the visibility state of modals. It orchestrates the creation of notes and selection for viewing.
- **MarkdownInput**: This component allows users to input a note's title and content in Markdown. It facilitates the addition of new notes to the application's state.
- **NoteDisplay**: Utilizes the Showdown library to convert Markdown into HTML, displaying a note's formatted content within a modal for easy reading.

## Libraries & Tools

- **React**: Utilized for building the user interface with a component-based architecture.
- **Ant Design (antd)**: Provides a wide range of UI components for building rich interfaces, used here for modals, buttons, and the list component.
- **Showdown**: A library for converting Markdown into HTML, enabling the formatted display of note content.

## How does **notefleex** work ?

- **Adding a Note**: Users can create a new note by entering a title and Markdown content, which is then added to the list of notes.
- **Viewing a Note**: Selecting a note from the list opens a modal displaying the note's content with applied Markdown formatting, allowing for a focused reading experience.

## Setup & running the app

1. Clone the repository to your local machine.
2. Install necessary dependencies by running `npm install` in the project directory.
3. Start the application with `npm start`, which runs it in development mode.

[![Link to production](./public/bored_code_jv.gif)](notefleex.netlify.app)

## Future enhancements

- **Edit functionality**: Implementation of note editing capabilities, allowing users to modify the title and content of existing notes.
- **Delete functionality**: Enabling users to delete notes they no longer need.
- **Search feature**: Adding a search bar to filter notes by their titles, facilitating quicker access to specific notes.

[![lol](./public/nfl-controversy-asterisk.gif)](https://youtu.be/QIIZIRXnDAk?si=P9iCIlLQwBq04xEg&t=46)
