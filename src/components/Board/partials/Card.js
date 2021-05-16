import React from 'react';
import styled from 'styled-components';
import { Card as AntdCard } from 'antd';

const StyledAntdCard = styled(AntdCard)`
  width: 120px;
  height: 150px;
  padding: 10px;
  visibility: ${(props) => (props.hide ? 'hidden' : 'visible')};
`;

const Card = ({
  show = false,
  color,
  hide = false,
  set,
  cardNum,
  handleCardClick,
  hoverable = true,
}) => {
  return (
    <StyledAntdCard
      hide={hide}
      hoverable={hoverable}
      bodyStyle={{
        backgroundColor: show ? color : '#fff',
        height: '100%',
      }}
      onClick={() => handleCardClick(set, cardNum)}
    ></StyledAntdCard>
  );
};

export default Card;
