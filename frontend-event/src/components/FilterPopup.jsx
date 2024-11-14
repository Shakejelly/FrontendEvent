import React, { useState } from 'react';

const FilterPopup = () => {
  // State to control the filter box visibility and arrow rotation
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleFilterToggle = () => {
    // Toggle filter box visibility
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className={`fixed bg-gray-500 w-28 p-1 mt-4 mb-12 mr-4 rounded-full right-0 `}>
      <button
        onClick={handleFilterToggle}
        className=" inline-flex items-center text-lg font-medium text-gray-700 hover:text-gray-900"
        type="button"
        aria-expanded={isFilterOpen ? 'true' : 'false'}
        aria-haspopup="true"
      >
        <p className="pl-1 text-xl text-gray-200">Sortera</p>
        <svg
          className={`pt-0.5 pl-1 contrast-more: transform transition-transform duration-300 ${isFilterOpen ? 'rotate-180 ml-2 mt-2' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
        >
          <path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z" />
        </svg>
      </button>
      <div className={`absolute top-full right-1 bg-gray-500 w-56 mt-2 rounded-xl filter-options overflow-hidden transition-all duration-300 ${isFilterOpen ? 'max-h-40' : 'max-h-0'} flex flex-col`}>
        <div className="p-4 space-y-2">
          <label className="block text-white">
            <input type="radio" name="sort" value="low-to-high" /> Pris: Lågt till högt
          </label>
          <label className="block text-white">
            <input type="radio" name="sort" value="high-to-low" /> Price: Högt till lågt
          </label>
          <label className="block text-white">
            <input type="radio" name="sort" value="newest" /> Senaste
          </label>
          <label className="block text-white">
            <input type="radio" name="sort" value="oldest" /> Äldst
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterPopup;
