import React from 'react'
// import { Book } from '../interface/Books';

interface Props {
  genres: string[];
}

export const Genres: React.FC<Props> = ({genres}) => {
  return (
    <div className='flex flex-wrap text-base font-bold gap-2'>
      <button
        className='bg-lightGray px-10 py-3 rounded-full hover:bg-dark hover:text-white'
      >
        All
      </button>
      {genres.map(genre => (
        <button
          className='bg-lightGray px-10 py-3 rounded-full hover:bg-dark hover:text-white'
        >
          {genre}
        </button>
      ))}
    </div>
  )
}
