import React from 'react'
import UserCard from '../compontents/UserCard'

const userPage = () => {
    return (
        <div className='userPage min-h-screen bg-DarkPurple flex justify-center items-center'>
            <div className="userCard w-full max-w-sm flex justify-center items-center"> {/* Set a max-width for the card */}
                <UserCard />
            </div>
        </div>

    )
}

export default userPage
