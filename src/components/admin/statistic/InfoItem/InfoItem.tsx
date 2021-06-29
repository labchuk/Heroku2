import React from 'react';
import "./InfoItem.scss";

interface InfoItemProps {
    title: string;
    value: string;
    children?: React.ReactChild | React.ReactNode;
}


const InfoItem = ({title, value}: InfoItemProps) => {

    return (
        <div className="InfoItem">
            <h4>{title}</h4><span>{value}</span>
        </div>
    );
};

export default InfoItem;