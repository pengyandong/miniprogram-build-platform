import { Space, Table, Button } from 'antd';
import { Link } from 'react-router-dom'
import React from 'react';
import './index.css';

const Main = () => {
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
      render: (row, record) => (
        <Space size="middle">
          <a onClick={() => handleBuild(row)}>打包</a>
          <a>查看二维码</a>
          <a>编辑</a>
          <a>删除</a>
        </Space>
      ),
    },
  ];

  // { val: 'la', text: 'LAVAZZA' },
  // { val: 'taco', text: 'Taco Bell' },
  // { val: 'cj', text: 'COFFIIJOY' },
  // { val: 'kpro', text: 'KPRO' },
  // { val: 'ls', text: '小肥羊' },
  // { val: 'yyzzc', text: '爷爷自在茶' },

  // { val: 'wx94b22b21917c853b', text: '明略LA-wx94b22b21917c853b' },
  // { val: 'wx3600f89be94009c0', text: '明略TACO-wx3600f89be94009c0' },
  // { val: 'wx7a249f9622fe6b3a', text: '明略CJ-wx7a249f9622fe6b3a' },
  // { val: 'wx654fecbb82df03e7', text: '明略KPRO-wx654fecbb82df03e7' },
  // { val: 'wx6bab47d0a1bb313fb', text: '明略LS-wx6bab47d0a1bb313fb' },
  // { val: 'wxf28c25031a5782f8', text: '明略YYZZC-wxf28c25031a5782f8' },
  // { val: 'wxfa5daadc1b061727', text: 'LAVAZZA官方-wxfa5daadc1b061727' },
  // { val: 'wxefef6afb5a1a8adc', text: 'TACO BELL-wxefef6afb5a1a8adc' },
  // { val: 'wx84f1ea2525503203', text: 'COFFIIJOY-wx84f1ea2525503203' },
  // { val: 'wx5803fcfde49f4e9a', text: 'KPRO俱乐部-wx5803fcfde49f4e9a' },
  // { val: 'wxd0274ac24bbca39d', text: '小肥羊点餐-wxd0274ac24bbca39d' },
  // { val: 'wxefef6afb5a1a8adc', text: '爷爷自在茶-wxefef6afb5a1a8adc' },

  const handleBuild = (row) => {
    console.log(row)
  }

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
