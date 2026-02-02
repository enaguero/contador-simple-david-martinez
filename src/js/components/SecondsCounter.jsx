import React from "react";

const SecondsCounter = (props) => {
    
    const digits = props.seconds.toString().padStart(6, "0").split("");

    return (
        <div className="counter-container"> 
            <div className="icon-box"><i className="far fa-clock"></i></div>
            {digits.map((digit, index) => (
                <div key={index} className="digit-box">{digit}</div>
            ))}
        </div>
    );
};

export default SecondsCounter;