import React from 'react'
import { useLocation, Link } from 'react-router-dom'

const FriendsAll = () => {
    // using 'uselocation' to fetch 'friends' from parent komponent
    const location = useLocation();
    const friends = location.state || [];

    return (
        <>
            <div className='userPage min-h-screen bg-DarkPurple flex justify-center item-center'>
                <div className="flex flex-col justify-top items-left mt-4 space-y-4 h-[90%]">

                    <div><Link to="/user" className='shadow hover:text-white'>Back</Link></div>

                    {friends.length > 0 ? (friends.map((friend, index) => (

                        <div key={index} className='flex justify-left shadow-md w-[20rem] hover:scale-105 rounded-md'>
                            <div>
                                <img src={friend.profilePictureUrl} alt="FriendProfilePicture" className="w-12 h-12 rounded-md object-cover border-2 border-purple-500" />
                            </div>
                            <div className='flex items-center'>
                                <p>{friend.firstName} {friend.lastName}</p>
                            </div>
                        </div>

                    ))) : (<p>No friends found!</p>)}
                </div>
            </div>
        </>
    )
}

export default FriendsAll

//border-2 border-yellow-500