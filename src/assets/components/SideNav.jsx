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
        

        <Box className="navlinks mt-10 space-y-6">
            <div className="links">
                <NavLink to="/">
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
                <a href="#">
                    <span className="flex px-6 items-center space-x-3 text-textColor">
                        <span>
                            <i className="fa-solid fa-globe"></i>
                        </span>
                        <span>
                            Around the World
                        </span>
                    </span>                    
                </a>
            </div>

            <div className="links">
                <a href="#">
                    <span className="flex px-6 items-center space-x-3 text-textColor">
                        <span>
                            <i className="fa-solid fa-money-bill-trend-up"></i>
                        </span>
                        <span>
                            Business
                        </span>
                    </span>                    
                </a>
            </div>

            <div className="links">
                <a href="#">
                    <span className="flex px-6 items-center space-x-3 text-textColor">
                        <span>
                            <i className="fa-solid fa-dna"></i>
                        </span>
                        <span>
                            Health
                        </span>
                    </span>                    
                </a>
            </div>

            <div className="links">
                <a href="#">
                    <span className="flex px-6 items-center space-x-3 text-textColor">
                        <span>
                            <i className="fa-solid fa-music"></i>
                        </span>
                        <span>
                            Entertainment
                        </span>
                    </span>                    
                </a>
            </div>

            <div className="links">
                <a href="#">
                    <span className="flex px-6 items-center space-x-3 text-textColor">
                        <span>
                            <i className="fa-solid fa-medal"></i>
                        </span>
                        <span>
                            Sports
                        </span>
                    </span>                    
                </a>
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