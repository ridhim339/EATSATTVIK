import React from "react";
import logo from "../../assets/images/logo.png";
import video from "../../assets/video.gif";
export default function Header({ isActive, navigator }) {
  const style1 = {
    animation: "appear 1s ease-in-out",
    display: "block",
    ttransform: "translateY(0) scaleY(1)",
  };
  const style2 = { display: "none" };
  return (
    <header
      style={isActive === 1 ? style1 : style2}
      className="section sec1 header"
    >
      <div className="header-content">
        <div className="left-header">
          <div className="h-shape"></div>
          <div className="image">
            <img src={video}></img>
          </div>
        </div>
        <div className="right-header">
          <div class="main-title">
            <h2 style={{ margin: "0px" }}>
              <div className="sattvik-event">
                <img
                  className="sattvikoham-logo"
                  // style={{
                  //   width: "100px",
                  //   height: "130px",
                  //   borderRadius: "50%",
                  // }}
                  src={logo}
                  alt=""
                />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div>
                    Sattvi<span>koham</span>
                  </div>
                  <div
                    className="tagline"
                    style={{
                      textAlign: "right",
                      fontFamily: "cursive",
                    }}
                  >
                    Where health and happiness meet
                  </div>
                </div>
              </div>
            </h2>
          </div>

          {/*<h1 className="name">
            <span>Sattvikoham</span> : A gateway to healthy life
  </h1>*/}
          <p style={{ textAlign: "center" }}>
            Sattvikoham, an auspicious inaugural institute fest, is devoted to
            promoting a salubrious lifestyle and fostering a heightened sense of
            self-awareness in students with regards to their overall well-being.
            This year's celebration, which coincides with the International Year
            of Millets, promises to be a veritable cornucopia of delightful
            experiences and intellectual stimulation.
          </p>
          <div className="btn-con" style={{ textAlign: "center" }}>
            <div style={{ margin: "0 auto" }}>
              <a
                className="main-btn"
                style={{ textAlign: "center" }}
                onClick={() => navigator(2)}
              >
                <span className="btn-text">Explore Events</span>
                <span className="btn-icon">
                  <i className="fa fa-angle-right"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
