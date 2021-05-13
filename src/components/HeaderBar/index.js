import React from 'react';
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

const HeaderBar = () => {
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
              <HeaderTag label="Elapsed Time" value={13.28} color="#87d068" />
            </Col>
            <Col>
              <HeaderTag label="Error Score" value={50} color="#2db7f5" />
            </Col>
            <Col>
              <ResetButton />
            </Col>
          </Row>,
        ]}
      />
    </Wrapper>
  );
};

export default HeaderBar;
