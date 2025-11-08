import React from "react";
import TodoItem from "./TodoItem";


export default function TodoList({ todos, toggleComplete, deleteTodo, updateTodo }) {
  return (
    <ul className="space-y-2">
      {todos.length === 0 && (
        <p className="text-center text-gray-400">No tasks yet!</p>
      )}
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
