import React from 'react'
import { useQuery } from "react-query";
import Loading from '../../Shared/Loading';
import UserRow from './UserRow';

const AllCustomers = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://assignment-12-server-production.up.railway.app/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='m-10'>
            All customers For make admin {users.length}

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/*  head  */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Customer Email</th>
                            <th>Status</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <UserRow
                                key={user._id}
                                user={user}
                                refetch={refetch}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllCustomers;