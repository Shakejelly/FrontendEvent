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
                <div className="flex flex-col justify-top items-center mt-4 space-y-4">
                    <h5 className='text-center'>Welcome {user ? user.firstName : "Guest"}</h5>

                    {user && user.profilePictureUrl ?
                        (<img src={user.profilePictureUrl} alt="ProfilePicture" className="rounded-full w-20 h-20" />)
                        :
                        (<p>No profile picture available</p>)
                    }
                    <div>
                        <p>friends:{friends.length}</p>
                    </div>
                    <div>
                        <button className="w-auto px-2 py-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
                            Edit profile
                        </button>
                    </div>
                </div>


                <div className="userCard w-full max-w-sm flex justify-center max-h-96 mt-5 ml-10"> {/* Set a max-width for the card */}
                    {/* <UserCard /> */}
                </div>
            </div>
        </>

    )
}

export default UserPage
