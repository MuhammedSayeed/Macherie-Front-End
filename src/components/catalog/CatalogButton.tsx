import React from 'react'

const CatalogButton = () => {
  return (
    <div className="hidden md:flex md:items-center md:gap-6 ">
      <div className='grid grid-cols-2 grid-rows-2 gap-1 min-w-[1rem]'>
        <span className='min-w-[.35rem] min-h-[.35rem] bg-primary-light rounded-3xl block'></span>
        <span className='min-w-[.35rem] min-h-[.35rem] bg-primary-light rounded-3xl block'></span>
        <span className='min-w-[.35rem] min-h-[.35rem] bg-primary-light rounded-3xl block'></span>
        <span className='min-w-[.35rem] min-h-[.35rem] bg-primary-light rounded-3xl block'></span>
      </div>
      <span className='tracking-[.7rem] font-medium text-sm'>CATALOG</span>
    </div>
  )
}

export default CatalogButton