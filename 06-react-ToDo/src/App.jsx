import React, { useState } from "react";
import TodoList from "./Components/TodoList";
import TodoForm from "./Components/TodoForm";


export default function App() {
    const [todos, setTodos] = useState([]);

    const addTodo = (title, description) => {
        if (!title.trim()) return;
        const newTodo = {
            id: Date.now(),
            title,
            description,
            completed: false,
        };
        setTodos([newTodo, ...todos]);
    };

    const toggleComplete = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const updateTodo = (id, newTitle, newDescription) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, title: newTitle, description: newDescription } : todo
        ));
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
            <div className="w-full max-w-md bg-white p-4 rounded shadow">
                <h1 className="text-2xl font-bold mb-4 text-center">Simple ToDo App</h1>
                <TodoForm addTodo={addTodo} />

                <TodoList
                    todos={todos}
                    toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo}
                    updateTodo={updateTodo}
                />

            </div>
        </div>
    );
}
