import React from 'react';
import Box from '../../UI/Box';
import Text from '../../UI/Text';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
const News = () => {
  return (
    <main>
      <Text className="font-bold text-xl mt-4">
          Top Stories for you
      </Text>

      <Box className=" flex space-x-10 items-center mb-4 mt-2">
          <Text>
            <NavLink 
              to="/"
              className={({ isActive }) =>
              isActive ? 'bg-primary text-white hover:text-white px-4 py-1 rounded-2xl' 
              : 
              'bg-white text-textColor px-4 py-1 rounded-2xl'
              }
            >
              All
            </NavLink>              
          </Text>

          <Text>
            <NavLink 
              to="/all"
              className={({ isActive }) =>
              isActive ? 'bg-primary text-white hover:text-white px-4 py-1 rounded-2xl' 
              : 
              'bg-white text-textColor px-4 py-1 rounded-2xl'
              }  
            >
              World News
            </NavLink>              
          </Text>
          
          <Text>
            <NavLink 
              to="/sport"
              className={({ isActive }) =>
              isActive ? 'bg-primary text-white hover:text-white px-4 py-1 rounded-2xl' 
              : 
              'bg-white text-textColor px-4 py-1 rounded-2xl'
              }  
            >
              Sports News
            </NavLink>              
          </Text>

          <Text>
            <NavLink 
              to="/health"
              className={({ isActive }) =>
              isActive ? 'bg-primary text-white hover:text-white px-4 py-1 rounded-2xl' 
              : 
              'bg-white text-textColor px-4 py-1 rounded-2xl'
              }  
            >
              Health News
            </NavLink>              
          </Text>
      </Box>

      <Box className="bg-white p-4">
          <Text className="font-bold text-base">
            Samsung Galaxy F22 launched in India: 
            Price, features, other details
          </Text>

          <Text>
            Samsung Galaxy F22 has been launched 
            in India. The new smartphone has been 
            priced in the mid-range segment. The new 
            smartphone is powered by a MediaTek chipset 
            and features a high refresh rate AMOLED display.
          </Text>
      </Box>

      <Outlet />
    </main>
  )
}

export default News