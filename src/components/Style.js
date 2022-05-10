import styled, { keyframes } from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: ${(props) =>
    props.background ? props.background : "puple"};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const animation = keyframes`
  0%{
      width: 200px;
      height: 200px;
  }
  50% {
      width: 100px;
      height: 100px;
  }
  100% {
      width: 200px;
      height: 200px;
  }
`;

export const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: white;
  animation: ${animation} 1s linear;
`;
