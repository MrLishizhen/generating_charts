import { Modal, Spin } from 'antd';
import type { ModalProps, SpinProps } from 'antd';
import type { ReactNode } from 'react';
import { LoadingOutlined } from '@ant-design/icons';

/**
 * 二次封装antd的Modal
 * 主要实现
 * 1.antd Modal的基础功能和传参
 * 2.antd 示例中有个拖拽弹窗 考虑搞过来
 *
 * modalProps: 请看antd Modal的配置属性
 * children: 弹窗需要展示的内容
 * */

interface ModalType {
  spinProps?: SpinProps;
  modalProps: ModalProps;
  children: ReactNode;
}

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
const ModalCom = (props: ModalType) => {
  const { children = '', modalProps = {}, spinProps = {} } = props;
  const { spinning = false, indicator = antIcon, ...spinRest } = spinProps;
  const {
    title = '',
    afterClose,
    centered = false,
    mask = true,
    maskClosable = true,
    open = false,
    onCancel,
    onOk,
    ...rest
  } = modalProps; //
  return (
    <Modal
      confirmLoading={spinning}
      wrapClassName={'modal_box'}
      open={open}
      maskClosable={maskClosable}
      mask={mask}
      title={title}
      centered={centered}
      afterClose={afterClose}
      okText={rest.okText || '保存'}
      onOk={onOk}
      onCancel={onCancel}
      {...rest}
    >
      <Spin indicator={indicator} spinning={spinning} {...spinRest}>
        {children}
      </Spin>
    </Modal>
  );
};

export default ModalCom;
