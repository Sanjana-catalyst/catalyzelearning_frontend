import React from 'react';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Coins from './pages/Coins';
import LearningPath from './pages/LearningPath';
function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route element={<Home/>}path="/Home"></Route>
        <Route element={<Login/>}path="/Login"></Route>
        <Route element={<Profile/>}path="/Profile"></Route>
        <Route element={<Dashboard/>}path="/Dashboard"></Route>
        <Route element={<Settings/>}path="/Settings"></Route>
        <Route element={<Coins/>}path="/Coins"></Route>
        <Route element={<LearningPath/>}path="/LearningPath"></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
