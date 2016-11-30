import * as React from 'react';
import { Container, ContainerSection } from './ContainerSection';
const { Row, Col, Navbar, NavItem } = require('react-materialize');

const bannerParallaxContainer:Container = {
    placeholderImage: require("!!image-webpack?{optimizationLevel:7,interlaced:false}!webpack-image-placeholder!../images/background1.jpg").dataUri,
    parallaxImage: require("../images/background1.jpg"),
    parallaxImageAltText: "Unsplashed background img 1",
    children: <Row>
        <br/><br/>
        <h1 className="header center teal-text text-lighten-2">Parallax Template</h1>
        <Col s={ 12 } className="center">
            <Row>
                <h5 className="header light">
                    A modern responsive front-end framework based on Material Design
                </h5>
            </Row>
            <Row>
                <a
                    id="download-button"
                    href="http://materializecss.com/getting-started.html"
                    className="btn-large waves-effect waves-light teal lighten-1">Get Started</a>
            </Row>
        </Col>
        <br/><br/>
    </Row>
};

const Banner = () => (
    <Col s={ 12 } style={{padding: 0 + 'px'}}>
        <Navbar id='appBar' className='white' brand="Logo" role='navigation' right>
            <div>
                <NavItem href="#">Navbar Link</NavItem>
            </div>
        </Navbar>
        <ContainerSection>{[ bannerParallaxContainer ]}</ContainerSection>
    </Col>
);

export default Banner;
