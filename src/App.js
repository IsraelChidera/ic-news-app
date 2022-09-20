import './App.scss';
import Sidebar from './assets/components/Sidebar';
import SideNav from './assets/components/SideNav';
import Navbar from './assets/components/Navbar';
import WorldNews from './assets/components/WorldNews';
import SportNews from './assets/components/SportNews';
import HealthNews from './assets/components/HealthNews';
import Home from './Pages/Home';
import More from './Pages/More';
import Box from './UI/Box';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Box 
      className="App bg-bgColor relative"
    >
      <Box className='sidenav fixed top-0 left-0 h-full z-10 '>
        < SideNav />
      </Box>

      <Box className="ml-52 px-6">

        <Box className='navbar py-4 z-20 sticky top-0'>
          <Navbar />
        </Box>
        
        <Box className=" mt-10 grid grid-cols-4 gap-4">
          <Box className="mainpage col-span-3 ">
            <Routes>

              <Route path="/" element={< Home />}>
                <Route path="/health" element={ < HealthNews />}/>
                <Route path="/all" element={ < WorldNews />}/>
                <Route path="/sport" element={ < SportNews />}/>
              </Route>

              <Route path="/more" element={ < More />}/>
            </Routes>            
          </Box>

          <Box className="bg-blue-500 sidebar">
            < Sidebar />
          </Box>
        </Box>

      </Box>            
      
    </Box>
  );
}

export default App;
