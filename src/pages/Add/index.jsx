import { Button, Form, Input, Select } from 'antd';
import React from 'react';
import './index.css';

const { Option } = Select;
const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 12,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 4,
    span: 12,
  },
};

const Add = () => {
  const [form] = Form.useForm();

  const onGenderChange = (value) => {
    switch (value) {
      case 'male':
        form.setFieldsValue({
          note: 'Hi, man!',
        });
        return;

      case 'female':
        form.setFieldsValue({
          note: 'Hi, lady!',
        });
        return;

      case 'other':
        form.setFieldsValue({
          note: 'Hi there!',
        });
    }
  };

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div className="add">
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item
          name="miniProgram"
          label="小程序"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            placeholder="请选择要打包的小程序"
            onChange={onGenderChange}
            allowClear
          >
            <Option value="la">LAVAZZA</Option>
            <Option value="taco">Taco Bell</Option>
            <Option value="cj">COFFIIJOY</Option>
            <Option value="kpro">KPRO</Option>
            <Option value="ls">小肥羊</Option>
            <Option value="yyzzc">爷爷自在茶</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="version"
          label="版本号"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Add;