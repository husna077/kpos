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

function App() {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const toggleSideBar = () => {
    setsidebarOpen(!sidebarOpen);
  };
  return (
    <Router>
    <div className="App">
      <Navbar onToggleSidebar={toggleSideBar} />
      <Sidebar visible={sidebarOpen} />
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/supply" element={<Supply/>} />
        <Route path="/products" element={<Products />} />
        <Route path="/users" element={<Users />} />
        <Route path="/settings" element={<Settings/>} />
      </Routes>
      
      </div>
    </div>
    </Router>
  );
}

export default App;
