import React from 'react';
import styled from 'styled-components';
import { Row, Col, message, Divider } from 'antd';
import GameStartModal from './partials/GameStartModal';
import GameOverModal from './partials/GameOverModal';
import Card from './partials/Card';
import request from '../../utils/request';

const Wrapper = styled.div`
  padding: 20px 0;
  height: 100%;
`;

const CardsContainer = styled(Row)`
  background: transparent;
`;

const Board = ({
  setIsLoading,
  fileId,
  setFileId,
  noOfCardsPerSet,
  setNoOfCardsPerSet,
  startTime,
  setStartTime,
  setErrorScore,
  gameOver,
  setGameOver,
  finalScore,
  setFinalScore,
  isGameStartModalVisible,
  setIsGameStartModalVisible,
  gameDifficulty,
  setGameDifficulty,
  chosenFirstCardNum,
  setChosenFirstCardNum,
  chosenFirstCardColor,
  setChosenFirstCardColor,
  chosenSecondCardNum,
  setChosenSecondCardNum,
  chosenSecondCardColor,
  setChosenSecondCardColor,
  cardsToHide,
  setCardsToHide,
  restartGame,
}) => {
  const startGame = async () => {
    try {
      setIsLoading(true);
      const { status, data } = await request.post(`/game/new`, {
        difficulty: gameDifficulty,
      });
      if (status === 200) {
        setIsGameStartModalVisible(false);
        setFileId(data.fileId);
        setNoOfCardsPerSet(data.noOfCardsPerSet);
      } else {
        message.error('Could not initiate a new game');
      }
    } catch (err) {
      message.error('Could not initiate a new game');
    }
    setIsLoading(false);
  };

  const cardSelection = async (set, cardNum) => {
    try {
      setIsLoading(true);
      const { status, data } = await request.post(`/card/selection`, {
        set,
        cardNum,
        fileId,
      });
      if (status === 200) {
        if (set === 1) {
          setChosenFirstCardColor(data.color);
          setChosenFirstCardNum(cardNum);
          if (!startTime) {
            setStartTime(data.startedAt);
          }
        } else {
          setChosenSecondCardColor(data.color);
          setChosenSecondCardNum(cardNum);
          setErrorScore(data.errorScore);
          if (data.completedAt) {
            setGameOver(true);
            setFinalScore(data.score);
            setTimeout(() => {
              setNoOfCardsPerSet(null);
              setStartTime('');
            }, 3000);
          } else {
            setTimeout(() => {
              setCardsToHide(data.cardsToHide);
              setChosenFirstCardColor('');
              setChosenFirstCardNum(null);
              setChosenSecondCardColor('');
              setChosenSecondCardNum(null);
            }, 3000);
          }
        }
      } else {
        message.error('Could not select the card');
      }
    } catch (err) {
      message.error('Could not select the card');
    }
    setIsLoading(false);
  };

  const handleCardClick = (set, cardNum) => {
    if (set === 1) {
      setChosenFirstCardColor('');
      cardSelection(set, cardNum);
    } else if (set === 2) {
      if (!chosenFirstCardNum) {
        message.warning('Please chose a card from first group');
      } else {
        cardSelection(set, cardNum);
      }
    }
  };

  const getCards = (set) => {
    const cards = [];
    for (let i = 0; i < noOfCardsPerSet; i++) {
      cards.push(
        <Col key={i}>
          <Card
            set={set}
            cardNum={i + 1}
            handleCardClick={handleCardClick}
            hoverable={!(!chosenFirstCardNum && set === 2)}
            color={
              set === 1 && i + 1 === chosenFirstCardNum
                ? chosenFirstCardColor
                : set === 2 && i + 1 === chosenSecondCardNum
                ? chosenSecondCardColor
                : ''
            }
            hide={cardsToHide['set' + set].includes(i + 1)}
          />
        </Col>
      );
    }
    return cards;
  };

  return (
    <Wrapper>
      <CardsContainer align="middle" justify="center" gutter={[16, 24]}>
        {noOfCardsPerSet && getCards(1)}
      </CardsContainer>
      {noOfCardsPerSet && <Divider>***</Divider>}
      <CardsContainer align="middle" justify="center" gutter={[16, 24]}>
        {noOfCardsPerSet && getCards(2)}
      </CardsContainer>
      <GameStartModal
        visible={isGameStartModalVisible}
        value={gameDifficulty}
        onChange={setGameDifficulty}
        onSubmit={startGame}
      />
      <GameOverModal
        visible={gameOver}
        restart={restartGame}
        score={finalScore}
      />
    </Wrapper>
  );
};

export default Board;
