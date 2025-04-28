import React from "react";
import "./HeroSection.css"; 

const HeroSection = () => {
  return (
    
    <div className="container">
      <div className="left-section">
        <h1>
          Your journey to <span className="gradient-text">inner peace</span> begins here
        </h1>
        <p className="description">
          DeepSoul connects you with professional therapists, supportive community, and powerful self-help tools for your mental wellbeing journey.
        </p>
      </div>

      <div className="right-section">
        {/* First Row - Two Cards */}
        <div className="row">
          <div className="card">
            <h3>Mental Health Quiz</h3>
            <p>Understand your emotional wellbeing</p>
            <div className="line"></div>
          </div>

          <div className="card">
            <h3>Upcoming Therapy Session</h3>
            <p>Today at 3:00 PM with Dr. Sarah</p>
            <div className="line"></div>
          </div>
        </div>

        {/* Second Row - Centered Single Card */}
        <div className="row center-row">
          <div className="card">
            <h3>Peace of Mind</h3>
            <p>Your mental wellbeing companion is here</p>
            <div className="line"></div>
          </div>
        </div>

        {/* Third Row - Two Cards */}
        <div className="row">
          <div className="card">
            <h3>Daily Journal</h3>
            <p>Take a moment to reflect on your feelings today</p>
            <div className="line"></div>
          </div>

          <div className="card">
            <h3>Community Support</h3>
            <p>Connect with others who understand</p>
            <div className="line"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
