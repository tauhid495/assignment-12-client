import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch }) => {

    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`https://motools.onrender.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to add an Admin');
                }
                return res.json()
            })
            .then(data => {

                if (data.modifiedCount > 0) {
                    toast.success('Admin added successfully')
                    refetch();
                }
            })
    }

    return (
        <tr>
            <th>1</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>}</td>
            <td><button className="btn btn-xs">Remove customer</button></td>
        </tr>
    );
};

export default UserRow;