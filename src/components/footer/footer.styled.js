import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  text-align: center;
  align-items: center;
  color: #fff;
  padding: 20px;
  position: relative;
  bottom: 0;
  width: 100%;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const StarWarsText = styled.div`
  width: 100%;
  height: 100%;


  span {
    font-family: "Star Wars", sans-serif;
    font-size: 20px;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 15px;
    }
  }
`;