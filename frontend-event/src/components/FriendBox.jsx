import React from 'react'
import FriendsAll from './FriendsAll'
import { Link } from 'react-router-dom'

const FriendBox = ({ friends }) => {
    return (
        <>
            {/* friend container */}
            <div className="bg-Flesh shadow-lg rounded-lg p-6 max-w-md mx-auto mt-8">

                {/* container for numberofFriends and showAll button */}
                <div className='flex flex-row justify-between'>

                    {/* showing amount friends */}
                    <div>
                        <p className="text-x font-semibold text-gray-800 mb-4">{friends.length} Friends</p>
                    </div>

                    {/*Show all friends button*/}
                    <div>
                        <Link to="/allfriends" state={friends} className='hover:text-white'>
                            Show All
                        </Link>
                    </div>
                </div>

                {/* friend box with friend showing */}
                <div className="grid grid-cols-2 gap-4 w-70 h-70">

                    {friends.slice(0, 4).map((friend, index) => (

                        // a div (card) that will be created for every user-object 
                        <div key={index} className='bg-DarkPurple shadow-md hover:scale-105 rounded-lg p-5 w-[8rem] h-[8rem] mx-auto m-1'>

                            {/* div for friends profileImage. */}
                            <div className='flex justify-center'>
                                <img src={friend.profilePictureUrl} alt="FriendProfilePicture" className="w-12 h-12 rounded-md object-cover border-2 border-purple-500" />
                            </div>

                            {/* div for friends name */}
                            <div className='flex justify-center pt-1 text-white'>
                                <p className='break-words text-center'>{friend.firstName} {friend.lastName}</p>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </>
    )
}

export default FriendBox
