import React from 'react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Profile() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/user');
       
      } catch (error) {
       
      }
    };

    fetchData();
  }, []);

  const handleUpdate = async () => {
    try {
      const response = await axios.post('/api/update', changes);
     
    } catch (error) {
      
    }
  };
  return (
    <div>

      
    </div>
  )
}

export default Profile
