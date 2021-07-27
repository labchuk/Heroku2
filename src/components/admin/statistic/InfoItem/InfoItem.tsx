import React from 'react';
import "./InfoItem.scss";

interface InfoItemProps {
    title: any
    value: any

}


const InfoItem: React.FunctionComponent<InfoItemProps> = ({title, value}) => {

    return (
        <div className="InfoItem">
            <h4>{title}</h4><span>{value}</span>
        </div>
    );
};

export default InfoItem;