import { ReactNode } from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
export type TabsComProps = {
  children?: ReactNode;
  tabs: TabsProps;
};
const TabsCom = (props: TabsComProps) => {
  const { tabs } = props;
  return <Tabs {...tabs} />;
};

export default TabsCom;
