import React, { Dispatch, SetStateAction } from 'react'
import { SORT_BY_ALPHABET, SORT_BY_LENGTH } from '../constants/constants';
import { RxReset } from "react-icons/rx";
import { DropdownGenre } from './DropdownGenre';
import { DropdownSort } from './DropdownSort';

interface Props {
  setSort: Dispatch<SetStateAction<string>>;
  setReverse: Dispatch<SetStateAction<boolean>>;
  setGenre: Dispatch<SetStateAction<string>>;
  reset: () => void;
}

export const Sort: React.FC<Props> = React.memo(({setReverse, setSort, setGenre, reset}) => {
  return (
    <div className='bg-light dark:bg-darkText py-8 px-16 sm:py-4 sm:px-4 flex justify-between items-center border-b-2 border-darkText dark:border-light'>
      <div className='flex gap-3 sm:hidden'>
        <button onClick={() => setGenre('Fantasy')} className='py-3 px-6 border-2 border-darkText dark:border-light font-bold rounded-full bg-light text-darkText dark:bg-darkText dark:text-light hover:text-darkHover dark:hover:text-lightHover duration-200 hover:scale-105 active:text-darkActive dark:active:text-lightActive'>Fantasy</button>
        <button onClick={() => setGenre('Fiction')} className='py-3 px-6 border-2 border-darkText dark:border-light font-bold rounded-full bg-light text-darkText dark:bg-darkText dark:text-light hover:text-darkHover dark:hover:text-lightHover duration-200 hover:scale-105 active:text-darkActive dark:active:text-lightActive'>Fiction</button>
        <button onClick={() => setGenre('Horror')} className='py-3 px-6 border-2 border-darkText dark:border-light font-bold rounded-full bg-light text-darkText dark:bg-darkText dark:text-light hover:text-darkHover dark:hover:text-lightHover duration-200 hover:scale-105 active:text-darkActive dark:active:text-lightActive'>Horror</button>
        <button onClick={() => setGenre('Mystery')} className='py-3 px-6 border-2 border-darkText dark:border-light font-bold rounded-full bg-light text-darkText dark:bg-darkText dark:text-light hover:text-darkHover dark:hover:text-lightHover duration-200 hover:scale-105 active:text-darkActive dark:active:text-lightActive'>Mystery</button>
        <button onClick={() => setGenre('Thriller')} className='py-3 px-6 border-2 border-darkText dark:border-light font-bold rounded-full bg-light text-darkText dark:bg-darkText dark:text-light hover:text-darkHover dark:hover:text-lightHover duration-200 hover:scale-105 active:text-darkActive dark:active:text-lightActive'>Thriller</button>
      </div>
      
      <div className='flex items-center gap-8 sm:hidden'>
        <div className='flex gap-3'>
          <button onClick={() => setSort(SORT_BY_ALPHABET)} className='py-3 px-6 border-2 border-darkText dark:border-light font-bold rounded-full bg-light text-darkText dark:bg-darkText dark:text-light hover:text-darkHover dark:hover:text-lightHover duration-200 hover:scale-105 active:text-darkActive dark:active:text-lightActive'>Alphabet</button>
          <button onClick={() => setSort(SORT_BY_LENGTH)} className='py-3 px-6 border-2 border-darkText dark:border-light font-bold rounded-full bg-light text-darkText dark:bg-darkText dark:text-light hover:text-darkHover dark:hover:text-lightHover duration-200 hover:scale-105 active:text-darkActive dark:active:text-lightActive'>Price</button>
          <button onClick={() => setReverse(cur => !cur)} className='py-3 px-6 border-2 border-darkText dark:border-light font-bold rounded-full bg-light text-darkText dark:bg-darkText dark:text-light hover:text-darkHover dark:hover:text-lightHover duration-200 hover:scale-105 active:text-darkActive dark:active:text-lightActive'>Reverse</button>
        </div>

        <button onClick={reset} className='py-3 px-3 border-2 border-darkText dark:border-light font-bold rounded-full bg-light text-darkText dark:bg-darkText dark:text-light hover:text-darkHover dark:hover:text-lightHover duration-200 hover:scale-105 active:text-darkActive dark:active:text-lightActive'>
          <RxReset size={20} />
        </button>
      </div>

      <div className='hidden sm:flex items-center gap-8 px-4'>
        <DropdownGenre
          title='Choose a genre'
          fantasy='Fantasy'
          fiction='Fiction'
          horror='Horror'
          mystery='mystrey'
          thriller='Thriller'
          setGenre={setGenre}
        />
        <DropdownSort
          title='Sort by'
          setSort={setSort}
          setReverse={setReverse}
        />
        <button onClick={reset} className='py-1 px-1 ring-1 ring-darkText dark:ring-light font-bold rounded-full bg-light text-darkText dark:bg-darkText dark:text-light'>
            <RxReset size={20} />
          </button>
      </div>
    </div>
  )
})
