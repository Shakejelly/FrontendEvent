import axios from 'axios'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

const EditProfile = () => {
    const location = useLocation();
    const userId = location.state?.userId;
    const userData = location.state?.userData;
    const [firstName, setFirstName] = useState(userData?.firstName || "");
    const [lastName, setLastName] = useState(userData?.lastName || "");
    const [nickName, setNickName] = useState(userData?.nickName || "");
    const [phoneNumber, setPhoneNumber] = useState(userData?.phoneNumber || "");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const updateProfileInfo = async (e) => {
        e.preventDefault();
        if (!firstName, !lastName, !nickName, !phoneNumber) { alert('Fill all the fields!'); return; }

        try {
            const updateData = { firstName, lastName, nickName, phoneNumber };
            const response = await axios.post(`https://localhost:7261/api/User/UpdateUser?userId=${userId}`, updateData);
            if (response.status == 200) {
                setSuccessMessage("Succed!");
                console.log(errorMessage)
            }
            else {
                setErrorMessage("Faild to update!")
                console.log(errorMessage)
            }
        } catch (error) {
            console.error("Error updating profile!", userId, error);
            setErrorMessage("An error occurred while updateing profile! Please try again.");
        }
    }

    return (
        <>
            <div className='userPage min-h-screen bg-DarkPurple flex justify-center item-center'>
                <div className="flex flex-col justify-top items-left mt-4 space-y-4 h-[90%]">

                    {/* <div><Link to="/user" className='shadow hover:text-white'>Back</Link></div> */}

                    <form className='flex flex-col'>
                        <label htmlFor="firstName">First name </label>
                        <input
                            onChange={(e) => setFirstName(e.target.value)}
                            value={firstName} type="text" id='firstName' required
                        />

                        <label htmlFor="lastName">Last name </label>
                        <input
                            onChange={(e) => setLastName(e.target.value)}
                            value={lastName} type="text" id='lastName' required
                        />

                        <label htmlFor="nickName">Nickname </label>
                        <input
                            onChange={(e) => setNickName(e.target.value)}
                            value={nickName} type="text" id='nickName' required
                        />


                        <label htmlFor="phoneNumber">Phone number </label>
                        <input
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            value={phoneNumber} type="text" id='phoneNumber' required
                        />
                        <div className='flex items-center justify-between'>
                            <div className='border m-2 rounded hover:scale-95 w-[4rem] text-center'>
                                <Link to="/user">
                                    Back
                                </Link>
                            </div>
                            <div className='border m-2 rounded hover:scale-95 w-[4rem] text-center'>
                                <button
                                    onClick={updateProfileInfo}>
                                    Save
                                </button>
                            </div>
                        </div>

                    </form>
                    {successMessage && <div className="border-2 rounded bg-green-500">{successMessage}</div>}
                </div >
            </div >
        </>
    )
}

export default EditProfile
