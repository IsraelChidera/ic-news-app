import React from 'react';
import '../../App.scss';
import Box from '../../UI/Box';
import Text from '../../UI/Text';
import logo from '../images/logo.png';
import hamburger from '../images/hamburger.svg';
import {NavLink} from 'react-router-dom';

const SideNav = () => {
  return (
    <nav className="sidenav relative md:block hidden ">
         <div className="md:hidden flex items-center absolute top-4 right-0">
            <img
                src={hamburger}
                alt="hamburger icon"
            />
        </div>

        <NavLink to="/">
            <Box className="flex pl-6 md:pl-0 md:justify-center items-center ">
                
                <Box className="px-0 md:px-6 flex items-center space-x-4 mt-8 md:mt-4 mb-6">
                    <img
                        src={logo}
                        alt="logo icon"
                        className="logo"
                    />
                    <span className="text-lg font-bold text-primary">
                        IC News
                    </span>
                </Box>
                
            </Box>
        </NavLink>
        
        {/* navlinks */}
        <Box className=" mt-10 ">
           
                <NavLink 
                    to="/"
                    className={({ isActive }) =>
                        isActive ? 'bg-primary  hover:text-white text-white block px-4 py-1 rounded-r-2xl' 
                        : 
                        ' text-textColor px-4 py-1'
                    }     
                >
                    <div className="flex px-6 items-center space-x-3 ">
                        <div>
                            <i className="fa-sharp  fa-solid fa-house"></i>
                        </div>
                        <div>
                            Top Stories
                        </div>
                    </div>                    
                </NavLink>
                     

            
                <NavLink 
                    to="/foreign"
                    className={({ isActive }) =>
                        isActive ? 'block text-white hover:text-white bg-primary w-full px-4 py-1 rounded-r-2xl' 
                        : 
                        ' text-textColor px-4 py-1'
                    }     
                >
                    <span className="flex px-6 items-center space-x-3 ">
                        <span>
                            <i className="fa-solid fa-money-bill-trend-up"></i>
                        </span>
                        <span>
                            Business
                        </span>
                    </span>                    
                </NavLink>

            
                <NavLink 
                    to="/health"
                    className={({ isActive }) =>
                        isActive ? 'block text-white hover:text-white bg-primary w-full px-4 py-1 rounded-r-2xl' 
                        : 
                        ' text-textColor px-4 py-1'
                    }     
                >
                    <span className="flex px-6 items-center space-x-3 ">
                        <span>
                            <i className="fa-solid fa-dna"></i>
                        </span>
                        <span>
                            Health
                        </span>
                    </span>                    
                </NavLink>
           
            
                <NavLink 
                    to="/entertainment"
                    className={({ isActive }) =>
                        isActive ? 'block text-white hover:text-white bg-primary w-full px-4 py-1 rounded-r-2xl' 
                        : 
                        ' text-textColor px-4 py-1'
                    }     
                >
                    <span className="flex px-6 items-center space-x-3 ">
                        <span>
                            <i className="fa-solid fa-music"></i>
                        </span>
                        <span>
                            Entertainment
                        </span>
                    </span>                    
                </NavLink>
            

            
                <NavLink 
                    to="/sport"
                    className={({ isActive }) =>
                        isActive ? 'block text-white hover:text-white bg-primary w-full px-4 py-1 rounded-r-2xl' 
                        : 
                        ' text-textColor px-4 py-1'
                    }      
                >
                    <span className="flex px-6 items-center space-x-3 ">
                        <span>
                            <i className="fa-solid fa-medal"></i>
                        </span>
                        <span>
                            Sports
                        </span>
                    </span>                    
                </NavLink>
           
        </Box>

        <Box className="bg-primary mt-16 mx-4 rounded text-white p-4">
            <Text>
                Subscribe to Premium
            </Text>

            <form className="flex flex-col">                
                <input
                    type="submit"
                    value="Subscribe"
                    className="ip2 px-4 text-center 
                    py-2 text-sm mt-2"
                />
            </form>
        </Box>
    </nav>
  )
}

export default SideNav