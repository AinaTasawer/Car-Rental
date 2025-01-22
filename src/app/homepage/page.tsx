import React from 'react'
import Link from 'next/link';
import { IoIosArrowDown } from "react-icons/io";
import { IoMdSwap } from 'react-icons/io';
import { FaHeart } from "react-icons/fa";
import { MdLocalGasStation } from "react-icons/md";
import Image from "next/image"
import Cards from '../cards/page';




const Hero = () =>{
 
  return (
    <div>
    {/* Product Items */}

    <div className='Main-container w-[1440px] h-[2120px] bg-[#F6F7F9]'>

 <div className='container-of-cars grid grid-rows-1 grid-cols-2 place-items-center p-10'>
  {/* CAR 1 */}
  <div className='car1 w-[640px] h-[360px] bg-[#54A6FF] rounded-xl relative'>
    <Image src="/assests/car1.png" alt="Car1" width={406} height={116} className='absolute bottom-2 left-1/2 transform -translate-x-1/2' />
   <div className='text-car text-[#FFFFFF] w-[284px] h-[224px] absolute top-6 left-6 space-y-4'>
   <p className='font-semibold text-[32px] leading-snug'>The Best Platform For Car Rental</p>
    <p className='font-medium text-base'>Ease of doing a car rental safely and reliably. Ofcourse at a low price.</p>
    <button className='bg-[#3563E9] px-[20px] w-[120px] h-[44px] rounded'>Rent Now</button>
   </div>
  </div>
{/* Car2 */}
  <div className='car2 w-[640px] h-[360px] bg-[#3563E9] rounded-xl relative'>
  <Image src="/assests/car2.png" alt="Car2" width={340} height={108} className='absolute bottom-2 left-1/2 transform -translate-x-1/2' />
  <div className='text-car text-[#FFFFFF] w-[284px] h-[224px] absolute top-6 left-6 space-y-4'>
   <p className='font-semibold text-[32px] leading-snug'>Easy way to rent a car at low price</p>
    <p className='font-medium text-base'>Providing cheap car rental services and safe and comfortable facilities.</p>
    <button className='bg-[#54A6FF] px-[20px] w-[120px] h-[44px] rounded'>Rent Now</button>
   </div>
  </div>   

</div>

{/* PICKUP AND DROP OFF SECTION */}

<div className="w-full max-w-[1440px] mx-auto flex items-center justify-center p-10 gap-12">
  {/* Pick-Up Section */}
  <div className="w-[582px] h-[132px] bg-white px-6 py-4 rounded-lg shadow-md">
    <div className="flex items-center gap-2">
      <div className="rounded-full bg-blue-300 w-4 h-4 p-1 flex items-center justify-center">
        <div className="rounded-full bg-blue-600 w-2 h-2"></div>
      </div>
      <h3 className="text-xl font-semibold text-gray-800">Pick-Up</h3>
    </div>
    <div className="mt-4 flex justify-between items-center">
      {/* Location */}
      <div>
        <h1 className="text-sm font-extrabold text-[#1A202C] mb-2">Locations</h1>
        <div className="flex items-center gap-2">
          <p className="text-[14px] font-medium text-[#90A3BF]">Select your city</p>
          <IoIosArrowDown />
        </div>
      </div>
      {/* Date */}
      <div>
        <h1 className="text-sm font-extrabold text-[#1A202C] mb-2">Date</h1>
        <div className="flex items-center gap-2">
          <p className="text-[14px] font-medium text-[#90A3BF]">Select your date</p>
          <IoIosArrowDown />
        </div>
      </div>
      {/* Time */}
      <div>
        <h1 className="text-sm font-extrabold text-[#1A202C] mb-2">Time</h1>
        <div className="flex items-center gap-2">
          <p className="text-[14px] font-medium text-[#90A3BF]">Select your time</p>
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  </div>

  {/* Mid Arrow */}
  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center shadow-md">
    <IoMdSwap className="text-white text-2xl" />
  </div>

  {/* Drop-Off Section */}
  <div className="w-[582px] h-[132px] bg-white px-6 py-4 rounded-lg shadow-md">
    <div className="flex items-center gap-2">
      <div className="rounded-full bg-sky-300 w-4 h-4 p-1 flex items-center justify-center">
        <div className="rounded-full bg-sky-500 w-2 h-2"></div>
      </div>
      <h3 className="text-xl font-semibold text-gray-800">Drop-Off</h3>
    </div>
    <div className="mt-4 flex justify-between items-center">
      {/* Location */}
      <div>
        <h1 className="text-sm font-extrabold text-[#1A202C] mb-2">Locations</h1>
        <div className="flex items-center gap-2">
          <p className="text-[14px] font-medium text-[#90A3BF]">Select your city</p>
          <IoIosArrowDown />
        </div>
      </div>
      {/* Date */}
      <div>
        <h1 className="text-sm font-extrabold text-[#1A202C] mb-2">Date</h1>
        <div className="flex items-center gap-2">
          <p className="text-[14px] font-medium text-[#90A3BF]">Select your date</p>
          <IoIosArrowDown />
        </div>
      </div>
      {/* Time */}
      <div>
        <h1 className="text-sm font-extrabold text-[#1A202C] mb-2">Time</h1>
        <div className="flex items-center gap-2">
          <p className="text-[14px] font-medium text-[#90A3BF]">Select your time</p>
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  </div>
</div>
<Cards/>

</div>


  <div className='flex justify-center'>
  <Link href='/page2'><button className='bg-[#3563E9] text-white w-[156px] h-44px] px-3 py-3 rounded-lg'>Show More Car</button></Link>
</div>
  
   
  
 
   <div>
  
</div>
</div>



    
  )
}

export default Hero






























