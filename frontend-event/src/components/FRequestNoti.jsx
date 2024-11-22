import React, { useState } from 'react'
import FRequestPopup from './FRequestPopup';

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
                        {/* picture */}
                        <img className="rounded-full w-10 h-10" src="/src/assets/frienreq.png" alt="Notification Icon" />

                        {/* friend request (badge) */}
                        <div className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold"
                            onClick={handleOpenPopup}>
                            {friendReq.length}
                        </div>
                    </div>
                ) : null}

                {isPopupOpen && (<FRequestPopup friendReq={friendReq} onClose={handleClosePopup} />)}

            </div>
        </>
    )
}

export default FRequestNoti
