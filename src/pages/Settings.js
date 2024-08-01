
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Settings() {
  const [changes, setChanges] = useState({});
  const handlePasswordUpdate = async () => {
    try {
      const response = await axios.post('/api/update-password', { password: changes.password });
     
    } catch (error) {
     
    }
  };

  return (
    <div>
      
    </div>
  )
}

export default Settings
