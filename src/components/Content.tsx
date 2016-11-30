import * as React from 'react';
import { Container, ContainerSection } from './ContainerSection';
import IconBlock from './IconBlock';
const { Row, Col, Footer } = require('react-materialize');

const iconBlockRow:Container = {
    children: <Row>
        <IconBlock
            iconName="flash_on"
            title="Speeds up development"
            description="We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers."
        />
        <IconBlock
            iconName="group"
            title="User Experience Focused"
            description="By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience."
        />
        <IconBlock
            iconName="settings"
            title="Easy to work with"
            description="We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize."
        />
    </Row>
};

const firstParallaxContainer:Container = {
    placeholderImage: require("!!image-webpack?{optimizationLevel:7,interlaced:false}!webpack-image-placeholder!../images/background2.jpg").dataUri,
    parallaxImage: require("../images/background2.jpg"),
    parallaxImageAltText: "Unsplashed background img 2",
    children: <Row>
        <Col s={ 12 } className="center">
            <h5 className="header light game-header">A modern responsive front-end framework based on Material Design</h5>
        </Col>
    </Row>
};

const contactRow:Container = {
    children: <Row>
        <h4>Contact Us</h4>
        <p className="left-align light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
        </p>
    </Row>
};

const secondParallaxContainer:Container = {
    placeholderImage: require("!!image-webpack?{optimizationLevel:7,interlaced:false}!webpack-image-placeholder!../images/background3.jpg").dataUri,
    parallaxImage: require("../images/background3.jpg"),
    parallaxImageAltText: "Unsplashed background img 3",
    children: <Row>
        <Col s={ 12 } className="center">
            <h5 className="header light game-header">A modern responsive front-end framework based on Material Design</h5>
        </Col>
    </Row>
};

export default class Content extends React.Component<{}, {}> {

    private year:Number;

    constructor() {
        super();
        this.year = new Date().getFullYear();
    }

    componentDidMount() {
        if ($ !== undefined) {
            $('.parallax').parallax();
        }
    }

    render() {
        return <Col s={ 12 } style={{padding: 0 + 'px'}}>
            <ContainerSection>
                {[
                    iconBlockRow,
                    firstParallaxContainer,
                    contactRow,
                    secondParallaxContainer
                ]}
            </ContainerSection>
            <Footer
                copyrights={ <span>Made by <a className="brown-text text-lighten-3" href="http://materializecss.com">Materialize</a></span> }
                links={
                    <div>
                        <Col l={ 6 } s={ 12 }>
                            <h5 className="white-text">Settings</h5>
                            <ul>
                                <li><a className="white-text" href="#">Link 1</a></li>
                                <li><a className="white-text" href="#">Link 2</a></li>
                                <li><a className="white-text" href="#">Link 3</a></li>
                                <li><a className="white-text" href="#">Link 4</a></li>
                            </ul>
                        </Col>
                        <Col l={ 6 } s={ 12 }>
                            <h5 className="white-text">Connect</h5>
                            <ul>
                                <li><a className="white-text" href="#!">Link 1</a></li>
                                <li><a className="white-text" href="#!">Link 2</a></li>
                                <li><a className="white-text" href="#!">Link 3</a></li>
                                <li><a className="white-text" href="#!">Link 4</a></li>
                            </ul>
                        </Col>
                    </div>
                }>
                <Row>
                    <Col s={ 12 } l={ 6 } style={{padding: 0 + 'px'}}>
                        <h5 className="white-text">Company Bio</h5>
                        <p className="grey-text text-lighten-4">
                            We are a team of college students working on this project like it's our full time job. Any amount would help support and continue development on this project and is greatly appreciated.
                        </p>
                    </Col>
                </Row>
            </Footer>
        </Col>;
    }
}
