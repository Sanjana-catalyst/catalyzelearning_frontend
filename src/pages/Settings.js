import React, { useState } from "react";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import FilledButton from "../components/FilledButton";
import { useNavigate } from "react-router-dom";

function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChangePassword = async () => {
    if (!currentPassword || !newPassword || !confirmNewPassword) {
      setError("All fields are required.");
      return;
    }
    if (newPassword.length < 8) {
      setError("New password must be at least 8 characters long.");
      return;
    }
    if (newPassword !== confirmNewPassword) {
      setError("New password and confirmation do not match.");
      return;
    }
    try {
      await axios.post("/api/change-password", { currentPassword, newPassword });
      setSuccess("Password changed successfully!");
      setError("");
    } catch (error) {
      setError("Failed to change password. Please try again.");
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100 p-4">
      <div className="flex flex-col w-full max-w-md gap-3 border rounded-md p-4 shadow-xl bg-white">
        <div className="text-2xl font-semibold text-center">Change Password</div>
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
        {success && <div className="text-green-500 text-center mb-4">{success}</div>}
        <div>
          <label className="block text-sm font-medium mb-1">Current Password</label>
          <div className="flex items-center gap-2 border px-2 py-2 rounded-md focus:border focus:border-black">
            <input
              type={showCurrentPassword ? "text" : "password"}
              placeholder="Enter your current password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full outline-none"
            />
            <div onClick={() => setShowCurrentPassword(!showCurrentPassword)}>
              {showCurrentPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
            </div>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">New Password</label>
          <div className="flex items-center gap-2 border px-2 py-2 rounded-md focus:border focus:border-black">
            <input
              type={showNewPassword ? "text" : "password"}
              placeholder="Enter your new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full outline-none"
            />
            <div onClick={() => setShowNewPassword(!showNewPassword)}>
              {showNewPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
            </div>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Confirm New Password</label>
          <div className="flex items-center gap-2 border px-2 py-2 rounded-md focus:border focus:border-black">
            <input
              type={showConfirmNewPassword ? "text" : "password"}
              placeholder="Confirm your new password"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              className="w-full outline-none"
            />
            
          </div>
        </div>
        <button
          onClick={handleChangePassword}
          className="bg-black text-white px-4 py-2 rounded-md mt-4 w-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Change Password
        </button>
      </div>
    </div>
  );
}

export default ChangePassword;
