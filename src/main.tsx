import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import { BrowserRouter } from 'react-router-dom';
import RoauterView from '@/router/index.tsx';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import './index.css';

import '@/utils/mock/index';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <ConfigProvider
        locale={zhCN}
        theme={{
          // algorithm: theme.darkAlgorithm,
          token: {
            borderRadius: 2,
          },
        }}
      >
        <RoauterView />
      </ConfigProvider>
    </BrowserRouter>
  </Provider>,
);
