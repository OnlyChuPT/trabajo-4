import React from 'react';

const Note = ({ note, deleteNote }) => {
  const handleDelete = () => {
    if (note.isImportant) {
      const confirmDelete = window.confirm("Esta nota es importante. ¿Estás seguro de que deseas eliminarla?");
      if (!confirmDelete) {
        return;
      }
    }
    deleteNote(note.id);
  };

  return (
    <div className={`card ${note.isImportant ? 'bg-danger text-white' : 'bg-warning'}`}>
      <div className="card-body">
        <div>
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
        </div>
        <button onClick={handleDelete} className="btn btn-dark mt-auto">Eliminar</button>
      </div>
    </div>
  );
};

export default Note;
