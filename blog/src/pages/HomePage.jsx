import React from 'react';
import Next from './Next';
import SideVar from './SideVar';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

 
  


function HomePage(){

  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to user with ID 5
    navigate('/user/5');
  };


  return (
    <div>
      <h2>Home Page</h2>
      <Next />
      <SideVar/>
      {/* <Link to="/user/5">Go to User 5</Link> */}
      <button onClick={handleClick}>Go to User 5</button>
      
    </div>
  );
}

export default HomePage;
