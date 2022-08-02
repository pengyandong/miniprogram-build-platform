import { Button, Form, Input, Select } from 'antd';
import React from 'react';
import { history } from 'react-router-dom'
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

const miniProgramList = [
  { val: 'la', text: 'LAVAZZA' },
  { val: 'taco', text: 'Taco Bell' },
  { val: 'cj', text: 'COFFIIJOY' },
  { val: 'kpro', text: 'KPRO' },
  { val: 'ls', text: '小肥羊' },
  { val: 'yyzzc', text: '爷爷自在茶' },
]

const appidList = [
  { val: 'wx94b22b21917c853b', text: '明略LA-wx94b22b21917c853b' },
  { val: 'wx3600f89be94009c0', text: '明略TACO-wx3600f89be94009c0' },
  { val: 'wx7a249f9622fe6b3a', text: '明略CJ-wx7a249f9622fe6b3a' },
  { val: 'wx654fecbb82df03e7', text: '明略KPRO-wx654fecbb82df03e7' },
  { val: 'wx6bab47d0a1bb313fb', text: '明略LS-wx6bab47d0a1bb313fb' },
  { val: 'wxf28c25031a5782f8', text: '明略YYZZC-wxf28c25031a5782f8' },
  { val: 'wxfa5daadc1b061727', text: 'LAVAZZA官方-wxfa5daadc1b061727' },
  { val: 'wxefef6afb5a1a8adc', text: 'TACO BELL-wxefef6afb5a1a8adc' },
  { val: 'wx84f1ea2525503203', text: 'COFFIIJOY-wx84f1ea2525503203' },
  { val: 'wx5803fcfde49f4e9a', text: 'KPRO俱乐部-wx5803fcfde49f4e9a' },
  { val: 'wxd0274ac24bbca39d', text: '小肥羊点餐-wxd0274ac24bbca39d' },
  { val: 'wxefef6afb5a1a8adc', text: '爷爷自在茶-wxefef6afb5a1a8adc' },
]

const envList = [
  { val: 'dev', text: '开发' },
  { val: 'test', text: '测试' },
  { val: 'prod', text: '生产' },
  { val: 'uat', text: 'uat' },
]

const Add = () => {
  const [form] = Form.useForm()

  const onGenderChange = (value) => {
    console.log(value)
  }

  const onChooseId = (value) => {
    console.log(value)
  }

  const onChooseEnv = (value) => {
    console.log(value)
  }

  const onFinish = (values) => {
    const tableList = localStorage.getItem('tableList') || [];
    const param = values
    param.id = Math.random().toString(36).substr(-10)
    tableList.push(param)
    localStorage.setItem('tableList', tableList);
    
    console.log(param)
    console.log(tableList)
    history.goBack()
  }

  return (
    <div className="add">
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item
          name="programeName"
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
            {
              miniProgramList.map((item, index) => (
                <Option value={item.val} key={index}>{item.text}</Option>
              ))
            }
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
        <Form.Item
          name="tips"
          label="备注"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="appId"
          label="AppId"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            placeholder="请选择appId"
            onChange={onChooseId}
            allowClear
          >
            {
              appidList.map((item, index) => (
                <Option value={item.val} key={index}>{item.text}</Option>
              ))
            }
          </Select>
        </Form.Item>
        <Form.Item
          name="env"
          label="环境"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            placeholder="请选择环境"
            onChange={onChooseEnv}
            allowClear
          >
            {
              envList.map((item, index) => (
                <Option value={item.val} key={index}>{item.text}</Option>
              ))
            }
          </Select>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            确定
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Add;