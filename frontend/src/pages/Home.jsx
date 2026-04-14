import React from "react";
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-card">
        <h1>Welcome to ConvoX <span>💬</span></h1>
        <p>Connect with your friends instantly</p>

        <div className="home-actions">
          <a href="/login" className="btn primary">Login</a>
          <a href="/register" className="btn secondary">Register</a>
        </div>
      </div>
    </div>
  );
};

export default Home;