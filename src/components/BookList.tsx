import React, { Dispatch, SetStateAction, useCallback, useState } from 'react'
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
  reset: () => void;
}

export const BookList: React.FC<Props> = React.memo(({books, handleClick , setReverse, setSort, setGenre, reset}) => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null)

  const onBookClick = useCallback((book: Book) => {
    setSelectedBook(book);
  }, [])

  return (
    <div>
      <Sort
        setReverse={setReverse}
        setSort={setSort}
        setGenre={setGenre}
        reset={reset}
      />

      <ul
        className='bg-light dark:bg-darkText text-darkText dark:text-light rounded-b-xl grid grid-cols-4 gap-y-5 justify-items-center py-10 content-center sm:grid-cols-1 sm:py-7'
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
          book={selectedBook}
        />
      )}

    </div>
  )
})
