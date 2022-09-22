import React from 'react';
import '../../App.scss';
import Box from '../../UI/Box';
import Text from '../../UI/Text';
import logo from '../images/logo.png';
import {NavLink} from 'react-router-dom';

const SideNav = () => {
  return (
    <nav className="sidenav">
         
        <NavLink to="/">
            <Box className="px-6 flex items-center space-x-4 mt-2 mb-6">
                <img
                    src={logo}
                    alt="logo icon"
                    className="logo"
                />
                <span className="text-lg font-bold text-primary">
                    IC News
                </span>
            </Box>
        </NavLink>
        
        {/* navlinks */}
        <Box className="navlinks mt-10 space-y-6">
            <div className="links">
                <NavLink 
                    to="/"
                    className={({ isActive }) =>
                        isActive ? ' actives px-4 py-1 rounded-r-2xl' 
                        : 
                        ' text-textColor px-4 py-1'
                    }     
                >
                    <span className="flex px-6 items-center space-x-3 text-textColor">
                        <span>
                            <i className="fa-sharp  fa-solid fa-house"></i>
                        </span>
                        <span>
                            Top Stories
                        </span>
                    </span>                    
                </NavLink>
            </div>            

            <div className="links">
                <NavLink 
                    to="/foreign"
                    className={({ isActive }) =>
                        isActive ? ' actives px-4 py-1 rounded-r-2xl' 
                        : 
                        ' text-textColor px-4 py-1'
                    }     
                >
                    <span className="flex px-6 items-center space-x-3 text-textColor">
                        <span>
                            <i className="fa-solid fa-money-bill-trend-up"></i>
                        </span>
                        <span>
                            Business
                        </span>
                    </span>                    
                </NavLink>
            </div>

            <div className="links">
                <NavLink 
                    to="/health"
                    className={({ isActive }) =>
                        isActive ? ' actives px-4 py-1 rounded-r-2xl' 
                        : 
                        ' text-textColor px-4 py-1'
                    }     
                >
                    <span className="flex px-6 items-center space-x-3 text-textColor">
                        <span>
                            <i className="fa-solid fa-dna"></i>
                        </span>
                        <span>
                            Health
                        </span>
                    </span>                    
                </NavLink>
            </div>

            <div className="links">
                <NavLink 
                    to="/entertainment"
                    className={({ isActive }) =>
                        isActive ? ' actives px-4 py-1 rounded-r-2xl' 
                        : 
                        ' text-textColor px-4 py-1'
                    }     
                >
                    <span className="flex px-6 items-center space-x-3 text-textColor">
                        <span>
                            <i className="fa-solid fa-music"></i>
                        </span>
                        <span>
                            Entertainment
                        </span>
                    </span>                    
                </NavLink>
            </div>

            <div className="links">
                <NavLink 
                    to="/sport"
                    className={({ isActive }) =>
                        isActive ? ' actives px-4 py-1 rounded-r-2xl' 
                        : 
                        ' text-textColor px-4 py-1'
                    }      
                >
                    <span className="flex px-6 items-center space-x-3 text-textColor">
                        <span>
                            <i className="fa-solid fa-medal"></i>
                        </span>
                        <span>
                            Sports
                        </span>
                    </span>                    
                </NavLink>
            </div>
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