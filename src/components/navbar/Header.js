import * as React from "react";
import styled from "styled-components";

export default function MyComponent() {
  return (
    <Div>
      <Img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a36a462fa82efc1204f392acbd4442cee87c93240bb56dff94350392b37f2509?apiKey=b1f97334f9ec482fa1222e6218f83710&"
      />
      <Img2
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5d25edfaf829159b28c5a40f7be836ef7263dbd70135dad67ff6c3b877958811?apiKey=b1f97334f9ec482fa1222e6218f83710&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d25edfaf829159b28c5a40f7be836ef7263dbd70135dad67ff6c3b877958811?apiKey=b1f97334f9ec482fa1222e6218f83710&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d25edfaf829159b28c5a40f7be836ef7263dbd70135dad67ff6c3b877958811?apiKey=b1f97334f9ec482fa1222e6218f83710&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d25edfaf829159b28c5a40f7be836ef7263dbd70135dad67ff6c3b877958811?apiKey=b1f97334f9ec482fa1222e6218f83710&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d25edfaf829159b28c5a40f7be836ef7263dbd70135dad67ff6c3b877958811?apiKey=b1f97334f9ec482fa1222e6218f83710&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d25edfaf829159b28c5a40f7be836ef7263dbd70135dad67ff6c3b877958811?apiKey=b1f97334f9ec482fa1222e6218f83710&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d25edfaf829159b28c5a40f7be836ef7263dbd70135dad67ff6c3b877958811?apiKey=b1f97334f9ec482fa1222e6218f83710&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d25edfaf829159b28c5a40f7be836ef7263dbd70135dad67ff6c3b877958811?apiKey=b1f97334f9ec482fa1222e6218f83710&"
      />
      <Img3
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1fe7f1163a075a539ced66c62840c0d3c49d56a1c2502bf1dbdae184c948d07b?apiKey=b1f97334f9ec482fa1222e6218f83710&"
      />
      <Div2>
        <Div3>דא</Div3>
      </Div2>
    </Div>
  );
}

const Div = styled.div`
  align-items: center;
  background-color: #fff;
  display: flex;
  gap: 20px;
  font-size: 22px;
  color: var(--dark-gray-494-e-50, #494e50);
  font-weight: 500;
  white-space: nowrap;
  text-align: center;
  padding: 4px 20px 4px 32px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
    padding-left: 20px;
    white-space: initial;
  }
`;

const Img = styled.img`
  aspect-ratio: 5.26;
  object-fit: auto;
  object-position: center;
  width: 150px;
  align-self: stretch;
  max-width: 100%;
  margin: auto 0;
`;

const Img2 = styled.img`
  aspect-ratio: 2.33;
  object-fit: auto;
  object-position: center;
  width: 74px;
  border-radius: 5px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1);
  align-self: stretch;
  margin: auto 0;
`;

const Img3 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 48px;
  align-self: stretch;
`;

const Div2 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto 0;
  padding: 0 1px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div3 = styled.div`
  font-family: Rubik, sans-serif;
  background-color: var(--aqua-66-eae-0, #66eae0);
  border-radius: 50%;
  align-items: center;
  width: 44px;
  justify-content: center;
  height: 44px;
  padding: 0 8px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;


