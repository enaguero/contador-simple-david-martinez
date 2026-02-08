import React from "react";
import PropTypes from "prop-types";

const DIGITS_COUNT = 6;

const SecondsCounter = (props) => {
    
    const digits = props.seconds.toString().padStart(DIGITS_COUNT, "0").split("");

    return (
        <div className="counter-container"> 
            <div className="icon-box"><i className="far fa-clock"></i></div>
            {digits.map((digit, index) => (
                <div key={`digit-${index}`} className="digit-box">{digit}</div>
            ))}
        </div>
    );
};

SecondsCounter.propTypes = {
    seconds: PropTypes.number.isRequired
};

export default SecondsCounter;
