import { Space, Table, Button } from 'antd';
import { Link } from 'react-router-dom'
import React from 'react';
import './index.css';

const data = [
  {
    programeName: 'LA',
    version: '1.0.1',
    tips: '',
    appId: 'abcsa2454654656',
    env: 'dev',
    action: ''
  },
];

const columns = [
  {
    title: '小程序',
    dataIndex: 'programeName',
    key: 'programeName',
  },
  {
    title: '版本号',
    dataIndex: 'version',
    key: 'version',
  },
  {
    title: '备注',
    dataIndex: 'tips',
    key: 'tips',
  },
  {
    title: 'AppId',
    dataIndex: 'appId',
    key: 'appId',
  },
  {
    title: '环境',
    dataIndex: 'env',
    key: 'env',
  },
  {
    title: '操作',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>打包</a>
        <a>查看二维码</a>
        <a>编辑</a>
        <a>删除</a>
      </Space>
    ),
  },
];

const Main = () => {
  return (
    <div className="Main">
      <Link to={'/add'}>
        <Button className="btn" type="primary">新增</Button>
      </Link>
      <Table
        className="table"
        columns={columns}
        dataSource={data}
      />
    </div>
  );
}

export default Main;
