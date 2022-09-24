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
import Text from './UI/Text';
import {Routes, Route} from 'react-router-dom';
import AllNews from './assets/components/AllNews';
import News from './assets/components/News';
import { NewsContextProvider } from './context/NewsContext';
import EntertainmentNews from './assets/components/EntertainmentNews';

function App() {
  return (
    <NewsContextProvider>
      <Box 
        className="App bg-bgColor relative"
      >
        <Box className='sidenav fixed top-0 left-0 h-full z-10 '>
          < SideNav />
        </Box>

        <Box className="ml-0 md:ml-52 px-6">

          <Box className='navbar py-4 z-20 sticky top-0'>
            <Navbar />
          </Box>
          
          <Box className=" mt-10 md:grid grid-cols-4 gap-4">
            <Box className="mainpage col-span-3 ">
            
              <Routes>
                {/* <Route path="/" element={< Home />}/> */}

                <Route element={< News />}>
                  <Route path="/" element={ < AllNews />}/>
                  <Route path="health" element={ < HealthNews />}/>
                  <Route path="foreign" element={ < WorldNews />}/>
                  <Route path="sport" element={ < SportNews />}/>
                  <Route path="entertainment" element={ < EntertainmentNews />}/>
                </Route>

                <Route path="/news/:id" element={ < More />}/>
              </Routes>  

              <Box 
                className="border-t border-textColor opacity-60 font-xs
                py-4 text-textColor flex justify-between items-center
                mt-20"
              >
                  <Text>
                    &copy; IC News, 2022
                  </Text>

                  <Text>
                    Developed by Israel Chidera
                  </Text>
              </Box>          
            </Box>

            <Box className="bg-blue-500 sidebar md:block hidden">
              < Sidebar />
            </Box>
          </Box>

        </Box>            
        
      </Box>
    </NewsContextProvider>
  );
}

export default App;
