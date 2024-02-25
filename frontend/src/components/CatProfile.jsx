import React from "react";

export default function CatProfile() {
  return (
    <div className="profile">
      <div className="profile__img">
        <img src="#" alt="Cat" />
      </div>
      <div className="profile__info">
        <h1>Name</h1>
        <p>Sex: Male</p>
        <p>Weight: 50lbs</p>
        <p>Adopted: NO</p>
        <p>Spayed: NO</p>
      </div>
    </div>
  );
}
