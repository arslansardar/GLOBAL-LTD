import * as React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Main>
      <HeaderIcon
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a6e51139b341d5492128cebec2917265eaeaa5278977e70e15779d5342b1bfc?apiKey=232681902e8f4be7961abae526196996&"
        alt="Header Icon"
      />

      <HeaderContent>
        <HeaderTitle>הוספת חניון חדש</HeaderTitle>
        <HeaderActionIcon
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a38e5acd5b181bb60d247f008c972e311904be891f4f42c1e0607d3f0fde081?apiKey=232681902e8f4be7961abae526196996&"
          alt="Header Action Icon"
        />
      </HeaderContent>
    </Main>
  );
}

const Main = styled.header`
  ${'' /* border-radius: 6px 6px 0 0; */}
  border: 2px solid rgba(57, 117, 187, 1);
  border-bottom-width: 2px;
  background-color: var(--blue-3975-bb, #3975bb);
  display: flex;
  width: 100%;
  gap: 20px;
  font-size: 30px;
  color: #fff;
  font-weight: 500;
  justify-content: space-between;
  padding: 10px 20px;

  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  padding: 0 1px;
  flex: 1;
`;

const HeaderIcon = styled.img`
  width: 18px;
  cursor: pointer;
`;

const HeaderTitle = styled.h1`
  font-family: Rubik, sans-serif;
  margin: 0;
`;

const HeaderActionIcon = styled.img`
  width: 28px;
`;

export default Header;
