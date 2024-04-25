import React from "react";
import { SemiCircleProgress } from "react-semicircle-progressbar";

const MySemiCircleProgressBar = ({ percentage }) => {
  return (
    <div style={{ position: "relative" }}>
      <div style={{ marginTop: "-50px", marginLeft: "-10px" }}>
        <SemiCircleProgress
          percentage={percentage}
          size={{
            width: 180,
            height: 210,
          }}
          strokeWidth={6}
          strokeColor="#E52055"
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          marginTop: "60px",
          marginLeft:'-8px'
        }}
      >
        <span className="card_text">{percentage}/1000</span>
        <br />
        <span className="card_Text">צפייה בחניון</span>
      </div>
    </div>
  );
};

export default MySemiCircleProgressBar;
