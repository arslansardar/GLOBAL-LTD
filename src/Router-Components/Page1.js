import React from "react";
import Navbar from "../components/navbar/navbar";
import VerticalBar from "../components/verticalBar/bar";
import Main from "../components/mainSection/Main";
import Header1 from "../components/navbar/Header";
import AddParkingLotWizardPopup from "../Router-Components/AddParkingLotWizardPopup/index";
import Modal from "react-bootstrap/Modal";
import ParkingSpot from "../Router-Components/ParkingSpotsNumbering/index";
import Page2 from "../Router-Components/Page2";
const Page1 = ({ activeSection, onSelectSection, handlesetActiveSection }) => {
  // Function to handle modal close
  const handleClose = () => {
    handlesetActiveSection("");
  };

  return (
    <div>
      <Header1 />
      <Navbar />
      <VerticalBar onSelectSection={onSelectSection} />
      <Main />
      <Modal show={activeSection === "PI"} onHide={handleClose} fullscreen>
        <Modal.Header closeButton>
          <Modal.Title>Add Parking Lot</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddParkingLotWizardPopup />
        </Modal.Body>
      </Modal>

      <Modal show={activeSection === "Message"} onHide={handleClose} fullscreen>
        <Modal.Header closeButton>
          <Modal.Title>Add Parking lot</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* change modela here */}
          <ParkingSpot />
        </Modal.Body>
      </Modal>

      <Modal show={activeSection === "Desktop"} onHide={handleClose} fullscreen>
        <Modal.Header closeButton>
          <Modal.Title>Something</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* change modela here */}
          <Page2 />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Page1;
