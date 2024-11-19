import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from '../components/UserCard'
import FriendBox from '../components/FriendBox';
import { useNavigate } from 'react-router-dom';

const UserPage = () => {
    const [user, setUser] = useState(null);
    const [friends, setFriends] = useState([]);
    const navigate = useNavigate();
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

    // function with 'navigate' for editProfile to send userId as prop
    const HandleEditProfile = () => {
        navigate('/editprofile', { state: { userId, userData: user } })
    }

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

                    {/* friendsBox component */}
                    <FriendBox friends={friends} />

                    {/* edit profile section */}
                    <div>
                        <button
                            onClick={HandleEditProfile}
                            className="bg-red-200 text-black w-full py-4 px-4 rounded shadow-inner hover:bg-red-300 hover:shadow-md">
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
