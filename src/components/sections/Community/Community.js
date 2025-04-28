import React from "react";
import "./Community.css";
import { FaComment, FaDove, FaHeart, FaUser } from "react-icons/fa";

function Community() {
  return (
    <section id="community">
      <div className="community-page">
        <section className="intro">
          <h1>You Are Never Alone</h1>
          <p>
            Connect with others who understand your journey. Share experiences,
            offer support, and build meaningful connections in our safe
            community spaces.
          </p>
        </section>

        <section className="content">
          <div className="community-stories">
            <h2>Community Stories</h2>

            <div className="story-card">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Jessica T."
              />
              <div className="story-content">
                <h3>Jessica T.</h3>
                <span>Community Member</span>
                <h4>Finding strength in vulnerability</h4>
                <p>
                  I've struggled with anxiety for years, but sharing my
                  experience here has helped me realize I'm not alone...
                </p>
                <div className="story-footer">
                  <span>
                    <FaHeart style={{ color: "red" }} /> 28
                  </span>
                  <span>
                    <FaComment /> 14
                  </span>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>

            <div className="story-card">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Mark L."
              />
              <div className="story-content">
                <h3>Mark L.</h3>
                <span>Community Member</span>
                <h4>Overcoming self-doubt</h4>
                <p>
                  Opening up was tough, but it helped me find a community that
                  truly understands...
                </p>
                <div className="story-footer">
                  <span>
                    <FaHeart style={{ color: "red" }} /> 18
                  </span>
                  <span>
                    <FaComment /> 10
                  </span>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>

          <div className="support-groups">
            <h2>Support Groups</h2>

            <div className="group-card">
              <div className="group-icon">
                <FaUser />
              </div>
              <div className="group-info">
                <h4>Anxiety Support</h4>
                <span>1.2k members</span>
              </div>
              <button>Join</button>
            </div>

            <div className="group-card">
              <div className="group-icon">
                <FaHeart style={{ color: "lightgreen", fontSize: "30px" }} />
              </div>
              <div className="group-info">
                <h4>Mindfulness Practice</h4>
                <span>876 members</span>
              </div>
              <button>Join</button>
            </div>

            <div className="group-card">
              <div className="group-icon">
                <FaDove style={{ color: "white", stroke:"black", strokeWidth:"7px"}} />
              </div>
              <div className="group-info">
                <h4>Grief & Healing</h4>
                <span>650 members</span>
              </div>
              <button>Join</button>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Community;
