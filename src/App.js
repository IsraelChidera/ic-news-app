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

      <Box className='sidebar text-white'>
        <Sidebar />        
      </Box>

      <Box className='main'>
        <Box>
          <Navbar/>
        </Box>

        <Routes>
          <Route exact path="/" element={ <Dashboard/> } />
          <Route exact path="/marketplace" element={ <MarketPlace/> } />
        </Routes>
      </Box>

    </Box>
  );
}

export default App;
