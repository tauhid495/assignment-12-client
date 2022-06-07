// Complete React Code
import React from 'react';
import './App.css';
import Particles from 'react-particles-js';

function Parti() {
    return (
        <div className="App">
            By Ankit Bansal
            <Particles
                params={{
                    particles: {
                        number: {
                            value: 200,
                            density: {
                                enable: true,
                                value_area: 1000,
                            }
                        },
                    },
                }}
            />

        </div>
    );
}

export default Parti;
