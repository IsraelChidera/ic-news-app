import React, {useState} from 'react';
import Box from '../UI/Box';
import Text from '../UI/Text';
import Processing from './Processing';
import CustomBlock from './CustomBlock';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, Button, Modal } from 'antd';

const Dashboard = () => {
    
    const [isShown, setIsShown] = useState(true);
    const processingScreenHandler = () => !isShown && setIsShown(true);
    const customScreenHandler = () => isShown && setIsShown(false);

    

  return (
    <Box className='pt-4 mx-auto w-full'>
        <Text className="text-2xl font-bold">
            MarketPlace
        </Text>

        <Box className='mt-10'>
            <input
                type="text"
                placeholder='search'
                className='py-2 w-full pl-2 border rounded-md'
            />    
        </Box>

        <Box className='mt-10'>
            <Box>
                <Menu 
                    mode="horizontal" 
                    defaultSelectedKeys={['processing']}
                >
                    <Menu.Item 
                        key="processing" 
                        onClick={processingScreenHandler}
                    >
                        Processing {"(179)"}
                    </Menu.Item>

                    <Menu.Item 
                        key="custom" 
                        onClick={customScreenHandler}
                    >
                        Custom block {"(0)"}
                    </Menu.Item>
                </Menu>
            </Box>

            <Box className='mt-6'>                
                <Box>
                    {isShown ? <Processing /> : <CustomBlock />}
                </Box>
            </Box>
        </Box>

        
    </Box>
  )
}

export default Dashboard