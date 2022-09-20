import React from 'react';
import Box from '../../UI/Box';
import Text from '../../UI/Text';
import '../../App.scss';

const Sidebar = () => {
  return (
    <aside className="sidebar mb-10 pb-4">
        <Box className="bg-white rounded p-4 text-textColor ">
            <Text className="text-tiny">
                Lagos, Nigeria
            </Text>

            <Box>
                <Text className="text-base">
                    Sunny
                </Text>

                <Text className="text-xl font-bold">
                    31C
                </Text>
            </Box>

            <Text className="text-xs">
                20th of September, 2022
            </Text>
        </Box>

        <Box className="my-4 bg-white rounded p-4 text-textColor ">
            <Text className="space-x-3 pb-2">
                <i className="text-textColor fa-solid fa-pen"></i>
                <span>
                    Become a Story Writer
                </span>
            </Text>

            <div className="flex items-center justify-center">
                <p className="text-xs">
                    Contribute stories and start
                    earning
                </p>

                <button 
                    className='text-primary border border-primary 
                    py-0.5 px-2 sidebarbtn'
                >
                    Know More
                </button>
            </div>
        </Box>

        <Box className="mb-4 rounded bg-white p-4">

           <Box>
                <Text className="text-base space-x-3">
                    <i class="fa-solid fa-bookmark"></i>
                    <span>
                        Quick Bytes
                    </span>
                </Text>                
            </Box> 

            <Text className="border-b border-textColor opacity-60"></Text>

            <Text>
                <span className="text-sm text-textColor opacity-60">
                    The price of petrol remained unchanged on July 
                    6 after reaching a new record high on the previous 
                    day, according to a price notification by state-owned 
                    fuel retailers. The diesel price remained stable for 
                    the second consecutive day.
                    The increase on July 5, 35th in two months, took 
                    the petrol price in Delhi closer to Rs 100 per 
                    litre-mark. The petrol price in the national 
                    capital soared to Rs 99.9 a litre and diesel was 
                    priced at Rs 89.4 per litre, according to Bharat 
                    Petroleum's price listing.
                </span>
            </Text>
        </Box>

        <Box className="bg-white rounded p-4">
            <Text>
                Subscribe to our Newsletter
            </Text>

            <form>
                <input
                    type="text"
                    placeholder="Enter Email"
                    className="bg-inputColor w-full pl-3 py-2"
                />

                <input
                    type="submit"
                    value="Subscribe"
                    className="bg-primary px-4 text-center 
                    py-2 text-white text-sm w-full mt-4"
                />
            </form>
        </Box>
    </aside>
  )
}

export default Sidebar