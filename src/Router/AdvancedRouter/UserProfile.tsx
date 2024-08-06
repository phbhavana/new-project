import React from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { userId } = useParams(); // Retrieve the userId from the URL

  return (
    <div>
      <h2>User Profile</h2>
      <p>Viewing profile of user with ID: {userId}</p>
    </div>
  );
};

export default UserProfile;
