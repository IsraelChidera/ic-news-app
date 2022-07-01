import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import MarketPlace from './components/MarketPlace';
import Sidebar from './components/Sidebar';
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

      <Box className='main ml-52'>
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
