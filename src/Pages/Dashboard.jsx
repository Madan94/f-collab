
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
    dialog.innerHTML =`
    <form method="dialog" style="
      padding: 20px;
      background-color: #d3d3d3;
      border-radius: 10px;
      backdrop-filter: blur(5px);
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
  `
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
        <h1>f<b>C</b>ollab</h1>
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