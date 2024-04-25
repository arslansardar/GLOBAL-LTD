import React from "react";
import NavbarPage2 from "../components/NavbarPage2/NavbarPage2";
import { Row, Col, Container } from "react-bootstrap";
import { ReactComponent as PlugBlack } from "../components/svgs/PlugBlack.svg";
import { ReactComponent as PlugWhite } from "../components/svgs/PlugWhite.svg";
import Background from "../components/svgs/background.svg";

const PlugComponentBlack = () => {
  return (
    <PlugBlack
      style={{ fill: "#FF7D7D" }}
      className="img-fluid rounded-top bottom-left mb-1 mx-1"
    />
  );
};

const PlugComponentWhite = () => {
  return (
    <PlugWhite
      style={{ fill: "#2AF049" }}
      className="img-fluid rounded-top bottom-left mb-1 mx-1"
    />
  );
};

const Page2 = () => {
  const style1 = {
    backgroundColor: "#FF7D7D",
    border: "none",
    color: "black",
  };

  const style2 = {
    backgroundColor: "none",
    border: "4px solid #2AF049",
    color: "white",
  };

  const style3 = {
    backgroundColor: "none",
    border: "4px solid #FF7D7D",
    color: "white",
    backgroundImage: `url(${Background})`,
  };

  const cards = [
    { number: 1, style: style1, imageComponent: PlugComponentBlack },
    { number: 2, style: style1, imageComponent: PlugComponentBlack },
    { number: 3, style: style2, imageComponent: PlugComponentWhite },
    { number: 4, style: style2, imageComponent: PlugComponentWhite },
    { number: 5, style: style3, imageComponent: PlugComponentWhite },
  ];
  const card2 = [
    { number: 6, style: style3, imageComponent: PlugComponentWhite },
    { number: 7, style: style1, imageComponent: PlugComponentBlack },
    { number: 8, style: style1, imageComponent: PlugComponentBlack },
    { number: 9, style: style1, imageComponent: PlugComponentBlack },
    { number: 10, style: style2, imageComponent: PlugComponentWhite },
  ];
  const cards3 = [
    { number: 11, style: style2, imageComponent: PlugComponentWhite },
    { number: 12, style: style3 },
    { number: 13, style: style3 },
    { number: 14, style: style1 },
    { number: 15, style: style1 },
  ];
  const cards4 = [
    { number: 16, style: style3 },
    { number: 17, style: style1 },
    { number: 18, style: style2 },
    { number: 19, style: style2 },
    { number: 20, style: style1 },
  ];
  const cards5 = [{ number: 21, style: style3 }];

  return (
    <div>
      <NavbarPage2 />
      <Row className="main-row">
        <Col className="bordered-col">
          <Container>
            <div className="page-content mt-3">4 אזור</div>
            <div className="page-content mt-2 mb-5">פנוי: 4 חשמל + 1 נגישה</div>
            <Row className="d-flex justify-content-center mb-3">
              {cards.map((card, index) => (
                <div key={index} className="col-box" style={card.style}>
                  {card.imageComponent && <card.imageComponent />}

                  <div
                    className="centered-number"
                    style={{ color: card.style.color }}
                  >
                    {card.number}
                  </div>
                </div>
              ))}
            </Row>

            <Row className="d-flex justify-content-center mb-3">
              {card2.map((card, index) => (
                <div key={index} className="col-box" style={card.style}>
                  {card.imageComponent && <card.imageComponent />}

                  <div
                    className="centered-number"
                    style={{ color: card.style.color }}
                  >
                    {card.number}
                  </div>
                </div>
              ))}
            </Row>

            <Row className="d-flex justify-content-center mb-3">
              {cards3.map((card, index) => (
                <div key={index} className="col-box" style={card.style}>
                  {card.imageComponent && <card.imageComponent />}

                  <div
                    className="centered-number"
                    style={{ color: card.style.color }}
                  >
                    {card.number}
                  </div>
                </div>
              ))}
            </Row>

            <Row className="d-flex justify-content-center mb-3">
              {cards4.map((card, index) => (
                <div key={index} className="col-box" style={card.style}>
                  {card.imageComponent && <card.imageComponent />}

                  <div
                    className="centered-number"
                    style={{ color: card.style.color }}
                  >
                    {card.number}
                  </div>
                </div>
              ))}
            </Row>

            <Row className="d-flex mb-3 " style={{ marginLeft: "0px" }}>
              {cards5.map((card, index) => (
                <div key={index} className="col-box" style={card.style}>
                  {card.imageComponent && <card.imageComponent />}

                  <div
                    className="centered-number"
                    style={{ color: card.style.color }}
                  >
                    {card.number}
                  </div>
                </div>
              ))}
            </Row>
          </Container>
        </Col>
        <Col className="bordered-col">
          {" "}
          <Container>
            <div className="page-content mt-3">3 אזור</div>
            <div className="page-content mt-2 mb-5">פנוי: 4 חשמל + 1 נגישה</div>
            <Row className="d-flex justify-content-center mb-3">
              {cards.map((card, index) => (
                <div key={index} className="col-box" style={card.style}>
                  {card.imageComponent && <card.imageComponent />}

                  <div
                    className="centered-number"
                    style={{ color: card.style.color }}
                  >
                    {card.number}
                  </div>
                </div>
              ))}
            </Row>

            <Row className="d-flex justify-content-center mb-3">
              {card2.map((card, index) => (
                <div key={index} className="col-box" style={card.style}>
                  {card.imageComponent && <card.imageComponent />}

                  <div
                    className="centered-number"
                    style={{ color: card.style.color }}
                  >
                    {card.number}
                  </div>
                </div>
              ))}
            </Row>

            <Row className="d-flex justify-content-center mb-3">
              {cards3.map((card, index) => (
                <div key={index} className="col-box" style={card.style}>
                  {card.imageComponent && <card.imageComponent />}

                  <div
                    className="centered-number"
                    style={{ color: card.style.color }}
                  >
                    {card.number}
                  </div>
                </div>
              ))}
            </Row>

            <Row className="d-flex justify-content-center mb-3">
              {cards4.map((card, index) => (
                <div key={index} className="col-box" style={card.style}>
                  {card.imageComponent && <card.imageComponent />}

                  <div
                    className="centered-number"
                    style={{ color: card.style.color }}
                  >
                    {card.number}
                  </div>
                </div>
              ))}
            </Row>

            <Row className="d-flex mb-3 " style={{ marginLeft: "0px" }}>
              {cards5.map((card, index) => (
                <div key={index} className="col-box" style={card.style}>
                  {card.imageComponent && <card.imageComponent />}

                  <div
                    className="centered-number"
                    style={{ color: card.style.color }}
                  >
                    {card.number}
                  </div>
                </div>
              ))}
            </Row>
          </Container>
        </Col>
        <Col className="bordered-col">
          {" "}
          <Container>
            <div className="page-content mt-3">2 אזור</div>
            <div className="page-content mt-2 mb-5">פנוי: 4 חשמל + 1 נגישה</div>
            <Row className="d-flex justify-content-center mb-3">
              {cards.map((card, index) => (
                <div key={index} className="col-box" style={card.style}>
                  {card.imageComponent && <card.imageComponent />}

                  <div
                    className="centered-number"
                    style={{ color: card.style.color }}
                  >
                    {card.number}
                  </div>
                </div>
              ))}
            </Row>

            <Row className="d-flex justify-content-center mb-3">
              {card2.map((card, index) => (
                <div key={index} className="col-box" style={card.style}>
                  {card.imageComponent && <card.imageComponent />}

                  <div
                    className="centered-number"
                    style={{ color: card.style.color }}
                  >
                    {card.number}
                  </div>
                </div>
              ))}
            </Row>

            <Row className="d-flex justify-content-center mb-3">
              {cards3.map((card, index) => (
                <div key={index} className="col-box" style={card.style}>
                  {card.imageComponent && <card.imageComponent />}

                  <div
                    className="centered-number"
                    style={{ color: card.style.color }}
                  >
                    {card.number}
                  </div>
                </div>
              ))}
            </Row>

            <Row className="d-flex justify-content-center mb-3">
              {cards4.map((card, index) => (
                <div key={index} className="col-box" style={card.style}>
                  {card.imageComponent && <card.imageComponent />}

                  <div
                    className="centered-number"
                    style={{ color: card.style.color }}
                  >
                    {card.number}
                  </div>
                </div>
              ))}
            </Row>

            <Row className="d-flex mb-3 " style={{ marginLeft: "0px" }}>
              {cards5.map((card, index) => (
                <div key={index} className="col-box" style={card.style}>
                  {card.imageComponent && <card.imageComponent />}

                  <div
                    className="centered-number"
                    style={{ color: card.style.color }}
                  >
                    {card.number}
                  </div>
                </div>
              ))}
            </Row>
          </Container>
        </Col>
        <Col className="bordered-col">
          {" "}
          <Container>
            <div className="page-content mt-3">1 אזור</div>
            <div className="page-content mt-2 mb-5">פנוי: 4 חשמל + 1 נגישה</div>
            <Row className="d-flex justify-content-center mb-3">
              {cards.map((card, index) => (
                <div key={index} className="col-box" style={card.style}>
                  {card.imageComponent && <card.imageComponent />}

                  <div
                    className="centered-number"
                    style={{ color: card.style.color }}
                  >
                    {card.number}
                  </div>
                </div>
              ))}
            </Row>

            <Row className="d-flex justify-content-center mb-3">
              {card2.map((card, index) => (
                <div key={index} className="col-box" style={card.style}>
                  {card.imageComponent && <card.imageComponent />}

                  <div
                    className="centered-number"
                    style={{ color: card.style.color }}
                  >
                    {card.number}
                  </div>
                </div>
              ))}
            </Row>

            <Row className="d-flex justify-content-center mb-3">
              {cards3.map((card, index) => (
                <div key={index} className="col-box" style={card.style}>
                  {card.imageComponent && <card.imageComponent />}

                  <div
                    className="centered-number"
                    style={{ color: card.style.color }}
                  >
                    {card.number}
                  </div>
                </div>
              ))}
            </Row>

            <Row className="d-flex justify-content-center mb-3">
              {cards4.map((card, index) => (
                <div key={index} className="col-box" style={card.style}>
                  {card.imageComponent && <card.imageComponent />}

                  <div
                    className="centered-number"
                    style={{ color: card.style.color }}
                  >
                    {card.number}
                  </div>
                </div>
              ))}
            </Row>

            <Row className="d-flex mb-3 " style={{ marginLeft: "0px" }}>
              {cards5.map((card, index) => (
                <div key={index} className="col-box" style={card.style}>
                  {card.imageComponent && <card.imageComponent />}

                  <div
                    className="centered-number"
                    style={{ color: card.style.color }}
                  >
                    {card.number}
                  </div>
                </div>
              ))}
            </Row>
          </Container>
        </Col>
      </Row>
      <Row className="foot-row">
        <div className="foot-row-text text-center">
          19 רגילות | 3 נגישות | 4 חשמל<span>קומה 1-</span>
        </div>
      </Row>
    </div>
  );
};

export default Page2;
