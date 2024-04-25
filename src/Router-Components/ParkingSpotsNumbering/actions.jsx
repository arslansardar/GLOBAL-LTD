import * as React from "react";
import styled from "styled-components";

const parkingSpotData = [
  {
    count: 10,
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/641f0164bc5b720f95e7218db329d124ed803a9fd316b29b8289d46aba05d02e?apiKey=232681902e8f4be7961abae526196996&",
    label: "אחרות",
  },
  {
    count: 60,
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3e8fbc729ec260f2ac7fe3dd9edc54523eb4371776929ee2f37c345a129c1683?apiKey=232681902e8f4be7961abae526196996&",
    label: "רגילות",
  },
  {
    count: 4,
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2358c5307e1e8e0b799c746c0186e6a37e3d9c4ee76bb96009d5c6974080b647?apiKey=232681902e8f4be7961abae526196996&",
    label: "חשמל",
  },
  {
    count: 8,
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b4b52a81e6aa978fe7fc281549eefe94053633189924262f7a11704800683ca5?apiKey=232681902e8f4be7961abae526196996&",
    label: "נגישות",
  },
  {
    count: 10,
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/53b47e463c7e0186c0763e35510a9f19e840569937c5ebb295ec3967b02e1c55?apiKey=232681902e8f4be7961abae526196996&",
    label: "נגישות + חשמל",
  },
];

export default function Actions() {
  return (
    <ParkingSpotsContainer>
      {parkingSpotData.map((spot, index) => (
        <ParkingSpotItem key={index}>
          <ParkingSpotCount>
            <CountNumber>{spot.count}</CountNumber>
            <ParkingSpotIcon src={spot.icon} alt={`${spot.label} icon`} />
          </ParkingSpotCount>
          <ParkingSpotLabel>{spot.label}</ParkingSpotLabel>
        </ParkingSpotItem>
      ))}
    </ParkingSpotsContainer>
  );
}

const ParkingSpotsContainer = styled.div`
  display: flex;
  margin-top: 10px;
  gap: 13px;
  color: #000;
  font-weight: 400;
  text-align: right;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    padding-right: 20px;
  }
`;

const ParkingSpotItem = styled.div`
  display: flex;
  gap: 8px;
  padding: 9px 16px 9px 57px;
  border-radius: 6px 6px 0 0;
  background-color: #ebf1ff;
  justify-content: end;
  white-space: nowrap;
  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

const ParkingSpotCount = styled.div`
  display: flex;
  gap: 7px;
  font-size: 15px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const CountNumber = styled.div`
  padding: 10px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
  font-family: Rubik, sans-serif;
  justify-content: center;
  align-items: start;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const ParkingSpotIcon = styled.img`
  width: 32px;
  margin: auto 0;
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
`;

const ParkingSpotLabel = styled.div`
  margin: auto 0;
  font: 16px Rubik, sans-serif;
`;
