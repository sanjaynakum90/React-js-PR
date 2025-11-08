import React, { useState } from "react";

export default function TodoItem({ todo, toggleComplete, deleteTodo, updateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);
  const [newDescription, setNewDescription] = useState(todo.description || "");

  const handleSave = () => {
    updateTodo(todo.id, newTitle, newDescription);
    setIsEditing(false);
  };

  return (
    <li className="border rounded p-3 flex flex-col">
      {isEditing ? (
        <div className="space-y-2">
          <input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="w-full border rounded px-2 py-1"
          />
          <input
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            className="w-full border rounded px-2 py-1"
          />
          <div className="flex justify-end gap-2">
            <button onClick={handleSave} className="bg-green-500 text-white px-3 py-1 rounded">Save</button>
            <button onClick={() => setIsEditing(false)} className="bg-gray-300 px-3 py-1 rounded">Cancel</button>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-between">
            <div>
              <h2 className={`font-medium ${todo.completed ? "line-through text-gray-400" : ""}`}>
                {todo.title}
              </h2>
              {todo.description && (
                <p className={`text-sm ${todo.completed ? "text-gray-400" : "text-gray-600"}`}>
                  {todo.description}
                </p>
              )}
            </div>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />
          </div>
          <div className="flex gap-2 mt-2">
            <button onClick={() => setIsEditing(true)} className="text-sm bg-yellow-200 px-2 py-1 rounded">
              Edit
            </button>
            <button onClick={() => deleteTodo(todo.id)} className="text-sm bg-red-200 px-2 py-1 rounded">
              Delete
            </button>
          </div>
        </div>
      )}
    </li>
  );
}
