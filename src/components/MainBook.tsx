import React, { Dispatch, SetStateAction } from 'react'
import { Genres } from './Genres'
import { Book } from '../interface/Books'
import { SortBtn } from './SortBtn';
import { Catalog } from './Catalog';

interface Props {
  books: Book[];
  sort: string;
  setSort: Dispatch<SetStateAction<string>>;
  reverse: boolean;
  setReverse: Dispatch<SetStateAction<boolean>>;
  genre: string;
  setGenre: Dispatch<SetStateAction<string>>;
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  addToCart: (book: Book) => void;
}

export const MainBook: React.FC<Props> = ({books, sort, setSort, reverse, setReverse, genre, setGenre, query, setQuery, addToCart}) => {  
  return (
    <section className='py-10 px-14 bg-white rounded-b-lg'>
      <div className='flex justify-between items-center'>
        <Genres
          genre={genre}
          setGenre={setGenre}
        />
        <SortBtn
          sort={sort} 
          setSort={setSort}
          reverse={reverse}
          setReverse={setReverse}
        />
      </div>
      <Catalog 
        books={books}
        query={query}
        setQuery={setQuery}
        addToCart={addToCart}
      />
    </section>
  )
}
