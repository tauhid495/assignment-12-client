import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';

import { Link, useNavigate } from 'react-router-dom';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    const [profile, setProfile] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (user) {
            setLoading(true);
            fetch(`https://assignment-12-server-production.up.railway.app/profile?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }

            })
                .then(res => res.json())
                .then(data => {
                    setProfile(data)
                    setLoading(false);
                })

        }
    }, [user])

    // console.log(profile[0].name);

    if (loading) {
        return <Loading />;
    }


    return (
        <div className='flex justify-center md:mx-7 md:p-10'>


            <div className="md:w-1/2 shadow-xl  card bg-base-100 rounded-box place-items-center p-10">

                <p>User Profile</p>
                <input type="text" name='name' value={user?.displayName || ''} className="input input-bordered w-full max-w-lg my-3" />

                <input type="email" name='email' value={user?.email || ''} className="input input-bordered w-full max-w-lg my-3" />

                <input type="text" name='email' value={profile?.address || ''} className="input input-bordered w-full max-w-lg my-3" />

                <input type="text" name='email' value={profile?.phone || ''} className="input input-bordered w-full max-w-lg my-3" />

                <input type="text" name='email' value={profile?.education || ''} className="input input-bordered w-full max-w-lg my-3" />





                <div className='btn btn-primary'><Link to='update'>Update</Link></div>
            </div>
        </div>

    );
};

export default MyProfile;