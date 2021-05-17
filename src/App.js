import React, { useState, useEffect } from 'react';
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
  const [finalScore, setFinalScore] = useState('');
  const [isGameStartModalVisible, setIsGameStartModalVisible] = useState(false);
  const [gameDifficulty, setGameDifficulty] = useState('');
  const [chosenFirstCardNum, setChosenFirstCardNum] = useState(null);
  const [chosenFirstCardColor, setChosenFirstCardColor] = useState('');
  const [chosenSecondCardNum, setChosenSecondCardNum] = useState(null);
  const [chosenSecondCardColor, setChosenSecondCardColor] = useState('');
  const [cardsToHide, setCardsToHide] = useState({
    set1: [],
    set2: [],
  });

  useEffect(() => {
    setIsGameStartModalVisible(true);
  }, []);

  const restartGame = () => {
    setGameOver(false);
    setIsGameStartModalVisible(true);
    setGameDifficulty('');
    setCardsToHide({
      set1: [],
      set2: [],
    });
    setChosenFirstCardColor('');
    setChosenFirstCardNum(null);
    setChosenSecondCardColor('');
    setChosenSecondCardNum(null);
    setNoOfCardsPerSet(null);
  };

  return (
    <div className="App">
      <Spin spinning={isLoading} tip="Please wait...">
        <Wrapper>
          <Header>
            <HeaderBar
              startTime={startTime}
              errorScore={errorScore}
              restartGame={restartGame}
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
              finalScore={finalScore}
              setFinalScore={setFinalScore}
              isGameStartModalVisible={isGameStartModalVisible}
              setIsGameStartModalVisible={setIsGameStartModalVisible}
              gameDifficulty={gameDifficulty}
              setGameDifficulty={setGameDifficulty}
              chosenFirstCardNum={chosenFirstCardNum}
              setChosenFirstCardNum={setChosenFirstCardNum}
              chosenFirstCardColor={chosenFirstCardColor}
              setChosenFirstCardColor={setChosenFirstCardColor}
              chosenSecondCardNum={chosenSecondCardNum}
              setChosenSecondCardNum={setChosenSecondCardNum}
              chosenSecondCardColor={chosenSecondCardColor}
              setChosenSecondCardColor={setChosenSecondCardColor}
              cardsToHide={cardsToHide}
              setCardsToHide={setCardsToHide}
              restartGame={restartGame}
            />
          </Content>
        </Wrapper>
      </Spin>
    </div>
  );
};
export default App;
