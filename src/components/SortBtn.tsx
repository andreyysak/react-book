import React, { Dispatch, SetStateAction } from 'react'
import {SORT_BY_ALPHABET, SORT_BY_LENGTH} from '../constants/constants';

interface Props {
  sort: string;
  setSort: Dispatch<SetStateAction<string>>;
  reverse: boolean;
  setReverse: Dispatch<SetStateAction<boolean>>;
}

export const SortBtn: React.FC<Props> = ({sort, setSort, reverse, setReverse}) => {
  return (
    <section className='flex gap-2'>
      {/* {sortBtn.map(sort => (
        
        // <button className='bg-dark text-white px-8 py-2 rounded-full hover:bg-orangeCol hover:text-dark font-bold text-base'>
        //   {sort}
        // </button>
      ))} */}
      <div className='flex gap-2'>
          <button 
            className='bg-dark text-white px-8 py-2 rounded-full hover:bg-orangeCol hover:text-dark font-bold text-base'
            onClick={() => setSort(SORT_BY_ALPHABET)}
          >
            Alphabet
          </button>
          <button 
            className='bg-dark text-white px-8 py-2 rounded-full hover:bg-orangeCol hover:text-dark font-bold text-base'
            onClick={() => setSort(SORT_BY_LENGTH)}
          >
            Length
          </button>
          <button 
            className='bg-dark text-white px-8 py-2 rounded-full hover:bg-orangeCol hover:text-dark font-bold text-base'
            onClick={() => setReverse(cur => !cur)}
          >
            Reverse
          </button>
        </div>
    </section>
  )
}
