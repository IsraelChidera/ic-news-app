import react from 'react';
import Box from '../../UI/Box';

const Navbar = () =>{

    return(
        <nav className=" ">
            <Box className="flex justify-between items-center w-full">
                <form className="relative">
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
        </nav>
    )
}

export default Navbar