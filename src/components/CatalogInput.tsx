import React, { Dispatch, SetStateAction } from 'react'

interface Props {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
}

export const CatalogInput: React.FC<Props> = ({query, setQuery}) => {
  return (
    <div>
      <input 
        value={query}
        onChange={event => setQuery(event.target.value)}
        type="text"
        placeholder='Write smt...'
        className='w-72 h-12 rounded-full border-bgInline border-2 px-5'
      />
    </div>
  )
}
