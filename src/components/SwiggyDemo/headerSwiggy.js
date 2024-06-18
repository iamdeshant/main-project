import React from 'react'
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { PiBagSimpleBold } from "react-icons/pi";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const SwiggyHeader = () => {
  return (
    <div className='shadow-lg h-20 flex items-center justify-between sticky top-0 bg-white'>
      <div className='flex items-center'>
        <img
          className='h-12 ml-8 cursor-pointer' 
          src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.png"
        />
        <p className='underline font-semibold ml-8 hover:text-[#fc8019] cursor-pointer'>Other</p>
        <IoIosArrowDown size={20} color={'#fc8019'}/>
      </div>
      <div>
        <ul className='flex mr-20'>
          <li className='font-semibold flex items-center text-[#3d4152]'>
            <PiBagSimpleBold size={20} className='mr-2'/>
            <span className='hover:text-[#fc8019] cursor-pointer'>Swiggy Corporate</span>
          </li>
          <li className='font-semibold pl-12 flex items-center text-[#3d4152]'>
            <IoIosSearch size={20} className='mr-2'/>
            <span className='hover:text-[#fc8019] cursor-pointer'>Search</span>
          </li>
          <li className='font-semibold pl-12 flex items-center text-[#3d4152] relative'>
            <BiSolidOffer size={20} className='mr-2'/>
            <span className='hover:text-[#fc8019] cursor-pointer'>Offers</span>
            <span className='absolute top-[-5px] right-[-26px] text-xs text-[#fc8019]'>New</span>
            </li>
          <li className='font-semibold pl-16 flex items-center text-[#3d4152]'>
            <IoHelpBuoyOutline size={20} className='mr-2'/>
            <span className='hover:text-[#fc8019] cursor-pointer'>Help</span>
          </li>
          <li className='font-semibold pl-12 flex items-center text-[#3d4152]'>
            <CgProfile size={20} className='mr-2'/>
            <span className='hover:text-[#fc8019] cursor-pointer'>Sign In</span>
          </li>
          <li className='font-semibold pl-12 flex items-center text-[#3d4152]'>
            <div className='border-[1px] border-solid border-[#3d4152] px-[5px] mr-2 text-[#3d4152]'>0</div>
            <span className='hover:text-[#fc8019] cursor-pointer'>Cart</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SwiggyHeader
