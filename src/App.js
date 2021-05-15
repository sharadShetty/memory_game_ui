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

  return (
    <div className="App">
      <Spin spinning={isLoading} tip="Please wait...">
        <Wrapper>
          <Header>
            <HeaderBar setIsLoading={setIsLoading} />
          </Header>
          <Content>
            <Board setIsLoading={setIsLoading} />
          </Content>
        </Wrapper>
      </Spin>
    </div>
  );
};
export default App;
