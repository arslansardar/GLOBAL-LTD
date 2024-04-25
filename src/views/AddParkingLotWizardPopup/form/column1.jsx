import * as React from "react";
import styled from "styled-components";

const parkingLotData = [
  {
    name: "רחל גזית",
    role: "מנהל אדמניסטרטיבי",
    description: "תפקיד זה מאפשר הזמנת חניות לאורחים",
  },
  {
    name: "רחלי מזרחי",
    role: "מנהל לוגיסטי",
    description: "מקבל התרעה ואחראי לטפל בתקלות",
  },
];

function ParkingLotFormColumn1() {
  return (
    <FormContainer>
      <FormTitle>כללי</FormTitle>
      <FormLabel>
        <RequiredMark>*</RequiredMark>שם חניון
      </FormLabel>
      <FormInput />
      <FormLabel>
        <RequiredMark>*</RequiredMark>כתובת חניון
      </FormLabel>
      <FormInput />
      <FormLabel>
        <RequiredMark>*</RequiredMark>מנהל חניון (אדמין)
      </FormLabel>
      <SelectInput>
        <SelectIcon
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d33ab9cfdd174e08dd6b6d78d773a02878efda686f179d8c500f8fbb2d159d73?apiKey=232681902e8f4be7961abae526196996&"
          alt="Select icon"
        />
        <SelectText>בחירה מרשימה</SelectText>
      </SelectInput>
      {parkingLotData.map((manager, index) => (
        <React.Fragment key={index}>
          <FormLabel>
            <RequiredMark>*</RequiredMark>
            {manager.role}
          </FormLabel>
          <ManagerInput>
            <ManagerAvatar src={`{{ext_${index + 1}}}`} alt="Manager avatar" />
            <ManagerName>{manager.name}</ManagerName>
          </ManagerInput>
          <ManagerDescription>{manager.description}</ManagerDescription>
        </React.Fragment>
      ))}
    </FormContainer>
  );
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 15px;
  color: #000;
  font-weight: 400;
  text-align: right;
  flex-grow: 1;
  min-width: 250px;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const FormTitle = styled.h2`
  font: 600 16px Rubik, sans-serif;
`;

const FormLabel = styled.label`
  font-family: Rubik, sans-serif;
  margin-top: 16px;
`;

const RequiredMark = styled.span`
  color: rgba(229, 32, 85, 1);
`;

const FormInput = styled.input`
  border-radius: 5px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
  background-color: #f5f5f5;
  width: 100%;
  margin-top: 5px;
  height: 42px;
`;

const SelectInput = styled.div`
  border-radius: 5px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
  background-color: #f5f5f5;
  width: 100%;
  display: flex;
  margin-top: 5px;
  gap: 20px;
  justify-content: space-between;
  padding: 12px;
`;

const SelectIcon = styled.img`
  width: 16px;
  height: 16px;
  object-fit: contain;
`;

const SelectText = styled.span`
  font-family: Rubik, sans-serif;
`;

const ManagerInput = styled.div`
  border-radius: 5px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
  background-color: #f5f5f5;
  width: 100%;
  display: flex;
  margin-top: 5px;
  gap: 20px;
  justify-content: space-between;
  padding: 12px;
`;

const ManagerAvatar = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: cover;
`;

const ManagerName = styled.span`
  font-family: Rubik, sans-serif;
`;

const ManagerDescription = styled.p`
  color: #494e50;
  margin-top: 5px;
  font: 12px Rubik, sans-serif;
`;

export default ParkingLotFormColumn1;
