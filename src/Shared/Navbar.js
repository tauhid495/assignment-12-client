import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';

const Navbar = () => {

    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
        navigate('/home');
    };


    return (
        <>
            <div className="sticky top-0 z-50 bg-white navbar flex justify-between md:px-16 font-semibold shadow-sm">
                <div className="">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='ml-2'><NavLink to='/' >Home</NavLink ></li>
                            <li className='ml-2'><NavLink to='/myportfolio'>My Portfolio</NavLink></li>
                            <li className='ml-2'><NavLink to='/blogs'>Blogs</NavLink></li>

                            {user && <li className='ml-2'><NavLink to='/dashboard'>Dashboard</NavLink ></li>}

                            {!user && <li className='ml-2'><NavLink to='/register'>Register</NavLink ></li>}

                            {
                                user ? <a onClick={logout} className='ml-2 btn btn-ghost '>LogOut</a>
                                    :
                                    <li className='ml-2'><NavLink to='/login'>Login</NavLink></li>
                            }
                            <div>
                                {user && <a className="btn btn-ghost  ml-2">{user.displayName}</a>}
                            </div>

                        </ul>

                    </div>
                    <Link to='/' className="normal-case text-2xl text-primary">MOtools</Link>
                </div>

                {/* Navbar for dextop */}
                <div className=" hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li className='ml-2'><NavLink to='/' >Home</NavLink ></li>
                        <li className='ml-2'><NavLink to='/myportfolio'>My Portfolio</NavLink></li>
                        <li className='ml-2'><NavLink to='/blogs'>Blogs</NavLink></li>
                        {/* <li tabIndex="0">
                            <a>
                                Parent
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li> */}
                        {user && <li className='ml-2'><NavLink to='/dashboard'>Dashboard</NavLink ></li>}

                        {!user && <li className='ml-2'><NavLink to='/register'>Register</NavLink ></li>}

                        {
                            user ? <a onClick={logout} className='ml-2 btn btn-ghost '>LogOut</a>
                                :
                                <li className='ml-2'><NavLink to='/login'>Login</NavLink></li>
                        }
                        <div>
                            {user && <a className="btn btn-ghost  ml-2">{user.displayName}</a>}
                        </div>
                    </ul>
                </div>

            </div>
        </>
    );
};

export default Navbar;