import React from 'react';
import { Button, Layout } from 'antd';
import styled from 'styled-components';
import './App.css';

const { Header, Content } = Layout;

const Wrapper = styled(Layout)`
  height: 100%;
`;

const App = () => (
  <div className="App">
    <Wrapper>
      <Header>Header</Header>
      <Content>
        <Button type="primary">Button</Button>
      </Content>
    </Wrapper>
  </div>
);

export default App;
