import React from 'react';
import Note from './Note';

const NoteList = ({ notes, deleteNote }) => {
  return (
    <div className="row">
      {notes.map((note) => (
        <div key={note.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
          <Note note={note} deleteNote={deleteNote} />
        </div>
      ))}
    </div>
  );
};

export default NoteList;
