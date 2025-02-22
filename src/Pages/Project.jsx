import React from 'react';
import '../Styles/project.css';

export const Project = () => {
    //const teamName = "Hello";
    const bio = "Hello";
    const teamLeader ="MiaK";
    const teamMember =['mem1','mem2','mem3','mem4'];

  return (
    <div className="app">
      <nav className="app-header">
        <h1>f-collab</h1>
        <button className="logout-button">log out</button>
      </nav>
      <div className="sidebar">
        <div className="project-info">
          <h2>Project Name :{teamLeader}</h2>
          <p>Project Description : {teamMember[0]}</p>
          <p>Bio : {bio}</p>
        </div>
      </div>
      <div className="main-content">
        <div className="chat-container" >
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
