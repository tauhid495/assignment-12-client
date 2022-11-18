import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import ConfirmModal from './ConfirmModal';

const MyOrders = () => {

    const [deleteOrder, setDeleteOrder] = useState(null);
    const [user] = useAuthState(auth);
    const [userOrder, setUserOrder] = useState([]);

    useEffect(() => {
        if (user) {
            fetch(`https://desolate-tor-13600.herokuapp.com/order?email=${user.email}`)
                .then(res => res.json())
                .then(data => setUserOrder(data))
        }
    }, [user])




    return (
        <div className='mx-7'>
            <p className='text-2xl my-10 text-center'>My orders page</p>


            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Sl.No.</th>
                            <th>Product Name</th>
                            <th>Ordered Quantity</th>
                            <th>Price</th>
                            <th>Payment Status</th>
                            <th>Cancel order</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            userOrder.map((order, index) =>

                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{order.product}</td>
                                    <td>{order.order}</td>
                                    <td>$ {parseFloat(order.price) * parseFloat(order.order)}</td>
                                    <td>
                                        {!order.paid && <Link to={`/dashboard/payment/${order._id}`}>
                                            <button className="btn btn-success btn-xs">Please Pay</button>
                                        </Link>}
                                        {order.paid &&
                                            <button disabled className="btn btn-success btn-xs">Paid</button>
                                        }
                                    </td>


                                    <td>

                                        {!order.paid &&
                                            <label
                                                onClick={() => setDeleteOrder(order)}
                                                htmlFor="delete-order" className="btn btn-error btn-xs">Cancel Order</label>
                                        }
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {deleteOrder && <ConfirmModal deleteOrder={deleteOrder} />}
        </div>
    );
};

export default MyOrders;