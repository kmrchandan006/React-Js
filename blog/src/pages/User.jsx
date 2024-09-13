import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
  // Extract the `id` from the route parameter
  const { id } = useParams();

  return (
    <div>
      <h2>User Page</h2>
      <p>User ID: {id}</p>
    </div>
  );
}

export default User;
