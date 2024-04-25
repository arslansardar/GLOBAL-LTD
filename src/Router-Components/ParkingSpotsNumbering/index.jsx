import React from "react";
import Header from "./header";
import Stepper from "./stepper";
import styled from "styled-components";
import Footer from "./footer";
import NavActions from "./navActions";
import Actions from "./actions";
import Column1 from "./columns/column1";
import Column2 from "./columns/column2";
import Column3 from "./columns/column3";
import Column4 from "./columns/column4";
import Column5 from "./columns/column5";

const ParkingSpotsNumbering = () => {
  return (
    <div>
      <Header />

      <Stepper />

      <ContentContainer>
        <NavActions />

        <Actions />

        <Row>
          <Column1 />
          <Column2 />
          <Column3 />
          <Column4 />
          <Column5 />
        </Row>
      </ContentContainer>

      <Footer />
    </div>
  );
};

export default ParkingSpotsNumbering;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5em 4em 2em;
`;
const Row = styled.div`
  display: flex;
  gap: 2em;
  align-items: flex-start;
`;
