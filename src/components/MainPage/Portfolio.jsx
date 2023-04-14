import React from "react";
import PortfolioItem from "./PortfolioItem";
import { Link } from "react-router-dom";
import poster_yoga from "../../assets/images/posters/poster_yoga.png";
import poster_codingCompetition from "../../assets/images/posters/poster_codingCompetition.png";
import poster_main from "../../assets/images/posters/poster_main.png";
import poster_postermaking from "../../assets/images/posters/poster_postermaking.png";
import fivek_run from "../../assets/images/posters/fivek_run.png";
import sattvik_bhoj from "../../assets/images/posters/sattvikoham_dinner.png";

export default function Portfolio({ isActive }) {
  const style1 = {
    animation: "appear 1s ease-in-out",
    display: "block",
    ttransform: "translateY(0) scaleY(1)",
  };
  const style2 = { display: "none" };
  return (
    <section
      style={isActive === 1 ? style1 : style2}
      className="section sec3 portfolio"
    >
      <div class="main-title">
        <h2>
          Sattvikoham <span>Events</span>
        </h2>
      </div>
      <p class="port-text">
        Join us at Sattvikoham's captivating events and seize incredible
        opportunities. We welcome you to register and revel in the excitement!
      </p>
      <div class="portfolios">
        <PortfolioItem
          link="https://forms.gle/TXG3K8QQ6TdnhaJR6"
          img={poster_yoga}
          title="Yogadhyatm"
          desc="Hey, folks! Looking for a fun and free way to reduce stress, improve focus, and boost your overall well-being? Join us for an exciting yoga event on 9th April at 7AM at Gymkhana.
          The yoga session is led by experienced yoga instructors who guide participants through a series of exercises designed to promote physical and mental well-being. The session is open to all, and participants are encouraged to attend and experience the benefits of this ancient practice.
          Reduce stress, enhance focus, and improve your overall physical and mental health, all at once. Don't miss out on this amazing opportunity! Reserve your spot fast."
        />

        <PortfolioItem
          link="https://forms.gle/TXG3K8QQ6TdnhaJR6"
          img={poster_codingCompetition}
          title={[
            <div style={{ textAlign: "center" }}>
              <span>Sattvik Bytes</span>
            </div>,
          ]}
          desc={[
            <p style={{ fontSize: "15px" }}>
              Are you ready to showcase your skills and creativity in solving
              real-world problems related to healthy lifestyles? Join us for an
              exciting coding competition where you can create innovative
              solutions using the latest advanced technological algorithms. By
              participating, you'll have the opportunity to not only show off
              your programming prowess, but also to win some exciting prizes!
              Don't miss out on this chance to make a difference in people's
              lives and demonstrate your coding talent. Hey there, Coding
              enthusiasts, register ASAP!!!
            </p>,
          ]}
        />

        <PortfolioItem
          link="https://forms.gle/TXG3K8QQ6TdnhaJR6"
          img={poster_postermaking}
          title="Srajanotsav"
          desc="The poster-making competition provides an opportunity for participants to showcase their creativity and design skills. The theme of the competition is centered around promoting the benefits of a SATTVIK diet and lifestyle, and participants are encouraged to create visually appealing posters that highlight the importance of healthy eating habits.
          "
        />

        <PortfolioItem
          link="https://forms.gle/TXG3K8QQ6TdnhaJR6"
          img={fivek_run}
          title="Prerna Path"
          desc="Tired of spending all day sitting in front of a screen? Looking for a fun and rewarding way to get active and showcase your athletic skills. 
          Join us for an exciting marathon event in which participants from all over the campus come together to run and promote the benefits of physical fitness.
          Whether you're a seasoned runner or a beginner, this event is for you! We'll have refreshments for all participants, so you can fuel up and keep going. Don't miss out on this amazing opportunity to boost your physical fitness and mental wellbeing. Register now to secure your spot!"
        />

        <PortfolioItem
          link="https://forms.gle/TXG3K8QQ6TdnhaJR6"
          img={poster_yoga}
          title="Yogadhyatm"
          desc="Hey, folks! Looking for a fun and free way to reduce stress, improve focus, and boost your overall well-being? Join us for an exciting yoga event on 9th April at 7AM at Gymkhana.
        The yoga session is led by experienced yoga instructors who guide participants through a series of exercises designed to promote physical and mental well-being. The session is open to all, and participants are encouraged to attend and experience the benefits of this ancient practice.
        Reduce stress, enhance focus, and improve your overall physical and mental health, all at once. Don't miss out on this amazing opportunity! Reserve your spot fast."
        />

        <PortfolioItem
          link="https://forms.gle/TXG3K8QQ6TdnhaJR6"
          img={poster_codingCompetition}
          title={[
            <div style={{ textAlign: "center" }}>
              <span>Sattvik Bytes</span>
            </div>,
          ]}
          desc={[
            <p style={{ fontSize: "15px" }}>
              Are you ready to showcase your skills and creativity in solving
              real-world problems related to healthy lifestyles? Join us for an
              exciting coding competition where you can create innovative
              solutions using the latest advanced technological algorithms. By
              participating, you'll have the opportunity to not only show off
              your programming prowess, but also to win some exciting prizes!
              Don't miss out on this chance to make a difference in people's
              lives and demonstrate your coding talent. Hey there, Coding
              enthusiasts, register ASAP!!!
            </p>,
          ]}
        />
      </div>
    </section>
  );
}
