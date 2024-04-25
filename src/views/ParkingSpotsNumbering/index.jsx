import React from "react";
import Header from "./header";
import Stepper from "./stepper";
import styled from "styled-components";
import Footer from "./footer";

const AddParkingLotWizardPopup = () => {
  return (
    <div>
      <Header />

      <Stepper />

      <ContentContainer>

      </ContentContainer>

      <Footer />
    </div>
  );
};

export default AddParkingLotWizardPopup;

const ContentContainer = styled.div`
  display: flex;
  padding: 4em;
  gap: 4em;
`;
