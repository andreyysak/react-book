import React from 'react'
import { CatalogInput } from './CatalogInput'

export const Catalog = () => {
  return (
    <section className='py-10 bg-white '>
      <div className='flex justify-between items-center'>
        <h2 className='font-bold text-3xl'>All books</h2>
        <CatalogInput />
      </div>
    </section>
  )
}
