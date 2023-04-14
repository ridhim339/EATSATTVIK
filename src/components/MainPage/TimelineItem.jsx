import React from "react";

export default function TimelineItem({ duration, role, company, para }) {
  return (
    <div class="timeline-item">
      <div class="tl-icon">
        <i class="fas fa-briefcase"></i>
      </div>
      <p class="tl-duration">{duration}</p>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h5>{company}</h5>
        <span style={{ fontSize: 15, color: "#999" }}> &nbsp; - {role}</span>
      </div>
      <p>{para}</p>
    </div>
  );
}
