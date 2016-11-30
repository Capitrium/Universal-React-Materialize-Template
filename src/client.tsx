import * as React from 'react';
import { render } from 'react-dom';
import { browserHistory, match, Router } from 'react-router';
import routes from 'application/routes';

match({ history: browserHistory, routes }, (error, redirectLocation, renderProps) =>
    render(<Router {...renderProps} />, document.getElementById('application'))
);
