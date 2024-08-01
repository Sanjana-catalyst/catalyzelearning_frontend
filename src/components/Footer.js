import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between border py-6 px-6">
        <div className="text-xl font-semibold w-1/4">
          Feel Free to get in touch with us, learn with us and share with us
        </div>
        <div className="flex gap-2">
          <IoLocationSharp size={30}/>
          <div className="flex flex-col gap-1 text-black">
            <div className="text-xl font-semibold">
                Our Location
            </div>
            123, Main Street, City, State, Country
          </div>
        </div>
        <div className="flex gap-2">
          <IoMdMail size={30}/>
          <div className="flex flex-col gap-1 text-black">
            <div className="text-xl font-semibold">
                Our Email
            </div>
            komalakhil.catalyze@gmail.com
          </div>
        </div>
        <div className="flex gap-2">
        <FaPhoneAlt size={30}/>
          <div className="flex flex-col gap-1 text-black">
            <div className="text-xl font-semibold">
                Our Contact Details
            </div>
            +91 7989765743
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center px-6">
        <div className="text-lg py-6">Copyright © 2023 Catalyze | All Rights Reserved</div>
        <div className="flex gap-6">
            <button><GrInstagram size={20}/></button>
            <button><FaLinkedin size={20}/></button>
        </div>
      </div>
    </div>
  );
}
