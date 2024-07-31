import React, { useState } from 'react';
import axios from 'axios';

function Login() {
 

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/login', { username, password });
      
    } catch (error) {
     
    }
  };

  return (
    <div>
     
    </div>
  );
}

export default Login;
