import * as React from "react";
import styled from "styled-components";
const parkingLotData = [
  {
    id: 1,
    label: "באותו היום",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d33ab9cfdd174e08dd6b6d78d773a02878efda686f179d8c500f8fbb2d159d73?apiKey=232681902e8f4be7961abae526196996&",
  },
  {
    id: 2,
    label: "בערב שלפני יום ההזמנה",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d33ab9cfdd174e08dd6b6d78d773a02878efda686f179d8c500f8fbb2d159d73?apiKey=232681902e8f4be7961abae526196996&",
  },
  {
    id: 3,
    label: "בשעה 19:00 בערב",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d33ab9cfdd174e08dd6b6d78d773a02878efda686f179d8c500f8fbb2d159d73?apiKey=232681902e8f4be7961abae526196996&",
  },
];
function ParkingLotManagementColumn2() {
  return (
    <ParkingLotContainer>
      <ParkingLotTitle>ניהול חניון</ParkingLotTitle>
      <ParkingLotSection>
        <ParkingLotLabel>
          <RequiredMark>*</RequiredMark>מרחק הזמנה מקסימלי
        </ParkingLotLabel>
        <ParkingLotInput />
      </ParkingLotSection>
      <ParkingLotDescription>
        מרחק בק"מ אשר ממנו מתאפשרת הזמנת חניה בחניון
      </ParkingLotDescription>
      <ParkingLotSection>
        <ReservationTimeSection>
          <ReservationTimeLabel>
            <RequiredMark>*</RequiredMark>זמן הזמנה
          </ReservationTimeLabel>
          <ReservationTimeDescription>
            הזמן שבו האפליקציה תאפשר למשתמשים להזמין חניה
          </ReservationTimeDescription>
          <ReservationTimeOption>
            <ReservationTimeIcon
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d33ab9cfdd174e08dd6b6d78d773a02878efda686f179d8c500f8fbb2d159d73?apiKey=232681902e8f4be7961abae526196996&"
              alt="Same day reservation icon"
            />
            <ReservationTimeLabel>באותו היום</ReservationTimeLabel>
          </ReservationTimeOption>
        </ReservationTimeSection>
        <ConfirmationTimeLabel>
          <RequiredMark>*</RequiredMark>זמן שליחת הודעה יומית לאישור לקוח
        </ConfirmationTimeLabel>
        {parkingLotData.map((data) => (
          <ConfirmationTimeOption key={data.id}>
            <ConfirmationTimeIcon src={data.icon} alt={`${data.label} icon`} />
            <ConfirmationTimeLabel>{data.label}</ConfirmationTimeLabel>
          </ConfirmationTimeOption>
        ))}
        <AllocationMethodSection>
          <AllocationMethodLabel>
            <RequiredMark>*</RequiredMark>שיטת הקצאה
          </AllocationMethodLabel>
          <AllocationMethodDescription>
            שיטת ההקצאה קובעת מי יהיה אחראי להזמנת החניה. במצב אוטומטי, המערכת
            מקצה חניה בעצמה. בהקצאה ידנית הלקוח בוחר בעצמו.
          </AllocationMethodDescription>
          <AllocationMethodOptions>
            <div className="form-check form-switch">
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                אוטומטי
              </label>

              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
            </div>

            <div className="form-check form-switch">
              <label className="form-check-label" htmlFor="ידני">
                ידני
              </label>

              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="ידני"
              />
            </div>
          </AllocationMethodOptions>
        </AllocationMethodSection>
      </ParkingLotSection>
    </ParkingLotContainer>
  );
}
const ParkingLotContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  min-width: 250px;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;
const ParkingLotTitle = styled.h2`
  color: #000;
  text-align: right;
  align-self: end;
  font: 600 16px Rubik, sans-serif;
`;
const ParkingLotSection = styled.section`
  display: flex;
  margin-top: 16px;
  padding-left: 20px;
  flex-direction: column;
  font-size: 15px;
  color: #000;
  font-weight: 400;
  text-align: right;
`;
const ParkingLotLabel = styled.label`
  font-family: Rubik, sans-serif;
  align-self: end;
`;
const RequiredMark = styled.span`
  color: rgba(229, 32, 85, 1);
`;
const ParkingLotInput = styled.input`
  border-radius: 5px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1);
  background-color: #f5f5f5;
  margin-top: 5px;
  height: 42px;
`;
const ParkingLotDescription = styled.p`
  color: #494e50;
  text-align: right;
  margin-top: 5px;
  font: 400 12px Rubik, sans-serif;
`;
const ReservationTimeSection = styled.section`
  justify-content: center;
  border-color: rgba(201, 204, 212, 1);
  border-style: solid;
  border-top-width: 1px;
  display: flex;
  flex-direction: column;
  font-size: 15px;
  color: #000;
  font-weight: 400;
  text-align: right;
  padding: 6px 0;
`;
const ReservationTimeLabel = styled.label`
  font-family: Rubik, sans-serif;
  align-self: end;
`;
const ReservationTimeDescription = styled.p`
  color: #494e50;
  margin-top: 5px;
  font: 12px Rubik, sans-serif;
`;
const ReservationTimeOption = styled.div`
  border-radius: 5px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1);
  background-color: #f5f5f5;
  display: flex;
  margin-top: 5px;
  gap: 20px;
  justify-content: space-between;
  padding: 12px 11px;
`;
const ReservationTimeIcon = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 16px;
  align-self: start;
`;
const ConfirmationTimeLabel = styled.label`
  color: #000;
  text-align: right;
  margin-top: 16px;
  font: 400 15px Rubik, sans-serif;
`;
const ConfirmationTimeOption = styled.div`
  border-radius: 5px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1);
  background-color: #f5f5f5;
  display: flex;
  margin-top: 16px;
  gap: 13px;
  font-size: 15px;
  color: #000;
  font-weight: 400;
  text-align: right;
  padding: 12px 11px;
`;
const ConfirmationTimeIcon = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 16px;
  align-self: start;
`;
const AllocationMethodSection = styled.section`
  justify-content: center;
  border-color: rgba(201, 204, 212, 1);
  border-style: solid;
  border-top-width: 1px;
  display: flex;
  margin-top: 16px;
  flex-direction: column;
  padding: 4px 0;
`;
const AllocationMethodLabel = styled.label`
  color: #000;
  text-align: right;
  align-self: end;
  font: 400 15px Rubik, sans-serif;
`;
const AllocationMethodDescription = styled.p`
  color: #494e50;
  text-align: right;
  margin-top: 5px;
  font: 400 12px Rubik, sans-serif;
`;
const AllocationMethodOptions = styled.div`
  justify-content: end;
  display: flex;
  margin-top: 5px;
  gap: 15px;
`;
const AllocationMethodOption = styled.div`
  justify-content: center;
  display: flex;
  gap: 9px;
`;
const AllocationMethodToggle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const AllocationMethodToggleInner = styled.div`
  border-radius: 100px;
  border-color: rgba(149, 149, 149, 1);
  border-style: solid;
  border-width: 2px;
  background-color: #959595;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const AllocationMethodToggleButton = styled.div`
  border-radius: 100px;
  background-color: #d8dce4;
  height: 28px;
`;

export default ParkingLotManagementColumn2;
