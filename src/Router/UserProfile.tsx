import React from 'react';
import { useNavigate, useParams } from "react-router-dom";

const UserProfile = () => {
  const { userId } = useParams(); // Retrieve the userId from the URL
  const navigate = useNavigate();

  return (
    <div>
      <h2>User Profile</h2>
      <p>Viewing profile of user with ID: {userId}</p>
      <button onClick={() => navigate('/profile')}>Back to Profile</button>
    </div>
  );
};

export default UserProfile;
