import React, { useState } from 'react'
import { Book } from '../interface/Books'
import { BookCard } from './BookCard';

interface Props {
  books: Book[];
  handleClick: (book: Book) => void;
}

export const BookList: React.FC<Props> = ({books, handleClick}) => {
  return (
    <ul 
      className='bg-white rounded-b-xl grid grid-cols-4 gap-y-5 justify-items-center py-10'
    >
        {books.map(book => (
        <BookCard
          book={book}
          addToCart={handleClick}
          key={book.id}
        />
      ))}
    </ul>
  )
}
