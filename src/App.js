import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Coins from './pages/Coins';
import LearningPath from './pages/LearningPath';
import Card from './pages/Card';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/card" element={<Card />} />
          <Route path="/coins" element={<Coins />} />
          <Route path="/learningpath" element={<LearningPath />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
