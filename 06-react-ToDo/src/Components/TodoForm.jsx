import React, { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("medium");
  const [tags, setTags] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTodo = {
      id: Date.now(),
      title,
      description,
      dueDate,
      priority,
      tags: tags.split(",").map((t) => t.trim()).filter(Boolean),
      completed: false,
    };
    addTodo(newTodo);

    setTitle("");
    setDescription("");
    setDueDate("");
    setPriority("medium");
    setTags("");
  };

  const formStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "12px",
    marginBottom: "24px",
  };

  const inputStyle = {
    border: "1px solid #ddd",
    borderRadius: "4px",
    padding: "8px 12px",
    fontSize: "14px",
  };

  const textareaStyle = {
    ...inputStyle,
    gridColumn: "1 / -1",
    minHeight: "80px",
    fontFamily: "inherit",
  };

  const buttonStyle = {
    gridColumn: "1 / -1",
    backgroundColor: "#4f46e5",
    color: "white",
    padding: "8px 16px",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
    fontSize: "14px",
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={inputStyle}
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        style={inputStyle}
      >
        <option value="high">High Priority</option>
        <option value="medium">Medium Priority</option>
        <option value="low">Low Priority</option>
      </select>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        style={inputStyle}
      />
      <input
        type="text"
        placeholder="Tags (comma separated)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        style={inputStyle}
      />
      <textarea
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={textareaStyle}
      />
      <button type="submit" style={buttonStyle}>
        Add Task
      </button>
    </form>
  );
}
