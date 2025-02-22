// import React from "react";
// import "../Styles/dashboard.css";

// function Dashboard(){
//   const project = {
//     title: "Hackathon Collaboration Tool",
//     description: "An open-source platform to help teams manage projects.",
//     status: "In Progress",
//   };

//   const teamMembers = [
//     { name: "Alice", role: "Frontend" },
//     { name: "Bob", role: "Backend" },
//     { name: "Charlie", role: "UI/UX" },
//   ];

//   const tasks = [
//     { title: "Set up React project", completed: true },
//     { title: "Build Dashboard Page", completed: false },
//     { title: "Implement Chat Feature", completed: false },
//   ];

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial" }}>
//       <h1>🚀 {project.title}</h1>
//       <p>{project.description}</p>
//       <strong>Status: </strong> {project.status}

//       <h2>👥 Team Members</h2>
//       <ul>
//         {teamMembers.map((member, index) => (
//           <li key={index}>
//             {member.name} - {member.role}
//           </li>
//         ))}
//       </ul>

//       <h2>📌 Task Summary</h2>
//       <ul>
//         {tasks.map((task, index) => (
//           <li key={index} style={{ textDecoration: task.completed ? "line-through" : "none" }}>
//             {task.title}
//           </li>
//         ))}
//       </ul>

//       <h2>🔗 Quick Links</h2>
//       <ul>
//         <li><a href="/todo">📋 To-Do List</a></li>
//         <li><a href="/chat">💬 Chat</a></li>
//         <li><a href="/flowchart">📊 Flowchart</a></li>
//       </ul>
//     </div>
//   );
// };

// export default Dashboard;

import React from 'react';
import '../Styles/dashboard.css';
import { useNavigate } from 'react-router-dom';
import './Project';

function App() {

    const teamName = "Hello";
    const bio = "Hello";
    const teamLeader ="MiaK";
    const teamMember =['mem1','mem2','mem3','mem4'];

    const navigate = useNavigate();

    const showNextPage = (title,description) => {
      navigate('/project');
    };

  const showDialog = () => {
    const dialog = document.createElement('dialog');
    dialog.innerHTML = `
      <form method="dialog" style="
        padding: 20px;
        background-color: #A79C9CFF;
        border-radius: 30px;
        min-width: 700px;
        min-height: 250px;
      ">
        <div style="margin-bottom: 15px;">
          <label style="
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
          ">Project Name:</label>
          <input type="text" id="taskTitle" style="
            width: 100%;
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
            box-sizing: border-box;
          " />
        </div>
        <div style="margin-bottom: 15px;">
          <label style="
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
          ">Project Description:</label>
          <textarea id="taskDescription" style="
            width: 100%;
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
            min-height: 100px;
            box-sizing: border-box;
          "></textarea>
        </div>
        <div style="
          display: flex;
          justify-content: flex-end;
          gap: 10px;
        ">
          <button type="button" id="nextButton" style="
            background-color: #808080;
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 4px;
            cursor: pointer;
          ">Next</button>
          <button type="button" id="cancelButton" style="
            background-color: #d3d3d3;
            border: none;
            padding: 8px 16px;
            border-radius: 4px;
            cursor: pointer;
          ">Cancel</button>
        </div>
      </form>
    `;
    document.body.appendChild(dialog);
    dialog.showModal();

    dialog.querySelector('#cancelButton').addEventListener('click', () => {
      dialog.remove();
    });

    dialog.querySelector('#nextButton').addEventListener('click', () => {
      const title = dialog.querySelector('#taskTitle').value;
      const description = dialog.querySelector('#taskDescription').value;
      dialog.remove();
      showNextPage(title, description);
    });
  };


  return (
    <div className="app">
      <nav className="app-header">
        <h1>f-collab</h1>
        <button className="logout-button">log out</button>
      </nav>
      <div className="sidebar">
        <div className="project-info">
          <h2>Team Name :{teamName}</h2>
          <p>Team Leader : {teamLeader}</p>
          <p>Bio : {bio}</p>
        </div>
        <div className="team-members">
          <h3>👥 Team Members</h3>
          <ul>
            <li>{teamMember[0]}</li>
            <li>{teamMember[1]}</li>
            <li>{teamMember[2]}</li>
          </ul>
        </div>
        <div className="task-summary">
          <h3>📋 Task Summary</h3>
          <ul>
            <li>Set up React project</li>
            <li>Build Dashboard Page</li>
            <li>Implement Chat Feature</li>
          </ul>
        </div>
      </div>
      <div className="main-content">
        <button className="add-button" onClick={showDialog}>
          <span>+</span>
        </button>
      </div>
    </div>
  );
}

export default App;