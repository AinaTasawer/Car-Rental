import Link from 'next/link';
import { FaHeart } from "react-icons/fa";
import { MdLocalGasStation } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image"
import React from 'react'

const Page3 = () => {
  return (
    <div className='w-[1440px] h-[2016px] bg-[#F6F7F9] flex'>
<div className="side-menu">
        <div className="w-[360px] h-[1600px] bg-white shadow-md p-6">
          {/* Type Section */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-[#6B6B6B] mb-4">TYPE</h3>
            <div className="space-y-8">
              {[
                { label: "Sport", count: 10, checked: true },
                { label: "SUV", count: 12, checked: true },
                { label: "MPV", count: 16 },
                { label: "Sedan", count: 20 },
                { label: "Coupe", count: 14 },
                { label: "Hatchback", count: 14 },
              ].map(({ label, count, checked }, index) => (
                <label
                  key={index}
                  className="flex items-center gap-3 text-base text-[#131313]"
                >
                  <input
                    type="checkbox"
                    defaultChecked={checked}
                    className="w-4 h-4 accent-[#3563E9] rounded-sm"
                  />
                  {label}
                  <span className="text-[#6B6B6B]">({count})</span>
                </label>
              ))}
            </div>
          </div>

          {/* Capacity Section */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-[#6B6B6B] mb-4">
              CAPACITY
            </h3>
            <div className="space-y-8">
              {[
                { label: "2 Person", count: 10, checked: true },
                { label: "4 Person", count: 14 },
                { label: "6 Person", count: 12 },
                { label: "8 or More", count: 16, checked: true },
              ].map(({ label, count, checked }, index) => (
                <label
                  key={index}
                  className="flex items-center gap-3 text-base text-[#131313]"
                >
                  <input
                    type="checkbox"
                    defaultChecked={checked}
                    className="w-4 h-4 accent-[#3563E9] rounded-sm"
                  />
                  {label}
                  <span className="text-[#6B6B6B]">({count})</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Section */}
          <div>
            <h3 className="text-sm font-semibold text-[#6B6B6B] mb-4">PRICE</h3>
            <div className="space-y-4">
              {/* Slider */}
              <div className="flex items-center">
                <input
                  type="range"
                  min="0"
                  max="100"
                  className="w-full h-2 rounded-full bg-gray-200 accent-[#3563E9] appearance-none"
                />
              </div>
              {/* Max Price */}
              <p className="text-sm text-[#131313]">Max. $100.00</p>
            </div>
          </div>
        </div>
      </div>
{/* 
RIGHT SECTION */}
<div className='flex flex-col w-full'>
  {/* Right Section */}
  <div className='flex w-full'>
    <div className='right-section m-6 flex flex-col h-[508px]'>
      {/* Car Image and Text */}
      <div className='car2 w-[492px] h-[360px] bg-[#3563E9] rounded-xl relative'>
        <Image src="/assests/car2.png" alt="Car2" width={380} height={120} className='absolute bottom-2 left-1/2 transform -translate-x-1/2' />
        <div className='text-car text-[#FFFFFF] w-[372px] h-[160px] absolute top-6 left-6 space-y-4'>
          <p className='font-semibold text-[32px] leading-snug'>Sports car with the best design and acceleration</p>
          <p className='font-medium text-base'>Safety and comfort while driving a futuristic and elegant sports car.</p>
        </div>
      </div>

      {/* Images */}
      <div className='flex rounded-lg justify-around'>
        <div className='border-2 w-[148px] h-[124px] border-spacing-1 border-[#3563E9] rounded-lg mt-2 flex items-center justify-center'>
          <Image src="/assests/view1.png.png" alt="" width={132} height={108}/>
        </div>
        <div><Image src="/assests/view2.png.png" alt="" width={148} height={124} className='m-2'/></div>
        <div className='w-[148px] h-[124px] border-1'><Image src="/assests/view3.png.png" alt="" width={148} height={124} className='m-2' /></div>
      </div>
    </div>

    {/* Car Details */}
    <div className="card2 w-[492px] h-[508px] bg-white rounded-lg shadow-md p-4 relative m-6">
      {/* Title and Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[32px] font-bold text-[#131313] leading-7">Nissan GT – R</h2>
        <span className="text-red-500 text-[20px]"></span>
      </div>

      {/* Ratings */}
      <div className="flex items-center gap-2 mb-6">
        <div className="flex text-[#FFBE0B] text-sm">
          <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span className="text-[#DADADA]">⭐</span>
        </div>
        <p className="text-sm text-[#596780]">440+ Reviews</p>
      </div>

      {/* Description */}
      <p className="text-xl text-[#596780] leading-relaxed mb-8 flex items-center justify-center">
      NISMO has become the embodiment of Nissan&apos;s outstanding performance, inspired by the most unforgiving proving ground, the &quot;race track&quot;.

      </p>

      {/* Features */}
      <div className="grid grid-cols-4 gap-y-4 mb-6 text-[#596780] text-base">
        <div className="flex flex-col">
          <span>Type Car</span>
          <span>Steering</span>
        </div>
        <div className="flex flex-col text-[#596780] font-semibold">
          <span>Sport</span>
          <span>Manual</span>
        </div>
        <div className="flex flex-col">
          <span>Capacity</span>
          <span>Gasoline</span>
        </div>
        <div className="flex flex-col text-[#596780] font-semibold">
          <span>2 Person</span>
          <span>70L</span>
        </div>
      </div>

      {/* Price and Button */}
      <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
        <div>
          <p className="text-2xl font-bold text-[#131313]">$80.00<span className="text-sm text-[#596780]">/days</span></p>
          <p className="text-sm text-[#90A3BF] line-through">$100.00</p>
        </div>
        <Link href="/payment"><button className="bg-[#3563E9] text-white text-base font-bold px-5 py-2 rounded-md shadow-md">
          Rent Now
        </button></Link>
      </div>
    </div>
  </div>

  {/* Reviews Section */}
  <div className="reviews-section w-[1016px] mx-auto mt-8">
    <div className="w-[1016px] h-[452px] bg-white rounded-lg shadow-md p-6 space-y-9" style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <h2 className="text-xl font-semibold text-gray-800">Reviews</h2>
          <span className="bg-blue-500 text-white text-sm font-medium px-3 py-1 rounded-lg">13</span>
        </div>
      </div>

      {/* Review 1 */}
      <div className="flex justify-between items-start space-x-4">
        <div className="flex items-start space-x-4">
          <Image src="/assests/profill.1.png" alt="Alex Stanton" width={48} height={48} className="rounded-full object-cover" />
          <div>
            <h3 className="text-xl font-bold text-[#1A202C]">Alex Stanton</h3>
            <p className="text-sm text-gray-500 font-normal">CEO at Bukalapak</p>
            <p className="text-sm text-gray-600 mt-2 font-normal">We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</p>
          </div>
        </div>
        <span className="text-sm text-gray-500">21 July 2022</span>
      </div>

      {/* Review 2 */}
      <div className="flex justify-between items-start space-x-4">
        <div className="flex items-start space-x-4">
          <Image src="/assests/profill.2.png" alt="Skylar Dias" width={48} height={48} className=" rounded-full object-cover" />
          <div>
            <h3 className="text-xl font-bold text-[#1A202C]">Skylar Dias</h3>
            <p className="text-sm text-gray-50 font-normal0">CEO at Amazon</p>
            <p className="text-sm text-gray-600 mt-2 font-normal">We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</p>
          </div>
        </div>
        <span className="text-sm text-gray-500">20 July 2022</span>
      </div>

      {/* Footer */}
      <div className="flex justify-center">
        <button className="text-sm text-gray-500 hover:underline flex items-center">
          Show All <span className="ml-1"><IoIosArrowDown /></span>
        </button>
      </div>
    </div>

    {/* CARDS SECTION */}
<div className="flex justify-center p-5"><div>
  <div className="card-container h-[390px]">
  <div className='flex h-[44px] text-base font-semibold justify-between items-center'>
      <p className='text-[#90A3BF] w-[132px] h-[44px]'>Recent Car</p>
      <p className='text-[#3563E9] w-[104px] h-[44px]'>View All</p>
    </div>
    <div className="grid grid-cols-3 h-[388px] gap-10">
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
          <Image
            src="/assests/car3.png"
            alt="car3"
            width={272}
            height={84}
            className="object-contain"
          />
        </div>

        {/* Features */}
        <div className="flex justify-between text-sm text-[#6B6B6B] my-4 absolute bottom-1/4 gap-7">
          <div className="flex items-center gap-1">
            <MdLocalGasStation className="w-4 h-4" />
            <span>90L</span>
          </div>
          <div className="flex items-center gap-1">
            <Image src="/assests/manual.png" alt="Gear" width={16} height={16}/>
            <span>Manual</span>
          </div>
          <div className="flex items-center gap-[2px]">
            <Image src="/assests/people.png" alt="People" width={16} height={16} />
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
          <Image
            src="/assests/car2.png"
            alt="car3"
            width={282}
            height={72}
            className="object-contain"
          />
        </div>

        {/* Features */}
        <div className="flex justify-between text-sm text-[#6B6B6B] my-4 absolute bottom-1/4 gap-7">
          <div className="flex items-center gap-1">
            <MdLocalGasStation className="w-4 h-4" />
            <span>90L</span>
          </div>
          <div className="flex items-center gap-1">
            <Image src="/assests/manual.png" alt="Gear" width={16} height={16} />
            <span>Manual</span>
          </div>
          <div className="flex items-center gap-[2px]">
            <Image src="/assests/people.png" alt="People" width={16} height={16} />
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
          <Image
            src="/assests/car4.png"
            alt="car3"
            width={244}
            height={76}
            className="object-contain"
          />
        </div>

        {/* Features */}
        <div className="flex justify-between text-sm text-[#6B6B6B] my-4 absolute bottom-1/4 gap-7">
          <div className="flex items-center gap-1">
            <MdLocalGasStation className="w-4 h-4" />
            <span>70L</span>
          </div>
          <div className="flex items-center gap-1">
            <Image src="/assests/manual.png" alt="Gear" width={16} height={16} />
            <span>Manual</span>
          </div>
          <div className="flex items-center gap-[2px]">
            <Image src="/assests/people.png" alt="People" width={16} height={16} />
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
       </div></div>

       {/* SECOND CAR LINE  */}
          {/* CARDS SECTION */}
<div className="flex justify-center p-5"><div>
  <div className="card-container h-[390px]">
  <div className='flex h-[44px] text-base font-semibold justify-between items-center'>
      <p className='text-[#90A3BF] w-[132px] h-[44px]'>Reccomendation</p>
      <p className='text-[#3563E9] w-[104px] h-[44px]'>View All</p>
    </div>
    <div className="grid grid-cols-3 h-[388px] gap-10">
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
          <Image
            src="/assests/car9.png"
            alt="car3"
            width={252}
            height={112}
            className="object-contain"
          />
        </div>

        {/* Features */}
        <div className="flex justify-between text-sm text-[#6B6B6B] my-4 absolute bottom-1/4 gap-7">
          <div className="flex items-center gap-1">
            <MdLocalGasStation className="w-4 h-4" />
            <span>70L</span>
          </div>
          <div className="flex items-center gap-1">
            <Image src="/assests/manual.png" alt="Gear" width={16} height={16} />
            <span>Manual</span>
          </div>
          <div className="flex items-center gap-[2px]">
            <Image src="/assests/people.png" alt="People" width={16} height={16} />
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
          <Image
            src="/assests/car10.png"
            alt="car3"
            width={254}
            height={108}
            className="object-contain"
          />
        </div>

        {/* Features */}
        <div className="flex justify-between text-sm text-[#6B6B6B] my-4 absolute bottom-1/4 gap-7">
          <div className="flex items-center gap-1">
            <MdLocalGasStation className="w-4 h-4" />
            <span>80L</span>
          </div>
          <div className="flex items-center gap-1">
            <Image src="/assests/manual.png" alt="Gear" width={16} height={16} />
            <span>Manual</span>
          </div>
          <div className="flex items-center gap-[2px]">
            <Image src="/assests/people.png" alt="People" width={16} height={16} />
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
          <Image
            src="/assests/car8.png"
            alt="car3"
            width={252}
            height={112}
            className="object-contain"
          />
        </div>

        {/* Features */}
        <div className="flex justify-between text-sm text-[#6B6B6B] my-4 absolute bottom-1/4 gap-7">
          <div className="flex items-center gap-1">
            <MdLocalGasStation className="w-4 h-4" />
            <span>90L</span>
          </div>
          <div className="flex items-center gap-1">
            <Image src="/assests/manual.png" alt="Gear" width={16} height={16}/>
            <span>Manual</span>
          </div>
          <div className="flex items-center gap-[2px]">
            <Image src="/assests/people.png" alt="People" width={16} height={16} />
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
       </div></div>
       </div>
       </div>
       </div>
       
       
    </div>
  </div></div>
  </div>
</div>
</div>
    
  )
}

export default Page3