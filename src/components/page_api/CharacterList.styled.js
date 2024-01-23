import styled from "styled-components";
import Modal from 'react-modal';

export const CharacterContainer = styled.div`
  width: 100%;
  height: calc(1100px - 2 * 60px);
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: center;
  place-items: center;
  position: relative;

  :hover {
    transform: scale(1.1);
  }

  @media (max-width: 1550px) {
    width: 90vw;
    height: auto;
    margin-top: 18.75rem;
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }

  @media (max-width: 1200px) {
    width: 90vw;
    height: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 890px) {
    width: 90vw;
    height: auto;
    margin-top: 31.25rem;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0.9375rem;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 1.875rem;
    height: auto;
  }
`;

export const CharacterCardContainer = styled.div`
  margin: 10px; /* Adicione um espaçamento entre os cards */

  @media (max-width: 768px) {
    margin: 5px; /* Reduza o espaçamento para telas menores */
  }

  :hover {
    transform: none;
  }
`;

export const CharacterCards = styled.div`
  width: 20rem;
  height: 28.75rem;
  background-image: ${(props) => props.$backgroundImage};
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: end;
  border-radius: 0.625rem;
  cursor: pointer;
  transition: transform 0.3s ease-in-out; /* Adicione uma transição de suavização */

  @media (max-width: 768px) {
    width: 18rem; /* Reduza a largura para telas menores */
    height: 26.25rem; /* Reduza a altura para telas menores */
  }

  :hover {
    transform: scale(1.05); /* Aumente ligeiramente o tamanho ao passar o mouse */
  }
`;

export const TextCard = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.625rem;
  background-color: rgba(79, 79, 79, 0.8);
  border-radius: 0.3125rem;

  span {
    font-size: 1.25rem;
    color: rgb(225, 177, 0);
    font-family: 'Star Wars', sans-serif;
    text-transform: lowercase;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const ButtonDiv = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const PageIndicatorDiv = styled.div`
  width: 7.5rem;
  height: 1.875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(225, 177, 0);
  font-weight: 700;
  color: black;
  border-radius: 0.1875rem;
  border: 1px solid #000;
  cursor: default;
`;

export const Button = styled.button`
  width: 5rem;
  height: 1.875rem;
  background-color: rgb(225, 177, 0);
  font-weight: 700;
  color: black;
  border-radius: 0.1875rem;
  border: 1px solid #000;
  cursor: pointer;

  :hover {
    background-color: red;
    color: rgb(225, 177, 0);
  }
`;

export const CustomModal = styled(Modal)`
  display: flex;
  margin: auto;
  width: 300px;
  max-width: 90%;
  max-height: 80%;
  overflow-y: auto;
  display: contents;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 8px;
  outline: none;
  padding: 20px;
  box-shadow: none;
  top: 0;
  margin-top: 0;

  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const ModalWrapper = styled.div`
  width: 300px;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: gray;

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    justify-content: center;
    padding: 10px;
  }
`;

export const CharacterModal = styled.div`
  width: 200px;
  height: 200px;
  background-image: ${(props) => props.$backgroundImage};

  img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    object-position: top;
    border-radius: 50%;
  }
`;

export const ModalTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;

  span {
    font-family: 'Star Wars', sans-serif;
    color: rgb(225, 177, 0);
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const ModalContent = styled.div`
  font-size: 1rem;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
`;

export const ModalButton = styled.button`
  background-color: rgb(225, 177, 0);
  color: black;
  border-radius: 5px;
  padding: 8px 12px;
  border: 1px solid #000;
  cursor: pointer;

  :hover {
    background-color: red;
    color: rgb(225, 177, 0);
  }
`;
