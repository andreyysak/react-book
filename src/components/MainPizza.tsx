import React from 'react'
import { Genres } from './Genres'
import { Book } from '../interface/Books'
import {genres} from '../constants/constants';
import { SortBtn } from './SortBtn';
import { Catalog } from './Catalog';

interface Props {
  books: Book[];
}

export const MainPizza: React.FC<Props> = ({books}) => {
  return (
    <section className='py-10 px-14 bg-white rounded-b-lg'>
      <div className='flex justify-between items-center'>
        <Genres genres={genres} />
        <SortBtn />
      </div>
      <Catalog />
    </section>
  )
}
