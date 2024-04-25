import * as React from "react";
import styled from "styled-components";

const data = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/45dba5e4c57403de33ff16fd9f0405542d337da8c66f11ae59fd586639d3368d?apiKey=232681902e8f4be7961abae526196996&",
    text: "חזרה",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e6f5f45044ba525c72aab033be55040b32ca14af26e4bb97c17538a5530a7567?apiKey=232681902e8f4be7961abae526196996&",
  },
];

function Footer() {
  return (
    <Container>
      {data.map((item, index) => (
        <Card key={index}>
          <CardImage src={item.image} alt="Card Image" />
          <CardContent>
            <CardText>
              <Text>{item.text}</Text>
              <Icon src={item.icon} alt="Card Icon" />
            </CardText>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}

const Container = styled.div`
  align-items: start;
  border-radius: 6px 6px 0 0;
  background-color: var(--light-light-gray-f-5-f-5-f-5, #f5f5f5);
  display: flex;
  margin-top: 32px;
  width: 100%;
  flex-direction: column;
  font-size: 22px;
  color: #fff;
  font-weight: 500;
  text-align: center;
  justify-content: center;
  padding: 12px 40px;

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const Card = styled.div`
  display: flex;
  gap: 20px;
  justify-content: end;
`;

const CardImage = styled.img`
  aspect-ratio: 2.7;
  object-fit: cover;
  width: 130px;
  border-radius: 10px;
  border: 1px solid rgba(78, 185, 177, 1);
  max-width: 100%;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  background-color: #a8abb0;
  padding: 11px 28px;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const CardText = styled.div`
  display: flex;
  gap: 2px;
  justify-content: center;
  align-items: center;
`;

const Text = styled.span`
  font-family: Rubik, sans-serif;
`;

const Icon = styled.img`
  width: 24px;
  aspect-ratio: 1;
  object-fit: cover;
`;

export default Footer;
