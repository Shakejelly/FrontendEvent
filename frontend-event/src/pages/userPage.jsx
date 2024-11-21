import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import FriendBox from '../components/FriendBox';
import { useNavigate, useParams } from 'react-router-dom';
import FavoriteBox from '../components/FavoriteBox';

const UserPage = () => {
    const [user, setUser] = useState(null);
    const [friends, setFriends] = useState([]);
    const [friendReq, setFriendReq] = useState([])
    const navigate = useNavigate();
    const userId = "73f663e9-f16b-4503-988a-461318f3ebca";
    // const { userId } = useParams(); id bör komma som param från app.jsx sidan?

    useEffect(() => {
        const getUser = async () => {
            try {
                const usern = await axios.get(`https://localhost:7261/api/User/GetUserById?id=${userId}`)
                const friendz = await axios.get(`https://localhost:7261/api/Friendship/ShowAllFriends?userId=${userId}`)
                const requests = await axios.get(`https://localhost:7261/api/Friendship/ShowFriendRequests?userId=${userId}`)
                if (!usern.data) {
                    console.log('Couldnt fetch data!', usern.data)
                } else {

                    setUser(usern.data);
                    setFriends(friendz.data)
                    setFriendReq(requests.data)
                }
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };
        getUser();
    }, [])
    // }, [userId]); borde bytas ut sen när vi använder inskickad id så den kan uppdatera till nya user som kmr in

    // function with 'navigate' for editProfile to send userId as prop
    const HandleEditProfile = () => {
        navigate('/editprofile', { state: { userId, userData: user } })
    }

    return (
        <>
            <div className='ml-11 userPage min-h-screen bg-DarkPurple flex justify-center item-center'>

                {/* container for welcome,profPic, friendContainer */}
                <div className="flex flex-col justify-top items-center mt-4 space-y-4">

                    {user && user.profilePictureUrl ?
                        (<img src={user.profilePictureUrl} alt="ProfilePicture" className="rounded-full w-20 h-20" />)
                        :
                        (<p>No profile picture available</p>)
                    }
                    <h5 className='text-center'>{user ? `${user.firstName} ${user.lastName}` : "Guest"}</h5>

                    {/* edit profile section */}
                    <div>
                        <button
                            onClick={HandleEditProfile}
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-Flesh 
                            rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:purpleContrast 
                            dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-1">
                            Edit profile
                        </button>
                    </div>

                    {/* friendsBox component */}
                    <FriendBox friends={friends} friendReq={friendReq} />

                    {/* favorite Box component */}
                    <FavoriteBox id={userId} />
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
