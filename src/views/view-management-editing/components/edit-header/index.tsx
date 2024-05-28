import styles from './index.module.less';
import logo from '@/assets/logo-removebg-preview.png';
import { Button, ButtonProps, Tooltip } from 'antd';
import {
  DesktopOutlined,
  SaveOutlined,
  RollbackOutlined,
  ExportOutlined,
} from '@ant-design/icons';
import { TooltipCom } from '@/components/ui';
const EditHeader = () => {
  const buttonStyle: ButtonProps = {
    style: { color: '#000' },
    type: 'link',
  };
  const iconStyle = {
    fontSize: 16,
  };
  return (
    <header className={styles.header}>
      <div className={styles.header_left}>
        <div className={styles.logo_box}>
          <img className={styles.logo} src={logo} alt='' />
        </div>
        <div className={styles.buttons}>
          <TooltipCom tootipProps={{ title: '预览' }}>
            <Button
              icon={<DesktopOutlined style={iconStyle} />}
              {...buttonStyle}
            />
          </TooltipCom>
        </div>
      </div>
      <div className={styles.header_content}></div>
      <div className={styles.header_right}>
        <TooltipCom tootipProps={{ title: '保存' }}>
          <Button icon={<SaveOutlined style={iconStyle} />} {...buttonStyle} />
        </TooltipCom>
        <TooltipCom tootipProps={{ title: '上一步' }}>
          <Button
            icon={<RollbackOutlined style={iconStyle} />}
            {...buttonStyle}
          />
        </TooltipCom>
        <TooltipCom tootipProps={{ title: '下一步' }}>
          <Button
            icon={
              <RollbackOutlined
                style={{ ...iconStyle, transform: 'scaleX(-1)' }}
              />
            }
            {...buttonStyle}
          />
        </TooltipCom>

        <TooltipCom tootipProps={{ title: '下一步' }}>
          <Button
            icon={<ExportOutlined style={iconStyle} />}
            {...buttonStyle}
          />
        </TooltipCom>
      </div>
    </header>
  );
};

export default EditHeader;
