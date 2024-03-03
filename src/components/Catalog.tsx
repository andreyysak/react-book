import React, { Dispatch, SetStateAction } from 'react'
import { CatalogInput } from './CatalogInput'
import { BookList } from './BookList'
import { Book } from '../interface/Books'

interface Props {
  books: Book[];
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
}

export const Catalog: React.FC<Props> = ({books, query, setQuery}) => {
  return (
    <section className='py-10 bg-white '>
      <div className='flex justify-between items-center pb-9'>
        <h2 className='font-bold text-3xl'>All books</h2>
        <CatalogInput
          query={query}
          setQuery={setQuery}
        />
      </div>
      <BookList books={books} />
    </section>
  )
}
