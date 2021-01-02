import React from 'react';
import { AiFillYoutube } from 'react-icons/ai';
import { FaGoogle } from 'react-icons/fa';
import { SiAmazon, SiNetflix } from 'react-icons/si';


const Partner = () => {
    return (
        <div className="partner">
            {/* <div className="partner__title">
                Our Team Works With 
            </div> */}
            <div className="partner__company">
                <FaGoogle className="partner__icon" />
                <SiNetflix className="partner__icon" />
                <SiAmazon className="partner__icon" />
                <AiFillYoutube className="partner__icon" />
            </div>
        </div>
    )
}

export default Partner
