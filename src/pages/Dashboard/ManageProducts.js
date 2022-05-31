import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import ProductRow from './ProductRow';

const ManageProducts = () => {
    const { data: products, isLoading, refetch } = useQuery('products', () => fetch('https://desolate-tor-13600.herokuapp.com/product', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='m-7'>
            <h1 className='text-2xl text-center my-2'>Available Product : {products.length} Items</h1>


            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Sl.No.</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Manage</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            products.map((product, index) => <ProductRow
                                key={product._id}
                                product={product}
                                index={index}
                                refetch={refetch}
                            />)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;