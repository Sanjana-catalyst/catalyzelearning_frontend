import React from 'react';
import axios from axios;

function Dashboard() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/dashboard');
       
      } catch (error) {
       
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      
    </div>
  )
}

export default Dashboard;
