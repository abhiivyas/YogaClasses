// src/components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css'; // Assuming you save the CSS code in a file named LandingPage.css

const LandingPage = () => {
  return (
    <div>
      <header>
        <nav>
          <div className="logo">Your Yoga Studio</div>
          <ul className="nav-links">
            <li><Link to="#about">About</Link></li>
            <li><Link to="#classes">Classes</Link></li>
            <li><Link to="#schedule">Schedule</Link></li>
            <li><Link to="#contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <section id="hero">
        <div className="hero-content">
          <h1>Welcome to Your Yoga Journey</h1>
          <p>Find balance, peace, and strength through yoga.</p>
        </div>
          <Link to="/admission" className="landingpage_btn">Enroll Now</Link>
      </section>

      <section id="about">
        <div className="container">
          <h2>About Us</h2>
          <p>Your Yoga Studio is dedicated to providing a welcoming and nurturing environment for all levels of practitioners.</p>
        </div>
      </section>

      <section id="classes">
        <div className="container">
          <h2>Classes</h2>
          <p>Discover a variety of classes tailored to meet your needs, from beginners to advanced practitioners.</p>
          <div className="class-card">
            <h3>Hatha Yoga</h3>
            <p>A gentle form of yoga that focuses on physical postures and breathing exercises.</p>
          </div>
          <div className="class-card">
            <h3>Vinyasa Flow</h3>
            <p>Flowing sequences of yoga poses synchronized with the breath for a dynamic practice.</p>
          </div>
          {/* Add more class cards as needed */}
        </div>
      </section>

      <section id="schedule">
        <div className="container">
          <h2>Class Schedule</h2>
          <p>Check out our weekly schedule and join us for a session.</p>
          {/* Add a table or other layout for the schedule */}
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <p>Have questions or want to join a class? Reach out to us!</p>
          {/* Add a contact form or contact information */}
        </div>  
      </section>

      <footer>
        <p>&copy; {new Date().getFullYear()} Your Yoga Studio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
