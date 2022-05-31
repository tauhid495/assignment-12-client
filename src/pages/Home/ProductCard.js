import React from 'react';
import { Link, useNavigate } from 'react-router-dom';



const ProductCard = ({ product }) => {
    const navigate = useNavigate();

    const { _id, name, img, description, minorder, quantity, unitprice } = product;

    const navigateToParchase = id => {
        navigate(`/product/${id}`);
    }
    const newDescription = description.slice(0, 150);

    return (
        <div className='relative md:h-96 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out'>
            <div className="h-96 relative overflow-hidden bg-no-repeat bg-cover bg-white rounded-2xl">
                <img src={img} className='' alt="Louvre" />
                <div className="text-white absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-80 transition duration-300 ease-in-out bg-[#070315]">
                    <div className='p-5 mt-1  leading-9'>
                        <p className='text-2xl'> {name}</p>
                        <p>Short Description : {newDescription}</p>
                        <p>Available Quantity : {quantity}</p>
                        <p>Minimum Order Quantity : {minorder}</p>
                        <p>Product Price : $ {unitprice} /unit</p>
                        <button onClick={() => navigateToParchase(_id)} className='btn btn-info btn-outline'>
                            Place Order
                        </button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ProductCard;