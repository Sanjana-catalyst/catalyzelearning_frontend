import React from 'react';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Home/>}path="/Home"></Route>
        <Route element={<Login/>}path="/Login"></Route>
        <Route element={<Profile/>}path="/Profile"></Route>
        <Route element={<Dashboard/>}path="/Dashboard"></Route>
        <Route element={<Settings/>}path="/Settings"></Route>
      </Routes>
      
    </div>
  )
}

export default App;
