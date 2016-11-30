import * as React from 'react';
const { Col } = require('react-materialize');
import TextContainer from './TextContainer';
import ParallaxContainer from './ParallaxContainer';

export interface ContainerSectionProperties {
    children?: Container[];
}

export interface Container {
    placeholderImage?: string;
    parallaxImage?: string;
    parallaxImageAltText?: string;
    children?: JSX.Element;
}

const renderPageContainer = (container:Container, index:Number) => {
    const key:string = "container-" + index;
    if (container.parallaxImage) {
        return (
            <ParallaxContainer
                key={ key }
                placeholder={ container.placeholderImage }
                image={ container.parallaxImage }
                altText= { container.parallaxImageAltText }>
                { container.children }
            </ParallaxContainer>
        );
    } else {
        return (
            <TextContainer key={ key }>
                { container.children }
            </TextContainer>
        );
    }
};

const renderContainers = (containers:Container[]) => (
    containers.map((container, index) => renderPageContainer(container, index))
);

export const ContainerSection = (props:ContainerSectionProperties) => (
    <Col s={ 12 } style={{padding: 0 + 'px'}}>
        { renderContainers(props.children) }
    </Col>
);
