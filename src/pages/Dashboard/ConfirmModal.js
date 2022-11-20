import React from 'react';
import { toast } from 'react-toastify';

const ConfirmModal = ({ deleteOrder }) => {

    const { product, _id } = deleteOrder;


    // delete order
    const handleDelete = (id) => {
        // console.log({_id});
        fetch(`https://assignment-12-server-production.up.railway.app/order/${id}`, {
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
                    // refetch();
                    window.location.reload();
                }
            })
    }

    return (
        <div>

            {/* <!-- Put this part before </body> tag-- > */}
            <input type="checkbox" id="delete-order" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-error text-lg">Really want to cancel order for {product}!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <label htmlFor="delete-order" className="btn btn-primary">Cancel</label>
                        <label onClick={() => handleDelete(_id)} htmlFor="delete-order" className="btn btn-primary">Confirm</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ConfirmModal;