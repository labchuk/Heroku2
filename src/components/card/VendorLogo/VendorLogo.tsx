import React from 'react';
import './VendorLogo.scss'

const VendorLogo = (props: any) => {
    return (
        <div className="vendor-logo" onClick={props.handleClick}>
            <img className="vendor-logo__img" src={props.imgLogo} alt="vendor-logo" />
        </div>
    );
};

export default VendorLogo;