import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  display: flex;
  height: 100px;
  width: 60%;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    width: 90%;
  }

  img {
    width: 100px;
    height: 80px;
  }

  .audio-indicator {
    font-size: 12px;
    margin-left: 8px;
    color: ${props => props.isPlaying ? 'green' : 'red'};
  }
`;

export const SocialIconsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const IconsMenu = styled(FontAwesomeIcon)`
  font-size: 24px;
  margin-right: 10px;
  cursor: pointer;
  color: aliceblue;

  :hover {
    color: rgb(225,177,0);
  }
`;