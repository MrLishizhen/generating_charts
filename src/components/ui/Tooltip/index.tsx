import { ReactNode } from 'react';
import { Tooltip } from 'antd';
import type { TooltipProps } from 'antd';
export type TooltipComProps = {
  tootipProps: TooltipProps;
  children?: ReactNode;
};
const TooltipCom = (props: TooltipComProps) => {
  const { children, tootipProps } = props;
  return <Tooltip {...tootipProps}>{children}</Tooltip>;
};

export default TooltipCom;
