import React from 'react'
import { CatalogInput } from './CatalogInput'
import { BookList } from './BookList'
import { Book } from '../interface/Books'

interface Props {
  books: Book[];
}

export const Catalog: React.FC<Props> = ({books}) => {
  return (
    <section className='py-10 bg-white '>
      <div className='flex justify-between items-center pb-9'>
        <h2 className='font-bold text-3xl'>All books</h2>
        <CatalogInput />
      </div>
      <BookList books={books} />
    </section>
  )
}
