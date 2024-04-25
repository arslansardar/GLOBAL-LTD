import * as React from "react";
import styled from "styled-components";
import "./style.css";

function Stepper() {
  return (
    <Container>
      <div className="md-stepper-horizontal orange">
        <div className="md-step">
          <div className="md-step-circle">
            <span>3</span>
          </div>
          <div className="md-step-title">מספור חניות</div>
          <div className="md-step-bar-left" />
          <div className="md-step-bar-right" />
        </div>
        <div className="md-step">
          <div className="md-step-circle">
            <span>2</span>
          </div>

          <div className="md-step-title">תכנון קומות וחניות</div>
          <div className="md-step-bar-left" />
          <div className="md-step-bar-right" />
        </div>

        <div className="md-step active">
          <div className="md-step-circle">
            <span>1</span>
          </div>
          <div className="md-step-title">פרטים כלליים</div>
          <div className="md-step-bar-left" />
          <div className="md-step-bar-right" />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: var(--light-light-gray-f-5-f-5-f-5, #f5f5f5);
  border-radius: 6px 6px 0 0;
  font-weight: 500;
  text-align: center;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export default Stepper;
