import React from 'react';
import BgVideo from "../../../assets/background-video.mp4";

const Advertise = () => {
    return (
        <div className='h-96 w-full my-28'>
            <video autoPlay loop muted className='h-full w-full'>
                <source src={BgVideo} type='video/mp4' />
            </video>
        </div>
    );
};

export default Advertise;