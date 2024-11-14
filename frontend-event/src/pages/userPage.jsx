import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from '../components/UserCard'

const UserPage = () => {
    const [user, setUser] = useState(null);
    const [friends, setFriends] = useState([]);
    const userId = "73f663e9-f16b-4503-988a-461318f3ebca";
    useEffect(() => {
        const getUser = async () => {
            try {
                const usern = await axios.get(`https://localhost:7261/api/User/GetUserById?id=${userId}`)
                const friendz = await axios.get(`https://localhost:7261/api/Friendship/ShowAllFriends?userId=${userId}`)
                if (!usern.data) {
                    console.log('Couldnt fetch data!', usern.data)
                } else {

                    setUser(usern.data);
                    setFriends(friendz.data)
                }
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };
        getUser();
    }, [])

    return (
        <>
            <div className='userPage min-h-screen bg-DarkPurple flex justify-center item-center'>

                {/* container for welcome,profPic, friendContainer */}
                <div className="flex flex-col justify-top items-center mt-4 space-y-4">


                    {user && user.profilePictureUrl ?
                        (<img src={user.profilePictureUrl} alt="ProfilePicture" className="rounded-full w-20 h-20" />)
                        :
                        (<p>No profile picture available</p>)
                    }
                    <h5 className='text-center'>{user ? `${user.firstName} ${user.lastName}` : "Guest"}</h5>

                    {/* friend container */}
                    <div className="bg-DarkPurple shadow-lg rounded-lg p-6 max-w-md mx-auto mt-8">

                        {/* container for numberofFriends and showAll button */}
                        <div className='flex flex-row justify-between'>

                            {/* showing amount friends */}
                            <div>
                                <p className="text-x font-semibold text-gray-800 mb-4">{friends.length} Friends</p>
                            </div>

                            {/*Show all button*/}
                            <div>
                                <p>Show All</p>
                            </div>
                        </div>

                        {/* friend box with friend showing */}
                        <div className="grid grid-cols-2 gap-4 w-70 h-70">

                            {friends.slice(0, 4).map((friend, index) => (

                                <div key={index} className='bg-DarkPurple shadow-lg rounded-lg p-5 max-w-md mx-auto m-1'>
                                    <div className='flex justify-center'>
                                        <img src={friend.profilePictureUrl} alt="FriendProfilePicture" className="w-12 h-12 rounded-md object-cover border-2 border-purple-500" />
                                    </div>
                                    <div>
                                        <p className='break-words flex'>{friend.firstName} {friend.lastName} </p>
                                    </div>
                                </div>

                            ))}
                        </div>


                    </div>

                    {/* edit profile section */}
                    <div>
                        <button className="bg-red-200 text-black w-full py-4 px-4 rounded shadow-inner hover:bg-red-300 hover:shadow-md">
                            Edit profile
                        </button>
                    </div>
                </div>

                {/* h
                <div className="userCard w-full max-w-sm flex justify-center max-h-96 mt-5 ml-10"> {/* Set a max-width for the card */}
                {/* <UserCard /> */}
                {/* </div> */}

            </div>
        </>

    )
}

export default UserPage
