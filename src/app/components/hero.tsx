import React from 'react'
import Link from 'next/link';
import { IoIosArrowDown } from "react-icons/io";
import { IoMdSwap } from 'react-icons/io';
import { FaHeart } from "react-icons/fa";
import { MdLocalGasStation } from "react-icons/md";


const Hero = () => {
  return (
    <div className='Main-container w-[1440px] h-[2120px] bg-[#F6F7F9]'>

<div className='container-of-cars grid grid-rows-1 grid-cols-2 place-items-center p-10'>
  {/* CAR 1 */}
  <div className='car1 w-[640px] h-[360px] bg-[#54A6FF] rounded-xl relative'>
    <img src="/assests/car1.png" alt="Car1" className='absolute bottom-2 left-1/2 transform -translate-x-1/2' />
   <div className='text-car text-[#FFFFFF] w-[284px] h-[224px] absolute top-6 left-6 space-y-4'>
   <p className='font-semibold text-[32px] leading-snug'>The Best Platform For Car Rental</p>
    <p className='font-medium text-base'>Ease of doing a car rental safely and reliably. Ofcourse at a low price.</p>
    <button className='bg-[#3563E9] px-[20px] w-[120px] h-[44px] rounded'>Rent Now</button>
   </div>
  </div>
{/* Car2 */}
  <div className='car2 w-[640px] h-[360px] bg-[#3563E9] rounded-xl relative'>
  <img src="/assests/car2.png" alt="Car2" className='absolute bottom-2 left-1/2 transform -translate-x-1/2' />
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
{/* ALL CARDS */}
<div className="w-[1440px] flex justify-center">
  <div className="card-container w-[1312px] h-[452px]">
    <div className='flex w-[1312px] h-[44px] text-base font-semibold justify-center gap-[1076px] items-center'>
      <p className='text-[#90A3BF] w-[132px] h-[44px]'>Popular Car</p>
      <p className='text-[#3563E9] w-[104px] h-[44px]'>View All</p>
    </div>
    <div className="grid grid-cols-4 w-[1312px] h-[388px]">
      {/* Card 1 */}
      <div className="card1 w-[304px] h-[388px] bg-white rounded-lg shadow-md p-4 relative">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-[#131313]">Koenigsegg</h3>
            <p className="text-sm text-[#6B6B6B]">Sport</p>
          </div>
          <button className="text-red-500 text-xl">
            <FaHeart />
          </button>
        </div>

        {/* Image */}
        <div className="flex items-center justify-center my-4 absolute inset-0 mb-12">
          <img
            src="/assests/car3.png"
            alt="car3"
            className="w-[200px] object-contain"
          />
        </div>

        {/* Features */}
        <div className="flex justify-between text-sm text-[#6B6B6B] my-4 absolute bottom-1/4 gap-7">
          <div className="flex items-center gap-1">
            <MdLocalGasStation className="w-4 h-4" />
            <span>90L</span>
          </div>
          <div className="flex items-center gap-1">
            <img src="/assests/manual.png" alt="Gear" className="w-4 h-4" />
            <span>Manual</span>
          </div>
          <div className="flex items-center gap-[2px]">
            <img src="/assests/people.png" alt="People" className="w-4 h-4" />
            <span>2 People</span>
          </div>
        </div>

        {/* Price and Button */}
        <div className="flex justify-center items-center absolute bottom-10 gap-4">
          <div className="w-[116px] h-[44px]">
            <p className="text-lg font-bold text-[#131313]">
              $99.00 <span className="text-sm text-[#6B6B6B]">/day</span>
            </p>
          </div>
          <button className="bg-[#3563E9] text-white w-[114px] h-[44px] text-sm px-4 py-2 rounded-md shadow self-end">
            Rent Now
          </button>
        </div>
      </div>

      {/* Card 2 */}
      <div className="card2 w-[304px] h-[388px] bg-white rounded-lg shadow-md p-4 relative">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-[#131313]">Nissan GT-R</h3>
            <p className="text-sm text-[#6B6B6B]">Sport</p>
          </div>
          <button className="text-red-500 text-xl">
            <FaHeart />
          </button>
        </div>

        {/* Image */}
        <div className="flex items-center justify-center my-4 absolute inset-0 mb-12">
          <img
            src="/assests/car2.png"
            alt="car3"
            className="w-[200px] object-contain"
          />
        </div>

        {/* Features */}
        <div className="flex justify-between text-sm text-[#6B6B6B] my-4 absolute bottom-1/4 gap-7">
          <div className="flex items-center gap-1">
            <MdLocalGasStation className="w-4 h-4" />
            <span>90L</span>
          </div>
          <div className="flex items-center gap-1">
            <img src="/assests/manual.png" alt="Gear" className="w-4 h-4" />
            <span>Manual</span>
          </div>
          <div className="flex items-center gap-[2px]">
            <img src="/assests/people.png" alt="People" className="w-4 h-4" />
            <span>2 People</span>
          </div>
        </div>

        {/* Price and Button */}
        <div className="flex justify-center items-center absolute bottom-10 gap-4">
          <div className="w-[116px] h-[44px]">
            <p className="text-lg font-bold text-[#131313]">
              $80.00 <span className="text-sm text-[#6B6B6B]">/day</span>
            </p>
          </div>
          <button className="bg-[#3563E9] text-white w-[114px] h-[44px] text-sm px-4 py-2 rounded-md shadow self-end">
            Rent Now
          </button>
        </div>
      </div>
{/* Card 3 */}
<div className="card1 w-[304px] h-[388px] bg-white rounded-lg shadow-md p-4 relative">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-[#131313]">Rolls-Royce</h3>
            <p className="text-sm text-[#6B6B6B]">Sedan</p>
          </div>
          <button className="text-red-500 text-xl">
            <FaHeart />
          </button>
        </div>

        {/* Image */}
        <div className="flex items-center justify-center my-4 absolute inset-0 mb-12">
          <img
            src="/assests/car4.png"
            alt="car3"
            className="w-[200px] object-contain"
          />
        </div>

        {/* Features */}
        <div className="flex justify-between text-sm text-[#6B6B6B] my-4 absolute bottom-1/4 gap-7">
          <div className="flex items-center gap-1">
            <MdLocalGasStation className="w-4 h-4" />
            <span>70L</span>
          </div>
          <div className="flex items-center gap-1">
            <img src="/assests/manual.png" alt="Gear" className="w-4 h-4" />
            <span>Manual</span>
          </div>
          <div className="flex items-center gap-[2px]">
            <img src="/assests/people.png" alt="People" className="w-4 h-4" />
            <span>2 People</span>
          </div>
        </div>

        {/* Price and Button */}
        <div className="flex justify-center items-center absolute bottom-10 gap-4">
          <div className="w-[116px] h-[44px]">
            <p className="text-lg font-bold text-[#131313]">
              $96.00 <span className="text-sm text-[#6B6B6B]">/day</span>
            </p>
          </div>
          <button className="bg-[#3563E9] text-white w-[114px] h-[44px] text-sm px-4 py-2 rounded-md shadow self-end">
            Rent Now
          </button>
        </div>
       </div>
       
        {/* Card 4 */}
      <div className="card4 w-[304px] h-[388px] bg-white rounded-lg shadow-md p-4 relative">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-[#131313]">Nissan GT-R</h3>
            <p className="text-sm text-[#6B6B6B]">Sport</p>
          </div>
          <button className="text-red-500 text-xl">
            <FaHeart />
          </button>
        </div>

        {/* Image */}
        <div className="flex items-center justify-center my-4 absolute inset-0 mb-12">
          <img
            src="/assests/car2.png"
            alt="car3"
            className="w-[200px] object-contain"
          />
        </div>

        {/* Features */}
        <div className="flex justify-between text-sm text-[#6B6B6B] my-4 absolute bottom-1/4 gap-7">
          <div className="flex items-center gap-1">
            <MdLocalGasStation className="w-4 h-4" />
            <span>80L</span>
          </div>
          <div className="flex items-center gap-1">
            <img src="/assests/manual.png" alt="Gear" className="w-4 h-4" />
            <span>Manual</span>
          </div>
          <div className="flex items-center gap-[2px]">
            <img src="/assests/people.png" alt="People" className="w-4 h-4" />
            <span>2 People</span>
          </div>
        </div>

        {/* Price and Button */}
        <div className="flex justify-center items-center absolute bottom-10 gap-4">
          <div className="w-[116px] h-[44px]">
            <p className="text-lg font-bold text-[#131313]">
              $99.00 <span className="text-sm text-[#6B6B6B]">/day</span>
            </p>
          </div>
          <button className="bg-[#3563E9] text-white w-[114px] h-[44px] text-sm px-4 py-2 rounded-md shadow self-end">
            Rent Now
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

{/* RECOMMENDATIONS CAR */}

{/* ALL CARDS */}
<div className="w-[1440px] flex justify-center">
  <div className="card-container w-[1312px] h-[452px]">
    <div className='flex w-[1312px] h-[44px] text-base font-semibold gap-[1076px] items-center'>
      <p className='text-[#90A3BF] w-[132px] h-[48px]'>Recommendations</p>
      
    </div>
    <div className="grid grid-cols-4 w-[1312px] h-[388px]">
      {/* Card 1 */}
      <div className="card1 w-[304px] h-[388px] bg-white rounded-lg shadow-md p-4 relative">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-[#131313]">All New Rush</h3>
            <p className="text-sm text-[#6B6B6B]">SUV</p>
          </div>
          <button className="text-red-500 text-xl">
            <FaHeart />
          </button>
        </div>

        {/* Image */}
        <div className="flex items-center justify-center my-4 absolute inset-0 mb-12">
          <img
            src="/assests/car5.png"
            alt="car3"
            className="w-[200px] object-contain"
          />
        </div>

        {/* Features */}
        <div className="flex justify-between text-sm text-[#6B6B6B] my-4 absolute bottom-1/4 gap-7">
          <div className="flex items-center gap-1">
            <MdLocalGasStation className="w-4 h-4" />
            <span>70L</span>
          </div>
          <div className="flex items-center gap-1">
            <img src="/assests/manual.png" alt="Gear" className="w-4 h-4" />
            <span>Manual</span>
          </div>
          <div className="flex items-center gap-[2px]">
            <img src="/assests/people.png" alt="People" className="w-4 h-4" />
            <span>6 People</span>
          </div>
        </div>

        {/* Price and Button */}
        <div className="flex justify-center items-center absolute bottom-10 gap-4">
          <div className="w-[116px] h-[44px]">
            <p className="text-lg font-bold text-[#131313]">
              $72.00 <span className="text-sm text-[#6B6B6B]">/day</span>
            </p>
          </div>
          <button className="bg-[#3563E9] text-white w-[114px] h-[44px] text-sm px-4 py-2 rounded-md shadow self-end">
            Rent Now
          </button>
        </div>
      </div>

      {/* Card 2 */}
      <div className="card2 w-[304px] h-[388px] bg-white rounded-lg shadow-md p-4 relative">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-[#131313]">CR-V</h3>
            <p className="text-sm text-[#6B6B6B]">SUV</p>
          </div>
          <button className="text-red-500 text-xl">
            <FaHeart />
          </button>
        </div>

        {/* Image */}
        <div className="flex items-center justify-center my-4 absolute inset-0 mb-12">
          <img
            src="/assests/car6.png"
            alt="car3"
            className="w-[200px] object-contain"
          />
        </div>

        {/* Features */}
        <div className="flex justify-between text-sm text-[#6B6B6B] my-4 absolute bottom-1/4 gap-7">
          <div className="flex items-center gap-1">
            <MdLocalGasStation className="w-4 h-4" />
            <span>80L</span>
          </div>
          <div className="flex items-center gap-1">
            <img src="/assests/manual.png" alt="Gear" className="w-4 h-4" />
            <span>Manual</span>
          </div>
          <div className="flex items-center gap-[2px]">
            <img src="/assests/people.png" alt="People" className="w-4 h-4" />
            <span>6 People</span>
          </div>
        </div>

        {/* Price and Button */}
        <div className="flex justify-center items-center absolute bottom-10 gap-4">
          <div className="w-[116px] h-[44px]">
            <p className="text-lg font-bold text-[#131313]">
              $80.00 <span className="text-sm text-[#6B6B6B]">/day</span>
            </p>
          </div>
          <button className="bg-[#3563E9] text-white w-[114px] h-[44px] text-sm px-4 py-2 rounded-md shadow self-end">
            Rent Now
          </button>
        </div>
      </div>
{/* Card 3 */}
<div className="card1 w-[304px] h-[388px] bg-white rounded-lg shadow-md p-4 relative">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-[#131313]">All New Terios</h3>
            <p className="text-sm text-[#6B6B6B]">SUV</p>
          </div>
          <button className="text-red-500 text-xl">
            <FaHeart />
          </button>
        </div>

        {/* Image */}
        <div className="flex items-center justify-center my-4 absolute inset-0 mb-12">
          <img
            src="/assests/car7.png"
            alt="car3"
            className="w-[200px] object-contain"
          />
        </div>

        {/* Features */}
        <div className="flex justify-between text-sm text-[#6B6B6B] my-4 absolute bottom-1/4 gap-7">
          <div className="flex items-center gap-1">
            <MdLocalGasStation className="w-4 h-4" />
            <span>90L</span>
          </div>
          <div className="flex items-center gap-1">
            <img src="/assests/manual.png" alt="Gear" className="w-4 h-4" />
            <span>Manual</span>
          </div>
          <div className="flex items-center gap-[2px]">
            <img src="/assests/people.png" alt="People" className="w-4 h-4" />
            <span>6 People</span>
          </div>
        </div>

        {/* Price and Button */}
        <div className="flex justify-center items-center absolute bottom-10 gap-4">
          <div className="w-[116px] h-[44px]">
            <p className="text-lg font-bold text-[#131313]">
              $74.00 <span className="text-sm text-[#6B6B6B]">/day</span>
            </p>
          </div>
          <button className="bg-[#3563E9] text-white w-[114px] h-[44px] text-sm px-4 py-2 rounded-md shadow self-end">
            Rent Now
          </button>
        </div>
       </div>
       
        {/* Card 4 */}
      <div className="card4 w-[304px] h-[388px] bg-white rounded-lg shadow-md p-4 relative">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-[#131313]">CR- V</h3>
            <p className="text-sm text-[#6B6B6B]">SUV</p>
          </div>
          <button className="text-red-500 text-xl">
            <FaHeart />
          </button>
        </div>

        {/* Image */}
        <div className="flex items-center justify-center my-4 absolute inset-0 mb-12">
          <img
            src="/assests/car8.png"
            alt="car3"
            className="w-[200px] object-contain"
          />
        </div>

        {/* Features */}
        <div className="flex justify-between text-sm text-[#6B6B6B] my-4 absolute bottom-1/4 gap-7">
          <div className="flex items-center gap-1">
            <MdLocalGasStation className="w-4 h-4" />
            <span>80L</span>
          </div>
          <div className="flex items-center gap-1">
            <img src="/assests/manual.png" alt="Gear" className="w-4 h-4" />
            <span>Manual</span>
          </div>
          <div className="flex items-center gap-[2px]">
            <img src="/assests/people.png" alt="People" className="w-4 h-4" />
            <span>2 People</span>
          </div>
        </div>

        {/* Price and Button */}
        <div className="flex justify-center items-center absolute bottom-10 gap-4">
          <div className="w-[116px] h-[44px]">
            <p className="text-lg font-bold text-[#131313]">
              $99.00 <span className="text-sm text-[#6B6B6B]">/day</span>
            </p>
          </div>
          <button className="bg-[#3563E9] text-white w-[114px] h-[44px] text-sm px-4 py-2 rounded-md shadow self-end">
            Rent Now
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

{/* ALL CARDS */}
<div className="w-[1440px] flex justify-center">
  <div className="card-container w-[1312px] h-[452px]">
    <div className="grid grid-cols-4 w-[1312px] h-[388px]">
      {/* Card 1 */}
      <div className="card1 w-[304px] h-[388px] bg-white rounded-lg shadow-md p-4 relative">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-[#131313]">MG ZX Exclusive</h3>
            <p className="text-sm text-[#6B6B6B]">Hatchback</p>
          </div>
          <button className="text-red-500 text-xl">
            <FaHeart />
          </button>
        </div>

        {/* Image */}
        <div className="flex items-center justify-center my-4 absolute inset-0 mb-12">
          <img
            src="/assests/car9.png"
            alt="car3"
            className="w-[200px] object-contain"
          />
        </div>

        {/* Features */}
        <div className="flex justify-between text-sm text-[#6B6B6B] my-4 absolute bottom-1/4 gap-7">
          <div className="flex items-center gap-1">
            <MdLocalGasStation className="w-4 h-4" />
            <span>70L</span>
          </div>
          <div className="flex items-center gap-1">
            <img src="/assests/manual.png" alt="Gear" className="w-4 h-4" />
            <span>Manual</span>
          </div>
          <div className="flex items-center gap-[2px]">
            <img src="/assests/people.png" alt="People" className="w-4 h-4" />
            <span>4 People</span>
          </div>
        </div>

        {/* Price and Button */}
        <div className="flex justify-center items-center absolute bottom-10 gap-4">
          <div className="w-[116px] h-[44px]">
            <p className="text-lg font-bold text-[#131313]">
              $76.00 <span className="text-sm text-[#6B6B6B]">/day</span>
            </p>
          </div>
          <button className="bg-[#3563E9] text-white w-[114px] h-[44px] text-sm px-4 py-2 rounded-md shadow self-end">
            Rent Now
          </button>
        </div>
      </div>

      {/* Card 2 */}
      <div className="card2 w-[304px] h-[388px] bg-white rounded-lg shadow-md p-4 relative">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-[#131313]">New MG ZS</h3>
            <p className="text-sm text-[#6B6B6B]">SUV</p>
          </div>
          <button className="text-red-500 text-xl">
            <FaHeart />
          </button>
        </div>

        {/* Image */}
        <div className="flex items-center justify-center my-4 absolute inset-0 mb-12">
          <img
            src="/assests/car10.png"
            alt="car3"
            className="w-[200px] object-contain"
          />
        </div>

        {/* Features */}
        <div className="flex justify-between text-sm text-[#6B6B6B] my-4 absolute bottom-1/4 gap-7">
          <div className="flex items-center gap-1">
            <MdLocalGasStation className="w-4 h-4" />
            <span>80L</span>
          </div>
          <div className="flex items-center gap-1">
            <img src="/assests/manual.png" alt="Gear" className="w-4 h-4" />
            <span>Manual</span>
          </div>
          <div className="flex items-center gap-[2px]">
            <img src="/assests/people.png" alt="People" className="w-4 h-4" />
            <span>6 People</span>
          </div>
        </div>

        {/* Price and Button */}
        <div className="flex justify-center items-center absolute bottom-10 gap-4">
          <div className="w-[116px] h-[44px]">
            <p className="text-lg font-bold text-[#131313]">
              $80.00 <span className="text-sm text-[#6B6B6B]">/day</span>
            </p>
          </div>
          <button className="bg-[#3563E9] text-white w-[114px] h-[44px] text-sm px-4 py-2 rounded-md shadow self-end">
            Rent Now
          </button>
        </div>
      </div>
{/* Card 3 */}
<div className="card1 w-[304px] h-[388px] bg-white rounded-lg shadow-md p-4 relative">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-[#131313]">MG ZX Excite</h3>
            <p className="text-sm text-[#6B6B6B]">Hatchback</p>
          </div>
          <button className="text-red-500 text-xl">
            <FaHeart />
          </button>
        </div>

        {/* Image */}
        <div className="flex items-center justify-center my-4 absolute inset-0 mb-12">
          <img
            src="/assests/car9.png"
            alt="car3"
            className="w-[200px] object-contain"
          />
        </div>

        {/* Features */}
        <div className="flex justify-between text-sm text-[#6B6B6B] my-4 absolute bottom-1/4 gap-7">
          <div className="flex items-center gap-1">
            <MdLocalGasStation className="w-4 h-4" />
            <span>90L</span>
          </div>
          <div className="flex items-center gap-1">
            <img src="/assests/manual.png" alt="Gear" className="w-4 h-4" />
            <span>Manual</span>
          </div>
          <div className="flex items-center gap-[2px]">
            <img src="/assests/people.png" alt="People" className="w-4 h-4" />
            <span>4 People</span>
          </div>
        </div>

        {/* Price and Button */}
        <div className="flex justify-center items-center absolute bottom-10 gap-4">
          <div className="w-[116px] h-[44px]">
            <p className="text-lg font-bold text-[#131313]">
              $74.00 <span className="text-sm text-[#6B6B6B]">/day</span>
            </p>
          </div>
          <button className="bg-[#3563E9] text-white w-[114px] h-[44px] text-sm px-4 py-2 rounded-md shadow self-end">
            Rent Now
          </button>
        </div>
       </div>
       
        {/* Card 4 */}
      <div className="card4 w-[304px] h-[388px] bg-white rounded-lg shadow-md p-4 relative">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-[#131313]">New MG ZX</h3>
            <p className="text-sm text-[#6B6B6B]">SUV</p>
          </div>
          <button className="text-red-500 text-xl">
            <FaHeart />
          </button>
        </div>

        {/* Image */}
        <div className="flex items-center justify-center my-4 absolute inset-0 mb-12">
          <img
            src="/assests/car10.png"
            alt="car3"
            className="w-[200px] object-contain"
          />
        </div>

        {/* Features */}
        <div className="flex justify-between text-sm text-[#6B6B6B] my-4 absolute bottom-1/4 gap-7">
          <div className="flex items-center gap-1">
            <MdLocalGasStation className="w-4 h-4" />
            <span>80L</span>
          </div>
          <div className="flex items-center gap-1">
            <img src="/assests/manual.png" alt="Gear" className="w-4 h-4" />
            <span>Manual</span>
          </div>
          <div className="flex items-center gap-[2px]">
            <img src="/assests/people.png" alt="People" className="w-4 h-4" />
            <span>6 People</span>
          </div>
        </div>

        {/* Price and Button */}
        <div className="flex justify-center items-center absolute bottom-10 gap-4">
          <div className="w-[116px] h-[44px]">
            <p className="text-lg font-bold text-[#131313]">
              $80.00 <span className="text-sm text-[#6B6B6B]">/day</span>
            </p>
          </div>
          <button className="bg-[#3563E9] text-white w-[114px] h-[44px] text-sm px-4 py-2 rounded-md shadow self-end">
            Rent Now
          </button>
        </div>
      </div>
    </div>
  </div>

</div>


  <div className='flex justify-center'>
  <Link href='/page2'><button className='bg-[#3563E9] text-white w-[156px] h-44px] px-3 py-3 rounded-lg'>Show More Car</button></Link>
</div>
  
   
  
 
     
  
</div>



    
  )
}

export default Hero






























