/*
 * 根据后台的icon 字段返回对应的antd Icon
 * */

import React from 'react';
import {
  HomeOutlined,
  BarChartOutlined,
  LockOutlined,
  MenuFoldOutlined,
  ZhihuOutlined,
  PaperClipOutlined,
  GithubOutlined,
  FundViewOutlined,
  createFromIconfontCN,
} from '@ant-design/icons';

interface IconFontType {
  icon_link?: string;
  style?: React.CSSProperties;
}

const IconFont: (props: IconFontType) => React.ReactElement = (
  props: IconFontType,
) => {
  const { icon_link, style } = props;
  const styles = { ...style };
  switch (icon_link) {
    case 'HomeOutlined':
      return <HomeOutlined style={styles} />;
    case 'BarChartOutlined':
      return <BarChartOutlined style={styles} />;
    case 'LockOutlined':
      return <LockOutlined style={styles} />;
    case 'MenuFoldOutlined':
      return <MenuFoldOutlined style={styles} />;
    case 'ZhihuOutlined':
      return <ZhihuOutlined style={styles} />;
    case 'PaperClipOutlined':
      return <PaperClipOutlined style={styles} />;
    case 'GithubOutlined':
      return <GithubOutlined style={styles} />;
    case 'FundViewOutlined':
      return <FundViewOutlined style={styles} />;
    default:
      return <></>;
  }
};

export const IconFontUrl = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/c/font_4561705_7q29iblezk9.js', // icon-javascript, icon-java, icon-shoppingcart (overridden)
  ],
});

export default IconFont;
