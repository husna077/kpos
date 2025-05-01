import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Sidebar from './components/Sidebar';
import Dashboard from './Pages/Dashboard';
import Reports from './Pages/Reports';
import Supply from './Pages/Supply';
import Products from './Pages/Products';
import Users from './Pages/Users';
import Settings from './Pages/Settings';
import ReportsStock from './Pages/Reports/Stock';
import MainUserSetting from './Pages/MainUser/Setting';

function App() {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const toggleSideBar = () => {
    setsidebarOpen(!sidebarOpen);
  };
  return (
    <Router>
    <div className="App">
      
      <Navbar onToggleSidebar={toggleSideBar} />
      <div className='sidebar-options-content'>
      <Sidebar visible={sidebarOpen} />
      <div className="the-main-content" style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className='app-overlay'></div>
      <div className='list-content'>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/Reports/Stock" element={<ReportsStock />}/>
        <Route path="/mainuser/setting" element={<MainUserSetting/>}/>
        <Route path="/supply" element={<Supply/>} />
        <Route path="/products" element={<Products />} />
        <Route path="/users" element={<Users />} />
        <Route path="/settings" element={<Settings/>} />
      </Routes>
      </div>
      </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
