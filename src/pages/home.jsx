import React from 'react';
import CharacterList from '../components/page_api/CharacterList';
import { Container, Text } from './home.styled';
import Footer from '../components/footer/footer';

function Home() {

  return (
    <Container>
      <Text>
        <span>Conheca todos os Personagens de Star Wars em um so lugar</span>
      </Text>
      <CharacterList />
      <Footer/>
    </Container>
  );
}

export default Home;
