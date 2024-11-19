import React, { useState } from 'react'

const SearchBar = () => {

    // State to control the filter box visibility and arrow rotation
    const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);

    const handleSearchbarToggle = () => {
        // Toggle filter box visibility
        setIsSearchBarOpen(!isSearchBarOpen);
    };

    return (
        <>
            <div className={`fixed bg-gray-500 w-28 p-1 mt-4 mb-12 mr-4 rounded-full right-32 flex justify-center z-10`}>
                <button
                    onClick={handleSearchbarToggle}
                    className=" inline-flex items-center text-lg font-medium text-gray-700 hover:text-gray-900"
                    type="button"
                    aria-expanded={isSearchBarOpen ? 'true' : 'false'}
                    aria-haspopup="true"
                >
                    <p className="pl-1 text-xl text-gray-200">Sök</p>

                </button>
                <div className={`absolute top-full  bg-gray-500 w-56 mt-2 rounded-xl filter-options overflow-hidden transition-all duration-300 ${isSearchBarOpen ? 'max-h-40' : 'max-h-0'} flex flex-col`}>
                    <div className="p-4 space-y-2">
                        <label className="block text-white">
                            <input type="radio" name="sort" value="low-to-high" /> Pris: Lågt till högt
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchBar
