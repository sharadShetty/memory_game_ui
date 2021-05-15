import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Row, Col, message } from 'antd';
import Modal from './partials/Modal';
import request from '../../utils/request';

const Wrapper = styled(Row)`
  height: 100%;
`;

const Board = ({ setIsLoading }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [gameDifficulty, setGameDifficulty] = useState('');

  useEffect(() => {
    setIsModalVisible(true);
  }, []);

  const startGame = async () => {
    try {
      setIsLoading(true);
      const { status } = await request.post(`/game/new`, {
        difficulty: gameDifficulty,
      });
      if (status === 200) {
        message.success('Welcome');
      } else {
        message.error('Could not initiate a new game');
      }
    } catch (err) {
      message.error('Could not initiate a new game');
    }
    setIsModalVisible(false);
    setIsLoading(false);
  };

  return (
    <Wrapper>
      <Col span={12}>col-12</Col>
      <Col span={12}>col-12</Col>
      <Modal
        visible={isModalVisible}
        value={gameDifficulty}
        onChange={setGameDifficulty}
        onSubmit={startGame}
      />
    </Wrapper>
  );
};

export default Board;
