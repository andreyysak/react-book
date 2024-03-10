import React, { Dispatch, SetStateAction, useState } from 'react'
import { Book } from '../interface/Books'
import { BookCard } from './BookCard';
import { Sort } from './Sort';
import BookDetail from './BookDetail';

interface Props {
  books: Book[];
  handleClick: (book: Book) => void;
  setSort: Dispatch<SetStateAction<string>>;
  setReverse: Dispatch<SetStateAction<boolean>>;
  setGenre: Dispatch<SetStateAction<string>>;
}

export const BookList: React.FC<Props> = ({books, handleClick , setReverse, setSort, setGenre}) => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null)

  const onBookClick = (book: Book) => {
    setSelectedBook(book);
  }

  return (
    <div>
      <Sort
        setReverse={setReverse}
        setSort={setSort}
        setGenre={setGenre}
      />

      <ul
        className='bg-white rounded-b-xl grid grid-cols-4 gap-y-5 justify-items-center py-10 content-center'
      >
          {books.map(book => (
          <BookCard
            book={book}
            addToCart={handleClick}
            key={book.id}
            onBookClick={() => onBookClick(book)}
          />
        ))}
      </ul>

      {selectedBook && (
        <BookDetail 
          selectedBook={selectedBook}
          onClose={() => setSelectedBook(null)}
          addToCart={handleClick}
        />
      )}
    </div>
  )
}
