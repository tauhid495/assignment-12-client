import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div className='min-h-screen mx-2 my-7'>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    {/* <!-- Page content here --> */}
                    <h1 className='text-3xl text-primary text-center'>Welcome To Dashboard</h1>

                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Menu</label>
                    <Outlet />

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-52 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard'>My Profile</Link></li>
                        {!admin && <li><Link to='/dashboard/myorders'>My Orders</Link></li>}
                        {!admin && <li><Link to='/dashboard/addreview'>Add a review</Link></li>}
                        {admin && <li><Link to='/dashboard/manageallorders'>Manage orders</Link></li>}
                        {admin && <li><Link to='/dashboard/addproduct'>Add products</Link></li>}
                        {admin && <li><Link to='/dashboard/manageproducts'>Manage Products</Link></li>}
                        {admin && <li><Link to='/dashboard/allcustomers'>All Customers</Link></li>}

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;