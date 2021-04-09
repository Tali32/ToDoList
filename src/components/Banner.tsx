import React from 'react';
import "./Banner.css";
import banner from "../resources/banner.png";

export const Banner: React.FC = () =>{
    return(
        <div className="banner">
            <img src={banner} alt="Banner"/>
        </div>
    );
};