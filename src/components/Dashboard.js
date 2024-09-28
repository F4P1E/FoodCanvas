import React from 'react';
import '../styles/Dashboard.scss'; // You can create a separate SCSS file for styling

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>User Dashboard</h1>
      <div className="dashboard-content">
        <p>Welcome to your dashboard! Here you can manage your account and access various features.</p>
        <div className="dashboard-section">
          <h2>Profile Information</h2>
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Email:</strong> johndoe@example.com</p>
          {/* Add more user information as needed */}
        </div>
        <div className="dashboard-section">
          <h2>Your Recipes</h2>
          <p>Here you can view and manage your saved recipes.</p>
          {/* You can add links or buttons to view or edit recipes */}
        </div>
        <div className="dashboard-section">
          <h2>Settings</h2>
          <p>Manage your account settings here.</p>
          {/* Add links to settings like change password, notifications, etc. */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
