import React, { Dispatch, SetStateAction } from 'react'
import { FaBookOpen } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

interface Props {
  setShow: Dispatch<SetStateAction<boolean>>;
  size: number;
}

export const Header: React.FC<Props> = ({setShow, size}) => {
  return (
    <div className='flex justify-between bg-white rounded-t-xl py-10 px-16 border-b-2 border-lightGrayb'>
      <div className='flex gap-3 items-center cursor-pointer' onClick={() => setShow(true)}>
        <FaBookOpen size={30} />
        <h1 className='font-bold text-3xl'>
          React Books
        </h1>
      </div>
      <button
        onClick={() => setShow(false)}
        className='px-5 py-2 font-bold bg-orangeCol text-white rounded-full flex items-center gap-3'
      >
        <span>{`#${size}`}</span>
        Cart
        <FaCartShopping size={20} />
      </button>
    </div>
  )
}
