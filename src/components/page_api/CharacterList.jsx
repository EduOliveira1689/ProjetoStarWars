import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../../components/loading';
import {
  CharacterContainer,
  CharacterCards,
  TextCard,
  CharacterCardContainer,
  Button,
  ButtonDiv,
  PageIndicatorDiv,
  ButtonContainer,
  ModalWrapper,
  ModalTitle,
  ModalContent,
  ModalButton,
  CustomModal,
  CharacterModal,
} from './CharacterList.styled';

function getCharacterId(url) {
  const parts = url.split('/');
  return parts[parts.length - 2];
}

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPageUrl, setCurrentPageUrl] = useState('https://swapi.dev/api/people/');
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [previousPageUrl, setPreviousPageUrl] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const currentPageNumber = currentPageUrl.match(/\d+/);

  const loadCharacters = async (url) => {
    try {
      setLoading(true);

      const response = await axios.get(url);
      if (!response.data) {
        throw new Error(`Erro na solicitação: ${response.status}`);
      }

      const charactersWithImages = response.data.results.map(character => {
        const backgroundImageUrl = `https://starwars-visualguide.com/assets/img/characters/${getCharacterId(character.url)}.jpg`;
        return { ...character, backgroundImageUrl };
      });

      setCharacters(charactersWithImages);
      setNextPageUrl(response.data.next);
      setPreviousPageUrl(response.data.previous);

      setLoading(false);

    } catch (error) {
      console.error('Erro ao carregar os personagens:', error.message);
      alert('Erro ao carregar os personagens');
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCharacters(currentPageUrl);
  }, [currentPageUrl]);

  const loadNextPage = () => {
    setCurrentPageUrl(nextPageUrl);
    setSelectedCharacter(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const loadPreviousPage = () => {
    setCurrentPageUrl(previousPageUrl);
    setSelectedCharacter(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openModal = (character) => {
    const backgroundImageUrl = `https://starwars-visualguide.com/assets/img/characters/${getCharacterId(character.url)}.jpg`;
    setSelectedCharacter({
      character,
      imageUrl: backgroundImageUrl,
    });
  };

  const closeModal = () => {
    setSelectedCharacter(null);
  };

  return (
    <div>
      {loading && <Loading />}
      {!loading && (
        <>
          <CharacterContainer id="main-content">
            {characters.map((character) => (
              <CharacterCardContainer key={character.name} onClick={() => openModal(character)}>
                <CharacterCards $backgroundImage={`url('${character.backgroundImageUrl}')`}>
                  <TextCard>
                    <span className="character-name">{character.name}</span>
                  </TextCard>
                </CharacterCards>
              </CharacterCardContainer>
            ))}
          </CharacterContainer>
          <CustomModal
            isOpen={selectedCharacter !== null}
            onRequestClose={closeModal}
            contentLabel="Detalhes do Personagem"
          >
            {selectedCharacter && (
              <CharacterModal>
                <ModalWrapper>
                  <img src={selectedCharacter.imageUrl} alt={selectedCharacter.character.name} />
                  <ModalTitle>{selectedCharacter.character.name}</ModalTitle>
                  <ModalContent>
                    <span>Altura: {selectedCharacter.character.height}</span>
                    <span>Peso: {selectedCharacter.character.mass}</span>
                    <span>Gênero: {selectedCharacter.character.gender}</span>
                    <span>Nascimento: {selectedCharacter.character.birth_year}</span>
                  </ModalContent>
                  <ModalButton onClick={closeModal}>Fechar</ModalButton>
                </ModalWrapper>
              </CharacterModal>
            )}
          </CustomModal>
          <ButtonContainer>
            <ButtonDiv>
              <Button
                id="back-button"
                onClick={loadPreviousPage}
                style={{ visibility: previousPageUrl ? 'visible' : 'hidden' }}
              >
                Anterior
              </Button>
              <PageIndicatorDiv>Página: {currentPageNumber}</PageIndicatorDiv>
              <Button
                id="next-button"
                onClick={loadNextPage}
                style={{ visibility: nextPageUrl ? 'visible' : 'hidden' }}
              >
                Próximo
              </Button>
            </ButtonDiv>
          </ButtonContainer>
        </>
      )}
    </div>
  );
};

export default CharacterList;
