import { Menu } from 'antd';
import type { MenuProps } from 'antd';
export type MenuItem = Required<MenuProps>['items'][number];

export const MenuCom = (props: MenuProps) => {
  return <Menu {...props} />;
};
