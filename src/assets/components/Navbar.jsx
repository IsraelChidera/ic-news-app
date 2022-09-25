import react, {useState} from 'react';
import Box from '../../UI/Box';
import Text from '../../UI/Text';
import logo from '../images/logo.png';
import hamburger from '../images/hamburger.svg';
import {NavLink} from 'react-router-dom';

const Navbar = ({handleMobileMenu}) =>{
    // const [open, setOpen] = useState(false);

    // const handleMobileMenu = () => {
    //     alert("yrs");
    //     setOpen(!open);
    // }

    return(
        <nav className=" ">
            <Box className="hidden lg:flex justify-between items-center w-full">                

                <form className="relative ">
                    <input
                        type="text"
                        placeholder="Search for news"
                        className="bg-textColor inp w-96 pl-3 py-2"
                    />

                    <i className="fa-solid fa-magnifying-glass
                        absolute top-3 right-4"></i>
                </form>
                
                <Box className="flex items-center space-x-6">
                    <Box className="flex items-center space-x-2">
                        <span>
                            <i className="text-lg fa-solid fa-user"></i>
                        </span>

                        <span>
                            My Profile
                        </span>
                    </Box>

                    <span>
                        <i className="fa-solid fa-angle-down"></i>
                    </span>
                </Box>
            </Box>

            <Box className="mobileview lg:hidden">
                
                <Box className="flex justify-between items-center ">
                    <Box className="flex justify-center items-center">
                        <Box className="lg:hidden hidden flex items-center">
                            <img
                                src={hamburger}
                                alt="hamburger icon"
                                onClick={handleMobileMenu}
                            />
                        </Box>
                        
                        <NavLink to="/">
                            <Box className="flex justify-center items-center">
                                
                                <Box className="px-0 md:px-6 flex items-center space-x-4 mt-2 mb-6">
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
                    </Box>
                    
                    <Box className="flex items-center justify-end space-x-6">
                        <form className="relative ">
                            <i className="fa-solid fa-magnifying-glass
                                "></i>
                        </form>
                        
                        <Box className="hidden lg:flex items-center space-x-6">
                            <Box className="flex items-center space-x-2">
                                <span>
                                    <i className="text-lg fa-solid fa-user"></i>
                                </span>

                                <span>
                                    My Profile
                                </span>
                            </Box>

                            <span>
                                <i className="fa-solid fa-angle-down"></i>
                            </span>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </nav>
    )
}

export default Navbar