import * as React from "react";
import styled from "styled-components";

const data = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bb8a1e94db0cb972147ab06f8d998e4e39c9ea410450ca6b22fcca72021b4565?apiKey=232681902e8f4be7961abae526196996&",
    label: "בעלי הרשאה",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bb8a1e94db0cb972147ab06f8d998e4e39c9ea410450ca6b22fcca72021b4565?apiKey=232681902e8f4be7961abae526196996&",
    label: "תחזוקה",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bb8a1e94db0cb972147ab06f8d998e4e39c9ea410450ca6b22fcca72021b4565?apiKey=232681902e8f4be7961abae526196996&",
    label: "אורחים",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bb8a1e94db0cb972147ab06f8d998e4e39c9ea410450ca6b22fcca72021b4565?apiKey=232681902e8f4be7961abae526196996&",
    label: "בעלי הרשאה",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bb8a1e94db0cb972147ab06f8d998e4e39c9ea410450ca6b22fcca72021b4565?apiKey=232681902e8f4be7961abae526196996&",
    label: "בעלי הרשאה",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bb8a1e94db0cb972147ab06f8d998e4e39c9ea410450ca6b22fcca72021b4565?apiKey=232681902e8f4be7961abae526196996&",
    label: "בעלי הרשאה",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bb8a1e94db0cb972147ab06f8d998e4e39c9ea410450ca6b22fcca72021b4565?apiKey=232681902e8f4be7961abae526196996&",
    label: "בעלי הרשאה",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bb8a1e94db0cb972147ab06f8d998e4e39c9ea410450ca6b22fcca72021b4565?apiKey=232681902e8f4be7961abae526196996&",
    label: "בעלי הרשאה",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bb8a1e94db0cb972147ab06f8d998e4e39c9ea410450ca6b22fcca72021b4565?apiKey=232681902e8f4be7961abae526196996&",
    label: "בעלי הרשאה",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bb8a1e94db0cb972147ab06f8d998e4e39c9ea410450ca6b22fcca72021b4565?apiKey=232681902e8f4be7961abae526196996&",
    label: "בעלי הרשאה",
  },
];

function Column1() {
  return (
    <Container>
      <Content>
        {data.map((item, index) => (
          <ListItem key={index}>
            <Icon src={item.icon} alt="" />
            <Label>{item.label}</Label>
          </ListItem>
        ))}
      </Content>

      <Sidebar>
        <DateList>
          <NumberItem bgColor="#fff" color="#000">
            20
          </NumberItem>
          <NumberItem bgColor="#fff" color="#000">
            21
          </NumberItem>
          <NumberItem bgColor="#fff" color="#000">
            22
          </NumberItem>
          <NumberItem bgColor="#fff" color="#000">
            23
          </NumberItem>
          <NumberItem bgColor="#fff" color="#000">
            24
          </NumberItem>
          <NumberItem bgColor="#fff" color="#000">
            25
          </NumberItem>
          <NumberItem bgColor="#fff" color="#000">
            26
          </NumberItem>
          <NumberItem bgColor="#fff" color="#000">
            27
          </NumberItem>
          <NumberItem bgColor="#fff" color="#000">
            28
          </NumberItem>
          <NumberItem bgColor="#fff" color="#000">
            29
          </NumberItem>
        </DateList>

        <NumberList>
          <NumberItem>1</NumberItem>
          <NumberItem>2</NumberItem>
          <NumberItem>3</NumberItem>
          <NumberItem>4</NumberItem>
          <NumberItem>5</NumberItem>
          <NumberItem>6</NumberItem>
          <NumberItem>7</NumberItem>
          <NumberItem>8</NumberItem>
          <NumberItem>9</NumberItem>
          <NumberItem>10</NumberItem>
        </NumberList>
      </Sidebar>
    </Container>
  );
}

const Container = styled.div`
  border-radius: 0 0 6px 6px;
  background-color: #e3e3e3;
  display: flex;
  gap: 11px;
  padding: 31px 22px;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  color: #000;
`;

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
  background-color: #f5f5f5;
  margin-top: 8px;

  &:first-child {
    margin-top: 0;
  }

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const NumberItem = styled.div`
  background: ${(props) => props.bgColor || "transparent"};
  color: ${(props) => props.color || "inherit"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 5px;
  margin-top: 8px;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
  object-fit: contain;
`;

const Label = styled.div`
  font-family: Rubik, sans-serif;
`;

const Sidebar = styled.div`
  display: flex;
  color: #000;
`;

const DateList = styled.div`
  font-family: Rubik, sans-serif;
  color: #fff;
  text-align: center;
  flex: 1;
`;

const WhiteText = styled.span`
  color: rgba(255, 255, 255, 1);
`;

const NumberList = styled.div`
  color: #494e50;
  font-family: Rubik, sans-serif;
  flex:1
`;

export default Column1;
