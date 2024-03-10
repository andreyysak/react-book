import React from 'react'
import { Book } from '../interface/Books'
import { GrFormAdd } from "react-icons/gr";

interface Props {
  book: Book;
  addToCart: (book: Book) => void;
  onBookClick: (book: Book) => void;
}

export const BookCard: React.FC<Props> = ({book, addToCart, onBookClick}) => {
  return (
    <li
      key={book.id}
      className='w-[230px]'
    >
      <img 
        src={book.imageUrl}
        alt={book.name}
        className='rounded-xl h-[325px]'
        onClick={() => onBookClick(book)}
      />
      <h3 className='pt-6 font-bold text-xl text-center' onClick={() => onBookClick(book)}>
        {book.name}
      </h3>
      <div className='flex justify-between items-center pt-3'>
        <p className='font-bold text-lg'>
          {`${book.price}$`}
        </p>
        <button
          className='flex gap-2 items-center font-bold text-base text-white bg-orangeCol px-4 py-2 rounded-full hover:text-dark'
          onClick={() => addToCart(book)}
        >
          <GrFormAdd size={20} />
          Add
        </button>
      </div>
    </li>
  )
}
