import React from 'react';
import { Modal as AntdModal, Button } from 'antd';
import { Typography } from 'antd';

const { Text } = Typography;

const GameOverModal = ({ visible, restart, score }) => {
  return (
    <AntdModal
      visible={visible}
      title="Well done"
      closable={false}
      footer={[
        <Button key="submit" type="primary" onClick={restart}>
          Play again
        </Button>,
      ]}
    >
      <Text type="success" strong>
        Your score is {score}
      </Text>
    </AntdModal>
  );
};

export default GameOverModal;
