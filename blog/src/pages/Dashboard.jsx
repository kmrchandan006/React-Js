import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <Link to="profile">Profile</Link>
        <Link to="settings">Settings</Link>
      </nav>
      {/* Outlet is where the nested components will be rendered */}
      <Outlet />
    </div>
  );
}

export default Dashboard;
