import * as React from 'react';
const { Col } = require("react-materialize");

export interface IconBlockProps {
    iconName: string;
    title: string;
    description: string;
    iconColor?: string;
}

const IconBlock = (props:IconBlockProps) => {
    let colorClass = !!props.iconColor ? `${props.iconColor}-text` : '';
    return (
        <Col s={ 12 } m={ 4 }>
            <div className="icon-block">
                <h2 className={ colorClass + ' center' }>
                    <i className="material-icons">{ props.iconName }</i>
                </h2>
                <h5 className="center">{ props.title }</h5>

                <p className="light">{ props.description }</p>
            </div>
        </Col>
    );
};

export default IconBlock;
