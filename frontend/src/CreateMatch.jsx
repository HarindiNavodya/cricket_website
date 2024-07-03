import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import './CreateMatch.css';

function CreateMatch() {
  const [matchName, setMatchName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [teamA, setTeamA] = useState('');
  const [teamB, setTeamB] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Match details:', {
      matchName,
      date,
      time,
      teamA,
      teamB,
    });
    
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Create a Match</h1>
        <p>Start by entering the details of your match.</p>
      </div>
      <div className="match-details">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="matchName">Match Name</label>
            <input
              type="text"
              id="matchName"
              value={matchName}
              onChange={(e) => setMatchName(e.target.value)}
              className="input-box"
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="input-box"
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Time</label>
            <input
              type="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="input-box"
            />
          </div>
          <div className="form-group">
            <label htmlFor="teamA">Team A</label>
            <input
              type="text"
              id="teamA"
              value={teamA}
              onChange={(e) => setTeamA(e.target.value)}
              className="input-box"
            />
          </div>
          <div className="form-group">
            <label htmlFor="teamB">Team B</label>
            <input
              type="text"
              id="teamB"
              value={teamB}
              onChange={(e) => setTeamB(e.target.value)}
              className="input-box"
            />
          </div>
          <button onClick={()=>navigate('/team')}  className="submit-btn">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateMatch;


