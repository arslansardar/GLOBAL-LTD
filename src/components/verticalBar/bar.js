import React from "react";
import LogoSVG from "../svgs/logo.svg";
import PieChart from "../svgs/pieChart.svg";
import Desktop from "../svgs/desktop.svg";
import PI from "../svgs/Pi.svg";
import Message from "../svgs/message.svg";
import Board from "../svgs/Board.svg";
import People from "../svgs/People.svg";
import Bell from "../svgs/Bell.svg";
import Foot from "../svgs/foot.svg";

import "../component.css"; // Import the CSS file

const VerticalBar = () => {
  return (
    <div className="vertical-bar d-flex flex-column justify-content-between" style={{ height: '100vh' }}>
      <div>
        {/* Section with centered LogoSVG */}
        <div className="bar-section-custom d-flex justify-content-center align-items-center">
          <img src={LogoSVG} alt="Logo" />
        </div>

        {/* Remaining sections (optional customization) */}
        <div className="bar-section second-section d-flex justify-content-center align-items-center">
          <img src={PieChart} alt="pie-chart" />
        </div>
        <div className="bar-section d-flex justify-content-center align-items-center">
          <img src={Desktop} alt="desktop" />
        </div>
        <div className="bar-section d-flex justify-content-center align-items-center">
          <img src={PI} alt="Pi" />
        </div>
        <div className="bar-section d-flex justify-content-center align-items-center">
          <img src={Message} alt="message" />
        </div>
        <div className="bar-section d-flex justify-content-center align-items-center">
          <img src={Board} alt="Board" />
        </div>
        <div className="bar-section d-flex justify-content-center align-items-center">
          <img src={People} alt="people" />
        </div>
        <div className="bar-section third-section d-flex justify-content-center align-items-center">
          <img src={Bell} alt="bell" />
        </div>
      </div>

      {/* Last div positioned at the end */}
      <div className="bar-section third-section d-flex justify-content-center align-items-center">
        <img src={Foot} alt="foot" />
      </div>
    </div>
  );
};

export default VerticalBar;
