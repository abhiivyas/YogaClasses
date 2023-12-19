
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';
import '../styles/ContactForm.css';
const LandingPage = () => {
  return (
    <div>
      <header>
        <nav>
          <div className="logo">HOME</div>
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
          <h1>YOGA STUDIO</h1>
          <p>Find balance, peace, and strength through yoga.</p>
        </div>
        <Link to="/admission" className="landingpage_btn">Enroll Now</Link>
      </section>

      <section id="about">
        <div className="container">
          <h2>About Us</h2>
          <p> Yoga Studio is dedicated to providing a welcoming and nurturing environment for all levels of practitioners.</p>
        </div>
      </section>

      <section id="classes">
        <div className="container">
          <h2>Classes</h2>
          <p>Discover a variety of classes tailored to meet your needs, from beginners to advanced practitioners.</p>

        </div>
      </section>

      <section id="schedule">
        <div className="container">
          <h2>Class Schedule</h2>
          <p>Enroll at anytime in month</p>
          { }
        </div>
      </section>

      <section id="contact">
    <div class="container">
      <h2>Contact Us</h2>
      <p>Drop your email, and we will reach out to you!</p>

      <form>
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          required
        />

        <button type="submit">Send Message</button>
      </form>
    </div>
  </section>

      <footer>
        <p>&copy; {new Date().getFullYear()}  Yoga Studio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
