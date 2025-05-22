import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
import BranchwiseStock from './Pages/Reports/BranchwiseStock';
import LowStock from './Pages/Reports/LowStock';
import OutOfStock from './Pages/Reports/OutOfStock';
import SaleSummary from './Pages/Reports/SaleSummary';
import SupplySummary from './Pages/Reports/SupplySummary';
import Customers from './Pages/Reports/Customers';
import Sales from './Pages/Reports/Sales';
import ListSupply from './Pages/Supply/ListSupply';
import AddSupply from './Pages/Supply/AddSupply';
import ProductsList from './Pages/Products/ProductsList';
import Addproduct from './Pages/Products/Addproduct';
import PrintBarcode from './Pages/Products/PrintBarcode';
import UserList from './Pages/Users/UserList';
import AddUser from './Pages/Users/AddUser';
import GeneralSetting from './Pages/SettingsSidebar/GeneralSetting';
import AddBranch from './Pages/SettingsSidebar/AddBranch';
import Branches from './Pages/SettingsSidebar/Branches';


function App() {
  const [sidebarOpen, setsidebarOpen] = useState(true);
  const toggleSideBar = () => {
    setsidebarOpen(prev => !prev);
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
                <Route path="/" element={<Navigate to="/dashboard" />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/Reports/Stock" element={<ReportsStock />} />
                <Route path="/Reports/BranchwiseStock" element={<BranchwiseStock />} />
                <Route path='/Reports/LowStock' element={<LowStock />}></Route>
                <Route path='/Reports/OutOfStock' element={<OutOfStock />}></Route>
                <Route path='/Reports/SaleSummary' element={<SaleSummary />}></Route>
                <Route path='/Reports/SupplySummary' element={<SupplySummary />}></Route>
                <Route path='/Reports/Customers' element={<Customers />}></Route>
                <Route path='/Reports/Sales' element={<Sales />}></Route>
                <Route path='/Supply/ListSupply' element={<ListSupply />}></Route>
                <Route path='/Supply/AddSupply' element={<AddSupply />}></Route>
                <Route path='/Products/ProductsList' element={<ProductsList/>}></Route>
                <Route path='/Products/Addproduct' element={<Addproduct/>}></Route>
                <Route path='/Product/PrintBarcode' element={<PrintBarcode/>}></Route>
                <Route path='/Users/UserList' element={<UserList />}></Route>
                <Route path='/Users/AddUser' element={<AddUser />}></Route>
                <Route path='/SettingsSidebar/GeneralSetting' element={<GeneralSetting/>}></Route>
                <Route path='/SettingsSidebar/AddBranch' element={<AddBranch/>}></Route>
                <Route path='/SettingsSidebar/Branches' element={<Branches/>}></Route>
                <Route path="/mainuser/setting" element={<MainUserSetting />} />
                <Route path="/supply" element={<Supply />} />
                <Route path="/products" element={<Products />} />
                <Route path="/users" element={<Users />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
