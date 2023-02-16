import React from 'react';
import BgVideo from "../../../assets/background-video.mp4";

const Advertise = () => {
    return (
        <div>
            <video autoPlay loop muted>
                <source src={BgVideo} type='video/mp4' />
            </video>
        </div>
    );
};

export default Advertise;