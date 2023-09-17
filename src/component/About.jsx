import React from "react";
import Resume from "../assets/tech/resume.pdf";

const About = () => {
  return (
    <div>
      <section class="about section active" id="about">
        <div class="container">
          <div class="row">
            <div class="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div class="row">
            <div class="about-content padd-15">
              <div class="row">
                <div class="about-text padd-15">
                  <h2>
                    I'm Nirmal Raj and <span>React Developer</span>
                  </h2>
                  <p>
                    Hi! My name is Nirmal Raj. I am a React Developer, and I'm
                    very passionate and dedicated to my work. With 2 years
                    experience as a React Developer, I have acquired the skills
                    and knowledge necessary to make your project a success. I
                    enjoy every step of the design process, from discussion and
                    collaboration.
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="personal-info padd-15">
                  <div class="row">
                    <div class="info-item padd-15">
                      <p>
                        Website :{" "}
                        <span>https://nirmalraj001.github.io/portfolio/</span>
                      </p>
                    </div>
                    <div class="info-item padd-15">
                      <p>
                        Email : <span>rajnirmal1622@gmail.com</span>
                      </p>
                    </div>
                    <div class="info-item padd-15">
                      <p>
                        Degree : <span>B.Sc(CS)(SSS)</span>
                      </p>
                    </div>
                    <div class="info-item padd-15">
                      <p>
                        City : <span>Madurai</span>
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="buttons padd-15">
                      <button
                        className="btn"
                        type="submit"
                        onClick={() => window.open(Resume)}
                      >
                        Download CV
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
