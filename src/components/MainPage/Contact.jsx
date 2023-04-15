import React from "react";
import TimelineItem from "./TimelineItem";

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
      <div class="main-title">
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Event <span style={{ color: "#27AE60" }}>Timeline</span>
        </h2>
      </div>
      <div class="timeline">
        <TimelineItem
          duration="7th May 2023, 10:00pm"
          role="Coding Competition"
          company="Sattvik Bytes"
        />
        <TimelineItem
          duration="8th May 2023, 7:00AM"
          role="5k Run"
          company="Prerna Path"
        />
        <TimelineItem
          duration="8th May 2023, 3:00PM"
          role="Poster Making Competition"
          company="Srajanotsav"
        />
        <TimelineItem
          duration="8th May 2023, 7:00PM"
          role="Dinner Celebration"
          company="Sattvik Bhoj"
        />
        <TimelineItem
          duration="9th May 2023, 7:00AM"
          role="Yoga Session"
          company="Yogadhyatm"
        />
        <TimelineItem
          duration="9th May 2023, 3:00PM"
          role="Guest to be announced"
          company="Guest Talk"
        />
      </div>
    </section>
  );
}
