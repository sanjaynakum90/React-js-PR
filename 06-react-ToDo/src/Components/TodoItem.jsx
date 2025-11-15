import React, { useState } from "react";

export default function TodoItem({ todo, toggleComplete, deleteTodo, updateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    title: todo.title,
    description: todo.description,
    dueDate: todo.dueDate,
    priority: todo.priority,
    tags: (todo.tags || []).join(", "),
  });

  const styles = {
    li: {
      border: "1px solid #e5e7eb",
      borderRadius: 6,
      padding: 12,
      display: "flex",
      flexDirection: "column",
    },
    columnGap: { display: "flex", flexDirection: "column", gap: 8 },
    input: {
      width: "100%",
      border: "1px solid #e5e7eb",
      borderRadius: 6,
      padding: "6px 8px",
      boxSizing: "border-box",
    },
    textarea: {
      width: "100%",
      border: "1px solid #e5e7eb",
      borderRadius: 6,
      padding: "6px 8px",
      boxSizing: "border-box",
      resize: "vertical",
    },
    headerRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
    },
    title: (completed) => ({
      fontWeight: 600,
      textDecoration: completed ? "line-through" : "none",
      color: completed ? "#9ca3af" : "#111827",
      margin: 0,
    }),
    description: (completed) => ({
      fontSize: 14,
      color: completed ? "#9ca3af" : "#4b5563",
      margin: "6px 0 0 0",
    }),
    dueDate: {
      fontSize: 12,
      color: "#6b7280",
      marginTop: 6,
    },
    tagsRow: {
      display: "flex",
      flexWrap: "wrap",
      gap: 6,
      marginTop: 6,
    },
    tag: {
      fontSize: 12,
      background: "#f3f4f6",
      padding: "2px 8px",
      borderRadius: 6,
    },
    actionsRow: {
      display: "flex",
      gap: 8,
      marginTop: 12,
    },
    btnSave: {
      backgroundColor: "#10b981",
      color: "#fff",
      padding: "6px 12px",
      borderRadius: 6,
      border: "none",
      cursor: "pointer",
    },
    btnCancel: {
      backgroundColor: "#d1d5db",
      color: "#111827",
      padding: "6px 12px",
      borderRadius: 6,
      border: "none",
      cursor: "pointer",
    },
    btnEdit: {
      backgroundColor: "#fef3c7",
      color: "#111827",
      padding: "6px 8px",
      borderRadius: 6,
      border: "none",
      cursor: "pointer",
    },
    btnDelete: {
      backgroundColor: "#fecaca",
      color: "#111827",
      padding: "6px 8px",
      borderRadius: 6,
      border: "none",
      cursor: "pointer",
    },
  };

  const handleSave = () => {
    updateTodo(todo.id, {
      title: editData.title,
      description: editData.description,
      dueDate: editData.dueDate,
      priority: editData.priority,
      tags: editData.tags.split(",").map((t) => t.trim()).filter(Boolean),
    });
    setIsEditing(false);
  };

  const startEditing = () => {
    setEditData({
      title: todo.title,
      description: todo.description,
      dueDate: todo.dueDate,
      priority: todo.priority,
      tags: (todo.tags || []).join(", "),
    });
    setIsEditing(true);
  };

  return (
    <li style={styles.li}>
      {isEditing ? (
        <div style={styles.columnGap}>
          <input
            style={styles.input}
            value={editData.title}
            onChange={(e) => setEditData({ ...editData, title: e.target.value })}
          />
          <textarea
            style={styles.textarea}
            value={editData.description}
            onChange={(e) => setEditData({ ...editData, description: e.target.value })}
            rows="2"
          />
          <input
            type="date"
            style={styles.input}
            value={editData.dueDate || ""}
            onChange={(e) => setEditData({ ...editData, dueDate: e.target.value })}
          />
          <select
            style={styles.input}
            value={editData.priority}
            onChange={(e) => setEditData({ ...editData, priority: e.target.value })}
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
          <input
            style={styles.input}
            value={editData.tags}
            onChange={(e) => setEditData({ ...editData, tags: e.target.value })}
            placeholder="Tags (comma separated)"
          />
          <div style={{ display: "flex", justifyContent: "flex-end", gap: 8 }}>
            <button onClick={handleSave} style={styles.btnSave}>
              Save
            </button>
            <button onClick={() => setIsEditing(false)} style={styles.btnCancel}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div style={styles.headerRow}>
            <div>
              <h2 style={styles.title(todo.completed)}>{todo.title}</h2>
              {todo.description && (
                <p style={styles.description(todo.completed)}>{todo.description}</p>
              )}
              {todo.dueDate && (
                <p style={styles.dueDate}>Due: {new Date(todo.dueDate).toLocaleDateString()}</p>
              )}
              {todo.tags && todo.tags.length > 0 && (
                <div style={styles.tagsRow}>
                  {todo.tags.map((t, i) => (
                    <span key={i} style={styles.tag}>
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
              style={{ width: 18, height: 18 }}
            />
          </div>

          <div style={styles.actionsRow}>
            <button onClick={startEditing} style={styles.btnEdit}>
              Edit
            </button>
            <button onClick={() => deleteTodo(todo.id)} style={styles.btnDelete}>
              Delete
            </button>
          </div>
        </div>
      )}
    </li>
  );
}
