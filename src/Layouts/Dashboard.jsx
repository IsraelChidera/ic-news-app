import React, {useState} from 'react';
import Box from '../UI/Box';
import Text from '../UI/Text';
import Processing from './Processing';
import CustomBlock from './CustomBlock';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, Button, Modal } from 'antd';
import '../assets/components/_marketPlace.scss';

const Dashboard = () => {
    
    const [isShown, setIsShown] = useState(true);
    const processingScreenHandler = () => !isShown && setIsShown(true);
    const customScreenHandler = () => isShown && setIsShown(false);

    

  return (
    <Box className='marketplace'>
        <Text className="marketplaceHeader">
            MarketPlace
        </Text>

        <Box className='mt-10 marketPlaceInput'>
            <input
                type="text"
                placeholder='search'               
            />    
        </Box>

        <Box className='mt-10'>
            <Box>
                <Menu 
                    mode="horizontal" 
                    defaultSelectedKeys={['processing']}
                    style={{background:"#212529", color:"#fff"}}
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