import { Form, Input, Table, Typography, Select, Space } from 'antd';
import React, { useState } from 'react';
import { originData, envList } from './data'

const { Option } = Select;

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = dataIndex === 'tips' ? <Input placeholder="请输入备注" /> : <Input />;
  return (
    <td {...restProps}>
      {editing && dataIndex === 'env' ? (
        <Form.Item
          name="env"
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            placeholder="请选择环境"
            allowClear
          >
            {
              envList.map((item, index) => (
                <Option value={item.val} key={index}>{item.text}</Option>
              ))
            }
          </Select>
        </Form.Item>
      ) : editing && dataIndex === 'appid' ? (
        <Form.Item
          name="appid"
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            placeholder="请选择appId"
            allowClear
          >
            {
              record.appidList.map((item, index) => (
                <Option value={item.val} key={index}>{item.text}</Option>
              ))
            }
          </Select>
        </Form.Item>
      ) : editing && dataIndex !== 'name' ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              messversion: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const App = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');

  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      name: '',
      version: '',
      tips: '',
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const handleBuild = (record) => {
    console.log(record)
  }

  const columns = [
    {
      title: '小程序',
      dataIndex: 'name',
      width: '10%',
      editable: true,
    },
    {
      title: '分支',
      dataIndex: 'branch',
      width: '15%',
      editable: true,
    },
    {
      title: '版本号',
      dataIndex: 'version',
      width: '15%',
      editable: true,
    },
    {
      title: '备注',
      dataIndex: 'tips',
      width: '15%',
      editable: true,
    },
    {
      title: '环境',
      dataIndex: 'env',
      width: '10%',
      editable: true,
    },
    {
      title: 'AppId',
      dataIndex: 'appid',
      width: '20%',
      editable: true,
    },
    {
      title: '操作',
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              保存
            </Typography.Link>
            <a onClick={cancel}>取消</a>
          </span>
        ) : (
          <Space size="middle">
            <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
              编辑
            </Typography.Link>
            <Typography.Link disabled={editingKey !== ''} onClick={() => handleBuild(record)}>
            打包
            </Typography.Link>
            <Typography.Link disabled={editingKey !== ''} onClick={() => {}}>
            二维码
            </Typography.Link>
          </Space>
        );
      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};

export default App;