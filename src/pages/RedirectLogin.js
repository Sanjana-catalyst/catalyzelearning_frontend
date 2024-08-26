import React from 'react';
import { useNavigate } from 'react-router-dom';

const RedirectLogin = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/Login');
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="w-11/12 sm:w-9/12 md:w-8/12 lg:w-1/3 bg-white shadow-lg rounded-lg overflow-hidden p-4 sm:p-6 md:p-8 lg:p-10 z-10">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-black text-center">Access Denied</h2>
        <p className="text-gray-700 mt-3 mb-6 text-center">
          You must log in to view this page.
        </p>
        <div className="flex justify-center">
          <button
            onClick={handleLoginClick}
            className="bg-black text-white px-4 py-2 rounded-md text-center hover:bg-gray-800 duration-300"
          >
            Go to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default RedirectLogin;
