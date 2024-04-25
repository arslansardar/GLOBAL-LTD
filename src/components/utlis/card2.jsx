import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image1 from "../svgs/card-1.svg";
import MessageIcon from "../icons/Message.png";
import DangerIcon from "../icons/Danger.png";
import TextMessageIcon from "../icons/tex-message.png";
import Progress from "../utlis/Semicircle";

const data1 = [
  {
    messages: "2 הודעות חדשות",
    icon: MessageIcon,
    errors: "2 1 תקלה מדווחת",
    errorIcon: DangerIcon,
    requests: "1 בקשה חדשה",
    requestIcon: TextMessageIcon,
    progress: 90,
  },
  {
    messages: "2 הודעות חדשות",
    icon: MessageIcon,
    errors: "2 1 תקלה מדווחת",
    errorIcon: DangerIcon,
    requests: "1 בקשה חדשה",
    requestIcon: TextMessageIcon,
    progress: 90,
  },
  {
    messages: "2 הודעות חדשות",
    icon: MessageIcon,
    errors: "2 1 תקלה מדווחת",
    errorIcon: DangerIcon,
    requests: "1 בקשה חדשה",
    requestIcon: TextMessageIcon,
    progress: 90,
  },
];

const data2 = [
  {
    messages: "2 הודעות חדשות",
    icon: MessageIcon,
    errors: "2 1 תקלה מדווחת",
    errorIcon: DangerIcon,
    requests: "1 בקשה חדשה",
    requestIcon: TextMessageIcon,
    progress: 90,
  },
  {
    messages: "2 הודעות חדשות",
    icon: MessageIcon,
    errors: "2 1 תקלה מדווחת",
    errorIcon: DangerIcon,
    requests: "1 בקשה חדשה",
    requestIcon: TextMessageIcon,
    progress: 90,
  },
];

function CustomCards() {
  return (
    <Container className="mt-2">
      <Row className="d-flex justify-content-center align-items-center">
        {data1.map((item, index) => (
          <Col key={index}>
            <Card style={{ width: "25rem" }}>
              <Card.Img variant="top" src={Image1} className="p-3" />
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <Row className="align-items-center" noGutters={true}>
                      <Col>
                        <span className="text-right">{item.messages}</span>
                      </Col>
                      <Col>
                        <img
                          src={item.icon}
                          alt="icon"
                          style={{
                            width: "18px",
                          }}
                        />
                      </Col>
                    </Row>

                    <Row className="align-items-center">
                      <Col>
                        <span className="text-right">{item.errors}</span>
                      </Col>
                      <Col>
                        <img
                          src={item.errorIcon}
                          alt="error-icon"
                          style={{
                            width: "18px",
                          }}
                        />
                      </Col>
                    </Row>
                    <Row className="align-items-center">
                      <Col>
                        <span className="text-right">{item.requests}</span>
                      </Col>
                      <Col>
                        <img
                          src={item.requestIcon}
                          alt="request-icon"
                          style={{
                            width: "18px",
                          }}
                        />
                      </Col>
                    </Row>
                  </Col>

                  <Col md={6}>
                    <Progress percentage={item.progress} />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="d-flex justify-content-center align-items-center mt-2">
        {data1.map((item, index) => (
          <Col key={index}>
            {index === 0 ? (
              <Card style={{ width: "25rem", visibility: "hidden" }} />
            ) : (
              <Card style={{ width: "25rem" }}>
                <Card.Img variant="top" src={Image1} className="p-3" />
                <Card.Body>
                  <Row>
                    <Col md={6}>
                      <Row className="align-items-center" noGutters={true}>
                        <Col>
                          <span className="text-right">{item.messages}</span>
                        </Col>
                        <Col>
                          <img
                            src={item.icon}
                            alt="icon"
                            style={{
                              width: "18px",
                            }}
                          />
                        </Col>
                      </Row>

                      <Row className="align-items-center">
                        <Col>
                          <span className="text-right">{item.errors}</span>
                        </Col>
                        <Col>
                          <img
                            src={item.errorIcon}
                            alt="error-icon"
                            style={{
                              width: "18px",
                            }}
                          />
                        </Col>
                      </Row>
                      <Row className="align-items-center">
                        <Col>
                          <span className="text-right">{item.requests}</span>
                        </Col>
                        <Col>
                          <img
                            src={item.requestIcon}
                            alt="request-icon"
                            style={{
                              width: "18px",
                            }}
                          />
                        </Col>
                      </Row>
                    </Col>

                    <Col md={6}>
                      <Progress percentage={item.progress} />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            )}
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CustomCards;
