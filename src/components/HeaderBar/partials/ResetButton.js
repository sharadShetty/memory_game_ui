import React from 'react';
import { Button } from 'antd';

import { ReloadOutlined } from '@ant-design/icons';

const ResetButton = () => {
  return (
    <Button type="danger" icon={<ReloadOutlined />}>
      Reset
    </Button>
  );
};

export default ResetButton;
