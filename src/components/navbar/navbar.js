import * as React from "react";
import styled from "styled-components";

export default function MyComponent() {
  return (
    <Div>
      <Text>דשבורד חניון</Text>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  justify-content: end;
  align-items: flex-end;
  border-color: rgba(78, 185, 177, 1);
  border-style: solid;
  border-bottom-width: 1px;
  background-color: #e4e9f2;
  color: var(--darker-aqua-015-b-5-e, #015b5e);
  padding: 10px 20px;
  font: 500 30px Rubik, sans-serif;
  text-align: end;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Text = styled.span`
  margin-right:130px ;  // Custom margins for the text
`;
