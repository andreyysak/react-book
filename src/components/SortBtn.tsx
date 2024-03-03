import React from 'react'
import {sortBtn} from '../constants/constants';

export const SortBtn = () => {
  return (
    <section className='flex gap-2'>
      {sortBtn.map(sort => (
        <button className='bg-dark text-white px-8 py-2 rounded-full hover:bg-orangeCol hover:text-dark font-bold text-base'>
          {sort}
        </button>
      ))}
    </section>
  )
}
