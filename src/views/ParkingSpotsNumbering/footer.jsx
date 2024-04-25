import React from "react";
import styled from "styled-components";

const ButtonWithIcon = ({ text, icon, backgroundColor }) => (
  <ButtonWrapper backgroundColor={backgroundColor}>
    <ButtonContent>
      <ButtonText>{text}</ButtonText>
      <ButtonIcon src={icon} alt={`${text} icon`} />
    </ButtonContent>
  </ButtonWrapper>
);

const Button = ({ text, backgroundColor }) => (
  <ButtonWrapper backgroundColor={backgroundColor}>
    {text}
  </ButtonWrapper>
);

const Footer = () => {
  const buttons = [
    {
      text: "שמירה והפעלת חניון",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a8aec95147426cb0999fc833cdbaca1b373f8c9252b3aea70d88a0f35c965edc?apiKey=232681902e8f4be7961abae526196996&",
      backgroundColor: "var(--darker-aqua-015-b-5-e, #015b5e)",
    },
    {
      text: "שמירה ויציאה",
      backgroundColor: "#3975bb",
    },
    {
      text: "חזרה",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e6f5f45044ba525c72aab033be55040b32ca14af26e4bb97c17538a5530a7567?apiKey=232681902e8f4be7961abae526196996&",
      backgroundColor: "#3975bb",
    },
  ];

  return (
    <Container>
      {buttons.map((button, index) => (
        <React.Fragment key={index}>
          {button.icon ? (
            <ButtonWithIcon {...button} />
          ) : (
            <Button {...button} />
          )}
        </React.Fragment>
      ))}
    </Container>
  );
};

const Container = styled.div`
  border-radius: 6px 6px 0px 0px;
  background-color: var(--light-light-gray-f-5-f-5-f-5, #f5f5f5);
  display: flex;
  margin-top: 55px;
  gap: 20px;
  font-size: 22px;
  color: #fff;
  font-weight: 500;
  text-align: center;
  padding: 12px 40px;

  @media (max-width: 991px) {
    flex-wrap: wrap;
    margin-top: 40px;
    padding: 0 20px;
  }
`;

const ButtonWrapper = styled.div`
  justify-content: center;
  border-radius: 10px;
  border: 1px solid rgba(78, 185, 177, 1);
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  flex-direction: column;
  padding: 11px 31px;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const ButtonContent = styled.div`
  justify-content: center;
  align-item:center;
  display: flex;
  gap: 6px;
`;

const ButtonText = styled.span`
  font-family: Rubik, sans-serif;
`;

const ButtonIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  align-self: start;
`;

export default Footer;