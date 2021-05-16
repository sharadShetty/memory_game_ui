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
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [gameDifficulty, setGameDifficulty] = useState('');
  const [chosenFirstCard, setChosenFirstCard] = useState(null);

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

  const handleCardClick = (set, cardNum) => {
    if (set === 1) {
      setChosenFirstCard(cardNum);
    } else if (set === 2 && !chosenFirstCard) {
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
            hoverable={!(!chosenFirstCard && set === 2)}
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
