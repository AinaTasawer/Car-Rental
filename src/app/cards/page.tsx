// "use client"

// import React, {useEffect, useState} from "react"
// import { client } from '@/sanity/lib/client'
// import { Product } from "../../../types/products"
// import { allProducts } from "@/sanity/lib/queries"
// import { urlFor } from "@/sanity/lib/image"
// import Image from "next/image"

// const Cards = () => {
//     const [car , setProduct] = useState<Product[]>([])

//     useEffect(()=>{
//         async function fetchproduct(){
//             const fetchedProduct : Product[] = await client.fetch(allProducts)
//             setProduct(fetchedProduct)
//         }
//         fetchproduct()
//     },[])
//   return (
   
// <div className="px-3 py-4 mx-4 my-4 grid grid-col-4"> 
//     {car.map((car)=>(
//             <div key={car._id}>
//                 {car.name}
//                 {car.image && (
//                     <Image
//                     src={urlFor(car.image).url()}
//                     alt="image"
//                     width={400}
//                     height={400}/>
                   
//                 )}
//                 {car.pricePerDay}
//                 {car.fuelCapacity}
//                 {car.seatingCapacity}
//             </div>
//         )
//         )}
//     </div>
    
//   )
// }

// export default Cards

"use client"

import React, { useEffect, useState } from "react"
import { client } from '@/sanity/lib/client'
import { Product } from "../../../types/products"
import { allProducts } from "@/sanity/lib/queries"
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"
import { MdLocalGasStation } from "react-icons/md"
import { FaHeart } from "react-icons/fa"

const Cards = () => {
    const [cars, setCars] = useState<Product[]>([])

    useEffect(() => {
        async function fetchProduct() {
            const fetchedCars: Product[] = await client.fetch(allProducts)
            setCars(fetchedCars)
        }
        fetchProduct()
    }, [])

    return (
        <div className="w-[1440px] flex justify-center">
            <div className="card-container w-[1312px] h-[452px]">
                <div className='flex w-[1312px] h-[44px] text-base font-semibold justify-center gap-[1076px] items-center'>
                    <p className='text-[#90A3BF] w-[132px] h-[44px]'>Popular Car</p>
                    <p className='text-[#3563E9] w-[104px] h-[44px]'>View All</p>
                </div>
                <div className="grid grid-cols-4 w-[1312px] h-[388px]">
                    {cars.map((car) => (
                        <div key={car._id} className="card w-[304px] h-[388px] bg-white rounded-lg shadow-md p-4 relative">
                            {/* Header */}
                            <div className="flex justify-between items-center">
                                <div>
                                    <h3 className="text-lg font-semibold text-[#131313]">{car.name}</h3>
                                    <p className="text-sm text-[#6B6B6B]">{car._type}</p>
                                </div>
                                <button className="text-red-500 text-xl">
                                    <FaHeart />
                                </button>
                            </div>

                            {/* Image */}
                            <div className="flex items-center justify-center my-4 absolute inset-0 mb-12">
                                {car.image && (
                                    <Image
                                        src={urlFor(car.image).url()}
                                        alt={car.name}
                                        height={72}
                                        width={232}
                                        className="object-contain"
                                    />
                                )}
                            </div>

                            {/* Features */}
                            <div className="flex justify-between text-sm text-[#6B6B6B] my-4 absolute bottom-1/4 gap-7">
                                <div className="flex items-center gap-1">
                                    <MdLocalGasStation className="w-4 h-4" />
                                    <span>{car.fuelCapacity}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Image src="/assests/manual.png" alt="Gear" width={16} height={16} />
                                    <span>{car.transmission}</span>
                                </div>
                                <div className="flex items-center gap-[2px]">
                                    <Image src="/assests/people.png" alt="People" width={16} height={16} />
                                    <span>{car.seatingCapacity} People</span>
                                </div>
                            </div>

                            {/* Price and Button */}
                            <div className="flex justify-center items-center absolute bottom-10 gap-4">
                                <div className="w-[116px] h-[44px]">
                                    <p className="text-lg font-bold text-[#131313]">
                                        ${car.pricePerDay} <span className="text-sm text-[#6B6B6B]">/day</span>
                                    </p>
                                </div>
                                <button className="bg-[#3563E9] text-white w-[114px] h-[44px] text-sm px-4 py-2 rounded-md shadow self-end">
                                    Rent Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Cards

