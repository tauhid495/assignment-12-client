import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase.init';



const ParchaseDetail = ({ order }) => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const { _id, name, description, quantity, minorder, unitprice } = order;


    const onSubmit = (event) => {
        // console.log(event);

        const userOrder = {
            orderId: _id,
            userName: user.displayName,
            email: user.email,
            address: event.address,
            product: name,
            price: unitprice,
            order: event.order,
            phone: event.phone,
        }
        console.log(order);
        fetch('https://motools.onrender.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userOrder)
        })
            .then(res => res.json())
            .then(data => {
                // if (insertedId) {

                // }
                console.log(data);
                toast.success('Order Placed Successfully');
                reset();
                navigate('/')
            })
    };


    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)}>


                <div className="flex flex-col w-full lg:flex-row">
                    <div className='mx-2 md:w-1/2 flex justify-center'>

                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img className='p-4' src={order.img} alt="" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Product name : {name}</h2>
                                <p>Product description : {description}</p>
                                <p>Available Product Quantity : {quantity}</p>
                                <p>Minimum Order Quantity : {minorder}</p>
                                <p>Product price : $ {unitprice} /unit</p>

                            </div>
                        </div>

                    </div>

                    {/* divider */}
                    <div className="divider lg:divider-horizontal"></div>

                    <div className="px-2 md:w-1/2 shadow-xl  card bg-base-100 rounded-box place-items-center">

                        <input type="text" name='name' value={user?.displayName || ''} className="input input-bordered w-full max-w-lg my-3" />

                        <input type="email" name='email' value={user?.email || ''} className="input input-bordered w-full max-w-lg my-3" />

                        {/* Address */}
                        <div className="form-control w-full ">
                            <textarea
                                type="text"
                                placeholder="Address Here"
                                className="input input-bordered w-full max-w-lg my-3 mx-auto"
                                {...register("address", {
                                    required: {
                                        value: true,
                                        message: ' is Required'
                                    }
                                })}
                            />

                            <label className="label">
                                {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                            </label>
                        </div>

                        {/* phone */}
                        <div className="form-control w-full ">
                            <input
                                type="number"
                                placeholder="Your Phone number"
                                className="input input-bordered w-full max-w-lg my-3 mx-auto"
                                {...register("phone", {
                                    validate: {
                                        min: (value) => parseFloat(value) > 0,
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.phone && errors.phone.type === "min" && (
                                    <p className=" ml-5 label-text-alt text-red-500">Please input valid number</p>
                                )}

                            </label>
                        </div>

                        <p className='mt-7'>Set order quantity : </p>

                        <div className="form-control w-full ">
                            <input
                                type="number"
                                placeholder="Minimum order quantity"
                                className="input input-bordered w-full max-w-lg my-3 mx-auto"
                                {...register("order", {
                                    validate: {
                                        min: (value) => parseFloat(value) > minorder,
                                        max: (value) => parseFloat(value) < quantity
                                    }
                                })}
                            />

                            <label className="label">
                                {errors.order && errors.order.type === "min" && (
                                    <p className=" ml-5 label-text-alt text-red-500">Please order minimum quantity</p>
                                )}
                                {errors.order && errors.order.type === "max" && (
                                    <p className="ml-4 label-text-alt text-red-500">Please order within available quantity</p>
                                )}

                            </label>
                        </div>

                        <input disabled={errors.order} className='my-5 btn btn-primary w-full max-w-xs text-white' type="submit" value="Order Now" />
                    </div>
                </div>

            </form>

        </div >
    );
};

export default ParchaseDetail;