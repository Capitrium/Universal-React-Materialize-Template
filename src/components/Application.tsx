import * as React from 'react';
import Banner from 'components/Banner';

const Application = (props) => (
    <div>
        <Banner />
        {props.children}
    </div>
);

export default Application;
