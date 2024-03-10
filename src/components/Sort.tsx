import React, { Dispatch, SetStateAction } from 'react'
import { SORT_BY_ALPHABET, SORT_BY_LENGTH } from '../constants/constants';

interface Props {
  setSort: Dispatch<SetStateAction<string>>;
  setReverse: Dispatch<SetStateAction<boolean>>;
  setGenre: Dispatch<SetStateAction<string>>;
}

export const Sort: React.FC<Props> = ({setReverse, setSort, setGenre}) => {
  return (
    <div className='bg-white py-8 px-16 flex justify-between items-center'>
      <div className='flex gap-3'>
        <button onClick={() => setGenre('Fantasy')} className='py-3 px-6  text-dark border-2 border-dark text-base font-bold rounded-full hover:bg-dark hover:text-white'>Fantasy</button>
        <button onClick={() => setGenre('Fiction')} className='py-3 px-6  text-dark border-2 border-dark text-base font-bold rounded-full hover:bg-dark hover:text-white'>Fiction</button>
        <button onClick={() => setGenre('Horror')} className='py-3 px-6  text-dark border-2 border-dark text-base font-bold rounded-full hover:bg-dark hover:text-white'>Horror</button>
        <button onClick={() => setGenre('Mystery')} className='py-3 px-6  text-dark border-2 border-dark text-base font-bold rounded-full hover:bg-dark hover:text-white'>Mystery</button>
        <button onClick={() => setGenre('Thriller')} className='py-3 px-6  text-dark border-2 border-dark text-base font-bold rounded-full hover:bg-dark hover:text-white'>Thriller</button>
      </div>
      
      <div className='flex gap-3'>
        <button onClick={() => setSort(SORT_BY_ALPHABET)} className='py-3 px-6 bg-orangeText text-white text-base font-bold rounded-full hover:bg-orange-700'>Alphabet</button>
        <button onClick={() => setSort(SORT_BY_LENGTH)} className='py-3 px-6 bg-orangeText text-white text-base font-bold rounded-full hover:bg-orange-700'>Price</button>
        <button onClick={() => setReverse(cur => !cur)} className='py-3 px-6 bg-orangeText text-white text-base font-bold rounded-full hover:bg-orange-700'>Reverse</button>
      </div>
    </div>
  )
}
