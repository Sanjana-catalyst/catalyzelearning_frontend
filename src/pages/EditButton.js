import React from 'react';
import profilePic from '../assets/profile.jpg';

function EditButton() {
  return (
    <div className="overflow-y-auto max-h-full">
      <form className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold text-center mb-4">Personal Details</h1>
        <div className="flex flex-col items-center mb-6">
          <img
            src={profilePic}
            alt="Profile"
            className="w-40 h-40 mb-4 rounded-full object-cover"
          />
          <div className="flex gap-2 mt-4">
            <button
              type="button"
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors"
            >
              Change Photo
            </button>
            <button
              type="button"
              className="bg-white text-black border border-black px-4 py-2 rounded hover:bg-white transition-colors"
            >
              Remove Photo
            </button>
          </div>
        </div>
        <label>
          Full name
          <input
            type="text"
            className="w-full border border-gray-300 rounded p-2 mt-2"
          />
        </label>
        <label>
          College
          <input
            type="text"
            className="w-full border border-gray-300 rounded p-2 mt-2"
          />
        </label>
        <label>
          Location
          <input
            type="text"
            className="w-full border border-gray-300 rounded p-2 mt-2"
          />
        </label>
        <label>
  Gender
  <select className="w-full border border-gray-800 rounded p-2 mt-2">
    <option value="" disabled selected>
      Select Gender
    </option>
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="other">Other</option>
  </select>
</label>


        <div className='flex flex-row-reverse' >
        <button
              type="submit"
              className="w-1/3 h-[2.1rem] lg:h-full  px-2 py-1 lg:py-2 bg-black text-white rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black"
            >
              Save
            </button>
            </div>
      </form>
    </div>
  );
}

export default EditButton;
