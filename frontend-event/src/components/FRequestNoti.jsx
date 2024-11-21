import React, { useState } from 'react'

const FRequestNoti = ({ friendReq }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false)

    const handleOpenPopup = () => {
        setIsPopupOpen(true);
    }
    const handleClosePopup = () => {
        setIsPopupOpen(false);
    }
    return (
        <>
            <div className="flex items-center relative">
                {/* This div will contain incoming friendship requests. */}
                {friendReq.length > 0 ? (
                    <div className="relative">
                        {/* Bilden */}
                        <img className="rounded-full w-10 h-10" src="./src/assets/frienreq.png" alt="notis icon" />

                        {/* Antalet förfrågningar (badge) */}
                        <div className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold"
                            onClick={handleOpenPopup}>
                            {friendReq.length}
                        </div>
                    </div>
                ) : null}

            </div>
        </>
    )
}

export default FRequestNoti
