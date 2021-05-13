import React from 'react';
import { Layout } from 'antd';
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

const App = () => (
  <div className="App">
    <Wrapper>
      <Header>
        <HeaderBar />
      </Header>
      <Content>
        <Board />
      </Content>
    </Wrapper>
  </div>
);

export default App;
