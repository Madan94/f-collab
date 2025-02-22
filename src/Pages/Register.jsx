import React, { useState } from 'react';
import "../Styles/Register.css";
import { useNavigate } from 'react-router-dom';
import "./Dashboard"
import "./Editor"

function Register() {
  const navigate=useNavigate();
  const [teamName, setTeamName] = useState('');
  const [teamSlogan, setTeamSlogan] = useState('');
  const [userName, setUserName] = useState('');
  const [shortBio, setShortBio] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleClick=()=>{
    navigate("/dashboard");
  }

  return (
    <div className="register-page">
      <h1>Own Your Team in f-Collab</h1>
      <form onSubmit={handleSubmit}>
        <label>
        <h4>Team Name</h4>
          <input
            type="text"
            value={teamName}
            onChange={(event) => setTeamName(event.target.value)}
          />
        </label>
        <br />
        <label>
          <h4>Team Slogan</h4>
          <input
            type="text"
            value={teamSlogan}
            onChange={(event) => setTeamSlogan(event.target.value)}
          />
        </label>
        <br />
        <label>
        <h4>Your Username</h4>
          <input
            type="text"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
        </label>
        <br />
        <label>
        <h4>Short Bio About Your Team</h4>
          <textarea
            value={shortBio}
            onChange={(event) => setShortBio(event.target.value)}
          />
        </label>
        <br />
        <button type="submit" onClick={() => {
          if (teamName && teamSlogan && userName && shortBio) {
            handleClick();
          } else {
            alert("Please fill in all the fields.");
          }
        }}>Create A Team</button>
      </form>
    </div> 
  );
}

export default Register;