import React from "react";
import "./SelfHelp.css";

const SelfHelp = () => {
  return (
    <section id="selfhelp">
    <div className="tools-container">
      <div className="tools-header">
        <span className="tools-badge">Daily Practice</span>
        <h2>Self-Help Tools For Your Wellbeing</h2>
        <p>Build resilience and mindfulness with our extensive library of guided exercises, meditations, and personalized activities.</p>
      </div>

      <div className="tools-content">
        <div className="tools-left">
          <div className="exercise-card">
            <h3>Featured Exercises</h3>
            <div className="exercise-list">
              <div className="exercise-item">
                <div className="exercise-icon purple">📈</div>
                <div>
                  <h4>Guided Meditation</h4>
                  <p>10 min</p>
                </div>
              </div>
              <div className="exercise-item">
                <div className="exercise-icon green">⏱️</div>
                <div>
                  <h4>Breathing Exercise</h4>
                  <p>5 min</p>
                </div>
              </div>
              <div className="exercise-item">
                <div className="exercise-icon orange">📝</div>
                <div>
                  <h4>Mindful Journaling</h4>
                  <p>15 min</p>
                </div>
              </div>
              <div className="exercise-item">
                <div className="exercise-icon blue">🎧</div>
                <div>
                  <h4>Sleep Stories</h4>
                  <p>20 min</p>
                </div>
              </div>
            </div>

            <div className="progress-section">
              <h4>Your Daily Progress</h4>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "60%" }}></div>
              </div>
              <p>3 of 5 exercises completed</p>
            </div>
          </div>
        </div>

        <div className="tools-right">
          <div className="personalized-card">
            <h4>Personalized For You</h4>
            <p>Exercises tailored to your needs and goals based on your progress.</p>
          </div>
          <div className="mood-card">
            <h4>Track Your Mood</h4>
            <p>Monitor your emotional wellbeing with our daily check-ins.</p>
            <div className="mood-options">
              <div className="mood low">Low</div>
              <div className="mood mild">Mild</div>
              <div className="mood okay active">Okay</div>
              <div className="mood good">Good</div>
              <div className="mood great">Great</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default SelfHelp;
