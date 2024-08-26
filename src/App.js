import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Coins from './pages/Coins';
import LearningPath from './pages/LearningPath';
import PrivateRoute from './components/PrivateRoute';
import RedirectLogin from './pages/RedirectLogin';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          
          {/* Public route for RedirectLogin */}
          <Route path="/RedirectLogin" element={<RedirectLogin />} />
          
          {/* Private routes */}
          <Route path="/Profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path="/Dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/Settings" element={<PrivateRoute><Settings /></PrivateRoute>} />
          <Route path="/Coins" element={<PrivateRoute><Coins /></PrivateRoute>} />
          <Route path="/LearningPath" element={<PrivateRoute><LearningPath /></PrivateRoute>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
