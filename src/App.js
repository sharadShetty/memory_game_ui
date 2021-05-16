import React, { useState } from 'react';
import { Layout, Spin } from 'antd';
import styled from 'styled-components';
import HeaderBar from './components/HeaderBar';
import Board from './components/Board';
import './App.css';

const { Header: AntdHeader, Content } = Layout;

const Wrapper = styled(Layout)`
  height: 100%;
`;

const Header = styled(AntdHeader)`
  height: auto;
`;

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [fileId, setFileId] = useState(null);
  const [noOfCardsPerSet, setNoOfCardsPerSet] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [errorScore, setErrorScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  return (
    <div className="App">
      <Spin spinning={isLoading} tip="Please wait...">
        <Wrapper>
          <Header>
            <HeaderBar
              setIsLoading={setIsLoading}
              fileId={fileId}
              startTime={startTime}
              errorScore={errorScore}
            />
          </Header>
          <Content>
            <Board
              setIsLoading={setIsLoading}
              fileId={fileId}
              setFileId={setFileId}
              noOfCardsPerSet={noOfCardsPerSet}
              setNoOfCardsPerSet={setNoOfCardsPerSet}
              startTime={startTime}
              setStartTime={setStartTime}
              setErrorScore={setErrorScore}
              gameOver={gameOver}
              setGameOver={setGameOver}
            />
          </Content>
        </Wrapper>
      </Spin>
    </div>
  );
};
export default App;
