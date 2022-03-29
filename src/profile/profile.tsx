import React from "react";
import './profile.css';

type ProfileProps = {
  name: string;
  imageUrl: string;
};

export const Profile = ({ name, imageUrl }: ProfileProps) => {
  return (
    <>
      <div>{name}</div>
      <img className="profile" src={imageUrl} alt="Profile Image" />
    </>
  );
};
