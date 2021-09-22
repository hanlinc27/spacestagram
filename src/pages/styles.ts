import styled, { keyframes } from "styled-components";

export const Title = styled.h1`
  text-align: center;
  font-family: "Ubuntu", sans-serif;
  font-weight: 700;
`;

export const Credits = styled.h4`
  text-align: center;
  font-family: "Ubuntu", sans-serif;
  font-weight: 400;
`;

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const PlanetImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  animation: ${rotate} 2s linear infinite;
  width: 15%;
`;
