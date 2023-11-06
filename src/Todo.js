import React, { useState } from "react";

function Todo({ task = "default todo", id = "1", remove, update }) {
  const [editTask, setEditTask] = useState(task);
  const [isEditing, setIsEditing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const toggleEdit = () => {
    setIsEditing(edit => !edit);
  };

  const toggleComplete = () => {
    setIsCompleted(completed => !completed);
  };

  const handleChange = evt => {
    setEditTask(evt.target.value);
  };

  const handleDelete = () => remove(id);

  const handleUpdate = evt => {
    evt.preventDefault();
    update(id, editTask);
    setIsEditing(false);
  };

  // Default todo view
  let jsx = (
    <div>
      <li style={{ textDecoration: isCompleted ? "line-through" : "none" }}>
        {task}
      </li>
      <button onClick={toggleEdit}>Edit</button>
      <button onClick={toggleComplete} title={isCompleted ? "Undo" : "Mark as Complete"}>
        {isCompleted ? "↺" : "✔"}
      </button>
      <button onClick={handleDelete}>✗</button>
    </div>
  );

  // Todo view when editing
  if (isEditing) {
    jsx = (
      <div>
        <form onSubmit={handleUpdate}>
          <input type="text" value={editTask} onChange={handleChange} />
          <button>Update!</button>
        </form>
      </div>
    );
  }

  return jsx;
}

export default Todo;
