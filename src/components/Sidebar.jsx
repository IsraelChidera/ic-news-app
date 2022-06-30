import React from 'react';
import Box from '../UI/Box';
import Text from '../UI/Text';
import { 
  AppstoreOutlined, 
  MinusOutlined, 
  ContainerOutlined,
  DesktopOutlined,
  PieChartOutlined,
  AppstoreAddOutlined,
  LayoutOutlined,
} from '@ant-design/icons';
import { Button, Menu, Typography, Avatar} from 'antd';
import {NavLink} from 'react-router-dom';
import '../App.css';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  // getItem('Dashboard', '1', <AppstoreOutlined />),
  // getItem('Option 2', '2', <DesktopOutlined />),
  // getItem('Option 3', '3', <ContainerOutlined />),
  getItem('Dashboard', 'sub1', <AppstoreOutlined />, [
    getItem('Analytics', '5', <MinusOutlined />),
    getItem('CRM', '6', <MinusOutlined />),
    getItem('Ecommerce', '7', <MinusOutlined />),
    getItem('Crypto', '8', <MinusOutlined />),
    getItem('Projects', '9', <MinusOutlined />),
    getItem('NFT', '10', <MinusOutlined />),
  ]),
  getItem('Apps', 'sub2', <AppstoreAddOutlined />, [
    getItem('Option 9', '11'),
    getItem('Option 10', '12'),
    getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
  ]),
  getItem('Layouts', 'sub2', <LayoutOutlined />, [
    getItem('Option 9', '14'),
    getItem('Option 10', '15'),
    getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '16')]),
  ]),
];

const itemTwo = [
  // getItem('Dashboard', '1', <AppstoreOutlined />),
  // getItem('Option 2', '2', <DesktopOutlined />),
  // getItem('Option 3', '3', <ContainerOutlined />),
  // getItem('Dashboard', 'sub1', <AppstoreOutlined />, [
  //   getItem('Analytics', '5', <MinusOutlined />),
  //   getItem('CRM', '6', <MinusOutlined />),
  //   getItem('Ecommerce', '7', <MinusOutlined />),
  //   getItem('Crypto', '8', <MinusOutlined />),
  //   getItem('Projects', '9', <MinusOutlined />),
  //   getItem('NFT', '10', <MinusOutlined />),
  // ]),
  getItem('Authentication', 'sub2', <AppstoreAddOutlined />, [
    getItem('Option 9', '11'),
    getItem('Option 10', '12'),
    getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
  ]),
  getItem('Pages', 'sub2', <LayoutOutlined />, [
    getItem('Option 9', '14'),
    getItem('Option 10', '15'),
    getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '16')]),
  ]),
  getItem('Landing', 'sub2', <LayoutOutlined />, [
    getItem('Option 9', '17'),
    getItem('Option 10', '18'),    
  ]),
];

const Sidebar = () => {

  const onClick = (e) => {
    console.log('click ', e);
  };

  return (
    <Box>
        
      <Box 
        className=''
      >
        <Text className='pt-6 pb-10 text-2xl text-white text-center font-bold'>
          Velzon
        </Text>
      </Box>


      <Box className='text-white'>
        <Text className='text-xs pl-2'>
          Menu
        </Text>

        <Menu
          onClick={onClick}
          // style={{
          //   width: 256,
          // }}
          // defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          items={items}
          theme="dark"
        />

        <Text className='text-xs pl-2 pt-6'>
          Pages
        </Text>

        <Menu
          onClick={onClick}
          // style={{
          //   width: 256,
          // }}
          // defaultSelectedKeys={['1']}
          // defaultOpenKeys={['sub1']}
          mode="inline"
          items={itemTwo}
          theme="dark"
        />
      </Box>
    </Box>
  )
}

export default Sidebar