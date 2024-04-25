import React, { useState } from "react";
import LogoSVG from "../svgs/logo.svg";
import PieChart from "../svgs/pieChart.svg";
import Desktop from "../svgs/desktop.svg";
import PI from "../svgs/Pi.svg";
import Message from "../svgs/message.svg";
import Board from "../svgs/Board.svg";
import People from "../svgs/People.svg";
import Bell from "../svgs/Bell.svg";
import Foot from "../svgs/foot.svg";
import "../component.css";

const VerticalBar = ({ onSelectSection }) => {
  const [active, setActive] = useState("");

  const handleClick = (section) => {
    setActive(section); // Set the active section state
    onSelectSection(section); // Notify the parent component
  };

  return (
    <div
      className="vertical-bar d-flex flex-column justify-content-between"
      style={{ height: "100vh" }}
    >
      <div>
        <div
          className={`bar-section-custom d-flex justify-content-center align-items-center ${
            active === "Logo" ? "second-section" : ""
          }`}
          onClick={() => handleClick("Logo")}
        >
          <img src={LogoSVG} alt="Logo" />
        </div>
        <div
          className={`bar-section d-flex justify-content-center align-items-center ${
            active === "PieChart" ? "second-section" : ""
          }`}
          onClick={() => handleClick("PieChart")}
        >
          <img src={PieChart} alt="pie-chart" />
        </div>
        <div
          className={`bar-section d-flex justify-content-center align-items-center ${
            active === "Desktop" ? "second-section" : ""
          }`}
          onClick={() => handleClick("Desktop")}
        >
          <img src={Desktop} alt="desktop" />
        </div>
        <div
          className={`bar-section d-flex justify-content-center align-items-center ${
            active === "PI" ? "second-section" : ""
          }`}
          onClick={() => handleClick("PI")}
        >
          <img src={PI} alt="Pi" />
        </div>
        <div
          className={`bar-section d-flex justify-content-center align-items-center ${
            active === "Message" ? "second-section" : ""
          }`}
          onClick={() => handleClick("Message")}
        >
          <img src={Message} alt="message" />
        </div>
        <div
          className={`bar-section d-flex justify-content-center align-items-center ${
            active === "Board" ? "second-section" : ""
          }`}
          onClick={() => handleClick("Board")}
        >
          <img src={Board} alt="Board" />
        </div>
        <div
          className={`bar-section d-flex justify-content-center align-items-center ${
            active === "People" ? "second-section" : ""
          }`}
          onClick={() => handleClick("People")}
        >
          <img src={People} alt="people" />
        </div>
        <div
          className={`bar-section third-section d-flex justify-content-center align-items-center ${
            active === "Bell" ? "second-section" : ""
          }`}
          onClick={() => handleClick("Bell")}
        >
          <img src={Bell} alt="bell" />
        </div>
      </div>
      <div
        className={`bar-section third-section d-flex justify-content-center align-items-center ${
          active === "Foot" ? "second-section" : ""
        }`}
        onClick={() => handleClick("Foot")}
      >
        <img src={Foot} alt="foot" />
      </div>
    </div>
  );
};

export default VerticalBar;
