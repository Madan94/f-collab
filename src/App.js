import './App.css';
import Home from './Pages/Home';
import Front from './Pages/Front';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import { Editor } from './Pages/Editor';
import { Project } from './Pages/Project';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/front" element={<Front />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </Router>
  );
}

export default App;
