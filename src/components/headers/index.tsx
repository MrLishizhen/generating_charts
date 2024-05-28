import styles from '@/index.module.less';
import MenuCom from '../menu';

import { Layout } from 'antd';

const { Header } = Layout;

const Headers = () => {
  return (
    <Header
      // style={{background: colorBgContainer}}
      style={{
        background: '#fff',
        color: '#000',
        borderBottom: '1px solid #f5f5f5',
      }}
      className={styles.App_header}
    >
      <div className={styles.head_com}>
        <MenuCom />
      </div>
      {/* <div className={styles.user}></div> */}
    </Header>
  );
};
export default Headers;
