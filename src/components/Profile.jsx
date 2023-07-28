import React from "react";
import profilePic from "../assets/google.png";

const Profile = () => {
  return (
    <div className="border pt-9 flex gap-5">
      <img src={profilePic} alt="profile" className="rounded-full w-[150px]" />
      <div className="flex gap-4">
        <h1>google.com</h1>
        <a href="#" className="">
          ikuti
        </a>
        <a href="#">kirim pesan</a>
      </div>
    </div>
  );
};

export default Profile;
