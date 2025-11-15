import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, toggleComplete, deleteTodo, updateTodo }) {
  if (!todos || todos.length === 0)
    return <p style={{ textAlign: "center", color: "#9CA3AF" }}>No tasks found ✨</p>;

  return (
    <ul
      style={{
        listStyle: "none",
        padding: 0,
        margin: 0,
        display: "flex",
        flexDirection: "column",
        gap: "12px", // approximates Tailwind's space-y-3 (0.75rem)
      }}
    >
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      ))}
    </ul>
  );
}
