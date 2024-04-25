import React from "react";
import ParkingLotFormColumn1 from "./column1";
import ParkingLotManagementColumn2 from "./column2";
import styled from "styled-components";
import ParkingSettingsColumn3 from "./column3";

const Form = () => {
  return (
    <Main>
      <ParkingSettingsColumn3 />

      <ParkingLotManagementColumn2 />

      <ParkingLotFormColumn1 />
    </Main>
  );
};

export default Form;

const Main = styled.div`
  display: flex;
  gap: 4em;
  flex-grow: 1;
`;
