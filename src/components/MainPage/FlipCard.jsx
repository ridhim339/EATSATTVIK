import Flippy, { FrontSide, BackSide } from "react-flippy";

import React from "react";

class FlipCard extends React.Component {
  // ... component class
  render() {
    return (
      <Flippy
        flipOnHover={true} // default false
        flipOnClick={true} // default false
        flipDirection="horizontal" // horizontal or vertical
        ref={(r) => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
        // if you pass isFlipped prop component will be controlled component.
        // and other props, which will go to div
        style={{ width: "250px", height: "270px" }} /// these are optional style, it is not necessary
      >
        <FrontSide style={{ padding: "0px" }}>
          <img
            style={{ width: "100%", height: "100%", borderRadius: "6px" }}
            src={this.props.img}
            alt=""
          />
        </FrontSide>
        <BackSide style={{ backgroundColor: "#2A2E35" }}>
          <div className="profile-back-main">
            <div className="name-space">
              <h2>{this.props.name}</h2>
            </div>

            <div className="role-name">
              <h3>{this.props.role}</h3>
            </div>

            <div className="social-media-links">
              <div className="instagram-link">
                <a
                  href={this.props.insta_link}
                  rel="noreferrer"
                  target="_blank"
                >
                  <i class="insta-icon fab fa-instagram" aria-hidden="true"></i>
                </a>
              </div>
              <div className="linkedin-link">
                <a
                  href={this.props.linkedin_link}
                  rel="noreferrer"
                  target="_blank"
                >
                  <i class="linkedin-icon fab fa-linkedin"></i>
                </a>
              </div>
              <div className="twitter-link">
                <a href={this.props.fb_link} rel="noreferrer" target="_blank">
                  <a href="">
                    <img src="" alt="" />
                  </a>
                  <i class="fb-icon fab fa-facebook"></i>
                </a>
              </div>
            </div>
          </div>
        </BackSide>
      </Flippy>
    );
  }
}

export default FlipCard;
