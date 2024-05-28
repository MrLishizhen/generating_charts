import { useEffect, useMemo, useState } from 'react';
import { getComponentList } from '@/api/view-management-editing';
import { WidgetData } from '@/types/widget';
import { generateMenuData } from './utils';
import styles from './index.module.less';
import {
  AppstoreAddOutlined,
  BarsOutlined,
  AppstoreOutlined,
} from '@ant-design/icons';
import type { TabsProps } from 'antd';
import { TabsCom, MenuCom, SliderCom } from '@/components/ui';
import { EditHeader, Stage } from './components';

const ViewManagementEditing = () => {
  const [left, setLeft] = useState(true);
  const [tab_key, set_tab_key] = useState('1');
  const [widgets, setWidgets] = useState<WidgetData[]>([]);

  useEffect(() => {
    getComponentList().then((res) => {
      if (res.code === 200) {
        const { result = [] } = res;
        setWidgets(result);
      }
    });
  }, []);

  const calculateMenu = useMemo(() => {
    if (tab_key === '1') {
      const treeData = generateMenuData(widgets, 0);
      return (
        <div className={styles.tab_children_box}>
          <MenuCom items={treeData} mode='inline' />
        </div>
      );
    }
  }, [tab_key, widgets]);

  const items: TabsProps['items'] = [
    {
      key: '1',
      icon: <AppstoreAddOutlined />,
      label: '通用组件',
      children: calculateMenu,
    },
    {
      key: '2',
      icon: <BarsOutlined />,
      label: '图层',
      children: '图层',
    },
    {
      key: '3',
      icon: <AppstoreOutlined />,
      label: '组件列表',
      children: '已保存视图组件列表',
    },
  ];
  return (
    <div className={styles.view_edit}>
      <EditHeader />

      <div className={styles.content}>
        <div className={styles.left} style={{ width: left ? 260 : 60 }}>
          <TabsCom
            tabs={{
              style: { width: left ? 260 : 60, height: '100%' },
              className: styles.tabs_left,
              tabBarGutter: 21,
              tabBarStyle: { padding: '0 8px' },
              items: items,
              defaultActiveKey: '1',
              onChange: (activeKey: string) => {
                set_tab_key(activeKey);
              },
            }}
          />
        </div>
        <div className={styles.stage}>
          <div className={styles.stage_box}>
            <Stage />
          </div>
          <div className={styles.stage_buttons}>
            <div className={styles.slider}>
              <SliderCom />
            </div>
          </div>
        </div>
        <div className={styles.right}></div>
      </div>
    </div>
  );
};

export default ViewManagementEditing;
