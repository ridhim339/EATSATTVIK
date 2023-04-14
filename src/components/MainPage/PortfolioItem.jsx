import React, { useState } from "react";

import InfoModal from "./InfoModal";

export default function PortfolioItem({ img, link, title, desc }) {
  const [show, setShow] = useState(false);
  return (
    <div class="portfolio-item">
      <div
        class="image"
        onClick={() => {
          setShow(true);
        }}
        style={{ cursor: "pointer" }}
      >
        <a rel="noreferrer" target="_blank">
          <img src={img} alt="" />
        </a>
      </div>
      {show && (
        <InfoModal
          show={show}
          setShow={setShow}
          title={title}
          link={link}
          desc={desc}
        ></InfoModal>
      )}
    </div>
  );
}
