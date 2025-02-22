import React, { useState } from 'react';
import '../Styles/project.css';

export const Project = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");
    const bio = "Hello";
    const teamLeader = "MiaK";
    const teamMember = ['mem1','mem2','mem3','mem4'];

    const addTodo = () => {
        if (newTodo.trim() !== "") {
            setTodos([...todos, newTodo]);
            setNewTodo("");
        }
    };

    const handleInputChange = (e) => {
        setNewTodo(e.target.value);
    };

    const removeTodo = (index) => {
        setTodos(todos.filter((todo, todoIndex) => todoIndex !== index));
    };

    return (
        <div className="app">
            <nav className="app-header">
                <h1>f<b>C</b>ollab</h1>
                <button className="logout-button">log out</button>
            </nav>
            <div className="sidebar">
                <div className="project-info">
                    <h2><b>{teamLeader}</b></h2>
                    <p>{teamMember[0]}</p>
                    <p>Bio: {bio}</p>
                </div>
            </div>
            <div className="main-content">
                <div className="todo-container">
                    <h3>📝 To-Do List</h3>
                    <div className="todo-input">
                        <input
                            type="text"
                            value={newTodo}
                            onChange={handleInputChange}
                            placeholder="Add a new to-do..."
                            className="new-todo-input"
                        />
                        <button onClick={addTodo} className="add-todo-button">＋</button>
                    </div>
                    <ul className="todo-list">
                        {todos.map((todo, index) => (
                            <li key={index} className="todo-item">
                                {todo}
                                <button onClick={() => removeTodo(index)} className="remove-todo-button">⊝</button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="chat-container">
                    <div className="chat-header">
                        <h3>💬 Team Chat</h3>
                    </div>
                    <div className="chat-messages">
                        {/* Messages will be displayed here */}
                    </div>
                    <div className="chat-input">
                        <input 
                            type="text" 
                            placeholder="Type your message..."
                            className="message-input"
                        />
                        <button className="send-button">Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
