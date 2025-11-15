import React, { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoFilters from "./components/TodoFilters";

export default function App() {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState("all");
    const [search, setSearch] = useState("");

    // Load from localStorage
    useEffect(() => {
        const saved = localStorage.getItem("advanced_todos");
        if (saved) setTodos(JSON.parse(saved));
    }, []);

    // Save to localStorage
    useEffect(() => {
        localStorage.setItem("advanced_todos", JSON.stringify(todos));
    }, [todos]);

    const addTodo = (todo) => {
        setTodos([todo, ...todos]);
    };

    const toggleComplete = (id) => {
        setTodos(
            todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
        );
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((t) => t.id !== id));
    };

    const updateTodo = (id, newData) => {
        setTodos(todos.map((t) => (t.id === id ? { ...t, ...newData } : t)));
    };

    // Filtering + Search
    const filteredTodos = todos.filter((t) => {
        const matchesSearch = t.title
            .toLowerCase()
            .includes(search.toLowerCase());
        if (filter === "active") return !t.completed && matchesSearch;
        if (filter === "completed") return t.completed && matchesSearch;
        return matchesSearch;
    });

    // Sorting: high > medium > low priority
    const priorityOrder = { high: 1, medium: 2, low: 3 };
    const sortedTodos = [...filteredTodos].sort((a, b) => {
        if (priorityOrder[a.priority] !== priorityOrder[b.priority])
            return priorityOrder[a.priority] - priorityOrder[b.priority];
        if (a.dueDate && b.dueDate)
            return new Date(a.dueDate) - new Date(b.dueDate);
        return 0;
    });

    return (
        <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
            <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-3xl font-bold text-center mb-4">Advanced ToDo App</h1>

                <TodoForm addTodo={addTodo} />

                <TodoFilters
                    filter={filter}
                    setFilter={setFilter}
                    search={search}
                    setSearch={setSearch}
                />

                <TodoList
                    todos={sortedTodos}
                    toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo}
                    updateTodo={updateTodo}
                />
            </div>
        </div>
    );
}
