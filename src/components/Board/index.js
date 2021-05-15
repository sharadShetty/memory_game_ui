import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import Modal from './partials/Modal';

const Wrapper = styled(Row)`
  height: 100%;
`;

const Board = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [gameDifficulty, setGameDifficulty] = useState('');

  useEffect(() => {
    setIsModalVisible(true);
  }, []);

  const startGame = () => {
    setIsModalVisible(false);
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
