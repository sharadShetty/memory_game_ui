import React from 'react';
import { Modal as AntdModal, Button, Radio } from 'antd';

const GameStartModal = ({ visible, value, onChange, onSubmit }) => {
  return (
    <AntdModal
      visible={visible}
      title="Choose difficulty"
      closable={false}
      footer={[
        <Button
          key="submit"
          type="primary"
          disabled={!value}
          onClick={onSubmit}
        >
          Let's Go
        </Button>,
      ]}
    >
      <Radio.Group onChange={(e) => onChange(e.target.value)} value={value}>
        <Radio.Button value="easy">Easy</Radio.Button>
        <Radio.Button value="medium">Medium</Radio.Button>
        <Radio.Button value="hard">Hard</Radio.Button>
      </Radio.Group>
    </AntdModal>
  );
};

export default GameStartModal;
