import React from 'react'
import { Book } from '../interface/Books'
import { BookCard } from './BookCard';

interface Props {
  books: Book[];
  addToCart: (book: Book) => void;
}

export const BookList: React.FC<Props> = ({books, addToCart}) => {
  return (
    <ul className='grid grid-cols-4 justify-between gap-y-16'>
      {books.map(book => (
        <BookCard 
          book={book}
          addToCart={addToCart}
        />
      ))}
    </ul>
  )
}
