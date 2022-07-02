import { GoldOutlined } from '@ant-design/icons';
import React, {useState} from 'react';
import Box from '../UI/Box';
import Text from '../UI/Text';
import { Menu } from 'antd';

const Modal = () => {

    const [isShown, setIsShown] = useState(true);
    const overviewScreenHandler = () => !isShown && setIsShown(true);
    const sampledataScreenHandler = () => isShown && setIsShown(false);

  return (
    <Box className=''>
        <Box className='flex '>
            <Box className='flex items-center mr-2'>
                <Box className='w-2 h-2 rounded-full bg-gray-300'>
                </Box>
            </Box>
            <Text className="font-bold text-sm">
                Marketplace
            </Text>
        </Box>

        <Box className='flex mt-6'>
        
            <Box className='bg-gray-400 w-40 h-40 border mr-6'>
            </Box>
            
            <Box>
                <Text className='text-2xl'>
                    Building Bounding Box Detector
                </Text>

                <Box className='text-sm mt-2 flex font-bold'>
                    <Text>
                        Picherra
                    </Text>

                    <Text className='mx-3 flex justify-center items-center'>
                        <GoldOutlined className='mr-1'/>{" "} 100 per km
                    </Text>

                    <Text className='flex justify-center items-center'>
                        <GoldOutlined className='mr-1'/>{" "} 2.0.0 public+1
                    </Text>
                </Box>

                <Box className='mt-6'>
                    <button
                        className='bg-gray-200 rounded-full 
                            px-2 py-1 text-xs font-bold m-2'
                    >
                        Machine Learning
                    </button>

                    <button
                        className='bg-gray-200 rounded-full 
                            px-2 py-1 text-xs font-bold m-2'
                    >
                        Object
                    </button>

                    <button
                        className='bg-gray-200 rounded-full 
                            px-2 py-1 text-xs font-bold m-2'
                    >
                        Lead and acid Management
                    </button>

                    <button
                        className='bg-gray-200 rounded-full 
                            px-2 py-1 text-xs font-bold m-2'
                    >
                        Analytics
                    </button>
                </Box>

                <Text className='text-sm mt-4'>
                    Finds bounding bones around clearly separated bindings
                </Text>
            </Box>

        </Box>

        <Box className='mt-6'>
            <Menu 
                mode="horizontal" 
                defaultSelectedKeys={['overview']}
            >
                <Menu.Item 
                    key="overview" 
                    onClick={overviewScreenHandler}
                >
                    Overview 
                </Menu.Item>

                <Menu.Item 
                    key="sampleData" 
                    onClick={sampledataScreenHandler}
                >
                    Sample data
                </Menu.Item>
            </Menu>
        </Box>

        <Box>
            {
               isShown?
                <Box     
                    className='mt-4'               
                >
                    <Text className='font-bold text-lg'>
                       1. Description 
                    </Text>

                    <Text className='mt-2 text-sm'>
                        Change Detector normalizes the 
                        lighting of two images and then 
                        detects changes between them, 
                        returning a change map.
                    </Text>
                </Box> 
                :
                <Box>
                    Sample Data
                </Box>
            }
        </Box>

    </Box>
  )
}

export default Modal