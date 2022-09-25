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

      <Box className="text-base scrollmenu flex space-x-4 md:space-x-10 items-center mb-4 mt-2">
          <Text className="scrollmenuLinks">
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

          <Text className="scrollmenuLinks">
            <NavLink 
              to="/foreign"
              className={({ isActive }) =>
              isActive ? 'bg-primary text-white hover:text-white px-4 py-1 rounded-2xl' 
              : 
              'bg-white text-textColor px-4 py-1 rounded-2xl'
              }  
            >
              Business News
            </NavLink>              
          </Text>
          
          <Text className="scrollmenuLinks">
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

          <Text className="scrollmenuLinks">
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

          <Text className="scrollmenuLinks">
            <NavLink 
              to="/entertainment"
              className={({ isActive }) =>
              isActive ? 'bg-primary text-white hover:text-white px-4 py-1 rounded-2xl' 
              : 
              'bg-white text-textColor px-4 py-1 rounded-2xl'
              }  
            >
              Entertainment News
            </NavLink>              
          </Text>
      </Box>      

      <Outlet />
    </main>
  )
}

export default News