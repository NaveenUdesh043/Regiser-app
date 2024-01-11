
import React from 'react';
import { Link } from 'react-router-dom'; 


const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <h1>Welcome to Good Health Dispensary</h1>
    
      <Link to="/login">
        <button className="get-started-button">Get Started</button>
      </Link>
    </div>
  );
}

export default WelcomePage;
