import styled from "styled-components";
import starWarsBackground from "../../src/assets/img/starwars-background.png";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh; 
  display: flex;
  flex-direction: column;
  margin-top: -100px;
  background-image: url(${starWarsBackground});
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;

  @media (max-width: 768px) {
    height: auto;
  }
`;

export const Text = styled.div`
  width: 100%;
  flex: 1; 
  display: flex;
  align-items: center;
  justify-content: center;
  
  span {
    color: rgb(225, 177, 0);
    font-size: 35px;
    font-family: 'Star Wars', sans-serif;
    text-transform: lowercase;

    @media (max-width: 768px) {
      font-size: x-large;
    }
  }

  ${({ loading }) => !loading && `
    margin-top: 130px;
  `}
`;