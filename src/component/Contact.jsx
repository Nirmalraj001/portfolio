import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState(new FormData());

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!(formData.name && formData.email && formData.message)) {
      alert("Something went wrong!");
      return;
    }

    alert(`Thanks ${formData.name}, I will shortly connect with you!`);
    setFormData({});
  };
  return (
    <div>
      <section class="contact section active" id="contact">
        <div class="container">
          <div class="row">
            <div class="section-title padd-15">
              <h2>Contact Me</h2>
            </div>
          </div>
          <div class="row">
            <div class="contact-info-item padd-15">
              <div class="icon">
                <i class="fa fa-envelope"></i>
              </div>
              <h4>Email</h4>
              <p>rajnirmal1622@gmail.com</p>
            </div>
          </div>
          <div class="row">
            <form class="contact-form padd-15">
              <div class="row">
                <div class="form-item col-6 padd-15">
                  <div class="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      name="name"
                      aria-describedby="emailHelp"
                      placeholder="Enter your name"
                      value={formData.name || ""}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div class="form-item col-6 padd-15">
                  <div class="form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      value={formData.email || ""}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="form-item col-12 padd-15">
                  <div class="form-group">
                    <textarea
                      className="form-control"
                      id="userMessage"
                      name="message"
                      rows="3"
                      placeholder="Enter message"
                      value={formData.message || ""}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12 padd-15">
                  <button type="submit" class="btn" onClick={handleSubmit}>
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
