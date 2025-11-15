import React from "react";

export default function TodoFilters({ filter, setFilter, search, setSearch }) {
    const containerStyle = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "1rem",
        gap: "0.75rem",
    };

    const buttonsWrapperStyle = {
        display: "flex",
        gap: "0.5rem",
    };

    const buttonBase = {
        padding: "6px 12px",
        borderRadius: "6px",
        border: "none",
        cursor: "pointer",
        background: "#f3f4f6", // light gray
        color: "#111827",
    };

    const activeButton = {
        background: "#4f46e5", // indigo-600
        color: "#ffffff",
    };

    const inputStyle = {
        border: "1px solid #d1d5db",
        borderRadius: "6px",
        padding: "8px 12px",
        width: "100%",
        maxWidth: "33%", // approximates md:w-1/3
        boxSizing: "border-box",
    };

    return (
        <div style={containerStyle}>
            <div style={buttonsWrapperStyle}>
                {["all", "active", "completed"].map((type) => (
                    <button
                        key={type}
                        onClick={() => setFilter(type)}
                        style={{ ...buttonBase, ...(filter === type ? activeButton : {}) }}
                    >
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                ))}
            </div>

            <input
                type="text"
                placeholder="Search tasks..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={inputStyle}
            />
        </div>
    );
}
