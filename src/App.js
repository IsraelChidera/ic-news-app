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

function App() {
  return (
    <NewsContextProvider>
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
                {/* <Route path="/" element={< Home />}/> */}

                <Route element={< News />}>
                  <Route path="/" element={ < AllNews />}/>
                  <Route path="health" element={ < HealthNews />}/>
                  <Route path="foreign" element={ < WorldNews />}/>
                  <Route path="sport" element={ < SportNews />}/>
                </Route>

                <Route path="/more" element={ < More />}/>
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

            <Box className="bg-blue-500 sidebar">
              < Sidebar />
            </Box>
          </Box>

        </Box>            
        
      </Box>
    </NewsContextProvider>
  );
}

export default App;

// Via querystring
// GET https://newsapi.org/v2/everything?q=keyword&apiKey=43cbe1bd021346aaa04d29b088bb055b
// Via X-Api-Key HTTP header
// X-Api-Key: 43cbe1bd021346aaa04d29b088bb055b
// Via Authorization HTTP header
// Authorization: 43cbe1bd021346aaa04d29b088bb055b
// 43cbe1bd021346aaa04d29b088bb055b