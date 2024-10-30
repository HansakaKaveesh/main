// src/components/Team.js
import React from 'react';
import './Team.css';

const Team = () => {
  return (
    <section className="team">
      <h2>Our Team</h2>
      <div class="team-section">
        <div class="team-container">
            <div class="team-member">
                <div class="image-container1">
                    <img src="/AboutUs/MD.jpg" alt="Managing Director"/>
                </div>
                <h3>Mr. M Z M Kamal</h3>
                <p>Managing Director</p>
            </div>
            
            <div class="team-member">
                <div class="image-container2">
                    <img src="/AboutUs/D.jpg" alt="Director"/>
                </div>
                <h3>Ms. T N Adirimanna</h3>
                <p>Director</p>
            </div>
        </div>
    </div>
    </section>
  );
};

export default Team;