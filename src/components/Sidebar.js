import React from "react";
import "./Sidebar.css";
import HomeIcon from '@mui/icons-material/Home';
import RocketIcon from '@mui/icons-material/Rocket';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleIcon from '@mui/icons-material/People';


const Sidebar = () => {
  return (
    <div className="sidebar">
  <div className="sidebar-item active">
    <RocketIcon className="icon" /> {/* Rocket Icon */}
  </div>
  <div className="sidebar-item">
    <HomeIcon className="icon" /> {/* Home Icon */}
  </div>
  <div className="sidebar-item">
    <PeopleIcon className="icon" /> {/* Users Icon */}
  </div>
  <div className="sidebar-item">
    <SettingsIcon className="icon" /> {/* Settings Icon */}
  </div>
</div>

  );
};

export default Sidebar;
