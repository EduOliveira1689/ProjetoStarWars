import React, { useState, useEffect } from "react";
import { Container, HeaderContainer, IconsMenu, SocialIconsContainer } from "./header.style";
import { faInstagram, faFacebook, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import AudioPlayer from "../soundsTheme/soundsTheme";
import themeAudio from '../../assets/sound/Theme.mp3';
import logo from '../../assets/img/star-wars-logo.png'

function Header() {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      console.log("O áudio está tocando!");
    } else {
      console.log("O áudio está pausado!");
    }
  }, [isPlaying]);

  return (
    <Container>
      <HeaderContainer>
        <img src={logo} alt="Star Wars Logo" className="star-wars-logo" />
        <SocialIconsContainer>
          <a href="https://www.instagram.com/edu.oliveira1689/?igsh=MW9sZGwyZ3B5NnSnydQ%3D%3D" target="_blank" rel="noopener noreferrer">
            <IconsMenu icon={faInstagram} />
          </a>
          <a href="https://www.facebook.com/eduardo.goncalves.7543" target="_blank" rel="noopener noreferrer">
            <IconsMenu icon={faFacebook} />
          </a>
          <a href="https://www.linkedin.com/in/eduardo-oliveira-2853ba96/" target="_blank" rel="noopener noreferrer">
            <IconsMenu icon={faLinkedin} />
          </a>
          <a href="https://github.com/EduOliveira1689" target="_blank" rel="noopener noreferrer">
            <IconsMenu icon={faGithub} />
          </a>
          <AudioPlayer audioSource={themeAudio} setPlayingState={setIsPlaying} />
          <span className="audio-indicator"></span>
        </SocialIconsContainer>
      </HeaderContainer>
    </Container>
  );
}

export default Header;
