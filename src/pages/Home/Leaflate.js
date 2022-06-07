import React from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'

const Leaflate = () => {
    return (
        <div className='bg-[url(https://i.ibb.co/Jy3Mq8n/microwave.jpg)] '>
            <div className='hero-overlay bg-[#0c0721] bg-opacity-90 py-16'>
                <div className='md:mx-16 md:flex'>
                    <div className='md:w-7/12 '>
                        <div className="hero h-[380px]  ">
                            <div className=""></div>
                            <div className="text-white p-2">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-5xl">Office Contacts</h1>
                                    <p className="mb-5">Our corporate office is attached with our Manufacturing factory at Chittagong, Bangladesh.</p>

                                    <p>Address: <br /> North Kattoli, Chornel hat, <br /> Chittagong, Bangladesh. </p> <br />

                                    <p>Cell # <br />(+88) 01755338813</p>

                                </div>
                            </div>
                        </div>
                    </div>


                    {/* map section */}
                    <div data-aos="zoom-out" className='md:w-5/12 '>
                        <MapContainer className='z-10 h-[380px]' center={[22.367524, 91.779093]} zoom={13} scrollWheelZoom={false}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[22.367524, 91.779093]}>
                                <Popup>
                                    <span className='text-success'> MOtools Chorporate Office</span> <br /> &<span className='text-secondary'> MOtools Factory.</span>
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Leaflate;