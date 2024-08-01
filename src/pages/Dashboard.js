import React,{useEffect} from 'react';
import axios from 'axios';

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
      <div className='text-3xl font-semibold px-4'>
        Hai K.V.Komal Akhil
      </div>
    </div>
  )
}

export default Dashboard;
