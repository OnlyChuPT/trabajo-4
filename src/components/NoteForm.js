import React, { useState } from 'react';

const NoteForm = ({ addNote }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isImportant, setIsImportant] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de la descripción
    if (!description.trim()) {
      setError('La descripción es obligatoria');
      return;
    }

    const newNote = {
      id: Date.now(),
      title,
      description,
      isImportant,
    };

    addNote(newNote);
    setTitle('');
    setDescription('');
    setIsImportant(false);
    setError('');
  };

  return (
    <form className="mb-4" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <br></br>
      <div className="form-group">
        <textarea
          className="form-control"
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="form-check mb-3">
        <input
          type="checkbox"
          className="form-check-input"
          checked={isImportant}
          onChange={() => setIsImportant(!isImportant)}
        />
        <label className="form-check-label">
          Importante
        </label>
      </div>
      <button type="submit" className="btn btn-primary btn-block">Agregar</button>
    </form>
  );
};

export default NoteForm;
