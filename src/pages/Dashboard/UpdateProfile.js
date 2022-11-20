import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateProfile = () => {

    const [user] = useAuthState(auth)
    const { register, formState: { errors }, handleSubmit, reset } = useForm();



    const onSubmit = (data) => {

        const profile = {
            name: user.displayName,
            email: user.email,
            address: data.address,
            phone: data.phone,
            education: data.education,
        }

        fetch('https://assignment-12-server-production.up.railway.app/profile', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(profile)

        })
            .then(res => res.json())
            .then(data => {

                if (data.insertedId) {
                    toast.success('Profile Updated')
                }
            })
    }



    return (
        <div className='flex justify-center mx-7 p-10'>


            <form onSubmit={handleSubmit(onSubmit)} >
                <div className="w-96 shadow-xl  card bg-base-100 rounded-box place-items-center p-10">

                    <p>Update Profile</p>
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
                    <div className="form-control w-full ">
                        <textarea
                            type="text"
                            placeholder="Education"
                            className="input input-bordered w-full max-w-lg my-3 mx-auto"
                            {...register("education", {
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


                    <input disabled={errors.order} className='mt-5 btn btn-primary w-full max-w-xs text-white' type="submit" value="Submit" />
                </div>
            </form>
        </div>

    );
};

export default UpdateProfile;