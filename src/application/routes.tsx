import * as React from 'react';
import { Route } from 'react-router';
import Application from 'components/Application';

const loadRoute = (callback) => (module) => callback(null, module.default);

const errorLoading = (err) => console.error('Failed to load route', err);

const getContent = (nextState, callback) => new Promise((resolve, reject) => {
        require.ensure([], (require) => {
            const content:any = require('components/Content');
            try {
                resolve(content);
            } catch (err) {
                reject(err);
            }
        }, 'async.content')
    })
    .then(loadRoute(callback))
    .catch(errorLoading);

const routes = <Route component={ Application } >
    <Route path="/" getComponent={ getContent } />
</Route>;

export default routes;
