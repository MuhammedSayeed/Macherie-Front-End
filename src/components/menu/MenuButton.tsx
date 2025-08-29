import React from 'react'

const MenuButton = () => {
  return (
    <span className='flex flex-col items-center justify-center space-y-1 group relative w-7 h-6 cursor-pointer'>
      <div className="bg-primary-light w-5.5 h-[.25rem] group-hover:ml-2 transition-all ease-in-out"></div>
      <div className="bg-primary-light w-5.5 h-[.2rem] group-hover:mr-2 transition-all ease-in-out"></div>
    </span>
  )
}

export default MenuButton