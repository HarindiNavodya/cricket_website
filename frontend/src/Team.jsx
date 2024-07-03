import React, { useState } from "react";
import "./Team.css";
import { assets } from "./assets/assets";

function Team() {
  const [teams, setTeams] = useState([
    {
      id: 1,
      name: "Uptown",
      location: "Bambalapitiya",
      logo: "https://th.bing.com/th?id=OIF.4VH%2bKKo%2bn3XpiVXpSI9BXQ&w=200&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      id: 2,
      name: "Uptown",
      location: "Bambalapitiya",
      logo: "https://w7.pngwing.com/pngs/176/9/png-transparent-davinci-resolve-logo-tech-companies-thumbnail.png",
    },
    {
      id: 3,
      name: "Uptown",
      location: "Bambalapitiya",
      logo: "https://e7.pngegg.com/pngimages/514/56/png-clipart-dialog-axiata-axiata-group-xl-axiata-colombo-dialog-broadband-networks-dialog-axiata-angle-rectangle.png",
    },
  ]);

  const [newTeamName, setNewTeamName] = useState("");
  const [newTeamNumber, setNewTeamNumber] = useState("");

  const handleNewTeamNameChange = (event) => {
    setNewTeamName(event.target.value);
  };

  const handleNewTeamNumberChange = (event) => {
    setNewTeamNumber(event.target.value);
  };

  const addNewTeam = () => {
    const newTeam = {
      id: Date.now(),
      name: newTeamName,
      location: newTeamNumber,
      logo: "https://www.flaticon.com/free-icons/team",
    };
    setTeams([...teams, newTeam]);
    setNewTeamName("");
    setNewTeamNumber("");
  };

  const [activeTab, setActiveTab] = useState("myteams");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="team-container">
      <h1>Select Team A</h1>
      <p>Select an existing team or create a new team.</p>

      <div className="search-bar">
        <input type="text" placeholder="Search Team" />
      </div>

      <div className="team-options">
        <button
          className={activeTab === "myteams" ? "active" : ""}
          onClick={() => handleTabClick("myteams")}
        >
          My teams
        </button>
        <button
          className={activeTab === "previous" ? "active" : ""}
          onClick={() => handleTabClick("previous")}
        >
          Previous
        </button>
        <button
          className={activeTab === "global" ? "active" : ""}
          onClick={() => handleTabClick("global")}
        >
          Global
        </button>
      </div>

      <div className="create-team-container">
        <div className="create-team-box">
          <div className="box-content">
            <h2>Create a new Team</h2>
            <p>Enter the name and the phone number.</p>
            <button className="create-team-button" onClick={addNewTeam}>
              Create Team
            </button>
          </div>
          <div className="icon-container">
            <img src={assets.lan} alt="icon" className="icon" />
          </div>
        </div>
      </div>

      {activeTab === "myteams" && (
        <div className="team-list">
          {teams.map((team) => (
            <div className="team-item" key={team.id}>
              <img src={team.logo} alt={team.name} />
              <div>
                <h3>{team.name}</h3>
                <p>{team.location}</p>
              </div>
              <button>Add</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Team;
