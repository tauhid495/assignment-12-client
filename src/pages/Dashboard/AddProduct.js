import React from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

const AddProduct = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imgStorageKey = '4470943a4dde2ce37dd9385350846c7b'

    const onSubmit = (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(upload => {
                if (upload.success) {
                    const img = upload.data.url;
                    const product = {
                        name: data.productname,
                        description: data.shortdescription,
                        minorder: data.minorder,
                        quantity: data.availquantity,
                        unitprice: data.unitprice,
                        img: img,
                    }

                    // sending 
                    fetch('https://desolate-tor-13600.herokuapp.com/product', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)

                    })
                        .then(res => res.json())
                        .then(inserted => {
                            console.log(inserted);
                            if (inserted.insertedId) {
                                toast.success('Product Added')
                                reset();
                            }
                            else {
                                toast.error('Failed to add')
                            }
                        })
                }
            })
    };


    return (
        <div className='flex flex-col justify-center items-center my-10'>
            <h2 className="text-2xl my-2">Add a new product</h2>
            <ToastContainer />
            <form onSubmit={handleSubmit(onSubmit)}>

                {/* product name */}
                <div className="form-control w-full max-w-xs">
                    <input
                        type="text"
                        placeholder="Product Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("productname", {
                            required: {
                                value: true,
                                message: 'Product name is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.productname?.type === 'required' && <span className="label-text-alt text-red-500">{errors.productname.message}</span>}
                    </label>
                </div>

                {/* short description */}
                <div className="form-control w-full max-w-xs">
                    <textarea
                        type="text"
                        placeholder="Short Description"
                        className="input input-bordered w-full max-w-xs"
                        {...register("shortdescription", {
                            validate: (value) => value.length > 8
                        })}
                    />
                    <label className="label">
                        {errors.shortdescription && <p className="label-text-alt text-red-500">Your description is less than 85 characters</p>}
                    </label>
                </div>

                {/* minimum order quantity */}
                <div className="form-control w-full max-w-xs">
                    <input
                        type="number"
                        placeholder="Minimum order quantity"
                        className="input input-bordered w-full max-w-xs"
                        {...register("minorder", {
                            validate: {
                                positiveNumber: (value) => parseFloat(value) > 0,
                            }
                        })}
                    />
                    <label className="label">
                        {errors.minorder && errors.minorder.type === "positiveNumber" && (
                            <p className="label-text-alt text-red-500">Input a positive number</p>
                        )}

                    </label>
                </div>

                {/* Available quantity */}
                <div className="form-control w-full max-w-xs">
                    <input
                        type="number"
                        placeholder="Available quantity"
                        className="input input-bordered w-full max-w-xs"
                        {...register("availquantity", {
                            validate: {
                                positiveNumber: (value) => parseFloat(value) > 0,
                            }
                        })}
                    />
                    <label className="label">
                        {errors.availquantity && errors.availquantity.type === "positiveNumber" && (
                            <p className="label-text-alt text-red-500">Input a positive number</p>
                        )}

                    </label>
                </div>

                {/* Per unit price */}
                <div className="form-control w-full max-w-xs">
                    <input
                        type="number"
                        placeholder="Per unit price"
                        className="input input-bordered w-full max-w-xs"
                        {...register("unitprice", {
                            validate: {
                                positiveNumber: (value) => parseFloat(value) > 0,
                            }
                        })}
                    />
                    <label className="label">
                        {errors.unitprice && errors.unitprice.type === "positiveNumber" && (
                            <p className="label-text-alt text-red-500">Input a positive number</p>
                        )}

                    </label>
                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input
                        type="file"
                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                <input className='btn btn-primary w-full max-w-xs text-white' type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;