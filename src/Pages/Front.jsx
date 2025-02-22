import React from 'react'
import '../Styles/front.css'
import './Register'
import { useNavigate } from 'react-router-dom';

function Front(){
    const navigate=useNavigate();
    const handleRegister=()=>{
        navigate("/register");
    }
  return (
    <div className="front-container">
      <div className="front-content">
        <h1 className="username-title">
          <strong>User name</strong>
        </h1>
        <div className="front-button-group">
          <button className="front-action-button" onClick={handleRegister}>Create Team</button>
          <button className="front-action-button">Join Team</button>
        </div>
      </div>
    </div>
  )
}

export default Front;