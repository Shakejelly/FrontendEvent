import React from 'react'
import UserCard from '../compontents/UserCard'

const userPage = () => {
    return (
        <div className='userPage min-h-screen bg-DarkPurple flex justify-center'>
            <div className="userCard w-full max-w-sm flex justify-center max-h-96 mt-5 ml-10"> {/* Set a max-width for the card */}
                <UserCard />
            </div>
        </div>

    )
}

export default userPage
