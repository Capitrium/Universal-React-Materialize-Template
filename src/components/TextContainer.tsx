import * as React from 'react';
const { Row, Col } = require("react-materialize");

export interface ContainerProps {
    children?: React.ReactNode[];
}

const TextContainer = (props:ContainerProps) => {
    return (
        <div className="container">
            <div className="section">
                <Row>
                    <Col s={ 12 } className="center">
                        { props.children }
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default TextContainer;
