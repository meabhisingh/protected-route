import React from "react";
import { useDispatch } from "react-redux";

const Profile = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Profile</h2>
      <button onClick={() => dispatch({ type: "logout" })}>Logout</button>
    </div>
  );
};

export default Profile;
