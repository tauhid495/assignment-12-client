import React from 'react';
import { ImSpinner9 } from 'react-icons/im';

const Loading = () => {
    return (
        <div>
            <div className="flex justify-center items-center h-screen">
                <div  >
                    <ImSpinner9 className="animate-spin text-secondary inline-block w-12 h-12 rounded-full" />
                </div>
            </div>
        </div>
    );
};

export default Loading;