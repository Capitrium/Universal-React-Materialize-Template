import * as React from 'react';
const { Row, Col } = require("react-materialize");

export interface ParallaxContainerProps {
    image: string;
    placeholder: string;
    altText?: string;
    imageClassName?: string;
    children?: React.ReactNode[];
}

export interface ParallaxContainerState {
    isMounted: boolean;
}

class ParallaxContainer extends React.Component<ParallaxContainerProps, ParallaxContainerState> {
    constructor(props: ParallaxContainerProps) {
        super(props);
        this.state = { isMounted: false };
    }

    componentDidMount() {
        this.setState({ isMounted: true });
    }

    render() {
        return (
            <div className="parallax-container valign-wrapper">
                <img
                    className={ (this.props.imageClassName ? this.props.imageClassName + " " : "") + "parallax-placeholder" }
                    src={ this.props.placeholder }
                    alt={ this.props.altText }
                    style={{ opacity: (this.state.isMounted ? 0 : 1), position: "absolute" }} />
                <div className="valign-wrapper section no-pad-bot" style={{ position: 'relative', overflow: 'hidden' }}>
                    <Row className="center">
                        <Col s={ 12 }>
                            { this.props.children }
                        </Col>
                    </Row>
                </div>
                <div
                    className={ (this.props.imageClassName ? this.props.imageClassName + " " : "") + "parallax" }
                    style={{ opacity: (this.state.isMounted ? 1 : 0) }}>
                    <img src={ this.props.image } alt={ this.props.altText } />
                </div>
            </div>
        );
    }
}

export default ParallaxContainer;
