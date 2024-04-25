import * as React from "react";
import styled from "styled-components";
const parkingLegendData = [
  { label: "נעולה", color: "#494e50" },
  { label: "תחזוקה", color: "#00745e" },
  { label: "אורחים", color: "#3975bb" },
  { label: "VIP", color: "#a863ff" },
  { label: "חניה כפולה א' וב'", color: "#ff8e00" },
  { label: "חניה בעלי הרשאה", color: "#fff" },
];

const tabs = [
  {
    id: "p2",
    text: "P-2",
    borderColor: "rgba(57, 117, 187, 1)",
    bgColor: "#f5f5f5",
    borderBottomWidth: "3px",
  },
  {
    id: "p1",
    text: "P-1",
    borderColor: "rgba(150, 153, 158, 1)",
    bgColor: "transparent",
    borderBottomWidth: "1px",
  },
];

export default function NavActions() {
  return (
    <Container>
      <ParkingLegendContainer>
        <ParkingLegendTitle>מקרא</ParkingLegendTitle>
        <ParkingLegendContent>
          <ParkingLegendList>
            {parkingLegendData.map((item, index) => (
              <ParkingLegendItem key={index}>
                <ParkingLegendLabel>{item.label}</ParkingLegendLabel>
                <ParkingLegendColor style={{ backgroundColor: item.color }} />
              </ParkingLegendItem>
            ))}
          </ParkingLegendList>
          <ParkingLegendIcon
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f44291bce6731a910bf437285051529997c9f868d4058cbabfae1c0f354a8515?apiKey=232681902e8f4be7961abae526196996&"
            alt="Parking Legend Icon"
          />
        </ParkingLegendContent>
      </ParkingLegendContainer>
      <ParkingActionsContainer>
        <ParkingActionsList>
          <ParkingActionsItem>
            <ParkingActionsButton>
              <ParkingActionsLabel>טען קובץ חניות</ParkingActionsLabel>
              <ParkingActionsIcon
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc2b75ec5e4d60416210e907878e053afb8bb10ee407595918400a5f03d06886?apiKey=232681902e8f4be7961abae526196996&"
                alt="Load Parking File Icon"
              />
            </ParkingActionsButton>
          </ParkingActionsItem>
          <ParkingActionsItem>
            <ParkingActionsButton>
              <ParkingActionsLabel>הורדת פורמט חניות</ParkingActionsLabel>
              <ParkingActionsIcon
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c90620aecfbe1e7fbf5a0929129a48e66096bcc9687a921fde01c0bea032706f?apiKey=232681902e8f4be7961abae526196996&"
                alt="Download Parking Format Icon"
              />
            </ParkingActionsButton>
          </ParkingActionsItem>
        </ParkingActionsList>

        <ParkingLevelTabs>
          {tabs.map((item) => (
            <ParkingLevelTab
              key={item.id}
              borderColor={item.borderColor}
              bgColor={item.bgColor}
              borderBottomWidth={item.borderBottomWidth}
            >
              {item.text}
            </ParkingLevelTab>
          ))}
        </ParkingLevelTabs>
      </ParkingActionsContainer>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: start;
  gap: 20px;
  justify-content: space-between;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;
const ParkingLegendContainer = styled.section`
  border-radius: 46px;
  background-color: #e3e3e3;
  display: flex;
  margin-top: 4px;
  flex-direction: column;
  font-size: 15px;
  color: #000;
  font-weight: 400;
  text-align: right;
  padding: 10px 31px 4px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;
const ParkingLegendTitle = styled.h2`
  font-family: Rubik, sans-serif;
  align-self: end;
`;
const ParkingLegendContent = styled.div`
  display: flex;
  gap: 5px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;
const ParkingLegendList = styled.ul`
  justify-content: end;
  display: flex;
  gap: 18px;
  flex-grow: 1;
  margin: auto 0;
  padding: 0 2px 0 7px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;
const ParkingLegendItem = styled.li`
  justify-content: end;
  display: flex;
  gap: 4px;
  white-space: nowrap;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;
const ParkingLegendLabel = styled.span`
  font-family: Rubik, sans-serif;
`;
const ParkingLegendColor = styled.span`
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1));
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: auto 0;
`;
const ParkingLegendIcon = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 32px;
`;
const ParkingActionsContainer = styled.div`
  display: flex;
  gap: 0px;
  font-weight: 500;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;
const ParkingActionsList = styled.ul`
  align-self: end;
  z-index: 10;
  display: flex;
  margin-top: 9px;
  gap: 15px;
  font-size: 16px;
  color: #004ea9;
  text-align: center;
  flex-grow: 1;
`;
const ParkingActionsItem = styled.li`
  justify-content: center;
  border-radius: 10px;
  border: 1px solid rgba(0, 78, 169, 1);
  display: flex;
  flex-direction: column;
  padding: 12px 22px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;
const ParkingActionsButton = styled.button`
  justify-content: center;
  display: flex;
  gap: 8px;
  background: none;
  border: none;
  cursor: pointer;
`;
const ParkingActionsLabel = styled.span`
  font-family: Rubik, sans-serif;
  margin: auto 0;
`;
const ParkingActionsIcon = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 24px;
`;
const ParkingLevelTabs = styled.nav`
  all: unset;
  display: flex;
  justify-content: end;
  gap: 0px;
  font-size: 20px;
  color: #3975bb;
  text-align: right;
  flex-grow: 1;
  padding: 0 16px 0 80px;
  @media (max-width: 991px) {
    padding-left: 20px;
  }
`;
const ParkingLevelTab = styled.button`
  all: unset;
  font-family: Rubik, sans-serif;
  display: flex;
  justify-content: center;
  border: solid;
  border-bottom-color: ${(props) => props.borderColor};
  background-color: ${(props) => props.bgColor};
  border-bottom-width: ${(props) => props.borderBottomWidth};
  padding: 17px 14px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;
