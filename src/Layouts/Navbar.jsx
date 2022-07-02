import { 
    AppstoreOutlined,
    BlockOutlined,
    FlagOutlined,
    FullscreenOutlined,
    LockOutlined,
    NodeCollapseOutlined, 
    NotificationOutlined, 
    SearchOutlined, 
    UserOutlined
} from '@ant-design/icons';
import React from 'react';
import Box from '../UI/Box';
import Text from '../UI/Text';
import {Avatar} from 'antd';
import '../assets/components/_navbar.scss';

const Navbar = () => {
  return (
    <Box className='navbar'>
        <Box className='menuSearch'>
            <Box className='closeMenuIcon'>
                <NodeCollapseOutlined style={{fontSize:"20px"}}/>
            </Box>

            <Box className="navbarSearch">
                <Box className='search-icon'>
                    <SearchOutlined />
                </Box>
                <input
                    type="text"
                    placeholder='Search'
                    className="pl-6 py-1"
                />    
            </Box>
        </Box>

        <Box className='navICons'>
            <Box className='navIconsContainer'>
                <Box className="navIcon">
                    <FlagOutlined style={{fontSize:"20px"}}/>
                </Box>
                <Box className="navIcon">
                    <AppstoreOutlined style={{fontSize:"20px"}}/>
                </Box>
                <Box className="navIcon">
                    <LockOutlined style={{fontSize:"20px"}}/>
                </Box>
                <Box className="navIcon">
                    <BlockOutlined style={{fontSize:"20px"}}/>
                </Box>
                <Box className="navIcon">
                    <FullscreenOutlined style={{fontSize:"20px"}}/>
                </Box>
                <Box className="navIcon">
                    <NotificationOutlined style={{fontSize:"20px"}}/>
                </Box>
            </Box>

            <Box 
                style={{background: "#31373c"}}
                className='profile'
            >
                <Box className='avatar'>
                    <Avatar  icon={<UserOutlined />} />
                </Box>

                <Box>
                    <Text className='profileName'>
                        Anna Adame
                    </Text>
                    <Text 
                        style={{color: "#878a99"}}
                        className='profileRole'
                    >
                        Founder
                    </Text>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Navbar