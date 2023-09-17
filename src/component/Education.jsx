import React from "react";

const Education = () => {
  return (
    <div>
      <section class="about section active" id="about">
        <div class="container">
          <div class="row">
            <div class="section-title padd-15">
              <h2>Education</h2>
            </div>
            <div class="about-content padd-15">
              <div class="row">
                <div class="education padd-15">
                  <div class="row">
                    <div class="timeline-box padd-15">
                      <div class="timeline shadow-dark">
                        <div class="timeline-item">
                          <div class="circle-dot"></div>
                          <h6 class="timeline-date">
                            <i class="fa fa-calendar"></i> 2021
                          </h6>
                          <h4 class="timeline-title">
                            Bachelor of Science(Computer Science)
                          </h4>
                          <p class="timeline-text">
                            {" "}
                            I started my journey to be a art student on
                            Subbalakshmi Lakshmipathy College of Science. It
                            will give more spaces to learn new technologies and
                            on my Final year i have learnt the Articifical
                            intelligence tool and completed the project using AI
                            Technologies .
                          </p>
                        </div>
                        <div class="timeline-item">
                          <div class="circle-dot"></div>
                          <h6 class="timeline-date">
                            <i class="fa fa-calendar"></i> 2018
                          </h6>
                          <h4 class="timeline-title">
                            Higher Secondary School
                          </h4>
                          <p class="timeline-text">
                            I passed HSC Exam from VHN Higher secondary school .{" "}
                          </p>
                        </div>
                        <div class="timeline-item">
                          <div class="circle-dot"></div>
                          <h6 class="timeline-date">
                            <i class="fa fa-calendar"></i> 2016
                          </h6>
                          <h4 class="timeline-title">Matriculation School</h4>
                          <p class="timeline-text">
                            I passed SSC Exam from KNG Matriculation school .{" "}
                          </p>
                        </div>
                      </div>
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

export default Education;
