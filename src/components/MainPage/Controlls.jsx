import React from "react";

export default function Controlls(props) {
  const isActiveList = props.list;

  return (
    <div className="controls">
      <div
        style={{
          backgroundColor: isActiveList[0] === 1 ? "#27AE60" : "#454e56",
        }}
        className="control"
        onClick={() => props.navigator(0)}
      >
        <i
          style={{ color: isActiveList[0] === 1 ? "#fff" : "#27AE60" }}
          className="fas fa-home"
        ></i>
      </div>
      <div
        style={{
          backgroundColor: isActiveList[1] === 1 ? "#27AE60" : "#454e56",
        }}
        className="control"
        onClick={() => props.navigator(1)}
      >
        <i
          style={{ color: isActiveList[1] === 1 ? "#fff" : "#27AE60" }}
          className="fa-solid fa-address-card"
        ></i>
      </div>
      <div
        style={{
          backgroundColor: isActiveList[4] === 1 ? "#27AE60" : "#454e56",
        }}
        className="control"
        onClick={() => props.navigator(4)}
      >
        <i
          style={{
            color: isActiveList[4] === 1 ? "#fff" : "#27AE60",
            transform: "rotate(270deg)",
          }}
          className="fa-solid fa-timeline"
        ></i>
      </div>
      <div
        style={{
          backgroundColor: isActiveList[2] === 1 ? "#27AE60" : "#454e56",
        }}
        className="control"
        onClick={() => props.navigator(2)}
      >
        <i
          style={{ color: isActiveList[2] === 1 ? "#fff" : "#27AE60" }}
          className="fas fa-briefcase"
        ></i>
      </div>
      <div
        style={{
          backgroundColor: isActiveList[3] === 1 ? "#27AE60" : "#454e56",
        }}
        className="control"
        onClick={() => props.navigator(3)}
      >
        <i
          style={{ color: isActiveList[3] === 1 ? "#fff" : "#27AE60" }}
          className="fa fa-address-book"
        ></i>
      </div>
    </div>
  );
}
