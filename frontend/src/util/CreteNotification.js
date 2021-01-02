
import {
  RadiusBottomrightOutlined
} from '@ant-design/icons';
import { Button, notification, Space } from 'antd';
import React from 'react';


const Context = React.createContext({ name: 'Default' });

const CreteNotification = () => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = placement => {
    api.info({
      message: `Notification ${placement}`,
      description: <Context.Consumer>{({ name }) => `Hello, ${name}!`}</Context.Consumer>,
      placement,
    });
  };
    
    return (
        <>
          <Context.Provider value={{ name: 'Ant Design' }}>
            {contextHolder}
            <Space>
              <Button type="primary" onClick={() => openNotification('bottomRight')}>
                <RadiusBottomrightOutlined />
                bottomRight
              </Button>
            </Space>
          </Context.Provider>
        </>
    )
}

export default CreteNotification
