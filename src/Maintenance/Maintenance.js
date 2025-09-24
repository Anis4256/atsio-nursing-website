import React from 'react';
import mainten from '../img/UM1.png'
import './Maintenance.css'
function Maintenance() {
    return <>
        <div className="maintenance text-center">
            <img src={mainten} alt="maintenance" data-aos="fade-up" />
            <div className="pp-infobox-title-wrapper">
                <h3 className="pp-infobox-title">THE WEBSITE UNDER MAINTENANCE !</h3>
                <span className="pp-infobox-title-prefix">WE ARE COMING SOON</span>
            </div>
            <div className="pp-infobox-description">
                <p></p>
            </div>
        </div>
    </>
}
export default Maintenance;