import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';

const Wrapper = styled(Row)`
  height: 100%;
`;

const Board = () => {
  return (
    <Wrapper>
      <Col span={12}>col-12</Col>
      <Col span={12}>col-12</Col>
    </Wrapper>
  );
};

export default Board;
