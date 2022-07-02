import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Navbar from './Layouts/Navbar';
import Dashboard from './Layouts/Dashboard';
import MarketPlace from './Layouts/MarketPlace';
import Sidebar from './Layouts/Sidebar';
import Box from './UI/Box';



function App() {
  return (
    <Box 
      className="App flex"
    >

      <Box className='sidebar text-white h-screen 
        w-52 overflow-auto
        fixed top-0 left-0
        '
      >
        <Sidebar />        
      </Box>

      <Box         
        className='main ml-52'
      >
        <Box>
          <Navbar/>
        </Box>

        <Box className='px-10'>
          <Routes>
            <Route exact path="/" element={ <Dashboard/> } />
            <Route exact path="/marketplace" element={ <MarketPlace/> } />
          </Routes>
        </Box>
      </Box>

    </Box>
  );
}

export default App;
