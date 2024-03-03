import React from 'react'
import { CiShoppingCart, CiDollar } from "react-icons/ci";
import { FaBookOpen } from "react-icons/fa";
import { TiPlus } from "react-icons/ti";


interface Props {
  count: number;
  totalPrice: number;
  handleOpenCart: () => void;
  handleOpenAddNewBook: () => void;
}

export const Header: React.FC<Props> = ({count, totalPrice, handleOpenCart, handleOpenAddNewBook}) => {
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

      <div className='flex gap-8'>
        <ul className='flex list-none gap-7 bg-orangeCol text-white py-4 px-6 rounded-full'>
          <li className='flex gap-2 pr-5 border-r-2'>
            {totalPrice.toFixed(2)}
            <CiDollar
              size={26}
              style={{ strokeWidth: "1"}}
            />
          </li>
          <button
            className='flex gap-2'
            onClick={handleOpenCart}
          >
            <label htmlFor="">
              {count}
            </label>
            <CiShoppingCart
              size={26}
              style={{ strokeWidth: "1"}}
            />
          </button>
        </ul>

        <button 
          className='flex list-none gap-3 bg-orangeCol text-white py-4 px-6 rounded-full'
          onClick={handleOpenAddNewBook}
        >
          <TiPlus size={26} />
          Book
        </button>
      </div>
    </header>
  )
}
