import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
   
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Settings" element={<Settings />} />
          </Routes>
        </main>
        <Footer />
      </div>
  
  );
}

export default App;
