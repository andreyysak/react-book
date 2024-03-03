import React from 'react'
import { CiShoppingCart, CiDollar } from "react-icons/ci";
import { FaBookOpen } from "react-icons/fa";


export const Header: React.FC = () => {
  return (
    <header className='flex justify-between items-center py-10 px-14 bg-white rounded-t-lg font-bold border-b-2'>
      <figure>
        <a 
          href="www.google.com"
          className='text-2xl flex items-center gap-4'
        >
          <FaBookOpen size={34}/>
          React Book
        </a>
      </figure>

      <ul className='flex list-none gap-7 bg-orangeCol text-white py-4 px-6 rounded-full'>
        <li className='flex gap-2 pr-5 border-r-2'>
          <label htmlFor="">0</label>
          <CiDollar size={26} />
        </li>
        <li className='flex gap-2'>
          <label htmlFor="">0</label>
          <CiShoppingCart size={26} />
        </li>
      </ul>
    </header>
  )
}
