import React from 'react'
import { Book } from '../interface/Books'
import { GrFormAdd } from "react-icons/gr";

interface Props {
  book: Book;
  addToCart: (book: Book) => void;
  onBookClick: (book: Book) => void;
}

export const BookCard: React.FC<Props> = React.memo(({book, addToCart, onBookClick}) => {
  return (
    <li
      key={book.id}
      className='w-[230px]'
    >
      <div className='overflow-hidden rounded-xl'>
        <img
          src={book.imageUrl}
          alt={book.name}
          className='rounded-xl h-[325px] hover:scale-110 duration-200'
          onClick={() => onBookClick(book)}
        />
      </div>
      <h3 className='pt-6 font-bold text-xl text-center' onClick={() => onBookClick(book)}>
        {book.name}
      </h3>
      <div className='flex justify-between items-center pt-3'>
        <p className='text-xl font-extrabold'>
          {`${book.price}$`}
        </p>
        <button
          className='flex items-center gap-2 py-2 px-5 border-2 border-darkText dark:border-light font-bold rounded-full bg-light text-darkText dark:bg-darkText dark:text-light hover:text-darkHover dark:hover:text-lightHover duration-200 hover:scale-105 active:text-darkActive dark:active:text-lightActive'
          onClick={() => addToCart(book)}
        >
          <GrFormAdd size={20} />
          Add
        </button>
      </div>
    </li>
  )
})
