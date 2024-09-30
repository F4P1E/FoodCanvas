import React from 'react';
import '../styles/GroupPanel.scss';

const GroupPanel = () => {
  const groups = [
    { id: 1, name: "Cooking Enthusiasts" },
    { id: 2, name: "Healthy Recipes" },
    { id: 3, name: "Desserts Lovers" },
    // Add more groups as needed
  ];

  return (
    <div className="group-panel-container">
      <h2>Recommended Groups</h2>
      <ul className="group-list">
        {groups.map((group) => (
          <li key={group.id} className="group-item">
            <span className="group-name">{group.name}</span>
            <button className="join-button">Join</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroupPanel;
