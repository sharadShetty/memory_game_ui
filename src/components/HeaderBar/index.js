import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PageHeader, Row, Col } from 'antd';
import HeaderTag from './partials/HeaderTag';
import ResetButton from './partials/ResetButton';

const Wrapper = styled.div`
  height: 100%;
`;

const StyledPageHeader = styled(PageHeader)`
  .ant-page-header-heading-title {
    color: #fff;
  }
`;

const calculateElapsedTime = (startTime, currentTime) => {
  if (!startTime) return '00:00';
  const timeDifference = (currentTime - startTime) / 1000;
  const seconds = toTwoDigits(Math.floor(timeDifference % 60));
  const minutes = toTwoDigits(Math.floor(timeDifference / 60));
  return minutes + '.' + seconds;
};

const toTwoDigits = (number) => {
  let value = number + '';
  return value.length === 1 ? '0' + value : value;
};

const HeaderBar = ({ errorScore, startTime, restartGame }) => {
  const [currentTime, setCurrentTime] = useState(Date.now());

  useEffect(() => {
    setTimeout(() => {
      setCurrentTime(Date.now());
    }, 1000);
  }, [currentTime]);

  return (
    <Wrapper>
      <StyledPageHeader
        title="Memory Game"
        extra={[
          <Row
            key="header row"
            gutter={[16, 16]}
            justify="space-around"
            align="middle"
          >
            <Col>
              <HeaderTag
                label="Elapsed Time"
                value={calculateElapsedTime(startTime, currentTime)}
                color="#87d068"
              />
            </Col>
            <Col>
              <HeaderTag
                label="Error Score"
                value={errorScore}
                color="#2db7f5"
              />
            </Col>
            <Col>
              <ResetButton onClick={restartGame} />
            </Col>
          </Row>,
        ]}
      />
    </Wrapper>
  );
};

export default HeaderBar;
