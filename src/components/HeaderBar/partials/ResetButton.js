import React from 'react';
import { Button } from 'antd';

import { ReloadOutlined } from '@ant-design/icons';

const ResetButton = ({ ...rest }) => {
  return (
    <Button type="danger" icon={<ReloadOutlined />} {...rest}>
      Reset
    </Button>
  );
};

export default ResetButton;
