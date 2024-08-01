import React, { useState } from 'react';
import axios from 'axios';

function Home() {
 const [email, setEmail] = useState('');
 const [description, setDescription] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/home', { email, description });
      
    } catch (error) {
     
    }
  };

  return (
    <div>
     
    </div>
  );
}

export default Home;
