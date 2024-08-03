import React, { useState } from 'react';
import profilePic from '../assets/profile.jpg'; // Replace with the actual path to your profile picture
import { MdEdit } from "react-icons/md"; // Using react-icons for the edit icon
import { IoIosInformationCircleOutline } from "react-icons/io"; // Using react-icons for the information icon
import ShareProfile from './ShareProfile';
import UpdateProfile from './UpdateProfile'; 
import EditButton from './EditButton'; // Adjust the path as necessary

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalOpen1 = () => {
    setIsModalOpen1(true);
  };

  const handleModalClose1 = () => {
    setIsModalOpen1(false);
  };

  const handleEditModalOpen = () => {
    setIsEditModalOpen(true);
  };

  const handleEditModalClose = () => {
    setIsEditModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="relative bg-white p-6 sm:p-8 rounded-lg shadow-md max-w-sm sm:max-w-md w-full mx-auto">
        <button
          onClick={handleEditModalOpen}
          className="absolute top-2 right-2 text-black hover:text-gray-800"
        >
          <MdEdit size={20} />
        </button>
        <h2 className="text-2xl font-semibold mb-4 sm:mb-6 text-center">Personal details</h2>
        <div className="flex justify-center mb-4 sm:mb-6">
          <img
            src={profilePic}
            alt="Profile"
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover"
          />
        </div>
        <div className="text-center">
          <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">Viramallu Sanjana</h3>
          <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">VNR VJIET</h3>
          <button
            onClick={handleModalOpen}
            className="block mx-auto mb-2 sm:mb-4 text-black border border-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition-colors"
          >
            Share profile link
          </button>
          {/* <button 
           onClick={handleModalOpen1}
            className="block mx-auto text-black border border-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition-colors"
          >
            Update profile visibility
          </button> */}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="modal-content flex flex-col gap-5 bg-white p-10 rounded-lg shadow-md w-[50%] h-[50%] relative overflow-hidden">
            <button
              onClick={handleModalClose}
              className="btn btn-sm btn-ghost absolute right-2 top-2 text-3xl"
            >
              &times;
            </button>
            <div className="overflow-y-auto max-h-full">
              <ShareProfile />
            </div>
          </div>
        </div>
      )}

      {isModalOpen1 && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="modal-content flex flex-col gap-5 bg-white p-10 rounded-lg shadow-md w-[50%] h-[50%] relative overflow-hidden">
            <button
              onClick={handleModalClose1}
              className="btn btn-sm btn-ghost absolute right-2 top-2 text-3xl"
            >
              &times;
            </button>
            <div className="overflow-y-auto max-h-full">
              <UpdateProfile />
            </div>
          </div>
        </div>
      )}

      {isEditModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="modal-content flex flex-col gap-5 bg-white p-10 rounded-lg shadow-md w-[60%] h-[70%] relative overflow-hidden">
            <button
              onClick={handleEditModalClose}
              className="btn btn-sm btn-ghost absolute right-2 top-2 text-3xl"
            >
              &times;
            </button>
            <EditButton />
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
