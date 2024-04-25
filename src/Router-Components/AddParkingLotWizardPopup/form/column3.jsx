import * as React from "react";
import styled from "styled-components";

const parkingTypes = [
  {
    name: "רגילות",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/85899ecb85328bea75f3b82d6ddb02cc7c0d119591b60a9aaa93467522a9ab52?apiKey=232681902e8f4be7961abae526196996&",
    checkIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8a8dc22841be24c91a8304e06aeba27a0a926cac3068963308b7c75d6956bc81?apiKey=232681902e8f4be7961abae526196996&",
  },
  {
    name: "חשמל",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/85502ada4766e241655a1a93d57abd5bb202ba8fe798ef878b6f39fe15168bdc?apiKey=232681902e8f4be7961abae526196996&",
    checkIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8a8dc22841be24c91a8304e06aeba27a0a926cac3068963308b7c75d6956bc81?apiKey=232681902e8f4be7961abae526196996&",
  },
  {
    name: "נגישות + חשמל",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5e9c2f69c7cbe740d46cf065d7ff7d424cdc3300c2e60a302d05b86ffa63346c?apiKey=232681902e8f4be7961abae526196996&",
    checkIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8a8dc22841be24c91a8304e06aeba27a0a926cac3068963308b7c75d6956bc81?apiKey=232681902e8f4be7961abae526196996&",
  },
  {
    name: "נגישות",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef0cc6a1fcb3298353763a8172ca5c07d3f1795d410f88be5bbbee8ca723d919?apiKey=232681902e8f4be7961abae526196996&",
    checkIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8a8dc22841be24c91a8304e06aeba27a0a926cac3068963308b7c75d6956bc81?apiKey=232681902e8f4be7961abae526196996&",
  },
  {
    name: "אחרות",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e0fe1b175299283f2f9e1956c092c60c8210496226cc518d5147ba7365c2fb48?apiKey=232681902e8f4be7961abae526196996&",
    checkIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8a8dc22841be24c91a8304e06aeba27a0a926cac3068963308b7c75d6956bc81?apiKey=232681902e8f4be7961abae526196996&",
  },
];

const parkingFeatures = [
  {
    name: "חניה בעלי הרשאה",
    color: "#fff",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8a8dc22841be24c91a8304e06aeba27a0a926cac3068963308b7c75d6956bc81?apiKey=232681902e8f4be7961abae526196996&",
  },
  {
    name: "נעולה",
    color: "#494e50",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8a8dc22841be24c91a8304e06aeba27a0a926cac3068963308b7c75d6956bc81?apiKey=232681902e8f4be7961abae526196996&",
  },
  {
    name: "תחזוקה",
    color: "#00745e",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8a8dc22841be24c91a8304e06aeba27a0a926cac3068963308b7c75d6956bc81?apiKey=232681902e8f4be7961abae526196996&",
  },
  {
    name: "אורחים",
    color: "#3975bb",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8a8dc22841be24c91a8304e06aeba27a0a926cac3068963308b7c75d6956bc81?apiKey=232681902e8f4be7961abae526196996&",
  },
  {
    name: "VIP",
    color: "#a863ff",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8a8dc22841be24c91a8304e06aeba27a0a926cac3068963308b7c75d6956bc81?apiKey=232681902e8f4be7961abae526196996&",
  },
  {
    name: "חניה כפולה א' וב'",
    color: "#ff8e00",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8a8dc22841be24c91a8304e06aeba27a0a926cac3068963308b7c75d6956bc81?apiKey=232681902e8f4be7961abae526196996&",
  },
];

function ParkingSettingsColumn3() {
  return (
    <Container>
      <Header>הגדרות חניה</Header>
      <ParkingTypesSection>
        <SectionTitle>סוגי חניה</SectionTitle>
        <SectionDescription>
          הגדרת סוגי החניות אשר יהיו בחניון. <br /> יש לסמן את סוגי החניות
          הרצויות.
        </SectionDescription>
        {parkingTypes.map((type, index) => (
          <ParkingTypeItem key={index}>
            <ParkingTypeName>{type.name}</ParkingTypeName>
            <ParkingTypeIcon src={type.icon} />
            <ParkingTypeCheckIcon src={type.checkIcon} />
          </ParkingTypeItem>
        ))}
      </ParkingTypesSection>
      <ParkingFeaturesSection>
        <SectionTitle>מאפיני חניה</SectionTitle>
        <SectionDescription>
          מאפיני החניה יסומנו בצבע בטבלאות החניות, יש לסמן את המאפיינים הרצויים.
          ניתן להוסיף עוד שני מאפיינים
        </SectionDescription>
        {parkingFeatures.map((feature, index) => (
          <ParkingFeatureItem key={index}>
            <ParkingFeatureName>{feature.name}</ParkingFeatureName>
            <ParkingFeatureColor color={feature.color} />
            <ParkingFeatureIcon src={feature.icon} />
          </ParkingFeatureItem>
        ))}
        <AddFeatureItem>
          <AddFeatureName>הוספת שם מאפיין</AddFeatureName>
          <AddFeatureColor />
          <AddFeatureIcon />
        </AddFeatureItem>
        <Separator />
      </ParkingFeaturesSection>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  font-size: 15px;
  color: #000;
  font-weight: 400;
  text-align: right;
  padding: 2px 20px;
  min-width: 280px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Header = styled.h2`
  align-self: end;
  font: 600 16px Rubik, sans-serif;
`;

const SectionTitle = styled.h3`
  font-family: Rubik, sans-serif;
  margin-top: 16px;
`;

const SectionDescription = styled.p`
  color: #494e50;
  margin-top: 5px;
  font: 12px Rubik, sans-serif;
`;

const ParkingTypesSection = styled.section``;

const ParkingTypeItem = styled.div`
  justify-content: end;
  display: flex;
  margin-top: 5px;
  padding-left: 80px;
  gap: 6px;
  white-space: nowrap;
  @media (max-width: 991px) {
    padding-left: 20px;
    white-space: initial;
  }
`;

const ParkingTypeName = styled.span`
  font-family: Rubik, sans-serif;
  margin: auto 0;
`;

const ParkingTypeIcon = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 24px;
`;

const ParkingTypeCheckIcon = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 20px;
  fill: #369b9e;
  margin: auto 0;
`;

const ParkingFeaturesSection = styled.section``;

const ParkingFeatureItem = styled.div`
  justify-content: end;
  background-color: #e3e3e3;
  display: flex;
  margin-top: 4px;
  gap: 6px;
  white-space: nowrap;
  padding: 6px 10px 6px 80px;
  @media (max-width: 991px) {
    padding-left: 20px;
    white-space: initial;
  }
`;

const ParkingFeatureName = styled.span`
  font-family: Rubik, sans-serif;
`;

const ParkingFeatureColor = styled.div`
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1));
  background-color: ${(props) => props.color};
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: auto 0;
`;

const ParkingFeatureIcon = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 20px;
  fill: #369b9e;
`;

const AddFeatureItem = styled.div`
  justify-content: end;
  background-color: #f5f5f5;
  display: flex;
  margin-top: 4px;
  gap: 6px;
  color: var(--gray-959595, #959595);
  padding: 6px 10px 6px 80px;
  @media (max-width: 991px) {
    padding-left: 20px;
  }
`;

const AddFeatureName = styled.span`
  font-family: Rubik, sans-serif;
`;

const AddFeatureColor = styled.div`
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1));
  background-color: var(--e-52055, #e52055);
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: auto 0;
`;

const AddFeatureIcon = styled.div`
  stroke-width: 2px;
  stroke: #369b9e;
  border-color: rgba(54, 155, 158, 1);
  border-style: solid;
  border-width: 2px;
  width: 20px;
  height: 20px;
`;

const Separator = styled.div`
  background-color: #f5f5f5;
  margin-top: 4px;
  height: 6px;
`;

export default ParkingSettingsColumn3;