import React from "react";
import Header from "./header";
import Stepper from "./stepper";
import Form from "./form";
import styled from "styled-components";
import ImagesColumn from "./imagesColumn";
import Footer from "./footer";

const AddParkingLotWizardPopup = () => {
  return (
    <div>
      <Header />

      <Stepper />

      <ContentContainer>
        <ImagesColumn />

        <Form />
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
