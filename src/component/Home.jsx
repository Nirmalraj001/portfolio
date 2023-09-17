import React from "react";
import Profile from "../assets/images/profile.png";

const Home = () => {
  return (
    <div>
      <section class="home section active" id="home">
        <div class="container">
          <div class="intro">
            <img src={Profile} alt="profile" class="shadow-dark" />
            <h1>Nirmal Raj</h1>
            <p>I am a Professional Frontend Developer</p>
            {/* <div class="social-links">
              <a href="https://twitter.com/saifalsiam" target="_blank">
                <i class="fa fa-twitter"></i>
              </a>
              <a href="https://facebook.com/alsiam.me" target="_blank">
                <i class="fa fa-facebook"></i>
              </a>
              <a href="https://github.com/alsiam" target="_blank">
                <i class="fa fa-github"></i>
              </a>
              <a href="https://instagram.com/saifalsiam" target="_blank">
                <i class="fa fa-instagram"></i>
              </a>
              <a href="https://linkedin.com/in/saifalsiam" target="_blank">
                <i class="fa fa-linkedin"></i>
              </a>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
