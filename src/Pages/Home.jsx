import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/home.css';
import  './Front';

function Home(){
  const navigate = useNavigate();

  const handleCreateTeamClick = () => {
    navigate('/front');
  };

  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="nav-left">
          <h1 className="logo">F-Collab</h1>
        </div>
        <div className="nav-right">
          <button className="nav-button">Sign Up</button>
          <button className="nav-button">Login</button>
        </div>
      </nav>

      <div className="content">
        <h1 className="title"><strong>"Collab, Record, Organize, and Map your ideas."</strong></h1>
        <div className="button-group">
          <button className="action-button" onClick={handleCreateTeamClick}>Create Team</button>
          <button className="action-button">Organiser</button>
        </div>
      </div>
    </div>
  );
};

export default Home;

