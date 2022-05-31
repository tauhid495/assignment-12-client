import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import ProductCard from './ProductCard';

const Products = () => {
    const { data: products, isLoading, refetch } = useQuery('products', () => fetch('https://desolate-tor-13600.herokuapp.com/product', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }
    const homeProducts = products.slice(0, 6);

    return (
        <div className='md:mx-16 my-24'>
            <div className='text-5xl drop-shadow-lg font-bold text-center mb-11'>Our <span className='text-primary'>Hot</span> Products</div>

            <div className='grid md:grid-cols-3 gap-10'>
                {
                    homeProducts.map((product, index) => <ProductCard
                        key={product._id}
                        product={product}
                        index={index}
                        refetch={refetch}
                    />)
                }
            </div>
        </div>
    );
};

export default Products;