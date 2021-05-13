import React from 'react';
import styled from 'styled-components';
import { Tag, Typography } from 'antd';

const { Text } = Typography;

const StyledTag = styled(Tag)`
  font-size: 1rem;
  padding: 4px 8px;
`;

const HeaderTag = ({ label = '', value = '', color = '' }) => {
  return (
    <StyledTag color={color}>
      {label}: <Text code>{value}</Text>
    </StyledTag>
  );
};

export default HeaderTag;
