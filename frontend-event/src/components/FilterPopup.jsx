import React from 'react'

const FilterPopup = () => {
  return (
    <div className="bg-DarkPurple ml-12 p-2 border-b-2 border-black flex justify-between items-center">
      <div className="w-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M10,10,4,2H20l-6,8V22H10Z" />
        </svg>
      </div>
      <div className="w-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="17.828" height="17.828">
          <path d="m2.828 17.828 6.086-6.086L15 17.828 17.828 15l-6.086-6.086 6.086-6.086L15 0 8.914 6.086 2.828 0 0 2.828l6.085 6.086L0 15l2.828 2.828z" />
        </svg>
      </div>
    </div>


  )
}

export default FilterPopup
