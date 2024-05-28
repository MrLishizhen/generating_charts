import { Form, Row, Col, Input, Button, Select, InputNumber } from 'antd';
import { renderFormItems } from './utils';
import type { FormItemProps, FormProps, InputProps, ButtonProps } from 'antd';
import { ReactNode, useEffect, useMemo } from 'react';
const { TextArea } = Input;

type FieldType =
  | 'select'
  | 'input'
  | 'number'
  | 'button'
  | 'textarea'
  | 'input_number';

export type Fields = {
  label: ReactNode;
  widget: FieldType;
  colSpan: number;
  widgetProps?: any;
  widgetItemProps?: Omit<FormItemProps, 'label'>;
  widgetRender?: () => ReactNode;
};

export type SearchProps = {
  col?: number;
  fields: Fields[];
  formProps: FormProps;
};

const Search = (props: SearchProps) => {
  const { col = 4, fields = [], formProps } = props;

  const fieldsMemo = useMemo(() => {
    console.log(fields);

    return renderFormItems(fields, col);
  }, [fields, col]);

  return (
    <Form {...formProps}>
      {fieldsMemo.map((item, i) => {
        return (
          <Row key={i} gutter={[16, 16]}>
            {item.map((u, j) => {
              return (
                <Col key={j} span={Math.floor((24 / col) * u.colSpan)}>
                  {u.widget === 'input' ? (
                    <Form.Item label={u.label} {...u.widgetItemProps}>
                      <Input {...u.widgetProps} />
                    </Form.Item>
                  ) : (
                    ''
                  )}
                  {u.widget === 'button' ? (
                    <Form.Item {...u.widgetItemProps}>
                      {u.widgetRender ? (
                        u.widgetRender()
                      ) : (
                        <Button {...u.widgetProps}>{u.label}</Button>
                      )}
                    </Form.Item>
                  ) : (
                    ''
                  )}
                  {u.widget === 'select' ? (
                    <Form.Item label={u.label} {...u.widgetItemProps}>
                      <Select {...u.widgetProps} />
                    </Form.Item>
                  ) : (
                    ''
                  )}
                  {u.widget === 'textarea' ? (
                    <Form.Item label={u.label} {...u.widgetItemProps}>
                      <TextArea {...u.widgetProps} />
                    </Form.Item>
                  ) : (
                    ''
                  )}
                  {u.widget === 'input_number' ? (
                    <Form.Item label={u.label} {...u.widgetItemProps}>
                      <InputNumber {...u.widgetProps} />
                    </Form.Item>
                  ) : (
                    ''
                  )}
                </Col>
              );
            })}
          </Row>
        );
      })}
    </Form>
  );
};

export default Search;
