import React, { Dispatch, SetStateAction } from 'react'
// import { Book } from '../interface/Books';

interface Props {
  genre: string;
  setGenre: Dispatch<SetStateAction<string>>;
}

export const Genres: React.FC<Props> = ({genre, setGenre}) => {
  return (
    <div className='flex flex-wrap text-base font-bold gap-2'>
      <button
        className='bg-lightGray px-10 py-3 rounded-full hover:bg-dark hover:text-white'
        onClick={() => setGenre('')}
      >
        All
      </button>
      {/* {genres.map(genre => (
        <button
          className='bg-lightGray px-10 py-3 rounded-full hover:bg-dark hover:text-white'
        >
          {genre}
        </button>
      ))} */}
      <button 
        className='bg-lightGray px-10 py-3 rounded-full hover:bg-dark hover:text-white'
        onClick={() => setGenre('Fiction')}
      >
        Fiction
      </button>
      <button 
        className='bg-lightGray px-10 py-3 rounded-full hover:bg-dark hover:text-white'
        onClick={() => setGenre('Fantasy')}
      >
        Fantasy
      </button>
      <button 
        className='bg-lightGray px-10 py-3 rounded-full hover:bg-dark hover:text-white'
        onClick={() => setGenre('Mystery')}
      >
        Mystery
      </button>
      <button 
        className='bg-lightGray px-10 py-3 rounded-full hover:bg-dark hover:text-white'
        onClick={() => setGenre('Thriller')}
      >
        Thriller
      </button>
      <button 
        className='bg-lightGray px-10 py-3 rounded-full hover:bg-dark hover:text-white'
        onClick={() => setGenre('Horror')}
      >
        Horror
      </button>
    </div>
  )
}
