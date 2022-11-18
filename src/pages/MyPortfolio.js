import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='min-h-screen md:px-16'>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <div className='md:w-1/2 p-7'>
                        <img className=' rounded-xl' src="https://i.ibb.co/dprgqg1/IMG-20201228-010229.jpg" />
                    </div>
                    <div className='p-7 md:w-1/2'>
                        <h1 class="text-5xl font-bold">Md. Shahidul Islam</h1>
                        <p class="py-6 text-xl">tauhid495@gmail.com</p>
                        <p class="py-6 text-xl">Educational Backgroudn: <br />
                            S.S.C passing year : 2001, <br />
                            H.S.C passing year : 2003 <br />
                            L.Lb. passing year : 2016
                        </p>
                        <p class="py-6 text-xl">Website Links: <br />
                            <a className='hover:text-primary' href="">https://microwave-e935d.web.app</a> <br />
                            <a className='hover:text-primary' href="">https://assignment-11-18a82.web.app</a> <br />
                            <a className='hover:text-primary' href="">https://assignment-10-30146.web.app</a>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;