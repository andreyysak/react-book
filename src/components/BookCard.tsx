import React from 'react'
import { Book } from '../interface/Books'
import { TiPlus } from "react-icons/ti";

interface Props {
  book: Book;
}

export const BookCard: React.FC<Props> = ({book}) => {
  return (
    <li 
      key={book.id}
      className='w-[280px]'
    >
      <img 
        src={book.imageUrl} 
        alt={book.name}
        className='h-[459px] rounded-xl'
      />
      <h4 className='text-xl font-extrabold pt-3 pb-5 text-center'>
        {book.name}
      </h4>

      <p className='font-medium text-base'>
        {`Genre: ${book.genre}`}
      </p>
      <p className='font-medium text-base pb-4'>
        {`Author: ${book.author}`}
      </p>
      
      <div className='flex justify-between items-center'>
        <p className='font-bold text-2xl'>
          {`${book.price}$`}
        </p>
        <button className='flex gap-1 py-3 px-4 items-center text-base font-bold text-orangeText border-orangeText border-2 rounded-full hover:bg-orangeText hover:text-white'>
          <TiPlus size={22} />
          Add
        </button>
      </div>
    </li>
  )
}
