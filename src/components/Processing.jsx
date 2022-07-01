import { GoldOutlined, UserOutlined } from '@ant-design/icons';
import React, {useState} from 'react';
import Box from '../UI/Box';
import Text from '../UI/Text';
import { Menu, Button, Modal, Avatar } from 'antd';
import Modals from './Modal';

const Processing = () => {
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
      setIsModalVisible(false);
  };

  const handleCancel = () => {
      setIsModalVisible(false);
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <Box className='grid-cols-3 grid gap-4'>
        <Box 
          className='border cursor-pointer'
          onClick={showModal}  
        >
          <Box className='px-2 py-6 flex '>
            <Box className='mr-2'>
                <Avatar  icon={<UserOutlined />} />
            </Box>

            <Box>
              <Text className='font-bold w-9/12'>
                Building Bounding Box Detector
              </Text>
              <Text className="text-sm">
                By Picterra
              </Text>
            </Box>
          </Box>

          <Box 
            className='flex justify-between items-center 
              border-t-2 px-4 py-1 mt-4'
          >
            <Text>
              <GoldOutlined />
              1000 per km
            </Text>

            <Text>
              <GoldOutlined />
                1.1.0 public
            </Text>
          </Box>
        </Box>

        <Modal 
          // title="Basic Modal" 
          visible={isModalVisible} 
          onOk={handleOk} 
          onCancel={handleCancel}          
        >
          <Modals/>
        </Modal>

        <Box className='border cursor-pointer'>
          <Box className='px-2 py-6 flex '>
            <Box className='mr-2'>
                <Avatar  icon={<UserOutlined />} />
            </Box>

            <Box>
              <Text className='font-bold w-9/12'>
                Building Detection
              </Text>
              <Text className="text-sm">
                By Aventior
              </Text>
            </Box>
          </Box>

          <Box 
            className='flex justify-between items-center 
              border-t-2 px-4 py-1 mt-4'
          >
            <Text>
              <GoldOutlined />
              200 per km
            </Text>

            <Text>
              <GoldOutlined />
                2.3.0 public
            </Text>
          </Box>
        </Box>

        <Box className='border cursor-pointer'>
          <Box className='px-2 py-6 flex '>
            <Box className='mr-2'>
                <Avatar  icon={<UserOutlined />} />
            </Box>

            <Box>
              <Text className='font-bold w-9/12'>
                Change Detector
              </Text>
              <Text className="text-sm">
                By Spacept
              </Text>
            </Box>
          </Box>

          <Box 
            className='flex justify-between items-center 
              border-t-2 px-4 py-1 mt-4'
          >
            <Text>
              <GoldOutlined />
              1000 per km
            </Text>

            <Text>
              <GoldOutlined />
                1.1.0 public
            </Text>
          </Box>
        </Box>


    </Box>
  )
}

export default Processing