import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Row, Col, message, Divider } from 'antd';
import Modal from './partials/Modal';
import Card from './partials/Card';
import request from '../../utils/request';

const Wrapper = styled(Row)`
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
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [gameDifficulty, setGameDifficulty] = useState('');
  const [chosenFirstCardNum, setChosenFirstCardNum] = useState(null);
  const [chosenFirstCardColor, setChosenFirstCardColor] = useState('');

  useEffect(() => {
    setIsModalVisible(true);
  }, []);

  const startGame = async () => {
    try {
      setIsLoading(true);
      const { status, data } = await request.post(`/game/new`, {
        difficulty: gameDifficulty,
      });
      if (status === 200) {
        setIsModalVisible(false);
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
        }
        if (!startTime) {
          setStartTime(data.startedAt);
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
    } else if (set === 2 && !chosenFirstCardNum) {
      message.warning('Please chose a card from first group');
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
                : ''
            }
          />
        </Col>
      );
    }
    return cards;
  };

  return (
    <>
      <Wrapper align="middle" justify="center">
        {noOfCardsPerSet && getCards(1)}
      </Wrapper>
      <Divider>***</Divider>
      <Wrapper align="middle" justify="center">
        {noOfCardsPerSet && getCards(2)}
      </Wrapper>
      <Modal
        visible={isModalVisible}
        value={gameDifficulty}
        onChange={setGameDifficulty}
        onSubmit={startGame}
      />
    </>
  );
};

export default Board;
