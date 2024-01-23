import styled from "styled-components";

export const LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;


  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;

  }
`;

export const LoaderImage = styled.img`
  width: 450px;
  height: 600px;


  @media (max-width: 768px) {
    width: 280px;
    height: 380px;

}
`;
