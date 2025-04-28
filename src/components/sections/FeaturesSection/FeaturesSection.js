import React from "react";
import "./FeaturesSection.css";
import { MdCalendarMonth } from "react-icons/md";
import { FaBookOpen, FaHeart, FaRegCommentDots, FaUser } from "react-icons/fa";
import { HiOutlineSupport } from "react-icons/hi";

const FeaturesSection = () => {
  return (
    <section id="features">
      <div className="solution-container">
        <h2 className="solution-title">
          Your Complete Mental Wellness Solution
        </h2>
        <p className="solution-subtitle">
          DeepSoul combines multiple approaches to provide comprehensive support
          for your mental wellbeing journey.
        </p>

        <div className="solution-cards">
          <div className="solution-card">
            <div className="icon">
              <MdCalendarMonth />
            </div>
            <h3>Therapy Booking</h3>
            <p>
              Schedule sessions with licensed therapists who match your needs
              and preferences. Easy booking, rescheduling, and virtual sessions.
            </p>
          </div>

          <div className="solution-card">
            <div className="icon">
              <FaHeart />
            </div>
            <h3>Self-help Exercises</h3>
            <p>
              Access guided meditations, journaling prompts, breathing
              exercises, and personalized activities to build resilience and
              mindfulness.
            </p>
          </div>

          <div className="solution-card">
            <div className="icon">
              <FaUser/>
            </div>
            <h3>Therapist Buddy</h3>
            <p>
              Your assigned therapist keeps track of your progress, provides
              personalized exercises, and is available when you need guidance.
            </p>
          </div>

          <div className="solution-card">
            <div className="icon">
      <FaRegCommentDots/>
            </div>
            <h3>Supportive Community</h3>
            <p>
              Connect with others who understand what you're going through.
              Share experiences, offer support, and never feel alone in your
              journey.
            </p>
          </div>

          <div className="solution-card">
            <div className="icon">
              <FaBookOpen />
            </div>
            <h3>Wellness Resources</h3>
            <p>
              Explore our extensive library of articles, blogs, audiobooks, and
              podcasts covering various mental health topics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
