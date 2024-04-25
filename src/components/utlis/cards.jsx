import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../component.css";
import Image1 from "../svgs/card-1.svg";
import MessageIcon from "../svgs/messageIcon.svg";
import Danger from "../svgs/danger.svg";
import Message from "../svgs/textMessage.svg";
import Progress from "../utlis/Semicircle";

const data1 = [
    {
      messages: "2 הודעות חדשות",
      icon: MessageIcon,
      errors: "2 1 תקלה מדווחת",
      errorIcon: Danger,
      requests: "1 בקשה חדשה",
      requestIcon: Message,
      progress: 90,
    },
    {
      messages: "2 הודעות חדשות",
      icon: MessageIcon,
      errors: "2 1 תקלה מדווחת",
      errorIcon: Danger,
      requests: "1 בקשה חדשה",
      requestIcon: Message,
      progress: 90,
    },
    {
      messages: "2 הודעות חדשות",
      icon: MessageIcon,
      errors: "2 1 תקלה מדווחת",
      errorIcon: Danger,
      requests: "1 בקשה חדשה",
      requestIcon: Message,
      progress: 90,
    },
  ];
  const data2 = [
    {
      messages: "2 הודעות חדשות",
      icon: MessageIcon,
      errors: "2 1 תקלה מדווחת",
      errorIcon: Danger,
      requests: "1 בקשה חדשה",
      requestIcon: Message,
      progress: 90,
    },
    {
      messages: "2 הודעות חדשות",
      icon: MessageIcon,
      errors: "2 1 תקלה מדווחת",
      errorIcon: Danger,
      requests: "1 בקשה חדשה",
      requestIcon: Message,
      progress: 90,
    },
  ];
  
const Cards = () => {
  return (
    <Container className="mt-2">
      <Row>
        {data1.map((item, index) => (
          <Col key={index} className="card-container">
            <div className="d-flex justify-content-center align-items-center">
              <img
                src={Image1}
                alt="Decorative card"
                className="img-container"
              />
            </div>
            <Row>
              <Col md={6}>
                <Row className="mt-2">
                  <Col className="d-flex align-items-center justify-content-end">
                    <span className="text-right">{item.messages}</span>
                    <img
                      src={item.icon}
                      alt="icon"
                      style={{
                        height: "24px",
                        width: "17px",
                        marginLeft: "5px",
                      }}
                    />
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col className="d-flex align-items-center justify-content-end">
                    <span className="text-right">{item.errors}</span>
                    <img
                      src={item.errorIcon}
                      alt="icon"
                      style={{
                        height: "24px",
                        width: "17px",
                        marginLeft: "5px",
                      }}
                    />
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col className="d-flex align-items-center justify-content-end">
                    <span className="text-right">{item.requests}</span>
                    <img
                      src={item.requestIcon}
                      alt="icon"
                      style={{
                        height: "24px",
                        width: "17px",
                        marginLeft: "5px",
                      }}
                    />
                  </Col>
                </Row>
              </Col>
              <Col md={6}>
                <Progress percentage={item.progress} />
              </Col>
            </Row>
          </Col>
        ))}
      </Row>

      <Row
        className="outer-row mt-2"
   
      >
        {data2.map((item, index) => (
          <Col key={index} className="card-container" xs={12} sm={6} lg={4}>
            <div className="d-flex justify-content-center align-items-center">
              <img
                src={Image1}
                alt="Decorative card"
                className="img-container"
              />
            </div>
            <Row className="justify-content-end">
              <Col>
                <Row className="mt-2">
                  <Col className="d-flex align-items-center justify-content-end">
                    <span className="text-right">{item.messages}</span>
                    <img
                      src={item.icon}
                      alt="icon"
                      style={{
                        height: "24px",
                        width: "17px",
                        marginLeft: "5px",
                      }}
                    />
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col className="d-flex align-items-center justify-content-end">
                    <span className="text-right">{item.errors}</span>
                    <img
                      src={item.errorIcon}
                      alt="icon"
                      style={{
                        height: "24px",
                        width: "17px",
                        marginLeft: "5px",
                      }}
                    />
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col className="d-flex align-items-center justify-content-end">
                    <span className="text-right">{item.requests}</span>
                    <img
                      src={item.requestIcon}
                      alt="icon"
                      style={{
                        height: "24px",
                        width: "17px",
                        marginLeft: "5px",
                      }}
                    />
                  </Col>
                </Row>
              </Col>
              <Col md={6}>
                <Progress percentage={item.progress} />
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Cards;
