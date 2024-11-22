import React, { useEffect, useState } from 'react'
import axios from 'axios';

const FRequestPopup = ({ friendReq, onClose }) => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        const getFriend = async () => {
            try {
                // Looping through all friend requests and adding userId's to ids (list of ID's)
                const ids = friendReq.map((i) => i.userId)

                // looping through id's then fetching objects from api with matching id and storing in apiResponse
                const apiResponse = await Promise.all(ids.map(id => axios.get(`https://localhost:7261/api/User/GetUserById?id=${id}`)));

                //Looping through apiResponse and taking out the user data and storing in user
                const user = apiResponse.map(response => response.data);

                console.log('kompisar', friendReq.map(id => id.id))

                setFriends(user);

            } catch (error) {
                console.log(error)
            }
        };
        getFriend();
    }, [])

    const acceptHandler = () => {

    }
    return (
        <>
            <div className="fixed z-30 inset-0 flex items-center justify-center bg-flesh bg-opacity-50 transition-opacity duration-300 ease-out animate-fadeIn">
                <div className="relative bg-gray-300 p-1 rounded-lg overflow-y-auto max-h-screen w-auto">
                    <button
                        onClick={onClose}
                        className="absolute top-2 right-2 text-gray-700 hover:text-black"
                        aria-label="Close"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="square" strokeLinejoin="bevel" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {friends.length > 0 ? (
                        friends.map((friend, index) => (
                            <div key={index} className="flex items-center shadow-md w-[17rem] transition-transform rounded-md bg-Flesh p-3 mb-3">
                                <img
                                    src={friend.profilePictureUrl}
                                    alt="FriendProfilePicture"
                                    className="w-12 h-12 rounded-md object-cover border-2 border-purple-500 mr-3"
                                />
                                <p className="text-gray-800">{friend.firstName} {friend.lastName} <span>✅</span> <span>❌</span></p>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-600">No friends found!</p>
                    )}
                </div>
            </div>

        </>
    )
}

export default FRequestPopup
//i friendRq finns det:
// [
//     {
//         "id": 10,
//         "userId": "f255ba33-c204-4486-b01a-388c47e8ad33",
//         "user": {
//             "id": "f255ba33-c204-4486-b01a-388c47e8ad33",
//             "firstName": "Anna",
//             "lastName": "Anka",
//             "nickName": "Ankan",
//             "userName": "anna89",
//             "email": "anna89@example.com",
//             "phoneNumber": null,
//             "profilePictureUrl": "https://img.freepik.com/free-vector/mans-face-flat-style_90220-2877.jpg"
//         },
//         "friendId": "73f663e9-f16b-4503-988a-461318f3ebca",
//         "friend": {
//             "id": "73f663e9-f16b-4503-988a-461318f3ebca",
//             "firstName": "Martin",
//             "lastName": "Karlsson",
//             "nickName": "MatteK",
//             "userName": "martinK",
//             "email": "martin.karlsson@msn.se",
//             "phoneNumber": "0765644049",
//             "profilePictureUrl": "https://img.freepik.com/free-vector/mans-face-flat-style_90220-2877.jpg"
//         },
//         "createdDate": "2024-11-21T09:41:54.7271451"
//     }
// ]