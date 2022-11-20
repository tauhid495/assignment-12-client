import React from 'react';
import { toast } from 'react-toastify';

const ProductRow = ({ product, index, refetch }) => {

    const { name, img, _id } = product;

    const handleDelete = (id) => {
        // console.log({_id});
        fetch(`https://assignment-12-server-production.up.railway.app/product/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.deletedCount) {
                    toast.error('Product deleted');
                    refetch();
                }
            })
    }

    return (

        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="avatar">
                    <div className="w-24 mask mask-squircle">
                        <img src={img} />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td><button onClick={() => handleDelete(_id)} className="btn btn-outline btn-error btn-xs ">Delete product</button></td>
        </tr>

    );
};

export default ProductRow;