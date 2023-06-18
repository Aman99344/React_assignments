import React, { useState } from 'react';

// TodoItem component
const TodoItem = ({ item, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(item.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(item.id, editedText);
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDelete(item.id);
  };

  return (
    <li>
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
      ) : (
        <span>{item.text}</span>
      )}
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
      {isEditing && <button onClick={handleSave}>Save</button>}
    </li>
  );
};

export default TodoItem;