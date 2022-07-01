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

const Navbar = () => {
  return (
    <Box className='bg-blue-500
        text-white px-4  flex justify-between items-center'
    >
        <Box className='flex py-4 items-center justify-center'>
            <Box className='mr-4'>
                <NodeCollapseOutlined className='text-2xl'/>
            </Box>

            <Box className="relative">
                <Box className='absolute top-0 left-1 text-black'>
                    <SearchOutlined />
                </Box>
                <input
                    type="text"
                    placeholder='Search'
                    className="pl-6 py-1"
                />    
            </Box>
        </Box>

        <Box className='flex '>
            <Box className='flex justify-between items-center'>
                <Box className="mr-4">
                    <FlagOutlined className="text-2xl" />
                </Box>
                <Box className="mr-4">
                    <AppstoreOutlined className="text-2xl"/>
                </Box>
                <Box className="mr-4">
                    <LockOutlined className="text-2xl"/>
                </Box>
                <Box className="mr-4">
                    <BlockOutlined className="text-2xl"/>
                </Box>
                <Box className="mr-4">
                    <FullscreenOutlined className="text-2xl"/>
                </Box>
                <Box className="mr-4">
                    <NotificationOutlined className="text-2xl"/>
                </Box>
            </Box>

            <Box className='bg-blue-400 flex px-2 py-4'>
                <Box className='mr-2'>
                    <Avatar  icon={<UserOutlined />} />
                </Box>

                <Box >
                    <Text className='text-sm font-bold'>
                        Anna Adame
                    </Text>
                    <Text className='text-xs'>
                        Founder
                    </Text>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Navbar