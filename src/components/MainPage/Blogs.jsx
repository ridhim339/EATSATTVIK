import React from "react";

export default function Contact({ isActive }) {
  const style1 = {
    animation: "appear 1s ease-in-out",
    display: "block",
    ttransform: "translateY(0) scaleY(1)",
  };
  const style2 = { display: "none" };
  return (
    <section
      style={isActive === 1 ? style1 : style2}
      className="section sec5 contact"
    >
      <div class="contact-container">
        <div class="main-title">
          <h2>
            Contact <span>Me</span>
          </h2>
        </div>
        <div class="contact-content-con">
          <div class="left-contact">
            <h4>Contact me here</h4>
            <p>
              Drop a message of appriciation, report bugs, or just Say Hello.
            </p>
            <div class="contact-info">
              <div class="contact-item">
                <div class="icon">
                  <i class="fas fa-map-marker-alt"></i>
                  <span>Location</span>
                </div>
                <p>: Jalandhar, India</p>
              </div>
              <div class="contact-item">
                <div class="icon">
                  <i class="fas fa-envelope"></i>
                  <span>Email</span>
                </div>
                <p>
                  <span>: ridhim339@gmail.com</span>
                </p>
              </div>
              <div class="contact-item">
                <div class="icon">
                  <i class="fas fa-phone"></i>
                  <span>Mobile Number</span>
                </div>
                <p>
                  <span>: +91 7889118161</span>
                </p>
              </div>
              <div class="contact-item">
                <div class="icon">
                  <i class="fas fa-language"></i>
                  <span>Languages</span>
                </div>
                <p>
                  <span>: Hindi, English</span>
                </p>
              </div>
            </div>
          </div>
          <div class="right-contact">
            <form action="" class="contact-form">
              <div class="input-control i-c-2">
                <input type="text" required placeholder="YOUR NAME" />
                <input type="email" required placeholder="YOUR EMAIL" />
              </div>
              <div class="input-control">
                <input type="text" required placeholder="ENTER SUBJECT" />
              </div>
              <div class="input-control">
                <textarea
                  name=""
                  id=""
                  cols="15"
                  rows="8"
                  placeholder="Message Here..."
                ></textarea>
              </div>
              <div
                class="submit-btn"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div className="sb">
                  <button className="btn btn-success" type="submit">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
