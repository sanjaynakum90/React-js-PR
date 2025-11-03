import React from "react";

const Todo = ({ todo, onDelete, onToggle }) => {
    return (
        <div className="todo-item">
            <span
                onClick={() => onToggle(todo.id)}
                style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                    cursor: "pointer",
                }}
            >
                {todo.text}
            </span>
            <button onClick={() => onDelete(todo.id)}>❌</button>
        </div>
    );
};

export default Todo;
