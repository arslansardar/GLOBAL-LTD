import React from "react";
import Logo2 from "../svgs/Logo2.svg";
import DropDown from "./searchDropDown";
const NavbarPage2 = () => {
  const items = [
    { text: "נעול", bgColor: "#5F6368" },
    { text: " נגישה", bgColor: "#1FA0FF" },
    { text: "ממתין", bgColor: "#4682B4" },
    { text: "בתהליך", bgColor: "#32CD32" },
    { text: "הושלם", bgColor: "#FFD700" },
  ];
  return (
    <>
      <div className="navbar-page2-end">
        {/* Left-aligned items */}
        <div className="left-items">
          {items.map((item, index) => (
            <div key={index} className="d-flex align-items-center me-3">
              <span style={{ color: "white" }}>{item.text}</span>
              <div
                className="box"
                style={{
                  backgroundColor: item.bgColor,
                  marginLeft: "8px",
                }}
              ></div>
            </div>
          ))}
        </div>

        {/* Right-aligned items */}
        <div className="right-items">
          <DropDown />
          <div className="text-class">מרכז בקרה</div>
          <img src={Logo2} alt="" />
        </div>
      </div>
    </>
  );
};

export default NavbarPage2;
